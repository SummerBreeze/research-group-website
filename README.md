# 赖俊祚教授课题组网站

暨南大学网络空间安全学院赖俊祚教授课题组官方网站。

## 项目结构

```
research-group-website/
├── app/
│   ├── components/       # 通用组件
│   │   ├── Header.tsx    # 导航栏
│   │   └── Footer.tsx    # 页脚
│   ├── page.tsx          # 首页
│   ├── research/         # 研究方向页面
│   ├── team/             # 团队成员页面
│   ├── publications/     # 科研成果页面
│   └── join-us/          # 招生招聘页面
├── lib/
│   └── data/             # 数据文件
│       ├── team.ts       # 团队成员数据
│       ├── research.ts   # 研究方向数据
│       └── publications.ts # 论文数据
└── docs/
    └── design-guidelines.md # 设计规范
```

## 技术栈

- **框架**: Next.js 16 (App Router)
- **样式**: Tailwind CSS 4
- **字体**: Inter
- **语言**: TypeScript

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm build

# 启动生产服务器
npm start
```

访问 http://localhost:3000 查看网站。

## 页面说明

### 首页 `/`
- 课题组介绍
- 研究方向概览
- 代表性成果
- 团队成员预览
- 招生招聘信息

### 研究方向 `/research`
- 大模型与智能体安全
- 认知安全
- 后量子密码

### 团队成员 `/team`
- 导师信息
- 博士后、博士生、硕士生
- 成员照片、简介、联系方式

### 科研成果 `/publications`
- 按年份倒序展示
- 论文标题、作者、会议/期刊
- PDF、项目页面、代码等链接

### 招生招聘 `/join-us`
- 博士后招聘详情
- 研究生招生信息
- 申请方式和联系方式

## 待完成工作

### 1. 更新真实数据

当前使用的是 Mock 数据，需要更新为真实信息：

**团队成员** (`lib/data/team.ts`)
- 添加真实成员信息
- 上传成员照片到 `public/images/team/`
- 更新成员个人主页和 Google Scholar 链接

**科研成果** (`lib/data/publications.ts`)
- 从 Google Scholar 或 DBLP 获取赖老师的论文列表
- 可以使用以下工具爬取：
  - Google Scholar: `scholarly` Python 库
  - DBLP: 使用 DBLP API (https://dblp.org/faq/How+to+use+the+dblp+search+API.html)
- 添加论文缩略图到 `public/images/publications/`
- 添加 PDF 链接、项目页面等

**研究方向** (`lib/data/research.ts`)
- 根据课题组实际研究内容调整描述
- 添加更多关键词和研究细节

### 2. 添加图片资源

创建以下目录并添加图片：
```
public/
├── images/
│   ├── team/          # 团队成员照片
│   ├── publications/  # 论文缩略图
│   └── research/      # 研究方向配图（可选）
└── logo.svg           # 课题组 Logo（可选）
```

### 3. 国际化支持（可选）

如需支持中英文切换：
1. 安装 `next-intl` 或使用 Next.js 内置的国际化
2. 在 `lib/data/` 中添加英文版本数据
3. 更新导航栏的语言切换功能

### 4. SEO 优化

- 添加 `sitemap.xml`
- 添加 `robots.txt`
- 在各页面添加 OpenGraph meta 标签
- 添加 Google Analytics（可选）

### 5. 爬取论文数据示例

可以创建一个脚本来自动获取论文数据：

```python
# scripts/fetch_publications.py
from scholarly import scholarly
import json

# 搜索作者
author = scholarly.search_author_id('YOUR_SCHOLAR_ID')
author = scholarly.fill(author)

publications = []
for pub in author['publications']:
    publications.append({
        'title': pub['bib']['title'],
        'authors': pub['bib']['author'].split(' and '),
        'venue': pub['bib'].get('venue', ''),
        'year': int(pub['bib'].get('pub_year', 0)),
        'scholar': pub.get('pub_url', ''),
    })

# 保存为 JSON
with open('publications.json', 'w', encoding='utf-8') as f:
    json.dump(publications, f, ensure_ascii=False, indent=2)
```

## 设计原则

网站遵循学术简洁风格，详见 `docs/design-guidelines.md`：

- 内容优先，可读性优先
- 使用充足留白
- 保持学术专业感
- 避免过度设计

## 部署

可以部署到：
- **Vercel** (推荐): 零配置部署
- **Netlify**: 简单易用
- **自托管**: 使用 `npm run build && npm start`

## 联系方式

如有问题或建议，请联系：
- 邮箱: laijunzuo@jnu.edu.cn
