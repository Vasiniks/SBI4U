window.LESSONS = window.LESSONS || [];

/* ===================================================================
   1.05 NUCLEIC ACIDS
   =================================================================== */
window.LESSONS.push({
  id: "1.05",
  title: "Nucleic Acids",
  stage: "c1",
  where: "Nucleus and cytoplasm",
  summary: "DNA and RNA are polymers of nucleotides. You need to be able to draw a nucleotide, sort the five bases into purines and pyrimidines, tell ribose from deoxyribose, name the phosphodiester linkage, apply Chargaff's rule (A–T with 2 H bonds, G–C with 3), and explain why the two strands of DNA are antiparallel.",
  objectives: [
    "Name the two nucleic acids and state the job of each: DNA stores hereditary information, RNA translates it into functional proteins.",
    "Draw and label a nucleotide (phosphate group, pentose sugar, nitrogenous base) and number the sugar carbons 1′ to 5′.",
    "Classify adenine and guanine as purines (double ring) and cytosine, thymine and uracil as pyrimidines (single ring).",
    "Tell deoxyribose from ribose by the missing oxygen at carbon 2.",
    "Explain how a phosphodiester linkage forms by condensation and builds the sugar–phosphate backbone.",
    "Apply Chargaff's rule (A–T with 2 H bonds, G–C with 3 H bonds) to pair bases and calculate base percentages.",
    "Describe the antiparallel double helix, identify the 5′ and 3′ ends, and write a complementary strand.",
    "Compare DNA and RNA, relate ATP and ADP to nucleotides, and explain why DNA uses thymine instead of uracil."
  ],
  html: `
<h3 data-tier="essential">Two nucleic acids: DNA and RNA</h3>
<p><span class="term">Nucleic acids</span> are the fourth group of biological macromolecules, after carbohydrates, lipids and proteins. Like starch and proteins, they are <strong>polymers</strong>: long chains built from repeating subunits (monomers). The monomer of a nucleic acid is the <span class="term">nucleotide</span>.</p>
<p>The class slides list <strong>two nucleic polymers</strong>:</p>
<ul>
  <li><span class="term">Deoxyribonucleic acid (DNA)</span> <strong>contains the hereditary information</strong>. It is the permanent instruction manual for building and running the organism, and it is copied and passed on to every new cell and to offspring.</li>
  <li><span class="term">Ribonucleic acid (RNA)</span> <strong>translates DNA into functional proteins</strong>. DNA does not leave the nucleus. Instead, the cell makes RNA copies of the genes it needs and uses those copies to build proteins at the ribosomes.</li>
</ul>
<p>Why have two molecules instead of one? Think of a library with a rare reference book that is never allowed to leave the building. When you need a page, you photocopy it and take the copy away. If the copy gets coffee spilled on it, nothing important is lost. DNA is the reference book: kept safe, stable, and in one place. RNA is the photocopy: cheap, short-lived and disposable. This division of jobs explains almost every structural difference you will learn in this lesson (DNA is double-stranded and more stable; RNA is single-stranded and less stable).</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>There are three main types of RNA, each with a nickname:</p><ul><li><strong>mRNA</strong> (messenger RNA): the "photocopy" of a gene that carries the instructions from the nucleus to a ribosome.</li><li><strong>tRNA</strong> (transfer RNA): the "shuttle bus" that transports the correct amino acid to the ribosome.</li><li><strong>rRNA</strong> (ribosomal RNA): the main building block of ribosomes, the structures where proteins are assembled.</li></ul></div>
<p data-tier="extra">The name "nucleic acid" comes from history and chemistry. These molecules were first isolated from cell nuclei, and they are acidic because their phosphate groups release H<sup>+</sup> ions in water. That is also why the backbone of DNA carries a negative charge.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Use the slide wording: DNA <strong>contains (stores) the hereditary information</strong>; RNA <strong>translates DNA into functional proteins</strong>. If you are asked for the monomer of a nucleic acid, the answer is a <strong>nucleotide</strong>, not "a base" or "a sugar".</p></div>

<h3 data-tier="essential">The monomer: a nucleotide</h3>
<p>Every nucleotide, in DNA or in RNA, is built from the same <strong>three parts</strong>:</p>
<ol>
  <li>A <span class="term">nitrogenous base</span>: a ring-shaped molecule containing nitrogen atoms (A, G, C, T or U). The base is the "letter" of the genetic code.</li>
  <li>A <span class="term">pentose sugar</span>: a 5-carbon sugar (ribose or deoxyribose). The sugar sits in the middle and holds the other two parts.</li>
  <li>A <span class="term">phosphate group</span>: a phosphorus atom surrounded by oxygen atoms. Phosphates link one nucleotide to the next.</li>
</ol>
<p>To talk about where things attach, chemists number the five carbons of the sugar <strong>1′ to 5′</strong> (read "one prime" to "five prime"). The primes are there because the atoms in the base are also numbered 1, 2, 3 and so on; the prime tells you that you mean a <em>sugar</em> carbon, not a base atom. Count clockwise around the ring starting from the carbon to the right of the ring oxygen:</p>
<ul>
  <li>The <strong>base</strong> is attached to the <strong>1′ carbon</strong>.</li>
  <li>The <strong>2′ carbon</strong> is the one that differs between DNA and RNA (next section).</li>
  <li>The <strong>3′ carbon</strong> carries an <strong>–OH group</strong>. This is where the next nucleotide attaches.</li>
  <li>The <strong>5′ carbon</strong> sticks out of the ring as a CH<sub>2</sub> group, and the <strong>phosphate</strong> is bonded to it.</li>
</ul>
<figure class="diagram">
<svg viewBox="0 54 640 264" role="img" aria-labelledby="b105-t1">
<title id="b105-t1">A nucleotide. A phosphate group is bonded to the 5-prime carbon (a CH2 group) of a five-carbon sugar. The sugar ring carbons are numbered 1-prime to 4-prime with the ring oxygen at the top. A nitrogenous base is bonded to the 1-prime carbon. The 3-prime carbon carries an OH group where the next nucleotide attaches. The 2-prime carbon carries H in deoxyribose (DNA) and OH in ribose (RNA).</title>
<circle cx="80" cy="118" r="44" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="2"/>
<text x="80" y="124" text-anchor="middle" font-family="inherit" font-size="20" font-weight="700" style="fill:var(--ink)">P</text>
<text x="80" y="184" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Phosphate group</text>
<line x1="124" y1="118" x2="162" y2="118" style="stroke:var(--ink)" stroke-width="2"/>
<text x="182" y="123" text-anchor="middle" font-family="inherit" font-size="14" style="fill:var(--ink)">CH₂</text>
<text x="182" y="100" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--magenta)">5′</text>
<line x1="188" y1="130" x2="204" y2="154" style="stroke:var(--ink)" stroke-width="2"/>
<polygon points="262,112 320,154 298,224 226,224 204,154" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="2"/>
<circle cx="262" cy="112" r="11" style="fill:var(--surface);stroke:var(--teal)" stroke-width="1.5"/>
<text x="262" y="117" text-anchor="middle" font-family="inherit" font-size="13" style="fill:var(--ink)">O</text>
<text x="262" y="178" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">pentose</text>
<text x="262" y="193" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">sugar</text>
<text x="330" y="146" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--magenta)">1′</text>
<text x="308" y="222" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--magenta)">2′</text>
<text x="214" y="222" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--magenta)">3′</text>
<text x="196" y="166" text-anchor="end" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--magenta)">4′</text>
<line x1="226" y1="224" x2="226" y2="254" style="stroke:var(--ink)" stroke-width="2"/>
<text x="226" y="271" text-anchor="middle" font-family="inherit" font-size="14" style="fill:var(--ink)">OH</text>
<text x="200" y="292" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">3′ –OH: the next</text>
<text x="200" y="307" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">nucleotide joins here</text>
<line x1="298" y1="224" x2="298" y2="250" style="stroke:var(--ink)" stroke-width="2"/>
<rect x="266" y="252" width="64" height="28" rx="6" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="298" y="271" text-anchor="middle" font-family="inherit" font-size="13" style="fill:var(--ink)">H or OH</text>
<text x="340" y="262" font-family="inherit" font-size="12" style="fill:var(--ink)">DNA: –H (deoxyribose)</text>
<text x="340" y="278" font-family="inherit" font-size="12" style="fill:var(--ink)">RNA: –OH (ribose)</text>
<line x1="320" y1="154" x2="386" y2="148" style="stroke:var(--ink)" stroke-width="2"/>
<polygon points="454.6,108 420,88 385.4,108 385.4,148 420,168 454.6,148" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<text x="420" y="133" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">Base</text>
<text x="420" y="190" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Nitrogenous base</text>
<text x="420" y="206" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">A, G, C, T or U</text>
<rect x="494" y="64" width="138" height="78" rx="8" style="fill:var(--surface-2);stroke:var(--line)"/>
<text x="563" y="86" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Deoxyribose (DNA)</text>
<text x="563" y="105" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">2′ carbon has –H</text>
<text x="563" y="124" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">de-oxy = one O fewer</text>
<rect x="494" y="152" width="138" height="60" rx="8" style="fill:var(--surface-2);stroke:var(--line)"/>
<text x="563" y="175" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Ribose (RNA)</text>
<text x="563" y="195" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">2′ carbon has –OH</text>
</svg>
<figcaption>A nucleotide: phosphate on the 5′ carbon, base on the 1′ carbon, and a free –OH on the 3′ carbon. The only difference between the DNA sugar and the RNA sugar is at carbon 2′.</figcaption>
</figure>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>In the DNA video shown in class, the carbons were described by the phosphate: the phosphate sits on the 5′ carbon of its own sugar and connects to the 3′ carbon of the sugar next to it. In a double helix the two strands are flipped relative to each other, so the 5′ end of one strand is at the top while the 5′ end of the other is at the bottom.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Read a nucleotide from left to right as <strong>P – S – B</strong>: <strong>P</strong>hosphate, <strong>S</strong>ugar, <strong>B</strong>ase. The sugar is always in the middle. For the carbons: the base is on carbon <strong>1</strong> (it comes <em>first</em> in importance), the phosphate hangs off carbon <strong>5</strong> (the one <em>outside</em> the ring).</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Do not use "base" and "nucleotide" as if they were the same thing. A base (like adenine) is only one of the three parts. A nucleotide is the whole unit: base + sugar + phosphate. A strand of DNA is a chain of nucleotides, not a chain of bases.</p></div>
<details class="check"><summary>Quick check: Name the three parts of a nucleotide and say which sugar carbon each of the other two parts is attached to.</summary><div class="ans"><p>Phosphate group, pentose (5-carbon) sugar, nitrogenous base. The base is attached to the <strong>1′</strong> carbon and the phosphate to the <strong>5′</strong> carbon. The 3′ carbon carries the –OH that bonds to the next nucleotide.</p></div></details>

<h3 data-tier="essential">Nitrogenous bases: purines and pyrimidines</h3>
<p>There are five nitrogenous bases. They are called "nitrogenous" because their rings contain nitrogen atoms. They fall into two families based on their <strong>ring structure</strong>:</p>
<ul>
  <li><span class="term">Purines</span> have a <strong>double-ringed</strong> structure: a six-membered ring fused to a five-membered ring. The purines are <strong>adenine (A)</strong> and <strong>guanine (G)</strong>.</li>
  <li><span class="term">Pyrimidines</span> have a <strong>single-ringed</strong> structure: one six-membered ring. The pyrimidines are <strong>cytosine (C)</strong>, <strong>thymine (T)</strong> and <strong>uracil (U)</strong>.</li>
</ul>
<div class="table-wrap"><table class="data">
<thead><tr><th>Base</th><th>Family</th><th>Rings</th><th>Found in</th></tr></thead>
<tbody>
<tr><td>Adenine (A)</td><td>Purine</td><td>2</td><td>DNA and RNA</td></tr>
<tr><td>Guanine (G)</td><td>Purine</td><td>2</td><td>DNA and RNA</td></tr>
<tr><td>Cytosine (C)</td><td>Pyrimidine</td><td>1</td><td>DNA and RNA</td></tr>
<tr><td>Thymine (T)</td><td>Pyrimidine</td><td>1</td><td>DNA only</td></tr>
<tr><td>Uracil (U)</td><td>Pyrimidine</td><td>1</td><td>RNA only</td></tr>
</tbody></table></div>
<p>So DNA uses <strong>A, G, C, T</strong> and RNA uses <strong>A, G, C, U</strong>. Three bases are shared; thymine and uracil swap places. Look closely at the structures on the slide and you can see why they are interchangeable: thymine is uracil with one extra <strong>methyl group (–CH<sub>3</sub>)</strong> attached to its ring. Both pair with adenine in exactly the same way. You will see later in this lesson why that small methyl group matters so much.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>"Long name = small ring." <strong>Pyrimidine</strong> is the longer word but has only <strong>one</strong> ring. <strong>Purine</strong> is the shorter word but has <strong>two</strong> rings. A and G are the purines; C, T and U are the pyrimidines.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>"Pure As Gold"</strong>: the <strong>pur</strong>ines are <strong>A</strong> and <strong>G</strong>. <strong>"CUT the pie"</strong>: the <strong>py</strong>rimidines are <strong>C</strong>, <strong>U</strong> and <strong>T</strong>, and a pie is one flat circle, like a single ring.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Uracil is <strong>never</strong> in normal DNA, and thymine is <strong>never</strong> in normal RNA. If a question shows a sequence containing U, it is RNA. If it contains T, it is DNA.</p></div>
<details class="check"><summary>Quick check: A base has a single six-membered ring and is found only in RNA. Name it and its family.</summary><div class="ans"><p><strong>Uracil</strong>, a <strong>pyrimidine</strong> (single ring). Cytosine is also a single-ring pyrimidine but it is found in both DNA and RNA; thymine is found only in DNA.</p></div></details>

<h3 data-tier="essential">The sugar: ribose vs deoxyribose</h3>
<p>Both nucleic acids use a <strong>pentose</strong> (5-carbon) sugar, and the two sugars give the molecules their names:</p>
<ul>
  <li><strong>DNA</strong> (<em>deoxyribo</em>nucleic acid) contains the sugar <span class="term">deoxyribose</span>.</li>
  <li><strong>RNA</strong> (<em>ribo</em>nucleic acid) contains the sugar <span class="term">ribose</span>.</li>
</ul>
<p>The difference is one atom. In ribose, carbon 2′ carries an <strong>–OH</strong> group. In deoxyribose, carbon 2′ carries just an <strong>–H</strong>. The slide puts it as a <strong>lack of oxygen at carbon 2 in deoxyribose</strong>. That is literally what the name says: <em>de-</em> (removed) <em>oxy-</em> (oxygen) ribose. The full name you will see on diagrams is <strong>2-deoxyribose</strong>, meaning "ribose with the oxygen removed from carbon 2".</p>
<p>Notice which oxygen is <em>kept</em>: the 3′ –OH is present in both sugars. It has to be, because the 3′ –OH is the attachment point for the next nucleotide in the chain. Remove that one and the chain could not grow.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Deoxyribose lacks <strong>one oxygen atom</strong>, not "O<sub>2</sub>". O<sub>2</sub> is a gas molecule made of two oxygen atoms and has nothing to do with this. Also, the missing oxygen is on carbon <strong>2′</strong>, not 3′. If a test diagram shows a sugar with –H on carbon 2′, it is from DNA; with –OH on carbon 2′, it is from RNA.</p></div>
<p data-tier="extra">Why does one oxygen matter? The 2′ –OH of ribose is chemically reactive. It sits right next to the phosphate linkage and can attack it, cutting the RNA strand. That is one reason RNA breaks down within minutes to hours in a cell, while DNA can survive for years (and in frozen fossils, tens of thousands of years). A short-lived RNA message suits its job as a temporary copy; a sturdy DNA archive suits its job as permanent storage.</p>
<details class="check"><summary>Quick check: You are shown a pentose sugar with –OH groups on carbons 2′ and 3′. Is it from DNA or RNA? Explain.</summary><div class="ans"><p><strong>RNA.</strong> The sugar is ribose because it has an –OH on carbon 2′. Deoxyribose would have only –H on carbon 2′ (it lacks the oxygen there). Both sugars have an –OH on carbon 3′, so that one does not help you decide.</p></div></details>

<h3 data-tier="essential">Phosphodiester linkages: building the backbone</h3>
<p>Nucleotides join into a strand by a <span class="term">condensation reaction</span> (also called dehydration synthesis), the same kind of reaction that joins glucose into starch. The <strong>phosphate</strong> on the 5′ carbon of one nucleotide bonds to the <strong>3′ –OH</strong> on the sugar of the previous nucleotide, and a molecule of <strong>water (H<sub>2</sub>O) is released</strong>.</p>
<p>The new bond is called a <span class="term">phosphodiester linkage</span> (or phosphodiester bond). The name tells you its structure: the phosphate ends up bonded to <em>two</em> sugars, one on each side, through two ester-type bonds. "Phospho-di-ester" = a phosphate making two ester bonds. It joins the <strong>3′ carbon of one sugar to the 5′ carbon of the next sugar</strong>.</p>
<p>Repeat this over and over and you get a long chain that goes sugar–phosphate–sugar–phosphate. This is the <span class="term">sugar–phosphate backbone</span>. The bases are not part of the backbone. They stick out to the side from each sugar, like the teeth on a comb, which leaves them free to pair with bases on another strand.</p>
<ul>
  <li>The backbone is held together by <strong>covalent</strong> phosphodiester bonds, which are strong. That keeps the order of the bases (the genetic message) intact.</li>
  <li>The reverse reaction is <span class="term">hydrolysis</span>: adding water breaks a phosphodiester linkage. Digestive enzymes do this to the DNA and RNA in your food.</li>
  <li>Because every phosphate links a 3′ carbon to a 5′ carbon, the strand has a <strong>direction</strong>. One end has a free phosphate on a 5′ carbon (the <strong>5′ end</strong>); the other end has a free –OH on a 3′ carbon (the <strong>3′ end</strong>).</li>
</ul>
<div class="callout key"><p class="callout-title">On the test</p><p>Know the two different "bonds" in DNA and where each one is:</p><ul><li><strong>Phosphodiester linkages</strong> (covalent, strong) join nucleotides <strong>along one strand</strong>, sugar to phosphate.</li><li><strong>Hydrogen bonds</strong> (weak) join the <strong>bases of the two strands</strong> to each other.</li></ul><p>A common question asks you to circle or name the bond between two nucleotides in the same strand. The answer is a phosphodiester linkage, formed by condensation with the release of water.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The bases are <strong>not</strong> joined to each other by phosphodiester bonds, and the backbone is <strong>not</strong> held together by hydrogen bonds. Phosphodiester = backbone (sugar to phosphate). Hydrogen bonds = between paired bases across the two strands.</p></div>
<p data-tier="extra">When a cell builds a new strand, nucleotides can only be added onto the free 3′ –OH at the end of the growing chain. So every DNA and RNA strand is built in the <strong>5′ to 3′ direction</strong>. You will use this rule in the genetics unit when you study DNA replication.</p>

<h3 data-tier="essential">Base pairing and Chargaff's rule</h3>
<p>In DNA, the bases sticking out from one strand line up with the bases sticking out from the other strand and hold the two strands together. The slide states that bases <strong>ALWAYS</strong> pair according to <span class="term">Chargaff's rule</span>:</p>
<ul>
  <li><strong>A pairs with T</strong> (or <strong>U in RNA</strong>), held by <strong>2 hydrogen bonds</strong>.</li>
  <li><strong>G pairs with C</strong>, held by <strong>3 hydrogen bonds</strong>.</li>
</ul>
<p>Two bases that pair this way are called <span class="term">complementary</span>. Because the pairing never changes, the two strands of DNA are not identical; they are complementary. Know one strand and you can always write the other.</p>
<p><strong>Why must a purine always pair with a pyrimidine?</strong> Look at the sizes. A purine has two rings and a pyrimidine has one, so every purine + pyrimidine pair is three rings wide. The two sugar–phosphate backbones stay the same distance apart all the way along the molecule, like the two rails of a ladder. Two purines together (four rings) would be too wide to fit between the rails; two pyrimidines (two rings) would be too narrow to reach across. Only purine + pyrimidine gives rungs of the same width every time.</p>
<p><strong>Why A with T and G with C, specifically?</strong> Size alone would allow A–C or G–T. What rules those out is the hydrogen bonding. Each base has a particular pattern of atoms that can donate or accept a hydrogen bond along its pairing edge. A and T line up to form exactly two hydrogen bonds; G and C line up to form exactly three. Put A opposite C and the atoms facing each other do not match, so the pair cannot hold.</p>
<figure class="diagram">
<svg viewBox="0 0 640 296" role="img" aria-labelledby="b105-t2">
<title id="b105-t2">Complementary base pairs between two sugar-phosphate backbones. Thymine, a single-ring pyrimidine, pairs with adenine, a double-ring purine, through 2 hydrogen bonds. Cytosine, a single-ring pyrimidine, pairs with guanine, a double-ring purine, through 3 hydrogen bonds. Each pair is three rings wide, so every rung has the same width. A side panel shows that two purines (four rings) would be too wide and two pyrimidines (two rings) too narrow.</title>
<text x="190" y="24" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">Complementary base pairs</text>
<rect x="40" y="50" width="14" height="196" rx="4" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<rect x="326" y="50" width="14" height="196" rx="4" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<text x="30" y="148" text-anchor="middle" font-family="inherit" font-size="11" transform="rotate(-90 30 148)" style="fill:var(--ink-2)">sugar–phosphate backbone</text>
<text x="352" y="148" text-anchor="middle" font-family="inherit" font-size="11" transform="rotate(90 352 148)" style="fill:var(--ink-2)">sugar–phosphate backbone</text>
<text x="110" y="66" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">pyrimidine</text>
<text x="252" y="66" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">purine</text>
<line x1="54" y1="100" x2="88" y2="100" style="stroke:var(--ink)" stroke-width="2"/>
<polygon points="132.5,87 110,74 87.5,87 87.5,113 110,126 132.5,113" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="2"/>
<text x="110" y="106" text-anchor="middle" font-family="inherit" font-size="16" font-weight="700" style="fill:var(--ink)">T</text>
<line x1="133" y1="94" x2="207" y2="94" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="133" y1="106" x2="207" y2="106" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="5 4"/>
<polygon points="252.5,87 230,74 207.5,87 207.5,113 230,126 252.5,113" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<polygon points="252.5,87 277.2,79 292.5,100 277.2,121 252.5,113" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<line x1="252.5" y1="87" x2="252.5" y2="113" style="stroke:var(--magenta)" stroke-width="2"/>
<text x="230" y="106" text-anchor="middle" font-family="inherit" font-size="16" font-weight="700" style="fill:var(--ink)">A</text>
<line x1="292" y1="100" x2="326" y2="100" style="stroke:var(--ink)" stroke-width="2"/>
<text x="190" y="148" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">A–T (A–U in RNA): 2 hydrogen bonds</text>
<line x1="54" y1="200" x2="88" y2="200" style="stroke:var(--ink)" stroke-width="2"/>
<polygon points="132.5,187 110,174 87.5,187 87.5,213 110,226 132.5,213" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="2"/>
<text x="110" y="206" text-anchor="middle" font-family="inherit" font-size="16" font-weight="700" style="fill:var(--ink)">C</text>
<line x1="133" y1="191" x2="207" y2="191" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="133" y1="200" x2="207" y2="200" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="5 4"/>
<line x1="133" y1="209" x2="207" y2="209" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="5 4"/>
<polygon points="252.5,187 230,174 207.5,187 207.5,213 230,226 252.5,213" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<polygon points="252.5,187 277.2,179 292.5,200 277.2,221 252.5,213" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="2"/>
<line x1="252.5" y1="187" x2="252.5" y2="213" style="stroke:var(--magenta)" stroke-width="2"/>
<text x="230" y="206" text-anchor="middle" font-family="inherit" font-size="16" font-weight="700" style="fill:var(--ink)">G</text>
<line x1="292" y1="200" x2="326" y2="200" style="stroke:var(--ink)" stroke-width="2"/>
<text x="190" y="248" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">G–C: 3 hydrogen bonds</text>
<line x1="54" y1="266" x2="326" y2="266" style="stroke:var(--ink-2)" stroke-width="1.5"/>
<line x1="54" y1="260" x2="54" y2="272" style="stroke:var(--ink-2)" stroke-width="1.5"/>
<line x1="326" y1="260" x2="326" y2="272" style="stroke:var(--ink-2)" stroke-width="1.5"/>
<text x="190" y="288" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">every rung is the same width: 1 ring + 2 rings = 3 rings</text>
<text x="520" y="24" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Why purine + pyrimidine?</text>
<line x1="420" y1="46" x2="420" y2="226" style="stroke:var(--ink-2)" stroke-width="4"/>
<line x1="494" y1="46" x2="494" y2="226" style="stroke:var(--ink-2)" stroke-width="4"/>
<rect x="422" y="62" width="22" height="22" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<rect x="446" y="62" width="22" height="22" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<rect x="470" y="62" width="22" height="22" style="fill:var(--blue-soft);stroke:var(--blue)"/>
<text x="506" y="71" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--good)">Purine + pyrimidine</text>
<text x="506" y="86" font-family="inherit" font-size="11.5" style="fill:var(--ink)">3 rings: fits</text>
<rect x="410" y="128" width="22" height="22" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<rect x="434" y="128" width="22" height="22" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<rect x="458" y="128" width="22" height="22" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<rect x="482" y="128" width="22" height="22" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<text x="512" y="137" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--bad)">Two purines</text>
<text x="512" y="152" font-family="inherit" font-size="11.5" style="fill:var(--ink)">4 rings: too wide</text>
<rect x="422" y="194" width="22" height="22" style="fill:var(--blue-soft);stroke:var(--blue)"/>
<rect x="470" y="194" width="22" height="22" style="fill:var(--blue-soft);stroke:var(--blue)"/>
<text x="506" y="203" font-family="inherit" font-size="11.5" font-weight="700" style="fill:var(--bad)">Two pyrimidines</text>
<text x="506" y="218" font-family="inherit" font-size="11.5" style="fill:var(--ink)">2 rings: too narrow</text>
<rect x="420" y="246" width="14" height="14" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<text x="440" y="257" font-family="inherit" font-size="11.5" style="fill:var(--ink)">purine ring</text>
<rect x="420" y="268" width="14" height="14" style="fill:var(--blue-soft);stroke:var(--blue)"/>
<text x="440" y="279" font-family="inherit" font-size="11.5" style="fill:var(--ink)">pyrimidine ring</text>
</svg>
<figcaption>Each rung of the DNA ladder is one purine (two rings) plus one pyrimidine (one ring), so the backbones stay evenly spaced. Dashed lines are hydrogen bonds: 2 between A and T, 3 between G and C.</figcaption>
</figure>
<p>Hydrogen bonds are <strong>weak</strong> on their own, and that is a feature, not a flaw. The two strands have to be pulled apart ("unzipped") every time the cell copies its DNA or reads a gene, so the bonds between them must be easy to break and re-form. But a DNA molecule has millions of base pairs, and millions of weak bonds added together hold the helix firmly. The covalent backbone, meanwhile, never comes apart during this process, so the sequence is protected.</p>
<p data-tier="likely">Because a G–C pair has three hydrogen bonds and an A–T pair only two, a stretch of DNA rich in G and C holds its two strands together more tightly than a stretch rich in A and T. It takes more heat to separate G–C-rich DNA, and cells often start unzipping DNA at A–T-rich regions.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>From the DNA video: the two strands interact through hydrogen bonds between bases, which is what "base pairing" means. A second force also stabilizes the helix: the flat, ring-shaped (aromatic) bases stack on top of each other like a pile of coins, and the attraction between stacked rings (called π–π stacking, from the ring electrons) holds the helix together along its length.</p></div>
<p data-tier="extra">History: in 1950 the biochemist Erwin Chargaff measured the bases in DNA from many species and found that the amount of A always equals the amount of T, and the amount of G always equals the amount of C, even though the A + T to G + C ratio varies from species to species. In 1953 James Watson and Francis Crick, using X-ray images of DNA made by Rosalind Franklin, explained Chargaff's numbers with their double-helix model: the amounts match because A is always paired with T and G with C. The class slides use "Chargaff's rule" for the pairing rule itself.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>"AT the Golf Course"</strong>: A goes with T, G goes with C. For the hydrogen bonds: the letters A and T are drawn with straight lines only, while C and G are curvy. The straight pair gets <strong>2</strong> hydrogen bonds; the curvy pair holds on tighter with <strong>3</strong>.</p></div>
<details class="check"><summary>Review question 1: How does the number of purines relate to the number of pyrimidines in a DNA/RNA chain?</summary><div class="ans"><p>In double-stranded DNA, the number of <strong>purines always equals the number of pyrimidines</strong> (a 1:1 ratio). Every rung of the ladder is one purine (A or G, double ring) paired with one pyrimidine (T or C, single ring), so they must come in equal numbers. This keeps the rungs a constant width: A pairs with T and G pairs with C.</p><p>In RNA, which is usually <strong>single-stranded</strong>, there is no partner strand, so the 1:1 ratio does not have to hold, although A and G are still purines and C and U are still pyrimidines.</p></div></details>

<h3 data-tier="essential">Using Chargaff's rule: base percentage calculations</h3>
<p>Because every A is paired with a T and every G with a C, in double-stranded DNA <strong>%A = %T</strong> and <strong>%G = %C</strong>. That lets you calculate all four bases from just one. Use three steps:</p>
<ol class="steps">
  <li><p class="step-head">Match the partner</p><p>Whatever percentage you are given, its partner has the same percentage (A = T, G = C).</p></li>
  <li><p class="step-head">Subtract from 100</p><p>Add the pair you know and subtract from 100%. What is left belongs to the other pair.</p></li>
  <li><p class="step-head">Split the rest equally</p><p>Divide what is left by 2, because the other two bases are also equal to each other.</p></li>
</ol>
<p><strong>Worked example (review question 5): a sample of DNA is 18% adenine.</strong></p>
<ul>
  <li>T = A = <strong>18%</strong></li>
  <li>A + T = 36%, so G + C = 100 − 36 = 64%</li>
  <li>G = C = 64 ÷ 2 = <strong>32%</strong> each</li>
  <li>Check: 18 + 18 + 32 + 32 = 100%. Also purines (A + G = 18 + 32 = 50%) equal pyrimidines (T + C = 18 + 32 = 50%).</li>
</ul>
<p><strong>Worked example 2: a sample of DNA is 26% guanine.</strong> C = 26%. G + C = 52%, so A + T = 48%, and A = T = <strong>24%</strong> each.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The most common error is forgetting to count the partner before splitting. With 18% A, some students do (100 − 18) ÷ 2 = 41% and give that to G and C. That ignores the 18% thymine. Always subtract <strong>both</strong> members of the known pair first. And always check that your four numbers add to 100.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>Show the three steps and the check. These rules work only for <strong>double-stranded DNA</strong>. If a question gives you single-stranded RNA, you cannot calculate the other bases this way, and saying so is the correct answer.</p></div>
<details class="check"><summary>Quick check: A DNA sample is 15% cytosine. Calculate the percentage of each other base.</summary><div class="ans"><p>G = C = <strong>15%</strong>. G + C = 30%, so A + T = 70%, and A = T = <strong>35%</strong> each. Check: 15 + 15 + 35 + 35 = 100%.</p></div></details>

<h3 data-tier="essential">The double helix and antiparallel strands</h3>
<p><strong>DNA contains two strands arranged in a double helix. RNA is single-stranded.</strong> A good picture of DNA is a <strong>twisted ladder</strong>:</p>
<ul>
  <li>The two <strong>sides (rails)</strong> of the ladder are the sugar–phosphate backbones: alternating deoxyribose and phosphate, joined by phosphodiester linkages.</li>
  <li>The <strong>rungs</strong> are the base pairs (A–T and G–C), held together in the middle by weak hydrogen bonds.</li>
  <li>The whole ladder is twisted into a spiral, the <span class="term">double helix</span>.</li>
</ul>
<p>The two strands also point in <strong>opposite directions</strong>. Remember from the backbone section that each strand has a direction: <strong>each strand has a free phosphate at one end (the 5′ end) and a free sugar at the other (the 3′ end)</strong>. In the double helix, the <strong>5′ end of one strand lines up with the 3′ end of the other</strong>. This is called <span class="term">antiparallel</span> ("anti" = opposite, "parallel" = side by side).</p>
<p>The answer key uses a good image: think of the two strands as two lanes of traffic on a highway. They run side by side, but one lane drives "up" (5′ to 3′) and the other drives "down" (3′ to 5′ when read in the same direction). Why does it have to be this way? The sugars of the two strands face opposite ways, and only in that arrangement do the bases on the two strands meet edge to edge, with their hydrogen-bonding atoms lined up. The direction also matters for the cell: the enzymes that copy and read DNA can only work in one direction along a strand, so they need to know which end is which.</p>
<figure class="diagram">
<svg viewBox="0 0 640 386" role="img" aria-labelledby="b105-t3">
<title id="b105-t3">A short double-stranded DNA molecule. The left strand runs from a free phosphate at its 5-prime end at the top to a free sugar OH at its 3-prime end at the bottom. The right strand is upside down: its 3-prime end with a free OH is at the top and its 5-prime end with a free phosphate is at the bottom. Each strand is a sugar-phosphate backbone joined by phosphodiester linkages. Bases pair across the middle: A with T by 2 hydrogen bonds, G with C by 3, C with G by 3, and T with A by 2.</title>
<defs><marker id="b105-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<text x="110" y="22" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">5′ end</text>
<text x="518" y="22" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">3′ end</text>
<line x1="66" y1="50" x2="66" y2="318" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#b105-ar)"/>
<text x="50" y="184" text-anchor="middle" font-family="inherit" font-size="12" transform="rotate(90 50 184)" style="fill:var(--ink-2)">strand 1 runs 5′ → 3′</text>
<line x1="578" y1="318" x2="578" y2="50" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#b105-ar)"/>
<text x="596" y="184" text-anchor="middle" font-family="inherit" font-size="12" transform="rotate(-90 596 184)" style="fill:var(--ink-2)">strand 2 runs 5′ → 3′</text>
<line x1="121" y1="53" x2="139" y2="73" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="147" y1="98" x2="123" y2="109" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="121" y1="123" x2="139" y2="143" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="147" y1="168" x2="123" y2="179" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="121" y1="193" x2="139" y2="213" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="147" y1="238" x2="123" y2="249" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="121" y1="263" x2="139" y2="283" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="147" y1="308" x2="132" y2="322" style="stroke:var(--ink)" stroke-width="2"/>
<text x="122" y="338" text-anchor="middle" font-family="inherit" font-size="13" style="fill:var(--ink)">OH</text>
<text x="122" y="360" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">3′ end</text>
<circle cx="110" cy="45" r="14" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<circle cx="110" cy="115" r="14" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<circle cx="110" cy="185" r="14" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<circle cx="110" cy="255" r="14" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<text x="110" y="49" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">P</text>
<text x="110" y="119" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">P</text>
<text x="110" y="189" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">P</text>
<text x="110" y="259" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">P</text>
<circle cx="116" cy="183" r="26" style="fill:none;stroke:var(--red)" stroke-width="2" stroke-dasharray="5 4"/>
<polygon points="160,58 181,73 173,98 147,98 139,73" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<polygon points="160,128 181,143 173,168 147,168 139,143" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<polygon points="160,198 181,213 173,238 147,238 139,213" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<polygon points="160,268 181,283 173,308 147,308 139,283" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<line x1="493" y1="62" x2="508" y2="49" style="stroke:var(--ink)" stroke-width="2"/>
<text x="520" y="45" text-anchor="middle" font-family="inherit" font-size="13" style="fill:var(--ink)">OH</text>
<line x1="501" y1="87" x2="520" y2="105" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="493" y1="132" x2="517" y2="121" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="501" y1="157" x2="520" y2="175" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="493" y1="202" x2="517" y2="191" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="501" y1="227" x2="520" y2="245" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="493" y1="272" x2="517" y2="261" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="501" y1="297" x2="520" y2="315" style="stroke:var(--ink)" stroke-width="2"/>
<circle cx="530" cy="115" r="14" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<circle cx="530" cy="185" r="14" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<circle cx="530" cy="255" r="14" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<circle cx="530" cy="325" r="14" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<text x="530" y="119" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">P</text>
<text x="530" y="189" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">P</text>
<text x="530" y="259" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">P</text>
<text x="530" y="329" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">P</text>
<text x="530" y="360" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">5′ end</text>
<polygon points="480,102 459,87 467,62 493,62 501,87" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<polygon points="480,172 459,157 467,132 493,132 501,157" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<polygon points="480,242 459,227 467,202 493,202 501,227" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<polygon points="480,312 459,297 467,272 493,272 501,297" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<rect x="181" y="68" width="140" height="24" rx="4" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<rect x="361" y="68" width="98" height="24" rx="4" style="fill:var(--blue-soft);stroke:var(--blue)"/>
<line x1="321" y1="75" x2="361" y2="75" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="321" y1="85" x2="361" y2="85" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="4 3"/>
<text x="251" y="85" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">A</text>
<text x="410" y="85" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">T</text>
<rect x="181" y="138" width="140" height="24" rx="4" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<rect x="361" y="138" width="98" height="24" rx="4" style="fill:var(--blue-soft);stroke:var(--blue)"/>
<line x1="321" y1="143" x2="361" y2="143" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="321" y1="150" x2="361" y2="150" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="321" y1="157" x2="361" y2="157" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="4 3"/>
<text x="251" y="155" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">G</text>
<text x="410" y="155" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">C</text>
<rect x="181" y="208" width="98" height="24" rx="4" style="fill:var(--blue-soft);stroke:var(--blue)"/>
<rect x="319" y="208" width="140" height="24" rx="4" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<line x1="279" y1="213" x2="319" y2="213" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="279" y1="220" x2="319" y2="220" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="279" y1="227" x2="319" y2="227" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="4 3"/>
<text x="230" y="225" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">C</text>
<text x="389" y="225" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">G</text>
<rect x="181" y="278" width="98" height="24" rx="4" style="fill:var(--blue-soft);stroke:var(--blue)"/>
<rect x="319" y="278" width="140" height="24" rx="4" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<line x1="279" y1="285" x2="319" y2="285" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="279" y1="295" x2="319" y2="295" style="stroke:var(--ink-2)" stroke-width="2" stroke-dasharray="4 3"/>
<text x="230" y="295" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">T</text>
<text x="389" y="295" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--ink)">A</text>
<text x="320" y="334" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">dashed lines = hydrogen bonds</text>
<text x="320" y="380" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--red)">Circled: a phosphodiester linkage (3′ carbon – phosphate – 5′ carbon)</text>
</svg>
<figcaption>Antiparallel strands. Pentagons are sugars, circles are phosphates, bars are bases (long bars purines, short bars pyrimidines). The left strand reads 5′ to 3′ from top to bottom; the right strand reads 5′ to 3′ from bottom to top.</figcaption>
</figure>
<h4>Writing a complementary strand</h4>
<p>To write the partner of a DNA strand, do two things: <strong>pair every base</strong> (A↔T, G↔C) and <strong>flip the end labels</strong> (5′ becomes 3′ and 3′ becomes 5′).</p>
<div class="eq">5′ – A T G C G T – 3′<br>3′ – T A C G C A – 5′</div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Writing both strands as 5′ to 3′ from left to right, or leaving the ends unlabelled. The two strands are antiparallel, so if the top strand is labelled 5′ on the left, the bottom strand must be labelled 3′ on the left. Losing the labels can cost you the mark even when the bases are right.</p></div>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>From the DNA video: the most common form of DNA inside cells is called <strong>B-form DNA</strong>, a right-handed double helix. Each full turn of the helix contains about <strong>10 base pairs</strong>. Because of the way the backbones twist, the helix has a wider groove and a narrower groove running around it, the <strong>major groove</strong> and the <strong>minor groove</strong>. Proteins that read DNA often slot into these grooves to "feel" the bases without unzipping the strands.</p></div>
<details class="check"><summary>Quick check: Write the complementary strand of 5′–GGATCCA–3′ and label its ends.</summary><div class="ans"><p><strong>3′–CCTAGGT–5′</strong>. Each G becomes C, each A becomes T, each T becomes A, each C becomes G, and the end labels are reversed because the strands are antiparallel.</p></div></details>
<details class="check"><summary>Review question 4: In your own words, explain the main structure of DNA (include Chargaff's rule and antiparallel strands).</summary><div class="ans"><p>DNA is a <strong>double helix</strong>, like a twisted ladder. The sides of the ladder are two <strong>sugar–phosphate backbones</strong> made of alternating deoxyribose and phosphate groups joined by phosphodiester linkages. The two strands are <strong>antiparallel</strong>: each has a 5′ end (free phosphate) and a 3′ end (free sugar), and the 5′ end of one strand lines up with the 3′ end of the other, like two lanes of traffic going opposite ways. This orientation matters for how enzymes read and copy the code.</p><p>The rungs are pairs of nitrogenous bases held together by weak <strong>hydrogen bonds</strong>. By <strong>Chargaff's rule</strong>, A always pairs with T (2 hydrogen bonds) and G always pairs with C (3 hydrogen bonds), always a purine with a pyrimidine. Because of this specific base pairing, if you know the sequence of one strand you can always predict the other.</p></div></details>

<h3 data-tier="essential">DNA vs RNA: side by side</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Feature</th><th>DNA</th><th>RNA</th></tr></thead>
<tbody>
<tr><td>Full name</td><td>Deoxyribonucleic acid</td><td>Ribonucleic acid</td></tr>
<tr><td>Sugar</td><td>Deoxyribose (–H on carbon 2′)</td><td>Ribose (–OH on carbon 2′)</td></tr>
<tr><td>Bases</td><td>A, G, C, <strong>T</strong></td><td>A, G, C, <strong>U</strong></td></tr>
<tr><td>Strands</td><td>Two, antiparallel, in a double helix</td><td>One (single-stranded)</td></tr>
<tr><td>Base pairing</td><td>A–T and G–C between the two strands</td><td>A–U and G–C when it pairs with DNA or folds back on itself</td></tr>
<tr><td>Job</td><td>Stores hereditary information</td><td>Translates DNA into functional proteins</td></tr>
<tr><td>Where</td><td>Nucleus (small amounts in mitochondria and chloroplasts)</td><td>Made in the nucleus; works mostly in the cytoplasm at ribosomes</td></tr>
<tr><td>Types</td><td>One kind</td><td>mRNA, tRNA, rRNA</td></tr>
<tr><td>Stability</td><td>Very stable, long-term storage</td><td>Less stable, short-lived working copy</td></tr>
</tbody></table></div>
<p>Every row of this table goes back to the two jobs. DNA must last a lifetime and be copied accurately, so it is double-stranded (each strand is a backup for the other), uses the more stable sugar, and uses thymine. RNA only needs to last long enough to be used, so a single, cheaper, less stable strand is fine, and even useful, because old messages are broken down instead of piling up.</p>
<details class="check"><summary>Quick check: Give three structural differences between DNA and RNA.</summary><div class="ans"><p>Any three of: DNA has <strong>deoxyribose</strong>, RNA has <strong>ribose</strong> (DNA lacks the oxygen on carbon 2′); DNA has <strong>thymine</strong>, RNA has <strong>uracil</strong>; DNA is <strong>double-stranded</strong> (double helix), RNA is <strong>single-stranded</strong>; DNA strands are antiparallel and paired by Chargaff's rule, RNA usually has no partner strand.</p></div></details>

<h3 data-tier="likely">ATP and ADP: nucleotides with an energy job</h3>
<p>The second review question links this lesson to Unit 2. ATP is usually described as the cell's "energy currency", but structurally it is a <strong>nucleotide</strong>, the same kind of molecule that builds RNA and DNA.</p>
<div class="compare">
  <div><h4>ATP (adenosine triphosphate)</h4><ul><li>Adenine (base)</li><li>Ribose (sugar)</li><li><strong>Three</strong> phosphate groups</li></ul></div>
  <div><h4>ADP (adenosine diphosphate)</h4><ul><li>Adenine (base)</li><li>Ribose (sugar)</li><li><strong>Two</strong> phosphate groups</li></ul></div>
</div>
<p>Adenine joined to ribose is called <strong>adenosine</strong>; the "tri" and "di" count the phosphates. So ATP and ADP follow exactly the same base + pentose + phosphate plan as the nucleotides in nucleic acids. With only one phosphate (AMP), it would be identical to the adenine nucleotide in RNA. Compared with DNA, the differences are that ATP has <strong>ribose instead of deoxyribose</strong>, it carries <strong>extra phosphates</strong>, and it floats free in the cell instead of being linked into a chain. Removing the last phosphate (ATP → ADP + phosphate, a hydrolysis reaction) releases energy the cell uses to do work.</p>
<p data-tier="extra">The connection is more than a resemblance. The raw materials a cell uses to build RNA are ATP, GTP, CTP and UTP, and the raw materials for DNA are their deoxyribose versions (dATP, dGTP, dCTP, dTTP). When each one is added to a growing strand, two of its three phosphates are snapped off, and the energy released pays for the new phosphodiester linkage. That is why each nucleotide in a finished strand has only one phosphate.</p>
<details class="check"><summary>Review question 2: Compare the structure of ATP and ADP and explain how they relate to DNA.</summary><div class="ans"><p>ATP = adenine + ribose + <strong>three</strong> phosphates; ADP = adenine + ribose + <strong>two</strong> phosphates. Both are <strong>nucleotides</strong> (base + pentose sugar + phosphate), the same kind of molecule that builds DNA, and adenine is one of DNA's four bases. They differ from DNA nucleotides by having ribose instead of deoxyribose and extra phosphates, and their job is carrying energy, not storing information.</p></div></details>

<h3 data-tier="likely">Why DNA uses thymine instead of uracil</h3>
<p>Many biologists accept the "RNA world" idea: early life stored its genetic information in RNA, and DNA evolved later. If so, why did DNA switch from uracil to thymine? The answer is about <strong>stability and accuracy</strong>, and it connects to natural selection from Grade 11.</p>
<ol class="steps">
  <li><p class="step-head">Cytosine can turn into uracil</p><p>Cytosine (in both DNA and RNA) can spontaneously lose its amine group (–NH<sub>2</sub>), a reaction called <span class="term">deamination</span>. Deaminated cytosine <strong>is uracil</strong>. This happens many times a day in every cell.</p></li>
  <li><p class="step-head">The mutation trap</p><p>If DNA normally contained uracil, repair enzymes would find a U and have no way of knowing whether it was supposed to be there or was a damaged C. They could not fix it reliably, and errors (mutations) would build up. A damaged C that is not fixed pairs with A instead of G when DNA is copied, so the error gets passed on.</p></li>
  <li><p class="step-head">The thymine solution</p><p>Thymine is uracil with an extra <strong>methyl group (–CH<sub>3</sub>)</strong>, a chemical "tag". Because DNA only uses thymine, the repair machinery knows that <strong>any uracil it finds in DNA is an error</strong> and removes it.</p></li>
  <li><p class="step-head">Natural selection</p><p>Organisms that used thymine in their DNA copied their genetic information with higher <strong>fidelity</strong> (accuracy), passed fewer harmful mutations to their offspring, and so were favoured by natural selection. RNA kept uracil because RNA copies are short-lived; a damaged message is simply replaced.</p></li>
</ol>
<p data-tier="extra">Deoxyribose adds to DNA's stability too. Without the reactive 2′ –OH, the DNA backbone is far less likely to cut itself than an RNA backbone. Two small chemical changes, one oxygen removed and one methyl group added, turn a fragile message molecule into a durable archive.</p>
<details class="check"><summary>Review question 3: DNA probably evolved from RNA. Discuss the stability of thymine and uracil.</summary><div class="ans"><p>Thymine makes DNA the more stable, more accurate store. Cytosine can lose an amine group (<strong>deamination</strong>) and become uracil, so if DNA used U, repair enzymes could not tell a correct U from a damaged C and mutations would pile up. Thymine is uracil plus a <strong>methyl group</strong>, so any U found in DNA is known to be an error and is repaired. Natural selection favoured organisms using thymine because they passed on their genetic information with higher fidelity.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
  <li><strong>DNA</strong> stores hereditary information; <strong>RNA</strong> translates DNA into functional proteins (types: mRNA, tRNA, rRNA).</li>
  <li>The monomer is the <strong>nucleotide</strong>: phosphate group + pentose sugar + nitrogenous base. Base on the 1′ carbon, phosphate on the 5′ carbon, –OH on the 3′ carbon.</li>
  <li><strong>Purines</strong> (A, G) have two rings; <strong>pyrimidines</strong> (C, T, U) have one ring. T is in DNA only, U in RNA only.</li>
  <li><strong>Deoxyribose</strong> (DNA) lacks the oxygen at carbon 2 that <strong>ribose</strong> (RNA) has.</li>
  <li>Nucleotides are joined by <strong>phosphodiester linkages</strong> (condensation, water released) between the 3′ carbon of one sugar and the 5′ carbon of the next, forming the sugar–phosphate backbone.</li>
  <li><strong>Chargaff's rule</strong>: A–T (A–U in RNA) with 2 hydrogen bonds; G–C with 3 hydrogen bonds. Purine always with pyrimidine, so the rungs are equal in width and %A = %T, %G = %C.</li>
  <li>DNA is a <strong>double helix</strong> of two <strong>antiparallel</strong> strands: each strand has a 5′ end (free phosphate) and a 3′ end (free sugar), and the 5′ end of one lines up with the 3′ end of the other. RNA is single-stranded.</li>
  <li><strong>ATP and ADP</strong> are nucleotides (adenine + ribose + 3 or 2 phosphates). DNA uses <strong>thymine</strong> so that uracil from damaged cytosine can be recognized and repaired.</li>
</ul>
`
});
