from pathlib import Path
import shutil,subprocess,json
R=Path(__file__).resolve().parents[1]; T=R.parent/'PhDThesis/figures'; P=R/'Defence/public/figures';P.mkdir(exist_ok=True)
items={
'constraints':'ch02_theoretical_background/SummaryPlot_tikz.pdf',
'shine':'ch03_darkshine_detector/DarkSHINE-Kicker.pdf',
'ecal-resolution':'ch03_darkshine_detector/ECAL/ECAL_Resolutions_v1.0_py.pdf',
'ecal-hardware':'ch03_darkshine_detector/ECAL/LYSO_Module.png',
'field':'ch03_darkshine_detector/Magnetic/MagneticStrength.png',
'hcal-veto':'ch03_darkshine_detector/HCAL/VetoInEffBaseline1.pdf',
'lut-eff':'ch04_simu_reco/QBL-optical-eff-val.png',
'lut-map':'ch04_simu_reco/QBL-optical-eff.png',
'lut-time':'ch04_simu_reco/QBL-optical-timing-val.png',
'waveform':'ch04_simu_reco/QBL-digitization-p1.pdf',
'fit-comparison':'ch04_simu_reco/YFZ-track-fitting.png',
'generator-comparison':'ch04_simu_reco/XC_compared_generators.png.png',
'generator-ratio':'ch04_simu_reco/XC_ratio_plot_calchep_based.png',
'generator-angle':'ch04_simu_reco/XC_dp_electron_angle.pdf',
'xsections':'ch05_positron_analysis/cross_sections_plot.pdf',
'missing-p':'ch05_positron_analysis/brem_missingP.pdf',
'ecal-brem':'ch05_positron_analysis/brem_ECAL_E_total.pdf',
'ecal-ann':'ch05_positron_analysis/tch_ECAL_E_total.pdf',
'cell-ann':'ch05_positron_analysis/tch_log10_ECAL_E_max.pdf',
'cell-res':'ch05_positron_analysis/sch_log10_ECAL_E_max.pdf',
'validation':'ch05_positron_analysis/validation.pdf',
'sr1-tail':'ch05_positron_analysis/bremCut_pn_ecal.pdf',
'sr2-tail':'ch05_positron_analysis/tchCut_pn_ecal.pdf',
'sr3-tail':'ch05_positron_analysis/schCut_pn_ecal.pdf',
'sr3-target':'ch05_positron_analysis/schCut_pn_target.pdf',
'inclusive1':'ch05_positron_analysis/bremCut_inclusive.pdf',
'inclusive2':'ch05_positron_analysis/tchCut_inclusive.pdf',
'modes':'ch05_positron_analysis/limits_mA_modes.pdf',
'limits':'ch05_positron_analysis/limits_mA.pdf',
'dm-limits':'ch05_positron_analysis/limits_mX.pdf',
}
for p in (T/'ch05_positron_analysis').glob('efficiency_*.pdf'): items[p.stem]=str(p.relative_to(T))
manifest={}
for key,path in items.items():
 src=T/path;dst=P/(key+src.suffix);shutil.copy2(src,dst)
 if src.suffix=='.pdf':
  subprocess.run(['pdftocairo','-f','1','-l','1','-svg',str(dst),str(P/(key+'.svg'))],check=True)
 manifest[key]={'source':str(src.relative_to(R.parent)),'display':'figures/'+key+('.svg' if src.suffix=='.pdf' else src.suffix),'original':'figures/'+dst.name}
(R/'asset-manifest.json').write_text(json.dumps(manifest,indent=2))
print(len(items),'assets copied, PDFs retained and converted to vector SVG')
