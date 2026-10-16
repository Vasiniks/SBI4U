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
<details class="check"><summary>Trace a digestive enzyme made by a pancreas cell from its gene to the outside of the cell.</summary><div class="ans"><p>The gene in the <strong>nucleus</strong> is copied to mRNA, which exits through a nuclear pore. A ribosome on the <strong>rough ER</strong> builds the polypeptide, which folds inside the ER. A <strong>transport vesicle</strong> carries it to the <strong>cis face of the Golgi</strong>. The Golgi modifies it (for example by adding sugars) and sorts it, and it leaves the <strong>trans face</strong> in a <strong>secretory vesicle</strong>. The vesicle fuses with the <strong>plasma membrane</strong> and releases the enzyme outside the cell by exocytosis.</p></div></details>
<h4 data-tier="likely">Peroxisomes</h4>
<p>A <span class="term">peroxisome</span> is a vesicle that contains enzymes which digest fatty acids and amino acids. That breakdown produces hydrogen peroxide (H<sub>2</sub>O<sub>2</sub>), which is toxic. Peroxisomes also contain the enzyme <strong>catalase</strong>, which converts it into harmless water and oxygen: 2 H<sub>2</sub>O<sub>2</sub> → 2 H<sub>2</sub>O + O<sub>2</sub>. Keeping the peroxide inside one compartment protects the rest of the cell. Peroxisomes in liver cells also break down alcohol and other toxins.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Peroxisomes were not on the slides. In class they were described as a type of vesicle that <strong>inactivates toxins</strong>.</p></div>

<h3 data-tier="essential">Lysosomes</h3>
<p>The lysosome slide has five questions. Here they are in order.</p>
<ol>
  <li><strong>Structure:</strong> a small, membrane-bound vesicle (single membrane) filled with powerful <strong>digestive (hydrolytic) enzymes</strong>, dozens of different kinds, able to break down proteins, fats, polysaccharides and nucleic acids. Its membrane contains transport proteins that move the digested products out into the cytosol.</li>
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
<h3 data-tier="essential">Mitochondria</h3>
<ul>
  <li><strong>Structure:</strong> a bean-shaped organelle (usually 1 to 4 µm long) with <strong>two membranes</strong>. The <strong>outer membrane</strong> is smooth. The <strong>inner membrane</strong> is highly folded; the folds are called <span class="term">cristae</span>. The two membranes create two compartments: the <span class="term">intermembrane space</span> (between the membranes) and the <span class="term">matrix</span> (the fluid inside the inner membrane), which contains enzymes, the mitochondrion's own DNA and its own ribosomes.</li>
  <li><strong>Function:</strong> the site of <strong>aerobic cellular respiration</strong>. Mitochondria break down organic molecules such as glucose and fatty acids, using oxygen, and transfer the energy released into <strong>ATP</strong>, the molecule cells use to power their work. They make most of the ATP in plant and animal cells.</li>
</ul>
<p>The cristae exist to increase surface area. Many of the proteins of respiration, including the enzyme that makes ATP, are built into the inner membrane, so more folds means more ATP-making machinery packed into the same small organelle. You will study each stage in Unit 2.</p>
<p>The number of mitochondria matches the cell's energy demand. A single-celled yeast may have only one; a human skeletal muscle cell can have a thousand or more. Mitochondria are not fixed shapes either: they move, change shape, split in two and fuse.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The slide's hint says it directly: <strong>do not write "the powerhouse of the cell."</strong> It earns no marks because it names neither the process nor the product. Write: "site of cellular respiration, which uses oxygen to break down glucose and stores the released energy in ATP." Also avoid "mitochondria make energy": energy cannot be created; it is converted from the chemical energy in food to the chemical energy in ATP.</p></div>
<figure class="diagram">
<svg viewBox="0 0 640 272" role="img" aria-labelledby="b108-t3">
<title id="b108-t3">Cutaway diagrams of a mitochondrion and a chloroplast. The mitochondrion has a smooth outer membrane, an inner membrane folded into cristae, an intermembrane space between them, and a fluid matrix inside. The chloroplast has outer and inner membranes surrounding a fluid stroma that contains stacks of thylakoid discs called grana, joined by lamellae.</title>
<text x="160" y="20" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">Mitochondrion</text>
<text x="480" y="20" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">Chloroplast</text>
<ellipse cx="160" cy="140" rx="130" ry="62" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="2.5"/>
<ellipse cx="160" cy="140" rx="118" ry="50" style="fill:var(--surface);stroke:var(--red)" stroke-width="2"/>
<path d="M75,105V135M115,94V133M155,90V132M195,92V132M235,101V135M95,182V147M135,189V148M175,190V148M215,184V147M255,170V150" style="fill:none;stroke:var(--red)" stroke-width="6" stroke-linecap="round"/>
<path d="M75,105V135M115,94V133M155,90V132M195,92V132M235,101V135M95,182V147M135,189V148M175,190V148M215,184V147M255,170V150" style="fill:none;stroke:var(--red-soft)" stroke-width="2" stroke-linecap="round"/>
<ellipse cx="480" cy="140" rx="135" ry="62" style="fill:var(--surface-2);stroke:var(--good)" stroke-width="2.5"/>
<ellipse cx="480" cy="140" rx="127" ry="55" style="fill:var(--teal-soft);stroke:var(--good)" stroke-width="1.5"/>
<g style="fill:var(--good)">
<rect x="382" y="123" width="26" height="6" rx="3"/><rect x="382" y="131" width="26" height="6" rx="3"/><rect x="382" y="139" width="26" height="6" rx="3"/><rect x="382" y="147" width="26" height="6" rx="3"/>
<rect x="432" y="111" width="26" height="6" rx="3"/><rect x="432" y="119" width="26" height="6" rx="3"/><rect x="432" y="127" width="26" height="6" rx="3"/><rect x="432" y="135" width="26" height="6" rx="3"/>
<rect x="492" y="125" width="26" height="6" rx="3"/><rect x="492" y="133" width="26" height="6" rx="3"/><rect x="492" y="141" width="26" height="6" rx="3"/><rect x="492" y="149" width="26" height="6" rx="3"/>
<rect x="547" y="115" width="26" height="6" rx="3"/><rect x="547" y="123" width="26" height="6" rx="3"/><rect x="547" y="131" width="26" height="6" rx="3"/><rect x="547" y="139" width="26" height="6" rx="3"/>
</g>
<path d="M408,135 L432,125 M458,119 L492,139 M518,133 L547,127" style="fill:none;stroke:var(--good)" stroke-width="2"/>
<g style="stroke:var(--ink-2)" stroke-width="1">
<line x1="78" y1="50" x2="90" y2="88"/><line x1="240" y1="50" x2="250" y2="101"/><line x1="64" y1="238" x2="80" y2="177"/><line x1="150" y1="238" x2="145" y2="165"/><line x1="232" y1="238" x2="216" y2="162"/>
<line x1="388" y1="50" x2="380" y2="99"/><line x1="566" y1="50" x2="570" y2="102"/><line x1="412" y1="238" x2="430" y2="170"/><line x1="495" y1="238" x2="505" y2="155"/><line x1="575" y1="238" x2="560" y2="145"/>
</g>
<g style="fill:var(--ink)"><circle cx="90" cy="88" r="2.2"/><circle cx="250" cy="101" r="2.2"/><circle cx="80" cy="177" r="2.2"/><circle cx="145" cy="165" r="2.2"/><circle cx="216" cy="162" r="2.2"/><circle cx="380" cy="99" r="2.2"/><circle cx="570" cy="102" r="2.2"/><circle cx="430" cy="170" r="2.2"/><circle cx="505" cy="155" r="2.2"/><circle cx="560" cy="145" r="2.2"/></g>
<text x="70" y="44" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Outer membrane</text>
<text x="235" y="44" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Intermembrane space</text>
<text x="60" y="250" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Inner membrane</text>
<text x="150" y="250" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Matrix</text>
<text x="235" y="250" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Cristae (folds)</text>
<text x="388" y="44" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Outer membrane</text>
<text x="566" y="44" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Inner membrane</text>
<text x="410" y="250" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Stroma</text>
<text x="495" y="250" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Thylakoid</text>
<text x="580" y="250" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Granum</text>
<text x="580" y="265" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">(thylakoid stack)</text>
</svg>
<figcaption>Both organelles have two membranes. The mitochondrion folds its inner membrane into cristae; the chloroplast has a third membrane system, the thylakoids, stacked into grana inside the stroma.</figcaption>
</figure>

<h3 data-tier="essential">Chloroplasts and other plastids</h3>
<ul>
  <li><strong>Structure:</strong> an oval or disk-shaped organelle bounded by a <strong>double membrane</strong> (outer and inner membrane, with an intermembrane space between). Inside is a semi-fluid called the <span class="term">stroma</span>, which contains enzymes and the chloroplast's own DNA. In the stroma is a third membrane system of flattened sacs called <span class="term">thylakoids</span>; a stack of thylakoids is a <span class="term">granum</span> (plural grana), and grana are linked by stroma lamellae. The green pigment <strong>chlorophyll</strong> sits in the thylakoid membranes.</li>
  <li><strong>Function:</strong> <strong>photosynthesis</strong>. Chloroplasts capture light energy and use it to make sugars from carbon dioxide and water, releasing oxygen. They convert light energy into chemical energy.</li>
  <li><strong>Location:</strong> in the cytoplasm of photosynthetic cells: plant cells (mostly in leaves and other green parts) and algae. Not in animal cells, and not in plant cells that never see light, such as root cells.</li>
</ul>
<p>A chloroplast is one kind of <span class="term">plastid</span>: a membrane-bound organelle used for photosynthesis or storage in plants and algae. Two other plastids appear in the reading:</p>
<ul>
  <li><span class="term">Chromoplasts</span> make and store pigments other than chlorophyll, mainly orange and red <strong>carotenoids</strong>. They colour many flowers, fruits and roots. As a tomato ripens, its green chloroplasts turn into red chromoplasts, and autumn colours appear when chlorophyll breaks down and reveals the carotenoids.</li>
  <li><span class="term">Amyloplasts</span> are unpigmented plastids that store <strong>starch</strong>. They are abundant in stems, tubers (underground stems, like potatoes) and seeds.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Amyloplasts were not on the slides but came up in class: an unpigmented type of plastid that stores starch grains in stems, tubers and seeds. In some plants they also act as <strong>gravity-sensing</strong> organelles: being heavy with starch, they settle to the bottom of the cell, which tells a root which way is down.</p></div>
<div class="table-wrap"><table class="data"><thead><tr><th></th><th>Mitochondrion</th><th>Chloroplast</th></tr></thead><tbody>
<tr><td>Found in</td><td>Nearly all eukaryotic cells (plants and animals)</td><td>Plant and algal cells only</td></tr>
<tr><td>Membranes</td><td>Two; inner one folded into cristae</td><td>Two, plus internal thylakoid membranes</td></tr>
<tr><td>Fluid inside</td><td>Matrix</td><td>Stroma</td></tr>
<tr><td>Own DNA and ribosomes</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Energy conversion</td><td>Chemical energy in food to chemical energy in ATP</td><td>Light energy to chemical energy in sugar</td></tr>
</tbody></table></div>
<h4 data-tier="likely">Endosymbiosis: why these two look like bacteria</h4>
<p data-tier="likely">Mitochondria and chloroplasts resemble bacteria in size, shape and biochemistry. Each has its own DNA (similar to bacterial DNA) and its own ribosomes, and each divides on its own by splitting in two. The <span class="term">endosymbiosis</span> theory explains this: mitochondria evolved from aerobic bacteria, and chloroplasts from photosynthetic bacteria, that were taken in by a host cell and stayed there permanently. Their double membranes fit the story: the inner membrane came from the bacterium, the outer one from the host cell that engulfed it.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The chloroplast resembles photosynthetic bacteria, which is the evidence for endosymbiosis. Note that the mitochondrion "technically has two membranes," just like the chloroplast.</p></div>

<h3 data-tier="essential">The cytoskeleton: microtubules and microfilaments</h3>
<p>Between the nucleus and the plasma membrane runs the <span class="term">cytoskeleton</span>: an interconnected network of protein filaments. It reinforces the cell, organizes the organelles, and moves cell structures and often the whole cell. Some parts are permanent; others are built only when needed and then taken apart.</p>
<div class="table-wrap"><table class="data"><thead><tr><th></th><th>Microtubules</th><th>Microfilaments</th><th>Intermediate filaments</th></tr></thead><tbody>
<tr><td>Structure</td><td>Long, <strong>hollow</strong> cylinders made of the protein <strong>tubulin</strong>; thickest (25 nm)</td><td>Thin, solid <strong>fibres</strong> of the protein <strong>actin</strong>; thinnest (about 7 nm)</td><td>Fibrous proteins (such as keratins) twisted into cables; medium (8 to 12 nm)</td></tr>
<tr><td>Mainly located</td><td>Throughout the cytoplasm, radiating out from the centrosome near the nucleus</td><td>Concentrated at the <strong>edge of the cell</strong>, just under the plasma membrane</td><td>Cytosol and nucleus of most animal cells</td></tr>
<tr><td>Functions</td><td>Dynamic scaffolding that holds cell shape; tracks along which vesicles and organelles move; <strong>separate chromosomes</strong> during cell division; make up cilia, flagella and centrioles</td><td><strong>Change the shape</strong> of the cell; extend or drag the cell edge (pseudopods); <strong>muscle contraction</strong> (actin with myosin); pinch a dividing animal cell in two</td><td>The most stable and toughest; strengthen cells and tissues; anchor the nucleus</td></tr>
</tbody></table></div>
<p>The key word for microtubules is <strong>dynamic</strong>: they rapidly assemble when they are needed and disassemble when they are not. Before a cell divides, for example, a set of microtubules (the spindle) assembles, pulls the duplicated chromosomes apart, then breaks down again.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>"Cytoskeleton" was not a slide heading, but it was discussed: it is the scaffolding of the cell, it organizes and moves cell structures (or the whole cell), some parts are permanent and some are not, and it is <strong>really important for animal cells to maintain their structure</strong>, because they have no cell wall. Microtubules assemble to help with a function when needed and disassemble when not; microfilaments change the shape of the cell and drive movements and contractions.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Micro<strong>tubules</strong> are <strong>tubes</strong> (hollow, made of <strong>tub</strong>ulin). Micro<strong>filaments</strong> are <strong>fil</strong>led-in threads of <strong>act</strong>in, the protein that <strong>act</strong>s in muscle contraction.</p></div>

<h3 data-tier="essential">Cilia, flagella and centrioles</h3>
<p><strong>Structure (both):</strong> extensions of the cell surface, covered by the plasma membrane, with an organized array of <strong>microtubules</strong> running their whole length (nine pairs in a ring around two central ones, the "9 + 2" pattern). Protein spokes and links hold the array together. Each one grows from, and is anchored by, a <span class="term">basal body</span> just below the membrane, which has the same structure as a centriole.</p>
<div class="compare">
  <div><h4>Flagella (singular flagellum)</h4><ul><li><strong>Long and whiplike</strong>; usually one or a few per cell.</li><li>Move in an undulating, propeller-like wave.</li><li>Function: <strong>propel a cell through fluid</strong>. Example: a human sperm cell.</li></ul></div>
  <div><h4>Cilia (singular cilium)</h4><ul><li><strong>Short and hairlike</strong>; many per cell.</li><li>Beat back and forth in coordinated waves.</li><li>Function: <strong>move a cell through fluid</strong> (a paramecium), or <strong>move fluid past a cell that stays put</strong>. Thousands of ciliated cells lining your airways sweep mucus and trapped particles away from your lungs.</li></ul></div>
</div>
<p>Some cells move a different way. <span class="term">Pseudopods</span> ("false feet") are temporary, irregular lobes that bulge out of the cell. Microfilaments push the lobes forward, so the cell creeps along and can wrap around and engulf a target. Amoebas hunt this way, and so do your white blood cells.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p><strong>Centrioles</strong> were not on the slides. Each is made of <strong>nine sets of triplet microtubules</strong> and has <strong>no membrane</strong>. A pair of them sits in the centrosome of animal cells. They help organize microtubule assembly and are involved in animal cell division. In class, pseudopods were also mentioned as a third way cells move.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Cilia</strong> means "eyelashes" in Latin: many short hairs. A <strong>flagellum</strong> is a "whip": one long tail.</p></div>

<h3 data-tier="likely">Outside the cell: extracellular matrix and cell junctions</h3>
<p>Most cells of multicellular organisms are surrounded and organized by an <span class="term">extracellular matrix (ECM)</span>: a non-living, complex mixture of fibrous proteins (such as collagen) and polysaccharides that the cells secrete around themselves. The ECM <strong>supports and anchors cells</strong>, <strong>separates tissues</strong> and helps with cell signalling. It is the basis of tissue organization. A plant's primary cell wall is a type of ECM (mostly cellulose), and fungal ECM is mostly chitin. <strong>Bone is mostly ECM</strong>: collagen fibres hardened by mineral deposits. Proteins in the plasma membrane (integrins) link the ECM outside to the cytoskeleton inside, which is the "anchoring" function you will meet in lesson 1.09.</p>
<p>Cells that touch can still communicate through <span class="term">cell junctions</span>: structures that connect a cell to other cells and to its surroundings. Ions, small molecules and signals pass through some junctions; others help cells recognize and stick to each other and to the ECM.</p>
<ul data-tier="extra">
  <li><strong>Plasmodesmata</strong> (plants): channels through the cell walls that join the cytoplasm of neighbouring cells.</li>
  <li><strong>Tight junctions</strong> (animals): membranes of neighbouring cells pressed together to make a seal, so fluid cannot leak between cells (for example, in the intestinal lining).</li>
  <li><strong>Desmosomes</strong> (animals): rivet-like anchors that fasten cells together into strong sheets, such as skin.</li>
  <li><strong>Gap junctions</strong> (animals): protein channels between cells, like plasmodesmata, that let ions and small molecules pass directly; they let heart muscle cells contract in sync.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Neither the ECM nor cell junctions were on the slides, but both were covered from the reading. ECM: a complex mix of fibrous proteins and polysaccharides that surrounds cells, supports and anchors them, separates tissues, and is the basis of tissue organization ("bone is mostly ECM"). Cell junctions: found between cells; they connect cells, transfer ions, molecules and signals, and help cells recognize and stick to each other.</p></div>

