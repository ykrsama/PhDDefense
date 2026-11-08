from pathlib import Path
import json,shutil,html,re
R=Path(__file__).resolve().parents[1];D=R/'Backup';A=json.loads((R/'asset-manifest.json').read_text());slides=[]
def L(s):return '<LaTeX formula="'+html.escape(s,quote=True)+'" />'
def plot(k,c='',size='plot-large'):return '<div class="'+size+'"><Plot src="'+A[k]['display']+'" caption="'+html.escape(c,quote=True)+'"/></div>'
def add(slug,title,body,note=''):slides.append((slug,title,body,note))
add('index','Backup for the dissertation defence','''<div class="columns"><div><h2 class="blue">Detector and software</h2><p>Baseline 1 and evolved geometry</p><p>ACTS implementation details</p><h2 class="gold" style="margin-top:25px">Sample bookkeeping</h2><p>Dedicated background normalisation</p><p>Complete background cutflows</p></div><div><h2 class="rose">Signal and inference</h2><p>All nine efficiency curves</p><p>Benchmark signal yields</p><p>Two-dimensional background extrapolation</p><p>Statistical and response assumptions</p></div></div><div class="takeaway">Xuliang Zhu · PhD Dissertation Defence · 10th Nov. 2026</div>''')
add('configurations','Reference detector and evolved software geometry','''<table><tr><th>Feature</th><th>Positron analysis</th><th>Evolved software description</th></tr><tr><td>Configuration</td><td>baseline 1, positron branch</td><td>master development line</td></tr><tr><td>ECAL</td><td>20×20×11, non-staggered</td><td>21×21×11, staggered</td></tr><tr><td>Crystal size</td><td>2.5×2.5×4.0 cm³</td><td>2.5×2.5×4.0 cm³</td></tr><tr><td>HCAL</td><td>Original uniform-absorber concept</td><td>70×1 cm + 18×5 cm Fe layers</td></tr><tr><td>Physics comparison</td><td>Matched to published electron benchmark</td><td>Detector/reconstruction development</td></tr></table><div class="takeaway">A later software feature does not retroactively change the analysis production.</div>''','The reference geometry and the evolved implementation are deliberately kept separate. The positron result uses the same detector basis as the published electron comparison.')
rows=[['PN ECAL','1.85×10⁻⁴','10⁸','27.38%','1.48×10¹¹'],['Annihil Target','2.93×10⁻⁵','10⁸','99.00%','3.38×10¹²'],['EN ECAL','4.27×10⁻⁶','10⁸','1.38%','3.23×10¹¹'],['GMM ECAL','1.35×10⁻⁶','10⁸','27.27%','2.02×10¹³'],['PN Target','1.32×10⁻⁶','10⁸','6.59%','4.99×10¹²'],['EN Target','5.28×10⁻⁷','10⁸','1.47%','2.78×10¹²'],['GMM Target','1.39×10⁻⁸','10⁷','6.57%','4.73×10¹³']]
table='<table class="compact-table"><tr>'+''.join('<th>'+x+'</th>' for x in ['Sample','Branching ratio','Attempts','Generator acceptance','Effective POT'])+'</tr>'+''.join('<tr>'+''.join('<td>'+x+'</td>' for x in row)+'</tr>' for row in rows)+'</table>'
add('normalisation','Dedicated sample normalisation',table+'<div class="formula-band">'+L(r'N_{\mathrm{POT}}^{\mathrm{eff}}=N_{\mathrm{attempt}}\epsilon_{\mathrm{gen}}/\mathcal B')+'</div><p class="small muted">Generator acceptance is fractional in the equation. Attempts, generator acceptance and stored cutflow entries have different definitions.</p>')
# Exact raw counts transcribed from the supplied dissertation tables.
cutflows=[
('SR1',['Tag = 1','Recoil = 1','ΔP > 4 GeV','HCAL sum','HCAL max','ECAL sum'],[
['PN ECAL',5794358,4641895,3114535,272207,88871,0],['PN Target',5386830,455540,429175,11831,2459,0],['EN Target',1326519,117549,114845,977,206,0],['Annihil Target',288943,5595,5466,201,60,0],['GMM ECAL',9331661,8842313,6123627,6,6,0],['EN ECAL',124241,99812,58,5,2,0],['GMM Target',663576,20,0,0,0,0],['Inclusive',1470635,1359999,570317,7175,2077,0]]),
('SR2',['Tag = 1','Recoil = 0','ECAL max ≥1','HCAL sum','HCAL max','ECAL sum'],[
['PN ECAL',5794358,138513,138513,8051,2552,0],['Annihil Target',288943,20649,20569,768,241,0],['PN Target',5386830,5391,5391,162,40,0],['EN Target',1326519,1633,1633,8,0,0],['GMM ECAL',9331661,67950,67950,0,0,0],['EN ECAL',124241,0,0,0,0,0],['GMM Target',663576,0,0,0,0,0],['Inclusive',1470635,9240,9208,178,53,0]]),
('SR3',['Tag = 1','Recoil = 0','ECAL sum','HCAL sum','HCAL max','ECAL max <1'],[
['PN ECAL',5794358,138513,120147,3922,1096,0],['PN Target',5386830,5391,4176,66,14,0],['EN Target',1326519,1633,1554,2,0,0],['GMM ECAL',9331661,67950,67950,0,0,0],['Annihil Target',288943,20649,1111,0,0,0],['GMM Target',663576,0,0,0,0,0],['EN ECAL',124241,0,0,0,0,0],['Inclusive',1470635,9240,8390,61,11,0]])]
for name,heads,rows in cutflows:
 table='<table class="cut-table"><tr><th>Sample</th>'+''.join('<th>'+h+'</th>' for h in heads)+'</tr>'+''.join('<tr><td>'+str(r[0])+'</td>'+''.join('<td>'+f'{x:,}'+'</td>' for x in r[1:])+'</tr>' for r in rows)+'</table>'
 add(name.lower()+'-cutflow',name+' background cutflow',table+'<p class="small">HCAL sum &lt; 100 MeV; HCAL max &lt; 1 MeV. ECAL sum &lt; '+('2.5' if name=='SR1' else '2')+' GeV.</p><div class="takeaway">Cumulative unweighted counts, after production filtering. Zero survivors do not establish a zero physical rate.</div>')
