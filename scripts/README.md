# 论文数据爬取说明

## 方式一：使用 DBLP API (推荐)

DBLP 更稳定，不需要代理，适合学术论文检索。

```bash
cd scripts
pip install -r requirements.txt
python fetch_publications.py
# 选择选项 2 (DBLP)
# 输入: Junzuo Lai
```

这会生成 `publications_dblp.json` 文件。

## 方式二：使用 Google Scholar

Google Scholar 数据更全，但可能需要代理或 VPN。

```bash
cd scripts
pip install scholarly
python fetch_publications.py
# 选择选项 1 (Google Scholar)
# 输入: Junzuo Lai
```

## 方式三：手动查找

如果自动爬取遇到问题，可以：

1. 访问 https://dblp.org/
2. 搜索 "Junzuo Lai"
3. 手动复制论文信息到 `lib/data/publications.ts`

或者：

1. 访问 https://scholar.google.com/
2. 搜索赖俊祚教授
3. 查看个人主页，复制论文列表

## 更新到网站

获取到 JSON 数据后：

1. 打开生成的 `publications_dblp.json` 或 `publications_raw.json`
2. 复制数据到 `lib/data/publications.ts`
3. 按照 TypeScript 格式调整
4. 添加额外信息（PDF 链接、项目页面等）

示例格式：

```typescript
export const publications: Publication[] = [
  {
    id: 'pub-2026-1',
    title: 'Paper Title Here',
    authors: ['Author 1', 'Author 2', 'Junzuo Lai'],
    venue: 'ACM CCS 2026',
    year: 2026,
    type: 'conference',
    pdf: 'https://example.com/paper.pdf', // 手动添加
    project: 'https://example.com/project', // 手动添加
    abstract: 'Abstract here...',
  },
  // ... 更多论文
];
```

## 注意事项

- DBLP 主要收录会议和期刊论文，预印本可能不包含
- Google Scholar 数据更全但可能包含重复或不准确的条目
- 建议获取数据后人工审核一遍
- PDF 链接、项目页面等需要手动添加
