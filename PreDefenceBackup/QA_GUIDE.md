# 答辩追问与支撑材料

主报告不变。备份页英文，讲稿中的讲述用 I、工作用 we；没有 Time 或 Source context。原有 2–14 页保持编号，新页从 15 开始。第 1 页可点击跳转。

## 优先准备

| 评委可能的问题 | 支撑页 | 回答重点 |
|---|---:|---|
| 为什么选择 positron？90 MeV 为什么好？ | 23、12、7–9 | 截面、可见末态和效率共同决定增益，不能只说共振增强。 |
| biasing 会不会改物理？bias factor 能当权重吗？ | 15–19 | 有限厚度、竞争过程与饱和；率拟合与末态形状检验分开回答。 |
| effective POT 怎么算？ | 3、20 | attempts、generator acceptance 和物理概率的分母不同。 |
| cutflow 为 0 为什么还给本底预测？ | 21、10–11、14 | 有限模拟曝光不等于零本底；名义值来自 sideband continuation。 |
| 1 MeV threshold 是否现实？ | 25 | ECAL 高增益噪声模型和 HCAL 阈值假设分开说明。 |
| 3 个 region 是否重叠？migration 是否漏掉了？ | 7–9、12、24 | 用重建量分类，每个 region 求和所有产生通道。 |
| filter 是否漏掉有用相空间？ | 22 | 宽松 cut 不自动证明无偏，需要核查 truth/reco 边界迁移。 |
| 背景少到 10⁻⁴ 时渐近统计方法还可靠吗？ | 14、21 | 说明使用的方法及待做的低计数覆盖检验；不声称已经完成 toy validation。 |
| 总体软件提速多少？ | 27 | 不同设置下的 time、storage、throughput 不相乘。 |
| ACTS 用真值种子，算真实重建效率吗？ | 13 | reference chain 的 truth-smeared seed 与全 hit-based seeding 区分。 |
| 原子电子运动、共振宽度、生成 cuts 怎么设？ | 28–29；sources/calchep | 以 condor-script 为 production 依据，区分 CalcHEP 率计算与 detector 输入。 |
| 每核和每电子的截面怎么转事件数？ | 24 | 核与电子的 areal density 不同，Z 因子只计一次。 |
| 改 αD、质量比或 invisible BR 结果怎样变？ | 26 | ε² 缩放与 y 坐标依赖指定 benchmark。 |

## 新增页：口头回答及来源

### 15. 为什么不能将生成事件数直接除以 bias factor？

[Why is the bias factor not an event weight?](slides/15-bias-probability.md)

We scale the rare-process cross section by a bias factor b. The probability of that process happening also depends on competing interactions and the distance available in the material. This 1-dimensional model assumes constant effective cross sections along that distance. We fit the scan and evaluate the probability at b = 1. The pool is the set of eligible particles above the bias-energy cut. The pool fraction then converts the conditional probability into a rate per incident particle. This rate-calibration method is separate from Geant4 track-weight bookkeeping.

证据：X. Zhu, Y. Zhang, Biasing study, 25 Jun. 2024, pp. 3–5, 14.

### 16. Ntotal、Npool、Nrare 和最终存储事件数有什么区别？

[Which events enter the biasing normalisation?](slides/16-bias-counters.md)

We count incident events, eligible events and rare interactions separately. Only some rare events pass the output filters. In this study, we allow at most 1 biased interaction per event and record the counters in truth_cutflow. We fit the rare-to-pool ratio before interpreting the final-state acceptance. A fit made after a truth trigger describes a conditional selected sample, so it cannot simply be read as the unfiltered process rate.

证据：Biasing study, pp. 4–5, 11, 15. Historical study counters.

### 17. 靶很薄，截面比是否等于发生概率？为什么 target 和 ECAL 不一样？

[Does the finite target thickness matter?](slides/17-bias-gmm.md)

These are the original GMM (photon conversion to a muon pair) scans from the 2024 study. The upper panels show the rare-to-pool probability and the lower panels show the simulation-to-fit ratio. In the target, an eligible photon can escape before interacting. In the ECAL (Electromagnetic Calorimeter), it has more material to cross. This explains why a branching-ratio approximation works differently in the 2 regions. The displayed fit parameters and uncertainties belong to this historical configuration; they are not the positron-campaign calibration.

证据：Biasing study, pp. 6–7; original plots retained.

### 18. 如何检查 biasing 没有改变物理？这些拟合证明了什么？

[What does the photonuclear scan test?](slides/18-bias-pn.md)

PN (photonuclear) interactions show the same rise and saturation. We compare the conditional interaction probability across the bias scan with the fitted model. Agreement here does not by itself validate all secondary-particle spectra or the final background tail. We also compare dedicated samples with inclusive production where there are enough events. The rates on these plots belong to the 2024 study and are not substituted for the positron sample normalisations.

