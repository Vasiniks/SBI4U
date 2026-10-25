window.LESSONS = window.LESSONS || [];

/* ===================================================================
   2.08 Intro to Photosynthesis
   =================================================================== */
window.LESSONS.push({
  id: "2.08",
  title: "Intro to Photosynthesis",
  stage: "photo",
  where: "Leaf mesophyll and chloroplast",
  summary: "Photosynthesis uses light energy to reduce CO2 to glucose, taking the electrons from water and releasing O2. It happens in the chloroplasts of leaf mesophyll cells: the light reactions in the thylakoid membranes and the Calvin cycle in the stroma. Pigments such as chlorophyll a, chlorophyll b and the carotenoids decide which wavelengths of light the plant can use.",
  objectives: [
    "Explain why photosynthesis matters and how its reactants and products connect to cellular respiration.",
    "Identify the tissues in a leaf cross-section, including palisade and spongy mesophyll, veins and stomata, and state what each does.",
    "Label a chloroplast: outer and inner membrane, thylakoid, granum, stroma and thylakoid lumen.",
    "Write the overall equation, identify what is reduced and what is oxidized, and explain why photosynthesis is anabolic and endergonic.",
    "Name the two stages of photosynthesis and where each one happens in the chloroplast.",
    "Describe light as electromagnetic radiation, explain absorption, transmission and reflection, and use an absorption spectrum to explain why plants look green.",
    "Compare chlorophyll a, chlorophyll b and the accessory pigments, and explain why leaves change colour in the fall.",
    "Calculate Rf values from a paper chromatogram and explain the order of the pigment bands."
  ],
  html: `
<h3 data-tier="essential">Why photosynthesis matters</h3>
<p>Lessons 2.02 to 2.07 followed glucose as cells broke it down to make ATP. But where did that glucose come from in the first place? Almost all of it was built by <span class="term">photosynthesis</span>: the process in which plants, algae and some bacteria use energy from sunlight to make sugar from carbon dioxide and water. The class slide puts it simply: photosynthesis <strong>creates sugar using energy from the sun, and that sugar is then used in cellular respiration to produce ATP</strong>.</p>
<p>So the two processes are linked. The energy in one mole of glucose (2870 kJ, the number you used in the ATP-yield calculations) started out as light. Photosynthesis captures that light energy and stores it in the chemical bonds of glucose. Cellular respiration releases it again and repackages it as ATP. Without photosynthesis there would be no glucose to respire, and almost no oxygen in the air to respire it with.</p>
<div class="compare"><div><h4>Photosynthesis</h4><ul><li><strong>Takes in:</strong> CO<sub>2</sub>, H<sub>2</sub>O, light energy</li><li><strong>Gives out:</strong> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, O<sub>2</sub></li><li>Stores energy in glucose</li><li>Happens in chloroplasts</li></ul></div><div><h4>Cellular respiration</h4><ul><li><strong>Takes in:</strong> C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, O<sub>2</sub></li><li><strong>Gives out:</strong> CO<sub>2</sub>, H<sub>2</sub>O, energy (ATP + heat)</li><li>Releases the energy stored in glucose</li><li>Happens in the cytoplasm and mitochondria</li></ul></div></div>
<p>The products of one process are the reactants of the other. <strong>Matter cycles</strong> between them, but <strong>energy flows one way</strong>: it enters as light and leaves as heat, so life needs a constant supply of sunlight. Lesson 2.10 compares the two processes point by point.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Plants photosynthesize and animals respire" is wrong. Plant cells have <strong>both</strong> chloroplasts and mitochondria. They respire all the time, day and night, to make the ATP they need for growth, transport and repair. They photosynthesize only when there is light. During the day a healthy plant photosynthesizes faster than it respires, so overall it takes in CO<sub>2</sub> and gives off O<sub>2</sub>. At night it only respires, so it takes in O<sub>2</sub> and gives off CO<sub>2</sub>.</p></div>
<p data-tier="extra">Organisms that make their own food from inorganic molecules are <span class="term">autotrophs</span> (plants are <em>photo</em>autotrophs); everything else, including you, is a <span class="term">heterotroph</span>. Even fossil fuels are stored photosynthesis from millions of years ago.</p>

<h3 data-tier="essential">Photosynthetic tissue: inside a leaf</h3>
<p>Any green part of a plant can photosynthesize, but the <strong>leaf</strong> is built for it. It is broad and flat to catch light, thin so gases don't have far to diffuse, and threaded with veins that bring water in and carry sugar away. The tissue that actually photosynthesizes is the <span class="term">mesophyll</span> (Greek for "middle of the leaf"). Mesophyll is a type of <em>parenchyma</em> tissue: living, thin-walled cells packed with chloroplasts. In a typical <strong>dicot</strong> leaf (a maple or bean leaf, for example) the mesophyll has two layers.</p>
<ul>
<li><span class="term">Palisade mesophyll</span>: tall, column-shaped cells lined up tightly side by side just under the upper surface, where the light is brightest. They contain the <strong>most chloroplasts</strong>, so most of the leaf's photosynthesis happens here.</li>
<li><span class="term">Spongy mesophyll</span>: irregular, loosely packed cells below the palisade layer, with large <strong>air spaces</strong> between them. The air spaces let CO<sub>2</sub> spread from the stomata to every mesophyll cell, and let O<sub>2</sub> and water vapour escape. Spongy cells have chloroplasts too, just fewer.</li>
</ul>
<p>Around the mesophyll, the <strong>cuticle</strong> (a waxy, waterproof coating) and the clear <strong>upper and lower epidermis</strong> protect the leaf and let light through; their cells have few or no chloroplasts. <strong>Veins</strong> carry water in (xylem) and sugar out (phloem), and <strong>guard cells</strong> (which do have chloroplasts) open and close the stomata.</p>

<figure class="diagram">
<svg viewBox="0 0 640 400" role="img" aria-labelledby="p208a-t p208a-d">
<title id="p208a-t">Cross-section of a dicot leaf</title>
<desc id="p208a-d">From top to bottom: a waxy cuticle, the upper epidermis, a layer of tall, tightly packed palisade mesophyll cells full of chloroplasts, loosely packed spongy mesophyll cells with air spaces and a vein (xylem and phloem inside a bundle sheath), then the lower epidermis with a stoma between two guard cells. CO2 enters through the stoma, and O2 and water vapour leave through it.</desc>
<defs>
<marker id="p208a-ai" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
<marker id="p208a-ao" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--link)"/></marker>
</defs>
<text x="20" y="22" style="fill:var(--ink-2);font-size:12px">Upper surface (faces the light)</text>
<rect x="20" y="61" width="420" height="219" style="fill:var(--surface-2)"/>
<rect x="20" y="31" width="420" height="6" style="fill:var(--line);stroke:var(--ink-2);stroke-width:1"/>
<g style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.2">
<rect x="20" y="37" width="35" height="24"/><rect x="55" y="37" width="35" height="24"/><rect x="90" y="37" width="35" height="24"/><rect x="125" y="37" width="35" height="24"/><rect x="160" y="37" width="35" height="24"/><rect x="195" y="37" width="35" height="24"/><rect x="230" y="37" width="35" height="24"/><rect x="265" y="37" width="35" height="24"/><rect x="300" y="37" width="35" height="24"/><rect x="335" y="37" width="35" height="24"/><rect x="370" y="37" width="35" height="24"/><rect x="405" y="37" width="35" height="24"/>
<rect x="20" y="280" width="35" height="24"/><rect x="55" y="280" width="35" height="24"/><rect x="90" y="280" width="35" height="24"/><rect x="125" y="280" width="35" height="24"/><rect x="160" y="280" width="35" height="24"/><rect x="195" y="280" width="35" height="24"/><rect x="230" y="280" width="35" height="24"/><rect x="265" y="280" width="35" height="24"/><rect x="300" y="280" width="35" height="24"/><rect x="335" y="280" width="35" height="24"/><rect x="420" y="280" width="20" height="24"/>
</g>
<g style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5">
<rect x="21" y="64" width="28" height="88" rx="9"/><rect x="51" y="64" width="28" height="88" rx="9"/><rect x="81" y="64" width="28" height="88" rx="9"/><rect x="111" y="64" width="28" height="88" rx="9"/><rect x="141" y="64" width="28" height="88" rx="9"/><rect x="171" y="64" width="28" height="88" rx="9"/><rect x="201" y="64" width="28" height="88" rx="9"/><rect x="231" y="64" width="28" height="88" rx="9"/><rect x="261" y="64" width="28" height="88" rx="9"/><rect x="291" y="64" width="28" height="88" rx="9"/><rect x="321" y="64" width="28" height="88" rx="9"/><rect x="351" y="64" width="28" height="88" rx="9"/><rect x="381" y="64" width="28" height="88" rx="9"/><rect x="411" y="64" width="28" height="88" rx="9"/>
<ellipse cx="44" cy="178" rx="20" ry="13"/><ellipse cx="94" cy="172" rx="19" ry="12"/><ellipse cx="148" cy="182" rx="20" ry="13"/><ellipse cx="40" cy="220" rx="17" ry="13"/><ellipse cx="86" cy="212" rx="18" ry="13"/><ellipse cx="134" cy="226" rx="18" ry="13"/><ellipse cx="178" cy="212" rx="13" ry="12"/><ellipse cx="50" cy="258" rx="20" ry="13"/><ellipse cx="100" cy="264" rx="18" ry="12"/><ellipse cx="150" cy="254" rx="19" ry="13"/><ellipse cx="200" cy="264" rx="18" ry="11"/>
<ellipse cx="318" cy="176" rx="18" ry="13"/><ellipse cx="366" cy="182" rx="19" ry="12"/><ellipse cx="414" cy="172" rx="18" ry="12"/><ellipse cx="304" cy="232" rx="17" ry="13"/><ellipse cx="352" cy="226" rx="18" ry="12"/><ellipse cx="404" cy="234" rx="20" ry="13"/><ellipse cx="258" cy="266" rx="18" ry="10"/><ellipse cx="310" cy="264" rx="18" ry="11"/><ellipse cx="360" cy="260" rx="17" ry="12"/>
<ellipse cx="383" cy="292" rx="10" ry="12"/><ellipse cx="407" cy="292" rx="10" ry="12"/>
</g>
<g style="fill:var(--leaf)">
<circle cx="30" cy="84" r="4"/><circle cx="40" cy="108" r="4"/><circle cx="30" cy="132" r="4"/><circle cx="60" cy="84" r="4"/><circle cx="70" cy="108" r="4"/><circle cx="60" cy="132" r="4"/><circle cx="90" cy="84" r="4"/><circle cx="100" cy="108" r="4"/><circle cx="90" cy="132" r="4"/><circle cx="120" cy="84" r="4"/><circle cx="130" cy="108" r="4"/><circle cx="120" cy="132" r="4"/><circle cx="150" cy="84" r="4"/><circle cx="160" cy="108" r="4"/><circle cx="150" cy="132" r="4"/><circle cx="180" cy="84" r="4"/><circle cx="190" cy="108" r="4"/><circle cx="180" cy="132" r="4"/><circle cx="210" cy="84" r="4"/><circle cx="220" cy="108" r="4"/><circle cx="210" cy="132" r="4"/><circle cx="240" cy="84" r="4"/><circle cx="250" cy="108" r="4"/><circle cx="240" cy="132" r="4"/><circle cx="270" cy="84" r="4"/><circle cx="280" cy="108" r="4"/><circle cx="270" cy="132" r="4"/><circle cx="300" cy="84" r="4"/><circle cx="310" cy="108" r="4"/><circle cx="300" cy="132" r="4"/><circle cx="330" cy="84" r="4"/><circle cx="340" cy="108" r="4"/><circle cx="330" cy="132" r="4"/><circle cx="360" cy="84" r="4"/><circle cx="370" cy="108" r="4"/><circle cx="360" cy="132" r="4"/><circle cx="390" cy="84" r="4"/><circle cx="400" cy="108" r="4"/><circle cx="390" cy="132" r="4"/><circle cx="420" cy="84" r="4"/><circle cx="430" cy="108" r="4"/><circle cx="420" cy="132" r="4"/>
<circle cx="44" cy="178" r="3.5"/><circle cx="94" cy="172" r="3.5"/><circle cx="148" cy="182" r="3.5"/><circle cx="40" cy="220" r="3.5"/><circle cx="86" cy="212" r="3.5"/><circle cx="134" cy="226" r="3.5"/><circle cx="50" cy="258" r="3.5"/><circle cx="150" cy="254" r="3.5"/><circle cx="318" cy="176" r="3.5"/><circle cx="366" cy="182" r="3.5"/><circle cx="352" cy="226" r="3.5"/><circle cx="404" cy="234" r="3.5"/><circle cx="310" cy="264" r="3.5"/><circle cx="383" cy="292" r="3"/><circle cx="407" cy="292" r="3"/>
</g>
<circle cx="240" cy="205" r="42" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2"/>
<circle cx="240" cy="205" r="30" style="fill:var(--surface);stroke:var(--leaf);stroke-width:1"/>
<path d="M211,204 A29,29 0 0 1 269,204 Z" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<path d="M211,206 A29,29 0 0 0 269,206 Z" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:1.5"/>
<text x="240" y="197" text-anchor="middle" style="fill:var(--ink);font-size:12px">xylem</text>
<text x="240" y="223" text-anchor="middle" style="fill:var(--ink);font-size:12px">phloem</text>
<rect x="20" y="304" width="373" height="6" style="fill:var(--line);stroke:var(--ink-2);stroke-width:1"/>
<rect x="397" y="304" width="43" height="6" style="fill:var(--line);stroke:var(--ink-2);stroke-width:1"/>
<line x1="388" y1="364" x2="390" y2="316" style="stroke:var(--ink-2);stroke-width:2.5" marker-end="url(#p208a-ai)"/>
<line x1="400" y1="316" x2="402" y2="364" style="stroke:var(--link);stroke-width:2.5" marker-end="url(#p208a-ao)"/>
<text x="382" y="382" text-anchor="end" style="fill:var(--ink);font-size:13px">CO₂ in</text>
<text x="408" y="382" style="fill:var(--link);font-size:13px">O₂ + H₂O out</text>
<text x="20" y="332" style="fill:var(--ink-2);font-size:12px">Lower surface</text>
<g style="stroke:var(--ink-2);stroke-width:1;fill:none">
<line x1="440" y1="34" x2="452" y2="34"/><line x1="440" y1="49" x2="452" y2="54"/><line x1="440" y1="104" x2="452" y2="104"/><line x1="433" y1="172" x2="452" y2="170"/><line x1="282" y1="205" x2="452" y2="205"/><line x1="440" y1="288" x2="452" y2="288"/><line x1="412" y1="302" x2="452" y2="320"/>
</g>
<g style="fill:var(--ink);font-size:13px">
<text x="456" y="38">Cuticle (waxy)</text>
<text x="456" y="58">Upper epidermis</text>
<text x="456" y="102" style="font-weight:700">Palisade mesophyll</text>
<text x="456" y="166" style="font-weight:700">Spongy mesophyll</text>
<text x="456" y="209">Vein: xylem + phloem</text>
<text x="456" y="292">Lower epidermis</text>
<text x="456" y="324">Stoma (pore) between</text>
<text x="456" y="340">two guard cells</text>
</g>
<g style="fill:var(--ink-2);font-size:12px">
<text x="456" y="118">(most chloroplasts)</text>
<text x="456" y="182">(loose, with air spaces)</text>
<text x="456" y="225">inside a bundle sheath</text>
</g>
</svg>
<figcaption>Cross-section of a dicot leaf, based on the class "Photosynthetic Tissue" slide. Green dots are chloroplasts. The mesophyll (palisade + spongy) is the photosynthetic tissue. Epidermis cells, apart from the guard cells, have few or no chloroplasts and let light pass through.</figcaption>
</figure>

<div class="callout teacher"><p class="callout-title">Said in class</p><p>The palisade + spongy arrangement is for <strong>dicots</strong>. <strong>Monocots</strong> (grasses, corn, lilies) have <strong>only spongy mesophyll</strong>, because their leaves <strong>grow vertically</strong>. A leaf that stands upright gets light on both faces about equally, so there is no single "top" side for a palisade layer to face.</p></div>

<h4>Stomata: how gases get in and out</h4>
<p>The three things photosynthesis needs arrive by different routes. <strong>Water</strong> comes up from the roots through the xylem in the veins. <strong>Light</strong> passes through the transparent upper surface. <strong>Carbon dioxide</strong> comes from the air through tiny pores called <span class="term">stomata</span> (singular: stoma), found mostly in the lower epidermis. Each stoma sits between two <span class="term">guard cells</span>, which swell to open the pore and go limp to close it. The class "Overview" slide shows this from the underside of a leaf:</p>
<ul>
<li><strong>Open stomata:</strong> CO<sub>2</sub> diffuses in; O<sub>2</sub> (made by photosynthesis) and water vapour diffuse out.</li>
<li><strong>Closed stomata:</strong> the leaf saves water, but CO<sub>2</sub> can't get in.</li>
</ul>
<p data-tier="likely">That is a real trade-off: CO<sub>2</sub> can't get in without water vapour getting out (<em>transpiration</em>). On hot, dry days plants close their stomata to save water, CO<sub>2</sub> inside the leaf runs low, and photosynthesis suffers, a problem that returns in lessons 2.10 and 2.11 (C<sub>4</sub> and CAM plants).</p>
<div class="callout key"><p class="callout-title">On the test</p><ul><li>Label a leaf cross-section: cuticle, upper and lower epidermis, palisade mesophyll, spongy mesophyll, vein (xylem and phloem), stoma, guard cells.</li><li>The photosynthetic tissue is the <strong>mesophyll</strong>, and most chloroplasts are in the <strong>palisade</strong> layer.</li><li>CO<sub>2</sub> enters, and O<sub>2</sub> and water vapour leave, through the <strong>stomata</strong>.</li></ul></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>A <em>palisade</em> is a fence of upright wooden stakes: <strong>p</strong>alisade cells are <strong>p</strong>acked <strong>p</strong>illars. <strong>Sp</strong>ongy cells have <strong>sp</strong>aces, like a sponge.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p><strong>Stoma</strong> (a pore in the leaf surface) and <strong>stroma</strong> (the fluid inside a chloroplast) differ by one letter but are completely different things. Stoma comes from the Greek for "mouth": an opening for gases. St<strong>r</strong>oma is the fluid where the Calvin cycle <strong>r</strong>uns.</p></div>

<h3 data-tier="essential">The chloroplast: know how to label it</h3>
<p>Zoom in on a palisade cell and you'll find dozens of <span class="term">chloroplasts</span> (a typical mesophyll cell has roughly 30 to 40). The class "Location" slide zooms from a leaf, to its cells, to a single chloroplast to answer the question "where does it take place?": photosynthesis happens <strong>in chloroplasts</strong>. Like a mitochondrion, a chloroplast has a double membrane and several compartments, and each stage of photosynthesis happens in a specific compartment. That is why you need to know the parts.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p><strong>Know how to label the chloroplast.</strong> This was stressed in class (and written in capitals at the top of the light reactions notes). Expect to label a chloroplast diagram on the test.</p></div>
<ul>
<li><strong>Double membrane</strong> (outer membrane + inner membrane): surrounds the whole chloroplast and controls what enters and leaves. The narrow gap between the two is the intermembrane space.</li>
<li><span class="term">Thylakoid</span>: a membrane-bound, flattened sac. Its membrane, the <strong>thylakoid membrane</strong>, holds the pigments, photosystems, electron transport chain and ATP synthase: the <strong>light reactions</strong> happen here.</li>
<li><span class="term">Granum</span> (plural: <em>grana</em>): a stack of thylakoids. Stacking packs a large area of light-capturing membrane into a small space.</li>
<li><span class="term">Stroma</span>: the fluid matrix surrounding the grana, inside the inner membrane. The <strong>Calvin cycle</strong> enzymes (including RuBisCO) work here, and it also holds the chloroplast's own DNA and ribosomes.</li>
<li><span class="term">Thylakoid lumen</span>: the space inside a thylakoid. H<sup>+</sup> ions pile up here to build the gradient that makes ATP (lesson 2.09).</li>
</ul>

<figure class="diagram">
<svg viewBox="0 0 640 380" role="img" aria-labelledby="p208b-t p208b-d">
<title id="p208b-t">Labelled chloroplast</title>
<desc id="p208b-d">An oval chloroplast with an outer membrane and an inner membrane separated by a narrow intermembrane space. Inside the inner membrane is the stroma, a fluid in which four grana sit. Each granum is a stack of flattened thylakoids; the space inside each thylakoid is the thylakoid lumen. Stroma lamellae connect the grana. The light reactions happen in the thylakoid membranes and the Calvin cycle happens in the stroma.</desc>
<ellipse cx="320" cy="190" rx="185" ry="135" style="fill:var(--surface);stroke:var(--leaf);stroke-width:3"/>
<ellipse cx="320" cy="190" rx="173" ry="123" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2"/>
<g style="stroke:var(--leaf);stroke-width:4;fill:none;stroke-linecap:round">
<line x1="250" y1="168" x2="290" y2="140"/><line x1="350" y1="140" x2="395" y2="178"/><line x1="250" y1="205" x2="285" y2="245"/><line x1="395" y1="214" x2="345" y2="252"/>
</g>
<g style="fill:var(--surface);stroke:var(--leaf);stroke-width:2.5">
<rect x="190" y="150" width="60" height="14" rx="7"/><rect x="190" y="167" width="60" height="14" rx="7"/><rect x="190" y="184" width="60" height="14" rx="7"/><rect x="190" y="201" width="60" height="14" rx="7"/>
<rect x="290" y="95" width="60" height="14" rx="7"/><rect x="290" y="112" width="60" height="14" rx="7"/><rect x="290" y="129" width="60" height="14" rx="7"/><rect x="290" y="146" width="60" height="14" rx="7"/>
<rect x="395" y="160" width="60" height="14" rx="7"/><rect x="395" y="177" width="60" height="14" rx="7"/><rect x="395" y="194" width="60" height="14" rx="7"/><rect x="395" y="211" width="60" height="14" rx="7"/>
<rect x="285" y="225" width="60" height="14" rx="7"/><rect x="285" y="242" width="60" height="14" rx="7"/><rect x="285" y="259" width="60" height="14" rx="7"/><rect x="285" y="276" width="60" height="14" rx="7"/>
</g>
<g style="stroke:var(--ink-2);stroke-width:1;fill:none">
<line x1="126" y1="82" x2="175" y2="106"/><line x1="126" y1="126" x2="166" y2="134"/><line x1="126" y1="192" x2="141" y2="192"/><line x1="126" y1="248" x2="192" y2="212"/><line x1="126" y1="282" x2="222" y2="209"/>
<line x1="372" y1="159" x2="514" y2="108"/><path d="M459,160 L464,160 L464,225 L459,225"/><line x1="464" y1="192" x2="514" y2="192"/><line x1="380" y1="268" x2="514" y2="264"/>
</g>
<circle cx="222" cy="209" r="2.5" style="fill:var(--ink)"/>
<circle cx="380" cy="268" r="2.5" style="fill:var(--ink)"/>
<g style="fill:var(--ink);font-size:13px">
<text x="122" y="86" text-anchor="end">Outer membrane</text>
<text x="122" y="130" text-anchor="end">Inner membrane</text>
<text x="122" y="188" text-anchor="end">Intermembrane</text>
<text x="122" y="204" text-anchor="end">space</text>
<text x="122" y="252" text-anchor="end">Thylakoid</text>
<text x="122" y="286" text-anchor="end">Thylakoid lumen</text>
<text x="518" y="180" style="font-weight:700">Granum</text>
<text x="518" y="268" style="font-weight:700">Stroma</text>
</g>
<g style="fill:var(--ink-2);font-size:12px">
<text x="518" y="112">Stroma lamella</text>
<text x="518" y="196">(stack of</text>
<text x="518" y="211">thylakoids)</text>
<text x="518" y="284">(fluid around</text>
<text x="518" y="299">the grana)</text>
</g>
<text x="320" y="362" text-anchor="middle" style="fill:var(--ink);font-size:13px">Light reactions: thylakoid membranes  ·  Calvin cycle: stroma</text>
</svg>
<figcaption>A chloroplast cut open. The thylakoid membranes (dark green outlines) hold the pigments; the white space inside each thylakoid is the lumen; the pale green fluid is the stroma. Stroma lamellae (connections between grana) are extra detail.</figcaption>
</figure>

<div class="callout tip"><p class="callout-title">Memory trick</p><p>Picture stacks of hollow <strong>pita breads</strong> sitting in <strong>soup</strong>. Each pita is a <strong>thylakoid</strong>, the pocket inside it is the <strong>lumen</strong>, a stack of pitas is a <strong>granum</strong>, and the soup is the <strong>stroma</strong>. The light reactions happen in the bread itself (the membrane); the Calvin cycle happens in the soup.</p></div>
<p data-tier="extra"><strong>Stroma lamellae</strong> are stretches of thylakoid membrane that connect one granum to the next. Because of them, all the thylakoids in a chloroplast form one connected network around one connected lumen. You don't need to label them, but they appear in many diagrams, including the class slide.</p>

<h4 data-tier="likely">Matching the chloroplast to the mitochondrion</h4>
<p>You already know the mitochondrion, and the two organelles line up closely. Learning the pairs now will make lessons 2.09 and 2.10 much easier.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Chloroplast</th><th>Mitochondrion</th><th>What they have in common</th></tr></thead>
<tbody>
<tr><td>Stroma</td><td>Matrix</td><td>Fluid where a cycle runs (Calvin vs Krebs)</td></tr>
<tr><td>Thylakoid membrane</td><td>Inner membrane (cristae)</td><td>Holds an electron transport chain and ATP synthase</td></tr>
<tr><td>Thylakoid lumen</td><td>Intermembrane space</td><td>The compartment H<sup>+</sup> is pumped into</td></tr>
<tr><td>Double membrane, own DNA and ribosomes</td><td>Double membrane, own DNA and ribosomes</td><td>Evidence both descend from free-living bacteria (endosymbiosis)</td></tr>
</tbody></table></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>In a chloroplast, H<sup>+</sup> is pumped into the <strong>thylakoid lumen</strong>, not into the chloroplast's intermembrane space. A chloroplast has <strong>three</strong> membranes (outer, inner, thylakoid) and <strong>three</strong> spaces (intermembrane space, stroma, lumen). The important membrane for energy is the thylakoid membrane, not the inner membrane.</p></div>

<h3 data-tier="essential">The overall equation</h3>
<p>The class "Overview" slide summarizes all of photosynthesis in one balanced equation:</p>
<div class="eq">6 CO<sub>2 (g)</sub> + 6 H<sub>2</sub>O<sub> (l)</sub> + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6 (aq)</sub> + 6 O<sub>2 (g)</sub></div>
<p>Read it as: six molecules of carbon dioxide and six molecules of water, using light energy, produce one molecule of glucose and six molecules of oxygen. Light is written on the left because it is an input; as the class notes put it, the left side needs light energy. Check that it balances:</p>
<ul>
<li><strong>Carbon:</strong> 6 in 6 CO<sub>2</sub> → 6 in glucose.</li>
<li><strong>Hydrogen:</strong> 12 in 6 H<sub>2</sub>O → 12 in glucose.</li>
<li><strong>Oxygen:</strong> 12 in 6 CO<sub>2</sub> + 6 in 6 H<sub>2</sub>O = 18 → 6 in glucose + 12 in 6 O<sub>2</sub> = 18.</li>
</ul>
<p>Each input has a different job. <strong>CO<sub>2</sub></strong> supplies the carbon atoms that become the backbone of glucose. <strong>Water</strong> supplies the electrons (and hydrogen) needed to turn CO<sub>2</sub> into sugar. <strong>Light</strong> supplies the energy. Notice that the equation is the reverse of the overall equation for cellular respiration.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>The O<sub>2</sub> released by photosynthesis comes from <strong>water</strong>, not from CO<sub>2</sub>. Water is split in the light reactions; CO<sub>2</sub> is used in the Calvin cycle and its oxygen ends up in the sugar (and in new water).</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>It is tempting to think a plant "splits CO<sub>2</sub> into carbon and oxygen" and keeps the carbon. It doesn't. The carbon dioxide molecule is added whole to an organic molecule in the Calvin cycle; the oxygen gas comes entirely from water.</p></div>
<p data-tier="extra">How do we know? In the 1940s, algae given water labelled with heavy oxygen (<sup>18</sup>O) released labelled O<sub>2</sub>; labelling the CO<sub>2</sub> instead gave unlabelled O<sub>2</sub>. To release 12 oxygen atoms entirely from water, a plant must split <strong>12</strong> water molecules, and the Calvin cycle makes 6 new ones: 6 CO<sub>2</sub> + 12 H<sub>2</sub>O + light → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> + 6 H<sub>2</sub>O. Use the simplified version on the test.</p>
<p data-tier="likely">Glucose is the conventional way to write the product. The Calvin cycle actually exports a 3-carbon sugar (G3P, lesson 2.10), and the plant builds glucose from it, then converts glucose into <strong>sucrose</strong> (to transport in the phloem), <strong>starch</strong> (to store) and <strong>cellulose</strong> (to build cell walls). A plant also uses its sugar as the fuel for its own cellular respiration.</p>

<h3 data-tier="essential">Redox: CO<sub>2</sub> is reduced, water is oxidized</h3>
<p>The second half of the "Overview" slide explains the chemistry in three bullets:</p>
<ul>
<li><strong>Carbon dioxide is reduced to glucose.</strong></li>
<li><strong>The electrons needed for this reduction come from water</strong>, which is <strong>oxidized</strong>.</li>
<li><strong>The energy needed for this reduction comes from light</strong>, delivered as <strong>ATP and NADPH</strong>.</li>
</ul>
<p>Recall <strong>OIL RIG</strong>: oxidation is loss of electrons, reduction is gain of electrons. In biology, electrons usually travel with protons as hydrogen atoms, so reduction often looks like <em>gaining hydrogen</em> and oxidation like <em>losing hydrogen</em>. Apply that here:</p>
<ul>
<li><strong>CO<sub>2</sub> → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>:</strong> carbon starts with no hydrogen and ends up bonded to hydrogen. It has gained electrons, so CO<sub>2</sub> is <strong>reduced</strong>.</li>
<li><strong>H<sub>2</sub>O → O<sub>2</sub>:</strong> oxygen starts bonded to hydrogen and ends up with none. It has lost electrons, so water is <strong>oxidized</strong>.</li>
</ul>
<p>Why does this need energy? Oxygen is very electronegative, so the electrons in water are held tightly, in a low-energy, stable position. In glucose, electrons are shared fairly evenly in C–H and C–C bonds, in a higher-energy position. Photosynthesis pushes electrons <strong>uphill</strong>, from water to carbon, and that takes an energy input: light. Cellular respiration is the reverse. Electrons fall <strong>downhill</strong> from glucose to oxygen, and the energy they release is used to make ATP.</p>
<p>Light energy can't reduce CO<sub>2</sub> directly, so the plant uses two carriers to deliver it from the light reactions to the Calvin cycle:</p>
<ul>
<li><strong>ATP</strong>: supplies chemical energy to drive the reactions.</li>
<li><span class="term">NADPH</span>: supplies the high-energy electrons (and H) that actually reduce the carbon. NADP<sup>+</sup> is the empty, oxidized form; NADPH is the loaded, reduced form.</li>
</ul>
<div class="tally" data-tier="likely"><span class="chip co2">6 CO<sub>2</sub> fixed</span><span class="chip atp">18 ATP used</span><span class="chip nadph">12 NADPH used</span><span class="chip o2">6 O<sub>2</sub> released</span></div>
<p data-tier="likely">Those are the totals per glucose, which you'll work out step by step in lesson 2.10.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>NADPH</strong> is NADH with an extra <strong>p</strong>hosphate group. Remember the <strong>P</strong> for <strong>p</strong>hotosynthesis and <strong>p</strong>lants: NADH carries electrons in respiration (breaking down), NADPH carries electrons in photosynthesis (building up).</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Because O<sub>2</sub> is released, some students say "CO<sub>2</sub> is oxidized." It isn't. CO<sub>2</sub> gains electrons (reduced); <strong>water</strong> loses electrons (oxidized), and that's where the O<sub>2</sub> comes from.</p></div>

<h3 data-tier="essential">Anabolic and endergonic</h3>
<p>The class slide labels photosynthesis with two words from lesson 2.01:</p>
<ul>
<li><strong>Anabolic</strong>: it <em>builds</em> a large, complex molecule (glucose) from small, simple ones (CO<sub>2</sub> and H<sub>2</sub>O). Cellular respiration is catabolic: it breaks glucose down.</li>
<li><strong>Endergonic</strong>: the products have <em>more</em> free energy than the reactants, so energy must be put in. ΔG is positive, about <strong>+2870 kJ per mole of glucose</strong>, exactly the amount respiration releases (ΔG ≈ −2870 kJ/mol). Endergonic reactions are not spontaneous, so photosynthesis runs only while energy (light) keeps coming in.</li>
</ul>
<div class="compare"><div><h4>Photosynthesis</h4><ul><li>Anabolic (builds glucose)</li><li>Endergonic: ΔG ≈ +2870 kJ/mol</li><li>Stores light energy as chemical energy</li><li>CO<sub>2</sub> is reduced; H<sub>2</sub>O is oxidized</li></ul></div><div><h4>Cellular respiration</h4><ul><li>Catabolic (breaks glucose down)</li><li>Exergonic: ΔG ≈ −2870 kJ/mol</li><li>Releases chemical energy as ATP and heat</li><li>Glucose is oxidized; O<sub>2</sub> is reduced</li></ul></div></div>
<p>So light energy is converted into <strong>chemical potential energy</strong>, stored in the arrangement of electrons in glucose's bonds. When any cell later respires that glucose, it gets the energy back.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Ender</strong>gonic: energy <strong>enters</strong>. <strong>Ex</strong>ergonic: energy <strong>exits</strong>. <strong>Ana</strong>bolic: <strong>a</strong>ssemble. <strong>Cata</strong>bolic: <strong>c</strong>ut apart.</p></div>

<h3 data-tier="essential">Two stages, two locations</h3>
<p>Photosynthesis happens in two linked stages, each in its own part of the chloroplast:</p>
<ul>
<li><strong>Light reactions</strong> (thylakoid membranes, lesson 2.09): pigments absorb light; the energy splits water (releasing O<sub>2</sub>) and makes <strong>ATP</strong> and <strong>NADPH</strong>.</li>
<li><strong>Calvin cycle</strong> (stroma, lesson 2.10): ATP and NADPH are used to fix CO<sub>2</sub> from the air into sugar.</li>
</ul>
<div class="table-wrap"><table class="data">
<thead><tr><th>Stage</th><th>Where</th><th>Takes in</th><th>Gives out</th><th>Uses light directly?</th></tr></thead>
<tbody>
<tr><td><strong>Light reactions</strong></td><td>Thylakoid membranes</td><td>Light, H<sub>2</sub>O, ADP + P<sub>i</sub>, NADP<sup>+</sup></td><td>O<sub>2</sub>, ATP, NADPH</td><td>Yes</td></tr>
<tr><td><strong>Calvin cycle</strong></td><td>Stroma</td><td>CO<sub>2</sub>, ATP, NADPH</td><td>Sugar (G3P → glucose), ADP + P<sub>i</sub>, NADP<sup>+</sup></td><td>No, but it needs the ATP and NADPH the light reactions make</td></tr>
</tbody></table></div>
<p>The two stages feed each other. The light reactions act like a charging station: they "charge" ADP into ATP and NADP<sup>+</sup> into NADPH. The Calvin cycle spends the charge to build sugar and sends the "empty" ADP, P<sub>i</sub> and NADP<sup>+</sup> back to be recharged. Water and light go into the light reactions; CO<sub>2</sub> goes into the Calvin cycle. That is why the O<sub>2</sub> comes from water: CO<sub>2</sub> never goes near the light reactions.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Th</strong>ylakoids <strong>th</strong>ink light; the <strong>s</strong>troma makes <strong>s</strong>ugar.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>Know both stages, where each happens (thylakoid vs stroma), and what passes between them: ATP and NADPH go from the light reactions to the Calvin cycle; ADP, P<sub>i</sub> and NADP<sup>+</sup> come back.</p></div>
<p data-tier="likely">The Calvin cycle is sometimes called the "light-independent reactions", which is misleading. It doesn't use light directly, but it depends completely on the ATP and NADPH from the light reactions, so in practice it runs during the day and stops shortly after dark, once those carriers run out.</p>

<h3 data-tier="essential">Light: electromagnetic radiation</h3>
<p>To understand how a plant captures light, you need to know a little about light itself. The "Why are plants green?" slides start here:</p>
<ul>
<li>Light is a form of <span class="term">electromagnetic radiation</span> (EMR) that travels in waves.</li>
<li><strong>Visible light</strong> has wavelengths from about <strong>380 nm to 750 nm</strong>.</li>
</ul>
<p>A <span class="term">wavelength</span> is the distance from one wave crest to the next, measured for light in nanometres (1 nm = 10<sup>−9</sup> m). Visible light is a narrow band of the electromagnetic spectrum, between ultraviolet (shorter) and infrared (longer). Each visible wavelength appears to us as a colour; the class slide gives approximate values:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Colour</th><th>Violet</th><th>Indigo</th><th>Blue</th><th>Green</th><th>Yellow</th><th>Orange</th><th>Red</th></tr></thead>
<tbody>
<tr><td>Approx. wavelength</td><td>400 nm</td><td>425 nm</td><td>470 nm</td><td>550 nm</td><td>600 nm</td><td>630 nm</td><td>665 nm</td></tr>
<tr><td>Energy per photon</td><td colspan="7">Highest (violet) → lowest (red)</td></tr>
</tbody></table></div>
<p data-tier="likely">Light also behaves as a stream of particles called <span class="term">photons</span>, each carrying a fixed packet of energy. The <strong>shorter the wavelength, the more energy each photon carries</strong>, so a violet or blue photon carries more energy than a red one. A pigment molecule absorbs a whole photon or nothing at all, and it can only absorb photons whose energy matches the jump its electrons can make. That idea is the starting point for the light reactions in lesson 2.09.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>ROY G BIV</strong> lists the colours from longest wavelength (red, about 700 nm) to shortest (violet, about 400 nm). Red waves are long and "relaxed" (low energy); violet waves are short and "vigorous" (high energy).</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>A longer wavelength does <strong>not</strong> mean more energy. It's the opposite: energy goes <strong>down</strong> as wavelength goes <strong>up</strong>.</p></div>
<p data-tier="extra">Why visible light? Ultraviolet photons carry enough energy to break bonds and damage DNA; infrared photons carry too little to lift electrons in pigments and mostly just warm things up. Visible light is the useful middle. (In physics, E = hc/λ: photon energy is inversely proportional to wavelength.)</p>

<h3 data-tier="essential">Absorbed, transmitted or reflected: why plants are green</h3>
<p>When light hits an object, three things can happen to it:</p>
<ul>
<li><strong>Absorption</strong>: the light's energy is taken in by the object's molecules. Only absorbed light can do work, such as driving photosynthesis.</li>
<li><strong>Transmission</strong>: the light passes through the object.</li>
<li><strong>Reflection</strong>: the light bounces off the object.</li>
</ul>
<p>The colour you see is whatever light reaches your eyes, which means the light that is <strong>reflected or transmitted</strong>, not the light that is absorbed. A red apple absorbs most wavelengths and reflects red. A white shirt reflects all wavelengths. A black shirt absorbs all of them, which is why it gets hot in the sun.</p>
<p>A <span class="term">pigment</span> is a compound that absorbs certain wavelengths of visible light while reflecting others. Plants contain several pigments, and the main one, chlorophyll, absorbs <strong>red and blue-violet</strong> light strongly but absorbs <strong>green</strong> light poorly. As the slide puts it, plants absorb all colours of light coming from the sun <strong>except green</strong>. The green light is reflected (that's what you see when you look at a leaf) and transmitted (that's why sunlight shining through a leaf looks green).</p>
<div class="callout key"><p class="callout-title">On the test</p><p><strong>Why are plants green?</strong> Chlorophyll absorbs mainly red and blue-violet wavelengths and absorbs very little green. The green light is reflected and transmitted, so that's the colour that reaches our eyes. The green light the leaf doesn't absorb also does almost nothing for photosynthesis.</p></div>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The class notes define a pigment as absorbing "certain wavelengths of visible <em>green</em> light." The slide's definition is "certain wavelengths of <strong>visible light</strong>." The word "green" doesn't belong there: green is the colour chlorophyll mostly <em>doesn't</em> absorb.</p></div>
<p data-tier="extra">Strictly, a real leaf does absorb some green light, just much less efficiently than red and blue. "Plants absorb every colour except green" is the simplified slide version to use on the test.</p>

<h3 data-tier="essential">The absorption spectrum: chlorophyll a and b</h3>
<p>To see exactly which wavelengths a pigment absorbs, scientists plot an <span class="term">absorption spectrum</span>: a graph that shows the electromagnetic radiation absorbed by a substance at different wavelengths. Wavelength goes on the x-axis and the amount absorbed on the y-axis. <strong>Peaks</strong> are wavelengths the pigment absorbs strongly. <strong>Valleys</strong> are wavelengths it reflects or transmits, which tells you its colour.</p>
<p>Chloroplasts contain two types of chlorophyll:</p>
<ul>
<li><span class="term">Chlorophyll a</span>: the <strong>primary photosynthetic pigment</strong>. It is the pigment in the reaction centres of the photosystems (lesson 2.09), and the only one that can turn absorbed light energy directly into chemical energy by giving away an excited electron. It is blue-green.</li>
<li><span class="term">Chlorophyll b</span>: an <strong>accessory pigment</strong> that absorbs photons chlorophyll a absorbs poorly. It passes the energy it absorbs on to chlorophyll a. It is yellow-green.</li>
</ul>

<figure class="diagram">
<svg viewBox="0 0 640 380" role="img" aria-labelledby="p208c-t p208c-d">
<title id="p208c-t">Approximate absorption spectra of chlorophyll a, chlorophyll b and carotenoids</title>
<desc id="p208c-d">A graph of relative absorption against wavelength from 400 to 700 nanometres. Chlorophyll a has a tall peak near 430 nm and a second peak near 662 nm. Chlorophyll b has its tallest peak near 453 nm and a smaller one near 642 nm. Carotenoids absorb from 400 to about 520 nm with peaks near 450 and 480 nm. All three absorb very little between about 500 and 600 nm, the green and yellow part of the spectrum. The curves are approximate.</desc>
<line x1="80" y1="300" x2="80" y2="64" style="stroke:var(--ink);stroke-width:1.5"/>
<line x1="80" y1="300" x2="592" y2="300" style="stroke:var(--ink);stroke-width:1.5"/>
<rect x="80" y="306" width="85" height="14" style="fill:var(--krebs)"/>
<rect x="165" y="306" width="77" height="14" style="fill:var(--etc)"/>
<rect x="242" y="306" width="127" height="14" style="fill:var(--leaf)"/>
<rect x="369" y="306" width="85" height="14" style="fill:var(--glyco)"/>
<rect x="454" y="306" width="136" height="14" style="fill:var(--proton)"/>
<polyline points="80,238.4 114,207.6 148,179 165,168 182,179 199,176.8 216,172.4 233,201 250,234 267,269.2 284,289 301,297.8 318,300" style="fill:none;stroke:var(--glyco);stroke-width:2.5;stroke-dasharray:2 4;stroke-linecap:round"/>
<polyline points="80,273.6 114,245 131,216.4 148,163.6 161.6,102 170.1,80 178.6,97.6 190.5,150.4 199,190 216,245 233,273.6 250,284.6 335,293.4 386,289 420,282.4 454,260.4 471,238.4 488,207.6 496.5,205.4 505,223 513.5,251.6 522,273.6 539,289 556,295.6 590,297.8" style="fill:none;stroke:var(--link);stroke-width:2.5;stroke-dasharray:7 4;stroke-linejoin:round"/>
<polyline points="80,207.6 97,172.4 114,124 122.5,102 131,91 139.5,106.4 148,146 165,216.4 182,256 199,273.6 216,282.4 250,289 284,291.2 335,291.2 386,284.6 420,278 454,267 471,256 488,234 505,194.4 513.5,163.6 522,137.2 530.5,141.6 539,172.4 547.5,212 556,245 573,282.4 590,293.4" style="fill:none;stroke:var(--leaf);stroke-width:3;stroke-linejoin:round"/>
<g style="stroke:var(--ink);stroke-width:1">
<line x1="80" y1="320" x2="80" y2="326"/><line x1="165" y1="320" x2="165" y2="326"/><line x1="250" y1="320" x2="250" y2="326"/><line x1="335" y1="320" x2="335" y2="326"/><line x1="420" y1="320" x2="420" y2="326"/><line x1="505" y1="320" x2="505" y2="326"/><line x1="590" y1="320" x2="590" y2="326"/>
</g>
<g style="fill:var(--ink);font-size:12px" text-anchor="middle">
<text x="80" y="340">400</text><text x="165" y="340">450</text><text x="250" y="340">500</text><text x="335" y="340">550</text><text x="420" y="340">600</text><text x="505" y="340">650</text><text x="590" y="340">700</text>
</g>
<text x="335" y="364" text-anchor="middle" style="fill:var(--ink);font-size:13px">Wavelength (nm)</text>
<text x="40" y="190" text-anchor="middle" transform="rotate(-90 40 190)" style="fill:var(--ink);font-size:13px">Relative absorption</text>
<text x="74" y="84" text-anchor="end" style="fill:var(--ink-2);font-size:12px">high</text>
<text x="74" y="300" text-anchor="end" style="fill:var(--ink-2);font-size:12px">low</text>
<line x1="300" y1="92" x2="336" y2="92" style="stroke:var(--leaf);stroke-width:3"/>
<line x1="300" y1="116" x2="336" y2="116" style="stroke:var(--link);stroke-width:2.5;stroke-dasharray:7 4"/>
<line x1="300" y1="140" x2="336" y2="140" style="stroke:var(--glyco);stroke-width:2.5;stroke-dasharray:2 4;stroke-linecap:round"/>
<g style="fill:var(--ink);font-size:13px">
<text x="344" y="96">Chlorophyll a</text>
<text x="344" y="120">Chlorophyll b</text>
<text x="344" y="144">Carotenoids</text>
</g>
<g style="fill:var(--ink-2);font-size:12px">
<text x="126" y="84" text-anchor="end">≈430</text>
<text x="176" y="72">≈453</text>
<text x="530" y="130">≈662</text>
<text x="486" y="198" text-anchor="end">≈642</text>
<text x="370" y="236" text-anchor="middle">Green and yellow: little absorbed</text>
<text x="370" y="252" text-anchor="middle">(reflected or transmitted)</text>
</g>
</svg>
<figcaption>Approximate absorption spectra (peak positions in nm; real heights and positions shift a little with the solvent and the source). The strip under the axis shows the colour of each wavelength. Chlorophyll a absorbs blue-violet and red; chlorophyll b and the carotenoids absorb wavelengths beside and between chlorophyll a's peaks.</figcaption>
</figure>

<p>Read the graph from left to right. Chlorophyll a absorbs strongly at about <strong>430 nm</strong> (blue-violet) and about <strong>660 nm</strong> (red). Chlorophyll b's peaks sit just inside those, at about <strong>450 nm</strong> (blue) and <strong>640 nm</strong> (orange-red), so chlorophyll b catches wavelengths chlorophyll a misses. Both absorb very little between about 500 and 600 nm, which is the green-yellow region: that valley is why leaves are green.</p>
<div class="callout key"><p class="callout-title">On the test</p><ul><li>Define <strong>absorption spectrum</strong> and read one: peaks = absorbed, valleys = reflected or transmitted.</li><li>Chlorophyll a = <strong>primary</strong> pigment; chlorophyll b = <strong>accessory</strong> pigment that absorbs photons chlorophyll a absorbs poorly.</li><li>Both chlorophylls absorb <strong>red and blue-violet</strong> light and reflect <strong>green</strong>.</li></ul></div>
<h4 data-tier="likely">What a chlorophyll molecule looks like</h4>
<p>A chlorophyll molecule has two parts. Its "head" is a flat ring structure (a porphyrin ring) with a <strong>magnesium ion (Mg<sup>2+</sup>)</strong> at its centre; this ring is the part that absorbs light. Its long hydrocarbon "tail" is nonpolar and anchors the molecule in the thylakoid membrane. Chlorophyll a and chlorophyll b are almost identical. The only difference is one small group on the ring: chlorophyll a has a <strong>methyl group (–CH<sub>3</sub>)</strong> where chlorophyll b has an <strong>aldehyde group (–CHO)</strong>. That tiny change shifts which wavelengths each one absorbs, and it also changes how far each one travels in the chromatography lab (see below).</p>
<p data-tier="extra">An <em>action spectrum</em> plots the <strong>rate of photosynthesis</strong> against wavelength. It closely matches the combined absorption spectra of all the pigments, showing that light absorbed by accessory pigments really does drive photosynthesis. (Plants short of magnesium can't make enough chlorophyll, and their leaves turn yellow.)</p>

<h3 data-tier="essential">Accessory pigments</h3>
<p>An <span class="term">accessory pigment</span> is any pigment other than chlorophyll a that absorbs light and passes the energy on toward chlorophyll a. Chlorophyll b is one. The "Other Accessory Pigments" slide lists three more groups:</p>
<ul>
<li><span class="term">Carotenoids</span> (for example, <strong>β-carotene</strong>): create the <strong>yellow-orange</strong> colours of leaves in the fall. β-carotene is a <strong>precursor of vitamin A</strong>, which is helpful for <strong>low-light vision</strong>.</li>
<li><span class="term">Xanthophylls</span>: create <strong>yellow</strong> leaves in the fall.</li>
<li><span class="term">Anthocyanins</span>: create <strong>red</strong> leaves in the fall.</li>
</ul>
<div class="table-wrap"><table class="data">
<thead><tr><th>Pigment</th><th>Colour you see</th><th>Absorbs mainly</th><th>Key point</th></tr></thead>
<tbody>
<tr><td><strong>Chlorophyll a</strong></td><td>Blue-green</td><td>Blue-violet and red</td><td>Primary pigment; in the reaction centres</td></tr>
<tr><td><strong>Chlorophyll b</strong></td><td>Yellow-green</td><td>Blue and orange-red</td><td>Accessory; fills gaps beside chlorophyll a's peaks</td></tr>
<tr><td><strong>Carotenoids</strong> (β-carotene)</td><td>Yellow-orange</td><td>Blue-violet and blue-green</td><td>Fall yellow-orange; precursor of vitamin A</td></tr>
<tr><td><strong>Xanthophylls</strong></td><td>Yellow</td><td>Blue-violet and blue-green</td><td>Fall yellow</td></tr>
<tr><td><strong>Anthocyanins</strong></td><td>Red (to purple)</td><td>Blue-green and green</td><td>Fall red; made in the fall</td></tr>
</tbody></table></div>
<p><strong>Why vitamin A?</strong> Your body can't make vitamin A from scratch, but it can split one β-carotene molecule (from carrots, sweet potatoes or leafy greens) into vitamin A. Vitamin A is converted into <em>retinal</em>, the light-absorbing part of the pigment in the rod cells of your retina. Rods are the cells you use to see in dim light, so a shortage of vitamin A causes night blindness. A plant pigment that helps a leaf catch light also helps you see in the dark.</p>
<p data-tier="likely"><strong>Why have so many pigments?</strong> Each pigment has a different absorption spectrum, so together they absorb a much wider range of wavelengths than chlorophyll a could alone. More of the sunlight's energy can be captured, which is especially useful in shade or in changing light. Carotenoids have a second job: in very bright light they absorb excess energy and neutralize harmful reactive oxygen molecules, protecting chlorophyll from damage (a role called <em>photoprotection</em>).</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Carot</strong>ene is the orange pigment in <strong>carrot</strong>s. <em>Xantho-</em> is Greek for yellow, so <strong>xantho</strong>phylls are the yellow ones. <em>Antho-</em> means flower and <em>cyan</em> means blue: <strong>antho</strong>cyanins colour flowers, berries and red cabbage red, purple and blue.</p></div>
<p data-tier="extra">"Carotenoid" is the family name: <strong>carotenes</strong> (like β-carotene) are pure hydrocarbons, while <strong>xanthophylls</strong> (like lutein) also contain oxygen, which matters in the chromatography lab. Anthocyanins are different again: they are dissolved in the vacuole, not the thylakoid membrane, and act more like a sunscreen than an energy collector. For the test, list them as the slide does.</p>

<h3 data-tier="likely">Why leaves change colour in the fall</h3>
<p>The class watched a short video on this ("Why Leaves Change Color"). The key idea is that most of the fall colours were in the leaf all summer, hidden behind the chlorophyll.</p>
<ol class="steps">
<li><p class="step-head">Summer: chlorophyll masks everything</p><p>Leaves are packed with chlorophyll, which is constantly broken down by light and constantly rebuilt. There is so much green that it hides the yellow and orange carotenoids and xanthophylls that are also there.</p></li>
<li><p class="step-head">Fall: chlorophyll production stops</p><p>Shorter days and cooler nights signal the tree to prepare for winter. It stops making chlorophyll, and the chlorophyll that's left breaks down and is <strong>not replaced</strong>. The tree reabsorbs valuable nutrients from it, such as nitrogen and magnesium, to reuse next spring.</p></li>
<li><p class="step-head">Yellow and orange are unmasked</p><p>Carotenoids and xanthophylls break down more slowly than chlorophyll, so as the green fades their <strong>yellow and orange</strong> colours show through.</p></li>
<li><p class="step-head">Red is newly made</p><p><strong>Anthocyanins</strong> are not present all summer. Many trees (maples, for example) make them in the fall from sugars trapped in the leaf, especially after sunny days and cool nights. That's why some autumns are much redder than others.</p></li>
</ol>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Don't say the leaf "makes yellow pigment in the fall." The yellow and orange pigments were there all along; they are <strong>unmasked</strong> when chlorophyll breaks down. Only the red anthocyanins are newly made in the fall.</p></div>

<h3 data-tier="likely">PAR: using the whole visible spectrum</h3>
<p><span class="term">Photosynthetically active radiation (PAR)</span> is the range of light that can drive photosynthesis, about 400 to 700 nm, which is almost exactly the visible spectrum. The class slide makes one point about it: <strong>light is absorbed from the entire visible spectrum when all pigments are combined.</strong> On the slide's graph, each pigment's curve covers only part of the spectrum, but the dashed line (the combined absorption of all of them) stays high across the whole range. No single pigment can do that, which is exactly why plants have accessory pigments.</p>
<p data-tier="extra">The slide's PAR graph also shows <em>phycoerythrin</em> and <em>phycocyanin</em>, pigments of red algae and cyanobacteria (not land plants). They absorb the green-yellow light chlorophyll misses, which helps underwater, where red light is filtered out.</p>

<h3 data-tier="likely">Lab: separating leaf pigments by chromatography</h3>
<p>In the lab "Leaf Pigment Extraction by Chromatography" you separated the pigments in a spinach leaf to see the accessory pigments that the green chlorophyll normally hides. The purpose: <strong>to analyse the pigments in a leaf through paper chromatography.</strong></p>
<h4>How paper chromatography works</h4>
<p>A line of pigment extract is applied about 1.5 cm from the bottom of the paper, and the bottom edge is placed in a solvent. The solvent soaks up the paper by <strong>capillary action</strong>, dissolves the pigments as it passes the line, and carries them upward. The pigments travel at <strong>different rates because they are not equally soluble</strong>: less soluble pigments move more slowly. This is called <em>developing a chromatogram</em>. The paper matters too. It is cellulose, covered in polar –OH groups, so it holds back polar pigments. A pigment that dissolves well in the solvent and is only weakly attracted to the paper travels the farthest.</p>
<h4>Method, with the reason for each step</h4>
<ol class="steps">
<li><p class="step-head">Pencil origin line, 1.5 cm up</p><p><strong>Pencil, not pen</strong>: ink would dissolve in the solvent and run up the paper, adding bands of its own.</p></li>
<li><p class="step-head">Grind a spinach leaf in 5 mL of acetone</p><p>Grinding breaks open the cells and chloroplasts so the pigments dissolve in the acetone.</p></li>
<li><p class="step-head">Apply a narrow, dark pigment line</p><p>Add extract along the line with a capillary tube, let it dry, and repeat 3 to 4 times. A dry, concentrated line gives sharp bands; adding more while it's wet makes it spread.</p></li>
<li><p class="step-head">Keep the pigment line about 1.0 cm above the solvent</p><p>Never immerse it, or the pigments dissolve into the solvent pool instead of climbing the paper. A petri dish over the beaker stops the solvent evaporating off the paper.</p></li>
<li><p class="step-head">Stop about 1.0 cm from the top and mark immediately</p><p>Mark the <strong>solvent front</strong> in pencil right away (it evaporates within seconds), then mark the top of each band.</p></li>
<li><p class="step-head">Measure in millimetres from the origin line</p><p>Measure to the top of each band and to the solvent front. Solvent waste goes into organic waste.</p></li>
</ol>
<h4>Calculating R<sub>f</sub></h4>
<p>Each pigment has an <span class="term">R<sub>f</sub> value</span> (retention factor): how fast it moves over the paper compared with the solvent. The pigment and the solvent move for the same time, so you can compare distances instead of speeds:</p>
<div class="eq">R<sub>f</sub> = distance travelled by the pigment from the origin ÷ distance travelled by the solvent from the origin</div>
<ul>
<li>Measure both distances <strong>from the origin line</strong>, not from the bottom of the paper.</li>
<li>R<sub>f</sub> has <strong>no units</strong> and is always <strong>between 0 and 1</strong>, because no pigment can outrun the solvent carrying it.</li>
<li>A <strong>larger R<sub>f</sub></strong> means the pigment is more soluble in the solvent and less attracted to the paper. Under the same conditions a pigment's R<sub>f</sub> stays about the same, so it can be used to identify the pigment.</li>
</ul>

<figure class="diagram">
<svg viewBox="0 0 640 400" role="img" aria-labelledby="p208e-t p208e-d">
<title id="p208e-t">A developed chromatogram with Rf measurements</title>
<desc id="p208e-d">A strip of chromatography paper standing in solvent. The origin pencil line is near the bottom. From the origin, the solvent front is 10.0 cm up. Four bands sit between them: carotene (yellow-orange) at 9.0 cm, Rf 0.90; xanthophyll (yellow) at 5.6 cm, Rf 0.56; chlorophyll a (blue-green) at 3.7 cm, Rf 0.37; and chlorophyll b (yellow-green) at 2.0 cm, Rf 0.20. Arrows show each distance measured from the origin to the top of each band.</desc>
<defs>
<marker id="p208e-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
</defs>
<text x="320" y="28" text-anchor="middle" style="fill:var(--ink);font-size:13px">Rf = distance moved by pigment ÷ distance moved by solvent front</text>
<rect x="90" y="350" width="120" height="30" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<rect x="120" y="56" width="60" height="310" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.5"/>
<rect x="121" y="351" width="58" height="14" style="fill:var(--link-soft)"/>
<rect x="126" y="105" width="48" height="9" rx="4" style="fill:var(--glyco)"/>
<rect x="126" y="190" width="48" height="9" rx="4" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<rect x="126" y="237.5" width="48" height="10" rx="4" style="fill:var(--leaf)"/>
<rect x="126" y="280" width="48" height="10" rx="4" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<g style="stroke:var(--ink-2);stroke-width:1;stroke-dasharray:4 3;fill:none">
<line x1="120" y1="80" x2="300" y2="80"/><line x1="174" y1="105" x2="300" y2="105"/><line x1="174" y1="190" x2="300" y2="190"/><line x1="174" y1="237.5" x2="300" y2="237.5"/><line x1="174" y1="280" x2="300" y2="280"/>
</g>
<line x1="120" y1="330" x2="300" y2="330" style="stroke:var(--ink);stroke-width:1.5"/>
<g style="stroke:var(--ink-2);stroke-width:1.5">
<line x1="196" y1="330" x2="196" y2="82" marker-end="url(#p208e-ar)"/>
<line x1="214" y1="330" x2="214" y2="107" marker-end="url(#p208e-ar)"/>
<line x1="232" y1="330" x2="232" y2="192" marker-end="url(#p208e-ar)"/>
<line x1="250" y1="330" x2="250" y2="240" marker-end="url(#p208e-ar)"/>
<line x1="268" y1="330" x2="268" y2="282" marker-end="url(#p208e-ar)"/>
</g>
<g style="fill:var(--ink);font-size:13px">
<text x="306" y="84">Solvent front: 10.0 cm</text>
<text x="306" y="109">Carotene: 9.0 cm → R<tspan dy="3" style="font-size:12px">f</tspan><tspan dy="-3"> = 9.0 ÷ 10.0 = 0.90</tspan></text>
<text x="306" y="194">Xanthophyll: 5.6 cm → R<tspan dy="3" style="font-size:12px">f</tspan><tspan dy="-3"> = 0.56</tspan></text>
<text x="306" y="242">Chlorophyll a: 3.7 cm → R<tspan dy="3" style="font-size:12px">f</tspan><tspan dy="-3"> = 0.37</tspan></text>
<text x="306" y="284">Chlorophyll b: 2.0 cm → R<tspan dy="3" style="font-size:12px">f</tspan><tspan dy="-3"> = 0.20</tspan></text>
<text x="306" y="334">Origin (pencil line)</text>
</g>
<g style="fill:var(--ink-2);font-size:12px">
<text x="306" y="125">yellow to yellow-orange · most soluble</text>
<text x="306" y="210">yellow</text>
<text x="306" y="258">bright green to blue-green</text>
<text x="306" y="300">yellow-green to olive · least soluble</text>
<text x="114" y="200" text-anchor="end">Chromatography</text>
<text x="114" y="215" text-anchor="end">paper</text>
<text x="84" y="370" text-anchor="end">Solvent</text>
</g>
</svg>
<figcaption>The worked example from the last page of the lab handout. Every distance is measured from the origin line to the top of the band (or to the solvent front). The colours of the bands are approximate.</figcaption>
</figure>

<p><strong>Worked example.</strong> In the handout's example, the solvent front is 10.0 cm from the origin. Divide each pigment's distance by 10.0 cm:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Band (top to bottom)</th><th>Pigment</th><th>Colour</th><th>Distance from origin</th><th>R<sub>f</sub></th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>Carotene</strong></td><td>Yellow to yellow-orange</td><td>9.0 cm</td><td>9.0 ÷ 10.0 = <strong>0.90</strong></td></tr>
<tr><td>2</td><td><strong>Xanthophyll</strong></td><td>Yellow</td><td>5.6 cm</td><td>5.6 ÷ 10.0 = <strong>0.56</strong></td></tr>
<tr><td>3</td><td><strong>Chlorophyll a</strong></td><td>Bright green to blue-green</td><td>3.7 cm</td><td>3.7 ÷ 10.0 = <strong>0.37</strong></td></tr>
<tr><td>4</td><td><strong>Chlorophyll b</strong></td><td>Yellow-green to olive green</td><td>2.0 cm</td><td>2.0 ÷ 10.0 = <strong>0.20</strong></td></tr>
</tbody></table></div>
<p>Your own numbers will differ (for example, the solvent might travel 85 mm and a band 31 mm, giving R<sub>f</sub> = 31 ÷ 85 = 0.36), but the <strong>order</strong> of the bands should be the same.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><ul>
<li>Measuring from the bottom edge of the paper instead of the origin line, or to the middle of a band instead of its <strong>top</strong>.</li>
<li>Not marking the solvent front right away, so it evaporates.</li>
<li>Giving R<sub>f</sub> units, or getting a value above 1.</li>
<li>Memorizing R<sub>f</sub> numbers. They change with the solvent, paper and temperature. The table on the last page of the handout comes from a different setup, so its values differ (it even places chlorophyll a below chlorophyll b). Learn the band <strong>order</strong> and the reasons for it.</li>
</ul></div>
<h4>Why the bands come out in this order</h4>
<p>The order follows <strong>polarity</strong>. The solvent is much less polar than the paper, and "like dissolves like": nonpolar pigments dissolve well and move far, while polar pigments are held by the polar cellulose and lag behind.</p>
<ol class="steps">
<li><p class="step-head">Carotene: top (highest R<sub>f</sub>)</p><p>A pure hydrocarbon (only C and H): the <strong>least polar</strong> pigment, most soluble in the solvent and least attracted to the paper.</p></li>
<li><p class="step-head">Xanthophyll: second</p><p>A carotenoid with oxygen atoms (–OH groups), so it is a little more polar than carotene.</p></li>
<li><p class="step-head">Chlorophyll a: third</p><p>Its large ring contains nitrogen, oxygen and a magnesium ion, making it more polar than the carotenoids.</p></li>
<li><p class="step-head">Chlorophyll b: bottom (lowest R<sub>f</sub>)</p><p>The most polar of the four, because of its aldehyde group.</p></li>
</ol>
<h4>Chlorophyll a vs chlorophyll b: one group changes everything</h4>
<p>Chlorophyll a has a <strong>methyl group (–CH<sub>3</sub>)</strong> where chlorophyll b has an <strong>aldehyde group (–CHO)</strong>. The aldehyde's C=O bond is polar (oxygen is much more electronegative than carbon), while a methyl group is nonpolar. So <strong>chlorophyll b is more polar than chlorophyll a</strong>, and that slows it down in two ways:</p>
<ul>
<li>It is <strong>less soluble</strong> in the relatively nonpolar solvent, so the solvent carries it less well.</li>
<li>It is <strong>more strongly attracted to the polar paper</strong> (its C=O can form hydrogen bonds with cellulose's –OH groups), so the paper holds it back more.</li>
</ul>
<p>Result: chlorophyll b travels a shorter distance and has a <strong>lower R<sub>f</sub></strong> than chlorophyll a.</p>
<div class="callout key"><p class="callout-title">On the test</p><ul><li>Order from the top: <strong>carotene → xanthophyll → chlorophyll a → chlorophyll b</strong>.</li><li>R<sub>f</sub> = pigment distance ÷ solvent distance, both measured from the origin.</li><li>Chlorophyll b has –CHO where chlorophyll a has –CH<sub>3</sub>: more polar, less soluble in the solvent, more attracted to the paper, so a lower R<sub>f</sub>.</li></ul></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>From the top down: <strong>"Carrots eXcite A Bunny"</strong>: Carotene, Xanthophyll, chlorophyll A, chlorophyll B. The order also runs from least polar (top) to most polar (bottom).</p></div>

<h3 data-tier="essential">Check your understanding</h3>
<p>The first five questions are the discussion questions from the chromatography lab handout. Try each one before opening the answer.</p>
<details class="check" data-tier="likely"><summary>1. What wavelengths are absorbed and reflected by xanthophyll?</summary><div class="ans"><p>Xanthophylls absorb mainly <strong>blue-violet and blue-green</strong> light (roughly 400 to 500 nm). They reflect or transmit the longer wavelengths (green, yellow, orange, red), and that mix looks <strong>yellow</strong>.</p></div></details>
<details class="check" data-tier="likely"><summary>2. What adaptive purpose do different coloured pigments serve for a plant? Why is it beneficial for a plant to contain different pigments?</summary><div class="ans"><p>Each pigment has a different absorption spectrum, so together they absorb a much <strong>wider range of wavelengths</strong> than chlorophyll a alone (nearly the whole visible spectrum: PAR). Accessory pigments pass their energy to chlorophyll a, so more of the available light drives photosynthesis, which helps in shade or changing light. Carotenoids also <strong>protect</strong> chlorophyll from damage in very bright light.</p></div></details>
<details class="check" data-tier="likely"><summary>3. Why do some pigments move farther up the chromatogram than others?</summary><div class="ans"><p>Pigments differ in <strong>solubility</strong> in the solvent and in <strong>attraction to the paper</strong>, both mainly because of polarity. A very soluble, weakly attracted pigment (carotene) is carried far; a less soluble pigment more strongly attracted to the polar cellulose (chlorophyll b) stays low.</p></div></details>
<details class="check" data-tier="likely"><summary>4. The chromatography solvent is acetone. Based on its structure, which pigments would you expect to move the furthest?</summary><div class="ans"><p>Acetone (CH<sub>3</sub>COCH<sub>3</sub>) has one polar C=O group but two nonpolar methyl groups, so it is only moderately polar, far less polar than water or the cellulose paper, and it dissolves nonpolar molecules well. The <strong>least polar pigments</strong> should move furthest: <strong>carotenes</strong> (pure hydrocarbons), then xanthophylls. The chlorophylls, especially b, move least.</p></div></details>
<details class="check" data-tier="likely"><summary>5. What is the structural difference between chlorophyll a and chlorophyll b? Explain why this difference corresponds to a difference in R<sub>f</sub> values.</summary><div class="ans"><p>Chlorophyll a has a <strong>methyl group (–CH<sub>3</sub>)</strong> where chlorophyll b has an <strong>aldehyde group (–CHO)</strong>. The aldehyde's C=O is polar, so chlorophyll b is more polar than chlorophyll a. It is therefore less soluble in the relatively nonpolar solvent and more strongly attracted to (hydrogen bonds more with) the polar paper. It travels a shorter distance from the origin, so its R<sub>f</sub> is <strong>lower</strong> than chlorophyll a's.</p></div></details>
<details class="check" data-tier="likely"><summary>6. On a chromatogram, the solvent front is 84 mm from the origin and a blue-green band is 31 mm from the origin. Calculate its R<sub>f</sub> and identify the pigment.</summary><div class="ans"><p>R<sub>f</sub> = 31 mm ÷ 84 mm = <strong>0.37</strong> (no units). A blue-green band in the third position is <strong>chlorophyll a</strong>.</p></div></details>
<details class="check" data-tier="likely"><summary>7. A student draws the origin line in ballpoint pen and places the strip so the pigment line is under the surface of the solvent. Predict two problems.</summary><div class="ans"><p>(1) The pen ink dissolves in the solvent and travels up the paper, adding extra coloured streaks that could be mistaken for pigments. (2) With the pigment line under the solvent, the pigments dissolve into the solvent pool instead of being carried up the paper, so few or no bands form. The handout says to use pencil and to keep the pigment line about 1.0 cm above the solvent.</p></div></details>
<details class="check"><summary>8. In the equation for photosynthesis, which substance is oxidized and which is reduced? Where do the electrons go?</summary><div class="ans"><p><strong>Water is oxidized</strong>: it loses electrons and becomes O<sub>2</sub>. <strong>CO<sub>2</sub> is reduced</strong>: it gains electrons (as hydrogen) and becomes glucose. The electrons travel from water to CO<sub>2</sub>, boosted by light energy and carried by NADPH, with ATP supplying the energy.</p></div></details>
<details class="check"><summary>9. Which layer of a dicot leaf has the most chloroplasts, and why does its position make sense?</summary><div class="ans"><p>The <strong>palisade mesophyll</strong>. It lies just under the transparent upper epidermis, where light is brightest, and its tall, tightly packed cells fit many chloroplasts into the best-lit part of the leaf. The spongy layer below gets less light and is specialized for gas exchange.</p></div></details>
<details class="check" data-tier="likely"><summary>10. A plant is grown under pure green light of the same brightness as a normal lamp. Predict its growth and explain.</summary><div class="ans"><p>It would grow very slowly (and may eventually die). Chlorophylls absorb green light poorly; most of it is reflected or transmitted, so little energy reaches the reaction centres. Fewer ATP and NADPH are made, the Calvin cycle fixes less CO<sub>2</sub>, and the plant makes too little sugar for growth.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
<li>Photosynthesis makes sugar from sunlight; respiration uses that sugar to make ATP. Plants do <strong>both</strong>.</li>
<li>Photosynthetic tissue = <strong>mesophyll</strong> (parenchyma). Dicots: <strong>palisade</strong> (tight columns, most chloroplasts) + <strong>spongy</strong> (loose, air spaces). Monocots (vertical leaves): spongy only.</li>
<li>Gases pass through <strong>stomata</strong> (opened and closed by <strong>guard cells</strong>); water arrives through the xylem.</li>
<li><strong>Chloroplast</strong> (know how to label it): double membrane (outer + inner); <strong>thylakoid</strong> = flattened membrane sac; <strong>granum</strong> = stack of thylakoids; <strong>stroma</strong> = fluid around the grana; <strong>thylakoid lumen</strong> = space inside a thylakoid.</li>
<li><strong>6 CO<sub>2</sub> + 6 H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub></strong>. CO<sub>2</sub> is <strong>reduced</strong>; H<sub>2</sub>O is <strong>oxidized</strong> (it supplies the electrons, and the O<sub>2</sub> comes from it); light supplies the energy, as <strong>ATP and NADPH</strong>.</li>
<li>Photosynthesis is <strong>anabolic</strong> and <strong>endergonic</strong> (ΔG ≈ +2870 kJ/mol glucose), the reverse of respiration.</li>
<li>Two stages: <strong>light reactions</strong> in the <strong>thylakoid</strong> (make ATP, NADPH, O<sub>2</sub>) and the <strong>Calvin cycle</strong> in the <strong>stroma</strong> (uses ATP and NADPH to fix CO<sub>2</sub> into sugar).</li>
<li>Visible light: <strong>380–750 nm</strong>; shorter wavelength = more energy. Light is <strong>absorbed, transmitted or reflected</strong>; only absorbed light does work.</li>
<li>A <strong>pigment</strong> absorbs certain wavelengths and reflects others. Chlorophyll absorbs red and blue-violet and reflects green, so <strong>plants look green</strong>.</li>
<li><strong>Absorption spectrum</strong> = absorption vs wavelength. <strong>Chlorophyll a</strong> = primary pigment; <strong>chlorophyll b</strong> = accessory pigment that absorbs photons chlorophyll a absorbs poorly.</li>
<li>Other accessory pigments: <strong>carotenoids</strong> (β-carotene; yellow-orange; vitamin A precursor for low-light vision), <strong>xanthophylls</strong> (yellow), <strong>anthocyanins</strong> (red).</li>
<li><strong>Fall colours</strong>: chlorophyll breaks down and isn't replaced, unmasking carotenoids and xanthophylls; anthocyanins are newly made.</li>
<li><strong>PAR</strong>: all pigments combined absorb light across the entire visible spectrum.</li>
<li><strong>Chromatography</strong>: R<sub>f</sub> = pigment distance ÷ solvent distance (from the origin; no units; 0 to 1). Order from the top: <strong>carotene, xanthophyll, chlorophyll a, chlorophyll b</strong>. Chlorophyll b's –CHO (vs a's –CH<sub>3</sub>) makes it more polar, giving it the lowest R<sub>f</sub>.</li>
</ul>
`
});