<h3 data-tier="likely">Organelle abundance in specialized cells</h3>
<p>Cells in a multicellular organism specialize, and a cell's organelles match its job. A cell that secretes protein is packed with rough ER and Golgi; a cell that does a lot of work is packed with mitochondria. The class worksheet "Organelle Abundance and Distribution" used these answers:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Organelle</th><th>Main function</th><th>High concentration in</th><th>Low concentration in</th></tr></thead><tbody>
<tr><td>Mitochondria</td><td>Generate cellular energy (ATP) via cellular respiration</td><td>Muscle cells, neurons</td><td>Fat cells, red blood cells</td></tr>
<tr><td>Rough ER</td><td>Synthesizes, folds and processes proteins destined for secretion, insertion into membranes or delivery within the cell</td><td>Pancreatic cells, plasma B cells (secrete antibodies)</td><td>Muscle cells, fat cells</td></tr>
<tr><td>Smooth ER</td><td>Synthesizes lipids (phospholipids and steroids); detoxifies metabolic waste</td><td>Liver cells, adrenal gland cells</td><td>Red blood cells, neurons</td></tr>
<tr><td>Lysosomes</td><td>Break down and digest waste and unwanted materials</td><td>White blood cells, liver cells</td><td>Muscle cells, neurons</td></tr>
<tr><td>Golgi apparatus</td><td>Processes, sorts and directs synthesized molecules</td><td>Pancreatic cells, salivary gland cells, adrenal gland cells</td><td>Fat cells, red blood cells</td></tr>
</tbody></table></div>
<p>Notice the reasoning: muscle contracts and neurons pump ions constantly, so both need ATP. Pancreatic cells and plasma B cells export proteins (enzymes and antibodies), so they need rough ER and Golgi. Liver cells detoxify and adrenal cells make steroid hormones (lipids), so they need smooth ER. White blood cells digest what they engulf, so they need lysosomes. Mature red blood cells have almost no organelles at all; they are mostly bags of hemoglobin.</p>
<details class="check"><summary>Worksheet question 1: A mutation causes cells to have very few mitochondria. Which organs would be most affected, and why?</summary><div class="ans"><p>The organs with the highest ATP demand: the <strong>heart</strong> (needs ATP to pump continuously), the <strong>brain</strong> (needs constant ATP for signalling) and the <strong>skeletal muscles</strong> (need ATP for contraction). Too few mitochondria means an energy crisis in high-demand tissues.</p></div></details>
<details class="check"><summary>Worksheet question 2: Nerve cells move neurotransmitters (proteins) along their long axons and must insulate the axon. Which organelles must be especially active?</summary><div class="ans"><p><strong>Mitochondria</strong> (ATP for the active transport of ions), <strong>rough ER and Golgi</strong> (to make and process the neurotransmitter proteins), and <strong>vesicles</strong> (to transport the neurotransmitters).</p></div></details>
<details class="check"><summary>Worksheet question 3: Cells in the stomach lining secrete large amounts of digestive enzymes. Which organelles must be highly active, and how do they work together?</summary><div class="ans"><p><strong>Rough ER</strong> makes the enzymes, the <strong>Golgi</strong> modifies and packages them, and <strong>vesicles</strong> carry them to the plasma membrane and release them into the stomach by exocytosis: rough ER → Golgi → vesicles → out of the cell.</p></div></details>

<h3 data-tier="essential">Organelle summary table</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>Organelle</th><th>Structure</th><th>Function</th><th>Extra info</th></tr></thead><tbody>
<tr><td>Cell membrane</td><td>Phospholipid bilayer with proteins, cholesterol, carbohydrates</td><td>Barrier; controls what enters and leaves</td><td>Selectively permeable; all cells</td></tr>
<tr><td>Cell wall</td><td>Cellulose microfibrils in pectin; primary and secondary wall</td><td>Protects, supports, gives shape</td><td>Plants, fungi (chitin), many protists; porous; plasmodesmata</td></tr>
<tr><td>Nucleus</td><td>Large, round; double membrane with pores</td><td>Holds and protects DNA; controls access to it</td><td>Contains nucleoplasm, chromatin, nucleolus</td></tr>
<tr><td>Nuclear envelope</td><td>Two lipid bilayers with nuclear pores</td><td>Controls what enters and leaves the nucleus</td><td>Outer membrane continuous with ER</td></tr>
<tr><td>Nucleolus</td><td>Dense, irregular region; no membrane</td><td>Assembles ribosome subunits from rRNA and protein</td><td>Prominent in protein-making cells</td></tr>
<tr><td>Chromatin</td><td>DNA wound around histone proteins</td><td>Packages DNA; condenses into chromosomes</td><td>Total DNA plus proteins in nucleus</td></tr>
<tr><td>Cytosol</td><td>Semi-fluid, water-based</td><td>Suspends organelles; site of many reactions</td><td>Cytoplasm = cytosol + organelles</td></tr>
<tr><td>Ribosome</td><td>Large and small subunits of rRNA and protein; no membrane</td><td>Protein synthesis</td><td>Free (cytosol) or bound (ER); made in nucleolus</td></tr>
<tr><td>Rough ER</td><td>Flattened sacs studded with ribosomes</td><td>Makes and folds proteins for membranes and export</td><td>Continuous with nuclear envelope</td></tr>
<tr><td>Smooth ER</td><td>Tubes with no ribosomes</td><td>Makes lipids and steroids; detoxifies drugs and poisons</td><td>Abundant in liver and adrenal cells</td></tr>
<tr><td>Golgi apparatus</td><td>Stack of flattened sacs; cis and trans faces</td><td>Modifies (adds sugars, phosphates, cleaves), sorts, ships</td><td>"Post office"; makes lysosomes</td></tr>
<tr><td>Vesicle</td><td>Small sac, single membrane</td><td>Transports, stores or digests substances</td><td>Buds off ER, Golgi, plasma membrane</td></tr>
<tr><td>Lysosome</td><td>Vesicle of digestive enzymes</td><td>Intracellular digestion and recycling</td><td>pH about 5; from Golgi; Tay-Sachs</td></tr>
<tr><td>Peroxisome</td><td>Vesicle with catalase and other enzymes</td><td>Breaks down fatty acids, H<sub>2</sub>O<sub>2</sub> and toxins</td><td>H<sub>2</sub>O<sub>2</sub> → water + oxygen</td></tr>
<tr><td>Vacuole</td><td>Liquid-filled sac (plants: large central vacuole, tonoplast)</td><td>Stores materials and wastes; water balance</td><td>Plant: 50 to 90% of cell; keeps cell firm</td></tr>
<tr><td>Mitochondrion</td><td>Double membrane; cristae; matrix</td><td>Cellular respiration: makes ATP</td><td>Own DNA; endosymbiosis</td></tr>
<tr><td>Chloroplast</td><td>Double membrane; stroma; thylakoids in grana</td><td>Photosynthesis: light energy to sugar</td><td>A plastid; own DNA; plants and algae</td></tr>
<tr><td>Microtubule</td><td>Hollow tube of tubulin</td><td>Shape, tracks, chromosome movement</td><td>Builds cilia, flagella, centrioles</td></tr>
<tr><td>Microfilament</td><td>Solid fibre of actin</td><td>Changes cell shape; muscle contraction</td><td>Just under plasma membrane</td></tr>
<tr><td>Cilia / flagella</td><td>Microtubule arrays (9 + 2) on a basal body</td><td>Move the cell or move fluid past it</td><td>Cilia short and many; flagella long and few</td></tr>
<tr><td>Centriole</td><td>Nine triplets of microtubules; no membrane</td><td>Organizes microtubules; cell division</td><td>Animal cells only</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
  <li>Organelles divide a eukaryotic cell into compartments, so incompatible jobs can run side by side and harmful substances stay isolated. The cytosol is the fluid; the cytoplasm is the fluid plus the organelles.</li>
  <li>Plant cells only: cell wall, chloroplasts, large central vacuole, plasmodesmata. Animal cells only: lysosomes, centrioles (and flagella, except in a few plant sperm).</li>
  <li>The nucleus protects the DNA (chromatin) behind a double, porous envelope; the nucleolus builds ribosome subunits; ribosomes (no membrane) make proteins.</li>
  <li>Endomembrane system: rough ER makes and folds proteins, smooth ER makes lipids and detoxifies, the Golgi modifies, sorts and ships, vesicles carry products, lysosomes (pH about 5) digest, vacuoles store and keep plant cells firm.</li>
  <li>Mitochondria (cellular respiration, ATP) and chloroplasts (photosynthesis) both have double membranes and their own DNA, evidence for endosymbiosis.</li>
  <li>The cytoskeleton (microtubules, microfilaments, intermediate filaments) gives shape and movement; cilia and flagella are microtubule-based; centrioles organize microtubules.</li>
  <li>Specialized cells have more of the organelles their job needs: mitochondria in muscle, rough ER and Golgi in secreting cells, smooth ER in liver and adrenal cells, lysosomes in white blood cells.</li>
</ul>
`
});

/* ===================================================================
   1.09 CELL MEMBRANE
   =================================================================== */
window.LESSONS.push({
  id: "1.09",
  title: "Cell Membrane",
  stage: "c4",
  where: "Plasma membrane",
  summary: "The cell membrane is a phospholipid bilayer studded with proteins, cholesterol and carbohydrate chains. You need its functions, why phospholipids form a bilayer, what \"fluid\" and \"mosaic\" mean, the jobs of integral and peripheral proteins, the roles of glycoproteins and glycolipids, and how fatty acid tails, temperature and cholesterol control membrane fluidity.",
  objectives: [
    "List and explain the functions of the cell membrane: barrier, compartmentalization, selective permeability and transport, cell-cell recognition, signal transduction, enzymatic activity, intercellular joining, and anchoring.",
    "Describe a phospholipid (hydrophilic head, hydrophobic tails) and explain why phospholipids form a bilayer on their own in water.",
    "Explain what each word of the fluid mosaic model means and why the membrane needs to be fluid.",
    "Distinguish integral from peripheral proteins and describe six jobs of membrane proteins.",
    "Describe the glycocalyx, glycoproteins and glycolipids and their roles in recognition, communication and anchoring.",
    "Explain how unsaturated and saturated fatty acid tails, temperature and cholesterol change membrane fluidity.",
    "Predict whether a molecule can cross the bilayer on its own from its size, polarity and charge."
  ],
  html: `
<h3 data-tier="essential">What the cell membrane is</h3>
<p>Every cell is wrapped in a <span class="term">cell membrane</span> (also called the <span class="term">plasma membrane</span>). It is extremely thin, about 8 nm, far too thin to see with a light microscope, yet it decides what gets in and out of the cell and how the cell interacts with everything around it. The membranes around organelles (the nuclear envelope, ER, Golgi, lysosomes, mitochondria) are built on the same plan.</p>
<p>The introductory slide shows the whole picture at once, the <span class="term">fluid mosaic model</span>. The base of the membrane is a <strong>phospholipid bilayer</strong>. Scattered through it are <strong>proteins</strong> (integral and peripheral), <strong>cholesterol</strong>, and <strong>carbohydrate chains</strong> attached to proteins (glycoproteins) or lipids (glycolipids). The rest of this lesson takes each part in turn and asks what it is for.</p>
<figure class="diagram">
<svg viewBox="0 0 640 352" role="img" aria-labelledby="b109-t1">
<title id="b109-t1">The fluid mosaic model. A phospholipid bilayer, with hydrophilic heads facing the fluid outside and inside the cell and hydrophobic tails in the middle, holds a glycoprotein with a carbohydrate chain on the outside, a channel protein with a pore that molecules pass through, cholesterol molecules between the phospholipids, an integral protein attached to a cytoskeleton filament inside the cell, a peripheral protein on the inner surface, and a glycolipid with a carbohydrate chain.</title>
<defs>
<marker id="b109-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--teal)"/></marker>
</defs>
<text x="20" y="22" font-family="inherit" font-size="12" font-style="italic" style="fill:var(--ink-2)">Outside the cell (extracellular fluid)</text>
<text x="20" y="346" font-family="inherit" font-size="12" font-style="italic" style="fill:var(--ink-2)">Inside the cell (cytosol)</text>
<path d="M26,147V180M32,147V180M26,188V221M32,188V221M44,147V180M50,147V180M44,188V221M50,188V221M62,147V180M68,147V180M62,188V221M68,188V221M80,147V180M86,147V180M80,188V221M86,188V221M98,147V180M104,147V180M98,188V221M104,188V221M116,147V180M122,147V180M116,188V221M122,188V221M134,147V180M140,147V180M134,188V221M140,188V221M152,147V180M158,147V180M152,188V221M158,188V221M170,147V180M176,147V180M170,188V221M176,188V221M188,147V180M194,147V180M188,188V221M194,188V221M206,147V180M212,147V180M206,188V221M212,188V221M224,147V180M230,147V180M224,188V221M230,188V221M242,147V180M248,147V180M242,188V221M248,188V221M260,147V180M266,147V180M260,188V221M266,188V221M278,147V180M284,147V180M278,188V221M284,188V221M296,147V180M302,147V180M296,188V221M302,188V221M314,147V180M320,147V180M314,188V221M320,188V221M332,147V180M338,147V180M332,188V221M338,188V221M350,147V180M356,147V180M350,188V221M356,188V221M368,147V180M374,147V180M368,188V221M374,188V221M386,147V180M392,147V180M386,188V221M392,188V221M404,147V180M410,147V180M404,188V221M410,188V221M422,147V180M428,147V180M422,188V221M428,188V221M440,147V180M446,147V180M440,188V221M446,188V221M458,147V180M464,147V180M458,188V221M464,188V221M476,147V180M482,147V180M476,188V221M482,188V221M494,147V180M500,147V180M494,188V221M500,188V221M512,147V180M518,147V180M512,188V221M518,188V221M530,147V180M536,147V180M530,188V221M536,188V221M548,147V180M554,147V180M548,188V221M554,188V221M566,147V180M572,147V180M566,188V221M572,188V221M584,147V180M590,147V180M584,188V221M590,188V221M602,147V180M608,147V180M602,188V221M608,188V221M620,147V180M626,147V180M620,188V221M626,188V221" style="fill:none;stroke:var(--ink-2)" stroke-width="1.5"/>
<g style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="1.2"><circle cx="29" cy="140" r="7.5"/><circle cx="29" cy="228" r="7.5"/><circle cx="47" cy="140" r="7.5"/><circle cx="47" cy="228" r="7.5"/><circle cx="65" cy="140" r="7.5"/><circle cx="65" cy="228" r="7.5"/><circle cx="83" cy="140" r="7.5"/><circle cx="83" cy="228" r="7.5"/><circle cx="101" cy="140" r="7.5"/><circle cx="101" cy="228" r="7.5"/><circle cx="119" cy="140" r="7.5"/><circle cx="119" cy="228" r="7.5"/><circle cx="137" cy="140" r="7.5"/><circle cx="137" cy="228" r="7.5"/><circle cx="155" cy="140" r="7.5"/><circle cx="155" cy="228" r="7.5"/><circle cx="173" cy="140" r="7.5"/><circle cx="173" cy="228" r="7.5"/><circle cx="191" cy="140" r="7.5"/><circle cx="191" cy="228" r="7.5"/><circle cx="209" cy="140" r="7.5"/><circle cx="209" cy="228" r="7.5"/><circle cx="227" cy="140" r="7.5"/><circle cx="227" cy="228" r="7.5"/><circle cx="245" cy="140" r="7.5"/><circle cx="245" cy="228" r="7.5"/><circle cx="263" cy="140" r="7.5"/><circle cx="263" cy="228" r="7.5"/><circle cx="281" cy="140" r="7.5"/><circle cx="281" cy="228" r="7.5"/><circle cx="299" cy="140" r="7.5"/><circle cx="299" cy="228" r="7.5"/><circle cx="317" cy="140" r="7.5"/><circle cx="317" cy="228" r="7.5"/><circle cx="335" cy="140" r="7.5"/><circle cx="335" cy="228" r="7.5"/><circle cx="353" cy="140" r="7.5"/><circle cx="353" cy="228" r="7.5"/><circle cx="371" cy="140" r="7.5"/><circle cx="371" cy="228" r="7.5"/><circle cx="389" cy="140" r="7.5"/><circle cx="389" cy="228" r="7.5"/><circle cx="407" cy="140" r="7.5"/><circle cx="407" cy="228" r="7.5"/><circle cx="425" cy="140" r="7.5"/><circle cx="425" cy="228" r="7.5"/><circle cx="443" cy="140" r="7.5"/><circle cx="443" cy="228" r="7.5"/><circle cx="461" cy="140" r="7.5"/><circle cx="461" cy="228" r="7.5"/><circle cx="479" cy="140" r="7.5"/><circle cx="479" cy="228" r="7.5"/><circle cx="497" cy="140" r="7.5"/><circle cx="497" cy="228" r="7.5"/><circle cx="515" cy="140" r="7.5"/><circle cx="515" cy="228" r="7.5"/><circle cx="533" cy="140" r="7.5"/><circle cx="533" cy="228" r="7.5"/><circle cx="551" cy="140" r="7.5"/><circle cx="551" cy="228" r="7.5"/><circle cx="569" cy="140" r="7.5"/><circle cx="569" cy="228" r="7.5"/><circle cx="587" cy="140" r="7.5"/><circle cx="587" cy="228" r="7.5"/><circle cx="605" cy="140" r="7.5"/><circle cx="605" cy="228" r="7.5"/><circle cx="623" cy="140" r="7.5"/><circle cx="623" cy="228" r="7.5"/></g>
<g style="fill:var(--amber)"><rect x="142.5" y="150" width="7" height="26" rx="3"/><rect x="286.5" y="150" width="7" height="26" rx="3"/><rect x="520.5" y="150" width="7" height="26" rx="3"/><rect x="178.5" y="192" width="7" height="26" rx="3"/><rect x="394.5" y="192" width="7" height="26" rx="3"/></g>
<ellipse cx="110" cy="184" rx="22" ry="62" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<g style="fill:var(--good)"><circle cx="110" cy="113" r="5"/><circle cx="110" cy="102" r="5"/><circle cx="103" cy="92" r="5"/><circle cx="117" cy="92" r="5"/><circle cx="97" cy="82" r="5"/><circle cx="123" cy="82" r="5"/><circle cx="551" cy="126" r="5"/><circle cx="551" cy="115" r="5"/><circle cx="544" cy="105" r="5"/><circle cx="558" cy="105" r="5"/></g>
<rect x="222" y="120" width="16" height="128" style="fill:var(--surface)"/>
<rect x="198" y="120" width="24" height="128" rx="10" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<rect x="238" y="120" width="24" height="128" rx="10" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<line x1="230" y1="104" x2="230" y2="262" style="stroke:var(--teal)" stroke-width="1.5" marker-end="url(#b109-ar)"/>
<g style="fill:var(--teal)"><circle cx="230" cy="96" r="4"/><circle cx="230" cy="184" r="4"/><circle cx="230" cy="276" r="4"/></g>
<ellipse cx="355" cy="252" rx="26" ry="13" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<ellipse cx="460" cy="184" rx="20" ry="60" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<path d="M390,302 C430,290 480,306 540,294" style="fill:none;stroke:var(--teal)" stroke-width="4"/>
<line x1="460" y1="244" x2="460" y2="298" style="stroke:var(--teal)" stroke-width="2"/>
<g style="stroke:var(--ink-2)" stroke-width="1">
<line x1="100" y1="56" x2="98" y2="77"/><line x1="225" y1="56" x2="210" y2="119"/><line x1="325" y1="56" x2="291" y2="149"/><line x1="452" y1="56" x2="458" y2="123"/><line x1="560" y1="56" x2="556" y2="100"/>
<line x1="80" y1="312" x2="65" y2="236"/><line x1="335" y1="312" x2="348" y2="266"/><line x1="530" y1="312" x2="520" y2="298"/>
</g>
<text x="100" y="50" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Glycoprotein</text>
<text x="230" y="50" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Channel protein</text>
<text x="330" y="50" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--amber)">Cholesterol</text>
<text x="450" y="50" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Integral protein</text>
<text x="560" y="50" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Glycolipid</text>
<text x="90" y="324" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--blue)">Phospholipid bilayer</text>
<text x="330" y="324" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Peripheral protein</text>
<text x="530" y="324" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--teal)">Cytoskeleton filament</text>
</svg>
<figcaption>The fluid mosaic model. Proteins are magenta, carbohydrate chains green, cholesterol amber. The glycoprotein and channel protein are also integral proteins: they span the whole bilayer. Carbohydrate chains are only ever on the outside surface.</figcaption>
</figure>

