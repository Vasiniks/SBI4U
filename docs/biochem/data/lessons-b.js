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

/* ===================================================================
   1.06 PROTEINS
   =================================================================== */
window.LESSONS.push({
  id: "1.06",
  title: "Proteins",
  stage: "c5",
  where: "Made at ribosomes; work everywhere",
  summary: "Proteins are polymers of 20 amino acids joined by peptide bonds. Learn the general structure of an amino acid, the four R-group families, how condensation builds a polypeptide, the four levels of protein structure, and why heat, pH and salt denature a protein by destroying its shape.",
  objectives: [
    "State that DNA codes for proteins and list the six main functions of proteins with an example of each.",
    "Explain that 20 amino acids combine in specific sequences to make polypeptides, and name the 9 essential amino acids as ones that must come from the diet.",
    "Draw the general structure of an amino acid and label the central carbon, amino group, carboxyl group, hydrogen atom and R group.",
    "Classify an amino acid as non-polar, polar, positively charged or negatively charged from its R group, using glycine, serine, histidine and aspartic acid as examples.",
    "Show how a peptide bond forms by condensation, name the N-terminus and C-terminus, and draw a tripeptide with all products.",
    "Describe primary, secondary, tertiary and quaternary structure and the bonds or interactions that hold each level.",
    "Define denaturation, explain how high temperature, pH and salt cause it, and give dangerous and useful examples."
  ],
  html: `
<h3 data-tier="essential">DNA → protein: why proteins matter</h3>
<p>The last lesson ended with DNA storing information. This lesson is about what that information is <em>for</em>. The class slide puts it simply: <strong>DNA codes for the production of proteins</strong>, and <strong>proteins are involved in almost everything the cell does</strong>. A gene is, in effect, a recipe for one protein.</p>
<p>The picture on the slide shows the two-stage path from gene to protein, which you will study in detail in the genetics unit:</p>
<ol>
  <li><strong>Transcription</strong> (in the nucleus): the DNA of a gene is copied into a strand of RNA (pre-mRNA), which is processed into <strong>mRNA</strong>. The mRNA leaves the nucleus.</li>
  <li><strong>Translation</strong> (in the cytoplasm, at a <strong>ribosome</strong>): the ribosome reads the mRNA, and <strong>tRNA</strong> molecules bring in the matching amino acids one at a time. The amino acids are linked into a growing protein chain.</li>
</ol>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The genetic code is read in groups of <strong>three bases</strong>, called a <span class="term">codon</span>. Each codon codes for <strong>one specific amino acid</strong>. tRNA "fetches" the right amino acid for each codon and the ribosome joins them into a protein chain.</p></div>
<p data-tier="extra">With four bases read three at a time there are 4 × 4 × 4 = 64 possible codons, more than enough for 20 amino acids. Most amino acids have several codons, and three codons mean "stop".</p>

<h3 data-tier="essential">Functions of proteins</h3>
<p>The slide lists six functions. For each one, learn what it means and one example:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Function</th><th>What it means</th><th>Example</th></tr></thead>
<tbody>
<tr><td>Structural support</td><td>Fibres that give strength and shape</td><td>Collagen in skin, tendons and bone; keratin in hair and nails</td></tr>
<tr><td>Transport of substances</td><td>Carry molecules around the body or across membranes</td><td>Hemoglobin carries O<sub>2</sub> in blood; channel and carrier proteins in the cell membrane</td></tr>
<tr><td>Cell signalling</td><td>Send and receive messages between cells</td><td>Receptor proteins on the cell surface; protein hormones such as insulin</td></tr>
<tr><td>Movement</td><td>Make cells and muscles move</td><td>Actin and myosin in muscle contraction</td></tr>
<tr><td>Coordination and regulation of activities</td><td>Control when and how fast processes happen</td><td>Insulin regulating blood sugar; proteins that switch genes on and off</td></tr>
<tr><td>Accelerating chemical reactions</td><td>Act as catalysts</td><td>Enzymes such as amylase and lipase (next lesson)</td></tr>
</tbody></table></div>
<p>How can one type of molecule do so many different jobs? Because proteins can be built in an almost unlimited number of different <strong>shapes</strong>, and a protein's shape determines its function. Collagen is a long rope, hemoglobin is a compact ball with pockets that hold oxygen, and an enzyme has a groove that fits only its substrate. The rest of this lesson explains where those shapes come from.</p>
<p data-tier="extra">Proteins also defend the body: antibodies are proteins that recognize and bind to invaders such as bacteria and viruses.</p>

<h3 data-tier="essential">Composition: 20 amino acids</h3>
<p>Proteins are polymers, and their monomers are <span class="term">amino acids</span>. There are <strong>20</strong> different amino acids, and <strong>the specific sequence of the 20 amino acids creates unique amino acid polymers</strong> called <span class="term">polypeptides</span>.</p>
<p>Think of the 20 amino acids as a 20-letter alphabet. With 26 letters, English builds hundreds of thousands of words just by changing the order. A protein is often hundreds of amino acids long, so the number of possible sequences is astronomically large (for a chain of only 100 amino acids, 20<sup>100</sup>). That variety is why proteins can do so many jobs.</p>
<p>Words to keep straight:</p>
<ul>
  <li><strong>Amino acid</strong>: the monomer.</li>
  <li><strong>Dipeptide</strong>: two amino acids joined; <strong>tripeptide</strong>: three.</li>
  <li><strong>Polypeptide</strong>: a long chain of amino acids.</li>
  <li><strong>Protein</strong>: one or more polypeptides folded into a specific, functional 3D shape.</li>
</ul>
<h4>Essential amino acids</h4>
<p><strong>9 of the 20 amino acids are classified as essential.</strong> Your body cannot make them (they are not naturally synthesized), so they <strong>must come from your diet</strong>. The other 11 are non-essential: your cells can build them from other molecules. The nine essential amino acids are <strong>valine, isoleucine, leucine, methionine, lysine, threonine, histidine, phenylalanine and tryptophan</strong>.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>"Essential" also covers amino acids the body cannot make <strong>in sufficient quantities</strong>. If you cannot make enough of it to meet your needs, you have to eat it.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>PVT TIM HaLL</strong> ("Private Tim Hall"): <strong>P</strong>henylalanine, <strong>V</strong>aline, <strong>T</strong>hreonine, <strong>T</strong>ryptophan, <strong>I</strong>soleucine, <strong>M</strong>ethionine, <strong>H</strong>istidine, <strong>L</strong>eucine, <strong>L</strong>ysine.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Essential" does <strong>not</strong> mean more important. Your body needs all 20 amino acids to build its proteins. "Essential" only means it is essential to get that amino acid from <strong>food</strong>.</p></div>
<p data-tier="extra">Foods that contain all nine essential amino acids in good amounts (meat, fish, eggs, dairy, soy, quinoa) are called complete proteins. Most plant foods are low in one or two, but combining them works: grains are low in lysine and legumes are low in methionine, so rice and beans together supply all nine.</p>

<h3 data-tier="essential">The structure of an amino acid</h3>
<p>All 20 amino acids share the same basic plan. A <strong>central carbon atom</strong> (also called the alpha carbon) forms four bonds, to four different things:</p>
<ol>
  <li>An <span class="term">amino group</span> (–NH<sub>2</sub>).</li>
  <li>A <span class="term">carboxyl group</span> (–COOH).</li>
  <li>A <strong>hydrogen atom</strong> (–H).</li>
  <li>An <span class="term">R group</span>, also called the <strong>side chain</strong>.</li>
</ol>
<p>The first three are identical in every amino acid. Only the <strong>R group</strong> changes, and it is the R group that gives each amino acid its identity and its chemical personality (size, polarity, charge). The name "amino acid" comes from the two functional groups you met in Lesson 1.02: the <strong>amino</strong> group, which acts as a base, and the <strong>carboxyl</strong> group, which acts as an acid.</p>
<figure class="diagram">
<svg viewBox="0 38 640 362" role="img" aria-labelledby="b106-t1">
<title id="b106-t1">General structure of an amino acid: a central carbon bonded to an amino group (NH2) on the left, a carboxyl group (COOH) on the right, a hydrogen atom above and an R group, the side chain, below. Below it, four example amino acids: glycine with R equal to H (non-polar), serine with R equal to CH2OH (polar), histidine with a CH2 and nitrogen-containing ring (positively charged, basic) and aspartic acid with R equal to CH2COO minus (negatively charged, acidic).</title>
<text x="230" y="54" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Central carbon</text>
<line x1="250" y1="60" x2="306" y2="128" style="stroke:var(--ink-2)" stroke-width="1.2"/>
<text x="320" y="82" text-anchor="middle" font-family="inherit" font-size="16" style="fill:var(--ink)">H</text>
<text x="334" y="68" font-family="inherit" font-size="12" style="fill:var(--ink-2)">hydrogen atom</text>
<line x1="320" y1="88" x2="320" y2="123" style="stroke:var(--ink)" stroke-width="2"/>
<rect x="140" y="92" width="104" height="100" rx="10" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<line x1="204" y1="132" x2="178" y2="114" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="204" y1="152" x2="178" y2="170" style="stroke:var(--ink)" stroke-width="2"/>
<text x="168" y="114" text-anchor="middle" font-family="inherit" font-size="16" style="fill:var(--ink)">H</text>
<text x="168" y="184" text-anchor="middle" font-family="inherit" font-size="16" style="fill:var(--ink)">H</text>
<text x="214" y="146" text-anchor="middle" font-family="inherit" font-size="16" font-weight="700" style="fill:var(--ink)">N</text>
<line x1="226" y1="140" x2="303" y2="140" style="stroke:var(--ink)" stroke-width="2"/>
<circle cx="320" cy="140" r="17" style="fill:var(--surface-2);stroke:var(--ink-2)" stroke-width="1.5"/>
<text x="320" y="146" text-anchor="middle" font-family="inherit" font-size="17" font-weight="700" style="fill:var(--ink)">C</text>
<rect x="392" y="76" width="120" height="130" rx="10" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<line x1="337" y1="140" x2="402" y2="140" style="stroke:var(--ink)" stroke-width="2"/>
<text x="412" y="146" text-anchor="middle" font-family="inherit" font-size="16" font-weight="700" style="fill:var(--ink)">C</text>
<line x1="418" y1="128" x2="444" y2="104" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="425" y1="133" x2="451" y2="109" style="stroke:var(--ink)" stroke-width="2"/>
<text x="458" y="104" text-anchor="middle" font-family="inherit" font-size="16" style="fill:var(--ink)">O</text>
<line x1="422" y1="154" x2="446" y2="174" style="stroke:var(--ink)" stroke-width="2"/>
<text x="466" y="192" text-anchor="middle" font-family="inherit" font-size="16" style="fill:var(--ink)">OH</text>
<line x1="320" y1="157" x2="320" y2="194" style="stroke:var(--ink)" stroke-width="2"/>
<rect x="296" y="194" width="48" height="36" rx="6" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="1.5"/>
<text x="320" y="218" text-anchor="middle" font-family="inherit" font-size="16" font-weight="700" style="fill:var(--ink)">R</text>
<text x="192" y="212" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Amino group</text>
<text x="192" y="228" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">–NH₂</text>
<text x="452" y="224" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">Carboxyl group</text>
<text x="452" y="240" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">–COOH</text>
<text x="320" y="250" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">R group (side chain)</text>
<text x="320" y="266" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">the only part that differs</text>
<text x="320" y="298" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">One example from each R-group family</text>
<rect x="12" y="308" width="142" height="84" rx="8" style="fill:var(--surface-2);stroke:var(--line)"/>
<text x="83" y="330" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Glycine</text>
<text x="83" y="352" text-anchor="middle" font-family="inherit" font-size="13" style="fill:var(--ink)">R = –H</text>
<text x="83" y="376" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--amber)">non-polar</text>
<rect x="170" y="308" width="142" height="84" rx="8" style="fill:var(--surface-2);stroke:var(--line)"/>
<text x="241" y="330" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Serine</text>
<text x="241" y="352" text-anchor="middle" font-family="inherit" font-size="13" style="fill:var(--ink)">R = –CH₂OH</text>
<text x="241" y="376" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--blue)">polar (has –OH)</text>
<rect x="328" y="308" width="142" height="84" rx="8" style="fill:var(--surface-2);stroke:var(--line)"/>
<text x="399" y="330" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Histidine</text>
<text x="399" y="352" text-anchor="middle" font-family="inherit" font-size="13" style="fill:var(--ink)">R = –CH₂ + N ring</text>
<text x="399" y="376" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--teal)">+ charge (basic)</text>
<rect x="486" y="308" width="142" height="84" rx="8" style="fill:var(--surface-2);stroke:var(--line)"/>
<text x="557" y="330" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Aspartic acid</text>
<text x="557" y="352" text-anchor="middle" font-family="inherit" font-size="13" style="fill:var(--ink)">R = –CH₂COO⁻</text>
<text x="557" y="376" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--magenta)">− charge (acidic)</text>
</svg>
<figcaption>Every amino acid has the same central carbon, amino group, carboxyl group and hydrogen. Only the R group changes. The four amino acids at the bottom are the ones to memorize, one from each family.</figcaption>
</figure>
<p data-tier="likely">On the slide's amino acid chart, the structures are drawn as H<sub>3</sub>N<sup>+</sup>– and –COO<sup>−</sup> instead of H<sub>2</sub>N– and –COOH. That is how amino acids actually exist in water at body pH: the acidic carboxyl group gives away an H<sup>+</sup> (becoming –COO<sup>−</sup>) and the basic amino group picks one up (becoming –NH<sub>3</sub><sup>+</sup>). It is the same molecule, just ionized. Either form is accepted when you draw an amino acid.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>You do not need to memorize all 20 structures from the chart. You do need to know <strong>one from each group</strong>, and the suggested ones are <strong>glycine</strong> (non-polar), <strong>serine</strong> (polar), <strong>histidine</strong> (positive charge) and <strong>aspartic acid</strong> (negative charge).</p></div>
<details class="check"><summary>Quick check: Draw the general structure of an amino acid and identify its functional groups.</summary><div class="ans"><p>A central carbon with four bonds: on the left an <strong>amino group</strong> (H<sub>2</sub>N–, two H atoms on a nitrogen), on the right a <strong>carboxyl group</strong> (–COOH: a carbon double-bonded to O and single-bonded to OH), above a <strong>hydrogen atom</strong>, and below the <strong>R group (side chain)</strong>. The amino and carboxyl groups are the functional groups common to all amino acids; the R group varies.</p></div></details>

<h3 data-tier="essential">R groups: four families</h3>
<p>The amino acid chart on the slide sorts all 20 amino acids into four coloured boxes according to their R groups. The family tells you how the amino acid behaves around water and around other R groups, which in turn decides where it ends up when the protein folds.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Family</th><th>What the R group is like</th><th>Amino acids on the chart</th></tr></thead>
<tbody>
<tr><td><strong>Non-polar</strong> (hydrophobic)</td><td>Mostly carbon and hydrogen; no strong dipole, avoids water</td><td>Glycine, alanine, valine, cysteine, proline, leucine, isoleucine, methionine, tryptophan, phenylalanine</td></tr>
<tr><td><strong>Polar</strong> (uncharged, hydrophilic)</td><td>Contains O or N (such as –OH or –CONH<sub>2</sub>) that creates a dipole; attracts water</td><td>Serine, threonine, tyrosine, asparagine, glutamine</td></tr>
<tr><td><strong>Positive charge</strong> (basic)</td><td>Contains an extra nitrogen group that picks up H<sup>+</sup> and becomes positive</td><td>Lysine, arginine, histidine</td></tr>
<tr><td><strong>Negative charge</strong> (acidic)</td><td>Contains an extra carboxyl group that loses H<sup>+</sup> and becomes negative (–COO<sup>−</sup>)</td><td>Aspartic acid, glutamic acid</td></tr>
</tbody></table></div>
<p>Why should you care which family an amino acid is in? Inside a cell, a protein is surrounded by water. Non-polar R groups are pushed away from water and tend to end up buried in the <strong>middle</strong> of a folded protein, while polar and charged R groups face <strong>outward</strong> toward the water. Positive and negative R groups attract each other. These pushes and pulls are what fold a chain into its final shape (tertiary structure, below).</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>The charged families are named after the extra functional group in the R group. An extra <strong>carboxyl</strong> (an acid group) makes the amino acid <strong>acidic</strong>, so it is negative, and both acidic ones have "acid" in their names: aspart<strong>ic acid</strong>, glutam<strong>ic acid</strong>. An extra <strong>amino</strong>-type nitrogen group (a base) makes it <strong>basic</strong> and positive.</p></div>

<h3 data-tier="likely">What makes an amino acid polar or non-polar?</h3>
<p>This is the first application question on the slides, and the answer key is precise: <strong>look specifically at the R group</strong>. Every amino acid has a polar carboxyl group and a polar amino group, so those cannot be what makes one amino acid different from another. <strong>To have a polar R group, it needs to have an O, N or S to create a dipole moment.</strong></p>
<p>The reason goes back to electronegativity from Lesson 1.01. Bonds between carbon and hydrogen share electrons almost equally, so an R group made only of C and H (like alanine's –CH<sub>3</sub>) has no dipole and is non-polar. Oxygen and nitrogen pull electrons strongly, so an O–H or N–H bond in the R group creates partial charges (a dipole), and the R group becomes polar. Compare <strong>alanine</strong> (R = –CH<sub>3</sub>, non-polar) with <strong>serine</strong> (R = –CH<sub>2</sub>OH, polar): the only difference is one oxygen atom.</p>
<p>Two refinements explain some entries on the chart:</p>
<ul>
  <li><strong>Sulfur is only weakly polar.</strong> Cysteine (–SH) and methionine (contains S) are placed in the non-polar box. Recall from Lesson 1.02 that the sulfhydryl group is much less polar than hydroxyl or amino groups.</li>
  <li><strong>Size matters.</strong> Tryptophan has an N in its ring, but the R group is a large, mostly carbon and hydrogen double ring, so overall it behaves as non-polar.</li>
</ul>
<details class="check"><summary>Review question 1: Looking at the structure, identify what makes an amino acid polar or non-polar.</summary><div class="ans"><p>The <strong>R group</strong>. All amino acids have polar amino and carboxyl groups, so polarity depends on the side chain. An R group that contains electronegative atoms such as <strong>O, N or S</strong> (for example –OH in serine) has a dipole moment and is polar. An R group made of only carbon and hydrogen (for example –CH<sub>3</sub> in alanine) is non-polar. Charged R groups (–COO<sup>−</sup>, –NH<sub>3</sub><sup>+</sup>) are the most strongly attracted to water.</p></div></details>

<h3 data-tier="essential">Peptide bonds: the condensation reaction</h3>
<p>Amino acids are joined by <span class="term">peptide bonds</span>, which <strong>form between the carboxyl group of one amino acid and the amino group of another</strong>. The reaction is a <span class="term">condensation reaction</span> (dehydration synthesis):</p>
<ul>
  <li>The carboxyl group of amino acid 1 loses its <strong>–OH</strong>.</li>
  <li>The amino group of amino acid 2 loses one <strong>–H</strong>.</li>
  <li>The –OH and –H leave together as one molecule of <strong>water (H<sub>2</sub>O)</strong>.</li>
  <li>The carbon of the carboxyl group bonds directly to the nitrogen of the amino group. That <strong>C–N bond</strong> is the peptide bond.</li>
</ul>
<figure class="diagram">
<svg viewBox="0 0 640 312" role="img" aria-labelledby="b106-t2">
<title id="b106-t2">Condensation of two amino acids. The OH from the carboxyl group of amino acid 1 and an H from the amino group of amino acid 2 are removed and form a water molecule. A peptide bond forms between the carboxyl carbon of the first amino acid and the amino nitrogen of the second, giving a dipeptide. The free amino group at one end is the N-terminus and the free carboxyl group at the other end is the C-terminus.</title>
<defs><marker id="b106-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<text x="150" y="18" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink-2)">Amino acid 1</text>
<text x="420" y="18" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink-2)">Amino acid 2</text>
<text x="62" y="85" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">H₂N</text>
<line x1="82" y1="80" x2="108" y2="80" style="stroke:var(--ink)" stroke-width="2"/>
<text x="120" y="85" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">C</text>
<line x1="120" y1="68" x2="120" y2="52" style="stroke:var(--ink)" stroke-width="2"/>
<text x="120" y="47" text-anchor="middle" font-family="inherit" font-size="14" style="fill:var(--ink)">H</text>
<line x1="120" y1="90" x2="120" y2="110" style="stroke:var(--ink)" stroke-width="2"/>
<text x="120" y="127" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--magenta)">R</text>
<line x1="132" y1="80" x2="158" y2="80" style="stroke:var(--ink)" stroke-width="2"/>
<text x="170" y="85" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">C</text>
<line x1="166" y1="68" x2="166" y2="52" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="174" y1="68" x2="174" y2="52" style="stroke:var(--ink)" stroke-width="2"/>
<text x="170" y="47" text-anchor="middle" font-family="inherit" font-size="14" style="fill:var(--ink)">O</text>
<line x1="182" y1="80" x2="204" y2="80" style="stroke:var(--ink)" stroke-width="2"/>
<rect x="205" y="66" width="36" height="26" rx="5" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="223" y="85" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">OH</text>
<rect x="289" y="66" width="24" height="26" rx="5" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="301" y="85" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">H</text>
<line x1="313" y1="80" x2="336" y2="80" style="stroke:var(--ink)" stroke-width="2"/>
<text x="348" y="85" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">N</text>
<line x1="348" y1="68" x2="348" y2="52" style="stroke:var(--ink)" stroke-width="2"/>
<text x="348" y="47" text-anchor="middle" font-family="inherit" font-size="14" style="fill:var(--ink)">H</text>
<line x1="360" y1="80" x2="386" y2="80" style="stroke:var(--ink)" stroke-width="2"/>
<text x="398" y="85" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">C</text>
<line x1="398" y1="68" x2="398" y2="52" style="stroke:var(--ink)" stroke-width="2"/>
<text x="398" y="47" text-anchor="middle" font-family="inherit" font-size="14" style="fill:var(--ink)">H</text>
<line x1="398" y1="90" x2="398" y2="110" style="stroke:var(--ink)" stroke-width="2"/>
<text x="398" y="127" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--magenta)">R</text>
<line x1="410" y1="80" x2="436" y2="80" style="stroke:var(--ink)" stroke-width="2"/>
<text x="448" y="85" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">C</text>
<line x1="444" y1="68" x2="444" y2="52" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="452" y1="68" x2="452" y2="52" style="stroke:var(--ink)" stroke-width="2"/>
<text x="448" y="47" text-anchor="middle" font-family="inherit" font-size="14" style="fill:var(--ink)">O</text>
<line x1="460" y1="80" x2="484" y2="80" style="stroke:var(--ink)" stroke-width="2"/>
<text x="502" y="85" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">OH</text>
<line x1="265" y1="100" x2="265" y2="160" style="stroke:var(--ink-2)" stroke-width="2" marker-end="url(#b106-ar)"/>
<text x="280" y="140" font-family="inherit" font-size="12" style="fill:var(--ink-2)">condensation: –OH and –H leave as H₂O</text>
<text x="40" y="168" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink-2)">Dipeptide</text>
<text x="62" y="225" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">H₂N</text>
<line x1="82" y1="220" x2="108" y2="220" style="stroke:var(--ink)" stroke-width="2"/>
<text x="120" y="225" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">C</text>
<line x1="120" y1="208" x2="120" y2="192" style="stroke:var(--ink)" stroke-width="2"/>
<text x="120" y="187" text-anchor="middle" font-family="inherit" font-size="14" style="fill:var(--ink)">H</text>
<line x1="120" y1="230" x2="120" y2="248" style="stroke:var(--ink)" stroke-width="2"/>
<text x="120" y="265" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--magenta)">R</text>
<line x1="132" y1="220" x2="158" y2="220" style="stroke:var(--ink)" stroke-width="2"/>
<text x="170" y="225" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">C</text>
<line x1="166" y1="208" x2="166" y2="192" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="174" y1="208" x2="174" y2="192" style="stroke:var(--ink)" stroke-width="2"/>
<text x="170" y="187" text-anchor="middle" font-family="inherit" font-size="14" style="fill:var(--ink)">O</text>
<line x1="182" y1="220" x2="256" y2="220" style="stroke:var(--magenta)" stroke-width="5"/>
<text x="268" y="225" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">N</text>
<line x1="268" y1="208" x2="268" y2="192" style="stroke:var(--ink)" stroke-width="2"/>
<text x="268" y="187" text-anchor="middle" font-family="inherit" font-size="14" style="fill:var(--ink)">H</text>
<line x1="280" y1="220" x2="306" y2="220" style="stroke:var(--ink)" stroke-width="2"/>
<text x="318" y="225" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">C</text>
<line x1="318" y1="208" x2="318" y2="192" style="stroke:var(--ink)" stroke-width="2"/>
<text x="318" y="187" text-anchor="middle" font-family="inherit" font-size="14" style="fill:var(--ink)">H</text>
<line x1="318" y1="230" x2="318" y2="248" style="stroke:var(--ink)" stroke-width="2"/>
<text x="318" y="265" text-anchor="middle" font-family="inherit" font-size="14" font-weight="700" style="fill:var(--magenta)">R</text>
<line x1="330" y1="220" x2="356" y2="220" style="stroke:var(--ink)" stroke-width="2"/>
<text x="368" y="225" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">C</text>
<line x1="364" y1="208" x2="364" y2="192" style="stroke:var(--ink)" stroke-width="2"/>
<line x1="372" y1="208" x2="372" y2="192" style="stroke:var(--ink)" stroke-width="2"/>
<text x="368" y="187" text-anchor="middle" font-family="inherit" font-size="14" style="fill:var(--ink)">O</text>
<line x1="380" y1="220" x2="404" y2="220" style="stroke:var(--ink)" stroke-width="2"/>
<text x="422" y="225" text-anchor="middle" font-family="inherit" font-size="15" style="fill:var(--ink)">OH</text>
<text x="480" y="227" text-anchor="middle" font-family="inherit" font-size="20" style="fill:var(--ink)">+</text>
<circle cx="550" cy="220" r="30" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="1.5"/>
<text x="550" y="226" text-anchor="middle" font-family="inherit" font-size="15" font-weight="700" style="fill:var(--ink)">H₂O</text>
<line x1="62" y1="234" x2="62" y2="284" style="stroke:var(--ink-2)" stroke-width="1"/>
<text x="62" y="300" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">N-terminus</text>
<line x1="219" y1="226" x2="219" y2="284" style="stroke:var(--magenta)" stroke-width="1"/>
<text x="219" y="300" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--magenta)">peptide bond (C–N)</text>
<line x1="422" y1="234" x2="422" y2="284" style="stroke:var(--ink-2)" stroke-width="1"/>
<text x="422" y="300" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">C-terminus</text>
</svg>
<figcaption>The –OH of one carboxyl group and an –H of the next amino group (red boxes) leave as water. The carboxyl carbon bonds to the amino nitrogen: a peptide bond. The free amino end is the N-terminus; the free carboxyl end is the C-terminus.</figcaption>
</figure>
<p>Repeat the reaction and the chain keeps growing from its carboxyl end. The result is a <strong>backbone</strong> that repeats the same three atoms over and over (N–C–C, N–C–C, ...), with the R groups sticking out to the side. The second condensation slide shows this for a tripeptide of serine, tyrosine and cysteine: the backbone is identical for every amino acid, and only the side chains (–CH<sub>2</sub>OH, a ring with –OH, and –CH<sub>2</sub>SH) differ.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>The two ends of a polypeptide have names. The end with the free amino group is the <strong>N-terminus</strong> (amino end), and the end with the free carboxyl group is the <strong>C-terminus</strong> (carboxyl end). Proteins are built, and written, starting from the N-terminus.</p></div>
<ul>
  <li><strong>Counting:</strong> joining <em>n</em> amino acids makes <strong><em>n</em> − 1 peptide bonds</strong> and releases <strong><em>n</em> − 1 water molecules</strong>. A tripeptide has 2 peptide bonds and released 2 H<sub>2</sub>O.</li>
  <li><strong>The reverse:</strong> <span class="term">hydrolysis</span> adds water back to break peptide bonds. That is how protein-digesting enzymes (proteases) in your stomach and small intestine break dietary protein into amino acids you can absorb.</li>
</ul>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>A peptide bond links the <strong>carboxyl carbon</strong> of one amino acid to the <strong>amino nitrogen</strong> of the next. It does not join two R groups, two amino groups or two central carbons. When you draw it, the water must come from the –OH of the carboxyl group and one –H of the amino group, and you must show the H<sub>2</sub>O as a product.</p></div>

<h3 data-tier="likely">Worked example: drawing a tripeptide</h3>
<p>The second application question asks you to draw a tripeptide of <strong>glycine, alanine and phenylalanine</strong>, showing the reactants and all products. Follow these steps:</p>
<ol class="steps">
  <li><p class="step-head">Draw the three reactants side by side</p><p>Each one has the same H<sub>2</sub>N–CH–COOH frame. Fill in the R groups: glycine R = –H; alanine R = –CH<sub>3</sub>; phenylalanine R = –CH<sub>2</sub>– attached to a benzene ring (C<sub>6</sub>H<sub>5</sub>).</p></li>
  <li><p class="step-head">Circle what leaves</p><p>Circle the –OH on glycine's carboxyl and one –H on alanine's amino group; then the –OH on alanine's carboxyl and one –H on phenylalanine's amino group. That is two water molecules.</p></li>
  <li><p class="step-head">Draw the product</p><p>Join C to N at each circled spot. Glycine is at the N-terminus and phenylalanine at the C-terminus.</p></li>
  <li><p class="step-head">Show all products</p><p>Write + 2 H<sub>2</sub>O. Missing the water is the most common way to lose marks on this question.</p></li>
</ol>
<div class="eq">glycine + alanine + phenylalanine → H<sub>2</sub>N–CH<sub>2</sub>–CO–NH–CH(CH<sub>3</sub>)–CO–NH–CH(CH<sub>2</sub>C<sub>6</sub>H<sub>5</sub>)–COOH + 2 H<sub>2</sub>O</div>
<details class="check"><summary>Quick check: How many peptide bonds and water molecules form when a polypeptide of 150 amino acids is made?</summary><div class="ans"><p><strong>149</strong> peptide bonds and <strong>149</strong> water molecules: one fewer than the number of amino acids, because the bonds are between neighbours.</p></div></details>

<h3 data-tier="likely">Solubility: size and R group</h3>
<p>The third application question asks how the solubility of peptides in water is influenced by size and by the R group. The answer key: <strong>the smaller the R group, the more soluble it will be. If the R group is polar, solubility will also increase. The small, polar amino acids are the most soluble.</strong></p>
<p>Why? Water dissolves things by surrounding them and forming hydrogen bonds or attractions with polar and charged parts. A polar or charged R group gives water something to grab. A large non-polar R group (like phenylalanine's ring) is a bulky patch that water cannot attract, so it pushes the molecule out of solution. The same logic applies to whole peptides: as a chain gets longer, it tends to carry more non-polar surface and becomes harder for water to surround, so very long chains with many non-polar R groups are generally less soluble than short chains rich in polar or charged R groups.</p>
<details class="check"><summary>Quick check: Which would you expect to be more soluble in water, a short peptide rich in serine or one rich in phenylalanine? Why?</summary><div class="ans"><p>The <strong>serine-rich</strong> peptide. Serine's R group (–CH<sub>2</sub>OH) is small and polar, so it hydrogen-bonds with water. Phenylalanine's R group is a large, non-polar benzene ring that water cannot attract, which lowers solubility.</p></div></details>

<h3 data-tier="essential">Protein structure: four levels</h3>
<p>A polypeptide chain fresh off the ribosome is not yet a working protein. <strong>Functional proteins contain one or more polypeptide chains that have twisted and coiled into a specific 3D shape</strong>, and the slide's key message is that <strong>the 3D shape of the protein determines its function</strong>. An enzyme works because its active site is exactly the right shape for its substrate; a receptor works because it fits its signal molecule. Protein shape is described at four levels, each built on the one before.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>A protein's properties come from how it <strong>folds</strong>, not just from which amino acids it contains. The same amino acids folded differently would make a different (and probably useless) protein.</p></div>
<figure class="diagram">
<svg viewBox="0 0 640 290" role="img" aria-labelledby="b106-t3">
<title id="b106-t3">The four levels of protein structure. Primary: a chain of beads, the sequence of amino acids held by peptide bonds. Secondary: an alpha-helix coil and a beta-pleated sheet, local folding held by hydrogen bonds in the backbone. Tertiary: the whole chain folded into a 3D shape held by R-group interactions. Quaternary: four separate polypeptide chains fitted together, as in hemoglobin.</title>
<rect x="6" y="8" width="148" height="274" rx="10" style="fill:var(--surface-2);stroke:var(--line)"/>
<rect x="166" y="8" width="148" height="274" rx="10" style="fill:var(--surface-2);stroke:var(--line)"/>
<rect x="326" y="8" width="148" height="274" rx="10" style="fill:var(--surface-2);stroke:var(--line)"/>
<rect x="486" y="8" width="148" height="274" rx="10" style="fill:var(--surface-2);stroke:var(--line)"/>
<polyline points="28,60 136,60 136,95 28,95 28,130 136,130" style="fill:none;stroke:var(--ink-2)" stroke-width="2"/>
<circle cx="28" cy="60" r="8" style="fill:var(--teal-soft);stroke:var(--teal)"/>
<circle cx="46" cy="60" r="8" style="fill:var(--amber-soft);stroke:var(--amber)"/>
<circle cx="64" cy="60" r="8" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<circle cx="82" cy="60" r="8" style="fill:var(--blue-soft);stroke:var(--blue)"/>
<circle cx="100" cy="60" r="8" style="fill:var(--teal-soft);stroke:var(--teal)"/>
<circle cx="118" cy="60" r="8" style="fill:var(--amber-soft);stroke:var(--amber)"/>
<circle cx="136" cy="60" r="8" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<circle cx="136" cy="95" r="8" style="fill:var(--blue-soft);stroke:var(--blue)"/>
<circle cx="118" cy="95" r="8" style="fill:var(--teal-soft);stroke:var(--teal)"/>
<circle cx="100" cy="95" r="8" style="fill:var(--amber-soft);stroke:var(--amber)"/>
<circle cx="82" cy="95" r="8" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<circle cx="64" cy="95" r="8" style="fill:var(--blue-soft);stroke:var(--blue)"/>
<circle cx="46" cy="95" r="8" style="fill:var(--teal-soft);stroke:var(--teal)"/>
<circle cx="28" cy="95" r="8" style="fill:var(--amber-soft);stroke:var(--amber)"/>
<circle cx="28" cy="130" r="8" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<circle cx="46" cy="130" r="8" style="fill:var(--blue-soft);stroke:var(--blue)"/>
<circle cx="64" cy="130" r="8" style="fill:var(--teal-soft);stroke:var(--teal)"/>
<circle cx="82" cy="130" r="8" style="fill:var(--amber-soft);stroke:var(--amber)"/>
<circle cx="100" cy="130" r="8" style="fill:var(--magenta-soft);stroke:var(--magenta)"/>
<circle cx="118" cy="130" r="8" style="fill:var(--blue-soft);stroke:var(--blue)"/>
<circle cx="136" cy="130" r="8" style="fill:var(--teal-soft);stroke:var(--teal)"/>
<text x="80" y="162" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">each bead = 1 amino acid</text>
<ellipse cx="205" cy="50" rx="22" ry="8" style="fill:none;stroke:var(--teal)" stroke-width="2.5"/>
<ellipse cx="205" cy="66" rx="22" ry="8" style="fill:none;stroke:var(--teal)" stroke-width="2.5"/>
<ellipse cx="205" cy="82" rx="22" ry="8" style="fill:none;stroke:var(--teal)" stroke-width="2.5"/>
<ellipse cx="205" cy="98" rx="22" ry="8" style="fill:none;stroke:var(--teal)" stroke-width="2.5"/>
<ellipse cx="205" cy="114" rx="22" ry="8" style="fill:none;stroke:var(--teal)" stroke-width="2.5"/>
<ellipse cx="205" cy="130" rx="22" ry="8" style="fill:none;stroke:var(--teal)" stroke-width="2.5"/>
<text x="205" y="162" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">α-helix</text>
<polyline points="258,45 253,60 258,75 253,90 258,105 253,120 258,135" style="fill:none;stroke:var(--magenta)" stroke-width="3"/>
<polyline points="278,45 273,60 278,75 273,90 278,105 273,120 278,135" style="fill:none;stroke:var(--magenta)" stroke-width="3"/>
<polyline points="298,45 293,60 298,75 293,90 298,105 293,120 298,135" style="fill:none;stroke:var(--magenta)" stroke-width="3"/>
<line x1="255" y1="60" x2="272" y2="60" style="stroke:var(--ink-2)" stroke-width="1.5" stroke-dasharray="3 2"/>
<line x1="275" y1="60" x2="292" y2="60" style="stroke:var(--ink-2)" stroke-width="1.5" stroke-dasharray="3 2"/>
<line x1="255" y1="90" x2="272" y2="90" style="stroke:var(--ink-2)" stroke-width="1.5" stroke-dasharray="3 2"/>
<line x1="275" y1="90" x2="292" y2="90" style="stroke:var(--ink-2)" stroke-width="1.5" stroke-dasharray="3 2"/>
<line x1="255" y1="120" x2="272" y2="120" style="stroke:var(--ink-2)" stroke-width="1.5" stroke-dasharray="3 2"/>
<line x1="275" y1="120" x2="292" y2="120" style="stroke:var(--ink-2)" stroke-width="1.5" stroke-dasharray="3 2"/>
<text x="276" y="156" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">β-pleated</text>
<text x="276" y="169" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">sheet</text>
<path d="M350,140 C344,110 342,70 365,55 C385,42 410,55 400,75 C392,92 365,88 368,108 C371,126 400,128 415,115 C430,102 420,80 432,62 C442,48 462,55 460,78 C458,100 452,125 438,138 C420,152 390,150 380,138" style="fill:none;stroke:var(--teal)" stroke-width="4" stroke-linecap="round"/>
<line x1="400" y1="75" x2="432" y2="62" style="stroke:var(--red)" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="415" y1="115" x2="438" y2="138" style="stroke:var(--red)" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="368" y1="108" x2="380" y2="138" style="stroke:var(--red)" stroke-width="2" stroke-dasharray="4 3"/>
<text x="400" y="168" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--red)">dashed = R-group bonds</text>
<ellipse cx="530" cy="70" rx="30" ry="25" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="1.5"/>
<ellipse cx="592" cy="70" rx="30" ry="25" style="fill:var(--magenta-soft);stroke:var(--magenta)" stroke-width="1.5"/>
<ellipse cx="530" cy="126" rx="30" ry="25" style="fill:var(--amber-soft);stroke:var(--amber)" stroke-width="1.5"/>
<ellipse cx="592" cy="126" rx="30" ry="25" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="1.5"/>
<path d="M512,70 q6,-10 12,0 t12,0 t12,0" style="fill:none;stroke:var(--teal)" stroke-width="2"/>
<path d="M574,70 q6,-10 12,0 t12,0 t12,0" style="fill:none;stroke:var(--magenta)" stroke-width="2"/>
<path d="M512,126 q6,-10 12,0 t12,0 t12,0" style="fill:none;stroke:var(--amber)" stroke-width="2"/>
<path d="M574,126 q6,-10 12,0 t12,0 t12,0" style="fill:none;stroke:var(--blue)" stroke-width="2"/>
<text x="561" y="168" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">4 chains (hemoglobin)</text>
<text x="80" y="196" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Primary</text>
<text x="80" y="216" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">sequence of</text>
<text x="80" y="232" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">amino acids</text>
<text x="80" y="250" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">held by</text>
<text x="80" y="266" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">peptide bonds</text>
<text x="240" y="196" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Secondary</text>
<text x="240" y="216" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">local folding into</text>
<text x="240" y="232" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">helices or sheets</text>
<text x="240" y="250" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">held by H bonds</text>
<text x="240" y="266" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">in the backbone</text>
<text x="400" y="196" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Tertiary</text>
<text x="400" y="216" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">3D folding of</text>
<text x="400" y="232" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">the whole chain</text>
<text x="400" y="250" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">held by R-group</text>
<text x="400" y="266" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">interactions</text>
<text x="560" y="196" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Quaternary</text>
<text x="560" y="216" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">two or more</text>
<text x="560" y="232" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">polypeptide chains</text>
<text x="560" y="250" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">fitted together</text>
</svg>
<figcaption>Each level builds on the one before. Secondary structure is held by hydrogen bonds between backbone atoms; tertiary structure by interactions between R groups; quaternary structure exists only when a protein has more than one chain.</figcaption>
</figure>
<h4>Primary structure</h4>
<p>The <strong>sequence of amino acids</strong> in the chain, in order from the N-terminus to the C-terminus. It is held together by covalent <strong>peptide bonds</strong> and it is dictated by the gene (DNA) that codes for the protein. Primary structure is the foundation for everything else: the positions of the R groups along the chain decide how the chain will fold.</p>
<h4>Secondary structure</h4>
<p><strong>Local folding of the polypeptide chain into helices or sheets</strong>:</p>
<ul>
  <li><span class="term">α-helix</span> (alpha helix): the chain coils into a spiral, like a spring or a coiled phone cord.</li>
  <li><span class="term">β-pleated sheet</span> (beta-pleated sheet): sections of chain lie side by side and fold like the pleats of a paper fan.</li>
</ul>
<p>Both shapes are held by <strong>hydrogen bonds</strong> between atoms of the <strong>backbone</strong>: the slightly negative O of a C=O group on one amino acid attracts the slightly positive H of an N–H group a few amino acids further along. The R groups are not involved. Because every amino acid has these backbone atoms, helices and sheets can form almost anywhere along the chain.</p>
<h4>Tertiary structure</h4>
<p>The <strong>three-dimensional folding pattern of the whole polypeptide due to side-chain (R group) interactions</strong>. This is where the four R-group families pay off:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Interaction</th><th>Between</th><th>Strength</th></tr></thead>
<tbody>
<tr><td>Hydrophobic interactions</td><td>Non-polar R groups, which cluster together in the core of the protein, away from water</td><td>Weak individually, strong in large numbers</td></tr>
<tr><td>Hydrogen bonds</td><td>Polar R groups (for example the –OH of serine)</td><td>Weak</td></tr>
<tr><td>Ionic bonds</td><td>A positive R group (for example lysine) and a negative R group (for example aspartic acid)</td><td>Moderate</td></tr>
<tr><td>Disulfide bridges</td><td>The –SH groups of two cysteines, which join as a covalent S–S bond</td><td>Strong (covalent)</td></tr>
</tbody></table></div>
<h4>Quaternary structure</h4>
<p>A <strong>protein consisting of more than one polypeptide (amino acid) chain</strong>. The separate chains, each already folded into its own tertiary shape, fit together and are held by the same kinds of R-group interactions. The classic example is <strong>hemoglobin</strong>, made of four polypeptide chains, each holding an iron-containing heme group that carries one O<sub>2</sub>.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Most functional proteins do <strong>not</strong> have quaternary structure. Many proteins are a single polypeptide chain, so their structure stops at the tertiary level. Quaternary structure only exists when two or more chains come together.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Think of an old coiled phone cord. <strong>Primary</strong> = the order of the coloured beads on a straight string. <strong>Secondary</strong> = the string twisted into a coil (helix). <strong>Tertiary</strong> = the coiled cord scrunched into a specific tangled ball. <strong>Quaternary</strong> = several tangled balls stuck together.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Mixing up what holds secondary and tertiary structure. <strong>Secondary</strong>: hydrogen bonds between <strong>backbone</strong> atoms (C=O and N–H). <strong>Tertiary</strong>: interactions between <strong>R groups</strong> (hydrophobic, hydrogen, ionic, disulfide). Also, "quaternary" does not mean "a bigger, more folded tertiary"; it means <strong>more than one chain</strong>.</p></div>
<p data-tier="extra">One amino acid can change everything. In sickle-cell disease, a single change in the DNA swaps one amino acid in the hemoglobin β chain: glutamic acid (charged, water-loving) is replaced by valine (non-polar). That small non-polar patch makes hemoglobin molecules stick to each other in long fibres when oxygen is low, bending red blood cells into a sickle shape that can block small blood vessels. A change in primary structure changed the shape and therefore the function.</p>
<details class="check"><summary>Quick check: An enzyme is made of one polypeptide chain. Which levels of structure does it have, and which interactions hold its tertiary structure?</summary><div class="ans"><p><strong>Primary, secondary and tertiary</strong> (no quaternary, because there is only one chain). Its tertiary structure is held by R-group interactions: hydrophobic interactions, hydrogen bonds, ionic bonds and disulfide bridges.</p></div></details>

<h3 data-tier="essential">Denaturation</h3>
<p><span class="term">Denaturation</span> <strong>occurs when a protein loses its shape and becomes non-functional</strong>. Since shape determines function, a protein that has lost its shape can no longer do its job: an enzyme's active site no longer fits its substrate, and a transport protein no longer holds its cargo. The slide lists the causes:</p>
<ul>
  <li><strong>High temperatures</strong> (for example, above 40 °C for many human proteins).</li>
  <li><strong>Exposure to acidic, basic or salty environments.</strong></li>
</ul>
<p>Each cause works by breaking the <strong>weak</strong> interactions that hold the shape together:</p>
<ul>
  <li><strong>Heat</strong> gives atoms more kinetic energy. The chain vibrates so violently that hydrogen bonds, ionic bonds and hydrophobic interactions are shaken apart, and the chain unfolds.</li>
  <li><strong>Acids and bases</strong> change the H<sup>+</sup> concentration. Extra H<sup>+</sup> (acid) adds H<sup>+</sup> to –COO<sup>−</sup> groups, making them neutral; a base removes H<sup>+</sup> from –NH<sub>3</sub><sup>+</sup> groups. Either way, the charges on R groups change, so ionic bonds and hydrogen bonds that depended on those charges fall apart.</li>
  <li><strong>Salts</strong> flood the protein with ions that are attracted to the charged R groups, getting in between the positive and negative R groups that were holding each other.</li>
</ul>
<p>Denaturation unravels the <strong>quaternary, tertiary and secondary</strong> structure. It usually does <strong>not</strong> break the covalent <strong>peptide bonds</strong>, so the primary structure (the sequence) survives. A denatured protein still has all its amino acids in the same order; it has just lost its shape.</p>
<p>The slide adds that denaturation <strong>can lead to a temporary disruption of bonds or a permanent breakage</strong>. If the change is mild and conditions return to normal, some proteins refold on their own and work again. If the change is severe, the unfolded chains tangle and stick to other chains, and the damage is permanent. You cannot "uncook" an egg: the clear, runny egg white turns solid and white because its proteins have permanently denatured and clumped together.</p>
<h4>Dangerous or useful?</h4>
<p>The slide's three photos show both sides:</p>
<ul>
  <li><strong>A high fever (dangerous).</strong> Normal body temperature is about 37 °C. A fever above roughly 40 °C starts to denature the body's own proteins, including enzymes in the brain, which is why very high fevers are a medical emergency.</li>
  <li><strong>Straightening or curling hair (useful).</strong> Hair is made of the protein keratin. A flat iron's heat breaks hydrogen bonds in keratin and they re-form in the new, straight position (which is why humidity can bring the curl back). Chemical perms and relaxers go further and break and re-form disulfide bridges, which is why they last until the hair grows out.</li>
  <li><strong>Cooking meat (useful).</strong> Heat denatures the proteins in muscle, changing the texture of the meat. Denatured proteins are also easier for digestive enzymes to break down, and cooking kills bacteria by denaturing their proteins.</li>
</ul>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Meat gets more tender when it is cooked because its proteins denature. A high fever, on the other hand, is bad for exactly the same reason: your own proteins start to denature.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Denaturing is not the same as digesting. Digestion (hydrolysis) breaks peptide bonds and chops a protein into amino acids. Denaturation leaves the peptide bonds intact and only destroys the folded shape. Also avoid saying a denatured protein is "killed" or "melted"; say it has <strong>lost its 3D shape and therefore its function</strong>.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>A full answer to "what does it mean to denature a protein?" has three parts: (1) the protein <strong>loses its 3D shape</strong> (its secondary, tertiary and quaternary structure), (2) it therefore <strong>becomes non-functional</strong>, (3) caused by <strong>high temperature, pH changes (acid or base) or salt</strong>. Add that the <strong>peptide bonds are usually not broken</strong> for full marks.</p></div>
<details class="check"><summary>Quick check: Why is a fever of 42 °C dangerous, while a temperature of 30 °C in your hands on a cold day does not permanently damage your proteins?</summary><div class="ans"><p>At 42 °C, the extra kinetic energy breaks the hydrogen bonds, ionic bonds and other weak interactions holding proteins (including enzymes) in shape, so they <strong>denature</strong> and stop working, sometimes permanently. At low temperature, proteins are not denatured; molecules simply move more slowly, so reactions slow down. When the tissue warms up, the proteins work normally again.</p></div></details>

<h3 data-tier="likely">Research: the nine essential amino acids</h3>
<p>The last slide assigned group research on the nine essential amino acids: their function in the body, a food source, deficiency symptoms and R-group features. A summary of the findings:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Amino acid</th><th>R-group features</th><th>Main roles</th><th>Food sources</th></tr></thead>
<tbody>
<tr><td>Valine</td><td>Non-polar, hydrophobic, branched</td><td>Muscle growth and repair; energy</td><td>Meat, dairy, soy, legumes</td></tr>
<tr><td>Isoleucine</td><td>Non-polar, hydrophobic, branched</td><td>Muscle metabolism; energy</td><td>Meat, fish, eggs, nuts</td></tr>
<tr><td>Leucine</td><td>Non-polar, hydrophobic, branched</td><td>Muscle protein synthesis; tissue repair</td><td>Meat, fish, dairy, soy</td></tr>
<tr><td>Methionine</td><td>Non-polar; contains sulfur</td><td>Protein synthesis (the first amino acid in a new chain); making antioxidants</td><td>Meat, fish, eggs, nuts</td></tr>
<tr><td>Lysine</td><td>Basic, positively charged</td><td>Collagen production; immune function</td><td>Meat, fish, dairy, legumes</td></tr>
<tr><td>Threonine</td><td>Polar, uncharged; has an –OH group</td><td>Collagen and elastin production; immune function</td><td>Meat, dairy, eggs, beans</td></tr>
<tr><td>Histidine</td><td>Basic; contains a nitrogen ring (imidazole)</td><td>Used to make histamine; growth and tissue repair</td><td>Meat, fish, dairy, eggs</td></tr>
<tr><td>Phenylalanine</td><td>Non-polar, hydrophobic; benzene ring</td><td>Converted to tyrosine and to neurotransmitters</td><td>Meat, eggs, dairy, soy, nuts</td></tr>
<tr><td>Tryptophan</td><td>Mostly non-polar; large double ring (indole)</td><td>Used to make serotonin, melatonin and niacin (vitamin B<sub>3</sub>)</td><td>Turkey, chicken, eggs, dairy, seeds</td></tr>
</tbody></table></div>
<p>Deficiency symptoms are similar across the group, and the reason is the same: without enough of even one essential amino acid, the body cannot finish building the proteins that need it. Typical results are <strong>fatigue, weakness, muscle loss, poor growth and a weakened immune system</strong>, plus specific effects tied to each amino acid's role (for example, mood and sleep changes with too little tryptophan).</p>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
  <li><strong>DNA codes for proteins</strong> (codons of 3 bases → 1 amino acid; tRNA brings amino acids to the ribosome). Proteins do almost everything: structure, transport, signalling, movement, regulation and catalysis (enzymes).</li>
  <li>Proteins are polymers of <strong>20 amino acids</strong>; the specific sequence makes each polypeptide unique. <strong>9 are essential</strong> and must come from the diet.</li>
  <li>An amino acid = <strong>central carbon + amino group (–NH<sub>2</sub>) + carboxyl group (–COOH) + hydrogen + R group</strong>. Only the R group differs.</li>
  <li>R groups are <strong>non-polar</strong> (glycine), <strong>polar</strong> (serine), <strong>positively charged</strong> (histidine) or <strong>negatively charged</strong> (aspartic acid). Polarity comes from O, N or S in the R group.</li>
  <li><strong>Peptide bonds</strong> form by condensation between the carboxyl of one amino acid and the amino group of the next, releasing H<sub>2</sub>O. Ends: <strong>N-terminus</strong> and <strong>C-terminus</strong>. Small, polar R groups make peptides more soluble.</li>
  <li>Structure: <strong>primary</strong> (sequence, peptide bonds), <strong>secondary</strong> (α-helix, β-pleated sheet, backbone H bonds), <strong>tertiary</strong> (3D folding, R-group interactions), <strong>quaternary</strong> (more than one chain). Shape determines function.</li>
  <li><strong>Denaturation</strong>: loss of shape and function caused by high temperature (above about 40 °C), acids, bases or salt. Peptide bonds usually survive. It can be temporary or permanent, and dangerous (fever) or useful (cooking, hair styling).</li>
</ul>
`
});