证据：Biasing study, pp. 6–7; original plots retained.

### 19. biasing 和 inclusive 的一致性能达到什么程度？

[How well did the early rate comparison agree?](slides/19-bias-validation.md)

The original rate table is useful because it also shows the discrepancies. GMM (photon conversion to a muon pair), PN (photonuclear) and EN (electronuclear) rates were compared with an inclusive sample of about 10⁷ events. Some ratios differ substantially from 1. A zero observed count in the rarest sample does not measure a zero rate. We do not turn these historical ratios into a systematic uncertainty for the later positron campaign. The campaign uses its own normalisation and inclusive checks, shown in the main report and the other backups.

证据：Biasing study, p. 9. Values rounded from the original rate table.

### 20. 给一个带数值的 effective POT 和归一化例子？

[How is a biased sample scaled to the exposure?](slides/20-normalisation-example.md)

For PN (photonuclear) production in the ECAL (Electromagnetic Calorimeter), the campaign convention gives 1.48 × 10¹¹ effective POT (Positrons On Target). We obtain it from 10⁸ generation attempts, an acceptance of 0.2738 and a process branching ratio of 1.85 × 10⁻⁴. The benchmark exposure is about 2,030 times larger. That exposure factor scales the selected prediction. It does not recover a tail from a sample with no surviving events, and it is not the cross-section bias factor. The full process table is on backup 3.

证据：X. Zhu et al., arXiv:2609.05900; campaign normalisation table.

### 21. 最终 cutflow 全是 0，为什么还要外推？零存活能给什么上限？

[Does zero survival prove a background-free search?](slides/21-empty-samples.md)

No surviving simulated event is not enough to claim a background-free search. As a simple counting illustration, 0 observed events corresponds to an upper Poisson mean of 2.30 at 90% confidence. Scaling the inclusive exposure to the benchmark gives a very weak bound of about 2.76 × 10⁵ events. This calculation assumes an ideal unweighted Poisson sample with known exposure. It is not a substitute for the profile-likelihood construction or a bound to apply blindly to weighted samples. It explains why the study uses sideband extrapolation for its nominal prediction.

证据：Campaign exposure: arXiv:2609.05900. Poisson illustration calculated here.

### 22. generator-level filter 是否会偏置最终 selection 或漏掉 signal-like events？

[Can the production filters remove useful events?](slides/22-filter-support.md)

The production energy and momentum cuts are looser than the final analysis cuts. That is useful, but it is not by itself a proof that the filters have no effect. A truth quantity can differ from its reconstructed counterpart, and the 0-track categories need their own bookkeeping. We check the actual production definitions and the response near the boundaries. We also keep the filter acceptance with the sample. Any excluded phase space is absent from the prediction and cannot be recovered by reweighting.

证据：Positron production filters and fixed region definitions, arXiv:2609.05900.

### 23. 为什么 90 MeV 特别好？为什么不是共振过程单独主导？

[Why is the gain concentrated near 90 MeV?](slides/23-annihilation-scale.md)

For an 8 GeV positron and an electron at rest, the centre-of-mass energy is about 90.4 MeV. The photon energy in the centre-of-mass frame tends to 0 as the mediator mass approaches this value. This helps non-resonant annihilation pass a low-visible-energy selection. The detector-level efficiencies still determine the accepted yield. Bound-electron motion changes the ideal stationary-electron picture; the specific implementation should be checked against the production configuration rather than inferred from the illustration.

证据：X. Zhu et al., arXiv:2609.05900; 2-body kinematics.

### 24. 产生截面如何变成最终 signal yield？Z 因子有没有重复计算？

[Do nuclei and electrons have the same luminosity?](slides/24-luminosity.md)

We use the number of scattering centres per unit target area. Nuclear bremsstrahlung uses nuclei; annihilation uses atomic electrons. For the same foil, the electron areal density is Z times the nuclear one. We include this factor once, according to how the cross section is defined. We then multiply the rate by the invisible branching fraction and the channel-to-region efficiency. The 10⁵ generated events per mass point determine that efficiency, not the physical event count. Electron-versus-positron comparisons use the same beam count and target. No running-year conversion is needed.

证据：Dissertation target-luminosity and response-matrix definitions; arXiv:2609.05900.

### 25. 1 MeV veto 是否现实？电子学噪声、pileup、通道数的影响在哪里？

[What supports the 1 MeV cell thresholds?](slides/25-thresholds.md)

