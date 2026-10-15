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
  }

];
