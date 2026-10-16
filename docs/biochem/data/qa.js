/* Class questions & answers: every question the class was given in Unit 1 (Biochemistry), with model answers.
   The class answer keys are the authority for what earns marks. A "note" flags where a key is terse or needs a fuller/corrected explanation. */
window.QA = window.QA || [];

/* ------------------------------------------------------------------ 1.01 */
window.QA.push({
  id: "qa-101",
  title: "Chemistry Basics & Water: review & application",
  lesson: "1.01",
  source: "Lesson 1.01 slides (Application & Review Questions) and the class answer key \"Chemistry Basics & Water Review & Application Questions\"",
  items: [
    {
      tier: "essential",
      q: "Write oxygen-16 in standard atomic notation.",
      a: `<div class="eq"><sup>16</sup><sub>8</sub>O</div>
<ul>
<li>The <strong>mass number</strong> (A = protons + neutrons) goes at the top left: <strong>16</strong>.</li>
<li>The <strong>atomic number</strong> (Z = number of protons) goes at the bottom left: <strong>8</strong>. Every oxygen atom has 8 protons; that is what makes it oxygen.</li>
<li>The chemical symbol goes to the right: <strong>O</strong>.</li>
</ul>
<p>From the notation you can work out the particles: neutrons = A − Z = 16 − 8 = <strong>8 neutrons</strong>. A neutral atom has as many electrons as protons, so it also has 8 electrons.</p>`
    },
    {
      tier: "essential",
      q: "Describe how ions are formed. Use magnesium and nitrogen as your two examples.",
      a: `<p>An <span class="term">ion</span> forms when an atom <strong>loses or gains electrons</strong> so that its outer (valence) shell becomes full and stable, like the nearest noble gas. Protons do not change, so the charge becomes unbalanced.</p>
<ul>
<li><strong>Magnesium</strong> (12 protons, electrons 2, 8, 2) is a metal with <strong>2 valence electrons</strong>. It is easier to lose 2 than to gain 6, so it <strong>loses 2 electrons</strong> and becomes the <span class="term">cation</span> <strong>Mg<sup>2+</sup></strong> (12 protons, 10 electrons).</li>
<li><strong>Nitrogen</strong> (7 protons, electrons 2, 5) is a non-metal with <strong>5 valence electrons</strong>. It is easier to gain 3 than to lose 5, so it <strong>gains 3 electrons</strong> and becomes the <span class="term">anion</span> <strong>N<sup>3−</sup></strong> (7 protons, 10 electrons).</li>
</ul>
<p>Both ions end up with the same stable electron arrangement as neon (2, 8). Pattern to remember: metals lose electrons and form positive cations; non-metals gain electrons and form negative anions.</p>`
    },
    {
      tier: "essential",
      q: "Describe the difference between a stable isotope and a radioisotope.",
      a: `<p><span class="term">Isotopes</span> are atoms of the same element (same number of protons) with different numbers of neutrons.</p>
<ul>
<li>A <span class="term">stable isotope</span> has a stable nucleus, so it <strong>does not change or decay over time</strong>. Example: carbon-12 (6 protons, 6 neutrons).</li>
<li>A <span class="term">radioisotope</span> has an <strong>unstable nucleus</strong> (for example, too many neutrons or protons). It <strong>spontaneously decays and emits radiation</strong> until it reaches a stable form.</li>
</ul>
<p>Example from the key: carbon-14 has 6 protons and 8 neutrons. Over time one neutron changes into a proton and energy is released, so the atom becomes stable <strong>nitrogen-14</strong> (7 protons, 7 neutrons).</p>
<p>Because isotopes of an element behave the same way chemically, cells use a radioisotope exactly like the stable form. That is why radioisotopes such as carbon-14 can be used as <span class="term">tracers</span> in biology and medicine: you can follow where the radioactive atoms go.</p>`
    },
    {
      tier: "extra",
      q: "Research the use of iodine as a cancer treatment.",
      a: `<p>The <strong>thyroid gland</strong> needs iodine to make its hormones, so it is the only tissue in the body that actively absorbs large amounts of iodine.</p>
<ul>
<li>Patients with <strong>thyroid cancer</strong> (usually after surgery to remove the thyroid) are given the radioisotope <strong>iodine-131</strong>, which has a half-life of about <strong>8 days</strong>.</li>
<li>It is swallowed, travels through the bloodstream, and is taken up by the thyroid tissue just like normal iodine, because a radioisotope behaves the same way chemically as the stable form.</li>
<li>The radiation it gives off destroys the cancer cells (and any remaining healthy thyroid cells).</li>
<li>It is a targeted treatment: other cells do not absorb iodine, and the radiation only penetrates about <strong>1–2 mm</strong> of tissue, so surrounding tissues are mostly spared. That makes it safer than many other forms of radiation therapy.</li>
</ul>`
    },
    {
      tier: "essential",
      q: "Compare and contrast ionic and covalent bonding.",
      a: `<div class="table-wrap"><table class="data"><thead><tr><th></th><th>Ionic bond</th><th>Covalent bond</th></tr></thead><tbody>
<tr><td>What happens to electrons</td><td>Electrons are <strong>transferred</strong> from one atom to another</td><td>Electrons are <strong>shared</strong> (equally or unequally) between atoms</td></tr>
<tr><td>Typical atoms</td><td>Metal + non-metal</td><td>Non-metal + non-metal (can also include metalloids and some transition metals)</td></tr>
<tr><td>Electronegativity difference</td><td>Large (greater than about 1.7)</td><td>Smaller: nonpolar covalent (less than 0.5) or polar covalent (0.5–1.7)</td></tr>
<tr><td>What holds it together</td><td>Electrostatic attraction between a positive cation and a negative anion</td><td>Both nuclei attracting the shared pair of electrons</td></tr>
<tr><td>Example</td><td>NaCl (Na<sup>+</sup> and Cl<sup>−</sup>)</td><td>H<sub>2</sub>O, CH<sub>4</sub>, glucose</td></tr>
</tbody></table></div>
<p><strong>Similarities:</strong> both are <span class="term">intramolecular forces</span> (strong forces holding atoms together within a compound), both give the atoms a more stable full valence shell, and both are broken and re-formed only during chemical reactions.</p>`
    },
    {
      tier: "likely",
      q: "Which type of bonding is more common in BIOLOGICAL SYSTEMS, where the most common elements are carbon, hydrogen, oxygen and nitrogen? Explain your reasoning.",
      a: `<p><strong>Covalent bonding.</strong> Carbon, hydrogen, oxygen and nitrogen are all <strong>non-metals</strong>. Their electronegativities are too close for one atom to pull electrons completely away from another, so they <strong>share</strong> electrons instead of transferring them.</p>
<p>Carbon is especially important: with 4 valence electrons it forms 4 stable covalent bonds, building the long carbon backbones of the four macromolecules in this unit (carbohydrates, lipids, proteins and nucleic acids). These strong covalent bonds keep the molecules intact in the watery environment of the cell.</p>
<p>Ions still matter in living things (Na<sup>+</sup>, K<sup>+</sup>, Ca<sup>2+</sup>, Cl<sup>−</sup>, and ionic attractions between R groups that help fold proteins), but the bonds that make up biological molecules are mostly covalent.</p>`
    },
    {
      tier: "likely",
      q: "Look at the periodic table. Which element has the highest electronegativity? Which region of the periodic table has the highest values?",
      a: `<p><strong>Fluorine</strong> has the highest electronegativity (about 4.0).</p>
<p>Electronegativity <strong>increases from left to right across a period</strong> and <strong>from bottom to top within a group (family)</strong>. So the highest values are in the <strong>top right corner</strong> of the periodic table, <em>excluding the noble gases</em> (group 18), which do not normally form bonds.</p>
<p>Why it matters in biology: oxygen (about 3.4) and nitrogen (about 3.0) are far more electronegative than hydrogen (about 2.2) and carbon (about 2.6). That is why O–H and N–H bonds are polar, while C–H bonds are nonpolar.</p>`
    },
    {
      tier: "essential",
      q: "Determine if the molecules below are polar or nonpolar, and explain WHY: (a) ammonia (NH<sub>3</sub>), (b) oxygen (O<sub>2</sub>), (c) carbon dioxide (CO<sub>2</sub>), (d) phosphate ion (PO<sub>4</sub><sup>3−</sup>).",
      a: `<p>Polarity depends on two things: whether the bonds are polar (electronegativity difference) <strong>and</strong> the shape. A symmetrical shape makes the bond dipoles cancel.</p>
<ul>
<li><strong>(a) Ammonia, NH<sub>3</sub>: polar.</strong> Nitrogen has 5 valence electrons. It shares one with each of the 3 hydrogens, which leaves <strong>one lone pair</strong> on the nitrogen. The lone pair pushes the molecule into a pyramid shape, so the polar N–H dipoles do not cancel.</li>
<li><strong>(b) Oxygen, O<sub>2</sub>: nonpolar.</strong> Both atoms are the same element with the same electronegativity, so the electrons are shared equally.</li>
<li><strong>(c) Carbon dioxide, CO<sub>2</sub>: nonpolar.</strong> Each C=O double bond is polar, but the central carbon has no lone pairs and the molecule is <strong>linear and symmetrical</strong> (O=C=O). The two dipoles point in opposite directions and cancel.</li>
<li><strong>(d) Phosphate ion, PO<sub>4</sub><sup>3−</sup>: nonpolar (by shape).</strong> The central phosphorus is surrounded by 4 oxygens and no lone pairs, so the shape is symmetrical and the bond dipoles cancel. But it is a polyatomic <em>ion</em> with an overall 3− charge, so it can still take part in ion–dipole and ionic interactions.</li>
</ul>`,
      note: `For (d), the key's "nonpolar" only describes the cancelled bond dipoles. Because PO<sub>4</sub><sup>3−</sup> carries a full charge, it behaves as a strongly <strong>hydrophilic</strong> particle: water surrounds it through ion–dipole attractions, so it dissolves (see the "which would dissolve" question). Polarity labels are really meant for neutral molecules.`
    },
    {
      tier: "essential",
      q: "Why is hydrogen bonding so special?",
      a: `<p>A <span class="term">hydrogen bond</span> is a <strong>special, extra-strong dipole–dipole attraction</strong> between a hydrogen atom bonded to N, O or F and a lone pair on a nearby N, O or F atom.</p>
<ul>
<li><strong>Huge electronegativity difference.</strong> N, O and F are very electronegative, so they pull the shared electrons almost completely away from hydrogen. That leaves the hydrogen with a large partial positive charge (δ+), almost a bare proton.</li>
<li><strong>Tiny atoms.</strong> Hydrogen is the smallest atom, and N, O and F are also small. The partial charges can get physically very close, and the closer two opposite charges are, the stronger the attraction.</li>
</ul>
<p>The result is the strongest of the dipole-type intermolecular forces (about 10–40 kJ/mol). It is still much weaker than a covalent bond, so hydrogen bonds can break and re-form easily. They explain water's special properties and hold together DNA base pairs and protein secondary structure.</p>`
    },
    {
      tier: "essential",
      q: "Rank the inter- and intramolecular forces in order of increasing strength.",
      a: `<div class="eq">London dispersion &lt; dipole–dipole &lt; hydrogen bonding &lt; ion–dipole &lt;&lt; covalent and ionic bonds</div>
<p><strong>Intramolecular forces</strong> (bonds <em>within</em> a molecule or compound) are much stronger than <strong>intermolecular forces</strong> (attractions <em>between</em> molecules). Chemical reactions break and re-form intramolecular bonds; physical changes such as boiling only disrupt intermolecular forces.</p>
<ul>
<li><strong>Intramolecular:</strong> ionic bonds (electrostatic attraction between a cation and an anion) and covalent bonds. Polar covalent bonds are stronger than nonpolar covalent bonds because the partial charges add an electrostatic attraction.</li>
</ul>
<p><strong>Intermolecular forces, weakest to strongest:</strong></p>
<ol>
<li><strong>London dispersion forces</strong>: weak, temporary attractions in <em>all</em> atoms and molecules. Electrons move randomly; if for an instant more electrons are on one side, that side becomes slightly negative and induces a dipole in neighbouring particles.</li>
<li><strong>Dipole–dipole</strong>: stronger, permanent attractions between <em>polar</em> molecules. The fixed δ+ end of one molecule attracts the δ− end of its neighbour.</li>
<li><strong>Hydrogen bonding</strong>: a special, very strong dipole–dipole between H and N, O or F, caused by the extreme electronegativity difference and small atomic sizes.</li>
<li><strong>Ion–dipole</strong>: the strongest. An ion's <em>full</em> charge attracts the opposite partial charge of a polar molecule (for example, Na<sup>+</sup> surrounded by the δ− oxygens of water).</li>
</ol>`,
      note: `Ion–dipole is listed with the intermolecular forces on the slides, but the key points out that an ion is not a molecule, so it is not technically an <em>inter</em>molecular force. Also, London forces grow with the size of the molecule (more electrons), which is why large nonpolar molecules like fats can still be solid.`
    },
    {
      tier: "likely",
      q: "Research: how is hydrogen bonding used in protein and nucleic acid structure?",
      a: `<h4>Proteins</h4>
<ul>
<li><strong>Secondary structure:</strong> hydrogen bonds form along the polypeptide backbone, between the <strong>oxygen of the carbonyl group (C=O)</strong> of one amino acid and the <strong>hydrogen of the amino group (N–H)</strong> of another. Repeated hydrogen bonds coil the chain into an <span class="term">alpha helix</span> or fold it into a <span class="term">beta pleated sheet</span>.</li>
<li><strong>Tertiary structure:</strong> hydrogen bonds also form between the side chains (R groups) of different amino acids, helping fold the protein into its specific 3D shape.</li>
</ul>
<h4>Nucleic acids</h4>
<ul>
<li>The two strands of DNA are held together by hydrogen bonds between complementary <strong>nitrogenous bases</strong>: A–T with 2 hydrogen bonds and G–C with 3.</li>
<li>Each hydrogen bond is weak, so the strands can be "unzipped" for replication and transcription. Millions of them together keep the double helix stable.</li>
</ul>`
    },
    {
      tier: "essential",
      q: "What is the difference between adhesion and cohesion?",
      a: `<ul>
<li><span class="term">Cohesion</span>: the attraction of water (a fluid) to <strong>itself</strong>, through hydrogen bonds between water molecules. It causes surface tension.</li>
<li><span class="term">Adhesion</span>: the attraction of water to <strong>other</strong> polar or charged molecules and surfaces, through hydrogen bonds. Example: water clinging to the walls of xylem vessels or a glass tube.</li>
</ul>
<p>Memory trick: <strong>co</strong>hesion = water with its <strong>co</strong>-workers (other water molecules); <strong>ad</strong>hesion = water <strong>ad</strong>ded to something else.</p>`
    },
    {
      tier: "likely",
      q: "What is capillary action and where is it used in biological systems?",
      a: `<p><span class="term">Capillary action</span> is the spontaneous movement of a fluid <strong>up a narrow tube or through a porous material, against gravity</strong>.</p>
<ul>
<li>It happens when <strong>adhesion is stronger than cohesion</strong>: water is attracted to the walls of the tube more than to itself, so it climbs the walls.</li>
<li>Both forces are needed. Adhesion makes the water stick to and climb the tube, and cohesion (with surface tension) pulls the rest of the water column up behind it.</li>
</ul>
<p><strong>Biological example:</strong> capillary action helps draw water up the narrow <strong>xylem</strong> vessels of plants (and through soil). In tall plants, <em>transpiration pull</em> (evaporation from the leaves pulling the cohesive water column up) is ultimately needed to lift water all the way.</p>`
    },
    {
      tier: "likely",
      q: "Using concepts of polarity, discuss why water is \"sticky\".",
      a: `<ul>
<li>Water is <strong>polar</strong>. Oxygen is much more electronegative than hydrogen and shares the electrons unequally, so oxygen is partially negative (δ−) and the two hydrogens are partially positive (δ+). The bent shape means these dipoles do not cancel.</li>
<li>The δ− oxygen of one molecule attracts the δ+ hydrogens of neighbouring molecules, forming strong <strong>hydrogen bonds</strong> that hold water together. This is <strong>cohesion</strong>.</li>
<li>Water's partial charges also attract other polar or charged molecules and surfaces, so water forms hydrogen bonds with other substances and sticks to them. This is <strong>adhesion</strong>.</li>
</ul>
<p>Cohesion and adhesion together make water "sticky", which leads to surface tension and capillary action.</p>`
    },
    {
      tier: "likely",
      q: "What would happen to the body if water had a LOW specific heat capacity? Explain.",
      a: `<p>Very little heat would be needed to change the temperature of the body, which is mostly water, so body temperature would swing up and down easily.</p>
<ul>
<li>Organisms could not properly <strong>maintain a constant body temperature</strong> (about 37 °C in humans). The heat released by metabolism alone could overheat the body, and cooling methods such as evaporative cooling (sweating) would be much less effective.</li>
<li><strong>Proteins would denature</strong> at high temperatures, and <strong>enzyme-catalyzed reactions would slow</strong> at low temperatures, so there would be a greater risk of cell damage.</li>
<li>Large bodies of water would no longer act as <strong>heat sinks</strong>. Lakes and oceans would heat up and cool down quickly, making it extremely hard for aquatic organisms to survive.</li>
</ul>`
    },
    {
      tier: "essential",
      q: "Why do hydrogen bonds give water a high specific heat capacity?",
      a: `<p>Temperature measures the average kinetic energy (movement) of the molecules. When heat is added to water, much of that thermal energy is used first to <strong>break the hydrogen bonds</strong> between water molecules, <strong>rather than to make the molecules move faster</strong>. So a lot of heat must be absorbed before the temperature rises.</p>
<p>The reverse is also true: as water cools, hydrogen bonds form and release heat, so water also gives up a lot of heat before its temperature drops. That is why water resists temperature change and helps keep the body at a constant temperature.</p>`
    },
    {
      tier: "likely",
      q: "Identify which of the following would dissolve in water: (a) ammonia (NH<sub>3</sub>), (b) oxygen (O<sub>2</sub>), (c) carbon dioxide (CO<sub>2</sub>), (d) phosphate ion (PO<sub>4</sub><sup>3−</sup>).",
      a: `<p>"Like dissolves like": water dissolves polar and ionic substances.</p>
<ul>
<li><strong>(a) Ammonia: dissolves.</strong> It is polar and forms hydrogen bonds with water (N–H bonds and a lone pair on N).</li>
<li><strong>(b) Oxygen: only somewhat.</strong> O<sub>2</sub> is nonpolar, but because it is small, a little dissolves. That is why we need <strong>hemoglobin</strong> in red blood cells to carry enough oxygen through the watery blood plasma.</li>
<li><strong>(c) Carbon dioxide: somewhat.</strong> CO<sub>2</sub> is nonpolar, but it is small, so some dissolves. It also <strong>reacts with water to form carbonic acid</strong> (H<sub>2</sub>CO<sub>3</sub>), which is part of the bicarbonate buffer that keeps blood pH stable and is linked to breathing rate.</li>
<li><strong>(d) Phosphate ion: dissolves.</strong> It carries an overall negative charge, so it forms <strong>ion–dipole</strong> attractions with the δ+ hydrogens of water.</li>
</ul>`
    },
    {
      tier: "essential",
      q: "Look at the image of the phospholipid molecule and identify the hydrophobic and hydrophilic ends. (The zig-zag lines are long hydrocarbon chains.)",
      a: `<ul>
<li><strong>Hydrophilic ("water-loving") end: the phosphate head.</strong> It is negatively charged and polar, so it attracts water molecules.</li>
<li><strong>Hydrophobic ("water-fearing") end: the two fatty acid tails.</strong> These are the zig-zag lines: long hydrocarbon chains made of nonpolar C–C and C–H bonds, which cannot form hydrogen bonds with water.</li>
</ul>
<p>A molecule with both a hydrophilic part and a hydrophobic part is called <span class="term">amphipathic</span>. In water, phospholipids arrange themselves with the heads facing the water and the tails hidden inside, forming the phospholipid bilayer of cell membranes.</p>`
    },
    {
      tier: "essential",
      q: "Be able to identify the types of reactions. What are the key identifying features of each?",
      a: `<div class="table-wrap"><table class="data"><thead><tr><th>Reaction type</th><th>Key identifying feature</th><th>Example</th></tr></thead><tbody>
<tr><td><strong>Acid–base</strong></td><td>A <strong>proton (H<sup>+</sup>) is transferred</strong> from an acid to a base</td><td>Bicarbonate buffer in blood</td></tr>
<tr><td><strong>Redox</strong> (oxidation–reduction)</td><td><strong>Electrons are transferred</strong>: one substance loses electrons (oxidized), another gains them (reduced)</td><td>Glucose is oxidized in cellular respiration; electron transport chains</td></tr>
<tr><td><strong>Dehydration synthesis</strong> (condensation)</td><td>Two molecules join by a new covalent bond and <strong>a water molecule is produced</strong></td><td>Building macromolecules: monomers → polymer</td></tr>
<tr><td><strong>Hydrolysis</strong></td><td>A covalent bond is broken by <strong>adding a water molecule</strong></td><td>Digesting a disaccharide into two monosaccharides</td></tr>
<tr><td><strong>Enzyme-catalyzed</strong></td><td>An enzyme <strong>lowers the activation energy</strong> so the reaction goes faster; the enzyme is not used up</td><td>Amylase breaking down starch</td></tr>
</tbody></table></div>
<h4>Buffers (acid–base)</h4>
<div class="eq">CO<sub>2</sub> + H<sub>2</sub>O ⇌ H<sub>2</sub>CO<sub>3</sub> ⇌ H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup></div>
<p>A buffer resists changes in pH, which keeps blood at pH 7.35–7.45 (homeostasis, by negative feedback). If blood pH drops, bicarbonate ions (HCO<sub>3</sub><sup>−</sup>) use up the extra H<sup>+</sup>. If pH rises, carbonic acid dissociates to release H<sup>+</sup>. Because CO<sub>2</sub> drives this equilibrium, breathing rate (controlled by the medulla oblongata) can be changed to remove more or less CO<sub>2</sub>.</p>
<h4>Metabolic reactions</h4>
<ul>
<li><span class="term">Anabolism</span>: builds complex molecules from simple ones (like a synthesis reaction). Examples: photosynthesis, building macromolecules by dehydration synthesis.</li>
<li><span class="term">Catabolism</span>: breaks complex molecules into simpler ones (like a decomposition reaction). Examples: cellular respiration, breaking down macromolecules by hydrolysis.</li>
</ul>
<p><strong>Enzymes</strong> lower the activation energy by straining the bonds in the substrate and holding the reactants in the best orientation. They are very specific to their substrates and are not used up.</p>`
    },
    {
      tier: "essential",
      q: "How is a catalyst different from a reactant in a chemical reaction?",
      a: `<ul>
<li>A <strong>reactant</strong> (in enzyme reactions, the <span class="term">substrate</span>) is <strong>used up</strong>: its bonds are broken or rearranged and it becomes the products.</li>
<li>A <span class="term">catalyst</span> <strong>speeds up</strong> the reaction by lowering the activation energy, but it is <strong>not consumed</strong>. It comes out of the reaction unchanged and can be used again, so it is not a reactant. (It is often written over the reaction arrow.)</li>
</ul>
<p>Enzymes are biological catalysts. The substrate has an affinity for the enzyme's <strong>active site</strong>, binds there briefly, is converted to products, and is released, leaving the enzyme free to catalyze the reaction again.</p>`
    }
  ]
});
/* end qa-101 */

