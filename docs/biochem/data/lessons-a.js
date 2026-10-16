window.LESSONS = window.LESSONS || [];

/* ===================================================================
   1.01 CHEMISTRY BASICS & WATER
   =================================================================== */
window.LESSONS.push({
  id: "1.01",
  title: "Chemistry Basics & Water",
  stage: "c1",
  where: "Water & bonding",
  summary: "The chemistry every later lesson is built on: atomic notation, ions and isotopes, how electronegativity decides whether a bond is nonpolar, polar or ionic, the four intermolecular forces, why hydrogen bonds give water its life-supporting properties, and the reaction types you will meet all year.",
  objectives: [
    "Write any isotope in standard atomic notation and work out its protons, neutrons and electrons.",
    "Explain how cations and anions form, using magnesium (Mg²⁺) and nitrogen (N³⁻) as examples.",
    "Tell stable isotopes from radioisotopes and describe how radioactive tracers are used in biology and medicine.",
    "Use electronegativity differences to classify a bond as nonpolar covalent, polar covalent or ionic, and use shape to decide whether a whole molecule is polar.",
    "Rank London dispersion, dipole–dipole, hydrogen bonding and ion–dipole forces by strength and explain what makes hydrogen bonding special.",
    "Explain cohesion, adhesion, surface tension, capillary action, high specific heat, evaporative cooling, the low density of ice and water's solvent ability in terms of hydrogen bonds.",
    "Classify substances as hydrophilic or hydrophobic and predict whether they will dissolve in water.",
    "Identify acid–base (buffer), redox, dehydration synthesis, hydrolysis and enzyme-catalyzed reactions from their key features."
  ],
  html: `
<h3 data-tier="essential">Why a biology unit starts with chemistry</h3>
<p>Every structure in this unit, from a sugar to a cell membrane, is made of atoms held together by bonds. Each one behaves the way it does because of how its atoms share or trade electrons. The slide on atomic structure puts it in one line: <strong>atomic structure defines how atoms will interact</strong>. That idea explains three things you will use all year:</p>
<ul>
  <li><strong>Polarity</strong>: whether a molecule has slightly charged ends (water does, oil does not).</li>
  <li><strong>Solubility</strong>: whether a substance dissolves in water (sugar does, fat does not).</li>
  <li><strong>Concentration and electrical gradients for transport</strong>: ions such as Na<sup>+</sup> and K<sup>+</sup> carry charges, so cells can build up differences in charge and concentration across their membranes and use them to move materials (lesson 1.10).</li>
</ul>
<p>An atom has a tiny, dense <span class="term">nucleus</span> containing positively charged <span class="term">protons</span> and neutral <span class="term">neutrons</span>, surrounded by negatively charged <span class="term">electrons</span>. Protons decide which element an atom is. Electrons, especially the outermost <span class="term">valence electrons</span>, decide how it bonds.</p>

<h3 data-tier="essential">Standard atomic notation</h3>
<p>Standard atomic notation puts an atom's key numbers around its chemical symbol:</p>
<div class="eq"><sup>A</sup><sub>Z</sub>X</div>
<ul>
  <li><strong>X</strong> = the chemical symbol for the element (C, O, Na…).</li>
  <li><strong>A</strong> = the <span class="term">mass number</span> = number of protons + number of neutrons. It goes top left.</li>
  <li><strong>Z</strong> = the <span class="term">atomic number</span> = number of protons. It goes bottom left. In a neutral atom it also equals the number of electrons.</li>
  <li><strong>N</strong> = the neutron number. It is not written, but you can always find it: <strong>N = A − Z</strong>.</li>
</ul>
<p>The slide's example is carbon-12, written <sup>12</sup><sub>6</sub>C: 6 protons, 12 − 6 = 6 neutrons, and 6 electrons when neutral. Elements are arranged on the periodic table in order of <strong>increasing atomic number</strong>, so Z also gives an element's place in the table: hydrogen is 1, helium 2, lithium 3, and so on.</p>
<p data-tier="likely">The periodic table box for lithium on the slide shows 3 (the atomic number) and 6.941. That decimal is the <em>average</em> atomic mass of all lithium atoms in nature, which are a mix of isotopes. A single atom always has a whole-number mass number. Rounding the average gives the most common isotope: lithium-7, with 3 protons and 4 neutrons.</p>
<details class="check"><summary>Review question 1: Write oxygen-16 in standard atomic notation.</summary><div class="ans"><p><strong><sup>16</sup><sub>8</sub>O.</strong> Oxygen's atomic number is 8 (Z = 8 protons) and the mass number is 16 (A = 16). So it has 16 − 8 = <strong>8 neutrons</strong> and, as a neutral atom, <strong>8 electrons</strong>.</p></div></details>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Swapping A and Z. The mass number is always the <strong>bigger</strong> number and goes on <strong>top</strong>. Protons + neutrons can never be smaller than the protons alone.</p></div>

<h3 data-tier="essential">Ions: cations and anions</h3>
<p><span class="term">Ions</span> are atoms that have gained a positive or negative charge by the <strong>loss or gain of electrons</strong>. The number of protons never changes (that would make it a different element). Only electrons move.</p>
<ul>
  <li><span class="term">Cations</span> are <strong>positively</strong> charged ions. They formed by <strong>losing</strong> electrons, so they have more protons than electrons. Example: Al<sup>3+</sup> (lost 3 electrons).</li>
  <li><span class="term">Anions</span> are <strong>negatively</strong> charged ions. They formed by <strong>gaining</strong> electrons, so they have more electrons than protons. Example: O<sup>2−</sup> (gained 2 electrons).</li>
</ul>
<p>Why do atoms do this? Atoms are most stable with a full outer (valence) shell. The slide's sodium atom has 11 protons and 11 electrons, with a single electron in its outer shell. Losing one electron is far easier than gaining seven, so sodium becomes Na<sup>+</sup>: 11 protons, 10 electrons, net charge +1, with the old outer shell now vacant. In general, <strong>metals</strong> (left side of the table) have few valence electrons and lose them to form cations, and <strong>non-metals</strong> (right side) have nearly full shells and gain electrons to form anions.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>The <strong>t</strong> in ca<strong>t</strong>ion looks like a plus sign: cations are positive. <strong>An</strong>ion = "<strong>A N</strong>egative <strong>ion</strong>".</p></div>
<details class="check"><summary>Review question 2: Describe how ions are formed. Use magnesium and nitrogen as your two examples.</summary><div class="ans"><p>Ions form when atoms <strong>lose or gain electrons</strong> to become more stable. <strong>Magnesium</strong> is a metal with 2 valence electrons, so when bonding it <strong>loses 2 electrons</strong> and forms a cation, <strong>Mg<sup>2+</sup></strong> (12 protons, 10 electrons). <strong>Nitrogen</strong> is a non-metal with 5 valence electrons, so when bonding it <strong>gains 3 electrons</strong> and forms an anion, <strong>N<sup>3−</sup></strong> (7 protons, 10 electrons).</p></div></details>

<h3 data-tier="essential">Isotopes: stable and radioactive</h3>
<p><span class="term">Isotopes</span> are atoms that have the <strong>same number of protons</strong> but <strong>differ in the number of neutrons</strong>. Because they have the same protons, and so the same electrons, isotopes of one element behave the same way chemically. They differ only in mass, and sometimes in how stable the nucleus is.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Isotope</th><th>Protons</th><th>Neutrons</th><th>Mass number</th><th>Stable?</th></tr></thead><tbody>
<tr><td>Carbon-12 (<sup>12</sup><sub>6</sub>C)</td><td>6</td><td>6</td><td>12</td><td>Stable (about 99% of all carbon)</td></tr>
<tr><td>Carbon-13 (<sup>13</sup><sub>6</sub>C)</td><td>6</td><td>7</td><td>13</td><td>Stable</td></tr>
<tr><td>Carbon-14 (<sup>14</sup><sub>6</sub>C)</td><td>6</td><td>8</td><td>14</td><td>Radioactive</td></tr>
</tbody></table></div>
<ul>
  <li><span class="term">Stable isotopes</span> do not change or decay over time.</li>
  <li><span class="term">Radioisotopes</span> have an unstable nucleus. They <strong>spontaneously decay and emit radiation</strong> until they reach a stable form.</li>
</ul>
<details class="check"><summary>Review question 3: Describe the difference between a stable isotope and a radioisotope.</summary><div class="ans"><p>A <strong>stable isotope</strong> does not change over time because its nucleus is stable (e.g. carbon-12). A <strong>radioisotope</strong> decays over time because its nucleus is unstable (for example, a heavy atom with an excess of neutrons or protons). An unstable nucleus <strong>spontaneously releases radiation</strong> to reach stability. Carbon-14 (6 protons, 8 neutrons) is the example: a neutron eventually changes into a proton and releases energy, so the atom becomes stable nitrogen-14 (7 protons, 7 neutrons).</p></div></details>

<h3 data-tier="likely">Radioactive tracers in biology and medicine</h3>
<p>The slide shows three uses for <span class="term">radioactive tracers</span> such as carbon-14: <strong>sequencing chemical reactions</strong>, <strong>biological research</strong>, and the <strong>diagnosis and treatment of disease</strong>. A tracer works because of the two facts above. A radioisotope has the same protons and electrons as the normal atom, so cells use it in exactly the same reactions. But it gives off radiation, so scientists can detect where it ends up. Give a plant CO<sub>2</sub> made with carbon-14 and you can follow that carbon, step by step, into sugars. That is how the order of the reactions in photosynthesis was worked out.</p>
<details class="check"><summary>Review question 4: Research the use of iodine as a cancer treatment.</summary><div class="ans"><p>The thyroid gland (Unit 4: Homeostasis) needs iodine to make its hormones, so it absorbs iodine from the blood. Patients with thyroid cancer, usually after surgery, can be given <strong>radioactive iodine-131</strong>, which has a half-life of about <strong>8 days</strong>. After it is swallowed, it travels through the bloodstream to the thyroid, where it is naturally absorbed. Its radiation destroys the cancer cells (and any remaining healthy thyroid cells). Because only the thyroid takes up iodine, and the radiation penetrates only 1–2 mm of tissue, other cells are protected, which makes it safer than many other forms of radiation treatment.</p></div></details>
<p data-tier="extra">Carbon-14 has a half-life of about 5730 years, which is why it is also used to date once-living material. Organisms take in carbon-14 while they are alive. After death no new carbon comes in, and the carbon-14 left behind halves every 5730 years.</p>

<h3 data-tier="essential">Intramolecular forces: ionic and covalent bonds</h3>
<p><span class="term">Intramolecular forces</span> are the <strong>strong forces holding atoms together within a molecule or compound</strong>. These are chemical bonds, and they are the forces that <strong>break and re-form during chemical reactions</strong>. ("Intra" means within, like intramural sports played within one school.)</p>
<div class="compare">
  <div>
    <h4>Ionic bond</h4>
    <ul>
      <li>The <strong>force of attraction between two oppositely charged ions</strong>.</li>
      <li>Forms when one atom <strong>transfers</strong> one or more electrons to another.</li>
      <li>Usually between a <strong>metal</strong> (loses electrons, becomes a cation) and a <strong>non-metal</strong> (gains electrons, becomes an anion).</li>
      <li>Slide examples: Na gives one electron to Cl, making Na<sup>+</sup> and Cl<sup>−</sup> (sodium chloride); K gives one to I, making potassium iodide.</li>
    </ul>
  </div>
  <div>
    <h4>Covalent bond</h4>
    <ul>
      <li>The <strong>force of attraction between two atoms that share one or more pairs of electrons</strong>.</li>
      <li>No electron is handed over. Each shared pair is attracted to both nuclei, which holds the atoms together.</li>
      <li>Usually between <strong>non-metals</strong>.</li>
      <li>Slide examples: two Cl atoms share one pair to make Cl<sub>2</sub>; oxygen shares one pair with each of two hydrogens to make H<sub>2</sub>O.</li>
    </ul>
  </div>
</div>
<details class="check"><summary>Review question 5: Compare and contrast ionic and covalent bonding.</summary><div class="ans"><p><strong>Ionic:</strong> electrons are <strong>transferred</strong> from a metal atom to a non-metal atom, creating positive cations and negative anions that attract each other. <strong>Covalent:</strong> electrons are <strong>shared</strong> (equally or unequally) between atoms, usually non-metals (sometimes also transition metals and metalloids). <strong>Similar:</strong> both are strong intramolecular forces that hold atoms together, and both involve valence electrons.</p></div></details>
<details class="check"><summary>Review question 6: Which type of bonding is more common in biological systems, where the most common elements are carbon, hydrogen, oxygen and nitrogen? Explain.</summary><div class="ans"><p><strong>Covalent bonding.</strong> Carbon, hydrogen, oxygen and nitrogen are all <strong>non-metals</strong>, so they share their electrons in their bonds instead of transferring them. These strong covalent bonds are what build the macromolecules of this unit: carbohydrates, lipids, proteins and nucleic acids.</p></div></details>

<h3 data-tier="essential">Electronegativity decides the bond type</h3>
<p><span class="term">Electronegativity (En)</span> describes <strong>an atom's ability to attract shared electrons when bonding</strong>. Picture every bond as a tug-of-war over an electron pair. The <strong>difference in electronegativity</strong> (ΔEN) between the two atoms decides who wins, and that decides whether the bond is <strong>nonpolar covalent, polar covalent or ionic</strong>.</p>
<figure class="diagram">
<svg viewBox="0 0 640 244" role="img" aria-labelledby="b101-t2">
<title id="b101-t2">A scale of electronegativity difference from 0 to 3.3. Below 0.5 bonds are nonpolar covalent with equal sharing, such as C–H at 0.35. From 0.5 to 1.7 bonds are polar covalent with unequal sharing and partial charges, such as N–H at 0.84 and O–H at 1.24. Above 1.7 bonds are ionic, with an electron transferred to form full charges, such as Na–Cl at 2.23.</title>
<defs><marker id="b101-m1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--magenta)"/></marker></defs>
<g font-family="inherit" font-size="13" font-weight="700" text-anchor="middle" style="fill:var(--ink)">
<text x="82" y="22">Nonpolar</text><text x="82" y="37">covalent</text>
<text x="227" y="22">Polar</text><text x="227" y="37">covalent</text>
<text x="464" y="22">Ionic</text><text x="464" y="37">bond</text>
</g>
<circle cx="70" cy="88" r="18" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<circle cx="95" cy="88" r="18" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5" fill-opacity="0.85"/>
<circle cx="82.5" cy="83" r="3" style="fill:var(--ink)"/><circle cx="82.5" cy="93" r="3" style="fill:var(--ink)"/>
<circle cx="205" cy="88" r="14" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="1.5"/>
<circle cx="238" cy="88" r="22" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="1.5"/>
<circle cx="222" cy="83" r="3" style="fill:var(--ink)"/><circle cx="222" cy="93" r="3" style="fill:var(--ink)"/>
<text x="201" y="92" font-family="inherit" font-size="11" text-anchor="middle" style="fill:var(--ink)">H</text>
<text x="244" y="92" font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink)">O</text>
<text x="205" y="64" font-family="inherit" font-size="14" text-anchor="middle" style="fill:var(--blue)">δ+</text>
<text x="240" y="58" font-family="inherit" font-size="14" text-anchor="middle" style="fill:var(--red)">δ−</text>
<circle cx="430" cy="88" r="16" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<circle cx="500" cy="88" r="22" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="1.5"/>
<text x="430" y="92" font-family="inherit" font-size="11" text-anchor="middle" style="fill:var(--ink)">Na⁺</text>
<text x="500" y="92" font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink)">Cl⁻</text>
<path d="M440,68 Q465,44 486,64" style="fill:none;stroke:var(--magenta)" stroke-width="1.8" marker-end="url(#b101-m1)"/>
<text x="463" y="47" font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--magenta)">e⁻</text>
<g font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink-2)">
<text x="82" y="126">equal</text><text x="82" y="141">sharing</text>
<text x="227" y="126">unequal sharing gives</text><text x="227" y="141">partial charges (δ+, δ−)</text>
<text x="464" y="126">electron transferred gives</text><text x="464" y="141">full charges (ions)</text>
</g>
<rect x="40" y="150" width="84.8" height="18" style="fill:var(--teal-soft);stroke:var(--teal)"/>
<rect x="124.8" y="150" width="203.7" height="18" style="fill:var(--amber-soft);stroke:var(--amber)"/>
<rect x="328.5" y="150" width="271.5" height="18" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<g style="stroke:var(--ink-2)" stroke-width="1.5"><line x1="40" y1="168" x2="40" y2="175"/><line x1="124.8" y1="168" x2="124.8" y2="175"/><line x1="328.5" y1="168" x2="328.5" y2="175"/><line x1="600" y1="168" x2="600" y2="175"/></g>
<g font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink)"><text x="40" y="188">0</text><text x="124.8" y="188">0.5</text><text x="328.5" y="188">1.7</text><text x="600" y="188">3.3</text></g>
<g style="fill:var(--ink)"><circle cx="99.4" cy="159" r="4"/><circle cx="182.5" cy="159" r="4"/><circle cx="250.4" cy="159" r="4"/><circle cx="418.4" cy="159" r="4"/></g>
<g style="stroke:var(--ink-2)" stroke-dasharray="2 3"><line x1="99.4" y1="168" x2="99.4" y2="195"/><line x1="182.5" y1="168" x2="182.5" y2="195"/><line x1="250.4" y1="168" x2="250.4" y2="195"/><line x1="418.4" y1="168" x2="418.4" y2="195"/></g>
<g font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink)"><text x="99.4" y="208">C–H 0.35</text><text x="182.5" y="208">N–H 0.84</text><text x="250.4" y="208">O–H 1.24</text><text x="418.4" y="208">Na–Cl 2.23</text></g>
<text x="320" y="234" font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink-2)">Electronegativity difference (ΔEN) between the two bonded atoms</text>
</svg>
<figcaption>The bigger the electronegativity difference, the more one atom hogs the shared electrons. A small difference gives equal sharing, a medium difference gives partial charges, and a large difference pulls the electron right over, making ions.</figcaption>
</figure>
<div class="table-wrap"><table class="data"><thead><tr><th>ΔEN</th><th>Bond type</th><th>What the electrons do</th></tr></thead><tbody>
<tr><td>less than 0.5</td><td>Nonpolar covalent</td><td>Shared (about) equally</td></tr>
<tr><td>0.5 to 1.7</td><td>Polar covalent</td><td>Shared unequally, so partial charges form</td></tr>
<tr><td>greater than 1.7</td><td>Ionic</td><td>Transferred, so full charges form</td></tr>
</tbody></table></div>
<p>To use the table, subtract the smaller electronegativity from the larger. The values you need most often (Pauling scale) are H 2.20, C 2.55, N 3.04, O 3.44, F 3.98, Na 0.93 and Cl 3.16.</p>
<ul>
  <li><strong>C–H:</strong> 2.55 − 2.20 = 0.35, nonpolar covalent. This is why hydrocarbon chains, and therefore fats, are nonpolar.</li>
  <li><strong>O–H:</strong> 3.44 − 2.20 = 1.24, polar covalent. This is why water and every hydroxyl group are polar.</li>
  <li><strong>N–H:</strong> 3.04 − 2.20 = 0.84, polar covalent.</li>
  <li><strong>Na–Cl:</strong> 3.16 − 0.93 = 2.23, ionic.</li>
  <li><strong>O=O or Cl–Cl:</strong> 0, nonpolar covalent. Two identical atoms always share equally.</li>
</ul>
<details class="check"><summary>Review question 7: Which element has the highest electronegativity? Which region of the periodic table has the highest values?</summary><div class="ans"><p><strong>Fluorine</strong> has the highest electronegativity. Electronegativity <strong>increases from left to right across a period and from bottom to top within a group</strong>, so the highest values are in the <strong>top right corner</strong> of the periodic table, <strong>excluding the noble gases</strong> (group 18).</p></div></details>
<p data-tier="extra">Why the trend? Moving right across a period adds protons to the nucleus while electrons go into the same shell, so the nucleus pulls harder on bonding electrons. Moving down a group adds whole new electron shells, which puts bonding electrons farther from the nucleus and shields them, so the pull gets weaker.</p>

<h3 data-tier="essential">Polar and nonpolar molecules</h3>
<p>In a <span class="term">polar covalent</span> bond, the <strong>unequal sharing</strong> of electrons between the atoms results in <strong>partial charges</strong>, called a <span class="term">dipole</span>:</p>
<ul>
  <li>One atom becomes <strong>slightly positive (δ+)</strong>. It has the <strong>weaker</strong> affinity for the electron pair.</li>
  <li>The other becomes <strong>slightly negative (δ−)</strong>. It has the <strong>stronger</strong> affinity for the electron pair.</li>
</ul>
<p>The Greek letter δ (delta) means "partial". No electron has been fully handed over, so these are not the full + and − charges of an ion. Water is the key example. Oxygen is much more electronegative than hydrogen, so both shared pairs spend more of their time near the oxygen. The oxygen end becomes δ− and each hydrogen becomes δ+. The slide pictures it as a tug-of-war that oxygen is winning.</p>
<figure class="diagram">
<svg viewBox="0 0 640 350" role="img" aria-labelledby="b101-t3">
<title id="b101-t3">Left: one water molecule, bent at 104.5 degrees. The shared electron pairs sit closer to the oxygen, so oxygen is partially negative and both hydrogens are partially positive. Right: five water molecules. Dotted hydrogen bonds run from the partially positive hydrogens of one molecule to the partially negative oxygen of a neighbour; solid lines are the covalent bonds inside each molecule.</title>
<text x="150" y="24" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">One water molecule is polar</text>
<text x="478" y="24" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">Water molecules hydrogen-bond</text>
<line x1="315" y1="40" x2="315" y2="330" style="stroke:var(--line)" stroke-width="1.5"/>
<g style="stroke:var(--ink-2)" stroke-width="6"><line x1="150" y1="130" x2="78.8" y2="185.1"/><line x1="150" y1="130" x2="221.2" y2="185.1"/></g>
<path d="M102.5,166.7 A60,60 0 0 0 197.5,166.7" style="fill:none;stroke:var(--ink-2)" stroke-dasharray="3 3"/>
<circle cx="150" cy="130" r="38" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="2"/>
<circle cx="78.8" cy="185.1" r="24" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="2"/>
<circle cx="221.2" cy="185.1" r="24" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="2"/>
<g style="fill:var(--amber);stroke:var(--ink)" stroke-width="0.8"><circle cx="113.5" cy="164.6" r="3.5"/><circle cx="107.3" cy="156.6" r="3.5"/><circle cx="186.5" cy="164.6" r="3.5"/><circle cx="192.7" cy="156.6" r="3.5"/></g>
<text x="150" y="137" text-anchor="middle" font-family="inherit" font-size="20" font-weight="700" style="fill:var(--ink)">O</text>
<text x="78.8" y="191" text-anchor="middle" font-family="inherit" font-size="16" font-weight="700" style="fill:var(--ink)">H</text>
<text x="221.2" y="191" text-anchor="middle" font-family="inherit" font-size="16" font-weight="700" style="fill:var(--ink)">H</text>
<text x="150" y="84" text-anchor="middle" font-family="inherit" font-size="18" font-weight="700" style="fill:var(--red)">δ−</text>
<text x="38" y="190" text-anchor="middle" font-family="inherit" font-size="18" font-weight="700" style="fill:var(--blue)">δ+</text>
<text x="262" y="190" text-anchor="middle" font-family="inherit" font-size="18" font-weight="700" style="fill:var(--blue)">δ+</text>
<text x="150" y="212" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">104.5°</text>
<g font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink-2)"><text x="150" y="250">Oxygen is more electronegative, so the</text><text x="150" y="266">shared electrons (dots) stay closer to O.</text><text x="150" y="288" font-weight="700" style="fill:var(--ink)">Result: δ− oxygen, δ+ hydrogens.</text></g>
<g style="stroke:var(--teal)" stroke-width="2.5" stroke-dasharray="2 4" stroke-linecap="round"><line x1="446.9" y1="201.5" x2="430.1" y2="247.8"/><line x1="493.1" y1="201.5" x2="509.9" y2="247.8"/><line x1="418.7" y1="139.8" x2="457.1" y2="162.4"/><line x1="521.3" y1="139.8" x2="482.9" y2="162.4"/></g>
<g style="stroke:var(--ink-2)" stroke-width="4"><line x1="470" y1="170" x2="450" y2="193"/><line x1="470" y1="170" x2="490" y2="193"/><line x1="425" y1="262" x2="400" y2="280"/><line x1="425" y1="262" x2="448.1" y2="281.2"/><line x1="515" y1="262" x2="540" y2="280"/><line x1="515" y1="262" x2="491.9" y2="281.2"/><line x1="385" y1="120" x2="410.9" y2="135.2"/><line x1="385" y1="120" x2="393" y2="91"/><line x1="555" y1="120" x2="529.1" y2="135.2"/><line x1="555" y1="120" x2="547" y2="91"/></g>
<g style="fill:var(--red-soft);stroke:var(--red)" stroke-width="1.5"><circle cx="470" cy="170" r="15"/><circle cx="425" cy="262" r="15"/><circle cx="515" cy="262" r="15"/><circle cx="385" cy="120" r="15"/><circle cx="555" cy="120" r="15"/></g>
<g style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="1.5"><circle cx="450" cy="193" r="9"/><circle cx="490" cy="193" r="9"/><circle cx="400" cy="280" r="9"/><circle cx="448.1" cy="281.2" r="9"/><circle cx="540" cy="280" r="9"/><circle cx="491.9" cy="281.2" r="9"/><circle cx="410.9" cy="135.2" r="9"/><circle cx="393" cy="91" r="9"/><circle cx="529.1" cy="135.2" r="9"/><circle cx="547" cy="91" r="9"/></g>
<text x="470" y="148" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--red)">δ−</text>
<text x="437" y="199" text-anchor="end" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--blue)">δ+</text>
<text x="503" y="199" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--blue)">δ+</text>
<line x1="340" y1="316" x2="370" y2="316" style="stroke:var(--ink-2)" stroke-width="4"/>
<text x="378" y="320" font-family="inherit" font-size="12" style="fill:var(--ink)">covalent bond: within one molecule</text>
<line x1="340" y1="336" x2="370" y2="336" style="stroke:var(--teal)" stroke-width="2.5" stroke-dasharray="2 4" stroke-linecap="round"/>
<text x="378" y="340" font-family="inherit" font-size="12" style="fill:var(--ink)">hydrogen bond: between molecules</text>
</svg>
<figcaption>Left: oxygen wins the tug-of-war for the shared electrons, so a bent water molecule has a δ− end and a δ+ end. Right: the δ+ hydrogens of one molecule are attracted to the δ− oxygen of the next. These hydrogen bonds (dotted) are intermolecular; the O–H bonds (solid) are intramolecular.</figcaption>
</figure>
<p>Whether a whole <strong>molecule</strong> is polar depends on two things: the polarity of its bonds <strong>and its shape</strong>. In a <strong>symmetrical</strong> molecule, the bond dipoles pull in opposite directions and <strong>cancel</strong>, so the molecule is nonpolar overall even if every bond in it is polar. The slide's examples:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Molecule</th><th>Shape</th><th>Polar?</th><th>Why</th></tr></thead><tbody>
<tr><td>HCl</td><td>Linear, two different atoms</td><td>Polar</td><td>One polar bond, nothing to cancel it.</td></tr>
<tr><td>Cl<sub>2</sub></td><td>Linear, identical atoms</td><td>Nonpolar</td><td>Bonding electrons shared equally; no charges on the atoms.</td></tr>
<tr><td>CCl<sub>4</sub></td><td>Tetrahedral, four identical bonds</td><td>Nonpolar</td><td>Four equal C–Cl dipoles point symmetrically and cancel.</td></tr>
<tr><td>CH<sub>3</sub>Cl</td><td>Tetrahedral, one different bond</td><td>Polar</td><td>The strong C–Cl dipole is not balanced by the C–H bonds.</td></tr>
<tr><td>BF<sub>3</sub></td><td>Flat triangle</td><td>Nonpolar</td><td>Three equal B–F dipoles at 120° cancel.</td></tr>
<tr><td>NH<sub>3</sub></td><td>Pyramid (lone pair on N)</td><td>Polar</td><td>The lone pair pushes the N–H bonds to one side, so the dipoles do not cancel.</td></tr>
<tr><td>H<sub>2</sub>O</td><td>Bent (104.5°)</td><td>Polar</td><td>Two lone pairs on O bend the molecule, so both O–H dipoles point the same general way.</td></tr>
</tbody></table></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"CO<sub>2</sub> has polar bonds, so it is a polar molecule." No. Each C=O bond is polar, but CO<sub>2</sub> is <strong>linear</strong> (O=C=O), so the two dipoles pull in exactly opposite directions and cancel. Always check the <strong>shape</strong> before calling a molecule polar.</p></div>
<details class="check"><summary>Review question 8: Are these polar or nonpolar, and why? (a) NH<sub>3</sub> (b) O<sub>2</sub> (c) CO<sub>2</sub> (d) PO<sub>4</sub><sup>3−</sup></summary><div class="ans"><ul>
<li><strong>(a) Ammonia, NH<sub>3</sub>: polar.</strong> Nitrogen has 5 valence electrons and shares one with each hydrogen, leaving <strong>one pair of electrons</strong> on the nitrogen. This lone pair prevents the dipoles from cancelling out.</li>
<li><strong>(b) Oxygen, O<sub>2</sub>: nonpolar.</strong> The electrons are shared equally between the two oxygen atoms because they have the same electronegativity.</li>
<li><strong>(c) Carbon dioxide, CO<sub>2</sub>: nonpolar.</strong> Double bonds form between the central carbon and each oxygen, with <strong>no lone pairs</strong> on the carbon. This symmetrical arrangement cancels out the dipoles.</li>
<li><strong>(d) Phosphate ion, PO<sub>4</sub><sup>3−</sup>: nonpolar.</strong> The central phosphorus is surrounded by 4 oxygens and no lone pairs, giving a symmetrical shape that cancels the dipoles. <strong>But</strong> it is a polyatomic ion with an overall negative charge, so it can still take part in ion–dipole or ionic interactions.</li>
</ul></div></details>
<h3 data-tier="essential">Intermolecular forces</h3>
<p><span class="term">Intermolecular forces</span> are the <strong>weaker attractive forces that exist between molecules</strong>. They do not hold a molecule together; they hold molecules <em>to each other</em>. That is why they determine <strong>physical properties</strong>: boiling point, melting point, viscosity and state of matter.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>When water boils, the bubbles are <strong>not</strong> hydrogen and oxygen gas. Boiling is a physical change. It only overcomes the <strong>intermolecular</strong> hydrogen bonds between water molecules; the covalent O–H bonds inside each molecule stay intact, so the bubbles are water vapour. Only chemical reactions break intramolecular bonds.</p></div>
<p>The slide's table lists four kinds, from weakest to strongest:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Force</th><th>Present in</th><th>Cause</th><th>Strength (kJ/mol)</th></tr></thead><tbody>
<tr><td>London dispersion</td><td>All molecules and atoms</td><td>Temporary dipoles from constant electron movement</td><td>0.05–40</td></tr>
<tr><td>Dipole–dipole</td><td>Polar molecules</td><td>Permanent δ+ end of one molecule attracts the δ− end of another</td><td>5–25</td></tr>
<tr><td>Hydrogen bonding</td><td>Molecules with H bonded to F, O or N</td><td>Very strong dipole–dipole between that H and an F, O or N on a neighbour</td><td>10–40</td></tr>
<tr><td>Ion–dipole</td><td>Mixtures of ionic and polar compounds</td><td>Full charge of an ion attracts the partial charge of a polar molecule</td><td>40–600</td></tr>
</tbody></table></div>
<h4>London dispersion forces</h4>
<p>A <span class="term">London dispersion force (LDF)</span> is a <strong>weak, temporary attraction between all atoms and molecules caused by constant electron movement</strong>. For a split second, more electrons may be on one side of an atom (the slide uses helium), creating an <strong>instantaneous dipole</strong>. That dipole pushes the electrons of a neighbouring atom away, creating an <strong>induced dipole</strong>, and the two attract. A moment later the electrons shift and the attraction is gone. LDFs are the only force between nonpolar molecules such as O<sub>2</sub>, CO<sub>2</sub> and the hydrocarbon tails of fats.</p>
<h4>Dipole–dipole forces</h4>
<p>A <span class="term">dipole–dipole force</span> is a <strong>slightly stronger, permanent attraction between polar molecules</strong> with fixed positive and negative ends. In H–Br, bromine is more electronegative and pulls the shared electrons toward itself, giving a permanent δ+ hydrogen end and δ− bromine end. Neighbouring HBr molecules line up so the δ+ end of one faces the δ− end of the next.</p>
<h4>Hydrogen bonding</h4>
<p>A <span class="term">hydrogen bond</span> is a <strong>strong dipole–dipole attraction between an electropositive hydrogen and an electronegative nitrogen, oxygen or fluorine</strong>. The hydrogen must itself be covalently bonded to N, O or F; it is then attracted to an N, O or F on another molecule, or on another part of the same large molecule. Water is the classic example (figure above). The slide also showed hydrogen bonds holding the two strands of the DNA double helix together.</p>
<details class="check"><summary>Review question 9: Why is hydrogen bonding so special?</summary><div class="ans"><p>It is a special dipole–dipole interaction that is unusually strong for two reasons. <strong>Size:</strong> hydrogen is very small, and N, O and F are also small, so the two partial charges can get physically very close, and the closer they are, the stronger the force. <strong>Electronegativity:</strong> the difference between hydrogen and N, O or F is so large that the shared electrons are almost completely pulled away from the hydrogen.</p></div></details>
<h4>Ion–dipole forces</h4>
<p>An <span class="term">ion–dipole force</span> is the <strong>strongest attraction: between an ion with a full charge and a polar molecule with a partial charge</strong>. A cation attracts the δ− end of a polar molecule; an anion attracts the δ+ end. This is how salt dissolves in water (below).</p>
<p data-tier="likely">The slide marks ion–dipole with an asterisk for a reason. An ion is not a molecule, so strictly speaking this is not an <em>inter</em>molecular force, even though many textbooks list it as one.</p>
<details class="check"><summary>Review question 10: Rank the inter- and intramolecular forces in order of increasing strength.</summary><div class="ans"><p><strong>London dispersion &lt; dipole–dipole &lt; hydrogen bonding &lt; ion–dipole &lt; intramolecular bonds (covalent and ionic).</strong></p><p>Intramolecular bonds are broken and re-formed only in chemical reactions, while physical changes such as boiling only disrupt intermolecular forces. LDFs are weak and temporary. Dipole–dipole forces are stronger because the dipoles are permanent. Hydrogen bonds are an especially strong dipole–dipole because of the huge electronegativity difference and small atom sizes. Ion–dipole is strongest because one partner carries a full charge. Within covalent bonds, polar covalent is stronger than nonpolar because the partial charges add extra electrostatic attraction.</p></div></details>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>"<strong>L</strong>azy <strong>D</strong>ogs <strong>H</strong>ate <strong>I</strong>ce": <strong>L</strong>DF &lt; <strong>D</strong>ipole–dipole &lt; <strong>H</strong>ydrogen bond &lt; <strong>I</strong>on–dipole.</p></div>
<details class="check" data-tier="likely"><summary>Review question 11: How is hydrogen bonding used in protein and nucleic acid structure?</summary><div class="ans"><p><strong>Proteins:</strong> hydrogen bonds form along the polypeptide backbone, between the oxygen of the carbonyl group of one amino acid and the hydrogen of the amino group of another, creating <strong>alpha helices</strong> or <strong>beta pleated sheets</strong>. Hydrogen bonds between the side chains (R groups) of different amino acids also fold the protein into its specific shape. <strong>Nucleic acids:</strong> hydrogen bonds hold the nitrogenous bases of the two opposite DNA strands together. You will see both again in lessons 1.05 and 1.06.</p></div></details>

<h3 data-tier="essential">Water: why it matters</h3>
<p>Water is the major component of most body parts. The slide's body diagram lists its jobs: it forms saliva (digestion), keeps mucous membranes moist, lets cells grow, reproduce and survive, flushes waste (mainly in urine), lubricates joints, is needed by the brain to make hormones and neurotransmitters, regulates body temperature (sweating and respiration), cushions the brain and spinal cord, helps convert food into usable components, and helps deliver oxygen around the body.</p>
<p>The properties that make this possible are <strong>cohesion, adhesion, surface tension, high specific heat, evaporative cooling, its role as a solvent, and dissociation</strong>. All of them come from one fact: <strong>water is a small, bent, polar molecule that forms hydrogen bonds</strong>. Each water molecule can hydrogen-bond with up to four neighbours.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Every water-property answer starts the same way: "Because water is polar and forms hydrogen bonds…". Then say what the hydrogen bonds do in that case: hold molecules together, absorb heat, form a lattice, or surround ions.</p></div>

<h3 data-tier="essential">Cohesion, adhesion and surface tension</h3>
<ul>
  <li><span class="term">Cohesion</span>: water molecules form hydrogen bonds <strong>with one another</strong>. Water sticks to water.</li>
  <li><span class="term">Adhesion</span>: water molecules form hydrogen bonds <strong>with other polar materials</strong> (or charged ones). Water sticks to glass, paper or the walls of plant xylem.</li>
</ul>
<p><span class="term">Surface tension</span> is <strong>due to cohesion</strong>. It causes the surface of water to <strong>resist external forces as if the top layer were a stretched elastic skin</strong>. A molecule in the middle of the water is pulled equally in every direction by its neighbours, so the pulls cancel. A molecule at the surface has no water above it, so it is pulled only sideways and <strong>inward</strong>, which tightens the top layer. That is why water beads into round drops on a leaf and why a water strider can stand on a pond.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Co</strong>hesion = <strong>co</strong>-workers (the same kind sticking together). <strong>Ad</strong>hesion = <strong>ad</strong>hesive tape (sticking to something else).</p></div>
<details class="check"><summary>Review question 12: What is the difference between adhesion and cohesion?</summary><div class="ans"><p><strong>Adhesion</strong> is the attraction of a fluid (e.g. water) to <strong>other</strong> polar or charged molecules or surfaces through hydrogen bonds. <strong>Cohesion</strong> is the attraction of a fluid to <strong>itself</strong> through hydrogen bonds.</p></div></details>
<details class="check"><summary>Review question 14: Using concepts of polarity, discuss why water is "sticky".</summary><div class="ans"><p>Water is polar because the electronegative oxygen shares electrons unequally with the electropositive hydrogens, making a partially negative oxygen and partially positive hydrogens. The δ− oxygen attracts the δ+ hydrogens of neighbouring water molecules and forms strong hydrogen bonds that hold water together (<strong>cohesion</strong>). Water is also sticky because it attracts other polar molecules and surfaces and forms hydrogen bonds with them (<strong>adhesion</strong>).</p></div></details>

<h3 data-tier="essential">Capillary action</h3>
<p><span class="term">Capillary action</span> is water <strong>spontaneously travelling through narrow or porous materials</strong>, even upward against gravity. It is <strong>due to adhesion, cohesion and surface tension</strong> together. Adhesion pulls water up the walls of the tube, and cohesion drags the rest of the water column up behind it. The slide's diagram shows that the <strong>narrower</strong> the space, the <strong>higher</strong> the water climbs, because a narrow tube has more wall to stick to compared with the weight of water inside.</p>
<details class="check"><summary>Review question 13: What is capillary action and where is it used in biological systems?</summary><div class="ans"><p>It is a process in which a fluid travels up a narrow tube or porous material against gravity. It occurs when <strong>adhesion is stronger than cohesion</strong> (the fluid is attracted to the tube more than to itself), but both matter: adhesion makes the fluid stick to the tube, and cohesion draws the rest of the fluid up. It helps draw water up the <strong>xylem</strong> of plants at first, but <strong>transpiration pull</strong> (evaporation from the leaves) is ultimately needed to lift water up taller plants.</p></div></details>

<h3 data-tier="essential">High specific heat capacity</h3>
<p><strong>Because of hydrogen bonds, water must absorb or release a very large amount of heat to change its temperature.</strong> When you heat water, much of the energy goes into breaking hydrogen bonds instead of making the molecules move faster, and temperature is a measure of how fast molecules move. So water heats up and cools down slowly. This <strong>allows us to maintain a constant body temperature of 37 °C</strong>, and it lets lakes and oceans act as heat sinks that keep conditions stable for aquatic life.</p>
<details class="check"><summary>Review question 16: Why do hydrogen bonds give water a high specific heat capacity?</summary><div class="ans"><p>Added thermal energy is used to <strong>disrupt the hydrogen bonds</strong> between water molecules rather than to speed up the kinetic energy (movement) of the molecules, so the temperature rises only slowly.</p></div></details>
<details class="check"><summary>Review question 15: What would happen to the body if water had a LOW specific heat capacity?</summary><div class="ans"><p>Little heat would be needed to change body temperature, so organisms could not properly maintain their temperature (evaporative cooling would also be ineffective). The risk of cell damage would rise: <strong>proteins would denature at high temperatures</strong> and <strong>enzyme-catalyzed reactions would slow at low temperatures</strong>. Large bodies of water would no longer be effective heat sinks, so temperatures in marine environments would swing widely and make survival extremely difficult.</p></div></details>
<p data-tier="extra">Water's specific heat capacity is 4.18 J/(g·°C): 4.18 J warms 1 g of water by 1 °C, about five times the heat needed for the same mass of sand.</p>

<h3 data-tier="essential">Heat of vaporization and evaporative cooling</h3>
<p>Because of hydrogen bonds, liquid water must <strong>absorb a very large amount of heat to become a vapour</strong> (gas). To escape into the air, a molecule must break free of <em>all</em> its hydrogen bonds. This leads to <span class="term">evaporative cooling</span>: the evaporating molecules carry that heat away, so the surface they leave cools down. <strong>Humans</strong> dissipate body heat by the evaporation of <strong>sweat from the skin</strong>; <strong>dogs</strong> do it by the evaporation of <strong>saliva from the tongue</strong> when they pant.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Sweat does not cool you; its <strong>evaporation</strong> does. On a humid day sweat drips off instead of evaporating, so you stay hot. Keep the two heat properties separate: specific heat is about <strong>changing temperature</strong>; heat of vaporization is about <strong>changing liquid to gas</strong>.</p></div>

<h3 data-tier="essential">Ice is less dense than liquid water</h3>
<ul>
  <li>As water cools below 0 °C, it forms a <strong>crystalline lattice</strong>.</li>
  <li>In liquid water, hydrogen bonds are unstable: they constantly break and re-form, so molecules can crowd together. In ice, <strong>stable hydrogen bonds spread the molecules apart</strong> into an open pattern, <strong>reducing the density of ice</strong>.</li>
  <li>Liquid water has its <strong>greatest density at 4 °C</strong>.</li>
</ul>
<p>Almost every other substance is denser as a solid. Because ice floats, a lake freezes from the top down. The ice (0 °C) insulates the water below, and the densest water (4 °C) sinks to the bottom, where fish survive the winter. If ice sank, lakes would freeze solid from the bottom up.</p>

<h3 data-tier="essential">Water as the universal solvent</h3>
<p>Since water is polar, it can <strong>dissolve other polar molecules and ionic substances</strong>: sugars, alcohols, salts and more. The rule of thumb is "<strong>like dissolves like</strong>". When salt dissolves, ion–dipole attractions pull the ions out of the crystal and each ion is surrounded by a shell of water molecules, oriented by charge. An ionic compound separating into its ions in water is called <span class="term">dissociation</span>.</p>
<figure class="diagram">
<svg viewBox="0 0 640 286" role="img" aria-labelledby="b101-t4">
<title id="b101-t4">Salt dissolving in water. Left: a sodium ion surrounded by six water molecules, each with its partially negative oxygen end pointing toward the positive ion. Right: a chloride ion surrounded by six water molecules, each with a partially positive hydrogen pointing toward the negative ion. Each attraction is an ion–dipole force.</title>
<text x="320" y="22" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">NaCl dissolving: water surrounds each ion</text>
<g style="stroke:var(--ink-2)" stroke-width="3">
<line x1="160" y1="78" x2="178.9" y2="63.2"/><line x1="160" y1="78" x2="141.1" y2="63.2"/><line x1="213.7" y1="109" x2="235.9" y2="118"/><line x1="213.7" y1="109" x2="217" y2="85.2"/><line x1="213.7" y1="171" x2="217" y2="194.8"/><line x1="213.7" y1="171" x2="235.9" y2="162"/><line x1="160" y1="202" x2="141.1" y2="216.8"/><line x1="160" y1="202" x2="178.9" y2="216.8"/><line x1="106.3" y1="171" x2="84.1" y2="162"/><line x1="106.3" y1="171" x2="103" y2="194.8"/><line x1="106.3" y1="109" x2="103" y2="85.2"/><line x1="106.3" y1="109" x2="84.1" y2="118"/>
<line x1="480" y1="70" x2="480" y2="94"/><line x1="480" y1="70" x2="456.8" y2="64"/><line x1="540.6" y1="105" x2="519.8" y2="117"/><line x1="540.6" y1="105" x2="534.2" y2="81.9"/><line x1="540.6" y1="175" x2="519.8" y2="163"/><line x1="540.6" y1="175" x2="557.4" y2="157.9"/><line x1="480" y1="210" x2="480" y2="186"/><line x1="480" y1="210" x2="503.2" y2="216"/><line x1="419.4" y1="175" x2="440.2" y2="163"/><line x1="419.4" y1="175" x2="425.8" y2="198.1"/><line x1="419.4" y1="105" x2="440.2" y2="117"/><line x1="419.4" y1="105" x2="402.6" y2="122.1"/>
</g>
<circle cx="160" cy="140" r="20" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="2"/>
<circle cx="480" cy="140" r="26" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<g style="fill:var(--red-soft);stroke:var(--red)" stroke-width="1.5">
<circle cx="160" cy="78" r="11"/><circle cx="213.7" cy="109" r="11"/><circle cx="213.7" cy="171" r="11"/><circle cx="160" cy="202" r="11"/><circle cx="106.3" cy="171" r="11"/><circle cx="106.3" cy="109" r="11"/>
<circle cx="480" cy="70" r="11"/><circle cx="540.6" cy="105" r="11"/><circle cx="540.6" cy="175" r="11"/><circle cx="480" cy="210" r="11"/><circle cx="419.4" cy="175" r="11"/><circle cx="419.4" cy="105" r="11"/>
</g>
<g style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="1.5">
<circle cx="178.9" cy="63.2" r="7"/><circle cx="141.1" cy="63.2" r="7"/><circle cx="235.9" cy="118" r="7"/><circle cx="217" cy="85.2" r="7"/><circle cx="217" cy="194.8" r="7"/><circle cx="235.9" cy="162" r="7"/><circle cx="141.1" cy="216.8" r="7"/><circle cx="178.9" cy="216.8" r="7"/><circle cx="84.1" cy="162" r="7"/><circle cx="103" cy="194.8" r="7"/><circle cx="103" cy="85.2" r="7"/><circle cx="84.1" cy="118" r="7"/>
<circle cx="480" cy="94" r="7"/><circle cx="456.8" cy="64" r="7"/><circle cx="519.8" cy="117" r="7"/><circle cx="534.2" cy="81.9" r="7"/><circle cx="519.8" cy="163" r="7"/><circle cx="557.4" cy="157.9" r="7"/><circle cx="480" cy="186" r="7"/><circle cx="503.2" cy="216" r="7"/><circle cx="440.2" cy="163" r="7"/><circle cx="425.8" cy="198.1" r="7"/><circle cx="440.2" cy="117" r="7"/><circle cx="402.6" cy="122.1" r="7"/>
</g>
<text x="160" y="145" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">Na⁺</text>
<text x="480" y="145" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">Cl⁻</text>
<circle cx="290" cy="110" r="9" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="1.5"/>
<text x="306" y="114" font-family="inherit" font-size="12" style="fill:var(--ink)">O end: δ−</text>
<circle cx="290" cy="138" r="6" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="1.5"/>
<text x="306" y="142" font-family="inherit" font-size="12" style="fill:var(--ink)">H end: δ+</text>
<text x="320" y="180" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">Each attraction is an</text>
<text x="320" y="196" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">ion–dipole force</text>
<text x="160" y="254" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Hydrated sodium ion</text>
<text x="160" y="272" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">δ− oxygen ends face the cation</text>
<text x="480" y="254" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Hydrated chloride ion</text>
<text x="480" y="272" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">δ+ hydrogen ends face the anion</text>
</svg>
<figcaption>When salt dissolves, water molecules turn to face each ion: oxygen (δ−) toward Na<sup>+</sup>, hydrogen (δ+) toward Cl<sup>−</sup>. The shell of water keeps the ions apart, so they stay dissolved instead of re-forming the crystal.</figcaption>
</figure>
<div class="compare">
  <div><h4>Hydrophilic: "water-loving"</h4><ul><li>Substances with an <strong>affinity for water</strong>: they <strong>will dissolve</strong> in it.</li><li>Polar and ionic substances: sugars, salts, the phosphate head of a phospholipid.</li></ul></div>
  <div><h4>Hydrophobic: "water-fearing"</h4><ul><li>Substances with an <strong>aversion to water</strong>: they <strong>will not dissolve</strong> in it.</li><li>Nonpolar substances: oil, fat, the hydrocarbon tails of a phospholipid.</li></ul></div>
</div>
<p>Hydrophobic molecules are not really repelled by water. Water molecules are so strongly attracted to each other that they squeeze nonpolar molecules out of the way, which is why oil collects into droplets.</p>
<p data-tier="likely">Water itself also dissociates very slightly: a tiny fraction of water molecules split into H<sup>+</sup> and OH<sup>−</sup> ions. The concentration of H<sup>+</sup> is what pH measures, which leads to buffers below.</p>
<details class="check"><summary>Review question 17: Which would dissolve in water? (a) NH<sub>3</sub> (b) O<sub>2</sub> (c) CO<sub>2</sub> (d) PO<sub>4</sub><sup>3−</sup></summary><div class="ans"><ul>
<li><strong>(a) Ammonia: yes.</strong> It is polar and forms hydrogen bonds with water, so it is soluble.</li>
<li><strong>(b) Oxygen: only somewhat.</strong> It is nonpolar, but its small size lets a little dissolve. That is not enough for our needs, which is why red blood cells carry oxygen on hemoglobin instead of in the watery plasma.</li>
<li><strong>(c) Carbon dioxide: somewhat.</strong> Nonpolar but small, so some dissolves. It also reacts with water to form carbonic acid, which links to breathing rate (Grade 11) and the blood buffer below.</li>
<li><strong>(d) Phosphate ion: yes.</strong> It is an anion with an overall negative charge, so it forms ion–dipole attractions with water's δ+ hydrogens.</li>
</ul></div></details>
<details class="check"><summary>Review question 18: In a phospholipid, identify the hydrophobic and hydrophilic ends.</summary><div class="ans"><p>The <strong>hydrophilic</strong> (water-loving) part is the <strong>negatively charged phosphate head</strong>, which attracts water molecules. The <strong>hydrophobic</strong> (water-fearing) parts are the <strong>fatty acid tails</strong>: long hydrocarbon chains made of nonpolar C–C and C–H bonds. (More in lesson 1.04.)</p></div></details>

<h3 data-tier="essential">Types of biochemical reactions</h3>
<p>The end of the lesson previews four reaction types and where each returns: <strong>acid–base reactions and buffers</strong> (Unit 4: Homeostasis), <strong>oxidation–reduction</strong> (Unit 2: Metabolic Processes), and <strong>dehydration and hydrolysis</strong> plus <strong>enzyme-catalyzed reactions</strong> (this unit).</p>
<h4>Acid–base reactions and buffers</h4>
<p>An acid–base reaction is the <strong>transfer of a proton (H<sup>+</sup>) from an acid to a base</strong>. <span class="term">Buffers</span> are <strong>substances that prevent a change in the pH of a solution by accepting or releasing hydrogen ions as needed</strong>. One of the most important buffers in the blood is the <span class="term">bicarbonate buffer</span>:</p>
<div class="eq">CO<sub>2</sub> + H<sub>2</sub>O ⇌ H<sub>2</sub>CO<sub>3</sub> ⇌ H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup><br>carbon dioxide + water ⇌ carbonic acid ⇌ hydrogen ion + bicarbonate ion</div>
<p>Normal blood pH is <strong>7.35–7.45</strong>; <strong>above 7.8 or below 7.0 can result in death</strong>. If blood pH drops (extra H<sup>+</sup>), bicarbonate ions use up the extra protons, forming carbonic acid. If pH rises, carbonic acid dissociates to release protons. This is negative feedback. Because CO<sub>2</sub> drives the equation, your breathing rate (controlled by the medulla oblongata) can change to flush out more or less CO<sub>2</sub> and shift the balance.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Know the numbers: normal blood pH <strong>7.35–7.45</strong>, death possible <strong>below 7.0 or above 7.8</strong>. Know that a buffer works by <strong>accepting or releasing H<sup>+</sup></strong>.</p></div>
<h4>Redox reactions</h4>
<p>An <span class="term">oxidation–reduction (redox) reaction</span> involves the <strong>transfer of electrons</strong>: one substance loses electrons (is <span class="term">oxidized</span>) while another gains them (is <span class="term">reduced</span>). In cellular respiration, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O, the <strong>carbons in glucose lose electrons</strong> as the reaction proceeds, so glucose is <strong>oxidized</strong>; oxygen gains them and is <strong>reduced</strong> to water, and energy is released.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>LEO the lion says GER</strong>: <strong>L</strong>ose <strong>E</strong>lectrons = <strong>O</strong>xidized; <strong>G</strong>ain <strong>E</strong>lectrons = <strong>R</strong>educed.</p></div>
<h4>Metabolism, dehydration synthesis and hydrolysis</h4>
<p><span class="term">Cellular metabolism</span> is <strong>all the reactions that take place in a cell</strong>. <span class="term">Anabolism</span> is the reactions that <strong>build</strong> substances such as polymers (monomers → polymer), like synthesis reactions in Grade 10; photosynthesis is an example. <span class="term">Catabolism</span> is the reactions that <strong>break</strong> substances into simpler forms (polymer → monomers), like decomposition reactions; cellular respiration is an example.</p>
<ul>
  <li><span class="term">Dehydration synthesis</span> (condensation) <strong>forms a covalent bond between two molecules and forms a water molecule</strong>. One molecule gives up –OH, the other gives up –H, and those become H<sub>2</sub>O. Slide examples: two amino acids → dipeptide + H<sub>2</sub>O; glucose + glucose → maltose + H<sub>2</sub>O.</li>
  <li><span class="term">Hydrolysis</span> is the <strong>cleavage (breakage) of a covalent bond with the addition of a water molecule</strong>. The water splits into –H and –OH, which cap the two pieces. Slide example: sucrose + H<sub>2</sub>O → glucose + fructose, with the enzyme sucrase.</li>
</ul>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>De-hydration</strong> = water removed, to build. <strong>Hydro-lysis</strong> = water (hydro) splits (lysis). Atom check: a disaccharide is C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>, not C<sub>12</sub>H<sub>24</sub>O<sub>12</sub>, because one H<sub>2</sub>O left when it formed.</p></div>
<h4>Enzyme-catalyzed reactions</h4>
<p><span class="term">Enzymes</span> <strong>lower the activation energy required for a reaction to occur</strong>, which <strong>increases the rate of reaction</strong>. On the slide's graphs, the catalyzed reaction has a much smaller energy barrier (E<sub>a</sub>), but the reactants and products sit at the same energy levels, so the overall energy change (ΔG) is the same. Enzymes work by <strong>straining bonds</strong> and holding reactants in the <strong>best orientation</strong>; they are <strong>not used up</strong> and act on very specific substrates (lesson 1.07).</p>
<details class="check"><summary>Review question 20: How is a catalyst different from a reactant in a chemical reaction?</summary><div class="ans"><p>Reactants (substrates) are converted into products and used up; substrates have an affinity for the active site of the enzyme. A catalyst <strong>speeds up</strong> a reaction but is <strong>not consumed</strong> by it, so it is not a reactant and can be used again.</p></div></details>
<details class="check"><summary>Review question 19: What are the key identifying features of each reaction type?</summary><div class="ans"><ul>
<li><strong>Acid–base (buffers):</strong> a proton (H<sup>+</sup>) moves from an acid to a base; buffers resist pH change.</li>
<li><strong>Redox:</strong> electrons move; one substance is oxidized (loses e<sup>−</sup>), the other reduced (gains e<sup>−</sup>).</li>
<li><strong>Anabolism / dehydration synthesis:</strong> small molecules join into a larger one and <strong>water is a product</strong>.</li>
<li><strong>Catabolism / hydrolysis:</strong> a large molecule breaks into smaller ones and <strong>water is a reactant</strong>.</li>
<li><strong>Enzyme-catalyzed:</strong> an enzyme (often written over the arrow) lowers activation energy so the reaction proceeds faster; it is not used up.</li>
</ul></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
  <li>Standard atomic notation: A (protons + neutrons) on top, Z (protons) below; neutrons N = A − Z.</li>
  <li>Cations form by losing electrons, anions by gaining them. Isotopes differ only in neutrons; radioisotopes decay, emit radiation and can be used as tracers.</li>
  <li>Intramolecular bonds (ionic = transfer, covalent = sharing) hold atoms together and break only in chemical reactions. Biology is mostly covalent because C, H, O and N are non-metals.</li>
  <li>ΔEN below 0.5 = nonpolar covalent; 0.5–1.7 = polar covalent; above 1.7 = ionic. A molecule's polarity depends on bond polarity <em>and</em> shape; symmetrical molecules cancel their dipoles.</li>
  <li>Intermolecular forces, weakest to strongest: London dispersion &lt; dipole–dipole &lt; hydrogen bonding &lt; ion–dipole, all weaker than intramolecular bonds.</li>
  <li>Hydrogen bonds give water cohesion, adhesion, surface tension, capillary action, high specific heat, evaporative cooling, a solid (ice) less dense than its liquid, and the ability to dissolve polar and ionic substances.</li>
  <li>Hydrophilic = polar or ionic, dissolves in water; hydrophobic = nonpolar, does not.</li>
  <li>Reactions: acid–base (proton transfer; bicarbonate buffer keeps blood at pH 7.35–7.45), redox (electron transfer), dehydration synthesis (builds, releases water), hydrolysis (breaks, uses water), enzyme-catalyzed (lower activation energy, faster rate).</li>
</ul>
`
});
/* ===================================================================
   1.02 FUNCTIONAL GROUPS & MACROMOLECULES
   =================================================================== */
