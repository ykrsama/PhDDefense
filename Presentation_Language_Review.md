# Presentation language review

后续变更：50 MeV migration 页已按用户要求删除。以下审核记录使用删除前页码；原 #35 起现均前移一页。

2026-11-09：用户已批准全部 25 项，下列修改均已落实。页码按当前主报告 47 页编号；B 表示单独的备份册。审查覆盖主报告、14 页备份及流程图、交互矩阵等组件中的文字。论文标题、出版状态、引用、公式、数值、单位、技术名称和图中物理标签不作风格性改写。

使用 humanizer 审查后，主要建议是删除制稿说明、减少重复的页尾结论，并将抽象描述改为具体的实验或软件行为。不是每页都需要改动。以下编号记录本次修改；同一行涉及多个页时已注明。

## 建议优先修改

| 编号 / 页码 | 现有文字 | 建议英文 | 原因 |
| --- | --- | --- | --- |
| P01 / #4 页尾 | Independent observations establish the abundance; the particle identity remains open. | These observations constrain the abundance and distribution of dark matter; its particle identity remains unknown. | “establish the abundance”概括过强；三类证据分别约束丰度和分布。与现有讲稿一致。 |
| P02 / #9 页尾 | A thin tungsten target links a known incident particle to a fully instrumented visible final state. | Measure the incident and recoil momenta, then veto visible energy in the calorimeters. | “fully instrumented”容易暗示完整接受度；改为具体测量行为。 |
| P03 / #15 贡献标注 | Candidate-led: | My contributions: | 答辩用第一人称更自然。后面的贡献清单保持不变。 |
| P04 / #20 页尾 | The largest saving comes from avoiding events and information that the target analysis does not need. | Early rejection reduces transport time, output rate and storage. | “largest”没有在这页分解比较中得到证明；直接对应表内资源指标。 |
| P05 / #25 页脚 | Candidate contribution: ACTS sequencer, geometry/field adapters and reconstruction interfaces. | My contributions: ACTS sequencer, geometry/field adapters and reconstruction interfaces. | 与 #15 的第一人称贡献说明一致。 |
| P06 / #28 引用末尾 | Original cross-section plot. | 删除这句，保留 X. Zhu et al., arXiv:2609.05900. | 属于素材来源处理说明，不是答辩内容。 |
| P07 / #35 标题 | Migration contributes to the selected signal | Signal migration at 90 MeV | 与前页 50 MeV 的标题成对，直接标明比较条件。 |
| P08 / #35 页尾 | At 90 MeV, annihilation dominates; each reconstructed region retains cross-feed. | At 90 MeV, non-resonant annihilation supplies about 95% of SR2; resonant annihilation supplies about 84% of SR3. | 用已有矩阵结果替代含糊的“retains cross-feed”，避免暗示各通道贡献相当。 |
| P09 / #36 页尾 | Zero survivors in the sample require a residual-background extrapolation. | No simulated events survive the full selection; the residual background is estimated by extrapolation. | 表述本研究实际采用的方法，避免把外推说成零存活样本唯一允许的处理方式。 |
| P10 / #47 页脚 | Publication status reproduced from the supplied List of Research Achievements. | 删除整句；保留各论文条目中的出版状态。 | 制稿过程说明；与条目中已有状态重复。 |

## 可选的语言精简