/* ------------------------------------------------------------------ 1.02 */
window.QA.push({
  id: "qa-102",
  title: "Functional Groups & Macromolecules: research questions and worksheet",
  lesson: "1.02",
  source: "Lesson 1.02 slides (Application & Research Questions) with the class answer key, and the Functional Groups worksheet with its answer key",
  items: [
    {
      tier: "extra",
      q: "How are compounds mapped? (How do we know the precise structure of macromolecules?)",
      a: `<p>Chemists combine several instrument techniques, each giving one piece of the puzzle:</p>
<ul>
<li><strong>Nuclear magnetic resonance (NMR) spectroscopy</strong>: shows the chemical environment of each hydrogen and carbon atom. This lets you rebuild the carbon "skeleton" and work out where the functional groups are.</li>
<li><strong>Mass spectrometry (MS)</strong>: gives the molecular mass and breaks the molecule into fragments, which can be pieced together like a puzzle.</li>
<li><strong>Infrared (IR) spectroscopy</strong>: identifies functional groups (for example –OH or C=O) from the way their bonds vibrate.</li>
<li><strong>X-ray crystallography</strong>: if the compound can be crystallized, the pattern of scattered X-rays shows the 3D position of every atom directly.</li>
</ul>
<p>For very large macromolecules such as proteins, <strong>cryo-electron microscopy</strong> is also used to see their 3D shape.</p>`
    },
    {
      tier: "likely",
      q: "Phospholipids contain both hydrocarbon chains (–CH<sub>2</sub>–) and a phosphate group (–PO<sub>4</sub><sup>2−</sup>). Explain how these functional groups cause phospholipids to self-assemble into bilayers in water, and predict what would happen if the phosphate group were chemically removed.",
      a: `<p>Phospholipids are <span class="term">amphipathic</span>: they have a water-loving part and a water-fearing part.</p>
<ul>
<li>The long <strong>hydrocarbon chains</strong> (C–C and C–H bonds) are <strong>nonpolar and hydrophobic</strong>. They cannot hydrogen bond with water, so they are pushed away from it.</li>
<li>The <strong>phosphate group</strong> is <strong>polar and negatively charged</strong>, so it is <strong>hydrophilic</strong> and attracts water.</li>
</ul>
<p>In water, phospholipids <strong>spontaneously</strong> (no energy needed) form a <strong>bilayer</strong>. The tails of the two layers point inward toward each other, hidden from water, and the phosphate heads face outward toward the water on both sides (the cytosol and the extracellular fluid).</p>
<p><strong>If the phosphate group were removed</strong>, the molecule would lose its polar head and become almost fully hydrophobic, much like a fat. It would no longer form membranes; it would clump into oily droplets instead. Without bilayers, cells could not form a barrier that separates the inside from the outside and controls what passes through (selective permeability).</p>`
    },
    {
      tier: "likely",
      q: "Glucose has many hydroxyl groups (–OH). Relate the presence of these groups to the high solubility of glucose in blood plasma. How would this compare to the solubility of a lipid molecule, which mainly contains hydrocarbon chains?",
      a: `<ul>
<li>Each <strong>hydroxyl group</strong> is very polar (O is much more electronegative than H). Glucose has five of them, so it can form <strong>many hydrogen bonds with water molecules</strong>. Blood plasma is mostly water, so glucose dissolves easily and travels freely in the blood.</li>
<li>A <strong>lipid</strong> is mostly long <strong>hydrocarbon chains</strong>. C–H and C–C bonds are nonpolar and cannot hydrogen bond with water, so lipids are <strong>insoluble in water</strong>.</li>
</ul>
<p>Because lipids cannot dissolve in plasma, they must be carried in the blood packaged with proteins as <strong>lipoproteins</strong> (for example LDL and HDL), instead of dissolving freely like glucose.</p>`
    },
    {
      tier: "likely",
      q: "Hemoglobin's ability to bind oxygen depends partly on the amino (–NH<sub>2</sub>) and carboxyl (–COOH) groups of its amino acids. Predict how a drop in blood pH (increase in H<sup>+</sup> concentration) would affect the ionization state of these groups, and explain how this could alter protein folding or oxygen binding.",
      a: `<p>A lower pH means more H<sup>+</sup> ions in solution.</p>
<ul>
<li><strong>Amino groups</strong> act as bases and pick up the extra protons: <strong>–NH<sub>2</sub> → –NH<sub>3</sub><sup>+</sup></strong>, so they become positively charged.</li>
<li><strong>Carboxyl groups</strong> are less likely to give away their H<sup>+</sup>, so they <strong>stay in the non-ionized –COOH form</strong> instead of the negative –COO<sup>−</sup> form.</li>
</ul>
<p>These changes alter the <strong>charges on the amino acid side chains</strong>, so the ionic attractions and hydrogen bonds that hold hemoglobin's folded shape change. Since a protein's 3D shape determines its function, hemoglobin's shape shifts slightly and its <strong>ability to bind oxygen is reduced</strong>.</p>`,
      note: `This is useful in the body, not just harmful. Active muscles make CO<sub>2</sub> and acid, which lowers the local pH, so hemoglobin lets go of more O<sub>2</sub> exactly where it is needed most. This is called the <strong>Bohr effect</strong>. A large pH drop, however, could denature proteins.`
    },
    {
      tier: "essential",
      q: "Worksheet: identify and name the functional groups in each molecule shown (propanoic acid, cortisol, testosterone, a disaccharide, leucine, a phosphorylated vitamin B<sub>6</sub> molecule, and a short peptide containing cysteine).",
      a: `<div class="table-wrap"><table class="data"><thead><tr><th>Molecule</th><th>Functional groups in the key</th></tr></thead><tbody>
<tr><td>Propanoic acid (CH<sub>3</sub>CH<sub>2</sub>COOH)</td><td><strong>Carboxyl</strong> (–COOH) at the end of the chain</td></tr>
<tr><td>Cortisol (a steroid)</td><td><strong>3 hydroxyl</strong> groups (one on a ring, one on the side chain, one in the –CH<sub>2</sub>OH) and <strong>2 carbonyl</strong> groups (C=O on the first ring and on the side chain)</td></tr>
<tr><td>Testosterone (a steroid)</td><td><strong>Hydroxyl</strong> (–OH) on the five-carbon ring and <strong>carbonyl</strong> (C=O) on the first ring</td></tr>
<tr><td>Disaccharide (two glucose rings joined by a glycosidic linkage, like maltose)</td><td>Many <strong>hydroxyl</strong> groups (8 –OH), including the two in the –CH<sub>2</sub>OH groups</td></tr>
<tr><td>Leucine (an amino acid)</td><td><strong>Amino</strong> (–NH<sub>2</sub>) and <strong>carboxyl</strong> (–COOH); its R group is a nonpolar hydrocarbon</td></tr>
<tr><td>Vitamin B<sub>6</sub> (pyridoxal phosphate)</td><td><strong>Carbonyl</strong> (C=O, an aldehyde), <strong>hydroxyl</strong> (–OH) and <strong>phosphate</strong> (–OPO<sub>3</sub>H<sub>2</sub>)</td></tr>
<tr><td>Peptide with cysteine (glutathione)</td><td><strong>Amino</strong> (–NH<sub>3</sub><sup>+</sup>), <strong>carboxyl</strong> at both ends (one drawn ionized as –COO<sup>−</sup>), <strong>2 carbonyl</strong> groups (the C=O in each peptide bond) and <strong>sulfhydryl</strong> (–SH) on cysteine</td></tr>
</tbody></table></div>
<p>Tips for spotting groups: –OH on a carbon = hydroxyl; C=O with an –OH on the <em>same</em> carbon = carboxyl (not a carbonyl plus a hydroxyl); C=O alone = carbonyl; –NH<sub>2</sub> or –NH<sub>3</sub><sup>+</sup> = amino; –SH = sulfhydryl; P bonded to four O = phosphate.</p>`
    },
    {
      tier: "essential",
      q: "Worksheet: look at the structure of a carboxyl group. What makes it acidic in nature?",
      a: `<p>The <strong>hydrogen on the hydroxyl part</strong> of the carboxyl group (–COOH) can be removed and released as a proton (H<sup>+</sup>). By the <span class="term">Brønsted–Lowry definition</span>, an acid is a <strong>proton (H<sup>+</sup>) donor</strong>, so the carboxyl group is acidic.</p>
<div class="eq">CH<sub>3</sub>COOH + OH<sup>−</sup> ⇌ CH<sub>3</sub>COO<sup>−</sup> + H<sub>2</sub>O<br>acid + base ⇌ conjugate base + conjugate acid</div>
<p>Why this H comes off easily: two very electronegative oxygens pull electron density away from it, and after it leaves, the negative charge on the carboxylate ion (–COO<sup>−</sup>) is shared between both oxygens, which makes the ion stable. At the pH inside cells, most carboxyl groups are in the ionized –COO<sup>−</sup> form.</p>`
    },
    {
      tier: "likely",
      q: "Worksheet: do you think the phosphate group would act as an acid or a base? (Hint: Brønsted–Lowry bases are proton acceptors.)",
      a: `<p>In the fully ionized <strong>PO<sub>4</sub><sup>3−</sup> form it acts as a base</strong>. Its negatively charged oxygens can pull a hydrogen ion (H<sup>+</sup>) away from another molecule, and a proton acceptor is a Brønsted–Lowry base.</p>`,
      note: `It depends on the form. A phosphate group that still has H atoms (–OPO<sub>3</sub>H<sub>2</sub>) gives them away easily and acts as an <strong>acid</strong>. That is why DNA and RNA are nucleic <em>acids</em> and why phosphate groups are negatively charged in cells. Once the protons are gone, the group can accept them back and act as a base. Being able to do both is what makes phosphate a good buffer.`
    },
    {
      tier: "essential",
      q: "Worksheet: which functional groups do you think would be polar? How does this affect the function?",
      a: `<div class="table-wrap"><table class="data"><thead><tr><th>Polarity (class key)</th><th>Groups</th><th>Why</th></tr></thead><tbody>
<tr><td><strong>Very polar</strong></td><td>Carboxyl (–COOH), hydroxyl (–OH), amino (–NH<sub>2</sub>)</td><td>Contain O–H or N–H bonds, so they can <strong>hydrogen bond</strong> with water and with each other</td></tr>
<tr><td><strong>Medium polarity</strong></td><td>Carbonyl (C=O), phosphate</td><td>Polar bonds with oxygen, giving <strong>dipole–dipole</strong> attractions</td></tr>
<tr><td><strong>Low polarity</strong></td><td>Sulfhydryl (–SH)</td><td>S and H have similar electronegativities, so the bond is only slightly polar</td></tr>
</tbody></table></div>
<p><strong>Effect on function:</strong> polar groups make a molecule <strong>hydrophilic</strong> (soluble in water, the solvent of cells and blood). They also let molecules attract each other: hydrogen bonds and charge interactions hold DNA strands together and fold proteins into their shapes. Molecules made mostly of nonpolar hydrocarbon (like fats) are hydrophobic and insoluble.</p>`,
      note: `The slides rank carbonyl as "slightly polar" and sulfhydryl as "even less polar". The phosphate group is better thought of as <strong>very hydrophilic</strong>: at cell pH it carries negative charges, so water surrounds it through ion–dipole attractions. That is why the lipids lesson calls the phosphate head of a phospholipid "highly polar".`
    },
    {
      tier: "essential",
      q: "Worksheet (preview to carbohydrates): draw an alpha-glucose. What functional groups are present in this molecule? What properties do they confer to the molecule?",
      a: `<p>The key's short answer: <strong>"a bunch of hydroxyls!"</strong></p>
<ul>
<li>The ring form of α-glucose has <strong>five hydroxyl (–OH) groups</strong>: one each on carbons 1, 2, 3 and 4, and one on carbon 6 (in the –CH<sub>2</sub>OH group). See the numbered drawing in the Carbohydrates questions.</li>
<li>In its open-chain (linear) form, glucose also has a <strong>carbonyl group</strong> (C=O) at carbon 1. When glucose dissolves in water, this carbonyl reacts with the –OH on carbon 5 to close the ring.</li>
</ul>
<p><strong>Properties:</strong> the many hydroxyls make glucose <strong>very polar</strong>, so it forms many hydrogen bonds with water and is <strong>highly soluble</strong> in blood and cytosol. This lets it be transported easily and used quickly for energy. The –OH groups are also the reactive sites where glucose joins other sugars by dehydration synthesis, forming <strong>glycosidic linkages</strong>.</p>`
    },
    {
      tier: "likely",
      q: "Worksheet (preview to proteins): draw the structures of tryptophan and serine. Which is MORE polar? Why? Why do you think it matters?",
      a: `<ul>
<li><strong>Tryptophan</strong>: its R group is –CH<sub>2</sub>– attached to a large double ring (indole) made mostly of carbon and hydrogen, with only one N–H. It is large and mostly <strong>nonpolar</strong>.</li>
<li><strong>Serine</strong>: its R group is only –CH<sub>2</sub>OH, a small group with a polar <strong>hydroxyl</strong> that can hydrogen bond with water.</li>
</ul>
<p><strong>Serine is more polar</strong>, because it has more polar groups relative to its overall size (and much less nonpolar hydrocarbon).</p>
<p><strong>Why it matters:</strong> polarity affects <strong>solubility</strong> and how the amino acid interacts with other molecules. Serine is more at home in water-based systems. In a protein (a long chain of amino acids that interact with each other), polarity decides where each amino acid ends up when the chain folds: polar R groups like serine's tend to face the watery outside, while nonpolar ones like tryptophan's cluster inside, away from water. These attractions make the chain <strong>bend and coil onto itself</strong>, which gives the protein the 3D shape that determines its function.</p>`
    }
  ]
});
/* end qa-102 */

