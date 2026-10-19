(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ReviewModel=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const colors={C:['无色','Colourless'],P:['紫','Purple'],R:['红','Red'],O:['橙','Orange'],Y:['黄','Yellow'],G:['绿','Green'],B:['蓝','Blue'],V:['蓝紫','Violet'],Br:['褐','Brown'],W:['白','White'],Gr:['灰','Gray'],Bl:['黑','Black']};
 const textFields=['colorNote','phenomena','spectra','uv','fracture','comments'],trans=['TP','STP','TL','STL','OP'];
 const legacyTrans={TP:'Tp',STP:'S-Tp',TL:'Tl',STL:'S-Tl',OP:'O'},clone=x=>JSON.parse(JSON.stringify(x));
 const pair=x=>Array.isArray(x)?{en:x[0]||'',zh:x[1]||''}:{en:x||'',zh:x||''};
 // Saved selections are authoritative. Prose parsing is only for untouched legacy rows.
 const selectedUvBands=p=>({LW:p.uvBands?.LW===true,SW:p.uvBands?.SW===true});
 function uvBands(p){
  if(Object.hasOwn(p,'uvBands'))return selectedUvBands(p);
  const en=(Array.isArray(p.uv)?p.uv[0]:p.uv?.en)||'',out={LW:null,SW:null};
  if(/^Any$/i.test(en.trim()))Object.assign(out,{LW:true,SW:true});
  const clauses=[...en.matchAll(/\b(LW\s*&\s*SW|SW\s*&\s*LW|LW|SW)\s*:\s*([\s\S]*?)(?=\b(?:LW|SW)\b\s*(?:&|:)|$)/gi)];
  for(const m of clauses){const reaction=m[2].split(';')[0].trim();let value=null;
   if(/\b(?:weak(?:er)?|moderate|strong)\b/i.test(reaction)&&! /\b(?:no|not)\b/i.test(reaction))value=true;
   else if(/^inert[.\s]*$/i.test(reaction))value=false;
   for(const band of ['LW','SW'])if(m[1].toUpperCase().includes(band))out[band]=value;
  }
  for(const band of ['LW','SW'])if(typeof p.uvBands?.[band]==='boolean')out[band]=p.uvBands[band];
  return out;
 }
 function uvMatches(p,selected){const bands=uvBands(p);return !selected.length||selected.some(b=>bands[b]!==false);}
 function numeric(norm,plus,minus,spot,raw,overLimit){
  const kind=norm==='Any'?'any':norm?'values':'unknown';let notation=raw===undefined?'unverified':raw===null||raw===''?'blank':raw.includes('±')?'symmetric':raw.includes('+')&&/[−-]/.test(raw)?'asymmetric':raw.includes('+')?'plus':'minus';
  return {kind,values:kind==='values'?norm.split(',').map(s=>{const v=s.trim().split('–');return {low:v[0],high:v.at(-1)}}):[],range:{notation,plus:notation==='blank'||notation==='minus'?null:String(plus),minus:notation==='blank'||notation==='plus'?null:String(minus)},spots:spot?spot.split(/[；;,]/).map(s=>s.trim()).filter(Boolean):[],overLimit:!!overLimit};
 }
 function fromBaseRow(row){
  const d=row.chart,c={};for(const [code,[zh]] of Object.entries(colors))c[code]={fill:'unknown',mark:'unknown',categories:['common','uncommon','modifying'].filter(k=>(d[k==='modifying'?'modifier':k]||'').split(' ').includes(zh)),evidence:''};
  const id=row.sourceChart+'-'+row.sourceRow;
  for(const [key,code,fill,mark] of [['A-25','V','full','cross'],['A-25','Br','half','unknown'],['A-42','R','half','unknown'],['B-27','W','half','unknown'],['B-31','P','half','horizontal']])if(id===key)Object.assign(c[code],{fill,mark,evidence:'用户此前确认 / Previously confirmed by user'});
  const ri=numeric(d.norm,d.plus,d.minus,d.spot,d.riSourceRange,row.riOverLimit),sg=numeric(d.sgNorm,d.sgPlus,d.sgMinus,'',d.sgSourceRange,false);
  if(id==='A-44')ri.range={notation:'zero',plus:'0.000',minus:'0.000'};
  const p={transparency:d.trans.split('–').map(x=>Object.keys(legacyTrans).find(t=>legacyTrans[t]===x)||x),optic:d.optic==='Any'?['Any']:(row.optics||d.optic||'').split(' ').filter(Boolean),axis:d.axis||'',system:d.system||'',pleo:(d.pleo||'').split(' ').filter(Boolean),hardness:d.hard||'',colorNote:pair(d.colourNote)};
  for(const k of textFields.filter(x=>x!=='colorNote'))p[k]=pair(d[k]);
  return {id,chart:row.sourceChart,sourceRow:row.sourceRow,names:{en:row.en,zh:row.zh},colors:c,ri,sg,properties:p};
 }
 function validate(r,{mode='apply'}={}){
  const errors=[],err=(field,message)=>errors.push({field,message}),apply=mode==='apply';
  const object=(v,keys,p,optional=[])=>{if(!v||typeof v!=='object'||Array.isArray(v)){err(p,'需要对象 / Object required');return false}for(const k of Object.keys(v))if(!keys.includes(k))err(p+'.'+k,'不允许的字段 / Unknown field');for(const k of keys)if(!optional.includes(k)&&!Object.hasOwn(v,k))err(p+'.'+k,'缺少字段 / Missing field');return true};
  const str=(v,p,max=20000)=>{if(typeof v!=='string'||v.length>max)err(p,'文本格式或长度无效 / Invalid text or length')};
  const choice=(v,vals,p)=>{if(!vals.includes(v))err(p,'选项无效 / Invalid option')};
  const arr=(v,vals,p)=>{if(!Array.isArray(v)||v.length>vals.length){err(p,'选项列表无效 / Invalid options');return false}v.forEach(x=>choice(x,vals,p));if(new Set(v).size!==v.length)err(p,'选项重复 / Duplicate option');return true};
  const decimal=(v,p,positive=false)=>{if(typeof v!=='string'||!/^\d*\.?\d+$/.test(v)||!Number.isFinite(+v)||+v<0||(positive&&+v<=0)||+v>1e6)err(p,'请输入有效非负小数 / Enter a valid nonnegative decimal')};
  if(!object(r,['id','chart','sourceRow','names','colors','ri','sg','properties'],'record'))return {valid:false,errors};
  choice(r.chart,['A','B'],'chart');if(!Number.isInteger(r.sourceRow)||r.sourceRow<1||r.sourceRow>64||r.id!==r.chart+'-'+r.sourceRow)err('id','编号无效 / Invalid ID');
  if(object(r.names,['en','zh'],'names'))for(const k of ['en','zh']){str(r.names[k],'names.'+k,200);if(apply&&!r.names[k]?.trim())err('names.'+k,'名称不能为空 / Name required')}
  if(object(r.colors,Object.keys(colors),'colors'))for(const code of Object.keys(colors)){const c=r.colors[code],p='colors.'+code;if(!object(c,['fill','mark','categories','evidence'],p))continue;choice(c.fill,['unknown','blank','half','full'],p+'.fill');choice(c.mark,['unknown','none','horizontal','vertical','cross'],p+'.mark');arr(c.categories,['common','uncommon','modifying'],p+'.categories');str(c.evidence,p+'.evidence',2000);}
  for(const k of ['ri','sg']){const n=r[k];if(!object(n,['kind','values','range','spots','overLimit'],k))continue;choice(n.kind,['values','unknown','any'],k+'.kind');if(typeof n.overLimit!=='boolean')err(k+'.overLimit','布尔值无效 / Invalid boolean');
   if(!Array.isArray(n.values)||n.values.length>20)err(k+'.values','区间列表无效 / Invalid intervals');else{if(apply&&n.kind==='values'&&!n.values.length)err(k+'.values','请填写标准值 / Values required');for(const [i,v] of n.values.entries())if(object(v,['low','high'],k+'.values.'+i)){str(v.low,k+'.low',64);str(v.high,k+'.high',64);if(apply){decimal(v.low,k+'.low',true);decimal(v.high,k+'.high',true);if(+v.low>+v.high)err(k+'.values','下限大于上限 / Reversed interval')}}}
   if(!Array.isArray(n.spots)||n.spots.length>20)err(k+'.spots','点测列表无效 / Invalid spots');else for(const s of n.spots){str(s,k+'.spots',64);if(apply)decimal(s,k+'.spots',true)}
   if(k==='sg'&&(n.overLimit||n.spots?.length))err(k,'SG 不使用点测或超量程 / SG has no spot or over-limit flag');
   const q=n.range;if(object(q,['notation','plus','minus'],k+'.range')){choice(q.notation,['unverified','blank','zero','symmetric','asymmetric','plus','minus'],k+'.range.notation');for(const side of ['plus','minus'])if(q[side]!==null){str(q[side],k+'.range.'+side,64);if(apply)decimal(q[side],k+'.range.'+side)}
    if(apply){const required={zero:['plus','minus'],symmetric:['plus','minus'],asymmetric:['plus','minus'],plus:['plus'],minus:['minus']}[q.notation]||[];for(const side of required)if(q[side]===null)err(k+'.range.'+side,'该格式需要数值 / Value required');if(q.notation==='blank'&&(q.plus!==null||q.minus!==null))err(k+'.range','原表空白须保持空白 / Blank range must be empty');if(q.notation==='plus'&&q.minus!==null||q.notation==='minus'&&q.plus!==null)err(k+'.range','单边变化只能有一侧 / One-sided range required');if(q.notation==='zero'&&(+q.plus!==0||+q.minus!==0)||q.notation==='symmetric'&&+q.plus!==+q.minus)err(k+'.range','对称/零值不一致 / Inconsistent symmetric or zero range');}
   }
  }
  const p=r.properties;if(object(p,['transparency','optic','axis','system','pleo','hardness','uvBands',...textFields],'properties',['uvBands'])){if(arr(p.transparency,trans,'properties.transparency')&&apply&&(p.transparency.length<1||p.transparency.length>2||trans.indexOf(p.transparency[0])>trans.indexOf(p.transparency.at(-1))))err('properties.transparency','请选择有序透明度范围 / Select ordered transparency bounds');arr(p.optic,['SR','DR','ADR','AGG','Any'],'properties.optic');if(apply&&p.optic?.includes('Any')&&p.optic.length>1)err('properties.optic','Any 不能混选 / Any must stand alone');arr(p.pleo,['2','3','S','M','W'],'properties.pleo');for(const key of ['axis','system','hardness'])str(p[key],'properties.'+key,200);for(const key of textFields)if(object(p[key],['en','zh'],'properties.'+key))for(const lang of ['en','zh'])str(p[key][lang],'properties.'+key+'.'+lang);
   if(Object.hasOwn(p,'uvBands')&&object(p.uvBands,['LW','SW'],'properties.uvBands',['LW','SW']))for(const band of Object.keys(p.uvBands))if(typeof p.uvBands[band]!=='boolean')err('properties.uvBands.'+band,'布尔值无效 / Invalid boolean');
  }
  return {valid:errors.length===0,errors};
 }
 function intervals(n){if(n.kind==='any')return null;const values=n.kind==='values'?n.values:n.spots.map(s=>({low:s,high:s}));if(!values.length)return null;return values.map(v=>[+(+v.low-Number(n.range.minus||0)).toFixed(6),+(+v.high+Number(n.range.plus||0)).toFixed(6)]);}
 const norm=n=>n.kind==='any'?'Any':n.kind==='unknown'?'':n.values.map(v=>v.low===v.high?v.low:v.low+'–'+v.high).join(',');
 function rangeText(q){if(q.notation==='blank')return '原表空白 / Blank in source';if(q.notation==='zero')return '± 0.000';const s=[q.plus===null?'':'+ '+q.plus,q.minus===null?'':'− '+q.minus].filter(Boolean).join(' / ');return q.notation==='unverified'?(s||'—')+'（符号待核 / notation unverified）':q.notation==='symmetric'?'± '+q.plus:s;}
 function applyOverrides(base,bundle){return base.map(original=>{const r=bundle?.records?.[original.sourceChart+'-'+original.sourceRow];if(!r)return original;const checked=validate(r);if(!checked.valid)throw Error('Invalid correction '+r.id+': '+checked.errors.map(x=>x.field).join(', '));const x=clone(original),d=x.chart,p=r.properties;x.en=r.names.en;x.zh=r.names.zh;
  Object.assign(d,{norm:norm(r.ri),plus:Number(r.ri.range.plus||0),minus:Number(r.ri.range.minus||0),spot:r.ri.spots.join('；'),sgNorm:norm(r.sg),sgPlus:Number(r.sg.range.plus||0),sgMinus:Number(r.sg.range.minus||0),riSourceRange:rangeText(r.ri.range),sgSourceRange:rangeText(r.sg.range),reviewedRange:true,optic:p.optic.includes('Any')?'Any':p.optic.filter(o=>o!=='ADR').join(' '),axis:p.axis,system:p.system,pleo:p.pleo.join(' '),hard:p.hardness,trans:p.transparency.map(t=>legacyTrans[t]).join('–')});
  for(const key of textFields)d[key==='colorNote'?'colourNote':key]=key==='colorNote'?[p[key].en,p[key].zh].filter(Boolean).join(' / '):[p[key].en,p[key].zh];
  d.uvBands=selectedUvBands(p);
  for(const [key,category] of [['common','common'],['uncommon','uncommon'],['modifier','modifying']])d[key]=Object.keys(colors).filter(c=>r.colors[c].categories.includes(category)).map(c=>colors[c][0]).join(' ');
  x.colors=[...new Set([d.common,d.uncommon,d.modifier].join(' ').split(' ').filter(Boolean))].join(' ');x.riIntervals=intervals(r.ri);x.sgIntervals=intervals(r.sg);x.riUnknown=r.ri.kind==='unknown'&&!r.ri.spots.length;x.sgUnknown=r.sg.kind==='unknown';x.riOverLimit=r.ri.overLimit;x.optics=p.optic.includes('Any')?'SR DR ADR AGG':p.optic.join(' ');x.optic=d.optic;x.system=d.system;
  x.ril=x.riIntervals?Math.min(...x.riIntervals.map(v=>v[0])):null;x.rih=x.riIntervals?Math.max(...x.riIntervals.map(v=>v[1])):null;x.sgl=x.sgIntervals?.[0][0]??null;x.sgh=x.sgIntervals?.[0][1]??null;return x;});}
 return {colors,trans,textFields,clone,fromBaseRow,validate,intervals,rangeText,applyOverrides,uvBands,uvMatches,selectedUvBands};
});
