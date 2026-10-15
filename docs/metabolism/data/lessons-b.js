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
<details class="check"><summary>How do the mitochondria maintain the chemiosmotic gradient? (Review Q2)</summary><div class="ans"><p>Complexes I, III and IV keep pumping H<sup>+</sup> from the matrix into the intermembrane space, using energy from electrons flowing down the chain. That needs a steady supply of NADH and FADH<sub>2</sub> (from glycolysis, pyruvate oxidation and Krebs) and O<sub>2</sub> to accept the electrons at the end. The inner membrane is impermeable to H<sup>+</sup>, so H<sup>+</sup> can't leak back easily and can only return through ATP synthase. Forming water on the matrix side also removes H<sup>+</sup> from the matrix, making the gradient steeper.</p></div></details>

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

// END-LESSONS-B