<h3 data-tier="essential">Functions of the cell membrane</h3>
<p>The slides list eight functions. For each one, know what it means and which part of the membrane does it.</p>
<ol>
  <li><strong>Physical barrier.</strong> The bilayer physically separates the cell's contents from its surroundings and keeps them from leaking away.</li>
  <li><strong>Compartmentalization.</strong> It separates the inside of the cell from the outside, so the cell can keep its internal conditions (pH, ion concentrations, water content) different from the environment. Internal membranes do the same for each organelle.</li>
  <li><strong>Selectively permeable.</strong> It lets some substances cross and blocks others, based on their size and solubility and on which protein channels and carriers are present.</li>
  <li><strong>Allows transport in and out of the cell.</strong> Nutrients and oxygen must get in; wastes and products must get out. Proteins in the membrane open and close channels and carry specific materials across (lesson 1.10).</li>
  <li><strong>Cell-cell recognition.</strong> Carbohydrate chains on the surface act like name tags, so cells can identify each other. This is how your immune system tells "self" from "foreign": in T-cell activation, a helper T cell recognizes a piece of a virus displayed on another cell's surface, and a killer T cell recognizes and destroys an infected cell.</li>
  <li><strong>Signal transduction.</strong> A <span class="term">receptor protein</span> on the outside binds a signal molecule (such as a hormone) and passes the message inward. The slide shows three stages: <strong>reception</strong> (the signal binds the receptor), <strong>transduction</strong> (the receptor changes shape and triggers a chain of reactions inside the cell) and <strong>response</strong> (the cell's activity changes). The signal itself never enters.</li>
  <li><strong>Enzymatic activity.</strong> Some membrane proteins are enzymes with their active site facing the inside or outside. Several enzymes can sit side by side in the membrane and carry out the steps of a pathway in order, like an assembly line.</li>
  <li><strong>Intercellular joining (helps make tissues).</strong> Membrane proteins of neighbouring cells hook together to form junctions, such as tight junctions that seal cells into a sheet.</li>
  <li><strong>Anchoring and structural support.</strong> Membrane proteins (such as integrins) attach to the cytoskeleton on the inside and to the fibres of the extracellular matrix (collagen and fibronectin) on the outside. This holds the cell's shape and anchors it in place in a tissue.</li>
</ol>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Use the term <strong>selectively permeable</strong>, not "semi-permeable." It is more accurate: the membrane does not just let "half" of things through; it chooses which specific substances cross, using proteins that can open and close channels for particular materials.</p></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The signal transduction example was <strong>adrenaline</strong> (epinephrine). It cannot pass through the membrane, so it binds to a receptor on the outside of the cell, and that sets off reactions inside. The hormone is not absorbed; its signal is <em>transduced</em> (passed along) to the inside.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Adrenaline cannot cross the membrane because it is <strong>water-soluble (polar)</strong>, and polar molecules are blocked by the hydrophobic core of the bilayer. It is not because it is "not water-soluble." Fat-soluble hormones, such as the steroid hormones, do the opposite: they slip straight through the bilayer and bind receptors inside the cell.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>"Selectively permeable" and "allows transport" are related but separate items on the slide. If you are asked for the functions of the membrane, give the function <strong>and</strong> the structure that performs it, for example: "cell-cell recognition: glycoproteins act as identity markers."</p></div>

<h3 data-tier="essential">The phospholipid bilayer</h3>
<p>You met phospholipids in the lipids lesson. A <span class="term">phospholipid</span> has two very different ends:</p>
<ul>
  <li>a <strong>hydrophilic head</strong>: a phosphate group (often with a small extra polar or charged group) attached to glycerol. It is polar, so it is attracted to water.</li>
  <li>two <strong>hydrophobic tails</strong>: fatty acid chains. They are nonpolar hydrocarbons, so they avoid water. One tail is often unsaturated and has a kink.</li>
</ul>
<p>A molecule with a water-loving end and a water-fearing end is called <span class="term">amphipathic</span>. That dual nature is the whole reason a membrane exists.</p>
<figure class="diagram">
<svg viewBox="0 0 640 285" role="img" aria-labelledby="b109-t2">
<title id="b109-t2">Left: one phospholipid with a round hydrophilic head made of phosphate and glycerol and two hydrophobic fatty acid tails, one straight and saturated, one kinked at a carbon-carbon double bond and unsaturated. Right: in water, phospholipids form a bilayer, with heads facing the water outside and inside the cell and the tails hidden in the middle.</title>
<text x="125" y="22" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">One phospholipid</text>
<text x="450" y="22" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">In water: a bilayer forms</text>
<line x1="262" y1="34" x2="262" y2="270" style="stroke:var(--line)" stroke-width="1"/>
<circle cx="100" cy="70" r="24" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="2"/>
<text x="100" y="74" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--blue)">head</text>
<path d="M92,94 l-5,9 l5,9 l-5,9 l5,9 l-5,9 l5,9 l-5,9 l5,9 l-5,9 l5,9 l-5,9 l5,9" style="fill:none;stroke:var(--ink-2)" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M108,94 l5,9 l-5,9 l5,9 l-5,9 l5,9 l-5,9 l14,10 l0,10 l10,8 l0,10 l10,8 l0,10" style="fill:none;stroke:var(--ink-2)" stroke-width="2.5" stroke-linejoin="round"/>
<text x="140" y="62" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--blue)">Hydrophilic head</text>
<text x="140" y="78" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">phosphate + glycerol</text>
<text x="140" y="93" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">polar: faces water</text>
<text x="126" y="140" font-family="inherit" font-size="11.5" style="fill:var(--red)">kink at C=C</text>
<text x="150" y="182" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Hydrophobic tails</text>
<text x="150" y="198" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">two fatty acids,</text>
<text x="150" y="213" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">nonpolar: avoid water</text>
<text x="86" y="230" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">saturated</text>
<text x="86" y="244" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">(straight)</text>
<text x="150" y="246" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">unsaturated (kinked)</text>
<text x="410" y="56" text-anchor="middle" font-family="inherit" font-size="12" font-style="italic" style="fill:var(--blue)">water outside the cell</text>
<path d="M297,97V132M303,97V132M297,138V173M303,138V173M317,97V132M323,97V132M317,138V173M323,138V173M337,97V132M343,97V132M337,138V173M343,138V173M357,97V132M363,97V132M357,138V173M363,138V173M377,97V132M383,97V132M377,138V173M383,138V173M397,97V132M403,97V132M397,138V173M403,138V173M417,97V132M423,97V132M417,138V173M423,138V173M437,97V132M443,97V132M437,138V173M443,138V173M457,97V132M463,97V132M457,138V173M463,138V173M477,97V132M483,97V132M477,138V173M483,138V173M497,97V132M503,97V132M497,138V173M503,138V173M517,97V132M523,97V132M517,138V173M523,138V173" style="fill:none;stroke:var(--ink-2)" stroke-width="1.5"/>
<g style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="1.2"><circle cx="300" cy="89" r="8"/><circle cx="300" cy="181" r="8"/><circle cx="320" cy="89" r="8"/><circle cx="320" cy="181" r="8"/><circle cx="340" cy="89" r="8"/><circle cx="340" cy="181" r="8"/><circle cx="360" cy="89" r="8"/><circle cx="360" cy="181" r="8"/><circle cx="380" cy="89" r="8"/><circle cx="380" cy="181" r="8"/><circle cx="400" cy="89" r="8"/><circle cx="400" cy="181" r="8"/><circle cx="420" cy="89" r="8"/><circle cx="420" cy="181" r="8"/><circle cx="440" cy="89" r="8"/><circle cx="440" cy="181" r="8"/><circle cx="460" cy="89" r="8"/><circle cx="460" cy="181" r="8"/><circle cx="480" cy="89" r="8"/><circle cx="480" cy="181" r="8"/><circle cx="500" cy="89" r="8"/><circle cx="500" cy="181" r="8"/><circle cx="520" cy="89" r="8"/><circle cx="520" cy="181" r="8"/></g>
<text x="410" y="216" text-anchor="middle" font-family="inherit" font-size="12" font-style="italic" style="fill:var(--blue)">water inside the cell (cytosol)</text>
<text x="545" y="88" font-family="inherit" font-size="11.5" style="fill:var(--blue)">Hydrophilic</text>
<text x="545" y="102" font-family="inherit" font-size="11.5" style="fill:var(--blue)">heads</text>
<text x="545" y="132" font-family="inherit" font-size="11.5" style="fill:var(--ink)">Hydrophobic</text>
<text x="545" y="146" font-family="inherit" font-size="11.5" style="fill:var(--ink)">tails</text>
<text x="545" y="178" font-family="inherit" font-size="11.5" style="fill:var(--blue)">Hydrophilic</text>
<text x="545" y="192" font-family="inherit" font-size="11.5" style="fill:var(--blue)">heads</text>
<text x="410" y="252" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Tails hide from water in the middle;</text>
<text x="410" y="268" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">heads face water on both sides.</text>
</svg>
<figcaption>Phospholipids are amphipathic: a hydrophilic head and two hydrophobic tails. In water they arrange themselves into a double layer with the tails tucked inside.</figcaption>
</figure>
<p><strong>Why a bilayer forms on its own.</strong> Cells are surrounded by water on both sides: the extracellular fluid outside and the cytosol inside. If you put phospholipids in water, the hydrophobic tails cannot form hydrogen bonds with water, so the most stable arrangement is the one that hides the tails from water completely. Two layers line up tail to tail, with all the heads facing the water on both sides. No enzyme or energy is needed; it is driven by the same attractions and repulsions you studied in the water lesson. To get rid of exposed edges, the sheet closes up into a sealed sphere, which is exactly the shape of a cell or a vesicle.</p>
<p>The bilayer is a <strong>continuous double layer</strong> around the whole cell, with no gaps. Its job as a barrier comes from its middle: the region of tails is <strong>hydrophobic</strong>, so it is <strong>impermeable to water-soluble molecules</strong> such as ions, sugars and amino acids. They are polar or charged, and they cannot dissolve in or pass through a nonpolar layer. Small nonpolar molecules, such as O<sub>2</sub> and CO<sub>2</sub>, slip straight through it.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Phospholipids <strong>spontaneously arrange into a sphere</strong>: you do not need to "build" a membrane; put phospholipids in water and it forms on its own.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The <strong>heads are hydrophilic</strong> and the <strong>tails are hydrophobic</strong>, never the other way round. It is the hydrophobic tails in the middle that make the membrane impermeable to water-soluble molecules. (A quick check: heads touch water on both sides of the membrane, so they must like water.)</p></div>
<details class="check"><summary>Why can O<sub>2</sub> diffuse straight through the bilayer, but glucose and Na<sup>+</sup> cannot?</summary><div class="ans"><p>O<sub>2</sub> is small and nonpolar, so it can dissolve in and pass through the hydrophobic tail region. Glucose is large and polar, and Na<sup>+</sup> is charged; both are attracted to water and repelled by the nonpolar core, so they need a membrane protein (a carrier or a channel) to cross.</p></div></details>

<h3 data-tier="essential">The fluid mosaic model</h3>
<p>The accepted description of membrane structure is the <span class="term">fluid mosaic model</span>. Each word describes something real.</p>
<div class="compare">
  <div><h4>Fluid</h4><ul><li>Phospholipids and proteins <strong>move laterally</strong> (sideways) within their own layer.</li><li>The components are <strong>not static</strong>: a phospholipid can swap places with its neighbours millions of times a second.</li><li>The bilayer behaves like a thin film of oil, not like a solid sheet.</li></ul></div>
  <div><h4>Mosaic</h4><ul><li>The membrane is <strong>composed of many different macromolecules</strong>: phospholipids, many kinds of proteins, cholesterol and carbohydrates.</li><li>Like the tiles of a mosaic picture, the pieces are scattered in a pattern across the surface.</li><li>Different cells, and different membranes in one cell, have different mixes.</li></ul></div>
</div>
<p>Why is the membrane fluid? The phospholipids are held together only by weak hydrophobic interactions between their tails, not by covalent bonds. Nothing locks them in place, so they slide past each other. Proteins drift through the lipids like icebergs in a sea. (Moving <em>across</em> from one layer to the other is rare, because the hydrophilic head would have to pass through the hydrophobic middle.)</p>
<p>Why does a cell need its membrane to be fluid?</p>
<ul>
  <li><strong>Flexibility and self-sealing.</strong> A fluid membrane bends instead of cracking, and small tears close up on their own, like a soap bubble.</li>
  <li><strong>Vesicles.</strong> Membrane can pinch off into vesicles and fuse back in (endocytosis and exocytosis, lesson 1.10). A rigid membrane could not do this.</li>
  <li><strong>Working proteins.</strong> Many membrane proteins must move, change shape or meet partner proteins to do their jobs.</li>
  <li><strong>Growth and movement.</strong> A cell can change shape, crawl and divide.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The phospholipid bilayer pretty much acts like a fluid, which gives it flexibility. That means the cell can take a bit of damage instead of instantly rupturing.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Fluid</strong> = things <strong>flow</strong> sideways. <strong>Mosaic</strong> = <strong>many</strong> different pieces. If you can explain both halves of the name, you have explained the model.</p></div>
<p data-tier="extra">Evidence for the model came from freeze-fracture electron microscopy (shown on one slide): a frozen membrane is split down the middle between its two layers, and the inner faces are covered in bumps, the proteins embedded in the bilayer. Other experiments fused a mouse cell with a human cell; within an hour the two species' membrane proteins had mixed evenly across the hybrid cell, showing that proteins move.</p>
<h3 data-tier="essential">Membrane proteins</h3>
<p>Proteins make up about half the mass of a typical membrane, and they do most of its jobs. The phospholipids form the barrier; the proteins decide what happens at it. The slides classify membrane proteins by <strong>where they sit</strong>:</p>
<div class="compare">
  <div><h4>Integral proteins</h4><ul><li><strong>Embedded in</strong> the bilayer; most span the whole membrane from the inside surface to the outside (transmembrane proteins).</li><li>Their middle section, the part buried among the tails, is made of amino acids with <strong>nonpolar (hydrophobic) R groups</strong>. The parts sticking out into the water on each side have <strong>polar</strong> R groups.</li><li>Hard to remove: you would have to break the membrane apart.</li><li>Examples: channel proteins, carrier proteins, pumps, most receptors.</li></ul></div>
  <div><h4>Peripheral proteins</h4><ul><li><strong>Not embedded</strong>: loosely attached to <strong>one surface</strong> only, either the outside or the inside.</li><li>They never enter the hydrophobic core where the fatty acid tails are.</li><li>Usually bound to the exposed part of an integral protein or to the phospholipid heads.</li><li>Examples: enzymes on the inner surface, proteins linking the membrane to the cytoskeleton.</li></ul></div>
</div>
<p>The R groups explain where a protein ends up (look back at the proteins lesson). Hydrophobic R groups are stable surrounded by fatty acid tails, so a stretch of them anchors a protein inside the bilayer. A protein with only polar R groups on its surface cannot enter the core, so it can only sit on the surface.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Integral proteins are drawn like <strong>big jelly beans</strong> that extend from the inside of the membrane to the outside. Peripheral proteins are only on the exterior or only on the interior, <strong>not spanning the middle section</strong> where the fatty acids are.</p></div>
<p>The slide (and its video) shows six main jobs of membrane proteins:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Job</th><th>What the protein does</th><th>Example</th></tr></thead><tbody>
<tr><td><strong>Selective transport channel</strong></td><td>Lets one specific substance cross the membrane, through a pore (channel) or by changing shape (carrier). Some use ATP to pump substances.</td><td>Aquaporins (water); glucose carriers; the sodium-potassium pump</td></tr>
<tr><td><strong>Enzyme</strong></td><td>Catalyzes a reaction right at the membrane surface; a team of enzymes can line up to run a pathway step by step.</td><td>Lactase on intestinal cells; ATP synthase in mitochondria</td></tr>
<tr><td><strong>Cell surface receptor</strong></td><td>Binds a signal molecule outside and changes shape, relaying the message inside (signal transduction).</td><td>Receptors for adrenaline and insulin</td></tr>
<tr><td><strong>Cell surface identity marker</strong></td><td>Glycoproteins act as ID tags that other cells, especially immune cells, recognize as "self."</td><td>Markers that let T cells spot infected cells</td></tr>
<tr><td><strong>Cell adhesion</strong></td><td>Proteins of neighbouring cells bind each other, joining cells into tissues.</td><td>Tight junctions sealing the intestinal lining</td></tr>
<tr><td><strong>Attachment to the cytoskeleton</strong></td><td>Anchors the membrane to cytoskeleton filaments inside (and to the extracellular matrix outside), holding the cell's shape.</td><td>Integrins linking actin filaments to ECM fibres</td></tr>
</tbody></table></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Peripheral" does not mean the protein floats loose in the cytosol or outside the cell. A peripheral protein is still part of the membrane: it is bound to one of its surfaces. The difference from an integral protein is only that it does not penetrate the hydrophobic core.</p></div>
<details class="check"><summary>Review question 4: Explain the roles of proteins in the phospholipid bilayer.</summary><div class="ans"><p><strong>Transport:</strong> channel proteins and carrier proteins move specific molecules across the membrane, either passively or actively. <strong>Enzymatic activity:</strong> some proteins are enzymes that catalyze reactions directly at the membrane surface. <strong>Signal transduction:</strong> receptor proteins have binding sites for hormones or neurotransmitters, "telling" the cell to perform a specific task. <strong>Cell-cell recognition:</strong> glycoproteins serve as ID tags so the immune system can tell "self" from "foreign" cells. <strong>Intercellular joining:</strong> proteins hook together to form junctions (such as gap junctions or tight junctions). <strong>Attachment:</strong> proteins help maintain cell shape by attaching to the cytoskeleton inside or the extracellular matrix outside.</p></div></details>

