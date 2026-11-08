# DarkSHINE PhD Dissertation Defence

**Design of DarkSHINE Simulation Framework and Prospective Study of Positron-Beam Mode**  
Xuliang Zhu · Supervisor: Shu Li · Shanghai Jiao Tong University  
10th Nov. 2026

本项目包含英文正式报告 **47 页 / 45:00**，以及独立的 **14 页备份册**。正式报告最后一页为 **Research Achievements**。每页讲稿与配时已写入 Slidev presenter notes，同时提供 `Speaker_Notes.md` 和 `Timing.md`。

## 交付文件

- `Defence/`：主报告 Slidev 源码。
- `Backup/`：单独备份册源码。
- `site/`：已构建的静态网站，首页链接主报告、备份册及两个 PDF。
- `output/pdf/DarkSHINE_PhD_Defence.pdf`：主报告静态 PDF。
- `output/pdf/DarkSHINE_PhD_Defence_Backup.pdf`：备份册静态 PDF。
- `PROVENANCE.md`：直接复用的 EveNet 文件、改编组件和图表来源。
- `CONTENT_NOTES.md`：关键物理口径和样本定义。
- `VALIDATION.md`：构建、逐页排版、交互和 PDF 核查记录。

## 本地运行

需要 Node.js 22 或更新版本。依赖版本由 `package-lock.json` 锁定。

```sh
npm ci
npm run dev -- Defence --port 3046
# 另一终端运行备份册：
npm run dev -- Backup --port 3047
```

打开终端显示的 localhost 地址。左右方向键翻页，`f` 全屏，`p` 打开演讲者视图；科学图表可点击放大，`Esc` 关闭。流程图不需要逐项点击。动画尊重系统 reduced-motion 偏好；网址加 `?static=1#/1` 可固定动画。

## 静态构建与预览

```sh
npm run build:site
npm run preview
```

预览地址为 `http://127.0.0.1:8800`。所有图片、字体、KaTeX 和脚本均在构建内；相对路径和 hash 路由允许把整个 `site/` 放在 GitHub Pages 的任意项目路径下。请通过 HTTP 服务打开，避免直接双击 HTML 所产生的浏览器模块限制。

## GitHub Pages

`.github/workflows/pages.yml` 在推送到 `main` 分支时自动触发，同时保留手动触发入口。将本目录作为仓库根目录推送后，在 GitHub 的 **Settings → Pages → Source** 选择 **GitHub Actions**，之后每次推送到 `main` 都会自动运行 **Deploy defence presentation**，也可在 Actions 页面手动运行。工作流重新构建网页，并通过 Chromium 从静态站点生成两个 PDF；PDF 和交付压缩包无需进入 Git。也可直接部署现成的 `site/` 目录。

本次未执行 git push，也未触发任何部署。若把项目置于现有仓库的子目录，请相应调整 workflow 的工作目录与上传路径。

## 编辑与重新导出

直接编辑 `Defence/slides/*.md` 或 `Backup/slides/*.md`，Vue 图形位于 `Defence/components/`，排版微调位于 `Defence/styles/defence.css`。前者已经是可独立构建的源项目，不依赖原始论文目录。

`scripts/write_deck.py` 的初始生成器已停用，以保护逐页修订；请直接编辑 Markdown。`scripts/write_backup.py` 会重建备份册，使用前请保存修改。`scripts/prepare_assets.py` 仅在从相邻论文目录重新提取原图时使用，普通构建不需要运行。

先构建静态站点并在另一个终端运行 `npm run preview`，再导出 PDF：

```sh
npx playwright install chromium
node scripts/export-pdf.mjs http://127.0.0.1:8800/defence output/pdf/DarkSHINE_PhD_Defence.pdf 47
node scripts/export-pdf.mjs http://127.0.0.1:8800/backup output/pdf/DarkSHINE_PhD_Defence_Backup.pdf 14
npm run build:site
```

如需指定浏览器，可设置 `CHROMIUM_PATH`。PDF 使用 980 × 552 CSS 像素画布，逐页冻结动画后合并；正文可选择复制，物理图来自原 PDF 的矢量转换，3D Canvas 为高分辨率静态帧。修改网页后请同步重新导出 PDF。

## 修订版交互

第 34 页矩阵可用鼠标悬停或键盘聚焦查看生成数与选后数；第 35 页可选择 SR 并悬停柱形读取精确计数。所有单元格与柱形默认完整显示，PDF 保留完整矩阵与直方图。第 10 页保留左表右图的原始结构。

`output/`、`deliverables/` 均仅保留在本地并由 `.gitignore` 忽略。重新生成交付压缩包：`python3 scripts/package-deliverables.py`。