/* ------------------------------------------------------------------ 1.03 */
window.QA.push({
  id: "qa-103",
  title: "Carbohydrates: application & research",
  lesson: "1.03",
  source: "Lesson 1.03 slides (Application & Research Questions) and the class answer key \"Carbohydrate Answers\"",
  items: [
    {
      tier: "essential",
      q: "What are the main functions of carbohydrates?",
      a: `<p>The key's answer: <strong>short-term energy and structural support.</strong></p>
<ul>
<li><strong>Short-term energy:</strong> monosaccharides, especially <strong>glucose</strong>, are the cell's quick fuel for cellular respiration.</li>
<li><strong>Energy storage:</strong> extra glucose is stored as polysaccharides: <strong>starch</strong> in plants and <strong>glycogen</strong> in animals (liver and skeletal muscle). Both can be broken back down to glucose quickly.</li>
<li><strong>Structural support:</strong> <strong>cellulose</strong> gives strength to plant cell walls, and <strong>chitin</strong> forms the exoskeletons of insects and reinforces fungal cell walls.</li>
<li><strong>Cell surface markers:</strong> short carbohydrate chains attached to membrane proteins and lipids (glycoproteins and glycolipids) are used for <strong>cell identification</strong> (self vs. non-self) and <strong>cell communication</strong>.</li>
</ul>`,
      note: `The key lists only energy and structure, but the slides also list <strong>cell surface markers</strong> (identification and communication) as a function. Include it for a complete answer.`
    },
    {
      tier: "essential",
      q: "Draw an alpha-glucose molecule and number the carbons properly.",
      a: `<figure class="diagram"><svg viewBox="0 0 640 290" role="img" aria-labelledby="qa103-glc-t" font-family="inherit"><title id="qa103-glc-t">Alpha-glucose ring (Haworth projection) with carbons numbered 1 to 6</title>
<g style="stroke:var(--ink);stroke-width:2;fill:none">
<line x1="250" y1="105" x2="390" y2="105"/><line x1="390" y1="105" x2="450" y2="150"/><line x1="450" y1="150" x2="390" y2="195"/><line x1="250" y1="195" x2="190" y2="150"/><line x1="190" y1="150" x2="250" y2="105"/>
<line x1="250" y1="195" x2="390" y2="195" style="stroke-width:6"/>
<line x1="450" y1="150" x2="450" y2="118"/><line x1="450" y1="150" x2="450" y2="186"/>
<line x1="390" y1="195" x2="390" y2="168"/><line x1="390" y1="195" x2="390" y2="230"/>
<line x1="250" y1="195" x2="250" y2="176"/><line x1="250" y1="195" x2="250" y2="230"/>
<line x1="190" y1="150" x2="190" y2="118"/><line x1="190" y1="150" x2="190" y2="186"/>
<line x1="250" y1="105" x2="250" y2="72"/><line x1="250" y1="105" x2="250" y2="124"/>
</g>
<circle cx="390" cy="105" r="12" style="fill:var(--surface);stroke:none"/>
<g font-size="15" text-anchor="middle" style="fill:var(--ink)">
<text x="390" y="110" style="fill:var(--red)">O</text>
<text x="450" y="112">H</text>
<text x="390" y="163">H</text><text x="390" y="247">OH</text>
<text x="250" y="171">OH</text><text x="250" y="247">H</text>
<text x="190" y="112">H</text><text x="184" y="203">HO</text>
<text x="250" y="139">H</text>
<text x="250" y="64">CH₂OH</text>
</g>
<text x="450" y="203" font-size="15" text-anchor="middle" font-weight="bold" style="fill:var(--magenta)">OH</text>
<g font-size="12" text-anchor="middle" font-weight="bold" style="fill:var(--blue)">
<text x="469" y="146">1</text><text x="404" y="214">2</text><text x="236" y="214">3</text><text x="172" y="146">4</text><text x="236" y="99">5</text><text x="212" y="62">6</text>
</g>
<g font-size="12" style="fill:var(--ink-2)">
<text x="492" y="190">α: the OH on carbon 1</text>
<text x="492" y="206">points DOWN (opposite</text>
<text x="492" y="222">side to the CH₂OH)</text>
<text x="492" y="252">β: it points UP</text>
<text x="40" y="275">Carbons are numbered clockwise from the ring O: C1 is the first carbon after O.</text>
</g>
</svg><figcaption>α-glucose, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>. The thick edge is the side of the ring nearest you.</figcaption></figure>
<ol class="steps">
<li><p class="step-head">Draw the ring</p><p>Draw a hexagon with the <strong>oxygen at the top right corner</strong>. The ring holds 5 carbons and 1 oxygen.</p></li>
<li><p class="step-head">Number the carbons</p><p>Go <strong>clockwise from the oxygen</strong>: the right corner is <strong>C1</strong>, then C2 (bottom right), C3 (bottom left), C4 (left) and C5 (top left). <strong>C6</strong> is outside the ring, in the –CH<sub>2</sub>OH group sticking up from C5.</p></li>
<li><p class="step-head">Add the groups</p><p>C1: <strong>OH down</strong>, H up. C2: OH down. C3: OH up. C4: OH down. C5: CH<sub>2</sub>OH up, H down.</p></li>
</ol>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>"ABBA": <strong>A</strong>lpha = OH on C1 <strong>B</strong>elow the ring; <strong>B</strong>eta = OH on C1 <strong>A</strong>bove the ring (same side as the CH<sub>2</sub>OH). That one flipped –OH is the only difference between α- and β-glucose.</p></div>`
    },
    {
      tier: "essential",
      q: "Show how sucrose is formed (include both reactants and products and clearly show the linkage).",
      a: `<figure class="diagram"><svg viewBox="0 0 640 305" role="img" aria-labelledby="qa103-suc-t" font-family="inherit"><title id="qa103-suc-t">Sucrose forms when the OH on carbon 1 of alpha-glucose and the OH on carbon 2 of fructose react, releasing water and forming an alpha-1,2 glycosidic linkage</title>
<g transform="translate(130,85)">
<polygon points="-50,0 -25,-28 25,-28 50,0 25,28 -25,28" style="fill:var(--blue-soft);stroke:var(--blue);stroke-width:2"/>
<line x1="-25" y1="28" x2="25" y2="28" style="stroke:var(--blue);stroke-width:6"/>
<line x1="-25" y1="-28" x2="-25" y2="-46" style="stroke:var(--ink);stroke-width:2"/>
<line x1="50" y1="0" x2="72" y2="0" style="stroke:var(--ink);stroke-width:2"/>
<circle cx="25" cy="-28" r="10" style="fill:var(--surface)"/>
<text x="25" y="-23" font-size="14" text-anchor="middle" style="fill:var(--red)">O</text>
<text x="-25" y="-52" font-size="14" text-anchor="middle" style="fill:var(--ink)">CH₂OH</text>
<text x="88" y="5" font-size="15" text-anchor="middle" font-weight="bold" style="fill:var(--magenta)">OH</text>
<text x="52" y="-10" font-size="12" font-weight="bold" style="fill:var(--blue)">1</text>
<text x="0" y="52" font-size="13" text-anchor="middle" style="fill:var(--ink-2)">α-glucose</text>
</g>
<g transform="translate(370,85)">
<polygon points="0,-30 -38,-8 -24,28 24,28 38,-8" style="fill:var(--amber-soft);stroke:var(--amber);stroke-width:2"/>
<line x1="-24" y1="28" x2="24" y2="28" style="stroke:var(--amber);stroke-width:6"/>
<line x1="-38" y1="-8" x2="-62" y2="-8" style="stroke:var(--ink);stroke-width:2"/>
<circle cx="0" cy="-30" r="10" style="fill:var(--surface)"/>
<text x="0" y="-25" font-size="14" text-anchor="middle" style="fill:var(--red)">O</text>
<text x="-81" y="-3" font-size="15" text-anchor="middle" font-weight="bold" style="fill:var(--magenta)">H</text><text x="-70" y="-3" font-size="15" text-anchor="middle" font-weight="bold" style="fill:var(--ink)">O</text>
<text x="-46" y="-18" font-size="12" font-weight="bold" style="fill:var(--blue)">2</text>
<text x="0" y="52" font-size="13" text-anchor="middle" style="fill:var(--ink-2)">fructose</text>
</g>
<text x="256" y="92" font-size="20" text-anchor="middle" style="fill:var(--ink)">+</text>
<text x="252" y="120" font-size="12" text-anchor="middle" style="fill:var(--magenta)">OH + H leave as H₂O</text>
<line x1="250" y1="140" x2="250" y2="182" style="stroke:var(--ink);stroke-width:2"/>
<polygon points="243,178 257,178 250,192" style="fill:var(--ink)"/>
<text x="264" y="160" font-size="12" style="fill:var(--ink-2)">dehydration synthesis</text>
<text x="264" y="176" font-size="12" style="fill:var(--ink-2)">(condensation): + H₂O released</text>
<g transform="translate(180,245)">
<polygon points="-50,0 -25,-28 25,-28 50,0 25,28 -25,28" style="fill:var(--blue-soft);stroke:var(--blue);stroke-width:2"/>
<line x1="-25" y1="28" x2="25" y2="28" style="stroke:var(--blue);stroke-width:6"/>
<line x1="-25" y1="-28" x2="-25" y2="-46" style="stroke:var(--ink);stroke-width:2"/>
<circle cx="25" cy="-28" r="10" style="fill:var(--surface)"/>
<text x="25" y="-23" font-size="14" text-anchor="middle" style="fill:var(--red)">O</text>
<text x="-25" y="-52" font-size="14" text-anchor="middle" style="fill:var(--ink)">CH₂OH</text>
<text x="52" y="-10" font-size="12" font-weight="bold" style="fill:var(--blue)">1</text>
</g>
<line x1="230" y1="245" x2="268" y2="245" style="stroke:var(--magenta);stroke-width:3"/>
<line x1="292" y1="245" x2="332" y2="237" style="stroke:var(--magenta);stroke-width:3"/>
<text x="280" y="251" font-size="16" text-anchor="middle" font-weight="bold" style="fill:var(--magenta)">O</text>
<g transform="translate(370,245)">
<polygon points="0,-30 -38,-8 -24,28 24,28 38,-8" style="fill:var(--amber-soft);stroke:var(--amber);stroke-width:2"/>
<line x1="-24" y1="28" x2="24" y2="28" style="stroke:var(--amber);stroke-width:6"/>
<circle cx="0" cy="-30" r="10" style="fill:var(--surface)"/>
<text x="0" y="-25" font-size="14" text-anchor="middle" style="fill:var(--red)">O</text>
<text x="-46" y="-18" font-size="12" font-weight="bold" style="fill:var(--blue)">2</text>
</g>
<text x="440" y="240" font-size="15" style="fill:var(--ink)">sucrose  +  H₂O</text>
<text x="280" y="296" font-size="12" text-anchor="middle" style="fill:var(--magenta)">α-1,2 glycosidic linkage (C1 of glucose – O – C2 of fructose)</text>
</svg><figcaption>Simplified: only the groups that react are drawn. In your answer, draw every –OH and H on both rings, as in the key.</figcaption></figure>
<div class="eq">α-glucose + fructose → sucrose + H<sub>2</sub>O<br>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O</div>
<ul>
<li><strong>Reactants:</strong> one α-glucose (six-sided ring) and one fructose (five-sided ring).</li>
<li>The –OH on <strong>carbon 1 of glucose</strong> and the –OH on <strong>carbon 2 of fructose</strong> line up. An –OH from one and an H from the other are removed and leave as <strong>one water molecule</strong>.</li>
<li>The remaining oxygen bridges the two rings, forming a covalent <strong>α-1,2 glycosidic linkage</strong>. This is a <strong>dehydration synthesis</strong> (condensation) reaction.</li>
<li><strong>Products:</strong> sucrose (a disaccharide, table sugar) + H<sub>2</sub>O.</li>
</ul>
<p>Hydrolysis is the reverse: adding a water molecule breaks the linkage and gives back glucose and fructose. Plants transport sugar from leaves to the rest of the plant as sucrose.</p>`
    },
    {
      tier: "essential",
      q: "Where are 1-4 and 1-6 glycosidic linkages found? What is the difference?",
      a: `<p><strong>The difference</strong> is which carbons are joined. The numbers name the carbon on each sugar:</p>
<ul>
<li><strong>α-1,4 linkage:</strong> carbon 1 of one glucose bonds (through an O) to carbon 4 of the next. This continues the chain in a <strong>straight line</strong> (unbranched).</li>
<li><strong>α-1,6 linkage:</strong> carbon 1 of one glucose bonds to carbon 6 (the –CH<sub>2</sub>OH carbon that sticks out of the ring) of a glucose already in a chain. This starts a <strong>branch</strong>.</li>
</ul>
<div class="table-wrap"><table class="data"><thead><tr><th>Molecule</th><th>Linkages</th><th>Shape</th></tr></thead><tbody>
<tr><td>Maltose (disaccharide)</td><td>α-1,4</td><td>Two glucose units</td></tr>
<tr><td><strong>Amylose</strong> (starch)</td><td><strong>α-1,4 only</strong></td><td>Unbranched chain that coils into a helix</td></tr>
<tr><td><strong>Amylopectin</strong> (starch)</td><td><strong>α-1,4 in the chains + α-1,6 at branch points</strong></td><td>Branched</td></tr>
<tr><td>Glycogen (animals)</td><td>α-1,4 + many more α-1,6</td><td>Very highly branched</td></tr>
<tr><td>Cellulose</td><td>β-1,4</td><td>Straight chains held side by side by hydrogen bonds</td></tr>
</tbody></table></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Branched polysaccharides are open, highly accessible structures: every branch end is a place where enzymes can remove glucose, so energy can be released quickly. Linear polysaccharides give greater structural strength. Starch is only about 20–25% amylose; the rest is amylopectin.</p></div>`
    },
    {
      tier: "likely",
      q: "Discuss the polarity of different carbohydrates (monosaccharide vs. polysaccharide). How does this relate to its function as a biomolecule?",
      a: `<p>Going from a monosaccharide to a polysaccharide is a change from <strong>high polarity and high solubility</strong> to <strong>low solubility and reduced "effective" polarity</strong>. Both are technically polar because both have many hydroxyl (–OH) groups, but they behave very differently in water as the chain gets longer.</p>
<p>Three factors "hide" the polarity of a polysaccharide (starch, glycogen, cellulose):</p>
<ol>
<li><strong>Size.</strong> Polysaccharides are huge. Even with many polar –OH groups, the energy needed to pull the whole polymer into solution is greater than the energy released by forming hydrogen bonds with water.</li>
<li><strong>Internal hydrogen bonding (cellulose).</strong> In structural polysaccharides like cellulose, the –OH groups form hydrogen bonds with <em>neighbouring chains</em> instead of with water. They are locked into a rigid, crystalline structure and are not available to bond with water, so cellulose is completely insoluble even though it is built from polar units.</li>
<li><strong>Folding and branching (starch and glycogen).</strong> Storage chains often coil into helices, which tucks some polar groups into the centre of the helix, away from the water, further reducing solubility.</li>
</ol>
<p><strong>Link to function:</strong></p>
<ul>
<li><strong>Monosaccharides</strong> (like glucose) dissolve easily, so they travel quickly in blood or plant sap and are used fast: <strong>short-term energy</strong>.</li>
<li><strong>Storage polysaccharides</strong> (starch, glycogen) are insoluble, so they stay packed in the cell as compact energy reserves without dissolving away.</li>
<li><strong>Structural polysaccharides</strong> (cellulose, chitin) are insoluble and rigid, so they make strong, water-resistant structures such as cell walls.</li>
</ul>`,
      note: `An extra reason storage polysaccharides help: thousands of glucose molecules dissolved separately would raise the solute concentration inside the cell and draw in water by osmosis. Packing them into one insoluble polymer avoids that.`
    }
  ]
});
/* end qa-103 */