<h3 data-tier="essential">Carbohydrates: glycocalyx, glycoproteins and glycolipids</h3>
<p>The outside surface of the cell is covered in short sugar chains. Together they form the <span class="term">glycocalyx</span>, literally a "sugar coat." These carbohydrates are attached <strong>only to the cell's exterior</strong>, never the inside, because their job is to deal with the outside world: other cells, signals and the extracellular matrix. The chains are short and often branched; a chain of a few sugars is an <span class="term">oligosaccharide</span> ("oligo" means "few").</p>
<div class="compare">
  <div><h4>Glycoproteins</h4><ul><li><strong>Carbohydrate chains attached to membrane proteins.</strong></li><li>Functions: <strong>communication, transport and anchoring</strong>.</li><li>They act as recognition sites and receptors, and they anchor the cell to the extracellular matrix.</li></ul></div>
  <div><h4>Glycolipids</h4><ul><li><strong>Carbohydrate chains attached to phospholipids</strong> (lipids).</li><li>Functions: <strong>membrane stability</strong> and <strong>cell surface identification</strong>.</li><li>They help hold the membrane steady and mark what kind of cell this is.</li></ul></div>
</div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Glyco-</strong> means sugar. Glyco + <strong>protein</strong> = sugar on a protein. Glyco + <strong>lipid</strong> = sugar on a lipid. The second word tells you what the sugar is stuck to.</p></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The glycocalyx binds to the extracellular matrix, which is how cells stick together into tissues (important in bone). Oligosaccharides are short chains of roughly 3 to 10 sugars (two sugars would just be a disaccharide). On glycoproteins, the protein part often works as the receptor. Glycolipids anchor to the ECM and work like an ID check at the door: "are you 18?"</p></div>
<p data-tier="likely">Why use sugars as name tags? Sugars can link to each other at several different carbons and can branch, so even a short chain can come in an enormous number of distinct shapes. That variety lets every cell type carry its own recognizable pattern, the way a few letters can spell thousands of different words.</p>
<p data-tier="extra">Your ABO blood type is a glycocalyx difference. Red blood cells of type A and type B carry slightly different sugar chains on their surface glycolipids and glycoproteins; type O has neither extra sugar. If you receive blood with the "wrong" sugar tags, your immune system recognizes those cells as foreign and attacks them. The same recognition system causes the rejection of transplanted organs.</p>

<h3 data-tier="essential">Membrane fluidity</h3>
<p>A membrane must be fluid enough to bend, fuse and let its proteins move, but not so fluid that it falls apart or leaks. Two components on the slides control this: the <strong>fatty acid tails</strong> and <strong>cholesterol</strong>. Temperature matters too.</p>
<h4>Fatty acid tails</h4>
<ul>
  <li><strong>Unsaturated</strong> fatty acid tails <strong>increase</strong> fluidity. Each cis double bond puts a <strong>kink</strong> in the tail. Kinked tails cannot pack closely together, so the attractions between them are weaker and the phospholipids slide past each other easily.</li>
  <li><strong>Saturated</strong> fatty acid tails <strong>decrease</strong> fluidity. They are straight, so they pack tightly side by side with many attractions between them. The membrane becomes more <strong>viscous</strong> (thicker, stiffer).</li>
</ul>
<p>It is the same reason you met in the lipids lesson: olive oil (mostly unsaturated) is liquid at room temperature, while butter (mostly saturated) is solid.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p><strong>Unsaturated (cis)</strong> tails increase fluidity. <strong>Saturated</strong> tails, and also <strong>trans</strong> unsaturated tails, decrease fluidity. A trans double bond does not make a sharp kink, so a trans fat behaves almost like a straight, saturated one.</p></div>
<p><strong>Temperature.</strong> Heat makes molecules move faster, so a membrane becomes more fluid as it warms and less fluid as it cools. Too fluid, and the membrane leaks and cannot hold its proteins in place. Too cold, and it stiffens like butter in the fridge: proteins cannot move or change shape, so transport and enzymes stop working.</p>
<p data-tier="extra">Organisms adjust their membranes to their environment. Fish in icy water and plants that survive frost build their membranes with a higher proportion of unsaturated tails, which keeps them fluid at low temperatures.</p>
<figure class="diagram">
<svg viewBox="0 0 640 238" role="img" aria-labelledby="b109-t3">
<title id="b109-t3">Three panels. Unsaturated tails have kinks that keep phospholipids apart, so the membrane is more fluid. Saturated tails are straight and pack tightly, so the membrane is less fluid. Cholesterol molecules wedged between phospholipids act as a fluidity buffer: at high temperature they hold the phospholipids still, and at low temperature they stop them packing tightly and freezing.</title>
<text x="110" y="22" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Unsaturated tails</text>
<text x="320" y="22" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Saturated tails</text>
<text x="530" y="22" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">With cholesterol</text>
<line x1="215" y1="10" x2="215" y2="232" style="stroke:var(--line)" stroke-width="1"/>
<line x1="425" y1="10" x2="425" y2="232" style="stroke:var(--line)" stroke-width="1"/>
<path d="M36,61V128M44,61V92L56,128M71,61V128M79,61V92L91,128M106,61V128M114,61V92L126,128M141,61V128M149,61V92L161,128M176,61V128M184,61V92L196,128" style="fill:none;stroke:var(--ink-2)" stroke-width="2"/>
<path d="M232,61V128M240,61V128M253,61V128M261,61V128M274,61V128M282,61V128M295,61V128M303,61V128M316,61V128M324,61V128M337,61V128M345,61V128M358,61V128M366,61V128M379,61V128M387,61V128M400,61V128M408,61V128" style="fill:none;stroke:var(--ink-2)" stroke-width="2"/>
<path d="M446,61V128M454,61V128M481,61V128M489,61V128M516,61V128M524,61V128M551,61V128M559,61V128M586,61V128M594,61V128" style="fill:none;stroke:var(--ink-2)" stroke-width="2"/>
<g style="fill:var(--amber)"><rect x="463.5" y="64" width="8" height="34" rx="3"/><rect x="498.5" y="64" width="8" height="34" rx="3"/><rect x="533.5" y="64" width="8" height="34" rx="3"/><rect x="568.5" y="64" width="8" height="34" rx="3"/><circle cx="467.5" cy="59" r="3.5"/><circle cx="502.5" cy="59" r="3.5"/><circle cx="537.5" cy="59" r="3.5"/><circle cx="572.5" cy="59" r="3.5"/></g>
<g style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="1.5"><circle cx="40" cy="52" r="9"/><circle cx="75" cy="52" r="9"/><circle cx="110" cy="52" r="9"/><circle cx="145" cy="52" r="9"/><circle cx="180" cy="52" r="9"/><circle cx="236" cy="52" r="9"/><circle cx="257" cy="52" r="9"/><circle cx="278" cy="52" r="9"/><circle cx="299" cy="52" r="9"/><circle cx="320" cy="52" r="9"/><circle cx="341" cy="52" r="9"/><circle cx="362" cy="52" r="9"/><circle cx="383" cy="52" r="9"/><circle cx="404" cy="52" r="9"/><circle cx="450" cy="52" r="9"/><circle cx="485" cy="52" r="9"/><circle cx="520" cy="52" r="9"/><circle cx="555" cy="52" r="9"/><circle cx="590" cy="52" r="9"/></g>
<text x="110" y="154" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Kinks keep tails apart</text>
<text x="110" y="172" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--teal)">MORE fluid</text>
<text x="320" y="154" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Straight tails pack tightly</text>
<text x="320" y="172" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--red)">LESS fluid (viscous)</text>
<text x="530" y="154" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--amber)">Fluidity buffer</text>
<text x="530" y="172" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Hot: holds phospholipids still,</text>
<text x="530" y="188" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">so the membrane is less fluid</text>
<text x="530" y="208" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Cold: stops tight packing,</text>
<text x="530" y="224" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">so the membrane does not freeze</text>
</svg>
<figcaption>One layer of the membrane shown in each panel. Tail shape sets how tightly phospholipids pack; cholesterol (amber) evens out the effect of temperature.</figcaption>
</figure>
<h4>Cholesterol</h4>
<p><span class="term">Cholesterol</span> is a steroid (a lipid built from four fused carbon rings, with a small polar –OH group at one end). In animal cell membranes, cholesterol molecules wedge in between the phospholipids, with the –OH near the heads and the rigid rings alongside the upper part of the tails. It acts as a <strong>fluidity buffer</strong>: it resists change in either direction.</p>
<ul>
  <li><strong>High temperatures:</strong> cholesterol makes the membrane <strong>less fluid</strong> by staying bonded in place. Its rigid rings hold on to the neighbouring tails and restrain their movement, so the membrane does not become too runny.</li>
  <li><strong>Low temperatures:</strong> cholesterol <strong>prevents the membrane from freezing</strong> and maintains fluidity. It physically gets in the way, so the tails cannot pack tightly together and solidify.</li>
</ul>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Think of cholesterol as a <strong>speed bump</strong> and a <strong>spacer</strong>. When it is hot and everything is racing around, the speed bump slows the phospholipids down. When it is cold and they want to huddle together, the spacer keeps them apart.</p></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>In class the temperature-buffering role was linked to <strong>ectotherms</strong> (animals whose body temperature follows their surroundings), because their membranes face the biggest temperature swings; endotherms like us keep a constant body temperature by homeostasis. Be careful with this: cholesterol is found in the membranes of <strong>all animal cells</strong>, including yours. The buffering simply matters most when temperature changes a lot.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Do not write "cholesterol increases fluidity" or "cholesterol decreases fluidity" on its own. It does <strong>both</strong>, depending on temperature: it lowers fluidity when it is hot and keeps the membrane fluid when it is cold. Always name the temperature.</p></div>
<details class="check"><summary>Review question 5: Explain how cholesterol can increase or decrease membrane fluidity.</summary><div class="ans"><p>Cholesterol is a "fluidity buffer": it stops the membrane becoming too fluid in the heat or too rigid in the cold. <strong>At high temperatures</strong>, phospholipids move apart and the membrane gets too runny; cholesterol wedges between them like a speed bump and restrains their movement, <strong>decreasing</strong> fluidity. <strong>At low temperatures</strong>, phospholipids pack tightly and would freeze solid; cholesterol gets in the way of that packing, keeping space between the tails and <strong>increasing</strong> fluidity (preventing freezing).</p></div></details>
<details class="check"><summary>An Arctic fish and a tropical fish are compared. Which would you expect to have more unsaturated fatty acid tails in its membranes, and why?</summary><div class="ans"><p>The <strong>Arctic fish</strong>. Its cells are very cold, which tends to make membranes stiff. Unsaturated tails have kinks that stop them packing tightly, so they keep the membrane fluid at low temperature. The tropical fish can use more saturated tails, which stop its membranes becoming too fluid in warm water.</p></div></details>

<h3 data-tier="essential">Selectively permeable: what gets through</h3>
<p>The last slide sums up the membrane's most important property. Whether a substance can cross depends on <strong>the size and solubility of the molecule</strong>, and on whether the membrane has a <strong>specific protein channel or carrier</strong> for it.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Kind of molecule</th><th>Examples</th><th>Through the bilayer itself?</th><th>How it crosses</th></tr></thead><tbody>
<tr><td>Gases</td><td>O<sub>2</sub>, CO<sub>2</sub>, N<sub>2</sub></td><td>Yes, easily</td><td>Simple diffusion</td></tr>
<tr><td>Small hydrophobic (nonpolar, lipid-soluble)</td><td>Benzene, steroid hormones</td><td>Yes, easily</td><td>Simple diffusion</td></tr>
<tr><td>Small polar, uncharged</td><td>H<sub>2</sub>O, ethanol</td><td>Yes, but slowly</td><td>Through the bilayer; water mostly through aquaporins</td></tr>
<tr><td>Large polar</td><td>Glucose, sucrose</td><td>No</td><td>Carrier proteins</td></tr>
<tr><td>Ions and charged molecules</td><td>H<sup>+</sup>, Na<sup>+</sup>, K<sup>+</sup>, Ca<sup>2+</sup>, Cl<sup>–</sup>, amino acids</td><td>No</td><td>Channel or carrier proteins (and pumps)</td></tr>
</tbody></table></div>
<p>The rule behind the table is the hydrophobic core. <strong>Small and nonpolar</strong> molecules dissolve in it and pass straight through. <strong>Large, polar or charged</strong> molecules are attracted to water and repelled by the core, so they need a protein. Ions are blocked especially well, because each ion is surrounded by a shell of attracted water molecules that makes it effectively bigger and very hydrophilic.</p>
<p>The slide's figure previews lesson 1.10: (a) simple diffusion straight through the lipid bilayer; (b) facilitated diffusion through a nonspecific transporter; (c) facilitated diffusion through a specific transporter (glucose); (d) osmosis, water crossing through the bilayer and through an <strong>aquaporin</strong>.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Water is polar, yet some of it crosses the bilayer directly, because the molecule is tiny. Size and polarity both matter. Glucose is also polar but far too large to slip through, so it always needs a carrier.</p></div>
<details class="check"><summary>Rank these by how easily they cross a pure phospholipid bilayer: glucose, CO<sub>2</sub>, Na<sup>+</sup>, H<sub>2</sub>O.</summary><div class="ans"><p><strong>CO<sub>2</sub></strong> (small, nonpolar: fastest) &gt; <strong>H<sub>2</sub>O</strong> (small but polar: slowly) &gt; <strong>glucose</strong> (large and polar: essentially none) and <strong>Na<sup>+</sup></strong> (charged: essentially none). Glucose and Na<sup>+</sup> both need membrane proteins.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
  <li>Functions of the cell membrane: physical barrier, compartmentalization, selective permeability, transport, cell-cell recognition, signal transduction, enzymatic activity, intercellular joining, anchoring and support.</li>
  <li>Phospholipids have hydrophilic heads and hydrophobic tails; in water they form a continuous bilayer on their own. The hydrophobic core blocks water-soluble molecules.</li>
  <li>Fluid mosaic model: <strong>fluid</strong> because phospholipids and proteins move sideways; <strong>mosaic</strong> because it is made of many different macromolecules.</li>
  <li>Integral proteins span the bilayer; peripheral proteins sit on one surface. Protein jobs: transport, enzyme, receptor, identity marker, adhesion, attachment to the cytoskeleton.</li>
  <li>The glycocalyx is the sugar coat on the outside: glycoproteins (communication, transport, anchoring) and glycolipids (stability, identification).</li>
  <li>Unsaturated tails increase fluidity, saturated tails decrease it; cholesterol buffers fluidity, lowering it when hot and preventing freezing when cold.</li>
  <li>Small nonpolar molecules cross the bilayer directly; large, polar and charged ones need channel or carrier proteins.</li>
</ul>
`
});

/* ===================================================================
   1.10 CELLULAR TRANSPORT
   =================================================================== */
window.LESSONS.push({
  id: "1.10",
  title: "Cellular Transport",
  stage: "c1",
  where: "Across the plasma membrane",
  summary: "How substances cross the cell membrane. Passive transport (simple diffusion, facilitated diffusion through channel and carrier proteins, and osmosis) moves particles down their concentration gradient with no energy. Active transport uses ATP and carrier proteins to move particles against their gradient, and membrane-assisted transport moves large materials in by endocytosis and out by exocytosis. You also need to use hypotonic, isotonic and hypertonic to predict what happens to animal and plant cells.",
  objectives: [
    "Explain what a concentration gradient is and what moving down (along) or against it means.",
    "Distinguish passive from active transport by energy use and direction relative to the gradient.",
    "Define diffusion and dynamic equilibrium, and give examples of simple diffusion (small lipid-soluble molecules, O2, CO2).",
    "Compare channel proteins and carrier proteins in facilitated diffusion.",
    "Define osmosis and use isotonic, hypotonic and hypertonic to predict water movement and its effect on animal cells (lysis, crenation) and plant cells (turgid, flaccid, plasmolyzed).",
    "Describe active transport using the sodium-potassium pump as an example.",
    "Describe phagocytosis, pinocytosis and receptor-mediated endocytosis, and constitutive and regulated exocytosis."
  ],
  html: `
<h3 data-tier="essential">The selectively permeable membrane</h3>
<p>Lesson 1.09 ended with the key property of the cell membrane: it is <span class="term">selectively permeable</span>. A cell has to let oxygen and nutrients in, let carbon dioxide and wastes out, export products like hormones and enzymes, and keep the concentrations of ions inside very different from those outside. The membrane manages all of that traffic. This lesson is about <em>how</em> each kind of substance gets across.</p>
<p>The slide's figure shows the starting point. <strong>Gases</strong> (O<sub>2</sub>, CO<sub>2</sub>), <strong>hydrophobic molecules</strong> (such as benzene) and <strong>small polar molecules</strong> (H<sub>2</sub>O, ethanol) pass through the bilayer. <strong>Large polar molecules</strong> (glucose) and <strong>charged molecules</strong> (ions such as H<sup>+</sup>, Na<sup>+</sup>, Cl<sup>–</sup>, Ca<sup>2+</sup>, and amino acids) bounce off it and need help from proteins.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Fat-based (lipid-soluble) molecules get through the membrane because they are nonpolar, like the tails. Small polar molecules can also pass; water can "leak" through.</p></div>
<h4>Concentration gradients</h4>
<p>A <span class="term">concentration gradient</span> is a difference in concentration between two regions, for example between the outside and the inside of a cell. The slides write concentration with square brackets: [high] means "high concentration" and [water] means "concentration of water."</p>
<ul>
  <li>Moving <strong>down</strong> (or <strong>along</strong>, or <strong>with</strong>) the gradient means from high concentration to low. This happens on its own, like a ball rolling downhill.</li>
  <li>Moving <strong>against</strong> (or <strong>up</strong>) the gradient means from low concentration to high. This never happens on its own; it costs energy, like pushing the ball back up the hill.</li>
</ul>

<h3 data-tier="essential">Types of movement: passive vs active transport</h3>
<p>The slides divide all transport into two kinds, based on two questions: <strong>does it need energy</strong>, and <strong>which way does it go relative to the gradient</strong>?</p>
<div class="compare">
  <div><h4>Passive transport</h4><ul><li><strong>No energy</strong> (no ATP) required.</li><li>Particles move <strong>down</strong> their concentration gradient (high → low).</li><li>Happens spontaneously, powered by the particles' own random motion.</li><li>Three types: <strong>simple diffusion</strong>, <strong>facilitated diffusion</strong>, <strong>osmosis</strong>.</li></ul></div>
  <div><h4>Active transport</h4><ul><li><strong>Energy required</strong>, usually ATP.</li><li>Particles typically move <strong>against</strong> their concentration gradient (low → high).</li><li>Needs specific carrier proteins (pumps).</li><li>Examples: the sodium-potassium pump; membrane-assisted transport (endocytosis and exocytosis) also uses energy.</li></ul></div>
