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
<text x="227" y="126">unequal sharing →</text><text x="227" y="141">partial charges (δ+, δ−)</text>
<text x="464" y="126">electron transferred →</text><text x="464" y="141">full charges (ions)</text>
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
@@CONT101@@
<h3 data-tier="essential">Lesson summary</h3>
`
});
/* @@NEXT@@ */
