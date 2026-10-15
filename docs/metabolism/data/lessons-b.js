window.LESSONS = window.LESSONS || [];

/* ===================================================================
   2.04 Electron Transport Chain & Chemiosmosis
   =================================================================== */
window.LESSONS.push({
  id: "2.04",
  title: "Electron Transport Chain & Chemiosmosis",
  stage: "etc",
  where: "Inner mitochondrial membrane",
  summary: "NADH and FADH2 hand their electrons to a chain of proteins in the inner mitochondrial membrane; the energy released pumps H+ into the intermembrane space, and H+ flowing back through ATP synthase makes most of the cell's ATP. Oxygen is the final electron acceptor and becomes water.",
  objectives: [
    "Describe where the ETC is located and explain why the structure of the inner membrane matters.",
    "Name the carriers of the ETC in order, state what each one does, and identify the three proton pumps.",
    "Use redox potential and electronegativity to explain why electrons flow down the chain and release energy.",
    "Explain how proton pumping (active transport) builds an electrochemical gradient, and how chemiosmosis through ATP synthase uses it to make ATP.",
    "Explain why oxygen is the final electron acceptor and predict what happens to the ETC, Krebs cycle and glycolysis without it (or with a poison such as cyanide).",
    "Calculate the 38 ATP maximum per glucose and explain why real yields are 30–32, including the role of the two NADH shuttles.",
    "Compare substrate-level phosphorylation with oxidative phosphorylation."
  ],
  html: `
<h3 data-tier="essential">The big picture: cashing in the electron carriers</h3>
<p>By the end of the Krebs cycle, glucose has been completely taken apart: all six of its carbons have left as CO<sub>2</sub>. But look at the ATP count. The cell has made only <strong>4 ATP</strong> so far (2 from glycolysis, 2 from Krebs). The energy hasn't disappeared. Most of it has been moved into high-energy electrons held by the reduced carriers <strong>NADH</strong> and <strong>FADH<sub>2</sub></strong>. Per glucose, the cell now holds:</p>
<div class="tally"><span class="chip nadh">10 NADH</span><span class="chip fadh">2 FADH<sub>2</sub></span><span class="chip atp">4 ATP so far</span></div>
<p>The 10 NADH come from glycolysis (2), pyruvate oxidation (2) and Krebs (6); both FADH<sub>2</sub> come from Krebs. The <span class="term">electron transport chain (ETC)</span> and <span class="term">chemiosmosis</span> turn those electrons into about 34 more ATP, roughly 90% of all the ATP made from one glucose. Together, the ETC and chemiosmosis are called <span class="term">oxidative phosphorylation</span>.</p>

<h4>Location: the inner mitochondrial membrane</h4>
<p>The ETC proteins are embedded in the inner mitochondrial membrane, mostly in its folds, the <span class="term">cristae</span>. Two properties of this membrane make the whole process possible:</p>
<ul>
<li><strong>Folding gives surface area.</strong> More membrane means more copies of the ETC and ATP synthase in each mitochondrion. Very active cells, such as heart muscle, have mitochondria packed with cristae.</li>
<li><strong>The inner membrane is impermeable to H<sup>+</sup> (and to NADH).</strong> The outer membrane is leaky to small molecules and ions, but the inner membrane is a tight barrier. That lets the cell pile up H<sup>+</sup> on one side of it. Without a sealed membrane there could be no gradient, and without a gradient there would be no chemiosmosis.</li>
</ul>
<p>Keep the two compartments straight, because almost every arrow in this lesson goes between them. The <strong>matrix</strong> is the protein-rich fluid inside the inner membrane, where the Krebs cycle happens. The <strong>intermembrane space</strong> is the thin, fluid-filled space between the inner and outer membranes.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>The <strong>m</strong>atrix is the <strong>m</strong>iddle. The <strong>inter</strong>membrane space is "in between" the two membranes. Protons are pumped <em>out of the middle into the in-between</em>, then flow back into the middle through ATP synthase.</p></div>

<h3 data-tier="essential">What the ETC is</h3>
<p>The ETC is a series of electron acceptors, mostly large protein complexes, embedded in the cristae and <strong>arranged in order of increasing electronegativity</strong>. Each carrier pulls on electrons a little more strongly than the one before it, so electrons can only flow one way: from NADH at the start toward oxygen, the most electronegative acceptor, at the end. The electrons are actually held by small non-protein groups inside the proteins, such as iron–sulfur clusters and iron-containing <em>heme</em> groups. (The "cytochromes" are proteins named for their hemes.)</p>
<p><strong>NADH and FADH<sub>2</sub> each carry a pair of electrons</strong> (2 e<sup>−</sup>) to the ETC. When they drop the electrons off, they are oxidized back to their "empty" forms:</p>
<div class="eq">NADH → NAD<sup>+</sup> + H<sup>+</sup> + 2 e<sup>−</sup></div>
<div class="eq">FADH<sub>2</sub> → FAD + 2 H<sup>+</sup> + 2 e<sup>−</sup></div>
<p>Both are oxidations: the carriers lose electrons (LEO). That matters as much as the ATP does. The recycled NAD<sup>+</sup> and FAD go back to glycolysis, pyruvate oxidation and the Krebs cycle, and those stages stop without them. So the ETC doesn't only make ATP. It also keeps every earlier stage supplied with empty carriers.</p>

<h3 data-tier="essential">The carriers, in order</h3>
<p>Electrons pass through the chain in a fixed order. Each carrier is <strong>reduced</strong> when it gains electrons from the carrier before it, and <strong>oxidized</strong> when it donates them to the carrier after it, so every hand-off is a redox reaction. The three complexes marked with a star on the class slide are the <strong>proton pumps</strong>.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Order</th><th>Carrier (class name)</th><th>What it is</th><th>What it does</th><th>Proton pump?</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>Complex I</strong> (NADH dehydrogenase)</td><td>Large complex spanning the membrane</td><td>Oxidizes NADH → NAD<sup>+</sup>; takes its 2 e<sup>−</sup> and passes them to Q</td><td><strong>Yes</strong>: 4 H<sup>+</sup> per electron pair</td></tr>
<tr><td>2</td><td><strong>Complex II</strong> (succinate dehydrogenase)</td><td>Complex in the membrane, facing the matrix</td><td>Oxidizes FADH<sub>2</sub> → FAD; passes 2 e<sup>−</sup> to Q. It is the same enzyme as Krebs step 6 (succinate → fumarate).</td><td><strong>No</strong></td></tr>
<tr><td>–</td><td><strong>Ubiquinone (Q</strong>, coenzyme Q)</td><td>Small, fat-soluble, mobile</td><td>Mobile shuttle: moves within the membrane carrying electrons from complexes I and II to complex III</td><td>No</td></tr>
<tr><td>3</td><td><strong>Complex III</strong> (cytochrome bc<sub>1</sub> complex)</td><td>Large complex spanning the membrane</td><td>Takes electrons from Q and passes them to cytochrome c</td><td><strong>Yes</strong>: 4 H<sup>+</sup> per pair</td></tr>
<tr><td>–</td><td><strong>Cytochrome c</strong></td><td>Small mobile protein on the intermembrane-space face</td><td>Mobile shuttle: carries electrons from complex III to complex IV, one at a time</td><td>No</td></tr>
<tr><td>4</td><td><strong>Complex IV</strong> (cytochrome c oxidase)</td><td>Large complex spanning the membrane</td><td>Hands electrons to O<sub>2</sub>, which combines with H<sup>+</sup> from the matrix to form water</td><td><strong>Yes</strong>: 2 H<sup>+</sup> per pair</td></tr>
<tr><td>5</td><td><strong>Complex V</strong> (ATP synthase)</td><td>H<sup>+</sup> channel joined to an enzyme</td><td>Not an electron carrier. Lets H<sup>+</sup> flow back into the matrix and uses that energy to make ATP</td><td>No: H<sup>+</sup> flows through it passively</td></tr>
</tbody></table></div>
<p>The H<sup>+</sup> counts (4, 4, 2) are the ones shown on the class slide diagrams. So the electrons from one NADH pump <strong>4 + 4 + 2 = 10 H<sup>+</sup></strong>. The electrons from one FADH<sub>2</sub> skip complex I and pump only <strong>4 + 2 = 6 H<sup>+</sup></strong>. That difference explains why FADH<sub>2</sub> is worth less ATP, which you'll see below.</p>
<p data-tier="likely">Why does FADH<sub>2</sub> "enter at complex II"? Complex II <em>is</em> succinate dehydrogenase, the Krebs enzyme that turns succinate into fumarate. The FADH<sub>2</sub> it makes stays bound inside the enzyme, and the electrons go straight from there to Q. Unlike NADH, FADH<sub>2</sub> never floats free in the matrix.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><ul>
<li><strong>Complex II is not a proton pump.</strong> Only I, III and IV pump.</li>
<li><strong>ATP synthase is not part of the electron path.</strong> Electrons never pass through it. Only H<sup>+</sup> does.</li>
<li><strong>Cytochrome c is not cytochrome c oxidase.</strong> Cytochrome c is the small mobile shuttle. Cytochrome c <em>oxidase</em> is complex IV, which hands electrons to O<sub>2</sub> (and is the one cyanide blocks).</li>
</ul></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>"One, three, four: pump H<sup>+</sup> out the door."</strong> The two small mobile shuttles are the couriers: <strong>Q</strong> carries electrons through the middle of the membrane (from I and II to III), and <strong>cytochrome c</strong> carries them along the outer surface (from III to IV).</p></div>

<figure class="diagram">
<svg viewBox="0 0 640 400" role="img" aria-labelledby="s204a-title s204a-desc">
<title id="s204a-title">The electron transport chain and ATP synthase in the inner mitochondrial membrane</title>
<desc id="s204a-desc">NADH gives electrons to complex I and FADH2 gives electrons to complex II. Ubiquinone (Q) carries them to complex III, cytochrome c carries them to complex IV, and complex IV passes them to oxygen, which joins with 2 H+ from the matrix to form water. Complexes I, III and IV pump H+ from the matrix up into the intermembrane space (4, 4 and 2 per electron pair). H+ flows back down through ATP synthase, which makes ATP from ADP and phosphate on the matrix side.</desc>
<defs>
<marker id="m204a-h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--proton)"/></marker>
<marker id="m204a-e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
</defs>
<rect x="0" y="0" width="640" height="150" style="fill:var(--proton-soft)"/>
<rect x="0" y="150" width="640" height="64" style="fill:var(--glyco-soft)"/>
<rect x="0" y="214" width="640" height="186" style="fill:var(--surface-2)"/>
<line x1="0" y1="150" x2="640" y2="150" stroke-width="2" style="stroke:var(--glyco)"/>
<line x1="0" y1="214" x2="640" y2="214" stroke-width="2" style="stroke:var(--glyco)"/>
<g stroke-width="2" style="fill:var(--etc-soft);stroke:var(--etc)">
<rect x="72" y="126" width="60" height="112" rx="16"/>
<rect x="146" y="178" width="44" height="58" rx="12"/>
<rect x="236" y="126" width="60" height="112" rx="16"/>
<ellipse cx="326" cy="138" rx="26" ry="14"/>
<rect x="356" y="126" width="60" height="112" rx="16"/>
</g>
<circle cx="212" cy="170" r="15" stroke-width="2" style="fill:var(--surface);stroke:var(--etc)"/>
<g stroke-width="2" style="fill:var(--link-soft);stroke:var(--link)">
<rect x="506" y="132" width="40" height="92" rx="8"/>
<rect x="519" y="222" width="14" height="14"/>
<ellipse cx="526" cy="262" rx="40" ry="28"/>
</g>
<g fill="none" stroke-width="2.5" stroke-dasharray="7 5" style="stroke:var(--ink)">
<path d="M104,276 L104,165 L195,165" marker-end="url(#m204a-e)"/>
<path d="M178,312 L178,190 L198,179" marker-end="url(#m204a-e)"/>
<path d="M227,170 L268,170 L268,138 L298,138" marker-end="url(#m204a-e)"/>
<path d="M352,138 L372,138 L372,308" marker-end="url(#m204a-e)"/>
</g>
<g stroke-width="3" style="stroke:var(--proton)">
<line x1="122" y1="250" x2="122" y2="96" marker-end="url(#m204a-h)"/>
<line x1="284" y1="250" x2="284" y2="96" marker-end="url(#m204a-h)"/>
<line x1="404" y1="250" x2="404" y2="96" marker-end="url(#m204a-h)"/>
<line x1="526" y1="96" x2="526" y2="302" marker-end="url(#m204a-h)"/>
</g>
<g font-family="inherit" font-size="13" style="fill:var(--ink)">
<text x="12" y="24" font-size="14" font-weight="700">Intermembrane space</text>
<text x="12" y="42" font-size="12" style="fill:var(--ink-2)">high [H⁺] · lower pH · + charge</text>
<text x="263" y="62" font-size="12" text-anchor="middle" style="fill:var(--ink-2)">H⁺ pumped against its gradient (active)</text>
<text x="526" y="62" font-size="12" text-anchor="middle" style="fill:var(--ink-2)">H⁺ flows back (passive)</text>
<text x="8" y="178" font-size="12">Inner</text>
<text x="8" y="194" font-size="12">membrane</text>
<text x="86" y="188" font-size="15" font-weight="700" text-anchor="middle">I</text>
<text x="160" y="214" font-weight="700" text-anchor="middle">II</text>
<text x="212" y="175" font-size="14" font-weight="700" text-anchor="middle">Q</text>
<text x="250" y="188" font-size="15" font-weight="700" text-anchor="middle">III</text>
<text x="326" y="142" font-size="12" text-anchor="middle">cyt c</text>
<text x="388" y="188" font-size="15" font-weight="700" text-anchor="middle">IV</text>
<text x="553" y="178" font-size="12">ATP synthase</text>
<text x="553" y="194" font-size="12" style="fill:var(--ink-2)">(complex V)</text>
<text x="572" y="256" font-size="12">ADP + Pi</text>
<text x="572" y="274" font-weight="700">→ ATP</text>
<text x="104" y="292" text-anchor="middle">NADH → NAD⁺ + H⁺</text>
<text x="178" y="328" text-anchor="middle">FADH₂ → FAD</text>
<text x="372" y="328" text-anchor="middle">½O₂ + 2H⁺ → H₂O</text>
<text x="372" y="346" font-size="12" text-anchor="middle" style="fill:var(--ink-2)">O₂ = final electron acceptor</text>
<text x="526" y="340" font-size="12" text-anchor="middle" style="fill:var(--ink-2)">chemiosmosis</text>
<text x="12" y="368" font-size="14" font-weight="700">Matrix</text>
<text x="12" y="386" font-size="12" style="fill:var(--ink-2)">low [H⁺] · higher pH · − charge</text>
<text x="336" y="386" font-size="12">electron path</text>
<text x="478" y="386" font-size="12">H⁺ movement</text>
</g>
<g font-family="inherit" font-size="13" font-weight="700" text-anchor="middle" style="fill:var(--proton)">
<text x="122" y="86">4 H⁺</text>
<text x="284" y="86">4 H⁺</text>
<text x="404" y="86">2 H⁺</text>
<text x="526" y="86">H⁺</text>
<text x="526" y="320" font-size="12">H⁺</text>
<text x="122" y="266" font-size="12" font-weight="400">H⁺</text>
<text x="284" y="266" font-size="12" font-weight="400">H⁺</text>
<text x="404" y="266" font-size="12" font-weight="400">H⁺</text>
</g>
<g font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--proton)" opacity="0.75">
<text x="40" y="112">H⁺</text>
<text x="180" y="108">H⁺</text>
<text x="340" y="100">H⁺</text>
<text x="462" y="112">H⁺</text>
<text x="612" y="112">H⁺</text>
<text x="240" y="300">H⁺</text>
<text x="470" y="300">H⁺</text>
</g>
<line x1="300" y1="382" x2="330" y2="382" stroke-width="2.5" stroke-dasharray="7 5" style="stroke:var(--ink)"/>
<line x1="440" y1="382" x2="468" y2="382" stroke-width="3" style="stroke:var(--proton)" marker-end="url(#m204a-h)"/>
</svg>
<figcaption>The ETC in the inner membrane (cristae). Dashed line: path of the electrons. Red arrows: H<sup>+</sup> movement. Complexes I, III and IV pump H<sup>+</sup> up into the intermembrane space (4 + 4 + 2 for each NADH). Oxygen accepts the electrons at complex IV and forms water. H<sup>+</sup> returns to the matrix only through ATP synthase, which makes ATP on the matrix side.</figcaption>
</figure>

<h3 data-tier="essential">Why electrons flow: redox potential</h3>
<p>Why do electrons move from NADH toward oxygen, and never the other way? Every carrier has a <span class="term">redox potential</span> (also called reduction potential), measured in volts. It describes how strongly a substance attracts electrons:</p>
<ul>
<li><strong>The more positive the redox potential, the more likely it is to gain electrons</strong> (to be reduced).</li>
<li><strong>The more negative the redox potential, the more likely it is to lose electrons</strong> (to be oxidized).</li>
</ul>
<p>NADH has a very negative redox potential (about −0.32 V), so it gives up electrons easily. Oxygen has a very positive one (about +0.82 V), so it grabs electrons strongly. The carriers in between are lined up from more negative to more positive. "Increasing electronegativity" on the slide and "increasingly positive redox potential" describe the same line-up. Electrons therefore flow "downhill" from carrier to carrier, like a ball bouncing down a staircase. Each step happens on its own (it's exergonic).</p>

<h4>Why passing electrons releases energy</h4>
<p>An electron held loosely by a weakly electronegative carrier has a lot of potential energy. When it moves to a more electronegative carrier, it is held more tightly, so it becomes <strong>more stable</strong> and has less potential energy. The difference is released as <strong>free energy</strong>. That is what the slide means by "as the electrons are passed, they become more stable and generate free energy."</p>
<p data-tier="likely">Over the whole chain, from NADH to O<sub>2</sub>, the drop is about 1.14 V. For one pair of electrons that's about 220 kJ/mol, enough in theory for about seven ATP (each ATP needs about 30.5 kJ/mol). In practice a NADH yields about 3 ATP (class value), and the rest is released as heat.</p>
<p>This is the same idea you met in the intro lesson. Burning sugar releases its energy in one burst, mostly as heat. Respiration releases it in many small, controlled steps. If NADH handed its electrons straight to O<sub>2</sub>, the whole drop would happen at once and the energy would be lost as heat. Passing electrons through a series of carriers breaks the drop into small steps, and at three of those steps (complexes I, III and IV) enough energy is released to pump protons.</p>

<figure class="diagram">
<svg viewBox="0 0 640 340" role="img" aria-labelledby="s204b-title s204b-desc">
<title id="s204b-title">The ETC as an energy staircase</title>
<desc id="s204b-desc">A schematic graph of electron energy. NADH starts at the top, at the most negative redox potential (about minus 0.32 volts). Electrons step down through complex I, ubiquinone, complex III, cytochrome c and complex IV to oxygen at the bottom (about plus 0.82 volts). FADH2 enters lower down, at complex II, joining at ubiquinone and skipping complex I. Complexes I, III and IV are the proton pumps.</desc>
<defs>
<marker id="m204b-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
</defs>
<line x1="34" y1="300" x2="34" y2="36" stroke-width="2" style="stroke:var(--ink-2)" marker-end="url(#m204b-a)"/>
<text transform="translate(22,170) rotate(-90)" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">free energy of electrons</text>
<polyline points="90,50 170,75 290,127 370,159 450,170 520,197 590,290" fill="none" stroke-width="2.5" style="stroke:var(--ink)"/>
<line x1="230" y1="117" x2="290" y2="127" stroke-width="2.5" stroke-dasharray="6 4" style="stroke:var(--ink)"/>
<g stroke-width="2">
<circle cx="90" cy="50" r="8" style="fill:var(--surface);stroke:var(--ink)"/>
<circle cx="170" cy="75" r="8" style="fill:var(--proton-soft);stroke:var(--proton)"/>
<circle cx="230" cy="117" r="8" style="fill:var(--etc-soft);stroke:var(--etc)"/>
<circle cx="290" cy="127" r="8" style="fill:var(--etc-soft);stroke:var(--etc)"/>
<circle cx="370" cy="159" r="8" style="fill:var(--proton-soft);stroke:var(--proton)"/>
<circle cx="450" cy="170" r="8" style="fill:var(--etc-soft);stroke:var(--etc)"/>
<circle cx="520" cy="197" r="8" style="fill:var(--proton-soft);stroke:var(--proton)"/>
<circle cx="590" cy="290" r="8" style="fill:var(--surface);stroke:var(--ink)"/>
</g>
<g font-family="inherit" font-size="13" style="fill:var(--ink)">
<text x="90" y="30" text-anchor="middle" font-weight="700">NADH</text>
<text x="102" y="47" font-size="12" style="fill:var(--ink-2)">−0.32 V</text>
<text x="182" y="70">Complex I</text>
<text x="216" y="121" text-anchor="end">FADH₂ (complex II)</text>
<text x="216" y="138" text-anchor="end" font-size="12" style="fill:var(--ink-2)">skips complex I</text>
<text x="290" y="112" text-anchor="middle" font-weight="700">Q</text>
<text x="380" y="152">Complex III</text>
<text x="460" y="163">cyt c</text>
<text x="530" y="190">Complex IV</text>
<text x="578" y="294" text-anchor="end" font-size="12" style="fill:var(--ink-2)">+0.82 V</text>
<text x="590" y="316" text-anchor="middle" font-weight="700">O₂ → H₂O</text>
<text x="300" y="250" text-anchor="middle" font-size="12" style="fill:var(--ink-2)">each step down releases free energy</text>
<text x="300" y="268" text-anchor="middle" font-size="12" style="fill:var(--ink-2)">(schematic, not to scale)</text>
<text x="64" y="328" font-size="12">proton pump</text>
<text x="182" y="328" font-size="12">carrier that does not pump</text>
</g>
<circle cx="52" cy="324" r="6" stroke-width="2" style="fill:var(--proton-soft);stroke:var(--proton)"/>
<circle cx="170" cy="324" r="6" stroke-width="2" style="fill:var(--etc-soft);stroke:var(--etc)"/>
</svg>
<figcaption>The ETC as a staircase. Electrons start high (NADH, most negative redox potential) and end low (O<sub>2</sub>, most positive). The biggest drops happen at the three pumps. FADH<sub>2</sub>'s electrons start lower and skip complex I, so they release less energy and pump fewer H<sup>+</sup>.</figcaption>
</figure>
<div class="callout key"><p class="callout-title">On the test</p><p>If you're given redox potentials and asked which way electrons flow, the answer is always <strong>from more negative to more positive</strong>. The carrier with the more positive value gets reduced (gains electrons); the one with the more negative value gets oxidized.</p></div>

<h3 data-tier="essential">Proton pumping is active transport</h3>
<p>The free energy released as electrons pass through complexes I, III and IV is used to <strong>pump H<sup>+</sup> from the matrix into the intermembrane space</strong>. The H<sup>+</sup> is moved <strong>against its concentration gradient</strong>, from the side where H<sup>+</sup> is scarce to the side where it's already crowded. Moving something against its gradient through a protein pump, using energy, is <span class="term">active transport</span>.</p>
<p>The energy here comes from electron transfer rather than from ATP, but it is still active transport, because energy is spent to move ions against a gradient. Notice that pumping only happens while electrons are flowing. If electron flow stops (no NADH, no O<sub>2</sub>, or a poison), pumping stops at the same moment.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Students often mix up the two H<sup>+</sup> movements. <strong>Pumping</strong> (matrix → intermembrane space, through I, III, IV) is <strong>active</strong> and goes <strong>against</strong> the gradient. <strong>Flow through ATP synthase</strong> (intermembrane space → matrix) is <strong>passive</strong> and goes <strong>with</strong> the gradient. Review question 4 tests exactly this.</p></div>

<h3 data-tier="essential">The electrochemical gradient</h3>
<p>Pumping H<sup>+</sup> creates an <span class="term">electrochemical gradient</span> across the inner membrane (also called the proton-motive force). It has two parts, and both push H<sup>+</sup> back toward the matrix:</p>
<ul>
<li><strong>A chemical (concentration) gradient.</strong> There is much more H<sup>+</sup> in the intermembrane space than in the matrix. Because pH measures H<sup>+</sup> concentration, the intermembrane space has a <strong>lower pH</strong> (more acidic) and the matrix has a higher pH. H<sup>+</sup> tends to diffuse from high to low concentration.</li>
<li><strong>An electrical (charge) gradient.</strong> Every H<sup>+</sup> pumped carries a positive charge. The intermembrane space becomes positive and the matrix negative. Positive H<sup>+</sup> ions are attracted back toward the negative matrix.</li>
</ul>
<p>Together these store potential energy, like water held behind a dam. Because the inner membrane is impermeable to H<sup>+</sup>, the only way back into the matrix is through ATP synthase.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The H<sup>+</sup> gradient "shifts the pH", and it's the pH difference plus the concentration gradient that drives H<sup>+</sup> through ATP synthase. Also, when oxygen forms water on the <strong>matrix side</strong>, it uses up 2 H<sup>+</sup> from the matrix each time. That lowers the H<sup>+</sup> concentration in the matrix even further, so making water <strong>indirectly increases the gradient</strong>.</p></div>

<h3 data-tier="essential">Oxygen: the final electron acceptor</h3>
<p>At the end of the chain, complex IV hands the electrons to oxygen. Oxygen is the <span class="term">final electron acceptor</span>. It is the most electronegative member of the chain, and it is what <strong>pulls electrons through the redox reactions</strong>: as long as O<sub>2</sub> keeps removing electrons from complex IV, every carrier upstream can unload and accept more. Oxygen also <strong>binds with 2 H<sup>+</sup> from the matrix to form water</strong>:</p>
<div class="eq">½ O<sub>2</sub> + 2 H<sup>+</sup> + 2 e<sup>−</sup> → H<sub>2</sub>O</div>
<p>Per glucose, 12 electron pairs (10 from NADH + 2 from FADH<sub>2</sub>) reach oxygen. Each pair reduces ½ O<sub>2</sub>, so <strong>6 O<sub>2</sub></strong> are used: exactly the 6 O<sub>2</sub> in the overall equation. This is the <strong>only</strong> step in cellular respiration that uses O<sub>2</sub>. (The ETC makes 12 water molecules per glucose. The overall equation shows a net 6 H<sub>2</sub>O because other steps, such as the Krebs cycle, use water.)</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The O<sub>2</sub> you breathe in does <strong>not</strong> become the CO<sub>2</sub> you breathe out. Oxygen gas ends up in <strong>water</strong>, made here at complex IV. The CO<sub>2</sub> was released earlier, in pyruvate oxidation and the Krebs cycle, and its oxygen atoms came from glucose (and water).</p></div>

<h4>What happens without oxygen</h4>
<ol class="steps">
<li><p class="step-head">Complex IV can't unload</p><p>With no O<sub>2</sub> to accept electrons, complex IV stays reduced ("full") and can't take any more electrons from cytochrome c.</p></li>
<li><p class="step-head">The chain backs up</p><p>Cytochrome c, complex III, Q, and complexes I and II all fill up and stay reduced, like cars stuck behind a closed road. Electron flow stops.</p></li>
<li><p class="step-head">Pumping and ATP synthesis stop</p><p>No electron flow means no free energy, so no H<sup>+</sup> is pumped. The gradient runs down and ATP synthase stops making ATP. Oxidative phosphorylation shuts off.</p></li>
<li><p class="step-head">NAD<sup>+</sup> and FAD run out</p><p>Complex I can no longer oxidize NADH, and complex II can't oxidize FADH<sub>2</sub>. NADH and FADH<sub>2</sub> pile up while NAD<sup>+</sup> and FAD are used up.</p></li>
<li><p class="step-head">Krebs and pyruvate oxidation stop</p><p>Both need NAD<sup>+</sup>, and Krebs also needs FAD. Without them these stages stall, even though they never use O<sub>2</sub> directly.</p></li>
<li><p class="step-head">Glycolysis continues only through fermentation</p><p>Glycolysis doesn't use O<sub>2</sub>, but step 6 needs NAD<sup>+</sup>. It can keep going only if the cell regenerates NAD<sup>+</sup> another way, which is fermentation (lesson 2.07). The cell now gets only 2 ATP per glucose instead of up to 38.</p></li>
</ol>
<div class="callout key"><p class="callout-title">On the test</p><p>Review Q12 answers in class form:</p><ul>
<li><strong>Role of oxygen in the ETC:</strong> final electron acceptor.</li>
<li><strong>(a) Lack of O<sub>2</sub> on the ETC and Krebs:</strong> the ETC stops; the lack of NAD<sup>+</sup> and FAD then stops Krebs too.</li>
<li><strong>(b) Is glycolysis affected?</strong> The class key says no, because glycolysis is anaerobic (it doesn't use O<sub>2</sub>). For full marks, add that it can only continue if fermentation regenerates its NAD<sup>+</sup>.</li>
<li><strong>(c) Ubiquinone blocked:</strong> NADH and FADH<sub>2</sub> could not be oxidized (both send their electrons through Q), so the ETC would stop.</li>
</ul></div>

<h3 data-tier="essential">Chemiosmosis and oxidative phosphorylation</h3>
<p><span class="term">Chemiosmosis</span> is the use of an H<sup>+</sup> gradient across a membrane to make ATP. As H<sup>+</sup> flows back along its gradient through <strong>ATP synthase</strong>, energy is released and used to <strong>phosphorylate ADP into ATP</strong>:</p>
<div class="eq">ADP + P<sub>i</sub> → ATP &nbsp;(powered by H<sup>+</sup> flowing back into the matrix)</div>
<ul>
<li><strong>The flow is passive.</strong> H<sup>+</sup> moves from high to low concentration, and toward the negative side, so no energy has to be added. Ions can't cross the lipid bilayer on their own, so they need a protein channel. That makes this <span class="term">facilitated diffusion</span>.</li>
<li><strong>ATP synthase is the only route back.</strong> The inner membrane is impermeable to H<sup>+</sup>, so the gradient's energy is funnelled through ATP synthase. A stronger gradient drives faster ATP production.</li>
<li><strong>ATP is made on the matrix side.</strong> The knob-shaped head of ATP synthase sticks into the matrix, so new ATP is released into the matrix and then exported to the rest of the cell.</li>
</ul>
<h4 data-tier="likely">How ATP synthase works</h4>
<p data-tier="likely">ATP synthase works like a water wheel or the turbine in a dam. Its membrane part contains a ring that H<sup>+</sup> ions push around as they pass through, so it spins: ATP synthase is a real rotary motor. A shaft attached to the ring turns inside the head and changes the shape of its active sites, so that they grab ADP and P<sub>i</sub>, press them together into ATP, and release it. About 3–4 H<sup>+</sup> must flow back for each ATP (counting the cost of moving ADP, P<sub>i</sub> and ATP across the membrane), and the exact number varies between species.</p>
<h4>Why it's called oxidative phosphorylation</h4>
<p>The ETC and chemiosmosis are <strong>coupled</strong>: the ETC builds the gradient and ATP synthase spends it. The energy comes from the <strong>oxidation</strong> of NADH and FADH<sub>2</sub> (their electrons passed down to O<sub>2</sub>), and it is used for the <strong>phosphorylation</strong> of ADP. Hence "oxidative phosphorylation."</p>
<p data-tier="extra">The idea that a proton gradient links the two processes was proposed by the biochemist Peter Mitchell in 1961. It was controversial at first, but it earned him the 1978 Nobel Prize in Chemistry.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"The ETC makes ATP" is a loose way of speaking. Strictly, the ETC makes the <strong>H<sup>+</sup> gradient</strong>, and <strong>ATP synthase</strong> makes the ATP. If a question asks "Where is ATP made in the ETC?", name ATP synthase (complex V) in the inner membrane, with ATP released into the matrix.</p></div>

<h4>Substrate-level vs oxidative phosphorylation</h4>
<p>There are only two ways respiration makes ATP. Know both.</p>
<div class="compare">
<div><h4>Substrate-level phosphorylation</h4><ul>
<li>An enzyme transfers a phosphate group <strong>directly</strong> from a phosphorylated substrate molecule to ADP.</li>
<li><strong>Where:</strong> glycolysis steps 7 and 10 (cytosol); Krebs, succinyl-CoA → succinate (matrix).</li>
<li>Needs no O<sub>2</sub>, no membrane and no gradient.</li>
<li><strong>Per glucose:</strong> 4 ATP (2 net from glycolysis + 2 from Krebs).</li>
<li>Still works during fermentation.</li>
</ul></div>
<div><h4>Oxidative phosphorylation</h4><ul>
<li>ATP synthase uses energy from an H<sup>+</sup> gradient (chemiosmosis) to join ADP and P<sub>i</sub>.</li>
<li><strong>Where:</strong> inner mitochondrial membrane; ATP released into the matrix.</li>
<li>Needs the ETC running, and therefore O<sub>2</sub> as the final electron acceptor.</li>
<li><strong>Per glucose:</strong> about 34 ATP (class values), the vast majority.</li>
<li>Stops without O<sub>2</sub>.</li>
</ul></div>
</div>

<h3 data-tier="essential">ATP accounting: where 38 comes from</h3>
<p>Class values: <strong>each NADH makes about 3 ATP</strong> and <strong>each FADH<sub>2</sub> makes about 2 ATP</strong>. Add the carriers from every stage to the ATP made directly by substrate-level phosphorylation:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Stage</th><th>Location</th><th>ATP made directly</th><th>NADH</th><th>FADH<sub>2</sub></th><th>ATP from carriers (ETC)</th><th>Total ATP</th></tr></thead>
<tbody>
<tr><td>Glycolysis</td><td>Cytosol</td><td>2 (net)</td><td>2</td><td>0</td><td>2 × 3 = 6</td><td>8</td></tr>
<tr><td>Pyruvate oxidation</td><td>Matrix</td><td>0</td><td>2</td><td>0</td><td>2 × 3 = 6</td><td>6</td></tr>
<tr><td>Krebs cycle (2 turns)</td><td>Matrix</td><td>2</td><td>6</td><td>2</td><td>6 × 3 + 2 × 2 = 22</td><td>24</td></tr>
<tr><td><strong>Total</strong></td><td></td><td><strong>4</strong></td><td><strong>10</strong></td><td><strong>2</strong></td><td><strong>34</strong></td><td><strong>38</strong></td></tr>
</tbody></table></div>
<div class="eq">2 (glycolysis) + 2 (Krebs) + 10 NADH × 3 + 2 FADH<sub>2</sub> × 2 = 2 + 2 + 30 + 4 = <strong>38 ATP</strong> (maximum)</div>
<p>Along the way, <strong>6 O<sub>2</sub> are consumed and 6 H<sub>2</sub>O and 6 CO<sub>2</sub> are produced</strong>.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Know the slide's version by heart: <strong>2 + 2 + 30 + 4 = 38</strong>, the "perfect textbook answer." If a question asks for the realistic number, say <strong>30–32</strong> and give the reasons below.</p></div>

<h4>Why the real yield is only 30–32</h4>
<ol>
<li><strong>Cytosolic NADH can't cross into the mitochondrion.</strong> The 2 NADH from glycolysis are made in the cytosol, and the inner membrane is impermeable to NADH. Their electrons have to be carried in by a shuttle, and depending on the shuttle they may end up on FAD (as FADH<sub>2</sub>), which is worth less ATP.</li>
<li><strong>Protons leak.</strong> Some H<sup>+</sup> seep back across the inner membrane without passing through ATP synthase, and their energy is lost as heat.</li>
<li><strong>The H<sup>+</sup>-per-ATP ratio isn't fixed.</strong> The strength of gradient needed to make ATP, and the number of H<sup>+</sup> that must pass through ATP synthase for each ATP, vary slightly among species. Careful measurements give about <strong>2.5 ATP per NADH and 1.5 per FADH<sub>2</sub></strong>, not whole numbers.</li>
<li><strong>The gradient has other jobs.</strong> Some of its energy is spent importing pyruvate and phosphate into the matrix and swapping new ATP out for ADP.</li>
</ol>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The maximum is 38, but the realistic number is 30–32, partly because "sometimes the H<sup>+</sup> can seep through the membrane" instead of going through ATP synthase.</p></div>
<p data-tier="likely">With the modern values: 4 + (10 × 2.5) + (2 × 1.5) = 4 + 25 + 3 = <strong>32 ATP</strong>. If the two glycolysis NADH use the glycerol-3-phosphate shuttle, each is worth only 1.5, giving <strong>30</strong>. That's where 30–32 comes from.</p>

<h4>So where does "36" come from?</h4>
<p>You'll also see 36 ATP. The class review answer key writes "+ 36 ATP" in the overall equation, and the overview slide adds 2 + 2 + 32 = 36. This number assumes the 2 glycolysis NADH use the glycerol-3-phosphate shuttle, so each is worth 2 ATP instead of 3: 38 − 2 = 36. So 36 and 38 are both "textbook maximum" answers that differ only in which shuttle is assumed. That's why the fermentation slide compares fermentation's 2 ATP with "36–38."</p>
<h4 data-tier="likely">How efficient is it?</h4>
<p data-tier="likely">The worksheet treats 94 ATP as 100% efficient (one glucose holds about 2870 kJ/mol, and 2870 ÷ 30.5 per ATP ≈ 94). On that scale, 38 ATP is about <strong>40% efficient</strong>, and realistic yields of 30–32 ATP are about 32–34%. The rest, more than half, is released as heat. That heat is where your body heat comes from.</p>

<h3 data-tier="likely">Shuttles: getting glycolysis's NADH into the mitochondrion</h3>
<p>The 2 NADH made in glycolysis are in the cytosol, but the ETC is in the inner mitochondrial membrane, and NADH can't cross that membrane. So the cell doesn't move the NADH itself. It moves the <strong>electrons</strong>, using a shuttle: a small molecule picks up the electrons in the cytosol, carries them across, and hands them to a carrier on the other side. Either way, the NADH in the cytosol is turned back into NAD<sup>+</sup>, so glycolysis can keep running. There are two shuttles, and they don't pay the same.</p>
<figure class="diagram">
<svg viewBox="0 0 640 260" role="img" aria-labelledby="s204c-title s204c-desc">
<title id="s204c-title">The malate–aspartate and glycerol-3-phosphate shuttles</title>
<desc id="s204c-desc">Two lanes. Top lane, malate–aspartate shuttle: cytosolic NADH is oxidized to NAD+ as it reduces oxaloacetate to malate; malate crosses the inner membrane; in the matrix malate is oxidized and NAD+ becomes NADH again, which gives its electrons to complex I, worth about 3 ATP (class) or 2.5 (modern). Bottom lane, glycerol-3-phosphate shuttle: cytosolic NADH reduces DHAP to glycerol-3-phosphate; an enzyme on the inner membrane oxidizes it and reduces FAD to FADH2, whose electrons go to ubiquinone, skipping complex I, worth about 2 ATP (class) or 1.5 (modern).</desc>
<defs>
<marker id="m204c-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
</defs>
<rect x="0" y="0" width="300" height="260" style="fill:var(--glyco-soft)"/>
<rect x="316" y="0" width="324" height="260" style="fill:var(--surface-2)"/>
<rect x="300" y="0" width="16" height="260" style="fill:var(--line)"/>
<g stroke-width="2" style="fill:var(--surface);stroke:var(--line)">
<rect x="16" y="82" width="100" height="30" rx="6"/>
<rect x="150" y="82" width="70" height="30" rx="6"/>
<rect x="336" y="82" width="100" height="30" rx="6"/>
<rect x="16" y="190" width="100" height="30" rx="6"/>
<rect x="140" y="190" width="96" height="30" rx="6"/>
<rect x="380" y="190" width="156" height="30" rx="6"/>
</g>
<g stroke-width="2" style="fill:var(--etc-soft);stroke:var(--etc)">
<rect x="456" y="82" width="80" height="30" rx="6"/>
<rect x="256" y="190" width="100" height="30" rx="6"/>
</g>
<g stroke-width="2" style="fill:var(--glyco-soft);stroke:var(--glyco)">
<rect x="558" y="82" width="76" height="30" rx="6"/>
<rect x="558" y="190" width="76" height="30" rx="6"/>
</g>
<g stroke-width="2" style="stroke:var(--ink)">
<line x1="116" y1="97" x2="148" y2="97" marker-end="url(#m204c-a)"/>
<line x1="220" y1="97" x2="334" y2="97" marker-end="url(#m204c-a)"/>
<line x1="436" y1="97" x2="454" y2="97" marker-end="url(#m204c-a)"/>
<line x1="536" y1="97" x2="556" y2="97" marker-end="url(#m204c-a)"/>
<line x1="116" y1="205" x2="138" y2="205" marker-end="url(#m204c-a)"/>
<line x1="236" y1="205" x2="254" y2="205" marker-end="url(#m204c-a)"/>
<line x1="356" y1="205" x2="378" y2="205" marker-end="url(#m204c-a)"/>
<line x1="536" y1="205" x2="556" y2="205" marker-end="url(#m204c-a)"/>
</g>
<g font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink)">
<text x="150" y="22" font-size="13" font-weight="700">CYTOSOL</text>
<text x="478" y="22" font-size="13" font-weight="700">MATRIX / ETC</text>
<text x="308" y="252">inner membrane</text>
<text x="66" y="101">NADH → NAD⁺</text>
<text x="185" y="101">malate</text>
<text x="278" y="88" style="fill:var(--ink-2)">crosses</text>
<text x="386" y="101">malate → NADH</text>
<text x="496" y="101">Complex I</text>
<text x="596" y="101" font-weight="700">3 ATP</text>
<text x="596" y="128" font-size="11" style="fill:var(--ink-2)">(≈2.5 modern)</text>
<text x="66" y="209">NADH → NAD⁺</text>
<text x="188" y="209">glycerol-3-P</text>
<text x="306" y="209">FAD → FADH₂</text>
<text x="458" y="209">Q (skips complex I)</text>
<text x="596" y="209" font-weight="700">2 ATP</text>
<text x="596" y="236" font-size="11" style="fill:var(--ink-2)">(≈1.5 modern)</text>
</g>
<g font-family="inherit" font-size="13" style="fill:var(--ink)">
<text x="12" y="52" font-weight="700">1. Malate–aspartate shuttle</text>
<text x="12" y="70" font-size="12" style="fill:var(--ink-2)">liver, heart, kidney</text>
<text x="12" y="158" font-weight="700">2. Glycerol-3-phosphate shuttle</text>
<text x="12" y="176" font-size="12" style="fill:var(--ink-2)">skeletal muscle, brain</text>
</g>
</svg>
<figcaption>Two ways to bring glycolysis's electrons into the mitochondrion. The malate–aspartate shuttle hands them to NAD<sup>+</sup> in the matrix, so they enter at complex I (full value). The glycerol-3-phosphate shuttle hands them to FAD, so they skip complex I and its pump (lower value).</figcaption>
</figure>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Malate–aspartate shuttle</th><th>Glycerol-3-phosphate shuttle</th></tr></thead>
<tbody>
<tr><td>How it works</td><td>Cytosolic NADH reduces oxaloacetate → malate (NAD<sup>+</sup> freed in the cytosol). Malate crosses the inner membrane. In the matrix, malate is oxidized back to oxaloacetate, reducing NAD<sup>+</sup> → NADH. (Oxaloacetate can't cross, so it leaves as the amino acid aspartate, which gives the shuttle its name.)</td><td>Cytosolic NADH reduces DHAP → glycerol-3-phosphate (NAD<sup>+</sup> freed in the cytosol). An enzyme on the outer face of the inner membrane oxidizes it back to DHAP and passes the electrons to FAD → FADH<sub>2</sub>.</td></tr>
<tr><td>Electrons enter the ETC at</td><td>Complex I (as NADH)</td><td>Q, skipping complex I (as FADH<sub>2</sub>; the slide draws this as complex II)</td></tr>
<tr><td>ATP per cytosolic NADH</td><td>3 (class) / about 2.5 (modern)</td><td>2 (class) / about 1.5 (modern)</td></tr>
<tr><td>Speed</td><td>Slower: several steps, and reversible</td><td>Fast and one-way</td></tr>
<tr><td>Main tissues</td><td>Liver, heart, kidney</td><td>Skeletal muscle, brain</td></tr>
<tr><td>Trade-off</td><td>More ATP per glucose (gives the 38 total)</td><td>Less ATP (gives the 36 total), but regenerates cytosolic NAD<sup>+</sup> quickly, so glycolysis can supply ATP fast</td></tr>
</tbody></table></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>With the glycerol-3-phosphate shuttle, NADH's electrons end up on FADH<sub>2</sub>, so you get <strong>less ATP</strong>, <strong>but more NAD<sup>+</sup> is freed up for glycolysis</strong>. That's why it's used by skeletal muscle and the brain, which need a <strong>rapid supply of ATP</strong>.</p></div>
<p data-tier="extra">The shuttle slide's comparison table lists brain and skeletal muscle for both shuttles. That's not wrong: both shuttles run in many tissues. For the test, go with the class notes. The glycerol-3-phosphate shuttle is the one linked to skeletal muscle and brain (fast ATP), and the malate–aspartate shuttle is the main one in liver, heart and kidney.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>In glycolysis, "G3P" means <strong>glyceraldehyde-3-phosphate</strong> (made at steps 4–5). The shuttle uses <strong>glycerol-3-phosphate</strong>, a different molecule made from DHAP. Both get shortened to "G3P", so read carefully. Also: the shuttle doesn't carry NADH across the membrane. It carries the <em>electrons</em>.</p></div>

<h3 data-tier="essential">Why NADH makes more ATP than FADH<sub>2</sub></h3>
<p>This is review question 1, and the answer has three linked parts:</p>
<ol>
<li><strong>Entry point.</strong> NADH's electrons enter the chain at complex I. FADH<sub>2</sub>'s electrons enter at complex II, so they skip complex I.</li>
<li><strong>Energy level.</strong> FAD holds electrons more tightly than NAD<sup>+</sup> does (FADH<sub>2</sub> has a less negative redox potential). Its electrons start lower on the energy staircase, so they have less energy to release.</li>
<li><strong>Fewer protons pumped.</strong> Complex II is not a pump. NADH's electrons pass through three pumps (I, III, IV: 10 H<sup>+</sup>), while FADH<sub>2</sub>'s pass through only two (III, IV: 6 H<sup>+</sup>). A smaller gradient means fewer H<sup>+</sup> flowing through ATP synthase, so fewer ATP: about <strong>3 vs 2</strong> (class) or 2.5 vs 1.5 (modern).</li>
</ol>
<p data-tier="likely">The numbers check out: 10 H<sup>+</sup> ÷ about 4 H<sup>+</sup> per ATP = 2.5 ATP, and 6 ÷ 4 = 1.5 ATP. The modern values follow directly from the proton counts.</p>

<h3 data-tier="likely">Application: The Mystery of the Seven Deaths</h3>
<p>The case study you worked through tests whether you really understand the ETC. Here is the reasoning, part by part.</p>
<h4>Part I: the symptoms</h4>
<p>Seven people in the same neighbourhood died within a few days, most within hours of their symptoms starting. Symptoms: <strong>dizziness, confusion, headache, shortness of breath / rapid breathing, and vomiting</strong>. The strongest link between the victims is that each took <strong>Extra-Strength Tylenol</strong> shortly before collapsing. (Kitchens and bathrooms are simply where people take medicine.) The symptoms point to tissues starved of energy. The brain uses about 20% of the body's oxygen and can't store fuel, so it fails first (dizziness, confusion, headache), followed by the heart.</p>
<h4>Part II: the autopsy</h4>
<ul>
<li><strong>Immediate cause of death: hypoxia</strong>, meaning the cells lacked usable oxygen.</li>
<li><strong>Massive cell death in the heart, lungs, kidneys and liver</strong>, all organs with very high ATP demand.</li>
<li><strong>Major mitochondrial damage.</strong> So the interrupted function is cellular respiration, specifically <strong>oxidative phosphorylation</strong> (ETC + chemiosmosis), which makes about 90% of the cell's ATP. Without ATP, cells can't run their pumps, contract or keep their membranes intact, and they die. When heart and brain cells die, the person dies.</li>
<li><strong>The inconsistency:</strong> blood oxygen was about <strong>110 mm Hg</strong>, above the normal range of 75–100 mm Hg. The victims died of "lack of oxygen" while their blood held <em>more</em> oxygen than normal.</li>
</ul>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>It's easy to read "110 mm Hg" as <strong>blood pressure</strong>, because blood pressure uses the same unit. But mm Hg (millimetres of mercury) is just a unit of pressure. Here it measures the <strong>partial pressure of oxygen in the blood</strong>, which tells you how much O<sub>2</sub> is dissolved in it. (A blood pressure reading looks like 120/80 mm Hg and measures the force of blood on the vessel walls.) The data don't say the heart was pumping hard. They say the blood was <strong>full of oxygen that wasn't being used</strong>. That's the clue.</p></div>
<h4>Part III: the metabolites</h4>
<div class="table-wrap"><table class="data">
<thead><tr><th>Metabolite</th><th>Victims</th><th>Normal</th><th>Role in respiration</th><th>Verdict</th></tr></thead>
<tbody>
<tr><td>Glucose</td><td>99 µM</td><td>100 µM</td><td>Starting substrate (reactant) of glycolysis; stored energy source</td><td>Normal</td></tr>
<tr><td>Pyruvate</td><td>27 µM</td><td>25 µM</td><td>Product of glycolysis and substrate of pyruvate oxidation; links the cytoplasm to the mitochondrion</td><td>Normal</td></tr>
<tr><td>NAD<sup>+</sup></td><td>10 µM</td><td>75 µM</td><td>Oxidized ("empty") carrier, a substrate. Accepts electrons in glycolysis step 6, pyruvate oxidation and Krebs</td><td><strong>Very low</strong> (about 7 times below normal)</td></tr>
<tr><td>NADH</td><td>400 µM</td><td>50 µM</td><td>Reduced ("full") carrier, a product of those steps. Donates electrons to complex I of the ETC</td><td><strong>Very high</strong> (8 times normal)</td></tr>
</tbody></table></div>
<p>ATP in the mitochondria was very low, while pyruvate and acetyl-CoA were normal. Reasoning: glucose, pyruvate and acetyl-CoA are normal, so glycolysis, pyruvate oxidation and the Krebs cycle are working. They keep turning NAD<sup>+</sup> into NADH. But NADH is piling up and NAD<sup>+</sup> has almost vanished, so <strong>NADH is not being oxidized back to NAD<sup>+</sup></strong>. The main place that happens is complex I of the ETC. <strong>Hypothesis: the ETC (oxidative phosphorylation) has failed.</strong> That also explains the very low ATP.</p>
<h4>Part IV: cyanide</h4>
<p>All seven victims tested positive for <strong>cyanide</strong>. Cyanide binds tightly (the case study says irreversibly) to the iron in <strong>cytochrome c oxidase, complex IV</strong>, and prevents the transfer of electrons to oxygen, the final electron acceptor.</p>
<ol class="steps">
<li><p class="step-head">Complex IV is blocked</p><p>Electrons can no longer be handed to O<sub>2</sub>.</p></li>
<li><p class="step-head">The chain backs up</p><p>Cytochrome c, complex III, Q and complex I all stay reduced. Electron flow stops.</p></li>
<li><p class="step-head">No pumping, no gradient, no ATP</p><p>Without electron flow, no H<sup>+</sup> is pumped. The gradient collapses, ATP synthase stops, and ATP crashes.</p></li>
<li><p class="step-head">NADH piles up, NAD<sup>+</sup> runs out</p><p>Complex I can't oxidize NADH, which matches the metabolite data exactly. Without NAD<sup>+</sup>, pyruvate oxidation and Krebs stall.</p></li>
<li><p class="step-head">Only glycolysis + fermentation are left</p><p>That's 2 ATP per glucose instead of up to 38, far too little for the heart and brain. Lactic acid builds up and lowers the blood's pH, which drives the rapid breathing.</p></li>
<li><p class="step-head">Cells die</p><p>Within minutes to hours, high-demand tissues fail and the victim dies.</p></li>
</ol>
<p><strong>Why was blood oxygen high?</strong> Normally, cells constantly pull O<sub>2</sub> out of the blood because complex IV keeps using it up. That use is what keeps O<sub>2</sub> diffusing from blood into cells. With complex IV blocked, the tissues stop consuming O<sub>2</sub>, so it stays in the blood. The victims were suffocating at the cellular level while their blood was full of oxygen. (Even the veins of cyanide victims carry unusually bright red, oxygen-rich blood.)</p>
<p><strong>Would artificial respiration or oxygen have saved them?</strong> No. The problem isn't getting O<sub>2</sub> to the cells; the blood already had more than enough. The problem is that cells <strong>can't use</strong> it, because the step that hands electrons to O<sub>2</sub> is blocked. Adding more O<sub>2</sub> doesn't unblock complex IV. (In real hospitals oxygen is still given as support, but the life-saving treatment is an antidote, such as hydroxocobalamin, a form of vitamin B<sub>12</sub> that binds cyanide.)</p>
<p><strong>Source and response.</strong> Every victim had taken Extra-Strength Tylenol capsules shortly before collapsing, and the capsules had been laced with cyanide. The case is based on the real 1982 Chicago Tylenol poisonings. Public health officials and police should immediately <strong>warn the public</strong>, <strong>recall</strong> the product from store shelves, <strong>test bottles</strong> from the same stores and batches, and <strong>investigate</strong> how the product was tampered with. In 1982, millions of bottles were recalled nationwide, no one was ever convicted of the murders, and the case led directly to <strong>tamper-evident packaging</strong> and stronger laws against product tampering.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>The whole case in one chain: <strong>cyanide blocks complex IV → electrons can't reach O<sub>2</sub> → no H<sup>+</sup> pumping → no gradient → no ATP; NADH can't be oxidized, so NADH rises, NAD<sup>+</sup> falls and Krebs stops; O<sub>2</sub> isn't used, so blood O<sub>2</sub> stays high, and giving more O<sub>2</sub> can't help.</strong></p></div>

<h3 data-tier="extra">Beyond the slides: short-circuiting the gradient</h3>
<p>Some cells deliberately let H<sup>+</sup> leak back across the inner membrane without going through ATP synthase. <strong>Brown fat</strong>, found in newborn babies and hibernating animals, has a channel protein (thermogenin) that does exactly this. The ETC keeps running and burning fuel, but the gradient's energy is released as <strong>heat</strong> instead of being captured as ATP, which keeps the body warm. In the 1930s a chemical called DNP was sold as a diet pill because it does the same thing in every cell. People burned fat quickly, but some overheated and died, and it was banned. Both examples show that the gradient really is the link between electron flow and ATP: break the link, and the energy comes out as heat.</p>

<h3 data-tier="essential">ETC review &amp; research questions</h3>
<p>These six questions are from the end of the ETC slides. Try each one before opening the answer.</p>
<details class="check"><summary>1. Why does a single molecule of NADH, on average, produce more ATP than a single molecule of FADH<sub>2</sub>?</summary><div class="ans"><p>NADH gives its electrons to complex I, while FADH<sub>2</sub> gives its electrons to complex II, which is further down the chain and is not a proton pump. NADH's electrons therefore pass through three proton pumps (I, III, IV, pumping about 10 H<sup>+</sup>), while FADH<sub>2</sub>'s pass through only two (III, IV, about 6 H<sup>+</sup>). FADH<sub>2</sub>'s electrons also start at a lower energy level. Fewer H<sup>+</sup> pumped means a smaller contribution to the gradient and fewer H<sup>+</sup> flowing through ATP synthase: about 3 ATP per NADH vs 2 per FADH<sub>2</sub> (class values).</p></div></details>
<details class="check"><summary>2. How do the mitochondria maintain the chemiosmotic gradient used for the ETC?</summary><div class="ans"><p>Complexes I, III and IV continuously pump H<sup>+</sup> from the matrix into the intermembrane space, powered by the free energy released as electrons pass down the chain. That requires a constant supply of NADH and FADH<sub>2</sub> and of O<sub>2</sub> as the final electron acceptor. The inner membrane is impermeable to H<sup>+</sup>, so H<sup>+</sup> can return only through ATP synthase. Forming water on the matrix side also removes H<sup>+</sup> from the matrix, which steepens the gradient.</p></div></details>
<details class="check"><summary>3. Why is oxygen required for aerobic cellular respiration?</summary><div class="ans"><p>Oxygen is the final electron acceptor. It is the most electronegative member of the chain and pulls electrons through it, accepting them from complex IV and combining with 2 H<sup>+</sup> to form water. Without O<sub>2</sub>, electrons back up, the ETC stops, H<sup>+</sup> pumping and ATP synthesis stop, and NADH and FADH<sub>2</sub> can't be oxidized. NAD<sup>+</sup> and FAD then run out, so pyruvate oxidation and the Krebs cycle stop as well.</p></div></details>
<details class="check"><summary>4. When protons are pumped from the matrix, is this active or passive transport? Is it with or against the concentration gradient?</summary><div class="ans"><p><strong>Active transport, against the concentration gradient.</strong> H<sup>+</sup> is moved from the matrix (low [H<sup>+</sup>]) into the intermembrane space (high [H<sup>+</sup>]), using energy released by electron transfer. (By contrast, H<sup>+</sup> flowing back through ATP synthase is passive, facilitated diffusion, with the gradient.)</p></div></details>
<details class="check"><summary>5. Where is ATP made in the ETC?</summary><div class="ans"><p>At <strong>ATP synthase</strong> (complex V), embedded in the inner mitochondrial membrane (cristae). ATP is formed in its head, which faces the matrix, so the ATP is released into the matrix. The ETC complexes themselves don't make ATP; they build the H<sup>+</sup> gradient that powers ATP synthase (chemiosmosis).</p></div></details>
<details class="check"><summary>6. Why is there a discrepancy in the number of ATP molecules produced in cellular respiration?</summary><div class="ans"><p>(1) Cytosolic NADH from glycolysis can't cross the inner mitochondrial membrane. Depending on the shuttle, its electrons may be passed to FAD (glycerol-3-phosphate shuttle), giving 2 ATP instead of 3. (2) Some H<sup>+</sup> leak back across the membrane without passing through ATP synthase. (3) The strength of the gradient needed and the number of H<sup>+</sup> required per ATP vary among species, so NADH and FADH<sub>2</sub> really yield about 2.5 and 1.5 ATP. So the "perfect textbook" maximum is 38 (or 36), but the realistic yield is 30–32.</p></div></details>
<details class="check" data-tier="likely"><summary>Extra: List the carriers of the ETC in order and circle the proton pumps.</summary><div class="ans"><p>NADH → <strong>complex I</strong> (NADH dehydrogenase) → Q (ubiquinone) → <strong>complex III</strong> (cytochrome bc<sub>1</sub>) → cytochrome c → <strong>complex IV</strong> (cytochrome c oxidase) → O<sub>2</sub>. FADH<sub>2</sub> enters through complex II (succinate dehydrogenase) to Q. Pumps (bold): I, III, IV. Then ATP synthase (complex V) uses the gradient.</p></div></details>
<details class="check" data-tier="likely"><summary>Extra: Using class values, how many ATP does one turn of the Krebs cycle produce once its carriers go through the ETC?</summary><div class="ans"><p>One turn makes 3 NADH, 1 FADH<sub>2</sub> and 1 ATP. Total: 3 × 3 + 1 × 2 + 1 = <strong>12 ATP</strong>. (Two turns per glucose = 24, matching the table above.)</p></div></details>
<details class="check" data-tier="likely"><summary>Extra: Carrier A has a redox potential of −0.30 V and carrier B has +0.25 V. Which way do electrons flow, and which carrier is reduced?</summary><div class="ans"><p>From A to B, from more negative to more positive. B gains the electrons, so B is reduced (it's the oxidizing agent). A loses them, so A is oxidized (it's the reducing agent). Energy is released as they move.</p></div></details>
<details class="check" data-tier="extra"><summary>Extra: A drug blocks ATP synthase but not the ETC. Predict what happens to the H<sup>+</sup> gradient, electron flow and O<sub>2</sub> use.</summary><div class="ans"><p>H<sup>+</sup> can't flow back, so the gradient builds up until it's so steep that the pumps can't push more H<sup>+</sup> against it. Pumping then stalls, electron flow slows to almost nothing, O<sub>2</sub> consumption drops, and NADH builds up. ATP production by oxidative phosphorylation stops. This shows the ETC and ATP synthase are coupled: one can't run without the other.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
<li>The ETC is a series of electron acceptor proteins in the <strong>inner mitochondrial membrane (cristae)</strong>, arranged in order of <strong>increasing electronegativity</strong>.</li>
<li><strong>NADH and FADH<sub>2</sub> each deliver a pair of electrons.</strong> Being oxidized regenerates the NAD<sup>+</sup> and FAD that glycolysis, pyruvate oxidation and Krebs need.</li>
<li>Order: <strong>complex I (NADH dehydrogenase) → Q → complex III (cytochrome bc<sub>1</sub>) → cytochrome c → complex IV (cytochrome c oxidase) → O<sub>2</sub></strong>. FADH<sub>2</sub> enters at <strong>complex II (succinate dehydrogenase)</strong>. Q and cytochrome c are the mobile shuttles.</li>
<li><strong>Proton pumps: I, III, IV.</strong> Complex II is not a pump. ATP synthase (complex V) is not an electron carrier.</li>
<li>Each carrier is reduced by the one before and oxidized by the one after. <strong>More positive redox potential = more likely to gain electrons.</strong> Electrons become more stable as they go, releasing free energy.</li>
<li>That energy pumps H<sup>+</sup> from the matrix into the intermembrane space: <strong>active transport, against the gradient</strong>.</li>
<li>The result is an <strong>electrochemical gradient</strong>: higher [H<sup>+</sup>], lower pH and + charge in the intermembrane space. Water forming on the matrix side steepens it.</li>
<li><strong>O<sub>2</sub> is the final electron acceptor:</strong> ½ O<sub>2</sub> + 2 H<sup>+</sup> + 2 e<sup>−</sup> → H<sub>2</sub>O. Without it the chain backs up, NAD<sup>+</sup>/FAD run out, Krebs stops, and glycolysis continues only through fermentation.</li>
<li><strong>Chemiosmosis:</strong> H<sup>+</sup> flows back through ATP synthase (passive, facilitated diffusion, the only route), phosphorylating ADP into ATP. ETC + chemiosmosis = <strong>oxidative phosphorylation</strong>.</li>
<li>Substrate-level phosphorylation makes 4 ATP per glucose; oxidative phosphorylation makes about 34.</li>
<li><strong>NADH ≈ 3 ATP, FADH<sub>2</sub> ≈ 2 ATP</strong> (FADH<sub>2</sub> skips complex I's pump). <strong>2 + 2 + 30 + 4 = 38 ATP maximum</strong>; 36 if the glycerol-3-phosphate shuttle is used; <strong>realistic 30–32</strong> (shuttles, H<sup>+</sup> leak, H<sup>+</sup>-per-ATP varies by species).</li>
<li>Shuttles: <strong>malate–aspartate</strong> (NADH → complex I, full value; liver, heart, kidney) vs <strong>glycerol-3-phosphate</strong> (→ FADH<sub>2</sub>, less ATP but faster; skeletal muscle, brain).</li>
<li><strong>Cyanide</strong> blocks complex IV: no electron flow, no gradient, no ATP; NADH up and NAD<sup>+</sup> down; blood O<sub>2</sub> stays high because it isn't used, so extra oxygen can't help.</li>
</ul>
`
});

