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

window.EXTRA.push({
  id: "e-glycemic",
  title: "Blood sugar, the glycemic index and fibre",
  lesson: "1.03",
  tier: "extra",
  why: "Connects carbohydrate structure (mono vs poly, branching, β linkages) to what happens to your blood glucose after a meal and why fibre matters.",
  html: `
<h3>Keeping blood glucose steady</h3>
<p>Your brain alone uses about 120 g of glucose a day, so blood glucose must stay within a narrow range. In a healthy person it is about 4 to 6 mmol/L before eating and usually below about 8 mmol/L after a meal. (Canada measures blood sugar in mmol/L.) Two hormones from the pancreas control it by <span class="term">negative feedback</span>:</p>
<ul>
<li><strong>Glucose high (after a meal):</strong> beta cells release <span class="term">insulin</span>. Muscle and fat cells take in more glucose, and the liver and muscles link glucose into glycogen by dehydration synthesis.</li>
<li><strong>Glucose low (between meals):</strong> alpha cells release <span class="term">glucagon</span>. The liver hydrolyzes glycogen into glucose and releases it into the blood.</li>
</ul>
<p>Insulin was discovered at the University of Toronto in 1921 by Frederick Banting and Charles Best, working with J.J.R. Macleod and James Collip. In <strong>type 1 diabetes</strong> the immune system destroys the beta cells, so no insulin is made. In <strong>type 2 diabetes</strong> cells respond poorly to insulin (insulin resistance).</p>

<h3>The glycemic index</h3>
<p>The <span class="term">glycemic index (GI)</span> ranks carbohydrate foods by how quickly they raise blood glucose, compared with pure glucose (GI = 100). Low GI is 55 or less, medium is 56 to 69, and high is 70 or more.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Food</th><th>Approximate GI</th></tr></thead>
<tbody>
<tr><td>Glucose</td><td>100</td></tr>
<tr><td>Corn flakes</td><td>80</td></tr>
<tr><td>White bread</td><td>75</td></tr>
<tr><td>Table sugar (sucrose)</td><td>65</td></tr>
<tr><td>Rolled-oat porridge</td><td>55</td></tr>
<tr><td>Apple</td><td>36</td></tr>
<tr><td>Lentils</td><td>30</td></tr>
<tr><td>Fructose</td><td>about 20</td></tr>
</tbody></table></div>
<p>Carbohydrate structure explains most of these numbers:</p>
<ul>
<li><strong>Size:</strong> glucose is absorbed directly. Starch must first be hydrolyzed by amylase into maltose and then glucose.</li>
<li><strong>Branching:</strong> amylopectin (branched with α-1,6 linkages) has many chain ends for enzymes to attack at once, so it is digested faster than amylose (an unbranched helix). This matches the class idea that branched polysaccharides are open and easy to access for quick energy.</li>
<li><strong>Processing and cooking:</strong> finely milled flour has a huge surface area, and cooking swells and loosens starch granules, so enzymes reach the starch faster.</li>
<li><strong>Fibre, fat and protein</strong> in the same meal slow stomach emptying and digestion, which lowers GI.</li>
<li><strong>Fructose</strong> has a low GI because it is a different sugar. The liver must convert it before it can affect blood glucose. Sucrose is half fructose, so its GI is lower than glucose's.</li>
</ul>

<h3>Fibre: carbohydrate you cannot digest</h3>
<p>Fibre is mostly polysaccharides (such as cellulose and pectin) that human enzymes cannot hydrolyze. Since the glucose in cellulose is never released, fibre does not raise blood glucose.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>There are two kinds of fibre. <strong>Soluble fibre</strong> holds water and slows digestion. <strong>Insoluble fibre</strong> acts like a broom: it adds bulk and makes the contractions of the gut more effective.</p></div>
<ul>
<li><strong>Soluble fibre</strong> (oats, barley, beans, apples) forms a gel. This slows the digestion and absorption of sugars. It also binds bile acids in the gut, so the liver uses up more cholesterol to make new bile, which lowers blood LDL cholesterol.</li>
<li><strong>Insoluble fibre</strong> (wheat bran, vegetable skins) does not dissolve. It holds water and adds bulk, so food moves through more quickly.</li>
<li>Bacteria in the large intestine ferment some fibre into small fatty acids that feed the cells lining the colon.</li>
</ul>
<p>Many Canadians eat only about half of the recommended fibre, which is roughly 25 g a day for adult women and 38 g a day for adult men.</p>

<details class="check"><summary>Explain why oatmeal has a lower glycemic index than white bread, even though both are mostly starch.</summary><div class="ans"><p>White bread is made of finely milled flour with little fibre, and baking has loosened its starch, so amylase hydrolyzes it to glucose quickly. Oats contain soluble fibre that forms a gel, which slows digestion and glucose absorption. Rolled oats are also larger pieces with less surface area for enzymes to act on.</p></div></details>
<details class="check"><summary>A person with type 1 diabetes forgets their insulin and eats a high-GI meal. Predict what happens to their blood glucose and why.</summary><div class="ans"><p>The starch is digested and glucose is absorbed quickly. Without insulin, muscle and fat cells take in little glucose and the liver does not store it as glycogen. Blood glucose therefore rises very high (hyperglycemia) and stays high.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-cholesterol",
  title: "Cholesterol, LDL, HDL and atherosclerosis",
  lesson: "1.04",
  tier: "likely",
  why: "The lipid answer key links trans fats to heart disease; this explains how cholesterol travels in blood and how plaques form, using ideas from lipids, transport and enzymes.",
  html: `
<h3>Cholesterol is essential</h3>
<p>Cholesterol is a <span class="term">steroid</span>: four fused carbon rings (three six-carbon rings and one five-carbon ring) with a short hydrocarbon tail and a single –OH group. The –OH is its only polar part. In a membrane, the –OH sits near the phosphate heads and the rings sit among the fatty acid tails. Your body uses cholesterol to:</p>
<ul>
<li>buffer membrane fluidity (see lesson 1.09);</li>
<li>make steroid hormones such as testosterone, estrogen and cortisol;</li>
<li>make bile acids, which help digest fats;</li>
<li>make vitamin D in the skin when sunlight hits it.</li>
</ul>
<p>Your liver makes most of your body's cholesterol. The rest comes from animal foods. Plants do not make cholesterol, so a "cholesterol-free" label on vegetable oil tells you nothing new.</p>

<h3>Moving lipids through watery blood: lipoproteins</h3>
<p>Cholesterol and triglycerides are nonpolar, so they cannot dissolve in blood plasma. They travel inside <span class="term">lipoproteins</span>. A lipoprotein is a tiny ball with a single layer of phospholipids (heads facing out) and proteins on its surface. Triglycerides and cholesterol are packed into the nonpolar core. Lipoproteins are named by density: the more protein compared with lipid, the denser the particle.</p>
<div class="compare">
<div><h4>LDL (low-density lipoprotein)</h4><p>Carries cholesterol <strong>from the liver to body cells</strong>. Cells take it in by <span class="term">receptor-mediated endocytosis</span>: LDL receptors on the membrane bind LDL and the membrane folds inward to form a vesicle. When there is too much LDL in the blood, it builds up in artery walls. This is "bad cholesterol."</p></div>
<div><h4>HDL (high-density lipoprotein)</h4><p>Collects extra cholesterol from tissues and artery walls and carries it <strong>back to the liver</strong>, which can turn it into bile. This is "good cholesterol."</p></div>
</div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>LDL and HDL are not two kinds of cholesterol. They are carrier particles, and the cholesterol molecule inside both is the same. "Good" and "bad" describe which direction they move it.</p></div>

<h3>How atherosclerosis develops</h3>
<ol class="steps">
<li><p class="step-head">Damage</p><p>The inner lining of an artery is damaged, for example by high blood pressure, smoking or high blood sugar.</p></li>
<li><p class="step-head">LDL is trapped</p><p>LDL particles slip into the artery wall and become chemically altered (oxidized).</p></li>
<li><p class="step-head">Foam cells</p><p>White blood cells called macrophages engulf the altered LDL by phagocytosis and fill up with fat droplets.</p></li>
<li><p class="step-head">Plaque</p><p>Fat, cells and scar tissue build up into a <span class="term">plaque</span> that narrows and stiffens the artery.</p></li>
<li><p class="step-head">Rupture and clot</p><p>If a plaque cracks, a blood clot forms on it. A clot that blocks a heart (coronary) artery causes a heart attack. One that cuts off blood to part of the brain causes a stroke.</p></li>
</ol>

<h3>Diet, genes and drugs</h3>
<ul>
<li><strong>Saturated fats</strong> raise LDL. <strong>Trans fats</strong> raise LDL <em>and</em> lower HDL. Canada banned partially hydrogenated oils, the main source of artificial trans fats, from foods in 2018.</li>
<li>Replacing these with unsaturated fats (olive and canola oil, nuts, fish) and eating soluble fibre lowers LDL.</li>
<li><strong>Familial hypercholesterolemia</strong> is an inherited defect in the LDL receptor. Cells cannot remove LDL from the blood, so LDL is very high from childhood. Studying it showed scientists how receptor-mediated endocytosis works (Nobel Prize, 1985).</li>
<li><strong>Statins</strong> are <span class="term">competitive inhibitors</span> of HMG-CoA reductase, a key enzyme in the liver's cholesterol-making pathway. The liver makes less cholesterol, so it builds more LDL receptors and pulls more LDL out of the blood.</li>
</ul>

<details class="check"><summary>Why must cholesterol travel in lipoproteins, and how is a lipoprotein arranged?</summary><div class="ans"><p>Cholesterol is almost entirely nonpolar, so it cannot dissolve in water-based plasma. A lipoprotein has phospholipid heads and proteins facing the watery plasma, and a nonpolar core where triglycerides and cholesterol are packed away from water.</p></div></details>
<details class="check"><summary>A person's LDL receptors do not work. Predict their blood LDL level and their heart disease risk.</summary><div class="ans"><p>Cells cannot take up LDL by receptor-mediated endocytosis, so LDL stays in the blood and its level is very <strong>high</strong>. More LDL enters artery walls, which leads to early plaque buildup and a high risk of heart attack and stroke.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-dna-replication",
  title: "DNA replication preview and PCR",
  lesson: "1.05",
  tier: "extra",
  why: "Shows why base pairing and antiparallel strands matter: they are what let DNA be copied, both in cells and in the PCR machines used for COVID tests and forensics.",
  html: `
<h3>Structure makes copying possible</h3>
<p>When Watson and Crick published the double helix in 1953, they noted that the base pairing "immediately suggests a possible copying mechanism." Because bases pair by Chargaff's rule (A with T, G with C), each strand is a template for the other. If one strand reads 5'-ATGC-3', its new partner must read 3'-TACG-5'.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>A good "structure fits function" answer: the hydrogen bonds between bases are weak, so the two strands separate easily for copying, while the phosphodiester bonds in each backbone are strong covalent bonds, so each strand stays intact as a template.</p></div>

<h3>Semi-conservative replication</h3>
<p>DNA replication is <span class="term">semi-conservative</span>: each new DNA molecule contains one original (parent) strand and one newly built strand. Meselson and Stahl showed this in 1958. They grew bacteria on heavy nitrogen (<sup>15</sup>N), then moved them to normal <sup>14</sup>N. After one generation all the DNA had a density halfway between heavy and light. After two generations, half was intermediate and half was light. This is exactly what the semi-conservative model predicts.</p>

<h3>The main enzymes (a preview of Unit 3)</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Enzyme</th><th>Job</th></tr></thead>
<tbody>
<tr><td>Helicase</td><td>Unwinds the double helix by breaking the hydrogen bonds between base pairs</td></tr>
<tr><td>Primase</td><td>Builds a short RNA primer that gives DNA polymerase a starting point</td></tr>
<tr><td>DNA polymerase III</td><td>Adds complementary nucleotides; it can only add to a 3' end, so new DNA always grows 5' → 3'</td></tr>
<tr><td>DNA polymerase I</td><td>Removes the RNA primers and fills the gaps with DNA</td></tr>
<tr><td>DNA ligase</td><td>Seals fragments together by forming the final phosphodiester bond</td></tr>
</tbody></table></div>
<p>Because the strands are antiparallel and polymerase only builds 5' → 3', one new strand (the <em>leading strand</em>) is made continuously. The other (the <em>lagging strand</em>) is made in short pieces called Okazaki fragments, which ligase joins together.</p>
<p>New nucleotides arrive as triphosphates (dATP, dGTP, dCTP, dTTP), much like ATP. Breaking off two of the phosphates releases the energy that forms each phosphodiester bond. This is one link between DNA and ATP from the slide questions. DNA polymerase also proofreads its work. After proofreading and repair, only about one error remains per billion bases copied.</p>

<h3>PCR: DNA replication in a tube</h3>
<p>The <span class="term">polymerase chain reaction (PCR)</span> copies one chosen section of DNA billions of times in a few hours. It uses heat instead of helicase. The tube contains the template DNA, two <strong>primers</strong> (short pieces of DNA that match the two ends of the target section), the four nucleotides, a heat-tolerant DNA polymerase and Mg<sup>2+</sup> ions, a <span class="term">cofactor</span> the polymerase needs.</p>
<ol class="steps">
<li><p class="step-head">Denature (about 95 °C)</p><p>The hydrogen bonds between bases break and the two strands separate.</p></li>
<li><p class="step-head">Anneal (about 55 °C)</p><p>On cooling, the primers base-pair to each end of the target section.</p></li>
<li><p class="step-head">Extend (about 72 °C)</p><p>The polymerase adds nucleotides to each primer, building the new strands.</p></li>
</ol>
<p>Each cycle doubles the amount of target DNA, so n cycles give 2<sup>n</sup> copies of each starting molecule. Ten cycles give 1024 copies, and 30 cycles give about a billion.</p>
<p>The polymerase is <span class="term">Taq polymerase</span>, from <em>Thermus aquaticus</em>, a bacterium that lives in hot springs. It works best at about 72 to 75 °C and survives repeated heating to 95 °C. This is the "heat-tolerant organism" enzyme idea from the enzymes slides. PCR is used in COVID-19 tests (after first converting the virus's RNA into DNA), forensic DNA profiling from tiny samples, and diagnosing genetic disorders.</p>

<details class="check"><summary>Why does PCR use Taq polymerase instead of a human DNA polymerase?</summary><div class="ans"><p>Each cycle heats the mixture to about 95 °C to separate the strands. A human enzyme (optimum about 37 °C) would denature during the first heating step and stop working. Taq polymerase comes from a hot-spring bacterium, so its shape stays stable at high temperature and it works best at about 72 °C.</p></div></details>
<details class="check"><summary>Sample X is 30% adenine. Sample Y is 30% guanine. Which needs a higher temperature to separate its strands?</summary><div class="ans"><p>By Chargaff's rule, X is 30% A and 30% T, so G + C = 40%. Y is 30% G and 30% C, so G + C = 60%. G–C pairs have three hydrogen bonds while A–T pairs have two, so <strong>sample Y</strong> has more hydrogen bonds and needs a higher temperature.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-protein-folding",
  title: "Protein folding, chaperones and prions",
  lesson: "1.06",
  tier: "likely",
  why: "Tests often ask which bonds hold each level of protein structure; this adds the bond types, how folding is helped inside cells, and what happens when folding fails.",
  html: `
<h3>What holds each level together</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Level</th><th>What it is</th><th>Held together by</th></tr></thead>
<tbody>
<tr><td>Primary</td><td>The sequence of amino acids</td><td>Peptide bonds (covalent)</td></tr>
<tr><td>Secondary</td><td>α-helices and β-pleated sheets</td><td>Hydrogen bonds between the C=O and N–H groups of the backbone (not the R groups)</td></tr>
<tr><td>Tertiary</td><td>The overall 3D fold of one polypeptide</td><td>Interactions between R groups (see below)</td></tr>
<tr><td>Quaternary</td><td>Two or more polypeptides working as one protein</td><td>The same R-group interactions, between chains (hemoglobin has four chains)</td></tr>
</tbody></table></div>
<p>Four kinds of R-group interaction build tertiary and quaternary structure:</p>
<ul>
<li><strong>Hydrophobic interactions:</strong> nonpolar R groups cluster in the core, away from water.</li>
<li><strong>Hydrogen bonds</strong> between polar R groups, such as the –OH of serine.</li>
<li><strong>Ionic bonds</strong> (salt bridges) between oppositely charged R groups, such as –COO<sup>−</sup> on aspartic acid and –NH<sub>3</sub><sup>+</sup> on lysine.</li>
<li><strong>Disulfide bridges:</strong> covalent S–S bonds between the sulfhydryl (–SH) groups of two cysteines. They are the strongest of the four and are common in proteins that work outside cells, such as insulin, antibodies and the keratin in hair.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>A protein's properties come mainly from how it folds, not just from the amino acids it contains.</p></div>

<h3>The sequence holds the instructions</h3>
<p>In the 1950s and 60s Christian Anfinsen unfolded the enzyme ribonuclease with chemicals that broke its hydrogen bonds and disulfide bridges. When he slowly removed the chemicals, the enzyme refolded by itself and worked again. Conclusion: the <strong>primary structure determines the 3D shape</strong>. This also explains why denaturation can sometimes be temporary, as the slides say. Predicting a protein's shape from its sequence was a famous unsolved problem for 50 years until the AI program AlphaFold largely cracked it, which earned a share of the 2024 Nobel Prize in Chemistry.</p>

<h3>Chaperones: folding helpers</h3>
<p>The cytosol is crowded. A new chain coming off a ribosome can misfold, or its exposed hydrophobic patches can stick to other chains before it finishes folding. <span class="term">Chaperone proteins</span> bind to unfolded chains, stop them from clumping, and give them a protected space to fold correctly. Some chaperones form a barrel-shaped chamber that the chain folds inside. Many are <em>heat shock proteins</em>: cells make more of them when heated, because heat unfolds proteins. Chaperones do not carry the folding instructions. They only make correct folding more likely.</p>

<h3>When folding goes wrong</h3>
<ul>
<li><strong>Sickle cell anemia:</strong> one amino acid in hemoglobin's β chain changes. Glutamic acid (charged, hydrophilic) is replaced by valine (nonpolar). The new hydrophobic patch makes hemoglobin molecules stick together into long fibres after they release O<sub>2</sub>. Red blood cells bend into a sickle shape and block small blood vessels. One change in primary structure alters how the chains interact and ruins the function.</li>
<li><strong>Prions:</strong> a prion is a misfolded form of a normal brain protein called PrP. The misfolded form has extra β-pleated sheet, and when it touches a normal PrP, it makes that protein misfold too, in a chain reaction. The clumps destroy brain tissue. Prions contain no DNA or RNA, yet they are infectious. They cause mad cow disease in cattle, Creutzfeldt-Jakob disease in humans and chronic wasting disease in deer and elk, which is found in western Canada. They survive normal cooking and many disinfectants.</li>
<li><strong>Alzheimer's disease</strong> also involves misfolded proteins that clump into plaques in the brain.</li>
</ul>

<details class="check"><summary>A hair perm uses one chemical to break the S–S bonds in hair keratin, sets the hair on curlers, then uses a second chemical to form new S–S bonds. Which level of structure is changed, and why does the curl last?</summary><div class="ans"><p>Disulfide bridges are R-group bonds, so the perm changes <strong>tertiary</strong> structure (and quaternary structure between keratin chains). The new disulfide bridges form while the hair is curled, and because they are strong covalent bonds, they lock in the new shape.</p></div></details>
<details class="check"><summary>Explain how changing a single amino acid causes sickle cell anemia.</summary><div class="ans"><p>The change is in the primary structure: a charged, hydrophilic glutamic acid becomes a nonpolar valine on the surface of hemoglobin. The hydrophobic valine sticks to a nonpolar region on neighbouring hemoglobin molecules (hydrophobic interactions), so they form long fibres. These distort red blood cells into sickles that carry less O<sub>2</sub> and block capillaries. Shape determines function.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-enzyme-kinetics",
  title: "Enzyme kinetics, naming and the six enzyme classes",
  lesson: "1.07",
  tier: "extra",
  why: "Puts names (Vmax, Km) on the plateau graph from the slides, shows how the two kinds of inhibitor change that graph, and explains how enzymes get their names.",
  html: `
<h3>The rate vs [S] curve</h3>
<p>The slides ask why rate rises with substrate concentration and then plateaus. At low [S], most active sites are empty, so adding substrate raises the rate almost proportionally. As [S] rises, more active sites are occupied at any moment. At high [S], every active site is busy: the enzyme is <span class="term">saturated</span>, and the rate levels off at its maximum, <span class="term">V<sub>max</sub></span>. More substrate cannot help. Only more enzyme raises V<sub>max</sub>.</p>
<p>The <span class="term">Michaelis constant (K<sub>m</sub>)</span> is the substrate concentration that gives half of V<sub>max</sub>. It measures how strongly an enzyme holds its substrate. A <strong>low</strong> K<sub>m</sub> means the enzyme reaches half speed at a low [S], so it has a <strong>high affinity</strong> for its substrate.</p>
<figure class="diagram"><svg viewBox="0 0 640 300" role="img" aria-labelledby="bx-kin-t"><title id="bx-kin-t">Reaction rate against substrate concentration, with no inhibitor, a competitive inhibitor and a non-competitive inhibitor</title>
<line x1="70" y1="250" x2="610" y2="250" style="stroke:var(--ink);stroke-width:1.5"/>
<line x1="70" y1="250" x2="70" y2="30" style="stroke:var(--ink);stroke-width:1.5"/>
<line x1="70" y1="70" x2="610" y2="70" style="stroke:var(--ink-2);stroke-width:1.5;stroke-dasharray:6 4"/>
<text x="76" y="63" font-size="13" font-family="inherit" style="fill:var(--ink-2)">Vmax</text>
<polyline points="70,160 140,160 140,250" style="fill:none;stroke:var(--ink-2);stroke-width:1.5;stroke-dasharray:4 4"/>
<text x="76" y="153" font-size="12" font-family="inherit" style="fill:var(--ink-2)">½ Vmax</text>
<text x="140" y="266" font-size="12" font-family="inherit" text-anchor="middle" style="fill:var(--ink-2)">Km</text>
<polyline points="70,250.0 80,227.5 90,210.0 100,196.0 110,184.5 120,175.0 130,166.9 140,160.0 150,154.0 160,148.8 170,144.1 180,140.0 190,136.3 200,133.0 210,130.0 220,127.3 230,124.8 240,122.5 250,120.4 260,118.5 270,116.7 280,115.0 290,113.4 300,112.0 320,109.4 340,107.1 360,105.0 380,103.2 400,101.5 420,100.0 440,98.6 460,97.4 480,96.3 500,95.2 520,94.2 540,93.3 560,92.5 580,91.7 600,91.0" style="fill:none;stroke:var(--blue);stroke-width:3"/>
<polyline points="70,250.0 80,241.4 90,233.6 100,226.5 110,220.0 120,214.0 130,208.5 140,203.3 150,198.6 160,194.1 170,190.0 180,186.1 190,182.5 200,179.1 220,172.9 240,167.3 260,162.3 280,157.8 300,153.7 320,150.0 340,146.6 360,143.5 380,140.6 400,137.9 420,135.5 440,133.2 460,131.0 480,129.0 500,127.1 520,125.4 540,123.7 560,122.2 580,120.7 600,119.3" style="fill:none;stroke:var(--amber);stroke-width:3"/>
<polyline points="70,250.0 80,237.5 90,227.8 100,220.0 110,213.6 120,208.3 130,203.8 140,200.0 150,196.7 160,193.8 170,191.2 180,188.9 200,185.0 220,181.8 240,179.2 260,176.9 280,175.0 300,173.3 320,171.9 340,170.6 360,169.4 380,168.4 400,167.5 420,166.7 440,165.9 460,165.2 480,164.6 500,164.0 520,163.5 540,163.0 560,162.5 580,162.1 600,161.7" style="fill:none;stroke:var(--magenta);stroke-width:3"/>
<text x="600" y="84" font-size="13" font-family="inherit" text-anchor="end" style="fill:var(--ink)">No inhibitor</text>
<text x="600" y="111" font-size="13" font-family="inherit" text-anchor="end" style="fill:var(--ink)">Competitive inhibitor</text>
<text x="600" y="153" font-size="13" font-family="inherit" text-anchor="end" style="fill:var(--ink)">Non-competitive inhibitor</text>
<text x="340" y="290" font-size="13" font-family="inherit" text-anchor="middle" style="fill:var(--ink)">Substrate concentration [S]</text>
<text transform="translate(30,150) rotate(-90)" font-size="13" font-family="inherit" text-anchor="middle" style="fill:var(--ink)">Reaction rate</text>
</svg><figcaption>Blue: normal enzyme, levelling off toward V<sub>max</sub>. Amber: a competitive inhibitor slows the rate at low [S], but enough substrate still approaches the same V<sub>max</sub>. Magenta: a non-competitive inhibitor lowers V<sub>max</sub> itself.</figcaption></figure>

<h3>What inhibitors do to the curve</h3>
<div class="compare">
<div><h4>Competitive</h4><p>Binds the active site and competes with the substrate. It <strong>raises K<sub>m</sub></strong> (more substrate is needed to reach half speed), but <strong>V<sub>max</sub> stays the same</strong>, because a flood of substrate can out-compete it.</p></div>
<div><h4>Non-competitive</h4><p>Binds an allosteric site and changes the active site's shape. It <strong>lowers V<sub>max</sub></strong>. Adding more substrate cannot fix this, because the affected enzymes stay slowed whatever [S] is.</p></div>
</div>
<p>Biochemists often plot 1/rate against 1/[S]. This <span class="term">Lineweaver–Burk plot</span> turns the curve into a straight line, which is easier to read accurately. Its y-intercept is 1/V<sub>max</sub> and its x-intercept is −1/K<sub>m</sub>. Lines with and without a competitive inhibitor cross on the y-axis (same V<sub>max</sub>). Lines for a non-competitive inhibitor cross on the x-axis (same K<sub>m</sub>).</p>
<p>Some inhibitors are <strong>irreversible</strong>: they bond covalently to the enzyme and disable it permanently. Aspirin blocks the enzyme that makes inflammatory signals, and penicillin blocks a bacterial enzyme that builds cell walls.</p>

<h3>How enzymes are named</h3>
<ul>
<li><strong>Substrate + -ase:</strong> lactase (lactose), sucrase (sucrose), lipase (lipids), protease (proteins).</li>
<li><strong>Reaction + -ase:</strong> dehydrogenase (removes hydrogen atoms), kinase (adds a phosphate from ATP), polymerase (builds a polymer), isomerase (makes an isomer).</li>
<li>Some older names break the rule: pepsin and trypsin digest proteins.</li>
</ul>
<div class="table-wrap"><table class="data">
<thead><tr><th>Class</th><th>Reaction type</th><th>Example</th></tr></thead>
<tbody>
<tr><td>1. Oxidoreductases</td><td>Redox: transfer electrons or hydrogen atoms</td><td>Dehydrogenases</td></tr>
<tr><td>2. Transferases</td><td>Move a functional group from one molecule to another</td><td>Kinases (phosphate group)</td></tr>
<tr><td>3. Hydrolases</td><td>Break bonds by hydrolysis</td><td>Amylase, lipase, lactase</td></tr>
<tr><td>4. Lyases</td><td>Break or form bonds without water or redox, often adding or removing CO<sub>2</sub> or H<sub>2</sub>O</td><td>Carbonic anhydrase</td></tr>
<tr><td>5. Isomerases</td><td>Rearrange a molecule into an isomer</td><td>Glucose-6-phosphate isomerase</td></tr>
<tr><td>6. Ligases</td><td>Join two molecules, using energy from ATP</td><td>DNA ligase</td></tr>
</tbody></table></div>
<p>A seventh class, translocases (enzymes that move ions or molecules across membranes), was added in 2018.</p>

<details class="check"><summary>An enzyme is already working at V<sub>max</sub>. What happens to the rate if you add more substrate, and what would actually speed it up?</summary><div class="ans"><p>Nothing changes, because every active site is already occupied (saturated). To go faster you need more enzyme molecules, or conditions closer to the enzyme's optimum, such as its optimal temperature or pH.</p></div></details>
<details class="check"><summary>With an inhibitor present, adding a large excess of substrate brings the rate back to normal. Which type of inhibitor is it?</summary><div class="ans"><p>A <strong>competitive</strong> inhibitor. It competes for the active site, so a large excess of substrate wins most of the binding events and the rate approaches the normal V<sub>max</sub>. A non-competitive inhibitor would keep V<sub>max</sub> low however much substrate you added.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-endosymbiosis",
  title: "Endosymbiotic theory and the cytoskeleton in detail",
  lesson: "1.08",
  tier: "likely",
  why: "Class notes link chloroplasts to bacteria (endosymbiosis) and list the cytoskeleton, which the slides only touch on; both are common application questions.",
  html: `
<h3>Endosymbiotic theory</h3>
<p>The <span class="term">endosymbiotic theory</span> says that mitochondria and chloroplasts were once free-living prokaryotes. Roughly 1.5 to 2 billion years ago, a larger host cell engulfed an aerobic bacterium but did not digest it. The bacterium lived on inside the host (<em>endo</em> = inside, <em>symbiosis</em> = living together). It supplied extra ATP, and the host supplied protection and food. Over many generations it became the mitochondrion. Later, a cell that already had mitochondria engulfed a photosynthetic cyanobacterium, which became the chloroplast. That is why almost all eukaryotes have mitochondria, but only plants and algae have chloroplasts. The biologist Lynn Margulis championed the idea from 1967, when most scientists rejected it.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The chloroplast resembles photosynthetic bacteria. This is the endosymbiosis idea.</p></div>
<h4>The evidence</h4>
<ul>
<li><strong>Double membrane:</strong> the inner membrane comes from the bacterium's own membrane. The outer one comes from the host membrane that wrapped around it during engulfing.</li>
<li><strong>Their own DNA:</strong> small, circular and not wound around histone proteins, just like bacterial DNA.</li>
<li><strong>Their own ribosomes:</strong> smaller, bacterial-type ribosomes, not the larger ones in the cytosol. Some antibiotics that target bacterial ribosomes can also affect mitochondria.</li>
<li><strong>Division:</strong> they reproduce by splitting in two, like bacterial binary fission. A cell cannot build a new mitochondrion from scratch.</li>
<li><strong>Size and genes:</strong> they are about the size of bacteria, and their DNA sequences are most similar to particular bacterial groups.</li>
</ul>
<p>Over time most of the original bacterial genes moved to the nucleus, so mitochondria can no longer live on their own. Your mitochondrial DNA came from your mother, because the egg supplies the zygote's mitochondria. Scientists use it to trace maternal ancestry.</p>

<h3>The cytoskeleton</h3>
<p>The <span class="term">cytoskeleton</span> is a network of protein fibres running through the cytoplasm. It gives the cell its shape, anchors organelles, and moves things around. There are three kinds of fibre.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Fibre</th><th>Protein</th><th>Diameter</th><th>Main jobs</th></tr></thead>
<tbody>
<tr><td>Microfilaments</td><td>Actin</td><td>about 7 nm (thinnest)</td><td>Cell shape; muscle contraction (with myosin); crawling movement with pseudopods; cytoplasmic streaming; pinching an animal cell in two during division</td></tr>
<tr><td>Intermediate filaments</td><td>Several, such as keratin</td><td>about 10 nm</td><td>Rope-like and permanent; resist pulling forces; hold the nucleus in place</td></tr>
<tr><td>Microtubules</td><td>Tubulin</td><td>about 25 nm hollow tubes (thickest)</td><td>Tracks for vesicles and organelles; spindle fibres that separate chromosomes; make up cilia, flagella and centrioles</td></tr>
</tbody></table></div>
<p>Microtubules constantly grow and shrink by adding or removing tubulin, so the cell can build them where needed and take them apart afterwards. <strong>Motor proteins</strong> use ATP to "walk" along them while carrying cargo: kinesin moves vesicles outward toward the cell membrane, and dynein moves them inward. This is how vesicles from the Golgi reach the membrane for exocytosis, and how neurons move materials down axons that can be a metre long.</p>
<h4>Cilia and flagella</h4>
<p>Both have a "9 + 2" arrangement: a ring of nine pairs of microtubules around two central microtubules. Dynein arms make neighbouring pairs slide past each other, which bends the whole structure. Each one is anchored by a basal body, which is built like a centriole. Examples include the sperm flagellum and the cilia lining your airways, which sweep mucus up and out of the lungs. Bacterial flagella are a completely different structure: a rotating protein filament with no microtubules.</p>
<p>Some medicines target microtubules. The cancer drug paclitaxel (Taxol), first found in the bark of the Pacific yew tree, freezes microtubules so the spindle cannot work and dividing cancer cells cannot finish mitosis.</p>

<details class="check"><summary>Give three pieces of evidence that mitochondria were once free-living bacteria.</summary><div class="ans"><p>Any three: they have a double membrane; they have their own small, circular DNA without histones; they have their own bacterial-type ribosomes; they divide by splitting like binary fission; they are about the size of bacteria; their DNA sequences most closely match certain bacteria.</p></div></details>
<details class="check"><summary>A drug stops microtubules from forming. Predict two cell processes that would fail.</summary><div class="ans"><p>Any two: cell division (no spindle fibres to separate chromosomes); vesicle transport, including secretion by exocytosis (no tracks for motor proteins); movement of cilia and flagella; keeping organelles in their proper positions.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-membrane-signals",
  title: "Membrane fluidity and signal transduction",
  lesson: "1.09",
  tier: "likely",
  why: "Fluidity and signal transduction are both on the membrane slides, but only as bullet points; this explains how they work and why cells adjust them.",
  html: `
<h3>How fluid is "fluid"?</h3>
<p>Phospholipids constantly drift sideways within their own layer. A phospholipid can travel about 2 µm, roughly the length of a bacterium, in one second. Flipping to the other layer is rare, because the polar head would have to pass through the nonpolar middle. Proteins drift more slowly, and some are anchored to the cytoskeleton. In a classic 1970 experiment, scientists fused a mouse cell with a human cell, each with its membrane proteins labelled a different colour. Within about an hour the two sets of proteins were completely mixed, which is strong evidence for the <span class="term">fluid mosaic model</span>.</p>

<h3>What changes fluidity</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Factor</th><th>More fluid</th><th>Less fluid</th></tr></thead>
<tbody>
<tr><td>Temperature</td><td>Warmer</td><td>Colder: at a low enough temperature the membrane becomes gel-like, like butter in a fridge</td></tr>
<tr><td>Fatty acid tails</td><td>Unsaturated (cis kinks keep the tails apart)</td><td>Saturated (straight tails pack tightly)</td></tr>
<tr><td>Tail length</td><td>Shorter tails (weaker London forces)</td><td>Longer tails</td></tr>
<tr><td>Cholesterol</td><td>At low temperature it stops tails packing tightly, so the membrane stays fluid</td><td>At high temperature it restrains phospholipid movement, so the membrane is less fluid</td></tr>
</tbody></table></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Saturated tails <em>and</em> trans unsaturated tails decrease fluidity, because both are straight. Only cis unsaturated tails have the kink that increases fluidity.</p></div>
<p>A membrane must be fluid enough for its proteins to move and change shape (carriers, channels and receptors all do this), for vesicles to fuse with it during endocytosis and exocytosis, and for small tears to reseal. If it is too fluid, it becomes leaky. Organisms adjust their membranes to their temperature:</p>
<ul>
<li>Fish in icy water have more unsaturated fatty acids in their membranes than tropical fish.</li>
<li>Bacteria and plants grown in the cold, such as winter wheat in autumn, increase the proportion of unsaturated tails.</li>
<li>Ectotherms (fish, reptiles) cannot control their body temperature, so this adjustment matters most for them.</li>
</ul>
<p>Cholesterol is found in the membranes of all animal cells, including yours. Plants use similar sterols, and most bacteria have none.</p>

<h3>Signal transduction: passing a message through the membrane</h3>
<p>Cells communicate with chemical signals such as hormones and neurotransmitters. A signal molecule (a <span class="term">ligand</span>) binds to a <span class="term">receptor protein</span> with a matching shape, much like a substrate fits an active site. The process has three stages: <strong>reception</strong> (the signal binds), <strong>transduction</strong> (a chain of changes relays the message inside the cell) and <strong>response</strong> (the cell does something).</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Adrenaline cannot pass through the membrane. It binds to a receptor on the outside of the cell, which sets off reactions inside. The signal itself is not absorbed. It is transduced.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Adrenaline cannot cross because it is <strong>polar (water-soluble)</strong>, so the nonpolar interior of the bilayer blocks it. Nonpolar, lipid-soluble signals are the ones that pass straight through.</p></div>
<ul>
<li><strong>Polar or large signals</strong> (adrenaline, insulin, neurotransmitters) bind to <strong>cell-surface receptors</strong>, which are integral proteins.</li>
<li><strong>Nonpolar signals</strong> (steroid hormones such as testosterone, estrogen and cortisol, which are made from cholesterol) diffuse through the bilayer and bind to <strong>receptors inside the cell</strong>. The hormone-receptor complex often enters the nucleus and switches genes on or off.</li>
</ul>
<h4>Three kinds of surface receptor</h4>
<ul>
<li><strong>G protein-coupled receptors</strong> cross the membrane seven times and switch on a "G protein" inside. When adrenaline binds a liver cell's receptor, the G protein activates an enzyme that makes a small <em>second messenger</em> called cAMP. cAMP starts a chain of enzymes that ends with glycogen being broken down into glucose. Each step activates many molecules at the next step, so one adrenaline molecule can release millions of glucose molecules. This is called <span class="term">amplification</span>. Roughly a third of prescription drugs act on receptors of this type.</li>
<li><strong>Ligand-gated ion channels</strong> open when the signal binds. At a muscle, the neurotransmitter acetylcholine opens channels that let Na<sup>+</sup> rush in, triggering contraction.</li>
<li><strong>Enzyme-linked receptors</strong> act as enzymes themselves once the signal binds. The insulin receptor is one.</li>
</ul>

<details class="check"><summary>Predict how the membranes of a fish living under Arctic ice differ from those of a tropical reef fish, and explain why.</summary><div class="ans"><p>The Arctic fish's membranes contain a higher proportion of <strong>unsaturated</strong> (cis) fatty acid tails, and possibly shorter tails. The kinks stop the tails from packing tightly, so the membrane stays fluid at near-freezing temperatures. Saturated tails would make it rigid, so proteins could not move or change shape.</p></div></details>
<details class="check"><summary>Why does testosterone not need a receptor on the cell surface, while adrenaline does?</summary><div class="ans"><p>Testosterone is a steroid made from cholesterol, so it is nonpolar and diffuses straight through the bilayer to a receptor inside the cell. Adrenaline is polar, so it cannot cross the hydrophobic interior. It must bind a surface receptor, which passes the signal inward.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-water-potential",
  title: "Osmosis in plant and animal cells, water potential and aquaporins",
  lesson: "1.10",
  tier: "likely",
  why: "The answer key uses crenation and lysis, and class notes mention aquaporins and cell walls preventing bursting; this ties them together and adds the water potential idea used in plant biology.",
  html: `
<h3>Tonicity is always a comparison</h3>
<p>Hypotonic, isotonic and hypertonic describe a solution <em>compared with</em> the cell. Water moves by osmosis toward the side with more dissolved solute (less free water). Only solutes that cannot cross the membrane count. Animal cells and plant cells respond differently because plant cells have a wall.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Solution outside</th><th>Animal cell (e.g., red blood cell)</th><th>Plant cell</th></tr></thead>
<tbody>
<tr><td>Hypotonic</td><td>Gains water, swells and may burst (<span class="term">lysis</span>)</td><td>Gains water and presses against the wall: <span class="term">turgid</span>, its healthy normal state</td></tr>
<tr><td>Isotonic</td><td>No net movement; normal shape</td><td>No net movement: <span class="term">flaccid</span>, so the plant wilts</td></tr>
<tr><td>Hypertonic</td><td>Loses water and shrivels (<span class="term">crenation</span>)</td><td>Loses water; the membrane pulls away from the wall (<span class="term">plasmolysis</span>)</td></tr>
</tbody></table></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>A fungus in soil that is hypotonic to it takes in water, and its chitin wall stops it from bursting. Cell walls of cellulose (plants) and chitin (fungi) do the same job.</p></div>

<h3>Water potential</h3>
<p>Plant biologists describe this with <span class="term">water potential</span> (Ψ, the Greek letter psi), measured in megapascals (MPa). Water always moves from <strong>higher</strong> Ψ to <strong>lower</strong> Ψ.</p>
<div class="eq">Ψ = Ψ<sub>s</sub> + Ψ<sub>p</sub></div>
<ul>
<li>Pure water at normal pressure has Ψ = 0.</li>
<li><strong>Solute potential (Ψ<sub>s</sub>)</strong> is zero or negative. More solute makes it more negative.</li>
<li><strong>Pressure potential (Ψ<sub>p</sub>)</strong> is usually positive inside a plant cell, because the cell pushes against its wall. This is <span class="term">turgor pressure</span>.</li>
</ul>
<p><strong>Worked example.</strong> A plant cell has Ψ<sub>s</sub> = −0.7 MPa and Ψ<sub>p</sub> = +0.3 MPa, so its Ψ = −0.4 MPa. It is placed in a sucrose solution with Ψ = −0.6 MPa. Water moves from higher (−0.4) to lower (−0.6), so it moves <em>out</em> of the cell. Turgor pressure drops, and if water keeps leaving, the cell plasmolyzes.</p>
<p>This also explains why plant cells do not burst. As water enters, the wall pushes back harder and Ψ<sub>p</sub> rises, until the cell's Ψ equals the surroundings' Ψ and net flow stops.</p>
<p><strong>Count particles, not grams.</strong> One mole of NaCl splits into two moles of ions (Na<sup>+</sup> and Cl<sup>−</sup>), so it has about twice the osmotic effect of one mole of glucose. Hospitals use "normal saline" (0.9% NaCl) for IV drips because it is isotonic to blood. Pure water injected into a vein would make red blood cells swell and burst.</p>

<h3>Aquaporins</h3>
<p>Water molecules are small, so a few slip slowly straight through the bilayer. Much faster flow uses <span class="term">aquaporins</span>, channel proteins with a narrow pore that water passes through in single file. One aquaporin can let about 3 billion water molecules through per second, yet it blocks ions, even H<sup>+</sup>. Peter Agre won the 2003 Nobel Prize in Chemistry for discovering them.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Protein channels such as aquaporins allow the mass movement of water across the membrane.</p></div>
<p>Cells control how fast water crosses by changing how many aquaporins are in the membrane. When you are dehydrated, antidiuretic hormone (ADH) makes kidney cells move aquaporins stored in vesicles to their membranes by exocytosis. More water is reabsorbed into the blood and your urine becomes more concentrated. Alcohol reduces ADH release, which is why it makes you urinate more.</p>
<p>Other examples: freshwater protists such as <em>Paramecium</em> live in hypotonic water and use a contractile vacuole to pump out the water that keeps entering. Salting meat or making jam creates a hypertonic environment, so bacteria lose water and cannot grow.</p>

<details class="check"><summary>Red blood cells are placed in 3% NaCl (blood is about 0.9%). Predict what happens and name it.</summary><div class="ans"><p>3% NaCl is <strong>hypertonic</strong> to the cells. Water leaves the cells by osmosis and they shrivel. This is <strong>crenation</strong>.</p></div></details>
<details class="check"><summary>A plant cell with Ψ = −0.5 MPa is placed in pure water. Which way does water move, and what stops the movement?</summary><div class="ans"><p>Pure water has Ψ = 0, which is higher than −0.5, so water moves <strong>into</strong> the cell. As the cell swells against its wall, turgor pressure (Ψ<sub>p</sub>) rises until the cell's Ψ reaches 0. Then there is no net movement, and the wall prevents the cell from bursting.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-cotransport",
  title: "The sodium-potassium pump, electrochemical gradients and cotransport",
  lesson: "1.10",
  tier: "likely",
  why: "The answer key names the Na+/K+ pump as the classic active transport example; this shows how it works and how its gradient powers other transport, such as glucose uptake in the gut.",
  html: `
<h3>Primary active transport: the Na<sup>+</sup>/K<sup>+</sup> pump</h3>
<p>The <span class="term">sodium-potassium pump</span> is a carrier protein found in nearly every animal cell. Each cycle goes like this:</p>
<ol class="steps">
<li><p class="step-head">3 Na<sup>+</sup> bind</p><p>Three sodium ions from the cytoplasm bind to the pump.</p></li>
<li><p class="step-head">ATP phosphorylates the pump</p><p>ATP transfers a phosphate group to the pump, which changes the pump's shape.</p></li>
<li><p class="step-head">Na<sup>+</sup> released outside</p><p>The new shape opens to the outside and releases the 3 Na<sup>+</sup>.</p></li>
<li><p class="step-head">2 K<sup>+</sup> bind</p><p>Two potassium ions from outside bind. The phosphate is released and the pump returns to its original shape.</p></li>
<li><p class="step-head">K<sup>+</sup> released inside</p><p>The 2 K<sup>+</sup> are released into the cytoplasm, and the cycle repeats.</p></li>
</ol>
<p>The result is high Na<sup>+</sup> outside the cell and high K<sup>+</sup> inside. This is <span class="term">primary active transport</span>, because the pump uses ATP directly. It uses a large share of a resting body's ATP, and even more in the brain.</p>

<h3>Electrochemical gradients</h3>
<p>An ion is pushed by two things at once: its <strong>concentration gradient</strong> (from high to low) and the <strong>electrical gradient</strong> (attraction toward opposite charge). Together these make the <span class="term">electrochemical gradient</span>. The pump moves 3 positive charges out but only 2 in, and K<sup>+</sup> also leaks out through channels, so the inside of the cell is negative compared with the outside. This charge difference is the <span class="term">membrane potential</span>, about −70 mV in a resting nerve cell.</p>
<ul>
<li><strong>Na<sup>+</sup>:</strong> there is more of it outside, <em>and</em> the negative inside attracts it. Both pushes point inward, so Na<sup>+</sup> has a strong drive to enter, like water held behind a dam.</li>
<li><strong>K<sup>+</sup>:</strong> its concentration gradient pushes it out, but the negative inside pulls it back.</li>
</ul>
<p>This is what the first slide of the unit meant when it said atomic structure (charge) affects "concentration and electrical gradients for transport."</p>

<h3>Secondary active transport (cotransport)</h3>
<p>In <span class="term">cotransport</span>, a carrier lets Na<sup>+</sup> (or H<sup>+</sup>) flow down its electrochemical gradient and uses that energy to drag another substance <em>against</em> its own gradient. The cotransporter uses no ATP itself. The ATP was spent earlier by the pump that built the gradient.</p>
<ul>
<li><strong>Symport</strong> (both in the same direction): cells lining the small intestine take in 2 Na<sup>+</sup> together with 1 glucose. This lets them absorb glucose even when there is more glucose inside the cell than in the gut.</li>
<li><strong>Antiport</strong> (opposite directions): in heart muscle, a Na<sup>+</sup>/Ca<sup>2+</sup> exchanger lets Na<sup>+</sup> in while pushing Ca<sup>2+</sup> out.</li>
</ul>
<figure class="diagram"><svg viewBox="0 0 640 280" role="img" aria-labelledby="bx-ct-t"><title id="bx-ct-t">Glucose absorption by an intestinal cell using a sodium-glucose symporter, the sodium-potassium pump and a glucose transporter</title>
<defs><marker id="bx-ct-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs>
<rect x="150" y="40" width="340" height="200" rx="14" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:2"/>
<text x="20" y="60" font-size="13" font-family="inherit" style="fill:var(--ink-2)">Gut lumen</text>
<text x="630" y="152" font-size="13" font-family="inherit" text-anchor="end" style="fill:var(--ink-2)">Blood</text>
<text x="320" y="228" font-size="12" font-family="inherit" text-anchor="middle" style="fill:var(--ink-2)">Intestinal lining cell</text>
<text x="320" y="170" font-size="12" font-family="inherit" text-anchor="middle" style="fill:var(--ink)">Na⁺ kept low inside</text>
<rect x="138" y="95" width="24" height="70" rx="6" style="fill:var(--teal-soft);stroke:var(--teal);stroke-width:2"/>
<line x1="70" y1="114" x2="232" y2="114" style="stroke:var(--teal);stroke-width:2.5" marker-end="url(#bx-ct-ah)"/>
<text x="70" y="106" font-size="12" font-family="inherit" style="fill:var(--ink)">2 Na⁺</text>
<line x1="70" y1="150" x2="232" y2="150" style="stroke:var(--teal);stroke-width:2.5" marker-end="url(#bx-ct-ah)"/>
<text x="70" y="142" font-size="12" font-family="inherit" style="fill:var(--ink)">glucose</text>
<rect x="478" y="66" width="24" height="56" rx="6" style="fill:var(--amber-soft);stroke:var(--amber);stroke-width:2"/>
<line x1="400" y1="82" x2="592" y2="82" style="stroke:var(--amber);stroke-width:2.5" marker-end="url(#bx-ct-ah)"/>
<text x="405" y="74" font-size="12" font-family="inherit" style="fill:var(--ink)">3 Na⁺</text>
<line x1="592" y1="106" x2="400" y2="106" style="stroke:var(--amber);stroke-width:2.5" marker-end="url(#bx-ct-ah)"/>
<text x="405" y="124" font-size="12" font-family="inherit" style="fill:var(--ink)">2 K⁺</text>
<rect x="478" y="170" width="24" height="50" rx="6" style="fill:var(--blue-soft);stroke:var(--blue);stroke-width:2"/>
<line x1="400" y1="195" x2="592" y2="195" style="stroke:var(--blue);stroke-width:2.5" marker-end="url(#bx-ct-ah)"/>
<text x="405" y="187" font-size="12" font-family="inherit" style="fill:var(--ink)">glucose</text>
<text x="630" y="26" font-size="12" font-family="inherit" text-anchor="end" style="fill:var(--ink)">Na⁺/K⁺ pump: 3 Na⁺ out, 2 K⁺ in, uses ATP</text>
<text x="20" y="264" font-size="12" font-family="inherit" style="fill:var(--ink)">Symporter: 2 Na⁺ and 1 glucose in together</text>
<text x="630" y="264" font-size="12" font-family="inherit" text-anchor="end" style="fill:var(--ink)">Glucose transporter: facilitated diffusion</text>
</svg><figcaption>Teamwork in the small intestine. The pump (amber) spends ATP to keep Na<sup>+</sup> low inside the cell. The symporter (teal) lets Na<sup>+</sup> flow in and brings glucose with it, against glucose's gradient. Glucose then leaves into the blood by facilitated diffusion (blue).</figcaption></figure>
<p>Some cells pump H<sup>+</sup> instead of Na<sup>+</sup>. Cells in the stomach lining pump H<sup>+</sup> into the stomach (heartburn drugs called proton pump inhibitors block this pump). Plant cells use an H<sup>+</sup> gradient to load sucrose into phloem, and in Unit 2 you will see mitochondria use an H<sup>+</sup> gradient to make ATP.</p>
<p><strong>A life-saving application:</strong> in cholera and other severe diarrhea, people lose water and salt fast. Drinking water with the right amounts of salt and glucose (oral rehydration therapy) works because the symporter absorbs Na<sup>+</sup> and glucose together, and water follows by osmosis. This cheap treatment has saved millions of lives, mostly children.</p>

<details class="check"><summary>Cyanide stops a cell from making ATP. The Na<sup>+</sup>-glucose symporter does not use ATP, so why does glucose absorption still stop?</summary><div class="ans"><p>Without ATP the Na<sup>+</sup>/K<sup>+</sup> pump stops. Na<sup>+</sup> keeps flowing into the cell, so the Na<sup>+</sup> gradient runs down. With no gradient, the symporter has no energy source to pull glucose in against its gradient. Secondary active transport depends on the ATP spent by primary active transport.</p></div></details>
<details class="check"><summary>Does the Na<sup>+</sup>/K<sup>+</sup> pump create a concentration gradient, an electrical gradient or both?</summary><div class="ans"><p><strong>Both.</strong> It concentrates Na<sup>+</sup> outside and K<sup>+</sup> inside (concentration gradients), and because it moves 3 positive charges out for every 2 it brings in, it also helps make the inside of the cell negative (an electrical gradient).</p></div></details>
`
});

/* @@NEXT@@ */