window.LESSONS.push({
  id: "1.02",
  title: "Functional Groups & Macromolecules",
  stage: "c2",
  where: "Monomers & polymers",
  summary: "Carbon builds the skeleton; functional groups give it its behaviour. This lesson covers why carbon is the backbone of biological molecules, the six functional groups you must recognize and how their polarity controls solubility and acidity, and the four macromolecules with their subunits, including why lipids are not polymers.",
  objectives: [
    "Define an organic compound and explain how carbon's four valence electrons make it the backbone of biological molecules.",
    "Explain why large hydrocarbons are nonpolar.",
    "Name, draw and give the formula of the hydroxyl, carboxyl, amino, phosphate, carbonyl (aldehyde and ketone) and sulfhydryl groups, with an example of where each is found.",
    "Rank functional groups by polarity and use them to predict whether a molecule dissolves in water.",
    "Identify carboxyl groups as acidic (proton donors) and amino groups as basic (proton acceptors), and predict how a change in pH changes their charge.",
    "Circle and name the functional groups in an unfamiliar molecule.",
    "Name the four classes of macromolecules and their subunits, and state which are polymers and why lipids are not.",
    "Describe how dehydration synthesis builds polymers and hydrolysis breaks them down."
  ],
  html: `
<h3 data-tier="essential">Organic compounds</h3>
<p><span class="term">Organic compounds</span> are <strong>compounds that contain carbon</strong>. There are a <strong>few exceptions</strong>, such as carbon dioxide (CO<sub>2</sub>) and calcium carbonate (CaCO<sub>3</sub>, the material of chalk and seashells): they contain carbon but are classed as inorganic. A useful rule of thumb is that organic molecules have carbon bonded to hydrogen.</p>
<p>The slide shows the four families of organic molecules in living things, each with an everyday source: <strong>carbohydrates</strong> (glucose, in bread), <strong>lipids</strong> (a triglyceride, in butter), <strong>proteins</strong> (built from amino acids, in meat) and <strong>nucleic acids</strong> (DNA).</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Apart from water, the molecules that make up living things all contain carbon. Carbon–carbon bonds tend to form the <strong>backbone</strong> of all four groups: carbohydrates, proteins, lipids and nucleic acids.</p></div>

<h3 data-tier="essential">Carbon: the backbone atom</h3>
<p>Carbon has <strong>4 single valence electrons</strong>, so it can form <strong>up to 4 stable covalent bonds</strong>. That is more than the other common atoms of life (hydrogen forms 1 bond, oxygen 2, nitrogen 3). With four bonds, carbon can:</p>
<ul>
  <li>bond to other carbons to make long <strong>chains</strong> (the slide's C<sub>6</sub>H<sub>14</sub>, hexane), <strong>branches</strong>, or <strong>rings</strong> (the slide's C<sub>6</sub>H<sub>12</sub>, cyclohexane);</li>
  <li>form single, double or triple bonds;</li>
  <li>still have bonds left over to attach other atoms and groups.</li>
</ul>
<p>Molecules containing <strong>only carbon and hydrogen</strong> are <span class="term">hydrocarbons</span>. <strong>Large hydrocarbons are often nonpolar</strong> for two reasons from lesson 1.01. First, the C–H bond has a <strong>low electronegativity difference</strong> (2.55 − 2.20 = 0.35), so it is nonpolar covalent. Second, the bonds are arranged <strong>symmetrically</strong>, so any small dipoles cancel. This is why fats and oils, which are mostly long hydrocarbon chains, do not mix with water.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The nonpolar hydrocarbon skeleton is why carbon chains make a good "backbone". A molecule with a hydrocarbon part can still interact with water if it also carries a <strong>polar functional group</strong>. Phospholipids are the example: their fatty-acid tails are nonpolar, but the phosphate group at the top is polar, so that end interacts with water. This is what lets them build the cell membrane.</p></div>

<h3 data-tier="essential">What a functional group is</h3>
<p>A <span class="term">functional group</span> is <strong>a specific group of atoms bound to a carbon backbone</strong>. The carbon skeleton gives a molecule its size and shape; the functional groups decide how it behaves. They <strong>determine the molecule's chemical properties</strong>: its <strong>chemical behaviour</strong>, its <strong>polarity</strong> and its <strong>reactivity</strong>.</p>
<p>The slide's examples: a fatty acid is a long, nonpolar hydrocarbon chain with one <strong>carboxyl group</strong> at the end, and an amino acid has an <strong>amino group</strong> and a <strong>carboxyl group</strong> on either side of a central carbon, plus a variable <strong>side chain</strong>. In structural formulas, the letter <strong>R</strong> stands for that variable part: "the rest of the molecule", not drawn in detail.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Of all the properties functional groups control, the one you will use most is <strong>solubility</strong>: whether the molecule dissolves in water.</p></div>
<p><strong>Chemical reactions between organic molecules often involve the functional groups.</strong> The slide shows two amino acids joining in a <strong>condensation reaction</strong>. The –OH from the carboxyl group of one amino acid and an –H from the amino group of the other leave together as water, and a <strong>peptide bond</strong> forms between the carboxyl carbon and the amino nitrogen. The rest of each molecule does not change. Only the functional groups react.</p>

<h3 data-tier="essential">The six functional groups to know</h3>
<figure class="diagram">
<svg viewBox="0 0 640 450" role="img" aria-labelledby="b102-t1">
<title id="b102-t1">Six cards showing the structure of each functional group attached to R, the rest of the molecule. Hydroxyl, R–O–H, very polar, in alcohols and sugars. Carboxyl, R–C double-bonded to O and single-bonded to O–H, very polar and acidic, in acids and amino acids. Amino, R–N bonded to two H, very polar and basic, in bases and amino acids. Phosphate, R–O–P with three more oxygens, two negatively charged, in ATP, DNA and phospholipids. Carbonyl, C double-bonded to O, either at the end of a chain with an H (aldehyde) or in the middle between two carbons (ketone), slightly polar. Sulfhydryl, R–S–H, the least polar, in rubber and cysteine.</title>
<g style="fill:var(--surface-2);stroke:var(--line)"><rect x="10" y="10" width="200" height="210" rx="10"/><rect x="220" y="10" width="200" height="210" rx="10"/><rect x="430" y="10" width="200" height="210" rx="10"/><rect x="10" y="230" width="200" height="210" rx="10"/><rect x="220" y="230" width="200" height="210" rx="10"/><rect x="430" y="230" width="200" height="210" rx="10"/></g>
<g font-family="inherit" font-size="15" font-weight="700" text-anchor="middle" style="fill:var(--ink)"><text x="110" y="36">Hydroxyl</text><text x="320" y="36">Carboxyl</text><text x="530" y="36">Amino</text><text x="110" y="256">Phosphate</text><text x="320" y="256">Carbonyl</text><text x="530" y="256">Sulfhydryl</text></g>
<g font-family="inherit" font-size="13" text-anchor="middle" style="fill:var(--ink-2)"><text x="110" y="56">–OH</text><text x="320" y="56">–COOH</text><text x="530" y="56">–NH<tspan font-size="11" dy="4">2</tspan></text><text x="110" y="276">–PO<tspan font-size="11" dy="4">4</tspan></text><text x="320" y="276">–COH (end) or –CO– (middle)</text><text x="530" y="276">–SH</text></g>
<g style="stroke:var(--ink-2)" stroke-width="1.8">
<line x1="70" y1="109" x2="90" y2="109"/><line x1="110" y1="109" x2="130" y2="109"/>
<line x1="275" y1="115" x2="296" y2="115"/><line x1="301" y1="106" x2="301" y2="86"/><line x1="309" y1="106" x2="309" y2="86"/><line x1="314" y1="115" x2="335" y2="115"/><line x1="355" y1="115" x2="372" y2="115"/>
<line x1="480" y1="115" x2="509" y2="115"/><line x1="528" y1="108" x2="549" y2="92"/><line x1="528" y1="122" x2="549" y2="138"/>
<line x1="40" y1="336" x2="53" y2="336"/><line x1="71" y1="336" x2="91" y2="336"/><line x1="109" y1="336" x2="130" y2="336"/><line x1="100" y1="325" x2="100" y2="311"/><line x1="96" y1="346" x2="96" y2="361"/><line x1="104" y1="346" x2="104" y2="361"/>
<line x1="246" y1="336" x2="260" y2="336"/><line x1="276" y1="336" x2="291" y2="336"/><line x1="264" y1="326" x2="264" y2="311"/><line x1="272" y1="326" x2="272" y2="311"/>
<line x1="346" y1="336" x2="362" y2="336"/><line x1="378" y1="336" x2="392" y2="336"/><line x1="366" y1="326" x2="366" y2="311"/><line x1="374" y1="326" x2="374" y2="311"/>
<line x1="490" y1="336" x2="519" y2="336"/><line x1="541" y1="336" x2="566" y2="336"/>
</g>
<g font-family="inherit" font-size="16" font-style="italic" text-anchor="middle" style="fill:var(--ink-2)"><text x="60" y="115">R</text><text x="265" y="121">R</text><text x="470" y="121">R</text><text x="30" y="342">R</text><text x="238" y="342">R</text><text x="338" y="342">R</text><text x="402" y="342">R′</text><text x="480" y="342">R</text></g>
<g font-family="inherit" font-size="16" font-weight="700" text-anchor="middle">
<text x="100" y="115" style="fill:var(--red)">O</text><text x="140" y="115" style="fill:var(--ink)">H</text>
<text x="305" y="121" style="fill:var(--ink)">C</text><text x="305" y="81" style="fill:var(--red)">O</text><text x="345" y="121" style="fill:var(--red)">O</text><text x="380" y="121" style="fill:var(--ink)">H</text>
<text x="520" y="121" style="fill:var(--blue)">N</text><text x="556" y="93" style="fill:var(--ink)">H</text><text x="556" y="149" style="fill:var(--ink)">H</text>
<text x="62" y="342" style="fill:var(--red)">O</text><text x="100" y="342" style="fill:var(--magenta)">P</text><text x="142" y="342" style="fill:var(--red)">O<tspan font-size="12" dy="-7">−</tspan></text><text x="102" y="307" style="fill:var(--red)">O<tspan font-size="12" dy="-7">−</tspan></text><text x="100" y="377" style="fill:var(--red)">O</text>
<text x="268" y="342" style="fill:var(--ink)">C</text><text x="268" y="307" style="fill:var(--red)">O</text><text x="298" y="342" style="fill:var(--ink)">H</text>
<text x="370" y="342" style="fill:var(--ink)">C</text><text x="370" y="307" style="fill:var(--red)">O</text>
<text x="530" y="342" style="fill:var(--amber)">S</text><text x="575" y="342" style="fill:var(--ink)">H</text>
</g>
<g font-family="inherit" font-size="11.5" text-anchor="middle" style="fill:var(--ink-2)"><text x="268" y="368">aldehyde (end)</text><text x="370" y="368">ketone (middle)</text></g>
<line x1="320" y1="296" x2="320" y2="374" style="stroke:var(--line)" stroke-dasharray="3 3"/>
<g font-family="inherit" font-size="12.5" font-weight="700" text-anchor="middle"><text x="110" y="178" style="fill:var(--teal)">Very polar</text><text x="320" y="178" style="fill:var(--teal)">Very polar · acidic</text><text x="530" y="178" style="fill:var(--teal)">Very polar · basic</text><text x="110" y="398" style="fill:var(--teal)">Polar · negative charges</text><text x="320" y="398" style="fill:var(--amber)">Slightly polar</text><text x="530" y="398" style="fill:var(--ink-2)">Less polar still</text></g>
<g font-family="inherit" font-size="11" text-anchor="middle" style="fill:var(--ink-2)"><text x="110" y="196">found in</text><text x="320" y="196">found in</text><text x="530" y="196">found in</text><text x="110" y="416">found in</text><text x="320" y="416">found in</text><text x="530" y="416">found in</text></g>
<g font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink)"><text x="110" y="212">alcohols (ethanol), sugars</text><text x="320" y="212">acids (vinegar), amino acids</text><text x="530" y="212">bases (ammonia), amino acids</text><text x="110" y="432">ATP, DNA, phospholipids</text><text x="320" y="432">aldehydes, ketones, sugars</text><text x="530" y="432">rubber, cysteine</text></g>
</svg>
<figcaption>The six functional groups, each attached to R (the rest of the molecule). Oxygen is red, nitrogen blue, phosphorus magenta and sulfur amber. The more O–H and N–H a group has, the more polar it is.</figcaption>
</figure>
<div class="table-wrap"><table class="data"><thead><tr><th>Group</th><th>Formula</th><th>Polarity</th><th>Found in (slide examples)</th></tr></thead><tbody>
<tr><td>Hydroxyl</td><td>–OH</td><td>Very polar</td><td>Alcohols (e.g. ethanol); all sugars</td></tr>
<tr><td>Carboxyl</td><td>–COOH</td><td>Very polar; acidic</td><td>Acids (e.g. vinegar); every amino acid and fatty acid</td></tr>
<tr><td>Amino</td><td>–NH<sub>2</sub></td><td>Very polar; basic</td><td>Bases (e.g. ammonia); every amino acid</td></tr>
<tr><td>Phosphate</td><td>–PO<sub>4</sub></td><td>Polar; carries negative charges in cells</td><td>ATP; DNA and RNA; phospholipids</td></tr>
<tr><td>Carbonyl</td><td>–COH (aldehyde) or –CO– (ketone)</td><td>Slightly polar</td><td>Aldehydes (e.g. formaldehyde); ketones (e.g. acetone)</td></tr>
<tr><td>Sulfhydryl</td><td>–SH</td><td>Even less polar</td><td>Rubber; the amino acid cysteine</td></tr>
</tbody></table></div>
<p>The carbonyl group comes in two versions. They have the same C=O, in a different position:</p>
<ul>
  <li>In an <span class="term">aldehyde</span>, the C=O is at the <strong>end</strong> of the carbon chain, so the carbonyl carbon also carries an H (–CHO). Example: formaldehyde.</li>
  <li>In a <span class="term">ketone</span>, the C=O is in the <strong>middle</strong> of the chain, with a carbon on each side (–CO–). Example: acetone, in nail-polish remover.</li>
</ul>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>An ald<strong>e</strong>hyde's carbonyl carbon has an <strong>H</strong> on it, and a carbon whose last bond goes to H can only sit at the <strong>e</strong>nd of a chain. A <strong>k</strong>etone's carbonyl is <strong>k</strong>ept in the middle, between two carbons. You will use this in lesson 1.03: glucose has an aldehyde, fructose has a ketone.</p></div>
<p data-tier="likely">The functional-group chart in the class notes also includes the <strong>methyl</strong> group (–CH<sub>3</sub>). It is nonpolar, since it is just a small piece of hydrocarbon.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Do not confuse <strong>carboxyl</strong> (–COOH, two oxygens) with <strong>carbonyl</strong> (C=O, one oxygen). A carboxyl actually contains a carbonyl and a hydroxyl on the same carbon, but you name it once, as carboxyl. Also, a <strong>hydroxyl</strong> group (–OH, covalently bonded to carbon) is not the hydroxide ion (OH<sup>−</sup>): it does not come off as an ion, so sugars and alcohols are <strong>not</strong> bases.</p></div>

<h3 data-tier="essential">Polarity and solubility</h3>
<p>The slide ranks the groups: <strong>hydroxyl (–OH), carboxyl (–COOH) and amino (–NH<sub>2</sub>) are very polar; carbonyl (C=O) is slightly polar; and sulfhydryl (–SH) is even less polar.</strong> The reasons come straight from lesson 1.01:</p>
<ul>
  <li>O–H and N–H bonds are strongly polar (ΔEN 1.24 and 0.84), and the H on them can <strong>hydrogen-bond</strong> with water. Hydroxyl, carboxyl and amino groups pull a molecule into solution.</li>
  <li>C=O is polar, but there is no H on the oxygen, so a carbonyl can only <em>accept</em> hydrogen bonds from water, not donate them. That makes it only slightly polar.</li>
  <li>S and H have almost the same electronegativity (2.58 and 2.20, ΔEN 0.38), so sulfhydryl is the least polar of the six.</li>
</ul>
<p>This is the <strong>reason sugars and alcohols are highly soluble in water</strong>: they contain the polar hydroxyl group. The slide's glucose carries five –OH groups; ethanol has one on a short two-carbon chain. Both dissolve easily.</p>
<details class="check"><summary>Worksheet question 3: Which functional groups would be polar? How does this affect function?</summary><div class="ans"><p>Class key: <strong>carboxyl, hydroxyl and amino</strong> are the most polar (they can form hydrogen bonds with each other and with water). <strong>Carbonyl and phosphate</strong> have medium polarity (dipole–dipole). <strong>Sulfhydryl</strong> has low polarity. The more polar groups a molecule has, the more water-soluble it is and the more strongly it attracts other polar molecules, or other parts of itself.</p></div></details>
<details class="check"><summary>Application question 3: Glucose has many hydroxyl groups. Relate them to glucose's high solubility in blood plasma. How does a lipid, mainly hydrocarbon chains, compare?</summary><div class="ans"><p>The hydroxyl groups (–OH) in glucose can form <strong>many hydrogen bonds with water molecules</strong>, making glucose highly soluble in blood plasma, which is mostly water. Lipids consist mostly of long hydrocarbon chains, which are <strong>nonpolar</strong> and cannot hydrogen-bond with water. As a result, lipids are <strong>insoluble</strong> in plasma and must be transported by proteins (e.g. <strong>lipoproteins</strong>) rather than dissolving freely.</p></div></details>
<details class="check"><summary>Application question 2: Phospholipids have hydrocarbon chains (–CH<sub>2</sub>–) and a phosphate group (–PO<sub>4</sub><sup>2−</sup>). Explain how these make phospholipids form bilayers in water, and predict what would happen if the phosphate were removed.</summary><div class="ans"><p>Phospholipids are <strong>amphipathic</strong>: their long hydrocarbon chains are nonpolar and hydrophobic, while the phosphate group is polar, negatively charged and hydrophilic. In water they spontaneously form <strong>bilayers</strong>, with the tails inside (away from water) and the phosphate heads facing outward toward the water. If the phosphate group were removed, the molecule would lose its polar head and become fully hydrophobic. It would no longer self-assemble into membranes, and cells could not form barriers with controlled permeability.</p></div></details>
<h3 data-tier="likely">Acidic and basic groups</h3>
<p>Some functional groups can give away or pick up a hydrogen ion (H<sup>+</sup>, a proton). Recall the <strong>Brønsted–Lowry</strong> definitions: an <strong>acid is a proton donor</strong> and a <strong>base is a proton acceptor</strong>.</p>
<ul>
  <li><strong>Carboxyl is acidic.</strong> The H on the –OH part of the carboxyl can be removed: –COOH → –COO<sup>−</sup> + H<sup>+</sup>. The neighbouring C=O pulls electrons away from that O–H, which makes the H easy to lose.</li>
  <li><strong>Amino is basic.</strong> Nitrogen has a lone pair that can pick up an H<sup>+</sup>: –NH<sub>2</sub> + H<sup>+</sup> → –NH<sub>3</sub><sup>+</sup>.</li>
  <li><strong>Phosphate</strong> can go either way. With H's attached it can release H<sup>+</sup> (the textbook chart in the class notes calls it acidic). In its fully ionized PO<sub>4</sub><sup>3−</sup> form it can pull an H<sup>+</sup> away from another molecule, so it acts as a base.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Protonation decides the form of an amino group: whether it is –NH<sub>2</sub> or –NH<sub>3</sub><sup>+</sup> depends on how many H<sup>+</sup> ions are around, which is the pH.</p></div>
<details class="check"><summary>Worksheet question 1: Look at the structure of a carboxyl group. What makes it acidic?</summary><div class="ans"><p>The <strong>hydrogen on the hydroxyl part of the carboxyl can be removed</strong> (donated as H<sup>+</sup>). By the Brønsted–Lowry definition, anything that can donate a hydrogen ion is an acid.</p></div></details>
<details class="check"><summary>Worksheet question 2: Would the phosphate group act as an acid or a base?</summary><div class="ans"><p>Class key: in the <strong>PO<sub>4</sub><sup>3−</sup> form it acts as a base</strong>, because it can pull a hydrogen ion away from another molecule, and bases are proton acceptors.</p></div></details>
<details class="check"><summary>Application question 4: Hemoglobin's ability to bind oxygen depends partly on amino and carboxyl groups. Predict how a drop in blood pH (more H<sup>+</sup>) would affect these groups and the protein.</summary><div class="ans"><p>At a lower pH, the extra H<sup>+</sup> ions <strong>protonate</strong> amino groups (–NH<sub>2</sub> → –NH<sub>3</sub><sup>+</sup>) and keep carboxyl groups in their non-ionized form (–COOH). This changes the charge interactions among hemoglobin's amino acid side chains. Since protein folding depends on interactions between charged groups, the altered charges shift hemoglobin's shape, <strong>reducing its ability to bind oxygen</strong>.</p></div></details>
<details class="check"><summary>Worksheet question 5: Serine or tryptophan: which amino acid is more polar, and why does it matter?</summary><div class="ans"><p><strong>Serine</strong> is more polar: its side chain is a small –CH<sub>2</sub>OH with a polar hydroxyl, so it has more polar groups relative to its overall size. Tryptophan's side chain is a large, mostly nonpolar double ring. Polarity affects solubility and how a molecule interacts with others. In a protein it also decides which parts of the chain attract each other, which makes the chain bend and coil into its shape.</p></div></details>
<p data-tier="extra">At the pH of your blood (about 7.4), a free amino acid usually carries both charges at once: its carboxyl has lost an H (–COO<sup>−</sup>) and its amino group has gained one (–NH<sub>3</sub><sup>+</sup>). A molecule like this is called a zwitterion.</p>

<h3 data-tier="likely">Spotting functional groups in real molecules</h3>
<p>Tests often show a molecule you have never seen and ask you to circle and name its functional groups. The slide does this with three molecules: vitamin B<sub>6</sub> (pyridoxal phosphate: a hydroxyl, a phosphate and an aldehyde carbonyl), a nucleotide-like molecule (phosphate, hydroxyl and amino groups) and the amino acid cysteine, HS–CH<sub>2</sub>–CH(NH<sub>2</sub>)–COOH (sulfhydryl, amino and carboxyl).</p>
<ol class="steps">
  <li><p class="step-head">Find every O, N, S and P</p><p>Functional groups are built around these atoms. Carbon and hydrogen on their own are just the backbone.</p></li>
  <li><p class="step-head">Check what each O is bonded to</p><p>O–H on a carbon = hydroxyl. C=O with carbon on both sides = ketone; C=O on a carbon that also has an H = aldehyde. C=O and O–H on the <em>same</em> carbon = carboxyl (name it once, as carboxyl).</p></li>
  <li><p class="step-head">Check N, S and P</p><p>N with two H's = amino. S–H = sulfhydryl. P surrounded by four O's = phosphate.</p></li>
</ol>
<div class="callout key"><p class="callout-title">On the test</p><p>The class worksheet labels the hydroxyls and ring C=O (carbonyl) groups on steroids such as testosterone and cortisol, the many hydroxyls on glucose, and the amino, carboxyl and sulfhydryl groups in short amino acid chains. Be ready to circle and name groups in steroids, sugars and amino acids. The most common slip is labelling one carboxyl as "a carbonyl and a hydroxyl".</p></div>
<details class="check"><summary>Worksheet question 4: Draw alpha-glucose. What functional groups are present, and what properties do they give it?</summary><div class="ans"><p>Ring glucose carries <strong>a bunch of hydroxyls</strong>: four on the ring carbons and one on the CH<sub>2</sub>OH group (five in total). They make glucose very polar, so it hydrogen-bonds with water and dissolves easily in blood plasma. You will learn to draw the ring in lesson 1.03.</p></div></details>

<h3 data-tier="essential">Biological macromolecules</h3>
<p>A <span class="term">macromolecule</span> is <strong>a very large organic molecule</strong>. There are <strong>four major groups</strong>: <strong>carbohydrates, lipids, proteins and nucleic acids</strong>. The slide's space-filling models show their size: a piece of starch, a triacylglycerol (fat), an enzyme and a stretch of DNA, each made of hundreds to millions of atoms.</p>
<p><strong>All macromolecules are composed of smaller subunits.</strong> Cells do not build a protein one atom at a time. They join ready-made pieces, the way you build a wall from bricks rather than from sand. A <span class="term">polymer</span> is <strong>a large molecule composed of long chains of repeating subunits</strong>, called <span class="term">monomers</span> ("poly" = many, "mono" = one, "-mer" = part). The slide adds an asterisk: <strong>not lipids</strong>.</p>
<figure class="diagram">
<svg viewBox="0 0 640 316" role="img" aria-labelledby="b102-t2">
<title id="b102-t2">The four macromolecules and their subunits. Carbohydrates: monosaccharide hexagons join into a long polysaccharide chain. Proteins: amino acid beads join into a polypeptide chain. Nucleic acids: nucleotides, each a phosphate, sugar and base, join into a DNA or RNA strand. Lipids: a triglyceride is one glycerol attached to three fatty acids and is not a polymer, because there is no repeating chain of one subunit.</title>
<defs>
<marker id="b102-m1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
<polygon id="b102-hex" points="12,0 6,10.4 -6,10.4 -12,0 -6,-10.4 6,-10.4" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<circle id="b102-aa" r="9" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<g id="b102-nt"><line x1="-12" y1="0" x2="0" y2="0" style="stroke:var(--ink-2)" stroke-width="1.5"/><line x1="0" y1="6" x2="0" y2="12" style="stroke:var(--ink-2)" stroke-width="1.5"/><circle cx="-12" cy="0" r="5" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="1.2"/><polygon points="0,-9 8.6,-2.8 5.3,7.3 -5.3,7.3 -8.6,-2.8" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="1.5"/><rect x="-6" y="12" width="12" height="12" style="fill:var(--surface-2);stroke:var(--ink-2)" stroke-width="1.2"/></g>
</defs>
<g font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink-2)"><text x="10" y="22">Macromolecule</text><text x="215" y="22" text-anchor="middle">Monomer (subunit)</text><text x="445" y="22" text-anchor="middle">Polymer</text></g>
<g style="stroke:var(--line)"><line x1="10" y1="32" x2="630" y2="32"/><line x1="10" y1="102" x2="630" y2="102"/><line x1="10" y1="170" x2="630" y2="170"/><line x1="10" y1="246" x2="630" y2="246"/></g>
<g font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)"><text x="10" y="64">Carbohydrate</text><text x="10" y="132">Protein</text><text x="10" y="202">Nucleic acid</text><text x="10" y="274">Lipid</text></g>
<g font-family="inherit" font-size="12" style="fill:var(--ink-2)"><text x="10" y="80">(complex)</text><text x="10" y="148">(polypeptide)</text><text x="10" y="218">(DNA, RNA)</text><text x="10" y="290">(triglyceride)</text></g>
<g style="stroke:var(--ink-2)" stroke-width="1.8" marker-end="url(#b102-m1)"><line x1="240" y1="67" x2="284" y2="67"/><line x1="240" y1="135" x2="284" y2="135"/><line x1="240" y1="196" x2="284" y2="196"/></g>
<use href="#b102-hex" x="215" y="67"/>
<line x1="305" y1="67" x2="577" y2="67" style="stroke:var(--ink-2)" stroke-width="2"/>
<use href="#b102-hex" x="305" y="67"/><use href="#b102-hex" x="339" y="67"/><use href="#b102-hex" x="373" y="67"/><use href="#b102-hex" x="407" y="67"/><use href="#b102-hex" x="441" y="67"/><use href="#b102-hex" x="475" y="67"/><use href="#b102-hex" x="509" y="67"/><use href="#b102-hex" x="543" y="67"/><use href="#b102-hex" x="577" y="67"/>
<use href="#b102-aa" x="215" y="135"/>
<line x1="305" y1="135" x2="585" y2="135" style="stroke:var(--ink-2)" stroke-width="2"/>
<use href="#b102-aa" x="305" y="135"/><use href="#b102-aa" x="333" y="135"/><use href="#b102-aa" x="361" y="135"/><use href="#b102-aa" x="389" y="135"/><use href="#b102-aa" x="417" y="135"/><use href="#b102-aa" x="445" y="135"/><use href="#b102-aa" x="473" y="135"/><use href="#b102-aa" x="501" y="135"/><use href="#b102-aa" x="529" y="135"/><use href="#b102-aa" x="557" y="135"/><use href="#b102-aa" x="585" y="135"/>
<use href="#b102-nt" x="218" y="192"/>
<line x1="308" y1="192" x2="560" y2="192" style="stroke:var(--ink-2)" stroke-width="2"/>
<use href="#b102-nt" x="320" y="192"/><use href="#b102-nt" x="350" y="192"/><use href="#b102-nt" x="380" y="192"/><use href="#b102-nt" x="410" y="192"/><use href="#b102-nt" x="440" y="192"/><use href="#b102-nt" x="470" y="192"/><use href="#b102-nt" x="500" y="192"/><use href="#b102-nt" x="530" y="192"/><use href="#b102-nt" x="560" y="192"/>
<g font-family="inherit" font-size="11.5" text-anchor="middle" style="fill:var(--ink-2)"><text x="215" y="94">monosaccharide</text><text x="215" y="162">amino acid</text><text x="215" y="238">nucleotide</text><text x="441" y="94">polysaccharide (e.g. starch)</text><text x="445" y="162">polypeptide chain</text><text x="440" y="238">nucleic acid strand</text></g>
<rect x="180" y="258" width="12" height="40" rx="2" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<g style="fill:none;stroke:var(--teal)" stroke-width="2" stroke-linejoin="round"><path d="M192,265 l9,-4 l9,4 l9,-4 l9,4 l9,-4 l9,4 l9,-4 l9,4 l9,-4 l9,4"/><path d="M192,278 l9,-4 l9,4 l9,-4 l9,4 l9,-4 l9,4 l9,-4 l9,4 l9,-4 l9,4"/><path d="M192,291 l9,-4 l9,4 l9,-4 l9,4 l9,-4 l9,4 l9,-4 l9,4 l9,-4 l9,4"/></g>
<text x="232" y="312" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">glycerol + 3 fatty acids</text>
<text x="310" y="270" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--red)">Not a polymer</text>
<text x="310" y="288" font-family="inherit" font-size="12" style="fill:var(--ink-2)">1 glycerol + 3 fatty acids and it is full:</text>
<text x="310" y="304" font-family="inherit" font-size="12" style="fill:var(--ink-2)">no long chain of one repeating subunit</text>
</svg>
<figcaption>Carbohydrates, proteins and nucleic acids are polymers: one kind of monomer repeated many times. A triglyceride is built from two different kinds of parts, only four parts in total, so it is not a polymer.</figcaption>
</figure>
<div class="table-wrap"><table class="data"><thead><tr><th>Macromolecule</th><th>Subunit</th><th>Polymer?</th><th>Bond between subunits (coming up)</th></tr></thead><tbody>
<tr><td>Complex carbohydrate</td><td>Monosaccharide (simple sugar)</td><td>Yes</td><td>Glycosidic linkage (1.03)</td></tr>
<tr><td>Lipid (triglyceride)</td><td>Glycerol backbone + fatty acids</td><td>No</td><td>Ester linkage (1.04)</td></tr>
<tr><td>Protein</td><td>Amino acids</td><td>Yes</td><td>Peptide bond (1.06)</td></tr>
<tr><td>Nucleic acid (DNA &amp; RNA)</td><td>Nucleotides</td><td>Yes</td><td>Phosphodiester linkage (1.05)</td></tr>
</tbody></table></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Why lipids are not polymers: a triglyceride is one small glycerol with three fatty acids attached. Once those three spots are used, the molecule cannot be built any further, so it never forms a long chain of repeating units the way a polysaccharide, a polypeptide chain or a DNA strand does.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Fats are big, so they must be polymers." Size is not the test; <strong>repeating</strong> is. A fat is made of two <em>different</em> kinds of parts, only four parts in total. Also notice the slide says <strong>complex</strong> carbohydrates are polymers: a single monosaccharide such as glucose is a monomer.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>Be able to fill in the table from memory: macromolecule, subunit, polymer yes or no. "Which macromolecule is not a polymer, and why?" is a classic short answer.</p></div>

<h3 data-tier="essential">Building and breaking polymers</h3>
<p>The slide's arrow diagram shows monomers joining into a polymer by <strong>condensation</strong>, and the polymer splitting back into monomers by <strong>hydrolysis</strong>. These are the two reactions from lesson 1.01, now doing their main job.</p>
<figure class="diagram">
<svg viewBox="0 0 640 300" role="img" aria-labelledby="b102-t3">
<title id="b102-t3">Top: two monomers, each with hydroxyl groups. The OH of the first monomer and the H from the HO group of the second are highlighted. Downward arrow, dehydration synthesis: water is removed and a bond is formed. Bottom: the two monomers joined through an oxygen bridge, the new covalent bond, plus one water molecule made from the highlighted atoms. Upward arrow, hydrolysis: water is added and the bond is broken, giving back the two monomers.</title>
<defs>
<marker id="b102-m2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--teal)"/></marker>
<marker id="b102-m3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--magenta)"/></marker>
</defs>
<g style="fill:var(--amber-soft);stroke:var(--amber)" stroke-dasharray="3 2"><rect x="265" y="48" width="31" height="26" rx="5"/><rect x="341" y="48" width="17" height="26" rx="5"/><rect x="466" y="206" width="54" height="30" rx="6"/></g>
<g style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="2"><polygon points="258,62 244,86.2 216,86.2 202,62 216,37.8 244,37.8"/><polygon points="438,62 424,86.2 396,86.2 382,62 396,37.8 424,37.8"/><polygon points="278,222 264,246.2 236,246.2 222,222 236,197.8 264,197.8"/><polygon points="398,222 384,246.2 356,246.2 342,222 356,197.8 384,197.8"/></g>
<g style="stroke:var(--ink-2)" stroke-width="2"><line x1="192" y1="62" x2="202" y2="62"/><line x1="258" y1="62" x2="266" y2="62"/><line x1="373" y1="62" x2="382" y2="62"/><line x1="438" y1="62" x2="446" y2="62"/><line x1="214" y1="222" x2="222" y2="222"/><line x1="398" y1="222" x2="406" y2="222"/></g>
<g style="stroke:var(--red)" stroke-width="3"><line x1="278" y1="222" x2="302" y2="222"/><line x1="318" y1="222" x2="342" y2="222"/></g>
<g font-family="inherit" font-size="15" style="fill:var(--ink)"><text x="190" y="68" text-anchor="end">HO</text><text x="268" y="68">OH</text><text x="344" y="68">H</text><text x="358" y="68">O</text><text x="448" y="68">OH</text><text x="212" y="228" text-anchor="end">HO</text><text x="408" y="228">OH</text></g>
<text x="310" y="228" text-anchor="middle" font-family="inherit" font-size="16" font-weight="700" style="fill:var(--red)">O</text>
<text x="320" y="70" text-anchor="middle" font-family="inherit" font-size="20" style="fill:var(--ink)">+</text>
<text x="450" y="229" text-anchor="middle" font-family="inherit" font-size="20" style="fill:var(--ink)">+</text>
<text x="493" y="227" text-anchor="middle" font-family="inherit" font-size="16" font-weight="700" style="fill:var(--ink)">H<tspan font-size="11" dy="4">2</tspan><tspan dy="-4">O</tspan></text>
<g font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink-2)"><text x="230" y="110">monomer</text><text x="410" y="110">monomer</text><text x="310" y="292">two monomers joined (a dimer)</text></g>
<line x1="310" y1="234" x2="310" y2="258" style="stroke:var(--red)" stroke-dasharray="2 2"/>
<text x="310" y="272" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--red)">new covalent bond</text>
<line x1="190" y1="124" x2="190" y2="184" style="stroke:var(--teal)" stroke-width="3" marker-end="url(#b102-m2)"/>
<line x1="470" y1="184" x2="470" y2="124" style="stroke:var(--magenta)" stroke-width="3" marker-end="url(#b102-m3)"/>
<g font-family="inherit" font-size="12" text-anchor="end" style="fill:var(--ink)"><text x="180" y="140" font-size="13" font-weight="700" style="fill:var(--teal)">Dehydration synthesis</text><text x="180" y="156">(condensation)</text><text x="180" y="172">water removed, bond formed</text></g>
<g font-family="inherit" font-size="12" style="fill:var(--ink)"><text x="480" y="140" font-size="13" font-weight="700" style="fill:var(--magenta)">Hydrolysis</text><text x="480" y="156">water added,</text><text x="480" y="172">bond broken</text></g>
</svg>
<figcaption>Going down: the highlighted –OH and –H leave as one water molecule and the leftover oxygen bridges the two monomers. Going up: a water molecule is split, its –H and –OH cap the two pieces, and the bond breaks.</figcaption>
</figure>
<div class="compare">
  <div>
    <h4>Dehydration synthesis (condensation)</h4>
    <ul>
      <li><strong>Joins</strong> two molecules with a new <strong>covalent bond</strong>.</li>
      <li>An <strong>–OH</strong> from one monomer and an <strong>–H</strong> from the other are removed and form <strong>H<sub>2</sub>O</strong>.</li>
      <li>Repeat it and the chain grows: joining n monomers in a row releases n − 1 water molecules.</li>
      <li><strong>Anabolic</strong>: builds, and needs an input of energy.</li>
    </ul>
  </div>
  <div>
    <h4>Hydrolysis</h4>
    <ul>
      <li><strong>Breaks</strong> the covalent bond between two monomers.</li>
      <li>A water molecule is <strong>added</strong>: its –H goes to one piece and its –OH to the other.</li>
      <li>This is what digestion does to the starch, protein and fat in your food.</li>
      <li><strong>Catabolic</strong>: breaks down, and releases energy.</li>
    </ul>
  </div>
</div>
<p>Why does water come out every time? The groups that react are the polar functional groups at the ends of each monomer: hydroxyl, carboxyl and amino groups. Between them they give up exactly the atoms of one water molecule (an –OH from one and an –H from the other), and the atoms left behind bond together. In cells, both reactions are sped up by specific enzymes.</p>
<details class="check"><summary>How many water molecules are released when 100 glucose molecules join into one unbranched chain?</summary><div class="ans"><p><strong>99.</strong> Each new bond releases one water, and joining 100 monomers in a row takes 99 bonds. Completely hydrolyzing that chain back into glucose would use 99 water molecules.</p></div></details>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Building = <strong>losing</strong> water (a dehydrated person has lost water). Breaking = <strong>using</strong> water (hydro = water, lysis = split).</p></div>

<h3 data-tier="extra">How do scientists know these structures?</h3>
<p>Application question 1 asks how compounds are mapped. Molecules are far too small to see with a light microscope, so chemists combine several techniques:</p>
<ul>
  <li><strong>Nuclear magnetic resonance (NMR) spectroscopy</strong> shows the environment of hydrogen and carbon atoms, so the carbon "skeleton" and the positions of functional groups can be reconstructed.</li>
  <li><strong>Mass spectrometry (MS)</strong> gives the molecular mass and the masses of fragments, which are pieced together like a puzzle.</li>
  <li><strong>Infrared (IR) spectroscopy</strong> identifies functional groups (e.g. –OH, C=O) from how their bonds vibrate.</li>
  <li><strong>X-ray crystallography</strong> directly shows atom positions in 3-D, if the compound can be crystallized.</li>
</ul>
<p>For very large molecules such as proteins, <strong>cryo-electron microscopy</strong> (flash-freezing the molecules and imaging thousands of them with an electron beam) is now also widely used.</p>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
  <li>Organic compounds contain carbon (exceptions include CO<sub>2</sub> and CaCO<sub>3</sub>). Carbon's 4 valence electrons let it form 4 covalent bonds, building chains, branches and rings.</li>
  <li>Hydrocarbons contain only C and H. Large hydrocarbons are nonpolar because of their low ΔEN and symmetrical bonds.</li>
  <li>Functional groups are specific groups of atoms on a carbon backbone that decide chemical behaviour, polarity and reactivity. Reactions between organic molecules usually happen at the functional groups.</li>
  <li>Know all six: hydroxyl –OH (alcohols, sugars), carboxyl –COOH (acids), amino –NH<sub>2</sub> (bases), phosphate –PO<sub>4</sub> (ATP), carbonyl C=O (aldehyde at the end, ketone in the middle), sulfhydryl –SH (rubber).</li>
  <li>Polarity: hydroxyl, carboxyl and amino are very polar; carbonyl slightly polar; sulfhydryl even less. Polar –OH groups make sugars and alcohols highly water-soluble.</li>
  <li>Carboxyl groups are acidic (donate H<sup>+</sup>); amino groups are basic (accept H<sup>+</sup>, becoming –NH<sub>3</sub><sup>+</sup>), so pH changes their charge.</li>
  <li>Four macromolecules: carbohydrates (monosaccharides), lipids (glycerol + fatty acids), proteins (amino acids), nucleic acids (nucleotides). All but lipids are polymers.</li>
  <li>Dehydration synthesis joins monomers and releases water; hydrolysis adds water to split them.</li>
</ul>
`
});
/* ===================================================================
   1.03 CARBOHYDRATES
   =================================================================== */