/* ------------------------------------------------------------------ 1.04 */
window.QA.push({
  id: "qa-104",
  title: "Lipids: application & research",
  lesson: "1.04",
  source: "Lesson 1.04 slides (Application & Research Questions) and the class answer key \"Lipid Answers\"",
  items: [
    {
      tier: "essential",
      q: "Describe the main functions of fat.",
      a: `<ul>
<li><strong>Long-term energy storage:</strong> lipids hold more than twice the energy per gram of carbohydrates (about <strong>9 kcal/g vs. 4 kcal/g</strong>), so they are an efficient way to store energy.</li>
<li><strong>Insulation:</strong> subcutaneous fat (adipose tissue under the skin) reduces heat loss and helps maintain body temperature.</li>
<li><strong>Protection / cushioning:</strong> fat deposits surround and protect vital organs (such as the kidneys) from physical shock.</li>
<li><strong>Structural components:</strong> phospholipids and cholesterol are essential for building and maintaining cell membranes.</li>
<li><strong>Hormone production:</strong> lipids are the starting material for steroid hormones (such as testosterone and estrogen), which coordinate and regulate cell activities and act in cell signalling.</li>
<li><strong>Vitamin absorption:</strong> dietary fat is needed to absorb the fat-soluble vitamins <strong>A, D, E and K</strong>.</li>
</ul>`
    },
    {
      tier: "essential",
      q: "Draw the reaction showing the formation of a triglyceride.",
      a: `<figure class="diagram"><svg viewBox="0 0 640 372" role="img" aria-labelledby="qa104-tg-t" font-family="inherit"><title id="qa104-tg-t">Glycerol plus three fatty acids form a triglyceride and three water molecules by dehydration synthesis (esterification)</title>
<g><line x1="71" y1="23" x2="71" y2="37" style="stroke:var(--ink);stroke-width:1.5"/><line x1="71" y1="54" x2="71" y2="77" style="stroke:var(--ink);stroke-width:1.5"/><line x1="71" y1="94" x2="71" y2="117" style="stroke:var(--ink);stroke-width:1.5"/><line x1="71" y1="134" x2="71" y2="149" style="stroke:var(--ink);stroke-width:1.5"/><line x1="71" y1="205" x2="71" y2="219" style="stroke:var(--ink);stroke-width:1.5"/><line x1="71" y1="236" x2="71" y2="259" style="stroke:var(--ink);stroke-width:1.5"/><line x1="71" y1="276" x2="71" y2="299" style="stroke:var(--ink);stroke-width:1.5"/><line x1="71" y1="316" x2="71" y2="331" style="stroke:var(--ink);stroke-width:1.5"/><line x1="210.5" y1="32" x2="210.5" y2="38" style="stroke:var(--ink);stroke-width:1.5"/><line x1="214.5" y1="32" x2="214.5" y2="38" style="stroke:var(--ink);stroke-width:1.5"/><line x1="210.5" y1="72" x2="210.5" y2="78" style="stroke:var(--ink);stroke-width:1.5"/><line x1="214.5" y1="72" x2="214.5" y2="78" style="stroke:var(--ink);stroke-width:1.5"/><line x1="210.5" y1="112" x2="210.5" y2="118" style="stroke:var(--ink);stroke-width:1.5"/><line x1="214.5" y1="112" x2="214.5" y2="118" style="stroke:var(--ink);stroke-width:1.5"/><line x1="121.5" y1="214" x2="121.5" y2="220" style="stroke:var(--ink);stroke-width:1.5"/><line x1="125.5" y1="214" x2="125.5" y2="220" style="stroke:var(--ink);stroke-width:1.5"/><line x1="121.5" y1="254" x2="121.5" y2="260" style="stroke:var(--ink);stroke-width:1.5"/><line x1="125.5" y1="254" x2="125.5" y2="260" style="stroke:var(--ink);stroke-width:1.5"/><line x1="121.5" y1="294" x2="121.5" y2="300" style="stroke:var(--ink);stroke-width:1.5"/><line x1="125.5" y1="294" x2="125.5" y2="300" style="stroke:var(--ink);stroke-width:1.5"/></g>
<g font-size="14" style="fill:var(--ink)">
<text x="66" y="20">H</text><text x="66" y="162">H</text>
<text x="40" y="50">H</text><text x="52" y="50">–</text><text x="66" y="50">C</text><text x="79" y="50">–</text><text x="92" y="50">O</text>
<text x="104" y="50" font-weight="bold" style="fill:var(--magenta)">H</text>
<text x="170" y="50" font-weight="bold" style="fill:var(--magenta)">HO</text><text x="194" y="50">–</text><text x="207" y="50">C</text><text x="221" y="50">– CH₂ – CH₂ ··· CH₂ – CH₃</text>
<text x="207" y="28">O</text>
<text x="40" y="90">H</text><text x="52" y="90">–</text><text x="66" y="90">C</text><text x="79" y="90">–</text><text x="92" y="90">O</text>
<text x="104" y="90" font-weight="bold" style="fill:var(--magenta)">H</text>
<text x="170" y="90" font-weight="bold" style="fill:var(--magenta)">HO</text><text x="194" y="90">–</text><text x="207" y="90">C</text><text x="221" y="90">– CH₂ – CH₂ ··· CH₂ – CH₃</text>
<text x="207" y="68">O</text>
<text x="40" y="130">H</text><text x="52" y="130">–</text><text x="66" y="130">C</text><text x="79" y="130">–</text><text x="92" y="130">O</text>
<text x="104" y="130" font-weight="bold" style="fill:var(--magenta)">H</text>
<text x="170" y="130" font-weight="bold" style="fill:var(--magenta)">HO</text><text x="194" y="130">–</text><text x="207" y="130">C</text><text x="221" y="130">– CH₂ – CH₂ ··· CH₂ – CH₃</text>
<text x="207" y="108">O</text>
<text x="140" y="90" font-size="18">+</text>
<text x="66" y="202">H</text><text x="66" y="344">H</text>
<text x="40" y="232">H</text><text x="52" y="232">–</text><text x="66" y="232">C</text><text x="79" y="232">–</text>
<text x="92" y="232" font-weight="bold" style="fill:var(--magenta)">O</text>
<text x="105" y="232">–</text><text x="118" y="232">C</text><text x="132" y="232">– CH₂ – CH₂ ··· CH₂ – CH₃</text>
<text x="118" y="210">O</text>
<text x="40" y="272">H</text><text x="52" y="272">–</text><text x="66" y="272">C</text><text x="79" y="272">–</text>
<text x="92" y="272" font-weight="bold" style="fill:var(--magenta)">O</text>
<text x="105" y="272">–</text><text x="118" y="272">C</text><text x="132" y="272">– CH₂ – CH₂ ··· CH₂ – CH₃</text>
<text x="118" y="250">O</text>
<text x="40" y="312">H</text><text x="52" y="312">–</text><text x="66" y="312">C</text><text x="79" y="312">–</text>
<text x="92" y="312" font-weight="bold" style="fill:var(--magenta)">O</text>
<text x="105" y="312">–</text><text x="118" y="312">C</text><text x="132" y="312">– CH₂ – CH₂ ··· CH₂ – CH₃</text>
<text x="118" y="290">O</text>
<text x="380" y="272" font-size="15">+  3 H₂O</text>
</g>
<g font-size="12" style="fill:var(--ink-2)"><text x="100" y="162">glycerol</text><text x="230" y="162">3 fatty acids</text></g>
<line x1="320" y1="150" x2="320" y2="196" style="stroke:var(--ink);stroke-width:2"/><polygon points="313,192 327,192 320,206" style="fill:var(--ink)"/>
<g font-size="12" style="fill:var(--ink-2)"><text x="334" y="170">dehydration synthesis (esterification):</text><text x="334" y="186">each glycerol H + fatty acid OH leave as H₂O</text></g>
<g font-size="12" style="fill:var(--magenta)"><text x="160" y="362">3 ester linkages (C–O–C=O) join each fatty acid to glycerol</text></g>
<text x="330" y="344" font-size="12" style="fill:var(--ink-2)">triglyceride (fat or oil)</text>
</svg><figcaption>One glycerol + three fatty acids → one triglyceride + three water molecules.</figcaption></figure>
<div class="eq">glycerol + 3 fatty acids → triglyceride + 3 H<sub>2</sub>O</div>
<ul>
<li><strong>Glycerol</strong> is a 3-carbon chain with a hydroxyl (–OH) group on each carbon.</li>
<li>Each <strong>fatty acid</strong> is a long hydrocarbon chain with a <strong>carboxyl group</strong> (–COOH) at one end.</li>
<li>The H from each glycerol –OH and the OH from each fatty acid's –COOH are removed as water. Each remaining glycerol oxygen bonds to the fatty acid's carbonyl carbon, forming an <span class="term">ester linkage</span>.</li>
<li>Three linkages form, so <strong>three water molecules</strong> are released. This dehydration synthesis is called <span class="term">esterification</span>.</li>
</ul>
<p>A triglyceride is <strong>not a polymer</strong>: it is always one glycerol + three fatty acids, not a long chain of repeating monomers.</p>`
    },
    {
      tier: "likely",
      q: "How does chain length affect the polarity of the lipid?",
      a: `<p><strong>As the chain length increases, the molecule becomes more hydrophobic (less polar) overall.</strong></p>
<ul>
<li>The only polar part of a fatty acid is the small carboxyl head; the rest is a nonpolar hydrocarbon tail of C–C and C–H bonds.</li>
<li>Making the chain longer makes the nonpolar part a larger proportion of the molecule, so the nonpolar "tail" dominates its chemical behaviour.</li>
<li>Longer chains are therefore much <strong>less soluble in water</strong> than shorter chains. Very short fatty acids (like the 2-carbon acetic acid in vinegar) mix with water; the 16- to 18-carbon chains in most fats do not.</li>
</ul>`
    },
    {
      tier: "essential",
      q: "How does saturation (saturated vs. unsaturated) affect the density of the lipid? Why does this matter? (Think form and function.)",
      a: `<p><strong>Saturation</strong> describes whether the carbons in the fatty acid tail hold as many hydrogen atoms as possible.</p>
<div class="compare"><div><h4>Saturated fats</h4><ul><li><strong>No C=C double bonds</strong></li><li>Straight chains that pack very tightly together</li><li><strong>Higher density</strong>, <strong>solid</strong> at room temperature</li><li>Examples: butter, animal fat</li></ul></div><div><h4>Unsaturated fats</h4><ul><li><strong>One or more C=C double bonds</strong> (one = monounsaturated, more = polyunsaturated)</li><li>In nature these make <strong>"kinks"</strong> (bends) that stop the chains packing closely</li><li><strong>Lower density</strong>, <strong>liquid</strong> at room temperature</li><li>Examples: vegetable oils</li></ul></div></div>
<p><strong>Why it matters (form and function):</strong> fish living in cold water have more unsaturated fats in their cell membranes. With saturated fats, their membranes would "freeze" and become brittle in the cold; the kinked unsaturated tails keep the membranes fluid and working.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Plants store oils instead of solid fats. The kinks stop the chains from forming a tight lattice, so the oil stays liquid at low temperatures and is easier to access for energy.</p></div>`
    },
    {
      tier: "essential",
      q: "What is a cis vs. trans monounsaturated fatty acid? Use the structure of each to explain the state each is in at room temperature.",
      a: `<p>The difference is the geometry around the single C=C double bond:</p>
<ul>
<li><strong>Cis fatty acid:</strong> the hydrogen atoms are on the <strong>same side</strong> of the double bond. This puts a physical bend or <strong>kink</strong> in the chain. Because of the kink, the molecules cannot pack tightly, so they stay <strong>liquid (oils)</strong> at room temperature.</li>
<li><strong>Trans fatty acid:</strong> the hydrogen atoms are on <strong>opposite sides</strong> of the double bond. The chain stays <strong>straight</strong>, even though it has a double bond. Straight chains pack tightly like saturated fats, so trans fats are <strong>solid or semi-solid</strong> at room temperature (for example, margarine).</li>
</ul>
<p><strong>Health note from the key:</strong> because trans fats are straight, the body tends to treat them like saturated fats. Most are synthetic (made by partial hydrogenation of oils), and they are linked to cardiovascular disease.</p>`,
      note: `The key says the body "lacks the specific enzymes" to break trans fats down. A more precise reason they are harmful: trans fats raise LDL ("bad") cholesterol and lower HDL ("good") cholesterol in the blood, which increases the risk of heart disease.`
    }
  ]
});
/* end qa-104 */

/* ------------------------------------------------------------------ 1.05 */
window.QA.push({
  id: "qa-105",
  title: "Nucleic Acids: application & research",
  lesson: "1.05",
  source: "Lesson 1.05 slides (Application & Research Questions) and the class answer key \"Nucleic Acid Answers\"",
  items: [
    {
      tier: "essential",
      q: "How does the number of purines relate to the number of pyrimidines in a DNA/RNA chain?",
      a: `<p>In double-stranded DNA, <strong>the number of purines always equals the number of pyrimidines (a 1:1 ratio)</strong>. This follows from <span class="term">Chargaff's rule</span>.</p>
<ul>
<li><strong>Purines</strong> (adenine and guanine) have a <strong>double-ring</strong> structure.</li>
<li><strong>Pyrimidines</strong> (cytosine, thymine, and uracil in RNA) have a <strong>single-ring</strong> structure.</li>
</ul>
<p><strong>The logic:</strong> to keep the "rungs" of the DNA ladder a constant width, a double-ring purine must always pair with a single-ring pyrimidine: <strong>A with T</strong> (U in RNA) and <strong>G with C</strong>. Every base pair has exactly one of each, so the totals match.</p>
<p><strong>In RNA:</strong> RNA is usually single-stranded, so the 1:1 ratio does not have to hold, although the bases still belong to the same chemical categories.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>"<strong>Pure As Gold</strong>": purines are A and G. Pyrimidines (the long name) are the small single rings: C, T, U.</p></div>`
    },
    {
      tier: "likely",
      q: "In Unit 2 we will look at ATP and ADP. Compare the structure of these molecules and explain how they relate to DNA.",
      a: `<p>We usually think of ATP as just "energy", but it is actually a <strong>nucleotide</strong>, the same kind of molecule that builds our genetic code.</p>
<div class="table-wrap"><table class="data"><thead><tr><th></th><th>Base</th><th>Sugar</th><th>Phosphates</th></tr></thead><tbody>
<tr><td><strong>ATP</strong> (adenosine triphosphate)</td><td>Adenine</td><td>Ribose</td><td><strong>3</strong></td></tr>
<tr><td><strong>ADP</strong> (adenosine diphosphate)</td><td>Adenine</td><td>Ribose</td><td><strong>2</strong></td></tr>
<tr><td>Adenine nucleotide in DNA</td><td>Adenine</td><td>Deoxyribose</td><td>1 (part of the backbone)</td></tr>
</tbody></table></div>
<ul>
<li><strong>ATP → ADP:</strong> hydrolysis removes the third phosphate and releases energy the cell can use (ATP → ADP + P<sub>i</sub> + energy).</li>
<li><strong>Link to nucleic acids:</strong> ATP has the same three parts as a DNA or RNA nucleotide (nitrogenous base + pentose sugar + phosphate). Because its sugar is ribose, ATP is really an RNA-type nucleotide; DNA uses the deoxyribose version.</li>
</ul>`,
      note: `Going further: cells build DNA and RNA from nucleotides that carry three phosphates (ATP, GTP, CTP, UTP, and their deoxy versions such as dATP). As each nucleotide is added to the chain, two of its phosphates are cut off, and that energy drives the joining reaction. So the same "energy molecule" design is also the raw material for genes.`
    },
    {
      tier: "likely",
      q: "It is reasonably accepted that DNA evolved from RNA. With this in mind, and an understanding of evolutionary mechanisms from Grade 11 Biology, discuss the stability of thymine and uracil.",
      a: `<p>In the <strong>"RNA world" hypothesis</strong>, RNA came first. DNA later became the preferred store of genetic information because it is <strong>much more stable</strong>, and a key part of that stability is using <strong>thymine instead of uracil</strong>.</p>
<ul>
<li><strong>The problem with uracil:</strong> cytosine (found in both DNA and RNA) can spontaneously lose an amine group, a process called <span class="term">deamination</span>, which turns it into <strong>uracil</strong>.</li>
<li><strong>The mutation trap:</strong> if DNA normally used uracil, repair enzymes could not tell whether a U was supposed to be there or was a damaged cytosine. That would lead to huge numbers of mutations ("typos").</li>
<li><strong>The thymine solution:</strong> thymine is essentially a "protected" uracil with an extra <strong>methyl group</strong> (–CH<sub>3</sub>). Because DNA uses only thymine, the repair machinery knows that <em>any</em> uracil in DNA is an error and fixes it.</li>
<li><strong>Evolutionary mechanism:</strong> <strong>natural selection</strong> favoured organisms that used thymine for their permanent genetic record (DNA), because it gave higher <strong>fidelity</strong> (accuracy) when passing traits to offspring.</li>
</ul>
<p>RNA can keep uracil because it is a short-lived working copy; a mistake in one RNA molecule is not passed on.</p>`
    },
    {
      tier: "essential",
      q: "In your own words, explain the main structure of DNA (include Chargaff's rule and antiparallel strands).",
      a: `<p>DNA is a <strong>double helix</strong>: think of a twisted ladder where the chemistry decides the shape.</p>
<ul>
<li><strong>Building blocks:</strong> each strand is a polymer of <strong>nucleotides</strong>. Each nucleotide = a phosphate group + the sugar deoxyribose + a nitrogenous base (A, T, G or C).</li>
<li><strong>The sides (backbone):</strong> alternating <strong>sugar and phosphate</strong> groups, joined by covalent <span class="term">phosphodiester linkages</span>.</li>
<li><strong>Antiparallel strands:</strong> each strand has a free phosphate at one end (the <strong>5′ end</strong>) and a free sugar at the other (the <strong>3′ end</strong>). The two strands run in <strong>opposite directions</strong>: one runs 5′ → 3′ and the other 3′ → 5′, like two lanes of traffic. This orientation matters for how enzymes read and copy DNA.</li>
<li><strong>The rungs (Chargaff's rule):</strong> the bases point inward and pair by <strong>hydrogen bonds</strong>: <strong>adenine only with thymine (2 hydrogen bonds)</strong> and <strong>guanine only with cytosine (3 hydrogen bonds)</strong>. Each pair is one purine + one pyrimidine, so the ladder keeps a constant width.</li>
<li><strong>Complementary strands:</strong> because pairing is so specific, if you know the sequence of one strand you can always predict the other.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The common form inside cells is "B-form" DNA, with about 10 base pairs per turn of the helix. Stacking between the flat ring-shaped bases also helps stabilize the helix.</p></div>`
    },
    {
      tier: "essential",
      q: "If a sample of DNA is 18% adenine, calculate the percentage of the other bases present in the sample.",
      a: `<ol class="steps">
<li><p class="step-head">A pairs with T</p><p>Every A is paired with a T, so <strong>T = 18%</strong>.</p></li>
<li><p class="step-head">Find what is left for G and C</p><p>A + T = 18% + 18% = 36%, so G + C = 100% − 36% = 64%.</p></li>
<li><p class="step-head">G pairs with C</p><p>G and C are equal, so each is 64% ÷ 2 = <strong>32%</strong>.</p></li>
</ol>
<div class="tally"><span class="chip">A = 18%</span><span class="chip">T = 18%</span><span class="chip">G = 32%</span><span class="chip">C = 32%</span></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Don't forget to subtract <strong>both</strong> A and T before splitting the rest. Subtracting only A (100 − 18 = 82, then 82 ÷ 2 = 41%) is a common slip. Always check that the four percentages add to 100: 18 + 18 + 32 + 32 = 100.</p></div>`
    }
  ]
});
/* end qa-105 */