for region,cut in [('SR1','bremCut'),('SR2','tchCut'),('SR3','schCut')]:
 add(region.lower()+'-efficiency',region+': efficiencies of all production mechanisms','<div class="columns thirds">'+''.join('<div><h2 class="'+col+'">'+name+'</h2>'+plot('efficiency_'+mode+'_'+cut,name,'plot-large')+'</div>' for mode,name,col in [('brem','Bremsstrahlung','blue'),('tch','Non-resonant','gold'),('sch','Resonant','rose')])+'</div><div class="takeaway">Each efficiency uses its own generated channel–mass sample as the denominator.</div>')
add('joint-tail','SR3: joint ECAL-threshold extrapolation','<div class="columns"><div>'+plot('sr3-tail','PN ECAL','plot-mid')+'</div><div>'+plot('sr3-target','PN target','plot-mid')+'</div></div><div class="formula-band" style="font-size:19px">'+L(r'f(x,y)=a\{\exp[1-by\exp(-c(x-d))]-1\}')+'</div><p class="small">'+L(r'x=E_{\mathrm{ECAL}}^{\mathrm{MaxCell}}\text{ threshold},\quad y=E_{\mathrm{ECAL}}^{\mathrm{total}}\text{ threshold}')+'. Both in MeV.</p>','Evaluate at x=1 and y=2000. The joint continuation retains the dependence between total and maximum-cell energies; it is not a product of independent one-dimensional efficiencies.')
add('inclusive-tail','Inclusive comparisons and tail-model dependence','<div class="columns"><div>'+plot('inclusive1','Inclusive SR1 survival trend','plot-large')+'</div><div>'+plot('inclusive2','Inclusive SR2 survival trend','plot-large')+'</div></div><div class="takeaway">Inclusive: '+L(r'g(x)=e^{a+bx}')+'. Dedicated: '+L(r'f(x)=e^{a+b\ln x}')+'. Different extrapolations can agree in a populated interval.</div>','The displayed annotation in the inclusive SR2 source figure is not the nominal background estimate at the 2 GeV working point. Nominal inputs come from the dedicated estimates.')
yieldrows=[['10','Brems.','0.173','0.115','0.00843','0.00889'],['10','Non-res.','0.00743','4.97×10⁻⁵','0.00265','0.000526'],['10','Res.','0.0179','4.27×10⁻⁵','0.00220','0.0153'],['50','Brems.','0.00605','0.00386','0.000456','0.000550'],['50','Non-res.','0.0116','8.19×10⁻⁵','0.00439','0.000605'],['50','Res.','0.0351','8.00×10⁻⁵','0.00438','0.0299'],['90','Brems.','0.00137','0.000850','0.000111','0.000142'],['90','Non-res.','1.96','0.0389','1.74','0.114'],['90','Res.','0.705','0.00156','0.0870','0.601']]
add('yields','Produced and selected benchmark yields','<p class="small">'+L(r'\epsilon^2=10^{-12},\quad N_{\mathrm{POT}}=3\times10^{14}')+'</p><table class="compact-table"><tr>'+''.join('<th>'+h+'</th>' for h in ['Mass [MeV]','Mode','Produced','SR1','SR2','SR3'])+'</tr>'+''.join('<tr>'+''.join('<td>'+x+'</td>' for x in row)+'</tr>' for row in yieldrows)+'</table>')
add('acts-details','ACTS interfaces and implementation scope','<div class="formula-band">'+L(r'(x,y,z)_{\mathrm{ACTS}}=(z,-x,-y)_{\mathrm{DSS}}')+'</div><div class="columns"><div><h2 class="blue">Independent ActsSequencer</h2><ul class="small"><li>Separate tagging and recoil contexts</li><li>Telescope surfaces from detector information</li><li>Truth-smeared seeds in the reference sequence</li><li>Combinatorial KF and adaptive vertex finding</li><li>ECAL propagation through Acts_ECal_seed outputs</li></ul></div><div><h2 class="gold">Existing Tracking processor</h2><ul class="small"><li>Optional hit-triplet seed adapter</li><li>Circle extrapolation for the optional finder</li><li>ACTS propagation with local Kalman updates</li><li>Separate ECal_seed output path</li><li>Space-point sequence requires completion and validation</li></ul></div></div>')
add('statistics','Statistical and detector assumptions','<div class="columns"><div><h2 class="blue">Reported statistical treatment</h2><ul class="small"><li>Expected 90% CL, background-only hypothesis</li><li>Profile likelihood and asymptotic CLs</li><li>Shared signal strength for all production modes</li><li>Background-shape uncertainties uncorrelated by bin</li><li>Normalisation follows the reported Poisson prescription</li></ul></div><div><h2 class="gold">Further validation</h2><ul class="small"><li>Coverage with pseudo-experiments at very low counts</li><li>Uncertainty from sideband continuation</li><li>Bounds on omitted empty-tail components</li><li>HCAL noise and pileup at the 1 MeV cell threshold</li><li>Signal efficiency and background stability with beam energy</li></ul></div></div><div class="takeaway">Mutually exclusive regions do not imply independent detector-systematic uncertainties.</div>')
D.mkdir(exist_ok=True);(D/'components').mkdir(exist_ok=True)
for name in ['Plot','NJUPlot','FlowDiagram']:
 (D/'components'/f'{name}.vue').write_text(f'<script setup>\nimport Target from "../../PreDefence/components/{name}.vue"\n</script>\n<template><Target v-bind="$attrs"/></template>\n')