window.LESSONS.push({
  id: "1.03",
  title: "Carbohydrates",
  stage: "c3",
  where: "Sugars & polysaccharides",
  summary: "Sugars and their polymers: what carbohydrates do, how monosaccharides are classified, how glucose closes into alpha and beta rings, how glycosidic linkages join sugars into disaccharides and polysaccharides, and why one flipped hydroxyl separates digestible starch from indigestible cellulose.",
  objectives: [
    "State the main functions of carbohydrates: short-term energy, structural support and cell surface markers.",
    "Classify carbohydrates as monosaccharides, disaccharides, oligosaccharides or polysaccharides.",
    "Classify monosaccharides by number of carbons (triose, pentose, hexose) and explain why glucose, galactose and fructose are isomers.",
    "Draw linear glucose and the alpha- and beta-glucose rings with the carbons numbered 1 to 6.",
    "Show how a glycosidic linkage forms by dehydration synthesis and name it (e.g. α-1,4) from the carbons involved.",
    "Name the monosaccharides that make up maltose, sucrose and lactose.",
    "Compare starch (amylose and amylopectin), glycogen, cellulose and chitin by source, subunit, linkage, branching, shape and function.",
    "Explain why humans can digest starch but not cellulose, and why fiber still matters."
  ],
  html: `
<h3 data-tier="essential">Where carbohydrates come from</h3>
<p><span class="term">Carbohydrates</span> are sugars and the polymers built from them. The slides start with a recall: <span class="term">photosynthesis</span> is the <strong>process by which plants and other autotrophs produce carbohydrates</strong>. Using light energy, they combine carbon dioxide from the air with water from the soil and release oxygen:</p>
<div class="eq">6 CO<sub>2</sub> + 6 H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub></div>
<p>Almost every carbohydrate you eat started here. Animals cannot make sugar from CO<sub>2</sub>, so they get carbohydrates by eating plants, or by eating animals that ate plants.</p>
<p data-tier="extra">The name gives away the composition: "carbo-hydrate" means carbon + water. Most carbohydrates fit the formula (CH<sub>2</sub>O)<sub>n</sub>, a 1 : 2 : 1 ratio of C : H : O. Glucose is (CH<sub>2</sub>O)<sub>6</sub> = C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>.</p>

<h3 data-tier="essential">Functions of carbohydrates</h3>
<ul>
  <li><strong>Short-term energy.</strong> Glucose is the main fuel for cellular respiration (Unit 2). Sugars dissolve easily and are broken down quickly, so they are a fast energy source, and starch and glycogen store glucose for short-term use.</li>
  <li><strong>Cell surface markers</strong>, used for <strong>cell identification</strong> and <strong>cell communication</strong>. The slide's membrane picture shows short sugar chains sticking out from the outer surface of the cell like antennae.</li>
  <li><strong>Structural support</strong>: the polysaccharides cellulose and chitin, later in this lesson.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Cell surface markers let a cell tell whether another cell is <strong>"self" or not</strong>. The carbohydrate chains can be attached to the <strong>phospholipids or proteins</strong> of the cell membrane (lesson 1.09).</p></div>
<details class="check"><summary>Review question 1: What are the main functions of carbohydrates?</summary><div class="ans"><p>Class key: <strong>short-term energy</strong> and <strong>structural support</strong>. The slide also lists <strong>cell surface markers</strong> (cell identification and cell communication), so include it for full marks.</p></div></details>

<h3 data-tier="essential">Classifying carbohydrates</h3>
<p>"Saccharide" comes from the Greek word for sugar: mono = one, di = two, oligo = a few, poly = many.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Class</th><th>Definition</th><th>Examples</th></tr></thead><tbody>
<tr><td>Monosaccharide</td><td>A simple sugar: one sugar unit</td><td>Glucose, fructose, galactose, ribose</td></tr>
<tr><td>Disaccharide</td><td>Two simple sugars bound together by a covalent <strong>glycosidic linkage</strong></td><td>Maltose, sucrose, lactose</td></tr>
<tr><td>Oligosaccharide</td><td>Two to ten monosaccharides held together by glycosidic linkages</td><td>Disaccharides; short chains on cell surface markers</td></tr>
<tr><td>Polysaccharide</td><td>A polymer of many monosaccharides</td><td>Starch, glycogen, cellulose, chitin</td></tr>
</tbody></table></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The slides overlap a little, so use these working numbers: an <strong>oligosaccharide</strong> has <strong>2 to 10</strong> monosaccharides (so disaccharides count as oligosaccharides), and a <strong>polysaccharide</strong> has <strong>more than 10</strong>. One slide defines a polysaccharide as "more than two"; the oligosaccharide slide narrows that down.</p></div>

<h3 data-tier="essential">Monosaccharides</h3>
<p>A <span class="term">monosaccharide</span> is <strong>composed of a single chain of carbon atoms to which hydroxyl groups are attached</strong>. It <strong>also contains a carbonyl group (C=O)</strong>. So every simple sugar has several –OH groups plus one C=O, which is why sugars are so polar and so water-soluble (lesson 1.02).</p>
<p>Monosaccharides are <strong>distinguished by the number of carbon atoms they possess</strong>. The ending <strong>-ose</strong> means sugar:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Carbons</th><th>Name</th><th>Examples</th></tr></thead><tbody>
<tr><td>3</td><td>Triose</td><td>Glyceraldehyde (made in glycolysis, Unit 2)</td></tr>
<tr><td>5</td><td>Pentose</td><td>Ribose (in RNA and ATP), deoxyribose (in DNA)</td></tr>
<tr><td>6</td><td>Hexose</td><td>Glucose, galactose, fructose</td></tr>
</tbody></table></div>
<p data-tier="likely">The carbonyl can sit in two places, using the aldehyde/ketone idea from lesson 1.02. In glucose and galactose the C=O is on carbon 1, at the end of the chain (an aldehyde), so they are <strong>aldoses</strong>. In fructose the C=O is on carbon 2, inside the chain (a ketone), so it is a <strong>ketose</strong>.</p>

<h3 data-tier="essential">Isomers: glucose, galactose and fructose</h3>
<p>Monosaccharides are also <strong>distinguished by the spatial arrangement of their atoms</strong>. <span class="term">Isomers</span> are <strong>molecules with the same chemical formula, but with a different arrangement of atoms</strong>. <strong>Glucose, galactose and fructose all have the formula C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></strong>, yet they are different sugars with different properties:</p>
<ul>
  <li><strong>Glucose vs galactose:</strong> identical except at <strong>carbon 4</strong>, where the –OH and –H swap sides. That one flip is enough for your enzymes to treat them as different molecules.</li>
  <li><strong>Glucose vs fructose:</strong> fructose has its carbonyl on <strong>carbon 2</strong> (a ketone) instead of carbon 1 (an aldehyde). Its chain is arranged differently and it closes into a five-membered ring instead of a six-membered one.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>You should be able to <strong>draw the glucose chain</strong>: six carbons in a column, with C=O on carbon 1 at the top, an –OH on each of carbons 2 to 5, and carbon 6 at the bottom as CH<sub>2</sub>OH.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>In the straight-chain drawing of glucose, read the –OH sides from carbon 2 down: <strong>right, left, right, right</strong> ("R-L-R-R"). Galactose is the same except carbon 4 flips: right, left, <strong>left</strong>, right.</p></div>

<h3 data-tier="essential">Ring forms: alpha and beta glucose</h3>
<p>Monosaccharides <strong>with 5 or more carbons are linear in the dry state, but form a ring when dissolved in water</strong>. The inside of a cell is mostly water, so the ring is the form that matters in living things.</p>
<p>How the ring closes: the –OH on <strong>carbon 5</strong> swings around and bonds to <strong>carbon 1</strong>, the carbonyl carbon. The oxygen from that –OH becomes part of the ring, so the glucose ring holds <strong>five carbons and one oxygen</strong>. Carbon 6 stays outside the ring as the –CH<sub>2</sub>OH group, pointing up. The old C=O oxygen on carbon 1 becomes a new –OH, and that –OH can end up pointing one of two ways:</p>
<ul>
  <li><span class="term">Alpha (α) glucose</span>: the –OH on carbon 1 points <strong>down</strong>, below the ring.</li>
  <li><span class="term">Beta (β) glucose</span>: the –OH on carbon 1 points <strong>up</strong>, above the ring.</li>
</ul>
<p>Everything else is identical. Only that first hydroxyl is flipped.</p>
<figure class="diagram">
<svg viewBox="0 0 640 300" role="img" aria-labelledby="b103-t1">
<title id="b103-t1">Left: straight-chain glucose, carbons numbered 1 to 6 from top to bottom, with a carbonyl on carbon 1 and hydroxyl groups on carbons 2 to 6. Arrow: dissolved in water. Right: the two ring forms. In both, the ring is five carbons and one oxygen, with the oxygen at the top right, carbon 1 at the right corner and carbon 6 as CH2OH above carbon 5. In alpha-glucose the hydroxyl on carbon 1 points down; in beta-glucose it points up.</title>
<defs><marker id="b103-m1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<text x="100" y="30" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Straight chain (dry)</text>
<text x="435" y="30" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Ring (dissolved in water)</text>
<g style="stroke:var(--ink-2)" stroke-width="1.6">
<line x1="82" y1="64" x2="93" y2="64"/><line x1="107" y1="61" x2="119" y2="61"/><line x1="107" y1="67" x2="119" y2="67"/>
<line x1="100" y1="72" x2="100" y2="90"/><line x1="100" y1="106" x2="100" y2="124"/><line x1="100" y1="140" x2="100" y2="158"/><line x1="100" y1="174" x2="100" y2="192"/><line x1="100" y1="208" x2="100" y2="226"/><line x1="100" y1="242" x2="100" y2="252"/>
<line x1="82" y1="98" x2="93" y2="98"/><line x1="107" y1="98" x2="118" y2="98"/><line x1="82" y1="132" x2="93" y2="132"/><line x1="107" y1="132" x2="118" y2="132"/><line x1="82" y1="166" x2="93" y2="166"/><line x1="107" y1="166" x2="118" y2="166"/><line x1="82" y1="200" x2="93" y2="200"/><line x1="107" y1="200" x2="118" y2="200"/><line x1="82" y1="234" x2="93" y2="234"/><line x1="107" y1="234" x2="118" y2="234"/>
</g>
<g font-family="inherit" font-size="15" style="fill:var(--ink)">
<text x="100" y="69" text-anchor="middle" font-weight="700">C</text><text x="100" y="103" text-anchor="middle" font-weight="700">C</text><text x="100" y="137" text-anchor="middle" font-weight="700">C</text><text x="100" y="171" text-anchor="middle" font-weight="700">C</text><text x="100" y="205" text-anchor="middle" font-weight="700">C</text><text x="100" y="239" text-anchor="middle" font-weight="700">C</text>
<text x="80" y="69" text-anchor="end">H</text><text x="121" y="69" style="fill:var(--red)" font-weight="700">O</text>
<text x="80" y="103" text-anchor="end">H</text><text x="120" y="103">OH</text>
<text x="80" y="137" text-anchor="end">HO</text><text x="120" y="137">H</text>
<text x="80" y="171" text-anchor="end">H</text><text x="120" y="171">OH</text>
<text x="80" y="205" text-anchor="end">H</text><text x="120" y="205" style="fill:var(--amber)" font-weight="700">OH</text>
<text x="80" y="239" text-anchor="end">H</text><text x="120" y="239">OH</text>
<text x="100" y="266" text-anchor="middle">H</text>
</g>
<g font-family="inherit" font-size="12" font-weight="700" text-anchor="middle" style="fill:var(--blue)"><text x="40" y="68">1</text><text x="40" y="102">2</text><text x="40" y="136">3</text><text x="40" y="170">4</text><text x="40" y="204">5</text><text x="40" y="238">6</text></g>
<text x="100" y="290" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">C5 –OH (amber) closes the ring</text>
<line x1="165" y1="150" x2="235" y2="150" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#b103-m1)"/>
<text x="200" y="128" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">dissolved</text>
<text x="200" y="142" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">in water</text>
<g style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="2"><polygon points="310,128 360,128 385,150 360,172 310,172 285,150"/><polygon points="510,128 560,128 585,150 560,172 510,172 485,150"/></g>
<g style="stroke:var(--teal)" stroke-width="5"><line x1="310" y1="172" x2="360" y2="172"/><line x1="510" y1="172" x2="560" y2="172"/></g>
<g style="stroke:var(--ink-2)" stroke-width="1.6">
<line x1="310" y1="128" x2="310" y2="106"/><line x1="385" y1="150" x2="385" y2="130"/><line x1="385" y1="150" x2="385" y2="172"/><line x1="360" y1="172" x2="360" y2="161"/><line x1="360" y1="172" x2="360" y2="192"/><line x1="310" y1="172" x2="310" y2="161"/><line x1="310" y1="172" x2="310" y2="190"/><line x1="285" y1="150" x2="285" y2="130"/><line x1="285" y1="150" x2="285" y2="172"/>
<line x1="510" y1="128" x2="510" y2="106"/><line x1="585" y1="150" x2="585" y2="128"/><line x1="585" y1="150" x2="585" y2="170"/><line x1="560" y1="172" x2="560" y2="161"/><line x1="560" y1="172" x2="560" y2="192"/><line x1="510" y1="172" x2="510" y2="161"/><line x1="510" y1="172" x2="510" y2="190"/><line x1="485" y1="150" x2="485" y2="130"/><line x1="485" y1="150" x2="485" y2="172"/>
</g>
<g style="fill:var(--surface);stroke:var(--teal)" stroke-width="1.5"><circle cx="360" cy="128" r="8"/><circle cx="560" cy="128" r="8"/></g>
<g font-family="inherit" font-size="13" font-weight="700" text-anchor="middle" style="fill:var(--amber)"><text x="360" y="133">O</text><text x="560" y="133">O</text></g>
<g font-family="inherit" font-size="13" text-anchor="middle" style="fill:var(--ink)">
<text x="310" y="100">CH<tspan font-size="11" dy="3">2</tspan><tspan dy="-3">OH</tspan></text><text x="510" y="100">CH<tspan font-size="11" dy="3">2</tspan><tspan dy="-3">OH</tspan></text>
<text x="360" y="206">OH</text><text x="285" y="186">HO</text><text x="560" y="206">OH</text><text x="485" y="186">HO</text>
</g>
<g font-family="inherit" font-size="11.5" text-anchor="middle" style="fill:var(--ink)"><text x="310" y="157">OH</text><text x="510" y="157">OH</text></g>
<g font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink-2)"><text x="385" y="126">H</text><text x="360" y="157">H</text><text x="310" y="203">H</text><text x="285" y="126">H</text><text x="585" y="183">H</text><text x="560" y="157">H</text><text x="510" y="203">H</text><text x="485" y="126">H</text></g>
<g font-family="inherit" font-size="14" font-weight="700" text-anchor="middle" style="fill:var(--red)"><text x="385" y="187">OH</text><text x="585" y="122">OH</text></g>
<g font-family="inherit" font-size="11" font-weight="700" style="fill:var(--blue)">
<text x="393" y="155">1</text><text x="366" y="187">2</text><text x="304" y="187" text-anchor="end">3</text><text x="277" y="155" text-anchor="end">4</text><text x="302" y="124" text-anchor="end">5</text><text x="284" y="101" text-anchor="end">6</text>
<text x="593" y="155">1</text><text x="566" y="187">2</text><text x="504" y="187" text-anchor="end">3</text><text x="477" y="155" text-anchor="end">4</text><text x="502" y="124" text-anchor="end">5</text><text x="484" y="101" text-anchor="end">6</text>
</g>
<g font-family="inherit" font-size="14" font-weight="700" text-anchor="middle" style="fill:var(--ink)"><text x="335" y="236">α-glucose</text><text x="535" y="236">β-glucose</text></g>
<g font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink-2)"><text x="335" y="253">C1 –OH points down</text><text x="535" y="253">C1 –OH points up</text></g>
<text x="435" y="284" text-anchor="middle" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--ink)">Only carbon 1 differs: α = OH below, β = OH above</text>
</svg>
<figcaption>The oxygen of the carbon-5 –OH (amber) becomes the ring oxygen. Numbering always starts at the carbon clockwise from the ring oxygen. The thick edge is the side of the ring nearest you.</figcaption>
</figure>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Compare the carbon 1 –OH with the –OH on the carbon next to it (carbon 2, which points down). In <strong>alpha</strong> they are on the <strong>same</strong> side; in <strong>beta</strong> they are on <strong>different</strong> sides. In water, beta is the more common form because it is more stable.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>ABBA</strong>: <strong>A</strong>lpha = <strong>B</strong>elow, <strong>B</strong>eta = <strong>A</strong>bove. Or: <strong>b</strong>eta is a <strong>b</strong>ird, up in the sky.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Numbering the ring wrong. Carbon 1 is <strong>always the carbon just clockwise from the ring oxygen</strong> (the only ring carbon bonded to two oxygens). Keep going clockwise: 2 and 3 along the bottom, 4 at the left, 5 at the top left next to the oxygen, and 6 is the CH<sub>2</sub>OH above carbon 5. If your CH<sub>2</sub>OH is not on carbon 5, start again.</p></div>
<details class="check"><summary>Review question 2: Draw an alpha-glucose molecule and number the carbons properly.</summary><div class="ans"><p>Draw a hexagon with the <strong>ring oxygen at the top right</strong>. Going clockwise from the oxygen: <strong>C1</strong> (right corner) with <strong>–OH down</strong> and H up; <strong>C2</strong> (bottom right) with OH down and H up; <strong>C3</strong> (bottom left) with OH up and H down; <strong>C4</strong> (left corner) with OH down and H up; <strong>C5</strong> (top left) with H down and <strong>C6, the CH<sub>2</sub>OH, up</strong>. The –OH on C1 pointing down is what makes it alpha (compare the figure above).</p></div></details>
<p data-tier="extra">In a glucose solution, the two ring forms constantly interconvert by briefly opening into the straight chain. At equilibrium about 64% is β, 36% is α and well under 1% is the open chain. Fructose closes between carbon 2 and carbon 5, giving a five-membered ring of four carbons and one oxygen.</p>

<h3 data-tier="essential">Glycosidic linkages: joining sugars</h3>
<p>Sugars are joined by <strong>condensation</strong> (dehydration synthesis) and separated by <strong>hydrolysis</strong>, exactly as in lesson 1.02. The covalent bond that forms between two monosaccharides is a <span class="term">glycosidic linkage</span> (glycosidic bond): a C–O–C bridge between two sugar rings.</p>
<figure class="diagram">
<svg viewBox="0 0 640 412" role="img" aria-labelledby="b103-t2">
<title id="b103-t2">Two alpha-glucose rings react. The hydroxyl on carbon 1 of the first glucose and the hydrogen of the hydroxyl on carbon 4 of the second glucose are highlighted. They leave as one water molecule in a condensation reaction. The product is maltose: the two rings joined by an oxygen bridge from carbon 1 of the first ring to carbon 4 of the second, an alpha-1,4 glycosidic linkage, plus water.</title>
<defs><marker id="b103-m2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--teal)"/></marker></defs>
<g style="fill:var(--amber-soft);stroke:var(--amber)" stroke-dasharray="3 2"><rect x="186" y="131" width="28" height="18" rx="4"/><rect x="374" y="131" width="14" height="18" rx="4"/><rect x="518" y="298" width="54" height="28" rx="6"/></g>
<g style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="2"><polygon points="125,88 175,88 200,110 175,132 125,132 100,110"/><polygon points="415,88 465,88 490,110 465,132 415,132 390,110"/><polygon points="165,288 215,288 240,310 215,332 165,332 140,310"/><polygon points="365,288 415,288 440,310 415,332 365,332 340,310"/></g>
<g style="stroke:var(--teal)" stroke-width="5"><line x1="125" y1="132" x2="175" y2="132"/><line x1="415" y1="132" x2="465" y2="132"/><line x1="165" y1="332" x2="215" y2="332"/><line x1="365" y1="332" x2="415" y2="332"/></g>
<g style="stroke:var(--ink-2)" stroke-width="1.6">
<line x1="125" y1="88" x2="125" y2="68"/><line x1="200" y1="110" x2="200" y2="130"/><line x1="175" y1="132" x2="175" y2="150"/><line x1="125" y1="132" x2="125" y2="121"/><line x1="100" y1="110" x2="100" y2="130"/>
<line x1="415" y1="88" x2="415" y2="68"/><line x1="490" y1="110" x2="490" y2="130"/><line x1="465" y1="132" x2="465" y2="150"/><line x1="415" y1="132" x2="415" y2="121"/><line x1="390" y1="110" x2="390" y2="130"/>
<line x1="165" y1="288" x2="165" y2="268"/><line x1="215" y1="332" x2="215" y2="350"/><line x1="165" y1="332" x2="165" y2="321"/><line x1="140" y1="310" x2="140" y2="330"/>
<line x1="365" y1="288" x2="365" y2="268"/><line x1="440" y1="310" x2="440" y2="330"/><line x1="415" y1="332" x2="415" y2="350"/><line x1="365" y1="332" x2="365" y2="321"/>
</g>
<g style="stroke:var(--red)" stroke-width="2.5"><line x1="240" y1="310" x2="282" y2="332"/><line x1="298" y1="332" x2="340" y2="310"/></g>
<g style="fill:var(--surface);stroke:var(--teal)" stroke-width="1.5"><circle cx="175" cy="88" r="8"/><circle cx="465" cy="88" r="8"/><circle cx="215" cy="288" r="8"/><circle cx="415" cy="288" r="8"/></g>
<g font-family="inherit" font-size="12" font-weight="700" text-anchor="middle" style="fill:var(--ink)"><text x="175" y="93">O</text><text x="465" y="93">O</text><text x="215" y="293">O</text><text x="415" y="293">O</text></g>
<g font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink)">
<text x="125" y="62">CH<tspan font-size="11" dy="3">2</tspan><tspan dy="-3">OH</tspan></text><text x="415" y="62">CH<tspan font-size="11" dy="3">2</tspan><tspan dy="-3">OH</tspan></text><text x="165" y="262">CH<tspan font-size="11" dy="3">2</tspan><tspan dy="-3">OH</tspan></text><text x="365" y="262">CH<tspan font-size="11" dy="3">2</tspan><tspan dy="-3">OH</tspan></text>
<text x="175" y="164">OH</text><text x="465" y="164">OH</text><text x="215" y="364">OH</text><text x="415" y="364">OH</text>
<text x="100" y="144">HO</text><text x="140" y="344">HO</text><text x="490" y="144">OH</text><text x="440" y="344">OH</text>
<text x="125" y="118" font-size="11.5">OH</text><text x="415" y="118" font-size="11.5">OH</text><text x="165" y="318" font-size="11.5">OH</text><text x="365" y="318" font-size="11.5">OH</text>
</g>
<text x="200" y="144" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">OH</text>
<text x="387" y="144" text-anchor="end" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">H</text>
<text x="388" y="144" font-family="inherit" font-size="12" style="fill:var(--ink)">O</text>
<g font-family="inherit" font-size="12" font-weight="700" style="fill:var(--blue)"><text x="208" y="106">1</text><text x="92" y="106" text-anchor="end">4</text><text x="498" y="106">1</text><text x="382" y="106" text-anchor="end">4</text><text x="246" y="304">1</text><text x="334" y="304" text-anchor="end">4</text></g>
<text x="300" y="116" text-anchor="middle" font-family="inherit" font-size="20" style="fill:var(--ink)">+</text>
<g font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink-2)"><text x="150" y="190">α-glucose</text><text x="440" y="190">α-glucose</text></g>
<line x1="300" y1="200" x2="300" y2="240" style="stroke:var(--teal)" stroke-width="3" marker-end="url(#b103-m2)"/>
<text x="314" y="216" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--teal)">condensation (dehydration synthesis)</text>
<text x="314" y="232" font-family="inherit" font-size="12" style="fill:var(--ink-2)">–OH + –H leave as water; reverse = hydrolysis</text>
<text x="290" y="342" text-anchor="middle" font-family="inherit" font-size="15" font-weight="700" style="fill:var(--red)">O</text>
<line x1="290" y1="348" x2="290" y2="372" style="stroke:var(--red)" stroke-dasharray="2 2"/>
<text x="290" y="388" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--red)">α-1,4 glycosidic linkage</text>
<text x="290" y="406" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">maltose</text>
<text x="500" y="317" text-anchor="middle" font-family="inherit" font-size="20" style="fill:var(--ink)">+</text>
<text x="545" y="318" text-anchor="middle" font-family="inherit" font-size="16" font-weight="700" style="fill:var(--ink)">H<tspan font-size="11" dy="4">2</tspan><tspan dy="-4">O</tspan></text>
</svg>
<figcaption>Maltose forms when the carbon-1 –OH of one α-glucose and the H of the carbon-4 –OH of another leave as water. The leftover oxygen bridges carbon 1 to carbon 4: an α-1,4 glycosidic linkage. (Ring H atoms are left out for clarity.)</figcaption>
</figure>
<p>In the slide's example, two α-glucose molecules join to make <strong>maltose</strong>. A glycosidic linkage is named from three pieces of information: <strong>α or β</strong> (which way the carbon-1 –OH pointed on the first sugar) and the <strong>numbers of the two carbons</strong> it joins. Maltose has an <span class="term">α-1,4 glycosidic linkage</span>: alpha, carbon 1 to carbon 4.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>It is an <strong>α-1,4 glycosidic linkage</strong> because it joins the <strong>1st carbon</strong> of one glucose to the <strong>4th carbon</strong> of the other. Making it is dehydration synthesis (produces water); the opposite, hydrolysis, uses water. If the second glucose is joined through its <strong>6th carbon</strong> (the CH<sub>2</sub>OH) instead, the result is an <strong>α-1,6 glycosidic linkage</strong>, and that makes a <strong>branch</strong>.</p></div>
<div class="eq">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> ⇌ C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O<br>forward: condensation; reverse: hydrolysis</div>
<h3 data-tier="essential">Disaccharides</h3>
<p>An <span class="term">oligosaccharide</span> is <strong>composed of two to ten monosaccharides held together by a glycosidic linkage</strong>, and oligosaccharides are <strong>categorized based on the number of monosaccharides</strong>. With exactly two, it is a <span class="term">disaccharide</span>. Know these three:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Disaccharide</th><th>Made from</th><th>Where you meet it</th></tr></thead><tbody>
<tr><td>Maltose</td><td>Glucose + glucose</td><td>Found in grains; used in the production of beer</td></tr>
<tr><td>Sucrose</td><td>Glucose + fructose</td><td>Table sugar; also used by plants to transport glucose from one place to another</td></tr>
<tr><td>Lactose</td><td>Galactose + glucose</td><td>Milk sugar</td></tr>
</tbody></table></div>
<p>Every disaccharide built from two hexoses has the formula C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>: two C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> minus one H<sub>2</sub>O.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The order you name the parts in does not matter: "galactose + glucose" and "glucose + galactose" both describe lactose.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>M</strong>altose is a <strong>m</strong>atching pair (glucose + glucose). <strong>S</strong>ucrose is the <strong>s</strong>ugar bowl: glucose + <strong>fru</strong>ctose ("fruit sugar"). <strong>Lact</strong>ose and ga<strong>lact</strong>ose share "lact" (milk): lactose = galactose + glucose.</p></div>
<p data-tier="extra">Each disaccharide has its own linkage: maltose α-1,4; sucrose α-1,2 (carbon 1 of glucose to carbon 2 of fructose); lactose β-1,4. Many adults stop making lactase, the enzyme that hydrolyzes lactose. Undigested lactose reaches the large intestine, where bacteria ferment it and make gas: lactose intolerance.</p>
<p data-tier="likely">Why do plants move sugar around as sucrose instead of glucose? The linkage in sucrose ties up the reactive carbonyl carbons of both sugars, so sucrose is less reactive and travels through the plant without reacting along the way. Where it is needed, it is hydrolyzed: sucrose + H<sub>2</sub>O → glucose + fructose, catalyzed by sucrase (lesson 1.01).</p>
<details class="check"><summary>Review question 3: Show how sucrose is formed (include both reactants and products and clearly show the linkage).</summary><div class="ans"><p><strong>Reactants:</strong> α-glucose (six-membered ring) + fructose (five-membered ring). <strong>Reaction:</strong> the –OH on <strong>carbon 1 of glucose</strong> and the H from the –OH on <strong>carbon 2 of fructose</strong> are removed as <strong>H<sub>2</sub>O</strong> (dehydration synthesis). <strong>Products:</strong> sucrose, with the two rings joined through an oxygen bridge (the <strong>glycosidic linkage</strong>), plus one water molecule.</p><p>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (glucose) + C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (fructose) → C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> (sucrose) + H<sub>2</sub>O</p></div></details>

<h3 data-tier="essential">Polysaccharides</h3>
<p><span class="term">Polysaccharides</span> are known as <strong>"complex carbohydrates"</strong>. They are often composed of <strong>several hundred to several thousand monosaccharide subunits held together by glycosidic linkages</strong>, and they <strong>can be straight chains or branched</strong>. They have two functions:</p>
<ul>
  <li><strong>Energy storage</strong>: <strong>starch</strong> (plants) and <strong>glycogen</strong> (animals).</li>
  <li><strong>Structural support</strong>: <strong>cellulose</strong> (plants) and <strong>chitin</strong> (insects and fungi).</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p><strong>Linear</strong> polysaccharides give <strong>greater structural integrity</strong>. <strong>Branched</strong> polysaccharides are open, highly accessible structures: every branch ends in a free end, so enzymes can add or remove glucose at many ends at once. That makes branched molecules good for <strong>rapid energy storage and release</strong>.</p></div>
<figure class="diagram">
<svg viewBox="0 0 640 346" role="img" aria-labelledby="b103-t3">
<title id="b103-t3">Shapes of five polysaccharides. Energy storage, made of alpha-glucose: amylose, a coiled unbranched helix; amylopectin, a chain with branches about every 20 subunits; glycogen, a compact, highly branched molecule with branches about every 10 subunits. Structural support, beta-1,4 linked and unbranched: cellulose, straight parallel chains joined side by side by hydrogen bonds; chitin, similar rigid parallel chains made of N-acetylglucosamine.</title>
<g font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink-2)"><text x="10" y="20">Energy storage: α-glucose</text><text x="10" y="200">Structural support: β-1,4 linkages, unbranched</text></g>
<g style="fill:none;stroke:var(--line)" stroke-width="1.5"><rect x="10" y="28" width="200" height="152" rx="10"/><rect x="220" y="28" width="200" height="152" rx="10"/><rect x="430" y="28" width="200" height="152" rx="10"/><rect x="10" y="208" width="305" height="130" rx="10"/><rect x="325" y="208" width="305" height="130" rx="10"/></g>
<g font-family="inherit" font-size="14" font-weight="700" text-anchor="middle" style="fill:var(--ink)"><text x="110" y="50">Amylose</text><text x="320" y="50">Amylopectin</text><text x="530" y="50">Glycogen</text><text x="162" y="230">Cellulose</text><text x="478" y="230">Chitin</text></g>
<g font-family="inherit" font-size="11.5" text-anchor="middle" style="fill:var(--ink-2)">
<text x="110" y="66">starch · plants</text><text x="110" y="80">α-1,4 · unbranched</text>
<text x="320" y="66">starch · plants</text><text x="320" y="80">α-1,4 + α-1,6 · branch ~every 20</text>
<text x="530" y="66">animals · liver and muscle</text><text x="530" y="80">α-1,4 + α-1,6 · branch ~every 10</text>
<text x="162" y="246">plant cell walls · β-glucose · β-1,4</text>
<text x="478" y="246">insects, fungi · N-acetylglucosamine · β-1,4</text>
<text x="110" y="172">coiled helix</text><text x="320" y="172">branched</text><text x="530" y="174">very branched, compact</text>
<text x="162" y="330">straight chains linked by H-bonds</text><text x="478" y="330">rigid "parallel toothpicks"; contains N</text>
</g>
<g style="fill:none;stroke:var(--teal)" stroke-width="2.5"><ellipse cx="56" cy="128" rx="11" ry="24"/><ellipse cx="74" cy="128" rx="11" ry="24"/><ellipse cx="92" cy="128" rx="11" ry="24"/><ellipse cx="110" cy="128" rx="11" ry="24"/><ellipse cx="128" cy="128" rx="11" ry="24"/><ellipse cx="146" cy="128" rx="11" ry="24"/><ellipse cx="164" cy="128" rx="11" ry="24"/></g>
<g style="fill:none;stroke:var(--teal)" stroke-width="1.5"><path d="M240,152H405 M270,152L295,126H405 M320,126L345,102H405"/><path d="M450,128H612 M470,128L490,108H530 M505,108L520,94H560 M540,128L560,108H612 M575,108L590,94H615 M480,128L500,148H540 M515,148L530,162H565 M555,128L575,148H612"/><path d="M30,264H295 M30,284H295 M30,304H295"/></g>
<g style="fill:none;stroke:var(--teal)" stroke-width="6" stroke-linecap="round" stroke-dasharray="0.01 8"><path d="M240,152H405 M270,152L295,126H405 M320,126L345,102H405"/><path d="M450,128H612 M470,128L490,108H530 M505,108L520,94H560 M540,128L560,108H612 M575,108L590,94H615 M480,128L500,148H540 M515,148L530,162H565 M555,128L575,148H612"/><path d="M30,264H295 M30,284H295 M30,304H295"/></g>
<path d="M345,264H610 M345,284H610 M345,304H610" style="fill:none;stroke:var(--magenta)" stroke-width="1.5"/>
<path d="M345,264H610 M345,284H610 M345,304H610" style="fill:none;stroke:var(--magenta)" stroke-width="6" stroke-linecap="round" stroke-dasharray="0.01 8"/>
<path d="M40,268V280M60,268V280M80,268V280M100,268V280M120,268V280M140,268V280M160,268V280M180,268V280M200,268V280M220,268V280M240,268V280M260,268V280M280,268V280M40,288V300M60,288V300M80,288V300M100,288V300M120,288V300M140,288V300M160,288V300M180,288V300M200,288V300M220,288V300M240,288V300M260,288V300M280,288V300" style="stroke:var(--amber)" stroke-width="1.5" stroke-dasharray="2 2"/>
<path d="M355,268V280M375,268V280M395,268V280M415,268V280M435,268V280M455,268V280M475,268V280M495,268V280M515,268V280M535,268V280M555,268V280M575,268V280M595,268V280M355,288V300M375,288V300M395,288V300M415,288V300M435,288V300M455,288V300M475,288V300M495,288V300M515,288V300M535,288V300M555,288V300M575,288V300M595,288V300" style="stroke:var(--amber)" stroke-width="1.5" stroke-dasharray="2 2"/>
</svg>
<figcaption>Storage polysaccharides (top) are coiled or branched, so they are compact and full of chain ends where enzymes can work. Structural polysaccharides (bottom) are straight chains that line up side by side and hydrogen-bond (amber dashes) into strong fibres.</figcaption>
</figure>

<h3 data-tier="essential">Starch, glycogen, cellulose and chitin</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>Polysaccharide</th><th>Source</th><th>Subunit</th><th>Bonds</th><th>Branches</th><th>Shape</th></tr></thead><tbody>
<tr><td>Amylose (starch)</td><td>Plant</td><td>α-glucose</td><td>1-4</td><td>No</td><td>Coiled helix</td></tr>
<tr><td>Amylopectin (starch)</td><td>Plant</td><td>α-glucose</td><td>1-4 and 1-6</td><td>Yes (~every 20 subunits)</td><td>Branched</td></tr>
<tr><td>Glycogen</td><td>Animal</td><td>α-glucose</td><td>1-4 and 1-6</td><td>Yes (~every 10 subunits)</td><td>Highly branched, compact</td></tr>
<tr><td>Cellulose</td><td>Plant</td><td>β-glucose</td><td>1-4</td><td>No</td><td>Straight, parallel chains</td></tr>
<tr><td>Chitin</td><td>Fungi, arthropods (exoskeletons)</td><td>N-acetylglucosamine</td><td>β-1,4</td><td>No</td><td>Straight, parallel chains</td></tr>
</tbody></table></div>
<h4>Starch</h4>
<p><strong>Starch is an energy storage molecule in plants.</strong> Excess glucose produced by photosynthesis is turned into starch and stored in all parts of the plant: potatoes, rice and wheat are packed with it. Starch has two forms: <strong>amylose</strong>, an unbranched α-1,4 chain that coils into a helix, and <strong>amylopectin</strong>, an α-1,4 chain with α-1,6 branches.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Amylose makes up only about <strong>20–25%</strong> of starch; the rest is amylopectin.</p></div>
<h4>Glycogen</h4>
<p><strong>Glycogen is used for short-term energy storage</strong> in animals. It is built like amylopectin but branches about twice as often, so it is more compact and has many more free ends. When your blood sugar drops or a muscle starts working hard, enzymes can snip glucose off all those ends at once.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Glycogen is stored in the <strong>liver</strong> and <strong>skeletal muscles</strong>.</p></div>
<h4>Cellulose</h4>
<p><strong>Cellulose gives structural integrity to the plant cell wall.</strong> It is an unbranched chain of <strong>β-glucose</strong> joined by <strong>β-1,4</strong> linkages. The chains are straight, so they line up side by side, and the –OH groups of neighbouring chains hydrogen-bond to each other, building strong bundles (microfibrils). Thousands of weak hydrogen bonds add up to one of the toughest materials in nature: wood and cotton are mostly cellulose.</p>
<h4>Chitin</h4>
<p><strong>Chitin forms the protective, waterproof exoskeleton of insects and reinforces fungal cell walls.</strong> Its subunit is <strong>N-acetylglucosamine</strong>, a glucose with a nitrogen-containing group attached, joined by β-1,4 linkages into unbranched chains.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Chitin chains pack like <strong>parallel toothpicks</strong>. Chitin is <strong>costly to produce</strong> because it contains <strong>nitrogen</strong>, and organisms cannot take nitrogen straight from the air; it has to be fixed first. Chitin also matters for osmosis: a fungus in wet soil is <strong>hypertonic</strong> compared with the soil water (the soil is <strong>hypotonic</strong>), so water moves <strong>into</strong> the fungal cells. The chitin-reinforced wall keeps them from bursting.</p></div>

<h3 data-tier="essential">Why alpha vs beta matters</h3>
<p>Starch and cellulose are <strong>both polymers of glucose</strong>. The only difference is that starch uses α-glucose and cellulose uses β-glucose. That one flipped hydroxyl changes everything:</p>
<ul>
  <li><strong>α-1,4 chains curve.</strong> Every linkage bends the chain the same way, so amylose curls into a <strong>helix</strong>. Coils and branches make compact storage molecules.</li>
  <li><strong>β-1,4 chains are straight.</strong> To line up the carbon-1 –OH (up) of one β-glucose with the carbon-4 –OH (down) of the next, every second glucose is <strong>flipped upside down</strong>. The flips cancel out, so the chain runs straight, and straight chains pack tightly and hydrogen-bond into fibres.</li>
  <li><strong>Enzymes are shape-specific</strong> (lesson 1.07). The enzymes that digest starch fit α-linkages. They cannot fit a β-linkage, so they cannot break cellulose.</li>
</ul>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Cellulose is made of a different sugar from starch." No: both are made of <strong>glucose</strong>. The difference is <strong>α vs β glucose</strong> and therefore α vs β linkages, which change the shape of the chain and which enzymes can break it.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>Expect "Starch and cellulose are both made of glucose. Why can humans digest one but not the other?" Answer with three links: <strong>α vs β glucose</strong> → <strong>different linkage and chain shape</strong> (helix vs straight fibres) → <strong>human enzymes fit only α-linkages</strong>, and we lack cellulase.</p></div>

<h3 data-tier="essential">Digestion, cellulase and fiber</h3>
<ul>
  <li><strong>Animals have digestive enzymes that can break the glycosidic linkages between the glucose molecules in starch</strong>, then use that glucose for energy through cellular respiration.</li>
  <li><strong>Humans do not have digestive enzymes for cellulose.</strong></li>
  <li><strong>Microbes in the gut of herbivores contain cellulase</strong>, the enzyme that breaks β-1,4 linkages, allowing them to release glucose for energy. Cows and rabbits depend on these microbes.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Fungi also have cellulase, which is how they decompose wood and dead leaves.</p></div>
<p><strong>Indigestible polysaccharides form fiber.</strong> Fiber is <strong>important for gut health</strong>, and because it is never broken down into glucose it <strong>does not lead to increased glucose absorption</strong>. The slide shows two kinds:</p>
<div class="compare">
  <div><h4>Soluble fiber</h4><p>Absorbs water like a sponge, which softens stool and helps waste move through more easily. In class: it <strong>provides water</strong> and <strong>slows digestion</strong>.</p></div>
  <div><h4>Insoluble fiber</h4><p>Bulky fiber that acts like a scrub brush, pushing food along the colon so constipation does not occur. In class: it <strong>acts as a broom</strong>, <strong>adds bulk</strong>, and makes gut contractions more effective.</p></div>
</div>
<details class="check"><summary>A bowl of celery and a bowl of mashed potatoes both contain glucose polymers. Why does only the potato raise your blood sugar?</summary><div class="ans"><p>Potato glucose is stored as <strong>starch</strong>, built from α-glucose. Your digestive enzymes can hydrolyze its α-glycosidic linkages, releasing glucose that is absorbed into the blood. Celery's glucose is in <strong>cellulose</strong>, built from β-glucose with β-1,4 linkages. Humans have no cellulase, so cellulose passes through as <strong>fiber</strong> and no glucose is absorbed from it.</p></div></details>

<h3 data-tier="likely">1-4 vs 1-6 linkages, and polarity</h3>
<details class="check"><summary>Review question 4: Where are 1-4 and 1-6 glycosidic linkages found? What is the difference?</summary><div class="ans"><p><strong>1-4 linkages</strong> join carbon 1 of one glucose to carbon 4 of the next. They form the straight runs of every chain: all of <strong>amylose</strong> and <strong>cellulose</strong>, and the main chains of <strong>amylopectin</strong> and <strong>glycogen</strong>. <strong>1-6 linkages</strong> join carbon 1 to carbon 6, the CH<sub>2</sub>OH carbon that sticks out of the ring, so they start a <strong>branch</strong>. They occur only in the branched polysaccharides, <strong>amylopectin</strong> and <strong>glycogen</strong>.</p></div></details>
<details class="check"><summary>Review question 5: Discuss the polarity of different carbohydrates (monosaccharide vs polysaccharide). How does this relate to their function?</summary><div class="ans"><p>Going from a monosaccharide to a polysaccharide is a change from <strong>high polarity and high solubility</strong> to <strong>low solubility and reduced "effective" polarity</strong>. Both are technically polar because both are covered in –OH groups, but as the chain grows, several things hide that polarity:</p><ul><li><strong>Size:</strong> a polysaccharide is so massive that the energy needed to pull the whole polymer into solution is greater than the energy released by forming hydrogen bonds with water.</li><li><strong>Internal hydrogen bonding (cellulose):</strong> the –OH groups hydrogen-bond to neighbouring chains and are locked into a rigid, crystalline structure, so they are not available to bond with water. Cellulose is completely insoluble even though it is made of polar units.</li><li><strong>Folding and branching (starch, glycogen):</strong> coiling into helices tucks some polar groups into the centre, away from water, further reducing solubility.</li></ul><p><strong>Function:</strong> small, soluble monosaccharides dissolve in blood and cytoplasm and are used quickly for energy. Large, insoluble polysaccharides stay put, so they work well for storage (starch, glycogen) and structure (cellulose, chitin) without affecting the cell's water balance.</p></div></details>
<p data-tier="extra">That last point is a big reason cells store glucose as glycogen or starch at all. Thousands of free glucose molecules dissolved in a cell would raise its solute concentration and draw in water by osmosis. Packing them into one insoluble polymer stores the same energy with almost no osmotic effect.</p>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
  <li>Carbohydrates are made by photosynthesis. Functions: short-term energy, structural support, and cell surface markers for identification and communication.</li>
  <li>Monosaccharide = one sugar; disaccharide = two; oligosaccharide = 2–10; polysaccharide = many (more than 10). Monosaccharides are carbon chains with several –OH groups and one C=O.</li>
  <li>Triose = 3 C, pentose = 5 C, hexose = 6 C. Glucose, galactose and fructose are isomers: all C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, arranged differently.</li>
  <li>Sugars with 5 or more carbons form rings in water. In α-glucose the carbon-1 –OH points down; in β-glucose it points up. Number clockwise from the ring oxygen; carbon 6 is the CH<sub>2</sub>OH.</li>
  <li>Glycosidic linkages form by dehydration synthesis and break by hydrolysis; they are named by α/β and the carbons joined (e.g. α-1,4; α-1,6 makes a branch).</li>
  <li>Maltose = glucose + glucose; sucrose = glucose + fructose; lactose = galactose + glucose.</li>
  <li>Storage: starch (plants: amylose helix, branched amylopectin) and glycogen (animals, more branched; liver and muscle), all α-glucose. Structure: cellulose (β-glucose, β-1,4, straight H-bonded chains) and chitin (N-acetylglucosamine).</li>
  <li>Humans digest α-linkages (starch) but have no cellulase for β-linkages (cellulose), so cellulose becomes fiber: good for gut health, no added glucose.</li>
</ul>
`
});
/* ===================================================================
   1.04 LIPIDS
   =================================================================== */
