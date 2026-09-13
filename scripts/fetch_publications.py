"""
Google Scholar 论文数据爬取脚本

使用前需要安装依赖：
pip install scholarly

注意：Google Scholar 可能会限制访问频率，建议：
1. 使用代理或 VPN
2. 添加适当的延迟
3. 或者考虑使用 DBLP API 作为替代方案
"""

from scholarly import scholarly
import json
import time

def fetch_publications_from_scholar(author_name):
    """
    从 Google Scholar 获取作者的论文列表

    Args:
        author_name: 作者姓名，例如 "Junzuo Lai"
    """
    try:
        # 搜索作者
        print(f"正在搜索作者: {author_name}")
        search_query = scholarly.search_author(author_name)
        author = next(search_query)
        print(f"找到作者: {author['name']}")
        print(f"机构: {author.get('affiliation', 'N/A')}")

        # 获取完整的作者信息（包括所有论文）
        print("正在获取论文列表...")
        author = scholarly.fill(author, sections=['publications'])

        publications = []

        for idx, pub in enumerate(author['publications'], 1):
            print(f"处理第 {idx} 篇论文...")

            # 获取论文详细信息
            pub_detail = scholarly.fill(pub)
            bib = pub_detail['bib']

            # 提取论文信息
            publication = {
                'id': f"pub-{idx}",
                'title': bib.get('title', ''),
                'authors': bib.get('author', '').split(' and '),
                'venue': bib.get('venue', bib.get('journal', 'Unknown')),
                'year': int(bib.get('pub_year', 0)),
                'type': 'conference' if 'conference' in bib.get('venue', '').lower() else 'journal',
                'abstract': bib.get('abstract', ''),
                'scholar': pub_detail.get('pub_url', ''),
                'citations': pub_detail.get('num_citations', 0),
            }

            publications.append(publication)

            # 添加延迟以避免被限制
            time.sleep(2)

        # 按年份降序排序
        publications.sort(key=lambda x: x['year'], reverse=True)

        # 保存为 JSON 文件
        output_file = 'publications_raw.json'
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(publications, f, ensure_ascii=False, indent=2)

        print(f"\n成功获取 {len(publications)} 篇论文")
        print(f"数据已保存到: {output_file}")
        print("\n请检查数据，然后更新到 lib/data/publications.ts")

        return publications

    except Exception as e:
        print(f"错误: {e}")
        print("\n提示：如果遇到访问限制，可以尝试：")
        print("1. 使用 DBLP API 替代（见下方 fetch_publications_from_dblp 函数）")
        print("2. 手动从 Google Scholar 页面复制数据")
        return None


def fetch_publications_from_dblp(author_name):
    """
    从 DBLP 获取作者的论文列表（更稳定的方案）

    Args:
        author_name: 作者姓名，例如 "Junzuo Lai"
    """
    import requests
    import xml.etree.ElementTree as ET

    try:
        # DBLP API 搜索作者
        search_url = f"https://dblp.org/search/author/api?q={author_name}&format=json"
        print(f"正在搜索作者: {author_name}")

        response = requests.get(search_url)
        data = response.json()

        if 'result' not in data or 'hits' not in data['result']:
            print("未找到作者")
            return None

        # 获取第一个匹配的作者
        author_hit = data['result']['hits']['hit'][0]
        author_info = author_hit['info']
        author_url = author_info['url']

        print(f"找到作者: {author_info['author']}")
        print(f"DBLP URL: {author_url}")

        # 获取作者的论文列表
        print("正在获取论文列表...")
        pub_url = f"{author_url}.xml"
        pub_response = requests.get(pub_url)

        # 解析 XML
        root = ET.fromstring(pub_response.content)
        publications = []

        for idx, item in enumerate(root.findall('.//*[@key]'), 1):
            if item.tag in ['article', 'inproceedings', 'proceedings']:
                title_elem = item.find('title')
                year_elem = item.find('year')
                venue_elem = item.find('journal') if item.tag == 'article' else item.find('booktitle')

                if title_elem is not None and year_elem is not None:
                    authors = [author.text for author in item.findall('author')]

                    publication = {
                        'id': f"pub-{idx}",
                        'title': title_elem.text,
                        'authors': authors,
                        'venue': venue_elem.text if venue_elem is not None else 'Unknown',
                        'year': int(year_elem.text),
                        'type': 'journal' if item.tag == 'article' else 'conference',
                        'dblp_key': item.get('key'),
                    }

                    publications.append(publication)

        # 按年份降序排序
        publications.sort(key=lambda x: x['year'], reverse=True)

        # 保存为 JSON 文件
        output_file = 'publications_dblp.json'
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(publications, f, ensure_ascii=False, indent=2)

        print(f"\n成功获取 {len(publications)} 篇论文")
        print(f"数据已保存到: {output_file}")
        print("\n请检查数据，然后更新到 lib/data/publications.ts")

        return publications

    except Exception as e:
        print(f"错误: {e}")
        return None


if __name__ == "__main__":
    print("=" * 60)
    print("论文数据爬取工具")
    print("=" * 60)
    print("\n请选择数据源：")
    print("1. Google Scholar (可能需要代理)")
    print("2. DBLP (推荐，更稳定)")
    print("3. 退出")

    choice = input("\n请输入选项 (1/2/3): ").strip()

    if choice == "1":
        author_name = input("请输入作者英文姓名 (例如: Junzuo Lai): ").strip()
        if author_name:
            fetch_publications_from_scholar(author_name)
    elif choice == "2":
        author_name = input("请输入作者英文姓名 (例如: Junzuo Lai): ").strip()
        if author_name:
            fetch_publications_from_dblp(author_name)
    else:
        print("已退出")