The ECAL (Electromagnetic Calorimeter) high-gain model gives an equivalent electronic noise of about 2.7 keV per channel. That provides context for a 1 MeV cut, but it does not determine the full probability of a noise-induced veto across many channels. The HCAL (Hadronic Calorimeter) threshold is an assumed performance in this campaign, which does not include complete noise and pileup digitisation. We would test the thresholds with prototype data and propagate the measured response into signal efficiency and background rejection.

证据：DarkSHINE calorimeter design/readout studies; positron-analysis response assumptions.

### 26. 为什么用一个 signal strength？暗耦合、branching ratio 或模型变了怎么办？

[When does the signal scale with epsilon squared?](slides/26-coupling-scaling.md)

At fixed mass and with the invisible branching fraction close to 1, the benchmark production rates scale approximately with epsilon squared. We can therefore use a common signal-strength parameter. For the thermal comparison, we choose alpha D = 0.5 and a mediator-to-dark-matter mass ratio of 3, which gives y equal to epsilon squared divided by 162. These are benchmark assumptions. A change in the decay branching fraction or lifetime can change the visible signature and the acceptance. A separate off-shell model should not be inferred from the on-shell efficiency samples.

证据：Vector-portal benchmark and thermal-target definition, arXiv:2609.05900.

### 27. 软件总共快了多少倍？不同 benchmark 可以相乘吗？

[Can the software speed-up factors be multiplied?](slides/27-software-benchmarks.md)

We quote these benchmarks separately because they measure different costs and use different configurations. Geometry navigation changes the Geant4 simulation time per event. Event-record optimisation changes storage. Filtering changes the number of costly events that we finish and write. The thread comparison uses 8 execution units on both sides, so it does not measure scaling from 1 core. The optical result compares full tracking with a lookup table. We can assess the total production cost only with an end-to-end benchmark under a common setup.

证据：DSS_716, pp. 7, 11, 13, 15; optical study by Qibin Liu.

### 28. CalcHEP 到底生成了什么过程？束流、耦合和生成 cuts 怎么设？

[What do the saved CalcHEP configurations show?](slides/28-generator-config.md)

I can show the archived batch settings and the corresponding output headers. We found 8 GeV bremsstrahlung and radiative-annihilation batches requesting 10⁵ events. The calcHEP directory also has an 8 GeV multi-process batch containing a dark-matter-pair process, but it requests only 10 events. The diagramC example is a 4 GeV test. These records verify what those files specify. For detector production, we use the baseline 1, 8 GeV configurations in condor-script. The next page shows how each signal channel is implemented in Geant4.

证据：Read-only bl0 configuration snapshots, 9 Nov. 2026; see sources/calchep.

## 素材来源与使用边界

- [BiasingStudy.pdf](public/qa/BiasingStudy.pdf)：逐字节保存原始文件，原文件位于 `/Users/xuliang/Documents/DarkSHINE-Slides/BiasingStudy.pdf`。作者 Xuliang Zhu、Yulei Zhang；封面日期 2024-06-25。第 17–18 备份页使用原 PDF 第 6–7 页的图表裁切，没有改动曲线、数字、误差或坐标。
- Biasing 原报告第 9 页保留了 inclusive/fit 偏差；第 15 页明确写出 truth-trigger 后的拟合参数不具备所声称的物理含义。备份中没有把这些后选择拟合解释成未筛选物理率。
- 2024 biasing 图是历史方法证据，不能代替 positron campaign 的具体 branching ratios；后者来自 `PhDThesis/contents/positron_analysis.tex` 的背景样本表。
- 原始 physics 图 `public/figures/xsections.pdf` 及对应 SVG 来自正电子研究，已有备份资产保留。
- `PhDThesis/contents/analysis_methodology.tex`：靶 luminosity、核/电子 scattering centres、response matrix。
- `PhDThesis/contents/positron_analysis.tex`：生成样本、切选、本底外推、噪声假设和统计方法。运行年数未搬入备份。
- `PhDThesis/contents/simu_reco.tex`、`acts_reconstruction.tex`、`Refs/DSS_716.pptx`：软件实现与 benchmark。
- [CalcHEP 配置核对记录](sources/calchep/README.md)：远端原路径、配置与实现快照。源文件 SHA-256 见 manifest.json；用户已确认 condor-script 为 production 目录。

未新增物理模拟或拟合。第 21 页的 2.30 与 2.76×10⁵ 是明确标注的理想 Poisson 示例；不替代正式似然或 weighted-sample 区间。

## 29. 信号如何在 Geant4 中实现？

[配置与实现](slides/29-transport-config.md)：新增 baseline1 8 GeV 独立作业配置和不可见共振信号实现的证据。production 目录为用户确认的 suntong/condor-script；配置原文与历史生成器参数记录见 sources/calchep/README.md。