</div>
<figure class="diagram">
<svg viewBox="0 0 640 330" role="img" aria-labelledby="b110-t1">
<title id="b110-t1">Four ways across the membrane. Passive transport, down the gradient with no energy: simple diffusion of oxygen straight through the bilayer; facilitated diffusion of ions through a channel protein; facilitated diffusion of glucose through a carrier protein. Active transport, against the gradient using ATP: the sodium-potassium pump moves three sodium ions out and two potassium ions in.</title>
<defs>
<marker id="b110-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
<marker id="b110-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--red)"/></marker>
<marker id="b110-arb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--blue)"/></marker>
</defs>
<text x="230" y="20" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">PASSIVE TRANSPORT</text>
<text x="230" y="36" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">down the gradient (high to low), no energy</text>
<text x="548" y="20" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">ACTIVE TRANSPORT</text>
<text x="548" y="36" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">against the gradient, uses ATP</text>
<path d="M20,48 V43 H442 V48 M470,48 V43 H626 V48" style="fill:none;stroke:var(--ink-2)" stroke-width="1.2"/>
<g style="stroke:var(--line)" stroke-width="1" stroke-dasharray="4 4"><line x1="157" y1="52" x2="157" y2="325"/><line x1="307" y1="52" x2="307" y2="325"/><line x1="457" y1="52" x2="457" y2="325"/></g>
<path d="M14,155V168M18,155V168M14,172V185M18,172V185M26,155V168M30,155V168M26,172V185M30,172V185M38,155V168M42,155V168M38,172V185M42,172V185M50,155V168M54,155V168M50,172V185M54,172V185M62,155V168M66,155V168M62,172V185M66,172V185M74,155V168M78,155V168M74,172V185M78,172V185M86,155V168M90,155V168M86,172V185M90,172V185M98,155V168M102,155V168M98,172V185M102,172V185M110,155V168M114,155V168M110,172V185M114,172V185M122,155V168M126,155V168M122,172V185M126,172V185M134,155V168M138,155V168M134,172V185M138,172V185M146,155V168M150,155V168M146,172V185M150,172V185M158,155V168M162,155V168M158,172V185M162,172V185M170,155V168M174,155V168M170,172V185M174,172V185M182,155V168M186,155V168M182,172V185M186,172V185M194,155V168M198,155V168M194,172V185M198,172V185M206,155V168M210,155V168M206,172V185M210,172V185M218,155V168M222,155V168M218,172V185M222,172V185M230,155V168M234,155V168M230,172V185M234,172V185M242,155V168M246,155V168M242,172V185M246,172V185M254,155V168M258,155V168M254,172V185M258,172V185M266,155V168M270,155V168M266,172V185M270,172V185M278,155V168M282,155V168M278,172V185M282,172V185M290,155V168M294,155V168M290,172V185M294,172V185M302,155V168M306,155V168M302,172V185M306,172V185M314,155V168M318,155V168M314,172V185M318,172V185M326,155V168M330,155V168M326,172V185M330,172V185M338,155V168M342,155V168M338,172V185M342,172V185M350,155V168M354,155V168M350,172V185M354,172V185M362,155V168M366,155V168M362,172V185M366,172V185M374,155V168M378,155V168M374,172V185M378,172V185M386,155V168M390,155V168M386,172V185M390,172V185M398,155V168M402,155V168M398,172V185M402,172V185M410,155V168M414,155V168M410,172V185M414,172V185M422,155V168M426,155V168M422,172V185M426,172V185M434,155V168M438,155V168M434,172V185M438,172V185M446,155V168M450,155V168M446,172V185M450,172V185M458,155V168M462,155V168M458,172V185M462,172V185M470,155V168M474,155V168M470,172V185M474,172V185M482,155V168M486,155V168M482,172V185M486,172V185M494,155V168M498,155V168M494,172V185M498,172V185M506,155V168M510,155V168M506,172V185M510,172V185M518,155V168M522,155V168M518,172V185M522,172V185M530,155V168M534,155V168M530,172V185M534,172V185M542,155V168M546,155V168M542,172V185M546,172V185M554,155V168M558,155V168M554,172V185M558,172V185M566,155V168M570,155V168M566,172V185M570,172V185M578,155V168M582,155V168M578,172V185M582,172V185M590,155V168M594,155V168M590,172V185M594,172V185M602,155V168M606,155V168M602,172V185M606,172V185M614,155V168M618,155V168M614,172V185M618,172V185M626,155V168M630,155V168M626,172V185M630,172V185" style="fill:none;stroke:var(--ink-2)" stroke-width="1.2"/>
<g style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="1"><circle cx="16" cy="150" r="5"/><circle cx="16" cy="190" r="5"/><circle cx="28" cy="150" r="5"/><circle cx="28" cy="190" r="5"/><circle cx="40" cy="150" r="5"/><circle cx="40" cy="190" r="5"/><circle cx="52" cy="150" r="5"/><circle cx="52" cy="190" r="5"/><circle cx="64" cy="150" r="5"/><circle cx="64" cy="190" r="5"/><circle cx="76" cy="150" r="5"/><circle cx="76" cy="190" r="5"/><circle cx="88" cy="150" r="5"/><circle cx="88" cy="190" r="5"/><circle cx="100" cy="150" r="5"/><circle cx="100" cy="190" r="5"/><circle cx="112" cy="150" r="5"/><circle cx="112" cy="190" r="5"/><circle cx="124" cy="150" r="5"/><circle cx="124" cy="190" r="5"/><circle cx="136" cy="150" r="5"/><circle cx="136" cy="190" r="5"/><circle cx="148" cy="150" r="5"/><circle cx="148" cy="190" r="5"/><circle cx="160" cy="150" r="5"/><circle cx="160" cy="190" r="5"/><circle cx="172" cy="150" r="5"/><circle cx="172" cy="190" r="5"/><circle cx="184" cy="150" r="5"/><circle cx="184" cy="190" r="5"/><circle cx="196" cy="150" r="5"/><circle cx="196" cy="190" r="5"/><circle cx="208" cy="150" r="5"/><circle cx="208" cy="190" r="5"/><circle cx="220" cy="150" r="5"/><circle cx="220" cy="190" r="5"/><circle cx="232" cy="150" r="5"/><circle cx="232" cy="190" r="5"/><circle cx="244" cy="150" r="5"/><circle cx="244" cy="190" r="5"/><circle cx="256" cy="150" r="5"/><circle cx="256" cy="190" r="5"/><circle cx="268" cy="150" r="5"/><circle cx="268" cy="190" r="5"/><circle cx="280" cy="150" r="5"/><circle cx="280" cy="190" r="5"/><circle cx="292" cy="150" r="5"/><circle cx="292" cy="190" r="5"/><circle cx="304" cy="150" r="5"/><circle cx="304" cy="190" r="5"/><circle cx="316" cy="150" r="5"/><circle cx="316" cy="190" r="5"/><circle cx="328" cy="150" r="5"/><circle cx="328" cy="190" r="5"/><circle cx="340" cy="150" r="5"/><circle cx="340" cy="190" r="5"/><circle cx="352" cy="150" r="5"/><circle cx="352" cy="190" r="5"/><circle cx="364" cy="150" r="5"/><circle cx="364" cy="190" r="5"/><circle cx="376" cy="150" r="5"/><circle cx="376" cy="190" r="5"/><circle cx="388" cy="150" r="5"/><circle cx="388" cy="190" r="5"/><circle cx="400" cy="150" r="5"/><circle cx="400" cy="190" r="5"/><circle cx="412" cy="150" r="5"/><circle cx="412" cy="190" r="5"/><circle cx="424" cy="150" r="5"/><circle cx="424" cy="190" r="5"/><circle cx="436" cy="150" r="5"/><circle cx="436" cy="190" r="5"/><circle cx="448" cy="150" r="5"/><circle cx="448" cy="190" r="5"/><circle cx="460" cy="150" r="5"/><circle cx="460" cy="190" r="5"/><circle cx="472" cy="150" r="5"/><circle cx="472" cy="190" r="5"/><circle cx="484" cy="150" r="5"/><circle cx="484" cy="190" r="5"/><circle cx="496" cy="150" r="5"/><circle cx="496" cy="190" r="5"/><circle cx="508" cy="150" r="5"/><circle cx="508" cy="190" r="5"/><circle cx="520" cy="150" r="5"/><circle cx="520" cy="190" r="5"/><circle cx="532" cy="150" r="5"/><circle cx="532" cy="190" r="5"/><circle cx="544" cy="150" r="5"/><circle cx="544" cy="190" r="5"/><circle cx="556" cy="150" r="5"/><circle cx="556" cy="190" r="5"/><circle cx="568" cy="150" r="5"/><circle cx="568" cy="190" r="5"/><circle cx="580" cy="150" r="5"/><circle cx="580" cy="190" r="5"/><circle cx="592" cy="150" r="5"/><circle cx="592" cy="190" r="5"/><circle cx="604" cy="150" r="5"/><circle cx="604" cy="190" r="5"/><circle cx="616" cy="150" r="5"/><circle cx="616" cy="190" r="5"/><circle cx="628" cy="150" r="5"/><circle cx="628" cy="190" r="5"/></g>
<text x="14" y="137" font-family="inherit" font-size="11.5" font-style="italic" style="fill:var(--ink-2)">outside</text>
<text x="14" y="213" font-family="inherit" font-size="11.5" font-style="italic" style="fill:var(--ink-2)">inside</text>
<g style="fill:var(--teal)"><circle cx="45" cy="62" r="4"/><circle cx="75" cy="54" r="4"/><circle cx="105" cy="68" r="4"/><circle cx="135" cy="58" r="4"/><circle cx="58" cy="90" r="4"/><circle cx="118" cy="92" r="4"/><circle cx="140" cy="112" r="4"/><circle cx="48" cy="112" r="4"/><circle cx="110" cy="124" r="4"/><circle cx="85" cy="170" r="4"/><circle cx="60" cy="252" r="4"/><circle cx="118" cy="268" r="4"/></g>
<line x1="85" y1="104" x2="85" y2="234" style="stroke:var(--ink)" stroke-width="2" marker-end="url(#b110-ar)"/>
<rect x="228" y="138" width="12" height="64" style="fill:var(--surface)"/>
<rect x="208" y="138" width="20" height="64" rx="8" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<rect x="240" y="138" width="20" height="64" rx="8" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<g style="fill:var(--amber)"><circle cx="175" cy="60" r="3.5"/><circle cx="200" cy="72" r="3.5"/><circle cx="228" cy="56" r="3.5"/><circle cx="262" cy="70" r="3.5"/><circle cx="288" cy="60" r="3.5"/><circle cx="186" cy="96" r="3.5"/><circle cx="210" cy="106" r="3.5"/><circle cx="260" cy="96" r="3.5"/><circle cx="282" cy="108" r="3.5"/><circle cx="196" cy="126" r="3.5"/><circle cx="268" cy="126" r="3.5"/><circle cx="234" cy="172" r="3.5"/><circle cx="190" cy="250" r="3.5"/><circle cx="278" cy="264" r="3.5"/></g>
<line x1="234" y1="104" x2="234" y2="236" style="stroke:var(--ink)" stroke-width="2" marker-end="url(#b110-ar)"/>
<line x1="360" y1="84" x2="360" y2="236" style="stroke:var(--ink)" stroke-width="2" marker-end="url(#b110-ar)"/>
<rect x="328" y="134" width="64" height="72" rx="14" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<rect x="351" y="126" width="18" height="44" rx="7" style="fill:var(--surface);stroke:var(--magenta)" stroke-width="1.5"/>
<g style="fill:var(--good)"><rect x="326" y="57" width="9" height="9" rx="2"/><rect x="354" y="50" width="9" height="9" rx="2"/><rect x="384" y="62" width="9" height="9" rx="2"/><rect x="416" y="54" width="9" height="9" rx="2"/><rect x="436" y="80" width="9" height="9" rx="2"/><rect x="330" y="92" width="9" height="9" rx="2"/><rect x="404" y="96" width="9" height="9" rx="2"/><rect x="322" y="118" width="9" height="9" rx="2"/><rect x="426" y="118" width="9" height="9" rx="2"/><rect x="355" y="154" width="10" height="10" rx="2"/><rect x="336" y="258" width="9" height="9" rx="2"/><rect x="416" y="246" width="9" height="9" rx="2"/></g>
<rect x="520" y="134" width="60" height="72" rx="14" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<g style="fill:var(--red)"><circle cx="480" cy="62" r="4.5"/><circle cx="505" cy="74" r="4.5"/><circle cx="530" cy="58" r="4.5"/><circle cx="590" cy="60" r="4.5"/><circle cx="614" cy="80" r="4.5"/><circle cx="486" cy="102" r="4.5"/><circle cx="604" cy="104" r="4.5"/><circle cx="512" cy="96" r="4.5"/><circle cx="522" cy="296" r="4.5"/></g>
<g style="fill:var(--blue)"><circle cx="586" cy="252" r="4.5"/><circle cx="612" cy="268" r="4.5"/><circle cx="542" cy="286" r="4.5"/><circle cx="600" cy="294" r="4.5"/><circle cx="566" cy="304" r="4.5"/><circle cx="470" cy="86" r="4.5"/></g>
<line x1="538" y1="234" x2="538" y2="102" style="stroke:var(--red)" stroke-width="2.5" marker-end="url(#b110-arr)"/>
<line x1="562" y1="100" x2="562" y2="234" style="stroke:var(--blue)" stroke-width="2.5" marker-end="url(#b110-arb)"/>
<text x="570" y="126" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--red)">3 Na⁺ out</text>
<text x="570" y="224" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--blue)">2 K⁺ in</text>
<circle cx="488" cy="250" r="15" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="2"/>
<text x="488" y="254" text-anchor="middle" font-family="inherit" font-size="11" font-weight="700" style="fill:var(--amber)">ATP</text>
<text x="488" y="282" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">ADP + Pi</text>
<line x1="498" y1="238" x2="518" y2="210" style="stroke:var(--amber)" stroke-width="1.8"/>
<text x="82" y="306" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Simple diffusion</text>
<text x="82" y="322" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">e.g. O₂, CO₂</text>
<text x="234" y="306" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Channel protein</text>
<text x="234" y="322" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">e.g. ions</text>
<text x="382" y="306" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Carrier protein</text>
<text x="382" y="322" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">e.g. glucose</text>
<text x="560" y="322" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Na⁺/K⁺ pump</text>
</svg>
<figcaption>Dot density shows concentration. The three passive routes all run from the crowded side to the sparse side. The pump does the opposite: it pushes Na<sup>+</sup> out where Na<sup>+</sup> is already concentrated and K<sup>+</sup> in where K<sup>+</sup> is already concentrated, paid for by ATP.</figcaption>
</figure>
<details class="check"><summary>Review question 1: Describe the difference between passive and active transport.</summary><div class="ans"><p>The difference is whether cellular energy (ATP) is needed and which way the substance moves relative to its concentration gradient. <strong>Passive transport</strong> needs no energy: molecules move <strong>down</strong> their concentration gradient (high to low) spontaneously. Examples: simple diffusion, facilitated diffusion and osmosis. <strong>Active transport</strong> requires energy in the form of ATP: molecules move <strong>against</strong> their concentration gradient (low to high). Examples: the sodium-potassium (Na<sup>+</sup>/K<sup>+</sup>) pump, endocytosis and exocytosis.</p></div></details>

<h3 data-tier="essential">Diffusion</h3>
<p><span class="term">Diffusion</span> is the tendency of particles to move from an area of <strong>[high]</strong> to an area of <strong>[lower]</strong> concentration.</p>
<p>Why does it happen? All particles in a liquid or gas are constantly moving in random directions (they have kinetic energy). No particle "knows" where the low concentration is. But if there are more particles on one side, more of them happen to wander across from that side than wander back. The result is a <strong>net</strong> movement from high to low, until the particles are evenly spread. A drop of dye in a glass of water spreads out this way without stirring.</p>
<ul>
  <li>Diffusion occurs by <strong>passive transport</strong>: <strong>no energy is required</strong> from the cell. The particles' own motion does the work.</li>
  <li>Particles move <strong>along</strong> (down) the concentration gradient.</li>
  <li>Particles eventually reach a <span class="term">dynamic equilibrium</span>: the concentration is equal everywhere, so there is no further net change.</li>
</ul>
<p>"Dynamic" is the important word. At equilibrium the particles have <strong>not</strong> stopped. They keep moving in both directions, but equal numbers cross each way, so the concentrations stay the same. The slide's dye diagram shows this: net diffusion to the right, then more net diffusion, then equilibrium with arrows going both ways.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Dynamic equilibrium means <strong>no net movement</strong> (no change), but "no net movement" does <strong>not</strong> mean "no movement." Particles are still crossing; they just cross equally in both directions.</p></div>
<p data-tier="likely">Diffusion is faster when the gradient is steeper (bigger difference in concentration), the temperature is higher (particles move faster), the particles are smaller, the surface area is larger, and the distance is shorter. This is why cells stay small and why exchange surfaces such as lung alveoli are thin and have huge surface areas.</p>
<h4>Simple diffusion</h4>
<p><span class="term">Simple diffusion</span> is diffusion of molecules <strong>straight across the membrane</strong>, through the phospholipid bilayer, with no protein involved. It works for:</p>
<ul>
  <li><strong>small, lipid-soluble (nonpolar) molecules</strong>, which dissolve in the hydrophobic core (for example, steroid hormones);</li>
  <li><strong>oxygen</strong> (O<sub>2</sub>);</li>
  <li><strong>carbon dioxide</strong> (CO<sub>2</sub>).</li>
</ul>
<p>This is how your cells get oxygen and get rid of carbon dioxide. Your cells use O<sub>2</sub> constantly in cellular respiration, so its concentration inside stays lower than in the blood, and O<sub>2</sub> keeps diffusing in. They make CO<sub>2</sub> constantly, so it stays more concentrated inside and keeps diffusing out. The cell never has to spend energy on either.</p>

<h3 data-tier="essential">Facilitated diffusion</h3>
<p>Many substances a cell needs, such as ions, sugars and amino acids, are polar or charged and cannot pass through the hydrophobic core. <span class="term">Facilitated diffusion</span> is diffusion <strong>with help from a membrane transport protein</strong>. The protein provides a route across, but the substance still moves <strong>down its concentration gradient</strong> and the cell spends <strong>no energy</strong>, so it is still passive transport. There are two kinds of transport protein.</p>
<div class="compare">
  <div><h4>Channel proteins</h4><ul><li>Form <strong>water-filled pores</strong> through the membrane that allow <strong>specific ions</strong> to pass.</li><li>The protein's <strong>shape does not change</strong> as things pass through; it is a tunnel.</li><li>Very fast.</li><li>Example: <strong>aquaporins</strong>, channels for water; ion channels for K<sup>+</sup>, Na<sup>+</sup>, Cl<sup>–</sup>.</li></ul></div>
  <div><h4>Carrier proteins</h4><ul><li><strong>Bind</strong> a specific molecule and <strong>change shape</strong> to carry it to the other side.</li><li>Specific, based on the molecule's <strong>size, shape and charge</strong>, much like an enzyme's active site.</li><li>Slower than channels.</li><li>Examples: <strong>amino acids, sugars and small proteins</strong>; the glucose transporter.</li></ul></div>
