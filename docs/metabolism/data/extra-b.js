window.EXTRA = window.EXTRA || [];

window.EXTRA.push({
  id: "e-glycogen",
  title: "Glycogen: storing and releasing glucose (insulin vs glucagon)",
  lesson: "2.06",
  tier: "likely",
  why: "The 2.06 notes say lipids and proteins are used \"when glycogen stores are low\" — this is what glycogen is, where it is kept, and which hormones decide when it is built or broken down.",
  html: `
<p>In class, lipid and protein catabolism kicked in "when glycogen stores are low." So what is glycogen, and who decides when it gets used? <span class="term">Glycogen</span> is the animal storage form of glucose. It is a large, highly branched polymer of glucose (plants store glucose as starch instead).</p>

<h3>Structure and where it is stored</h3>
<ul>
  <li>Long chains of glucose joined by <strong>α-1,4 glycosidic bonds</strong>, with a branch (<strong>α-1,6 bond</strong>) about every 8–12 glucose units.</li>
  <li>The branching creates many chain ends. Enzymes work only at the ends, so many ends means glucose can be added or removed very quickly.</li>
  <li>Packing thousands of glucose units into one molecule avoids the osmotic problem of free glucose. A cell full of free glucose would draw in water and swell.</li>
  <li><strong>Liver</strong> holds roughly 100 g and <strong>skeletal muscle</strong> roughly 400 g in a typical adult (approximate; varies with diet and training). That is only enough for about a day of fasting, which is why fat and protein have to step in.</li>
</ul>

<h3>Three similar-sounding words</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Process</th><th>Word parts</th><th>What happens</th><th>Triggered by</th></tr></thead>
<tbody>
<tr><td><span class="term">Glycogenesis</span></td><td>glycogen + genesis (creation)</td><td>Glucose → glycogen (storage)</td><td>Insulin (high blood glucose, after a meal)</td></tr>
<tr><td><span class="term">Glycogenolysis</span></td><td>glycogen + lysis (splitting)</td><td>Glycogen → glucose-6-phosphate (→ glucose in liver)</td><td>Glucagon (liver), epinephrine (liver and muscle)</td></tr>
<tr><td><span class="term">Gluconeogenesis</span></td><td>glucose + neo (new) + genesis</td><td>Non-carbohydrates → new glucose</td><td>Glucagon, cortisol; long fasting</td></tr>
</tbody></table></div>

<h3>Glycogenolysis: breaking it down</h3>
<ol class="steps">
  <li><p class="step-head">Glycogen phosphorylase</p><p>Snips glucose units off the chain ends using inorganic phosphate (not water), releasing <strong>glucose-1-phosphate</strong>. A separate debranching enzyme handles the α-1,6 branch points.</p></li>
  <li><p class="step-head">Phosphoglucomutase</p><p>Moves the phosphate: glucose-1-phosphate → <strong>glucose-6-phosphate (G6P)</strong>, which is the product of glycolysis step 1.</p></li>
  <li><p class="step-head">What happens to G6P depends on the tissue</p><p><strong>Muscle:</strong> G6P goes straight into glycolysis to power that muscle. <strong>Liver:</strong> the enzyme <span class="term">glucose-6-phosphatase</span> removes the phosphate, giving free glucose that leaves the cell and raises blood glucose.</p></li>
</ol>

<div class="callout key"><p class="callout-title">On the test</p><p>Muscle has no glucose-6-phosphatase. Remember from glycolysis step 1 that the phosphate traps glucose in the cell, because transporters recognize glucose, not G6P. So <strong>muscle glycogen is used only by that muscle</strong>. Only liver (and a little kidney) glycogen can top up blood glucose for the brain and red blood cells.</p></div>

<h3>Glycogenesis: building it up</h3>
<p>Glucose → G6P (hexokinase, as in glycolysis) → glucose-1-phosphate → activated as <strong>UDP-glucose</strong> (uses UTP, an energy-rich relative of ATP) → <span class="term">glycogen synthase</span> adds it to a growing chain, and a branching enzyme adds the α-1,6 branches. Building glycogen is anabolic and endergonic. It costs energy, so storage is not free.</p>

<h3>The hormone switch</h3>
<div class="compare">
  <div><h4>Insulin (fed state)</h4>
    <ul>
      <li>Made by <strong>beta (β) cells</strong> of the pancreatic islets when blood glucose rises.</li>
      <li>Muscle and fat cells take up more glucose (more GLUT4 transporters move to the membrane).</li>
      <li>Turns ON glycogenesis and fat synthesis.</li>
      <li>Turns OFF glycogenolysis and gluconeogenesis.</li>
      <li>Net effect: blood glucose goes <strong>down</strong>.</li>
    </ul>
  </div>
  <div><h4>Glucagon (fasting state)</h4>
    <ul>
      <li>Made by <strong>alpha (α) cells</strong> of the pancreatic islets when blood glucose falls.</li>
      <li>Acts mainly on the <strong>liver</strong> (muscle has no glucagon receptors).</li>
      <li>Turns ON glycogenolysis and gluconeogenesis, and releases fat from storage.</li>
      <li>Turns OFF glycogenesis.</li>
      <li>Net effect: blood glucose goes <strong>up</strong>.</li>
    </ul>
  </div>
</div>
<p>These two hormones work in a <strong>negative feedback</strong> loop that keeps fasting blood glucose at roughly 4–6 mmol/L. <strong>Epinephrine</strong> (adrenaline) also triggers glycogenolysis, in both liver <em>and</em> muscle, for fight-or-flight. In <strong>type 1 diabetes</strong> the β cells are destroyed, so no insulin is made. In <strong>type 2 diabetes</strong> cells respond poorly to insulin.</p>

<div class="callout tip"><p class="callout-title">Memory trick</p><p>Glucagon is released when glucose is <strong>gone</strong>. Insulin puts glucose <strong>in</strong> (into cells and into storage).</p></div>

<div class="callout warn"><p class="callout-title">Common mistake</p><p>Glucagon (the hormone) and glycogen (the storage polymer) are different things. Glucagon <em>causes</em> glycogen to be broken down.</p></div>

<details class="check"><summary>A marathoner's leg muscles are full of glycogen but blood glucose is falling. Why can't that muscle glycogen fix the blood glucose?</summary><div class="ans"><p>Muscle breaks glycogen down only as far as glucose-6-phosphate, and it lacks glucose-6-phosphatase to remove the phosphate. G6P cannot leave the cell, so the muscle burns it itself. Only the liver can release free glucose into the blood.</p></div></details>

<details class="check"><summary>Glycolysis from free glucose nets 2 ATP. Why does glycolysis starting from a glucose unit in glycogen net 3 ATP?</summary><div class="ans"><p>Glycogen phosphorylase uses inorganic phosphate to release glucose-1-phosphate, which becomes G6P without spending ATP. The step-1 hexokinase ATP is skipped, so the cell invests only 1 ATP (at PFK) and still makes 4: net 3. (The energy was paid earlier, when UTP was used to build the glycogen.)</p></div></details>
`
});

