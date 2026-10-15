/* Class questions & answers: every question the class was given in Unit 2, with model answers.
   Answer keys from class are the authority for what earns marks; notes flag where a fuller answer helps. */
window.QA = [

  /* ------------------------------------------------------------------ 1 */
  {
    id: "qa-201",
    title: "Intro to Metabolism: review & application",
    lesson: "2.01",
    source: "Lesson 2.01 slides (Review & Application Questions) and the class answer key",
    items: [
      {
        tier: "essential",
        q: "Is cellular respiration anabolic or catabolic?",
        a: `<p><strong>Catabolic.</strong> Cellular respiration breaks a large, energy-rich molecule (glucose, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) down into small, low-energy molecules (CO<sub>2</sub> and H<sub>2</sub>O). Breaking molecules down is catabolism. It is exergonic: it releases free energy, and the cell captures some of that energy in ATP.</p>
<p>Anabolic reactions are the opposite. They build larger molecules from smaller ones (for example, joining amino acids into a protein) and are endergonic, so they need energy. Metabolism is the sum of both kinds of reactions.</p>
<p>Respiration releases glucose's energy in many small, controlled steps, each with a small activation energy, instead of all at once as burning does. That is how the energy can be captured by electron carriers and ATP instead of being lost as heat.</p>`
      },
      {
        tier: "essential",
        q: "How are ATP and ADP linked?",
        a: `<p>ATP and ADP are the "charged" and "uncharged" forms of the same energy carrier. A cell turns one into the other by removing or adding one phosphate group.</p>
<ul>
<li><strong>ATP</strong> (adenosine triphosphate) = adenine + ribose + <strong>three</strong> phosphate groups. All three phosphates are negatively charged and repel each other, so the bond to the third (terminal) phosphate is unstable and holds a lot of energy. ATP is the "fully charged battery".</li>
<li>When a cell needs energy for work (muscle contraction, active transport, building a protein), <strong>ATPase</strong> catalyzes <strong>hydrolysis</strong> of that terminal phosphate. This releases energy (exergonic).</li>
</ul>
<div class="eq">ATP → ADP + P<sub>i</sub> + energy</div>
<ul>
<li><strong>ADP</strong> (adenosine diphosphate) has only two phosphates. It is the "dead battery" waiting to be recharged.</li>
<li>ADP is recharged by adding an inorganic phosphate back on (phosphorylation). That synthesis is endergonic, so it has to be coupled to an exergonic process: the breakdown of glucose in cellular respiration.</li>
</ul>
<div class="eq">ADP + P<sub>i</sub> + energy (from respiration) → ATP</div>
<p>This back-and-forth is the ATP–ADP cycle. ATP carries energy from catabolic reactions that release it to the reactions that need it.</p>`
      },
      {
        tier: "essential",
        q: "What is a REDOX reaction? The slide shows FAD + 2H<sup>+</sup> + 2e<sup>−</sup> ⇌ FADH<sub>2</sub>. Which reaction (forward or reverse) is a reduction and which is an oxidation? Why?",
        a: `<p>A <span class="term">redox reaction</span> transfers electrons from one reactant to another. One substance loses electrons (<strong>oxidation</strong>) and another gains them (<strong>reduction</strong>). The two always happen together, because an electron that is lost has to go somewhere.</p>
<div class="eq">FAD + 2H<sup>+</sup> + 2e<sup>−</sup> ⇌ FADH<sub>2</sub></div>
<ul>
<li><strong>Forward reaction = reduction.</strong> FAD gains 2 electrons (along with 2 H<sup>+</sup>) and becomes FADH<sub>2</sub>.</li>
<li><strong>Reverse reaction = oxidation.</strong> FADH<sub>2</sub> loses those 2 electrons (and 2 H<sup>+</sup>) and goes back to FAD.</li>
</ul>
<p>Remember <strong>LEO the lion says GER</strong>: Lose Electrons = Oxidation, Gain Electrons = Reduction. A useful biology shortcut is that gaining hydrogen (along with its electrons) usually means reduction, and losing hydrogen means oxidation.</p>
<p>In the forward reaction FAD is the <em>oxidizing agent</em>: it accepts electrons from another molecule. In the reverse reaction FADH<sub>2</sub> is the <em>reducing agent</em>: it donates electrons.</p>
<p>In respiration, FAD is reduced to FADH<sub>2</sub> in the Krebs cycle (succinate → fumarate). FADH<sub>2</sub> is later oxidized back to FAD at the electron transport chain, where it hands its electrons to complex II.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 2 */
  {
    id: "qa-202",
    title: "Glycolysis: review & application",
    lesson: "2.02",
    source: "Lesson 2.02 slides (Review & Application Questions) and the class answer key",
    items: [
      {
        tier: "essential",
        q: "What are the products of glycolysis?",
        a: `<p>Per molecule of glucose:</p>
<div class="tally"><span class="chip">2 pyruvate</span><span class="chip atp">2 ATP (net)</span><span class="chip nadh">2 NADH</span></div>
<ul>
<li><strong>2 pyruvate</strong>: glucose (6 C) is split into two 3-carbon molecules.</li>
<li><strong>Net 2 ATP</strong>: 2 ATP are invested in steps 1 and 3, and 4 ATP are made by substrate-level phosphorylation in steps 7 and 10. 4 − 2 = net 2.</li>
<li><strong>2 NADH</strong>: high-energy electron carriers made in step 6. With oxygen present, they take their electrons to the electron transport chain.</li>
</ul>
<p>Glycolysis also releases 2 H<sub>2</sub>O (step 9). It produces <strong>no CO<sub>2</sub></strong> and uses <strong>no O<sub>2</sub></strong>.</p>`
      },
      {
        tier: "likely",
        q: "Is the mitochondrion \"the powerhouse of the cell\"? Defend your answer.",
        a: `<p>Answers can vary. Full marks go to a clear position backed by evidence. A strong answer is <strong>"mostly yes, with limits."</strong></p>
<p><strong>Evidence for:</strong> pyruvate oxidation, the Krebs cycle and the electron transport chain all happen in the mitochondrion. Together they make about 34 of the 36–38 ATP per glucose, roughly 90% of the ATP (class numbers). Most of that comes from oxidative phosphorylation on the inner membrane. Without mitochondria, a cell gets only 2 ATP per glucose.</p>
<p><strong>Limits:</strong></p>
<ul>
<li>Glycolysis happens in the <strong>cytoplasm</strong>, not the mitochondrion, and makes ATP there (net 2). So not all ATP comes from mitochondria.</li>
<li>Some cells have no mitochondria but still make ATP, such as mature red blood cells (glycolysis only) and all prokaryotes.</li>
<li>Mitochondria do not create energy. They <em>convert</em> chemical energy stored in glucose into ATP, and they need glycolysis to supply pyruvate and oxygen to accept electrons.</li>
</ul>
<p>Conclusion: the mitochondrion is the cell's main ATP-producing organelle, but not its only source of ATP.</p>`
      },
      {
        tier: "essential",
        q: "Which of the reactants/products of cellular respiration are used/produced in glycolysis?",
        a: `<div class="eq">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + ATP</div>
<div class="table-wrap"><table class="data">
<thead><tr><th>Substance in the overall equation</th><th>In glycolysis?</th></tr></thead>
<tbody>
<tr><td>Glucose (reactant)</td><td><strong>Yes, used.</strong> It is the only reactant glycolysis uses. It is split into 2 pyruvate.</td></tr>
<tr><td>O<sub>2</sub> (reactant)</td><td><strong>No.</strong> Glycolysis is anaerobic. O<sub>2</sub> is used only at the end of the ETC.</td></tr>
<tr><td>CO<sub>2</sub> (product)</td><td><strong>No.</strong> No carbon is lost yet. CO<sub>2</sub> comes from pyruvate oxidation and the Krebs cycle.</td></tr>
<tr><td>H<sub>2</sub>O (product)</td><td><strong>2 H<sub>2</sub>O</strong> are made (step 9, when water is removed from 2-phosphoglycerate).</td></tr>
<tr><td>ATP (product)</td><td><strong>Net 2 ATP</strong>, only a small fraction of the total.</td></tr>
</tbody></table></div>`,
        note: "The 6 H<sub>2</sub>O in the overall equation are made mainly at the ETC, when O<sub>2</sub> accepts electrons. The 2 H<sub>2</sub>O from glycolysis are a side detail. The \"Follow That Glucose!\" key counts only glucose as accounted for by glycolysis."
      }
    ]
  },

  /* ------------------------------------------------------------------ 3 */
  {
    id: "qa-202-ws",
    title: "Glycolysis worksheet: the glycolytic pathway",
    lesson: "2.02",
    source: "Nelson worksheet LSM 2.2-2 \"Glycolytic Pathway\" and its solution key",
    items: [
      {
        tier: "likely",
        q: "Fill in the molecule names A to F on the glycolysis diagram.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Label</th><th>Molecule</th><th>Carbons</th><th>How it is made</th></tr></thead>
<tbody>
<tr><td>A</td><td><strong>glucose</strong></td><td>6</td><td>Starting molecule</td></tr>
<tr><td>B</td><td><strong>glucose-6-phosphate</strong></td><td>6</td><td>Step 1: hexokinase adds a phosphate from ATP</td></tr>
<tr><td>C</td><td><strong>fructose-6-phosphate</strong></td><td>6</td><td>Step 2: rearranged into an isomer</td></tr>
<tr><td>D</td><td><strong>1,3-bisphosphoglycerate</strong></td><td>3 (×2)</td><td>Step 6: G3P is oxidized (NAD<sup>+</sup> → NADH) and an inorganic phosphate is added</td></tr>
<tr><td>E</td><td><strong>phosphoenolpyruvate (PEP)</strong></td><td>3 (×2)</td><td>Step 9: water removed</td></tr>
<tr><td>F</td><td><strong>pyruvate</strong></td><td>3 (×2)</td><td>Step 10: last phosphate transferred to ADP → ATP</td></tr>
</tbody></table></div>
<p>The unlabelled molecules in between are fructose-1,6-bisphosphate (after step 3), DHAP + G3P (after step 4), 3-phosphoglycerate (after step 7) and 2-phosphoglycerate (after step 8).</p>`
      },
      {
        tier: "likely",
        q: "Glucose activation: \"During the first four steps of glycolysis, ____ are transferred to ____ via ____, where ____ is converted to ____. The end product is ____.\"",
        a: `<p>During the first four steps of glycolysis, <strong>two phosphate groups</strong> are transferred to <strong>glucose</strong> via <strong>phosphorylation</strong>, where <strong>ATP</strong> is converted to <strong>ADP</strong>. The end product is <strong>fructose-1,6-bisphosphate</strong>.</p>
<p>Why: glucose is very stable. Adding two negatively charged phosphates destabilizes it so its energy can be harvested. The first phosphate also traps glucose inside the cell. This is the energy investment: 2 ATP are spent.</p>`,
        note: "In the class 10-step numbering, the phosphates are added in step 1 (hexokinase) and step 3 (phosphofructokinase), and fructose-1,6-bisphosphate is the product of step 3. Step 4 is the split."
      },
      {
        tier: "likely",
        q: "Sugar splitting: \"____ gets split into two fragments, ____ and ____. ____ then gets converted into ____.\"",
        a: `<p><strong>Fructose-1,6-bisphosphate</strong> gets split into two fragments, <strong>dihydroxyacetone phosphate (DHAP)</strong> and <strong>glyceraldehyde-3-phosphate (G3P)</strong>. <strong>DHAP</strong> then gets converted into <strong>G3P</strong>.</p>
<p>Step 4 (aldolase) splits the 6-carbon sugar into two 3-carbon sugars. Step 5 (triose phosphate isomerase) rearranges DHAP into its isomer G3P. Only G3P can continue, so after step 5 there are <strong>2 G3P</strong>, and every later step happens twice per glucose.</p>`
      },
      {
        tier: "likely",
        q: "Oxidation: \"Both molecules of ____ become oxidized using ____, which becomes ____. This process releases ____, which is used to attach ____ to the sugars, making them ____.\"",
        a: `<p>Both molecules of <strong>G3P</strong> become oxidized using <strong>NAD<sup>+</sup></strong>, which becomes <strong>NADH</strong>. This process releases <strong>energy</strong>, which is used to attach <strong>phosphates</strong> to the sugars, making them <strong>1,3-bisphosphoglycerate</strong>.</p>
<p>This is step 6 (glyceraldehyde-3-phosphate dehydrogenase), the redox step of glycolysis. G3P loses electrons (oxidized) and NAD<sup>+</sup> gains them (reduced). The phosphate added here is <em>inorganic</em> phosphate (P<sub>i</sub>) from the cytoplasm's "cellular pool", not from ATP. Result: 2 NADH per glucose.</p>`,
        note: "The worksheet writes \"NAD\". The correct form of the oxidized carrier is NAD<sup>+</sup>."
      },
      {
        tier: "likely",
        q: "Formation of ATP: \"During the last four steps of glycolysis, the ____ groups of the molecules are transferred to ____, creating ____. This is done via the process of ____.\"",
        a: `<p>During the last four steps of glycolysis, the <strong>phosphate</strong> groups of the molecules are transferred to <strong>ADP</strong>, creating <strong>ATP</strong>. This is done via the process of <strong>substrate-level phosphorylation</strong>.</p>
<p>Substrate-level phosphorylation means ATP is made directly in an enzyme-catalyzed reaction: an enzyme moves a phosphate from a substrate straight onto ADP. It happens at <strong>step 7</strong> (1,3-bisphosphoglycerate → 3-phosphoglycerate, phosphoglycerate kinase) and <strong>step 10</strong> (PEP → pyruvate, pyruvate kinase). Each runs twice per glucose: 4 ATP made, net 2.</p>`
      },
      {
        tier: "likely",
        q: "On the diagram, where is ATP used, where is ATP made, and where is NADH made? Why is there a \"2\" beside every molecule from D onward?",
        a: `<ul>
<li><strong>ATP → ADP (ATP used):</strong> glucose → glucose-6-phosphate (step 1) and fructose-6-phosphate → fructose-1,6-bisphosphate (step 3). Total 2 ATP used.</li>
<li><strong>NAD<sup>+</sup> → NADH:</strong> G3P → 1,3-bisphosphoglycerate (step 6), ×2 = 2 NADH.</li>
<li><strong>ADP → ATP (ATP made):</strong> 1,3-bisphosphoglycerate → 3-phosphoglycerate (step 7) and PEP → pyruvate (step 10), each ×2 = 4 ATP.</li>
</ul>
<p>The "2": once fructose-1,6-bisphosphate is split and DHAP is turned into G3P, one glucose has become <strong>two</strong> identical 3-carbon molecules. Every step from G3P to pyruvate therefore happens twice per glucose. That is why 1 glucose gives 2 pyruvate, 2 NADH and 4 ATP from the payoff phase.</p>
<p>The legend (carbon, oxygen and phosphate balls) lets you check: count 6 carbons on each sugar at the top, and 3 carbons on each molecule after the split.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 4 */
  {
    id: "qa-203-check",
    title: "Pyruvate oxidation & Krebs: quiz time and quick check",
    lesson: "2.03",
    source: "Lesson 2.03 slides (\"Quiz Time!\" recap and \"Quick Check\"), with answers given in class",
    items: [
      {
        tier: "essential",
        q: "Quiz time: Was oxygen required for glycolysis?",
        a: `<p><strong>No. Glycolysis is anaerobic</strong>: none of its 10 steps uses O<sub>2</sub>. It happens in the cytoplasm of every cell, whether oxygen is present or not. Oxygen only decides what happens to the pyruvate and NADH <em>afterward</em> (aerobic respiration or fermentation).</p>`
      },
      {
        tier: "essential",
        q: "Quiz time: How much ATP is produced (NET) from glycolysis?",
        a: `<p><strong>Net 2 ATP</strong> per glucose. 4 ATP are made by substrate-level phosphorylation (steps 7 and 10, each twice), minus the 2 ATP invested in steps 1 and 3.</p>`
      },
      {
        tier: "essential",
        q: "Quiz time: What are the products of glycolysis?",
        a: `<div class="tally"><span class="chip">2 pyruvate</span><span class="chip nadh">2 NADH</span><span class="chip atp">2 ATP (net)</span></div>
<p>(Also 2 H<sub>2</sub>O. No CO<sub>2</sub> yet.)</p>`
      },
      {
        tier: "essential",
        q: "Quiz time: Does the process NAD<sup>+</sup> → NADH represent an oxidation or a reduction? How can you tell?",
        a: `<p><strong>Reduction.</strong> NAD<sup>+</sup> <em>gains</em> electrons. LEO the lion says GER: Gain Electrons = Reduction. After gaining the electrons, the carrier also picks up hydrogen and its positive charge is cancelled, which is why NAD<sup>+</sup> becomes NADH.</p>
<p>Clues you can see: the charge drops from + to neutral (gaining negative electrons) and the molecule gains an H. NAD<sup>+</sup> is the oxidized, "empty" carrier; NADH is the reduced, "full" carrier.</p>`,
        note: "The class answer says NAD<sup>+</sup> \"gained an electron which then attracted the H<sup>+</sup>\". More precisely, NAD<sup>+</sup> gains <strong>two</strong> electrons and one hydrogen; the second H<sup>+</sup> is released into solution. That is why it is often written NADH + H<sup>+</sup>."
      },
      {
        tier: "essential",
        q: "Quick check: How many molecules of NADH, FADH<sub>2</sub>, ATP and CO<sub>2</sub> does the Krebs cycle produce per acetyl molecule, and per glucose molecule?",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Product</th><th>Per acetyl-CoA (one turn)</th><th>Per glucose (two turns)</th></tr></thead>
<tbody>
<tr><td>NADH</td><td>3</td><td>6</td></tr>
<tr><td>FADH<sub>2</sub></td><td>1</td><td>2</td></tr>
<tr><td>ATP</td><td>1</td><td>2</td></tr>
<tr><td>CO<sub>2</sub></td><td>2</td><td>4</td></tr>
</tbody></table></div>
<p>Per glucose is always double, because one glucose → 2 pyruvate → 2 acetyl-CoA, and the cycle turns once for each acetyl-CoA.</p>`,
        note: "Pyruvate oxidation is not part of the cycle. Its 2 NADH and 2 CO<sub>2</sub> per glucose are counted separately."
      },
      {
        tier: "essential",
        q: "Quick check: How many redox reactions occur in the Krebs cycle? Where? Are they reductions or oxidations?",
        a: `<p><strong>4 per turn</strong> (8 per glucose): <strong>3 reduce NAD<sup>+</sup></strong> and <strong>1 reduces FAD</strong>.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Step</th><th>Reaction</th><th>Reduced</th><th>Oxidized</th><th>Also released</th></tr></thead>
<tbody>
<tr><td>3</td><td>isocitrate → α-ketoglutarate</td><td>NAD<sup>+</sup> → NADH</td><td>isocitrate</td><td>CO<sub>2</sub></td></tr>
<tr><td>4</td><td>α-ketoglutarate → succinyl-CoA</td><td>NAD<sup>+</sup> → NADH</td><td>α-ketoglutarate</td><td>CO<sub>2</sub></td></tr>
<tr><td>6</td><td>succinate → fumarate</td><td>FAD → FADH<sub>2</sub></td><td>succinate</td><td>–</td></tr>
<tr><td>8</td><td>malate → oxaloacetate</td><td>NAD<sup>+</sup> → NADH</td><td>malate</td><td>–</td></tr>
</tbody></table></div>
<p>Each one is <em>both</em> a reduction and an oxidation. The electron carrier (NAD<sup>+</sup> or FAD) is <strong>reduced</strong>, and the Krebs intermediate that gives up the electrons is <strong>oxidized</strong>.</p>`
      },
      {
        tier: "likely",
        q: "Quick check: Where does the isomerization reaction occur in the Krebs cycle?",
        a: `<p><strong>Step 2: citrate (citric acid) → isocitrate.</strong> Both have 6 carbons and the same formula. Only the arrangement changes: an –OH group moves to a different carbon. This sets up isocitrate to be oxidized and decarboxylated in step 3.</p>`
      },
      {
        tier: "essential",
        q: "Quick check: Where does substrate-level phosphorylation occur in the Krebs cycle?",
        a: `<p><strong>Step 5: succinyl-CoA → succinate.</strong> Removing CoA releases energy. That energy attaches P<sub>i</sub> to GDP, making GTP, which passes its phosphate to ADP → <strong>ATP</strong>. In short, ADP → ATP. It happens once per turn, so 2 ATP per glucose.</p>
<p>This ATP is made directly by an enzyme, not by ATP synthase, so it is substrate-level phosphorylation (the same process as glycolysis steps 7 and 10).</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 5 */
  {
    id: "qa-203-review",
    title: "Krebs cycle: review & research",
    lesson: "2.03",
    source: "Lesson 2.03 slides (Review & Research Questions) and the class answer key",
    items: [
      {
        tier: "likely",
        q: "How do fatty acids and proteins enter the Krebs cycle?",
        a: `<p>Key answer: <strong>they can be converted into acetyl-CoA</strong>, which enters the cycle by joining oxaloacetate.</p>
<ul>
<li><strong>Fatty acids</strong> (from fats) are broken down by <span class="term">β-oxidation</span> in the mitochondrial matrix. Each round cuts off a 2-carbon piece as <strong>acetyl-CoA</strong> and also makes NADH and FADH<sub>2</sub>. The glycerol part of a fat is converted to DHAP/G3P and enters <em>glycolysis</em> instead.</li>
<li><strong>Proteins</strong> are hydrolyzed into amino acids. In the liver, the amino group is removed (<span class="term">deamination</span>, producing ammonia, which becomes urea). The remaining carbon skeleton enters as <strong>pyruvate</strong> (e.g. alanine), <strong>acetyl-CoA</strong> (e.g. leucine), or directly as a <strong>Krebs intermediate</strong> (e.g. glutamate → α-ketoglutarate).</li>
</ul>`
      },
      {
        tier: "likely",
        q: "If the Krebs cycle is overstimulated, the body will produce too much of which molecule: carbon dioxide, glucose, pyruvate, acetyl-CoA, or oxygen?",
        a: `<p><strong>Carbon dioxide.</strong> CO<sub>2</sub> is a product of the Krebs cycle: 2 per turn, released at steps 3 and 4. Running the cycle faster releases more CO<sub>2</sub>.</p>
<p>Why not the others: pyruvate and acetyl-CoA are <em>inputs</em> that would be used up faster, not built up. Glucose is not made by the Krebs cycle. Oxygen is not produced anywhere in respiration; it is <em>consumed</em> at the ETC.</p>`
      },
      {
        tier: "likely",
        q: "Acetyl-CoA is a reactant in the citric acid cycle, while NADH and FADH<sub>2</sub> are products. If 12 molecules of FADH<sub>2</sub> are produced over a period of time, how many molecules of NADH are produced?",
        a: `<p><strong>36 NADH.</strong></p>
<p>Each turn of the cycle makes <strong>1 FADH<sub>2</sub></strong> and <strong>3 NADH</strong>. 12 FADH<sub>2</sub> means 12 turns, and 12 turns × 3 NADH = 36 NADH. (12 turns also used 12 acetyl-CoA, which came from 6 glucose.)</p>`,
        note: "The class key's explanation says \"1 FADH<sub>2</sub> and 2 NADH\" per turn, which is a typo. Its answer of 36 uses the correct ratio of 3 NADH : 1 FADH<sub>2</sub>."
      },
      {
        tier: "essential",
        q: "What is the difference between a cyclic pathway and a linear pathway? Classify glycolysis and the Krebs cycle.",
        a: `<ul>
<li><strong>Cyclic pathway:</strong> the end product is the same molecule as the starting reactant, so it is regenerated and reused each turn. Only the material fed in (here, acetyl-CoA) is used up.</li>
<li><strong>Linear pathway:</strong> a starting molecule is converted step by step into a different end product, which leaves the pathway and goes somewhere else. The starting molecule must be supplied again each time.</li>
</ul>
<p><strong>Glycolysis is linear</strong>: glucose goes in, pyruvate comes out and leaves (to the mitochondrion or fermentation).</p>
<p><strong>The Krebs cycle is cyclic</strong>: oxaloacetate is both the start and the end. It combines with acetyl-CoA to make citrate and is regenerated at step 8. CoA is also recycled.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 6 */
  {
    id: "qa-203-ws",
    title: "Krebs cycle worksheet",
    lesson: "2.03",
    source: "Nelson worksheet LSM 2.2-4 \"The Krebs Cycle\" and its solution key",
    items: [
      {
        tier: "likely",
        q: "Pyruvate oxidation: \"____ enters the mitochondrion from the cytoplasm. One ____ atom is removed via ____ and ____ is removed using ____. ____ becomes attached to the remaining ____ atoms, creating ____, which then enters the Krebs cycle.\"",
        a: `<p><strong>Pyruvate</strong> enters the mitochondrion from the cytoplasm. One <strong>carbon</strong> atom is removed via <strong>decarboxylation</strong> and <strong>hydrogen</strong> is removed using <strong>NAD<sup>+</sup></strong>. <strong>Coenzyme A</strong> becomes attached to the remaining <strong>carbon</strong> atoms, creating <strong>acetyl-CoA</strong>, which then enters the Krebs cycle.</p>
<p>The three events are catalyzed by the pyruvate dehydrogenase complex in the matrix:</p>
<ol>
<li>CO<sub>2</sub> is removed (3 C → 2 C).</li>
<li>The remaining fragment is oxidized: NAD<sup>+</sup> → NADH.</li>
<li>CoA attaches to the 2-carbon acetyl group, forming acetyl-CoA.</li>
</ol>
<p>Per glucose: 2 CO<sub>2</sub>, 2 NADH, 2 acetyl-CoA.</p>`
      },
      {
        tier: "likely",
        q: "Krebs cycle: \"____ enters the cycle and then combines with ____ to make the six-carbon compound ____. During the eight steps of the Krebs cycle, ____ undergoes a number of reactions, releasing ____ and ____ in a number of steps. ____ is eventually converted into ____ so it can be used again during the Krebs cycle.\"",
        a: `<p><strong>Acetyl-CoA</strong> enters the cycle and then combines with <strong>oxaloacetate</strong> to make the six-carbon compound <strong>citrate</strong>. During the eight steps of the Krebs cycle, <strong>citrate</strong> undergoes a number of reactions, releasing <strong>CO<sub>2</sub></strong> and <strong>ATP</strong> in a number of steps. <strong>Citrate</strong> is eventually converted into <strong>oxaloacetate</strong> so it can be used again during the Krebs cycle.</p>
<p>Carbon count: acetyl (2 C) + oxaloacetate (4 C) = citrate (6 C). Two CO<sub>2</sub> leave (6 → 5 → 4 C), and the 4-carbon molecules are rearranged back into oxaloacetate.</p>`,
        note: "Along with CO<sub>2</sub> and ATP, each turn also makes 3 NADH and 1 FADH<sub>2</sub>. Those carry most of the captured energy."
      },
      {
        tier: "likely",
        q: "Products of the Krebs cycle: (1) ____ is released as waste. (2) ____ and ____ move to the next stage of cellular respiration. (3) Energy is released in the form of ____. A glucose molecule produces ____ molecules of ____ because two molecules of ____ are created from each molecule of ____.",
        a: `<ol>
<li><strong>CO<sub>2</sub></strong> is released as waste. It diffuses out of the cell and is exhaled.</li>
<li><strong>NADH</strong> and <strong>FADH<sub>2</sub></strong> move to the next stage of cellular respiration, the electron transport chain.</li>
<li>Energy is released in the form of <strong>ATP</strong>. A glucose molecule produces <strong>two</strong> molecules of <strong>ATP</strong> because two molecules of <strong>pyruvate</strong> are created from each molecule of <strong>glucose</strong>.</li>
</ol>`
      },
      {
        tier: "likely",
        q: "Fill in the molecules created or released at each step of the Krebs cycle diagram.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Step</th><th>Reaction (carbons)</th><th>Goes in / comes out</th></tr></thead>
<tbody>
<tr><td>Link step</td><td>pyruvate (3) → acetyl-CoA (2)</td><td>NAD<sup>+</sup> → <strong>NADH</strong>; <strong>CO<sub>2</sub></strong> released; CoA attached</td></tr>
<tr><td>1</td><td>acetyl-CoA (2) + oxaloacetate (4) → citrate (6)</td><td><strong>CoA–SH</strong> released (recycled)</td></tr>
<tr><td>2</td><td>citrate (6) → isocitrate (6)</td><td>Isomerization, nothing released</td></tr>
<tr><td>3</td><td>isocitrate (6) → α-ketoglutarate (5)</td><td><strong>CO<sub>2</sub></strong>; NAD<sup>+</sup> → <strong>NADH</strong></td></tr>
<tr><td>4</td><td>α-ketoglutarate (5) → succinyl-CoA (4)</td><td><strong>CO<sub>2</sub></strong>; NAD<sup>+</sup> → <strong>NADH</strong>; CoA–SH added</td></tr>
<tr><td>5</td><td>succinyl-CoA (4) → succinate (4)</td><td>CoA–SH released; GDP + P<sub>i</sub> → <strong>GTP</strong>, then ADP → <strong>ATP</strong></td></tr>
<tr><td>6</td><td>succinate (4) → fumarate (4)</td><td>FAD → <strong>FADH<sub>2</sub></strong></td></tr>
<tr><td>7</td><td>fumarate (4) → malate (4)</td><td>H<sub>2</sub>O added</td></tr>
<tr><td>8</td><td>malate (4) → oxaloacetate (4)</td><td>NAD<sup>+</sup> → <strong>NADH</strong>; oxaloacetate regenerated</td></tr>
</tbody></table></div>
<p>Check per turn: 3 NADH, 1 FADH<sub>2</sub>, 1 ATP (via GTP), 2 CO<sub>2</sub>.</p>`,
        note: "You don't have to memorize every step's name for the test. You do need to be able to find the CO<sub>2</sub>, NADH, FADH<sub>2</sub> and ATP steps on a diagram."
      }
    ]
  },

  /* ------------------------------------------------------------------ 7 */
  {
    id: "qa-204",
    title: "Electron transport chain: research & review",
    lesson: "2.04",
    source: "Lesson 2.04 slides (Research & Review Questions). No class key was given, so these are full model answers.",
    items: [
      {
        tier: "essential",
        q: "Why does a single molecule of NADH, on average, produce more ATP than a single molecule of FADH<sub>2</sub>?",
        a: `<p>Because NADH's electrons pass through <strong>more proton pumps</strong>, so more H<sup>+</sup> is pumped and more ATP can be made.</p>
<ul>
<li><strong>NADH</strong> gives its electrons to <strong>complex I</strong> (NADH dehydrogenase), which is a proton pump. From there they travel through complex III and complex IV, which are also pumps. That makes <strong>3 pumping sites</strong>.</li>
<li><strong>FADH<sub>2</sub></strong> gives its electrons to <strong>complex II</strong> (succinate dehydrogenase), which is <strong>not</strong> a proton pump. Its electrons skip complex I and only pass through complexes III and IV. That makes <strong>2 pumping sites</strong>.</li>
</ul>
<p>Fewer H<sup>+</sup> pumped into the intermembrane space means less H<sup>+</sup> flows back through ATP synthase, so less ATP is made. Class values: <strong>NADH ≈ 3 ATP, FADH<sub>2</sub> ≈ 2 ATP</strong>.</p>
<p>FADH<sub>2</sub>'s electrons also enter at a lower energy level (a more positive redox potential), so they have less free energy left to release as they move down the chain.</p>`,
        note: "Modern measurements give about 2.5 ATP per NADH and 1.5 per FADH<sub>2</sub>. The ratio, and the reason for it, stay the same."
      },
      {
        tier: "likely",
        q: "How do the mitochondria maintain the chemiosmotic gradient used for the electron transport chain?",
        a: `<ol>
<li><strong>Continuous pumping.</strong> As long as NADH and FADH<sub>2</sub> keep delivering electrons, complexes I, III and IV use the free energy from electron transfer to pump H<sup>+</sup> from the matrix into the intermembrane space.</li>
<li><strong>A barrier H<sup>+</sup> cannot cross.</strong> The inner membrane is impermeable to H<sup>+</sup>, so the protons cannot simply leak back. Their only route back into the matrix is through ATP synthase.</li>
<li><strong>Oxygen removes H<sup>+</sup> from the matrix.</strong> At complex IV, ½O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub>O uses up protons on the matrix side, which keeps the matrix low in H<sup>+</sup> and steepens the gradient.</li>
<li><strong>A small space.</strong> The intermembrane space has a small volume, so pumped H<sup>+</sup> builds up to a high concentration quickly. The folded cristae give a large membrane area for many ETCs and ATP synthases.</li>
<li><strong>Steady fuel and oxygen.</strong> Glycolysis, pyruvate oxidation and Krebs keep supplying NADH and FADH<sub>2</sub>, and breathing keeps supplying O<sub>2</sub>.</li>
</ol>
<p>The result is an <span class="term">electrochemical gradient</span>: more H<sup>+</sup> (lower pH) and more positive charge in the intermembrane space than in the matrix.</p>`
      },
      {
        tier: "essential",
        q: "Why is oxygen required for aerobic cellular respiration?",
        a: `<p>Oxygen is the <span class="term">final electron acceptor</span> of the electron transport chain.</p>
<ul>
<li>O<sub>2</sub> is the most electronegative acceptor in the chain. It "pulls" electrons from complex IV, which keeps electrons moving through every carrier before it.</li>
<li>It combines with those electrons and 2H<sup>+</sup> from the matrix to form water: ½O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub>O. This clears the chain so the next electrons can follow.</li>
</ul>
<p><strong>Without O<sub>2</sub>:</strong> electrons have nowhere to go, so the carriers stay reduced and the chain backs up. H<sup>+</sup> pumping stops, the gradient runs down, and ATP synthase stops making ATP. NADH and FADH<sub>2</sub> can't be oxidized, so NAD<sup>+</sup> and FAD run out. Without them, the Krebs cycle and pyruvate oxidation stop too. Only glycolysis (with fermentation to recycle NAD<sup>+</sup>) can continue, giving 2 ATP instead of 36–38.</p>`
      },
      {
        tier: "essential",
        q: "When protons are pumped from the matrix, is this active or passive transport? Is it with or against the concentration gradient?",
        a: `<p><strong>Active transport, against the concentration gradient.</strong> H<sup>+</sup> is moved from the matrix (low [H<sup>+</sup>]) into the intermembrane space (high [H<sup>+</sup>]). Moving a substance from low to high concentration needs energy. Here the energy comes from the free energy released as electrons pass from carrier to carrier (redox), not from ATP.</p>
<p>The return trip is the opposite. H<sup>+</sup> flowing back into the matrix through ATP synthase is <strong>passive</strong> (facilitated diffusion), <strong>with</strong> the gradient. That downhill flow is what powers ATP synthesis.</p>`
      },
      {
        tier: "essential",
        q: "Where is ATP made in the ETC?",
        a: `<p>At <strong>ATP synthase</strong> (complex V), a protein embedded in the <strong>inner mitochondrial membrane (cristae)</strong>. Its catalytic "head" sticks into the <strong>matrix</strong>, so the ATP is released into the matrix.</p>
<p>Strictly, the electron transport chain itself (complexes I–IV) does not make ATP. It builds the H<sup>+</sup> gradient. ATP is made when H<sup>+</sup> flows back through ATP synthase and the energy is used to phosphorylate ADP + P<sub>i</sub> → ATP. This is <span class="term">chemiosmosis</span>, and the ATP made this way comes from <span class="term">oxidative phosphorylation</span>.</p>`
      },
      {
        tier: "likely",
        q: "Why is there a discrepancy in the number of ATP molecules produced in cellular respiration?",
        a: `<p>The "perfect textbook" maximum is <strong>38 ATP</strong> per glucose (2 glycolysis + 2 Krebs + 10 NADH × 3 + 2 FADH<sub>2</sub> × 2). Real cells make about <strong>30–32</strong>, and some sources (and the class review key) say <strong>36</strong>. The reasons:</p>
<ol>
<li><strong>Shuttles for cytosolic NADH.</strong> The 2 NADH from glycolysis are made in the cytoplasm and cannot cross the inner mitochondrial membrane. Their electrons are passed in by a shuttle.
<ul>
<li>The <em>malate–aspartate shuttle</em> (liver, heart, kidney) delivers them to NAD<sup>+</sup>, so they stay as NADH (3 ATP each), giving 38.</li>
<li>The <em>glycerol-3-phosphate shuttle</em> (skeletal muscle, brain) delivers them to FAD, so they become FADH<sub>2</sub> (2 ATP each). That loses 2 ATP, giving 36.</li>
</ul></li>
<li><strong>Proton leak.</strong> Some H<sup>+</sup> leaks back across the inner membrane without going through ATP synthase, so its energy is lost as heat.</li>
<li><strong>Variable H<sup>+</sup> per ATP.</strong> How strong the gradient must be, and how many H<sup>+</sup> must pass through ATP synthase to make one ATP, varies slightly between species.</li>
<li><strong>The gradient has other jobs.</strong> Some of the H<sup>+</sup> gradient is used to move pyruvate, ADP and P<sub>i</sub> into the matrix and ATP out.</li>
</ol>
<p>Because of these losses, NADH really gives about 2.5 ATP and FADH<sub>2</sub> about 1.5, which is where the realistic 30–32 comes from.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 8 */
  {
    id: "qa-review",
    title: "Cellular Respiration Review (17 questions)",
    lesson: "mix",
    source: "Cell Respiration Review package and the class answer key",
    items: [
      {
        tier: "essential",
        q: "Define the term metabolism.",
        a: `<p><strong>Class key:</strong> the sum of the physical and chemical processes in an organism.</p>
<p>A sharper version, from the lesson: <strong>metabolism is the sum of all the anabolic and catabolic reactions in a cell or organism.</strong></p>
<ul>
<li><strong>Catabolic</strong> reactions break molecules down and release energy (exergonic). Cellular respiration is catabolic.</li>
<li><strong>Anabolic</strong> reactions build molecules up and need energy (endergonic). Examples are protein synthesis and making ATP from ADP + P<sub>i</sub>.</li>
</ul>
<p>ATP links the two: catabolism makes it and anabolism spends it.</p>`
      },
      {
        tier: "essential",
        q: "Write the balanced chemical equation for aerobic cellular respiration of glucose.",
        a: `<div class="eq">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>(s) + 6 O<sub>2</sub>(g) → 6 CO<sub>2</sub>(g) + 6 H<sub>2</sub>O(l) + 36 ATP</div>
<p>Check that it balances: C 6 = 6; H 12 = 12; O 6 + 12 = 18 on the left and 12 + 6 = 18 on the right.</p>
<p>About the ATP number: the class key writes <strong>36</strong>, the ETC slide gives a <strong>maximum of 38</strong>, and the realistic yield is <strong>30–32</strong>. 36 matches the key. If a question asks why the numbers differ, explain the shuttles and proton leak (see the ETC questions).</p>`
      },
      {
        tier: "essential",
        q: "How many carbon atoms are in: (a) glucose (b) pyruvate (c) acetyl-CoA (d) citrate?",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Molecule</th><th>Carbons</th><th>Why</th></tr></thead>
<tbody>
<tr><td>(a) Glucose</td><td><strong>6</strong></td><td>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></td></tr>
<tr><td>(b) Pyruvate</td><td><strong>3</strong></td><td>Glucose is split in half in glycolysis</td></tr>
<tr><td>(c) Acetyl-CoA</td><td><strong>2</strong></td><td>Pyruvate loses one carbon as CO<sub>2</sub>. Count only the acetyl group; CoA is just the carrier.</td></tr>
<tr><td>(d) Citrate</td><td><strong>6</strong></td><td>Acetyl (2) + oxaloacetate (4)</td></tr>
</tbody></table></div>`
      },
      {
        tier: "essential",
        q: "How many carbon atoms remain from the original glucose at the end of the Krebs cycle? (a) Where did the carbon atoms go? (b) Where did the oxygen atoms go? (c) Where did the hydrogen atoms go?",
        a: `<p><strong>0.</strong> All 6 carbons have left. Per glucose, 2 leave in pyruvate oxidation and 4 in the Krebs cycle.</p>
<ul>
<li><strong>(a) Carbon:</strong> released as <strong>CO<sub>2</sub></strong>. It diffuses into the blood and is <strong>exhaled</strong>.</li>
<li><strong>(b) Oxygen</strong> (the oxygen atoms that were in glucose): <strong>exhaled as CO<sub>2</sub></strong>.</li>
<li><strong>(c) Hydrogen:</strong> carried as <strong>NADH and FADH<sub>2</sub></strong> or released as <strong>free protons (H<sup>+</sup>)</strong>. They go to the ETC and finally end up in <strong>water</strong>.</li>
</ul>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The O<sub>2</sub> you breathe in does <em>not</em> become the CO<sub>2</sub> you breathe out. Inhaled O<sub>2</sub> is the final electron acceptor and ends up in <strong>H<sub>2</sub>O</strong> at the ETC. The oxygen atoms in exhaled CO<sub>2</sub> come from glucose (and from water used in the Krebs cycle).</p></div>`
      },
      {
        tier: "essential",
        q: "Identify the reactants needed for each process: (a) glycolysis (b) pyruvate oxidation (c) Krebs cycle (d) ETC (oxidative phosphorylation).",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Process</th><th>Reactants (class key in bold)</th></tr></thead>
<tbody>
<tr><td>(a) Glycolysis</td><td><strong>glucose, ATP, NAD<sup>+</sup></strong>. In full: glucose, 2 ATP (steps 1 and 3), 2 NAD<sup>+</sup> and 2 P<sub>i</sub> (step 6), and 4 ADP (steps 7 and 10).</td></tr>
<tr><td>(b) Pyruvate oxidation</td><td><strong>pyruvate, NAD<sup>+</sup>, CoA</strong></td></tr>
<tr><td>(c) Krebs cycle</td><td><strong>acetyl-CoA, NAD<sup>+</sup>, FAD, oxaloacetate, ADP + P<sub>i</sub></strong> (via GDP). Water is also used.</td></tr>
<tr><td>(d) ETC</td><td><strong>O<sub>2</sub>, NADH, FADH<sub>2</sub>, H<sup>+</sup>, ADP + P<sub>i</sub></strong></td></tr>
</tbody></table></div>
<p>Net equation for glycolysis, for reference:</p>
<div class="eq">glucose + 2 NAD<sup>+</sup> + 2 ADP + 2 P<sub>i</sub> → 2 pyruvate + 2 NADH + 2 H<sup>+</sup> + 2 ATP + 2 H<sub>2</sub>O</div>`
      },
      {
        tier: "essential",
        q: "Identify the location in the cell and the net products of: (a) glycolysis (b) pyruvate oxidation (c) Krebs cycle (d) ETC (oxidative phosphorylation).",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Stage</th><th>Location</th><th>Net products per glucose</th></tr></thead>
<tbody>
<tr><td>(a) Glycolysis</td><td><strong>Cytoplasm</strong> (cytosol)</td><td>2 pyruvate, 2 ATP, 2 NADH (and 2 H<sub>2</sub>O)</td></tr>
<tr><td>(b) Pyruvate oxidation</td><td>Pyruvate <strong>moves from the cytoplasm into the mitochondrial matrix</strong>; the reaction happens in the matrix</td><td>2 acetyl-CoA, 2 NADH, 2 CO<sub>2</sub></td></tr>
<tr><td>(c) Krebs cycle</td><td><strong>Mitochondrial matrix</strong></td><td>2 ATP, 6 NADH, 2 FADH<sub>2</sub>, 4 CO<sub>2</sub> (oxaloacetate and CoA regenerated)</td></tr>
<tr><td>(d) ETC + chemiosmosis</td><td><strong>Inner mitochondrial membrane</strong> (cristae)</td><td>About 34 ATP (class count: 10 NADH × 3 + 2 FADH<sub>2</sub> × 2; 32 if glycolysis's NADH arrives as FADH<sub>2</sub>), 6 H<sub>2</sub>O, and NAD<sup>+</sup> and FAD regenerated</td></tr>
</tbody></table></div>`,
        note: "The class key lists only the locations. The net products come from the lesson summaries."
      },
      {
        tier: "essential",
        q: "Be able to label diagrams of glycolysis, pyruvate oxidation, the Krebs cycle and the ETC.",
        a: `<p>The key says "see class notes". Use this checklist of what each diagram should show.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Diagram</th><th>Labels you should be able to place</th></tr></thead>
<tbody>
<tr><td>Glycolysis (cytoplasm)</td><td>glucose → glucose-6-phosphate → fructose-6-phosphate → fructose-1,6-bisphosphate → DHAP + G3P → 2 G3P → 2 1,3-bisphosphoglycerate → 2 3-phosphoglycerate → 2 2-phosphoglycerate → 2 PEP → 2 pyruvate. ATP used at steps 1 and 3; NADH made at step 6; ATP made at steps 7 and 10; H<sub>2</sub>O released at step 9. Prep phase (1–5) and payoff phase (6–10). Key enzymes: hexokinase, phosphofructokinase (regulatory), aldolase, pyruvate kinase.</td></tr>
<tr><td>Pyruvate oxidation (matrix)</td><td>Pyruvate (3 C) entering the matrix; CO<sub>2</sub> released; NAD<sup>+</sup> → NADH; CoA added; acetyl-CoA (2 C) out; pyruvate dehydrogenase complex.</td></tr>
<tr><td>Krebs cycle (matrix)</td><td>Oxaloacetate + acetyl-CoA → citrate → isocitrate → α-ketoglutarate → succinyl-CoA → succinate → fumarate → malate → oxaloacetate. CoA released at step 1; CO<sub>2</sub> at steps 3 and 4; NADH at steps 3, 4 and 8; ATP (via GTP) at step 5; FADH<sub>2</sub> at step 6. Carbon counts 6, 6, 5, 4, 4, 4, 4, 4.</td></tr>
<tr><td>ETC (inner membrane)</td><td>Intermembrane space, inner membrane (cristae), matrix; complex I (NADH dehydrogenase), II (succinate dehydrogenase), ubiquinone (Q), III (cytochrome bc<sub>1</sub>), cytochrome c, IV (cytochrome c oxidase), V (ATP synthase). NADH → NAD<sup>+</sup> at I; FADH<sub>2</sub> → FAD at II; H<sup>+</sup> pumped at I, III and IV; ½O<sub>2</sub> + 2H<sup>+</sup> → H<sub>2</sub>O at IV; H<sup>+</sup> flowing through ATP synthase; ADP + P<sub>i</sub> → ATP.</td></tr>
</tbody></table></div>`
      },
      {
        tier: "essential",
        q: "Draw and label a mitochondrion and its parts.",
        a: `<figure class="diagram"><svg viewBox="0 0 640 300" role="img" aria-labelledby="qa-mito-t qa-mito-d">
<title id="qa-mito-t">Labelled mitochondrion</title>
<desc id="qa-mito-d">A capsule-shaped mitochondrion with a smooth outer membrane, a fluid-filled intermembrane space, and a highly folded inner membrane whose folds are cristae. The matrix inside contains circular DNA, ribosomes, and ATP synthase on the cristae.</desc>
<rect x="58" y="58" width="524" height="184" rx="92" style="fill:var(--surface-2);stroke:var(--ink-2)" stroke-width="3"/>
<path d="M150 80 L190 80 L190 165 A8 8 0 0 0 206 165 L206 80 L270 80 L270 165 A8 8 0 0 0 286 165 L286 80 L350 80 L350 165 A8 8 0 0 0 366 165 L366 80 L430 80 L430 165 A8 8 0 0 0 446 165 L446 80 L490 80 A70 70 0 0 1 490 220 L400 220 L400 135 A8 8 0 0 0 384 135 L384 220 L320 220 L320 135 A8 8 0 0 0 304 135 L304 220 L240 220 L240 135 A8 8 0 0 0 224 135 L224 220 L150 220 A70 70 0 0 1 150 80 Z" style="fill:var(--krebs-soft);stroke:var(--etc)" stroke-width="2.5" stroke-linejoin="round"/>
<ellipse cx="128" cy="150" rx="20" ry="12" style="fill:none;stroke:var(--krebs)" stroke-width="2"/>
<g style="fill:var(--ink-2)"><circle cx="515" cy="128" r="4"/><circle cx="528" cy="152" r="4"/><circle cx="510" cy="176" r="4"/><circle cx="540" cy="170" r="4"/></g>
<g style="fill:var(--glyco)"><circle cx="344" cy="100" r="4.5"/><circle cx="344" cy="124" r="4.5"/><circle cx="344" cy="148" r="4.5"/><circle cx="424" cy="108" r="4.5"/><circle cx="424" cy="134" r="4.5"/></g>
<g style="stroke:var(--ink-2)" stroke-width="1">
<line x1="80" y1="28" x2="140" y2="59"/>
<line x1="235" y1="28" x2="235" y2="69"/>
<line x1="410" y1="28" x2="468" y2="80"/>
<line x1="565" y1="28" x2="447" y2="118"/>
<line x1="85" y1="274" x2="112" y2="190"/>
<line x1="185" y1="274" x2="133" y2="163"/>
<line x1="365" y1="274" x2="345" y2="153"/>
<line x1="520" y1="274" x2="512" y2="181"/>
</g>
<g style="fill:var(--ink)" font-size="13" font-family="inherit" text-anchor="middle">
<text x="80" y="22">Outer membrane</text>
<text x="235" y="22">Intermembrane space</text>
<text x="410" y="22">Inner membrane</text>
<text x="565" y="22">Crista (fold)</text>
<text x="70" y="290">Matrix</text>
<text x="185" y="290">DNA</text>
<text x="365" y="290">ATP synthase</text>
<text x="520" y="290">Ribosomes</text>
</g>
</svg><figcaption>Draw an oval with a smooth outer membrane, then a second membrane inside it that folds inward many times. The folds are the cristae; the gap between the membranes is the intermembrane space; the inside is the matrix.</figcaption></figure>
<div class="table-wrap"><table class="data">
<thead><tr><th>Label</th><th>Description and job</th></tr></thead>
<tbody>
<tr><td>Outer membrane</td><td>Smooth; encloses the organelle</td></tr>
<tr><td>Intermembrane space</td><td>Fluid-filled gap between the membranes; H<sup>+</sup> is pumped in here, making it high in H<sup>+</sup></td></tr>
<tr><td>Inner membrane</td><td>Highly folded; holds the ETC proteins and ATP synthase</td></tr>
<tr><td>Cristae</td><td>The folds of the inner membrane; increase surface area for more ETCs and ATP synthases</td></tr>
<tr><td>Matrix</td><td>Protein-rich fluid inside the inner membrane; site of pyruvate oxidation and the Krebs cycle</td></tr>
<tr><td>ATP synthase particles</td><td>On the inner membrane, heads facing the matrix; make ATP</td></tr>
<tr><td>DNA and ribosomes</td><td>Mitochondria have their own circular DNA and ribosomes and can make some of their own proteins</td></tr>
</tbody></table></div>`
      },
      {
        tier: "essential",
        q: "Explain what is happening in these steps: (a) conversion of phosphoenolpyruvate to pyruvate in glycolysis; (b) conversion of isocitrate to α-ketoglutarate in the Krebs cycle.",
        a: `<p><strong>(a) PEP → pyruvate: substrate-level phosphorylation.</strong> This is step 10 of glycolysis, catalyzed by pyruvate kinase. The enzyme transfers PEP's phosphate group directly to ADP, making <strong>ATP</strong> and leaving pyruvate. It happens twice per glucose (2 ATP) and is the last step of glycolysis.</p>
<div class="eq">phosphoenolpyruvate + ADP → pyruvate + ATP</div>
<p><strong>(b) Isocitrate → α-ketoglutarate: decarboxylation and reduction of NAD<sup>+</sup>.</strong> This is step 3 of the Krebs cycle (an oxidative decarboxylation).</p>
<ul>
<li>A carbon is removed as <strong>CO<sub>2</sub></strong>: isocitrate (6 C) → α-ketoglutarate (5 C). This is the first CO<sub>2</sub> released by the cycle.</li>
<li>Isocitrate is <strong>oxidized</strong> and NAD<sup>+</sup> is <strong>reduced to NADH</strong>.</li>
</ul>
<div class="eq">isocitrate + NAD<sup>+</sup> → α-ketoglutarate + CO<sub>2</sub> + NADH</div>`
      },
      {
        tier: "likely",
        q: "If a patient was deficient in the enzyme that converts fructose-1,6-bisphosphate into DHAP, what molecules might start building up in the cell?",
        a: `<p><strong>Class key: ADP and NAD<sup>+</sup>.</strong></p>
<p>The missing enzyme is <strong>aldolase</strong> (step 4), which splits fructose-1,6-bisphosphate into DHAP + G3P. Without it, glycolysis stops at step 4.</p>
<ul>
<li><strong>ADP builds up.</strong> Steps 1 and 3 come <em>before</em> the block, so they keep turning ATP into ADP. The steps that turn ADP back into ATP (7 and 10) come <em>after</em> the block and can't run. ADP is made but not used, so it accumulates and the cell runs short of ATP.</li>
<li><strong>NAD<sup>+</sup> builds up.</strong> NAD<sup>+</sup> is used at step 6 (G3P → 1,3-bisphosphoglycerate). With no G3P being made, NAD<sup>+</sup> is not reduced, so it stays as NAD<sup>+</sup>.</li>
<li><strong>Fructose-1,6-bisphosphate itself builds up.</strong> It is the substrate of the missing enzyme, so it is the first molecule to pile up. Earlier intermediates (fructose-6-phosphate, glucose-6-phosphate) can back up behind it.</li>
</ul>
<p>Everything after the block would be <em>low</em>: DHAP, G3P, pyruvate, NADH and acetyl-CoA. High ADP also stimulates phosphofructokinase (step 3), which makes even more fructose-1,6-bisphosphate.</p>`,
        note: "The key lists ADP and NAD<sup>+</sup>, the carriers left unused. On a test, also name fructose-1,6-bisphosphate: as the substrate of the missing enzyme, it is the most direct thing to build up."
      },
      {
        tier: "essential",
        q: "What is the role of NAD<sup>+</sup>, NADH, FAD and FADH<sub>2</sub>? Which is the oxidized form and which is the reduced form?",
        a: `<p>They are <strong>electron carriers</strong> (coenzymes). They pick up high-energy electrons (with hydrogen) from food molecules in glycolysis, pyruvate oxidation and the Krebs cycle, and deliver them to the electron transport chain.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Carrier</th><th>Form</th><th>Role</th></tr></thead>
<tbody>
<tr><td>NAD<sup>+</sup></td><td><strong>Oxidized</strong> ("empty")</td><td>Accepts electrons in glycolysis step 6, pyruvate oxidation, and Krebs steps 3, 4 and 8. Acts as an oxidizing agent.</td></tr>
<tr><td>NADH</td><td><strong>Reduced</strong> ("full")</td><td>Carries electrons to complex I of the ETC, which oxidizes it back to NAD<sup>+</sup>. About 3 ATP each.</td></tr>
<tr><td>FAD</td><td><strong>Oxidized</strong></td><td>Accepts electrons in Krebs step 6 (succinate → fumarate)</td></tr>
<tr><td>FADH<sub>2</sub></td><td><strong>Reduced</strong></td><td>Carries electrons to complex II of the ETC. About 2 ATP each.</td></tr>
</tbody></table></div>
<div class="eq">NAD<sup>+</sup> + 2e<sup>−</sup> + 2H<sup>+</sup> → NADH + H<sup>+</sup> &nbsp;&nbsp;|&nbsp;&nbsp; FAD + 2e<sup>−</sup> + 2H<sup>+</sup> → FADH<sub>2</sub></div>
<p>Shortcut: the form with the extra H is the reduced (full) one.</p>`
      },
      {
        tier: "essential",
        q: "Describe the role of oxygen in the ETC. (a) How does a lack of oxygen affect both the ETC and the Krebs cycle? (b) Is glycolysis affected? Why? (c) What is the effect if ubiquinone is blocked from accepting electrons?",
        a: `<p><strong>Role: oxygen is the final electron acceptor.</strong> It is the most electronegative member of the chain, so it pulls electrons off complex IV and keeps the whole chain flowing. It then combines with 2H<sup>+</sup> from the matrix to form water: ½O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub>O.</p>
<p><strong>(a) No oxygen: the ETC stops, and then the Krebs cycle stops.</strong> With nowhere to send electrons, every carrier stays reduced and the chain backs up. H<sup>+</sup> pumping stops, so no gradient forms and ATP synthase makes no ATP. Because NADH and FADH<sub>2</sub> can't be oxidized, the cell runs out of <strong>NAD<sup>+</sup> and FAD</strong>. The Krebs cycle (and pyruvate oxidation) need those as reactants, so they <strong>eventually stop as well</strong>, even though they don't use O<sub>2</sub> directly.</p>
<p><strong>(b) Glycolysis: not directly. It is an anaerobic process</strong> that doesn't use O<sub>2</sub>, so it keeps running. It does still need NAD<sup>+</sup> for step 6. Without oxygen, the cell regenerates NAD<sup>+</sup> by <strong>fermentation</strong>, so glycolysis can continue, making only 2 ATP per glucose.</p>
<p><strong>(c) Ubiquinone (Q) blocked: NADH and FADH<sub>2</sub> could not be oxidized, and the ETC would stop.</strong> Q is the mobile carrier that takes electrons from <em>both</em> complex I (from NADH) and complex II (from FADH<sub>2</sub>) to complex III. If Q can't accept them, electrons from both carriers are stuck. Complexes III and IV get no electrons, pumping stops, the gradient disappears, ATP synthesis stops and O<sub>2</sub> isn't used. NAD<sup>+</sup> and FAD are not regenerated, so the Krebs cycle also stops. The effect is similar to cyanide, but the block is earlier in the chain.</p>`
      },
      {
        tier: "essential",
        q: "How many pyruvate molecules would be produced by the glycolysis of 5 glucose molecules?",
        a: `<p><strong>10 pyruvate.</strong> Each glucose (6 C) is split into 2 pyruvate (3 C each): 5 × 2 = 10.</p>
<p>The same 5 glucose would also give 10 net ATP and 10 NADH from glycolysis.</p>`
      },
      {
        tier: "essential",
        q: "Draw the reactions for: (a) alcoholic fermentation; (b) lactate fermentation.",
        a: `<p>For both, draw glycolysis feeding into pyruvate, then the fermentation step, with a <strong>loop arrow carrying NAD<sup>+</sup> back to glycolysis</strong>. That loop is the point of fermentation. Label: glucose, glycolysis, 2 ADP + 2 P<sub>i</sub> → 2 ATP, 2 NAD<sup>+</sup> → 2 NADH, 2 pyruvate, the fermentation product(s), the enzymes, "no O<sub>2</sub>", and the location (cytoplasm).</p>
<h4>(a) Alcoholic fermentation (yeast, some bacteria, plants)</h4>
<div class="eq">glucose → 2 pyruvate &nbsp;(glycolysis: +2 ATP net, 2 NAD<sup>+</sup> → 2 NADH)</div>
<div class="eq">2 pyruvate → 2 acetaldehyde + 2 CO<sub>2</sub> &nbsp;(pyruvate decarboxylase)</div>
<div class="eq">2 acetaldehyde + 2 NADH → 2 ethanol + 2 NAD<sup>+</sup> &nbsp;(alcohol dehydrogenase)</div>
<p>Overall: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub> (+ 2 ATP). Two steps after pyruvate; releases CO<sub>2</sub>; irreversible.</p>
<h4>(b) Lactate (lactic acid) fermentation (animal muscle, some bacteria)</h4>
<div class="eq">glucose → 2 pyruvate &nbsp;(glycolysis: +2 ATP net, 2 NAD<sup>+</sup> → 2 NADH)</div>
<div class="eq">2 pyruvate + 2 NADH → 2 lactate + 2 NAD<sup>+</sup> &nbsp;(lactate dehydrogenase)</div>
<p>Overall: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>3</sub>H<sub>6</sub>O<sub>3</sub> (lactic acid, present as lactate) (+ 2 ATP). One step after pyruvate; <strong>no CO<sub>2</sub></strong>; reversible (the liver can turn lactate back into pyruvate).</p>`
      },
      {
        tier: "essential",
        q: "What is the real purpose of fermentation?",
        a: `<p><strong>To oxidize NADH back to NAD<sup>+</sup> so glycolysis can continue.</strong></p>
<p>Without oxygen the ETC can't oxidize NADH, so NAD<sup>+</sup> runs out. Glycolysis needs NAD<sup>+</sup> at step 6, and without it glycolysis would stop and the cell would make no ATP at all. Fermentation hands NADH's electrons to an organic molecule made from pyruvate (making lactate, or ethanol via acetaldehyde), which regenerates NAD<sup>+</sup>.</p>
<p>The fermentation steps themselves make <strong>no ATP</strong>. All the ATP (2 per glucose) still comes from glycolysis. Fermentation just keeps glycolysis running.</p>`
      },
      {
        tier: "essential",
        q: "Describe, with the use of a diagram, how ATP is synthesized by the ETC.",
        a: `<figure class="diagram"><svg viewBox="0 0 680 360" role="img" aria-labelledby="qa-etc-t qa-etc-d">
<title id="qa-etc-t">How the ETC and ATP synthase make ATP</title>
<desc id="qa-etc-d">The inner mitochondrial membrane, with the intermembrane space above and the matrix below. NADH gives electrons to complex I and FADH2 gives electrons to complex II. Electrons pass through ubiquinone, complex III, cytochrome c and complex IV to oxygen, forming water. Complexes I, III and IV pump H+ up into the intermembrane space. H+ flows back down through ATP synthase, which makes ATP from ADP and inorganic phosphate.</desc>
<defs>
<marker id="qa-ah-p" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--proton)"/></marker>
<marker id="qa-ah-e" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--etc)"/></marker>
</defs>
<rect x="8" y="140" width="664" height="50" style="fill:var(--surface-2);stroke:var(--ink-2)" stroke-width="1"/>
<path d="M86 165 L214 152 L276 150 L340 126 L404 150 L404 238" style="fill:none;stroke:var(--etc)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#qa-ah-e)"/>
<path d="M166 178 L203 160" style="fill:none;stroke:var(--etc)" stroke-width="2" stroke-dasharray="5 4"/>
<g style="fill:var(--etc-soft);stroke:var(--etc)" stroke-width="2">
<rect x="50" y="116" width="72" height="98" rx="14"/>
<rect x="140" y="160" width="52" height="54" rx="10"/>
<rect x="240" y="116" width="72" height="98" rx="14"/>
<rect x="368" y="116" width="72" height="98" rx="14"/>
</g>
<g style="fill:var(--surface);stroke:var(--etc)" stroke-width="2">
<circle cx="214" cy="152" r="14"/>
<circle cx="340" cy="126" r="14"/>
</g>
<g style="fill:var(--glyco-soft);stroke:var(--glyco)" stroke-width="2">
<rect x="514" y="122" width="52" height="76" rx="10"/>
<rect x="533" y="198" width="14" height="28"/>
<circle cx="540" cy="252" r="26"/>
</g>
<line x1="80" y1="258" x2="80" y2="220" style="stroke:var(--etc)" stroke-width="2" marker-end="url(#qa-ah-e)"/>
<line x1="166" y1="258" x2="166" y2="220" style="stroke:var(--etc)" stroke-width="2" marker-end="url(#qa-ah-e)"/>
<line x1="104" y1="230" x2="104" y2="102" style="stroke:var(--proton)" stroke-width="2.5" marker-end="url(#qa-ah-p)"/>
<line x1="294" y1="230" x2="294" y2="102" style="stroke:var(--proton)" stroke-width="2.5" marker-end="url(#qa-ah-p)"/>
<line x1="422" y1="230" x2="422" y2="102" style="stroke:var(--proton)" stroke-width="2.5" marker-end="url(#qa-ah-p)"/>
<line x1="540" y1="98" x2="540" y2="222" style="stroke:var(--proton)" stroke-width="2.5" marker-end="url(#qa-ah-p)"/>
<g style="fill:var(--ink)" font-size="14" font-weight="700" font-family="inherit" text-anchor="middle">
<text x="72" y="175">I</text>
<text x="166" y="200">II</text>
<text x="214" y="157">Q</text>
<text x="262" y="175">III</text>
<text x="340" y="131">c</text>
<text x="390" y="175">IV</text>
</g>
<g style="fill:var(--proton)" font-size="12" font-family="inherit" text-anchor="middle">
<text x="104" y="94">H⁺</text><text x="294" y="94">H⁺</text><text x="422" y="94">H⁺</text><text x="540" y="90">H⁺</text>
<text x="40" y="70">H⁺</text><text x="160" y="64">H⁺</text><text x="210" y="82">H⁺</text><text x="250" y="60">H⁺</text><text x="360" y="72">H⁺</text><text x="470" y="62">H⁺</text><text x="612" y="76">H⁺</text>
<text x="104" y="246">H⁺</text><text x="294" y="246">H⁺</text><text x="422" y="246">H⁺</text>
</g>
<text x="131" y="150" font-size="12" font-family="inherit" style="fill:var(--etc)">e⁻</text>
<g style="fill:var(--ink)" font-size="13" font-family="inherit">
<text x="16" y="28">Intermembrane space: H⁺ builds up (high [H⁺], lower pH)</text>
<text x="16" y="345">Matrix: low [H⁺]</text>
<text x="80" y="276" text-anchor="middle">NADH → NAD⁺</text>
<text x="170" y="276" text-anchor="middle">FADH₂ → FAD</text>
<text x="404" y="276" text-anchor="middle">½O₂ + 2H⁺ → H₂O</text>
<text x="540" y="304" text-anchor="middle">ATP synthase</text>
<text x="574" y="248">ADP + Pᵢ</text>
<text x="574" y="266">→ ATP</text>
<text x="672" y="112" text-anchor="end">H⁺ flows back</text>
<text x="672" y="127" text-anchor="end">(chemiosmosis)</text>
</g>
<g style="fill:var(--ink-2)" font-size="12" font-family="inherit" text-anchor="middle">
<text x="477" y="161">inner</text><text x="477" y="176">membrane</text>
</g>
</svg><figcaption>Electrons (dashed line) flow from NADH and FADH<sub>2</sub> through I or II → Q → III → cytochrome c → IV → O<sub>2</sub>. Complexes I, III and IV pump H<sup>+</sup> into the intermembrane space. H<sup>+</sup> can return only through ATP synthase, which uses that flow to make ATP.</figcaption></figure>
<ol class="steps">
<li><p class="step-head">Carriers drop off electrons</p><p>NADH is oxidized at complex I (NADH dehydrogenase) and FADH<sub>2</sub> at complex II (succinate dehydrogenase). Each brings a pair of high-energy electrons. NAD<sup>+</sup> and FAD are regenerated.</p></li>
<li><p class="step-head">Electrons pass down the chain</p><p>The carriers are arranged in order of increasing electronegativity: I/II → ubiquinone (Q) → III → cytochrome c → IV. Each carrier is reduced by the one before it and oxidized by the one after it. At each step the electrons become more stable and release free energy.</p></li>
<li><p class="step-head">H<sup>+</sup> is pumped</p><p>Complexes I, III and IV use that free energy to pump H<sup>+</sup> from the matrix into the intermembrane space. This is active transport against the gradient, and it builds an electrochemical gradient (high [H<sup>+</sup>] and positive charge outside, low inside).</p></li>
<li><p class="step-head">Oxygen accepts the electrons</p><p>At complex IV, O<sub>2</sub> (the final electron acceptor) takes the electrons and combines with H<sup>+</sup> from the matrix: ½O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub>O. This keeps electrons flowing and removes H<sup>+</sup> from the matrix.</p></li>
<li><p class="step-head">Chemiosmosis makes ATP</p><p>The inner membrane is impermeable to H<sup>+</sup>, so H<sup>+</sup> can only flow back into the matrix through ATP synthase. This is passive (facilitated diffusion) and goes down the gradient. The flow drives ATP synthase to phosphorylate ADP + P<sub>i</sub> → ATP. This is <span class="term">oxidative phosphorylation</span>: about 3 ATP per NADH and 2 per FADH<sub>2</sub>.</p></li>
</ol>`
      },
      {
        tier: "essential",
        q: "Describe how these foods enter into the metabolic cycles of cellular respiration: (a) lipids; (b) proteins.",
        a: `<p>Both are used as alternate fuels when glycogen (carbohydrate) stores are low. Each is first <strong>hydrolyzed into its monomers</strong>.</p>
<p><strong>(a) Lipids (key: gluconeogenesis and β-oxidation).</strong> A fat (triglyceride) is hydrolyzed into <strong>glycerol + fatty acids</strong>.</p>
<ul>
<li><strong>Glycerol</strong> is converted into DHAP (which becomes G3P) and enters <strong>glycolysis</strong>. When glucose is very low, the liver turns glycerol into new glucose by <span class="term">gluconeogenesis</span> (making glucose from non-carbohydrate sources).</li>
<li><strong>Fatty acids</strong> go through <span class="term">β-oxidation</span> in the mitochondrial matrix. They are cut into 2-carbon pieces that become <strong>acetyl-CoA</strong>, which enters the <strong>Krebs cycle</strong>. β-oxidation also makes NADH and FADH<sub>2</sub>, which is why fats store so much energy.</li>
</ul>
<p><strong>(b) Proteins (key: deamination).</strong> Proteins are hydrolyzed into <strong>amino acids</strong>. In the liver, <span class="term">deamination</span> removes each amino acid's amino group as ammonia (NH<sub>3</sub>, toxic), which is converted to urea and excreted. The remaining <strong>carbon skeleton</strong> enters respiration at different points depending on the amino acid:</p>
<ul>
<li>as <strong>pyruvate</strong> (e.g. alanine, glycine)</li>
<li>as <strong>acetyl-CoA</strong> (e.g. leucine, lysine)</li>
<li>directly as a <strong>Krebs intermediate</strong> (e.g. glutamate → α-ketoglutarate)</li>
</ul>
<p>Order of use: carbohydrates → lipids → proteins. Protein breakdown for fuel signals severe fasting or starvation.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 9 */
  {
    id: "qa-follow-glucose",
    title: "Follow That Glucose! worksheet",
    lesson: "mix",
    source: "\"Follow That Glucose!\" worksheet (Metabolic Processes) and the class answer key",
    items: [
      {
        tier: "likely",
        q: "Part 1, Q1: State which steps of glycolysis involve substrate-level phosphorylation (the transfer of a phosphate group catalyzed by an enzyme).",
        a: `<p><strong>Class key:</strong> any step where ATP is produced or consumed without ATP synthase, or where an inorganic phosphate is added to a molecule. <strong>Phosphate is added in steps 1, 3 and 6, and removed in steps 7 and 10.</strong></p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Step</th><th>Enzyme</th><th>What happens to phosphate</th></tr></thead>
<tbody>
<tr><td>1</td><td>hexokinase</td><td>Phosphate from ATP added to glucose (ATP → ADP)</td></tr>
<tr><td>3</td><td>phosphofructokinase</td><td>Phosphate from ATP added to fructose-6-phosphate (ATP → ADP)</td></tr>
<tr><td>6</td><td>G3P dehydrogenase</td><td>Inorganic P<sub>i</sub> from the cytoplasm added to G3P (no ATP involved)</td></tr>
<tr><td>7</td><td>phosphoglycerate kinase</td><td>Phosphate moved from 1,3-bisphosphoglycerate to ADP → <strong>ATP</strong></td></tr>
<tr><td>10</td><td>pyruvate kinase</td><td>Phosphate moved from PEP to ADP → <strong>ATP</strong></td></tr>
</tbody></table></div>
<div class="callout key"><p class="callout-title">On the test</p><p>If you are asked where ATP is <em>made</em> by substrate-level phosphorylation in glycolysis, the answer is <strong>steps 7 and 10</strong>.</p></div>`,
        note: "The worksheet defines substrate-level phosphorylation broadly (any enzyme-catalyzed phosphate transfer), so the key lists steps 1, 3, 6, 7 and 10. In the lessons the term means ATP formed directly in an enzyme-catalyzed reaction, which is steps 7 and 10 only."
      },
      {
        tier: "likely",
        q: "Part 1, Q2: For glycolysis only, account for the number of each molecule in Table 1 (ATP, NADH + H<sup>+</sup>, FADH<sub>2</sub>, CO<sub>2</sub>). Include ATP or NADH used as negative values.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>ATP</th><th>NADH + H<sup>+</sup></th><th>FADH<sub>2</sub></th><th>CO<sub>2</sub></th></tr></thead>
<tbody>
<tr><td>Glycolysis</td><td>−2 ATP, +4 ATP (net +2)</td><td>2</td><td>0</td><td>0</td></tr>
</tbody></table></div>
<p>2 ATP are spent at steps 1 and 3, and 4 are made at steps 7 and 10. 2 NADH are made at step 6 (once for each G3P). Glycolysis has no FAD step and no decarboxylation, so FADH<sub>2</sub> and CO<sub>2</sub> are both 0. The completed table is in Part 5, Q2.</p>`
      },
      {
        tier: "likely",
        q: "Part 1, Q3: At the end of glycolysis, where is most of the bond energy from glucose?",
        a: `<p><strong>Trapped in the two pyruvate molecules.</strong> Glycolysis captures only a small part of glucose's energy: net 2 ATP (about 2% of the energy in glucose) plus 2 NADH. Each pyruvate still has 3 carbons and many C–H and C–C bonds. That stored energy is released only when pyruvate is fully oxidized to CO<sub>2</sub> in pyruvate oxidation and the Krebs cycle, with the ETC turning it into ATP.</p>`
      },
      {
        tier: "likely",
        q: "Part 1, Q4: Look at the overall equation for cellular respiration. Which reactants and products are accounted for by glycolysis? Which are not?",
        a: `<div class="eq">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O + ATP</div>
<p><strong>Accounted for: glucose only.</strong> It is the only part of the overall reaction present in glycolysis, plus a small amount of the ATP (net 2).</p>
<p><strong>Not accounted for: O<sub>2</sub>, CO<sub>2</sub> and H<sub>2</sub>O.</strong> These are used or produced elsewhere. CO<sub>2</sub> comes from pyruvate oxidation and the Krebs cycle. O<sub>2</sub> is used, and the 6 H<sub>2</sub>O are made, at the end of the ETC.</p>`,
        note: "Glycolysis does release 2 H<sub>2</sub>O at step 9 (the glycolysis review key mentions this), but the 6 H<sub>2</sub>O in the overall equation are formed when O<sub>2</sub> accepts electrons at complex IV."
      },
      {
        tier: "likely",
        q: "Part 1, Q5: State the products you would expect if an amylose chain of 120 glucose monomers was used for glycolysis.",
        a: `<p><strong>Class key:</strong> 240 pyruvate molecules and a maximum of 480 ATP (but 240 would be consumed), and 240 NADH.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Per glucose</th><th>× 120 glucose</th></tr></thead>
<tbody>
<tr><td>Pyruvate</td><td>2</td><td><strong>240</strong></td></tr>
<tr><td>ATP made</td><td>4</td><td>480</td></tr>
<tr><td>ATP used</td><td>2</td><td>240</td></tr>
<tr><td>Net ATP</td><td>2</td><td><strong>240</strong></td></tr>
<tr><td>NADH</td><td>2</td><td><strong>240</strong></td></tr>
<tr><td>H<sub>2</sub>O</td><td>2</td><td>240</td></tr>
</tbody></table></div>
<p>Amylose (a form of starch) must first be hydrolyzed into its 120 glucose monomers. A straight chain of 120 has 119 glycosidic bonds, so this uses 119 H<sub>2</sub>O. Then each glucose goes through glycolysis.</p>`
      },
      {
        tier: "likely",
        q: "Part 1, Q6: What problems remain for the cell to solve after glycolysis is finished?",
        a: `<ol>
<li><strong>Regenerate NAD<sup>+</sup>.</strong> Step 6 needs NAD<sup>+</sup>, and the cell has only a small supply. Glycolysis turns it into NADH (2 per glucose). Unless NADH is oxidized back to NAD<sup>+</sup>, step 6 stops and so does glycolysis.</li>
<li><strong>Remove the pyruvate.</strong> If the product builds up, it stalls the reaction pathway: the later steps slow down when their product isn't cleared away.</li>
<li>(Minor) The cell also needs ADP back to make ATP. Cells use ATP so constantly that this isn't really a concern.</li>
</ol>
<p>How the problems are solved: with O<sub>2</sub>, pyruvate is removed into the mitochondrion (pyruvate oxidation) and NAD<sup>+</sup> is regenerated by the ETC. Without O<sub>2</sub>, fermentation solves both at once by using pyruvate (or acetaldehyde) to accept NADH's electrons.</p>`
      },
      {
        tier: "likely",
        q: "Part 2, Q1: Summarize the three chemical events that occur to bring pyruvate into the mitochondria.",
        a: `<p>Once pyruvate is inside the mitochondrial matrix, the pyruvate dehydrogenase complex carries out three events:</p>
<ol>
<li><strong>Decarboxylation:</strong> a CO<sub>2</sub> molecule is removed, so pyruvate (3 C) becomes a 2-carbon acetyl group.</li>
<li><strong>Oxidation–reduction:</strong> pyruvate is oxidized, and the coupled reduction converts <strong>NAD<sup>+</sup> → NADH</strong>.</li>
<li><strong>Coenzyme A attaches</strong> to the acetyl group, forming <strong>acetyl-CoA</strong>, which enters the Krebs cycle.</li>
</ol>
<div class="eq">pyruvate + NAD<sup>+</sup> + CoA → acetyl-CoA + CO<sub>2</sub> + NADH</div>`,
        note: "The key says pyruvate \"passes through a transport protein that cleaves off a CO<sub>2</sub>\". More precisely, a transport protein carries pyruvate across the membranes, and the CO<sub>2</sub> is removed in the matrix by the pyruvate dehydrogenase complex. (The class notes wrote \"pyruvate decarboxylase\", but that is the yeast fermentation enzyme.)"
      },
      {
        tier: "likely",
        q: "Part 2, Q2: Complete Table 1 for the oxidation of pyruvate.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>ATP</th><th>NADH + H<sup>+</sup></th><th>FADH<sub>2</sub></th><th>CO<sub>2</sub></th></tr></thead>
<tbody>
<tr><td>Oxidation of pyruvate (prep or link step)</td><td>0</td><td>2</td><td>0</td><td>2</td></tr>
</tbody></table></div>
<p>These are per glucose, which means 2 pyruvate: each pyruvate gives 1 NADH and 1 CO<sub>2</sub>. No ATP is made in this step.</p>`
      },
      {
        tier: "likely",
        q: "Part 3, Q1: State which steps of the Krebs cycle involve substrate-level phosphorylation.",
        a: `<p><strong>Only one: succinyl-CoA → succinate</strong> (step 5). The energy released when CoA is removed is used to make a <strong>GTP</strong> from GDP + P<sub>i</sub>. The GTP immediately passes its phosphate to ADP, making <strong>ATP</strong>. That is 1 ATP per turn and 2 per glucose.</p>
<p>Substrate-level phosphorylation is the addition or removal of a phosphate group directly catalyzed by an enzyme (a kinase or synthetase), not by ATP synthase. You don't need to memorize every step, but you should be able to find this one on a diagram.</p>`
      },
      {
        tier: "likely",
        q: "Part 3, Q2: Which steps of the Krebs cycle are oxidation-reduction reactions? For each, state which molecule is reduced and which is oxidized.",
        a: `<p>In each case a molecule of <strong>NAD<sup>+</sup> or FAD is reduced</strong> and the <strong>carbon compound is oxidized</strong>.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Step</th><th>Oxidized</th><th>Reduced</th></tr></thead>
<tbody>
<tr><td>Isocitrate → α-ketoglutarate</td><td>isocitrate</td><td>NAD<sup>+</sup> → NADH (and CO<sub>2</sub> released)</td></tr>
<tr><td>α-ketoglutarate → succinyl-CoA</td><td>α-ketoglutarate</td><td>NAD<sup>+</sup> → NADH (and CO<sub>2</sub> released)</td></tr>
<tr><td>Succinate → fumarate</td><td>succinate</td><td>FAD → FADH<sub>2</sub></td></tr>
<tr><td>Malate → oxaloacetate</td><td>malate</td><td>NAD<sup>+</sup> → NADH</td></tr>
</tbody></table></div>
<p>4 redox steps per turn: 3 NADH + 1 FADH<sub>2</sub>.</p>`
      },
      {
        tier: "likely",
        q: "Part 3, Q3: Complete Table 1 for the Krebs cycle.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>ATP</th><th>NADH + H<sup>+</sup></th><th>FADH<sub>2</sub></th><th>CO<sub>2</sub></th></tr></thead>
<tbody>
<tr><td>Krebs cycle</td><td>2</td><td>6</td><td>2</td><td>4</td></tr>
</tbody></table></div>
<p>These are per glucose (2 turns). Per turn: 1 ATP, 3 NADH, 1 FADH<sub>2</sub>, 2 CO<sub>2</sub>.</p>`
      },
      {
        tier: "likely",
        q: "Part 3, Q4: Calculate the efficiency of glycolysis and the Krebs cycle. (Remember: 94 ATP produced is an efficiency of 100%.)",
        a: `<p><strong>Where 94 comes from.</strong> Completely oxidizing 1 mol of glucose releases about <strong>686 kcal</strong> (≈ 2870 kJ). Making 1 mol of ATP from ADP + P<sub>i</sub> stores about <strong>7.3 kcal</strong> (≈ 30.5 kJ). If every bit of glucose's energy went into ATP, you would get:</p>
<div class="eq">686 kcal/mol ÷ 7.3 kcal/mol per ATP ≈ 94 ATP = 100% efficiency</div>
<p><strong>Class key calculation.</strong> Glycolysis makes 4 ATP and the Krebs cycle adds 2 more per glucose, for 6 ATP:</p>
<div class="eq">6 / x = 94 / 100 &nbsp;→&nbsp; efficiency = (6 ÷ 94) × 100 ≈ 6.4% ≈ <strong>6%</strong></div>
<p>So only about 6% of glucose's energy has been captured as ATP by the end of the Krebs cycle. Most of the rest is held in the 10 NADH and 2 FADH<sub>2</sub>, waiting for the ETC. Some is lost as heat.</p>
<p>Comparisons: with the ETC, the full process gives 36–38 ATP, so 36 ÷ 94 ≈ 38% (38 ÷ 94 ≈ 40%). Fermentation's 2 ATP is only about 2%.</p>`,
        note: "The key's 6 ATP counts the 4 ATP <em>made</em> in glycolysis plus 2 from Krebs. If you use <em>net</em> ATP (2 + 2 = 4), you get 4 ÷ 94 ≈ 4%. Show your reasoning either way; the key's answer is 6%."
      },
      {
        tier: "likely",
        q: "Part 3, Q5: Look at the overall equation for cellular respiration again. Which reactants and products are accounted for by glycolysis and the Krebs cycle? Which are not?",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Part of the equation</th><th>Accounted for yet?</th></tr></thead>
<tbody>
<tr><td>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></td><td><strong>Yes</strong>: used in glycolysis</td></tr>
<tr><td>6 CO<sub>2</sub></td><td><strong>Yes</strong>: 2 from pyruvate oxidation and 4 from the Krebs cycle. All the carbon originally trapped in glucose by photosynthesis has now been released.</td></tr>
<tr><td>6 O<sub>2</sub></td><td><strong>No</strong>: oxygen gas is still not part of the process. It is used at the ETC.</td></tr>
<tr><td>6 H<sub>2</sub>O</td><td><strong>No</strong>: the water in the equation is made at the ETC. The Krebs cycle actually <em>uses</em> water.</td></tr>
<tr><td>ATP</td><td>Only a small part: 4 of the 36–38</td></tr>
</tbody></table></div>`
      },
      {
        tier: "likely",
        q: "Part 3, Q6: Does the Krebs cycle solve the problems that remained after glycolysis?",
        a: `<p><strong>Only one of them: the pyruvate.</strong> Moving pyruvate into the mitochondrion and converting it to acetyl-CoA clears it away, so it no longer slows glycolysis.</p>
<p><strong>It does not regenerate NAD<sup>+</sup>.</strong> It makes the problem worse: pyruvate oxidation and the Krebs cycle turn 8 more NAD<sup>+</sup> into NADH per glucose (2 + 6), and also FAD into FADH<sub>2</sub>. Without NAD<sup>+</sup> to accept high-energy electrons, glycolysis (and the Krebs cycle itself) would slow down and stop. The ETC solves this problem (Part 4).</p>`
      },
      {
        tier: "likely",
        q: "Part 4, Q1: Label a diagram of the ETC (name the electron carriers and enzymes). Then identify which steps are oxidation-reduction reactions and, for each, which molecule is reduced and which is oxidized.",
        a: `<p><strong>Labels:</strong> intermembrane space (top), inner membrane (cristae), matrix (bottom); NADH → NAD<sup>+</sup> at complex I (NADH dehydrogenase); FADH<sub>2</sub> → FAD at complex II (succinate dehydrogenase); ubiquinone (Q); complex III (cytochrome bc<sub>1</sub>); cytochrome c; complex IV (cytochrome c oxidase) with ½O<sub>2</sub> + 2H<sup>+</sup> → H<sub>2</sub>O; ATP synthase with ADP + P<sub>i</sub> → ATP; H<sup>+</sup> arrows pumped up at I, III and IV and flowing down through ATP synthase. (See the diagram in Review Q16.)</p>
<p><strong>Redox steps.</strong> NADH and FADH<sub>2</sub> are now <em>oxidized</em> to remove their high-energy electrons. The electrons are passed along the chain through the proton pumps and carrier molecules. As a carrier receives electrons it is reduced, and as it passes them on it is oxidized.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Electron transfer</th><th>Oxidized</th><th>Reduced</th></tr></thead>
<tbody>
<tr><td>NADH → complex I</td><td>NADH (→ NAD<sup>+</sup>)</td><td>complex I</td></tr>
<tr><td>FADH<sub>2</sub> → complex II</td><td>FADH<sub>2</sub> (→ FAD)</td><td>complex II</td></tr>
<tr><td>I or II → ubiquinone</td><td>complex I or II</td><td>ubiquinone (Q)</td></tr>
<tr><td>Q → complex III</td><td>Q</td><td>complex III</td></tr>
<tr><td>III → cytochrome c</td><td>complex III</td><td>cytochrome c</td></tr>
<tr><td>cytochrome c → complex IV</td><td>cytochrome c</td><td>complex IV</td></tr>
<tr><td>IV → O<sub>2</sub></td><td>complex IV</td><td><strong>O<sub>2</sub></strong>, which with H<sup>+</sup> forms H<sub>2</sub>O</td></tr>
</tbody></table></div>
<p>Oxidizing NADH at complex I regenerates the NAD<sup>+</sup> that glycolysis needs, which solves the last problem left over from glycolysis.</p>`
      },
      {
        tier: "essential",
        q: "Part 4, Q2: Explain the role of the hydrogen ion gradient in the production of ATP in the mitochondria.",
        a: `<p>The H<sup>+</sup> gradient is stored energy, like water held behind a dam.</p>
<ul>
<li>The ETC pumps H<sup>+</sup> into the intermembrane space, so there is a high concentration and positive charge outside the inner membrane and a low concentration inside. This is an <strong>electrochemical gradient</strong>.</li>
<li>The inner membrane is impermeable to H<sup>+</sup>, so the gradient <strong>forces protons through ATP synthase</strong>, their only available pathway back into the matrix. This is facilitated diffusion (passive, down the gradient).</li>
<li>The flow of H<sup>+</sup> through ATP synthase provides the energy to phosphorylate <strong>ADP + P<sub>i</sub> → ATP</strong>.</li>
<li>The <strong>stronger the gradient, the faster ATP is produced</strong>.</li>
</ul>
<p>Making ATP this way is <span class="term">chemiosmosis</span>, and it is the cell's other way to make ATP besides substrate-level phosphorylation. It makes most of the cell's ATP.</p>`
      },
      {
        tier: "likely",
        q: "Part 4, Q3: Fill in the overview diagram of cellular respiration (rectangles = substances, ovals = processes, stars = number of ATP), and label where in the cell each process takes place.",
        a: `<p>Work from the top down:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Shape</th><th>Fill in</th><th>Where in the cell</th></tr></thead>
<tbody>
<tr><td>Rectangle (top)</td><td><strong>glucose</strong></td><td>cytoplasm</td></tr>
<tr><td>Oval + two stars</td><td><strong>glycolysis</strong>. ATP star in: 2 ATP invested. ATP star out: 4 ATP made (net 2).</td><td>cytoplasm</td></tr>
<tr><td>Rectangle</td><td><strong>pyruvate</strong></td><td>cytoplasm</td></tr>
<tr><td>No O<sub>2</sub> branch: ovals</td><td><strong>fermentation (animal)</strong> and <strong>fermentation (yeast)</strong></td><td>cytoplasm</td></tr>
<tr><td>No O<sub>2</sub> branch: rectangles</td><td><strong>lactic acid</strong> (lactate; two-way arrows because it can be turned back into pyruvate) and <strong>ethanol</strong> (+ CO<sub>2</sub>)</td><td>cytoplasm</td></tr>
<tr><td>O<sub>2</sub> branch: rectangle</td><td><strong>acetyl-CoA</strong> (made by pyruvate oxidation)</td><td>mitochondrial matrix</td></tr>
<tr><td>Oval + star</td><td><strong>Krebs cycle</strong>, with an ATP star of 2 ATP</td><td>mitochondrial matrix</td></tr>
<tr><td>Rectangle</td><td><strong>NADH / FADH<sub>2</sub></strong></td><td>carried to the inner membrane</td></tr>
<tr><td>Oval + star</td><td><strong>ETC</strong> (and chemiosmosis), with an ATP star of about 32–34 ATP</td><td>inner mitochondrial membrane (cristae)</td></tr>
</tbody></table></div>`,
        note: "On the key's diagram, the Krebs ATP star is drawn beside acetyl-CoA, but the key itself says it really belongs next to the Krebs cycle."
      },
      {
        tier: "likely",
        q: "Part 5, Q1: Compare and contrast the process of fermentation in bacterial cells and in animal tissue.",
        a: `<p><strong>Similarities.</strong> In both, pyruvate is turned into a form the cell can dispose of, to the environment (microbes) or to the bloodstream (animals), so glycolysis can keep running at full efficiency. Both consume the NADH made in glycolysis, regenerating NAD<sup>+</sup>. Both happen in the cytoplasm without O<sub>2</sub>, and both yield only glycolysis's 2 ATP per glucose.</p>
<p><strong>Difference: the product.</strong></p>
<div class="compare">
<div><h4>Bacteria / yeast: alcoholic</h4><ul><li>Pyruvate → acetaldehyde + <strong>CO<sub>2</sub></strong> (pyruvate decarboxylase), then acetaldehyde + NADH → <strong>ethanol</strong> + NAD<sup>+</sup> (alcohol dehydrogenase)</li><li>Two steps</li><li>Releases CO<sub>2</sub></li><li><strong>Irreversible</strong>: the carbon lost as CO<sub>2</sub> can't be put back</li></ul></div>
<div><h4>Animal tissue: lactic acid</h4><ul><li>Pyruvate + NADH → <strong>lactate</strong> + NAD<sup>+</sup> (lactate dehydrogenase)</li><li>One step</li><li>No CO<sub>2</sub></li><li><strong>Reversible</strong>: lactate goes to the liver, which converts it back to pyruvate (and into glucose) when oxygen is plentiful again</li></ul></div>
</div>`,
        note: "The key says \"bacterial cells\" make ethanol. Alcoholic fermentation is done by yeast (a fungus) and some bacteria, but many bacteria, such as those that make yogurt, carry out lactic acid fermentation instead."
      },
      {
        tier: "likely",
        q: "Part 5, Q2: Complete Table 1 and the flow chart for animal tissue fermentation.",
        a: `<p><strong>Completed Table 1: Tracking Molecules in Respiration</strong> (per glucose; negative = used)</p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>ATP</th><th>NADH + H<sup>+</sup></th><th>FADH<sub>2</sub></th><th>CO<sub>2</sub></th></tr></thead>
<tbody>
<tr><td>Glycolysis</td><td>−2 ATP, +4 ATP (net 2)</td><td>2</td><td>0</td><td>0</td></tr>
<tr><td>Oxidation of pyruvate (prep or link step)</td><td>0</td><td>2</td><td>0</td><td>2</td></tr>
<tr><td>Krebs cycle</td><td>2</td><td>6</td><td>2</td><td>4</td></tr>
<tr><td>Fermentation (animal tissue)</td><td>0</td><td>−2</td><td>0</td><td>0</td></tr>
</tbody></table></div>
<p>Aerobic route through Krebs: net 4 ATP, 10 NADH, 2 FADH<sub>2</sub>, 6 CO<sub>2</sub>. Anaerobic route (glycolysis + fermentation): net 2 ATP and 0 NADH, because the 2 NADH made are used up again.</p>
<p><strong>Flow chart (animal tissue):</strong></p>
<div class="eq">glucose → glycolysis (net +2 ATP; 2 NAD<sup>+</sup> → 2 NADH) → 2 pyruvate</div>
<div class="eq">2 pyruvate + 2 NADH → 2 lactate + 2 NAD<sup>+</sup> &nbsp;(lactate dehydrogenase)</div>
<p>Draw an arrow carrying the 2 NAD<sup>+</sup> back to step 6 of glycolysis.</p>`,
        note: "For yeast (alcoholic) fermentation the row would be ATP 0, NADH −2, FADH<sub>2</sub> 0, CO<sub>2</sub> +2."
      }
    ]
  },

  /* ------------------------------------------------------------------ 10 */
  {
    id: "qa-seven-deaths",
    title: "The Mystery of the Seven Deaths (case study)",
    lesson: "2.04",
    source: "\"The Mystery of the Seven Deaths: A Case Study in Cellular Respiration\" (National Center for Case Study Teaching in Science), Parts I–IV",
    items: [
      {
        tier: "likely",
        q: "Part I, Q1: Are there any similarities or connections between these seven individuals? What questions would you want to ask the families to answer these questions?",
        note: "Case so far: seven people died in five days in one neighbourhood. Their symptoms were dizziness, confusion, headache, shortness of breath or rapid breathing, and vomiting, and most died within hours. A 12-year-old took an extra-strength Tylenol overnight and was found collapsed in the morning. A man collapsed at home, and his brother and fiancée collapsed that night after taking Tylenol.",
        a: `<h4>Similarities and connections</h4>
<ul>
<li><strong>Tylenol.</strong> In every case described, the victim took extra-strength Tylenol shortly before collapsing. This is the strongest link.</li>
<li><strong>Place and time.</strong> All the deaths were in the same neighbourhood within five days, so the victims could share a local source: the same stores, pharmacy, water or event.</li>
<li><strong>Same symptoms</strong> (dizziness, confusion, headache, shortness of breath, vomiting) and the same <strong>very rapid</strong> course, with death within hours.</li>
<li><strong>Different ages and sexes</strong>, including a healthy 12-year-old. That makes a shared chronic illness or "natural causes" unlikely.</li>
<li><strong>Three people from one family</strong> collapsed on the same day, which suggests something they shared at home.</li>
</ul>
<p>The two collapses with a known location happened in a kitchen and a bathroom. That is worth noting (could fumes or cleaning products be involved?). But those are also the rooms where people keep and take medicine, and fumes would not explain deaths in different homes over five days.</p>
<h4>Questions to ask the families</h4>
<ul>
<li>What did the person eat, drink or take (medicines, supplements) in the 24 hours before they got sick, and exactly when?</li>
<li>If they took Tylenol: tablets or capsules? Where and when was the bottle bought? Do you still have it (lot number)? Was the seal intact? Did anything look or smell unusual?</li>
<li>How long after taking it did the symptoms start, and in what order?</li>
<li>Did the victims know each other, or share stores, a workplace, a school, meals or events?</li>
<li>Was anyone else in the home sick? Were gas appliances, chemicals or cleaning products in use? (This rules out carbon monoxide or fumes.)</li>
<li>What was their medical history (illnesses, allergies, recent infections)? This rules out natural causes.</li>
</ul>`
      },
      {
        tier: "likely",
        q: "Part I, Q2: In your opinion, are these seven deaths connected? Why or why not?",
        a: `<p><strong>Yes, very likely.</strong> Seven deaths in five days in one neighbourhood is far above normal, and the victims shared:</p>
<ul>
<li>the same set of symptoms and the same fast course (hours, not days);</li>
<li>the same place and time window;</li>
<li>a common exposure: every case described involved taking Tylenol shortly before collapsing.</li>
</ul>
<p>Natural disease is a poor fit. An infection would not kill a healthy child and three members of one family within hours, and the victims range widely in age. A shared <strong>poison</strong> fits best. The symptoms point to the organs that use the most energy, the brain (confusion, dizziness, headache) and the heart (collapse). The working hypothesis to test is that something in the Tylenol is responsible.</p>`
      },
      {
        tier: "likely",
        q: "Part II, Q1: Recalling your knowledge of the function of organelles, what function of the cells was interrupted in these patients? Could this loss of function lead to the death of these individuals? Why or why not?",
        note: "Autopsy: death from hypoxia (lack of oxygen); massive cell death in heart, lung, kidney and liver; major mitochondrial damage; blood oxygen about 110 mm Hg (normal 75–100 mm Hg).",
        a: `<p><strong>The function interrupted is aerobic cellular respiration in the mitochondria</strong>, especially the ETC and oxidative phosphorylation, the stage that makes most of the cell's ATP. The stains showed major mitochondrial damage in exactly the tissues that died.</p>
<p><strong>Yes, this can kill, and quickly:</strong></p>
<ul>
<li>Oxidative phosphorylation makes about 34 of the 36–38 ATP per glucose. Without it, cells have only glycolysis, at 2 ATP per glucose, which is nowhere near enough.</li>
<li>Cells store very little ATP, so they run out within minutes. Without ATP, active transport pumps (such as the Na<sup>+</sup>/K<sup>+</sup> pump) stop. Cells lose control of their ions and water, nerve signalling and muscle contraction fail, and the cells die. This is the "massive cell death" in the autopsy.</li>
<li>The organs hit hardest (heart, brain, lungs, liver, kidneys) have very high energy demands. When the heart muscle and the brain's breathing centres fail, the person collapses and dies within hours, which matches the case.</li>
</ul>`
      },
      {
        tier: "likely",
        q: "Part II, Q2: Given the data in the autopsy, were there any reports that seemed inconsistent with the immediate cause of death?",
        a: `<p><strong>Yes: the blood oxygen level.</strong> The immediate cause of death was <strong>hypoxia</strong>, a lack of oxygen. Yet the patients' blood oxygen was about <strong>110 mm Hg</strong>, <em>higher</em> than the normal range of 75–100 mm Hg. If they were suffocating, their blood oxygen should have been low.</p>
<p>What it tells you: the lungs and blood were delivering plenty of oxygen to the tissues, but the cells were not <em>using</em> it, so the oxygen stayed in the blood. The problem is inside the cells, at the step that consumes O<sub>2</sub> (the end of the ETC), not with breathing or circulation. This fits the mitochondrial damage.</p>
<p>The rapid breathing fits too. Cells forced to rely on glycolysis and lactic acid fermentation build up acid, and the body responds by breathing faster, even though blood O<sub>2</sub> is already high.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Here "110 mm Hg" is <strong>not blood pressure</strong>. It is the <strong>partial pressure of oxygen</strong> in the blood, a measure of how much O<sub>2</sub> the blood is carrying. Both are measured in mm Hg, which makes them easy to mix up.</p></div>`,
        note: "If you read 110 mm Hg as high blood pressure, that's an easy slip because both use mm Hg. It is the blood's oxygen level, and the real inconsistency is \"died of lack of oxygen while carrying more oxygen than normal.\""
      },
      {
        tier: "likely",
        q: "Part III, Q1: For each metabolite listed in the table, describe its role in cellular respiration. Is it a substrate or a product? What is its main function?",
        note: "Analysis of the damaged cells: ATP in the mitochondria was very low; pyruvate and acetyl-CoA were normal.",
        a: `<p><strong>Average metabolite levels</strong></p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Metabolite</th><th>Average patient level</th><th>Normal level</th></tr></thead>
<tbody>
<tr><td>Glucose</td><td>99 µM</td><td>100 µM</td></tr>
<tr><td>Pyruvate</td><td>27 µM</td><td>25 µM</td></tr>
<tr><td>NAD<sup>+</sup></td><td>10 µM</td><td>75 µM</td></tr>
<tr><td>NADH</td><td>400 µM</td><td>50 µM</td></tr>
</tbody></table></div>
<div class="table-wrap"><table class="data">
<thead><tr><th>Metabolite</th><th>Substrate or product?</th><th>Role and main function</th></tr></thead>
<tbody>
<tr><td>Glucose</td><td><strong>Substrate</strong> (reactant) of glycolysis</td><td>The fuel. Its chemical bonds store the energy; glycolysis splits it into 2 pyruvate.</td></tr>
<tr><td>Pyruvate</td><td><strong>Product</strong> of glycolysis; <strong>substrate</strong> of pyruvate oxidation (or fermentation)</td><td>The link between glycolysis in the cytoplasm and the mitochondria, where it becomes acetyl-CoA for the Krebs cycle.</td></tr>
<tr><td>NAD<sup>+</sup></td><td><strong>Substrate</strong> in glycolysis (step 6), pyruvate oxidation and Krebs; regenerated as a <strong>product</strong> of the ETC (complex I)</td><td>The oxidized, "empty" electron carrier. It accepts high-energy electrons (an oxidizing agent). Without it, glycolysis and Krebs stop.</td></tr>
<tr><td>NADH</td><td><strong>Product</strong> of glycolysis, pyruvate oxidation and Krebs; <strong>substrate</strong> of the ETC</td><td>The reduced, "full" carrier. It delivers high-energy electrons to complex I, powering H<sup>+</sup> pumping and most ATP synthesis.</td></tr>
</tbody></table></div>
<p>NAD<sup>+</sup> and NADH are both substrates and products depending on the stage. They cycle back and forth, which is why the balance between them matters so much.</p>`
      },
      {
        tier: "likely",
        q: "Part III, Q2: Are there any abnormalities in the levels of these metabolites in the victims? Develop a hypothesis about which pathway may be affected based on these abnormalities.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Metabolite</th><th>Patients vs normal</th><th>Verdict</th></tr></thead>
<tbody>
<tr><td>Glucose</td><td>99 vs 100 µM</td><td>Normal</td></tr>
<tr><td>Pyruvate</td><td>27 vs 25 µM</td><td>About normal</td></tr>
<tr><td>Acetyl-CoA</td><td>(reported normal)</td><td>Normal</td></tr>
<tr><td>NAD<sup>+</sup></td><td>10 vs 75 µM</td><td><strong>Very low</strong>, about 7.5 times below normal</td></tr>
<tr><td>NADH</td><td>400 vs 50 µM</td><td><strong>Very high</strong>, 8 times above normal</td></tr>
<tr><td>ATP</td><td>(reported very low)</td><td><strong>Very low</strong></td></tr>
</tbody></table></div>
<p><strong>Hypothesis:</strong> the <strong>electron transport chain (oxidative phosphorylation) is blocked</strong>, so NADH is not being oxidized back to NAD<sup>+</sup> and very little ATP is being made.</p>`
      },
      {
        tier: "likely",
        q: "Part III, Q3: Explain your reasoning for your hypothesis.",
        a: `<ul>
<li><strong>The early stages are working.</strong> Glucose, pyruvate and acetyl-CoA are all normal, so glycolysis and pyruvate oxidation are running. The problem is further down the pathway.</li>
<li><strong>NADH is piling up and NAD<sup>+</sup> is used up.</strong> Glycolysis, pyruvate oxidation and the Krebs cycle keep turning NAD<sup>+</sup> into NADH. In aerobic cells, the main way NADH is turned back into NAD<sup>+</sup> is at complex I of the ETC. If the ETC has stopped, NADH builds up and NAD<sup>+</sup> runs out. That is exactly the pattern here: the ratio has flipped from 75 : 50 to 10 : 400.</li>
<li><strong>ATP is very low.</strong> The ETC and chemiosmosis make most of the cell's ATP.</li>
<li><strong>It fits the other evidence.</strong> The ETC sits on the inner mitochondrial membrane (mitochondrial damage), and O<sub>2</sub> is used only at the end of the ETC. A stopped ETC means cells stop using O<sub>2</sub>, which explains the high blood oxygen and the "hypoxia".</li>
<li><strong>Why not the Krebs cycle?</strong> If Krebs were the blocked step, acetyl-CoA would build up and NADH would be <em>lower</em>, because Krebs makes 6 of the 10 NADH per glucose. Neither happened.</li>
</ul>`
      },
      {
        tier: "likely",
        q: "Part IV, Q1: Cyanide irreversibly binds to cytochrome c oxidase (complex IV) and prevents the transfer of electrons to oxygen. What effect would cyanide have on the electron transport chain and the production of ATP? Explain your answer.",
        a: `<p>Cyanide shuts down the ETC, and with it nearly all ATP production.</p>
<ol>
<li><strong>Electrons can't reach O<sub>2</sub>.</strong> Complex IV, the last carrier, can't hand its electrons to the final electron acceptor, so it stays reduced.</li>
<li><strong>The chain backs up.</strong> Cytochrome c, complex III, ubiquinone and complex I all fill with electrons they can't pass on, so electron flow stops along the whole chain.</li>
<li><strong>Proton pumping stops.</strong> No electron flow means no free energy to pump H<sup>+</sup>. The gradient runs down, ATP synthase stops, and oxidative phosphorylation (most of the cell's ATP) stops.</li>
<li><strong>NAD<sup>+</sup> runs out.</strong> NADH can't be oxidized at complex I, so NADH builds up and NAD<sup>+</sup> disappears, exactly as in the Part III data. Without NAD<sup>+</sup> (and FAD), pyruvate oxidation and the Krebs cycle stop too.</li>
<li><strong>Only glycolysis is left</strong>, kept going by lactic acid fermentation. That gives just 2 ATP per glucose, and lactic acid builds up.</li>
</ol>
<p>Because cyanide binds <strong>irreversibly</strong>, the block doesn't wear off. High-demand cells in the heart and brain run out of ATP and die within minutes to hours.</p>`
      },
      {
        tier: "likely",
        q: "Part IV, Q2: Given what you now know about the action of cyanide on cellular respiration, explain why the patients died of lack of oxygen while their blood oxygen levels were normal.",
        a: `<p>Because the problem was not getting oxygen <em>to</em> the cells. It was <em>using</em> oxygen inside them.</p>
<ul>
<li>Inside cells, O<sub>2</sub> is consumed in one place: complex IV, where it accepts electrons and forms water. Cyanide blocks complex IV, so the cells can't use O<sub>2</sub> at all.</li>
<li>Tissues normally draw O<sub>2</sub> out of the blood because they keep using it up. That keeps O<sub>2</sub> low inside the cells, so it diffuses in from the blood. Once the cells stop consuming O<sub>2</sub>, it stops diffusing out of the blood and stays there. That's why blood oxygen was normal or even high (110 mm Hg).</li>
<li>The cells still suffered all the effects of having no oxygen. With no working final electron acceptor, they had no ETC and almost no ATP, even though oxygen was all around them. This is <strong>cellular (histotoxic) hypoxia</strong>: the tissues can't use the oxygen they are given.</li>
</ul>
<p>In short, the victims were suffocating at the level of their mitochondria while their blood was full of oxygen.</p>`
      },
      {
        tier: "likely",
        q: "Part IV, Q3: Would artificial respiration or oxygenation have saved these people? Why or why not?",
        a: `<p><strong>No, not on its own.</strong> Artificial respiration and extra oxygen fix problems with <em>delivering</em> O<sub>2</sub>, such as not breathing or low blood oxygen. These patients already had more O<sub>2</sub> in their blood than normal. Their problem was that cyanide was bound <strong>irreversibly</strong> to complex IV, so their cells couldn't <em>use</em> the oxygen. Adding more O<sub>2</sub> can't unblock complex IV, so the ETC still wouldn't run and ATP production would still fail.</p>
<p>Saving a cyanide victim means removing the cyanide from complex IV quickly, using an antidote that binds cyanide, along with supportive care. Hospitals do give oxygen during treatment, but as support, not as the cure.</p>`,
        note: "The specific antidotes (such as hydroxocobalamin, a form of vitamin B<sub>12</sub> that binds cyanide) are beyond this course. The point for the test is that O<sub>2</sub> delivery was never the problem."
      },
      {
        tier: "likely",
        q: "Part IV, Q4: Looking back at the information about the people before they got sick, can you suggest a possible source of the cyanide poisoning? How should public health officials and police respond to this tragedy?",
        a: `<p><strong>Likely source: the extra-strength Tylenol.</strong> It is the one thing the victims are known to have shared. Each took it shortly before collapsing, and the deaths were clustered in one area, served by the same stores. The most likely explanation is <strong>product tampering</strong>: someone put cyanide into capsules and returned the bottles to store shelves. The case is based on the real 1982 Chicago-area poisonings, in which seven people died after taking cyanide-laced Extra-Strength Tylenol capsules.</p>
<h4>Public health response</h4>
<ul>
<li>Warn the public immediately (news, radio, TV, social media) to stop using the product.</li>
<li>Recall the product and pull it from every store. In 1982 about 31 million bottles were recalled nationwide.</li>
<li>Test bottles from the victims' homes and from stores, and trace lot numbers and purchase locations.</li>
<li>Alert hospitals and poison control to the signs of cyanide poisoning so they can treat it fast, and set up a hotline for worried people.</li>
<li>Prevent it happening again with tamper-evident packaging (sealed caps, foil seals) and safer dose forms such as solid caplets in place of capsules. These changes became standard after 1982.</li>
</ul>
<h4>Police response</h4>
<ul>
<li>Treat the deaths as homicides. Open a criminal investigation and coordinate with health officials and the manufacturer.</li>
<li>Trace where each bottle was bought, look for tampering patterns, review store records and witnesses, and secure the evidence.</li>
<li>Monitor affected stores, and support laws that make product tampering a serious crime (this also happened after 1982).</li>
</ul>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 11 */
  {
    id: "qa-yeast",
    title: "Yeast Fermentation assignment: science content prep",
    lesson: "2.07",
    source: "Yeast Fermentation in Action assignment: the Mandatory Scientific Content Requirements, turned into questions",
    items: [
      {
        tier: "likely",
        q: "1a. Give the word equation and the balanced chemical equation for alcoholic fermentation.",
        a: `<div class="eq">glucose → ethanol + carbon dioxide (+ energy as 2 ATP)</div>
<div class="eq">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub> &nbsp;(+ 2 ATP, from 2 ADP + 2 P<sub>i</sub>)</div>
<p>Check that it balances: C 6 = (2 × 2) + 2; H 12 = 2 × 6; O 6 = (2 × 1) + (2 × 2). Ethanol can also be written CH<sub>3</sub>CH<sub>2</sub>OH.</p>
<p>If your recipe uses table sugar (sucrose), yeast first split it into glucose + fructose. The overall equation then becomes C<sub>12</sub>H<sub>22</sub>O<sub>11</sub> + H<sub>2</sub>O → 4 C<sub>2</sub>H<sub>5</sub>OH + 4 CO<sub>2</sub>.</p>`
      },
      {
        tier: "likely",
        q: "1b. Compare the net ATP yield of alcoholic fermentation to full aerobic respiration.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Alcoholic fermentation</th><th>Aerobic respiration</th></tr></thead>
<tbody>
<tr><td>Net ATP per glucose</td><td><strong>2</strong> (from glycolysis only)</td><td><strong>36–38</strong> (realistically 30–32)</td></tr>
<tr><td>Share of glucose's energy captured (94 ATP = 100%)</td><td>≈ 2%</td><td>≈ 38–40%</td></tr>
<tr><td>Final electron acceptor</td><td>acetaldehyde (organic)</td><td>O<sub>2</sub></td></tr>
<tr><td>End products</td><td>ethanol + CO<sub>2</sub></td><td>CO<sub>2</sub> + H<sub>2</sub>O</td></tr>
</tbody></table></div>
<p>Aerobic respiration makes about <strong>18–19 times more ATP</strong> per glucose. Fermentation yields so little for two reasons. First, there is no Krebs cycle or ETC, so NADH's electrons are used to regenerate NAD<sup>+</sup> instead of making ATP. Second, glucose is only partly broken down: ethanol still holds much of the original energy, which is why ethanol burns as a fuel.</p>
<p>Consequence: a fermenting yeast cell has to go through sugar much faster to get the same ATP, which is why it pumps out so much CO<sub>2</sub> so quickly.</p>`
      },
      {
        tier: "likely",
        q: "2a. Glycolysis in yeast: where does it occur, and what are its substrate inputs and products?",
        a: `<p><strong>Where:</strong> in the <strong>cytoplasm (cytosol)</strong> of the yeast cell. Yeast are eukaryotes (fungi) and do have mitochondria, but glycolysis always happens in the cytosol, with or without oxygen.</p>
<p><strong>Inputs:</strong> glucose, 2 ATP (invested in steps 1 and 3), 2 NAD<sup>+</sup> and 2 P<sub>i</sub> (step 6), and 4 ADP (steps 7 and 10).</p>
<p><strong>Products</strong> (per glucose):</p>
<div class="tally"><span class="chip">2 pyruvate</span><span class="chip atp">4 ATP made, net 2</span><span class="chip nadh">2 NADH</span><span class="chip">2 H<sub>2</sub>O</span></div>
<p>How it runs: 10 enzyme-catalyzed steps. In the investment phase (steps 1–5), 2 ATP destabilize glucose and it is split into two 3-carbon G3P. In the payoff phase (steps 6–10), each G3P is oxidized (NAD<sup>+</sup> → NADH) and 4 ATP are made by substrate-level phosphorylation. No O<sub>2</sub> is used and no CO<sub>2</sub> is made.</p>
<p>Where the sugar comes from in dough: added sugar, plus sugar released from flour. Enzymes (amylases) break flour starch into maltose, which yeast take in and split into glucose. Table sugar (sucrose) is split by an enzyme yeast release (invertase) into glucose + fructose, both of which enter glycolysis.</p>`
      },
      {
        tier: "likely",
        q: "2b. Fermentation step: explain all of the steps involved in alcoholic fermentation.",
        a: `<ol class="steps">
<li><p class="step-head">Glycolysis</p><p>In the cytoplasm, glucose → 2 pyruvate + 2 NADH + net 2 ATP. This is the only ATP the whole process makes.</p></li>
<li><p class="step-head">Decarboxylation (pyruvate decarboxylase)</p><p>A CO<sub>2</sub> is removed from each pyruvate (3 C), leaving <strong>acetaldehyde</strong> (2 C). This step is irreversible. This CO<sub>2</sub> is the gas that makes dough rise and drinks bubble.</p></li>
<li><p class="step-head">Reduction (alcohol dehydrogenase)</p><p>NADH gives its electrons (and hydrogen) to acetaldehyde, reducing it to <strong>ethanol</strong>. NADH is oxidized back to <strong>NAD<sup>+</sup></strong>. Acetaldehyde acts as the final electron acceptor in place of O<sub>2</sub>.</p></li>
<li><p class="step-head">Recycling NAD<sup>+</sup></p><p>The regenerated NAD<sup>+</sup> goes back to step 6 of glycolysis, so glycolysis can keep running and making 2 ATP per glucose without oxygen. This is the real purpose of fermentation.</p></li>
</ol>
<div class="eq">2 pyruvate → 2 acetaldehyde + 2 CO<sub>2</sub> → (+ 2 NADH) → 2 ethanol + 2 NAD<sup>+</sup></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p><strong>Pyruvate decarboxylase</strong> (yeast fermentation) is not the same as <strong>pyruvate dehydrogenase</strong> (the aerobic link step). Both remove CO<sub>2</sub> from pyruvate, but only pyruvate dehydrogenase also makes NADH and acetyl-CoA.</p></div>`
      },
      {
        tier: "likely",
        q: "3a (culinary). How does the dough expand (rise)?",
        a: `<ol>
<li><strong>Yeast make CO<sub>2</sub>.</strong> Every glucose fermented releases 2 CO<sub>2</sub> (at the pyruvate decarboxylase step). Billions of yeast cells produce a lot of gas.</li>
<li><strong>Gluten traps it.</strong> Mixing flour with water and kneading builds <span class="term">gluten</span>, a stretchy, elastic network of wheat proteins (glutenin and gliadin). The CO<sub>2</sub> dissolves in the dough's water and then collects in tiny air pockets that gluten holds in.</li>
<li><strong>Bubbles inflate.</strong> As fermentation continues during proofing, the bubbles grow and the dough expands, often doubling in volume.</li>
<li><strong>Oven spring.</strong> In the hot oven, the trapped gas expands (gases expand when heated), the yeast work faster for a few minutes before they die, and ethanol and water evaporate into the bubbles. Together these make a final rise.</li>
<li><strong>The structure sets.</strong> As the dough heats further, starch gelatinizes and the gluten proteins denature and set, locking the bubbles into the airy crumb.</li>
</ol>`
      },
      {
        tier: "likely",
        q: "3a (culinary). What happens to the ethanol during the baking process?",
        a: `<p>During proofing, ethanol builds up dissolved in the dough's water. In the oven, the inside of the loaf heats to about 95–99 °C. Ethanol boils at about <strong>78 °C</strong>, lower than water, so it <strong>evaporates and escapes</strong> from the dough.</p>
<ul>
<li>As it vaporizes, it adds to the gas in the bubbles and helps the oven spring.</li>
<li>It contributes to the smell and flavour of baking bread.</li>
<li>The yeast die once the dough reaches roughly 55–60 °C, so no more ethanol is made.</li>
</ul>
<p>Most of the ethanol is driven off, and only traces remain in the finished bread. So bread is a fermented food, but not an alcoholic one.</p>`
      },
      {
        tier: "likely",
        q: "3a (culinary). Why does temperature control during yeast activation matter?",
        a: `<p>Activation (proofing the yeast) means rehydrating dormant dried yeast in warm water with a little sugar. Everything the yeast does, including glycolysis, fermentation and taking up sugar, depends on <strong>enzymes and membrane transport proteins</strong>, and these are very sensitive to temperature.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Water temperature</th><th>What happens</th></tr></thead>
<tbody>
<tr><td>Too cold (below ~20 °C)</td><td>Molecules have little kinetic energy, so enzyme–substrate collisions are rare and metabolism is slow. The yeast stay sluggish, with little foam and a slow rise.</td></tr>
<tr><td>Lukewarm (about 35–40 °C)</td><td>Near the enzymes' optimum. Fermentation is fast and lots of CO<sub>2</sub> is made; the mixture should foam within 5–10 minutes, which proves the yeast are alive.</td></tr>
<tr><td>Too hot (above ~50 °C)</td><td>Enzymes and membrane proteins <strong>denature</strong>: they lose their 3D shape and their active sites no longer fit their substrates. Membranes are damaged and the yeast die (around 55–60 °C). No CO<sub>2</sub> is made and the dough won't rise.</td></tr>
</tbody></table></div>
<p>So temperature control keeps the yeast alive and working at their fastest rate, which is what makes the bread rise properly.</p>`
      },
      {
        tier: "likely",
        q: "3b (experiment). How does temperature affect the rate of yeast fermentation?",
        a: `<p><strong>Prediction:</strong> the rate rises with temperature up to an optimum (about 30–40 °C), then drops sharply. Above about 50–60 °C it falls to nearly zero.</p>
<ul>
<li><strong>Below the optimum:</strong> a higher temperature gives molecules more kinetic energy. That means more collisions between enzymes and substrates (faster enzyme kinetics) and more fluid membranes, so transport proteins bring glucose in faster. Fermentation speeds up and more CO<sub>2</sub> is made per minute.</li>
<li><strong>Above the optimum:</strong> heat breaks the hydrogen and ionic bonds that hold enzymes in shape, so they <strong>denature</strong> and their active sites no longer bind substrate. Membranes become leaky and the cells die. The rate collapses, and it doesn't recover on cooling.</li>
</ul>
<p>A good range to test is about 5 °C (fridge), 20, 30, 40, 50 and 60 °C water baths. Graph the rate against temperature: expect a curve that rises gradually and then falls steeply after the peak.</p>`
      },
      {
        tier: "likely",
        q: "3b (experiment). How does pH affect the rate of yeast fermentation?",
        a: `<p><strong>Prediction:</strong> fermentation is fastest in slightly acidic conditions (about pH 4–6) and slows in strongly acidic or basic solutions.</p>
<ul>
<li>Every enzyme has an <strong>optimum pH</strong>. Changing the pH changes the charges on amino acid R-groups in and around the active site. That disrupts the ionic and hydrogen bonds that hold the enzyme's shape, so substrate binds less well and the rate drops. Extreme pH denatures enzymes completely.</li>
<li>pH also affects <strong>membrane transport</strong>. Yeast use an H<sup>+</sup> gradient across their cell membrane to bring sugars in, and they spend ATP pumping H<sup>+</sup> out. A very acidic or very basic outside solution upsets this, so less sugar gets in.</li>
</ul>
<p>Lemon juice (about pH 2) lowers the pH; baking soda (about pH 8–9) raises it. Measure the pH of each solution so you can graph rate against pH.</p>
<div class="callout warn"><p class="callout-title">Watch out</p><p>Baking soda reacts with acids to release CO<sub>2</sub> by itself, so it can make gas that has nothing to do with yeast. Run a no-yeast control at each pH and subtract that gas.</p></div>`
      },
      {
        tier: "likely",
        q: "3b (experiment). How does the type of sugar (and its concentration) affect the rate of fermentation?",
        a: `<p>Enzymes are specific: an active site fits only certain substrates. So yeast can ferment a sugar quickly only if they have the transporters and enzymes to bring it in and feed it into glycolysis.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Sugar</th><th>What the yeast must do</th><th>Expected rate</th></tr></thead>
<tbody>
<tr><td>Glucose</td><td>Enters glycolysis directly (hexokinase)</td><td>Fast (the baseline)</td></tr>
<tr><td>Fructose</td><td>Enters directly (phosphorylated to fructose-6-phosphate)</td><td>Fast, similar to glucose</td></tr>
<tr><td>Sucrose</td><td>Split first by invertase, which yeast release, into glucose + fructose</td><td>Fast, sometimes with a short lag</td></tr>
<tr><td>Maltose</td><td>Must be transported in and split by maltase; these enzymes may first need to be switched on</td><td>Slower, often with a lag</td></tr>
<tr><td>Lactose</td><td>Baker's yeast lack the enzyme (lactase) to split it</td><td>Little or none</td></tr>
<tr><td>Artificial sweeteners (sucralose, aspartame, stevia)</td><td>No enzymes to turn them into glycolysis intermediates</td><td>Essentially none (a good negative control)</td></tr>
</tbody></table></div>
<p><strong>Concentration:</strong> the rate rises as sugar concentration rises, because more substrate reaches the enzymes and transporters. Then it levels off when they are <strong>saturated</strong> (working as fast as they can). At very high concentrations the rate <em>drops</em>. The solution becomes hypertonic, so water leaves the yeast by osmosis and the cells dehydrate. This osmotic stress is why very sweet doughs rise slowly.</p>`
      },
      {
        tier: "likely",
        q: "3b (experiment). How does salt (or another inhibitor or preservative) affect the rate of fermentation?",
        a: `<p><strong>Prediction:</strong> salt slows fermentation, and the more salt, the slower it gets. High concentrations can stop it.</p>
<ul>
<li><strong>Osmosis:</strong> salt makes the solution outside the yeast <strong>hypertonic</strong>. Water moves out of the cells, the cytoplasm dehydrates and enzymes work more slowly. At high concentrations cells shrink and die.</li>
<li><strong>Ion effects:</strong> excess Na<sup>+</sup> and Cl<sup>−</sup> interfere with the ionic bonds that hold enzymes in shape. Yeast must also spend ATP pumping Na<sup>+</sup> out, leaving less energy for growth and fermentation.</li>
<li>In baking, a little salt (about 2% of the flour's weight) is added on purpose to slow and control fermentation and strengthen the gluten. Dough without salt rises faster but is weaker and bland.</li>
</ul>
<p><strong>Other inhibitors:</strong> many spices (e.g. cinnamon, clove, garlic) and food preservatives (e.g. sorbates, benzoates) are antimicrobial. They interfere with yeast enzymes or membranes, so expect less CO<sub>2</sub> as their concentration increases.</p>`
      },
      {
        tier: "likely",
        q: "3b (experiment). How can you measure the rate of fermentation, and what makes the experiment a fair test?",
        a: `<p><strong>Measure the CO<sub>2</sub></strong> (the dependent variable) over time:</p>
<ul>
<li>a balloon stretched over the flask (measure its circumference every few minutes);</li>
<li>gas collected by water displacement in an upside-down graduated cylinder;</li>
<li>the height of foam or dough in a graduated cylinder;</li>
<li>the mass lost on a balance as CO<sub>2</sub> escapes.</li>
</ul>
<p><strong>Rate</strong> = amount of CO<sub>2</sub> ÷ time (e.g. mL/min), taken from the slope of the straight part of your graph.</p>
<p><strong>Fair test:</strong> change only your independent variable. Keep the yeast type and mass, water volume, sugar type and mass, temperature, container size, mixing and timing the same. Include controls: a no-sugar control (baseline gas), a no-yeast control (gas not from yeast), and a standard condition to compare against. Do at least 3 trials per condition and average them.</p>
<p><strong>Hypothesis format:</strong> "If [variable] increases, then the rate of CO<sub>2</sub> production will [change], because [reason in terms of enzymes, membranes or osmosis]."</p>`
      },
      {
        tier: "likely",
        q: "4. Why do yeast undergo fermentation rather than aerobic respiration in certain conditions?",
        a: `<p>Yeast are <span class="term">facultative anaerobes</span>: they can carry out either aerobic respiration (with O<sub>2</sub>, using their mitochondria) or fermentation (without O<sub>2</sub>).</p>
<ul>
<li>In a dough, a sealed bottle or a fermenting tank, the small amount of O<sub>2</sub> is <strong>used up quickly</strong>.</li>
<li>Without O<sub>2</sub> there is <strong>no final electron acceptor</strong>, so the ETC stops. NADH can't be oxidized and the cell runs out of NAD<sup>+</sup>.</li>
<li>Without NAD<sup>+</sup>, glycolysis would stop at step 6 and the cell would make <strong>no ATP at all</strong>.</li>
<li>Fermentation solves this. Acetaldehyde takes NADH's electrons and NAD<sup>+</sup> is regenerated, so glycolysis can keep making 2 ATP per glucose. It is far less ATP, but it keeps the yeast alive until oxygen returns.</li>
</ul>
<p>That trade-off is what bakers and brewers rely on. Because fermentation gives so little ATP per glucose, yeast burn through sugar fast, releasing lots of CO<sub>2</sub> (to raise bread) and ethanol (in drinks).</p>
<p><strong>Going further:</strong> baker's yeast often ferment even when O<sub>2</sub> <em>is</em> present, as long as sugar is plentiful (the Crabtree effect). Fermentation makes ATP <em>faster</em>, though less per glucose, and the ethanol it releases helps hold back competing microbes.</p>`
      }
    ]
  }

];