/* ------------------------------------------------------------------ 1.06 */
window.QA.push({
  id: "qa-106",
  title: "Proteins: application & research",
  lesson: "1.06",
  source: "Lesson 1.06 slides (Application & Research Questions, Essential Amino Acid Research) and the class answer key \"Protein Answers\"",
  items: [
    {
      tier: "essential",
      q: "Draw the general structure of an amino acid. Identify the functional groups.",
      a: `<figure class="diagram"><svg viewBox="0 0 640 215" role="img" aria-labelledby="qa106-aa-t" font-family="inherit"><title id="qa106-aa-t">General structure of an amino acid: a central carbon bonded to an amino group, a carboxyl group, a hydrogen atom and an R group</title>
<rect x="186" y="86" width="76" height="34" rx="6" style="fill:var(--teal-soft);stroke:var(--teal)"/>
<rect x="372" y="48" width="104" height="72" rx="6" style="fill:var(--amber-soft);stroke:var(--amber)"/>
<rect x="298" y="140" width="44" height="32" rx="6" style="fill:var(--red-soft);stroke:var(--red)"/>
<g style="stroke:var(--ink);stroke-width:2">
<line x1="320" y1="94" x2="320" y2="72"/><line x1="320" y1="116" x2="320" y2="140"/>
<line x1="306" y1="105" x2="264" y2="105"/><line x1="334" y1="105" x2="380" y2="105"/>
<line x1="388" y1="94" x2="388" y2="76"/><line x1="393" y1="94" x2="393" y2="76"/>
<line x1="402" y1="105" x2="428" y2="105"/>
</g>
<g font-size="16" text-anchor="middle" style="fill:var(--ink)">
<text x="320" y="111">C</text><text x="320" y="66">H</text><text x="320" y="162">R</text>
<text x="224" y="110">H₂N</text><text x="390" y="111">C</text><text x="390" y="70">O</text><text x="448" y="111">OH</text>
</g>
<g font-size="12" text-anchor="middle" style="fill:var(--ink-2)">
<text x="224" y="140">amino group</text><text x="424" y="40">carboxyl group</text>
<text x="320" y="38">hydrogen atom</text>
<text x="320" y="196">R group (side chain): the only part that differs among the 20 amino acids</text>
</g>
<text x="338" y="130" font-size="12" style="fill:var(--ink-2)">central carbon</text>
</svg><figcaption>Every amino acid has the same four groups around a central carbon.</figcaption></figure>
<p>The <strong>central carbon</strong> is bonded to four things:</p>
<ul>
<li>an <strong>amino group</strong> (–NH<sub>2</sub>),</li>
<li>a <strong>carboxyl group</strong> (–COOH),</li>
<li>a <strong>hydrogen atom</strong>, and</li>
<li>an <strong>R group</strong> (side chain), which is different for each of the 20 amino acids and gives each one its properties.</li>
</ul>
<p>At the pH inside cells, the amino group usually carries an extra H<sup>+</sup> (–NH<sub>3</sub><sup>+</sup>) and the carboxyl group has lost one (–COO<sup>−</sup>), which is how they appear on the class amino acid chart.</p>`
    },
    {
      tier: "essential",
      q: "Looking at the structure, identify what makes an amino acid (and so a protein) polar or nonpolar.",
      a: `<p><strong>Look at the R group.</strong> All amino acids have the same polar amino and carboxyl groups, so those cannot make one amino acid different from another. According to the key, a <strong>polar R group needs an O, N or S</strong> to create a dipole moment. An R group made only of C and H is nonpolar.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Group on the class chart</th><th>R group feature</th><th>Examples</th></tr></thead><tbody>
<tr><td><strong>Nonpolar</strong> (hydrophobic)</td><td>Mostly C and H (hydrocarbon chains or rings)</td><td>Glycine, alanine, valine, leucine, isoleucine, proline, phenylalanine, methionine, tryptophan, cysteine</td></tr>
<tr><td><strong>Polar</strong> (uncharged)</td><td>Contains –OH (hydroxyl) or an amide (C=O with –NH<sub>2</sub>)</td><td>Serine, threonine, tyrosine, asparagine, glutamine</td></tr>
<tr><td><strong>+ charge</strong> (basic)</td><td>Has an extra amino group that picks up H<sup>+</sup></td><td>Lysine, arginine, histidine</td></tr>
<tr><td><strong>− charge</strong> (acidic)</td><td>Has an extra carboxyl group that loses H<sup>+</sup></td><td>Aspartic acid, glutamic acid</td></tr>
</tbody></table></div>
<p>A protein's overall behaviour depends on which of these R groups it has and where they end up when it folds: polar and charged R groups attract water, while nonpolar ones avoid it.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>You do not need the whole chart, but memorize one example from each group, for example <strong>glycine</strong> (nonpolar), <strong>serine</strong> (polar), <strong>histidine</strong> (+ charge) and <strong>aspartic acid</strong> (− charge).</p></div>`,
      note: `The "O, N or S" rule is a rough guide. The class chart puts cysteine (–SH), methionine (contains S) and tryptophan (contains an N–H) in the <strong>nonpolar</strong> group, because their S–H or C–S bonds are only weakly polar, or because one N–H is small compared with a big hydrocarbon ring. What really makes an R group polar is strongly polar bonds (O–H, N–H, C=O) or a charge, compared with how much hydrocarbon it has.`
    },
    {
      tier: "essential",
      q: "Draw a tripeptide with glycine, alanine and phenylalanine. Show the reactants and ALL products.",
      a: `<figure class="diagram"><svg viewBox="0 0 640 336" role="img" aria-labelledby="qa106-pep-t" font-family="inherit"><title id="qa106-pep-t">Glycine, alanine and phenylalanine join by two dehydration syntheses to form the tripeptide Gly-Ala-Phe and two water molecules</title>
<g style="stroke:var(--ink);stroke-width:1.5;fill:none"><line x1="36" y1="57" x2="46" y2="57"/><line x1="55" y1="66" x2="55" y2="78"/><line x1="64" y1="57" x2="74" y2="57"/><line x1="83" y1="48" x2="83" y2="38"/><line x1="83" y1="66" x2="83" y2="78"/><line x1="92" y1="57" x2="102" y2="57"/><line x1="109" y1="48" x2="109" y2="38"/><line x1="113" y1="48" x2="113" y2="38"/><line x1="120" y1="57" x2="130" y2="57"/><line x1="202" y1="57" x2="212" y2="57"/><line x1="221" y1="66" x2="221" y2="78"/><line x1="230" y1="57" x2="240" y2="57"/><line x1="249" y1="48" x2="249" y2="38"/><line x1="249" y1="66" x2="249" y2="78"/><line x1="258" y1="57" x2="268" y2="57"/><line x1="275" y1="48" x2="275" y2="38"/><line x1="279" y1="48" x2="279" y2="38"/><line x1="286" y1="57" x2="296" y2="57"/><line x1="368" y1="57" x2="378" y2="57"/><line x1="387" y1="66" x2="387" y2="78"/><line x1="396" y1="57" x2="406" y2="57"/><line x1="415" y1="48" x2="415" y2="38"/><line x1="415" y1="66" x2="415" y2="78"/><line x1="415" y1="97" x2="415" y2="106"/><polygon points="415.0,107.0 426.3,113.5 426.3,126.5 415.0,133.0 403.7,126.5 403.7,113.5" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><circle cx="415" cy="120" r="7.2" style="fill:none;stroke:var(--ink);stroke-width:1.2"/><line x1="424" y1="57" x2="434" y2="57"/><line x1="441" y1="48" x2="441" y2="38"/><line x1="445" y1="48" x2="445" y2="38"/><line x1="452" y1="57" x2="462" y2="57"/><line x1="300" y1="140" x2="300" y2="178" style="stroke:var(--ink);stroke-width:2"/><polygon points="293,174 307,174 300,188" style="fill:var(--ink);stroke:none"/><line x1="36" y1="235" x2="46" y2="235"/><line x1="55" y1="244" x2="55" y2="256"/><line x1="64" y1="235" x2="74" y2="235"/><line x1="83" y1="226" x2="83" y2="216"/><line x1="83" y1="244" x2="83" y2="256"/><line x1="92" y1="235" x2="102" y2="235"/><line x1="109" y1="226" x2="109" y2="216"/><line x1="113" y1="226" x2="113" y2="216"/><line x1="120" y1="235" x2="130" y2="235" style="stroke:var(--magenta);stroke-width:3"/><line x1="139" y1="244" x2="139" y2="256"/><line x1="148" y1="235" x2="158" y2="235"/><line x1="167" y1="226" x2="167" y2="216"/><line x1="167" y1="244" x2="167" y2="256"/><line x1="176" y1="235" x2="186" y2="235"/><line x1="193" y1="226" x2="193" y2="216"/><line x1="197" y1="226" x2="197" y2="216"/><line x1="204" y1="235" x2="214" y2="235" style="stroke:var(--magenta);stroke-width:3"/><line x1="223" y1="244" x2="223" y2="256"/><line x1="232" y1="235" x2="242" y2="235"/><line x1="251" y1="226" x2="251" y2="216"/><line x1="251" y1="244" x2="251" y2="256"/><line x1="251" y1="275" x2="251" y2="284"/><polygon points="251.0,285.0 262.3,291.5 262.3,304.5 251.0,311.0 239.7,304.5 239.7,291.5" style="fill:none;stroke:var(--ink);stroke-width:1.5"/><circle cx="251" cy="298" r="7.2" style="fill:none;stroke:var(--ink);stroke-width:1.2"/><line x1="260" y1="235" x2="270" y2="235"/><line x1="277" y1="226" x2="277" y2="216"/><line x1="281" y1="226" x2="281" y2="216"/><line x1="288" y1="235" x2="298" y2="235"/></g>
<g font-size="15" text-anchor="middle" style="fill:var(--ink)">
<text x="27" y="62">H</text><text x="55" y="62">N</text><text x="55" y="93">H</text><text x="83" y="62">C</text><text x="83" y="34">H</text><text x="83" y="93">H</text><text x="111" y="62">C</text><text x="111" y="34">O</text>
<text x="144" y="62" font-weight="bold" style="fill:var(--magenta)">OH</text>
<text x="94" y="114" font-size="12" style="fill:var(--ink-2)">glycine</text>
<text x="172" y="62" font-size="18">+</text>
<text x="193" y="62" font-weight="bold" style="fill:var(--magenta)">H</text>
<text x="221" y="62">N</text><text x="221" y="93">H</text><text x="249" y="62">C</text><text x="249" y="34">H</text><text x="249" y="93">CH₃</text><text x="277" y="62">C</text><text x="277" y="34">O</text>
<text x="310" y="62" font-weight="bold" style="fill:var(--magenta)">OH</text>
<text x="260" y="114" font-size="12" style="fill:var(--ink-2)">alanine</text>
<text x="338" y="62" font-size="18">+</text>
<text x="359" y="62" font-weight="bold" style="fill:var(--magenta)">H</text>
<text x="387" y="62">N</text><text x="387" y="93">H</text><text x="415" y="62">C</text><text x="415" y="34">H</text><text x="415" y="93">CH₂</text><text x="443" y="62">C</text><text x="443" y="34">O</text><text x="476" y="62">OH</text>
<text x="478" y="124" font-size="12" text-anchor="start" style="fill:var(--ink-2)">phenylalanine</text>
<text x="314" y="158" font-size="12" text-anchor="start" style="fill:var(--ink-2)">dehydration synthesis ×2: each OH + H</text>
<text x="314" y="174" font-size="12" text-anchor="start" style="fill:var(--ink-2)">(magenta) leaves as H₂O</text>
<text x="27" y="240">H</text><text x="55" y="240">N</text><text x="55" y="271">H</text><text x="83" y="240">C</text><text x="83" y="212">H</text><text x="83" y="271">H</text><text x="111" y="240">C</text><text x="111" y="212">O</text>
<text x="139" y="240" font-weight="bold" style="fill:var(--magenta)">N</text>
<text x="139" y="271">H</text><text x="167" y="240">C</text><text x="167" y="212">H</text><text x="167" y="271">CH₃</text><text x="195" y="240">C</text><text x="195" y="212">O</text>
<text x="223" y="240" font-weight="bold" style="fill:var(--magenta)">N</text>
<text x="223" y="271">H</text><text x="251" y="240">C</text><text x="251" y="212">H</text><text x="251" y="271">CH₂</text><text x="279" y="240">C</text><text x="279" y="212">O</text><text x="312" y="240">OH</text>
<text x="344" y="240" text-anchor="start">+  2 H₂O</text>
<text x="20" y="292" font-size="12" text-anchor="start" style="fill:var(--ink-2)">N-terminus</text>
<text x="320" y="278" font-size="12" text-anchor="start" style="fill:var(--ink-2)">C-terminus</text>
<text x="150" y="320" font-size="12" text-anchor="start" style="fill:var(--magenta)">2 peptide bonds (C–N, magenta) link Gly–Ala–Phe</text>
</g>
</svg><figcaption>Three amino acids → one tripeptide + two water molecules.</figcaption></figure>
<div class="eq">glycine + alanine + phenylalanine → Gly–Ala–Phe + 2 H<sub>2</sub>O</div>
<ul>
<li>Draw the three amino acids side by side. Their R groups are: glycine –H, alanine –CH<sub>3</sub>, phenylalanine –CH<sub>2</sub>– attached to a benzene ring.</li>
<li>Between glycine and alanine: the <strong>–OH from glycine's carboxyl group</strong> and <strong>one H from alanine's amino group</strong> are removed as water. The carboxyl carbon bonds to the amino nitrogen: this C–N bond is a <span class="term">peptide bond</span>.</li>
<li>The same thing happens between alanine's carboxyl group and phenylalanine's amino group.</li>
<li><strong>All products:</strong> the tripeptide <strong>plus 2 water molecules</strong>. There is always one fewer peptide bond (and water) than the number of amino acids.</li>
</ul>
<p>The finished chain has a free amino group at one end (the <strong>N-terminus</strong>) and a free carboxyl group at the other (the <strong>C-terminus</strong>).</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The question asks for <strong>all</strong> products: don't forget the 2 H<sub>2</sub>O. And remember the peptide bond is between the <strong>carbonyl carbon</strong> and the <strong>nitrogen</strong>, not between two central carbons.</p></div>`
    },
    {
      tier: "likely",
      q: "How might the solubility of peptides be influenced by size? By the R group?",
      a: `<p>The key's answer: <strong>the smaller the R group, the more soluble the peptide will be. If the R group is polar, solubility will also increase. Small, polar amino acids are the most soluble.</strong></p>
<ul>
<li><strong>Size:</strong> large R groups (and longer chains) add more nonpolar hydrocarbon, which cannot hydrogen bond with water, so solubility goes down. Bigger molecules also need more energy to be pulled into solution.</li>
<li><strong>R group polarity:</strong> polar R groups (with –OH or amide groups) hydrogen bond with water, and <strong>charged</strong> R groups (acidic or basic) form even stronger ion–dipole attractions with water. Both increase solubility. Nonpolar R groups (like phenylalanine's ring) decrease it.</li>
</ul>
<p>Example: a peptide rich in serine (small, polar) dissolves much more easily than one rich in phenylalanine or tryptophan (large, nonpolar).</p>`,
      note: `For large proteins, folding also matters. Many soluble proteins (like hemoglobin in blood) fold with their polar and charged R groups on the outside facing water and their nonpolar R groups buried inside, so even very large proteins can dissolve.`
    },
    {
      tier: "extra",
      q: "Essential amino acid research: for your assigned essential amino acid (valine, isoleucine, leucine, methionine, lysine, threonine, histidine, phenylalanine or tryptophan), (a) describe its function in your body, (b) give a food source, (c) list symptoms of deficiency, and (d) describe the features of its R group.",
      a: `<p>The 9 <strong>essential amino acids</strong> cannot be made by the body (or not in large enough amounts), so they must come from the diet. Complete proteins such as meat, fish, eggs, dairy and soy contain all of them.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Amino acid</th><th>(d) R group</th><th>(a) Main roles</th><th>(b) Food sources</th><th>(c) Signs of deficiency</th></tr></thead><tbody>
<tr><td>Valine</td><td>Nonpolar, branched hydrocarbon</td><td>Muscle growth and repair; energy</td><td>Meat, dairy, soy, legumes</td><td>Fatigue, muscle loss, poor coordination</td></tr>
<tr><td>Isoleucine</td><td>Nonpolar, branched hydrocarbon</td><td>Muscle metabolism; blood sugar regulation; hemoglobin production</td><td>Meat, fish, eggs, dairy, lentils</td><td>Fatigue, weakness, muscle wasting</td></tr>
<tr><td>Leucine</td><td>Nonpolar, branched hydrocarbon</td><td>Triggers muscle protein synthesis; wound healing</td><td>Meat, dairy, soy, beans</td><td>Muscle loss, fatigue</td></tr>
<tr><td>Methionine</td><td>Nonpolar; contains sulfur</td><td>First amino acid of every new protein; used to make cysteine and antioxidants</td><td>Meat, fish, eggs, nuts</td><td>Poor growth, weakness, fatigue</td></tr>
<tr><td>Lysine</td><td>Basic, + charge (extra amino group at the end of a carbon chain)</td><td>Collagen formation; calcium absorption; immune function (antibodies)</td><td>Meat, fish, dairy, legumes</td><td>Fatigue, poor growth, weakened immunity</td></tr>
<tr><td>Threonine</td><td>Polar, uncharged (hydroxyl group)</td><td>Collagen and elastin (skin, connective tissue); fat metabolism</td><td>Meat, dairy, eggs, lentils</td><td>Weakness, poor growth</td></tr>
<tr><td>Histidine</td><td>Basic, + charge (ring containing two N)</td><td>Made into histamine (immune response); growth and tissue repair</td><td>Meat, fish, dairy, eggs, whole grains</td><td>Anemia, fatigue, poor growth</td></tr>
<tr><td>Phenylalanine</td><td>Nonpolar, aromatic (benzene ring)</td><td>Made into tyrosine, then neurotransmitters such as dopamine and adrenaline</td><td>Meat, eggs, dairy, soy, nuts</td><td>Fatigue, low mood, poor growth</td></tr>
<tr><td>Tryptophan</td><td>Large, aromatic double ring (mostly nonpolar, one N–H)</td><td>Made into serotonin (mood) and melatonin (sleep), and niacin (vitamin B<sub>3</sub>)</td><td>Turkey, milk, eggs, cheese, nuts, seeds</td><td>Low mood, poor sleep</td></tr>
</tbody></table></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>The 9 essential amino acids: "<strong>PVT TIM HaLL</strong>": Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Leucine, Lysine.</p></div>`
    }
  ]
});
/* end qa-106 */

