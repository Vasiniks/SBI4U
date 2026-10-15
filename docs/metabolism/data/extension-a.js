window.EXT = window.EXT || [];

window.EXT.push(
  {
    id: "xa01",
    lesson: "2.01",
    level: "apply",
    tier: "likely",
    title: "Marshmallow in a campfire vs. marshmallow in your cells",
    prompt: `<p>A marshmallow (mostly sugar) held in a campfire catches fire and is gone in seconds, releasing its energy as heat and light. If you eat the same marshmallow, your cells release about the same <em>total</em> amount of energy from the sugar, but over many minutes and dozens of enzyme-catalyzed steps.</p>
<ol>
<li>The marshmallow needs a flame to start burning, but once lit it keeps burning on its own. Explain both facts using the term <span class="term">activation energy</span>.</li>
<li>Your cells break down sugar at 37 &deg;C with no flame. How is this possible?</li>
<li>Explain why releasing the energy in many small steps lets cells capture it as ATP, while burning does not.</li>
<li>Your body still gives off heat while it respires. Where does this heat come from?</li>
</ol>`,
    hints: [
      "Activation energy is the minimum energy needed to get a reaction started. Is the reaction of sugar with O<sub>2</sub> exergonic or endergonic once it starts?",
      "Think about what enzymes do to activation energy, and about what NAD<sup>+</sup> and FAD do with each small packet of energy.",
      "Is cellular respiration 100% efficient? Where does the energy that is not captured in ATP go?"
    ],
    answer: `<p><strong>a.</strong> Sugar is a stable molecule. Before it can react with O<sub>2</sub>, its molecules must absorb the <span class="term">activation energy</span> (E<sub>A</sub>), the minimum free energy needed to start the reaction. The flame supplies that energy. Combustion is strongly exergonic, so once some molecules react, the heat they release supplies E<sub>A</sub> to the molecules next to them. The reaction keeps itself going.</p>
<p><strong>b.</strong> Enzymes lower the activation energy of each step, so the reactions can run at body temperature. They do not change the total energy released. Glycolysis also "invests" ATP at the start (steps 1 and 3) to phosphorylate and destabilize glucose, which helps get it over the first hurdle.</p>
<p><strong>c.</strong> Burning releases all the energy in one large, uncontrolled step. Almost all of it comes out as heat and light, which a cell cannot use to do work (and the heat would damage it). Respiration releases energy in small packets through many redox steps. Each packet is small enough to be captured: some makes ATP directly (substrate-level phosphorylation), and most is stored in reduced carriers (NAD<sup>+</sup> &rarr; NADH, FAD &rarr; FADH<sub>2</sub>), which later power ATP synthesis through the ETC.</p>
<p><strong>d.</strong> Respiration is not 100% efficient. The energy that is not captured in ATP is released as heat, and that heat keeps your body at about 37 &deg;C. This is why you get hot when you exercise: you are respiring faster.</p>`,
    marks: 4
  },
  {
    id: "xa02",
    lesson: "2.01",
    level: "apply",
    tier: "essential",
    title: "Who gets oxidized? Redox in the respiration equation",
    prompt: `<div class="eq">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> &rarr; 6CO<sub>2</sub> + 6H<sub>2</sub>O + ATP</div>
<div class="eq">malate + NAD<sup>+</sup> &rarr; oxaloacetate + NADH + H<sup>+</sup> &nbsp;(Krebs cycle, last step)</div>
<ol>
<li>In the overall equation, which reactant is oxidized and which is reduced? Explain using hydrogen atoms and electrons.</li>
<li>Name the reducing agent and the oxidizing agent in the overall equation.</li>
<li>For the malate reaction, state what is oxidized, what is reduced, and which is the oxidizing agent.</li>
<li>A classmate says, "Oxygen is the fuel for respiration, since we die without it." Correct this using redox language.</li>
</ol>`,
    hints: [
      "LEO the lion says GER. In biology, losing hydrogen atoms usually means losing electrons, because each H atom brings an electron with it.",
      "Follow the hydrogens: glucose has 12 H and CO<sub>2</sub> has none. Where do the H atoms end up?",
      "The oxidizing agent is the substance that gets reduced. Is the fuel the electron donor or the electron acceptor?"
    ],
    answer: `<p><strong>a.</strong> <strong>Glucose is oxidized.</strong> Its carbons end up in CO<sub>2</sub>, which has no hydrogen. Glucose loses its hydrogen atoms, and each H atom carries an electron, so glucose loses electrons (LEO). <strong>O<sub>2</sub> is reduced.</strong> It gains electrons (plus H<sup>+</sup>) and becomes H<sub>2</sub>O (GER).</p>
<p><strong>b.</strong> Glucose is the <span class="term">reducing agent</span> (the electron donor). O<sub>2</sub> is the <span class="term">oxidizing agent</span> (the electron acceptor). In a cell the electrons do not jump straight from glucose to O<sub>2</sub>. They are passed first to NAD<sup>+</sup> and FAD, then down the ETC, and finally to O<sub>2</sub>.</p>
<p><strong>c.</strong> Malate loses two hydrogens (2 e<sup>&minus;</sup> + 2 H<sup>+</sup>), so <strong>malate is oxidized</strong> and is the reducing agent. <strong>NAD<sup>+</sup> is reduced</strong> to NADH: it takes the two electrons and one H<sup>+</sup>, and the other H<sup>+</sup> is released free. NAD<sup>+</sup> is the oxidizing agent.</p>
<p><strong>d.</strong> The fuel is glucose (or another organic molecule). It is the source of the high-energy electrons. Oxygen is the <span class="term">final electron acceptor</span>. At the end of the ETC it pulls electrons through the chain and combines with H<sup>+</sup> to form water. Without O<sub>2</sub> the chain backs up, NADH cannot be oxidized back to NAD<sup>+</sup>, and aerobic ATP production stops. So oxygen is essential, but it is the electron "sink," not the energy source.</p>`,
    marks: 4
  },
  {
    id: "xa03",
    lesson: "2.01",
    level: "apply",
    tier: "likely",
    title: "When the ion pumps run out of ATP",
    prompt: `<p>Nerve cells spend a large share of their ATP on the sodium&ndash;potassium pump. This carrier protein moves 3 Na<sup>+</sup> out of the cell and 2 K<sup>+</sup> into it, and both ions move <em>against</em> their concentration gradients. Suppose a poison stops the cell from making ATP but does not damage the pump protein itself.</p>
<ol>
<li>Is pumping these ions endergonic or exergonic? Explain.</li>
<li>Describe how ATP powers the pump. Use the terms <span class="term">energy coupling</span> and <span class="term">phosphorylation</span>.</li>
<li>Predict what happens to the Na<sup>+</sup> and K<sup>+</sup> concentrations inside the cell over the next few minutes, and explain why.</li>
<li>Explain why adding a phosphate group can change the shape of the pump protein.</li>
</ol>`,
    hints: [
      "Would ions move from low to high concentration on their own?",
      "ATP hydrolysis is exergonic. Where does the terminal phosphate go?",
      "Phosphate groups carry negative charges. How do charges affect the way a protein folds?"
    ],
    answer: `<p><strong>a.</strong> <strong>Endergonic.</strong> Moving ions from low to high concentration (active transport) needs an input of free energy and will not happen on its own. Left alone, ions diffuse the other way.</p>
<p><strong>b.</strong> In <span class="term">energy coupling</span>, the exergonic hydrolysis of ATP (ATP &rarr; ADP + P<sub>i</sub>, catalyzed by an ATPase site on the pump) drives the endergonic movement of ions. The terminal phosphate of ATP is transferred onto the carrier protein. This is <span class="term">phosphorylation</span>, and it changes the protein's shape so that it opens toward the other side of the membrane and releases the ions there. When the phosphate is removed, the pump returns to its original shape, ready for the next cycle.</p>
<p><strong>c.</strong> Without ATP the pump stops. Ions keep leaking down their gradients through channels, so <strong>Na<sup>+</sup> inside the cell rises and K<sup>+</sup> inside falls</strong>. The gradients run down, and the nerve cell can no longer fire normal impulses. Water also follows the Na<sup>+</sup> in by osmosis, so the cell swells and may burst. This is one reason the brain fails within minutes when ATP production stops, as in cyanide poisoning.</p>
<p><strong>d.</strong> A phosphate group is negatively charged, so adding one makes that part of the protein more negative. The new charge attracts or repels nearby charged R groups, which changes how the chain folds. Since a protein's function depends on its shape, the change in charge changes what the pump does.</p>`,
    marks: 4
  },
  {
    id: "xa04",
    lesson: "2.01",
    level: "extend",
    tier: "extra",
    title: "Are ATP's bonds really \"high-energy\"?",
    prompt: `<p><em>This goes a bit beyond the slides.</em></p>
<p>A textbook says, "Energy is stored in ATP's high-energy phosphate bonds and released when the bond breaks." A chemistry student objects: "Breaking a bond always <em>requires</em> energy. It never releases energy."</p>
<ol>
<li>Who is right about bond breaking?</li>
<li>If breaking the bond does not release energy, why is ATP hydrolysis (ATP + H<sub>2</sub>O &rarr; ADP + P<sub>i</sub>) exergonic? Use the structure of ATP in your answer.</li>
<li>Cells keep only a small amount of ATP at any moment. Why don't they store energy long-term as ATP, and what do they use instead?</li>
</ol>`,
    hints: [
      "Hydrolysis breaks some bonds and forms others. The overall energy change depends on how stable the products are compared with the reactants.",
      "Look at the three phosphate groups in ATP. What charge do they carry, and how close together are they?",
      "Think of ATP as a rechargeable battery and glycogen or fat as a fuel tank."
    ],
    answer: `<p><strong>a.</strong> The chemistry student is right. Breaking any chemical bond absorbs energy. "High-energy bond" is a shortcut phrase, not a literal description.</p>
<p><strong>b.</strong> Hydrolysis does not just break a bond. It breaks bonds in ATP and water and forms new bonds in ADP and P<sub>i</sub>. The reaction is exergonic (about &minus;7.3 kcal/mol under standard conditions) because the <strong>products are much more stable than the reactants</strong>:</p>
<ul>
<li>ATP's three phosphate groups are all negatively charged and crowded together, so they repel each other. That makes ATP unstable and energy-rich. Removing the terminal phosphate relieves some of that repulsion.</li>
<li>Free P<sub>i</sub> and ADP are better stabilized (for example, by interacting with water) than they were as part of ATP.</li>
</ul>
<p>So the energy comes from the difference between the unstable reactants and the more stable products. It is not "stored in the bond."</p>
<p><strong>c.</strong> ATP is unstable and is a <strong>short-term energy carrier</strong>, not a storage molecule. A cell holds only enough for a short burst of activity, so ATP is constantly recycled: ADP + P<sub>i</sub> &rarr; ATP &rarr; ADP + P<sub>i</sub>. (Beyond the slides: your body regenerates roughly its own mass in ATP every day.) For long-term storage, cells use stable, compact molecules: <strong>glycogen</strong> (carbohydrate) and <strong>fat</strong>. Cellular respiration converts the energy in those molecules into ATP when it is needed.</p>`,
    marks: 4
  },
  {
    id: "xa05",
    lesson: "2.02",
    level: "analyze",
    tier: "likely",
    title: "Fragile red blood cells: reading a metabolite profile",
    prompt: `<p>A child has anemia because her red blood cells (RBCs) burst too easily. Mature RBCs have <strong>no mitochondria</strong>. A lab measures glycolysis metabolites inside her RBCs:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Metabolite</th><th>Patient (% of normal)</th></tr></thead><tbody>
<tr><td>Glucose</td><td>100</td></tr>
<tr><td>Glucose-6-phosphate</td><td>140</td></tr>
<tr><td>3-phosphoglycerate</td><td>250</td></tr>
<tr><td>2-phosphoglycerate</td><td>260</td></tr>
<tr><td>Phosphoenolpyruvate (PEP)</td><td>300</td></tr>
<tr><td>Pyruvate</td><td>30</td></tr>
<tr><td>Lactate</td><td>35</td></tr>
<tr><td>ATP</td><td>45</td></tr>
</tbody></table></div>
<ol>
<li>How do normal RBCs make ATP without mitochondria? What do they do with their pyruvate and NADH?</li>
<li>Which enzyme is most likely defective? Justify your answer with the data.</li>
<li>If this enzyme had <em>zero</em> activity, what would the net ATP per glucose be? Then give a second reason the whole pathway would soon stop.</li>
<li>Explain why low ATP makes RBCs burst.</li>
</ol>`,
    hints: [
      "Look for the point in the pathway where the levels go from high to low. Intermediates pile up just before a block.",
      "Glycolysis makes ATP by substrate-level phosphorylation at steps 7 and 10. Which of these is lost?",
      "Lactate formation regenerates NAD<sup>+</sup>. What happens to step 6 if there is no pyruvate to turn into lactate?"
    ],
    answer: `<p><strong>a.</strong> RBCs rely <strong>entirely on glycolysis</strong> in the cytoplasm: 2 net ATP per glucose. They have no mitochondria, so pyruvate cannot be oxidized. Instead, lactate dehydrogenase reduces pyruvate to lactate, which oxidizes NADH back to NAD<sup>+</sup> so that step 6 can continue. The lactate leaves in the blood, and the liver can turn it back into glucose.</p>
<p><strong>b.</strong> <strong>Pyruvate kinase</strong> (step 10: PEP &rarr; pyruvate). The intermediates just before step 10 are high, and PEP, the substrate of step 10, is the highest (300%). Everything after step 10 (pyruvate, lactate) is low. It looks like a traffic jam behind a closed exit. ATP is low because step 10 is one of the two ATP-making steps. Glucose is normal, so glucose uptake is not the problem.</p>
<p><strong>c.</strong> Steps 1 and 3 cost 2 ATP, and step 7 makes 2 ATP (1 &times; 2 three-carbon molecules). Step 10 makes 0, so <strong>net ATP = 0</strong>. A second reason: with no pyruvate, no lactate can form, so NADH is never oxidized back to NAD<sup>+</sup>. NAD<sup>+</sup> runs out and step 6 stops, which shuts the whole pathway down. (Real patients have <em>reduced</em> activity, not zero, which is why they survive.)</p>
<p><strong>d.</strong> RBCs need ATP to run membrane pumps such as the Na<sup>+</sup>/K<sup>+</sup> pump, which keep their ion balance and shape. With low ATP, ions leak in, water follows by osmosis, and the cells swell, become rigid, and burst (hemolysis). That causes the anemia.</p>`,
    marks: 6
  },
  {
    id: "xa06",
    lesson: "2.02",
    level: "analyze",
    tier: "essential",
    title: "The test tube where glycolysis stalls",
    prompt: `<p>A researcher makes a cell-free extract containing all ten glycolysis enzymes, plenty of glucose, ATP, ADP and P<sub>i</sub>, but only <strong>10 &micro;mol of NAD<sup>+</sup></strong> (no NADH). There are no mitochondria and no lactate dehydrogenase. Pyruvate is measured over time:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Time (min)</th><th>0</th><th>2</th><th>4</th><th>6</th><th>8</th><th>10</th></tr></thead><tbody>
<tr><td>Pyruvate (&micro;mol)</td><td>0</td><td>4</td><td>8</td><td>10</td><td>10</td><td>10</td></tr>
</tbody></table></div>
<ol>
<li>Explain why pyruvate production stops. Which step can no longer occur?</li>
<li>Show that a plateau at 10 &micro;mol is exactly what you would predict. How much glucose was used?</li>
<li>Predict which intermediate builds up after the plateau.</li>
<li>At 10 minutes the researcher adds lactate dehydrogenase (LDH). Describe what happens to pyruvate and lactate levels, and explain why.</li>
<li>How does this experiment show that the "real purpose" of fermentation is not to make ATP?</li>
</ol>`,
    hints: [
      "Which glycolysis step uses NAD<sup>+</sup>? How many NAD<sup>+</sup> are used per pyruvate made?",
      "Two pyruvate come from each glucose, and each pyruvate passes through step 6 once.",
      "LDH runs: pyruvate + NADH &rarr; lactate + NAD<sup>+</sup>. Does that reaction make any ATP itself?"
    ],
    answer: `<p><strong>a.</strong> <strong>Step 6</strong> (G3P &rarr; 1,3-bisphosphoglycerate, glyceraldehyde-3-phosphate dehydrogenase) needs NAD<sup>+</sup> to accept electrons. Each time it runs, one NAD<sup>+</sup> becomes NADH. The tube has no ETC and no LDH, so nothing oxidizes NADH back to NAD<sup>+</sup>. Once all 10 &micro;mol of NAD<sup>+</sup> has been reduced, step 6 stops, and so does everything after it.</p>
<p><strong>b.</strong> Each pyruvate comes from one G3P passing through step 6, which uses one NAD<sup>+</sup>. So 10 &micro;mol NAD<sup>+</sup> gives at most <strong>10 &micro;mol pyruvate</strong>. Each glucose gives 2 pyruvate, so <strong>5 &micro;mol of glucose</strong> was used.</p>
<p><strong>c.</strong> <strong>Glyceraldehyde-3-phosphate (G3P)</strong>, the substrate of the blocked step, builds up. DHAP, which is interconverted with G3P by triose phosphate isomerase, and fructose-1,6-bisphosphate build up too, as long as ATP lasts for steps 1 and 3.</p>
<p><strong>d.</strong> LDH converts pyruvate + NADH &rarr; lactate + NAD<sup>+</sup>. The pyruvate already present drops as it is converted to lactate, and the NAD<sup>+</sup> regenerated restarts step 6. Glycolysis runs again, and <strong>lactate rises steadily</strong>. Pyruvate stays low, because LDH converts it about as fast as it is made. The pathway now runs until glucose (or ADP/P<sub>i</sub>) runs out.</p>
<p><strong>e.</strong> The LDH reaction makes no ATP. Its only effect is to regenerate NAD<sup>+</sup>, which lets glycolysis keep making its 2 ATP per glucose. That is the real purpose of fermentation. This is also one of the two "problems left after glycolysis" from the worksheet: regenerate NAD<sup>+</sup> and remove pyruvate. LDH solves both.</p>`,
    marks: 5
  }
);

