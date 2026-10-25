window.LESSONS = window.LESSONS || [];

/* ===================================================================
   2.10 Calvin Cycle
   =================================================================== */
window.LESSONS.push({
  id: "2.10",
  title: "Calvin Cycle",
  stage: "calvin",
  where: "Stroma of the chloroplast",
  summary: "The Calvin cycle spends the ATP and NADPH made by the light reactions to turn CO2 from the air into a 3-carbon sugar, G3P. It runs in the stroma in three phases (carbon fixation by RuBisCO, reduction, and regeneration of RuBP); one glucose costs 6 CO2, 18 ATP and 12 NADPH.",
  objectives: [
    "State the main goal of the Calvin cycle and explain why it is called the light-independent reactions even though it depends on the light reactions.",
    "State where the Calvin cycle happens and list its inputs and outputs, including what goes back to the light reactions.",
    "Describe the three phases (carbon fixation, reduction, regeneration of RuBP), naming RuBisCO, RuBP, PGA, 1,3-BPG and G3P, with the number of molecules and carbons at each step.",
    "Define a C3 plant.",
    "Calculate the CO2, ATP and NADPH needed per G3P and per glucose, and explain why the cycle needs more ATP than NADPH.",
    "Describe what happens to G3P after it leaves the cycle.",
    "Explain RuBisCO's weakness (its attraction to O2) and how it leads to photorespiration.",
    "Compare photosynthesis and cellular respiration: overall reactions, electrons, electron transport, ATP synthesis and organelle structure."
  ],
  html: `
<h3 data-tier="essential">The big picture: turning CO<sub>2</sub> into sugar</h3>
<p>The light reactions (lesson 2.09) captured light energy, but they didn't make any sugar. Their products were <strong>ATP</strong> and <strong>NADPH</strong>, with O<sub>2</sub> released as a by-product. ATP and NADPH are short-term energy carriers. They can't be stockpiled or shipped to the roots. The <span class="term">Calvin cycle</span> is the stage that spends them to make something that <em>can</em> be stored and moved: carbohydrate.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Main goal (class slide): the Calvin cycle <strong>uses ATP and NADPH from the light reactions to create carbohydrates from atmospheric carbon</strong> (CO<sub>2</sub>).</p></div>
<p>Look at the overall equation again and notice which parts belong to which stage:</p>
<div class="eq">6 CO<sub>2</sub> + 6 H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub></div>
<p>The water and the oxygen belong to the light reactions: water is split for its electrons, and the oxygen atoms leave as O<sub>2</sub>. The carbon belongs to the Calvin cycle. It takes the six CO<sub>2</sub> on the left and builds them into the carbon skeleton of a sugar. In redox terms, CO<sub>2</sub> is <strong>reduced</strong>: it gains the high-energy electrons (with hydrogen) that NADPH delivers, and ATP supplies the energy to drive the reactions. Those electrons came from water and were boosted by light, so the finished sugar holds energy that started as sunlight.</p>
<p>The Calvin cycle is <strong>anabolic</strong> (it builds a larger molecule from small ones) and <strong>endergonic</strong> (it needs an input of energy). It is the mirror image of the Krebs cycle, which releases CO<sub>2</sub> and loads electrons onto carriers. For one glucose the Calvin cycle needs:</p>
<div class="tally"><span class="chip co2">6 CO<sub>2</sub></span><span class="chip atp">18 ATP</span><span class="chip nadph">12 NADPH</span></div>
<p>Where those numbers come from is the main thing to learn in this lesson. By the end you should be able to rebuild them from the phases without memorizing them.</p>

<h4>Why it's called "light-independent"</h4>
<p>The Calvin cycle has several names: the Calvin cycle (after the chemist who worked it out), the <span class="term">light-independent reactions</span>, and in older books the "dark reactions". None of its steps uses light directly. No photon is absorbed, no pigment is involved and no electron is excited. That is all "light-independent" means.</p>
<p>"Independent" does not mean the cycle can run without light for long. Its fuel is ATP and NADPH, and only the light reactions make them. Switch the light off and the cycle keeps turning for a short time, until the ATP and NADPH already in the stroma are used up, and then it stops. That is also why "dark reactions" is a misleading name: in a real leaf the Calvin cycle runs during the day, at the same time as the light reactions, not at night.</p>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>Your notes say "Hence called light dependent rxns: need light reactions' products to happen." The idea is right, but the name is flipped. The Calvin cycle is called the <strong>light-independent</strong> reactions because it doesn't use light directly. It still <strong>depends on</strong> the light reactions, because its fuel (ATP and NADPH) comes from them. On a test, write "light-independent" and then explain the dependence in a sentence.</p></div>

<h3 data-tier="essential">Where it happens: the stroma</h3>
<p>The Calvin cycle runs in the <span class="term">stroma</span>, the protein-rich fluid that fills the chloroplast inside the inner membrane and around the grana. All of the cycle's enzymes, including RuBisCO, are dissolved in the stroma, just as the Krebs cycle enzymes are dissolved in the mitochondrial matrix.</p>
<p>The location makes sense once you remember where the light reactions deliver their products:</p>
<ul>
<li><strong>ATP</strong> is made by ATP synthase in the thylakoid membrane. Its knob-shaped head faces the stroma, so as H<sup>+</sup> flows from the thylakoid lumen back out into the stroma, each new ATP is released straight into the stroma.</li>
<li><strong>NADPH</strong> is made by NADP<sup>+</sup> reductase on the stroma side of the thylakoid membrane, at the end of photosystem I's chain, so it also lands in the stroma.</li>
</ul>
<p>Both fuels appear exactly where the Calvin cycle needs them. In return, the cycle hands back the "empty" carriers: <strong>ADP + P<sub>i</sub></strong> and <strong>NADP<sup>+</sup></strong>. The light reactions need these to keep running. If the Calvin cycle stopped, NADP<sup>+</sup> would run out, the electrons arriving at the end of photosystem I would have nowhere to go, and the light reactions would slow down too. The two stages are tied together in a loop: each one uses what the other produces.</p>
<p>Carbon dioxide reaches the stroma by diffusion: in through open <span class="term">stomata</span>, through the leaf's air spaces, and into the mesophyll cells and their chloroplasts. Keep this in mind for lesson 2.11: when stomata close on a hot day, the CO<sub>2</sub> supply to the stroma dries up.</p>

<figure class="diagram">
<svg viewBox="0 0 640 300" role="img" aria-labelledby="p210a-t p210a-d">
<title id="p210a-t">How the light reactions and the Calvin cycle are linked in a chloroplast</title>
<desc id="p210a-d">Light and water enter the light reactions in the thylakoid membranes, which release oxygen and send ATP and NADPH into the stroma. The Calvin cycle in the stroma takes in carbon dioxide, uses the ATP and NADPH, and releases G3P, which is made into sugars. ADP, phosphate and NADP+ return to the light reactions.</desc>
<defs>
<marker id="p210a-mk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
<marker id="p210a-mg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--glyco)"/></marker>
<marker id="p210a-me" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--etc)"/></marker>
<marker id="p210a-ml" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--link)"/></marker>
<marker id="p210a-mf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--leaf)"/></marker>
<marker id="p210a-mi" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
</defs>
<rect x="20" y="46" width="600" height="212" rx="70" style="fill:var(--surface-2);stroke:var(--leaf);stroke-width:2.5"/>
<rect x="29" y="55" width="582" height="194" rx="62" style="fill:none;stroke:var(--leaf);stroke-width:1.2"/>
<rect x="60" y="96" width="190" height="110" rx="14" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2"/>
<circle cx="480" cy="152" r="58" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:3"/>
<path d="M232,20 L214,50 L228,54 L208,92" style="fill:none;stroke:var(--glyco);stroke-width:2.5" marker-end="url(#p210a-mg)"/>
<line x1="110" y1="30" x2="110" y2="93" style="stroke:var(--link);stroke-width:3" marker-end="url(#p210a-ml)"/>
<line x1="110" y1="208" x2="110" y2="272" style="stroke:var(--link);stroke-width:3" marker-end="url(#p210a-ml)"/>
<line x1="480" y1="30" x2="480" y2="91" style="stroke:var(--ink);stroke-width:2.5" marker-end="url(#p210a-mk)"/>
<line x1="480" y1="212" x2="480" y2="272" style="stroke:var(--leaf);stroke-width:3" marker-end="url(#p210a-mf)"/>
<line x1="252" y1="124" x2="420" y2="124" style="stroke:var(--glyco);stroke-width:3" marker-end="url(#p210a-mg)"/>
<line x1="252" y1="150" x2="420" y2="150" style="stroke:var(--etc);stroke-width:3" marker-end="url(#p210a-me)"/>
<line x1="422" y1="184" x2="254" y2="184" style="stroke:var(--ink-2);stroke-width:2;stroke-dasharray:6 4" marker-end="url(#p210a-mi)"/>
<text x="110" y="22" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">H₂O</text>
<text x="240" y="24" style="fill:var(--ink);font-size:13px">Light</text>
<text x="480" y="22" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">CO₂</text>
<text x="155" y="140" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Light reactions</text>
<text x="155" y="158" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">thylakoid membranes</text>
<text x="155" y="174" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">(grana)</text>
<text x="480" y="150" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Calvin cycle</text>
<text x="480" y="168" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">(stroma)</text>
<text x="335" y="116" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">ATP</text>
<text x="335" y="142" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">NADPH</text>
<text x="335" y="202" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">ADP + Pi, NADP⁺ return</text>
<text x="335" y="236" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">Stroma</text>
<text x="110" y="292" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">O₂</text>
<text x="480" y="292" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">G3P → sugars</text>
<text x="300" y="292" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">Chloroplast</text>
</svg>
<figcaption>The two stages of photosynthesis share one chloroplast. The light reactions (thylakoid membranes) use light and water, release O<sub>2</sub>, and pass ATP and NADPH into the stroma. The Calvin cycle (stroma) uses them to fix CO<sub>2</sub> into G3P, then returns ADP + P<sub>i</sub> and NADP<sup>+</sup> (dashed arrow) so the light reactions can keep going.</figcaption>
</figure>

<h3 data-tier="essential">Inputs, outputs and the three phases</h3>
<p>The Calvin cycle is a ring of about a dozen enzyme-catalyzed reactions. The class slides group them into <strong>three phases</strong>:</p>
<ol class="steps">
<li><p class="step-head">Phase 1: Carbon fixation</p><p>RuBisCO attaches CO<sub>2</sub> to the 5-carbon sugar RuBP, giving 3-carbon PGA.</p></li>
<li><p class="step-head">Phase 2: Reduction reactions</p><p>ATP and NADPH convert PGA into the 3-carbon sugar G3P. One G3P leaves the cycle as the product.</p></li>
<li><p class="step-head">Phase 3: Regeneration of RuBP</p><p>ATP rebuilds the remaining G3P into RuBP, so the cycle can fix more CO<sub>2</sub>.</p></li>
</ol>
<p>It is a <strong>cycle</strong> for the same reason the Krebs cycle is: the starting molecule is rebuilt at the end. The Krebs cycle regenerates oxaloacetate; the Calvin cycle regenerates <strong>RuBP</strong>. Carbon enters as CO<sub>2</sub> and leaves as G3P. RuBP is used up and remade in every turn, so it is neither a net input nor a net output.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>For every 3 CO<sub>2</sub> fixed</th><th>Goes in</th><th>Comes out</th></tr></thead>
<tbody>
<tr><td>Carbon</td><td>3 CO<sub>2</sub> (from the air)</td><td><strong>1 G3P</strong> (3 C), the product</td></tr>
<tr><td>Energy</td><td>9 ATP (from the light reactions)</td><td>9 ADP + P<sub>i</sub> (back to the light reactions)</td></tr>
<tr><td>Electrons</td><td>6 NADPH (from the light reactions)</td><td>6 NADP<sup>+</sup> (back to the light reactions)</td></tr>
<tr><td>Recycled</td><td>3 RuBP (used in phase 1)</td><td>3 RuBP (remade in phase 3)</td></tr>
</tbody></table></div>

<h4>Why the slides count in threes</h4>
<p>G3P has three carbons, and each CO<sub>2</sub> brings in only one. So the smallest whole-number picture that produces one G3P is <strong>3 CO<sub>2</sub> fixed onto 3 RuBP</strong>. That's why every number on the slides is a multiple of three: 3 CO<sub>2</sub>, 3 RuBP, 6 PGA, 6 ATP, 6 NADPH, 6 G3P, 5 G3P, 3 RuBP.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The three CO<sub>2</sub> are <strong>not fixed at the same instant</strong>. Each RuBisCO reaction attaches one CO<sub>2</sub> to one RuBP. The diagrams show "3 CO<sub>2</sub>" as one batch only so the counting comes out in whole molecules. You could just as well draw three separate diagrams, each processing one carbon at a time. That's why many textbooks say the cycle must "turn three times" to make one G3P, and six times to make one glucose.</p></div>

<figure class="diagram">
<svg viewBox="0 0 640 540" role="img" aria-labelledby="p210b-t p210b-d">
<title id="p210b-t">The Calvin cycle: three phases, counted per 3 CO2</title>
<desc id="p210b-d">Three CO2 enter at the top. RuBisCO attaches them to three RuBP (15 carbons), forming three unstable six-carbon intermediates that split into six PGA (18 carbons). In phase 2, six ATP phosphorylate the PGA to six 1,3-BPG, and six NADPH reduce these to six G3P (18 carbons). One G3P leaves the cycle to make sugars. In phase 3, three ATP rearrange the remaining five G3P (15 carbons) into three RuBP, and the cycle begins again.</desc>
<defs>
<marker id="p210b-mf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--leaf)"/></marker>
<marker id="p210b-mg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--glyco)"/></marker>
<marker id="p210b-me" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--etc)"/></marker>
<marker id="p210b-mi" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
<marker id="p210b-mk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
</defs>
<g style="fill:none;stroke:var(--leaf);stroke-width:3">
<path d="M150,126 C170,50 470,50 490,124" marker-end="url(#p210b-mf)"/>
<path d="M510,174 L510,304" marker-end="url(#p210b-mf)"/>
<path d="M470,354 C460,400 420,420 392,420" marker-end="url(#p210b-mf)"/>
<path d="M250,420 C200,420 160,400 140,356" marker-end="url(#p210b-mf)"/>
<path d="M130,306 L130,176" marker-end="url(#p210b-mf)"/>
<path d="M320,446 L320,484" marker-end="url(#p210b-mf)"/>
</g>
<g style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2">
<rect x="60" y="126" width="140" height="48" rx="10"/>
<rect x="440" y="126" width="140" height="48" rx="10"/>
<rect x="440" y="306" width="140" height="48" rx="10"/>
<rect x="250" y="396" width="140" height="48" rx="10"/>
<rect x="60" y="306" width="140" height="48" rx="10"/>
</g>
<rect x="272" y="54" width="96" height="26" rx="13" style="fill:var(--surface);stroke:var(--leaf);stroke-width:2"/>
<line x1="320" y1="26" x2="320" y2="52" style="stroke:var(--ink);stroke-width:2.5" marker-end="url(#p210b-mk)"/>
<path d="M590,206 Q550,210 514,228" style="fill:none;stroke:var(--glyco);stroke-width:2.5" marker-end="url(#p210b-mg)"/>
<path d="M514,252 Q550,270 588,282" style="fill:none;stroke:var(--ink-2);stroke-width:2" marker-end="url(#p210b-mi)"/>
<path d="M566,402 Q500,404 446,404" style="fill:none;stroke:var(--etc);stroke-width:2.5" marker-end="url(#p210b-me)"/>
<path d="M440,416 Q480,450 530,462" style="fill:none;stroke:var(--ink-2);stroke-width:2" marker-end="url(#p210b-mi)"/>
<path d="M50,284 Q92,278 126,268" style="fill:none;stroke:var(--glyco);stroke-width:2.5" marker-end="url(#p210b-mg)"/>
<path d="M126,240 Q92,226 54,220" style="fill:none;stroke:var(--ink-2);stroke-width:2" marker-end="url(#p210b-mi)"/>
<text x="320" y="20" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">3 CO₂</text>
<text x="320" y="72" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">RuBisCO</text>
<text x="320" y="100" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">3 unstable 6C intermediates</text>
<text x="320" y="122" text-anchor="middle" style="fill:var(--leaf);font-size:13px;font-weight:700">Phase 1: carbon fixation</text>
<text x="130" y="146" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">3 RuBP</text>
<text x="130" y="164" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">5C each = 15 C</text>
<text x="510" y="146" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">6 PGA</text>
<text x="510" y="164" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">3C each = 18 C</text>
<text x="510" y="326" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">6 1,3-BPG</text>
<text x="510" y="344" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">3C each = 18 C</text>
<text x="320" y="416" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">6 G3P</text>
<text x="320" y="434" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">3C each = 18 C</text>
<text x="130" y="326" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">5 G3P</text>
<text x="130" y="344" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">15 C stay in</text>
<text x="632" y="200" text-anchor="end" style="fill:var(--ink);font-size:13px;font-weight:700">6 ATP</text>
<text x="632" y="292" text-anchor="end" style="fill:var(--ink-2);font-size:12px">6 ADP</text>
<text x="632" y="396" text-anchor="end" style="fill:var(--ink);font-size:13px;font-weight:700">6 NADPH</text>
<text x="632" y="474" text-anchor="end" style="fill:var(--ink-2);font-size:12px">6 NADP⁺ + 6 Pi</text>
<text x="14" y="296" style="fill:var(--ink);font-size:13px;font-weight:700">3 ATP</text>
<text x="14" y="214" style="fill:var(--ink-2);font-size:12px">3 ADP</text>
<text x="432" y="228" text-anchor="end" style="fill:var(--leaf);font-size:13px;font-weight:700">Phase 2:</text>
<text x="432" y="246" text-anchor="end" style="fill:var(--leaf);font-size:13px;font-weight:700">reduction</text>
<text x="208" y="228" style="fill:var(--leaf);font-size:13px;font-weight:700">Phase 3:</text>
<text x="208" y="246" style="fill:var(--leaf);font-size:13px;font-weight:700">regeneration</text>
<text x="208" y="264" style="fill:var(--leaf);font-size:13px;font-weight:700">of RuBP</text>
<text x="320" y="302" text-anchor="middle" style="fill:var(--ink);font-size:17px;font-weight:700">Calvin cycle</text>
<text x="320" y="320" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">in the stroma</text>
<text x="320" y="338" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">counted per 3 CO₂</text>
<text x="320" y="504" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">1 G3P leaves the cycle (3 C)</text>
<text x="320" y="522" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">2 G3P → 1 glucose; also sucrose, starch, cellulose</text>
</svg>
<figcaption>The Calvin cycle for 3 CO<sub>2</sub>. Phase 1: RuBisCO fixes 3 CO<sub>2</sub> onto 3 RuBP; the 3 unstable 6-carbon intermediates split into 6 PGA. Phase 2: 6 ATP and 6 NADPH turn 6 PGA into 6 G3P (through 6 1,3-BPG), and 1 G3P leaves. Phase 3: 3 ATP rebuild 3 RuBP from the other 5 G3P. Totals: 9 ATP and 6 NADPH per G3P. Carbons are conserved at every step (15 + 3 = 18 = 3 + 15).</figcaption>
</figure>

<h3 data-tier="essential">Phase 1: Carbon fixation</h3>
<p><span class="term">Carbon fixation</span> means attaching carbon from an inorganic molecule (CO<sub>2</sub>) to an organic molecule, so the carbon becomes part of a living thing's compounds. It is the only step in the whole cycle where carbon enters. </p>
<ol class="steps">
<li><p class="step-head">The acceptor: RuBP</p><p><span class="term">RuBP</span> (<strong>ribulose-1,5-bisphosphate</strong>) is a 5-carbon sugar with a phosphate group on each end, on carbon 1 and carbon 5. That's what "1,5-bisphosphate" means: two separate phosphate groups, at positions 1 and 5. Those phosphates make RuBP reactive enough to grab CO<sub>2</sub>.</p></li>
<li><p class="step-head">RuBisCO adds CO<sub>2</sub></p><p>The enzyme RuBisCO attaches one CO<sub>2</sub> to each RuBP. On the slide: <strong>3 CO<sub>2</sub> are added to 3 RuBP to form 3 unstable 6-carbon intermediates</strong>.</p></li>
<li><p class="step-head">The 6-carbon intermediate splits</p><p>Each 6-carbon intermediate is so unstable that it breaks in half almost instantly, giving two molecules of <span class="term">PGA</span> (<strong>3-phosphoglycerate</strong>, 3 carbons). Three intermediates give <strong>six PGA</strong>.</p></li>
</ol>
<p>Check the carbons: 3 RuBP × 5 C = 15 C, plus 3 CO<sub>2</sub> × 1 C = 3 C, gives 18 C. Six PGA × 3 C = 18 C. Nothing is lost; three carbons have been gained from the air.</p>
<p>Notice that phase 1 needs <strong>no ATP and no NADPH</strong>. The energy for this step was "pre-paid" when RuBP was made (in phase 3, using ATP). Fixation itself is exergonic. But fixing carbon is not enough: PGA is still a low-energy acid, not a sugar. Phase 2 is where the light reactions' energy is actually packed into the carbon.</p>

<h4>RuBisCO</h4>
<p><span class="term">RuBisCO</span> is the enzyme that catalyzes carbon fixation. Its full name is <strong>ribulose-1,5-bisphosphate carboxylase/oxygenase</strong>, and each part of the name tells you something:</p>
<ul>
<li><strong>Ribulose-1,5-bisphosphate</strong>: its substrate is RuBP.</li>
<li><strong>Carboxylase</strong>: it adds CO<sub>2</sub> (as a carboxyl group). This is the useful reaction.</li>
<li><strong>Oxygenase</strong>: it can also add O<sub>2</sub> to RuBP instead. This is the wasteful side reaction that causes photorespiration (later in this lesson, and all of lesson 2.11).</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The capitalization of RuBisCO is <strong>extra important</strong>. The capitals come straight from the full name: <strong>Ru</strong> (ribulose) <strong>Bis</strong> (bisphosphate) <strong>C</strong> (carboxylase) <strong>O</strong> (oxygenase). The "oxygenase" part means it is attracted to oxygen, and that is a real problem for C3 plants.</p></div>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The class slides write it "RuBisCo"; many textbooks write RuBisCO, Rubisco, or (like the Nelson textbook) "rubisco". These are all the same enzyme, so any of them is fine as long as the letters are right. Your notes spell the full name "rublose 1-5 biphosphate": the correct spelling is <strong>ribulose-1,5-bisphosphate</strong> ("bis" means two separate phosphate groups, not "bi").</p></div>
<p data-tier="extra">RuBisCO is probably the most abundant protein on Earth. It is a very slow enzyme (only a few CO<sub>2</sub> per second), so leaves make enormous amounts of it to keep up.</p>

<h4>What makes a plant "C3"</h4>
<p>The <strong>first stable product</strong> of carbon fixation here is PGA, a 3-carbon molecule. (The 6-carbon intermediate doesn't count, because it falls apart almost as soon as it forms.) That gives the plants that use only this pathway their name.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>A plant whose <strong>first stable carbohydrate product of carbon fixation has 3 carbons</strong> (PGA) is called a <span class="term">C3 plant</span>. Most plants are C3 plants, including wheat, rice, soybeans, sunflowers and most trees. In lesson 2.11 you'll meet C4 and CAM plants, whose first product has 4 carbons.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"C3" does not mean the plant fixes 3 CO<sub>2</sub> at a time, and it does not mean RuBP has 3 carbons (it has 5). It names the number of carbons in the <strong>first stable product</strong>, PGA.</p></div>

<h3 data-tier="essential">Phase 2: Reduction reactions</h3>
<p>Phase 2 is where the energy captured by the light reactions is finally stored in a carbon compound. It has two steps, one paid for by ATP and one by NADPH:</p>
<ol class="steps">
<li><p class="step-head">Phosphorylation: 6 ATP</p><p><strong>6 PGA are phosphorylated by 6 ATP to form 6 molecules of 1,3-BPG</strong> (<span class="term">1,3-bisphosphoglycerate</span>). Each ATP hands one phosphate group to a PGA, so each molecule now carries two phosphates (on carbons 1 and 3). This "activates" the molecule: it raises its energy enough for the next step to happen. The 6 ADP go back to the thylakoids to be recharged.</p></li>
<li><p class="step-head">Reduction: 6 NADPH</p><p><strong>6 NADPH reduce the six 1,3-BPG to 6 G3P</strong> (<span class="term">glyceraldehyde-3-phosphate</span>, also called <strong>PGAL</strong>). Each NADPH donates a pair of high-energy electrons (with a hydrogen), and the phosphate that ATP just added comes off as P<sub>i</sub>. The 6 NADP<sup>+</sup> go back to photosystem I to be filled again.</p></li>
<li><p class="step-head">One G3P exits</p><p><strong>One molecule of G3P exits the cycle as the final product.</strong> The other five stay in the cycle for phase 3. Three CO<sub>2</sub> had to be fixed to make that one G3P.</p></li>
</ol>
<p>Why is this called <em>reduction</em>? G3P has gained electrons compared with PGA. PGA has an acid group on its first carbon; G3P has an aldehyde group there, with an extra C–H bond. More C–H bonds means more stored chemical energy, which is why G3P counts as a <strong>sugar</strong> (a 3-carbon sugar, or triose) while PGA does not. The electrons that did this came from water, were energized by light in photosystems II and I, and were carried here by NADPH. So phase 2 is the moment the light reactions' work becomes sugar.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p><strong>G3P and PGAL are the same thing</strong>: two names for glyceraldehyde-3-phosphate. You may see either on a test.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>PGA → BPG → G3P: "first add a P, then add electrons."</strong> ATP adds the phosphate (making the <em>bis</em>phosphate), and NADPH adds the electrons (making the sugar).</p></div>

<h4 data-tier="likely">Glycolysis in reverse</h4>
<p data-tier="likely">These molecules should look familiar from lesson 2.02. In glycolysis, step 6 turns G3P into 1,3-BPG (making NADH), and step 7 turns 1,3-BPG into 3-phosphoglycerate (making ATP). Phase 2 of the Calvin cycle runs the same two steps <strong>backwards</strong>: 3-phosphoglycerate (PGA) → 1,3-BPG (uses ATP) → G3P (uses NADPH). The only real difference is the carrier: glycolysis loads electrons onto NAD<sup>+</sup>, while the Calvin cycle takes them from NADPH.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The Calvin cycle uses <strong>NADPH</strong>, not NADH. NADH is the carrier in cellular respiration; NADPH is the carrier in photosynthesis. The "P" is an extra phosphate group on the molecule, and it lets the cell keep its building (anabolic) electrons separate from its breaking-down (catabolic) ones.</p></div>

<h3 data-tier="essential">Phase 3: Regeneration of RuBP</h3>
<p>After one G3P leaves, five G3P remain. Phase 3 turns them back into the CO<sub>2</sub> acceptor:</p>
<div class="eq">5 G3P (5 × 3 C = 15 C) + 3 ATP → 3 RuBP (3 × 5 C = 15 C)</div>
<p>From the slide: <strong>3 ATP are used to rearrange the remaining 5 G3P into 3 molecules of RuBP.</strong> No NADPH is used here, because nothing is being reduced; the carbons are only being shuffled. A series of enzymes swaps carbon pieces between sugars until five 3-carbon molecules have become three 5-carbon ones. In the last step, each ATP adds the second phosphate group that turns ribulose phosphate into ribulose <em>bis</em>phosphate. One ATP per RuBP, so 3 ATP for 3 RuBP.</p>
<p>Why not simply export all six G3P? Because then there would be no RuBP left to accept the next CO<sub>2</sub>, and the cycle would stop after one round. Only <strong>one G3P in six is profit</strong>; the other five are reinvested to keep the cycle running.</p>

<h4>Carbon bookkeeping: 15 C = 15 C</h4>
<p>A good check that you understand the cycle is that the carbons always balance. Carbon enters only in phase 1 (from CO<sub>2</sub>) and leaves only in phase 2 (as the exported G3P). Phase 3 just reshapes the 15 carbons that stayed behind.</p>

<figure class="diagram">
<svg viewBox="0 0 640 300" role="img" aria-labelledby="p210c-t p210c-d">
<title id="p210c-t">Counting carbons through the Calvin cycle for 3 CO2</title>
<desc id="p210c-d">Each dot is one carbon atom. Row 1: 3 RuBP (15 carbons) plus 3 CO2 (3 carbons) gives 18 carbons. Row 2: 6 PGA, 18 carbons. Row 3: 6 G3P, 18 carbons, three of which leave as the exported G3P. Row 4: 3 RuBP, 15 carbons, with the 3 exported carbons shown separately.</desc>
<g style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5">
<circle cx="236" cy="46" r="5"/><circle cx="249" cy="46" r="5"/><circle cx="262" cy="46" r="5"/><circle cx="275" cy="46" r="5"/><circle cx="288" cy="46" r="5"/><circle cx="310" cy="46" r="5"/><circle cx="323" cy="46" r="5"/><circle cx="336" cy="46" r="5"/><circle cx="349" cy="46" r="5"/><circle cx="362" cy="46" r="5"/><circle cx="384" cy="46" r="5"/><circle cx="397" cy="46" r="5"/><circle cx="410" cy="46" r="5"/><circle cx="423" cy="46" r="5"/><circle cx="436" cy="46" r="5"/>
<circle cx="236" cy="106" r="5"/><circle cx="249" cy="106" r="5"/><circle cx="262" cy="106" r="5"/><circle cx="284" cy="106" r="5"/><circle cx="297" cy="106" r="5"/><circle cx="310" cy="106" r="5"/><circle cx="332" cy="106" r="5"/><circle cx="345" cy="106" r="5"/><circle cx="358" cy="106" r="5"/><circle cx="380" cy="106" r="5"/><circle cx="393" cy="106" r="5"/><circle cx="406" cy="106" r="5"/><circle cx="428" cy="106" r="5"/><circle cx="441" cy="106" r="5"/><circle cx="454" cy="106" r="5"/><circle cx="476" cy="106" r="5"/><circle cx="489" cy="106" r="5"/><circle cx="502" cy="106" r="5"/>
<circle cx="236" cy="166" r="5"/><circle cx="249" cy="166" r="5"/><circle cx="262" cy="166" r="5"/><circle cx="284" cy="166" r="5"/><circle cx="297" cy="166" r="5"/><circle cx="310" cy="166" r="5"/><circle cx="332" cy="166" r="5"/><circle cx="345" cy="166" r="5"/><circle cx="358" cy="166" r="5"/><circle cx="380" cy="166" r="5"/><circle cx="393" cy="166" r="5"/><circle cx="406" cy="166" r="5"/><circle cx="428" cy="166" r="5"/><circle cx="441" cy="166" r="5"/><circle cx="454" cy="166" r="5"/>
<circle cx="236" cy="226" r="5"/><circle cx="249" cy="226" r="5"/><circle cx="262" cy="226" r="5"/><circle cx="275" cy="226" r="5"/><circle cx="288" cy="226" r="5"/><circle cx="310" cy="226" r="5"/><circle cx="323" cy="226" r="5"/><circle cx="336" cy="226" r="5"/><circle cx="349" cy="226" r="5"/><circle cx="362" cy="226" r="5"/><circle cx="384" cy="226" r="5"/><circle cx="397" cy="226" r="5"/><circle cx="410" cy="226" r="5"/><circle cx="423" cy="226" r="5"/><circle cx="436" cy="226" r="5"/>
<circle cx="24" cy="276" r="5"/>
</g>
<g style="fill:var(--ink);stroke:var(--ink);stroke-width:1.5">
<circle cx="458" cy="46" r="5"/><circle cx="480" cy="46" r="5"/><circle cx="502" cy="46" r="5"/>
<circle cx="214" cy="276" r="5"/>
</g>
<g style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:2">
<circle cx="476" cy="166" r="5"/><circle cx="489" cy="166" r="5"/><circle cx="502" cy="166" r="5"/>
<circle cx="476" cy="226" r="5"/><circle cx="489" cy="226" r="5"/><circle cx="502" cy="226" r="5"/>
<circle cx="424" cy="276" r="5"/>
</g>
<text x="16" y="42" style="fill:var(--ink);font-size:13px;font-weight:700">3 RuBP + 3 CO₂</text>
<text x="16" y="58" style="fill:var(--ink-2);font-size:12px">start of phase 1</text>
<text x="16" y="102" style="fill:var(--ink);font-size:13px;font-weight:700">6 PGA</text>
<text x="16" y="118" style="fill:var(--ink-2);font-size:12px">after phase 1</text>
<text x="16" y="162" style="fill:var(--ink);font-size:13px;font-weight:700">6 G3P</text>
<text x="16" y="178" style="fill:var(--ink-2);font-size:12px">after phase 2</text>
<text x="16" y="222" style="fill:var(--ink);font-size:13px;font-weight:700">3 RuBP</text>
<text x="16" y="238" style="fill:var(--ink-2);font-size:12px">after phase 3 (3 ATP)</text>
<text x="489" y="248" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">exported</text>
<text x="624" y="51" text-anchor="end" style="fill:var(--ink);font-size:14px;font-weight:700">18 C</text>
<text x="624" y="111" text-anchor="end" style="fill:var(--ink);font-size:14px;font-weight:700">18 C</text>
<text x="624" y="171" text-anchor="end" style="fill:var(--ink);font-size:14px;font-weight:700">18 C</text>
<text x="624" y="231" text-anchor="end" style="fill:var(--ink);font-size:14px;font-weight:700">15 C + 3 C</text>
<text x="36" y="280" style="fill:var(--ink-2);font-size:12px">carbon kept in the cycle</text>
<text x="226" y="280" style="fill:var(--ink-2);font-size:12px">carbon newly fixed from CO₂</text>
<text x="436" y="280" style="fill:var(--ink-2);font-size:12px">carbon leaving as 1 G3P</text>
</svg>
<figcaption>Carbon count for one batch of 3 CO<sub>2</sub>. Each dot is one carbon atom (the dots count carbons; they don't track which atom goes where). 15 carbons from RuBP plus 3 from CO<sub>2</sub> make 18. They stay 18 through PGA and G3P. Then 3 leave in the exported G3P and the other 15 are rebuilt into 3 RuBP: <strong>15 C in, 15 C back</strong>, plus 3 C of profit.</figcaption>
</figure>

<h3 data-tier="essential">The full accounting: per CO<sub>2</sub>, per G3P, per glucose</h3>
<p>Now add up the costs. Phase 1 uses nothing. Phase 2 uses 6 ATP and 6 NADPH. Phase 3 uses 3 ATP. So one G3P costs <strong>3 CO<sub>2</sub>, 9 ATP and 6 NADPH</strong>. Glucose has six carbons, so it takes <strong>two G3P</strong>, which means running the 3-CO<sub>2</sub> batch twice: <strong>6 CO<sub>2</sub>, 18 ATP and 12 NADPH</strong>.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Quantity</th><th>Per 1 CO<sub>2</sub> (one turn)</th><th>Per 3 CO<sub>2</sub> (1 G3P)</th><th>Per 6 CO<sub>2</sub> (1 glucose)</th></tr></thead>
<tbody>
<tr><td>CO<sub>2</sub> fixed</td><td>1</td><td>3</td><td>6</td></tr>
<tr><td>RuBP used (and remade)</td><td>1</td><td>3</td><td>6</td></tr>
<tr><td>PGA made (phase 1)</td><td>2</td><td>6</td><td>12</td></tr>
<tr><td>ATP used in phase 2</td><td>2</td><td>6</td><td>12</td></tr>
<tr><td>NADPH used in phase 2</td><td>2</td><td>6</td><td>12</td></tr>
<tr><td>G3P made (phase 2)</td><td>2</td><td>6</td><td>12</td></tr>
<tr><td>G3P exported (profit)</td><td>⅓</td><td>1</td><td>2 (→ 1 glucose)</td></tr>
<tr><td>G3P kept to remake RuBP</td><td>1⅔</td><td>5</td><td>10</td></tr>
<tr><td>ATP used in phase 3</td><td>1</td><td>3</td><td>6</td></tr>
<tr><td><strong>Total ATP</strong></td><td><strong>3</strong></td><td><strong>9</strong></td><td><strong>18</strong></td></tr>
<tr><td><strong>Total NADPH</strong></td><td><strong>2</strong></td><td><strong>6</strong></td><td><strong>12</strong></td></tr>
</tbody></table></div>
<div class="tally"><span class="chip co2">6 CO<sub>2</sub></span><span class="chip atp">18 ATP</span><span class="chip nadph">12 NADPH</span><span class="chip co2">→ 1 glucose (2 G3P)</span></div>
<p>As an overall equation for one glucose (leaving out water and H<sup>+</sup>):</p>
<div class="eq">6 CO<sub>2</sub> + 18 ATP + 12 NADPH → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 18 ADP + 18 P<sub>i</sub> + 12 NADP<sup>+</sup></div>
<p>The "per 1 CO<sub>2</sub>" column is worth remembering for lesson 2.11: a C3 plant spends <strong>3 ATP and 2 NADPH for every CO<sub>2</sub></strong> it fixes. C4 and CAM plants pay extra on top of that.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>"3-9-6, then double it."</strong> One G3P = 3 CO<sub>2</sub>, 9 ATP, 6 NADPH. One glucose = 6 CO<sub>2</sub>, 18 ATP, 12 NADPH.</p></div>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>Your notes say that because 6 PGA run through phase 2, "12 G3P are created total (36 carbons total), 2 G3P per PGA." That mixes up two different counts. <strong>Each PGA becomes exactly one G3P</strong> (both have 3 carbons, and phase 2 adds no carbon), so:</p><ul>
<li><strong>Per 3 CO<sub>2</sub>:</strong> 6 PGA → <strong>6 G3P</strong> (18 C). 1 G3P exits, 5 G3P (15 C) rebuild 3 RuBP.</li>
<li><strong>Per 6 CO<sub>2</sub> (one glucose):</strong> 12 PGA → <strong>12 G3P</strong> (36 C). 2 G3P exit to make 1 glucose (6 C), and 10 G3P (30 C) rebuild 6 RuBP (30 C).</li>
</ul><p>So the numbers 12 G3P, 36 C, "2 make glucose" and "10 remake 6 RuBP" in your notes are all correct, but they belong to <strong>6 CO<sub>2</sub> and 12 PGA</strong>, not to 6 PGA. There is never more than one G3P per PGA.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>Be ready to scale the numbers for any amount of CO<sub>2</sub>. Divide the CO<sub>2</sub> by 3 to get G3P exported, then multiply: for every CO<sub>2</sub>, 3 ATP and 2 NADPH. For example, 12 CO<sub>2</sub> → 4 G3P exported (2 glucose), 36 ATP and 24 NADPH.</p></div>

<h3 data-tier="likely">Why the cycle needs more ATP than NADPH</h3>
<p>The slide says the Calvin cycle <strong>needs more ATP than NADPH</strong>, and the accounting shows why: 18 ATP but only 12 NADPH per glucose, a ratio of <strong>3 : 2</strong>. Phase 2 uses ATP and NADPH one for one (6 and 6), but phase 3 needs 3 more ATP and no NADPH at all.</p>
<p>Non-cyclic electron flow can't supply that ratio on its own. Every pair of electrons that travels from water to NADP<sup>+</sup> makes exactly one NADPH and pumps a fixed number of H<sup>+</sup> into the thylakoid lumen on the way. That produces ATP and NADPH in roughly equal amounts, which is less ATP than the 3 : 2 the Calvin cycle demands. If nothing else happened, the stroma would run short of ATP while unused NADPH piled up, and the cycle would stall at phase 3.</p>
<p>The fix is <strong>cyclic electron flow</strong> from lesson 2.09. Electrons excited in photosystem I pass to ferredoxin and then, instead of going to NADP<sup>+</sup>, loop back to the plastoquinone/cytochrome b<sub>6</sub>-f part of the chain and return to P700 through plastocyanin. On the way they pump extra H<sup>+</sup> into the lumen, so ATP synthase makes extra ATP. No NADPH is made and no water is split, so no O<sub>2</sub> is released.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Recap from the light reactions, given at the start of this lesson: <strong>cyclic</strong> flow sends electrons back to the photosystem II electron transport chain, which pumps H<sup>+</sup> and makes <strong>more ATP</strong>. <strong>Non-cyclic</strong> flow sends electrons on to <strong>NADP<sup>+</sup> reductase</strong> after photosystem I to make <strong>NADPH</strong>. The Calvin cycle's extra ATP demand is the reason the cyclic route exists.</p></div>
<p>The system largely balances itself: when ATP runs short, NADPH builds up and NADP<sup>+</sup> becomes scarce, so more electrons from ferredoxin take the cyclic route and make ATP instead.</p>

<h4>What happens in the dark</h4>
<p>From the light reactions review: there are no light reactions at night, but the Calvin cycle can <strong>continue briefly</strong> until the stored ATP and NADPH run out. After that, no more CO<sub>2</sub> is fixed until morning. The plant still needs energy at night, so it breaks down the sugar and starch it made during the day by cellular respiration in its mitochondria.</p>
<p data-tier="extra">Plants also switch the cycle's enzymes off in the dark, so it can't waste ATP made by respiration at night. In the light, H<sup>+</sup> pumping makes the stroma more basic (about pH 8) and raises its Mg<sup>2+</sup>, the conditions RuBisCO works best in, and a light-controlled helper, Rubisco activase, keeps RuBisCO switched on (review question 3). So the light reactions don't just fuel the Calvin cycle; they also turn it on.</p>

<h3 data-tier="likely">What happens to G3P</h3>
<p>The real product of the Calvin cycle is <strong>G3P</strong>, not glucose. One class slide calls G3P "the direct product of photosynthesis", and another shows it going two ways: "×2 → glucose" and "→ other organic molecules". The equation's C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> is a convenient way to write the result, but glucose is made from G3P <em>after</em> it leaves the cycle. G3P is the plant's all-purpose building block:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>What G3P becomes</th><th>How</th><th>What the plant uses it for</th></tr></thead>
<tbody>
<tr><td><strong>Glucose</strong> (and fructose)</td><td>Two G3P (3 C each) are joined into one 6-carbon sugar, by reactions much like glycolysis run backwards</td><td>The starting point for the other sugars below; fuel for the plant's own respiration</td></tr>
<tr><td><strong>Sucrose</strong></td><td>Most G3P leaves the chloroplast for the cytoplasm, where glucose and fructose are joined into sucrose</td><td>The <strong>transport sugar</strong>: carried in the phloem to roots, fruits, flowers and growing tips (it's also the table sugar we get from sugar cane and sugar beets)</td></tr>
<tr><td><strong>Starch</strong></td><td>Glucose chains made in the chloroplast during the day</td><td><strong>Storage</strong>: starch grains in the stroma are broken down at night to keep sugar flowing; long-term stores in roots, tubers (potatoes) and seeds</td></tr>
<tr><td><strong>Cellulose</strong></td><td>Long glucose chains made at the cell surface</td><td><strong>Cell walls</strong>: the plant's structure; the most abundant organic compound on Earth</td></tr>
<tr><td><strong>Amino acids, fatty acids</strong>, nucleotides</td><td>G3P and the sugars made from it provide carbon skeletons. Adding nitrogen (absorbed by the roots as nitrate or ammonium) makes amino acids; building up acetyl-CoA makes fatty acids</td><td>Proteins (including RuBisCO itself), membrane lipids, oils in seeds, DNA and RNA</td></tr>
</tbody></table></div>
<p>So every part of a plant (wood, leaves, fruit, seeds) is built from carbon that came in through RuBisCO and left the Calvin cycle as G3P. When you eat, you are using that carbon and the energy stored in it.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Don't write that the Calvin cycle "makes glucose" in one step or that glucose leaves the cycle. <strong>G3P</strong> leaves the cycle, and <strong>two G3P</strong> are later combined to make one glucose.</p></div>

<h3 data-tier="likely">RuBisCO's problem</h3>
<p>RuBisCO is essential, but it is not a perfect enzyme. Its name ends in "oxygenase" for a reason. The class slide puts it this way:</p>
<div class="callout key"><p class="callout-title">On the test</p><p>RuBisCO evolved on a planet with <strong>almost no atmospheric oxygen gas, but plenty of carbon dioxide</strong>. At high temperatures, <strong>oxygen is the preferred substrate</strong> for RuBisCO, so energy is lost in <span class="term">photorespiration</span>: ATP is used to recycle the RuBP without producing any useful molecules. This is especially a problem for plants in <strong>arid and semiarid</strong> (dry) environments.</p></div>
<p>Here is what that means. CO<sub>2</sub> and O<sub>2</sub> are both small molecules, and RuBisCO's active site can't fully tell them apart. Usually it attaches CO<sub>2</sub> to RuBP (the carboxylase reaction that starts the Calvin cycle). But sometimes it attaches O<sub>2</sub> instead (the oxygenase reaction). Then RuBP is split into only one PGA plus a 2-carbon molecule that the plant can't use and has to break down, spending ATP and losing carbon as CO<sub>2</sub>. That wasteful process is photorespiration.</p>
<p>When photosynthesis first evolved, the air held almost no O<sub>2</sub>, so the oxygenase "mistake" hardly ever happened. Photosynthesis itself then filled the atmosphere with O<sub>2</sub>, and RuBisCO was never replaced by a better enzyme.</p>
<p>The problem gets worse when it's hot and dry. In hot weather RuBisCO's shape and affinity shift toward O<sub>2</sub>, and on hot, dry days plants close their stomata to save water, so CO<sub>2</sub> inside the leaf drops while O<sub>2</sub> from the light reactions builds up. Lesson 2.11 covers photorespiration in detail, along with the two ways some plants (C4 and CAM plants) have evolved to get around it.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Photorespiration is <strong>not</strong> a kind of cellular respiration. It is called that only because it uses O<sub>2</sub> and releases CO<sub>2</sub> in the light. Cellular respiration <em>makes</em> ATP; photorespiration <em>uses up</em> ATP and makes nothing useful.</p></div>

<h3 data-tier="likely">Connecting cellular respiration and photosynthesis</h3>
<p>You have now seen both halves of the energy story in this unit. Put the two overall equations side by side:</p>
<div class="eq">Photosynthesis: 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub></div>
<div class="eq">Cellular respiration: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + energy (ATP + heat)</div>
<p>Each is the reverse of the other. The products of photosynthesis (glucose and O<sub>2</sub>) are exactly the reactants of respiration, and the products of respiration (CO<sub>2</sub> and H<sub>2</sub>O) are exactly the reactants of photosynthesis. Together they form a <strong>cycle of matter</strong>: the same carbon, oxygen and hydrogen atoms go around again and again between the air, plants and every other living thing.</p>
<p>Energy is different: it does <strong>not</strong> cycle. It <strong>flows one way</strong>. Light energy is captured by photosynthesis and stored as chemical energy in glucose. Respiration releases that energy to make ATP, and the ATP is spent on cell work. At every step some energy is lost as <strong>heat</strong>, which can't be turned back into light or chemical energy by living things. That's why life on Earth depends on a constant supply of new energy from the Sun.</p>

<figure class="diagram">
<svg viewBox="0 0 640 300" role="img" aria-labelledby="p210d-t p210d-d">
<title id="p210d-t">Photosynthesis and cellular respiration exchange matter, while energy flows one way</title>
<desc id="p210d-d">On the left, photosynthesis in the chloroplast uses light energy. An arrow carries glucose and oxygen from the chloroplast to the mitochondrion on the right, where cellular respiration releases ATP for cell work and heat. A second arrow carries carbon dioxide and water from the mitochondrion back to the chloroplast.</desc>
<defs>
<marker id="p210d-mf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--leaf)"/></marker>
<marker id="p210d-mk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--krebs)"/></marker>
<marker id="p210d-mg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--glyco)"/></marker>
<marker id="p210d-mi" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
</defs>
<ellipse cx="150" cy="160" rx="112" ry="62" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2.5"/>
<ellipse cx="490" cy="160" rx="112" ry="62" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:2.5"/>
<path d="M232,112 Q320,64 408,112" style="fill:none;stroke:var(--leaf);stroke-width:3" marker-end="url(#p210d-mf)"/>
<path d="M408,208 Q320,256 232,208" style="fill:none;stroke:var(--krebs);stroke-width:3" marker-end="url(#p210d-mk)"/>
<path d="M44,24 L66,56 L54,60 L88,104" style="fill:none;stroke:var(--glyco);stroke-width:2.5" marker-end="url(#p210d-mg)"/>
<line x1="562" y1="108" x2="598" y2="54" style="stroke:var(--glyco);stroke-width:2.5" marker-end="url(#p210d-mg)"/>
<line x1="592" y1="196" x2="622" y2="230" style="stroke:var(--ink-2);stroke-width:2;stroke-dasharray:5 4" marker-end="url(#p210d-mi)"/>
<text x="150" y="156" text-anchor="middle" style="fill:var(--ink);font-size:15px;font-weight:700">Photosynthesis</text>
<text x="150" y="174" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">chloroplast</text>
<text x="490" y="156" text-anchor="middle" style="fill:var(--ink);font-size:15px;font-weight:700">Cellular respiration</text>
<text x="490" y="174" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">mitochondrion</text>
<text x="320" y="40" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">glucose + oxygen</text>
<text x="320" y="60" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">C₆H₁₂O₆ + 6 O₂</text>
<text x="320" y="270" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">6 CO₂ + 6 H₂O</text>
<text x="320" y="288" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">carbon dioxide + water</text>
<text x="320" y="156" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">matter</text>
<text x="320" y="172" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">cycles</text>
<text x="100" y="30" style="fill:var(--ink);font-size:13px;font-weight:700">Light energy</text>
<text x="632" y="40" text-anchor="end" style="fill:var(--ink);font-size:13px;font-weight:700">ATP for cell work</text>
<text x="630" y="252" text-anchor="end" style="fill:var(--ink-2);font-size:12px">heat</text>
</svg>
<figcaption>Matter cycles and energy flows. Glucose and O<sub>2</sub> made by photosynthesis are used in respiration; CO<sub>2</sub> and H<sub>2</sub>O released by respiration are used in photosynthesis. Energy enters as light and leaves as ATP that is spent on work and, finally, as heat. It never goes around the loop.</figcaption>
</figure>

<p>Two points that are easy to miss:</p>
<ul>
<li><strong>Plants do both.</strong> Plant cells contain chloroplasts <em>and</em> mitochondria. A plant photosynthesizes only in the light, but it respires all the time, day and night, in every living cell, including roots and other parts that never photosynthesize. During the day a healthy leaf makes far more O<sub>2</sub> and sugar than it uses, so overall it takes in CO<sub>2</sub> and gives out O<sub>2</sub>. At night it only respires, so it takes in O<sub>2</sub> and gives out CO<sub>2</sub>.</li>
<li><strong>Glucose links the two organelles.</strong> A class slide shows glucose from the Calvin cycle going through glycolysis to pyruvate, which enters the mitochondrion. The Krebs cycle's CO<sub>2</sub> can be fixed again, and the ETC's H<sub>2</sub>O can be split again.</li>
</ul>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Plants photosynthesize and animals respire" is wrong. Plants respire too, all the time. The difference is that plants (autotrophs) also make their own food, while animals (heterotrophs) must eat it.</p></div>

<h3 data-tier="likely">For your review, compare</h3>
<p>The last content slide asks you to compare the two processes under five headings. This table is a complete answer; learn it as pairs.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Compare</th><th>Cellular respiration (mitochondrion)</th><th>Photosynthesis (chloroplast)</th></tr></thead>
<tbody>
<tr><td><strong>1. Overall reactions</strong><br>reactants, products, energy</td><td>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O. <strong>Exergonic</strong>: releases energy (about 2870 kJ/mol), captured as ATP and lost as heat. <strong>Catabolic</strong>: glucose is <strong>oxidized</strong>.</td><td>6 CO<sub>2</sub> + 6 H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub>. <strong>Endergonic</strong>: absorbs energy (light), stored in glucose. <strong>Anabolic</strong>: CO<sub>2</sub> is <strong>reduced</strong>.</td></tr>
<tr><td><strong>2. Electrons</strong><br>source, carriers</td><td>Source: <strong>glucose (food)</strong>, stripped off in glycolysis, pyruvate oxidation and the Krebs cycle. Carriers: <strong>NADH</strong> and <strong>FADH<sub>2</sub></strong>. Electrons end up on O<sub>2</sub>, forming water.</td><td>Source: <strong>water</strong>, split by photolysis at photosystem II. Carrier: <strong>NADPH</strong>. Electrons end up in sugar: NADPH reduces 1,3-BPG to G3P in the Calvin cycle.</td></tr>
<tr><td><strong>3. Electron transport system</strong><br>electron source, energy pathway, electron acceptor, products</td><td>Electrons from NADH (complex I) and FADH<sub>2</sub> (complex II) → Q → complex III → cytochrome c → complex IV. Energy comes from the <strong>oxidation of food</strong>: electrons fall from high-energy carriers toward O<sub>2</sub>. Final acceptor: <strong>O<sub>2</sub></strong>. Products: H<sub>2</sub>O, an H<sup>+</sup> gradient, and recycled NAD<sup>+</sup> and FAD.</td><td>Electrons from H<sub>2</sub>O → PSII (P680) → plastoquinone → cytochrome b<sub>6</sub>-f → plastocyanin → PSI (P700) → ferredoxin → NADP<sup>+</sup> reductase. Energy comes from <strong>light</strong>, absorbed twice (at PSII and PSI). Final acceptor: <strong>NADP<sup>+</sup></strong>. Products: NADPH, O<sub>2</sub> (by-product) and an H<sup>+</sup> gradient.</td></tr>
<tr><td><strong>4. ATP synthesis</strong><br>H<sup>+</sup> pumps, chemiosmosis, protein complex</td><td>Complexes I, III and IV pump H<sup>+</sup> from the matrix into the <strong>intermembrane space</strong>. H<sup>+</sup> flows back into the <strong>matrix</strong> through <strong>ATP synthase</strong> (chemiosmosis). Called <strong>oxidative phosphorylation</strong>.</td><td>The cytochrome b<sub>6</sub>-f complex pumps H<sup>+</sup> from the stroma into the <strong>thylakoid lumen</strong>, and water splitting releases more H<sup>+</sup> there. H<sup>+</sup> flows back into the <strong>stroma</strong> through <strong>ATP synthase</strong> (chemiosmosis; class value 1 ATP per 4 H<sup>+</sup>). Called <strong>photophosphorylation</strong>.</td></tr>
<tr><td><strong>5. Organelle structure and function</strong><br>inner membrane, where H<sup>+</sup> collects, where ATP is made</td><td>Double membrane. The folded <strong>inner membrane (cristae)</strong> holds the ETC and ATP synthase. H<sup>+</sup> collects in the <strong>intermembrane space</strong>. ATP is made in the <strong>matrix</strong>, where the Krebs cycle uses some of the products.</td><td>Double membrane plus an internal membrane system. The <strong>thylakoid membrane</strong> holds the photosystems, ETC and ATP synthase. H<sup>+</sup> collects in the <strong>thylakoid lumen</strong>. ATP (and NADPH) are made in the <strong>stroma</strong>, where the Calvin cycle uses them.</td></tr>
</tbody></table></div>

<h4>Matching the parts</h4>
<p>The two organelles are built on the same plan. In both, an electron transport chain in a membrane pumps H<sup>+</sup> into a small enclosed space, and ATP synthase lets it flow back out into the large fluid compartment where the cycle enzymes are.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Mitochondrion</th><th>Chloroplast</th><th>Shared job</th></tr></thead>
<tbody>
<tr><td>Inner membrane (cristae)</td><td><strong>Thylakoid membrane</strong></td><td>Holds the electron transport chain and ATP synthase; impermeable to H<sup>+</sup></td></tr>
<tr><td>Intermembrane space</td><td><strong>Thylakoid lumen</strong></td><td>Small space where H<sup>+</sup> collects (high [H<sup>+</sup>], low pH)</td></tr>
<tr><td>Matrix</td><td><strong>Stroma</strong></td><td>Fluid with the cycle's enzymes (Krebs / Calvin); ATP is released here</td></tr>
</tbody></table></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The chloroplast part that matches the mitochondrion's inner membrane is the <strong>thylakoid membrane</strong>, not the chloroplast's own inner membrane. And the intermembrane space matches the <strong>thylakoid lumen</strong>, not the stroma. Notice the direction: mitochondria pump H<sup>+</sup> <em>outward</em> (from the matrix toward the outside), while chloroplasts pump H<sup>+</sup> <em>inward</em> (from the stroma into the thylakoids). In both, the ATP ends up in the compartment that uses it.</p></div>
<p data-tier="extra">Both organelles also have their own small circular DNA and ribosomes: evidence that both descend from bacteria engulfed by an early cell (the endosymbiotic theory).</p>

<h3 data-tier="essential">Calvin cycle review &amp; research questions</h3>
<p>The first five questions are the Research &amp; Review questions from the end of the Calvin cycle slides (there is no class answer key for these, so full model answers are given). The rest are extra practice. Try each one before opening the answer.</p>
<details class="check"><summary>1. Is energy required or produced for the Calvin cycle?</summary><div class="ans"><p><strong>Energy is required.</strong> The Calvin cycle is <strong>endergonic</strong> and <strong>anabolic</strong>: it builds a high-energy sugar (G3P, then glucose) from low-energy CO<sub>2</sub>. The energy comes from the light reactions in two forms: <strong>ATP</strong> (energy to phosphorylate PGA in phase 2 and to regenerate RuBP in phase 3) and <strong>NADPH</strong> (high-energy electrons to reduce 1,3-BPG to G3P). Per glucose it uses <strong>18 ATP and 12 NADPH</strong> (9 ATP and 6 NADPH per G3P). Much of that energy ends up stored in the chemical bonds of the sugar, which is why glucose can later be used as fuel in cellular respiration.</p></div></details>
<details class="check"><summary>2. How many molecules of CO<sub>2</sub> need to be fixed to create 1 molecule of glucose?</summary><div class="ans"><p><strong>Six.</strong> Each CO<sub>2</sub> adds one carbon, and glucose has six carbons. In terms of the cycle: 3 CO<sub>2</sub> make one exported G3P (3 C), and two G3P are needed for one glucose, so the 3-CO<sub>2</sub> batch must run twice (six "turns" of one CO<sub>2</sub> each). Along with the 6 CO<sub>2</sub>, the cycle uses 18 ATP and 12 NADPH, makes 12 G3P in total, exports 2 of them, and uses the other 10 to regenerate 6 RuBP.</p></div></details>
<details class="check"><summary>3. What is Rubisco activase?</summary><div class="ans"><p>Rubisco activase is a separate enzyme (not on the slides) whose job is to <strong>switch RuBisCO on</strong>. RuBisCO's active site easily gets blocked by <strong>sugar phosphates</strong> that bind tightly and won't let go: RuBP itself can lock onto an inactive active site, and the plant makes other inhibitory sugar phosphates, especially in the dark. A blocked RuBisCO can't fix CO<sub>2</sub>.</p><p>Rubisco activase <strong>uses energy from ATP</strong> to change RuBisCO's shape and <strong>pull these inhibitory sugar phosphates out of the active site</strong>. The freed active site can then be activated (it binds a CO<sub>2</sub> and a Mg<sup>2+</sup> ion that prepare it for catalysis) and start fixing carbon. Because activase depends on ATP and on signals from the light reactions, it is <strong>light-activated</strong>: in the light it keeps RuBisCO working, and in the dark it shuts down, so RuBisCO stays inhibited at night.</p></div></details>
<details class="check"><summary>4. What would happen if Rubisco was not activated? Be specific.</summary><div class="ans"><p>RuBisCO would stay <strong>inactive</strong>, with its active sites blocked, so the chain of effects would be:</p><ul>
<li><strong>No carbon fixation:</strong> CO<sub>2</sub> would not be attached to RuBP, so no PGA, no G3P and no sugar would be made. RuBP would build up because nothing uses it, and CO<sub>2</sub> would build up inside the leaf.</li>
<li><strong>The Calvin cycle stops:</strong> with no PGA, phases 2 and 3 have nothing to work on.</li>
<li><strong>ATP and NADPH back up:</strong> they would no longer be used, so ADP, P<sub>i</sub> and NADP<sup>+</sup> would not be returned to the thylakoids.</li>
<li><strong>The light reactions slow down:</strong> without NADP<sup>+</sup>, electrons at the end of photosystem I have no final acceptor, so non-cyclic electron flow stops; without ADP, ATP synthase can't make ATP. Less water is split and less O<sub>2</sub> is released.</li>
<li><strong>The plant can't make food:</strong> it would have to use stored starch for respiration, could not grow, and would eventually starve.</li>
</ul></div></details>
<details class="check"><summary>5. Phosphorus is one of the main minerals in fertilizers. Discuss its role in relation to photosynthesis.</summary><div class="ans"><p>Phosphorus, taken up by the roots as phosphate, is part of almost every molecule photosynthesis depends on:</p><ul>
<li><strong>ATP</strong> (and ADP and P<sub>i</sub>): the energy currency made by the light reactions and spent in the Calvin cycle. Without phosphate there is no ATP.</li>
<li><strong>NADPH / NADP<sup>+</sup></strong>: the electron carrier contains phosphate groups (the "P" in NADP is an extra phosphate).</li>
<li><strong>Calvin cycle intermediates</strong>: RuBP (ribulose-1,5-<em>bis</em>phosphate), PGA (3-<em>phospho</em>glycerate), 1,3-BPG and G3P (glyceraldehyde-3-<em>phosphate</em>) are all phosphorylated sugars or acids. The cycle can't run without them.</li>
<li><strong>Phospholipids</strong>: the thylakoid membranes (which hold the photosystems, ETC and ATP synthase) and the chloroplast envelope are built from phospholipids, and an intact membrane is needed to hold the H<sup>+</sup> gradient.</li>
<li><strong>DNA and RNA</strong>: nucleotides contain phosphate. The genes for photosynthetic proteins (including chloroplast DNA, which codes for part of RuBisCO) and the RNA that makes them need phosphorus.</li>
</ul><p>So a phosphorus-deficient plant makes less ATP, runs the Calvin cycle slowly, makes less sugar and grows poorly, which is why phosphorus is a main ingredient in fertilizers.</p></div></details>
<details class="check" data-tier="likely"><summary>Extra: Which molecules does the Calvin cycle send back to the light reactions, and why does that matter?</summary><div class="ans"><p><strong>ADP + P<sub>i</sub></strong> and <strong>NADP<sup>+</sup></strong>. The light reactions need ADP to make ATP (by photophosphorylation) and NADP<sup>+</sup> to accept electrons at the end of photosystem I. If the Calvin cycle stopped, these would run out and the light reactions would slow down as well. Each stage depends on the other.</p></div></details>
<details class="check" data-tier="likely"><summary>Extra: A leaf is fed radioactive <sup>14</sup>CO<sub>2</sub> for 3 seconds. In which molecule will most of the radioactivity be found, and why?</summary><div class="ans"><p>In <strong>PGA</strong> (3-phosphoglycerate). RuBisCO attaches the CO<sub>2</sub> to RuBP, and the unstable 6-carbon product immediately splits into two PGA, the first stable product of fixation (which is why the plant is a C3 plant). Only with longer times does the label move on to G3P, sugars, sucrose and starch.</p></div></details>
<details class="check" data-tier="extra"><summary>Extra: A plant in bright light is suddenly put in the dark. Predict what happens to the amounts of PGA and RuBP in its chloroplasts. Explain.</summary><div class="ans"><p><strong>PGA rises and RuBP falls.</strong> RuBisCO doesn't use ATP or NADPH, so for a short while it keeps fixing CO<sub>2</sub> onto the RuBP that is left, making PGA. But phase 2 (PGA → G3P) and phase 3 (G3P → RuBP) need ATP and NADPH, which are no longer being made. So PGA piles up with nowhere to go, and RuBP is used up but not replaced.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
<li><strong>Goal:</strong> use ATP and NADPH from the light reactions to make carbohydrate from atmospheric CO<sub>2</sub>. Anabolic, endergonic; CO<sub>2</sub> is reduced.</li>
<li><strong>Light-independent</strong>: no step uses light directly, but the cycle depends on the light reactions for ATP and NADPH and stops soon after the light goes off. (The notes' "light dependent" wording is flipped.)</li>
<li><strong>Location: stroma</strong>, where ATP synthase and NADP<sup>+</sup> reductase release ATP and NADPH. ADP + P<sub>i</sub> and NADP<sup>+</sup> go back to the thylakoids.</li>
<li><strong>Phase 1, carbon fixation:</strong> <strong>RuBisCO</strong> (ribulose-1,5-bisphosphate carboxylase/oxygenase) adds 3 CO<sub>2</sub> to 3 <strong>RuBP</strong> (5C) → 3 unstable 6C intermediates → <strong>6 PGA</strong> (3-phosphoglycerate, 3C). No ATP or NADPH.</li>
<li><strong>C3 plant</strong> = first stable product of carbon fixation has 3 carbons (PGA).</li>
<li><strong>Phase 2, reduction:</strong> 6 ATP phosphorylate 6 PGA → 6 <strong>1,3-BPG</strong>; 6 NADPH reduce them → 6 <strong>G3P</strong> (= PGAL). <strong>1 G3P exits</strong> as the product.</li>
<li><strong>Phase 3, regeneration:</strong> 3 ATP rearrange 5 G3P (15 C) into 3 RuBP (15 C).</li>
<li><strong>Totals:</strong> per G3P = 3 CO<sub>2</sub>, 9 ATP, 6 NADPH. Per glucose = <strong>6 CO<sub>2</sub>, 18 ATP, 12 NADPH</strong> (12 G3P made, 2 exported, 10 rebuild 6 RuBP). Per CO<sub>2</sub> = 3 ATP + 2 NADPH. One G3P per PGA, never two.</li>
<li>The three CO<sub>2</sub> are fixed <strong>one at a time</strong>; the "3 CO<sub>2</sub>" diagrams just batch them so the counts are whole numbers.</li>
<li><strong>More ATP than NADPH</strong> (3 : 2) is needed, so cyclic electron flow (PSI only) tops up ATP.</li>
<li><strong>G3P</strong> becomes glucose (2 G3P), sucrose (transport), starch (storage), cellulose (cell walls), and carbon skeletons for amino acids and fatty acids.</li>
<li><strong>RuBisCO's flaw:</strong> it evolved when there was almost no O<sub>2</sub>; at high temperatures it prefers O<sub>2</sub>, causing wasteful <strong>photorespiration</strong>, worst in hot, dry (arid and semiarid) places.</li>
<li><strong>Photosynthesis and respiration</strong> are reverse reactions: matter cycles between them, energy flows one way (light → chemical → ATP → heat). Thylakoid membrane ↔ inner membrane (cristae), lumen ↔ intermembrane space, stroma ↔ matrix. Plants do both.</li>
</ul>
`
});

