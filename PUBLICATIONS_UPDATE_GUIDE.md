# 科研成果更新指南

## 如何更新赖俊祚教授的论文数据

由于网络限制，无法自动爬取谷歌学术数据。请按以下步骤手动更新论文信息：

### 1. 访问学术数据库

推荐访问以下数据库获取准确信息：

- **谷歌学术**: https://scholar.google.com/citations?user=赖俊祚的用户ID
- **DBLP**: https://dblp.org/search?q=Junzuo%20Lai
- **IACR ePrint**: https://eprint.iacr.org/search?q=Junzuo+Lai
- **Semantic Scholar**: https://www.semanticscholar.org/author/Junzuo-Lai/

### 2. 需要收集的信息

对于每篇论文，需要收集：

1. **标题** (title)
2. **完整作者列表** (authors) - 按论文中的顺序
3. **发表刊物/会议** (venue) - 例如：CRYPTO 2024, IEEE TIFS, IACR ePrint
4. **年份** (year)
5. **类型** (type) - conference / journal / preprint
6. **DOI链接** (doi) - 优先使用DOI，格式如 https://doi.org/10.1007/xxx
7. **可选链接**:
   - PDF链接 (pdf)
   - 代码链接 (code)
   - 项目主页 (project)
   - Google Scholar链接 (scholar)

### 3. 更新文件

编辑文件：`lib/data/publications.ts`

#### 示例格式：

```typescript
{
  id: 'pub-2024-1',
  title: '论文完整标题',
  authors: ['作者1', '作者2', '作者3', '作者4', '作者5'],  // 完整作者列表
  venue: '会议或期刊名称',
  year: 2024,
  type: 'conference',  // 或 'journal' 或 'preprint'
  doi: 'https://doi.org/10.1007/xxx',  // DOI链接
  abstract: '摘要内容（可选）',
  scholar: 'https://scholar.google.com/xxx',  // 谷歌学术链接（可选）
}
```

### 4. 页面显示规则

- **作者显示**: 自动显示前4位作者，超过4位时显示 "and X more authors"
- **DOI优先**: DOI链接会显示为第一个按钮
- **高亮作者**: "Junzuo Lai" 会自动加粗显示
- **年份分组**: 论文自动按年份倒序分组

### 5. 近五年论文筛选

只需添加 2020-2025 年的论文即可。

### 6. 当前需要补充的信息

以下论文标记为 "Collaborator A/B/C" 的需要补充完整作者列表：

1. pub-2025-1: Highly Efficient Actively Secure Two-Party Computation
2. pub-2025-2: Striking the Balance between Security and Efficiency
3. pub-2024-1: Lattice-Based Timed Cryptography
4. pub-2023-1: Asymmetric Group Message Franking
5. pub-2022-1: Anonymous Public Key Encryption under Corruptions
6. pub-2022-2: Lattice Codes for Lattice-Based PKE

### 7. 查找作者信息的技巧

1. 在谷歌学术中搜索论文标题
2. 点击论文进入详情页
3. 复制完整的作者列表
4. 查找DOI链接（通常在论文详情中）
5. 确认发表刊物的完整名称

### 8. 测试更新

更新后运行：
```bash
npm run dev
```

访问 http://localhost:3000/publications 查看效果

---

## 常见问题

**Q: 如何找到DOI？**  
A: 在论文的出版页面（如IEEE Xplore, ACM Digital Library, Springer）通常会显示DOI。

**Q: ePrint论文有DOI吗？**  
A: IACR ePrint使用URL作为标识符，格式为 https://eprint.iacr.org/YYYY/NNN

**Q: 如何区分conference和journal？**  
A: Conference如CRYPTO, EUROCRYPT, CCS；Journal如IEEE TIFS, Journal of Cryptology

**Q: 作者姓名格式？**  
A: 使用论文中的英文全名，保持原始大小写