window.EXT.push(
  {
    id: "xa07",
    lesson: "2.02",
    level: "apply",
    tier: "likely",
    title: "Why blood-glucose tubes contain fluoride",
    prompt: `<p>Blood drawn for a glucose test is often collected in a tube containing sodium fluoride. Fluoride inhibits <strong>enolase</strong>. Without it, the glucose level in a sample left at room temperature falls by roughly 5&ndash;7% per hour, which can make a diabetic patient's result look falsely normal.</p>
<ol>
<li>Why does glucose disappear from an untreated tube of blood? Which cells are responsible, and by what process?</li>
<li>Which glycolysis step does enolase catalyze, and what does it do to the molecule?</li>
<li>Enolase acts at step 9, far from glucose. Explain why blocking it eventually stops glucose from being used up.</li>
<li>With fluoride present, glucose still drops a little during the first hour or so. Suggest why.</li>
</ol>`,
    hints: [
      "The blood cells are still alive in the tube. Red blood cells have no mitochondria.",
      "Step 9 is the dehydration step: 2-phosphoglycerate &rarr; PEP.",
      "If step 9 is blocked, which ATP-making step and which NAD<sup>+</sup>-regenerating reaction are lost? Steps 1&ndash;8 are not inhibited directly."
    ],
    answer: `<p><strong>a.</strong> The blood cells, mostly red blood cells plus some white blood cells, are still alive and keep doing <strong>glycolysis</strong>, using glucose from the plasma to make ATP. RBCs have no mitochondria, so they turn glucose into pyruvate and then lactate. The glucose in the sample keeps falling.</p>
<p><strong>b.</strong> Step 9: <strong>2-phosphoglycerate &rarr; phosphoenolpyruvate (PEP)</strong>. Enolase removes a water molecule (dehydration). This destabilizes the molecule and sets up step 10, where pyruvate kinase makes ATP.</p>
<p><strong>c.</strong> With enolase blocked, no PEP is made, so there is no step-10 ATP and no pyruvate. Several things follow:</p>
<ul>
<li>2-phosphoglycerate and 3-phosphoglycerate back up behind the block.</li>
<li>Net ATP falls to zero: step 7 makes 2 ATP, but steps 1 and 3 cost 2. The cells soon lack ATP for hexokinase and PFK.</li>
<li>No pyruvate means no lactate, so NADH is not oxidized back to NAD<sup>+</sup>, and step 6 stops.</li>
</ul>
<p>The whole pathway grinds to a halt, so glucose stays close to the level it had when the blood was drawn.</p>
<p><strong>d.</strong> Steps 1&ndash;8 are not inhibited directly. They keep using glucose until the intermediates have built up and ATP and NAD<sup>+</sup> run out, which takes some time. Fluoride also needs time to enter the cells. (In practice, labs also chill the samples or separate the plasma from the cells quickly.)</p>`,
    marks: 4
  },
  {
    id: "xa08",
    lesson: "2.02",
    level: "extend",
    tier: "extra",
    title: "Arsenate: glycolysis that runs but earns nothing",
    prompt: `<p><em>This goes beyond the slides.</em></p>
<p>Arsenate (AsO<sub>4</sub><sup>3&minus;</sup>) is chemically very similar to phosphate (PO<sub>4</sub><sup>3&minus;</sup>). At <strong>step 6</strong>, glyceraldehyde-3-phosphate dehydrogenase can use arsenate instead of P<sub>i</sub>, forming 1-arseno-3-phosphoglycerate. This compound is unstable. It breaks down in water, with no enzyme, straight to <strong>3-phosphoglycerate</strong>, and no ATP is made.</p>
<ol>
<li>Which glycolysis step is bypassed?</li>
<li>Calculate the net ATP per glucose from glycolysis if every step-6 reaction uses arsenate.</li>
<li>Does arsenate stop glycolysis? Are pyruvate and NADH still produced?</li>
<li>Explain why arsenate is toxic even though glycolysis "keeps running," and why cells with no mitochondria are hit especially hard.</li>
</ol>`,
    hints: [
      "Normally 1,3-bisphosphoglycerate gives its phosphate to ADP at step 7. What happens if the molecule reaches 3-phosphoglycerate without passing through step 7?",
      "Add up the ATP: steps 1 and 3 (invest), step 7, and step 10, remembering that steps 6&ndash;10 happen twice per glucose.",
      "Compare this with fermentation in a red blood cell, whose only ATP source is glycolysis."
    ],
    answer: `<p><strong>a.</strong> <strong>Step 7</strong> (phosphoglycerate kinase: 1,3-BPG &rarr; 3-phosphoglycerate, making ATP by substrate-level phosphorylation). The arsenate compound falls apart directly to 3-phosphoglycerate, so the ATP that step 7 would have made is never formed.</p>
<p><strong>b.</strong></p>
<ul>
<li>Steps 1 and 3: &minus;2 ATP</li>
<li>Step 7: 0 ATP (normally +2)</li>
<li>Step 10: +2 ATP</li>
<li><strong>Net = 0 ATP per glucose</strong> (normally +2)</li>
</ul>
<p><strong>c.</strong> No, glycolysis keeps running. Step 6 still reduces NAD<sup>+</sup>, so <strong>2 NADH</strong> and <strong>2 pyruvate</strong> are still made per glucose. Glucose is oxidized as usual, but the energy that should have been captured at step 7 is released as heat instead. Oxidation has been "uncoupled" from ATP synthesis at that step.</p>
<p><strong>d.</strong> The cell uses up glucose and gets no net ATP from glycolysis, so its ATP-dependent work (pumps, muscle contraction, biosynthesis) fails. Cells without mitochondria, such as red blood cells, depend entirely on glycolysis, so for them arsenate cuts ATP production to zero. Cells with mitochondria can still make some ATP from the NADH and pyruvate, but arsenate also interferes there: it can stand in for phosphate when ATP synthase works, forming an unstable ADP&ndash;arsenate that breaks down at once. A related form, arsenite, also inhibits the pyruvate dehydrogenase complex. Together these effects make arsenic a powerful metabolic poison.</p>`,
    marks: 5
  },
  {
    id: "xa09",
    lesson: "2.02",
    level: "extend",
    tier: "extra",
    title: "PET scans: trapping a fake glucose",
    prompt: `<p><em>This goes beyond the slides.</em></p>
<p>Cancer is often located with a PET scan. The patient is injected with <strong>FDG</strong> (fluorodeoxyglucose): glucose with a radioactive fluorine atom in place of the &ndash;OH group on carbon 2. Glucose transporters carry FDG into cells, and <strong>hexokinase phosphorylates it</strong> to FDG-6-phosphate, but phosphoglucose isomerase <strong>cannot</strong> act on it. The scanner shows where the radioactivity collects. Many tumour cells take up glucose much faster than normal cells, because they rely heavily on glycolysis even when O<sub>2</sub> is available.</p>
<ol>
<li>Explain why FDG-6-phosphate stays trapped inside the cell.</li>
<li>What does step 2 of glycolysis normally do, and why can't FDG-6-phosphate go through it?</li>
<li>Predict which normal organ will appear brightest on a PET scan of the head and chest, and explain why.</li>
<li>Use ATP yields to explain why a cell that relies mostly on glycolysis has to take in far more glucose than a cell using aerobic respiration.</li>
</ol>`,
    hints: [
      "This is the same trick as glucose &rarr; glucose-6-phosphate at step 1. What do the transporters recognize?",
      "Step 2 turns glucose-6-phosphate into its isomer fructose-6-phosphate, which involves rearranging groups around carbons 1 and 2.",
      "Compare 2 ATP per glucose with 36&ndash;38 ATP per glucose."
    ],
    answer: `<p><strong>a.</strong> Hexokinase adds a <strong>negatively charged phosphate</strong> to FDG, just as it does to glucose at step 1. Glucose transporters recognize glucose (and FDG) but not the phosphorylated form, and the charged molecule cannot cross the membrane on its own. So FDG-6-phosphate is trapped. Most tissues have very little of the enzyme that could remove the phosphate again.</p>
<p><strong>b.</strong> Step 2 <strong>isomerizes</strong> glucose-6-phosphate to fructose-6-phosphate, rearranging the molecule around carbons 1 and 2. That reaction needs the &ndash;OH group on carbon 2. FDG has fluorine there instead, so phosphoglucose isomerase cannot use it. FDG-6-phosphate is stuck at the end of step 1 and builds up in any cell that takes in a lot of glucose. It acts as a glucose-uptake tracer.</p>
<p><strong>c.</strong> The <strong>brain</strong>. It uses glucose as its main fuel and has a very high, constant demand for ATP, so it takes in large amounts of FDG. (The heart muscle and the bladder, where FDG is excreted in urine, can also appear bright.)</p>
<p><strong>d.</strong> Glycolysis alone gives only <strong>2 ATP per glucose</strong>, while full aerobic respiration gives up to <strong>36&ndash;38</strong>. To make the same amount of ATP, a mostly glycolytic cell must break down about 18&ndash;19 times as much glucose. Fast-growing tumour cells that rely on glycolysis therefore take up glucose (and FDG) greedily, which makes them show up as bright spots on the scan.</p>`,
    marks: 5
  },
  {
    id: "xa10",
    lesson: "2.03",
    level: "apply",
    tier: "essential",
    title: "Counting turns of the Krebs cycle",
    prompt: `<p>A 16-carbon fatty acid is broken down by &beta;-oxidation into <strong>8 acetyl-CoA</strong>, and all 8 enter the Krebs cycle.</p>
<ol>
<li>How many turns of the Krebs cycle occur?</li>
<li>How many NADH, FADH<sub>2</sub>, ATP and CO<sub>2</sub> does the Krebs cycle produce from these 8 acetyl-CoA?</li>
<li>Using the class values (NADH &asymp; 3 ATP, FADH<sub>2</sub> &asymp; 2 ATP), how much ATP do the Krebs products give in total once the ETC is included? (Ignore the carriers made during &beta;-oxidation itself.)</li>
<li>How many glucose molecules would produce the same 8 acetyl-CoA? How many CO<sub>2</sub> would those glucose molecules release during pyruvate oxidation and the Krebs cycle combined?</li>
<li>How many molecules of oxaloacetate are used up overall? Explain.</li>
</ol>`,
    hints: [
      "One turn per acetyl-CoA. Per turn: 3 NADH, 1 FADH<sub>2</sub>, 1 ATP, 2 CO<sub>2</sub>.",
      "Each glucose gives 2 pyruvate, which give 2 acetyl-CoA and 2 CO<sub>2</sub>.",
      "Oxaloacetate is both the starting molecule and the end product of the cycle."
    ],
    answer: `<p><strong>a.</strong> <strong>8 turns</strong>, one per acetyl-CoA.</p>
<p><strong>b.</strong> Multiply the per-turn yield by 8:</p>
<div class="tally"><span class="chip nadh">24 NADH</span><span class="chip fadh">8 FADH<sub>2</sub></span><span class="chip atp">8 ATP</span><span class="chip co2">16 CO<sub>2</sub></span></div>
<p><strong>c.</strong></p>
<ul>
<li>24 NADH &times; 3 = 72 ATP</li>
<li>8 FADH<sub>2</sub> &times; 2 = 16 ATP</li>
<li>8 ATP made directly (via GTP)</li>
<li><strong>Total = 96 ATP</strong></li>
</ul>
<p>Compare that with a maximum of 38 for one glucose. This is why fat is such a rich fuel, and the &beta;-oxidation carriers would add even more.</p>
<p><strong>d.</strong> Each glucose gives 2 pyruvate and therefore 2 acetyl-CoA, so <strong>4 glucose</strong> give 8 acetyl-CoA. Pyruvate oxidation releases 1 CO<sub>2</sub> per pyruvate (8 CO<sub>2</sub>), and the Krebs cycle releases 16, for <strong>24 CO<sub>2</sub></strong> in total. That is 4 &times; 6: every carbon of the 4 glucose leaves as CO<sub>2</sub>.</p>
<p><strong>e.</strong> <strong>Zero, overall.</strong> Each turn uses one oxaloacetate at step 1 (acetyl-CoA + oxaloacetate &rarr; citrate) and regenerates one at the last step (malate &rarr; oxaloacetate). Oxaloacetate is recycled like a reusable carrier, and so is CoA. This is the difference between a cyclic pathway like Krebs and a linear one like glycolysis.</p>`,
    marks: 5
  },
  {
    id: "xa11",
    lesson: "2.03",
    level: "analyze",
    tier: "likely",
    title: "Malonate: jamming one step of the cycle",
    prompt: `<p>In the 1930s, researchers studied minced pigeon breast muscle, which respires very quickly. They found that <strong>malonate</strong> sharply reduces O<sub>2</sub> uptake. Malonate (&minus;OOC&ndash;CH<sub>2</sub>&ndash;COO&minus;) looks very much like <strong>succinate</strong> (&minus;OOC&ndash;CH<sub>2</sub>&ndash;CH<sub>2</sub>&ndash;COO&minus;).</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Measurement (muscle + O<sub>2</sub>)</th><th>No malonate</th><th>With malonate</th></tr></thead><tbody>
<tr><td>O<sub>2</sub> uptake</td><td>100%</td><td>about 15%</td></tr>
<tr><td>CO<sub>2</sub> release</td><td>100%</td><td>about 15%</td></tr>
<tr><td>Succinate</td><td>normal</td><td>about 8&times; normal</td></tr>
<tr><td>Fumarate and malate</td><td>normal</td><td>very low</td></tr>
</tbody></table></div>
<p>In a second experiment, <strong>fumarate</strong> was added to malonate-treated muscle, and even <em>more</em> succinate built up.</p>
<ol>
<li>Which enzyme does malonate inhibit? Suggest how, based on its structure.</li>
<li>Explain the changes in succinate and in fumarate/malate.</li>
<li>Only one enzyme is blocked, yet O<sub>2</sub> uptake and CO<sub>2</sub> release almost stop. Explain.</li>
<li>Explain how the fumarate result supports the idea that the pathway is a <em>cycle</em>.</li>
</ol>`,
    hints: [
      "Which Krebs enzyme normally uses succinate as its substrate? It is also a complex in the ETC.",
      "Substrates pile up before a block, and products after the block run low. What else does the cycle need to keep turning?",
      "Trace fumarate forward through the cycle: fumarate &rarr; malate &rarr; oxaloacetate &rarr; &hellip; Where does it get stuck?"
    ],
    answer: `<p><strong>a.</strong> <strong>Succinate dehydrogenase</strong> (succinate &rarr; fumarate, reducing FAD to FADH<sub>2</sub>). This is the same enzyme as ETC complex II. Malonate has the same two negative &ndash;COO&minus; ends as succinate, so it fits the active site and blocks succinate from binding (competitive inhibition). Malonate cannot be oxidized, so the enzyme is simply occupied.</p>
<p><strong>b.</strong> Succinate is the substrate of the blocked step, so it piles up (about 8&times;). Fumarate and malate come after the block, so they are no longer made and their levels fall.</p>
<p><strong>c.</strong> Without fumarate and malate, <strong>oxaloacetate is not regenerated</strong>. Once the existing oxaloacetate is used, acetyl-CoA can no longer form citrate, and the whole cycle stops. Then:</p>
<ul>
<li>There are no more decarboxylation steps, so CO<sub>2</sub> release falls.</li>
<li>No NADH comes from isocitrate, &alpha;-ketoglutarate or malate, and no FADH<sub>2</sub> from succinate.</li>
<li>With few electrons arriving at the ETC, little O<sub>2</sub> is reduced to water, so O<sub>2</sub> uptake falls.</li>
</ul>
<p>A cycle is only as fast as its slowest step.</p>
<p><strong>d.</strong> Added fumarate goes <em>forward</em>: fumarate &rarr; malate &rarr; oxaloacetate, which combines with acetyl-CoA to form citrate &rarr; isocitrate &rarr; &alpha;-ketoglutarate &rarr; succinyl-CoA &rarr; <strong>succinate</strong>, where it is stuck at the malonate block. Fumarate can only become succinate this way if oxaloacetate connects back around to succinate, which means the pathway must be a cycle. Experiments like this helped Hans Krebs establish the cycle.</p>`,
    marks: 6
  },
  {
    id: "xa12",
    lesson: "2.03",
    level: "extend",
    tier: "extra",
    title: "Thiamine deficiency and the PDH bottleneck",
    prompt: `<p><em>This goes beyond the slides.</em></p>
<p>The pyruvate dehydrogenase complex (PDH) needs a coenzyme made from <strong>vitamin B<sub>1</sub> (thiamine)</strong>. Severe thiamine deficiency, seen with very poor diets or long-term heavy alcohol use, causes <strong>high blood pyruvate and lactate</strong> and nervous-system symptoms such as confusion and poor coordination. Some children are born with a defective PDH, and one treatment is a <strong>ketogenic diet</strong> (very high fat, very low carbohydrate).</p>
<ol>
<li>Which reaction is slowed? Write its reactants and products.</li>
<li>Explain why both pyruvate <em>and</em> lactate build up, even though O<sub>2</sub> is available.</li>
<li>Why is the nervous system hit especially hard?</li>
<li>Explain how a high-fat diet can work around a PDH defect.</li>
<li>Predict how CO<sub>2</sub> output and O<sub>2</sub> use by the affected cells would change.</li>
</ol>`,
    hints: [
      "PDH links glycolysis to the Krebs cycle. What enters it and what comes out?",
      "If pyruvate cannot enter the mitochondrion's pathway, how can the cell still regenerate NAD<sup>+</sup> for glycolysis?",
      "Fatty acids enter cellular respiration as acetyl-CoA. Is that before or after the PDH step?"
    ],
    answer: `<p><strong>a.</strong> <strong>Pyruvate oxidation</strong>, in the mitochondrial matrix:</p>
<div class="eq">pyruvate + NAD<sup>+</sup> + CoA &rarr; acetyl-CoA + CO<sub>2</sub> + NADH</div>
<p><strong>b.</strong> Pyruvate from glycolysis cannot be turned into acetyl-CoA quickly enough, so it accumulates. The cell still needs ATP and falls back on glycolysis. To keep glycolysis going, it must regenerate NAD<sup>+</sup>, so lactate dehydrogenase reduces pyruvate to <strong>lactate</strong> (lactic acid fermentation), even with O<sub>2</sub> present. Both pyruvate and lactate leak into the blood. The result is lactic acidosis.</p>
<p><strong>c.</strong> Nerve cells have a very high, constant ATP demand, and the brain relies mainly on <strong>glucose</strong> as its fuel. It cannot use fatty acids directly. Without PDH, each glucose gives only about 2 ATP instead of up to 38, so neurons run short of energy first.</p>
<p><strong>d.</strong> Fatty acids are broken down by &beta;-oxidation straight into <strong>acetyl-CoA</strong>, which enters the Krebs cycle <em>after</em> the PDH step. The liver also turns some acetyl-CoA into ketone bodies, which travel to the brain and are converted back to acetyl-CoA there. Either way, the cell gets fuel for the Krebs cycle and the ETC without needing PDH. Cutting carbohydrates also reduces the pyruvate and lactate load.</p>
<p><strong>e.</strong> Both decrease. Less CO<sub>2</sub> is released, because the pyruvate-oxidation CO<sub>2</sub> is lost and less acetyl-CoA reaches the Krebs cycle. Less O<sub>2</sub> is used, because fewer NADH and FADH<sub>2</sub> reach the ETC, so fewer electrons are passed to O<sub>2</sub>.</p>`,
    marks: 5
  }
);

