from pathlib import Path
import zipfile,hashlib,json
R=Path(__file__).resolve().parents[1]
O=R/'deliverables';O.mkdir(exist_ok=True)
source=O/'DarkSHINE_Defence_Source.zip'
exclude={'archive','node_modules','site','dist','deliverables','__pycache__','.git'}
with zipfile.ZipFile(source,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
 for p in sorted(R.rglob('*')):
  if not p.is_file():continue
  rel=p.relative_to(R)
  if any(part in exclude for part in rel.parts):continue
  if '.DS_Store' in rel.parts:continue
  if rel.parts[0]=='output':
   if len(rel.parts)>1 and rel.parts[1]=='pdf':
    if p.name not in ['DarkSHINE_PhD_Defence.pdf','DarkSHINE_PhD_Defence_Backup.pdf']:continue
   elif len(rel.parts)!=2 or not p.name.endswith('-report.json'):continue
  z.write(p,Path('DarkSHINE_Defence')/rel)
static=O/'DarkSHINE_Defence_Static.zip'
with zipfile.ZipFile(static,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
 for p in sorted((R/'site').rglob('*')):
  if p.is_file():z.write(p,Path('site')/p.relative_to(R/'site'))
manifest=[]
for p in [source,static,R/'output/pdf/DarkSHINE_PhD_Defence.pdf',R/'output/pdf/DarkSHINE_PhD_Defence_Backup.pdf']:
 manifest.append({'file':str(p.relative_to(R)),'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
(O/'manifest.json').write_text(json.dumps(manifest,indent=2))
for p in [source,static]:
 with zipfile.ZipFile(p) as z:
  assert z.testzip() is None
  print(p.name,len(z.namelist()),'files',p.stat().st_size,'bytes')
print('Archive integrity passed.')
