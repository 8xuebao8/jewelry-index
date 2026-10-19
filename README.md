# 宝石物性检索 3.1 / Gem Property Finder 3.1

此文件夹是 3.1 的静态发布副本，包含当前已保存的 103 项手动校对数据。无需安装依赖或构建。
This is a standalone static copy of version 3.1, including 103 saved, manually reviewed records. No dependencies or build step are required.

## 上传 / Upload

将本文件夹里的文件上传到 GitHub 仓库根目录（让 index.html 位于根目录）。然后在仓库 Settings → Pages 中选择从分支部署，选择对应分支及根目录。
Upload the contents of this folder to the repository root, with index.html at the root. In Settings → Pages, deploy from the selected branch and root folder.

## 包含功能 / Features

- Chart A / 全部 / Chart B；RI、SG、颜色、光性、透明度及 LW/SW 筛选。
- 选择 ADR 按 SR 搜索；拼合石始终放在最后。
- 默认按 RI、SG 与标称值的综合相对偏差排序；区间取中点，独立读数取最近值。
- 展开按钮右侧分别显示 RI、SG 匹配百分比。这不是鉴定正确率；Range 和测量误差仍用于筛选。
- Chart selection and RI, SG, colour, optical character, transparency and LW/SW filters.
- ADR searches SR; assembled stone remains last.
- Default equal-weight relative-distance ranking against nominal RI/SG values, using interval midpoints or the nearest separate reading.
- Separate RI/SG matching percentages, not identification probabilities; source ranges and measurement tolerances still control inclusion.

## 数据与发布说明 / Data and publishing notes

review-overrides.js 包含已应用的手动校对数据，必须一起上传。本文件夹是独立快照，今后本地校对修改不会自动更新到 GitHub。
review-overrides.js contains applied manual corrections and must be uploaded. This is a snapshot; future local edits will not automatically update GitHub.

未包含校对台、数据库、草稿、修改日志、备份、原图或测试。请勿另外上传这些私人工作文件。
The editor, database, drafts, logs, backups, source photos and tests are excluded. Do not add those private working files.

原始资料来自 GIA Gem Property Chart A、B（© 1992 The Gemological Institute of America）。公开发布前请确认转载和使用权限。本工具用于课堂参考，不是 GIA 官方软件，也不能替代完整鉴定。
Source material: GIA Gem Property Charts A and B, © 1992 The Gemological Institute of America. Confirm redistribution rights before public publication. This classroom reference is not official GIA software and does not replace full gemological identification.