window.EXT.push(
  {
    id: "xa13",
    lesson: "2.03",
    level: "apply",
    tier: "likely",
    title: "Same pyruvate, two different enzymes",
    prompt: `<p>Notes sometimes say pyruvate oxidation uses "pyruvate decarboxylase." In your mitochondria, pyruvate oxidation is actually carried out by the <strong>pyruvate dehydrogenase complex (PDH)</strong>. <strong>Pyruvate decarboxylase</strong> is a different enzyme, used by yeast in alcohol fermentation. Both remove CO<sub>2</sub> from pyruvate.</p>
<ol>
<li>For each enzyme, give where it works in the cell, its products, and whether NAD<sup>+</sup> is reduced.</li>
<li>Explain what "decarboxylase" and "dehydrogenase" mean. Use the names to explain why only one of these enzymes catalyzes a redox reaction.</li>
<li>Yeast are mixed into bread dough, and the bowl is covered. Which enzyme does most of the work at first, and which takes over later? Explain.</li>
<li>Track pyruvate's three carbons in each case. Which pathway leaves more energy unharvested in its carbon product?</li>
</ol>`,
    hints: [
      "A carboxyl group (&ndash;COOH) leaves as CO<sub>2</sub>. \"Dehydrogenase\" means removing hydrogen. What carries hydrogen and electrons away?",
      "PDH makes acetyl-CoA. Pyruvate decarboxylase makes acetaldehyde, which alcohol dehydrogenase then reduces using NADH.",
      "What happens to the O<sub>2</sub> trapped in the dough as the yeast respire?"
    ],
    answer: `<div class="compare"><div><h4>Pyruvate dehydrogenase (PDH)</h4><p>Works in the <strong>mitochondrial matrix</strong>. Pyruvate + NAD<sup>+</sup> + CoA &rarr; acetyl-CoA + CO<sub>2</sub> + NADH. <strong>NAD<sup>+</sup> is reduced.</strong></p></div><div><h4>Pyruvate decarboxylase</h4><p>Works in the yeast <strong>cytoplasm</strong>. Pyruvate &rarr; acetaldehyde + CO<sub>2</sub>. <strong>No NAD<sup>+</sup> is reduced.</strong> Alcohol dehydrogenase then reduces acetaldehyde to ethanol using NADH, regenerating NAD<sup>+</sup>.</p></div></div>
<p><strong>b.</strong> A <span class="term">decarboxylase</span> removes a carboxyl group as CO<sub>2</sub>. A <span class="term">dehydrogenase</span> removes hydrogen atoms (electrons plus protons) and passes them to a carrier such as NAD<sup>+</sup>, which is an oxidation. PDH does both: it decarboxylates pyruvate <em>and</em> oxidizes it, reducing NAD<sup>+</sup> to NADH. Pyruvate decarboxylase only removes CO<sub>2</sub>, so it is not a redox step.</p>
<p><strong>c.</strong> At first there is O<sub>2</sub> in the dough, so the yeast can respire aerobically, using <strong>PDH</strong> and the Krebs cycle. As they use up the O<sub>2</sub>, the ETC can no longer oxidize NADH, and <strong>pyruvate decarboxylase</strong> plus alcohol dehydrogenase take over. This is alcohol fermentation. Its CO<sub>2</sub> raises the dough, and the ethanol evaporates during baking. (Beyond the slides: in very sugary conditions, baker's yeast ferments even when some O<sub>2</sub> is present.)</p>
<p><strong>d.</strong> In both pathways, one carbon leaves as CO<sub>2</sub>.</p>
<ul>
<li>With PDH, the other two carbons become the acetyl group of acetyl-CoA. They are later oxidized completely to CO<sub>2</sub> in the Krebs cycle, and their energy is harvested.</li>
<li>With pyruvate decarboxylase, the two carbons end up in <strong>ethanol</strong>, an energy-rich molecule that the yeast simply excretes.</li>
</ul>
<p>Fermentation therefore leaves much more energy unharvested, which is why ethanol can be used as a fuel.</p>`,
    marks: 4
  },
  {
    id: "xa14",
    lesson: "2.03",
    level: "extend",
    tier: "extra",
    title: "Why the cycle needs a steady supply of oxaloacetate",
    prompt: `<p><em>This goes beyond the slides.</em></p>
<p>A mitochondrion holds only a small amount of oxaloacetate (OAA) at any moment, yet it can oxidize enormous numbers of acetyl-CoA. Cells also <strong>borrow</strong> Krebs intermediates to build other molecules. For example, &alpha;-ketoglutarate is made into the amino acid glutamate, and in the fasting liver, OAA is used to make new glucose (gluconeogenesis). Cells top up the cycle by converting pyruvate (3C) + CO<sub>2</sub> directly into OAA (4C).</p>
<ol>
<li>Explain how a small amount of OAA can process a very large number of acetyl-CoA.</li>
<li>Predict what happens to the cycle if intermediates are removed and not replaced.</li>
<li>An old saying is "fats burn in the flame of carbohydrates." Explain it in terms of OAA.</li>
<li>Count carbons to explain why acetyl-CoA alone can <em>never</em> increase the amount of Krebs intermediates, but pyruvate can.</li>
</ol>`,
    hints: [
      "Is OAA used up, or is it regenerated at the end of every turn?",
      "Acetyl-CoA can only enter the cycle by joining an OAA molecule. What if there are fewer OAA molecules waiting?",
      "Each turn, how many carbons come in as acetyl, and how many leave as CO<sub>2</sub>?"
    ],
    answer: `<p><strong>a.</strong> OAA is <strong>regenerated at the end of every turn</strong>. Each OAA joins an acetyl-CoA to form citrate, goes around the cycle, and comes back as OAA, ready to accept the next acetyl group. Like an enzyme, one OAA molecule can be used over and over, so a small pool can carry thousands of acetyl groups.</p>
<p><strong>b.</strong> Each intermediate that is removed (for example, &alpha;-ketoglutarate taken to make glutamate) is one fewer molecule that comes back around as OAA. The OAA pool shrinks, fewer acetyl-CoA can enter per second, and the cycle slows. Acetyl-CoA then backs up, and less NADH and FADH<sub>2</sub> are delivered to the ETC.</p>
<p><strong>c.</strong> Fat breakdown (&beta;-oxidation) floods the mitochondrion with acetyl-CoA, but every acetyl-CoA needs an OAA to enter the cycle. OAA is topped up mainly from <strong>carbohydrate</strong>, through pyruvate &rarr; OAA. During starvation or uncontrolled diabetes, carbohydrate is scarce and the liver also diverts OAA into gluconeogenesis. Acetyl-CoA from fat then cannot all enter the Krebs cycle, and the liver converts the excess into <strong>ketone bodies</strong>. In that sense, fat burns completely only when there is enough carbohydrate to keep the cycle stocked with OAA.</p>
<p><strong>d.</strong> Each turn, <strong>2 carbons enter</strong> (the acetyl group) and <strong>2 carbons leave</strong> (2 CO<sub>2</sub>), so the number of carbons in the cycle's intermediates never goes up. Acetyl-CoA can be burned but cannot add to the pool. Pyruvate (3C) + CO<sub>2</sub> &rarr; OAA (4C) creates a <em>new</em> four-carbon molecule, a net addition to the cycle.</p>`,
    marks: 5
  },
  {
    id: "xa15",
    lesson: "mix",
    level: "analyze",
    tier: "essential",
    title: "Tracer experiment: where do the labelled atoms go?",
    prompt: `<p>Scientists follow atoms through metabolism using isotopes.</p>
<ul>
<li><strong>Experiment 1:</strong> Cells are given glucose in which all six carbons are radioactive <sup>14</sup>C.</li>
<li><strong>Experiment 2:</strong> Cells are given ordinary glucose but supplied with <strong>heavy oxygen gas, <sup>18</sup>O<sub>2</sub></strong>.</li>
</ul>
<ol>
<li>Experiment 1: In which molecule does the <sup>14</sup>C leave the cell? How many of the six labelled carbons have left after (i) glycolysis, (ii) pyruvate oxidation, and (iii) the Krebs cycle?</li>
<li>Experiment 1 is repeated with yeast in a sealed, airless flask. Where does the <sup>14</sup>C end up?</li>
<li>Experiment 2: Predict whether the <sup>18</sup>O will appear in CO<sub>2</sub> or in H<sub>2</sub>O. Explain.</li>
<li>Where, then, do the oxygen atoms in exhaled CO<sub>2</sub> come from? Account for all 12.</li>
<li>Evaluate the statement: "The oxygen we breathe in is breathed out as carbon dioxide."</li>
</ol>`,
    hints: [
      "Count carbons: glucose 6, pyruvate 3, acetyl 2. Which stages release CO<sub>2</sub>?",
      "In alcohol fermentation, one CO<sub>2</sub> is removed per pyruvate. What happens to the other two carbons?",
      "Where in the whole process does O<sub>2</sub> actually react? Write the reaction at complex IV. The Krebs cycle consumes water: 6 H<sub>2</sub>O per glucose."
    ],
    answer: `<p><strong>a.</strong> The label leaves as <strong><sup>14</sup>CO<sub>2</sub></strong>, which is carried in the blood and exhaled.</p>
<ul>
<li>(i) After glycolysis: <strong>0</strong>. All 6 carbons are in 2 pyruvate, and no CO<sub>2</sub> is made.</li>
<li>(ii) After pyruvate oxidation: <strong>2</strong>, one CO<sub>2</sub> per pyruvate.</li>
<li>(iii) After the Krebs cycle: <strong>all 6</strong>, since 4 more CO<sub>2</sub> are released, and 0 carbons of the glucose remain.</li>
</ul>
<p>(Beyond the slides: the two carbons of any one acetyl group are not released in the same turn they enter. They stay in the cycle's intermediates for a turn or more. The total per glucose is still 6 CO<sub>2</sub>.)</p>
<p><strong>b.</strong> Pyruvate decarboxylase removes one carbon from each pyruvate, so <strong>2 labelled carbons</strong> end up in CO<sub>2</sub>. The remaining <strong>4 labelled carbons</strong> end up in 2 ethanol (2 carbons each).</p>
<p><strong>c.</strong> The <sup>18</sup>O ends up in <strong>water</strong>. O<sub>2</sub> reacts only at the end of the ETC, where it is the final electron acceptor: &frac12;O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>&minus;</sup> &rarr; H<sub>2</sub>O. O<sub>2</sub> never reacts with the carbon atoms.</p>
<p><strong>d.</strong> 6 CO<sub>2</sub> contain 12 O atoms. <strong>6 come from glucose</strong> (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>), and the other <strong>6 come from water</strong> added during the Krebs cycle (6 H<sub>2</sub>O per glucose).</p>
<p><strong>e.</strong> The statement is <strong>incorrect</strong>. Inhaled O<sub>2</sub> becomes the oxygen in metabolic water. The oxygen in exhaled CO<sub>2</sub> comes from food and water. (In a long experiment, a little <sup>18</sup>O does eventually appear in CO<sub>2</sub>, because labelled water swaps oxygen atoms with CO<sub>2</sub> in the blood. That is a separate exchange reaction, not a step of respiration.)</p>`,
    marks: 6
  },
  {
    id: "xa16",
    lesson: "mix",
    level: "apply",
    tier: "likely",
    title: "How efficient are your cells?",
    prompt: `<p>Completely oxidizing 1 mol of glucose releases <strong>686 kcal</strong> of free energy. Making 1 mol of ATP from ADP + P<sub>i</sub> stores about <strong>7.3 kcal</strong>.</p>
<ol>
<li>If respiration were 100% efficient, how many ATP could one glucose make?</li>
<li>Calculate the efficiency of aerobic respiration at the class maximum of 38 ATP, and at a realistic 30 ATP.</li>
<li>Calculate the efficiency of glycolysis alone (fermentation, 2 ATP). Is the "missing" energy lost as heat in this case? Explain.</li>
<li>Where does the rest of the energy in aerobic respiration go, and why is that useful to a mammal?</li>
</ol>`,
    hints: [
      "Efficiency = (energy captured in ATP &divide; energy released by glucose) &times; 100%.",
      "Energy captured = number of ATP &times; 7.3 kcal.",
      "After fermentation, is the glucose fully oxidized to CO<sub>2</sub>? What energy-rich molecules are left over?"
    ],
    answer: `<p><strong>a.</strong> 686 &divide; 7.3 &asymp; <strong>94 ATP</strong> per glucose if no energy were wasted.</p>
<p><strong>b.</strong></p>
<ul>
<li>At 38 ATP: 38 &times; 7.3 = 277 kcal, and 277 &divide; 686 &times; 100% &asymp; <strong>40%</strong>.</li>
<li>At 30 ATP: 30 &times; 7.3 = 219 kcal, and 219 &divide; 686 &times; 100% &asymp; <strong>32%</strong>.</li>
</ul>
<p>For comparison, a typical car engine converts only about 25&ndash;30% of its fuel's energy into motion.</p>
<p><strong>c.</strong> 2 &times; 7.3 = 14.6 kcal, and 14.6 &divide; 686 &times; 100% &asymp; <strong>2%</strong>. Most of the missing energy is <em>not</em> lost as heat. Glucose has only been partly broken down, so most of its energy is still locked in the products, lactate or ethanol. The ethanol can be burned as fuel, and the liver can turn lactate back into glucose. Fermentation is a poor deal for ATP because it leaves the job unfinished.</p>
<p><strong>d.</strong> The other ~60&ndash;68% is released as <strong>heat</strong>, because no energy conversion is 100% efficient. In mammals and birds this heat keeps the body at a constant, warm temperature (about 37 &deg;C in humans), which keeps enzymes working near their optimum. It is also why you heat up and sweat during exercise: faster respiration releases more heat.</p>`,
    marks: 5
  },
  {
    id: "xa17",
    lesson: "mix",
    level: "analyze",
    tier: "likely",
    title: "Which tube makes CO₂? A cell fractionation experiment",
    prompt: `<p>Liver cells are broken open and centrifuged to separate the <strong>cytosol</strong> (the fluid, with no organelles) from intact <strong>mitochondria</strong>. Four tubes are set up at 37 &deg;C, each with O<sub>2</sub>, ADP, P<sub>i</sub> and NAD<sup>+</sup>:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Tube</th><th>Contents</th></tr></thead><tbody>
<tr><td>A</td><td>cytosol + glucose</td></tr>
<tr><td>B</td><td>mitochondria + glucose</td></tr>
<tr><td>C</td><td>mitochondria + pyruvate</td></tr>
<tr><td>D</td><td>cytosol + mitochondria + glucose</td></tr>
</tbody></table></div>
<ol>
<li>For each tube, predict whether pyruvate is made, whether CO<sub>2</sub> is released, whether O<sub>2</sub> is consumed, and whether a lot of ATP is made. Explain each prediction.</li>
<li>What do tubes B and C together show about which molecule the mitochondrion actually takes in?</li>
<li>Tube D is repeated with <strong>no O<sub>2</sub></strong>. Predict what happens to CO<sub>2</sub> release and to glycolysis, and explain.</li>
</ol>`,
    hints: [
      "Where are the enzymes for glycolysis? For pyruvate oxidation and the Krebs cycle? For the ETC?",
      "Liver cytosol also contains lactate dehydrogenase.",
      "Without O<sub>2</sub>, what happens to NADH in the mitochondria? Which Krebs and PDH reactants run out?"
    ],
    answer: `<p><strong>a.</strong></p>
<ul>
<li><strong>Tube A:</strong> Pyruvate is made, because the glycolysis enzymes are in the cytosol. No CO<sub>2</sub> is released and no O<sub>2</sub> is used, since there are no mitochondria. Only a little ATP is made (2 per glucose). Glycolysis keeps going only because lactate dehydrogenase in the cytosol turns some pyruvate into lactate, regenerating NAD<sup>+</sup>.</li>
<li><strong>Tube B:</strong> <strong>Nothing happens.</strong> Mitochondria do not have the glycolysis enzymes, and glucose is not their substrate, so no pyruvate, no CO<sub>2</sub>, no O<sub>2</sub> use, and no significant ATP.</li>
<li><strong>Tube C:</strong> No pyruvate is made (it is supplied). CO<sub>2</sub> is released by PDH and the Krebs cycle. O<sub>2</sub> is consumed, because the NADH and FADH<sub>2</sub> feed the ETC, where O<sub>2</sub> is the final acceptor. Plenty of ATP is made by oxidative phosphorylation.</li>
<li><strong>Tube D:</strong> Yes to all four. The cytosol turns glucose into pyruvate, which enters the mitochondria and is fully oxidized: CO<sub>2</sub> is released, O<sub>2</sub> is used, and the most ATP is made.</li>
</ul>
<p><strong>b.</strong> The mitochondrion takes in <strong>pyruvate, not glucose</strong>. Glucose is split in the cytoplasm first, and only its products enter the matrix. This fits the stage locations: glycolysis in the cytosol, pyruvate oxidation and the Krebs cycle in the matrix, and the ETC on the inner membrane.</p>
<p><strong>c.</strong> CO<sub>2</sub> release <strong>stops</strong> within a short time. Without O<sub>2</sub> to accept electrons, the ETC backs up and NADH and FADH<sub>2</sub> cannot be oxidized. NAD<sup>+</sup> and FAD run out, so PDH and the Krebs cycle (the CO<sub>2</sub>-releasing steps) stop. <strong>Glycolysis continues</strong>, because it is anaerobic, as long as lactate dehydrogenase keeps regenerating NAD<sup>+</sup>. Lactate builds up, and ATP falls to 2 per glucose.</p>`,
    marks: 6
  },
  {
    id: "xa18",
    lesson: "mix",
    level: "extend",
    tier: "extra",
    title: "Where did mitochondria come from?",
    prompt: `<p><em>This goes beyond the slides.</em></p>
<p>According to <span class="term">endosymbiotic theory</span>, mitochondria are descended from aerobic bacteria that were engulfed by an ancestral host cell well over a billion years ago and lived on inside it. Consider these observations:</p>
<ol>
<li>Mitochondria have their own small, <strong>circular DNA</strong> and their own ribosomes, which resemble bacterial ribosomes.</li>
<li>Mitochondria have <strong>two membranes</strong>, and the inner one resembles a bacterial plasma membrane.</li>
<li>New mitochondria arise only when existing mitochondria <strong>divide in two</strong>, much like bacteria.</li>
<li>Glycolysis happens in the cytoplasm of almost every living cell, including bacteria, needs no O<sub>2</sub>, and needs no organelles. Earth's early atmosphere contained almost no O<sub>2</sub>.</li>
</ol>
<p>Questions:</p>
<ol>
<li>Explain how observations 1&ndash;3 support endosymbiotic theory.</li>
<li>Use observation 4 to argue that glycolysis is the oldest stage of cellular respiration.</li>
<li>Bacteria have no mitochondria. Predict where a bacterium's ETC and ATP synthase are located, and where it pumps H<sup>+</sup> to.</li>
<li>A person inherits a mitochondrial DNA mutation that weakens complex I. Mitochondria in a fertilized egg come almost entirely from the egg. Predict the inheritance pattern, and which organs will be most affected.</li>
</ol>`,
    hints: [
      "Compare each mitochondrial feature with a free-living bacterium. Where would the outer membrane have come from when the bacterium was engulfed?",
      "A pathway found in every living thing, that needs no O<sub>2</sub> and no organelles, could have evolved before what?",
      "In a mitochondrion, the ETC sits in the inner membrane, which was once the bacterium's own plasma membrane. Which tissues have the highest ATP demand?"
    ],
    answer: `<p><strong>a.</strong></p>
<ul>
<li><strong>Observation 1:</strong> Circular DNA and bacteria-like ribosomes are exactly what a bacterium has. A structure that carries its own genome and its own protein-making machinery looks like a former independent organism.</li>
<li><strong>Observation 2:</strong> The inner membrane is the original bacterial plasma membrane. The outer membrane came from the host's membrane when the host engulfed the bacterium.</li>
<li><strong>Observation 3:</strong> The cell cannot build a mitochondrion from scratch. Mitochondria reproduce by division, as bacteria do by binary fission, which fits a lineage that was once free-living.</li>
</ul>
<p><strong>b.</strong> Glycolysis is found in nearly every organism, so it must have been present in their common ancestor. It needs no O<sub>2</sub> and no organelles, so it could have run in simple cells on an early Earth with almost no oxygen, before photosynthesis raised O<sub>2</sub> levels and before eukaryotes evolved. The Krebs cycle and the O<sub>2</sub>-using ETC were added later.</p>
<p><strong>c.</strong> In the bacterium's <strong>plasma membrane</strong>. It pumps H<sup>+</sup> from the cytoplasm to the <strong>outside</strong> of that membrane, and H<sup>+</sup> flows back in through ATP synthase. The bacterial cytoplasm plays the role of the matrix, and the space outside the membrane plays the role of the intermembrane space. Chemiosmosis works the same way in both.</p>
<p><strong>d.</strong> <strong>Maternal inheritance.</strong> An affected mother passes the mutation to all her children, and an affected father passes it to none. Fewer H<sup>+</sup> are pumped from NADH, so less ATP is made. The tissues hit hardest are those with the <strong>highest ATP demand</strong>: the brain and nerves (including the optic nerve, so vision loss is common), heart and skeletal muscle. Those cells fall back on glycolysis, so lactate often builds up.</p>`,
    marks: 6
  }
);