window.LESSONS.push({
  id: "1.04",
  title: "Lipids",
  stage: "c4",
  where: "Fats, membranes & hormones",
  summary: "Lipids are the nonpolar macromolecules: long-term energy stores, insulation, cell membranes and signals. This lesson covers why lipids do not dissolve in water, how a triglyceride forms by esterification, how saturated, cis and trans fatty acids differ in shape and state, and the structure and jobs of phospholipids, steroids and waxes.",
  objectives: [
    "Explain why lipids are nonpolar and insoluble in water, using the ratio of C–H to O–H bonds.",
    "List the functions of lipids and explain why fat stores more energy per gram than carbohydrate.",
    "Name the four major types of lipids (triglycerides, phospholipids, steroids, waxes) and the job of each.",
    "Draw glycerol and a short fatty acid, and draw the esterification reaction that forms a triglyceride and three water molecules.",
    "Distinguish saturated, monounsaturated and polyunsaturated fatty acids, and cis from trans double bonds.",
    "Use fatty acid shape to explain packing, density and state at room temperature (fats vs oils).",
    "Describe the structure of a phospholipid and explain how it forms the bilayer that separates extracellular fluid from cytosol.",
    "Recognize a steroid (four fused rings, 17 carbons) and a wax (ester of a long-chain alcohol and a long-chain fatty acid) and give examples of each."
  ],
  html: `
<h3 data-tier="essential">What makes a lipid a lipid</h3>
<p><span class="term">Lipids</span> are fats, oils and their relatives. Their structure has a <strong>higher proportion of hydrogen atoms than carbon and oxygen</strong>. Compare a typical fatty acid, stearic acid (C<sub>18</sub>H<sub>36</sub>O<sub>2</sub>), with glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>): glucose has one oxygen for every carbon, while stearic acid has two oxygens for eighteen carbons.</p>
<p>That ratio decides everything. <strong>Due to the smaller proportion of polar O–H bonds and the higher proportion of nonpolar C–H bonds, fats are NONPOLAR.</strong> Recall from lesson 1.01 that C–H has a ΔEN of only 0.35. A fat molecule is almost all C–H and C–C, with a polar group only at one small end, so overall it behaves as nonpolar. As a result, lipids are:</p>
<ul>
  <li><strong>Soluble in nonpolar solvents</strong> (like oil). "Like dissolves like."</li>
  <li><strong>Insoluble in water and aqueous solutions.</strong> The slide's solubility test shows oil mixing evenly into a nonpolar solvent (positive) but sitting as a separate layer on top of water (negative).</li>
</ul>
<p data-tier="extra">This is why lipids are a strange "family". The other three macromolecules are grouped by their monomer; lipids are grouped by a <em>property</em>: they do not dissolve in water. That is why triglycerides, phospholipids, steroids and waxes can look so different from each other and still all be lipids.</p>

<h3 data-tier="essential">Functions of lipids</h3>
<p>The slide lists five functions:</p>
<ul>
  <li><strong>Long-term energy storage.</strong></li>
  <li><strong>Insulation.</strong></li>
  <li><strong>Cell membranes</strong> (phospholipids).</li>
  <li><strong>Cell signalling.</strong></li>
  <li><strong>Coordination and regulation of cellular activities</strong> (hormones).</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The example for insulation is the <strong>subcutaneous layer of fat</strong> under the skin. The example for cell membranes is <strong>phospholipids</strong>.</p></div>
<p>Why are fats the long-term store instead of sugars? Energy is released when C–H bonds are oxidized in cellular respiration. Fats are packed with C–H bonds and contain little oxygen (they are "less oxidized" to begin with), so each gram releases more than twice as much energy as a gram of carbohydrate. Fats are also nonpolar, so they are stored without the water that clings to glycogen, which keeps the store light and compact.</p>
<details class="check"><summary>Review question 1: Describe the main functions of fat.</summary><div class="ans"><ul>
<li><strong>Long-term energy storage:</strong> lipids contain more than twice the energy per gram (9 kcal/g) of carbohydrates (4 kcal/g), so they are efficient for storage.</li>
<li><strong>Insulation:</strong> subcutaneous fat (adipose tissue) helps maintain body temperature by reducing heat loss.</li>
<li><strong>Protection/cushioning:</strong> fat deposits surround and protect vital organs, like the kidneys, from physical shock.</li>
<li><strong>Structural components:</strong> phospholipids and cholesterol are essential for building and maintaining cell membranes.</li>
<li><strong>Hormone production:</strong> lipids are precursors for steroid hormones such as testosterone and estrogen.</li>
<li><strong>Vitamin absorption:</strong> dietary fat is needed to absorb the fat-soluble vitamins A, D, E and K.</li>
</ul></div></details>

<h3 data-tier="essential">Four major types of lipids</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>Type</th><th>Main job (from the slide)</th><th>Built from</th></tr></thead><tbody>
<tr><td>Triglycerides (fats and oils)</td><td>Energy storage (and insulation)</td><td>Glycerol + 3 fatty acids</td></tr>
<tr><td>Phospholipids</td><td>Cell membrane</td><td>Glycerol + 2 fatty acids + a phosphate group</td></tr>
<tr><td>Steroids</td><td>Hormones and cell stability</td><td>Four fused carbon rings</td></tr>
<tr><td>Waxes</td><td>Protection and storage</td><td>A long-chain alcohol + a long-chain fatty acid</td></tr>
</tbody></table></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>"<strong>T</strong>he <strong>P</strong>arty <strong>S</strong>tarts <strong>W</strong>arm": <strong>T</strong>riglycerides, <strong>P</strong>hospholipids, <strong>S</strong>teroids, <strong>W</strong>axes.</p></div>

<h3 data-tier="essential">Triglycerides: glycerol and fatty acids</h3>
<p><span class="term">Triglycerides</span> form <strong>oils and fats</strong>. A triglyceride is made of <strong>4 subunits</strong>: one <strong>glycerol backbone</strong> and <strong>3 fatty acids</strong>. ("Tri" = three fatty acids, "glyceride" = attached to glycerol.)</p>
<ul>
  <li><span class="term">Glycerol</span> is a <strong>3-carbon chain, each carbon with a hydroxyl group</strong> (C<sub>3</sub>H<sub>8</sub>O<sub>3</sub>, or HOCH<sub>2</sub>–CHOH–CH<sub>2</sub>OH).</li>
  <li>A <span class="term">fatty acid</span> is a <strong>long hydrocarbon chain with a carboxyl group (–COOH) at one end</strong>. The carboxyl end is polar; the long chain is nonpolar. <strong>Fatty acids can differ in length</strong>, usually from about 12 to 24 carbons.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Glycerol on its own is <strong>very polar</strong> because of its three –OH groups. Be able to <strong>draw a short fatty acid</strong> (4 to 6 carbons): a carboxyl group at one end and a chain of CH<sub>2</sub> groups ending in CH<sub>3</sub>. For example, a 4-carbon fatty acid is CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Calling a triglyceride a polymer. It is built from <strong>4 subunits of two different kinds</strong>, and once glycerol's three –OH groups are used, nothing more can attach. No repeating chain means <strong>not a polymer</strong> (lesson 1.02).</p></div>

<h3 data-tier="essential">Esterification: how a triglyceride forms</h3>
<p>A triglyceride <strong>forms through esterification</strong>, which is a <strong>condensation reaction</strong>. Each of glycerol's three –OH groups reacts with the carboxyl group of one fatty acid. The <strong>–OH from the fatty acid's carboxyl group</strong> and the <strong>H from glycerol's hydroxyl</strong> leave as water, and the remaining oxygen joins the two. The new bond, –C(=O)–O–, is an <span class="term">ester linkage</span>. Three fatty acids means three ester linkages and <strong>three water molecules</strong>.</p>
<figure class="diagram">
<svg viewBox="0 0 640 290" role="img" aria-labelledby="b104-t1">
<title id="b104-t1">Esterification. Left: glycerol, a three-carbon chain with an OH on each carbon, beside three fatty acids, each a carboxyl group attached to a long zigzag hydrocarbon tail. The H of each glycerol OH and the OH of each carboxyl group are highlighted. Arrow labelled esterification, a condensation. Right: a triglyceride, with each fatty acid attached to glycerol through an oxygen in an ester linkage, plus three water molecules.</title>
<defs><marker id="b104-m1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--teal)"/></marker></defs>
<g style="fill:var(--amber-soft);stroke:var(--amber)" stroke-dasharray="3 2"><rect x="94" y="67" width="14" height="19" rx="4"/><rect x="94" y="127" width="14" height="19" rx="4"/><rect x="94" y="187" width="14" height="19" rx="4"/><rect x="133" y="67" width="27" height="19" rx="4"/><rect x="133" y="127" width="27" height="19" rx="4"/><rect x="133" y="187" width="27" height="19" rx="4"/><rect x="568" y="128" width="68" height="26" rx="6"/></g>
<g style="fill:none;stroke:var(--red)" stroke-dasharray="3 2"><rect x="400" y="43" width="48" height="46" rx="6"/><rect x="400" y="103" width="48" height="46" rx="6"/><rect x="400" y="163" width="48" height="46" rx="6"/></g>
<g style="stroke:var(--ink-2)" stroke-width="1.6">
<line x1="60" y1="58" x2="60" y2="72"/><line x1="60" y1="88" x2="60" y2="132"/><line x1="60" y1="148" x2="60" y2="192"/><line x1="60" y1="208" x2="60" y2="222"/>
<line x1="42" y1="80" x2="53" y2="80"/><line x1="67" y1="80" x2="80" y2="80"/><line x1="42" y1="140" x2="53" y2="140"/><line x1="67" y1="140" x2="80" y2="140"/><line x1="42" y1="200" x2="53" y2="200"/><line x1="67" y1="200" x2="80" y2="200"/>
<line x1="158" y1="80" x2="167" y2="80"/><line x1="170" y1="72" x2="170" y2="62"/><line x1="178" y1="72" x2="178" y2="62"/><line x1="181" y1="80" x2="190" y2="80"/>
<line x1="158" y1="140" x2="167" y2="140"/><line x1="170" y1="132" x2="170" y2="122"/><line x1="178" y1="132" x2="178" y2="122"/><line x1="181" y1="140" x2="190" y2="140"/>
<line x1="158" y1="200" x2="167" y2="200"/><line x1="170" y1="192" x2="170" y2="182"/><line x1="178" y1="192" x2="178" y2="182"/><line x1="181" y1="200" x2="190" y2="200"/>
<line x1="385" y1="58" x2="385" y2="72"/><line x1="385" y1="88" x2="385" y2="132"/><line x1="385" y1="148" x2="385" y2="192"/><line x1="385" y1="208" x2="385" y2="222"/>
<line x1="367" y1="80" x2="378" y2="80"/><line x1="367" y1="140" x2="378" y2="140"/><line x1="367" y1="200" x2="378" y2="200"/>
<line x1="392" y1="80" x2="403" y2="80"/><line x1="419" y1="80" x2="429" y2="80"/><line x1="433" y1="72" x2="433" y2="62"/><line x1="441" y1="72" x2="441" y2="62"/><line x1="444" y1="80" x2="452" y2="80"/>
<line x1="392" y1="140" x2="403" y2="140"/><line x1="419" y1="140" x2="429" y2="140"/><line x1="433" y1="132" x2="433" y2="122"/><line x1="441" y1="132" x2="441" y2="122"/><line x1="444" y1="140" x2="452" y2="140"/>
<line x1="392" y1="200" x2="403" y2="200"/><line x1="419" y1="200" x2="429" y2="200"/><line x1="433" y1="192" x2="433" y2="182"/><line x1="441" y1="192" x2="441" y2="182"/><line x1="444" y1="200" x2="452" y2="200"/>
</g>
<g style="fill:none;stroke:var(--teal)" stroke-width="2.2" stroke-linejoin="round"><path d="M190,80 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6"/><path d="M190,140 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6"/><path d="M190,200 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6"/><path d="M452,80 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6"/><path d="M452,140 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6"/><path d="M452,200 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6 l9,-6 l9,6"/></g>
<g font-family="inherit" font-size="15" text-anchor="middle" style="fill:var(--ink)">
<text x="60" y="54">H</text><text x="60" y="85" font-weight="700">C</text><text x="60" y="145" font-weight="700">C</text><text x="60" y="205" font-weight="700">C</text><text x="60" y="236">H</text>
<text x="36" y="85">H</text><text x="36" y="145">H</text><text x="36" y="205">H</text>
<text x="88" y="85" style="fill:var(--red)">O</text><text x="88" y="145" style="fill:var(--red)">O</text><text x="88" y="205" style="fill:var(--red)">O</text>
<text x="101" y="82">H</text><text x="101" y="142">H</text><text x="101" y="202">H</text>
<text x="146" y="85">HO</text><text x="146" y="145">HO</text><text x="146" y="205">HO</text>
<text x="174" y="85" font-weight="700">C</text><text x="174" y="145" font-weight="700">C</text><text x="174" y="205" font-weight="700">C</text>
<text x="174" y="59" style="fill:var(--red)">O</text><text x="174" y="119" style="fill:var(--red)">O</text><text x="174" y="179" style="fill:var(--red)">O</text>
<text x="385" y="54">H</text><text x="385" y="85" font-weight="700">C</text><text x="385" y="145" font-weight="700">C</text><text x="385" y="205" font-weight="700">C</text><text x="385" y="236">H</text>
<text x="361" y="85">H</text><text x="361" y="145">H</text><text x="361" y="205">H</text>
<text x="411" y="85" font-weight="700" style="fill:var(--red)">O</text><text x="411" y="145" font-weight="700" style="fill:var(--red)">O</text><text x="411" y="205" font-weight="700" style="fill:var(--red)">O</text>
<text x="437" y="85" font-weight="700">C</text><text x="437" y="145" font-weight="700">C</text><text x="437" y="205" font-weight="700">C</text>
<text x="437" y="59" style="fill:var(--red)">O</text><text x="437" y="119" style="fill:var(--red)">O</text><text x="437" y="179" style="fill:var(--red)">O</text>
</g>
<text x="456" y="50" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--red)">ester linkage</text>
<line x1="295" y1="140" x2="345" y2="140" style="stroke:var(--teal)" stroke-width="3" marker-end="url(#b104-m1)"/>
<text x="320" y="124" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--teal)">esterification</text>
<text x="320" y="162" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">(condensation)</text>
<text x="560" y="147" text-anchor="middle" font-family="inherit" font-size="20" style="fill:var(--ink)">+</text>
<text x="603" y="147" text-anchor="middle" font-family="inherit" font-size="15" font-weight="700" style="fill:var(--ink)">3 H<tspan font-size="11" dy="4">2</tspan><tspan dy="-4">O</tspan></text>
<g font-family="inherit" font-size="13" font-weight="700" text-anchor="middle" style="fill:var(--ink)"><text x="60" y="262">glycerol</text><text x="225" y="262">3 fatty acids</text><text x="470" y="262">triglyceride (fat or oil)</text></g>
<g font-family="inherit" font-size="11.5" text-anchor="middle" style="fill:var(--ink-2)"><text x="60" y="278">3 –OH groups</text><text x="225" y="278">carboxyl + hydrocarbon tail</text><text x="470" y="278">3 ester linkages</text></g>
</svg>
<figcaption>Each highlighted H (from glycerol) and OH (from a fatty acid's carboxyl) leave together as one water. The oxygen left behind links glycerol to the fatty acid in an ester linkage (red boxes). Three fatty acids, three waters.</figcaption>
</figure>
<div class="eq">glycerol + 3 fatty acids → triglyceride + 3 H<sub>2</sub>O</div>
<details class="check"><summary>Review question 2: Draw the reaction showing the formation of a triglyceride.</summary><div class="ans"><p>Draw <strong>glycerol</strong> (three carbons in a column, each with an –OH on the right) beside <strong>three fatty acids</strong> (each HO–C(=O)– followed by a long hydrocarbon chain). Circle the <strong>H of each glycerol –OH</strong> and the <strong>–OH of each carboxyl group</strong>, and show them leaving as <strong>3 H<sub>2</sub>O</strong>. In the product, each glycerol carbon is bonded through an O to the C=O of a fatty acid: <strong>three ester linkages</strong>. Label the arrow "esterification (condensation / dehydration synthesis)".</p></div></details>
<p data-tier="extra">Digestion reverses this: the enzyme lipase hydrolyzes the ester linkages, using three water molecules to release glycerol and three free fatty acids.</p>

<h3 data-tier="essential">Saturated and unsaturated fatty acids</h3>
<p>Fatty acids differ in two ways: <strong>length</strong> and <strong>saturation</strong>.</p>
<ul>
  <li>A <span class="term">saturated</span> fatty acid has <strong>all C–C single bonds</strong>. Every carbon holds as many hydrogens as it can: the chain is "saturated" with hydrogen. <strong>All C–C single bonds result in a straight structure.</strong></li>
  <li>An <span class="term">unsaturated</span> fatty acid has <strong>one or more C=C double bonds</strong>. Each double bond means two fewer hydrogens. <strong>One or more C=C <em>may</em> result in a bent structure.</strong> With one double bond it is <span class="term">monounsaturated</span>; with more than one it is <span class="term">polyunsaturated</span>.</li>
</ul>
<p>Why only "may"? It depends on the geometry around the double bond. A double bond cannot rotate, so the hydrogens on its two carbons are locked on one side or the other:</p>
<ul>
  <li><span class="term">Cis</span>: the H atoms are on the <strong>same side</strong> of the C=C. The chain is forced into a <strong>bend (kink)</strong>.</li>
  <li><span class="term">Trans</span>: the H atoms are on <strong>opposite sides</strong> of the C=C. The chain stays nearly <strong>straight</strong>, like a saturated chain.</li>
</ul>
<figure class="diagram">
<svg viewBox="0 0 640 362" role="img" aria-labelledby="b104-t2">
<title id="b104-t2">Top: three fatty acid chains drawn as zigzags with a carboxyl head. The saturated chain has only single bonds and is straight. The cis unsaturated chain has a double bond with hydrogens on the same side, which bends the chain. The trans unsaturated chain has a double bond with hydrogens on opposite sides, and stays straight. Bottom: straight chains pack tightly together, giving a solid fat; kinked chains cannot pack closely, giving a liquid oil.</title>
<g font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)"><text x="10" y="46">Saturated</text><text x="10" y="146">Cis unsaturated</text><text x="10" y="212">Trans unsaturated</text></g>
<g font-family="inherit" font-size="11.5" style="fill:var(--ink-2)"><text x="10" y="62">all single C–C bonds</text><text x="10" y="162">H same side of C=C</text><text x="10" y="228">H opposite sides</text></g>
<g style="fill:var(--red-soft);stroke:var(--red)" stroke-width="1.5"><rect x="150" y="40" width="36" height="20" rx="6"/><rect x="150" y="140" width="36" height="20" rx="6"/><rect x="150" y="205" width="36" height="20" rx="6"/></g>
<g font-family="inherit" font-size="11" text-anchor="middle" style="fill:var(--ink)"><text x="168" y="54">COOH</text><text x="168" y="154">COOH</text><text x="168" y="219">COOH</text></g>
<g style="fill:none;stroke:var(--teal)" stroke-width="2.5" stroke-linejoin="round">
<path d="M188,50 l18,-7 l18,7 l18,-7 l18,7 l18,-7 l18,7 l18,-7 l18,7 l18,-7 l18,7 l18,-7 l18,7 l18,-7 l18,7 l18,-7 l18,7"/>
<path d="M188,150 l14.5,-12.7 l19.3,0.4 l14.5,-12.7 l19.3,0.4 l14.5,-12.7 l19.3,0.4 l14.5,-12.7 l19.3,0.4 l19.3,-0.4 l14.5,12.7 l19.3,-0.4 l14.5,12.7 l19.3,-0.4 l14.5,12.7 l19.3,-0.4 l14.5,12.7"/>
<path d="M188,215 l18,-7 l18,7 l18,-7 l18,7 l18,-7 l18,7 l18,-7 l18,7 l18,-7 l18,7 l18,-7 l18,7 l18,-7 l18,7 l18,-7 l18,7"/>
</g>
<line x1="326" y1="104.4" x2="340" y2="104.1" style="stroke:var(--red)" stroke-width="2.5"/>
<g style="stroke:var(--red)" stroke-width="1.5"><line x1="323.4" y1="99" x2="323.4" y2="92"/><line x1="342.7" y1="99" x2="342.7" y2="92"/></g>
<g font-family="inherit" font-size="11" font-weight="700" text-anchor="middle" style="fill:var(--red)"><text x="323.4" y="89">H</text><text x="342.7" y="89">H</text></g>
<line x1="334.6" y1="217.6" x2="347.9" y2="210.6" style="stroke:var(--blue)" stroke-width="2.5"/>
<text x="333" y="74" text-anchor="middle" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--red)">cis C=C: kink</text>
<text x="341" y="184" text-anchor="middle" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--blue)">trans C=C: still straight</text>
<g style="stroke:var(--blue)" stroke-width="1.5"><line x1="350" y1="206" x2="350" y2="200"/><line x1="332" y1="217" x2="332" y2="224"/></g>
<g font-family="inherit" font-size="11" font-weight="700" text-anchor="middle" style="fill:var(--blue)"><text x="350" y="197">H</text><text x="332" y="235">H</text></g>
<g font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)"><text x="492" y="46">solid at room temp</text><text x="492" y="140">liquid at room temp</text><text x="492" y="212">solid or semi-solid</text></g>
<g font-family="inherit" font-size="11.5" style="fill:var(--ink-2)"><text x="492" y="62">butter, animal fat</text><text x="492" y="156">vegetable oils</text><text x="492" y="228">some margarines</text></g>
<g style="fill:none;stroke:var(--line)" stroke-width="1.5"><rect x="10" y="248" width="305" height="108" rx="10"/><rect x="325" y="248" width="305" height="108" rx="10"/></g>
<g font-family="inherit" font-size="12.5" font-weight="700" text-anchor="middle" style="fill:var(--ink)"><text x="162" y="268">Straight chains (saturated, trans)</text><text x="478" y="268">Kinked chains (cis unsaturated)</text></g>
<g style="fill:none;stroke:var(--teal)" stroke-width="2.5" stroke-linecap="round"><path d="M100,288V328 M116,288V328 M132,288V328 M148,288V328 M164,288V328 M180,288V328 M196,288V328 M212,288V328"/><path d="M395,288V306L407,328 M421,288V306L433,328 M447,288V306L459,328 M473,288V306L485,328 M499,288V306L511,328 M525,288V306L537,328"/></g>
<g style="fill:var(--red-soft);stroke:var(--red)" stroke-width="1.2"><circle cx="100" cy="282" r="6"/><circle cx="116" cy="282" r="6"/><circle cx="132" cy="282" r="6"/><circle cx="148" cy="282" r="6"/><circle cx="164" cy="282" r="6"/><circle cx="180" cy="282" r="6"/><circle cx="196" cy="282" r="6"/><circle cx="212" cy="282" r="6"/><circle cx="395" cy="282" r="6"/><circle cx="421" cy="282" r="6"/><circle cx="447" cy="282" r="6"/><circle cx="473" cy="282" r="6"/><circle cx="499" cy="282" r="6"/><circle cx="525" cy="282" r="6"/></g>
<g font-family="inherit" font-size="11.5" text-anchor="middle" style="fill:var(--ink-2)"><text x="162" y="347">pack tightly: denser, solid (fats)</text><text x="478" y="347">cannot pack closely: liquid (oils)</text></g>
</svg>
<figcaption>Saturated and trans chains are straight and stack neatly, so their molecules hold together into a solid. A cis double bond kinks the chain, the chains cannot pack closely, and the fat stays liquid.</figcaption>
</figure>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Linear chains <strong>stack well</strong>; cis (bent) chains <strong>do not stack well</strong>, because the kinks stop them from "latticing" into a tight arrangement. That is why <strong>plants store oils instead of solid fat</strong>: an oil stays liquid at low temperatures, so the stored energy is easier to access.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Cis</strong> = <strong>s</strong>ame <strong>s</strong>ide (both have an s). <strong>Trans</strong> = across, like a trans-Canada highway crossing the country. And "<strong>sat</strong>urated fats <strong>sat</strong> down solid": straight chains, solid at room temperature.</p></div>
<details class="check"><summary>Review question 4: How does saturation affect the density of the lipid? Why does this matter (think form and function)?</summary><div class="ans"><p><strong>Saturated fats</strong> have no double bonds, so their chains are straight and can pack very tightly together. High packing efficiency means <strong>higher density</strong> and a <strong>solid</strong> at room temperature (e.g. butter, animal fat). <strong>Unsaturated fats</strong> have one or more double bonds, which in nature usually create <strong>kinks</strong>. Kinks prevent close packing, giving <strong>lower density</strong> and a <strong>liquid</strong> at room temperature (e.g. vegetable oils).</p><p><strong>Form and function:</strong> fish living in cold water have more unsaturated fats in their cell membranes. With saturated fats, their membranes would "freeze" and become brittle in the cold; the kinked unsaturated fats keep membranes fluid and working.</p></div></details>
<details class="check"><summary>Review question 5: What is a cis vs a trans monounsaturated fatty acid? Use the structure to explain the state each is in at room temperature.</summary><div class="ans"><p>Both have exactly <strong>one C=C double bond</strong>; the difference is the geometry around it. <strong>Cis:</strong> the H atoms are on the <strong>same side</strong> of the double bond, which creates a <strong>bend or kink</strong>. Because of the kink the molecules cannot pack tightly, so cis fats are <strong>liquid (oils)</strong> at room temperature. <strong>Trans:</strong> the H atoms are on <strong>opposite sides</strong>, so the molecule stays <strong>straight</strong> despite the double bond. Straight molecules pack tightly like saturated fats, so trans fats are often <strong>solid or semi-solid</strong> at room temperature (e.g. margarine).</p></div></details>
<h3 data-tier="likely">Fats in your diet</h3>
<p>The slides connect saturation to food. <strong>Saturated fats</strong> come mostly from <strong>animal meats</strong> (burgers, bacon) and are solid at room temperature. <strong>Polyunsaturated fats</strong> are found in <strong>cooking oils</strong> and are liquid. The slide also labels <strong>margarine</strong> as saturated fat: margarine is made by <strong>hydrogenating</strong> vegetable oil, adding hydrogen atoms across some C=C double bonds to turn them into single bonds. More saturated chains are straighter, so the oil becomes a spreadable solid.</p>
<p>The slide also shows Health Canada's front-of-package <strong>"High in"</strong> symbol (a magnifying glass), which flags foods high in <strong>saturated fat</strong>, <strong>sodium</strong> or <strong>sugars</strong>; salami, crackers and chocolate-covered almonds were the examples. The "Healthy fats?" video featured the avocado, whose fat is mostly unsaturated (cis), the kind that stays liquid.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Class key health note on <strong>trans fats</strong>: because they are straight, the body often "mistakes" them for saturated fats, but because they are mostly <strong>synthetic</strong> (often created through <strong>partial hydrogenation</strong>), the body lacks the specific enzymes to break them down efficiently, which leads to <strong>cardiovascular issues</strong>.</p></div>
<p data-tier="extra">Canada banned partially hydrogenated oils, the main source of artificial trans fat, from foods in 2018. Modern margarines are made in other ways and contain little or no trans fat.</p>

<h3 data-tier="essential">Phospholipids</h3>
<p>A <span class="term">phospholipid</span> is a <strong>glycerol backbone bound to 2 fatty acids and a highly polar phosphate group</strong>. Compare it with a triglyceride: one fatty acid has been swapped for a phosphate group (on the slide, the phosphate also carries a small charged group called choline). That one swap gives the molecule two very different ends:</p>
<ul>
  <li>a <strong>hydrophilic head</strong> (phosphate, polar and charged), which is attracted to water, and</li>
  <li>two <strong>hydrophobic tails</strong> (fatty acids, nonpolar), which avoid water. Usually one tail is saturated (straight) and one is unsaturated (kinked).</li>
</ul>
<p>A molecule with both a water-loving and a water-fearing part is called <span class="term">amphipathic</span>. Put phospholipids in water and they arrange themselves without any help: the heads face the water and the tails hide from it by pointing toward each other. The result is the <span class="term">phospholipid bilayer</span>, which <strong>forms cell membranes</strong>.</p>
<figure class="diagram">
<svg viewBox="0 0 640 312" role="img" aria-labelledby="b104-t3">
<title id="b104-t3">Left: one phospholipid. A choline group and a phosphate group form the hydrophilic head, attached to glycerol, which carries two fatty acid tails, one straight and one kinked at a cis double bond. The tails are hydrophobic. Middle: a phospholipid bilayer, heads facing the extracellular fluid on top and the cytosol below, tails pointing inward, with a protein channel crossing it. Right: the steroid nucleus, three six-sided rings and one five-sided ring fused together, containing 17 carbons.</title>
<g style="stroke:var(--line)" stroke-width="1.5"><line x1="220" y1="10" x2="220" y2="302"/><line x1="437" y1="10" x2="437" y2="302"/></g>
<g font-family="inherit" font-size="14" font-weight="700" text-anchor="middle" style="fill:var(--ink)"><text x="112" y="24">Phospholipid</text><text x="328" y="24">Phospholipid bilayer</text><text x="538" y="24">Steroid nucleus</text></g>
<g style="stroke:var(--ink-2)" stroke-width="2"><line x1="70" y1="72" x2="70" y2="78"/><line x1="70" y1="106" x2="70" y2="112"/></g>
<path d="M58,134V300 M82,134V215L108,300" style="fill:none;stroke:var(--teal)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="70" cy="58" r="14" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="1.5"/>
<circle cx="70" cy="92" r="14" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<rect x="46" y="112" width="48" height="22" rx="4" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="1.5"/>
<text x="70" y="97" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">P</text>
<g font-family="inherit" font-size="11.5" style="fill:var(--ink)"><text x="92" y="62">choline</text><text x="92" y="96">phosphate</text><text x="100" y="127">glycerol</text></g>
<text x="114" y="212" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--red)">cis C=C kink</text>
<g font-family="inherit" font-size="11.5" style="fill:var(--ink-2)"><text x="122" y="262">2 fatty acid</text><text x="122" y="276">tails</text></g>
<g style="fill:none;stroke:var(--ink-2)" stroke-width="1.5"><path d="M188,44 h6 v90 h-6"/><path d="M188,140 h6 v160 h-6"/></g>
<text x="210" y="89" text-anchor="middle" transform="rotate(-90 210 89)" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--blue)">hydrophilic head</text>
<text x="210" y="220" text-anchor="middle" transform="rotate(-90 210 220)" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--teal)">hydrophobic tails</text>
<text x="328" y="46" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">Extracellular fluid (water)</text>
<path d="M240,73V122 M256,73V100L261,122 M272,73V122 M288,73V122 M304,73V122 M352,73V122 M368,73V100L373,122 M384,73V122 M400,73V122 M416,73V122 M240,177V128 M256,177V128 M272,177V128 M288,177V150L293,128 M304,177V128 M352,177V128 M368,177V128 M384,177V128 M400,177V150L405,128 M416,177V128" style="fill:none;stroke:var(--teal)" stroke-width="2.2" stroke-linecap="round"/>
<g style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.3"><circle cx="240" cy="66" r="7"/><circle cx="256" cy="66" r="7"/><circle cx="272" cy="66" r="7"/><circle cx="288" cy="66" r="7"/><circle cx="304" cy="66" r="7"/><circle cx="352" cy="66" r="7"/><circle cx="368" cy="66" r="7"/><circle cx="384" cy="66" r="7"/><circle cx="400" cy="66" r="7"/><circle cx="416" cy="66" r="7"/><circle cx="240" cy="184" r="7"/><circle cx="256" cy="184" r="7"/><circle cx="272" cy="184" r="7"/><circle cx="288" cy="184" r="7"/><circle cx="304" cy="184" r="7"/><circle cx="352" cy="184" r="7"/><circle cx="368" cy="184" r="7"/><circle cx="384" cy="184" r="7"/><circle cx="400" cy="184" r="7"/><circle cx="416" cy="184" r="7"/></g>
<rect x="314" y="54" width="28" height="142" rx="10" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="1.5"/>
<text x="328" y="125" text-anchor="middle" transform="rotate(-90 328 125)" font-family="inherit" font-size="11" style="fill:var(--blue)">protein channel</text>
<text x="328" y="210" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">Cytosol (water)</text>
<g font-family="inherit" font-size="11.5" text-anchor="middle" style="fill:var(--ink)"><text x="328" y="238">Nonpolar interior blocks</text><text x="328" y="254">polar and ionic substances;</text><text x="328" y="270">channels let them through</text></g>
<g style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="2"><polygon points="488,126 508.8,138 508.8,162 488,174 467.2,162 467.2,138"/><polygon points="529.6,126 550.4,138 550.4,162 529.6,174 508.8,162 508.8,138"/><polygon points="550.4,90 571.2,102 571.2,126 550.4,138 529.6,126 529.6,102"/></g>
<polygon points="571.2,102 594,94.6 608.1,114 594,133.4 571.2,126" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="2"/>
<g font-family="inherit" font-size="13" font-weight="700" text-anchor="middle" style="fill:var(--ink)"><text x="488" y="155">A</text><text x="529.6" y="155">B</text><text x="550.4" y="119">C</text><text x="590" y="119">D</text></g>
<text x="538" y="206" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">17 carbons in four fused rings</text>
<text x="538" y="222" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">3 six-sided + 1 five-sided ring</text>
<g font-family="inherit" font-size="11.5" text-anchor="middle" style="fill:var(--ink)"><text x="538" y="248">cholesterol, testosterone,</text><text x="538" y="264">estrogen, cortisol, bile acids</text></g>
</svg>
<figcaption>Left: a phospholipid has a polar head and two nonpolar tails. Middle: in water, phospholipids form a bilayer with heads facing the water on both sides and tails hidden inside; protein channels let polar and ionic substances across. Right: every steroid is built on the same four-ring nucleus; side groups make the difference between, for example, testosterone and estrogen.</figcaption>
</figure>
<p>The bilayer <strong>forms two water compartments</strong>: the <strong>extracellular fluid</strong> outside the cell and the <strong>cytosol</strong> inside it. <strong>Polar and ionic materials cannot pass through, due to the nonpolar interior</strong>: a charged ion or a polar sugar would have to cross a layer of oily tails that it cannot dissolve in. <strong>Hydrophilic pores embedded in the membrane allow their passage.</strong></p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>It is mainly the <strong>larger</strong> polar and ionic materials that cannot pass. The hydrophilic pores are <strong>protein channels</strong>; for example, <strong>aquaporins</strong> allow the <strong>mass movement of water</strong>. Water can still pass slowly through the bilayer itself, and the more <strong>cis (kinked) fatty acids</strong> the phospholipids have, the more loosely they pack and the easier that movement is.</p></div>
<details class="check"><summary>A bacterium living in a cold lake changes the phospholipids in its membrane. Would you expect more saturated or more unsaturated tails? Why?</summary><div class="ans"><p><strong>More unsaturated (cis) tails.</strong> Cold makes straight, saturated tails pack tightly, so the membrane stiffens like butter in the fridge. Kinked cis tails cannot pack closely, so the membrane stays fluid and its proteins and transport keep working. This is the same reason cold-water fish have more unsaturated fats in their membranes.</p></div></details>

<h3 data-tier="essential">Steroids</h3>
<p><span class="term">Steroids</span> look nothing like the other lipids. They are built on a <strong>steroid nucleus of 17 carbon atoms arranged in four rings</strong>, fused together. They count as lipids because they are mostly C–H, so they are nonpolar and insoluble in water. Steroids include:</p>
<ul>
  <li><strong>Sex hormones</strong>, such as testosterone and estrogen.</li>
  <li><strong>Adrenal cortical hormones</strong>, made by the outer layer (cortex) of the adrenal glands, such as cortisol.</li>
  <li><strong>Bile acids</strong>, which help digest fats.</li>
  <li><strong>Cholesterol</strong>, which helps keep cell membranes stable and is the raw material for the other steroids.</li>
</ul>
<p>The slide's testosterone and estrogen share the identical four-ring nucleus and differ only in a few side groups, yet they have very different effects on the body. Small changes in functional groups (lesson 1.02) lead to big changes in function.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The four rings are <strong>three six-membered rings and one five-membered ring</strong>. Steroids' two main jobs: <strong>hormones</strong> and <strong>cell stability</strong>.</p></div>
<p data-tier="extra">Because steroid hormones are nonpolar, they can pass straight through the phospholipid bilayer and act on receptors inside the cell, unlike polar hormones such as insulin, which must bind to receptors on the cell surface. You will see this again in Unit 4: Homeostasis.</p>

<h3 data-tier="essential">Waxes</h3>
<p>A <span class="term">wax</span> is a <strong>simple lipid</strong>: an <strong>ester of a long-chain alcohol and a long-chain fatty acid</strong>. It forms the same ester linkage as a triglyceride, but with one long alcohol instead of glycerol, so there is only one fatty acid. With two long hydrocarbon chains and very little polar surface, waxes are extremely hydrophobic and are solid at room temperature.</p>
<p>Examples: <strong>earwax</strong> and the <strong>plant cuticle</strong>. The slide also shows beeswax, carnauba wax (from palm leaves) and spermaceti wax (from whales).</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Waxes are for <strong>protection and storage</strong>. The plant cuticle works because waxes are nonpolar, so they are hydrophobic and <strong>prevent water loss</strong> from leaves.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>Know the building blocks of each lipid type: <strong>triglyceride</strong> = glycerol + 3 fatty acids; <strong>phospholipid</strong> = glycerol + 2 fatty acids + phosphate; <strong>steroid</strong> = four fused rings (17 C); <strong>wax</strong> = long-chain alcohol + long-chain fatty acid. Triglycerides and waxes both contain <strong>ester linkages</strong>.</p></div>

<h3 data-tier="likely">Chain length and polarity</h3>
<p>Every fatty acid has the same small polar end (the carboxyl group) and a nonpolar tail of varying length. The longer the tail, the more the nonpolar part dominates.</p>
<details class="check"><summary>Review question 3: How does chain length affect the polarity of the lipid?</summary><div class="ans"><p>As chain length increases, the proportion of the molecule that is nonpolar grows significantly, so the molecule becomes <strong>more hydrophobic (less polar)</strong> overall. <strong>Longer chains are much less soluble in water</strong> than shorter chains because the nonpolar tail dominates the molecule's chemical behaviour.</p></div></details>
<p data-tier="extra">You can see this in everyday chemistry: a 2-carbon acid (acetic acid, in vinegar) mixes completely with water, a 4-carbon fatty acid (butyric acid, in butter) still dissolves fairly well, and an 18-carbon fatty acid such as stearic acid is essentially insoluble.</p>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
  <li>Lipids have a high proportion of H and many nonpolar C–H bonds, with few polar O–H bonds, so they are nonpolar: soluble in nonpolar solvents, insoluble in water.</li>
  <li>Functions: long-term energy storage (9 kcal/g vs 4 kcal/g for carbohydrate), insulation, cell membranes, cell signalling, and coordination and regulation (hormones); also cushioning and absorbing vitamins A, D, E and K.</li>
  <li>Four types: triglycerides (energy), phospholipids (membranes), steroids (hormones, cell stability), waxes (protection).</li>
  <li>Triglyceride = glycerol (3 C, 3 –OH) + 3 fatty acids (long hydrocarbon chain + carboxyl), joined by esterification, a condensation that forms 3 ester linkages and releases 3 H<sub>2</sub>O. Not a polymer.</li>
  <li>Saturated = all single C–C bonds, straight, packs tightly, solid (animal fats). Unsaturated = one (mono) or more (poly) C=C. Cis (H same side) kinks the chain, so it stays liquid (oils); trans (H opposite sides) stays straight and acts like saturated fat.</li>
  <li>Phospholipid = glycerol + 2 fatty acids + polar phosphate: hydrophilic head, hydrophobic tails. In water they form the bilayer that separates extracellular fluid from cytosol; polar and ionic substances need protein channels to cross.</li>
  <li>Steroids: 17 carbons in four fused rings (three 6-sided, one 5-sided): sex hormones, adrenal cortical hormones, bile acids, cholesterol.</li>
  <li>Waxes: ester of a long-chain alcohol and a long-chain fatty acid (earwax, plant cuticle); hydrophobic, so they protect and prevent water loss.</li>
</ul>
`
});
