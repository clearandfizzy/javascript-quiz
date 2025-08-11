import { Question } from '@/types/QuestionType';

export const questions: Question[] = [
	{
		id: 1,
		text: 'Alpine slopes, star-shaped white bracts, felted texture — which iconic flower?',
		choices: ['Edelweiss', 'Snowdrop', 'Anemone', 'Cistus'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Edelweiss</strong>: woolly white bracts, alpine symbol.</li>
        <li>Snowdrop: nodding white bells in late winter.</li>
        <li>Anemone: petal-like sepals, not felted.</li>
        <li>Cistus: crinkled petals, Mediterranean shrub.</li>
      </ul>
    `
	},
	{
		id: 2,
		text: 'Purple spikes in Provence fields with strong fragrance:',
		choices: ['Lavender', 'Thyme', 'Sage', 'Violet'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Lavender</strong>: tall aromatic spikes, silvery foliage.</li>
        <li>Thyme: low mats, tiny heads.</li>
        <li>Sage: larger leaves, fewer spikes.</li>
        <li>Violet: small low flowers.</li>
      </ul>
    `
	},
	{
		id: 3,
		text: 'Carpeting spring woodlands in Britain with nodding blue bells:',
		choices: ['Bluebell', 'Foxglove', 'Campanula', 'Iris'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Bluebell</strong>: drooping racemes, sweet scent.</li>
        <li>Foxglove: tall tubular bells, summer.</li>
        <li>Campanula: open bells, often upright.</li>
        <li>Iris: large flag-like petals.</li>
      </ul>
    `
	},
	{
		id: 4,
		text: 'Which cornfield wildflower is vivid cobalt-blue with ragged petals?',
		choices: ['Cornflower', 'Chicory', 'Scabious', 'Borage'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Cornflower</strong>: bright blue, frilly florets.</li>
        <li>Chicory: paler sky-blue, open rays.</li>
        <li>Scabious: pincushion head, lilac.</li>
        <li>Borage: starry blue with black anthers.</li>
      </ul>
    `
	},
	{
		id: 5,
		text: 'Scarlet papery petals with black base blotches in cereal fields:',
		choices: ['Common poppy', 'Peony', 'Anemone coronaria', 'Red campion'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Common poppy</strong>: four silky scarlet petals, black heart.</li>
        <li>Peony: many petals, bushy plant.</li>
        <li>Anemone coronaria: Mediterranean garden species.</li>
        <li>Red campion: pink, not scarlet.</li>
      </ul>
    `
	},
	{
		id: 6,
		text: 'First signs of late winter, white drooping bells with green tips:',
		choices: ['Snowdrop', 'Lily of the valley', 'Star-of-Bethlehem', 'Wood anemone'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Snowdrop</strong>: single nodding white flower, Jan–Feb.</li>
        <li>Lily of the valley: many bells on arching stem, later.</li>
        <li>Star-of-Bethlehem: starry, upright.</li>
        <li>Wood anemone: open white, not bell-shaped.</li>
      </ul>
    `
	},
	{
		id: 7,
		text: 'Low rosette, golden ray florets with hollow stems and milky sap:',
		choices: ['Dandelion', 'Hawkweed', 'Oxeye daisy', 'Yarrow'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Dandelion</strong>: single head per stem; milky sap.</li>
        <li>Hawkweed: often branched stems, hairier leaves.</li>
        <li>Oxeye daisy: white rays with yellow disk.</li>
        <li>Yarrow: ferny leaves, flat umbels.</li>
      </ul>
    `
	},
	{
		id: 8,
		text: 'Tiny white starry flowers forming flat-topped umbels in meadows:',
		choices: ['Yarrow', 'Elderflower', 'Queen Anne’s lace', 'Meadowsweet'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Yarrow</strong>: flat corymbs; feathery leaves.</li>
        <li>Elderflower: similar umbels but on a shrub.</li>
        <li>Queen Anne’s lace: larger, lacy, carrot scent.</li>
        <li>Meadowsweet: fluffy cream plumes, not flat.</li>
      </ul>
    `
	},
	{
		id: 9,
		text: 'Fragrant woodland plant with paired glossy leaves and white bells:',
		choices: ['Lily of the valley', 'Solomon’s seal', 'Snowflake', 'Wild garlic'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Lily of the valley</strong>: arching raceme of white bells.</li>
        <li>Solomon’s seal: tubular greenish flowers in pairs.</li>
        <li>Snowflake: larger bells with green tips.</li>
        <li>Wild garlic: starry white umbels, garlicky scent.</li>
      </ul>
    `
	},
	{
		id: 10,
		text: 'Low spring plant with primrose-yellow flowers on separate stalks from a rosette:',
		choices: ['Primrose', 'Cowslip', 'Oxlip', 'Buttercup'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Primrose</strong>: solitary flowers from rosette.</li>
        <li>Cowslip: many nodding blooms on one stem.</li>
        <li>Oxlip: larger, looser cluster, paler.</li>
        <li>Buttercup: glossy yellow, different leaves.</li>
      </ul>
    `
	},
	{
		id: 11,
		text: 'Tall summer spikes with freckled tubular flowers, toxic if eaten:',
		choices: ['Foxglove', 'Mullein', 'Bellflower', 'Hollyhock'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Foxglove</strong>: purple/pink tubes with spots.</li>
        <li>Mullein: yellow, five-petaled, woolly leaves.</li>
        <li>Bellflower: open bells, not tubes.</li>
        <li>Hollyhock: large disk flowers on stalks.</li>
      </ul>
    `
	},
	{
		id: 12,
		text: 'Delicate blue, five-petaled flowers with yellow eye by streams:',
		choices: ['Forget-me-not', 'Speedwell', 'Flax', 'Harebell'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Forget-me-not</strong>: tiny blue with yellow eye.</li>
        <li>Speedwell: often four lobes, paler.</li>
        <li>Flax: larger sky-blue, broader petals.</li>
        <li>Harebell: nodding bells on wiry stems.</li>
      </ul>
    `
	},
	{
		id: 13,
		text: 'Early spring, white star-like flowers carpeting beech woods:',
		choices: ['Wood anemone', 'Stitchwort', 'Star-of-Bethlehem', 'Snowdrop'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Wood anemone</strong>: many white tepals, leaf whorl.</li>
        <li>Stitchwort: deeply notched petals.</li>
        <li>Star-of-Bethlehem: green-striped backs, later.</li>
        <li>Snowdrop: bell, not star-like.</li>
      </ul>
    `
	},
	{
		id: 14,
		text: 'Narrow leaves, purple-veined sepals, spurred flowers in cottage gardens:',
		choices: ['Columbine', 'Larkspur', 'Vetch', 'Pansy'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Columbine</strong>: nodding spurred flowers.</li>
        <li>Larkspur: spurred too, but different leaf form.</li>
        <li>Vetch: pea-flowers on tendrils.</li>
        <li>Pansy: flat-faced blooms.</li>
      </ul>
    `
	},
	{
		id: 15,
		text: 'Rosy-purple carpet on acidic moorland in late summer:',
		choices: ['Heather (Calluna)', 'Bell heather', 'Sea thrift', 'Red clover'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Heather (Calluna)</strong>: tiny scale leaves; dense carpet.</li>
        <li>Bell heather: larger bells, earlier bloom.</li>
        <li>Sea thrift: coastal cushions.</li>
        <li>Red clover: trifoliate leaves, meadows.</li>
      </ul>
    `
	},
	{
		id: 16,
		text: 'Pink pompon heads on coastal cliffs with grass-like leaves:',
		choices: ['Sea thrift', 'Red valerian', 'Sea campion', 'Restharrow'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Sea thrift</strong>: tight pink globes; coastal.</li>
        <li>Red valerian: looser clusters; taller stems.</li>
        <li>Sea campion: white inflated calyx.</li>
        <li>Restharrow: pea-flowers, spiny shrub.</li>
      </ul>
    `
	},
	{
		id: 17,
		text: 'Yellow nodding umbels on a single tall stem in spring pastures:',
		choices: ['Cowslip', 'Primrose', 'Oxlip', 'Marsh marigold'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Cowslip</strong>: many blooms on one stalk.</li>
        <li>Primrose: solitary stalks.</li>
        <li>Oxlip: larger, fewer, paler.</li>
        <li>Marsh marigold: buttercup-like in wetlands.</li>
      </ul>
    `
	},
	{
		id: 18,
		text: 'Dark blue, trumpet-shaped alpine flowers on short stems:',
		choices: ['Gentian', 'Alpine aster', 'Campanula', 'Veronica'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Gentian</strong>: intense blue trumpets.</li>
        <li>Alpine aster: daisy-like rays.</li>
        <li>Campanula: bellflowers, usually paler.</li>
        <li>Veronica: small spikes, not trumpets.</li>
      </ul>
    `
	},
	{
		id: 19,
		text: 'Large white floating blooms on ponds with round leaves:',
		choices: ['White water lily', 'Water crowfoot', 'Bogbean', 'Arrowhead'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>White water lily</strong>: many white petals, floating leaves.</li>
        <li>Water crowfoot: small white, feathery leaves.</li>
        <li>Bogbean: fringed white, emergent.</li>
        <li>Arrowhead: three white petals, arrow leaves.</li>
      </ul>
    `
	},
	{
		id: 20,
		text: 'Bright yellow, shaggy composite with medicinal history from mountains:',
		choices: ['Arnica', 'Hawkbit', 'Goat’s-beard', 'Tansy'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Arnica</strong>: orange-yellow rays, alpine meadows.</li>
        <li>Hawkbit: smaller heads, low stems.</li>
        <li>Goat’s-beard: larger seed clocks, tall.</li>
        <li>Tansy: button-like disks, no rays.</li>
      </ul>
    `
	},
	{
		id: 21,
		text: 'Early spring, silky-haired purple blooms with prominent yellow center on calcareous grassland:',
		choices: ['Pasqueflower', 'Crocus', 'Anemone', 'Hepatica'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Pasqueflower</strong>: silky hairs; Easter bloom.</li>
        <li>Crocus: cup without hairs.</li>
        <li>Anemone: usually white in woods.</li>
        <li>Hepatica: three-lobed leaves, woodland.</li>
      </ul>
    `
	},
	{
		id: 22,
		text: 'Creamy, frothy plumes by stream edges with sweet almond scent:',
		choices: ['Meadowsweet', 'Goat’s-rue', 'Valerian', 'Yarrow'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Meadowsweet</strong>: fluffy sprays; damp places.</li>
        <li>Goat’s-rue: pea-flowers, not plumes.</li>
        <li>Valerian: looser clusters, taller.</li>
        <li>Yarrow: flat-topped, not fluffy.</li>
      </ul>
    `
	},
	{
		id: 23,
		text: 'Roadside pale-blue ray florets on stiff, branched stems; roots used as coffee substitute:',
		choices: ['Chicory', 'Cornflower', 'Fleabane', 'Flax'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Chicory</strong>: sky-blue rays; rigid stems.</li>
        <li>Cornflower: deeper cobalt, softer heads.</li>
        <li>Fleabane: many fine rays, yellowish.</li>
        <li>Flax: delicate, not stiffly branched.</li>
      </ul>
    `
	},
	{
		id: 24,
		text: 'Pink to purple spherical heads on trifoliate leaves with pale chevrons:',
		choices: ['Red clover', 'Knapweed', 'Scabious', 'Sainfoin'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Red clover</strong>: rounded heads; trifoliate leaves.</li>
        <li>Knapweed: thistle-like bracts, tougher heads.</li>
        <li>Scabious: flat pincushion look.</li>
        <li>Sainfoin: pea-flowers in spikes.</li>
      </ul>
    `
	},
	{
		id: 25,
		text: 'Fringed pink-purple flowers on upright stems; favorite of moths on chalk downland:',
		choices: ['Pyramidal orchid', 'Bee orchid', 'Fragrant orchid', 'Marsh orchid'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Pyramidal orchid</strong>: conical dense head.</li>
        <li>Bee orchid: bee-mimic lip, few flowers.</li>
        <li>Fragrant orchid: narrower spikes, strong scent.</li>
        <li>Marsh orchid: wetter habitats.</li>
      </ul>
    `
	},
	{
		id: 26,
		text: 'Brown-and-yellow lip mimicking a pollinator; small plant in dry grassland:',
		choices: ['Bee orchid', 'Fly orchid', 'Toadflax', 'Hellebore'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Bee orchid</strong>: fuzzy, bee-like labellum.</li>
        <li>Fly orchid: darker, slender flowers.</li>
        <li>Toadflax: snapdragon-like, many small flowers.</li>
        <li>Hellebore: greenish cups in woodland.</li>
      </ul>
    `
	},
	{
		id: 27,
		text: 'Large yellow slipper-shaped orchid, extremely rare in Europe:',
		choices: ['Lady’s-slipper orchid', 'Marsh helleborine', 'Twayblade', 'Butterfly orchid'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Lady’s-slipper orchid</strong>: inflated yellow pouch.</li>
        <li>Marsh helleborine: smaller, marbled lip.</li>
        <li>Twayblade: tiny greenish flowers.</li>
        <li>Butterfly orchid: white, slender lip.</li>
      </ul>
    `
	},
	{
		id: 28,
		text: 'Low mats with tiny purple flowers; spicy scent when crushed on dry hills:',
		choices: ['Wild thyme', 'Marjoram', 'Bugle', 'Selfheal'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Wild thyme</strong>: prostrate mats, tiny leaves.</li>
        <li>Marjoram: taller, looser heads.</li>
        <li>Bugle: blue spikes, moist ground.</li>
        <li>Selfheal: purple heads, broader leaves.</li>
      </ul>
    `
	},
	{
		id: 29,
		text: 'White starry umbels with unmistakable garlic smell in spring woods:',
		choices: ['Wild garlic (ramsons)', 'Cow parsley', 'Allium roseum', 'Snowflake'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Wild garlic</strong>: starry umbels; garlic aroma.</li>
        <li>Cow parsley: carrot scent, no garlic.</li>
        <li>Allium roseum: pink allium, not carpets.</li>
        <li>Snowflake: bell flowers, no scent.</li>
      </ul>
    `
	},
	{
		id: 30,
		text: 'Large composite with white rays and yellow disk in hay meadows:',
		choices: ['Oxeye daisy', 'Chamomile', 'Daisy (lawn)', 'Marguerite'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Oxeye daisy</strong>: tall stems; big heads.</li>
        <li>Chamomile: feathery leaves, smaller heads.</li>
        <li>Lawn daisy: tiny, prostrate.</li>
        <li>Marguerite: garden cultivar group.</li>
      </ul>
    `
	},
	{
		id: 31,
		text: 'Soft aromatic foliage, orange-yellow daisy-like blooms used in salves:',
		choices: ['Calendula (pot marigold)', 'Tagetes', 'Tansy', 'Hawkweed'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Calendula</strong>: orange daisies, long bloom.</li>
        <li>Tagetes: different genus, stronger scent.</li>
        <li>Tansy: button disks, no rays.</li>
        <li>Hawkweed: smaller, wiry stems.</li>
      </ul>
    `
	},
	{
		id: 32,
		text: 'Low alpine with solitary purple daisies and yellow centers:',
		choices: ['Alpine aster', 'Fleabane', 'Knapweed', 'Scabious'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Alpine aster</strong>: purple rays; alpine rocks.</li>
        <li>Fleabane: many fine rays, often pinking.</li>
        <li>Knapweed: thistle-like bracts.</li>
        <li>Scabious: domed pincushion head.</li>
      </ul>
    `
	},
	{
		id: 33,
		text: 'Delicate bell on wiry stems in upland grasslands; also called Scottish bluebell:',
		choices: ['Harebell', 'Bluebell', 'Campanula trachelium', 'Lobelia'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Harebell</strong>: thin stems; nodding pale bells.</li>
        <li>Bluebell: dense nodding racemes in woods.</li>
        <li>C. trachelium: larger nettle-leaved bellflower.</li>
        <li>Lobelia: two-lipped, not bell-shaped.</li>
      </ul>
    `
	},
	{
		id: 34,
		text: 'White five-petaled flowers with deep notches; grassy banks in spring:',
		choices: ['Greater stitchwort', 'Wood anemone', 'Chickweed', 'Saxifrage'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Greater stitchwort</strong>: deeply cut petals.</li>
        <li>Wood anemone: tepal look, notched less.</li>
        <li>Chickweed: tiny, sprawling.</li>
        <li>Saxifrage: alpine cushions, different leaves.</li>
      </ul>
    `
	},
	{
		id: 35,
		text: 'Tall spires with many hooded blue-purple flowers; extremely toxic:',
		choices: ['Monkshood', 'Larkspur', 'Delphinium (garden)', 'Viper’s bugloss'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Monkshood</strong>: helmet-shaped flowers.</li>
        <li>Larkspur: spurred petals, looser.</li>
        <li>Delphinium: similar but garden hybrids.</li>
        <li>Viper’s bugloss: rough, bristly, different form.</li>
      </ul>
    `
	},
	{
		id: 36,
		text: 'Showy purple standards and falls; sword-like leaves in fans:',
		choices: ['German bearded iris', 'Siberian iris', 'Gladiolus', 'Asphodel'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>German bearded iris</strong>: beards on falls; rhizomes.</li>
        <li>Siberian iris: slimmer flowers, grassy leaves.</li>
        <li>Gladiolus: one-sided spikes of trumpets.</li>
        <li>Asphodel: starry white, not iris.</li>
      </ul>
    `
	},
	{
		id: 37,
		text: 'Cup-shaped spring blooms emerging from grassy lawns; wide color range from bulbs:',
		choices: ['Tulip', 'Crocus', 'Anemone blanda', 'Ranunculus'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Tulip</strong>: sturdy cups; taller stems.</li>
        <li>Crocus: smaller cups, very early.</li>
        <li>Anemone blanda: daisy-like rays.</li>
        <li>Ranunculus: many-petaled buttercup kin.</li>
      </ul>
    `
	},
	{
		id: 38,
		text: 'Very early cups in late winter with orange stigmas in some species:',
		choices: ['Crocus', 'Winter aconite', 'Snowdrop', 'Iris reticulata'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Crocus</strong>: goblet flowers; grassy leaves.</li>
        <li>Winter aconite: yellow cups with ruff.</li>
        <li>Snowdrop: bell, not cup.</li>
        <li>Iris reticulata: small iris, different shape.</li>
      </ul>
    `
	},
	{
		id: 39,
		text: 'White or pale-pink five-petaled flowers on arching hedgerow shrubs with hooked thorns:',
		choices: ['Dog-rose', 'Hawthorn', 'Blackthorn', 'Bramble'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Dog-rose</strong>: pinkish simple rose; hips later.</li>
        <li>Hawthorn: clusters, lobed leaves.</li>
        <li>Blackthorn: early white blossom on black twigs.</li>
        <li>Bramble: blackberry flowers, different leaves.</li>
      </ul>
    `
	},
	{
		id: 40,
		text: 'Shrub with white, sweetly scented flat umbels in early summer, later black berries:',
		choices: ['Elderflower', 'Wayfaring tree', 'Guelder-rose', 'Rowan'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Elderflower</strong>: flat umbels; pithy stems.</li>
        <li>Wayfaring tree: cymes; felted leaves.</li>
        <li>Guelder-rose: lacecap style, lobed leaves.</li>
        <li>Rowan: white clusters on pinnate leaves tree.</li>
      </ul>
    `
	},
	{
		id: 41,
		text: 'Bog plant with sticky, reddish leaves and tiny white flowers; carnivorous:',
		choices: ['Sundew', 'Butterwort', 'Bog asphodel', 'Cotton grass'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Sundew</strong>: sticky tentacles; traps insects.</li>
        <li>Butterwort: greasy leaves, purple flowers.</li>
        <li>Bog asphodel: yellow starry spikes.</li>
        <li>Cotton grass: fluffy white seed heads.</li>
      </ul>
    `
	},
	{
		id: 42,
		text: 'Tall coastal plant with loose pink-red clusters and grey-green leaves, often on walls:',
		choices: ['Red valerian', 'Campion', 'Bindweed', 'Mallow'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Red valerian</strong>: nectar-rich, wall crevices.</li>
        <li>Campion: five petals, not clustered.</li>
        <li>Bindweed: white/pink trumpets, twining.</li>
        <li>Mallow: flat five-petaled, lobed leaves.</li>
      </ul>
    `
	},
	{
		id: 43,
		text: 'Yellow pea-flowers on very spiny shrubs lighting up heathlands:',
		choices: ['Gorse', 'Broom', 'Dyer’s greenweed', 'Spartium'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Gorse</strong>: coconut-scented, spiny branches.</li>
        <li>Broom: leafier, less spiny.</li>
        <li>Dyer’s greenweed: smaller, slender stems.</li>
        <li>Spartium: Spanish broom; regional.</li>
      </ul>
    `
	},
	{
		id: 44,
		text: 'Meadow composite with ragged purple rays and a hard scaly head (no spines):',
		choices: ['Knapweed', 'Thistle', 'Scabious', 'Teasel'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Knapweed</strong>: ragged rays; hard involucre.</li>
        <li>Thistle: spiny leaves and bracts.</li>
        <li>Scabious: pincushion disk.</li>
        <li>Teasel: spiny, cone heads.</li>
      </ul>
    `
	},
	{
		id: 45,
		text: 'Marshy ground, glossy buttercup-like yellow flowers with many sepals:',
		choices: ['Marsh marigold', 'Kingcup', 'Globeflower', 'Lesser celandine'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Marsh marigold</strong>: big glossy yellow cups.</li>
        <li>Kingcup: common name of same plant.</li>
        <li>Globeflower: spherical, cooler uplands.</li>
        <li>Lesser celandine: smaller, heart leaves.</li>
      </ul>
    `
	},
	{
		id: 46,
		text: 'Low yellow pea-flowers forming bird-foot seed pods in sunny grasslands:',
		choices: ['Bird’s-foot trefoil', 'Medick', 'Vetchling', 'Clover'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Bird’s-foot trefoil</strong>: yellow/orange blooms; “bird-foot” pods.</li>
        <li>Medick: small clover-like heads.</li>
        <li>Vetchling: larger single pea-flowers.</li>
        <li>Clover: round heads, trifoliate leaves.</li>
      </ul>
    `
	},
	{
		id: 47,
		text: 'White-blushed pink blooms on dunes with long creeping stems and arrow leaves:',
		choices: ['Sea bindweed', 'Hedge bindweed', 'Sea campion', 'Glasswort'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Sea bindweed</strong>: silky pink-white trumpets on sand.</li>
        <li>Hedge bindweed: larger, hedgerows inland.</li>
        <li>Sea campion: white with inflated calyx.</li>
        <li>Glasswort: succulent saltmarsh, tiny flowers.</li>
      </ul>
    `
	},
	{
		id: 48,
		text: 'Feathery foliage with apple-like scent; small daisies used for tea:',
		choices: ['Chamomile', 'Scentless mayweed', 'Feverfew', 'Oxeye daisy'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Chamomile</strong>: apple scent; feathery leaves.</li>
        <li>Scentless mayweed: lacks aroma.</li>
        <li>Feverfew: stronger scent, toothed leaves.</li>
        <li>Oxeye daisy: much larger flowers.</li>
      </ul>
    `
	},
	{
		id: 49,
		text: 'Coastal white flowers with inflated, veined calyx like a paper lantern:',
		choices: ['Sea campion', 'Bladder campion', 'Sea rocket', 'Sea kale'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Sea campion</strong>: inflated calyx; cliff edges.</li>
        <li>Bladder campion: inland, similar look.</li>
        <li>Sea rocket: crucifer with fleshy leaves.</li>
        <li>Sea kale: large leaves; white sprays.</li>
      </ul>
    `
	},
	{
		id: 50,
		text: 'Pink-purple heads with protruding stamens on tall stems; beloved by butterflies:',
		choices: ['Field scabious', 'Greater knapweed', 'Thistle', 'Devil’s-bit scabious'],
		correctIndex: 0,
		explanation: `
      <ul>
        <li><strong>Field scabious</strong>: lilac pincushion; branched stems.</li>
        <li>Greater knapweed: ragged rays, tougher head.</li>
        <li>Thistle: spiny leaves and bracts.</li>
        <li>Devil’s-bit scabious: later season, darker lilac.</li>
      </ul>
    `
	}
];