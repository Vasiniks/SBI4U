/* SBI4U Unit 1 Biochemistry: "Beyond the slides" topics.
   lesson = "1.01".."1.11"; tier = "likely" (probably said in class / tested as application) or "extra" (depth past the slides). */
window.EXTRA = window.EXTRA || [];

window.EXTRA.push({
  id: "e-isotopes",
  title: "Isotopes and radioisotopes in research and medicine",
  lesson: "1.01",
  tier: "likely",
  why: "The slides mention carbon-14 tracers and ask you to research iodine as a cancer treatment; this gives you the background to answer both fully.",
  html: `
<h3>Same element, different mass</h3>
<p>Every atom of an element has the same number of protons. This is its <span class="term">atomic number</span> (Z). The number of neutrons can vary. Atoms of the same element with different numbers of neutrons are <span class="term">isotopes</span>. In standard atomic notation the <span class="term">mass number</span> (A = protons + neutrons) is written at the top left of the symbol and Z at the bottom left. <sup>12</sup><sub>6</sub>C, <sup>13</sup><sub>6</sub>C and <sup>14</sup><sub>6</sub>C all have 6 protons, but they have 6, 7 and 8 neutrons.</p>
<p>Isotopes have the same number of protons and electrons, so they form the same bonds and react the same way. A cell cannot tell <sup>14</sup>C from <sup>12</sup>C. That is why isotopes are useful: a "labelled" molecule is treated normally by the cell, but you can detect where the label ends up.</p>

<div class="callout warn"><p class="callout-title">Common mistake</p><p>Changing the number of <strong>neutrons</strong> gives an isotope (same element, different mass). Changing the number of <strong>protons</strong> gives a different element. Gaining or losing <strong>electrons</strong> gives an ion. Do not mix these up.</p></div>

<h3>Radioisotopes and half-life</h3>
<p>A <span class="term">radioisotope</span> has an unstable nucleus. It decays on its own and gives off radiation (alpha particles, beta particles or gamma rays), often turning into a different element. For example, <sup>14</sup>C decays into <sup>14</sup>N. <span class="term">Stable isotopes</span> such as <sup>13</sup>C, <sup>15</sup>N and <sup>18</sup>O never decay. Scientists detect them by their extra mass instead.</p>
<p>The <span class="term">half-life</span> is the time it takes for half of the radioactive atoms in a sample to decay. Each isotope has its own half-life, and temperature, pH and chemical bonding do not change it.</p>
<div class="eq">amount left = starting amount × (1/2)<sup>n</sup>, where n = time passed ÷ half-life</div>
<div class="table-wrap"><table class="data">
<thead><tr><th>Isotope</th><th>Half-life (approx.)</th><th>Typical use</th></tr></thead>
<tbody>
<tr><td><sup>14</sup>C</td><td>5730 years</td><td>Tracer for carbon in metabolism; radiocarbon dating of once-living material up to about 50 000 years old</td></tr>
<tr><td><sup>32</sup>P</td><td>14 days</td><td>Labels the phosphate groups in DNA, RNA and ATP</td></tr>
<tr><td><sup>35</sup>S</td><td>87 days</td><td>Labels proteins (sulfur in the amino acids cysteine and methionine)</td></tr>
<tr><td><sup>131</sup>I</td><td>8 days</td><td>Thyroid imaging and treatment</td></tr>
<tr><td><sup>18</sup>F</td><td>110 minutes</td><td>PET scans</td></tr>
</tbody></table></div>

<h3>Tracers in famous biology experiments</h3>
<ul>
<li><strong>Mapping photosynthesis:</strong> Melvin Calvin's team fed algae <sup>14</sup>CO<sub>2</sub> for a few seconds at a time and identified which compounds became radioactive first. This mapped the Calvin cycle step by step.</li>
<li><strong>DNA is the genetic material (1952):</strong> Hershey and Chase labelled virus DNA with <sup>32</sup>P and virus protein with <sup>35</sup>S. Only the <sup>32</sup>P entered the infected bacteria, so DNA carries the instructions. The trick works because DNA contains phosphorus but no sulfur, while proteins contain sulfur but almost no phosphorus.</li>
<li><strong>How DNA copies itself (1958):</strong> Meselson and Stahl used heavy <sup>15</sup>N to show that DNA replication is semi-conservative (see the DNA replication topic).</li>
</ul>

<h3>Radioisotopes in medicine</h3>
<p><strong>Radioactive iodine (the slide's research question).</strong> The thyroid gland actively pulls iodide ions out of the blood, because it needs iodine to make the hormones thyroxine (T<sub>4</sub>) and T<sub>3</sub>. No other tissue concentrates iodine nearly as much. When a patient swallows <sup>131</sup>I, it collects in thyroid tissue, including thyroid cancer cells that have spread elsewhere in the body. Its beta particles travel only a couple of millimetres in tissue, so they destroy those cells while doing little damage to the rest of the body. With an 8-day half-life, the radiation fades within weeks. The same treatment is used for an overactive thyroid (hyperthyroidism).</p>
<p><strong>PET scans.</strong> Fluorine-18 is attached to a glucose look-alike called fluorodeoxyglucose (FDG). Cells take it in through their glucose transporters. Very active tissues, such as the brain and many tumours, take in the most, so they show up brightly on the scan.</p>

<div class="callout key"><p class="callout-title">On the test</p><p>To compare a stable isotope with a radioisotope, say: both have the same number of protons but different numbers of neutrons. A stable isotope's nucleus does not change over time. A radioisotope's nucleus is unstable, so it decays spontaneously and emits radiation. Then give one use for each.</p></div>

<details class="check"><summary>A hospital receives 80 mg of iodine-131 (half-life 8 days). How much is left after 24 days?</summary><div class="ans"><p>24 ÷ 8 = 3 half-lives. 80 mg → 40 mg → 20 mg → <strong>10 mg</strong>. As a formula: 80 × (1/2)<sup>3</sup> = 10 mg.</p></div></details>
<details class="check"><summary>Why can a biologist trust that <sup>14</sup>C-labelled glucose is used by a cell exactly like normal glucose?</summary><div class="ans"><p>Isotopes have the same number of protons and electrons, so they form the same bonds and behave identically in chemical reactions. Enzymes recognize the molecule by its shape and bonds, which are unchanged. Only the nucleus is different, and its radiation lets you detect where the carbon goes (for example, into CO<sub>2</sub> released during respiration).</p></div></details>
`
});

