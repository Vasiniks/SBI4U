window.EXTRA = window.EXTRA || [];

window.EXTRA.push(
  {
    id: "e-engelmann",
    title: "Engelmann's bacteria and the first action spectrum",
    lesson: "2.08",
    tier: "likely",
    why: "Shows how red and blue light were first proved to drive photosynthesis, and explains the difference between an absorption spectrum and an action spectrum, a common graph question.",
    html: `
<h3>Absorbing light is not the same as using it</h3>
<p>The slides define an <span class="term">absorption spectrum</span>: a graph of how much light a pigment absorbs at each wavelength. It is measured on pigment extracted from leaves (for example, dissolved in acetone) using a spectrophotometer. It tells you what a pigment <em>can</em> catch.</p>
<p>An <span class="term">action spectrum</span> answers a different question: how well does each wavelength actually <em>drive</em> photosynthesis? To make one, you shine light of one wavelength at a time on a living plant (all at the same intensity) and measure the rate of photosynthesis, usually as O<sub>2</sub> released or CO<sub>2</sub> taken up.</p>
<p>Comparing the two graphs tells you which pigments are doing the work. If the action spectrum has peaks where a pigment absorbs strongly, that pigment's absorbed energy is being used for photosynthesis.</p>

<h3>The experiment (1882)</h3>
<p>In 1882, long before anyone could measure tiny amounts of O<sub>2</sub>, the German biologist Theodor Engelmann used living bacteria as oxygen detectors. His setup was simple:</p>
<ol class="steps">
<li><p class="step-head">A filament of green alga</p><p>He placed a long filament of the alga <em>Cladophora</em> on a microscope slide. The filament is a single row of cells, so each part of it can be lit separately.</p></li>
<li><p class="step-head">A spectrum of light</p><p>He passed light through a prism so that it spread into a rainbow along the length of the filament. Each section of the alga received only one colour.</p></li>
<li><p class="step-head">Oxygen-seeking bacteria</p><p>He added aerobic bacteria that swim toward higher O<sub>2</sub> concentrations. After a short time, he looked to see where they had gathered.</p></li>
</ol>

<figure class="diagram">
<svg viewBox="0 0 640 300" role="img" aria-labelledby="ec1-t ec1-d">
<title id="ec1-t">Engelmann's experiment</title>
<desc id="ec1-d">A filament of green alga lies across a spectrum from a prism. Aerobic bacteria crowd above the blue-violet and red parts of the filament, with only a few above the green and yellow parts.</desc>
<defs>
<marker id="ec1-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--ink-2)"/></marker>
</defs>
<text x="270" y="30" text-anchor="middle" style="fill:var(--ink);font-size:14px">Aerobic bacteria crowd where the alga releases the most O₂</text>
<text x="110" y="72" text-anchor="middle" style="fill:var(--ink-2);font-size:13px">blue-violet: many</text>
<text x="242" y="72" text-anchor="middle" style="fill:var(--ink-2);font-size:13px">green: few</text>
<text x="454" y="72" text-anchor="middle" style="fill:var(--ink-2);font-size:13px">red: many</text>
<g style="fill:var(--ink-2)">
<ellipse cx="48" cy="138" rx="5" ry="2.5"/><ellipse cx="58" cy="124" rx="5" ry="2.5"/><ellipse cx="66" cy="140" rx="5" ry="2.5"/><ellipse cx="74" cy="110" rx="5" ry="2.5"/><ellipse cx="82" cy="130" rx="5" ry="2.5"/><ellipse cx="90" cy="98" rx="5" ry="2.5"/><ellipse cx="96" cy="142" rx="5" ry="2.5"/><ellipse cx="104" cy="118" rx="5" ry="2.5"/><ellipse cx="112" cy="106" rx="5" ry="2.5"/><ellipse cx="118" cy="136" rx="5" ry="2.5"/><ellipse cx="126" cy="124" rx="5" ry="2.5"/><ellipse cx="134" cy="94" rx="5" ry="2.5"/><ellipse cx="140" cy="140" rx="5" ry="2.5"/><ellipse cx="148" cy="112" rx="5" ry="2.5"/><ellipse cx="156" cy="128" rx="5" ry="2.5"/><ellipse cx="164" cy="104" rx="5" ry="2.5"/><ellipse cx="86" cy="116" rx="5" ry="2.5"/>
<ellipse cx="220" cy="138" rx="5" ry="2.5"/><ellipse cx="268" cy="128" rx="5" ry="2.5"/>
<ellipse cx="330" cy="140" rx="5" ry="2.5"/><ellipse cx="356" cy="130" rx="5" ry="2.5"/><ellipse cx="376" cy="142" rx="5" ry="2.5"/>
<ellipse cx="404" cy="138" rx="5" ry="2.5"/><ellipse cx="412" cy="120" rx="5" ry="2.5"/><ellipse cx="420" cy="134" rx="5" ry="2.5"/><ellipse cx="428" cy="104" rx="5" ry="2.5"/><ellipse cx="436" cy="142" rx="5" ry="2.5"/><ellipse cx="442" cy="122" rx="5" ry="2.5"/><ellipse cx="450" cy="96" rx="5" ry="2.5"/><ellipse cx="456" cy="136" rx="5" ry="2.5"/><ellipse cx="464" cy="114" rx="5" ry="2.5"/><ellipse cx="470" cy="142" rx="5" ry="2.5"/><ellipse cx="478" cy="126" rx="5" ry="2.5"/><ellipse cx="486" cy="104" rx="5" ry="2.5"/><ellipse cx="494" cy="138" rx="5" ry="2.5"/><ellipse cx="446" cy="108" rx="5" ry="2.5"/><ellipse cx="500" cy="124" rx="5" ry="2.5"/>
</g>
<rect x="30" y="150" width="480" height="22" rx="11" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<g style="stroke:var(--leaf);stroke-width:1">
<line x1="70" y1="151" x2="70" y2="171"/><line x1="110" y1="151" x2="110" y2="171"/><line x1="150" y1="151" x2="150" y2="171"/><line x1="190" y1="151" x2="190" y2="171"/><line x1="230" y1="151" x2="230" y2="171"/><line x1="270" y1="151" x2="270" y2="171"/><line x1="310" y1="151" x2="310" y2="171"/><line x1="350" y1="151" x2="350" y2="171"/><line x1="390" y1="151" x2="390" y2="171"/><line x1="430" y1="151" x2="430" y2="171"/><line x1="470" y1="151" x2="470" y2="171"/>
</g>
<g style="stroke:var(--ink-2);stroke-width:1.5">
<line x1="70" y1="210" x2="70" y2="180" marker-end="url(#ec1-ar)"/><line x1="150" y1="210" x2="150" y2="180" marker-end="url(#ec1-ar)"/><line x1="230" y1="210" x2="230" y2="180" marker-end="url(#ec1-ar)"/><line x1="310" y1="210" x2="310" y2="180" marker-end="url(#ec1-ar)"/><line x1="390" y1="210" x2="390" y2="180" marker-end="url(#ec1-ar)"/><line x1="470" y1="210" x2="470" y2="180" marker-end="url(#ec1-ar)"/>
</g>
<rect x="30" y="212" width="80" height="24" style="fill:var(--krebs);stroke:none"/>
<rect x="110" y="212" width="72" height="24" style="fill:var(--etc);stroke:none"/>
<rect x="182" y="212" width="120" height="24" style="fill:var(--leaf);stroke:none"/>
<rect x="302" y="212" width="80" height="24" style="fill:var(--glyco);stroke:none"/>
<rect x="382" y="212" width="128" height="24" style="fill:var(--proton);stroke:none"/>
<text x="30" y="254" style="fill:var(--ink-2);font-size:12px">400 nm</text>
<text x="190" y="254" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">500</text>
<text x="350" y="254" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">600</text>
<text x="510" y="254" text-anchor="end" style="fill:var(--ink-2);font-size:12px">700 nm</text>
<text x="270" y="284" text-anchor="middle" style="fill:var(--ink);font-size:13px">Each part of the filament is lit by one colour</text>
<text x="522" y="112" style="fill:var(--ink);font-size:13px">aerobic</text>
<text x="522" y="128" style="fill:var(--ink);font-size:13px">bacteria</text>
<text x="522" y="158" style="fill:var(--ink);font-size:13px">filament of</text>
<text x="522" y="174" style="fill:var(--ink);font-size:13px">green alga</text>
<text x="522" y="222" style="fill:var(--ink);font-size:13px">spectrum</text>
<text x="522" y="238" style="fill:var(--ink);font-size:13px">from a prism</text>
</svg>
<figcaption>Engelmann's result. The bacteria are living O<sub>2</sub> detectors: they gather where the alga releases the most oxygen, under blue-violet and red light.</figcaption>
</figure>

<h3>What the result means</h3>
<p>The bacteria crowded around the parts of the filament lit by <strong>blue-violet</strong> and <strong>red</strong> light, and very few gathered in the green and yellow regions. Since the bacteria follow oxygen, the alga must have been releasing the most O<sub>2</sub>, and therefore photosynthesizing fastest, in blue-violet and red light. The pattern of bacteria was, in effect, the first <strong>action spectrum</strong>. It matched the absorption peaks of chlorophyll, which was strong evidence that chlorophyll is the pigment that drives photosynthesis.</p>
<p>It is also a neat example of using one organism's behaviour to measure another organism's chemistry, when no instrument was sensitive enough to do it directly.</p>

<h3>Why the action spectrum is broader than chlorophyll a</h3>
<p>Modern action spectra measured with O<sub>2</sub> electrodes show the same two peaks, but they are wider than the absorption spectrum of chlorophyll a alone, especially between 450 and 500 nm. That is the job of the <span class="term">accessory pigments</span> from class: chlorophyll b and the carotenoids absorb photons that chlorophyll a absorbs poorly, then pass the energy to chlorophyll a in the reaction centre. The action spectrum therefore matches the <em>combined</em> absorption of all the pigments, which is the idea behind the PAR slide (all pigments together absorb across the visible spectrum).</p>
<p>The green "trough" in the action spectrum is low but not zero (about 30% of maximum in many leaves). A leaf is several cells thick, and green light that is not absorbed by one chloroplast is scattered and meets many others, so some of it is absorbed eventually. Plants look green because they reflect more green than any other colour, not because they reflect all of it.</p>

<h3>The red drop and a clue to two photosystems</h3>
<p>In the 1940s and 1950s, the American plant physiologist Robert Emerson found something odd. Above about 680 nm, the rate of photosynthesis falls off much faster than chlorophyll's absorption does. This is called the <strong>red drop</strong>. Far-red light (around 700 nm) is still absorbed, but it is used poorly.</p>
<p>Then he found that if far-red light was given <em>together</em> with shorter-wavelength red light, the rate was <strong>greater than the sum</strong> of the two lights given separately (the <strong>Emerson enhancement effect</strong>). The best explanation was that photosynthesis needs <strong>two different photosystems</strong> working in series: one that uses far-red light well (photosystem I, P700) and one that needs slightly shorter wavelengths (photosystem II, P680). Far-red light alone excites mainly PSI, so electrons cannot be supplied from water fast enough. This is the Z scheme you learn in lesson 2.09.</p>

<div class="callout key"><p class="callout-title">On the test</p><p>Know both definitions. If you are given an action spectrum and absorption spectra on the same graph: (1) peaks in blue-violet and red show chlorophyll is the main pigment; (2) activity where chlorophyll a absorbs little (about 450–500 nm) shows that accessory pigments pass energy to chlorophyll a; (3) low activity in green explains why leaves look green.</p></div>

<details class="check"><summary>Why did Engelmann need bacteria at all? Why not just watch for bubbles?</summary><div class="ans"><p>A single algal filament releases far too little O<sub>2</sub> to see bubbles, and in 1882 there were no instruments sensitive enough to measure tiny local differences in O<sub>2</sub>. Aerobic bacteria swim toward oxygen, so where they gathered showed where O<sub>2</sub> was being released fastest along the filament.</p></div></details>
<details class="check"><summary>A plant's action spectrum shows high activity at 480 nm, where chlorophyll a absorbs little. What does this tell you?</summary><div class="ans"><p>Other pigments (accessory pigments such as carotenoids and chlorophyll b) absorb 480 nm light and transfer the energy to chlorophyll a in the reaction centre, so that light still drives photosynthesis.</p></div></details>
`
  },
  {
    id: "e-photosystem",
    title: "Inside a photosystem: the antenna, P680⁺ and the water-splitting clock",
    lesson: "2.09",
    tier: "extra",
    why: "Explains how the antenna funnels energy to the reaction centre, why only photosystem II can pull electrons out of water, and how the class's \"Z protein\" makes O₂ four electrons at a time.",
    html: `
<h3>Why a photosystem needs an antenna</h3>
<p>The class definition is that a photosystem has an <span class="term">antenna complex</span>, which absorbs photons and passes the energy along, and a <span class="term">reaction centre</span>, where chlorophyll a gives up an excited electron. In numbers, a photosystem II unit holds roughly 200–300 chlorophyll and carotenoid molecules, all held in exact positions by proteins, but only a <strong>special pair</strong> of chlorophyll a molecules in the reaction centre actually does chemistry.</p>
<p>Why have so many helpers? Even in full sunlight, a single chlorophyll molecule absorbs only about 10 photons per second. A reaction centre can use well over a hundred per second. Without an antenna, the reaction centre would sit idle most of the time; with hundreds of pigments collecting light for it, it is kept busy.</p>

<h3>Energy moves, electrons stay put</h3>
<p>Inside the antenna, what moves from pigment to pigment is <strong>energy</strong>, not electrons. When a pigment absorbs a photon, one of its electrons is raised to an excited state. As the electron drops back, the energy is passed to a neighbouring pigment, exciting one of <em>its</em> electrons instead. This is called <span class="term">resonance energy transfer</span>. A good comparison is two tuning forks: strike one, and a nearby fork tuned to the same note starts vibrating without being touched. Each hop takes about a trillionth of a second, so the energy reaches the reaction centre before it can be lost as heat or fluorescence.</p>
<p>The antenna is built as an energy <strong>funnel</strong>. Pigments that absorb shorter wavelengths (higher-energy photons), such as carotenoids and chlorophyll b, sit toward the outside. Chlorophyll a closer to the centre absorbs slightly longer wavelengths, and the reaction centre chlorophyll absorbs the longest of all (680 nm in PSII, 700 nm in PSI), so it has the lowest excited-state energy. Each hop loses a tiny bit of energy as heat, so energy flows downhill toward the reaction centre and rarely flows back out. The reaction centre is an <strong>energy trap</strong>.</p>

<figure class="diagram">
<svg viewBox="0 0 640 300" role="img" aria-labelledby="ec2-t ec2-d">
<title id="ec2-t">Energy funnel in a photosystem antenna</title>
<desc id="ec2-d">An energy staircase. Carotenoids have the highest excited-state energy, then chlorophyll b, then antenna chlorophyll a, and P680 in the reaction centre is lowest. Energy hops down the stairs. From P680, an electron is passed up to the primary electron acceptor.</desc>
<defs>
<marker id="ec2-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--ink)"/></marker>
<marker id="ec2-ae" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--etc)"/></marker>
</defs>
<line x1="50" y1="262" x2="50" y2="40" style="stroke:var(--ink-2);stroke-width:1.5" marker-end="url(#ec2-ar)"/>
<text x="32" y="150" text-anchor="middle" transform="rotate(-90 32 150)" style="fill:var(--ink-2);font-size:13px">energy of excited pigment</text>
<text x="620" y="40" text-anchor="end" style="fill:var(--ink);font-size:13px">energy hops downhill to the trap,</text>
<text x="620" y="58" text-anchor="end" style="fill:var(--ink);font-size:13px">then an electron leaves</text>
<rect x="70" y="56" width="125" height="28" rx="5" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<text x="132" y="75" text-anchor="middle" style="fill:var(--ink);font-size:13px">carotenoid</text>
<text x="132" y="102" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">absorbs ~450–490 nm</text>
<rect x="205" y="110" width="125" height="28" rx="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<text x="267" y="129" text-anchor="middle" style="fill:var(--ink);font-size:13px">chlorophyll b</text>
<text x="267" y="156" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">absorbs ~650 nm</text>
<rect x="340" y="158" width="125" height="28" rx="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<text x="402" y="177" text-anchor="middle" style="fill:var(--ink);font-size:13px">chlorophyll a</text>
<text x="402" y="204" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">absorbs ~670 nm</text>
<rect x="475" y="206" width="125" height="28" rx="5" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
<text x="537" y="225" text-anchor="middle" style="fill:var(--ink);font-size:13px">P680 (RC)</text>
<text x="537" y="252" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">absorbs 680 nm</text>
<line x1="198" y1="84" x2="214" y2="106" style="stroke:var(--ink);stroke-width:1.5" marker-end="url(#ec2-ar)"/>
<line x1="333" y1="138" x2="349" y2="154" style="stroke:var(--ink);stroke-width:1.5" marker-end="url(#ec2-ar)"/>
<line x1="468" y1="186" x2="484" y2="202" style="stroke:var(--ink);stroke-width:1.5" marker-end="url(#ec2-ar)"/>
<rect x="480" y="96" width="140" height="30" rx="5" style="fill:var(--surface);stroke:var(--etc);stroke-width:1.5"/>
<text x="550" y="116" text-anchor="middle" style="fill:var(--ink);font-size:13px">primary acceptor</text>
<line x1="575" y1="204" x2="575" y2="130" style="stroke:var(--etc);stroke-width:2" marker-end="url(#ec2-ae)"/>
<text x="585" y="172" style="fill:var(--etc);font-size:14px">e⁻</text>
</svg>
<figcaption>The antenna as an energy staircase. Energy (not electrons) passes from pigment to pigment, losing a little each time, until it reaches P680. Only there does an electron actually leave, to the primary electron acceptor.</figcaption>
</figure>

<h3>Charge separation: where light becomes chemistry</h3>
<p>When the energy reaches P680, its excited electron is passed within a few trillionths of a second to the <span class="term">primary electron acceptor</span>. In PSII this is a molecule called <strong>pheophytin</strong>, which is a chlorophyll without its central Mg<sup>2+</sup> ion. From there it passes to plastoquinone, which carries it to the cytochrome b<sub>6</sub>-f complex. This first step, P680 → acceptor, is called <strong>charge separation</strong>. It is the moment light energy is converted into chemical (redox) energy: P680 is left positively charged (P680<sup>+</sup>) and the acceptor is negatively charged.</p>

<h3>Why P680<sup>+</sup> is the strongest oxidizer in biology</h3>
<p>Water holds its electrons very tightly; that is why O<sub>2</sub> is such a good final electron acceptor in respiration (lesson 2.04). Splitting water runs that reaction backwards, so it needs something that pulls on electrons even harder than oxygen.</p>
<p>That something is <strong>P680<sup>+</sup></strong>. Scientists measure electron-pulling strength as <span class="term">redox potential</span> (in volts; more positive = stronger pull). P680<sup>+</sup> is about +1.2 V, the most positive value known in any living thing, while the O<sub>2</sub>/H<sub>2</sub>O pair is about +0.82 V. So P680<sup>+</sup> can take electrons from water. P700<sup>+</sup>, at only about +0.45 V, cannot. This is why water is always linked to photosystem II, and why PSII has to come before PSI.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Electron carrier</th><th>Redox potential (V, approx.)</th></tr></thead>
<tbody>
<tr><td>Excited P700 (P700*)</td><td>about −1.2</td></tr>
<tr><td>Ferredoxin</td><td>about −0.43</td></tr>
<tr><td>NADP<sup>+</sup>/NADPH</td><td>−0.32</td></tr>
<tr><td>P700<sup>+</sup></td><td>about +0.45</td></tr>
<tr><td>O<sub>2</sub>/H<sub>2</sub>O</td><td>+0.82</td></tr>
<tr><td>P680<sup>+</sup></td><td>about +1.2</td></tr>
</tbody></table></div>

<h3>The "Z protein": a four-step water-splitting clock</h3>
<p>The slides call the water-splitting enzyme the "Z protein." Researchers call it the <span class="term">oxygen-evolving complex</span> (OEC). It sits on the <strong>lumen side</strong> of PSII, and its active centre is a small cluster of four manganese ions and one calcium ion, linked by oxygen atoms. Between the cluster and P680 is a tyrosine amino acid in one of the PSII proteins. Before anyone knew what it was, this unknown electron donor to P680 was simply labelled "Z," which is probably where the class's name comes from.</p>
<p>There is a problem to solve. Each photon removes only <strong>one</strong> electron from P680, but making one O<sub>2</sub> requires removing <strong>four</strong> electrons from two water molecules. If water were split one electron at a time, it would release dangerous partly oxidized forms of oxygen, such as hydroxyl radicals and hydrogen peroxide. The OEC solves this by acting as a <strong>charge-storing clock</strong>:</p>
<ol class="steps">
<li><p class="step-head">Four flashes, four electrons</p><p>Each time P680 is excited and loses an electron, P680<sup>+</sup> takes one electron from the tyrosine, which takes one from the manganese cluster. The cluster steps through states called S<sub>0</sub> → S<sub>1</sub> → S<sub>2</sub> → S<sub>3</sub> → S<sub>4</sub>, storing one more positive charge each time.</p></li>
<li><p class="step-head">Water is split in one go</p><p>In the S<sub>4</sub> state, the cluster takes four electrons from two bound water molecules at once: 2 H<sub>2</sub>O → O<sub>2</sub> + 4 H<sup>+</sup> + 4 e<sup>−</sup>. O<sub>2</sub> is released, the 4 H<sup>+</sup> go into the lumen and add to the gradient, and the clock resets to S<sub>0</sub>.</p></li>
</ol>
<p>Evidence: in 1969–1970, chloroplasts kept in the dark and then given very short flashes of light released O<sub>2</sub> in bursts on the 3rd, 7th, 11th … flash, every 4th flash. (The cluster rests in S<sub>1</sub> in the dark, so the first burst needs only three.)</p>
<p>This is the class version doubled: one water gives 2 H<sup>+</sup>, 2 e<sup>−</sup> and one oxygen atom, so two waters give one O<sub>2</sub>.</p>

<div class="callout key"><p class="callout-title">On the test</p><p>Class level: the antenna absorbs photons and passes the energy to the reaction centre; its chlorophyll a (P680 or P700) loses an excited electron to a primary electron acceptor; P680 replaces its electrons by photolysis of water. This page explains <em>why</em>.</p></div>

<details class="check"><summary>Why can photosystem I not take its electrons directly from water?</summary><div class="ans"><p>P700<sup>+</sup> (about +0.45 V) does not pull on electrons strongly enough to remove them from water (+0.82 V). Only P680<sup>+</sup> (about +1.2 V) is a strong enough oxidizer, so water must feed electrons into PSII, which then passes them through the ETC to PSI.</p></div></details>
`
  },
  {
    id: "e-jagendorf",
    title: "Jagendorf's acid-bath experiment: proof of chemiosmosis in chloroplasts",
    lesson: "2.09",
    tier: "extra",
    why: "A classic experiment showing that an H⁺ gradient alone, with no light and no electron flow, can make ATP; it is a favourite \"interpret the experiment\" question and backs up the class idea of photophosphorylation by chemiosmosis.",
    html: `
<h3>The question</h3>
<p>By the early 1960s, biologists knew that chloroplasts make ATP only while electrons flow through the light reactions. What they did not agree on was <em>how</em> electron flow is connected to ATP synthesis.</p>
<ul>
<li>In 1961, the British biochemist Peter Mitchell proposed <span class="term">chemiosmosis</span>: electron flow pumps H<sup>+</sup> across a membrane, and the H<sup>+</sup> gradient then powers ATP synthase. The gradient is the link.</li>
<li>Most biochemists at the time preferred a different idea: that electron carriers directly make some unknown "high-energy" chemical intermediate, which then transfers its energy to ADP. Nobody had ever found this intermediate.</li>
</ul>
<p>To decide, you need an experiment that separates the gradient from the electron flow. If a gradient alone, with <strong>no</strong> electron flow at all, can make ATP, then chemiosmosis must be right.</p>

<h3>The acid-bath experiment (1966)</h3>
<p>The American plant biochemist André Jagendorf and his colleague Ernest Uribe did exactly that with thylakoids isolated from spinach chloroplasts. Every step was done <strong>in the dark</strong>, so the photosystems could not be excited and no electrons could flow.</p>
<ol class="steps">
<li><p class="step-head">Acid soak</p><p>The thylakoids were soaked in a buffer at pH 4 (an organic acid that slowly crosses the membrane) until the inside of each thylakoid, the lumen, also reached pH 4.</p></li>
<li><p class="step-head">Sudden switch</p><p>The thylakoids were then quickly moved into a buffer at pH 8 that contained ADP and inorganic phosphate. Now the lumen (pH 4) had 10,000 times more H<sup>+</sup> than the solution outside (pH 8).</p></li>
<li><p class="step-head">Result</p><p>A burst of ATP was made within seconds, then production stopped as the H<sup>+</sup> leaked out and the gradient disappeared.</p></li>
</ol>

<figure class="diagram">
<svg viewBox="0 0 640 260" role="img" aria-labelledby="ec3-t ec3-d">
<title id="ec3-t">Jagendorf's acid-bath experiment</title>
<desc id="ec3-d">Three panels. First, thylakoids soak in pH 4 buffer in the dark until the lumen is pH 4. Second, they are moved to pH 8 buffer with ADP and phosphate; H+ flows out of the lumen through ATP synthase. Third, ATP is made in the dark with no light or electron flow: the H+ gradient alone drives it.</desc>
<defs>
<marker id="ec3-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--ink)"/></marker>
<marker id="ec3-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--proton)"/></marker>
</defs>
<text x="105" y="36" text-anchor="middle" style="fill:var(--ink);font-size:14px">1. Soak in pH 4 (dark)</text>
<text x="320" y="36" text-anchor="middle" style="fill:var(--ink);font-size:14px">2. Move to pH 8 (dark)</text>
<text x="535" y="36" text-anchor="middle" style="fill:var(--ink);font-size:14px">3. Result</text>
<rect x="10" y="50" width="190" height="190" rx="10" style="fill:var(--surface-2);stroke:var(--line);stroke-width:1"/>
<rect x="225" y="50" width="190" height="190" rx="10" style="fill:var(--surface-2);stroke:var(--line);stroke-width:1"/>
<rect x="440" y="50" width="190" height="190" rx="10" style="fill:var(--surface-2);stroke:var(--line);stroke-width:1"/>
<ellipse cx="105" cy="120" rx="70" ry="40" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2"/>
<text x="105" y="115" text-anchor="middle" style="fill:var(--ink);font-size:13px">lumen</text>
<text x="105" y="134" text-anchor="middle" style="fill:var(--proton);font-size:14px">pH 4</text>
<text x="105" y="195" text-anchor="middle" style="fill:var(--ink);font-size:13px">outside: pH 4</text>
<text x="105" y="215" text-anchor="middle" style="fill:var(--ink-2);font-size:13px">acid soaks in</text>
<ellipse cx="320" cy="112" rx="70" ry="40" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2"/>
<text x="320" y="106" text-anchor="middle" style="fill:var(--ink);font-size:13px">lumen</text>
<text x="320" y="125" text-anchor="middle" style="fill:var(--proton);font-size:14px">pH 4</text>
<rect x="308" y="148" width="24" height="22" rx="4" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<line x1="320" y1="172" x2="320" y2="192" style="stroke:var(--proton);stroke-width:2" marker-end="url(#ec3-ah)"/>
<text x="332" y="188" style="fill:var(--proton);font-size:13px">H⁺</text>
<text x="338" y="164" style="fill:var(--ink-2);font-size:12px">ATP synthase</text>
<text x="320" y="212" text-anchor="middle" style="fill:var(--ink);font-size:13px">outside: pH 8</text>
<text x="320" y="230" text-anchor="middle" style="fill:var(--ink);font-size:13px">+ ADP + Pᵢ</text>
<text x="535" y="95" text-anchor="middle" style="fill:var(--ink);font-size:15px">ATP is made</text>
<text x="535" y="125" text-anchor="middle" style="fill:var(--ink);font-size:13px">in the dark:</text>
<text x="535" y="145" text-anchor="middle" style="fill:var(--ink);font-size:13px">no light,</text>
<text x="535" y="165" text-anchor="middle" style="fill:var(--ink);font-size:13px">no electron flow.</text>
<text x="535" y="195" text-anchor="middle" style="fill:var(--proton);font-size:13px">The H⁺ gradient</text>
<text x="535" y="215" text-anchor="middle" style="fill:var(--proton);font-size:13px">alone drives it.</text>
<line x1="202" y1="145" x2="222" y2="145" style="stroke:var(--ink);stroke-width:1.5" marker-end="url(#ec3-ar)"/>
<line x1="417" y1="145" x2="437" y2="145" style="stroke:var(--ink);stroke-width:1.5" marker-end="url(#ec3-ar)"/>
</svg>
<figcaption>The acid-bath experiment. An artificial H<sup>+</sup> gradient across the thylakoid membrane, made without any light, was enough for ATP synthase to make ATP.</figcaption>
</figure>

<h3>The controls that made it convincing</h3>
<ul>
<li>Thylakoids that were moved from pH 4 to another pH 4 buffer (no gradient) made <strong>no ATP</strong>. So it was the <em>difference</em> in pH, not the acid itself, that mattered.</li>
<li>Without ADP or phosphate in the pH 8 buffer, no ATP was made, so the product really was new ATP made by phosphorylating ADP.</li>
<li>Adding a chemical that makes the membrane leaky to H<sup>+</sup> stopped ATP formation, because the gradient could escape without passing through ATP synthase.</li>
<li>The amount of ATP made depended on the size of the pH jump: a bigger gradient stored more energy and made more ATP.</li>
</ul>

<h3>What it proved</h3>
<p>The light reactions were completely switched off, so there were no excited electrons, no ETC and no "high-energy intermediate." The only possible energy source was the H<sup>+</sup> gradient. So the gradient by itself is enough to drive ATP synthase. In a living chloroplast, the job of non-cyclic and cyclic electron flow is to <em>build</em> that gradient (plus, for non-cyclic flow, to make NADPH), and ATP synthase does the rest. This is the class idea of <strong>photophosphorylation via chemiosmosis</strong>. Mitchell's hypothesis became the accepted model, and he received the 1978 Nobel Prize in Chemistry.</p>

<h3>How big is the real gradient?</h3>
<p>In bright light, textbooks give the lumen a pH of about 5 and the stroma a pH of about 8. Since pH is a log scale ([H<sup>+</sup>] = 10<sup>−pH</sup>), a difference of 3 pH units means the lumen has 10<sup>3</sup> = <strong>1000 times</strong> more H<sup>+</sup> than the stroma. Jagendorf's 4-unit jump (pH 4 to 8) was a 10,000-fold difference, even larger than in nature.</p>
<p>There is one interesting difference from mitochondria. In mitochondria, a large part of the proton-motive force is the electrical charge difference across the inner membrane. In chloroplasts, other ions move to cancel the charge: Cl<sup>−</sup> follows H<sup>+</sup> into the lumen and Mg<sup>2+</sup> moves out into the stroma. So almost all of the chloroplast's driving force is the <strong>pH difference</strong>. The rising stroma pH and Mg<sup>2+</sup> also help switch on the Calvin cycle enzymes (see the RuBisCO activase topic).</p>

<h3>Uncouplers work in chloroplasts too</h3>
<p>In lesson 2.04 you saw that DNP uncouples the mitochondrial ETC from ATP synthesis. Chloroplasts have their own uncouplers. Ammonia (NH<sub>3</sub>) crosses the thylakoid membrane easily, picks up an H<sup>+</sup> in the acidic lumen to become NH<sub>4</sub><sup>+</sup>, and is trapped there. This mops up the gradient. Electron flow continues, even faster than before, so O<sub>2</sub> and NADPH are still made, but ATP synthesis stops.</p>

<div class="callout key"><p class="callout-title">On the test</p><p>If you are asked to explain this experiment, use three steps: (1) no light means no electron flow; (2) the only energy source was the H<sup>+</sup> concentration difference (lumen high, outside low); (3) H<sup>+</sup> flowing out through ATP synthase made ATP, so the gradient alone drives ATP synthesis: chemiosmosis.</p></div>

<details class="check"><summary>Why was it essential that the whole experiment was done in the dark?</summary><div class="ans"><p>In light, the photosystems would drive electron flow, which pumps H<sup>+</sup> and also makes ATP. Then you could not tell whether the ATP came from the artificial gradient or from electron transport. In the dark there is no electron flow, so the artificial gradient is the only possible energy source.</p></div></details>
<details class="check"><summary>Predict the result if thylakoids soaked at pH 8 were moved into pH 4 buffer with ADP and P<sub>i</sub>.</summary><div class="ans"><p>Little or no ATP. Now the outside has more H<sup>+</sup> than the lumen, so H<sup>+</sup> would tend to flow <em>into</em> the lumen. ATP synthase in the thylakoid membrane makes ATP only when H<sup>+</sup> flows from the lumen out to the stroma side, so the gradient is in the wrong direction.</p></div></details>
`
  },
  {
    id: "e-tracing-atoms",
    title: "Tracing the atoms: heavy oxygen and Calvin's \"lollipop\"",
    lesson: "2.10",
    tier: "likely",
    why: "The class facts that O₂ comes from water and that PGA is the first product of the Calvin cycle were both discovered with isotope tracers; knowing the experiments lets you explain and defend them.",
    html: `
<h3>Isotopes as tags</h3>
<p>Atoms of the same element can have different numbers of neutrons. These <span class="term">isotopes</span> behave the same way in chemical reactions, so a cell treats them like ordinary atoms, but scientists can tell them apart. That makes them perfect tags for following atoms through a pathway.</p>
<ul>
<li><strong>Oxygen-18 (<sup>18</sup>O)</strong> is a stable "heavy" isotope (ordinary oxygen is <sup>16</sup>O). It is not radioactive; it is detected by its extra mass in a mass spectrometer.</li>
<li><strong>Carbon-14 (<sup>14</sup>C)</strong> is radioactive. Any compound containing it gives off radiation that can darken photographic film or be counted with a detector.</li>
</ul>

<h3>Where does the O<sub>2</sub> come from?</h3>
<p>For a long time, scientists assumed that light split CO<sub>2</sub> and released its oxygen. In the 1930s, the microbiologist C. B. van Niel studied purple sulfur bacteria, which photosynthesize using hydrogen sulfide (H<sub>2</sub>S) instead of water and release yellow sulfur instead of O<sub>2</sub>:</p>
<div class="eq">CO<sub>2</sub> + 2 H<sub>2</sub>S → (CH<sub>2</sub>O) + H<sub>2</sub>O + 2 S</div>
<p>The sulfur clearly came from H<sub>2</sub>S, not from CO<sub>2</sub>. Van Niel suggested that plants work the same way, with water in place of H<sub>2</sub>S. If so, the O<sub>2</sub> released by plants should come from <strong>water</strong>.</p>
<p>In 1941, a team at Berkeley that included Samuel Ruben and Martin Kamen tested this with <sup>18</sup>O and the green alga <em>Chlorella</em>:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Experiment</th><th>Labelled reactant</th><th>Was the O<sub>2</sub> released labelled?</th></tr></thead>
<tbody>
<tr><td>1</td><td>H<sub>2</sub><sup>18</sup>O (heavy water), ordinary CO<sub>2</sub></td><td><strong>Yes</strong>: the O<sub>2</sub> had the same proportion of <sup>18</sup>O as the water</td></tr>
<tr><td>2</td><td>C<sup>18</sup>O<sub>2</sub>, ordinary water</td><td><strong>No</strong>: the O<sub>2</sub> was ordinary oxygen</td></tr>
</tbody></table></div>
<p>The O<sub>2</sub> comes from water. (The first results were not perfectly clean, because oxygen atoms slowly swap between CO<sub>2</sub> and water in solution, but later, more careful experiments confirmed the conclusion.) This is why the most accurate equation shows water on both sides:</p>
<div class="eq">6 CO<sub>2</sub> + 12 H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> + 6 H<sub>2</sub>O</div>
<p>All 12 oxygen atoms in the 6 O<sub>2</sub> come from the 12 water molecules split by photolysis. The 12 oxygen atoms of the 6 CO<sub>2</sub> end up in glucose (6) and in the 6 new water molecules (6).</p>

<h3>Calvin's lollipop: mapping the cycle with carbon-14</h3>
<p>Ruben and Kamen also discovered carbon-14 in 1940. After the Second World War, nuclear reactors made <sup>14</sup>C cheap and plentiful, and a Berkeley group led by Melvin Calvin, with Andrew Benson and James Bassham, used it to work out the path of carbon (1946–1950s). Their method is a classic:</p>
<ol class="steps">
<li><p class="step-head">The "lollipop"</p><p>A suspension of <em>Chlorella</em> was placed in a thin, flat, round glass flask (nicknamed the lollipop) and lit brightly from both sides so every cell got the same light.</p></li>
<li><p class="step-head">A pulse of label</p><p><sup>14</sup>CO<sub>2</sub> (as dissolved hydrogen carbonate) was injected, and the algae photosynthesized for a set time: a few seconds up to several minutes.</p></li>
<li><p class="step-head">Instant stop</p><p>A valve at the bottom dropped the algae into boiling alcohol, which killed them and stopped all enzymes within a fraction of a second, freezing the chemistry at that moment.</p></li>
<li><p class="step-head">Separate and detect</p><p>The extract was separated by two-dimensional <strong>paper chromatography</strong> (the same idea as your pigment lab, run in two directions with two solvents). The paper was then laid on X-ray film. Every compound containing <sup>14</sup>C showed up as a dark spot.</p></li>
</ol>
<div class="table-wrap"><table class="data">
<thead><tr><th>Time in <sup>14</sup>CO<sub>2</sub></th><th>Where most of the label was found</th></tr></thead>
<tbody>
<tr><td>a few seconds</td><td>almost all in one compound: <strong>3-phosphoglycerate (PGA)</strong></td></tr>
<tr><td>10–30 seconds</td><td>G3P, then several sugar phosphates, including RuBP</td></tr>
<tr><td>a few minutes</td><td>sucrose, starch, amino acids and other organic molecules</td></tr>
</tbody></table></div>
<p>The shorter the time, the fewer compounds were labelled. The compound that is labelled first must be the <strong>first stable product</strong> of CO<sub>2</sub> fixation: PGA, a 3-carbon molecule. This is where the term <strong>C3 plant</strong> comes from.</p>
<p>To find the CO<sub>2</sub> <em>acceptor</em>, the group changed one condition at a time (the same experiments as the Apply &amp; extend question "Lights out"): when the light was switched off, PGA piled up and RuBP disappeared; when CO<sub>2</sub> was cut off, RuBP piled up and PGA fell. Only a cycle in which RuBP accepts CO<sub>2</sub> to make PGA, and PGA is turned back into RuBP using ATP and NADPH, fits both results. Calvin received the 1961 Nobel Prize in Chemistry, and the pathway is often called the Calvin–Benson cycle.</p>

<h3>The same trick revealed C4 plants</h3>
<p>In the mid-1960s, researchers in Hawaii and then Australia (Marshall Hatch and Roger Slack) gave short pulses of <sup>14</sup>CO<sub>2</sub> to <strong>sugar cane</strong>. To their surprise, the first labelled compounds were not PGA but <strong>4-carbon acids</strong> (oxaloacetate, malate and aspartate). Only later did the label appear in PGA. This was the discovery of the <strong>C4 pathway</strong>: CO<sub>2</sub> is fixed first by PEP carboxylase, and the CO<sub>2</sub> is released again for RuBisCO in the bundle sheath.</p>

<div class="callout warn"><p class="callout-title">Common mistake</p><p>"The O<sub>2</sub> from photosynthesis comes from CO<sub>2</sub>, since the Calvin cycle uses CO<sub>2</sub>." No: the Calvin cycle <em>keeps</em> the CO<sub>2</sub> (its carbon and oxygen go into sugar and water). O<sub>2</sub> is released only in the light reactions, when water is split at photosystem II.</p></div>

<details class="check"><summary>If a plant is given CO<sub>2</sub> labelled with <sup>18</sup>O, where will the label end up?</summary><div class="ans"><p>In the sugar (glucose) made by the Calvin cycle and in the water produced, not in the O<sub>2</sub> released. The O<sub>2</sub> comes only from water split in photolysis.</p></div></details>
<details class="check"><summary>Why did Calvin's group need to stop the reactions in a fraction of a second?</summary><div class="ans"><p>The Calvin cycle runs very quickly. Within seconds, the <sup>14</sup>C moves from PGA into many other compounds. Killing the algae instantly in boiling alcohol "froze" the chemistry, so the compounds labelled at each exact time could be identified, revealing the order of the pathway.</p></div></details>
`
  },
  {
    id: "e-rubisco-activase",
    title: "RuBisCO activase: how light switches on the Calvin cycle",
    lesson: "2.10",
    tier: "likely",
    why: "Answers the slide's review questions \"What is Rubisco activase?\" and \"What would happen if Rubisco was not activated?\", and explains why the light-independent reactions actually stop in the dark.",
    html: `
<h3>Why the Calvin cycle needs an on switch</h3>
<p>Plant cells respire all the time, day and night. At night they break down starch and sugars for ATP. If the Calvin cycle enzymes stayed fully active in the dark, the cell would be breaking sugar down and building it back up at the same time, burning ATP for nothing (a <strong>futile cycle</strong>). So several Calvin cycle enzymes, including RuBisCO, are switched <strong>on</strong> by light and <strong>off</strong> in the dark. The switch is not light itself: it is a set of chemical changes in the stroma caused by the light reactions.</p>

<h3>Three light signals in the stroma</h3>
<ol class="steps">
<li><p class="step-head">The stroma becomes less acidic</p><p>The light reactions pump H<sup>+</sup> from the stroma into the thylakoid lumen. The stroma's pH rises from about 7 in the dark to about 8 in the light. RuBisCO and several other Calvin cycle enzymes work best at pH 8.</p></li>
<li><p class="step-head">Mg<sup>2+</sup> moves into the stroma</p><p>As positive H<sup>+</sup> ions pile up in the lumen, magnesium ions (Mg<sup>2+</sup>) move out of the lumen into the stroma, balancing the charge. RuBisCO needs Mg<sup>2+</sup> in its active site.</p></li>
<li><p class="step-head">Ferredoxin sends a signal through thioredoxin</p><p>Some electrons from photosystem I go from ferredoxin to a small protein called <span class="term">thioredoxin</span>. Reduced thioredoxin breaks specific disulfide (S–S) bridges in several Calvin cycle enzymes (including those that regenerate RuBP), changing their shape to the active form. In the dark, the S–S bridges re-form and the enzymes switch off.</p></li>
</ol>

<figure class="diagram">
<svg viewBox="0 0 640 250" role="img" aria-labelledby="ec5-t ec5-d">
<title id="ec5-t">How light switches on the Calvin cycle</title>
<desc id="ec5-d">When light drives the electron transport chain, three changes happen in the stroma: the pH rises from 7 to 8 as H+ is pumped into the lumen, Mg2+ rises as it moves out of the lumen, and ferredoxin reduces thioredoxin, which breaks S-S bonds in enzymes. Together these switch on RuBisCO, with its activase, and other Calvin cycle enzymes.</desc>
<defs>
<marker id="ec5-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--ink)"/></marker>
</defs>
<rect x="15" y="100" width="120" height="50" rx="8" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<text x="75" y="122" text-anchor="middle" style="fill:var(--ink);font-size:14px">Light on</text>
<text x="75" y="141" text-anchor="middle" style="fill:var(--ink);font-size:13px">ETC runs</text>
<rect x="170" y="20" width="270" height="50" rx="8" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1.5"/>
<text x="305" y="41" text-anchor="middle" style="fill:var(--ink);font-size:13px">Stroma pH rises (7 → 8)</text>
<text x="305" y="60" text-anchor="middle" style="fill:var(--ink-2);font-size:13px">H⁺ is pumped into the lumen</text>
<rect x="170" y="100" width="270" height="50" rx="8" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<text x="305" y="121" text-anchor="middle" style="fill:var(--ink);font-size:13px">Stroma Mg²⁺ rises</text>
<text x="305" y="140" text-anchor="middle" style="fill:var(--ink-2);font-size:13px">Mg²⁺ moves out of the lumen</text>
<rect x="170" y="180" width="270" height="50" rx="8" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
<text x="305" y="201" text-anchor="middle" style="fill:var(--ink);font-size:13px">Ferredoxin reduces thioredoxin,</text>
<text x="305" y="220" text-anchor="middle" style="fill:var(--ink-2);font-size:13px">which breaks S–S bonds in enzymes</text>
<rect x="480" y="65" width="145" height="120" rx="8" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<text x="552" y="92" text-anchor="middle" style="fill:var(--ink);font-size:14px">Calvin cycle</text>
<text x="552" y="111" text-anchor="middle" style="fill:var(--ink);font-size:14px">switched ON:</text>
<text x="552" y="137" text-anchor="middle" style="fill:var(--ink-2);font-size:13px">RuBisCO (with</text>
<text x="552" y="155" text-anchor="middle" style="fill:var(--ink-2);font-size:13px">activase) and</text>
<text x="552" y="173" text-anchor="middle" style="fill:var(--ink-2);font-size:13px">other enzymes</text>
<g style="stroke:var(--ink);stroke-width:1.5;fill:none">
<line x1="135" y1="118" x2="166" y2="50" marker-end="url(#ec5-ar)"/>
<line x1="135" y1="125" x2="166" y2="125" marker-end="url(#ec5-ar)"/>
<line x1="135" y1="132" x2="166" y2="200" marker-end="url(#ec5-ar)"/>
<line x1="440" y1="50" x2="476" y2="100" marker-end="url(#ec5-ar)"/>
<line x1="440" y1="125" x2="476" y2="125" marker-end="url(#ec5-ar)"/>
<line x1="440" y1="200" x2="476" y2="150" marker-end="url(#ec5-ar)"/>
</g>
</svg>
<figcaption>The "light-independent" reactions depend on light in two ways: they need ATP and NADPH, and light-driven changes in the stroma switch their enzymes on.</figcaption>
</figure>

<h3>RuBisCO has to be activated before it can work</h3>
<p>RuBisCO is not automatically ready to fix CO<sub>2</sub>. Its active site must first be "primed": a separate CO<sub>2</sub> molecule (an <em>activator</em> CO<sub>2</sub>, not the one that will be fixed) attaches to a lysine amino acid in the active site, and a Mg<sup>2+</sup> ion binds to it. This step is called <strong>carbamylation</strong>. It happens most easily at high pH and high Mg<sup>2+</sup>, which are exactly the conditions the light reactions create in the stroma.</p>
<p>There is a catch. Sugar phosphates, including RuBP itself, bind very tightly to the <em>inactive</em> (unprimed) form of RuBisCO and lock its active site closed, like a key jammed in a lock. Once that happens, the enzyme cannot be activated, no matter how good the conditions are.</p>

<h3>What RuBisCO activase does</h3>
<p><span class="term">RuBisCO activase</span> is a separate enzyme (a "helper" protein) that uses energy from <strong>ATP hydrolysis</strong> to change RuBisCO's shape and pull out the sugar phosphates that are jamming its active sites. That frees each site to be carbamylated and to start fixing CO<sub>2</sub>. Because activase needs ATP, it works well only when the ATP level in the stroma is high, which is in the light. In the dark, ATP falls, activase slows, and RuBisCO gradually becomes locked and inactive again. In many plants, activase is also switched on by thioredoxin, linking it directly to electron flow.</p>
<p>Activase has a weakness that matters for agriculture: it is <strong>heat-sensitive</strong>. In many crops it starts to stop working at leaf temperatures of about 35–40 °C. Once activase fails, RuBisCO slowly becomes locked and inactive. This is one reason photosynthesis drops during heat waves, on top of the extra photorespiration you learn about in lesson 2.11. Plant scientists are trying to breed or engineer crops with more heat-stable activase.</p>

<div class="callout key"><p class="callout-title">On the test</p><p>"Light-independent" means the Calvin cycle does not absorb light itself. It does <em>not</em> mean the cycle runs in the dark. It stops within minutes of darkness because (1) ATP and NADPH run out and (2) its key enzymes, including RuBisCO (through RuBisCO activase), are switched off.</p></div>

<h3>Answers to the slide's review questions</h3>
<details class="check"><summary>3. What is Rubisco activase?</summary><div class="ans"><p>An enzyme in the stroma that activates RuBisCO. Using energy from ATP hydrolysis, it removes sugar phosphates (such as RuBP) that bind tightly to RuBisCO's active site and block it, so the site can bind its activator CO<sub>2</sub> and Mg<sup>2+</sup> and become catalytically active. It is most active in the light, when stroma ATP is high, which helps link the Calvin cycle to the light reactions.</p></div></details>
<details class="check"><summary>4. What would happen if Rubisco was not activated? Be specific.</summary><div class="ans"><p>RuBisCO could not fix CO<sub>2</sub>, even in bright light. Specifically: (1) no PGA would be made, so RuBP would build up; (2) no G3P would be made, so no glucose, sucrose or starch, and the plant would have no new carbon for growth or for its own respiration; (3) ATP and NADPH from the light reactions would not be used, so ADP, P<sub>i</sub> and NADP<sup>+</sup> would run out; (4) with no NADP<sup>+</sup> to accept electrons, non-cyclic electron flow (and O<sub>2</sub> release) would slow or stop, and the excess absorbed light energy would damage the photosystems. The plant would eventually starve.</p></div></details>
`
  },
  {
    id: "e-g3p-fate",
    title: "Where G3P goes: starch, sucrose, cellulose and the plant's own respiration",
    lesson: "2.10",
    tier: "likely",
    why: "The Calvin cycle's product is G3P, not glucose; this topic follows it into the sugars, stores and structures a plant actually makes, and shows why plants need mitochondria too.",
    html: `
<h3>The real product is G3P</h3>
<p>Diagrams often end the Calvin cycle with "glucose," but the molecule that actually leaves the cycle is <strong>G3P</strong> (glyceraldehyde-3-phosphate, also called PGAL), a 3-carbon sugar phosphate. The class Calvin cycle diagram shows this: G3P leaves the cycle, and arrows point to "glucose (×2)" and "other organic molecules." Two G3P <em>can</em> be joined to make glucose, but a plant rarely keeps much free glucose. Most G3P follows one of four paths.</p>

<h3>Path 1: starch, stored in the chloroplast</h3>
<p>During the day, part of the G3P stays inside the chloroplast. Enzymes in the stroma turn it into glucose phosphates and link the glucose units into <span class="term">starch</span>, which is stored as granules in the stroma. Starch is a large, insoluble polymer, so the leaf can store a lot of it without drawing water into the cell by osmosis. At night, when no new G3P is made, the starch is broken down again to supply sugar to the rest of the plant. (The Apply &amp; extend question "Starch by day, sucrose by night" has data showing this daily rise and fall.)</p>
<p>Long-term starch stores, such as those in potato tubers, seeds and roots, are kept in a different kind of plastid called an <strong>amyloplast</strong>, in cells that do not photosynthesize.</p>

<h3>Path 2: sucrose, the plant's transport sugar</h3>
<p>The rest of the G3P is exported from the chloroplast to the cytosol. A transport protein in the inner chloroplast membrane swaps one G3P going out for one phosphate coming in, so the chloroplast keeps getting back the phosphate it needs to make more ATP. In the cytosol, pairs of 3-carbon sugars are joined into 6-carbon fructose-1,6-bisphosphate (the same molecule you met in glycolysis, now made in the reverse direction), and then into glucose and fructose units. These are linked to form <span class="term">sucrose</span> (glucose + fructose), or table sugar.</p>
<p>Sucrose is loaded into the <strong>phloem</strong> and carried to every part of the plant that cannot make its own sugar: roots, stems, flowers, fruits, seeds and young leaves. Why sucrose instead of glucose? In sucrose, the reactive groups of both sugars are tied up in the bond between them, so sucrose does not react with proteins or other molecules on its long trip through the plant. It is also very soluble. Maple sap, sugar cane (a C4 plant) and sugar beets are all rich in sucrose for this reason.</p>

<figure class="diagram">
<svg viewBox="0 0 640 290" role="img" aria-labelledby="ec6-t ec6-d">
<title id="ec6-t">Fates of G3P in a leaf cell</title>
<desc id="ec6-d">Inside the chloroplast, the Calvin cycle makes G3P. Some G3P becomes starch stored in the stroma. Some is exported to the cytosol and made into sucrose. Sucrose goes to the phloem for transport to roots, fruits and new leaves, to respiration in mitochondria, and to cellulose for cell walls. At night, stored starch is broken down to make more sucrose.</desc>
<defs>
<marker id="ec6-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--ink)"/></marker>
</defs>
<rect x="15" y="40" width="275" height="230" rx="36" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2"/>
<text x="152" y="66" text-anchor="middle" style="fill:var(--ink);font-size:13px">Chloroplast (stroma)</text>
<circle cx="85" cy="150" r="42" style="fill:var(--surface);stroke:var(--leaf);stroke-width:2"/>
<text x="85" y="146" text-anchor="middle" style="fill:var(--ink);font-size:13px">Calvin</text>
<text x="85" y="163" text-anchor="middle" style="fill:var(--ink);font-size:13px">cycle</text>
<rect x="160" y="132" width="70" height="36" rx="6" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<text x="195" y="155" text-anchor="middle" style="fill:var(--ink);font-size:14px">G3P</text>
<rect x="140" y="210" width="130" height="34" rx="6" style="fill:var(--surface);stroke:var(--leaf);stroke-width:1.5"/>
<text x="205" y="232" text-anchor="middle" style="fill:var(--ink);font-size:13px">starch (stored)</text>
<text x="330" y="60" style="fill:var(--ink-2);font-size:13px">Cytosol</text>
<text x="294" y="142" style="fill:var(--ink-2);font-size:13px">exported</text>
<rect x="354" y="132" width="86" height="36" rx="6" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<text x="397" y="155" text-anchor="middle" style="fill:var(--ink);font-size:14px">sucrose</text>
<rect x="470" y="40" width="160" height="50" rx="6" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:1.5"/>
<text x="550" y="61" text-anchor="middle" style="fill:var(--ink);font-size:13px">respiration in</text>
<text x="550" y="79" text-anchor="middle" style="fill:var(--ink);font-size:13px">mitochondria (ATP)</text>
<rect x="480" y="125" width="150" height="50" rx="6" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.5"/>
<text x="555" y="146" text-anchor="middle" style="fill:var(--ink);font-size:13px">phloem to roots,</text>
<text x="555" y="164" text-anchor="middle" style="fill:var(--ink);font-size:13px">fruits, new leaves</text>
<rect x="470" y="210" width="160" height="50" rx="6" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<text x="550" y="231" text-anchor="middle" style="fill:var(--ink);font-size:13px">cellulose for</text>
<text x="550" y="249" text-anchor="middle" style="fill:var(--ink);font-size:13px">cell walls</text>
<g style="stroke:var(--ink);stroke-width:1.5;fill:none">
<line x1="127" y1="150" x2="156" y2="150" marker-end="url(#ec6-ar)"/>
<line x1="195" y1="168" x2="200" y2="206" marker-end="url(#ec6-ar)"/>
<line x1="230" y1="150" x2="350" y2="150" marker-end="url(#ec6-ar)"/>
<line x1="440" y1="150" x2="476" y2="150" marker-end="url(#ec6-ar)"/>
<line x1="430" y1="132" x2="486" y2="94" marker-end="url(#ec6-ar)"/>
<line x1="430" y1="168" x2="486" y2="206" marker-end="url(#ec6-ar)"/>
<path d="M270 227 Q340 226 380 172" style="stroke-dasharray:5 4" marker-end="url(#ec6-ar)"/>
</g>
<text x="300" y="258" style="fill:var(--ink-2);font-size:13px">at night</text>
</svg>
<figcaption>Most G3P becomes starch (a store kept in the chloroplast) or sucrose (the sugar that travels). Sucrose feeds growth, respiration and cell-wall building throughout the plant.</figcaption>
</figure>

<h3>Path 3: building materials</h3>
<p>A growing plant needs far more than sugar. Glucose units from sucrose are used to build <span class="term">cellulose</span>, the tough polymer of β-glucose that makes up plant cell walls. Cellulose is the most abundant organic molecule on Earth, and every gram of it started as CO<sub>2</sub> fixed by RuBisCO. Carbon from G3P and PGA is also used to make:</p>
<ul>
<li><strong>amino acids</strong> (with nitrogen taken from the soil as nitrate or ammonium),</li>
<li><strong>fatty acids</strong> for membranes and seed oils (made in the chloroplast, starting from acetyl-CoA),</li>
<li><strong>nucleotides</strong> for DNA, RNA, ATP and NADPH.</li>
</ul>
<p>Many of these routes use the same intermediates you met in catabolism (lesson 2.06), running in the building direction.</p>

<h3>Path 4: the plant's own cellular respiration</h3>
<p>Plants have mitochondria, and they carry out the same glycolysis, Krebs cycle and ETC you studied in lessons 2.02–2.04, day and night. Roots, stems, flowers and seeds have few or no chloroplasts (or are underground), so they depend completely on sucrose delivered by the phloem and on respiration to make their ATP. Leaf cells also respire, especially at night when the light reactions stop. Typically, somewhere between a third and a half of all the carbon a plant fixes in a day is released again as CO<sub>2</sub> by its own respiration. What is left over is what the plant can use for growth.</p>

<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Plants photosynthesize instead of respiring." No: plants do both. Photosynthesis (in chloroplasts) makes the sugar; cellular respiration (in mitochondria) breaks it down to make ATP for the whole plant. In the light, photosynthesis is usually faster, so a leaf releases O<sub>2</sub> overall. In the dark, only respiration happens, so the leaf takes in O<sub>2</sub> and releases CO<sub>2</sub>.</p></div>

<div class="callout key"><p class="callout-title">On the test</p><p>Know the costs: 1 G3P = 3 CO<sub>2</sub>, 9 ATP and 6 NADPH; 1 glucose = 2 G3P = 6 CO<sub>2</sub>, 18 ATP and 12 NADPH; 1 sucrose (12 C) = 4 G3P = 12 CO<sub>2</sub>, 36 ATP and 24 NADPH.</p></div>

<details class="check"><summary>Why does a leaf store starch in its chloroplasts instead of keeping the same amount of sugar dissolved?</summary><div class="ans"><p>Starch is insoluble, so storing it does not raise the solute concentration of the cell. A large amount of dissolved sugar would draw water in by osmosis and could disrupt the cell. Starch also gives the leaf a reserve to break down into sucrose at night, when no G3P is being made.</p></div></details>
<details class="check"><summary>A potato tuber grows underground and has no chloroplasts. Where does its starch come from?</summary><div class="ans"><p>From the leaves. G3P made by the Calvin cycle in leaf chloroplasts is turned into sucrose, carried down through the phloem to the tuber, and converted to starch in the tuber's amyloplasts.</p></div></details>
`
  },
  {
    id: "e-kranz-c4rice",
    title: "Kranz anatomy, C4 rice and a warming world",
    lesson: "2.11",
    tier: "extra",
    why: "Shows the leaf anatomy that makes C4 photosynthesis possible, why C4 plants matter so much for food and weeds, and how rising CO₂ and temperature may shift the balance between C3 and C4 plants (textbook questions 10 and 11).",
    html: `
<h3>Kranz anatomy: a wreath around every vein</h3>
<p>The class slide shows bundle sheath cells "tightly packed around the veins in the leaf; surrounded by mesophyll." This arrangement has a name: <span class="term">Kranz anatomy</span>, from the German word for "wreath." Look at a C4 leaf in cross section and each vein is surrounded by two rings of cells:</p>
<ul>
<li>an inner ring of large <strong>bundle sheath cells</strong>, packed with chloroplasts, where RuBisCO and the Calvin cycle are found;</li>
<li>an outer ring of <strong>mesophyll cells</strong>, where PEP carboxylase makes the first fixation of CO<sub>2</sub>.</li>
</ul>
<p>The veins are closer together than in a C3 leaf, so (as the textbook notes) no mesophyll cell is more than two or three cells away from a bundle sheath cell. The two cell types are joined by many <strong>plasmodesmata</strong>, the channels through which malate moves in and pyruvate moves back out. In many C4 species, the bundle sheath cell walls are thick and lined with a waxy layer that slows CO<sub>2</sub> from leaking back out, so the CO<sub>2</sub> released from malate stays trapped around RuBisCO.</p>
<p>In a C3 leaf, by contrast, the bundle sheath cells are small and have few chloroplasts; most photosynthesis happens in the palisade and spongy mesophyll.</p>

<figure class="diagram">
<svg viewBox="0 0 640 300" role="img" aria-labelledby="ec7-t ec7-d">
<title id="ec7-t">Kranz anatomy of a C4 leaf</title>
<desc id="ec7-d">Cross section around one vein of a C4 leaf. The vein, containing xylem and phloem, is in the centre. A tight ring of large bundle sheath cells surrounds it, where malate releases CO2 for RuBisCO and the Calvin cycle. An outer ring of mesophyll cells surrounds the bundle sheath, where PEP carboxylase fixes CO2 into malate.</desc>
<g style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.2">
<circle cx="305.0" cy="150.0" r="21"/><circle cx="294.6" cy="195.6" r="21"/><circle cx="265.5" cy="232.1" r="21"/><circle cx="223.4" cy="252.4" r="21"/><circle cx="176.6" cy="252.4" r="21"/><circle cx="134.5" cy="232.1" r="21"/><circle cx="105.4" cy="195.6" r="21"/><circle cx="95.0" cy="150.0" r="21"/><circle cx="105.4" cy="104.4" r="21"/><circle cx="134.5" cy="67.9" r="21"/><circle cx="176.6" cy="47.6" r="21"/><circle cx="223.4" cy="47.6" r="21"/><circle cx="265.5" cy="67.9" r="21"/><circle cx="294.6" cy="104.4" r="21"/>
</g>
<g style="fill:var(--leaf);fill-opacity:0.45;stroke:var(--leaf);stroke-width:1.5">
<circle cx="257.1" cy="168.5" r="19"/><circle cx="235.3" cy="198.5" r="19"/><circle cx="200.0" cy="210.0" r="19"/><circle cx="164.7" cy="198.5" r="19"/><circle cx="142.9" cy="168.5" r="19"/><circle cx="142.9" cy="131.5" r="19"/><circle cx="164.7" cy="101.5" r="19"/><circle cx="200.0" cy="90.0" r="19"/><circle cx="235.3" cy="101.5" r="19"/><circle cx="257.1" cy="131.5" r="19"/>
</g>
<circle cx="200" cy="150" r="38" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<text x="200" y="144" text-anchor="middle" style="fill:var(--ink);font-size:13px">vein</text>
<text x="200" y="160" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">xylem +</text>
<text x="200" y="175" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">phloem</text>
<g style="stroke:var(--ink);stroke-width:1.2">
<line x1="313" y1="95" x2="374" y2="66"/>
<line x1="276" y1="129.5" x2="374" y2="119"/>
</g>
<text x="380" y="62" style="fill:var(--ink);font-size:14px">Mesophyll cell</text>
<text x="380" y="80" style="fill:var(--ink-2);font-size:13px">PEP carboxylase: CO₂ → malate</text>
<text x="380" y="122" style="fill:var(--ink);font-size:14px">Bundle sheath cell</text>
<text x="380" y="140" style="fill:var(--ink-2);font-size:13px">malate → CO₂ + pyruvate;</text>
<text x="380" y="158" style="fill:var(--ink-2);font-size:13px">RuBisCO and the Calvin cycle</text>
<text x="380" y="222" style="fill:var(--ink);font-size:13px">No mesophyll cell is more than</text>
<text x="380" y="240" style="fill:var(--ink);font-size:13px">2–3 cells from a bundle sheath cell</text>
</svg>
<figcaption>Kranz ("wreath") anatomy around one vein of a C4 leaf. CO<sub>2</sub> is fixed into malate in the outer mesophyll ring and released for RuBisCO in the inner bundle sheath ring: spatial separation.</figcaption>
</figure>

<h3>A division of labour</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Mesophyll cell</th><th>Bundle sheath cell</th></tr></thead>
<tbody>
<tr><td>CO<sub>2</sub>-fixing enzyme</td><td>PEP carboxylase (in the cytosol); almost no RuBisCO</td><td>RuBisCO (in the chloroplasts)</td></tr>
<tr><td>Main job</td><td>Capture CO<sub>2</sub> as malate; regenerate PEP from pyruvate (ATP → AMP, the equivalent of 2 ATP)</td><td>Release CO<sub>2</sub> from malate; run the Calvin cycle; make sugar</td></tr>
<tr><td>CO<sub>2</sub> level</td><td>like the air spaces in the leaf</td><td>many times higher, so CO<sub>2</sub> outcompetes O<sub>2</sub> at RuBisCO</td></tr>
</tbody></table></div>
<p>In corn, the bundle sheath chloroplasts even have very little photosystem II. They make ATP mostly by cyclic electron flow, which releases no O<sub>2</sub>, so even less oxygen is produced right next to RuBisCO.</p>

<h3>C4 evolved again and again</h3>
<p>C4 photosynthesis is not one invention. It has evolved independently more than 60 times in different groups of flowering plants, mostly in the last 30 million years as atmospheric CO<sub>2</sub> fell and photorespiration became a bigger problem. Only about 3% of plant species are C4, but they carry out roughly a quarter of all photosynthesis on land, because they dominate tropical grasslands and savannas. C4 crops include <strong>corn, sugar cane, sorghum and millet</strong>. Many of the world's worst weeds are also C4 (the textbook says eight of the ten worst), including crabgrass and pigweed, which is why they thrive in hot, sunny fields.</p>

<h3>Can rice be given a C4 engine?</h3>
<p>Rice is a <strong>C3</strong> plant, yet it feeds about half of the world's people and is mostly grown in hot climates where photorespiration costs it a lot. Since 2008, an international research effort (the C4 Rice Project) has been trying to engineer C4 photosynthesis into rice. Models suggest it could raise yields by up to about 50% while using less water and less nitrogen fertilizer.</p>
<p>Why less nitrogen? RuBisCO is a slow enzyme, so a C3 leaf has to make enormous amounts of it: it is the most abundant protein on Earth and can be up to about half of the soluble protein in a C3 leaf. Every RuBisCO molecule costs nitrogen. A C4 plant's RuBisCO works at high CO<sub>2</sub> and wastes little time on O<sub>2</sub>, so the plant needs much less of it.</p>
<p>The challenge is enormous. C4 needs the right enzymes switched on in the right cell type (dozens of genes), new transport proteins, <em>and</em> new anatomy: veins closer together and large, chloroplast-rich bundle sheath cells. Researchers have made rice plants with some of the C4 enzymes active in the correct cells and with more bundle sheath chloroplasts, but a fully working C4 rice has not yet been achieved.</p>
<p>Other teams are trying shortcuts. One approach adds a "photorespiration bypass": an engineered pathway that recycles phosphoglycolate inside the chloroplast instead of sending it on the long trip through the peroxisome and mitochondrion. In field trials published in 2019, tobacco plants with such a bypass grew up to about 40% more biomass.</p>

<h3>Climate change: who wins?</h3>
<p>Atmospheric CO<sub>2</sub> has risen from about 280 ppm before the Industrial Revolution to over 420 ppm today, and average temperatures are rising. The two changes push in opposite directions:</p>
<div class="compare"><div><h4>Favours C3</h4><ul><li>More CO<sub>2</sub> lets CO<sub>2</sub> outcompete O<sub>2</sub> at RuBisCO, cutting photorespiration.</li><li>In large outdoor experiments with extra CO<sub>2</sub>, C3 crops such as wheat, rice and soybean gained noticeably in yield.</li></ul></div><div><h4>Favours C4 (and CAM)</h4><ul><li>Higher temperatures raise photorespiration in C3 plants; C4 plants are unaffected.</li><li>More frequent drought favours plants that save water: C4 and especially CAM.</li><li>C4 crops gained little from extra CO<sub>2</sub>, except in dry years, when they could close their stomata a little more and save water.</li></ul></div></div>
<p>There is also a hidden cost: C3 grains grown at high CO<sub>2</sub> tend to contain less protein, zinc and iron, so faster growth does not always mean more nutritious food. The overall balance between C3 and C4 plants will depend on the region, its temperature and its water supply.</p>

<details class="check"><summary>Why would a C4 plant without Kranz anatomy (no bundle sheath ring) gain no advantage from PEP carboxylase?</summary><div class="ans"><p>The whole point of the C4 pathway is to concentrate CO<sub>2</sub> around RuBisCO in a separate compartment. Without a separate, tightly packed bundle sheath (spatial separation), the CO<sub>2</sub> released from malate would simply diffuse away and RuBisCO would still be surrounded by ordinary O<sub>2</sub> levels. The plant would pay the extra ATP cost of the pump without reducing photorespiration.</p></div></details>
<details class="check"><summary>A farmer grows corn (C4) in a field invaded by a C3 weed. Predict how rising CO<sub>2</sub> could affect the competition.</summary><div class="ans"><p>The C3 weed would probably gain more than the corn. Extra CO<sub>2</sub> reduces the weed's photorespiration and increases its photosynthesis, while corn's RuBisCO is already nearly saturated with CO<sub>2</sub>, so corn gains little. The weed could become more competitive, unless higher temperatures or drought hold it back.</p></div></details>
`
  },
  {
    id: "e-photoprotection",
    title: "Too much light: photoinhibition, heat-dumping pigments and fall colours",
    lesson: "2.08",
    tier: "likely",
    why: "Explains why carotenoids and xanthophylls are more than fall colours: they protect chlorophyll from too much light, and the same chemistry explains why leaves change colour in autumn (a class slide).",
    html: `
<h3>A leaf can absorb more light than it can use</h3>
<p>On a bright summer day, the antenna pigments can absorb photons much faster than the Calvin cycle can use the ATP and NADPH they produce. This gets worse when the Calvin cycle slows down: on hot, dry days (stomata closed, little CO<sub>2</sub>) and on cold, bright days (enzymes slow). NADP<sup>+</sup> runs out, the electron carriers fill up, and excited chlorophyll molecules have nowhere to send their energy. Too much absorbed light is dangerous, so plants have several ways to get rid of it safely.</p>

<h3>Four fates of absorbed light energy</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Fate</th><th>What happens</th><th>Good or bad?</th></tr></thead>
<tbody>
<tr><td>Photochemistry</td><td>The excited electron is captured by the primary electron acceptor and drives electron flow (the class pathway)</td><td>Useful work</td></tr>
<tr><td>Heat</td><td>The energy is released as heat in the antenna, on purpose (see below)</td><td>Safe, a safety valve</td></tr>
<tr><td>Fluorescence</td><td>The energy is re-emitted as a photon of red light (a small percentage in a working leaf)</td><td>Harmless, but wasted</td></tr>
<tr><td>Damage</td><td>Excited chlorophyll passes its energy to O<sub>2</sub>, making very reactive <em>singlet oxygen</em>; electrons can also leak to O<sub>2</sub>, making superoxide</td><td>Harmful: damages proteins, pigments and membranes</td></tr>
</tbody></table></div>
<p>The class slide on excitation says that outside a living plant, excited electrons fall back to the ground state and release their energy as <strong>heat and light</strong>. You can see this: shine a bright blue light or a UV flashlight through a chlorophyll extract (like the one from the chromatography lab) and it glows deep <strong>red</strong>. In solution there is no primary electron acceptor, so the energy comes back out as fluorescence. In a healthy leaf, almost all of it is used instead, so the leaf glows only faintly. Scientists measure this faint fluorescence to check how stressed a plant is.</p>

<h3>Photoinhibition: the cost of strong light</h3>
<p>Even under normal conditions, strong light slowly damages photosystem II, mainly one protein in its reaction centre (called D1). Plants constantly repair PSII by pulling out the damaged D1 protein and inserting a newly made one; D1 is replaced faster than any other protein in the thylakoid. When damage happens faster than repair, for example in very bright light combined with cold or drought, the rate of photosynthesis drops. This is called <span class="term">photoinhibition</span>. It is why many leaves photosynthesize less at noon than you would expect from the light level.</p>

<h3>The safety valve: turning excess light into heat</h3>
<p>Plants avoid most photoinhibition by deliberately dumping excess energy as heat in the antenna before it reaches the reaction centre. This is called <span class="term">non-photochemical quenching</span> (NPQ): "quenching" because it removes the excitation, and "non-photochemical" because it does not drive electron flow.</p>
<p>The trigger is clever. When the Calvin cycle cannot keep up, ATP synthase runs short of ADP, H<sup>+</sup> stops flowing out of the lumen, and the lumen becomes very acidic. The low lumen pH is the "too much light" signal. It switches on two things:</p>
<ul>
<li>A sensor protein in PSII changes shape and puts the antenna into heat-dissipating mode.</li>
<li>An enzyme converts the xanthophyll <strong>violaxanthin</strong> into another xanthophyll, <strong>zeaxanthin</strong> (the <strong>xanthophyll cycle</strong>). Zeaxanthin in the antenna helps turn excess excitation into heat.</li>
</ul>
<p>When the light dims, zeaxanthin is slowly converted back to violaxanthin and the antenna returns to full efficiency. So the yellow xanthophyll band on your chromatogram is not just a colour: it is part of the plant's adjustable sunscreen. The switch back is slow (minutes), so when a cloud passes over, a leaf keeps wasting light as heat for a while. In 2016, researchers engineered tobacco to switch back faster, and the plants grew about 15% more in field trials.</p>

<h3>Carotenoids as bodyguards</h3>
<p>Carotenoids such as β-carotene sit right next to the chlorophylls in the antenna and reaction centres. Besides passing energy <em>to</em> chlorophyll (their accessory-pigment job), they can take dangerous excess energy <em>from</em> over-excited chlorophyll and destroy singlet oxygen, releasing the energy as harmless heat. Without them, chlorophyll is quickly destroyed by light. Some herbicides work by blocking carotenoid production: treated plants turn white in the sun, because their unprotected chlorophyll is bleached. Carotenoids protect you too: your body turns β-carotene into vitamin A, which your eyes use to see in dim light (the class fact about low-light vision).</p>

<h3>Autumn: taking down the solar panels safely</h3>
<p>Before a deciduous tree drops its leaves, it recovers as much nitrogen as it can from them: most of a leaf's nitrogen is in RuBisCO and in the proteins that hold chlorophyll. But chlorophyll released from its proteins is dangerous: it still absorbs light and can make singlet oxygen. So the tree breaks chlorophyll down step by step into colourless products, removing the central magnesium ion and opening the ring.</p>
<ul>
<li>Carotenoids and xanthophylls break down more slowly, so as chlorophyll disappears they are <strong>unmasked</strong>: the yellows and oranges from class.</li>
<li>Some trees, such as maples and sumac, make new red <strong>anthocyanins</strong> in fall. A leading hypothesis is that anthocyanins act as a sunscreen and antioxidant, shielding the weakened leaf from strong light while nutrients are being pulled out. Sunny days and cool nights trap sugar in the leaf, which is used to make more anthocyanin, so the reds are brightest after such weather.</li>
<li>Brown colours (as in oak leaves) come from tannins left behind after the other pigments have broken down.</li>
</ul>

<div class="callout key"><p class="callout-title">On the test</p><p>Fall colours: chlorophyll breaks down and is not replaced, unmasking carotenoids (yellow-orange) and xanthophylls (yellow); anthocyanins (red) are newly made in the fall. For a full-marks answer, add <em>why</em>: the tree recovers nutrients (nitrogen, magnesium) from the leaf, and accessory pigments protect the leaf from light damage.</p></div>

<details class="check"><summary>Why does a chlorophyll extract in a test tube glow red under bright light, while a living leaf barely glows?</summary><div class="ans"><p>In the extract, chlorophyll molecules are separated from the photosystem proteins, so there is no primary electron acceptor to capture the excited electrons. They fall back to the ground state and release the energy as red light (fluorescence) and heat. In a leaf, the antenna passes the energy to reaction centres, where excited electrons are captured and used for electron flow, so very little is re-emitted.</p></div></details>
<details class="check"><summary>What signal tells a chloroplast that it is absorbing too much light?</summary><div class="ans"><p>A very low pH (high H<sup>+</sup> concentration) in the thylakoid lumen. When the Calvin cycle cannot use ATP and NADPH fast enough, H<sup>+</sup> builds up in the lumen. The low pH switches on heat dissipation (non-photochemical quenching), including the conversion of violaxanthin to zeaxanthin.</p></div></details>
`
  }
);
