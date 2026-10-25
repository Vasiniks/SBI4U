/* Class questions & answers, part B: Fermentation Frenzy (2.07), photosynthesis lessons 2.08-2.11, and the Escape the Cell unit review.
   Where a class answer key exists it is quoted first; otherwise answers are model answers written from the slides and class notes. */
window.QA = window.QA || [];
window.QA.push(

  /* ------------------------------------------------------------------ B1 */
  {
    id: "qa-ferm-frenzy",
    title: "Fermentation Frenzy (interactive)",
    lesson: "2.07",
    source: "Fermentation Frenzy interactive story (class activity): every choice in the muscle-cell path and the yeast-cell path, with the reason each wrong choice fails",
    items: [
      {
        tier: "likely",
        q: "Setup: the game opens with \"O<sub>2</sub> levels depleted\". Why does running out of oxygen leave a cell with glycolysis as its only source of ATP?",
        a: `<p>Oxygen is the <strong>final electron acceptor</strong> of the electron transport chain. With no O<sub>2</sub> at the end of the chain, electrons cannot leave complex IV, the whole chain backs up, H<sup>+</sup> pumping stops and chemiosmosis (oxidative phosphorylation) stops.</p>
<p>Once the ETC stops, NADH and FADH<sub>2</sub> can no longer be oxidized. The Krebs cycle and pyruvate oxidation then stop too, because they run out of NAD<sup>+</sup> and FAD.</p>
<p>Glycolysis does not use oxygen and runs in the cytoplasm, so it is the only ATP-making stage left. It still needs a steady supply of NAD<sup>+</sup>, though. Keeping that supply going is the whole point of fermentation, and it is what both paths of the game test.</p>`
      },
      {
        tier: "essential",
        q: "Muscle-cell path, step 1: a muscle cell sprinting away from a bear relies only on glycolysis. How many NET ATP does it get per glucose? (Choices: 36 ATP, 4 ATP, 2 ATP)",
        a: `<p><strong>Correct choice: 2 ATP.</strong></p>
<p>Glycolysis invests 2 ATP (steps 1 and 3) and makes 4 ATP by substrate-level phosphorylation (steps 7 and 10). Net = 4 − 2 = <strong>2 ATP per glucose</strong>. Fermentation adds no ATP of its own. Its only job is to regenerate NAD<sup>+</sup> so glycolysis can keep making these 2 ATP.</p>
<ul>
<li><strong>36 ATP</strong> is wrong: that is the yield of full aerobic respiration, which needs O<sub>2</sub> at the end of the ETC.</li>
<li><strong>4 ATP</strong> is wrong: 4 is the <em>gross</em> ATP made in glycolysis. It ignores the 2 ATP spent in the energy-investment phase.</li>
</ul>`,
        note: "The game calls aerobic respiration \"36 ATP\". In this class the theoretical maximum is <strong>38 ATP</strong> per glucose; it drops to 36 when the 2 NADH from glycolysis enter the mitochondrion through the glycerol-3-phosphate shuttle (each is then worth 2 ATP instead of 3). Realistic yields are about 30–32. Either way, the 2 ATP from fermentation are a tiny fraction of the aerobic yield."
      },
      {
        tier: "essential",
        q: "Muscle-cell path, step 2: with the ETC stopped, which high-energy electron carrier builds up in the cytoplasm and will stop glycolysis if it is not emptied? (Choices: FADH<sub>2</sub>, NADH, NAD<sup>+</sup>)",
        a: `<p><strong>Correct choice: NADH.</strong></p>
<p>In glycolysis step 6, G3P is oxidized and 2 NAD<sup>+</sup> are reduced to 2 NADH per glucose. Normally NADH passes its electrons to the ETC (through a shuttle), which turns it back into NAD<sup>+</sup>. With no O<sub>2</sub>, the ETC cannot accept them, so NADH piles up and the cell's small stock of NAD<sup>+</sup> runs out. Step 6 cannot happen without NAD<sup>+</sup>, so glycolysis, the cell's last ATP source, stops.</p>
<ul>
<li><strong>FADH<sub>2</sub></strong> is wrong: glycolysis does not make FADH<sub>2</sub>. It is made in the Krebs cycle (succinate → fumarate) in the mitochondrial matrix, not the cytoplasm.</li>
<li><strong>NAD<sup>+</sup></strong> is wrong: NAD<sup>+</sup> is the oxidized, "empty" carrier. It is what runs <em>out</em>, not what builds up. Getting it back is the goal.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Muscle-cell path, step 3: oxygen is not available. What molecule directly accepts the electrons from NADH in a muscle cell? (Choices: Pyruvate, Acetaldehyde, Acetyl-CoA)",
        a: `<p><strong>Correct choice: pyruvate.</strong></p>
<p>In lactate (lactic acid) fermentation, pyruvate, the end product of glycolysis, is itself the <strong>final electron acceptor</strong>. NADH hands it 2 electrons (with H<sup>+</sup>), and that oxidizes NADH back to NAD<sup>+</sup>.</p>
<ul>
<li><strong>Acetaldehyde</strong> is wrong: it is the electron acceptor in <em>yeast</em> (alcoholic fermentation). Animal cells lack pyruvate decarboxylase, so they never make acetaldehyde.</li>
<li><strong>Acetyl-CoA</strong> is wrong: it is made by pyruvate oxidation inside the mitochondrion, a step that itself <em>produces</em> NADH, and it feeds the Krebs cycle. It does not take electrons from NADH, and without O<sub>2</sub> that aerobic route is shut down anyway.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Muscle-cell path, step 4: lactate dehydrogenase moves the electrons from NADH onto pyruvate. What is the 3-carbon product? (Choices: Ethanol, Lactic acid (lactate), Citric acid)",
        a: `<p><strong>Correct choice: lactic acid (lactate).</strong></p>
<div class="eq">pyruvate + NADH + H<sup>+</sup> → lactate + NAD<sup>+</sup> &nbsp;(enzyme: lactate dehydrogenase)</div>
<p>Pyruvate is reduced. No carbon is removed and no CO<sub>2</sub> is released, so the product still has 3 carbons. Per glucose, 2 pyruvate become 2 lactate.</p>
<ul>
<li><strong>Ethanol</strong> is wrong: ethanol has 2 carbons and is made only by yeast (and some bacteria), after a CO<sub>2</sub> has been removed. As the game says, if muscles made ethanol, exercise would make you drunk.</li>
<li><strong>Citric acid (citrate)</strong> is wrong: it has 6 carbons and is the first product of the Krebs cycle (acetyl-CoA + oxaloacetate), made in the mitochondrial matrix. It is not a fermentation product.</li>
</ul>`
      },
      {
        tier: "likely",
        q: "Muscle-cell path, finish: how does making lactate let the muscle cell keep making ATP?",
        a: `<p>Fermentation does not make ATP itself. Its job is to <strong>regenerate NAD<sup>+</sup></strong>. By dropping NADH's electrons onto pyruvate, the cell oxidizes NADH back to NAD<sup>+</sup>. That NAD<sup>+</sup> goes back to glycolysis step 6, so glycolysis keeps running and keeps making its net 2 ATP per glucose.</p>
<div class="eq">glucose → 2 lactate &nbsp;(net 2 ATP)</div>
<p>The cost: 2 ATP per glucose instead of up to 38, so the muscle has to burn through glucose very quickly, and lactate builds up. When oxygen is available again, lactate is carried in the blood to the liver, converted back to pyruvate and then to glucose (the Cori cycle). The extra oxygen used for this recovery is the "oxygen debt".</p>`
      },
      {
        tier: "essential",
        q: "Yeast-cell path, step 1: a yeast cell in a sealed vat of grape juice runs out of oxygen. What is the 3-carbon end product of glycolysis floating in its cytoplasm? (Choices: Pyruvate, Glucose, Acetyl-CoA)",
        a: `<p><strong>Correct choice: pyruvate.</strong> Glycolysis splits one glucose (6 C) into <strong>2 pyruvate</strong> (3 C each), with a net 2 ATP and 2 NADH.</p>
<ul>
<li><strong>Glucose</strong> is wrong: it is the starting molecule (the reactant) of glycolysis, and it has 6 carbons.</li>
<li><strong>Acetyl-CoA</strong> is wrong: it is made from pyruvate in the link reaction (pyruvate oxidation) in the mitochondrial matrix, which only runs aerobically. It is not a product of glycolysis, and its acetyl group has 2 carbons.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Yeast-cell path, step 2: pyruvate decarboxylase removes a carbon from pyruvate. What gas is released as a by-product? (Choices: O<sub>2</sub>, CO<sub>2</sub>, N<sub>2</sub>)",
        a: `<p><strong>Correct choice: carbon dioxide (CO<sub>2</sub>).</strong></p>
<p><em>Decarboxylation</em> means removing a carboxyl group, and the carbon leaves as CO<sub>2</sub>. Pyruvate (3 C) → acetaldehyde (2 C) + CO<sub>2</sub>. This CO<sub>2</sub> is what makes bread dough rise and puts the bubbles in sparkling wine and beer.</p>
<ul>
<li><strong>O<sub>2</sub></strong> is wrong: a decarboxylation must release a carbon, and O<sub>2</sub> has none. Besides, the whole problem is that there is no oxygen.</li>
<li><strong>N<sub>2</sub></strong> is wrong: pyruvate contains no nitrogen, and the gas must carry away a carbon.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Yeast-cell path, step 3: removing one carbon from 3-carbon pyruvate leaves a 2-carbon molecule. What is it called? (Choices: Lactic acid, Acetaldehyde, Citrate)",
        a: `<p><strong>Correct choice: acetaldehyde</strong> (ethanal, CH<sub>3</sub>CHO), a 2-carbon molecule.</p>
<ul>
<li><strong>Lactic acid</strong> is wrong: it has 3 carbons. It is made in muscle cells, where no carbon is removed.</li>
<li><strong>Citrate</strong> is wrong: it has 6 carbons and belongs to the Krebs cycle in the mitochondrion.</li>
</ul>
<p>Tip: when a fermentation question gives you a carbon count, count the carbons. 3 − 1 = 2, and only acetaldehyde fits.</p>`
      },
      {
        tier: "essential",
        q: "Yeast-cell path, step 4: acetaldehyde acts as the final electron acceptor for NADH. What is the final product? (Choices: Ethanol, Water, Lactic acid)",
        a: `<p><strong>Correct choice: ethanol</strong> (C<sub>2</sub>H<sub>5</sub>OH).</p>
<div class="eq">acetaldehyde + NADH + H<sup>+</sup> → ethanol + NAD<sup>+</sup> &nbsp;(enzyme: alcohol dehydrogenase)</div>
<ul>
<li><strong>Water</strong> is wrong: water forms only at the end of the aerobic ETC, when O<sub>2</sub> accepts electrons and H<sup>+</sup>. There is no O<sub>2</sub> here.</li>
<li><strong>Lactic acid</strong> is wrong: it is made by reducing 3-carbon pyruvate in animal cells. The yeast has already removed a carbon, so a 3-carbon product is impossible.</li>
</ul>`
      },
      {
        tier: "likely",
        q: "Yeast-cell path, finish: summarize alcoholic fermentation and explain how it keeps the yeast cell alive.",
        a: `<ol class="steps">
<li><p class="step-head">Glycolysis</p><p>glucose → 2 pyruvate, net 2 ATP, 2 NADH.</p></li>
<li><p class="step-head">Decarboxylation</p><p>pyruvate decarboxylase: each pyruvate (3 C) → acetaldehyde (2 C) + CO<sub>2</sub>.</p></li>
<li><p class="step-head">Reduction</p><p>alcohol dehydrogenase: each acetaldehyde + NADH → ethanol + NAD<sup>+</sup>.</p></li>
</ol>
<div class="eq">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub> &nbsp;(net 2 ATP)</div>
<p>The yeast survives because acetaldehyde takes the electrons from NADH, which regenerates NAD<sup>+</sup>. With NAD<sup>+</sup> available, glycolysis keeps running and supplies 2 ATP per glucose. The ethanol is the "wine" and the CO<sub>2</sub> is the fizz.</p>`
      },
      {
        tier: "likely",
        q: "Compare the two paths of the game: how are lactate fermentation and alcoholic fermentation alike, and how are they different?",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Lactate fermentation (muscle)</th><th>Alcoholic fermentation (yeast)</th></tr></thead>
<tbody>
<tr><td>Where</td><td>cytoplasm</td><td>cytoplasm</td></tr>
<tr><td>Steps after glycolysis</td><td>1 (reduction)</td><td>2 (decarboxylation, then reduction)</td></tr>
<tr><td>Final electron acceptor</td><td>pyruvate</td><td>acetaldehyde</td></tr>
<tr><td>Enzyme(s)</td><td>lactate dehydrogenase</td><td>pyruvate decarboxylase, alcohol dehydrogenase</td></tr>
<tr><td>End products (per glucose)</td><td>2 lactate (3 C)</td><td>2 ethanol (2 C) + 2 CO<sub>2</sub></td></tr>
<tr><td>CO<sub>2</sub> released?</td><td>no</td><td>yes</td></tr>
<tr><td>NAD<sup>+</sup> regenerated?</td><td>yes</td><td>yes</td></tr>
<tr><td>Net ATP per glucose</td><td>2 (from glycolysis)</td><td>2 (from glycolysis)</td></tr>
</tbody></table></div>
<p>Same purpose, same ATP yield: both exist only to turn NADH back into NAD<sup>+</sup> so glycolysis can continue without oxygen.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ B2 */
  {
    id: "qa-208",
    title: "Intro to Photosynthesis: slide questions",
    lesson: "2.08",
    source: "Lesson 2.08 slides (Intro to Photosynthesis): the questions and prompts on the slides. No class answer key; these are model answers.",
    items: [
      {
        tier: "likely",
        q: "Why is photosynthesis important?",
        a: `<p>Photosynthesis <strong>makes sugar using energy from the sun</strong>. That sugar is then broken down in cellular respiration to make ATP, both by the plant itself and by every organism that eats plants (or eats something that ate plants).</p>
<ul>
<li>It is the entry point of energy into almost every food chain: light energy is stored as chemical energy in glucose.</li>
<li>It releases the O<sub>2</sub> that aerobic organisms need as the final electron acceptor of the ETC.</li>
<li>It removes CO<sub>2</sub> from the atmosphere and builds it into organic molecules.</li>
</ul>
<p>The products of photosynthesis (glucose, O<sub>2</sub>) are the reactants of cellular respiration, and the products of respiration (CO<sub>2</sub>, H<sub>2</sub>O) are the reactants of photosynthesis.</p>`
      },
      {
        tier: "essential",
        q: "Which leaf tissue carries out photosynthesis?",
        a: `<p>The <strong>mesophyll</strong>, a parenchyma tissue between the upper and lower epidermis of the leaf. Its cells are packed with chloroplasts.</p>
<ul>
<li>In <strong>dicots</strong> the mesophyll has two layers: tightly packed <strong>palisade</strong> cells near the upper surface (most of the chloroplasts) and loosely packed <strong>spongy</strong> cells below, with air spaces for gas exchange.</li>
<li>CO<sub>2</sub> enters and O<sub>2</sub> and water vapour leave through <strong>stomata</strong>, mostly on the lower surface.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Monocots have only spongy mesophyll. Their leaves grow vertically, so light hits both sides and there is no "top" layer to specialize as palisade.</p></div>`
      },
      {
        tier: "essential",
        q: "Where does photosynthesis take place?",
        a: `<p><strong>In chloroplasts</strong>, mainly in the mesophyll cells of leaves.</p>
<ul>
<li>The <strong>light reactions</strong> take place in the <strong>thylakoid membranes</strong>, where the photosystems, the electron transport chain and ATP synthase are embedded.</li>
<li>The <strong>Calvin cycle</strong> takes place in the <strong>stroma</strong>, the fluid around the thylakoids.</li>
</ul>
<p>The chloroplast is a double-membrane organelle with its own fluid "inside" (the stroma), which is why it is often compared with the mitochondrion.</p>`
      },
      {
        tier: "essential",
        q: "Label the chloroplast. (Said in class: know how to label it.)",
        a: `<p>Parts to label, from the outside in:</p>
<ul>
<li><strong>Outer membrane</strong> and <strong>inner membrane</strong>: together, the double membrane (envelope) that surrounds the chloroplast.</li>
<li><strong>Intermembrane space</strong>: the narrow space between the outer and inner membranes.</li>
<li><strong>Stroma</strong>: the fluid (aqueous) matrix that surrounds the grana. Site of the Calvin cycle.</li>
<li><strong>Thylakoid</strong>: a membrane-bound flattened sac. Its membrane is the site of the light reactions.</li>
<li><strong>Granum</strong> (plural <strong>grana</strong>): a stack of thylakoids.</li>
<li><strong>Thylakoid lumen</strong>: the space inside a thylakoid, where H<sup>+</sup> accumulate during the light reactions.</li>
<li>Extra: <strong>stroma lamellae</strong>, the membrane bridges that connect one granum to another.</li>
</ul>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Do not mix up <em>stroma</em> (the fluid around the thylakoids) with <em>stoma</em> (a pore in the leaf surface), or <em>lumen</em> (inside a thylakoid) with <em>stroma</em> (outside the thylakoids).</p></div>`
      },
      {
        tier: "essential",
        q: "Overview: write the overall equation. What is reduced and what is oxidized? Where do the electrons and the energy for the reduction come from?",
        a: `<div class="eq">6 CO<sub>2</sub> + 6 H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub></div>
<ul>
<li><strong>Reduced: carbon dioxide</strong>, which gains electrons (and hydrogen) and becomes glucose.</li>
<li><strong>Oxidized: water</strong>, which loses electrons and becomes O<sub>2</sub>.</li>
<li><strong>Electrons</strong> for the reduction come from <strong>water</strong> (split in photolysis).</li>
<li><strong>Energy</strong> for the reduction comes from <strong>light</strong>, captured and carried as <strong>ATP and NADPH</strong>.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The O<sub>2</sub> released comes from the <strong>water</strong>, not from the CO<sub>2</sub>. The carbon and oxygen of CO<sub>2</sub> end up in the sugar (in the Calvin cycle).</p></div>`
      },
      {
        tier: "essential",
        q: "Is photosynthesis anabolic or catabolic?",
        a: `<p><strong>Anabolic.</strong> It builds a large, complex molecule (glucose, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) from small, simple ones (CO<sub>2</sub> and H<sub>2</sub>O). Building up is anabolism.</p>
<p>Cellular respiration is the opposite: it is catabolic, breaking glucose back down to CO<sub>2</sub> and H<sub>2</sub>O.</p>`
      },
      {
        tier: "essential",
        q: "Is photosynthesis endergonic or exergonic?",
        a: `<p><strong>Endergonic.</strong> The products (glucose + O<sub>2</sub>) hold more free energy than the reactants (CO<sub>2</sub> + H<sub>2</sub>O), so ΔG is positive and energy must be put in. That input is light energy.</p>
<p>It is the reverse of cellular respiration, which is exergonic: oxidizing one mole of glucose releases about 2870 kJ, so making one mole of glucose by photosynthesis needs at least that much energy.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Anabolic and endergonic go together (building takes energy); catabolic and exergonic go together (breaking down releases energy).</p></div>`
      },
      {
        tier: "essential",
        q: "What are the two stages of photosynthesis, and where does each take place?",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Light reactions</th><th>Calvin cycle</th></tr></thead>
<tbody>
<tr><td>Location</td><td>thylakoid membrane</td><td>stroma</td></tr>
<tr><td>Inputs</td><td>light, H<sub>2</sub>O, ADP + P<sub>i</sub>, NADP<sup>+</sup></td><td>CO<sub>2</sub>, ATP, NADPH</td></tr>
<tr><td>Outputs</td><td>ATP, NADPH, O<sub>2</sub></td><td>G3P (sugar), ADP + P<sub>i</sub>, NADP<sup>+</sup></td></tr>
<tr><td>Job</td><td>capture light energy as chemical energy</td><td>use that energy to fix CO<sub>2</sub> into sugar</td></tr>
</tbody></table></div>
<p>The two stages depend on each other: the light reactions supply ATP and NADPH to the Calvin cycle, and the Calvin cycle returns ADP, P<sub>i</sub> and NADP<sup>+</sup> to be recharged.</p>`
      },
      {
        tier: "likely",
        q: "Why are plants green?",
        a: `<ul>
<li>Light is electromagnetic radiation that travels in waves. <strong>Visible light</strong> has wavelengths from about <strong>380 nm</strong> (violet) to <strong>750 nm</strong> (red).</li>
<li>Three things can happen to light that hits a leaf: it can be <strong>absorbed</strong>, <strong>transmitted</strong> (pass through) or <strong>reflected</strong>.</li>
<li>A <span class="term">pigment</span> is a compound that absorbs certain wavelengths of visible light and reflects (or transmits) others. The colour you see is the light that is <em>not</em> absorbed.</li>
<li>Chlorophyll, the main pigment in leaves, absorbs <strong>red</strong> and <strong>blue-violet</strong> light strongly but absorbs <strong>green</strong> light poorly.</li>
</ul>
<p>So green light is reflected from the leaf and transmitted through it, and that green light is what reaches your eyes. Plants are green because green is the colour they use <em>least</em>.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The slide says plants absorb all colours "except green". That is a simplification: some green light is absorbed, but much less than red and blue. And never say plants are green because they "need" or "use" green light; it is the opposite.</p></div>`
      },
      {
        tier: "likely",
        q: "What is an absorption spectrum?",
        a: `<p>An <span class="term">absorption spectrum</span> is a graph that shows how much electromagnetic radiation (light) a substance absorbs at each wavelength. Wavelength is on the x-axis and the amount absorbed is on the y-axis.</p>
<p>For chlorophyll a and b, the graph has two peaks, one in the blue-violet region (about 400–480 nm) and one in the red region (about 640–680 nm), and a deep valley in the green-yellow region (about 500–600 nm). The valley is why leaves look green. Carotenoids absorb mainly blue and blue-green light (about 400–500 nm), filling in part of the gap.</p>`
      },
      {
        tier: "essential",
        q: "What are chlorophyll a and chlorophyll b, and how do their roles differ?",
        a: `<ul>
<li><strong>Chlorophyll a</strong> (blue-green) is the <strong>primary photosynthetic pigment</strong>. It is the pigment in the reaction centre (P680 in photosystem II, P700 in photosystem I) whose excited electrons actually start the light reactions.</li>
<li><strong>Chlorophyll b</strong> (yellow-green) is an <strong>accessory pigment</strong>. It absorbs photons of wavelengths that chlorophyll a absorbs poorly and passes that energy on to chlorophyll a.</li>
</ul>
<p>Having both widens the range of wavelengths a leaf can use.</p>`
      },
      {
        tier: "essential",
        q: "Name the other accessory pigments and the colour each gives leaves.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Pigment</th><th>Colour</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Carotenoids (e.g. β-carotene)</td><td>yellow-orange</td><td>precursor of vitamin A, which helps with low-light vision (carrots)</td></tr>
<tr><td>Xanthophylls</td><td>yellow</td><td>oxygen-containing relatives of the carotenes</td></tr>
<tr><td>Anthocyanins</td><td>red (to purple)</td><td>made in the fall; give red autumn leaves</td></tr>
</tbody></table></div>
<p>Accessory pigments absorb light that chlorophyll a misses and pass the energy to chlorophyll a. Carotenoids also protect chlorophyll by absorbing excess light energy (extra).</p>
<p>Extra: anthocyanins are water-soluble pigments stored in the vacuole, not in the chloroplast, so they do not feed energy to the photosystems the way carotenoids do. The slide groups them with the accessory pigments because of their role in leaf colour.</p>`
      },
      {
        tier: "likely",
        q: "Why do leaves change colour in the fall?",
        a: `<ol class="steps">
<li><p class="step-head">Chlorophyll disappears</p><p>As days shorten and temperatures drop, the tree stops making chlorophyll, and the chlorophyll already in the leaf breaks down and is not replaced.</p></li>
<li><p class="step-head">Yellow and orange are unmasked</p><p>Carotenoids (yellow-orange) and xanthophylls (yellow) were in the leaf all summer, hidden by the much larger amount of green chlorophyll. Once the chlorophyll is gone, their colours show.</p></li>
<li><p class="step-head">Red is newly made</p><p>Anthocyanins (red) are <strong>made in the fall</strong>, especially on sunny days followed by cool nights, from sugars trapped in the leaf.</p></li>
</ol>
<p>So yellow and orange are revealed, but red is produced. Brown comes from waste products (tannins) left once the leaf cells die (extra).</p>`
      },
      {
        tier: "likely",
        q: "What is photosynthetically active radiation (PAR), and why is it useful for a plant to have several pigments?",
        a: `<p><span class="term">PAR</span> is the range of light that plants can use for photosynthesis, roughly the visible spectrum (about 400–700 nm). No single pigment absorbs all of it, but <strong>when all the pigments are combined, light is absorbed from across the entire visible spectrum</strong>.</p>
<p>Each pigment has its own absorption spectrum, so a mixture of chlorophyll a, chlorophyll b and carotenoids captures more of the incoming light than chlorophyll a alone. More photons captured means more energy for making ATP and NADPH.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ B3 */
  {
    id: "qa-208-lab",
    title: "Leaf pigment chromatography lab",
    lesson: "2.08",
    source: "Lab handout: Leaf Pigment Extraction by Chromatography (discussion questions, analysis and procedure). No class answer key; these are model answers.",
    items: [
      {
        tier: "likely",
        q: "Discussion 1. What wavelengths are absorbed and reflected by xanthophyll?",
        a: `<p>Xanthophyll looks <strong>yellow</strong>, so:</p>
<ul>
<li><strong>Absorbed:</strong> mainly <strong>violet, blue and blue-green</strong> light, roughly <strong>400–500 nm</strong>.</li>
<li><strong>Reflected (and transmitted):</strong> the longer wavelengths it does not absorb, about 500–750 nm: green, <strong>yellow</strong>, orange and red. Together these look yellow, which is why the band on your chromatogram (and a fall leaf) is yellow.</li>
</ul>
<p>Yellow and blue are complementary colours: a pigment that removes blue from white light looks yellow. Because xanthophyll absorbs in the blue region, it helps fill in light that chlorophyll a absorbs less well, and passes that energy on.</p>`
      },
      {
        tier: "likely",
        q: "Discussion 2. What adaptive purpose do different coloured pigments serve for a plant? Why is it beneficial for a plant to contain different pigments?",
        a: `<ul>
<li><strong>Wider range of usable light.</strong> Each pigment absorbs a different set of wavelengths. Chlorophyll a alone would miss much of the blue-green and orange light. With chlorophyll b, carotenoids and xanthophylls added, the combined pigments absorb across the whole visible spectrum (PAR), so more of the sunlight hitting the leaf is captured.</li>
<li><strong>More energy for photosynthesis.</strong> Accessory pigments sit in the antenna complex and pass the energy they absorb to chlorophyll a in the reaction centre, so more electrons are excited and more ATP and NADPH are made, especially in dim or shaded light.</li>
<li><strong>Protection.</strong> Carotenoids absorb excess light energy and protect chlorophyll from damage in very bright light (extra). Anthocyanins act like a sunscreen for leaves in the fall (extra).</li>
</ul>
<p>A plant with several pigments can therefore photosynthesize faster and in a wider range of light conditions, which is an advantage for survival and growth.</p>`
      },
      {
        tier: "likely",
        q: "Discussion 3. Why do some pigments move farther up the chromatogram than others?",
        a: `<p>Because the pigments are <strong>not equally soluble in the solvent</strong>, and they are <strong>not equally attracted to the paper</strong>.</p>
<ul>
<li>As the solvent climbs the paper by capillary action, each pigment is pulled two ways: it dissolves in and travels with the moving solvent, and it sticks to (is attracted to) the cellulose fibres of the paper.</li>
<li>A pigment that is <strong>very soluble</strong> in the solvent and weakly attracted to the paper spends most of its time moving, so it travels far (high R<sub>f</sub>).</li>
<li>A pigment that is <strong>less soluble</strong> and more strongly attracted to the paper keeps getting held back, so it moves slower and stops lower (low R<sub>f</sub>).</li>
</ul>
<p>Solubility depends on polarity ("like dissolves like"), and molecule size has a smaller effect. Since all the pigments move for the same amount of time, their different speeds become different distances.</p>`
      },
      {
        tier: "likely",
        q: "Discussion 4. The chromatography solvent is acetone. Based on its structure, which pigments would you expect to move the furthest?",
        a: `<p>Acetone, (CH<sub>3</sub>)<sub>2</sub>C=O, is a small organic solvent. It has one polar C=O group, but its two methyl groups make it far <strong>less polar</strong> than water or the cellulose paper (which is covered in –OH groups). It dissolves fat-like, nonpolar compounds well.</p>
<p>By "like dissolves like", the <strong>least polar pigments move furthest</strong>:</p>
<ol>
<li><strong>Carotene</strong> moves furthest. It is a pure hydrocarbon (C<sub>40</sub>H<sub>56</sub>, no oxygen at all), so it is the most nonpolar pigment and the most soluble in the solvent.</li>
<li><strong>Xanthophylls</strong> come next. They are carotenoids with oxygen-containing groups, which make them a little more polar.</li>
<li><strong>Chlorophyll a</strong>, then <strong>chlorophyll b</strong>. Chlorophylls have a polar "head" (a ring with nitrogen, oxygen and Mg<sup>2+</sup>), so they are more attracted to the paper and move less.</li>
</ol>`
      },
      {
        tier: "likely",
        q: "Discussion 5. What is the structural difference between chlorophyll a and chlorophyll b? Explain why this difference corresponds to a difference in R<sub>f</sub> values.",
        a: `<p><strong>Structure:</strong> the two molecules are identical except for one side group on the ring. Chlorophyll a has a <strong>methyl group (–CH<sub>3</sub>)</strong> where chlorophyll b has an <strong>aldehyde group (–CHO)</strong>.</p>
<p><strong>Effect on R<sub>f</sub>:</strong></p>
<ul>
<li>The –CHO group contains a polar C=O bond, so <strong>chlorophyll b is more polar</strong> than chlorophyll a.</li>
<li>Being more polar, chlorophyll b is <strong>less soluble</strong> in the fairly nonpolar solvent and <strong>more strongly attracted</strong> to the polar cellulose paper (dipole attractions and hydrogen bonds with its –OH groups).</li>
<li>So chlorophyll b moves more slowly and travels a shorter distance: it has a <strong>lower R<sub>f</sub></strong> than chlorophyll a, and its band sits just below the chlorophyll a band.</li>
</ul>
<p>The same small change also shifts which wavelengths are absorbed, which is why chlorophyll b looks yellow-green and chlorophyll a looks blue-green.</p>`
      },
      {
        tier: "likely",
        q: "How do you calculate an R<sub>f</sub> value? Give a worked example.",
        a: `<div class="eq">R<sub>f</sub> = distance travelled by the pigment from the origin ÷ distance travelled by the solvent from the origin</div>
<ul>
<li>Measure both distances from the <strong>origin</strong> (the pencil line where you applied the pigment), in millimetres.</li>
<li>Measure the pigment to the <strong>top of its band</strong> (as the handout says), and the solvent to the <strong>solvent front</strong> you marked.</li>
<li>R<sub>f</sub> has <strong>no units</strong> (mm ÷ mm) and is always between 0 and 1, because a pigment cannot travel farther than the solvent carrying it.</li>
</ul>
<p><strong>Worked example:</strong> the solvent front is 90 mm above the pencil line.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Band (from top)</th><th>Distance (mm)</th><th>R<sub>f</sub></th></tr></thead>
<tbody>
<tr><td>1 carotene (yellow-orange)</td><td>86</td><td>86 ÷ 90 = 0.96</td></tr>
<tr><td>2 xanthophyll (yellow)</td><td>63</td><td>63 ÷ 90 = 0.70</td></tr>
<tr><td>3 chlorophyll a (blue-green)</td><td>45</td><td>45 ÷ 90 = 0.50</td></tr>
<tr><td>4 chlorophyll b (yellow-green)</td><td>32</td><td>32 ÷ 90 = 0.36</td></tr>
</tbody></table></div>
<p>The numbers are typical, not exact; yours depend on the solvent, paper and temperature. What matters is the order. The handout defines R<sub>f</sub> as a pigment's speed compared with the solvent's speed; since both move for the same time, the ratio of distances equals the ratio of speeds. A given pigment in the same solvent and paper always has about the same R<sub>f</sub>, so R<sub>f</sub> values help identify pigments.</p>`
      },
      {
        tier: "likely",
        q: "Why do you draw the lines with a pencil and not a pen?",
        a: `<p>Pencil "lead" is graphite (carbon), which does <strong>not dissolve</strong> in the chromatography solvent, so the line stays exactly where you drew it.</p>
<p>Pen ink is itself a mixture of coloured dyes that <strong>does dissolve</strong> in the solvent. As the solvent passed the line, the ink would travel up the paper and separate into its own coloured bands, mixing with the pigment bands and ruining the chromatogram. The same goes for marking the solvent front and the bands afterwards: the handout says pencil, NOT pen.</p>`
      },
      {
        tier: "likely",
        q: "Why must the pigment line stay above the level of the solvent (about 1 cm above it)?",
        a: `<p>If the pigment line is under the solvent, the pigments <strong>dissolve straight into the pool of solvent</strong> in the beaker instead of being carried up the paper. They wash out and spread, so no clean bands form and there is nothing to measure. The handout says that if this happens you have to start over.</p>
<p>With the line above the solvent, the solvent has to climb the paper by capillary action to reach it. All the pigments then start from the same origin at the same moment and are separated as the solvent carries them upward.</p>`
      },
      {
        tier: "essential",
        q: "What order of bands should you expect on the chromatogram, from top to bottom?",
        a: `<ol>
<li><strong>Carotene</strong>: yellow to yellow-orange. Highest band, close to the solvent front (most soluble, highest R<sub>f</sub>).</li>
<li><strong>Xanthophyll</strong>: yellow.</li>
<li><strong>Chlorophyll a</strong>: bright green to blue-green.</li>
<li><strong>Chlorophyll b</strong>: yellow-green to olive green. Lowest band, closest to the origin (least soluble, lowest R<sub>f</sub>).</li>
</ol>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>"Carrots eXcel At Biology": Carotene, Xanthophyll, chlorophyll A, chlorophyll B, from top to bottom. Least polar on top, most polar at the bottom.</p></div>
<p>Chlorophyll a is usually the darkest band because it is the most abundant pigment. Carotene is often faint because there is little of it. Red anthocyanins do not appear: they are water-soluble and stay behind in the vacuole sap (extra).</p>`
      },
      {
        tier: "extra",
        q: "Procedure check: why apply the extract several times with drying in between, cover the beaker, and mark the solvent front immediately?",
        a: `<ul>
<li><strong>Several thin applications, dried each time:</strong> builds a band that is dark enough to see the faint pigments (like carotene) while staying narrow. Adding wet extract on wet extract spreads the spot, and a wide starting band gives blurred, overlapping bands.</li>
<li><strong>Petri dish on top of the beaker:</strong> keeps the air inside saturated with solvent vapour, so the solvent does not evaporate off the paper as it climbs. The front then rises evenly.</li>
<li><strong>Remove the strip when the solvent is about 1 cm from the top:</strong> if the solvent reaches the top edge, you lose the true solvent front and cannot calculate R<sub>f</sub>.</li>
<li><strong>Mark the solvent front immediately:</strong> the solvent evaporates within seconds to minutes, and once it does, the front is invisible.</li>
</ul>`
      }
    ]
  },

  /* ------------------------------------------------------------------ B4 */
  {
    id: "qa-209",
    title: "Light reactions: research & review",
    lesson: "2.09",
    source: "Lesson 2.09 slides (Research & Review Questions) and the class answer key (Light Reactions Practice – Answers). The key answers questions 1–4 and 6; question 5 had no key.",
    items: [
      {
        tier: "essential",
        q: "1. What are the energy carriers leaving the light reactions?",
        a: `<p><strong>Class key:</strong> ATP (adenosine triphosphate), the main energy currency of the cell, and NADPH, a high-energy electron carrier.</p>
<ul>
<li><strong>ATP</strong> is made by <strong>photophosphorylation</strong>: H<sup>+</sup> flow from the thylakoid lumen back into the stroma through ATP synthase (chemiosmosis). Class value: 1 ATP per 4 H<sup>+</sup>.</li>
<li><strong>NADPH</strong> is made at the end of the photosystem I chain: ferredoxin passes 2 electrons to <strong>NADP<sup>+</sup> reductase</strong>, which reduces NADP<sup>+</sup> to NADPH.</li>
</ul>
<p>Both are released into the <strong>stroma</strong>, right where the Calvin cycle needs them: ATP supplies energy, and NADPH supplies the high-energy electrons (reducing power) that turn CO<sub>2</sub> into sugar. O<sub>2</sub> also leaves the light reactions, but it is a by-product, not an energy carrier.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Plants use <strong>NADPH</strong> in photosynthesis, not NADH. NADH and FADH<sub>2</sub> are the carriers of cellular respiration.</p></div>`
      },
      {
        tier: "essential",
        q: "2. Where do electrons come from for the two photosystems?",
        a: `<p><strong>Class key:</strong> Photosystem II: from <strong>water</strong> molecules (H<sub>2</sub>O). Through photolysis, water is split into electrons, protons and oxygen. Photosystem I: from the <strong>electron transport chain</strong>; they are the same electrons that just left photosystem II, having lost some energy along the way to pump protons.</p>
<p>Following one pair of electrons through non-cyclic flow:</p>
<div class="eq">H<sub>2</sub>O → P680 (PSII) → primary acceptor → PQ → cytochrome b<sub>6</sub>-f → PC → P700 (PSI) → primary acceptor → Fd → NADP<sup>+</sup> reductase → NADPH</div>
<ul>
<li>When light excites 2 electrons out of P680, P680 is left short of electrons. The <strong>Z protein</strong> (the water-splitting enzyme) splits water: H<sub>2</sub>O → 2 H<sup>+</sup> + 2 e<sup>−</sup> + ½ O<sub>2</sub>. The electrons refill P680, the protons stay in the lumen and add to the gradient, and the oxygen leaves.</li>
<li>When light excites 2 electrons out of P700, they are replaced by the 2 electrons arriving through plastocyanin from photosystem II.</li>
</ul>
<p>In <strong>cyclic</strong> flow, photosystem I's electrons loop back (Fd → PQ/b<sub>6</sub>-f → PC) to P700 itself, so no water is split and no NADPH is made.</p>`
      },
      {
        tier: "likely",
        q: "3. What would happen if the plant was grown in a shady location?",
        a: `<p><strong>Class key:</strong> Less ATP/NADPH: with fewer photons hitting the chlorophyll, the "charging station" runs slower. Adaptation: plants often respond by growing broader, thinner leaves to maximize surface area, or by increasing the amount of chlorophyll per chloroplast to catch every stray bit of light.</p>
<p>The chain of effects, step by step:</p>
<ul>
<li>Fewer photons → fewer electrons excited in P680 and P700 → less water split (less O<sub>2</sub> released) and slower electron flow.</li>
<li>Slower electron flow → fewer H<sup>+</sup> pumped into the lumen → less ATP; fewer electrons reaching NADP<sup>+</sup> reductase → less NADPH.</li>
<li>Less ATP and NADPH → the Calvin cycle slows → less G3P and glucose → slower growth.</li>
</ul>
<p>Extra: shade plants often have larger antenna complexes with relatively more chlorophyll b, and the light under a canopy is poor in red and blue (the leaves above absorbed it), so broad-range light capture matters even more. In very deep shade, a plant can fall to the point where respiration uses sugar as fast as photosynthesis makes it.</p>`
      },
      {
        tier: "essential",
        q: "4. Can plants do the light reactions at night?",
        a: `<p><strong>Class key:</strong> No. The light reactions require the direct energy of photons to excite electrons. Without light, the water-splitting process and the electron transport chain grind to a halt. However, the Calvin cycle (the "light-independent" reactions) can briefly continue at night until the supply of ATP and NADPH stored during the day is used up.</p>
<ul>
<li>No photons → no excitation of P680 and P700 → no electron flow, no photolysis, no O<sub>2</sub> released, no H<sup>+</sup> pumping, no new ATP or NADPH.</li>
<li>The Calvin cycle does not use light directly, but it depends on the light reactions' ATP and NADPH, so it stops soon after dark. (Several Calvin cycle enzymes, including RuBisCO through RuBisCO activase, are also switched on by light, which makes the shutdown faster.)</li>
<li>At night the plant still does <strong>cellular respiration</strong>, using O<sub>2</sub> and releasing CO<sub>2</sub> to make ATP from sugar stored during the day.</li>
</ul>`
      },
      {
        tier: "likely",
        q: "5. What process does this remind you of? What are the similarities and differences?",
        a: `<p>The light reactions remind you of the <strong>electron transport chain and chemiosmosis (oxidative phosphorylation) in the mitochondrion</strong>. Both use an ETC to build an H<sup>+</sup> gradient across a membrane and then use that gradient to make ATP.</p>
<h4>Similarities</h4>
<ul>
<li>A chain of electron carriers <strong>embedded in a membrane</strong> passes electrons along, releasing energy a little at a time.</li>
<li>That energy is used to <strong>pump H<sup>+</sup></strong> across the membrane, building an electrochemical gradient.</li>
<li>H<sup>+</sup> flow back down the gradient through <strong>ATP synthase</strong>, which makes ATP: <strong>chemiosmosis</strong>.</li>
<li>Similar carriers: a mobile quinone (plastoquinone vs ubiquinone, Q), a cytochrome complex (b<sub>6</sub>-f vs complex III), and a small mobile protein (plastocyanin vs cytochrome c).</li>
<li>Both happen in double-membrane organelles that have their own DNA.</li>
</ul>
<h4>Differences</h4>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Light reactions (chloroplast)</th><th>ETC (mitochondrion)</th></tr></thead>
<tbody>
<tr><td>Energy source</td><td>light (photons)</td><td>chemical energy in food (glucose)</td></tr>
<tr><td>Electron source</td><td>water (split, O<sub>2</sub> released)</td><td>NADH and FADH<sub>2</sub></td></tr>
<tr><td>Final electron acceptor</td><td>NADP<sup>+</sup> (→ NADPH)</td><td>O<sub>2</sub> (→ H<sub>2</sub>O)</td></tr>
<tr><td>Oxygen</td><td>produced</td><td>consumed</td></tr>
<tr><td>Membrane</td><td>thylakoid membrane</td><td>inner mitochondrial membrane (cristae)</td></tr>
<tr><td>H<sup>+</sup> pumped into</td><td>thylakoid lumen</td><td>intermembrane space</td></tr>
<tr><td>ATP made in</td><td>stroma</td><td>matrix</td></tr>
<tr><td>Name of ATP synthesis</td><td>photophosphorylation</td><td>oxidative phosphorylation</td></tr>
<tr><td>Electron energy</td><td>boosted uphill twice by light (PSII and PSI, the Z scheme)</td><td>only flows downhill</td></tr>
<tr><td>Purpose of products</td><td>ATP and NADPH are used to build sugar (anabolic)</td><td>ATP powers the cell; sugar was broken down (catabolic)</td></tr>
</tbody></table></div>`
      },
      {
        tier: "essential",
        q: "6. What reactants/products of photosynthesis are used/produced in this process?",
        a: `<p><strong>Class key:</strong> <strong>Water</strong> is a reactant (it is split as the source of electrons and to supply the protons for the gradient). <strong>Oxygen</strong> is released in the splitting of water.</p>
<div class="eq">6 CO<sub>2</sub> + 6 H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub></div>
<div class="table-wrap"><table class="data">
<thead><tr><th>Part of the overall equation</th><th>In the light reactions?</th></tr></thead>
<tbody>
<tr><td>Light energy</td><td><strong>Used.</strong> Absorbed by the photosystems to excite electrons.</td></tr>
<tr><td>H<sub>2</sub>O (reactant)</td><td><strong>Used.</strong> Split by photolysis: electrons for P680, H<sup>+</sup> for the gradient.</td></tr>
<tr><td>O<sub>2</sub> (product)</td><td><strong>Produced.</strong> All of it comes from the split water.</td></tr>
<tr><td>CO<sub>2</sub> (reactant)</td><td><strong>No.</strong> CO<sub>2</sub> is fixed in the Calvin cycle.</td></tr>
<tr><td>Glucose (product)</td><td><strong>No.</strong> Sugar (G3P) is made in the Calvin cycle.</td></tr>
</tbody></table></div>
<p>The light reactions also make <strong>ATP and NADPH</strong> (from ADP + P<sub>i</sub> and NADP<sup>+</sup>), but these do not appear in the overall equation because the Calvin cycle uses them up and sends ADP, P<sub>i</sub> and NADP<sup>+</sup> back.</p>`,
        note: "The class key numbers this question 5 because it skips the \"What process does this remind you of?\" question. Extra: a more complete equation is 6 CO<sub>2</sub> + 12 H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> + 6 H<sub>2</sub>O: 12 water molecules are split to release 6 O<sub>2</sub>, and 6 water molecules are formed again as the sugar is built. The simple equation just cancels 6 H<sub>2</sub>O from each side."
      }
    ]
  },

  /* ------------------------------------------------------------------ B5 */
  {
    id: "qa-210",
    title: "Calvin cycle: research & review",
    lesson: "2.10",
    source: "Lesson 2.10 slides (Research & Review). No class answer key; these are model answers. RuBisCO activase (questions 3 and 4) goes beyond the slides.",
    items: [
      {
        tier: "essential",
        q: "1. Is energy required or produced for the Calvin cycle?",
        a: `<p><strong>Energy is required.</strong> The Calvin cycle is <strong>anabolic and endergonic</strong>: it builds sugar from CO<sub>2</sub>, and the sugar holds more energy than the CO<sub>2</sub> it came from. The energy comes from the light reactions, as ATP and NADPH.</p>
<div class="tally"><span class="chip co2">6 CO<sub>2</sub></span><span class="chip atp">18 ATP</span><span class="chip nadph">12 NADPH</span><span class="chip">→ 1 glucose (2 G3P)</span></div>
<ul>
<li><strong>Reduction phase:</strong> ATP phosphorylates PGA to 1,3-BPG, and NADPH reduces 1,3-BPG to G3P (6 ATP + 6 NADPH per 3 CO<sub>2</sub>).</li>
<li><strong>Regeneration phase:</strong> 3 more ATP per 3 CO<sub>2</sub> rebuild RuBP.</li>
<li>Per G3P: 9 ATP + 6 NADPH. Per glucose: 18 ATP + 12 NADPH.</li>
</ul>
<p>The cycle produces no ATP. The energy it takes in ends up stored in the chemical bonds of G3P (and then glucose). It sends ADP, P<sub>i</sub> and NADP<sup>+</sup> back to the thylakoids to be recharged.</p>`
      },
      {
        tier: "essential",
        q: "2. How many molecules of CO<sub>2</sub> need to be fixed to create 1 molecule of glucose?",
        a: `<p><strong>6 CO<sub>2</sub>.</strong> Each CO<sub>2</sub> adds one carbon, and glucose has six carbons.</p>
<ul>
<li>3 CO<sub>2</sub> + 3 RuBP → 6 PGA → 6 G3P. One G3P (3 C) leaves; the other 5 G3P (15 C) are rearranged into 3 RuBP.</li>
<li>So each 3 CO<sub>2</sub> fixed gives <strong>one</strong> G3P product, and one glucose needs <strong>two</strong> G3P.</li>
<li>For 6 CO<sub>2</sub>: 6 RuBP → 12 PGA → 12 G3P; 2 G3P leave to make 1 glucose and 10 G3P (30 C) regenerate 6 RuBP (30 C).</li>
</ul>
<p>If you count one CO<sub>2</sub> per turn of the cycle, that is 6 turns per glucose.</p>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The notes say "2 G3P per PGA" and mix the per-3 and per-6 counts. Correct: <strong>1 G3P per PGA</strong>; 6 G3P per 3 CO<sub>2</sub>; 12 G3P per 6 CO<sub>2</sub> (2 leave to make glucose, 10 regenerate 6 RuBP).</p></div>`
      },
      {
        tier: "likely",
        q: "3. What is RuBisCO activase?",
        a: `<p><span class="term">RuBisCO activase</span> is an <strong>ATP-dependent, light-activated enzyme</strong> that switches RuBisCO on and keeps it working. It clears <strong>inhibitory sugar phosphates</strong> out of RuBisCO's active site so that RuBisCO can be activated.</p>
<ul>
<li><strong>The problem it solves:</strong> sugar phosphates bind tightly in RuBisCO's active site and jam it. Examples: RuBP itself, when it binds to a site that has not been activated yet; faulty side products of RuBisCO's own reactions; and, in some plants at night, an inhibitor made in the dark.</li>
<li><strong>What it does:</strong> using energy from <strong>ATP hydrolysis</strong>, activase changes RuBisCO's shape and pulls the inhibitor out of the active site.</li>
<li><strong>Activation:</strong> with the site cleared, RuBisCO can be <strong>carbamylated</strong>: a separate CO<sub>2</sub> molecule (not the one that will be fixed) attaches to a lysine in the active site, and Mg<sup>2+</sup> binds to it. Only then can RuBisCO fix CO<sub>2</sub> onto RuBP.</li>
<li><strong>Light control:</strong> activase works only when the light reactions are supplying ATP (a high ATP/ADP ratio in the stroma), so RuBisCO is switched on in the light and off in the dark. This links the Calvin cycle to the light reactions.</li>
</ul>
<p>Extra: activase is more heat-sensitive than RuBisCO itself, which is one reason photosynthesis in many C3 plants drops during heat waves.</p>`,
        note: "RuBisCO activase is not on the slides; this is a research question. Know the core: ATP-dependent, light-activated, removes inhibitors from RuBisCO's active site so RuBisCO can be activated (carbamylated)."
      },
      {
        tier: "likely",
        q: "4. What would happen if RuBisCO was not activated? Be specific.",
        a: `<p>RuBisCO would stay inactive, with its active sites blocked, and the Calvin cycle would stop at its first step. The effects spread outward:</p>
<ol class="steps">
<li><p class="step-head">No carbon fixation</p><p>CO<sub>2</sub> is not added to RuBP, so no unstable 6-carbon intermediate and <strong>no PGA</strong> are made.</p></li>
<li><p class="step-head">No G3P</p><p>With no PGA, there is no 1,3-BPG and <strong>no G3P</strong>. Nothing leaves the cycle as product.</p></li>
<li><p class="step-head">RuBP builds up</p><p>RuBP is not used. Any leftover G3P is turned into still more RuBP, which piles up in the stroma.</p></li>
<li><p class="step-head">ATP and NADPH pile up; ADP, P<sub>i</sub> and NADP<sup>+</sup> run out</p><p>The reduction phase is what normally spends ATP and NADPH. Without it, they are not used, so ADP, P<sub>i</sub> and NADP<sup>+</sup> are not sent back to the thylakoids.</p></li>
<li><p class="step-head">The light reactions slow down</p><p>With no NADP<sup>+</sup>, electrons back up at ferredoxin and the end of the chain. With no ADP, ATP synthase stops and the H<sup>+</sup> gradient cannot be used. Electron flow, water splitting and O<sub>2</sub> release all slow. Extra: light energy that cannot be used can damage the photosystems.</p></li>
<li><p class="step-head">No sugar for growth</p><p>No G3P means no glucose, no sucrose to send to the rest of the plant, no starch to store and no cellulose for new cell walls. The plant stops growing, uses up its stored starch in respiration, and would eventually starve.</p></li>
</ol>`
      },
      {
        tier: "likely",
        q: "5. Phosphorus is one of the main minerals in fertilizers. Discuss its role in relation to photosynthesis.",
        a: `<p>Phosphorus is part of the <strong>phosphate groups</strong> (PO<sub>4</sub>) found all through photosynthesis:</p>
<ul>
<li><strong>ATP and ADP:</strong> the energy carrier of both stages. Photophosphorylation adds a phosphate to ADP to make ATP, and the Calvin cycle spends 18 ATP per glucose.</li>
<li><strong>NADPH / NADP<sup>+</sup>:</strong> the "P" is an extra phosphate group. It is what makes NADP<sup>+</sup> different from NAD<sup>+</sup>, and it is the electron carrier plants use for photosynthesis.</li>
<li><strong>Calvin cycle intermediates are phosphorylated:</strong> RuBP (ribulose-1,5-<em>bis</em>phosphate, two phosphates), PGA (3-<em>phospho</em>glycerate), 1,3-BPG (1,3-<em>bis</em>phosphoglycerate) and G3P (glyceraldehyde-3-<em>phosphate</em>). The phosphate groups make these molecules reactive enough for the next step. The P<sub>i</sub> released is recycled back to the light reactions.</li>
<li><strong>Membranes:</strong> the thylakoid membranes and chloroplast envelope contain <strong>phospholipids</strong>. The thylakoid membrane holds the photosystems, ETC and ATP synthase and must keep the H<sup>+</sup> gradient from leaking.</li>
<li><strong>DNA and RNA:</strong> nucleic acids have a sugar-phosphate backbone. They are needed to make the proteins of photosynthesis (RuBisCO, photosystem proteins, ATP synthase), including from the chloroplast's own DNA.</li>
</ul>
<p><strong>So:</strong> a phosphorus-deficient plant cannot make enough ATP, NADPH or Calvin cycle intermediates, so it fixes less CO<sub>2</sub>, makes less sugar and grows poorly (stunted, often with dark or purplish leaves). That is why phosphorus is one of the three main fertilizer nutrients (the "P" in N-P-K).</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ B6 */
  {
    id: "qa-210-compare",
    title: "Compare cellular respiration and photosynthesis",
    lesson: "2.10",
    source: "Lesson 2.10 slides: \"Connecting Cellular Respiration and Photosynthesis\" and the \"For Your Review, Compare…\" slide (5 areas). No class answer key; these are model answers.",
    items: [
      {
        tier: "likely",
        q: "Compare 1. Overall reactions: reactants, products, and energy released or absorbed.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Photosynthesis</th><th>Cellular respiration</th></tr></thead>
<tbody>
<tr><td>Equation</td><td>6 CO<sub>2</sub> + 6 H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub></td><td>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + energy (ATP + heat)</td></tr>
<tr><td>Reactants</td><td>CO<sub>2</sub>, H<sub>2</sub>O, light</td><td>glucose, O<sub>2</sub></td></tr>
<tr><td>Products</td><td>glucose (from G3P), O<sub>2</sub></td><td>CO<sub>2</sub>, H<sub>2</sub>O, up to 38 ATP</td></tr>
<tr><td>Energy</td><td>absorbed: endergonic (+ΔG), anabolic</td><td>released: exergonic (−ΔG), catabolic</td></tr>
<tr><td>Redox</td><td>CO<sub>2</sub> reduced; H<sub>2</sub>O oxidized</td><td>glucose oxidized; O<sub>2</sub> reduced</td></tr>
<tr><td>Where</td><td>chloroplast</td><td>cytoplasm (glycolysis) + mitochondrion</td></tr>
<tr><td>Which organisms</td><td>plants, algae, some bacteria</td><td>almost all organisms, plants included</td></tr>
</tbody></table></div>
<p>The two equations are reverses of each other: the products of one are the reactants of the other. Matter (C, H, O) cycles between them, while energy flows one way: light → glucose → ATP → heat.</p>`
      },
      {
        tier: "likely",
        q: "Compare 2. Electrons: source and carriers.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Photosynthesis</th><th>Cellular respiration</th></tr></thead>
<tbody>
<tr><td>Electron source</td><td><strong>water</strong> (split by photolysis; oxidized to O<sub>2</sub>)</td><td><strong>glucose</strong> / food (oxidized to CO<sub>2</sub>)</td></tr>
<tr><td>Carrier(s)</td><td><strong>NADPH</strong> (NADP<sup>+</sup> + 2 e<sup>−</sup> + H<sup>+</sup>)</td><td><strong>NADH</strong> and <strong>FADH<sub>2</sub></strong></td></tr>
<tr><td>Where the carriers are loaded</td><td>end of the PSI chain (NADP<sup>+</sup> reductase), stroma side</td><td>glycolysis, pyruvate oxidation, Krebs cycle</td></tr>
<tr><td>Where the electrons end up</td><td>in sugar (G3P), reducing CO<sub>2</sub></td><td>in water, reducing O<sub>2</sub></td></tr>
<tr><td>Direction</td><td>"uphill": light energy pushes electrons from water (low energy) to sugar (high energy)</td><td>"downhill": electrons fall from sugar (high energy) to O<sub>2</sub> (low energy), releasing energy</td></tr>
</tbody></table></div>`
      },
      {
        tier: "likely",
        q: "Compare 3. Electron transport system: electron source, energy pathway, electron acceptor, products.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Light reactions ETC (thylakoid)</th><th>Respiratory ETC (mitochondrion)</th></tr></thead>
<tbody>
<tr><td>Electron source</td><td>H<sub>2</sub>O → P680</td><td>NADH (→ complex I) and FADH<sub>2</sub> (→ complex II)</td></tr>
<tr><td>Energy source</td><td>light, absorbed twice (PSII and PSI)</td><td>chemical energy from oxidizing food</td></tr>
<tr><td>Pathway</td><td>PSII → PQ → cyt b<sub>6</sub>-f → PC → PSI → Fd → NADP<sup>+</sup> reductase</td><td>I → Q → III → cyt c → IV</td></tr>
<tr><td>Final electron acceptor</td><td><strong>NADP<sup>+</sup></strong></td><td><strong>O<sub>2</sub></strong></td></tr>
<tr><td>Products</td><td>NADPH, O<sub>2</sub> (from water), H<sup>+</sup> gradient → ATP</td><td>H<sub>2</sub>O, NAD<sup>+</sup> and FAD (recycled), H<sup>+</sup> gradient → ATP</td></tr>
</tbody></table></div>
<p>Same idea in both: electrons move through membrane carriers, and the energy released pumps H<sup>+</sup>. The difference is the energy profile: in respiration the electrons only flow downhill, while in photosynthesis light lifts them uphill twice (the Z scheme).</p>`
      },
      {
        tier: "likely",
        q: "Compare 4. ATP synthesis: H<sup>+</sup> pumps, chemiosmosis, protein complex.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Photosynthesis</th><th>Cellular respiration</th></tr></thead>
<tbody>
<tr><td>Name</td><td>photophosphorylation</td><td>oxidative phosphorylation</td></tr>
<tr><td>H<sup>+</sup> pumps</td><td>cytochrome b<sub>6</sub>-f complex (with PQ); photolysis also releases H<sup>+</sup> into the lumen</td><td>complexes I, III and IV</td></tr>
<tr><td>H<sup>+</sup> pumped from → to</td><td>stroma → <strong>thylakoid lumen</strong></td><td>matrix → <strong>intermembrane space</strong></td></tr>
<tr><td>Chemiosmosis (H<sup>+</sup> flow back)</td><td>lumen → stroma</td><td>intermembrane space → matrix</td></tr>
<tr><td>Protein complex</td><td>ATP synthase (ATPase) in the thylakoid membrane</td><td>ATP synthase (ATPase) in the inner membrane</td></tr>
<tr><td>ATP released into</td><td>stroma (used by the Calvin cycle)</td><td>matrix (exported to the cytoplasm)</td></tr>
<tr><td>Other ATP-making</td><td>none; all ATP comes from chemiosmosis</td><td>also substrate-level phosphorylation (glycolysis, Krebs)</td></tr>
</tbody></table></div>
<p>The mechanism is the same: an ETC builds an H<sup>+</sup> gradient, and H<sup>+</sup> flowing back through ATP synthase drives ADP + P<sub>i</sub> → ATP. Class value for chloroplasts: 1 ATP per 4 H<sup>+</sup>. Chloroplasts can also run cyclic electron flow (PSI only) to pump extra H<sup>+</sup> for extra ATP.</p>`
      },
      {
        tier: "likely",
        q: "Compare 5. Organelle structure and function: inner membrane functions, and where H<sup>+</sup> build up and ATP is made.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Chloroplast</th><th>Mitochondrion</th><th>Shared job</th></tr></thead>
<tbody>
<tr><td>thylakoid membrane (stacked in grana)</td><td>inner membrane (folded into cristae)</td><td>holds the ETC and ATP synthase; folding/stacking gives lots of surface area</td></tr>
<tr><td>thylakoid lumen</td><td>intermembrane space</td><td>H<sup>+</sup> build up here (high concentration)</td></tr>
<tr><td>stroma</td><td>matrix</td><td>ATP is made on this side; fluid with the enzymes of a cycle (Calvin vs Krebs)</td></tr>
<tr><td>outer + inner envelope membranes</td><td>outer + inner membranes</td><td>double membrane around the organelle</td></tr>
<tr><td>own DNA and ribosomes</td><td>own DNA and ribosomes</td><td>evidence that both came from engulfed bacteria (endosymbiosis)</td></tr>
</tbody></table></div>
<p>One structural difference: in the mitochondrion, the ETC sits in the <strong>inner membrane</strong> itself. In the chloroplast, it sits in a <strong>third membrane system</strong>, the thylakoids, inside the inner membrane. So the thylakoid membrane, not the chloroplast's inner membrane, matches the mitochondrion's inner membrane.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ B7 */
  {
    id: "qa-211-text",
    title: "C4 and CAM: textbook Section 3.4 questions",
    lesson: "2.11",
    source: "Nelson textbook Section 3.4 Questions (Alternative Mechanisms of Carbon Fixation), plus two questions implied by the lesson 2.11 slides. No class answer key; these are model answers.",
    items: [
      {
        tier: "essential",
        q: "1(a). Define <em>photorespiration</em>.",
        a: `<p><span class="term">Photorespiration</span> is the process in which <strong>RuBisCO adds O<sub>2</sub> instead of CO<sub>2</sub> to RuBP</strong> (in the light). Instead of two PGA, it makes <strong>one PGA (3 C)</strong> and <strong>one phosphoglycolate (2 C, toxic)</strong>. Breaking down the phosphoglycolate uses ATP and NADPH and <strong>releases CO<sub>2</sub></strong>, so carbon that was already fixed is lost and no sugar or ATP is gained.</p>
<p>Textbook definition: the oxidation of RuBP by RuBisCO and oxygen in light to form glycolate, which then releases carbon dioxide.</p>
<p>It is called <em>photo</em>respiration because it happens in light and, like respiration, takes in O<sub>2</sub> and gives off CO<sub>2</sub>. Unlike cellular respiration, it makes no ATP; it only wastes carbon and energy.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>You do not need the full salvage pathway (chloroplast → peroxisome, which makes H<sub>2</sub>O<sub>2</sub> → mitochondrion). Just know it is a long, multi-organelle chain that is very wasteful: carbon and energy are lost and nothing useful is made.</p></div>`
      },
      {
        tier: "essential",
        q: "1(b). What gas can compete with CO<sub>2</sub> for the binding site of the enzyme RuBisCO?",
        a: `<p><strong>Oxygen (O<sub>2</sub>).</strong> RuBisCO is ribulose-1,5-bisphosphate <strong>carboxylase/oxygenase</strong>: the same active site can add either CO<sub>2</sub> (carboxylation, the useful reaction) or O<sub>2</sub> (oxygenation, which leads to photorespiration) to RuBP.</p>
<p>Which one wins depends on their relative concentrations and on temperature. When stomata close on hot, dry days, CO<sub>2</sub> inside the leaf falls and O<sub>2</sub> from the light reactions builds up, so O<sub>2</sub> binds more often.</p>`
      },
      {
        tier: "likely",
        q: "1(c). Under normal conditions, what proportion of fixed carbon is affected by photorespiration in C3 plants?",
        a: `<p><strong>About 20%.</strong> Under normal conditions RuBisCO carries out carbon fixation about four times as often as oxidation, so about 1 in 5 reactions, roughly 20% of fixed carbon, is lost to photorespiration.</p>
<p>On hot, dry, bright days the share climbs: C3 plants (soybeans, Kentucky bluegrass, sunflowers) can lose from one quarter to one half of the carbon they fix.</p>`,
        note: "The class slide gives \"an overall loss of 25% carbon\". That matches the textbook detail that when two glycolate molecules (4 C) are salvaged, 3 carbons return to the Calvin cycle as G3P and 1 is released as CO<sub>2</sub> (1 of 4 = 25%). If a class test asks how much carbon photorespiration loses, use 25%; the textbook's answer to this question is about 20%."
      },
      {
        tier: "likely",
        q: "1(d). Compare the end products of photosynthesis and photorespiration.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Photosynthesis (RuBisCO adds CO<sub>2</sub>)</th><th>Photorespiration (RuBisCO adds O<sub>2</sub>)</th></tr></thead>
<tbody>
<tr><td>First products from 1 RuBP</td><td>2 PGA (3 C each)</td><td>1 PGA (3 C) + 1 phosphoglycolate (2 C, toxic)</td></tr>
<tr><td>Final products</td><td>G3P → glucose, sucrose, starch</td><td>no sugar; CO<sub>2</sub> released (some carbon returned as G3P)</td></tr>
<tr><td>Gas exchange</td><td>takes in CO<sub>2</sub>, releases O<sub>2</sub></td><td>takes in O<sub>2</sub>, releases CO<sub>2</sub></td></tr>
<tr><td>ATP and NADPH</td><td>used to build sugar (stored energy)</td><td>used up with nothing gained</td></tr>
<tr><td>Net result</td><td>carbon gained, energy stored</td><td>carbon and energy lost</td></tr>
</tbody></table></div>
<p>In short, photosynthesis ends with useful carbohydrate; photorespiration ends with CO<sub>2</sub> and wasted energy (and H<sub>2</sub>O<sub>2</sub> in the peroxisome along the way).</p>`
      },
      {
        tier: "likely",
        q: "2. How does temperature affect the relative amounts of photosynthesis and photorespiration that occur in C3 plants?",
        a: `<p><strong>As temperature rises, photorespiration takes up a larger and larger share.</strong></p>
<ul>
<li>The optimum temperature for photosynthesis in C3 plants is about <strong>15–25 °C</strong>, but the optimum for photorespiration is much higher, about <strong>30–47 °C</strong> (textbook Figure 1).</li>
<li>So above about 25 °C, the rate of photosynthesis levels off and starts to fall while the rate of photorespiration keeps increasing.</li>
<li>Temperature changes RuBisCO's shape and so its affinity: <strong>high temperature → relatively greater affinity for O<sub>2</sub></strong>; low temperature → greater affinity for CO<sub>2</sub> (said in class).</li>
<li>Hot days also make the plant close its stomata to save water, so CO<sub>2</sub> inside the leaf drops and O<sub>2</sub> builds up, which favours oxygenation even more.</li>
</ul>
<p>Result: C3 plants do best in cool, moist conditions. In hot, dry, bright weather they lose much more carbon to photorespiration.</p>`
      },
      {
        tier: "likely",
        q: "3(a). Label A, B, C, D and E in Figure 5 (the C4 pathway across two cells).",
        a: `<p>In Figure 5, CO<sub>2</sub> enters the left cell, joins PEP at A, becomes malate, crosses into the right cell, releases B toward the Calvin cycle, and returns to the left cell as C, which is turned back into PEP using ATP.</p>
<ul>
<li><strong>A = oxaloacetate (OAA, 4 C)</strong>, the first product, made when <strong>PEP carboxylase</strong> joins CO<sub>2</sub> to PEP. (If your label marks the reaction rather than the molecule, PEP carboxylase is the enzyme at A.)</li>
<li><strong>B = CO<sub>2</sub></strong>, released when malate is decarboxylated in the bundle-sheath cell. It is fixed again by RuBisCO in the Calvin cycle.</li>
<li><strong>C = pyruvate (3 C)</strong>, what is left of malate after the CO<sub>2</sub> is removed. It moves back to the mesophyll cell.</li>
<li><strong>D = mesophyll cell</strong>, where the first fixation (by PEP carboxylase) happens.</li>
<li><strong>E = bundle-sheath cell</strong>, where the Calvin cycle runs.</li>
</ul>
<p>The ATP shown between C and PEP is spent converting pyruvate back to PEP (ATP → AMP, the equivalent of 2 ATP).</p>`
      },
      {
        tier: "likely",
        q: "3(b). What type of cell-to-cell connection do malate and pyruvate go through to move from one cell into the other?",
        a: `<p><strong>Plasmodesmata</strong> (singular: plasmodesma): membrane-lined channels through the cell walls that connect the cytoplasm of neighbouring plant cells. Malate moves from the mesophyll cell into the bundle-sheath cell through them, and pyruvate moves back the same way.</p>`
      },
      {
        tier: "essential",
        q: "4(a). What is the main difference between the ideal environments of C4 plants and CAM plants?",
        a: `<p><strong>How dry it is.</strong></p>
<ul>
<li><strong>C4 plants</strong> are adapted for <strong>high heat and intense sunlight</strong>, such as tropical grasslands. They still open their stomata in the daytime, so they need enough water to afford some daytime water loss.</li>
<li><strong>CAM plants</strong> are adapted for <strong>extreme drought</strong>, such as hot deserts. Water is so scarce that they keep their stomata closed all day and open them only at night.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>C4 means hot and bright, <strong>not necessarily dry</strong>. CAM means extreme drought.</p></div>`
      },
      {
        tier: "essential",
        q: "4(b). Name two C4 plants and two CAM plants.",
        a: `<ul>
<li><strong>C4:</strong> corn (maize) and sugar cane. Others: sorghum, millet, tropical grasses such as crabgrass.</li>
<li><strong>CAM:</strong> pineapple and cactus. Others: jade plant, aloe, agave (succulents).</li>
</ul>`
      },
      {
        tier: "likely",
        q: "5. What might have been responsible for the evolution of photorespiration?",
        a: `<p>Photorespiration is most likely an <strong>evolutionary leftover from early Earth</strong>.</p>
<ul>
<li>RuBisCO evolved in early photosynthetic prokaryotes, when the atmosphere had <strong>plenty of CO<sub>2</sub> and almost no O<sub>2</sub></strong>. Its ability to bind O<sub>2</sub> did not matter, because there was almost no O<sub>2</sub> to bind.</li>
<li>Photosynthesis itself released O<sub>2</sub> as a by-product, and over time O<sub>2</sub> built up in the atmosphere.</li>
<li>The oxygenase activity uses the <strong>same active site</strong> that fixes CO<sub>2</sub>, so it could not be removed without harming carboxylation. Plants never evolved a RuBisCO that ignores O<sub>2</sub>.</li>
</ul>
<p>Instead, some plants evolved ways around it: C4 and CAM concentrate CO<sub>2</sub> around RuBisCO so that CO<sub>2</sub> outcompetes O<sub>2</sub>.</p>`
      },
      {
        tier: "likely",
        q: "6(a) and (b). At what time of day would you expect to find the most malate in CAM plants? When would you find the least?",
        a: `<ul>
<li><strong>Most malate: at dawn (early morning).</strong> All night the stomata are open and CO<sub>2</sub> is fixed into malate and stored in the vacuoles, so malate has been accumulating for hours.</li>
<li><strong>Least malate: late afternoon to dusk (end of the day).</strong> All day the stomata are closed, and malate is broken down to release CO<sub>2</sub> for the Calvin cycle, so the store is used up by evening.</li>
</ul>
<p>This is why CAM leaves taste noticeably more sour in the morning: their cell sap is most acidic then.</p>`
      },
      {
        tier: "essential",
        q: "6(c). Why do plants that use CAM photosynthetic pathways close their stomata during the day?",
        a: `<p><strong>To minimize water loss.</strong> In a hot, dry desert, open stomata in the daytime would lose huge amounts of water by transpiration. At night it is cooler and more humid, so opening the stomata then lets CO<sub>2</sub> in while losing much less water.</p>
<p>The plant can afford to keep its stomata shut during the day because it has already stored CO<sub>2</sub> as malate overnight. During the day it releases that CO<sub>2</sub> inside the leaf for the Calvin cycle, while the light reactions supply ATP and NADPH.</p>`
      },
      {
        tier: "essential",
        q: "6(d). During the cool of the evening, CAM plants open their stomata. What gas is preferentially absorbed at this time?",
        a: `<p><strong>Carbon dioxide (CO<sub>2</sub>).</strong> It is taken in at night and fixed by PEP carboxylase, which binds CO<sub>2</sub> (as HCO<sub>3</sub><sup>−</sup>) but not O<sub>2</sub>.</p>`
      },
      {
        tier: "essential",
        q: "6(e). Explain how this gas is stored for daytime use.",
        a: `<ol class="steps">
<li><p class="step-head">Fixed at night</p><p>In the cytoplasm, <strong>PEP carboxylase</strong> joins CO<sub>2</sub> to <strong>PEP</strong> (3 C) to make <strong>oxaloacetate</strong> (4 C).</p></li>
<li><p class="step-head">Converted to malate</p><p>Oxaloacetate is reduced to <strong>malate</strong> (4 C), an organic acid.</p></li>
<li><p class="step-head">Stored in the vacuole</p><p>Malate is moved into the large central <strong>vacuole</strong> and stored as malic acid, so the cells become more acidic overnight.</p></li>
<li><p class="step-head">Released by day</p><p>In the daytime, malate leaves the vacuole and is <strong>decarboxylated</strong>, releasing CO<sub>2</sub> inside the cell. RuBisCO fixes this CO<sub>2</sub> in the Calvin cycle, using ATP and NADPH from the light reactions.</p></li>
</ol>
<p>With the stomata closed, the released CO<sub>2</sub> stays concentrated around RuBisCO, which also keeps photorespiration low. This is the temporal separation that fixes CO<sub>2</sub> twice.</p>`
      },
      {
        tier: "extra",
        q: "7(a). Write a letter to the Canadian Chemical Association supporting the nomination of RuBisCO as Enzyme of the Year. (Outline the main points.)",
        a: `<p>A strong letter would make these points:</p>
<ul>
<li><strong>It feeds the world.</strong> RuBisCO catalyzes the first step of the Calvin cycle, the entry point for almost all carbon in living things. Nearly every carbon atom in your food, and in you, was fixed by RuBisCO.</li>
<li><strong>Scale.</strong> It is often called the most abundant protein on Earth, making up a large share of the protein in leaves, and together all RuBisCO fixes on the order of a hundred billion tonnes of carbon a year.</li>
<li><strong>Climate.</strong> By removing CO<sub>2</sub> from the atmosphere, it helps regulate Earth's climate.</li>
<li><strong>Longevity and reach.</strong> It has been doing this job for billions of years, in cyanobacteria, algae and every plant.</li>
<li><strong>It made our atmosphere possible.</strong> Photosynthesis, which depends on RuBisCO to use its ATP and NADPH, built up the O<sub>2</sub> that aerobic life needs.</li>
</ul>
<p>Format: a formal letter (date, address, greeting, a clear statement of support, 2–3 paragraphs of evidence, a closing).</p>`
      },
      {
        tier: "extra",
        q: "7(b). Write a letter to the Canadian Chemical Association explaining why RuBisCO does not deserve to be Enzyme of the Year. (Outline the main points.)",
        a: `<p>A strong letter would make these points:</p>
<ul>
<li><strong>It is extremely slow.</strong> Each active site fixes only a few CO<sub>2</sub> per second, while many enzymes handle thousands of reactions per second. Plants have to make enormous amounts of it, which ties up much of a leaf's nitrogen.</li>
<li><strong>It cannot tell CO<sub>2</sub> from O<sub>2</sub>.</strong> Its oxygenase activity causes photorespiration, which wastes about 20–25% of fixed carbon under normal conditions and up to half on hot days, along with ATP and NADPH.</li>
<li><strong>It makes a toxic product.</strong> Oxygenation produces phosphoglycolate, which the plant must spend energy to clean up through a long pathway across three organelles.</li>
<li><strong>It needs help.</strong> It is easily jammed by sugar phosphates and needs a second enzyme, RuBisCO activase, using ATP just to keep it working.</li>
<li><strong>Others have to fix its mistakes.</strong> C4 and CAM plants evolved costly workarounds (C4 uses about 30 ATP per glucose instead of 18) just to protect RuBisCO from O<sub>2</sub>.</li>
</ul>
<p>Format: same as 7(a), with a clear position and evidence.</p>`
      },
      {
        tier: "likely",
        q: "8. Write a hypothesis about the acid content of two CAM plants: one kept in sunlight for the previous 24 h and one kept in the dark for the previous 24 h.",
        a: `<p><strong>Hypothesis:</strong> If one CAM plant is kept in the dark for 24 h and another is kept in sunlight for 24 h, then the plant kept in the dark will have a <strong>higher acid content</strong> (lower pH, more malic acid) than the plant kept in the light, because in the dark the plant keeps fixing CO<sub>2</sub> into malate and storing it, but cannot use it.</p>
<p><strong>Reasoning:</strong></p>
<ul>
<li><strong>Dark plant:</strong> stomata stay open, PEP carboxylase keeps fixing CO<sub>2</sub> into malate, and malate builds up in the vacuoles. With no light, there are no light reactions, no ATP or NADPH, and no Calvin cycle, so the malate is not broken down.</li>
<li><strong>Light plant:</strong> stomata stay closed, so little new CO<sub>2</sub> is fixed into malate, while the stored malate is steadily decarboxylated to feed the Calvin cycle. Its acid content drops to a low level.</li>
</ul>
<p>You could test it by measuring the pH of crushed leaf sap or titrating the acid in leaf samples from both plants.</p>`
      },
      {
        tier: "likely",
        q: "9. If you were a researcher looking for new plant species that exhibit CAM photosynthesis, what biome or biomes would you explore? Why?",
        a: `<p><strong>Deserts and other hot, dry (arid and semi-arid) biomes.</strong> CAM is an adaptation to extreme drought: opening stomata only at night saves water. Where water is scarcest and daytime heat is greatest, natural selection most strongly favours CAM, which is why cacti, agaves and other succulents dominate there.</p>
<p>Good extra places to look:</p>
<ul>
<li>Dry scrublands with long dry seasons (for example, Mediterranean-type chaparral).</li>
<li>The canopy of tropical rainforests: epiphytes such as many orchids and bromeliads grow on branches with no soil, so they dry out between rains even in a wet biome. Many of them use CAM.</li>
</ul>`
      },
      {
        tier: "extra",
        q: "10. If the greenhouse effect persists and gets worse, which photosynthetic pathway (C3, C4 or CAM) would benefit the environment the most? Explain.",
        a: `<p>Answers can vary; marks go to a clear choice backed by reasoning. A strong answer weighs both effects of the greenhouse effect: <strong>more CO<sub>2</sub></strong> and <strong>higher temperatures</strong>.</p>
<ul>
<li><strong>Case for C4 (best for a hotter world):</strong> as temperatures rise, C3 plants lose more and more of their fixed carbon to photorespiration. C4 plants concentrate CO<sub>2</sub> around RuBisCO, so they keep fixing CO<sub>2</sub> efficiently in heat and bright light, and they are among the most productive plants on Earth. In a warmer climate they would remove the most CO<sub>2</sub> per leaf area.</li>
<li><strong>Case for C3 (more CO<sub>2</sub>):</strong> higher CO<sub>2</sub> levels help C3 plants most, because more CO<sub>2</sub> outcompetes O<sub>2</sub> at RuBisCO and reduces photorespiration. C4 plants already have concentrated CO<sub>2</sub>, so extra CO<sub>2</sub> helps them little. C3 plants also make up most of the world's plant species and forests.</li>
<li><strong>CAM</strong> plants grow slowly and fix little CO<sub>2</sub> overall, so they would help the least, although they would survive drought best.</li>
</ul>
<p>A sound conclusion: if warming dominates, C4 plants would fix CO<sub>2</sub> most effectively and benefit the environment most; the rising CO<sub>2</sub> itself mainly benefits C3 plants.</p>`
      },
      {
        tier: "extra",
        q: "11(a). What is a weed?",
        a: `<p>A <strong>weed</strong> is any plant growing where people do not want it, especially one that competes with crops, lawns or garden plants for light, water and nutrients. Weeds usually grow fast, produce huge numbers of seeds, spread easily and tolerate harsh conditions. "Weed" is a human label, not a scientific group: the same species can be a weed in one place and a crop or wildflower in another.</p>`
      },
      {
        tier: "extra",
        q: "11(b). Of the ten most aggressive weeds in the world, eight are C4 plants. Name three common North American C4 plants that are classified as weeds.",
        a: `<ul>
<li><strong>Crabgrass</strong> (<em>Digitaria</em> species), the classic lawn weed.</li>
<li><strong>Redroot pigweed / amaranth</strong> (<em>Amaranthus</em> species, including Palmer amaranth).</li>
<li><strong>Barnyard grass</strong> (<em>Echinochloa crus-galli</em>).</li>
</ul>
<p>Others: green and yellow foxtail, Johnson grass, purslane, kochia and Russian thistle. Many C4 weeds thrive in the hot, bright, open conditions of crop fields in summer.</p>`
      },
      {
        tier: "likely",
        q: "11(c). Some of the world's most productive crops are C4 plants. Name three important North American crops that are C4 plants.",
        a: `<ul>
<li><strong>Corn (maize)</strong></li>
<li><strong>Sugar cane</strong></li>
<li><strong>Sorghum</strong></li>
</ul>
<p>Also millet (such as proso millet) and switchgrass, grown for biofuel. By contrast, wheat, soybeans, canola, rice and potatoes are C3 crops.</p>`
      },
      {
        tier: "extra",
        q: "11(d). How will escalation of the greenhouse effect (rising atmospheric CO<sub>2</sub>) affect the competition between C3 and C4 plants in terms of crop productivity and weed control?",
        a: `<p><strong>Rising CO<sub>2</sub> favours C3 plants.</strong> More CO<sub>2</sub> outcompetes O<sub>2</sub> at RuBisCO, so C3 plants have less photorespiration and fix more carbon. C4 plants already concentrate CO<sub>2</sub>, so extra CO<sub>2</sub> helps them much less.</p>
<ul>
<li><strong>C3 crops vs C4 weeds</strong> (wheat or soybeans vs crabgrass or pigweed): the crop gains an edge, so the C4 weeds become <em>easier</em> to control and crop yields may rise.</li>
<li><strong>C4 crops vs C3 weeds</strong> (corn or sugar cane vs C3 weeds such as lamb's quarters or ragweed): the weeds gain an edge, so weed control becomes <em>harder</em> and C4 crop yields may suffer.</li>
</ul>
<p><strong>But</strong> the greenhouse effect also raises temperatures, which favours C4 plants (more photorespiration in C3 plants), so C4 weeds may spread north into areas that were too cool for them. The final outcome depends on which effect is stronger in a given region.</p>`
      },
      {
        tier: "essential",
        q: "From the slides: why are C4 plants called \"C4\"?",
        a: `<p>Because the <strong>first product of CO<sub>2</sub> fixation has 4 carbons</strong>. In the mesophyll cells, PEP carboxylase joins CO<sub>2</sub> to PEP (3 C) to form <strong>oxaloacetate (4 C)</strong>, which is then reduced to malate (4 C).</p>
<p>Compare <strong>C3 plants</strong>: RuBisCO fixes CO<sub>2</sub> directly onto RuBP, and the first stable product is the 3-carbon <strong>PGA</strong> (3-phosphoglycerate).</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>C4 plants do <strong>not</strong> replace the Calvin cycle. They add an extra fixation step in front of it. The CO<sub>2</sub> is released again in the bundle-sheath cells and fixed a second time by RuBisCO in an ordinary Calvin cycle.</p></div>`
      },
      {
        tier: "essential",
        q: "From the slides: what is the difference between the spatial separation of C4 plants and the temporal separation of CAM plants?",
        a: `<p>Both separate the <strong>first CO<sub>2</sub> fixation</strong> (by PEP carboxylase, making a 4-carbon acid) from the <strong>Calvin cycle</strong> (CO<sub>2</sub> fixed again by RuBisCO). What differs is <em>how</em> they are separated.</p>
<div class="compare"><div><h4>C4: spatial (different place)</h4><ul>
<li>First fixation in <strong>mesophyll cells</strong>; Calvin cycle in <strong>bundle-sheath cells</strong>.</li>
<li>Both steps happen at the same time (during the day).</li>
<li>Malate is moved between cells through plasmodesmata.</li>
<li>Adapted to high heat and intense light.</li>
</ul></div><div><h4>CAM: temporal (different time)</h4><ul>
<li>Both steps happen in the <strong>same cell</strong>.</li>
<li>First fixation at <strong>night</strong> (stomata open); Calvin cycle during the <strong>day</strong> (stomata closed).</li>
<li>Malate is stored overnight in the vacuole.</li>
<li>Adapted to extreme drought.</li>
</ul></div></div>
<p>Shared purpose: concentrate CO<sub>2</sub> around RuBisCO so it outcompetes O<sub>2</sub>, preventing photorespiration. Shared cost: both use extra ATP compared with C3 plants.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>S</strong>patial = different <strong>S</strong>pace (cells). <strong>T</strong>emporal = different <strong>T</strong>ime (night vs day).</p></div>`
      }
    ]
  },

  /* ------------------------------------------------------------------ B8 */
  {
    id: "qa-escape",
    title: "Escape the Cell: unit review escape room",
    lesson: "mix",
    source: "Escape the Cell: A Metabolic Crisis (unit review game, 6 rooms × 3 clues). \"Game answer\" is what the game's code accepts: it ignores capital letters but otherwise needs the exact word (spaces are ignored only for ATP synthase).",
    items: [
      {
        tier: "essential",
        q: "Room 1 (cytoplasm: glycolysis), clue 1: determine the net yield of ATP molecules produced from one molecule of glucose.",
        a: `<p><strong>Game answer: 2</strong></p>
<p>Glycolysis makes 4 ATP by substrate-level phosphorylation but spends 2 ATP in the energy-investment phase, so the net yield is 4 − 2 = 2 ATP per glucose.</p>`
      },
      {
        tier: "essential",
        q: "Room 1 (cytoplasm: glycolysis), clue 2: determine the total number of reduced high-energy electron carriers (NADH) produced from one molecule of glucose.",
        a: `<p><strong>Game answer: 2</strong></p>
<p>One NADH is made each time G3P is oxidized (step 6), and each glucose gives two G3P, so 2 NADH per glucose. Glycolysis makes no FADH<sub>2</sub>.</p>`
      },
      {
        tier: "essential",
        q: "Room 1 (cytoplasm: glycolysis), clue 3: determine the number of carbon atoms in a single molecule of the final product of glycolysis (pyruvate).",
        a: `<p><strong>Game answer: 3</strong></p>
<p>Glucose (6 C) is split into two molecules of pyruvate, each with 3 carbons. No carbon is lost as CO<sub>2</sub> in glycolysis.</p>`
      },
      {
        tier: "essential",
        q: "Room 2 (the portal: pyruvate oxidation), clue 1: what is the chemical formula of the waste gas removed from pyruvate during this decarboxylation step? (3 characters)",
        a: `<p><strong>Game answer: CO2</strong> (CO<sub>2</sub>)</p>
<p>Pyruvate (3 C) loses its carboxyl group as CO<sub>2</sub>, leaving a 2-carbon piece. That is 1 CO<sub>2</sub> per pyruvate, or 2 per glucose: the first CO<sub>2</sub> released in cellular respiration.</p>`,
        note: "The game wants the formula typed as CO2. Writing \"carbon dioxide\" is correct science but is not accepted by the game."
      },
      {
        tier: "essential",
        q: "Room 2 (the portal: pyruvate oxidation), clue 2: what is the name of the 2-carbon molecule that remains before it attaches to coenzyme A? (6 letters)",
        a: `<p><strong>Game answer: acetyl</strong></p>
<p>After CO<sub>2</sub> is removed and the remaining fragment is oxidized (making NADH), a 2-carbon <strong>acetyl group</strong> is left. It attaches to coenzyme A to form <strong>acetyl-CoA</strong>, which enters the Krebs cycle in the matrix.</p>`,
        note: "The game's one-word answer is \"acetyl\". In class, give the fuller answer: an <strong>acetyl group</strong> (CH<sub>3</sub>CO–), which joins coenzyme A to form <strong>acetyl-CoA</strong>. \"Acetyl\" on its own is not a molecule you would find free in the cell."
      },
      {
        tier: "essential",
        q: "Room 2 (the portal: pyruvate oxidation), clue 3: which high-energy electron carrier is formed during this process? (4 letters)",
        a: `<p><strong>Game answer: NADH</strong></p>
<p>As the 2-carbon fragment is oxidized, NAD<sup>+</sup> is reduced to NADH: 1 NADH per pyruvate, 2 per glucose. These NADH later deliver their electrons to complex I of the ETC.</p>`
      },
      {
        tier: "essential",
        q: "Room 3 (mitochondrion: Krebs and ETC), clue 1: I am the 4-carbon molecule that waits in the matrix to combine with acetyl-CoA. What am I? (12 letters)",
        a: `<p><strong>Game answer: oxaloacetate</strong></p>
<p>Oxaloacetate (4 C) combines with the acetyl group (2 C) of acetyl-CoA to form citrate (6 C), the first step of the Krebs cycle. Oxaloacetate is regenerated at the end of each turn, which is what makes the Krebs cycle a cycle.</p>`
      },
      {
        tier: "essential",
        q: "Room 3 (mitochondrion: Krebs and ETC), clue 2: I have a high electronegativity and wait at the end of the ETC to catch electrons. What element am I? (6 letters)",
        a: `<p><strong>Game answer: oxygen</strong></p>
<p>Oxygen is the <strong>final electron acceptor</strong>. Its high electronegativity pulls electrons down the whole chain. At complex IV, ½ O<sub>2</sub> + 2 e<sup>−</sup> + 2 H<sup>+</sup> → H<sub>2</sub>O. Without oxygen, the ETC stops (which is why cells turn to fermentation).</p>`,
        note: "The game asks for the element. In a written answer, say the final electron acceptor is <strong>molecular oxygen, O<sub>2</sub></strong>, which is reduced to water."
      },
      {
        tier: "essential",
        q: "Room 3 (mitochondrion: Krebs and ETC), clue 3: I am the enzyme complex that acts like a microscopic turbine. As protons flow through me, I join ADP and P<sub>i</sub>. What am I? (11 letters)",
        a: `<p><strong>Game answer: ATP synthase</strong> (the game ignores the space)</p>
<p>H<sup>+</sup> pumped into the intermembrane space flow back into the matrix through ATP synthase. The flow spins part of the enzyme like a turbine, and that motion drives ADP + P<sub>i</sub> → ATP. This is chemiosmosis (oxidative phosphorylation). The same kind of enzyme makes ATP in the thylakoid membrane of the chloroplast.</p>`,
        note: "The class slides also call this enzyme \"ATPase\" (the ATPase complex). Both names refer to the same protein; the game accepts only \"ATP synthase\"."
      },
      {
        tier: "essential",
        q: "Room 4 (thylakoid: light reactions), clue 1: what molecule is split (photolysis) to replace the lost electrons in photosystem II?",
        a: `<p><strong>Game answer: water</strong> (or H2O)</p>
<p>The Z protein (the water-splitting enzyme) splits water: H<sub>2</sub>O → 2 H<sup>+</sup> + 2 e<sup>−</sup> + ½ O<sub>2</sub>. The electrons replace those that light knocked out of P680, and the protons stay in the thylakoid lumen and add to the H<sup>+</sup> gradient.</p>`
      },
      {
        tier: "essential",
        q: "Room 4 (thylakoid: light reactions), clue 2: what crucial gas is released as a by-product of this splitting?",
        a: `<p><strong>Game answer: oxygen</strong> (or O2)</p>
<p>The oxygen atoms from split water pair up as O<sub>2</sub> and leave the leaf through the stomata. All the O<sub>2</sub> released by photosynthesis comes from water, not from CO<sub>2</sub>.</p>`
      },
      {
        tier: "essential",
        q: "Room 4 (thylakoid: light reactions), clue 3: what is the name of the protein-pigment complex that actively absorbs the photons of light? (11 letters)",
        a: `<p><strong>Game answer: photosystem</strong></p>
<p>A photosystem is a cluster of proteins, chlorophyll and accessory pigments embedded in the thylakoid membrane. Photosystem II (P680) and photosystem I (P700) absorb light energy and use it to excite electrons.</p>`,
        note: "The game's answer is the whole complex. In class, know its two parts: the <strong>antenna complex</strong> (the pigments that actually absorb the photons and pass the energy along) and the <strong>reaction centre</strong> (the chlorophyll a, P680 or P700, whose electron is excited and passed to the primary electron acceptor)."
      },
      {
        tier: "essential",
        q: "Room 5 (chloroplast: Calvin cycle), clue 1: to build one entire molecule of glucose, how many molecules of CO<sub>2</sub> must enter the cycle?",
        a: `<p><strong>Game answer: 6</strong></p>
<p>Each CO<sub>2</sub> supplies one carbon, and glucose has six. Every 3 CO<sub>2</sub> fixed gives one G3P product, and two G3P make one glucose. Cost per glucose: 18 ATP and 12 NADPH.</p>`
      },
      {
        tier: "essential",
        q: "Room 5 (chloroplast: Calvin cycle), clue 2: what is the name of the crucial enzyme that catalyzes the carbon fixation step?",
        a: `<p><strong>Game answer: RuBisCO</strong> (any capitals accepted by the game)</p>
<p>RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygenase) attaches CO<sub>2</sub> to RuBP (5 C), forming an unstable 6-carbon intermediate that splits into two PGA (3 C). Its oxygenase side can also attach O<sub>2</sub>, which causes photorespiration.</p>`,
        note: "Capitalization was stressed in class: write RuBisCO (the class slides spell it RuBisCo). The game does not check capitals, but a test might."
      },
      {
        tier: "essential",
        q: "Room 5 (chloroplast: Calvin cycle), clue 3: during the reduction phase, what is the abbreviation for the high-energy 3-carbon sugar produced? (3 characters)",
        a: `<p><strong>Game answer: G3P</strong></p>
<p>G3P is glyceraldehyde-3-phosphate. In the reduction phase, ATP phosphorylates PGA to 1,3-BPG, and NADPH reduces 1,3-BPG to G3P. One G3P out of every six leaves the cycle as the product; two of them make one glucose.</p>`,
        note: "G3P is also called PGAL (same molecule), but the game accepts only G3P."
      },
      {
        tier: "essential",
        q: "Room 6 (boss level: thermodynamics), clue 1: what type of reaction releases free energy (a negative ΔG)? (9 letters)",
        a: `<p><strong>Game answer: exergonic</strong></p>
<p>In an exergonic reaction, the products have less free energy than the reactants, so ΔG is negative and energy is released. Cellular respiration and ATP hydrolysis are exergonic. The opposite, endergonic (positive ΔG), needs an energy input, as photosynthesis does.</p>`,
        note: "Do not confuse exergonic (free energy, ΔG) with exothermic (heat). The game accepts only \"exergonic\"."
      },
      {
        tier: "essential",
        q: "Room 6 (boss level: thermodynamics), clue 2: to supply energy, ATP undergoes a _________ reaction to remove the terminal phosphate. (10 letters)",
        a: `<p><strong>Game answer: hydrolysis</strong></p>
<div class="eq">ATP + H<sub>2</sub>O → ADP + P<sub>i</sub> + energy</div>
<p>Water is used to break the bond to the third (terminal) phosphate, catalyzed by ATPase. The reaction is exergonic, and its energy is coupled to endergonic work such as muscle contraction or active transport.</p>`
      },
      {
        tier: "essential",
        q: "Room 6 (boss level: thermodynamics), clue 3: reactions like photosynthesis that build up molecules from smaller subunits are called _________. (8 letters)",
        a: `<p><strong>Game answer: anabolic</strong></p>
<p>Anabolic reactions build larger, more complex molecules from smaller ones and need an energy input (they are endergonic). Photosynthesis builds glucose from CO<sub>2</sub> and H<sub>2</sub>O. The opposite is catabolic, such as cellular respiration breaking glucose down.</p>`,
        note: "The noun is <em>anabolism</em>; the game (8 letters) wants the adjective \"anabolic\"."
      }
    ]
  }
);