/* ------------------------------------------------------------------ mix: macromolecule review */
window.QA.push({
  id: "qa-mix-review",
  title: "Macromolecule Review: picking the right molecule, crossword and sorting",
  lesson: "mix",
  source: "Macromolecule Review handout (Picking the Right Molecule, Cell Compounds Crossword, sorting building blocks into four groups) and its marking key",
  items: [
    {
      tier: "essential",
      q: "Picking the Right Molecule: from examples A to H (A sucrose, B cholesterol, C water, E triglyceride, F NaCl, G phospholipid, H oleic acid), identify the molecule that best matches each term: polar covalent; ionically bonded inorganic compound; formed by dehydration synthesis; monounsaturated fatty acid; composed of three fatty acids and glycerol; consists of hydrophilic heads and hydrophobic tails; contributes to arterial disease.",
      a: `<div class="table-wrap"><table class="data"><thead><tr><th>Term</th><th>Answer</th><th>Why</th></tr></thead><tbody>
<tr><td>Polar covalent</td><td><strong>C. Water</strong></td><td>O and H share electrons unequally, and the bent shape means the dipoles do not cancel</td></tr>
<tr><td>Ionically bonded inorganic compound</td><td><strong>F. NaCl</strong></td><td>A metal (Na) transfers an electron to a non-metal (Cl); contains no carbon</td></tr>
<tr><td>Formed by dehydration synthesis</td><td><strong>A. Sucrose</strong></td><td>Glucose + fructose join by a glycosidic linkage, releasing one H<sub>2</sub>O</td></tr>
<tr><td>Monounsaturated fatty acid</td><td><strong>H. Oleic acid</strong></td><td>Long hydrocarbon chain with a carboxyl group and exactly <strong>one</strong> C=C double bond</td></tr>
<tr><td>Composed of three fatty acids and glycerol</td><td><strong>E. Triglyceride</strong></td><td>Glycerol backbone joined to three fatty acids by ester linkages</td></tr>
<tr><td>Hydrophilic heads and hydrophobic tails</td><td><strong>G. Phospholipid</strong></td><td>Polar phosphate head + two nonpolar fatty acid tails (amphipathic)</td></tr>
<tr><td>Contributes to arterial disease</td><td><strong>B. Cholesterol</strong></td><td>Too much cholesterol in the blood builds up as plaque in artery walls (atherosclerosis)</td></tr>
</tbody></table></div>
<p>Each letter is used once, so pick the <em>best</em> match. Triglycerides and phospholipids are also made by dehydration synthesis, but they are needed for other terms; sucrose is the classic example.</p>`,
      note: `Cholesterol is not only harmful: it is an essential part of animal cell membranes (it buffers membrane fluidity) and is the starting material for steroid hormones. It contributes to disease when blood levels are too high. (One term on the handout, "cause of acid precipitation", was removed from the class key.)`
    },
    {
      tier: "likely",
      q: "Cell Compounds Crossword, ACROSS clues: 2. Process used to break down a polymer. 3. Molecule that makes up plant cell walls. 5. Bond formed when one atom donates electrons to another. 6. Type of bond that involves a sharing of electrons. 8. Energy-providing molecule of the cell. 10. Polymer molecule of proteins. 12. Reaction used to join monomer molecules into polymers. 15. Compound containing carbon. 16. Formula showing the number of each type of atom making up a compound. 17. Formula that shows how the atoms that make up the molecule are bonded to one another. 18. Invented the microscope. 19. Example of a female steroid sex hormone. 20. Means \"water-hating\". 21. Example of a polysaccharide. 22. Sugar that consists of two monosaccharides.",
      a: `<div class="table-wrap"><table class="data"><thead><tr><th>#</th><th>Answer</th><th>#</th><th>Answer</th></tr></thead><tbody>
<tr><td>2</td><td><strong>Hydrolysis</strong></td><td>15</td><td><strong>Organic</strong></td></tr>
<tr><td>3</td><td><strong>Cellulose</strong></td><td>16</td><td><strong>Molecular</strong> (formula)</td></tr>
<tr><td>5</td><td><strong>Ionic</strong></td><td>17</td><td><strong>Structural</strong> (formula)</td></tr>
<tr><td>6</td><td><strong>Covalent</strong></td><td>18</td><td><strong>Hooke</strong></td></tr>
<tr><td>8</td><td><strong>ATP</strong></td><td>19</td><td><strong>Estrogen</strong></td></tr>
<tr><td>10</td><td><strong>Amino acid</strong></td><td>20</td><td><strong>Hydrophobic</strong></td></tr>
<tr><td>12</td><td><strong>Dehydration synthesis</strong></td><td>21</td><td><strong>Glycogen</strong></td></tr>
<tr><td></td><td></td><td>22</td><td><strong>Disaccharide</strong></td></tr>
</tbody></table></div>`,
      note: `Two clues are worded loosely. <strong>10:</strong> an amino acid is the <em>monomer</em> (building block) of proteins, not a polymer; the polymer is the polypeptide. <strong>18:</strong> Hooke did not invent the microscope; he used an improved compound microscope to look at cork and named the "cells" he saw (1665). For 5, an ionic bond is better described as one atom <em>transferring</em> electrons to another.`
    },
    {
      tier: "likely",
      q: "Cell Compounds Crossword, DOWN clues: 1. Long-term energy storage molecule in animals. 4. Reaction that releases energy. 7. Example of a disaccharide. 9. Example of a monounsaturated fatty acid. 10. Compound that releases hydrogen ions. 11. Level of protein structure formed by folding. 13. Monomer molecule for nucleic acids. 14. Molecules that have a difference in charge between their ends.",
      a: `<div class="table-wrap"><table class="data"><thead><tr><th>#</th><th>Answer</th><th>Quick reason</th></tr></thead><tbody>
<tr><td>1</td><td><strong>Triglyceride</strong></td><td>Fat stored in adipose tissue; about 9 kcal/g</td></tr>
<tr><td>4</td><td><strong>Exergonic</strong></td><td>Releases free energy (e.g., catabolic reactions)</td></tr>
<tr><td>7</td><td><strong>Maltose</strong></td><td>Glucose + glucose (sucrose and lactose would also be disaccharides)</td></tr>
<tr><td>9</td><td><strong>Oleic acid</strong></td><td>18-carbon fatty acid with one C=C double bond</td></tr>
<tr><td>10</td><td><strong>Acid</strong></td><td>Releases (donates) H<sup>+</sup> ions</td></tr>
<tr><td>11</td><td><strong>Tertiary structure</strong></td><td>3D folding caused by R-group interactions</td></tr>
<tr><td>13</td><td><strong>Nucleotide</strong></td><td>Phosphate + pentose sugar + nitrogenous base</td></tr>
<tr><td>14</td><td><strong>Polar</strong></td><td>Partial positive and partial negative ends (a dipole)</td></tr>
</tbody></table></div>`
    },
    {
      tier: "essential",
      q: "Monomers (single building blocks) can be joined into polymers, and they fall into four groups: carbohydrates (1), lipids (2), nucleic acids (3) and proteins (4). Number each molecule on the sheet 1, 2, 3 or 4.",
      a: `<div class="table-wrap"><table class="data"><thead><tr><th>Molecule on the sheet</th><th>Group</th><th>Clue that gives it away</th></tr></thead><tbody>
<tr><td>Six-membered ring with a –CH<sub>2</sub>OH and many –OH (glucose-type ring), drawn twice</td><td><strong>1</strong> carbohydrate</td><td>Ring of carbons plus one O, covered in <strong>hydroxyl</strong> groups</td></tr>
<tr><td>Long straight hydrocarbon chain ending in –COOH</td><td><strong>2</strong> lipid (saturated fatty acid)</td><td>Long nonpolar chain + <strong>carboxyl</strong> at one end, no double bonds</td></tr>
<tr><td>Bent hydrocarbon chain ending in –COOH</td><td><strong>2</strong> lipid (unsaturated fatty acid)</td><td>The kink comes from a C=C double bond</td></tr>
<tr><td>Three-carbon chain with an –OH on each carbon</td><td><strong>2</strong> lipid (glycerol)</td><td>The backbone of triglycerides and phospholipids</td></tr>
<tr><td>Phosphate + five-carbon ring sugar + cytosine base</td><td><strong>3</strong> nucleic acid (nucleotide)</td><td><strong>Phosphate</strong> + pentose sugar + nitrogen-containing ring</td></tr>
<tr><td>Three phosphates + sugar + adenine</td><td><strong>3</strong> nucleic acid (ATP-type nucleotide)</td><td>Adenine base, pentose sugar and phosphates</td></tr>
<tr><td>H<sub>2</sub>N–C–COOH with R = –H</td><td><strong>4</strong> protein (glycine)</td><td><strong>Amino</strong> + <strong>carboxyl</strong> groups on the same carbon</td></tr>
<tr><td>H<sub>2</sub>N–C–COOH with R = –CH<sub>3</sub></td><td><strong>4</strong> protein (alanine)</td><td>Same backbone; R group is a methyl</td></tr>
<tr><td>H<sub>2</sub>N–C–COOH with R = –CH<sub>2</sub>SH</td><td><strong>4</strong> protein (cysteine)</td><td>Same backbone; R group has a sulfhydryl</td></tr>
<tr><td>H<sub>2</sub>N–C–COOH with R = –CH<sub>2</sub>– and a benzene ring</td><td><strong>4</strong> protein (phenylalanine)</td><td>Same backbone; aromatic ring R group</td></tr>
</tbody></table></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Spot the class by its giveaway groups: <strong>lots of –OH on a ring</strong> = carbohydrate; <strong>long C–H chain or glycerol</strong> = lipid; <strong>phosphate + sugar + N-ring base</strong> = nucleic acid; <strong>N–C–C(=O)OH with an R</strong> = protein.</p></div>`,
      note: `Lipids are the exception to "monomers form polymers": glycerol and fatty acids combine into a triglyceride, but they do not form long repeating chains, so lipids are not true polymers.`
    }
  ]
});
/* end qa-mix-review */

/* ------------------------------------------------------------------ 1.07 */
window.QA.push({
  id: "qa-107",
  title: "Enzymes: slide questions and application & research",
  lesson: "1.07",
  source: "Lesson 1.07 slides (questions on the Naming Conventions and Factors slides, Application & Research Questions) and the class answer key \"Enzyme Answers\"",
  items: [
    {
      tier: "likely",
      q: "Recall Grade 11: amylase, lipase, carbohydrase, protease and lactase. What is the purpose of these enzymes? How do they function?",
      a: `<p>They are <strong>digestive enzymes</strong>. Each one speeds up the <strong>hydrolysis</strong> of a large food molecule into smaller molecules (monomers) that are small enough to be absorbed into the blood. Many enzyme names end in <strong>-ase</strong> and start with the name of their substrate.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Enzyme</th><th>Substrate → products</th><th>Where</th></tr></thead><tbody>
<tr><td><strong>Amylase</strong></td><td>Starch → maltose (smaller sugars)</td><td>Mouth (saliva), small intestine (from pancreas)</td></tr>
<tr><td><strong>Lipase</strong></td><td>Fats (triglycerides) → glycerol + fatty acids</td><td>Small intestine (from pancreas)</td></tr>
<tr><td><strong>Carbohydrase</strong></td><td>General name for any enzyme that breaks carbohydrates into simple sugars (amylase, lactase, sucrase and maltase are all carbohydrases)</td><td>Mouth, small intestine</td></tr>
<tr><td><strong>Protease</strong></td><td>Proteins → shorter peptides → amino acids (breaks peptide bonds)</td><td>Stomach (pepsin), small intestine (trypsin)</td></tr>
<tr><td><strong>Lactase</strong></td><td>Lactose (milk sugar) → glucose + galactose</td><td>Small intestine</td></tr>
</tbody></table></div>
<p><strong>How they function:</strong> each enzyme is a protein catalyst with a uniquely shaped <strong>active site</strong>. Its substrate binds there, forming an <strong>enzyme–substrate complex</strong>; the active site changes shape slightly to fit more tightly (<strong>induced fit</strong>), which strains the bonds and lowers the activation energy. Water is added across the bond (hydrolysis), the products are released, and the unchanged enzyme can be used again.</p>`
    },
    {
      tier: "essential",
      q: "Why does increasing substrate concentration initially increase the rate of reaction, and then plateau?",
      a: `<ul>
<li><strong>At first:</strong> there are free active sites. Adding more substrate means substrate molecules collide with and bind to enzymes more often, so more enzyme–substrate complexes form per second and the rate rises.</li>
<li><strong>The plateau:</strong> eventually, <strong>all the active sites are occupied</strong> at any moment. The enzymes are <span class="term">saturated</span> and working as fast as they can (maximum rate). Adding more substrate cannot speed things up, because the substrate has to wait for an enzyme to become free.</li>
</ul>
<p>At the plateau, the amount of <strong>enzyme</strong> is the limiting factor. Adding more enzyme would raise the rate again (increasing enzyme concentration speeds up the reaction in proportion, as long as there is plenty of substrate).</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Saturated" here does not mean the solution becomes solid or that there is too much substrate to dissolve. It means <strong>every enzyme's active site is busy</strong>.</p></div>`
    },
    {
      tier: "essential",
      q: "Describe non-competitive inhibition. Provide an example.",
      a: `<p>The key contrasts the two kinds of inhibition: <strong>competitive</strong> inhibitors bind the <strong>active site</strong>; <strong>non-competitive</strong> inhibitors bind an <strong>allosteric site</strong>.</p>
<ul>
<li>A <span class="term">non-competitive inhibitor</span> binds to an <strong>allosteric site</strong>: a site on the enzyme <em>other than</em> the active site.</li>
<li>Binding changes the enzyme's shape, so the <strong>active site changes shape</strong> too (it stabilizes the inactive form). The substrate can no longer bind properly, or the reaction can no longer be catalyzed.</li>
<li>The inhibitor does not compete with the substrate for the same spot, so <strong>adding more substrate does not overcome</strong> the inhibition.</li>
</ul>
<p><strong>Examples:</strong></p>
<ul>
<li><strong>Cyanide</strong> blocks cytochrome c oxidase, an enzyme of the electron transport chain in cellular respiration, so cells can no longer make enough ATP.</li>
<li><strong>Heavy metal ions</strong> such as mercury and lead bind to sulfhydryl (–SH) groups away from the active site and change the enzyme's shape.</li>
<li>In metabolism, high levels of <strong>ATP</strong> act as an allosteric inhibitor of phosphofructokinase, slowing glycolysis when the cell has enough energy (Unit 2).</li>
</ul>`,
      note: `The class key only contrasts competitive and non-competitive inhibition and gives no example. For full marks, describe the mechanism (allosteric site → shape change → active site no longer works) and give an example.`
    },
    {
      tier: "essential",
      q: "Describe how an allosteric regulator can either activate or inhibit enzyme function.",
      a: `<p>An <span class="term">allosteric regulator</span> binds to an <strong>allosteric site</strong>, away from the active site, and changes the enzyme's shape. That shape change is passed to the active site.</p>
<ul>
<li><strong>Allosteric activator:</strong> binds the allosteric site and <strong>stabilizes the active form</strong>, so the active site keeps the shape that lets the substrate fit. The reaction runs.</li>
<li><strong>Allosteric inhibitor:</strong> binds the allosteric site and <strong>stabilizes the inactive form</strong>, so the active site changes shape and the substrate cannot fit. This is <strong>non-competitive inhibition</strong>.</li>
</ul>
<p>Cells use this to control reaction rates, often by <strong>negative feedback</strong>: the end product of a pathway acts as an allosteric inhibitor of an early enzyme, so production slows down when enough product has built up. This helps maintain homeostasis.</p>`
    },
    {
      tier: "essential",
      q: "Why is it important for the body to maintain a proper temperature and pH at all times?",
      a: `<p><strong>Enzymes are proteins</strong>, and each one only works well within an <strong>optimal range</strong> of temperature and pH. Outside that range the enzyme can <strong>denature</strong>.</p>
<ul>
<li><strong>Temperature:</strong> most human enzymes work best at about <strong>37 °C</strong>. Too hot, and the hydrogen bonds and other weak attractions that hold the enzyme's 3D shape break, so the active site loses its shape. Too cold, and molecules move slowly and collide less often, so reactions slow down.</li>
<li><strong>pH:</strong> each enzyme has an optimal pH that matches where it works: about <strong>7.4 in blood</strong>, about <strong>2 in the stomach</strong> (pepsin), and slightly basic in the small intestine (trypsin). A change in H<sup>+</sup> concentration changes the charges on the R groups, which disrupts the ionic and hydrogen bonds holding the shape.</li>
</ul>
<p>If the active site changes shape, the substrate no longer fits, so the reactions of metabolism slow or stop. That is why homeostasis keeps body temperature and blood pH within narrow limits (and why a very high fever is dangerous).</p>`,
      note: `The key gives "pH 7.5 in blood". The normal range of blood pH is 7.35–7.45 (about 7.4), as stated in the Chemistry Basics lesson.`
    },
    {
      tier: "likely",
      q: "Protease, an enzyme found in pineapple, breaks down gelatin, a structural protein made from collagen. When you make Jell-O with fresh pineapple chunks in it, the dessert does not solidify. Why? What if you used cooked pineapple?",
      a: `<ul>
<li><strong>Fresh pineapple:</strong> the protease (called bromelain) is active. It catalyzes the <strong>hydrolysis of peptide bonds</strong> in the gelatin, breaking the long protein chains into small pieces. Gelatin sets because its long chains form a network that traps water; the short fragments cannot form that network, so the Jell-O stays liquid. <strong>The enzyme breaks down the protein.</strong></li>
<li><strong>Cooked pineapple:</strong> the high temperature <strong>denatures the protease</strong> (the enzyme is itself a protein). Its active site loses its shape, so it can no longer bind and break down gelatin, and the Jell-O sets normally.</li>
</ul>
<p>The same is true of canned pineapple, which is heated during canning.</p>`
    },
    {
      tier: "likely",
      q: "Humans produce enzymes in the mouth, stomach and small intestine that aid digestion. As we age, we tend to produce less of these enzymes. What effect would this have on digestion and nutrition?",
      a: `<p><strong>Less digestion, so less absorption of nutrients.</strong></p>
<ul>
<li>With fewer enzyme molecules, hydrolysis of carbohydrates, proteins and fats into monomers (simple sugars, amino acids, fatty acids and glycerol) is <strong>slower and less complete</strong>. Recall that the rate depends on enzyme concentration.</li>
<li>Only small monomers can be absorbed through the small intestine, so more food passes through undigested, and fewer nutrients reach the blood.</li>
<li>Over time this can cause <strong>nutrient deficiencies</strong> or malnutrition even with a good diet (for example, low protein intake leading to muscle loss). Undigested food can also cause discomfort; for example, when lactase production drops, lactose is not broken down, causing gas and bloating (lactose intolerance).</li>
</ul>
<p>Solutions include eating smaller meals, choosing easier-to-digest foods, or taking enzyme supplements such as lactase pills.</p>`
    },
    {
      tier: "essential",
      q: "What is the functional role of a coenzyme or a cofactor in an enzyme-catalyzed reaction?",
      a: `<p>Both are <strong>non-protein helper molecules</strong> that bind to an enzyme (which is often inactive without them) and <strong>alter or complete its active site</strong> so it can work.</p>
<ul>
<li><span class="term">Cofactors</span> are <strong>inorganic</strong>, usually <strong>metal ions</strong> (for example Zn<sup>2+</sup>, Mg<sup>2+</sup>, Fe<sup>2+</sup>, Cu<sup>2+</sup>). They <strong>stabilize the enzyme's shape</strong> and help attract electrons from the substrate, pointing the reaction in the right direction.</li>
<li><span class="term">Coenzymes</span> are <strong>organic</strong> molecules, many made from vitamins. They often act as <strong>molecular shuttles</strong>, carrying electrons, protons (H<sup>+</sup>) or chemical groups from one enzyme to another. Examples: NAD<sup>+</sup> (from niacin, vitamin B<sub>3</sub>) and FAD (from riboflavin, vitamin B<sub>2</sub>), which carry electrons in cellular respiration.</li>
</ul>
<p>In the key's words: coenzymes are organic, cofactors are inorganic, and both act as <strong>helpers for the enzyme, for transport or direction</strong>.</p>`
    },
    {
      tier: "essential",
      q: "What does it mean to \"denature\" an enzyme?",
      a: `<p>To <span class="term">denature</span> an enzyme means to <strong>change its 3D structure so that it is no longer functional</strong>. The active site loses its shape, so the substrate can no longer bind.</p>
<ul>
<li>Denaturation is caused by high temperature (above about 40 °C for most human enzymes), extreme pH, or high salt concentrations.</li>
<li>It disrupts the weak bonds that hold the folded shape (hydrogen bonds, ionic attractions, hydrophobic interactions), affecting the <strong>quaternary</strong> structure (where several polypeptide chains interact) and also the <strong>tertiary</strong> and <strong>secondary</strong> structure.</li>
<li>Denaturation usually does <strong>not</strong> break the <strong>peptide bonds</strong> that hold the amino acids together, so the primary structure (the amino acid sequence) stays the same.</li>
</ul>
<p>It can be temporary (the protein refolds when normal conditions return) or permanent (like a cooked egg white).</p>`,
      note: `The key says denaturation "usually affects the quaternary structure". Many enzymes are a single polypeptide with no quaternary structure, and their active site depends on the <strong>tertiary</strong> fold, so it is clearer to say denaturation disrupts the secondary, tertiary and (if present) quaternary levels while leaving the primary structure intact.`
    }
  ]
});
/* end qa-107 */

