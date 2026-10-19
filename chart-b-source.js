/* Chart B: 39 retained source rows from the user-reviewed 1992 photographs.
 * English source transcription; Chinese editorial translations live in chart-b-data.js.
 * Blacked-out names are excluded. Norm, Range and discrete spot readings stay separate.
 */
const chartBSource = [
  {
    "sourceRow": 1,
    "name": "Pyrite",
    "zh": "黄铁矿",
    "aliases": [],
    "colors": {
      "common": [
        "Y"
      ],
      "uncommon": [],
      "modifying": []
    },
    "transparency": "OP",
    "phenomena": "Metallic luster",
    "ri": {
      "norm": null,
      "range": null,
      "spot": [],
      "overLimit": true
    },
    "birefringence": null,
    "optical": "SR; Cubic",
    "pleochroism": [],
    "spectra": null,
    "uv": null,
    "sg": "5.00 ± .10",
    "hardness": "6–6½",
    "fracture": "FR: conchoidal to uneven",
    "comments": "Greenish to brownish black streak; nonmagnetic; may have iridescent tarnish; twinning common. Incorrectly referred to as ‘fool’s gold,’ or ‘marcasite’ (orthorhombic iron sulphide)."
  },
  {
    "sourceRow": 3,
    "name": "Sphalerite",
    "zh": "闪锌矿",
    "aliases": [
      "Blende"
    ],
    "colors": {
      "common": [
        "O",
        "Y",
        "G",
        "Br",
        "Bl"
      ],
      "uncommon": [],
      "modifying": [
        "R"
      ]
    },
    "transparency": "TP–OP",
    "phenomena": "Very strong dispersion (.156)",
    "ri": {
      "norm": "2.369",
      "range": null,
      "spot": [],
      "overLimit": true
    },
    "birefringence": null,
    "optical": "SR; Cubic",
    "pleochroism": [],
    "spectra": {
      "mark": "**",
      "text": "651.0, 667.0, 690.0 lines"
    },
    "uv": "LW & SW: inert–weak",
    "sg": "4.05 + .05 / − .15",
    "hardness": "3½–4",
    "fracture": "FR: conchoidal; CL: 6 perfect",
    "comments": "Color zoning common; confused with spessartite, zircon, and sphene."
  },
  {
    "sourceRow": 5,
    "name": "Cassiterite",
    "zh": "锡石",
    "aliases": [],
    "colors": {
      "common": [
        "C",
        "Y",
        "Br",
        "Bl"
      ],
      "uncommon": [
        "R"
      ],
      "modifying": []
    },
    "transparency": "TP–OP",
    "phenomena": "Adamantine luster; strong dispersion (.071)",
    "ri": {
      "norm": "1.997–2.093",
      "range": "+ .009 / − .006",
      "spot": [],
      "overLimit": true
    },
    "birefringence": ".096–.098",
    "optical": "DR; U+; Tetragonal",
    "pleochroism": [
      "2",
      "M",
      "W"
    ],
    "spectra": null,
    "uv": "LW & SW: inert",
    "sg": "6.95 ± .08",
    "hardness": "6–7",
    "fracture": "FR: conchoidal to uneven",
    "comments": "Commonly dark brown to black in color; color zoning common; confused with wulfenite and scheelite."
  },
  {
    "sourceRow": 6,
    "name": "Scheelite",
    "zh": "白钨矿",
    "aliases": [],
    "colors": {
      "common": [
        "C",
        "O",
        "Y",
        "Br",
        "W"
      ],
      "uncommon": [],
      "modifying": []
    },
    "transparency": "TP–TL",
    "phenomena": "Moderate dispersion (.038)",
    "ri": {
      "norm": "1.918–1.934",
      "range": "± .003",
      "spot": [],
      "overLimit": true
    },
    "birefringence": ".016",
    "optical": "DR; U+; Tetragonal",
    "pleochroism": [
      "2",
      "W"
    ],
    "spectra": {
      "mark": "***",
      "text": "580.0 doublet most prominent"
    },
    "uv": "LW: inert; SW: moderate–strong",
    "sg": "6.00 + .12 / − .10",
    "hardness": "4½–5",
    "fracture": "FR: subconchoidal to uneven; CL: 1 distinct",
    "comments": "Strong light blue SW fluorescence common; confused with wulfenite and cassiterite. Synthesized in various colors."
  },
  {
    "sourceRow": 7,
    "name": "Sphene",
    "zh": "榍石",
    "aliases": [
      "Titanite"
    ],
    "colors": {
      "common": [
        "O",
        "Y",
        "G",
        "Br"
      ],
      "uncommon": [],
      "modifying": []
    },
    "transparency": "TP",
    "phenomena": "Very strong doubling; strong dispersion (.051)",
    "ri": {
      "norm": "1.900–2.034",
      "range": "± .020",
      "spot": [],
      "overLimit": true
    },
    "birefringence": ".100–.135",
    "optical": "DR; B+; Monoclinic",
    "pleochroism": [
      "2",
      "3",
      "S",
      "M"
    ],
    "spectra": {
      "mark": "**",
      "text": "580.0 doublet most prominent"
    },
    "uv": "LW & SW: inert",
    "sg": "3.52 ± .02",
    "hardness": "5–5½",
    "fracture": "FR: conchoidal to splintery; CL: 2 distinct",
    "comments": "Confused with zircon and sphalerite."
  },
  {
    "sourceRow": 10,
    "name": "Benitoite",
    "zh": "蓝锥矿",
    "aliases": [],
    "colors": {
      "common": [
        "C",
        "B"
      ],
      "uncommon": [
        "R"
      ],
      "modifying": [
        "V"
      ]
    },
    "transparency": "TP",
    "phenomena": "Strong doubling; moderate dispersion (.044)",
    "ri": {
      "norm": "1.757–1.804",
      "range": null,
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".047",
    "optical": "DR; U+; Hexagonal",
    "pleochroism": [
      "2",
      "S"
    ],
    "spectra": null,
    "uv": "LW: inert–weak; SW: weak–strong",
    "sg": "3.68 + .01 / − .07",
    "hardness": "6–6½",
    "fracture": "FR: conchoidal to uneven",
    "comments": "Characteristic blue and colorless pleochroism; commonly fluoresces chalky blue; may be color zoned; confused with sapphire."
  },
  {
    "sourceRow": 12,
    "name": "Staurolite",
    "zh": "十字石",
    "aliases": [],
    "colors": {
      "common": [
        "R",
        "Y",
        "Br"
      ],
      "uncommon": [],
      "modifying": []
    },
    "transparency": "TP–OP",
    "phenomena": "Common as massive cruciform twins",
    "ri": {
      "norm": "1.736–1.746",
      "range": "± .015",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".009–.015",
    "optical": "DR or AGG / B+; Monoclinic",
    "pleochroism": [
      "3",
      "M"
    ],
    "spectra": {
      "mark": "*",
      "text": null
    },
    "uv": "LW & SW: inert",
    "sg": "3.71 + .08 / − .06",
    "hardness": "7–7½",
    "fracture": "FR: conchoidal to uneven; CL: 1 distinct",
    "comments": "Trade term ‘cross stone’ for massive twin crystals at 90° or 60° to one another; transparent crystals rare."
  },
  {
    "sourceRow": 13,
    "name": "Azurite",
    "zh": "蓝铜矿",
    "aliases": [],
    "colors": {
      "common": [
        "B"
      ],
      "uncommon": [],
      "modifying": [
        "V"
      ]
    },
    "transparency": "TP–OP",
    "phenomena": null,
    "ri": {
      "norm": "1.730–1.836",
      "range": "± .010",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".106",
    "optical": "DR or AGG / B+; Monoclinic",
    "pleochroism": [
      "3",
      "S",
      "M"
    ],
    "spectra": null,
    "uv": null,
    "sg": "3.80 + .09 / − .50",
    "hardness": "3½–4",
    "fracture": "FR: conchoidal to uneven; CL: 2 perfect",
    "comments": "Massive material common; light blue streak; effervesces to HCl; botryoidal structure common; confused with lapis lazuli and shattuckite. Generally associated with malachite; intergrowth called azurmalachite, often banded."
  },
  {
    "sourceRow": 14,
    "name": "Epidote",
    "zh": "绿帘石",
    "aliases": [],
    "colors": {
      "common": [
        "Y",
        "G",
        "Br",
        "Bl"
      ],
      "uncommon": [],
      "modifying": []
    },
    "transparency": "TP–TL",
    "phenomena": "Often dark in tone",
    "ri": {
      "norm": "1.729–1.768",
      "range": "+ .012 / − .035",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".019–.045",
    "optical": "DR; B−; Monoclinic",
    "pleochroism": [
      "3",
      "S"
    ],
    "spectra": {
      "mark": "**",
      "text": "Directional, bands at 455.0 & 475.0 (weaker)"
    },
    "uv": "LW & SW: inert",
    "sg": "3.40 + .10 / − .15",
    "hardness": "6–7",
    "fracture": "FR: conchoidal to uneven; CL: 1 perfect",
    "comments": "May show pseudo-uniaxial optic figure; massive material is a component of the ornamental materials saussurite and unakite."
  },
  {
    "sourceRow": 16,
    "name": "Kyanite",
    "zh": "蓝晶石",
    "aliases": [],
    "colors": {
      "common": [
        "C",
        "G",
        "B"
      ],
      "uncommon": [],
      "modifying": [
        "Br"
      ]
    },
    "transparency": "TP",
    "phenomena": "C (rare)",
    "ri": {
      "norm": "1.716–1.731",
      "range": "± .004",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".012–.017",
    "optical": "DR; B−; Triclinic",
    "pleochroism": [
      "2",
      "3",
      "M"
    ],
    "spectra": {
      "mark": "**",
      "text": "435.0 & 445.0 bands"
    },
    "uv": "LW: inert–weak",
    "sg": "3.68 + .01 / − .12",
    "hardness": "4–7½",
    "fracture": "FR: uneven; CL: 1 perfect, 1 distinct",
    "comments": "Commonly color zoned; may appear fibrous; directional hardness within same crystal—4 in one direction, 7½ at right angles to it."
  },
  {
    "sourceRow": 18,
    "name": "Dumortierite",
    "zh": "蓝线石",
    "aliases": [],
    "colors": {
      "common": [
        "B",
        "V",
        "Br"
      ],
      "uncommon": [],
      "modifying": [
        "G"
      ]
    },
    "transparency": "TP–OP",
    "phenomena": null,
    "ri": {
      "norm": "1.678–1.689",
      "range": "+ .034 / − .023",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".011–.027",
    "optical": "DR or AGG / B−; Orthorhombic",
    "pleochroism": [
      "2",
      "3",
      "S"
    ],
    "spectra": null,
    "uv": "LW & SW: inert–weak",
    "sg": "3.30 + .11 / − .04",
    "hardness": "7–8½",
    "fracture": "FR: splintery, uneven, or conchoidal; CL: 1 distinct",
    "comments": "Tp–Tl stones uncommon and strongly pleochroic. Tl–O massive fibrous aggregates resemble sodalite more than lapis lazuli. Crystals commonly disseminated as inclusions in quartz, known as dumortierite in quartz; R.I. 1.544–1.553, S.G. 2.85 ± .05."
  },
  {
    "sourceRow": 20,
    "name": "Sinhalite",
    "zh": "硼镁铝石",
    "aliases": [],
    "colors": {
      "common": [
        "Y",
        "Br"
      ],
      "uncommon": [],
      "modifying": [
        "G"
      ]
    },
    "transparency": "TP",
    "phenomena": null,
    "ri": {
      "norm": "1.668–1.707",
      "range": "+ .005 / − .003",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".036–.039",
    "optical": "DR; B−; Orthorhombic",
    "pleochroism": [
      "3",
      "M"
    ],
    "spectra": {
      "mark": "**",
      "text": "452.0, 463.0, 475.0, 493.0 lines"
    },
    "uv": "LW & SW: inert",
    "sg": "3.48 ± .02",
    "hardness": "6½–7",
    "fracture": "FR: conchoidal",
    "comments": "Confused with peridot; optic sign (sinhalite strongly negative) and spectra key to separation."
  },
  {
    "sourceRow": 22,
    "name": "Enstatite",
    "zh": "顽火辉石",
    "aliases": [],
    "colors": {
      "common": [
        "G",
        "Br"
      ],
      "uncommon": [
        "C"
      ],
      "modifying": [
        "R",
        "Y"
      ]
    },
    "transparency": "TP–TL",
    "phenomena": "C, A (rare); often dark in tone",
    "ri": {
      "norm": "1.663–1.673",
      "range": "± .010",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".008–.011",
    "optical": "DR; B+; Orthorhombic",
    "pleochroism": [
      "2",
      "3",
      "S",
      "M",
      "W"
    ],
    "spectra": {
      "mark": "***",
      "text": "Directional, 505.0 & 550.0 lines key"
    },
    "uv": "LW & SW: inert",
    "sg": "3.25 + .15 / − .02",
    "hardness": "5–6",
    "fracture": "FR: uneven; CL: 2 distinct",
    "comments": "Grades into hypersthene (R.I. 1.715–1.731, S.G. 3.45 ± .05, optic character B−). Confused with axinite, kornerupine, and diopside."
  },
  {
    "sourceRow": 23,
    "name": "Sillimanite",
    "zh": "矽线石",
    "aliases": [
      "Fibrolite"
    ],
    "colors": {
      "common": [
        "G",
        "B",
        "Br",
        "W",
        "Gr"
      ],
      "uncommon": [],
      "modifying": [
        "V"
      ]
    },
    "transparency": "TP–OP",
    "phenomena": "C",
    "ri": {
      "norm": "1.659–1.680",
      "range": "+ .004 / − .006",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".015–.021",
    "optical": "DR or AGG / B+; Orthorhombic",
    "pleochroism": [
      "2",
      "3",
      "S",
      "M"
    ],
    "spectra": {
      "mark": "*",
      "text": "Weak 410.0, 441.0, 462.0 bands"
    },
    "uv": null,
    "sg": "3.25 + .02 / − .11",
    "hardness": "6–7½",
    "fracture": "FR: uneven; CL: 1 perfect",
    "comments": "Usually fibrous and massive; confused with jadeite. Tp material rare; confused with euclase."
  },
  {
    "sourceRow": 24,
    "name": "Dioptase",
    "zh": "透视石",
    "aliases": [],
    "colors": {
      "common": [
        "G"
      ],
      "uncommon": [],
      "modifying": [
        "B"
      ]
    },
    "transparency": "TP–TL",
    "phenomena": "Color dark and very saturated",
    "ri": {
      "norm": "1.655–1.708",
      "range": "± .012",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".051–.053",
    "optical": "DR; U+; Hexagonal",
    "pleochroism": [
      "2",
      "W"
    ],
    "spectra": {
      "mark": "*",
      "text": null
    },
    "uv": "LW & SW: inert",
    "sg": "3.30 ± .05",
    "hardness": "5",
    "fracture": "FR: conchoidal to uneven; CL: 3 perfect",
    "comments": "Color similar to fine emerald, but with even more blue."
  },
  {
    "sourceRow": 25,
    "name": "Phenakite",
    "zh": "硅铍石",
    "aliases": [],
    "colors": {
      "common": [
        "C",
        "Br"
      ],
      "uncommon": [
        "R",
        "Y",
        "B"
      ],
      "modifying": []
    },
    "transparency": "TP",
    "phenomena": "Generally light in tone",
    "ri": {
      "norm": "1.654–1.670",
      "range": "+ .026 / − .004",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".016",
    "optical": "DR; U+; Hexagonal",
    "pleochroism": [
      "2",
      "M",
      "W"
    ],
    "spectra": null,
    "uv": "LW & SW: inert–weak",
    "sg": "2.95 ± .05",
    "hardness": "7½–8",
    "fracture": "FR: conchoidal; CL: 1 distinct",
    "comments": "Confused with spodumene and euclase; optic character key to separation."
  },
  {
    "sourceRow": 26,
    "name": "Euclase",
    "zh": "蓝柱石",
    "aliases": [],
    "colors": {
      "common": [
        "C",
        "G",
        "B"
      ],
      "uncommon": [],
      "modifying": [
        "Y"
      ]
    },
    "transparency": "TP",
    "phenomena": null,
    "ri": {
      "norm": "1.652–1.671",
      "range": "+ .006 / − .002",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".019–.020",
    "optical": "DR; B+; Monoclinic",
    "pleochroism": [
      "2",
      "3",
      "M",
      "W"
    ],
    "spectra": {
      "mark": "**",
      "text": null
    },
    "uv": "LW & SW: inert–weak",
    "sg": "3.08 + .04 / − .08",
    "hardness": "7½",
    "fracture": "FR: conchoidal; CL: 1 perfect",
    "comments": "May be color zoned; often light in tone; may resemble aquamarine; red or blue platy inclusions common; confused with spodumene and phenakite."
  },
  {
    "sourceRow": 27,
    "name": "Chlorastrolite",
    "zh": null,
    "aliases": [
      "Pumpellyite"
    ],
    "colors": {
      "common": [
        "G"
      ],
      "uncommon": [],
      "modifying": [
        "B",
        "Br",
        "W"
      ],
      "note": "用户确认：W 为半格 / User confirmed: W is a half cell."
    },
    "transparency": "STL–OP",
    "phenomena": "C; radial fibrous structure",
    "ri": {
      "norm": "1.650–1.660",
      "range": "+ .040",
      "spot": [],
      "overLimit": false
    },
    "birefringence": null,
    "optical": "AGG; Monoclinic",
    "pleochroism": [],
    "spectra": null,
    "uv": "LW & SW: inert",
    "sg": "3.20 + .30 / − .10",
    "hardness": "5–6",
    "fracture": "FR: splintery to granular",
    "comments": "Gem variety of pumpellyite; mottled appearance resembling turtle shell or snakeskin; may exhibit sheen; confused with malachite."
  },
  {
    "sourceRow": 29,
    "name": "Apatite",
    "zh": "磷灰石",
    "aliases": [],
    "colors": {
      "common": [
        "C",
        "P",
        "R",
        "Y",
        "G",
        "B",
        "V",
        "Br"
      ],
      "uncommon": [],
      "modifying": []
    },
    "transparency": "TP–TL",
    "phenomena": "C",
    "ri": {
      "norm": "1.634–1.638",
      "range": "+ .012 / − .006",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".002–.008",
    "optical": "DR; U−; Hexagonal",
    "pleochroism": [
      "2",
      "S",
      "M",
      "W"
    ],
    "spectra": {
      "mark": "* / ** / ***",
      "text": "Varies with color"
    },
    "uv": "LW & SW: inert–weak",
    "sg": "3.18 ± .05",
    "hardness": "5",
    "fracture": "FR: conchoidal to uneven",
    "comments": "580.0 nm doublet common in colorless, yellow, and chatoyant stones; may show pseudo-biaxial optic figure; confused with tourmaline, topaz, andalusite, danburite, and lazulite."
  },
  {
    "sourceRow": 30,
    "name": "Danburite",
    "zh": "赛黄晶",
    "aliases": [],
    "colors": {
      "common": [
        "C",
        "R",
        "Y",
        "Br"
      ],
      "uncommon": [],
      "modifying": []
    },
    "transparency": "TP",
    "phenomena": "Generally light in tone",
    "ri": {
      "norm": "1.630–1.636",
      "range": "± .003",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".006",
    "optical": "DR; B±; Orthorhombic",
    "pleochroism": [
      "2",
      "W"
    ],
    "spectra": {
      "mark": "*",
      "text": "580.0 doublet most prominent"
    },
    "uv": "LW: inert–strong; SW: weaker",
    "sg": "3.00 ± .03",
    "hardness": "7",
    "fracture": "FR: subconchoidal to uneven",
    "comments": "Commonly fluoresces light blue; confused with topaz and apatite."
  },
  {
    "sourceRow": 31,
    "name": "Datolite",
    "zh": "硅钙硼石",
    "aliases": [],
    "colors": {
      "common": [
        "C",
        "R",
        "Y",
        "G",
        "V",
        "Br",
        "W",
        "Gr"
      ],
      "uncommon": [],
      "modifying": [
        "P"
      ],
      "note": "用户确认：P 为半格加横线 / User confirmed: P is a half cell with a horizontal line."
    },
    "transparency": "TP–OP",
    "phenomena": null,
    "ri": {
      "norm": "1.626–1.670",
      "range": "− .004",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".044–.046",
    "optical": "DR or AGG / B−; Monoclinic",
    "pleochroism": [],
    "spectra": null,
    "uv": "SW: inert–moderate",
    "sg": "2.95 ± .05",
    "hardness": "5–5½",
    "fracture": "FR: conchoidal to uneven",
    "comments": "Light green, nearly transparent crystals rarely cut. White to reddish porcelain-like material cut en cabochon."
  },
  {
    "sourceRow": 33,
    "name": "Prehnite",
    "zh": "葡萄石",
    "aliases": [],
    "colors": {
      "common": [
        "Y",
        "G",
        "Gr"
      ],
      "uncommon": [
        "W"
      ],
      "modifying": []
    },
    "transparency": "STP–STL",
    "phenomena": "C (rare); commonly light green",
    "ri": {
      "norm": "1.616–1.649",
      "range": "+ .016 / − .005",
      "spot": [
        "1.63"
      ],
      "overLimit": false
    },
    "birefringence": ".020–.031",
    "optical": "AGG; B+; Orthorhombic",
    "pleochroism": [],
    "spectra": {
      "mark": "**",
      "text": "Weak 438.0 band"
    },
    "uv": "LW & SW: inert–weak",
    "sg": "2.90 + .05 / − .10",
    "hardness": "6–6½",
    "fracture": "FR: uneven to conchoidal; CL: 1 distinct",
    "comments": "Generally seen as crystalline aggregate; commonly S-Tp to Tl; confused with nephrite, jadeite, and serpentine."
  },
  {
    "sourceRow": 34,
    "name": "Actinolite",
    "zh": "阳起石",
    "aliases": [],
    "colors": {
      "common": [
        "G"
      ],
      "uncommon": [],
      "modifying": [
        "Y"
      ]
    },
    "transparency": "TP–OP",
    "phenomena": "C; common as cat’s-eye",
    "ri": {
      "norm": "1.614–1.641",
      "range": "+ .014",
      "spot": [
        "1.63"
      ],
      "overLimit": false
    },
    "birefringence": ".022–.027",
    "optical": "DR or AGG / B−; Monoclinic",
    "pleochroism": [
      "3",
      "S",
      "M"
    ],
    "spectra": {
      "mark": "*",
      "text": "505.0 line"
    },
    "uv": null,
    "sg": "3.00 + .10 / − .05",
    "hardness": "5–6",
    "fracture": "FR: uneven; CL: 2 perfect",
    "comments": "Tp stones rare. Nephrite is a tough, interlocking, fibrous, massive form of the actinolite-tremolite series. Cat’s-eye actinolite: parallel fibrous structure; often misrepresented as ‘jade cat’s-eye;’ confused with cat’s-eye tourmaline and cat’s-eye apatite."
  },
  {
    "sourceRow": 35,
    "name": "Hemimorphite",
    "zh": "异极矿",
    "aliases": [],
    "colors": {
      "common": [
        "C",
        "G",
        "B",
        "Br"
      ],
      "uncommon": [],
      "modifying": []
    },
    "transparency": "TP–TL",
    "phenomena": null,
    "ri": {
      "norm": "1.614–1.636",
      "range": "± .003",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".022",
    "optical": "DR; B+; Orthorhombic",
    "pleochroism": [],
    "spectra": null,
    "uv": null,
    "sg": "3.45 ± .05",
    "hardness": "4½–5",
    "fracture": "FR: uneven to subconchoidal; CL: 2 perfect",
    "comments": "May be banded; confused with prehnite and smithsonite."
  },
  {
    "sourceRow": 36,
    "name": "Lazulite",
    "zh": "天蓝石",
    "aliases": [],
    "colors": {
      "common": [
        "B"
      ],
      "uncommon": [],
      "modifying": [
        "G",
        "V"
      ]
    },
    "transparency": "TP–OP",
    "phenomena": null,
    "ri": {
      "norm": "1.612–1.643",
      "range": "± .005",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".031",
    "optical": "DR or AGG / B−; Monoclinic",
    "pleochroism": [
      "2",
      "3",
      "S",
      "M"
    ],
    "spectra": null,
    "uv": null,
    "sg": "3.09 + .08 / − .01",
    "hardness": "5–6",
    "fracture": "FR: uneven to granular",
    "comments": "Tp stones saturated in color and strongly pleochroic; confused with tourmaline and apatite. Massive material mottled with white; no pyrite; confused with lapis lazuli."
  },
  {
    "sourceRow": 37,
    "name": "Amblygonite",
    "zh": "磷铝锂石",
    "aliases": [],
    "colors": {
      "common": [
        "C",
        "Y"
      ],
      "uncommon": [],
      "modifying": [
        "G"
      ]
    },
    "transparency": "TP",
    "phenomena": null,
    "ri": {
      "norm": "1.612–1.636",
      "range": "− .034",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".020–.027",
    "optical": "DR; B±; Triclinic",
    "pleochroism": [
      "2",
      "W"
    ],
    "spectra": null,
    "uv": "LW: inert–weak",
    "sg": "3.02 ± .04",
    "hardness": "6",
    "fracture": "FR: conchoidal; CL: 1 perfect",
    "comments": "Amblygonite and montebrasite form a solid-solution series; confused with brazilianite."
  },
  {
    "sourceRow": 38,
    "name": "Sugilite",
    "zh": "舒俱来石",
    "aliases": [],
    "colors": {
      "common": [
        "P"
      ],
      "uncommon": [],
      "modifying": [
        "R",
        "B"
      ]
    },
    "transparency": "STP–OP",
    "phenomena": "CC",
    "ri": {
      "norm": "1.607–1.610",
      "range": "+ .001 / − .002",
      "spot": [],
      "overLimit": false
    },
    "birefringence": null,
    "optical": "DR or AGG / U−; Hexagonal",
    "pleochroism": [],
    "spectra": {
      "mark": "***",
      "text": "550.0 band, 419.0 & 445.0 lines"
    },
    "uv": "LW & SW: inert",
    "sg": "2.74 + .05",
    "hardness": "5½–6½",
    "fracture": "FR: granular",
    "comments": "Purple rock-like ornamental material; known in the trade as ‘Royal Azel’ or ‘Royal Lavulite’; confused with charoite and sogdianite."
  },
  {
    "sourceRow": 41,
    "name": "Pectolite",
    "zh": "针钠钙石",
    "aliases": [],
    "colors": {
      "common": [
        "G",
        "B",
        "W",
        "Gr"
      ],
      "uncommon": [],
      "modifying": []
    },
    "transparency": "TP–OP",
    "phenomena": "Radial fibrous structure",
    "ri": {
      "norm": "1.599–1.628",
      "range": "+ .017 / − .004",
      "spot": [
        "1.60"
      ],
      "overLimit": false
    },
    "birefringence": ".029–.038",
    "optical": "DR or AGG / B+; Triclinic",
    "pleochroism": [],
    "spectra": null,
    "uv": "LW & SW: inert–moderate; may phosphoresce",
    "sg": "2.81 + .09 / − .07",
    "hardness": "4½–5",
    "fracture": "FR: uneven to splintery; CL: 2 perfect, usually obscured",
    "comments": "Tl–O white to green material used as jade simulant. S-Tp to O blue material from Dominican Republic contains spherules, blue in center grading to white at periphery; trade name ‘Larimar;’ confused with turquoise."
  },
  {
    "sourceRow": 42,
    "name": "Howlite",
    "zh": "硅硼钙石",
    "aliases": [],
    "colors": {
      "common": [
        "B",
        "W"
      ],
      "uncommon": [],
      "modifying": [],
      "note": "Blue: may be dyed / 蓝色可能来自染色"
    },
    "transparency": "STL–OP",
    "phenomena": "Commonly dyed blue",
    "ri": {
      "norm": "1.586–1.605",
      "range": "± .003",
      "spot": [
        "1.59"
      ],
      "overLimit": false
    },
    "birefringence": null,
    "optical": "AGG; Monoclinic",
    "pleochroism": [],
    "spectra": null,
    "uv": "LW & SW: inert–moderate",
    "sg": "2.58 − .13",
    "hardness": "3½",
    "fracture": "FR: granular",
    "comments": "Untreated material is white; may have spiderweb matrix. Dyed blue: confused with turquoise; etched by HCl while turquoise is not; often appears pinkish through color filter while turquoise appears greenish."
  },
  {
    "sourceRow": 43,
    "name": "Chrysocolla",
    "zh": "硅孔雀石",
    "aliases": [],
    "colors": {
      "common": [
        "G",
        "B"
      ],
      "uncommon": [],
      "modifying": []
    },
    "transparency": "TL–OP",
    "phenomena": null,
    "ri": {
      "norm": "1.580–1.615",
      "range": "+ .020 / − .005",
      "spot": [],
      "overLimit": false
    },
    "birefringence": null,
    "optical": "AGG; Orthorhombic",
    "pleochroism": [],
    "spectra": null,
    "uv": null,
    "sg": "2.20 + .25 / − .20",
    "hardness": "2–4",
    "fracture": "FR: uneven to conchoidal",
    "comments": "Usually a coloring agent in chalcedony; resembles turquoise; enamel-like texture. Eilat stone: rock composed of chrysocolla, turquoise, and pseudo-malachite; blue to green; S.G. 3.00 ± .20."
  },
  {
    "sourceRow": 44,
    "name": "Variscite",
    "zh": "磷铝石",
    "aliases": [],
    "colors": {
      "common": [
        "G"
      ],
      "uncommon": [],
      "modifying": [
        "Y",
        "B"
      ]
    },
    "transparency": "TL–OP",
    "phenomena": null,
    "ri": {
      "norm": "1.560–1.590",
      "range": "+ .003 / − .006",
      "spot": [
        "1.57"
      ],
      "overLimit": false
    },
    "birefringence": null,
    "optical": "AGG; Orthorhombic",
    "pleochroism": [],
    "spectra": {
      "mark": "*",
      "text": "650.0 & 688.0 lines"
    },
    "uv": "LW & SW: inert–weak",
    "sg": "2.50 ± .10",
    "hardness": "3½–5",
    "fracture": "FR: uneven",
    "comments": "Commonly yellowish green with grayish yellow to brown matrix; appears pinkish through color filter. Confused with turquoise and serpentine; R.I., spectra, and color filter key to identification."
  },
  {
    "sourceRow": 45,
    "name": "Saussurite",
    "zh": null,
    "aliases": [],
    "colors": {
      "common": [
        "G"
      ],
      "uncommon": [],
      "modifying": [
        "Y",
        "Gr"
      ]
    },
    "transparency": "TL–OP",
    "phenomena": null,
    "ri": {
      "norm": null,
      "range": null,
      "spot": [
        "1.70",
        "1.56"
      ],
      "overLimit": false
    },
    "birefringence": null,
    "optical": "AGG",
    "pleochroism": [],
    "spectra": {
      "mark": "**",
      "text": "Weak 460.0 band"
    },
    "uv": "SW: inert–moderate",
    "sg": "3.30 + .10 / − .50",
    "hardness": "6½–7",
    "fracture": "FR: granular to uneven",
    "comments": "A rock composed essentially of green zoisite and/or epidote with white feldspar and variable amounts of other minerals; often mottled appearance; often carved and used as a jade simulant."
  },
  {
    "sourceRow": 48,
    "name": "Scapolite",
    "zh": "方柱石",
    "aliases": [],
    "colors": {
      "common": [
        "C",
        "P",
        "R",
        "O",
        "Y",
        "G",
        "B",
        "V"
      ],
      "uncommon": [],
      "modifying": []
    },
    "transparency": "TP–TL",
    "phenomena": "C",
    "ri": {
      "norm": "1.550–1.564",
      "range": "+ .015 / − .014",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".004–.037",
    "optical": "DR; U−; Tetragonal",
    "pleochroism": [
      "2",
      "S",
      "M",
      "W"
    ],
    "spectra": {
      "mark": "*",
      "text": "Varies with color"
    },
    "uv": "LW & SW: inert–strong",
    "sg": "2.68 + .06 / − .08",
    "hardness": "6–6½",
    "fracture": "FR: conchoidal to uneven; CL: 2 perfect",
    "comments": "Scapolite series: properties vary greatly (as R.I. decreases, birefringence decreases); colorless and yellow stones often fluoresce pink to orange; confused with quartz, iolite, beryl, labradorite, and beryllonite."
  },
  {
    "sourceRow": 49,
    "name": "Charoite",
    "zh": "紫硅碱钙石",
    "aliases": [],
    "colors": {
      "common": [
        "V"
      ],
      "uncommon": [],
      "modifying": [
        "P"
      ]
    },
    "transparency": "STL–OP",
    "phenomena": null,
    "ri": {
      "norm": "1.550–1.559",
      "range": "± .002",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".009",
    "optical": "AGG; Monoclinic",
    "pleochroism": [],
    "spectra": null,
    "uv": "LW & SW: inert–weak",
    "sg": "2.68 + .10 / − .14",
    "hardness": "5–6",
    "fracture": "FR: splintery to granular",
    "comments": "Distinctive violet to purplish violet rock containing swirls of greenish black aegirine-augite, greenish gray feldspar, and orange tinaksite; fibrous appearance; may exhibit sheen in areas."
  },
  {
    "sourceRow": 54,
    "name": "Maw-sit-sit",
    "zh": "莫西西",
    "aliases": [],
    "colors": {
      "common": [
        "G",
        "Bl"
      ],
      "uncommon": [],
      "modifying": [
        "Y"
      ]
    },
    "transparency": "OP",
    "phenomena": null,
    "ri": {
      "norm": null,
      "range": "± .010",
      "spot": [
        "1.74",
        "1.53"
      ],
      "overLimit": false
    },
    "birefringence": null,
    "optical": "AGG",
    "pleochroism": [],
    "spectra": null,
    "uv": null,
    "sg": "2.77 + .38 / − .31",
    "hardness": "6",
    "fracture": "FR: granular",
    "comments": "A rock composed primarily of dark green to black ureyite and colorless to white natrolite. Overall appearance is saturated green with dark green to black veining or mottling. Once considered a chrome-rich jadeite and albite intergrowth."
  },
  {
    "sourceRow": 56,
    "name": "Unakite",
    "zh": "尤纳卡石",
    "aliases": [],
    "colors": {
      "common": [
        "R",
        "G",
        "W",
        "Gr"
      ],
      "uncommon": [],
      "modifying": [
        "O"
      ]
    },
    "transparency": "OP",
    "phenomena": null,
    "ri": {
      "norm": null,
      "range": null,
      "spot": [
        "1.74",
        "1.55",
        "1.52"
      ],
      "overLimit": false
    },
    "birefringence": null,
    "optical": "AGG",
    "pleochroism": [],
    "spectra": null,
    "uv": null,
    "sg": "3.00 + .20 / − .15",
    "hardness": "6–7",
    "fracture": "FR: granular to uneven",
    "comments": "A granitic rock composed of green epidote, white to gray quartz, and pink feldspar in a mottled pattern; may contain black veining; properties quite variable."
  },
  {
    "sourceRow": 60,
    "name": "Petalite",
    "zh": "透锂长石",
    "aliases": [],
    "colors": {
      "common": [
        "C"
      ],
      "uncommon": [
        "Y"
      ],
      "modifying": []
    },
    "transparency": "TP",
    "phenomena": null,
    "ri": {
      "norm": "1.504–1.516",
      "range": "+ .006 / − .002",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".012–.016",
    "optical": "DR; B+; Monoclinic",
    "pleochroism": [],
    "spectra": null,
    "uv": "LW & SW: inert–weak",
    "sg": "2.40 + .06 / − .01",
    "hardness": "6–6½",
    "fracture": "FR: subconchoidal; CL: 1 perfect, 2 distinct",
    "comments": "Glassy appearance."
  },
  {
    "sourceRow": 61,
    "name": "Prosopite",
    "zh": null,
    "aliases": [],
    "colors": {
      "common": [
        "C",
        "B",
        "Gr"
      ],
      "uncommon": [],
      "modifying": []
    },
    "transparency": "TP–OP",
    "phenomena": null,
    "ri": {
      "norm": "1.501–1.510",
      "range": null,
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".009",
    "optical": "DR or AGG / B+; Monoclinic",
    "pleochroism": [],
    "spectra": null,
    "uv": null,
    "sg": "2.88 + .02 / − .19",
    "hardness": "4½",
    "fracture": "FR: uneven to conchoidal; CL: 1 perfect",
    "comments": "Massive blue material resembles turquoise."
  },
  {
    "sourceRow": 63,
    "name": "Natrolite",
    "zh": "钠沸石",
    "aliases": [],
    "colors": {
      "common": [
        "C",
        "R",
        "Y",
        "W",
        "Gr"
      ],
      "uncommon": [],
      "modifying": []
    },
    "transparency": "TP–TL",
    "phenomena": null,
    "ri": {
      "norm": "1.480–1.493",
      "range": "+ .003 / − .007",
      "spot": [],
      "overLimit": false
    },
    "birefringence": ".013",
    "optical": "DR; B+; Orthorhombic",
    "pleochroism": [],
    "spectra": null,
    "uv": "LW: inert–moderate",
    "sg": "2.23 ± .03",
    "hardness": "5–5½",
    "fracture": "FR: uneven to conchoidal; CL: 1 perfect",
    "comments": "Facetable crystals very rare; may exhibit parting in one direction. Common as radial aggregates. A component of maw-sit-sit."
  }
];

