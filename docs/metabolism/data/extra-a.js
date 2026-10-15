window.EXTRA = window.EXTRA || [];

window.EXTRA.push({
  id: "e-free-energy",
  title: "Free energy, ΔG and why some reactions go on their own",
  lesson: "2.01",
  tier: "likely",
  why: "Puts numbers on the class ideas of exergonic/endergonic and 'respiration is not 100% efficient', and explains where the worksheet's '94 ATP = 100%' comes from.",
  html: `
<h3>What "free energy" means</h3>
<p><span class="term">Gibbs free energy</span> (<em>G</em>) is the part of a molecule's energy that is available to do useful work in a cell, such as building molecules, pumping ions or contracting muscle. You never measure <em>G</em> directly. What matters is the change during a reaction:</p>
<div class="eq">ΔG = G<sub>products</sub> − G<sub>reactants</sub></div>
<ul>
<li><strong>ΔG &lt; 0 (negative):</strong> products have less free energy than reactants. The reaction <em>releases</em> free energy. It is <span class="term">exergonic</span> and <span class="term">spontaneous</span>. Catabolic reactions such as cellular respiration are exergonic.</li>
<li><strong>ΔG &gt; 0 (positive):</strong> products have more free energy. The reaction needs an energy input. It is <span class="term">endergonic</span> and non-spontaneous. Anabolic reactions, including ADP + P<sub>i</sub> → ATP, are endergonic.</li>
<li><strong>ΔG = 0:</strong> the reaction is at <span class="term">equilibrium</span> and can do no work. A cell whose reactions all reached equilibrium would be dead. Living cells stay far from equilibrium by constantly taking in fuel.</li>
</ul>

<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Spontaneous" does not mean "fast". Sugar in a bowl is spontaneous to oxidize (ΔG is very negative), but it does not burst into flames because the <span class="term">activation energy</span> is high. ΔG tells you <em>whether</em> a reaction can go. Activation energy tells you <em>how fast</em>. Enzymes lower E<sub>A</sub> but never change ΔG.</p></div>

<h3>Numbers worth knowing</h3>
<p>These are approximate values under biochemical standard conditions (25 °C, pH 7, 1 mol/L of everything). Textbooks quote both kJ and kcal (1 kcal = 4.184 kJ).</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Reaction</th><th>ΔG (kJ/mol)</th><th>ΔG (kcal/mol)</th></tr></thead>
<tbody>
<tr><td>ATP + H<sub>2</sub>O → ADP + P<sub>i</sub> (hydrolysis)</td><td>≈ −30.5</td><td>≈ −7.3</td></tr>
<tr><td>ADP + P<sub>i</sub> → ATP + H<sub>2</sub>O (synthesis)</td><td>≈ +30.5</td><td>≈ +7.3</td></tr>
<tr><td>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O</td><td>≈ −2870</td><td>≈ −686</td></tr>
<tr><td>Glucose + P<sub>i</sub> → glucose-6-phosphate</td><td>≈ +13.8</td><td>≈ +3.3</td></tr>
</tbody></table></div>
<p>Inside a real cell, ATP hydrolysis releases even more (roughly −50 kJ/mol). This is because the cell keeps [ATP] much higher than [ADP], which pushes the reaction further from equilibrium. On tests, use the standard value of −30.5 kJ/mol (−7.3 kcal/mol).</p>

<h3>Energy coupling in numbers</h3>
<p>Step 1 of glycolysis shows coupling clearly. Adding phosphate to glucose by itself is endergonic. Hexokinase joins it to ATP hydrolysis, and you add the two ΔG values:</p>
<div class="eq">(+13.8) + (−30.5) = −16.7 kJ/mol → the coupled reaction is exergonic, so it proceeds</div>
<p>This is the general rule. An endergonic step can happen when it is paired with a more exergonic step and the <em>total</em> ΔG is negative.</p>

<h3>How efficient is cellular respiration?</h3>
<div class="eq">efficiency = (number of ATP × 30.5 kJ/mol) ÷ 2870 kJ/mol × 100%</div>
<ul>
<li>38 ATP (class maximum): 38 × 30.5 ≈ 1159 kJ → <strong>about 40%</strong></li>
<li>36 ATP: ≈ 1098 kJ → about 38%</li>
<li>30–32 ATP (realistic): ≈ 915–976 kJ → about 32–34%</li>
</ul>
<p>The other 60% or more is released as <strong>heat</strong>. This is the "body heat comes from respiration not being 100% efficient" idea from class. It is still a good result: a typical car engine turns only about a quarter to a third of its fuel energy into motion.</p>

<h3>Where the worksheet's "94 ATP = 100%" comes from</h3>
<p>Divide the energy in glucose by the energy stored in one ATP:</p>
<div class="eq">686 kcal/mol ÷ 7.3 kcal/mol ≈ 94   (or 2870 ÷ 30.5 ≈ 94)</div>
<p>So 94 ATP is the theoretical maximum if every bit of glucose's free energy went into ATP. The "Follow That Glucose!" key compares the ATP made by glycolysis and the Krebs cycle with 94. It uses 6 ATP (4 made in glycolysis + 2 in Krebs): 6 ÷ 94 ≈ <strong>6%</strong>. If you count only net ATP (2 + 2 = 4), you get about 4%. Either way, the conclusion is the same. After Krebs, very little energy is in ATP yet. Most of it is held in NADH and FADH<sub>2</sub>, waiting for the ETC.</p>

<div class="callout key"><p class="callout-title">On the test</p><p>Know the signs: catabolic = exergonic = ΔG negative; anabolic = endergonic = ΔG positive. For an efficiency question, follow the method in the class key and show your ratio.</p></div>

<details class="check"><summary>Is making ATP spontaneous? How does a cell make it anyway?</summary><div class="ans"><p>No. ADP + P<sub>i</sub> → ATP has ΔG ≈ +30.5 kJ/mol, so it is endergonic. It must be coupled to something more exergonic. In substrate-level phosphorylation, a phosphate is transferred from a higher-energy molecule (for example PEP). In oxidative phosphorylation, H<sup>+</sup> flowing down its gradient through ATP synthase supplies the energy.</p></div></details>
<details class="check"><summary>Calculate the efficiency of respiration if 36 ATP are made per glucose. Where does the rest of the energy go?</summary><div class="ans"><p>36 × 30.5 = 1098 kJ. 1098 ÷ 2870 × 100% ≈ 38%. The remaining ≈ 62% (about 1770 kJ) is released as heat, which helps keep body temperature up.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-enzymes",
  title: "Enzymes refresher: cofactors, vitamins and inhibition",
  lesson: "2.01",
  tier: "likely",
  why: "Every step of respiration is enzyme-catalyzed, and PFK, PDH and the cyanide case all depend on knowing how enzymes are activated and inhibited.",
  html: `
<h3>The basics you are expected to remember</h3>
<p><span class="term">Enzymes</span> are biological catalysts, almost always proteins. They speed up reactions by lowering the activation energy (E<sub>A</sub>). They are not used up, and they do not change ΔG or the final products. Each enzyme has an <span class="term">active site</span>, a pocket whose shape and charge fit specific <span class="term">substrates</span>. When the substrate binds, the enzyme changes shape slightly to grip it more tightly. This is called <span class="term">induced fit</span>. The result is an enzyme–substrate complex. Temperature, pH, and substrate and enzyme concentrations all affect the rate. Extreme temperature or pH <span class="term">denatures</span> the enzyme, meaning its 3-D shape and active site are lost. (This is why yeast in your fermentation assignment stops making CO<sub>2</sub> in water that is too hot.)</p>

<h3>Cofactors and coenzymes: the "helpers"</h3>
<p>Many enzymes need a non-protein helper to work.</p>
<ul>
<li><span class="term">Cofactor</span>: an inorganic helper, usually a metal ion. <strong>Mg<sup>2+</sup></strong> is needed by every kinase in glycolysis (hexokinase, PFK, phosphoglycerate kinase, pyruvate kinase) because the real substrate is a Mg<sup>2+</sup>–ATP complex. Enolase also needs Mg<sup>2+</sup>. Iron and copper sit inside the ETC complexes and cytochromes, where they accept and pass on electrons.</li>
<li><span class="term">Coenzyme</span>: an organic helper. Many are built from B vitamins, which is why these vitamins are "essential" in your diet.</li>
</ul>
<div class="table-wrap"><table class="data">
<thead><tr><th>Coenzyme</th><th>Made from (vitamin)</th><th>Job in this unit</th></tr></thead>
<tbody>
<tr><td>NAD<sup>+</sup></td><td>Niacin (B3)</td><td>Electron carrier: glycolysis step 6, PDH, three Krebs steps, fermentation</td></tr>
<tr><td>FAD</td><td>Riboflavin (B2)</td><td>Electron carrier bound to succinate dehydrogenase (Krebs / complex II)</td></tr>
<tr><td>Coenzyme A (CoA)</td><td>Pantothenic acid (B5)</td><td>Carries the 2-C acetyl group (acetyl-CoA) and succinyl-CoA</td></tr>
<tr><td>Thiamine pyrophosphate (TPP)</td><td>Thiamine (B1)</td><td>Helps remove CO<sub>2</sub> in PDH, α-ketoglutarate dehydrogenase and yeast pyruvate decarboxylase</td></tr>
</tbody></table></div>
<p>Deficiency diseases show how important these are. Severe niacin deficiency causes <em>pellagra</em>, and thiamine deficiency causes <em>beriberi</em>. In both, energy-hungry tissues such as nerves and the heart are affected first.</p>

<h3>Inhibition: switching enzymes off</h3>
<div class="compare">
<div><h4>Competitive inhibition</h4><p>The inhibitor looks like the substrate and <strong>binds the active site</strong>, blocking the substrate. Adding more substrate can out-compete it. Classic example: <em>malonate</em> resembles succinate and blocks succinate dehydrogenase (Krebs step 6 / complex II).</p></div>
<div><h4>Non-competitive (allosteric) inhibition</h4><p>The inhibitor binds a <strong>different site</strong>, called the <span class="term">allosteric site</span>. This changes the enzyme's shape so the active site works poorly. Adding more substrate does <em>not</em> fix it. Example: high ATP binding PFK's allosteric site.</p></div>
</div>
<p>Inhibitors can also be <strong>reversible</strong> (they bind weakly and come off) or <strong>irreversible</strong> (they bind very tightly or form a covalent bond). In the 7 Deaths case study, cyanide is described as binding irreversibly to cytochrome c oxidase (complex IV). It attaches to the iron in the site where O<sub>2</sub> would normally bind, so electrons can no longer reach oxygen.</p>

<h3>Allosteric regulation and feedback inhibition</h3>
<p><span class="term">Allosteric enzymes</span> have regulatory sites as well as an active site. <em>Activators</em> lock them in an active shape, and <em>inhibitors</em> lock them in an inactive shape. This lets a cell turn a pathway up or down within seconds.</p>
<p><span class="term">Feedback inhibition</span> means that a product made late in a pathway inhibits an enzyme early in it. When there is enough product, production slows automatically, like a thermostat.</p>
<ul>
<li><strong>PFK</strong> (glycolysis step 3) is inhibited by ATP and citrate (signals of "plenty of energy") and activated by ADP/AMP ("low energy"). It is the control point because step 3 is the first step that commits sugar to glycolysis. Glucose-6-phosphate can still be sent elsewhere, for example to make glycogen, but fructose-1,6-bisphosphate cannot.</li>
<li><strong>PDH</strong> is inhibited by its own products, acetyl-CoA and NADH, and by ATP. It is activated by pyruvate, ADP, NAD<sup>+</sup> and CoA.</li>
</ul>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>"Products put the brakes on; low energy steps on the gas." High ATP, NADH, citrate or acetyl-CoA means slow down. High ADP/AMP, NAD<sup>+</sup> or pyruvate means speed up.</p></div>

<details class="check"><summary>Malonate is added to mitochondria. Predict what happens to succinate levels and FADH<sub>2</sub> production, and say how you could reverse the effect.</summary><div class="ans"><p>Malonate is a competitive inhibitor of succinate dehydrogenase. Succinate builds up, and less fumarate and FADH<sub>2</sub> are made, so the rest of the Krebs cycle slows. Because the inhibition is competitive, adding a lot more succinate can out-compete malonate and partly restore activity.</p></div></details>
<details class="check"><summary>ATP is a substrate of PFK. How can ATP also inhibit PFK?</summary><div class="ans"><p>PFK has two different binding sites for ATP. At normal levels ATP binds the active site and is used as a substrate. When ATP is high, it also binds the allosteric (regulatory) site. This changes PFK's shape and lowers its activity. It is feedback inhibition: the pathway's end product (ATP) slows the pathway.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-enzyme-names",
  title: "Decoding enzyme names: kinase, isomerase, mutase, dehydrogenase and more",
  lesson: "2.02",
  tier: "likely",
  why: "If you know the naming rules, you can work out what any enzyme on a diagram does instead of memorizing 20+ names separately.",
  html: `
<h3>The naming rule</h3>
<p>Most enzyme names have two parts: <strong>what it acts on</strong> + <strong>what it does</strong> + <span class="term">-ase</span>. "Hexo-kin-ase" means it acts on a hexose (6-C sugar) and it is a kinase (adds a phosphate from ATP). Once you know about a dozen word roots, every enzyme in this unit explains itself.</p>

<div class="table-wrap"><table class="data">
<thead><tr><th>Root</th><th>What it does</th><th>Examples in this unit</th></tr></thead>
<tbody>
<tr><td><strong>kinase</strong></td><td>Transfers a phosphate group between ATP and another molecule</td><td>hexokinase, PFK, phosphoglycerate kinase, pyruvate kinase</td></tr>
<tr><td><strong>phosphatase</strong></td><td>Removes a phosphate using water (hydrolysis); no ATP is made</td><td>glucose-6-phosphatase (liver)</td></tr>
<tr><td><strong>phosphorylase</strong></td><td>Breaks a bond by adding inorganic phosphate (P<sub>i</sub>)</td><td>glycogen phosphorylase</td></tr>
<tr><td><strong>isomerase</strong></td><td>Rearranges a molecule into an isomer (same formula, new structure)</td><td>phosphoglucose isomerase, triose phosphate isomerase</td></tr>
<tr><td><strong>mutase</strong></td><td>A type of isomerase that moves a group (here, phosphate) to a new position in the same molecule</td><td>phosphoglycerate mutase (P moves from C3 to C2)</td></tr>
<tr><td><strong>dehydrogenase</strong></td><td>Removes hydrogen (electrons + H<sup>+</sup>) from a substrate, oxidizing it and reducing NAD<sup>+</sup> or FAD</td><td>G3P dehydrogenase, PDH, isocitrate, α-ketoglutarate, succinate, malate, lactate and alcohol dehydrogenase; NADH dehydrogenase (complex I)</td></tr>
<tr><td><strong>oxidase</strong></td><td>Passes electrons directly to O<sub>2</sub></td><td>cytochrome c oxidase (complex IV)</td></tr>
<tr><td><strong>decarboxylase</strong></td><td>Removes a carboxyl group as CO<sub>2</sub></td><td>pyruvate decarboxylase (yeast fermentation)</td></tr>
<tr><td><strong>synthase</strong></td><td>Joins molecules <em>without</em> directly spending ATP or GTP</td><td>citrate synthase; ATP synthase (powered by the H<sup>+</sup> gradient)</td></tr>
<tr><td><strong>synthetase</strong></td><td>Joins molecules using energy from ATP or GTP</td><td>succinyl-CoA synthetase</td></tr>
<tr><td><strong>hydratase / dehydratase</strong></td><td>Adds water / removes water</td><td>fumarase (fumarate hydratase); enolase removes water</td></tr>
<tr><td><strong>aldolase</strong></td><td>Splits (or forms) a carbon–carbon bond</td><td>aldolase (glycolysis step 4)</td></tr>
<tr><td><strong>ATPase</strong></td><td>Hydrolyzes ATP to release energy</td><td>Na<sup>+</sup>/K<sup>+</sup>-ATPase; ATP synthase can also run in reverse as an ATPase</td></tr>
</tbody></table></div>

<h3>Glycolysis, decoded</h3>
<ol class="steps">
<li><p class="step-head">Hexokinase</p><p>Hexose + kinase: puts a phosphate from ATP onto glucose.</p></li>
<li><p class="step-head">Phosphoglucose isomerase</p><p>Turns the phospho-glucose into its isomer, fructose-6-phosphate.</p></li>
<li><p class="step-head">Phosphofructokinase (PFK)</p><p>Phospho-fructose + kinase: adds a second phosphate from ATP.</p></li>
<li><p class="step-head">Aldolase</p><p>Breaks a C–C bond, splitting the 6-C sugar into two 3-C pieces.</p></li>
<li><p class="step-head">Triose phosphate isomerase</p><p>Triose = 3-C sugar. It turns DHAP into its isomer, G3P.</p></li>
<li><p class="step-head">Glyceraldehyde-3-phosphate dehydrogenase</p><p>Removes hydrogen from G3P (NAD<sup>+</sup> → NADH) and attaches P<sub>i</sub>.</p></li>
<li><p class="step-head">Phosphoglycerate kinase</p><p>A kinase that moves a phosphate from 1,3-BPG to ADP, making ATP.</p></li>
<li><p class="step-head">Phosphoglycerate mutase</p><p>Moves the phosphate from carbon 3 to carbon 2.</p></li>
<li><p class="step-head">Enolase</p><p>Removes water, creating the "enol" in phospho<em>enol</em>pyruvate.</p></li>
<li><p class="step-head">Pyruvate kinase</p><p>A kinase that moves the phosphate from PEP to ADP, making ATP and pyruvate.</p></li>
</ol>

<h3>Link step and Krebs, decoded</h3>
<ul>
<li><strong>Pyruvate dehydrogenase complex</strong> – oxidizes pyruvate (NADH). It also removes CO<sub>2</sub>. "Complex" means three enzymes working as one unit.</li>
<li><strong>1 Citrate synthase</strong> – joins acetyl-CoA + oxaloacetate to make citrate, without using ATP.</li>
<li><strong>2 Aconitase</strong> – the isomerase: citrate → isocitrate.</li>
<li><strong>3 Isocitrate dehydrogenase</strong> and <strong>4 α-ketoglutarate dehydrogenase</strong> – each makes NADH and releases CO<sub>2</sub>.</li>
<li><strong>5 Succinyl-CoA synthetase</strong> – the substrate-level phosphorylation step (GTP → ATP).</li>
<li><strong>6 Succinate dehydrogenase</strong> – makes FADH<sub>2</sub>. The same enzyme is ETC complex II.</li>
<li><strong>7 Fumarase</strong> – adds water: fumarate → malate.</li>
<li><strong>8 Malate dehydrogenase</strong> – makes NADH and regenerates oxaloacetate.</li>
</ul>

<div class="callout tip"><p class="callout-title">Memory trick</p><p>Many reactions can run both ways, and enzymes are often named for the <em>other</em> direction. Pyruvate kinase, phosphoglycerate kinase, succinyl-CoA synthetase, lactate dehydrogenase and alcohol dehydrogenase all fit this pattern. For example, alcohol dehydrogenase is named for ethanol → acetaldehyde, which is what your liver does with alcohol. Yeast runs it the opposite way. Do not let the name confuse you about the direction shown on a diagram.</p></div>

<div class="callout warn"><p class="callout-title">Common mistake</p><p>Pyruvate <em>decarboxylase</em> (yeast fermentation: pyruvate → acetaldehyde + CO<sub>2</sub>) is not the same as pyruvate <em>dehydrogenase</em> (link step: pyruvate → acetyl-CoA + CO<sub>2</sub> + NADH). Only the dehydrogenase makes NADH.</p></div>

<details class="check"><summary>Using only its name, predict what glucose-6-phosphatase does. Why would the liver need it but muscle not?</summary><div class="ans"><p>It removes the phosphate from glucose-6-phosphate by hydrolysis, giving free glucose. Free glucose can leave the cell through glucose transporters, but G6P is trapped inside. The liver releases glucose into the blood for the rest of the body, so it needs this enzyme. Muscle keeps its glucose for itself, so it lacks it.</p></div></details>
<details class="check"><summary>Isocitrate dehydrogenase releases CO<sub>2</sub>. Why is it not called a decarboxylase?</summary><div class="ans"><p>It does two things: it oxidizes isocitrate (NAD<sup>+</sup> → NADH) and removes CO<sub>2</sub>. This is called oxidative decarboxylation. Enzymes are usually named for the redox part when there is one. The same applies to α-ketoglutarate dehydrogenase and the pyruvate dehydrogenase complex.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-phosphorylation-types",
  title: "Three ways to make ATP: substrate-level, oxidative and photophosphorylation",
  lesson: "2.04",
  tier: "likely",
  why: "Comparing how each stage makes ATP is a common test question, and it previews how photosynthesis makes ATP in the next unit.",
  html: `
<h3>The big idea</h3>
<p>Every ATP is made by attaching a phosphate to ADP (<span class="term">phosphorylation</span>). Because this is endergonic (about +30.5 kJ/mol), the energy has to come from somewhere. Cells have exactly two mechanisms. Either the phosphate is handed over directly from another molecule, or a proton gradient drives ATP synthase. The proton-gradient mechanism has two versions, depending on where the electrons get their energy.</p>

<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Substrate-level</th><th>Oxidative</th><th>Photophosphorylation (preview)</th></tr></thead>
<tbody>
<tr><td><strong>Energy source</strong></td><td>A phosphorylated substrate that holds its phosphate more loosely than ATP</td><td>Electrons from NADH and FADH<sub>2</sub> moving down the ETC</td><td>Light absorbed by chlorophyll, which excites electrons that move down an ETC</td></tr>
<tr><td><strong>How ADP gets its phosphate</strong></td><td>Transferred directly from the substrate to ADP (or GDP) by an enzyme</td><td>H<sup>+</sup> flows down its gradient through ATP synthase (chemiosmosis)</td><td>H<sup>+</sup> flows down its gradient through ATP synthase (chemiosmosis)</td></tr>
<tr><td><strong>Enzyme</strong></td><td>Kinases; succinyl-CoA synthetase</td><td>ATP synthase</td><td>ATP synthase</td></tr>
<tr><td><strong>Where (eukaryotes)</strong></td><td>Cytosol (glycolysis), mitochondrial matrix (Krebs)</td><td>Inner mitochondrial membrane (cristae)</td><td>Thylakoid membranes in chloroplasts</td></tr>
<tr><td><strong>Membrane + H<sup>+</sup> gradient?</strong></td><td>No</td><td>Yes: H<sup>+</sup> moves intermembrane space → matrix</td><td>Yes: H<sup>+</sup> moves thylakoid space → stroma</td></tr>
<tr><td><strong>Needs O<sub>2</sub>?</strong></td><td>No</td><td>Yes (O<sub>2</sub> is the final electron acceptor)</td><td>No (O<sub>2</sub> is <em>produced</em> by splitting water)</td></tr>
<tr><td><strong>ATP per glucose</strong></td><td>4 net (glycolysis 2 + Krebs 2)</td><td>Most of it: 34 of the class maximum of 38 (≈ 26–28 realistic)</td><td>Not part of respiration</td></tr>
<tr><td><strong>Examples</strong></td><td>Glycolysis steps 7 and 10; Krebs step 5</td><td>ETC + chemiosmosis</td><td>Light reactions of photosynthesis</td></tr>
</tbody></table></div>

<h3>Why substrate-level phosphorylation works</h3>
<p>Some molecules made in glycolysis hold their phosphate even more loosely than ATP does. Approximate standard free energy released when the phosphate is removed:</p>
<ul>
<li>Phosphoenolpyruvate (PEP): ≈ −62 kJ/mol</li>
<li>1,3-bisphosphoglycerate: ≈ −49 kJ/mol</li>
<li>ATP → ADP: ≈ −30.5 kJ/mol</li>
</ul>
<p>Moving a phosphate from PEP to ADP is therefore "downhill" overall, so the kinase can do it directly. This is the point of the earlier steps of glycolysis. Rearranging (step 8) and removing water (step 9) turn a modest phosphate into the very high-energy one on PEP. That is what the slides mean by "isomerize/remove water to destabilize".</p>

<h3>Oxidative and photophosphorylation are both chemiosmosis</h3>
<p>The idea that a proton gradient across a membrane powers ATP synthesis is called <span class="term">chemiosmosis</span>. It was proposed by the British biochemist Peter Mitchell in 1961. Many scientists doubted it at first, but he won the Nobel Prize in Chemistry in 1978. Mitochondria and chloroplasts use the same design: an ETC pumps H<sup>+</sup> to one side of a membrane, and ATP synthase lets them back. Bacteria, which have no mitochondria, do the same thing across their plasma membrane.</p>

<div class="callout key"><p class="callout-title">On the test</p><p>"Where is ATP made by substrate-level phosphorylation?" Answer: glycolysis steps 7 and 10, and Krebs step 5 (succinyl-CoA → succinate, via GTP). The class worksheet key also lists where phosphate is <em>added</em> (steps 1, 3, 6) and <em>removed</em> (steps 7, 10). Know both. ATP synthase is <strong>never</strong> involved in substrate-level phosphorylation.</p></div>

<div class="callout warn"><p class="callout-title">Common mistake</p><p>Saying the ETC "makes ATP". The ETC only pumps H<sup>+</sup>. ATP synthase (complex V) makes the ATP, using the gradient the ETC built.</p></div>

<details class="check"><summary>During cyanide poisoning, which kind of phosphorylation can still happen, and what has to happen for it to continue?</summary><div class="ans"><p>Only substrate-level phosphorylation in glycolysis (steps 7 and 10). Oxidative phosphorylation stops because electrons cannot reach O<sub>2</sub>. Krebs soon stops as well because NAD<sup>+</sup> and FAD are not regenerated. Glycolysis can continue only if NAD<sup>+</sup> is regenerated by lactic acid fermentation, giving just 2 ATP per glucose. That is not enough for the heart and brain.</p></div></details>
<details class="check"><summary>A bacterium has no mitochondria but does aerobic respiration. Where are its ETC and ATP synthase?</summary><div class="ans"><p>In its plasma (cell) membrane. H<sup>+</sup> is pumped out of the cytoplasm across the plasma membrane and flows back in through ATP synthase. Glycolysis and the Krebs cycle take place in the cytoplasm.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-atp-synthase",
  title: "ATP synthase: a rotary motor powered by the proton-motive force",
  lesson: "2.04",
  tier: "extra",
  why: "Explains how H<sup>+</sup> flowing through complex V actually builds ATP, why the H<sup>+</sup>-per-ATP number varies between species, and why leaks lower the yield.",
  html: `
<h3>A molecular turbine</h3>
<p>The slides show ATP synthase (complex V) as a channel that H<sup>+</sup> flows through. In fact it is a tiny <strong>rotary motor</strong>, like a water wheel turned by protons. It has two main parts:</p>
<ul>
<li><strong>F<sub>o</sub></strong> is embedded in the inner membrane. A ring of <em>c subunits</em> forms the <strong>rotor</strong>. Beside the ring, the <em>a subunit</em> forms the H<sup>+</sup> channel and stays still. (The "o" stands for oligomycin, an inhibitor that binds here. People often say "F-zero".)</li>
<li><strong>F<sub>1</sub></strong> is the knob-shaped <strong>head</strong> that sticks into the matrix. It is made of six subunits (3 α + 3 β) arranged like orange segments. The three β subunits are where ATP is made.</li>
<li>A <strong>central stalk</strong> joins the rotor to the inside of the head and spins with the rotor. A <strong>peripheral stalk</strong> (the stator) holds the head still so it cannot spin along with the rotor.</li>
</ul>

<figure class="diagram">
<svg viewBox="0 0 400 320" role="img" aria-labelledby="xa-atps-t xa-atps-d">
<title id="xa-atps-t">ATP synthase structure</title>
<desc id="xa-atps-d">H+ ions from the intermembrane space pass through the a subunit, turning the F-o rotor ring in the inner membrane. The rotor turns a central stalk inside the F1 head in the matrix, which makes ATP from ADP and phosphate. A peripheral stalk holds the head still.</desc>
<defs>
<marker id="xa-ah-h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--proton)"/></marker>
<marker id="xa-ah-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--ink)"/></marker>
</defs>
<text x="200" y="24" text-anchor="middle" font-size="13" font-family="inherit" style="fill:var(--ink)">Intermembrane space: high [H<tspan baseline-shift="super" font-size="9">+</tspan>], positive side</text>
<rect x="10" y="95" width="380" height="50" style="fill:var(--surface-2);stroke:var(--line)"/>
<text x="18" y="124" font-size="11" font-family="inherit" style="fill:var(--ink-2)">Inner membrane</text>
<rect x="140" y="92" width="110" height="56" rx="24" style="fill:var(--etc-soft);stroke:var(--etc)"/>
<text x="195" y="125" text-anchor="middle" font-size="12" font-family="inherit" style="fill:var(--ink)">F<tspan baseline-shift="sub" font-size="9">o</tspan> rotor</text>
<rect x="252" y="88" width="34" height="64" rx="6" style="fill:var(--surface);stroke:var(--ink-2)"/>
<text x="269" y="125" text-anchor="middle" font-size="12" font-family="inherit" style="fill:var(--ink)">a</text>
<text x="304" y="116" font-size="11" font-family="inherit" style="fill:var(--ink-2)">a = H<tspan baseline-shift="super" font-size="8">+</tspan> channel</text>
<rect x="187" y="148" width="16" height="60" style="fill:var(--etc);stroke:var(--etc)"/>
<text x="166" y="170" text-anchor="end" font-size="11" font-family="inherit" style="fill:var(--ink-2)">central stalk</text>
<text x="166" y="184" text-anchor="end" font-size="11" font-family="inherit" style="fill:var(--ink-2)">spins with rotor</text>
<path d="M172 178 Q195 198 218 178" style="fill:none;stroke:var(--ink)" stroke-width="1.5" marker-end="url(#xa-ah-r)"/>
<rect x="288" y="150" width="10" height="94" style="fill:var(--surface-2);stroke:var(--ink-2)"/>
<rect x="266" y="236" width="32" height="8" style="fill:var(--surface-2);stroke:var(--ink-2)"/>
<text x="304" y="196" font-size="11" font-family="inherit" style="fill:var(--ink-2)">stator stalk</text>
<text x="304" y="210" font-size="11" font-family="inherit" style="fill:var(--ink-2)">holds head still</text>
<ellipse cx="195" cy="250" rx="80" ry="40" style="fill:var(--link-soft);stroke:var(--link)"/>
<text x="195" y="245" text-anchor="middle" font-size="12" font-family="inherit" style="fill:var(--ink)">F<tspan baseline-shift="sub" font-size="9">1</tspan> head (3α + 3β)</text>
<text x="195" y="263" text-anchor="middle" font-size="12" font-family="inherit" style="fill:var(--ink)">ADP + P<tspan baseline-shift="sub" font-size="9">i</tspan> → ATP</text>
<path d="M330 56 Q290 60 274 84" style="fill:none;stroke:var(--proton)" stroke-width="2" marker-end="url(#xa-ah-h)"/>
<text x="334" y="60" font-size="12" font-family="inherit" style="fill:var(--proton)">H<tspan baseline-shift="super" font-size="9">+</tspan> in</text>
<path d="M262 155 Q256 176 238 192" style="fill:none;stroke:var(--proton)" stroke-width="2" marker-end="url(#xa-ah-h)"/>
<text x="232" y="204" text-anchor="end" font-size="12" font-family="inherit" style="fill:var(--proton)">H<tspan baseline-shift="super" font-size="9">+</tspan> out</text>
<text x="200" y="310" text-anchor="middle" font-size="13" font-family="inherit" style="fill:var(--ink)">Matrix: low [H<tspan baseline-shift="super" font-size="9">+</tspan>], negative side</text>
</svg>
<figcaption>H<sup>+</sup> flowing down its gradient turns the F<sub>o</sub> rotor. The spinning central stalk reshapes the catalytic subunits in the F<sub>1</sub> head, which join ADP + P<sub>i</sub>.</figcaption>
</figure>

<h4>How turning makes ATP</h4>
<ol class="steps">
<li><p class="step-head">H<sup>+</sup> enters</p><p>An H<sup>+</sup> from the intermembrane space enters a half-channel in the a subunit and binds to one c subunit of the ring.</p></li>
<li><p class="step-head">The ring turns</p><p>The ring turns one step. The H<sup>+</sup> rides almost a full circle and is released through a second half-channel into the matrix.</p></li>
<li><p class="step-head">The stalk squeezes the head</p><p>The lopsided central stalk turns inside the F<sub>1</sub> head and pushes on each β subunit in turn, changing its shape.</p></li>
<li><p class="step-head">Binding change</p><p>Each β subunit cycles through three shapes: <em>loose</em> (binds ADP + P<sub>i</sub>), <em>tight</em> (forces them together into ATP) and <em>open</em> (releases ATP). One full 360° turn makes <strong>3 ATP</strong>.</p></li>
</ol>
<p>This "binding change" model earned a share of the 1997 Nobel Prize in Chemistry. Your body turns over roughly its own mass in ATP every day, almost all of it through this enzyme.</p>

<h3>How many H<sup>+</sup> per ATP?</h3>
<p>In mammals the c-ring has <strong>8</strong> subunits. One turn moves 8 H<sup>+</sup> and makes 3 ATP, so about 8 ÷ 3 ≈ 2.7 H<sup>+</sup> per ATP. Roughly one more H<sup>+</sup> is spent bringing phosphate into the matrix and exporting the ATP, giving <strong>about 3–4 H<sup>+</sup> per ATP</strong> overall. The ring size varies: about 10 in yeast and <em>E. coli</em> and 14 in spinach chloroplasts. This is exactly why the slide says the number of H<sup>+</sup> needed "varies slightly among species".</p>

<h3>The proton-motive force</h3>
<p>Pumping H<sup>+</sup> stores energy in two ways at once. Together they are called the <span class="term">proton-motive force</span>. This is why class called it an <em>electrochemical</em> gradient.</p>
<ul>
<li><strong>Chemical (ΔpH):</strong> there are more H<sup>+</sup> in the intermembrane space than in the matrix. The matrix is about pH 7.8, and the intermembrane space is about one pH unit lower.</li>
<li><strong>Electrical (membrane potential):</strong> each pumped H<sup>+</sup> carries a positive charge out. The matrix side becomes negative by roughly 150–180 mV. In mitochondria, this electrical part is the larger share.</li>
</ul>
<p>Both forces push H<sup>+</sup> the same way: down the concentration gradient and toward the negative matrix.</p>

<h3>Why leaks lower the yield</h3>
<p>The system works only because the inner membrane is almost impermeable to H<sup>+</sup>. ATP synthase is meant to be the only way back in. Any H<sup>+</sup> that slips back through the lipid bilayer or another protein releases its energy as <strong>heat</strong> instead of ATP. Estimates suggest this "proton leak" may use around a fifth of resting O<sub>2</sub> consumption in some tissues. This is one reason the realistic yield (30–32 ATP) is below the 38 maximum. Brown fat makes a leak on purpose (see the uncouplers topic).</p>

<div class="callout tip"><p class="callout-title">Memory trick</p><p>F<sub>o</sub> is in the membrane (the <strong>o</strong> is like a ring lying in the membrane) and spins. F<sub>1</sub> is the head that does the <strong>one</strong> job: making ATP. The motor can also run in reverse, using ATP to pump H<sup>+</sup>. That is why it is sometimes called an ATPase.</p></div>

<details class="check"><summary>Yeast ATP synthase has 10 c subunits in its ring. Ignoring transport costs, how many H<sup>+</sup> are needed per ATP? Is this more or less efficient than in mammals?</summary><div class="ans"><p>10 H<sup>+</sup> per turn ÷ 3 ATP per turn ≈ 3.3 H<sup>+</sup> per ATP. Mammals need ≈ 2.7, so yeast gets fewer ATP from the same gradient. This is one reason ATP yields vary between species.</p></div></details>
<details class="check"><summary>Why does pumping H<sup>+</sup> make the matrix side negative, and how does that help ATP synthase?</summary><div class="ans"><p>Each H<sup>+</sup> pumped out removes a positive charge from the matrix, leaving it relatively negative. Positive H<sup>+</sup> ions are then attracted back toward the negative matrix as well as moving down their concentration gradient. Both forces drive H<sup>+</sup> through ATP synthase.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-atp-numbers",
  title: "Modern ATP numbers: P/O ratios, transport costs, and 30–32 vs 36–38",
  lesson: "2.04",
  tier: "likely",
  why: "The slides say 'max 38, realistic 30–32' without showing the math; this derives both numbers so you can explain the discrepancy (ETC review question 6).",
  html: `
<h3>Two sets of numbers</h3>
<p>Class uses <strong>NADH ≈ 3 ATP</strong> and <strong>FADH<sub>2</sub> ≈ 2 ATP</strong>, which gives a maximum of 38 ATP per glucose. Most current university textbooks use <strong>NADH ≈ 2.5</strong> and <strong>FADH<sub>2</sub> ≈ 1.5</strong>, which gives about 30–32. Both are approximate. The difference comes from counting protons carefully.</p>

<h3>Step 1: count the protons pumped</h3>
<p>Approximate H<sup>+</sup> pumped per pair of electrons:</p>
<ul>
<li>Complex I: 4 H<sup>+</sup></li>
<li>Complex III: 4 H<sup>+</sup></li>
<li>Complex IV: 2 H<sup>+</sup></li>
</ul>
<p><strong>NADH</strong> enters at complex I, so its electrons pass all three pumps: 4 + 4 + 2 = <strong>10 H<sup>+</sup></strong>. <strong>FADH<sub>2</sub></strong> enters at complex II, which is not a pump, and its electrons pass only III and IV: 4 + 2 = <strong>6 H<sup>+</sup></strong>.</p>

<h3>Step 2: count the protons spent per ATP</h3>
<p>The mammalian ATP synthase uses about 8 H<sup>+</sup> per 3 ATP (≈ 2.7 H<sup>+</sup> each). That ATP is made in the matrix but is needed in the cytosol, and moving it costs more:</p>
<ul>
<li>The <span class="term">ATP–ADP translocase</span> swaps one ATP (charge 4−) out for one ADP (charge 3−) in. Each swap moves a net negative charge out of the matrix, which uses up part of the membrane's electrical gradient.</li>
<li>The <span class="term">phosphate carrier</span> brings P<sub>i</sub> into the matrix together with one H<sup>+</sup>.</li>
</ul>
<p>Together these cost about 1 more H<sup>+</sup>, for a total of roughly <strong>4 H<sup>+</sup> per ATP</strong> delivered to the cytosol.</p>

<h3>Step 3: divide → P/O ratios</h3>
<p>The <span class="term">P/O ratio</span> is the number of ATP made per pair of electrons passed to oxygen (per O atom reduced to H<sub>2</sub>O).</p>
<div class="eq">NADH: 10 H<sup>+</sup> ÷ 4 ≈ 2.5 ATP     FADH<sub>2</sub>: 6 H<sup>+</sup> ÷ 4 ≈ 1.5 ATP</div>

<h3>Step 4: total per glucose</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Source (per glucose)</th><th>Number</th><th>Class values (3 / 2)</th><th>Modern values (2.5 / 1.5)</th></tr></thead>
<tbody>
<tr><td>Substrate-level ATP, glycolysis (net)</td><td>2</td><td>2</td><td>2</td></tr>
<tr><td>Substrate-level ATP, Krebs (via GTP)</td><td>2</td><td>2</td><td>2</td></tr>
<tr><td>NADH from glycolysis (cytosol)</td><td>2</td><td>6 (malate–aspartate) or 4 (G3P shuttle)</td><td>5 (malate–aspartate) or 3 (G3P shuttle)</td></tr>
<tr><td>NADH from pyruvate oxidation</td><td>2</td><td>6</td><td>5</td></tr>
<tr><td>NADH from Krebs</td><td>6</td><td>18</td><td>15</td></tr>
<tr><td>FADH<sub>2</sub> from Krebs</td><td>2</td><td>4</td><td>3</td></tr>
<tr><td><strong>Total</strong></td><td></td><td><strong>38</strong> (or 36)</td><td><strong>32</strong> (or 30)</td></tr>
</tbody></table></div>
<p>The shuttle matters because cytosolic NADH cannot cross the inner membrane. The <strong>malate–aspartate shuttle</strong> (liver, heart, kidney) delivers its electrons to matrix NAD<sup>+</sup>, so they still count as NADH. The <strong>glycerol-3-phosphate shuttle</strong> (skeletal muscle, brain) hands the electrons to FAD, so each cytosolic NADH is worth only as much as an FADH<sub>2</sub>. This is where the class review key's "36 ATP" comes from.</p>

<h3>So why do textbooks still say 36–38?</h3>
<ul>
<li><strong>The old "three coupling sites" model.</strong> Complexes I, III and IV were each thought to make exactly 1 ATP per electron pair. That gives NADH = 3, and FADH<sub>2</sub> (which skips complex I) = 2. Neat whole numbers.</li>
<li><strong>The structure came later.</strong> Before ATP synthase's rotor was understood, P/O ratios were assumed to be whole numbers. Careful measurements pointed to about 2.5 and 1.5. The 8-subunit mammalian rotor ring was only confirmed around 2010.</li>
<li><strong>The old count leaves out</strong> the cost of transporting ATP, ADP and P<sub>i</sub>, and it ignores proton leak.</li>
<li><strong>It is easy to teach.</strong> Whole numbers make the arithmetic simple, and many curricula and tests still use them.</li>
</ul>
<p>Even 30–32 is a ceiling. In a living cell, some H<sup>+</sup> leaks back, and the gradient also powers other jobs, such as importing pyruvate. The true average is probably a little lower.</p>

<div class="callout key"><p class="callout-title">On the test</p><p>Use the class values: NADH = 3, FADH<sub>2</sub> = 2, maximum 38 (36 with the G3P shuttle), realistic 30–32. Use 2.5 / 1.5 only if a question gives you those values or asks for modern estimates. For "why the variation?", give the reasons: shuttles, proton leak, H<sup>+</sup> per ATP varies by species, and the cost of transporting ATP/ADP/P<sub>i</sub>.</p></div>

<details class="check"><summary>How much ATP does one turn of the Krebs cycle eventually yield (3 NADH, 1 FADH<sub>2</sub>, 1 ATP), using class values and then modern values?</summary><div class="ans"><p>Class: 3 × 3 + 1 × 2 + 1 = 12 ATP. Modern: 3 × 2.5 + 1 × 1.5 + 1 = 10 ATP.</p></div></details>
<details class="check"><summary>Why does an NADH produce more ATP than an FADH<sub>2</sub>?</summary><div class="ans"><p>NADH gives its electrons to complex I, so they pass three proton pumps (I, III, IV), about 10 H<sup>+</sup>. FADH<sub>2</sub> gives its electrons to complex II, which is not a pump, so they pass only III and IV, about 6 H<sup>+</sup>. A smaller gradient means less H<sup>+</sup> flows through ATP synthase, so less ATP is made.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-uncouplers",
  title: "Uncouplers and heat: brown fat, thermogenin and DNP",
  lesson: "2.04",
  tier: "extra",
  why: "Shows what happens when the H<sup>+</sup> gradient is short-circuited, which is a real-life case of 'body heat comes from respiration not being 100% efficient'.",
  html: `
<h3>What "coupled" means</h3>
<p>Normally, electron transport and ATP synthesis are <strong>coupled</strong>, meaning linked through the H<sup>+</sup> gradient. The ETC pumps H<sup>+</sup> out, and the only way back is through ATP synthase. One consequence surprises many students: if a cell has plenty of ATP and little ADP, ATP synthase slows. H<sup>+</sup> then piles up in the intermembrane space, the gradient becomes too steep for the pumps to push against, and the ETC and O<sub>2</sub> use slow down. This is called <span class="term">respiratory control</span>. The cell burns fuel only as fast as it needs ATP.</p>
<p>An <span class="term">uncoupler</span> breaks this link. It gives H<sup>+</sup> a second route back into the matrix that bypasses ATP synthase. The ETC keeps running, often faster, and O<sub>2</sub> is used up quickly, but the gradient's energy is released as <strong>heat</strong> instead of being captured as ATP.</p>

<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Normal (coupled)</th><th>Uncoupled</th></tr></thead>
<tbody>
<tr><td>H<sup>+</sup> gradient</td><td>Strong</td><td>Weak (H<sup>+</sup> leaks back)</td></tr>
<tr><td>ETC rate and O<sub>2</sub> use</td><td>Matches ATP demand</td><td>High</td></tr>
<tr><td>ATP made</td><td>Normal</td><td>Low</td></tr>
<tr><td>NADH / NAD<sup>+</sup></td><td>Balanced</td><td>NADH used up quickly; NAD<sup>+</sup> high</td></tr>
<tr><td>Fuel burned</td><td>As needed</td><td>High (the cell keeps "trying" to make ATP)</td></tr>
<tr><td>Heat released</td><td>Some</td><td>Much more</td></tr>
</tbody></table></div>

<h3>Natural uncoupling: brown adipose tissue</h3>
<p><span class="term">Brown adipose tissue</span> (brown fat) is a special fat tissue whose job is to make heat. It looks brown because it is packed with mitochondria, whose iron-containing cytochromes are coloured. Its inner mitochondrial membranes contain <span class="term">thermogenin</span>, also called <strong>UCP1</strong> (uncoupling protein 1). This is a channel that lets H<sup>+</sup> flow back into the matrix without passing through ATP synthase.</p>
<ul>
<li><strong>How it is switched on:</strong> cold → sympathetic nerves release norepinephrine → brown fat cells break down stored fat → the released fatty acids activate UCP1 and also serve as the fuel. This is <em>non-shivering thermogenesis</em>. Shivering is different: muscles contract and hydrolyze ATP, and that releases heat.</li>
<li><strong>Newborns</strong> have brown fat between the shoulder blades, around the neck and around the kidneys. Babies have a large surface area for their mass and cannot shiver effectively, so brown fat is vital for keeping them warm.</li>
<li><strong>Hibernating mammals</strong> (for example bears, ground squirrels and bats) use brown fat to rewarm their bodies quickly when they wake.</li>
<li><strong>Adults</strong> keep small amounts, mainly in the neck and above the collarbones. Medical scans showed this in 2009. Regular cold exposure makes it more active.</li>
<li>Pigs lost a working UCP1 gene millions of years ago, which is one reason piglets are so sensitive to cold.</li>
</ul>
<p>Some plants make heat in a related way. Eastern skunk cabbage uses an alternative enzyme in its ETC that skips proton pumping. This can warm its flowers well above the air temperature and even melt snow around them.</p>

<h3>Chemical uncoupling: DNP</h3>
<p><strong>2,4-Dinitrophenol (DNP)</strong> is a fat-soluble weak acid. In the acidic intermembrane space it picks up an H<sup>+</sup>, diffuses straight across the inner membrane, and releases the H<sup>+</sup> in the matrix. It acts as a "proton ferry" (<em>protonophore</em>).</p>
<ul>
<li>During World War I, French munitions workers exposed to DNP lost weight and ran fevers.</li>
<li>In the 1930s, DNP was sold as a diet pill. It works by burning fat without making useful ATP. Users suffered dangerous overheating and cataracts, and some died. The U.S. banned it for human use in 1938.</li>
<li>It is still sold illegally online as a "fat burner", and deaths still occur. The dose that causes weight loss is close to the dose that causes fatal hyperthermia, because the body cannot switch the uncoupling off.</li>
</ul>

<div class="callout warn"><p class="callout-title">Common mistake</p><p>Do not mix up uncouplers with ETC blockers such as cyanide. Both lower ATP, but a blocker <strong>stops</strong> O<sub>2</sub> use, while an uncoupler <strong>increases</strong> O<sub>2</sub> use. Cyanide makes the body cold and short of energy. DNP makes the body hot and short of energy.</p></div>

<details class="check"><summary>Someone taking DNP breathes faster, sweats and has a high temperature, yet their cells are low on ATP. Explain each observation.</summary><div class="ans"><p>DNP carries H<sup>+</sup> back into the matrix, bypassing ATP synthase, so little ATP is made. Low ATP and high ADP signal the cell to break down more fuel, and the ETC runs flat out with nothing to slow it. This uses more O<sub>2</sub> and makes more CO<sub>2</sub>, so breathing speeds up. The gradient's energy is released as heat, which raises body temperature and causes sweating.</p></div></details>
<details class="check"><summary>Thermogenin and cyanide both lower ATP production. Why do they have opposite effects on O<sub>2</sub> consumption?</summary><div class="ans"><p>Thermogenin only lets H<sup>+</sup> leak back, so electrons still flow freely to O<sub>2</sub> and O<sub>2</sub> use rises. Cyanide blocks complex IV, so electrons can no longer reach O<sub>2</sub> and O<sub>2</sub> use falls to almost zero.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-etc-inhibitors",
  title: "ETC poisons and inhibitors: predicting the effects",
  lesson: "2.04",
  tier: "likely",
  why: "The 7 Deaths case and review question 12c test this skill: given a blocked step, predict O<sub>2</sub> use, ATP, NADH and the H<sup>+</sup> gradient.",
  html: `
<h3>The one rule you need: the traffic jam</h3>
<p>Think of the ETC as a one-way road for electrons. If one carrier is blocked:</p>
<ul>
<li>Everything <strong>before</strong> the block fills up with electrons and stays <strong>reduced</strong>. NADH builds up, NAD<sup>+</sup> runs out, and Krebs and pyruvate oxidation stall.</li>
<li>Everything <strong>after</strong> the block runs empty and stays <strong>oxidized</strong>.</li>
<li>Pumping stops, so the <strong>H<sup>+</sup> gradient collapses</strong> and ATP synthase stops.</li>
<li>Electrons no longer reach the end of the chain, so <strong>O<sub>2</sub> use drops</strong>.</li>
</ul>
<p>This is exactly the reasoning in the 7 Deaths case. NADH was very high (400 vs 50 µM) and NAD<sup>+</sup> very low (10 vs 75 µM), so electrons were stuck <em>downstream</em> of NADH, in the ETC.</p>

<h3>Inhibitor summary</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Agent</th><th>Target</th><th>O<sub>2</sub> use</th><th>ATP made</th><th>NADH</th><th>H<sup>+</sup> gradient</th></tr></thead>
<tbody>
<tr><td><strong>Rotenone</strong> (plant-based pesticide and fish poison)</td><td>Complex I (blocks the I → Q step)</td><td>↓ (the FADH<sub>2</sub> route still works)</td><td>↓</td><td>↑</td><td>↓</td></tr>
<tr><td><strong>Malonate</strong> (lab inhibitor)</td><td>Complex II / succinate dehydrogenase (competitive)</td><td>↓ slightly</td><td>↓ slightly</td><td>about the same</td><td>↓ slightly</td></tr>
<tr><td><strong>Antimycin A</strong> (made by <em>Streptomyces</em> bacteria)</td><td>Complex III</td><td>↓↓ (both routes blocked)</td><td>↓↓</td><td>↑</td><td>↓↓</td></tr>
<tr><td><strong>Cyanide (CN<sup>−</sup>), carbon monoxide (CO), azide (N<sub>3</sub><sup>−</sup>)</strong></td><td>Complex IV (cytochrome c oxidase): binds where O<sub>2</sub> should bind</td><td>≈ 0</td><td>↓↓</td><td>↑↑</td><td>collapses</td></tr>
<tr><td><strong>Oligomycin</strong> (antibiotic)</td><td>ATP synthase (blocks the F<sub>o</sub> H<sup>+</sup> channel)</td><td>↓↓ (see below)</td><td>↓↓</td><td>↑</td><td>↑ (maximal)</td></tr>
<tr><td><strong>DNP</strong> (uncoupler)</td><td>Inner membrane (carries H<sup>+</sup> back in)</td><td>↑</td><td>↓↓</td><td>↓ (NAD<sup>+</sup> ↑)</td><td>↓↓</td></tr>
</tbody></table></div>
<p>Arrows show the direction of change compared with normal. Exact amounts depend on the dose.</p>

<h3>The tricky one: oligomycin</h3>
<p>Oligomycin does not touch the ETC at all, yet O<sub>2</sub> use still drops. With ATP synthase blocked, H<sup>+</sup> cannot get back into the matrix. The gradient builds until the pumps cannot push any more H<sup>+</sup> against it, and electron flow (and O<sub>2</sub> use) nearly stops. This shows that the ETC and ATP synthesis are <strong>coupled</strong> by the gradient.</p>
<p>A classic experiment proves it:</p>
<ol class="steps">
<li><p class="step-head">Mitochondria + fuel + ADP</p><p>O<sub>2</sub> is consumed and ATP is made.</p></li>
<li><p class="step-head">Add oligomycin</p><p>ATP synthesis stops, and O<sub>2</sub> use soon nearly stops as well.</p></li>
<li><p class="step-head">Add DNP</p><p>O<sub>2</sub> use restarts, because H<sup>+</sup> now has a way back in, but <strong>no ATP</strong> is made. The ETC was never broken; it was only backed up by the gradient.</p></li>
</ol>

<h3>Notes on the complex IV poisons</h3>
<ul>
<li><strong>Cyanide</strong> works within minutes. The heart and brain, which need the most ATP, fail first. Blood O<sub>2</sub> stays <em>high</em> because tissues stop taking O<sub>2</sub> out of the blood. (In the case study, 110 mm Hg is the <em>partial pressure of O<sub>2</sub></em> in the blood, not blood pressure.) Giving extra O<sub>2</sub> does not help much, because the problem is using O<sub>2</sub>, not delivering it. Hospitals use antidotes instead. One is <em>hydroxocobalamin</em>, a form of vitamin B12 that grabs cyanide so it can be excreted. Another is <em>sodium thiosulfate</em>, which helps a liver enzyme convert cyanide into less toxic thiocyanate.</li>
<li><strong>Carbon monoxide</strong> also blocks complex IV, but its main danger is binding hemoglobin about 200 times more tightly than O<sub>2</sub>. So, unlike cyanide, CO <em>lowers</em> the blood's O<sub>2</sub> content. High-pressure (hyperbaric) O<sub>2</sub> treatment helps push CO off hemoglobin.</li>
<li><strong>Hydrogen sulfide</strong> (H<sub>2</sub>S, the "rotten egg" gas) and <strong>azide</strong> act at complex IV in a similar way.</li>
</ul>

<div class="callout key"><p class="callout-title">On the test</p><p>For any "what if X is blocked?" question, answer in this order: (1) which carriers stay reduced or oxidized, (2) the gradient, (3) ATP, (4) O<sub>2</sub> use, (5) knock-on effects on Krebs and glycolysis (NAD<sup>+</sup> and FAD run out, so Krebs stops; glycolysis continues only with fermentation). Review question 12c, "ubiquinone blocked", is answered the same way: NADH and FADH<sub>2</sub> cannot be oxidized, so the ETC stops.</p></div>

<details class="check"><summary>Isolated mitochondria are given oligomycin. Predict O<sub>2</sub> consumption and explain.</summary><div class="ans"><p>O<sub>2</sub> consumption drops sharply. With ATP synthase blocked, H<sup>+</sup> cannot flow back into the matrix, so the gradient becomes so steep that the pumps (I, III, IV) cannot keep working. Electron flow to O<sub>2</sub> slows to nearly zero even though no ETC protein is damaged.</p></div></details>
<details class="check"><summary>Cells poisoned with rotenone are supplied with succinate. Can they still use O<sub>2</sub> and make some ATP?</summary><div class="ans"><p>Yes, at a reduced rate. Rotenone blocks only complex I. Succinate is oxidized by complex II, making FADH<sub>2</sub>, which passes electrons to Q → III → cytochrome c → IV → O<sub>2</sub>. Complexes III and IV still pump H<sup>+</sup>, so some ATP is made (about 2 per FADH<sub>2</sub> using class values), but NADH cannot be used.</p></div></details>
`
});