/* ------------------------------------------------------------------ 1.08 */
window.QA.push({
  id: "qa-108",
  title: "Cell Organelles: slide questions and labelled cell diagrams",
  lesson: "1.08",
  source: "Lesson 1.08 slides (questions on each organelle slide), the organelle textbook readings, and the class answer key \"Cell Diagram Answers\" (labelled animal and plant cells)",
  items: [
    {
      tier: "essential",
      q: "Cell membrane: (1) What makes up the cell membrane? (2) What is its function? (3) What substances are embedded in the membrane? (4) What do hydrophobic and hydrophilic mean?",
      a: `<ol>
<li><strong>Made of</strong> a <strong>phospholipid bilayer</strong>: two layers of phospholipids with their hydrophilic phosphate heads facing the water inside and outside the cell, and their hydrophobic fatty acid tails pointing inward. Proteins, cholesterol and carbohydrates are scattered through it (the <span class="term">fluid mosaic model</span>).</li>
<li><strong>Function:</strong> a physical barrier that separates the inside of the cell from its surroundings and is <strong>selectively permeable</strong>: it controls what enters and leaves, keeping the internal environment stable. It is also used for cell recognition, receiving signals, and joining cells together.</li>
<li><strong>Embedded substances:</strong> <strong>proteins</strong> (integral proteins that span the bilayer, such as channels, carriers and receptors, and peripheral proteins on one surface), <strong>cholesterol</strong> (in animal cells), and <strong>carbohydrate chains</strong> attached to proteins and lipids (<strong>glycoproteins</strong> and <strong>glycolipids</strong>) on the outer surface.</li>
<li><span class="term">Hydrophobic</span> = "water-fearing": nonpolar, does not dissolve in or attract water (the fatty acid tails). <span class="term">Hydrophilic</span> = "water-loving": polar or charged, attracted to water (the phosphate heads).</li>
</ol>`
    },
    {
      tier: "essential",
      q: "Cell wall: (1) What is it made of? (2) What is its function? (3) Where is it found?",
      a: `<ol>
<li><strong>Made of</strong> <strong>cellulose</strong> fibres in a matrix of other polysaccharides (such as pectin) and protein in plants. A young plant cell has a thin, flexible primary wall; some cells later add a thick, strong secondary wall. (Fungal cell walls are made of <strong>chitin</strong>.)</li>
<li><strong>Function:</strong> <strong>protects</strong> the cell, <strong>supports</strong> it and <strong>gives it shape</strong>, and stops the cell from bursting when it takes in a lot of water. The wall is porous, so water and small molecules pass through it. Channels called <strong>plasmodesmata</strong> pass through the walls and connect the cytoplasm of neighbouring plant cells.</li>
<li><strong>Found</strong> just <strong>outside the cell membrane</strong> of <strong>plants</strong>, fungi, bacteria and some protists (such as algae). <strong>Animal cells do not have a cell wall.</strong></li>
</ol>`
    },
    {
      tier: "essential",
      q: "Nucleus: (1) What is its function? (2) Describe its structure. (3) What does it contain?",
      a: `<ol>
<li><strong>Function:</strong> holds almost all of the cell's <strong>DNA</strong> (genetic instructions) and controls the cell's activities by directing which proteins are made. It protects the DNA from the chemical reactions going on in the cytosol, and it makes ribosome subunits (in the nucleolus).</li>
<li><strong>Structure:</strong> usually the largest organelle; surrounded by a <strong>double membrane</strong> (the nuclear envelope) with <strong>nuclear pores</strong>; filled with a semi-fluid called <strong>nucleoplasm</strong>.</li>
<li><strong>Contains:</strong> <strong>chromatin</strong> (DNA + proteins), one or more <strong>nucleoli</strong>, and nucleoplasm.</li>
</ol>`
    },
    {
      tier: "essential",
      q: "Nuclear membrane (envelope): (1) What is its function? (2) Describe its structure. (3) What does it contain?",
      a: `<ol>
<li><strong>Function:</strong> separates the contents of the nucleus from the cytoplasm and <strong>controls which substances enter and leave</strong> the nucleus. For example, mRNA and ribosome subunits leave through the pores, and proteins and nucleotides needed inside come in.</li>
<li><strong>Structure:</strong> a <strong>double membrane</strong> (two lipid bilayers). The outer membrane is <strong>continuous with the rough ER</strong> and has ribosomes attached.</li>
<li><strong>Contains</strong> many <strong>nuclear pores</strong>: openings lined with protein complexes that regulate the traffic in and out.</li>
</ol>`
    },
    {
      tier: "essential",
      q: "Nucleolus: (1) What is its function? (2) Describe its structure.",
      a: `<ol>
<li><strong>Function:</strong> makes <strong>ribosomal RNA (rRNA)</strong> and <strong>assembles ribosome subunits</strong> from rRNA and proteins. The subunits then leave the nucleus through the nuclear pores.</li>
<li><strong>Structure:</strong> a <strong>dense, dark, irregularly shaped region inside the nucleus</strong>, made of RNA, proteins and DNA. It is <strong>not</strong> surrounded by a membrane. A nucleus may have more than one.</li>
</ol>`
    },
    {
      tier: "essential",
      q: "Chromatin: (1) What is its function? (2) Describe its structure.",
      a: `<ol>
<li><strong>Function:</strong> stores the cell's genetic information (genes) in a compact, organized form, and controls which genes can be read. Before a cell divides, chromatin coils up tightly into visible <strong>chromosomes</strong> so the DNA can be shared evenly.</li>
<li><strong>Structure:</strong> the total collection of <strong>DNA molecules wound around proteins</strong> (histones) in the nucleus. In a non-dividing cell it appears as a tangle of long, thin threads spread through the nucleoplasm, outside the nucleolus.</li>
</ol>`
    },
    {
      tier: "essential",
      q: "Cytosol: (1) Describe its structure. (2) What is its function? (3) What is the difference between cytoplasm and cytosol?",
      a: `<ol>
<li><strong>Structure:</strong> a <strong>semi-fluid, jelly-like solution</strong>, mostly water, with dissolved ions, small molecules (sugars, amino acids, nucleotides) and many proteins, including enzymes. The cytoskeleton runs through it.</li>
<li><strong>Function:</strong> the site of many metabolic reactions (for example glycolysis, and protein synthesis by free ribosomes). It suspends the organelles and lets materials move and diffuse around the cell.</li>
<li><strong>Cytoplasm vs. cytosol:</strong> the <span class="term">cytoplasm</span> is <strong>everything inside the cell membrane except the nucleus</strong>: the cytosol <em>plus</em> all the organelles. The <span class="term">cytosol</span> is <strong>only the fluid part</strong>.</li>
</ol>`,
      note: `Be careful with wording: some sources use "cytoplasm" loosely to mean just the liquid. On a test, use "cytosol" for the fluid and "cytoplasm" for the fluid plus organelles.`
    },
    {
      tier: "essential",
      q: "Ribosomes: (1) Describe their structure. (2) Where are they located? (3) What is their function? (4) Where are ribosomes synthesized?",
      a: `<ol>
<li><strong>Structure:</strong> very small, round particles made of <strong>ribosomal RNA and protein</strong>, in <strong>two subunits</strong> (large and small). They have <strong>no membrane</strong>.</li>
<li><strong>Location:</strong> <strong>free</strong> in the cytosol, or <strong>bound</strong> to the rough ER and the outer nuclear envelope. (Mitochondria and chloroplasts also have their own small ribosomes.)</li>
<li><strong>Function:</strong> <strong>protein synthesis</strong>: they read the mRNA and join amino acids into polypeptides. Free ribosomes make proteins that work in the cytosol; bound ribosomes make proteins that go into membranes, are secreted, or go to lysosomes.</li>
<li><strong>Made in the nucleolus</strong>, which builds the subunits from rRNA and proteins. The subunits leave through the nuclear pores and join together in the cytoplasm when they start making a protein.</li>
</ol>`
    },
    {
      tier: "essential",
      q: "Rough endoplasmic reticulum: (1) Describe its structure. (2) Where is it located? (3) What is its function?",
      a: `<ol>
<li><strong>Structure:</strong> a network of <strong>flattened membrane sacs (cisternae) and tubes</strong> with <strong>ribosomes attached</strong> to the outer surface, which give it a "rough" look. The space inside is the ER lumen.</li>
<li><strong>Location:</strong> next to the nucleus; its membrane is <strong>continuous with the outer nuclear envelope</strong>.</li>
<li><strong>Function:</strong> the bound ribosomes make polypeptides that enter the ER, where they <strong>fold</strong> into their shape and are <strong>modified</strong> (for example, sugars are added to make glycoproteins). These proteins are meant for <strong>secretion</strong>, for <strong>membranes</strong>, or for <strong>delivery within the cell</strong> (such as to lysosomes). They are packed into transport vesicles and sent to the Golgi. The rough ER also makes new membrane.</li>
</ol>`
    },
    {
      tier: "essential",
      q: "Smooth endoplasmic reticulum: (1) Describe its structure. (2) Where is it located? (3) What is its function?",
      a: `<ol>
<li><strong>Structure:</strong> a network of branching membrane <strong>tubules</strong> with <strong>no ribosomes</strong>, so it looks smooth.</li>
<li><strong>Location:</strong> <strong>connected to (continuous with) the rough ER</strong>, usually farther from the nucleus.</li>
<li><strong>Function:</strong> it does <strong>not</strong> make proteins. Its enzymes:
<ul>
<li><strong>synthesize lipids</strong>: phospholipids for membranes, and steroids such as sex hormones (testes, ovaries) and adrenal hormones;</li>
<li><strong>detoxify</strong> drugs, alcohol and poisons (especially in liver cells);</li>
<li><strong>break down carbohydrates</strong> (for example glycogen in liver cells);</li>
<li><strong>store calcium ions</strong> (in muscle cells, for contraction).</li>
</ul></li>
</ol>`
    },
    {
      tier: "essential",
      q: "Golgi body (apparatus): (1) Describe its structure. (2) Where is it located? (3) What is its function?",
      a: `<ol>
<li><strong>Structure:</strong> a <strong>stack of flattened, curved membrane sacs</strong> (like a stack of pancakes), surrounded by small vesicles. One side receives vesicles from the ER; the other side ships vesicles out.</li>
<li><strong>Location:</strong> in the cytoplasm, usually <strong>near the nucleus and the ER</strong>, between the ER and the cell membrane.</li>
<li><strong>Function:</strong> it <strong>processes, sorts and directs</strong> molecules made by the ER. Its enzymes put the "finishing touches" on proteins and lipids, for example by adding sugars or phosphate groups or by trimming polypeptide chains. It then packages them into vesicles and sends them to the cell membrane (for secretion by exocytosis), to lysosomes, or to other organelles. Think of it as the cell's post office.</li>
</ol>`
    },
    {
      tier: "essential",
      q: "Vesicle: (1) Describe its structure. (2) What is its function?",
      a: `<ol>
<li><strong>Structure:</strong> a small, round <strong>sac surrounded by a single membrane</strong> (a lipid bilayer, like the cell membrane). Cells contain many of them.</li>
<li><strong>Function:</strong> to <strong>store and transport</strong> materials. Transport vesicles carry proteins and lipids from the ER to the Golgi, and from the Golgi to the cell membrane or lysosomes. Vesicles also bring materials into the cell (endocytosis) and release them out of it (exocytosis), because their membrane can fuse with other membranes. Lysosomes and peroxisomes are specialized vesicles.</li>
</ol>`
    },
    {
      tier: "essential",
      q: "Lysosome: (1) Describe its structure. (2) What is its function? (3) Where are they created? (4) What is the pH of a lysosome, and what does this tell you about the optimal conditions for the enzymes working in lysosomes? (5) What is Tay-Sachs disease?",
      a: `<ol>
<li><strong>Structure:</strong> a small, round vesicle with a <strong>single membrane</strong>, filled with <strong>hydrolytic (digestive) enzymes</strong> in an acidic fluid. Mostly found in animal cells.</li>
<li><strong>Function:</strong> <strong>intracellular digestion</strong>. Lysosomes fuse with food vacuoles to digest material taken in by phagocytosis (for example, white blood cells destroying bacteria), and they break down worn-out organelles and unwanted macromolecules into monomers (sugars, amino acids, nucleotides) that the cell recycles.</li>
<li><strong>Created</strong> by the endomembrane system: the enzymes and membrane are made by the <strong>rough ER</strong>, processed in the <strong>Golgi</strong>, and the lysosome <strong>buds off from the Golgi</strong>.</li>
<li>The inside of a lysosome has a <strong>pH of about 4.5–5</strong> (acidic), while the cytosol is about 7.2. This tells you the lysosomal enzymes have an <strong>acidic optimal pH</strong>: they work best in the lysosome. It is also a safety feature: if a lysosome leaks, its enzymes are much less active at the neutral pH of the cytosol, so they do not digest the cell.</li>
<li><span class="term">Tay-Sachs disease</span> is an <strong>inherited</strong> (genetic) lysosomal storage disease. A <strong>lipid-digesting enzyme</strong> in the lysosomes is missing or inactive, so lipids build up inside the lysosomes of brain nerve cells. The brain becomes progressively damaged; in the classic infant form, children usually die in early childhood.</li>
</ol>`
    },
    {
      tier: "essential",
      q: "Mitochondria: (1) Describe their structure. (2) What is their function? (Hint: don't just write \"the powerhouse of the cell\".)",
      a: `<ol>
<li><strong>Structure:</strong> oval organelles with <strong>two membranes</strong>: a smooth <strong>outer membrane</strong> and a highly folded <strong>inner membrane</strong>. The folds are called <strong>cristae</strong>; they greatly increase the surface area for the reactions. Between the membranes is the intermembrane space, and the fluid inside the inner membrane is the <strong>matrix</strong>, which holds enzymes, the mitochondrion's own <strong>DNA</strong> and ribosomes.</li>
<li><strong>Function:</strong> the site of <strong>aerobic cellular respiration</strong>. They use oxygen to break down fuel molecules from glucose and fats and transfer the released chemical energy into <strong>ATP</strong>, the molecule cells use for energy-requiring work, releasing CO<sub>2</sub> and water.</li>
</ol>
<p>Cells that need a lot of energy (muscle, liver, nerve cells) have hundreds to thousands of mitochondria. Their own DNA and ribosomes are evidence that they came from bacteria engulfed by an early cell (endosymbiosis).</p>`
    },
    {
      tier: "essential",
      q: "Chloroplast: (1) Describe its structure. (2) What is its function? (3) Where is it located?",
      a: `<ol>
<li><strong>Structure:</strong> an oval organelle with a <strong>double membrane</strong>. Inside is a fluid called the <strong>stroma</strong> and stacks (<strong>grana</strong>) of flattened membrane sacs called <strong>thylakoids</strong>, which contain the green pigment <strong>chlorophyll</strong>. Like mitochondria, it has its own DNA and ribosomes. It is a type of <span class="term">plastid</span>.</li>
<li><strong>Function:</strong> <strong>photosynthesis</strong>: it captures light energy and converts it into chemical energy stored in sugars (glucose), using CO<sub>2</sub> and water and releasing O<sub>2</sub>.</li>
<li><strong>Location:</strong> in the cytoplasm of <strong>plant cells</strong> (especially the leaf cells) and algae. <strong>Animal cells do not have chloroplasts.</strong></li>
</ol>`
    },
    {
      tier: "essential",
      q: "Vacuole: (1) Describe its structure. (2) What is its function?",
      a: `<ol>
<li><strong>Structure:</strong> a <strong>membrane-bound sac</strong> (a large vesicle). Mature plant cells have one <strong>large central vacuole</strong> that can take up most of the cell's volume; its membrane is called the tonoplast. Animal cells have several small vacuoles, or none.</li>
<li><strong>Function:</strong> <strong>storage</strong> of water, ions, nutrients and wastes, and help with <strong>water balance</strong>. In plants, the central vacuole fills with water and pushes against the cell wall (turgor pressure), which keeps the cell firm and supports the plant; it can also store pigments and toxic compounds that protect against animals. Food vacuoles digest food, and contractile vacuoles in some protists pump out extra water.</li>
</ol>`
    },
    {
      tier: "essential",
      q: "Microtubules and microfilaments: (1) Describe their structure. (2) Where are they primarily located? (3) What are their functions?",
      a: `<ol>
<li><strong>Structure:</strong> both are protein fibres of the <span class="term">cytoskeleton</span>.
<ul><li><strong>Microtubules</strong>: <strong>hollow tubes</strong> (about 25 nm wide) built from the protein <strong>tubulin</strong>; the thickest fibres.</li>
<li><strong>Microfilaments</strong>: <strong>thin, solid fibres</strong> (about 7 nm wide) made of two twisted chains of the protein <strong>actin</strong>; the thinnest fibres.</li></ul></li>
<li><strong>Location:</strong> throughout the <strong>cytoplasm</strong>. Microtubules radiate out from the centrosome near the nucleus; microfilaments form a dense network just <strong>under the cell membrane</strong>.</li>
<li><strong>Functions:</strong> both can be assembled when needed and taken apart when not.
<ul><li><strong>Microtubules</strong>: maintain cell shape (resist compression), act as <strong>tracks</strong> along which motor proteins move vesicles and organelles, form the <strong>spindle fibres</strong> that separate chromosomes during cell division, and make up <strong>cilia, flagella and centrioles</strong>.</li>
<li><strong>Microfilaments</strong>: support and change cell shape (resist tension), allow <strong>muscle contraction</strong> (with myosin), amoeboid movement (pseudopods), cytoplasmic streaming in plant cells, and pinching an animal cell in two during division.</li></ul></li>
</ol>`
    },
    {
      tier: "essential",
      q: "Cilia and flagella: (1) Describe their structure. (2) What are their functions?",
      a: `<ol>
<li><strong>Structure:</strong> extensions of the cell covered by the cell membrane, each with a core of <strong>microtubules</strong> in a <strong>"9 + 2" pattern</strong> (nine pairs in a ring around two single microtubules in the centre), anchored by a basal body.
<ul><li><strong>Cilia</strong>: short, hair-like and numerous.</li><li><strong>Flagella</strong>: long, whip-like, and usually only one or a few per cell.</li></ul></li>
<li><strong>Functions:</strong> movement. Motor proteins make the microtubules slide past each other, which bends the cilium or flagellum.
<ul><li><strong>Flagella</strong> propel a cell through fluid with a wave-like motion (for example, a sperm cell).</li>
<li><strong>Cilia</strong> beat back and forth like oars, either to move a single cell (such as a paramecium) or to sweep fluid across a surface (for example, cilia lining the airways move mucus and trapped particles up and out of the lungs).</li></ul></li>
</ol>`
    },
    {
      tier: "essential",
      q: "Cell diagram (animal cell): name each labelled structure in the animal cell diagram.",
      a: `<p>The key labels these structures. Learn how to recognize each one in a drawing:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Structure</th><th>How to recognize it</th></tr></thead><tbody>
<tr><td><strong>Cell membrane</strong></td><td>The thin outer boundary of the cell (no wall outside it)</td></tr>
<tr><td><strong>Nuclear envelope / membrane</strong></td><td>The double boundary around the large central nucleus</td></tr>
<tr><td><strong>Nuclear pore</strong></td><td>Small openings dotted over the nuclear envelope</td></tr>
<tr><td><strong>Nucleolus</strong></td><td>Dense, dark round body inside the nucleus</td></tr>
<tr><td><strong>Chromatin</strong></td><td>Tangled threads filling the nucleus</td></tr>
<tr><td><strong>Nucleoplasm</strong></td><td>The fluid inside the nucleus</td></tr>
<tr><td><strong>Rough ER</strong></td><td>Folded flattened sacs next to the nucleus, dotted with ribosomes</td></tr>
<tr><td><strong>Smooth ER</strong></td><td>Network of branching tubes with no dots</td></tr>
<tr><td><strong>Golgi body / apparatus</strong></td><td>Stack of curved flattened sacs with small vesicles budding off</td></tr>
<tr><td><strong>Ribosome</strong></td><td>Tiny dots, free in the cytosol or on the rough ER</td></tr>
<tr><td><strong>Mitochondrion</strong></td><td>Oval organelle with folded inner membrane (cristae)</td></tr>
<tr><td><strong>Lysosome</strong></td><td>Small round single-membrane vesicles</td></tr>
<tr><td><strong>Vacuole</strong></td><td>Small membrane-bound sacs (animal cells have small ones)</td></tr>
<tr><td><strong>Centrioles</strong></td><td>Pair of short cylinders made of microtubules, at right angles, near the nucleus</td></tr>
<tr><td><strong>Microtubule</strong></td><td>Long straight tubes running through the cytoplasm</td></tr>
<tr><td><strong>Cytosol</strong></td><td>The fluid filling the cell around the organelles</td></tr>
</tbody></table></div>`
    },
    {
      tier: "essential",
      q: "Cell diagram (plant cell): name each labelled structure in the plant cell diagram. Which structures are found in plant cells but not animal cells?",
      a: `<p>The key labels: <strong>cell wall</strong>, <strong>cell membrane</strong>, large central <strong>vacuole</strong>, <strong>chloroplasts</strong>, <strong>mitochondria</strong>, <strong>nuclear membrane</strong>, <strong>nuclear pores</strong>, <strong>ribosomes</strong>, <strong>rough ER</strong>, <strong>smooth ER</strong>, <strong>Golgi body</strong>, <strong>microtubules</strong> (cytoskeleton) and <strong>cytosol</strong>.</p>
<ul>
<li><strong>Cell wall</strong>: the thick outer layer, outside the cell membrane.</li>
<li><strong>Central vacuole</strong>: the huge sac that fills most of the middle of the cell, pushing the cytoplasm to the edges.</li>
<li><strong>Chloroplast</strong>: oval organelle with stacks of thylakoids (grana) inside.</li>
<li><strong>Mitochondrion</strong>: smaller oval with folded inner membrane (cristae).</li>
</ul>
<div class="compare"><div><h4>Plant cells only</h4><ul><li>Cell wall (with plasmodesmata)</li><li>Chloroplasts</li><li>Large central vacuole</li></ul></div><div><h4>Animal cells only (or mostly)</h4><ul><li>Centrioles</li><li>Lysosomes (rare in plants)</li><li>Only small vacuoles, if any</li></ul></div></div>
<p>Both have a cell membrane, nucleus, ribosomes, ER, Golgi, mitochondria, cytoskeleton and cytosol. Remember that plant cells have mitochondria as well as chloroplasts.</p>`,
      note: `One small round structure in the plant diagram, with a dense crystal-like core, is left unlabelled on the key. It is most likely a <strong>peroxisome</strong>, an organelle whose enzymes break down fatty acids and inactivate toxins such as hydrogen peroxide.`
    }
  ]
});
/* end qa-108 */

