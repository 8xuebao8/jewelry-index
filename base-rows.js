// Shared original-data assembly. No DOM or review state.
function createBaseRows(){
  // Names and search terms; all properties come from gem-data.js.
  const rows = [[1,"Hematite","赤铁矿","hematite"],[2,"Synthetic rutile","合成金红石","syn rutile"],[3,"Diamond","钻石","diamond"],[4,"Strontium titanate","钛酸锶","strontium titanate"],[5,"Cubic zirconia","立方氧化锆","CZ cubic zirconia"],[6,"GGG","钆镓榴石","gadolinium gallium garnet"],[7,"Zircon","锆石","zircon"],[8,"Andradite","钙铁榴石","andradite demantoid"],[9,"YAG","钇铝榴石","yttrium aluminum garnet"],[10,"Spessartite","锰铝榴石","spessartine garnet"],[11,"Almandite","铁铝榴石","almandine garnet"],[12,"Corundum","刚玉","ruby sapphire"],[13,"Synthetic corundum (flame fusion)","合成刚玉（焰熔）","synthetic sapphire ruby"],[14,"Synthetic corundum (flux)","合成刚玉（助熔剂）","flux synthetic corundum"],[15,"Rhodolite","紫牙乌","rhodolite garnet"],[16,"Chrysoberyl","金绿宝石","alexandrite chrysoberyl"],[17,"Pyrope","镁铝榴石","pyrope garnet"],[18,"Grossularite","钙铝榴石","grossular garnet"],[19,"Hydrogrossular","水钙铝榴石","hydrogrossular garnet"],[20,"Rhodonite","蔷薇辉石","rhodonite"],[21,"Synthetic spinel","合成尖晶石","syn spinel"],[22,"Spinel","尖晶石","spinel"],[23,"Idocrase","符山石","vesuvianite idocrase"],[24,"Zoisite","黝帘石","tanzanite zoisite"],[25,"Diopside","透辉石","diopside"],[26,"Spodumene","锂辉石","kunzite spodumene"],[27,"Jadeite","硬玉","jadeite 翡翠 jade"],[28,"Jet","煤精","jet"],[29,"Malachite","孔雀石","malachite"],[30,"Peridot","橄榄石","olivine peridot"],[31,"Andalusite","红柱石","andalusite"],[32,"Tourmaline","电气石","tourmaline"],[33,"Topaz","黄玉","topaz"],[34,"Turquoise","绿松石","turquoise"],[35,"Nephrite","软玉","nephrite 和田玉 jade"],[36,"Rhodochrosite","菱锰矿","rhodochrosite"],[37,"Beryl","绿柱石","beryl emerald aquamarine"],[38,"Synthetic emerald (hydrothermal)","合成祖母绿（水热法）","hydrothermal synthetic emerald"],[39,"Synthetic emerald (flux)","合成祖母绿（助熔剂法）","flux synthetic emerald"],[40,"Serpentine","蛇纹石","serpentine"],[41,"Coral (conchiolin)","珊瑚（角质）","coral conchiolin"],[42,"Labradorite","拉长石","labradorite feldspar"],[43,"Tortoise shell","玳瑁","tortoise shell"],[44,"Quartz","石英","quartz amethyst citrine"],[45,"Iolite","堇青石","cordierite iolite"],[46,"Ivory","象牙","ivory"],[47,"Amber","琥珀","amber"],[48,"Oligoclase","奥长石","oligoclase feldspar"],[49,"Chalcedony","玉髓","chalcedony"],[50,"Pearl","珍珠","pearl natural cultured"],[51,"Shell","贝壳","shell mother of pearl"],[52,"Microcline","微斜长石","microcline feldspar amazonite"],[53,"Orthoclase","正长石","orthoclase feldspar"],[54,"Lapis lazuli","青金石","lapis lazuli"],[55,"Obsidian","黑曜石","obsidian natural glass"],[56,"Moldavite","摩尔达维石","moldavite natural glass"],[57,"Calcite","方解石","calcite"],[58,"Coral (calcareous)","珊瑚（钙质）","coral calcareous"],[59,"Sodalite","方钠石","sodalite"],[60,"Opal","蛋白石","opal"],[61,"Glass","玻璃","man made glass"],[62,"Plastic","塑料","plastic"],[63,"Fluorite","萤石","fluorite"],[64,"Assembled stone","拼合石","doublet triplet assembled stone"]]
    .map(([n,en,zh,aliases])=>({n,en:en.replace(/^Synthetic\s+/,'SYN. '),zh,aliases:en.startsWith('Synthetic ')?en+' '+aliases:aliases}));
  rows.forEach(x=>{
    x.sourceChart='A';x.sourceRow=x.n;
    const d=chartNumeric.find(d=>d.n===x.n);
    if(!d||!chartText.has(x.n)) throw new Error('Missing chart record '+x.n);
    x.chart={...d,...chartText.get(x.n)};
    x.riIntervals=chartIntervals(d.norm,d.plus,d.minus);
    x.sgIntervals=chartIntervals(d.sgNorm,d.sgPlus,d.sgMinus);
    x.ril=x.riIntervals?Math.min(...x.riIntervals.map(i=>i[0])):null;
    x.rih=x.riIntervals?Math.max(...x.riIntervals.map(i=>i[1])):null;
    x.sgl=x.sgIntervals?.[0][0]??null; x.sgh=x.sgIntervals?.[0][1]??null;
    x.system=d.system; x.optic=d.optic;
    x.optics=d.optic==='Any'?'SR DR ADR AGG':d.optic+(chartADR.has(x.n)?' ADR':'')+([61,62].includes(x.n)?' AGG':'');
    x.colors=[...new Set((d.common+' '+d.uncommon+' '+d.modifier).trim().split(/\s+/))].join(' ');
  });
  rows.push(...createChartBRows());

 return rows;
}

