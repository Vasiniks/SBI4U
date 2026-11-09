window.LESSONS = window.LESSONS || [];

/* ===================================================================
   3.03 DNA Replication
   =================================================================== */
window.LESSONS.push({
  id: "3.03",
  title: "DNA Replication",
  stage: "g-rep",
  where: "Nucleus, S phase of interphase",
  summary: "DNA replication copies the entire genome during the S phase of interphase, so each daughter cell gets an identical set of chromosomes. It is <strong>semiconservative</strong>: helicase opens the helix at many origins, and each old strand is the template for a new one. Because DNA polymerase III can only add nucleotides to a free 3′-OH, the <strong>leading strand</strong> is built continuously toward each fork and the <strong>lagging strand</strong> in Okazaki fragments away from it; primase, DNA polymerase I and ligase start, clean up and join the pieces, and proofreading keeps errors to about one in a billion.",
  objectives: [
    "State when DNA replication happens in the cell cycle and why it must be finished before mitosis.",
    "Explain semiconservative replication, compare it with the conservative and dispersive models, and calculate the fraction of helices that keep an original strand after n generations.",
    "Describe how replication starts at an origin: the roles of helicase, single-strand binding proteins and topoisomerase, and the replication bubble.",
    "Explain why replication is bidirectional, and why eukaryotic chromosomes need thousands of origins while a bacterial chromosome needs one.",
    "Explain why DNA polymerase needs an RNA primer and why new DNA can only be built 5′ → 3′.",
    "Compare the leading and lagging strands, including Okazaki fragments and the number of primers each needs.",
    "Give the job and location of all seven proteins (helicase, SSBs, topoisomerase, primase, DNA polymerase III, DNA polymerase I, DNA ligase) and put them in order.",
    "Complete a replication-bubble diagram with leading and lagging strands at both forks and every 5′ and 3′ end labelled.",
    "Describe proofreading, mismatch repair and the excision repair of UV-induced thymine dimers.",
    "Explain the end-replication problem and how telomeres protect linear chromosomes."
  ],
  html: `
<h3 data-tier="essential">When replication happens</h3>
<p>Every time a cell divides, each of the two daughter cells needs its own complete copy of the genome. A human cell has 46 chromosomes holding about 6 billion base pairs of DNA, and all of it must be copied, accurately, before the cell splits. That copying is <span class="term">DNA replication</span>: the process in which a double-stranded DNA molecule is used to make two identical double-stranded copies.</p>
<p>The class slide answers "when?" in two bullets: replication happens <strong>during interphase</strong>, <strong>prior to mitosis</strong>. More precisely, it happens in the <strong>S phase</strong> (S for <em>synthesis</em>) of interphase. The cell-cycle diagram on the slide shows the order:</p>
<ul>
<li><strong>G<sub>1</sub></strong>: cell growth. The cell makes proteins and organelles and does its normal job.</li>
<li><strong>S</strong>: DNA synthesis. Every chromosome is replicated once.</li>
<li><strong>G<sub>2</sub></strong>: more growth, and the cell prepares for division.</li>
<li><strong>Mitotic phase</strong>: mitosis (the copied chromosomes are separated) and cytokinesis (the cytoplasm divides), forming two daughter cells.</li>
</ul>
<p>When S phase ends, each chromosome is made of two identical DNA molecules called <span class="term">sister chromatids</span>, held together at the centromere. That is why chromosomes look like an "X" when they condense at the start of mitosis: the X is two copies joined in the middle. Mitosis then pulls the sister chromatids apart so each daughter cell gets one copy of every chromosome.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>DNA is <strong>not</strong> copied during mitosis. By the time mitosis begins, replication is already finished; mitosis only <em>separates</em> copies that were made in S phase. If an exam question asks when DNA replicates, the answer is "S phase of interphase, before mitosis (or meiosis)".</p></div>
<p data-tier="likely">Bacteria have no named phases, but the rule is the same: a bacterium copies its circular chromosome before it divides by binary fission.</p>

<h3 data-tier="essential">Semiconservative replication</h3>
<p>The slide's definition is short and worth memorizing: in <span class="term">semiconservative replication</span>, <strong>each strand serves as a template for a new strand, and the replicated DNA has one parent strand and one new strand</strong>. A <span class="term">template</span> is a strand used as the pattern for building its complementary partner.</p>
<p>This works because of <strong>complementary base pairing</strong> (<a href="#/lesson/3.02">lesson 3.02</a>). A always pairs with T and G always pairs with C, so the sequence of one strand fixes the sequence of its partner exactly. Each single strand therefore carries all the information needed to rebuild the whole double helix, which is why <strong>both</strong> parent strands can be used as templates at once (practice question 4).</p>
<div class="eq"><span class="seq">3′-<span class="nt-T">T</span><span class="nt-A">A</span><span class="nt-C">C</span><span class="nt-G">G</span><span class="nt-G">G</span><span class="nt-A">A</span>-5′</span> &nbsp;template &nbsp;→&nbsp; new strand <span class="seq">5′-<span class="nt-A">A</span><span class="nt-T">T</span><span class="nt-G">G</span><span class="nt-C">C</span><span class="nt-C">C</span><span class="nt-T">T</span>-3′</span></div>
<p>Watson and Crick saw in 1953 that base pairing suggests this copying mechanism, but two other models were possible: <strong>conservative</strong> (the parent helix stays intact beside an all-new copy) and <strong>dispersive</strong> (old and new pieces mixed along every strand).</p>
<figure class="diagram">
<svg viewBox="0 0 690 352" role="img" aria-labelledby="g303a-t g303a-d">
<title id="g303a-t">Three possible models of DNA replication</title>
<desc id="g303a-d">Three columns compare the hypotheses, each showing one parent double helix with two old strands and the two daughter helices after one round of copying. Conservative: one daughter has both old strands and the other has two new strands. Semiconservative: each daughter has one old strand and one new strand. Dispersive: every strand of both daughters is a patchwork of old and new pieces. Meselson and Stahl ruled out conservative after one generation and dispersive after two, leaving semiconservative.</desc>
<defs><marker id="g303a-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<text x="115" y="24" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Conservative</text>
<line x1="115" y1="46" x2="115" y2="122" style="stroke:var(--line);stroke-width:14;stroke-dasharray:2 8"/>
<rect x="101" y="44" width="7" height="80" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<rect x="122" y="44" width="7" height="80" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<line x1="115" y1="132" x2="115" y2="158" style="stroke:var(--ink-2);stroke-width:1.8" marker-end="url(#g303a-ah)"/>
<text x="124" y="150" style="fill:var(--ink-2);font-size:11px">copy once</text>
<line x1="75" y1="170" x2="75" y2="246" style="stroke:var(--line);stroke-width:14;stroke-dasharray:2 8"/>
<rect x="61" y="168" width="7" height="40" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<rect x="61" y="208" width="7" height="40" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<rect x="82" y="168" width="7" height="40" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<rect x="82" y="208" width="7" height="40" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<line x1="155" y1="170" x2="155" y2="246" style="stroke:var(--line);stroke-width:14;stroke-dasharray:2 8"/>
<rect x="141" y="168" width="7" height="40" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<rect x="141" y="208" width="7" height="40" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<rect x="162" y="168" width="7" height="40" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<rect x="162" y="208" width="7" height="40" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<text x="115" y="274" text-anchor="middle" style="fill:var(--ink);font-size:12px">The parent helix stays whole;</text>
<text x="115" y="290" text-anchor="middle" style="fill:var(--ink);font-size:12px">the copy is entirely new</text>
<text x="115" y="312" text-anchor="middle" style="fill:var(--bad);font-size:12px;font-weight:650">✗ ruled out after generation 1</text>
<text x="345" y="24" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Semiconservative</text>
<line x1="345" y1="46" x2="345" y2="122" style="stroke:var(--line);stroke-width:14;stroke-dasharray:2 8"/>
<rect x="331" y="44" width="7" height="80" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<rect x="352" y="44" width="7" height="80" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<line x1="345" y1="132" x2="345" y2="158" style="stroke:var(--ink-2);stroke-width:1.8" marker-end="url(#g303a-ah)"/>
<text x="354" y="150" style="fill:var(--ink-2);font-size:11px">copy once</text>
<line x1="305" y1="170" x2="305" y2="246" style="stroke:var(--line);stroke-width:14;stroke-dasharray:2 8"/>
<rect x="291" y="168" width="7" height="80" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<rect x="312" y="168" width="7" height="80" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<line x1="385" y1="170" x2="385" y2="246" style="stroke:var(--line);stroke-width:14;stroke-dasharray:2 8"/>
<rect x="371" y="168" width="7" height="80" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<rect x="392" y="168" width="7" height="80" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<text x="345" y="274" text-anchor="middle" style="fill:var(--ink);font-size:12px">Each helix keeps one old strand</text>
<text x="345" y="290" text-anchor="middle" style="fill:var(--ink);font-size:12px">and gets one new strand</text>
<text x="345" y="312" text-anchor="middle" style="fill:var(--good);font-size:12px;font-weight:650">✓ the real model</text>
<text x="575" y="24" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Dispersive</text>
<line x1="575" y1="46" x2="575" y2="122" style="stroke:var(--line);stroke-width:14;stroke-dasharray:2 8"/>
<rect x="561" y="44" width="7" height="80" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<rect x="582" y="44" width="7" height="80" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<line x1="575" y1="132" x2="575" y2="158" style="stroke:var(--ink-2);stroke-width:1.8" marker-end="url(#g303a-ah)"/>
<text x="584" y="150" style="fill:var(--ink-2);font-size:11px">copy once</text>
<line x1="535" y1="170" x2="535" y2="246" style="stroke:var(--line);stroke-width:14;stroke-dasharray:2 8"/>
<rect x="521" y="168" width="7" height="20" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<rect x="521" y="188" width="7" height="20" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<rect x="521" y="208" width="7" height="20" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<rect x="521" y="228" width="7" height="20" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<rect x="542" y="168" width="7" height="20" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<rect x="542" y="188" width="7" height="20" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<rect x="542" y="208" width="7" height="20" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<rect x="542" y="228" width="7" height="20" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<line x1="615" y1="170" x2="615" y2="246" style="stroke:var(--line);stroke-width:14;stroke-dasharray:2 8"/>
<rect x="601" y="168" width="7" height="20" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<rect x="601" y="188" width="7" height="20" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<rect x="601" y="208" width="7" height="20" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<rect x="601" y="228" width="7" height="20" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<rect x="622" y="168" width="7" height="20" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<rect x="622" y="188" width="7" height="20" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<rect x="622" y="208" width="7" height="20" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<rect x="622" y="228" width="7" height="20" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<text x="575" y="274" text-anchor="middle" style="fill:var(--ink);font-size:12px">Old and new pieces are</text>
<text x="575" y="290" text-anchor="middle" style="fill:var(--ink);font-size:12px">mixed along every strand</text>
<text x="575" y="312" text-anchor="middle" style="fill:var(--bad);font-size:12px;font-weight:650">✗ ruled out after generation 2</text>
<rect x="214" y="330" width="7" height="16" style="fill:var(--ink-2);stroke:var(--ink-2);stroke-width:0.8"/>
<text x="228" y="343" style="fill:var(--ink-2);font-size:12px">parent (old) strand</text>
<rect x="392" y="330" width="7" height="16" style="fill:var(--etc);stroke:var(--etc);stroke-width:0.8"/>
<text x="406" y="343" style="fill:var(--ink-2);font-size:12px">new strand</text>
</svg>
<figcaption>The three hypotheses after one round of replication. Old (parent) strands are grey; new strands are blue. Only the semiconservative model matches Meselson and Stahl's results (<a href="#/lesson/3.01">lesson 3.01</a>).</figcaption>
</figure>
<p>Meselson and Stahl settled the question in 1958 (<a href="#/lesson/3.01">lesson 3.01</a>) by growing <em>E. coli</em> on heavy <sup>15</sup>N, then light <sup>14</sup>N, and separating the DNA by density. One hybrid band after generation 1 ruled out the conservative model; hybrid plus light bands after generation 2 ruled out the dispersive model.</p>
<h4>Worked example: four generations</h4>
<p>Practice question 5: what percentage of helices still contain an original strand after four generations? The two original strands are never destroyed, so they are always in exactly <strong>two</strong> helices, while the total doubles each generation.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Generation</th><th>Total helices</th><th>Helices with an original strand</th><th>Percentage</th></tr></thead>
<tbody>
<tr><td>0 (parent)</td><td>1</td><td>1 (both strands old)</td><td>100%</td></tr>
<tr><td>1</td><td>2</td><td>2</td><td>100%</td></tr>
<tr><td>2</td><td>4</td><td>2</td><td>50%</td></tr>
<tr><td>3</td><td>8</td><td>2</td><td>25%</td></tr>
<tr><td>4</td><td>16</td><td>2</td><td><strong>12.5%</strong></td></tr>
</tbody></table></div>
<div class="eq">fraction with an original strand = 2 ÷ 2<sup>n</sup> &nbsp;→&nbsp; 2 ÷ 2<sup>4</sup> = 2 ÷ 16 = 0.125 = <strong>12.5%</strong></div>
<div class="callout key"><p class="callout-title">On the test</p><ul><li>Define semiconservative replication in one sentence: each new double helix contains one parent strand and one newly made strand.</li><li>Explain <em>why</em> both strands can be templates: complementary base pairing (A–T, G–C) means each strand holds the information for its partner.</li><li>Be ready for the percentage question: 2 of 2<sup>n</sup> helices keep an original strand.</li></ul></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Semi</strong> means half: each new helix is <strong>half</strong> old, <strong>half</strong> new. The parent DNA is half <em>conserved</em> in every copy.</p></div>

<h3 data-tier="essential">Opening the origin</h3>
<p>Replication cannot start just anywhere. It <strong>begins at an origin of replication</strong>: a specific base sequence that initiator proteins recognize. Three proteins open the helix there.</p>
<h4>DNA helicase: unzipping</h4>
<p><span class="term">DNA helicase</span> <strong>disrupts the hydrogen bonds</strong> between the complementary base pairs <strong>and unwinds the helix</strong> (slide 4). In the words of the class key, it "unzips" the double helix, exposing the two single strands to be used as templates. Only the weak hydrogen bonds break; the covalent backbone stays intact.</p>
<p>Opening the helix at an origin makes a <span class="term">replication bubble</span>: a stretch where the two strands are apart, with double-stranded DNA on either side. Each end of the bubble, where the open strands meet the closed helix, is a Y-shaped <span class="term">replication fork</span>.</p>
<p data-tier="likely">Origins tend to be rich in A–T base pairs. An A–T pair is held by only <strong>two</strong> hydrogen bonds, while G≡C has three, so A–T-rich DNA is easier to separate: a sensible place to start. Helicase itself is a ring of protein subunits that uses energy from <strong>ATP</strong> hydrolysis to push along one strand like a wedge.</p>
<h4>Single-strand binding proteins: holding it open</h4>
<p>Two separated, complementary strands "want" to pair up again. <span class="term">Single-stranded binding proteins (SSBs)</span> <strong>bind to the exposed bases to prevent hydrogen bonding</strong> (slide 5), keeping the template strands apart until they have been copied.</p>
<p data-tier="likely">SSBs also stop a single strand from folding back on itself (hairpins) and shield it from enzymes that would digest it. They come off as DNA polymerase arrives.</p>
<h4>Topoisomerase: relieving the twist</h4>
<p>The strands wrap around each other once every 10 base pairs, so pulling them apart forces the DNA ahead of the fork to twist more tightly, like pulling apart the strands of a twisted rope. This overwinding is called <span class="term">supercoiling</span>, and if nothing relieved it, the strain would stop helicase in its tracks.</p>
<p><span class="term">Topoisomerase</span> <strong>relieves the tension from the unwinding DNA</strong> (slide 5). The class key explains how: it works <em>ahead of the replication fork</em>, temporarily <strong>cutting the DNA backbone</strong>, letting the overwound DNA untwist, and then <strong>sealing it back together</strong>. The base sequence is not changed; only the amount of twisting is.</p>
<figure class="diagram stepper">
<svg viewBox="0 0 720 262" role="img" aria-labelledby="g303b-t g303b-d">
<title id="g303b-t">Opening the origin of replication</title>
<desc id="g303b-d">Step 1: a double helix with the origin of replication marked in the middle. Step 2: two helicases break the hydrogen bonds and open a replication bubble; the DNA ahead of each fork becomes overwound and tension builds. Step 3: single-strand binding proteins coat the separated strands. Step 4: topoisomerase ahead of each fork relieves the twisting tension. Step 5: the bubble grows as the two replication forks move away from the origin in opposite directions. The top strand runs 5 prime to 3 prime from left to right; the bottom strand runs 3 prime to 5 prime.</desc>
<defs><marker id="g303b-ak" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs>
<text x="34" y="146" text-anchor="end" style="fill:var(--ink-2);font-size:12px;font-weight:650">5′</text>
<text x="34" y="163" text-anchor="end" style="fill:var(--ink-2);font-size:12px;font-weight:650">3′</text>
<text x="686" y="146" style="fill:var(--ink-2);font-size:12px;font-weight:650">3′</text>
<text x="686" y="163" style="fill:var(--ink-2);font-size:12px;font-weight:650">5′</text>
<g data-step="1">
<line x1="42" y1="150" x2="678" y2="150" style="stroke:var(--line);stroke-width:12;stroke-dasharray:2 7"/>
<line x1="40" y1="142" x2="680" y2="142" style="stroke:var(--ink-2);stroke-width:2.5"/>
<line x1="40" y1="158" x2="680" y2="158" style="stroke:var(--ink-2);stroke-width:2.5"/>
<line x1="360" y1="102" x2="360" y2="134" style="stroke:var(--ink);stroke-width:1.6" marker-end="url(#g303b-ak)"/>
<text x="360" y="92" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">origin of replication</text>
<text x="360" y="190" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">parent DNA double helix (two H-bonded strands)</text>
</g>
<g data-step="2-3">
<line x1="42" y1="150" x2="116" y2="150" style="stroke:var(--line);stroke-width:12;stroke-dasharray:2 7"/>
<line x1="204" y1="150" x2="244" y2="150" style="stroke:var(--line);stroke-width:12;stroke-dasharray:2 7"/>
<line x1="476" y1="150" x2="516" y2="150" style="stroke:var(--line);stroke-width:12;stroke-dasharray:2 7"/>
<line x1="604" y1="150" x2="678" y2="150" style="stroke:var(--line);stroke-width:12;stroke-dasharray:2 7"/>
<path d="M40,142 L120,142 L122.5,142.6 L125,144.3 L127.5,146.9 L130,150 L132.5,153.1 L135,155.7 L137.5,157.4 L140,158 L142.5,157.4 L145,155.7 L147.5,153.1 L150,150 L152.5,146.9 L155,144.3 L157.5,142.6 L160,142 L162.5,142.6 L165,144.3 L167.5,146.9 L170,150 L172.5,153.1 L175,155.7 L177.5,157.4 L180,158 L182.5,157.4 L185,155.7 L187.5,153.1 L190,150 L192.5,146.9 L195,144.3 L197.5,142.6 L200,142 L250,142 C285.2,142 299.5,92 360,92 C420.5,92 434.8,142 470,142 L520,142 L522.5,142.6 L525,144.3 L527.5,146.9 L530,150 L532.5,153.1 L535,155.7 L537.5,157.4 L540,158 L542.5,157.4 L545,155.7 L547.5,153.1 L550,150 L552.5,146.9 L555,144.3 L557.5,142.6 L560,142 L562.5,142.6 L565,144.3 L567.5,146.9 L570,150 L572.5,153.1 L575,155.7 L577.5,157.4 L580,158 L582.5,157.4 L585,155.7 L587.5,153.1 L590,150 L592.5,146.9 L595,144.3 L597.5,142.6 L600,142 L680,142" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<path d="M40,158 L120,158 L122.5,157.4 L125,155.7 L127.5,153.1 L130,150 L132.5,146.9 L135,144.3 L137.5,142.6 L140,142 L142.5,142.6 L145,144.3 L147.5,146.9 L150,150 L152.5,153.1 L155,155.7 L157.5,157.4 L160,158 L162.5,157.4 L165,155.7 L167.5,153.1 L170,150 L172.5,146.9 L175,144.3 L177.5,142.6 L180,142 L182.5,142.6 L185,144.3 L187.5,146.9 L190,150 L192.5,153.1 L195,155.7 L197.5,157.4 L200,158 L250,158 C285.2,158 299.5,208 360,208 C420.5,208 434.8,158 470,158 L520,158 L522.5,157.4 L525,155.7 L527.5,153.1 L530,150 L532.5,146.9 L535,144.3 L537.5,142.6 L540,142 L542.5,142.6 L545,144.3 L547.5,146.9 L550,150 L552.5,153.1 L555,155.7 L557.5,157.4 L560,158 L562.5,157.4 L565,155.7 L567.5,153.1 L570,150 L572.5,146.9 L575,144.3 L577.5,142.6 L580,142 L582.5,142.6 L585,144.3 L587.5,146.9 L590,150 L592.5,153.1 L595,155.7 L597.5,157.4 L600,158 L680,158" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<text x="160" y="120" text-anchor="middle" style="fill:var(--proton);font-size:12px;font-weight:650">tension builds</text>
<text x="560" y="120" text-anchor="middle" style="fill:var(--proton);font-size:12px;font-weight:650">tension builds</text>
</g>
<g data-step="4">
<line x1="42" y1="150" x2="244" y2="150" style="stroke:var(--line);stroke-width:12;stroke-dasharray:2 7"/>
<line x1="476" y1="150" x2="678" y2="150" style="stroke:var(--line);stroke-width:12;stroke-dasharray:2 7"/>
<path d="M40,142 L250,142 C285.2,142 299.5,92 360,92 C420.5,92 434.8,142 470,142 L680,142" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<path d="M40,158 L250,158 C285.2,158 299.5,208 360,208 C420.5,208 434.8,158 470,158 L680,158" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<ellipse cx="160" cy="150" rx="24" ry="15" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.6"/>
<ellipse cx="560" cy="150" rx="24" ry="15" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.6"/>
<text x="160" y="122" text-anchor="middle" style="fill:var(--link);font-size:12px;font-weight:700">topoisomerase</text>
<text x="560" y="122" text-anchor="middle" style="fill:var(--link);font-size:12px;font-weight:700">topoisomerase</text>
</g>
<g data-step="2-4">
<ellipse cx="254" cy="150" rx="13" ry="20" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<ellipse cx="466" cy="150" rx="13" ry="20" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="254" y="198" text-anchor="middle" style="fill:var(--glyco);font-size:12px;font-weight:700">helicase</text>
<text x="466" y="198" text-anchor="middle" style="fill:var(--glyco);font-size:12px;font-weight:700">helicase</text>
<line x1="360" y1="228" x2="360" y2="214" style="stroke:var(--ink-2);stroke-width:1"/>
<text x="360" y="242" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:650">replication bubble</text>
</g>
<g data-step="2">
<text x="360" y="154" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:650">H-bonds broken</text>
</g>
<g data-step="3-4">
<circle cx="286.5" cy="124.4" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="322.2" cy="99.8" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="433.5" cy="124.4" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="397.8" cy="99.8" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="286.5" cy="175.6" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="322.2" cy="200.2" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="433.5" cy="175.6" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="397.8" cy="200.2" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="360" cy="92" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="360" cy="208" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<text x="360" y="140" text-anchor="middle" style="fill:var(--leaf);font-size:13px;font-weight:700">SSBs</text>
<text x="360" y="157" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">single-strand</text>
<text x="360" y="171" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">binding proteins</text>
</g>
<g data-step="5">
<line x1="42" y1="150" x2="158" y2="150" style="stroke:var(--line);stroke-width:12;stroke-dasharray:2 7"/>
<line x1="562" y1="150" x2="678" y2="150" style="stroke:var(--line);stroke-width:12;stroke-dasharray:2 7"/>
<path d="M40,142 L164,142 C210.7,142 229.7,84 310,84 L410,84 C490.3,84 509.3,142 556,142 L680,142" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<path d="M40,158 L164,158 C210.7,158 229.7,216 310,216 L410,216 C490.3,216 509.3,158 556,158 L680,158" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<ellipse cx="96" cy="150" rx="20" ry="13" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.6"/>
<ellipse cx="624" cy="150" rx="20" ry="13" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.6"/>
<circle cx="212.4" cy="121.6" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="259.9" cy="93.1" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="507.6" cy="121.6" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="460.1" cy="93.1" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="212.4" cy="178.4" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="259.9" cy="206.9" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="507.6" cy="178.4" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="460.1" cy="206.9" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="330" cy="84" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="390" cy="84" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="330" cy="216" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="390" cy="216" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<ellipse cx="168" cy="150" rx="13" ry="20" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<ellipse cx="552" cy="150" rx="13" ry="20" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<line x1="330" y1="150" x2="240" y2="150" style="stroke:var(--ink);stroke-width:2" marker-end="url(#g303b-ak)"/>
<line x1="390" y1="150" x2="480" y2="150" style="stroke:var(--ink);stroke-width:2" marker-end="url(#g303b-ak)"/>
<text x="360" y="154" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:650">origin</text>
<line x1="168" y1="178" x2="168" y2="234" style="stroke:var(--ink-2);stroke-width:1"/>
<line x1="552" y1="178" x2="552" y2="234" style="stroke:var(--ink-2);stroke-width:1"/>
<text x="168" y="248" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:650">replication fork</text>
<text x="552" y="248" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:650">replication fork</text>
</g>
</svg>
<ol class="step-captions">
<li><strong>Origin of replication.</strong> Replication starts at a specific base sequence, the <em>origin of replication</em>, where initiator proteins load helicase onto the DNA.</li>
<li><strong>Helicase opens a bubble.</strong> Helicase breaks the hydrogen bonds between base pairs and unwinds the helix, opening a <em>replication bubble</em> with a fork at each end. The DNA ahead of each fork overtwists.</li>
<li><strong>SSBs hold the strands apart.</strong> Single-strand binding proteins coat the exposed bases so the templates cannot H-bond back together (re-anneal).</li>
<li><strong>Topoisomerase relieves the tension.</strong> Ahead of each fork, topoisomerase cuts the backbone, lets the overwound DNA untwist, and rejoins it. Without it, supercoiling would stall helicase.</li>
<li><strong>Two forks move apart.</strong> Helicase keeps unwinding at both forks, so the bubble grows in <em>both directions</em> from the origin (bidirectional replication).</li>
</ol>
<figcaption>Opening the origin: helicase (amber), SSBs (green), topoisomerase (teal).</figcaption>
</figure>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>In practice question 1, the class key describes topoisomerase and then says "<strong>DNA gyrase</strong> relieves this torsional strain". It is the same job under a different name. <strong>DNA gyrase</strong> is the specific topoisomerase that bacteria such as <em>E. coli</em> use at the replication fork (a type II topoisomerase, which cuts both strands). <strong>Topoisomerase</strong> is the general name for the whole family, and it is the name to use on a test unless you are asked specifically about bacteria.</p></div>
<p data-tier="extra"><strong>Type I</strong> topoisomerases cut one strand; <strong>type II</strong> (including gyrase) cut both and use ATP. Quinolone antibiotics such as ciprofloxacin jam bacterial gyrase, and some cancer drugs target human topoisomerases: a cell that cannot relieve supercoiling cannot replicate.</p>
<div class="callout key"><p class="callout-title">On the test</p><ul><li><strong>Helicase</strong>: breaks H-bonds between bases; unwinds and unzips the helix; forms the replication bubble.</li><li><strong>SSBs</strong>: bind the exposed single strands to stop them re-forming H-bonds (re-annealing).</li><li><strong>Topoisomerase</strong>: works ahead of the fork; cuts and rejoins the backbone to relieve the twisting tension (supercoiling).</li></ul></div>

<h3 data-tier="essential">Two forks: bidirectional replication</h3>
<p>A replication bubble has a fork at <em>each</em> end, and both forks move. Slide 6 puts it this way: <strong>replication goes in both directions from the origin</strong>. This is called <span class="term">bidirectional replication</span>. As helicase keeps unwinding at both forks, the bubble grows outward in both directions until it meets a neighbouring bubble (in eukaryotes) or until the two forks meet on the far side of a circular chromosome (in bacteria).</p>
<p>Slide 7 defines the <span class="term">replication fork</span> as the <strong>Y-shaped region where helicase unwinds DNA</strong>. Its diagram labels two kinds of strand that you will use for the rest of the lesson: the <strong>parental strand</strong> (an old strand, now acting as a template) and the <strong>daughter strand</strong> (a newly made strand built on it).</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Slide 6 adds that replication is "always in 5′ → 3′ direction". That refers to how each <strong>new strand</strong> is built, not to which way the fork moves. The two forks of a bubble move in <strong>opposite</strong> directions, but every new strand still grows 5′ → 3′.</p></div>

<h3 data-tier="essential">One origin or thousands</h3>
<p>How many origins a chromosome needs depends on how big it is and how fast it can be copied.</p>
<ul>
<li><strong>Prokaryotes</strong> have one small, <strong>circular</strong> chromosome with a <strong>single origin</strong>; two forks travel around the circle and meet on the far side.</li>
<li><strong>Eukaryotes</strong> have many long, <strong>linear</strong> chromosomes, each with <strong>thousands of origins</strong> whose bubbles grow and merge.</li>
</ul>
<figure class="diagram">
<svg viewBox="0 0 760 318" role="img" aria-labelledby="g303c-t g303c-d">
<title id="g303c-t">One origin in a bacterium, many origins in a eukaryote</title>
<desc id="g303c-d">Left: a bacterial chromosome is a single circle with one origin at the top. Two replication forks leave the origin in opposite directions, copying the circle until they meet on the far side. E. coli copies about 4.6 million base pairs in about 40 minutes. Right: a stretch of one long linear eukaryotic chromosome has many origins. Bubbles open at every origin at the same time, grow in both directions, merge with their neighbours, and finally give two complete daughter molecules, each with one old and one new strand.</desc>
<defs><marker id="g303c-ab" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--etc)"/></marker></defs>
<text x="150" y="24" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Prokaryote: one origin</text>
<text x="150" y="41" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">one circular chromosome</text>
<circle cx="150" cy="170" r="86" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<circle cx="150" cy="170" r="77" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<path d="M160.1,73.5 A97,97 0 0 1 242.3,140" style="fill:none;stroke:var(--etc);stroke-width:3" marker-end="url(#g303c-ab)"/>
<path d="M139.9,73.5 A97,97 0 0 0 57.7,140" style="fill:none;stroke:var(--etc);stroke-width:3" marker-end="url(#g303c-ab)"/>
<circle cx="150" cy="88.5" r="5" style="fill:var(--ink);stroke:var(--ink);stroke-width:1"/>
<text x="150" y="62" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">origin</text>
<circle cx="150" cy="251.5" r="4" style="fill:none;stroke:var(--ink);stroke-width:1.5"/>
<text x="150" y="176" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">forks meet</text>
<text x="150" y="192" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">at the bottom</text>
<line x1="150" y1="200" x2="150" y2="240" style="stroke:var(--ink-2);stroke-width:1"/>
<text x="150" y="292" text-anchor="middle" style="fill:var(--ink);font-size:12px"><tspan style="font-style:italic">E. coli</tspan>: ~4.6 million bp</text>
<text x="150" y="308" text-anchor="middle" style="fill:var(--ink);font-size:12px">copied in about 40 minutes</text>
<line x1="306" y1="20" x2="306" y2="300" style="stroke:var(--line);stroke-width:1.5"/>
<text x="540" y="24" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Eukaryote: many origins</text>
<text x="540" y="41" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">part of one long, linear chromosome</text>
<text x="326" y="90" style="fill:var(--ink-2);font-size:12px;font-weight:650">origins</text>
<text x="326" y="156" style="fill:var(--ink-2);font-size:12px;font-weight:650">bubbles</text>
<text x="326" y="226" style="fill:var(--ink-2);font-size:12px;font-weight:650">merge</text>
<text x="326" y="288" style="fill:var(--ink-2);font-size:12px;font-weight:650">finished</text>
<line x1="402" y1="82" x2="748" y2="82" style="stroke:var(--ink-2);stroke-width:2.2"/>
<line x1="402" y1="90" x2="748" y2="90" style="stroke:var(--ink-2);stroke-width:2.2"/>
<circle cx="446" cy="86" r="4" style="fill:var(--ink);stroke:var(--ink);stroke-width:1"/>
<circle cx="531" cy="86" r="4" style="fill:var(--ink);stroke:var(--ink);stroke-width:1"/>
<circle cx="616" cy="86" r="4" style="fill:var(--ink);stroke:var(--ink);stroke-width:1"/>
<circle cx="701" cy="86" r="4" style="fill:var(--ink);stroke:var(--ink);stroke-width:1"/>
<line x1="402" y1="148" x2="420" y2="148" style="stroke:var(--ink-2);stroke-width:2.2"/>
<line x1="402" y1="156" x2="420" y2="156" style="stroke:var(--ink-2);stroke-width:2.2"/>
<line x1="472" y1="148" x2="505" y2="148" style="stroke:var(--ink-2);stroke-width:2.2"/>
<line x1="472" y1="156" x2="505" y2="156" style="stroke:var(--ink-2);stroke-width:2.2"/>
<line x1="557" y1="148" x2="590" y2="148" style="stroke:var(--ink-2);stroke-width:2.2"/>
<line x1="557" y1="156" x2="590" y2="156" style="stroke:var(--ink-2);stroke-width:2.2"/>
<line x1="642" y1="148" x2="675" y2="148" style="stroke:var(--ink-2);stroke-width:2.2"/>
<line x1="642" y1="156" x2="675" y2="156" style="stroke:var(--ink-2);stroke-width:2.2"/>
<line x1="727" y1="148" x2="748" y2="148" style="stroke:var(--ink-2);stroke-width:2.2"/>
<line x1="727" y1="156" x2="748" y2="156" style="stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M420,148 C432,148 432,128 446,128 C460,128 460,148 472,148" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M420,156 C432,156 432,176 446,176 C460,176 460,156 472,156" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M428,148 C436,148 436,135 446,135 C456,135 456,148 464,148" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<path d="M428,156 C436,156 436,169 446,169 C456,169 456,156 464,156" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<path d="M505,148 C517,148 517,128 531,128 C545,128 545,148 557,148" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M505,156 C517,156 517,176 531,176 C545,176 545,156 557,156" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M513,148 C521,148 521,135 531,135 C541,135 541,148 549,148" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<path d="M513,156 C521,156 521,169 531,169 C541,169 541,156 549,156" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<path d="M590,148 C602,148 602,128 616,128 C630,128 630,148 642,148" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M590,156 C602,156 602,176 616,176 C630,176 630,156 642,156" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M598,148 C606,148 606,135 616,135 C626,135 626,148 634,148" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<path d="M598,156 C606,156 606,169 616,169 C626,169 626,156 634,156" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<path d="M675,148 C687,148 687,128 701,128 C715,128 715,148 727,148" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M675,156 C687,156 687,176 701,176 C715,176 715,156 727,156" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M683,148 C691,148 691,135 701,135 C711,135 711,148 719,148" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<path d="M683,156 C691,156 691,169 701,169 C711,169 711,156 719,156" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<line x1="402" y1="218" x2="406" y2="218" style="stroke:var(--ink-2);stroke-width:2.2"/>
<line x1="402" y1="226" x2="406" y2="226" style="stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M406,218 C418,196 474,196 486,218" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M406,226 C418,248 474,248 486,226" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M412,220 C422,203 470,203 480,220" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<path d="M412,224 C422,241 470,241 480,224" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<path d="M491,218 C503,196 559,196 571,218" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M491,226 C503,248 559,248 571,226" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M497,220 C507,203 555,203 565,220" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<path d="M497,224 C507,241 555,241 565,224" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<path d="M576,218 C588,196 644,196 656,218" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M576,226 C588,248 644,248 656,226" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M582,220 C592,203 640,203 650,220" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<path d="M582,224 C592,241 640,241 650,224" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<path d="M661,218 C673,196 729,196 741,218" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M661,226 C673,248 729,248 741,226" style="fill:none;stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M667,220 C677,203 725,203 735,220" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<path d="M667,224 C677,241 725,241 735,224" style="fill:none;stroke:var(--etc);stroke-width:2.2"/>
<line x1="741" y1="218" x2="748" y2="218" style="stroke:var(--ink-2);stroke-width:2.2"/>
<line x1="741" y1="226" x2="748" y2="226" style="stroke:var(--ink-2);stroke-width:2.2"/>
<line x1="402" y1="271" x2="748" y2="271" style="stroke:var(--ink-2);stroke-width:2.2"/>
<line x1="402" y1="279" x2="748" y2="279" style="stroke:var(--etc);stroke-width:2.2"/>
<line x1="402" y1="289" x2="748" y2="289" style="stroke:var(--etc);stroke-width:2.2"/>
<line x1="402" y1="297" x2="748" y2="297" style="stroke:var(--ink-2);stroke-width:2.2"/>
<text x="575" y="312" text-anchor="middle" style="fill:var(--ink);font-size:12px">Human cells: ~6 billion bp copied in about 8 hours</text>
</svg>
<figcaption>Why eukaryotes need many origins. Grey = parent strands; blue = new DNA. One origin and two forks are enough for a small circular bacterial chromosome, but a long eukaryotic chromosome is copied from thousands of bubbles at once.</figcaption>
</figure>
<p>Practice question 3 asks why eukaryotic DNA needs multiple origins. <strong>Class key:</strong> eukaryotic genomes are massive, linear molecules with billions of base pairs, and the polymerases move relatively slowly. With only one origin, as in circular bacterial DNA, copying one chromosome would take weeks or even months. With thousands of origins, replication bubbles form at the same time all along the chromosome and merge, so the whole genome is copied in a few hours.</p>
<h4 data-tier="likely">Worked example: why one origin is not enough</h4>
<ol class="steps">
<li><p class="step-head">Size</p><p>Human chromosome 1, the largest, is about 250 million base pairs long.</p></li>
<li><p class="step-head">Speed</p><p>Eukaryotic DNA polymerases add about 50 nucleotides per second (bacterial pol III manages about 1000). Eukaryotic DNA is wrapped around histone proteins, which must be moved out of the way, so the fork is slower.</p></li>
<li><p class="step-head">One origin</p><p>Two forks × 50 nucleotides per second = 100 base pairs copied per second. Time = 250,000,000 ÷ 100 = 2,500,000 s ≈ <strong>29 days</strong>.</p></li>
<li><p class="step-head">Many origins</p><p>Firing tens of thousands of origins across the genome means each fork only has to copy a short stretch. The whole genome is done in an S phase of roughly <strong>8 hours</strong>.</p></li>
</ol>
<div class="callout key"><p class="callout-title">On the test</p><p>Prokaryote: <strong>one</strong> origin on a <strong>circular</strong> chromosome. Eukaryote: <strong>many</strong> origins on each <strong>linear</strong> chromosome, because the genome is huge and the polymerases are slow. In both, replication is <strong>bidirectional</strong> from every origin.</p></div>

<h3 data-tier="essential">Primase and RNA primers</h3>
<p>DNA polymerase cannot start copying on its own. The reading handout: <strong>DNA polymerase cannot initiate synthesis of a DNA strand; it can only add nucleotides to an existing chain</strong>. A DNA polymerase needs something to "hook onto" (class key): a strand that is already paired with the template and ends in a free <strong>3′-OH</strong> group.</p>
<p>That starting point is made by <span class="term">primase</span> (also called RNA primase). Primase is a kind of RNA polymerase, and unlike DNA polymerase it <em>can</em> start a chain from nothing. It reads the template and joins about <strong>10 RNA nucleotides</strong> into a short <span class="term">RNA primer</span> that is complementary to the template. The primer's last nucleotide has a free 3′-OH, and DNA polymerase III takes over from there (slide 8: "DNA polymerase III uses the RNA primer as a starting point").</p>
<ul>
<li>A primer is <strong>RNA</strong>, not DNA: it has ribose instead of deoxyribose and uses <strong>U</strong> instead of T (so a primer pairs U with the template's A).</li>
<li>The primer is <strong>temporary</strong>. Every primer is later removed and replaced with DNA (by DNA polymerase I).</li>
<li>The <strong>leading strand needs one primer</strong>; the <strong>lagging strand needs a new primer for every Okazaki fragment</strong>.</li>
</ul>
<p>Slide 10 shows it in four panels: template, primase starting RNA synthesis, the finished primer, and DNA polymerase extending it with DNA. Primer and DNA form one continuous strand, built 5′ → 3′.</p>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>Slide 8 says primase makes RNA primers "that bind to the 3′ end of the parental strand", and that DNA polymerase III "adds nucleotides to the 3′ end of the parental strand (5′ end of daughter strand)". That wording mixes up the two strands. The correct statement: <strong>DNA polymerase III adds nucleotides only to the free 3′-OH end of the growing (new, daughter) strand</strong>, starting from the primer's 3′ end. It <em>reads</em> the template (parental) strand 3′ → 5′ and <em>builds</em> the new strand 5′ → 3′. Nothing is added to the parental strand or to the 5′ end of the daughter strand, and a primer pairs wherever copying starts, not necessarily at the template's 3′ end. The handout and class key say it correctly: nucleotides are added to "the 3′ end of a growing strand".</p></div>
<p data-tier="extra">Why use RNA at all? A polymerase that can start a chain from nothing cannot check that the first few bases are right, because there is no paired strand behind it to check against, so primers contain more errors than DNA. Making them out of RNA flags them as temporary: the cell can recognize every primer, remove it, and replace it with DNA made by a polymerase that does proofread.</p>

<h3 data-tier="essential">DNA polymerase III builds the strand</h3>
<p><span class="term">DNA polymerase III</span> is the main builder. The class key calls it the "primary builder enzyme": it recognizes the RNA primer and adds free complementary DNA nucleotides, one at a time, to the growing 3′ end of the new strand. Each nucleotide is chosen by base pairing with the template.</p>
<p>The raw materials floating in the nucleus are not plain nucleotides but <span class="term">deoxyribonucleoside triphosphates (dNTPs)</span>: dATP, dTTP, dGTP and dCTP. Each has <strong>three phosphate groups</strong>. When polymerase adds one to the chain:</p>
<ol class="steps">
<li><p class="step-head">Pair</p><p>The incoming dNTP base-pairs with the next template base.</p></li>
<li><p class="step-head">Bond</p><p>The free 3′-OH of the growing strand attacks the dNTP's innermost phosphate, forming a <strong>phosphodiester bond</strong> (3′ carbon of one sugar → phosphate → 5′ carbon of the next).</p></li>
<li><p class="step-head">Release energy</p><p>The outer two phosphates leave as <strong>pyrophosphate</strong>; breaking those high-energy bonds powers the reaction, just as ATP powers others.</p></li>
<li><p class="step-head">Move on</p><p>The new nucleotide now carries the free 3′-OH. Polymerase slides one base along and repeats.</p></li>
</ol>
<figure class="diagram">
<svg viewBox="0 0 760 330" role="img" aria-labelledby="g303d-t g303d-d">
<title id="g303d-t">How DNA polymerase adds a nucleotide to the 3 prime end</title>
<desc id="g303d-d">Two panels. Left, before: the new strand (blue backbone) runs 5 prime at the top to 3 prime at the bottom and is paired with the template strand, which runs 3 prime to 5 prime. The last sugar of the new strand has a free 3 prime OH group. An incoming nucleotide (dNTP) with three phosphates has base-paired with the next template base. An arrow shows the 3 prime OH attacking the first phosphate of the incoming dNTP. Right, after: the incoming nucleotide is joined by a new phosphodiester bond and now carries the new 3 prime OH end. The outer two phosphates leave as pyrophosphate, releasing the energy that drives the reaction.</desc>
<defs><marker id="g303d-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--proton)"/></marker><marker id="g303d-ak" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker><marker id="g303d-ag" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<line x1="318" y1="62" x2="338" y2="90" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="338" y1="90" x2="318" y2="118" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="318" y1="118" x2="338" y2="146" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="338" y1="146" x2="318" y2="174" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="318" y1="174" x2="338" y2="213" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="338" y1="213" x2="318" y2="252" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="140" y1="34" x2="160" y2="62" style="stroke:var(--etc);stroke-width:2"/>
<line x1="160" y1="62" x2="140" y2="90" style="stroke:var(--etc);stroke-width:2"/>
<line x1="140" y1="90" x2="160" y2="118" style="stroke:var(--etc);stroke-width:2"/>
<line x1="160" y1="118" x2="140" y2="146" style="stroke:var(--etc);stroke-width:2"/>
<line x1="140" y1="146" x2="160" y2="174" style="stroke:var(--etc);stroke-width:2"/>
<rect x="260" y="52" width="46" height="20" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="283" y="66" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">T</text>
<path d="M318,51 L328.5,58.6 L324.5,70.9 L311.5,70.9 L307.5,58.6 Z" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.8"/>
<circle cx="338" cy="90" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="338" y="94" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<rect x="260" y="108" width="46" height="20" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="283" y="122" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">A</text>
<path d="M318,107 L328.5,114.6 L324.5,126.9 L311.5,126.9 L307.5,114.6 Z" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.8"/>
<circle cx="338" cy="146" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="338" y="150" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<rect x="260" y="164" width="46" height="20" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:1.4"/>
<text x="283" y="178" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">C</text>
<path d="M318,163 L328.5,170.6 L324.5,182.9 L311.5,182.9 L307.5,170.6 Z" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.8"/>
<circle cx="338" cy="213" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="338" y="217" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<rect x="260" y="242" width="46" height="20" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="283" y="256" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">G</text>
<path d="M318,241 L328.5,248.6 L324.5,260.9 L311.5,260.9 L307.5,248.6 Z" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.8"/>
<text x="326" y="40" style="fill:var(--ink-2);font-size:12px;font-weight:650">3′</text>
<text x="326" y="284" style="fill:var(--ink-2);font-size:12px;font-weight:650">5′</text>
<rect x="172" y="52" width="46" height="20" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="195" y="66" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">A</text>
<path d="M160,51 L170.5,58.6 L166.5,70.9 L153.5,70.9 L149.5,58.6 Z" style="fill:var(--surface);stroke:var(--etc);stroke-width:1.8"/>
<line x1="222" y1="62" x2="256" y2="62" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="172" y="108" width="46" height="20" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="195" y="122" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">T</text>
<path d="M160,107 L170.5,114.6 L166.5,126.9 L153.5,126.9 L149.5,114.6 Z" style="fill:var(--surface);stroke:var(--etc);stroke-width:1.8"/>
<line x1="222" y1="118" x2="256" y2="118" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="172" y="164" width="46" height="20" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="195" y="178" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">G</text>
<path d="M160,163 L170.5,170.6 L166.5,182.9 L153.5,182.9 L149.5,170.6 Z" style="fill:var(--surface);stroke:var(--etc);stroke-width:1.8"/>
<line x1="222" y1="174" x2="256" y2="174" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<circle cx="140" cy="34" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="140" y="38" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<circle cx="140" cy="90" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="140" y="94" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<circle cx="140" cy="146" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="140" y="150" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<text x="122" y="38" text-anchor="end" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<line x1="153" y1="183" x2="144" y2="196" style="stroke:var(--etc);stroke-width:1.6"/>
<text x="142" y="208" text-anchor="end" style="fill:var(--etc);font-size:12px;font-weight:700">OH</text>
<text x="8" y="178" style="fill:var(--ink);font-size:12px;font-weight:650">3′ end of the</text>
<text x="8" y="193" style="fill:var(--ink);font-size:12px;font-weight:650">growing strand</text>
<rect x="172" y="242" width="46" height="20" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:1.4"/>
<text x="195" y="256" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">C</text>
<path d="M160,241 L170.5,248.6 L166.5,260.9 L153.5,260.9 L149.5,248.6 Z" style="fill:var(--surface);stroke:var(--etc);stroke-width:1.8"/>
<line x1="222" y1="252" x2="256" y2="252" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<line x1="150" y1="248" x2="78" y2="248" style="stroke:var(--glyco);stroke-width:2"/>
<circle cx="130" cy="248" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="130" y="252" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<circle cx="104" cy="248" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="104" y="252" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<circle cx="78" cy="248" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="78" y="252" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<path d="M130,214 Q116,226 126,234" style="fill:none;stroke:var(--proton);stroke-width:1.8" marker-end="url(#g303d-ar)"/>
<text x="108" y="284" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:650">incoming dNTP</text>
<text x="108" y="299" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">(3 phosphates)</text>
<text x="175" y="18" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">1. Before: a matching dNTP pairs</text>
<line x1="366" y1="160" x2="398" y2="160" style="stroke:var(--ink);stroke-width:2.2" marker-end="url(#g303d-ak)"/>
<line x1="710" y1="62" x2="730" y2="90" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="730" y1="90" x2="710" y2="118" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="710" y1="118" x2="730" y2="146" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="730" y1="146" x2="710" y2="174" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="710" y1="174" x2="730" y2="213" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="730" y1="213" x2="710" y2="252" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="532" y1="34" x2="552" y2="62" style="stroke:var(--etc);stroke-width:2"/>
<line x1="552" y1="62" x2="532" y2="90" style="stroke:var(--etc);stroke-width:2"/>
<line x1="532" y1="90" x2="552" y2="118" style="stroke:var(--etc);stroke-width:2"/>
<line x1="552" y1="118" x2="532" y2="146" style="stroke:var(--etc);stroke-width:2"/>
<line x1="532" y1="146" x2="552" y2="174" style="stroke:var(--etc);stroke-width:2"/>
<line x1="552" y1="174" x2="532" y2="214" style="stroke:var(--etc);stroke-width:2"/>
<line x1="532" y1="214" x2="552" y2="252" style="stroke:var(--etc);stroke-width:2"/>
<rect x="652" y="52" width="46" height="20" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="675" y="66" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">T</text>
<path d="M710,51 L720.5,58.6 L716.5,70.9 L703.5,70.9 L699.5,58.6 Z" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.8"/>
<circle cx="730" cy="90" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="730" y="94" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<rect x="652" y="108" width="46" height="20" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="675" y="122" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">A</text>
<path d="M710,107 L720.5,114.6 L716.5,126.9 L703.5,126.9 L699.5,114.6 Z" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.8"/>
<circle cx="730" cy="146" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="730" y="150" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<rect x="652" y="164" width="46" height="20" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:1.4"/>
<text x="675" y="178" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">C</text>
<path d="M710,163 L720.5,170.6 L716.5,182.9 L703.5,182.9 L699.5,170.6 Z" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.8"/>
<circle cx="730" cy="213" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="730" y="217" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<rect x="652" y="242" width="46" height="20" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="675" y="256" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">G</text>
<path d="M710,241 L720.5,248.6 L716.5,260.9 L703.5,260.9 L699.5,248.6 Z" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.8"/>
<text x="718" y="40" style="fill:var(--ink-2);font-size:12px;font-weight:650">3′</text>
<text x="718" y="284" style="fill:var(--ink-2);font-size:12px;font-weight:650">5′</text>
<rect x="564" y="52" width="46" height="20" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="587" y="66" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">A</text>
<path d="M552,51 L562.5,58.6 L558.5,70.9 L545.5,70.9 L541.5,58.6 Z" style="fill:var(--surface);stroke:var(--etc);stroke-width:1.8"/>
<line x1="614" y1="62" x2="648" y2="62" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="564" y="108" width="46" height="20" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="587" y="122" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">T</text>
<path d="M552,107 L562.5,114.6 L558.5,126.9 L545.5,126.9 L541.5,114.6 Z" style="fill:var(--surface);stroke:var(--etc);stroke-width:1.8"/>
<line x1="614" y1="118" x2="648" y2="118" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="564" y="164" width="46" height="20" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="587" y="178" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">G</text>
<path d="M552,163 L562.5,170.6 L558.5,182.9 L545.5,182.9 L541.5,170.6 Z" style="fill:var(--surface);stroke:var(--etc);stroke-width:1.8"/>
<line x1="614" y1="174" x2="648" y2="174" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="564" y="242" width="46" height="20" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:1.4"/>
<text x="587" y="256" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">C</text>
<path d="M552,241 L562.5,248.6 L558.5,260.9 L545.5,260.9 L541.5,248.6 Z" style="fill:var(--surface);stroke:var(--etc);stroke-width:1.8"/>
<line x1="614" y1="252" x2="648" y2="252" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<circle cx="532" cy="34" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="532" y="38" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<circle cx="532" cy="90" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="532" y="94" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<circle cx="532" cy="146" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="532" y="150" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<text x="514" y="38" text-anchor="end" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<circle cx="532" cy="214" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="532" y="218" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<line x1="545" y1="261" x2="536" y2="274" style="stroke:var(--etc);stroke-width:1.6"/>
<text x="534" y="286" text-anchor="end" style="fill:var(--etc);font-size:12px;font-weight:700">OH</text>
<text x="508" y="286" text-anchor="end" style="fill:var(--ink);font-size:12px;font-weight:650">new 3′ end</text>
<text x="516" y="240" text-anchor="end" style="fill:var(--ink);font-size:12px;font-weight:650">new phosphodiester</text>
<text x="516" y="255" text-anchor="end" style="fill:var(--ink);font-size:12px;font-weight:650">bond</text>
<line x1="422" y1="118" x2="448" y2="118" style="stroke:var(--glyco);stroke-width:2"/>
<circle cx="422" cy="118" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="422" y="122" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<circle cx="448" cy="118" r="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="448" y="122" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<path d="M518,204 Q488,160 458,130" style="fill:none;stroke:var(--ink-2);stroke-width:1.4" marker-end="url(#g303d-ag)"/>
<text x="400" y="60" style="fill:var(--ink);font-size:12px;font-weight:650">pyrophosphate</text>
<text x="400" y="76" style="fill:var(--ink-2);font-size:12px">released: its energy</text>
<text x="400" y="92" style="fill:var(--ink-2);font-size:12px">drives the reaction</text>
<text x="567" y="18" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">2. After: the bond forms</text>
<text x="380" y="322" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">The new strand (blue) is built 5′ → 3′; the template (grey) is read 3′ → 5′.</text>
</svg>
<figcaption>DNA polymerase can only join a new nucleotide to a free 3′-OH, so new DNA always grows 5′ → 3′. The energy comes from the two phosphates the dNTP loses.</figcaption>
</figure>
<p data-tier="likely">Pol III is fast (about 1000 nucleotides per second in <em>E. coli</em>) and rarely falls off, because a ring-shaped <strong>sliding clamp</strong> holds it on the DNA. Pyrophosphate is then split into two phosphates, which makes each addition effectively irreversible.</p>
<h4>Why only 5′ → 3′?</h4>
<p>Every DNA polymerase adds nucleotides only to a <strong>3′ end</strong>. The new nucleotide joins by its 5′ phosphate to the 3′-OH of the chain, so the chain always grows at its 3′ end: <strong>new DNA is always built 5′ → 3′</strong>, and since the new strand must be antiparallel to its template, the template is always <strong>read 3′ → 5′</strong>. There is no enzyme that adds nucleotides to the 5′ end of a DNA chain.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Polymerase "builds from 5 to 3, reading 3 to 5". The new strand and the template always point in opposite directions, like two lanes of a highway. Draw an arrowhead on the 3′ end of every new strand: <strong>arrowheads are 3′ ends</strong>, and arrows only ever grow at their heads.</p></div>
<p data-tier="extra">Why this direction? The energy for each bond comes from the <em>incoming</em> nucleotide's triphosphate. If DNA grew 3′ → 5′, the triphosphate would sit on the chain's growing end, and every proofreading cut would remove the energy supply and stall synthesis. Growing 5′ → 3′ lets polymerase cut off a mistake and carry straight on.</p>

<h3 data-tier="essential">Leading and lagging strands</h3>
<p>Now combine two facts you already know: the two template strands are <strong>antiparallel</strong>, and DNA polymerase can only build <strong>5′ → 3′</strong>. Slide 11 spells out the consequence: "Since DNA is synthesized in the 5′ to 3′ direction, and the template strands run antiparallel, <strong>only one strand is able to be built continuously!</strong>"</p>
<p>At a fork, one template is oriented so that 5′ → 3′ synthesis points <em>into</em> the fork, the same way the fork is moving. The other template runs the opposite way, so 5′ → 3′ synthesis on it points <em>away from</em> the fork. The handout calls this "a problem"; the cell solves it with two strategies.</p>
<div class="compare"><div><h4>Leading strand</h4><ul><li>Built <strong>continuously</strong></li><li>Built <strong>toward</strong> the replication fork</li><li>Only <strong>1 RNA primer</strong> needed</li><li>DNA polymerase III simply follows helicase as the fork opens</li></ul></div><div><h4>Lagging strand</h4><ul><li>Built <strong>discontinuously</strong>, in short <strong>Okazaki fragments</strong></li><li>Built <strong>away from</strong> the replication fork</li><li><strong>Many RNA primers</strong> needed (one per fragment)</li><li>Fragments are joined later by DNA ligase</li></ul></div></div>
<p>Those are slide 12 point for point. On the lagging strand, primase must keep laying new primers as the fork exposes more template, and polymerase works "backwards in chunks" (class key).</p>
<p><span class="term">Okazaki fragments</span> are the short pieces of new DNA on the lagging strand, named after Reiji and Tsuneko Okazaki, who discovered them in the 1960s. In bacteria they are about 1000–2000 nucleotides long; in eukaryotes, about 100–200.</p>
<p><strong>How to tell which is which:</strong> draw the new strand antiparallel to its template as an arrow from 5′ to 3′. If the arrow points <strong>toward the fork</strong>, it is the leading strand (one long arrow); if it points <strong>away from the fork</strong>, it is the lagging strand (a row of short arrows, each with its own primer).</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Lagging" does not mean the strand is made by a lazier or slower enzyme. Both strands are made by DNA polymerase III, at about the same overall speed, and both grow 5′ → 3′. The lagging strand "lags" because each fragment can only be started after the fork has opened up enough new template, so its synthesis always trails slightly behind the fork.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>The <strong>leading</strong> strand <em>leads</em> the way into the fork, in one piece. The <strong>lagging</strong> strand <em>lags</em> behind, stitched together from short pieces built backwards.</p></div>

<h3 data-tier="essential">The replication fork, step by step</h3>
<p>This stepper puts every enzyme in its place at a single fork, in the order they act. Step through it with <strong>Next</strong>. Watch the arrowheads: they mark 3′ ends, and every one points the way that strand is growing.</p>
<figure class="diagram stepper">
<svg viewBox="0 0 760 318" role="img" aria-labelledby="g303e-t g303e-d">
<title id="g303e-t">The replication fork, step by step</title>
<desc id="g303e-d">A replication fork moving to the right. The parent double helix is on the right; its strands separate into two template arms on the left. The top template runs 5 prime to 3 prime from left to right, the bottom template 3 prime to 5 prime. Helicase sits at the fork, SSBs coat the single strands near it and topoisomerase works on the double helix ahead. Leading strand: primase lays one RNA primer on the bottom template and DNA polymerase III extends it continuously to the right, toward the fork. Lagging strand: on the top template, primase lays primers near the fork and DNA polymerase III extends each one to the left, away from the fork, making Okazaki fragments. DNA polymerase I then removes each RNA primer and replaces it with DNA, and DNA ligase seals the remaining nick with a phosphodiester bond.</desc>
<defs><marker id="g303e-ab" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="13" markerHeight="13" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--etc)"/></marker><marker id="g303e-ak" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs>
<line x1="556" y1="170" x2="738" y2="170" style="stroke:var(--line);stroke-width:12;stroke-dasharray:2 7"/>
<path d="M30,88 L470,88 C510,88 520,162 548,162 L740,162" style="fill:none;stroke:var(--ink-2);stroke-width:3"/>
<path d="M30,252 L470,252 C510,252 520,178 548,178 L740,178" style="fill:none;stroke:var(--ink-2);stroke-width:3"/>
<text x="24" y="92" text-anchor="end" style="fill:var(--ink-2);font-size:12px;font-weight:650">5′</text>
<text x="24" y="256" text-anchor="end" style="fill:var(--ink-2);font-size:12px;font-weight:650">3′</text>
<text x="746" y="166" style="fill:var(--ink-2);font-size:12px;font-weight:650">3′</text>
<text x="746" y="184" style="fill:var(--ink-2);font-size:12px;font-weight:650">5′</text>
<text x="40" y="70" style="fill:var(--ink-2);font-size:12px">lagging-strand template</text>
<text x="40" y="282" style="fill:var(--ink-2);font-size:12px">leading-strand template</text>
<circle cx="490.8" cy="95.7" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="490.8" cy="244.3" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="510.1" cy="119.5" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="510.1" cy="220.5" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="526.4" cy="146" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<circle cx="526.4" cy="194" r="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.4"/>
<text x="506" y="70" style="fill:var(--leaf);font-size:12px;font-weight:700">SSBs</text>
<ellipse cx="552" cy="170" rx="13" ry="24" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.6"/>
<text x="572" y="136" style="fill:var(--glyco);font-size:12px;font-weight:700">helicase</text>
<ellipse cx="676" cy="170" rx="24" ry="16" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.6"/>
<text x="676" y="210" text-anchor="middle" style="fill:var(--link);font-size:12px;font-weight:700">topoisomerase</text>
<line x1="612" y1="46" x2="712" y2="46" style="stroke:var(--ink);stroke-width:2" marker-end="url(#g303e-ak)"/>
<text x="662" y="34" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:650">fork moves</text>
<line x1="572" y1="226" x2="560" y2="198" style="stroke:var(--ink-2);stroke-width:1"/>
<text x="572" y="240" style="fill:var(--ink);font-size:12px;font-weight:650">replication fork</text>
<line x1="200" y1="304" x2="226" y2="304" style="stroke:var(--ink-2);stroke-width:3"/>
<text x="232" y="308" style="fill:var(--ink-2);font-size:12px">parent (template) DNA</text>
<line x1="396" y1="304" x2="422" y2="304" style="stroke:var(--etc);stroke-width:5"/>
<text x="428" y="308" style="fill:var(--ink-2);font-size:12px">new DNA</text>
<line x1="508" y1="304" x2="534" y2="304" style="stroke:var(--krebs);stroke-width:6"/>
<text x="540" y="308" style="fill:var(--ink-2);font-size:12px">RNA primer</text>
<g data-from="2">
<line x1="42" y1="241" x2="76" y2="241" style="stroke:var(--line);stroke-width:10;stroke-dasharray:2 7"/>
<line x1="40" y1="230" x2="76" y2="230" style="stroke:var(--krebs);stroke-width:6"/>
<text x="36" y="234" text-anchor="end" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
</g>
<g data-step="2">
<ellipse cx="98" cy="230" rx="22" ry="11" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:1.6"/>
<text x="140" y="234" style="fill:var(--krebs);font-size:12px;font-weight:700">primase</text>
<text x="58" y="210" text-anchor="middle" style="fill:var(--krebs);font-size:12px;font-weight:650">RNA primer</text>
</g>
<g data-from="3">
<line x1="78" y1="241" x2="448" y2="241" style="stroke:var(--line);stroke-width:10;stroke-dasharray:2 7"/>
<line x1="76" y1="230" x2="446" y2="230" style="stroke:var(--etc);stroke-width:5" marker-end="url(#g303e-ab)"/>
<text x="262" y="212" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:700">leading strand (continuous)</text>
</g>
<g data-step="3">
<ellipse cx="452" cy="230" rx="26" ry="11" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.6"/>
<text x="452" y="208" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:700">DNA pol III</text>
</g>
<g data-from="4">
<text x="458" y="234" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
</g>
<g data-from="4">
<line x1="200" y1="99" x2="236" y2="99" style="stroke:var(--line);stroke-width:10;stroke-dasharray:2 7"/>
</g>
<g data-from="4" data-upto="6">
<line x1="200" y1="110" x2="236" y2="110" style="stroke:var(--krebs);stroke-width:6"/>
</g>
<g data-step="4">
<ellipse cx="186" cy="110" rx="22" ry="11" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:1.6"/>
<text x="186" y="150" text-anchor="middle" style="fill:var(--krebs);font-size:12px;font-weight:700">primase</text>
</g>
<g data-step="4-6">
<text x="236" y="134" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
</g>
<g data-from="5">
<line x1="44" y1="99" x2="200" y2="99" style="stroke:var(--line);stroke-width:10;stroke-dasharray:2 7"/>
<line x1="200" y1="110" x2="48" y2="110" style="stroke:var(--etc);stroke-width:5" marker-end="url(#g303e-ab)"/>
<text x="262" y="172" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:700">lagging strand (Okazaki fragments)</text>
</g>
<g data-step="5">
<ellipse cx="64" cy="110" rx="26" ry="11" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.6"/>
<text x="64" y="150" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:700">DNA pol III</text>
</g>
<g data-from="6">
<text x="44" y="134" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
</g>
<g data-from="6">
<line x1="240" y1="99" x2="376" y2="99" style="stroke:var(--line);stroke-width:10;stroke-dasharray:2 7"/>
<line x1="340" y1="110" x2="376" y2="110" style="stroke:var(--krebs);stroke-width:6"/>
<text x="376" y="134" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<line x1="430" y1="99" x2="466" y2="99" style="stroke:var(--line);stroke-width:10;stroke-dasharray:2 7"/>
<line x1="430" y1="110" x2="466" y2="110" style="stroke:var(--krebs);stroke-width:6"/>
<text x="430" y="134" text-anchor="middle" style="fill:var(--krebs);font-size:12px;font-weight:650">3′</text>
<text x="466" y="134" text-anchor="middle" style="fill:var(--krebs);font-size:12px;font-weight:650">5′</text>
</g>
<g data-step="6">
<line x1="340" y1="110" x2="248" y2="110" style="stroke:var(--etc);stroke-width:5" marker-end="url(#g303e-ab)"/>
<ellipse cx="272" cy="110" rx="26" ry="11" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.6"/>
<text x="272" y="150" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:700">DNA pol III</text>
<ellipse cx="416" cy="110" rx="22" ry="11" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:1.6"/>
<text x="416" y="150" text-anchor="middle" style="fill:var(--krebs);font-size:12px;font-weight:700">primase</text>
</g>
<g data-step="7">
<line x1="340" y1="110" x2="208" y2="110" style="stroke:var(--etc);stroke-width:5" marker-end="url(#g303e-ab)"/>
<ellipse cx="220" cy="110" rx="24" ry="11" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1.6"/>
<text x="220" y="150" text-anchor="middle" style="fill:var(--proton);font-size:12px;font-weight:700">DNA pol I</text>
<text x="193" y="134" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<text x="211" y="134" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
</g>
<g data-from="8">
<line x1="340" y1="110" x2="199" y2="110" style="stroke:var(--etc);stroke-width:5"/>
</g>
<g data-step="8">
<ellipse cx="201" cy="110" rx="18" ry="11" style="fill:var(--good-soft);stroke:var(--good);stroke-width:1.6"/>
<text x="201" y="150" text-anchor="middle" style="fill:var(--good);font-size:12px;font-weight:700">DNA ligase</text>
</g>
</svg>
<ol class="step-captions">
<li><strong>The open fork.</strong> Helicase unwinds the parent DNA, SSBs hold the strands apart, and topoisomerase relieves the strain ahead. The templates are antiparallel: top 5′ → 3′ left to right, bottom 3′ → 5′.</li>
<li><strong>Primase primes the leading strand.</strong> DNA polymerase cannot start a strand, so primase builds a short RNA primer (about 10 nucleotides) ending in a free 3′-OH.</li>
<li><strong>DNA polymerase III builds the leading strand.</strong> It adds DNA nucleotides to the primer's 3′ end, building 5′ → 3′. On this template that points <em>toward</em> the fork, so pol III follows helicase: one primer, one continuous strand.</li>
<li><strong>Primase primes the lagging strand.</strong> On the top template, 5′ → 3′ synthesis points <em>away</em> from the fork. Primase lays a primer near the fork.</li>
<li><strong>Pol III makes an Okazaki fragment.</strong> Pol III extends the primer away from the fork, building a short fragment (1000–2000 nucleotides in bacteria, 100–200 in eukaryotes), then lets go.</li>
<li><strong>The cycle repeats.</strong> As the fork opens more template, primase lays a new primer and pol III builds the next fragment until it reaches the previous primer. Every fragment needs its own primer.</li>
<li><strong>DNA polymerase I swaps RNA for DNA.</strong> Pol I removes the old RNA primer (acting as an exonuclease) and fills the space with DNA, extending the next fragment's 3′ end. One bond is still missing: a <em>nick</em>.</li>
<li><strong>DNA ligase seals the nick.</strong> Ligase forms the final phosphodiester bond, joining the fragments into one continuous strand. This happens at every primer.</li>
</ol>
<figcaption>Build the fork one enzyme at a time. Arrowheads mark the growing 3′ ends: every new piece of DNA grows 5′ → 3′.</figcaption>
</figure>
<div class="callout teacher"><p class="callout-title">From the slides</p><p>Slide 18 ("Watch this!") links to a replication animation beside a figure of the whole fork with every enzyme labelled. When you watch it, pause at each enzyme, say its job out loud, and check it against the stepper above.</p></div>
<p data-tier="extra">In a real cell the two pol III enzymes at a fork are linked into one complex with helicase and primase (the <strong>replisome</strong>). The lagging-strand template loops out so both polymerases can travel together; the loop grows and is released with each fragment (the "trombone model").</p>

<h3 data-tier="essential">Pol I and ligase finish the job</h3>
<p>When pol III is done, the lagging strand is a row of Okazaki fragments, each starting with an RNA primer. Two more enzymes turn this into one continuous DNA strand. Slide 15:</p>
<ul>
<li><span class="term">DNA polymerase I</span> <strong>removes the RNA primers and replaces them with the appropriate nucleotides</strong> (DNA).</li>
<li><span class="term">DNA ligase</span> <strong>forms phosphodiester bonds after the RNA primers are replaced with DNA nucleotides</strong>.</li>
</ul>
<p>Slide 16 shows this in three panels. (1) DNA polymerase III builds an Okazaki fragment until it reaches the RNA primer of the previous fragment. (2) DNA polymerase I moves in, removes that primer and fills the space with DNA, extending the newer fragment's 3′ end. (3) One bond in the backbone is still missing, a gap called a <span class="term">nick</span>, and DNA ligase seals it.</p>
<p>Why can't pol I seal the nick? A polymerase adds <em>nucleotides</em>. At a nick no nucleotide is missing; only the bond between one fragment's 3′-OH and the next one's 5′ phosphate is absent. Joining two pieces is ligase's job (class key: "molecular glue" that seals the sugar-phosphate backbone with phosphodiester bonds). The slide's cartoon ligase is "just making ends meet".</p>
<div class="compare"><div><h4>DNA polymerase III</h4><ul><li>The main builder</li><li>Extends the RNA primers with DNA, 5′ → 3′</li><li>Makes the leading strand and every Okazaki fragment</li><li>Proofreads as it builds</li></ul></div><div><h4>DNA polymerase I</h4><ul><li>The clean-up crew</li><li>Removes RNA primers (acting as an exonuclease) and replaces them with DNA</li><li>Works on every primer, leading and lagging</li><li>Also proofreads</li></ul></div></div>
<p data-tier="likely">Pol I does two jobs at once: its <strong>5′ → 3′ exonuclease</strong> removes primer RNA ahead of it while its polymerase adds DNA to the fragment's 3′ end behind it. It also has the <strong>3′ → 5′ exonuclease</strong> (proofreading) activity of pol III. Ligase uses energy from ATP (NAD<sup>+</sup> in bacteria).</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Ligase does not fill gaps with nucleotides, and polymerase does not join fragments. Pol I: <strong>removes primers and fills in DNA</strong>. Ligase: <strong>seals the nick</strong> with a phosphodiester bond. Also remember the leading strand has a primer too (just one), which is also replaced by pol I.</p></div>

<h3 data-tier="essential">Drawing a whole bubble</h3>
<p>The "Check your understanding" slide shows a bubble with only the top-left 5′ end and one arrow drawn in, and asks you to <strong>complete the diagram by drawing all leading and lagging strands and indicating all 5′ and 3′ ends</strong>. The key idea: a bubble has <strong>two forks</strong>, and each template strand is a leading-strand template for one fork and a lagging-strand template for the other.</p>
<ol class="steps">
<li><p class="step-head">Label the parent strands</p><p>If the top strand is 5′ on the left, it is 3′ on the right. The bottom strand is antiparallel: 3′ on the left, 5′ on the right.</p></li>
<li><p class="step-head">Find each new strand's direction</p><p>A new strand is antiparallel to its template and grows 5′ → 3′. On the top template (5′ → 3′ left to right) the new DNA grows <strong>right to left</strong>. On the bottom template it grows <strong>left to right</strong>.</p></li>
<li><p class="step-head">Left fork (moving left)</p><p>Top new strand grows left, <em>toward</em> the left fork: a long continuous <strong>leading strand</strong>. Bottom new strand grows right, <em>away from</em> the left fork: short <strong>Okazaki fragments</strong> (lagging).</p></li>
<li><p class="step-head">Right fork (moving right)</p><p>Bottom new strand grows right, <em>toward</em> the right fork: the <strong>leading strand</strong>. Top new strand grows left, <em>away from</em> the right fork: <strong>Okazaki fragments</strong>.</p></li>
<li><p class="step-head">Label every piece</p><p>Each continuous strand and each fragment gets a 5′ at its tail and a 3′ at its arrowhead. The arrowheads on one template all point the same way.</p></li>
</ol>
<figure class="diagram">
<svg viewBox="0 0 760 330" role="img" aria-labelledby="g303f-t g303f-d">
<title id="g303f-t">Answer: a replication bubble with leading and lagging strands at both forks</title>
<desc id="g303f-d">A replication bubble with a fork at each end. The top parent strand runs 5 prime to 3 prime from left to right and the bottom parent strand 3 prime to 5 prime. All new strands are antiparallel to their template and grow 5 prime to 3 prime. On the top template, new DNA grows from right to left: a long continuous leading strand runs from just right of the origin to the left fork (its 3 prime end points at the left fork), and three short Okazaki fragments near the right fork also point left, away from the right fork. On the bottom template, new DNA grows from left to right: a continuous leading strand runs from just left of the origin to the right fork, and three Okazaki fragments near the left fork point right, away from the left fork. Every piece has its 5 prime end at the tail and its 3 prime end at the arrowhead.</desc>
<defs><marker id="g303f-ab" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--etc)"/></marker><marker id="g303f-ak" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs>
<path d="M30,156 L140,156 140,156 L142,154.4 L144,152.8 L146,151.2 L148,149.6 L150,148 L152,146.4 L154,144.9 L156,143.4 L158,141.9 L160,140.3 L162,138.9 L164,137.4 L166,135.9 L168,134.5 L170,133 L172,131.6 L174,130.2 L176,128.8 L178,127.4 L180,126.1 L182,124.7 L184,123.4 L186,122 L188,120.7 L190,119.4 L192,118.1 L194,116.9 L196,115.6 L198,114.4 L200,113.1 L202,111.9 L204,110.7 L206,109.5 L208,108.3 L210,107.2 L212,106 L214,104.9 L216,103.8 L218,102.7 L220,101.6 L222,100.5 L224,99.4 L226,98.4 L228,97.3 L230,96.3 L232,95.3 L234,94.3 L236,93.3 L238,92.3 L240,91.3 L242,90.4 L244,89.5 L246,88.6 L248,87.6 L250,86.8 L252,85.9 L254,85 L256,84.2 L258,83.3 L260,82.5 L262,81.7 L264,80.9 L266,80.1 L268,79.3 L270,78.6 L272,77.8 L274,77.1 L276,76.4 L278,75.7 L280,75 L282,74.3 L284,73.7 L286,73 L288,72.4 L290,71.8 L292,71.2 L294,70.6 L296,70 L298,69.4 L300,68.9 L302,68.4 L304,67.8 L306,67.3 L308,66.8 L310,66.3 L312,65.9 L314,65.4 L316,65 L318,64.5 L320,64.1 L322,63.7 L324,63.3 L326,63 L328,62.6 L330,62.3 L332,61.9 L334,61.6 L336,61.3 L338,61 L340,60.7 L342,60.5 L344,60.2 L346,60 L348,59.7 L350,59.5 L352,59.3 L354,59.2 L356,59 L358,58.8 L360,58.7 L362,58.6 L364,58.4 L366,58.3 L368,58.2 L370,58.2 L372,58.1 L374,58.1 L376,58 L378,58 L380,58 L382,58 L384,58 L386,58.1 L388,58.1 L390,58.2 L392,58.2 L394,58.3 L396,58.4 L398,58.6 L400,58.7 L402,58.8 L404,59 L406,59.2 L408,59.3 L410,59.5 L412,59.7 L414,60 L416,60.2 L418,60.5 L420,60.7 L422,61 L424,61.3 L426,61.6 L428,61.9 L430,62.3 L432,62.6 L434,63 L436,63.3 L438,63.7 L440,64.1 L442,64.5 L444,65 L446,65.4 L448,65.9 L450,66.3 L452,66.8 L454,67.3 L456,67.8 L458,68.4 L460,68.9 L462,69.4 L464,70 L466,70.6 L468,71.2 L470,71.8 L472,72.4 L474,73 L476,73.7 L478,74.3 L480,75 L482,75.7 L484,76.4 L486,77.1 L488,77.8 L490,78.6 L492,79.3 L494,80.1 L496,80.9 L498,81.7 L500,82.5 L502,83.3 L504,84.2 L506,85 L508,85.9 L510,86.8 L512,87.6 L514,88.6 L516,89.5 L518,90.4 L520,91.3 L522,92.3 L524,93.3 L526,94.3 L528,95.3 L530,96.3 L532,97.3 L534,98.4 L536,99.4 L538,100.5 L540,101.6 L542,102.7 L544,103.8 L546,104.9 L548,106 L550,107.2 L552,108.3 L554,109.5 L556,110.7 L558,111.9 L560,113.1 L562,114.4 L564,115.6 L566,116.9 L568,118.1 L570,119.4 L572,120.7 L574,122 L576,123.4 L578,124.7 L580,126.1 L582,127.4 L584,128.8 L586,130.2 L588,131.6 L590,133 L592,134.5 L594,135.9 L596,137.4 L598,138.9 L600,140.3 L602,141.9 L604,143.4 L606,144.9 L608,146.4 L610,148 L612,149.6 L614,151.2 L616,152.8 L618,154.4 L620,156 L730,156" style="fill:none;stroke:var(--ink-2);stroke-width:3"/>
<path d="M30,172 L140,172 140,172 L142,173.6 L144,175.2 L146,176.8 L148,178.4 L150,180 L152,181.6 L154,183.1 L156,184.6 L158,186.1 L160,187.7 L162,189.1 L164,190.6 L166,192.1 L168,193.5 L170,195 L172,196.4 L174,197.8 L176,199.2 L178,200.6 L180,201.9 L182,203.3 L184,204.6 L186,206 L188,207.3 L190,208.6 L192,209.9 L194,211.1 L196,212.4 L198,213.6 L200,214.9 L202,216.1 L204,217.3 L206,218.5 L208,219.7 L210,220.8 L212,222 L214,223.1 L216,224.2 L218,225.3 L220,226.4 L222,227.5 L224,228.6 L226,229.6 L228,230.7 L230,231.7 L232,232.7 L234,233.7 L236,234.7 L238,235.7 L240,236.7 L242,237.6 L244,238.5 L246,239.4 L248,240.4 L250,241.2 L252,242.1 L254,243 L256,243.8 L258,244.7 L260,245.5 L262,246.3 L264,247.1 L266,247.9 L268,248.7 L270,249.4 L272,250.2 L274,250.9 L276,251.6 L278,252.3 L280,253 L282,253.7 L284,254.3 L286,255 L288,255.6 L290,256.2 L292,256.8 L294,257.4 L296,258 L298,258.6 L300,259.1 L302,259.6 L304,260.2 L306,260.7 L308,261.2 L310,261.7 L312,262.1 L314,262.6 L316,263 L318,263.5 L320,263.9 L322,264.3 L324,264.7 L326,265 L328,265.4 L330,265.7 L332,266.1 L334,266.4 L336,266.7 L338,267 L340,267.3 L342,267.5 L344,267.8 L346,268 L348,268.3 L350,268.5 L352,268.7 L354,268.8 L356,269 L358,269.2 L360,269.3 L362,269.4 L364,269.6 L366,269.7 L368,269.8 L370,269.8 L372,269.9 L374,269.9 L376,270 L378,270 L380,270 L382,270 L384,270 L386,269.9 L388,269.9 L390,269.8 L392,269.8 L394,269.7 L396,269.6 L398,269.4 L400,269.3 L402,269.2 L404,269 L406,268.8 L408,268.7 L410,268.5 L412,268.3 L414,268 L416,267.8 L418,267.5 L420,267.3 L422,267 L424,266.7 L426,266.4 L428,266.1 L430,265.7 L432,265.4 L434,265 L436,264.7 L438,264.3 L440,263.9 L442,263.5 L444,263 L446,262.6 L448,262.1 L450,261.7 L452,261.2 L454,260.7 L456,260.2 L458,259.6 L460,259.1 L462,258.6 L464,258 L466,257.4 L468,256.8 L470,256.2 L472,255.6 L474,255 L476,254.3 L478,253.7 L480,253 L482,252.3 L484,251.6 L486,250.9 L488,250.2 L490,249.4 L492,248.7 L494,247.9 L496,247.1 L498,246.3 L500,245.5 L502,244.7 L504,243.8 L506,243 L508,242.1 L510,241.2 L512,240.4 L514,239.4 L516,238.5 L518,237.6 L520,236.7 L522,235.7 L524,234.7 L526,233.7 L528,232.7 L530,231.7 L532,230.7 L534,229.6 L536,228.6 L538,227.5 L540,226.4 L542,225.3 L544,224.2 L546,223.1 L548,222 L550,220.8 L552,219.7 L554,218.5 L556,217.3 L558,216.1 L560,214.9 L562,213.6 L564,212.4 L566,211.1 L568,209.9 L570,208.6 L572,207.3 L574,206 L576,204.6 L578,203.3 L580,201.9 L582,200.6 L584,199.2 L586,197.8 L588,196.4 L590,195 L592,193.5 L594,192.1 L596,190.6 L598,189.1 L600,187.7 L602,186.1 L604,184.6 L606,183.1 L608,181.6 L610,180 L612,178.4 L614,176.8 L616,175.2 L618,173.6 L620,172 L730,172" style="fill:none;stroke:var(--ink-2);stroke-width:3"/>
<line x1="32" y1="164" x2="134" y2="164" style="stroke:var(--line);stroke-width:10;stroke-dasharray:2 7"/>
<line x1="626" y1="164" x2="728" y2="164" style="stroke:var(--line);stroke-width:10;stroke-dasharray:2 7"/>
<text x="24" y="160" text-anchor="end" style="fill:var(--ink-2);font-size:12px;font-weight:650">5′</text>
<text x="24" y="178" text-anchor="end" style="fill:var(--ink-2);font-size:12px;font-weight:650">3′</text>
<text x="736" y="160" style="fill:var(--ink-2);font-size:12px;font-weight:650">3′</text>
<text x="736" y="178" style="fill:var(--ink-2);font-size:12px;font-weight:650">5′</text>
<path d="M397.8,73.6 L392.3,73.3 L386.7,73.1 L381.2,73 L375.7,73 L370.1,73.2 L364.6,73.4 L359.1,73.8 L353.6,74.3 L348.1,74.8 L342.6,75.5 L337.1,76.3 L331.7,77.2 L326.2,78.2 L320.8,79.3 L315.4,80.5 L310,81.8 L304.7,83.2 L299.4,84.6 L294.1,86.2 L288.8,87.9 L283.6,89.7 L278.3,91.5 L273.2,93.4 L268,95.4 L262.9,97.5 L257.8,99.7 L252.8,102 L247.7,104.3 L242.7,106.7 L237.8,109.1 L232.9,111.7 L228,114.3 L223.2,116.9 L218.3,119.7 L213.6,122.5 L208.8,125.3 L204.1,128.2 L199.5,131.2 L194.8,134.2 L190.2,137.3" style="fill:none;stroke:var(--etc);stroke-width:3.2" marker-end="url(#g303f-ab)"/>
<path d="M474.8,89.1 L473.6,88.7 L472.3,88.3 L471,87.8 L469.8,87.4 L468.5,87 L467.2,86.6 L465.9,86.2 L464.7,85.8 L463.4,85.5 L462.1,85.1 L460.8,84.7 L459.5,84.3 L458.3,84 L457,83.6 L455.7,83.3 L454.4,82.9 L453.1,82.6 L451.8,82.2 L450.5,81.9 L449.2,81.6 L447.9,81.3 L446.6,81 L445.3,80.6 L444,80.3 L442.7,80 L441.4,79.8 L440.1,79.5 L438.8,79.2 L437.5,78.9 L436.2,78.7 L434.9,78.4 L433.6,78.1 L432.3,77.9 L431,77.7 L429.6,77.4 L428.3,77.2 L427,77 L425.7,76.7 L424.4,76.5 L423.1,76.3" style="fill:none;stroke:var(--etc);stroke-width:3.2" marker-end="url(#g303f-ab)"/>
<path d="M530.7,113.6 L529.8,113.1 L528.9,112.6 L528,112.1 L527.1,111.6 L526.2,111.2 L525.3,110.7 L524.4,110.2 L523.4,109.8 L522.5,109.3 L521.6,108.9 L520.7,108.4 L519.8,107.9 L518.9,107.5 L518,107 L517.1,106.6 L516.2,106.1 L515.3,105.7 L514.3,105.3 L513.4,104.8 L512.5,104.4 L511.6,104 L510.7,103.5 L509.7,103.1 L508.8,102.7 L507.9,102.2 L507,101.8 L506,101.4 L505.1,101 L504.2,100.6 L503.2,100.2 L502.3,99.8 L501.4,99.4 L500.4,99 L499.5,98.6 L498.6,98.2 L497.6,97.8 L496.7,97.4 L495.8,97 L494.8,96.6 L493.9,96.2" style="fill:none;stroke:var(--etc);stroke-width:3.2" marker-end="url(#g303f-ab)"/>
<path d="M574,140.1 L573.4,139.7 L572.7,139.3 L572.1,138.8 L571.5,138.4 L570.8,138 L570.2,137.5 L569.6,137.1 L568.9,136.7 L568.3,136.3 L567.7,135.8 L567,135.4 L566.4,135 L565.8,134.6 L565.1,134.2 L564.5,133.7 L563.9,133.3 L563.2,132.9 L562.6,132.5 L561.9,132.1 L561.3,131.7 L560.7,131.2 L560,130.8 L559.4,130.4 L558.7,130 L558.1,129.6 L557.4,129.2 L556.8,128.8 L556.1,128.4 L555.5,128 L554.8,127.6 L554.2,127.2 L553.6,126.8 L552.9,126.4 L552.3,126 L551.6,125.6 L551,125.2 L550.3,124.8 L549.6,124.4 L549,124 L548.3,123.6" style="fill:none;stroke:var(--etc);stroke-width:3.2" marker-end="url(#g303f-ab)"/>
<path d="M362.2,254.4 L367.7,254.7 L373.3,254.9 L378.8,255 L384.3,255 L389.9,254.8 L395.4,254.6 L400.9,254.2 L406.4,253.7 L411.9,253.2 L417.4,252.5 L422.9,251.7 L428.3,250.8 L433.8,249.8 L439.2,248.7 L444.6,247.5 L450,246.2 L455.3,244.8 L460.6,243.4 L465.9,241.8 L471.2,240.1 L476.4,238.3 L481.7,236.5 L486.8,234.6 L492,232.6 L497.1,230.5 L502.2,228.3 L507.2,226 L512.3,223.7 L517.3,221.3 L522.2,218.9 L527.1,216.3 L532,213.7 L536.8,211.1 L541.7,208.3 L546.4,205.5 L551.2,202.7 L555.9,199.8 L560.5,196.8 L565.2,193.8 L569.8,190.7" style="fill:none;stroke:var(--etc);stroke-width:3.2" marker-end="url(#g303f-ab)"/>
<path d="M285.2,238.9 L286.4,239.3 L287.7,239.7 L289,240.2 L290.2,240.6 L291.5,241 L292.8,241.4 L294.1,241.8 L295.3,242.2 L296.6,242.5 L297.9,242.9 L299.2,243.3 L300.5,243.7 L301.7,244 L303,244.4 L304.3,244.7 L305.6,245.1 L306.9,245.4 L308.2,245.8 L309.5,246.1 L310.8,246.4 L312.1,246.7 L313.4,247 L314.7,247.4 L316,247.7 L317.3,248 L318.6,248.2 L319.9,248.5 L321.2,248.8 L322.5,249.1 L323.8,249.3 L325.1,249.6 L326.4,249.9 L327.7,250.1 L329,250.3 L330.4,250.6 L331.7,250.8 L333,251 L334.3,251.3 L335.6,251.5 L336.9,251.7" style="fill:none;stroke:var(--etc);stroke-width:3.2" marker-end="url(#g303f-ab)"/>
<path d="M229.3,214.4 L230.2,214.9 L231.1,215.4 L232,215.9 L232.9,216.4 L233.8,216.8 L234.7,217.3 L235.6,217.8 L236.6,218.2 L237.5,218.7 L238.4,219.1 L239.3,219.6 L240.2,220.1 L241.1,220.5 L242,221 L242.9,221.4 L243.8,221.9 L244.7,222.3 L245.7,222.7 L246.6,223.2 L247.5,223.6 L248.4,224 L249.3,224.5 L250.3,224.9 L251.2,225.3 L252.1,225.8 L253,226.2 L254,226.6 L254.9,227 L255.8,227.4 L256.8,227.8 L257.7,228.2 L258.6,228.6 L259.6,229 L260.5,229.4 L261.4,229.8 L262.4,230.2 L263.3,230.6 L264.2,231 L265.2,231.4 L266.1,231.8" style="fill:none;stroke:var(--etc);stroke-width:3.2" marker-end="url(#g303f-ab)"/>
<path d="M186,187.9 L186.6,188.3 L187.3,188.7 L187.9,189.2 L188.5,189.6 L189.2,190 L189.8,190.5 L190.4,190.9 L191.1,191.3 L191.7,191.7 L192.3,192.2 L193,192.6 L193.6,193 L194.2,193.4 L194.9,193.8 L195.5,194.3 L196.1,194.7 L196.8,195.1 L197.4,195.5 L198.1,195.9 L198.7,196.3 L199.3,196.8 L200,197.2 L200.6,197.6 L201.3,198 L201.9,198.4 L202.6,198.8 L203.2,199.2 L203.9,199.6 L204.5,200 L205.2,200.4 L205.8,200.8 L206.4,201.2 L207.1,201.6 L207.7,202 L208.4,202.4 L209,202.8 L209.7,203.2 L210.4,203.6 L211,204 L211.7,204.4" style="fill:none;stroke:var(--etc);stroke-width:3.2" marker-end="url(#g303f-ab)"/>
<text x="396.8" y="92.5" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<text x="198.6" y="153.7" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<text x="470" y="107.3" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<text x="420.8" y="95.1" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<text x="523.6" y="130.8" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<text x="488.2" y="114.1" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<text x="565.5" y="156.5" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<text x="540.6" y="140.5" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<text x="363.2" y="243.5" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<text x="561.4" y="182.3" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<text x="290" y="228.7" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<text x="339.2" y="240.9" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<text x="236.4" y="205.2" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<text x="271.8" y="221.9" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<text x="194.5" y="179.5" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<text x="219.4" y="195.5" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<text x="30" y="52" style="fill:var(--ink);font-size:12px;font-weight:650">leading strand of the left fork</text>
<line x1="120" y1="58" x2="241.6" y2="103.9" style="stroke:var(--ink-2);stroke-width:1"/>
<text x="740" y="52" text-anchor="end" style="fill:var(--ink);font-size:12px;font-weight:650">lagging strand of the right fork</text>
<text x="740" y="68" text-anchor="end" style="fill:var(--ink-2);font-size:12px">(Okazaki fragments)</text>
<line x1="640" y1="74" x2="527.5" y2="108.5" style="stroke:var(--ink-2);stroke-width:1"/>
<text x="30" y="288" style="fill:var(--ink);font-size:12px;font-weight:650">lagging strand of the left fork</text>
<text x="30" y="304" style="fill:var(--ink-2);font-size:12px">(Okazaki fragments)</text>
<line x1="120" y1="276" x2="232.5" y2="219.5" style="stroke:var(--ink-2);stroke-width:1"/>
<text x="740" y="288" text-anchor="end" style="fill:var(--ink);font-size:12px;font-weight:650">leading strand of the right fork</text>
<line x1="640" y1="276" x2="518.4" y2="224.1" style="stroke:var(--ink-2);stroke-width:1"/>
<text x="78" y="118" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:650">fork moves</text>
<line x1="118" y1="130" x2="42" y2="130" style="stroke:var(--ink);stroke-width:2" marker-end="url(#g303f-ak)"/>
<text x="682" y="118" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:650">fork moves</text>
<line x1="642" y1="130" x2="718" y2="130" style="stroke:var(--ink);stroke-width:2" marker-end="url(#g303f-ak)"/>
<text x="380" y="168" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">origin</text>
<text x="380" y="326" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">Arrowheads = 3′ ends. Every new strand grows 5′ → 3′, antiparallel to its template.</text>
</svg>
<figcaption>Answer to the "Check your understanding" diagram. Each fork has one leading strand (continuous, toward that fork) and one lagging strand (Okazaki fragments, away from that fork). Each template strand is a leading-strand template for one fork and a lagging-strand template for the other.</figcaption>
</figure>
<p>The slide's answer also marks the <strong>most recently synthesized DNA</strong>: always at the forks (the tips of the leading strands and the newest Okazaki fragments). The oldest new DNA is near the origin.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The most common errors on this question: (1) drawing Okazaki fragments that point <em>toward</em> the fork (they must point away from it); (2) making both new strands at a fork grow the same way; (3) forgetting that the left and right forks are mirror images, so the top strand is leading at one fork and lagging at the other; (4) leaving off the 5′ and 3′ labels on the fragments.</p></div>

<h3 data-tier="essential">Proofreading</h3>
<p>The first draft of a new strand isn't perfect. The reading handout: <strong>initial pairing errors may occur as often as 1 per 10,000 base pairs</strong>. At that rate, every human cell division would add hundreds of thousands of mistakes, so replication checks its own work.</p>
<p>Slide 17: <strong>DNA polymerase I and III act as quality control</strong>. They <strong>"proofread" the sequence against the template</strong>, and they can act as <span class="term">exonucleases</span>: they <strong>remove an incorrect nucleotide and replace it with the correct one</strong>. The handout adds that the polymerase checks each new nucleotide against its template and "backs up" to replace incorrect ones.</p>
<figure class="diagram stepper">
<svg viewBox="0 0 720 270" role="img" aria-labelledby="g303g-t g303g-d">
<title id="g303g-t">Proofreading by DNA polymerase</title>
<desc id="g303g-d">A template strand runs 3 prime to 5 prime with bases TACGGATCCAT. Above it, a new strand grows 5 prime to 3 prime inside DNA polymerase III. Step 1: five correctly paired bases (A, T, G, C, C) have been added. Step 2: a C is wrongly added opposite an A; it is tilted and cannot pair. Step 3: the polymerase backs up and, acting as an exonuclease, removes the wrong C from the 3 prime end. Step 4: the correct T is added and copying continues with A and G.</desc>
<defs><marker id="g303g-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--proton)"/></marker></defs>
<g data-step="1-2">
<rect x="267" y="70" width="150" height="166" rx="36" style="fill:var(--etc-soft);fill-opacity:.75;stroke:var(--etc);stroke-width:1.6;stroke-dasharray:5 4"/>
<text x="342" y="58" text-anchor="middle" style="fill:var(--etc);font-size:13px;font-weight:700">DNA pol III</text>
</g>
<g data-step="3">
<rect x="217" y="70" width="150" height="166" rx="36" style="fill:var(--etc-soft);fill-opacity:.75;stroke:var(--etc);stroke-width:1.6;stroke-dasharray:5 4"/>
<text x="292" y="58" text-anchor="middle" style="fill:var(--etc);font-size:13px;font-weight:700">DNA pol III</text>
</g>
<g data-step="4">
<rect x="417" y="70" width="150" height="166" rx="36" style="fill:var(--etc-soft);fill-opacity:.75;stroke:var(--etc);stroke-width:1.6;stroke-dasharray:5 4"/>
<text x="492" y="58" text-anchor="middle" style="fill:var(--etc);font-size:13px;font-weight:700">DNA pol III</text>
</g>
<line x1="52" y1="206" x2="660" y2="206" style="stroke:var(--ink-2);stroke-width:3"/>
<text x="44" y="210" text-anchor="end" style="fill:var(--ink-2);font-size:12px;font-weight:650">3′</text>
<text x="668" y="210" style="fill:var(--ink-2);font-size:12px;font-weight:650">5′</text>
<text x="660" y="230" text-anchor="end" style="fill:var(--ink-2);font-size:12px">template</text>
<rect x="77" y="172" width="30" height="30" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="92" y="192" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text>
<rect x="127" y="172" width="30" height="30" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="142" y="192" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">A</text>
<rect x="177" y="172" width="30" height="30" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:1.4"/>
<text x="192" y="192" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">C</text>
<rect x="227" y="172" width="30" height="30" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="242" y="192" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">G</text>
<rect x="277" y="172" width="30" height="30" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="292" y="192" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">G</text>
<rect x="327" y="172" width="30" height="30" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="342" y="192" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">A</text>
<rect x="377" y="172" width="30" height="30" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="392" y="192" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text>
<rect x="427" y="172" width="30" height="30" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:1.4"/>
<text x="442" y="192" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">C</text>
<rect x="477" y="172" width="30" height="30" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:1.4"/>
<text x="492" y="192" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">C</text>
<rect x="527" y="172" width="30" height="30" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="542" y="192" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">A</text>
<rect x="577" y="172" width="30" height="30" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="592" y="192" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text>
<text x="60" y="108" text-anchor="end" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<text x="52" y="90" style="fill:var(--etc);font-size:12px">new strand</text>
<g data-upto="3">
<line x1="64" y1="104" x2="310" y2="104" style="stroke:var(--etc);stroke-width:3"/>
</g>
<g>
<rect x="77" y="108" width="30" height="30" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="92" y="128" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">A</text>
<line x1="92" y1="142" x2="92" y2="168" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="127" y="108" width="30" height="30" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="142" y="128" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text>
<line x1="142" y1="142" x2="142" y2="168" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="177" y="108" width="30" height="30" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="192" y="128" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">G</text>
<line x1="192" y1="142" x2="192" y2="168" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="227" y="108" width="30" height="30" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:1.4"/>
<text x="242" y="128" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">C</text>
<line x1="242" y1="142" x2="242" y2="168" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="277" y="108" width="30" height="30" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:1.4"/>
<text x="292" y="128" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">C</text>
<line x1="292" y1="142" x2="292" y2="168" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
</g>
<g data-step="1">
<text x="314" y="98" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<text x="318" y="256" text-anchor="middle" style="fill:var(--ink);font-size:12px">Each incoming nucleotide is checked against the template base.</text>
</g>
<g data-step="2">
<line x1="310" y1="104" x2="360" y2="104" style="stroke:var(--etc);stroke-width:3"/>
<g transform="rotate(-14 342 104)"><rect x="327" y="108" width="30" height="30" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:2.2"/><text x="342" y="128" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">C</text></g>
<text x="342" y="162" text-anchor="middle" style="fill:var(--bad);font-size:15px;font-weight:700">✗</text>
<text x="364" y="98" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<text x="330" y="256" text-anchor="middle" style="fill:var(--bad);font-size:12px;font-weight:650">Mismatch: C cannot pair with A, so the fit is wrong.</text>
</g>
<g data-step="3">
<path d="M342,98 Q352,64 386,52" style="fill:none;stroke:var(--proton);stroke-width:1.6" marker-end="url(#g303g-ar)"/>
<rect x="392" y="32" width="30" height="30" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:2.2"/>
<text x="407" y="52" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">C</text>
<text x="434" y="46" style="fill:var(--ink);font-size:12px;font-weight:650">wrong nucleotide</text>
<text x="434" y="62" style="fill:var(--ink-2);font-size:12px">cut off the 3′ end</text>
<text x="314" y="98" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<text x="330" y="256" text-anchor="middle" style="fill:var(--ink);font-size:12px">Pol III backs up and acts as an exonuclease: it removes the wrong nucleotide.</text>
</g>
<g data-step="4">
<line x1="64" y1="104" x2="460" y2="104" style="stroke:var(--etc);stroke-width:3"/>
<rect x="327" y="108" width="30" height="30" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="342" y="128" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text>
<line x1="342" y1="142" x2="342" y2="168" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="377" y="108" width="30" height="30" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="392" y="128" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">A</text>
<line x1="392" y1="142" x2="392" y2="168" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="427" y="108" width="30" height="30" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="442" y="128" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">G</text>
<line x1="442" y1="142" x2="442" y2="168" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<text x="464" y="98" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<text x="360" y="256" text-anchor="middle" style="fill:var(--good);font-size:12px;font-weight:650">The correct base (T) goes in and synthesis continues 5′ → 3′.</text>
</g>
</svg>
<ol class="step-captions">
<li><strong>Adding and checking.</strong> DNA polymerase III adds nucleotides to the 3′ end of the new strand, choosing each by base pairing with the template.</li>
<li><strong>A mistake.</strong> Now and then the wrong nucleotide goes in, here a C opposite an A: about once every 10,000 base pairs. A mismatched pair has the wrong shape.</li>
<li><strong>Proofreading.</strong> The polymerase senses the bad fit, backs up and acts as an <em>exonuclease</em>, cutting the wrong nucleotide off the 3′ end.</li>
<li><strong>Back on track.</strong> The correct nucleotide (T) is added and synthesis continues. Proofreading plus later mismatch repair cut the final error rate to about 1 in 10<sup>9</sup> (one in a billion) base pairs.</li>
</ol>
<figcaption>Proofreading: DNA polymerase checks each new base pair and removes mistakes from the 3′ end.</figcaption>
</figure>
<p>How does the polymerase "know"? A correct A–T or G–C pair has exactly the right shape for the active site. A mismatch (such as C opposite A) fits badly, which stalls the polymerase; it shifts the 3′ end into a second site that cuts off the wrong nucleotide, then carries on.</p>
<p data-tier="likely">A <strong>nuclease</strong> is any enzyme that cuts nucleic acids. An <strong>exo</strong>nuclease removes nucleotides one at a time from the <em>end</em> of a strand (<em>exo</em> = outside); an <strong>endo</strong>nuclease cuts <em>within</em> a strand (<em>endo</em> = inside). Proofreading is a <strong>3′ → 5′ exonuclease</strong> activity: it nibbles backward from the 3′ end, the end that is growing.</p>
<h4>Mismatch repair: a second check</h4>
<p>A few errors slip past proofreading. The handout notes that in eukaryotic cells, <strong>several proteins in addition to DNA polymerase are involved in mismatch repair</strong>. Shortly after the fork has passed, these proteins scan the new double helix for mismatched pairs. When one is found, a stretch of the <em>new</em> strand containing the wrong base is cut out, DNA polymerase rebuilds it using the old strand as the template, and DNA ligase seals the backbone.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Stage</th><th>Errors per base pair (roughly)</th></tr></thead>
<tbody>
<tr><td>Base pairing alone (handout)</td><td>1 in 10,000 (10<sup>4</sup>)</td></tr>
<tr data-tier="likely"><td>After proofreading by DNA polymerase</td><td>about 1 in 10 million (10<sup>7</sup>)</td></tr>
<tr><td>After mismatch repair as well</td><td>about <strong>1 in 1 billion (10<sup>9</sup>)</strong></td></tr>
</tbody></table></div>
<p data-tier="likely">At 1 in 10<sup>9</sup>, a human cell gets only a handful of new errors per division. Errors that survive both checks become permanent <strong>mutations</strong> (<a href="#/lesson/3.06">lesson 3.06</a>).</p>
<p data-tier="extra">Mismatch repair must fix the <em>new</em> strand, not the old one. In <em>E. coli</em> the parent strand carries methyl groups that the new strand lacks for a few minutes; eukaryotes recognize the new strand by its remaining nicks. People who inherit a broken mismatch-repair gene (Lynch syndrome) have a much higher risk of colon cancer.</p>
<div class="callout key"><p class="callout-title">On the test</p><ul><li>DNA pol I and pol III <strong>proofread</strong>: they check each new base against the template.</li><li>They act as <strong>exonucleases</strong>: they remove the wrong nucleotide and replace it with the correct one.</li><li>Error rate: about 1 in 10,000 before proofreading; about 1 in 10<sup>9</sup> after proofreading and mismatch repair.</li></ul></div>

<h3 data-tier="essential">Repairing damaged DNA</h3>
<p>Proofreading fixes copying mistakes, but DNA can also be damaged at any time. The handout lists the causes: <strong>reactive chemicals, radioactive emissions, X-rays and ultraviolet (UV) light</strong>. Many repair enzymes correct these changes; if they don't, the changes become mutations.</p>
<p>The handout's main example is <span class="term">excision repair</span>: <strong>the damaged stretch of the strand is cut out by a nuclease, and the gap is correctly filled by DNA polymerase and ligase</strong>. In skin cells, excision repair frequently corrects <span class="term">thymine dimers</span> caused by the UV rays of sunlight.</p>
<p>A thymine dimer forms when UV energy bonds two <strong>neighbouring thymines on the same strand</strong> covalently to each other. They can no longer pair with their adenines, the helix kinks, and polymerases cannot read past it. Repair works because DNA is double-stranded: the undamaged strand still holds the correct sequence and serves as the template.</p>
<figure class="diagram stepper">
<svg viewBox="0 0 720 286" role="img" aria-labelledby="g303h-t g303h-d">
<title id="g303h-t">Excision repair of a thymine dimer</title>
<desc id="g303h-d">A short stretch of double-stranded DNA. The top strand reads 5 prime GCATTGCAATC 3 prime; the bottom strand is complementary. Step 1: UV light strikes two adjacent thymines on the top strand. Step 2: they bond to each other, forming a thymine dimer that kinks the strand and breaks their pairing with adenine. Step 3: a nuclease cuts the top strand on both sides and removes the damaged stretch ATTG. Step 4: DNA polymerase fills the gap with new nucleotides, using the bottom strand as a template. Step 5: DNA ligase seals the remaining nick, and the original sequence is restored.</desc>
<defs><marker id="g303h-au" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--krebs)"/></marker></defs>
<line x1="60" y1="198" x2="640" y2="198" style="stroke:var(--ink-2);stroke-width:3"/>
<text x="52" y="202" text-anchor="end" style="fill:var(--ink-2);font-size:12px;font-weight:650">3′</text>
<text x="648" y="202" style="fill:var(--ink-2);font-size:12px;font-weight:650">5′</text>
<rect x="86" y="166" width="28" height="28" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:1.4"/>
<text x="100" y="185" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">C</text>
<rect x="136" y="166" width="28" height="28" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="150" y="185" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">G</text>
<rect x="186" y="166" width="28" height="28" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="200" y="185" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text>
<rect x="236" y="166" width="28" height="28" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="250" y="185" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">A</text>
<rect x="286" y="166" width="28" height="28" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="300" y="185" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">A</text>
<rect x="336" y="166" width="28" height="28" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:1.4"/>
<text x="350" y="185" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">C</text>
<rect x="386" y="166" width="28" height="28" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="400" y="185" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">G</text>
<rect x="436" y="166" width="28" height="28" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="450" y="185" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text>
<rect x="486" y="166" width="28" height="28" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="500" y="185" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text>
<rect x="536" y="166" width="28" height="28" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="550" y="185" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">A</text>
<rect x="586" y="166" width="28" height="28" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="600" y="185" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">G</text>
<text x="52" y="116" text-anchor="end" style="fill:var(--ink-2);font-size:12px;font-weight:650">5′</text>
<text x="648" y="116" style="fill:var(--ink-2);font-size:12px;font-weight:650">3′</text>
<g data-step="4">
<ellipse cx="357" cy="116" rx="38" ry="30" style="fill:var(--proton-soft);fill-opacity:.75;stroke:var(--proton);stroke-width:1.6;stroke-dasharray:5 4"/>
<text x="357" y="76" text-anchor="middle" style="fill:var(--proton);font-size:12px;font-weight:700">DNA polymerase</text>
<text x="360" y="256" text-anchor="middle" style="fill:var(--ink);font-size:12px">DNA polymerase rebuilds the stretch, using the undamaged strand as its template.</text>
</g>
<rect x="86" y="116" width="28" height="28" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="100" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">G</text>
<line x1="100" y1="148" x2="100" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="136" y="116" width="28" height="28" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:1.4"/>
<text x="150" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">C</text>
<line x1="150" y1="148" x2="150" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="386" y="116" width="28" height="28" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:1.4"/>
<text x="400" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">C</text>
<line x1="400" y1="148" x2="400" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="436" y="116" width="28" height="28" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="450" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">A</text>
<line x1="450" y1="148" x2="450" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="486" y="116" width="28" height="28" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="500" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">A</text>
<line x1="500" y1="148" x2="500" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="536" y="116" width="28" height="28" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="550" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text>
<line x1="550" y1="148" x2="550" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="586" y="116" width="28" height="28" rx="2" style="fill:var(--nt-c);fill-opacity:.22;stroke:var(--nt-c);stroke-width:1.4"/>
<text x="600" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">C</text>
<line x1="600" y1="148" x2="600" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<line x1="60" y1="112" x2="175" y2="112" style="stroke:var(--ink-2);stroke-width:3"/>
<line x1="375" y1="112" x2="640" y2="112" style="stroke:var(--ink-2);stroke-width:3"/>
<g data-upto="2">
<line x1="175" y1="112" x2="375" y2="112" style="stroke:var(--ink-2);stroke-width:3"/>
<rect x="186" y="116" width="28" height="28" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="200" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">A</text>
<line x1="200" y1="148" x2="200" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="336" y="116" width="28" height="28" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="350" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">G</text>
<line x1="350" y1="148" x2="350" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
</g>
<g data-step="1">
<rect x="236" y="116" width="28" height="28" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="250" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text>
<line x1="250" y1="148" x2="250" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="286" y="116" width="28" height="28" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="300" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text>
<line x1="300" y1="148" x2="300" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
</g>
<g data-step="2">
<g transform="rotate(12 250 112)"><rect x="236" y="116" width="28" height="28" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:2"/><text x="250" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text></g>
<g transform="rotate(-12 300 112)"><rect x="286" y="116" width="28" height="28" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:2"/><text x="300" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text></g>
<line x1="268" y1="126" x2="282" y2="126" style="stroke:var(--proton);stroke-width:3"/>
<line x1="270" y1="138" x2="280" y2="138" style="stroke:var(--proton);stroke-width:3"/>
<text x="360" y="256" text-anchor="middle" style="fill:var(--proton);font-size:12px;font-weight:650">Thymine dimer: two neighbouring Ts bond to each other instead of to their A partners.</text>
</g>
<g data-step="1-2">
<path d="M284,22 L285.3,26.7 L284.9,30.3 L282,32.5 L277.3,33.7 L272.7,34.8 L269.8,37 L269.3,40.6 L270.7,45.3 L272,50 L271.6,53.7 L268.7,55.9 L264,57 L259.3,58.1 L256.4,60.3 L256,64 L257.3,68.7 L258.7,73.4 L258.2,77 L255.3,79.2 L250.7,80.3 L246,81.5 L243.1,83.7 L242.7,87.3 L244,92" style="fill:none;stroke:var(--krebs);stroke-width:2" marker-end="url(#g303h-au)"/>
<path d="M346,22 L347.3,26.7 L346.9,30.3 L344,32.5 L339.3,33.7 L334.7,34.8 L331.8,37 L331.3,40.6 L332.7,45.3 L334,50 L333.6,53.7 L330.7,55.9 L326,57 L321.3,58.1 L318.4,60.3 L318,64 L319.3,68.7 L320.7,73.4 L320.2,77 L317.3,79.2 L312.7,80.3 L308,81.5 L305.1,83.7 L304.7,87.3 L306,92" style="fill:none;stroke:var(--krebs);stroke-width:2" marker-end="url(#g303h-au)"/>
<text x="364" y="34" style="fill:var(--krebs);font-size:13px;font-weight:700">UV light</text>
</g>
<g data-step="1">
<text x="360" y="256" text-anchor="middle" style="fill:var(--ink);font-size:12px">Ultraviolet light in sunlight strikes two thymines that sit side by side.</text>
</g>
<g data-step="3">
<line x1="175" y1="100" x2="175" y2="124" style="stroke:var(--bad);stroke-width:2.4"/>
<line x1="375" y1="100" x2="375" y2="124" style="stroke:var(--bad);stroke-width:2.4"/>
<text x="175" y="94" text-anchor="middle" style="fill:var(--bad);font-size:12px;font-weight:700">cut</text>
<text x="375" y="94" text-anchor="middle" style="fill:var(--bad);font-size:12px;font-weight:700">cut</text>
</g>
<g data-step="3">
<line x1="181" y1="46" x2="369" y2="46" style="stroke:var(--ink-2);stroke-width:3"/>
<rect x="186" y="50" width="28" height="28" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="200" y="69" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">A</text>
<rect x="336" y="50" width="28" height="28" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="350" y="69" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">G</text>
<g transform="rotate(12 250 46)"><rect x="236" y="50" width="28" height="28" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:2"/><text x="250" y="69" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text></g>
<g transform="rotate(-12 300 46)"><rect x="286" y="50" width="28" height="28" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:2"/><text x="300" y="69" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text></g>
<line x1="268" y1="60" x2="282" y2="60" style="stroke:var(--proton);stroke-width:3"/>
<line x1="270" y1="72" x2="280" y2="72" style="stroke:var(--proton);stroke-width:3"/>
<text x="399" y="58" style="fill:var(--ink);font-size:12px;font-weight:650">damaged stretch</text>
<text x="399" y="74" style="fill:var(--ink-2);font-size:12px">removed by a nuclease</text>
<text x="360" y="256" text-anchor="middle" style="fill:var(--ink);font-size:12px">A nuclease cuts the damaged strand on both sides of the dimer and removes that stretch.</text>
</g>
<g data-from="4">
<line x1="175" y1="112" x2="370" y2="112" style="stroke:var(--etc);stroke-width:3"/>
<rect x="186" y="116" width="28" height="28" rx="2" style="fill:var(--nt-a);fill-opacity:.22;stroke:var(--nt-a);stroke-width:1.4"/>
<text x="200" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">A</text>
<line x1="200" y1="148" x2="200" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="236" y="116" width="28" height="28" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="250" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text>
<line x1="250" y1="148" x2="250" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="286" y="116" width="28" height="28" rx="2" style="fill:var(--nt-t);fill-opacity:.22;stroke:var(--nt-t);stroke-width:1.4"/>
<text x="300" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">T</text>
<line x1="300" y1="148" x2="300" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
<rect x="336" y="116" width="28" height="28" rx="2" style="fill:var(--nt-g);fill-opacity:.22;stroke:var(--nt-g);stroke-width:1.4"/>
<text x="350" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">G</text>
<line x1="350" y1="148" x2="350" y2="162" style="stroke:var(--ink-2);stroke-width:1.4;stroke-dasharray:3 3"/>
</g>
<g data-from="5">
<line x1="369" y1="112" x2="375" y2="112" style="stroke:var(--etc);stroke-width:3"/>
</g>
<g data-step="5">
<ellipse cx="375" cy="112" rx="18" ry="11" style="fill:var(--good-soft);stroke:var(--good);stroke-width:1.6"/>
<text x="375" y="90" text-anchor="middle" style="fill:var(--good);font-size:12px;font-weight:700">DNA ligase</text>
<text x="360" y="256" text-anchor="middle" style="fill:var(--good);font-size:12px;font-weight:650">DNA ligase seals the last gap in the backbone. The original sequence is restored.</text>
</g>
</svg>
<ol class="step-captions">
<li><strong>UV damage.</strong> UV rays in sunlight hit DNA in skin cells, usually at two thymines side by side on one strand.</li>
<li><strong>A thymine dimer forms.</strong> The two Ts become covalently bonded to <em>each other</em> instead of hydrogen-bonding to their A partners. The dimer kinks the helix, and polymerases cannot read past it.</li>
<li><strong>Cut it out.</strong> Repair enzymes recognize the distortion, and a <em>nuclease</em> cuts the strand on both sides of the dimer, removing the damaged stretch.</li>
<li><strong>Fill the gap.</strong> DNA polymerase fills the gap from the free 3′-OH on its left, using the intact strand as the template (5′ → 3′, as always).</li>
<li><strong>Seal it.</strong> DNA ligase forms the last phosphodiester bond. This is <em>excision repair</em>: cut out, fill in, seal. Mismatch repair uses the same three moves for wrongly paired bases.</li>
</ol>
<figcaption>Excision repair, the "cut out, fill in, seal" system that fixes UV damage in skin cells.</figcaption>
</figure>
<div class="table-wrap"><table class="data">
<thead><tr><th>System</th><th>Fixes</th><th>When</th><th>How</th></tr></thead>
<tbody>
<tr><td>Proofreading</td><td>Wrong base just added</td><td>During replication</td><td>DNA polymerase backs up; exonuclease removes the base; correct one added</td></tr>
<tr><td>Mismatch repair</td><td>Mismatches that escaped proofreading</td><td>Just after replication</td><td>Proteins find the mismatch; stretch of new strand removed; polymerase refills; ligase seals</td></tr>
<tr><td>Excision repair</td><td>Damaged bases (e.g. thymine dimers from UV)</td><td>Any time</td><td>Nuclease cuts out the damaged stretch; DNA polymerase fills the gap; ligase seals</td></tr>
</tbody></table></div>
<p data-tier="extra">People with the rare inherited disorder <strong>xeroderma pigmentosum</strong> lack an excision-repair enzyme. They cannot remove thymine dimers, so brief sun exposure causes severe burns and skin cancers often appear in childhood: evidence that this system runs constantly in all of us.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Every repair system follows the same three moves: <strong>cut out, fill in, seal</strong>. A nuclease cuts, DNA polymerase fills (5′ → 3′, using the good strand as the template), and ligase seals. Those are the same enzymes used to replace primers during replication.</p></div>

<h3 data-tier="likely">The end-replication problem</h3>
<p>Linear chromosomes have a weakness that circular bacterial chromosomes don't: they have ends. At each end of a chromosome, one new strand is the lagging strand, and its last Okazaki fragment begins with an RNA primer sitting right at the tip of the template. When that primer is removed, DNA polymerase I cannot replace it, because a polymerase can only add to a 3′-OH, and there is no DNA beyond the end of the chromosome to provide one. The new strand ends up slightly <strong>shorter</strong> than its template, and every round of replication shortens the chromosome ends a little more (roughly 50–200 base pairs per division in human cells).</p>
<figure class="diagram">
<svg viewBox="0 0 760 318" role="img" aria-labelledby="g303i-t g303i-d">
<title id="g303i-t">The end-replication problem</title>
<desc id="g303i-d">Three rows show the right-hand end of a linear chromosome. The template strand runs 5 prime to 3 prime toward the end; the new lagging strand under it runs the opposite way. Row 1: the last Okazaki fragment is started by an RNA primer at the very end of the template. Row 2: DNA polymerase I replaces all the other primers with DNA, but the last primer leaves a gap, because there is no DNA beyond the end to provide a 3 prime OH for the polymerase to extend. Row 3: the new strand ends short of its template, leaving a single-stranded 3 prime overhang, so each round of replication shortens the chromosome end a little.</desc>
<defs><marker id="g303i-ab" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--etc)"/></marker></defs>
<line x1="682" y1="20" x2="682" y2="300" style="stroke:var(--ink-2);stroke-width:1.2;stroke-dasharray:4 4"/>
<text x="680" y="12" text-anchor="middle" style="fill:var(--ink-2);font-size:12px;font-weight:650">end of chromosome</text>
<text x="70" y="30" style="fill:var(--ink);font-size:13px;font-weight:700">1. Last Okazaki fragment: its primer sits at the very end of the template</text>
<line x1="70" y1="52" x2="680" y2="52" style="stroke:var(--ink-2);stroke-width:3"/>
<text x="62" y="56" text-anchor="end" style="fill:var(--ink-2);font-size:12px;font-weight:650">5′</text>
<text x="690" y="56" style="fill:var(--ink-2);font-size:12px;font-weight:650">3′</text>
<text x="62" y="78" text-anchor="end" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<line x1="72" y1="63" x2="678" y2="63" style="stroke:var(--line);stroke-width:10;stroke-dasharray:2 7"/>
<line x1="296" y1="74" x2="70" y2="74" style="stroke:var(--etc);stroke-width:4.5"/>
<line x1="430" y1="74" x2="304" y2="74" style="stroke:var(--etc);stroke-width:4.5" marker-end="url(#g303i-ab)"/>
<line x1="430" y1="74" x2="466" y2="74" style="stroke:var(--krebs);stroke-width:6"/>
<line x1="642" y1="74" x2="474" y2="74" style="stroke:var(--etc);stroke-width:4.5" marker-end="url(#g303i-ab)"/>
<line x1="642" y1="74" x2="680" y2="74" style="stroke:var(--krebs);stroke-width:6"/>
<text x="690" y="78" style="fill:var(--krebs);font-size:12px;font-weight:650">5′</text>
<text x="676" y="96" text-anchor="end" style="fill:var(--krebs);font-size:12px;font-weight:650">last RNA primer</text>
<text x="70" y="126" style="fill:var(--ink);font-size:13px;font-weight:700">2. Pol I replaces the other primers, but the last one leaves a gap</text>
<line x1="70" y1="148" x2="680" y2="148" style="stroke:var(--ink-2);stroke-width:3"/>
<text x="62" y="152" text-anchor="end" style="fill:var(--ink-2);font-size:12px;font-weight:650">5′</text>
<text x="690" y="152" style="fill:var(--ink-2);font-size:12px;font-weight:650">3′</text>
<text x="62" y="174" text-anchor="end" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<line x1="72" y1="159" x2="640" y2="159" style="stroke:var(--line);stroke-width:10;stroke-dasharray:2 7"/>
<line x1="642" y1="170" x2="70" y2="170" style="stroke:var(--etc);stroke-width:4.5"/>
<text x="642" y="188" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<rect x="645" y="164" width="34" height="12" style="fill:none;stroke:var(--krebs);stroke-width:1.4;stroke-dasharray:3 3"/>
<text x="620" y="204" text-anchor="end" style="fill:var(--bad);font-size:12px;font-weight:650">gap: no DNA beyond the end to give pol I a 3′-OH to build from</text>
<text x="70" y="222" style="fill:var(--ink);font-size:13px;font-weight:700">3. Next round: the short strand is used as a template</text>
<line x1="72" y1="255" x2="640" y2="255" style="stroke:var(--line);stroke-width:10;stroke-dasharray:2 7"/>
<line x1="70" y1="244" x2="642" y2="244" style="stroke:var(--ink-2);stroke-width:3"/>
<text x="62" y="248" text-anchor="end" style="fill:var(--ink-2);font-size:12px;font-weight:650">3′</text>
<text x="642" y="236" text-anchor="middle" style="fill:var(--ink-2);font-size:12px;font-weight:650">5′</text>
<line x1="70" y1="266" x2="634" y2="266" style="stroke:var(--etc);stroke-width:4.5" marker-end="url(#g303i-ab)"/>
<text x="62" y="270" text-anchor="end" style="fill:var(--etc);font-size:12px;font-weight:650">5′</text>
<text x="642" y="284" text-anchor="middle" style="fill:var(--etc);font-size:12px;font-weight:650">3′</text>
<rect x="650" y="236" width="30" height="38" style="fill:none;stroke:var(--bad);stroke-width:1.4;stroke-dasharray:3 3"/>
<text x="690" y="259" style="fill:var(--bad);font-size:12px;font-weight:700">lost</text>
<text x="620" y="300" text-anchor="end" style="fill:var(--ink);font-size:12px;font-weight:650">Copied from the short strand, this daughter molecule has lost the end piece for good.</text>
</svg>
<figcaption>Why linear chromosomes get shorter: the very last primer on the lagging strand cannot be replaced with DNA. Telomeres (5′-TTAGGG-3′ repeats) are the non-coding buffer that is lost instead of genes.</figcaption>
</figure>
<p>This is why chromosomes end in <span class="term">telomeres</span> (<a href="#/lesson/3.02">lesson 3.02</a>): long runs of the non-coding 6-base-pair repeat <span class="seq">5′-TTAGGG-3′</span>, repeated hundreds to thousands of times and protected by a protein cap. Telomeres are a buffer. Each division trims a little telomere instead of a gene. When telomeres get too short, the cell stops dividing (senescence) or destroys itself (apoptosis), which limits how many times most body cells can divide.</p>
<p data-tier="extra"><strong>Telomerase</strong> solves the problem in cells that must keep dividing (stem cells, cells that make sperm and eggs). It carries its own RNA template and adds new TTAGGG repeats to the chromosome's 3′ end. Most body cells switch it off; most cancer cells switch it back on, which helps them divide without limit.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Know the cause (the last primer on the lagging strand can't be replaced, because there is no 3′-OH beyond the end), the result (chromosomes shorten with each division) and the protection (non-coding telomere repeats, 5′-TTAGGG-3′). Bacteria avoid the problem completely because their chromosome is a circle with no ends.</p></div>

<h3 data-tier="likely">Prokaryotes vs eukaryotes</h3>
<p>The enzymes and logic are the same in all cells; the differences come from the size and shape of the chromosomes.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Feature</th><th>Prokaryotes (e.g. <em>E. coli</em>)</th><th>Eukaryotes (e.g. human)</th></tr></thead>
<tbody>
<tr><td>Where</td><td>Cytoplasm (nucleoid region)</td><td>Nucleus</td></tr>
<tr><td>When</td><td>Before binary fission</td><td>S phase of interphase</td></tr>
<tr><td>Chromosome shape</td><td>One circular chromosome</td><td>Many linear chromosomes (46 in a human body cell)</td></tr>
<tr><td>Genome size</td><td>About 4.6 million bp</td><td>About 3.2 billion bp per set (6.4 billion per body cell)</td></tr>
<tr><td>Origins</td><td>One</td><td>Thousands per chromosome</td></tr>
<tr data-tier="likely"><td>Fork speed</td><td>About 1000 nucleotides per second</td><td>About 50 nucleotides per second</td></tr>
<tr data-tier="likely"><td>Okazaki fragments</td><td>1000–2000 nucleotides</td><td>100–200 nucleotides</td></tr>
<tr data-tier="likely"><td>DNA packaging</td><td>Little protein, no nucleosomes</td><td>Wrapped around histones; nucleosomes are moved and rebuilt behind the fork</td></tr>
<tr data-tier="extra"><td>Main polymerases</td><td>Pol III builds; pol I replaces primers</td><td>Different polymerases do the same jobs: pol α (with primase) starts each strand; pol ε and pol δ build the leading and lagging strands</td></tr>
<tr><td>Chromosome ends</td><td>None, so no end-replication problem</td><td>Telomeres shorten each division; telomerase in some cells</td></tr>
</tbody></table></div>
<p data-tier="likely">The slides use the bacterial names (DNA polymerase I and III) because replication was first worked out in <em>E. coli</em>. Use them for both kinds of cell unless a question asks about eukaryotic polymerases.</p>

<h3 data-tier="essential">All seven enzymes, in order</h3>
<p>Every protein, its job and where it works, in the order of the class card sort.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>#</th><th>Enzyme or protein</th><th>Job</th><th>Where it works</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>Helicase</strong></td><td>Unwinds and unzips the double helix by breaking the hydrogen bonds between base pairs</td><td>At the replication fork</td></tr>
<tr><td>2</td><td><strong>Single-strand binding proteins (SSBs)</strong></td><td>Attach to the separated strands and stop them re-annealing (H-bonding back together)</td><td>On the exposed single strands behind helicase</td></tr>
<tr><td>3</td><td><strong>Topoisomerase</strong> (gyrase in bacteria)</td><td>Relieves the twisting tension (supercoiling) by cutting the backbone, letting it untwist, and resealing it</td><td>On the double helix ahead of the fork</td></tr>
<tr><td>4</td><td><strong>Primase</strong></td><td>Makes a short RNA primer (about 10 nucleotides) that provides the free 3′-OH starting point</td><td>Once on the leading template; again and again on the lagging template</td></tr>
<tr><td>5</td><td><strong>DNA polymerase III</strong></td><td>Adds complementary DNA nucleotides to the 3′ end of the growing strand (5′ → 3′); proofreads</td><td>Leading strand (continuous) and each Okazaki fragment</td></tr>
<tr><td>6</td><td><strong>DNA polymerase I</strong></td><td>Removes the RNA primers and replaces them with DNA nucleotides; proofreads</td><td>At every primer, mainly on the lagging strand</td></tr>
<tr><td>7</td><td><strong>DNA ligase</strong></td><td>Seals the nicks in the sugar-phosphate backbone by forming phosphodiester bonds</td><td>Between Okazaki fragments (and wherever a primer was replaced)</td></tr>
</tbody></table></div>
<div class="order-task"><p class="order-q">Put the replication enzymes in the order of the class card sort.</p><ol>
<li>Helicase unwinds and unzips the DNA double helix.</li>
<li>SSBs attach to the separated strands to prevent re-annealing.</li>
<li>Topoisomerase relieves the twisting tension ahead of the replication fork.</li>
<li>Primase makes a short RNA primer to provide a starting point.</li>
<li>DNA polymerase III adds complementary DNA nucleotides to the growing strand.</li>
<li>DNA polymerase I removes the RNA primers and replaces them with DNA nucleotides.</li>
<li>DNA ligase seals the nicks in the sugar-phosphate backbone.</li>
</ol></div>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The card sort puts topoisomerase third, after helicase and SSBs. That is a good order for <em>learning</em>, but not a strict sequence: topoisomerase works <strong>ahead of the fork at the same time as helicase</strong>, because tension builds the moment unwinding starts. In fact all seven proteins work at once at a moving fork; the order describes what happens to any <em>one</em> stretch of DNA as the fork passes. For the card sort, use the class order.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>"Happy Snakes Twist; Pythons Thrive In Lakes."</strong> Helicase, SSBs, Topoisomerase (it fixes the <em>twist</em>), Primase, pol <strong>Three</strong>, pol <strong>I</strong>, Ligase. Notice the polymerases count down: III builds first, I cleans up after.</p></div>

<h3 data-tier="essential">Check your understanding</h3>
<p>Questions 1–5 are the practice questions from the end of the slides, and question 6 is the "Check your understanding" bubble diagram. Try each one before opening the answer.</p>
<details class="check"><summary>1. Outline the purpose of the following enzymes: topoisomerase, DNA helicase, DNA polymerase I, DNA polymerase III, DNA ligase, RNA primase.</summary><div class="ans"><p><strong>Class key:</strong></p><ul><li><strong>Topoisomerase</strong> relieves the twisting tension (supercoiling) that builds up ahead of the fork as the helix unwinds, by temporarily cutting the DNA backbone, letting it untwist, and sealing it again.</li><li><strong>DNA helicase</strong> "unzips" the double helix by breaking the hydrogen bonds between complementary base pairs, exposing the single strands as templates.</li><li><strong>RNA primase</strong> lays down a short RNA primer that provides a free 3′-OH, because DNA polymerases cannot start a strand from scratch.</li><li><strong>DNA polymerase III</strong> is the main builder: starting at the primer, it adds complementary DNA nucleotides to the growing 3′ end of the new strand.</li><li><strong>DNA polymerase I</strong> removes the RNA primers and replaces them with DNA nucleotides; it also proofreads.</li><li><strong>DNA ligase</strong> seals the nicks in the sugar-phosphate backbone between fragments by forming phosphodiester bonds ("molecular glue").</li></ul></div></details>
<details class="check"><summary>2. Compare the mechanisms by which the leading and lagging strands are replicated. Explain why the two mechanisms exist.</summary><div class="ans"><p><strong>Leading strand:</strong> made <strong>continuously</strong>, in the same direction the fork is opening, from a <strong>single</strong> RNA primer. DNA polymerase III follows helicase, building 5′ → 3′.</p><p><strong>Lagging strand:</strong> made <strong>discontinuously</strong> in short <strong>Okazaki fragments</strong>, built <strong>away from</strong> the fork. Primase must lay a new primer for every fragment as more template is exposed; DNA polymerase I later replaces the primers and DNA ligase joins the fragments.</p><p><strong>Why:</strong> the two template strands are <strong>antiparallel</strong>, and DNA polymerase can only add nucleotides to a free 3′ end (build 5′ → 3′). On one template, that direction points into the fork, so synthesis can follow the helicase continuously. On the other, it points away from the fork, so synthesis has to be done backwards in chunks.</p></div></details>
<details class="check"><summary>3. Explain why it is necessary for eukaryotic DNA to have multiple replication origin sites.</summary><div class="ans"><p><strong>Class key:</strong> eukaryotic genomes are huge, linear molecules (billions of base pairs) and the polymerases are relatively slow (about 50 nucleotides per second). With one origin, as in bacteria, a single chromosome would take weeks or months (human chromosome 1: about a month). Thousands of origins let thousands of bubbles work at once; they grow and merge, and the genome is copied in a few hours.</p></div></details>
<details class="check"><summary>4. Explain why both parental DNA strands may be used to serve as a template for replication. How does DNA's structure allow for this?</summary><div class="ans"><p>Both strands are used so that the cell ends up with <strong>two identical double helices</strong>, one for each daughter cell. This works because of <strong>complementary base pairing</strong>: A always pairs with T and C always pairs with G, so each strand contains all the information needed to rebuild its partner. Whichever strand you start from, the base-pairing rules fix the exact sequence of the new strand. The strands are held together only by hydrogen bonds, so they separate without breaking.</p></div></details>
<details class="check"><summary>5. Meselson and Stahl's experiment indicated that DNA replicates semiconservatively. What percentage of DNA double helices would contain one of the original parent strands after four generations?</summary><div class="ans"><p><strong>12.5%.</strong> The two original strands are never destroyed, so after any number of generations they are found in exactly two helices. The number of helices doubles every generation: 2, 4, 8, 16. After four generations, 2 of 16 helices contain an original strand: 2 ÷ 16 × 100 = 12.5%.</p></div></details>
<details class="check"><summary>6. Complete the replication bubble by drawing all leading and lagging strands. Indicate all 5′ and 3′ ends. (The top parent strand is 5′ on the left.)</summary><div class="ans"><p>The top parent strand runs 5′ → 3′ left to right, so the bottom one runs 3′ → 5′. New DNA on the top template grows right to left; on the bottom template it grows left to right.</p><ul><li><strong>Left fork:</strong> the top new strand is one continuous arrow pointing left toward the fork (leading). The bottom new strand is a row of short arrows pointing right, away from the fork (lagging, Okazaki fragments).</li><li><strong>Right fork:</strong> the bottom new strand is one continuous arrow pointing right toward the fork (leading). The top new strand is a row of short arrows pointing left, away from the fork (lagging).</li><li>Every piece has 5′ at its tail and 3′ at its arrowhead. The newest DNA is at the forks.</li></ul><p>Compare your drawing with the "Answer" figure in <strong>Drawing a whole bubble</strong>, above.</p></div></details>
<details class="check" data-tier="likely"><summary>7. A mutant bacterium makes a DNA ligase that does not work. Predict what its newly replicated DNA would look like.</summary><div class="ans"><p>The <strong>leading strands</strong> would be almost normal: long and continuous (apart from a nick where the leading strand meets the DNA from the neighbouring fork). The <strong>lagging strands</strong> would stay as separate Okazaki fragments, with their primers replaced by DNA but with an unsealed <strong>nick</strong> between each pair of fragments. Separated into single strands, the DNA would show many short pieces 1000–2000 nucleotides long: this is how Okazaki fragments were first detected.</p></div></details>
<details class="check" data-tier="likely"><summary>8. Why must every new strand begin with an RNA primer, and why is the primer later removed?</summary><div class="ans"><p>DNA polymerase can only add nucleotides to the free 3′-OH of an existing chain; it cannot start a new chain. Primase can start from nothing, so it makes a short RNA primer whose 3′-OH gives DNA polymerase III a starting point. The primer is RNA (ribose, uracil), not DNA, so it must be removed: DNA polymerase I takes it out and replaces it with DNA, and ligase seals the nick. Otherwise the finished chromosome would contain patches of RNA.</p></div></details>
<details class="check" data-tier="likely"><summary>9. A mutation destroys the 3′ → 5′ exonuclease activity of DNA polymerase III, but the enzyme still builds DNA. Predict the effect on the cell.</summary><div class="ans"><p>Without its exonuclease activity, pol III can no longer <strong>proofread</strong>: when it adds a wrong nucleotide it cannot back up and remove it. Replication would continue at about the same speed, but the error rate would rise sharply. Mismatch repair would catch some errors, but many more would become permanent <strong>mutations</strong> (a "mutator" strain).</p></div></details>
<details class="check" data-tier="likely"><summary>10. Why do human chromosomes get shorter with each division, but bacterial chromosomes do not?</summary><div class="ans"><p>At the end of a linear chromosome, the last RNA primer on the lagging strand cannot be replaced with DNA: DNA polymerase needs a 3′-OH to build from, and there is no DNA beyond the end to supply one. So each new lagging strand is a little shorter than its template, and the ends shrink every division; non-coding telomere repeats (5′-TTAGGG-3′) are lost instead of genes. A bacterial chromosome is a circle with no ends, so every primer has DNA next to it that pol I can extend, and nothing is lost.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
<li>Replication happens in the <strong>S phase of interphase</strong>, before mitosis; afterwards each chromosome is two identical sister chromatids.</li>
<li><strong>Semiconservative</strong>: each strand is a template; each new helix = 1 parent strand + 1 new strand (Meselson and Stahl ruled out conservative and dispersive). After n generations, 2 of 2<sup>n</sup> helices hold an original strand (4 generations: <strong>12.5%</strong>).</li>
<li>Both strands can be templates because of <strong>complementary base pairing</strong> (A–T, G–C).</li>
<li>Replication starts at an <strong>origin of replication</strong>. <strong>Helicase</strong> breaks H-bonds and unwinds, forming a <strong>replication bubble</strong>. <strong>SSBs</strong> stop the strands re-pairing. <strong>Topoisomerase</strong> (gyrase in bacteria) cuts and rejoins the backbone ahead of the fork to relieve supercoiling.</li>
<li>Replication is <strong>bidirectional</strong>: each bubble has two Y-shaped <strong>replication forks</strong> moving apart.</li>
<li>Prokaryotes: <strong>one origin</strong>, circular chromosome. Eukaryotes: <strong>thousands of origins</strong>, linear chromosomes (huge genome, slow polymerase; one origin would take weeks).</li>
<li><strong>Primase</strong> makes an <strong>RNA primer</strong> (about 10 nucleotides) with a free 3′-OH, because DNA polymerase cannot start a strand.</li>
<li><strong>DNA polymerase III</strong> adds dNTPs to the <strong>3′ end of the new strand</strong>; reads the template <strong>3′ → 5′</strong>, builds <strong>5′ → 3′</strong>. Energy comes from the two phosphates (pyrophosphate) each dNTP loses.</li>
<li><strong>Leading strand</strong>: continuous, toward the fork, one primer. <strong>Lagging strand</strong>: discontinuous, away from the fork, in <strong>Okazaki fragments</strong>, many primers.</li>
<li><strong>DNA polymerase I</strong> removes RNA primers and replaces them with DNA. <strong>DNA ligase</strong> seals the nicks with <strong>phosphodiester bonds</strong>.</li>
<li>Every fork has one leading and one lagging strand; each template strand is leading for one fork of a bubble and lagging for the other.</li>
<li>Pol I and pol III <strong>proofread</strong> and act as <strong>exonucleases</strong>. Errors: about 1 in 10,000 before proofreading → about 1 in 10<sup>9</sup> after proofreading and <strong>mismatch repair</strong>.</li>
<li><strong>Excision repair</strong>: a nuclease cuts out damage (e.g. UV <strong>thymine dimers</strong> in skin cells); DNA polymerase fills the gap; ligase seals.</li>
<li>Linear chromosomes shorten each division (the last primer can't be replaced); <strong>telomeres</strong> (5′-TTAGGG-3′) are the buffer.</li>
<li>Card-sort order: helicase → SSBs → topoisomerase → primase → DNA pol III → DNA pol I → ligase (topoisomerase really works alongside helicase).</li>
</ul>
`
});
