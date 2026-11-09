# CalcHEP 与 detector production 配置核对

2026-11-09 只读检查 `bl0`。没有修改远端文件、运行生成器或提交作业。所保存的是文本配置、源文件和有界的输出头；没有复制大 LHE/ROOT 样本。

## 确认到的内容

| 路径（相对 /lustre/collider/suntong） | 可验证事实 |
|---|---|
| `diagramA/E8_0.090GEV_file` | `E,Tg->E,Ap,Tg`；p1=8，p2=0；epsilon=1；10⁵ events；mTg=184、zTg=72、aTg=184。 |
| `diagramA/batch_results/...single.lhe` 输出头 | mTg=184、zTg=72 确实出现在输出头，不只是模板默认值。 |
| `diagramA/models/vars6.mdl` | 默认 mTg=171、zTg=74；与 batch override 不同。 |
| `diagramB/E8_0.090GEV_file` 及输出头 | `E,e->Ap,A`；8 GeV，stationary target electron；epsilon=1；mAp=0.090；10⁵ events；CalcHEP 3.8.10。 |
| `diagramC/E4_0.090GEV_file` | `E,e->dM,DM`；4 GeV；2 events；不能当作 8 GeV detector efficiency sample。 |
| `calcHEP/E8_0.090GEV_file` | 8 GeV 多过程 batch，包含 χχ̄、γA′、中微子和 μ 对；10 events；mDM≈0.03 GeV；wAp=0.00217480 GeV。 |
| `calcHEP/run.sh` | 指定 mDM≈mAp/3，wAp=mAp×0.0241648；脚本本身不能证明最终 detector campaign 使用这些值。 |
| `calcHEP/models/vars6.mdl` | gD=1；不能自动等同于 thermal plot 中 αD=0.5。 |
| `condor-script/jobconf` | 指向 baseline1.0/e+_E8_W_noECALBField/sch；23 个质量点；8 workers × 12,500 beam events。 |
| `condor-script/run/.../sch/j14/default.yaml` | 独立作业配置：8 GeV e⁺、60 MeV、signal_PESch=true、signal_use_LUT=false、visible_decay=false、beam_on=12500。 |
| `condor-script/config/.../{brem,tch}.yaml` | signal_use_LUT=true；分别指向 bremLUT_W_E8_1e5.root、tchLUT_W_E8_1e5.root。 |
| `darkshine-simulation/.../PositronSchProcess.cc` | PostStepDoIt 创建单个不可见 A′，方向为 incidentDir，终止入射正电子；未调用类中的 LUTRandom。 |

## Production 依据与历史测试的区别

用户于 2026-11-09 确认 `suntong/condor-script` 为 production 目录。备份页以该目录的 baseline 1、8 GeV 配置为 detector production 依据。

- `sch.yaml` 和独立作业 `sch/j14/default.yaml` 均关闭 signal LUT、启用 resonant signal、关闭 visible decay。
- `brem.yaml` 和 `tch.yaml` 分别引用 bremLUT_W_E8_1e5.root、tchLUT_W_E8_1e5.root。
- CalcHEP 中的 χχ̄ rate/test batches 与 detector transport 的不可见 A′ 实现承担不同任务。
- 原始 `diagramA` batch 和输出头的 zTg=72、mTg=184 按原样保存；模型默认 zTg=74、mTg=171 也保留。备份页不将历史 batch override 改写成 tungsten 的物理常数。
- 所查 CalcHEP A/B batch 中 `p2=0`、`pdf2=OFF`，没有显式 Cut 条目。A 中的 regularisation 是积分设置，不能混同于 detector selection。
- `config.txt` 中的重建列表按原文保存；本次只补充 backup，没有据此修改主报告中的贡献与重建说明。

## 搜索范围

检查了 diagramA/B/C、calcHEP，并向上搜索 suntong 的 DarkSHINECalchep、generator、condor-script、run/runPositron、positron8GeV、darkshine-simulation 等相关路径。也按用户要求检查了 `/lustre/collider` 上层的相关目录名称，未据其他人的无关文件作推断。

## 快照使用

`manifest.json` 记录远端原路径、本地相对路径和 SHA-256。输出头文件单独标注为 excerpt。保留原文中的参数、拼写和注释；不要执行快照脚本。
