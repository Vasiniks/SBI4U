window.EXT = window.EXT || [];

window.EXT.push(
  {
    id: "xc01",
    lesson: "2.08",
    level: "apply",
    tier: "essential",
    title: "Who is oxidized in photosynthesis? Following electrons and oxygen atoms",
    prompt: `<div class="eq">6 CO<sub>2</sub> + 6 H<sub>2</sub>O + light energy → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub></div>
<ol>
<li>Which reactant is oxidized and which is reduced? Explain using hydrogen atoms and electrons.</li>
<li>A classmate says, "The O<sub>2</sub> must come from CO<sub>2</sub>, because CO<sub>2</sub> has two oxygen atoms, just like O<sub>2</sub>." Explain why this is wrong, and say where the O<sub>2</sub> really comes from.</li>
<li>Count the oxygen atoms on each side of the equation above. Why do many textbooks prefer to write the equation with 12 H<sub>2</sub>O on the left and 6 H<sub>2</sub>O on the right?</li>
<li>Photosynthesis is called <em>anabolic</em> and <em>endergonic</em>. Explain each term using this equation.</li>
<li>Name the two energy carriers that link light energy to the reduction of CO<sub>2</sub>, and state where in the chloroplast each stage of photosynthesis takes place.</li>
</ol>`,
    hints: [
      "Follow the hydrogens. Water has H atoms and O<sub>2</sub> has none. CO<sub>2</sub> has no H atoms and glucose has 12. Each H atom carries an electron with it.",
      "When water is split in the light reactions (photolysis), what three things are released?",
      "6 O<sub>2</sub> contains 12 oxygen atoms. How many oxygen atoms do 6 H<sub>2</sub>O molecules have?"
    ],
    answer: `<p><strong>a.</strong> <strong>Water is oxidized.</strong> It loses its hydrogen atoms (each one an electron plus a proton) and is left as O<sub>2</sub>. <strong>CO<sub>2</sub> is reduced.</strong> It gains hydrogen atoms, and therefore electrons, and becomes glucose. So water is the electron donor (reducing agent) and CO<sub>2</sub> is the electron acceptor. The electrons do not jump straight from water to CO<sub>2</sub>: light energizes them in the photosystems, NADP<sup>+</sup> carries them as NADPH, and the Calvin cycle uses NADPH to reduce carbon.</p>
<p><strong>b.</strong> The O<sub>2</sub> comes from <strong>water</strong>. In <span class="term">photolysis</span> at photosystem II, the water-splitting enzyme breaks each H<sub>2</sub>O into 2 H<sup>+</sup>, 2 e<sup>−</sup> and one oxygen atom; two oxygen atoms join as O<sub>2</sub>, which leaves as a by-product. The oxygen atoms of CO<sub>2</sub> end up in glucose (and in new water). This was shown with the heavy isotope <sup>18</sup>O: when the label was put in water, the released O<sub>2</sub> was labelled; when it was put in CO<sub>2</sub>, the O<sub>2</sub> was not.</p>
<p><strong>c.</strong> Left: 12 O (in 6 CO<sub>2</sub>) + 6 O (in 6 H<sub>2</sub>O) = 18. Right: 6 O (in glucose) + 12 O (in 6 O<sub>2</sub>) = 18. The equation balances, but it hides the truth: if all 12 oxygen atoms in the O<sub>2</sub> come from water, you need 12 H<sub>2</sub>O split, not 6. The fuller equation is 6 CO<sub>2</sub> + 12 H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> + 6 H<sub>2</sub>O. Now the 12 water molecules supply all 12 oxygen atoms of the O<sub>2</sub>, and the oxygen atoms of CO<sub>2</sub> go into glucose and the 6 new water molecules.</p>
<p><strong>d.</strong> <span class="term">Anabolic</span>: it builds a large, complex molecule (glucose, 24 atoms) from small, simple ones (CO<sub>2</sub> and H<sub>2</sub>O). <span class="term">Endergonic</span>: the products have more free energy than the reactants (about +2870 kJ per mole of glucose, the exact reverse of respiration), so the reaction needs an energy input. That input is light.</p>
<p><strong>e.</strong> <strong>ATP</strong> (chemical energy) and <strong>NADPH</strong> (high-energy electrons). The <strong>light reactions</strong> make them in the <strong>thylakoid membranes</strong>; the <strong>Calvin cycle</strong> uses them in the <strong>stroma</strong> to turn CO<sub>2</sub> into sugar.</p>`,
    marks: 5
  },
  {
    id: "xc02",
    lesson: "2.08",
    level: "analyze",
    tier: "likely",
    title: "Reading an absorption spectrum against an action spectrum",
    prompt: `<p>A student measured how strongly three pigments extracted from spinach absorb light (relative absorbance, 0–100). A second experiment measured the rate of O<sub>2</sub> production by a leaf lit with each wavelength at equal intensity (as a percentage of the maximum).</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Wavelength (nm)</th><th>430</th><th>450</th><th>480</th><th>550</th><th>600</th><th>640</th><th>660</th><th>700</th></tr></thead>
<tbody>
<tr><td>Chlorophyll a</td><td>95</td><td>40</td><td>10</td><td>5</td><td>15</td><td>30</td><td>85</td><td>8</td></tr>
<tr><td>Chlorophyll b</td><td>40</td><td>95</td><td>50</td><td>5</td><td>10</td><td>70</td><td>25</td><td>2</td></tr>
<tr><td>Carotenoids</td><td>50</td><td>90</td><td>85</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
<tr><td>O<sub>2</sub> production (% of max)</td><td>90</td><td>95</td><td>80</td><td>30</td><td>50</td><td>85</td><td>100</td><td>20</td></tr>
</tbody></table></div>
<ol>
<li>Use the data to explain why leaves look green.</li>
<li>At 480 nm chlorophyll a absorbs very little light, yet O<sub>2</sub> production is still 80% of maximum. Explain.</li>
<li>O<sub>2</sub> production at 550 nm is 30% even though all three extracted pigments barely absorb there. Suggest a reason.</li>
<li>A greenhouse grower wants to light seedlings with LEDs of only two colours. Which two wavelengths from the table would you recommend, and why would 550 nm and 700 nm be poor choices?</li>
<li>Define <em>absorption spectrum</em> and <em>action spectrum</em>, and explain why the action spectrum of a leaf is broader than the absorption spectrum of chlorophyll a alone.</li>
</ol>`,
    hints: [
      "Light that is not absorbed is either reflected or transmitted. Which colour is that?",
      "Accessory pigments do not run photosynthesis themselves. Where do they send the energy they absorb?",
      "A real leaf is many cell layers thick and full of chloroplasts. What happens to a photon that is not absorbed by the first chloroplast it meets?"
    ],
    answer: `<p><strong>a.</strong> At 550 nm (green), every pigment has an absorbance of 5 or less, so green light is mostly <strong>reflected or transmitted</strong>, not absorbed. That reflected light reaches your eyes. In the blue-violet (430–480 nm) and red (640–660 nm) regions, the pigments absorb strongly, so little of that light is reflected.</p>
<p><strong>b.</strong> At 480 nm, <strong>carotenoids</strong> (85) and <strong>chlorophyll b</strong> (50) absorb strongly. These are <span class="term">accessory pigments</span> in the antenna complex. They pass the absorbed energy to chlorophyll a in the reaction centre, which then gives up an excited electron. So light that chlorophyll a cannot catch directly still drives photosynthesis.</p>
<p><strong>c.</strong> Any reasonable reason, for example: (1) a leaf is many cell layers thick, and green light that passes through one chloroplast is scattered and meets many more, so a little absorption per chloroplast adds up; (2) pigments bound to proteins in the thylakoid membrane absorb a slightly wider range than pigments dissolved in a solvent; (3) the small absorbance by each pigment at 550 nm is not zero. This is why plants use some green light, even though they look green.</p>
<p><strong>d.</strong> Choose about <strong>450 nm (blue)</strong> and <strong>660 nm (red)</strong>: these give 95–100% of maximum O<sub>2</sub> production, and both chlorophylls plus the carotenoids are well covered. 550 nm is poor because little is absorbed (30%). 700 nm is poor (20%) because it is at the far edge of chlorophyll a's red peak; photons this long are absorbed weakly and mainly by photosystem I, so photosystem II and non-cyclic flow cannot keep up. This is why many grow lights look purple-pink.</p>
<p><strong>e.</strong> An <span class="term">absorption spectrum</span> is a graph of how much light one pigment (or mixture) absorbs at each wavelength. An <span class="term">action spectrum</span> is a graph of how effective each wavelength is at driving a process, here measured as the rate of O<sub>2</sub> production. The leaf's action spectrum is broader than chlorophyll a's absorption spectrum because all the pigments together absorb across the visible range (the class idea of PAR), and the accessory pigments funnel their energy into chlorophyll a. The action spectrum matches the <em>combined</em> absorption of all the pigments much better than it matches chlorophyll a alone.</p>`,
    marks: 6
  },
  {
    id: "xc03",
    lesson: "2.08",
    level: "analyze",
    tier: "likely",
    title: "Calculating Rf values from a spinach chromatogram",
    prompt: `<p>A group ran the class chromatography lab with a spinach extract. All distances were measured from the pencil origin line to the top of each band.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Band</th><th>Colour</th><th>Distance moved (mm)</th></tr></thead>
<tbody>
<tr><td>1 (top)</td><td>yellow-orange</td><td>81</td></tr>
<tr><td>2</td><td>yellow</td><td>55</td></tr>
<tr><td>3</td><td>blue-green</td><td>42</td></tr>
<tr><td>4 (lowest)</td><td>yellow-green / olive</td><td>29</td></tr>
<tr><td colspan="2">Solvent front</td><td>84</td></tr>
</tbody></table></div>
<ol>
<li>Calculate the R<sub>f</sub> value of each band (2 decimal places) and identify the pigment in each band.</li>
<li>Explain why band 1 travels the farthest.</li>
<li>State the structural difference between chlorophyll a and chlorophyll b, and use it to explain why their R<sub>f</sub> values differ.</li>
<li>Another group let their solvent run only 60 mm, and their blue-green band moved 30 mm. Show that the two groups' results agree, and explain why R<sub>f</sub> values, not distances, are compared.</li>
<li>Predict what would go wrong if (i) the origin line were drawn in pen, and (ii) the pigment line sat below the surface of the solvent.</li>
</ol>`,
    hints: [
      "R<sub>f</sub> = distance moved by the pigment ÷ distance moved by the solvent front, both measured from the origin line. R<sub>f</sub> has no units.",
      "The solvent is much less polar than the cellulose paper, which holds water. Which pigment is a pure hydrocarbon with no polar groups?",
      "Chlorophyll b has a –CHO (aldehyde) group where chlorophyll a has a –CH<sub>3</sub> group. Which one is more polar?"
    ],
    answer: `<p><strong>a.</strong></p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Band</th><th>R<sub>f</sub></th><th>Pigment</th></tr></thead>
<tbody>
<tr><td>1</td><td>81 ÷ 84 = 0.96</td><td>carotene (β-carotene)</td></tr>
<tr><td>2</td><td>55 ÷ 84 = 0.65</td><td>xanthophyll</td></tr>
<tr><td>3</td><td>42 ÷ 84 = 0.50</td><td>chlorophyll a</td></tr>
<tr><td>4</td><td>29 ÷ 84 = 0.35</td><td>chlorophyll b</td></tr>
</tbody></table></div>
<p><strong>b.</strong> Carotene is a long hydrocarbon chain with no oxygen-containing groups, so it is the <strong>most nonpolar</strong> pigment. It is the most soluble in the nonpolar solvent and the least attracted to the polar paper, so it stays dissolved and moves almost as fast as the solvent front (R<sub>f</sub> close to 1). Xanthophylls are carotenoids with added oxygen-containing groups (such as –OH), which makes them more polar, so they lag behind carotene.</p>
<p><strong>c.</strong> Chlorophyll b has an <strong>aldehyde group (–CHO)</strong> where chlorophyll a has a <strong>methyl group (–CH<sub>3</sub>)</strong>. The C=O in the aldehyde makes chlorophyll b more polar. It is therefore less soluble in the nonpolar solvent and more strongly attracted to (adsorbed onto) the polar paper, so it spends more time stuck to the paper and moves a shorter distance: lower R<sub>f</sub> (0.35 vs 0.50).</p>
<p><strong>d.</strong> 30 ÷ 60 = 0.50, the same R<sub>f</sub> as chlorophyll a in the first group. Distances depend on how long the run lasted and how far the solvent travelled, which differ between groups. R<sub>f</sub> divides by the solvent distance, so it is a <strong>ratio</strong> that stays constant for a given pigment, solvent and paper. That makes it useful for identifying pigments.</p>
<p><strong>e.</strong> (i) Pen ink is made of dyes that dissolve in the solvent. They would separate into coloured streaks that mix with the pigment bands, and you would lose the origin line you measure from. Pencil (graphite) does not dissolve. (ii) The pigments would dissolve out into the solvent pool in the beaker instead of being carried up the paper, giving faint bands or none at all. This is why the lab says to keep the pigment line about 1 cm above the solvent.</p>`,
    marks: 6
  },
  {
    id: "xc04",
    lesson: "2.08",
    level: "apply",
    tier: "likely",
    title: "Why a maple turns orange and red but a birch only turns yellow",
    prompt: `<p>In summer, the leaves of a sugar maple and a white birch growing side by side are both green. In early October, after a stretch of sunny days and cold (but not freezing) nights, the birch leaves are bright yellow, and the maple leaves are orange and scarlet red.</p>
<ol>
<li>The yellow and orange colours appear in fall, yet the trees do not make new carotenoids or xanthophylls at that time. Explain where these colours come from.</li>
<li>Why were the yellow-orange pigments not visible in summer?</li>
<li>The red colour in the maple <em>is</em> made in the fall. Name the pigment and suggest why sunny days followed by cold nights make the reds brighter.</li>
<li>Use your answers to explain the difference between the birch and the maple.</li>
<li>Suggest one benefit to the tree of breaking down its chlorophyll before the leaves fall.</li>
</ol>`,
    hints: [
      "Carotenoids and xanthophylls are in the chloroplasts all summer. What happens to chlorophyll as days get shorter and colder?",
      "Red anthocyanins are built from sugar. What happens to sugar made in a leaf on a sunny day if cold nights slow its export to the rest of the tree?",
      "Chlorophyll contains nitrogen and a magnesium ion, and it is bound to proteins. Are these easy for a tree to get from the soil?"
    ],
    answer: `<p><strong>a.</strong> <span class="term">Carotenoids</span> (yellow-orange, e.g. β-carotene) and <span class="term">xanthophylls</span> (yellow) are accessory pigments that are present in the chloroplasts all summer. In fall, shorter days and cooler temperatures signal the tree to stop making chlorophyll. Chlorophyll breaks down and is not replaced, so the yellow and orange pigments that were already there are <strong>unmasked</strong>.</p>
<p><strong>b.</strong> In summer there is much more chlorophyll than carotenoid in each chloroplast, so chlorophyll's strong absorption of red and blue-violet light dominates. The leaf reflects mostly green light, and the yellow-orange colour is hidden (masked).</p>
<p><strong>c.</strong> <span class="term">Anthocyanins</span> (red). Unlike the other pigments, they are newly made in fall (and stored in the vacuole), and they are built from sugars. Sunny days let the leaf keep making sugar by photosynthesis, and cold nights slow the export of that sugar out of the leaf. Sugar builds up in the leaf and is used to make more anthocyanin, so the reds are brighter. (Anthocyanins are also thought to act like sunscreen, protecting the leaf's chloroplasts while useful nutrients are pulled back out.)</p>
<p><strong>d.</strong> Both trees lose chlorophyll and reveal their carotenoids and xanthophylls (yellow-orange). Only the maple makes large amounts of anthocyanin in fall, so it adds red. The birch makes little or none, so its leaves show only the unmasked yellow.</p>
<p><strong>e.</strong> Chlorophyll molecules and the proteins they are bound to contain valuable <strong>nitrogen</strong>, and each chlorophyll holds a <strong>magnesium</strong> ion. Breaking them down lets the tree move these nutrients into its branches and roots to reuse next spring, instead of losing them when the leaves fall.</p>`,
    marks: 5
  },
  {
    id: "xc05",
    lesson: "2.09",
    level: "apply",
    tier: "essential",
    title: "Trace one electron from water to NADPH",
    prompt: `<p>These are the stops an electron makes during non-cyclic electron flow, in scrambled order:</p>
<p>plastocyanin (PC) · NADP<sup>+</sup> · ferredoxin (Fd) · P680 · water · NADP<sup>+</sup> reductase · plastoquinone (PQ) · P700 · cytochrome b<sub>6</sub>-f complex · primary electron acceptor (use twice)</p>
<ol>
<li>Put the stops in order, starting with water and ending with NADP<sup>+</sup>.</li>
<li>At which two points is light energy absorbed? Why does the electron need two separate "boosts"?</li>
<li>Name the two ways H<sup>+</sup> ions build up in the thylakoid lumen during non-cyclic flow.</li>
<li>After P680 loses an electron, what replaces it? After P700 loses an electron, what replaces it?</li>
<li>In which compartment are ATP and NADPH released, and why is that the right place for them?</li>
</ol>`,
    hints: [
      "Photosystem II acts first, even though it is numbered II. Its ETC is PQ → cytochrome complex → PC.",
      "An electron loses some energy at every carrier. Could one photon's energy lift it high enough to reduce NADP<sup>+</sup> after it has pumped protons?",
      "The class review key: PSII gets its electrons from water; PSI gets its electrons from the ETC."
    ],
    answer: `<p><strong>a.</strong> water → <strong>P680</strong> (photosystem II) → primary electron acceptor → <strong>plastoquinone (PQ)</strong> → <strong>cytochrome b<sub>6</sub>-f complex</strong> → <strong>plastocyanin (PC)</strong> → <strong>P700</strong> (photosystem I) → primary electron acceptor → <strong>ferredoxin (Fd)</strong> → <strong>NADP<sup>+</sup> reductase</strong> → NADP<sup>+</sup> (reduced to NADPH).</p>
<p><strong>b.</strong> Light is absorbed at <strong>photosystem II (P680)</strong> and again at <strong>photosystem I (P700)</strong>. After the first boost, the electron loses energy as it passes down the ETC from PQ to PC, and that energy is used to pump H<sup>+</sup>. By the time it reaches PSI it no longer has enough energy to reduce NADP<sup>+</sup>, so a second photon re-energizes it. On the Z scheme this is the second upward arrow.</p>
<p><strong>c.</strong> (1) <strong>Photolysis</strong>: splitting water on the lumen side of PSII releases 2 H<sup>+</sup> per water molecule directly into the lumen. (2) <strong>Pumping</strong>: as electrons pass through PQ and the cytochrome b<sub>6</sub>-f complex, H<sup>+</sup> is carried from the stroma across the membrane into the lumen. (Using H<sup>+</sup> from the stroma to make NADPH also lowers the stroma's H<sup>+</sup> concentration, which adds to the gradient.)</p>
<p><strong>d.</strong> P680 gets electrons from <strong>water</strong>, split by the water-splitting enzyme (the "Z protein," or oxygen-evolving complex). P700 gets electrons from the <strong>ETC</strong>: the same electrons that left PSII, delivered by plastocyanin.</p>
<p><strong>e.</strong> Both are released into the <strong>stroma</strong>. ATP synthase faces the stroma (H<sup>+</sup> flows from the lumen out into the stroma), and NADP<sup>+</sup> reductase sits on the stroma side of the membrane. The stroma is exactly where the Calvin cycle runs, so the ATP and NADPH are made right where they are used.</p>`,
    marks: 5
  },
  {
    id: "xc06",
    lesson: "2.09",
    level: "analyze",
    tier: "likely",
    title: "Elodea in the light: oxygen output and light intensity",
    prompt: `<p>Sprigs of the pond plant <em>Elodea</em> were placed in water at 20 °C and lit at different light intensities. Net O<sub>2</sub> exchange was measured (positive = O<sub>2</sub> released, negative = O<sub>2</sub> taken in). The experiment was repeated with sodium hydrogen carbonate (a CO<sub>2</sub> source) added to the water.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Light intensity (units)</th><th>0</th><th>50</th><th>100</th><th>200</th><th>400</th><th>800</th><th>1200</th></tr></thead>
<tbody>
<tr><td>Net O<sub>2</sub>, plain water (μmol/g/h)</td><td>−10</td><td>2</td><td>14</td><td>38</td><td>62</td><td>70</td><td>70</td></tr>
<tr><td>Net O<sub>2</sub>, extra CO<sub>2</sub> (μmol/g/h)</td><td>−10</td><td>2</td><td>14</td><td>38</td><td>78</td><td>102</td><td>104</td></tr>
</tbody></table></div>
<ol>
<li>Explain why net O<sub>2</sub> exchange is negative at a light intensity of 0.</li>
<li>Estimate the light intensity at which net O<sub>2</sub> exchange is zero (the <em>light compensation point</em>). What is happening in the plant at this intensity?</li>
<li>Assuming respiration stays constant, calculate the <em>gross</em> rate of O<sub>2</sub> production at 400 units in plain water.</li>
<li>Identify the factor limiting the rate between 0 and 200 units, and the factor limiting it at 800–1200 units in plain water. Use both rows of data to justify your answers.</li>
<li>Explain, in terms of the light reactions and the Calvin cycle, why increasing light intensity beyond about 800 units does not increase O<sub>2</sub> output in plain water.</li>
</ol>`,
    hints: [
      "Plants have mitochondria. Do they respire in the dark? In the light?",
      "Net O<sub>2</sub> = O<sub>2</sub> made by photosynthesis − O<sub>2</sub> used by respiration.",
      "A factor is limiting if increasing it increases the rate. Compare the two rows: where do they start to differ?"
    ],
    answer: `<p><strong>a.</strong> With no light, the light reactions stop, so no water is split and no O<sub>2</sub> is made. The plant's cells still carry out <strong>cellular respiration</strong> in their mitochondria, using O<sub>2</sub> as the final electron acceptor. So the plant takes in O<sub>2</sub> (−10 μmol/g/h).</p>
<p><strong>b.</strong> Net O<sub>2</sub> goes from −10 at 0 units to +2 at 50 units, rising 12 per 50 units, so it reaches zero at about <strong>40–45 units</strong> (−10 + 0.24 × 42 ≈ 0). At the compensation point the rate of photosynthesis exactly equals the rate of respiration: all the O<sub>2</sub> made by photolysis is used by the mitochondria, and all the CO<sub>2</sub> released by respiration is fixed by the Calvin cycle. There is no net gain of sugar, so a plant cannot grow if it is kept at or below this light level.</p>
<p><strong>c.</strong> Gross = net + respiration = 62 + 10 = <strong>72 μmol O<sub>2</sub>/g/h</strong>.</p>
<p><strong>d.</strong> <strong>0–200 units: light intensity is limiting.</strong> The rate rises steadily with light, and adding CO<sub>2</sub> makes no difference (both rows are identical up to 200). <strong>800–1200 units in plain water: CO<sub>2</sub> is limiting</strong> (temperature could also contribute). More light gives no increase (70 → 70), but adding CO<sub>2</sub> raises the rate to 102–104, so CO<sub>2</sub> supply was holding it back.</p>
<p><strong>e.</strong> The light reactions can only run as fast as their products are used. At high light, the photosystems can excite plenty of electrons, but the Calvin cycle cannot fix CO<sub>2</sub> any faster, because RuBisCO is short of CO<sub>2</sub>. ATP and NADPH are therefore used more slowly, so ADP, P<sub>i</sub> and NADP<sup>+</sup> are returned to the thylakoids more slowly. With little NADP<sup>+</sup> available to accept electrons, non-cyclic flow (and therefore water splitting and O<sub>2</sub> release) slows to match the Calvin cycle. The two stages are coupled: each one needs the other's products.</p>`,
    marks: 6
  },
  {
    id: "xc07",
    lesson: "2.09",
    level: "analyze",
    tier: "likely",
    title: "Why plants need cyclic electron flow: an ATP budget",
    prompt: `<p>Use these simplified values, taken from the class diagram:</p>
<ul>
<li>Each <strong>pair</strong> of electrons that travels from water to NADP<sup>+</sup> (non-cyclic flow) puts <strong>4 H<sup>+</sup></strong> into the lumen: 2 from photolysis and 2 pumped at the cytochrome complex. It also makes 1 NADPH.</li>
<li>Each pair of electrons that goes once around the cyclic pathway (P700 → Fd → PQ/cytochrome complex → PC → P700) pumps <strong>2 H<sup>+</sup></strong>.</li>
<li>ATP synthase makes <strong>1 ATP per 4 H<sup>+</sup></strong> (class value).</li>
<li>The Calvin cycle needs <strong>18 ATP and 12 NADPH</strong> per glucose.</li>
</ul>
<ol>
<li>How many ATP and how many NADPH does one pair of electrons make in non-cyclic flow?</li>
<li>To make the 12 NADPH needed for one glucose: how many electrons pass through non-cyclic flow, how many water molecules are split, how many O<sub>2</sub> are released, and how many ATP are made?</li>
<li>What is the ATP shortfall, and how many pairs of electrons must go around the cyclic pathway to make it up?</li>
<li>Each electron needs one photon at each photosystem it passes through. How many photons are absorbed in total per glucose?</li>
<li>Explain why a plant cannot solve the ATP shortfall by simply running more non-cyclic flow.</li>
</ol>`,
    hints: [
      "Non-cyclic: 4 H<sup>+</sup> per pair and 4 H<sup>+</sup> per ATP. Each NADPH needs 2 electrons; each water molecule gives 2 electrons; 2 water molecules give one O<sub>2</sub>.",
      "Cyclic: 2 H<sup>+</sup> per pair, so how many H<sup>+</sup> do you need for the missing ATP?",
      "In non-cyclic flow every electron passes through PSII and PSI. In cyclic flow it only passes through PSI."
    ],
    answer: `<p><strong>a.</strong> 4 H<sup>+</sup> ÷ 4 H<sup>+</sup> per ATP = <strong>1 ATP</strong>, plus <strong>1 NADPH</strong>. Non-cyclic flow makes ATP and NADPH in a fixed 1 : 1 ratio (with these values).</p>
<p><strong>b.</strong> 12 NADPH × 2 e<sup>−</sup> = <strong>24 electrons</strong> (12 pairs). Each water gives 2 e<sup>−</sup>, so <strong>12 H<sub>2</sub>O</strong> are split, releasing 12 O atoms = <strong>6 O<sub>2</sub></strong> (the 6 O<sub>2</sub> in the overall equation). 12 pairs × 1 ATP = <strong>12 ATP</strong>.</p>
<p><strong>c.</strong> Shortfall = 18 − 12 = <strong>6 ATP</strong>. 6 ATP × 4 H<sup>+</sup> = 24 H<sup>+</sup> needed. Each cyclic pair pumps 2 H<sup>+</sup>, so 24 ÷ 2 = <strong>12 pairs</strong> (24 electrons) must cycle. Cyclic flow makes no NADPH and no O<sub>2</sub>, which is exactly what is needed: extra ATP only.</p>
<p><strong>d.</strong> Non-cyclic: 24 e<sup>−</sup> × 2 photons (one at PSII, one at PSI) = 48 photons. Cyclic: 24 e<sup>−</sup> × 1 photon (PSI only) = 24 photons. Total = <strong>72 photons per glucose</strong> with these simplified numbers.</p>
<p><strong>e.</strong> Non-cyclic flow always makes NADPH and ATP together. Running more of it would make the extra ATP but also extra NADPH that the Calvin cycle cannot use. NADPH would pile up, NADP<sup>+</sup> would run out, and with no electron acceptor at the end of the chain, non-cyclic flow would stop. Cyclic flow uncouples ATP production from NADPH production. In fact, when NADP<sup>+</sup> runs low, ferredoxin passes its electrons back to the PQ/cytochrome part of the chain instead, so cyclic flow switches on automatically when it is needed.</p>
<div class="callout key"><p class="callout-title">Real numbers, same conclusion</p><p>Real chloroplasts move about 6 H<sup>+</sup> per pair of electrons in non-cyclic flow (the cytochrome b<sub>6</sub>-f complex's Q cycle moves 4, photolysis 2), and chloroplast ATP synthase needs about 4.7 H<sup>+</sup> per ATP. That gives about 1.3 ATP per NADPH, still less than the 1.5 ATP per NADPH (18 : 12) the Calvin cycle needs. Cyclic flow is still required.</p></div>`,
    marks: 6
  },
  {
    id: "xc08",
    lesson: "2.09",
    level: "extend",
    tier: "extra",
    title: "Herbicides that hijack the light reactions",
    prompt: `<p>Several herbicides kill weeds by interfering with the light reactions.</p>
<ul>
<li><strong>DCMU</strong> (diuron) and <strong>atrazine</strong> bind to photosystem II at the site where plastoquinone (PQ) normally picks up electrons, so electrons cannot leave PSII.</li>
<li><strong>Paraquat</strong> takes electrons from the acceptor side of photosystem I (where ferredoxin would normally take them) and passes them to O<sub>2</sub>, making the reactive superoxide radical (O<sub>2</sub><sup>−</sup>), which damages membranes.</li>
</ul>
<ol>
<li>Predict the effect of DCMU on (i) O<sub>2</sub> release, (ii) NADPH production, (iii) ATP made by non-cyclic flow. Could any ATP still be made? Explain.</li>
<li>In an experiment, isolated chloroplasts treated with DCMU are given an artificial chemical that donates electrons directly to plastocyanin. Which product(s) of the light reactions would be restored, and which would not?</li>
<li>Explain why the NADPH level in paraquat-treated leaves falls, and why paraquat kills leaves much faster in bright sunlight than in the dark.</li>
<li>Explain why the Calvin cycle stops within minutes in both DCMU-treated and paraquat-treated plants, even though neither herbicide acts on a Calvin cycle enzyme.</li>
</ol>`,
    hints: [
      "If electrons cannot leave PSII, can P680 accept new electrons from water?",
      "Where does an electron donated to plastocyanin go next? Which parts of the chain does it skip?",
      "Paraquat only gets electrons when PSI is being excited. What drives PSI?"
    ],
    answer: `<p><strong>a.</strong> (i) <strong>O<sub>2</sub> release stops.</strong> P680 cannot pass its excited electron on, so it cannot accept electrons from water, and photolysis stops. (ii) <strong>NADPH production stops</strong>, because no electrons reach PSI from PSII, so there are none to pass to ferredoxin and NADP<sup>+</sup>. (iii) <strong>Non-cyclic ATP production stops</strong>: no electron flow through PQ and the cytochrome complex means no pumping, and no photolysis means no H<sup>+</sup> from water. A little ATP could still be made by <strong>cyclic flow</strong>, which uses only PSI and enters the chain after the DCMU block (PQ/cytochrome complex). Cyclic flow recycles the same electrons, so it does not need water, but some electrons leak out of the loop (for example to O<sub>2</sub>), and with PSII blocked they cannot be replaced. In a living leaf, cyclic flow soon slows down too.</p>
<p><strong>b.</strong> Electrons donated to plastocyanin go to P700, then (after excitation at PSI) to Fd and NADP<sup>+</sup> reductase. So <strong>NADPH production is restored</strong>. <strong>O<sub>2</sub> release is not restored</strong>, because PSII and water splitting are still blocked. ATP from non-cyclic flow is largely <strong>not restored</strong>, because these electrons skip the PQ/cytochrome complex step where H<sup>+</sup> is pumped, and no H<sup>+</sup> comes from water. (Experiments like this helped show that the two photosystems work in series.)</p>
<p><strong>c.</strong> Paraquat diverts the electrons that would have reduced ferredoxin and NADP<sup>+</sup>, so <strong>NADPH falls</strong>. Paraquat only receives electrons when PSI is excited by light, so in bright light it makes superoxide very fast; superoxide and other reactive oxygen species destroy membrane lipids, and the leaf wilts and dies within hours. In the dark, no electrons flow, so little superoxide is made. The paraquat molecule is also regenerated each time it passes its electron to O<sub>2</sub>, so one molecule makes superoxide over and over.</p>
<p><strong>d.</strong> The Calvin cycle needs a steady supply of <strong>ATP and NADPH</strong> from the light reactions (phase 2 uses both; phase 3 uses ATP to regenerate RuBP). Once the stored supply is used up, PGA cannot be reduced and RuBP cannot be regenerated, so carbon fixation stops. This is the same reason the Calvin cycle stops shortly after dark.</p>`,
    marks: 6
  },
  {
    id: "xc09",
    lesson: "2.10",
    level: "apply",
    tier: "essential",
    title: "Carbon bookkeeping in the Calvin cycle",
    prompt: `<p>Copy and complete the table for the Calvin cycle.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Quantity</th><th>Per 3 CO<sub>2</sub> fixed</th><th>Per 6 CO<sub>2</sub> fixed</th></tr></thead>
<tbody>
<tr><td>RuBP used in carbon fixation</td><td></td><td></td></tr>
<tr><td>PGA formed</td><td></td><td></td></tr>
<tr><td>ATP used in the reduction phase</td><td></td><td></td></tr>
<tr><td>NADPH used</td><td></td><td></td></tr>
<tr><td>G3P formed</td><td></td><td></td></tr>
<tr><td>G3P leaving the cycle</td><td></td><td></td></tr>
<tr><td>G3P used to regenerate RuBP</td><td></td><td></td></tr>
<tr><td>ATP used in regeneration</td><td></td><td></td></tr>
<tr><td>Total ATP / total NADPH</td><td></td><td></td></tr>
</tbody></table></div>
<ol>
<li>Complete the table.</li>
<li>Show that carbon atoms are conserved in phase 1 and in phase 3 for 3 CO<sub>2</sub>.</li>
<li>A student's notes say "since 6 PGA run through phase 2, 12 G3P are made, 2 G3P per PGA." Find and correct the error.</li>
<li>How many CO<sub>2</sub>, ATP and NADPH are needed to make one molecule of sucrose (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>)?</li>
</ol>`,
    hints: [
      "Phase 1: 3 CO<sub>2</sub> + 3 RuBP (5C) → 3 unstable 6C intermediates → 6 PGA (3C).",
      "Phase 2 uses one ATP and one NADPH for each PGA. Phase 3 uses one ATP for each RuBP made.",
      "Per 3 CO<sub>2</sub>: 1 G3P leaves. How many G3P (3 carbons each) are needed for a 12-carbon sugar?"
    ],
    answer: `<p><strong>a.</strong></p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Quantity</th><th>Per 3 CO<sub>2</sub></th><th>Per 6 CO<sub>2</sub> (1 glucose)</th></tr></thead>
<tbody>
<tr><td>RuBP used in carbon fixation</td><td>3</td><td>6</td></tr>
<tr><td>PGA formed</td><td>6</td><td>12</td></tr>
<tr><td>ATP used in the reduction phase</td><td>6</td><td>12</td></tr>
<tr><td>NADPH used</td><td>6</td><td>12</td></tr>
<tr><td>G3P formed</td><td>6</td><td>12</td></tr>
<tr><td>G3P leaving the cycle</td><td>1</td><td>2 (→ 1 glucose)</td></tr>
<tr><td>G3P used to regenerate RuBP</td><td>5</td><td>10</td></tr>
<tr><td>ATP used in regeneration</td><td>3</td><td>6</td></tr>
<tr><td>Total ATP / total NADPH</td><td>9 / 6</td><td>18 / 12</td></tr>
</tbody></table></div>
<p><strong>b.</strong> Phase 1: 3 CO<sub>2</sub> (3 C) + 3 RuBP (3 × 5 = 15 C) = 18 C → 6 PGA (6 × 3 = 18 C). Phase 3: 5 G3P (5 × 3 = 15 C) → 3 RuBP (3 × 5 = 15 C). The one G3P that leaves (3 C) holds exactly the 3 carbons that came in as CO<sub>2</sub>. The cycle never gains or loses carbon; it just adds three new carbons and passes three out.</p>
<p><strong>c.</strong> Each PGA becomes <strong>one</strong> 1,3-BPG and then <strong>one</strong> G3P, so it is <strong>1 G3P per PGA</strong>. The notes mixed the two scales: 6 PGA → 6 G3P per 3 CO<sub>2</sub>, and 12 PGA → 12 G3P per 6 CO<sub>2</sub>. The "12 G3P" is right only for 6 CO<sub>2</sub> (12 PGA), where 2 G3P leave to make glucose and 10 regenerate 6 RuBP.</p>
<p><strong>d.</strong> Sucrose has 12 carbons = 4 G3P = 12 CO<sub>2</sub> fixed. That is twice the cost of glucose: <strong>12 CO<sub>2</sub>, 36 ATP and 24 NADPH</strong> (plus a little extra energy to link the two sugars, which you can ignore here).</p>`,
    marks: 5
  },
  {
    id: "xc10",
    lesson: "2.10",
    level: "analyze",
    tier: "likely",
    title: "Lights out: what happens to RuBP and PGA?",
    prompt: `<p>Green algae were given CO<sub>2</sub> in bright light until the amounts of Calvin cycle compounds were steady (set to 100). In experiment 1 the light was switched off at time 0. In experiment 2 the light stayed on, but the CO<sub>2</sub> supply was cut to a very low level at time 0.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Time (s)</th><th>−20</th><th>0</th><th>10</th><th>20</th><th>40</th><th>60</th></tr></thead>
<tbody>
<tr><td>Exp. 1 (light off): PGA</td><td>100</td><td>100</td><td>150</td><td>190</td><td>220</td><td>225</td></tr>
<tr><td>Exp. 1 (light off): RuBP</td><td>100</td><td>100</td><td>50</td><td>20</td><td>6</td><td>4</td></tr>
<tr><td>Exp. 2 (low CO<sub>2</sub>): PGA</td><td>100</td><td>100</td><td>70</td><td>50</td><td>35</td><td>33</td></tr>
<tr><td>Exp. 2 (low CO<sub>2</sub>): RuBP</td><td>100</td><td>100</td><td>135</td><td>170</td><td>195</td><td>200</td></tr>
</tbody></table></div>
<ol>
<li>Explain why PGA rises and RuBP falls after the light is switched off.</li>
<li>Explain why the PGA level stops rising after about 40 s in experiment 1.</li>
<li>Explain the changes in experiment 2.</li>
<li>How do these two experiments together show that RuBP is the molecule that accepts CO<sub>2</sub> and that PGA is the first product?</li>
<li>The Calvin cycle is often called the "light-independent reactions." Use experiment 1 to explain why this name can be misleading.</li>
</ol>`,
    hints: [
      "Which Calvin cycle step needs only CO<sub>2</sub>, RuBP and RuBisCO? Which steps need ATP or NADPH?",
      "In the dark, can PGA be turned into G3P? Can RuBP be regenerated?",
      "In experiment 2, ATP and NADPH are still being made. What is now missing for the RuBisCO step?"
    ],
    answer: `<p><strong>a.</strong> Carbon fixation (RuBP + CO<sub>2</sub> → 2 PGA, catalyzed by RuBisCO) needs no ATP or NADPH, so it keeps going for a short time in the dark, using up RuBP and making PGA. But the next step, reducing PGA to G3P, needs <strong>ATP and NADPH</strong>, and regenerating RuBP needs <strong>ATP</strong>. Without light, the light reactions stop, the remaining ATP and NADPH are used up in seconds, and PGA cannot be processed. So PGA piles up and RuBP is used without being replaced.</p>
<p><strong>b.</strong> RuBP has almost run out (4% of its starting level). With no RuBP left to accept CO<sub>2</sub>, no more PGA can be made, so PGA levels off.</p>
<p><strong>c.</strong> With light, ATP and NADPH are still made, so PGA is still reduced to G3P and RuBP is still regenerated. But with very little CO<sub>2</sub>, RuBisCO can fix very little, so RuBP is not used up: <strong>RuBP accumulates</strong>. Meanwhile, existing PGA keeps being converted to G3P, and little new PGA is made, so <strong>PGA falls</strong>.</p>
<p><strong>d.</strong> The two compounds always change in opposite directions, and the direction depends on which input is removed. Removing CO<sub>2</sub> makes RuBP build up, so RuBP must be the molecule that <em>reacts with</em> CO<sub>2</sub>. Removing light (but keeping CO<sub>2</sub>) makes PGA build up while RuBP disappears, so PGA must be what CO<sub>2</sub> + RuBP <em>makes</em>, and it is used by a light-dependent (ATP- and NADPH-using) step. This is the type of evidence Calvin's group used to work out the cycle.</p>
<p><strong>e.</strong> The Calvin cycle does not use light directly, but it depends on the light reactions for ATP and NADPH. Experiment 1 shows the cycle stalls within about 20–40 s of darkness. "Light-independent" only means "does not absorb light itself." It does not mean the cycle runs normally in the dark. (Several Calvin cycle enzymes, including RuBisCO, are also switched on by light-driven changes in the stroma, so the cycle is even more light-dependent than this.)</p>`,
    marks: 6
  },
  {
    id: "xc11",
    lesson: "2.10",
    level: "apply",
    tier: "likely",
    title: "Phosphorus, fertilizer and purple tomato leaves",
    prompt: `<p>Phosphorus (as phosphate) is one of the three main nutrients in fertilizer (the "P" in N-P-K). A tomato grower notices that seedlings grown in phosphorus-poor soil are small and dark, and the undersides of their older leaves have turned purple.</p>
<ol>
<li>List at least five molecules used in photosynthesis that contain phosphorus.</li>
<li>Explain two different ways a phosphate shortage could slow down the Calvin cycle.</li>
<li>The purple colour is caused by a pigment you met in lesson 2.08. Name it and state where else you have seen it.</li>
<li>This pigment is made from sugar. Suggest why sugar can build up in a phosphorus-starved leaf, even though photosynthesis is slowed.</li>
</ol>`,
    hints: [
      "Look at the names: anything with phosphate (or a P standing for phosphate) in it, plus the energy carriers.",
      "The Calvin cycle uses 9 ATP and 6 NADPH per G3P, and every intermediate is a sugar phosphate.",
      "Growth needs phosphorus too: DNA, RNA, ATP and membranes all contain it. If growth slows more than photosynthesis, what happens to the sugar?"
    ],
    answer: `<p><strong>a.</strong> Any five: <strong>ATP / ADP</strong>, <strong>inorganic phosphate (P<sub>i</sub>)</strong>, <strong>NADP<sup>+</sup> / NADPH</strong> (the extra P is a phosphate), <strong>RuBP</strong> (ribulose-1,5-<em>bis</em>phosphate), <strong>PGA</strong> (3-phosphoglycerate), <strong>1,3-BPG</strong>, <strong>G3P</strong> (glyceraldehyde-3-phosphate), phospholipids of the thylakoid membranes, and PEP in C4/CAM plants.</p>
<p><strong>b.</strong> Any two, explained: (1) Less P<sub>i</sub> means ATP synthase has less phosphate to add to ADP, so <strong>less ATP</strong> is made; the reduction phase (6 ATP per 3 CO<sub>2</sub>) and RuBP regeneration (3 ATP) slow down. (2) Every Calvin cycle intermediate is a sugar <em>phosphate</em>. With less phosphate, the cell keeps a smaller pool of <strong>RuBP</strong>, so RuBisCO has less CO<sub>2</sub> acceptor and fixes CO<sub>2</sub> more slowly. (3) Less NADP<sup>+</sup> can be made, so the supply of NADPH is limited. (Also, G3P is exported from the chloroplast in exchange for a phosphate coming in; with little phosphate in the cytosol, export slows and sugar phosphates back up in the stroma.)</p>
<p><strong>c.</strong> <strong>Anthocyanin</strong>, the red-purple pigment that is made in the fall and gives maple leaves their red colour.</p>
<p><strong>d.</strong> Building new cells needs phosphorus for DNA, RNA, ATP and membrane phospholipids. A phosphorus-starved plant cannot grow fast, so it <strong>uses less sugar</strong> for growth. Photosynthesis slows too, but not as much as growth does, so sugar is made faster than it is used and builds up in the leaves. The extra sugar triggers anthocyanin production, just as sugar trapped in maple leaves on cold fall nights does. Farmers read purple leaves as a sign of phosphorus deficiency.</p>`,
    marks: 5
  },
  {
    id: "xc12",
    lesson: "2.10",
    level: "extend",
    tier: "extra",
    title: "Starch by day, sucrose by night",
    prompt: `<p>Leaves of a plant grown with 12 h of light and 12 h of dark were sampled every 3 h and their starch content was measured.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Time</th><th>06:00 (lights on)</th><th>09:00</th><th>12:00</th><th>15:00</th><th>18:00 (lights off)</th><th>21:00</th><th>24:00</th><th>03:00</th><th>06:00</th></tr></thead>
<tbody>
<tr><td>Leaf starch (mg/g)</td><td>2</td><td>6</td><td>11</td><td>15</td><td>19</td><td>15</td><td>11</td><td>6</td><td>2</td></tr>
</tbody></table></div>
<ol>
<li>Describe the pattern, and state where in the leaf cell the starch is stored.</li>
<li>During the day, the leaf exports some G3P as sucrose but stores the rest as starch. Suggest two advantages of storing some of it as starch rather than exporting it all straight away.</li>
<li>Give two uses of the sugar released when starch is broken down at night. One should involve cellular respiration.</li>
<li>Scientists found that plants break down their starch at a steady rate so that it runs out almost exactly at dawn. Predict what would happen to a plant if the night were unexpectedly made 4 h longer, and explain.</li>
<li>A mutant plant cannot make starch in its leaves. Predict how it would grow with long days compared with short days.</li>
</ol>`,
    hints: [
      "Starch is made from G3P inside the chloroplast, in the stroma.",
      "Starch is a large, insoluble polymer. Sucrose is small and soluble. Which one affects the water balance (osmosis) of the cell?",
      "At night there are no light reactions, but the plant's cells still need ATP. Where does that ATP come from?"
    ],
    answer: `<p><strong>a.</strong> Starch rises at a nearly steady rate during the light period (2 → 19 mg/g, about 1.4 mg/g per hour) and falls at a nearly steady rate through the night, reaching its lowest level (2 mg/g) at dawn. The starch is made and stored as granules in the <strong>stroma of the chloroplasts</strong>, from G3P made by the Calvin cycle.</p>
<p><strong>b.</strong> Any two: (1) It keeps a <strong>food supply for the night</strong>, when no G3P is made but the rest of the plant still needs sugar. (2) Starch is <strong>insoluble</strong>, so storing it does not raise the solute concentration of the cell and draw in water by osmosis, as large amounts of sugar would. (3) The rate of sucrose export through the phloem is limited; storing the extra prevents sugar phosphates from backing up and slowing the Calvin cycle.</p>
<p><strong>c.</strong> (1) It is turned into <strong>sucrose and exported</strong> through the phloem to roots, growing tips, flowers and fruits, which keep growing at night. (2) It is used in the leaf's own <strong>cellular respiration</strong>: glucose → glycolysis → Krebs cycle → ETC in the mitochondria, to make the ATP the leaf cells need when the light reactions are not running. (Some carbon is also used to build cellulose, amino acids and fats.)</p>
<p><strong>d.</strong> The starch would run out about 4 h before the new dawn. With no stored sugar and no photosynthesis, the plant would briefly <strong>starve</strong>: sucrose export and growth would stop, and the plant would have to break down proteins and other molecules for respiration. Experiments show growth is set back for some time afterward.</p>
<p><strong>e.</strong> In <strong>long days</strong> it would grow nearly normally, because it can export sugar directly while the light is on and the nights are short. In <strong>short days</strong> (long nights) it would grow very poorly, because it has no starch to live on through the long night and starves for many hours each day.</p>`,
    marks: 6
  },
  {
    id: "xc13",
    lesson: "2.11",
    level: "analyze",
    tier: "likely",
    title: "A day in the life of a CAM plant: acid levels over 24 hours",
    prompt: `<p>The leaves of a well-established, drought-stressed pineapple plant were sampled every 4 h. Malic acid content and the pH of the cell sap were measured, and the stomata were observed.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Time</th><th>18:00</th><th>22:00</th><th>02:00</th><th>06:00</th><th>10:00</th><th>14:00</th><th>18:00</th></tr></thead>
<tbody>
<tr><td>Stomata</td><td>opening</td><td>open</td><td>open</td><td>closing</td><td>closed</td><td>closed</td><td>opening</td></tr>
<tr><td>Malic acid (μmol/g)</td><td>20</td><td>70</td><td>130</td><td>180</td><td>110</td><td>40</td><td>20</td></tr>
<tr><td>Cell sap pH</td><td>5.8</td><td>5.0</td><td>4.4</td><td>3.9</td><td>4.5</td><td>5.3</td><td>5.8</td></tr>
</tbody></table></div>
<ol>
<li>Describe and explain the changes in malic acid between 18:00 and 06:00. Name the enzyme that fixes the CO<sub>2</sub> and the place where the acid is stored.</li>
<li>Explain the fall in malic acid between 06:00 and 18:00. Where does the carbon go?</li>
<li>Explain the change in pH over the 24 h.</li>
<li>Why does a CAM plant keep its stomata closed during the day, and why can it not simply run the Calvin cycle at night when its stomata are open?</li>
<li>(Textbook question) Write a hypothesis about the acid content of two CAM plants: one kept in continuous light for 24 h and one kept in the dark for 24 h before testing.</li>
<li>A jade plant (a CAM plant) that is watered every day shows almost no change in acidity over 24 h. Suggest why.</li>
</ol>`,
    hints: [
      "CAM = temporal separation. Which step happens at night and which happens during the day?",
      "Malate is stored as malic acid. What happens to the pH of a solution when acid is added to it?",
      "The Calvin cycle needs ATP and NADPH. When are those made?"
    ],
    answer: `<p><strong>a.</strong> Malic acid rises steadily from 20 to 180 μmol/g during the night. The stomata are open, so CO<sub>2</sub> diffuses in; <strong>PEP carboxylase</strong> fixes it onto PEP to make oxaloacetate (4C), which is reduced to <strong>malate</strong>. The malate is stored as malic acid in the large central <strong>vacuole</strong>. Because no CO<sub>2</sub> is being used by the Calvin cycle in the dark, the acid accumulates all night and peaks at dawn.</p>
<p><strong>b.</strong> During the day the stomata are closed, so no new CO<sub>2</sub> enters. Malate leaves the vacuole and is <strong>decarboxylated</strong>, releasing CO<sub>2</sub> inside the leaf. RuBisCO fixes this CO<sub>2</sub> in the <strong>Calvin cycle</strong>, using ATP and NADPH from the light reactions, and the carbon ends up in G3P and then sugars and starch. The malic acid level drops back to 20 by evening.</p>
<p><strong>c.</strong> The pH falls from 5.8 to 3.9 overnight because malic acid is building up in the vacuole: more acid means more H<sup>+</sup>, so lower pH. During the day, as malic acid is broken down, the pH rises back to 5.8. (A drop of almost 2 pH units means the sap became nearly 100 times more acidic.)</p>
<p><strong>d.</strong> CAM plants live in extremely dry, hot places. Opening stomata in the hot, dry daytime air would lose large amounts of water by transpiration. At night the air is cooler and more humid, so much less water is lost per CO<sub>2</sub> taken in. The Calvin cycle cannot run at night because it needs <strong>ATP and NADPH</strong>, which are only made by the light reactions during the day. So CAM stores CO<sub>2</sub> at night (as acid) and uses it by day: <span class="term">temporal separation</span>.</p>
<p><strong>e.</strong> Example hypothesis: <em>If a CAM plant is kept in the dark for 24 h, its acid content will be high, because its stomata stay open and PEP carboxylase keeps fixing CO<sub>2</sub> into malate, but without light no ATP and NADPH are made to run the Calvin cycle, so the malate is not used. If a CAM plant is kept in continuous light for 24 h, its acid content will be low, because its stomata stay closed and the stored malate is decarboxylated and used by the Calvin cycle, with no dark period to rebuild it.</em></p>
<p><strong>f.</strong> With plenty of water, there is no need to save water, so the plant opens its stomata during the day and fixes CO<sub>2</sub> directly with RuBisCO like a <strong>C3 plant</strong>. It stops building up malic acid at night, so acidity hardly changes. (The textbook notes that overwatered cacti and succulents behave as ordinary C3 plants.)</p>`,
    marks: 6
  },
  {
    id: "xc14",
    lesson: "2.11",
    level: "analyze",
    tier: "likely",
    title: "Wheat vs corn: C3 and C4 at different temperatures and CO₂ levels",
    prompt: `<p>Net photosynthesis (μmol CO<sub>2</sub> fixed per m<sup>2</sup> of leaf per second) was measured for wheat (C3) and corn (C4) in bright light.</p>
<p><strong>Table 1.</strong> Effect of temperature (normal air, 400 ppm CO<sub>2</sub>)</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Temperature (°C)</th><th>15</th><th>25</th><th>35</th><th>40</th></tr></thead>
<tbody>
<tr><td>Wheat (C3)</td><td>18</td><td>22</td><td>15</td><td>9</td></tr>
<tr><td>Corn (C4)</td><td>12</td><td>30</td><td>38</td><td>34</td></tr>
</tbody></table></div>
<p><strong>Table 2.</strong> Effect of CO<sub>2</sub> concentration (25 °C)</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>CO<sub>2</sub> (ppm)</th><th>200</th><th>400</th><th>800</th></tr></thead>
<tbody>
<tr><td>Wheat (C3)</td><td>10</td><td>22</td><td>34</td></tr>
<tr><td>Corn (C4)</td><td>26</td><td>30</td><td>31</td></tr>
</tbody></table></div>
<ol>
<li>Explain why wheat's rate falls so sharply between 25 °C and 40 °C.</li>
<li>Suggest why wheat outperforms corn at 15 °C.</li>
<li>Explain why doubling CO<sub>2</sub> from 400 to 800 ppm increases wheat's rate by about 55% but corn's by only about 3%.</li>
<li>Atmospheric CO<sub>2</sub> and average temperatures are both rising. Use the data to discuss whether C3 or C4 plants are likely to benefit more. Include one point about weeds (eight of the world's ten worst weeds are C4 plants).</li>
</ol>`,
    hints: [
      "RuBisCO's relative affinity for O<sub>2</sub> increases with temperature, and hot leaves close their stomata.",
      "The C4 pump is not free. What does it cost per CO<sub>2</sub>, and is photorespiration a big problem at 15 °C?",
      "PEP carboxylase already concentrates CO<sub>2</sub> around RuBisCO in corn's bundle sheath cells. Can extra CO<sub>2</sub> in the air make much difference?"
    ],
    answer: `<p><strong>a.</strong> As temperature rises, RuBisCO's relative affinity for O<sub>2</sub> increases (its shape changes), and O<sub>2</sub> becomes relatively more available than CO<sub>2</sub> inside the leaf (warm leaves also close their stomata to save water, so internal CO<sub>2</sub> falls). RuBisCO therefore <strong>oxygenates</strong> RuBP more often, and <span class="term">photorespiration</span> increases: phosphoglycolate is made, ATP and NADPH are spent salvaging it, and fixed carbon is lost as CO<sub>2</sub>. Net fixation drops from 22 to 9, a loss of about 60%.</p>
<p><strong>b.</strong> At 15 °C, photorespiration is low, so wheat's RuBisCO works well with ordinary air. Corn still pays the cost of its CO<sub>2</sub> pump (the equivalent of 2 ATP per CO<sub>2</sub> to regenerate PEP), so it uses more energy for the same carbon. Its C4 enzymes also work poorly in the cold. With little photorespiration to prevent, the pump is a cost with little benefit, so C3 is more efficient in cool climates (which is why wheat, oats and canola are major Canadian crops).</p>
<p><strong>c.</strong> Wheat: 22 → 34 is a (34 − 22) ÷ 22 ≈ <strong>55%</strong> increase. Corn: 30 → 31 is about <strong>3%</strong>. Wheat's RuBisCO is limited by CO<sub>2</sub> and loses carbon to photorespiration, so extra CO<sub>2</sub> both speeds up carboxylation and helps CO<sub>2</sub> outcompete O<sub>2</sub>. Corn's PEP carboxylase (high affinity for CO<sub>2</sub>, none for O<sub>2</sub>) already pumps CO<sub>2</sub> into the bundle sheath cells, so RuBisCO there is nearly saturated with CO<sub>2</sub> even at 200–400 ppm. More CO<sub>2</sub> in the air adds almost nothing.</p>
<p><strong>d.</strong> The two changes pull in opposite directions. <strong>Rising CO<sub>2</sub> favours C3 plants</strong> (Table 2): it reduces their photorespiration and raises their rate a lot, while C4 plants gain little. <strong>Rising temperature favours C4 plants</strong> (Table 1): C3 photorespiration increases in heat, while C4 plants are at their best around 35 °C. The overall result will depend on the region: cooler places with more CO<sub>2</sub> may favour C3 crops more, while hot regions (especially with drought) may still favour C4. Weeds: in C4 crops such as corn, C3 weeds may become more competitive as CO<sub>2</sub> rises; in C3 crops, the many C4 weeds may gain an edge where it gets hotter. A strong answer recognizes that both factors matter and that water availability also plays a role.</p>`,
    marks: 6
  },
  {
    id: "xc15",
    lesson: "2.11",
    level: "apply",
    tier: "likely",
    title: "Is the C4 pump worth the extra ATP?",
    prompt: `<p>Use these values: the Calvin cycle needs <strong>3 ATP and 2 NADPH per CO<sub>2</sub></strong> fixed (18 ATP and 12 NADPH per glucose). In a C4 plant, turning pyruvate back into PEP uses ATP → AMP, the <strong>equivalent of 2 ATP per CO<sub>2</sub></strong> pumped into the bundle sheath.</p>
<ol>
<li>Calculate the ATP needed per glucose in a C4 plant. How many percent more is this than in a C3 plant?</li>
<li>On a hot, bright afternoon, suppose a C3 plant loses 40% of the carbon it fixes to photorespiration (the textbook says losses can reach one-quarter to one-half). How many CO<sub>2</sub> must its Calvin cycle fix to end up with the 6 carbons of one glucose? How much ATP and NADPH does that take? (Ignore the extra energy used by the salvage pathway.)</li>
<li>Repeat part (b) for a cool morning, when the C3 plant loses only 10% of fixed carbon. Which plant type is more efficient under each condition?</li>
<li>The class notes say CAM plants need even more ATP than C4 plants. Explain why CAM is still the winning strategy in a desert.</li>
</ol>`,
    hints: [
      "C4: 6 CO<sub>2</sub> × (3 ATP + 2 extra ATP) per glucose.",
      "If 40% is lost, only 60% is kept. What number × 0.60 = 6?",
      "In a desert, which resource is scarcer: light energy (ATP) or water?"
    ],
    answer: `<p><strong>a.</strong> C4: 18 ATP (Calvin cycle) + 6 CO<sub>2</sub> × 2 ATP (regenerating PEP) = <strong>30 ATP per glucose</strong> (and still 12 NADPH). That is 12 more than 18, or 12 ÷ 18 ≈ <strong>67% more</strong> ATP. (This matches the textbook: 30 ATP for C4 vs 18 for C3.)</p>
<p><strong>b.</strong> Keeping 60% of fixed carbon: CO<sub>2</sub> fixed × 0.60 = 6, so <strong>10 CO<sub>2</sub></strong> must be fixed. Cost: 10 × 3 = <strong>30 ATP</strong> and 10 × 2 = <strong>20 NADPH</strong>, before counting the ATP and NADPH the salvage pathway uses. That is already as much ATP as the C4 plant and much more NADPH, and the C3 plant also has to keep its stomata open longer, losing more water. On a hot, bright day, <strong>C4 is more efficient</strong>.</p>
<p><strong>c.</strong> Keeping 90%: 6 ÷ 0.90 ≈ <strong>6.7 CO<sub>2</sub></strong> fixed, costing about <strong>20 ATP and 13 NADPH</strong>. That is less than the C4 plant's 30 ATP, so on a cool morning <strong>C3 is more efficient</strong>. The C4 pump only pays for itself when photorespiration would otherwise be high (heat and intense light).</p>
<p><strong>d.</strong> In a desert, light (and therefore ATP) is plentiful, but <strong>water</strong> is extremely scarce. CAM plants open their stomata only at night, when it is cool and humid, so they lose far less water per CO<sub>2</sub> taken in. They also avoid photorespiration, because during the day the CO<sub>2</sub> released from malate builds up inside the leaf behind closed stomata. Spending extra ATP (partly to pump malic acid into the vacuole at night) is a small price for surviving drought. The trade-off is slow growth, since a CAM plant can fix only as much CO<sub>2</sub> per day as its vacuoles can store as acid overnight.</p>`,
    marks: 5
  },
  {
    id: "xc16",
    lesson: "2.11",
    level: "apply",
    tier: "likely",
    title: "Plant detective: C3, C4 or CAM?",
    prompt: `<p>A botanist collects three unknown plants and runs the same tests on each. In the labelling test, the plant is given CO<sub>2</sub> containing radioactive carbon-14 for 2 seconds, and the first compound to become radioactive is identified.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Test</th><th>Plant X</th><th>Plant Y</th><th>Plant Z</th></tr></thead>
<tbody>
<tr><td>First labelled compound (in light)</td><td>a 3-carbon acid</td><td>a 4-carbon acid, in mesophyll cells</td><td>little label taken up by day; at night, a 4-carbon acid</td></tr>
<tr><td>When stomata are open</td><td>day</td><td>day</td><td>night</td></tr>
<tr><td>Leaf cross section</td><td>palisade and spongy mesophyll; bundle sheath cells small, few chloroplasts</td><td>ring of large, chloroplast-rich cells around each vein, with mesophyll around them</td><td>thick, fleshy leaves with large vacuoles</td></tr>
<tr><td>Sap pH at dawn / at dusk</td><td>6.0 / 6.0</td><td>6.0 / 6.0</td><td>4.0 / 5.9</td></tr>
<tr><td>Photosynthesis when O<sub>2</sub> in the air is lowered from 21% to 2%</td><td>rises by about 35%</td><td>almost no change</td><td>almost no change by day</td></tr>
</tbody></table></div>
<ol>
<li>Classify X, Y and Z as C3, C4 or CAM. For each, give two pieces of evidence from the table.</li>
<li>Name the 3-carbon compound in X and the enzymes that make the first labelled compound in X and in Y.</li>
<li>Explain why lowering O<sub>2</sub> increases photosynthesis in X but not in Y.</li>
<li>Give one real example of each type, and match each plant to the environment where it would have the greatest advantage: a hot, dry desert; a cool, moist Ontario forest; a hot, sunny tropical grassland.</li>
</ol>`,
    hints: [
      "The name C3 or C4 refers to the number of carbons in the first stable product of CO<sub>2</sub> fixation.",
      "CAM is temporal separation; C4 is spatial separation. Which test shows time and which shows space?",
      "O<sub>2</sub> competes with CO<sub>2</sub> for RuBisCO's active site. Which plant does nothing to keep O<sub>2</sub> away from RuBisCO?"
    ],
    answer: `<p><strong>a.</strong> <strong>X = C3</strong>: first product is a 3-carbon acid; stomata open by day; normal palisade and spongy mesophyll with no chloroplast-rich bundle sheath; strongly affected by O<sub>2</sub> (photorespiration). <strong>Y = C4</strong>: first product is a 4-carbon acid made in mesophyll cells; a ring of large, chloroplast-rich bundle sheath cells around each vein (Kranz anatomy), showing spatial separation; O<sub>2</sub> level has almost no effect. <strong>Z = CAM</strong>: stomata open at night; CO<sub>2</sub> fixed into a 4-carbon acid at night; sap much more acidic at dawn than at dusk (malic acid stored overnight), showing temporal separation; fleshy succulent leaves with large vacuoles.</p>
<p><strong>b.</strong> In X the compound is <strong>PGA (3-phosphoglycerate)</strong>, made by <strong>RuBisCO</strong> joining CO<sub>2</sub> to RuBP. In Y the first compound is <strong>oxaloacetate</strong> (quickly reduced to malate), made by <strong>PEP carboxylase</strong> joining CO<sub>2</sub> to PEP.</p>
<p><strong>c.</strong> O<sub>2</sub> competes with CO<sub>2</sub> for RuBisCO's active site. In X, RuBisCO is exposed to ordinary air, so at 21% O<sub>2</sub> a good share of its reactions are oxygenations (photorespiration), which waste carbon and energy. Lowering O<sub>2</sub> to 2% almost removes photorespiration, so net fixation rises. In Y, PEP carboxylase (which has no affinity for O<sub>2</sub>) concentrates CO<sub>2</sub> around RuBisCO in the bundle sheath, so CO<sub>2</sub> already outcompetes O<sub>2</sub>. There is little photorespiration to remove, so lowering O<sub>2</sub> changes almost nothing.</p>
<p><strong>d.</strong> C3: e.g. wheat, soybean, maple, common ivy, most trees, best in the <strong>cool, moist Ontario forest</strong>. C4: e.g. corn, sugar cane, tropical grasses, best in the <strong>hot, sunny tropical grassland</strong> (high heat and intense light, not necessarily dry). CAM: e.g. pineapple, cactus, jade plant, best in the <strong>hot, dry desert</strong> (extreme drought).</p>`,
    marks: 6
  },
  {
    id: "xc17",
    lesson: "mix",
    level: "analyze",
    tier: "likely",
    title: "Bromothymol blue tubes: who is photosynthesizing and who is respiring?",
    prompt: `<p><span class="term">Bromothymol blue</span> (BTB) is an indicator that is <strong>blue</strong> when there is little dissolved CO<sub>2</sub>, <strong>green</strong> with a moderate amount, and <strong>yellow</strong> when there is a lot (CO<sub>2</sub> forms carbonic acid in water). Six sealed tubes of pond water with BTB all started light green. After 24 h at 20 °C, these were the results:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Tube</th><th>Contents</th><th>Conditions</th><th>Colour after 24 h</th></tr></thead>
<tbody>
<tr><td>A</td><td>Elodea</td><td>bright light</td><td>blue</td></tr>
<tr><td>B</td><td>Elodea</td><td>dark (wrapped in foil)</td><td>yellow</td></tr>
<tr><td>C</td><td>pond snail</td><td>bright light</td><td>yellow</td></tr>
<tr><td>D</td><td>Elodea + pond snail</td><td>bright light</td><td>blue-green</td></tr>
<tr><td>E</td><td>nothing added</td><td>bright light</td><td>light green</td></tr>
<tr><td>F</td><td>Elodea</td><td>very dim light</td><td>light green</td></tr>
</tbody></table></div>
<ol>
<li>Explain the results in tubes A and B. In tube B, name the organelle and the stages that release the CO<sub>2</sub>.</li>
<li>What is the purpose of tube E?</li>
<li>Explain the result in tube D. What would it mean if tube D had turned yellow?</li>
<li>Is the Elodea in tube F photosynthesizing? Explain the result using the idea of a compensation point.</li>
<li>Predict whether the snail in tube D or the snail in a sealed tube with Elodea kept in the dark would survive longer, and explain using both processes.</li>
</ol>`,
    hints: [
      "Photosynthesis removes CO<sub>2</sub>; cellular respiration adds it. Plants do both.",
      "A control shows what happens when the variable you are testing (living things) is absent.",
      "When the rate of photosynthesis equals the rate of respiration, what happens to the CO<sub>2</sub> level?"
    ],
    answer: `<p><strong>a.</strong> <strong>A (blue):</strong> in bright light the Elodea's rate of photosynthesis is greater than its rate of respiration. The Calvin cycle fixes more CO<sub>2</sub> than the mitochondria release, so dissolved CO<sub>2</sub> falls and the BTB turns blue. <strong>B (yellow):</strong> in the dark there are no light reactions, so there is no ATP or NADPH for the Calvin cycle, and no CO<sub>2</sub> is fixed. The plant still carries out <strong>cellular respiration</strong>, so CO<sub>2</sub> builds up and the BTB turns yellow. The CO<sub>2</sub> is released in the <strong>mitochondria</strong>, during <strong>pyruvate oxidation</strong> and the <strong>Krebs cycle</strong> in the matrix.</p>
<p><strong>b.</strong> Tube E is a <strong>control</strong>. It shows that light, the water and the indicator alone do not change the colour, so any change in the other tubes is caused by the living organisms.</p>
<p><strong>c.</strong> Both the snail and the Elodea respire, adding CO<sub>2</sub>, but the Elodea's photosynthesis in bright light removes slightly more CO<sub>2</sub> than the two together produce, so the water becomes a little less acidic (blue-green). If D had turned yellow, the snail's and the plant's respiration together would be producing more CO<sub>2</sub> than the plant's photosynthesis could remove (for example, too little plant, too many snails, or not enough light).</p>
<p><strong>d.</strong> Yes. In very dim light the Elodea is still photosynthesizing, but only slowly. The colour did not change, so the plant must be at about its <strong>light compensation point</strong>: the CO<sub>2</sub> fixed by photosynthesis exactly balances the CO<sub>2</sub> released by respiration, so there is no net change.</p>
<p><strong>e.</strong> The snail in <strong>tube D</strong> would survive longer. In the light, the Elodea's photosynthesis releases O<sub>2</sub> (from water) that the snail needs as the final electron acceptor for its ETC, and it removes the CO<sub>2</sub> the snail produces. In the dark, the Elodea cannot photosynthesize; it would <em>use</em> O<sub>2</sub> and release CO<sub>2</sub> along with the snail, so the O<sub>2</sub> would run out faster.</p>`,
    marks: 6
  },
  {
    id: "xc18",
    lesson: "mix",
    level: "extend",
    tier: "likely",
    title: "Follow a carbon atom and an oxygen atom from the air to your breath",
    prompt: `<p>On a summer morning, a CO<sub>2</sub> molecule enters a sugar maple leaf. Its carbon atom ends up in sucrose that the tree stores over the winter and sends up in its sap in spring. The sap is boiled into maple syrup, and a student eats it on pancakes. A few hours later, the same carbon atom leaves the student's body in a breath of CO<sub>2</sub>.</p>
<ol>
<li>Trace the carbon atom from the air to the student's exhaled breath. Name each molecule it is part of at the key steps, the enzyme or process involved, and where in the cell (or organism) each step happens.</li>
<li>Name one molecule that appears in both the Calvin cycle and glycolysis. Compare what happens to it in each pathway.</li>
<li>Trace an oxygen atom from a water molecule in the soil to a water molecule made inside the student's cells.</li>
<li>Explain the statement: "Matter cycles, but energy flows."</li>
</ol>`,
    hints: [
      "Plant: stoma → mesophyll → stroma → RuBisCO → PGA → G3P → sucrose → phloem. Student: digestion → glycolysis → pyruvate oxidation and Krebs cycle.",
      "Look at the Calvin cycle's reduction phase and glycolysis steps 6–7. They use the same 3-carbon molecules in opposite directions.",
      "Oxygen: photolysis at photosystem II, then the final electron acceptor at complex IV."
    ],
    answer: `<p><strong>a.</strong> One good pathway:</p>
<ol>
<li>CO<sub>2</sub> diffuses in through a <strong>stoma</strong> and the air spaces to a <strong>mesophyll</strong> cell, and into the <strong>stroma</strong> of a chloroplast.</li>
<li><strong>Carbon fixation:</strong> <strong>RuBisCO</strong> joins it to <strong>RuBP</strong>; the unstable 6C intermediate splits into 2 <strong>PGA</strong>.</li>
<li><strong>Reduction:</strong> PGA is phosphorylated by ATP to <strong>1,3-BPG</strong>, then reduced by NADPH to <strong>G3P</strong>.</li>
<li>G3P leaves the cycle and is exported to the cytosol, where it is used to make <strong>sucrose</strong>. Sucrose travels in the <strong>phloem</strong> to the trunk and roots and is stored as <strong>starch</strong> over winter.</li>
<li>In early spring, the starch is converted back to <strong>sucrose</strong>, which rises in the sap. Boiling concentrates it into syrup.</li>
<li>In the student's small intestine, sucrose is digested into <strong>glucose</strong> and fructose, absorbed into the blood and taken up by cells.</li>
<li><strong>Glycolysis</strong> (cytosol): glucose → G3P → … → <strong>pyruvate</strong>.</li>
<li>In the mitochondrial <strong>matrix</strong>, the carbon is released as <strong>CO<sub>2</sub></strong>, either in <strong>pyruvate oxidation</strong> or, after entering as <strong>acetyl-CoA</strong>, in the <strong>Krebs cycle</strong> (depending on which carbon of the sugar it is).</li>
<li>The CO<sub>2</sub> diffuses into the blood, is carried to the lungs and is breathed out.</li>
</ol>
<p><strong>b.</strong> <strong>G3P</strong> (or 1,3-BPG, or 3-phosphoglycerate/PGA). In the <strong>Calvin cycle</strong>, G3P is <em>made</em> by <strong>reducing</strong> 1,3-BPG with NADPH: energy is stored, and G3P is the product that leaves to build sugar. In <strong>glycolysis</strong>, G3P is <strong>oxidized</strong> to 1,3-BPG, and the electrons go to NAD<sup>+</sup> (making NADH): energy is released. The Calvin cycle's reduction phase is essentially glycolysis steps 6–7 run in reverse, using ATP and NADPH instead of making ATP and NADH.</p>
<p><strong>c.</strong> Soil water enters a root hair by osmosis, rises in the <strong>xylem</strong> to the leaf, and enters a mesophyll chloroplast. On the lumen side of <strong>photosystem II</strong>, the water-splitting enzyme splits it (<strong>photolysis</strong>), and its oxygen atom joins another to form <strong>O<sub>2</sub></strong>. The O<sub>2</sub> diffuses out through the stomata into the air. The student inhales it, it is carried by hemoglobin in the blood to a cell, and in the mitochondrion it is the <strong>final electron acceptor at complex IV</strong> of the ETC: O<sub>2</sub> + 4 e<sup>−</sup> + 4 H<sup>+</sup> → 2 H<sub>2</sub>O. The oxygen atom is back in a water molecule.</p>
<p><strong>d.</strong> The same atoms (C, H, O) are reused again and again: CO<sub>2</sub> and H<sub>2</sub>O made by respiration are the raw materials of photosynthesis, and the sugar and O<sub>2</sub> made by photosynthesis are the raw materials of respiration. Energy does not cycle. It enters as <strong>light</strong>, is stored in ATP, NADPH and then in the chemical bonds of sugar, is transferred to NADH, FADH<sub>2</sub> and ATP in the student's cells, and is finally used for work and lost as <strong>heat</strong>, which no organism can turn back into chemical energy. So ecosystems need a constant input of sunlight, but not a constant input of new atoms.</p>`,
    marks: 8
  }
);
