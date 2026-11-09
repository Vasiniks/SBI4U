/* Class questions & answers for Unit 3: Molecular Genetics.
   Grouped by source in class order: history case files and slides (3.01), DNA structure review (3.02), replication key, bubble, labelling,
   reading and card sort (3.03), transcription slides and worksheet (3.04), translation worksheet, Try Me and slides (3.05),
   mutation practice, explorer and quiz pool (3.06), and the lac/trp operon activity (3.07).
   Where a class answer key exists it is quoted first ("Class key"); otherwise answers are model answers written from the slides and activities. */
window.QA = window.QA || [];
window.QA.push(

  /* ------------------------------------------------------------------ 3.01 case files */
  {
    id: "qa-301-cases",
    title: "History case files: clearance checks",
    lesson: "3.01",
    source: "Operation Double Helix: Case Files (class interactive history activity). Every clearance-check question and the final code, with the reason each wrong option fails.",
    items: [
      {
        tier: "essential",
        q: "Clearance check 1, Q1: What did Friedrich Miescher originally name the acidic substance he extracted from the nucleus? (Choices: DNA, Nuclein, The Transforming Principle)",
        a: `<p><strong>Correct choice: Nuclein.</strong></p>
<p>In <strong>1869</strong> Miescher isolated a white, slightly acidic substance from the <strong>nuclei of white blood cells</strong>, which he collected from pus on used surgical bandages. It was rich in <strong>phosphorus and nitrogen</strong> (and had no sulfur, unlike most proteins), and because it came from the nucleus he called it <span class="term">nuclein</span>. The slide adds that nuclein had an <strong>acidic portion</strong> and a <strong>basic portion</strong>: today we know the acidic part is DNA (acidic because of its phosphate groups) and the basic part is the positively charged proteins packed with it (histones).</p>
<ul>
<li><strong>DNA</strong> is wrong: that name came decades later, once chemists had worked out that nuclein's acid was built from a sugar (deoxyribose), phosphate and four bases. Miescher had no idea what the substance did.</li>
<li><strong>The Transforming Principle</strong> is wrong: that was the name for the unknown substance behind Griffith's 1928 transformation result. Avery, MacLeod and McCarty showed in 1944 that it was DNA.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Clearance check 1, Q2: In Griffith's experiment, what caused the mouse to die when it was injected with a mixture of heat-killed S strain and living R strain? (Choices: the heat brought the S strain back to life; the R strain mutated on its own; the living R strain took up genetic material from the dead S strain and was transformed)",
        a: `<p><strong>Correct choice: the living R strain took up genetic material from the dead S strain and was transformed.</strong></p>
<p>Griffith's two controls rule out the other two choices:</p>
<ul>
<li><strong>“The heat brought the S strain back to life”</strong> is wrong: heat-killed S bacteria injected <em>alone</em> did not kill the mouse (injection 3). Dead cells cannot reproduce or come back to life. The living S bacteria found in the dead mouse were descendants of R cells that had picked up the S-strain instructions.</li>
<li><strong>“The R strain mutated on its own”</strong> is wrong: living R bacteria injected <em>alone</em> did not kill the mouse (injection 1). The change happened only when the dead S material was present, and it was a specific change (the R cells started making the S-strain capsule), not a random one.</li>
</ul>
<p>This change is called <span class="term">transformation</span>: a cell takes up genetic material from its surroundings and its phenotype changes. The change is <strong>heritable</strong>: the transformed bacteria passed the ability to make a capsule on to their offspring, which is why the substance had to be the hereditary material.</p>`
      },
      {
        tier: "essential",
        q: "Clearance check 2, Q1: In Joachim Hämmerling's experiment with <em>Acetabularia</em>, which part of the alga contained the nucleus and the genetic information? (Choices: the cap, the stalk, the foot)",
        a: `<p><strong>Correct choice: the foot</strong> (also called the rhizoid, the root-like base).</p>
<p><em>Acetabularia</em> is a single-celled green alga several centimetres long, with a <strong>cap</strong> on top, a long <strong>stalk</strong>, and a <strong>foot</strong> that anchors it. Its one nucleus sits in the foot. Hämmerling cut the cells apart and watched what could regrow:</p>
<ul>
<li>Remove the <strong>cap</strong>: the cell grew a new cap.</li>
<li>Remove the <strong>foot</strong>: no new foot grew back.</li>
</ul>
<p>Conclusion (class wording): regeneration can only occur if genetic information is present to direct it, so the nucleus and the genetic information must be in the <strong>foot</strong>.</p>
<ul>
<li><strong>The cap</strong> is wrong: the cap can be cut off and rebuilt, so the instructions for building it cannot be stored in the cap.</li>
<li><strong>The stalk</strong> is wrong: a piece of stalk with no foot cannot keep regenerating. (It may make one cap from instructions already sent up from the nucleus, but it cannot do it again.)</li>
</ul>
<p>His grafting experiments made the point sharper: when the parts of two species (<em>A. mediterranea</em> and <em>A. crenulata</em>) were grafted together, the cap that grew matched the species that supplied the <strong>nucleus</strong>.</p>`
      },
      {
        tier: "essential",
        q: "Clearance check 2, Q2: Hershey and Chase used radioactive isotopes to track viral infection. Which element was found to enter the host cell, showing that DNA was the genetic material? (Choices: phosphorus, sulfur, nitrogen)",
        a: `<p><strong>Correct choice: phosphorus.</strong></p>
<p>Hershey and Chase (1952) grew one batch of T2 bacteriophages with radioactive <strong><sup>32</sup>P</strong> and another with radioactive <strong><sup>35</sup>S</strong>. DNA contains phosphorus (in every phosphate of its backbone) but no sulfur; protein contains sulfur (in the amino acids cysteine and methionine) but almost no phosphorus. So <sup>32</sup>P labels only the viral DNA and <sup>35</sup>S labels only the protein coat.</p>
<p>After infection, blending and centrifuging, the <sup>32</sup>P was found <strong>inside the bacteria</strong> (in the pellet), while the <sup>35</sup>S stayed outside in the liquid with the empty coats. Only the DNA entered the host to direct the making of new viruses.</p>
<ul>
<li><strong>Sulfur</strong> is wrong: the sulfur label marked the protein coats, which stayed outside the bacteria.</li>
<li><strong>Nitrogen</strong> is wrong: both DNA (in its bases) and protein (in every amino acid) contain nitrogen, so a nitrogen label could not tell the two apart. (Nitrogen isotopes were the right tool for a different question: Meselson and Stahl used <sup>15</sup>N and <sup>14</sup>N to follow DNA strands through replication.)</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Clearance check 3, Q1: Avery, McCarty and MacLeod found that bacterial transformation would NOT occur if they destroyed which molecule? (Choices: proteins, RNA, DNA)",
        a: `<p><strong>Correct choice: DNA.</strong></p>
<p>The team (1944) took an extract from heat-killed S-strain bacteria and split it into tubes. In each tube they used an enzyme or treatment to destroy one class of molecule (polysaccharides, lipids, RNA, protein or DNA), then mixed the treated extract with living R-strain bacteria. Transformation into S-strain still happened in every tube <strong>except</strong> the one treated with <strong>DNase</strong>, the enzyme that destroys DNA.</p>
<ul>
<li><strong>Proteins</strong> is wrong: destroying protein with a protease did not stop transformation, so protein is not the transforming principle. This was the big surprise, since most scientists expected protein to be the hereditary material.</li>
<li><strong>RNA</strong> is wrong: destroying RNA with RNase did not stop transformation either.</li>
</ul>
<p>Conclusion: <strong>DNA is the transforming principle</strong> and the molecule of heredity.</p>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The slide title spells the third scientist “McLeod”, and the activity uses both spellings. The correct spelling is <strong>Colin MacLeod</strong>: Avery, MacLeod and McCarty (1944).</p></div>`
      },
      {
        tier: "essential",
        q: "Clearance check 3, Q2: According to Erwin Chargaff's analysis of DNA, which of the following is true? (Choices: all four bases are present in exactly equal 25% amounts; the amount of adenine equals thymine, and guanine equals cytosine; purines only pair with other purines)",
        a: `<p><strong>Correct choice: the amount of adenine equals thymine, and guanine equals cytosine.</strong></p>
<p>Chargaff (1950) used chromatography to separate and measure the bases in DNA from many species. In every sample, <strong>%A = %T</strong> and <strong>%G = %C</strong>, so the total purines (A + G) always equal the total pyrimidines (T + C). These are <span class="term">Chargaff's rules</span>, and they became the clue to complementary base pairing.</p>
<ul>
<li><strong>“All four bases at exactly 25%”</strong> is wrong: this was an older idea (that DNA was a dull, repeating four-base unit). Chargaff showed the percentages <strong>vary between species</strong>. Human DNA is roughly 30% A, 30% T, 20% G and 20% C. Only the pairs match each other; A + T does not have to equal G + C.</li>
<li><strong>“Purines only pair with other purines”</strong> is wrong: a purine always pairs with a <strong>pyrimidine</strong> (A with T, G with C). Two double-ringed purines would be too wide to fit, and two single-ringed pyrimidines too narrow, so purine–pyrimidine pairing is what keeps the helix a constant 2 nm across.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Final clearance, Q1: What type of strong bond links the phosphate group of one nucleotide to the sugar of another, forming the backbone on the outside of the helix? (Choices: glycosyl bond, hydrogen bond, phosphodiester bond)",
        a: `<p><strong>Correct choice: phosphodiester bond.</strong></p>
<p>A <span class="term">phosphodiester bond</span> is a strong <strong>covalent</strong> link: the phosphate attached to the 5′ carbon of one nucleotide bonds to the 3′ carbon (the 3′-OH) of the sugar in the next nucleotide. Repeated over and over, it builds the <strong>sugar-phosphate backbone</strong>, which Franklin's X-ray work showed lies on the <strong>outside</strong> of the helix.</p>
<ul>
<li><strong>Glycosyl bond</strong> is wrong: this covalent bond joins each <em>base</em> to the 1′ carbon of its own sugar. It is inside a single nucleotide and is not part of the backbone.</li>
<li><strong>Hydrogen bond</strong> is wrong: hydrogen bonds are weak attractions between complementary bases (2 between A and T, 3 between G and C) that hold the <em>two strands</em> together in the middle of the helix. They are weak on purpose, so helicase can separate the strands for replication and transcription.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Final clearance, Q2: Meselson and Stahl discovered that newly replicated DNA consists of one old strand and one new strand. What is the term for this? (Choices: conservative, semi-conservative, dispersive)",
        a: `<p><strong>Correct choice: semi-conservative.</strong></p>
<p>In <span class="term">semiconservative replication</span>, the two parent strands separate and each one acts as a template for a new strand. Every daughter double helix is <strong>half old and half new</strong>.</p>
<ul>
<li><strong>Conservative</strong> is wrong: this model said the original double helix stays intact and a completely new double helix is made beside it. After one generation in <sup>14</sup>N it predicted two bands (one heavy, one light). Meselson and Stahl saw only <strong>one intermediate (hybrid) band</strong>, which ruled it out.</li>
<li><strong>Dispersive</strong> is wrong: this model said every strand ends up a patchwork of old and new pieces. It also predicts one intermediate band after generation 1, but after generation 2 it predicts a <em>single</em> band that is a bit lighter. Meselson and Stahl saw <strong>two bands</strong> (hybrid and light) after generation 2, which ruled it out.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Crack the code: a molecule of DNA was found to contain 20% thymine (T). Using Chargaff's rules, calculate the percentage of guanine (G).",
        a: `<p><strong>Answer: 30% guanine.</strong> (The class practice answer in full: 20% A, 30% G, 30% C.)</p>
<ol class="steps">
<li><p class="step-head">Pair T with A</p><p>A = T, so A = 20%. Together A + T = 40%.</p></li>
<li><p class="step-head">Find what is left for G and C</p><p>100% − 40% = 60% for G + C.</p></li>
<li><p class="step-head">Split it evenly</p><p>G = C, so G = 60% ÷ 2 = <strong>30%</strong>, and C = 30%.</p></li>
</ol>
<p>Check: 20 + 20 + 30 + 30 = 100%. This works only for <strong>double-stranded</strong> DNA, where every base has a partner. A single strand (or most RNA) does not have to obey Chargaff's rules.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.01 slides */
  {
    id: "qa-301-slides",
    title: "History slides: discussion",
    lesson: "3.01",
    source: "Lesson 3.01 slides (History of Genetics) and the case files: the question each experiment answered. No class answer key; these are model answers.",
    items: [
      {
        tier: "likely",
        q: "Before the 1940s, most scientists expected protein, not DNA, to be the hereditary material. Why?",
        a: `<p>Proteins looked like the better candidate because hereditary material has to carry a huge amount of information:</p>
<ul>
<li><strong>Variety of building blocks:</strong> proteins are built from <strong>20 different amino acids</strong>, while DNA has only <strong>4 nucleotides</strong>. Twenty letters seemed far more able to “spell” the instructions for a whole organism than four.</li>
<li><strong>Known complexity:</strong> proteins were already known to do almost everything in the cell (enzymes, structure, transport), and they come in countless shapes.</li>
<li><strong>DNA seemed boring:</strong> early chemists thought DNA was a simple, repeating molecule with the four bases in equal amounts, too uniform to store information.</li>
</ul>
<p>Each experiment in this lesson chipped away at that belief: Griffith showed something in dead cells could change heredity, Avery's team identified it as DNA, Chargaff showed base amounts vary between species, and Hershey and Chase showed that only DNA enters a host cell. The key insight was that information is in the <strong>sequence</strong> of the bases, and a sequence of 4 letters can be as long as needed.</p>`
      },
      {
        tier: "essential",
        q: "Describe Griffith's 1928 experiment: the four injections, their results, and what he concluded.",
        a: `<p>Griffith was trying to make a pneumonia vaccine using two strains of <em>Streptococcus pneumoniae</em>:</p>
<ul>
<li><strong>S (smooth) strain:</strong> each cell has a polysaccharide <strong>capsule</strong> that hides it from the mouse's immune system, so it is <strong>virulent</strong> (deadly). Colonies look smooth.</li>
<li><strong>R (rough) strain:</strong> no capsule, so the immune system destroys it; <strong>nonvirulent</strong>. Colonies look rough.</li>
</ul>
<div class="table-wrap"><table class="data">
<thead><tr><th>Injection</th><th>Result</th><th>What it shows</th></tr></thead>
<tbody>
<tr><td>1. Live R strain</td><td>mouse lives</td><td>R strain is harmless</td></tr>
<tr><td>2. Live S strain</td><td>mouse dies</td><td>S strain is deadly</td></tr>
<tr><td>3. Heat-killed S strain</td><td>mouse lives</td><td>dead S cells cannot cause disease</td></tr>
<tr><td>4. Heat-killed S + live R</td><td>mouse dies; <strong>live S</strong> bacteria found in its blood</td><td>something from the dead S cells turned living R cells into S cells</td></tr>
</tbody></table></div>
<p>Conclusion: a chemical from the heat-killed S cells (the “transforming principle”) entered the living R cells and permanently changed them. He named the process <span class="term">transformation</span>. Griffith did not identify the molecule; that was the job of Avery, MacLeod and McCarty 16 years later.</p>`
      },
      {
        tier: "likely",
        q: "One slide adds a fifth mouse: it is injected with live S-strain bacteria recovered from the dead mouse of injection 4, and it dies. What does this extra step prove?",
        a: `<p>It proves the change is <strong>heritable</strong>, not a one-time event.</p>
<p>The S bacteria recovered from mouse 4 had multiplied for many generations inside that mouse. If the R cells had merely been coated with leftover capsule material from the dead cells, their offspring would have lost it and gone back to being harmless R cells. Instead the bacteria kept making capsules generation after generation and were still deadly to a new mouse.</p>
<p>So the transforming substance changed the bacteria's <strong>genetic instructions</strong>: whatever entered the R cells was copied and passed on to every daughter cell. That is exactly what the hereditary material must do, which is why identifying the transforming principle mattered so much.</p>`
      },
      {
        tier: "essential",
        q: "Describe the Avery, MacLeod and McCarty experiment (1944). Why did they destroy one type of molecule in each tube, and what did they conclude?",
        a: `<ol class="steps">
<li><p class="step-head">Make the extract</p><p>Heat-kill S-strain bacteria and make an extract of their molecules (the class figure shows it as “S strain extract”).</p></li>
<li><p class="step-head">Destroy one molecule per tube</p><p>Split the extract into tubes and treat each with a different enzyme or treatment: one destroys polysaccharides (carbohydrates), one lipids, one RNA (RNase), one protein (protease), one DNA (DNase). A control tube has nothing removed.</p></li>
<li><p class="step-head">Test for transformation</p><p>Add live R-strain bacteria to each tube and check whether any become S strain (in the slide's version, inject mice and see which die).</p></li>
</ol>
<p><strong>Result:</strong> every tube still transformed R into S (mouse dies, live S recovered) <strong>except the DNase tube</strong> (mouse lives, no live S recovered).</p>
<p><strong>Logic:</strong> this is a process of elimination. If removing a molecule does not stop transformation, that molecule cannot be the transforming principle. Only removing DNA stopped it, so <strong>DNA is the transforming principle and the molecule of heredity</strong>, not protein.</p>
<p>Many scientists were still unconvinced in 1944 (they suspected a trace of protein had survived), which is why Hershey and Chase's 1952 result was needed as independent support. <span data-tier="extra">(Extra: the real experiment scored transformation by growing the bacteria in culture and looking for smooth colonies; the slide shows it with mice to match Griffith.)</span></p>`
      },
      {
        tier: "essential",
        q: "Describe Hämmerling's experiments with <em>Acetabularia</em> (1934) and explain how they show that hereditary information is stored in the nucleus.",
        a: `<p><strong>Hypothesis</strong> (slide): hereditary information is stored in the nucleus.</p>
<p><strong>Why <em>Acetabularia</em>?</strong> It is a single cell, but a giant one (several centimetres), with a cap, a stalk and a foot (rhizoid). Its single nucleus is in the foot, so the cell can be cut into pieces with and without a nucleus.</p>
<ol class="steps">
<li><p class="step-head">Cutting</p><p>Remove the cap: a new cap grows. Remove the foot: no new foot grows. The part that keeps the nucleus can rebuild what was lost; the part without it cannot.</p></li>
<li><p class="step-head">Grafting two species</p><p><em>A. mediterranea</em> has a smooth, umbrella-like cap and <em>A. crenulata</em> a cap split into finger-like rays. When the stalk of one species is grafted onto the foot (nucleus) of the other and the cap is cut off, the cap that regrows matches the species that supplied the <strong>nucleus</strong>.</p></li>
</ol>
<p><strong>Conclusion</strong> (class wording): regeneration can only occur if genetic information is present to direct it, so the nucleus and the genetic information must be located in the foot.</p>
<p>Note the dates: the slide gives <strong>1934</strong> and the case files say the <strong>1930s</strong>; both are fine.</p>`
      },
      {
        tier: "essential",
        q: "What did Chargaff discover in 1950, and why was it such an important clue for Watson and Crick?",
        a: `<p>Chargaff used chromatography to measure the four bases in DNA from many species and found:</p>
<ul>
<li>the proportion of <strong>adenine equals thymine</strong> (A = T);</li>
<li>the proportion of <strong>guanine equals cytosine</strong> (G = C);</li>
<li>so <strong>purines = pyrimidines</strong> (A + G = T + C);</li>
<li>but the base composition <strong>varies from species to species</strong> (A + T is usually not equal to G + C).</li>
</ul>
<p>The equal pairs suggested that A and T, and G and C, are physically matched. Watson and Crick used this to propose <span class="term">complementary base pairing</span>: A pairs with T and G pairs with C across the two strands, so every A on one strand is matched by a T on the other. That explains the 1:1 ratios exactly. The variation between species also killed the idea that DNA is a dull repeating molecule: if base content can differ, base <strong>sequence</strong> can carry information.</p>
<p>Use the rules for calculations: if a DNA sample is 20% T, then A = 20%, G = 30% and C = 30%.</p>`
      },
      {
        tier: "essential",
        q: "Describe the Hershey–Chase experiment (1952) step by step and explain its result.",
        a: `<p><strong>Question:</strong> when a bacteriophage (a virus that infects bacteria) infects a cell, is it the protein or the DNA that enters and directs the making of new viruses? A T2 phage is just a protein coat around DNA, so it is the perfect test.</p>
<ol class="steps">
<li><p class="step-head">Label</p><p>Batch 1: grow phages with <sup>35</sup>S, which ends up in the <strong>protein coat</strong> (sulfur is in protein, not DNA). Batch 2: grow phages with <sup>32</sup>P, which ends up in the <strong>DNA</strong> (phosphorus is in DNA's backbone, almost none in protein).</p></li>
<li><p class="step-head">Infect</p><p>Let each batch infect <em>E. coli</em>. Phages attach to the outside and inject their genetic material.</p></li>
<li><p class="step-head">Blend</p><p>Spin the mixture in a blender to shake the empty phage coats off the bacterial surfaces.</p></li>
<li><p class="step-head">Centrifuge</p><p>The heavy bacteria form a <strong>pellet</strong> at the bottom; the light phage coats stay in the liquid <strong>supernatant</strong>.</p></li>
<li><p class="step-head">Measure radioactivity</p><p><sup>35</sup>S batch: radioactivity in the <strong>supernatant</strong> (the coats never entered). <sup>32</sup>P batch: radioactivity in the <strong>pellet</strong> (the DNA went inside the bacteria).</p></li>
</ol>
<p><strong>Conclusion</strong> (class wording): only the viral DNA (rich in phosphorus), not the protein (rich in sulfur), enters the host to direct the synthesis of new viruses. This <strong>supported Avery's conclusion</strong> that DNA, not protein, is the genetic material. One class slide makes the point by crossing out “Proteins are the molecule of heredity” and writing “nucleic acids” over it.</p>`
      },
      {
        tier: "essential",
        q: "What did Rosalind Franklin and Watson and Crick each contribute to the structure of DNA in 1953?",
        a: `<div class="compare"><div><h4>Franklin (X-ray diffraction)</h4>
<ul>
<li>Fired X-rays at DNA fibres and photographed how they scattered (her famous <strong>Photo 51</strong>).</li>
<li>Found <strong>two forms</strong> of DNA: a drier A form and a wetter B form (the case files call them dry and wet).</li>
<li>The X-shaped pattern showed DNA is a <strong>helix</strong>, and the spacings gave its measurements (2 nm wide, a repeat every 3.4 nm, 0.34 nm between bases).</li>
<li>Key slide fact: the <strong>sugar-phosphate backbone lies on the outside</strong> of the molecule, not the inside as previously thought, with the bases inside.</li>
</ul></div>
<div><h4>Watson and Crick (model building)</h4>
<ul>
<li>Built the <strong>first accurate model</strong> of DNA from other people's data (Franklin's measurements, Chargaff's rules).</li>
<li>Two strands twist into a <strong>double helix</strong> with backbones outside.</li>
<li>Bases pair <strong>A–T and G–C</strong> by hydrogen bonds, which explains Chargaff's rules and the constant 2 nm width.</li>
<li>The two strands are <strong>antiparallel</strong>, and each strand can act as a template, which suggested how DNA copies itself.</li>
</ul></div></div>
<p data-tier="extra"><strong>Extra (credit):</strong> Franklin's data reached Watson through her colleague Maurice Wilkins without her knowledge. Watson, Crick and Wilkins won the 1962 Nobel Prize; Franklin had died in 1958, and the prize is not awarded after death. Today she is widely recognized as essential to the discovery.</p>`
      },
      {
        tier: "essential",
        q: "Meselson and Stahl (1958) tested three models of replication. Describe the experiment and the band each model predicted after one and two generations.",
        a: `<p><strong>Method:</strong> grow <em>E. coli</em> for many generations in a medium with heavy nitrogen (<sup>15</sup>N), so all their DNA is heavy. Move them to normal light nitrogen (<sup>14</sup>N). After each round of division, extract the DNA and spin it in a <strong>cesium chloride (CsCl) density gradient</strong>: DNA settles at the height that matches its density (heavy low, light high, hybrid in between).</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Model</th><th>After generation 1</th><th>After generation 2</th></tr></thead>
<tbody>
<tr><td>Conservative (parent helix stays whole)</td><td>1 heavy + 1 light band</td><td>1 heavy + 1 light band (more light)</td></tr>
<tr><td>Semiconservative (each helix half old, half new)</td><td>1 hybrid band</td><td>1 hybrid + 1 light band (equal amounts)</td></tr>
<tr><td>Dispersive (old and new pieces mixed in every strand)</td><td>1 hybrid band</td><td>1 band, slightly lighter than hybrid</td></tr>
<tr><td><strong>Observed</strong></td><td><strong>1 hybrid band</strong></td><td><strong>hybrid + light bands</strong></td></tr>
</tbody></table></div>
<ul>
<li>Generation 1's single hybrid band <strong>ruled out conservative</strong>.</li>
<li>Generation 2's two bands <strong>ruled out dispersive</strong>.</li>
</ul>
<p>Only the semiconservative model fits both results: half of each double helix is old and half is new.</p>`
      },
      {
        tier: "likely",
        q: "Summarize the history of genetics in a table: scientist, year, organism, method, and what each discovery showed.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Scientist(s)</th><th>Year</th><th>Organism / material</th><th>Method</th><th>Showed</th></tr></thead>
<tbody>
<tr><td>Miescher</td><td>1869</td><td>white blood cells (pus)</td><td>chemical extraction from nuclei</td><td>“nuclein”: a P- and N-rich substance in the nucleus, acidic + basic portions</td></tr>
<tr><td>Griffith</td><td>1928</td><td><em>S. pneumoniae</em>, mice</td><td>4 injections (R, S, heat-killed S, mix)</td><td>transformation: a substance from dead cells changes living cells heritably</td></tr>
<tr><td>Hämmerling</td><td>1934</td><td><em>Acetabularia</em> (alga)</td><td>cutting and grafting cap, stalk, foot</td><td>hereditary information is in the nucleus (in the foot)</td></tr>
<tr><td>Avery, MacLeod, McCarty</td><td>1944</td><td><em>S. pneumoniae</em></td><td>destroy one molecule type per tube</td><td>DNA is the transforming principle (not protein)</td></tr>
<tr><td>Chargaff</td><td>1950</td><td>DNA of many species</td><td>chromatography</td><td>A = T, G = C; composition varies by species</td></tr>
<tr><td>Hershey, Chase</td><td>1952</td><td>T2 phage, <em>E. coli</em></td><td><sup>35</sup>S protein vs <sup>32</sup>P DNA; blend, centrifuge</td><td>only DNA enters the host: DNA is the genetic material</td></tr>
<tr><td>Franklin</td><td>1953</td><td>DNA fibres</td><td>X-ray diffraction</td><td>helix; backbone outside; dimensions</td></tr>
<tr><td>Watson, Crick</td><td>1953</td><td>(others' data)</td><td>model building</td><td>double helix, antiparallel, A–T and G–C pairing</td></tr>
<tr><td>Meselson, Stahl</td><td>1958</td><td><em>E. coli</em></td><td><sup>15</sup>N → <sup>14</sup>N, CsCl density gradient</td><td>replication is semiconservative</td></tr>
</tbody></table></div>
<p>Notice the two halves of the story: the first experiments answer <strong>what</strong> the hereditary molecule is (DNA, not protein); the 1950s work answers <strong>how it is built</strong> and <strong>how it copies itself</strong>.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.02 review */
  {
    id: "qa-302-review",
    title: "DNA structure review: questions 1–4",
    lesson: "3.02",
    source: "Lesson 3.02 slides (Nucleic Acids & DNA Structure), slide 16 Review Questions. No answer key was posted; these are model answers (Q1 matches the class's 20% thymine practice answer).",
    items: [
      {
        tier: "essential",
        q: "Q1. A molecule of DNA was analyzed and found to contain 20% thymine. Calculate the percentage of adenine, guanine and cytosine in this molecule.",
        a: `<p><strong>Answer: adenine 20%, guanine 30%, cytosine 30%.</strong></p>
<ol class="steps">
<li><p class="step-head">A pairs with T</p><p>By Chargaff's rules (complementary base pairing), %A = %T = <strong>20%</strong>.</p></li>
<li><p class="step-head">Subtract</p><p>A + T = 40%, so G + C = 100% − 40% = 60%.</p></li>
<li><p class="step-head">G pairs with C</p><p>%G = %C = 60% ÷ 2 = <strong>30%</strong> each.</p></li>
</ol>
<p>Always show the reasoning: state the rule (A = T, G = C), then do the arithmetic. A quick check is that purines (A + G = 50%) equal pyrimidines (T + C = 50%).</p>`
      },
      {
        tier: "essential",
        q: "Q2. Define the following terms: nucleotide, complementary base pairing, phosphodiester bond.",
        a: `<ul>
<li><span class="term">Nucleotide</span>: the monomer (building block) of nucleic acids. Each DNA nucleotide has three parts: a <strong>5-carbon sugar</strong> (deoxyribose), a <strong>phosphate group</strong> attached to the sugar's 5′ carbon, and a <strong>nitrogenous base</strong> (A, T, C or G) attached to the sugar's 1′ carbon.</li>
<li><span class="term">Complementary base pairing</span>: the rule that bases on opposite strands of DNA pair in only one way: <strong>adenine with thymine</strong> (A=T, 2 hydrogen bonds) and <strong>guanine with cytosine</strong> (G≡C, 3 hydrogen bonds). A purine always pairs with a pyrimidine, so the helix stays 2 nm wide, and the sequence of one strand determines the sequence of the other. (In RNA, A pairs with U.)</li>
<li><span class="term">Phosphodiester bond</span>: the strong <strong>covalent</strong> bond that links nucleotides in a strand. The phosphate on the 5′ carbon of one nucleotide bonds to the <strong>3′-OH</strong> of the sugar of the previous nucleotide (formed by a dehydration reaction). These bonds make the sugar-phosphate backbone.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Q3. What is the difference between purines and pyrimidines?",
        a: `<div class="compare"><div><h4>Purines</h4>
<ul>
<li><strong>Double-ring</strong> structure (a six-membered ring fused to a five-membered ring): larger.</li>
<li><strong>Adenine (A)</strong> and <strong>guanine (G)</strong>.</li>
<li>Found in both DNA and RNA.</li>
</ul></div>
<div><h4>Pyrimidines</h4>
<ul>
<li><strong>Single-ring</strong> structure (one six-membered ring): smaller.</li>
<li><strong>Cytosine (C)</strong>, <strong>thymine (T)</strong> in DNA, and <strong>uracil (U)</strong> in RNA.</li>
<li>C is in both; T only in DNA; U only in RNA.</li>
</ul></div></div>
<p>Why it matters: every base pair is one purine + one pyrimidine (A–T, G–C), so every “rung” of the ladder is the same length and the double helix keeps a <strong>constant diameter of 2 nm</strong>.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Pure As Gold</strong>: purines are A and G. <strong>CUT the Py</strong>: pyrimidines are C, U and T (the shorter name has the bigger molecules).</p></div>`
      },
      {
        tier: "essential",
        q: "Q4. The following is a segment taken from a strand of DNA: 5′-ATGCCTTA-3′. Write out the complementary strand for this segment. Be sure to show directionality.",
        a: `<div class="eq"><span class="seq">5′-ATGCCTTA-3′</span><br><span class="seq">3′-TACGGAAT-5′</span></div>
<p>Pair each base (A with T, G with C) and flip the direction labels, because the strands are <strong>antiparallel</strong>: the new strand's 3′ end sits opposite the given strand's 5′ end.</p>
<p>By convention sequences are written 5′ → 3′, so the same answer is often written reversed:</p>
<div class="eq"><span class="seq">5′-TAAGGCAT-3′</span></div>
<p>Both forms are correct as long as the ends are labelled. The common mistake is writing <span class="seq">5′-TACGGAAT-3′</span>: the right letters but the wrong direction labels.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.02 slides */
  {
    id: "qa-302-slides",
    title: "DNA structure slides: discussion",
    lesson: "3.02",
    source: "Lesson 3.02 slides (Nucleic Acids & DNA Structure): the facts each slide asks you to explain. No class answer key; these are model answers.",
    items: [
      {
        tier: "essential",
        q: "What are the roles of DNA and of the three types of RNA named on the slides?",
        a: `<p>Nucleic acids store <strong>hereditary information</strong> that determines an organism's structural and functional characteristics.</p>
<ul>
<li><strong>DNA</strong> (deoxyribonucleic acid): contains the instructions for creating an organism. It stays in the nucleus (eukaryotes) and is copied before each division.</li>
<li><strong>RNA</strong> (ribonucleic acid) is used to make proteins:
<ul>
<li><strong>mRNA</strong> (messenger RNA) copies a gene and carries it out of the nucleus.</li>
<li><strong>rRNA</strong> (ribosomal RNA) combines with proteins to form the <strong>ribosome</strong>, which reads the instructions.</li>
<li><strong>tRNA</strong> (transfer RNA) carries amino acids to the growing polypeptide chain.</li>
</ul></li>
</ul>
<p>The slide's point is that the <strong>sequence of the 4 bases determines protein structure</strong>: DNA holds the information, and the three RNAs work together to turn it into a protein (lessons 3.04 and 3.05).</p>`
      },
      {
        tier: "essential",
        q: "Compare deoxyribose and ribose, and explain how the carbons of the sugar are numbered.",
        a: `<p>Both are <strong>five-carbon (pentose) sugars</strong> in a five-membered ring. The carbons are numbered with primes (1′ to 5′) so they are not confused with the atoms of the base:</p>
<ul>
<li><strong>1′ carbon:</strong> the nitrogenous base attaches here.</li>
<li><strong>2′ carbon:</strong> the difference between the sugars. <strong>Ribose has –OH</strong> here; <strong>deoxyribose has only –H</strong> (“deoxy” = one less oxygen).</li>
<li><strong>3′ carbon:</strong> carries an –OH that bonds to the next nucleotide's phosphate (phosphodiester bond).</li>
<li><strong>5′ carbon:</strong> the CH<sub>2</sub> outside the ring that carries the phosphate group.</li>
</ul>
<p>Deoxyribose is in DNA; ribose is in RNA. The missing 2′-OH makes DNA more chemically stable, which suits a molecule that must store information for a lifetime. RNA's extra –OH makes it more reactive and short-lived, which suits a temporary message.</p>`
      },
      {
        tier: "essential",
        q: "Why is DNA slightly acidic and negatively charged, and why does that matter?",
        a: `<p>Each nucleotide in the backbone contains a <strong>phosphate group</strong>. In the cell (around pH 7) each phosphate in the backbone loses an H<sup>+</sup> and carries a <strong>negative charge</strong>. Releasing H<sup>+</sup> is what makes DNA an acid (Miescher's nuclein was the acidic part), and the whole backbone, on the outside of the helix, is coated in negative charge.</p>
<ul>
<li>Positively charged <strong>histone proteins</strong> bind tightly to the negative backbone, so DNA can be wrapped and packed into chromosomes (nucleosomes and chromatin).</li>
<li>The charged backbone faces the watery cytoplasm or nucleoplasm, while the hydrophobic bases are tucked inside.</li>
<li data-tier="extra">In gel electrophoresis, DNA always moves toward the positive electrode because of this charge.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "The slide says complementary base pairing keeps the diameter of the helix constant at 2 nm, and that the large number of hydrogen bonds accounts for DNA's stability. Explain both statements.",
        a: `<p><strong>Constant 2 nm width:</strong> every base pair is one double-ringed <strong>purine</strong> plus one single-ringed <strong>pyrimidine</strong> (A with T, G with C). Each pair is therefore the same total length, so the distance between the two backbones never changes. A purine–purine pair would bulge the helix and a pyrimidine–pyrimidine pair would pinch it.</p>
<p><strong>Stability:</strong> one hydrogen bond is weak, but DNA has millions of them: <strong>2 per A=T pair and 3 per G≡C pair</strong>. Together they hold the strands firmly, yet each one can be broken by an enzyme (helicase) when the strands must separate. Other contributions:</p>
<ul>
<li>the flat bases <strong>stack</strong> on top of each other inside the helix, which adds a lot of stability;</li>
<li>DNA with more G–C pairs is harder to separate (3 hydrogen bonds per pair), so it needs a higher temperature to “melt”;</li>
<li>the covalent phosphodiester backbone keeps each strand's sequence intact even when the strands are apart.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "What does it mean that DNA's strands are antiparallel, and how do you identify the 5′ and 3′ ends of a strand?",
        a: `<p>The two strands of the double helix run in <strong>opposite directions</strong>. If one strand runs 5′ → 3′ from top to bottom, its partner runs 5′ → 3′ from bottom to top.</p>
<ul>
<li><strong>5′ end:</strong> the strand terminates in a <strong>phosphate group</strong> (attached to the 5′ carbon of the last sugar).</li>
<li><strong>3′ end:</strong> the strand terminates in the <strong>sugar</strong>, with a free <strong>–OH on the 3′ carbon</strong>.</li>
</ul>
<p>Antiparallel arrangement is required for the bases to line up and hydrogen-bond correctly. It also explains much of the next lessons: polymerases can only add to a free 3′-OH, so new strands always grow 5′ → 3′, which is why one strand is copied continuously and the other in fragments (lesson 3.03).</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>An end is named after its free carbon: a free <strong>phosphate on carbon 5′</strong> makes a 5′ end; a free <strong>–OH on carbon 3′</strong> makes a 3′ end.</p></div>`
      },
      {
        tier: "essential",
        q: "Using the measurements on the DNA structure slide, how many base pairs and complete turns are in a 34 nm stretch of DNA?",
        a: `<p>Class numbers: <strong>2 nm</strong> diameter, <strong>0.34 nm</strong> between base pairs, <strong>3.4 nm</strong> per full turn, <strong>10 base pairs per turn</strong>.</p>
<ul>
<li>Base pairs = 34 nm ÷ 0.34 nm per bp = <strong>100 bp</strong>.</li>
<li>Turns = 34 nm ÷ 3.4 nm per turn = <strong>10 turns</strong> (check: 100 bp ÷ 10 bp per turn = 10).</li>
</ul>
<p>The figure also shows a <strong>major groove</strong> and a <strong>minor groove</strong>: because the backbones are not evenly spaced around the helix, the gaps between them alternate wide and narrow. Proteins such as transcription factors read the base sequence through the grooves without unwinding the DNA.</p>
<p data-tier="extra">Scale it up: a human cell has about 6 billion bp. At 0.34 nm each that is about 2 m of DNA, packed into a nucleus a few micrometres across.</p>`
      },
      {
        tier: "essential",
        q: "What are telomeres? Describe their sequence, their protective cap, and what happens to them as cells divide.",
        a: `<ul>
<li><strong>What:</strong> <span class="term">telomeres</span> are repeating, non-coding sequences at the <strong>ends of chromosomes</strong>. In humans the repeat is the <strong>6-base-pair</strong> sequence <span class="seq">5′-TTAGGG-3′</span>, repeated thousands of times.</li>
<li><strong>Protective cap:</strong> proteins bind to the telomere to form a protective cap (the <strong>shelterin</strong> complex: TRF1, TRF2, POT1, TIN2, TPP1 and RAP1). The single-stranded 3′ end tucks back into the double-stranded region, forming a <strong>T-loop</strong>. The cap hides the chromosome end so the cell does not mistake it for broken DNA and try to “repair” or fuse it.</li>
<li><strong>Shortening:</strong> DNA polymerase cannot fully copy the very end of the lagging strand (the end-replication problem, lesson 3.03), so telomeres <strong>shorten with each division</strong>. They act as a buffer: they are lost instead of genes.</li>
<li><strong>When they run out:</strong> cell division stops. The cell either becomes inactive (senescence) or destroys itself (apoptosis), as the slide's diagram shows. This is why telomeres are shorter in an elderly adult than in a teenager.</li>
</ul>
<p data-tier="likely">The enzyme <strong>telomerase</strong> can rebuild telomeres using its own RNA template. It is active in stem cells and germ cells, mostly off in body cells, and switched back on in most cancer cells, which is one reason cancer cells can divide without limit.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.03 practice questions + key */
  {
    id: "qa-303-key",
    title: "Replication practice: questions 1–5",
    lesson: "3.03",
    source: "Lesson 3.03 slides (DNA Replication), slide 21 Practice Questions, with the class answer key (DNA Replication Review Answers). Each answer opens with the key, then expands it.",
    items: [
      {
        tier: "essential",
        q: "Q1. Outline the purpose of the following enzymes: topoisomerase, DNA helicase, DNA polymerase I, DNA polymerase III, DNA ligase, RNA primase.",
        a: `<p><strong>Class key:</strong> <em>Topoisomerase</em> relieves the twisting tension (supercoiling) that builds up ahead of the fork by temporarily cutting the backbone, letting it untwist, and sealing it again. <em>Helicase</em> “unzips” the helix by breaking the hydrogen bonds between base pairs, exposing the single strands as templates. <em>RNA primase</em> lays down a short RNA primer that gives DNA polymerase a free 3′-OH to build on, because polymerases cannot start a strand from scratch. <em>DNA polymerase III</em> is the main builder: it adds complementary DNA nucleotides to the growing 3′ end of the new strand. <em>DNA polymerase I</em> removes the RNA primers, replaces them with DNA, and proofreads. <em>DNA ligase</em> is the “molecular glue” that seals the remaining nicks in the backbone with phosphodiester bonds.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Enzyme</th><th>Job</th><th>Where it works</th></tr></thead>
<tbody>
<tr><td>Helicase</td><td>breaks H-bonds between base pairs; unwinds the helix</td><td>at the fork, moving with it</td></tr>
<tr><td>Topoisomerase</td><td>cuts, untwists and reseals the backbone to relieve supercoiling</td><td>ahead of the fork, in the still-double-stranded DNA</td></tr>
<tr><td>RNA primase</td><td>makes a short RNA primer (about 10 nucleotides) with a free 3′-OH</td><td>once on the leading strand; at the start of every Okazaki fragment</td></tr>
<tr><td>DNA polymerase III</td><td>adds DNA nucleotides to the 3′ end; builds 5′ → 3′; proofreads</td><td>both new strands, starting from each primer</td></tr>
<tr><td>DNA polymerase I</td><td>removes RNA primers and fills the gaps with DNA; proofreads</td><td>mainly the lagging strand (and the one leading primer)</td></tr>
<tr><td>DNA ligase</td><td>forms the last phosphodiester bond in each nick</td><td>between Okazaki fragments (and wherever a primer was replaced)</td></tr>
</tbody></table></div>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The answer key's topoisomerase sentence says “DNA gyrase relieves this torsional strain”. That is not a different enzyme: <strong>DNA gyrase is the bacterial topoisomerase</strong> (a type II topoisomerase). Use the general name <strong>topoisomerase</strong> on tests, since it is the term on the slides and it covers every organism.</p></div>`
      },
      {
        tier: "essential",
        q: "Q2. Compare the mechanisms by which the leading and lagging strands are replicated. Explain why the two mechanisms exist.",
        a: `<p><strong>Class key:</strong> The <em>leading strand</em> is synthesized <strong>continuously</strong> in the same direction the fork is opening; it needs only a <strong>single RNA primer</strong>, and DNA polymerase III builds it 5′ → 3′ right behind helicase. The <em>lagging strand</em> is synthesized <strong>discontinuously</strong> in short <strong>Okazaki fragments</strong>, built <strong>away from</strong> the opening fork, so primase must keep laying down new primers as more template is exposed. Why: DNA is <strong>antiparallel</strong>, and DNA polymerase III can only add nucleotides to the <strong>free 3′ end</strong> of a growing strand (it builds only 5′ → 3′). With the templates facing opposite ways, the enzyme can smoothly follow helicase on only one strand; on the other it must work backwards in chunks.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Leading strand</th><th>Lagging strand</th></tr></thead>
<tbody>
<tr><td>Synthesis</td><td>continuous</td><td>discontinuous (Okazaki fragments)</td></tr>
<tr><td>Direction relative to the fork</td><td>toward the fork</td><td>away from the fork</td></tr>
<tr><td>RNA primers</td><td>1</td><td>many (one per fragment)</td></tr>
<tr><td>Template read</td><td>3′ → 5′, moving with the fork</td><td>3′ → 5′, moving away from the fork</td></tr>
<tr><td>Enzymes</td><td>primase (once), pol III, pol I (one primer)</td><td>primase (repeatedly), pol III, pol I, <strong>ligase</strong></td></tr>
</tbody></table></div>
<p>Both strands are still built 5′ → 3′. The difference is only whether that direction happens to point toward the fork (leading) or away from it (lagging).</p>`
      },
      {
        tier: "essential",
        q: "Q3. Explain why it is necessary for eukaryotic DNA to have multiple replication origin sites.",
        a: `<p><strong>Class key:</strong> Eukaryotic genomes (like human DNA) are massive, linear molecules with billions of base pairs, and DNA polymerase moves at a relatively slow rate. With only one origin per chromosome, like circular bacterial DNA, copying a single chromosome would take <strong>weeks or even months</strong>. With <strong>thousands of origins</strong>, replication bubbles form at the same time along each chromosome and eventually <strong>merge</strong>, so the whole genome is copied in just a few hours.</p>
<p><strong>Put numbers on it:</strong></p>
<ul>
<li>Human chromosome 1 has about 250 million bp. Eukaryotic polymerases add roughly 50 nucleotides per second.</li>
<li>One origin gives two forks, so 100 nucleotides per second in total: 250,000,000 ÷ 100 = 2,500,000 s, which is about <strong>29 days</strong>.</li>
<li>With thousands of origins working at once, S phase takes only <strong>about 8 hours</strong>.</li>
</ul>
<p>Contrast: a bacterial chromosome is smaller (about 4.6 million bp in <em>E. coli</em>), circular, and its polymerase is faster, so <strong>one origin</strong> is enough to copy it in well under an hour.</p>`
      },
      {
        tier: "essential",
        q: "Q4. Explain why both parental DNA strands may be used to serve as a template for replication. How does DNA's structure allow for this?",
        a: `<p><strong>Class key:</strong> Both parental strands must serve as templates so the cell produces <strong>two identical double helices</strong> and each daughter cell receives exactly the same genetic instructions. DNA's structure allows this through <strong>complementary base pairing</strong>: because A always pairs with T and C always pairs with G, each single strand contains all the information needed to rebuild its partner. Given one strand, the base-pairing rules dictate exactly what the new strand must be.</p>
<p>Three structural features make this work:</p>
<ul>
<li><strong>Weak hydrogen bonds between the strands</strong> can be broken by helicase without breaking the strong covalent backbone, so the two strands come apart intact.</li>
<li><strong>Complementary pairing</strong> makes the two strands carry the same information in two “mirror” forms, so either strand can be used.</li>
<li>The strands are <strong>antiparallel</strong>, so each template is read 3′ → 5′ while its new partner is built 5′ → 3′.</li>
</ul>
<p>The result is <strong>semiconservative</strong> replication: each new helix is one old strand plus one new strand, exactly as Meselson and Stahl showed.</p>`
      },
      {
        tier: "essential",
        q: "Q5. Meselson and Stahl's experiment indicated that DNA replicates semiconservatively. What percentage of DNA double helices would contain one of the original parent strands after four generations?",
        a: `<p><strong>Class key: 12.5%.</strong> The two original parent strands never disappear; they are always part of exactly two double helices, however many generations pass. After four generations there are 16 helices, so 2 ÷ 16 × 100 = <strong>12.5%</strong>.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Generation</th><th>Total helices</th><th>Hybrid (one original strand)</th><th>Entirely new</th><th>% with an original strand</th></tr></thead>
<tbody>
<tr><td>0</td><td>1</td><td>(1 parent, both strands original)</td><td>0</td><td>100%</td></tr>
<tr><td>1</td><td>2</td><td>2</td><td>0</td><td>100%</td></tr>
<tr><td>2</td><td>4</td><td>2</td><td>2</td><td>50%</td></tr>
<tr><td>3</td><td>8</td><td>2</td><td>6</td><td>25%</td></tr>
<tr><td>4</td><td>16</td><td>2</td><td>14</td><td><strong>12.5%</strong></td></tr>
</tbody></table></div>
<p>General rule: after <em>n</em> generations, 2 of 2<sup><em>n</em></sup> helices are hybrid. Careful with wording: if a question asks for the percentage of <em>strands</em> (not helices) that are original, it is 2 of 32 = 6.25% after four generations.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.03 bubble */
  {
    id: "qa-303-bubble",
    title: "Replication bubble: check your understanding",
    lesson: "3.03",
    source: "Lesson 3.03 slides 19–20 (Check Your Understanding): complete the replication bubble by drawing all leading and lagging strands and every 5′ and 3′ end. Slide 20 is the class answer.",
    items: [
      {
        tier: "essential",
        q: "Complete the replication bubble: the top parental strand runs 5′ (left) to 3′ (right), and one new strand is already drawn on the top-left, pointing left. Draw all the leading and lagging strands and indicate all 5′ and 3′ ends.",
        a: `<figure class="diagram"><svg viewBox="0 0 720 310" role="img" aria-labelledby="gqa303-t gqa303-d">
<title id="gqa303-t">Completed replication bubble</title>
<desc id="gqa303-d">A replication bubble opened at a central origin, with a fork at each end. The top parental strand runs 5 prime to 3 prime from left to right; the bottom parental strand runs 3 prime to 5 prime. On the top template, new DNA is built leftward: a continuous leading strand from the origin to the left fork, and Okazaki fragments pointing left on the right half (lagging strand of the right fork). On the bottom template, new DNA is built rightward: a continuous leading strand from the origin to the right fork, and Okazaki fragments pointing right on the left half (lagging strand of the left fork). Every new segment has its 5 prime end at its tail and its 3 prime end at its arrowhead.</desc>
<defs>
<marker id="gqa303-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--etc)"/></marker>
<marker id="gqa303-ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
</defs>
<text x="360" y="34" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">grey = parental (template) strands · blue = new DNA · arrowhead = 3′ end of new DNA</text>
<polyline points="30,150 150,150 200,70 520,70 570,150 690,150" style="fill:none;stroke:var(--ink-2)" stroke-width="2.5"/>
<polyline points="30,170 150,170 200,250 520,250 570,170 690,170" style="fill:none;stroke:var(--ink-2)" stroke-width="2.5"/>
<text x="10" y="155" style="fill:var(--ink);font-size:13px;font-weight:700">5′</text>
<text x="10" y="175" style="fill:var(--ink);font-size:13px;font-weight:700">3′</text>
<text x="696" y="155" style="fill:var(--ink);font-size:13px;font-weight:700">3′</text>
<text x="696" y="175" style="fill:var(--ink);font-size:13px;font-weight:700">5′</text>
<circle cx="360" cy="70" r="3.5" style="fill:var(--ink-2)"/>
<circle cx="360" cy="250" r="3.5" style="fill:var(--ink-2)"/>
<text x="360" y="166" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">origin</text>
<line x1="350" y1="86" x2="214" y2="86" style="stroke:var(--etc)" stroke-width="2.5" marker-end="url(#gqa303-ah)"/>
<line x1="432" y1="86" x2="376" y2="86" style="stroke:var(--etc)" stroke-width="2.5" marker-end="url(#gqa303-ah)"/>
<line x1="508" y1="86" x2="452" y2="86" style="stroke:var(--etc)" stroke-width="2.5" marker-end="url(#gqa303-ah)"/>
<line x1="370" y1="234" x2="506" y2="234" style="stroke:var(--etc)" stroke-width="2.5" marker-end="url(#gqa303-ah)"/>
<line x1="288" y1="234" x2="344" y2="234" style="stroke:var(--etc)" stroke-width="2.5" marker-end="url(#gqa303-ah)"/>
<line x1="212" y1="234" x2="268" y2="234" style="stroke:var(--etc)" stroke-width="2.5" marker-end="url(#gqa303-ah)"/>
<g style="fill:var(--ink);font-size:12px" text-anchor="middle">
<text x="214" y="106">3′</text><text x="350" y="106">5′</text>
<text x="376" y="106">3′</text><text x="432" y="106">5′</text>
<text x="452" y="106">3′</text><text x="508" y="106">5′</text>
<text x="212" y="222">5′</text><text x="268" y="222">3′</text>
<text x="288" y="222">5′</text><text x="344" y="222">3′</text>
<text x="370" y="222">5′</text><text x="506" y="222">3′</text>
</g>
<g style="fill:var(--ink-2);font-size:12px;font-weight:650" text-anchor="middle">
<text x="282" y="136">leading (left fork)</text>
<text x="442" y="136">lagging (right fork)</text>
<text x="278" y="198">lagging (left fork)</text>
<text x="438" y="198">leading (right fork)</text>
</g>
<line x1="140" y1="286" x2="60" y2="286" style="stroke:var(--ink-2)" stroke-width="1.6" marker-end="url(#gqa303-ah2)"/>
<text x="150" y="290" style="fill:var(--ink-2);font-size:12px">fork moves left</text>
<line x1="580" y1="286" x2="660" y2="286" style="stroke:var(--ink-2)" stroke-width="1.6" marker-end="url(#gqa303-ah2)"/>
<text x="570" y="290" text-anchor="end" style="fill:var(--ink-2);font-size:12px">fork moves right</text>
</svg>
<figcaption>The answer to slides 19–20: each fork has one leading and one lagging strand, and each template strand is “leading” on one side of the origin and “lagging” on the other.</figcaption></figure>
<p><strong>Class answer (slide 20), in words:</strong></p>
<ol>
<li>Label the template ends first: top strand 5′ (left) → 3′ (right); bottom strand 3′ (left) → 5′ (right).</li>
<li><strong>Top template:</strong> new DNA must be antiparallel to it, so it is built 5′ → 3′ from <strong>right to left</strong>. Left of the origin this points toward the left fork: a <strong>continuous leading strand</strong> (the arrow already drawn). Right of the origin it points away from the right fork: <strong>Okazaki fragments</strong>, each pointing left (lagging strand of the right fork).</li>
<li><strong>Bottom template:</strong> new DNA is built 5′ → 3′ from <strong>left to right</strong>. Right of the origin: a <strong>continuous leading strand</strong> toward the right fork. Left of the origin: <strong>Okazaki fragments</strong>, each pointing right (lagging strand of the left fork).</li>
<li>Every new piece has its <strong>5′ end at its tail</strong> and its <strong>3′ end at its arrowhead</strong>. The newest DNA (slide 20 shows it in red) is always right next to each fork.</li>
</ol>
<p>Quick check: in each fork, the two new strands point in opposite directions; at each fork exactly one points toward it.</p>`
      },
      {
        tier: "likely",
        q: "Slide 20 labels the top parental strand as the “leading-strand template of the left-hand fork” and the “lagging-strand template of the right-hand fork”. How can the same strand be both?",
        a: `<p>Because the two forks move in <strong>opposite directions</strong> from the origin, but a polymerase can only build in one direction (5′ → 3′) along a given template.</p>
<ul>
<li>On the top template (5′ left, 3′ right), new DNA always grows leftward.</li>
<li>Left of the origin, the left fork is also moving left, so the new strand can follow it continuously: <strong>leading</strong>.</li>
<li>Right of the origin, the right fork is moving right, away from the direction of growth, so new DNA must be made in backward pieces as the fork exposes more template: <strong>lagging</strong>.</li>
</ul>
<p>The bottom strand is the mirror image: lagging template for the left fork, leading template for the right fork. So “leading” and “lagging” describe how a stretch of new DNA relates to <strong>its fork</strong>, not a permanent property of a parental strand. Every replication bubble therefore has <strong>two leading strands and two lagging strands</strong>, one of each per fork.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.03 labelling a-l */
  {
    id: "qa-303-label",
    title: "Replication labelling: items a–l",
    lesson: "3.03",
    source: "DNA Rep. Reading & Labeling handout (class worksheet with the answers filled in): the labelled replication-fork diagram, items a–l. In the diagram the unreplicated helix is on the left and the fork moves left; the top arm is copied continuously and the bottom arm in fragments.",
    items: [
      {
        tier: "essential",
        q: "Label a: the enzyme at the point where the parental double helix is being pulled apart. Name it and give its job.",
        a: `<p><strong>Class key:</strong> DNA helicase.</p>
<p>Helicase sits right at the fork and <strong>breaks the hydrogen bonds</strong> between complementary bases, unwinding and separating (“unzipping”) the parental strands so each can be used as a template. It moves along with the fork (to the left in this diagram), using energy from ATP.</p>
<p>It does not break the covalent backbone; each parental strand stays intact. That is the job of topoisomerase, which cuts and reseals the backbone ahead of the fork to relieve the twisting that unwinding creates.</p>`
      },
      {
        tier: "essential",
        q: "Label b: the small proteins coating the separated single strands just behind the fork.",
        a: `<p><strong>Class key:</strong> single-strand binding proteins (SSBs).</p>
<p>Once helicase separates the strands, the exposed bases would quickly pair up again (re-anneal) or fold back on themselves. SSBs bind along the single strands to <strong>keep them apart and straight</strong>, so the bases stay exposed for primase and DNA polymerase. They are pushed off as the new strand is built.</p>
<p>Slide wording: SSBs bind to exposed bases to <strong>prevent hydrogen bonding</strong>.</p>`
      },
      {
        tier: "essential",
        q: "Label c: the large enzyme on the top (continuous) strand, close to the fork.",
        a: `<p><strong>Class key:</strong> DNA polymerase (DNA polymerase III).</p>
<p>DNA polymerase III adds free DNA nucleotides that are <strong>complementary</strong> to the template, one at a time, to the <strong>3′ end</strong> of the growing strand. It reads the template 3′ → 5′ and builds the new strand 5′ → 3′. On this top arm it follows right behind helicase, so it builds the leading strand continuously.</p>
<p>The same enzyme also works on the bottom arm, building each Okazaki fragment from its primer. It proofreads as it goes: if a wrong base is added it backs up, removes it (exonuclease activity) and inserts the right one.</p>`
      },
      {
        tier: "essential",
        q: "Label d: the new strand along the top arm, made in one continuous piece.",
        a: `<p><strong>Class key:</strong> leading strand.</p>
<p>The leading strand is built <strong>continuously toward the replication fork</strong>. Its template is oriented so that 5′ → 3′ synthesis points in the same direction the fork is moving, so DNA polymerase III can simply follow helicase. It needs <strong>only one RNA primer</strong>, laid down at the origin.</p>
<p>In the diagram its 5′ end is at the far right (where it started) and its 3′ end is at the fork, where nucleotides are still being added.</p>`
      },
      {
        tier: "essential",
        q: "Label e: the new strand along the bottom arm, made in pieces.",
        a: `<p><strong>Class key:</strong> lagging strand.</p>
<p>The lagging strand is built <strong>discontinuously, away from the replication fork</strong>. Its template runs the opposite way, so 5′ → 3′ synthesis points away from the fork. Each time helicase opens a new stretch of template, primase lays down a new primer near the fork and DNA polymerase III builds a short piece backward, toward the previous piece. It needs <strong>many primers</strong>.</p>
<p>It is called “lagging” because each piece can only start after the fork has moved on and exposed enough template, so its synthesis is always a little behind the leading strand.</p>`
      },
      {
        tier: "essential",
        q: "Label f: the enzyme at the far right of the bottom arm, where two pieces of new DNA meet.",
        a: `<p><strong>Class key:</strong> DNA ligase.</p>
<p>After DNA polymerase I replaces an RNA primer with DNA, there is still one missing bond in the backbone between the end of one fragment and the start of the next (a <span class="term">nick</span>). Ligase forms the <strong>phosphodiester bond</strong> between the 3′-OH of one fragment and the 5′ phosphate of the next, joining the Okazaki fragments into one continuous strand.</p>
<p>It works far from the fork because it acts last: only after the fragment is finished and its primer has been replaced.</p>`
      },
      {
        tier: "essential",
        q: "Label g: the short pieces of new DNA along the bottom arm.",
        a: `<p><strong>Class key:</strong> Okazaki fragments.</p>
<p><span class="term">Okazaki fragments</span> are the short segments of DNA that make up the lagging strand (in bacteria about 1,000–2,000 nucleotides long; in eukaryotes about 100–200). Each one:</p>
<ul>
<li>begins with its own <strong>RNA primer</strong> made by primase near the fork;</li>
<li>is extended 5′ → 3′ by DNA polymerase III, away from the fork, until it reaches the previous fragment;</li>
<li>has its primer replaced with DNA by DNA polymerase I;</li>
<li>is joined to its neighbour by DNA ligase.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Label h: the short stretch at the start of each new piece, made of a different nucleic acid.",
        a: `<p><strong>Class key:</strong> RNA primer.</p>
<p>A primer is a short strand of <strong>RNA nucleotides</strong> (the reading says about 10) that is complementary to the template. DNA polymerase cannot start a new strand on its own; it can only add to an existing <strong>3′-OH</strong>. The primer supplies that free 3′ end.</p>
<p>Primers are temporary: DNA polymerase I later removes each one and fills the gap with DNA nucleotides, so the finished molecule contains no RNA.</p>`
      },
      {
        tier: "essential",
        q: "Label i: the enzyme near the fork on the bottom arm that lays down label h.",
        a: `<p><strong>Class key:</strong> primase (forms the RNA primer).</p>
<p>Primase is an RNA polymerase that <strong>can</strong> start a chain from nothing. It reads the template and joins about 10 complementary RNA nucleotides into a primer. It works once on the leading strand, at the origin, but must act <strong>again and again on the lagging strand</strong>, near the fork, every time enough new template is exposed for another Okazaki fragment.</p>`
      },
      {
        tier: "essential",
        q: "Label j: the Y-shaped point where the parental strands separate.",
        a: `<p><strong>Class key:</strong> replication fork.</p>
<p>The <span class="term">replication fork</span> is the Y-shaped region where helicase is unwinding the DNA (slide wording). The unreplicated double helix is the stem of the Y; the two separated template strands, each getting a new partner, are the arms.</p>
<p>Each replication bubble has <strong>two forks</strong> moving in opposite directions from the origin (bidirectional replication). This diagram shows one of them, moving left, as the “overall direction of replication” arrow shows.</p>`
      },
      {
        tier: "essential",
        q: "Label k: one end of the unreplicated parental helix at the far left, labelled “3′ end of parental strand”. Why is it a 3′ end?",
        a: `<p><strong>Class key:</strong> 3′ end of the parental strand.</p>
<p>A 3′ end finishes with the <strong>sugar</strong> (a free –OH on the 3′ carbon). The two parental strands are <strong>antiparallel</strong>, so at the same end of the helix one strand must end 3′ and its partner 5′ (label l).</p>
<p>You can work out which is which from the new strands. The leading strand grows 5′ → 3′ <em>toward</em> the fork, so its template runs 3′ → 5′ toward the fork and ends 5′ ahead of it. The lagging-strand template is the opposite: it ends <strong>3′</strong> on the unreplicated side of the fork. This is the same rule that the top-right corner of the diagram shows: the leading strand starts 5′ at the right end, beside its template's 3′ end.</p>`
      },
      {
        tier: "essential",
        q: "Label l: the other end of the parental helix at the far left, labelled “5′ end”.",
        a: `<p><strong>Class key:</strong> 5′ end (of the other parental strand).</p>
<p>A 5′ end finishes with a <strong>phosphate group</strong> on the 5′ carbon. Because the strands are antiparallel, it sits beside the 3′ end of its partner (label k). This 5′ end belongs to the <strong>leading-strand template</strong>: polymerase reads that template 3′ → 5′, moving toward this end as the fork advances.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>If a diagram gives you one end label, you can fill in every other one: partners are always opposite (5′ beside 3′), new strands are antiparallel to their templates, and every arrowhead on a new strand is a 3′ end.</p></div>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.03 reading */
  {
    id: "qa-303-reading",
    title: "Replication reading: proofreading, repair and priming",
    lesson: "3.03",
    source: "DNA Rep. Reading & Labeling handout, reading section (textbook excerpt on polymerases, priming, proofreading and repair), with slide 17 (quality control). No answer key; model answers.",
    items: [
      {
        tier: "essential",
        q: "How often does DNA polymerase put in the wrong base, and how does proofreading fix these errors?",
        a: `<p>According to the reading, initial pairing errors happen as often as <strong>1 per 10,000 base pairs</strong>. Copying billions of base pairs at that rate would give hundreds of thousands of mistakes per division, so the accuracy of the final DNA comes from <strong>proofreading and repair</strong>, not from the first pairing.</p>
<ul>
<li><strong>Proofreading:</strong> DNA polymerases I and III check each new nucleotide against the template as it is added. If it does not pair correctly, the polymerase backs up, acts as an <span class="term">exonuclease</span> (it removes the incorrect nucleotide from the end of the strand), and replaces it with the correct one (slide 17).</li>
<li><strong>Repair after replication:</strong> mismatch repair and excision repair fix most of what proofreading misses.</li>
</ul>
<p>Together these bring the final error rate down to about <strong>1 in 10<sup>9</sup></strong> (one in a billion) nucleotides.</p>`
      },
      {
        tier: "likely",
        q: "What is mismatch repair?",
        a: `<p><span class="term">Mismatch repair</span> fixes pairing errors that slip past the polymerase's own proofreading. In eukaryotic cells, several proteins in addition to DNA polymerase are involved (reading).</p>
<ol class="steps">
<li><p class="step-head">Detect</p><p>Repair proteins scan the new DNA for a mismatched pair that distorts the helix (for example, G opposite T).</p></li>
<li><p class="step-head">Choose the new strand</p><p>They identify the newly made strand (the error is in the copy, not the template) and cut out a stretch containing the wrong base.</p></li>
<li><p class="step-head">Resynthesize and seal</p><p>DNA polymerase fills the gap using the old strand as the template, and ligase seals the backbone.</p></li>
</ol>
<p data-tier="extra">Inherited defects in mismatch-repair genes cause a form of hereditary colon cancer (Lynch syndrome), because mutations pile up in every division.</p>`
      },
      {
        tier: "essential",
        q: "How does excision repair fix thymine dimers caused by ultraviolet light?",
        a: `<p>DNA can be damaged after it is made, by reactive chemicals, radioactive emissions, X-rays and <strong>ultraviolet (UV) light</strong>. In skin cells, UV light can covalently link two <strong>neighbouring thymines on the same strand</strong>, making a <span class="term">thymine dimer</span> that kinks the helix and blocks replication and transcription.</p>
<ol class="steps">
<li><p class="step-head">Cut out</p><p>A <strong>nuclease</strong> cuts the damaged strand on both sides of the dimer and the damaged section is removed.</p></li>
<li><p class="step-head">Fill in</p><p><strong>DNA polymerase</strong> fills the gap with the correct nucleotides, using the undamaged strand as the template.</p></li>
<li><p class="step-head">Seal</p><p><strong>DNA ligase</strong> joins the new piece to the rest of the strand.</p></li>
</ol>
<p>This works only because DNA is double-stranded: the complementary strand still holds the correct information. <span data-tier="extra">People with xeroderma pigmentosum lack a working excision-repair enzyme and are extremely sensitive to sunlight and skin cancer.</span></p>`
      },
      {
        tier: "essential",
        q: "According to the reading, why is a primer needed, how long is it, and why does the lagging strand need so many?",
        a: `<ul>
<li><strong>Why:</strong> DNA polymerase <strong>cannot initiate</strong> a DNA strand; it can only add nucleotides to an existing chain with a free 3′-OH.</li>
<li><strong>What:</strong> the enzyme <strong>primase</strong> joins about <strong>10 RNA nucleotides</strong> to form the primer needed to start the chain.</li>
<li><strong>How many:</strong> the leading strand needs one primer. On the lagging strand, <strong>each fragment requires its own primer</strong>, because each Okazaki fragment is a separate start.</li>
<li><strong>Finishing:</strong> a continuous strand is produced after another DNA polymerase (DNA polymerase I) replaces each RNA primer with DNA nucleotides and ligase joins the fragments.</li>
</ul>
<p>The reading also gives the key direction rule: DNA polymerases add nucleotides only to the <strong>3′ end</strong> of a growing strand, so DNA is replicated in the <strong>5′ → 3′</strong> direction. Because the strands are antiparallel, simultaneous synthesis of both strands needs the leading/lagging arrangement.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.03 card sort */
  {
    id: "qa-303-order",
    title: "Replication card sort: the seven steps",
    lesson: "3.03",
    source: "Interactive DNA Replication card sort (class activity): place the seven enzyme cards in order. The activity's order is helicase, SSBs, topoisomerase, primase, DNA polymerase III, DNA polymerase I, DNA ligase.",
    items: [
      {
        tier: "essential",
        q: "Card 1: which enzyme comes first, and why must it act before any of the others?",
        a: `<p><strong>Helicase</strong>: unwinds and unzips the DNA double helix.</p>
<p>Nothing can be copied while the bases are locked in pairs inside the helix. Helicase opens the DNA at the <strong>origin of replication</strong>, breaking the hydrogen bonds between base pairs to form a <strong>replication bubble</strong> with a fork at each end. Every other enzyme needs exposed single-stranded template, so helicase must go first.</p>`
      },
      {
        tier: "essential",
        q: "Card 2: SSBs. What do they do, and why are they placed right after helicase?",
        a: `<p><strong>Single-strand binding proteins (SSBs)</strong>: attach to the separated DNA strands to prevent re-annealing.</p>
<p>As soon as the strands are apart, their complementary bases would pair back together (re-anneal), undoing helicase's work. SSBs coat the exposed single strands immediately, holding them open and straight for primase and polymerase. They have to be in place the moment the strands separate, which is why they follow helicase.</p>`
      },
      {
        tier: "essential",
        q: "Card 3: topoisomerase. What does it do, and is “third” really when it works?",
        a: `<p><strong>Topoisomerase</strong>: relieves the twisting tension ahead of the replication fork.</p>
<p>Unwinding the helix at the fork over-twists the DNA in front of it (supercoiling), like pulling apart the strands of a twisted rope. Without relief the DNA would tangle and the fork would stall. Topoisomerase cuts the backbone, lets it untwist, and reseals it.</p>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The card sort puts topoisomerase third, after SSBs. That is a <strong>teaching sequence</strong>, not the real timing: topoisomerase works <strong>ahead of the fork at the same time as helicase</strong>, because the tension appears the moment unwinding starts. Learn the activity's order for the card sort, but describe topoisomerase as working simultaneously with helicase, in front of the fork, on written answers.</p></div>`
      },
      {
        tier: "essential",
        q: "Card 4: primase. What does it make, and why is that needed before DNA polymerase III can start?",
        a: `<p><strong>Primase</strong>: synthesizes a short RNA primer to provide a starting point.</p>
<p>DNA polymerase III can only add nucleotides to an existing <strong>free 3′-OH</strong>; it cannot start a strand from nothing. Primase can, so it lays down a short complementary RNA primer (about 10 nucleotides). The leading strand needs one primer; the lagging strand needs a new primer for every Okazaki fragment.</p>`
      },
      {
        tier: "essential",
        q: "Card 5: DNA polymerase III. What does it do?",
        a: `<p><strong>DNA polymerase III</strong>: adds complementary DNA nucleotides to the growing strand.</p>
<p>Starting at the primer's 3′ end, it reads the template <strong>3′ → 5′</strong> and adds nucleotides that pair with it (A with T, G with C), building the new strand <strong>5′ → 3′</strong>. On the leading strand it works continuously toward the fork; on the lagging strand it builds Okazaki fragments away from the fork. It also proofreads, removing wrong nucleotides as it goes.</p>`
      },
      {
        tier: "essential",
        q: "Card 6: DNA polymerase I. Why does it come after polymerase III?",
        a: `<p><strong>DNA polymerase I</strong>: removes RNA primers and replaces them with DNA nucleotides.</p>
<p>The finished DNA must contain no RNA, but the primers can only be removed after polymerase III has built DNA beyond them. Pol I works along each fragment, removing the RNA nucleotides of the primer ahead of it and filling the gap with DNA, using the previous fragment's 3′ end as its starting point. It also proofreads.</p>`
      },
      {
        tier: "essential",
        q: "Card 7: DNA ligase. Why is it last?",
        a: `<p><strong>DNA ligase</strong>: seals the nicks in the sugar-phosphate backbone.</p>
<p>When pol I finishes replacing a primer, one bond is still missing between the last DNA nucleotide it added and the first nucleotide of the next fragment. Ligase forms that final <strong>phosphodiester bond</strong>, turning the separate Okazaki fragments into one continuous strand. It can only act once everything else is done, so it is the last card.</p>`
      },
      {
        tier: "likely",
        q: "The card sort lists the enzymes one after another. Does replication really happen as seven separate steps?",
        a: `<p>No. The order describes what happens to <strong>any one stretch of DNA</strong> as the fork passes over it. At a working fork all seven proteins are busy <strong>at the same time</strong>, each at a different position:</p>
<ul>
<li><strong>ahead of the fork:</strong> topoisomerase relieving supercoiling;</li>
<li><strong>at the fork:</strong> helicase unwinding, SSBs coating the new single strands, primase laying primers;</li>
<li><strong>just behind the fork:</strong> DNA polymerase III extending the leading strand and the newest Okazaki fragment;</li>
<li><strong>further behind:</strong> DNA polymerase I replacing older primers, and ligase sealing the nicks between finished fragments.</li>
</ul>
<p>On the lagging strand the primase → pol III → pol I → ligase cycle repeats for every fragment. The slide 18 animation (“Watch this!”) shows this coordinated machine moving along the DNA.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.03 slides */
  {
    id: "qa-303-slides",
    title: "Replication slides: discussion",
    lesson: "3.03",
    source: "Lesson 3.03 slides (DNA Replication): ideas the slides state or imply that are not covered by the practice questions. No class answer key; model answers.",
    items: [
      {
        tier: "essential",
        q: "When does DNA replication occur in the cell cycle, and what does “semiconservative” mean?",
        a: `<p><strong>When:</strong> during <strong>interphase</strong>, in the <strong>S (synthesis) phase</strong>, before mitosis. Every chromosome is copied so that, when the cell divides, each daughter cell receives a complete, identical set. After S phase each chromosome consists of two identical sister chromatids.</p>
<p><strong>Semiconservative</strong> (slide wording): each strand serves as a template for a new strand, and the replicated DNA has <strong>one parent strand and one new strand</strong>. Half of each original molecule is “conserved” in each copy, which is what Meselson and Stahl showed in 1958.</p>`
      },
      {
        tier: "essential",
        q: "Slide 8 says primase's primers “bind to the 3′ end of the parental strand” and that DNA polymerase III “adds nucleotides to the 3′ end of the parental strand (5′ end of daughter strand)”. What is the correct way to describe what these enzymes do?",
        a: `<div class="callout warn"><p class="callout-title">Check your notes</p><p>The wording on this slide mixes up the strands. DNA polymerase III never adds anything to the <em>parental</em> strand, and it never adds to a 5′ end. Correct version: <strong>DNA polymerase III adds nucleotides only to the free 3′-OH of the growing (new) strand.</strong> It reads the template 3′ → 5′ and builds the new strand 5′ → 3′.</p></div>
<p>What the slide is trying to say:</p>
<ul>
<li><strong>Primase</strong> makes a short RNA primer that base-pairs with the template. Because the primer is antiparallel to the template and is built 5′ → 3′, its free 3′ end faces the direction in which the new strand will grow.</li>
<li><strong>DNA polymerase III</strong> uses that primer's <strong>3′-OH</strong> as its starting point and keeps adding DNA nucleotides to the 3′ end of the new strand.</li>
<li>The new strand therefore runs 5′ (primer end) → 3′ (growing end), antiparallel to the template. The slide's own sub-point gets this right: “DNA is always synthesized in a 5′ to 3′ direction (with respect to the new strand)”.</li>
</ul>
<p>On a test, write: “DNA polymerase III adds nucleotides to the 3′ end of the new strand, reading the template 3′ → 5′.”</p>`
      },
      {
        tier: "essential",
        q: "Explain origins of replication, replication bubbles and bidirectional replication, and compare replication in prokaryotes and eukaryotes.",
        a: `<ul>
<li>Replication <strong>begins at an origin of replication</strong>, a specific sequence where helicase first opens the DNA.</li>
<li>Opening the DNA forms a <strong>replication bubble</strong> with a replication fork at each end.</li>
<li>Replication is <strong>bidirectional</strong>: the two forks move away from the origin in opposite directions, each with its own leading and lagging strand. New DNA is still always made 5′ → 3′ (slide 6).</li>
<li>In eukaryotes many bubbles grow until neighbouring bubbles <strong>merge</strong>, giving two complete daughter molecules (slide 6 figure).</li>
</ul>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Prokaryotes (e.g. <em>E. coli</em>)</th><th>Eukaryotes (e.g. humans)</th></tr></thead>
<tbody>
<tr><td>Chromosome</td><td>one, circular</td><td>many, linear</td></tr>
<tr><td>Genome size</td><td>millions of bp</td><td>billions of bp</td></tr>
<tr><td>Origins</td><td>one</td><td>thousands per chromosome set</td></tr>
<tr><td>Where</td><td>cytoplasm (nucleoid)</td><td>nucleus, S phase</td></tr>
<tr><td>Polymerase speed</td><td>faster</td><td>slower (about 50 nucleotides/s)</td></tr>
<tr><td>Okazaki fragments</td><td>about 1,000–2,000 nucleotides</td><td>about 100–200 nucleotides</td></tr>
<tr><td>Ends</td><td>no ends (circular)</td><td>telomeres; end-replication problem</td></tr>
</tbody></table></div>`
      },
      {
        tier: "likely",
        q: "Why do the telomeres of linear chromosomes shorten each time DNA is replicated?",
        a: `<p>This is the <span class="term">end-replication problem</span>, and it comes straight from the lagging-strand mechanism.</p>
<ol class="steps">
<li><p class="step-head">The last primer</p><p>At the very tip of a linear chromosome, the last Okazaki fragment on the lagging strand begins with an RNA primer.</p></li>
<li><p class="step-head">Primer removed</p><p>DNA polymerase I removes that primer, but it can only fill a gap by adding to an existing 3′-OH, and there is no DNA beyond the end of the chromosome to provide one.</p></li>
<li><p class="step-head">Gap left</p><p>The gap cannot be filled, so the new strand is slightly shorter than its template. Each round of replication loses a little more of the chromosome end.</p></li>
</ol>
<p>Telomeres (TTAGGG repeats, lesson 3.02) are the buffer: they are non-coding, so losing some of them costs no genes. When they become too short, division stops. Circular bacterial chromosomes have no ends, so they have no such problem. The enzyme <strong>telomerase</strong> solves it in stem cells, germ cells and most cancer cells by adding new repeats to the 3′ end using its own RNA template.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.04 slides */
  {
    id: "qa-304-slides",
    title: "Transcription slides: check and discussion",
    lesson: "3.04",
    source: "Lesson 3.04 slides (Protein Synthesis: Transcription): the slide 14 Check Your Understanding (answers given on the slide) and the ideas each slide asks you to explain (model answers).",
    items: [
      {
        tier: "essential",
        q: "Check your understanding (slide 14): the DNA template strand is <span class=\"seq\">3′-AGC TAC CGT-5′</span>. What is the sequence of the DNA coding strand, and of the mRNA transcript?",
        a: `<p><strong>Class key:</strong> coding strand <span class="seq">5′-TCG ATG GCA-3′</span>; mRNA <span class="seq">5′-UCG AUG GCA-3′</span>.</p>
<div class="eq"><span class="seq">template&nbsp;3′-AGC TAC CGT-5′</span><br><span class="seq">coding&nbsp;&nbsp;&nbsp;5′-TCG ATG GCA-3′</span><br><span class="seq">mRNA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5′-UCG AUG GCA-3′</span></div>
<ol>
<li><strong>Coding strand:</strong> pair every template base (A–T, G–C) and reverse the end labels, because the strands are antiparallel.</li>
<li><strong>mRNA:</strong> RNA polymerase pairs ribonucleotides with the template (A on the template gives U in the RNA). The result is the <strong>coding strand with U in place of T</strong>, also written 5′ → 3′.</li>
</ol>
<p>Shortcut and check: the mRNA should always match the coding strand letter for letter except T → U. Bonus: this mRNA contains a start codon, AUG, so translation would begin there: AUG GCA → Met–Ala…</p>`
      },
      {
        tier: "essential",
        q: "List the differences between DNA and RNA shown on the slides.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>DNA</th><th>RNA</th></tr></thead>
<tbody>
<tr><td>Sugar</td><td>deoxyribose (one less oxygen: H on the 2′ carbon)</td><td>ribose (OH on the 2′ carbon)</td></tr>
<tr><td>Pyrimidines</td><td>thymine, cytosine</td><td><strong>uracil</strong>, cytosine</td></tr>
<tr><td>Purines</td><td>adenine, guanine</td><td>adenine, guanine</td></tr>
<tr><td>Strands</td><td>double-stranded helix</td><td>single-stranded</td></tr>
<tr><td>Job</td><td>stores the instructions long term</td><td>copies and uses the instructions (mRNA, rRNA, tRNA)</td></tr>
<tr><td>Where (eukaryotes)</td><td>stays in the nucleus</td><td>made in the nucleus; mRNA moves to the cytosol</td></tr>
</tbody></table></div>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The slide's table calls RNA a “single stranded helix”. RNA is <strong>single-stranded</strong>, but it is not a double helix like DNA. A single RNA strand often <strong>folds back on itself</strong> where its bases are complementary, forming short paired regions (hairpins), which give tRNA and rRNA their shapes. Write “single-stranded” on tests.</p></div>`
      },
      {
        tier: "essential",
        q: "Name the three types of RNA on the slides and describe the job of each.",
        a: `<ul>
<li><strong>Messenger RNA (mRNA):</strong> complementary to a specific gene in the DNA (a copy of it). It leaves the nucleus and enters the cytosol, carrying the code to the ribosomes. Its bases are read three at a time as codons.</li>
<li><strong>Ribosomal RNA (rRNA):</strong> binds with proteins to form the <strong>ribosomes</strong>. It makes up most of the ribosome's mass and, in the large subunit, catalyzes peptide bond formation.</li>
<li><strong>Transfer RNA (tRNA):</strong> carries specific amino acids to the growing polypeptide chain, in the order dictated by the codons on the mRNA. Each tRNA has an <strong>anticodon</strong> that pairs with a codon.</li>
</ul>
<p>All three are made by transcription, and all three are needed for translation. The worksheet key adds a fourth, <strong>snRNA</strong> (small nuclear RNA), which is part of the spliceosomes that remove introns.</p>`
      },
      {
        tier: "essential",
        q: "What is the central dogma, and where do its two steps of protein synthesis happen?",
        a: `<p>The <span class="term">central dogma</span>: genetic information flows in a <strong>one-way direction</strong>, from DNA to RNA to protein.</p>
<div class="eq">DNA → (transcription) → mRNA → (translation) → polypeptide</div>
<ul>
<li><strong>Transcription</strong> occurs in the <strong>nucleus</strong>: a gene from DNA is copied (transcribed) into mRNA.</li>
<li><strong>Translation</strong> occurs in the <strong>cytosol at a ribosome</strong>: the mRNA is read (translated) to build a polypeptide chain.</li>
</ul>
<p>Slide example: the coding strand <span class="seq">ATG ATC TCG TAA</span> is transcribed to <span class="seq">AUG AUC UCG UAA</span>, which is translated to <strong>Met–Ile–Ser–STOP</strong>.</p>
<p data-tier="extra">Extra: “one-way” means information never flows back from protein to nucleic acid. Some viruses (retroviruses such as HIV) do copy RNA back into DNA with the enzyme reverse transcriptase, an exception to the simple DNA → RNA direction.</p>`
      },
      {
        tier: "essential",
        q: "What is a gene? Use the slide's diagram terms: promoter, terminator, upstream, downstream, transcription start site and UTRs.",
        a: `<p>Class definition: a <span class="term">gene</span> is a segment of DNA coding for a protein that contains a <strong>promoter located upstream</strong> and a <strong>terminator located downstream</strong>.</p>
<ul>
<li><strong>Upstream / downstream:</strong> directions along the coding strand. Upstream is toward its 5′ end (before the gene); downstream is toward its 3′ end (after it).</li>
<li><strong>Promoter:</strong> the DNA sequence where RNA polymerase binds; it decides where and on which strand transcription starts. It is not itself transcribed.</li>
<li><strong>Transcription start site:</strong> the first base copied into RNA, just downstream of the promoter.</li>
<li><strong>Terminator:</strong> the sequence at the end of the gene that signals RNA polymerase to stop and release the RNA.</li>
<li><strong>UTRs</strong> (untranslated regions): the RNA made between the start site and the start codon (5′ UTR), and between the stop codon and the end (3′ UTR). They are transcribed but not translated.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Describe initiation of transcription, including the TATA box and transcription factors.",
        a: `<ol class="steps">
<li><p class="step-head">Transcription factors find the promoter</p><p>The promoter contains the <strong>TATA box</strong>, a short sequence rich in T and A about 25–30 base pairs upstream of the start site. A <strong>TATA-binding protein</strong> (part of a transcription factor) binds to it, and other transcription factors gather around.</p></li>
<li><p class="step-head">RNA polymerase binds</p><p>The transcription factors guide <strong>RNA polymerase</strong> (RNA polymerase II for mRNA in eukaryotes) onto the promoter, facing the right direction on the right strand.</p></li>
<li><p class="step-head">The DNA opens</p><p>RNA polymerase disrupts the hydrogen bonds between the strands and unwinds a short stretch, exposing the template strand at the start site. Transcription begins.</p></li>
</ol>
<p>Why the TATA box? A–T pairs have only two hydrogen bonds, so an A/T-rich stretch is easier to open. Unlike DNA polymerase, RNA polymerase needs <strong>no primer</strong>: it can start a new chain on its own.</p>`
      },
      {
        tier: "essential",
        q: "Describe elongation. Which strand is read, in which direction, and in which direction is the mRNA built? In the slide 12 figure, which nucleotide is added next?",
        a: `<ul>
<li>RNA polymerase moves along the <strong>template strand</strong>, reading it <strong>3′ → 5′</strong>.</li>
<li>The <strong>coding strand</strong> (5′ → 3′) is not used as a template; it simply has the same sequence as the mRNA (with T for U).</li>
<li>Free ribonucleotides pair with the template (A–U, T–A, G–C, C–G) and are joined to the 3′ end of the growing RNA, so the mRNA is built <strong>5′ → 3′</strong>, antiparallel to the template.</li>
<li>The polymerase keeps about 10–20 base pairs unwound at a time; the DNA re-forms its double helix behind it as the new RNA peels away.</li>
</ul>
<p><strong>Slide 12 figure:</strong> the RNA so far is <span class="seq">5′-UGGUAGU-3′</span> on the template <span class="seq">3′-ACCATCAGTC-5′</span>. The next template base is <strong>G</strong>, so the incoming nucleotide is <strong>C</strong>, added to the RNA's 3′ end.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Every builder (DNA polymerase, RNA polymerase, the ribosome reading mRNA) works <strong>5′ → 3′</strong> on the strand it is making or reading; every template is read <strong>3′ → 5′</strong>.</p></div>`
      },
      {
        tier: "essential",
        q: "Describe termination of transcription. What is a primary transcript?",
        a: `<p>Slide wording: the <span class="term">primary transcript</span> (called <strong>pre-mRNA</strong> in eukaryotes) detaches from the template when RNA polymerase transcribes the <strong>terminator sequence</strong>. RNA polymerase then lets go of the DNA, and the DNA rewinds.</p>
<ul>
<li><strong>Eukaryotes:</strong> the transcribed RNA contains a <strong>polyadenylation signal</strong> (AAUAAA, shown on the slide). Shortly after it, the pre-mRNA is cut and released, and the poly-A tail is added to its new 3′ end.</li>
<li data-tier="likely"><strong>Prokaryotes:</strong> the terminator is often a GC-rich sequence whose RNA copy folds into a <strong>hairpin</strong>, followed by a run of U's. The hairpin stalls the polymerase and the weak A–U pairs let the RNA slip off.</li>
</ul>
<p>In eukaryotes the primary transcript is not ready to use: it must be processed (cap, tail, splicing) before it leaves the nucleus. In prokaryotes the transcript is used directly.</p>`
      },
      {
        tier: "essential",
        q: "Describe the three post-transcriptional modifications that turn pre-mRNA into mature mRNA, and the purpose of each.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Modification</th><th>What happens</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td><strong>5′ cap</strong></td><td>a modified guanine nucleotide (<strong>7-methylguanosine</strong>) is added to the 5′ end</td><td>prevents degradation; recognized by ribosomes to initiate translation</td></tr>
<tr><td><strong>Poly-A tail</strong></td><td><strong>~200 adenine</strong> ribonucleotides added to the 3′ end (after the AAUAAA signal)</td><td>prevents degradation; helps export from the nucleus</td></tr>
<tr><td><strong>Splicing</strong></td><td>non-coding regions (<strong>introns</strong>) are removed and coding regions (<strong>exons</strong>) are joined, by <strong>spliceosomes</strong></td><td>leaves one continuous coding sequence the ribosome can read</td></tr>
</tbody></table></div>
<p>The finished <strong>mature mRNA transcript</strong> leaves the nucleus through a nuclear pore to be translated by ribosomes. It still has its 5′ and 3′ UTRs, but no introns.</p>
<p data-tier="likely"><strong>Alternative splicing:</strong> by including different combinations of exons, one gene can produce several different mRNAs and proteins. This is how about 20,000 human genes give rise to far more kinds of proteins.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Ex</strong>ons are <strong>ex</strong>pressed (they exit the nucleus); <strong>in</strong>trons stay <strong>in</strong> (they are removed).</p></div>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.04 worksheet */
  {
    id: "qa-304-ws",
    title: "Transcription worksheet: questions 1–13",
    lesson: "3.04",
    source: "Transcription worksheet (class handout) with the class answer key: diagram labels 1–6 and questions 7–13.",
    items: [
      {
        tier: "essential",
        q: "Q1–6: Match each part of the transcription diagram (A–F) with its label: RNA polymerase, template strand, coding strand, mRNA, transcription factors, promoter region.",
        a: `<p><strong>Class key:</strong> 1 RNA polymerase = <strong>C</strong>; 2 template (non-coding, antisense) strand = <strong>B</strong>; 3 non-template (coding, sense) strand = <strong>E</strong>; 4 mRNA = <strong>F</strong>; 5 transcription factors = <strong>A</strong>; 6 promoter region = <strong>D</strong>.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Letter</th><th>What it points to in the diagram</th><th>Label</th></tr></thead>
<tbody>
<tr><td>A</td><td>the cluster of round proteins at the far left, where the DNA starts to open</td><td>transcription factors</td></tr>
<tr><td>B</td><td>the top DNA strand, the one the RNA is base-paired to (3′ at the left)</td><td>template / non-coding / antisense strand</td></tr>
<tr><td>C</td><td>the large lumpy enzyme sitting over the open DNA where new RNA is being made</td><td>RNA polymerase</td></tr>
<tr><td>D</td><td>the bracket marking the stretch of DNA at the far left, under the transcription factors</td><td>promoter region</td></tr>
<tr><td>E</td><td>the bottom DNA strand, which is not paired to any RNA (5′ at the left)</td><td>non-template / coding / sense strand</td></tr>
<tr><td>F</td><td>the wavy strand growing from 5′ (left) toward the polymerase</td><td>mRNA</td></tr>
</tbody></table></div>
<p>The pattern to remember: transcription factors sit on the promoter (upstream), RNA polymerase sits further downstream where the RNA is being made, and the RNA pairs only with the template strand.</p>`
      },
      {
        tier: "likely",
        q: "In the worksheet diagram, how can you tell which DNA strand is the template and which way RNA polymerase is moving? Which nucleotide (the free one drawn near the polymerase) will be added next?",
        a: `<ul>
<li><strong>Template:</strong> the RNA is base-paired to the top strand (B), so that is the template. Check: the top strand begins <span class="seq">3′-ATGACGGATCAG…</span> and the RNA begins <span class="seq">5′-UACUGCCUAGUC…</span>; every pair is complementary (A–U, T–A, G–C, C–G).</li>
<li><strong>Coding strand:</strong> the bottom strand (E), <span class="seq">5′-TACTGCCTAGTCGGCGTT…-3′</span>, has exactly the same sequence as the RNA with T instead of U. That is the definition of the coding strand.</li>
<li><strong>Direction:</strong> the RNA's 5′ end is at the left and it grows 5′ → 3′, so the polymerase moves to the <strong>right</strong>, reading the template 3′ → 5′ (away from the promoter on the left).</li>
<li><strong>Next nucleotide:</strong> the RNA ends <span class="seq">…GCGUU-3′</span>, paired with template <span class="seq">…CGCAA</span>. The next template base is <strong>G</strong>, so the free nucleotide drawn near the polymerase, <strong>C</strong>, will be added next, to the RNA's 3′ end.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Q7. What are transcription factors? How do they affect transcription?",
        a: `<p><strong>Class key:</strong> transcription factors are <strong>proteins</strong> that bind to specific sequences of DNA (the <strong>promoter region</strong>) and serve as <strong>pointers for RNA polymerase</strong>, so it knows which section or gene to transcribe.</p>
<p>Expanded:</p>
<ul>
<li>In eukaryotes, RNA polymerase cannot recognize a promoter by itself. Transcription factors (such as the TATA-binding protein, which binds the TATA box) bind first and then recruit RNA polymerase to the start site.</li>
<li>They decide <strong>where</strong> transcription begins and on <strong>which strand</strong>, so the right gene is copied in the right direction.</li>
<li>They also control <strong>how much</strong> a gene is transcribed: different cells make different transcription factors, which is how a liver cell and a nerve cell, with identical DNA, express different genes.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Q8. There are three phases of transcription. Put them in the order they occur: elongation, initiation, termination.",
        a: `<p><strong>Class key:</strong> initiation → elongation → termination.</p>
<ol class="steps">
<li><p class="step-head">Initiation</p><p>Transcription factors bind the promoter (TATA box); RNA polymerase binds and opens the DNA at the start site.</p></li>
<li><p class="step-head">Elongation</p><p>RNA polymerase reads the template 3′ → 5′ and builds the RNA 5′ → 3′ by complementary base pairing.</p></li>
<li><p class="step-head">Termination</p><p>RNA polymerase transcribes the terminator sequence; the primary transcript (pre-mRNA) detaches and the polymerase releases the DNA.</p></li>
</ol>`
      },
      {
        tier: "essential",
        q: "Q9. Which phase are transcription factors active in?",
        a: `<p><strong>Class key:</strong> initiation.</p>
<p>Transcription factors bind the promoter and position RNA polymerase at the start of the gene. Once the polymerase has started copying and moved downstream (elongation), it carries on without them; most of the factors stay behind at the promoter, ready to start the next round of transcription.</p>`
      },
      {
        tier: "essential",
        q: "Q10. Given the template (antisense) strand <span class=\"seq\">ATTACGGATTCGTCCTGGCAATTTAT</span>, write the mRNA produced from it. The start and end of transcription are marked: transcription starts at the third base (T) and ends at the 21st base (A).",
        a: `<p><strong>Class key:</strong> <span class="seq">AUGCCUAAGCAGGACCGUU</span></p>
<div class="eq"><span class="seq">template&nbsp;3′-AT <strong>TACGGATTCGTCCTGGCAA</strong> TTTAT-5′</span><br><span class="seq">mRNA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5′-<strong>AUGCCUAAGCAGGACCGUU</strong>-3′</span></div>
<ul>
<li>The worksheet does not label the ends, but the template must be written <strong>3′ on the left</strong>, so that the mRNA is built 5′ → 3′ from left to right, from the start arrow to the end arrow.</li>
<li>Copy only the bases between the arrows, pairing T → A, A → U, C → G, G → C. Bases outside the arrows are not transcribed.</li>
<li>Check: the coding strand would be <span class="seq">5′-ATGCCTAAGCAGGACCGTT-3′</span>, the same as the mRNA with T for U.</li>
</ul>
<p>Bonus: the mRNA starts with the start codon AUG. Read in triplets it gives AUG CCU AAG CAG GAC CGU U… = <strong>Met–Pro–Lys–Gln–Asp–Arg…</strong>, with no stop codon yet, so this is only the beginning of a longer gene.</p>`
      },
      {
        tier: "essential",
        q: "Q11. Name three types of RNA that are produced by transcription.",
        a: `<p><strong>Class key:</strong> tRNA, mRNA, snRNA, rRNA.</p>
<ul>
<li><strong>mRNA</strong> (messenger): carries the gene's code to the ribosome.</li>
<li><strong>tRNA</strong> (transfer): brings amino acids to the ribosome and matches them to codons with its anticodon.</li>
<li><strong>rRNA</strong> (ribosomal): with proteins, forms the ribosome and catalyzes peptide bonds.</li>
<li><strong>snRNA</strong> (small nuclear): with proteins, forms the <strong>spliceosomes</strong> that cut introns out of pre-mRNA in the nucleus.</li>
</ul>
<p>Any three earn full marks. Note that only mRNA is translated; tRNA, rRNA and snRNA are the final, working products of their genes.</p>`
      },
      {
        tier: "essential",
        q: "Q12. In eukaryotes, where in the cell does transcription take place?",
        a: `<p><strong>Class key:</strong> in eukaryotes, transcription happens where the DNA is: in the <strong>nucleus</strong> of the cell.</p>
<p>The DNA never leaves the nucleus, so RNA polymerase must work there. The pre-mRNA is also processed in the nucleus (5′ cap, poly-A tail, splicing), and only the mature mRNA leaves through the nuclear pores to the cytoplasm. Keeping transcription and translation in separate compartments gives eukaryotic cells time to process and check the mRNA first.</p>
<p data-tier="extra">Mitochondria and chloroplasts have their own small DNA and transcribe it inside the organelle.</p>`
      },
      {
        tier: "essential",
        q: "Q13. In prokaryotes, where in the cell does transcription take place?",
        a: `<p><strong>Class key:</strong> in prokaryotes, transcription happens where the DNA is: in the <strong>nucleoid region</strong>. Prokaryotes do not have nuclei.</p>
<p>The nucleoid is the region of cytoplasm where the circular chromosome is concentrated; it has no membrane around it. That has an important consequence: ribosomes can attach to an mRNA and start translating it <strong>while it is still being transcribed</strong> (coupled transcription and translation). Prokaryotic mRNA is not capped, tailed or spliced.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.05 worksheet */
  {
    id: "qa-305-ws",
    title: "Translation worksheet: questions 1–14",
    lesson: "3.05",
    source: "Translation worksheet (class handout) with the class answer key: picture labels 1–8 and questions 9–14.",
    items: [
      {
        tier: "essential",
        q: "Q1–8: Match each part of the translation picture (A–H) with its label: mRNA, tRNA, codon, anticodon, lone amino acid, growing polypeptide, large ribosomal subunit, small ribosomal subunit.",
        a: `<p><strong>Class key:</strong> 1 mRNA = <strong>E</strong>; 2 tRNA = <strong>C</strong>; 3 codon = <strong>G</strong>; 4 anticodon = <strong>D</strong>; 5 lone amino acid = <strong>B</strong>; 6 growing polypeptide = <strong>A</strong>; 7 large ribosomal subunit = <strong>H</strong>; 8 small ribosomal subunit = <strong>F</strong>.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Letter</th><th>What it points to in the picture</th><th>Label</th></tr></thead>
<tbody>
<tr><td>A</td><td>the bracket over the chain of linked amino acids (Met–Pro–Ser) at the top</td><td>growing polypeptide</td></tr>
<tr><td>B</td><td>the single amino acid (Arg) on top of the tRNA arriving at the right</td><td>lone amino acid</td></tr>
<tr><td>C</td><td>the cloverleaf-shaped molecule carrying Arg</td><td>tRNA</td></tr>
<tr><td>D</td><td>the three bases at the bottom of that tRNA (GCC)</td><td>anticodon</td></tr>
<tr><td>E</td><td>the long strand with a cap (square) at its 5′ end and a string of A's at its 3′ end</td><td>mRNA</td></tr>
<tr><td>F</td><td>the smaller, lower part of the ribosome, under the mRNA</td><td>small ribosomal subunit</td></tr>
<tr><td>G</td><td>the bracket under three mRNA bases (AGU)</td><td>codon</td></tr>
<tr><td>H</td><td>the larger, upper part of the ribosome that holds the tRNAs</td><td>large ribosomal subunit</td></tr>
</tbody></table></div>
<p>Note the difference between a <strong>codon</strong> (3 bases on the mRNA) and an <strong>anticodon</strong> (the 3 complementary bases on a tRNA), and between a <strong>lone amino acid</strong> (still attached to its tRNA, waiting to join) and the <strong>growing polypeptide</strong> (amino acids already joined by peptide bonds).</p>`
      },
      {
        tier: "likely",
        q: "Read the worksheet picture as a moment in translation: which tRNA is in which site, and what happens next?",
        a: `<p>The mRNA reads <span class="seq">5′-cap AUG CCU AGU CGG UAA AAAAAA…-3′</span> (Met, Pro, Ser, Arg, stop).</p>
<ul>
<li>The tRNA with anticodon <strong>GGA</strong> (it paired with CCU and delivered proline) is on its way out: the <strong>E (exit) site</strong>.</li>
<li>The tRNA with anticodon <strong>UCA</strong> is paired with the codon <strong>AGU</strong> (label G) and holds the growing chain Met–Pro–Ser: the <strong>P (peptidyl) site</strong>.</li>
<li>The tRNA with anticodon <strong>GCC</strong>, carrying arginine, is arriving at the empty <strong>A (aminoacyl) site</strong>, which exposes the codon <strong>CGG</strong>.</li>
</ul>
<p><strong>Next:</strong> a peptide bond forms between Ser (P site) and Arg (A site), moving the whole chain onto the arginine tRNA. The ribosome then translocates one codon toward the 3′ end, which brings the stop codon <strong>UAA</strong> into the A site. A release factor binds it, and the finished polypeptide <strong>Met–Pro–Ser–Arg</strong> is released.</p>`
      },
      {
        tier: "essential",
        q: "Q9. Use the codon table to write the amino acid (three-letter abbreviation) for each codon of this mRNA: <span class=\"seq\">5′-G AUG AAC AUG CGC GAU GGA GGC CUC CAC UGA AAAAAAAAA</span>",
        a: `<p><strong>Class key:</strong> Met Asn Met Arg Asp Gly Gly Leu His STOP.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Codon</th><th>AUG</th><th>AAC</th><th>AUG</th><th>CGC</th><th>GAU</th><th>GGA</th><th>GGC</th><th>CUC</th><th>CAC</th><th>UGA</th></tr></thead>
<tbody><tr><td>Amino acid</td><td>Met</td><td>Asn</td><td>Met</td><td>Arg</td><td>Asp</td><td>Gly</td><td>Gly</td><td>Leu</td><td>His</td><td>STOP</td></tr></tbody></table></div>
<ul>
<li>Start reading at the <strong>first AUG</strong> from the 5′ end. The lone G before it is part of the untranslated 5′ end, not a codon.</li>
<li>The second AUG (codon 3) is just methionine inside the protein. Only the first AUG acts as the start codon.</li>
<li>UGA is a stop codon, so the polypeptide is <strong>9 amino acids</strong> long. The A's after it are the <strong>poly-A tail</strong>, which is never translated.</li>
<li>GGA and GGC both code for Gly: an example of redundancy, differing only in the third base.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Q10. Name three types of RNA that play a role in translation and briefly describe their roles.",
        a: `<p><strong>Class key:</strong> tRNA carries amino acids to the ribosome; rRNA is part of the ribosome; mRNA is the code (instructions) for building the polypeptide.</p>
<ul>
<li><strong>mRNA</strong> carries the gene's sequence as a series of codons, read 5′ → 3′ from the start codon to a stop codon.</li>
<li><strong>tRNA</strong> is the adaptor: one end has an <strong>anticodon</strong> that base-pairs with a codon; the 3′ end carries the matching amino acid.</li>
<li><strong>rRNA</strong>, together with proteins, makes up both ribosomal subunits. It holds the mRNA and tRNAs in place in the A, P and E sites, and the rRNA of the large subunit catalyzes peptide bond formation.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Q11. In eukaryotes, where in the cell does translation take place?",
        a: `<p><strong>Class key:</strong> at the <strong>ribosome</strong>, in the <strong>cytoplasm</strong> or on the surface of the <strong>rough endoplasmic reticulum</strong>.</p>
<ul>
<li><strong>Free ribosomes</strong> in the cytosol make proteins that stay in the cytosol or go to the nucleus, mitochondria and chloroplasts.</li>
<li data-tier="likely"><strong>Bound ribosomes</strong> on the rough ER make proteins that will be secreted, put into membranes, or sent to lysosomes. These proteins start with a <strong>signal sequence</strong> that directs the ribosome to the ER, and the growing chain is threaded into the ER as it is made.</li>
</ul>
<p>Translation is never in the nucleus: mature mRNA must first exit through the nuclear pores.</p>`
      },
      {
        tier: "essential",
        q: "Q12. In prokaryotes, where in the cell does translation take place?",
        a: `<p><strong>Class key:</strong> at the ribosome in the <strong>cytoplasm</strong>. There is no nucleus, so the ribosome can attach to the mRNA <strong>right as the mRNA is being produced</strong> by transcription.</p>
<p>This is called <span class="term">coupled transcription and translation</span>. As soon as the 5′ end of an mRNA comes off RNA polymerase, ribosomes bind and begin translating, while the polymerase is still transcribing the rest of the gene. It is possible because there is no nuclear envelope separating DNA from ribosomes, and because prokaryotic mRNA does not need a cap, tail or splicing first. It makes protein synthesis very fast, which helps bacteria respond quickly to their environment.</p>`
      },
      {
        tier: "essential",
        q: "Q13. In a codon, which nucleotide (first, second or third) tends to be least important for determining the amino acid? Why?",
        a: `<p><strong>Class key:</strong> the <strong>third</strong> nucleotide. It is affected by the <strong>“wobble effect”</strong>: the third nucleotide of the codon (paired with the matching position in the tRNA's anticodon) does not matter as much in some circumstances.</p>
<ul>
<li><strong>Evidence in the chart:</strong> many codons that share their first two bases code for the same amino acid whatever the third base is. GGU, GGC, GGA and GGG are all Gly; CUU, CUC, CUA and CUG are all Leu.</li>
<li><strong>Why (wobble):</strong> the first two codon bases must pair strictly with the anticodon, but pairing at the third codon position is looser. A G in the anticodon's wobble position can pair with C or U, for example, so one tRNA can read more than one codon. This is why cells need only about 45 kinds of tRNA, not 61.</li>
<li><strong>Benefit:</strong> a mutation in the third base is often <strong>silent</strong>, which is one way redundancy “minimizes errors” (slide 3).</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Q14. Many antibiotics kill bacteria by preventing translation. Why don't these antibiotics affect translation in human cells?",
        a: `<p><strong>Class key:</strong> antibiotics are often designed to target specifically the <strong>prokaryotic ribosome</strong>, which has a <strong>different structure</strong> from the eukaryotic ribosome.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Prokaryotic ribosome</th><th>Eukaryotic ribosome</th></tr></thead>
<tbody>
<tr><td>Size</td><td>70S</td><td>80S</td></tr>
<tr><td>Subunits</td><td>30S small + 50S large</td><td>40S small + 60S large</td></tr>
<tr><td>rRNA and proteins</td><td>different sequences and shapes</td><td>larger, different rRNAs and more proteins</td></tr>
</tbody></table></div>
<p>An antibiotic molecule fits a pocket on the bacterial ribosome the way a key fits a lock. Because the human ribosome's pocket has a different shape, the drug does not bind it, so bacterial protein synthesis stops but ours continues. Examples: streptomycin and tetracycline act on the small (30S) subunit; erythromycin and chloramphenicol on the large (50S) subunit.</p>
<p data-tier="extra">Extra: our mitochondria have small, bacteria-like ribosomes (evidence for endosymbiosis), which is one reason some antibiotics can have side effects at high doses.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.05 sequences */
  {
    id: "qa-305-seq",
    title: "Translation sequences: Try Me and reading frames",
    lesson: "3.05",
    source: "Lesson 3.05 slides (Protein Synthesis: Translation): slide 17 Try Me!, slides 18–19 worked example (the slide answers are the class key), slide 8 reading frames, and slide 2's codon example.",
    items: [
      {
        tier: "essential",
        q: "Try Me (part 1): transcribe the DNA template strand <span class=\"seq\">3′-AATCTACGGACGATGGGCTAACGCGCATTTTATTGC-5′</span> into mRNA.",
        a: `<p><strong>Class key:</strong> <span class="seq">5′-UUAGAUGCCUGCUACCCGAUUGCGCGUAAAAUAACG-3′</span></p>
<ul>
<li>The DNA template is read <strong>3′ → 5′</strong>, and the mRNA is built <strong>5′ → 3′</strong> (the slide's “IMPORTANT” box). Since the template is already written 3′ → 5′ from left to right, simply pair each base in order: A → U, T → A, C → G, G → C.</li>
<li>Label the ends: the mRNA's 5′ end sits opposite the template's 3′ end.</li>
<li>Check: 36 bases in, 36 bases out, and no T anywhere in the mRNA.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Try Me (part 2): translate the mRNA <span class=\"seq\">5′-UUAGAUGCCUGCUACCCGAUUGCGCGUAAAAUAACG-3′</span> into a polypeptide.",
        a: `<p><strong>Class key:</strong> AUG – CCU – GCU – ACC – CGA – UUG – CGC – GUA – AAA – UAA → <strong>Met – Pro – Ala – Thr – Arg – Leu – Arg – Val – Lys – stop</strong>.</p>
<ol class="steps">
<li><p class="step-head">Find the start</p><p>From the 5′ end, find the <strong>first AUG</strong>. Here it is bases 5–7: <span class="seq">UUAG <strong>AUG</strong> CC…</span>. The UUAG before it is the 5′ UTR (not translated). The AUG sets the <strong>reading frame</strong>.</p></li>
<li><p class="step-head">Split into codons</p><p>Mark off triplets from the AUG: AUG CCU GCU ACC CGA UUG CGC GUA AAA UAA.</p></li>
<li><p class="step-head">Use the chart or wheel</p><p>Look up each codon until you reach a stop codon (UAA, UAG or UGA). UAA is stop, so the chain ends there; the last two bases (CG) are part of the 3′ UTR.</p></li>
</ol>
<p>The polypeptide has <strong>9 amino acids</strong>. Note that Arg appears twice from different codons (CGA and CGC) and that “stop” is not an amino acid. Common mistake: starting at the first base (UUA = Leu) instead of the first AUG, which puts every codon in the wrong frame.</p>`
      },
      {
        tier: "essential",
        q: "Reading frames (slide 8): translate <span class=\"seq\">5′-AGUCUUACCGCAUUGUGG-3′</span> in all three reading frames. Why does keeping the correct frame matter?",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Frame</th><th>Codons</th><th>Amino acids</th></tr></thead>
<tbody>
<tr><td>#1 (start at base 1)</td><td>AGU CUU ACC GCA UUG UGG</td><td>Ser–Leu–Thr–Ala–Leu–<strong>Trp</strong></td></tr>
<tr><td>#2 (start at base 2)</td><td>GUC UUA CCG CAU UGU (GG)</td><td>Val–Leu–Pro–His–Cys</td></tr>
<tr><td>#3 (start at base 3)</td><td>UCU UAC CGC AUU GUG (G)</td><td>Ser–Tyr–Arg–Ile–Val</td></tr>
</tbody></table></div>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The slide labels frame #1 as “Ser–Leu–Thr–Ala–Leu–Ser”, but its last codon is <strong>UGG</strong>, which codes for <strong>tryptophan (Trp)</strong>, the only codon for Trp. Frames #2 and #3 on the slide are correct.</p></div>
<p><strong>Why it matters:</strong> the same bases give three completely different polypeptides depending on where you start counting, because the code is read in non-overlapping triplets with no “commas”. The ribosome reads one codon at a time, and the <strong>start codon (AUG)</strong> fixes the frame. Keeping the correct frame ensures the right amino acids are used to build a functional protein. This is also why insertions and deletions (frameshift mutations, lesson 3.06) are so damaging.</p>`
      },
      {
        tier: "essential",
        q: "Summarize the method for going from a DNA template strand to a polypeptide. Use slide 2's mRNA <span class=\"seq\">5′-AUGGUCAGUCCAUAA-3′</span> as a check.",
        a: `<ol class="steps">
<li><p class="step-head">Orient the template</p><p>Make sure the template is written 3′ → 5′ (rewrite it backwards if it is given 5′ → 3′).</p></li>
<li><p class="step-head">Transcribe</p><p>Pair each base to make the mRNA 5′ → 3′ (A → U, T → A, G → C, C → G). If you are given the <strong>coding</strong> strand instead, just swap T for U.</p></li>
<li><p class="step-head">Find the first AUG</p><p>Read from the 5′ end; the first AUG is the start codon and sets the reading frame.</p></li>
<li><p class="step-head">Split into codons</p><p>Mark off triplets from the AUG.</p></li>
<li><p class="step-head">Translate until a stop</p><p>Use the chart or wheel (first base, second base, third base) and stop at UAA, UAG or UGA. Write “stop”, not an amino acid.</p></li>
</ol>
<p><strong>Check with slide 2:</strong> AUG GUC AGU CCA UAA → <strong>Met–Val–Ser–Pro–stop</strong>. Four amino acids from 15 nucleotides: 5 codons, the last of which is a stop.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Always label the 5′ and 3′ ends of every strand you write. A sequence with no ends labelled or with the ends reversed usually loses marks even if the letters are right.</p></div>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.05 slides */
  {
    id: "qa-305-slides",
    title: "Translation slides: discussion",
    lesson: "3.05",
    source: "Lesson 3.05 slides (Protein Synthesis: Translation): the genetic code, tRNA and wobble, the three stages, and post-translational modifications. No class answer key; model answers.",
    items: [
      {
        tier: "essential",
        q: "What is a codon? Why must codons be three nucleotides long, and what does “genetic redundancy” mean?",
        a: `<ul>
<li>A <span class="term">codon</span> is a sequence of <strong>3 nucleotides</strong> on mRNA that codes for one amino acid (or a stop signal).</li>
<li><strong>Why three:</strong> there are 4 bases and 20 amino acids. One-base codons give only 4<sup>1</sup> = 4 combinations; two-base codons give 4<sup>2</sup> = 16, still too few. Three-base codons give <strong>4<sup>3</sup> = 64</strong>, more than enough.</li>
<li><strong>Start codon:</strong> <strong>AUG</strong> (methionine) signals that translation commences at that point.</li>
<li><strong>Stop codons:</strong> <strong>UAG, UAA, UGA</strong> signal termination. They code for no amino acid.</li>
<li><span class="term">Genetic redundancy</span>: more than one codon codes for an amino acid. <strong>64 codons for 20 amino acids</strong> (61 code for amino acids, 3 are stops). This minimizes errors and increases the likelihood of the correct amino acid in the sequence, because many base changes (especially in the third position) still give the same amino acid.</li>
</ul>
<p data-tier="likely">The code is also <strong>non-overlapping</strong> (each base belongs to one codon) and nearly <strong>universal</strong> (the same codons mean the same amino acids in bacteria, plants and humans), which is why a human gene can be expressed in bacteria.</p>`
      },
      {
        tier: "essential",
        q: "How do you read the codon chart and the codon wheel?",
        a: `<p>Both use <strong>mRNA codons</strong> (with U, not T), read 5′ → 3′.</p>
<div class="compare"><div><h4>Codon chart</h4>
<ol>
<li>Find the <strong>first base</strong> in the column on the left.</li>
<li>Move across to the column for the <strong>second base</strong> (along the top).</li>
<li>In that box, pick the row for the <strong>third base</strong> (on the right).</li>
</ol>
<p>Example: CGA → C row, G column, A line → <strong>Arg</strong>.</p></div>
<div><h4>Codon wheel</h4>
<ol>
<li>Read from the <strong>inside to the outside</strong> (slide wording).</li>
<li>The centre ring is the first base, the middle ring the second, the outer ring the third.</li>
<li>The amino acid is printed at the rim next to the third base.</li>
</ol>
<p>Example: UGG → U (centre), G (middle), G (outer) → <strong>Trp</strong>.</p></div></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Do not look up DNA triplets or tRNA anticodons directly. Convert to the mRNA codon first: a template triplet 3′-TAC-5′ gives the codon AUG; an anticodon 3′-UAC-5′ reads the codon AUG.</p></div>`
      },
      {
        tier: "essential",
        q: "Describe tRNA: what is an anticodon, what is an aminoacyl-tRNA, and how does the wobble hypothesis let one tRNA read several codons?",
        a: `<ul>
<li><strong>Structure:</strong> a single RNA strand of about 80 nucleotides that folds back on itself (cloverleaf in 2D, an L-shape in 3D) through intramolecular base pairing.</li>
<li><strong>Anticodon:</strong> 3 bases in one loop of the tRNA that are <strong>complementary to a codon</strong> on the mRNA and pair with it (antiparallel).</li>
<li><strong>Amino acid site:</strong> the amino acid attaches to the <strong>3′ end</strong> of the tRNA. A tRNA carrying its amino acid is called an <span class="term">aminoacyl-tRNA</span>. <span data-tier="likely">Enzymes called aminoacyl-tRNA synthetases attach the correct amino acid to each tRNA, using energy from ATP (“charging” the tRNA).</span></li>
</ul>
<p><strong>Wobble hypothesis</strong> (slide 10): flexible base pairing at the <strong>third codon position</strong> lets one tRNA recognize several synonymous codons for the same amino acid. Slide example: a leucine tRNA with anticodon 3′-GAG-5′ pairs normally with the codon 5′-CU<strong>C</strong>-3′ and, by wobble (a G–U pair), also with 5′-CU<strong>U</strong>-3′. Both codons are leucine, so no error results.</p>`
      },
      {
        tier: "essential",
        q: "Describe the initiation of translation.",
        a: `<ol class="steps">
<li><p class="step-head">mRNA reaches the cytosol</p><p>The mature mRNA transcript leaves the nucleus and enters the cytosol.</p></li>
<li><p class="step-head">Small subunit binds the cap</p><p>The <strong>small ribosomal subunit</strong> binds to the <strong>5′ cap</strong> and scans along the mRNA in the <strong>5′ → 3′</strong> direction to locate the <strong>start codon</strong> (AUG).</p></li>
<li><p class="step-head">Initiator tRNA pairs with AUG</p><p>The <strong>aminoacyl-tRNA carrying methionine</strong> (anticodon UAC) binds to the start codon.</p></li>
<li><p class="step-head">Large subunit locks on</p><p>The <strong>large ribosomal subunit</strong> joins and locks the Met-tRNA into the <strong>peptidyl (P) site</strong>. This complete assembly is the translation initiation complex; energy comes from GTP.</p></li>
</ol>
<p>The initiator tRNA is the only one that starts in the P site. The A site next to it is empty, exposing the second codon, ready for elongation. This is why every newly made polypeptide begins with Met (it is often trimmed off later).</p>`
      },
      {
        tier: "essential",
        q: "Name the three tRNA sites of the ribosome and describe the cycle of elongation.",
        a: `<ul>
<li><strong>A site (aminoacyl):</strong> where each new aminoacyl-tRNA arrives.</li>
<li><strong>P site (peptidyl):</strong> holds the tRNA attached to the growing polypeptide.</li>
<li><strong>E site (exit):</strong> where the empty tRNA leaves.</li>
</ul>
<ol class="steps">
<li><p class="step-head">Codon recognition</p><p>The codon exposed in the <strong>A site</strong> binds the aminoacyl-tRNA with the complementary anticodon.</p></li>
<li><p class="step-head">Peptide bond formation</p><p>A <strong>peptide bond</strong> forms between the amino acids in the P and A sites. The growing chain is transferred onto the amino acid in the A site.</p></li>
<li><p class="step-head">Translocation</p><p>The ribosome shifts one codon toward the 3′ end. The empty tRNA in the P site moves to the <strong>E site</strong> and leaves; the tRNA in the A site (now holding the chain) moves to the <strong>P site</strong>. The A site is open again for the next codon.</p></li>
</ol>
<p>The cycle repeats, adding an amino acid every time the ribosome reads a new codon, moving <strong>5′ → 3′</strong> along the mRNA. The polypeptide grows from its amino (N) end to its carboxyl (C) end. <span data-tier="likely">Several ribosomes can read one mRNA at once, one behind another (a polyribosome), making many copies of the protein quickly.</span></p>`
      },
      {
        tier: "essential",
        q: "Describe the termination of translation. Slide 13 says a stop codon in the A site “codes for a release factor”: is that right?",
        a: `<div class="callout warn"><p class="callout-title">Check your notes</p><p>Stop codons do not code for anything, including release factors. No tRNA matches a stop codon. Instead, a <strong>release factor protein</strong> (already present in the cytosol) <strong>recognizes and binds</strong> the stop codon when it enters the A site.</p></div>
<ol class="steps">
<li><p class="step-head">Stop codon reaches the A site</p><p>UAA, UAG or UGA moves into the A site. No aminoacyl-tRNA can pair with it.</p></li>
<li><p class="step-head">Release factor binds</p><p>A release factor binds the stop codon in the A site.</p></li>
<li><p class="step-head">Polypeptide released</p><p>The release factor triggers <strong>hydrolysis</strong> of the bond between the polypeptide and the tRNA in the P site (a water molecule is added), so the finished chain is freed.</p></li>
<li><p class="step-head">Ribosome disassembles</p><p>The small and large subunits separate and release the mRNA and the last tRNA. They can be reused.</p></li>
</ol>
<p>Correct test wording: “When a stop codon enters the A site, a release factor binds to it, the polypeptide is released from the tRNA in the P site, and the ribosome disassembles.”</p>`
      },
      {
        tier: "essential",
        q: "What are post-translational modifications? Describe the five shown on the slide.",
        a: `<p>After translation, many polypeptides must be changed before they become functional proteins. Slide 16 shows five modifications:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Modification</th><th>What happens</th><th>Example / purpose</th></tr></thead>
<tbody>
<tr><td><strong>Proteolytic cleavage</strong></td><td>enzymes remove peptide segments (e.g. the first Met, or a whole section)</td><td>insulin is made as a longer chain and cut to its active form</td></tr>
<tr><td><strong>Phosphorylation</strong></td><td>a phosphate group is added (often to Ser, Thr or Tyr)</td><td>switches protein activity ON or OFF</td></tr>
<tr><td><strong>Glycosylation</strong></td><td>complex carbohydrate (sugar) chains are added</td><td>forms <strong>glycoproteins</strong>, e.g. cell-surface markers (in the ER and Golgi)</td></tr>
<tr><td><strong>Carboxylation</strong></td><td>a carboxyl group is added to specific amino acids</td><td>e.g. blood-clotting proteins need it to bind Ca<sup>2+</sup></td></tr>
<tr><td><strong>Protein folding</strong></td><td><strong>chaperone</strong> proteins help the linear chain fold into its active 3D shape</td><td>shape determines function; misfolding can cause disease</td></tr>
</tbody></table></div>
<p>The point: the gene fixes the amino acid sequence (primary structure), but the cell still controls a protein's final shape, location and activity after translation.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.06 Let's practice */
  {
    id: "qa-306-practice",
    title: "Mutations practice: Let's Practice a–c",
    lesson: "3.06",
    source: "Lesson 3.06 slides (Mutations): slide 14 Let's Practice!, the slide 13 sentence examples, and slides 11–12 on insertions and deletions. No posted key; every answer checked against the codon chart.",
    items: [
      {
        tier: "essential",
        q: "Given the mRNA codons UUA-CCU-GUU-UAC: (a) add a single guanine nucleotide to the beginning of the codon sequence. What type of mutation would this produce?",
        a: `<p><strong>Answer: a frameshift mutation (caused by an insertion).</strong></p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Codons</th><th>Amino acids</th></tr></thead>
<tbody>
<tr><td>Original</td><td>UUA CCU GUU UAC</td><td>Leu–Pro–Val–Tyr</td></tr>
<tr><td>G added at the start</td><td><strong>G</strong>UU ACC UGU UUA C…</td><td>Val–Thr–Cys–Leu…</td></tr>
</tbody></table></div>
<p>The ribosome reads in non-overlapping triplets, so one extra base shifts the reading frame by one position. Every codon from the insertion onward is regrouped: here <strong>all four</strong> amino acids change, and the leftover C will join the next bases downstream, so the change continues to the end of the gene (usually until a stop codon happens to appear in the new frame).</p>
<p>Frameshifts near the <strong>start</strong> of a gene are the most damaging, because almost the whole protein is affected.</p>`
      },
      {
        tier: "essential",
        q: "(b) Substitute the third nucleotide in the second codon (UUA-CCU-GUU-UAC) for adenine. What type of mutation would this produce?",
        a: `<p><strong>Answer: a silent mutation.</strong></p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Codon 2</th><th>Amino acid</th></tr></thead>
<tbody>
<tr><td>Original</td><td>CC<strong>U</strong></td><td>Pro</td></tr>
<tr><td>Mutated</td><td>CC<strong>A</strong></td><td>Pro</td></tr>
</tbody></table></div>
<p>The sequence becomes UUA-CCA-GUU-UAC = Leu–Pro–Val–Tyr, identical to the original. All four codons beginning with CC (CCU, CCC, CCA, CCG) code for <strong>proline</strong>. This is redundancy (and wobble) in action: a change in the <strong>third</strong> base of a codon is the most likely to be silent.</p>`
      },
      {
        tier: "essential",
        q: "(c) Substitute the third nucleotide in the fourth codon (UUA-CCU-GUU-UAC) for guanine. What type of mutation would this produce?",
        a: `<p><strong>Answer: a nonsense mutation.</strong></p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Codon 4</th><th>Amino acid</th></tr></thead>
<tbody>
<tr><td>Original</td><td>UA<strong>C</strong></td><td>Tyr</td></tr>
<tr><td>Mutated</td><td>UA<strong>G</strong></td><td><strong>STOP</strong></td></tr>
</tbody></table></div>
<p>UAG is a <strong>stop codon</strong>, so the substitution forms a <strong>premature stop codon</strong>. Translation ends at codon 4: the chain is Leu–Pro–Val and then stops, so everything the rest of the gene would have coded is missing. Truncated proteins are usually non-functional.</p>
<p>Note the contrast with (b): both are single third-base substitutions, but here the change happens to land on a stop codon. (If it had changed UAC to UAU, it would have been silent: UAU is also Tyr.)</p>`
      },
      {
        tier: "essential",
        q: "Explain each row of the slide's sentence analogy (wild type THE ONE BIG FLY HAD ONE RED EYE) as a type of mutation.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Type</th><th>Sentence</th><th>What it models</th></tr></thead>
<tbody>
<tr><td>Wild type</td><td>THE ONE BIG FLY HAD ONE RED EYE</td><td>the normal gene, read in three-letter “codons”</td></tr>
<tr><td>Silent</td><td>THE <strong>WON</strong> BIG FLY HAD ONE RED EYE</td><td>letters change but the word still sounds and means the same: a new codon for the <strong>same amino acid</strong></td></tr>
<tr><td>Missense</td><td>THE ONE B<strong>A</strong>G FLY HAD ONE RED EYE</td><td>one letter changes one word into a different word: a <strong>different amino acid</strong></td></tr>
<tr><td>Nonsense</td><td>THE ONE BIG</td><td>the sentence is cut short: a <strong>premature stop codon</strong></td></tr>
<tr><td>Frameshift</td><td>THE ONE <strong>Q</strong>BI GFL YHA DON ERE DEY E</td><td>one inserted letter (Q) shifts every grouping after it, so every later “word” is nonsense</td></tr>
</tbody></table></div>
<p>The analogy works because both a sentence of three-letter words and a gene are read in fixed groups of three from a set starting point. It also shows why frameshifts are usually the most harmful: a single letter ruins everything after it, while a substitution affects one word at most.</p>`
      },
      {
        tier: "likely",
        q: "Slides 11–12 show an insertion or deletion of three nucleotides that causes no frameshift. What happens to the protein, and why is this less harmful than a one-base frameshift?",
        a: `<p>Inserting or deleting <strong>three</strong> nucleotides (or any multiple of 3) adds or removes exactly one codon. The reading frame after the change is restored, so the result is one <strong>extra or missing amino acid</strong> (an <span class="term">in-frame</span> insertion or deletion), with the rest of the protein unchanged.</p>
<p>Slide 12 example: <span class="seq">AUG AAC CCC ACA UAA</span> (Met–Asn–Pro–Thr) with AAC deleted becomes <span class="seq">AUG CCC ACA UAA</span> (Met–Pro–Thr). Only Asn is lost.</p>
<p>It is usually less harmful than a single-base frameshift, which scrambles every codon downstream, but it can still matter if the lost amino acid is important. <span data-tier="extra">The most common cystic fibrosis mutation (ΔF508) deletes 3 bases that code for one phenylalanine; the CFTR protein then misfolds and is destroyed.</span> An in-frame change can also create a stop codon where two codons meet, so always rewrite the codons and check.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.06 slides */
  {
    id: "qa-306-slides",
    title: "Mutation slides: discussion",
    lesson: "3.06",
    source: "Lesson 3.06 slides (Mutations): definitions, kinds, causes and chromosomal mutations. No class answer key; model answers.",
    items: [
      {
        tier: "essential",
        q: "What is a mutation, and what effects can it have? What does the Werner syndrome photo on the slide illustrate?",
        a: `<p>Class definition: a <span class="term">mutation</span> is a <strong>permanent change in the nucleotide sequence of a cell's DNA</strong>. It may have a <strong>negative</strong> effect, a <strong>positive</strong> effect, or <strong>no effect</strong>.</p>
<ul>
<li><strong>Negative:</strong> a protein is lost or works badly (e.g. sickle-cell anemia, cystic fibrosis, many cancers).</li>
<li><strong>Positive:</strong> a new or improved function that helps survival (e.g. lactase persistence, which lets adults digest milk). Mutations are the raw material of evolution.</li>
<li><strong>No effect:</strong> silent mutations, or changes in DNA that does not code for anything.</li>
</ul>
<p><strong>Werner syndrome</strong> (the slide's photos of the same woman as a teenager and at 48) is a negative example: a mutation in a gene for a helicase involved in DNA replication and repair causes <strong>premature aging</strong> starting in early adulthood. It shows how one changed gene can affect the whole body, and it links back to helicases and telomere maintenance in lessons 3.02 and 3.03.</p>`
      },
      {
        tier: "essential",
        q: "Compare heritable, non-heritable, and temporary (short-lived) mutations.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Kind</th><th>Where it occurs</th><th>Passed to offspring?</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Heritable</strong></td><td><strong>gametes</strong> (sperm or egg, or the cells that make them)</td><td>yes: every cell of the child carries it</td><td>an inherited disease allele</td></tr>
<tr><td><strong>Non-heritable</strong></td><td><strong>somatic</strong> (body) cells</td><td>no: only the descendants of that cell in that person</td><td>most cancers, a UV-damaged skin cell</td></tr>
<tr><td><strong>Temporary</strong> (transcription)</td><td>an mRNA copy</td><td>no: the <strong>DNA is unchanged</strong></td><td>RNA polymerase lacks proofreading, so it makes occasional errors</td></tr>
<tr><td><strong>Temporary</strong> (translation)</td><td>a protein</td><td>no</td><td>a wrong amino acid inserted: a “phenotypic mutation”</td></tr>
</tbody></table></div>
<p>Temporary errors are short-lived because the faulty mRNA or protein is soon degraded and the next copy made from the unchanged DNA is normal. Strictly, by the class definition, only DNA changes are true mutations, which is why these are called temporary.</p>`
      },
      {
        tier: "essential",
        q: "What causes gene mutations? Explain the slide's fun fact that about 80% of new inherited point mutations originate in sperm.",
        a: `<p>Gene mutations change the nucleotide sequence of one gene. The slide lists three causes:</p>
<ul>
<li><strong>DNA polymerase mispairings during replication</strong> that escape proofreading and repair (spontaneous).</li>
<li><strong>Spontaneous decay</strong> (normal wear and tear): for example, bases can lose an amino group or fall off the backbone, and the damage is copied wrongly next time.</li>
<li><strong>Exposure to mutagens</strong> (induced mutations): physical mutagens such as <strong>UV light</strong> (thymine dimers) and <strong>X-rays</strong> (strand breaks), and chemical <strong>carcinogens</strong> such as those in tobacco smoke.</li>
</ul>
<p><strong>The 80% fact:</strong> most replication errors happen during cell division, and male germ cells divide far more often. Sperm come from stem cells that keep dividing throughout a male's lifetime, roughly every couple of weeks after puberty, so the sperm of an older father come from cells that have been through hundreds of divisions. Every egg a female will ever have was formed before birth after only a couple of dozen divisions. More divisions mean more chances for copying errors, so most new point mutations come from the father, and the number rises with paternal age.</p>`
      },
      {
        tier: "essential",
        q: "Using the slide's gene blocks (normal chromosome A B C D E ● F G H, and a second chromosome I J K L M ● N O), describe the five chromosomal mutations.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Mutation</th><th>Result on the slide</th><th>What happened</th></tr></thead>
<tbody>
<tr><td><strong>Deletion</strong></td><td>A B D E ● F G H</td><td>a section (C) is removed: loss of genetic information</td></tr>
<tr><td><strong>Duplication</strong></td><td>A B C D C D E ● F G H</td><td>a section (C D) is repeated, added from the homologous chromosome</td></tr>
<tr><td><strong>Inversion</strong></td><td>A D C B E ● F G H</td><td>a section (B C D) is reversed</td></tr>
<tr><td><strong>Translocation</strong></td><td>I J K C D E ● F G H and A B L M ● N O</td><td>sections are exchanged with (added to) a <strong>non-homologous</strong> chromosome</td></tr>
<tr><td><strong>Insertion</strong></td><td>A D E ● F G H and I J B C K L M ● N O</td><td>a section (B C) is removed from one chromosome and inserted into another (homologous or non-homologous)</td></tr>
</tbody></table></div>
<p>Chromosomal mutations involve large-scale changes in chromosome structure and/or number, and can affect many genes at once. The slide notes that errors during <strong>crossing over</strong> cause these structural changes: for example, unequal crossing over between misaligned homologues gives one chromosome a duplication and the other a matching deletion.</p>`
      },
      {
        tier: "likely",
        q: "The slide says most forms of aneuploidy come from eggs with faulty cohesin proteins at the centromeres. Explain.",
        a: `<p><span class="term">Aneuploidy</span> is an abnormal <strong>number</strong> of chromosomes (one extra, a trisomy, or one missing, a monosomy), for example trisomy 21 (Down syndrome). It is caused by <strong>nondisjunction</strong>: chromosomes fail to separate properly during meiosis, so one gamete gets an extra copy and another gets none.</p>
<p><strong>Cohesin</strong> is the protein ring that holds sister chromatids (and, in meiosis I, the paired homologues) together at the right places until they are meant to separate. In human females, egg cells start meiosis before birth and then pause for years, even decades, before ovulation. Cohesin is not renewed during that pause, so it gradually wears out. Weak cohesin lets chromosomes separate too early or at the wrong time, causing nondisjunction.</p>
<p>That is why most aneuploidies come from the egg rather than the sperm, and why their risk rises with <strong>maternal age</strong>. It is the opposite pattern from point mutations, which mostly come from sperm.</p>`
      },
      {
        tier: "likely",
        q: "Slide 20 shows three possible results of a translocation: deregulated expression, a chimeric protein, and loss of function. Explain each.",
        a: `<p>A translocation does not have to lose any DNA to be harmful; what matters is <strong>where the chromosome breaks</strong>.</p>
<ul>
<li><strong>Deregulated expression:</strong> the break puts a gene's coding region next to a different, stronger <strong>promoter</strong>. The protein is normal but made at the wrong time or in the wrong amount, often too much.</li>
<li><strong>Chimeric (fusion) protein:</strong> the break joins the coding region of one gene to the coding region of another. The cell makes a new hybrid protein that does neither job properly. <span data-tier="extra">Example: the Philadelphia chromosome, a translocation between chromosomes 9 and 22, fuses the <em>BCR</em> and <em>ABL</em> genes; the fusion protein is always active and drives chronic myeloid leukemia.</span></li>
<li><strong>Loss of function:</strong> the break falls in the middle of a gene, disrupting its coding region, so no working protein is made.</li>
</ul>
<p>If no gene is broken (a balanced translocation), the person can be healthy but may produce gametes with missing or extra pieces.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.06 explorer */
  {
    id: "qa-306-explorer",
    title: "Mutation explorer: point and chromosomal cases",
    lesson: "3.06",
    source: "Mutations Interactive and Practice Quiz (class activity), parts 1 and 2: the original gene, the four point-mutation buttons, and the four chromosome buttons.",
    items: [
      {
        tier: "essential",
        q: "Original sequence: the explorer's template strand is <span class=\"seq\">TAC CTC GTT ACT</span>. Write the mRNA and the amino acid sequence.",
        a: `<div class="eq"><span class="seq">DNA template&nbsp;3′-TAC CTC GTT ACT-5′</span><br><span class="seq">mRNA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5′-AUG GAG CAA UGA-3′</span><br>Met – Glu – Gln – Stop</div>
<ul>
<li>TAC → AUG: the start codon (Met).</li>
<li>CTC → GAG: <strong>glutamic acid (Glu)</strong>.</li>
<li>GTT → CAA: <strong>glutamine (Gln)</strong>.</li>
<li>ACT → UGA: stop.</li>
</ul>
<p>Watch the two look-alike names: <strong>Glu</strong> is glutamic acid (glutamate, codons GAA and GAG), an acidic, negatively charged amino acid. <strong>Gln</strong> is glutamine (codons CAA and CAG), an uncharged amino acid. This gene contains one of each, side by side.</p>`
      },
      {
        tier: "essential",
        q: "Silent button: the second triplet changes from CTC to CTT. What happens, and why is it silent?",
        a: `<p>The template change CTC → CT<strong>T</strong> changes the codon from GAG to GA<strong>A</strong>. Both GAG and GAA code for <strong>glutamic acid (Glu)</strong>, so the protein is still Met–Glu–Gln and is exactly the same. This is a <strong>silent</strong> substitution: a base changes, but the amino acid does not, thanks to redundancy in the code (the third base differs).</p>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The explorer's explanation says GAG and GAA code for “Glutamine (Glu)”. The abbreviation is right but the name is not: <strong>Glu is glutamic acid (glutamate)</strong>. Glutamine is <strong>Gln</strong>, coded by CAA and CAG (it is the third amino acid in this same gene).</p></div>`
      },
      {
        tier: "essential",
        q: "Missense button: the second triplet changes from CTC to CAC. What happens to the protein, and which human disease does this exact change cause?",
        a: `<p>Template CTC → C<strong>A</strong>C changes the codon GAG → G<strong>U</strong>G, so <strong>glutamic acid (Glu) is replaced by valine (Val)</strong>: Met–<strong>Val</strong>–Gln. A single substitution that gives a different amino acid is a <strong>missense</strong> mutation.</p>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The explorer (and quiz question 8) calls this a change from “Glutamine to Valine”. The amino acid being replaced is <strong>glutamic acid (Glu)</strong>, not glutamine (Gln).</p></div>
<p><strong>Connection:</strong> GAG → GUG (Glu → Val) at position 6 of the β-globin chain of hemoglobin is exactly the <strong>sickle-cell</strong> mutation. Glutamic acid is charged and hydrophilic; valine is nonpolar and hydrophobic. The new hydrophobic patch makes hemoglobin molecules stick together into long fibres when oxygen is low, which bends red blood cells into a sickle shape. One base out of hundreds in the gene changes the whole organism, which is why the slide uses a sickled cell for missense.</p>`
      },
      {
        tier: "essential",
        q: "Nonsense button: the third triplet changes from GTT to ATT. What happens?",
        a: `<p>Template GTT → <strong>A</strong>TT changes the codon CAA (Gln) to <strong>U</strong>AA, which is a <strong>stop codon</strong>. This is a <strong>nonsense</strong> mutation: a single substitution that forms a premature stop codon.</p>
<p>The protein is now only <strong>Met–Glu</strong>. Translation ends at the new stop, so the protein stops building early and is likely non-functional. In a real gene hundreds of codons long, an early nonsense mutation removes most of the protein; one near the very end may leave it partly working.</p>`
      },
      {
        tier: "essential",
        q: "Frameshift button: an extra A is inserted after TAC, giving <span class=\"seq\">TAC ACT CGT TAC T…</span>. What are the mRNA and the protein?",
        a: `<div class="eq"><span class="seq">DNA template&nbsp;3′-TAC <strong>A</strong>CT CGT TAC T…-5′</span><br><span class="seq">mRNA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5′-AUG <strong>U</strong>GA GCA AUG A…-3′</span><br>Met – Stop</div>
<p>The insertion shifts the reading frame, so every triplet after it is regrouped. Here the very next codon becomes <strong>UGA</strong>, a stop codon, so this insertion is a frameshift that also creates an immediate premature stop.</p>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The explorer shows the protein as “Met Stop Ala Met…”. Once a stop codon is in the A site, translation <strong>ends</strong>: the ribosome releases the chain and comes apart. The protein is just <strong>Met</strong>; the GCA (Ala) and AUG (Met) codons after the stop are never translated.</p></div>
<p>In general a frameshift changes every amino acid after the mutation and usually hits a premature stop codon soon, because about 3 of every 64 codons in a random frame are stops.</p>`
      },
      {
        tier: "essential",
        q: "Deletion button: chromosome A B C D E F becomes A B E F. Describe the mutation and its likely effect.",
        a: `<p><strong>Deletion:</strong> a section of the chromosome breaks off and is lost. Here genes <strong>C and D</strong> are gone.</p>
<p>Effect: a <strong>loss of genetic information</strong>. The cell has only one copy of C and D (on the homologous chromosome) instead of two, or none if both copies are deleted. Any protein that C or D coded for is reduced or missing. Large deletions are often severe or lethal; for example, a deletion on chromosome 5 causes cri-du-chat syndrome.</p>`
      },
      {
        tier: "essential",
        q: "Duplication button: A B C D E F becomes A B C B C D E F. Describe the mutation and its likely effect.",
        a: `<p><strong>Duplication:</strong> a segment of the chromosome is copied and inserted again, so <strong>B–C appears twice</strong>. Slide wording: a section of a chromosome is added from its homologous chromosome (typically through unequal crossing over, which leaves the homologue with a matching deletion).</p>
<p>Effect: extra copies of genes B and C, so the cell may make <strong>too much</strong> of their proteins (a gene-dosage effect). The proteins themselves are normal. Duplications can also be useful over evolutionary time: the spare copy is free to mutate and take on a new function.</p>`
      },
      {
        tier: "essential",
        q: "Inversion button: A B C D E F becomes A D C B E F. Describe the mutation and its likely effect.",
        a: `<p><strong>Inversion:</strong> a section of the chromosome breaks off, flips (rotates 180°) and reattaches, so <strong>B–C–D becomes D–C–B</strong>. Slide wording: a section of a chromosome is reversed.</p>
<p>Effect: no genetic information is lost or gained, so an inversion is often harmless. It causes problems when a break point falls <strong>inside a gene</strong> (disrupting it) or moves a gene away from its regulatory sequences. Inversions can also interfere with pairing and crossing over in meiosis, producing gametes with abnormal chromosomes.</p>`
      },
      {
        tier: "essential",
        q: "Translocation button: chromosome 1 becomes A B C X Y Z and chromosome 2 becomes U V W D E F. Describe the mutation.",
        a: `<p><strong>Translocation:</strong> a piece of one chromosome breaks off and attaches to a different, <strong>non-homologous</strong> chromosome. Here the two chromosomes have <strong>swapped</strong> their ends (D E F moved to chromosome 2 and X Y Z to chromosome 1): a <span class="term">reciprocal translocation</span>.</p>
<p>Effect: if no gene is broken and nothing is lost (a balanced translocation), the person may be healthy, but their gametes can receive unbalanced sets. If a break point lands in or next to a gene, it can cause deregulated expression, a chimeric fusion protein or a loss of function (slide 20).</p>
<p>Do not confuse it with <strong>crossing over</strong>, which is a normal exchange between <em>homologous</em> chromosomes, or with <strong>insertion</strong>, where a piece moves without a swap.</p>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.06 quiz pool */
  {
    id: "qa-306-quiz",
    title: "Mutation quiz pool: all 15 questions",
    lesson: "3.06",
    source: "Mutations Interactive and Practice Quiz, part 3 Knowledge Check: the full pool of 15 questions (the activity shows one random question from each of five levels). Correct answers are from the activity.",
    items: [
      {
        tier: "essential",
        q: "Level 1: Which type of mutation changes a single DNA base but does NOT change the resulting amino acid? (A Missense, B Nonsense, C Silent, D Frameshift)",
        a: `<p><strong>Correct choice: C, silent.</strong></p>
<p>Because the code is redundant, a new codon can still code for the same amino acid (e.g. GAG → GAA, both Glu), so the protein is unchanged.</p>
<ul>
<li><strong>Missense</strong> is wrong: it changes the amino acid.</li>
<li><strong>Nonsense</strong> is wrong: it changes a codon into a stop codon.</li>
<li><strong>Frameshift</strong> is wrong: it is an insertion or deletion (not a single changed base) and alters every amino acid after it.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Level 1: What do we call a mutation where one nucleotide is swapped out for a different one? (A Insertion, B Substitution, C Deletion, D Translocation)",
        a: `<p><strong>Correct choice: B, substitution</strong> (a base-pair substitution, a type of point mutation).</p>
<ul>
<li><strong>Insertion</strong> is wrong: a base is added, not swapped.</li>
<li><strong>Deletion</strong> is wrong: a base is removed.</li>
<li><strong>Translocation</strong> is wrong: it is a chromosomal mutation that moves a whole chromosome segment to a non-homologous chromosome.</li>
</ul>
<p>Substitutions are the ones that can be silent, missense or nonsense.</p>`
      },
      {
        tier: "essential",
        q: "Level 1: What are the basic building blocks of a protein that change during a missense mutation? (A Chromosomes, B Amino acids, C Lipids, D Nucleotides)",
        a: `<p><strong>Correct choice: B, amino acids.</strong></p>
<p>A missense mutation changes one codon so that a <strong>different amino acid</strong> is put into the polypeptide.</p>
<ul>
<li><strong>Chromosomes</strong> are wrong: they are made of DNA and protein, not the building blocks of a protein.</li>
<li><strong>Lipids</strong> are wrong: they are a different class of macromolecule.</li>
<li><strong>Nucleotides</strong> are the building blocks of DNA and RNA. A nucleotide does change in the DNA, but the question asks about the protein.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Level 2: What is the immediate result of a nonsense mutation? (A An extra base is added, B An early STOP codon is created, C Two chromosomes swap parts, D A section of a chromosome is flipped)",
        a: `<p><strong>Correct choice: B, an early STOP codon is created.</strong></p>
<p>A nonsense mutation is a substitution that turns an amino-acid codon into UAA, UAG or UGA, so translation ends early and the protein is truncated.</p>
<ul>
<li><strong>A</strong> describes an insertion (often a frameshift).</li>
<li><strong>C</strong> describes a translocation.</li>
<li><strong>D</strong> describes an inversion.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Level 2: Which chromosomal mutation involves a segment breaking off and flipping upside down? (A Inversion, B Duplication, C Deletion, D Translocation)",
        a: `<p><strong>Correct choice: A, inversion.</strong> The segment reattaches in reverse order (A B C D E → A D C B E).</p>
<ul>
<li><strong>Duplication</strong> is wrong: a segment is repeated.</li>
<li><strong>Deletion</strong> is wrong: a segment is lost.</li>
<li><strong>Translocation</strong> is wrong: a segment moves to a non-homologous chromosome.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Level 2: Which mutation involves an entire segment of a chromosome being copied and inserted again? (A Silent, B Inversion, C Frameshift, D Duplication)",
        a: `<p><strong>Correct choice: D, duplication</strong> (e.g. A B C D E F → A B C B C D E F).</p>
<ul>
<li><strong>Silent</strong> and <strong>frameshift</strong> are wrong: they are point (gene) mutations affecting one or a few bases, not whole chromosome segments.</li>
<li><strong>Inversion</strong> is wrong: the segment is reversed, not copied.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Level 3: Why is a frameshift mutation usually more harmful than a substitution mutation? (A It deletes a whole chromosome, B It affects only one amino acid, C It creates a silent mutation, D It shifts the reading frame, altering all subsequent amino acids)",
        a: `<p><strong>Correct choice: D, it shifts the reading frame, altering all subsequent amino acids.</strong></p>
<p>Codons are read in non-overlapping triplets from the start codon. Adding or removing one or two bases regroups every codon after the change, so every later amino acid is wrong, and a premature stop codon usually appears soon. A substitution changes at most one codon.</p>
<ul>
<li><strong>A</strong> is wrong: frameshifts involve one or two bases, not a chromosome.</li>
<li><strong>B</strong> is wrong: that describes a missense substitution, which is why substitutions are usually <em>less</em> harmful.</li>
<li><strong>C</strong> is wrong: a frameshift is almost never silent.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Level 3: A mutation changes a DNA sequence from CTC to CAC, altering the amino acid from Glutamine to Valine. What is this called? (A Missense, B Nonsense, C Silent, D Deletion)",
        a: `<p><strong>Correct choice: A, missense.</strong> One substituted base gives a different amino acid.</p>
<ul>
<li><strong>Nonsense</strong> is wrong: no stop codon is formed.</li>
<li><strong>Silent</strong> is wrong: the amino acid changes.</li>
<li><strong>Deletion</strong> is wrong: no base is lost; there are still three bases.</li>
</ul>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>Reading CTC as the <strong>template</strong> strand (as the explorer does), the codon changes from GAG to GUG: <strong>glutamic acid (Glu)</strong> to valine (Val), not glutamine. Glutamine (Gln) is coded by CAA and CAG. This Glu → Val change is exactly the <strong>sickle-cell</strong> mutation in β-globin.</p></div>`
      },
      {
        tier: "essential",
        q: "Level 3: If a nucleotide is deleted from a DNA sequence, what kind of mutation happens? (A Frameshift, B Inversion, C Silent, D Translocation)",
        a: `<p><strong>Correct choice: A, frameshift.</strong></p>
<p>Deleting one base from a coding sequence moves every later base back one position, so the reading frame shifts and all downstream codons change. (Deleting three bases would instead remove one codon, an in-frame deletion.)</p>
<ul>
<li><strong>Inversion</strong> and <strong>translocation</strong> are wrong: they are chromosomal mutations of large segments.</li>
<li><strong>Silent</strong> is wrong: silent mutations are substitutions that keep the amino acid.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Level 4: A chromosome's genes are in the order A-B-C-D-E, and it mutates to A-D-C-B-E. What type of mutation occurred? (A Deletion, B Duplication, C Inversion, D Translocation)",
        a: `<p><strong>Correct choice: C, inversion.</strong> The segment B-C-D was reversed to D-C-B; the same five genes are still present.</p>
<ul>
<li><strong>Deletion</strong> is wrong: nothing is missing.</li>
<li><strong>Duplication</strong> is wrong: nothing is repeated.</li>
<li><strong>Translocation</strong> is wrong: no genes from another chromosome appear.</li>
</ul>
<p>Method: count the genes first (same number means no deletion or duplication), then check whether a block is in reverse order.</p>`
      },
      {
        tier: "essential",
        q: "Level 4: Chromosome 1 is A-B-C and chromosome 2 is X-Y-Z. After a mutation they are A-B-Z and X-Y-C. What occurred? (A Frameshift, B Translocation, C Inversion, D Missense)",
        a: `<p><strong>Correct choice: B, translocation</strong> (a reciprocal one: C and Z swapped places between two non-homologous chromosomes).</p>
<ul>
<li><strong>Frameshift</strong> and <strong>missense</strong> are wrong: they are point mutations within one gene, not exchanges of chromosome segments.</li>
<li><strong>Inversion</strong> is wrong: an inversion reverses a segment within one chromosome; here genes moved between chromosomes.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Level 4: A single substitution mutation occurs, but the protein folds and functions perfectly normally. What is the most likely explanation? (A It was a nonsense mutation, B It was a frameshift mutation, C It was a silent mutation, D It was a large chromosomal deletion)",
        a: `<p><strong>Correct choice: C, it was a silent mutation.</strong> The new codon codes for the same amino acid, so the protein is identical.</p>
<ul>
<li><strong>Nonsense</strong> is wrong: a premature stop would shorten the protein, usually destroying its function.</li>
<li><strong>Frameshift</strong> is wrong: it is not a substitution, and it scrambles the rest of the protein.</li>
<li><strong>Large chromosomal deletion</strong> is wrong: it is not a single substitution and would remove genes.</li>
</ul>
<p>(A missense change to a chemically similar amino acid can also be harmless, but “silent” is the most likely explanation offered.)</p>`
      },
      {
        tier: "essential",
        q: "Level 5: During cell division, a piece of chromosome 4 breaks off and attaches to chromosome 20. Which of the following describes this? (A Frameshift mutation on chromosome 4, B Translocation between non-homologous chromosomes, C Duplication on chromosome 20, D Inversion on both chromosomes)",
        a: `<p><strong>Correct choice: B, translocation between non-homologous chromosomes.</strong> Chromosomes 4 and 20 are different (non-homologous) chromosomes, and a segment moved from one to the other.</p>
<ul>
<li><strong>A</strong> is wrong: a frameshift is a one- or two-base change inside a gene.</li>
<li><strong>C</strong> is wrong: chromosome 20 gained material, but it came from a different chromosome, not from a copy of its own segment (duplication comes from the homologous chromosome).</li>
<li><strong>D</strong> is wrong: nothing was reversed.</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Level 5: A researcher notices a cell overproducing a specific protein, but the protein's structure is perfectly normal. Which chromosomal mutation might be responsible? (A Duplication, B Deletion, C Nonsense, D Frameshift)",
        a: `<p><strong>Correct choice: A, duplication.</strong> An extra copy of the gene means more mRNA is transcribed and more of the same, normal protein is made (a gene-dosage effect). The coding sequence is unchanged, so the structure is normal.</p>
<ul>
<li><strong>Deletion</strong> is wrong: losing the gene would mean less (or none) of the protein.</li>
<li><strong>Nonsense</strong> and <strong>frameshift</strong> are wrong: they are point mutations, not chromosomal ones, and both would change the protein's structure (truncated or scrambled).</li>
</ul>`
      },
      {
        tier: "essential",
        q: "Level 5: Why might a missense mutation sometimes be harmless, while other times it causes a severe disease like sickle cell anemia? (A It depends on whether it creates an early stop codon, B It depends on whether the new amino acid has similar chemical properties to the old one, C It depends on whether the chromosome flipped, D Missense mutations are never harmless)",
        a: `<p><strong>Correct choice: B, it depends on whether the new amino acid has chemical properties similar to the old one</strong> (and on where in the protein it is).</p>
<p>A protein's shape depends on its amino acids' side chains (charge, polarity, size). Swapping one hydrophobic amino acid for another, such as leucine for isoleucine, usually leaves the shape and function intact. In sickle cell anemia, charged, hydrophilic <strong>glutamic acid</strong> is replaced by nonpolar, hydrophobic <strong>valine</strong> on the surface of hemoglobin, which makes the molecules clump into fibres.</p>
<ul>
<li><strong>A</strong> is wrong: creating a stop codon would make it a nonsense mutation, not missense.</li>
<li><strong>C</strong> is wrong: flipping is an inversion, a chromosomal mutation.</li>
<li><strong>D</strong> is wrong: many missense mutations are harmless (conservative changes), and some are even beneficial.</li>
</ul>`
      }
    ]
  },

  /* ------------------------------------------------------------------ 3.07 operon activity */
  {
    id: "qa-307-operon",
    title: "Operon activity: lac and trp",
    lesson: "3.07",
    source: "lac and trp Operon Interactive Activity (class activity): the background text and every state of the operon switch (add/remove the molecule, attempt transcription). There are no slides for operons; answers extend the activity with standard SBI4U content.",
    items: [
      {
        tier: "essential",
        q: "What is an operon? Name and describe its three main parts, and the separate gene that controls it.",
        a: `<p>Activity definition: an <span class="term">operon</span> is a functioning unit of DNA containing a <strong>cluster of genes under the control of a single regulatory signal</strong>. Operons are found in prokaryotes; the genes are transcribed together into one mRNA.</p>
<ul>
<li><strong>Promoter:</strong> the DNA sequence where <strong>RNA polymerase</strong> binds to begin transcription.</li>
<li><strong>Operator:</strong> the “on/off switch”, located between the promoter and the structural genes. It is the binding site for a <strong>repressor protein</strong>; when the repressor is bound, it physically blocks RNA polymerase.</li>
<li><strong>Structural genes:</strong> the genes that code for the enzymes or proteins the cell needs (<em>lacZ</em>, <em>lacY</em>, <em>lacA</em>; or <em>trpE</em>, <em>trpD</em>, <em>trpC</em>, <em>trpB</em>, <em>trpA</em>).</li>
</ul>
<p data-tier="likely">The repressor itself is coded by a <strong>regulatory gene</strong> with its own promoter, located outside the operon (<em>lacI</em> next to the lac operon; <em>trpR</em> elsewhere on the chromosome). It is transcribed all the time, so the cell always has some repressor ready.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Order along the DNA: <strong>P</strong>romoter, <strong>O</strong>perator, <strong>S</strong>tructural genes: “POS”. Polymerase parks, the operator is the gate, the structural genes are the goods.</p></div>`
      },
      {
        tier: "essential",
        q: "Lac operon, lactose absent: describe the state of the operon. What happens when you press “Attempt Transcription”?",
        a: `<p><strong>System OFF</strong> (the default for an inducible operon).</p>
<ol class="steps">
<li><p class="step-head">Active repressor</p><p>The lac repressor is made in its <strong>active</strong> form, which can bind DNA on its own.</p></li>
<li><p class="step-head">Bound to the operator</p><p>With no lactose around, the repressor binds the <strong>operator</strong>.</p></li>
<li><p class="step-head">Blocked</p><p>RNA polymerase can still bind the promoter, but the repressor sits in its path. <strong>Transcription is blocked</strong> (the activity's alert: RNA polymerase cannot pass the repressor on the operator).</p></li>
</ol>
<p><strong>Why:</strong> the enzymes that digest lactose are useless when there is no lactose, so not making them <strong>saves energy</strong> (ATP and amino acids that would otherwise go into unneeded mRNA and protein).</p>`
      },
      {
        tier: "essential",
        q: "Lac operon, lactose present: describe what lactose does to the repressor and the result of “Attempt Transcription”.",
        a: `<p><strong>System ON.</strong> Lactose acts as the <span class="term">inducer</span>.</p>
<ol class="steps">
<li><p class="step-head">Inducer binds the repressor</p><p>Lactose binds to the repressor at a site separate from its DNA-binding site.</p></li>
<li><p class="step-head">Shape change</p><p>Binding changes the repressor's shape so it can no longer hold on to the operator, and it <strong>releases</strong>.</p></li>
<li><p class="step-head">Transcription</p><p>With the operator clear, RNA polymerase moves from the promoter through the structural genes <em>lacZ</em>, <em>lacY</em> and <em>lacA</em>, making one mRNA (“Transcription successful!”). Ribosomes translate it into the three enzymes.</p></li>
</ol>
<p data-tier="likely">More precisely, the inducer is <strong>allolactose</strong>, an isomer of lactose formed from it inside the cell. The activity simply calls it lactose, which is fine at this level.</p>`
      },
      {
        tier: "essential",
        q: "What do the lac operon's three structural genes code for, and why does it make sense to transcribe them together?",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th>Gene</th><th>Protein</th><th>Job</th></tr></thead>
<tbody>
<tr><td><em>lacZ</em></td><td>β-galactosidase</td><td>breaks lactose into glucose + galactose (hydrolysis); also makes allolactose</td></tr>
<tr><td><em>lacY</em></td><td>lactose permease</td><td>membrane transport protein that brings lactose into the cell</td></tr>
<tr><td><em>lacA</em></td><td>transacetylase</td><td>a related enzyme; its exact role is minor</td></tr>
</tbody></table></div>
<p>All three are needed for the same task, using lactose as food, so the cell gains by controlling them with <strong>one switch</strong>: one promoter, one operator and one mRNA that carries all three coding sequences. When lactose appears, the permease and β-galactosidase are made together, in matching amounts, at the same moment.</p>`
      },
      {
        tier: "likely",
        q: "In the lac operon, what happens after the bacterium has used up all the lactose?",
        a: `<ol class="steps">
<li><p class="step-head">Inducer gone</p><p>β-galactosidase breaks down the remaining lactose, so no inducer is left to bind the repressor.</p></li>
<li><p class="step-head">Repressor reactivates</p><p>Without the inducer, the repressor returns to its active shape and <strong>binds the operator again</strong>.</p></li>
<li><p class="step-head">Transcription stops</p><p>No new lac mRNA is made. Bacterial mRNA is short-lived (broken down within minutes), so the existing messages disappear quickly, and the enzymes are diluted out as the cells divide.</p></li>
</ol>
<p>This is a self-correcting loop: the substrate (lactose) switches on the genes for its own breakdown, and breaking it down switches them off again. In the activity, this is pressing “Remove Lactose” after “Add Lactose”.</p>`
      },
      {
        tier: "essential",
        q: "Trp operon, tryptophan absent: describe the state of the operon and why it is on.",
        a: `<p><strong>System ON</strong> (the default for a repressible operon).</p>
<ul>
<li>The trp repressor is made in an <strong>inactive</strong> form that cannot bind the operator by itself.</li>
<li>The operator is clear, so RNA polymerase freely transcribes the five structural genes <em>trpE</em>, <em>trpD</em>, <em>trpC</em>, <em>trpB</em> and <em>trpA</em>, which code for the enzymes of the pathway that builds tryptophan.</li>
</ul>
<p><strong>Why:</strong> tryptophan is an amino acid the bacterium needs for every protein it makes. If there is none in its surroundings, it must manufacture its own, so the genes stay on.</p>`
      },
      {
        tier: "essential",
        q: "Trp operon, tryptophan present: describe what tryptophan does and the result of “Attempt Transcription”.",
        a: `<p><strong>System OFF.</strong> Excess tryptophan acts as a <span class="term">corepressor</span>.</p>
<ol class="steps">
<li><p class="step-head">Corepressor binds</p><p>Tryptophan binds to the inactive repressor.</p></li>
<li><p class="step-head">Repressor activated</p><p>Binding changes the repressor's shape so it <strong>can</strong> now bind the operator.</p></li>
<li><p class="step-head">Blocked</p><p>The active repressor–tryptophan complex locks onto the operator and blocks RNA polymerase. Transcription stops (“Transcription blocked!”).</p></li>
</ol>
<p><strong>Why:</strong> the cell already has enough tryptophan, so making more would waste energy and building materials. When tryptophan is used up, it leaves the repressor, the repressor becomes inactive again, and the genes switch back on. The end product of the pathway controls the pathway: a form of <strong>negative feedback</strong>.</p>`
      },
      {
        tier: "essential",
        q: "Compare an inducer and a corepressor, and compare inducible and repressible operons.",
        a: `<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>lac operon (inducible)</th><th>trp operon (repressible)</th></tr></thead>
<tbody>
<tr><td>Default state</td><td><strong>OFF</strong></td><td><strong>ON</strong></td></tr>
<tr><td>Repressor as made</td><td>active (binds the operator on its own)</td><td>inactive (cannot bind on its own)</td></tr>
<tr><td>Effector molecule</td><td><strong>inducer</strong>: lactose (allolactose)</td><td><strong>corepressor</strong>: tryptophan</td></tr>
<tr><td>Effect of the effector on the repressor</td><td>inactivates it: repressor releases the operator</td><td>activates it: repressor binds the operator</td></tr>
<tr><td>Effector present →</td><td>genes ON</td><td>genes OFF</td></tr>
<tr><td>Kind of pathway</td><td>catabolic (breaks lactose down)</td><td>anabolic (builds tryptophan)</td></tr>
<tr><td>Regulatory gene</td><td><em>lacI</em></td><td><em>trpR</em></td></tr>
</tbody></table></div>
<p>Both molecules work the same way, by binding the repressor and changing its shape, but in opposite directions: an <strong>inducer turns transcription on</strong> by removing the repressor; a <strong>corepressor turns transcription off</strong> by helping the repressor bind. Both operons are examples of <strong>negative control</strong>, because the regulator (a repressor) turns genes off when it binds.</p>`
      },
      {
        tier: "likely",
        q: "Why does it make sense for the lac operon to be inducible and the trp operon to be repressible?",
        a: `<p>Each design matches the job of its pathway and saves energy in a different situation.</p>
<div class="compare"><div><h4>lac: catabolic, inducible</h4>
<p>The enzymes <strong>break down</strong> a food (lactose) that is only sometimes available. The sensible default is OFF: make the enzymes only when their <strong>substrate</strong> appears. So the substrate itself (as the inducer) is the signal that turns the genes on.</p></div>
<div><h4>trp: anabolic, repressible</h4>
<p>The enzymes <strong>build</strong> something the cell always needs (tryptophan for proteins). The sensible default is ON: keep making it unless there is already plenty. So the <strong>product</strong> itself (as the corepressor) is the signal that turns the genes off.</p></div></div>
<p>General rule: catabolic operons are usually inducible (switched on by their substrate); anabolic operons are usually repressible (switched off by their end product). In both cases the bacterium avoids spending ATP and amino acids on proteins it does not need, which matters for single cells competing for limited resources.</p>`
      },
      {
        tier: "likely",
        q: "Predict what would happen to the lac operon (with and without lactose) if (a) the operator were mutated so the repressor could not bind it, or (b) the <em>lacI</em> gene were mutated so no working repressor were made.",
        a: `<p><strong>(a) Operator mutation:</strong> the repressor has nowhere to bind, so the genes are transcribed <strong>all the time</strong>, with or without lactose (always ON, called constitutive expression). The cell wastes energy making lactose enzymes it does not need.</p>
<p><strong>(b) No working repressor:</strong> the result is the same: nothing blocks RNA polymerase, so the operon is <strong>always ON</strong>.</p>
<p data-tier="extra">(c) A repressor that cannot bind the inducer (a “super-repressor”) would stay on the operator even when lactose is present, so the operon would be <strong>always OFF</strong> and the cell could never use lactose.</p>
<p>This kind of reasoning (which part is broken, so what can no longer happen?) is how scientists such as Jacob and Monod worked out the operon model in the first place. Always start from the normal sequence of events and find the step the mutation removes.</p>`
      },
      {
        tier: "likely",
        q: "<em>E. coli</em> prefers glucose to lactose. How does the lac operon “know” whether glucose is available? Predict its activity under the four combinations of glucose and lactose.",
        a: `<p>The lac operon also has <strong>positive control</strong>, through an activator protein called <span class="term">CAP</span> (catabolite activator protein):</p>
<ul>
<li>When <strong>glucose is low</strong>, the cell makes more <strong>cAMP</strong>. cAMP binds CAP, and the CAP–cAMP complex binds a site just upstream of the lac promoter, helping RNA polymerase bind strongly. Transcription is high.</li>
<li>When <strong>glucose is high</strong>, cAMP is low, CAP does not bind, and RNA polymerase binds the promoter only weakly. Transcription stays low even if lactose is present.</li>
</ul>
<div class="table-wrap"><table class="data">
<thead><tr><th>Glucose</th><th>Lactose</th><th>Repressor</th><th>CAP–cAMP</th><th>lac transcription</th></tr></thead>
<tbody>
<tr><td>high</td><td>absent</td><td>bound to operator</td><td>not bound</td><td>off</td></tr>
<tr><td>high</td><td>present</td><td>released</td><td>not bound</td><td>low</td></tr>
<tr><td>low</td><td>absent</td><td>bound to operator</td><td>bound</td><td>off</td></tr>
<tr><td>low</td><td>present</td><td>released</td><td>bound</td><td><strong>high</strong></td></tr>
</tbody></table></div>
<p>So the operon is strongly on only when lactose is the <strong>only</strong> sugar available. The repressor answers “is there lactose?”; CAP answers “is glucose scarce?”. Using glucose first makes sense because it can enter glycolysis directly, with no extra enzymes to make.</p>`
      }
    ]
  }
);