/* ===================================================================
   1.07 ENZYMES
   =================================================================== */
window.LESSONS.push({
  id: "1.07",
  title: "Enzymes",
  stage: "c2",
  where: "Every reaction in the cell",
  summary: "Enzymes are protein catalysts that speed up reactions by lowering activation energy, without being used up. Learn the induced fit model, how substrate concentration, enzyme concentration, temperature and pH change the reaction rate, what cofactors and coenzymes do, and how cells switch enzymes on and off with allosteric regulation, competitive inhibition and feedback inhibition.",
  objectives: [
    "Recognize enzymes by the -ase suffix and state the substrate and job of amylase, lipase, carbohydrase, protease and lactase.",
    "Describe enzymes as protein catalysts that speed up reactions without being consumed, by lowering activation energy, in both exergonic (catabolic) and endergonic (anabolic) reactions.",
    "Explain the induced fit model: substrate binds the active site, forms an enzyme–substrate complex, and the active site changes shape to fit.",
    "Sketch and explain rate graphs for substrate concentration, enzyme concentration, temperature and pH, including saturation, optimum and denaturation.",
    "Distinguish cofactors (inorganic metal ions) from coenzymes (organic molecular shuttles) and explain how they activate an enzyme.",
    "Explain allosteric activation and inhibition, competitive and non-competitive inhibition, and feedback inhibition using the threonine to isoleucine pathway.",
    "Apply enzyme ideas to everyday problems such as fresh pineapple in gelatin, fever, and digestion in older adults."
  ],
  html: `
<h3 data-tier="essential">Naming conventions</h3>
<p>Many enzymes are easy to spot because their names <strong>end with the suffix -ase</strong>. The first part of the name usually tells you the <span class="term">substrate</span>, the molecule the enzyme acts on: <em>lact</em>ase acts on lactose, <em>lip</em>ase acts on lipids. The slide asks you to recall five digestive enzymes from Grade 11 and to say what they do:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Enzyme</th><th>Substrate → products</th><th>Where it works</th></tr></thead>
<tbody>
<tr><td>Amylase</td><td>Starch → maltose (shorter sugars)</td><td>Mouth (salivary amylase) and small intestine (pancreatic amylase)</td></tr>
<tr><td>Lipase</td><td>Lipids (triglycerides) → glycerol + fatty acids</td><td>Small intestine (pancreatic lipase)</td></tr>
<tr><td>Carbohydrase</td><td>General name for any enzyme that breaks carbohydrates into simple sugars (amylase, lactase and sucrase are all carbohydrases)</td><td>Mouth and small intestine</td></tr>
<tr><td>Protease</td><td>Proteins → shorter peptides and amino acids</td><td>Stomach (pepsin) and small intestine (trypsin)</td></tr>
<tr><td>Lactase</td><td>Lactose → glucose + galactose</td><td>Small intestine</td></tr>
</tbody></table></div>
<p><strong>How do they function?</strong> All five are digestive enzymes that carry out <span class="term">hydrolysis</span>: they use a water molecule to break the bond holding a polymer together (glycosidic bonds in carbohydrates, ester bonds in lipids, peptide bonds in proteins). That turns large food molecules into small monomers that can be absorbed into the blood. Each enzyme acts on only one type of substrate, because its active site fits only that molecule. This is called <span class="term">specificity</span>.</p>
<p data-tier="extra">Some enzymes were named before the -ase convention became standard, so their names do not follow the rule: pepsin and trypsin (proteases) are the ones you are most likely to meet. People who stop making enough lactase as adults cannot digest lactose; it passes to the large intestine, where bacteria ferment it and cause the symptoms of lactose intolerance.</p>
<details class="check"><summary>Quick check: Name the substrate and products of lactase, and the type of reaction it catalyzes.</summary><div class="ans"><p>Substrate: <strong>lactose</strong> (milk sugar, a disaccharide). Products: <strong>glucose + galactose</strong>. The reaction is <strong>hydrolysis</strong>: water is used to break the glycosidic bond between the two monosaccharides.</p></div></details>

<h3 data-tier="essential">What enzymes do: protein catalysts</h3>
<p>Enzymes are <strong>protein catalysts</strong>. A <span class="term">catalyst</span> <strong>speeds up the rate of a chemical reaction without being consumed by the reaction</strong>. When the reaction is over, the enzyme is unchanged and immediately ready for another substrate molecule, so one enzyme molecule can be reused thousands of times.</p>
<p>Three words describe every enzyme reaction:</p>
<ul>
  <li><span class="term">Substrate</span>: the reactant the enzyme acts on.</li>
  <li><span class="term">Active site</span>: the pocket or groove on the enzyme where the substrate binds and the reaction happens. Its shape and the R groups that line it come from the enzyme's tertiary structure.</li>
  <li><span class="term">Product</span>: what the substrate is turned into.</li>
</ul>
<p><strong>Why do cells need enzymes at all?</strong> Most reactions in a cell would happen far too slowly at body temperature to keep you alive. Heating the cell to speed them up is not an option, because heat would denature the cell's proteins (Lesson 1.06). Enzymes solve the problem: they make reactions fast at a safe 37 °C. And because each enzyme is specific, the cell can control exactly which reactions happen by controlling which enzymes are present and active.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Because enzymes are <strong>proteins</strong>, everything from the protein lesson applies to them: their function depends on their 3D shape, and anything that denatures a protein (high temperature, wrong pH, salt) will stop an enzyme from working. Most enzyme questions are really shape questions.</p></div>
<p data-tier="extra">Some enzymes are astonishingly fast. Catalase, which breaks down toxic hydrogen peroxide in your cells, can process millions of H<sub>2</sub>O<sub>2</sub> molecules per second per enzyme molecule.</p>

<h3 data-tier="essential">Lowering activation energy</h3>
<p>Every reaction, even one that releases energy, needs an initial push to get started. Bonds in the reactants must be strained or broken before new bonds can form. This energy "hill" is the <span class="term">activation energy (E<sub>A</sub>)</span>. Enzymes work by <strong>lowering the activation energy required by the reaction</strong>. With a lower hill to climb, many more substrate molecules have enough energy to react at body temperature, so the reaction goes much faster.</p>
<p>The slide shows this for both kinds of reaction:</p>
<ul>
  <li><span class="term">Exergonic</span> reactions <strong>release energy</strong>: the products have less energy than the reactants. Example: <strong>catabolic reactions</strong>, which break large molecules down (digesting starch, cellular respiration).</li>
  <li><span class="term">Endergonic</span> reactions <strong>absorb energy</strong>: the products have more energy than the reactants. Example: <strong>anabolic reactions</strong>, which build large molecules (making proteins, DNA or glycogen).</li>
</ul>
<figure class="diagram">
<svg viewBox="0 0 640 314" role="img" aria-labelledby="b107-t1">
<title id="b107-t1">Two energy diagrams. Left, an exergonic reaction: reactants start at a higher free energy than products. Without an enzyme the curve climbs a tall hill (large activation energy); with an enzyme the hill is much lower (smaller activation energy). The overall energy change, delta G, is the same in both. Right, an endergonic reaction: products end higher than reactants; again the enzyme lowers the hill but does not change the start or end energy.</title>
<defs>
<marker id="b107-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
<marker id="b107-arb" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--blue)"/></marker>
</defs>
<text x="225" y="22" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Exergonic: releases energy (e.g. catabolic)</text>
<line x1="50" y1="270" x2="50" y2="40" style="stroke:var(--ink-2)" stroke-width="1.5" marker-end="url(#b107-ar)"/>
<line x1="50" y1="270" x2="400" y2="270" style="stroke:var(--ink-2)" stroke-width="1.5" marker-end="url(#b107-ar)"/>
<text x="34" y="155" text-anchor="middle" font-family="inherit" font-size="12" transform="rotate(-90 34 155)" style="fill:var(--ink-2)">Free energy</text>
<text x="225" y="288" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">Progress of reaction</text>
<line x1="140" y1="150" x2="395" y2="150" style="stroke:var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="210" y1="55" x2="312" y2="55" style="stroke:var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
<line x1="210" y1="110" x2="352" y2="110" style="stroke:var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
<path d="M60,150 L140,150 C175,150 185,55 210,55 C235,55 245,235 280,235 L390,235" style="fill:none;stroke:var(--ink-2)" stroke-width="3"/>
<path d="M140,150 C175,150 188,110 210,110 C232,110 245,235 280,235" style="fill:none;stroke:var(--blue)" stroke-width="3"/>
<text x="92" y="142" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Reactants</text>
<text x="330" y="252" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Products</text>
<line x1="300" y1="148" x2="300" y2="58" style="stroke:var(--ink-2)" stroke-width="2" marker-start="url(#b107-ar)" marker-end="url(#b107-ar)"/>
<text x="308" y="86" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink-2)">Eₐ without</text>
<text x="308" y="100" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink-2)">enzyme</text>
<line x1="340" y1="148" x2="340" y2="113" style="stroke:var(--blue)" stroke-width="2" marker-start="url(#b107-arb)" marker-end="url(#b107-arb)"/>
<text x="348" y="128" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--blue)">Eₐ with</text>
<text x="348" y="142" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--blue)">enzyme</text>
<line x1="378" y1="153" x2="378" y2="232" style="stroke:var(--ink)" stroke-width="1.5" marker-end="url(#b107-ar)"/>
<text x="370" y="200" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--ink)">ΔG (same)</text>
<text x="535" y="22" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Endergonic: absorbs energy</text>
<text x="535" y="38" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">(e.g. anabolic)</text>
<line x1="440" y1="270" x2="440" y2="48" style="stroke:var(--ink-2)" stroke-width="1.5" marker-end="url(#b107-ar)"/>
<line x1="440" y1="270" x2="632" y2="270" style="stroke:var(--ink-2)" stroke-width="1.5" marker-end="url(#b107-ar)"/>
<text x="426" y="160" text-anchor="middle" font-family="inherit" font-size="12" transform="rotate(-90 426 160)" style="fill:var(--ink-2)">Free energy</text>
<text x="535" y="288" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink-2)">Progress of reaction</text>
<line x1="475" y1="235" x2="625" y2="235" style="stroke:var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>
<path d="M450,235 L475,235 C500,235 507,55 525,55 C543,55 548,150 572,150 L625,150" style="fill:none;stroke:var(--ink-2)" stroke-width="3"/>
<path d="M475,235 C500,235 510,110 525,110 C540,110 548,150 572,150" style="fill:none;stroke:var(--blue)" stroke-width="3"/>
<text x="470" y="256" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Reactants</text>
<text x="600" y="142" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Products</text>
<line x1="615" y1="232" x2="615" y2="154" style="stroke:var(--ink)" stroke-width="1.5" marker-end="url(#b107-ar)"/>
<text x="608" y="200" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--ink)">ΔG (same)</text>
<line x1="150" y1="304" x2="180" y2="304" style="stroke:var(--ink-2)" stroke-width="3"/>
<text x="186" y="308" font-family="inherit" font-size="12" style="fill:var(--ink)">without enzyme</text>
<line x1="330" y1="304" x2="360" y2="304" style="stroke:var(--blue)" stroke-width="3"/>
<text x="366" y="308" font-family="inherit" font-size="12" style="fill:var(--ink)">with enzyme (lower Eₐ)</text>
</svg>
<figcaption>An enzyme lowers the activation energy (the height of the hill) for exergonic and endergonic reactions alike. The start and end energies, and so the overall energy change (ΔG), are unaffected by the enzyme.</figcaption>
</figure>
<p>Notice what the enzyme does <strong>not</strong> change: the reactants start at the same energy and the products end at the same energy, so the overall energy change (labelled <strong>ΔG</strong> on the slide, "ΔG is unaffected by enzyme") is identical with or without the enzyme. An enzyme is like a tunnel through a mountain: you end up in the same valley, but you get there faster because you do not have to climb over the top.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Enzymes do <strong>not</strong> supply energy, do <strong>not</strong> change how much energy a reaction releases or absorbs, and do <strong>not</strong> make an endergonic reaction happen on its own (an endergonic reaction still needs an energy input, usually from ATP). They only lower E<sub>A</sub> so the reaction goes faster. Also, do not confuse the two pairs of words: exergonic/endergonic describe the <em>reaction</em>; "with/without enzyme" describes the <em>path</em>.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>Be ready to sketch an energy diagram and label: reactants, products, E<sub>A</sub> without enzyme, E<sub>A</sub> with enzyme, and ΔG. Decide first whether the products end lower (exergonic, catabolic) or higher (endergonic, anabolic) than the reactants.</p></div>

<h3 data-tier="essential">The induced fit model</h3>
<p>How does an enzyme actually lower the activation energy? The class uses the <span class="term">induced fit model</span>:</p>
<ul>
  <li><strong>Substrate(s) bind to the active site</strong>, forming an <span class="term">enzyme–substrate complex</span>.</li>
  <li>The <strong>active site undergoes a conformational change</strong> (a change of shape) <strong>to better accommodate the substrate(s)</strong>. The substrate "induces" the enzyme to fit more tightly around it, hence "induced fit".</li>
</ul>
<p>The slide's diagram walks through one full cycle:</p>
<ol class="steps">
  <li><p class="step-head">Substrates enter the active site</p><p>The enzyme changes shape so its active site embraces the substrates (induced fit).</p></li>
  <li><p class="step-head">Substrates are held in place</p><p>Weak interactions, such as hydrogen bonds and ionic bonds between the substrates and the R groups lining the active site, hold the substrates in the enzyme–substrate complex.</p></li>
  <li><p class="step-head">The active site lowers E<sub>A</sub></p><p>The active site and its R groups speed up the reaction by acting as a <strong>template</strong> that holds substrates in the right orientation, <strong>stressing</strong> the bonds that need to break, providing a <strong>favourable microenvironment</strong> (for example, a pocket with the right charge or pH), and sometimes <strong>taking part directly</strong> in the reaction.</p></li>
  <li><p class="step-head">Substrates are converted into products</p><p>Bonds break and form while the substrates are held in the active site.</p></li>
  <li><p class="step-head">Products are released</p><p>The products no longer fit the active site as well, so they let go.</p></li>
  <li><p class="step-head">The active site is available again</p><p>The enzyme returns to its original shape, unchanged, ready for two new substrate molecules.</p></li>
</ol>
<p data-tier="likely">An older idea, the <strong>lock-and-key model</strong>, pictured the active site as a rigid lock that only the exactly-shaped substrate "key" could fit. Induced fit improves on it: the active site is flexible, more like a glove that tightens around a hand. That flexibility is part of how the enzyme strains the substrate's bonds and lowers the activation energy.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Induced fit is a <strong>handshake</strong>, not a lock. Two hands roughly the right shape come together, and both adjust their grip to fit snugly. When the handshake ends, both hands go back to their usual shape.</p></div>
<details class="check"><summary>Quick check: Why can a single enzyme molecule catalyze the same reaction over and over?</summary><div class="ans"><p>Because a catalyst is <strong>not consumed</strong> by the reaction. After the products are released, the active site returns to its original shape and is available for new substrate molecules (step 6 of the induced fit cycle).</p></div></details>

<h3 data-tier="essential">Factors affecting enzyme activity</h3>
<p>The rate of an enzyme-catalyzed reaction depends on how often substrate molecules meet active sites, and on whether those active sites have the right shape. Four factors from the slides change one or both of those things. The graphs below summarize them; learn the <strong>shape</strong> of each graph and the <strong>reason</strong> for each part of the shape.</p>
<figure class="diagram">
<svg viewBox="0 0 640 224" role="img" aria-labelledby="b107-t2">
<title id="b107-t2">Four graphs of reaction rate. 1, substrate amount: rate rises steeply then levels off at a plateau, the saturation point, where all active sites are busy. 2, enzyme amount: rate rises in a straight line, proportional to enzyme concentration, when substrate is in excess. 3, temperature: rate rises gradually to an optimum of about 37 degrees Celsius for a human enzyme, then drops steeply as the enzyme denatures. 4, pH: three bell-shaped curves with different optimum pH values, pepsin about 2, salivary amylase about 7 and pancreatic lipase about 8.</title>
<defs><marker id="b107-ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<text x="93" y="22" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">1. Substrate amount</text>
<line x1="29" y1="186" x2="29" y2="44" style="stroke:var(--ink-2)" stroke-width="1.5" marker-end="url(#b107-ar2)"/>
<line x1="29" y1="186" x2="157" y2="186" style="stroke:var(--ink-2)" stroke-width="1.5" marker-end="url(#b107-ar2)"/>
<text x="17" y="115" text-anchor="middle" font-family="inherit" font-size="11" transform="rotate(-90 17 115)" style="fill:var(--ink-2)">rate of reaction</text>
<text x="93" y="204" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">substrate concentration</text>
<path d="M29,186 C50,110 72,78 108,72 L154,72" style="fill:none;stroke:var(--blue)" stroke-width="3"/>
<line x1="102" y1="66" x2="114" y2="78" style="stroke:var(--red)" stroke-width="2"/>
<line x1="114" y1="66" x2="102" y2="78" style="stroke:var(--red)" stroke-width="2"/>
<text x="110" y="56" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--red)">saturation</text>
<text x="115" y="100" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">all active</text>
<text x="115" y="114" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">sites busy</text>
<text x="253" y="22" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">2. Enzyme amount</text>
<line x1="189" y1="186" x2="189" y2="44" style="stroke:var(--ink-2)" stroke-width="1.5" marker-end="url(#b107-ar2)"/>
<line x1="189" y1="186" x2="317" y2="186" style="stroke:var(--ink-2)" stroke-width="1.5" marker-end="url(#b107-ar2)"/>
<text x="253" y="204" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">enzyme concentration</text>
<line x1="189" y1="186" x2="305" y2="62" style="stroke:var(--blue)" stroke-width="3"/>
<text x="272" y="150" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">proportional</text>
<text x="272" y="172" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">(substrate in excess)</text>
<text x="413" y="22" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">3. Temperature</text>
<line x1="349" y1="186" x2="349" y2="44" style="stroke:var(--ink-2)" stroke-width="1.5" marker-end="url(#b107-ar2)"/>
<line x1="349" y1="186" x2="477" y2="186" style="stroke:var(--ink-2)" stroke-width="1.5" marker-end="url(#b107-ar2)"/>
<text x="413" y="216" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">temperature</text>
<line x1="410" y1="64" x2="410" y2="186" style="stroke:var(--line)" stroke-width="1.5" stroke-dasharray="4 3"/>
<path d="M352,180 C375,165 393,72 410,64 C424,58 432,120 440,186" style="fill:none;stroke:var(--blue)" stroke-width="3"/>
<text x="410" y="54" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink)">optimum</text>
<text x="410" y="200" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink)">≈ 37 °C</text>
<text x="392" y="166" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">faster</text>
<text x="444" y="104" font-family="inherit" font-size="11" style="fill:var(--red)">denatures</text>
<text x="573" y="22" text-anchor="middle" font-family="inherit" font-size="12" font-weight="700" style="fill:var(--ink)">4. pH</text>
<line x1="509" y1="186" x2="509" y2="44" style="stroke:var(--ink-2)" stroke-width="1.5" marker-end="url(#b107-ar2)"/>
<line x1="509" y1="186" x2="637" y2="186" style="stroke:var(--ink-2)" stroke-width="1.5" marker-end="url(#b107-ar2)"/>
<text x="573" y="204" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--ink-2)">pH</text>
<path d="M514,186 C526,186 528,64 536,64 C544,64 546,186 558,186" style="fill:none;stroke:var(--red)" stroke-width="2.5"/>
<path d="M552,186 C564,186 566,64 574,64 C582,64 584,186 596,186" style="fill:none;stroke:var(--blue)" stroke-width="2.5"/>
<path d="M589,186 C601,186 603,64 611,64 C619,64 621,186 633,186" style="fill:none;stroke:var(--magenta)" stroke-width="2.5"/>
<text x="541" y="56" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--red)">pepsin ~2</text>
<text x="574" y="42" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--blue)">amylase ~7</text>
<text x="611" y="56" text-anchor="middle" font-family="inherit" font-size="11" style="fill:var(--magenta)">lipase ~8</text>
</svg>
<figcaption>The four factors; every y-axis is the rate of reaction. The pH axis is not drawn to scale; the curves show that each enzyme has its own optimum: pepsin (stomach) about pH 2, salivary amylase (mouth) about pH 7, pancreatic lipase (small intestine) about pH 8.</figcaption>
</figure>

<h4>1. Substrate concentration</h4>
<p>The slide asks: <strong>why does increasing substrate concentration initially increase the rate of reaction and then plateau?</strong></p>
<ul>
  <li><strong>At low substrate concentration</strong>, many active sites are empty at any moment. Each extra substrate molecule finds a free active site, so adding substrate means more enzyme–substrate complexes per second and a faster rate.</li>
  <li><strong>At high substrate concentration</strong>, every active site is occupied almost all the time. The enzymes are working as fast as they can, so adding more substrate cannot increase the rate. This is the <span class="term">point of saturation</span>, and beyond it, as the slide says, <strong>increasing concentration does not affect reaction rate</strong>. The limiting factor is now the number of enzyme molecules.</li>
</ul>
<p>Think of a grocery store with five cashiers. When a few customers arrive, more customers means more checkouts per minute. Once all five cashiers are busy and a line has formed, sending in more customers only makes the line longer; the checkout rate stays the same.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Initially, more substrate means more "stuff" for the enzymes to act on, so the rate goes up. Eventually the enzymes become <strong>saturated</strong> because the substrate concentration is so high, and the rate levels off.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>Use the words <strong>active sites</strong> and <strong>saturated (occupied)</strong> in your explanation. "The enzyme gets tired" or "the enzyme is used up" will not earn the mark: enzymes are not consumed.</p></div>

<h4>2. Enzyme concentration</h4>
<p><strong>Increasing enzyme concentration speeds up reaction rates proportionally</strong>: twice as many enzyme molecules means twice as many active sites, and (as long as there is plenty of substrate) twice the rate. That is why the graph is a straight line.</p>
<p>The slide adds a real-world limit: <strong>in cells, this growth is capped by substrate limits and high energy costs</strong>. If you keep adding enzyme, eventually there is not enough substrate to keep every active site busy, and the line levels off. And making enzymes is expensive: every enzyme is a protein the cell must build from amino acids using energy from ATP, so a cell makes only as much of each enzyme as it needs.</p>

<h4>3. Temperature</h4>
<p><strong>Enzyme-catalyzed reactions increase in speed with an increase in temperature, but the enzyme begins to denature beyond a certain point.</strong> The graph has two very different halves:</p>
<ul>
  <li><strong>Rising side:</strong> as temperature rises, molecules gain kinetic energy and move faster. Enzymes and substrates collide more often and with more energy, so the rate goes up.</li>
  <li><strong>Falling side:</strong> above a certain temperature, the extra energy shakes apart the hydrogen bonds and other weak interactions holding the enzyme's 3D shape. The active site changes shape, the substrate no longer fits, and the rate drops steeply. The enzyme is <strong>denatured</strong>.</li>
</ul>
<p>Between the two is the peak: <strong>every enzyme has an optimal temperature at which it works best</strong>. The slide compares two enzymes: <strong>a typical human enzyme works best at approximately 37 °C</strong> (body temperature), while <strong>an enzyme from a heat-tolerant organism works best at approximately 76 °C</strong>. Heat-tolerant (thermophilic) bacteria live in hot springs, and their enzymes are held together by more or stronger bonds, so they keep their shape at temperatures that would denature a human enzyme.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The temperature curve is <strong>not symmetrical</strong>. It rises gradually and falls sharply, because heating speeds up collisions gradually but denaturation destroys the active site quickly. Also, cold does <strong>not</strong> denature enzymes. At low temperature the enzyme keeps its shape; molecules just move slowly, so the rate is low. Warm it up and it works again. That is why refrigerators slow food spoilage.</p></div>
<p data-tier="extra">Heat-tolerant enzymes are useful in labs. Taq polymerase, an enzyme from a bacterium found in hot springs, copies DNA at about 72 °C and survives repeated heating to about 95 °C, which is what makes the polymerase chain reaction (PCR) used in COVID tests and forensic DNA work possible.</p>

<h4>4. pH</h4>
<p><strong>Every enzyme also has an optimal pH within which it works best.</strong> The slide's graph shows three digestive enzymes, each working best in the part of the digestive system where it is found:</p>
<ul>
  <li><strong>Pepsin</strong> (a protease in the stomach): optimum about <strong>pH 2</strong>, matching stomach acid.</li>
  <li><strong>Salivary amylase</strong> (mouth): optimum about <strong>pH 7</strong>, neutral like saliva.</li>
  <li><strong>Pancreatic lipase</strong> (small intestine): optimum about <strong>pH 8</strong>, slightly basic like the intestine after bicarbonate from the pancreas neutralizes stomach acid.</li>
</ul>
<p>Why does pH matter? pH measures H<sup>+</sup> concentration, and H<sup>+</sup> ions add to or remove from the charged R groups of the enzyme (–COO<sup>−</sup> and –NH<sub>3</sub><sup>+</sup>), especially those in the active site. Changing those charges breaks ionic and hydrogen bonds, which changes the shape of the active site and its ability to grip the substrate. A small change from the optimum slows the enzyme; a large change denatures it. That is also why salivary amylase stops working once your food reaches the stomach.</p>
<details class="check"><summary>Review question 3: Why is it important for the body to maintain a proper temperature and pH at all times?</summary><div class="ans"><p>Enzymes are <strong>proteins</strong>, so they need an optimal range of temperature and pH to keep their 3D shape and work properly. Outside that range they slow down, and too far outside it they <strong>denature</strong>: the active site loses its shape, so substrates cannot bind and the reactions the body depends on stop. For the body, that means about <strong>37 °C</strong> and a pH matched to each location (about 7.4 in blood, which the class key rounds to 7.5, and about 2 in the stomach).</p></div></details>

<h3 data-tier="essential">Cofactors and coenzymes</h3>
<p>Some enzymes cannot work on their own. They need <strong>cofactors or coenzymes</strong>: <strong>nonprotein helper molecules that bind to inactive enzymes and alter their active sites</strong>, switching them on. The inactive protein on its own is called an <span class="term">apoenzyme</span>; once its helper binds, the complete, active enzyme is called a <span class="term">holoenzyme</span>. The slide's diagram shows four steps:</p>
<ol class="steps">
  <li><p class="step-head">Inactive apoenzyme</p><p>The enzyme alone is inactive; its active site is not yet the right shape.</p></li>
  <li><p class="step-head">Active holoenzyme</p><p>A metal ion cofactor (for example Mg<sup>2+</sup>) binds to the enzyme and completes the active site.</p></li>
  <li><p class="step-head">Substrate binds</p><p>The substrate now fits the active site.</p></li>
  <li><p class="step-head">Catalysis occurs</p><p>The reaction happens and the products are released.</p></li>
</ol>
<div class="compare">
  <div><h4>Cofactors</h4><ul><li><strong>Inorganic metal ions</strong>, such as Mg<sup>2+</sup>, Zn<sup>2+</sup>, Fe<sup>2+</sup> and Cu<sup>2+</sup>.</li><li><strong>Stabilize the enzyme's shape</strong> (they bond to R groups and hold the active site in its working form).</li><li><strong>Attract the substrate's electrons</strong>: the positive ion pulls on electron-rich parts of the substrate, holding it in place and straining the bonds that need to break.</li></ul></div>
  <div><h4>Coenzymes</h4><ul><li><strong>Organic molecules</strong> (carbon-based), many made from vitamins.</li><li>Can also act as <strong>molecular shuttles</strong>, transporting <strong>electrons or protons</strong> (H<sup>+</sup>) from one enzyme to another.</li><li>Example from the slide: in the electron transport chain (Unit 2), <strong>NADH</strong> and <strong>coenzyme Q</strong> are circled; both carry electrons between enzymes.</li></ul></div>
</div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Co<em>e</em>nzyme</strong> = <strong>organic</strong>: both are about living (carbon) chemistry, and "co-enzyme" sounds like a fellow molecule. <strong>Co<em>factor</em></strong> = a <strong>metal ion</strong>, the kind of thing a factory works with.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Neither helper is a protein. Some textbooks use "cofactor" as an umbrella term for every helper, including coenzymes. In this course, keep them separate: <strong>cofactor = inorganic metal ion</strong>, <strong>coenzyme = organic molecule</strong>.</p></div>
<p data-tier="extra">This is why you need vitamins. NAD<sup>+</sup> is built from niacin (vitamin B<sub>3</sub>, which your body can also make from the amino acid tryptophan), and FAD from riboflavin (vitamin B<sub>2</sub>). Without enough of these vitamins, the enzymes that depend on them cannot work, and energy metabolism suffers.</p>
<details class="check"><summary>Review question 6: What is the functional role of a coenzyme or a cofactor in an enzyme-catalyzed reaction?</summary><div class="ans"><p>Both are nonprotein <strong>helpers</strong> that bind to an inactive enzyme and alter its active site so it can work. <strong>Cofactors</strong> are <strong>inorganic</strong> metal ions that stabilize the enzyme's shape and attract the substrate's electrons (helping with <strong>direction</strong>: positioning the substrate). <strong>Coenzymes</strong> are <strong>organic</strong> molecules that often act as shuttles, <strong>transporting</strong> electrons or protons (for example NAD<sup>+</sup>/NADH).</p></div></details>

<h3 data-tier="essential">Regulating enzyme activity</h3>
<p>A cell does not want every enzyme running at full speed all the time. Making a product the cell does not need wastes energy and raw materials, and letting a product build up can be harmful. So <strong>enzymes are controlled to increase or decrease the rate of reaction</strong>. The slide lists where that control comes from:</p>
<ul>
  <li><strong>Negative feedback mechanisms that maintain homeostasis</strong> (the most common). The product of a pathway slows down the pathway that makes it, keeping levels steady.</li>
  <li><strong>Certain medications</strong>, many of which work by inhibiting a specific enzyme.</li>
  <li><strong>Toxins</strong>, which may interfere with normal enzyme activity.</li>
</ul>
<p data-tier="extra">Examples: ibuprofen and aspirin block the COX enzymes that make the signalling molecules behind pain and inflammation; penicillin blocks a bacterial enzyme that builds the cell wall. On the toxin side, cyanide shuts down an enzyme of the electron transport chain (Unit 2), and heavy metals such as mercury and lead bind to the –SH groups of cysteine R groups and distort enzyme shape.</p>
<p>Enzymes are regulated in two main ways: something binds to a site <em>other than</em> the active site (allosteric regulation), or something binds <em>in</em> the active site (competitive inhibition).</p>

<h3 data-tier="essential">Allosteric regulation</h3>
<p>In <span class="term">allosteric regulation</span>, a <strong>regulator binds to an allosteric site, causing a change to the active site</strong>. An <span class="term">allosteric site</span> is a binding site on the enzyme that is <strong>separate from the active site</strong> ("allo" = other, "steric" = place). Because the whole enzyme is one connected folded structure, a change in shape at the allosteric site spreads to the active site, like squeezing one side of a balloon changes the shape of the other side.</p>
<ul>
  <li><span class="term">Allosteric activators</span> <strong>stabilize the active form</strong> of the enzyme. They hold the active site in the shape that fits the substrate, so the enzyme works.</li>
  <li><span class="term">Allosteric inhibitors</span> <strong>stabilize the inactive form</strong>. They hold the active site in a shape the substrate cannot fit. An allosteric inhibitor is a <span class="term">non-competitive inhibitor</span>: it does not compete with the substrate for the active site, because it binds somewhere else.</li>
</ul>
<p>The slide's diagram shows an allosteric enzyme made of <strong>four subunits</strong> (quaternary structure), each with its own active site and regulatory (allosteric) site. On its own, the enzyme <strong>oscillates</strong> (flips back and forth) between an active form and an inactive form with non-functional active sites. An activator binding to a regulatory site locks it in the active form; an inhibitor locks it in the inactive form. The regulator is not changed by the enzyme and can let go again, so allosteric regulation is <strong>reversible</strong>: the cell can turn the enzyme up or down as conditions change.</p>
<details class="check"><summary>Review question 2: Describe how an allosteric regulator can either activate or inhibit enzyme function.</summary><div class="ans"><p>The regulator binds to the <strong>allosteric site</strong>, not the active site, and changes the enzyme's shape, including the active site. An <strong>activator</strong> stabilizes the active form, so the active site has (or keeps) the shape that allows the substrate to fit. An <strong>inhibitor</strong> stabilizes the inactive form, so the active site changes shape and the substrate can no longer bind: this is <strong>non-competitive inhibition</strong>.</p></div></details>

<h3 data-tier="essential">Competitive inhibition</h3>
<p>A <span class="term">competitive inhibitor</span> <strong>binds to the active site and blocks the normal substrate</strong>. It works because it has a shape similar enough to the substrate's to fit into the active site, but it does not react (or reacts very slowly). While it sits there, the real substrate cannot get in. The inhibitor and the substrate are "competing" for the same spot.</p>
<p>The slide's example comes from the Krebs cycle, which you will study in Unit 2: <strong>succinate</strong> and <strong>oxaloacetate</strong> are circled. Oxaloacetate's shape is close enough to succinate's that it can sit in the active site of the enzyme that normally acts on succinate (succinate dehydrogenase), blocking it.</p>
<figure class="diagram">
<svg viewBox="0 0 640 258" role="img" aria-labelledby="b107-t3">
<title id="b107-t3">Three panels. Normal binding: the substrate fits the enzyme's active site. Competitive inhibition: an inhibitor with a similar shape sits in the active site, so the substrate cannot bind. Non-competitive or allosteric inhibition: an inhibitor binds to a separate allosteric site on the side of the enzyme, which changes the shape of the active site so the substrate no longer fits.</title>
<text x="105" y="18" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Normal binding</text>
<path d="M30,100 L80,100 L90,120 L120,120 L130,100 L180,100 Q195,100 195,115 L195,195 Q195,210 180,210 L30,210 Q15,210 15,195 L15,115 Q15,100 30,100 Z" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="2"/>
<polygon points="80,78 130,78 130,100 120,120 90,120 80,100" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="2"/>
<text x="74" y="90" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--teal)">substrate</text>
<text x="138" y="92" font-family="inherit" font-size="12" style="fill:var(--ink-2)">active site</text>
<text x="105" y="170" text-anchor="middle" font-family="inherit" font-size="13" style="fill:var(--ink)">enzyme</text>
<text x="105" y="232" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Substrate fits the</text>
<text x="105" y="248" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">active site (induced fit)</text>
<text x="318" y="18" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Competitive inhibition</text>
<path d="M243,100 L293,100 L303,120 L333,120 L343,100 L393,100 Q408,100 408,115 L408,195 Q408,210 393,210 L243,210 Q228,210 228,195 L228,115 Q228,100 243,100 Z" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="2"/>
<path d="M293,100 L303,120 L333,120 L343,100 Q318,70 293,100 Z" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="2"/>
<text x="287" y="88" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--red)">inhibitor</text>
<polygon points="352,30 402,30 402,52 392,72 362,72 352,52" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="2"/>
<line x1="343" y1="80" x2="357" y2="94" style="stroke:var(--red)" stroke-width="2.5"/>
<line x1="357" y1="80" x2="343" y2="94" style="stroke:var(--red)" stroke-width="2.5"/>
<text x="318" y="170" text-anchor="middle" font-family="inherit" font-size="13" style="fill:var(--ink)">enzyme</text>
<text x="318" y="232" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Inhibitor blocks the</text>
<text x="318" y="248" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">active site</text>
<text x="531" y="18" text-anchor="middle" font-family="inherit" font-size="13" font-weight="700" style="fill:var(--ink)">Non-competitive (allosteric)</text>
<path d="M456,100 L506,100 L520,122 L532,106 L546,122 L556,100 L606,100 Q621,100 621,115 L621,146 A14,14 0 0 0 621,174 L621,195 Q621,210 606,210 L456,210 Q441,210 441,195 L441,115 Q441,100 456,100 Z" style="fill:var(--blue-soft);stroke:var(--blue)" stroke-width="2"/>
<circle cx="626" cy="160" r="12" style="fill:var(--red-soft);stroke:var(--red)" stroke-width="2"/>
<text x="634" y="136" text-anchor="end" font-family="inherit" font-size="12" style="fill:var(--red)">inhibitor</text>
<text x="604" y="158" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">allosteric</text>
<text x="604" y="172" text-anchor="end" font-family="inherit" font-size="11" style="fill:var(--ink-2)">site</text>
<polygon points="506,30 556,30 556,52 546,72 516,72 506,52" style="fill:var(--teal-soft);stroke:var(--teal)" stroke-width="2"/>
<line x1="524" y1="79" x2="538" y2="93" style="stroke:var(--red)" stroke-width="2.5"/>
<line x1="538" y1="79" x2="524" y2="93" style="stroke:var(--red)" stroke-width="2.5"/>
<text x="500" y="175" text-anchor="middle" font-family="inherit" font-size="13" style="fill:var(--ink)">enzyme</text>
<text x="531" y="232" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">Inhibitor at allosteric site</text>
<text x="531" y="248" text-anchor="middle" font-family="inherit" font-size="12" style="fill:var(--ink)">changes the active site</text>
</svg>
<figcaption>Normal binding vs the two kinds of inhibition. A competitive inhibitor occupies the active site itself. A non-competitive (allosteric) inhibitor binds elsewhere and distorts the active site, so the substrate no longer fits.</figcaption>
</figure>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Competitive inhibitor</th><th>Non-competitive (allosteric) inhibitor</th></tr></thead>
<tbody>
<tr><td>Where it binds</td><td>The <strong>active site</strong></td><td>The <strong>allosteric site</strong> (somewhere else on the enzyme)</td></tr>
<tr><td>Shape</td><td>Resembles the substrate</td><td>Does not need to resemble the substrate</td></tr>
<tr><td>How it stops the enzyme</td><td>Physically blocks the substrate from entering</td><td>Changes the shape of the active site</td></tr>
<tr><td>Effect of adding lots more substrate</td><td>Can overcome it: substrate molecules out-compete the inhibitor for the active site</td><td>Does not help: the active site is the wrong shape no matter how much substrate there is</td></tr>
<tr><td>Class example</td><td>Oxaloacetate blocking the succinate enzyme (Krebs cycle)</td><td>Isoleucine shutting off threonine deaminase (feedback inhibition, below)</td></tr>
</tbody></table></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Competitive</strong> = two people <strong>competing for the same chair</strong>. <strong>Non-competitive</strong> = someone <strong>kicks the chair's leg</strong> from the side so nobody can sit in it.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Saying a non-competitive inhibitor "blocks the active site". It does not touch the active site at all. It binds the allosteric site and <strong>changes the shape</strong> of the active site. Only a competitive inhibitor sits <em>in</em> the active site.</p></div>
<details class="check"><summary>Review question 1: Describe non-competitive inhibition. Provide an example.</summary><div class="ans"><p>In non-competitive inhibition, the inhibitor binds to the <strong>allosteric site</strong>, not the active site (a competitive inhibitor binds the active site). This changes the shape of the active site so the substrate can no longer bind (by the induced fit model, the enzyme can no longer wrap around its substrate), and the enzyme stops working. Example: in feedback inhibition, <strong>isoleucine</strong> binds the allosteric site of threonine deaminase and switches off its own production. Toxins such as heavy metals (mercury, lead) and cyanide, which shuts down an enzyme in cellular respiration, are also often given as examples.</p></div></details>

<h3 data-tier="essential">Feedback inhibition</h3>
<p>Many products are made in a chain of reactions (a metabolic pathway), each step catalyzed by its own enzyme. <span class="term">Feedback inhibition</span> is a form of negative feedback in which the <strong>end product of a pathway acts as an allosteric inhibitor of an enzyme early in the same pathway</strong>, usually the first one. The slide's example is the pathway that turns the amino acid <strong>threonine</strong> into the amino acid <strong>isoleucine</strong> in five steps:</p>
<ol class="steps">
  <li><p class="step-head">The pathway runs</p><p>Threonine (the initial substrate) binds the active site of enzyme 1, <strong>threonine deaminase</strong>. Enzymes 1 to 5 turn it, through intermediates A, B, C and D, into the end product, <strong>isoleucine</strong>.</p></li>
  <li><p class="step-head">The product builds up</p><p>When the cell has more isoleucine than it is using, the extra isoleucine molecules bind to the <strong>allosteric site</strong> of enzyme 1.</p></li>
  <li><p class="step-head">The pathway switches off</p><p>The active site of enzyme 1 changes shape and no longer binds threonine. Because enzyme 1 is the first step, nothing enters the pathway, and no intermediates are made.</p></li>
  <li><p class="step-head">The pathway switches back on</p><p>As the cell uses up isoleucine (to build proteins), isoleucine leaves the allosteric site. The active site becomes available again, and the pathway restarts.</p></li>
</ol>
<p>Why inhibit the <strong>first</strong> enzyme rather than the last? If the last enzyme were blocked, intermediates A to D would still be made and would pile up, wasting threonine and energy. Blocking step 1 stops the whole assembly line at the door. The result is self-regulating: the amount of isoleucine itself controls how fast isoleucine is made, keeping its level steady. That is homeostasis at the molecular level.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Feedback inhibition works like a <strong>thermostat</strong>. When the room (cell) has enough heat (isoleucine), the thermostat turns off the furnace (enzyme 1). When the room cools down (isoleucine is used up), the furnace comes back on.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><p>For a feedback inhibition diagram, identify: the <strong>end product</strong> (the inhibitor), the <strong>enzyme it inhibits</strong> (usually the first), the <strong>site</strong> it binds (allosteric, so this is non-competitive inhibition), and the fact that it is <strong>negative feedback</strong> and <strong>reversible</strong>.</p></div>
<p data-tier="extra">You will see this again in Unit 2: ATP is an allosteric inhibitor of phosphofructokinase, a key early enzyme of glycolysis. When a cell already has plenty of ATP, ATP itself slows the pathway that makes more ATP.</p>

<h3 data-tier="likely">Applying it: review questions</h3>
<details class="check"><summary>Review question 4: Protease in fresh pineapple breaks down gelatin, a structural protein made from collagen. Why doesn't Jell-O with fresh pineapple solidify? What if you used cooked pineapple?</summary><div class="ans"><p>Gelatin sets because its long protein chains tangle into a network that traps water. The <strong>protease</strong> in fresh pineapple (called bromelain) <strong>hydrolyzes the peptide bonds</strong> in the gelatin, chopping it into short pieces that cannot form the network, so the dessert stays liquid. <strong>Cooked pineapple works</strong>: heating <strong>denatures</strong> the protease (it is a protein), its active site loses its shape, it can no longer break down the gelatin, and the Jell-O sets. Canned pineapple works for the same reason, because it is heated during canning.</p></div></details>
<details class="check"><summary>Review question 5: Humans produce digestive enzymes in the mouth, stomach and small intestine. As we age, we tend to produce fewer of them. What effect would this have on digestion and nutrition?</summary><div class="ans"><p>With fewer enzymes, food is <strong>digested less completely</strong>: fewer large molecules (starch, proteins, lipids) are hydrolyzed into small monomers. Only monomers can be absorbed into the blood, so there is <strong>less absorption of nutrients</strong>. An older person could become short of nutrients even while eating a good diet, and undigested food can cause discomfort, as in lactose intolerance when lactase production drops.</p></div></details>
<details class="check"><summary>Review question 7: What does it mean to "denature" an enzyme?</summary><div class="ans"><p>To <strong>change its structure so that it is no longer functional</strong>. Denaturation usually disrupts the quaternary structure (the interaction of multiple polypeptide chains) but can also disrupt the tertiary and secondary structure, so the active site loses its shape and the substrate no longer fits. Denaturation usually does <strong>not</strong> break the peptide bonds holding the amino acids together. It is caused by high temperature, extreme pH or salt.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
  <li>Most enzymes end in <strong>-ase</strong> (amylase, lipase, carbohydrase, protease, lactase); digestive enzymes break polymers down by hydrolysis, each acting on one specific substrate.</li>
  <li>Enzymes are <strong>protein catalysts</strong>: they speed up reactions without being consumed by <strong>lowering the activation energy</strong>. They do not change ΔG. This applies to exergonic (catabolic) and endergonic (anabolic) reactions.</li>
  <li><strong>Induced fit</strong>: substrate binds the active site to form an <strong>enzyme–substrate complex</strong>, and the active site changes shape (conformational change) to fit it better.</li>
  <li><strong>Substrate concentration</strong>: rate rises, then plateaus at <strong>saturation</strong> (all active sites busy). <strong>Enzyme concentration</strong>: rate rises proportionally (capped in cells by substrate and energy costs).</li>
  <li><strong>Temperature</strong>: rate rises to an <strong>optimum</strong> (about 37 °C for human enzymes, about 76 °C for heat-tolerant ones), then falls steeply as the enzyme <strong>denatures</strong>. <strong>pH</strong>: each enzyme has an optimum (pepsin about 2, salivary amylase about 7, pancreatic lipase about 8).</li>
  <li><strong>Cofactors</strong> are inorganic metal ions that stabilize shape and attract substrate electrons; <strong>coenzymes</strong> are organic molecules that shuttle electrons or protons (NADH, coenzyme Q). Both activate inactive enzymes.</li>
  <li>Enzymes are regulated by negative feedback, medications and toxins. <strong>Allosteric</strong> regulators bind an allosteric site: activators stabilize the active form, inhibitors (non-competitive) stabilize the inactive form. <strong>Competitive</strong> inhibitors bind the active site and block the substrate.</li>
  <li><strong>Feedback inhibition</strong>: the end product (isoleucine) allosterically inhibits the first enzyme of its pathway (threonine deaminase), switching the pathway off until the product is used up.</li>
</ul>
`
});