/* ===================================================================
   2.09 Light Reactions
   =================================================================== */
window.LESSONS.push({
  id: "2.09",
  title: "Light Reactions",
  stage: "light",
  where: "Thylakoid membrane",
  summary: "In the thylakoid membranes, photosystems II and I absorb light and boost electrons taken from water through an electron transport chain to NADP+, making NADPH. The flow pumps H+ into the thylakoid lumen, and H+ flowing back through ATP synthase makes ATP by photophosphorylation; water splitting releases O2. Cyclic flow through photosystem I alone makes extra ATP for the Calvin cycle.",
  objectives: [
    "State the goal of the light reactions and list their inputs (light, H2O, ADP + Pi, NADP+) and outputs (O2, ATP, NADPH).",
    "Describe a photosystem (antenna complex and reaction centre), name P680 and P700, and explain why photosystem II acts before photosystem I.",
    "Explain excitation of electrons, why isolated chlorophyll fluoresces, and the role of the primary electron acceptor.",
    "Describe non-cyclic electron flow step by step: PSII, plastoquinone, cytochrome b6-f, plastocyanin, PSI, ferredoxin and NADP+ reductase.",
    "Explain photolysis by the Z protein and state what happens to the electrons, protons and oxygen from water.",
    "Explain how the H+ gradient in the thylakoid lumen forms and how chemiosmosis through ATP synthase makes ATP (1 ATP per 4 H+, class value).",
    "Interpret the Z scheme and explain why two photosystems are needed.",
    "Describe cyclic photophosphorylation, its products and why the Calvin cycle needs it, and compare the light reactions with the mitochondrial ETC."
  ],
  html: `
<h3 data-tier="essential">The goal: turning light into ATP and NADPH</h3>
<p>Lesson 2.08 split photosynthesis into two stages. This lesson covers the first: the <span class="term">light reactions</span>, which happen in the <strong>thylakoids</strong> (on and across the thylakoid membranes). The second stage, the Calvin cycle, happens in the <strong>stroma</strong> and is lesson 2.10.</p>
<p>The class slide states the main goal in one line: <strong>capturing light energy to create chemical energy, ATP and NADPH</strong>. <span class="term">NADPH</span> is the <strong>high-energy electron carrier in plants</strong>, the photosynthesis counterpart of NADH. Light energy can't be stored or carried around a cell, so the light reactions convert it into these two carriers, which the Calvin cycle then spends to build sugar.</p>
<p>The class overview diagram shows the whole chloroplast as a two-part machine. Light and water go into the light reactions, and O<sub>2</sub> comes out. ATP and NADPH pass from the light reactions to the Calvin cycle, which takes in CO<sub>2</sub> and releases sugar. ADP, P<sub>i</sub> and NADP<sup>+</sup> return from the Calvin cycle to be recharged.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Light reactions</th><th>In</th><th>Out</th></tr></thead>
<tbody>
<tr><td>Energy</td><td>Light (photons)</td><td>Chemical energy in ATP and NADPH</td></tr>
<tr><td>From outside the chloroplast</td><td>H<sub>2</sub>O (from the roots, through the xylem)</td><td>O<sub>2</sub> (a by-product; leaves through the stomata)</td></tr>
<tr><td>From / to the Calvin cycle</td><td>ADP + P<sub>i</sub>, NADP<sup>+</sup></td><td>ATP, NADPH</td></tr>
</tbody></table></div>
<div class="tally"><span class="chip o2">H<sub>2</sub>O in → O<sub>2</sub> out</span><span class="chip atp">ATP</span><span class="chip nadph">NADPH</span></div>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The class notes say "H<sub>2</sub>O in, O<sub>2</sub> in." It should be <strong>H<sub>2</sub>O in, O<sub>2</sub> out</strong>. Oxygen is not used by the light reactions; it is <strong>released</strong> as a by-product when water is split.</p></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The O<sub>2</sub> comes from the <strong>water</strong>, <strong>not</strong> from the CO<sub>2</sub>. CO<sub>2</sub> isn't used in the light reactions at all; it goes into the Calvin cycle.</p></div>
<p data-tier="extra">The ATP made by the light reactions is used mainly inside the chloroplast, by the Calvin cycle. The rest of a plant cell (and the plant's roots, which never see light) gets its ATP from cellular respiration, in mitochondria, just like your cells do.</p>

<h3 data-tier="essential">Photosystems: antenna complex and reaction centre</h3>
<p>Light is captured by <span class="term">photosystems</span>, large protein–pigment complexes. From the slides:</p>
<ul>
<li>Photosystems are <strong>embedded in the thylakoid membrane</strong>.</li>
<li>They contain <strong>chlorophyll and accessory pigments</strong>.</li>
<li>Each consists of an <strong>antenna complex</strong> and a <strong>reaction centre</strong>.</li>
</ul>
<p>The two parts have different jobs:</p>
<ul>
<li><span class="term">Antenna complex</span>: <strong>absorbs a photon and transfers the energy to the reaction centre.</strong> It is made of a few hundred pigment molecules (chlorophyll a, chlorophyll b and carotenoids) held in place by proteins. When any one of them absorbs a photon, the <em>energy</em> (not an electron) hops from pigment to pigment until it reaches the reaction centre. The accessory pigments absorb light and transfer the energy to chlorophyll a.</li>
<li><span class="term">Reaction centre</span>: here, <strong>electrons in chlorophyll a absorb the energy and begin photosynthesis.</strong> The reaction centre holds a special pair of chlorophyll a molecules and the <strong>primary electron acceptor</strong>. This is the only place where an electron actually leaves a chlorophyll.</li>
</ul>

<figure class="diagram">
<svg viewBox="0 0 640 320" role="img" aria-labelledby="p209a-t p209a-d">
<title id="p209a-t">A photosystem: antenna complex and reaction centre</title>
<desc id="p209a-d">A photosystem sits in the thylakoid membrane, with the stroma above and the thylakoid lumen below. A photon strikes one pigment molecule in the antenna complex. The energy is passed from pigment molecule to pigment molecule until it reaches a special pair of chlorophyll a molecules in the reaction centre. An excited electron then leaves the special pair and is captured by the primary electron acceptor.</desc>
<defs>
<marker id="p209a-l" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--glyco)"/></marker>
<marker id="p209a-e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--etc)"/></marker>
</defs>
<rect x="0" y="100" width="640" height="100" style="fill:var(--surface-2)"/>
<line x1="0" y1="100" x2="640" y2="100" style="stroke:var(--ink-2);stroke-width:1.5"/>
<line x1="0" y1="200" x2="640" y2="200" style="stroke:var(--ink-2);stroke-width:1.5"/>
<text x="628" y="22" text-anchor="end" style="fill:var(--ink);font-size:14px;font-weight:700">STROMA</text>
<text x="628" y="308" text-anchor="end" style="fill:var(--ink);font-size:14px;font-weight:700">THYLAKOID LUMEN</text>
<text x="12" y="192" style="fill:var(--ink-2);font-size:12px">Thylakoid membrane</text>
<rect x="170" y="80" width="300" height="140" rx="30" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:2"/>
<rect x="285" y="95" width="70" height="110" rx="10" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2"/>
<rect x="300" y="104" width="40" height="20" rx="4" style="fill:var(--surface);stroke:var(--etc);stroke-width:2"/>
<g style="fill:var(--leaf)">
<circle cx="200" cy="120" r="9"/><circle cx="235" cy="112" r="9"/><circle cx="262" cy="135" r="9"/><circle cx="195" cy="160" r="9"/><circle cx="230" cy="150" r="9"/><circle cx="260" cy="175" r="9"/><circle cx="205" cy="195" r="9"/>
<circle cx="380" cy="130" r="9"/><circle cx="410" cy="115" r="9"/><circle cx="440" cy="135" r="9"/><circle cx="385" cy="170" r="9"/><circle cx="420" cy="160" r="9"/><circle cx="448" cy="180" r="9"/><circle cx="410" cy="195" r="9"/>
<circle cx="308" cy="178" r="10"/><circle cx="332" cy="178" r="10"/>
</g>
<path d="M130,30 L150,48 L140,56 L162,72 L152,80 L176,98 L192,112" style="fill:none;stroke:var(--glyco);stroke-width:2.5" marker-end="url(#p209a-l)"/>
<g style="fill:none;stroke:var(--glyco);stroke-width:2">
<path d="M205,128 Q214,140 222,145" marker-end="url(#p209a-l)"/>
<path d="M238,156 Q248,166 252,170" marker-end="url(#p209a-l)"/>
<path d="M270,177 Q284,180 296,179" marker-end="url(#p209a-l)"/>
</g>
<line x1="320" y1="166" x2="320" y2="127" style="stroke:var(--etc);stroke-width:2.5" marker-end="url(#p209a-e)"/>
<text x="328" y="152" style="fill:var(--etc);font-size:12px">e⁻</text>
<g style="stroke:var(--ink-2);stroke-width:1;fill:none">
<line x1="340" y1="114" x2="484" y2="66"/><line x1="450" y1="135" x2="484" y2="138"/><line x1="355" y1="200" x2="484" y2="226"/><line x1="300" y1="184" x2="154" y2="240"/><line x1="154" y1="136" x2="214" y2="137"/>
</g>
<g style="fill:var(--ink);font-size:13px">
<text x="122" y="26" text-anchor="end">Photon</text>
<text x="488" y="62">Primary electron</text>
<text x="488" y="78">acceptor</text>
<text x="488" y="142" style="font-weight:700">Antenna complex</text>
<text x="488" y="230" style="font-weight:700">Reaction centre</text>
<text x="150" y="240" text-anchor="end">Special pair of</text>
<text x="150" y="256" text-anchor="end">chlorophyll a</text>
<text x="150" y="132" text-anchor="end">Energy passed</text>
<text x="150" y="148" text-anchor="end">pigment to pigment</text>
</g>
<g style="fill:var(--ink-2);font-size:12px">
<text x="488" y="158">(pigment molecules)</text>
<text x="150" y="272" text-anchor="end">(P680 or P700)</text>
</g>
</svg>
<figcaption>A photosystem, based on the class slide. All the green pigment molecules on both sides of the reaction centre belong to the antenna complex. Energy (orange arrows) moves toward the reaction centre; only there does an electron (blue arrow) leave chlorophyll a.</figcaption>
</figure>

<p>Why bother with an antenna? A single chlorophyll a molecule is tiny and would be hit by a suitable photon only rarely. Hundreds of antenna pigments, absorbing many different wavelengths, act like a satellite dish or a funnel: they collect light energy from a large area and pour it into one reaction centre, which keeps the reaction centre busy.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>The antenna complex is a <strong>bucket brigade</strong> passing energy along a line of people; the reaction centre is the person at the end who finally throws the bucket (the electron) to the primary electron acceptor.</p></div>

<h4>Photosystem II and photosystem I</h4>
<p>The thylakoid membrane has two kinds of photosystem. Each is named after the wavelength (in nm) that its reaction-centre chlorophyll a absorbs best:</p>
<ul>
<li><strong>Photosystem II (PSII)</strong>: reaction centre <span class="term">P680</span> (absorbs <strong>680 nm</strong> best).</li>
<li><strong>Photosystem I (PSI)</strong>: reaction centre <span class="term">P700</span> (absorbs <strong>700 nm</strong> best).</li>
</ul>
<p>"P" stands for pigment. Both are in the red part of the spectrum, and both reaction centres are chlorophyll a; their surrounding proteins shift the exact wavelength each one absorbs best.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p><strong>Photosystem II works before photosystem I.</strong> The numbering looks backwards because the photosystems were named in the order they were <strong>discovered</strong>: PSI was found first. Electrons go through PSII first, then PSI.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Think of a countdown: <strong>2, 1, done</strong>. Electrons go through photosystem <strong>2</strong>, then photosystem <strong>1</strong>, and then they are done (in NADPH). And P680 comes before P700, just as 680 comes before 700.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>Know: photosystem = antenna complex + reaction centre, embedded in the thylakoid membrane; PSII = P680, PSI = P700; PSII acts first.</p></div>

<h3 data-tier="essential">Excitation of electrons</h3>
<p>What does "absorbing light" actually do to chlorophyll? The slides explain it in three steps.</p>
<ol class="steps">
<li><p class="step-head">Ground state</p><p>Electrons in a chlorophyll molecule are normally in their <span class="term">ground state</span>, their lowest, most stable energy level.</p></li>
<li><p class="step-head">Excitation</p><p>A photon hits chlorophyll, and an electron is energized to a higher energy level. This is called <span class="term">excitation</span>. The excited electron now holds extra potential energy, but the excited state is very unstable.</p></li>
<li><p class="step-head">What happens next depends on where the chlorophyll is</p><p><strong>Outside a living organism</strong> (for example, chlorophyll extracted into a test tube), the excited electrons fall straight back to their ground state and lose the potential energy as <strong>heat and light</strong>. <strong>But in a cell</strong>, the excited electron is captured by a <span class="term">primary electron acceptor</span> before it can fall back.</p></li>
</ol>
<p>The light given off by isolated chlorophyll is called <span class="term">fluorescence</span>: a chlorophyll extract lit by bright or ultraviolet light glows red. Inside a working chloroplast, very little energy is lost this way, because the primary electron acceptor grabs the electron first. The electron then passes down an electron transport chain, "slowly releasing energy bit by bit to do work," as the class notes put it, and that work makes ATP.</p>
<p>The capture is a redox reaction. The reaction-centre chlorophyll a <strong>loses</strong> an electron, so it is <strong>oxidized</strong> (P680 becomes P680<sup>+</sup>, for example). The primary electron acceptor <strong>gains</strong> it, so it is <strong>reduced</strong>. This is the moment light energy becomes chemical energy.</p>
<p>According to the slide, the energy from these electrons is used to produce ATP and NADPH in a two-part process called <span class="term">non-cyclic electron flow</span>: part one is photosystem II, part two is photosystem I.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Picture kicking a ball up a flight of stairs. In a test tube, nobody is at the top: the ball bounces straight back down and its energy is wasted as heat and noise (fluorescence). In a cell, someone (the primary electron acceptor) catches the ball at the top and rolls it down a ramp that turns a waterwheel (the ETC making ATP).</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Chlorophyll absorbs <strong>photons</strong> (light energy), not electrons. The electrons are already in the chlorophyll; the light only raises their energy.</p></div>
<p data-tier="extra">Plants under stress (drought, heat) send more of their absorbed energy out as fluorescence because their electron transport slows down. Scientists use satellites that measure chlorophyll fluorescence to monitor the health of crops and forests from space.</p>

<h3 data-tier="essential">Non-cyclic electron flow: the big picture</h3>
<p>In <strong>non-cyclic electron flow</strong>, electrons travel one way, from water to NADP<sup>+</sup>, and never return to where they started (that's what "non-cyclic" means). They are boosted twice by light, once at each photosystem, and pass through a chain of carriers in the thylakoid membrane:</p>
<div class="eq">H<sub>2</sub>O → PSII (P680) → PQ → cytochrome b6-f → PC → PSI (P700) → Fd → NADP<sup>+</sup> reductase → NADPH</div>
<p>Along the way, three things are produced: <strong>O<sub>2</sub></strong> (from splitting water at PSII), <strong>ATP</strong> (from the H<sup>+</sup> gradient the chain builds) and <strong>NADPH</strong> (at the end of the chain, in the stroma). The diagram below puts every piece in place. The next sections go through it one part at a time.</p>

<figure class="diagram">
<svg viewBox="0 0 640 420" role="img" aria-labelledby="p209b-t p209b-d">
<title id="p209b-t">Non-cyclic electron flow in the thylakoid membrane</title>
<desc id="p209b-d">The thylakoid membrane runs across the middle, with the stroma (low H+) above and the thylakoid lumen (high H+) below. Light strikes photosystem II (P680). On its lumen side, the Z protein splits water into 2 H+, half an O2 and 2 electrons. Electrons flow from photosystem II to plastoquinone (PQ), then to the cytochrome b6-f complex, which pumps H+ from the stroma into the lumen, then to plastocyanin (PC) on the lumen side, then to photosystem I (P700), which is also struck by light. From photosystem I the electrons go to ferredoxin (Fd) and NADP+ reductase on the stroma side, which makes NADPH from NADP+ and H+. At the right, H+ flows from the lumen back to the stroma through ATP synthase, which makes ATP from ADP and phosphate on the stroma side.</desc>
<defs>
<marker id="p209b-e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
<marker id="p209b-h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--proton)"/></marker>
<marker id="p209b-l" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--glyco)"/></marker>
<marker id="p209b-w" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--link)"/></marker>
</defs>
<rect x="0" y="220" width="640" height="200" style="fill:var(--proton-soft)"/>
<rect x="0" y="150" width="640" height="70" style="fill:var(--surface-2)"/>
<line x1="0" y1="150" x2="640" y2="150" style="stroke:var(--ink-2);stroke-width:1.5"/>
<line x1="0" y1="220" x2="640" y2="220" style="stroke:var(--ink-2);stroke-width:1.5"/>
<text x="130" y="24" style="fill:var(--ink);font-size:14px;font-weight:700">STROMA · low H⁺</text>
<text x="12" y="404" style="fill:var(--ink);font-size:14px;font-weight:700">THYLAKOID LUMEN · high H⁺</text>
<text x="470" y="190" text-anchor="middle" style="fill:var(--ink-2);font-size:13px">Thylakoid membrane</text>
<g style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:2">
<rect x="30" y="136" width="70" height="98" rx="14"/>
<rect x="180" y="136" width="60" height="98" rx="12"/>
<rect x="320" y="136" width="70" height="98" rx="14"/>
<rect x="452" y="104" width="68" height="44" rx="8"/>
</g>
<g style="fill:var(--surface);stroke:var(--etc);stroke-width:2">
<circle cx="140" cy="192" r="16"/><circle cx="282" cy="236" r="15"/><circle cx="420" cy="126" r="15"/>
</g>
<g style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:2">
<rect x="556" y="146" width="36" height="78" rx="6"/><rect x="568" y="118" width="12" height="28"/><ellipse cx="574" cy="96" rx="34" ry="24"/>
</g>
<ellipse cx="65" cy="240" rx="20" ry="10" style="fill:var(--link-soft);stroke:var(--link);stroke-width:2"/>
<g style="fill:var(--ink);font-size:13px" text-anchor="middle">
<text x="65" y="178" style="font-size:14px;font-weight:700">PSII</text><text x="65" y="196" style="font-size:12px">P680</text>
<text x="140" y="197" style="font-size:12px;font-weight:700">PQ</text>
<text x="204" y="176">Cyt</text><text x="204" y="194">b6-f</text>
<text x="282" y="241" style="font-size:12px;font-weight:700">PC</text>
<text x="355" y="178" style="font-size:14px;font-weight:700">PSI</text><text x="355" y="196" style="font-size:12px">P700</text>
<text x="420" y="131" style="font-size:12px;font-weight:700">Fd</text>
<text x="486" y="122" style="font-size:12px">NADP⁺</text><text x="486" y="138" style="font-size:12px">reductase</text>
<text x="65" y="244" style="font-size:12px;font-weight:700">Z</text>
<text x="574" y="44">ADP + Pᵢ → ATP</text>
</g>
<path d="M36,40 L50,62 L40,70 L56,92 L46,100 L60,130" style="fill:none;stroke:var(--glyco);stroke-width:2.5" marker-end="url(#p209b-l)"/>
<path d="M326,40 L340,62 L330,70 L346,92 L336,100 L350,130" style="fill:none;stroke:var(--glyco);stroke-width:2.5" marker-end="url(#p209b-l)"/>
<text x="36" y="32" text-anchor="middle" style="fill:var(--glyco);font-size:13px;font-weight:700">Light</text>
<text x="326" y="32" text-anchor="middle" style="fill:var(--glyco);font-size:13px;font-weight:700">Light</text>
<g style="fill:none;stroke:var(--ink);stroke-width:2;stroke-dasharray:5 3">
<line x1="100" y1="186" x2="122" y2="190" marker-end="url(#p209b-e)"/>
<line x1="156" y1="190" x2="178" y2="186" marker-end="url(#p209b-e)"/>
<line x1="240" y1="226" x2="265" y2="234" marker-end="url(#p209b-e)"/>
<line x1="297" y1="230" x2="318" y2="214" marker-end="url(#p209b-e)"/>
<line x1="378" y1="136" x2="404" y2="128" marker-end="url(#p209b-e)"/>
<line x1="435" y1="126" x2="450" y2="126" marker-end="url(#p209b-e)"/>
<line x1="486" y1="104" x2="486" y2="74" marker-end="url(#p209b-e)"/>
</g>
<text x="520" y="64" text-anchor="end" style="fill:var(--etc);font-size:13px;font-weight:700">NADP⁺ + H⁺ → NADPH</text>
<line x1="64" y1="288" x2="65" y2="254" style="stroke:var(--link);stroke-width:2" marker-end="url(#p209b-w)"/>
<text x="14" y="302" style="fill:var(--ink);font-size:13px">H₂O → 2 H⁺ + ½ O₂ + 2 e⁻</text>
<text x="14" y="320" style="fill:var(--ink-2);font-size:12px">photolysis (Z protein)</text>
<g style="stroke:var(--proton);stroke-width:3">
<line x1="232" y1="96" x2="232" y2="262" marker-end="url(#p209b-h)"/>
<line x1="574" y1="300" x2="574" y2="124" marker-end="url(#p209b-h)"/>
</g>
<g style="fill:var(--proton);font-size:13px;font-weight:700" text-anchor="middle">
<text x="232" y="88">H⁺</text><text x="232" y="282">H⁺</text><text x="574" y="318">H⁺</text>
<text x="300" y="330">H⁺</text><text x="390" y="305">H⁺</text><text x="450" y="335">H⁺</text><text x="510" y="300">H⁺</text><text x="180" y="350">H⁺</text>
</g>
<text x="548" y="256" text-anchor="end" style="fill:var(--ink);font-size:13px">ATP synthase</text>
<line x1="330" y1="368" x2="360" y2="368" style="stroke:var(--ink);stroke-width:2;stroke-dasharray:5 3"/>
<text x="366" y="372" style="fill:var(--ink);font-size:12px">electron flow</text>
<line x1="470" y1="368" x2="500" y2="368" style="stroke:var(--proton);stroke-width:3"/>
<text x="506" y="372" style="fill:var(--ink);font-size:12px">H⁺ movement</text>
</svg>
<figcaption>Non-cyclic electron flow, based on the class slide. Electrons (dashed arrows) run from water to NADPH. H<sup>+</sup> builds up in the lumen from water splitting and from pumping at the cytochrome b6-f complex, then flows back to the stroma through ATP synthase, making ATP. NADPH and ATP are both released into the stroma, ready for the Calvin cycle.</figcaption>
</figure>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Carrier order: <strong>"Please Quit Bugging Cute Penguins For Nachos"</strong>: <strong>P</strong>SII, P<strong>Q</strong>, <strong>b</strong>6-f, pl<strong>C</strong> (plastocyanin), <strong>P</strong>SI, <strong>F</strong>d, <strong>N</strong>ADP<sup>+</sup> reductase.</p></div>

<h3 data-tier="essential">Photosystem II and its electron transport chain</h3>
<p>Part one of non-cyclic flow happens at photosystem II. Following the slides:</p>
<ol class="steps">
<li><p class="step-head">Two photons strike PSII</p><p>The antenna complex funnels their energy to the reaction centre.</p></li>
<li><p class="step-head">Two electrons are excited from P680</p><p>They are captured by PSII's primary electron acceptor. P680 is left short of two electrons (P680<sup>+</sup>), a "hole" that must be filled.</p></li>
<li><p class="step-head">The electrons pass down an ETC to PSI</p><p>The chain is <strong>plastoquinone (PQ) → cytochrome b6-f complex → plastocyanin (PC)</strong>, ending at P700 in photosystem I. (The slide writes "PS700", meaning photosystem I.)</p></li>
<li><p class="step-head">H<sup>+</sup> is pumped into the lumen</p><p>As the electrons flow through the chain, H<sup>+</sup> is pumped across the thylakoid membrane from the stroma into the <strong>thylakoid lumen</strong>. This creates an <span class="term">electrochemical gradient</span>.</p></li>
</ol>
<div class="table-wrap"><table class="data">
<thead><tr><th>Carrier</th><th>What it is</th><th>What it does</th><th>Mitochondrial look-alike</th></tr></thead>
<tbody>
<tr><td><strong>Plastoquinone (PQ)</strong></td><td>Small, fat-soluble, mobile carrier that moves within the membrane</td><td>Takes 2 e<sup>−</sup> from PSII (and picks up H<sup>+</sup> from the stroma); carries them to cytochrome b6-f</td><td>Ubiquinone (Q)</td></tr>
<tr><td><strong>Cytochrome b6-f complex</strong> ("Cyt")</td><td>Large protein complex spanning the membrane</td><td><strong>Proton pump</strong>: uses the electrons' energy to move H<sup>+</sup> into the lumen; passes the electrons on to PC</td><td>Complex III</td></tr>
<tr><td><strong>Plastocyanin (PC)</strong></td><td>Small, copper-containing, mobile protein on the lumen side</td><td>Carries electrons one at a time to P700 in PSI</td><td>Cytochrome c</td></tr>
</tbody></table></div>
<p>Each carrier holds electrons a little more tightly than the one before it, so the electrons flow "downhill" in energy. The energy they release is what pumps the H<sup>+</sup>. This is the same idea as the mitochondrial ETC in lesson 2.04: a chain of increasingly electronegative carriers that releases energy in small, usable steps instead of all at once.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>P</strong>lasto<strong>Q</strong>uinone is the plant version of ubi<strong>q</strong>uinone (Q), and <strong>p</strong>lasto<strong>c</strong>yanin plays the role of cytochrome <strong>c</strong>: both pairs are the small mobile shuttles of their chains. <em>Plasto-</em> means "of the plastid" (chloroplast).</p></div>

<h3 data-tier="essential">Photolysis: splitting water</h3>
<p>After P680 gives away two electrons, it must get two back, or PSII would stop after a single flash of light. They come from <strong>water</strong>. From the slide:</p>
<ul>
<li>The <span class="term">Z protein</span> splits water. This is <span class="term">photolysis</span> ("splitting by light").</li>
<li>Each water molecule gives <strong>2 protons (H<sup>+</sup>), 2 electrons and 1 oxygen atom</strong>.</li>
<li>The <strong>electrons replace those lost from chlorophyll P680</strong>.</li>
<li>The <strong>protons remain in the lumen</strong> to add to the gradient.</li>
<li>The <strong>oxygen leaves as a by-product</strong>.</li>
</ul>
<div class="eq">H<sub>2</sub>O → 2 H<sup>+</sup> + 2 e<sup>−</sup> + ½ O<sub>2</sub></div>
<p>A single oxygen atom can't exist on its own, so the oxygen atoms from two water molecules join to make one O<sub>2</sub> molecule. Doubling the equation gives whole molecules: 2 H<sub>2</sub>O → 4 H<sup>+</sup> + 4 e<sup>−</sup> + O<sub>2</sub>. The O<sub>2</sub> diffuses out of the chloroplast and the cell and leaves the leaf through the stomata (or is used by the plant's own mitochondria).</p>
<p>Why can PSII split water when nothing else in the cell can? Water holds its electrons very tightly. But once P680 has lost an electron, P680<sup>+</sup> is an extremely strong electron "puller", the strongest oxidizing agent known in living things, strong enough to take electrons from water. Light provides the energy indirectly: no light, no P680<sup>+</sup>, no water splitting. That's why it's called <em>photo</em>lysis.</p>
<div class="callout key"><p class="callout-title">On the test</p><ul><li>Photolysis happens at <strong>PSII</strong>, on the <strong>lumen</strong> side, catalysed by the Z protein.</li><li>Water → electrons (refill P680), protons (stay in the lumen) and oxygen (by-product).</li><li>All the O<sub>2</sub> made by photosynthesis comes from this step.</li></ul></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Water is split at photosystem <strong>II</strong>, not photosystem I. PSI gets its replacement electrons from PSII's chain, not from water.</p></div>
<p data-tier="extra">The Z protein is better known as the <em>water-splitting complex</em> or <em>oxygen-evolving complex</em>. At its heart is a cluster of four manganese ions and one calcium ion that collects four electrons, one photon-driven step at a time, before releasing one O<sub>2</sub>.</p>

<h3 data-tier="essential">Building the proton gradient</h3>
<p>The ATP made by the light reactions depends on a high concentration of H<sup>+</sup> in the thylakoid lumen. Several things push H<sup>+</sup> in that direction:</p>
<ol class="steps">
<li><p class="step-head">Photolysis adds H<sup>+</sup> to the lumen</p><p>Every water molecule split releases 2 H<sup>+</sup> directly into the lumen.</p></li>
<li><p class="step-head">The ETC pumps H<sup>+</sup> into the lumen</p><p>Using energy from the passing electrons, PQ and the cytochrome b6-f complex move H<sup>+</sup> from the stroma into the lumen. This is <strong>active transport</strong>: H<sup>+</sup> moves <strong>against</strong> its concentration gradient.</p></li>
<li data-tier="likely"><p class="step-head">Making NADPH removes H<sup>+</sup> from the stroma</p><p>NADP<sup>+</sup> reductase uses an H<sup>+</sup> from the stroma to make NADPH, lowering the stroma's H<sup>+</sup> concentration and steepening the difference.</p></li>
</ol>
<p>The result is an <strong>electrochemical gradient</strong> across the thylakoid membrane. It has two parts: a <strong>concentration</strong> difference (many more H<sup>+</sup> in the lumen, so the lumen has a lower pH) and a <strong>charge</strong> difference (the lumen is more positive). Both push H<sup>+</sup> back toward the stroma. The thylakoid membrane is impermeable to H<sup>+</sup>, so the gradient can't leak away: the only way back is through ATP synthase.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The gradient that makes ATP is across the <strong>thylakoid membrane</strong> (high H<sup>+</sup> in the <strong>lumen</strong>, low in the <strong>stroma</strong>), not across the chloroplast's inner membrane. In the mitochondrion, H<sup>+</sup> is pumped into the intermembrane space; in the chloroplast, into the lumen.</p></div>
<p data-tier="extra">In bright light the lumen reaches a pH of about 5 while the stroma rises to about 8. A difference of 3 pH units means roughly 1000 times more H<sup>+</sup> in the lumen.</p>

<h3 data-tier="essential">Photophosphorylation: making ATP by chemiosmosis</h3>
<p>The slide's final PSII bullet: <strong>photophosphorylation of ADP to ATP via chemiosmosis</strong>, with <strong>1 ATP formed for every 4 protons that pass through ATP synthase</strong> (the slide calls it "ATPase") <strong>from the thylakoid lumen into the stroma</strong>.</p>
<ul>
<li><span class="term">Chemiosmosis</span>: H<sup>+</sup> flows <strong>down</strong> its electrochemical gradient, from the lumen to the stroma, through the channel in ATP synthase. This is passive (facilitated diffusion). The flow makes part of the enzyme rotate, and that energy joins ADP and P<sub>i</sub> into ATP.</li>
<li><span class="term">Photophosphorylation</span>: making ATP (adding a phosphate to ADP) using energy that originally came from <strong>light</strong>. Compare <em>oxidative</em> phosphorylation in mitochondria (energy from oxidizing food) and <em>substrate-level</em> phosphorylation in glycolysis and the Krebs cycle (a phosphate transferred directly from a substrate).</li>
<li>The enzyme's head faces the <strong>stroma</strong>, so the ATP is released into the stroma, exactly where the Calvin cycle needs it.</li>
</ul>
<div class="tally"><span class="chip atp">4 H<sup>+</sup> through ATP synthase → 1 ATP (class value)</span></div>
<p>For example, if 12 H<sup>+</sup> flow back through ATP synthase, 12 ÷ 4 = <strong>3 ATP</strong> are made.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Think of ATP synthase as a <strong>water mill</strong>: H<sup>+</sup> is the water piled up behind a dam (the lumen), and the only way out is through the mill wheel. Every 4 H<sup>+</sup> that pour through turn the wheel enough to make 1 ATP.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>ATP synthase is <strong>not</strong> part of the electron path, and it isn't a pump. Electrons never pass through it; H<sup>+</sup> flows through it passively, with the gradient. The pumping happens at the cytochrome b6-f complex.</p></div>

<h3 data-tier="essential">Photosystem I: making NADPH</h3>
<p>Part two of non-cyclic flow happens at photosystem I. From the slides:</p>
<ol class="steps">
<li><p class="step-head">Two photons strike PSI</p><p>Its antenna complex funnels the energy to P700.</p></li>
<li><p class="step-head">Two electrons are excited from P700</p><p>They are captured by PSI's primary electron acceptor. P700's "hole" is filled by the 2 electrons arriving from P680 through the PSII chain (via plastocyanin).</p></li>
<li><p class="step-head">The electrons pass down a second, short ETC</p><p><strong>Ferredoxin (Fd)</strong>, a small iron-containing protein on the stroma side, passes them to the enzyme <strong>NADP<sup>+</sup> reductase</strong>.</p></li>
<li><p class="step-head">2 e<sup>−</sup> reduce NADP<sup>+</sup> to NADPH</p><p>NADP<sup>+</sup> reductase adds the two electrons (and an H<sup>+</sup> from the stroma) to NADP<sup>+</sup>. The NADPH is released into the stroma.</p></li>
</ol>
<div class="eq">NADP<sup>+</sup> + 2 e<sup>−</sup> + H<sup>+</sup> → NADPH</div>
<p>Why does PSI need to boost the electrons again? By the time they reach P700 they have given up much of their energy pumping H<sup>+</sup>. They no longer have enough energy to reduce NADP<sup>+</sup>, so a second photon boost lifts them high enough to do it.</p>
<p><strong>NADP<sup>+</sup> is the final electron acceptor of non-cyclic flow</strong>, just as O<sub>2</sub> is the final acceptor of the mitochondrial ETC. Its reduced form, NADPH, carries the electrons (originally from water) to the Calvin cycle, where they reduce CO<sub>2</sub> to sugar.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><ul><li>PSI does <strong>not</strong> split water. Its replacement electrons come from PSII's chain.</li><li>NADPH is made on the <strong>stroma</strong> side, not in the lumen.</li><li>PSI's chain (Fd, NADP<sup>+</sup> reductase) doesn't pump H<sup>+</sup>; the pumping happens in the chain between the two photosystems.</li></ul></div>

<h3 data-tier="essential">The Z scheme</h3>
<p>The <span class="term">Z scheme</span> is an energy diagram of non-cyclic electron flow. The vertical axis is the <strong>energy of the electrons</strong>; the horizontal axis follows their path. Drawn this way, the flow makes a zig-zag shaped like a sideways letter Z.</p>

<figure class="diagram">
<svg viewBox="0 0 640 400" role="img" aria-labelledby="p209c-t p209c-d">
<title id="p209c-t">The Z scheme of non-cyclic electron flow</title>
<desc id="p209c-d">An energy diagram. Water gives electrons to P680 in photosystem II at low energy. Light boosts them straight up to photosystem II's primary acceptor. They then fall step by step through plastoquinone, the cytochrome b6-f complex and plastocyanin to P700 in photosystem I, releasing energy that pumps H+ for ATP synthesis. Light boosts them straight up again, to photosystem I's primary acceptor, which is higher than the first. They then fall through ferredoxin and NADP+ reductase, which makes NADPH.</desc>
<defs>
<marker id="p209c-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
<marker id="p209c-l" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--glyco)"/></marker>
<marker id="p209c-w" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--link)"/></marker>
</defs>
<line x1="8" y1="330" x2="8" y2="42" style="stroke:var(--ink);stroke-width:1.5" marker-end="url(#p209c-a)"/>
<text x="22" y="186" text-anchor="middle" transform="rotate(-90 22 186)" style="fill:var(--ink);font-size:13px">Energy of electrons</text>
<g style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2">
<rect x="85" y="285" width="80" height="30" rx="6"/><rect x="350" y="285" width="70" height="30" rx="6"/>
</g>
<g style="fill:var(--surface);stroke:var(--etc);stroke-width:2">
<rect x="75" y="73" width="100" height="34" rx="6"/><rect x="340" y="43" width="100" height="34" rx="6"/>
</g>
<g style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:2">
<ellipse cx="205" cy="140" rx="22" ry="14"/><rect x="240" y="176" width="70" height="28" rx="6"/><ellipse cx="345" cy="240" rx="20" ry="13"/><ellipse cx="470" cy="110" rx="20" ry="13"/><rect x="492" y="133" width="96" height="34" rx="6"/>
</g>
<g style="stroke:var(--glyco);stroke-width:3">
<line x1="125" y1="284" x2="125" y2="110" marker-end="url(#p209c-l)"/>
<line x1="390" y1="284" x2="390" y2="80" marker-end="url(#p209c-l)"/>
</g>
<path d="M44,232 L58,246 L50,252 L66,266 L58,272 L80,288" style="fill:none;stroke:var(--glyco);stroke-width:2" marker-end="url(#p209c-l)"/>
<path d="M462,236 L448,250 L456,256 L440,270 L448,276 L424,292" style="fill:none;stroke:var(--glyco);stroke-width:2" marker-end="url(#p209c-l)"/>
<g style="stroke:var(--ink);stroke-width:2.5">
<line x1="175" y1="100" x2="188" y2="128" marker-end="url(#p209c-a)"/>
<line x1="222" y1="150" x2="248" y2="174" marker-end="url(#p209c-a)"/>
<line x1="305" y1="206" x2="330" y2="229" marker-end="url(#p209c-a)"/>
<line x1="355" y1="252" x2="372" y2="283" marker-end="url(#p209c-a)"/>
<line x1="440" y1="66" x2="456" y2="99" marker-end="url(#p209c-a)"/>
<line x1="488" y1="118" x2="500" y2="131" marker-end="url(#p209c-a)"/>
<line x1="540" y1="168" x2="540" y2="190" marker-end="url(#p209c-a)"/>
</g>
<line x1="48" y1="301" x2="83" y2="301" style="stroke:var(--link);stroke-width:2" marker-end="url(#p209c-w)"/>
<g style="fill:var(--ink);font-size:12px">
<text x="125" y="305" text-anchor="middle" style="font-size:13px;font-weight:700">P680</text>
<text x="385" y="305" text-anchor="middle" style="font-size:13px;font-weight:700">P700</text>
<text x="125" y="87" text-anchor="middle">Primary</text><text x="125" y="101" text-anchor="middle">acceptor</text>
<text x="390" y="57" text-anchor="middle">Primary</text><text x="390" y="71" text-anchor="middle">acceptor</text>
<text x="205" y="145" text-anchor="middle" style="font-weight:700">PQ</text>
<text x="275" y="195" text-anchor="middle" style="font-weight:700">Cyt b6-f</text>
<text x="345" y="245" text-anchor="middle" style="font-weight:700">PC</text>
<text x="470" y="115" text-anchor="middle" style="font-weight:700">Fd</text>
<text x="540" y="147" text-anchor="middle">NADP⁺</text><text x="540" y="161" text-anchor="middle">reductase</text>
<text x="44" y="306" text-anchor="end" style="font-size:13px">H₂O</text>
<text x="40" y="226" text-anchor="middle" style="fill:var(--glyco);font-weight:700">light</text>
<text x="466" y="228" text-anchor="middle" style="fill:var(--glyco);font-weight:700">light</text>
</g>
<text x="540" y="206" text-anchor="middle" style="fill:var(--etc);font-size:13px;font-weight:700">NADP⁺ + H⁺ → NADPH</text>
<text x="16" y="344" style="fill:var(--ink-2);font-size:12px">photolysis: H₂O → 2 H⁺ + ½ O₂ + 2 e⁻</text>
<text x="200" y="246" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">energy released here</text>
<text x="200" y="262" text-anchor="middle" style="fill:var(--proton);font-size:12px;font-weight:700">pumps H⁺ → ATP</text>
<text x="125" y="372" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Photosystem II</text>
<text x="385" y="372" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Photosystem I</text>
</svg>
<figcaption>The Z scheme, based on the class slide. Orange arrows are the two light-driven boosts; black arrows are "downhill" electron transfers. The first downhill run (PQ → cytochrome b6-f → PC) releases the energy that pumps H<sup>+</sup> for ATP; the second leads to NADPH.</figcaption>
</figure>

<p>Read the diagram from left to right:</p>
<ol class="steps">
<li><p class="step-head">Water feeds P680 (low energy)</p><p>Electrons from photolysis start at the bottom: water holds its electrons tightly, so they are low in energy.</p></li>
<li><p class="step-head">First boost: light at PSII</p><p>Light lifts the electrons straight up from P680 to PSII's primary acceptor.</p></li>
<li><p class="step-head">First downhill run: PQ → cytochrome b6-f → PC</p><p>The electrons lose energy step by step. That energy pumps H<sup>+</sup> into the lumen, which drives ATP synthesis.</p></li>
<li><p class="step-head">Second boost: light at PSI</p><p>The electrons arrive at P700 low in energy. Light lifts them up again, even higher than the first time.</p></li>
<li><p class="step-head">Second downhill run: Fd → NADP<sup>+</sup> reductase → NADPH</p><p>The high-energy electrons reduce NADP<sup>+</sup> to NADPH.</p></li>
</ol>
<p><strong>Why two photosystems?</strong> The gap in energy between water (electrons held very tightly) and NADPH (electrons at high energy) is too big for one photon's worth of energy to bridge, especially since some energy is spent on pumping H<sup>+</sup> along the way. Two light-driven boosts, one after the other, do it.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Be able to sketch and label the Z scheme in order: H<sub>2</sub>O → P680 → (light) → primary acceptor → PQ → cytochrome b6-f → PC → P700 → (light) → primary acceptor → Fd → NADP<sup>+</sup> reductase → NADPH, showing where ATP (H<sup>+</sup> pumping) and O<sub>2</sub> (photolysis) come from.</p></div>
<p data-tier="extra">In chemistry terms, the vertical axis is redox potential. Water/O<sub>2</sub> sits at about +0.82 V and NADP<sup>+</sup>/NADPH at about −0.32 V, a gap of about 1.1 V, which is larger than what one 680 nm photon can supply once losses are counted.</p>

<h3 data-tier="likely">Cyclic photophosphorylation</h3>
<p>Non-cyclic flow isn't the only route electrons can take. The last content slide describes a second, simpler pathway:</p>
<ul>
<li><span class="term">Cyclic photophosphorylation</span> is <strong>driven solely by PSI</strong>.</li>
<li><strong>Cyclic flow</strong> of electrons: <strong>P700 → Fd → Q cycle (the PSII ETC) → P700</strong>.</li>
<li>Purpose: <strong>pump extra H<sup>+</sup> for increased ATP synthesis</strong>.</li>
<li><strong>No oxygen or NADPH is produced.</strong></li>
</ul>
<p>Step by step: light excites P700 and the electron goes to PSI's primary acceptor and then to ferredoxin, as usual. But instead of going on to NADP<sup>+</sup> reductase, the electron is passed <strong>back</strong> to the PSII chain at plastoquinone and the cytochrome b6-f complex (the "Q cycle" part of the chain). As it passes through cytochrome b6-f, it pumps H<sup>+</sup> into the lumen. Plastocyanin then carries it back to P700, which it refills. The electron ends where it started, which is why the flow is called <em>cyclic</em>.</p>
<p>Because PSII isn't involved, no water is split, so <strong>no O<sub>2</sub></strong> is released. Because the electrons never reach NADP<sup>+</sup> reductase, <strong>no NADPH</strong> is made. The only product is the extra H<sup>+</sup> gradient, which ATP synthase turns into <strong>ATP</strong>.</p>

<figure class="diagram">
<svg viewBox="0 0 640 330" role="img" aria-labelledby="p209d-t p209d-d">
<title id="p209d-t">Non-cyclic versus cyclic electron flow</title>
<desc id="p209d-d">Left panel, non-cyclic flow: water enters photosystem II and oxygen leaves; electrons go from photosystem II to PQ, cytochrome b6-f and PC, then down to photosystem I, then to Fd and NADP+ reductase, which makes NADPH. H+ is pumped for ATP. It makes ATP, NADPH and O2 and uses both photosystems. Right panel, cyclic flow: electrons go from photosystem I to Fd, back to PQ and cytochrome b6-f, then to PC and back to photosystem I, in a loop that pumps H+ for ATP. It makes ATP only, with no NADPH and no O2.</desc>
<defs>
<marker id="p209d-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
</defs>
<g style="fill:var(--surface);stroke:var(--line);stroke-width:1.5">
<rect x="10" y="44" width="300" height="270" rx="10"/><rect x="330" y="44" width="300" height="270" rx="10"/>
</g>
<text x="160" y="30" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Non-cyclic electron flow</text>
<text x="480" y="30" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Cyclic electron flow</text>
<g style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:2">
<rect x="24" y="95" width="56" height="30" rx="6"/><rect x="156" y="95" width="56" height="30" rx="6"/><rect x="240" y="175" width="56" height="30" rx="6"/><rect x="83" y="173" width="70" height="34" rx="6"/>
<rect x="392" y="175" width="56" height="30" rx="6"/><rect x="500" y="95" width="80" height="30" rx="6"/>
</g>
<g style="fill:var(--surface);stroke:var(--etc);stroke-width:2">
<circle cx="118" cy="110" r="18"/><circle cx="250" cy="110" r="18"/><circle cx="196" cy="190" r="18"/>
<circle cx="420" cy="110" r="18"/><circle cx="540" cy="190" r="18"/>
</g>
<g style="fill:var(--ink);font-size:13px">
<text x="52" y="115" text-anchor="middle" style="font-weight:700">PSII</text>
<text x="118" y="115" text-anchor="middle" style="font-size:12px;font-weight:700">PQ</text>
<text x="184" y="115" text-anchor="middle">b6-f</text>
<text x="250" y="115" text-anchor="middle" style="font-size:12px;font-weight:700">PC</text>
<text x="268" y="195" text-anchor="middle" style="font-weight:700">PSI</text>
<text x="196" y="195" text-anchor="middle" style="font-size:12px;font-weight:700">Fd</text>
<text x="118" y="187" text-anchor="middle" style="font-size:12px">NADP⁺</text>
<text x="118" y="201" text-anchor="middle" style="font-size:12px">reductase</text>
<text x="420" y="195" text-anchor="middle" style="font-weight:700">PSI</text>
<text x="420" y="115" text-anchor="middle" style="font-size:12px;font-weight:700">Fd</text>
<text x="540" y="115" text-anchor="middle">PQ / b6-f</text>
<text x="540" y="195" text-anchor="middle" style="font-size:12px;font-weight:700">PC</text>
</g>
<text x="52" y="82" text-anchor="middle" style="fill:var(--link);font-size:12px;font-weight:700">H₂O in, O₂ out</text>
<text x="42" y="194" text-anchor="middle" style="fill:var(--etc);font-size:13px;font-weight:700">NADPH</text>
<g style="stroke:var(--ink);stroke-width:2">
<line x1="80" y1="110" x2="98" y2="110" marker-end="url(#p209d-a)"/>
<line x1="136" y1="110" x2="154" y2="110" marker-end="url(#p209d-a)"/>
<line x1="212" y1="110" x2="230" y2="110" marker-end="url(#p209d-a)"/>
<line x1="256" y1="128" x2="264" y2="173" marker-end="url(#p209d-a)"/>
<line x1="240" y1="190" x2="216" y2="190" marker-end="url(#p209d-a)"/>
<line x1="178" y1="190" x2="155" y2="190" marker-end="url(#p209d-a)"/>
<line x1="83" y1="190" x2="68" y2="190" marker-end="url(#p209d-a)"/>
<line x1="420" y1="175" x2="420" y2="130" marker-end="url(#p209d-a)"/>
<line x1="438" y1="110" x2="498" y2="110" marker-end="url(#p209d-a)"/>
<line x1="540" y1="125" x2="540" y2="170" marker-end="url(#p209d-a)"/>
<line x1="522" y1="190" x2="450" y2="190" marker-end="url(#p209d-a)"/>
</g>
<text x="150" y="152" text-anchor="middle" style="fill:var(--proton);font-size:12px;font-weight:700">H⁺ pumped → ATP</text>
<text x="480" y="154" text-anchor="middle" style="fill:var(--proton);font-size:12px;font-weight:700">H⁺ → ATP</text>
<g style="fill:var(--ink);font-size:13px">
<text x="160" y="250" text-anchor="middle" style="font-weight:700">Makes ATP + NADPH + O₂</text>
<text x="480" y="250" text-anchor="middle" style="font-weight:700">Makes ATP only</text>
</g>
<g style="fill:var(--ink-2);font-size:12px">
<text x="160" y="272" text-anchor="middle">Uses PSII and PSI</text>
<text x="160" y="292" text-anchor="middle">Electrons: water → NADPH (one way)</text>
<text x="480" y="272" text-anchor="middle">No NADPH, no O₂</text>
<text x="480" y="292" text-anchor="middle">PSII, water and NADP⁺ reductase not used</text>
</g>
</svg>
<figcaption>Non-cyclic flow (left) is a one-way path from water to NADPH. Cyclic flow (right) loops electrons from PSI through ferredoxin back to the PQ/cytochrome b6-f part of the chain and round to PSI again, pumping H<sup>+</sup> for extra ATP.</figcaption>
</figure>

<h4>Why the Calvin cycle needs the extra ATP</h4>
<p>The Calvin cycle uses ATP and NADPH in a fixed ratio. Per glucose it needs <strong>18 ATP and 12 NADPH</strong> (you'll see where these numbers come from in lesson 2.10):</p>
<div class="tally"><span class="chip atp">18 ATP</span><span class="chip nadph">12 NADPH</span><span class="chip co2">per 6 CO<sub>2</sub> fixed (1 glucose)</span></div>
<p>That's 3 ATP for every 2 NADPH, or 1.5 ATP per NADPH. Non-cyclic flow doesn't quite deliver that ratio. A rough estimate using the class slide's diagram: for each pair of electrons (one NADPH), 2 H<sup>+</sup> come from splitting water and 2 H<sup>+</sup> are pumped at the cytochrome complex, so about 4 H<sup>+</sup> enter the lumen. At the class value of 4 H<sup>+</sup> per ATP, that's about <strong>1 ATP per NADPH</strong>. For 12 NADPH, non-cyclic flow would give about 12 ATP, roughly 6 short of the 18 needed.</p>
<p>Cyclic flow makes up the shortfall: it adds ATP without adding NADPH. The chloroplast adjusts how much electron flow goes the cyclic way to match what the Calvin cycle is using. Cyclic flow also takes over when NADPH builds up and NADP<sup>+</sup> runs short, because then the electrons at ferredoxin have nowhere else to go.</p>
<p data-tier="extra">The real H<sup>+</sup> numbers are a bit higher than the slide's simplified picture (the cytochrome b6-f complex can move more H<sup>+</sup> per electron pair), but non-cyclic flow still falls short of 1.5 ATP per NADPH, so the conclusion holds. Cyclic flow is especially important in the bundle sheath cells of C<sub>4</sub> plants (lesson 2.11), which need a lot of ATP.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Non-cyclic electron flow</th><th>Cyclic electron flow</th></tr></thead>
<tbody>
<tr><td>Photosystems used</td><td>PSII and PSI</td><td>PSI only</td></tr>
<tr><td>Path</td><td>H<sub>2</sub>O → PSII → PQ → b6-f → PC → PSI → Fd → NADP<sup>+</sup> reductase</td><td>P700 → Fd → PQ / b6-f → PC → P700</td></tr>
<tr><td>Electron source</td><td>Water (photolysis)</td><td>P700 itself (electrons are recycled)</td></tr>
<tr><td>Final electron acceptor</td><td>NADP<sup>+</sup></td><td>P700 (back to the start)</td></tr>
<tr><td>Products</td><td>ATP, NADPH, O<sub>2</sub></td><td>ATP only</td></tr>
<tr><td>Purpose</td><td>Make both carriers for the Calvin cycle</td><td>Top up ATP to meet the Calvin cycle's 3 : 2 ATP : NADPH need</td></tr>
</tbody></table></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Cyclic flow makes <strong>neither O<sub>2</sub> nor NADPH</strong>, only ATP. And it isn't an "alternative" that replaces non-cyclic flow: both run together, with cyclic flow adding extra ATP.</p></div>

<h3 data-tier="likely">Compared with the mitochondrial ETC</h3>
<p>Review question 5 asks what process the light reactions remind you of. The answer is the electron transport chain and chemiosmosis of cellular respiration (lesson 2.04). The machinery is strikingly similar; what differs is where the electrons come from, where they end up, and what powers them. Here is a short version; lesson 2.10 has the full point-by-point comparison.</p>
<div class="compare"><div><h4>Light reactions (chloroplast)</h4><ul>
<li>ETC in the <strong>thylakoid membrane</strong></li>
<li>Energy source: <strong>light</strong></li>
<li>Electrons from <strong>water</strong></li>
<li>Final electron acceptor: <strong>NADP<sup>+</sup></strong> (→ NADPH)</li>
<li>H<sup>+</sup> pumped into the <strong>thylakoid lumen</strong></li>
<li>ATP made in the <strong>stroma</strong>: <strong>photophosphorylation</strong></li>
<li>O<sub>2</sub> <strong>released</strong></li>
</ul></div><div><h4>ETC (mitochondrion)</h4><ul>
<li>ETC in the <strong>inner mitochondrial membrane</strong> (cristae)</li>
<li>Energy source: <strong>oxidation of food</strong></li>
<li>Electrons from <strong>NADH and FADH<sub>2</sub></strong> (from glucose)</li>
<li>Final electron acceptor: <strong>O<sub>2</sub></strong> (→ H<sub>2</sub>O)</li>
<li>H<sup>+</sup> pumped into the <strong>intermembrane space</strong></li>
<li>ATP made in the <strong>matrix</strong>: <strong>oxidative phosphorylation</strong></li>
<li>O<sub>2</sub> <strong>used</strong></li>
</ul></div></div>
<p>What they share: a chain of membrane carriers arranged so electrons release energy step by step; small mobile shuttles (PQ and PC in the chloroplast, Q and cytochrome c in the mitochondrion); proton pumping that builds an electrochemical gradient across a membrane that H<sup>+</sup> can't cross; and ATP synthase making ATP by chemiosmosis as H<sup>+</sup> flows back.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>The two systems run in opposite directions. Respiration lets electrons fall <strong>from food to oxygen</strong>; the light reactions use light to push electrons <strong>from water (oxygen's partner) up to NADPH</strong>. Photosynthesis makes O<sub>2</sub> from water; respiration turns O<sub>2</sub> back into water.</p></div>

<h3 data-tier="likely">What limits the light reactions: shade and night</h3>
<p>The light reactions depend directly on photons, so anything that reduces the light reaching the thylakoids slows them down. Two of the review questions ask about this.</p>
<h4>Shade</h4>
<p>In a shady location, fewer photons strike the chlorophyll, so fewer electrons are excited each second. Less water is split, fewer H<sup>+</sup> are pumped, and <strong>less ATP and NADPH</strong> are made. (The class answer key compares the light reactions to a "charging station" that runs slower.) With fewer ATP and NADPH, the Calvin cycle fixes less CO<sub>2</sub>, the plant makes less sugar, and it grows more slowly.</p>
<p>Plants adapt to shade. According to the class key, they often grow <strong>broader, thinner leaves</strong> to maximize the surface area that catches light, or <strong>increase the amount of chlorophyll per chloroplast</strong> to catch every stray bit of light. Shade leaves are often a darker green for this reason.</p>
<h4>Night</h4>
<p>At night there are no photons, so no electrons are excited. The water-splitting process and the electron transport chain stop, and no new ATP or NADPH is made. The Calvin cycle doesn't use light directly, so it can <strong>briefly continue</strong> after dark, but only until the ATP and NADPH made during the day run out. For the rest of the night the plant only respires, taking in O<sub>2</sub> and releasing CO<sub>2</sub>.</p>
<h4>Other limits</h4>
<ul>
<li><strong>Wavelength:</strong> green light is absorbed poorly, so it drives the light reactions less well than the same brightness of red or blue light (lesson 2.08).</li>
<li><strong>Very bright light:</strong> beyond a certain brightness the rate stops rising, because something else (CO<sub>2</sub> supply, or how fast the Calvin cycle can use ATP and NADPH) becomes the limit.</li>
</ul>
<p data-tier="extra">Some herbicides work by breaking the light reactions. Atrazine and diuron (DCMU) bind to photosystem II and block the hand-off of electrons to plastoquinone, so non-cyclic flow stops. Paraquat steals electrons at photosystem I and passes them to oxygen, producing reactive molecules that destroy the cell's membranes. Both show that every link in the chain is essential.</p>

<h3 data-tier="essential">Light reactions review &amp; research questions</h3>
<p>These six questions are from the end of the light reactions slides. Where the class answer key has an answer, it is given first. Try each one before opening the answer.</p>
<details class="check"><summary>1. What are the energy carriers leaving the light reactions?</summary><div class="ans"><p><strong>Class key:</strong> <strong>ATP</strong> (adenosine triphosphate): the main energy currency of the cell. <strong>NADPH</strong>: a high-energy electron carrier.</p><p>Both are released into the stroma and used by the Calvin cycle: ATP supplies energy and NADPH supplies the electrons that reduce CO<sub>2</sub>. They return to the light reactions as ADP + P<sub>i</sub> and NADP<sup>+</sup> to be recharged.</p></div></details>
<details class="check"><summary>2. Where do electrons come from for the two photosystems?</summary><div class="ans"><p><strong>Class key:</strong> <strong>Photosystem II:</strong> electrons come from <strong>water molecules</strong> (H<sub>2</sub>O). Through a process called photolysis, water is split into electrons, protons and oxygen. <strong>Photosystem I:</strong> electrons come from the <strong>electron transport chain</strong>. Specifically, they are the same electrons that just left photosystem II, having lost some energy along the way to pump protons.</p><p>They arrive at P700 through plastocyanin. (In cyclic flow, PSI's electrons are its own, recycled through ferredoxin and the cytochrome b6-f complex.)</p></div></details>
<details class="check"><summary>3. What would happen if the plant was grown in a shady location?</summary><div class="ans"><p><strong>Class key:</strong> <strong>Less ATP/NADPH:</strong> with fewer photons hitting the chlorophyll, the "charging station" runs slower. <strong>Adaptation:</strong> plants often respond by growing broader, thinner leaves to maximize surface area, or by increasing the amount of chlorophyll per chloroplast to catch every stray bit of light.</p><p>The chain of effects: fewer photons → fewer excited electrons → less water split and fewer H<sup>+</sup> pumped → less ATP and NADPH → slower Calvin cycle → less sugar → slower growth.</p></div></details>
<details class="check"><summary>4. Can plants do the light reactions at night?</summary><div class="ans"><p><strong>Class key:</strong> <strong>No.</strong> The light reactions require the direct energy of photons to excite electrons. Without light, the water-splitting process and the electron transport chain grind to a halt. However, the <strong>Calvin cycle</strong> (the "light-independent" reactions) can briefly continue at night until the supply of ATP and NADPH stored during the day is used up.</p></div></details>
<details class="check"><summary>5. What process does this remind you of? What are the similarities and differences?</summary><div class="ans"><p>(The class answer key skips this question; here is a model answer.) It resembles the <strong>electron transport chain and chemiosmosis of cellular respiration</strong> (oxidative phosphorylation) in the mitochondrion.</p><p><strong>Similarities:</strong> both use a chain of electron carriers embedded in a membrane, passing electrons in a series of redox reactions that release energy step by step; both have small mobile carriers (PQ and PC vs Q and cytochrome c); both use that energy to pump H<sup>+</sup> across a membrane, building an electrochemical gradient; both make ATP by chemiosmosis through ATP synthase; both happen in double-membrane organelles.</p><p><strong>Differences:</strong> the energy source is light vs the oxidation of food; electrons come from water vs NADH and FADH<sub>2</sub>; the final electron acceptor is NADP<sup>+</sup> (making NADPH) vs O<sub>2</sub> (making water); O<sub>2</sub> is released vs used; H<sup>+</sup> is pumped into the thylakoid lumen vs the intermembrane space; ATP is made in the stroma (photophosphorylation) vs the matrix (oxidative phosphorylation); the light reactions need two photon boosts.</p></div></details>
<details class="check"><summary>6. What reactants/products of photosynthesis are used/produced in this process?</summary><div class="ans"><p><strong>Class key:</strong> <strong>Water</strong> is a reactant (it is split as the source of electrons and to supply the protons for the gradient). <strong>Oxygen</strong> is released in the splitting of water. (In the class answer key this question is numbered 5.)</p><p>Light energy is also an input. The other two overall reactants and products, CO<sub>2</sub> and glucose, are not involved here: they belong to the Calvin cycle. The light reactions also make the ATP and NADPH that the Calvin cycle uses, and take back ADP, P<sub>i</sub> and NADP<sup>+</sup>.</p></div></details>
<details class="check" data-tier="likely"><summary>Extra: Using the class values, how many photons are absorbed and how many water molecules are split to make the 12 NADPH needed for one glucose?</summary><div class="ans"><p>Each NADPH needs 2 electrons, and each pair of electrons absorbs 2 photons at PSII and 2 at PSI: <strong>4 photons per NADPH</strong>. For 12 NADPH: 12 × 4 = <strong>48 photons</strong>. The 24 electrons come from <strong>12 H<sub>2</sub>O</strong> (2 e<sup>−</sup> each), releasing 12 × ½ = <strong>6 O<sub>2</sub></strong>, which matches the 6 O<sub>2</sub> in the overall equation.</p></div></details>
<details class="check" data-tier="likely"><summary>Extra: If 20 H<sup>+</sup> flow from the lumen through ATP synthase, how many ATP are made? Where are they released?</summary><div class="ans"><p>At the class value of 4 H<sup>+</sup> per ATP: 20 ÷ 4 = <strong>5 ATP</strong>, released into the <strong>stroma</strong> (the side the ATP synthase head faces), where the Calvin cycle uses them.</p></div></details>
<details class="check" data-tier="likely"><summary>Extra: Why does a chloroplast need cyclic electron flow at all?</summary><div class="ans"><p>The Calvin cycle uses 18 ATP and 12 NADPH per glucose, a ratio of 3 : 2. Non-cyclic flow makes ATP and NADPH in roughly a 1 : 1 ratio (by the slide's simplified numbers), so ATP would run out first. Cyclic flow (PSI → Fd → PQ / b6-f → PC → PSI) pumps extra H<sup>+</sup> and makes extra ATP without making NADPH or O<sub>2</sub>, balancing the supply.</p></div></details>
<details class="check" data-tier="extra"><summary>Extra: A herbicide blocks electron transfer from photosystem II to plastoquinone. Predict what happens to O<sub>2</sub> release, NADPH and ATP production, and the plant.</summary><div class="ans"><p>Electrons can't leave PSII, so P680 can't take more electrons from water: <strong>photolysis and O<sub>2</sub> release stop</strong>. No electrons reach PSI from PSII, so <strong>NADPH production stops</strong>, and with no electron flow through the chain, H<sup>+</sup> pumping and <strong>ATP production mostly stop</strong> (cyclic flow might make a little ATP). Without NADPH the Calvin cycle can't fix CO<sub>2</sub>, so the plant can't make sugar and eventually starves.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
<li>Light reactions: in the <strong>thylakoids</strong>. Goal: turn light energy into chemical energy, <strong>ATP and NADPH</strong> (NADPH = high-energy electron carrier in plants).</li>
<li>In: light, <strong>H<sub>2</sub>O</strong>, ADP + P<sub>i</sub>, NADP<sup>+</sup>. Out: <strong>O<sub>2</sub></strong>, ATP, NADPH. The O<sub>2</sub> comes from water, not CO<sub>2</sub> (H<sub>2</sub>O in, O<sub>2</sub> <strong>out</strong>).</li>
<li><strong>Photosystems</strong>: embedded in the thylakoid membrane; chlorophyll + accessory pigments; <strong>antenna complex</strong> (absorbs photons, passes energy on) + <strong>reaction centre</strong> (chlorophyll a's electron is excited and captured by the primary electron acceptor).</li>
<li><strong>PSII = P680</strong>, <strong>PSI = P700</strong>. PSII acts <strong>first</strong> (named in order of discovery).</li>
<li><strong>Excitation</strong>: a photon raises an electron from the ground state. Outside a cell it falls back, releasing heat and light (<strong>fluorescence</strong>); in a cell the <strong>primary electron acceptor</strong> captures it.</li>
<li><strong>Non-cyclic flow</strong>: H<sub>2</sub>O → <strong>PSII → PQ → cytochrome b6-f → PC → PSI → Fd → NADP<sup>+</sup> reductase</strong> → NADPH. Two photons at each photosystem per pair of electrons.</li>
<li><strong>Photolysis</strong> (Z protein, at PSII): H<sub>2</sub>O → 2 H<sup>+</sup> + 2 e<sup>−</sup> + ½ O<sub>2</sub>. Electrons refill P680; H<sup>+</sup> stays in the lumen; O<sub>2</sub> is a by-product.</li>
<li>H<sup>+</sup> is pumped from the stroma into the <strong>thylakoid lumen</strong> (active transport), building an <strong>electrochemical gradient</strong>.</li>
<li><strong>Photophosphorylation</strong>: H<sup>+</sup> flows lumen → stroma through <strong>ATP synthase</strong> (chemiosmosis), making ATP in the stroma: <strong>1 ATP per 4 H<sup>+</sup></strong> (class value).</li>
<li>PSI re-energizes the electrons; Fd and NADP<sup>+</sup> reductase use 2 e<sup>−</sup> to reduce <strong>NADP<sup>+</sup> → NADPH</strong> in the stroma. NADP<sup>+</sup> is the final electron acceptor.</li>
<li><strong>Z scheme</strong>: energy diagram of non-cyclic flow, with two light-driven boosts; two photosystems are needed because one boost can't lift electrons from water to NADPH.</li>
<li><strong>Cyclic photophosphorylation</strong>: PSI only; P700 → Fd → PQ / b6-f (Q cycle) → PC → P700; pumps extra H<sup>+</sup> for <strong>ATP only</strong>, with <strong>no O<sub>2</sub> and no NADPH</strong>. Needed because the Calvin cycle uses <strong>18 ATP : 12 NADPH</strong>.</li>
<li>Compared with the mitochondrial ETC: same idea (ETC, H<sup>+</sup> gradient, ATP synthase), but light vs food, water vs NADH/FADH<sub>2</sub>, NADP<sup>+</sup> vs O<sub>2</sub> as final acceptor, lumen vs intermembrane space, stroma vs matrix.</li>
<li><strong>Shade</strong> → less ATP and NADPH (adaptations: broader, thinner leaves, more chlorophyll). <strong>Night</strong> → no light reactions; the Calvin cycle continues only briefly, until stored ATP and NADPH run out.</li>
</ul>
`
});