| 编号 / 页码 | 现有文字 | 建议英文 / 操作 | 原因 |
| --- | --- | --- | --- |
| P11 / #5 页尾 | Light dark matter motivates complementary laboratory searches. | 删除整句。 | 泛化过渡句；下一页已经介绍互补搜索，不增加本页约束信息。 |
| P12 / #7 页尾 | A minimal benchmark connects a production rate to an experimentally measurable energy deficit. | Invisible dark-photon production gives a missing-energy signature. | 把抽象“connects”改为可测信号。模型假设和公式仍保留在正文。 |
| P13 / #17 页尾 | Reduce work per transported event before increasing the scale of production. | Geometry navigation and event-record optimisation reduce CPU and storage costs. | 原句像通用建议；改成这一页实际展示的结果。 |
| P14 / #22 验证说明 | Efficiency agreement within 5% in the stated validation. | Detection efficiencies agree within 5% for the tested optical configuration. | 明确比较对象和验证范围。 |
| P15 / #23 正文 | Detailed optical and parameterised response paths serve different production needs. | The production configuration selects the detailed optical or parameterised response. | “different production needs”较空泛；改为实际选择方式。 |
| P16 / #28 正文 | Bound-electron motion broadens the stationary-electron picture. | Bound-electron motion broadens the annihilation kinematics. | “picture”含糊；改为物理对象。 |
| P17 / #34–35 矩阵侧栏 | Production → observation | Production → selected signal | 当前是预期信号事件数，不是实际观测数据；“selected signal”更精确。 |
| P18 / #38 表头及页尾 | Tail construction / The nominal backgrounds rely on continuation from populated sidebands into empty tails. | Extrapolation method / Background yields are extrapolated from populated sidebands to the final selection thresholds. | 用常见实验表述替代“construction”“continuation into empty tails”。表内数值不改。 |
| P19 / #40 页尾 | The radiative endpoint contribution is essential to the combined result. | 删除整句。 | 右栏已经说明非共振湮灭在此质量点给出最强单通道投影；“essential”重复强化但不增加信息。 |
| P20 / #43 页尾 | The gain is conditional on the production, detector-response and statistical assumptions. | 删除整句。 | 本页右栏已逐项列出这些限制，完整保留右栏即可。 |
| P21 / #45 页尾 | The framework provides the connection between detector assumptions and the projected physics reach. | 删除整句。 | 两栏已经总结框架及物理结果，页尾再次概括没有新增结论。 |
| P22 / #46 页尾 | Changing the beam energy moves the annihilation scale and motivates further detector-level studies. | The annihilation mass scale varies as the square root of the beam energy. | 用已有公式和讲稿中的明确关系替代“motivates further studies”。 |

## 备份册

| 编号 / 页码 | 现有文字 | 建议英文 / 操作 | 原因 |
| --- | --- | --- | --- |
| B01 / 全部 14 页页脚 | Sources: supplied dissertation and positron-study figures. Publication and production assumptions retained. | 删除通用页脚。保留图内引用和具体文献；如另需新增逐页来源，单独按真实出处填写。 | “supplied”“assumptions retained”是制稿说明；该通用句也无法定位具体来源。本轮不编造引用。 |
| B02 / B2 页尾 | A later software feature does not retroactively change the analysis production. | The positron projection uses baseline 1; later geometry developments belong to a separate software configuration. | 原句像纠正读者，改成清楚的配置边界。 |
| B03 / B7–B9 页尾 | Each efficiency uses its own generated channel–mass sample as the denominator. | Each efficiency is normalised to the generated sample for that channel and mass. | “channel–mass sample”不自然；分开说明通道和质量点。 |

## 建议保留

- #30 的三个独占信号区、#33 的九组效率、#34–35 的全部矩阵数值是真实分析结构，不能因“列了三项”而删减。
- #32 的阈值、#37 的侧带验证范围、#39 的低计数渐近近似、#41 的 expected sensitivity、#42 的模型假设、#43 的待验证事项均有科学意义。保留这些限定，避免把预期灵敏度写成已观测排除。
- #47 的论文题名与出版状态不作 humanizer 风格改写。
- 公式、eV/MeV/GeV、粒子名称、软件标识和箭头所表达的流程关系保持不变。

## 已完成的讲稿修改

`Speaker_Notes.md` 与主报告 presenter notes 已同步改写，`deck-manifest.json` 中仅更新 notes 字段。主报告 44 页的讲稿有语言修改，其余 3 页无需改写。备份 B2 的 presenter notes 也作了语言精简；其他非空备份 notes 保留了必要的物理限定，空 notes 未新增。

改写保留数值、贡献归属、科学限定及原有每页时间，计划总时长仍为 45 分钟。时间字段是排练预算，不代表已通过朗读验证。讲稿审查阶段未修改可见内容；用户批准后，已按本清单更新正文，保留现有布局、动画和物理数据。