/* ===================================================================
   2.05 Regulation of Cellular Respiration
   =================================================================== */
window.LESSONS.push({
  id: "2.05",
  title: "Regulation of Cellular Respiration",
  stage: "reg",
  where: "Cytoplasm (PFK) and mitochondrial matrix (PDH, Krebs)",
  summary: "Cells speed respiration up or slow it down to match their need for ATP. Two allosteric enzymes do most of the controlling: PFK in glycolysis and pyruvate dehydrogenase at the entrance to the mitochondrion, switched by signals such as ATP, ADP, citrate and NADH.",
  objectives: [
    "Explain why cellular respiration must be regulated, using the idea of matching supply to demand.",
    "Define feedback inhibition and allosteric regulation, and distinguish an enzyme's active site from its allosteric site.",
    "Explain why phosphofructokinase (PFK, step 3) is the main control point of glycolysis, and how ATP, ADP/AMP and citrate affect it.",
    "List the activators and inhibitors of pyruvate dehydrogenase (PDH) and explain the logic behind each one.",
    "Describe how the ATP/ADP balance, citrate and NADH coordinate glycolysis, the Krebs cycle and the ETC.",
    "Predict how the pathway responds in real situations such as rest, sprinting, after a big meal and low oxygen."
  ],
  html: `
<h3 data-tier="essential">Why regulate cellular respiration?</h3>
<p>Your cells don't keep a big stockpile of ATP. At any moment there's only enough for a few seconds of hard work, so ATP is used and remade constantly. Over a day you recycle roughly your own body weight in ATP. ATP production therefore has to keep pace with ATP use, second by second:</p>
<ul>
<li><strong>If respiration runs too slowly</strong>, ATP runs out: muscles can't contract, ion pumps fail, and cells die.</li>
<li><strong>If it runs too fast</strong>, fuel is wasted. Glucose gets burned when it could have been stored as glycogen or fat, and intermediates that could have been used to build other molecules get burned too.</li>
</ul>
<p>The goal is to <strong>match supply to demand</strong>, like a thermostat that turns the furnace on only when the house cools down. Cells do this with a few key enzymes that "sense" the cell's energy status and speed up or slow down. Control doesn't happen at every step. It happens at steps that are <strong>irreversible</strong> and that <strong>commit</strong> a molecule to the pathway, because that's where a single valve controls the whole flow.</p>
<p>Many intermediates are also <strong>branch points</strong>. Glucose-6-phosphate can be stored as glycogen. Pyruvate can become acetyl-CoA, lactate, the amino acid alanine, or new glucose. Citrate can leave the mitochondrion and be used to build fatty acids. Regulation decides which way these molecules go.</p>

<h3 data-tier="essential">Feedback inhibition</h3>
<p><span class="term">Feedback inhibition</span> happens when a product made late in a pathway (often the end product) inhibits an enzyme near the <strong>start</strong> of that pathway. As the product builds up, the pathway slows. As the product is used up, the inhibition fades and the pathway speeds up again. It's negative feedback, so the system corrects itself.</p>
<p>Examples in respiration:</p>
<ul>
<li><strong>ATP</strong>, the end product of the whole process, inhibits <strong>PFK</strong> near the beginning of glycolysis.</li>
<li><strong>Citrate</strong>, made in the Krebs cycle, inhibits <strong>PFK</strong>, so a product of a later stage slows an earlier stage.</li>
<li><strong>NADH</strong> and <strong>acetyl-CoA</strong>, the products of pyruvate oxidation, inhibit <strong>PDH</strong>, the enzyme that makes them.</li>
</ul>
<p><strong>Why inhibit near the start?</strong> If the cell blocked the <em>last</em> step instead, every intermediate before it would pile up, wasting the material and energy already spent making them. Stopping the flow at the source avoids that, like a factory that stops ordering raw materials when its warehouse is full, instead of letting half-built products stack up on the assembly line.</p>

<h3 data-tier="essential">Allosteric enzymes</h3>
<p>"Allo" means <em>other</em> and "steric" refers to <em>shape or space</em>, so "allosteric" means "at another site." An <span class="term">allosteric enzyme</span> has two kinds of binding sites:</p>
<ul>
<li>The <strong>active site</strong>, where the substrate binds and the reaction happens.</li>
<li>One or more <strong>allosteric (regulatory) sites</strong>, elsewhere on the enzyme, where regulator molecules bind.</li>
</ul>
<p>When a regulator binds the allosteric site, the whole enzyme changes shape, and that change reaches the active site. An <strong>allosteric activator</strong> holds the enzyme in its active shape, so the substrate binds easily and the reaction speeds up. An <strong>allosteric inhibitor</strong> holds it in an inactive shape, so the substrate binds poorly and the reaction slows. Regulators bind weakly and <strong>reversibly</strong>: they attach and detach depending on how much of them is around. So an allosteric enzyme's activity always reflects the cell's <em>current</em> conditions. Allosteric enzymes are usually built from several subunits, which helps the shape change spread through the whole enzyme.</p>
<figure class="diagram">
<svg viewBox="0 0 640 230" role="img" aria-labelledby="s205a-title s205a-desc">
<title id="s205a-title">How an allosteric activator and an allosteric inhibitor work</title>
<desc id="s205a-desc">Left: an activator binds the allosteric site on the bottom of the enzyme, the active site on top keeps its rounded shape, and the substrate fits, so the enzyme is active. Right: an inhibitor binds the allosteric site, the active site changes to a narrow shape, and the substrate no longer fits, so the enzyme is slowed.</desc>
<line x1="320" y1="30" x2="320" y2="215" stroke-width="1.5" style="stroke:var(--line)"/>
<g stroke-width="2" style="fill:var(--etc-soft);stroke:var(--etc)">
<path d="M90,70 L138,70 A22,22 0 0 0 182,70 L230,70 Q250,70 250,90 L250,150 Q250,170 230,170 L218,170 L200,148 L182,170 L90,170 Q70,170 70,150 L70,90 Q70,70 90,70 Z"/>
<path d="M410,70 L468,70 L480,84 L492,70 L550,70 Q570,70 570,90 L570,150 Q570,170 550,170 L538,170 L520,148 L502,170 L410,170 Q390,170 390,150 L390,90 Q390,70 410,70 Z"/>
</g>
<g stroke-width="2" style="fill:var(--glyco-soft);stroke:var(--glyco)">
<circle cx="160" cy="68" r="19"/>
<circle cx="548" cy="44" r="17"/>
</g>
<polygon points="186,172 200,154 214,172" style="fill:var(--good)"/>
<polygon points="506,172 520,154 534,172" style="fill:var(--bad)"/>
<g stroke-width="1.5" style="stroke:var(--ink-2)">
<line x1="128" y1="56" x2="142" y2="68"/>
<line x1="454" y1="56" x2="472" y2="72"/>
</g>
<g font-family="inherit" font-size="12" style="fill:var(--ink)">
<text x="160" y="18" font-size="13" font-weight="700" text-anchor="middle">Activator bound</text>
<text x="480" y="18" font-size="13" font-weight="700" text-anchor="middle">Inhibitor bound</text>
<text x="160" y="73" font-size="13" font-weight="700" text-anchor="middle">S</text>
<text x="548" y="49" font-size="13" font-weight="700" text-anchor="middle">S</text>
<text x="140" y="128" text-anchor="middle" style="fill:var(--ink-2)">enzyme</text>
<text x="460" y="128" text-anchor="middle" style="fill:var(--ink-2)">enzyme</text>
<text x="126" y="52" text-anchor="end">active site</text>
<text x="186" y="50">substrate</text>
<text x="176" y="192" text-anchor="end">allosteric site</text>
<text x="222" y="192">activator</text>
<text x="452" y="52" text-anchor="end">active site changed</text>
<text x="496" y="192" text-anchor="end">allosteric site</text>
<text x="542" y="192">inhibitor</text>
<text x="160" y="216" text-anchor="middle" font-weight="700">substrate fits → enzyme active</text>
<text x="480" y="216" text-anchor="middle" font-weight="700">active site changes shape → enzyme slowed</text>
</g>
</svg>
<figcaption>An allosteric regulator never touches the active site. It binds a separate allosteric site and changes the enzyme's overall shape, which makes the active site fit the substrate better (activator) or worse (inhibitor).</figcaption>
</figure>
<div class="compare" data-tier="likely">
<div><h4>Competitive inhibitor</h4><ul>
<li>Looks like the substrate.</li>
<li>Binds the <strong>active site</strong> itself and blocks it.</li>
<li>Competes with the substrate, so lots of substrate can outcompete it.</li>
</ul></div>
<div><h4>Allosteric inhibitor</h4><ul>
<li>Usually looks nothing like the substrate.</li>
<li>Binds a <strong>different site</strong> and changes the enzyme's shape.</li>
<li>Used by cells as a reversible "dimmer switch" for whole pathways (PFK, PDH).</li>
</ul></div>
</div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Allosteric = "another site."</strong> Think of the volume knob on a speaker. You never touch the speaker cone (the active site), but turning the knob on the side changes what comes out.</p></div>

<h3 data-tier="essential">Phosphofructokinase (PFK): the main control point of glycolysis</h3>
<div class="eq">fructose-6-phosphate + ATP → fructose-1,6-bisphosphate + ADP &nbsp;(glycolysis step 3, enzyme PFK)</div>
<p><strong>PFK is the main regulatory allosteric enzyme in glycolysis.</strong> Because it sets the speed of glycolysis, it also sets how fast pyruvate is supplied to everything downstream: pyruvate oxidation, the Krebs cycle and the ETC.</p>
<h4>Why step 3?</h4>
<ul>
<li><strong>It is the first committed step.</strong> Before step 3, the sugar still has other options: glucose-6-phosphate can be stored as glycogen, and fructose-6-phosphate can be turned back into glucose-6-phosphate. Once fructose-1,6-bisphosphate is made, the only thing it can do is continue down glycolysis. The decision "burn this sugar or not" is made here.</li>
<li><strong>It is irreversible in the cell.</strong> The reaction releases a lot of energy, so it acts as a true one-way valve.</li>
<li><strong>It is early.</strong> Shutting the valve near the start means no half-processed intermediates pile up downstream.</li>
<li><strong>It doesn't block storage.</strong> If the cell controlled glycolysis at step 1 instead, it would also stop glucose-6-phosphate from being made, and with it the ability to store glucose as glycogen. Controlling at step 3 stops glucose from being <em>burned</em> while still letting it be <em>stored</em>.</li>
</ul>
<h4>What turns PFK up or down, and why</h4>
<div class="table-wrap"><table class="data">
<thead><tr><th>Signal</th><th>Effect on PFK</th><th>What the signal means</th><th>Why that response makes sense</th></tr></thead>
<tbody>
<tr><td><strong>High ATP</strong></td><td>Inhibits</td><td>The cell has plenty of energy</td><td>No need to break down more glucose; save it (as glycogen or fat) for later. This is feedback inhibition by the end product.</td></tr>
<tr><td><strong>High citrate</strong></td><td>Inhibits</td><td>The Krebs cycle is "full": it already has plenty of acetyl-CoA (often from fat breakdown)</td><td>Sending more pyruvate would just pile up. Citrate also makes ATP's inhibition stronger.</td></tr>
<tr><td><strong>High ADP (and AMP)</strong></td><td>Stimulates</td><td>ATP is being used up faster than it's made</td><td>Speed up glycolysis to make more ATP. AMP appears when the cell is so short of energy that it pulls a phosphate off one ADP to rebuild another (2 ADP → ATP + AMP), so AMP is an emergency signal.</td></tr>
<tr><td><strong>Low citrate</strong></td><td>Stimulates (inhibition removed)</td><td>The Krebs cycle is running low on fuel</td><td>Send more pyruvate toward acetyl-CoA to keep Krebs supplied.</td></tr>
</tbody></table></div>
<div class="callout key"><p class="callout-title">On the test</p><p>Slide wording: PFK is <strong>inhibited by high ATP</strong> and <strong>stimulated by high ADP and low citrate</strong>. High citrate inhibits it too. Always explain the <em>logic</em>: "ATP high means energy is plentiful, so there's no need to make more."</p></div>
<h4 data-tier="likely">ATP is a substrate and an inhibitor at the same time?</h4>
<p data-tier="likely">ATP is a substrate of PFK (it donates the phosphate in step 3), yet high ATP inhibits PFK. How can both be true? PFK has <strong>two different places</strong> where ATP can bind. The <strong>active site</strong> binds ATP strongly, so it is filled even when ATP is fairly low, and PFK works. The <strong>allosteric site</strong> binds ATP weakly, so it fills up only when ATP is abundant. When it does, PFK changes shape and slows down. Low ATP: only the active site is occupied, so PFK runs. High ATP: the allosteric site is occupied too, so PFK slows.</p>
<p data-tier="extra"><strong>Beyond the slides:</strong> a drop in pH (more H<sup>+</sup>) also inhibits PFK. During extremely intense exercise this acts as a safety brake, slowing glycolysis before the muscle cell becomes dangerously acidic.</p>

<h3 data-tier="essential">Pyruvate dehydrogenase (PDH): gatekeeper of the mitochondrion</h3>
<div class="eq">pyruvate + CoA + NAD<sup>+</sup> → acetyl-CoA + CO<sub>2</sub> + NADH &nbsp;(pyruvate dehydrogenase complex)</div>
<p>PDH carries out pyruvate oxidation, the link step. It decides whether pyruvate gets burned in the mitochondrion. This is another one-way, committed step: once pyruvate's carbons become acetyl-CoA, animal cells can't turn them back into pyruvate or glucose. Pyruvate that <em>isn't</em> sent through PDH can instead become lactate, alanine, or (in the liver) new glucose. That's why PDH, like PFK, is an <strong>allosteric enzyme</strong> controlled by several signals.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Regulator</th><th>Effect on PDH</th><th>Slide's reason</th><th>The logic</th></tr></thead>
<tbody>
<tr><td><strong>Pyruvate</strong></td><td>Activates</td><td>High substrate supply</td><td>Lots of pyruvate is arriving from glycolysis. Process it before it piles up and stalls glycolysis.</td></tr>
<tr><td><strong>ADP</strong></td><td>Activates</td><td>Signals low cellular energy</td><td>The cell needs ATP, so feed more acetyl-CoA to Krebs and the ETC.</td></tr>
<tr><td><strong>NAD<sup>+</sup></strong></td><td>Activates</td><td>Reactant availability</td><td>PDH needs NAD<sup>+</sup> to accept electrons. Plenty of NAD<sup>+</sup> also means the ETC is keeping up with oxidizing NADH.</td></tr>
<tr><td><strong>CoA</strong></td><td>Activates</td><td>Reactant availability</td><td>PDH needs free CoA to make acetyl-CoA. Free CoA means acetyl-CoA is being used up by Krebs, so there's room for more.</td></tr>
<tr><td><strong>Acetyl-CoA</strong></td><td>Inhibits</td><td>Product feedback</td><td>Krebs already has plenty of fuel (often from fat breakdown), so pyruvate, and the glucose it came from, can be spared.</td></tr>
<tr><td><strong>NADH</strong></td><td>Inhibits</td><td>Product feedback</td><td>The ETC isn't keeping up (or O<sub>2</sub> is low). Making more NADH would be pointless, and NAD<sup>+</sup> is scarce anyway.</td></tr>
<tr><td><strong>ATP</strong></td><td>Inhibits</td><td>Signals high energy supply</td><td>Energy is plentiful, so there's no need to burn more fuel.</td></tr>
</tbody></table></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>"Empty says go, full says stop."</strong> The regulators come in three pairs. In each pair, the "empty" form activates PDH and the "full" form inhibits it:</p><ul><li><strong>ADP</strong> (empty, go) vs <strong>ATP</strong> (full, stop)</li><li><strong>NAD<sup>+</sup></strong> (empty carrier, go) vs <strong>NADH</strong> (full carrier, stop)</li><li><strong>CoA</strong> (empty, go) vs <strong>acetyl-CoA</strong> (carrying an acetyl group, stop)</li></ul><p>Plus <strong>pyruvate</strong>, PDH's own substrate, says go. What really matters is the ratios: high ATP/ADP, high NADH/NAD<sup>+</sup> and high acetyl-CoA/CoA all slow PDH down.</p></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Pyruvate oxidation is regulated by <strong>ATP and O<sub>2</sub> levels</strong>. When ATP is high, pyruvate doesn't get sent into the mitochondria.</p></div>
<p>The O<sub>2</sub> link works through NADH. Low O<sub>2</sub> stalls the ETC, NADH builds up, and NADH inhibits PDH. So when oxygen is short, pyruvate is diverted to fermentation (lesson 2.07) instead of entering the mitochondrion.</p>
<p data-tier="extra"><strong>Beyond the slides:</strong> besides direct allosteric control, PDH is switched off by having a phosphate group attached to it (by an enzyme called PDH kinase) and switched back on when the phosphate is removed. The kinase is activated by ATP, NADH and acetyl-CoA and inhibited by pyruvate and ADP, so it follows the same logic as the table above.</p>

<h3 data-tier="essential">Controlling the whole pathway</h3>
<p>The class slide sums it up: <strong>aerobic respiration is regulated by the relative concentrations of ATP and ADP, and by the concentrations of citrate and NADH.</strong> Each signal links one stage to another:</p>
<ul>
<li><strong>ATP vs ADP (energy status).</strong> High ATP slows PFK, PDH and key Krebs enzymes; high ADP speeds them up. ADP is also a <em>substrate</em> of ATP synthase. When ADP runs short, ATP synthase slows, H<sup>+</sup> stops flowing back, and the gradient becomes so steep that the pumps can't push more H<sup>+</sup> against it. Electron flow then slows. So the ETC slows automatically when ATP isn't needed, and speeds up as soon as ADP appears.</li>
<li><strong>Citrate.</strong> The first product of the Krebs cycle. High citrate means Krebs is saturated, and it slows PFK. It's a message from the mitochondrion to the cytoplasm that keeps glycolysis from outrunning Krebs.</li>
<li><strong>NADH.</strong> High NADH means the ETC can't oxidize it fast enough. It slows PDH and the NADH-producing enzymes inside the Krebs cycle, because making more NADH would be useless until the ETC catches up.</li>
</ul>
<p>The result is that every stage is linked. The cell's demand for ATP "pulls" the whole pathway: using ATP produces ADP, ADP activates PFK, PDH and ATP synthase, the ETC speeds up and regenerates NAD<sup>+</sup>, and Krebs and pyruvate oxidation speed up in turn.</p>
<figure class="diagram">
<svg viewBox="0 0 640 500" role="img" aria-labelledby="s205b-title s205b-desc">
<title id="s205b-title">Regulation map of cellular respiration</title>
<desc id="s205b-desc">The pathway runs down the centre: glucose, fructose-6-phosphate, PFK, fructose-1,6-bisphosphate, steps 4 to 10, pyruvate, PDH, acetyl-CoA, Krebs cycle, ETC and chemiosmosis. On the left, red lines with flat ends show inhibitors: high ATP and high citrate inhibit PFK; high ATP, high NADH and high acetyl-CoA inhibit PDH. On the right, green arrows show activators: high ADP or AMP and low citrate activate PFK; high pyruvate, high ADP, NAD+ and free CoA activate PDH.</desc>
<defs>
<marker id="m205b-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
<marker id="m205b-g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--good)"/></marker>
<marker id="m205b-r" viewBox="0 0 4 16" refX="2" refY="8" markerWidth="4" markerHeight="16" markerUnits="userSpaceOnUse" orient="auto"><rect x="0" y="0" width="4" height="16" style="fill:var(--bad)"/></marker>
</defs>
<g stroke-width="2" style="fill:var(--surface);stroke:var(--line)">
<rect x="230" y="14" width="180" height="30" rx="6"/>
<rect x="230" y="66" width="180" height="30" rx="6"/>
<rect x="230" y="170" width="180" height="30" rx="6"/>
<rect x="230" y="250" width="180" height="30" rx="6"/>
<rect x="230" y="354" width="180" height="30" rx="6"/>
</g>
<rect x="230" y="118" width="180" height="30" rx="6" stroke-width="2.5" style="fill:var(--glyco-soft);stroke:var(--glyco)"/>
<rect x="230" y="302" width="180" height="30" rx="6" stroke-width="2.5" style="fill:var(--link-soft);stroke:var(--link)"/>
<rect x="230" y="406" width="180" height="30" rx="15" stroke-width="2" style="fill:var(--krebs-soft);stroke:var(--krebs)"/>
<rect x="230" y="458" width="180" height="30" rx="6" stroke-width="2" style="fill:var(--etc-soft);stroke:var(--etc)"/>
<g stroke-width="2" style="stroke:var(--ink-2)">
<line x1="320" y1="44" x2="320" y2="64" marker-end="url(#m205b-a)"/>
<line x1="320" y1="96" x2="320" y2="116" marker-end="url(#m205b-a)"/>
<line x1="320" y1="148" x2="320" y2="168" marker-end="url(#m205b-a)"/>
<line x1="320" y1="200" x2="320" y2="248" stroke-dasharray="5 4" marker-end="url(#m205b-a)"/>
<line x1="320" y1="280" x2="320" y2="300" marker-end="url(#m205b-a)"/>
<line x1="320" y1="332" x2="320" y2="352" marker-end="url(#m205b-a)"/>
<line x1="320" y1="384" x2="320" y2="404" marker-end="url(#m205b-a)"/>
<line x1="320" y1="436" x2="320" y2="456" marker-end="url(#m205b-a)"/>
</g>
<g stroke-width="2" style="fill:var(--surface);stroke:var(--bad)">
<rect x="10" y="97" width="160" height="26" rx="6"/>
<rect x="10" y="139" width="160" height="26" rx="6"/>
<rect x="10" y="270" width="160" height="24" rx="6"/>
<rect x="10" y="305" width="160" height="24" rx="6"/>
<rect x="10" y="340" width="160" height="24" rx="6"/>
</g>
<g stroke-width="2" style="fill:var(--surface);stroke:var(--good)">
<rect x="470" y="97" width="160" height="26" rx="6"/>
<rect x="470" y="139" width="160" height="26" rx="6"/>
<rect x="470" y="254" width="160" height="24" rx="6"/>
<rect x="470" y="288" width="160" height="24" rx="6"/>
<rect x="470" y="322" width="160" height="24" rx="6"/>
<rect x="470" y="356" width="160" height="24" rx="6"/>
</g>
<g stroke-width="2.5" style="stroke:var(--bad)">
<line x1="170" y1="110" x2="228" y2="125" marker-end="url(#m205b-r)"/>
<line x1="170" y1="152" x2="228" y2="141" marker-end="url(#m205b-r)"/>
<line x1="170" y1="282" x2="228" y2="306" marker-end="url(#m205b-r)"/>
<line x1="170" y1="317" x2="228" y2="317" marker-end="url(#m205b-r)"/>
<line x1="170" y1="352" x2="228" y2="328" marker-end="url(#m205b-r)"/>
<line x1="20" y1="456" x2="58" y2="456" marker-end="url(#m205b-r)"/>
</g>
<g stroke-width="2.5" style="stroke:var(--good)">
<line x1="470" y1="110" x2="412" y2="128" marker-end="url(#m205b-g)"/>
<line x1="470" y1="152" x2="412" y2="138" marker-end="url(#m205b-g)"/>
<line x1="470" y1="266" x2="412" y2="307" marker-end="url(#m205b-g)"/>
<line x1="470" y1="300" x2="412" y2="313" marker-end="url(#m205b-g)"/>
<line x1="470" y1="334" x2="412" y2="321" marker-end="url(#m205b-g)"/>
<line x1="470" y1="368" x2="412" y2="327" marker-end="url(#m205b-g)"/>
<line x1="20" y1="430" x2="60" y2="430" marker-end="url(#m205b-g)"/>
</g>
<g font-family="inherit" font-size="13" text-anchor="middle" style="fill:var(--ink)">
<text x="320" y="34">glucose</text>
<text x="320" y="86">fructose-6-phosphate</text>
<text x="320" y="138" font-weight="700">PFK (step 3)</text>
<text x="320" y="190" font-size="12">fructose-1,6-bisphosphate</text>
<text x="320" y="270">pyruvate</text>
<text x="320" y="322" font-weight="700">PDH complex</text>
<text x="320" y="374">acetyl-CoA</text>
<text x="320" y="426">Krebs cycle</text>
<text x="320" y="478">ETC + chemiosmosis</text>
<text x="90" y="115">ATP (high)</text>
<text x="90" y="157">citrate (high)</text>
<text x="90" y="287">ATP (high)</text>
<text x="90" y="322">NADH (high)</text>
<text x="90" y="357">acetyl-CoA (high)</text>
<text x="550" y="115">ADP / AMP (high)</text>
<text x="550" y="157">citrate (low)</text>
<text x="550" y="271">pyruvate (high)</text>
<text x="550" y="305">ADP (high)</text>
<text x="550" y="339">NAD⁺ (high)</text>
<text x="550" y="373">CoA (free)</text>
</g>
<g font-family="inherit" font-size="12" font-weight="700" text-anchor="middle">
<text x="90" y="88" style="fill:var(--bad)">inhibit PFK (−)</text>
<text x="550" y="88" style="fill:var(--good)">activate PFK (+)</text>
<text x="90" y="260" style="fill:var(--bad)">inhibit PDH (−)</text>
<text x="550" y="244" style="fill:var(--good)">activate PDH (+)</text>
</g>
<g font-family="inherit" font-size="12" style="fill:var(--ink-2)">
<text x="330" y="229">steps 4–10</text>
<text x="70" y="434" style="fill:var(--ink)">activates (+)</text>
<text x="70" y="460" style="fill:var(--ink)">inhibits (−)</text>
<text x="466" y="430">ATP, NADH and citrate are</text>
<text x="466" y="447">made by later stages and</text>
<text x="466" y="464">feed back on earlier ones.</text>
</g>
</svg>
<figcaption>Regulation map. Green arrows activate; red lines ending in a bar inhibit. PFK controls glycolysis and PDH controls entry into the mitochondrion. Products made further down (ATP, citrate, NADH, acetyl-CoA) slow the enzymes upstream: feedback inhibition.</figcaption>
</figure>
<p data-tier="extra">Inside the Krebs cycle itself (beyond the slides), the enzymes that make NADH, such as isocitrate dehydrogenase, are also slowed by NADH and ATP and sped up by ADP. It's the same logic again.</p>

<h3 data-tier="likely">Scenarios: putting it together</h3>
<p>Tests often give you a situation and ask what happens. Work through it in this order: <strong>What is the energy status (ATP vs ADP)? Is O<sub>2</sub> available (what is NADH doing)? Is fuel piling up (citrate, acetyl-CoA)?</strong> Then apply the regulators.</p>
<h4>1. Resting on the couch</h4>
<p>ATP is high and ADP is low. Krebs is well supplied, so citrate and NADH are high. PFK is inhibited (high ATP and citrate) and PDH is inhibited (high ATP and NADH). Respiration idles at a low rate. Glucose entering cells is turned into glucose-6-phosphate and stored as glycogen. That's possible because the brake is at step 3, not step 1. Resting muscle actually gets much of its energy from fat: acetyl-CoA from fat breakdown inhibits PDH and the resulting citrate inhibits PFK, which <strong>spares glucose</strong> for the brain.</p>
<h4>2. Sprinting</h4>
<p>Muscle hydrolyzes ATP extremely fast, so ADP and AMP rise sharply. PFK is strongly activated and glycolysis speeds up dramatically. ADP and the flood of pyruvate also activate PDH, and Krebs and the ETC speed up. But O<sub>2</sub> delivery to the muscle can't keep up. The ETC slows locally, NADH builds up and NAD<sup>+</sup> falls. High NADH inhibits PDH, so extra pyruvate is turned into lactate (fermentation), which regenerates NAD<sup>+</sup> so glycolysis can keep making ATP. (More in lesson 2.07.)</p>
<h4>3. After a big meal, sitting down</h4>
<p>Lots of glucose is available, but ATP demand is low. ATP and citrate are high, so PFK slows. Glucose is stored as glycogen in the liver and muscles. Extra citrate is exported from the mitochondrion into the cytoplasm, where it is used to build fatty acids, so surplus energy ends up stored as fat. (Beyond the slides: in the liver, the hormone insulin triggers production of an extra PFK activator that overrides ATP's brake, so excess glucose can be turned into fat. You won't be tested on this.)</p>
<h4>4. Oxygen cut off (holding your breath, or cyanide)</h4>
<p>The ETC stops, so NADH soars and NAD<sup>+</sup> crashes. PDH and the Krebs cycle are inhibited. ATP falls and ADP/AMP rise, so PFK is activated and glycolysis runs flat out, kept going only by fermentation. The cell burns through glucose very quickly for just 2 ATP each.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Situation</th><th>ATP / ADP</th><th>NADH</th><th>Citrate</th><th>PFK</th><th>PDH</th><th>Outcome</th></tr></thead>
<tbody>
<tr><td>Resting</td><td>ATP high</td><td>High</td><td>High</td><td>Slowed</td><td>Slowed</td><td>Respiration idles; glucose stored; fat used</td></tr>
<tr><td>Sprinting</td><td>ADP/AMP high</td><td>Rising (low O<sub>2</sub>)</td><td>Not the main signal</td><td>Strongly on</td><td>On, then held back by NADH</td><td>Fast glycolysis; extra pyruvate becomes lactate</td></tr>
<tr><td>After a big meal</td><td>ATP high</td><td>High</td><td>High</td><td>Slowed</td><td>Slowed</td><td>Glucose to glycogen; citrate to fat</td></tr>
<tr><td>No O<sub>2</sub></td><td>ADP/AMP high</td><td>Very high</td><td>Not the main signal (Krebs stalled)</td><td>On</td><td>Off</td><td>Glycolysis + fermentation only (2 ATP)</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Quick checks</h3>
<details class="check"><summary>Why does the cell regulate cellular respiration at all?</summary><div class="ans"><p>To match ATP production to ATP demand. The cell stores very little ATP, so it must make ATP as fast as it's used. Making too little starves the cell; making too much wastes fuel that could have been stored (as glycogen or fat) or used to build other molecules.</p></div></details>
<details class="check"><summary>What does "allosteric" mean, and how does an allosteric inhibitor slow an enzyme?</summary><div class="ans"><p>Allosteric means "another site." An allosteric inhibitor binds a regulatory site that is separate from the active site. This changes the shape of the whole enzyme, including the active site, so the substrate binds poorly and the reaction slows. The binding is reversible, so activity follows the inhibitor's concentration.</p></div></details>
<details class="check"><summary>Define feedback inhibition and give an example from cellular respiration.</summary><div class="ans"><p>Feedback inhibition is when a product made late in a pathway inhibits an enzyme early in the pathway, so the pathway slows as product builds up. Example: ATP, the end product of respiration, allosterically inhibits PFK at step 3 of glycolysis. (Also: NADH and acetyl-CoA inhibit PDH; citrate inhibits PFK.)</p></div></details>
<details class="check"><summary>Why is PFK, rather than hexokinase (step 1), the main control point of glycolysis?</summary><div class="ans"><p>Step 3 is the first committed step. Before it, glucose-6-phosphate can still be stored as glycogen, but fructose-1,6-bisphosphate can only continue through glycolysis. Controlling at step 3 stops glucose from being burned without blocking its storage. The step is also irreversible and early, so no intermediates pile up downstream.</p></div></details>
<details class="check"><summary>A cell has high ATP and high citrate. What happens to PFK and to the rate of glycolysis? Why does this make sense?</summary><div class="ans"><p>Both ATP and citrate inhibit PFK, so glycolysis slows. High ATP means energy is plentiful; high citrate means the Krebs cycle already has plenty of fuel. Making more pyruvate would waste glucose that can be stored instead.</p></div></details>
<details class="check"><summary>Sort these into activators and inhibitors of PDH: ATP, NAD<sup>+</sup>, acetyl-CoA, pyruvate, NADH, CoA, ADP.</summary><div class="ans"><p><strong>Activators:</strong> pyruvate (substrate supply), ADP (low energy), NAD<sup>+</sup> and CoA (reactant availability). <strong>Inhibitors:</strong> acetyl-CoA and NADH (product feedback), ATP (high energy). Trick: the "empty" forms (ADP, NAD<sup>+</sup>, CoA) say go; the "full" forms (ATP, NADH, acetyl-CoA) say stop.</p></div></details>
<details class="check"><summary>Explain why NADH inhibits PDH, using the term "feedback."</summary><div class="ans"><p>NADH is a product of the PDH reaction, so its inhibition of PDH is product (feedback) inhibition. High NADH means the ETC isn't oxidizing NADH fast enough (for example, because O<sub>2</sub> is low), so NAD<sup>+</sup> is scarce and making more NADH would be useless. Slowing PDH prevents a pile-up and sends pyruvate toward other fates, such as lactate.</p></div></details>
<details class="check"><summary>ATP is a substrate of PFK, yet high ATP inhibits PFK. Explain.</summary><div class="ans"><p>PFK binds ATP at two different sites. The active site binds ATP strongly (as the phosphate donor) and is filled even at low ATP. The allosteric site binds ATP weakly and fills only when ATP is abundant. When it does, PFK changes shape and slows down. So ATP is used as a substrate at normal levels but acts as an inhibitor when there's a surplus.</p></div></details>
<details class="check" data-tier="likely"><summary>If ATP synthase suddenly stopped working, predict what would happen to NADH levels and to PDH activity.</summary><div class="ans"><p>With ATP synthase blocked, H<sup>+</sup> can't flow back, so the gradient builds up until the pumps can't push more H<sup>+</sup>. Electron flow stops, and NADH can no longer be oxidized: NADH rises and NAD<sup>+</sup> falls. High NADH (and falling NAD<sup>+</sup>) inhibits PDH, so pyruvate oxidation and the Krebs cycle slow down. Meanwhile ATP falls and ADP rises, which activates PFK, and the cell relies on glycolysis and fermentation.</p></div></details>
<details class="check" data-tier="likely"><summary>During a sprint, why does extra pyruvate become lactate instead of acetyl-CoA, even though ADP is high?</summary><div class="ans"><p>O<sub>2</sub> delivery can't keep up, so the ETC slows and NADH accumulates. High NADH (a product inhibitor) holds PDH back even though ADP is activating it, and NAD<sup>+</sup> (needed by PDH) is scarce. Pyruvate is instead reduced to lactate, which regenerates the NAD<sup>+</sup> that glycolysis needs to keep making ATP.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
<li>Respiration is regulated to <strong>match ATP supply to demand</strong>: too little ATP kills cells, and too much wastes fuel that could be stored.</li>
<li><strong>Feedback inhibition:</strong> a late product inhibits an early enzyme (ATP inhibits PFK; NADH and acetyl-CoA inhibit PDH; citrate inhibits PFK).</li>
<li><strong>Allosteric enzymes</strong> have an active site and a separate allosteric (regulatory) site. Regulators bind reversibly and change the enzyme's shape, activating or inhibiting it.</li>
<li><strong>PFK</strong> (step 3) is the <strong>main regulatory allosteric enzyme of glycolysis</strong> because step 3 is the first committed, irreversible step.</li>
<li>PFK is <strong>inhibited by high ATP and high citrate</strong> and <strong>stimulated by high ADP/AMP and low citrate</strong>.</li>
<li><strong>PDH</strong> (allosteric) is <strong>activated by pyruvate</strong> (substrate supply), <strong>ADP</strong> (low energy), and <strong>NAD<sup>+</sup> and CoA</strong> (reactant availability). It is <strong>inhibited by acetyl-CoA and NADH</strong> (product feedback) and <strong>ATP</strong> (high energy). "Empty says go, full says stop."</li>
<li>Overall, <strong>aerobic respiration is regulated by the relative concentrations of ATP and ADP, and by citrate and NADH</strong>. ADP availability also controls ATP synthase and therefore the ETC.</li>
<li>Low O<sub>2</sub>: NADH rises, PDH is inhibited, and pyruvate goes to fermentation. Low ATP: ADP/AMP rise, PFK is activated, and glycolysis speeds up.</li>
</ul>
`
});