</div>
<p>The slide's glucose transporter shows a carrier in three steps: (1) glucose from the side where it is more concentrated binds to the transporter; (2) the transporter changes shape, opening to the other side; (3) glucose is released into the cytosol, where its concentration is lower, and the transporter flips back.</p>
<p>Many channels are <strong>gated</strong>: they open or close in response to a signal, such as a change in voltage or the binding of a molecule. This is how the membrane "uses proteins to open and close channels for selected materials," as the notes from lesson 1.09 put it.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"It uses a protein, so it must be active transport." No. Using a protein is not the test. The test is energy and direction. Facilitated diffusion uses a protein but no ATP, and it only ever goes down the gradient, so it is <strong>passive</strong>.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>A <strong>channel</strong> is a <strong>tunnel</strong>: an open hole, nothing moves. A <strong>carrier</strong> is a <strong>revolving door</strong>: it has to turn (change shape) to let each passenger through.</p></div>
<p data-tier="extra">Because there are only so many carriers in a membrane, facilitated diffusion has a top speed. Once every carrier is busy (saturated), adding more glucose outside no longer speeds up its entry. Simple diffusion has no such limit: its rate just keeps rising with the gradient.</p>

<h3 data-tier="essential">Osmosis</h3>
<p><span class="term">Osmosis</span> is the <strong>diffusion of water</strong> across a <strong>selectively permeable membrane</strong>, from an area of <strong>high [water]</strong> to an area of <strong>lower [water]</strong>.</p>
<p>Concentration of water is the flip side of concentration of solute. A solution with more dissolved solute has proportionally less water. So "high water to low water" is the same as "from <strong>low solute</strong> to <strong>high solute</strong>." Osmosis happens when the membrane lets water through but <strong>not</strong> the solute: the solute cannot spread out to even the concentrations, so the water moves instead.</p>
<p>The slide's U-tube shows this. A selectively permeable membrane divides the tube; one side has less solute (more water), the other has more solute (less water). Water crosses toward the side with more solute, and the water level on that side rises until the system balances.</p>
<p>Osmosis is passive: no energy is spent. Water crosses partly by slipping directly through the bilayer and mostly through <strong>aquaporins</strong>, the water channel proteins.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>In osmosis it is the <strong>water</strong> that moves, not the solute. And water moves <strong>toward</strong> the side with the <strong>higher</strong> solute concentration, which sounds backwards until you remember that side has the <strong>lower water</strong> concentration.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Water follows solute.</strong> Wherever there is more dissolved "stuff," water moves there to dilute it.</p></div>
<details class="check"><summary>Review question 2: What is the difference between diffusion and osmosis?</summary><div class="ans"><p>Diffusion describes the movement of particles (ions, molecules) in general; osmosis refers specifically to the movement of <strong>water</strong> across a selectively permeable membrane. Both move with the concentration gradient, so both are forms of <strong>passive</strong> transport.</p></div></details>
<h3 data-tier="essential">Types of solutions: isotonic, hypotonic, hypertonic</h3>
<p>These three words describe a solution's <strong>solute concentration compared with the inside of a cell</strong>. They are always relative: a solution is hypotonic <em>to</em> a particular cell.</p>
<ul>
  <li><span class="term">Isotonic</span>: the solution and the cell have an <strong>equal</strong> concentration of dissolved solutes. There is <strong>no net movement</strong> of water. The cell stays the same size.</li>
  <li><span class="term">Hypotonic</span>: the solution has a <strong>lower</strong> concentration of dissolved solutes than the cell. The cell will <strong>gain</strong> water from the solution.</li>
  <li><span class="term">Hypertonic</span>: the solution has a <strong>higher</strong> concentration of dissolved solutes than the cell. The cell will <strong>lose</strong> water to the solution.</li>
</ul>
<p>The slides used numbers, and so should you. Suppose the cell is <strong>20% solute (80% water)</strong>.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Solution outside</th><th>Compared with the cell</th><th>Water moves</th><th>Result</th></tr></thead><tbody>
<tr><td>20% solute (80% water)</td><td>Isotonic</td><td>In and out equally (no net movement)</td><td>No change</td></tr>
<tr><td>10% solute (90% water)</td><td>Hypotonic</td><td><strong>Into</strong> the cell (outside has more water)</td><td>Cell swells</td></tr>
<tr><td>40% solute (60% water)</td><td>Hypertonic</td><td><strong>Out of</strong> the cell (inside has more water)</td><td>Cell shrinks</td></tr>
</tbody></table></div>
<p>The reasoning is always the same: find which side has the higher water concentration (the lower solute concentration), and water moves from there to the other side.</p>
<figure class="diagram">
<svg viewBox="0 0 640 360" role="img" aria-labelledby="b110-t2">
<title id="b110-t2">Animal and plant cells in three solutions. In a hypotonic solution water moves in: a red blood cell swells and may burst, and a plant cell becomes turgid, its membrane pressed against the wall. In an isotonic solution there is no net water movement: the red blood cell keeps its normal disc shape and the plant cell is flaccid. In a hypertonic solution water moves out: the red blood cell shrivels with a spiky outline, and the plant cell's membrane pulls away from the wall, called plasmolysis.</title>
<defs><marker id="b110-aw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--blue)"/></marker></defs>
<text x="180" y="22" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Hypotonic</text>
<text x="360" y="22" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Isotonic</text>
<text x="540" y="22" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Hypertonic</text>
<text x="180" y="38" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">less solute outside</text>
<text x="360" y="38" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">equal solute</text>
<text x="540" y="38" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">more solute outside</text>
<text x="180" y="54" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--blue)">water moves IN</text>
<text x="360" y="54" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--blue)">no net movement</text>
<text x="540" y="54" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--blue)">water moves OUT</text>
<text x="10" y="124" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Animal cell</text>
<text x="10" y="140" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">(red blood cell)</text>
<text x="10" y="266" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Plant cell</text>
<circle cx="180" cy="128" r="40" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="2"/>
<ellipse cx="360" cy="128" rx="44" ry="28" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="2"/>
<ellipse cx="360" cy="128" rx="20" ry="10" style="fill:var(--surface);stroke:var(--red)" stroke-width="1" fill-opacity="0.6"/>
<polygon points="572,128 563,135 567,145 556,146 553,157 543,152 535,160 530,150 519,152 520,141 509,137 516,128 509,119 520,115 519,104 530,106 535,96 543,104 553,99 556,110 567,111 563,121" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="2"/>
<g style="fill:none;stroke:var(--blue)" stroke-width="2">
<line x1="180" y1="64" x2="180" y2="84" marker-end="url(#b110-aw)"/><line x1="180" y1="190" x2="180" y2="172" marker-end="url(#b110-aw)"/><line x1="114" y1="128" x2="136" y2="128" marker-end="url(#b110-aw)"/><line x1="246" y1="128" x2="224" y2="128" marker-end="url(#b110-aw)"/>
<line x1="294" y1="128" x2="312" y2="128" marker-start="url(#b110-aw)" marker-end="url(#b110-aw)"/><line x1="408" y1="128" x2="426" y2="128" marker-start="url(#b110-aw)" marker-end="url(#b110-aw)"/>
<line x1="540" y1="92" x2="540" y2="68" marker-end="url(#b110-aw)"/><line x1="540" y1="164" x2="540" y2="188" marker-end="url(#b110-aw)"/><line x1="504" y1="128" x2="480" y2="128" marker-end="url(#b110-aw)"/><line x1="576" y1="128" x2="600" y2="128" marker-end="url(#b110-aw)"/>
</g>
<text x="180" y="212" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Swells; may burst (lysis)</text>
<text x="360" y="212" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Normal disc shape</text>
<text x="540" y="212" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Shrivels (crenation)</text>
<g style="fill:var(--surface-2);stroke:var(--good)" stroke-width="3"><rect x="128" y="228" width="104" height="84" rx="8"/><rect x="308" y="228" width="104" height="84" rx="8"/><rect x="488" y="228" width="104" height="84" rx="8"/></g>
<g style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"><rect x="132" y="232" width="96" height="76" rx="6"/><rect x="316" y="238" width="88" height="64" rx="10"/><rect x="508" y="248" width="64" height="44" rx="18"/></g>
<g style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="1.5"><rect x="144" y="242" width="72" height="56" rx="14"/><rect x="332" y="250" width="56" height="40" rx="12"/><rect x="524" y="258" width="32" height="24" rx="10"/></g>
<g style="fill:none;stroke:var(--blue)" stroke-width="2">
<line x1="104" y1="270" x2="126" y2="270" marker-end="url(#b110-aw)"/><line x1="256" y1="270" x2="234" y2="270" marker-end="url(#b110-aw)"/>
<line x1="284" y1="270" x2="302" y2="270" marker-start="url(#b110-aw)" marker-end="url(#b110-aw)"/><line x1="418" y1="270" x2="436" y2="270" marker-start="url(#b110-aw)" marker-end="url(#b110-aw)"/>
<line x1="504" y1="270" x2="470" y2="270" marker-end="url(#b110-aw)"/><line x1="576" y1="270" x2="610" y2="270" marker-end="url(#b110-aw)"/>
</g>
<text x="180" y="334" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Turgid (normal, firm)</text>
<text x="360" y="334" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Flaccid (limp)</text>
<text x="540" y="334" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Plasmolyzed: membrane</text>
<text x="540" y="350" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">pulls away from wall</text>
</svg>
<figcaption>The same three solutions have different effects on animal and plant cells because only the plant cell has a wall. Blue arrows show the net movement of water.</figcaption>
</figure>
<h4>Animal cells</h4>
<p>An animal cell has no wall, so it is at the mercy of the water around it. In a <strong>hypotonic</strong> solution (pure water, for example) water rushes in, the cell swells, and it can burst; for red blood cells this is called <span class="term">lysis</span> (hemolysis). In a <strong>hypertonic</strong> solution (strong salt water) water leaves, and the cell shrivels into a spiky shape, called <span class="term">crenation</span>. Only an <strong>isotonic</strong> solution keeps it normal. That is why your body keeps the blood plasma isotonic to your cells, and why fluids given through an IV drip are isotonic saline, never pure water.</p>
<h4>Plant cells</h4>
<p>A plant cell has a cell wall, which changes the story. In a <strong>hypotonic</strong> solution water enters the central vacuole, which swells and presses the membrane against the wall. The wall pushes back and stops the cell bursting. The cell becomes <span class="term">turgid</span> (firm), and this is the <strong>normal, healthy</strong> state for a plant cell: turgor pressure is what holds up stems and leaves (lesson 1.08). In an <strong>isotonic</strong> solution there is no net water movement, the cell is <span class="term">flaccid</span> (limp) and the plant wilts. In a <strong>hypertonic</strong> solution water leaves, the vacuole shrinks and the membrane pulls away from the wall. This is <span class="term">plasmolysis</span>, and it usually kills the cell.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>From the answer key: <strong>isotonic</strong>: same solute concentration as the cell, no net movement of water, cell remains stable. <strong>Hypertonic</strong>: higher solute concentration than the cell; water leaves the cell to try to dilute the outside, so the cell shrivels (<strong>crenation</strong> in animal cells). <strong>Hypotonic</strong>: lower solute concentration than the cell; water rushes into the cell, causing it to swell and potentially burst (<strong>lysis</strong>).</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>From the answer key: "<strong>Hypo</strong>" sounds like "<strong>hippo</strong>": in a hypotonic solution the cell gets big like a hippo. And hyp<strong>er</strong>tonic has more "stuff" (solute) outside, like a h<strong>y</strong>per crowd, so water leaves the cell to join it.</p></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>"No net movement" in an isotonic solution does <strong>not</strong> mean no movement: water still crosses, but equally in both directions. Class memory tricks: <strong>hypo</strong>tonic, the cell fills up, "no more water needed"; <strong>hyper</strong>tonic, the cell is drained, "perhaps I need water."</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>These words describe the <strong>solution</strong> compared with the <strong>cell</strong>, not the cell itself. "The cell is hypotonic" is ambiguous; say "the solution is hypotonic to the cell." Also, do not say a cell in a hypotonic solution "gains solute." It gains <strong>water</strong>; solute does not need to move at all.</p></div>
<details class="check"><summary>Review question 3: Use the terms hypotonic, hypertonic and isotonic to describe solutions.</summary><div class="ans"><p>The terms describe the solute concentration of a solution relative to the inside of a cell. <strong>Isotonic:</strong> the solution has the same solute concentration as the cell; there is no net movement of water and the cell remains stable. <strong>Hypertonic:</strong> the solution has a higher solute concentration than the cell; water leaves the cell, which shrivels (crenation in animal cells). <strong>Hypotonic:</strong> the solution has a lower solute concentration than the cell; water rushes into the cell, which swells and may burst (lysis).</p></div></details>
<details class="check"><summary>Why does salting a road in winter kill the grass beside it?</summary><div class="ans"><p>Salt dissolves in the water in the soil, making the soil water <strong>hypertonic</strong> to the root cells. Water moves out of the root cells by osmosis, so they cannot take water in, and their cells plasmolyze. The plant wilts and dies even though the soil is wet.</p></div></details>
<p data-tier="extra">Freshwater protists such as paramecia live in water that is always hypotonic to them, so water constantly floods in. They survive by using <strong>contractile vacuoles</strong> that collect the excess water and pump it out, a job that costs ATP.</p>

<h3 data-tier="essential">Active transport</h3>
<p><span class="term">Active transport</span> moves substances across the membrane with these three features from the slide:</p>
<ul>
  <li><strong>Energy is required</strong>, usually from ATP.</li>
  <li>Particles move <strong>against</strong> their concentration gradient, from low to high.</li>
  <li>Transport requires <strong>specific carrier proteins</strong>, often called <span class="term">pumps</span>.</li>
</ul>
<p>The second point explains the first. Diffusion always runs from high to low concentration on its own. To push particles the other way, piling them up where they are already concentrated, the cell has to do work, just as you have to do work to pump air into an already full tyre. The energy comes from ATP: the carrier protein uses the energy released when ATP is broken into ADP + P<sub>i</sub> to change its shape and move the particle.</p>
<p>Why would a cell bother? Cells need to accumulate things they are short of (a root cell absorbs mineral ions from soil where they are scarce), remove things even when outside levels are already high, and maintain ion gradients that power other processes.</p>
<h4>Example: the sodium-potassium pump</h4>
<p>The answer key's main example of active transport is the <span class="term">sodium-potassium pump</span> (Na<sup>+</sup>/K<sup>+</sup> pump), found in the membranes of animal cells. Each cycle it uses <strong>one ATP</strong> to pump <strong>3 Na<sup>+</sup> out</strong> of the cell and <strong>2 K<sup>+</sup> into</strong> it. Both moves are against the gradient: there is already more Na<sup>+</sup> outside and more K<sup>+</sup> inside.</p>
<ol class="steps">
  <li><p class="step-head">Three Na<sup>+</sup> bind</p><p>Three sodium ions from the cytosol bind to the pump.</p></li>
  <li><p class="step-head">ATP powers a shape change</p><p>ATP transfers a phosphate group to the pump. The pump changes shape, opens to the outside and releases the Na<sup>+</sup>.</p></li>
  <li><p class="step-head">Two K<sup>+</sup> bind</p><p>In its new shape the pump binds two potassium ions from outside.</p></li>
  <li><p class="step-head">Back to the start</p><p>The phosphate is released, the pump returns to its original shape and releases the K<sup>+</sup> inside. The cycle repeats.</p></li>
</ol>
<p>The gradients this pump builds are how nerve cells send impulses and muscle cells contract, and they help control the cell's water balance. Running it takes a large share of an animal cell's ATP, which is why neurons are packed with mitochondria (lesson 1.08).</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Both facilitated diffusion and active transport can use carrier proteins, so the protein does not tell you which one it is. Ask: is ATP used, and is the substance going <strong>against</strong> its gradient? If yes, it is active.</p></div>

