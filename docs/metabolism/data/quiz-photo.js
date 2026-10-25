/* SBI4U Unit 2 Metabolic Processes - photosynthesis knowledge bank (lessons 2.08-2.11).
   Fields: id, lesson ("2.08".."2.11" | "mix"), type ("mcq" | "tf"), kind, tier ("essential" | "likely" | "extra"),
   level (1 = recall, 2 = understanding), q, options (mcq only, exactly 4), answer (index or boolean), explain.
   Class values: 1 ATP per 4 H+; per G3P 3 CO2, 9 ATP, 6 NADPH; per glucose 6 CO2, 18 ATP, 12 NADPH;
   photorespiration loses 25% of the carbon. */
window.QUIZ = window.QUIZ || [];
window.QUIZ.push(
  /* ---------------- 2.08 Intro to Photosynthesis ---------------- */
  { id: "p001", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which is the balanced overall equation for photosynthesis?",
    options: [
      "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + energy",
      "6 O<sub>2</sub> + 6 H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 CO<sub>2</sub>",
      "6 CO<sub>2</sub> + 6 H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub>",
      "6 CO<sub>2</sub> + 6 H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 3 O<sub>2</sub>"
    ],
    answer: 2,
    explain: "Carbon dioxide and water are the reactants, glucose and oxygen are the products, and light supplies the energy. The first option is cellular respiration (the reverse reaction). The last option is not balanced: 6 CO<sub>2</sub> + 6 H<sub>2</sub>O hold 18 O atoms, glucose holds 6, so 12 O atoms (6 O<sub>2</sub>) must be released." },

  { id: "p002", lesson: "2.08", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Photosynthesis is an anabolic, endergonic process.",
    answer: true,
    explain: "It builds a large molecule (glucose) from small ones (CO<sub>2</sub> and H<sub>2</sub>O), so it is anabolic, and the products hold more free energy than the reactants, so it is endergonic. Light supplies that energy. Cellular respiration is the reverse: catabolic and exergonic." },

  { id: "p003", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "In photosynthesis, which substance is reduced and which is oxidized?",
    options: [
      "CO<sub>2</sub> is reduced to glucose; H<sub>2</sub>O is oxidized to O<sub>2</sub>",
      "H<sub>2</sub>O is reduced to O<sub>2</sub>; CO<sub>2</sub> is oxidized to glucose",
      "Glucose is reduced to CO<sub>2</sub>; O<sub>2</sub> is oxidized to H<sub>2</sub>O",
      "CO<sub>2</sub> is oxidized to O<sub>2</sub>; H<sub>2</sub>O is reduced to glucose"
    ],
    answer: 0,
    explain: "Carbon dioxide gains electrons (with hydrogen) to become glucose, so it is reduced. Water loses its electrons when it is split, and its oxygen is released as O<sub>2</sub>, so water is oxidized. In cellular respiration the roles reverse: glucose is oxidized and O<sub>2</sub> is reduced." },

  { id: "p004", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Where do the electrons used to reduce CO<sub>2</sub> to sugar ultimately come from?",
    options: [
      "Carbon dioxide itself",
      "Glucose stored in the leaf",
      "Chlorophyll, which is used up as it loses electrons",
      "Water"
    ],
    answer: 3,
    explain: "Water is split (photolysis) and its electrons replace the ones light knocks out of chlorophyll; they then travel down the electron transport chain to NADP<sup>+</sup>, and NADPH delivers them to the Calvin cycle. Chlorophyll only passes electrons on and gets them back from water, so it is not used up. Glucose is the electron source in respiration, not photosynthesis." },

  { id: "p005", lesson: "2.08", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "The O<sub>2</sub> released by photosynthesis comes from the carbon dioxide the leaf takes in.",
    answer: false,
    explain: "The O<sub>2</sub> comes from water, which is split in the light reactions. The oxygen atoms of CO<sub>2</sub> end up in the sugar made by the Calvin cycle. This was stressed in class: O<sub>2</sub> comes from H<sub>2</sub>O, not CO<sub>2</sub>." },

  { id: "p006", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which two molecules carry the energy captured from light to the reactions that reduce CO<sub>2</sub>?",
    options: [
      "ATP and NADH",
      "ATP and NADPH",
      "NADPH and FADH<sub>2</sub>",
      "GTP and NADH"
    ],
    answer: 1,
    explain: "The light reactions store light energy in ATP (chemical energy) and NADPH (a high-energy electron carrier). NADH and FADH<sub>2</sub> are the carriers of cellular respiration; the extra P in NADPH is the clue that it is the photosynthesis carrier." },

  { id: "p007", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Where do the two stages of photosynthesis take place?",
    options: [
      "Light reactions in the stroma; Calvin cycle in the thylakoid membrane",
      "Light reactions in the mitochondrial matrix; Calvin cycle in the cytoplasm",
      "Light reactions in the thylakoid membrane; Calvin cycle in the stroma",
      "Light reactions in the thylakoid lumen; Calvin cycle in the intermembrane space"
    ],
    answer: 2,
    explain: "The photosystems and the electron transport chain are embedded in the thylakoid membrane, so the light reactions happen there. The Calvin cycle enzymes are dissolved in the stroma, the fluid around the grana. The first option swaps the two; the others name mitochondrial or wrong compartments." },

  { id: "p008", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which leaf tissue carries out most of the photosynthesis?",
    options: [
      "Upper epidermis",
      "Xylem",
      "Phloem",
      "Mesophyll"
    ],
    answer: 3,
    explain: "The mesophyll is a parenchyma tissue packed with chloroplasts, so it is the photosynthetic tissue of the leaf. The epidermis is a protective outer layer, and xylem and phloem are transport tissues in the veins." },

  { id: "p009", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In a dicot leaf, the mesophyll is made of which two layers?",
    options: [
      "Palisade mesophyll and spongy mesophyll",
      "Upper epidermis and lower epidermis",
      "Xylem and phloem",
      "Bundle sheath and guard cells"
    ],
    answer: 0,
    explain: "Palisade cells are tall, tightly packed and full of chloroplasts, just under the upper epidermis; spongy mesophyll is loosely packed with air spaces for gas exchange. The other pairs are real leaf structures, but they are not mesophyll." },

  { id: "p010", lesson: "2.08", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "As noted in class, monocot leaves (which grow vertically) have only spongy mesophyll, not separate palisade and spongy layers.",
    answer: true,
    explain: "Said in class: monocots such as grasses hold their leaves upright, and they have only spongy mesophyll. Dicots have both palisade and spongy mesophyll." },

  { id: "p011", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Through which openings does CO<sub>2</sub> enter a leaf and O<sub>2</sub> leave it?",
    options: [
      "Plasmodesmata",
      "Stomata",
      "Pores in the waxy cuticle",
      "Xylem vessels"
    ],
    answer: 1,
    explain: "Stomata (each controlled by two guard cells) open and close for gas exchange; water vapour also escapes through them. Plasmodesmata are channels between neighbouring cells, the cuticle is a waxy waterproof layer with no pores, and xylem carries water up from the roots." },

  { id: "p012", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is a thylakoid?",
    options: [
      "The fluid matrix that surrounds the grana",
      "A stack of membrane discs",
      "A membrane-bound flattened sac inside the chloroplast",
      "The space between the outer and inner chloroplast membranes"
    ],
    answer: 2,
    explain: "A thylakoid is a single flattened membrane sac; its membrane holds the photosystems and the electron transport chain. A stack of thylakoids is a granum, and the fluid around the grana is the stroma." },

  { id: "p013", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is a granum?",
    options: [
      "The fluid inside the inner membrane",
      "The space inside one thylakoid",
      "A channel that connects two neighbouring cells",
      "A stack of thylakoids"
    ],
    answer: 3,
    explain: "A granum (plural grana) is a stack of thylakoids, like a pile of coins. The fluid inside the inner membrane is the stroma, the space inside one thylakoid is the thylakoid lumen, and channels between cells are plasmodesmata." },

  { id: "p014", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which part of the chloroplast is the fluid matrix that surrounds the grana?",
    options: [
      "Stroma",
      "Thylakoid lumen",
      "Matrix",
      "Intermembrane space"
    ],
    answer: 0,
    explain: "The stroma is the chloroplast's fluid, and the Calvin cycle happens there. Matrix is the name of the fluid inside a mitochondrion, the intermembrane space lies between the two envelope membranes, and the lumen is inside each thylakoid." },

  { id: "p015", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the thylakoid lumen?",
    options: [
      "The fluid that surrounds the grana",
      "The space inside a thylakoid",
      "The space between the outer and inner membranes",
      "The folded inner membrane of the chloroplast"
    ],
    answer: 1,
    explain: "The lumen is the inside of each thylakoid sac. During the light reactions H<sup>+</sup> is pumped into it, so it has the high H<sup>+</sup> concentration. The fluid around the grana is the stroma, and a folded inner membrane (cristae) belongs to the mitochondrion, not the chloroplast." },

  { id: "p016", lesson: "2.08", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "A chloroplast is surrounded by a single membrane.",
    answer: false,
    explain: "A chloroplast has a double membrane: an outer membrane and an inner membrane. The thylakoids are a third membrane system inside, surrounded by the stroma. Mitochondria also have a double membrane." },

  { id: "p017", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "On a chloroplast diagram, a label line points to one of the piles of disc-shaped sacs that look like stacks of coins. Which label is correct?",
    options: [
      "Stroma",
      "Thylakoid lumen",
      "Granum",
      "Cristae"
    ],
    answer: 2,
    explain: "A stack of thylakoids is a granum (plural grana). The stroma is the fluid around the stacks, the lumen is the space inside one thylakoid, and cristae are the folds of the inner mitochondrial membrane." },

  { id: "p018", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "On a chloroplast diagram, a label line points to the membrane that forms the wall of a single disc within a granum. Which label is correct?",
    options: [
      "Inner membrane",
      "Outer membrane",
      "Stroma",
      "Thylakoid membrane"
    ],
    answer: 3,
    explain: "Each disc is a thylakoid, and its wall is the thylakoid membrane, where the photosystems, electron transport chain and ATP synthase sit. The inner and outer membranes form the double envelope around the whole chloroplast." },

  { id: "p019", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "extra", level: 1,
    q: "Which structures connect one granum to another inside a chloroplast?",
    options: [
      "Stroma lamellae (unstacked thylakoid membranes)",
      "Plasmodesmata",
      "Cristae",
      "Microtubules of the cytoskeleton"
    ],
    answer: 0,
    explain: "Stroma lamellae are flat thylakoid membranes that run through the stroma and link neighbouring grana, so the thylakoid system is one continuous network. Plasmodesmata link cells, not grana, and cristae are in mitochondria." },

  { id: "p020", lesson: "2.08", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Visible light has wavelengths from about 380 nm to 750 nm.",
    answer: true,
    explain: "Light is electromagnetic radiation that travels in waves; the visible part runs from violet (about 380 nm) to red (about 750 nm). Shorter wavelengths carry more energy per photon." },

  { id: "p021", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which three things can happen to light when it strikes a leaf?",
    options: [
      "Oxidation, reduction and phosphorylation",
      "Absorption, transmission and reflection",
      "Excitation, fluorescence and photolysis",
      "Refraction, combustion and absorption"
    ],
    answer: 1,
    explain: "Light can be absorbed (taken in by pigments), transmitted (pass through) or reflected (bounce off). Only absorbed light can power photosynthesis. Excitation and photolysis happen after light is absorbed; they are not things that happen to the light itself." },

  { id: "p022", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is a pigment?",
    options: [
      "A protein that pumps H<sup>+</sup> across a membrane",
      "A molecule that gives off light of its own colour",
      "A compound that absorbs certain wavelengths of visible light and reflects others",
      "A compound that absorbs all wavelengths of visible light equally"
    ],
    answer: 2,
    explain: "A pigment absorbs some wavelengths and reflects (or transmits) the rest; the reflected wavelengths are the colour you see. A compound that absorbed all wavelengths equally would look black, not coloured." },

  { id: "p023", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why do most leaves look green?",
    options: [
      "Chlorophyll absorbs green light most strongly and then glows green",
      "Green light carries the most energy, so leaves absorb it to power photosynthesis",
      "Leaves contain no pigments that absorb any green light at all",
      "Chlorophyll absorbs red and blue-violet light strongly but absorbs little green, so green light is reflected and transmitted"
    ],
    answer: 3,
    explain: "The colour you see is the light that is not absorbed. Chlorophyll's absorption peaks are in the blue-violet and red, with a dip in the green, so green is reflected and transmitted. Chlorophyll does not glow green, and some accessory pigments do absorb a little green light (all pigments together absorb across the visible range)." },

  { id: "p024", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does an absorption spectrum show?",
    options: [
      "How much light a substance absorbs at each wavelength",
      "The colours of light a leaf reflects",
      "How fast photosynthesis runs at each temperature",
      "The order of pigments on a chromatogram"
    ],
    answer: 0,
    explain: "An absorption spectrum is a graph of light absorbed (y-axis) against wavelength (x-axis). Each pigment has its own spectrum; chlorophyll a and b peak in the blue-violet and red, carotenoids in the blue-green." },

  { id: "p025", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which pigment is the primary photosynthetic pigment?",
    options: [
      "Chlorophyll b",
      "Chlorophyll a",
      "β-carotene",
      "Xanthophyll"
    ],
    answer: 1,
    explain: "Chlorophyll a is the primary pigment: the special chlorophyll a at each reaction centre is the one that gives up an excited electron. Chlorophyll b, carotenoids and xanthophylls are accessory pigments that pass absorbed energy to chlorophyll a." },

  { id: "p026", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the role of chlorophyll b?",
    options: [
      "It is the reaction-centre pigment that gives up electrons to the primary acceptor",
      "It splits water to release oxygen",
      "It reflects all light to protect the leaf from damage",
      "It is an accessory pigment that absorbs photons chlorophyll a absorbs poorly and passes the energy on"
    ],
    answer: 3,
    explain: "Chlorophyll b absorbs wavelengths (for example around 450 nm and 640 nm) that chlorophyll a absorbs poorly, which widens the range of light the plant can use. It passes the energy to chlorophyll a. Only the special chlorophyll a at the reaction centre gives up electrons, and water is split by the Z protein of photosystem II." },

  { id: "p027", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which group of accessory pigments includes β-carotene and gives leaves their yellow-orange colour in the fall?",
    options: [
      "Carotenoids",
      "Anthocyanins",
      "Chlorophylls",
      "Phycocyanins"
    ],
    answer: 0,
    explain: "Carotenoids such as β-carotene are yellow-orange. They are in the leaf all summer but hidden by chlorophyll. Anthocyanins give red colours; phycocyanins are pigments of cyanobacteria and red algae, not of leaves." },

  { id: "p028", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which accessory pigments give leaves a yellow colour in the fall?",
    options: [
      "Anthocyanins",
      "Xanthophylls",
      "Chlorophyll b",
      "Phycoerythrins"
    ],
    answer: 1,
    explain: "Xanthophylls are yellow accessory pigments (they belong to the carotenoid family). Anthocyanins are red, chlorophyll b is yellow-green to olive, and phycoerythrins are red pigments of red algae." },

  { id: "p029", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which pigments give leaves a red colour in the fall?",
    options: [
      "Xanthophylls",
      "Carotenes",
      "Anthocyanins",
      "Chlorophyll a"
    ],
    answer: 2,
    explain: "Anthocyanins are red pigments. Xanthophylls are yellow, carotenes are yellow-orange, and chlorophyll a is blue-green." },

  { id: "p030", lesson: "2.08", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "β-carotene is a precursor of vitamin A, which helps your eyes see in low light.",
    answer: true,
    explain: "From the slides: β-carotene is a precursor of vitamin A, which is needed for low-light vision. That is why carrots (rich in β-carotene) are linked with good night vision." },

  { id: "p031", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why do many leaves turn yellow and orange in the fall?",
    options: [
      "Cold temperatures convert chlorophyll directly into carotene",
      "The leaf makes new yellow and orange pigments to absorb more light before winter",
      "Xanthophylls absorb yellow light more strongly in cold weather",
      "Chlorophyll breaks down and is not replaced, unmasking carotenoids and xanthophylls that were there all along"
    ],
    answer: 3,
    explain: "In summer, the large amount of chlorophyll hides the yellow and orange pigments. In fall the tree stops replacing chlorophyll as it breaks down, so the carotenoids and xanthophylls already present show through. A pigment looks yellow because it reflects yellow light, not because it absorbs it." },

  { id: "p032", lesson: "2.08", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "The red of some fall leaves comes from anthocyanins, which are made in the fall rather than simply being unmasked like the carotenoids.",
    answer: true,
    explain: "Carotenoids and xanthophylls are present all summer and are revealed when chlorophyll breaks down. Anthocyanins are produced in the fall (from sugars trapped in the leaf), which is why red colours vary so much from year to year." },

  { id: "p033", lesson: "2.08", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Even with all of a leaf's pigments combined, light is absorbed only in the red and blue-violet parts of the visible spectrum.",
    answer: false,
    explain: "From the PAR (photosynthetically active radiation) slide: when all pigments are combined, light is absorbed from the entire visible spectrum. Chlorophyll a, chlorophyll b and the carotenoids absorb overlapping bands, so the accessory pigments fill the gaps that chlorophyll a leaves. Red and blue-violet are just chlorophyll a's peaks." },

  { id: "p034", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "How is the R<sub>f</sub> value of a pigment calculated?",
    options: [
      "Distance moved by the pigment from the origin ÷ distance moved by the solvent front from the origin",
      "Distance moved by the solvent front ÷ distance moved by the pigment",
      "Distance moved by the pigment ÷ total length of the paper",
      "Distance from the solvent front down to the pigment ÷ distance moved by the solvent"
    ],
    answer: 0,
    explain: "R<sub>f</sub> = pigment distance ÷ solvent distance, both measured from the origin (pencil) line. Because the pigment can never pass the solvent front, R<sub>f</sub> is always between 0 and 1. The second option is upside down and would give values above 1." },

  { id: "p035", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which leaf pigment has the highest R<sub>f</sub> value in the chromatography lab?",
    options: [
      "Chlorophyll b",
      "Carotene",
      "Chlorophyll a",
      "Xanthophyll"
    ],
    answer: 1,
    explain: "Carotene is the least polar pigment, so it is the most soluble in the nonpolar solvent and travels almost with the solvent front: highest R<sub>f</sub>. Xanthophyll is next, then chlorophyll a, then chlorophyll b." },

  { id: "p036", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which leaf pigment has the lowest R<sub>f</sub> value?",
    options: [
      "Carotene",
      "Xanthophyll",
      "Chlorophyll b",
      "Chlorophyll a"
    ],
    answer: 2,
    explain: "Chlorophyll b is the most polar of the four pigments, so it is the least soluble in the solvent and sticks most to the polar paper. It stays lowest on the strip. Chlorophyll a is just above it." },

  { id: "p037", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "From the top of the chromatogram (nearest the solvent front) to the bottom, what is the order of the pigment bands?",
    options: [
      "Chlorophyll a, chlorophyll b, xanthophyll, carotene",
      "Xanthophyll, carotene, chlorophyll b, chlorophyll a",
      "Carotene, chlorophyll a, xanthophyll, chlorophyll b",
      "Carotene, xanthophyll, chlorophyll a, chlorophyll b"
    ],
    answer: 3,
    explain: "Most soluble travels furthest: carotene (yellow-orange) at the top, then xanthophyll (yellow), chlorophyll a (blue-green), and chlorophyll b (yellow-green to olive) lowest." },

  { id: "p038", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What colour is the chlorophyll a band on the chromatogram?",
    options: [
      "Bright green to blue-green",
      "Yellow to yellow-orange",
      "Yellow-green to olive green",
      "Yellow"
    ],
    answer: 0,
    explain: "Chlorophyll a is bright green to blue-green. Carotene is yellow to yellow-orange, xanthophyll is yellow, and chlorophyll b is yellow-green to olive green." },

  { id: "p039", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What colour is the chlorophyll b band on the chromatogram?",
    options: [
      "Bright green to blue-green",
      "Yellow-green to olive green",
      "Yellow to yellow-orange",
      "Red"
    ],
    answer: 1,
    explain: "Chlorophyll b is yellow-green to olive green, and it is the lowest band. Bright green to blue-green is chlorophyll a; yellow to yellow-orange is carotene. Red anthocyanins are not one of the four bands in this lab." },

  { id: "p040", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why do different pigments travel different distances up the chromatography paper?",
    options: [
      "Heavier pigments are pulled down more by gravity",
      "Darker pigments always move further than pale ones",
      "Each pigment has a different solubility in the solvent (and attraction to the paper), so more soluble pigments travel further",
      "Each pigment absorbs a different wavelength of light, and the absorbed light pushes it up the paper"
    ],
    answer: 2,
    explain: "The solvent climbs the paper by capillary action and carries dissolved pigments with it. A pigment that dissolves well in the solvent and is weakly attracted to the paper moves almost as fast as the solvent; a less soluble one lags behind. Colour and light absorption have nothing to do with how far it moves." },

  { id: "p041", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Chlorophyll b has a –CHO (aldehyde) group where chlorophyll a has a –CH<sub>3</sub> group. How does this explain chlorophyll b's lower R<sub>f</sub>?",
    options: [
      "The –CHO group makes chlorophyll b much heavier, so it moves more slowly",
      "The –CHO group makes chlorophyll b nonpolar, so it dissolves better and moves faster",
      "The –CHO group lets chlorophyll b absorb green light, so it stays near the origin",
      "The –CHO group makes chlorophyll b more polar, so it is less soluble in the nonpolar solvent and clings more to the polar paper"
    ],
    answer: 3,
    explain: "The C=O in the aldehyde group is polar, while –CH<sub>3</sub> is nonpolar. More polar means less soluble in the nonpolar solvent and more attracted to the polar cellulose of the paper, so chlorophyll b travels less far. The mass difference between the two groups is tiny and is not the reason." },

  { id: "p042", lesson: "2.08", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "In the chromatography lab, the origin line should be drawn in pen so that it does not smudge.",
    answer: false,
    explain: "Use pencil. Pen ink is made of pigments that dissolve in the solvent and would run up the paper with the leaf pigments. Graphite does not dissolve, so the line stays put. The solvent front is also marked in pencil." },

  { id: "p043", lesson: "2.08", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "When the paper is placed in the beaker, the pigment line must sit above the surface of the solvent.",
    answer: true,
    explain: "The lab says the pigment line should be about 1 cm above the solvent. If the line is under the solvent, the pigments dissolve into the pool of solvent instead of being carried up the paper, and you have to start over." },

  { id: "p044", lesson: "2.08", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Using the absorption spectrum from class, at which wavelengths does chlorophyll a absorb most strongly?",
    options: [
      "Around 430 nm (blue-violet) and 660 nm (red)",
      "Around 550 nm (green)",
      "Around 580 nm (yellow) only",
      "Evenly across 380–750 nm"
    ],
    answer: 0,
    explain: "Chlorophyll a has two peaks, one in the blue-violet and one in the red, with very little absorption in the green (around 500–600 nm). That green gap is why leaves look green." },

  /* ---------------- 2.09 Light Reactions ---------------- */
  { id: "p045", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the main goal of the light reactions?",
    options: [
      "To fix CO<sub>2</sub> into sugar",
      "To capture light energy as chemical energy in ATP and NADPH",
      "To break glucose down to release energy",
      "To make oxygen for the plant's own cellular respiration"
    ],
    answer: 1,
    explain: "The light reactions turn light energy into chemical energy: ATP and NADPH, which then power the Calvin cycle. Fixing CO<sub>2</sub> is the Calvin cycle's job. Oxygen is released, but it is a by-product, not the goal." },

  { id: "p046", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which high-energy electron carrier is made by the light reactions?",
    options: [
      "NADH",
      "FADH<sub>2</sub>",
      "NADPH",
      "NADP<sup>+</sup>"
    ],
    answer: 2,
    explain: "NADPH is the high-energy electron carrier of plants. NADP<sup>+</sup> is its empty (oxidized) form, which picks up 2 electrons at the end of the chain. NADH and FADH<sub>2</sub> are the carriers of cellular respiration." },

  { id: "p047", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Where are the photosystems located?",
    options: [
      "Dissolved in the stroma",
      "Floating free in the thylakoid lumen",
      "In the chloroplast's outer membrane",
      "Embedded in the thylakoid membrane"
    ],
    answer: 3,
    explain: "Photosystems are protein-pigment complexes embedded in the thylakoid membrane, together with the electron carriers and ATP synthase. That placement lets them pump H<sup>+</sup> from the stroma across the membrane into the lumen." },

  { id: "p048", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What are the two main parts of a photosystem?",
    options: [
      "Antenna complex and reaction centre",
      "Stroma and thylakoid lumen",
      "Plastoquinone and plastocyanin",
      "ATP synthase and NADP<sup>+</sup> reductase"
    ],
    answer: 0,
    explain: "A photosystem has an antenna (light-harvesting) complex of many pigment molecules and a reaction centre with a special chlorophyll a pair and the primary electron acceptor. PQ and PC are carriers between the photosystems; ATP synthase and NADP<sup>+</sup> reductase are separate enzymes." },

  { id: "p049", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does the antenna complex of a photosystem do?",
    options: [
      "Splits water into H<sup>+</sup>, electrons and oxygen",
      "Absorbs photons and passes the energy along to the reaction centre",
      "Pumps H<sup>+</sup> into the thylakoid lumen",
      "Reduces NADP<sup>+</sup> to NADPH"
    ],
    answer: 1,
    explain: "The antenna complex works like a funnel: its chlorophylls and accessory pigments absorb photons and pass the energy from pigment to pigment until it reaches the reaction centre. Energy is passed along, not electrons." },

  { id: "p050", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What happens at the reaction centre of a photosystem?",
    options: [
      "Accessory pigments reflect green light away from the chloroplast",
      "ADP is phosphorylated to ATP",
      "An electron of a special chlorophyll a is excited and passed to the primary electron acceptor",
      "CO<sub>2</sub> is attached to RuBP"
    ],
    answer: 2,
    explain: "The energy funnelled in by the antenna excites an electron in the reaction-centre chlorophyll a, and the primary electron acceptor captures it. This is where light energy becomes a moving electron. ATP is made by ATP synthase, and CO<sub>2</sub> is fixed by RuBisCO in the stroma." },

  { id: "p051", lesson: "2.09", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Accessory pigments such as chlorophyll b and carotenoids give their own excited electrons directly to the primary electron acceptor.",
    answer: false,
    explain: "Accessory pigments sit in the antenna complex. They absorb wavelengths chlorophyll a absorbs poorly and pass the energy (not electrons) toward the reaction-centre chlorophyll a. Only that chlorophyll a gives up an electron to the primary electron acceptor." },

  { id: "p052", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does <strong>P680</strong> stand for?",
    options: [
      "The reaction-centre pigment of photosystem I, which absorbs light best at 680 nm",
      "A protein made of 680 amino acids that splits water",
      "The 680th pigment molecule in the antenna complex",
      "The reaction-centre chlorophyll a of photosystem II, which absorbs light best at 680 nm"
    ],
    answer: 3,
    explain: "P stands for pigment, and 680 is the wavelength (in nm) its reaction-centre chlorophyll a absorbs best. P680 belongs to photosystem II; photosystem I's reaction centre is P700." },

  { id: "p053", lesson: "2.09", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "P700 is the reaction-centre chlorophyll of photosystem I.",
    answer: true,
    explain: "Photosystem I is P700 (absorbs best at 700 nm) and photosystem II is P680 (absorbs best at 680 nm). A quick check: the higher number goes with the photosystem whose name has the lower Roman numeral." },

  { id: "p054", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In non-cyclic electron flow, which photosystem do electrons pass through first?",
    options: [
      "Photosystem II",
      "Photosystem I, because it has the lower number",
      "Whichever photosystem absorbs a photon first",
      "Neither; the cytochrome b6-f complex starts the chain"
    ],
    answer: 0,
    explain: "Electrons from water enter photosystem II (P680) first, travel down the PQ → b6-f → PC chain, and then enter photosystem I (P700). The numbers come from the order of discovery, not the order of action, so do not let the I and II fool you." },

  { id: "p055", lesson: "2.09", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Photosystems I and II are numbered by the order in which they were discovered, not the order in which they act.",
    answer: true,
    explain: "Said in class: photosystem I was discovered first, so it got the number I, even though photosystem II acts before it in non-cyclic flow." },

  { id: "p056", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is <strong>excitation</strong> of an electron in chlorophyll?",
    options: [
      "The electron is removed from a water molecule",
      "A photon raises the electron from its ground state to a higher energy level",
      "The electron falls back to its ground state and releases heat",
      "The electron is passed to NADP<sup>+</sup>"
    ],
    answer: 1,
    explain: "Electrons in chlorophyll normally sit at their ground state. When a photon's energy is absorbed, an electron jumps to a higher energy level: it is excited. Falling back to the ground state is the opposite process, and passing electrons to NADP<sup>+</sup> happens at the very end of the chain." },

  { id: "p057", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Chlorophyll is extracted from leaves into a test tube and lit. What happens to its excited electrons?",
    options: [
      "They are captured by a primary electron acceptor and used to make NADPH",
      "They are passed to oxygen to make water",
      "They fall back to the ground state, releasing the energy as heat and light (fluorescence)",
      "They split water molecules in the solvent"
    ],
    answer: 2,
    explain: "Outside a living cell there is no primary electron acceptor or electron transport chain, so the excited electron simply drops back to its ground state and the energy is lost as heat and light (a red glow called fluorescence). In a cell, the primary acceptor captures the electron before it can fall back." },

  { id: "p058", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In a living chloroplast, what first captures the excited electron that leaves a reaction-centre chlorophyll?",
    options: [
      "Ferredoxin",
      "NADP<sup>+</sup>",
      "Plastocyanin",
      "The primary electron acceptor"
    ],
    answer: 3,
    explain: "Each photosystem has its own primary electron acceptor right beside the reaction centre. From there the electrons go to plastoquinone (after PSII) or ferredoxin (after PSI). NADP<sup>+</sup> is the last stop, and plastocyanin delivers electrons to PSI." },

  { id: "p059", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In the class model of photosystem II, how many photons strike it and how many electrons are excited from P680?",
    options: [
      "2 photons excite 2 electrons",
      "1 photon excites 4 electrons",
      "4 photons excite 1 electron",
      "2 photons excite 1 electron"
    ],
    answer: 0,
    explain: "One photon excites one electron. The slides follow a pair: 2 photons strike PSII and excite 2 electrons from P680, which matches the 2 electrons released when one water molecule is split and the 2 electrons needed to reduce one NADP<sup>+</sup>." },

  { id: "p060", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the correct order of electron carriers from photosystem II to photosystem I?",
    options: [
      "Plastocyanin → cytochrome b6-f → plastoquinone",
      "Plastoquinone → cytochrome b6-f → plastocyanin",
      "Cytochrome b6-f → plastoquinone → plastocyanin",
      "Ferredoxin → NADP<sup>+</sup> reductase → plastocyanin"
    ],
    answer: 1,
    explain: "PSII → PQ (plastoquinone) → cytochrome b6-f complex → PC (plastocyanin) → PSI. Memory trick: Q comes before C in the chain, the same way ubiquinone (Q) comes before cytochrome c in the mitochondrion. Ferredoxin and NADP<sup>+</sup> reductase come after PSI." },

  { id: "p061", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which carrier passes electrons from the cytochrome b6-f complex to photosystem I?",
    options: [
      "Plastoquinone (PQ)",
      "Ferredoxin (Fd)",
      "Plastocyanin (PC)",
      "Cytochrome c"
    ],
    answer: 2,
    explain: "Plastocyanin is a small copper protein in the thylakoid lumen that carries electrons from cytochrome b6-f to P700. Plastoquinone works before b6-f, ferredoxin after PSI, and cytochrome c is the mitochondrial carrier." },

  { id: "p062", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which mobile carrier picks up electrons from photosystem II's primary acceptor and carries them to the cytochrome b6-f complex?",
    options: [
      "Plastocyanin (PC)",
      "Ferredoxin (Fd)",
      "Ubiquinone (Q)",
      "Plastoquinone (PQ)"
    ],
    answer: 3,
    explain: "Plastoquinone moves within the thylakoid membrane from PSII to the cytochrome b6-f complex. Ubiquinone is its mitochondrial cousin (between complexes I/II and III). Plastocyanin comes after b6-f, and ferredoxin after PSI." },

  { id: "p063", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which protein complex sits between plastoquinone and plastocyanin in the electron transport chain?",
    options: [
      "Cytochrome b6-f complex",
      "Photosystem I",
      "ATP synthase",
      "Complex IV (cytochrome oxidase)"
    ],
    answer: 0,
    explain: "The cytochrome b6-f complex (the slides also call it Cyt) takes electrons from PQ and passes them to PC, and it is where much of the H<sup>+</sup> pumping into the lumen happens. Complex IV is in mitochondria." },

  { id: "p064", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "During the light reactions, where are H<sup>+</sup> ions pumped to?",
    options: [
      "From the thylakoid lumen into the stroma",
      "From the stroma into the thylakoid lumen",
      "From the stroma into the intermembrane space",
      "From the cytoplasm into the stroma"
    ],
    answer: 1,
    explain: "As electrons flow down the chain, H<sup>+</sup> is pumped from the stroma across the thylakoid membrane into the lumen, which builds up a high H<sup>+</sup> concentration there. H<sup>+</sup> flows the other way (lumen → stroma) through ATP synthase. The intermembrane space is the mitochondrial answer." },

  { id: "p065", lesson: "2.09", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "In a chloroplast in the light, the H<sup>+</sup> concentration is higher in the stroma than in the thylakoid lumen.",
    answer: false,
    explain: "It is the other way around. H<sup>+</sup> is pumped into the lumen and also released there when water is split, so the lumen has the high H<sup>+</sup> concentration (low pH) and the stroma has the low H<sup>+</sup> concentration (higher pH)." },

  { id: "p066", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is <strong>photolysis</strong>?",
    options: [
      "The making of ATP using light energy",
      "The breakdown of chlorophyll in the fall",
      "The splitting of water into H<sup>+</sup>, electrons and oxygen at photosystem II",
      "The release of CO<sub>2</sub> from malate"
    ],
    answer: 2,
    explain: "Photo = light, lysis = splitting: the light-driven splitting of water at photosystem II. Making ATP with light energy is photophosphorylation, and releasing CO<sub>2</sub> from malate is decarboxylation (C4 and CAM plants)." },

  { id: "p067", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "In class, what name was used for the protein of photosystem II that splits water?",
    options: [
      "Ferredoxin",
      "NADP<sup>+</sup> reductase",
      "Plastocyanin",
      "The Z protein"
    ],
    answer: 3,
    explain: "The slides say the Z protein splits water. Textbooks also call it the water-splitting enzyme or oxygen-evolving complex. Ferredoxin and NADP<sup>+</sup> reductase work after PSI, and plastocyanin carries electrons to PSI." },

  { id: "p068", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "When one water molecule is split in photolysis, what is produced?",
    options: [
      "2 H<sup>+</sup>, 2 e<sup>−</sup> and 1 oxygen atom (½ O<sub>2</sub>)",
      "2 H<sup>+</sup>, 2 e<sup>−</sup> and 1 CO<sub>2</sub>",
      "1 H<sup>+</sup>, 1 e<sup>−</sup> and 1 O<sub>2</sub>",
      "2 H<sub>2</sub> and 1 oxygen atom"
    ],
    answer: 0,
    explain: "H<sub>2</sub>O → 2 H<sup>+</sup> + 2 e<sup>−</sup> + ½ O<sub>2</sub>. Two water molecules must be split to release one O<sub>2</sub> molecule. There is no carbon in water, so CO<sub>2</sub> cannot come from it." },

  { id: "p069", lesson: "2.09", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "The electrons released by splitting water go straight to NADP<sup>+</sup>.",
    answer: false,
    explain: "Electrons from water replace the electrons that P680 (photosystem II) lost when it was excited. They reach NADP<sup>+</sup> only after travelling through PSII, the PQ → b6-f → PC chain, PSI and ferredoxin." },

  { id: "p070", lesson: "2.09", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "The protons released by photolysis are released into the stroma.",
    answer: false,
    explain: "Water is split on the lumen side of photosystem II, so its 2 H<sup>+</sup> stay in the thylakoid lumen and add to the gradient, together with the H<sup>+</sup> pumped by the chain. The gradient then drives ATP synthase." },

  { id: "p071", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What happens to the oxygen produced by photolysis?",
    options: [
      "It is used by RuBisCO to fix carbon",
      "It leaves as a by-product (out through the stomata)",
      "It is the final electron acceptor of the light reactions",
      "It is stored in the thylakoid lumen until night"
    ],
    answer: 1,
    explain: "Oxygen is a by-product: the oxygen atoms pair up as O<sub>2</sub>, which diffuses out of the leaf through the stomata (some is used by the plant's own mitochondria). The final electron acceptor of the light reactions is NADP<sup>+</sup>, not O<sub>2</sub>." },

  { id: "p072", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is <strong>photophosphorylation</strong>?",
    options: [
      "Splitting water using light",
      "Using light to excite electrons in chlorophyll",
      "Making ATP from ADP and P<sub>i</sub> by chemiosmosis, using energy that came from light",
      "Adding a phosphate group to RuBP in the Calvin cycle"
    ],
    answer: 2,
    explain: "Photophosphorylation is ATP synthesis powered by light: light-driven electron flow pumps H<sup>+</sup> into the lumen, and the H<sup>+</sup> flowing back through ATP synthase makes ATP (chemiosmosis). Splitting water is photolysis." },

  { id: "p073", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Using the class value, how many H<sup>+</sup> must flow through ATP synthase to make one ATP in the chloroplast?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 3,
    explain: "The slides give 1 ATP for every 4 H<sup>+</sup> that pass through ATP synthase from the lumen into the stroma." },

  { id: "p074", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In which direction do H<sup>+</sup> ions flow through ATP synthase in a chloroplast?",
    options: [
      "From the thylakoid lumen into the stroma",
      "From the stroma into the thylakoid lumen",
      "From the intermembrane space into the matrix",
      "From the stroma out to the cytoplasm"
    ],
    answer: 0,
    explain: "H<sup>+</sup> moves down its gradient from the lumen (high H<sup>+</sup>) to the stroma (low H<sup>+</sup>), and ATP synthase uses that flow to make ATP on the stroma side. Stroma → lumen is the pumping direction. Intermembrane space → matrix is the mitochondrial version." },

  { id: "p075", lesson: "2.09", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "The ATP made by the light reactions is released into the thylakoid lumen.",
    answer: false,
    explain: "ATP synthase's head sticks out into the stroma, so ATP is released into the stroma, right where the Calvin cycle uses it. The lumen is where H<sup>+</sup> builds up. NADPH is also made on the stroma side, by NADP<sup>+</sup> reductase." },

  { id: "p076", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In non-cyclic flow, where do the replacement electrons for P700 (photosystem I) come from?",
    options: [
      "Directly from water",
      "From photosystem II, through the electron transport chain",
      "From NADPH",
      "From ferredoxin"
    ],
    answer: 1,
    explain: "P700 loses 2 electrons to its primary acceptor and gets 2 back from photosystem II via PQ → b6-f → PC. Water refills P680 (photosystem II), not P700. NADPH and ferredoxin are downstream of PSI, so they cannot refill it in non-cyclic flow." },

  { id: "p077", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which two components make up the electron transport chain after photosystem I in non-cyclic flow?",
    options: [
      "Plastoquinone and plastocyanin",
      "Cytochrome b6-f and ATP synthase",
      "Ferredoxin and NADP<sup>+</sup> reductase",
      "Plastocyanin and the Z protein"
    ],
    answer: 2,
    explain: "After PSI the chain is short: primary acceptor → ferredoxin (Fd) → NADP<sup>+</sup> reductase, which reduces NADP<sup>+</sup> to NADPH. PQ, b6-f and PC form the chain between PSII and PSI." },

  { id: "p078", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which enzyme reduces NADP<sup>+</sup> to NADPH?",
    options: [
      "ATP synthase",
      "RuBisCO",
      "NADH dehydrogenase (complex I)",
      "NADP<sup>+</sup> reductase"
    ],
    answer: 3,
    explain: "NADP<sup>+</sup> reductase takes 2 electrons from ferredoxin and gives them (with H<sup>+</sup>) to NADP<sup>+</sup>, making NADPH. NADH dehydrogenase does the opposite kind of job in the mitochondrion: it takes electrons from NADH." },

  { id: "p079", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which carrier passes electrons from photosystem I's primary acceptor to NADP<sup>+</sup> reductase?",
    options: [
      "Ferredoxin (Fd)",
      "Plastocyanin (PC)",
      "Plastoquinone (PQ)",
      "Cytochrome b6-f"
    ],
    answer: 0,
    explain: "Ferredoxin is an iron-sulfur protein on the stroma side of the membrane. It hands electrons to NADP<sup>+</sup> reductase in non-cyclic flow, or back to the PQ/b6-f part of the chain in cyclic flow. PQ, b6-f and PC work before PSI." },

  { id: "p080", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How many electrons are needed to reduce one NADP<sup>+</sup> to NADPH?",
    options: [
      "1",
      "2",
      "4",
      "6"
    ],
    answer: 1,
    explain: "NADP<sup>+</sup> + 2 e<sup>−</sup> + H<sup>+</sup> → NADPH. That is why the slides follow electrons in pairs: 2 photons, 2 electrons from P680, 2 electrons from one water molecule." },

  { id: "p081", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "What is the final electron acceptor of non-cyclic electron flow?",
    options: [
      "Oxygen",
      "Water",
      "NADP<sup>+</sup>",
      "Plastocyanin"
    ],
    answer: 2,
    explain: "Electrons start in water and end on NADP<sup>+</sup>, which becomes NADPH. Oxygen is the final acceptor in the mitochondrial ETC, not in the chloroplast. Water is the electron source, and plastocyanin is a carrier in the middle of the chain." },

  { id: "p082", lesson: "2.09", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "The <strong>Z scheme</strong> is an energy diagram of non-cyclic electron flow that shows electrons being boosted to a higher energy level twice, once at each photosystem.",
    answer: true,
    explain: "Plotted by energy level, the path water → PSII (boost) → PQ → b6-f → PC (downhill) → PSI (boost) → Fd → NADP<sup>+</sup> reductase zig-zags like a sideways Z, which gives the diagram its name." },

  { id: "p083", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which products are made by non-cyclic electron flow?",
    options: [
      "ATP only",
      "NADPH and glucose",
      "ATP, NADPH and CO<sub>2</sub>",
      "ATP, NADPH and O<sub>2</sub>"
    ],
    answer: 3,
    explain: "Non-cyclic flow uses both photosystems: water is split (O<sub>2</sub> released), H<sup>+</sup> pumping drives ATP synthesis, and electrons end on NADPH. Glucose comes from the Calvin cycle, and the light reactions do not release CO<sub>2</sub>. ATP only is cyclic flow." },

  { id: "p084", lesson: "2.09", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Cyclic photophosphorylation is driven by photosystem II alone.",
    answer: false,
    explain: "Cyclic flow is driven solely by photosystem I. Electrons leave P700, go to ferredoxin, and loop back through the PQ/b6-f part of the chain and plastocyanin to P700. Photosystem II and water splitting are not involved." },

  { id: "p085", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What path do electrons follow in cyclic electron flow?",
    options: [
      "P700 → Fd → PQ/cytochrome b6-f (the Q cycle) → PC → P700",
      "P680 → PQ → b6-f → PC → P700 → Fd → NADP<sup>+</sup>",
      "Water → P680 → PQ → P680",
      "P700 → NADP<sup>+</sup> reductase → NADPH → P700"
    ],
    answer: 0,
    explain: "In cyclic flow, ferredoxin sends electrons back into the PSII chain (the slides call this the Q cycle) instead of to NADP<sup>+</sup> reductase; they return to P700 through plastocyanin. The second option is non-cyclic flow." },

  { id: "p086", lesson: "2.09", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Cyclic electron flow produces ATP, NADPH and O<sub>2</sub>.",
    answer: false,
    explain: "Cyclic flow makes only ATP. No water is split, so no O<sub>2</sub> is released, and the electrons go back to P700 instead of to NADP<sup>+</sup>, so no NADPH is made." },

  { id: "p087", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why do chloroplasts need cyclic electron flow?",
    options: [
      "To make the extra NADPH that the Calvin cycle needs",
      "Because the Calvin cycle uses more ATP than NADPH (18 ATP : 12 NADPH per glucose), so extra ATP is needed",
      "To release more oxygen in bright light",
      "To replace the electrons lost by photosystem II"
    ],
    answer: 1,
    explain: "Cyclic flow pumps extra H<sup>+</sup> for extra ATP without making NADPH, which balances the Calvin cycle's higher demand for ATP (9 ATP vs 6 NADPH per G3P). It makes no NADPH and no O<sub>2</sub>, and PSII's electrons are replaced by water." },

  { id: "p088", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "From the class review: where do photosystem II and photosystem I get their replacement electrons?",
    options: [
      "PSII from NADPH; PSI from water",
      "Both get them directly from water",
      "PSII from water (photolysis); PSI from the electron transport chain coming from PSII",
      "PSII from ferredoxin; PSI from plastoquinone"
    ],
    answer: 2,
    explain: "Class key: PSII gets electrons from water split by photolysis. PSI gets the same electrons that just left PSII, after they have lost some energy pumping protons in the chain." },

  { id: "p089", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "From the class review: can a plant carry out the light reactions at night?",
    options: [
      "Yes: they run on the ATP stored during the day",
      "Yes, but only cyclic flow runs in the dark",
      "No, and the Calvin cycle also stops the instant the light goes off",
      "No: photons are needed to excite electrons, though the Calvin cycle can continue briefly until stored ATP and NADPH run out"
    ],
    answer: 3,
    explain: "Class key: without photons nothing excites electrons, so water splitting and electron transport stop. Cyclic flow also needs light (at PSI). The Calvin cycle does not use light directly, so it can keep going for a short time on leftover ATP and NADPH." },

  { id: "p090", lesson: "2.09", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Water is a reactant of the light reactions: it supplies electrons and protons, and its oxygen is released.",
    answer: true,
    explain: "Class key: water is split to supply electrons (to refill P680) and protons (for the gradient), and oxygen gas is released. Of the overall equation's reactants and products, the light reactions use H<sub>2</sub>O and release O<sub>2</sub>; CO<sub>2</sub> and glucose belong to the Calvin cycle." },

  { id: "p091", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which list gives only the INPUTS of the light reactions?",
    options: [
      "H<sub>2</sub>O, light, ADP + P<sub>i</sub>, NADP<sup>+</sup>",
      "CO<sub>2</sub>, ATP, NADPH",
      "O<sub>2</sub>, ATP, NADPH",
      "Glucose, O<sub>2</sub>, ADP"
    ],
    answer: 0,
    explain: "The light reactions take in water, light, ADP + P<sub>i</sub> and NADP<sup>+</sup> (the last two sent back from the Calvin cycle) and put out O<sub>2</sub>, ATP and NADPH. CO<sub>2</sub> is an input of the Calvin cycle; O<sub>2</sub>, ATP and NADPH are outputs." },

  { id: "p092", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "From the class review: what happens to a plant grown in a shady location, and how can it adapt?",
    options: [
      "It makes more ATP and NADPH, so it grows smaller leaves",
      "It makes less ATP and NADPH; it may grow broader, thinner leaves with more chlorophyll",
      "It switches to running only the Calvin cycle",
      "It stops photosynthesis completely and lives on stored starch"
    ],
    answer: 1,
    explain: "Class key: fewer photons means the charging station runs slower, so less ATP and NADPH are made. Plants respond with broader, thinner leaves (more surface area) and more chlorophyll per chloroplast to catch every bit of light. They still photosynthesize, just more slowly." },

  { id: "p093", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "extra", level: 2,
    q: "Why does non-cyclic flow need two photosystems instead of one?",
    options: [
      "Because PSI cannot absorb light on its own",
      "Because PSII makes NADPH and PSI makes ATP",
      "Because one boost of light energy is not enough to lift electrons from water's low energy level all the way up to NADP<sup>+</sup>",
      "Because each photosystem works at a different time of day"
    ],
    answer: 2,
    explain: "The Z scheme shows the energy climb: electrons taken from water start very low, PSII lifts them partway, they lose some energy pumping H<sup>+</sup>, and PSI lifts them again high enough to reduce NADP<sup>+</sup>. PSI absorbs light fine on its own (that is cyclic flow), and NADPH is made after PSI, not PSII." },

  { id: "p094", lesson: "2.09", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "On which side of the thylakoid membrane is NADPH made?",
    options: [
      "The lumen side",
      "In the intermembrane space",
      "Outside the chloroplast, in the cytoplasm",
      "The stroma side"
    ],
    answer: 3,
    explain: "NADP<sup>+</sup> reductase faces the stroma, so NADPH is released into the stroma, right where the Calvin cycle needs it. The lumen side is where water is split and H<sup>+</sup> builds up." },

  /* ---------------- 2.10 Calvin Cycle ---------------- */
  { id: "p095", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Where does the Calvin cycle take place?",
    options: [
      "Stroma",
      "Thylakoid lumen",
      "Thylakoid membrane",
      "Mitochondrial matrix"
    ],
    answer: 0,
    explain: "The Calvin cycle enzymes, including RuBisCO, are dissolved in the stroma, where ATP and NADPH are released by the light reactions. The thylakoid membrane is for the light reactions, and the matrix is in the mitochondrion." },

  { id: "p096", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the main goal of the Calvin cycle?",
    options: [
      "To make ATP and NADPH for the light reactions",
      "To use ATP and NADPH from the light reactions to build carbohydrate from atmospheric CO<sub>2</sub>",
      "To split water and release oxygen",
      "To break G3P down to release CO<sub>2</sub>"
    ],
    answer: 1,
    explain: "The Calvin cycle spends ATP (energy) and NADPH (electrons) to turn CO<sub>2</sub> from the air into carbohydrate (G3P). It uses ATP and NADPH; it does not make them. Water splitting is part of the light reactions." },

  { id: "p097", lesson: "2.10", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "The Calvin cycle is called light-independent because it can keep running all night without the light reactions.",
    answer: false,
    explain: "It is called light-independent only because no step uses light directly. It depends completely on the ATP and NADPH from the light reactions, so in the dark it runs only briefly until those run out." },

  { id: "p098", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What are the three phases of the Calvin cycle, in order?",
    options: [
      "Reduction, carbon fixation, regeneration of RuBP",
      "Carbon fixation, regeneration of RuBP, reduction",
      "Carbon fixation, reduction, regeneration of RuBP",
      "Photolysis, reduction, carbon fixation"
    ],
    answer: 2,
    explain: "Phase 1 carbon fixation (RuBisCO attaches CO<sub>2</sub> to RuBP), phase 2 reduction (ATP and NADPH turn PGA into G3P), phase 3 regeneration of RuBP (ATP rebuilds the CO<sub>2</sub> acceptor). Photolysis is a light reaction." },

  { id: "p099", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which enzyme catalyzes carbon fixation in the Calvin cycle?",
    options: [
      "PEP carboxylase",
      "ATP synthase",
      "NADP<sup>+</sup> reductase",
      "RuBisCO"
    ],
    answer: 3,
    explain: "RuBisCO attaches CO<sub>2</sub> to RuBP. PEP carboxylase does the first fixation in C4 and CAM plants, but it is not a Calvin cycle enzyme. Spell it RuBisCO: the capital letters come from its full name (stressed in class)." },

  { id: "p100", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does <strong>RuBisCO</strong> stand for?",
    options: [
      "Ribulose-1,5-bisphosphate carboxylase/oxygenase",
      "Ribose-1,5-bisphosphate carbon oxidase",
      "Ribulose bisphosphate cytochrome oxidase",
      "RuBP synthase carboxylase"
    ],
    answer: 0,
    explain: "Ribulose-1,5-bisphosphate carboxylase/oxygenase: it can attach CO<sub>2</sub> (carboxylase) or O<sub>2</sub> (oxygenase) to its substrate ribulose-1,5-bisphosphate (RuBP). The oxygenase activity is what causes photorespiration." },

  { id: "p101", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which molecule is the CO<sub>2</sub> acceptor that RuBisCO attaches CO<sub>2</sub> to?",
    options: [
      "PGA (3-phosphoglycerate)",
      "RuBP (ribulose-1,5-bisphosphate)",
      "G3P (glyceraldehyde-3-phosphate)",
      "PEP (phosphoenolpyruvate)"
    ],
    answer: 1,
    explain: "RuBP is the 5-carbon acceptor; RuBisCO is the enzyme that acts on it (do not mix up RuBP and RuBisCO). PGA is the product of fixation, G3P is the product of reduction, and PEP is the CO<sub>2</sub> acceptor of PEP carboxylase in C4 and CAM plants." },

  { id: "p102", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How many carbon atoms are in one RuBP molecule?",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 2,
    explain: "Ribulose is a 5-carbon sugar, so RuBP has 5 C. Adding one CO<sub>2</sub> gives a 6-carbon intermediate, which splits into two 3-carbon PGA." },

  { id: "p103", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "When RuBisCO joins one CO<sub>2</sub> to one RuBP, what forms first?",
    options: [
      "A stable 6-carbon glucose molecule",
      "Two G3P molecules",
      "A 4-carbon oxaloacetate",
      "An unstable 6-carbon intermediate that immediately splits into two PGA"
    ],
    answer: 3,
    explain: "5 C + 1 C = an unstable 6-carbon intermediate that splits at once into two 3-carbon PGA. It is not glucose, and G3P only appears after the reduction phase. Oxaloacetate is the first product in C4 plants (made by PEP carboxylase)." },

  { id: "p104", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is PGA?",
    options: [
      "3-phosphoglycerate, a 3-carbon molecule",
      "Phosphoglycolate, a 2-carbon molecule",
      "Phosphoenolpyruvate, a 3-carbon molecule",
      "Glyceraldehyde-3-phosphate, a 3-carbon sugar"
    ],
    answer: 0,
    explain: "PGA is 3-phosphoglycerate, the first stable product of carbon fixation. Phosphoglycolate (PG) is the toxic 2-carbon product of photorespiration, phosphoenolpyruvate is PEP, and glyceraldehyde-3-phosphate is G3P (PGAL). The abbreviations look alike, so learn them carefully." },

  { id: "p105", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In phase 1, how many PGA molecules are made from 3 CO<sub>2</sub> and 3 RuBP?",
    options: [
      "3",
      "6",
      "9",
      "12"
    ],
    answer: 1,
    explain: "Each CO<sub>2</sub> + RuBP gives an unstable 6-carbon intermediate that splits into 2 PGA, so 3 CO<sub>2</sub> give 6 PGA. Carbon check: 3 + 15 = 18 C = 6 × 3 C." },

  { id: "p106", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is a C3 plant?",
    options: [
      "A plant with three types of photosynthetic cells",
      "A plant that needs 3 ATP for every CO<sub>2</sub> it fixes",
      "A plant whose first stable product of carbon fixation is the 3-carbon molecule PGA",
      "A plant that fixes each CO<sub>2</sub> three times"
    ],
    answer: 2,
    explain: "The name comes from the number of carbons in the first stable product. In C3 plants RuBisCO makes 3-carbon PGA directly. In C4 plants the first product is 4-carbon oxaloacetate." },

  { id: "p107", lesson: "2.10", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Carbon fixation (phase 1) uses neither ATP nor NADPH.",
    answer: true,
    explain: "RuBisCO simply joins CO<sub>2</sub> to RuBP. ATP is spent in phases 2 and 3 (6 + 3 per 3 CO<sub>2</sub>), and NADPH is spent only in phase 2 (6 per 3 CO<sub>2</sub>)." },

  { id: "p108", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How many ATP are used in phase 2 (reduction) for every 3 CO<sub>2</sub> fixed?",
    options: [
      "3",
      "9",
      "12",
      "6"
    ],
    answer: 3,
    explain: "One ATP for each of the 6 PGA, so 6 ATP. Phase 3 uses another 3, for a total of 9 ATP per 3 CO<sub>2</sub>. 12 would be the NADPH count for a whole glucose." },

  { id: "p109", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In phase 2, ATP phosphorylates PGA to form which molecule?",
    options: [
      "1,3-bisphosphoglycerate (1,3-BPG)",
      "Ribulose-1,5-bisphosphate (RuBP)",
      "Glyceraldehyde-3-phosphate (G3P)",
      "Fructose-1,6-bisphosphate"
    ],
    answer: 0,
    explain: "ATP adds a second phosphate to 3-phosphoglycerate, giving 1,3-bisphosphoglycerate (bis = two phosphates). NADPH then reduces 1,3-BPG to G3P. It is the same pair of molecules as in glycolysis, run in reverse." },

  { id: "p110", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which molecule reduces 1,3-BPG to G3P in phase 2?",
    options: [
      "NADH",
      "NADPH",
      "FADH<sub>2</sub>",
      "ATP"
    ],
    answer: 1,
    explain: "NADPH donates the electrons (6 NADPH for 6 molecules of 1,3-BPG per 3 CO<sub>2</sub>). ATP supplies energy (the phosphate) but does not donate electrons, and NADH and FADH<sub>2</sub> are respiration carriers." },

  { id: "p111", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How many NADPH are used for every 3 CO<sub>2</sub> fixed?",
    options: [
      "3",
      "9",
      "6",
      "12"
    ],
    answer: 2,
    explain: "One NADPH for each 1,3-BPG, so 6 NADPH per 3 CO<sub>2</sub>. That doubles to 12 per glucose (6 CO<sub>2</sub>). 9 is the ATP count per 3 CO<sub>2</sub>." },

  { id: "p112", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the product of the reduction phase?",
    options: [
      "PGA (3-phosphoglycerate)",
      "RuBP",
      "Glucose",
      "G3P (glyceraldehyde-3-phosphate), also called PGAL"
    ],
    answer: 3,
    explain: "Reduction turns PGA (via 1,3-BPG) into G3P, a 3-carbon sugar. PGA is the input of this phase, RuBP is rebuilt in phase 3, and glucose is assembled later, outside the cycle, from two G3P." },

  { id: "p113", lesson: "2.10", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "G3P and PGAL are two names for the same 3-carbon sugar.",
    answer: true,
    explain: "G3P (glyceraldehyde-3-phosphate) is also called PGAL (phosphoglyceraldehyde). Both names appear on the slides and diagrams. Do not confuse PGAL with PGA (3-phosphoglycerate)." },

  { id: "p114", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which molecule exits the Calvin cycle as its product?",
    options: [
      "G3P",
      "RuBP",
      "PGA",
      "Glucose"
    ],
    answer: 0,
    explain: "For every 3 CO<sub>2</sub> fixed, one G3P leaves the cycle; the plant uses it to make glucose and other organic molecules. Glucose is not made inside the cycle itself: two exported G3P are joined later. RuBP stays in the cycle as the acceptor." },

  { id: "p115", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "For every 3 CO<sub>2</sub> fixed, how many G3P are made and how many leave the cycle?",
    options: [
      "3 made; 1 leaves",
      "6 made; 1 leaves",
      "6 made; 3 leave",
      "12 made; 2 leave"
    ],
    answer: 1,
    explain: "6 PGA become 6 G3P (one G3P per PGA). One leaves as product and the other 5 are recycled into 3 RuBP. 12 made and 2 leaving is correct for 6 CO<sub>2</sub>, not 3." },

  { id: "p116", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How many ATP are used in phase 3 (regeneration of RuBP) for every 3 CO<sub>2</sub> fixed?",
    options: [
      "6",
      "1",
      "3",
      "9"
    ],
    answer: 2,
    explain: "One ATP per RuBP regenerated, so 3 ATP make 3 RuBP. Phase 2 used 6, so the total is 9 ATP per 3 CO<sub>2</sub>." },

  { id: "p117", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "In phase 3, the 5 remaining G3P are rearranged into 3 RuBP. Why do these numbers work?",
    options: [
      "Each G3P has 5 carbons, so 5 G3P make 5 RuBP",
      "NADPH adds the missing carbons during phase 3",
      "A new CO<sub>2</sub> is added during phase 3 to supply extra carbon",
      "5 G3P × 3 C = 15 C, and 3 RuBP × 5 C = 15 C, so no carbon is gained or lost"
    ],
    answer: 3,
    explain: "Phase 3 only rearranges carbon skeletons. 15 carbons in (5 × 3) equal 15 carbons out (3 × 5). NADPH carries electrons, not carbon, and CO<sub>2</sub> enters only in phase 1." },

  { id: "p118", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does it cost to make one G3P that leaves the cycle?",
    options: [
      "3 CO<sub>2</sub>, 9 ATP and 6 NADPH",
      "3 CO<sub>2</sub>, 6 ATP and 6 NADPH",
      "6 CO<sub>2</sub>, 18 ATP and 12 NADPH",
      "1 CO<sub>2</sub>, 3 ATP and 2 NADPH"
    ],
    answer: 0,
    explain: "Phase 2 uses 6 ATP + 6 NADPH and phase 3 uses 3 ATP, so one exported G3P costs 3 CO<sub>2</sub>, 9 ATP and 6 NADPH. The second option forgets the phase 3 ATP, and the third is the cost of a whole glucose (two G3P)." },

  { id: "p119", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does it cost to make one glucose (two G3P)?",
    options: [
      "3 CO<sub>2</sub>, 9 ATP and 6 NADPH",
      "6 CO<sub>2</sub>, 18 ATP and 12 NADPH",
      "6 CO<sub>2</sub>, 12 ATP and 18 NADPH",
      "12 CO<sub>2</sub>, 36 ATP and 24 NADPH"
    ],
    answer: 1,
    explain: "Double the cost of one G3P: 6 CO<sub>2</sub>, 18 ATP and 12 NADPH. The third option swaps ATP and NADPH; remember the cycle uses more ATP than NADPH." },

  { id: "p120", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How many CO<sub>2</sub> molecules must be fixed to make one glucose molecule?",
    options: [
      "1",
      "3",
      "6",
      "12"
    ],
    answer: 2,
    explain: "Glucose has 6 carbons, and each CO<sub>2</sub> brings in 1, so 6 CO<sub>2</sub> must be fixed (6 turns of the cycle, or two rounds of three). 3 CO<sub>2</sub> make only one G3P (3 C)." },

  { id: "p121", lesson: "2.10", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "Each PGA molecule is converted into two G3P molecules.",
    answer: false,
    explain: "Check your notes: it is one G3P per PGA (both are 3-carbon molecules). 3 CO<sub>2</sub> → 6 PGA → 6 G3P; 6 CO<sub>2</sub> → 12 PGA → 12 G3P. The 12 G3P comes from fixing 6 CO<sub>2</sub>, not from doubling each PGA." },

  { id: "p122", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "When 6 CO<sub>2</sub> are fixed, 12 G3P are made. What happens to them?",
    options: [
      "All 12 leave the cycle to make 2 glucose",
      "6 leave the cycle and 6 regenerate RuBP",
      "1 leaves the cycle and 11 regenerate RuBP",
      "2 leave (enough for one glucose) and 10 are rearranged into 6 RuBP"
    ],
    answer: 3,
    explain: "2 G3P (6 C) leave to make one glucose, and 10 G3P (30 C) are rearranged into 6 RuBP (30 C), ready to accept the next 6 CO<sub>2</sub>. If too many G3P left, the cycle would run out of RuBP and stop." },

  { id: "p123", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which phase(s) of the Calvin cycle use ATP?",
    options: [
      "Reduction and regeneration of RuBP",
      "Carbon fixation only",
      "Carbon fixation and reduction",
      "Regeneration of RuBP only"
    ],
    answer: 0,
    explain: "Reduction uses 6 ATP (PGA → 1,3-BPG) and regeneration uses 3 ATP (G3P → RuBP) per 3 CO<sub>2</sub>. Carbon fixation by RuBisCO uses no ATP." },

  { id: "p124", lesson: "2.10", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "NADPH is used only in the reduction phase of the Calvin cycle.",
    answer: true,
    explain: "NADPH donates electrons to turn 1,3-BPG into G3P in phase 2. Phase 1 (fixation) and phase 3 (regeneration) do not use NADPH; phase 3 uses ATP only." },

  { id: "p125", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which molecules does the Calvin cycle send back to the light reactions to be recharged?",
    options: [
      "O<sub>2</sub> and H<sub>2</sub>O",
      "ADP, P<sub>i</sub> and NADP<sup>+</sup>",
      "CO<sub>2</sub> and G3P",
      "RuBP and PGA"
    ],
    answer: 1,
    explain: "The Calvin cycle spends ATP and NADPH and returns the emptied forms: ADP + P<sub>i</sub> and NADP<sup>+</sup>. The light reactions recharge them. RuBP and PGA stay inside the cycle, and O<sub>2</sub> and H<sub>2</sub>O are not Calvin cycle products." },

  { id: "p126", lesson: "2.10", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "As noted in class, the 3 CO<sub>2</sub> in one round of the cycle are not all fixed at the same instant; diagrams show three CO<sub>2</sub> being processed one at a time.",
    answer: true,
    explain: "Said in class: RuBisCO fixes one CO<sub>2</sub> at a time. The slides group 3 CO<sub>2</sub> together only because 3 is the smallest number that yields one whole G3P (3 carbons) as a product." },

  { id: "p127", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why must RuBP be regenerated in phase 3?",
    options: [
      "RuBP is the product that leaves the cycle to make glucose",
      "RuBP carries electrons to NADP<sup>+</sup>",
      "RuBP is the CO<sub>2</sub> acceptor; without it RuBisCO has nothing to attach CO<sub>2</sub> to and fixation stops",
      "RuBP is needed by ATP synthase to make ATP"
    ],
    answer: 2,
    explain: "The cycle only keeps turning if the CO<sub>2</sub> acceptor is rebuilt. Every RuBP used in phase 1 must be replaced, which costs 3 ATP per 3 CO<sub>2</sub>. G3P (not RuBP) is the product that leaves." },

  { id: "p128", lesson: "2.10", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "RuBisCO evolved when Earth's atmosphere was rich in O<sub>2</sub>, which is why it binds O<sub>2</sub> so readily.",
    answer: false,
    explain: "From the slides: RuBisCO evolved on a planet with almost no atmospheric O<sub>2</sub> but plenty of CO<sub>2</sub>, so binding O<sub>2</sub> by mistake did not matter. Once photosynthesis filled the air with O<sub>2</sub>, its oxygenase activity became a problem." },

  { id: "p129", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "What do the words carboxylase/oxygenase in RuBisCO's name tell you?",
    options: [
      "It can make both ATP and NADPH",
      "It releases CO<sub>2</sub> and O<sub>2</sub> together",
      "It works only when both gases are absent",
      "It can attach either CO<sub>2</sub> or O<sub>2</sub> to RuBP"
    ],
    answer: 3,
    explain: "Carboxylase means it adds CO<sub>2</sub> (a carboxyl group) to RuBP, which is useful carbon fixation. Oxygenase means it can add O<sub>2</sub> to RuBP instead, which starts wasteful photorespiration. Both reactions happen at the same active site, so the two gases compete." },

  { id: "p130", lesson: "2.10", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "At high temperatures, O<sub>2</sub> becomes a more preferred substrate for RuBisCO, so energy is lost in photorespiration.",
    answer: true,
    explain: "From the slides: at high temperatures O<sub>2</sub> is the preferred substrate, and ATP is spent recycling the products without making any useful molecules. This is worst for plants in arid and semiarid environments." },

  { id: "p131", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What can a plant make from the G3P that leaves the Calvin cycle?",
    options: [
      "Glucose and other organic compounds (such as sucrose, starch and cellulose)",
      "NADPH for the light reactions",
      "Only O<sub>2</sub>",
      "Only more RuBP"
    ],
    answer: 0,
    explain: "Exported G3P is the plant's building block: two G3P make glucose, which can become sucrose (for transport), starch (storage) or cellulose (cell walls), and G3P also feeds the synthesis of other organic molecules. NADPH is made by the light reactions, not from G3P." },

  { id: "p132", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which chloroplast compartment plays the same role as the mitochondrial intermembrane space (the high-H<sup>+</sup> reservoir)?",
    options: [
      "Stroma",
      "Thylakoid lumen",
      "Outer membrane",
      "Grana"
    ],
    answer: 1,
    explain: "In mitochondria H<sup>+</sup> is pumped into the intermembrane space; in chloroplasts it is pumped into the thylakoid lumen. In both, H<sup>+</sup> then flows back through ATP synthase. The stroma matches the matrix, the low-H<sup>+</sup> side." },

  { id: "p133", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which part of the chloroplast corresponds to the mitochondrial matrix (where ATP is released and the cycle's enzymes are found)?",
    options: [
      "Thylakoid lumen",
      "Thylakoid membrane",
      "Stroma",
      "Intermembrane space"
    ],
    answer: 2,
    explain: "The stroma, like the matrix, is the fluid where ATP is released and a cycle runs (the Calvin cycle in chloroplasts, the Krebs cycle in mitochondria). The lumen matches the intermembrane space." },

  { id: "p134", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which chloroplast membrane holds the electron transport chain and ATP synthase, like the inner mitochondrial membrane (cristae)?",
    options: [
      "Outer chloroplast membrane",
      "Inner chloroplast membrane",
      "Plasma membrane",
      "Thylakoid membrane"
    ],
    answer: 3,
    explain: "In chloroplasts the ETC and ATP synthase are in the thylakoid membrane, not in the inner envelope membrane. In mitochondria they are in the inner membrane, folded into cristae." },

  { id: "p135", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What is the final electron acceptor of the electron transport chain in photosynthesis and in cellular respiration?",
    options: [
      "NADP<sup>+</sup> in photosynthesis; O<sub>2</sub> in respiration",
      "H<sub>2</sub>O in both",
      "NAD<sup>+</sup> in photosynthesis; O<sub>2</sub> in respiration",
      "O<sub>2</sub> in photosynthesis; NADP<sup>+</sup> in respiration"
    ],
    answer: 0,
    explain: "Photosynthesis: water → … → PSI → Fd → NADP<sup>+</sup> (final acceptor, becomes NADPH). Respiration: NADH/FADH<sub>2</sub> → … → complex IV → O<sub>2</sub> (final acceptor, becomes water). The last option reverses the two." },

  { id: "p136", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What is the electron source in photosynthesis and in cellular respiration?",
    options: [
      "Light in photosynthesis; O<sub>2</sub> in respiration",
      "Water in photosynthesis; glucose (food) in respiration",
      "CO<sub>2</sub> in photosynthesis; water in respiration",
      "Chlorophyll in photosynthesis; ATP in respiration"
    ],
    answer: 1,
    explain: "Photosynthesis takes electrons from water (photolysis); respiration takes them from food (glucose), carried by NADH and FADH<sub>2</sub>. Light is the energy source, not the electron source, and O<sub>2</sub> accepts electrons rather than supplying them." },

  { id: "p137", lesson: "2.10", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Chloroplasts and mitochondria both make ATP by chemiosmosis through ATP synthase; in chloroplasts it is called photophosphorylation, and in mitochondria oxidative phosphorylation.",
    answer: true,
    explain: "Both use an ETC to pump H<sup>+</sup> and let it flow back through ATP synthase. The names reflect the energy source: light (photo-) or the oxidation of food with O<sub>2</sub> as the final acceptor (oxidative)." },

  { id: "p138", lesson: "2.10", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Mitochondria and chloroplasts both have a double membrane and their own DNA.",
    answer: true,
    explain: "Both are double-membrane organelles with their own DNA and ribosomes, which is part of the evidence that both descend from bacteria taken in by an ancestral cell (endosymbiosis)." },

  { id: "p139", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Which comparison of the overall reactions is correct?",
    options: [
      "Both are catabolic and exergonic",
      "Photosynthesis is catabolic and exergonic; respiration is anabolic and endergonic",
      "Photosynthesis is anabolic and endergonic; respiration is catabolic and exergonic",
      "Both are anabolic, but only respiration is endergonic"
    ],
    answer: 2,
    explain: "The overall equations are reverses of each other. Photosynthesis builds glucose and stores energy (anabolic, endergonic); respiration breaks glucose down and releases energy (catabolic, exergonic)." },

  { id: "p140", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "extra", level: 1,
    q: "From the Calvin cycle Research &amp; Review questions: what is RuBisCO activase?",
    options: [
      "An enzyme that splits water at photosystem II",
      "A pigment that absorbs 680 nm light",
      "The enzyme that regenerates RuBP from G3P",
      "A helper protein that switches RuBisCO on by clearing sugar phosphates that block its active site"
    ],
    answer: 3,
    explain: "RuBisCO activase uses ATP to pull inhibiting sugar phosphates out of RuBisCO's active site so the enzyme can be activated and fix CO<sub>2</sub>. Because it depends on ATP from the light reactions, it helps switch the Calvin cycle on in the light and down in the dark." },

  { id: "p141", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What energy source drives the electron transport chain in each process?",
    options: [
      "Light in photosynthesis; oxidation of food (glucose) in respiration",
      "ATP in both",
      "Heat in photosynthesis; light in respiration",
      "Glucose in photosynthesis; oxygen in respiration"
    ],
    answer: 0,
    explain: "In chloroplasts, light excites electrons at the photosystems. In mitochondria, the energy comes from electrons removed from food (via NADH and FADH<sub>2</sub>). ATP is the product of each ETC, not its energy source." },

  { id: "p142", lesson: "2.10", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which electron carriers are used in each process?",
    options: [
      "NADH in photosynthesis; NADPH and FADH<sub>2</sub> in respiration",
      "NADPH in photosynthesis; NADH and FADH<sub>2</sub> in respiration",
      "FADH<sub>2</sub> in both",
      "NADPH in both"
    ],
    answer: 1,
    explain: "Plants use NADPH to carry electrons from the light reactions to the Calvin cycle. Respiration uses NADH and FADH<sub>2</sub> to carry electrons from glycolysis, pyruvate oxidation and the Krebs cycle to the ETC." },

  /* ---------------- 2.11 C4 & CAM Plants ---------------- */
  { id: "p143", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In a C3 plant, what is the first stable product of carbon fixation?",
    options: [
      "Oxaloacetate (4C)",
      "Malate (4C)",
      "PGA, 3-phosphoglycerate (3C)",
      "G3P (3C)"
    ],
    answer: 2,
    explain: "In C3 plants RuBisCO adds CO<sub>2</sub> to RuBP in the Calvin cycle and the first stable product is 3-carbon PGA. G3P is also 3-carbon, but it comes later (after reduction). Oxaloacetate and malate are the 4-carbon products of C4 and CAM plants." },

  { id: "p144", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "What is the main problem for a C3 plant on a hot, dry day?",
    options: [
      "Its stomata open wide, so it loses CO<sub>2</sub>",
      "Its chlorophyll breaks down in the heat",
      "It cannot split water at high temperature",
      "Its stomata close to save water, so CO<sub>2</sub> inside the leaf falls and O<sub>2</sub> builds up"
    ],
    answer: 3,
    explain: "Closing stomata saves water but cuts off CO<sub>2</sub>. Internal CO<sub>2</sub> drops while O<sub>2</sub> from the light reactions builds up, so RuBisCO grabs O<sub>2</sub> more often (photorespiration) and less carbohydrate is made." },

  { id: "p145", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is <strong>photorespiration</strong>?",
    options: [
      "RuBisCO adding O<sub>2</sub> to RuBP instead of CO<sub>2</sub>, which wastes carbon and energy",
      "Cellular respiration that happens only in the light",
      "The breakdown of glucose inside chloroplasts",
      "PEP carboxylase adding O<sub>2</sub> to PEP"
    ],
    answer: 0,
    explain: "Photorespiration happens when RuBisCO oxygenates RuBP instead of carboxylating it. It takes in O<sub>2</sub> and releases CO<sub>2</sub> in the light (hence the name) but, unlike cellular respiration, it makes no ATP. PEP carboxylase has no affinity for O<sub>2</sub>." },

  { id: "p146", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "When RuBisCO adds O<sub>2</sub> to one RuBP, what is produced?",
    options: [
      "Two PGA",
      "One PGA (3C) and one phosphoglycolate (2C)",
      "One G3P and one CO<sub>2</sub>",
      "Oxaloacetate (4C) and a phosphate"
    ],
    answer: 1,
    explain: "RuBP has 5 carbons: 3 go to one PGA and 2 go to phosphoglycolate (PG). Adding CO<sub>2</sub> instead would give two PGA. So photorespiration loses PGA for the Calvin cycle and creates a toxic 2-carbon by-product." },

  { id: "p147", lesson: "2.11", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Phosphoglycolate, made in photorespiration, is a toxic 2-carbon compound.",
    answer: true,
    explain: "Phosphoglycolate (PG) is toxic, so the plant must break it down through a series of reactions that salvage some of its carbon. That salvage costs ATP and NADPH and releases CO<sub>2</sub>." },

  { id: "p148", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Using the class value, what fraction of the carbon is lost overall when phosphoglycolate is broken down and salvaged?",
    options: [
      "10%",
      "50%",
      "25%",
      "75%"
    ],
    answer: 2,
    explain: "The slides give an overall loss of 25% of the carbon: of the 4 carbons in two phosphoglycolate, 3 are returned to the Calvin cycle and 1 is lost as CO<sub>2</sub>. ATP and NADPH are spent along the way." },

  { id: "p149", lesson: "2.11", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "Like cellular respiration, photorespiration produces ATP for the cell.",
    answer: false,
    explain: "Photorespiration uses up ATP and NADPH to deal with phosphoglycolate and makes nothing useful: no ATP, no sugar. It shares only the gas exchange pattern with respiration (O<sub>2</sub> in, CO<sub>2</sub> out)." },

  { id: "p150", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "extra", level: 1,
    q: "Which organelles take part in the pathway that salvages carbon from phosphoglycolate?",
    options: [
      "The chloroplast only",
      "Nucleus, ribosomes and Golgi apparatus",
      "Vacuole and cell wall",
      "Chloroplast, peroxisome and mitochondrion"
    ],
    answer: 3,
    explain: "The salvage pathway is a long multi-organelle chain: chloroplast → peroxisome (which makes and breaks down H<sub>2</sub>O<sub>2</sub>) → mitochondrion (where CO<sub>2</sub> is released) and back. Said in class: you do not need the full pathway, only that it is very wasteful." },

  { id: "p151", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "How does temperature affect RuBisCO's preference for CO<sub>2</sub> or O<sub>2</sub>?",
    options: [
      "High temperature gives it a relatively greater affinity for O<sub>2</sub>; low temperature, for CO<sub>2</sub>",
      "High temperature gives it a relatively greater affinity for CO<sub>2</sub>",
      "Temperature has no effect on RuBisCO's shape or affinity",
      "Low temperature gives it a greater affinity for O<sub>2</sub>; high temperature, for CO<sub>2</sub>"
    ],
    answer: 0,
    explain: "From class: a change in temperature changes RuBisCO's shape and shifts its affinity. Heat favours O<sub>2</sub>, so photorespiration rises on hot days; in cool conditions CO<sub>2</sub> is favoured. This is why C3 plants do best in cool, moist environments." },

  { id: "p152", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which two evolutionary solutions reduce photorespiration in hot environments?",
    options: [
      "Cyclic and non-cyclic electron flow",
      "C4 and CAM photosynthesis",
      "Fermentation and glycolysis",
      "Photosystem I and photosystem II"
    ],
    answer: 1,
    explain: "C4 plants and CAM plants both evolved ways to concentrate CO<sub>2</sub> around RuBisCO so that it rarely binds O<sub>2</sub>. The other pairs are real processes, but they do not deal with photorespiration." },

  { id: "p153", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which enzyme fixes CO<sub>2</sub> in the mesophyll cells of C4 plants?",
    options: [
      "RuBisCO",
      "NADP<sup>+</sup> reductase",
      "PEP carboxylase",
      "Pyruvate decarboxylase"
    ],
    answer: 2,
    explain: "PEP carboxylase does the first fixation in the mesophyll. RuBisCO works later, in the bundle sheath cells, where it fixes the CO<sub>2</sub> released from malate in the Calvin cycle." },

  { id: "p154", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why is PEP carboxylase so useful when stomata are nearly closed?",
    options: [
      "It works faster than RuBisCO because it uses light directly",
      "It makes glucose directly from CO<sub>2</sub>",
      "It converts O<sub>2</sub> into CO<sub>2</sub>",
      "It has a high affinity for CO<sub>2</sub> and none for O<sub>2</sub>, so it keeps fixing CO<sub>2</sub> even when CO<sub>2</sub> is low"
    ],
    answer: 3,
    explain: "Unlike RuBisCO, PEP carboxylase never binds O<sub>2</sub>, so it can grab CO<sub>2</sub> (as HCO<sub>3</sub><sup>−</sup>) even at low concentrations. The 4-carbon acid it makes then delivers CO<sub>2</sub> to RuBisCO at a high concentration. It does not make glucose itself." },

  { id: "p155", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In a C4 plant, where does the initial CO<sub>2</sub> fixation happen?",
    options: [
      "Mesophyll cells",
      "Bundle sheath cells",
      "Guard cells",
      "Xylem cells"
    ],
    answer: 0,
    explain: "The first fixation (by PEP carboxylase) happens in the mesophyll cells, which are in contact with the air spaces. The Calvin cycle runs in the bundle sheath cells, deeper in the leaf." },

  { id: "p156", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In a C4 plant, where does the Calvin cycle happen?",
    options: [
      "Mesophyll cells",
      "Bundle sheath cells",
      "Epidermal cells",
      "Vacuoles of the mesophyll cells"
    ],
    answer: 1,
    explain: "C4 plants separate the steps in space: initial fixation in the mesophyll, Calvin cycle (with RuBisCO) in the bundle sheath, where malate keeps the CO<sub>2</sub> concentration high. Vacuoles store malate in CAM plants, not C4." },

  { id: "p157", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How are bundle sheath cells arranged in a C4 leaf?",
    options: [
      "Loosely scattered through the spongy layer",
      "On the leaf surface, forming the stomata",
      "Tightly packed around the veins, surrounded by mesophyll",
      "In a single layer just under the upper epidermis"
    ],
    answer: 2,
    explain: "From the slides: bundle sheath cells are tightly packed around the veins and surrounded by mesophyll. Tight packing keeps the CO<sub>2</sub> released inside them from leaking away. A layer just under the upper epidermis describes palisade mesophyll." },

  { id: "p158", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the first stable product of carbon fixation in C4 plants?",
    options: [
      "PGA (3C)",
      "Malate (4C)",
      "Pyruvate (3C)",
      "Oxaloacetate (4C)"
    ],
    answer: 3,
    explain: "PEP carboxylase joins CO<sub>2</sub> to PEP to make oxaloacetate, a 4-carbon acid, hence the name C4. Oxaloacetate is then reduced to malate (also 4C), so malate is second, not first. PGA is the first product in C3 plants." },

  { id: "p159", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "PEP carboxylase joins CO<sub>2</sub> to which molecule?",
    options: [
      "PEP (phosphoenolpyruvate, 3C)",
      "RuBP (5C)",
      "Pyruvate (3C)",
      "PGA (3C)"
    ],
    answer: 0,
    explain: "PEP (3C) + CO<sub>2</sub> → oxaloacetate (4C). RuBP is RuBisCO's substrate. Pyruvate is what is left after malate is decarboxylated; it must be turned back into PEP before it can accept CO<sub>2</sub> again." },

  { id: "p160", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In C4 plants, oxaloacetate is reduced to which molecule before it moves to the bundle sheath?",
    options: [
      "Pyruvate",
      "Malate",
      "Citrate",
      "PGA"
    ],
    answer: 1,
    explain: "Oxaloacetate (4C) is reduced to malate (4C), the molecule that carries CO<sub>2</sub> into the bundle sheath. Pyruvate is made from malate later, in the bundle sheath. Oxaloacetate and malate also appear in the Krebs cycle." },

  { id: "p161", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Through what does malate move from mesophyll cells into bundle sheath cells?",
    options: [
      "Stomata",
      "Xylem vessels",
      "Plasmodesmata",
      "Thylakoid membranes"
    ],
    answer: 2,
    explain: "Plasmodesmata are membrane-lined channels between neighbouring plant cells. Malate passes through them into the bundle sheath, and pyruvate passes back the same way. Stomata open to the outside air, and xylem carries water." },

  { id: "p162", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What happens to malate in the bundle sheath cells of a C4 plant?",
    options: [
      "It is stored in the vacuole until night",
      "It is phosphorylated into RuBP",
      "It is oxidized to release O<sub>2</sub>",
      "It is decarboxylated, releasing CO<sub>2</sub> and pyruvate"
    ],
    answer: 3,
    explain: "Malate (4C) loses CO<sub>2</sub> (decarboxylation) and becomes pyruvate (3C). RuBisCO then fixes that CO<sub>2</sub> in the Calvin cycle; this is the second fixation. Storing malate in vacuoles overnight is what CAM plants do." },

  { id: "p163", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What happens to the pyruvate made in the bundle sheath of a C4 plant?",
    options: [
      "It returns to the mesophyll and is converted back to PEP using ATP (ATP → AMP, equal to 2 ATP)",
      "It enters the Krebs cycle in the bundle sheath",
      "It is exported to the roots as sugar",
      "It combines with O<sub>2</sub> to make phosphoglycolate"
    ],
    answer: 0,
    explain: "Pyruvate goes back through the plasmodesmata and is regenerated into PEP. That step splits ATP into AMP (not ADP), which costs the equivalent of 2 ATP per CO<sub>2</sub>: the price of the C4 CO<sub>2</sub> pump." },

  { id: "p164", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which pair of terms describes how C4 plants and CAM plants separate initial CO<sub>2</sub> fixation from the Calvin cycle?",
    options: [
      "C4: temporal; CAM: spatial",
      "C4: spatial; CAM: temporal",
      "Both spatial",
      "Both temporal"
    ],
    answer: 1,
    explain: "C4 = spatial separation (different places: mesophyll vs bundle sheath cells). CAM = temporal separation (different times: fixation at night, Calvin cycle during the day, in the same cells)." },

  { id: "p165", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which of these is a C4 plant?",
    options: [
      "Pineapple",
      "Soybean",
      "Corn",
      "Jade plant"
    ],
    answer: 2,
    explain: "Corn, sugar cane and tropical grasses are the class examples of C4 plants. Pineapple and the jade plant are CAM plants, and soybean is a C3 plant." },

  { id: "p166", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which of these is a CAM plant?",
    options: [
      "Sugar cane",
      "Sunflower",
      "Corn",
      "Pineapple"
    ],
    answer: 3,
    explain: "Pineapple and cacti (succulents) are the class examples of CAM plants; the textbook adds the jade plant. Sugar cane and corn are C4, and sunflower is C3." },

  { id: "p167", lesson: "2.11", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Pineapple and cactus are examples of C4 plants.",
    answer: false,
    explain: "Pineapple and cactus are CAM plants (succulents adapted to extreme drought). The class C4 examples are corn, sugar cane and tropical grasses." },

  { id: "p168", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which of these is a C3 plant?",
    options: [
      "Soybean",
      "Corn",
      "Cactus",
      "Sugar cane"
    ],
    answer: 0,
    explain: "Most plants are C3. The textbook lists soybeans, Kentucky bluegrass and sunflowers, and the slides show common ivy. Corn and sugar cane are C4; cactus is CAM." },

  { id: "p169", lesson: "2.11", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "C4 plants are adapted to high heat and intense sunlight, but their environment is not necessarily dry.",
    answer: true,
    explain: "Said in class: C4 plants such as tropical grasses, corn and sugar cane suit hot, very sunny places, which are not always dry. CAM plants are the ones adapted to extreme drought." },

  { id: "p170", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "CAM plants are adapted to which conditions?",
    options: [
      "Cool, moist forests",
      "Extreme drought",
      "Deep shade",
      "Flooded soils"
    ],
    answer: 1,
    explain: "CAM plants (succulents such as cacti and pineapple) are adapted to extreme drought: they open their stomata only in the cool night to save water. Cool, moist conditions favour ordinary C3 plants." },

  { id: "p171", lesson: "2.11", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "CAM plants open their stomata during the day and close them at night.",
    answer: false,
    explain: "It is the reverse: CAM stomata open at night for gas exchange (cooler air, less water lost) and close during the day to minimize water loss. That is the opposite of most other plants." },

  { id: "p172", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In CAM plants, in which organelle is malate stored overnight?",
    options: [
      "Chloroplast stroma",
      "Bundle sheath cells",
      "Vacuole",
      "Thylakoid lumen"
    ],
    answer: 2,
    explain: "At night CO<sub>2</sub> is fixed into 4-carbon malate, which is stored in the large central vacuole (as malic acid) until morning. Bundle sheath cells are where C4 plants send malate, and they are cells, not organelles." },

  { id: "p173", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "In a CAM plant, what happens during the day?",
    options: [
      "Stomata open and PEP carboxylase fixes CO<sub>2</sub> into malate",
      "Malate moves through plasmodesmata to the bundle sheath",
      "The plant stops photosynthesis entirely",
      "The light reactions run, and CO<sub>2</sub> released from malate is fixed by RuBisCO in the Calvin cycle"
    ],
    answer: 3,
    explain: "With stomata closed, the plant releases CO<sub>2</sub> from the stored malate and RuBisCO fixes it in the Calvin cycle, powered by ATP and NADPH from the day's light reactions. Fixing CO<sub>2</sub> into malate with open stomata is the night step. Plasmodesmata transfer to the bundle sheath is the C4 method." },

  { id: "p174", lesson: "2.11", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "CAM photosynthesis requires more ATP than ordinary C3 photosynthesis.",
    answer: true,
    explain: "Fixing CO<sub>2</sub> twice costs extra energy. The slides stress that CAM requires more ATP, and the class notes put it at about one more than C4. The trade-off is that it saves a great deal of water." },

  { id: "p175", lesson: "2.11", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "In CAM plants, the initial CO<sub>2</sub> fixation and the Calvin cycle happen in the same cells but at different times of day.",
    answer: true,
    explain: "That is temporal separation: PEP carboxylase fixes CO<sub>2</sub> at night and RuBisCO runs the Calvin cycle during the day, in the same mesophyll cells. C4 plants use two different cell types (spatial separation)." },

  { id: "p176", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "How do C4 and CAM plants avoid most photorespiration?",
    options: [
      "They concentrate CO<sub>2</sub> around RuBisCO so that CO<sub>2</sub> outcompetes O<sub>2</sub>",
      "They have no RuBisCO",
      "They have no stomata",
      "They run the Calvin cycle only at night"
    ],
    answer: 0,
    explain: "Both still use RuBisCO and the Calvin cycle. They first capture CO<sub>2</sub> with PEP carboxylase into a 4-carbon acid, then release it where RuBisCO is, keeping CO<sub>2</sub> high so RuBisCO rarely binds O<sub>2</sub>. CAM plants run the Calvin cycle in the day, not at night." },

  { id: "p177", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "extra", level: 1,
    q: "What does CAM stand for?",
    options: [
      "Carbon assimilation mechanism",
      "Crassulacean acid metabolism",
      "Calvin alternate metabolism",
      "Carboxylase activity in mesophyll"
    ],
    answer: 1,
    explain: "Crassulacean acid metabolism: it was first discovered in the Crassulaceae family (which includes the jade plant), and acid refers to the malic acid that builds up in the vacuoles overnight." },

  { id: "p178", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "extra", level: 1,
    q: "What is the name for the C4 leaf arrangement in which a ring of bundle sheath cells surrounds each vein, with mesophyll cells around them?",
    options: [
      "Palisade anatomy",
      "Stroma lamellae",
      "Kranz anatomy",
      "Crassulacean anatomy"
    ],
    answer: 2,
    explain: "Kranz is German for wreath: under a microscope, the bundle sheath forms a wreath around each vein. No mesophyll cell in a C4 leaf is more than two or three cells from a bundle sheath cell." },

  { id: "p179", lesson: "2.11", type: "mcq", kind: "knowledge", tier: "extra", level: 1,
    q: "According to the textbook, a C3 plant uses 18 ATP to make one glucose. About how many does a C4 plant use?",
    options: [
      "12",
      "18",
      "38",
      "30"
    ],
    answer: 3,
    explain: "Moving each CO<sub>2</sub> into the bundle sheath costs 2 ATP, so 6 CO<sub>2</sub> cost 12 extra ATP: 18 + 12 = 30, almost twice as many. It is still worth it in hot climates where photorespiration would otherwise waste more than half the fixed carbon." }
);
