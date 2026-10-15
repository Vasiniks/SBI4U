window.LESSONS = window.LESSONS || [];

/* ===================================================================
   2.01 INTRO TO METABOLISM
   =================================================================== */
window.LESSONS.push({
  id: "2.01",
  title: "Intro to Metabolism",
  stage: "intro",
  where: "Whole cell",
  summary: "The vocabulary of energy in living things: catabolic vs anabolic, exergonic vs endergonic, activation energy, how ATP stores and releases energy, and how redox reactions and electron carriers move energy around. Every later lesson in this unit is built on these ideas.",
  objectives: [
    "Define metabolism and classify any reaction as catabolic or anabolic, and as exergonic or endergonic.",
    "Explain activation energy and why cells break down glucose in many small steps instead of burning it in one.",
    "Draw and label ATP (adenine, ribose, three phosphates) and explain why the phosphate groups make it energy-rich.",
    "Write the hydrolysis and synthesis reactions of the ATP/ADP cycle and say which is exergonic and which is endergonic.",
    "Explain energy coupling and phosphorylation using active transport and glucose-6-phosphate as examples.",
    "Use LEO says GER to identify what is oxidized, what is reduced, and which substance is the oxidizing or reducing agent.",
    "Identify NAD+/NADH and FAD/FADH2 as electron carriers and say which form is oxidized (empty) and which is reduced (full)."
  ],
  html: `
<h3 data-tier="essential">What metabolism is</h3>
<p><span class="term">Metabolism</span> is the <strong>sum of all the anabolic and catabolic reactions</strong> in a cell or organism. "Sum" matters. Metabolism is not one reaction or one pathway. It is everything chemical happening in you at once: building proteins, breaking down glucose, copying DNA, storing fat, getting rid of waste.</p>
<p>The first slide of the unit showed a huge wall-sized chart of every known metabolic pathway, a tangle of thousands of reactions. You do not need to know it. The point is that all of those reactions can be sorted into two kinds: reactions that <strong>break things down</strong> and reactions that <strong>build things up</strong>. Energy moves between the two kinds, and most of this unit is about how that happens.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>The class review key also accepts "the sum of the physical and chemical processes in an organism." Either way, the key word is <strong>sum</strong>: anabolic + catabolic together.</p></div>

<h3 data-tier="essential">Catabolic vs anabolic reactions</h3>
<div class="compare">
  <div>
    <h4>Catabolic (catabolism)</h4>
    <ul>
      <li><strong>Breaks down</strong> large molecules into smaller units.</li>
      <li>The smaller units are either <strong>oxidized to release energy</strong> or <strong>used as building blocks</strong> in anabolic reactions.</li>
      <li><strong>Releases</strong> energy, so it is <strong>exergonic</strong>.</li>
      <li>Examples: cellular respiration, digesting starch into glucose, breaking proteins into amino acids.</li>
    </ul>
  </div>
  <div>
    <h4>Anabolic (anabolism)</h4>
    <ul>
      <li><strong>Builds</strong> large molecules from smaller units.</li>
      <li>Needs an <strong>input</strong> of energy, so it is <strong>endergonic</strong>.</li>
      <li>Examples: making proteins from amino acids, joining glucose into glycogen, building DNA, photosynthesis.</li>
    </ul>
  </div>
</div>
<p>Why does breaking down release energy while building up costs energy? A big organic molecule like glucose holds a lot of <span class="term">potential (chemical) energy</span> in the arrangement of its atoms and electrons. Its products, CO<sub>2</sub> and H<sub>2</sub>O, are small, very stable, low-energy molecules. Going from high energy to low energy releases the difference. Building reverses this: you push atoms into a higher-energy arrangement, and that energy has to come from somewhere.</p>
<p>The two kinds of reaction depend on each other. Catabolism releases energy that anabolism needs, and catabolism also supplies the small building blocks (amino acids, sugars, acetyl groups) that anabolism assembles.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>C</strong>atabolic = <strong>C</strong>ut (or "cata-strophe": things fall apart). <strong>A</strong>nabolic = <strong>A</strong>ssemble (think anabolic steroids, which build muscle).</p></div>
<details class="check"><summary>Review question 1: Is cellular respiration anabolic or catabolic?</summary><div class="ans"><p><strong>Catabolic.</strong> Cellular respiration breaks one large molecule, glucose (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>), into smaller molecules (6 CO<sub>2</sub> and 6 H<sub>2</sub>O) and releases energy in the process, so it is also exergonic. Breaking down = catabolic.</p></div></details>

<h3 data-tier="essential">Exergonic vs endergonic: following the energy</h3>
<p>These two words describe <strong>free energy</strong>, the energy available to do work. Compare the energy of the reactants with the energy of the products:</p>
<ul>
  <li><span class="term">Exergonic</span> ("energy out"): the products have <strong>less</strong> free energy than the reactants, so energy is <strong>released</strong>. These reactions happen on their own (spontaneously) once they get started. Example: ATP → ADP + P<sub>i</sub>; glucose → CO<sub>2</sub> + H<sub>2</sub>O.</li>
  <li><span class="term">Endergonic</span> ("energy in"): the products have <strong>more</strong> free energy than the reactants, so energy must be <strong>absorbed</strong>. These reactions never happen on their own. Something has to pay for them. Example: ADP + P<sub>i</sub> → ATP; amino acids → protein.</li>
</ul>
<p>Catabolic reactions are exergonic and anabolic reactions are endergonic. The class slide on the ATP cycle listed examples of each:</p>
<div class="compare">
  <div><h4>Endergonic (requires energy)</h4><ul><li>Active transport</li><li>Cell movements (e.g. muscle contraction)</li><li>Anabolism (building molecules)</li><li>Synthesis of ATP from ADP + P<sub>i</sub></li></ul></div>
  <div><h4>Exergonic (releases energy)</h4><ul><li>Cellular respiration</li><li>Catabolism (breaking down molecules)</li><li>Hydrolysis of ATP to ADP + P<sub>i</sub></li></ul></div>
</div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Do not mix up "exergonic" with "fast". Exergonic only tells you the reaction <em>releases</em> energy overall. It says nothing about speed. Glucose sitting in a sugar bowl is in an exergonic situation (it "wants" to become CO<sub>2</sub> and H<sub>2</sub>O) but nothing happens for years. The reason is activation energy, next.</p></div>
<p data-tier="extra">In chemistry, free-energy change is written ΔG. Exergonic means ΔG is negative (energy leaves the system); endergonic means ΔG is positive. Complete oxidation of one mole of glucose has ΔG ≈ −2870 kJ/mol.</p>

<h3 data-tier="essential">Activation energy</h3>
<p><span class="term">Activation energy (E<sub>A</sub>)</span> is the <strong>minimum amount of free energy required to start a biochemical reaction</strong>. Even an exergonic reaction has to climb a small "hill" first: existing bonds have to be strained or broken before new, more stable bonds can form. Only after the molecules get over that hill does the reaction run downhill and release energy.</p>
<p><span class="term">Enzymes</span> are protein catalysts that <strong>lower the activation energy</strong>. They do this by holding reactants in the right position and straining the right bonds. The slide's "Enzyme action" graph showed two curves going from the same reactants (glucose + O<sub>2</sub>) to the same products (CO<sub>2</sub> + H<sub>2</sub>O). The curve without an enzyme has a tall hump; the curve with an enzyme has a much lower hump. Notice what <em>does not</em> change: the reactants start at the same energy and the products end at the same energy, so the <strong>overall energy released is identical</strong>. An enzyme changes how hard it is to <em>start</em>, not how much energy comes out.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Enzymes provide the energy for a reaction." No. Enzymes do not add energy and they do not change how much energy a reaction releases. They only lower E<sub>A</sub> so the reaction can start at body temperature, and they are not used up.</p></div>

<h3 data-tier="essential">Burning sugar vs respiring sugar</h3>
<p>You can release the energy in sugar two ways. Both start with sugar + O<sub>2</sub> and both end with CO<sub>2</sub> + H<sub>2</sub>O. The difference is the <strong>path</strong>.</p>
<figure class="diagram">
<svg viewBox="0 0 640 380" role="img" aria-labelledby="t201a">
<title id="t201a">Energy diagrams comparing direct combustion of sugar, with one large activation energy hill and all energy lost as heat, to cellular respiration, with many small activation energy steps whose energy is captured by carriers to make ATP. Both start and end at the same energy levels.</title>
<defs>
<marker id="ar201a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
<marker id="ar201b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--good)"/></marker>
</defs>
<text x="165" y="20" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Burning sugar (direct combustion)</text>
<text x="480" y="20" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Cellular respiration (stepwise)</text>
<line x1="322" y1="30" x2="322" y2="335" style="stroke:var(--line)" stroke-width="1.5"/>
<line x1="26" y1="335" x2="26" y2="40" style="stroke:var(--ink-2)" stroke-width="1.5" marker-end="url(#ar201a)"/>
<text x="16" y="200" font-family="inherit" font-size="12" text-anchor="middle" transform="rotate(-90 16 200)" style="fill:var(--ink-2)">Free energy</text>
<line x1="34" y1="120" x2="618" y2="120" style="stroke:var(--line)" stroke-dasharray="4 4"/>
<line x1="34" y1="300" x2="618" y2="300" style="stroke:var(--line)" stroke-dasharray="4 4"/>
<text x="168" y="38" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--proton)">Needs a flame to get over the hill</text>
<line x1="92" y1="46" x2="168" y2="46" style="stroke:var(--ink-2)" stroke-dasharray="3 3"/>
<line x1="100" y1="118" x2="100" y2="50" style="stroke:var(--proton)" stroke-width="1.5" marker-end="url(#ar201a)"/>
<text x="94" y="78" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--proton)">Large</text>
<text x="94" y="93" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--proton)">E<tspan dy="4" font-size="10">A</tspan></text>
<path d="M40,120 L124,120 C144,120 150,46 168,46 C188,46 192,300 222,300 L306,300" style="fill:none;stroke:var(--proton)" stroke-width="3"/>
<text x="40" y="138" font-family="inherit" font-size="12" style="fill:var(--ink)">glucose + O₂</text>
<text x="48" y="204" font-family="inherit" font-size="12" style="fill:var(--ink-2)">Uncontrolled release:</text>
<text x="48" y="220" font-family="inherit" font-size="12" style="fill:var(--ink-2)">energy lost as heat</text>
<text x="48" y="236" font-family="inherit" font-size="12" style="fill:var(--ink-2)">and light (fire)</text>
<text x="304" y="318" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--ink)">CO₂ + H₂O</text>
<text x="400" y="56" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--krebs)">Small E<tspan dy="4" font-size="10">A</tspan><tspan dy="-4"> at every step,</tspan></text>
<text x="400" y="72" font-family="inherit" font-size="12" style="fill:var(--krebs)">reachable at 37 °C with enzymes</text>
<path d="M332,120 L420,120 C423,120 424,104 427,104 C431,104 432,150 437,150 L451,150 C454,150 455,134 458,134 C462,134 463,180 468,180 L482,180 C485,180 486,164 489,164 C493,164 494,210 499,210 L513,210 C516,210 517,194 520,194 C524,194 525,240 530,240 L544,240 C547,240 548,224 551,224 C555,224 556,270 561,270 L575,270 C578,270 579,254 582,254 C586,254 587,300 592,300 L612,300" style="fill:none;stroke:var(--krebs)" stroke-width="3"/>
<line x1="436" y1="133" x2="449" y2="133" style="stroke:var(--good)" stroke-width="2" marker-end="url(#ar201b)"/>
<line x1="467" y1="163" x2="480" y2="163" style="stroke:var(--good)" stroke-width="2" marker-end="url(#ar201b)"/>
<line x1="498" y1="193" x2="511" y2="193" style="stroke:var(--good)" stroke-width="2" marker-end="url(#ar201b)"/>
<line x1="529" y1="223" x2="542" y2="223" style="stroke:var(--good)" stroke-width="2" marker-end="url(#ar201b)"/>
<line x1="560" y1="253" x2="573" y2="253" style="stroke:var(--good)" stroke-width="2" marker-end="url(#ar201b)"/>
<line x1="591" y1="283" x2="604" y2="283" style="stroke:var(--good)" stroke-width="2" marker-end="url(#ar201b)"/>
<text x="628" y="142" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--good)">Controlled release:</text>
<text x="628" y="158" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--good)">energy captured by</text>
<text x="628" y="174" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--good)">carriers → ATP</text>
<text x="334" y="138" font-family="inherit" font-size="12" style="fill:var(--ink)">glucose + O₂</text>
<text x="612" y="318" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--ink)">CO₂ + H₂O</text>
<text x="320" y="358" text-anchor="middle" font-family="inherit" font-size="12.5" style="fill:var(--ink)">Same start, same end, same total energy released. Only the path is different.</text>
</svg>
<figcaption>Left: burning needs one large activation energy (a flame) and dumps all the energy at once as heat and light. Right: respiration uses many small activation energies, each reachable at body temperature with an enzyme, so energy comes out in small, catchable packets.</figcaption>
</figure>
<div class="compare">
  <div>
    <h4>Direct combustion (burning)</h4>
    <ul>
      <li><strong>One large activation energy</strong>: needs a big input of heat (a flame) to start.</li>
      <li><strong>Uncontrolled release</strong>: all the energy comes out at once.</li>
      <li>The energy is <strong>lost as heat and light</strong>. None of it is captured to do useful work in a cell.</li>
    </ul>
  </div>
  <div>
    <h4>Stepwise oxidation (cellular respiration)</h4>
    <ul>
      <li><strong>Many small activation energies</strong>, each one low enough to be reached at <strong>normal core body temperature</strong> (with enzymes).</li>
      <li><strong>Controlled release</strong>: a little energy comes out at each step.</li>
      <li>The energy is <strong>transferred to carrier molecules</strong> (NADH, FADH<sub>2</sub>) by <strong>redox reactions</strong> and then <strong>used to synthesize ATP</strong>.</li>
    </ul>
  </div>
</div>
<p>This is the main idea of the unit, so it is worth understanding <em>why</em> the cell does it this way:</p>
<ol>
  <li><strong>The cell cannot survive a flame.</strong> The temperature needed to get glucose over one huge E<sub>A</sub> would denature every protein in the cell. Breaking the job into many steps means each E<sub>A</sub> is small, and enzymes make each one reachable at 37 °C.</li>
  <li><strong>Energy released in one burst cannot be caught.</strong> The cell's energy "containers" (ATP, NADH, FADH<sub>2</sub>) each hold a fairly small, fixed amount of energy. Releasing energy in small packets that roughly match the size of these containers lets the cell capture a large share of it instead of losing it all as heat.</li>
  <li><strong>Steps can be controlled.</strong> Each step has its own enzyme, so the cell can speed up or slow down the whole pathway by turning particular enzymes on or off (you will see this with PFK and PDH later in the unit).</li>
</ol>
<div class="callout key"><p class="callout-title">On the test</p><p>Slide wording to know: "Cellular respiration is the <strong>controlled breakdown of organic molecules over many steps</strong>. The energy released can be <strong>captured via redox reactions</strong> and used to generate ATP."</p></div>

<h3 data-tier="likely">Why you are warm: body heat</h3>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Body heat comes from cellular respiration <strong>not being 100% efficient</strong>. Respiration is exergonic, and the part of the released energy that does not end up in ATP is given off as heat.</p></div>
<p>This is the second law of thermodynamics in action: no energy conversion is perfect, and every conversion loses some energy as heat. Even with all those small, controlled steps, your cells capture somewhere around a third to two-fifths of glucose's energy in ATP. The rest becomes heat. For a warm-blooded animal that "waste" is useful: it keeps your core near 37 °C, which is the temperature your enzymes work best at. It is also why you heat up during exercise. You are running respiration faster, so you are also releasing more heat.</p>
<details class="check"><summary>Why do you get hot when you exercise hard?</summary><div class="ans"><p>Working muscles need far more ATP, so their cells run cellular respiration much faster. Because respiration is not 100% efficient, a large share of the energy released from glucose is lost as heat instead of being captured in ATP. More respiration means more heat.</p></div></details>

<h3 data-tier="essential">ATP: structure</h3>
<p><span class="term">ATP (adenosine triphosphate)</span> is <strong>the primary source of free energy for living cells</strong>. Think of it as the cell's energy currency: catabolism "earns" ATP and almost every energy-requiring job "spends" it. You must know its three components:</p>
<figure class="diagram">
<svg viewBox="0 0 640 290" role="img" aria-labelledby="t201b">
<title id="t201b">Structure of ATP: an adenine base (double ring) bonded to a ribose sugar (five-sided ring), which is bonded to a chain of three phosphate groups labelled alpha, beta and gamma. Brackets show adenosine (adenine plus ribose), AMP (one phosphate), ADP (two phosphates) and ATP (three phosphates). The bond to the terminal gamma phosphate is the one broken in hydrolysis.</title>
<path d="M54,100 L54,92 L266,92 L266,100" style="fill:none;stroke:var(--ink-2)" stroke-width="1.5"/>
<text x="272" y="97" font-family="inherit" font-size="12" style="fill:var(--ink-2)">Adenosine</text>
<path d="M54,82 L54,74 L344,74 L344,82" style="fill:none;stroke:var(--ink-2)" stroke-width="1.5"/>
<text x="350" y="79" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink-2)">AMP</text>
<path d="M54,64 L54,56 L424,56 L424,64" style="fill:none;stroke:var(--ink-2)" stroke-width="1.5"/>
<text x="430" y="61" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink-2)">ADP</text>
<path d="M54,46 L54,38 L504,38 L504,46" style="fill:none;stroke:var(--ink)" stroke-width="1.5"/>
<text x="510" y="43" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">ATP</text>
<polygon points="88,116 117.4,133 117.4,167 88,184 58.6,167 58.6,133" style="fill:var(--etc-soft);stroke:var(--etc)" stroke-width="2"/>
<polygon points="117.4,133 149.7,122.5 169.7,150 149.7,177.5 117.4,167" style="fill:var(--etc-soft);stroke:var(--etc)" stroke-width="2"/>
<text x="88" y="155" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--etc)">N</text>
<text x="143" y="155" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--etc)">N</text>
<line x1="169.7" y1="150" x2="198" y2="165" style="stroke:var(--ink)" stroke-width="2"/>
<polygon points="230,142 262,165 250,203 210,203 198,165" style="fill:var(--krebs-soft);stroke:var(--krebs)" stroke-width="2"/>
<text x="230" y="160" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--krebs)">O</text>
<text x="230" y="186" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--krebs)">5 C</text>
<line x1="262" y1="165" x2="292" y2="152" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="344" y1="150" x2="372" y2="150" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="424" y1="150" x2="452" y2="150" style="stroke:var(--proton)" stroke-width="3"/>
<line x1="438" y1="108" x2="438" y2="194" style="stroke:var(--proton)" stroke-width="1.5" stroke-dasharray="4 3"/>
<circle cx="318" cy="150" r="26" style="fill:var(--glyco-soft);stroke:var(--glyco)" stroke-width="2"/>
<circle cx="398" cy="150" r="26" style="fill:var(--glyco-soft);stroke:var(--glyco)" stroke-width="2"/>
<circle cx="478" cy="150" r="26" style="fill:var(--glyco-soft);stroke:var(--glyco)" stroke-width="2"/>
<text x="318" y="155" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">P</text>
<text x="398" y="155" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">P</text>
<text x="478" y="155" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">P</text>
<text x="337" y="124" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--proton)">−</text>
<text x="417" y="124" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--proton)">−</text>
<text x="497" y="124" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--proton)">2−</text>
<text x="318" y="118" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">α</text>
<text x="398" y="118" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">β</text>
<text x="478" y="118" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">γ</text>
<text x="438" y="212" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--proton)">broken in hydrolysis</text>
<text x="100" y="236" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--etc)">Adenine</text>
<text x="100" y="252" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">purine</text>
<text x="100" y="267" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">nitrogenous base</text>
<text x="230" y="236" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--krebs)">Ribose</text>
<text x="230" y="252" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">5-carbon sugar</text>
<text x="230" y="267" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">(same sugar as RNA)</text>
<text x="398" y="236" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--glyco)">3 phosphate groups</text>
<text x="398" y="252" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">all negatively charged,</text>
<text x="398" y="267" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">crowded together</text>
</svg>
<figcaption>ATP = adenine + ribose + a chain of three phosphates. Adenine + ribose alone is called adenosine. Remove the terminal (γ) phosphate and ATP becomes ADP; remove another and it becomes AMP.</figcaption>
</figure>
<div class="table-wrap"><table class="data">
<thead><tr><th>Component</th><th>What it is</th><th>Why it is worth remembering</th></tr></thead>
<tbody>
<tr><td><strong>Adenine</strong></td><td>A <strong>purine nitrogenous base</strong> (double ring of carbon and nitrogen)</td><td>The same "A" base found in DNA and RNA. The "aden-" in adenosine.</td></tr>
<tr><td><strong>Ribose</strong></td><td>A <strong>5-carbon sugar</strong></td><td>The same sugar found in <strong>RNA</strong> (not deoxyribose, which is in DNA).</td></tr>
<tr><td><strong>3 phosphate groups</strong></td><td>A chain of three PO<sub>4</sub> groups (α, β, γ, counting out from the ribose)</td><td>The "tri-phosphate". This is where the usable energy is. All are <strong>negatively charged</strong>.</td></tr>
</tbody></table></div>
<p>Breaking the name down helps you remember the structure: <strong>adenos-ine</strong> (adenine + ribose) + <strong>tri-</strong> (three) + <strong>phosphate</strong>. ADP is adenosine <strong>di</strong>phosphate (two phosphates) and AMP is adenosine <strong>mono</strong>phosphate (one).</p>
<p data-tier="extra">ATP is basically an RNA nucleotide (adenine + ribose + phosphate) with two extra phosphates attached. When a cell builds RNA, it actually uses ATP as one of its raw materials and snips off two of the phosphates. One molecule, two jobs.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>The notes say <strong>"KNOW THE COMPONENTS."</strong> Be ready to label a diagram of ATP with: purine nitrogenous base (adenine), 5-carbon sugar (ribose), and chain of 3 phosphate groups. Also be ready to point to the bond that is broken in hydrolysis (the one holding the terminal phosphate).</p></div>

<h3 data-tier="essential">Why ATP's phosphates hold so much energy</h3>
<p>Each phosphate group carries <strong>negative charge</strong>. In ATP, three of these negative groups are lined up right next to each other along a short chain. Like charges repel, so the phosphates are constantly "pushing" against each other. The molecule is a bit like a <strong>compressed spring</strong> or a stack of magnets forced together with their like poles facing: it is <strong>unstable</strong> and holds a lot of potential energy.</p>
<p>When the terminal phosphate is removed, that repulsion is relieved. The products, ADP and a free phosphate (P<sub>i</sub>), are much <strong>more stable</strong> (lower in free energy) than ATP was. The difference in energy is what is released. That is why the notes say the phosphates are "all negative, want to get away from each other → energy."</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>You will hear "the energy is stored in the phosphate bond." That is shorthand. Breaking any bond actually <em>costs</em> a little energy. The energy is released because the <strong>products (ADP + P<sub>i</sub>) are much more stable than ATP</strong>, so the reaction as a whole goes downhill. If a question asks <em>why</em> ATP is energy-rich, talk about the <strong>repelling negative charges</strong> and the <strong>instability</strong> of ATP compared with ADP + P<sub>i</sub>.</p></div>
<p data-tier="extra">Two more reasons the products are so stable: the freed phosphate can spread its negative charge over several oxygen atoms (resonance), and both ADP and P<sub>i</sub> are surrounded and stabilized by water molecules more easily than ATP is. Under standard conditions, hydrolyzing ATP releases about 30.5 kJ/mol; inside a real cell it is closer to 50 kJ/mol.</p>

<h3 data-tier="essential">Hydrolysis and synthesis: the ATP/ADP cycle</h3>
<p>ATP is not a long-term energy store (that is what glycogen and fat are for). It is a rechargeable battery that is spent and recharged constantly.</p>
<h4>Hydrolysis: spending ATP (exergonic)</h4>
<div class="eq">ATP + H<sub>2</sub>O → ADP + P<sub>i</sub> + energy</div>
<p><span class="term">Hydrolysis</span> means "splitting with water." A water molecule is used to break off the <strong>terminal phosphate</strong>. ATP <strong>loses one phosphate group and releases energy</strong>, so hydrolysis is <strong>exergonic</strong>. This is the reaction that powers cell work. The enzyme that catalyzes it is called an <span class="term">ATPase</span>.</p>
<h4>Synthesis: recharging ATP (endergonic)</h4>
<div class="eq">ADP + P<sub>i</sub> + energy → ATP + H<sub>2</sub>O</div>
<p>To rebuild ATP, ADP must <strong>gain an inorganic phosphate</strong> (P<sub>i</sub>). This forces a negative phosphate back onto a chain that repels it, so it <strong>requires energy</strong>: synthesis is <strong>endergonic</strong> (and anabolic, since it builds a bigger molecule). The energy comes from catabolism, mainly cellular respiration. That is the whole point of the rest of this unit: <strong>cellular respiration exists to recharge ADP into ATP.</strong></p>
<figure class="diagram">
<svg viewBox="0 0 640 290" role="img" aria-labelledby="t201c">
<title id="t201c">The ATP/ADP cycle. ATP is hydrolyzed to ADP plus inorganic phosphate, an exergonic reaction that releases energy for work such as active transport and movement. ADP plus inorganic phosphate is synthesized back into ATP, an endergonic reaction that needs energy from catabolism such as cellular respiration.</title>
<defs>
<marker id="ar201c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
</defs>
<rect x="250" y="26" width="140" height="56" rx="12" style="fill:var(--glyco-soft);stroke:var(--glyco)" stroke-width="2"/>
<text x="320" y="52" text-anchor="middle" font-family="inherit" font-size="18" font-weight="700" style="fill:var(--ink)">ATP</text>
<text x="320" y="71" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">"charged battery"</text>
<rect x="240" y="212" width="160" height="56" rx="12" style="fill:var(--surface-2);stroke:var(--ink-2)" stroke-width="2"/>
<text x="320" y="238" text-anchor="middle" font-family="inherit" font-size="18" font-weight="700" style="fill:var(--ink)">ADP + Pᵢ</text>
<text x="320" y="257" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">"empty battery"</text>
<path d="M396,60 Q480,140 410,212" style="fill:none;stroke:var(--proton)" stroke-width="4" marker-end="url(#ar201c)"/>
<path d="M232,236 Q160,140 244,62" style="fill:none;stroke:var(--good)" stroke-width="4" marker-end="url(#ar201c)"/>
<text x="320" y="138" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">ATP + H₂O ⇌ ADP + Pᵢ</text>
<text x="320" y="156" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">right side: hydrolysis</text>
<text x="320" y="172" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">left side: synthesis</text>
<text x="472" y="100" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--proton)">Hydrolysis</text>
<text x="472" y="118" font-family="inherit" font-size="12" style="fill:var(--ink)">exergonic:</text>
<text x="472" y="134" font-family="inherit" font-size="12" style="fill:var(--ink)">releases energy</text>
<text x="472" y="160" font-family="inherit" font-size="12" style="fill:var(--ink-2)">Energy powers work:</text>
<text x="472" y="176" font-family="inherit" font-size="12" style="fill:var(--ink-2)">active transport,</text>
<text x="472" y="192" font-family="inherit" font-size="12" style="fill:var(--ink-2)">movement, anabolism</text>
<text x="168" y="100" text-anchor="end" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--good)">Synthesis</text>
<text x="168" y="118" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--ink)">endergonic:</text>
<text x="168" y="134" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--ink)">requires energy</text>
<text x="168" y="160" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--ink-2)">Energy comes from</text>
<text x="168" y="176" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--ink-2)">catabolism, e.g.</text>
<text x="168" y="192" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--ink-2)">cellular respiration</text>
</svg>
<figcaption>The ATP/ADP cycle. Catabolism (left) recharges ADP into ATP; cell work (right) spends ATP back down to ADP + P<sub>i</sub>.</figcaption>
</figure>
<h4>Inorganic phosphate (P<sub>i</sub>)</h4>
<p><span class="term">Inorganic phosphate (P<sub>i</sub>)</span> is a free phosphate ion floating in the cytoplasm, not attached to any carbon-based molecule. That is what "inorganic" means here. The "i" in P<sub>i</sub> stands for inorganic. Cells keep a supply of it, which the glycolysis slides call the "<strong>cellular pool</strong>" of phosphate. You will see P<sub>i</sub> again in step 6 of glycolysis, where it is added to a sugar <em>without</em> spending ATP.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>The class answer key's battery picture: <strong>ATP = fully charged battery</strong> (three phosphates, the third held on by an unstable, energy-packed bond). <strong>ADP = dead battery</strong> (two phosphates, waiting to be recharged). Cellular respiration is the charger.</p></div>
<p data-tier="extra">Your body only holds a few grams of ATP at any moment, but you hydrolyze and rebuild roughly your own body mass of ATP every day. Each ATP molecule is recycled thousands of times. That is why the cycle has to run constantly, and why a poison that stops ATP synthesis (like cyanide, in the case study) can kill within minutes.</p>
<details class="check"><summary>Review question 2: How are ATP and ADP linked?</summary><div class="ans"><p>They are two forms of the same molecule, connected by one phosphate group. ATP has three phosphate groups; ADP has two.</p><ul><li><strong>ATP → ADP:</strong> when a cell needs energy, the terminal phosphate of ATP is removed by hydrolysis (catalyzed by ATPase): ATP + H<sub>2</sub>O → ADP + P<sub>i</sub> + energy. This is <strong>exergonic</strong>.</li><li><strong>ADP → ATP:</strong> the reaction can be reversed by synthesis: ADP + P<sub>i</sub> + energy → ATP. This is <strong>endergonic</strong>, and the energy comes from catabolism such as cellular respiration.</li></ul><p>So ATP is the "charged battery" and ADP is the "empty battery." They are constantly converted back and forth in the ATP/ADP cycle.</p></div></details>
<details class="check"><summary>Is making ATP from ADP + P<sub>i</sub> anabolic or catabolic? Exergonic or endergonic?</summary><div class="ans"><p>Anabolic (building a larger molecule) and endergonic (requires energy). That is exactly why it has to be powered by something exergonic, like the breakdown of glucose.</p></div></details>

<h3 data-tier="essential">Energy coupling and phosphorylation</h3>
<p>A cell constantly needs to run endergonic reactions (build proteins, pump ions, contract muscles). They will not happen on their own. The cell's solution is <span class="term">energy coupling</span>: <strong>using the energy released by an exergonic reaction to drive an endergonic reaction.</strong> The exergonic reaction almost always used is ATP hydrolysis.</p>
<p>From the slides: <strong>when the cell needs free energy to drive an endergonic (energy-absorbing) reaction, ATPase catalyzes the hydrolysis of the terminal phosphate of an ATP molecule. The released energy powers the endergonic reaction by transferring the inorganic phosphate group.</strong></p>
<p>That last part is the key. In most coupled reactions, ATP's energy is not released as loose heat and then somehow "picked up" by another reaction. Instead, the <strong>terminal phosphate is moved directly onto another molecule</strong>. This is called <span class="term">phosphorylation</span>: adding a phosphate group to a molecule.</p>
<p>Why does attaching a phosphate help? The molecule that receives the phosphate now carries a bulky, <strong>negatively charged</strong> group. This makes it <strong>less stable and more reactive</strong> (higher in free energy), or, for a protein, it <strong>changes the protein's shape</strong>. Either way, part of ATP's energy has been handed over to that molecule, and it can now do something it could not do before.</p>
<div class="callout key"><p class="callout-title">On the test</p><ul><li>Coupling = an exergonic reaction drives an endergonic one.</li><li>The link is usually <strong>phosphorylation</strong>: ATP's terminal phosphate is transferred to another molecule.</li><li><strong>Adding a phosphate makes a molecule more negatively charged</strong> (and more reactive, or changes its shape).</li></ul></div>
<h4>Active transport: ATP phosphorylates carrier proteins</h4>
<p>Moving molecules or ions <strong>against their concentration gradient</strong> (from low concentration to high) is endergonic. It is like pushing a ball uphill. Carrier proteins in the membrane do this using ATP: <strong>ATP phosphorylates the protein carrier, which changes its shape and moves molecules/ions against their concentration gradient.</strong></p>
<figure class="diagram">
<svg viewBox="0 0 640 300" role="img" aria-labelledby="t201d">
<title id="t201d">Active transport. Panel 1: a carrier protein open to the outside of the cell binds a molecule from the low-concentration side while ATP inside the cell transfers a phosphate to the carrier, leaving ADP. Panel 2: the phosphorylated carrier has changed shape, is now open to the inside, and releases the molecule into the high-concentration side.</title>
<defs>
<marker id="ar201d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
</defs>
<text x="320" y="20" text-anchor="middle" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--ink)">Outside the cell: LOW concentration</text>
<text x="320" y="258" text-anchor="middle" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--ink)">Inside the cell: HIGH concentration</text>
<rect x="10" y="104" width="620" height="56" style="fill:var(--surface-2);stroke:var(--line)"/>
<text x="20" y="98" font-family="inherit" font-size="11" style="fill:var(--ink-2)">cell membrane</text>
<circle cx="70" cy="50" r="7" style="fill:var(--proton)"/>
<circle cx="250" cy="60" r="7" style="fill:var(--proton)"/>
<circle cx="420" cy="48" r="7" style="fill:var(--proton)"/>
<circle cx="590" cy="62" r="7" style="fill:var(--proton)"/>
<circle cx="40" cy="190" r="7" style="fill:var(--proton)"/><circle cx="62" cy="214" r="7" style="fill:var(--proton)"/><circle cx="86" cy="192" r="7" style="fill:var(--proton)"/><circle cx="104" cy="224" r="7" style="fill:var(--proton)"/>
<circle cx="370" cy="214" r="7" style="fill:var(--proton)"/><circle cx="394" cy="194" r="7" style="fill:var(--proton)"/><circle cx="572" cy="224" r="7" style="fill:var(--proton)"/><circle cx="590" cy="196" r="7" style="fill:var(--proton)"/><circle cx="612" cy="220" r="7" style="fill:var(--proton)"/>
<path d="M126,88 L126,176 L194,176 L194,88 L172,88 L172,140 Q160,156 148,140 L148,88 Z" style="fill:var(--etc-soft);stroke:var(--etc)" stroke-width="2"/>
<circle cx="160" cy="118" r="7" style="fill:var(--proton)"/>
<line x1="160" y1="56" x2="160" y2="100" style="stroke:var(--proton)" stroke-width="1.5" stroke-dasharray="3 3" marker-end="url(#ar201d)"/>
<text x="232" y="196" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--glyco)">ATP</text>
<path d="M226,192 Q206,186 200,172" style="fill:none;stroke:var(--glyco)" stroke-width="2" marker-end="url(#ar201d)"/>
<text x="232" y="214" font-family="inherit" font-size="12" style="fill:var(--ink-2)">→ ADP</text>
<circle cx="190" cy="172" r="9" style="fill:var(--glyco-soft);stroke:var(--glyco)" stroke-width="1.5"/>
<text x="190" y="176" text-anchor="middle" font-family="inherit" font-size="11" font-weight="700" style="fill:var(--ink)">P</text>
<line x1="296" y1="80" x2="344" y2="80" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar201d)"/>
<text x="320" y="72" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">then</text>
<path d="M446,88 L446,176 L468,176 L468,124 Q480,108 492,124 L492,176 L514,176 L514,88 Z" style="fill:var(--etc-soft);stroke:var(--etc)" stroke-width="2"/>
<circle cx="480" cy="160" r="7" style="fill:var(--proton)"/>
<line x1="480" y1="170" x2="480" y2="214" style="stroke:var(--proton)" stroke-width="1.5" stroke-dasharray="3 3" marker-end="url(#ar201d)"/>
<circle cx="518" cy="176" r="9" style="fill:var(--glyco-soft);stroke:var(--glyco)" stroke-width="1.5"/>
<text x="518" y="180" text-anchor="middle" font-family="inherit" font-size="11" font-weight="700" style="fill:var(--ink)">P</text>
<text x="160" y="282" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">1. Molecule binds; ATP phosphorylates carrier</text>
<text x="480" y="282" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">2. Shape changes; molecule released inside</text>
</svg>
<figcaption>Active transport powered by phosphorylation. The phosphate from ATP changes the carrier's shape so it opens to the other side. Afterward the phosphate is released as P<sub>i</sub> and the carrier snaps back, ready to go again.</figcaption>
</figure>
<p>Why does a phosphate change a protein's shape? A protein's shape is held together by attractions and repulsions between the charged and polar parts of its amino acids. Dropping a large negative charge onto one spot rearranges those interactions, so the protein shifts into a new shape. For a carrier, the new shape opens to the other side of the membrane. When the phosphate is later removed, the protein snaps back.</p>
<p data-tier="extra">The best-known example is the sodium–potassium pump in nerve cells: for each ATP it hydrolyzes, it pushes 3 Na<sup>+</sup> out of the cell and 2 K<sup>+</sup> in, both against their gradients. In some cells this one pump uses a third or more of all the ATP made.</p>

<h3 data-tier="likely">Phosphorylation in action: two more examples</h3>
<h4>Tyrosine → phosphotyrosine</h4>
<p>One slide showed the amino acid <strong>tyrosine</strong> next to an ATP molecule. Tyrosine has an –OH group on its side chain. The terminal phosphate of ATP is transferred onto that –OH, producing <strong>phosphotyrosine</strong> and leaving <strong>ADP</strong> behind:</p>
<div class="eq">tyrosine + ATP → phosphotyrosine + ADP</div>
<p>This is phosphorylation of an amino acid. The tyrosine now carries a negatively charged phosphate group. When this happens to a tyrosine inside a protein, the new negative charge changes the protein's shape and switches its activity on or off. Cells use this constantly as an on/off switch for enzymes and signalling proteins. The notes put it simply: "adding a phosphate to amino acids or other things makes them <strong>negatively</strong> charged."</p>
<p data-tier="extra">Enzymes that move a phosphate from ATP onto another molecule are called <span class="term">kinases</span>. You will meet several in glycolysis: hexokinase, phosphofructokinase, phosphoglycerate kinase, pyruvate kinase. The slides use the general word "ATPase" for an enzyme that splits ATP's terminal phosphate. A kinase is a kind of enzyme that does this and passes the phosphate straight on to another molecule.</p>
<h4>Glucose → glucose-6-phosphate: trapping glucose in the cell</h4>
<p>The other coupling slide showed glucose being phosphorylated: ATP → ADP, and glucose becomes <strong>glucose-6-phosphate</strong> (a phosphate added to carbon 6). This is the very first step of glycolysis, and it does more than just add energy.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>When glucose enters glycolysis it gets phosphorylated into glucose-6-phosphate. Because G6P is <strong>different from normal glucose</strong>, the <strong>channel/transport proteins recognize glucose but not glucose-6-phosphate</strong>. So G6P stays <strong>trapped inside the cell</strong>, and the concentration of <em>normal</em> glucose inside the cell stays <strong>low</strong>. That low concentration means glucose keeps moving <strong>down its concentration gradient into the cell</strong>.</p></div>
<p>Here is the logic step by step:</p>
<ol>
  <li>Glucose enters cells through transport proteins by facilitated diffusion, which only works <strong>down a concentration gradient</strong> (from high outside to low inside).</li>
  <li>As soon as glucose gets inside, it is phosphorylated to glucose-6-phosphate.</li>
  <li>The glucose transporter's binding site fits glucose, not glucose-6-phosphate. And the added phosphate is negatively charged, so G6P cannot slip through the hydrophobic middle of the membrane either. <strong>G6P is trapped.</strong></li>
  <li>Since incoming glucose is immediately turned into something else, the concentration of <em>free glucose</em> inside stays low. The gradient never "fills up," so <strong>glucose keeps flowing in</strong>.</li>
</ol>
<p>So one phosphorylation does three jobs: it starts destabilizing glucose (you will see why that matters in glycolysis), it traps it in the cell, and it keeps the glucose gradient pointing inward.</p>
<details class="check"><summary>A cell keeps converting glucose to glucose-6-phosphate. What would happen to glucose uptake if this step were blocked?</summary><div class="ans"><p>Glucose uptake would slow and then stop. Free glucose would build up inside the cell until the inside concentration matched the outside, so there would be no more gradient for facilitated diffusion. Any glucose that got in could also leak back out, because the transporter recognizes glucose (but not G6P).</p></div></details>

<h3 data-tier="essential">Redox reactions</h3>
<p>Remember the slide: respiration's energy is "captured via <strong>redox reactions</strong>." This is how energy is actually moved out of glucose.</p>
<p><span class="term">Redox reactions</span> (reduction–oxidation reactions) are <strong>chemical reactions that involve the transfer of electrons from one reactant to another</strong>.</p>
<ul>
  <li>The process of <strong>losing</strong> electrons is called <span class="term">oxidation</span>.</li>
  <li>The process of <strong>gaining</strong> electrons is called <span class="term">reduction</span>.</li>
</ul>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>LEO the lion says GER</strong>: <strong>L</strong>ose <strong>E</strong>lectrons = <strong>O</strong>xidized; <strong>G</strong>ain <strong>E</strong>lectrons = <strong>R</strong>educed. (Another version: OIL RIG, Oxidation Is Loss, Reduction Is Gain.) "Reduced" sounds like it should mean "lost something," but think of it as the <em>charge</em> being reduced: electrons are negative, so gaining them makes the charge more negative (lower).</p></div>
<p>An electron cannot just vanish. If one substance loses electrons, another must gain them. So <strong>oxidation and reduction always happen together</strong>, which is why we call it a redox reaction and not just an "ox" or "red" reaction.</p>
<h4>The four labels</h4>
<p>Every redox reaction has a donor and an acceptor, and each gets two labels. This is where most students lose marks, so learn it as a table:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Electron donor</th><th>Electron acceptor</th></tr></thead>
<tbody>
<tr><td>What happens to it</td><td><strong>Loses</strong> electrons → it is <strong>oxidized</strong></td><td><strong>Gains</strong> electrons → it is <strong>reduced</strong></td></tr>
<tr><td>What it is called</td><td>The <strong>reducing agent</strong></td><td>The <strong>oxidizing agent</strong></td></tr>
<tr><td>Why that name</td><td>It <em>causes</em> the other substance to be reduced (by giving it electrons)</td><td>It <em>causes</em> the other substance to be oxidized (by taking its electrons)</td></tr>
</tbody></table></div>
<figure class="diagram">
<svg viewBox="0 0 640 250" role="img" aria-labelledby="t201e">
<title id="t201e">Redox reaction. Compound A, the electron donor and reducing agent, transfers two electrons to compound B, the electron acceptor and oxidizing agent. A loses electrons and is oxidized; B gains electrons and is reduced.</title>
<defs>
<marker id="ar201e" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
</defs>
<text x="150" y="22" text-anchor="middle" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--krebs)">Electron donor = reducing agent</text>
<text x="490" y="22" text-anchor="middle" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--etc)">Electron acceptor = oxidizing agent</text>
<circle cx="150" cy="70" r="30" style="fill:var(--krebs-soft);stroke:var(--krebs)" stroke-width="2"/>
<text x="150" y="76" text-anchor="middle" font-family="inherit" font-size="18" font-weight="700" style="fill:var(--ink)">A</text>
<circle cx="186" cy="52" r="10" style="fill:var(--surface);stroke:var(--proton)" stroke-width="1.5"/><text x="186" y="56" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--proton)">e⁻</text>
<circle cx="188" cy="82" r="10" style="fill:var(--surface);stroke:var(--proton)" stroke-width="1.5"/><text x="188" y="86" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--proton)">e⁻</text>
<circle cx="490" cy="70" r="30" style="fill:var(--etc-soft);stroke:var(--etc)" stroke-width="2"/>
<text x="490" y="76" text-anchor="middle" font-family="inherit" font-size="18" font-weight="700" style="fill:var(--ink)">B</text>
<line x1="210" y1="68" x2="452" y2="68" style="stroke:var(--proton)" stroke-width="2.5" marker-end="url(#ar201e)"/>
<text x="330" y="60" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--proton)">2 e⁻ transferred</text>
<line x1="150" y1="104" x2="150" y2="150" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar201e)"/>
<line x1="490" y1="104" x2="490" y2="150" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar201e)"/>
<text x="320" y="120" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">LEO the lion says GER</text>
<text x="320" y="138" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">Lose e⁻ = Oxidized · Gain e⁻ = Reduced</text>
<circle cx="150" cy="186" r="30" style="fill:var(--krebs-soft);stroke:var(--krebs)" stroke-width="2"/>
<text x="150" y="192" text-anchor="middle" font-family="inherit" font-size="18" font-weight="700" style="fill:var(--ink)">A</text>
<circle cx="490" cy="186" r="30" style="fill:var(--etc-soft);stroke:var(--etc)" stroke-width="2"/>
<text x="490" y="192" text-anchor="middle" font-family="inherit" font-size="18" font-weight="700" style="fill:var(--ink)">B</text>
<circle cx="528" cy="168" r="10" style="fill:var(--surface);stroke:var(--proton)" stroke-width="1.5"/><text x="528" y="172" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--proton)">e⁻</text>
<circle cx="530" cy="198" r="10" style="fill:var(--surface);stroke:var(--proton)" stroke-width="1.5"/><text x="530" y="202" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--proton)">e⁻</text>
<text x="150" y="240" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--krebs)">A is OXIDIZED (lost e⁻)</text>
<text x="490" y="240" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--etc)">B is REDUCED (gained e⁻)</text>
</svg>
<figcaption>A gives its electrons away, so A is oxidized and is the reducing agent. B takes the electrons, so B is reduced and is the oxidizing agent.</figcaption>
</figure>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The agent is the <strong>opposite</strong> of what happens to it. The <strong>reducing agent gets oxidized</strong>; the <strong>oxidizing agent gets reduced</strong>. If you write "the oxidizing agent is oxidized," you have it backwards. A useful check: an agent is named for what it <em>does to the other substance</em>, the way a travel agent does your booking, not their own.</p></div>
<h4>Electrons travel with hydrogen in biology</h4>
<p>In cells, electrons are usually moved along with hydrogen. A hydrogen atom is one proton (H<sup>+</sup>) plus one electron (e<sup>−</sup>). So when an enzyme pulls two hydrogen atoms off a molecule, it is really taking two electrons (and two protons). This gives you a shortcut for spotting redox in biology:</p>
<ul>
  <li><strong>Losing hydrogen (or gaining oxygen) usually means oxidation.</strong></li>
  <li><strong>Gaining hydrogen (or losing oxygen) usually means reduction.</strong></li>
</ul>
<p>Look at cellular respiration as a whole with this in mind. <strong>Glucose</strong> (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>) loses its hydrogens and ends up as CO<sub>2</sub>, so <strong>glucose is oxidized</strong>. <strong>Oxygen</strong> (O<sub>2</sub>) gains hydrogens and ends up as H<sub>2</sub>O, so <strong>oxygen is reduced</strong>. Enzymes whose names end in <strong>-dehydrogenase</strong> ("remove hydrogen") are the ones carrying out these oxidations, and you will meet several.</p>
<p data-tier="extra">Why does moving electrons release energy at all? Electrons held loosely (as in the C–H bonds of glucose) are high in energy. Oxygen is extremely electronegative: it pulls electrons very strongly and holds them tightly. As electrons move from glucose toward oxygen, they "fall" from a loosely held, high-energy position to a tightly held, low-energy one, like a ball rolling downhill. Cellular respiration makes that fall happen in many small steps instead of one drop.</p>

<h3 data-tier="likely">Worked examples: who is oxidized, who is the agent?</h3>
<h4>Example 1: the FAD question from class</h4>
<div class="eq">FAD + 2 H<sup>+</sup> + 2 e<sup>−</sup> ⇌ FADH<sub>2</sub></div>
<p><strong>Forward reaction (→):</strong> FAD <strong>gains</strong> 2 electrons (and 2 H<sup>+</sup>) to become FADH<sub>2</sub>. Gain electrons = reduced (GER). So the <strong>forward reaction is a reduction</strong>.</p>
<p><strong>Reverse reaction (←):</strong> FADH<sub>2</sub> <strong>loses</strong> 2 electrons (and 2 H<sup>+</sup>) to become FAD. Lose electrons = oxidized (LEO). So the <strong>reverse reaction is an oxidation</strong>.</p>
<p>Notice the equation shows only half the story, because the electrons have to come from somewhere (forward) or go somewhere (reverse). That partner is the next example.</p>
<h4>Example 2: a full redox reaction (a preview of the Krebs cycle)</h4>
<div class="eq">succinate + FAD → fumarate + FADH<sub>2</sub></div>
<p>Work through it in four questions:</p>
<ol>
  <li><strong>Who gains electrons?</strong> FAD becomes FADH<sub>2</sub>, so it gained 2 hydrogens (2 electrons). <strong>FAD is reduced.</strong></li>
  <li><strong>Who loses electrons?</strong> Succinate gave up those 2 hydrogens to become fumarate. <strong>Succinate is oxidized.</strong></li>
  <li><strong>Which is the reducing agent?</strong> The donor: <strong>succinate</strong>. (It reduced FAD.)</li>
  <li><strong>Which is the oxidizing agent?</strong> The acceptor: <strong>FAD</strong>. (It oxidized succinate.)</li>
</ol>
<h4>Example 3: cellular respiration overall</h4>
<div class="eq">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + energy</div>
<p>Glucose loses hydrogens (electrons) and becomes CO<sub>2</sub>: <strong>glucose is oxidized</strong> and is the <strong>reducing agent</strong>. Oxygen gains hydrogens (electrons) and becomes H<sub>2</sub>O: <strong>oxygen is reduced</strong> and is the <strong>oxidizing agent</strong>. You will see later that O<sub>2</sub> is the <em>final electron acceptor</em> at the end of the electron transport chain.</p>
<details class="check"><summary>In the reaction NAD<sup>+</sup> + 2 H → NADH + H<sup>+</sup>, a molecule called malate supplies the hydrogens. Which substance is oxidized, which is reduced, and which is the oxidizing agent?</summary><div class="ans"><p>NAD<sup>+</sup> gains electrons (as hydrogen), so <strong>NAD<sup>+</sup> is reduced</strong>. Malate loses them, so <strong>malate is oxidized</strong>. The <strong>oxidizing agent is NAD<sup>+</sup></strong> (it took the electrons), and the reducing agent is malate (it gave them).</p></div></details>
<details class="check"><summary>Review question 3: What is a redox reaction? In FAD + 2H<sup>+</sup> + 2e<sup>−</sup> ⇌ FADH<sub>2</sub>, which direction is a reduction and which is an oxidation? Why?</summary><div class="ans"><p>A redox reaction is a chemical reaction in which <strong>electrons are transferred</strong> from one reactant to another: one substance loses electrons (is oxidized) while another gains them (is reduced).</p><p>The <strong>forward reaction is a reduction</strong>, because FAD <strong>gains</strong> two electrons (along with two H<sup>+</sup>) to become FADH<sub>2</sub>. The <strong>reverse reaction is an oxidation</strong>, because FADH<sub>2</sub> <strong>loses</strong> two electrons to become FAD again. LEO says GER: lose electrons = oxidized, gain electrons = reduced.</p></div></details>

<h3 data-tier="essential">Electron carriers: NAD<sup>+</sup> and FAD</h3>
<p>When an enzyme oxidizes a fuel molecule, the electrons it removes have to go somewhere. The cell uses two reusable <span class="term">electron carriers</span> (coenzymes) to collect them and carry them to where their energy can be cashed in for ATP (the electron transport chain):</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Carrier</th><th>Oxidized form ("empty")</th><th>Reduced form ("full")</th><th>Reduction reaction</th></tr></thead>
<tbody>
<tr><td><strong>NAD<sup>+</sup></strong> (nicotinamide adenine dinucleotide)</td><td>NAD<sup>+</sup></td><td>NADH</td><td>NAD<sup>+</sup> + 2 e<sup>−</sup> + 2 H<sup>+</sup> → NADH + H<sup>+</sup></td></tr>
<tr><td><strong>FAD</strong> (flavin adenine dinucleotide)</td><td>FAD</td><td>FADH<sub>2</sub></td><td>FAD + 2 e<sup>−</sup> + 2 H<sup>+</sup> → FADH<sub>2</sub></td></tr>
</tbody></table></div>
<ul>
  <li><strong>NAD<sup>+</sup> → NADH</strong> and <strong>FAD → FADH<sub>2</sub></strong> are both <strong>reductions</strong> (gain of electrons).</li>
  <li><strong>NAD<sup>+</sup> and FAD</strong> are the <strong>oxidized</strong> forms: <strong>empty batteries</strong>, ready to accept electrons.</li>
  <li><strong>NADH and FADH<sub>2</sub></strong> are the <strong>reduced</strong> forms: <strong>full batteries</strong>, carrying high-energy electrons. They are often called "high-energy electron carriers."</li>
</ul>
<p>Why the odd "NADH + H<sup>+</sup>"? NAD<sup>+</sup> picks up both electrons but only <strong>one</strong> of the two hydrogen nuclei. The other is released into solution as a free H<sup>+</sup>. FAD picks up both, so it becomes FADH<sub>2</sub>. The slide's quiz answer describes the NAD<sup>+</sup> case this way: it "gained an electron which then attracted the H<sup>+</sup>." You will often see the extra H<sup>+</sup> left off and just "NADH" written.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>NAD<sup>+</sup> has a plus sign, so students sometimes think NADH is the "oxidized" one because it "lost" the charge. It is the other way around. NAD<sup>+</sup> lost its positive charge <em>because</em> it gained negative electrons. <strong>The form with the extra H (NADH, FADH<sub>2</sub>) is always the reduced, energy-rich form.</strong></p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Count the H's. More H = more electrons = <strong>reduced</strong> = <strong>full battery</strong>. NAD<sup>+</sup> and FAD have no extra H, so they are <strong>empty</strong>. Like a delivery truck: NAD<sup>+</sup> is the empty truck driving to the warehouse (glucose), NADH is the loaded truck driving to the store (the electron transport chain).</p></div>
<p>Because the carriers are reused, a cell only has a small supply of them. Every NADH has to be oxidized back to NAD<sup>+</sup> before it can pick up more electrons. This "empty the trucks" problem turns out to be one of the most important ideas in the unit. It explains why oxygen is needed, and why fermentation exists.</p>
<p data-tier="extra">NAD<sup>+</sup> is made from niacin (vitamin B3) and FAD from riboflavin (vitamin B2). This is one reason B vitamins are essential: without them you cannot build the electron carriers that cellular respiration depends on. Look at the names, too: both are "adenine dinucleotides," built partly from the same adenine + ribose unit found in ATP.</p>
<details class="check"><summary>Which are the oxidized forms and which are the reduced forms: NAD<sup>+</sup>, NADH, FAD, FADH<sub>2</sub>? What is their role?</summary><div class="ans"><p>They are <strong>electron carriers</strong>: they pick up high-energy electrons removed from fuel molecules and carry them to the electron transport chain. <strong>Oxidized (empty): NAD<sup>+</sup> and FAD.</strong> <strong>Reduced (full): NADH and FADH<sub>2</sub>.</strong></p></div></details>

<h3 data-tier="likely">How it all fits together</h3>
<p>Every idea in this lesson connects into one story, which the rest of the unit fills in:</p>
<ol>
  <li>Cells need a steady supply of <strong>ATP</strong> to drive endergonic reactions through <strong>energy coupling</strong> (usually phosphorylation).</li>
  <li>Making ATP from ADP + P<sub>i</sub> is <strong>endergonic</strong>, so it has to be powered by something <strong>exergonic</strong>: the <strong>catabolism</strong> of glucose.</li>
  <li>Glucose cannot just be burned (too large an <strong>activation energy</strong>, and the energy would be lost as heat), so it is broken down <strong>stepwise</strong>, each step with its own enzyme.</li>
  <li>At many of those steps, glucose is <strong>oxidized</strong>: electrons are pulled off and loaded onto <strong>NAD<sup>+</sup> and FAD</strong> (which are <strong>reduced</strong> to NADH and FADH<sub>2</sub>).</li>
  <li>A few steps make ATP directly. Most of the ATP is made later, when NADH and FADH<sub>2</sub> drop off their electrons at the electron transport chain, ending with <strong>oxygen</strong> as the final electron acceptor.</li>
  <li>The energy that is not captured leaves as <strong>body heat</strong>.</li>
</ol>

<h3 data-tier="likely">Review &amp; application questions</h3>
<p>The three class review questions are answered in the quick checks above (catabolic, ATP and ADP, the FAD redox question). Here are a few more in the same style.</p>
<details class="check"><summary>Classify each as catabolic or anabolic: (a) glycogen → glucose, (b) amino acids → protein, (c) ADP + P<sub>i</sub> → ATP, (d) glucose → 2 pyruvate.</summary><div class="ans"><p>(a) catabolic, (b) anabolic, (c) anabolic (it builds a bigger molecule and is endergonic), (d) catabolic.</p></div></details>
<details class="check"><summary>An enzyme lowers the activation energy of a reaction. Does it change the amount of energy the reaction releases?</summary><div class="ans"><p>No. The reactants and products have the same free energy with or without the enzyme, so the overall energy released is the same. The enzyme only lowers the "hill" that must be climbed to start the reaction, letting it run quickly at body temperature.</p></div></details>
<details class="check"><summary>Why can't a cell simply burn glucose the way a candle burns wax?</summary><div class="ans"><p>Burning has a very large activation energy, needing heat far above what proteins can survive, and it releases all the energy at once, mostly as heat and light, so none of it could be captured as ATP. Cells instead oxidize glucose stepwise: each step has a small activation energy reachable at body temperature with an enzyme, and the energy comes out in small packets that can be captured by electron carriers (via redox reactions) and used to make ATP.</p></div></details>
<details class="check"><summary>Explain why ATP is a less stable molecule than ADP.</summary><div class="ans"><p>ATP has three negatively charged phosphate groups packed closely together in a chain. The like charges repel each other strongly, making the molecule unstable and high in free energy. When the terminal phosphate is removed, the repulsion is reduced, and the products (ADP + P<sub>i</sub>) are more stable. That difference is the energy released by ATP hydrolysis.</p></div></details>
<details class="check"><summary>What is energy coupling? Give an example.</summary><div class="ans"><p>Energy coupling is using the energy released by an exergonic reaction to drive an endergonic reaction. Usually ATP hydrolysis (exergonic) is coupled to the endergonic process by transferring ATP's terminal phosphate to another molecule (phosphorylation). Examples: ATP phosphorylates a carrier protein, changing its shape so it moves ions against their concentration gradient (active transport); ATP phosphorylates glucose to glucose-6-phosphate at the start of glycolysis.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
  <li><strong>Metabolism</strong> = sum of all anabolic + catabolic reactions in a cell or organism.</li>
  <li><strong>Catabolic</strong> = breaks down, releases energy (<strong>exergonic</strong>). <strong>Anabolic</strong> = builds up, needs energy (<strong>endergonic</strong>). Cellular respiration is catabolic.</li>
  <li><strong>Activation energy (E<sub>A</sub>)</strong> = minimum free energy needed to start a reaction. Enzymes lower E<sub>A</sub> but do not change the energy released.</li>
  <li>Burning sugar: one big E<sub>A</sub>, uncontrolled, energy lost as heat. Respiration: many small E<sub>A</sub>s, controlled, energy captured by carriers via <strong>redox</strong> to make ATP.</li>
  <li><strong>Body heat</strong> comes from respiration not being 100% efficient.</li>
  <li><strong>ATP</strong> = adenine (purine nitrogenous base) + ribose (5-C sugar, as in RNA) + 3 phosphate groups. The negative phosphates repel, so ATP is unstable and energy-rich.</li>
  <li><strong>Hydrolysis</strong> ATP + H<sub>2</sub>O → ADP + P<sub>i</sub> is exergonic (ATPase). <strong>Synthesis</strong> ADP + P<sub>i</sub> → ATP is endergonic. P<sub>i</sub> = inorganic phosphate.</li>
  <li><strong>Energy coupling</strong>: an exergonic reaction drives an endergonic one, usually by transferring a phosphate (<strong>phosphorylation</strong>). Adding phosphate makes a molecule more negative and more reactive or changes its shape.</li>
  <li>Examples: ATP phosphorylates <strong>carrier proteins</strong> (shape change → active transport against the gradient); <strong>tyrosine → phosphotyrosine</strong>; <strong>glucose → glucose-6-phosphate</strong> (traps glucose in the cell and keeps free glucose low so more diffuses in).</li>
  <li><strong>Redox</strong> = electron transfer. <strong>LEO says GER.</strong> Donor = <strong>reducing agent</strong> (is oxidized). Acceptor = <strong>oxidizing agent</strong> (is reduced).</li>
  <li><strong>FAD + 2H<sup>+</sup> + 2e<sup>−</sup> → FADH<sub>2</sub></strong> is a reduction; the reverse is an oxidation.</li>
  <li><strong>NAD<sup>+</sup>/FAD</strong> = oxidized, empty carriers. <strong>NADH/FADH<sub>2</sub></strong> = reduced, full carriers of high-energy electrons.</li>
</ul>
`
});
// END-LESSONS-A
