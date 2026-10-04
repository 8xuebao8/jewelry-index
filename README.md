# 宝石物性检索 / Gem Property Finder

离线静态课堂工具。将 `index.html` 和 `gem-data.js` 放在同一文件夹，直接用浏览器打开 HTML 即可；不依赖外部服务。  
Offline classroom tool. Keep `index.html` and `gem-data.js` together and open the HTML in a browser. No external services required.

## 数据 / Data

根据用户提供的两张 GIA Gem Property Chart A（© 1992 The Gemological Institute of America）照片，人工转录并对照核对编号 1–64 的印刷字段。每个材料可单独展开纯文字中英文详情：颜色类别、透明度、现象、RI Norm / Range / 点测、双折射率、光性、晶系、多色性、光谱星号、紫外荧光、SG、硬度、断口／解理／裂理、完整备注。原表空白与人工译文明确区分；可辨认的相关手写批注另列，不混入印刷数据。  
All 64 printed entries were manually transcribed and checked against the supplied photographs. Per-material bilingual text details retain the source fields, spectrum grades and comments. Source blanks remain explicit; Chinese translations and separately recorded handwriting are editorial.

这是历史课堂参考资料，不是现行鉴定标准，也不是 GIA 官方软件。手写内容不是原表印刷数据。原表中的酸液、热针、重液、溶剂及牙齿接触仅为历史记录，不是实验操作建议。  
Historical classroom reference, not current standards or official GIA software. Historical destructive or hazardous tests are descriptions, not instructions.

## 筛选 / Filtering

- 同组多选按 OR，不同组按 AND；测量值留空跳过。 / OR within a group, AND across groups; blank readings skip filtering.
- RI 与 SG 先计算原表范围，再与测量值 ± 独立误差区间相交。 / Apply source variation before intersecting with the independent measurement interval.
- 例如锆石 RI：1.925–1.984，Range +0.040 / −0.145，因此筛选范围为 1.780–2.024；仪器误差另外叠加。 / Zircon's source RI interval is 1.780–2.024 before measurement tolerance.
- 青金石的 1.670、1.500 是独立读数，不把两者之间全部算作匹配。 / Lapis readings are discrete, not a continuous interval.
- 拼合石的 Any 保留为可能候选。 / Assembled stones with Any remain possible candidates.
- 颜色分常见、少见及修饰色；筛选包含全部三类。原表 P 与 V 分别保留为 Purple（紫）、Violet（蓝紫），不把 P 误写成 Pink。 / Common, uncommon and modifying colours are included; P and V remain distinct.
- ADR 取自原表备注；光性栏或备注的 AGG 均纳入。 / ADR and additional AGG reactions are taken from source comments.
- 小眼睛折叠不删除行号；再次点击或“恢复全部”可恢复。 / The eye folds a row without removing its number; click again or Restore all.
- SG 计算器使用空气重量 ÷（空气重量 − 水中重量），显示和填入三位小数。 / The SG calculator uses air weight ÷ (air weight − immersed weight), to three decimals.

## 部署 / Deployment

网页运行只需要 `index.html` 和 `gem-data.js`。GitHub Pages 部署时两者都要上传；不需要上传 HEIC 原图、`assets`、测试文件。原图请本地保留供后续核对。发布前请自行确认原表内容的使用与转载权限。  
Deploy both runtime files together to GitHub Pages. Source HEIC photos, assets and tests are not required for hosting. Retain originals locally and confirm permission before publicly redistributing the chart content.

## 检查 / Checks

执行 `node tests.cjs`：检查 64 条记录、双语字段、数值范围、独立误差、多选筛选、折叠恢复、详情及 SG 计算。测试无第三方依赖。  
Run `node tests.cjs` for dependency-free data and interaction checks.
