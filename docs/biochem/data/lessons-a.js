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
<text x="186" y="312" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">glycerol</text>
<text x="238" y="312" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">+ 3 fatty acids</text>
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
<marker id="b102-m2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--teal)"/></marker>
<marker id="b102-m3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--magenta)"/></marker>
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
/* @@NEXT@@ */
