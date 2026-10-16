window.LESSONS = window.LESSONS || [];

/* ===================================================================
   1.08 CELL ORGANELLES
   =================================================================== */
window.LESSONS.push({
  id: "1.08",
  title: "Cell Organelles",
  stage: "c3",
  where: "Inside eukaryotic cells",
  summary: "A eukaryotic cell is divided into membrane-bound compartments called organelles, each with a structure suited to its job. For every organelle on the slides you need its structure, its location, its function and one extra fact, plus the differences between animal and plant cells, the path a protein takes through the endomembrane system, and which organelles are abundant in specialized cells.",
  objectives: [
    "Define organelle, explain why eukaryotic cells are divided into compartments, and distinguish cytoplasm from cytosol.",
    "Label an animal cell and a plant cell, and list the structures found in only one of them (cell wall, chloroplasts, central vacuole, plasmodesmata; lysosomes, centrioles).",
    "Describe the structure, location and function of the cell membrane, cell wall, nucleus, nuclear envelope, nucleolus, chromatin, ribosomes, rough and smooth ER, Golgi apparatus, vesicles, lysosomes, vacuoles, mitochondria, chloroplasts, the cytoskeleton, cilia and flagella.",
    "Trace a secreted protein through the endomembrane system: nucleus, rough ER, transport vesicle, Golgi (cis to trans), secretory vesicle, plasma membrane.",
    "Explain why lysosomal enzymes work best at an acidic pH and what goes wrong in Tay-Sachs disease.",
    "Compare mitochondria and chloroplasts (double membranes, own DNA, endosymbiosis) and name their internal parts.",
    "Compare microtubules, microfilaments and intermediate filaments, and cilia with flagella.",
    "Predict which organelles are abundant in a specialized cell (muscle, pancreas, liver, adrenal, white blood cell, neuron) and justify the prediction."
  ],
  html: `
<h3 data-tier="essential">Why cells are divided into organelles</h3>
<p>An <span class="term">organelle</span> ("little organ") is an internal functional structure located within the cytosol of a cell. Eukaryotic cells (animals, plants, fungi and protists) are packed with them. Prokaryotic cells (bacteria) have no membrane-bound organelles at all. That difference is a big part of why eukaryotic cells can be so much larger and more specialized.</p>
<p>Why split a cell into compartments instead of letting everything float around together? The textbook reading gives four reasons:</p>
<ul>
  <li><strong>Isolation.</strong> Some organelles lock away toxic or harmful substances. Lysosomes hold digestive enzymes that would destroy the cell if they were loose. Peroxisomes hold hydrogen peroxide while they break it down.</li>
  <li><strong>A special environment.</strong> An organelle can keep conditions that the cytosol cannot, so reactions happen there that could not happen anywhere else. The inside of a lysosome is acidic (about pH 5), but the cytosol is close to neutral.</li>
  <li><strong>Transport.</strong> Some organelles (vesicles) move substances through the cytosol to where they are needed.</li>
  <li><strong>Balance.</strong> Some organelles (vacuoles) help keep the cell's water and fluid balance steady.</li>
</ul>
<p>The cell itself, and many organelles inside it, are wrapped in membranes. The <span class="term">plasma membrane</span> is a dynamic barrier around the cytosol, and each organelle's own membrane controls the amounts and types of substances moving in and out of it. That lets every organelle keep the internal environment its job needs.</p>
<p>An organelle rarely works alone. Making and exporting a protein, for example, uses the nucleus, ribosomes, the ER, the Golgi apparatus, vesicles and the plasma membrane, one after another. Think of the cell as a factory: each department has its own room and its own job, and products move between rooms along set routes.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>The slides asked you to build a four-column table for every organelle: <strong>Organelle | Structure | Function | Extra info</strong>. Most marks on organelle questions come from those three facts: what it looks like, where it is, what it does. The summary table near the end of this lesson is laid out the same way. Cover the Function column and test yourself.</p></div>

<h3 data-tier="essential">Cytoplasm vs cytosol</h3>
<p>These two words are often mixed up, and the slides ask you to tell them apart.</p>
<div class="compare">
  <div><h4>Cytosol</h4><ul><li>Only the <strong>fluid</strong> part of the cell, the jelly-like liquid the organelles sit in.</li><li>Mostly water, with dissolved ions, sugars, amino acids and many proteins (especially enzymes).</li><li>Many metabolic reactions happen here (in Unit 2 you will see that glycolysis does).</li></ul></div>
  <div><h4>Cytoplasm</h4><ul><li><strong>Everything</strong> inside the plasma membrane except the nucleus.</li><li>That means the cytosol <strong>plus</strong> all the organelles and the cytoskeleton suspended in it.</li></ul></div>
</div>
<p>So the cytosol is part of the cytoplasm. A mitochondrion is in the cytoplasm but not in the cytosol. Cell biologists prefer "cytosol" when they mean the liquid, because it is more precise.</p>
<p><strong>Function of the cytosol:</strong> it suspends and cushions the organelles, it is the medium that molecules diffuse through to get from place to place, and it is where many of the cell's chemical reactions take place, including the work of free ribosomes.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The class question was whether the cytosol is "just the water part" of the cytoplasm. Yes: the cytosol is the fluid portion (water plus everything dissolved in it), and the cytoplasm is that fluid plus the organelles in it.</p></div>
<details class="check"><summary>Slide question: Cytoplasm vs cytosol?</summary><div class="ans"><p>The <strong>cytosol</strong> is the semi-fluid, water-based portion of the cell in which organelles are suspended. The <strong>cytoplasm</strong> is all of the contents between the nucleus and the plasma membrane: cytosol plus organelles plus cytoskeleton.</p></div></details>

<h3 data-tier="essential">Animal cells vs plant cells</h3>
<p>Plant and animal cells share most of their organelles, because both are eukaryotic and both have to make proteins, release energy and copy DNA. They differ where their lifestyles differ. A plant makes its own food from sunlight, does not move, and holds itself up with water pressure. An animal eats other organisms, moves, and needs cells that can change shape.</p>
<figure class="diagram">
<svg viewBox="0 0 640 375" role="img" aria-labelledby="b108-t1">
<title id="b108-t1">Animal cell and plant cell side by side. Labels in the middle column point to organelles found in both: cell membrane, nucleus, nucleolus, rough ER, smooth ER, Golgi apparatus, mitochondrion and ribosomes. Lysosome and centrioles are labelled only on the animal cell. Cell wall, chloroplast, central vacuole and plasmodesmata are labelled only on the plant cell.</title>
<text x="125" y="26" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">Animal cell</text>
<text x="516" y="26" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">Plant cell</text>
<text x="320" y="50" text-anchor="middle" font-family="inherit" font-size="11.5" font-style="italic" style="fill:var(--ink-2)">found in both</text>
<ellipse cx="125" cy="180" rx="112" ry="122" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="3"/>
<circle cx="105" cy="150" r="36" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="2" stroke-dasharray="16 3"/>
<circle cx="100" cy="148" r="12" style="fill:var(--blue)"/>
<path d="M131,112 A46,46 0 0 1 131,188 M136,106 A54,54 0 0 1 136,194 M141,99 A62,62 0 0 1 141,201" style="fill:none;stroke:var(--teal)" stroke-width="2.5"/>
<g style="fill:var(--ink-2)"><circle cx="152" cy="103" r="2.2"/><circle cx="165" cy="122" r="2.2"/><circle cx="171" cy="144" r="2.2"/><circle cx="169" cy="167" r="2.2"/><circle cx="159" cy="188" r="2.2"/><circle cx="182" cy="280" r="2.2"/><circle cx="60" cy="272" r="2.2"/><circle cx="95" cy="290" r="2.2"/><circle cx="40" cy="130" r="2.2"/><circle cx="205" cy="140" r="2.2"/></g>
<path d="M172,206 q7,-8 14,0 t14,0 t14,0 M176,219 q7,-8 14,0 t14,0 t14,0" style="fill:none;stroke:var(--teal)" stroke-width="2.5"/>
<path d="M140,234 q25,-10 50,0 M140,242 q25,-10 50,0 M140,250 q25,-10 50,0 M140,258 q25,-10 50,0" style="fill:none;stroke:var(--magenta)" stroke-width="3" stroke-linecap="round"/>
<circle cx="128" cy="226" r="3.5" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="1.5"/>
<circle cx="196" cy="250" r="4" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="1.5"/>
<g transform="rotate(-15 150 282)"><ellipse cx="150" cy="282" rx="21" ry="9" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="2"/><path d="M134,282 l4,-5 l4,10 l4,-10 l4,10 l4,-10 l4,10 l4,-10 l4,5" style="fill:none;stroke:var(--red)" stroke-width="1.2"/></g>
<g transform="rotate(75 48 175)"><ellipse cx="48" cy="175" rx="21" ry="9" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="2"/><path d="M32,175 l4,-5 l4,10 l4,-10 l4,10 l4,-10 l4,10 l4,-10 l4,5" style="fill:none;stroke:var(--red)" stroke-width="1.2"/></g>
<circle cx="55" cy="236" r="10" style="fill:var(--surface);stroke:var(--amber)" stroke-width="2"/>
<g style="fill:var(--amber)"><circle cx="51" cy="233" r="1.6"/><circle cx="58" cy="238" r="1.6"/><circle cx="53" cy="241" r="1.6"/></g>
<rect x="74" y="203" width="16" height="6" style="fill:var(--ink-2)"/><rect x="93" y="199" width="6" height="16" style="fill:var(--ink-2)"/>
<rect x="405" y="58" width="222" height="244" rx="12" style="fill:var(--surface-2);stroke:var(--good)" stroke-width="2"/>
<rect x="413" y="66" width="206" height="228" rx="8" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="2"/>
<rect x="597" y="54" width="6" height="16" style="fill:var(--ink-2)"/><rect x="615" y="200" width="16" height="6" style="fill:var(--ink-2)"/>
<rect x="500" y="92" width="104" height="170" rx="38" style="fill:var(--surface);stroke:var(--blue)" stroke-width="2"/>
<text x="552" y="172" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--good)">Central</text>
<text x="552" y="188" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--good)">vacuole</text>
<circle cx="458" cy="120" r="30" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="2" stroke-dasharray="14 3"/>
<circle cx="455" cy="118" r="10" style="fill:var(--blue)"/>
<path d="M491,139 A38,38 0 0 1 425,139 M498,143 A46,46 0 0 1 418,143" style="fill:none;stroke:var(--teal)" stroke-width="2.5"/>
<g style="fill:var(--ink-2)"><circle cx="490" cy="158" r="2.2"/><circle cx="475" cy="167" r="2.2"/><circle cx="458" cy="170" r="2.2"/><circle cx="441" cy="167" r="2.2"/><circle cx="426" cy="158" r="2.2"/><circle cx="420" cy="285" r="2.2"/><circle cx="490" cy="284" r="2.2"/><circle cx="487" cy="80" r="2.2"/></g>
<path d="M424,190 q6,-7 12,0 t12,0 t12,0 t12,0 M428,202 q6,-7 12,0 t12,0 t12,0 t12,0" style="fill:none;stroke:var(--teal)" stroke-width="2.5"/>
<path d="M424,224 q22,-9 44,0 M424,231 q22,-9 44,0 M424,238 q22,-9 44,0 M424,245 q22,-9 44,0" style="fill:none;stroke:var(--magenta)" stroke-width="3" stroke-linecap="round"/>
<circle cx="477" cy="227" r="3.5" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="1.5"/>
<g><ellipse cx="452" cy="270" rx="18" ry="8" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="2"/><path d="M438,270 l4,-4 l4,8 l4,-8 l4,8 l4,-8 l4,8 l4,-4" style="fill:none;stroke:var(--red)" stroke-width="1.2"/></g>
<ellipse cx="558" cy="79" rx="24" ry="9" style="fill:var(--teal-soft);stroke:var(--good)" stroke-width="2"/>
<g style="fill:var(--good)"><rect x="544" y="75" width="6" height="8"/><rect x="556" y="75" width="6" height="8"/><rect x="568" y="75" width="6" height="8"/><rect x="534" y="275" width="6" height="8"/><rect x="546" y="275" width="6" height="8"/><rect x="558" y="275" width="6" height="8"/></g>
<ellipse cx="548" cy="279" rx="24" ry="9" style="fill:none;stroke:var(--good)" stroke-width="2"/>
<g style="stroke:var(--ink-2)" stroke-width="1">
<line x1="262" y1="68" x2="194" y2="84"/><line x1="262" y1="96" x2="117" y2="116"/><line x1="262" y1="124" x2="110" y2="146"/><line x1="262" y1="152" x2="166" y2="161"/><line x1="262" y1="180" x2="214" y2="206"/><line x1="262" y1="208" x2="190" y2="234"/><line x1="262" y1="236" x2="170" y2="277"/><line x1="262" y1="264" x2="182" y2="280"/>
<line x1="378" y1="68" x2="413" y2="78"/><line x1="378" y1="96" x2="431" y2="108"/><line x1="378" y1="124" x2="452" y2="121"/><line x1="378" y1="152" x2="426" y2="158"/><line x1="378" y1="180" x2="424" y2="190"/><line x1="378" y1="208" x2="424" y2="224"/><line x1="378" y1="236" x2="434" y2="270"/><line x1="378" y1="264" x2="420" y2="285"/>
<line x1="52" y1="318" x2="55" y2="247"/><line x1="128" y1="318" x2="97" y2="216"/><line x1="430" y1="318" x2="430" y2="301"/><line x1="548" y1="318" x2="548" y2="289"/><line x1="600" y1="48" x2="600" y2="55"/>
</g>
<g style="fill:var(--ink)"><circle cx="194" cy="84" r="2.2"/><circle cx="117" cy="116" r="2.2"/><circle cx="110" cy="146" r="2.2"/><circle cx="166" cy="161" r="2.2"/><circle cx="214" cy="206" r="2.2"/><circle cx="190" cy="234" r="2.2"/><circle cx="170" cy="277" r="2.2"/><circle cx="413" cy="78" r="2.2"/><circle cx="431" cy="108" r="2.2"/><circle cx="452" cy="121" r="2.2"/><circle cx="424" cy="190" r="2.2"/><circle cx="424" cy="224" r="2.2"/><circle cx="434" cy="270" r="2.2"/></g>
<text x="320" y="72" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Cell membrane</text>
<text x="320" y="100" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Nucleus</text>
<text x="320" y="128" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Nucleolus</text>
<text x="320" y="156" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Rough ER</text>
<text x="320" y="184" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Smooth ER</text>
<text x="320" y="212" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Golgi apparatus</text>
<text x="320" y="240" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Mitochondrion</text>
<text x="320" y="268" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Ribosomes</text>
<text x="52" y="330" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--magenta)">Lysosome</text>
<text x="132" y="330" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--magenta)">Centrioles</text>
<text x="430" y="330" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--good)">Cell wall</text>
<text x="552" y="330" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--good)">Chloroplast</text>
<text x="636" y="44" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--good)">Plasmodesmata</text>
<text x="320" y="362" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">Middle: in both cell types. Magenta: animal cells only. Green: plant cells only.</text>
</svg>
<figcaption>Simplified animal and plant cells. The middle column names what both have. Only the plant cell has a cell wall, chloroplasts, a large central vacuole and plasmodesmata; only the animal cell has lysosomes and centrioles.</figcaption>
</figure>
<div class="compare">
  <div><h4>Only in plant cells</h4><ul><li><strong>Cell wall</strong> outside the membrane, for support and protection.</li><li><strong>Chloroplasts</strong>, for photosynthesis.</li><li>A large <strong>central vacuole</strong> surrounded by a membrane called the <span class="term">tonoplast</span>.</li><li><strong>Plasmodesmata</strong>: channels through the cell walls that connect the cytoplasm of neighbouring cells.</li></ul></div>
  <div><h4>Only in animal cells</h4><ul><li><strong>Lysosomes</strong> (plant cells use their vacuole and lysosome-like vesicles for the same digestive job).</li><li><strong>Centrioles</strong>, in the centrosome near the nucleus.</li><li><strong>Flagella</strong> (found in only a few plant sperm).</li></ul></div>
</div>
<p>Each difference has a reason. A plant cell does not move and has no skeleton, so its cell wall plus the water pressure in its central vacuole hold the plant up. It makes its own sugar, so it needs chloroplasts. Its walls separate cells completely, so plasmodesmata are needed to let neighbours share materials. An animal cell has no wall, so it relies on its cytoskeleton for shape. Many animal cells engulf and digest particles, which is a lysosome's job.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Animal cells have no vacuoles" is wrong. Animal cells can have several <strong>small</strong> vacuoles (the class Cell Diagram answer key labels one in the animal cell). What they lack is the single <strong>large central</strong> vacuole. Also: plant cells have mitochondria too. Chloroplasts make sugar, but the plant still needs mitochondria to turn that sugar into ATP.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>The Cell Diagram answer key labelled these. <strong>Animal cell:</strong> cell membrane, centrioles (microtubules), Golgi body/apparatus, lysosome, nucleolus, nuclear envelope/membrane, chromatin, nucleoplasm, nuclear pore, smooth ER, rough ER, ribosome, vacuole, mitochondria, microtubule, cytosol. <strong>Plant cell:</strong> cell wall, cell membrane, vacuole, chloroplast, ribosome, rough ER, smooth ER, nuclear pore, nuclear membrane, Golgi body, microtubule (cytoskeleton), mitochondria, cytosol. Be ready to label any of them on an unlabelled drawing.</p></div>

<h3 data-tier="essential">Cell membrane (plasma membrane)</h3>
<p>The cell membrane gets its own lesson next (1.09), but the organelle slide asked four questions about it.</p>
<ol>
  <li><strong>What makes up the cell membrane?</strong> A <span class="term">phospholipid bilayer</span>: two layers of phospholipids, tails facing in, heads facing out. Proteins, cholesterol and carbohydrate chains are scattered through it.</li>
  <li><strong>What is its function?</strong> It is the barrier that surrounds the cytosol and separates the inside of the cell from the outside. It controls what enters and leaves (it is <span class="term">selectively permeable</span>), and by doing that it keeps the internal environment stable enough for the organelles to work.</li>
  <li><strong>What substances are embedded in it?</strong> Transport proteins (channels and carriers), receptor proteins, enzymes, cholesterol, and glycoproteins and glycolipids (proteins and lipids with sugar chains attached).</li>
  <li><strong>What do hydrophobic and hydrophilic mean?</strong> <span class="term">Hydrophilic</span> means "water-loving": polar or charged, attracted to water. <span class="term">Hydrophobic</span> means "water-fearing": nonpolar, does not mix with water. The phosphate heads of the phospholipids are hydrophilic and face the watery fluid on both sides. The fatty acid tails are hydrophobic and hide in the middle.</li>
</ol>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Vesicles fuse with the cell membrane and their contents are released outside the cell. This is how the cell exports proteins (exocytosis, covered in lesson 1.10). The membrane they bring with them becomes part of the cell membrane.</p></div>

<h3 data-tier="essential">Cell wall</h3>
<p>The slide asks three things: what it is made of, what it does, and where it is found.</p>
<ul>
  <li><strong>Made of:</strong> in plants, mainly <span class="term">cellulose</span>. Long cellulose molecules are bundled into strong <span class="term">cellulose microfibrils</span>, which are tied together by cross-linking glycans (other polysaccharides) and embedded in a sticky polysaccharide called <span class="term">pectin</span>. Fungal cell walls are made mainly of <strong>chitin</strong> instead (you saw chitin in the carbohydrates lesson).</li>
  <li><strong>Function:</strong> it <strong>protects</strong> the cell, <strong>supports</strong> it, and <strong>gives it shape</strong>. It also stops a plant cell from bursting when water rushes in by osmosis (lesson 1.10).</li>
  <li><strong>Where:</strong> outside the plasma membrane of plant cells, fungi, many protists and prokaryotes. <strong>Not</strong> in animal cells.</li>
</ul>
<p>The wall is built in layers. A young plant cell first makes a thin, flexible <span class="term">primary wall</span>, which can stretch as the cell grows. Between neighbouring cells is a pectin-rich <span class="term">middle lamella</span> that cements them together. When the cell stops growing, many cells add a thicker, more rigid <span class="term">secondary wall</span> on the inside of the primary wall, in layers. Wood is mostly secondary wall.</p>
<p>The wall is <strong>porous</strong>. Water and many dissolved substances pass straight through it on their way to and from the plasma membrane. The wall gives strength; it is the membrane that decides what actually gets into the cell.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The cell wall is the porous outer barrier of the plant cell and surrounds the cell membrane. It has a primary wall and develops a secondary wall during later stages. It contains <strong>plasmodesmata</strong>, which connect the cytoplasm of neighbouring cells.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>A plant cell has a cell wall <strong>and</strong> a cell membrane, not one instead of the other. The membrane sits just inside the wall. If a question asks which structure controls what enters a plant cell, the answer is the cell membrane, because the wall lets most small molecules through.</p></div>
<p data-tier="extra">Some plant cells also coat their outer surface with a waxy <strong>cuticle</strong>, which protects soft parts of the plant and limits water loss on hot, dry days.</p>

<h3 data-tier="essential">The nucleus and its parts</h3>
<p>The slides split the nucleus into four parts: the nucleus itself, the nuclear envelope (membrane), the nucleolus and chromatin.</p>
<h4>Nucleus</h4>
<ul>
  <li><strong>Function:</strong> it holds and <strong>protects</strong> the cell's DNA (genetic material) and controls access to it. Locked in its own compartment, the DNA is kept away from the activity of the cytosol and from metabolic reactions that might damage it. Because DNA holds the instructions for every protein, the nucleus effectively directs the cell's activities. The nucleus also makes ribosome subunits (in the nucleolus).</li>
  <li><strong>Structure:</strong> usually the largest organelle, roughly spherical (about 5 µm across), wrapped in a double membrane with pores.</li>
  <li><strong>Contains:</strong> almost all of the cell's DNA, in the form of chromatin, plus at least one nucleolus. All of this sits in <span class="term">nucleoplasm</span>, the semi-fluid interior of the nucleus (similar to cytosol).</li>
</ul>
<p>"Almost all" matters: small amounts of DNA are also found in <strong>mitochondria</strong> and <strong>chloroplasts</strong>. That fact comes back later in this lesson as evidence for endosymbiosis.</p>
<h4>Nuclear envelope (nuclear membrane)</h4>
<ul>
  <li><strong>Structure:</strong> a <strong>double membrane</strong>, two lipid bilayers folded together. The outer bilayer is continuous with the membrane of the endoplasmic reticulum. It is riddled with <span class="term">nuclear pores</span>, each lined by a ring of proteins (the pore complex).</li>
  <li><strong>Function:</strong> it <strong>controls which substances enter and leave the nucleus</strong>. Water and gases cross it freely. Everything else needs the pores or the transporters and pumps built into the membrane. mRNA and ribosome subunits go out through the pores; proteins the nucleus needs (such as the enzymes that copy DNA) come in.</li>
  <li><strong>Contains:</strong> embedded proteins (receptors, transporters, pumps, pore complexes). Proteins attached to its inner surface anchor the DNA, keep it organized, and help the cell pass DNA to its two daughter cells during cell division.</li>
</ul>
<p>Why a gatekeeper? Controlled traffic protects the DNA, and it lets the cell regulate how much RNA and protein it makes, and when.</p>
<h4>Nucleolus</h4>
<ul>
  <li><strong>Structure:</strong> a dense, irregularly shaped region inside the nucleus. It is <strong>not</strong> surrounded by a membrane. It is a mass of proteins plus the copies of the genes for ribosomal RNA (rRNA).</li>
  <li><strong>Function:</strong> it <strong>assembles the subunits of ribosomes</strong> from rRNA and proteins.</li>
</ul>
<h4>Chromatin</h4>
<ul>
  <li><strong>Structure:</strong> the total collection of all the DNA molecules in the nucleus plus their associated proteins. The DNA is wound around proteins called <span class="term">histones</span> (like thread on spools), and those spools coil further.</li>
  <li><strong>Function:</strong> it packages a very long molecule into a small space and controls which genes can be read. When the cell divides, chromatin coils up tightly into the visible, X-shaped <span class="term">chromosomes</span> you see in diagrams.</li>
</ul>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Chromatin and chromosomes are the same material in two states: chromatin is "unwound spaghetti" (most of the cell's life, so genes can be read), and a chromosome is "spaghetti packed into a box" (during division, so it can be moved without tangling).</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The nucleolus does <strong>not</strong> make proteins and is <strong>not</strong> a "mini nucleus" with its own membrane. It builds ribosome subunits. The ribosomes then make proteins out in the cytoplasm.</p></div>
<details class="check"><summary>Slide question: What does the nucleus contain, and what does the nuclear envelope do?</summary><div class="ans"><p>The nucleus contains nucleoplasm, chromatin (almost all of the cell's DNA plus histone proteins) and at least one nucleolus. The nuclear envelope is a double membrane with pores that controls which substances enter and leave the nucleus: water and gases pass freely, while RNA and proteins pass through the nuclear pores.</p></div></details>

<h3 data-tier="essential">Ribosomes</h3>
<p>The slide asks four questions: structure, location, function and where ribosomes are made.</p>
<ul>
  <li><strong>Structure:</strong> a small particle made of two parts, a <strong>large subunit</strong> and a <strong>small subunit</strong>, each built from ribosomal RNA (rRNA) and proteins. Ribosomes have <strong>no membrane</strong>. In cell diagrams they are the tiny dots.</li>
  <li><strong>Location:</strong> <span class="term">free ribosomes</span> float in the cytosol. <span class="term">Bound ribosomes</span> are attached to the outside of the rough ER or the nuclear envelope. They are the same particles and can switch between the two.</li>
  <li><strong>Function:</strong> <strong>protein synthesis</strong>. A ribosome reads mRNA and joins amino acids into a polypeptide chain (by the condensation reactions you saw in the proteins lesson).</li>
  <li><strong>Where they are synthesized:</strong> the two subunits are assembled in the <strong>nucleolus</strong>, leave through the nuclear pores, and only join into a working ribosome out in the cytoplasm when they start making a protein.</li>
</ul>
<p>Free and bound ribosomes make proteins for different destinations. <strong>Free</strong> ribosomes make proteins that stay in the cytosol, such as the enzymes that start the breakdown of sugar. <strong>Bound</strong> ribosomes make proteins that will be put into membranes, packed into lysosomes, or exported out of the cell (secreted). That is why cells that secrete a lot of protein, such as pancreas cells that make digestive enzymes, have huge amounts of rough ER and prominent nucleoli.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Ribosomes are drawn as little balls. Free ribosomes are suspended in the cytosol; bound ribosomes are attached to the ER or the nuclear envelope. Ribosomes have <strong>no membrane</strong>.</p></div>
<details class="check"><summary>Slide question: Where are ribosomes synthesized?</summary><div class="ans"><p>In the <strong>nucleolus</strong>, inside the nucleus. Ribosomal RNA is made there and combined with proteins (imported from the cytoplasm) to form large and small subunits. The subunits exit through the nuclear pores and join together in the cytoplasm.</p></div></details>
<h3 data-tier="essential">The endomembrane system</h3>
<p>The <span class="term">endomembrane system</span> is a group of interacting organelles between the nucleus and the plasma membrane. Its main job is to <strong>make lipids, enzymes and other proteins for secretion or for insertion into cell membranes</strong>. It also destroys toxins and recycles wastes.</p>
<p>Its members are the <strong>nuclear envelope, rough ER, smooth ER, Golgi apparatus, vesicles, lysosomes, vacuoles and the plasma membrane</strong>. They are linked either directly (the ER is continuous with the nuclear envelope) or by <strong>vesicles</strong> that bud off one membrane and fuse with the next. A piece of membrane made in the ER can end up, a few steps later, as part of the plasma membrane. Mitochondria and chloroplasts are <strong>not</strong> part of this system.</p>
<figure class="diagram">
<svg viewBox="0 0 640 262" role="img" aria-labelledby="b108-t2">
<title id="b108-t2">The secretory pathway. 1: DNA in the nucleus is copied to mRNA. 2: Ribosomes on the rough ER build a polypeptide that folds inside the ER. 3: A transport vesicle carries it to the Golgi. 4: The Golgi modifies it as it moves from the cis face to the trans face. 5: A secretory vesicle carries it to the plasma membrane and releases it outside the cell by exocytosis. 6: Other vesicles from the Golgi become lysosomes.</title>
<defs><marker id="b108-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<rect x="466" y="30" width="12" height="200" style="fill:var(--amber-soft)"/>
<line x1="466" y1="30" x2="466" y2="230" style="stroke:var(--amber)" stroke-width="2.5"/><line x1="478" y1="30" x2="478" y2="230" style="stroke:var(--amber)" stroke-width="2.5"/>
<text x="560" y="44" text-anchor="middle" font-family="inherit" font-size="11.5" font-style="italic" style="fill:var(--ink-2)">outside the cell</text>
<circle cx="58" cy="128" r="44" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="2" stroke-dasharray="18 4"/>
<text x="58" y="124" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Nucleus</text>
<text x="58" y="140" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">DNA</text>
<rect x="128" y="104" width="86" height="12" rx="6" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<rect x="128" y="124" width="86" height="12" rx="6" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<rect x="128" y="144" width="86" height="12" rx="6" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<path d="M134,101 H210 M134,121 H210 M134,141 H210 M134,159 H210" style="fill:none;stroke:var(--ink-2)" stroke-width="4" stroke-linecap="round" stroke-dasharray="0 12"/>
<circle cx="241" cy="128" r="10" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="2"/><circle cx="241" cy="128" r="3" style="fill:var(--teal)"/>
<path d="M284,91 q-14,37 0,74 M299,91 q-14,37 0,74 M314,91 q-14,37 0,74 M329,91 q-14,37 0,74" style="fill:none;stroke:var(--magenta)" stroke-width="9" stroke-linecap="round"/>
<path d="M284,91 q-14,37 0,74 M299,91 q-14,37 0,74 M314,91 q-14,37 0,74 M329,91 q-14,37 0,74" style="fill:none;stroke:var(--magenta-soft)" stroke-width="4" stroke-linecap="round"/>
<circle cx="370" cy="104" r="10" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/><circle cx="370" cy="104" r="3" style="fill:var(--magenta)"/>
<circle cx="454" cy="104" r="10" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/><circle cx="454" cy="104" r="3" style="fill:var(--magenta)"/>
<g style="fill:var(--magenta)"><circle cx="494" cy="96" r="3"/><circle cx="505" cy="106" r="3"/><circle cx="492" cy="114" r="3"/></g>
<circle cx="398" cy="192" r="14" style="fill:var(--surface);stroke:var(--amber)" stroke-width="2"/>
<g style="fill:var(--amber)"><circle cx="393" cy="188" r="2"/><circle cx="402" cy="190" r="2"/><circle cx="397" cy="197" r="2"/></g>
<g style="stroke:var(--ink-2)" stroke-width="1.6"><line x1="104" y1="128" x2="123" y2="128" marker-end="url(#b108-ar)"/><line x1="216" y1="128" x2="229" y2="128" marker-end="url(#b108-ar)"/><line x1="253" y1="128" x2="272" y2="128" marker-end="url(#b108-ar)"/><line x1="338" y1="104" x2="357" y2="104" marker-end="url(#b108-ar)"/><line x1="382" y1="104" x2="441" y2="104" marker-end="url(#b108-ar)"/><line x1="336" y1="152" x2="383" y2="183" marker-end="url(#b108-ar)"/></g>
<text x="276" y="80" text-anchor="middle" font-family="inherit" font-size="11.5" font-style="italic" style="fill:var(--ink-2)">cis</text>
<text x="338" y="80" text-anchor="middle" font-family="inherit" font-size="11.5" font-style="italic" style="fill:var(--ink-2)">trans</text>
<text x="171" y="182" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Rough ER</text>
<text x="241" y="182" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Transport</text>
<text x="241" y="196" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">vesicle</text>
<text x="306" y="182" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Golgi</text>
<text x="306" y="196" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">apparatus</text>
<text x="412" y="128" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Secretory</text>
<text x="412" y="142" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">vesicle</text>
<text x="398" y="224" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Lysosome</text>
<text x="472" y="250" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--amber)">Plasma membrane</text>
<text x="565" y="96" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Exocytosis:</text>
<text x="565" y="112" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">product released</text>
<text x="565" y="128" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">outside the cell</text>
<g style="fill:var(--ink)"><circle cx="58" cy="62" r="10"/><circle cx="171" cy="80" r="10"/><circle cx="241" cy="98" r="10"/><circle cx="306" cy="62" r="10"/><circle cx="412" cy="80" r="10"/><circle cx="432" cy="192" r="10"/></g>
<text x="58" y="66" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--surface)">1</text>
<text x="171" y="84" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--surface)">2</text>
<text x="241" y="102" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--surface)">3</text>
<text x="306" y="66" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--surface)">4</text>
<text x="412" y="84" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--surface)">5</text>
<text x="432" y="196" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--surface)">6</text>
</svg>
<figcaption>The secretory pathway through the endomembrane system. The numbers match the steps below.</figcaption>
</figure>
<ol class="steps">
  <li><p class="step-head">Nucleus</p><p>The gene for the protein is copied from DNA into mRNA, which leaves through a nuclear pore.</p></li>
  <li><p class="step-head">Rough ER</p><p>A ribosome on the rough ER reads the mRNA. The growing polypeptide is threaded into the ER's interior, where it folds into its 3D shape. Many proteins get their first sugar chains here.</p></li>
  <li><p class="step-head">Transport vesicle</p><p>A piece of ER membrane pinches off around the protein and carries it to the <strong>cis</strong> (receiving) face of the Golgi, where the vesicle fuses.</p></li>
  <li><p class="step-head">Golgi apparatus</p><p>As the protein moves from the cis face to the <strong>trans</strong> (shipping) face, Golgi enzymes finish it: they add sugars or phosphate groups, or cut the chain. The finished products are sorted.</p></li>
  <li><p class="step-head">Secretory vesicle to the plasma membrane</p><p>A vesicle buds from the trans face, travels to the plasma membrane and fuses with it, releasing the protein outside the cell (exocytosis). A membrane protein stays in the vesicle's membrane and becomes part of the plasma membrane instead.</p></li>
  <li><p class="step-head">Lysosome</p><p>Vesicles carrying digestive enzymes bud off the Golgi and become lysosomes, which stay inside the cell.</p></li>
</ol>

<h4>Rough endoplasmic reticulum (rough ER)</h4>
<ul>
  <li><strong>Structure:</strong> a network of flattened, folded membrane sacs and tubes (called <span class="term">cisternae</span>) enclosing one continuous internal space. Its outer surface is studded with thousands of ribosomes, which make it look rough in electron micrographs.</li>
  <li><strong>Location:</strong> attached to, and continuous with, the outer membrane of the nuclear envelope. It wraps around the nucleus.</li>
  <li><strong>Function:</strong> its ribosomes make polypeptide chains and release them into the interior of the ER. There the proteins <strong>fold into their complex structure</strong>. Some become part of the ER membrane itself; others are packed into vesicles and sent to other parts of the cell or out of the cell. It also makes new membrane, so it is often called a "membrane factory."</li>
</ul>
<p>Cells that make, store and secrete a lot of protein have a lot of rough ER. The textbook example is the pancreas, whose cells secrete enzymes that help digest food in the small intestine.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The rough ER is connected to the nucleus: it is an extension of the nuclear envelope that folds into flattened sacs and tubes. Ribosomes synthesize polypeptide chains that are sent into the rough ER, the proteins fold there, and some become part of the ER membrane.</p></div>

<h4>Smooth endoplasmic reticulum (smooth ER)</h4>
<ul>
  <li><strong>Structure:</strong> a network of membrane tubes with <strong>no ribosomes</strong> attached, so it looks smooth.</li>
  <li><strong>Location:</strong> connected to the rough ER (the two share one continuous membrane), usually farther from the nucleus.</li>
  <li><strong>Function:</strong> it does <strong>not</strong> make proteins. Some polypeptides made by the rough ER end up in the smooth ER as enzymes. Those enzymes produce most of the cell's <strong>membrane lipids</strong> (phospholipids) and <strong>steroids</strong> (such as sex hormones and adrenal hormones). They also <strong>break down carbohydrates, fatty acids, and some drugs and poisons</strong> (detoxification).</li>
</ul>
<p>This is why liver cells (which detoxify alcohol and drugs) and adrenal gland cells (which make steroid hormones) are packed with smooth ER.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Smooth ER: "no ribosomes, so it does not make proteins." The chain to remember is: rough ER makes polypeptides, which become smooth ER enzymes, which make cell membrane lipids. Smooth ER also breaks down carbohydrates, fatty acids and some drugs and poisons.</p></div>
<p data-tier="extra">Two extra smooth ER facts from the reading. Detox enzymes usually add hydroxyl (–OH) groups to drug molecules, making them more water-soluble and easier to flush out in urine. Heavy use of a drug such as alcohol or barbiturates makes liver cells build more smooth ER, which breaks the drug down faster: one reason tolerance develops. In muscle cells, the smooth ER also stores calcium ions and releases them to trigger contraction.</p>

<h4>Golgi apparatus (Golgi body)</h4>
<ul>
  <li><strong>Structure:</strong> a stack of flattened, folded membrane sacs (cisternae) that looks like a <strong>stack of pancakes</strong>. The sacs are not connected to each other. The stack has two faces: the <span class="term">cis face</span> (the "receiving" side, facing the ER) and the <span class="term">trans face</span> (the "shipping" side, facing the plasma membrane). Vesicles cluster around both faces.</li>
  <li><strong>Location:</strong> in the cytoplasm between the ER and the plasma membrane, usually near the nucleus.</li>
  <li><strong>Function:</strong> it receives, modifies, sorts and ships. Vesicles from the ER fuse with the cis face and empty their contents in. Golgi enzymes put the <strong>finishing touches</strong> on polypeptide chains and lipids: they <strong>attach phosphate groups or sugars</strong>, and they <strong>cleave</strong> (cut) certain polypeptide chains. The finished products (membrane proteins, proteins for secretion, and enzymes) are sorted and packaged into new vesicles that carry them to the plasma membrane or to lysosomes.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>"Cleaving" a polypeptide means breaking some of its peptide bonds by <strong>hydrolysis</strong>, cutting a long chain into smaller pieces. Some proteins are made as a longer, inactive chain and only become active once the Golgi trims them. Many vesicles fuse with the Golgi and empty their contents into it.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>The Golgi is the cell's <strong>post office</strong>. Packages arrive at the receiving dock (cis), get finished and labelled with "address tags" (sugar and phosphate groups) that tell the cell where each one goes, and leave from the shipping dock (trans). <strong>C</strong>is = <strong>c</strong>oming in; <strong>t</strong>rans = <strong>t</strong>ransit out.</p></div>

<h4>Vesicles</h4>
<ul>
  <li><strong>Structure:</strong> small, sac-like organelles enclosed by a single membrane. Cells have many of them.</li>
  <li><strong>Function:</strong> they <strong>transport, store or digest</strong> substances. They form in great numbers, either on their own or by <strong>budding</strong> off other organelles (the ER and Golgi) or the plasma membrane. Some carry proteins from one organelle to another, or to and from the plasma membrane. Lysosomes, peroxisomes and vacuoles are all specialized kinds of vesicle.</li>
</ul>
<p>Vesicles work because membranes are fluid (lesson 1.09). A patch of membrane can pinch off into a sphere, travel, and then merge seamlessly into another membrane without leaking its contents.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Vesicles "carry things to places." The usual route is: vesicles from the ER go to the Golgi bodies, which modify the contents, and then new vesicles go to the plasma membrane or to lysosomes.</p></div>
<h4 data-tier="likely">Peroxisomes</h4>
<p>A <span class="term">peroxisome</span> is a vesicle that contains enzymes which digest fatty acids and amino acids. That breakdown produces hydrogen peroxide (H<sub>2</sub>O<sub>2</sub>), which is toxic. Peroxisomes also contain the enzyme <strong>catalase</strong>, which converts it into harmless water and oxygen: 2 H<sub>2</sub>O<sub>2</sub> → 2 H<sub>2</sub>O + O<sub>2</sub>. Keeping the peroxide inside one compartment protects the rest of the cell. Peroxisomes in liver cells also break down alcohol and other toxins.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Peroxisomes were not on the slides. In class they were described as a type of vesicle that <strong>inactivates toxins</strong>.</p></div>
<details class="check"><summary>Trace a digestive enzyme made by a pancreas cell from its gene to the outside of the cell.</summary><div class="ans"><p>The gene in the <strong>nucleus</strong> is copied to mRNA, which exits through a nuclear pore. A ribosome on the <strong>rough ER</strong> builds the polypeptide, which folds inside the ER. A <strong>transport vesicle</strong> carries it to the <strong>cis face of the Golgi</strong>. The Golgi modifies it (for example by adding sugars) and sorts it, and it leaves the <strong>trans face</strong> in a <strong>secretory vesicle</strong>. The vesicle fuses with the <strong>plasma membrane</strong> and releases the enzyme outside the cell by exocytosis.</p></div></details>

<h3 data-tier="essential">Lysosomes</h3>
<p>The lysosome slide has five questions. Here they are in order.</p>
<ol>
  <li><strong>Structure:</strong> a small, membrane-bound vesicle (single membrane) filled with powerful <strong>digestive (hydrolytic) enzymes</strong>, about 40 different kinds, able to break down proteins, fats, polysaccharides and nucleic acids. Its membrane contains transport proteins that move the digested products out into the cytosol.</li>
  <li><strong>Function:</strong> <strong>intracellular digestion</strong> and waste disposal. Lysosomes fuse with vacuoles or vesicles carrying particles or molecules for disposal (food, bacteria, worn-out cell parts) and empty their enzymes into them. The enzymes hydrolyze the contents, and useful products such as amino acids and simple sugars are returned to the cytosol to be reused. Lysosomes digest food brought in by <strong>phagocytosis</strong> (a white blood cell engulfing a bacterium) and recycle the cell's own damaged organelles (<span class="term">autophagy</span>).</li>
  <li><strong>Where they are created:</strong> they bud off the trans face of the <strong>Golgi apparatus</strong>. Their enzymes and membrane are made by the rough ER and processed in the Golgi first.</li>
  <li><strong>pH:</strong> the inside of a lysosome is <strong>acidic, about pH 4.5 to 5</strong>, while the cytosol is close to neutral (about pH 7.2). The lysosome's membrane pumps H<sup>+</sup> ions in to keep it that way. This tells you that lysosomal enzymes have an <strong>optimal pH that is acidic</strong>: they work best around pH 5 and poorly at neutral pH.</li>
  <li><strong>Tay-Sachs disease</strong> is an inherited lysosomal storage disease. The lysosomes lack a working version of one enzyme (hexosaminidase A) that breaks down a particular lipid in nerve cells. With nothing to digest it, the lipid builds up inside the lysosomes of brain neurons, which swell and stop working. Symptoms start in infancy (loss of movement skills, blindness, seizures) and the disease is usually fatal in early childhood. A child must inherit the faulty gene from both parents.</li>
</ol>
<p>Why does the acidic pH matter so much? Remember from the enzymes lesson (1.07) that pH changes the charges on an enzyme's R groups and therefore the shape of its active site. Lysosomal enzymes are folded to work in acid. That is also a built-in safety feature: if a lysosome leaks, its enzymes are barely active at the neutral pH of the cytosol, so the cell does not digest itself. Only massive leakage destroys a cell.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>A lysosome is <strong>also a vesicle</strong>. It "disposes of trash" from a vacuole by emptying its digestive enzymes into it: intracellular digestion.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Lysosomes do not make their own enzymes. The enzymes are proteins, so they are made by ribosomes on the <strong>rough ER</strong> and shipped through the <strong>Golgi</strong>, which packages them into the vesicles that become lysosomes.</p></div>
<details class="check"><summary>A drug raises the pH inside lysosomes from 5 to 7. Predict the effect on the cell.</summary><div class="ans"><p>Lysosomal enzymes have an acidic optimum, so at pH 7 they become much less active. Material sent to lysosomes (engulfed particles, worn-out organelles) would not be digested and would build up inside the cell, much as the undigested lipid builds up in Tay-Sachs disease.</p></div></details>

<h3 data-tier="essential">Vacuoles</h3>
<ul>
  <li><strong>Structure:</strong> a liquid-filled sac bounded by a single membrane. Under a microscope it looks empty. In plant cells the membrane of the central vacuole is called the <span class="term">tonoplast</span> and the liquid inside is <span class="term">cell sap</span>.</li>
  <li><strong>Function:</strong> vacuoles are like <strong>trash cans</strong>: they isolate and dispose of wastes, debris and toxic materials. They also <strong>store</strong> substances and aid in cellular metabolism and <strong>water balance</strong>.</li>
</ul>
<p>Both plant and animal cells contain vacuoles, but plant cells have one <strong>large central vacuole</strong>. It usually takes up <strong>50 to 90%</strong> of the cell's interior, squeezing the cytosol into a thin layer between the vacuole and the plasma membrane. Amino acids, sugars, ions, wastes and toxins collect in it. Some vacuoles hold the pigments that colour flower petals, or bitter or poisonous compounds that discourage animals from eating the plant.</p>
<p>The central vacuole also holds the plant up. When it is full of water it pushes outward against the cell wall, and this <strong>fluid pressure</strong> keeps cells, stems and leaves firm. When a plant runs short of water, the vacuoles shrink, the pressure drops, and the plant wilts. Lesson 1.10 explains this using osmosis.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>A vacuole is technically a special type of vesicle: a big bubble that acts as the cell's <strong>trash can</strong>. Plants have a large central vacuole that also keeps the plant firm through fluid pressure.</p></div>
<p data-tier="extra">Other kinds from the reading: <strong>food vacuoles</strong> form when a cell engulfs food by phagocytosis, and many freshwater protists have <strong>contractile vacuoles</strong> that pump excess water out of the cell so it does not burst.</p>
<details class="check"><summary>Why does a plant wilt if it is not watered?</summary><div class="ans"><p>Its cells lose water, so the central vacuoles shrink. The vacuoles no longer press outward against the cell walls, so the fluid pressure that kept the cells firm drops, and the stems and leaves go limp.</p></div></details>
<!-- @@108-PART3@@ -->
`
});