/* ===================================================================
   2.06 Lipid & Protein Catabolism
   =================================================================== */
window.LESSONS.push({
  id: "2.06",
  title: "Lipid & Protein Catabolism",
  stage: "cat",
  where: "Cytoplasm, mitochondrial matrix and liver",
  summary: "When glycogen runs low, cells burn fats and then proteins as alternate fuels. Each is first hydrolyzed into monomers, which are converted into molecules that join cellular respiration at glycolysis, pyruvate, acetyl-CoA or the Krebs cycle.",
  objectives: [
    "Describe how the breakdown pathways for carbohydrates, lipids, proteins and nucleic acids connect to cellular respiration.",
    "State the order in which the body uses its fuels and explain why nucleic acids are rarely used for energy.",
    "Define hydrolysis, gluconeogenesis, β-oxidation and deamination.",
    "Explain how glycerol and fatty acids enter cellular respiration, and why fats store so much energy.",
    "Explain how amino acids are deaminated in the liver, what happens to the ammonia, and where their carbon skeletons enter respiration.",
    "Describe how lipids and proteins enter the metabolic cycles of cellular respiration (review Q17)."
  ],
  html: `
<h3 data-tier="essential">The interconnections of metabolic pathways</h3>
<p>So far, every lesson has followed glucose. But you also eat fats and proteins, and your body stores fat in large amounts. The cell doesn't need a separate set of machinery for each fuel. Instead, the breakdown of every kind of macromolecule <strong>funnels into the same pathways</strong> you already know: glycolysis, pyruvate oxidation, the Krebs cycle and the ETC. Glycolysis and the Krebs cycle act as a central hub for metabolism.</p>
<p>There are only a few <strong>entry points</strong>:</p>
<ul>
<li><strong>Glycolysis:</strong> simple sugars, and glycerol from fats (as DHAP).</li>
<li><strong>Pyruvate:</strong> some amino acids (such as alanine and glycine).</li>
<li><strong>Acetyl-CoA:</strong> fatty acids (by β-oxidation) and some amino acids (such as leucine and lysine).</li>
<li><strong>Krebs cycle intermediates:</strong> some amino acids enter directly (such as glutamate as α-ketoglutarate).</li>
</ul>
<p>Whatever the fuel, the final products are the same: <strong>CO<sub>2</sub></strong> and <strong>H<sub>2</sub>O</strong> (plus ATP). Proteins add one more waste product, <strong>ammonia (NH<sub>3</sub>)</strong>, from their nitrogen.</p>
<figure class="diagram">
<svg viewBox="0 0 640 500" role="img" aria-labelledby="s206a-title s206a-desc">
<title id="s206a-title">How all classes of nutrients enter cellular respiration</title>
<desc id="s206a-desc">Top row: nucleic acids, proteins, polysaccharides and lipids are hydrolyzed into nucleotides, amino acids, simple sugars, and glycerol plus fatty acids. Nucleotides are rarely used because their parts are recycled. Amino acids are deaminated in the liver, giving ammonia, which becomes urea, and carbon skeletons that enter at pyruvate, acetyl-CoA or the Krebs cycle. Simple sugars enter glycolysis. Glycerol enters glycolysis as DHAP. Fatty acids undergo beta-oxidation to acetyl-CoA. Glycolysis leads to pyruvate, then acetyl-CoA, the Krebs cycle, which releases carbon dioxide, and the ETC, which makes ATP and water.</desc>
<defs>
<marker id="m206a-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
</defs>
<g stroke-width="2" style="fill:var(--surface);stroke:var(--line)">
<rect x="10" y="12" width="130" height="30" rx="6"/>
<rect x="160" y="12" width="140" height="30" rx="6"/>
<rect x="320" y="12" width="140" height="30" rx="6"/>
<rect x="474" y="12" width="160" height="30" rx="6"/>
<rect x="10" y="92" width="130" height="30" rx="6"/>
<rect x="160" y="92" width="140" height="30" rx="6"/>
<rect x="320" y="92" width="140" height="30" rx="6"/>
<rect x="474" y="92" width="70" height="30" rx="6"/>
<rect x="552" y="92" width="82" height="30" rx="6"/>
<rect x="160" y="172" width="140" height="30" rx="6"/>
<rect x="320" y="238" width="140" height="30" rx="6"/>
<rect x="482" y="385" width="80" height="30" rx="6"/>
</g>
<rect x="10" y="160" width="120" height="40" rx="6" stroke-width="2" stroke-dasharray="5 4" style="fill:var(--surface-2);stroke:var(--ink-2)"/>
<rect x="10" y="236" width="130" height="40" rx="6" stroke-width="2" style="fill:var(--proton-soft);stroke:var(--proton)"/>
<rect x="320" y="160" width="140" height="30" rx="6" stroke-width="2" style="fill:var(--glyco-soft);stroke:var(--glyco)"/>
<rect x="320" y="308" width="140" height="30" rx="6" stroke-width="2" style="fill:var(--link-soft);stroke:var(--link)"/>
<circle cx="390" cy="400" r="34" stroke-width="2" style="fill:var(--krebs-soft);stroke:var(--krebs)"/>
<rect x="320" y="452" width="140" height="30" rx="6" stroke-width="2" style="fill:var(--etc-soft);stroke:var(--etc)"/>
<g stroke-width="2" fill="none" style="stroke:var(--ink-2)">
<line x1="75" y1="42" x2="75" y2="90" marker-end="url(#m206a-a)"/>
<line x1="230" y1="42" x2="230" y2="90" marker-end="url(#m206a-a)"/>
<line x1="390" y1="42" x2="390" y2="90" marker-end="url(#m206a-a)"/>
<line x1="540" y1="42" x2="512" y2="90" marker-end="url(#m206a-a)"/>
<line x1="568" y1="42" x2="590" y2="90" marker-end="url(#m206a-a)"/>
<line x1="70" y1="122" x2="70" y2="158" marker-end="url(#m206a-a)"/>
<line x1="230" y1="122" x2="230" y2="170" marker-end="url(#m206a-a)"/>
<path d="M160,107 L150,107 L150,256 L142,256" marker-end="url(#m206a-a)"/>
<line x1="390" y1="122" x2="390" y2="158" marker-end="url(#m206a-a)"/>
<line x1="390" y1="190" x2="390" y2="236" marker-end="url(#m206a-a)"/>
<line x1="390" y1="268" x2="390" y2="306" marker-end="url(#m206a-a)"/>
<line x1="390" y1="338" x2="390" y2="364" marker-end="url(#m206a-a)"/>
<line x1="390" y1="434" x2="390" y2="450" marker-end="url(#m206a-a)"/>
<line x1="509" y1="122" x2="462" y2="172" marker-end="url(#m206a-a)"/>
<path d="M593,122 L593,323 L462,323" marker-end="url(#m206a-a)"/>
<path d="M230,202 L230,400"/>
<line x1="230" y1="253" x2="318" y2="253" marker-end="url(#m206a-a)"/>
<line x1="230" y1="323" x2="318" y2="323" marker-end="url(#m206a-a)"/>
<line x1="230" y1="400" x2="354" y2="400" marker-end="url(#m206a-a)"/>
<line x1="424" y1="400" x2="480" y2="400" marker-end="url(#m206a-a)"/>
</g>
<g font-family="inherit" font-size="13" text-anchor="middle" style="fill:var(--ink)">
<text x="75" y="32" font-weight="700">Nucleic acids</text>
<text x="230" y="32" font-weight="700">Proteins</text>
<text x="390" y="32" font-weight="700">Polysaccharides</text>
<text x="554" y="32" font-weight="700">Lipids (fats)</text>
<text x="75" y="112">Nucleotides</text>
<text x="230" y="112">Amino acids</text>
<text x="390" y="112">Simple sugars</text>
<text x="509" y="112" font-size="12">Glycerol</text>
<text x="593" y="112" font-size="12">Fatty acids</text>
<text x="70" y="176" font-size="12">rarely used:</text>
<text x="70" y="193" font-size="12">parts recycled</text>
<text x="230" y="192">Carbon skeletons</text>
<text x="75" y="253" font-weight="700">NH₃ (ammonia)</text>
<text x="75" y="270" font-size="12">→ urea, excreted</text>
<text x="390" y="180">Glycolysis</text>
<text x="390" y="258">Pyruvate</text>
<text x="390" y="328">Acetyl-CoA</text>
<text x="390" y="398">Krebs</text>
<text x="390" y="414">cycle</text>
<text x="390" y="472">ETC → ATP + H₂O</text>
<text x="522" y="405">CO₂</text>
</g>
<g font-family="inherit" font-size="12" style="fill:var(--ink-2)">
<text x="83" y="72">hydrolysis</text>
<text x="238" y="146">deamination</text>
<text x="238" y="161">(in the liver)</text>
<text x="488" y="162">as DHAP</text>
<text x="585" y="230" text-anchor="end">β-oxidation</text>
<text x="12" y="466" font-size="13" font-weight="700" style="fill:var(--ink)">Final products:</text>
<text x="12" y="484">NH₃, CO₂, H₂O (+ ATP)</text>
</g>
</svg>
<figcaption>All classes of nutrients can be used for energy. Macromolecules are hydrolyzed into monomers (top two rows), and the monomers join cellular respiration at a few entry points. The final products are NH<sub>3</sub> (from proteins), CO<sub>2</sub> and H<sub>2</sub>O.</figcaption>
</figure>

<h3 data-tier="essential">When and in what order fuels are used</h3>
<p>Lipid and protein catabolism kicks in <strong>when glycogen stores are low</strong>. Fats and proteins act as an <strong>alternate source of energy</strong>. The body uses its fuels in a clear order:</p>
<ol class="steps">
<li><p class="step-head">Carbohydrates first</p><p>Blood glucose and glycogen (stored in the liver and muscles) are the quickest to use. Glucose can also be broken down without oxygen (glycolysis + fermentation), and the brain and red blood cells depend on it. But glycogen stores are small, enough for less than a day without food.</p></li>
<li><p class="step-head">Lipids (fats) second</p><p>Fat is the body's main long-term energy store, and there's a lot of it. It's slower to mobilize, and burning fatty acids requires oxygen, because they enter as acetyl-CoA and have to go through Krebs and the ETC.</p></li>
<li><p class="step-head">Proteins last</p><p>Proteins aren't stored as fuel. Every protein has a job: enzymes, muscle fibres, transporters, antibodies, hormones. Burning protein means breaking down working tissue (mostly muscle), and it produces toxic ammonia. Heavy protein use happens only in <strong>severe fasting or starvation</strong>.</p></li>
<li><p class="step-head">Nucleic acids: rarely</p><p>DNA and RNA make up a small fraction of the cell, and their parts (bases, sugars, phosphates) are valuable. Instead of being burned, <strong>the components are usually recycled</strong> to build new nucleic acids.</p></li>
</ol>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Lipids are consumed before proteins, and proteins before nucleic acids. Protein breakdown for energy only happens during <strong>severe fasting</strong>.</p></div>
<p data-tier="likely">One nuance: even early in a fast, a little protein is broken down. The brain needs glucose, and as you'll see below, fatty acids can't be turned into glucose, so some amino acids are used to make it. Large-scale protein breakdown is what marks true starvation.</p>

<h3 data-tier="essential">Key term: gluconeogenesis</h3>
<p><span class="term">Gluconeogenesis</span> means making new glucose from non-carbohydrate sources ("gluco" = glucose, "neo" = new, "genesis" = creation). The raw materials include <strong>glycerol</strong> (from fats), <strong>lactate</strong> (from fermentation), and the carbon skeletons of many <strong>amino acids</strong>. It happens mainly in the <strong>liver</strong>.</p>
<p><strong>Why bother?</strong> When glycogen runs out, blood glucose still has to stay up, because the brain and red blood cells depend on it. Red blood cells have no mitochondria, so they can only use glucose (by glycolysis), and the brain can't use fatty acids directly. Gluconeogenesis is <strong>anabolic</strong>: it costs ATP, roughly the reverse of glycolysis, but it uses different enzymes for the three irreversible steps.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Gluconeogenesis is not the same as glycogenolysis (breaking stored glycogen back down into glucose) or glycogenesis (making glycogen). <strong>Neo = new</strong>: gluconeogenesis builds glucose from scratch out of molecules that weren't sugars.</p></div>

<h3 data-tier="essential">Step 1: hydrolysis into monomers</h3>
<p>Before any macromolecule can enter respiration, it is <strong>hydrolyzed into its monomers</strong>. <span class="term">Hydrolysis</span> means breaking a bond by adding water (the reverse of dehydration synthesis). It's catabolic and is carried out by digestive and cellular enzymes:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Macromolecule</th><th>Hydrolyzed into</th><th>Enters respiration as</th></tr></thead>
<tbody>
<tr><td>Polysaccharides (starch, glycogen)</td><td>Simple sugars (glucose)</td><td>Glycolysis</td></tr>
<tr><td>Lipids (triglycerides / fats)</td><td>Glycerol + 3 fatty acids</td><td>Glycerol → DHAP (glycolysis); fatty acids → acetyl-CoA</td></tr>
<tr><td>Proteins</td><td>Amino acids</td><td>After deamination: pyruvate, acetyl-CoA or Krebs intermediates</td></tr>
<tr><td>Nucleic acids</td><td>Nucleotides</td><td>Rarely used; parts are recycled</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Lipid catabolism</h3>
<p>A fat (triglyceride) is one <strong>glycerol</strong> attached to <strong>three fatty acid</strong> chains. After hydrolysis, the two parts take different routes.</p>
<h4>Glycerol: into glycolysis, or into new glucose</h4>
<p>Glycerol is a small 3-carbon molecule. Through an enzyme conversion (a phosphate is added and the molecule is oxidized), it becomes <strong>DHAP</strong> (dihydroxyacetone phosphate), the same 3-carbon molecule made at step 4 of glycolysis. From there it has two possible fates:</p>
<ul>
<li><strong>Glycerol → DHAP → glycolysis.</strong> DHAP is converted to glyceraldehyde-3-phosphate (step 5) and continues through the payoff phase to pyruvate, acetyl-CoA, Krebs and the ETC, producing CO<sub>2</sub>, ATP and H<sub>2</sub>O.</li>
<li><strong>Glycerol → glucose by gluconeogenesis</strong> (liver synthesis). The liver can run the pathway "uphill" to build new glucose for the brain and red blood cells.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Which way glycerol goes depends on how low glucose is. When glucose is only <strong>somewhat low</strong>, glycerol is converted to DHAP and burned through glycolysis. When glucose is <strong>really low</strong>, glycerol is used to make new glucose by gluconeogenesis.</p></div>
<h4>Fatty acids: β-oxidation to acetyl-CoA</h4>
<p>Fatty acids are long hydrocarbon chains, often 16 or 18 carbons. In the <strong>mitochondrial matrix</strong>, they go through <span class="term">β-oxidation</span> (beta-oxidation): the chain is cut <strong>two carbons at a time</strong>, and each 2-carbon piece becomes one <strong>acetyl-CoA</strong>, which enters the Krebs cycle. Each cut also produces <strong>1 NADH and 1 FADH<sub>2</sub></strong>, which go straight to the ETC. The name comes from where the chain is oxidized and cut: at the "beta" carbon, the second carbon after the acid (carboxyl) group. Getting started costs the equivalent of 2 ATP, because the fatty acid has to be "activated" by attaching it to CoA.</p>
<figure class="diagram">
<svg viewBox="0 0 640 160" role="img" aria-labelledby="s206b-title s206b-desc">
<title id="s206b-title">Beta-oxidation of a 16-carbon fatty acid</title>
<desc id="s206b-desc">A chain of 16 carbon atoms is shown as eight 2-carbon units. Seven dashed cut lines separate them. Seven rounds of beta-oxidation give 8 acetyl-CoA, 7 NADH and 7 FADH2.</desc>
<g stroke-width="2" style="fill:var(--link-soft);stroke:var(--link)">
<rect x="36" y="52" width="68" height="36" rx="18"/>
<rect x="108" y="52" width="68" height="36" rx="18"/>
<rect x="180" y="52" width="68" height="36" rx="18"/>
<rect x="252" y="52" width="68" height="36" rx="18"/>
<rect x="324" y="52" width="68" height="36" rx="18"/>
<rect x="396" y="52" width="68" height="36" rx="18"/>
<rect x="468" y="52" width="68" height="36" rx="18"/>
<rect x="540" y="52" width="68" height="36" rx="18"/>
</g>
<g stroke-width="1.5" style="fill:var(--surface);stroke:var(--ink-2)">
<circle cx="52" cy="70" r="12"/><circle cx="88" cy="70" r="12"/>
<circle cx="124" cy="70" r="12"/><circle cx="160" cy="70" r="12"/>
<circle cx="196" cy="70" r="12"/><circle cx="232" cy="70" r="12"/>
<circle cx="268" cy="70" r="12"/><circle cx="304" cy="70" r="12"/>
<circle cx="340" cy="70" r="12"/><circle cx="376" cy="70" r="12"/>
<circle cx="412" cy="70" r="12"/><circle cx="448" cy="70" r="12"/>
<circle cx="484" cy="70" r="12"/><circle cx="520" cy="70" r="12"/>
<circle cx="556" cy="70" r="12"/><circle cx="592" cy="70" r="12"/>
</g>
<g stroke-width="2" stroke-dasharray="4 3" style="stroke:var(--proton)">
<line x1="106" y1="42" x2="106" y2="98"/><line x1="178" y1="42" x2="178" y2="98"/>
<line x1="250" y1="42" x2="250" y2="98"/><line x1="322" y1="42" x2="322" y2="98"/>
<line x1="394" y1="42" x2="394" y2="98"/><line x1="466" y1="42" x2="466" y2="98"/>
<line x1="538" y1="42" x2="538" y2="98"/>
</g>
<g font-family="inherit" font-size="12" text-anchor="middle" style="fill:var(--ink)">
<text x="52" y="74">C</text><text x="88" y="74">C</text><text x="124" y="74">C</text><text x="160" y="74">C</text>
<text x="196" y="74">C</text><text x="232" y="74">C</text><text x="268" y="74">C</text><text x="304" y="74">C</text>
<text x="340" y="74">C</text><text x="376" y="74">C</text><text x="412" y="74">C</text><text x="448" y="74">C</text>
<text x="484" y="74">C</text><text x="520" y="74">C</text><text x="556" y="74">C</text><text x="592" y="74">C</text>
</g>
<g font-family="inherit" font-size="13" style="fill:var(--ink)">
<text x="36" y="28" font-weight="700">Palmitic acid: 16 carbons</text>
<text x="604" y="28" text-anchor="end" font-size="12" style="fill:var(--proton)">dashed line = one cut</text>
<text x="320" y="122" text-anchor="middle">7 cuts (rounds of β-oxidation) → 8 acetyl-CoA</text>
<text x="320" y="144" text-anchor="middle" font-size="12" style="fill:var(--ink-2)">each cut also makes 1 NADH + 1 FADH₂, so 7 NADH + 7 FADH₂ in total</text>
</g>
</svg>
<figcaption>β-oxidation chops a fatty acid into 2-carbon acetyl units. A 16-carbon chain needs 7 cuts and gives 8 acetyl-CoA, and every cut also yields NADH and FADH<sub>2</sub> for the ETC.</figcaption>
</figure>
<h4>Why fats are so energy-dense</h4>
<p>Gram for gram, fat stores about twice as much energy as carbohydrate (about 37 kJ/g vs 17 kJ/g, or 9 vs 4 Calories per gram). There are two reasons:</p>
<ol>
<li><strong>Fatty acids are highly reduced.</strong> They are long chains of C–H bonds with almost no oxygen. Every carbon has lots of electrons still to give away to NAD<sup>+</sup> and FAD. Glucose is already partly oxidized (it has one oxygen for every carbon), so it has fewer electrons left to give. More electrons means more NADH and FADH<sub>2</sub>, which means more ATP.</li>
<li><strong>One fatty acid makes many acetyl-CoA.</strong> A 16-carbon fatty acid gives 8 acetyl-CoA, plus 7 NADH and 7 FADH<sub>2</sub> from the cuts themselves. One glucose gives only 2 acetyl-CoA.</li>
</ol>
<p data-tier="likely"><strong>Worked example (class values: NADH = 3, FADH<sub>2</sub> = 2 ATP).</strong> Palmitic acid (16 C): 8 acetyl-CoA through Krebs, each worth 3 NADH (9) + 1 FADH<sub>2</sub> (2) + 1 ATP = 12 ATP, so 96 ATP. The 7 cuts add 7 NADH (21) + 7 FADH<sub>2</sub> (14) = 35 ATP. Total 96 + 35 = 131, minus 2 for activation = <strong>129 ATP</strong>, compared with 38 for glucose. (With modern values, about 106 vs 30–32.) Per carbon, that's about 8 ATP for the fat vs about 6 for glucose.</p>
<p data-tier="likely">There's a practical bonus too: fat is stored dry (it's hydrophobic), while glycogen is stored with a lot of water, so glycogen weighs much more for the same energy. That's why animals, including you, store long-term energy as fat.</p>
<div class="callout warn" data-tier="likely"><p class="callout-title">Common mistake</p><p>Fatty acids can't be turned into glucose. Their carbons arrive as acetyl-CoA, and the PDH step (pyruvate → acetyl-CoA) is one-way, so acetyl-CoA can't go back to pyruvate. Only the <strong>glycerol</strong> part of a fat can become glucose. That's why the slide shows gluconeogenesis coming from glycerol, never from fatty acids.</p></div>
<p data-tier="extra"><strong>Beyond the slides:</strong> during long fasts or very low-carbohydrate diets, the liver makes more acetyl-CoA from fat than its Krebs cycle can handle. It converts the extra into <em>ketone bodies</em>, which travel in the blood and can be used as fuel by the brain and muscles.</p>

<h3 data-tier="essential">Protein catabolism</h3>
<p>The class slide traces protein breakdown in four stages:</p>
<ol class="steps">
<li><p class="step-head">Hydrolysis: proteins → amino acids</p><p>Peptide bonds are broken by adding water (proteases and peptidases), releasing individual amino acids.</p></li>
<li><p class="step-head">Deamination (in the liver)</p><p>The <strong>amino group (−NH<sub>2</sub>)</strong> is removed from each amino acid and released as <strong>ammonia (NH<sub>3</sub>)</strong>. What's left is a nitrogen-free <strong>carbon skeleton</strong>.</p></li>
<li><p class="step-head">Ammonia is removed as waste</p><p>NH<sub>3</sub> is toxic: it raises pH and interferes with brain function. The liver converts it into <strong>urea</strong>, which is far less toxic and dissolves in water. The kidneys then excrete urea in urine.</p></li>
<li><p class="step-head">Carbon skeletons enter respiration</p><p>Depending on the amino acid, the skeleton becomes pyruvate, acetyl-CoA, or a Krebs cycle intermediate, then goes through Krebs and the ETC to give CO<sub>2</sub>, ATP and H<sub>2</sub>O.</p></li>
</ol>
<div class="table-wrap"><table class="data">
<thead><tr><th>Route (slide)</th><th>Carbon skeleton becomes…</th><th>Slide examples</th><th>Enters at</th></tr></thead>
<tbody>
<tr><td>Pyruvate pathway</td><td>Pyruvate</td><td><strong>Alanine, glycine</strong></td><td>Pyruvate (before pyruvate oxidation and Krebs)</td></tr>
<tr><td>Acetyl-CoA pathway</td><td>Acetyl-CoA</td><td><strong>Leucine, lysine</strong></td><td>Acetyl-CoA, entering the Krebs cycle</td></tr>
<tr><td>Specific direct entry</td><td>A specific Krebs intermediate</td><td><strong>Glutamate → α-ketoglutarate</strong></td><td>Directly into the Krebs cycle</td></tr>
</tbody></table></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Deamination happens in the <strong>liver</strong>, and the nitrogen it removes leaves as ammonia, a metabolic waste.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Deamination removes the <strong>amino group</strong> (−NH<sub>2</sub>), not the "backbone". The amino group becomes ammonia. The carbon skeleton is everything else: the central carbon, the carboxyl group <em>and</em> the R group. It's the carbon skeleton that gets burned for energy.</p></div>
<h4 data-tier="likely">Why alanine becomes pyruvate (and glutamate becomes α-ketoglutarate)</h4>
<p data-tier="likely">Compare their structures. <strong>Alanine</strong> (3 carbons) is just <strong>pyruvate</strong> (3 carbons) with an amino group where pyruvate has a C=O. Swap the amino group for an oxygen and alanine <em>is</em> pyruvate. The same trick links <strong>glutamate</strong> (5 C) with <strong>α-ketoglutarate</strong> (5 C), and aspartate (4 C) with oxaloacetate (4 C). This is why the glycolysis lesson listed alanine as one possible fate of pyruvate: the conversion runs both ways, so the cell can build alanine from spare pyruvate, or burn alanine as pyruvate when protein is being used for fuel. (The aspartate–oxaloacetate pair is also how the malate–aspartate shuttle from lesson 2.04 gets its name.)</p>
<p data-tier="extra"><strong>Beyond the slides:</strong> amino acids whose skeletons become pyruvate or Krebs intermediates (like alanine and glutamate) can be used to make glucose by gluconeogenesis. Those that become only acetyl-CoA (like leucine and lysine) can't, for the same reason fatty acids can't. This is why the body breaks down some muscle protein during a long fast: it needs those skeletons to keep blood glucose up for the brain.</p>

<h3 data-tier="essential">Putting it together: how lipids and proteins enter respiration</h3>
<p>This is review question 17. A complete answer names the hydrolysis step, the conversion, and the entry point:</p>
<div class="compare">
<div><h4>Lipids</h4><ul>
<li>Hydrolyzed into glycerol + 3 fatty acids.</li>
<li><strong>Glycerol</strong> → DHAP (enzyme conversion) → enters <strong>glycolysis</strong>; or, when glucose is very low, glycerol → glucose by <strong>gluconeogenesis</strong> in the liver.</li>
<li><strong>Fatty acids</strong> → <strong>β-oxidation</strong> in the matrix → many <strong>acetyl-CoA</strong> (plus NADH and FADH<sub>2</sub>) → <strong>Krebs cycle</strong> and ETC.</li>
</ul></div>
<div><h4>Proteins</h4><ul>
<li>Hydrolyzed into amino acids.</li>
<li><strong>Deamination</strong> (liver) removes the amino group as NH<sub>3</sub>, which is converted to urea and excreted.</li>
<li>Carbon skeletons enter as <strong>pyruvate</strong> (alanine, glycine), <strong>acetyl-CoA</strong> (leucine, lysine) or <strong>Krebs intermediates</strong> (glutamate → α-ketoglutarate).</li>
</ul></div>
</div>
<div class="callout key"><p class="callout-title">On the test</p><p>The class answer key's short version: <strong>lipids enter through gluconeogenesis and β-oxidation; proteins enter through deamination.</strong> Use that as your skeleton, then add the entry points (glycolysis via DHAP, acetyl-CoA, pyruvate, Krebs intermediates) for full marks. The Krebs review also asks how fatty acids and proteins can be used: they can be converted into acetyl-CoA (or, for some amino acids, Krebs intermediates).</p></div>

<h3 data-tier="essential">Quick checks</h3>
<details class="check"><summary>Describe how lipids and proteins enter the metabolic cycles of cellular respiration. (Review Q17)</summary><div class="ans"><p><strong>Lipids:</strong> hydrolyzed into glycerol and fatty acids. Glycerol is converted to DHAP and enters glycolysis, or is used by the liver to make glucose (gluconeogenesis) when glucose is very low. Fatty acids are broken down 2 carbons at a time by β-oxidation into acetyl-CoA, which enters the Krebs cycle; each round also produces NADH and FADH<sub>2</sub> for the ETC. <strong>Proteins:</strong> hydrolyzed into amino acids, which are deaminated in the liver. The amino group is removed as ammonia (converted to urea and excreted), and the carbon skeletons enter as pyruvate (e.g. alanine, glycine), acetyl-CoA (e.g. leucine, lysine) or Krebs intermediates (e.g. glutamate → α-ketoglutarate).</p></div></details>
<details class="check"><summary>In what order does the body use its fuels? Why are nucleic acids rarely used?</summary><div class="ans"><p>Carbohydrates (glucose, glycogen) first, then lipids, then proteins; nucleic acids rarely. Nucleic acids are a small part of the cell's mass and their components (bases, sugars, phosphates) are valuable, so they are recycled to build new DNA and RNA instead of being burned.</p></div></details>
<details class="check"><summary>Define gluconeogenesis and give two raw materials for it.</summary><div class="ans"><p>Gluconeogenesis is the making of new glucose from non-carbohydrate sources, mainly in the liver. Raw materials include glycerol (from fats), lactate (from fermentation) and the carbon skeletons of many amino acids (e.g. alanine).</p></div></details>
<details class="check"><summary>What is deamination, where does it happen, and what happens to the product containing nitrogen?</summary><div class="ans"><p>Deamination is the removal of the amino group (−NH<sub>2</sub>) from an amino acid, leaving a carbon skeleton. It happens in the liver. The nitrogen is released as ammonia (NH<sub>3</sub>), which is toxic, so the liver converts it into urea, which the kidneys excrete in urine.</p></div></details>
<details class="check"><summary>A 16-carbon fatty acid undergoes β-oxidation. How many acetyl-CoA, NADH and FADH<sub>2</sub> does β-oxidation produce?</summary><div class="ans"><p>16 ÷ 2 = <strong>8 acetyl-CoA</strong>. Making 8 pieces takes 7 cuts, so <strong>7 NADH and 7 FADH<sub>2</sub></strong>. (The 8 acetyl-CoA then make 24 more NADH, 8 FADH<sub>2</sub> and 8 ATP in the Krebs cycle.)</p></div></details>
<details class="check"><summary>Why does fat store more energy per gram than carbohydrate?</summary><div class="ans"><p>Fatty acids are long, highly reduced hydrocarbon chains with many C–H bonds and very little oxygen, so they have many more electrons to donate to NAD<sup>+</sup> and FAD per carbon than glucose, which is already partly oxidized. One fatty acid also produces many acetyl-CoA (8 from a 16-carbon chain vs 2 from glucose). And fat is stored without water, unlike glycogen.</p></div></details>
<details class="check" data-tier="likely"><summary>Where would the carbon skeletons of alanine, leucine and glutamate enter cellular respiration?</summary><div class="ans"><p>Alanine → pyruvate (then pyruvate oxidation). Leucine → acetyl-CoA (then Krebs). Glutamate → α-ketoglutarate, entering the Krebs cycle directly.</p></div></details>
<details class="check" data-tier="likely"><summary>Why can glycerol be turned into glucose, but fatty acids can't?</summary><div class="ans"><p>Glycerol becomes DHAP, a glycolysis intermediate, so the liver can run gluconeogenesis from it up to glucose. Fatty acids are broken down into acetyl-CoA, and the step that makes acetyl-CoA from pyruvate (PDH) is irreversible, so acetyl-CoA can't be turned back into pyruvate, and therefore not into glucose.</p></div></details>
<details class="check" data-tier="likely"><summary>Why does the body avoid using protein for energy until it's starving?</summary><div class="ans"><p>Proteins aren't stored as fuel. Every protein has a structural or functional job (enzymes, muscle, transporters, antibodies), so burning them means breaking down working tissue, mainly muscle. Deamination also produces toxic ammonia, which costs energy to convert into urea. Carbohydrates and fats are designed for storage and are used first.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
<li>All classes of nutrients can be used for energy; their breakdown <strong>funnels into glycolysis, pyruvate, acetyl-CoA and the Krebs cycle</strong>. Final products: <strong>CO<sub>2</sub>, H<sub>2</sub>O and NH<sub>3</sub></strong> (from proteins).</li>
<li>Lipid and protein catabolism happens <strong>when glycogen stores are low</strong>, as an alternate source of energy.</li>
<li>Order of use: <strong>carbohydrates → lipids → proteins</strong>; nucleic acids rarely (components recycled).</li>
<li>Macromolecules are first <strong>hydrolyzed into monomers</strong>.</li>
<li><strong>Gluconeogenesis</strong> = making new glucose from non-carbohydrate sources (glycerol, lactate, amino acids), mainly in the liver.</li>
<li>Lipids → glycerol + fatty acids. <strong>Glycerol → DHAP → glycolysis</strong> (glucose somewhat low) or <strong>glycerol → glucose by gluconeogenesis</strong> in the liver (glucose very low).</li>
<li><strong>Fatty acids → β-oxidation → acetyl-CoA</strong> → Krebs: cut 2 carbons at a time; each cut also gives 1 NADH + 1 FADH<sub>2</sub>. A 16-C fatty acid gives 8 acetyl-CoA (about 129 ATP by class values).</li>
<li>Fats are energy-dense because they are highly reduced (many C–H bonds) and yield many acetyl-CoA. Fatty acids can't become glucose; glycerol can.</li>
<li>Proteins → amino acids (hydrolysis) → <strong>deamination in the liver</strong>: amino group removed as <strong>NH<sub>3</sub></strong> (toxic, converted to <strong>urea</strong>).</li>
<li>Carbon skeletons → <strong>pyruvate</strong> (alanine, glycine), <strong>acetyl-CoA</strong> (leucine, lysine), or <strong>Krebs intermediates</strong> directly (glutamate → α-ketoglutarate).</li>
<li>Protein is used for energy only in <strong>severe fasting / starvation</strong>.</li>
</ul>
`
});