/* ===================================================================
   2.11 C4 & CAM Plants
   =================================================================== */
window.LESSONS.push({
  id: "2.11",
  title: "C4 & CAM Plants",
  stage: "c4cam",
  where: "Mesophyll and bundle sheath cells; vacuoles",
  summary: "On hot, dry days C3 plants close their stomata, CO2 runs low and RuBisCO starts adding O2 to RuBP, wasting carbon and energy in photorespiration. C4 plants (corn, sugar cane) and CAM plants (cacti, pineapple) avoid this by first fixing CO2 with PEP carboxylase and then releasing it around RuBisCO: C4 plants separate the two steps in space (mesophyll and bundle sheath cells), CAM plants in time (night and day).",
  objectives: [
    "Describe the problem C3 plants face on hot, dry days and explain why closing the stomata lowers CO2 and raises O2 inside the leaf.",
    "Compare RuBisCO's carboxylase and oxygenase reactions and explain how temperature and the CO2 : O2 ratio decide which one happens.",
    "Describe photorespiration (reactants, products, organelles involved, cost) and explain why it is wasteful and why it still exists.",
    "Explain the shared strategy of C4 and CAM plants: concentrating CO2 around RuBisCO using PEP carboxylase.",
    "Describe C4 photosynthesis step by step, including mesophyll and bundle sheath cells, plasmodesmata, oxaloacetate, malate, pyruvate and the ATP cost of regenerating PEP.",
    "Describe CAM photosynthesis at night and during the day, including malic acid storage in vacuoles.",
    "Compare C3, C4 and CAM plants: examples, environment, first stable product, type of separation, stomata, photorespiration, water use and ATP cost."
  ],
  html: `
<h3 data-tier="essential">C3 plants: a quick recap</h3>
<p>In lesson 2.10 you saw how every plant starts the Calvin cycle: <strong>RuBisCO adds CO<sub>2</sub> to RuBP</strong>, and the product is the 3-carbon compound <strong>3-phosphoglycerate (PGA)</strong>. In a <span class="term">C3 plant</span>, that is the <em>only</em> way CO<sub>2</sub> is fixed, so PGA is the first stable product, and the 3 carbons give the group its name.</p>
<p>Most plants are C3 plants: the textbook lists soybeans, Kentucky bluegrass and sunflowers, and wheat, rice, oats, potatoes and most trees are C3 as well. (The class slide pictures common ivy.) In a C3 plant everything happens in the <strong>mesophyll cells</strong>, and the stomata are open during the day while photosynthesis runs.</p>
<p>The C3 pathway is the cheapest way to fix carbon: <strong>3 ATP and 2 NADPH per CO<sub>2</sub></strong>, with no extra steps. One class slide sums it up: C3 photosynthesis is <strong>energy efficient</strong>, but in hot climates it <strong>loses a lot of water to evaporation</strong>. C3 plants do best in <strong>cool, moist</strong> environments. This lesson is about what goes wrong when it's hot and dry, and how two other groups of plants solved it.</p>

<h3 data-tier="essential">The problem of being a C3 plant: closed stomata</h3>
<p>Leaves take in CO<sub>2</sub> through <span class="term">stomata</span>, pores in the leaf surface (mostly on the underside), each opened and closed by a pair of <strong>guard cells</strong>. The catch is that an open stoma lets water vapour out just as easily as it lets CO<sub>2</sub> in. This water loss is called <span class="term">transpiration</span>. A plant cannot take in CO<sub>2</sub> without losing some water, so every plant is always trading water for carbon.</p>
<p>On <strong>hot, dry days</strong>, water evaporates fast, so guard cells <strong>close the stomata</strong> to keep the plant from wilting. That saves water, but it changes the gases inside the leaf:</p>
<ul>
<li><strong>CO<sub>2</sub> goes down.</strong> The Calvin cycle keeps using the CO<sub>2</sub> in the leaf's air spaces, and no new CO<sub>2</sub> can come in.</li>
<li><strong>O<sub>2</sub> goes up.</strong> The light reactions keep splitting water in the sunlight and releasing O<sub>2</sub>, and the O<sub>2</sub> can't get out.</li>
<li><strong>Carbohydrate production goes down</strong>, both because there is less CO<sub>2</sub> to fix and because of what RuBisCO does next.</li>
</ul>
<p>So inside a C3 leaf on a hot, dry, sunny afternoon, the <strong>CO<sub>2</sub> : O<sub>2</sub> ratio falls</strong> at exactly the moment the temperature is highest. That combination is the worst possible one for RuBisCO.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Main problem for C3 plants: <strong>stomata close on hot, dry days</strong> → <strong>↓ internal CO<sub>2</sub></strong> (and O<sub>2</sub> builds up) → <strong>↓ carbohydrate production</strong>, and RuBisCO starts fixing O<sub>2</sub> instead of CO<sub>2</sub> (photorespiration).</p></div>

<h3 data-tier="essential">RuBisCO's two reactions</h3>
<p>Remember RuBisCO's full name: ribulose-1,5-bisphosphate <strong>carboxylase/oxygenase</strong>. It can catalyze two different reactions with RuBP, and both happen in the <strong>same active site</strong>:</p>
<div class="compare">
<div><h4>Carboxylase reaction (useful)</h4><ul>
<li>RuBP (5C) + <strong>CO<sub>2</sub></strong> → <strong>2 PGA</strong> (3C each)</li>
<li>Called <strong>carboxylation</strong> of RuBP</li>
<li>Both PGA go on through the Calvin cycle to make sugar</li>
<li>Net result: one carbon gained from the air</li>
</ul></div>
<div><h4>Oxygenase reaction (wasteful)</h4><ul>
<li>RuBP (5C) + <strong>O<sub>2</sub></strong> → <strong>1 PGA</strong> (3C) + <strong>1 phosphoglycolate</strong> (2C)</li>
<li>Called <strong>oxidation</strong> (more precisely, oxygenation) of RuBP</li>
<li>Phosphoglycolate is toxic and useless; recycling it costs energy</li>
<li>Net result: carbon and energy <strong>lost</strong></li>
</ul></div>
</div>
<p>Because CO<sub>2</sub> and O<sub>2</sub> compete for the same active site, which reaction happens depends on two things:</p>
<ol class="steps">
<li><p class="step-head">The CO<sub>2</sub> : O<sub>2</sub> ratio</p><p>When CO<sub>2</sub> is plentiful, it wins most of the time. When O<sub>2</sub> is more plentiful than CO<sub>2</sub> (as in a leaf with closed stomata), O<sub>2</sub> binds more often. The slide puts it bluntly: under these conditions RuBisCO catalyzes <strong>oxidation of RuBP more often than carboxylation</strong>. Even under normal conditions, the textbook says carboxylation happens only about four times as often as oxidation, so roughly 20% of fixed carbon is lost.</p></li>
<li><p class="step-head">Temperature</p><p>Heat changes RuBisCO's shape, which shifts its affinity. The textbook gives an optimum of about 15–25 °C for C3 photosynthesis but 30–47 °C for photorespiration, so as a C3 leaf heats up, photosynthesis levels off and starts to fall while photorespiration is still climbing.</p></li>
</ol>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>A temperature change → a <strong>change in RuBisCO's shape</strong> → a <strong>shift in its affinity</strong>. <strong>High temperature = greater affinity for O<sub>2</sub>. Low temperature = greater affinity for CO<sub>2</sub>.</strong> That is why the slide in lesson 2.10 said O<sub>2</sub> becomes RuBisCO's "preferred substrate" at high temperatures.</p></div>
<p data-tier="extra">A second effect adds to the first: as water warms up, the amount of CO<sub>2</sub> that can dissolve in it falls faster than the amount of O<sub>2</sub>, so the fluid around RuBisCO holds relatively less CO<sub>2</sub> on a hot day even before the stomata close.</p>

<h3 data-tier="essential">Photorespiration</h3>
<p><span class="term">Photorespiration</span> is what happens when RuBisCO adds <strong>O<sub>2</sub> instead of CO<sub>2</sub></strong> to RuBP. It's called "photo" because it happens in the light (when RuBisCO is active and O<sub>2</sub> is being released), and "respiration" because, like cellular respiration, it takes in O<sub>2</sub> and gives off CO<sub>2</sub>. But unlike cellular respiration, it <strong>makes no ATP</strong>. It uses it up.</p>
<ol class="steps">
<li><p class="step-head">RuBisCO adds O<sub>2</sub> to RuBP</p><p>The 5-carbon RuBP is split into <strong>one PGA</strong> (3 C) and <strong>one phosphoglycolate (PG)</strong> (2 C). Count the carbons: 5 = 3 + 2. Instead of the two PGA that CO<sub>2</sub> would have given, the plant gets one.</p></li>
<li><p class="step-head">PG is toxic and must be removed</p><p>Phosphoglycolate is <strong>toxic</strong> (it blocks enzymes of the Calvin cycle), and the plant has no use for it. It can't be fed straight back into the cycle.</p></li>
<li><p class="step-head">A salvage pathway rescues some of the carbon</p><p>PG undergoes a long series of reactions to break it down and <strong>salvage some of the lost carbon</strong>. The pathway passes through <strong>three organelles</strong>: the chloroplast, the <strong>peroxisome</strong> (which produces toxic hydrogen peroxide, H<sub>2</sub>O<sub>2</sub>, and then breaks it down) and the <strong>mitochondrion</strong> (where CO<sub>2</sub> is released). The rescued carbon returns to the chloroplast as PGA.</p></li>
<li><p class="step-head">The cost</p><p>The salvage pathway <strong>uses ATP and NADPH</strong>, and the overall result is a <strong>loss of 25% of the carbon</strong>: for every four carbons that enter the pathway as PG, three come back as PGA and one leaves as CO<sub>2</sub>.</p></li>
</ol>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>You <strong>don't have to know the full pathway</strong>; it's a huge multi-organelle chain. Just know that it is <strong>very wasteful</strong>: carbon and energy are lost, and nothing useful is made. The plant spends energy only to get rid of something it never wanted.</p></div>

<figure class="diagram">
<svg viewBox="0 0 640 340" role="img" aria-labelledby="p211a-t p211a-d">
<title id="p211a-t">RuBisCO's two reactions: carbon fixation versus photorespiration</title>
<desc id="p211a-d">RuBP (5 carbons) binds to RuBisCO. On the left, when CO2 is plentiful and it is cool, RuBisCO adds CO2, giving 2 PGA with all 6 carbons kept, which go into the Calvin cycle to make G3P and sugar. On the right, when it is hot and dry with low CO2 and high O2, RuBisCO adds O2, giving 1 PGA and 1 toxic 2-carbon phosphoglycolate. The phosphoglycolate goes through a salvage pathway in the chloroplast, peroxisome and mitochondrion that uses ATP and NADPH and releases CO2, losing 25% of the carbon.</desc>
<defs>
<marker id="p211a-mf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--leaf)"/></marker>
<marker id="p211a-mb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="11" markerHeight="11" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--bad)"/></marker>
</defs>
<rect x="250" y="20" width="140" height="40" rx="10" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2"/>
<line x1="320" y1="60" x2="320" y2="78" style="stroke:var(--ink-2);stroke-width:2"/>
<rect x="270" y="78" width="100" height="28" rx="14" style="fill:var(--surface);stroke:var(--leaf);stroke-width:2"/>
<line x1="290" y1="106" x2="178" y2="157" style="stroke:var(--leaf);stroke-width:3" marker-end="url(#p211a-mf)"/>
<line x1="350" y1="106" x2="462" y2="157" style="stroke:var(--bad);stroke-width:3" marker-end="url(#p211a-mb)"/>
<rect x="60" y="160" width="230" height="56" rx="10" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2"/>
<rect x="350" y="160" width="250" height="56" rx="10" style="fill:var(--surface-2);stroke:var(--bad);stroke-width:2"/>
<line x1="175" y1="216" x2="175" y2="249" style="stroke:var(--leaf);stroke-width:3" marker-end="url(#p211a-mf)"/>
<line x1="475" y1="216" x2="475" y2="249" style="stroke:var(--bad);stroke-width:3" marker-end="url(#p211a-mb)"/>
<rect x="60" y="252" width="230" height="60" rx="10" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2"/>
<rect x="350" y="252" width="250" height="78" rx="10" style="fill:var(--surface-2);stroke:var(--bad);stroke-width:2"/>
<text x="24" y="36" style="fill:var(--ink);font-size:14px;font-weight:700">Carbon fixation</text>
<text x="24" y="54" style="fill:var(--ink-2);font-size:12px">cool, CO₂ plentiful</text>
<text x="616" y="36" text-anchor="end" style="fill:var(--ink);font-size:14px;font-weight:700">Photorespiration</text>
<text x="616" y="54" text-anchor="end" style="fill:var(--ink-2);font-size:12px">hot and dry: CO₂ low, O₂ high</text>
<text x="320" y="45" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">RuBP (5C)</text>
<text x="320" y="97" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">RuBisCO</text>
<text x="210" y="124" text-anchor="end" style="fill:var(--ink);font-size:13px;font-weight:700">+ CO₂ (carboxylase)</text>
<text x="430" y="124" style="fill:var(--ink);font-size:13px;font-weight:700">+ O₂ (oxygenase)</text>
<text x="175" y="184" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">2 PGA</text>
<text x="175" y="204" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">3C + 3C: all 6 carbons kept</text>
<text x="475" y="184" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">1 PGA + 1 phosphoglycolate</text>
<text x="475" y="204" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">3C + 2C (toxic)</text>
<text x="175" y="277" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Calvin cycle</text>
<text x="175" y="297" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">→ G3P → sugar</text>
<text x="475" y="274" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Salvage pathway</text>
<text x="475" y="292" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">chloroplast → peroxisome →</text>
<text x="475" y="308" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">mitochondrion; uses ATP + NADPH</text>
<text x="475" y="324" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">releases CO₂: 25% of that C lost</text>
</svg>
<figcaption>Same enzyme, same active site, two outcomes. With CO<sub>2</sub> (left), RuBisCO makes 2 PGA and the Calvin cycle turns them into sugar. With O<sub>2</sub> (right), it makes 1 PGA and 1 toxic phosphoglycolate, which must be recycled through three organelles at a cost of ATP and NADPH, losing a quarter of its carbon as CO<sub>2</sub>.</figcaption>
</figure>

<h4>How much does it cost? A worked comparison</h4>
<p>One class slide compares six RuBisCO reactions with CO<sub>2</sub> against six with O<sub>2</sub>. Following the carbons shows why photorespiration is so damaging:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Normal Calvin cycle (6 CO<sub>2</sub>)</th><th>Photorespiration (6 O<sub>2</sub>)</th></tr></thead>
<tbody>
<tr><td>RuBisCO reaction</td><td>6 RuBP + 6 CO<sub>2</sub> → 12 PGA (36 C)</td><td>6 RuBP + 6 O<sub>2</sub> → 6 PGA (18 C) + 6 PG (12 C)</td></tr>
<tr><td>Salvage</td><td>None needed</td><td>6 PG (12 C) → 3 PGA (9 C) + <strong>3 CO<sub>2</sub> lost</strong></td></tr>
<tr><td>G3P available</td><td>12 G3P (36 C)</td><td>9 G3P (27 C)</td></tr>
<tr><td>Outcome</td><td>10 G3P rebuild 6 RuBP; <strong>2 G3P exit → 1 glucose</strong></td><td>Not even enough carbon to rebuild 6 RuBP (30 C); <strong>no glucose made</strong></td></tr>
<tr><td>Net carbon</td><td><strong>Gain of 6 fixed C</strong></td><td><strong>Loss of 3 fixed C</strong></td></tr>
</tbody></table></div>
<p>And photorespiration uses ATP and NADPH along the way, so the plant pays energy to go backwards. The textbook estimates that C3 plants lose from a quarter to a half of the carbon they fix to photorespiration in hot conditions.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Don't confuse the two percentages. The <strong>class value of 25%</strong> is the share of carbon lost from the phosphoglycolate that goes through the salvage pathway (1 C in every 4). The textbook's "about 20%" (normal conditions) and "a quarter to a half" (hot conditions) describe how much of <em>all</em> the carbon a C3 plant fixes is lost. On a test, use the class value unless the question gives other data.</p></div>
<p data-tier="extra">For the curious, here is the salvage pathway in outline. In the chloroplast, phosphoglycolate loses its phosphate to become glycolate. In the peroxisome, glycolate reacts with O<sub>2</sub>, making H<sub>2</sub>O<sub>2</sub> (destroyed by the enzyme catalase), and is converted into the amino acid <strong>glycine</strong>. In the mitochondrion, two glycines are combined into the amino acid <strong>serine</strong>, releasing CO<sub>2</sub> and ammonia (NH<sub>3</sub>). Serine goes back to the peroxisome, is converted to glycerate, and returns to the chloroplast, where ATP turns it into PGA. Recapturing the ammonia costs more ATP and reducing power. That is why your notes mention amino acids: the carbon passes through two of them on the way back.</p>

<h3 data-tier="likely">Why does photorespiration exist?</h3>
<p>If photorespiration is so wasteful, why hasn't evolution removed it? The textbook's answer is that it is an <strong>evolutionary leftover</strong>:</p>
<ul>
<li>RuBisCO evolved in early photosynthetic prokaryotes, billions of years ago, when the atmosphere was <strong>rich in CO<sub>2</sub> and had almost no O<sub>2</sub></strong>. Under those conditions the oxygenase reaction almost never happened, so it didn't matter.</li>
<li>Photosynthesis released O<sub>2</sub> as a by-product, and over a very long time O<sub>2</sub> built up in the atmosphere. That made life possible for aerobic organisms like us, but it also meant RuBisCO now met O<sub>2</sub> all the time.</li>
<li>The oxygenase activity uses the <strong>same active site</strong> as carbon fixation. Any change that stops RuBisCO from binding O<sub>2</sub> seems to also make it worse at binding CO<sub>2</sub>. Plants never evolved a modified RuBisCO, or a new enzyme, that fixes CO<sub>2</sub> but ignores O<sub>2</sub>.</li>
</ul>
<p>Instead, some plants evolved a work-around: if you can't change the enzyme, change its surroundings. Keep RuBisCO bathed in so much CO<sub>2</sub> that O<sub>2</sub> rarely gets a chance to bind. That is the idea behind both C4 and CAM plants.</p>

<h3 data-tier="essential">The solution: concentrate CO<sub>2</sub> around RuBisCO</h3>
<p>The class slides call C4 and CAM plants the <strong>two evolutionary solutions</strong> to the C3 dilemma in <strong>hot and dry</strong> environments. Both <strong>evolved to prevent photorespiration</strong>, and they use the same trick.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The main idea: <strong>RuBisCO stops grabbing O<sub>2</sub> if there is a lot of CO<sub>2</sub> around it.</strong> So these plants soak up extra CO<sub>2</sub> and keep a store of it, so that RuBisCO is always surrounded by CO<sub>2</sub> and rarely binds O<sub>2</sub>. They do it with a different enzyme, <strong>PEP carboxylase</strong>, which has a high affinity for CO<sub>2</sub> instead of O<sub>2</sub>.</p></div>
<p><span class="term">PEP carboxylase</span> is the key enzyme. It attaches CO<sub>2</sub> (in its dissolved form, bicarbonate, HCO<sub>3</sub><sup>−</sup>) to a 3-carbon molecule called <span class="term">PEP</span> (phosphoenolpyruvate), making the 4-carbon acid <span class="term">oxaloacetate</span> (OAA). Two properties make it ideal for the job:</p>
<ul>
<li><strong>It has no affinity for O<sub>2</sub>.</strong> It never adds O<sub>2</sub> to anything, so it can't cause photorespiration, no matter how much O<sub>2</sub> builds up.</li>
<li><strong>It has a very high affinity for CO<sub>2</sub>.</strong> It can grab CO<sub>2</sub> even when there is very little of it, for example when the stomata are almost closed.</li>
</ul>
<p>So both strategies have <strong>two fixation steps</strong>:</p>
<ol class="steps">
<li><p class="step-head">First fixation: PEP carboxylase</p><p>CO<sub>2</sub> is captured into a <strong>4-carbon organic acid</strong> (oxaloacetate, then malate). Because this first stable product has 4 carbons, these plants are said to use the "C4" pathway. The 4-carbon acid works like a CO<sub>2</sub> carrier or storage tank.</p></li>
<li><p class="step-head">Second fixation: RuBisCO</p><p>The 4-carbon acid later releases its CO<sub>2</sub> right next to RuBisCO, at a high concentration. RuBisCO fixes it into the ordinary <strong>Calvin cycle</strong>, and because CO<sub>2</sub> now far outnumbers O<sub>2</sub>, photorespiration almost disappears.</p></li>
</ol>
<p>The two groups differ only in <strong>how they keep the two steps apart</strong>. <strong>C4 plants</strong> separate them in <strong>space</strong> (two different types of cell). <strong>CAM plants</strong> separate them in <strong>time</strong> (night and day, in the same cell).</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>C4 and CAM plants <strong>still use RuBisCO and the Calvin cycle</strong>. PEP carboxylase doesn't replace the Calvin cycle; it adds a CO<sub>2</sub>-collecting step <em>before</em> it. Sugar is still made from G3P, exactly as in lesson 2.10.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Spatial = space = different cells = C4.</strong> <strong>Temporal = time = night vs day = CAM.</strong> Or: <strong>CAM plants open their stomata when the moon is up</strong> ("Cacti Act at Midnight").</p></div>

<h3 data-tier="essential">C4 plants: examples, environment and leaf anatomy</h3>
<p><span class="term">C4 plants</span> include <strong>tropical grasses, sugar cane and corn</strong> (class slide), as well as sorghum and millet; several thousand species in all. They are <strong>adapted for high heat and intense sunlight</strong>, and they use <strong>spatial separation</strong> between the initial CO<sub>2</sub> fixation and the Calvin cycle.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>"Adapted for high heat and intense sunlight" does <strong>not necessarily mean dry</strong>. C4 plants thrive in hot, bright places whether or not water is short. Think of a corn field in an Ontario July, or a tropical grassland after the rains. (Extreme drought is the CAM plants' specialty.)</p></div>
<h4>Two kinds of photosynthetic cell</h4>
<p>A C3 leaf does all its photosynthesis in the mesophyll. A C4 leaf has <strong>two types of photosynthetic cells</strong>, each with a different job:</p>
<div class="compare">
<div><h4>Mesophyll cells</h4><ul>
<li>Outer layer, in contact with the air spaces</li>
<li>Contain <strong>PEP carboxylase</strong></li>
<li><strong>Initial CO<sub>2</sub> fixation</strong> happens here</li>
<li>Little or no RuBisCO; no Calvin cycle</li>
</ul></div>
<div><h4>Bundle sheath cells</h4><ul>
<li><strong>Tightly packed around the veins</strong>, surrounded by mesophyll</li>
<li>Contain <strong>RuBisCO</strong> and many chloroplasts</li>
<li>The <strong>Calvin cycle</strong> happens here</li>
<li>Few air spaces, so O<sub>2</sub> from the air is kept away and released CO<sub>2</sub> can't easily escape</li>
</ul></div>
</div>
<p>The cells are arranged in rings: a ring of bundle sheath cells wrapped around each vein, and the mesophyll cells arranged around them. No mesophyll cell is more than two or three cells away from a bundle sheath cell, so the CO<sub>2</sub> carrier never has far to travel. This ring-within-a-ring arrangement is called <span class="term">Kranz anatomy</span> (<em>Kranz</em> is German for "wreath"). Being next to the vein also means the sugar made in the bundle sheath can be loaded straight into the phloem.</p>

<figure class="diagram">
<svg viewBox="0 0 640 292" role="img" aria-labelledby="p211d-t p211d-d">
<title id="p211d-t">Leaf cross-sections of a C3 leaf and a C4 leaf with Kranz anatomy</title>
<desc id="p211d-d">Left, a C3 leaf: upper epidermis, a row of tall palisade mesophyll cells, loosely packed spongy mesophyll cells with air spaces, a vein with a ring of pale bundle sheath cells, and lower epidermis with a stoma. Photosynthesis and the Calvin cycle happen in all the mesophyll cells. Right, a C4 leaf: each vein is surrounded by a ring of large, dark green bundle sheath cells, which is surrounded by a ring of mesophyll cells, like a wreath. The Calvin cycle happens in the bundle sheath cells.</desc>
<text x="160" y="24" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">C3 leaf</text>
<text x="482" y="24" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">C4 leaf (Kranz anatomy)</text>
<g style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.2">
<rect x="20" y="36" width="280" height="16" rx="3"/><rect x="20" y="208" width="280" height="16" rx="3"/>
<rect x="340" y="36" width="284" height="16" rx="3"/><rect x="340" y="208" width="284" height="16" rx="3"/>
</g>
<g style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5">
<ellipse cx="96" cy="216" rx="7" ry="9"/><ellipse cx="112" cy="216" rx="7" ry="9"/>
<ellipse cx="488" cy="216" rx="7" ry="9"/><ellipse cx="504" cy="216" rx="7" ry="9"/>
<circle cx="220" cy="170" r="17"/><circle cx="420" cy="134" r="17"/><circle cx="560" cy="134" r="17"/>
<circle cx="462" cy="272" r="7"/>
</g>
<g style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.3">
<rect x="24" y="56" width="24" height="58" rx="6"/><rect x="52" y="56" width="24" height="58" rx="6"/><rect x="80" y="56" width="24" height="58" rx="6"/><rect x="108" y="56" width="24" height="58" rx="6"/><rect x="136" y="56" width="24" height="58" rx="6"/><rect x="164" y="56" width="24" height="58" rx="6"/><rect x="192" y="56" width="24" height="58" rx="6"/><rect x="220" y="56" width="24" height="58" rx="6"/><rect x="248" y="56" width="24" height="58" rx="6"/><rect x="276" y="56" width="24" height="58" rx="6"/>
<circle cx="40" cy="140" r="13"/><circle cx="78" cy="132" r="13"/><circle cx="112" cy="152" r="13"/><circle cx="150" cy="134" r="13"/><circle cx="60" cy="180" r="13"/><circle cx="100" cy="188" r="13"/><circle cx="140" cy="178" r="13"/><circle cx="168" cy="194" r="11"/><circle cx="272" cy="140" r="13"/><circle cx="280" cy="186" r="13"/>
<circle cx="473" cy="145" r="10"/><circle cx="462" cy="168" r="10"/><circle cx="441" cy="184" r="10"/><circle cx="416" cy="188" r="10"/><circle cx="391" cy="180" r="10"/><circle cx="373" cy="161" r="10"/><circle cx="366" cy="136" r="10"/><circle cx="371" cy="111" r="10"/><circle cx="388" cy="91" r="10"/><circle cx="411" cy="81" r="10"/><circle cx="437" cy="83" r="10"/><circle cx="459" cy="97" r="10"/><circle cx="472" cy="119" r="10"/>
<circle cx="613" cy="145" r="10"/><circle cx="602" cy="168" r="10"/><circle cx="581" cy="184" r="10"/><circle cx="556" cy="188" r="10"/><circle cx="531" cy="180" r="10"/><circle cx="513" cy="161" r="10"/><circle cx="506" cy="136" r="10"/><circle cx="511" cy="111" r="10"/><circle cx="528" cy="91" r="10"/><circle cx="551" cy="81" r="10"/><circle cx="577" cy="83" r="10"/><circle cx="599" cy="97" r="10"/><circle cx="612" cy="119" r="10"/>
<circle cx="30" cy="272" r="7"/>
</g>
<g style="fill:var(--surface);stroke:var(--leaf);stroke-width:1.2">
<circle cx="246" cy="170" r="7"/><circle cx="240" cy="187" r="7"/><circle cx="225" cy="196" r="7"/><circle cx="207" cy="193" r="7"/><circle cx="196" cy="179" r="7"/><circle cx="196" cy="161" r="7"/><circle cx="207" cy="147" r="7"/><circle cx="225" cy="144" r="7"/><circle cx="240" cy="153" r="7"/>
<circle cx="288" cy="272" r="7"/>
</g>
<g style="fill:var(--leaf);fill-opacity:0.45;stroke:var(--leaf);stroke-width:2">
<circle cx="450" cy="134" r="11"/><circle cx="441" cy="155" r="11"/><circle cx="420" cy="164" r="11"/><circle cx="399" cy="155" r="11"/><circle cx="390" cy="134" r="11"/><circle cx="399" cy="113" r="11"/><circle cx="420" cy="104" r="11"/><circle cx="441" cy="113" r="11"/>
<circle cx="590" cy="134" r="11"/><circle cx="581" cy="155" r="11"/><circle cx="560" cy="164" r="11"/><circle cx="539" cy="155" r="11"/><circle cx="530" cy="134" r="11"/><circle cx="539" cy="113" r="11"/><circle cx="560" cy="104" r="11"/><circle cx="581" cy="113" r="11"/>
<circle cx="150" cy="272" r="7"/>
</g>
<text x="160" y="246" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">Calvin cycle in all mesophyll cells</text>
<text x="482" y="246" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">Calvin cycle only in bundle sheath cells</text>
<text x="44" y="277" style="fill:var(--ink);font-size:12px">mesophyll cell</text>
<text x="164" y="277" style="fill:var(--ink);font-size:12px">C4 bundle sheath</text>
<text x="302" y="277" style="fill:var(--ink);font-size:12px">C3 bundle sheath (pale)</text>
<text x="476" y="277" style="fill:var(--ink);font-size:12px">vein (xylem + phloem)</text>
</svg>
<figcaption>Leaf cross-sections (simplified). In a C3 leaf (left), photosynthesis happens throughout the palisade and spongy mesophyll, and the small bundle sheath cells around the vein have few chloroplasts. In a C4 leaf (right), each vein is wrapped in a ring of large, chloroplast-rich bundle sheath cells, with mesophyll cells arranged around them like a wreath: Kranz anatomy.</figcaption>
</figure>

<h3 data-tier="essential">The C4 pathway step by step</h3>
<p>The slide calls this <strong>double CO<sub>2</sub> fixation</strong>: CO<sub>2</sub> is fixed once by PEP carboxylase in the mesophyll and again by RuBisCO in the bundle sheath.</p>
<ol class="steps">
<li><p class="step-head">CO<sub>2</sub> enters a mesophyll cell</p><p>CO<sub>2</sub> diffuses in from the air spaces and dissolves (as bicarbonate) in the cytoplasm of a mesophyll cell.</p></li>
<li><p class="step-head">First fixation: PEP + CO<sub>2</sub> → oxaloacetate</p><p>In the mesophyll, <strong>PEP carboxylase</strong> converts <strong>CO<sub>2</sub> and PEP (3C) into oxaloacetate (4C)</strong>. This happens in the cytoplasm, not in a chloroplast. The first product has <strong>4 carbons</strong>, hence the name <strong>C4 plants</strong>.</p></li>
<li><p class="step-head">Oxaloacetate is reduced to malate</p><p>Oxaloacetate is <strong>reduced to malate</strong> (4C). (Both are familiar: oxaloacetate and malate are also intermediates of the Krebs cycle.)</p></li>
<li><p class="step-head">Malate moves to the bundle sheath</p><p>Malate travels into a neighbouring bundle sheath cell through <span class="term">plasmodesmata</span>, channels that connect the cytoplasm of adjacent plant cells through their cell walls.</p></li>
<li><p class="step-head">Decarboxylation releases CO<sub>2</sub></p><p>In the bundle sheath, malate is <strong>decarboxylated</strong> (a CO<sub>2</sub> is removed) to form <strong>CO<sub>2</sub> and pyruvate</strong> (3C).</p></li>
<li><p class="step-head">Second fixation: the Calvin cycle</p><p>The CO<sub>2</sub>, now at a high concentration, is <strong>fixed by RuBisCO in the Calvin cycle</strong>, exactly as in a C3 plant. The sugar made is loaded into the nearby vein.</p></li>
<li><p class="step-head">Pyruvate goes back and PEP is regenerated</p><p>Pyruvate returns to the mesophyll through plasmodesmata and is converted back into PEP, ready to grab another CO<sub>2</sub>. This step costs energy: <strong>ATP → AMP</strong>, the <strong>equivalent of using 2 ATP</strong> molecules for every pyruvate converted back to PEP.</p></li>
</ol>

<figure class="diagram">
<svg viewBox="0 0 640 392" role="img" aria-labelledby="p211b-t p211b-d">
<title id="p211b-t">The C4 pathway: spatial separation between mesophyll and bundle sheath cells</title>
<desc id="p211b-d">In the mesophyll cell (top), CO2 from the air spaces is added to PEP (3 carbons) by PEP carboxylase, forming oxaloacetate (4 carbons), which is reduced to malate (4 carbons). Malate moves down through plasmodesmata into the bundle sheath cell (bottom), where it is decarboxylated to pyruvate (3 carbons) and CO2. The concentrated CO2 is fixed by RuBisCO in the Calvin cycle, making sugar that goes to the vein. Pyruvate moves back up into the mesophyll cell and is converted back to PEP, using ATP, which becomes AMP and pyrophosphate, the equivalent of 2 ATP.</desc>
<defs>
<marker id="p211b-mk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
<marker id="p211b-mf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--leaf)"/></marker>
</defs>
<rect x="40" y="34" width="560" height="156" rx="18" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2"/>
<rect x="40" y="230" width="560" height="150" rx="18" style="fill:var(--leaf);fill-opacity:0.22;stroke:var(--leaf);stroke-width:3"/>
<g style="fill:var(--surface);stroke:var(--leaf);stroke-width:1.5">
<rect x="90" y="188" width="20" height="44" rx="4"/><rect x="530" y="188" width="20" height="44" rx="4"/>
</g>
<g style="fill:var(--surface);stroke:var(--leaf);stroke-width:2">
<rect x="60" y="110" width="110" height="40" rx="8"/><rect x="246" y="110" width="160" height="40" rx="8"/><rect x="462" y="110" width="120" height="40" rx="8"/>
<rect x="462" y="242" width="120" height="40" rx="8"/><rect x="60" y="242" width="120" height="40" rx="8"/>
<circle cx="330" cy="334" r="30"/>
</g>
<g style="stroke:var(--ink);stroke-width:2.5">
<line x1="208" y1="22" x2="208" y2="126" marker-end="url(#p211b-mk)"/>
<line x1="172" y1="130" x2="244" y2="130" marker-end="url(#p211b-mk)"/>
<line x1="408" y1="130" x2="460" y2="130" marker-end="url(#p211b-mk)"/>
<line x1="540" y1="152" x2="540" y2="240" marker-end="url(#p211b-mk)"/>
<line x1="460" y1="262" x2="182" y2="262" marker-end="url(#p211b-mk)"/>
<line x1="330" y1="264" x2="330" y2="302" marker-end="url(#p211b-mk)"/>
<line x1="100" y1="240" x2="100" y2="152" marker-end="url(#p211b-mk)"/>
</g>
<line x1="362" y1="334" x2="438" y2="334" style="stroke:var(--leaf);stroke-width:3" marker-end="url(#p211b-mf)"/>
<text x="208" y="16" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">CO₂ from air spaces</text>
<text x="56" y="58" style="fill:var(--ink);font-size:13px;font-weight:700">Mesophyll cell</text>
<text x="590" y="58" text-anchor="end" style="fill:var(--ink-2);font-size:12px">1st CO₂ fixation</text>
<text x="115" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">PEP (3C)</text>
<text x="326" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Oxaloacetate (4C)</text>
<text x="522" y="135" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Malate (4C)</text>
<text x="434" y="121" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">reduced</text>
<text x="208" y="170" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">PEP carboxylase</text>
<text x="118" y="214" style="fill:var(--ink);font-size:12px;font-weight:700">ATP → AMP + PPi (= 2 ATP)</text>
<text x="522" y="214" text-anchor="end" style="fill:var(--ink-2);font-size:12px">plasmodesmata</text>
<text x="522" y="267" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Malate (4C)</text>
<text x="120" y="267" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Pyruvate (3C)</text>
<text x="321" y="254" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">decarboxylation</text>
<text x="340" y="290" style="fill:var(--ink);font-size:13px;font-weight:700">CO₂</text>
<text x="330" y="331" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">Calvin</text>
<text x="330" y="346" text-anchor="middle" style="fill:var(--ink);font-size:12px">cycle</text>
<text x="292" y="330" text-anchor="end" style="fill:var(--ink);font-size:12px;font-weight:700">RuBisCO</text>
<text x="446" y="339" style="fill:var(--ink);font-size:13px;font-weight:700">sugar → vein</text>
<text x="56" y="312" style="fill:var(--ink-2);font-size:12px">CO₂ concentrated here</text>
<text x="56" y="370" style="fill:var(--ink);font-size:13px;font-weight:700">Bundle sheath cell</text>
<text x="590" y="370" text-anchor="end" style="fill:var(--ink-2);font-size:12px">2nd CO₂ fixation</text>
</svg>
<figcaption>C4 photosynthesis separates the two fixation steps in space. PEP carboxylase fixes CO<sub>2</sub> in the mesophyll (top); malate carries it through plasmodesmata into the bundle sheath (bottom), where it is released and fixed again by RuBisCO in the Calvin cycle. Pyruvate returns and is turned back into PEP at a cost of 2 ATP equivalents.</figcaption>
</figure>

<h4>Why ATP → AMP counts as 2 ATP</h4>
<p>Converting pyruvate back to PEP is endergonic. The plant pays with one ATP, but it doesn't just take one phosphate off (ATP → ADP); it takes off <strong>two</strong> (ATP → AMP + PP<sub>i</sub>, where PP<sub>i</sub> is a double phosphate, pyrophosphate). To get from AMP back to ATP, the cell has to add two phosphates again (AMP → ADP → ATP), which takes the energy of two ATP. So each CO<sub>2</sub> pumped into the bundle sheath costs the <strong>equivalent of 2 ATP</strong>. (The textbook figure says "one ATP is used"; both statements are true, because one ATP <em>molecule</em> is used but it is broken down twice as far.)</p>
<div class="callout key"><p class="callout-title">On the test</p><ul>
<li><strong>Spatial separation:</strong> initial fixation in the <strong>mesophyll</strong>, Calvin cycle in the <strong>bundle sheath</strong>.</li>
<li><strong>Mesophyll:</strong> PEP carboxylase converts CO<sub>2</sub> + PEP (3C) → oxaloacetate (4C) → reduced to malate (4C).</li>
<li><strong>Bundle sheath:</strong> malate is decarboxylated → CO<sub>2</sub> + pyruvate; CO<sub>2</sub> is fixed by RuBisCO in the Calvin cycle.</li>
<li>Pyruvate → PEP uses ATP → AMP, the <strong>equivalent of 2 ATP</strong>. First product has 4 carbons: "C4".</li>
</ul></div>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>Your notes describe plasmodesmata as "protein channels between cells." More precisely, plasmodesmata are <strong>membrane-lined channels</strong> that pass through the cell walls and join the cytoplasm of neighbouring plant cells, so small molecules like malate and pyruvate can move from cell to cell. They are openings lined by the cells' own plasma membrane, not single protein molecules like the channel proteins in a membrane.</p></div>

<h3 data-tier="likely">The cost and the payoff of C4</h3>
<p>The C4 "pump" isn't free. Add its cost to the Calvin cycle's:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>C3 plant</th><th>C4 plant</th></tr></thead>
<tbody>
<tr><td>Calvin cycle, per CO<sub>2</sub></td><td>3 ATP + 2 NADPH</td><td>3 ATP + 2 NADPH</td></tr>
<tr><td>Regenerating PEP, per CO<sub>2</sub></td><td>none</td><td>2 ATP (ATP → AMP)</td></tr>
<tr><td><strong>Total per CO<sub>2</sub></strong></td><td><strong>3 ATP</strong> + 2 NADPH</td><td><strong>about 5 ATP</strong> + 2 NADPH</td></tr>
<tr><td><strong>Total per glucose (6 CO<sub>2</sub>)</strong></td><td><strong>18 ATP</strong> + 12 NADPH</td><td><strong>about 30 ATP</strong> + 12 NADPH</td></tr>
</tbody></table></div>
<p>So a C4 plant uses <strong>almost twice as much ATP</strong> to make each glucose. Why would that ever be worth it? Because in hot, bright conditions the alternative is worse. The textbook points out that in hot tropical climates, photorespiration in a C3 plant can convert <strong>more than half</strong> of the sugar it makes back into CO<sub>2</sub>. A C4 plant keeps the CO<sub>2</sub> concentration in its bundle sheath cells so high that CO<sub>2</sub> outcompetes O<sub>2</sub> at RuBisCO almost every time. <strong>Photorespiration is minimized and sugar production is maximized.</strong> And in exactly those hot, sunny places, light is plentiful, so the extra ATP is cheap to make.</p>
<p>There is a second payoff: <strong>water</strong>. Because PEP carboxylase can grab CO<sub>2</sub> even when there is very little of it, a C4 plant can keep its stomata <strong>only slightly open</strong> on a hot day and still fix carbon quickly. Less open stomata means less water lost. One class slide lists the trade-off: C4 photosynthesis <strong>minimizes water loss in warm climates</strong> but <strong>requires more energy</strong>.</p>
<div class="compare">
<div><h4>C3 wins when…</h4><ul>
<li>It is cool or mild (photorespiration is low anyway)</li>
<li>Light is limited (cloudy, shaded), so ATP is "expensive"</li>
<li>Water is plentiful</li>
<li>Example: Kentucky bluegrass lawns in a Canadian spring</li>
</ul></div>
<div><h4>C4 wins when…</h4><ul>
<li>It is hot (photorespiration would be high)</li>
<li>Light is intense, so ATP is "cheap"</li>
<li>Water is limited or evaporation is high</li>
<li>Example: crabgrass taking over the same lawn in a hot August</li>
</ul></div>
</div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>C4 plants are not "more efficient" in every way. They are more efficient at <strong>fixing carbon and saving water in hot, bright conditions</strong>, but they spend <strong>more ATP per glucose</strong>. In cool conditions a C3 plant does better.</p></div>

<h3 data-tier="essential">CAM plants: examples and environment</h3>
<p><span class="term">CAM plants</span> are mostly <strong>succulents</strong>, plants with thick, water-storing leaves or stems: <strong>pineapple and cactus</strong> (class slide), the <strong>jade plant</strong> and its relatives in the stonecrop family (the Crassulaceae), and also agave and aloe. They are <strong>adapted for extreme drought</strong>: deserts, dry rocky slopes, and even the branches of rainforest trees, where many orchids and bromeliads live with no soil to hold water.</p>
<p>CAM stands for <span class="term">crassulacean acid metabolism</span>. "Crassulacean" because it was first discovered in the Crassulaceae family; "acid" because these plants store CO<sub>2</sub> overnight as an organic acid.</p>
<p>CAM plants use <strong>temporal separation that fixes CO<sub>2</sub> twice</strong>. Both fixation steps happen in the <strong>same mesophyll cells</strong>, but at <strong>different times of day</strong>. The key difference from every other plant you've met: CAM plants open their stomata <strong>at night</strong> and keep them <strong>closed during the day</strong>. Night air is cooler and more humid, so far less water evaporates through an open stoma at night than in the midday sun.</p>
<div class="callout key"><p class="callout-title">On the test</p><ul>
<li><strong>CAM examples:</strong> succulents such as pineapple and cactus (also jade plant).</li>
<li><strong>Environment:</strong> extreme drought.</li>
<li><strong>Temporal separation</strong> (not spatial): CO<sub>2</sub> fixed twice, at different times, in the same cells.</li>
<li><strong>Stomata open at night</strong> for gas exchange and <strong>close during the day</strong> to minimize water loss.</li>
</ul></div>

<h3 data-tier="essential">CAM by night and by day</h3>
<div class="compare">
<div><h4>At night: stomata open</h4><ul>
<li>CO<sub>2</sub> enters through the open stomata.</li>
<li><strong>PEP carboxylase</strong> fixes it: PEP + CO<sub>2</sub> → oxaloacetate (4C).</li>
<li>Oxaloacetate is converted to <strong>malate (4C)</strong>.</li>
<li>Malate is <strong>stored in the vacuole</strong> (as malic acid) until morning.</li>
<li>No light reactions, so no Calvin cycle yet.</li>
</ul></div>
<div><h4>During the day: stomata closed</h4><ul>
<li>Stomata stay shut, so very little water is lost.</li>
<li>The <strong>light reactions</strong> run, making ATP and NADPH.</li>
<li>Malate leaves the vacuole and is <strong>decarboxylated</strong>, releasing CO<sub>2</sub>.</li>
<li>The CO<sub>2</sub> can't escape through the closed stomata, so it builds up inside the leaf.</li>
<li><strong>RuBisCO fixes it in the Calvin cycle</strong>, making sugar, with very little photorespiration.</li>
</ul></div>
</div>

<figure class="diagram">
<svg viewBox="0 0 640 330" role="img" aria-labelledby="p211c-t p211c-d">
<title id="p211c-t">CAM photosynthesis: temporal separation of night and day</title>
<desc id="p211c-d">Left panel, night with stomata open: CO2 enters through the open stomata, PEP carboxylase adds it to PEP to form oxaloacetate, which becomes malate, which is stored in the vacuole as malic acid, so acidity rises overnight. Right panel, day with stomata closed: malic acid is released from the vacuole, malate is decarboxylated to CO2 and pyruvate, and the CO2 enters the Calvin cycle through RuBisCO, powered by ATP and NADPH from the light reactions, producing sugar. Acidity falls during the day.</desc>
<defs>
<marker id="p211c-mk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
<marker id="p211c-mf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--leaf)"/></marker>
<marker id="p211c-mg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--glyco)"/></marker>
</defs>
<rect x="16" y="40" width="296" height="280" rx="16" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<rect x="328" y="40" width="296" height="280" rx="16" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<g style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2">
<rect x="84" y="102" width="160" height="30" rx="8"/><rect x="84" y="160" width="160" height="30" rx="8"/><rect x="84" y="214" width="160" height="30" rx="8"/>
<rect x="396" y="126" width="160" height="30" rx="8"/><rect x="396" y="184" width="160" height="30" rx="8"/>
<circle cx="476" cy="258" r="30"/>
</g>
<g style="fill:var(--link-soft);stroke:var(--link);stroke-width:2">
<ellipse cx="164" cy="290" rx="122" ry="24"/><ellipse cx="476" cy="80" rx="122" ry="24"/>
</g>
<g style="stroke:var(--ink);stroke-width:2.2">
<line x1="164" y1="72" x2="164" y2="100" marker-end="url(#p211c-mk)"/>
<line x1="164" y1="132" x2="164" y2="158" marker-end="url(#p211c-mk)"/>
<line x1="164" y1="190" x2="164" y2="212" marker-end="url(#p211c-mk)"/>
<line x1="164" y1="244" x2="164" y2="264" marker-end="url(#p211c-mk)"/>
<line x1="476" y1="104" x2="476" y2="124" marker-end="url(#p211c-mk)"/>
<line x1="476" y1="156" x2="476" y2="182" marker-end="url(#p211c-mk)"/>
<line x1="476" y1="214" x2="476" y2="226" marker-end="url(#p211c-mk)"/>
</g>
<line x1="446" y1="258" x2="406" y2="258" style="stroke:var(--leaf);stroke-width:3" marker-end="url(#p211c-mf)"/>
<line x1="550" y1="254" x2="510" y2="259" style="stroke:var(--glyco);stroke-width:2.5" marker-end="url(#p211c-mg)"/>
<text x="164" y="28" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Night: stomata open</text>
<text x="476" y="28" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Day: stomata closed</text>
<text x="164" y="64" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">CO₂ enters through open stomata</text>
<text x="164" y="122" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">PEP (3C) + CO₂</text>
<text x="176" y="150" style="fill:var(--ink-2);font-size:12px">PEP carboxylase</text>
<text x="164" y="180" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Oxaloacetate (4C)</text>
<text x="164" y="234" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Malate (4C)</text>
<text x="164" y="288" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">Vacuole: malic acid stored</text>
<text x="164" y="304" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">acidity rises overnight</text>
<text x="476" y="78" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">Vacuole: malic acid released</text>
<text x="476" y="94" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">acidity falls during the day</text>
<text x="476" y="146" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Malate (4C)</text>
<text x="488" y="174" style="fill:var(--ink-2);font-size:12px">decarboxylation</text>
<text x="476" y="204" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">CO₂ + pyruvate</text>
<text x="476" y="255" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">Calvin</text>
<text x="476" y="270" text-anchor="middle" style="fill:var(--ink);font-size:12px">cycle</text>
<text x="476" y="306" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">RuBisCO</text>
<text x="618" y="232" text-anchor="end" style="fill:var(--ink);font-size:12px;font-weight:700">ATP + NADPH</text>
<text x="618" y="247" text-anchor="end" style="fill:var(--ink-2);font-size:12px">(light reactions)</text>
<text x="400" y="263" text-anchor="end" style="fill:var(--ink);font-size:13px;font-weight:700">sugar</text>
</svg>
<figcaption>CAM photosynthesis separates the two fixation steps in time, inside the same mesophyll cell. At night (left), stomata open and PEP carboxylase fixes CO<sub>2</sub> into malate, stored as malic acid in the vacuole. During the day (right), stomata close, malate releases its CO<sub>2</sub>, and RuBisCO fixes it in the Calvin cycle using ATP and NADPH from the light reactions.</figcaption>
</figure>

<h4>The daily acid cycle</h4>
<p>Because malate is stored as <strong>malic acid</strong>, the cell sap of a CAM plant gets steadily <strong>more acidic through the night</strong> and less acidic through the day, as the acid is used up. That gives you a way to test for CAM, and it answers several textbook questions:</p>
<ul>
<li><strong>Most malate:</strong> at the <strong>end of the night</strong> (around dawn), after a whole night of fixing CO<sub>2</sub>.</li>
<li><strong>Least malate:</strong> at the <strong>end of the day</strong> (late afternoon or dusk), after the Calvin cycle has used it all day.</li>
<li>A CAM leaf picked at dawn tastes noticeably more sour than the same leaf picked in the evening.</li>
</ul>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>CAM plants do <strong>not</strong> run the Calvin cycle at night. The Calvin cycle needs ATP and NADPH from the light reactions, so it runs only during the day, in every type of plant. What happens at night is only the <strong>first</strong> fixation, by PEP carboxylase.</p></div>

<h3 data-tier="likely">The cost of CAM</h3>
<p>The slide's last word on CAM plants is <strong>"Requires more ATP!"</strong> On top of the Calvin cycle's 3 ATP per CO<sub>2</sub>, a CAM plant has to regenerate PEP (from stored starch), pump malic acid into its vacuole against a concentration gradient, and rebuild its starch every day.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>CAM requires <strong>more ATP than C4</strong>: about <strong>one more</strong>. So if C4 costs about 5 ATP per CO<sub>2</sub>, CAM costs about 6. (These are approximate; the exact cost depends on the species and how the extra steps are counted.)</p></div>
<p>CAM plants also <strong>grow slowly</strong> (a class slide lists this as a disadvantage). All the CO<sub>2</sub> a CAM plant will fix in a day must be captured the night before and stored in its vacuoles, and vacuole space is limited. A cactus can't take up more CO<sub>2</sub> in the afternoon, because opening its stomata in the desert sun would cost too much water. In return, CAM plants lose the <strong>least water</strong> of any of the three types for each CO<sub>2</sub> fixed, which is why they can survive where C3 and C4 plants can't.</p>
<p data-tier="extra">Many CAM plants are flexible. The textbook notes that cacti and succulents kept as houseplants show CAM only if they are kept dry; if you overwater them, they stop opening their stomata at night and behave like ordinary C3 plants, opening their stomata during the day and fixing CO<sub>2</sub> only once. Some other plants switch to CAM only during a drought.</p>

<h3 data-tier="essential">C3 vs C4 vs CAM: the big comparison</h3>
<p>This table pulls the whole lesson together. The rows above the line are the ones most likely to be tested.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Feature</th><th>C3 plants</th><th>C4 plants</th><th>CAM plants</th></tr></thead>
<tbody>
<tr><td><strong>Examples</strong></td><td>Wheat, rice, soybeans, sunflowers, Kentucky bluegrass, most trees</td><td>Corn, sugar cane, sorghum, tropical grasses</td><td>Pineapple, cacti, jade plant, agave (succulents)</td></tr>
<tr><td><strong>Adapted for</strong></td><td>Cool, moist conditions</td><td>High heat and intense sunlight (not necessarily dry)</td><td>Extreme drought</td></tr>
<tr><td><strong>First CO<sub>2</sub>-fixing enzyme</strong></td><td>RuBisCO</td><td>PEP carboxylase (then RuBisCO)</td><td>PEP carboxylase (then RuBisCO)</td></tr>
<tr><td><strong>First stable product</strong></td><td>PGA (3C)</td><td>Oxaloacetate (4C) → malate</td><td>Oxaloacetate (4C) → malate</td></tr>
<tr><td><strong>Separation of the two fixations</strong></td><td>None (only one fixation)</td><td><strong>Spatial</strong>: mesophyll vs bundle sheath cells</td><td><strong>Temporal</strong>: night vs day, same cells</td></tr>
<tr><td><strong>Where the Calvin cycle runs</strong></td><td>Mesophyll cells</td><td>Bundle sheath cells</td><td>Mesophyll cells</td></tr>
<tr><td><strong>When the Calvin cycle runs</strong></td><td>Day</td><td>Day</td><td>Day (using CO<sub>2</sub> stored overnight)</td></tr>
<tr><td><strong>Stomata</strong></td><td>Open during the day</td><td>Open during the day, but can be only slightly open</td><td>Open at night, closed during the day</td></tr>
<tr><td><strong>Photorespiration</strong></td><td>High on hot, dry days</td><td>Very low</td><td>Very low</td></tr>
<tr><td>Where CO<sub>2</sub> is held before RuBisCO</td><td>Not held</td><td>Malate, passed straight to the bundle sheath</td><td>Malic acid stored in vacuoles overnight</td></tr>
<tr><td>Water loss per CO<sub>2</sub> fixed</td><td>Highest</td><td>Lower</td><td>Lowest</td></tr>
<tr><td>ATP per CO<sub>2</sub> (approximate)</td><td>3</td><td>about 5</td><td>about 5–6 (class notes: about 1 more than C4)</td></tr>
<tr><td>ATP per glucose (approximate)</td><td>18</td><td>about 30</td><td>more than C4 (roughly 33–36)</td></tr>
<tr><td>Advantage (class slide)</td><td>Energy efficient</td><td>Water loss minimized in warm climates; fast growth</td><td>Water loss minimized in hot climates</td></tr>
<tr><td>Disadvantage (class slide)</td><td>Water lost to evaporation in hot climates; photorespiration</td><td>Requires more energy</td><td>Requires more energy; slow growth</td></tr>
</tbody></table></div>
<p>The ATP figures are approximate. The 3 ATP for C3 and the extra 2 ATP for C4 are firm class and textbook values; the CAM cost varies between species, so give it as "more than C4".</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>C3 = 3 carbons, 3 ATP, one step.</strong> <strong>C4 = 4 carbons first, two cells.</strong> <strong>CAM = 4 carbons first, two times (night and day).</strong> All three finish with RuBisCO and the Calvin cycle during the day.</p></div>

<h3 data-tier="extra">Beyond the slides: climate, crops and weeds</h3>
<p>Only a few percent of plant species are C4, but they include some of the world's most productive crops: <strong>corn, sugar cane, sorghum and millet</strong>. They also include many of the most troublesome weeds: according to the textbook, eight of the world's ten most aggressive weeds are C4 plants. Common North American examples are <strong>crabgrass, redroot pigweed and barnyard grass</strong>, which is why they race ahead of C3 crops and lawn grasses in the heat of midsummer. Important CAM crops include <strong>pineapple and agave</strong>.</p>
<p>Climate change pulls in two directions:</p>
<ul>
<li><strong>More CO<sub>2</sub> in the air helps C3 plants most.</strong> Higher CO<sub>2</sub> means RuBisCO meets CO<sub>2</sub> more often and O<sub>2</sub> less often, so photorespiration falls. C4 plants gain little, because their RuBisCO is already saturated with CO<sub>2</sub>. So rising CO<sub>2</sub> could help C3 crops (wheat, rice, soybeans) compete against C4 weeds, but could also help C3 weeds compete against C4 crops such as corn.</li>
<li><strong>Higher temperatures and more droughts favour C4 and CAM plants</strong>, because photorespiration rises with temperature and they use water more efficiently.</li>
</ul>
<p>Which effect wins depends on the place and the crop. Meanwhile, researchers are trying to engineer C4 features into rice, a C3 crop that feeds billions of people, to raise its yield in hot climates.</p>

<h3 data-tier="essential">Check yourself</h3>
<p>Questions marked "Textbook" are from Nelson Section 3.4. Try each one before opening the answer.</p>
<details class="check"><summary>1. (Textbook) Define photorespiration. What gas competes with CO<sub>2</sub> for the binding site of RuBisCO?</summary><div class="ans"><p>Photorespiration is the reaction in which RuBisCO adds <strong>O<sub>2</sub></strong> instead of CO<sub>2</sub> to RuBP in the light, forming one PGA and one toxic 2-carbon phosphoglycolate. Breaking down the phosphoglycolate (through the chloroplast, peroxisome and mitochondrion) uses ATP and NADPH and releases CO<sub>2</sub>, a net loss of carbon (25% of the carbon in the salvaged molecules, class value), with no sugar or ATP made. The competing gas is <strong>oxygen</strong>.</p></div></details>
<details class="check"><summary>2. (Textbook) Under normal conditions, what proportion of fixed carbon is affected by photorespiration in C3 plants?</summary><div class="ans"><p>About <strong>20%</strong>. Under normal conditions carboxylation happens about four times as often as oxygenation, so roughly one fifth of fixed carbon is lost. On hot, dry days the loss rises to between a quarter and a half.</p></div></details>
<details class="check"><summary>3. (Textbook) Compare the end products of photosynthesis and photorespiration.</summary><div class="ans"><p><strong>Photosynthesis</strong> (carboxylation): RuBP + CO<sub>2</sub> → 2 PGA → G3P → sugars, a net <strong>gain</strong> of carbon, with O<sub>2</sub> released by the light reactions. <strong>Photorespiration</strong>: RuBP + O<sub>2</sub> → 1 PGA + 1 phosphoglycolate; salvaging it releases <strong>CO<sub>2</sub></strong> and consumes ATP and NADPH, so the end products are some recovered PGA and CO<sub>2</sub>, a net <strong>loss</strong> of carbon and energy with no sugar made.</p></div></details>
<details class="check"><summary>4. (Textbook) How does temperature affect the relative amounts of photosynthesis and photorespiration in C3 plants?</summary><div class="ans"><p>As temperature rises, photorespiration increases relative to photosynthesis. Heat changes RuBisCO's shape so its relative affinity for O<sub>2</sub> increases (said in class: high temperature = greater affinity for O<sub>2</sub>), and hot weather makes stomata close, lowering CO<sub>2</sub> and raising O<sub>2</sub> in the leaf. The textbook gives an optimum of about 15–25 °C for C3 photosynthesis but 30–47 °C for photorespiration, so above about 25 °C photosynthesis levels off and declines while photorespiration keeps climbing. At low temperatures, carbon fixation dominates.</p></div></details>
<details class="check"><summary>5. (Textbook) What type of cell–cell connection do malate and pyruvate go through to move from one cell into the other?</summary><div class="ans"><p><strong>Plasmodesmata</strong>: membrane-lined channels through the cell walls that join the cytoplasm of neighbouring plant cells. Malate goes from mesophyll to bundle sheath; pyruvate comes back.</p></div></details>
<details class="check"><summary>6. (Textbook) What is the main difference between the ideal environments of C4 and CAM plants? Name two C4 plants and two CAM plants.</summary><div class="ans"><p>C4 plants are adapted to <strong>high heat and intense sunlight</strong>, which need not be dry. CAM plants are adapted to <strong>extreme drought</strong>, where saving water matters most. C4: corn, sugar cane (also sorghum, tropical grasses). CAM: pineapple, cactus (also jade plant).</p></div></details>
<details class="check"><summary>7. (Textbook) What might have been responsible for the evolution of photorespiration?</summary><div class="ans"><p>RuBisCO evolved in early photosynthetic prokaryotes when the atmosphere was rich in CO<sub>2</sub> and had almost no O<sub>2</sub>, so its oxygenase activity didn't matter. As photosynthesis filled the atmosphere with O<sub>2</sub>, the side reaction became common. Because it uses the same active site as carbon fixation, plants never evolved a RuBisCO that ignores O<sub>2</sub>. Photorespiration is an evolutionary leftover.</p></div></details>
<details class="check"><summary>8. (Textbook) When would you find the most malate in a CAM plant? The least? Why do CAM plants close their stomata during the day?</summary><div class="ans"><p><strong>Most</strong> at the end of the night (around dawn), after a night of fixing CO<sub>2</sub> into malate. <strong>Least</strong> at the end of the day, after the Calvin cycle has used it up. They close their stomata during the day to <strong>conserve water</strong>: daytime air is hot and dry, so open stomata would lose a lot of water by transpiration.</p></div></details>
<details class="check"><summary>9. (Textbook) During the cool of evening, CAM plants open their stomata. What gas is preferentially absorbed, and how is it stored for daytime use?</summary><div class="ans"><p><strong>CO<sub>2</sub></strong>. PEP carboxylase adds it to PEP to form oxaloacetate, which is converted to <strong>malate</strong> and stored in the <strong>vacuole</strong> as malic acid. During the day the malate is decarboxylated, releasing the CO<sub>2</sub> for RuBisCO and the Calvin cycle.</p></div></details>
<details class="check" data-tier="likely"><summary>10. (Textbook) Write a hypothesis about the acid content of two CAM plants: one kept in sunlight for the previous 24 h and one kept in the dark for 24 h.</summary><div class="ans"><p><strong>If</strong> a CAM plant is kept in the dark for 24 h, <strong>then</strong> its acid content will be higher (lower pH) than that of a CAM plant kept in sunlight for 24 h, <strong>because</strong> in the dark it keeps fixing CO<sub>2</sub> into malic acid but can't run the light reactions or the Calvin cycle to use it up, while in the light the stored malic acid is decarboxylated and its CO<sub>2</sub> used in the Calvin cycle. (In very long darkness, the plant may eventually run out of starch to make PEP, so acid stops increasing.)</p></div></details>
<details class="check" data-tier="likely"><summary>11. (Textbook) If you were looking for new CAM species, which biomes would you explore? Why?</summary><div class="ans"><p><strong>Hot deserts and dry, semi-arid regions</strong> (scrublands, dry rocky areas), where water is scarce and daytime evaporation is extreme, so opening stomata only at night is a big advantage. Also the canopy of tropical rainforests, where epiphytes such as orchids and bromeliads grow on branches with no soil to store water.</p></div></details>
<details class="check" data-tier="likely"><summary>12. Why is PEP carboxylase better than RuBisCO for the first fixation step?</summary><div class="ans"><p>PEP carboxylase has <strong>no affinity for O<sub>2</sub></strong>, so it can't cause photorespiration however much O<sub>2</sub> builds up. It also has a <strong>high affinity for CO<sub>2</sub></strong>, so it captures CO<sub>2</sub> even at very low concentrations (stomata nearly closed). It then hands the CO<sub>2</sub> to RuBisCO at a high concentration, where CO<sub>2</sub> outcompetes O<sub>2</sub>.</p></div></details>
<details class="check" data-tier="likely"><summary>13. A drug blocks the conversion of pyruvate back to PEP in a C4 plant. Predict the effect.</summary><div class="ans"><p>PEP would run out in the mesophyll, so PEP carboxylase would have nothing to attach CO<sub>2</sub> to. No oxaloacetate or malate would be made, no CO<sub>2</sub> would be delivered to the bundle sheath, and the Calvin cycle there would slow and stop. Pyruvate would build up. The plant would lose its CO<sub>2</sub> pump, and the little CO<sub>2</sub> reaching RuBisCO directly would face lots of O<sub>2</sub>, so photorespiration would rise and sugar production would collapse.</p></div></details>
<details class="check" data-tier="likely"><summary>14. Why does a C4 plant use about 30 ATP per glucose, compared with 18 for a C3 plant?</summary><div class="ans"><p>Both use the Calvin cycle's 18 ATP (3 per CO<sub>2</sub>). A C4 plant also has to regenerate PEP for every CO<sub>2</sub> it pumps into the bundle sheath, and ATP → AMP costs the equivalent of 2 ATP each time. For 6 CO<sub>2</sub>: 6 × 2 = 12 extra ATP, so 18 + 12 = 30.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
<li><strong>C3 plants</strong> (most plants: wheat, rice, soybeans, trees) fix CO<sub>2</sub> only with RuBisCO; the first stable product is PGA (3C). Cheapest (3 ATP per CO<sub>2</sub>), best in cool, moist conditions.</li>
<li><strong>The C3 problem:</strong> on hot, dry days stomata close to save water → CO<sub>2</sub> falls, O<sub>2</sub> builds up → less carbohydrate is made.</li>
<li><strong>RuBisCO</strong> is a carboxylase (adds CO<sub>2</sub> → 2 PGA) and an oxygenase (adds O<sub>2</sub> → 1 PGA + 1 phosphoglycolate) with one active site. Low CO<sub>2</sub> : O<sub>2</sub> ratio and <strong>high temperature (greater affinity for O<sub>2</sub>)</strong> favour oxygenation.</li>
<li><strong>Photorespiration:</strong> RuBP + O<sub>2</sub> → PGA + toxic PG (2C); PG is salvaged through chloroplast → peroxisome (H<sub>2</sub>O<sub>2</sub>) → mitochondrion, using ATP and NADPH, releasing CO<sub>2</sub>, with an overall <strong>loss of 25% of the carbon</strong>. No sugar, no ATP: very wasteful. You don't need the full pathway.</li>
<li>Photorespiration is an <strong>evolutionary leftover</strong>: RuBisCO evolved when the air had lots of CO<sub>2</sub> and almost no O<sub>2</sub>.</li>
<li><strong>Solution (C4 and CAM):</strong> concentrate CO<sub>2</sub> around RuBisCO using <strong>PEP carboxylase</strong> (high affinity for CO<sub>2</sub>, none for O<sub>2</sub>). CO<sub>2</sub> is fixed twice: first into a 4C acid, then by RuBisCO in the Calvin cycle.</li>
<li><strong>C4 plants</strong> (corn, sugar cane, tropical grasses): high heat and intense light, not necessarily dry. <strong>Spatial separation</strong>: mesophyll cells (PEP + CO<sub>2</sub> → oxaloacetate → malate) and bundle sheath cells (malate → CO<sub>2</sub> + pyruvate; Calvin cycle). Malate and pyruvate move through <strong>plasmodesmata</strong>. Pyruvate → PEP: ATP → AMP = <strong>2 ATP</strong>. About 5 ATP per CO<sub>2</sub>, about 30 per glucose.</li>
<li><strong>Kranz anatomy:</strong> bundle sheath cells tightly packed around the veins, surrounded by mesophyll.</li>
<li><strong>CAM plants</strong> (pineapple, cactus, jade plant): extreme drought. <strong>Temporal separation</strong>: stomata open at night, CO<sub>2</sub> fixed into malate and stored as malic acid in <strong>vacuoles</strong> (acidity rises overnight); stomata closed by day, malate releases CO<sub>2</sub> to RuBisCO and the Calvin cycle. <strong>More ATP than C4</strong> (about 1 more per CO<sub>2</sub>), slow growth, least water lost.</li>
<li>All three types end with <strong>RuBisCO and the Calvin cycle during the day</strong>.</li>
</ul>
`
});
