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