/* ===================================================================
   2.07 Anaerobic Respiration: Fermentation
   =================================================================== */
window.LESSONS.push({
  id: "2.07",
  title: "Anaerobic Respiration: Fermentation",
  stage: "ferm",
  where: "Cytoplasm (cytosol)",
  summary: "Without enough oxygen, the ETC stops and NAD+ runs out, which would shut down glycolysis. Fermentation regenerates NAD+ by passing NADH's electrons to pyruvate (making lactate) or to acetaldehyde (making ethanol and CO2), so glycolysis can keep making its 2 ATP.",
  objectives: [
    "Describe the possible fates of pyruvate and what determines which one happens.",
    "Explain why fermentation is needed: its real purpose is to regenerate NAD+ so glycolysis can continue.",
    "Compare the ATP yield of fermentation (2) with aerobic respiration (36–38) and explain the difference.",
    "Describe lactic acid fermentation, including the enzyme lactate dehydrogenase, and the four fates of lactate in the body.",
    "Explain why the muscle \"burn\" during hard exercise is not caused by lactic acid.",
    "Describe alcohol fermentation step by step (pyruvate decarboxylase, alcohol dehydrogenase) and write its word and balanced equations.",
    "Compare lactic acid and alcohol fermentation, and apply them to yeast, bread-making and other real-world examples."
  ],
  html: `
<h3 data-tier="essential">Fates of pyruvate</h3>
<p>Glycolysis always ends with pyruvate, but what happens to pyruvate next depends on the conditions in the cell. Pyruvate is a major <strong>branch point</strong> in metabolism:</p>
<figure class="diagram">
<svg viewBox="0 0 640 300" role="img" aria-labelledby="s207a-title s207a-desc">
<title id="s207a-title">The fates of pyruvate</title>
<desc id="s207a-desc">Glucose-6-phosphate is converted to pyruvate by glycolysis, and pyruvate can be converted back by gluconeogenesis. From pyruvate, three arrows lead down: aerobic conditions with oxygen give acetyl-CoA, which goes on to the Krebs cycle and ETC for 36 to 38 ATP; anaerobic conditions in vertebrates give lactate; anaerobic conditions in microorganisms give ethanol and carbon dioxide. Both fermentation routes give 2 ATP per glucose.</desc>
<defs>
<marker id="m207a-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
</defs>
<rect x="230" y="14" width="180" height="32" rx="6" stroke-width="2" style="fill:var(--glyco-soft);stroke:var(--glyco)"/>
<rect x="260" y="128" width="120" height="32" rx="6" stroke-width="2.5" style="fill:var(--surface);stroke:var(--ink)"/>
<rect x="20" y="232" width="160" height="32" rx="6" stroke-width="2" style="fill:var(--link-soft);stroke:var(--link)"/>
<rect x="250" y="232" width="140" height="32" rx="6" stroke-width="2" style="fill:var(--proton-soft);stroke:var(--proton)"/>
<rect x="460" y="232" width="160" height="32" rx="6" stroke-width="2" style="fill:var(--glyco-soft);stroke:var(--glyco)"/>
<g stroke-width="2" style="stroke:var(--ink-2)">
<line x1="300" y1="46" x2="300" y2="126" marker-end="url(#m207a-a)"/>
<line x1="340" y1="128" x2="340" y2="48" marker-end="url(#m207a-a)"/>
<line x1="270" y1="160" x2="132" y2="230" marker-end="url(#m207a-a)"/>
<line x1="320" y1="160" x2="320" y2="230" marker-end="url(#m207a-a)"/>
<line x1="370" y1="160" x2="508" y2="230" marker-end="url(#m207a-a)"/>
</g>
<g font-family="inherit" font-size="13" style="fill:var(--ink)">
<text x="320" y="35" text-anchor="middle">Glucose-6-phosphate</text>
<text x="320" y="149" text-anchor="middle" font-weight="700">Pyruvate</text>
<text x="100" y="253" text-anchor="middle" font-weight="700">Acetyl-CoA</text>
<text x="320" y="253" text-anchor="middle" font-weight="700">Lactate</text>
<text x="540" y="253" text-anchor="middle" font-weight="700">Ethanol + CO₂</text>
</g>
<g font-family="inherit" font-size="12" style="fill:var(--ink-2)">
<text x="292" y="92" text-anchor="end">glycolysis</text>
<text x="348" y="92">gluconeogenesis</text>
<text x="172" y="186" text-anchor="end" style="fill:var(--ink)">aerobic</text>
<text x="172" y="202" text-anchor="end">(O₂ present)</text>
<text x="330" y="190" style="fill:var(--ink)">anaerobic</text>
<text x="330" y="206">(vertebrates)</text>
<text x="470" y="184" style="fill:var(--ink)">anaerobic</text>
<text x="470" y="200">(microorganisms)</text>
<text x="100" y="284" text-anchor="middle">→ Krebs + ETC: 36–38 ATP</text>
<text x="320" y="284" text-anchor="middle">2 ATP per glucose</text>
<text x="540" y="284" text-anchor="middle">2 ATP per glucose</text>
</g>
</svg>
<figcaption>Fates of pyruvate (class slide). With oxygen, pyruvate is oxidized to acetyl-CoA in the mitochondrion. Without oxygen, vertebrate cells reduce it to lactate, and yeast and many other microorganisms turn it into ethanol and CO<sub>2</sub>. Pyruvate can also be rebuilt into glucose (gluconeogenesis).</figcaption>
</figure>
<p>Three things decide which way pyruvate goes:</p>
<ul>
<li><strong>Oxygen.</strong> If O<sub>2</sub> is available, the ETC runs, NAD<sup>+</sup> is recycled, and pyruvate is sent into the mitochondrion to become acetyl-CoA (the aerobic route, up to 36–38 ATP). If O<sub>2</sub> is absent or used up, pyruvate is fermented.</li>
<li><strong>Energy status.</strong> As you saw in lesson 2.05, high ATP and NADH inhibit PDH, so pyruvate isn't sent into the mitochondrion. In the liver, spare pyruvate can be turned back into glucose (gluconeogenesis).</li>
<li><strong>The organism.</strong> Which fermentation a cell can do depends on its enzymes. Animal cells have lactate dehydrogenase, so they make lactate. Yeast have pyruvate decarboxylase, so they make ethanol.</li>
</ul>
<p data-tier="likely">(Pyruvate can also become the amino acid alanine, as you saw in lessons 2.02 and 2.06.)</p>

<h3 data-tier="essential">Anaerobic conditions</h3>
<p>Fermentation occurs under <strong>anaerobic conditions</strong>: the <strong>absence or local depletion of oxygen</strong>. "Local depletion" is the key phrase for humans. Oxygen may be plentiful in your lungs and blood while a particular tissue is using O<sub>2</sub> faster than blood can deliver it.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Our <strong>whole body cannot be in an anaerobic state</strong>, but <strong>certain parts of the body can be</strong>.</p></div>
<p>Why? Your brain and heart need a huge, constant supply of aerobic ATP. If the whole body went anaerobic, those organs would fail within minutes (exactly what happened to the cyanide victims in lesson 2.04). But a single working tissue, like a thigh muscle in a sprint, can briefly use O<sub>2</sub> faster than the blood can bring it in. That muscle goes locally anaerobic and ferments, while the rest of the body stays aerobic.</p>
<p data-tier="likely">Some cells are anaerobic all the time. <strong>Red blood cells have no mitochondria</strong>, so even though they carry oxygen, they can't use it. They make all their ATP by glycolysis and constantly produce lactate.</p>

<h3 data-tier="essential">Why fermentation exists: the NAD<sup>+</sup> problem</h3>
<p>The slide says fermentation <strong>"regenerates NAD<sup>+</sup> to sustain glycolysis."</strong> That one line is the whole point of this lesson. Here's why it matters:</p>
<ol class="steps">
<li><p class="step-head">Glycolysis needs NAD<sup>+</sup></p><p>Step 6 (glyceraldehyde-3-phosphate dehydrogenase) can't happen unless NAD<sup>+</sup> is there to accept electrons. Each glucose turns 2 NAD<sup>+</sup> into 2 NADH.</p></li>
<li><p class="step-head">The cell has only a little NAD<sup>+</sup></p><p>NAD<sup>+</sup> is made from a vitamin (niacin, B<sub>3</sub>) and exists in small amounts. It has to be recycled over and over; the cell can't just make more.</p></li>
<li><p class="step-head">Normally the ETC recycles it</p><p>Complex I oxidizes NADH back to NAD<sup>+</sup> (via the shuttles, for glycolysis's NADH). But that needs O<sub>2</sub> at the end of the chain.</p></li>
<li><p class="step-head">No O<sub>2</sub>: NAD<sup>+</sup> runs out</p><p>Without oxygen the ETC stops, so NADH can't be recycled. Within seconds all the NAD<sup>+</sup> is stuck as NADH, step 6 stops, glycolysis stops, and the cell gets <strong>no ATP at all</strong>.</p></li>
<li><p class="step-head">Fermentation: dump the electrons on an organic molecule</p><p>The cell hands NADH's electrons to pyruvate (or to acetaldehyde, which is made from pyruvate). That molecule becomes the <strong>final electron acceptor</strong> in place of O<sub>2</sub>. NADH is oxidized back to NAD<sup>+</sup>, which returns to step 6, and glycolysis keeps going.</p></li>
</ol>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The lack of oxygen prevents the ETC from running, which stops the regeneration of NAD<sup>+</sup>. Fermentation's job is to make that NAD<sup>+</sup> another way.</p></div>
<p>Notice that the fermentation steps themselves <strong>make no ATP</strong>. All the ATP comes from glycolysis. Fermentation's only job is to keep glycolysis supplied with NAD<sup>+</sup> (and, as a bonus, to clear away pyruvate, which would otherwise build up and stall glycolysis). It solves the two "leftover problems" from the glycolysis worksheet.</p>
<div class="callout key"><p class="callout-title">On the test</p><p><strong>"What is the real purpose of fermentation?"</strong> (Review Q15). Answer: <strong>to oxidize NADH back into NAD<sup>+</sup> so that glycolysis can continue</strong> (and keep making its 2 ATP) when there's no oxygen. Don't say "to make ATP" or "to make lactic acid / alcohol"; those are side effects.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Fermentation produces 2 ATP" is only true if you include glycolysis. The fermentation <em>step</em> (pyruvate → lactate, or pyruvate → ethanol) makes <strong>zero</strong> ATP. The 2 ATP come from glycolysis, which fermentation keeps running.</p></div>
<p data-tier="extra"><strong>Beyond the slides:</strong> the class calls fermentation "anaerobic respiration." Microbiologists use "anaerobic respiration" for something slightly different: some bacteria run a full ETC but use a molecule other than O<sub>2</sub> (such as nitrate or sulfate) as the final electron acceptor. Fermentation has no ETC at all. For this course, treat the two terms as the class does.</p>

<h3 data-tier="essential">How much ATP? 2 vs 36–38</h3>
<p>Fermentation produces <strong>significantly less ATP</strong>: <strong>2 ATP per glucose</strong> (net, from glycolysis) compared with <strong>36–38</strong> for aerobic respiration (the slides' maximum; realistically 30–32). That's roughly 18 times less.</p>
<div class="compare">
<div><h4>Aerobic respiration</h4><div class="tally"><span class="chip atp">36–38 ATP</span></div><p>Glucose is oxidized all the way to CO<sub>2</sub>. NADH's electrons go down the ETC to O<sub>2</sub>, the biggest energy drop of all, and pay for about 34 ATP by chemiosmosis.</p></div>
<div><h4>Fermentation</h4><div class="tally"><span class="chip atp">2 ATP</span></div><p>Only glycolysis's substrate-level phosphorylation. NADH's electrons are "wasted" on pyruvate instead of going down the ETC, and most of glucose's energy stays locked in the end product.</p></div>
</div>
<p><strong>Where did the rest of the energy go?</strong> It's still in the product. Ethanol is so energy-rich that it's burned as fuel in cars, and lactate can be turned back into pyruvate and burned later (see the fates of lactate below). Fermentation only takes the "first bite" of glucose.</p>
<p data-tier="likely">Using the worksheet's 94-ATP scale, fermentation is only about 2% efficient (2 ÷ 94), compared with about 40% for aerobic respiration. To make the same amount of ATP, a fermenting cell has to burn glucose roughly 18 times faster. That's why fermentation suits short bursts of activity (or organisms like yeast sitting in a pile of sugar), and why glycolysis speeds up so dramatically when O<sub>2</sub> runs low: falling ATP and rising ADP/AMP activate PFK (lesson 2.05).</p>
<p>From the "Follow That Glucose!" worksheet, Table 1, the fermentation row for animal tissue looks like this:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Step</th><th>ATP</th><th>NADH + H<sup>+</sup></th><th>FADH<sub>2</sub></th><th>CO<sub>2</sub></th></tr></thead>
<tbody>
<tr><td>Glycolysis</td><td>−2, +4 (net 2)</td><td>+2</td><td>0</td><td>0</td></tr>
<tr><td>Fermentation (animal tissue)</td><td>0</td><td>−2</td><td>0</td><td>0</td></tr>
<tr><td><strong>Overall</strong></td><td><strong>net 2</strong></td><td><strong>0</strong> (all recycled)</td><td>0</td><td>0</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Lactic acid fermentation</h3>
<p><strong>Who does it:</strong> animals (for example, your skeletal muscle cells during hard exercise) and some bacteria, such as the <em>Lactobacillus</em> species used to make yogurt, cheese, sauerkraut, kimchi and the sour taste in sourdough.</p>
<p><strong>What happens:</strong> in a single step, <strong>pyruvate is reduced by NADH</strong>, forming <strong>lactate</strong> and regenerating <strong>NAD<sup>+</sup></strong>. The enzyme is <span class="term">lactate dehydrogenase (LDH)</span>. Pyruvate is the final electron acceptor. No carbon is removed, so <strong>no CO<sub>2</sub></strong> is produced, and lactate has 3 carbons, just like pyruvate.</p>
<div class="eq">pyruvate + NADH + H<sup>+</sup> → lactate + NAD<sup>+</sup> &nbsp;(lactate dehydrogenase)</div>
<div class="eq">Overall: glucose → 2 lactate (+ 2 ATP) &nbsp;&nbsp; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>3</sub>H<sub>6</sub>O<sub>3</sub></div>
<figure class="diagram">
<svg viewBox="0 0 640 290" role="img" aria-labelledby="s207b-title s207b-desc">
<title id="s207b-title">Lactic acid fermentation and the NAD+ cycle</title>
<desc id="s207b-desc">Glucose goes through glycolysis to 2 pyruvate, making 2 ATP from 2 ADP and 2 phosphate. During glycolysis step 6, 2 NAD+ are reduced to 2 NADH plus 2 H+. Pyruvate then drops down to the lactate dehydrogenase step, where it is reduced to 2 lactate, and the 2 NADH are oxidized back to 2 NAD+, which return to glycolysis. The NAD+ and NADH form a loop between the two reactions.</desc>
<defs>
<marker id="m207b-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
</defs>
<rect x="16" y="42" width="100" height="36" rx="6" stroke-width="2" style="fill:var(--surface);stroke:var(--line)"/>
<polygon points="124,48 468,48 468,40 488,60 468,80 468,72 124,72" stroke-width="2" style="fill:var(--glyco-soft);stroke:var(--glyco)"/>
<rect x="492" y="42" width="132" height="36" rx="6" stroke-width="2" style="fill:var(--surface);stroke:var(--line)"/>
<polygon points="600,228 132,228 132,220 112,240 132,260 132,252 600,252" stroke-width="2" style="fill:var(--surface-2);stroke:var(--ink-2)"/>
<rect x="16" y="222" width="88" height="36" rx="6" stroke-width="2" style="fill:var(--proton-soft);stroke:var(--proton)"/>
<g stroke-width="2" style="fill:var(--etc-soft);stroke:var(--etc)">
<rect x="150" y="132" width="100" height="30" rx="6"/>
<rect x="360" y="132" width="140" height="30" rx="6"/>
</g>
<g fill="none" stroke-width="2" style="stroke:var(--ink)">
<line x1="558" y1="78" x2="558" y2="226" marker-end="url(#m207b-a)"/>
<path d="M215,132 C215,60 415,60 415,130" marker-end="url(#m207b-a)"/>
<path d="M445,162 C445,236 185,236 185,164" marker-end="url(#m207b-a)"/>
</g>
<g font-family="inherit" font-size="13" text-anchor="middle" style="fill:var(--ink)">
<text x="66" y="65" font-weight="700">Glucose</text>
<text x="296" y="65" font-weight="700">Glycolysis</text>
<text x="296" y="28">2 ADP + 2 Pi → 2 ATP</text>
<text x="558" y="65" font-weight="700">2 Pyruvate</text>
<text x="200" y="152" font-weight="700">2 NAD⁺</text>
<text x="430" y="152" font-weight="700">2 NADH + 2 H⁺</text>
<text x="366" y="245">Lactate dehydrogenase (LDH): pyruvate is reduced</text>
<text x="60" y="245" font-weight="700">2 Lactate</text>
<text x="315" y="112" font-size="12" style="fill:var(--ink-2)">glycolysis step 6</text>
<text x="315" y="190" font-size="12" font-weight="700">regenerates NAD⁺</text>
</g>
</svg>
<figcaption>Lactic acid fermentation (class slide). The same 2 NAD<sup>+</sup> molecules cycle back and forth: glycolysis reduces them to NADH, and lactate dehydrogenase oxidizes them back to NAD<sup>+</sup> by reducing pyruvate to lactate. Net result: 2 ATP and 2 lactate per glucose.</figcaption>
</figure>
<p><strong>It's reversible.</strong> LDH works in both directions. When oxygen becomes available again, lactate can be oxidized back into pyruvate (turning NAD<sup>+</sup> into NADH), and the pyruvate can enter the mitochondrion. That's why lactate is not a dead-end waste product, as you'll see in its four fates below.</p>
<p><strong>Lactic acid or lactate?</strong> Lactic acid releases an H<sup>+</sup> at the pH inside your body, so what your cells actually make and carry around is the <strong>lactate</strong> ion. You'll see both names used. The notes put it simply: "we produce lactate anyways."</p>

<h3 data-tier="likely">The muscle "burn": it's not lactic acid</h3>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The pain in your muscles during hard exercise is <strong>not caused by lactic acid</strong>. It comes from the mechanism of muscle contraction: you're hydrolyzing so much ATP that it releases protons (H<sup>+</sup>). The <strong>proton buildup makes the muscle acidic</strong>. Lactate actually acts as a <strong>buffer</strong>: it takes up protons.</p></div>
<p>Here's the chemistry behind that:</p>
<ul>
<li><strong>Splitting ATP releases H<sup>+</sup>.</strong> At the pH inside a cell, ATP hydrolysis (ATP + H<sub>2</sub>O → ADP + P<sub>i</sub>) also releases a hydrogen ion. During a hard sprint, muscles split ATP extremely fast. When ATP is used faster than the mitochondria can rebuild it aerobically, H<sup>+</sup> piles up, the pH drops, and acid-sensing nerve endings produce the burning feeling (along with fatigue).</li>
<li><strong>Making lactate uses up H<sup>+</sup>.</strong> Look at the LDH equation: pyruvate + NADH + <strong>H<sup>+</sup></strong> → lactate + NAD<sup>+</sup>. Each lactate made consumes a proton. Lactate also leaves the muscle cell together with an H<sup>+</sup>, carrying acid out into the blood. Both effects slow the drop in pH.</li>
<li><strong>Why the myth exists.</strong> Lactate rises at the same time as the burn and fatigue, so for decades people assumed it caused them. That was correlation, not causation.</li>
</ul>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Lactic acid build-up makes your muscles sore the next day." No. Lactate is cleared from muscle and blood within about an hour after exercise. Next-day soreness comes from tiny tears in muscle fibres and the inflammation that repairs them, not from lactate.</p></div>

<h3 data-tier="essential">Fates of lactate in animal cells</h3>
<p>Lactate is not waste. It's a valuable fuel and even a signalling molecule. The slide lists four fates:</p>
<figure class="diagram">
<svg viewBox="0 0 640 300" role="img" aria-labelledby="s207c-title s207c-desc">
<title id="s207c-title">Four fates of lactate in animal cells</title>
<desc id="s207c-desc">Lactate made by working muscle travels in the blood to four destinations. One: slow-twitch muscle fibres convert it to pyruvate and oxidize it for ATP. Two: the liver uses it for gluconeogenesis in the Cori cycle, sending glucose back to the blood. Three: the heart and brain convert it to pyruvate as a fast fuel for ATP. Four: as a signal, it stimulates capillary growth and the formation of new mitochondria.</desc>
<defs>
<marker id="m207c-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
</defs>
<rect x="220" y="113" width="200" height="74" rx="10" stroke-width="2" style="fill:var(--surface-2);stroke:var(--ink-2)"/>
<rect x="10" y="10" width="190" height="76" rx="8" stroke-width="2" style="fill:var(--etc-soft);stroke:var(--etc)"/>
<rect x="440" y="10" width="190" height="76" rx="8" stroke-width="2" style="fill:var(--link-soft);stroke:var(--link)"/>
<rect x="10" y="214" width="190" height="76" rx="8" stroke-width="2" style="fill:var(--proton-soft);stroke:var(--proton)"/>
<rect x="440" y="214" width="190" height="76" rx="8" stroke-width="2" style="fill:var(--glyco-soft);stroke:var(--glyco)"/>
<g stroke-width="2" style="stroke:var(--ink-2)">
<line x1="240" y1="113" x2="198" y2="89" marker-end="url(#m207c-a)"/>
<line x1="400" y1="113" x2="442" y2="89" marker-end="url(#m207c-a)"/>
<line x1="240" y1="187" x2="198" y2="211" marker-end="url(#m207c-a)"/>
<line x1="400" y1="187" x2="442" y2="211" marker-end="url(#m207c-a)"/>
</g>
<g font-family="inherit" font-size="12" style="fill:var(--ink)">
<text x="320" y="138" text-anchor="middle" font-size="14" font-weight="700">Lactate</text>
<text x="320" y="157" text-anchor="middle">from working muscle,</text>
<text x="320" y="174" text-anchor="middle">carried in the blood</text>
<text x="22" y="34" font-size="13" font-weight="700">1. Slow-twitch fibres</text>
<text x="22" y="54">lactate → pyruvate</text>
<text x="22" y="72">→ oxidized for ATP</text>
<text x="452" y="34" font-size="13" font-weight="700">2. Liver: Cori cycle</text>
<text x="452" y="54">gluconeogenesis</text>
<text x="452" y="72">→ glucose to the blood</text>
<text x="22" y="238" font-size="13" font-weight="700">3. Heart and brain</text>
<text x="22" y="258">lactate → pyruvate</text>
<text x="22" y="276">→ fast fuel for ATP</text>
<text x="452" y="238" font-size="13" font-weight="700">4. Signalling</text>
<text x="452" y="258">capillary growth</text>
<text x="452" y="276">+ new mitochondria</text>
</g>
</svg>
<figcaption>The four fates of lactate. Three of them burn it or recycle it as fuel; the fourth uses it as a chemical signal that helps the body adapt to exercise.</figcaption>
</figure>
<ol class="steps">
<li><p class="step-head">Shuttled to slow-twitch muscle fibres → pyruvate</p><p>Fast-twitch fibres (built for bursts, relying on glycolysis) make lots of lactate. Neighbouring <strong>slow-twitch (oxidative) fibres</strong>, which are packed with mitochondria, take it up, convert it back to pyruvate with LDH, and oxidize it in their mitochondria for ATP. This is called the cell-to-cell lactate shuttle.</p></li>
<li><p class="step-head">Sent to the liver → gluconeogenesis (Cori cycle)</p><p>Lactate travels in the blood to the <strong>liver</strong>, which converts it back to pyruvate and then builds it into new <strong>glucose</strong> by gluconeogenesis. The glucose returns to the blood and can fuel muscles again. This muscle-to-liver-to-muscle loop is the <span class="term">Cori cycle</span>. It costs the liver ATP, about 6 ATP to rebuild one glucose that gave the muscle only 2, and the liver makes that ATP aerobically.</p></li>
<li><p class="step-head">Used by the heart and brain for faster ATP production</p><p>The heart and brain take lactate from the blood, convert it to pyruvate, and oxidize it in their mitochondria. Because lactate is already one step from pyruvate, it skips all of glycolysis, including the 2-ATP investment. That makes it a fast, efficient fuel. During exercise, lactate becomes one of the heart's preferred fuels.</p></li>
<li><p class="step-head">Stimulates capillary growth (signalling)</p><p>Lactate also acts as a signal (it's been nicknamed a "lactormone"). It binds receptors on cells and triggers <strong>capillary growth</strong> (to ensure faster delivery of oxygen) and the formation of <strong>new mitochondria</strong>. That's part of how training makes muscles better at aerobic respiration, so you produce less lactate at the same effort.</p></li>
</ol>
<p data-tier="likely">The worksheet's version: animal tissue makes lactate, which <strong>the liver converts back to pyruvate when oxygen is plentiful again</strong>. That's also why you keep breathing hard after a sprint. Your body needs extra O<sub>2</sub> to make the ATP for recycling lactate, rebuild ATP stores, and reload oxygen in the blood and muscles. This is sometimes called "oxygen debt."</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Four fates, four places: <strong>Muscle, Liver, Heart/brain, Messages</strong>. Slow-twitch muscle burns it, the liver rebuilds glucose from it, the heart and brain use it as fast fuel, and as a messenger it grows capillaries.</p></div>

<h3 data-tier="essential">Alcohol fermentation</h3>
<p><strong>Who does it:</strong> yeast and other fungi, plants (for example, roots in waterlogged soil that can't get enough O<sub>2</sub>), and some bacteria.</p>
<p><strong>What happens:</strong> pyruvate is converted to ethanol in <strong>two steps</strong>, both in the cytoplasm:</p>
<ol class="steps">
<li><p class="step-head">Pyruvate → acetaldehyde + CO<sub>2</sub> &nbsp;(pyruvate decarboxylase)</p><p>A carboxyl group is removed from pyruvate (3 C) and released as <strong>CO<sub>2</sub></strong>, leaving <strong>acetaldehyde</strong> (2 C). That's 1 CO<sub>2</sub> per pyruvate, so <strong>2 CO<sub>2</sub> per glucose</strong>. This is a decarboxylation, and it's irreversible: the CO<sub>2</sub> escapes as a gas. No NADH is used or made in this step.</p></li>
<li><p class="step-head">Acetaldehyde + NADH + H<sup>+</sup> → ethanol + NAD<sup>+</sup> &nbsp;(alcohol dehydrogenase)</p><p>Acetaldehyde is the <strong>final electron acceptor</strong>. It takes the electrons and a hydrogen from NADH (plus an H<sup>+</sup> from solution) and is reduced to <strong>ethanol</strong>. NADH is oxidized back to <strong>NAD<sup>+</sup></strong>, which returns to glycolysis.</p></li>
</ol>
<div class="eq">Word equation: glucose → ethanol + carbon dioxide (+ 2 ATP)</div>
<div class="eq">Balanced: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub> &nbsp;(+ 2 ATP)</div>
<div class="eq">With the ATP shown: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 2 ADP + 2 P<sub>i</sub> → 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub> + 2 ATP</div>
<p>Check the balance: carbon 6 = 2(2) + 2(1) = 6; hydrogen 12 = 2(6) = 12; oxygen 6 = 2(1) + 2(2) = 6.</p>
<figure class="diagram">
<svg viewBox="0 0 640 290" role="img" aria-labelledby="s207d-title s207d-desc">
<title id="s207d-title">Alcohol fermentation and the NAD+ cycle</title>
<desc id="s207d-desc">Glucose goes through glycolysis to 2 pyruvate, making 2 ATP. 2 NAD+ are reduced to 2 NADH in glycolysis step 6. Pyruvate decarboxylase removes 2 CO2 from the 2 pyruvate, forming 2 acetaldehyde. Alcohol dehydrogenase then reduces acetaldehyde to 2 ethanol, oxidizing the 2 NADH back to 2 NAD+, which return to glycolysis.</desc>
<defs>
<marker id="m207d-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
</defs>
<rect x="16" y="42" width="100" height="36" rx="6" stroke-width="2" style="fill:var(--surface);stroke:var(--line)"/>
<polygon points="124,48 446,48 446,40 466,60 446,80 446,72 124,72" stroke-width="2" style="fill:var(--glyco-soft);stroke:var(--glyco)"/>
<rect x="474" y="42" width="150" height="36" rx="6" stroke-width="2" style="fill:var(--surface);stroke:var(--line)"/>
<rect x="474" y="222" width="150" height="36" rx="6" stroke-width="2" style="fill:var(--surface);stroke:var(--line)"/>
<polygon points="466,228 132,228 132,220 112,240 132,260 132,252 466,252" stroke-width="2" style="fill:var(--surface-2);stroke:var(--ink-2)"/>
<rect x="16" y="222" width="88" height="36" rx="6" stroke-width="2" style="fill:var(--glyco-soft);stroke:var(--glyco)"/>
<g stroke-width="2" style="fill:var(--etc-soft);stroke:var(--etc)">
<rect x="150" y="132" width="100" height="30" rx="6"/>
<rect x="340" y="132" width="110" height="30" rx="6"/>
</g>
<g fill="none" stroke-width="2" style="stroke:var(--ink)">
<line x1="520" y1="78" x2="520" y2="220" marker-end="url(#m207d-a)"/>
<line x1="520" y1="160" x2="564" y2="182" marker-end="url(#m207d-a)"/>
<path d="M215,132 C215,60 395,60 395,130" marker-end="url(#m207d-a)"/>
<path d="M425,162 C425,236 185,236 185,164" marker-end="url(#m207d-a)"/>
</g>
<g font-family="inherit" font-size="13" text-anchor="middle" style="fill:var(--ink)">
<text x="66" y="65" font-weight="700">Glucose</text>
<text x="285" y="65" font-weight="700">Glycolysis</text>
<text x="285" y="28">2 ADP + 2 Pi → 2 ATP</text>
<text x="549" y="65" font-weight="700">2 Pyruvate</text>
<text x="549" y="245" font-weight="700">2 Acetaldehyde</text>
<text x="60" y="245" font-weight="700">2 Ethanol</text>
<text x="200" y="152" font-weight="700">2 NAD⁺</text>
<text x="395" y="152" font-weight="700">2 NADH + 2 H⁺</text>
<text x="300" y="245" font-size="12">Alcohol dehydrogenase: acetaldehyde is reduced</text>
<text x="305" y="112" font-size="12" style="fill:var(--ink-2)">glycolysis step 6</text>
<text x="305" y="190" font-size="12" font-weight="700">regenerates NAD⁺</text>
</g>
<g font-family="inherit" font-size="12" style="fill:var(--ink)">
<text x="530" y="112">pyruvate</text>
<text x="530" y="128">decarboxylase</text>
<text x="570" y="192" font-size="13" font-weight="700">2 CO₂</text>
</g>
</svg>
<figcaption>Alcohol fermentation (class slide). Pyruvate decarboxylase releases CO<sub>2</sub> to form acetaldehyde, and alcohol dehydrogenase reduces acetaldehyde to ethanol, regenerating the NAD<sup>+</sup> that glycolysis needs.</figcaption>
</figure>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Don't confuse <strong>pyruvate decarboxylase</strong> with <strong>pyruvate dehydrogenase</strong>. Pyruvate <em>dehydrogenase</em> (PDH) is the aerobic link-step enzyme in the mitochondrion: it makes acetyl-CoA, CO<sub>2</sub> and NADH. Pyruvate <em>decarboxylase</em> is the yeast fermentation enzyme in the cytoplasm: it makes acetaldehyde and CO<sub>2</sub>, with no NADH. Both release CO<sub>2</sub>, which is why they're easy to mix up.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Lactic is the short one; alcohol is the long one.</strong> Lactic: 1 step, 1 product, no gas, reversible. Alcohol: 2 steps, 2 products (ethanol + CO<sub>2</sub>), the gas escapes, so it can't be reversed. And the enzyme names describe the job: <em>de-carbox-ylase</em> removes a carboxyl group (as CO<sub>2</sub>); <em>de-hydrogen-ase</em> moves hydrogen (electrons) to or from NAD.</p></div>
<p data-tier="extra"><strong>Beyond the slides:</strong> humans can't do alcohol fermentation because we have no pyruvate decarboxylase. Your liver <em>does</em> have alcohol dehydrogenase, but it uses it in reverse, to break down ethanol you drink into acetaldehyde. Yeast can't turn ethanol back into pyruvate, so ethanol is released into the surroundings. It's toxic to yeast too, which is why fermentation alone can't make wine much stronger than about 15% alcohol.</p>

<h3 data-tier="essential">Lactic acid vs alcohol fermentation</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Feature</th><th>Lactic acid fermentation</th><th>Alcohol fermentation</th></tr></thead>
<tbody>
<tr><td>Organisms</td><td>Animals (muscle cells, red blood cells); some bacteria (e.g. <em>Lactobacillus</em>)</td><td>Yeast and other fungi; plants; some bacteria</td></tr>
<tr><td>Location in the cell</td><td>Cytoplasm</td><td>Cytoplasm</td></tr>
<tr><td>Steps after glycolysis</td><td>1</td><td>2</td></tr>
<tr><td>Enzyme(s)</td><td>Lactate dehydrogenase (LDH)</td><td>Pyruvate decarboxylase, then alcohol dehydrogenase</td></tr>
<tr><td>Final electron acceptor</td><td>Pyruvate</td><td>Acetaldehyde</td></tr>
<tr><td>CO<sub>2</sub> released?</td><td>No</td><td>Yes: 2 per glucose</td></tr>
<tr><td>End product(s)</td><td>2 lactate (3 C)</td><td>2 ethanol (2 C) + 2 CO<sub>2</sub></td></tr>
<tr><td>Reversible?</td><td>Yes: lactate → pyruvate when O<sub>2</sub> returns</td><td>No: CO<sub>2</sub> is lost</td></tr>
<tr><td>NAD<sup>+</sup> regenerated?</td><td>Yes (2 per glucose)</td><td>Yes (2 per glucose)</td></tr>
<tr><td>Net ATP per glucose</td><td>2 (from glycolysis)</td><td>2 (from glycolysis)</td></tr>
<tr><td>Everyday uses</td><td>Yogurt, cheese, sauerkraut, kimchi, sourdough tang</td><td>Bread (CO<sub>2</sub> makes it rise), beer, wine, fuel ethanol</td></tr>
</tbody></table></div>
<details class="check" data-tier="likely"><summary>Worksheet: Compare and contrast fermentation in bacterial cells and in animal tissue.</summary><div class="ans"><p><strong>Similarities:</strong> in both, pyruvate is converted into a product that can be released (into the environment, or into the bloodstream) so glycolysis keeps running at full speed, and both use up the NADH from glycolysis, regenerating NAD<sup>+</sup>. <strong>Difference:</strong> the product. The bacterial (and yeast) cells in the worksheet turn pyruvate into ethanol by removing a CO<sub>2</sub> molecule, which is irreversible. Animal tissue converts pyruvate into lactate (lactic acid), which the liver can convert back into pyruvate when oxygen is plentiful again. (Note: some bacteria, like the ones in yogurt, make lactate instead.)</p></div></details>

<h3 data-tier="likely">Yeast: switching between pathways</h3>
<p>Yeast (<em>Saccharomyces cerevisiae</em>) is a <span class="term">facultative anaerobe</span>: it can live with or without oxygen and switches pathways to suit the conditions.</p>
<div class="compare">
<div><h4>With O<sub>2</sub>: aerobic respiration</h4><ul>
<li>Pyruvate → acetyl-CoA → Krebs → ETC.</li>
<li>Up to 36–38 ATP per glucose.</li>
<li>Products: CO<sub>2</sub> and H<sub>2</sub>O; no ethanol.</li>
<li>Yeast grow and multiply quickly.</li>
</ul></div>
<div><h4>Without O<sub>2</sub>: alcohol fermentation</h4><ul>
<li>Pyruvate → acetaldehyde + CO<sub>2</sub> → ethanol.</li>
<li>Only 2 ATP per glucose.</li>
<li>Products: ethanol and CO<sub>2</sub>.</li>
<li>Must burn sugar much faster to get the same ATP.</li>
</ul></div>
</div>
<p><strong>Why do yeast ferment in some conditions?</strong> (Assignment reflection question.) When O<sub>2</sub> is scarce or used up, such as deep inside bread dough, in a sealed fermenter, or under a brewer's airlock, there's no final electron acceptor for the ETC. NADH can't be recycled there, so the yeast must regenerate NAD<sup>+</sup> by fermentation to keep glycolysis, and its 2 ATP, going. Fermentation keeps the yeast alive until oxygen returns.</p>
<p data-tier="extra"><strong>Beyond the slides:</strong> baker's yeast actually prefers to ferment whenever sugar is very plentiful, even if some oxygen is present. Fermenting is a fast (if wasteful) way to use sugar, and the ethanol it releases harms competing microbes.</p>

<h3 data-tier="likely">Application: yeast fermentation in bread</h3>
<p>The Yeast Fermentation assignment asks you to connect what happens inside yeast cells to what you can see in the kitchen. Here's the biology at each stage of making bread:</p>
<ol class="steps">
<li><p class="step-head">Activation (proofing the yeast)</p><p>Dried yeast is dormant: its cells are dehydrated and its metabolism has nearly stopped. Warm water (roughly 35–43 °C) rehydrates the cells and speeds up their enzyme-catalyzed reactions, because molecules move faster and collide more often. Sugar provides the substrate for glycolysis. Foam on the surface is CO<sub>2</sub>, proof the yeast are alive. <strong>Temperature control matters:</strong> too cold and the reactions are slow; too hot (above about 50 °C, and certainly by about 60 °C) and the yeast's enzymes <strong>denature</strong>. The bonds holding their 3-D shape break, the active sites change shape, the yeast die, and the dough never rises.</p></li>
<li><p class="step-head">Mixing and kneading</p><p>Kneading develops <strong>gluten</strong>, a stretchy network of proteins from the flour. Gluten forms elastic walls that will trap gas bubbles like tiny balloons.</p></li>
<li><p class="step-head">Fermentation (proofing the dough)</p><p>In the yeast's <strong>cytoplasm</strong>, glycolysis runs: glucose + 2 ATP + 2 NAD<sup>+</sup> → 2 pyruvate + 4 ATP (net 2) + 2 NADH. The small amount of O<sub>2</sub> in the dough is quickly used up, so conditions become anaerobic and the yeast switch to alcohol fermentation. Pyruvate decarboxylase releases <strong>CO<sub>2</sub></strong>, and alcohol dehydrogenase makes <strong>ethanol</strong> while regenerating NAD<sup>+</sup>. The CO<sub>2</sub> is trapped by the gluten, so <strong>the dough expands</strong>. The ethanol and other by-products add flavour.</p></li>
<li><p class="step-head">Baking</p><p>Heat makes the trapped gas expand, and the yeast briefly work faster ("oven spring"). Then, at about 60 °C, the yeast die and their enzymes denature. <strong>The ethanol evaporates</strong>: it boils at 78 °C and the inside of a loaf reaches about 95–99 °C, so most of it is driven off, leaving only small traces. Starch sets and proteins firm up, locking the bubble structure in place. The holes in a slice of bread are where CO<sub>2</sub> bubbles were.</p></li>
</ol>
<p>For an experiment (Option B), the rate of fermentation can be measured by the rate of CO<sub>2</sub> production (for example, gas collected in a balloon or the height of the dough), because CO<sub>2</sub> is a direct product of the pathway. Here's how common variables affect it:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Variable</th><th>Effect on fermentation rate</th><th>Biological reason</th></tr></thead>
<tbody>
<tr><td>Temperature</td><td>Rises up to an optimum (about 30–40 °C), then falls sharply</td><td>Warmer = more collisions between enzymes and substrates; too hot = enzymes denature</td></tr>
<tr><td>Sugar type</td><td>Glucose and fructose: fast. Sucrose: fast after a short delay. Lactose and artificial sweeteners: little or no CO<sub>2</sub></td><td>Glucose and fructose enter glycolysis directly. Yeast secrete an enzyme (invertase) that splits sucrose into glucose + fructose. Baker's yeast lack the enzyme to digest lactose, and sweeteners like sucralose can't enter glycolysis.</td></tr>
<tr><td>Sugar concentration</td><td>Increases up to a point, then levels off or drops</td><td>More substrate means faster reactions until the enzymes are saturated; very high sugar draws water out of the yeast by osmosis</td></tr>
<tr><td>Salt</td><td>Slows fermentation (a little is used to control rising)</td><td>Salt draws water out of yeast cells by osmosis and disrupts enzyme function</td></tr>
<tr><td>pH (lemon juice, baking soda)</td><td>Fastest near the yeast's optimum (slightly acidic); slower at extremes</td><td>Each enzyme has an optimal pH; strong acid or base changes the active site's shape</td></tr>
</tbody></table></div>
<div class="callout key"><p class="callout-title">On the test</p><p>The assignment's required content doubles as excellent test review: the word and balanced equations for alcohol fermentation; <strong>2 ATP vs 36–38</strong> for aerobic respiration; glycolysis in the <strong>cytoplasm</strong> (inputs glucose, 2 ATP, 2 NAD<sup>+</sup>; outputs 2 pyruvate, net 2 ATP, 2 NADH); both fermentation steps with their enzymes; and why yeast ferment when O<sub>2</sub> is scarce (to regenerate NAD<sup>+</sup>).</p></div>

<h3 data-tier="essential">Quick checks</h3>
<details class="check"><summary>What is the real purpose of fermentation? (Review Q15)</summary><div class="ans"><p>To oxidize NADH back into NAD<sup>+</sup> so that glycolysis can continue in the absence of oxygen. Glycolysis step 6 needs NAD<sup>+</sup>, and without O<sub>2</sub> the ETC can't regenerate it. Fermentation regenerates it by passing NADH's electrons to pyruvate (or acetaldehyde), so the cell keeps getting glycolysis's 2 ATP. The fermentation step itself makes no ATP.</p></div></details>
<details class="check"><summary>Write the reactions for alcoholic and lactate fermentation. (Review Q14)</summary><div class="ans"><p><strong>Alcoholic:</strong> glucose → (glycolysis) → 2 pyruvate; pyruvate → acetaldehyde + CO<sub>2</sub> (pyruvate decarboxylase); acetaldehyde + NADH + H<sup>+</sup> → ethanol + NAD<sup>+</sup> (alcohol dehydrogenase). Overall: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub> + 2 ATP.</p><p><strong>Lactate:</strong> glucose → (glycolysis) → 2 pyruvate; pyruvate + NADH + H<sup>+</sup> → lactate + NAD<sup>+</sup> (lactate dehydrogenase). Overall: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>3</sub>H<sub>6</sub>O<sub>3</sub> + 2 ATP. In both, the 2 NAD<sup>+</sup> cycle between glycolysis and the fermentation step.</p></div></details>
<details class="check"><summary>Why does fermentation yield only 2 ATP per glucose, compared with 36–38 for aerobic respiration? Where is the rest of the energy?</summary><div class="ans"><p>Only glycolysis runs, making 2 ATP (net) by substrate-level phosphorylation. Pyruvate isn't oxidized in Krebs, and NADH's electrons are given to pyruvate or acetaldehyde instead of going down the ETC to O<sub>2</sub>, so no ATP is made by chemiosmosis. Most of glucose's energy stays in the end product: lactate (which can be burned later) or ethanol (which is itself a fuel).</p></div></details>
<details class="check"><summary>Compare and contrast fermentation in bacterial cells and in animal tissue. (Worksheet)</summary><div class="ans"><p>Both convert pyruvate into a product that can be disposed of (into the environment or the bloodstream) so glycolysis keeps running, and both consume the NADH from glycolysis, regenerating NAD<sup>+</sup>. They differ in the product: the bacteria (and yeast) make ethanol by removing CO<sub>2</sub>, which is irreversible, while animal tissue makes lactate, which the liver can convert back to pyruvate when O<sub>2</sub> is plentiful.</p></div></details>
<details class="check"><summary>Complete the worksheet's Table 1 row for fermentation in animal tissue.</summary><div class="ans"><p>ATP: 0. NADH + H<sup>+</sup>: −2 (2 NADH are oxidized to NAD<sup>+</sup>). FADH<sub>2</sub>: 0. CO<sub>2</sub>: 0. Combined with glycolysis (net 2 ATP, +2 NADH), the overall result is 2 ATP and no net NADH.</p></div></details>
<details class="check"><summary>Why can parts of your body be anaerobic, but not your whole body?</summary><div class="ans"><p>A working tissue such as a sprinting muscle can use O<sub>2</sub> faster than the blood delivers it, so it becomes locally anaerobic and ferments for a short time while the rest of the body stays aerobic. The whole body can't, because organs like the brain and heart need a constant, large supply of aerobic ATP; 2 ATP per glucose from fermentation isn't nearly enough, and they would fail within minutes.</p></div></details>
<details class="check"><summary>Does lactic acid cause the "burn" in your muscles during hard exercise? Explain.</summary><div class="ans"><p>No. The burn comes from H<sup>+</sup> released when ATP is hydrolyzed very rapidly during muscle contraction, faster than it can be rebuilt aerobically. The H<sup>+</sup> builds up and lowers the pH. Making lactate actually consumes H<sup>+</sup> (pyruvate + NADH + H<sup>+</sup> → lactate + NAD<sup>+</sup>), and lactate leaves the cell along with H<sup>+</sup>, so lactate acts as a buffer and slows the acidification.</p></div></details>
<details class="check"><summary>List the four fates of lactate in animal cells.</summary><div class="ans"><p>(1) Shuttled to slow-twitch muscle fibres, converted to pyruvate and oxidized for ATP. (2) Sent to the liver and converted to glucose by gluconeogenesis (the Cori cycle). (3) Used by the heart and brain as a fuel for faster ATP production. (4) Acts as a signal that stimulates capillary growth (faster O<sub>2</sub> delivery) and the formation of new mitochondria.</p></div></details>
<details class="check"><summary>Is lactic acid fermentation reversible? Is alcohol fermentation? Why the difference?</summary><div class="ans"><p>Lactic acid fermentation is reversible: lactate dehydrogenase can turn lactate back into pyruvate when O<sub>2</sub> returns. Alcohol fermentation is irreversible: its first step removes CO<sub>2</sub>, which escapes as a gas, so ethanol can't be turned back into pyruvate.</p></div></details>
<details class="check" data-tier="likely"><summary>Bread dough rises because of yeast fermentation, which makes ethanol. Why is there almost no alcohol in baked bread?</summary><div class="ans"><p>The CO<sub>2</sub> made by pyruvate decarboxylase is trapped by the gluten network, which makes the dough rise. During baking, the inside of the loaf reaches about 95–99 °C, well above ethanol's boiling point (78 °C), so most of the ethanol evaporates out of the bread. The heat also kills the yeast (around 60 °C) and stops fermentation.</p></div></details>
<details class="check" data-tier="likely"><summary>A student proofs yeast in boiling water. What happens and why?</summary><div class="ans"><p>No foam forms and the dough won't rise. The high temperature denatures the yeast's enzymes (including those of glycolysis and fermentation): the bonds holding their 3-D shape break and the active sites no longer fit their substrates. The yeast cells die, so no CO<sub>2</sub> is produced.</p></div></details>
<details class="check" data-tier="likely"><summary>Two flasks of yeast get equal sugar. One is sealed (no O<sub>2</sub>); the other is bubbled with air. Which uses up its sugar faster, and which makes ethanol?</summary><div class="ans"><p>The sealed flask uses its sugar much faster and makes ethanol + CO<sub>2</sub>. Without O<sub>2</sub>, yeast ferment and get only 2 ATP per glucose, so they must break down far more glucose to get enough ATP. The aerated flask carries out aerobic respiration (up to 36–38 ATP per glucose), uses sugar more slowly, makes CO<sub>2</sub> and water but no ethanol, and grows more yeast.</p></div></details>
<details class="check" data-tier="likely"><summary>After a 400 m sprint you keep breathing hard for several minutes. Use the fates of lactate to explain why.</summary><div class="ans"><p>During the sprint your muscles fermented glucose to lactate. Afterward, extra O<sub>2</sub> is needed to make the ATP for converting lactate back into pyruvate and then glucose in the liver (gluconeogenesis, the Cori cycle), for oxidizing lactate in slow-twitch fibres, heart and brain, and for rebuilding ATP and re-oxygenating blood and muscle. Breathing stays fast until this "oxygen debt" is repaid.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
<li><strong>Fates of pyruvate:</strong> aerobic → acetyl-CoA; anaerobic in vertebrates → lactate; anaerobic in microorganisms → ethanol + CO<sub>2</sub>; pyruvate ⇄ glucose-6-phosphate by glycolysis / gluconeogenesis.</li>
<li>Fermentation occurs under <strong>anaerobic conditions</strong> (absence or local depletion of O<sub>2</sub>). The whole body can't be anaerobic, but parts (like working muscle) can.</li>
<li><strong>Real purpose: regenerate NAD<sup>+</sup> (oxidize NADH) so glycolysis can continue.</strong> The fermentation step itself makes no ATP.</li>
<li><strong>2 ATP vs 36–38</strong>: only glycolysis runs; most of the energy stays in lactate or ethanol.</li>
<li><strong>Lactic acid fermentation</strong> (animals, some bacteria): pyruvate + NADH → lactate + NAD<sup>+</sup>, catalyzed by <strong>lactate dehydrogenase (LDH)</strong>. One step, no CO<sub>2</sub>, reversible.</li>
<li>The muscle burn is from <strong>H<sup>+</sup> released by rapid ATP hydrolysis</strong>, not lactic acid; making lactate actually <strong>buffers</strong> (takes up) H<sup>+</sup>.</li>
<li><strong>Fates of lactate:</strong> slow-twitch fibres (→ pyruvate → ATP); liver (gluconeogenesis, Cori cycle); heart and brain (fast fuel); signalling (capillary growth, new mitochondria).</li>
<li><strong>Alcohol fermentation</strong> (yeast/fungi, plants, some bacteria): pyruvate → acetaldehyde + CO<sub>2</sub> (<strong>pyruvate decarboxylase</strong>), then acetaldehyde + NADH → ethanol + NAD<sup>+</sup> (<strong>alcohol dehydrogenase</strong>). Irreversible.</li>
<li>Word: glucose → ethanol + carbon dioxide. Balanced: <strong>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2 C<sub>2</sub>H<sub>5</sub>OH + 2 CO<sub>2</sub> (+ 2 ATP)</strong>.</li>
<li>Yeast is a <strong>facultative anaerobe</strong>: aerobic with O<sub>2</sub>, alcohol fermentation without it. In bread, CO<sub>2</sub> trapped by gluten makes dough rise, ethanol evaporates during baking, and too much heat denatures yeast enzymes.</li>
</ul>
`
});