window.EXTRA.push({
  id: "e-ph-buffers",
  title: "pH math and the bicarbonate buffer in blood",
  lesson: "1.01",
  tier: "likely",
  why: "The slides give the bicarbonate equation and the 7.35 to 7.45 blood pH range; this explains the numbers on the pH scale and how the lungs and kidneys work with the buffer.",
  html: `
<h3>What pH measures</h3>
<p><span class="term">pH</span> measures the concentration of hydrogen ions, [H<sup>+</sup>], in mol/L:</p>
<div class="eq">pH = −log[H<sup>+</sup>]</div>
<p>Because pH is a logarithm, each change of 1 pH unit is a <strong>10-fold</strong> change in [H<sup>+</sup>]. A <em>lower</em> pH means <em>more</em> H<sup>+</sup>. At pH 7, [H<sup>+</sup>] = 1 × 10<sup>−7</sup> mol/L. At pH 4 it is 1 × 10<sup>−4</sup> mol/L, which is 1000 times more.</p>
<p>Water splits very slightly into ions: H<sub>2</sub>O ⇌ H<sup>+</sup> + OH<sup>−</sup>. In pure water [H<sup>+</sup>] = [OH<sup>−</sup>], so it is neutral. An <span class="term">acid</span> releases H<sup>+</sup> (it is a proton donor). A <span class="term">base</span> accepts H<sup>+</sup>, or releases OH<sup>−</sup> that removes H<sup>+</sup>.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Location</th><th>Typical pH</th></tr></thead>
<tbody>
<tr><td>Stomach (gastric juice)</td><td>about 1.5 to 3.5</td></tr>
<tr><td>Inside a lysosome</td><td>about 4.5 to 5</td></tr>
<tr><td>Cytosol</td><td>about 7.2</td></tr>
<tr><td>Blood</td><td>7.35 to 7.45</td></tr>
<tr><td>Pancreatic juice</td><td>about 8</td></tr>
</tbody></table></div>

<h3>How a buffer works</h3>
<p>A <span class="term">buffer</span> is a weak acid paired with its matching base. It resists pH change by taking up H<sup>+</sup> when there is too much and releasing H<sup>+</sup> when there is too little. In blood the pair is carbonic acid (H<sub>2</sub>CO<sub>3</sub>) and the bicarbonate ion (HCO<sub>3</sub><sup>−</sup>):</p>
<div class="eq">CO<sub>2</sub> + H<sub>2</sub>O ⇌ H<sub>2</sub>CO<sub>3</sub> ⇌ H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup></div>
<ul>
<li><strong>Acid added</strong> (for example, lactic acid during hard exercise): the extra H<sup>+</sup> combines with HCO<sub>3</sub><sup>−</sup> to form H<sub>2</sub>CO<sub>3</sub>, which breaks down into CO<sub>2</sub> + H<sub>2</sub>O. The reaction shifts <em>left</em>, the H<sup>+</sup> is soaked up, and pH barely drops.</li>
<li><strong>Base added</strong> (H<sup>+</sup> removed): H<sub>2</sub>CO<sub>3</sub> breaks apart to release more H<sup>+</sup>. The reaction shifts <em>right</em> and replaces the lost H<sup>+</sup>.</li>
</ul>
<p>The enzyme <span class="term">carbonic anhydrase</span> in red blood cells makes CO<sub>2</sub> + H<sub>2</sub>O ⇌ H<sub>2</sub>CO<sub>3</sub> happen extremely fast, so the buffer responds almost instantly.</p>

<h3>The lungs and kidneys finish the job</h3>
<p>A buffer can only absorb so much. The bicarbonate system is powerful because the body can adjust both ends of the equation:</p>
<ul>
<li><strong>Lungs (fast, within minutes):</strong> breathing out CO<sub>2</sub> pulls the equilibrium to the left, which removes H<sup>+</sup>. When blood becomes too acidic, the brain makes you breathe faster and deeper. Slow, shallow breathing lets CO<sub>2</sub> build up, so pH falls.</li>
<li><strong>Kidneys (slow, hours to days):</strong> they pump H<sup>+</sup> into the urine and return HCO<sub>3</sub><sup>−</sup> to the blood.</li>
</ul>
<p>Blood pH below 7.35 is <span class="term">acidosis</span> (for example, from lung disease or uncontrolled diabetes). Above 7.45 is <span class="term">alkalosis</span> (for example, from hyperventilating during a panic attack). As the slides say, below about 7.0 or above about 7.8 can be fatal.</p>

<div class="callout tip"><p class="callout-title">Memory trick</p><p>Think of CO<sub>2</sub> as "acid in disguise." More CO<sub>2</sub> in the blood means more H<sup>+</sup> and a lower pH. Blowing off CO<sub>2</sub> means less H<sup>+</sup> and a higher pH.</p></div>

<h3>Why the body cares: proteins</h3>
<p>pH changes the charges on proteins. At low pH, amino groups pick up H<sup>+</sup> (–NH<sub>2</sub> becomes –NH<sub>3</sub><sup>+</sup>) and carboxylate groups gain H<sup>+</sup> (–COO<sup>−</sup> becomes –COOH). These charges form the ionic bonds and hydrogen bonds that hold a protein's 3D shape. A pH shift can therefore change the shape of enzymes and stop them from working. This is the idea behind the slide question on hemoglobin: a slightly lower pH changes hemoglobin's shape so it releases O<sub>2</sub> more easily, which helps active muscles that are producing acid.</p>

<details class="check"><summary>Gastric juice has a pH of 2 and pure water has a pH of 7. How many times more H<sup>+</sup> does gastric juice contain?</summary><div class="ans"><p>The difference is 5 pH units, and each unit is a factor of 10. So 10<sup>5</sup> = <strong>100 000 times</strong> more H<sup>+</sup>.</p></div></details>
<details class="check"><summary>During a panic attack a person hyperventilates. Predict the change in blood pH and explain it with the bicarbonate equation.</summary><div class="ans"><p>Fast breathing removes CO<sub>2</sub> from the blood. The equilibrium shifts left to replace it: H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup> → H<sub>2</sub>CO<sub>3</sub> → CO<sub>2</sub> + H<sub>2</sub>O. This uses up H<sup>+</sup>, so [H<sup>+</sup>] falls and blood pH <strong>rises</strong> (alkalosis), which can cause dizziness and tingling.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-hydrophobic-effect",
  title: "The hydrophobic effect: why oil and water separate",
  lesson: "1.01",
  tier: "extra",
  why: "One idea from the water lesson explains why membranes form by themselves, why proteins fold with a nonpolar core and why soap removes grease.",
  html: `
<h3>Oil and water do not really "repel"</h3>
<p>It is tempting to say that water pushes hydrophobic molecules away. In fact, there is a weak attraction (London dispersion forces) between water and oil. The real reason they separate is that water molecules attract <em>each other</em> much more strongly, through hydrogen bonds.</p>
<p>When a nonpolar molecule sits in water, the water molecules touching it cannot hydrogen bond with it. To keep as many hydrogen bonds as possible, they line up into an ordered "cage" around the nonpolar surface. Ordered water has less freedom to move, which is unfavourable. If the nonpolar molecules clump together, less nonpolar surface touches water, fewer water molecules are trapped in cages, and the water becomes freer. This drive for nonpolar substances to cluster in water is the <span class="term">hydrophobic effect</span>. The resulting associations between nonpolar groups are often called <span class="term">hydrophobic interactions</span>.</p>

<div class="callout key"><p class="callout-title">On the test</p><p>Hydrophobic interactions are not a special bond. Nonpolar groups end up together because water "squeezes" them out to keep its own hydrogen bonds. If you are asked why lipids are insoluble in water, mention that water cannot form hydrogen bonds with nonpolar C–H regions.</p></div>

<h3>Amphipathic molecules assemble themselves</h3>
<p>A molecule with a polar (hydrophilic) part and a nonpolar (hydrophobic) part is <span class="term">amphipathic</span>. Phospholipids, soaps, detergents and bile salts are all amphipathic. In water they arrange themselves with no energy input:</p>
<ul>
<li><strong>Micelles:</strong> molecules with a single tail, such as soap or a free fatty acid, are cone-shaped. They pack into small spheres with the tails in the centre and the heads facing the water. Soap traps grease inside micelles so it can be rinsed away. Bile salts do the same with dietary fat in the small intestine, which gives lipase more surface to work on.</li>
<li><strong>Bilayers:</strong> phospholipids have two tails, so they are roughly cylinder-shaped. They pack side by side into a double layer, with tails hidden inside and heads facing water on both sides. A flat sheet would still have exposed edges, so it curves and closes into a hollow sphere. Scientists use this to make <span class="term">liposomes</span>, tiny lipid bubbles that carry drugs into cells.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Phospholipids spontaneously arrange themselves into a sphere. The hydrophobic effect is the reason: closing into a sphere hides every tail from water, including the ones that would be exposed at the edges of a flat sheet.</p></div>
<p>The same effect makes membranes <strong>self-sealing</strong>. If a membrane is punctured, the tails exposed at the edges of the hole are unfavourable, so the lipids flow back together and close the gap.</p>

<h3>Proteins and DNA fold the same way</h3>
<ul>
<li><strong>Water-soluble proteins:</strong> amino acids with nonpolar R groups (such as valine, leucine and phenylalanine) are buried in the core, while polar and charged R groups face the water outside. This is a major force behind tertiary structure. When a protein is denatured, its hydrophobic core is exposed and the unfolded chains stick to each other and clump. That is why cooked egg white turns solid and white.</li>
<li><strong>Membrane proteins:</strong> the section that crosses the bilayer has nonpolar R groups on its outside, facing the fatty acid tails.</li>
<li><strong>DNA:</strong> the flat bases stack in the middle of the double helix, away from water, while the charged sugar-phosphate backbone faces outward.</li>
</ul>

<details class="check"><summary>Predict which kind of R groups are found in the part of an integral membrane protein that passes through the bilayer.</summary><div class="ans"><p>Mostly <strong>nonpolar (hydrophobic)</strong> R groups, such as leucine and valine. They interact with the nonpolar fatty acid tails in the middle of the bilayer. Polar or charged R groups there would be unfavourable, because there is no water to interact with them.</p></div></details>
<details class="check"><summary>Soap (one tail) forms micelles, but phospholipids (two tails) form bilayers. Why the difference?</summary><div class="ans"><p>Shape. A single-tailed molecule is cone-shaped, so many of them fit together into a small sphere with all the tails in the centre. Two tails make a phospholipid roughly cylinder-shaped and too bulky to fit into a micelle's core, so phospholipids pack side by side into sheets and form a bilayer. Both are driven by the hydrophobic effect.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-isomers",
  title: "Isomers: structural, cis-trans and mirror-image",
  lesson: "1.03",
  tier: "likely",
  why: "The slides define isomers with glucose, galactose and fructose and use cis and trans for fats; this sorts isomers into their three types and shows why the difference matters to enzymes.",
  html: `
<h3>Same formula, different molecule</h3>
<p><span class="term">Isomers</span> have the same molecular formula but a different arrangement of atoms. Glucose, galactose and fructose are all C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, yet they are different sugars. A different arrangement means a different shape, and enzymes and receptors recognize molecules by shape. There are three main kinds of isomer.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Type</th><th>What is different</th><th>Biology example</th></tr></thead>
<tbody>
<tr><td>Structural isomers</td><td>Atoms are bonded in a different order</td><td>Glucose vs fructose</td></tr>
<tr><td>Geometric (cis-trans) isomers</td><td>Same bonds, but groups sit on the same side or opposite sides of a C=C double bond or a ring</td><td>Cis vs trans fatty acids; α vs β glucose</td></tr>
<tr><td>Enantiomers (optical isomers)</td><td>Mirror images that cannot be stacked on top of each other</td><td>L- vs D-amino acids</td></tr>
</tbody></table></div>

<h3>Structural isomers: glucose vs fructose</h3>
<p>In glucose the carbonyl group (C=O) is at the end of the chain, on carbon 1, so glucose is an <span class="term">aldose</span> (an aldehyde sugar). In fructose the carbonyl is on carbon 2, inside the chain, so fructose is a <span class="term">ketose</span> (a ketone sugar). This connects to the functional groups lesson: an aldehyde carbonyl is at the end of a chain, and a ketone carbonyl is in the middle. In water, glucose closes into a six-membered ring and fructose into a five-membered ring.</p>

<h3>Geometric isomers: cis and trans</h3>
<p>A C=C double bond cannot rotate. Groups attached to it are locked either on the same side (<em>cis</em>) or on opposite sides (<em>trans</em>). A cis fatty acid has a kink, so its molecules cannot pack tightly, and oils stay liquid. A trans fatty acid is nearly straight, so it packs like a saturated fat and is solid at room temperature.</p>
<p>Rings cannot rotate freely either, which is why α and β glucose are different molecules. In α glucose, the –OH on carbon 1 points down, on the opposite side of the ring from carbon 6. In β glucose it points up, on the same side as carbon 6. (Chemists call this particular pair <em>anomers</em>.) This one flip has a huge effect:</p>
<ul>
<li>Starch and glycogen are made of α glucose. Your amylase fits α linkages, so you can digest them.</li>
<li>Cellulose is made of β glucose. Every second glucose is flipped, giving straight chains that hydrogen bond into strong fibres. Human enzymes do not fit β linkages, so cellulose becomes fibre.</li>
<li>Galactose differs from glucose only in the direction of the –OH on carbon 4. Your body still needs separate enzymes to convert galactose into glucose.</li>
</ul>

<h3>Enantiomers: mirror-image molecules</h3>
<p>A carbon bonded to four <em>different</em> groups is a <span class="term">chiral carbon</span>. A molecule with one has two forms that are mirror images and cannot be superimposed, just like your left and right hands. These are <span class="term">enantiomers</span>. They have the same melting point and solubility, but they fit differently into binding sites that are themselves "handed."</p>
<ul>
<li>Every amino acid except glycine has a chiral central carbon (bonded to H, –NH<sub>2</sub>, –COOH and R). Living things build proteins almost entirely from <strong>L</strong>-amino acids.</li>
<li>The sugars used by living things are almost all <strong>D</strong>-sugars, such as D-glucose.</li>
<li>Active sites are built from L-amino acids, so they are handed too. Usually only one enantiomer fits, like a right hand in a right glove.</li>
<li>Your nose can tell enantiomers apart: one form of the molecule carvone smells like spearmint and its mirror image smells like caraway (rye bread).</li>
<li>Drugs: one enantiomer may work while the other does nothing or causes harm. One form of thalidomide, a 1950s morning-sickness drug, was linked to severe birth defects.</li>
</ul>

<div class="callout warn"><p class="callout-title">Common mistake</p><p>Isomers share a formula, so C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> alone cannot explain why glucose and fructose behave differently. Always point to the arrangement: where the carbonyl is, the size of the ring, or the direction of an –OH group.</p></div>

<details class="check"><summary>Classify each pair: (a) glucose and fructose; (b) α glucose and β glucose; (c) L-alanine and D-alanine.</summary><div class="ans"><p>(a) <strong>Structural isomers</strong>: the carbonyl is on carbon 1 in glucose and carbon 2 in fructose. (b) <strong>Geometric (cis-trans type) isomers</strong>: the same bonds, but the –OH on carbon 1 is on opposite sides of the ring. (c) <strong>Enantiomers</strong>: non-superimposable mirror images around the chiral central carbon.</p></div></details>
<details class="check"><summary>Why does glycine have no enantiomers?</summary><div class="ans"><p>Glycine's R group is just a hydrogen atom, so its central carbon is bonded to two identical H atoms. It does not have four different groups, so it is not chiral, and its mirror image can be placed exactly on top of the original.</p></div></details>
`
});

/* @@NEXT@@ */