<h3 data-tier="essential">Membrane-assisted transport: endocytosis and exocytosis</h3>
<p>Some materials are far too large for any channel or carrier: whole bacteria, droplets of fluid, large proteins, hormones made by the cell. These are moved in bulk, wrapped in a piece of membrane, as a <strong>vesicle</strong>. This is <span class="term">membrane-assisted transport</span>. It requires energy (ATP), so the class answer key lists endocytosis and exocytosis as examples of active transport. It only works because the membrane is fluid (lesson 1.09).</p>
<figure class="diagram">
<svg viewBox="0 0 640 286" role="img" aria-labelledby="b110-t3">
<title id="b110-t3">Four kinds of membrane-assisted transport, with the outside of the cell at the top. Phagocytosis: the membrane extends around a large particle and encloses it in a food vacuole. Pinocytosis: the membrane dips inward and pinches off a small vesicle of fluid. Receptor-mediated endocytosis: specific molecules bind receptors in a coated pit, which pinches off as a vesicle. Exocytosis: a vesicle fuses with the membrane and releases its contents outside.</title>
<defs><marker id="b110-ak" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<text x="240" y="18" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">ENDOCYTOSIS: into the cell</text>
<text x="560" y="18" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">EXOCYTOSIS: out</text>
<path d="M10,32 V27 H470 V32 M490,32 V27 H630 V32" style="fill:none;stroke:var(--ink-2)" stroke-width="1.2"/>
<text x="632" y="50" text-anchor="end" font-family="inherit" font-size="11.5" font-style="italic" style="fill:var(--ink-2)">outside</text>
<text x="632" y="146" text-anchor="end" font-family="inherit" font-size="11.5" font-style="italic" style="fill:var(--ink-2)">inside</text>
<g style="stroke:var(--line)" stroke-width="1" stroke-dasharray="4 4"><line x1="160" y1="36" x2="160" y2="280"/><line x1="320" y1="36" x2="320" y2="280"/><line x1="480" y1="36" x2="480" y2="280"/></g>
<ellipse cx="80" cy="68" rx="24" ry="14" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="2"/>
<path d="M6,110 H30 C36,110 28,52 56,46 M104,46 C132,52 124,110 130,110 H154" style="fill:none;stroke:var(--amber)" stroke-width="5" stroke-linecap="round"/>
<line x1="80" y1="94" x2="80" y2="140" style="stroke:var(--ink-2)" stroke-width="1.6" marker-end="url(#b110-ak)"/>
<circle cx="80" cy="178" r="28" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="4"/>
<ellipse cx="80" cy="178" rx="15" ry="9" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="2"/>
<text x="80" y="222" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">food vacuole</text>
<path d="M166,110 H218 C224,110 220,142 240,142 C260,142 256,110 262,110 H314" style="fill:none;stroke:var(--amber)" stroke-width="5" stroke-linecap="round"/>
<g style="fill:var(--blue)"><circle cx="186" cy="62" r="3"/><circle cx="214" cy="80" r="3"/><circle cx="246" cy="58" r="3"/><circle cx="272" cy="76" r="3"/><circle cx="300" cy="60" r="3"/><circle cx="196" cy="96" r="3"/><circle cx="288" cy="96" r="3"/><circle cx="234" cy="126" r="3"/><circle cx="248" cy="120" r="3"/><circle cx="236" cy="186" r="3"/><circle cx="246" cy="180" r="3"/><circle cx="240" cy="192" r="3"/></g>
<line x1="240" y1="146" x2="240" y2="162" style="stroke:var(--ink-2)" stroke-width="1.6" marker-end="url(#b110-ak)"/>
<circle cx="240" cy="186" r="16" style="fill:none;stroke:var(--amber)" stroke-width="4"/>
<path d="M326,110 H372 C378,110 374,148 400,148 C426,148 422,110 428,110 H474" style="fill:none;stroke:var(--amber)" stroke-width="5" stroke-linecap="round"/>
<path d="M376,124 C380,152 420,152 424,124" style="fill:none;stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="3 3"/>
<g style="stroke:var(--magenta)" stroke-width="2"><line x1="379" y1="118" x2="372" y2="108"/><line x1="390" y1="137" x2="386" y2="126"/><line x1="410" y1="137" x2="414" y2="126"/><line x1="421" y1="118" x2="428" y2="108"/></g>
<g style="fill:var(--magenta)"><circle cx="370" cy="104" r="4"/><circle cx="385" cy="122" r="4"/><circle cx="415" cy="122" r="4"/><circle cx="430" cy="104" r="4"/><circle cx="352" cy="66" r="4"/><circle cx="446" cy="62" r="4"/><circle cx="400" cy="76" r="4"/></g>
<g style="fill:var(--teal)"><circle cx="340" cy="90" r="3"/><circle cx="458" cy="88" r="3"/><circle cx="420" cy="54" r="3"/></g>
<line x1="400" y1="154" x2="400" y2="166" style="stroke:var(--ink-2)" stroke-width="1.6" marker-end="url(#b110-ak)"/>
<circle cx="400" cy="190" r="20" style="fill:none;stroke:var(--amber)" stroke-width="4"/>
<circle cx="400" cy="190" r="24" style="fill:none;stroke:var(--ink-2)" stroke-width="1.5" stroke-dasharray="3 3"/>
<g style="fill:var(--magenta)"><circle cx="393" cy="186" r="3.5"/><circle cx="407" cy="186" r="3.5"/><circle cx="400" cy="196" r="3.5"/></g>
<path d="M486,110 H545 C545,140 575,140 575,110 H634" style="fill:none;stroke:var(--amber)" stroke-width="5" stroke-linecap="round"/>
<g style="fill:var(--magenta)"><circle cx="556" cy="96" r="3.5"/><circle cx="566" cy="86" r="3.5"/><circle cx="556" cy="74" r="3.5"/><circle cx="570" cy="64" r="3.5"/><circle cx="560" cy="120" r="3.5"/></g>
<circle cx="560" cy="196" r="18" style="fill:var(--magenta-soft);stroke:var(--amber)" stroke-width="4"/>
<g style="fill:var(--magenta)"><circle cx="553" cy="192" r="3.5"/><circle cx="567" cy="192" r="3.5"/><circle cx="560" cy="202" r="3.5"/></g>
<line x1="560" y1="174" x2="560" y2="148" style="stroke:var(--ink-2)" stroke-width="1.6" marker-end="url(#b110-ak)"/>
<text x="606" y="200" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">vesicle</text>
<text x="606" y="214" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">from Golgi</text>
<text x="80" y="244" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Phagocytosis</text>
<text x="80" y="260" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">"cell eating":</text>
<text x="80" y="276" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">solid particles</text>
<text x="240" y="244" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Pinocytosis</text>
<text x="240" y="260" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">"cell drinking":</text>
<text x="240" y="276" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">fluid + solutes</text>
<text x="400" y="244" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Receptor-mediated</text>
<text x="400" y="260" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">receptors pick out</text>
<text x="400" y="276" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">specific molecules</text>
<text x="560" y="244" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Exocytosis</text>
<text x="560" y="260" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">vesicle fuses,</text>
<text x="560" y="276" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">contents released</text>
</svg>
<figcaption>The cell membrane is amber; the outside of the cell is at the top. In receptor-mediated endocytosis only the magenta molecules (which fit the receptors) are taken in; the dashed line is the protein coat lining the pit.</figcaption>
</figure>
<h4>Endocytosis</h4>
<p><span class="term">Endocytosis</span> is the process by which a cell <strong>engulfs extracellular material to bring it inside the cell</strong>. A patch of membrane folds inward around the material and pinches off as a vesicle. There are three types:</p>
<ul>
  <li><span class="term">Phagocytosis</span> ("cell eating"): the cell engulfs <strong>solid particles</strong>. The cell extends <strong>pseudopodia</strong> around a large particle, such as a bacterium or a bit of food, and encloses it in a <strong>food vacuole</strong>. A lysosome then fuses with the vacuole and digests the contents (lesson 1.08). Amoebas feed this way, and your white blood cells destroy bacteria this way.</li>
  <li><span class="term">Pinocytosis</span> ("cell drinking"): the cell engulfs <strong>fluid and dissolved solutes</strong>. The membrane dips in and pinches off tiny vesicles of extracellular fluid. It is not selective: whatever is dissolved in that droplet comes in.</li>
  <li><span class="term">Receptor-mediated endocytosis</span>: the cell <strong>selectively</strong> ingests <strong>specific molecules</strong> after they bind to <strong>surface receptors</strong>, and the binding triggers vesicle formation. The receptors cluster in a <strong>coated pit</strong> (lined on the inside with coat protein), which deepens and pinches off as a coated vesicle. This lets a cell collect large amounts of a substance that is rare in the surrounding fluid.</li>
</ul>
<p data-tier="extra">Your cells take in cholesterol by receptor-mediated endocytosis: cholesterol travels in the blood in particles called LDL, which bind to LDL receptors on cells. In the inherited disease familial hypercholesterolemia the receptors are faulty, so cholesterol cannot be taken up and builds to dangerous levels in the blood.</p>
<h4>Exocytosis</h4>
<p><span class="term">Exocytosis</span> is the process by which <strong>secretory vesicles fuse with the cell membrane and release wastes, hormones and other molecules out of the cell</strong>. It is the last step of the secretory pathway from lesson 1.08: vesicles bud off the trans face of the Golgi, travel to the membrane, fuse with it, and spill their contents outside. The vesicle's membrane becomes part of the cell membrane. There are two types:</p>
<ul>
  <li><strong>Constitutive</strong> exocytosis: a <strong>continuous, automatic</strong> process in <strong>all cells</strong> that constantly secretes materials, including the <strong>membrane lipids and proteins</strong> that replace and enlarge the cell membrane, and components of the extracellular matrix.</li>
  <li><strong>Regulated</strong> exocytosis: the cell <strong>stores</strong> substances in vesicles and releases them <strong>on demand</strong>, only after receiving a signal, which can be <strong>chemical</strong> or <strong>electrical</strong>. Examples: pancreas cells release insulin when blood sugar rises (a chemical signal), and a nerve cell releases neurotransmitters when an impulse arrives (an electrical signal).</li>
</ul>
<p>The slide's exocytosis diagram shows both side by side: soluble proteins carried by a transport vesicle are released by "unregulated membrane fusion" (constitutive secretion), while secretory proteins wait in a secretory vesicle until a signal molecule (ligand) binds a receptor and signal transduction triggers "regulated membrane fusion."</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Endocytosis and exocytosis were presented as examples of membrane-assisted active transport. Constitutive exocytosis: continuous and automatic, in all cells (e.g., membrane lipids and proteins). Regulated exocytosis: stored, then released on demand after a chemical or electrical signal.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Endo</strong> = <strong>en</strong>ter, <strong>exo</strong> = <strong>ex</strong>it. <strong>Phago</strong> = eat (think "esophagus"), <strong>pino</strong> = drink (think "pint").</p></div>
<details class="check"><summary>A white blood cell engulfs a bacterium. Name the process and describe what happens to the bacterium next.</summary><div class="ans"><p><strong>Phagocytosis</strong>, a type of endocytosis. Pseudopodia surround the bacterium and enclose it in a food vacuole inside the cell. A lysosome fuses with the vacuole and its digestive enzymes (working at about pH 5) break the bacterium down; useful molecules are released into the cytosol and leftover debris can be expelled by exocytosis.</p></div></details>

<h3 data-tier="essential">Comparing all the transport types</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>Type</th><th>Energy (ATP)?</th><th>Direction</th><th>Needs</th><th>Examples</th></tr></thead><tbody>
<tr><td>Simple diffusion</td><td>No</td><td>Down the gradient</td><td>Nothing; crosses the bilayer</td><td>O<sub>2</sub>, CO<sub>2</sub>, small lipid-soluble molecules</td></tr>
<tr><td>Facilitated diffusion: channel</td><td>No</td><td>Down the gradient</td><td>Channel protein (pore; no shape change)</td><td>Ions; water through aquaporins</td></tr>
<tr><td>Facilitated diffusion: carrier</td><td>No</td><td>Down the gradient</td><td>Carrier protein (changes shape)</td><td>Glucose, amino acids</td></tr>
<tr><td>Osmosis</td><td>No</td><td>Water: high [water] to low [water]</td><td>Selectively permeable membrane (aquaporins help)</td><td>Water into a cell in a hypotonic solution</td></tr>
<tr><td>Active transport</td><td>Yes</td><td>Against the gradient</td><td>Specific carrier protein (pump)</td><td>Na<sup>+</sup>/K<sup>+</sup> pump; mineral uptake by roots</td></tr>
<tr><td>Endocytosis</td><td>Yes</td><td>Into the cell, in bulk</td><td>Membrane folds into a vesicle</td><td>Phagocytosis, pinocytosis, receptor-mediated</td></tr>
<tr><td>Exocytosis</td><td>Yes</td><td>Out of the cell, in bulk</td><td>Vesicle fuses with the membrane</td><td>Constitutive (membrane lipids, proteins); regulated (insulin, neurotransmitters)</td></tr>
</tbody></table></div>
<div class="callout key"><p class="callout-title">On the test</p><p>The application questions for this unit (1 to 3 here, 4 and 5 in lesson 1.09) come straight from these two lessons. For any transport question, state three things: <strong>energy or no energy</strong>, <strong>direction relative to the gradient</strong>, and <strong>what structure is used</strong> (bilayer, channel, carrier, pump, or vesicle).</p></div>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
  <li>Passive transport needs no energy and moves substances down their concentration gradient: simple diffusion (O<sub>2</sub>, CO<sub>2</sub>, small lipid-soluble molecules), facilitated diffusion (channel proteins for ions and water; carrier proteins that change shape for sugars and amino acids), and osmosis.</li>
  <li>Diffusion continues until dynamic equilibrium: no net movement, but particles still cross both ways.</li>
  <li>Osmosis is the diffusion of water across a selectively permeable membrane, from high [water] (low solute) to low [water] (high solute).</li>
  <li>Hypotonic solution: water enters the cell (animal cells swell and may lyse; plant cells become turgid). Isotonic: no net movement. Hypertonic: water leaves (animal cells crenate; plant cells plasmolyze).</li>
  <li>Active transport uses ATP and specific carrier proteins to move substances against their gradient; the Na<sup>+</sup>/K<sup>+</sup> pump moves 3 Na<sup>+</sup> out and 2 K<sup>+</sup> in per ATP.</li>
  <li>Endocytosis brings material in by vesicles (phagocytosis, pinocytosis, receptor-mediated); exocytosis releases it (constitutive or regulated). Both use energy.</li>
</ul>
`
});

/* ===================================================================
   1.11 VISUALIZING BIOLOGICAL DATA
   =================================================================== */
window.LESSONS.push({
  id: "1.11",
  title: "Visualizing Biological Data",
  stage: "c6",
  where: "Lab and data skills",
  summary: "A quick guide to graphing. Identify the independent variable (x-axis) and dependent variable (y-axis), title the graph \"y vs. x\", and choose the right graph: a bar graph for separate categories, a line graph for continuous change over time, and a scatter plot for the relationship between two variables. Read correlations as positive, negative or none, and judge their strength by how close the points sit to the trendline.",
  objectives: [
    "Identify the independent and dependent variables in an experiment and put each on the correct axis.",
    "Title a graph in the form \"dependent variable vs. independent variable\" and label both axes with units.",
    "Choose a bar graph, line graph or scatter plot to suit the data, and justify the choice.",
    "Describe positive, negative and no correlation on a scatter plot.",
    "Judge the strength of a relationship from the distance of points to the trendline or trend curve.",
    "Interpret a graph of biological data, such as osmosis results, to draw a conclusion."
  ],
  html: `
<h3 data-tier="essential">Why graph data at all?</h3>
<p>A table of numbers holds all your results, but it hides the pattern. A graph turns the numbers into a shape, so you can see at a glance whether something goes up, goes down, levels off or does nothing. That is why every lab report in this course needs at least one graph, and why test questions often hand you a graph and ask what it shows.</p>
<p>The two big skills in this lesson are deciding <strong>what goes on which axis</strong> and choosing the <strong>right type of graph</strong> for your data. The wrong choice can make good data look meaningless.</p>

<h3 data-tier="essential">Variables: independent and dependent</h3>
<ul>
  <li>The <span class="term">independent variable</span> (IV) is the <strong>variable you change</strong> on purpose. It is also called the manipulated variable.</li>
  <li>The <span class="term">dependent variable</span> (DV) is the <strong>variable affected by the change</strong>: what you measure to see the effect. Its value "depends on" the independent variable.</li>
</ul>
<p>The slide's example uses the hypothesis "If you add sugar to hot water, then it will dissolve faster than in cold water." You choose the water <strong>temperature</strong>, so that is the independent variable. You then measure <strong>how long it takes the sugar to dissolve</strong>, so time is the dependent variable.</p>
<p>For the comparison to be fair, everything else must stay the same: the mass and type of sugar, the volume of water, whether and how you stir. These are <span class="term">controlled variables</span>. If you also changed the amount of sugar, you could not tell which change caused the result.</p>
<h4>Which axis?</h4>
<p>The independent variable goes on the <strong>x-axis</strong> (horizontal). The dependent variable goes on the <strong>y-axis</strong> (vertical). The slide writes this as <strong>(y vs. x)</strong>, and that is also how you title a graph: <em>dependent variable vs. independent variable</em>. For the sugar experiment: "Time to Dissolve vs. Water Temperature."</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>DRY MIX</strong>: <strong>D</strong>ependent, <strong>R</strong>esponding, <strong>Y</strong>-axis; <strong>M</strong>anipulated, <strong>I</strong>ndependent, <strong>X</strong>-axis.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Writing the title backwards. "Temperature vs. Time to Dissolve" would mean temperature is on the y-axis. The thing <strong>before</strong> "vs." is always the <strong>y-axis</strong> (the dependent variable).</p></div>
<details class="check"><summary>In lesson 1.07 you measured enzyme activity at different pH values. Identify the IV and DV, and write the graph title.</summary><div class="ans"><p><strong>IV:</strong> pH (you set it). <strong>DV:</strong> enzyme activity, measured as reaction rate (for example, volume of O<sub>2</sub> produced per minute). <strong>Title:</strong> "Enzyme Activity vs. pH." pH goes on the x-axis and enzyme activity on the y-axis.</p></div></details>

<h3 data-tier="likely">Checklist for a good graph</h3>
<ul>
  <li><strong>Title</strong> in the form "y vs. x."</li>
  <li><strong>Both axes labelled</strong> with the variable name <strong>and its units</strong>, such as "Temperature (°C)" or "Time (s)."</li>
  <li><strong>Even scales</strong>: each grid square stands for the same amount all the way along an axis. Choose a scale that makes the data fill most of the graph.</li>
  <li><strong>Data points</strong> plotted accurately; if there is more than one data set, a <strong>legend</strong> (key) to tell them apart.</li>
  <li>A <strong>trendline</strong> or curve where the graph type calls for one (scatter plots), not a dot-to-dot zigzag.</li>
</ul>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Uneven scales. If your x-values are 10, 20, 40 and 80 °C, those points must sit at those positions on an evenly spaced axis, not at four equally spaced ticks. Spacing them evenly distorts the shape of the relationship.</p></div>

<h3 data-tier="essential">Three types of graph</h3>
<p>The slides cover three graph types. Which one you use depends on what kind of data your independent variable is.</p>
<figure class="diagram">
<svg viewBox="0 0 640 250" role="img" aria-labelledby="b111-t1">
<title id="b111-t1">Three example graphs. A bar graph of the percentage of the population with blood groups A, B, AB and O, with separate bars for each category. A line graph of resting heart rate over 12 weeks of exercise, with points joined in order, falling from about 78 to 67 beats per minute. A scatter plot of mass against height for many people, with unconnected points rising together and a straight trendline through them.</title>
<text x="110" y="18" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Bar graph</text>
<text x="330" y="18" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Line graph</text>
<text x="540" y="18" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Scatter plot</text>
<g style="stroke:var(--line)" stroke-width="1"><line x1="40" y1="125" x2="200" y2="125"/><line x1="40" y1="50" x2="200" y2="50"/><line x1="250" y1="150" x2="410" y2="150"/><line x1="250" y1="100" x2="410" y2="100"/><line x1="250" y1="50" x2="410" y2="50"/></g>
<g style="fill:var(--magenta)"><rect x="52" y="77" width="26" height="123"/><rect x="90" y="173" width="26" height="27"/><rect x="128" y="188" width="26" height="12"/><rect x="166" y="62" width="26" height="138"/></g>
<polyline points="257,70 270,70 283,90 296,110 309,100 322,120 335,140 348,150 361,170 374,160 387,180 400,180" style="fill:none;stroke:var(--red)" stroke-width="2"/>
<g style="fill:var(--red)"><circle cx="257" cy="70" r="3"/><circle cx="270" cy="70" r="3"/><circle cx="283" cy="90" r="3"/><circle cx="296" cy="110" r="3"/><circle cx="309" cy="100" r="3"/><circle cx="322" cy="120" r="3"/><circle cx="335" cy="140" r="3"/><circle cx="348" cy="150" r="3"/><circle cx="361" cy="170" r="3"/><circle cx="374" cy="160" r="3"/><circle cx="387" cy="180" r="3"/><circle cx="400" cy="180" r="3"/></g>
<line x1="470" y1="190" x2="615" y2="62" style="stroke:var(--ink-2)" stroke-width="1.5"/>
<g style="fill:var(--teal)"><circle cx="476" cy="182" r="3.2"/><circle cx="484" cy="186" r="3.2"/><circle cx="490" cy="170" r="3.2"/><circle cx="497" cy="176" r="3.2"/><circle cx="505" cy="162" r="3.2"/><circle cx="512" cy="170" r="3.2"/><circle cx="520" cy="150" r="3.2"/><circle cx="526" cy="158" r="3.2"/><circle cx="534" cy="140" r="3.2"/><circle cx="541" cy="148" r="3.2"/><circle cx="548" cy="128" r="3.2"/><circle cx="556" cy="136" r="3.2"/><circle cx="563" cy="116" r="3.2"/><circle cx="570" cy="124" r="3.2"/><circle cx="578" cy="104" r="3.2"/><circle cx="586" cy="110" r="3.2"/><circle cx="594" cy="92" r="3.2"/><circle cx="602" cy="98" r="3.2"/><circle cx="610" cy="78" r="3.2"/><circle cx="606" cy="70" r="3.2"/></g>
<path d="M40,40 V200 H202 M250,40 V200 H412 M460,40 V200 H622" style="fill:none;stroke:var(--ink)" stroke-width="1.5"/>
<text x="36" y="204" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">0</text>
<text x="36" y="129" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">25</text>
<text x="36" y="54" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">50</text>
<text x="65" y="214" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink)">A</text>
<text x="103" y="214" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink)">B</text>
<text x="141" y="214" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink)">AB</text>
<text x="179" y="214" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink)">O</text>
<text x="120" y="232" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink)">Blood group</text>
<text x="18" y="120" text-anchor="middle" font-family="inherit" font-size="11.5" transform="rotate(-90 18 120)" style="fill:var(--ink)">% of population</text>
<text x="246" y="204" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">65</text>
<text x="246" y="154" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">70</text>
<text x="246" y="104" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">75</text>
<text x="246" y="54" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">80</text>
<text x="257" y="214" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">1</text>
<text x="400" y="214" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">12</text>
<text x="330" y="232" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink)">Week of exercise</text>
<text x="226" y="125" text-anchor="middle" font-family="inherit" font-size="11.5" transform="rotate(-90 226 125)" style="fill:var(--ink)">Heart rate (bpm)</text>
<text x="540" y="232" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink)">Height (cm)</text>
<text x="446" y="120" text-anchor="middle" font-family="inherit" font-size="11.5" transform="rotate(-90 446 120)" style="fill:var(--ink)">Mass (kg)</text>
<text x="110" y="248" text-anchor="middle" font-family="inherit" font-size="11.5" font-style="italic" style="fill:var(--ink-2)">separate categories</text>
<text x="330" y="248" text-anchor="middle" font-family="inherit" font-size="11.5" font-style="italic" style="fill:var(--ink-2)">change over time</text>
<text x="540" y="248" text-anchor="middle" font-family="inherit" font-size="11.5" font-style="italic" style="fill:var(--ink-2)">relationship between two variables</text>
</svg>
<figcaption>The slide examples redrawn. Bars stand apart because blood groups are separate categories; line-graph points are joined in time order; scatter-plot points are not joined, and a trendline shows the overall relationship.</figcaption>
</figure>
<h4>Bar graph</h4>
<ul>
  <li>Compares <strong>discrete, non-continuous categories</strong>: groups with nothing "in between" them.</li>
  <li>Used to make <strong>side-by-side comparisons</strong>.</li>