(D/'style.ts').write_text("import '../PreDefence/style.ts'\n")
shutil.copytree(R/'PreDefence/public',D/'public',dirs_exist_ok=True)
for i,(slug,title,body,note) in enumerate(slides,1):
 body=re.sub(r'(<table[^>]*>)',r'\1<tbody>',body).replace('</table>','</tbody></table>')
 (D/'slides'/f'{i:02}-{slug}.md').write_text(f'---\nlayout: default\nclass: backup-slide backup-{slug}\nclicks: 0\ntitle: {json.dumps(title)}\n---\n\n<div class="eyebrow">Dissertation defence / backup</div>\n\n# {title}\n\n{body}\n<div class="source">Sources: supplied dissertation and positron-study figures. Publication and production assumptions retained.</div>\n\n<!--\n{note}\n-->\n')
files=sorted((D/'slides').glob('*.md'))
front='''---
theme: default
favicon: ./branding/sjtu.png
addons:
  - slidev-addon-evenet
title: DarkSHINE PhD Dissertation Defence — Backup
colorSchema: dark
transition: slide-left
mdc: true
routerMode: hash
aspectRatio: 16/9
canvasWidth: 980
fonts:
  sans: DM Sans
  local: DM Sans
  provider: none
glowOpacity: 0
exportFilename: DarkSHINE_PhD_Defence_Backup
'''
(D/'slides.md').write_text(front+'src: ./slides/'+files[0].name+'\n---\n\n'+'\n\n'.join('---\nsrc: ./slides/'+p.name+'\n---' for p in files[1:])+'\n')
print(len(slides),'backup slides')
