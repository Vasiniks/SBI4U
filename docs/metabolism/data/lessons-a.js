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
/* ===================================================================
   2.02 GLYCOLYSIS (CELLULAR RESPIRATION PT 1)
   =================================================================== */
window.LESSONS.push({
  id: "2.02",
  title: "Glycolysis",
  stage: "glyco",
  where: "Cytoplasm",
  summary: "An overview of cellular respiration (the equation, the four stages and the mitochondrion), then glycolysis in full: how one glucose is split into two pyruvate over 10 enzyme-catalyzed steps for a net gain of 2 ATP and 2 NADH, and what happens to the pyruvate next.",
  objectives: [
    "Write the overall equation for aerobic cellular respiration and explain why ATP synthesis must be coupled to glucose breakdown.",
    "Name the four stages of aerobic respiration with their number of steps, location, oxygen requirement and main products.",
    "Draw and label a mitochondrion (outer membrane, inner membrane, cristae, intermembrane space, matrix) and explain why the inner membrane is folded.",
    "Describe all 10 steps of glycolysis: the intermediate, the enzyme, what happens and why, split into the investment (prep) and payoff phases.",
    "Account for the ATP and NADH of glycolysis (2 ATP invested, 4 made, net 2; 2 NADH) and explain substrate-level phosphorylation.",
    "State which parts of the overall respiration equation glycolysis accounts for, and the two problems the cell must solve after glycolysis.",
    "Explain how oxygen and ATP levels decide the fate of pyruvate."
  ],
  html: `
<h3 data-tier="essential">Cellular respiration: the big picture</h3>
<p><span class="term">Cellular respiration</span> is the catabolic process in which cells break down glucose (and other fuels) and capture the released energy as ATP. When oxygen is used, it is called <span class="term">aerobic cellular respiration</span>. The overall equation:</p>
<div class="eq">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + ATP (energy)</div>
<p>That one line hides dozens of reactions. The energy stored in glucose ends up in two places:</p>
<ol>
  <li><strong>Directly in ATP.</strong> A few reactions make ATP on the spot.</li>
  <li><strong>In high-energy electron carriers</strong> (NADH and FADH<sub>2</sub>). These carry electrons stripped from glucose to the electron transport chain, where their energy <strong>powers the production of much more ATP</strong>. At the very end, the electrons are handed to oxygen.</li>
</ol>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Once glucose has been split apart, its electrons eventually go to <strong>oxygen</strong>, which is called the <strong>final electron acceptor</strong>. That is the only job O<sub>2</sub> has in cellular respiration, and it is why you breathe.</p></div>
<h4>Why ATP-building has to be coupled</h4>
<p><strong>Building ATP is an endergonic reaction that builds up a molecule (anabolic), so it must be coupled to an exergonic reaction to provide the energy.</strong> (Slide wording, worth memorizing.) ADP + P<sub>i</sub> will never become ATP on its own, for the same reason a ball will not roll uphill. The cell couples it to the exergonic breakdown of glucose into CO<sub>2</sub> and H<sub>2</sub>O.</p>
<p>The class slide drew this as a chain of energy transfers: the exergonic breakdown of glucose (through glycolysis, the Krebs cycle and oxidative phosphorylation) releases energy, some as heat, and some captured by turning ADP + P<sub>i</sub> into ATP. The ATP is then spent on endergonic jobs, like forming the bonds that join glucose molecules into a polysaccharide. ATP is the go-between that carries energy from the reactions that release it to the reactions that need it.</p>
<h4>Where it happens</h4>
<p><strong>In eukaryotic cells, energy from sugars is converted to usable energy in the cytoplasm and the mitochondria.</strong> The first stage (glycolysis) happens in the cytoplasm; the rest happen inside mitochondria.</p>
<p data-tier="extra">Prokaryotes (bacteria) have no mitochondria. They run glycolysis and the Krebs cycle in their cytoplasm, and their electron transport chain sits in their plasma membrane. That fits the idea that mitochondria are descended from bacteria that were engulfed by an ancestral cell long ago (endosymbiotic theory).</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Know the balanced equation by heart: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + ATP. The class review key writes "+ 36 ATP"; the slides say a maximum of 38 ATP. Check the numbers balance: 6 C, 12 H and 18 O on each side.</p></div>

<h3 data-tier="essential">The four stages of aerobic respiration</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Stage</th><th>Steps</th><th>Location</th><th>O<sub>2</sub> needed?</th><th>Main products (per glucose)</th></tr></thead>
<tbody>
<tr><td><strong>1. Glycolysis</strong></td><td>10 steps</td><td>Cytoplasm (cytosol)</td><td><strong>No</strong> (anaerobic; happens in all cells)</td><td>2 pyruvate, 2 ATP (net), 2 NADH</td></tr>
<tr><td><strong>2. Pyruvate oxidation</strong> (link / prep / transition step)</td><td>1 step</td><td>Mitochondrial matrix (pyruvate moves from cytoplasm into matrix)</td><td>Indirectly (only runs when O<sub>2</sub> is available)</td><td>2 acetyl-CoA, 2 NADH, 2 CO<sub>2</sub></td></tr>
<tr><td><strong>3. Krebs cycle</strong> (citric acid cycle)</td><td>8 steps, cyclic</td><td>Mitochondrial matrix</td><td>Indirectly</td><td>2 ATP, 6 NADH, 2 FADH<sub>2</sub>, 4 CO<sub>2</sub></td></tr>
<tr><td><strong>4. Electron transport chain + chemiosmosis</strong> (oxidative phosphorylation)</td><td>Multi-step</td><td>Inner mitochondrial membrane (cristae)</td><td><strong>Yes, directly</strong> (O<sub>2</sub> = final electron acceptor)</td><td>About 34 ATP (class maximum), H<sub>2</sub>O; NAD<sup>+</sup> and FAD recycled</td></tr>
</tbody></table></div>
<p>Why do stages 2 and 3 say "indirectly"? Neither pyruvate oxidation nor the Krebs cycle uses O<sub>2</sub> as a reactant. But both need a steady supply of empty carriers (NAD<sup>+</sup> and FAD), and the only place those are recycled in aerobic respiration is the electron transport chain, which cannot run without oxygen. No O<sub>2</sub> → ETC stops → NADH and FADH<sub>2</sub> pile up → no NAD<sup>+</sup> or FAD left → stages 2 and 3 grind to a halt too. Glycolysis is the only stage that can keep going without oxygen (with help from fermentation, lesson 2.07).</p>
<figure class="diagram">
<svg viewBox="0 0 640 625" role="img" aria-labelledby="t202a">
<title id="t202a">Overview of aerobic cellular respiration. In the cytoplasm, glycolysis splits glucose into 2 pyruvate, making 2 ATP and 2 NADH. Pyruvate enters the mitochondrion. In the matrix, pyruvate oxidation makes 2 acetyl-CoA, 2 NADH and 2 CO2, and the Krebs cycle makes 2 ATP, 6 NADH, 2 FADH2 and 4 CO2. In the inner membrane, the electron transport chain and chemiosmosis use the electron carriers and oxygen to make about 34 ATP and water.</title>
<defs>
<marker id="ar202a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
<marker id="ar202b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--etc)"/></marker>
</defs>
<rect x="10" y="10" width="620" height="150" rx="14" style="fill:var(--glyco-soft);stroke:var(--glyco)" stroke-width="1.5"/>
<text x="24" y="32" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--glyco)">CYTOPLASM (cytosol)</text>
<rect x="24" y="48" width="172" height="56" rx="10" style="fill:var(--surface);stroke:var(--glyco)" stroke-width="2"/>
<text x="110" y="72" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">1. Glycolysis</text>
<text x="110" y="91" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">10 steps · no O₂ needed</text>
<text x="320" y="70" text-anchor="middle" font-family="inherit" font-size="13" style="fill:var(--ink)">glucose (6C)</text>
<line x1="320" y1="78" x2="320" y2="106" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar202a)"/>
<text x="320" y="124" text-anchor="middle" font-family="inherit" font-size="13" style="fill:var(--ink)">2 pyruvate (3C)</text>
<text x="452" y="72" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--good)">+ 2 ATP (net)</text>
<text x="452" y="92" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--etc)">+ 2 NADH</text>
<rect x="10" y="176" width="620" height="412" rx="36" style="fill:var(--surface-2);stroke:var(--ink-2)" stroke-width="2"/>
<text x="40" y="198" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--ink-2)">MITOCHONDRION</text>
<rect x="26" y="208" width="588" height="236" rx="22" style="fill:var(--surface);stroke:var(--line)" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="600" y="228" text-anchor="end" font-family="inherit" font-size="12" font-style="italic" style="fill:var(--ink-2)">matrix</text>
<line x1="320" y1="132" x2="320" y2="256" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar202a)"/>
<rect x="40" y="236" width="172" height="52" rx="10" style="fill:var(--link-soft);stroke:var(--link)" stroke-width="2"/>
<text x="126" y="258" text-anchor="middle" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--ink)">2. Pyruvate oxidation</text>
<text x="126" y="276" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">1 step · matrix</text>
<text x="320" y="274" text-anchor="middle" font-family="inherit" font-size="13" style="fill:var(--ink)">2 acetyl-CoA (2C)</text>
<text x="452" y="258" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--etc)">+ 2 NADH</text>
<text x="452" y="278" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--ink-2)">+ 2 CO₂</text>
<line x1="320" y1="282" x2="320" y2="326" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar202a)"/>
<rect x="40" y="320" width="172" height="52" rx="10" style="fill:var(--krebs-soft);stroke:var(--krebs)" stroke-width="2"/>
<text x="126" y="342" text-anchor="middle" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--ink)">3. Krebs cycle</text>
<text x="126" y="360" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">8 steps · cyclic · matrix</text>
<circle cx="320" cy="370" r="38" style="fill:var(--krebs-soft);stroke:var(--krebs)" stroke-width="3"/>
<path d="M352,350 L358,342 L362,354 Z" style="fill:var(--krebs)"/>
<path d="M288,390 L282,398 L278,386 Z" style="fill:var(--krebs)"/>
<text x="320" y="375" text-anchor="middle" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--krebs)">Krebs</text>
<text x="320" y="428" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">turns twice per glucose</text>
<text x="452" y="342" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--good)">+ 2 ATP</text>
<text x="452" y="362" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--etc)">+ 6 NADH</text>
<text x="452" y="382" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--etc)">+ 2 FADH₂</text>
<text x="452" y="402" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--ink-2)">+ 4 CO₂</text>
<rect x="26" y="456" width="588" height="118" rx="16" style="fill:var(--etc-soft);stroke:var(--etc)" stroke-width="2"/>
<text x="600" y="476" text-anchor="end" font-family="inherit" font-size="12" font-style="italic" style="fill:var(--etc)">inner membrane</text>
<rect x="40" y="470" width="172" height="62" rx="10" style="fill:var(--surface);stroke:var(--etc)" stroke-width="2"/>
<text x="126" y="494" text-anchor="middle" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--ink)">4. ETC + chemiosmosis</text>
<text x="126" y="512" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">inner membrane</text>
<text x="126" y="526" text-anchor="middle" font-family="inherit" font-size="11.5" style="fill:var(--ink-2)">(cristae)</text>
<text x="320" y="500" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">NADH, FADH₂ drop off e⁻</text>
<text x="320" y="518" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">O₂ = final e⁻ acceptor → H₂O</text>
<text x="320" y="536" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">H⁺ gradient drives ATP synthase</text>
<text x="452" y="504" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--good)">+ ~34 ATP</text>
<text x="452" y="524" font-family="inherit" font-size="12.5" font-weight="700" style="fill:var(--ink-2)">+ H₂O</text>
<line x1="604" y1="100" x2="604" y2="490" style="stroke:var(--etc)" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#ar202b)"/>
<text x="620" y="300" text-anchor="middle" font-family="inherit" font-size="11" transform="rotate(90 620 300)" style="fill:var(--etc)">NADH and FADH₂ carry e⁻ to the ETC</text>
<text x="320" y="612" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Class maximum: 2 + 2 + 34 = 38 ATP per glucose</text>
</svg>
<figcaption>The four stages and where they happen. Glucose's carbon leaves as CO<sub>2</sub> in stages 2 and 3; its electrons are carried by NADH and FADH<sub>2</sub> to stage 4, where most of the ATP is made.</figcaption>
</figure>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Follow the glucose <strong>from outside in</strong>: <strong>cytoplasm</strong> (glycolysis) → <strong>matrix</strong> (pyruvate oxidation, then Krebs) → <strong>inner membrane</strong> (ETC). And "Krebs cycle" and "citric acid cycle" are two names for the same thing (citrate is the first molecule made in it).</p></div>

<h3 data-tier="essential">The mitochondrion</h3>
<p>Three of the four stages happen in the <span class="term">mitochondrion</span> (plural: mitochondria), so you need to know its parts. It has <strong>two membranes</strong>, which create two separate compartments.</p>
<figure class="diagram">
<svg viewBox="0 0 640 420" role="img" aria-labelledby="t202b">
<title id="t202b">Labelled mitochondrion: a smooth outer membrane surrounds a highly folded inner membrane whose folds are called cristae. The narrow fluid-filled intermembrane space lies between the two membranes. The protein-rich matrix fills the inside of the inner membrane.</title>
<rect x="50" y="80" width="540" height="270" rx="90" style="fill:var(--surface-2);stroke:var(--ink-2)" stroke-width="3"/>
<rect x="68" y="98" width="504" height="234" rx="76" style="fill:var(--krebs-soft);stroke:var(--etc)" stroke-width="3"/>
<path d="M159,96 L159,180 A11 11 0 0 0 181,180 L181,96" style="fill:var(--surface-2);stroke:var(--etc)" stroke-width="3"/>
<path d="M249,96 L249,180 A11 11 0 0 0 271,180 L271,96" style="fill:var(--surface-2);stroke:var(--etc)" stroke-width="3"/>
<path d="M339,96 L339,180 A11 11 0 0 0 361,180 L361,96" style="fill:var(--surface-2);stroke:var(--etc)" stroke-width="3"/>
<path d="M429,96 L429,180 A11 11 0 0 0 451,180 L451,96" style="fill:var(--surface-2);stroke:var(--etc)" stroke-width="3"/>
<path d="M204,334 L204,250 A11 11 0 0 1 226,250 L226,334" style="fill:var(--surface-2);stroke:var(--etc)" stroke-width="3"/>
<path d="M294,334 L294,250 A11 11 0 0 1 316,250 L316,334" style="fill:var(--surface-2);stroke:var(--etc)" stroke-width="3"/>
<path d="M384,334 L384,250 A11 11 0 0 1 406,250 L406,334" style="fill:var(--surface-2);stroke:var(--etc)" stroke-width="3"/>
<path d="M474,334 L474,250 A11 11 0 0 1 496,250 L496,334" style="fill:var(--surface-2);stroke:var(--etc)" stroke-width="3"/>
<text x="320" y="220" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--krebs)">MATRIX (protein-rich fluid)</text>
<text x="108" y="222" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">Krebs +</text>
<text x="108" y="236" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">pyruvate ox.</text>
<text x="40" y="34" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Outer membrane</text>
<text x="40" y="50" font-family="inherit" font-size="12" style="fill:var(--ink-2)">smooth</text>
<line x1="96" y1="56" x2="130" y2="80" style="stroke:var(--ink-2)" stroke-width="1.5"/>
<text x="300" y="34" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Cristae</text>
<text x="300" y="50" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">folds of the inner membrane</text>
<line x1="290" y1="56" x2="272" y2="128" style="stroke:var(--ink-2)" stroke-width="1.5"/>
<text x="600" y="34" text-anchor="end" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--etc)">Inner membrane</text>
<text x="600" y="50" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--ink-2)">highly folded</text>
<line x1="540" y1="56" x2="512" y2="98" style="stroke:var(--ink-2)" stroke-width="1.5"/>
<text x="40" y="384" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Intermembrane space</text>
<text x="40" y="400" font-family="inherit" font-size="12" style="fill:var(--ink-2)">fluid-filled gap between the membranes</text>
<line x1="120" y1="372" x2="160" y2="341" style="stroke:var(--ink-2)" stroke-width="1.5"/>
<text x="600" y="384" text-anchor="end" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--etc)">ETC + ATP synthase</text>
<text x="600" y="400" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--ink-2)">embedded in the inner membrane</text>
<line x1="520" y1="370" x2="497" y2="300" style="stroke:var(--ink-2)" stroke-width="1.5"/>
</svg>
<figcaption>A mitochondrion cut in half lengthwise. Inside each crista is intermembrane space, because a crista is just a fold of the inner membrane.</figcaption>
</figure>
<div class="table-wrap"><table class="data">
<thead><tr><th>Part</th><th>Description</th><th>Role in respiration</th></tr></thead>
<tbody>
<tr><td><strong>Outer membrane</strong></td><td><strong>Smooth</strong>; surrounds the whole organelle</td><td>Separates the mitochondrion from the cytoplasm; fairly permeable to small molecules such as pyruvate</td></tr>
<tr><td><strong>Inner membrane</strong></td><td><strong>Highly folded</strong>; much less permeable (H<sup>+</sup> cannot leak through easily)</td><td>Holds the <strong>electron transport chain</strong> proteins and <strong>ATP synthase</strong> (stage 4)</td></tr>
<tr><td><strong>Cristae</strong></td><td>The <strong>folds of the inner membrane</strong></td><td>Increase the surface area of the inner membrane, so more ETC and ATP synthase can fit</td></tr>
<tr><td><strong>Intermembrane space</strong></td><td><strong>Fluid-filled</strong> space between the outer and inner membranes</td><td>H<sup>+</sup> ions are pumped in here by the ETC, building up a concentration gradient</td></tr>
<tr><td><strong>Matrix</strong></td><td><strong>Protein-rich fluid</strong> inside the inner membrane (also has the mitochondrion's own DNA and ribosomes)</td><td>Contains the enzymes for <strong>pyruvate oxidation</strong> and the <strong>Krebs cycle</strong> (stages 2 and 3)</td></tr>
</tbody></table></div>
<h4>Why is the inner membrane folded?</h4>
<p>Folding is a classic biology solution to a space problem: it <strong>increases surface area without increasing volume</strong>, like the villi in your small intestine or the folds of your brain. Most ATP is made by proteins <em>embedded in the inner membrane</em> (the ETC complexes and ATP synthase). The more inner membrane a mitochondrion has, the more of these proteins it can hold, and the more ATP it can make. That is why cells with huge energy demands, like heart and skeletal muscle cells, have mitochondria packed with tightly folded cristae.</p>
<p>The two-membrane design matters too. Because the inner membrane is a tight barrier, protons pumped into the narrow intermembrane space cannot simply leak back. They build up into a steep gradient, which is the "stored energy" ATP synthase uses (lesson 2.04).</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The <strong>cristae are the folds</strong>, not the space. The <strong>intermembrane space</strong> is the gap between the two membranes. Also, the matrix is <em>inside the inner membrane</em>, not between the membranes. Mixing up "matrix" and "intermembrane space" is the most common labelling error on this diagram.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>The review asks you to "draw and label a mitochondrion and its parts." Practise drawing it from memory with all five labels: outer membrane (smooth), inner membrane (highly folded), cristae (folds of the inner membrane), intermembrane space (fluid-filled), matrix (protein-rich fluid). Add where each stage happens for bonus understanding.</p></div>

<h3 data-tier="essential">Glycolysis: overview</h3>
<p><span class="term">Glycolysis</span> comes from <strong>glyco</strong> = sugar and <strong>lysis</strong> = splitting. It splits one 6-carbon glucose into two 3-carbon <span class="term">pyruvate</span> molecules.</p>
<ul>
  <li><strong>Where:</strong> the cytoplasm (cytosol). No organelle needed.</li>
  <li><strong>Who:</strong> <strong>all cells</strong>, in both aerobic and anaerobic conditions. Bacteria, yeast, plants and you all do it the same way.</li>
  <li><strong>Oxygen:</strong> <strong>not needed</strong>. Glycolysis is anaerobic.</li>
  <li><strong>Steps:</strong> 10, each catalyzed by its own enzyme.</li>
</ul>
<div class="eq">glucose + 2 NAD<sup>+</sup> + 2 ADP + 2 P<sub>i</sub> → 2 pyruvate + 2 NADH + 2 H<sup>+</sup> + 2 ATP + 2 H<sub>2</sub>O</div>
<p>(That is the <em>net</em> equation. The 2 ATP invested at the start are paid back, so they cancel out.)</p>
<p data-tier="extra">Why is glycolysis so universal, and why does it not need oxygen? It is thought to be one of the oldest metabolic pathways, evolving in early prokaryotes billions of years ago, before there was much oxygen in Earth's atmosphere and before mitochondria existed. Every living thing inherited it.</p>

<h3 data-tier="essential">Why glucose has to be destabilized first</h3>
<p><strong>Glucose is very stable.</strong> Its ring structure holds together well, which is great for storage and transport but bad if you want to pull it apart. <strong>An input of energy is required to destabilize glucose so that the energy can be harvested.</strong> This is activation energy again (lesson 2.01), paid in ATP.</p>
<p>So glycolysis starts by <em>spending</em> energy: <strong>2 ATP are required to start the process, and it produces 4, so the NET is 2 ATP.</strong></p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>"You have to spend money to make money." Glycolysis invests 2 ATP like a business investing start-up cash, then earns back 4 ATP for a profit of 2. Or picture a boulder that must be pushed up onto the edge of a cliff (investment) before it can roll down and do work (payoff).</p></div>
<h4>The two phases</h4>
<div class="compare">
  <div>
    <h4>1. Prep phase (investment), steps 1–5</h4>
    <ul>
      <li><strong>Destabilizes and splits glucose.</strong></li>
      <li><strong>Costs 2 ATP</strong> (steps 1 and 3).</li>
      <li>Ends with <strong>two G3P</strong> (glyceraldehyde-3-phosphate), each 3-carbon.</li>
      <li>No ATP or NADH is made yet.</li>
    </ul>
  </div>
  <div>
    <h4>2. Payoff phase, steps 6–10</h4>
    <ul>
      <li><strong>Production of energy.</strong></li>
      <li>Each G3P makes 1 NADH and 2 ATP. With two G3P: <strong>2 NADH and 4 ATP</strong>.</li>
      <li>Ends with <strong>two pyruvate</strong>.</li>
    </ul>
  </div>
</div>

<h3 data-tier="essential">The 10 steps of glycolysis</h3>
<p>Use the diagram to see the whole pathway at once, then read the step-by-step explanations below it. For each step, know the <strong>intermediate</strong>, the <strong>enzyme</strong>, <strong>what happens</strong> and <strong>why</strong>.</p>
<figure class="diagram">
<svg viewBox="0 0 640 1260" role="img" aria-labelledby="t202c">
<title id="t202c">Glycolysis pathway, top to bottom. Investment phase: step 1 hexokinase turns glucose into glucose-6-phosphate using 1 ATP; step 2 phosphoglucose isomerase makes fructose-6-phosphate; step 3 phosphofructokinase makes fructose-1,6-bisphosphate using 1 ATP; step 4 aldolase splits it into DHAP and G3P; step 5 triose phosphate isomerase converts DHAP into G3P. Payoff phase, happening twice: step 6 G3P dehydrogenase adds inorganic phosphate and makes NADH, giving 1,3-bisphosphoglycerate; step 7 phosphoglycerate kinase makes ATP, giving 3-phosphoglycerate; step 8 phosphoglycerate mutase makes 2-phosphoglycerate; step 9 enolase removes water, giving phosphoenolpyruvate; step 10 pyruvate kinase makes ATP, giving pyruvate.</title>
<defs><marker id="ar202c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<rect x="6" y="6" width="628" height="610" rx="14" style="fill:var(--glyco-soft)"/>
<rect x="6" y="626" width="628" height="628" rx="14" style="fill:var(--surface-2)"/>
<text x="24" y="310" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" transform="rotate(-90 24 310)" style="fill:var(--glyco)">INVESTMENT (PREP) PHASE · steps 1–5 · spend 2 ATP</text>
<text x="24" y="940" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" transform="rotate(-90 24 940)" style="fill:var(--ink-2)">PAYOFF PHASE · steps 6–10 · make 4 ATP + 2 NADH</text>
<text x="44" y="652" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--proton)">Everything below happens TWICE (×2)</text>
<rect x="175" y="47" width="230" height="46" rx="10" style="fill:var(--surface);stroke:var(--glyco)" stroke-width="2"/>
<text x="290" y="67" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">glucose</text>
<text x="290" y="84" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">6C</text>
<rect x="175" y="167" width="230" height="46" rx="10" style="fill:var(--surface);stroke:var(--glyco)" stroke-width="2"/>
<text x="290" y="187" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">glucose-6-phosphate</text>
<text x="290" y="204" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">G6P · 6C · 1 P</text>
<rect x="175" y="287" width="230" height="46" rx="10" style="fill:var(--surface);stroke:var(--glyco)" stroke-width="2"/>
<text x="290" y="307" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">fructose-6-phosphate</text>
<text x="290" y="324" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">F6P · 6C · 1 P</text>
<rect x="175" y="407" width="230" height="46" rx="10" style="fill:var(--surface);stroke:var(--glyco)" stroke-width="2"/>
<text x="290" y="427" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">fructose-1,6-bisphosphate</text>
<text x="290" y="444" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">F1,6BP · 6C · 2 P</text>
<rect x="175" y="537" width="230" height="46" rx="10" style="fill:var(--surface);stroke:var(--glyco)" stroke-width="2"/>
<text x="290" y="557" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">glyceraldehyde-3-phosphate</text>
<text x="290" y="574" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">G3P · 3C · ×2</text>
<rect x="175" y="717" width="230" height="46" rx="10" style="fill:var(--surface);stroke:var(--ink-2)" stroke-width="2"/>
<text x="290" y="737" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">1,3-bisphosphoglycerate</text>
<text x="290" y="754" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">1,3-BPG · 3C · 2 P · ×2</text>
<rect x="175" y="837" width="230" height="46" rx="10" style="fill:var(--surface);stroke:var(--ink-2)" stroke-width="2"/>
<text x="290" y="857" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">3-phosphoglycerate</text>
<text x="290" y="874" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">3PG · 3C · ×2</text>
<rect x="175" y="957" width="230" height="46" rx="10" style="fill:var(--surface);stroke:var(--ink-2)" stroke-width="2"/>
<text x="290" y="977" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">2-phosphoglycerate</text>
<text x="290" y="994" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">2PG · 3C · ×2</text>
<rect x="175" y="1077" width="230" height="46" rx="10" style="fill:var(--surface);stroke:var(--ink-2)" stroke-width="2"/>
<text x="290" y="1097" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">phosphoenolpyruvate</text>
<text x="290" y="1114" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">PEP · 3C · ×2</text>
<rect x="175" y="1197" width="230" height="46" rx="10" style="fill:var(--surface);stroke:var(--link)" stroke-width="2"/>
<text x="290" y="1217" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">pyruvate</text>
<text x="290" y="1234" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">3C · ×2</text>
<rect x="445" y="537" width="180" height="46" rx="10" style="fill:var(--surface);stroke:var(--glyco)" stroke-width="2"/>
<text x="535" y="557" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">DHAP · 3C</text>
<text x="535" y="574" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">dihydroxyacetone phosphate</text>
<line x1="290" y1="95" x2="290" y2="164" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar202c)"/>
<circle cx="290" cy="129" r="11" style="fill:var(--surface);stroke:var(--ink)" stroke-width="1.5"/>
<text x="290" y="133" text-anchor="middle" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--ink)">1</text>
<text x="272" y="127" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">hexokinase</text>
<text x="272" y="143" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">add P: destabilize + trap</text>
<path d="M332,105 Q298,129 332,153" style="fill:none;stroke:var(--glyco)" stroke-width="2" marker-end="url(#ar202c)"/>
<text x="338" y="111" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">ATP</text>
<text x="338" y="159" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">ADP</text>
<text x="626" y="134" text-anchor="end" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--bad)">−1 ATP</text>
<line x1="290" y1="215" x2="290" y2="284" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar202c)"/>
<circle cx="290" cy="249" r="11" style="fill:var(--surface);stroke:var(--ink)" stroke-width="1.5"/>
<text x="290" y="253" text-anchor="middle" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--ink)">2</text>
<text x="272" y="247" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">phosphoglucose isomerase</text>
<text x="272" y="263" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">rearrange into isomer</text>
<line x1="290" y1="335" x2="290" y2="404" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar202c)"/>
<circle cx="290" cy="369" r="11" style="fill:var(--surface);stroke:var(--ink)" stroke-width="1.5"/>
<text x="290" y="373" text-anchor="middle" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--ink)">3</text>
<text x="272" y="367" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">phosphofructokinase (PFK)</text>
<text x="272" y="383" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">add P: symmetry · regulatory</text>
<path d="M332,345 Q298,369 332,393" style="fill:none;stroke:var(--glyco)" stroke-width="2" marker-end="url(#ar202c)"/>
<text x="338" y="351" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">ATP</text>
<text x="338" y="399" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">ADP</text>
<text x="626" y="374" text-anchor="end" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--bad)">−1 ATP</text>
<line x1="290" y1="455" x2="290" y2="534" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar202c)"/>
<circle cx="290" cy="494" r="11" style="fill:var(--surface);stroke:var(--ink)" stroke-width="1.5"/>
<text x="290" y="498" text-anchor="middle" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--ink)">4</text>
<text x="272" y="492" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">aldolase</text>
<text x="272" y="508" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">split 6C → two 3C</text>
<line x1="290" y1="585" x2="290" y2="714" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar202c)"/>
<circle cx="290" cy="680" r="11" style="fill:var(--surface);stroke:var(--ink)" stroke-width="1.5"/>
<text x="290" y="684" text-anchor="middle" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--ink)">6</text>
<text x="272" y="678" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">G3P dehydrogenase</text>
<text x="272" y="694" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">oxidize, add Pᵢ, make NADH</text>
<path d="M332,656 Q298,680 332,704" style="fill:none;stroke:var(--glyco)" stroke-width="2" marker-end="url(#ar202c)"/>
<text x="338" y="662" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">NAD⁺ + Pᵢ</text>
<text x="338" y="710" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">NADH + H⁺</text>
<text x="626" y="685" text-anchor="end" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--etc)">+2 NADH</text>
<line x1="290" y1="765" x2="290" y2="834" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar202c)"/>
<circle cx="290" cy="799" r="11" style="fill:var(--surface);stroke:var(--ink)" stroke-width="1.5"/>
<text x="290" y="803" text-anchor="middle" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--ink)">7</text>
<text x="272" y="797" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">phosphoglycerate kinase</text>
<text x="272" y="813" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">make ATP (SLP)</text>
<path d="M332,775 Q298,799 332,823" style="fill:none;stroke:var(--glyco)" stroke-width="2" marker-end="url(#ar202c)"/>
<text x="338" y="781" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">ADP</text>
<text x="338" y="829" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">ATP</text>
<text x="626" y="804" text-anchor="end" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--good)">+2 ATP</text>
<line x1="290" y1="885" x2="290" y2="954" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar202c)"/>
<circle cx="290" cy="919" r="11" style="fill:var(--surface);stroke:var(--ink)" stroke-width="1.5"/>
<text x="290" y="923" text-anchor="middle" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--ink)">8</text>
<text x="272" y="917" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">phosphoglycerate mutase</text>
<text x="272" y="933" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">move P from C3 to C2</text>
<line x1="290" y1="1005" x2="290" y2="1074" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar202c)"/>
<circle cx="290" cy="1039" r="11" style="fill:var(--surface);stroke:var(--ink)" stroke-width="1.5"/>
<text x="290" y="1043" text-anchor="middle" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--ink)">9</text>
<text x="272" y="1037" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">enolase</text>
<text x="272" y="1053" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">remove water</text>
<path d="M302,1041 Q314,1059 334,1063" style="fill:none;stroke:var(--glyco)" stroke-width="2" marker-end="url(#ar202c)"/>
<text x="338" y="1069" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">H₂O</text>
<text x="626" y="1044" text-anchor="end" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink-2)">+2 H₂O</text>
<line x1="290" y1="1125" x2="290" y2="1194" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar202c)"/>
<circle cx="290" cy="1159" r="11" style="fill:var(--surface);stroke:var(--ink)" stroke-width="1.5"/>
<text x="290" y="1163" text-anchor="middle" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--ink)">10</text>
<text x="272" y="1157" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">pyruvate kinase</text>
<text x="272" y="1173" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">make ATP (SLP)</text>
<path d="M332,1135 Q298,1159 332,1183" style="fill:none;stroke:var(--glyco)" stroke-width="2" marker-end="url(#ar202c)"/>
<text x="338" y="1141" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">ADP</text>
<text x="338" y="1189" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">ATP</text>
<text x="626" y="1164" text-anchor="end" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--good)">+2 ATP</text>
<line x1="380" y1="455" x2="515" y2="534" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar202c)"/>
<line x1="443" y1="560" x2="408" y2="560" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#ar202c)"/>
<text x="535" y="602" text-anchor="middle" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--ink)">5 · triose phosphate isomerase</text>
<text x="535" y="616" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">DHAP → G3P (isomer)</text>
</svg>
<figcaption>Glycolysis from glucose to 2 pyruvate. ATP is spent at steps 1 and 3, NADH is made at step 6, ATP is made at steps 7 and 10, and water is removed at step 9. Below the G3P line, every step happens twice per glucose.</figcaption>
</figure>
<h4>Prep (investment) phase</h4>
<ol class="steps">
<li><p class="step-head">Hexokinase: glucose → glucose-6-phosphate (G6P)</p>
<p><strong>What:</strong> a phosphate from ATP is added to carbon 6 of glucose. ATP → ADP. <span class="chip atp">−1 ATP</span></p>
<p><strong>Why:</strong> <em>add phosphate to destabilize glucose.</em> The negative phosphate makes the molecule less stable and more reactive, the first push "up the hill." It also <strong>traps glucose in the cell</strong>: glucose transporters do not recognize G6P, and its negative charge cannot cross the membrane. And by turning free glucose into G6P immediately, it keeps the inside glucose concentration low, so more glucose keeps diffusing in (lesson 2.01).</p></li>
<li><p class="step-head">Phosphoglucose isomerase: G6P → fructose-6-phosphate (F6P)</p>
<p><strong>What:</strong> G6P is <strong>rearranged into its isomer</strong>, F6P (same formula, different arrangement). The six-sided glucose ring becomes the five-sided fructose ring. Also called phosphohexose isomerase. No ATP involved.</p>
<p><strong>Why:</strong> <em>rearrange the molecule into an isomer to further destabilize it.</em> The rearrangement also frees up carbon 1 as a –CH<sub>2</sub>OH group sticking out of the ring, so it can receive a second phosphate in step 3, and it puts the molecule's "split point" in the middle so step 4 can cut it into two equal 3-carbon halves. An <span class="term">isomerase</span> is an enzyme that changes a molecule's shape into an isomer.</p></li>
<li><p class="step-head">Phosphofructokinase (PFK): F6P → fructose-1,6-bisphosphate (F1,6BP)</p>
<p><strong>What:</strong> a second phosphate from ATP is added, this time to carbon 1. ATP → ADP. <span class="chip atp">−1 ATP</span> Now the molecule has a phosphate on each end ("bis" = two).</p>
<p><strong>Why:</strong> <em>add phosphate to destabilize the molecule and create symmetry for splitting.</em> Two negative phosphates on one small sugar make it very unstable, ready to break. Having one on each end means that when it splits in the middle, each half gets a phosphate.</p>
<p><strong>PFK is the key regulatory enzyme of glycolysis.</strong> It is an allosteric enzyme, <strong>inhibited by high ATP</strong> (and citrate) and <strong>stimulated by high ADP</strong>. This makes sense: once F1,6BP is made, it has no other use, so step 3 is the "point of no return" (the committed step). Controlling the pathway here means the cell does not waste glucose making ATP it does not need (lesson 2.05).</p></li>
<li><p class="step-head">Aldolase: F1,6BP → DHAP + G3P</p>
<p><strong>What:</strong> the 6-carbon sugar is <strong>split into two 3-carbon molecules</strong>: dihydroxyacetone phosphate (<strong>DHAP</strong>) and glyceraldehyde-3-phosphate (<strong>G3P</strong>). Each has one phosphate.</p>
<p><strong>Why:</strong> this is the actual "lysis" (splitting) in glycolysis. The destabilization in steps 1–3 is what makes this cut possible.</p></li>
<li><p class="step-head">Triose phosphate isomerase: DHAP → G3P</p>
<p><strong>What:</strong> <strong>DHAP rearranges into its isomer, G3P.</strong> Now there are <strong>two G3P</strong>.</p>
<p><strong>Why:</strong> only G3P can continue into the payoff phase. DHAP and G3P are isomers (both C<sub>3</sub>H<sub>7</sub>O<sub>6</sub>P), so converting DHAP means <strong>none of the glucose is wasted</strong>: both halves carry on. As G3P is used up in step 6, more DHAP keeps converting to replace it.</p></li>
</ol>
<h4>Payoff phase (every step happens twice per glucose)</h4>
<ol class="steps">
<li><p class="step-head">Glyceraldehyde-3-phosphate dehydrogenase: G3P → 1,3-bisphosphoglycerate (1,3-BPG)</p>
<p><strong>What:</strong> two things are coupled in one step. (1) G3P is <strong>oxidized</strong>: a dehydrogenase removes hydrogen (two electrons), and <strong>NAD<sup>+</sup> is reduced to NADH</strong>. (2) An <strong>inorganic phosphate (P<sub>i</sub>)</strong> is added. This P<sub>i</sub> comes from the <strong>"cellular pool" in the cytoplasm</strong>, not from ATP. <span class="chip nadh">+2 NADH</span> (1 per G3P × 2)</p>
<p><strong>Why:</strong> <em>add phosphate and make NADH.</em> This is the only <strong>redox</strong> step in glycolysis, and it is where the energy harvest starts. The oxidation of G3P releases energy. Part is captured in NADH (high-energy electrons for later), and part is used to attach a free phosphate with a very high-energy bond. That phosphate is "paid for" by the oxidation, not by ATP, which is why glycolysis can come out ahead.</p></li>
<li><p class="step-head">Phosphoglycerate kinase: 1,3-BPG → 3-phosphoglycerate (3PG)</p>
<p><strong>What:</strong> the high-energy phosphate on carbon 1 is transferred <strong>directly to ADP</strong>, making ATP. <span class="chip atp">+2 ATP</span> (1 per 1,3-BPG × 2)</p>
<p><strong>Why:</strong> <em>make ATP and harvest more of the energy.</em> This is <strong>substrate-level phosphorylation</strong>. These 2 ATP pay back the 2 invested in steps 1 and 3, so after step 7 the cell has "broken even."</p></li>
<li><p class="step-head">Phosphoglycerate mutase: 3PG → 2-phosphoglycerate (2PG)</p>
<p><strong>What:</strong> the remaining phosphate is <strong>moved from carbon 3 to carbon 2</strong>. The molecule is isomerized. No ATP involved. A <span class="term">mutase</span> moves a group to a different position within the same molecule.</p>
<p><strong>Why:</strong> <em>isomerize to destabilize.</em> On carbon 3 the phosphate is fairly stable and hard to transfer. Moving it to carbon 2 sets up step 9, which will turn it into a high-energy phosphate.</p></li>
<li><p class="step-head">Enolase: 2PG → phosphoenolpyruvate (PEP)</p>
<p><strong>What:</strong> a <strong>water molecule is removed</strong> (dehydration). <span class="chip">+2 H<sub>2</sub>O</span></p>
<p><strong>Why:</strong> <em>remove water to destabilize further.</em> Removing H<sub>2</sub>O creates a double bond next to the phosphate and rearranges the electrons so the phosphate is held in a very strained, high-energy position. PEP's phosphate bond is one of the highest-energy phosphate bonds in biology, even higher than ATP's, so it can easily be passed to ADP. These are the <strong>2 H<sub>2</sub>O</strong> glycolysis produces.</p></li>
<li><p class="step-head">Pyruvate kinase: PEP → pyruvate</p>
<p><strong>What:</strong> the phosphate is transferred <strong>directly to ADP</strong>, making ATP, and <strong>pyruvate</strong> is produced. <span class="chip atp">+2 ATP</span> (1 per PEP × 2)</p>
<p><strong>Why:</strong> <em>make ATP and harvest more of the energy.</em> Substrate-level phosphorylation again. These 2 ATP are glycolysis's <strong>profit</strong>, the net gain.</p></li>
</ol>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Enzyme name endings tell you what the step does. <strong>-kinase</strong> moves a phosphate between ATP and something else (steps 1, 3, 7, 10: every step where ATP is spent or made). <strong>-isomerase</strong> and <strong>mutase</strong> rearrange (steps 2, 5, 8). <strong>Dehydrogenase</strong> removes hydrogen, so it is a redox step that makes NADH (step 6). <strong>Aldolase</strong> splits (step 4). <strong>Enolase</strong> removes water to make an "enol" (step 9). Kinases are named after their non-ATP molecule, so "pyruvate kinase" and "phosphoglycerate kinase" are named as if run backwards; do not let that throw you.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>One phrase per step: <strong>1</strong> add P · <strong>2</strong> isomer · <strong>3</strong> add P (symmetry) · <strong>4</strong> split · <strong>5</strong> isomer → 2 G3P · <strong>6</strong> add P<sub>i</sub> + NADH · <strong>7</strong> ATP · <strong>8</strong> isomer · <strong>9</strong> remove water · <strong>10</strong> ATP. A well-known mnemonic for the 11 molecules: "<strong>G</strong>oodness <strong>G</strong>racious, <strong>F</strong>ather <strong>F</strong>ranklin <strong>D</strong>id <strong>G</strong>o <strong>B</strong>y <strong>P</strong>icking <strong>P</strong>umpkins (to) <strong>P</strong>repare <strong>P</strong>ies" (glucose, G6P, F6P, F1,6BP, DHAP, G3P, 1,3-BPG, 3PG, 2PG, PEP, pyruvate).</p></div>
<p data-tier="extra">The detailed glycolysis diagram in the slides marked three reactions with orange arrows as <strong>irreversible (highly exergonic)</strong>: step 1 (hexokinase), step 3 (PFK) and step 10 (pyruvate kinase). All the others are reversible. It also showed Mg<sup>2+</sup> as a cofactor (helper ion) for several of the enzymes. When the liver builds glucose from pyruvate (gluconeogenesis), it can run the reversible steps backwards but has to use different enzymes to get around those three one-way steps.</p>

<h3 data-tier="essential">Why everything doubles after step 5</h3>
<p>Up to step 4 you are following <strong>one</strong> molecule (glucose, then G6P, F6P, F1,6BP). Step 4 splits it into two 3-carbon pieces, and step 5 converts the DHAP so both pieces are <strong>G3P</strong>. From then on there are <strong>two identical molecules going through steps 6–10 side by side</strong>. Every product made in the payoff phase is therefore made <strong>twice per glucose</strong>:</p>
<ul>
  <li>Step 6: 1 NADH per G3P → <strong>2 NADH</strong></li>
  <li>Step 7: 1 ATP per 1,3-BPG → <strong>2 ATP</strong></li>
  <li>Step 9: 1 H<sub>2</sub>O per 2PG → <strong>2 H<sub>2</sub>O</strong></li>
  <li>Step 10: 1 ATP per PEP → <strong>2 ATP</strong></li>
  <li>End: <strong>2 pyruvate</strong></li>
</ul>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Forgetting to double. If a diagram shows "ADP → ATP" once at step 7 and once at step 10, it is showing one G3P's path. The total for one glucose is 4 ATP made, not 2. Watch for whether a question says "per G3P," "per pyruvate" or "per glucose."</p></div>

<h3 data-tier="essential">Net result: counting the yield</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Step</th><th>Enzyme</th><th>ATP</th><th>NADH</th><th>Other</th></tr></thead>
<tbody>
<tr><td>1</td><td>Hexokinase</td><td>−1</td><td></td><td></td></tr>
<tr><td>3</td><td>Phosphofructokinase</td><td>−1</td><td></td><td></td></tr>
<tr><td>6</td><td>G3P dehydrogenase</td><td></td><td>+2</td><td>uses 2 P<sub>i</sub> from the cytoplasm</td></tr>
<tr><td>7</td><td>Phosphoglycerate kinase</td><td>+2</td><td></td><td>substrate-level phosphorylation</td></tr>
<tr><td>9</td><td>Enolase</td><td></td><td></td><td>+2 H<sub>2</sub>O</td></tr>
<tr><td>10</td><td>Pyruvate kinase</td><td>+2</td><td></td><td>substrate-level phosphorylation; 2 pyruvate</td></tr>
<tr><td colspan="2"><strong>Total per glucose</strong></td><td><strong>−2 + 4 = net +2</strong></td><td><strong>+2</strong></td><td><strong>2 pyruvate, 2 H<sub>2</sub>O; 0 CO<sub>2</sub>; 0 O<sub>2</sub> used</strong></td></tr>
</tbody></table></div>
<div class="tally"><span class="chip atp">2 ATP (net)</span><span class="chip nadh">2 NADH</span><span class="chip">2 pyruvate</span><span class="chip">2 H<sub>2</sub>O</span></div>
<p>From the slides: glycolysis <strong>costs two ATP</strong>, <strong>produces four ATP</strong>, and <strong>produces two NADH</strong> (high-energy electron carriers). The <strong>fate of pyruvate depends on the presence of oxygen and ATP levels.</strong></p>
<p>Here is a neat way to see where the profit comes from. Count phosphates. Phosphates are added to the sugar at steps 1 and 3 (2 from ATP) and at step 6 (2 from the free P<sub>i</sub> pool), for 4 in total. All 4 are removed and handed to ADP at steps 7 and 10. Two of them were "borrowed" from ATP and two were "free" P<sub>i</sub>. The net 2 ATP is really those two inorganic phosphates, attached in step 6 using energy from the oxidation of G3P.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>The worksheet key: "Phosphate is <strong>added in steps 1, 3 &amp; 6</strong> and phosphate is <strong>removed in steps 7 &amp; 10</strong>." In the class molecule-tracking table, glycolysis is written as <strong>−2 ATP, +4 ATP; 2 NADH + H<sup>+</sup>; 0 FADH<sub>2</sub>; 0 CO<sub>2</sub></strong>.</p></div>

<h3 data-tier="essential">Substrate-level phosphorylation</h3>
<p>The 4 ATP made in glycolysis are produced by <span class="term">substrate-level phosphorylation (SLP)</span>: <strong>ATP forms directly in an enzyme-catalyzed reaction.</strong> An enzyme takes a phosphate group straight off a high-energy substrate molecule (1,3-BPG at step 7, PEP at step 10) and attaches it to ADP:</p>
<div class="eq">substrate–P + ADP → product + ATP &nbsp;(one enzyme, one step)</div>
<p>Why the name? The phosphate comes from a <strong>substrate</strong> (the molecule the enzyme acts on), and adding a phosphate is <strong>phosphorylation</strong>. Compare this with the other way cells make ATP:</p>
<div class="compare">
  <div>
    <h4>Substrate-level phosphorylation</h4>
    <ul>
      <li>Phosphate moved directly from a substrate to ADP by one enzyme.</li>
      <li>No membrane, no gradient, no O<sub>2</sub> needed.</li>
      <li>Glycolysis (steps 7 and 10) and Krebs (1 step).</li>
      <li>Makes only a small amount of ATP: 4 per glucose in total.</li>
    </ul>
  </div>
  <div>
    <h4>Oxidative phosphorylation</h4>
    <ul>
      <li>ADP + P<sub>i</sub> → ATP by <strong>ATP synthase</strong>, powered by an H<sup>+</sup> gradient.</li>
      <li>Needs the inner mitochondrial membrane and O<sub>2</sub>.</li>
      <li>The ETC + chemiosmosis (lesson 2.04).</li>
      <li>Makes most of the ATP (about 34 of 38).</li>
    </ul>
  </div>
</div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The worksheet question defines SLP loosely as "the transfer of a phosphate group catalyzed by an enzyme," and its key lists steps 1, 3 and 6 (phosphate added) as well as 7 and 10 (phosphate removed). Strictly, SLP is <strong>making ATP</strong> by direct transfer, which happens at <strong>steps 7 and 10</strong>. If a question asks "which steps <em>produce ATP</em> by SLP," answer 7 and 10. If it asks which steps involve adding or removing a phosphate, list all five.</p></div>
<p>Substrate-level phosphorylation is why a cell can make some ATP with no oxygen at all: glycolysis needs no membrane, no gradient and no ETC.</p>

<h3 data-tier="likely">Glycolysis and the overall equation</h3>
<p>Look back at C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O. Which parts happen during glycolysis?</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Part of the equation</th><th>In glycolysis?</th><th>Explanation</th></tr></thead>
<tbody>
<tr><td>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (glucose)</td><td><strong>Yes</strong>: the only reactant used</td><td>Split into 2 pyruvate</td></tr>
<tr><td>6 O<sub>2</sub></td><td><strong>No</strong></td><td>Oxygen is not consumed until the end of the ETC</td></tr>
<tr><td>6 CO<sub>2</sub></td><td><strong>No</strong></td><td>No carbon is lost; all 6 carbons are still in the 2 pyruvate (3 + 3). CO<sub>2</sub> is released in pyruvate oxidation and Krebs.</td></tr>
<tr><td>6 H<sub>2</sub>O</td><td>Partly</td><td>2 H<sub>2</sub>O are made at step 9 (enolase). Most of the water in the equation is made at the end of the ETC, when O<sub>2</sub> accepts electrons and H<sup>+</sup>.</td></tr>
</tbody></table></div>
<div class="callout key"><p class="callout-title">On the test</p><p>Class review answer: "<strong>Glucose is the only reactant used</strong>; it is split into 2 pyruvate molecules. <strong>2 water molecules are produced. No CO<sub>2</sub> is produced yet. Oxygen is not consumed yet.</strong>" The worksheet key puts it the other way round: oxygen, water and carbon dioxide are mostly produced or used elsewhere in respiration.</p></div>

<h3 data-tier="likely">Where is the energy now?</h3>
<p>At the end of glycolysis, <strong>most of glucose's bond energy is still trapped in the two pyruvate molecules</strong> (worksheet answer). Glycolysis only "skims off" a little. You can estimate how little. The complete oxidation of glucose releases about 2870 kJ/mol, and making one ATP takes about 30.5 kJ/mol, so if respiration were 100% efficient, one glucose could make about 2870 ÷ 30.5 ≈ <strong>94 ATP</strong>. Glycolysis nets 2. That is about <strong>2%</strong>. Some more energy is sitting in the 2 NADH, but the rest is in pyruvate's chemical bonds, waiting for the mitochondrion.</p>
<p>This is why aerobic organisms do so much better than anaerobic ones. An anaerobic cell has to stop at pyruvate and gets only 2 ATP per glucose. An aerobic cell keeps oxidizing pyruvate all the way to CO<sub>2</sub> and gets up to 38.</p>

<h3 data-tier="likely">Two problems left over after glycolysis</h3>
<p>A worksheet question asks what problems remain for the cell once glycolysis is finished. There are two, and the rest of the unit is largely about how cells solve them.</p>
<ol>
  <li><strong>NAD<sup>+</sup> must be regenerated.</strong> Step 6 needs NAD<sup>+</sup> as the electron acceptor, and every glucose uses up 2 of them, turning them into NADH. Cells contain only a small amount of NAD<sup>+</sup>. If the NADH is not oxidized back to NAD<sup>+</sup>, the cell runs out within seconds, step 6 stops, and the whole pathway stops (and with it, the ATP supply). <em>Solution:</em> with O<sub>2</sub>, the ETC oxidizes NADH back to NAD<sup>+</sup>; without O<sub>2</sub>, fermentation does it.</li>
  <li><strong>Pyruvate must be removed.</strong> Several steps of glycolysis are reversible. If pyruvate (the product) builds up, the reactions slow down and the pathway stalls. Products must be cleared for a pathway to keep running forward. <em>Solution:</em> with O<sub>2</sub>, pyruvate is moved into the mitochondrion and converted to acetyl-CoA; without O<sub>2</sub>, it is converted to lactate or ethanol.</li>
</ol>
<p>(The key also mentions that ADP is needed to make ATP, but the cell uses ATP so constantly that there is always plenty of ADP around, so this is not a real concern.)</p>

<h3 data-tier="essential">The fate of pyruvate</h3>
<p>Pyruvate is a crossroads molecule. What happens to it <strong>depends on the presence of oxygen and on ATP levels</strong>:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Condition</th><th>What happens to pyruvate</th><th>Lesson</th></tr></thead>
<tbody>
<tr><td><strong>O<sub>2</sub> present, cell needs ATP</strong></td><td>Moves into the mitochondrion → pyruvate oxidation → acetyl-CoA → Krebs cycle → ETC. Maximum ATP.</td><td>2.03, 2.04</td></tr>
<tr><td><strong>O<sub>2</sub> absent (or locally used up)</strong></td><td>Fermentation: reduced to <strong>lactate</strong> (animals) or to <strong>ethanol + CO<sub>2</sub></strong> (yeast). Main purpose: regenerate NAD<sup>+</sup> so glycolysis can keep going.</td><td>2.07</td></tr>
<tr><td><strong>ATP already high (energy not needed)</strong></td><td>Used to build things instead: new glucose (gluconeogenesis), lipids (fats), or the amino acid alanine.</td><td>2.05, 2.06</td></tr>
</tbody></table></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>If pyruvate is <strong>not needed for energy</strong>, it can be used for:</p><ul><li><strong>Gluconeogenesis</strong>: making new glucose ("gluco" + "neo" (new) + "genesis" (creation)). This happens mainly in the liver.</li><li><strong>Lipids</strong>: pyruvate is turned into acetyl-CoA, which can be used to build fatty acids for storage as fat.</li><li><strong>Alanine</strong>, an amino acid: pyruvate is just one amino group away from alanine.</li></ul></div>
<p>This shows the two sides of metabolism working together. When energy is plentiful, the products of catabolism are fed into anabolism and stored. When energy is short, they are burned for ATP.</p>

<h3 data-tier="likely">Is the mitochondrion "the powerhouse of the cell"?</h3>
<p>This is one of the slide's review questions, and the answer key says "answers may vary." Whatever you argue, back it with evidence. A strong answer looks at both sides:</p>
<div class="compare">
  <div>
    <h4>Yes, mostly</h4>
    <ul>
      <li>It makes <strong>most</strong> of the cell's ATP: about 34 of a maximum 38 per glucose (stage 4), plus 2 more in the Krebs cycle.</li>
      <li>Three of the four stages happen inside it.</li>
      <li>Cells with high energy needs (muscle, heart, sperm) are packed with mitochondria.</li>
    </ul>
  </div>
  <div>
    <h4>Not entirely</h4>
    <ul>
      <li><strong>Some ATP is made in the cytoplasm</strong>, by glycolysis, without any mitochondria (class answer key's point).</li>
      <li>Some cells have no mitochondria at all (mature red blood cells, bacteria) and get all their ATP from glycolysis.</li>
      <li>Mitochondria do not <em>create</em> energy. They convert chemical energy in food into ATP. The "power" originally came from the sun via photosynthesis.</li>
    </ul>
  </div>
</div>
<p>A balanced conclusion: the mitochondrion is where <strong>most</strong> ATP is produced, so "powerhouse" is fair, but it is not the only site of ATP production, and it depends on glycolysis in the cytoplasm to supply its fuel.</p>

<h3 data-tier="likely">A look ahead: 38 ATP</h3>
<p>The last slide of the lesson summarizes where we are going: <strong>a maximum of 38 ATP is produced per glucose, but some is generally lost.</strong> The slide's diagram breaks it down:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Stage</th><th>How the ATP is made</th><th>ATP per glucose</th></tr></thead>
<tbody>
<tr><td>Glycolysis (cytoplasm)</td><td>Substrate-level phosphorylation</td><td>2</td></tr>
<tr><td>Krebs (citric acid) cycle (matrix)</td><td>Substrate-level phosphorylation</td><td>2</td></tr>
<tr><td>Oxidative phosphorylation (ETC + chemiosmosis)</td><td>ATP synthase, powered by NADH and FADH<sub>2</sub></td><td>about 34</td></tr>
<tr><td colspan="2"><strong>Maximum</strong></td><td><strong>about 38</strong></td></tr>
</tbody></table></div>
<p>The slide also shows the 2 NADH made by glycolysis in the cytoplasm being passed across the mitochondrial membrane by an "electron shuttle," and notes that they may arrive as 2 FADH<sub>2</sub> instead. That is one reason the real number is lower than 38. The class review key uses 36, and modern measurements put the real yield closer to 30–32. You will see why in lesson 2.04.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The ETC stage makes roughly 26–34 ATP, depending on conditions. NADH and FADH<sub>2</sub> drive H<sup>+</sup> across the membrane to make a gradient, and as H<sup>+</sup> flows back through ATP synthase, ADP is turned into ATP.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Do not swap the Krebs numbers. Per glucose the Krebs cycle makes <strong>6 NADH and 2 FADH<sub>2</sub></strong> (plus 2 ATP and 4 CO<sub>2</sub>), not 6 FADH<sub>2</sub> and 2 NADH. NADH is always the one there are more of.</p></div>

<h3 data-tier="likely">Review &amp; application questions</h3>
<details class="check"><summary>1. What are the products of glycolysis?</summary><div class="ans"><p>Per glucose: <strong>2 pyruvate, 2 ATP (net), 2 NADH</strong> (high-energy electron carriers). Also 2 H<sub>2</sub>O and 2 H<sup>+</sup>. (Gross ATP is 4, but 2 were invested.)</p></div></details>
<details class="check"><summary>2. Is the mitochondrion "the powerhouse of the cell"? Defend your answer.</summary><div class="ans"><p>Answers may vary, but must be supported. Yes: it produces most of the cell's ATP (about 34 of 38 by oxidative phosphorylation, plus 2 from Krebs). However, some ATP is made in the cytoplasm by glycolysis, some cells (like red blood cells) have no mitochondria and rely on glycolysis alone, and mitochondria convert energy rather than create it. So it is the <em>main</em> but not the <em>only</em> site of ATP production.</p></div></details>
<details class="check"><summary>3. Which of the reactants/products of cellular respiration are used/produced in glycolysis?</summary><div class="ans"><p><strong>Glucose is the only reactant used</strong>; it is split into 2 pyruvate. <strong>2 water molecules are produced</strong> (step 9). <strong>No CO<sub>2</sub> is produced yet</strong> and <strong>no O<sub>2</sub> is consumed yet</strong>. O<sub>2</sub>, CO<sub>2</sub> and most of the H<sub>2</sub>O belong to later stages.</p></div></details>
<details class="check"><summary>Worksheet: At the end of glycolysis, where is most of the bond energy from glucose?</summary><div class="ans"><p>Still <strong>trapped in the pyruvate</strong> molecules (with a little in the NADH). Glycolysis releases only a small fraction of glucose's energy, about 2% as net ATP.</p></div></details>
<details class="check"><summary>Worksheet: State the products you would expect if an amylose (starch) chain of 120 glucose monomers went through glycolysis.</summary><div class="ans"><p>Multiply the per-glucose numbers by 120: <strong>240 pyruvate</strong>, <strong>480 ATP made</strong> (but 240 ATP consumed, so <strong>240 net ATP</strong>), and <strong>240 NADH</strong>. (Also 240 H<sub>2</sub>O.)</p></div></details>
<details class="check"><summary>How many pyruvate molecules would be produced by the glycolysis of 5 glucose molecules?</summary><div class="ans"><p><strong>10</strong> (2 per glucose).</p></div></details>
<details class="check"><summary>Worksheet: What problems remain for the cell to solve after glycolysis is finished?</summary><div class="ans"><p>(1) <strong>NAD<sup>+</sup> must be regenerated</strong>, because step 6 needs it and the cell's supply is small; NADH must be oxidized back to NAD<sup>+</sup>. (2) <strong>Pyruvate must be removed</strong>, because its build-up would stall the reaction pathway. (ADP is also needed, but the cell always has plenty.)</p></div></details>
<details class="check"><summary>What is happening when phosphoenolpyruvate is converted to pyruvate?</summary><div class="ans"><p><strong>Substrate-level phosphorylation</strong>: pyruvate kinase transfers the high-energy phosphate from PEP directly to ADP, making ATP (step 10). It happens twice per glucose.</p></div></details>
<details class="check"><summary>A patient is deficient in the enzyme that converts fructose-1,6-bisphosphate into DHAP and G3P. What might build up in the cell?</summary><div class="ans"><p>The enzyme is <strong>aldolase</strong> (step 4). Its substrate, <strong>fructose-1,6-bisphosphate</strong>, would pile up. Because the payoff phase cannot happen, the molecules it would have used are not consumed, so <strong>ADP and NAD<sup>+</sup></strong> build up too (class key answer). Meanwhile 2 ATP per glucose have already been spent in steps 1 and 3 with nothing earned back, so the cell actually loses ATP.</p></div></details>
<details class="check"><summary>Identify the reactants needed for glycolysis.</summary><div class="ans"><p><strong>Glucose, ATP and NAD<sup>+</sup></strong> (class key), plus ADP and P<sub>i</sub> for the payoff phase.</p></div></details>
<details class="check"><summary>Why is step 6 the only step in glycolysis that makes NADH?</summary><div class="ans"><p>It is the only redox (oxidation) step. G3P dehydrogenase removes hydrogen (electrons) from G3P, oxidizing it, and NAD<sup>+</sup> accepts those electrons (is reduced) to become NADH. No other step of glycolysis removes electrons from the sugar.</p></div></details>
<details class="check"><summary>Why does glycolysis spend ATP at the start if its whole purpose is to make ATP?</summary><div class="ans"><p>Glucose is very stable, so energy must be invested to destabilize it (activation energy). Adding phosphates at steps 1 and 3 makes the sugar unstable enough to split and to be harvested. The investment of 2 ATP is repaid by the 4 ATP made in the payoff phase, for a net gain of 2. Step 1's phosphate also traps glucose inside the cell.</p></div></details>
<details class="check"><summary>Is glycolysis affected if a cell runs out of oxygen? Why?</summary><div class="ans"><p>Not directly. Glycolysis is anaerobic, so it does not use O<sub>2</sub> (class key: "No, it is an anaerobic process"). It does need NAD<sup>+</sup>, though, and without O<sub>2</sub> the ETC cannot regenerate it, which is why cells switch on fermentation to keep NAD<sup>+</sup> available.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
  <li><strong>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + ATP</strong> (class: 36 ATP; slide maximum 38). Energy goes into ATP directly and into NADH/FADH<sub>2</sub>, which power more ATP. O<sub>2</sub> = final electron acceptor.</li>
  <li>Building ATP is endergonic and anabolic, so it <strong>must be coupled</strong> to the exergonic breakdown of glucose.</li>
  <li>Four stages: <strong>glycolysis</strong> (10 steps, cytoplasm, no O<sub>2</sub>) → <strong>pyruvate oxidation</strong> (1 step, matrix) → <strong>Krebs</strong> (8 steps, cyclic, matrix) → <strong>ETC + chemiosmosis</strong> (inner membrane).</li>
  <li>Mitochondrion: <strong>smooth outer membrane</strong>, <strong>highly folded inner membrane</strong> (folds = <strong>cristae</strong>, more surface area for ETC + ATP synthase), <strong>fluid-filled intermembrane space</strong>, <strong>protein-rich matrix</strong>.</li>
  <li>Glycolysis = "sugar splitting": glucose (6C) → 2 pyruvate (3C), in all cells, anaerobic.</li>
  <li><strong>Prep phase (1–5):</strong> spend 2 ATP to destabilize and split glucose. <strong>Payoff phase (6–10):</strong> make 4 ATP + 2 NADH. Everything after step 5 happens ×2.</li>
  <li>Steps: 1 hexokinase (G6P, −ATP) · 2 phosphoglucose isomerase (F6P) · 3 <strong>PFK</strong> (F1,6BP, −ATP, key regulatory step) · 4 aldolase (DHAP + G3P) · 5 triose phosphate isomerase (2 G3P) · 6 G3P dehydrogenase (1,3-BPG, +NADH, adds P<sub>i</sub> from the cellular pool) · 7 phosphoglycerate kinase (3PG, +ATP) · 8 phosphoglycerate mutase (2PG) · 9 enolase (PEP, −H<sub>2</sub>O) · 10 pyruvate kinase (pyruvate, +ATP).</li>
  <li><strong>Net: 2 ATP, 2 NADH, 2 pyruvate, 2 H<sub>2</sub>O.</strong> No CO<sub>2</sub>, no O<sub>2</sub>.</li>
  <li><strong>Substrate-level phosphorylation</strong>: ATP formed directly in an enzyme-catalyzed reaction (steps 7 and 10). Phosphate added at steps 1, 3, 6; removed at 7, 10.</li>
  <li>Most of glucose's energy is still in <strong>pyruvate</strong>. Problems left: <strong>regenerate NAD<sup>+</sup></strong>, <strong>remove pyruvate</strong>.</li>
  <li>Fate of pyruvate depends on <strong>O<sub>2</sub> and ATP levels</strong>: aerobic → mitochondria; anaerobic → fermentation; not needed → gluconeogenesis, lipids, alanine.</li>
  <li>Maximum <strong>38 ATP</strong> per glucose (2 glycolysis + 2 Krebs + ~34 oxidative phosphorylation), but some is generally lost.</li>
</ul>
`
});
// END-LESSONS-A