window.EXTRA.push({
  id: "e-gluconeogenesis",
  title: "Gluconeogenesis in depth and the Cori cycle",
  lesson: "2.06",
  tier: "likely",
  why: "Gluconeogenesis appears in the 2.02, 2.06 and 2.07 notes (fate of pyruvate, glycerol, lactate in the liver); this shows how it actually works, what it can and cannot use, and what it costs.",
  html: `
<p>In class, <span class="term">gluconeogenesis</span> (making glucose from non-carbohydrate sources) came up as a fate of pyruvate, as the route for glycerol "when really low," and as what the liver does with lactate.</p>

<h3>Why and where</h3>
<ul>
  <li>The <strong>brain</strong> burns roughly 120 g of glucose a day (approximate) and cannot run on fatty acids. <strong>Red blood cells</strong> have no mitochondria, so glucose is their only fuel.</li>
  <li>Liver glycogen runs out after about 12–24 hours of fasting. After that, almost all blood glucose must be newly made.</li>
  <li>It happens mainly in the <strong>liver</strong>, plus the <strong>kidney cortex</strong> (whose share grows in long fasts). Both have <span class="term">glucose-6-phosphatase</span> to release free glucose into the blood. Muscle does not.</li>
</ul>

<h3>Not just glycolysis in reverse</h3>
<p>Seven of the ten glycolysis steps are easily reversible, and gluconeogenesis uses the same enzymes for them. Three steps release so much free energy that they are effectively one-way. Gluconeogenesis goes around them with different enzymes:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Glycolysis step (one-way)</th><th>Gluconeogenesis bypass</th><th>Energy cost</th></tr></thead>
<tbody>
<tr><td>10: PEP → pyruvate (pyruvate kinase)</td><td>Pyruvate → oxaloacetate (<strong>pyruvate carboxylase</strong>, in mitochondria), then oxaloacetate → PEP (<strong>PEP carboxykinase</strong>)</td><td>1 ATP + 1 GTP per pyruvate</td></tr>
<tr><td>3: F6P → F1,6BP (PFK)</td><td>F1,6BP → F6P (<strong>fructose-1,6-bisphosphatase</strong>)</td><td>none (phosphate removed by hydrolysis)</td></tr>
<tr><td>1: glucose → G6P (hexokinase)</td><td>G6P → glucose (<strong>glucose-6-phosphatase</strong>)</td><td>none</td></tr>
</tbody></table></div>
<p>The reversible steps are not all free either. Running step 7 backwards (same enzyme, phosphoglycerate kinase) uses 1 ATP per 3-carbon unit, and running step 6 backwards uses 1 NADH.</p>
<div class="eq">2 pyruvate + 4 ATP + 2 GTP + 2 NADH → glucose + 4 ADP + 2 GDP + 6 P<sub>i</sub> + 2 NAD<sup>+</sup></div>
<p>So making one glucose costs <strong>6 high-energy phosphates</strong> (4 ATP + 2 GTP), while glycolysis gives back only 2 ATP. The two pathways are regulated <strong>reciprocally</strong> (when PFK is on, fructose-1,6-bisphosphatase is off) so the cell never runs both at once and wastes ATP.</p>

<div class="callout tip"><p class="callout-title">Link to regulation (2.05)</p><p>Acetyl-CoA <em>inhibits</em> PDH (from class) and, in the liver, <em>activates</em> pyruvate carboxylase. Plenty of acetyl-CoA (often from burning fat) means pyruvate is not needed for energy, so it is sent toward glucose instead.</p></div>

<h3>Substrates: what can and cannot become glucose</h3>
<ul>
  <li><strong>Lactate</strong> → pyruvate (lactate dehydrogenase, running in reverse) → glucose. This is the Cori cycle below.</li>
  <li><strong>Glycerol</strong> (from triglycerides) → DHAP → G3P → glucose. This matches the class note: glycerol → glucose when glucose is really low.</li>
  <li><strong>Glucogenic amino acids</strong> (especially alanine from muscle) → pyruvate or Krebs intermediates → oxaloacetate → glucose.</li>
  <li><strong>NOT fatty acids</strong> (the even-numbered ones that make up most body fat). They become acetyl-CoA, and acetyl-CoA cannot become glucose.</li>
</ul>

<div class="callout key"><p class="callout-title">On the test: why fatty acids cannot make glucose</p><p>(1) The PDH step (pyruvate → acetyl-CoA) is irreversible, so acetyl-CoA can never go back to pyruvate. (2) If acetyl-CoA enters the Krebs cycle, its 2 carbons in are matched by 2 CO<sub>2</sub> out before oxaloacetate is regenerated. There is no net gain of oxaloacetate to pull off for glucose. Only the small <strong>glycerol</strong> part of a fat is glucogenic. (Minor exceptions: odd-chain fatty acids, and plants and bacteria, which have an extra pathway called the glyoxylate cycle.)</p></div>

<h3>The Cori cycle</h3>
<ol class="steps">
  <li><p class="step-head">Working muscle (low O<sub>2</sub>)</p><p>Glucose → 2 pyruvate → 2 lactate by lactic acid fermentation. Gain: <strong>2 ATP</strong>, and NAD<sup>+</sup> is regenerated.</p></li>
  <li><p class="step-head">Blood</p><p>Lactate leaves the muscle and travels to the liver.</p></li>
  <li><p class="step-head">Liver (aerobic)</p><p>2 lactate → 2 pyruvate → 1 glucose by gluconeogenesis. Cost: <strong>6 ATP equivalents</strong>, paid with ATP from the liver's own aerobic respiration (mostly from burning fatty acids).</p></li>
  <li><p class="step-head">Back to muscle</p><p>The new glucose returns through the blood to fuel more glycolysis.</p></li>
</ol>
<div class="eq">Net cost of one turn = 6 ATP spent (liver) − 2 ATP made (muscle) = <strong>4 ATP lost</strong></div>
<p>So why bother? The cycle moves the expensive work to the well-oxygenated liver, letting the muscle keep making fast ATP anaerobically. Paying back this cost is one reason you keep breathing hard after exercise. A similar loop, the <strong>glucose–alanine cycle</strong>, sends alanine instead, which also carries nitrogen to the liver to become urea.</p>

<details class="check"><summary>A student says, "During a fast, the body turns its fat stores into glucose for the brain." What is right and wrong about this?</summary><div class="ans"><p>Partly right: the <strong>glycerol</strong> backbone of triglycerides can become glucose. Wrong for the <strong>fatty acids</strong>, which make up most of a fat's mass. They become acetyl-CoA, which cannot be converted to glucose because the PDH step is irreversible and the Krebs cycle gives no net oxaloacetate. The brain is instead partly fed by ketone bodies made from fatty acids.</p></div></details>

<details class="check"><summary>Why is the Cori cycle a net energy loss, and why is it still worth it?</summary><div class="ans"><p>Muscle gains 2 ATP per glucose; the liver spends 6 to rebuild it from 2 lactate, a net loss of 4. It is worth it because the muscle gets fast ATP without waiting for O<sub>2</sub>, the lactate is recycled rather than wasted, and the oxygen-rich liver pays.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-beta-ox",
  title: "β-oxidation in depth and fat energy math",
  lesson: "2.06",
  tier: "extra",
  why: "Class said fatty acids go through β-oxidation to make acetyl-CoA; working out the ATP from one fatty acid uses the same NADH and FADH2 accounting as glucose and explains why fat stores so much energy.",
  html: `
<p>In class: lipids → glycerol + fatty acids, and fatty acids → <span class="term">β-oxidation</span> → acetyl-CoA → Krebs. Here is what happens inside β-oxidation, and how to count the ATP.</p>

<h3>Getting ready</h3>
<ol class="steps">
  <li><p class="step-head">Activation (cytosol side)</p><p>The fatty acid is joined to coenzyme A, giving <strong>fatty acyl-CoA</strong>. This uses one ATP, which is broken all the way to AMP + 2 P<sub>i</sub>, so it costs <strong>2 ATP equivalents</strong>. It is paid once per fatty acid, no matter how long the chain is.</p></li>
  <li><p class="step-head">Transport into the matrix</p><p>The acyl group is carried across the inner membrane by a carrier molecule called carnitine (the "carnitine shuttle"). β-oxidation happens in the <strong>mitochondrial matrix</strong>, the same place as the Krebs cycle.</p></li>
</ol>

<h3>One round of β-oxidation (4 steps)</h3>
<ol class="steps">
  <li><p class="step-head">Oxidation</p><p>FAD → <strong>FADH<sub>2</sub></strong> (a C=C double bond forms).</p></li>
  <li><p class="step-head">Hydration</p><p>H<sub>2</sub>O is added across the double bond.</p></li>
  <li><p class="step-head">Oxidation</p><p>NAD<sup>+</sup> → <strong>NADH</strong>. The β-carbon (carbon 3) now has a C=O. This carbon gives the pathway its name.</p></li>
  <li><p class="step-head">Thiolysis (cleavage)</p><p>A new CoA cuts between the α and β carbons, releasing <strong>1 acetyl-CoA</strong>. The chain is now 2 carbons shorter and goes through the loop again.</p></li>
</ol>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Oxidize (FAD), hydrate, oxidize (NAD<sup>+</sup>) is the same pattern as the end of the Krebs cycle: succinate → fumarate (FADH<sub>2</sub>) → malate (+H<sub>2</sub>O) → oxaloacetate (NADH). Learn it once, use it twice.</p></div>

<h3>Palmitate: the standard example (16 carbons)</h3>
<p>A 16-C chain makes 8 acetyl-CoA, but it takes only <strong>7 rounds</strong>, because the last round splits a 4-C piece into two acetyl-CoA. For any even-numbered saturated chain with n carbons: n/2 acetyl-CoA, (n/2 − 1) rounds, and one NADH and one FADH<sub>2</sub> per round.</p>
<div class="tally"><span class="chip">8 acetyl-CoA</span><span class="chip nadh">7 NADH</span><span class="chip fadh">7 FADH<sub>2</sub></span></div>

<div class="table-wrap"><table class="data">
<thead><tr><th>Source</th><th>Class values (NADH ≈ 3, FADH<sub>2</sub> ≈ 2)</th><th>Modern values (NADH ≈ 2.5, FADH<sub>2</sub> ≈ 1.5)</th></tr></thead>
<tbody>
<tr><td>8 acetyl-CoA through Krebs (each: 3 NADH, 1 FADH<sub>2</sub>, 1 ATP)</td><td>8 × 12 = 96</td><td>8 × 10 = 80</td></tr>
<tr><td>7 NADH from β-oxidation</td><td>7 × 3 = 21</td><td>7 × 2.5 = 17.5</td></tr>
<tr><td>7 FADH<sub>2</sub> from β-oxidation</td><td>7 × 2 = 14</td><td>7 × 1.5 = 10.5</td></tr>
<tr><td>Activation</td><td>−2</td><td>−2</td></tr>
<tr><td><strong>Net per palmitate</strong></td><td><strong>≈ 129 ATP</strong></td><td><strong>≈ 106 ATP</strong></td></tr>
</tbody></table></div>
<p>Both totals are theoretical maximums, like 36–38 for glucose. Use whichever convention your test asks for, and show the per-carrier values you used.</p>

<h3>Why fat ≈ 9 kcal/g but carbohydrate ≈ 4 kcal/g</h3>
<ul>
  <li><strong>Fat is more reduced.</strong> Palmitate is C<sub>16</sub>H<sub>32</sub>O<sub>2</sub> (1 O for every 8 C), while glucose is C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (1 O per C). Glucose is already partly oxidized. Fat's many C–H bonds have more high-energy electrons to give to NAD<sup>+</sup> and FAD.</li>
  <li><strong>Per gram:</strong> palmitate (256 g/mol) gives about 129 ÷ 256 ≈ 0.50 ATP per gram (class values); glucose (180 g/mol) gives about 38 ÷ 180 ≈ 0.21. That is roughly 2.4 times more, which matches 9 vs 4 kcal/g.</li>
  <li><strong>Storage bonus:</strong> fat is stored without water, but each gram of glycogen holds about 3 g of water. Per gram of actual body weight, fat stores several times more energy. A typical adult carries around 100 000 kcal as fat vs about 2 000 kcal as glycogen (rough figures).</li>
</ul>

<div class="callout warn"><p class="callout-title">Common mistake</p><p>Fat can only be "burned" aerobically. β-oxidation makes no ATP directly. All of its payoff comes through NADH and FADH<sub>2</sub> in the ETC, which needs O<sub>2</sub> to recycle the carriers. It is also slower and gives fewer ATP per O<sub>2</sub> than glucose (about 5.6 vs 6.3 with class values). That is why sprints and high-intensity work rely on carbohydrate.</p></div>

<details class="check"><summary>Stearic acid has 18 carbons. How many rounds of β-oxidation, and how many acetyl-CoA, NADH and FADH<sub>2</sub>? What is the net ATP using class values?</summary><div class="ans"><p>8 rounds → 9 acetyl-CoA, 8 NADH, 8 FADH<sub>2</sub>. Class values: 9 × 12 = 108, plus 8 × 3 = 24, plus 8 × 2 = 16, minus 2 for activation = <strong>146 ATP</strong>. (Modern values: 90 + 20 + 12 − 2 = 120.)</p></div></details>

<details class="check"><summary>Why does a fatty acid with 16 carbons produce more ATP than 16 ÷ 6 ≈ 2.7 glucose molecules would?</summary><div class="ans"><p>Per carbon, the fatty acid is more reduced (more C–H bonds, almost no oxygen), so each carbon carries more electrons into the ETC. 2.7 glucose would give about 2.7 × 38 ≈ 101 ATP (class values), less than palmitate's 129.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-ketones",
  title: "Ketone bodies: fasting, starvation, diabetes and keto diets",
  lesson: "2.06",
  tier: "extra",
  why: "When fat is the main fuel, acetyl-CoA can pile up faster than the Krebs cycle can take it; ketone bodies are the result, and they explain fasting, diabetic ketoacidosis and keto diets.",
  html: `
<p>Class order of fuel use: carbohydrates → lipids → proteins. But there is a catch in the middle step. Acetyl-CoA from fat can only enter the Krebs cycle by combining with <strong>oxaloacetate</strong> to make citrate. When oxaloacetate runs short, acetyl-CoA backs up, and the liver turns the excess into <span class="term">ketone bodies</span>.</p>

<h3>Why acetyl-CoA piles up</h3>
<ol class="steps">
  <li><p class="step-head">Lots of acetyl-CoA coming in</p><p>Low insulin and high glucagon release fatty acids from fat tissue. The liver runs β-oxidation at high speed and makes far more acetyl-CoA than usual.</p></li>
  <li><p class="step-head">Oxaloacetate is pulled away</p><p>The same liver is doing <strong>gluconeogenesis</strong> to keep blood glucose up, and gluconeogenesis uses oxaloacetate (oxaloacetate → PEP → glucose). Oxaloacetate drawn off for glucose is not available to accept acetyl-CoA.</p></li>
  <li><p class="step-head">The cycle bottlenecks</p><p>β-oxidation also produces lots of NADH, which shifts malate ⇌ oxaloacetate toward malate, lowering oxaloacetate even more. Acetyl-CoA has nowhere to go.</p></li>
  <li><p class="step-head">Ketogenesis</p><p>Liver mitochondria join acetyl-CoA molecules into ketone bodies and release them into the blood. This also frees up CoA so β-oxidation can continue.</p></li>
</ol>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>"Fats burn in the flame of carbohydrates." Fat oxidation runs smoothly only while carbohydrate keeps oxaloacetate stocked.</p></div>

<h3>The three ketone bodies</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Ketone body</th><th>Notes</th></tr></thead>
<tbody>
<tr><td><strong>Acetoacetate</strong></td><td>Made first, from 2 acetyl-CoA (4 carbons). An acid.</td></tr>
<tr><td><strong>β-hydroxybutyrate</strong></td><td>Acetoacetate reduced by NADH. The main ketone body in the blood. Also an acid. (Strictly not a ketone at all, but it is still counted as a "ketone body.")</td></tr>
<tr><td><strong>Acetone</strong></td><td>Forms when acetoacetate spontaneously loses CO<sub>2</sub>. Not used as fuel. Breathed out, giving a fruity or nail-polish smell.</td></tr>
</tbody></table></div>

<h3>Who uses them</h3>
<p>The liver makes ketone bodies but <strong>cannot use them</strong>, because it lacks one enzyme needed to turn them back into acetyl-CoA. They travel in the blood to the heart, skeletal muscle, kidney and, after a few days of fasting, the <strong>brain</strong>. There they are converted back to acetyl-CoA and oxidized in the Krebs cycle. The brain cannot burn fatty acids directly, so ketones let it run partly on fat. In prolonged starvation, ketones can supply well over half of the brain's energy (approximate). Red blood cells still cannot use them (no mitochondria).</p>

<h3>Fasting timeline (approximate)</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Time without food</th><th>Main glucose source</th><th>What changes</th></tr></thead>
<tbody>
<tr><td>Hours after a meal</td><td>Absorbed food, then liver glycogen</td><td>Insulin falls, glucagon rises</td></tr>
<tr><td>~1 day</td><td>Gluconeogenesis takes over</td><td>Liver glycogen nearly gone. Muscle protein broken down for amino acids.</td></tr>
<tr><td>Several days</td><td>Gluconeogenesis (less needed)</td><td>Ketones high. Brain switches partly to ketones, which <strong>spares muscle protein</strong>.</td></tr>
<tr><td>Weeks (fat exhausted)</td><td>Protein</td><td>Rapid protein breakdown, including heart muscle. Life-threatening. This matches the class note that protein use means "severe fasting."</td></tr>
</tbody></table></div>

<h3>Type 1 diabetes: diabetic ketoacidosis (DKA)</h3>
<p>In type 1 diabetes the pancreas makes no insulin. Without insulin, muscle and fat cells cannot take up glucose well, and glucagon acts unopposed. The liver behaves as if the body is starving: it releases glucose, breaks down fat, and makes ketones, all with no "off" switch. The result is <strong>very high blood glucose AND very high ketones</strong> at the same time, sometimes called "starvation in the midst of plenty."</p>
<p>Acetoacetate and β-hydroxybutyrate are acids. At high levels they release enough H<sup>+</sup> to drop blood pH (<span class="term">acidosis</span>). Signs: extreme thirst and urination, nausea and vomiting, fruity (acetone) breath, and deep, rapid breathing as the body blows off CO<sub>2</sub> to raise pH. DKA is a medical emergency, treated with insulin, fluids and electrolytes.</p>

<h3>Keto diets: ketosis is not ketoacidosis</h3>
<p>A very low-carbohydrate ("keto") diet lowers insulin, so the liver makes ketones and the body runs mostly on fat. In someone who still produces insulin, a little insulin is released as ketones rise, which caps production (<strong>negative feedback</strong>). Blood ketones usually stay below about 3 mmol/L, and pH stays normal (rough figures). DKA levels climb much higher because that brake is missing.</p>

<details class="check"><summary>During a long fast, why does acetyl-CoA build up in liver mitochondria even though the Krebs cycle enzymes are present?</summary><div class="ans"><p>Acetyl-CoA can enter Krebs only by combining with oxaloacetate. The fasting liver diverts oxaloacetate into gluconeogenesis, and high NADH from β-oxidation shifts malate ⇌ oxaloacetate toward malate. With little oxaloacetate, acetyl-CoA from β-oxidation accumulates and is turned into ketone bodies.</p></div></details>

<details class="check"><summary>Why can a person with untreated type 1 diabetes have both high blood glucose and ketoacidosis?</summary><div class="ans"><p>Without insulin, cells cannot take in glucose well, so it stays in the blood, while unopposed glucagon drives fat breakdown and ketone production as if the body were starving. Nothing turns ketogenesis off, so acidic ketone bodies build up and lower blood pH.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-amino-acids",
  title: "Amino acid catabolism: transamination, deamination and the urea cycle",
  lesson: "2.06",
  tier: "extra",
  why: "Class covered deamination in the liver and carbon skeletons entering at pyruvate, acetyl-CoA or Krebs; this fills in how the nitrogen is actually removed, why ammonia is so dangerous, and which amino acids can become glucose.",
  html: `
<p>In class: proteins → amino acids (hydrolysis) → <strong>deamination</strong> in the liver, giving ammonia (waste) plus a carbon skeleton that enters respiration at pyruvate, acetyl-CoA or a Krebs intermediate. The body has <strong>no storage form</strong> for amino acids (nothing like glycogen or fat). Extra dietary amino acids are broken down, and in a long fast body protein is broken down too.</p>

<h3>Step 1: getting the nitrogen off</h3>
<p>The class word "deamination" covers two linked reactions.</p>
<div class="compare">
  <div><h4>Transamination</h4>
    <ul>
      <li>The amino group is <strong>transferred</strong> from an amino acid to an α-keto acid, usually <strong>α-ketoglutarate</strong>, which becomes <strong>glutamate</strong>.</li>
      <li>Enzymes: aminotransferases (transaminases), which need vitamin B6.</li>
      <li><strong>No free ammonia</strong> is released. Reversible, so it also makes non-essential amino acids.</li>
      <li>Happens in many tissues.</li>
    </ul>
  </div>
  <div><h4>Oxidative deamination</h4>
    <ul>
      <li>The amino group is <strong>removed</strong> from glutamate as ammonium (NH<sub>4</sub><sup>+</sup>), regenerating α-ketoglutarate.</li>
      <li>Enzyme: glutamate dehydrogenase. It is a redox step (NAD<sup>+</sup> → NADH).</li>
      <li><strong>Releases free ammonia</strong>, so it is kept mostly in the liver, right next to the urea cycle.</li>
    </ul>
  </div>
</div>
<div class="eq">alanine + α-ketoglutarate ⇌ pyruvate + glutamate (transamination)</div>
<div class="eq">glutamate + NAD<sup>+</sup> + H<sub>2</sub>O → α-ketoglutarate + NH<sub>4</sub><sup>+</sup> + NADH (deamination)</div>
<p>Think of glutamate as a collection bin: transamination funnels amino groups from many amino acids onto glutamate, and deamination empties the bin in the liver. Doctors measure two transaminases (ALT and AST) in blood tests, because damaged liver cells leak them.</p>

<h3>Why ammonia is so toxic</h3>
<p>Ammonia (NH<sub>3</sub>, mostly NH<sub>4</sub><sup>+</sup> at body pH) is dangerous at low concentrations, especially to the brain. One reason links back to Krebs: brain cells mop up ammonia by attaching it to α-ketoglutarate (making glutamate) and then to glutamate (making glutamine). This drains <strong>α-ketoglutarate out of the Krebs cycle</strong>, slowing ATP production. The resulting glutamine also makes brain support cells swell. In liver failure, ammonia builds up and causes confusion and coma (hepatic encephalopathy).</p>

<h3>The urea cycle (liver)</h3>
<p>The liver converts ammonia into <span class="term">urea</span>, CO(NH<sub>2</sub>)<sub>2</sub>, which is far less toxic and water-soluble. Blood carries it to the kidneys to be excreted in urine.</p>
<ol class="steps">
  <li><p class="step-head">Mitochondria</p><p>NH<sub>4</sub><sup>+</sup> + CO<sub>2</sub> (+ 2 ATP) → carbamoyl phosphate, which joins <strong>ornithine</strong> to make citrulline.</p></li>
  <li><p class="step-head">Cytosol</p><p>Citrulline picks up a second nitrogen from <strong>aspartate</strong> (uses ATP), then splits into <strong>arginine</strong> + <strong>fumarate</strong>.</p></li>
  <li><p class="step-head">Release</p><p>Arginine is cut to give <strong>urea</strong> and regenerate ornithine, which goes around again. Like oxaloacetate in Krebs, ornithine is both start and end.</p></li>
</ol>
<p>Cost: about 4 high-energy phosphate bonds per urea (3 ATP, one split to AMP). The fumarate made here is a Krebs intermediate, so the two cycles are linked. The same scientist, Hans Krebs, worked out both cycles.</p>
<div class="callout tip"><p class="callout-title">Connection to other animals</p><p>Fish and many aquatic animals excrete ammonia directly (plenty of water to dilute it). Mammals make urea. Birds, reptiles and insects make <strong>uric acid</strong>, which costs more energy but saves the most water.</p></div>

<h3>Step 2: what the carbon skeletons become</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Type</th><th>Skeleton becomes</th><th>Can make glucose?</th><th>Examples</th></tr></thead>
<tbody>
<tr><td><span class="term">Glucogenic</span></td><td>Pyruvate or Krebs intermediates (α-ketoglutarate, succinyl-CoA, fumarate, oxaloacetate)</td><td>Yes, via oxaloacetate → gluconeogenesis</td><td>Alanine, glycine, glutamate, aspartate (most amino acids)</td></tr>
<tr><td><span class="term">Ketogenic</span></td><td>Acetyl-CoA or acetoacetyl-CoA</td><td>No (acetyl-CoA cannot become glucose). Can make ketone bodies or fat.</td><td><strong>Leucine</strong> and <strong>lysine</strong> (the only purely ketogenic ones)</td></tr>
<tr><td>Both</td><td>Split into both kinds of pieces</td><td>Partly</td><td>Isoleucine, phenylalanine, tyrosine, tryptophan, threonine</td></tr>
</tbody></table></div>
<div class="callout key"><p class="callout-title">On the test</p><p>The class examples line up exactly: alanine and glycine → pyruvate (glucogenic); leucine and lysine → acetyl-CoA (ketogenic); glutamate → α-ketoglutarate (glucogenic, enters Krebs directly).</p></div>

<details class="check"><summary>Which reaction releases free ammonia: transamination or oxidative deamination? Why does that matter?</summary><div class="ans"><p>Oxidative deamination (glutamate → α-ketoglutarate + NH<sub>4</sub><sup>+</sup>). Transamination only moves the amino group to another molecule. Because free ammonia is toxic, the body does most deamination in the liver, where the urea cycle can immediately convert it to urea.</p></div></details>

<details class="check"><summary>During starvation, can leucine from broken-down muscle help keep blood glucose up? Explain.</summary><div class="ans"><p>No. Leucine is purely ketogenic: its skeleton becomes acetyl-CoA (and acetoacetyl-CoA). Acetyl-CoA cannot be converted to pyruvate or give a net gain of oxaloacetate, so it cannot feed gluconeogenesis. It can be oxidized for ATP or made into ketone bodies.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-anaerobic-resp",
  title: "Anaerobic respiration is not the same as fermentation",
  lesson: "2.07",
  tier: "likely",
  why: "The 2.07 lesson is titled \"Anaerobic Respiration: Fermentation,\" but biologists separate the two; knowing the difference, plus how organisms are classified by O2 use, is a common test and lab question.",
  html: `
<p>The 2.07 lesson title uses the two terms together, and many Grade 12 resources use "anaerobic respiration" loosely to mean fermentation. Strictly, they are different processes. The difference is <strong>whether an electron transport chain is used</strong>.</p>

<h3>Three ways to deal with glucose's electrons</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Aerobic respiration</th><th>Anaerobic respiration</th><th>Fermentation</th></tr></thead>
<tbody>
<tr><td>Final electron acceptor</td><td>O<sub>2</sub> → H<sub>2</sub>O</td><td>An <strong>inorganic</strong> molecule other than O<sub>2</sub> (NO<sub>3</sub><sup>−</sup>, SO<sub>4</sub><sup>2−</sup>, CO<sub>2</sub>, Fe<sup>3+</sup>)</td><td>An <strong>organic</strong> molecule made from glucose (pyruvate → lactate, or acetaldehyde → ethanol)</td></tr>
<tr><td>ETC + chemiosmosis?</td><td>Yes</td><td>Yes</td><td><strong>No</strong></td></tr>
<tr><td>How ATP is made</td><td>Substrate-level + oxidative phosphorylation</td><td>Substrate-level + oxidative phosphorylation</td><td>Substrate-level only (glycolysis)</td></tr>
<tr><td>ATP per glucose</td><td>36–38 (class); ~30–32 realistic</td><td>Less than aerobic; varies with acceptor</td><td>2</td></tr>
<tr><td>Who</td><td>Most eukaryotes, many prokaryotes</td><td>Only some bacteria and archaea</td><td>Yeast, muscle cells, many bacteria</td></tr>
</tbody></table></div>

<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Anaerobic" just means "without O<sub>2</sub>." Fermentation is anaerobic, but it is <em>not</em> respiration in the strict sense because there is no ETC. Your muscle cells and yeast <strong>never</strong> do true anaerobic respiration. Only certain prokaryotes do.</p></div>

<h3>Examples of other final electron acceptors</h3>
<ul>
  <li><strong>Nitrate (NO<sub>3</sub><sup>−</sup>)</strong>: denitrifying soil bacteria reduce it step by step to N<sub>2</sub> gas. This is the denitrification step of the nitrogen cycle, and why waterlogged soil loses nitrogen fertilizer.</li>
  <li><strong>Sulfate (SO<sub>4</sub><sup>2−</sup>)</strong>: sulfate-reducing bacteria make hydrogen sulfide (H<sub>2</sub>S), the rotten-egg smell and black colour of marsh mud.</li>
  <li><strong>Carbon dioxide (CO<sub>2</sub>)</strong>: methanogens (archaea) reduce it to methane (CH<sub>4</sub>) in wetlands, landfills and cow stomachs.</li>
  <li><strong>Iron (Fe<sup>3+</sup>)</strong>: some bacteria "breathe" iron minerals, reducing Fe<sup>3+</sup> to Fe<sup>2+</sup>.</li>
</ul>
<p><strong>Why less ATP?</strong> In class, the ETC carriers are arranged by increasing electronegativity, and O<sub>2</sub> is the strongest electron "puller" at the end. These other acceptors pull electrons less strongly, so the electrons fall a smaller energy distance. Less energy is released, fewer H<sup>+</sup> are pumped, and less ATP is made.</p>

<h3>Classifying organisms by oxygen use</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Category</th><th>Relationship to O<sub>2</sub></th><th>Examples</th></tr></thead>
<tbody>
<tr><td><span class="term">Obligate aerobe</span></td><td>Must have O<sub>2</sub></td><td>Humans (as whole organisms), <em>Mycobacterium tuberculosis</em></td></tr>
<tr><td><span class="term">Obligate anaerobe</span></td><td>Cannot use O<sub>2</sub>; it is toxic to them because they lack enzymes to destroy reactive oxygen species</td><td><em>Clostridium</em> (botulism in badly canned food, tetanus in deep puncture wounds), methanogens</td></tr>
<tr><td><span class="term">Facultative anaerobe</span></td><td>Uses O<sub>2</sub> when present; switches to fermentation or anaerobic respiration without it</td><td>Yeast (<em>Saccharomyces</em>), <em>E. coli</em></td></tr>
<tr><td>Aerotolerant anaerobe</td><td>Only ferments, but O<sub>2</sub> does not harm it</td><td>Lactic acid bacteria (yogurt, sauerkraut)</td></tr>
</tbody></table></div>

<h3>The Pasteur effect</h3>
<p>Louis Pasteur noticed that when yeast growing without air is given O<sub>2</sub>, it <strong>uses glucose much more slowly</strong> and ethanol production drops. This is the <span class="term">Pasteur effect</span>. Aerobic respiration gives up to about 19 times more ATP per glucose (38 vs 2, class values), so the cell needs far less glucose to meet the same ATP demand. The mechanism is the regulation from 2.05: aerobic respiration raises ATP and citrate, which <strong>inhibit PFK</strong> and slow glycolysis. Without O<sub>2</sub>, ATP falls, ADP/AMP rise, and PFK speeds glycolysis up.</p>
<p>Relevant to the yeast fermentation assignment: baker's and brewer's yeast still ferment even with some O<sub>2</sub> present if sugar is very plentiful (the Crabtree effect). That is one reason dough and fermenting juice make CO<sub>2</sub> and ethanol without strictly airless conditions.</p>

<h3>The Warburg effect (brief)</h3>
<p>In the 1920s, Otto Warburg found that many cancer cells take up huge amounts of glucose and turn most of it into lactate <strong>even when O<sub>2</sub> is available</strong> ("aerobic glycolysis"). Their mitochondria usually still work. Fast glycolysis gives quick ATP and supplies carbon building blocks for rapidly dividing cells. PET scans use this: patients get a radioactive glucose look-alike (FDG) that hexokinase phosphorylates and traps inside cells (just like glycolysis step 1), so glucose-hungry tumours light up.</p>

<details class="check"><summary>Is yeast making ethanol in a sealed bread dough doing anaerobic respiration? Use the strict definition.</summary><div class="ans"><p>No. It is fermentation. Yeast uses only glycolysis for ATP and regenerates NAD<sup>+</sup> by reducing acetaldehyde (an organic molecule) to ethanol. No ETC is involved. Anaerobic respiration requires an ETC with an inorganic final acceptor other than O<sub>2</sub>.</p></div></details>

<details class="check"><summary>A facultative anaerobe is moved from an anaerobic flask into an aerated one. Predict what happens to its glucose consumption, and explain using PFK.</summary><div class="ans"><p>Glucose consumption drops (Pasteur effect). With O<sub>2</sub>, each glucose yields far more ATP through the ETC, so ATP and citrate levels rise. Both inhibit PFK, slowing glycolysis, so less glucose is needed.</p></div></details>
`
});

