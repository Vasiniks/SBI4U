/* SBI4U Unit 3 Molecular Genetics: apply & extend questions (3 per lesson, xg01–xg21). */
window.EXT = window.EXT || [];

window.EXT.push(
  /* ---------- 3.01 History of Genetics ---------- */
  {
    id: "xg01",
    lesson: "3.01",
    level: "apply",
    tier: "essential",
    title: "Predict the mice: Griffith's injections and Avery's enzyme tubes",
    prompt: `<p>A student repeats the classic transformation experiments with smooth (S) and rough (R) <em>Streptococcus pneumoniae</em>. Each mixture is injected into a mouse. In tubes 4–6, an extract of heat-killed S cells is first treated with one enzyme and then mixed with live R cells.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Tube</th><th>What is injected</th><th>Mouse lives or dies?</th><th>Live S cells recovered?</th></tr></thead>
<tbody>
<tr><td>1</td><td>Live R cells</td><td>?</td><td>?</td></tr>
<tr><td>2</td><td>Heat-killed S cells</td><td>?</td><td>?</td></tr>
<tr><td>3</td><td>Heat-killed S cells + live R cells</td><td>?</td><td>?</td></tr>
<tr><td>4</td><td>S extract + protease, then live R cells</td><td>?</td><td>?</td></tr>
<tr><td>5</td><td>S extract + RNase, then live R cells</td><td>?</td><td>?</td></tr>
<tr><td>6</td><td>S extract + DNase, then live R cells</td><td>?</td><td>?</td></tr>
<tr><td>7</td><td>Heat-killed S cells + heat-killed R cells</td><td>?</td><td>?</td></tr>
</tbody></table></div>
<ol>
<li>Complete the table.</li>
<li>Explain why the S strain kills mice but the R strain does not.</li>
<li>In tube 3, live S cells are recovered from the dead mouse, and their offspring are still S cells many generations later. Why does this show that the change is genetic, not just a coating picked up from the dead cells?</li>
<li>Explain how tubes 4–6 identify the transforming principle. Why is tube 6 the key result?</li>
<li>Why did Griffith's 1928 result not, on its own, show that DNA is the hereditary material?</li>
</ol>`,
    hints: [
      "Transformation needs two things: something alive to be transformed, and an intact transforming molecule.",
      "Each enzyme destroys one kind of molecule. If transformation still happens after an enzyme acts, that molecule cannot be the transforming principle.",
      "Griffith showed that <em>something</em> transforms. What did he not identify?"
    ],
    answer: `<p><strong>a.</strong></p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Tube</th><th>Mouse</th><th>Live S recovered?</th><th>Why</th></tr></thead>
<tbody>
<tr><td>1</td><td>Lives</td><td>No</td><td>R is non-virulent; the immune system clears it.</td></tr>
<tr><td>2</td><td>Lives</td><td>No</td><td>Dead S cells cannot reproduce or cause infection.</td></tr>
<tr><td>3</td><td><strong>Dies</strong></td><td><strong>Yes</strong></td><td>Some R cells take up S DNA and are transformed into S.</td></tr>
<tr><td>4</td><td>Dies</td><td>Yes</td><td>Protein destroyed, but DNA intact: transformation still happens.</td></tr>
<tr><td>5</td><td>Dies</td><td>Yes</td><td>RNA destroyed, but DNA intact: transformation still happens.</td></tr>
<tr><td>6</td><td><strong>Lives</strong></td><td><strong>No</strong></td><td>DNA destroyed: nothing can transform the R cells.</td></tr>
<tr><td>7</td><td>Lives</td><td>No</td><td>Nothing is alive to be transformed or to reproduce.</td></tr>
</tbody></table></div>
<p><strong>b.</strong> S cells have a <strong>polysaccharide capsule</strong> (which also makes their colonies look smooth). The capsule hides them from the mouse's white blood cells, so they multiply and cause fatal pneumonia. R cells lack the capsule (rough colonies), so the immune system destroys them.</p>
<p><strong>c.</strong> A coating picked up from dead cells would be diluted out as the bacteria divide, and the great-great-grandchildren would be R again. Instead the S trait is <strong>passed on to every generation</strong>, so the R cells must have gained the <em>instructions</em> for making a capsule. A heritable change in the instructions is a genetic change: this is <span class="term">transformation</span>.</p>
<p><strong>d.</strong> Each enzyme destroys one candidate molecule. Transformation still happens after protease (protein gone) and RNase (RNA gone), so neither protein nor RNA is needed. Only <strong>DNase</strong> stops transformation, so the transforming principle must be <strong>DNA</strong>. Tube 6 is the key result because it is the one change that removes the effect; the others show what is <em>not</em> needed.</p>
<p><strong>e.</strong> Griffith showed that a chemical from dead S cells can permanently change live R cells, but he never purified or identified that chemical. In 1928 most scientists assumed the hereditary material was <strong>protein</strong> (20 amino acids can make far more varied sequences than 4 nucleotides). It took Avery, MacLeod and McCarty (1944) to show the transforming principle is DNA, and Hershey and Chase (1952) to confirm it in a completely different system.</p>
<p><em>Note:</em> Avery's group actually tested transformation in culture dishes, looking for smooth colonies growing from the treated R cells. Many textbook figures, including the class slide, show mice to keep the comparison with Griffith simple.</p>`,
    marks: 8
  },
  {
    id: "xg02",
    lesson: "3.01",
    level: "apply",
    tier: "likely",
    title: "Choosing the right label: Hershey and Chase's isotopes",
    prompt: `<p>Hershey and Chase grew T2 phages in a medium containing <sup>35</sup>S (batch 1) or <sup>32</sup>P (batch 2), let each batch infect unlabelled <em>E. coli</em>, blended the mixture, then centrifuged it.</p>
<ol>
<li>Explain why <sup>35</sup>S labels only the phage protein and <sup>32</sup>P labels mainly the phage DNA.</li>
<li>Predict where most of the radioactivity ends up (pellet or supernatant) in each batch, and explain why.</li>
<li>What was the purpose of the blender? What would happen to the results if the blending step were skipped?</li>
<li>A student suggests repeating the experiment with radioactive carbon (<sup>14</sup>C) or heavy nitrogen (<sup>15</sup>N) instead. Why would this not work?</li>
<li>In the real experiment about 20% of the <sup>35</sup>S still came down with the bacteria in the pellet, yet Hershey and Chase still concluded DNA is the genetic material. Suggest why some <sup>35</sup>S stayed with the cells, and what additional observation about the <em>new</em> phages made their conclusion convincing.</li>
</ol>`,
    hints: [
      "Which amino acids contain sulfur? Which part of a nucleotide contains phosphorus?",
      "Bacteria are much heavier than empty phage coats. Which ends up at the bottom of a spinning tube?",
      "A good label must be in one molecule and not the other."
    ],
    answer: `<p><strong>a.</strong> Proteins contain sulfur in the amino acids <strong>cysteine and methionine</strong>; DNA contains <strong>no sulfur</strong>. DNA has a phosphate group in every nucleotide of its backbone, so it is rich in <strong>phosphorus</strong>; phage proteins contain little or none. So each isotope tags one molecule.</p>
<p><strong>b.</strong> Batch 1 (<sup>35</sup>S): mostly in the <strong>supernatant</strong>. The protein coats stay outside the bacteria; blending knocks them off and, being light, they remain in the liquid. Batch 2 (<sup>32</sup>P): mostly in the <strong>pellet</strong>. The phage injected its DNA into the bacteria, and the heavier bacteria sink to form the pellet, taking the labelled DNA with them.</p>
<p><strong>c.</strong> The blender sheared the empty phage coats off the outside of the bacteria. Without it, the coats would stay attached and be pulled down with the cells, so <sup>35</sup>S would also appear in the pellet and the two batches would look alike. You could not tell what had gone <em>inside</em> the cells from what was just stuck to the outside.</p>
<p><strong>d.</strong> Carbon and nitrogen are found in <strong>both</strong> protein and DNA (amino acids and nucleotides both contain C and N). Both parts of the phage would be labelled, so finding the label inside the bacteria would not tell you which molecule entered. A useful label must be unique to one molecule.</p>
<p><strong>e.</strong> Blending is not perfect: some empty coats stay stuck to the bacteria (and some unabsorbed phages are trapped with cells), so some <sup>35</sup>S is pulled into the pellet. The convincing evidence is in the <strong>next generation of phages</strong>: the progeny phages released from infected cells contained a good share of the <sup>32</sup>P (about 30%) but essentially none (under 1%) of the <sup>35</sup>S. The material passed from parent phage to offspring is DNA, so DNA is the hereditary material. This supported Avery's result in a completely different organism.</p>`,
    marks: 7
  },
  {
    id: "xg03",
    lesson: "3.01",
    level: "extend",
    tier: "likely",
    title: "Meselson–Stahl: predicting bands for every model",
    prompt: `<p><em>E. coli</em> are grown for many generations on <sup>15</sup>N, then moved to <sup>14</sup>N. Samples are taken after each generation and their DNA is centrifuged in a CsCl density gradient. Bands can appear at three positions: heavy (H, both strands <sup>15</sup>N), hybrid (I, one of each, or an even mixture) and light (L, both strands <sup>14</sup>N).</p>
<ol>
<li>Copy and complete the table, giving the bands and their proportions predicted by each hypothesis.
<div class="table-wrap"><table class="data">
<thead><tr><th>Generation in <sup>14</sup>N</th><th>Conservative</th><th>Semiconservative</th><th>Dispersive</th></tr></thead>
<tbody><tr><td>0</td><td></td><td></td><td></td></tr><tr><td>1</td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td></tr></tbody></table></div></li>
<li>Which generation's result ruled out conservative replication, and which ruled out dispersive replication? Explain.</li>
<li>Show that after 4 generations 12.5% of double helices contain an original strand. Write a general formula for <em>n</em> generations.</li>
<li>Generation-1 DNA is heated so the strands separate, then centrifuged. Predict the bands for the semiconservative and dispersive models.</li>
<li>Predict the bands for the reverse experiment: cells grown on <sup>14</sup>N moved to <sup>15</sup>N, after generations 1 and 2.</li>
</ol>`,
    hints: [
      "Draw one parent molecule as two thick (heavy) strands. In each generation, separate every double helix and give each strand a thin (light) partner.",
      "In the dispersive model every strand is a patchwork, so each generation halves the heavy fraction of every molecule.",
      "No matter how many generations pass, how many original strands still exist?"
    ],
    answer: `<p><strong>a.</strong></p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Gen.</th><th>Conservative</th><th>Semiconservative</th><th>Dispersive</th></tr></thead>
<tbody>
<tr><td>0</td><td>100% H</td><td>100% H</td><td>100% H</td></tr>
<tr><td>1</td><td>50% H + 50% L (two bands)</td><td>100% I (one hybrid band)</td><td>100% I (one band, half-heavy)</td></tr>
<tr><td>2</td><td>25% H + 75% L</td><td>50% I + 50% L</td><td>One band, ¼ heavy (between I and L)</td></tr>
<tr><td>3</td><td>12.5% H + 87.5% L</td><td>25% I + 75% L</td><td>One band, ⅛ heavy (closer to L)</td></tr>
</tbody></table></div>
<p><strong>b.</strong> <strong>Generation 1</strong> showed a single hybrid band and no heavy band, ruling out <strong>conservative</strong> replication (which keeps an intact heavy parent). <strong>Generation 2</strong> showed two bands, hybrid and light, ruling out <strong>dispersive</strong> replication (which predicts one band that slowly drifts toward light). Only semiconservative replication fits both results.</p>
<p><strong>c.</strong> One parent molecule has 2 original strands. Each generation doubles the number of molecules: 2, 4, 8, 16. The two original strands are never destroyed, so they always end up in exactly <strong>2</strong> molecules (as hybrids). After 4 generations: 2 ÷ 16 × 100 = <strong>12.5%</strong> (class key). In general, after <em>n</em> generations the fraction is 2 ÷ 2<sup><em>n</em></sup> = 1 ÷ 2<sup><em>n</em> − 1</sup>.</p>
<p><strong>d.</strong> Semiconservative: every generation-1 molecule is one heavy strand plus one light strand, so separated single strands form <strong>two bands</strong>, heavy and light, in equal amounts. Dispersive: every strand is a half-and-half patchwork, so there is <strong>one band</strong> at an intermediate density. (Meselson and Stahl did this test, and got two bands.)</p>
<p><strong>e.</strong> Everything is reversed. Generation 1: one <strong>hybrid</strong> band. Generation 2: <strong>50% hybrid + 50% heavy</strong>. The logic is the same: two original (light) strands survive in two hybrid molecules, and every other molecule is built entirely from the new isotope.</p>`,
    marks: 8
  },

  /* ---------- 3.02 DNA Structure ---------- */
  {
    id: "xg04",
    lesson: "3.02",
    level: "apply",
    tier: "essential",
    title: "Chargaff's rules with numbers",
    prompt: `<ol>
<li>A molecule of DNA contains 20% thymine. Calculate the percentage of adenine, guanine and cytosine.</li>
<li>A double-stranded DNA fragment is 2,000 base pairs long and 30% of its bases are adenine. How many nucleotides of each base does it contain? How many hydrogen bonds hold its two strands together?</li>
<li>The genome of a virus has this composition: A 24%, T 31%, G 18%, C 27%. What can you conclude about its genetic material? Explain.</li>
<li>DNA from species X is 35% guanine; DNA from species Y is 20% guanine. Whose DNA would need the higher temperature to separate into single strands? Explain using structure.</li>
<li>Before Chargaff, many chemists believed DNA was a dull, repeating unit with the four bases in equal amounts (25% each). Explain how Chargaff's data argued against this, and why this mattered in the protein-versus-DNA debate.</li>
</ol>`,
    hints: [
      "A = T and G = C, and all four must add to 100%.",
      "2,000 base pairs means 4,000 nucleotides. Count A–T pairs and G–C pairs separately; they have different numbers of hydrogen bonds.",
      "Chargaff's rules come from base pairing. When would they not apply?"
    ],
    answer: `<p><strong>a.</strong> A = T = <strong>20%</strong>. A + T = 40%, so G + C = 60%, and G = C = <strong>30%</strong> each.</p>
<p><strong>b.</strong> 2,000 bp = 4,000 nucleotides. A = 30% of 4,000 = <strong>1,200</strong>, so T = <strong>1,200</strong>. G + C = 4,000 − 2,400 = 1,600, so G = C = <strong>800</strong>. There are 1,200 A–T pairs and 800 G–C pairs. Hydrogen bonds = (1,200 × 2) + (800 × 3) = 2,400 + 2,400 = <strong>4,800</strong>.</p>
<p><strong>c.</strong> It contains thymine, so it is <strong>DNA</strong> (not RNA), but A ≠ T and G ≠ C, so the bases are <strong>not paired</strong>: the genome must be <strong>single-stranded DNA</strong>. Chargaff's rules only hold for double-stranded DNA, because they are a result of complementary base pairing. (Some real viruses, such as the phage φX174, have single-stranded DNA genomes.)</p>
<p><strong>d.</strong> <strong>Species X.</strong> X is 35% G, so 70% G–C pairs; Y is 20% G, so only 40% G–C pairs. Each G–C pair is held by <strong>three</strong> hydrogen bonds, compared with <strong>two</strong> for A–T, and G–C pairs also stack more strongly. More energy (a higher temperature) is needed to break X's strands apart.</p>
<p><strong>e.</strong> Chargaff found that base composition <strong>varies between species</strong> (A + T does not equal G + C, and the ratio differs from one species to another), while A = T and G = C always. If DNA were a boring repeat of four bases in equal amounts, it could not carry different information in different species, which was a main reason it was dismissed in favour of protein. Variable base ratios meant the <strong>sequence</strong> could vary, so DNA could carry genetic information. The A = T and G = C pairing rule was also a key clue for Watson and Crick's model.</p>`,
    marks: 8
  },
  {
    id: "xg05",
    lesson: "3.02",
    level: "apply",
    tier: "essential",
    title: "Writing strands and measuring the helix",
    prompt: `<ol>
<li>Write the complementary strand of 5′-ATGCCTTA-3′ (review question 4) and of 5′-GATTACACCG-3′. Show directionality, then write each answer again in the 5′ → 3′ direction.</li>
<li>For the strand 5′-GATTACACCG-3′, state what chemical group is found at each end.</li>
<li>A gene is 1,500 base pairs long. Using the class figures, how long is it in nanometres, and how many turns of the helix does it contain?</li>
<li>A human body cell has about 6.4 × 10<sup>9</sup> base pairs of DNA. Calculate its total length in metres. Suggest how this fits into a nucleus about 6 μm across.</li>
<li>Explain why the helix stays 2 nm wide all along its length. What would happen to the width if A could pair with G?</li>
</ol>`,
    hints: [
      "Pair each base (A–T, G–C), then label the new strand's ends opposite to the given strand's ends.",
      "Use 0.34 nm per base pair and 10 base pairs per turn. 1 nm = 10<sup>−9</sup> m.",
      "Count the rings: purines have two, pyrimidines one."
    ],
    answer: `<p><strong>a.</strong></p>
<div class="eq"><span class="seq">5′-ATGCCTTA-3′</span><br><span class="seq">3′-TACGGAAT-5′</span> = <span class="seq">5′-TAAGGCAT-3′</span></div>
<div class="eq"><span class="seq">5′-GATTACACCG-3′</span><br><span class="seq">3′-CTAATGTGGC-5′</span> = <span class="seq">5′-CGGTGTAATC-3′</span></div>
<p>The complementary strand is antiparallel, so its 3′ end lies opposite the given strand's 5′ end. Rewriting it 5′ → 3′ means reading it backwards; a common mistake is to write the complement 5′ → 3′ without reversing it.</p>
<p><strong>b.</strong> The <strong>5′ end</strong> (at G) terminates in a <strong>phosphate group</strong> on the 5′ carbon. The <strong>3′ end</strong> (at the last G) terminates in the <strong>sugar</strong>, with a free <strong>–OH</strong> on its 3′ carbon.</p>
<p><strong>c.</strong> Length = 1,500 × 0.34 nm = <strong>510 nm</strong>. Turns = 1,500 ÷ 10 = <strong>150 turns</strong> (check: 150 × 3.4 nm = 510 nm).</p>
<p><strong>d.</strong> 6.4 × 10<sup>9</sup> × 0.34 nm = 2.18 × 10<sup>9</sup> nm = 2.18 × 10<sup>9</sup> × 10<sup>−9</sup> m ≈ <strong>2.2 m</strong> of DNA in one cell. It fits because it is <strong>packed</strong>: the negatively charged DNA wraps around positively charged <strong>histone</strong> proteins to form <strong>nucleosomes</strong>, which coil and fold into <strong>chromatin</strong>; at mitosis the chromatin condenses even further into compact chromosomes.</p>
<p><strong>e.</strong> Every base pair contains one <strong>purine</strong> (two rings) and one <strong>pyrimidine</strong> (one ring), so every rung is three rings wide, and the backbones stay the same distance apart: <strong>2 nm</strong>. An A–G pair would be four rings wide and would bulge the helix outward; a C–T pair would be only two rings wide and would pinch it in. The regular helix Franklin's X-ray photos showed requires purine–pyrimidine pairs.</p>`,
    marks: 8
  },
  {
    id: "xg06",
    lesson: "3.02",
    level: "extend",
    tier: "likely",
    title: "Counting down: telomeres, the Hayflick limit and cancer",
    prompt: `<p>A human skin cell in culture starts with telomeres about 10,000 bp long. It loses about 100 bp from each telomere every time it divides, and it stops dividing when its telomeres reach about 5,000 bp.</p>
<ol>
<li>About how many TTAGGG repeats are in a 10,000 bp telomere?</li>
<li>How many times can this cell divide before it stops? Compare your answer with the Hayflick limit.</li>
<li>Explain why the telomere gets shorter at each replication. Your answer should refer to the lagging strand and RNA primers.</li>
<li>Telomeres contain no genes. Explain why this makes them a good "buffer" at the ends of chromosomes, and what the protective cap of proteins adds.</li>
<li>About 85–90% of human cancers have switched telomerase back on. Explain why this helps a tumour, and suggest one reason a drug that blocks telomerase might take weeks to affect a tumour and one possible side effect.</li>
</ol>`,
    hints: [
      "One repeat is 6 base pairs.",
      "DNA polymerase I replaces a primer by building from the 3′-OH of the fragment before it. What is in front of the very last primer?",
      "Which normal cells in the body need to divide many times?"
    ],
    answer: `<p><strong>a.</strong> 10,000 ÷ 6 ≈ <strong>1,670 repeats</strong> of 5′-TTAGGG-3′.</p>
<p><strong>b.</strong> It can lose 10,000 − 5,000 = 5,000 bp. At 100 bp per division: 5,000 ÷ 100 = <strong>50 divisions</strong>. This matches the <span class="term">Hayflick limit</span>: normal human cells divide about 40–60 times in culture, then enter <strong>senescence</strong> (alive but no longer dividing) or undergo <strong>apoptosis</strong>.</p>
<p><strong>c.</strong> DNA polymerases can only add nucleotides to a free 3′-OH, so every new strand starts with an RNA primer. On the lagging strand, the last primer sits at the very end of the chromosome. When DNA polymerase I removes it, there is <strong>no DNA in front of it with a 3′-OH</strong> to build from, so the gap cannot be filled. Each new chromosome therefore ends up slightly shorter than its parent (the <span class="term">end-replication problem</span>); cells also trim the ends a little during processing.</p>
<p><strong>d.</strong> Because telomeres contain only repeats, losing some at each division costs the cell <strong>no genes</strong>; the repeats are used up like the plastic tip on a shoelace instead of the coding DNA near the ends. The <strong>protein cap</strong> (shelterin, with the T-loop) hides the chromosome end so the cell does not mistake it for a broken DNA strand and try to repair it or join it to another chromosome.</p>
<p><strong>e.</strong> <strong>Telomerase</strong> uses its own RNA template to add TTAGGG repeats back on to the 3′ end, so telomeres stop shrinking. Tumour cells can then divide without limit (they become "immortal"), escaping the Hayflick limit that would normally stop them. A telomerase-blocking drug only works once the telomeres have <strong>shortened over many divisions</strong>, so it takes weeks before cells hit the limit. Side effects could fall on normal cells that rely on telomerase: <strong>stem cells</strong> (for example in bone marrow, skin and gut lining) and <strong>germ cells</strong> (sperm and eggs).</p>`,
    marks: 8
  },

  /* ---------- 3.03 DNA Replication ---------- */
  {
    id: "xg07",
    lesson: "3.03",
    level: "apply",
    tier: "essential",
    title: "Reading a replication bubble",
    prompt: `<p>A replication bubble has opened at an origin on a horizontal piece of DNA. The top parental strand runs 5′ (left) → 3′ (right); the bottom parental strand runs 3′ (left) → 5′ (right). Both forks move outward, away from the origin.</p>
<ol>
<li>At the <strong>right-hand fork</strong>, which parental strand is the template for the leading strand, and which for the lagging strand? In which direction (left or right) does each new strand grow?</li>
<li>Answer the same question for the <strong>left-hand fork</strong>.</li>
<li>Explain why each parental strand serves as the template for a leading strand at one fork and a lagging strand at the other.</li>
<li>At one point the template of an Okazaki fragment reads 3′-ACGTTAGCCA-5′. Primase makes a 6-nucleotide primer on the first six bases. Write the primer sequence with its ends labelled, and state which enzyme extends it and from which end.</li>
<li>Each finished Okazaki fragment in this bubble is joined to its neighbour. List, in order, the two enzymes that act at the junction and what each does.</li>
</ol>`,
    hints: [
      "New strands grow 5′ → 3′, so they must be antiparallel to their template. A new strand on the top (5′ → 3′ left to right) template must grow right to left.",
      "The leading strand grows in the same direction the fork moves.",
      "RNA uses U, not T, and its ends are labelled like DNA's."
    ],
    answer: `<p><strong>a.</strong> Right-hand fork (moving right). A new strand on the <strong>top</strong> template must run 3′ → 5′ left to right, so it grows <strong>leftward</strong>, away from this fork: it is the <strong>lagging</strong> strand (Okazaki fragments). A new strand on the <strong>bottom</strong> template runs 5′ → 3′ left to right, so it grows <strong>rightward</strong>, following the fork: it is the <strong>leading</strong> strand.</p>
<p><strong>b.</strong> Left-hand fork (moving left). The new strand on the <strong>top</strong> template still grows leftward, now <em>toward</em> this fork: it is the <strong>leading</strong> strand. The new strand on the <strong>bottom</strong> template grows rightward, away from this fork: it is the <strong>lagging</strong> strand.</p>
<p><strong>c.</strong> The two forks move in opposite directions, but each new strand can only grow 5′ → 3′, which is a fixed direction along its template. On the top template, synthesis always goes leftward: that follows the left fork (leading) but runs away from the right fork (lagging). The same is true, mirrored, for the bottom template. So within one bubble each template strand is copied continuously on one side of the origin and discontinuously on the other.</p>
<p><strong>d.</strong> The template's first six bases are 3′-ACGTTA. The primer is complementary and antiparallel, made of RNA (U instead of T): <span class="seq">5′-UGCAAU-3′</span>. <strong>DNA polymerase III</strong> extends it by adding DNA nucleotides to its free <strong>3′-OH end</strong>, continuing to copy the template (next bases G, C, C, A give 5′-UGCAAU<strong>CGGT</strong>…-3′, where the bold part is DNA).</p>
<p><strong>e.</strong> (1) <strong>DNA polymerase I</strong> removes the RNA primer at the start of the next fragment (acting as an exonuclease) and replaces it with DNA, building from the 3′-OH of the fragment behind it. (2) <strong>DNA ligase</strong> then seals the remaining nick by forming the last <strong>phosphodiester bond</strong> between the two DNA pieces.</p>`,
    marks: 8
  },
  {
    id: "xg08",
    lesson: "3.03",
    level: "apply",
    tier: "likely",
    title: "Broken enzymes: predicting what goes wrong at the fork",
    prompt: `<p>Researchers study temperature-sensitive mutant <em>E. coli</em>. Each strain has one replication protein that works normally at 30 °C but stops working at 42 °C. Predict what happens to DNA replication when each strain is shifted to 42 °C, and what unusual DNA (if any) would build up in the cell.</p>
<ol>
<li>DNA ligase does not work.</li>
<li>DNA polymerase I does not work.</li>
<li>Primase does not work.</li>
<li>Helicase does not work.</li>
<li>Single-stranded binding proteins do not work.</li>
<li>Topoisomerase (gyrase) does not work. (Antibiotics such as ciprofloxacin block bacterial gyrase. Suggest why they kill bacteria.)</li>
<li>A different strain has a DNA polymerase III that builds normally but has lost its 3′ → 5′ exonuclease activity. What would you observe over many generations?</li>
</ol>`,
    hints: [
      "Picture the order of events at the fork. Which steps come after the broken one, and which can still go ahead?",
      "Okazaki fragments were first detected because some newly made DNA had not yet been joined into long strands. Which enzyme does the joining?",
      "Exonuclease activity is what lets a polymerase proofread."
    ],
    answer: `<p><strong>a. Ligase.</strong> Replication of both strands continues and primers are replaced, but the <strong>nicks</strong> between lagging-strand pieces are never sealed. Short <strong>Okazaki fragments accumulate</strong>. (Ligase mutants were used to confirm that the lagging strand really is made in pieces.)</p>
<p><strong>b. DNA pol I.</strong> RNA primers are <strong>not removed or replaced</strong>. Lagging-strand fragments keep RNA primers at their 5′ ends, and ligase cannot join them because there is still RNA (and gaps) at each junction. Unjoined fragments with RNA attached build up.</p>
<p><strong>c. Primase.</strong> No new primers can be made. No new strands can start, so no new rounds of replication begin and the <strong>lagging strand stops</strong> at forks already running (each fragment needs a new primer). A leading strand already under way could continue for a while, since it needs only one primer, but replication soon stalls.</p>
<p><strong>d. Helicase.</strong> The double helix cannot be unwound, so the template is never exposed: replication <strong>stops immediately</strong> at every fork. No new DNA is made.</p>
<p><strong>e. SSBs.</strong> Separated strands are left unprotected, so they <strong>re-form hydrogen bonds</strong> with each other or fold back into hairpins, and they are more easily broken by nucleases. Polymerase has no clean single-stranded template, so replication slows and stalls.</p>
<p><strong>f. Topoisomerase.</strong> Twisting tension (<strong>supercoiling</strong>) builds up ahead of each fork as helicase unwinds, until the DNA is wound so tightly that the forks <strong>stall</strong>. In a circular bacterial chromosome, the two finished daughter circles also stay tangled together and cannot be separated. Ciprofloxacin traps gyrase while it has the DNA cut, leaving permanent double-strand breaks, so bacterial DNA cannot be copied or used and the cells die. Human topoisomerases are different enough that the drug barely affects them.</p>
<p><strong>g.</strong> The polymerase can no longer <strong>proofread</strong>: it cannot back up and remove a wrongly paired nucleotide. Many more errors survive, so the strain becomes a <strong>"mutator"</strong> with a mutation rate hundreds of times higher than normal. (Mismatch repair still fixes some of them.)</p>`,
    marks: 8
  },
  {
    id: "xg09",
    lesson: "3.03",
    level: "extend",
    tier: "likely",
    title: "How fast, how accurate? Replication by the numbers",
    prompt: `<p>Use these approximate values: <em>E. coli</em> chromosome 4.6 × 10<sup>6</sup> bp, circular, one origin, forks move at 1,000 nucleotides per second. Human chromosome 1 is about 2.5 × 10<sup>8</sup> bp, linear, and human forks move at about 50 nucleotides per second. A human cell has 6.4 × 10<sup>9</sup> bp in total.</p>
<ol>
<li>How long does it take to copy the <em>E. coli</em> chromosome? (Remember replication is bidirectional.)</li>
<li>If human chromosome 1 had only one origin in its middle, how long would replication take, in days?</li>
<li>Chromosome 1 actually has an origin roughly every 100,000 bp. If all of them fired at once, how long would replication take? Why does S phase still take about 8 hours?</li>
<li>Before proofreading, DNA polymerase makes about 1 error per 10<sup>4</sup> nucleotides. After proofreading and mismatch repair, the rate is about 1 per 10<sup>9</sup>. How many errors would remain in one copy of the human genome at each rate?</li>
<li>Use your answers to explain the class key's reasoning for multiple origins, and why proofreading matters for an organism with trillions of cells.</li>
</ol>`,
    hints: [
      "Two forks share the work, so each fork copies half the chromosome.",
      "Distance between origins ÷ 2 = how far each fork travels.",
      "Errors = number of base pairs × error rate."
    ],
    answer: `<p><strong>a.</strong> Each of the two forks copies 2.3 × 10<sup>6</sup> bp. Time = 2.3 × 10<sup>6</sup> ÷ 1,000 = 2,300 s ≈ <strong>38 minutes</strong>. (Fast-growing <em>E. coli</em> can still divide every 20 minutes by starting a new round at the origin before the last one has finished.)</p>
<p><strong>b.</strong> Each fork copies 1.25 × 10<sup>8</sup> bp. Time = 1.25 × 10<sup>8</sup> ÷ 50 = 2.5 × 10<sup>6</sup> s. 2.5 × 10<sup>6</sup> ÷ 86,400 ≈ <strong>29 days</strong>, matching the class key's "weeks or even months".</p>
<p><strong>c.</strong> With origins 100,000 bp apart, each fork only needs to travel 50,000 bp before it meets the fork from the neighbouring bubble. Time = 50,000 ÷ 50 = 1,000 s ≈ <strong>17 minutes</strong>. S phase lasts hours because origins do <strong>not all fire at once</strong>: some regions (especially tightly packed chromatin) are copied late, and each origin is licensed to fire only once per cycle so that no DNA is copied twice.</p>
<p><strong>d.</strong> At 1 in 10<sup>4</sup>: 6.4 × 10<sup>9</sup> ÷ 10<sup>4</sup> = <strong>640,000 errors</strong> per replication. At 1 in 10<sup>9</sup>: 6.4 × 10<sup>9</sup> ÷ 10<sup>9</sup> ≈ <strong>6 errors</strong>.</p>
<p><strong>e.</strong> Eukaryotic genomes are huge and linear, and their forks are slow, so a single origin would take weeks; thousands of bubbles opening along each chromosome and merging copy the whole genome in hours. Accuracy matters because errors are copied into every descendant cell: 640,000 new mutations per division, repeated over the many divisions that build a body of trillions of cells, would wreck many genes and greatly raise cancer risk. Proofreading by DNA polymerases I and III (as exonucleases) plus mismatch repair keeps the number of new mutations per division to a handful.</p>`,
    marks: 8
  },

  /* ---------- 3.04 Transcription ---------- */
  {
    id: "xg10",
    lesson: "3.04",
    level: "apply",
    tier: "essential",
    title: "Find the template strand, then transcribe and translate",
    prompt: `<p>Here is a short double-stranded piece of DNA (spaces every 10 bases). The TATA box of the promoter is bases 3–8 of the top strand (5′-TATAAA-3′), and transcription starts at base 30 of the top strand (the last base of the third block).</p>
<div class="eq"><span class="seq">5′-GCTATAAAAG GCGCTCAGTC CAGAGCGCCA CATCAGCATG GCTTTCAAGG GATAGCCG-3′</span><br><span class="seq">3′-CGATATTTTC CGCGAGTCAG GTCTCGCGGT GTAGTCGTAC CGAAAGTTCC CTATCGGC-5′</span></div>
<ol>
<li>Which strand is the template strand? Explain using the position of the promoter and the direction RNA polymerase reads.</li>
<li>Write the mRNA made from the start site to the end of the segment, labelling its ends.</li>
<li>Mark the 5′ UTR, the start codon and the stop codon, and give the amino acid sequence.</li>
<li>Name the other DNA strand in three ways, and describe how its sequence compares with the mRNA.</li>
<li>If this gene were in a human cell, list what must happen to the RNA before it can leave the nucleus and be translated.</li>
</ol>`,
    hints: [
      "The promoter is upstream. RNA polymerase moves downstream from it, reading its template 3′ → 5′.",
      "The template has its 3′ end at the promoter side. Its complement, with U for T, is the mRNA.",
      "Translation starts at the first AUG from the 5′ end, not at the first base."
    ],
    answer: `<p><strong>a.</strong> The <strong>bottom strand</strong>. The promoter is on the left, so RNA polymerase moves to the right (downstream). It must read its template <strong>3′ → 5′</strong>, and only the bottom strand runs 3′ → 5′ from left to right. (Conventionally the TATA box is written on the coding strand as 5′-TATAAA-3′, which also tells you the top strand is the coding strand.)</p>
<p><strong>b.</strong> Copying the bottom strand from base 30 onward (complementary, U for T) gives:</p>
<div class="eq"><span class="seq">5′-ACAUCAGC AUG GCU UUC AAG GGA UAG CCG-3′</span></div>
<p>The mRNA is built <strong>5′ → 3′</strong> and is antiparallel to the template.</p>
<p><strong>c.</strong> 5′ UTR = <span class="seq">ACAUCAGC</span> (not translated). Start codon = <strong>AUG</strong>. Stop codon = <strong>UAG</strong>. Polypeptide: <strong>Met–Ala–Phe–Lys–Gly</strong> (UAG codes for no amino acid; translation stops). CCG after the stop is part of the 3′ UTR.</p>
<p><strong>d.</strong> The top strand is the <strong>coding strand</strong>, also called the <strong>sense</strong> or <strong>non-template</strong> strand. It is not used by RNA polymerase, but it has the <strong>same sequence as the mRNA</strong> (from the start site on), except that it has T where the mRNA has U. Compare base 30 onward: ACATCAGCATGG… and ACAUCAGCAUGG….</p>
<p><strong>e.</strong> The primary transcript is <strong>pre-mRNA</strong>. It must get a <strong>5′ cap</strong> (7-methylguanosine: protects from degradation, recognized by the small ribosomal subunit), a <strong>poly-A tail</strong> of about 200 A at the 3′ end (after cutting near the AAUAAA signal; protects from degradation), and any <strong>introns</strong> must be removed and the exons joined by <strong>spliceosomes</strong>. The mature mRNA then leaves through a nuclear pore.</p>`,
    marks: 8
  },
  {
    id: "xg11",
    lesson: "3.04",
    level: "apply",
    tier: "likely",
    title: "From pre-mRNA to mature mRNA: the numbers",
    prompt: `<p>A human gene is transcribed from its start site to its end into a pre-mRNA with this structure:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Exon 1</th><th>Intron 1</th><th>Exon 2</th><th>Intron 2</th><th>Exon 3</th></tr></thead>
<tbody><tr><td>150 nt</td><td>520 nt</td><td>213 nt</td><td>1,037 nt</td><td>300 nt</td></tr></tbody></table></div>
<p>The start codon begins at nucleotide 46 of exon 1. The stop codon ends at nucleotide 129 of exon 3.</p>
<ol>
<li>How long is the pre-mRNA (ignore the cap and tail)? What percentage of it is removed by splicing?</li>
<li>How long is the mature mRNA without the cap and tail, and roughly how long with its poly-A tail?</li>
<li>How many amino acids are in the polypeptide?</li>
<li>In another tissue, exon 2 is skipped by alternative splicing. How many amino acids does that protein have, and why is the rest of its sequence unchanged? What would be different if exon 2 were 212 nt long?</li>
<li>A company puts this gene, copied straight from human chromosomal DNA, into bacteria, but the bacteria do not make the right protein. Explain why, and how using DNA made by reverse transcriptase from the mature mRNA (cDNA) solves the problem.</li>
</ol>`,
    hints: [
      "Coding nucleotides = the part of exon 1 from nucleotide 46 on + all of exon 2 + the first 129 nucleotides of exon 3.",
      "The stop codon is three nucleotides that code for no amino acid.",
      "Skipping an exon whose length is a multiple of 3 removes whole codons."
    ],
    answer: `<p><strong>a.</strong> 150 + 520 + 213 + 1,037 + 300 = <strong>2,220 nt</strong>. Introns = 520 + 1,037 = 1,557 nt, so 1,557 ÷ 2,220 × 100 ≈ <strong>70%</strong> is removed. (Most human pre-mRNA is intron.)</p>
<p><strong>b.</strong> Exons only: 150 + 213 + 300 = <strong>663 nt</strong>. With about 200 A in the poly-A tail, about <strong>860 nt</strong>, plus the 5′ cap.</p>
<p><strong>c.</strong> Coding region = (150 − 45) + 213 + 129 = 105 + 213 + 129 = <strong>447 nt</strong> = 149 codons. The last codon is the stop, so the polypeptide has <strong>148 amino acids</strong>. The first 45 nt are the 5′ UTR and the last 171 nt of exon 3 are the 3′ UTR.</p>
<p><strong>d.</strong> Without exon 2, the coding region is 105 + 129 = 234 nt = 78 codons, so the protein has <strong>77 amino acids</strong> (148 − 71). Exon 2 is 213 nt = exactly 71 codons, so removing it removes whole codons and the <strong>reading frame is kept</strong>: exon 3 is still read in the right frame, giving a shorter protein that lacks one section (often one structural domain). If exon 2 were 212 nt, skipping it would <strong>shift the reading frame</strong> for everything in exon 3, like a frameshift mutation, and probably bring an early stop codon. This is how one gene can make several proteins (about 20,000 human genes make many more kinds of protein).</p>
<p><strong>e.</strong> Bacteria have <strong>no spliceosomes</strong> and their genes have no introns, so they would transcribe and translate the introns as if they were coding sequence. The protein would contain wrong amino acids and almost certainly hit an early stop codon. <span class="term">cDNA</span> is made by <strong>reverse transcriptase</strong> using the mature mRNA as a template, so it contains <strong>only the exons</strong> already joined correctly; the bacteria can transcribe and translate it directly. (This is how human insulin is made in bacteria; it works because the genetic code is universal.)</p>`,
    marks: 8
  },
  {
    id: "xg12",
    lesson: "3.04",
    level: "extend",
    tier: "extra",
    title: "Poisoned polymerases and loops of DNA",
    prompt: `<p><strong>Part A.</strong> The death cap mushroom (<em>Amanita phalloides</em>) contains α-amanitin, which binds tightly to eukaryotic RNA polymerase II and stops it moving along the DNA. RNA polymerase I (which makes most rRNA) is not affected. Liver cells absorb the toxin efficiently.</p>
<ol>
<li>Which kind of RNA stops being made? Predict what happens to protein synthesis in a poisoned liver cell, and explain why symptoms of liver failure appear only after 2–4 days.</li>
<li>The antibiotic rifampicin, used against tuberculosis, blocks bacterial RNA polymerase. Suggest why it does not stop transcription in human cells.</li>
</ol>
<p><strong>Part B.</strong> In 1977 researchers mixed a mature mRNA with single strands of the DNA of its own gene. The mRNA base-paired with its complementary template strand, and they photographed the result with an electron microscope. Paired regions looked like double strands, but several single-stranded loops of DNA stuck out.</p>
<ol start="3">
<li>What are the loops? If four loops are seen, how many exons and introns does the gene have?</li>
<li>Predict what would be seen if the pre-mRNA from the same gene were used instead of the mature mRNA. Explain.</li>
<li>Why was this result so surprising at the time? (Think about what bacterial genes look like.)</li>
</ol>`,
    hints: [
      "Which RNA polymerase makes pre-mRNA? Existing mRNAs and proteins do not disappear instantly.",
      "Compare the enzymes: an antibiotic works by binding a shape that only the bacterial enzyme has.",
      "The mRNA has no sequence to pair with the parts of the gene that were spliced out."
    ],
    answer: `<p><strong>1.</strong> RNA polymerase II makes <strong>pre-mRNA</strong>, so no new mRNA is made. Ribosomes keep translating the mRNA already in the cytoplasm, and existing proteins keep working, so the cell carries on for a while. As old mRNAs are broken down (most last hours) and old proteins wear out, they cannot be replaced, so protein synthesis gradually stops and the liver cells die. That delay is why liver damage appears days after the meal, often after the patient seems to have recovered from the first stomach symptoms. rRNA and tRNA are still made (by RNA pol I and III), but without mRNA they are useless.</p>
<p><strong>2.</strong> Bacterial RNA polymerase has a <strong>different structure</strong> from the eukaryotic RNA polymerases. Rifampicin fits a binding pocket that exists only on the bacterial enzyme, so human transcription is unaffected. It is the same logic as antibiotics that target the 70S bacterial ribosome (translation key Q14).</p>
<p><strong>3.</strong> The loops are <strong>introns</strong>. The mature mRNA has had its introns spliced out, so the intron sequences in the DNA have nothing to pair with and bulge out as single-stranded loops, while the exons pair with the mRNA. Four loops = <strong>4 introns</strong>, which must lie between <strong>5 exons</strong>.</p>
<p><strong>4.</strong> <strong>No loops</strong> (one long paired region). The pre-mRNA still contains the introns, so it is complementary to the template strand along its whole length.</p>
<p><strong>5.</strong> Bacterial genes are continuous: the mRNA matches the gene base for base, and ribosomes can translate it while it is being made. Most biologists assumed all genes worked this way. The loops showed that eukaryotic genes are <strong>"split"</strong> into exons and introns and that the RNA is cut and rejoined (<strong>splicing</strong>) before it is used. This discovery (in adenovirus, by Phillip Sharp's and Richard Roberts's groups) won the 1993 Nobel Prize.</p>`,
    marks: 8
  },

  /* ---------- 3.05 Translation ---------- */
  {
    id: "xg13",
    lesson: "3.05",
    level: "apply",
    tier: "essential",
    title: "Template to polypeptide, with the tRNAs",
    prompt: `<p>The template strand of part of a gene reads:</p>
<div class="eq"><span class="seq">3′-GCGTACAAACGGTCTTGAGTAATTGC-5′</span></div>
<ol>
<li>Write the mRNA, labelling its ends.</li>
<li>Find the start codon and translate the mRNA into a polypeptide.</li>
<li>Give the anticodon (written 3′ → 5′) of each tRNA used, in order.</li>
<li>What happens when the ribosome reaches the last codon you translated?</li>
<li>How many peptide bonds are formed, and how many aminoacyl-tRNAs enter the A site?</li>
<li>A student translated the mRNA starting from its very first base and got "Arg–Met–Phe–Ala–Arg–Thr–His". Explain the mistake, and explain why starting one base later would be an even bigger problem.</li>
</ol>`,
    hints: [
      "Pair each template base (A→U, T→A, G→C, C→G) and keep the order; the mRNA's 5′ end lines up with the template's 3′ end.",
      "Look for AUG from the 5′ end. In the template it appears as TAC.",
      "The anticodon is complementary and antiparallel to the codon."
    ],
    answer: `<p><strong>a.</strong> <span class="seq">5′-CGCAUGUUUGCCAGAACUCAUUAACG-3′</span></p>
<p><strong>b.</strong> The first AUG starts at base 4: <span class="seq">CGC | AUG UUU GCC AGA ACU CAU UAA | CG</span></p>
<p>Polypeptide: <strong>Met–Phe–Ala–Arg–Thr–His</strong>, then UAA = stop.</p>
<p><strong>c.</strong></p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Codon (5′ → 3′)</th><th>AUG</th><th>UUU</th><th>GCC</th><th>AGA</th><th>ACU</th><th>CAU</th><th>UAA</th></tr></thead>
<tbody><tr><td>Anticodon (3′ → 5′)</td><td>UAC</td><td>AAA</td><td>CGG</td><td>UCU</td><td>UGA</td><td>GUA</td><td>none</td></tr>
<tr><td>Amino acid</td><td>Met</td><td>Phe</td><td>Ala</td><td>Arg</td><td>Thr</td><td>His</td><td>stop</td></tr></tbody></table></div>
<p>Notice the anticodon matches the template DNA triplet, but with U instead of T.</p>
<p><strong>d.</strong> UAA is a <strong>stop codon</strong>. No tRNA has a matching anticodon. A <strong>release factor</strong> protein recognizes and binds the stop codon in the A site and triggers hydrolysis of the bond holding the polypeptide to the tRNA in the P site. The polypeptide is released and the ribosome separates into its subunits. (The stop codon does not "code for" the release factor.)</p>
<p><strong>e.</strong> 6 amino acids → <strong>5 peptide bonds</strong>. The initiator Met-tRNA goes straight into the P site, so <strong>5 aminoacyl-tRNAs</strong> (Phe, Ala, Arg, Thr, His) enter the A site.</p>
<p><strong>f.</strong> Translation does not start at the first base: the small subunit binds at the 5′ cap and <strong>scans 5′ → 3′ to the first AUG</strong>, which sets the reading frame. CGC is part of the 5′ UTR, so "Arg" should not be there. Starting one base later (GCA UGU UUG CCA GAA CUC AUU AAC) reads a <strong>different reading frame</strong> and gives a completely different sequence (Ala–Cys–Leu–Pro–Glu–Leu–Ile–Asn), with no start codon and no stop in the right place. Keeping the frame set by AUG is what makes the protein correct.</p>`,
    marks: 8
  },
  {
    id: "xg14",
    lesson: "3.05",
    level: "apply",
    tier: "likely",
    title: "Counting the cost of one β-globin chain",
    prompt: `<p>A β-globin chain of hemoglobin has 146 amino acids. Its first amino acid is valine because the starting methionine is removed after translation.</p>
<ol>
<li>How many amino acids does the ribosome actually join? What is the minimum number of mRNA nucleotides in the coding region, including the stop codon?</li>
<li>How many peptide bonds does the ribosome form, and how many translocation steps occur?</li>
<li>Explain why the mature β-globin mRNA is several hundred nucleotides longer than your answer to part a.</li>
<li>Name the post-translational modification that removes the methionine, and give two other modifications from the slides with their purpose.</li>
<li>A developing red blood cell makes huge amounts of hemoglobin. Explain how polyribosomes help.</li>
<li>Explain how wobble lets a cell manage with fewer kinds of tRNA than the 61 codons that code for amino acids.</li>
<li><em>(Extra)</em> Charging each tRNA costs the equivalent of 2 ATP, and each elongation cycle uses 2 GTP. Estimate the energy cost of the chain in high-energy phosphate bonds.</li>
</ol>`,
    hints: [
      "Add back the methionine. Then each amino acid needs one codon, plus one stop codon.",
      "Each peptide bond is followed by one translocation.",
      "Think about everything in a mature mRNA that is not translated."
    ],
    answer: `<p><strong>a.</strong> 146 + 1 (Met) = <strong>147 amino acids</strong>. Coding region = 147 codons + 1 stop codon = 148 × 3 = <strong>444 nucleotides</strong>.</p>
<p><strong>b.</strong> Joining 147 amino acids needs <strong>146 peptide bonds</strong>. After each peptide bond the ribosome translocates one codon, so <strong>146 translocations</strong>; the last one brings the stop codon into the A site, where a release factor binds.</p>
<p><strong>c.</strong> The mature mRNA also has a <strong>5′ cap</strong>, a <strong>5′ UTR</strong> before the AUG (where the small subunit binds and scans), a <strong>3′ UTR</strong> after the stop codon, and a <strong>poly-A tail</strong> of about 200 A. None of these are translated, but they protect the mRNA and control its translation.</p>
<p><strong>d.</strong> <strong>Proteolytic cleavage</strong>: an enzyme removes the methionine (an enzymatic removal of a peptide segment). Others from the slides: <strong>phosphorylation</strong> (adds a phosphate to switch a protein on or off), <strong>glycosylation</strong> (adds carbohydrate chains to make a glycoprotein), <strong>carboxylation</strong> (adds a carboxyl group to specific amino acids), and <strong>folding by chaperone proteins</strong> into the active 3D shape.</p>
<p><strong>e.</strong> In a <span class="term">polyribosome</span>, many ribosomes translate the same mRNA at the same time, each one starting at the AUG soon after the one ahead has moved on. One mRNA therefore produces many globin chains at once, and the cell needs fewer mRNA molecules to make a lot of protein.</p>
<p><strong>f.</strong> The base at the 5′ end of the anticodon pairs with the <strong>third base</strong> of the codon, and this pairing is <strong>flexible</strong> (for example, a G in the anticodon can pair with C or U). So one tRNA can read several synonymous codons that differ only in their third base, such as CUC and CUU for leucine (the slide's example). Under the wobble rules as few as about 32 kinds of tRNA could read all 61 sense codons; real cells use roughly 40–50.</p>
<p><strong>g.</strong> About 4 high-energy bonds per amino acid: 147 × 2 (charging) + 146 × 2 (elongation GTP) ≈ <strong>590</strong>, plus a few more for initiation and termination. Making proteins is one of the most expensive things a cell does, which is one reason gene regulation saves so much energy.</p>`,
    marks: 8
  },
  {
    id: "xg15",
    lesson: "3.05",
    level: "extend",
    tier: "extra",
    title: "How antibiotics jam the bacterial ribosome",
    prompt: `<p>Each antibiotic below stops bacterial translation at a different point:</p>
<ul>
<li><strong>Tetracycline</strong> binds the small (30S) subunit and blocks aminoacyl-tRNAs from entering the A site.</li>
<li><strong>Streptomycin</strong> binds the small (30S) subunit and distorts it, so codons and anticodons are mismatched (and initiation is disrupted).</li>
<li><strong>Chloramphenicol</strong> binds the large (50S) subunit at the site where peptide bonds form.</li>
<li><strong>Erythromycin</strong> binds the large (50S) subunit in the tunnel the growing polypeptide passes through.</li>
</ul>
<ol>
<li>Using the translation key's answer to Q14, explain why these drugs harm bacteria but not the translation in our cytosol.</li>
<li>For each drug, name the step of elongation (codon recognition, peptide bond formation or translocation/exit of the chain) that is blocked, and describe what the stalled ribosome looks like.</li>
<li>Streptomycin does not stop translation completely. Explain why making many faulty proteins still kills the bacterium.</li>
<li>Chloramphenicol can damage human bone marrow, and some aminoglycosides (the family of streptomycin) can damage hearing. Mitochondria have their own ribosomes. Suggest an explanation for these side effects. (Hint: think about the endosymbiotic origin of mitochondria.)</li>
<li>Puromycin looks like the end of an aminoacyl-tRNA. It enters the A site and accepts the growing chain, which then falls off. Why is puromycin used in research labs but never as a medicine?</li>
</ol>`,
    hints: [
      "70S versus 80S: the shapes the drugs bind to exist only on one kind of ribosome.",
      "Peptide bonds form between the amino acids in the P and A sites, catalyzed by the large subunit.",
      "Mitochondria descend from bacteria. What kind of ribosome do bacteria have?"
    ],
    answer: `<p><strong>a.</strong> The key's answer: antibiotics target the <strong>prokaryotic (70S) ribosome</strong>, which has a different structure from the eukaryotic (80S) ribosome in our cytosol (different rRNAs and proteins in both subunits). Each drug fits a binding site that only the bacterial ribosome has, so our ribosomes keep working.</p>
<p><strong>b.</strong></p>
<ul>
<li><strong>Tetracycline</strong>: blocks <strong>codon recognition</strong>. The A site stays empty, so the ribosome sits with the peptidyl-tRNA in the P site and cannot add the next amino acid.</li>
<li><strong>Streptomycin</strong>: disrupts <strong>codon recognition</strong> (accuracy). Wrong aminoacyl-tRNAs are accepted, so the ribosome keeps going but builds faulty polypeptides (and some ribosomes fail to start).</li>
<li><strong>Chloramphenicol</strong>: blocks <strong>peptide bond formation</strong> (peptidyl transferase). An aminoacyl-tRNA can sit in the A site, but the chain in the P site cannot be transferred to it.</li>
<li><strong>Erythromycin</strong>: blocks the <strong>exit of the chain</strong>. After a few amino acids the short chain jams in the tunnel, the ribosome cannot keep translocating, and the short peptide often drops off.</li>
</ul>
<p><strong>c.</strong> Misread proteins contain wrong amino acids, so many misfold and do not work. Faulty membrane proteins are especially harmful: they make the bacterial membrane leaky, which lets even more streptomycin in, speeding up the damage. Many essential enzymes are affected at once, so the cell dies.</p>
<p><strong>d.</strong> Mitochondria evolved from bacteria engulfed by an ancestral cell, and they still have their own small, <strong>bacteria-like ribosomes</strong>. Some antibiotics that bind 70S ribosomes also bind mitochondrial ribosomes, reducing the production of mitochondrial proteins needed for the electron transport chain. Tissues that divide rapidly or use a lot of energy (bone marrow, the sensory hair cells of the inner ear) suffer first. (Some people carry a small mitochondrial rRNA mutation that makes their mitochondrial ribosomes even more like bacterial ones, which greatly raises their risk of hearing loss from aminoglycosides.)</p>
<p><strong>e.</strong> Puromycin mimics a feature that is the <strong>same in all ribosomes</strong>: every ribosome forms peptide bonds onto the amino acid end of whatever is in the A site. So it ends translation early in human cells just as well as in bacteria and would be highly toxic. In the lab, that general action is useful, for example to stop all protein synthesis or to select cells carrying a resistance gene.</p>`,
    marks: 8
  },

  /* ---------- 3.06 Mutations ---------- */
  {
    id: "xg16",
    lesson: "3.06",
    level: "apply",
    tier: "essential",
    title: "Classify seven mutations of the class gene",
    prompt: `<p>The class mutation explorer uses a short gene whose template strand (written 3′ → 5′) is <span class="seq">TAC CTC GTT ACT</span>. It is transcribed into <span class="seq">5′-AUG GAG CAA UGA-3′</span>, which codes for Met–Glu–Gln–stop.</p>
<p>For each mutated template strand below, write the mRNA and the amino acid sequence, then classify the mutation (silent, missense, nonsense, frameshift, in-frame deletion, or start codon lost).</p>
<ol>
<li><span class="seq">TAC CTT GTT ACT</span></li>
<li><span class="seq">TAC CAC GTT ACT</span></li>
<li><span class="seq">TAC CTC ATT ACT</span></li>
<li><span class="seq">TAC ACT CGT TAC T</span> (an extra A after the first triplet)</li>
<li><span class="seq">TAC CTC GTT ATT</span></li>
<li><span class="seq">TAC GTT ACT</span> (CTC deleted)</li>
<li><span class="seq">TAT CTC GTT ACT</span></li>
</ol>
<p>Then: (h) rank mutations 2, 3 and 4 from least to most harmful, with reasons, and (i) the explorer calls GAG and GAA "Glutamine (Glu)". Correct this.</p>`,
    hints: [
      "Transcribe each mutant in full, then re-read the codons from AUG in groups of three.",
      "Once a stop codon is read, translation ends. Nothing after it is translated.",
      "Glu and Gln are different amino acids. Look up CAA on the codon chart."
    ],
    answer: `<div class="table-wrap"><table class="data">
<thead><tr><th>#</th><th>mRNA (5′ → 3′)</th><th>Polypeptide</th><th>Type</th></tr></thead>
<tbody>
<tr><td>1</td><td>AUG GA<strong>A</strong> CAA UGA</td><td>Met–Glu–Gln</td><td><strong>Silent</strong>: GAA and GAG both code for Glu</td></tr>
<tr><td>2</td><td>AUG G<strong>U</strong>G CAA UGA</td><td>Met–<strong>Val</strong>–Gln</td><td><strong>Missense</strong>: Glu → Val</td></tr>
<tr><td>3</td><td>AUG GAG <strong>U</strong>AA</td><td>Met–Glu</td><td><strong>Nonsense</strong>: CAA → UAA, a premature stop</td></tr>
<tr><td>4</td><td>AUG <strong>U</strong>GA GCA AUG A…</td><td>Met only</td><td><strong>Frameshift</strong> (insertion): the shifted frame reads UGA = stop at once</td></tr>
<tr><td>5</td><td>AUG GAG CAA U<strong>A</strong>A</td><td>Met–Glu–Gln</td><td><strong>Silent</strong>: one stop codon (UGA) replaced by another (UAA)</td></tr>
<tr><td>6</td><td>AUG CAA UGA</td><td>Met–Gln</td><td><strong>In-frame deletion</strong>: one codon (one Glu) lost, frame kept</td></tr>
<tr><td>7</td><td>AU<strong>A</strong> GAG CAA UGA</td><td>none from here</td><td><strong>Start codon lost</strong>: AUA (Ile) is not a start signal, so this protein is not made from this start</td></tr>
</tbody></table></div>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The explorer shows the frameshift as "Met Stop Ala Met…". Once the ribosome reads UGA, a release factor ends translation, so the amino acids listed after "Stop" are never made. The product is just Met.</p></div>
<p><strong>h.</strong> Least to most harmful: <strong>2 (missense) &lt; 3 (nonsense) &lt; 4 (frameshift)</strong> in general. A missense change swaps only one amino acid; the protein is full length and may still partly work, depending on how similar the new amino acid is and where it is. A nonsense mutation cuts the protein short, usually destroying its function. A frameshift changes every codon after it and usually hits an early stop; when it is near the start (as here) almost nothing of the protein is made. In this tiny gene 3 and 4 are both severe, but in a real gene a frameshift near the start is the worst.</p>
<p><strong>i.</strong> GAG and GAA code for <strong>glutamic acid</strong> (glutamate, <strong>Glu</strong>), an acidic, negatively charged amino acid. <strong>Glutamine</strong> is <strong>Gln</strong>, coded by CAA and CAG (the third codon here). Mutation 2, GAG → GUG (Glu → Val), is exactly the change that causes <strong>sickle-cell anemia</strong> in the β-globin gene.</p>`,
    marks: 9
  },
  {
    id: "xg17",
    lesson: "3.06",
    level: "apply",
    tier: "likely",
    title: "Sickle-cell: one base, one amino acid, one disease",
    prompt: `<p>The coding strand of the start of the human β-globin gene is:</p>
<div class="eq"><span class="seq">5′-ATG GTG CAT CTG ACT CCT GAG GAG AAG-3′</span></div>
<ol>
<li>Write the template strand (3′ → 5′), the mRNA and the amino acid sequence.</li>
<li>In sickle-cell hemoglobin (HbS), nucleotide 20 of this coding strand is changed from A to T. Write the new codon and amino acid, and classify the mutation.</li>
<li>The sickle-cell mutation is usually called "Glu6Val", but the change is in the 7th codon. Explain the numbering.</li>
<li>Explain how replacing one glutamic acid with valine makes red blood cells sickle. Use the chemistry of the two R groups.</li>
<li>Hemoglobin C has GAG → AAG at the same codon. Classify it and suggest why it causes a much milder disease.</li>
<li>Which single base change in this same codon would be a silent mutation?</li>
</ol>`,
    hints: [
      "Number the coding strand bases 1, 2, 3… from the 5′ end. Codon 7 covers bases 19–21.",
      "Which post-translational modification removes a peptide segment from the N-terminus?",
      "Glu has a charged, hydrophilic R group; Val has a nonpolar, hydrophobic one."
    ],
    answer: `<p><strong>a.</strong></p>
<div class="eq">Template: <span class="seq">3′-TAC CAC GTA GAC TGA GGA CTC CTC TTC-5′</span><br>mRNA: <span class="seq">5′-AUG GUG CAU CUG ACU CCU GAG GAG AAG-3′</span><br>Met–Val–His–Leu–Thr–Pro–Glu–Glu–Lys</div>
<p><strong>b.</strong> Bases 19–21 form codon 7 (GAG); base 20 is its middle A. A → T on the coding strand makes the mRNA codon <strong>GUG</strong>, which codes for <strong>valine</strong>. One base substituted, one amino acid changed (Glu → Val): a <strong>missense mutation</strong>. (On the template strand, the matching T becomes A: CTC → CAC, exactly mutation 2 in the class explorer.)</p>
<p><strong>c.</strong> The starting <strong>methionine is removed</strong> after translation by proteolytic cleavage, so the mature β-globin chain begins with valine. Counting from that valine, the changed glutamic acid is amino acid <strong>6</strong>.</p>
<p><strong>d.</strong> Glutamic acid has a <strong>negatively charged, hydrophilic</strong> R group that sits on the outside of the hemoglobin molecule and interacts well with water. Valine's R group is <strong>nonpolar and hydrophobic</strong>. When hemoglobin S gives up its oxygen, the valine forms a sticky patch that fits into a hydrophobic pocket on a neighbouring hemoglobin. The molecules link into long, stiff <strong>fibres</strong> that bend the red blood cell into a sickle shape. Sickled cells are fragile (they break down, causing anemia) and block small blood vessels (causing pain and organ damage).</p>
<p><strong>e.</strong> GAG → AAG is <strong>missense</strong> (Glu → <strong>Lys</strong>). Lysine is also <strong>charged and hydrophilic</strong> (positively, instead of negatively), so it does not create a hydrophobic patch, and the hemoglobin does not polymerize into fibres the way HbS does. This is the point of the explorer's last quiz question: how harmful a missense mutation is depends on how chemically different the new amino acid is.</p>
<p><strong>f.</strong> <strong>GAG → GAA</strong> (A in the third position): both code for glutamic acid, so the protein is unchanged. Redundancy at the third position is why many such changes are silent.</p>`,
    marks: 8
  },
  {
    id: "xg18",
    lesson: "3.06",
    level: "extend",
    tier: "likely",
    title: "Fathers, mothers and two kinds of mistakes",
    prompt: `<p>The slides give two "where do mutations come from" facts: about 80% of new inherited point mutations originate in sperm, but most aneuploidy comes from eggs with faulty cohesin. Use the data to explain both.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Gamete</th><th>Approximate number of cell divisions (DNA replications) in its history</th></tr></thead>
<tbody>
<tr><td>Egg (any maternal age)</td><td>about 24, all completed before the mother was born</td></tr>
<tr><td>Sperm, father aged 20</td><td>about 150</td></tr>
<tr><td>Sperm, father aged 30</td><td>about 380</td></tr>
<tr><td>Sperm, father aged 40</td><td>about 610</td></tr>
</tbody></table></div>
<div class="table-wrap"><table class="data">
<thead><tr><th>Mother's age at birth</th><th>25</th><th>30</th><th>35</th><th>40</th><th>45</th></tr></thead>
<tbody><tr><td>Chance of trisomy 21</td><td>1 in 1,250</td><td>1 in 1,000</td><td>1 in 400</td><td>1 in 100</td><td>1 in 30</td></tr></tbody></table></div>
<ol>
<li>Why would the number of point mutations in a gamete depend on the number of DNA replications in its history?</li>
<li>Use the first table to explain the slide's "~80% from sperm" fact and to predict how the father's age affects the risk of a new point mutation in a child.</li>
<li>Oocytes start meiosis before birth and then pause in prophase I until ovulation, up to 45 or more years later. Their cohesin is not replaced during the pause. Use this to explain the second table.</li>
<li>Describe how nondisjunction of chromosome 21 in meiosis I leads to a child with 47 chromosomes.</li>
<li>Explain why point mutations come mostly from fathers but aneuploidy mostly from mothers.</li>
</ol>`,
    hints: [
      "Even with proofreading and mismatch repair, every replication leaves a few new errors.",
      "Sperm-making stem cells divide all through adult life. Egg precursors stop dividing before birth.",
      "Cohesin holds chromosomes together until the moment they are meant to separate."
    ],
    answer: `<p><strong>a.</strong> Most point mutations are <strong>replication errors</strong>: DNA polymerase mispairings that escape proofreading and mismatch repair. Each round of replication adds a few new ones, and once made they are copied into every descendant cell. So the more replications a cell line has gone through, the more point mutations it carries.</p>
<p><strong>b.</strong> An egg's DNA has been copied only about 24 times, while sperm from a 30-year-old has gone through about 380 rounds, roughly 16 times as many, because <strong>spermatogonial stem cells keep dividing throughout a man's life</strong> (about every 16 days). That is why most new point mutations come from the father. The number climbs with age (150 at 20, 610 at 40), so <strong>older fathers pass on more new point mutations</strong>; a child of a 40-year-old father inherits roughly twice as many new mutations as one of a 20-year-old. Conditions caused mainly by new mutations, such as achondroplasia, are more common with older fathers.</p>
<p><strong>c.</strong> Cohesin holds homologous chromosomes (through their crossovers) and sister chromatids together until meiosis separates them. In an oocyte this cohesin was loaded before birth and is <strong>never renewed</strong>, so it slowly <strong>deteriorates</strong> over the decades of the pause. The longer the wait, the more likely chromosomes come apart early or move to the wrong pole: <strong>nondisjunction</strong>. That is why the chance of trisomy 21 rises from about 1 in 1,250 at 25 to 1 in 30 at 45, and why the slide says most aneuploidy comes from eggs with faulty cohesin.</p>
<p><strong>d.</strong> In meiosis I, the two chromosome 21 homologues fail to separate and both go to the same pole. One cell ends up with two copies of chromosome 21 and the other with none. After meiosis II the egg has <strong>24 chromosomes</strong> (two 21s). Fertilization by a normal sperm (23 chromosomes, one 21) gives a zygote with <strong>47 chromosomes and three copies of chromosome 21</strong>, trisomy 21 (Down syndrome). Every cell of the child inherits it.</p>
<p><strong>e.</strong> They are <strong>different kinds of mistake</strong>. Point mutations are copying errors, so they track the <strong>number of replications</strong>, which is high and rising in the male germ line. Aneuploidy is a chromosome-separation error, so it tracks the <strong>condition of the separation machinery</strong>, which ages in long-paused oocytes. Sperm are made fresh from continuously dividing cells with new cohesin, so they rarely have this problem, while eggs have few divisions but very old cohesin.</p>`,
    marks: 9
  },

  /* ---------- 3.07 Gene Regulation: Operons ---------- */
  {
    id: "xg19",
    lesson: "3.07",
    level: "apply",
    tier: "essential",
    title: "Lac operon switches and broken parts",
    prompt: `<p>Assume no glucose is present. For each <em>E. coli</em> strain, predict whether β-galactosidase is made (yes or no) when lactose is <strong>absent</strong> and when it is <strong>present</strong>, and explain using the repressor, operator and RNA polymerase.</p>
<ol>
<li>Wild type.</li>
<li><em>lacI</em> mutant: no functional repressor is made.</li>
<li>Operator mutant: the operator sequence is changed so the repressor cannot bind it.</li>
<li>Repressor mutant: the repressor binds the operator normally but can no longer bind the inducer.</li>
<li><em>lacZ</em> mutant: the gene for β-galactosidase is destroyed.</li>
<li>Promoter mutant: RNA polymerase cannot bind.</li>
</ol>
<p>Then: (g) explain why it is an advantage for the cell to switch the operon off when there is no lactose, and (h) explain why the lac operon is called <em>inducible</em>.</p>`,
    hints: [
      "Ask two questions for each strain: can the repressor sit on the operator, and can RNA polymerase reach the genes?",
      "A mutation that makes the repressor deaf to lactose leaves it permanently attached.",
      "<em>lacZ</em> codes for β-galactosidase only; <em>lacY</em> and <em>lacA</em> are separate genes on the same mRNA."
    ],
    answer: `<div class="table-wrap"><table class="data">
<thead><tr><th>Strain</th><th>No lactose</th><th>Lactose</th><th>Why</th></tr></thead>
<tbody>
<tr><td>a. Wild type</td><td>No</td><td><strong>Yes</strong></td><td>The active repressor sits on the operator and blocks RNA polymerase. Lactose (as allolactose) binds the repressor, changes its shape, and it falls off.</td></tr>
<tr><td>b. <em>lacI</em> mutant</td><td><strong>Yes</strong></td><td><strong>Yes</strong></td><td>No repressor, so nothing blocks the operator: the operon is <strong>constitutive</strong> (always on), wasting energy without lactose.</td></tr>
<tr><td>c. Operator mutant</td><td><strong>Yes</strong></td><td><strong>Yes</strong></td><td>The repressor is normal but has nowhere to bind, so again always on.</td></tr>
<tr><td>d. Repressor can't bind inducer</td><td>No</td><td><strong>No</strong></td><td>Lactose cannot pull the repressor off, so it blocks the operator permanently: the operon can never be switched on, and the cell cannot use lactose.</td></tr>
<tr><td>e. <em>lacZ</em> mutant</td><td>No</td><td><strong>No</strong></td><td>Regulation works and the mRNA is made when lactose is present, but it carries a broken <em>lacZ</em>, so no working β-galactosidase. (Permease from <em>lacY</em> is still made.)</td></tr>
<tr><td>f. Promoter mutant</td><td>No</td><td><strong>No</strong></td><td>Even with the repressor gone, RNA polymerase cannot bind to start transcription.</td></tr>
</tbody></table></div>
<p><strong>g.</strong> Transcribing and translating three genes uses a lot of ATP and GTP, amino acids and ribosome time. When there is no lactose the enzymes would be useless, so keeping the operon off saves those resources for growth. When lactose appears, the switch turns on within minutes, so the cell loses little by waiting. Strains b and c waste energy; strains d, e and f cannot use lactose at all.</p>
<p><strong>h.</strong> An <span class="term">inducible operon</span> is <strong>off by default</strong>: its repressor is made in its active form and binds the operator on its own. It is switched on only when an <span class="term">inducer</span> (lactose, strictly its isomer allolactose) binds the repressor and inactivates it. This suits a <strong>catabolic</strong> pathway: the enzymes are only needed when their substrate is there to be broken down.</p>`,
    marks: 8
  },
  {
    id: "xg20",
    lesson: "3.07",
    level: "apply",
    tier: "likely",
    title: "The trp operon: predicting a repressible switch",
    prompt: `<ol>
<li>For wild-type <em>E. coli</em>, describe the state of the trp repressor, the operator and transcription (a) when the cell is short of tryptophan, and (b) when the medium contains plenty of tryptophan.</li>
<li>Predict whether the trp enzymes are made, with tryptophan absent and with it present, in:
<ol type="i">
<li>a <em>trpR</em> mutant that makes no repressor;</li>
<li>an operator mutant that the repressor cannot bind;</li>
<li>a repressor mutant that cannot bind tryptophan;</li>
<li>a repressor mutant that binds the operator even without tryptophan.</li>
</ol></li>
<li>Strain iv cannot grow on a medium without tryptophan, but grows normally if tryptophan is added. Explain.</li>
<li>Explain why it makes sense for the trp operon to be repressible while the lac operon is inducible. Use the terms anabolic, catabolic, substrate and end product.</li>
<li>Tryptophan also binds and inhibits the first enzyme of its own synthesis pathway. Why might the cell use both enzyme inhibition and operon repression?</li>
</ol>`,
    hints: [
      "The trp repressor is made inactive. Which molecule activates it?",
      "Any mutation that stops the repressor sitting on the operator makes the operon always on.",
      "Which molecule is the best signal that a cell needs a breakdown pathway? A synthesis pathway?"
    ],
    answer: `<p><strong>a.</strong> (a) Tryptophan scarce: the repressor (from <em>trpR</em>) is <strong>inactive</strong> and cannot bind the operator. RNA polymerase transcribes the five structural genes (<em>trpE, D, C, B, A</em>) as one mRNA, and the cell makes the enzymes to synthesize tryptophan. (b) Tryptophan plentiful: tryptophan acts as a <span class="term">corepressor</span>, binding the inactive repressor and <strong>activating</strong> it. The active repressor binds the operator, blocks RNA polymerase, and transcription stops, so the cell does not overproduce tryptophan.</p>
<p><strong>b.</strong></p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Strain</th><th>No Trp</th><th>Trp present</th><th>Why</th></tr></thead>
<tbody>
<tr><td>i. No repressor</td><td>Yes</td><td><strong>Yes</strong></td><td>Nothing can block the operator.</td></tr>
<tr><td>ii. Operator mutant</td><td>Yes</td><td><strong>Yes</strong></td><td>The activated repressor has nowhere to bind.</td></tr>
<tr><td>iii. Repressor can't bind Trp</td><td>Yes</td><td><strong>Yes</strong></td><td>Tryptophan cannot activate the repressor, so it stays inactive.</td></tr>
<tr><td>iv. Always-active repressor</td><td><strong>No</strong></td><td>No</td><td>The repressor blocks the operator all the time.</td></tr>
</tbody></table></div>
<p>Strains i–iii waste energy making enzymes when tryptophan is already available.</p>
<p><strong>c.</strong> Strain iv can never transcribe the trp operon, so it cannot make the enzymes that build tryptophan. Without tryptophan from outside, it cannot make any protein that contains tryptophan, so it cannot grow. If tryptophan is supplied, it takes it up and uses it directly, so it grows normally.</p>
<p><strong>d.</strong> The lac operon controls a <strong>catabolic</strong> (breakdown) pathway. Its <strong>substrate</strong>, lactose, is the best signal that the enzymes are needed, so the substrate turns the operon <strong>on</strong> (inducible, off by default). The trp operon controls an <strong>anabolic</strong> (synthesis) pathway. Its <strong>end product</strong>, tryptophan, is the best signal that the enzymes are no longer needed, so the product turns the operon <strong>off</strong> (repressible, on by default). Both are negative control by a repressor; they differ in whether the small molecule inactivates or activates it.</p>
<p><strong>e.</strong> They work on different time scales. <strong>Feedback inhibition</strong> of the enzyme is <strong>instant</strong>: the moment tryptophan builds up, the existing enzymes stop working, so no more is wasted. <strong>Repression</strong> is <strong>slower</strong> (existing enzymes and mRNA take time to disappear) but saves much more energy, because the cell stops making the enzymes at all. Together they give a fast response and long-term savings.</p>`,
    marks: 8
  },
  {
    id: "xg21",
    lesson: "3.07",
    level: "extend",
    tier: "likely",
    title: "Glucose first: CAP, cAMP and diauxic growth",
    prompt: `<p><em>E. coli</em> cells were grown in four media and their β-galactosidase activity was measured (relative units).</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Medium</th><th>β-galactosidase activity</th></tr></thead>
<tbody>
<tr><td>Glucose only</td><td>1</td></tr>
<tr><td>Lactose only</td><td>1,000</td></tr>
<tr><td>Glucose + lactose</td><td>30</td></tr>
<tr><td>Neither sugar (glycerol as carbon source)</td><td>1</td></tr>
</tbody></table></div>
<ol>
<li>For each medium, state whether the repressor is on the operator, whether cAMP is high or low, whether CAP is bound next to the promoter, and explain the activity measured.</li>
<li>Why is the activity in glucose + lactose not zero, but still far lower than in lactose only?</li>
<li>Explain why it is an advantage for <em>E. coli</em> to use glucose before lactose.</li>
<li>Cells are put in a medium with a little glucose and plenty of lactose, and their growth is followed. Describe and explain the shape of the growth curve.</li>
<li>Predict the activity in lactose-only medium for a mutant whose CAP cannot bind cAMP, and for a <em>lacI</em> mutant (no repressor) in glucose-only medium.</li>
<li>Classify the repressor and CAP as negative or positive control.</li>
</ol>`,
    hints: [
      "The lac operon needs two conditions for full transcription: the repressor off the operator, and CAP–cAMP helping RNA polymerase bind.",
      "cAMP is high when glucose is scarce.",
      "Glucose goes straight into glycolysis. What does a cell have to build before it can use lactose?"
    ],
    answer: `<p><strong>a.</strong></p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Medium</th><th>Repressor on operator?</th><th>cAMP</th><th>CAP bound?</th><th>Result</th></tr></thead>
<tbody>
<tr><td>Glucose only</td><td>Yes</td><td>Low</td><td>No</td><td>Off (1): blocked and not activated</td></tr>
<tr><td>Lactose only</td><td>No (inducer)</td><td>High</td><td>Yes</td><td><strong>Fully on</strong> (1,000)</td></tr>
<tr><td>Glucose + lactose</td><td>No (inducer)</td><td>Low</td><td>No</td><td>Low (30): unblocked but not activated</td></tr>
<tr><td>Neither</td><td>Yes</td><td>High</td><td>Yes</td><td>Off (1): CAP is ready but the repressor still blocks RNA polymerase</td></tr>
</tbody></table></div>
<p><strong>b.</strong> With lactose present the repressor is off, so RNA polymerase is not blocked and can transcribe the operon at a low rate. The lac promoter is weak on its own, though: without <strong>CAP–cAMP</strong> bound beside it, RNA polymerase binds poorly. CAP–cAMP increases transcription many times over, so without it (because glucose keeps cAMP low) the activity is only a few percent of the maximum.</p>
<p><strong>c.</strong> Glucose can enter glycolysis directly, so the cell already has every enzyme it needs. Using lactose first requires making permease and β-galactosidase (costing ATP, GTP and amino acids) and then splitting lactose into glucose and galactose, with galactose needing still more enzymes. Using the cheaper sugar first saves energy and lets the cell grow faster.</p>
<p><strong>d.</strong> The curve has <strong>two growth phases separated by a lag</strong> (diauxic growth). (1) Rapid growth on <strong>glucose</strong>: the lac operon is kept low by catabolite repression. (2) When glucose runs out, growth <strong>pauses</strong>: cAMP rises, CAP–cAMP binds, and with lactose already removing the repressor, the lac operon switches fully on; the cells need time to make enough lac enzymes. (3) Growth resumes on <strong>lactose</strong>, often at a slightly slower rate.</p>
<p><strong>e.</strong> CAP mutant in lactose only: <strong>low</strong> activity (similar to glucose + lactose, about 30). The repressor is off, but CAP cannot be activated by cAMP, so it cannot boost transcription. <em>lacI</em> mutant in glucose only: also <strong>low but not zero</strong>. There is no repressor, so the operon is not blocked, but glucose keeps cAMP low, so CAP cannot activate it; the cell makes the enzymes at a low, constant level.</p>
<p><strong>f.</strong> The <strong>repressor</strong> is <strong>negative control</strong>: a protein that turns transcription off when bound. <strong>CAP</strong> is <strong>positive control</strong>: a protein that turns transcription up when bound. The lac operon uses both, so it is fully on only when lactose is present <em>and</em> glucose is absent.</p>`,
    marks: 8
  }
);