</ul>
<p>The slide's example compares the percentage of a population with each blood group: A, B, AB and O. There is no blood group halfway between A and B, so the categories are separate, and the bars are drawn with gaps between them. The y-axis should start at zero, so the bar heights are a fair comparison. Examples from this unit: the number of mitochondria in muscle, fat and red blood cells, or the amount of starch in different foods.</p>
<h4>Line graph</h4>
<ul>
  <li>Shows <strong>continuous change over time</strong>.</li>
  <li>The data follow a <strong>sequential order</strong> (such as time), so each point is joined to the next one.</li>
</ul>
<p>The slide's example tracks one person's resting heart rate every week for 12 weeks of exercise. It falls from about 78 to about 67 beats per minute, with small ups and downs along the way. Joining the points makes sense because week 3 really does come between week 2 and week 4. The steepness of the line tells you the rate of change: a steeper drop means a faster change. Examples from this unit: the volume of oxygen produced by catalase every 30 seconds, or the colour change as dye diffuses over time.</p>
<h4>Scatter plot</h4>
<ul>
  <li>Shows a <strong>relationship or correlation between two variables</strong>.</li>
  <li>Used when the data points are <strong>not connected in sequence</strong>: each point is a separate measurement, such as a different person.</li>
  <li>Example from the slide: comparing the height and weight of different people.</li>
</ul>
<p>Instead of joining the points, you draw a single <span class="term">trendline</span> (line of best fit) through the middle of them, with about as many points above it as below. If the pattern is curved, draw a smooth <strong>trend curve</strong> instead; one slide example is a U-shaped curve.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Connecting the dots on a scatter plot. Each point is a different individual, so a line from one person's point to the next means nothing. Draw one best-fit line or curve. And do not use a bar graph for continuous data (like temperature): there <em>are</em> values in between, and a line or scatter graph shows them.</p></div>

<h3 data-tier="essential">Reading a scatter plot: correlation and strength</h3>
<p>A scatter plot can show three kinds of correlation:</p>
<ul>
  <li><strong>Positive correlation:</strong> both variables increase together. The points trend up to the right.</li>
  <li><strong>Negative correlation:</strong> one variable increases while the other decreases. The points trend down to the right.</li>
  <li><strong>No correlation:</strong> randomly scattered dots with no pattern. Changing x tells you nothing about y.</li>
</ul>
<p>The <strong>distance of the points from the trendline or trend curve</strong> tells you the <strong>strength of the relationship</strong>. The vertical distance from a point to the line is called a <span class="term">residual</span>. Small residuals (points hugging the line) mean a strong relationship: if you know x, you can predict y well. Large residuals (points spread widely) mean a weak relationship.</p>
<figure class="diagram">
<svg viewBox="0 0 640 378" role="img" aria-labelledby="b111-t2">
<title id="b111-t2">Top row: three scatter plots showing positive correlation, with points rising to the right; no correlation, with randomly scattered points; and negative correlation, with points falling to the right. Bottom row: two plots with the same trendline. On the left the points sit close to the line with short residuals, a strong relationship. On the right the points are far from the line with long residuals, a weak relationship.</title>
<g style="fill:var(--surface);stroke:var(--line)" stroke-width="1"><rect x="20" y="20" width="180" height="134"/><rect x="230" y="20" width="180" height="134"/><rect x="440" y="20" width="180" height="134"/><rect x="20" y="214" width="290" height="124"/><rect x="330" y="214" width="290" height="124"/></g>
<g style="stroke:var(--ink-2)" stroke-width="1.5"><line x1="32" y1="146" x2="190" y2="50"/><line x1="452" y1="50" x2="610" y2="146"/><line x1="30" y1="320" x2="300" y2="226"/><line x1="340" y1="320" x2="610" y2="226"/></g>
<line x1="240" y1="95" x2="400" y2="95" style="stroke:var(--ink-2)" stroke-width="1.5" stroke-dasharray="5 4"/>
<g style="fill:var(--teal)"><circle cx="38" cy="142" r="3.5"/><circle cx="50" cy="130" r="3.5"/><circle cx="60" cy="136" r="3.5"/><circle cx="72" cy="118" r="3.5"/><circle cx="84" cy="122" r="3.5"/><circle cx="96" cy="104" r="3.5"/><circle cx="108" cy="110" r="3.5"/><circle cx="120" cy="92" r="3.5"/><circle cx="132" cy="96" r="3.5"/><circle cx="146" cy="78" r="3.5"/><circle cx="160" cy="72" r="3.5"/><circle cx="176" cy="58" r="3.5"/></g>
<g style="fill:var(--ink-2)"><circle cx="250" cy="60" r="3.5"/><circle cx="270" cy="120" r="3.5"/><circle cx="290" cy="90" r="3.5"/><circle cx="305" cy="140" r="3.5"/><circle cx="325" cy="70" r="3.5"/><circle cx="340" cy="110" r="3.5"/><circle cx="360" cy="50" r="3.5"/><circle cx="372" cy="130" r="3.5"/><circle cx="385" cy="85" r="3.5"/><circle cx="300" cy="104" r="3.5"/><circle cx="352" cy="140" r="3.5"/><circle cx="395" cy="60" r="3.5"/></g>
<g style="fill:var(--red)"><circle cx="458" cy="58" r="3.5"/><circle cx="470" cy="66" r="3.5"/><circle cx="480" cy="62" r="3.5"/><circle cx="492" cy="80" r="3.5"/><circle cx="504" cy="76" r="3.5"/><circle cx="516" cy="94" r="3.5"/><circle cx="528" cy="90" r="3.5"/><circle cx="540" cy="108" r="3.5"/><circle cx="552" cy="104" r="3.5"/><circle cx="566" cy="122" r="3.5"/><circle cx="580" cy="128" r="3.5"/><circle cx="596" cy="142" r="3.5"/></g>
<g style="stroke:var(--amber)" stroke-width="1.5"><line x1="45" y1="311" x2="45" y2="315"/><line x1="70" y1="309" x2="70" y2="306"/><line x1="95" y1="294" x2="95" y2="297"/><line x1="120" y1="292" x2="120" y2="289"/><line x1="145" y1="277" x2="145" y2="280"/><line x1="170" y1="274" x2="170" y2="271"/><line x1="195" y1="259" x2="195" y2="263"/><line x1="220" y1="257" x2="220" y2="254"/><line x1="245" y1="242" x2="245" y2="245"/><line x1="270" y1="239" x2="270" y2="236"/><line x1="290" y1="227" x2="290" y2="230"/>
<line x1="355" y1="296" x2="355" y2="315"/><line x1="380" y1="326" x2="380" y2="306"/><line x1="405" y1="272" x2="405" y2="297"/><line x1="430" y1="312" x2="430" y2="289"/><line x1="455" y1="254" x2="455" y2="280"/><line x1="480" y1="296" x2="480" y2="271"/><line x1="505" y1="240" x2="505" y2="263"/><line x1="530" y1="278" x2="530" y2="254"/><line x1="555" y1="222" x2="555" y2="245"/><line x1="580" y1="258" x2="580" y2="236"/><line x1="600" y1="222" x2="600" y2="230"/></g>
<g style="fill:var(--blue)"><circle cx="45" cy="311" r="3.5"/><circle cx="70" cy="309" r="3.5"/><circle cx="95" cy="294" r="3.5"/><circle cx="120" cy="292" r="3.5"/><circle cx="145" cy="277" r="3.5"/><circle cx="170" cy="274" r="3.5"/><circle cx="195" cy="259" r="3.5"/><circle cx="220" cy="257" r="3.5"/><circle cx="245" cy="242" r="3.5"/><circle cx="270" cy="239" r="3.5"/><circle cx="290" cy="227" r="3.5"/>
<circle cx="355" cy="296" r="3.5"/><circle cx="380" cy="326" r="3.5"/><circle cx="405" cy="272" r="3.5"/><circle cx="430" cy="312" r="3.5"/><circle cx="455" cy="254" r="3.5"/><circle cx="480" cy="296" r="3.5"/><circle cx="505" cy="240" r="3.5"/><circle cx="530" cy="278" r="3.5"/><circle cx="555" cy="222" r="3.5"/><circle cx="580" cy="258" r="3.5"/><circle cx="600" cy="222" r="3.5"/></g>
<text x="110" y="172" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--teal)">Positive correlation</text>
<text x="110" y="188" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">both increase together</text>
<text x="320" y="172" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">No correlation</text>
<text x="320" y="188" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">random scatter, no pattern</text>
<text x="530" y="172" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--red)">Negative correlation</text>
<text x="530" y="188" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">one rises as the other falls</text>
<text x="165" y="356" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Small residuals: strong relationship</text>
<text x="165" y="372" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">points close to the trendline</text>
<text x="475" y="356" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Large residuals: weak relationship</text>
<text x="475" y="372" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">points far from the trendline</text>
</svg>
<figcaption>Top: the three kinds of correlation. Bottom: both plots have the same trendline (a positive correlation), but the amber residuals are much longer on the right, so that relationship is weaker.</figcaption>
</figure>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Correlation does not prove causation. Ice cream sales and sunburns rise together, but ice cream does not cause sunburn; hot sunny weather causes both. A scatter plot shows that two variables are related. Only a controlled experiment, changing one variable while holding the others constant, can show that one causes the other.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>When asked to describe a scatter plot, give <strong>both</strong> the direction (positive, negative or none) <strong>and</strong> the strength (strong or weak, judged by how close the points are to the trendline). "A strong positive correlation" earns more than "it goes up."</p></div>

<h3 data-tier="essential">Choosing the right graph</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>Your data</th><th>Graph</th><th>Why</th></tr></thead><tbody>
<tr><td>Separate categories (cell types, blood groups, species, foods)</td><td>Bar graph</td><td>Nothing exists between categories; bars compare them side by side</td></tr>
<tr><td>One thing measured repeatedly over time</td><td>Line graph</td><td>Points follow a sequence, so joining them shows the change</td></tr>
<tr><td>Two measured variables for many separate individuals or trials</td><td>Scatter plot with trendline</td><td>Shows whether, and how strongly, the variables are related</td></tr>
</tbody></table></div>
<details class="check"><summary>Which graph? (a) Average number of lysosomes in four cell types. (b) Volume of O<sub>2</sub> produced by catalase every 30 s for 5 min. (c) Body mass and heart rate of 30 different mammals.</summary><div class="ans"><p>(a) <strong>Bar graph</strong>: the cell types are discrete categories. (b) <strong>Line graph</strong>: one reaction followed through time, in sequence. (c) <strong>Scatter plot</strong>: two variables measured on many separate animals; you would look for a correlation (in fact larger mammals have slower heart rates, a negative correlation).</p></div></details>
<details class="check"><summary>A student plots "Time to Dissolve vs. Water Temperature" and gets points that fall steeply and then level off. Describe the relationship.</summary><div class="ans"><p>A <strong>negative</strong> relationship: as water temperature increases, the time to dissolve decreases (sugar dissolves faster). Because the points level off, the relationship is <strong>curved</strong>, not linear: raising the temperature has a big effect at low temperatures and less effect at high temperatures. A trend curve, not a straight line, fits it best.</p></div></details>

<h3 data-tier="likely">Worked example: graphing osmosis data</h3>
<p>A classic lab connects this lesson to lesson 1.10. Cores of potato are weighed, soaked in sucrose solutions of different concentrations, and weighed again. The independent variable is the <strong>sucrose concentration</strong> (x-axis); the dependent variable is the <strong>percentage change in mass</strong> (y-axis). Percentage change is used instead of raw mass because the cores do not all start at exactly the same mass; percentages make them comparable.</p>
<figure class="diagram">
<svg viewBox="0 0 640 300" role="img" aria-labelledby="b111-t3">
<title id="b111-t3">Percent change in mass of potato cores against sucrose concentration from 0 to 1.0 moles per litre. Mass rises about 18 percent in pure water, and the curve falls as concentration increases, crossing zero at about 0.32 moles per litre and reaching about minus 24 percent at 1.0. Above zero the cells gained water because the solution was hypotonic; below zero they lost water because it was hypertonic. The crossing point is where the solution is isotonic to the cells.</title>
<g style="stroke:var(--line)" stroke-width="1"><line x1="80" y1="30" x2="600" y2="30"/><line x1="80" y1="74" x2="600" y2="74"/><line x1="80" y1="162" x2="600" y2="162"/><line x1="80" y1="206" x2="600" y2="206"/></g>
<line x1="80" y1="118" x2="600" y2="118" style="stroke:var(--ink-2)" stroke-width="1.5" stroke-dasharray="6 4"/>
<path d="M80,30 V250 H602" style="fill:none;stroke:var(--ink)" stroke-width="1.5"/>
<path d="M80,39 C130,66 160,82 184,92 S250,124 288,136 S360,162 392,171 S460,194 496,202 S570,218 600,224" style="fill:none;stroke:var(--blue)" stroke-width="2"/>
<g style="fill:var(--blue)"><circle cx="80" cy="39" r="4"/><circle cx="184" cy="92" r="4"/><circle cx="288" cy="136" r="4"/><circle cx="392" cy="171" r="4"/><circle cx="496" cy="202" r="4"/><circle cx="600" cy="224" r="4"/></g>
<circle cx="246" cy="118" r="7" style="fill:none;stroke:var(--red)" stroke-width="2"/>
<text x="72" y="34" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">+20</text>
<text x="72" y="78" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">+10</text>
<text x="72" y="122" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">0</text>
<text x="72" y="166" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">−10</text>
<text x="72" y="210" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">−20</text>
<text x="72" y="254" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">−30</text>
<text x="80" y="266" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">0</text>
<text x="184" y="266" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">0.2</text>
<text x="288" y="266" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">0.4</text>
<text x="392" y="266" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">0.6</text>
<text x="496" y="266" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">0.8</text>
<text x="600" y="266" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">1.0</text>
<text x="340" y="290" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Sucrose concentration (mol/L)</text>
<text x="26" y="140" text-anchor="middle" font-family="inherit" font-size="12" transform="rotate(-90 26 140)" style="fill:var(--ink)">Change in mass (%)</text>
<text x="300" y="54" font-family="inherit" font-size="12" style="fill:var(--ink)">Above 0: cores gained water</text>
<text x="300" y="70" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">(solution hypotonic to the cells)</text>
<text x="430" y="134" font-family="inherit" font-size="12" style="fill:var(--ink)">Below 0: cores lost water</text>
<text x="430" y="150" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">(solution hypertonic)</text>
<text x="258" y="108" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--red)">isotonic point, about 0.32 mol/L</text>
</svg>
<figcaption>Sample data for potato cores. Where the trend curve crosses zero change in mass, there was no net movement of water: that solution is isotonic to the potato cells.</figcaption>
</figure>
<p>Reading the graph uses everything from lesson 1.10. Above the zero line the cores gained mass, so water moved <strong>in</strong>: those solutions were <strong>hypotonic</strong> to the potato cells. Below the zero line they lost mass, so the solutions were <strong>hypertonic</strong>. Where the curve crosses zero, there was no net movement of water, so that concentration (about 0.32 mol/L here) is <strong>isotonic</strong> to the cells. That is an estimate of the solute concentration inside the potato cells, a value you could not measure directly.</p>
<p>Notice the choice of graph: the concentrations are continuous, so a scatter plot with a smooth trend curve is right, and the curve lets you read off a value <strong>between</strong> the concentrations you actually tested. Reading between data points like this is called <strong>interpolation</strong>.</p>
<details class="check"><summary>Using the graph, predict what happens to a potato core in 0.7 mol/L sucrose, and explain.</summary><div class="ans"><p>It <strong>loses mass</strong> (roughly 15%). 0.7 mol/L is above the isotonic point, so the solution is <strong>hypertonic</strong> to the potato cells: water moves out of the cells by osmosis, and the cells may plasmolyze.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
  <li>Independent variable: what you change, on the x-axis. Dependent variable: what you measure, on the y-axis. Title the graph "y vs. x." Keep all other variables controlled.</li>
  <li>Label both axes with units and use even scales.</li>
  <li><strong>Bar graph</strong>: discrete, non-continuous categories; side-by-side comparisons.</li>
  <li><strong>Line graph</strong>: continuous change over time; points joined in sequence.</li>
  <li><strong>Scatter plot</strong>: relationship between two variables; points not joined; one trendline or trend curve.</li>
  <li>Correlation can be positive, negative or none. Points close to the trendline (small residuals) mean a strong relationship; points far from it mean a weak one. Correlation alone does not prove causation.</li>
</ul>
`
});