window.EXTRA.push({
  id: "e-mitochondria",
  title: "Mitochondria beyond the slides: origins, inheritance, numbers and ROS",
  lesson: "2.02",
  tier: "likely",
  why: "The slides show mitochondrial structure; this adds where mitochondria came from, why you inherit them from your mother, why cell types differ so much in how many they have, and the harmful by-products of the ETC.",
  html: `
<p>In class: smooth outer membrane, highly folded inner membrane (cristae), fluid-filled intermembrane space, and a protein-rich matrix. That structure makes more sense once you know mitochondria were once free-living bacteria.</p>

<h3>Endosymbiotic theory</h3>
<p>The <span class="term">endosymbiotic theory</span> (championed by Lynn Margulis in the 1960s) says an ancestral host cell engulfed an aerobic bacterium, roughly 1.5–2 billion years ago (estimates vary). Instead of being digested, the bacterium survived inside and supplied ATP. Over time it became the mitochondrion. Chloroplasts arose the same way from a photosynthetic cyanobacterium.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Evidence</th><th>What it shows</th></tr></thead>
<tbody>
<tr><td><strong>Double membrane</strong></td><td>The inner membrane resembles a bacterial plasma membrane (it even contains cardiolipin, a lipid typical of bacteria). The outer membrane fits the host's engulfing membrane.</td></tr>
<tr><td><strong>Own DNA</strong></td><td>A small, circular chromosome like a bacterium's, not linear chromosomes wrapped in histones like the nucleus.</td></tr>
<tr><td><strong>Own ribosomes</strong></td><td>Smaller, bacteria-like ribosomes. Some antibiotics that target bacterial ribosomes can also affect mitochondria, causing side effects.</td></tr>
<tr><td><strong>Division</strong></td><td>Mitochondria divide by a fission process like bacteria. A cell cannot build one from scratch.</td></tr>
<tr><td><strong>Size and DNA sequence</strong></td><td>Bacterium-sized. Their genes are most similar to a group of modern bacteria (α-proteobacteria).</td></tr>
<tr><td><strong>ETC location</strong></td><td>Bacteria run their ETC in their plasma membrane; mitochondria run it in the inner membrane, the "old" bacterial membrane.</td></tr>
</tbody></table></div>
<p>Most of the original bacterial genes moved to the nucleus over time. Human mitochondrial DNA (mtDNA) has only 37 genes, including 13 proteins that are all parts of the ETC or ATP synthase. Over 1000 other mitochondrial proteins are encoded in the nucleus and imported.</p>

<h3>Maternal inheritance and mitochondrial disease</h3>
<p>An egg contains a very large number of mtDNA copies (on the order of hundreds of thousands). The few sperm mitochondria (in the midpiece) that enter the egg are tagged and destroyed. So, almost always, <strong>you inherit your mtDNA only from your mother</strong>. Because it is passed down without mixing, mtDNA is used to trace maternal ancestry and in forensics.</p>
<p>Mutations in mtDNA cause <span class="term">mitochondrial diseases</span>. They hit tissues with the highest ATP demand: brain, skeletal muscle, heart and eyes (e.g., muscle weakness, seizures, vision loss). Features to know:</p>
<ul>
  <li>An affected mother can pass it to all her children. An affected father does not pass on his mtDNA.</li>
  <li><strong>Heteroplasmy</strong>: a cell holds a mix of normal and mutant mtDNA. Symptoms appear once the mutant fraction passes a threshold, so siblings can be affected very differently.</li>
  <li>Some mitochondrial diseases are caused by <em>nuclear</em> genes instead and follow normal Mendelian inheritance.</li>
</ul>

<h3>How many per cell?</h3>
<p>Mitochondria number tracks energy demand:</p>
<ul>
  <li><strong>Heart muscle</strong>: mitochondria fill roughly a third of the cell volume (approximate). The heart almost never rests and relies on aerobic respiration.</li>
  <li><strong>Liver cells</strong>: around 1000–2000 each (approximate), powering gluconeogenesis, the urea cycle and more.</li>
  <li><strong>Mature red blood cells</strong>: <strong>zero</strong>. They lose their nucleus and mitochondria as they mature, making room for hemoglobin. They make all their ATP by glycolysis and lactic acid fermentation, so they <strong>never use the O<sub>2</sub> they carry</strong>. Their lactate goes to the liver (Cori cycle), and they depend completely on a steady supply of blood glucose.</li>
</ul>
<p>Endurance training adds mitochondria to muscle (<strong>mitochondrial biogenesis</strong>), one of the effects class linked to lactate signalling.</p>

<h3>Reactive oxygen species (ROS)</h3>
<p>The ETC is not perfect. A small fraction of electrons (often quoted as up to 1–2%, likely less in living cells) leak early, mainly at complexes I and III, and react with O<sub>2</sub> to form <strong>superoxide</strong> (O<sub>2</sub><sup>•−</sup>) instead of water. Superoxide can become hydrogen peroxide (H<sub>2</sub>O<sub>2</sub>) and the very reactive hydroxyl radical. These <span class="term">reactive oxygen species</span> damage membrane lipids, proteins and DNA. Being right next to the ETC, mtDNA is especially exposed.</p>
<p>Defences: <strong>superoxide dismutase</strong> converts superoxide to H<sub>2</sub>O<sub>2</sub>, then <strong>catalase</strong> and other enzymes convert H<sub>2</sub>O<sub>2</sub> to water. Antioxidants such as vitamins C and E help. ROS damage is linked to aging and disease, but ROS also act as useful signals, for example telling muscle to adapt to exercise.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Complex IV normally holds electrons until it can hand <strong>four</strong> at once to O<sub>2</sub>, making 2 H<sub>2</sub>O safely. ROS form when an electron reaches O<sub>2</sub> too early, one at a time.</p></div>

<details class="check"><summary>A man has a disease caused by a mutation in his mitochondrial DNA. What is the chance he passes it to his children? What if it were his partner instead?</summary><div class="ans"><p>From the father: essentially zero, because sperm mitochondria are destroyed after fertilization. From an affected mother: any or all of her children could inherit it, because their mitochondria come from her egg. Severity can vary between children due to heteroplasmy.</p></div></details>

<details class="check"><summary>Red blood cells are full of O<sub>2</sub>. Why don't they use it to make ATP?</summary><div class="ans"><p>Mature red blood cells have no mitochondria, so they have no Krebs cycle or ETC. They can only run glycolysis plus lactic acid fermentation (2 ATP per glucose). This also means they do not use up the O<sub>2</sub> they deliver.</p></div></details>
`
});