/* ------------------------------------------------------------------ 1.08 readings */
window.QA.push({
  id: "qa-108-reading",
  title: "Animal and Plant Cells readings: concept checks",
  lesson: "1.08",
  source: "Concept Check questions 6.3 to 6.7 printed in the \"Animal and Plant Cells\" textbook readings (no class key; model answers written from the readings)",
  items: [
    {
      tier: "likely",
      q: "Concept Check 6.3: What role do ribosomes play in carrying out genetic instructions?",
      a: `<p>Genes in the DNA are copied into <strong>messenger RNA (mRNA)</strong>, which leaves the nucleus. <strong>Ribosomes read the mRNA</strong> and join amino acids together in the order it specifies, building <strong>polypeptides</strong> (proteins). The proteins then do the work the genes "instruct": enzymes, structural proteins, transport proteins and so on. So ribosomes are where the genetic instructions are turned into actual proteins.</p>`
    },
    {
      tier: "likely",
      q: "Concept Check 6.3: Describe the composition of chromatin and of nucleoli, and the function(s) of each.",
      a: `<ul>
<li><strong>Chromatin</strong> is made of <strong>DNA and proteins</strong> (histones) packed together. It carries the cell's genetic information, keeps the long DNA molecules organized, and condenses into chromosomes when the cell divides.</li>
<li>A <strong>nucleolus</strong> is made of <strong>ribosomal RNA, proteins</strong> and the stretches of DNA that code for rRNA. It makes rRNA and <strong>assembles ribosomal subunits</strong>, which are then exported to the cytoplasm through the nuclear pores.</li>
</ul>`
    },
    {
      tier: "likely",
      q: "Concept Check 6.4: Describe the structural and functional distinctions between rough and smooth ER.",
      a: `<div class="compare"><div><h4>Rough ER</h4><ul><li>Flattened sacs with <strong>ribosomes</strong> on the outer surface</li><li>Continuous with the nuclear envelope</li><li>Makes and folds <strong>proteins</strong> for secretion, membranes and lysosomes; adds sugars to make glycoproteins</li><li>Makes new membrane and sends it out in vesicles</li></ul></div><div><h4>Smooth ER</h4><ul><li>Network of tubules with <strong>no ribosomes</strong></li><li>Continuous with the rough ER</li><li>Makes <strong>lipids</strong> (phospholipids, steroids)</li><li>Metabolizes carbohydrates, <strong>detoxifies</strong> drugs and poisons, <strong>stores Ca<sup>2+</sup></strong></li></ul></div></div>`
    },
    {
      tier: "extra",
      q: "Concept Check 6.4: Imagine a protein that functions in the ER but needs to be modified in the Golgi apparatus before it can do that. Describe the protein's path through the cell, starting with the mRNA molecule that specifies it.",
      a: `<ol class="steps">
<li><p class="step-head">Nucleus</p><p>The gene is copied into mRNA, which leaves the nucleus through a nuclear pore.</p></li>
<li><p class="step-head">Ribosome on the rough ER</p><p>A ribosome starts translating the mRNA and attaches to the rough ER. The growing polypeptide is threaded into the ER lumen, where it folds.</p></li>
<li><p class="step-head">Transport vesicle to the Golgi</p><p>The protein is packaged into a vesicle that buds off the ER and fuses with the receiving side of the Golgi.</p></li>
<li><p class="step-head">Golgi</p><p>Golgi enzymes modify the protein (for example, by changing its sugar chains).</p></li>
<li><p class="step-head">Back to the ER</p><p>The modified protein is packaged into a vesicle that travels <em>back</em> to the ER and fuses with it, releasing the protein where it works.</p></li>
</ol>`
    },
    {
      tier: "likely",
      q: "Concept Check 6.4: How do transport vesicles serve to integrate the endomembrane system?",
      a: `<p>Transport vesicles <strong>bud off from one membrane and fuse with another</strong>, carrying proteins, lipids and membrane between the parts of the endomembrane system: the nuclear envelope, ER, Golgi, lysosomes, vacuoles and the plasma membrane. Because material and membrane flow from one compartment to the next (for example ER → Golgi → plasma membrane), these separate organelles work together as one connected system for making, modifying and shipping products.</p>`
    },
    {
      tier: "likely",
      q: "Concept Check 6.5: Describe at least two common characteristics of chloroplasts and mitochondria.",
      a: `<ul>
<li>Both <strong>transform energy</strong>: chloroplasts convert light energy into chemical energy in sugar; mitochondria convert the chemical energy in fuel into ATP.</li>
<li>Both are surrounded by <strong>two membranes</strong> (a double membrane), with a folded internal membrane system that increases surface area.</li>
<li>Both contain their <strong>own DNA and ribosomes</strong>, so they make some of their own proteins.</li>
<li>Both <strong>grow and divide on their own</strong> within the cell, which supports the idea that they evolved from engulfed bacteria (endosymbiosis).</li>
</ul>`
    },
    {
      tier: "extra",
      q: "Concept Check 6.5: Explain the characteristics of mitochondria and chloroplasts that place them in a separate category from organelles in the endomembrane system.",
      a: `<ul>
<li>Their membranes and most of their proteins are <strong>not made by the ER</strong> and they are <strong>not connected to the other organelles by vesicle traffic</strong>. Their membrane proteins are made by free ribosomes in the cytosol and by their own ribosomes.</li>
<li>They have <strong>double membranes</strong>, their <strong>own DNA and ribosomes</strong>, and they reproduce by <strong>dividing</strong> on their own.</li>
<li>These features reflect their origin as once free-living bacteria (endosymbiosis), unlike the endomembrane organelles, which all developed from and stay linked to the ER and nuclear envelope.</li>
</ul>`
    },
    {
      tier: "extra",
      q: "Concept Check 6.6: Describe how the properties of microtubules, microfilaments and intermediate filaments allow them to determine cell shape.",
      a: `<ul>
<li><strong>Microtubules</strong> are hollow, rigid tubes of tubulin. They act like girders that <strong>resist compression</strong>, holding the cell out.</li>
<li><strong>Microfilaments</strong> are thin actin fibres. They <strong>resist tension</strong> (pulling forces) and form a 3D network just under the plasma membrane that gives the cell surface its shape; they can also change shape by assembling and disassembling.</li>
<li><strong>Intermediate filaments</strong> are rope-like fibres of proteins such as keratin. They are very strong and fairly permanent, <strong>bear tension</strong>, and anchor organelles such as the nucleus in place.</li>
</ul>
<p>Together they form a supporting framework (the cytoskeleton) that sets and maintains the cell's shape.</p>`
    },
    {
      tier: "extra",
      q: "Concept Check 6.6: How do cilia and flagella bend?",
      a: `<p>Motor proteins called <strong>dynein</strong> are attached to each of the nine outer microtubule pairs. Using energy from <strong>ATP</strong>, the dynein "walks" along the neighbouring pair, trying to slide the pairs past each other. Because the pairs are held together by linking proteins, they cannot slide freely, so the force makes the whole cilium or flagellum <strong>bend</strong>. Bending one side and then the other produces the beating motion.</p>`
    },
    {
      tier: "extra",
      q: "Concept Check 6.7: In what ways are the cells of plants and animals structurally different from single-celled eukaryotes?",
      a: `<p>Plant and animal cells are parts of multicellular organisms, so they have structures that <strong>connect them to neighbouring cells</strong>: plasmodesmata in plants and cell junctions (tight junctions, desmosomes, gap junctions) in animals. Plasmodesmata and gap junctions make the cytoplasm of neighbouring cells continuous, so cells can share materials and signals and act together as tissues. They are also surrounded by extracellular structures (plant cell walls, the animal extracellular matrix) that hold the cells together. A single-celled eukaryote lives independently and has no such connections.</p>`
    },
    {
      tier: "extra",
      q: "Concept Check 6.7: What characteristics of the plant cell wall and the animal extracellular matrix allow the cells to exchange matter and information with their external environment?",
      a: `<ul>
<li><strong>Plant cell wall:</strong> it is <strong>porous</strong>, so water and small molecules pass through it, and it is perforated by <strong>plasmodesmata</strong>, channels that let water, small solutes and even some proteins and RNA move between neighbouring cells.</li>
<li><strong>Animal extracellular matrix (ECM):</strong> it is a loose meshwork that substances can diffuse through. ECM proteins (such as fibronectin) bind to receptor proteins in the plasma membrane called <strong>integrins</strong>, which are linked to the cytoskeleton inside the cell. Changes in the ECM can therefore send signals into the cell and even change which genes are active.</li>
</ul>`
    }
  ]
});
/* end qa-108-reading */

/* ------------------------------------------------------------------ 1.08 distribution */
window.QA.push({
  id: "qa-108-dist",
  title: "Organelle Abundance and Distribution",
  lesson: "1.08",
  source: "Organelle Abundance and Distribution worksheet (table and Application Questions) and its class answer key",
  items: [
    {
      tier: "likely",
      q: "Complete the table for mitochondria, rough ER, smooth ER, lysosomes and the Golgi apparatus: main function, cell types with a HIGH concentration, and cell types with a LOW concentration. (Choose from: salivary gland cells producing amylase, pancreatic cells, muscle cells, liver cells, adrenal gland cells, neurons, plasma B cells, fat storage cells, red blood cells, white blood cells.)",
      a: `<div class="table-wrap"><table class="data"><thead><tr><th>Organelle</th><th>Main function</th><th>High concentration</th><th>Low concentration</th></tr></thead><tbody>
<tr><td><strong>Mitochondria</strong></td><td>Generate cellular energy (ATP) by cellular respiration</td><td>Muscle cells, neurons</td><td>Fat cells, red blood cells</td></tr>
<tr><td><strong>Rough ER</strong></td><td>Synthesizes, folds and processes proteins for secretion, insertion into membranes, or delivery within the cell</td><td>Pancreatic cells, plasma B cells</td><td>Muscle cells, fat cells</td></tr>
<tr><td><strong>Smooth ER</strong></td><td>Synthesizes lipids (phospholipids and steroids); detoxifies metabolic wastes</td><td>Liver cells, adrenal gland cells</td><td>Red blood cells, neurons</td></tr>
<tr><td><strong>Lysosomes</strong></td><td>Break down and digest wastes and unwanted materials</td><td>White blood cells, liver cells</td><td>Muscle cells, neurons</td></tr>
<tr><td><strong>Golgi apparatus</strong></td><td>Processes, sorts and directs synthesized molecules</td><td>Pancreatic cells, salivary gland cells, adrenal gland cells</td><td>Fat cells, red blood cells</td></tr>
</tbody></table></div>
<p><strong>The reasoning (structure fits function):</strong></p>
<ul>
<li><strong>Muscle cells and neurons</strong> use huge amounts of ATP (contraction; pumping ions to send signals), so they are packed with mitochondria.</li>
<li><strong>Pancreatic cells</strong> (digestive enzymes), <strong>plasma B cells</strong> (antibodies) and <strong>salivary gland cells</strong> (amylase) secrete large amounts of <strong>protein</strong>, so they need lots of rough ER and Golgi.</li>
<li><strong>Liver cells</strong> detoxify drugs and alcohol, and <strong>adrenal gland cells</strong> make steroid hormones (lipids), so both have lots of smooth ER.</li>
<li><strong>White blood cells</strong> engulf and digest bacteria, and liver cells break down old materials, so they need many lysosomes.</li>
<li><strong>Fat cells</strong> are mostly a storage droplet of lipid with little activity, and mature <strong>red blood cells</strong> have lost their organelles to make room for hemoglobin.</li>
</ul>`,
      note: `Mature red blood cells have <strong>no</strong> mitochondria, ER or Golgi at all (and no nucleus). They make their ATP by glycolysis, so they do not use up the oxygen they carry.`
    },
    {
      tier: "likely",
      q: "Imagine a mutation causing cells to have very few mitochondria. Predict which organs in the body would be most affected, and why.",
      a: `<p><strong>Most affected:</strong> the <strong>heart</strong> (needs ATP to pump continuously), the <strong>brain</strong> (needs a constant supply of ATP for nerve signalling) and the <strong>skeletal muscles</strong> (need ATP for contraction).</p>
<p><strong>Why:</strong> these are the highest-energy-demand tissues, so with few mitochondria they would face an <strong>energy crisis</strong>. Without enough aerobic respiration, cells would have to rely on glycolysis and fermentation, which make far less ATP and produce lactic acid. Expected symptoms: muscle weakness and fatigue, heart problems, and problems with brain and nerve function.</p>`
    },
    {
      tier: "likely",
      q: "Nerve cells have long extensions (axons) that actively move neurotransmitters (proteins) along. They also need to insulate the axon so the signal is passed from one cell to the next. Which organelles need to be especially active to support their function?",
      a: `<ul>
<li><strong>Mitochondria</strong>: supply the ATP for <strong>active transport</strong> of ions (the pumps that let neurons send signals) and for moving materials along the axon.</li>
<li><strong>Rough ER + Golgi</strong>: make, process and package the <strong>neurotransmitter proteins</strong>.</li>
<li><strong>Vesicles</strong>: <strong>transport</strong> the neurotransmitters along the axon and release them at the end by exocytosis.</li>
</ul>`,
      note: `Two more organelles help here. <strong>Microtubules</strong> (cytoskeleton) act as the tracks that motor proteins use to carry vesicles down the long axon. The <strong>insulation</strong> around axons (the myelin sheath) is made mostly of lipid by supporting cells that wrap the axon, so their <strong>smooth ER</strong> (lipid synthesis) is very active.`
    },
    {
      tier: "likely",
      q: "Cells in the stomach lining secrete large amounts of digestive enzymes. Which organelles must be highly active, and how do they work together?",
      a: `<p><strong>Key organelles:</strong> <strong>rough ER</strong> (enzyme production), <strong>Golgi</strong> (packaging enzymes for secretion) and <strong>vesicles</strong> (exocytosis).</p>
<ol class="steps">
<li><p class="step-head">Rough ER</p><p>Ribosomes on the rough ER make the enzymes (proteins), which fold inside the ER and are sent on in transport vesicles.</p></li>
<li><p class="step-head">Golgi</p><p>The Golgi modifies the enzymes, sorts them and packages them into secretory vesicles.</p></li>
<li><p class="step-head">Vesicles</p><p>The secretory vesicles move to the cell membrane, fuse with it, and release the enzymes into the stomach lumen by <strong>exocytosis</strong>.</p></li>
</ol>
<p><strong>Supporting roles:</strong> the nucleus supplies the gene instructions (mRNA), and mitochondria provide the ATP needed for protein synthesis and exocytosis.</p>`
    }
  ]
});
/* end qa-108-dist */
