/* Apply & extend: end-of-test thinking questions for lessons 2.04-2.07.
   Class values (NADH about 3 ATP, FADH2 about 2 ATP, max 38) unless an item says it uses modern values. */
window.EXT = window.EXT || [];
window.EXT.push(

  /* ================================================================ 2.04 ETC & chemiosmosis */
  {
    id: "xb01", lesson: "2.04", level: "apply", tier: "essential",
    title: "Liver cell vs muscle cell: same glucose, different ATP count",
    prompt: `<p>A liver cell moves the NADH made in glycolysis into the mitochondrion with the <span class="term">malate–aspartate shuttle</span>. A skeletal muscle cell uses the <span class="term">glycerol-3-phosphate shuttle</span>, which passes the electrons to FAD instead, so each cytosolic NADH reaches the chain as FADH<sub>2</sub>. Use the class values: NADH ≈ 3 ATP, FADH<sub>2</sub> ≈ 2 ATP.</p>
<ol>
<li>For one glucose, how many NADH and how many FADH<sub>2</sub> reach the ETC in each cell?</li>
<li>Calculate the maximum ATP per glucose in each cell. Show the substrate-level ATP separately.</li>
<li>The muscle cell "loses" ATP by using its shuttle. Explain why this shuttle is still a good fit for muscle.</li>
<li>Measured yields are closer to 30–32 ATP per glucose. Give two reasons.</li>
</ol>`,
    hints: [
      "Tally per glucose: glycolysis, pyruvate oxidation, then two turns of the Krebs cycle. Only the 2 NADH from glycolysis are affected by the shuttle.",
      "Muscle: the 2 glycolytic NADH become 2 FADH<sub>2</sub>, giving 8 NADH and 4 FADH<sub>2</sub>. Multiply by 3 and 2, then add the 4 substrate-level ATP."
    ],
    answer: `<p><strong>1. Carriers reaching the ETC.</strong> Each glucose gives 2 NADH in glycolysis (cytosol), 2 NADH in pyruvate oxidation, and 6 NADH + 2 FADH<sub>2</sub> from two Krebs turns (matrix).</p>
<ul>
<li>Liver (malate–aspartate): the 2 glycolytic NADH stay NADH, so <strong>10 NADH + 2 FADH<sub>2</sub></strong>.</li>
<li>Muscle (glycerol-3-phosphate): the 2 glycolytic NADH become FADH<sub>2</sub>, so <strong>8 NADH + 4 FADH<sub>2</sub></strong>.</li>
</ul>
<p><strong>2. ATP totals.</strong> Substrate-level ATP is the same in both cells: 2 (glycolysis) + 2 (Krebs) = 4.</p>
<div class="eq">Liver: 4 + (10 × 3) + (2 × 2) = 4 + 30 + 4 = 38 ATP</div>
<div class="eq">Muscle: 4 + (8 × 3) + (4 × 2) = 4 + 24 + 8 = 36 ATP</div>
<p>This is why you see both 38 and 36 quoted: the only difference is the shuttle.</p>
<p><strong>3. Why muscle accepts the loss.</strong> FADH<sub>2</sub> hands its electrons to ubiquinone and skips complex I, which is a proton pump. Fewer H<sup>+</sup> are pumped, so about 1 ATP is lost for each cytosolic NADH. But the glycerol-3-phosphate shuttle is faster. It regenerates cytosolic NAD<sup>+</sup> quickly, and NAD<sup>+</sup> is needed at glycolysis step 6. A hard-working muscle needs glycolysis to keep running fast, so speed is worth more than the extra 2 ATP. (The brain uses this shuttle too.)</p>
<p><strong>4. Why real yields are 30–32.</strong> Any two of these:</p>
<ul>
<li>Some H<sup>+</sup> leak back across the inner membrane without passing through ATP synthase.</li>
<li>Part of the gradient is used to move ADP and P<sub>i</sub> into the matrix and ATP out.</li>
<li>The number of H<sup>+</sup> needed per ATP is not a whole number and varies slightly between species.</li>
<li>The shuttle used changes the count, as in part 2.</li>
</ul>
<p>The values 3 and 2 are rounded textbook numbers. They give the maximum, not the typical yield.</p>`,
    marks: 5
  },

  {
    id: "xb02", lesson: "2.04", level: "apply", tier: "likely",
    title: "Four poisons, four stopping points",
    prompt: `<p>Researchers use poisons to study the chain. Each one blocks a single site:</p>
<ul>
<li><strong>Rotenone</strong> (a plant-based pesticide) blocks complex I.</li>
<li><strong>Antimycin A</strong> blocks complex III.</li>
<li><strong>Cyanide</strong> blocks complex IV (cytochrome c oxidase).</li>
<li><strong>Oligomycin</strong> blocks the H<sup>+</sup> channel of ATP synthase. It does not touch complexes I–IV.</li>
</ul>
<ol>
<li>For rotenone, antimycin A and cyanide, state which carriers end up stuck in the reduced form and which end up oxidized. Give the general rule.</li>
<li>Mitochondria treated with rotenone still make some ATP if they are given succinate. Explain, and say how much ATP each FADH<sub>2</sub> can still give (class values).</li>
<li>Oligomycin does not block any electron carrier, yet O<sub>2</sub> use falls almost to zero. Explain.</li>
<li>All four poisons cause NADH to build up and NAD<sup>+</sup> to run low. Explain why, and predict the effect on the Krebs cycle.</li>
</ol>`,
    hints: [
      "Picture a traffic jam. Cars before the block cannot move on; cars after the block drive away and nothing replaces them.",
      "Succinate is oxidized by complex II, which feeds ubiquinone directly. For oligomycin, ask what happens to the H<sup>+</sup> gradient when it has no way back into the matrix."
    ],
    answer: `<p><strong>1. The rule:</strong> carriers <em>before</em> the block stay <strong>reduced</strong> (they hold electrons with nowhere to pass them); carriers <em>after</em> the block become <strong>oxidized</strong> (they pass their electrons on but get no new ones).</p>
<ul>
<li>Rotenone: NADH and complex I stay reduced. Q, complex III, cytochrome c and complex IV become oxidized.</li>
<li>Antimycin A: complex I, complex II and Q stay reduced. Cytochrome c and complex IV become oxidized.</li>
<li>Cyanide: every carrier through complex IV stays reduced. O<sub>2</sub> is not reduced, so no water forms and O<sub>2</sub> is not used.</li>
</ul>
<p><strong>2. Succinate bypasses complex I.</strong> Succinate dehydrogenase (complex II) oxidizes succinate to fumarate and makes FADH<sub>2</sub>, which hands electrons straight to Q. From there they flow through complexes III and IV, which still pump H<sup>+</sup>. FADH<sub>2</sub> never used complex I anyway, so each FADH<sub>2</sub> still gives about <strong>2 ATP</strong>. What is lost is the ~3 ATP from every NADH.</p>
<p><strong>3. Oligomycin.</strong> The ETC and ATP synthase are coupled through the H<sup>+</sup> gradient. With ATP synthase blocked, H<sup>+</sup> keep being pumped into the intermembrane space but cannot flow back. The gradient becomes so steep that the energy released by passing electrons is no longer enough to pump H<sup>+</sup> against it. Pumping stops, so electron flow stops, so O<sub>2</sub> (the final acceptor) is no longer used.</p>
<p><strong>4. NADH builds up.</strong> In every case electrons stop moving down the chain, so complex I cannot accept electrons from NADH. NADH is not oxidized back to NAD<sup>+</sup>. Pyruvate oxidation and three Krebs steps need NAD<sup>+</sup>, so the Krebs cycle slows and stops. The cell is left with glycolysis (2 ATP per glucose) and fermentation to regenerate NAD<sup>+</sup>.</p>`,
    marks: 6
  },

  {
    id: "xb03", lesson: "2.04", level: "analyze", tier: "likely",
    title: "Isolated mitochondria: reading an oxygen-consumption experiment",
    prompt: `<p>Mitochondria were isolated from rat liver and placed in a sealed chamber with a buffer containing phosphate (P<sub>i</sub>). An oxygen electrode measured how fast O<sub>2</sub> was used. Substances were added one after another.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Step</th><th>Addition</th><th>O<sub>2</sub> use (nmol O<sub>2</sub>/min)</th></tr></thead>
<tbody>
<tr><td>1</td><td>Mitochondria in buffer, no fuel</td><td>2</td></tr>
<tr><td>2</td><td>+ succinate</td><td>10</td></tr>
<tr><td>3</td><td>+ a small amount of ADP</td><td>45</td></tr>
<tr><td>4</td><td>(nothing added; 4 minutes later)</td><td>11</td></tr>
<tr><td>5</td><td>+ more ADP</td><td>44</td></tr>
<tr><td>6</td><td>+ oligomycin (blocks ATP synthase)</td><td>9</td></tr>
<tr><td>7</td><td>+ DNP</td><td>72</td></tr>
<tr><td>8</td><td>+ cyanide</td><td>1</td></tr>
</tbody></table></div>
<ol>
<li>Why is O<sub>2</sub> use so low at step 1, and what does succinate provide at step 2?</li>
<li>Explain the rise at step 3 and the fall at step 4.</li>
<li>Explain the result at step 6, even though ADP is still present.</li>
<li>DNP is a small molecule that dissolves in membranes. At step 7, O<sub>2</sub> use is higher than ever, even with ATP synthase still blocked. Suggest what DNP does, and predict how much ATP is being made.</li>
<li>Why does cyanide drop O<sub>2</sub> use to almost zero even with DNP present?</li>
</ol>`,
    hints: [
      "The ETC can only run as fast as H<sup>+</sup> can flow back into the matrix. ATP synthase only lets H<sup>+</sup> through when it has ADP to phosphorylate.",
      "If O<sub>2</sub> use jumps while ATP synthase is blocked, H<sup>+</sup> must be getting back into the matrix by another route. Cyanide works at the very end of the chain."
    ],
    answer: `<p><strong>1.</strong> With no fuel there are no electrons entering the chain, so O<sub>2</sub>, the final electron acceptor, has almost nothing to accept. Succinate is a Krebs intermediate. Complex II (succinate dehydrogenase) oxidizes it to fumarate and passes the electrons, via FADH<sub>2</sub>, to Q and on to O<sub>2</sub>. It is the electron source.</p>
<p><strong>2.</strong> At step 2 the chain pumps H<sup>+</sup> until the gradient is steep and then slows, because H<sup>+</sup> have no way back. Adding ADP lets ATP synthase work: H<sup>+</sup> flow back through it, the gradient drops, and the pumps can run fast again, so O<sub>2</sub> use jumps. By step 4 all the ADP has been converted to ATP. ATP synthase stops, the gradient rebuilds, and O<sub>2</sub> use falls back. ADP availability controls the rate of respiration.</p>
<p><strong>3.</strong> Oligomycin blocks the only normal route back for H<sup>+</sup>. The gradient becomes too steep to pump against, electron flow stalls and O<sub>2</sub> use falls, even though ADP is waiting.</p>
<p><strong>4.</strong> DNP must carry H<sup>+</sup> back across the inner membrane, bypassing ATP synthase. It is an <span class="term">uncoupler</span>. The gradient can never build up, so nothing holds the pumps back and the chain runs at full speed. ATP made by oxidative phosphorylation is about <strong>zero</strong> (ATP synthase is blocked, and the gradient is gone anyway). The energy released is lost as heat.</p>
<p><strong>5.</strong> Cyanide blocks complex IV, so electrons cannot be passed to O<sub>2</sub>. DNP only affects the gradient. It cannot help if the final step of electron transfer is blocked.</p>
<p><strong>Big idea:</strong> electron transport and ATP synthesis are linked by the H<sup>+</sup> gradient. Block ATP synthase and electron flow slows; let H<sup>+</sup> leak back and electron flow speeds up but makes no ATP.</p>`,
    marks: 6
  },

  {
    id: "xb04", lesson: "2.04", level: "analyze", tier: "likely",
    title: "Cyanide poisoning: what the blood tests show",
    prompt: `<p>A worker exposed to cyanide gas reaches hospital within an hour. Blood results:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Measurement</th><th>Patient</th><th>Normal</th></tr></thead>
<tbody>
<tr><td>O<sub>2</sub> in arterial blood (partial pressure)</td><td>105 mm Hg</td><td>75–100 mm Hg</td></tr>
<tr><td>O<sub>2</sub> in venous blood (partial pressure)</td><td>78 mm Hg</td><td>about 40 mm Hg</td></tr>
<tr><td>Blood lactate</td><td>12 mmol/L</td><td>0.5–2 mmol/L</td></tr>
<tr><td>Blood pH</td><td>7.10</td><td>7.35–7.45</td></tr>
<tr><td>Breathing rate</td><td>32 breaths/min</td><td>12–20 breaths/min</td></tr>
</tbody></table></div>
<ol>
<li>Venous blood normally holds much less O<sub>2</sub> than arterial blood. Explain why the gap is so small in this patient.</li>
<li>Explain the very high lactate. Use NAD<sup>+</sup> and NADH in your answer.</li>
<li>Explain the low pH and the rapid breathing.</li>
<li>A doctor gives an antidote that binds cyanide more tightly than cytochrome c oxidase does, pulling it off the enzyme. Predict, in order, how the patient's O<sub>2</sub> use, NADH/NAD<sup>+</sup> levels and lactate change.</li>
</ol>`,
    hints: [
      "The difference between arterial and venous O<sub>2</sub> is the amount the tissues took out and used. Which complex uses O<sub>2</sub>?",
      "If the ETC cannot oxidize NADH, glycolysis is the only ATP source left. Glycolysis needs NAD<sup>+</sup> at step 6. Which enzyme can regenerate it?"
    ],
    answer: `<p><strong>1. Small arterial–venous gap.</strong> The gap is normally the O<sub>2</sub> that cells remove from the blood and reduce to water at complex IV. Cyanide binds cytochrome c oxidase (complex IV), so electrons cannot be passed to O<sub>2</sub> and cells stop using it. O<sub>2</sub> stays in the blood, so venous blood is almost as oxygen-rich as arterial blood. Delivery is fine; <em>use</em> is blocked. This matches the 7 Deaths autopsy (blood O<sub>2</sub> about 110 mm Hg).</p>
<p><strong>2. High lactate.</strong> With the chain blocked, NADH cannot be oxidized. NADH piles up and NAD<sup>+</sup> runs out (in the case study: NADH 400 vs 50 µM, NAD<sup>+</sup> 10 vs 75 µM). The Krebs cycle stops for lack of NAD<sup>+</sup>, so glycolysis is the only ATP source, and it needs NAD<sup>+</sup> at step 6. Cells regenerate it with lactate dehydrogenase: pyruvate + NADH → lactate + NAD<sup>+</sup>. Every tissue does this at once, so lactate floods into the blood.</p>
<p><strong>3. Low pH and fast breathing.</strong> Cells are hydrolyzing ATP (ATP → ADP + P<sub>i</sub>, which releases H<sup>+</sup>), but mitochondria can no longer use those H<sup>+</sup> to rebuild ATP, so acid accumulates. Lactate rises alongside and is used as a marker. The brain's breathing centre detects the acid and speeds up breathing to blow off CO<sub>2</sub>, which lowers the acid in the blood. Breathing faster does not fix the real problem: the blood already has plenty of O<sub>2</sub>.</p>
<p><strong>4. After the antidote.</strong></p>
<ol>
<li>Complex IV is freed, electrons flow to O<sub>2</sub> again, and O<sub>2</sub> use rises. Venous O<sub>2</sub> drops back toward normal.</li>
<li>NADH is oxidized at complex I, so NADH falls and NAD<sup>+</sup> recovers. The Krebs cycle restarts and ATP rises.</li>
<li>Lactate falls more slowly. It is converted back to pyruvate and oxidized (heart, slow-twitch muscle) or made into glucose in the liver.</li>
</ol>
<p><em>Note:</em> the case study says cyanide binds "irreversibly". In reality the binding is very tight but reversible, which is why antidotes that pull cyanide away can work.</p>`,
    marks: 7
  },

  {
    id: "xb05", lesson: "2.04", level: "extend", tier: "extra",
    title: "DNP diet pills and brown fat: making heat instead of ATP",
    prompt: `<p><strong>Beyond the slides.</strong> In the early 1930s, 2,4-dinitrophenol (DNP) was sold as a weight-loss drug. DNP picks up H<sup>+</sup> in the intermembrane space, crosses the inner mitochondrial membrane, and releases the H<sup>+</sup> in the matrix. Users lost weight fast, but some died of extreme fever, and it was banned for human use in the United States in 1938. It is still sold illegally online and still kills people.</p>
<p>Newborn babies and hibernating mammals have <span class="term">brown fat</span>. Its mitochondria contain <span class="term">thermogenin</span> (also called UCP1), a channel protein that lets H<sup>+</sup> back into the matrix. It is switched on by nerve signals when the body is cold.</p>
<ol>
<li>Explain how DNP lowers ATP production even though the ETC runs faster.</li>
<li>Explain why a DNP user loses weight. Refer to the order in which fuels are used.</li>
<li>Explain why DNP can cause fatal overheating, and why there is no safe "small" dose.</li>
<li>Thermogenin works the same way as DNP. Explain why it is useful while DNP is dangerous.</li>
</ol>`,
    hints: [
      "If H<sup>+</sup> can flow back into the matrix without passing through ATP synthase, what happens to the energy stored in the gradient?",
      "The cell still needs the same amount of ATP. To get it with a leaky membrane, it must burn fuel much faster. Compare a controlled leak with an uncontrolled one."
    ],
    answer: `<p><strong>1. Uncoupling.</strong> Normally the energy from electron transport is stored in the H<sup>+</sup> gradient and released through ATP synthase to make ATP. DNP gives H<sup>+</sup> a shortcut back into the matrix. The gradient collapses, so little H<sup>+</sup> passes through ATP synthase and little ATP is made. With no steep gradient to push against, the pumps work freely, so the chain runs faster and uses more O<sub>2</sub>. Electron transport is "uncoupled" from ATP synthesis, and the gradient's energy is released as <strong>heat</strong>.</p>
<p><strong>2. Weight loss.</strong> Each NADH and FADH<sub>2</sub> now gives far less ATP, but the cell's ATP demand is unchanged. To keep up, cells oxidize fuel much faster. Glycogen stores are used up first, then fat is broken down (glycerol into glycolysis, fatty acids by β-oxidation to acetyl-CoA). Burning stored fat is the weight loss.</p>
<p><strong>3. Fatal fever.</strong> The extra fuel is being oxidized but its energy ends up as heat instead of ATP. Body temperature rises. At high temperature enzymes and other proteins begin to denature, which damages organs. At the same time ATP may still fall short of demand. DNP acts in every cell, and the body has no way to switch it off. The effect rises with dose, and people respond differently, so the gap between a "weight-loss" dose and a lethal one is very small.</p>
<p><strong>4. Thermogenin vs DNP.</strong></p>
<ul>
<li><strong>Location:</strong> thermogenin is found only in brown fat, a tissue whose job is to make heat. DNP affects every cell, including heart and brain.</li>
<li><strong>Control:</strong> thermogenin is switched on only when the body is cold and switched off when warm. DNP cannot be switched off once taken.</li>
<li><strong>Purpose:</strong> a newborn or hibernating animal needs heat to survive. Brown fat is packed with mitochondria to burn fat for heat on demand.</li>
</ul>
<p>Same mechanism, different outcome: controlled uncoupling is a heater with a thermostat; DNP is a heater with no off switch.</p>`,
    marks: 6
  },

  /* ================================================================ 2.05 Regulation */
  {
    id: "xb06", lesson: "2.05", level: "apply", tier: "essential",
    title: "After a big meal vs during a sprint: PFK and PDH",
    prompt: `<p>Think about the same thigh muscle cell in two situations:</p>
<ul>
<li><strong>A:</strong> resting on the couch, one hour after a large pasta dinner.</li>
<li><strong>B:</strong> 20 seconds into an all-out 200 m sprint.</li>
</ul>
<ol>
<li>For each situation, predict whether these are high or low: ATP, ADP, citrate, NADH.</li>
<li>Predict the activity of phosphofructokinase (PFK) and pyruvate dehydrogenase (PDH) in each situation. Name the regulators responsible.</li>
<li>In situation A, glucose keeps entering the cell even though PFK is slowed. What happens to it?</li>
<li>In situation B, PDH is switched on, but much of the pyruvate still does not become acetyl-CoA. Where does it go, and why?</li>
</ol>`,
    hints: [
      "At rest after a meal, the cell has more energy than it needs. In a sprint, ATP is hydrolyzed to ADP faster than it can be rebuilt.",
      "PFK: inhibited by ATP and citrate, stimulated by ADP. PDH: activated by pyruvate, ADP, NAD<sup>+</sup> and CoA; inhibited by ATP, NADH and acetyl-CoA."
    ],
    answer: `<p><strong>1. Levels.</strong></p>
<ul>
<li><strong>A (rest, fed):</strong> ATP high, ADP low, citrate high (the Krebs cycle is backed up with fuel), NADH high (the ETC is slow because little ADP is available).</li>
<li><strong>B (sprint):</strong> ATP low (used for contraction), ADP high, citrate low (Krebs intermediates are used as fast as they are made), NAD<sup>+</sup> relatively available as NADH is used.</li>
</ul>
<p><strong>2. Enzyme activity.</strong></p>
<ul>
<li><strong>A:</strong> PFK is <strong>inhibited</strong> because high ATP and high citrate bind its allosteric site. PDH is <strong>inhibited</strong> by its products acetyl-CoA and NADH (feedback inhibition) and by high ATP. Both say "enough energy, slow down."</li>
<li><strong>B:</strong> PFK is <strong>stimulated</strong> by high ADP and low citrate. PDH is <strong>activated</strong> by pyruvate (lots of substrate from fast glycolysis), ADP (low energy), and available NAD<sup>+</sup> and CoA. Both say "need energy, speed up."</li>
</ul>
<p><strong>3. Glucose at rest.</strong> Glucose still enters and is trapped as glucose-6-phosphate (step 1 comes before the PFK control point). Instead of continuing through glycolysis, it is stored as <strong>glycogen</strong> in muscle and liver. When glycogen stores are full, extra glucose is converted to <strong>fat</strong> (via acetyl-CoA) for long-term storage. The cell saves fuel instead of burning it for ATP it does not need.</p>
<p><strong>4. Pyruvate in a sprint.</strong> Glycolysis is running faster than O<sub>2</sub> can be delivered and faster than the ETC and shuttles can reoxidize NADH. NADH builds up in the cytosol and NAD<sup>+</sup> runs short. To keep glycolysis going, pyruvate is reduced to <strong>lactate</strong> by lactate dehydrogenase, which regenerates NAD<sup>+</sup>. The fate of pyruvate depends on O<sub>2</sub> and on how fast ATP is needed, not just on enzyme regulation.</p>`,
    marks: 6
  },

  {
    id: "xb07", lesson: "2.05", level: "analyze", tier: "likely",
    title: "PFK activity data: how ATP turns glycolysis down",
    prompt: `<p>Purified PFK was tested at different concentrations of its substrate, fructose-6-phosphate (F6P). Activity is shown as a percentage of the maximum rate.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>[F6P] (mM)</th><th>Low ATP (0.1 mM)</th><th>High ATP (2 mM)</th><th>High ATP + AMP</th></tr></thead>
<tbody>
<tr><td>0.1</td><td>20</td><td>3</td><td>10</td></tr>
<tr><td>0.25</td><td>45</td><td>6</td><td>22</td></tr>
<tr><td>0.5</td><td>72</td><td>12</td><td>45</td></tr>
<tr><td>1.0</td><td>90</td><td>28</td><td>75</td></tr>
<tr><td>2.0</td><td>97</td><td>55</td><td>92</td></tr>
<tr><td>4.0</td><td>99</td><td>80</td><td>98</td></tr>
</tbody></table></div>
<ol>
<li>Describe the effect of high ATP on PFK. Quote data.</li>
<li>ATP is also a <em>substrate</em> of PFK (step 3 uses ATP → ADP). Explain how the same molecule can be both a substrate and an inhibitor.</li>
<li>AMP is made when ATP runs very low. What does the last column show, and why does this make sense for the cell?</li>
<li>Predict the shape of a curve for "low ATP + high citrate". Explain.</li>
<li>Suggest why the cell controls glycolysis at step 3 rather than at step 1.</li>
</ol>`,
    hints: [
      "Compare the columns at the same F6P concentration, especially the low ones. Allosteric enzymes have a second binding site away from the active site.",
      "Glucose-6-phosphate (made at step 1) can also be used to build glycogen. Fructose-1,6-bisphosphate (made at step 3) has only one place to go."
    ],
    answer: `<p><strong>1.</strong> High ATP lowers PFK activity at every F6P concentration. At 0.5 mM F6P activity falls from 72% to 12%; at 1.0 mM from 90% to 28%. Much more F6P is needed to reach the same rate, so the curve shifts to the right. At very high F6P (4 mM) activity recovers to 80%, so ATP lowers the enzyme's affinity for F6P rather than destroying it.</p>
<p><strong>2.</strong> PFK is an <span class="term">allosteric enzyme</span> with two kinds of site. ATP binds the <strong>active site</strong> as a substrate, donating a phosphate to F6P. The active site binds ATP well even at low concentrations. A separate <strong>allosteric (regulatory) site</strong> binds ATP weakly, so it fills only when ATP is abundant. When it is filled, PFK changes shape and binds F6P less well. Low ATP: the enzyme works. High ATP: it slows itself down. This is feedback inhibition by the end product of respiration.</p>
<p><strong>3.</strong> AMP largely reverses the ATP inhibition (at 1.0 mM F6P: 28% rises to 75%). AMP (like ADP) signals that the cell's energy is low, so glycolysis should speed up even if some ATP is still present. The enzyme responds to the <em>ratio</em> of energy signals, not just ATP alone.</p>
<p><strong>4.</strong> Citrate also inhibits PFK, so the curve would sit to the right of the low-ATP curve, like the high-ATP column. High citrate means the Krebs cycle is backed up with fuel, so there is no point making more pyruvate.</p>
<p><strong>5.</strong> Glucose-6-phosphate from step 1 can still go to glycogen storage, so blocking step 1 would block storage too. Step 3 is the first step that commits sugar to glycolysis: fructose-1,6-bisphosphate can only continue down the pathway. Controlling the committed step stops wasted work without blocking other uses of glucose.</p>`,
    marks: 6
  },

  {
    id: "xb08", lesson: "2.05", level: "apply", tier: "likely",
    title: "A PFK mutation that ignores ATP",
    prompt: `<p>Imagine a mutation that changes PFK's allosteric site so that ATP and citrate can no longer bind there. The active site works normally. PDH is unaffected.</p>
<ol>
<li>Predict the rate of glycolysis in a resting, well-fed muscle cell with this mutation, compared with a normal cell.</li>
<li>PDH is still inhibited when ATP, NADH and acetyl-CoA are high. Predict what happens to the extra pyruvate at rest.</li>
<li>Would ATP levels in the resting cell be much higher than normal? Explain.</li>
<li>Use this example to explain why cells regulate respiration at more than one point.</li>
</ol>`,
    hints: [
      "Without its brake, PFK runs whenever F6P is present. What normally signals 'stop' to PFK at rest?",
      "The ETC can only run when ADP is available for ATP synthase. Extra fuel does not mean extra ATP if there is no ADP to phosphorylate."
    ],
    answer: `<p><strong>1. Glycolysis runs too fast at rest.</strong> Normally, high ATP and citrate at rest bind PFK's allosteric site and slow glycolysis. Without that site, PFK runs whenever F6P is available. Glucose is pushed through glycolysis even though the cell does not need the energy, and glucose that would have been stored as glycogen is used instead.</p>
<p><strong>2. Pyruvate piles up.</strong> At rest, ATP, NADH and acetyl-CoA are high, so PDH is inhibited and pyruvate cannot easily become acetyl-CoA. Pyruvate accumulates. The cell must remove it, or glycolysis will stall. In muscle it can be converted to <strong>lactate</strong> (which also regenerates NAD<sup>+</sup>) or to the amino acid <strong>alanine</strong>. Lactate and alanine go to the liver, which can turn them back into glucose by gluconeogenesis. The result is a wasteful cycle: glucose is broken down and rebuilt, costing ATP each time.</p>
<p><strong>3. ATP would not rise much.</strong> ATP synthase only makes ATP when ADP is available. At rest ADP is low, so the H<sup>+</sup> gradient is already steep and the ETC is slow. Extra pyruvate cannot be turned into extra ATP. The 2 ATP per glucose from glycolysis add a little, but most of the extra carbon goes to lactate, alanine or storage, not ATP. More fuel does not mean more ATP: <em>demand</em> sets the rate.</p>
<p><strong>4. Why several control points.</strong> Each control point protects a different part of the pathway. PFK controls whether glucose enters glycolysis. PDH controls whether pyruvate enters the mitochondrion as acetyl-CoA. If only PDH is regulated, glucose is still broken down and pyruvate piles up, wasting glucose and glycogen. With both, the cell matches each stage to the ATP/ADP ratio, citrate and NADH levels, and saves fuel when energy is high.</p>`,
    marks: 5
  },

  {
    id: "xb09", lesson: "2.05", level: "extend", tier: "extra",
    title: "Tarui disease: when muscle has no working PFK",
    prompt: `<p><strong>Beyond the slides.</strong> In <span class="term">Tarui disease</span> (glycogen storage disease type VII), a person inherits a faulty gene for the muscle form of PFK. Patients get cramps and exhaustion during intense exercise, and their muscle glycogen levels are abnormally high. Doctors use a forearm exercise test: blood is sampled before and 2 minutes after one minute of hard hand-gripping.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Blood value</th><th>Healthy: before</th><th>Healthy: after</th><th>Patient: before</th><th>Patient: after</th></tr></thead>
<tbody>
<tr><td>Lactate (mmol/L)</td><td>1.0</td><td>4.5</td><td>1.0</td><td>1.1</td></tr>
<tr><td>Ammonia (µmol/L)</td><td>30</td><td>110</td><td>30</td><td>180</td></tr>
</tbody></table></div>
<ol>
<li>Explain why the patient's lactate barely rises.</li>
<li>Explain why the patient's muscle glycogen is high instead of low.</li>
<li>When ATP runs very low, muscle breaks down AMP, releasing ammonia. What does the ammonia result tell you about the patient's muscle during exercise?</li>
<li>Patients feel <em>worse</em> exercising after a high-carbohydrate meal. A carbohydrate meal raises insulin, which slows the release of fatty acids from fat tissue. Explain the patients' symptoms.</li>
<li>Name two fuels the patient's muscle can still use, and say where each enters respiration.</li>
</ol>`,
    hints: [
      "Lactate comes from pyruvate. Where in glycolysis is PFK, and can glucose get past it?",
      "Any fuel that enters below step 3 of glycolysis avoids the broken enzyme. Fatty acids become acetyl-CoA; lactate becomes pyruvate."
    ],
    answer: `<p><strong>1.</strong> PFK catalyzes step 3 (F6P → fructose-1,6-bisphosphate). Without it, glucose and glycogen cannot get past step 3, so very little pyruvate is made. Lactate is made from pyruvate by lactate dehydrogenase, so with no pyruvate there is no lactate rise, even during hard exercise.</p>
<p><strong>2.</strong> Glycogen is broken down to glucose-6-phosphate, which becomes F6P, and then the pathway stops. G6P and F6P build up behind the block, and the excess G6P is sent back into glycogen synthesis. Glycogen accumulates because it can be stored but not used.</p>
<p><strong>3.</strong> The ammonia rise is larger than normal (180 vs 110 µmol/L). The patient's muscle runs much lower on ATP during exercise. It cannot use its main fast fuel, so it breaks down more AMP, releasing more ammonia. This is a sign of a severe energy crisis in the muscle.</p>
<p><strong>4.</strong> These patients rely heavily on fatty acids. Fatty acids are broken down by β-oxidation into acetyl-CoA, which enters the Krebs cycle, completely bypassing PFK. After a carbohydrate meal, insulin rises and fat tissue releases fewer fatty acids. The muscle loses its best working fuel, and the extra glucose cannot be used past step 3. Fatigue and cramps come sooner.</p>
<p><strong>5.</strong> Any two of:</p>
<ul>
<li><strong>Fatty acids</strong>: β-oxidation to acetyl-CoA, then Krebs and ETC.</li>
<li><strong>Glycerol</strong> from fat: converted to DHAP, which enters glycolysis <em>after</em> PFK.</li>
<li><strong>Lactate</strong> from the blood: converted to pyruvate, then acetyl-CoA.</li>
<li><strong>Ketone bodies</strong> (made by the liver from fat) or <strong>amino acids</strong>: enter as acetyl-CoA or Krebs intermediates.</li>
</ul>
<p>This disease shows why PFK is the key control point: it is the gate to everything after step 3.</p>`,
    marks: 7
  },

  /* ================================================================ 2.06 Lipid & protein catabolism */
  {
    id: "xb10", lesson: "2.06", level: "apply", tier: "essential",
    title: "Stranded without food: which fuel, and when?",
    prompt: `<p>A hiker is stranded for three weeks with water but no food. Their body has to keep making ATP the whole time.</p>
<ol>
<li>In what order does the body rely on carbohydrates, lipids and proteins? Give a reason for the order.</li>
<li>Trace a stored fat (triglyceride) from storage to the point where each part enters cellular respiration.</li>
<li>Late in the fast, muscle protein is broken down. Trace an amino acid into respiration and state what happens to its nitrogen.</li>
<li>Explain why using protein for fuel is especially dangerous.</li>
<li>Why are nucleic acids almost never used as fuel?</li>
</ol>`,
    hints: [
      "Glycogen is a small, fast store; fat is a large, slow store; protein is not a store at all, because every protein has a job.",
      "Every macromolecule is first hydrolyzed into monomers. Glycerol → DHAP; fatty acids → β-oxidation → acetyl-CoA; amino acids → deamination in the liver."
    ],
    answer: `<p><strong>1. Order: carbohydrates → lipids → proteins.</strong> Glycogen (stored glucose in liver and muscle) is broken down quickly and is used first, but the store is small and lasts only about a day. Fat is the body's large long-term store and supplies most of the energy for the following weeks. Protein is used heavily only in severe starvation, because proteins are working molecules, not a fuel store.</p>
<p><strong>2. Fat.</strong> A triglyceride is hydrolyzed into <strong>glycerol + 3 fatty acids</strong>.</p>
<ul>
<li>Glycerol is converted to <strong>DHAP</strong>, which enters glycolysis (DHAP → G3P at step 5). When glucose is very low, the liver instead uses glycerol to make new glucose by <span class="term">gluconeogenesis</span>.</li>
<li>Fatty acids are cut into 2-carbon pieces by <strong>β-oxidation</strong> in the matrix, forming <strong>acetyl-CoA</strong>, which enters the Krebs cycle. The NADH and FADH<sub>2</sub> produced feed the ETC.</li>
</ul>
<p><strong>3. Protein.</strong> Proteins are hydrolyzed into amino acids. In the liver, <span class="term">deamination</span> removes the amino group as <strong>ammonia (NH<sub>3</sub>)</strong>, which is toxic, so the liver converts it into <strong>urea</strong>, excreted by the kidneys. The remaining carbon skeleton enters respiration as pyruvate (e.g. alanine), acetyl-CoA (e.g. leucine) or a Krebs intermediate (e.g. glutamate → α-ketoglutarate).</p>
<p><strong>4. Why protein use is dangerous.</strong> There is no protein store, so every protein broken down is taken from something that does a job: enzymes, muscle (including heart and breathing muscles), antibodies, transport proteins. Heavy protein loss weakens the heart and immune system and can be fatal. It also produces nitrogen waste that the liver and kidneys must handle.</p>
<p><strong>5. Nucleic acids.</strong> Cells contain relatively little DNA and RNA, and the nucleotides are valuable building blocks, so they are usually recycled to make new nucleic acids rather than burned.</p>`,
    marks: 6
  },

  {
    id: "xb11", lesson: "2.06", level: "apply", tier: "likely",
    title: "Three amino acids, three entry points",
    prompt: `<p>After deamination, the carbon skeletons of different amino acids enter respiration at different places:</p>
<ul>
<li><strong>Alanine</strong> → pyruvate</li>
<li><strong>Leucine</strong> → acetyl-CoA</li>
<li><strong>Glutamate</strong> → α-ketoglutarate (a Krebs intermediate)</li>
</ul>
<ol>
<li>What does deamination remove, where does it happen, and what happens to the product?</li>
<li>Using class values, calculate the maximum ATP made when the pyruvate from one alanine is fully oxidized. Show your steps.</li>
<li>During starvation the liver needs to make new glucose. The PDH reaction (pyruvate → acetyl-CoA) cannot run backwards. Which of the three skeletons could be used to make glucose, and which could not? Explain.</li>
<li>Athletes on very high-protein diets are told to drink extra water. Explain why.</li>
</ol>`,
    hints: [
      "Pyruvate → acetyl-CoA gives 1 NADH. One Krebs turn gives 3 NADH, 1 FADH<sub>2</sub> and 1 ATP. Use NADH ≈ 3 and FADH<sub>2</sub> ≈ 2.",
      "Gluconeogenesis builds glucose from pyruvate (and from Krebs intermediates that can be turned into it). Acetyl-CoA's two carbons leave the Krebs cycle as two CO<sub>2</sub>."
    ],
    answer: `<p><strong>1.</strong> Deamination removes the <strong>amino group (–NH<sub>2</sub>)</strong> from an amino acid. It happens mainly in the <strong>liver</strong>. The amino group becomes <strong>ammonia (NH<sub>3</sub>)</strong>, which is toxic, so the liver converts it into urea, which travels in the blood to the kidneys and leaves in urine. The carbon skeleton that remains can be used as fuel.</p>
<p><strong>2. ATP from one pyruvate.</strong></p>
<ul>
<li>Pyruvate oxidation: 1 NADH → 3 ATP</li>
<li>One Krebs turn: 3 NADH → 9 ATP; 1 FADH<sub>2</sub> → 2 ATP; 1 ATP (via GTP) → 1 ATP</li>
</ul>
<div class="eq">3 + 9 + 2 + 1 = 15 ATP per alanine skeleton</div>
<p>Check: glucose gives 2 pyruvate (2 × 15 = 30) plus 2 ATP and 2 NADH (6 ATP) from glycolysis, which is 38. The numbers agree.</p>
<p><strong>3. Glucose from skeletons.</strong></p>
<ul>
<li><strong>Alanine: yes.</strong> It becomes pyruvate, the starting material for gluconeogenesis.</li>
<li><strong>Glutamate: yes.</strong> α-Ketoglutarate goes around the cycle to oxaloacetate, which the liver can convert to glucose.</li>
<li><strong>Leucine: no.</strong> It becomes acetyl-CoA. PDH cannot turn acetyl-CoA back into pyruvate, and in the Krebs cycle the 2 carbons added by acetyl-CoA are balanced by the 2 CO<sub>2</sub> released. There is no net carbon left over to build glucose. Leucine can only be burned for ATP or made into fat or ketone bodies.</li>
</ul>
<p><strong>4. Extra water.</strong> Burning a lot of protein means a lot of deamination, so a lot of ammonia is converted to urea. Urea must be dissolved in water to be excreted by the kidneys. More urea means more urine, so the athlete loses more water and needs to drink more.</p>`,
    marks: 5
  },

  {
    id: "xb12", lesson: "2.06", level: "analyze", tier: "likely",
    title: "Ammonia and urea: three patients, three problems",
    prompt: `<p>Three adults have their blood tested. One has liver failure, one has kidney failure, and one is a healthy bodybuilder on a very high-protein diet.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Patient</th><th>Blood ammonia (µmol/L)</th><th>Blood urea (mmol/L)</th><th>Observations</th></tr></thead>
<tbody>
<tr><td>Normal range</td><td>15–45</td><td>2.5–7.1</td><td></td></tr>
<tr><td>X</td><td>38</td><td>9.0</td><td>Feels well; urine volume high</td></tr>
<tr><td>Y</td><td>160</td><td>1.4</td><td>Confused and drowsy; yellowish skin</td></tr>
<tr><td>Z</td><td>42</td><td>31</td><td>Swollen ankles; very little urine</td></tr>
</tbody></table></div>
<ol>
<li>Match each patient to a condition. Justify each match with the data.</li>
<li>Explain why patient Y is confused.</li>
<li>Patient Y's doctor recommends limiting protein in the diet. Explain using deamination.</li>
<li>Explain why patient Z's urea is very high but ammonia is normal.</li>
<li>Patient Y's blood glucose also drops dangerously between meals. Suggest why.</li>
</ol>`,
    hints: [
      "Two organs handle nitrogen waste: one turns ammonia into urea, the other removes urea from the blood. A failure at each step causes a different pile-up.",
      "Which substance builds up depends on which step is blocked: ammonia builds up if it cannot be converted; urea builds up if it cannot be excreted."
    ],
    answer: `<p><strong>1. Matches.</strong></p>
<ul>
<li><strong>X = high-protein diet.</strong> Ammonia is normal (the liver converts it efficiently) and urea is only slightly high because a lot of amino acids are being deaminated. High urine volume carries the extra urea out.</li>
<li><strong>Y = liver failure.</strong> Ammonia is very high and urea is low. The liver deaminates amino acids and turns ammonia into urea; a failing liver cannot make urea, so ammonia builds up. Yellow skin (jaundice) is another sign of liver failure.</li>
<li><strong>Z = kidney failure.</strong> Urea is very high but ammonia is normal. The liver is still making urea, but the kidneys cannot remove it. Little urine and swelling (fluid retention) fit.</li>
</ul>
<p><strong>2.</strong> Ammonia is toxic, especially to the brain. Without conversion to urea, it reaches the brain and disrupts how nerve cells work, causing confusion and drowsiness. Untreated, it can lead to coma.</p>
<p><strong>3.</strong> Every amino acid used for fuel is deaminated, releasing one amino group as ammonia. Less protein in the diet means fewer amino acids to deaminate, so less ammonia is produced for the damaged liver to handle.</p>
<p><strong>4.</strong> Z's liver works normally, so ammonia is converted to urea as fast as it forms. The block is at the next step: the kidneys cannot excrete urea, so urea accumulates instead.</p>
<p><strong>5.</strong> Between meals the liver keeps blood glucose up by breaking down its glycogen and by <span class="term">gluconeogenesis</span> (making new glucose from glycerol, lactate and amino acid skeletons). A failing liver stores little glycogen and cannot carry out gluconeogenesis well, so blood glucose falls when no food is coming in.</p>`,
    marks: 6
  },

  {
    id: "xb13", lesson: "2.06", level: "extend", tier: "extra",
    title: "Why fat is the better fuel tank: ATP from palmitate",
    prompt: `<p><strong>Beyond the slides.</strong> Palmitate is a 16-carbon fatty acid. In the matrix, <span class="term">β-oxidation</span> cuts it into 2-carbon acetyl groups, one at a time. Each cut produces <strong>1 NADH + 1 FADH<sub>2</sub></strong> and releases one acetyl-CoA. Before β-oxidation starts, activating the fatty acid costs the equivalent of <strong>2 ATP</strong>.</p>
<ol>
<li>How many acetyl-CoA does one palmitate make, and how many cuts are needed? (Careful: they are not the same number.)</li>
<li>Using class values, calculate the maximum ATP from one palmitate.</li>
<li>Compare ATP per carbon atom for palmitate and glucose (38 ATP). Explain why fat gives more, in terms of electrons.</li>
<li>Repeat part 2 with modern values (NADH ≈ 2.5, FADH<sub>2</sub> ≈ 1.5, and 10 ATP per acetyl-CoA).</li>
<li>Give two reasons animals store most of their energy as fat rather than glycogen.</li>
</ol>`,
    hints: [
      "Cutting a 16-carbon chain into eight 2-carbon pieces takes 7 cuts: the last cut leaves two acetyl-CoA.",
      "Each acetyl-CoA through one Krebs turn gives 3 NADH + 1 FADH<sub>2</sub> + 1 ATP = 12 ATP with class values. Then add the 7 NADH and 7 FADH<sub>2</sub> from the cuts and subtract 2."
    ],
    answer: `<p><strong>1.</strong> 16 carbons ÷ 2 = <strong>8 acetyl-CoA</strong>. Only <strong>7 cuts</strong> are needed, because the final cut splits a 4-carbon piece into two acetyl-CoA. So β-oxidation gives 7 NADH and 7 FADH<sub>2</sub>.</p>
<p><strong>2. Class values.</strong></p>
<ul>
<li>Each acetyl-CoA in the Krebs cycle: 3 NADH (9) + 1 FADH<sub>2</sub> (2) + 1 ATP = 12 ATP. 8 × 12 = <strong>96</strong></li>
<li>β-oxidation: 7 NADH × 3 = 21; 7 FADH<sub>2</sub> × 2 = 14. Subtotal <strong>35</strong></li>
<li>Activation: <strong>−2</strong></li>
</ul>
<div class="eq">96 + 35 − 2 = 129 ATP per palmitate</div>
<p><strong>3. Per carbon.</strong> Palmitate: 129 ÷ 16 ≈ <strong>8.1 ATP per carbon</strong>. Glucose: 38 ÷ 6 ≈ <strong>6.3 ATP per carbon</strong>. A fatty acid is almost entirely C–H bonds with very little oxygen, so it is more <em>reduced</em>. It has more high-energy electrons to give to NAD<sup>+</sup> and FAD. Glucose already has an oxygen on almost every carbon, so it is partly oxidized before it starts.</p>
<p><strong>4. Modern values.</strong> 8 acetyl-CoA × 10 = 80; 7 NADH × 2.5 = 17.5; 7 FADH<sub>2</sub> × 1.5 = 10.5; minus 2.</p>
<div class="eq">80 + 17.5 + 10.5 − 2 = 106 ATP per palmitate</div>
<p><strong>5. Why store fat.</strong></p>
<ul>
<li>Fat releases about twice as much energy per gram as carbohydrate (about 9 vs 4 kcal/g), because it is more reduced.</li>
<li>Glycogen attracts water and is stored with several times its own mass of water. Fat is stored almost dry. Storing the same energy as glycogen would add a lot of extra body mass.</li>
<li>Fat also insulates and cushions organs.</li>
</ul>
<p>The trade-off: glycogen can be broken down much faster, which is why it is used first and why sprinting depends on it.</p>`,
    marks: 7
  },

  {
    id: "xb14", lesson: "2.06", level: "extend", tier: "extra",
    title: "Ketone bodies: the brain's fasting fuel",
    prompt: `<p><strong>Beyond the slides.</strong> After about three days without food, the liver starts releasing <span class="term">ketone bodies</span> (acetoacetate, β-hydroxybutyrate, and some acetone, which gives the breath a fruity smell). The brain cannot use fatty acids directly, but after a few days it can get much of its energy from ketone bodies. The same process runs out of control in untreated type 1 diabetes, causing <span class="term">diabetic ketoacidosis</span>.</p>
<ol>
<li>The body can make glucose from glycerol but not from fatty acids. Explain why.</li>
<li>During fasting, the liver uses its oxaloacetate to make glucose. Predict what happens to the acetyl-CoA coming from β-oxidation, and connect this to ketone formation.</li>
<li>Explain how switching the brain to ketone bodies helps protect muscle protein.</li>
<li>In type 1 diabetes without insulin, glucose cannot enter muscle and fat cells, even when blood glucose is very high. Explain why ketone levels rise, why blood pH falls, and why the patient breathes deeply and quickly.</li>
</ol>`,
    hints: [
      "Glycerol becomes DHAP, a glycolysis intermediate. Fatty acids become acetyl-CoA. Can acetyl-CoA be turned back into pyruvate?",
      "Acetyl-CoA can only enter the Krebs cycle by joining oxaloacetate. If oxaloacetate is scarce, acetyl-CoA builds up and the liver packages it into something it can export."
    ],
    answer: `<p><strong>1.</strong> Glycerol is converted to DHAP, a glycolysis intermediate, so the liver can run the pathway in reverse (gluconeogenesis) and build glucose. Fatty acids are broken into acetyl-CoA. The PDH step cannot run backwards, so acetyl-CoA can never become pyruvate. In the Krebs cycle its 2 carbons are matched by 2 CO<sub>2</sub> released, so there is no net carbon left to build glucose. Glycerol is only a small part (3 of about 50 carbons) of a fat molecule, so fat is a poor source of new glucose.</p>
<p><strong>2.</strong> Acetyl-CoA enters the Krebs cycle by combining with oxaloacetate to form citrate. If oxaloacetate is used up making glucose, acetyl-CoA from β-oxidation cannot enter the cycle and builds up. The liver joins pairs of acetyl groups into ketone bodies and releases them into the blood. Other tissues take them up and convert them back into acetyl-CoA to run their own Krebs cycles.</p>
<p><strong>3.</strong> The brain normally needs a lot of glucose. In a fast, much of that glucose comes from gluconeogenesis using amino acids from broken-down muscle protein. When the brain switches to ketone bodies, it needs much less glucose, so fewer amino acids are needed, and muscle protein (including heart muscle) is preserved for longer.</p>
<p><strong>4.</strong> Without insulin, cells cannot take in glucose, so the body behaves as if it is starving even though blood glucose is high. Fat is broken down very fast, flooding the liver with acetyl-CoA, and ketone production goes far above what tissues can use. Acetoacetate and β-hydroxybutyrate are acids, so they lower blood pH (ketoacidosis). The brain's breathing centre detects the acid and drives deep, rapid breathing to blow off CO<sub>2</sub> and reduce the acid load. Acetone on the breath smells fruity. It is a medical emergency, treated with insulin and fluids.</p>`,
    marks: 6
  }

);
