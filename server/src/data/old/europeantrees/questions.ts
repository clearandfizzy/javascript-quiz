import {Question} from "@/types/QuestionType";

export const questions: Question[] = [
	{
		id: 1,
		text: 'Which tree has lobed leaves and produces acorns in Europe?',
		choices: ['Beech', 'Oak', 'Birch', 'Ash'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Oak</strong>: lobed leaves; fruits are acorns.</li>
        <li>Beech: smooth gray bark; no acorns.</li>
        <li>Birch: triangular leaves; catkins.</li>
        <li>Ash: pinnate leaves; winged keys.</li>
      </ul>
    `
	},
	{
		id: 2,
		text: 'Silver birch bark is typically…',
		choices: ['Dark and fissured', 'Coppery and peeling', 'White with black markings', 'Thick and corky'],
		correctIndex: 2,
		explanation: `
      <ul>
        <li><strong>White with black markings</strong>: hallmark of silver birch.</li>
        <li>Dark and fissured: oak/ash traits.</li>
        <li>Coppery: more like paper birch types elsewhere.</li>
        <li>Corky: cork oak, Mediterranean.</li>
      </ul>
    `
	},
	{
		id: 3,
		text: 'European beech leaves are best described as…',
		choices: ['Pinnate with leaflets', 'Needle-like', 'Heart-shaped and toothed', 'Entire with wavy margin'],
		correctIndex: 3,
		explanation: `
      <ul>
        <li><strong>Entire with wavy margin</strong>: classic beech leaf.</li>
        <li>Pinnate: ash, rowan, elder.</li>
        <li>Needle-like: conifers.</li>
        <li>Heart-shaped toothed: lime (linden).</li>
      </ul>
    `
	},
	{
		id: 4,
		text: 'Which conifer in Europe has paired needles and large woody cones?',
		choices: ['Scots pine', 'Yew', 'Juniper', 'Larch'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Scots pine</strong>: blue-green paired needles; cones.</li>
        <li>Yew: flat needles; red arils not cones.</li>
        <li>Juniper: prickly needles; tiny berry-like cones.</li>
        <li>Larch: needles in clusters; cones upright.</li>
      </ul>
    `
	},
	{
		id: 5,
		text: 'Ash (Fraxinus excelsior) leaves are…',
		choices: ['Simple and lobed', 'Needles in bundles', 'Opposite and pinnate', 'Round and leathery'],
		correctIndex: 2,
		explanation: `
      <ul>
        <li><strong>Opposite and pinnate</strong>: many leaflets per leaf.</li>
        <li>Simple lobed: oak/maple.</li>
        <li>Needles: conifers.</li>
        <li>Round leathery: holm oak/olive types.</li>
      </ul>
    `
	},
	{
		id: 6,
		text: 'Which tree has helicopter-like winged seeds (samaras) in pairs?',
		choices: ['Hornbeam', 'Maple/Sycamore', 'Elm', 'Hazel'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Maple/Sycamore</strong>: paired samaras "helicopters".</li>
        <li>Hornbeam: papery bracts, not paired wings.</li>
        <li>Elm: single round samaras.</li>
        <li>Hazel: nuts in husks.</li>
      </ul>
    `
	},
	{
		id: 7,
		text: 'Horse chestnut can be recognized by…',
		choices: ['Palmatel y compound leaves and spiky fruits', 'Simple serrated leaves and catkins', 'Needles and red berries', 'Lobed evergreen leaves'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Palmately compound leaves; spiky conkers</strong>: horse chestnut.</li>
        <li>Serrated + catkins: birch/alder/willow.</li>
        <li>Needles + red berries: yew arils.</li>
        <li>Lobed evergreen: holm oak.</li>
      </ul>
    `
	},
	{
		id: 8,
		text: 'Which Mediterranean oak keeps tough evergreen leaves?',
		choices: ['Sessile oak', 'Pedunculate oak', 'Holm oak', 'Turkey oak'],
		correctIndex: 2,
		explanation: `
      <ul>
        <li><strong>Holm oak</strong>: evergreen, leathery leaves.</li>
        <li>Sessile/Pedunculate: deciduous oaks.</li>
        <li>Turkey oak: deciduous with bristled lobes.</li>
      </ul>
    `
	},
	{
		id: 9,
		text: 'A tree with smooth gray bark, triangular beechnuts in prickly husks is…',
		choices: ['European beech', 'Sweet chestnut', 'Hornbeam', 'Hazel'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>European beech</strong>: smooth bark; three-sided nuts.</li>
        <li>Sweet chestnut: long toothed leaves; spiny burrs.</li>
        <li>Hornbeam: fluted bark; three-lobed bracts.</li>
        <li>Hazel: round leaves; clusters of nuts.</li>
      </ul>
    `
	},
	{
		id: 10,
		text: 'Which willow has long, narrow, drooping leaves and twigs?',
		choices: ['Goat willow', 'Crack willow', 'Weeping willow', 'White willow'],
		correctIndex: 2,
		explanation: `
      <ul>
        <li><strong>Weeping willow</strong>: drooping shoots/leaves.</li>
        <li>Goat: broad oval leaves.</li>
        <li>Crack: brittle twigs; less pendulous.</li>
        <li>White: long leaves but not strongly weeping.</li>
      </ul>
    `
	},
	{
		id: 11,
		text: 'Rowan (mountain ash) fruits are…',
		choices: ['Winged samaras', 'Red/orange berry-like clusters', 'Spiny capsules', 'Nuts in cups'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Red/orange clusters</strong>: classic rowan berries.</li>
        <li>Winged samaras: maples/ash/elm variants.</li>
        <li>Spiny capsules: sweet chestnut burrs.</li>
        <li>Nuts in cups: oaks/hazel.</li>
      </ul>
    `
	},
	{
		id: 12,
		text: 'Which European conifer is deciduous (drops needles in winter)?',
		choices: ['Norway spruce', 'Silver fir', 'Yew', 'European larch'],
		correctIndex: 3,
		explanation: `
      <ul>
        <li><strong>European larch</strong>: deciduous conifer.</li>
        <li>Spruce/fir/yew: evergreen.</li>
      </ul>
    `
	},
	{
		id: 13,
		text: 'Leaves opposite, heart-shaped with serrated edges and sweet-scented flowers describe…',
		choices: ['Lime (linden) tree', 'Hornbeam', 'Birch', 'Elm'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Lime (linden)</strong>: heart-shaped, fragrant bloom.</li>
        <li>Hornbeam: alternate; fluted trunk.</li>
        <li>Birch: triangular; white bark.</li>
        <li>Elm: asymmetrical bases; rough leaves.</li>
      </ul>
    `
	},
	{
		id: 14,
		text: 'Which tree shows winged corky ridges on young branches in Europe?',
		choices: ['Field maple', 'Hornbeam', 'English oak', 'Spindle'],
		correctIndex: 3,
		explanation: `
      <ul>
        <li><strong>Spindle</strong>: often corky wings on stems.</li>
        <li>Field maple: opposite leaves; no corky wings.</li>
        <li>Hornbeam: fluted bark; alternate leaves.</li>
        <li>English oak: typical ridged bark; no wings.</li>
      </ul>
    `
	},
	{
		id: 15,
		text: 'Which has catkins in late winter and round leaves with a heart-shaped base?',
		choices: ['Hazel', 'Alder', 'Birch', 'Poplar'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Hazel</strong>: male catkins; round, softly hairy leaves.</li>
        <li>Alder: catkins too, but glossy not hairy leaves.</li>
        <li>Birch: triangular leaves; white bark.</li>
        <li>Poplar: tall, fluttering leaves; sticky buds.</li>
      </ul>
    `
	},
	{
		id: 16,
		text: 'Plane tree identification key feature in cities is…',
		choices: ['Peeling patchy bark', 'Red arils', 'Paired needles', 'Spiny burr fruits'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Peeling patchy bark</strong>: mottled plane trunks.</li>
        <li>Red arils: yew.</li>
        <li>Paired needles: pines.</li>
        <li>Spiny burrs: chestnut.</li>
      </ul>
    `
	},
	{
		id: 17,
		text: 'Which European tree has “keys” (winged seed clusters) hanging in bunches?',
		choices: ['Ash', 'Elm', 'Maple', 'Hornbeam'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Ash</strong>: bunches of single-winged keys.</li>
        <li>Elm: round single samaras; not in large bunches.</li>
        <li>Maple: paired samaras, not big bunches.</li>
        <li>Hornbeam: three-lobed bracts around seeds.</li>
      </ul>
    `
	},
	{
		id: 18,
		text: 'Which tree often has diamond-shaped lenticels and sticky buds (esp. black poplar)?',
		choices: ['Poplar', 'Willow', 'Birch', 'Alder'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Poplar</strong>: sticky buds; fluttering leaves.</li>
        <li>Willow: flexible twigs; different buds.</li>
        <li>Birch: white bark; small buds.</li>
        <li>Alder: rounded leaves; woody cones.</li>
      </ul>
    `
	},
	{
		id: 19,
		text: 'Which broadleaf carries spiny burrs containing multiple shiny brown nuts?',
		choices: ['Horse chestnut', 'Sweet chestnut', 'Beech', 'Hazel'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Sweet chestnut</strong>: many spines; several nuts per burr.</li>
        <li>Horse chestnut: fewer, larger spines; 1–2 conkers.</li>
        <li>Beech: small prickly husk; triangular nuts.</li>
        <li>Hazel: papery husks, not spiny.</li>
      </ul>
    `
	},
	{
		id: 20,
		text: 'Norway spruce cones typically hang…',
		choices: ['Upright on branches', 'Hanging downwards', 'Embedded in fleshy arils', 'Only on the ground'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Hanging downwards</strong>: spruce cones dangle.</li>
        <li>Upright: fir and larch cones.</li>
        <li>Arils: yew, not cones.</li>
        <li>Ground only: not diagnostic.</li>
      </ul>
    `
	},
	{
		id: 21,
		text: 'Which tree’s leaves have a very asymmetrical base (one side lower)?',
		choices: ['Elm', 'Hornbeam', 'Beech', 'Rowan'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Elm</strong>: classic uneven leaf base.</li>
        <li>Hornbeam: regular base; strong veins.</li>
        <li>Beech: smooth, wavy margins.</li>
        <li>Rowan: pinnate leaflets.</li>
      </ul>
    `
	},
	{
		id: 22,
		text: 'Cork oak is identifiable by its…',
		choices: ['Silver peeling bark', 'Thick corky bark', 'Red papery bark', 'Green smooth bark'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Thick corky bark</strong>: harvested for cork.</li>
        <li>Silver peeling: plane/birch mixups.</li>
        <li>Red papery: not typical in Europe natives.</li>
        <li>Green smooth: some young beeches/limes.</li>
      </ul>
    `
	},
	{
		id: 23,
		text: 'Yew seeds are surrounded by…',
		choices: ['Woody cone scales', 'A red fleshy aril', 'Paired samaras', 'Spiny burrs'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Red fleshy aril</strong>: distinctive yew feature.</li>
        <li>Woody cones: spruces/firs.</li>
        <li>Paired samaras: maples.</li>
        <li>Spiny burrs: chestnuts.</li>
      </ul>
    `
	},
	{
		id: 24,
		text: 'Hornbeam seeds are associated with…',
		choices: ['Three-lobed papery bracts', 'Paired samaras', 'Round nutlets in cups', 'Red arils'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Three-lobed papery bracts</strong>: hornbeam signature.</li>
        <li>Paired samaras: maples.</li>
        <li>Nutlets in cups: oaks/hazels.</li>
        <li>Arils: yew.</li>
      </ul>
    `
	},
	{
		id: 25,
		text: 'Scots pine mature bark near the crown often appears…',
		choices: ['White and smooth', 'Orange and flaky', 'Black and furrowed', 'Green and waxy'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Orange and flaky</strong>: typical upper Scots pine bark.</li>
        <li>White smooth: birch.</li>
        <li>Black furrowed: old oak.</li>
        <li>Green waxy: not a bark trait.</li>
      </ul>
    `
	},
	{
		id: 26,
		text: 'Which species has large sticky buds and palmate leaves with 5–7 leaflets?',
		choices: ['Horse chestnut', 'Sycamore', 'Field maple', 'Elm'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Horse chestnut</strong>: big sticky buds; palmate leaves.</li>
        <li>Sycamore: simple 5-lobed leaf, not leaflets.</li>
        <li>Field maple: small lobed simple leaf.</li>
        <li>Elm: asymmetrical base; rough texture.</li>
      </ul>
    `
	},
	{
		id: 27,
		text: 'Alder often grows by water and shows…',
		choices: ['Woody cone-like catkins', 'Spiny burrs', 'Red arils', 'Paired samaras'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Woody cone-like catkins</strong>: persistent alder cones.</li>
        <li>Spiny burrs: chestnut.</li>
        <li>Red arils: yew.</li>
        <li>Paired samaras: maples.</li>
      </ul>
    `
	},
	{
		id: 28,
		text: 'Which maple is common in Europe with large leaves and black leaf-spot in summer?',
		choices: ['Sugar maple', 'Norway maple', 'Sycamore (Acer pseudoplatanus)', 'Japanese maple'],
		correctIndex: 2,
		explanation: `
      <ul>
        <li><strong>Sycamore (Acer pseudoplatanus)</strong>: common, tar-spot fungus.</li>
        <li>Norway: also common; milky sap, different tar-spot pattern.</li>
        <li>Sugar/Japanese: non-native ornamental types.</li>
      </ul>
    `
	},
	{
		id: 29,
		text: 'Which has very hard, fluted gray trunk and serrated leaves with strong veins?',
		choices: ['Hornbeam', 'Beech', 'Elm', 'Hazel'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Hornbeam</strong>: fluted trunk; tough wood.</li>
        <li>Beech: smooth trunk.</li>
        <li>Elm: uneven leaf bases.</li>
        <li>Hazel: softer, rounded leaves.</li>
      </ul>
    `
	},
	{
		id: 30,
		text: 'Mediterranean umbrella-like crown with huge round cones and edible seeds describes…',
		choices: ['Stone pine', 'Aleppo pine', 'Norway spruce', 'Larch'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Stone pine</strong>: umbrella crown; pine nuts.</li>
        <li>Aleppo: smaller cones; irregular crown.</li>
        <li>Spruce/larch: different forms.</li>
      </ul>
    `
	},
	{
		id: 31,
		text: 'Blackthorn (sloe) differs from hawthorn mainly by…',
		choices: ['White spring blossom', 'Red berries', 'Thorns and blackish bark', 'Palmate leaves'],
		correctIndex: 2,
		explanation: `
      <ul>
        <li><strong>Thorns + blackish bark</strong>: blackthorn; blue sloes.</li>
        <li>White blossom: both have it.</li>
        <li>Red berries: hawthorn haws, not blackthorn.</li>
        <li>Palmate leaves: not either.</li>
      </ul>
    `
	},
	{
		id: 32,
		text: 'Which native UK conifer has flat, soft needles and red arils?',
		choices: ['Yew', 'Scots pine', 'Spruce', 'Larch'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Yew</strong>: flat needles; red arils.</li>
        <li>Pine/spruce/larch: woody cones instead.</li>
      </ul>
    `
	},
	{
		id: 33,
		text: 'Wild cherry in spring is notable for…',
		choices: ['Catkins before leaves', 'Masses of white blossom', 'Red arils', 'Spiny burrs'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Masses of white blossom</strong>: wild cherry show.</li>
        <li>Catkins: birch, hazel, alder, willow.</li>
        <li>Arils: yew.</li>
        <li>Burrs: chestnut.</li>
      </ul>
    `
	},
	{
		id: 34,
		text: 'Which species has opposite leaves and produces winged fruits in clusters, often invasive riversides?',
		choices: ['Sycamore maple', 'Ash', 'Alder', 'Box elder (Acer negundo)'],
		correctIndex: 3,
		explanation: `
      <ul>
        <li><strong>Box elder</strong>: opposite leaves; prolific samaras.</li>
        <li>Sycamore: opposite too but simple leaves.</li>
        <li>Ash: opposite pinnate keys, different clusters.</li>
        <li>Alder: alternate leaves.</li>
      </ul>
    `
	},
	{
		id: 35,
		text: 'Which olive-family evergreen with narrow silvery leaves is common in Mediterranean Europe?',
		choices: ['Olive', 'Holm oak', 'Cork oak', 'Stone pine'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Olive</strong>: narrow gray-green, opposite leaves.</li>
        <li>Holm/Cork: oaks with tougher leaves.</li>
        <li>Stone pine: needles.</li>
      </ul>
    `
	},
	{
		id: 36,
		text: 'Which tree’s leaf underside is white, giving canopy a two-tone shimmering effect?',
		choices: ['White poplar', 'Aspen', 'Silver birch', 'Lime'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>White poplar</strong>: white felted undersides.</li>
        <li>Aspen: pale underside but not white felted.</li>
        <li>Silver birch: pale bark, not leaf underside.</li>
        <li>Lime: lighter underside but not felted white.</li>
      </ul>
    `
	},
	{
		id: 37,
		text: 'European aspen leaves are roundish and tremble due to…',
		choices: ['Flat leaf stalks', 'Windy habitats only', 'Leaf hairs', 'Sticky resin'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Flat leaf stalks</strong>: petiole causes flutter.</li>
        <li>Windy sites: exaggerates but not cause.</li>
        <li>Leaf hairs: not key here.</li>
        <li>Resin: conifer trait.</li>
      </ul>
    `
	},
	{
		id: 38,
		text: 'Which cypress has tall columnar form commonly used as windbreaks in Mediterranean?',
		choices: ['Lawson cypress', 'Monterey cypress', 'Italian cypress', 'Juniper'],
		correctIndex: 2,
		explanation: `
      <ul>
        <li><strong>Italian cypress</strong>: very columnar habit.</li>
        <li>Lawson/Monterey: broader crowns.</li>
        <li>Juniper: shrubs/trees; not so columnar.</li>
      </ul>
    `
	},
	{
		id: 39,
		text: 'Which species has distinctive papery peels revealing green, cream, and brown patches?',
		choices: ['London plane', 'Silver birch', 'Sycamore', 'Whitebeam'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>London plane</strong>: mottled peeling bark.</li>
        <li>Birch: white bark strips but different pattern.</li>
        <li>Sycamore: less patchy; rough plates.</li>
        <li>Whitebeam: smoother gray bark.</li>
      </ul>
    `
	},
	{
		id: 40,
		text: 'Whitebeam leaves are notable for…',
		choices: ['Silvery felted undersides', 'Deep lobes', 'Pinnate leaflets', 'Needles in clusters'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Silvery felted undersides</strong>: “white” beam.</li>
        <li>Deep lobes: oak/maple.</li>
        <li>Pinnate: ash/rowan.</li>
        <li>Needles: conifers.</li>
      </ul>
    `
	},
	{
		id: 41,
		text: 'Mediterranean strawberry tree (Arbutus) is recognizable by…',
		choices: ['Red peeling bark and red strawberry-like fruits', 'Spiny burrs', 'Paired samaras', 'Catkins'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Red peeling bark; strawberry-like fruits</strong>: Arbutus.</li>
        <li>Spiny burrs: chestnut.</li>
        <li>Paired samaras: maple.</li>
        <li>Catkins: birch/alder/willow/hazel.</li>
      </ul>
    `
	},
	{
		id: 42,
		text: 'Which elm native to Europe has large leaves and a broad crown in upland areas?',
		choices: ['English elm', 'Wych elm', 'Siberian elm', 'Field elm'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Wych elm</strong>: big leaves; upland/rocky sites.</li>
        <li>English/Field: smaller leaves; suckering forms.</li>
        <li>Siberian: non-native.</li>
      </ul>
    `
	},
	{
		id: 43,
		text: 'Goat willow (pussy willow) is famous for…',
		choices: ['Red arils', 'Showy silver catkins in early spring', 'Huge spiny cones', 'Paired samaras'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Showy silver catkins</strong>: “pussy willow”.</li>
        <li>Arils: yew.</li>
        <li>Spiny cones: not a thing.</li>
        <li>Samaras: maples/ash/elm.</li>
      </ul>
    `
	},
	{
		id: 44,
		text: 'Which tree shows large, hand-shaped simple leaves and paired samaras with a wide angle?',
		choices: ['Sycamore maple', 'Norway maple', 'Field maple', 'Plane'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Norway maple</strong>: wide-angle paired samaras; milky sap.</li>
        <li>Sycamore: more closed-angle samaras.</li>
        <li>Field: smaller leaves, rounded lobes.</li>
        <li>Plane: balls of achenes, not samaras.</li>
      </ul>
    `
	},
	{
		id: 45,
		text: 'Which riparian tree has long catkins and narrow lanceolate leaves with silvery sheen?',
		choices: ['White willow', 'Alder', 'Poplar', 'Hazel'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>White willow</strong>: long narrow silvery leaves.</li>
        <li>Alder: rounder leaves; cones.</li>
        <li>Poplar: triangular/round leaves; sticky buds.</li>
        <li>Hazel: round hairy leaves.</li>
      </ul>
    `
	},
	{
		id: 46,
		text: 'Mediterranean evergreen with very small, opposite, aromatic leaves and black pods?',
		choices: ['Olive', 'Carob', 'Cypress', 'Holly'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Carob</strong>: leathery leaves; long dark pods.</li>
        <li>Olive: narrow leaves; drupes.</li>
        <li>Cypress: scale leaves; cones.</li>
        <li>Holly: spiny evergreen leaves; red berries.</li>
      </ul>
    `
	},
	{
		id: 47,
		text: 'Holly identification feature for fruits/leaves:',
		choices: ['Blue berries and smooth leaves', 'Red berries and spiny evergreen leaves', 'Winged seeds and lobed leaves', 'Catkins and hairy leaves'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Red berries + spiny evergreen leaves</strong>: holly.</li>
        <li>Blue berries: not holly in Europe.</li>
        <li>Winged seeds: maples.</li>
        <li>Catkins: birch/alder/willow/hazel.</li>
      </ul>
    `
	},
	{
		id: 48,
		text: 'Which oak has acorns sitting directly on twigs (no long stalks)?',
		choices: ['Pedunculate oak', 'Sessile oak', 'Turkey oak', 'Holm oak'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Sessile oak</strong>: acorns sessile on twigs.</li>
        <li>Pedunculate: acorns on long stalks.</li>
        <li>Turkey: bristly cup scales; on stalks.</li>
        <li>Holm: evergreen; variable stalks.</li>
      </ul>
    `
	},
	{
		id: 49,
		text: 'Which plane tree fruiting structure is typical?',
		choices: ['Large paired samaras', 'Clusters of spiky balls on stalks', 'Red fleshy arils', 'Woody cones'],
		correctIndex: 1,
		explanation: `
      <ul>
        <li><strong>Clusters of spiky balls</strong>: plane achenes.</li>
        <li>Paired samaras: maples.</li>
        <li>Arils: yew.</li>
        <li>Woody cones: conifers.</li>
      </ul>
    `
	},
	{
		id: 50,
		text: 'Which Mediterranean pine has slender needles and irregular open crown; common on coasts?',
		choices: ['Stone pine', 'Scots pine', 'Aleppo pine', 'Black pine'],
		correctIndex: 2,
		explanation: `
      <ul>
        <li><strong>Aleppo pine</strong>: slender needles; open crown; coastal.</li>
        <li>Stone pine: umbrella crown; big cones.</li>
        <li>Scots pine: orange bark; northern range.</li>
        <li>Black pine: stout needles; darker bark.</li>
      </ul>
    `
	}
];