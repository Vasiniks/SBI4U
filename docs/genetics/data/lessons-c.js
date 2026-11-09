window.LESSONS = window.LESSONS || [];

/* ===================================================================
   3.04 Transcription
   =================================================================== */
window.LESSONS.push({
  id: "3.04",
  title: "Transcription",
  stage: "g-tx",
  where: "Nucleus (nucleoid in prokaryotes)",
  summary: "Transcription copies the information in one gene from DNA into RNA. Transcription factors and RNA polymerase assemble on the gene's promoter (at the TATA box); RNA polymerase reads the template strand 3′ → 5′ and builds RNA 5′ → 3′ until it reaches the terminator. In eukaryotes the pre-mRNA is then processed (5′ cap, poly-A tail, splicing out the introns) into mature mRNA, which leaves the nucleus to be translated.",
  objectives: [
    "Compare DNA and RNA (sugar, bases, number of strands, stability, job) and explain why RNA is single-stranded but not a double helix.",
    "State the jobs of mRNA, rRNA, tRNA and snRNA, and state the central dogma and where transcription and translation happen.",
    "Describe the parts of a gene: promoter (with TATA box), transcription start site, transcribed region, terminator, and the 5′ and 3′ UTRs of the transcript.",
    "Distinguish the template (antisense, non-coding) strand from the coding (sense, non-template) strand and explain why the mRNA matches the coding strand.",
    "Explain initiation: how transcription factors, TATA-binding protein and RNA polymerase II form the transcription initiation complex at the promoter.",
    "Explain elongation: RNA polymerase reads the template 3′ → 5′, pairs A with U, needs no primer and builds RNA 5′ → 3′ inside a moving transcription bubble.",
    "Describe termination in prokaryotes (terminator hairpin) and eukaryotes (polyadenylation signal and cleavage).",
    "Write the mRNA made from any DNA strand, with correct 5′ and 3′ labels, given either strand in either direction.",
    "Describe the 5′ cap, the poly-A tail and splicing (introns, exons, spliceosomes), and explain how alternative splicing lets one gene make several proteins.",
    "Compare transcription in prokaryotes and eukaryotes, and compare transcription with DNA replication."
  ],
  html: `
<h3 data-tier="essential">The central dogma</h3>
<p>Lessons 3.01 to 3.03 showed that DNA is the hereditary material, how it is built and how it is copied before a cell divides. But DNA on its own doesn't <em>do</em> anything: it is a stored set of instructions, like a cookbook nobody has opened. The instructions are carried out by <strong>proteins</strong>: enzymes, channels, receptors, structural fibres, hormones. This lesson and the next follow how a cell reads a gene and builds the protein it codes for. The whole process is called <span class="term">protein synthesis</span>, or <span class="term">gene expression</span>.</p>
<p>The flow of information has a name. In 1958 Francis Crick called it the <span class="term">central dogma</span> of molecular biology, and the class slide states it in one line: <strong>genetic information flows in a one-way direction</strong>.</p>
<div class="eq">DNA → RNA → protein</div>
<ul>
<li><strong>Replication</strong> (DNA → DNA) copies the whole genome so each daughter cell gets the instructions (lesson 3.03).</li>
<li><strong>Transcription</strong> (DNA → RNA) copies the information in <em>one gene</em> into a molecule of RNA (this lesson).</li>
<li><strong>Translation</strong> (RNA → protein) uses the RNA's base sequence to put amino acids in the right order (<a href="#/lesson/3.05">lesson 3.05</a>).</li>
</ul>

<figure class="diagram">
<svg viewBox="0 0 680 290" role="img" aria-labelledby="g304a-t g304a-d">
<title id="g304a-t">The central dogma: DNA to RNA to protein</title>
<desc id="g304a-d">A short gene is shown as two DNA strands. The coding strand reads 5 prime ATG ATC TCG TAA 3 prime and the template strand under it reads 3 prime TAC TAG AGC ATT 5 prime. A curved arrow on the left shows replication, DNA to DNA. An arrow labelled transcription, in the nucleus by RNA polymerase, leads down to an mRNA reading 5 prime AUG AUC UCG UAA 3 prime, the same as the coding strand but with U in place of T. Arrows labelled translation, at a ribosome in the cytoplasm, lead from each codon to the polypeptide: methionine, isoleucine, serine, then a stop codon that codes for no amino acid.</desc>
<defs>
<marker id="g304a-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
<marker id="g304a-al" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--link)"/></marker>
</defs>
<line x1="188" y1="46" x2="490" y2="46" style="stroke:var(--ink-2);stroke-width:3"/>
<line x1="188" y1="104" x2="490" y2="104" style="stroke:var(--ink-2);stroke-width:3"/>
<g style="font-size:15px;font-weight:700" text-anchor="middle">
<text x="200" y="70" style="fill:var(--nt-a)">A</text><text x="222" y="70" style="fill:var(--nt-t)">T</text><text x="244" y="70" style="fill:var(--nt-g)">G</text>
<text x="278" y="70" style="fill:var(--nt-a)">A</text><text x="300" y="70" style="fill:var(--nt-t)">T</text><text x="322" y="70" style="fill:var(--nt-c)">C</text>
<text x="356" y="70" style="fill:var(--nt-t)">T</text><text x="378" y="70" style="fill:var(--nt-c)">C</text><text x="400" y="70" style="fill:var(--nt-g)">G</text>
<text x="434" y="70" style="fill:var(--nt-t)">T</text><text x="456" y="70" style="fill:var(--nt-a)">A</text><text x="478" y="70" style="fill:var(--nt-a)">A</text>
<text x="200" y="96" style="fill:var(--nt-t)">T</text><text x="222" y="96" style="fill:var(--nt-a)">A</text><text x="244" y="96" style="fill:var(--nt-c)">C</text>
<text x="278" y="96" style="fill:var(--nt-t)">T</text><text x="300" y="96" style="fill:var(--nt-a)">A</text><text x="322" y="96" style="fill:var(--nt-g)">G</text>
<text x="356" y="96" style="fill:var(--nt-a)">A</text><text x="378" y="96" style="fill:var(--nt-g)">G</text><text x="400" y="96" style="fill:var(--nt-c)">C</text>
<text x="434" y="96" style="fill:var(--nt-a)">A</text><text x="456" y="96" style="fill:var(--nt-t)">T</text><text x="478" y="96" style="fill:var(--nt-t)">T</text>
<text x="200" y="196" style="fill:var(--nt-a)">A</text><text x="222" y="196" style="fill:var(--nt-u)">U</text><text x="244" y="196" style="fill:var(--nt-g)">G</text>
<text x="278" y="196" style="fill:var(--nt-a)">A</text><text x="300" y="196" style="fill:var(--nt-u)">U</text><text x="322" y="196" style="fill:var(--nt-c)">C</text>
<text x="356" y="196" style="fill:var(--nt-u)">U</text><text x="378" y="196" style="fill:var(--nt-c)">C</text><text x="400" y="196" style="fill:var(--nt-g)">G</text>
<text x="434" y="196" style="fill:var(--nt-u)">U</text><text x="456" y="196" style="fill:var(--nt-a)">A</text><text x="478" y="196" style="fill:var(--nt-a)">A</text>
</g>
<g style="fill:var(--ink-2);font-size:12px">
<text x="182" y="51" text-anchor="end">5′</text><text x="496" y="51">3′</text>
<text x="182" y="109" text-anchor="end">3′</text><text x="496" y="109">5′</text>
<text x="182" y="177" text-anchor="end">5′</text><text x="496" y="177">3′</text>
<text x="524" y="51">coding strand</text><text x="524" y="109">template strand</text>
<text x="524" y="177">copy of the coding</text><text x="524" y="193">strand, U for T</text>
</g>
<path d="M160,38 C100,22 100,128 160,114" style="fill:none;stroke:var(--link);stroke-width:2" marker-end="url(#g304a-al)"/>
<text x="28" y="76" style="fill:var(--ink);font-size:15px;font-weight:700">DNA</text>
<text x="28" y="96" style="fill:var(--link);font-size:12px;font-weight:700">Replication</text>
<text x="28" y="111" style="fill:var(--ink-2);font-size:11px">DNA → DNA</text>
<line x1="340" y1="114" x2="340" y2="160" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g304a-ah)"/>
<text x="352" y="135" style="fill:var(--krebs);font-size:13px;font-weight:700">Transcription</text>
<text x="352" y="151" style="fill:var(--ink-2);font-size:12px">nucleus · RNA polymerase</text>
<line x1="188" y1="172" x2="490" y2="172" style="stroke:var(--krebs);stroke-width:3"/>
<text x="28" y="190" style="fill:var(--krebs);font-size:15px;font-weight:700">mRNA</text>
<g style="stroke:var(--ink-2);stroke-width:1.8">
<line x1="222" y1="206" x2="222" y2="234" marker-end="url(#g304a-ah)"/><line x1="300" y1="206" x2="300" y2="234" marker-end="url(#g304a-ah)"/>
<line x1="378" y1="206" x2="378" y2="234" marker-end="url(#g304a-ah)"/><line x1="456" y1="206" x2="456" y2="240" marker-end="url(#g304a-ah)"/>
</g>
<text x="490" y="218" style="fill:var(--leaf);font-size:13px;font-weight:700">Translation</text>
<text x="490" y="234" style="fill:var(--ink-2);font-size:12px">ribosome · cytoplasm</text>
<g style="stroke:var(--glyco);stroke-width:2"><line x1="240" y1="258" x2="282" y2="258"/><line x1="318" y1="258" x2="360" y2="258"/></g>
<g style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:2"><circle cx="222" cy="258" r="18"/><circle cx="300" cy="258" r="18"/><circle cx="378" cy="258" r="18"/></g>
<g style="fill:var(--ink);font-size:12px;font-weight:700" text-anchor="middle"><text x="222" y="262">Met</text><text x="300" y="262">Ile</text><text x="378" y="262">Ser</text></g>
<rect x="432" y="246" width="48" height="24" rx="6" style="fill:none;stroke:var(--ink-2);stroke-width:1.5;stroke-dasharray:4 3"/>
<text x="456" y="262" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">stop</text>
<text x="28" y="263" style="fill:var(--glyco);font-size:15px;font-weight:700">Polypeptide</text>
</svg>
<figcaption>The central dogma, using the gene on the class slide. Information flows one way: DNA → mRNA → polypeptide. The mRNA has the same sequence as the coding strand (with U for T) because it was built against the template strand.</figcaption>
</figure>

<p>"One-way" means that information never flows back from a protein to a nucleic acid. A cell has no machinery to read a protein's amino acid sequence and write the matching DNA. That is why a change to a protein during your life (a muscle protein made in larger amounts by training, for example) can't rewrite your genes or be passed on to your children: only changes in the DNA itself (mutations, <a href="#/lesson/3.06">lesson 3.06</a>) are inherited.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Know the three arrows and their names: <strong>replication</strong> DNA → DNA, <strong>transcription</strong> DNA → RNA, <strong>translation</strong> RNA → protein. Information flows <strong>one way</strong>: from nucleic acid to protein, never back.</p></div>
<h4 data-tier="extra">Exceptions to the dogma</h4>
<p>Crick's rule has a few exceptions, all in viruses or special enzymes. <strong>Retroviruses</strong> such as HIV use <span class="term">reverse transcriptase</span> to copy their RNA genes into DNA (RNA → DNA). <strong>Telomerase</strong> (<a href="#/lesson/3.02">lesson 3.02</a>) is also a reverse transcriptase. Many RNA viruses (influenza, coronaviruses) copy <strong>RNA → RNA</strong>. None sends information from <em>protein</em> back to nucleic acid, so the heart of the dogma still holds.</p>

<h3 data-tier="essential">Transcription and translation</h3>
<p>Protein synthesis happens in two stages. From the class slide:</p>
<ul>
<li><strong>Transcription</strong> occurs in the <strong>nucleus</strong>. A gene from DNA is copied (<em>transcribed</em>) into mRNA.</li>
<li><strong>Translation</strong> occurs in the <strong>cytosol at a ribosome</strong>. The mRNA is read (<em>translated</em>) to create a polypeptide chain.</li>
</ul>
<p>The words are well chosen. To <em>transcribe</em> is to copy something out in the same language, as a scribe copies a manuscript. DNA and RNA are both nucleic acids written in bases, so copying DNA into RNA is a transcription: the "language" stays the same, only the alphabet changes slightly (U instead of T). To <em>translate</em> is to change languages: the ribosome converts a sequence of <strong>nucleotides</strong> into a sequence of <strong>amino acids</strong>.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Transcription</th><th>Translation</th></tr></thead>
<tbody>
<tr><td>Where (eukaryotes)</td><td>Nucleus</td><td>Cytosol, at a ribosome (free or on the rough ER)</td></tr>
<tr><td>Information read</td><td>Template strand of one gene's DNA</td><td>Codons (base triplets) on the mRNA</td></tr>
<tr><td>Main machinery</td><td>RNA polymerase, helped by transcription factors</td><td>Ribosome (rRNA + proteins), tRNAs</td></tr>
<tr><td>Building blocks</td><td>RNA nucleotides (A, U, G, C)</td><td>Amino acids (20 kinds)</td></tr>
<tr><td>Bond formed</td><td>Phosphodiester bonds</td><td>Peptide bonds</td></tr>
<tr><td>Product</td><td>RNA (pre-mRNA, processed into mRNA)</td><td>Polypeptide, which folds into a protein</td></tr>
</tbody></table></div>
<p>Why not translate the DNA directly? A good SBI4U answer has three parts:</p>
<ol>
<li><strong>Protection.</strong> DNA is the cell's only master copy, so it stays safely inside the nucleus. Only disposable RNA copies go out into the busy cytoplasm.</li>
<li><strong>Amplification.</strong> One gene can be transcribed into hundreds of mRNA copies, and each mRNA can be translated many times. A cell that needs a lot of a protein (insulin in a pancreas cell, for example) can make it quickly.</li>
<li><strong>Control.</strong> A cell can choose which genes to transcribe, when and how often. Every cell in your body has the same DNA; a liver cell and a neuron differ mostly because they transcribe different genes (<a href="#/lesson/3.07">lesson 3.07</a>).</li>
</ol>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Think of a <strong>reference library</strong>. The master blueprint (DNA) can't be borrowed, so you photocopy the one page you need (transcription, in the library = nucleus) and take the copy to the workshop (the ribosome in the cytoplasm), where it is used to build something (translation).</p></div>

<h3 data-tier="essential">DNA vs RNA</h3>
<p>Transcription turns DNA's information into RNA, so you need to know exactly how the two nucleic acids differ (review <a href="../biochem/#/lesson/1.05">Unit 1, lesson 1.05</a>). Both are polymers of nucleotides, each with a phosphate, a five-carbon sugar and a nitrogenous base, joined by phosphodiester bonds into a sugar–phosphate backbone with a 5′ end and a 3′ end. The class slide lists three differences.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>DNA</th><th>RNA</th></tr></thead>
<tbody>
<tr><td>Sugar</td><td><strong>Deoxyribose</strong>: one less oxygen on the 2′ carbon (2′ –H)</td><td><strong>Ribose</strong>: –OH on the 2′ carbon</td></tr>
<tr><td>Pyrimidines</td><td><strong>Thymine</strong>, cytosine</td><td><strong>Uracil</strong>, cytosine</td></tr>
<tr><td>Purines</td><td>Adenine, guanine</td><td>Adenine, guanine (same)</td></tr>
<tr><td>Strands</td><td><strong>Double-stranded</strong> helix</td><td><strong>Single-stranded</strong>; can fold back on itself</td></tr>
<tr data-tier="likely"><td>Length</td><td>Very long (millions of base pairs per chromosome)</td><td>Short (one gene's worth: usually hundreds to thousands of nucleotides)</td></tr>
<tr data-tier="likely"><td>Stability</td><td>Very stable; long-term storage</td><td>Short-lived; broken down after minutes to days</td></tr>
<tr data-tier="likely"><td>Where</td><td>Nucleus (plus mitochondria and chloroplasts)</td><td>Made in the nucleus; works in the nucleus and cytoplasm</td></tr>
<tr data-tier="likely"><td>Job</td><td>Stores the genetic information</td><td>Carries out the instructions (mRNA, rRNA, tRNA and more)</td></tr>
</tbody></table></div>

<figure class="diagram">
<svg viewBox="0 0 680 340" role="img" aria-labelledby="g304b-t g304b-d">
<title id="g304b-t">DNA compared with RNA</title>
<desc id="g304b-d">Two panels. Left, DNA: its sugar, deoxyribose, is a five-membered ring with carbons numbered 1 prime to 5 prime; the phosphate attaches at the 5 prime carbon, the base at the 1 prime carbon, an OH group at the 3 prime carbon, and only a hydrogen at the 2 prime carbon. Its bases are A, G, C and T. It has two antiparallel strands forming a double helix. Right, RNA: its sugar, ribose, has an OH group on the 2 prime carbon. Its bases are A, G, C and U, with uracil replacing thymine. It is a single strand that can fold back on itself to form a hairpin where complementary bases pair.</desc>
<line x1="340" y1="14" x2="340" y2="326" style="stroke:var(--line);stroke-width:1.5"/>
<g text-anchor="middle">
<text x="170" y="28" style="fill:var(--ink);font-size:15px;font-weight:700">DNA</text>
<text x="170" y="45" style="fill:var(--ink-2);font-size:12px">deoxyribonucleic acid</text>
<text x="510" y="28" style="fill:var(--ink);font-size:15px;font-weight:700">RNA</text>
<text x="510" y="45" style="fill:var(--ink-2);font-size:12px">ribonucleic acid</text>
</g>
<g style="stroke:var(--ink-2);stroke-width:2;fill:none">
<path d="M150,78 L184,100 L171,138 L129,138 L116,100 Z" style="fill:var(--surface)"/>
<line x1="116" y1="100" x2="94" y2="84"/><line x1="94" y1="84" x2="75" y2="84"/>
<line x1="184" y1="100" x2="206" y2="100"/>
<line x1="129" y1="138" x2="129" y2="154"/><line x1="171" y1="138" x2="171" y2="154"/>
<path d="M490,78 L524,100 L511,138 L469,138 L456,100 Z" style="fill:var(--surface)"/>
<line x1="456" y1="100" x2="434" y2="84"/><line x1="434" y1="84" x2="415" y2="84"/>
<line x1="524" y1="100" x2="546" y2="100"/>
<line x1="469" y1="138" x2="469" y2="154"/><line x1="511" y1="138" x2="511" y2="154"/>
</g>
<g style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5">
<circle cx="62" cy="84" r="13"/><circle cx="402" cy="84" r="13"/>
</g>
<g style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5">
<rect x="206" y="86" width="50" height="28" rx="5"/><rect x="546" y="86" width="50" height="28" rx="5"/>
</g>
<rect x="155" y="156" width="32" height="20" rx="5" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
<rect x="491" y="156" width="40" height="20" rx="5" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:1.5"/>
<g style="fill:var(--ink);font-size:12px" text-anchor="middle">
<text x="62" y="88" style="font-weight:700">P</text><text x="402" y="88" style="font-weight:700">P</text>
<text x="231" y="104">Base</text><text x="571" y="104">Base</text>
<text x="150" y="96">O</text><text x="490" y="96">O</text>
<text x="129" y="170">OH</text><text x="469" y="170">OH</text>
<text x="171" y="171" style="font-weight:700;font-size:13px">H</text><text x="511" y="171" style="font-weight:700;font-size:13px">OH</text>
</g>
<g style="fill:var(--ink-2);font-size:11px" text-anchor="middle">
<text x="172" y="108">1′</text><text x="161" y="132">2′</text><text x="139" y="132">3′</text><text x="128" y="108">4′</text><text x="92" y="76">5′</text>
<text x="512" y="108">1′</text><text x="501" y="132">2′</text><text x="479" y="132">3′</text><text x="468" y="108">4′</text><text x="432" y="76">5′</text>
</g>
<g style="fill:var(--ink);font-size:12px" text-anchor="middle">
<text x="170" y="198">deoxyribose: only H on the 2′ carbon</text>
<text x="510" y="198">ribose: OH on the 2′ carbon</text>
</g>
<rect x="196" y="207" width="22" height="22" rx="5" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.2"/>
<rect x="536" y="207" width="22" height="22" rx="5" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.2"/>
<g style="font-size:15px;font-weight:700" text-anchor="middle">
<text x="128" y="224" style="fill:var(--nt-a)">A</text><text x="156" y="224" style="fill:var(--nt-g)">G</text><text x="184" y="224" style="fill:var(--nt-c)">C</text><text x="207" y="224" style="fill:var(--nt-t)">T</text>
<text x="468" y="224" style="fill:var(--nt-a)">A</text><text x="496" y="224" style="fill:var(--nt-g)">G</text><text x="524" y="224" style="fill:var(--nt-c)">C</text><text x="547" y="224" style="fill:var(--nt-u)">U</text>
</g>
<g style="fill:var(--ink-2);font-size:12px">
<text x="62" y="224">Bases</text><text x="402" y="224">Bases</text>
</g>
<g style="fill:var(--ink-2);font-size:12px" text-anchor="middle">
<text x="170" y="245">thymine (T) pairs with A</text>
<text x="510" y="245">uracil (U) replaces T; pairs with A</text>
</g>
<line x1="70" y1="276" x2="270" y2="276" style="stroke:var(--ink-2);stroke-width:3"/>
<line x1="70" y1="310" x2="270" y2="310" style="stroke:var(--ink-2);stroke-width:3"/>
<g style="stroke-width:3">
<line x1="82" y1="278" x2="82" y2="293" style="stroke:var(--nt-a)"/><line x1="82" y1="293" x2="82" y2="308" style="stroke:var(--nt-t)"/>
<line x1="98" y1="278" x2="98" y2="293" style="stroke:var(--nt-g)"/><line x1="98" y1="293" x2="98" y2="308" style="stroke:var(--nt-c)"/>
<line x1="114" y1="278" x2="114" y2="293" style="stroke:var(--nt-t)"/><line x1="114" y1="293" x2="114" y2="308" style="stroke:var(--nt-a)"/>
<line x1="130" y1="278" x2="130" y2="293" style="stroke:var(--nt-c)"/><line x1="130" y1="293" x2="130" y2="308" style="stroke:var(--nt-g)"/>
<line x1="146" y1="278" x2="146" y2="293" style="stroke:var(--nt-a)"/><line x1="146" y1="293" x2="146" y2="308" style="stroke:var(--nt-t)"/>
<line x1="162" y1="278" x2="162" y2="293" style="stroke:var(--nt-g)"/><line x1="162" y1="293" x2="162" y2="308" style="stroke:var(--nt-c)"/>
<line x1="178" y1="278" x2="178" y2="293" style="stroke:var(--nt-g)"/><line x1="178" y1="293" x2="178" y2="308" style="stroke:var(--nt-c)"/>
<line x1="194" y1="278" x2="194" y2="293" style="stroke:var(--nt-t)"/><line x1="194" y1="293" x2="194" y2="308" style="stroke:var(--nt-a)"/>
<line x1="210" y1="278" x2="210" y2="293" style="stroke:var(--nt-c)"/><line x1="210" y1="293" x2="210" y2="308" style="stroke:var(--nt-g)"/>
<line x1="226" y1="278" x2="226" y2="293" style="stroke:var(--nt-a)"/><line x1="226" y1="293" x2="226" y2="308" style="stroke:var(--nt-t)"/>
<line x1="242" y1="278" x2="242" y2="293" style="stroke:var(--nt-t)"/><line x1="242" y1="293" x2="242" y2="308" style="stroke:var(--nt-a)"/>
<line x1="258" y1="278" x2="258" y2="293" style="stroke:var(--nt-g)"/><line x1="258" y1="293" x2="258" y2="308" style="stroke:var(--nt-c)"/>
</g>
<g style="fill:var(--ink-2);font-size:12px">
<text x="64" y="281" text-anchor="end">5′</text><text x="276" y="281">3′</text>
<text x="64" y="315" text-anchor="end">3′</text><text x="276" y="315">5′</text>
</g>
<text x="170" y="333" text-anchor="middle" style="fill:var(--ink);font-size:12px">two antiparallel strands: a double helix</text>
<path d="M396,306 L470,306 L470,276 A15,15 0 0 1 500,276 L500,306 L624,306" style="fill:none;stroke:var(--krebs);stroke-width:3"/>
<g style="stroke-width:3">
<line x1="472" y1="282" x2="485" y2="282" style="stroke:var(--nt-g)"/><line x1="485" y1="282" x2="498" y2="282" style="stroke:var(--nt-c)"/>
<line x1="472" y1="291" x2="485" y2="291" style="stroke:var(--nt-a)"/><line x1="485" y1="291" x2="498" y2="291" style="stroke:var(--nt-u)"/>
<line x1="472" y1="300" x2="485" y2="300" style="stroke:var(--nt-c)"/><line x1="485" y1="300" x2="498" y2="300" style="stroke:var(--nt-g)"/>
<line x1="410" y1="308" x2="410" y2="320" style="stroke:var(--nt-a)"/><line x1="426" y1="308" x2="426" y2="320" style="stroke:var(--nt-u)"/>
<line x1="442" y1="308" x2="442" y2="320" style="stroke:var(--nt-g)"/><line x1="458" y1="308" x2="458" y2="320" style="stroke:var(--nt-c)"/>
<line x1="514" y1="308" x2="514" y2="320" style="stroke:var(--nt-u)"/><line x1="530" y1="308" x2="530" y2="320" style="stroke:var(--nt-a)"/>
<line x1="546" y1="308" x2="546" y2="320" style="stroke:var(--nt-c)"/><line x1="562" y1="308" x2="562" y2="320" style="stroke:var(--nt-g)"/>
<line x1="578" y1="308" x2="578" y2="320" style="stroke:var(--nt-a)"/><line x1="594" y1="308" x2="594" y2="320" style="stroke:var(--nt-u)"/>
<line x1="610" y1="308" x2="610" y2="320" style="stroke:var(--nt-u)"/>
</g>
<g style="fill:var(--ink-2);font-size:12px">
<text x="390" y="311" text-anchor="end">5′</text><text x="630" y="311">3′</text>
</g>
<text x="512" y="280" style="fill:var(--ink-2);font-size:12px">hairpin (stem-loop)</text>
<text x="510" y="336" text-anchor="middle" style="fill:var(--ink);font-size:12px">one strand that can fold back on itself</text>
</svg>
<figcaption>The three differences on the class slide: the sugar (2′ H in DNA, 2′ OH in RNA), the base (T in DNA, U in RNA) and the number of strands. Where an RNA strand meets a complementary stretch of itself, its bases pair and it folds into a hairpin.</figcaption>
</figure>

<div class="callout warn"><p class="callout-title">Check your notes</p><p>The slide's table calls RNA a "single stranded helix." RNA <strong>is single-stranded</strong>, but it is <strong>not a helix the way DNA is</strong>: a single strand has no partner strand to wind around. What RNA can do is fold back on itself. Wherever two stretches of the same strand are complementary, they pair (A with U, G with C) and form short double-stranded <strong>hairpins</strong> (stem-loops). Write "single-stranded; can fold into hairpins," and keep "double helix" for DNA.</p></div>
<p data-tier="likely">The 2′ –OH also explains why RNA is short-lived. That extra –OH group sits right next to the phosphodiester bond and can attack it, so an RNA backbone breaks much more easily than a DNA backbone. For a <em>message</em> that should only be read for a while and then destroyed, that is an advantage; for the permanent master copy, DNA's missing oxygen is the safer choice.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>De</strong>oxyribose = "<strong>de</strong>-oxygenated" ribose: it has lost one oxygen at carbon 2′. And "<strong>U</strong> is for RNA, <strong>T</strong> is for DNA": if you see a U, you are looking at RNA.</p></div>
<p data-tier="extra">Why does DNA use thymine? Cytosine sometimes loses an amine group by accident and becomes uracil. Because DNA normally has no U, repair enzymes can treat any U in DNA as damage and fix it; if DNA used U, a damaged C would look normal.</p>

<h3 data-tier="essential">Types of RNA</h3>
<p>Transcription doesn't only make messages. The class slides name three main types of RNA, and all three are made by transcribing genes:</p>
<ul>
<li><span class="term">Messenger RNA (mRNA)</span>: complementary to a specific gene found in DNA. It <strong>leaves the nucleus and enters the cytosol</strong>, carrying the gene's code as a series of three-base codons to a ribosome.</li>
<li><span class="term">Ribosomal RNA (rRNA)</span>: <strong>binds with proteins to form the ribosomes</strong>, the machines that carry out translation.</li>
<li><span class="term">Transfer RNA (tRNA)</span>: <strong>carries specific amino acids to a growing polypeptide chain</strong>, in the order dictated by the sequence of bases (codons) on the mRNA. Each tRNA has an anticodon that pairs with one codon (<a href="#/lesson/3.05">lesson 3.05</a>).</li>
</ul>
<p>The worksheet answer key adds a fourth: <span class="term">small nuclear RNA (snRNA)</span>. snRNAs stay in the nucleus, where they combine with proteins to form the <strong>spliceosomes</strong> that cut introns out of pre-mRNA (see <em>Splicing</em> below).</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>RNA</th><th>Shape</th><th>Job</th><th>Works in</th></tr></thead>
<tbody>
<tr><td><strong>mRNA</strong></td><td>Linear, single strand</td><td>Carries the gene's code (codons) to the ribosome</td><td>Made in the nucleus; translated in the cytosol</td></tr>
<tr><td><strong>rRNA</strong></td><td>Folded, combined with proteins</td><td>Structural and catalytic part of the ribosome</td><td>Ribosomes (assembled in the nucleolus)</td></tr>
<tr><td><strong>tRNA</strong></td><td>Small, folded into a cloverleaf (L shape in 3-D)</td><td>Brings the correct amino acid to each codon</td><td>Cytosol</td></tr>
<tr><td><strong>snRNA</strong></td><td>Small, folded, with proteins</td><td>Part of spliceosomes; recognizes intron boundaries</td><td>Nucleus</td></tr>
</tbody></table></div>
<p>Only mRNA is translated. rRNA, tRNA and snRNA are the finished products of their genes: they are used directly as RNA. That is worth remembering when someone says "every gene codes for a protein" (see the next section).</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The slide spells it "complimentary." In biology the word is <strong>complementary</strong> (with an e): it means "completing" or "matching," as A completes T. <em>Complimentary</em> means flattering, or free of charge.</p></div>
<p data-tier="extra">In a typical cell about 80% of the RNA is rRNA and only a few percent is mRNA. Cells also make RNAs that are never translated and help control genes, such as <strong>microRNAs (miRNA)</strong>, which switch off particular mRNAs.</p>

<h3 data-tier="essential">What is a gene?</h3>
<p>The class slide defines a <span class="term">gene</span> as a <strong>segment of DNA coding for a protein that contains a promoter located upstream and a terminator located downstream</strong>. Each part has a job:</p>
<ul>
<li>The <span class="term">promoter</span> is a DNA sequence just <strong>upstream</strong> of the gene where RNA polymerase (with transcription factors) binds. It marks where transcription starts and which strand is the template. In eukaryotes it contains the <span class="term">TATA box</span>, a short sequence rich in T and A about 25–30 base pairs upstream of the start. The promoter itself is <strong>not</strong> transcribed.</li>
<li>The <span class="term">transcription start site</span> is the first base pair transcribed. It is numbered <strong>+1</strong>. Bases upstream get negative numbers (the TATA box is at about −25 to −30) and bases downstream get positive numbers. There is no position 0.</li>
<li>The <strong>transcribed region</strong> is the part copied into RNA.</li>
<li>The <span class="term">terminator</span> is a sequence <strong>downstream</strong> that signals the end of transcription.</li>
</ul>
<p><span class="term">Upstream</span> and <span class="term">downstream</span> are measured along the direction of transcription. RNA polymerase travels "downstream," which is toward the 3′ end of the coding strand. Upstream is toward the coding strand's 5′ end, where the promoter is.</p>

<figure class="diagram">
<svg viewBox="0 0 720 300" role="img" aria-labelledby="g304c-t g304c-d">
<title id="g304c-t">Parts of a gene and its RNA transcript</title>
<desc id="g304c-d">A double-stranded stretch of DNA, with the coding strand on top running 5 prime to 3 prime from left to right and the template strand below running 3 prime to 5 prime. From left to right: an upstream flanking region, the promoter containing the TATA box about 25 to 30 base pairs upstream, the transcription start site numbered plus 1, the transcribed region, the terminator, and a downstream flanking region. Upstream is to the left and downstream to the right. Dashed lines show that the stretch from the start site through the terminator is copied into an RNA transcript. The transcript runs 5 prime to 3 prime: a 5 prime untranslated region, the start codon AUG, the coding sequence that will be translated, a stop codon, and a 3 prime untranslated region.</desc>
<defs><marker id="g304c-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs>
<text x="150" y="24" style="fill:var(--ink-2);font-size:12px">← upstream</text>
<text x="680" y="24" text-anchor="end" style="fill:var(--ink-2);font-size:12px">downstream →</text>
<g style="fill:none;stroke:var(--ink);stroke-width:1.5">
<path d="M200,76 L200,68 L310,68 L310,76 M255,68 L255,61"/>
<path d="M560,76 L560,68 L630,68 L630,76 M595,68 L595,61"/>
</g>
<text x="255" y="54" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Promoter</text>
<text x="595" y="54" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Terminator</text>
<g style="stroke-width:1.2">
<rect x="150" y="82" width="50" height="14" style="fill:var(--surface-2);stroke:var(--ink-2)"/><rect x="150" y="102" width="50" height="14" style="fill:var(--surface-2);stroke:var(--ink-2)"/>
<rect x="200" y="82" width="110" height="14" style="fill:var(--etc-soft);stroke:var(--etc)"/><rect x="200" y="102" width="110" height="14" style="fill:var(--etc-soft);stroke:var(--etc)"/>
<rect x="252" y="82" width="28" height="14" style="fill:var(--glyco-soft);stroke:var(--glyco)"/><rect x="252" y="102" width="28" height="14" style="fill:var(--glyco-soft);stroke:var(--glyco)"/>
<rect x="310" y="82" width="250" height="14" style="fill:var(--leaf-soft);stroke:var(--leaf)"/><rect x="310" y="102" width="250" height="14" style="fill:var(--leaf-soft);stroke:var(--leaf)"/>
<rect x="560" y="82" width="70" height="14" style="fill:var(--proton-soft);stroke:var(--proton)"/><rect x="560" y="102" width="70" height="14" style="fill:var(--proton-soft);stroke:var(--proton)"/>
<rect x="630" y="82" width="50" height="14" style="fill:var(--surface-2);stroke:var(--ink-2)"/><rect x="630" y="102" width="50" height="14" style="fill:var(--surface-2);stroke:var(--ink-2)"/>
</g>
<g style="fill:var(--ink-2);font-size:12px">
<text x="144" y="94" text-anchor="end">5′</text><text x="686" y="94">3′</text>
<text x="144" y="114" text-anchor="end">3′</text><text x="686" y="114">5′</text>
</g>
<g style="fill:var(--ink);font-size:12px">
<text x="12" y="94">coding strand</text><text x="12" y="114">template strand</text>
</g>
<line x1="266" y1="118" x2="266" y2="135" style="stroke:var(--ink);stroke-width:1"/>
<text x="266" y="149" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">TATA box</text>
<text x="266" y="164" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">≈ 25–30 bp upstream</text>
<path d="M310,118 L310,140 L334,140" style="fill:none;stroke:var(--ink);stroke-width:2" marker-end="url(#g304c-ah)"/>
<text x="342" y="144" style="fill:var(--ink);font-size:12px">transcription start site (+1)</text>
<g style="stroke:var(--ink-2);stroke-width:1.2;stroke-dasharray:4 3">
<line x1="310" y1="172" x2="310" y2="216"/><line x1="630" y1="122" x2="630" y2="216"/>
</g>
<text x="470" y="186" text-anchor="middle" style="fill:var(--ink-2);font-size:12px;font-style:italic">copied into RNA</text>
<line x1="310" y1="230" x2="360" y2="230" style="stroke:var(--krebs);stroke-width:4"/>
<rect x="360" y="222" width="24" height="16" style="fill:var(--krebs);stroke:var(--krebs);stroke-width:1.5"/>
<rect x="384" y="223" width="146" height="14" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:1.5"/>
<rect x="530" y="222" width="24" height="16" style="fill:var(--krebs);stroke:var(--krebs);stroke-width:1.5"/>
<line x1="554" y1="230" x2="630" y2="230" style="stroke:var(--krebs);stroke-width:4"/>
<g style="fill:var(--ink-2);font-size:12px"><text x="302" y="234" text-anchor="end">5′</text><text x="636" y="234">3′</text></g>
<text x="12" y="234" style="fill:var(--krebs);font-size:13px;font-weight:700">RNA transcript</text>
<g style="fill:var(--ink);font-size:12px">
<text x="356" y="212">start codon (AUG)</text>
<text x="542" y="212" text-anchor="middle">stop codon</text>
</g>
<g style="fill:none;stroke:var(--ink);stroke-width:1.2">
<path d="M310,244 L310,250 L360,250 L360,244"/><path d="M360,244 L360,250 L554,250 L554,244"/><path d="M554,244 L554,250 L630,250 L630,244"/>
</g>
<g style="fill:var(--ink);font-size:12px" text-anchor="middle">
<text x="335" y="266">5′ UTR</text><text x="457" y="266">coding sequence (translated)</text><text x="592" y="266">3′ UTR</text>
</g>
<text x="360" y="290" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">UTR = untranslated region: transcribed into RNA but not translated</text>
</svg>
<figcaption>A gene, based on the class slide. RNA polymerase binds the promoter (upstream), starts at +1 and stops after the terminator (downstream). Not all of the transcript is translated: the 5′ and 3′ untranslated regions sit on either side of the coding sequence.</figcaption>
</figure>

<p>The slide's figure also shows the RNA copy. It begins with a <span class="term">5′ untranslated region (5′ UTR)</span> before the <strong>start codon (AUG)</strong>, then the <strong>coding sequence</strong> read three bases at a time, ending at a <strong>stop codon</strong> (UAA, UAG or UGA), then the <span class="term">3′ untranslated region (3′ UTR)</span>. The UTRs are transcribed but never translated: the ribosome lands on the 5′ UTR and scans for the start codon, and the 3′ UTR holds signals that control how long the mRNA lasts.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The <strong>transcription</strong> start site (+1, where RNA polymerase begins) is <strong>not</strong> the start <strong>codon</strong> (AUG, where the ribosome begins translating). The 5′ UTR lies between them. Likewise, the terminator (end of transcription) is not the stop codon (end of translation).</p></div>
<p data-tier="likely">The slide's definition fits the genes this unit focuses on, but a more complete definition is a DNA sequence that is transcribed into a <em>functional product</em>: a protein or an RNA. The genes for rRNA, tRNA and snRNA are transcribed but never translated. In eukaryotes, most genes also contain <strong>introns</strong>, stretches that are transcribed and then cut out before the mRNA leaves the nucleus (see <em>Splicing</em> below).</p>

<h3 data-tier="essential">Template and coding strands</h3>
<p>A gene has two DNA strands, but RNA polymerase copies only <strong>one</strong> of them. The two strands have several names, and the worksheet uses them all, so learn the pairs:</p>
<div class="compare"><div><h4>Template strand</h4><ul><li>Also called the <strong>antisense</strong> or <strong>non-coding</strong> strand.</li><li>The strand RNA polymerase actually <strong>reads</strong>, in the <strong>3′ → 5′</strong> direction.</li><li>Its sequence is <strong>complementary</strong> (and antiparallel) to the mRNA.</li></ul></div><div><h4>Coding strand</h4><ul><li>Also called the <strong>sense</strong> or <strong>non-template</strong> strand.</li><li><strong>Not used</strong> for transcription (the slide: "the coding strand (5′ to 3′) is not used").</li><li>Its sequence is the <strong>same as the mRNA</strong>, with T wherever the mRNA has U.</li></ul></div></div>
<p>Why is the strand that isn't read called the "coding" strand? Because it reads exactly like the message. The mRNA is built against the template, so it is complementary to the template, and therefore identical to the template's partner, the coding strand (except U for T). Biologists publish gene sequences by writing the coding strand 5′ → 3′, since you can read the codons straight off it.</p>

<figure class="diagram">
<svg viewBox="0 0 680 220" role="img" aria-labelledby="g304d-t g304d-d">
<title id="g304d-t">Template strand, coding strand and mRNA</title>
<desc id="g304d-d">The class check question drawn out. The coding strand, also called the sense or non-template strand, reads 5 prime TCG ATG GCA 3 prime. The template strand, also called the antisense or non-coding strand, reads 3 prime AGC TAC CGT 5 prime. The mRNA is base-paired to the template strand and reads 5 prime UCG AUG GCA 3 prime, the same as the coding strand with U in place of T. An arrow shows that RNA polymerase moves from left to right, reading the template 3 prime to 5 prime and adding to the RNA's 3 prime end.</desc>
<defs><marker id="g304d-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--krebs)"/></marker></defs>
<line x1="214" y1="40" x2="502" y2="40" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="214" y1="92" x2="502" y2="92" style="stroke:var(--ink-2);stroke-width:3.5"/>
<line x1="214" y1="152" x2="502" y2="152" style="stroke:var(--krebs);stroke-width:3"/>
<g style="font-size:15px;font-weight:700" text-anchor="middle">
<text x="230" y="64" style="fill:var(--nt-t)">T</text><text x="258" y="64" style="fill:var(--nt-c)">C</text><text x="286" y="64" style="fill:var(--nt-g)">G</text>
<text x="330" y="64" style="fill:var(--nt-a)">A</text><text x="358" y="64" style="fill:var(--nt-t)">T</text><text x="386" y="64" style="fill:var(--nt-g)">G</text>
<text x="430" y="64" style="fill:var(--nt-g)">G</text><text x="458" y="64" style="fill:var(--nt-c)">C</text><text x="486" y="64" style="fill:var(--nt-a)">A</text>
<text x="230" y="116" style="fill:var(--nt-a)">A</text><text x="258" y="116" style="fill:var(--nt-g)">G</text><text x="286" y="116" style="fill:var(--nt-c)">C</text>
<text x="330" y="116" style="fill:var(--nt-t)">T</text><text x="358" y="116" style="fill:var(--nt-a)">A</text><text x="386" y="116" style="fill:var(--nt-c)">C</text>
<text x="430" y="116" style="fill:var(--nt-c)">C</text><text x="458" y="116" style="fill:var(--nt-g)">G</text><text x="486" y="116" style="fill:var(--nt-t)">T</text>
<text x="230" y="144" style="fill:var(--nt-u)">U</text><text x="258" y="144" style="fill:var(--nt-c)">C</text><text x="286" y="144" style="fill:var(--nt-g)">G</text>
<text x="330" y="144" style="fill:var(--nt-a)">A</text><text x="358" y="144" style="fill:var(--nt-u)">U</text><text x="386" y="144" style="fill:var(--nt-g)">G</text>
<text x="430" y="144" style="fill:var(--nt-g)">G</text><text x="458" y="144" style="fill:var(--nt-c)">C</text><text x="486" y="144" style="fill:var(--nt-a)">A</text>
</g>
<g style="stroke:var(--ink-2);stroke-width:1.2">
<line x1="230" y1="120" x2="230" y2="127"/><line x1="258" y1="120" x2="258" y2="127"/><line x1="286" y1="120" x2="286" y2="127"/>
<line x1="330" y1="120" x2="330" y2="127"/><line x1="358" y1="120" x2="358" y2="127"/><line x1="386" y1="120" x2="386" y2="127"/>
<line x1="430" y1="120" x2="430" y2="127"/><line x1="458" y1="120" x2="458" y2="127"/><line x1="486" y1="120" x2="486" y2="127"/>
</g>
<g style="fill:var(--ink-2);font-size:12px">
<text x="208" y="45" text-anchor="end">5′</text><text x="508" y="45">3′</text>
<text x="208" y="97" text-anchor="end">3′</text><text x="508" y="97">5′</text>
<text x="208" y="157" text-anchor="end">5′</text><text x="508" y="157">3′</text>
</g>
<text x="16" y="46" style="fill:var(--ink);font-size:13px;font-weight:700">Coding strand</text>
<text x="16" y="62" style="fill:var(--ink-2);font-size:12px">sense · non-template</text>
<text x="16" y="98" style="fill:var(--ink);font-size:13px;font-weight:700">Template strand</text>
<text x="16" y="114" style="fill:var(--ink-2);font-size:12px">antisense · non-coding</text>
<text x="16" y="148" style="fill:var(--krebs);font-size:13px;font-weight:700">mRNA</text>
<text x="16" y="164" style="fill:var(--ink-2);font-size:12px">pairs with the template</text>
<g style="fill:var(--ink-2);font-size:12px">
<text x="532" y="48">same as the mRNA</text><text x="532" y="64">(T in place of U)</text>
<text x="532" y="100">read 3′ → 5′ by</text><text x="532" y="116">RNA polymerase</text>
<text x="532" y="157">built 5′ → 3′</text>
</g>
<line x1="230" y1="184" x2="486" y2="184" style="stroke:var(--krebs);stroke-width:2.5" marker-end="url(#g304d-ah)"/>
<text x="358" y="206" text-anchor="middle" style="fill:var(--ink);font-size:12px">RNA polymerase moves this way, adding each new nucleotide to the RNA's 3′ end</text>
</svg>
<figcaption>The slide's "Check your understanding" sequence drawn out. Read down any column: the mRNA base pairs with the template base above it, and matches the coding-strand base at the top (U for T).</figcaption>
</figure>

<p>The worksheet's labelling diagram (questions 1–6) shows exactly this arrangement: transcription factors and the promoter at the upstream end, RNA polymerase over the open DNA, the mRNA paired to the template strand, and the coding strand pushed aside. The answer key's labels are in <em>Check your understanding</em>, question 3.</p>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>In the transcription-bubble picture on slide 13, <strong>both</strong> right-hand ends of the DNA are labelled 5′. Each strand has one 5′ end and one 3′ end, and the two strands are antiparallel. The coding strand runs 5′ → 3′ left to right, so its right-hand end is <strong>3′</strong>; the template strand's right-hand end is 5′. The sequences written inside that picture (5′-ATGCGAT on the coding strand, 3′-TACGCTA on the template, and 5′-AUGCGAU-3′ mRNA) are all correct.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>The <strong>sense</strong> strand "makes sense": it reads the same as the message. The <strong>template</strong> is the mould, so it is the opposite (complementary) of what comes out of it.</p></div>
<p data-tier="likely">Which strand is the template is a property of each <em>gene</em>, not of the whole chromosome. The promoter's orientation decides it: RNA polymerase always binds so that it can read the template 3′ → 5′. Neighbouring genes on the same chromosome can use opposite strands as their templates, so they are transcribed in opposite directions.</p>

<h3 data-tier="essential">Three phases of transcription</h3>
<p>The enzyme that does transcription is <span class="term">RNA polymerase</span>. Like DNA polymerase, it builds a nucleic acid by complementary base pairing against a template. The class slide divides transcription into <strong>three main phases</strong>, in this order (worksheet Q8):</p>
<ol class="steps">
<li><p class="step-head">Initiation</p><p>RNA polymerase binds to the <strong>promoter</strong> (which contains the TATA box), helped by transcription factors, and separates the two DNA strands at the start of the gene.</p></li>
<li><p class="step-head">Elongation</p><p>RNA polymerase moves along the gene, reading the <strong>template strand 3′ → 5′</strong> and building the RNA <strong>5′ → 3′</strong>.</p></li>
<li><p class="step-head">Termination</p><p>When RNA polymerase transcribes the <strong>terminator sequence</strong>, the RNA transcript detaches from the template and the polymerase lets go of the DNA.</p></li>
</ol>
<p>The slide's picture shows the same gene three times: polymerase arriving at the promoter, polymerase on the gene with RNA trailing out, and finally the released RNA with the polymerase drifting away past the stop (terminator) sequence.</p>
<h4>What RNA polymerase can and can't do</h4>
<ul>
<li>It joins <strong>ribonucleotides</strong> (A, U, G and C, each arriving as a nucleoside triphosphate such as ATP or UTP) with <strong>phosphodiester bonds</strong>.</li>
<li>It can only add a nucleotide to the <strong>3′ end</strong> of a growing RNA, so RNA is always built <strong>5′ → 3′</strong>, exactly like DNA.</li>
<li>It <strong>unwinds the DNA itself</strong>: no helicase is needed, and only a short stretch is open at any time.</li>
<li>It <strong>doesn't need a primer</strong>. Unlike DNA polymerase (<a href="#/lesson/3.03">lesson 3.03</a>), RNA polymerase can start a brand-new chain from nothing at the start site.</li>
<li>It lacks the proofreading of DNA polymerase, so it makes more mistakes (roughly 1 per 10<sup>4</sup>–10<sup>5</sup> nucleotides). These errors are not inherited: they affect only one short-lived RNA copy, and the next copy from the same gene will probably be correct (<a href="#/lesson/3.06">lesson 3.06</a>).</li>
</ul>
<p data-tier="extra">Eukaryotes have three RNA polymerases: <strong>I</strong> makes most rRNA, <strong>II</strong> makes pre-mRNA (and most snRNAs), <strong>III</strong> makes tRNA. Bacteria have just one. In this unit, "RNA polymerase" in a eukaryote means RNA polymerase II.</p>

<h3 data-tier="essential">Initiation</h3>
<p>From the class slide on initiation:</p>
<ul>
<li><strong>RNA polymerase binds to the promoter region</strong> (which contains the <strong>TATA box</strong>).</li>
<li>It <strong>disrupts the hydrogen bonds between the strands</strong>, opening the DNA so the template can be read.</li>
</ul>
<p>In eukaryotes, RNA polymerase II can't find a promoter on its own. It needs <span class="term">transcription factors</span>. The worksheet answer key defines them well: transcription factors are <strong>proteins that bind to specific sequences of DNA (the promoter region) and serve as pointers for RNA polymerase</strong>, so that it knows which section, or gene, to transcribe. They act during <strong>initiation</strong> (worksheet Q9).</p>
<p>The slide's three-part picture (panels A, B, C) shows the order of assembly. <strong>A</strong>: the promoter, with its TATA box, just ahead of the gene sequence to be transcribed. <strong>B</strong>: a transcription factor called <span class="term">TATA-binding protein (TBP)</span> grips the TATA box, and another transcription factor arrives. <strong>C</strong>: RNA polymerase II binds beside the transcription factors, and transcription begins. Transcription factors plus RNA polymerase on the promoter make up the <span class="term">transcription initiation complex</span>.</p>

<figure class="diagram stepper">
<svg viewBox="0 0 700 290" role="img" aria-labelledby="g304e-t g304e-d">
<title id="g304e-t">Initiation of transcription at a eukaryotic promoter</title>
<desc id="g304e-d">A stretch of DNA with the coding strand on top, running 5 prime to 3 prime from left to right, and the template strand below. Upstream, on the left, is the promoter containing the TATA box about 25 to 30 base pairs before the start site, numbered plus 1; the gene is downstream, to the right. Step 1 shows the bare promoter. In step 2 the TATA-binding protein, TBP, binds the TATA box. In step 3 other transcription factors gather around TBP on the promoter. In step 4 RNA polymerase II binds to the transcription factors over the start site, completing the transcription initiation complex. In step 5 RNA polymerase breaks the hydrogen bonds between the two strands and opens the DNA at the start site. In step 6 RNA polymerase has begun making RNA, 5 prime end first, and moves downstream away from the promoter, leaving the transcription factors behind; the DNA behind it closes again.</desc>
<defs><marker id="g304e-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs>
<text x="40" y="28" style="fill:var(--ink-2);font-size:12px">← upstream</text>
<text x="660" y="28" text-anchor="end" style="fill:var(--ink-2);font-size:12px">downstream →</text>
<rect x="110" y="153" width="210" height="34" style="fill:var(--etc-soft)"/>
<rect x="206" y="153" width="56" height="34" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<line x1="40" y1="160" x2="660" y2="160" style="stroke:var(--ink-2);stroke-width:2.5"/>
<line x1="40" y1="180" x2="660" y2="180" style="stroke:var(--ink-2);stroke-width:3.5"/>
<g style="fill:var(--ink-2);font-size:12px">
<text x="34" y="164" text-anchor="end">5′</text><text x="666" y="164">3′</text>
<text x="34" y="184" text-anchor="end">3′</text><text x="666" y="184">5′</text>
<text x="44" y="150">coding strand</text><text x="44" y="201">template strand</text>
</g>
<text x="234" y="206" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">TATA box (−25 to −30)</text>
<path d="M110,214 L110,220 L320,220 L320,214 M215,220 L215,226" style="fill:none;stroke:var(--ink);stroke-width:1.5"/>
<text x="215" y="240" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">promoter</text>
<path d="M320,250 L320,256 L660,256 L660,250 M490,256 L490,262" style="fill:none;stroke:var(--ink);stroke-width:1.5"/>
<text x="490" y="278" text-anchor="middle" style="fill:var(--ink);font-size:12px">gene: the transcribed region (downstream)</text>
<g data-upto="3">
<path d="M320,186 L320,204 L344,204" style="fill:none;stroke:var(--ink);stroke-width:2" marker-end="url(#g304e-ah)"/>
<text x="350" y="208" style="fill:var(--ink);font-size:12px">+1 start site</text>
</g>
<g data-from="2">
<path d="M202,156 C202,112 266,112 266,156 L252,156 C252,130 216,130 216,156 Z" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:2"/>
<text x="234" y="152" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">TBP</text>
</g>
<g data-step="2"><text x="234" y="100" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">TATA-binding protein (TBP)</text></g>
<g data-from="3">
<g style="fill:var(--link-soft);stroke:var(--link);stroke-width:2">
<ellipse cx="234" cy="100" rx="26" ry="14"/><ellipse cx="290" cy="134" rx="18" ry="14"/><ellipse cx="176" cy="134" rx="20" ry="14"/>
</g>
<text x="40" y="96" style="fill:var(--ink);font-size:12px;font-weight:700">transcription factors</text>
<line x1="118" y1="101" x2="160" y2="124" style="stroke:var(--ink);stroke-width:1"/>
</g>
<g data-step="4 5">
<ellipse cx="352" cy="170" rx="46" ry="34" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:2"/>
<line x1="384" y1="142" x2="402" y2="127" style="stroke:var(--ink);stroke-width:1"/>
<text x="404" y="122" style="fill:var(--ink);font-size:13px;font-weight:700">RNA polymerase II</text>
<path d="M156,72 L156,66 L398,66 L398,72 M277,66 L277,60" style="fill:none;stroke:var(--ink);stroke-width:1.5"/>
<text x="277" y="52" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">transcription initiation complex</text>
</g>
<g data-step="4">
<line x1="308" y1="160" x2="396" y2="160" style="stroke:var(--ink-2);stroke-width:2.5"/>
<line x1="308" y1="180" x2="396" y2="180" style="stroke:var(--ink-2);stroke-width:3.5"/>
</g>
<g data-step="5">
<path d="M308,160 C318,160 324,146 336,146 L370,146 C382,146 388,160 396,160" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<path d="M308,180 C318,180 324,194 336,194 L370,194 C382,194 388,180 396,180" style="fill:none;stroke:var(--ink-2);stroke-width:3.5"/>
<text x="404" y="226" style="fill:var(--ink);font-size:12px">H-bonds broken: DNA opens at +1</text>
</g>
<g data-step="6">
<ellipse cx="452" cy="170" rx="46" ry="34" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:2"/>
<path d="M408,160 C418,160 424,146 436,146 L470,146 C482,146 488,160 496,160" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<path d="M408,180 C418,180 424,194 436,194 L470,194 C482,194 488,180 496,180" style="fill:none;stroke:var(--ink-2);stroke-width:3.5"/>
<path d="M468,186 L434,186 C418,186 408,196 398,212 C390,226 380,234 368,236" style="fill:none;stroke:var(--krebs);stroke-width:3"/>
<text x="468" y="178" text-anchor="middle" style="fill:var(--ink-2);font-size:11px">3′</text>
<text x="362" y="240" text-anchor="end" style="fill:var(--ink-2);font-size:12px">5′</text>
<text x="340" y="240" text-anchor="end" style="fill:var(--krebs);font-size:13px;font-weight:700">RNA</text>
<line x1="488" y1="146" x2="504" y2="132" style="stroke:var(--ink);stroke-width:1"/>
<text x="506" y="128" style="fill:var(--ink);font-size:13px;font-weight:700">RNA polymerase II</text>
<text x="506" y="144" style="fill:var(--ink-2);font-size:12px">moving downstream →</text>
</g>
</svg>
<ol class="step-captions">
<li><strong>The promoter.</strong> Upstream of the start site (+1) is the gene's promoter. In eukaryotes it contains the TATA box, a short T- and A-rich sequence about 25–30 base pairs upstream. Nothing is bound yet.</li>
<li><strong>TBP binds the TATA box.</strong> The first transcription factor, TATA-binding protein, recognizes the TATA box and clamps onto it. This marks the promoter and fixes which way transcription will go.</li>
<li><strong>More transcription factors assemble.</strong> Other transcription factors bind to the promoter and to TBP. Together they act as a landing pad that points RNA polymerase to the right gene.</li>
<li><strong>RNA polymerase II joins.</strong> RNA polymerase II binds to the transcription factors, positioned over the start site. Transcription factors plus polymerase form the transcription initiation complex.</li>
<li><strong>The DNA opens.</strong> RNA polymerase breaks the hydrogen bonds between the base pairs at the start site, separating the strands and exposing the template strand's bases.</li>
<li><strong>RNA synthesis begins.</strong> RNA polymerase joins the first ribonucleotides (no primer needed) and moves downstream, leaving the promoter and the transcription factors behind. The DNA closes up again behind it. Initiation is over; elongation has begun.</li>
</ol>
<figcaption>Initiation in a eukaryote, based on the slide's three-part picture. Use Next to build the transcription initiation complex.</figcaption>
</figure>

<p>Why is the TATA box rich in T and A? An A–T base pair is held by only <strong>two</strong> hydrogen bonds, compared with <strong>three</strong> for G–C (<a href="#/lesson/3.02">lesson 3.02</a>). A stretch of A–T pairs is easier to pull apart, which makes it a good place for the DNA to start opening.</p>
<div class="callout key"><p class="callout-title">On the test</p><ul><li>Transcription factors = <strong>proteins</strong> that bind the <strong>promoter</strong> and point RNA polymerase to the gene; they act in <strong>initiation</strong>.</li><li>TATA box: in the promoter, about <strong>25–30 bp upstream</strong> of the start site; bound first by <strong>TBP</strong>.</li><li>RNA polymerase binds the promoter and <strong>disrupts the H-bonds</strong> between the strands.</li></ul></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Transcription factors are <strong>proteins</strong>, not DNA sequences and not RNA. The promoter and the TATA box are the DNA <em>sequences</em>; the transcription factors are the proteins that <em>bind</em> them.</p></div>
<p data-tier="likely">Initiation is the main point where a cell controls a gene. Besides the general transcription factors in the slide's picture, regulatory proteins (<strong>activators</strong> and <strong>repressors</strong>) bind nearby DNA and make the initiation complex form more or less often. Bacteria use the same idea with operons (<a href="#/lesson/3.07">lesson 3.07</a>); their RNA polymerase finds promoters with a <strong>sigma factor</strong> instead of TBP.</p>

<h3 data-tier="essential">Elongation</h3>
<p>From the class slides on elongation:</p>
<ul>
<li>RNA polymerase uses the DNA <strong>template strand (3′ to 5′)</strong>.</li>
<li>The <strong>coding strand (5′ to 3′) is not used</strong>.</li>
<li>The mRNA is built in a <strong>5′ to 3′</strong> direction.</li>
</ul>
<p>RNA polymerase moves along the gene inside a <span class="term">transcription bubble</span>, a short region (about 10–20 base pairs) where the DNA is unwound. In the bubble, the template strand's bases are exposed. Free ribonucleotides in the nucleus diffuse into the polymerase, and the one whose base is complementary to the next template base is held in place by hydrogen bonds. The polymerase then links it to the RNA.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Template DNA base</th><th>A</th><th>T</th><th>G</th><th>C</th></tr></thead>
<tbody><tr><td><strong>RNA base added</strong></td><td><span class="nt-U">U</span></td><td><span class="nt-A">A</span></td><td><span class="nt-C">C</span></td><td><span class="nt-G">G</span></td></tr></tbody>
</table></div>

<figure class="diagram stepper">
<svg viewBox="0 0 700 300" role="img" aria-labelledby="g304f-t g304f-d">
<title id="g304f-t">Elongation inside the transcription bubble</title>
<desc id="g304f-d">RNA polymerase, a large oval, encloses a transcription bubble where the two DNA strands are pulled apart. The coding strand runs along the top, 5 prime on the left, and is not used. The template strand runs along the bottom, 3 prime on the left, and its exposed bases read T A C G G A T T C, the start of the worksheet's question 10 sequence. In step 1 the RNA made so far, 5 prime A U G C C, is base-paired to the template. In step 2 a UTP, uracil with three phosphates, arrives to pair with the next template base, A. In step 3 it has been joined to the 3 prime end of the RNA and two phosphates are released. In step 4 the polymerase has moved downstream: the DNA ahead has opened, the DNA behind has closed again, and the older 5 prime end of the RNA has peeled off the template and leaves the polymerase. Step 5 labels the directions: the template is read 3 prime to 5 prime and the RNA grows 5 prime to 3 prime.</desc>
<defs>
<marker id="g304f-ak" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--krebs)"/></marker>
<marker id="g304f-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker>
</defs>
<g data-upto="3">
<ellipse cx="320" cy="162" rx="172" ry="96" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:2"/>
<text x="480" y="62" style="fill:var(--ink);font-size:13px;font-weight:700">RNA polymerase</text>
<g style="stroke:var(--ink-2);stroke-width:1.5;stroke-opacity:.5">
<line x1="54" y1="144" x2="54" y2="166"/><line x1="68" y1="144" x2="68" y2="166"/><line x1="82" y1="144" x2="82" y2="166"/><line x1="96" y1="144" x2="96" y2="166"/><line x1="110" y1="144" x2="110" y2="166"/><line x1="124" y1="144" x2="124" y2="166"/><line x1="138" y1="144" x2="138" y2="166"/>
<line x1="504" y1="144" x2="504" y2="166"/><line x1="518" y1="144" x2="518" y2="166"/><line x1="532" y1="144" x2="532" y2="166"/><line x1="546" y1="144" x2="546" y2="166"/><line x1="560" y1="144" x2="560" y2="166"/><line x1="574" y1="144" x2="574" y2="166"/><line x1="588" y1="144" x2="588" y2="166"/><line x1="602" y1="144" x2="602" y2="166"/><line x1="616" y1="144" x2="616" y2="166"/><line x1="630" y1="144" x2="630" y2="166"/><line x1="644" y1="144" x2="644" y2="166"/>
</g>
<path d="M40,140 L150,140 C175,140 175,96 200,96 L440,96 C465,96 465,140 490,140 L660,140" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<path d="M40,170 L150,170 C175,170 175,226 200,226 L440,226 C465,226 465,170 490,170 L660,170" style="fill:none;stroke:var(--ink-2);stroke-width:3.5"/>
<g style="font-size:14px;font-weight:700" text-anchor="middle">
<text x="220" y="216" style="fill:var(--nt-t)">T</text><text x="246" y="216" style="fill:var(--nt-a)">A</text><text x="272" y="216" style="fill:var(--nt-c)">C</text><text x="298" y="216" style="fill:var(--nt-g)">G</text><text x="324" y="216" style="fill:var(--nt-g)">G</text><text x="350" y="216" style="fill:var(--nt-a)">A</text><text x="376" y="216" style="fill:var(--nt-t)">T</text><text x="402" y="216" style="fill:var(--nt-t)">T</text><text x="428" y="216" style="fill:var(--nt-c)">C</text>
<text x="220" y="190" style="fill:var(--nt-a)">A</text><text x="246" y="190" style="fill:var(--nt-u)">U</text><text x="272" y="190" style="fill:var(--nt-g)">G</text><text x="298" y="190" style="fill:var(--nt-c)">C</text><text x="324" y="190" style="fill:var(--nt-c)">C</text>
</g>
<g style="stroke:var(--ink-2);stroke-width:1.2">
<line x1="220" y1="194" x2="220" y2="201"/><line x1="246" y1="194" x2="246" y2="201"/><line x1="272" y1="194" x2="272" y2="201"/><line x1="298" y1="194" x2="298" y2="201"/><line x1="324" y1="194" x2="324" y2="201"/>
</g>
<line x1="210" y1="172" x2="334" y2="172" style="stroke:var(--krebs);stroke-width:3"/>
<text x="210" y="163" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">5′</text>
</g>
<g data-upto="2"><text x="334" y="163" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">3′</text></g>
<g data-step="2">
<text x="350" y="140" text-anchor="middle" style="fill:var(--nt-u);font-size:14px;font-weight:700">U</text>
<line x1="356" y1="135" x2="390" y2="135" style="stroke:var(--glyco);stroke-width:1.5"/>
<g style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"><circle cx="366" cy="135" r="6"/><circle cx="380" cy="135" r="6"/><circle cx="394" cy="135" r="6"/></g>
<text x="408" y="140" style="fill:var(--ink);font-size:13px;font-weight:700">UTP</text>
<line x1="350" y1="147" x2="350" y2="176" style="stroke:var(--krebs);stroke-width:2" marker-end="url(#g304f-ak)"/>
</g>
<g data-step="3">
<line x1="334" y1="172" x2="360" y2="172" style="stroke:var(--krebs);stroke-width:3"/>
<text x="350" y="190" text-anchor="middle" style="fill:var(--nt-u);font-size:14px;font-weight:700">U</text>
<line x1="350" y1="194" x2="350" y2="201" style="stroke:var(--ink-2);stroke-width:1.2"/>
<text x="360" y="163" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">3′</text>
<line x1="386" y1="128" x2="400" y2="128" style="stroke:var(--glyco);stroke-width:1.5"/>
<g style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"><circle cx="380" cy="128" r="6"/><circle cx="394" cy="128" r="6"/></g>
<text x="408" y="133" style="fill:var(--ink-2);font-size:12px">released</text>
</g>
<g data-from="4">
<ellipse cx="424" cy="162" rx="172" ry="96" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:2"/>
<text x="560" y="58" style="fill:var(--ink);font-size:13px;font-weight:700">RNA polymerase</text>
<g style="stroke:var(--ink-2);stroke-width:1.5;stroke-opacity:.5">
<line x1="54" y1="144" x2="54" y2="166"/><line x1="68" y1="144" x2="68" y2="166"/><line x1="82" y1="144" x2="82" y2="166"/><line x1="96" y1="144" x2="96" y2="166"/><line x1="110" y1="144" x2="110" y2="166"/><line x1="124" y1="144" x2="124" y2="166"/><line x1="138" y1="144" x2="138" y2="166"/><line x1="152" y1="144" x2="152" y2="166"/><line x1="166" y1="144" x2="166" y2="166"/><line x1="180" y1="144" x2="180" y2="166"/><line x1="194" y1="144" x2="194" y2="166"/><line x1="208" y1="144" x2="208" y2="166"/><line x1="222" y1="144" x2="222" y2="166"/><line x1="236" y1="144" x2="236" y2="166"/>
<line x1="606" y1="144" x2="606" y2="166"/><line x1="620" y1="144" x2="620" y2="166"/><line x1="634" y1="144" x2="634" y2="166"/><line x1="648" y1="144" x2="648" y2="166"/>
</g>
<path d="M40,140 L254,140 C279,140 279,96 304,96 L544,96 C569,96 569,140 594,140 L660,140" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<path d="M40,170 L254,170 C279,170 279,226 304,226 L544,226 C569,226 569,170 594,170 L660,170" style="fill:none;stroke:var(--ink-2);stroke-width:3.5"/>
<g style="font-size:14px;font-weight:700" text-anchor="middle">
<text x="324" y="216" style="fill:var(--nt-g)">G</text><text x="350" y="216" style="fill:var(--nt-a)">A</text><text x="376" y="216" style="fill:var(--nt-t)">T</text><text x="402" y="216" style="fill:var(--nt-t)">T</text><text x="428" y="216" style="fill:var(--nt-c)">C</text><text x="454" y="216" style="fill:var(--nt-g)">G</text><text x="480" y="216" style="fill:var(--nt-t)">T</text><text x="506" y="216" style="fill:var(--nt-c)">C</text><text x="532" y="216" style="fill:var(--nt-c)">C</text>
<text x="324" y="190" style="fill:var(--nt-c)">C</text><text x="350" y="190" style="fill:var(--nt-u)">U</text><text x="376" y="190" style="fill:var(--nt-a)">A</text><text x="402" y="190" style="fill:var(--nt-a)">A</text><text x="428" y="190" style="fill:var(--nt-g)">G</text><text x="454" y="190" style="fill:var(--nt-c)">C</text>
</g>
<g style="stroke:var(--ink-2);stroke-width:1.2">
<line x1="324" y1="194" x2="324" y2="201"/><line x1="350" y1="194" x2="350" y2="201"/><line x1="376" y1="194" x2="376" y2="201"/><line x1="402" y1="194" x2="402" y2="201"/><line x1="428" y1="194" x2="428" y2="201"/><line x1="454" y1="194" x2="454" y2="201"/>
</g>
<path d="M464,172 L312,172 C290,172 272,150 260,124 C250,102 240,80 228,62" style="fill:none;stroke:var(--krebs);stroke-width:3"/>
<text x="222" y="62" text-anchor="end" style="fill:var(--ink-2);font-size:12px">5′</text>
<text x="236" y="46" style="fill:var(--krebs);font-size:13px;font-weight:700">RNA</text>
<text x="464" y="163" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">3′</text>
</g>
<g data-step="5">
<g style="fill:var(--ink);font-size:12px" text-anchor="middle">
<text x="110" y="96">DNA rewinds</text><text x="110" y="110">behind</text>
<text x="640" y="96">DNA unwinds</text><text x="640" y="110">ahead</text>
</g>
<text x="420" y="140" text-anchor="middle" style="fill:var(--krebs);font-size:12px;font-weight:700">RNA grows 5′ → 3′</text>
<line x1="330" y1="272" x2="520" y2="272" style="stroke:var(--ink);stroke-width:2" marker-end="url(#g304f-ah)"/>
<text x="425" y="292" text-anchor="middle" style="fill:var(--ink);font-size:12px">RNA polymerase moves along the template, reading it 3′ → 5′</text>
</g>
<g style="fill:var(--ink-2);font-size:12px">
<text x="34" y="144" text-anchor="end">5′</text><text x="666" y="144">3′</text>
<text x="34" y="174" text-anchor="end">3′</text><text x="666" y="174">5′</text>
<text x="40" y="128">coding strand</text><text x="40" y="194">template strand</text>
</g>
</svg>
<ol class="step-captions">
<li><strong>Inside the transcription bubble.</strong> RNA polymerase holds about 10–20 base pairs of DNA unwound. The template strand here starts 3′-TACGGATTC (the worksheet's Q10 sequence), and the RNA made so far, 5′-AUGCC, is base-paired to it in a short RNA–DNA hybrid. The coding strand is not used.</li>
<li><strong>The next ribonucleotide arrives.</strong> The next template base is A, so the matching ribonucleotide is UTP: uracil carrying three phosphates. RNA pairs U, not T, with A.</li>
<li><strong>Joined to the 3′ end.</strong> RNA polymerase bonds the new nucleotide's inner phosphate to the free 3′-OH at the end of the RNA, making a phosphodiester bond. The other two phosphates break off, and that releases the energy for the bond. The RNA (5′-AUGCCU) has grown at its 3′ end.</li>
<li><strong>The polymerase moves on.</strong> RNA polymerase slides downstream, unwinding the DNA ahead of it. Behind it, the two DNA strands pair up and rewind. The older 5′ end of the RNA peels off the template and leaves the polymerase.</li>
<li><strong>Directions to remember.</strong> The template is read 3′ → 5′, and the RNA grows 5′ → 3′, antiparallel to it. No primer is needed. This cycle repeats one nucleotide at a time until the polymerase reaches the terminator.</li>
</ol>
<figcaption>Elongation, using the start of the worksheet's question 10 template strand. Use Next to add one nucleotide and move the bubble.</figcaption>
</figure>

<p>Why 5′ → 3′? Each incoming ribonucleotide carries three phosphates on its 5′ carbon, and RNA polymerase joins that 5′ phosphate to the 3′-OH at the end of the chain, so new nucleotides can only be added at the <strong>3′ end</strong>. Breaking off the outer two phosphates powers the bond. Because the RNA must be antiparallel to the template, the template is read <strong>3′ → 5′</strong>. Behind the polymerase the DNA zips back up, unchanged, ready to be transcribed again.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>"Read 3′ to 5′, write 5′ to 3′."</strong> It is the same rule for every polymerase you meet in this unit: DNA polymerase III in replication and RNA polymerase in transcription both read their template 3′ → 5′ and build 5′ → 3′.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><ul><li>"mRNA is built 3′ → 5′ because the template is read 3′ → 5′." No: the template and the new strand run in <strong>opposite</strong> directions. The mRNA is always built <strong>5′ → 3′</strong>.</li><li>"RNA polymerase reads the coding strand." No: it reads the <strong>template</strong> strand. The coding strand just has the same sequence as the product.</li><li>"RNA contains T." Never: in RNA, A pairs with <strong>U</strong>.</li></ul></div>
<p data-tier="likely">A busy gene doesn't wait for one polymerase to finish: as soon as one clears the promoter, another can start, so dozens of RNA polymerases may travel along the same gene at once, each trailing a longer RNA the farther it has gone.</p>

<h3 data-tier="essential">Termination</h3>
<p>From the class slide: the <strong>primary transcript</strong> (called <strong>pre-mRNA</strong> in eukaryotes) <strong>detaches from the template when RNA polymerase transcribes the terminator sequence</strong>. The polymerase releases the DNA, and the DNA rewinds completely. The slide's figure shows the rewound DNA behind the polymerase, then the completed RNA transcript, 5′ to 3′, with the polymerase floating away.</p>
<p>The <span class="term">primary transcript</span> is the RNA exactly as RNA polymerase made it. In eukaryotes the primary transcript of a protein-coding gene is called <span class="term">pre-mRNA</span>, because it must be processed before it can be translated (next sections). In prokaryotes the primary transcript is already usable mRNA.</p>
<p data-tier="likely">How the terminator works differs between the two kinds of cells, and the slide figures show a hint of each (a hairpin at the 3′ end on the gene slide, a "polyadenylation signal" on the termination slide):</p>

<figure class="diagram">
<svg viewBox="0 0 700 300" role="img" aria-labelledby="g304g-t g304g-d">
<title id="g304g-t">Termination in prokaryotes and eukaryotes</title>
<desc id="g304g-d">Top, prokaryotes: the DNA has a terminator region. When it is transcribed, the end of the RNA contains a G and C rich sequence that pairs with itself to form a hairpin, followed by a string of U's. The hairpin stalls RNA polymerase and the weak A-U pairs let go, so the RNA is released and the polymerase falls off the DNA. Bottom, eukaryotes: RNA polymerase II transcribes past the polyadenylation signal, which reads AAUAAA in the pre-mRNA. Proteins cut the pre-mRNA 10 to 35 nucleotides downstream of that signal, freeing its 3 prime end, while the polymerase keeps transcribing a little farther and then falls off.</desc>
<text x="20" y="24" style="fill:var(--ink);font-size:13px;font-weight:700">Prokaryotes: a terminator hairpin</text>
<rect x="374" y="44" width="100" height="26" style="fill:var(--proton-soft)"/>
<line x1="60" y1="50" x2="660" y2="50" style="stroke:var(--ink-2);stroke-width:2.5"/>
<line x1="60" y1="64" x2="660" y2="64" style="stroke:var(--ink-2);stroke-width:3.5"/>
<g style="fill:var(--ink-2);font-size:12px">
<text x="54" y="54" text-anchor="end">5′</text><text x="666" y="54">3′</text>
<text x="54" y="68" text-anchor="end">3′</text><text x="666" y="68">5′</text>
<text x="74" y="114" text-anchor="end">5′</text><text x="476" y="114">3′</text>
</g>
<text x="424" y="86" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">terminator</text>
<path d="M80,110 L380,110 L380,140 A14,14 0 0 0 408,140 L408,110 L470,110" style="fill:none;stroke:var(--krebs);stroke-width:3"/>
<g style="stroke-width:3">
<line x1="382" y1="118" x2="394" y2="118" style="stroke:var(--nt-g)"/><line x1="394" y1="118" x2="406" y2="118" style="stroke:var(--nt-c)"/>
<line x1="382" y1="127" x2="394" y2="127" style="stroke:var(--nt-c)"/><line x1="394" y1="127" x2="406" y2="127" style="stroke:var(--nt-g)"/>
<line x1="382" y1="136" x2="394" y2="136" style="stroke:var(--nt-g)"/><line x1="394" y1="136" x2="406" y2="136" style="stroke:var(--nt-c)"/>
</g>
<g style="fill:var(--nt-u);font-size:12px;font-weight:700" text-anchor="middle">
<text x="424" y="128">U</text><text x="438" y="128">U</text><text x="452" y="128">U</text><text x="466" y="128">U</text>
</g>
<text x="120" y="100" style="fill:var(--krebs);font-size:13px;font-weight:700">RNA</text>
<text x="372" y="140" text-anchor="end" style="fill:var(--ink);font-size:12px">G–C rich hairpin</text>
<text x="416" y="146" style="fill:var(--ink);font-size:12px">string of U's</text>
<ellipse cx="570" cy="112" rx="34" ry="20" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:2"/>
<text x="570" y="116" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">RNA pol</text>
<text x="570" y="148" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">released</text>
<line x1="20" y1="164" x2="680" y2="164" style="stroke:var(--line);stroke-width:1.5"/>
<text x="20" y="188" style="fill:var(--ink);font-size:13px;font-weight:700">Eukaryotes: cut after the polyadenylation signal</text>
<line x1="60" y1="210" x2="660" y2="210" style="stroke:var(--ink-2);stroke-width:2.5"/>
<line x1="60" y1="224" x2="660" y2="224" style="stroke:var(--ink-2);stroke-width:3.5"/>
<ellipse cx="600" cy="217" rx="30" ry="22" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:2"/>
<text x="600" y="221" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">pol II</text>
<text x="640" y="190" text-anchor="end" style="fill:var(--ink-2);font-size:12px">keeps going a little, then falls off</text>
<g style="fill:var(--ink-2);font-size:12px">
<text x="54" y="214" text-anchor="end">5′</text><text x="666" y="214">3′</text>
<text x="54" y="228" text-anchor="end">3′</text><text x="666" y="228">5′</text>
<text x="74" y="266" text-anchor="end">5′</text><text x="462" y="252" text-anchor="end">3′</text>
</g>
<line x1="80" y1="262" x2="468" y2="262" style="stroke:var(--krebs);stroke-width:3"/>
<rect x="330" y="254" width="70" height="16" rx="3" style="fill:var(--surface);stroke:var(--krebs);stroke-width:1.5"/>
<text x="365" y="266" text-anchor="middle" style="fill:var(--nt-a);font-size:11px;font-weight:700">AAUAAA</text>
<text x="365" y="246" text-anchor="middle" style="fill:var(--ink);font-size:12px">polyadenylation signal</text>
<text x="120" y="252" style="fill:var(--krebs);font-size:13px;font-weight:700">pre-mRNA</text>
<g style="stroke:var(--proton);stroke-width:2.5"><line x1="473" y1="255" x2="487" y2="269"/><line x1="473" y1="269" x2="487" y2="255"/></g>
<text x="480" y="290" text-anchor="middle" style="fill:var(--ink);font-size:12px">cut 10–35 nucleotides downstream</text>
</svg>
<figcaption>Termination. In bacteria the RNA's own hairpin knocks the polymerase off. In eukaryotes the pre-mRNA is cut free after the AAUAAA signal, and the new 3′ end receives the poly-A tail.</figcaption>
</figure>

<div class="compare" data-tier="likely"><div><h4>Prokaryotes</h4><ul><li>The terminator DNA is transcribed into RNA that contains a <strong>G–C rich</strong> stretch followed by a string of <strong>U's</strong>.</li><li>The G–C stretch pairs with itself and forms a <strong>hairpin</strong> in the RNA, which makes the polymerase pause.</li><li>The RNA is held to the template only by weak <strong>A–U</strong> pairs (two H-bonds each), so it slips off, and the polymerase releases the DNA.</li></ul></div><div><h4>Eukaryotes</h4><ul><li>RNA polymerase II transcribes the <strong>polyadenylation signal</strong>, which reads <strong>AAUAAA</strong> in the pre-mRNA.</li><li>Proteins that recognize AAUAAA <strong>cut the pre-mRNA 10–35 nucleotides downstream</strong>, releasing it.</li><li>The polymerase keeps transcribing for a while, then falls off the DNA. The extra RNA it made is destroyed.</li></ul></div></div>

<h3 data-tier="essential">Worked examples: DNA to mRNA</h3>
<p>Writing the mRNA from a DNA strand is the most common transcription question on tests. Follow the same four steps every time.</p>
<ol class="steps">
<li><p class="step-head">Identify the strand and its direction</p><p>Is it the template or the coding strand? Is it written 3′ → 5′ or 5′ → 3′? Label both ends before you start.</p></li>
<li><p class="step-head">If it's the template, pair each base</p><p>Template A → mRNA <span class="nt-U">U</span>; T → <span class="nt-A">A</span>; G → <span class="nt-C">C</span>; C → <span class="nt-G">G</span>. If you were given the coding strand instead, just copy it and change every T to U.</p></li>
<li><p class="step-head">Make the mRNA antiparallel</p><p>The mRNA's 5′ end pairs with the template's 3′ end. A template written 3′ → 5′ gives the mRNA 5′ → 3′ in the same order; a template written 5′ → 3′ must be reversed so the answer reads 5′ → 3′.</p></li>
<li><p class="step-head">Check</p><p>The mRNA should match the coding strand exactly, with U for T. It should contain no T. Both ends should be labelled.</p></li>
</ol>
<h4>Example 1: the slide's "Check your understanding"</h4>
<p>Template strand: <span class="seq">3′-AGC TAC CGT-5′</span>. Find the coding strand and the mRNA.</p>
<div class="eq"><span class="seq">template 3′-AGC TAC CGT-5′</span><br><span class="seq">coding 5′-TCG ATG GCA-3′</span><br><span class="seq">mRNA 5′-UCG AUG GCA-3′</span></div>
<p>The coding strand and the mRNA are both complementary to the template, so they match each other (U for T). Notice the <strong>AUG</strong> in the middle: a ribosome would skip the first codon (UCG, part of the 5′ UTR) and start translating at AUG.</p>
<h4>Example 2: worksheet question 10</h4>
<p>The worksheet gives a template (antisense) strand with arrows marking where transcription starts and ends. Between the arrows the template reads:</p>
<div class="eq"><span class="seq">template 3′-TAC GGA TTC GTC CTG GCA A-5′</span><br><span class="seq">mRNA 5′-AUG CCU AAG CAG GAC CGU U-3′</span></div>
<p>The answer key's mRNA is <strong>AUGCCUAAGCAGGACCGUU</strong>. Grouping it into codons from the AUG gives AUG CCU AAG CAG GAC CGU → Met-Pro-Lys-Gln-Asp-Arg, with one leftover U (the sequence is cut off before the gene's real end). You will translate sequences like this in <a href="#/lesson/3.05">lesson 3.05</a>.</p>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The worksheet's Q10 strand has no 5′ and 3′ labels. The answer key reads it left to right and pairs it base by base, which only works if the template's <strong>3′ end is on the left</strong>, so that the mRNA comes out 5′ → 3′ beginning with AUG. On a test, always label the ends yourself, and if a question doesn't give them, state the direction you assumed.</p></div>
<h4 data-tier="likely">Example 3: a template written 5′ → 3′</h4>
<p data-tier="likely">Template strand: <span class="seq">5′-CATTGCCAT-3′</span>. The trap is to pair it base by base and write "GUAACGGUA" as if it were 5′ → 3′. Pairing gives <span class="seq">3′-GUAACGGUA-5′</span>; written the conventional way, the mRNA is <span class="seq">5′-AUGGCAAUG-3′</span> (AUG GCA AUG: Met-Ala-Met). An easy method: first rewrite the template backwards so it runs 3′ → 5′ (<span class="seq">3′-TACCGTTAC-5′</span>), then pair as usual.</p>
<p>Try it yourself. The tool below starts with the worksheet's Q10 template. Change the sequence (try the slide's check, AGCTACCGT) or change what the sequence is, and watch the other strand, the mRNA and the polypeptide update.</p>
<div class="widget" data-widget="seqlab" data-seq="TACGGATTCGTCCTGGCAA" data-type="tmpl35" data-title="Sequence lab: worksheet Q10 template (3′ → 5′)"></div>
<div class="callout key"><p class="callout-title">On the test</p><ul><li>mRNA is <strong>complementary</strong> to the <strong>template</strong> and <strong>identical</strong> to the <strong>coding</strong> strand (U for T).</li><li>Always write the mRNA <strong>5′ → 3′</strong> and label both ends.</li><li>No T in RNA. Ever.</li></ul></div>

<h3 data-tier="essential">Post-transcriptional modifications</h3>
<p>In a eukaryote, the primary transcript of a protein-coding gene (the <strong>pre-mRNA</strong>) is not ready to be translated. Before it leaves the nucleus it goes through three changes, called <span class="term">post-transcriptional modifications</span> ("after transcription" changes), or RNA processing:</p>
<ol>
<li>a <strong>5′ cap</strong> is added to the 5′ end;</li>
<li>a <strong>poly-A tail</strong> is added to the 3′ end;</li>
<li><strong>splicing</strong> removes the introns and joins the exons.</li>
</ol>
<p>The result is a <span class="term">mature mRNA</span>. In the slide's words, a mature mRNA transcript leaves the nucleus to be translated by ribosomes. Prokaryotes skip all three steps: their mRNA has no cap, no poly-A tail and (almost always) no introns, so it can be translated straight away.</p>

<figure class="diagram stepper">
<svg viewBox="0 0 700 330" role="img" aria-labelledby="g304h-t g304h-d">
<title id="g304h-t">Processing pre-mRNA into mature mRNA</title>
<desc id="g304h-d">Step 1: the primary transcript, or pre-mRNA, runs 5 prime to 3 prime and contains exon 1, intron 1, exon 2, intron 2 and exon 3, with no cap and no tail. Step 2: a 5 prime cap of 7-methylguanosine is attached to the 5 prime end. Step 3: a poly-A tail of about 200 adenine nucleotides is added to the 3 prime end. Step 4: spliceosomes, made of snRNA and proteins, bind the ends of each intron; each intron loops out. Step 5: the introns are cut out and broken down, and the exons are joined, giving the mature mRNA: cap, 5 prime untranslated region, coding sequence from the start codon to the stop codon, 3 prime untranslated region and poly-A tail. Step 6: the mature mRNA leaves the nucleus through a nuclear pore and travels to the ribosomes in the cytoplasm.</desc>
<defs><marker id="g304h-ak" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--krebs)"/></marker>
<marker id="g304h-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<g data-upto="4">
<text x="12" y="106" style="fill:var(--krebs);font-size:13px;font-weight:700">pre-mRNA</text>
<g style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:2">
<rect x="120" y="90" width="100" height="22"/><rect x="320" y="90" width="80" height="22"/><rect x="500" y="90" width="100" height="22"/>
</g>
<g style="fill:var(--ink);font-size:12px;font-weight:700" text-anchor="middle">
<text x="170" y="105">Exon 1</text><text x="360" y="105">Exon 2</text><text x="550" y="105">Exon 3</text>
</g>
<text x="120" y="128" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">5′</text>
</g>
<g data-upto="3">
<g style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5">
<rect x="220" y="90" width="100" height="22"/><rect x="400" y="90" width="100" height="22"/>
</g>
<g style="fill:var(--ink-2);font-size:12px" text-anchor="middle"><text x="270" y="105">Intron 1</text><text x="450" y="105">Intron 2</text></g>
</g>
<g data-upto="2"><text x="600" y="128" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">3′</text></g>
<g data-step="1"><text x="360" y="156" text-anchor="middle" style="fill:var(--ink);font-size:12px">primary transcript: every intron and exon, no cap, no tail</text></g>
<g data-from="2" data-upto="4">
<line x1="109" y1="101" x2="120" y2="101" style="stroke:var(--glyco);stroke-width:2"/>
<circle cx="96" cy="101" r="13" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:2"/>
<text x="96" y="105" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">G</text>
<line x1="90" y1="67" x2="94" y2="86" style="stroke:var(--ink);stroke-width:1"/>
<text x="40" y="62" style="fill:var(--ink);font-size:12px;font-weight:700">5′ cap: 7-methylguanosine</text>
</g>
<g data-from="3" data-upto="4">
<text x="606" y="106" style="fill:var(--nt-a);font-size:13px;font-weight:700">AAAAAAAA</text>
<text x="666" y="128" text-anchor="end" style="fill:var(--ink-2);font-size:12px">3′</text>
<line x1="632" y1="74" x2="632" y2="92" style="stroke:var(--ink);stroke-width:1"/>
<text x="690" y="70" text-anchor="end" style="fill:var(--ink);font-size:12px;font-weight:700">poly-A tail (~200 A)</text>
</g>
<g data-step="4">
<g style="fill:none;stroke:var(--ink-2);stroke-width:4">
<path d="M220,90 C220,30 320,30 320,90"/><path d="M400,90 C400,30 500,30 500,90"/>
</g>
<g style="fill:var(--ink-2);font-size:12px" text-anchor="middle"><text x="270" y="72">Intron 1</text><text x="450" y="72">Intron 2</text></g>
<g style="fill:var(--link-soft);stroke:var(--link);stroke-width:2">
<ellipse cx="270" cy="97" rx="58" ry="14"/><ellipse cx="450" cy="97" rx="58" ry="14"/>
</g>
<g style="fill:var(--ink);font-size:11px;font-weight:700" text-anchor="middle"><text x="270" y="101">spliceosome</text><text x="450" y="101">spliceosome</text></g>
<text x="360" y="24" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">spliceosomes (snRNA + proteins)</text>
</g>
<g data-step="5">
<g style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5;stroke-dasharray:5 3">
<rect x="222" y="52" width="44" height="20" rx="4"/><rect x="274" y="58" width="40" height="20" rx="4"/>
<rect x="402" y="52" width="44" height="20" rx="4"/><rect x="454" y="58" width="40" height="20" rx="4"/>
</g>
<g style="fill:var(--ink-2);font-size:11px" text-anchor="middle"><text x="270" y="96">Intron 1</text><text x="450" y="96">Intron 2</text></g>
<text x="360" y="30" text-anchor="middle" style="fill:var(--ink);font-size:12px">removed introns are broken down</text>
<line x1="360" y1="104" x2="360" y2="204" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g304h-ah)"/>
<text x="372" y="160" style="fill:var(--ink);font-size:12px">splicing joins the exons</text>
</g>
<g data-from="5">
<text x="12" y="238" style="fill:var(--krebs);font-size:13px;font-weight:700">mature mRNA</text>
<line x1="163" y1="233" x2="170" y2="233" style="stroke:var(--glyco);stroke-width:2"/>
<circle cx="150" cy="233" r="13" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:2"/>
<text x="150" y="237" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">G</text>
<g style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:2">
<rect x="170" y="222" width="100" height="22"/><rect x="270" y="222" width="80" height="22"/><rect x="350" y="222" width="100" height="22"/>
</g>
<g style="fill:var(--krebs)"><rect x="196" y="222" width="6" height="22"/><rect x="414" y="222" width="6" height="22"/></g>
<g style="fill:var(--ink);font-size:12px;font-weight:700" text-anchor="middle">
<text x="236" y="238">Exon 1</text><text x="310" y="238">Exon 2</text><text x="382" y="238">Exon 3</text>
</g>
<text x="456" y="238" style="fill:var(--nt-a);font-size:13px;font-weight:700">AAAAAA</text>
<g style="fill:var(--ink-2);font-size:12px"><text x="130" y="238" text-anchor="end">5′</text><text x="524" y="238">3′</text></g>
<g style="fill:none;stroke:var(--ink);stroke-width:1.2">
<path d="M170,250 L170,256 L196,256 L196,250"/><path d="M202,250 L202,256 L414,256 L414,250"/><path d="M420,250 L420,256 L450,256 L450,250"/>
</g>
<g style="fill:var(--ink);font-size:12px" text-anchor="middle">
<text x="183" y="272">5′ UTR</text><text x="308" y="272">coding sequence</text><text x="435" y="272">3′ UTR</text>
</g>
<text x="308" y="290" text-anchor="middle" style="fill:var(--ink-2);font-size:11px">start codon (AUG) to stop codon</text>
</g>
<g data-step="6">
<g style="stroke:var(--ink-2);stroke-width:2">
<line x1="566" y1="150" x2="566" y2="220"/><line x1="576" y1="150" x2="576" y2="220"/>
<line x1="566" y1="246" x2="566" y2="320"/><line x1="576" y1="246" x2="576" y2="320"/>
</g>
<line x1="540" y1="233" x2="648" y2="233" style="stroke:var(--krebs);stroke-width:2.5" marker-end="url(#g304h-ak)"/>
<text x="571" y="140" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">nuclear pore</text>
<text x="584" y="220" style="fill:var(--ink);font-size:12px">to the ribosomes</text>
<text x="556" y="310" text-anchor="end" style="fill:var(--ink-2);font-size:12px">nucleus</text>
<text x="586" y="310" style="fill:var(--ink-2);font-size:12px">cytoplasm</text>
</g>
</svg>
<ol class="step-captions">
<li><strong>The primary transcript.</strong> The pre-mRNA from RNA polymerase contains every exon and intron of the gene, with no cap and no tail. It can't leave the nucleus like this.</li>
<li><strong>A 5′ cap is added.</strong> 7-methylguanosine, a modified G nucleotide, is attached to the 5′ end (really this happens early, during elongation). It protects the 5′ end and is what the ribosome recognizes.</li>
<li><strong>A poly-A tail is added.</strong> After the pre-mRNA is cut free past its AAUAAA signal, about 200 adenine ribonucleotides are added to the 3′ end, protecting it from degradation.</li>
<li><strong>Spliceosomes find the introns.</strong> Spliceosomes (snRNA + proteins) bind both ends of each intron and bring the neighbouring exons together, so the intron loops out.</li>
<li><strong>Introns out, exons joined.</strong> Each intron is cut out and broken down, and the exons are joined into one continuous message: the mature mRNA (cap, 5′ UTR, coding sequence, 3′ UTR, poly-A tail).</li>
<li><strong>Export.</strong> Only a fully processed mRNA leaves the nucleus, through a nuclear pore, to be translated by ribosomes in the cytoplasm (lesson 3.05).</li>
</ol>
<figcaption>Pre-mRNA processing, based on the class slides on the 5′ cap, poly-A tail and splicing. Use Next to process the transcript.</figcaption>
</figure>

<h3 data-tier="essential">The 5′ cap and poly-A tail</h3>
<h4>The 5′ cap</h4>
<p>From the class slide, the <span class="term">5′ cap</span> is:</p>
<ul>
<li>added to the <strong>5′ end</strong> of the transcript;</li>
<li>a guard that <strong>prevents degradation</strong>;</li>
<li><strong>recognized by ribosomes to initiate translation</strong>.</li>
</ul>
<p>The slide's structure diagram shows what the cap is: a <strong>7-methylguanosine</strong> (a guanine nucleotide with an extra methyl group, –CH<sub>3</sub>, on the base), connected to the first nucleotide of the RNA through a chain of <strong>three phosphates</strong>. The picture also shows extra methyl groups on the 2′ carbons of the first ribose sugars.</p>
<p>Why protect an mRNA? The cytoplasm is full of <strong>nucleases</strong> that chew RNA from its ends, which is how cells get rid of messages they no longer need. The cap blocks the 5′ end. When translation begins (<a href="#/lesson/3.05">lesson 3.05</a>), the ribosome's small subunit binds the cap and then scans along the 5′ UTR to find the start codon, so an uncapped mRNA is barely translated.</p>
<p data-tier="likely">The cap is attached "backwards", by a 5′-to-5′ triphosphate link, so a capped mRNA has no free 5′ end for an enzyme to grab. It is added very early, as soon as the 5′ end emerges from RNA polymerase II, and it also helps export the mRNA through the nuclear pores.</p>
<h4>The poly-A tail</h4>
<p>From the class slide, the <span class="term">poly-A tail</span> is:</p>
<ul>
<li><strong>about 200 adenine ribonucleotides</strong> added to the <strong>3′ end</strong>;</li>
<li>another guard that <strong>prevents degradation</strong>.</li>
</ul>
<p>The slide's picture shows the poly-A tail at the far end of the mRNA, just after the <strong>AAUAAA</strong> sequence. AAUAAA is the polyadenylation signal from the termination section: it tells the cell where to cut the pre-mRNA, and the tail is added to the newly cut 3′ end.</p>
<p data-tier="likely">The tail is not copied from the DNA: <strong>poly-A polymerase</strong> adds the A's with <em>no template</em>. In the cytoplasm the tail is slowly shortened, and when it gets too short the mRNA is destroyed, so the tail acts as a <strong>timer</strong> for how long the message is translated. It also helps export and translation.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>5′ cap</th><th>Poly-A tail</th></tr></thead>
<tbody>
<tr><td>What</td><td>7-methylguanosine (a modified G nucleotide)</td><td>~200 adenine ribonucleotides (A's)</td></tr>
<tr><td>Where</td><td>5′ end</td><td>3′ end (after cutting downstream of AAUAAA)</td></tr>
<tr><td>Jobs (slides)</td><td>Prevents degradation; recognized by ribosomes to start translation</td><td>Prevents degradation</td></tr>
<tr data-tier="likely"><td>Also</td><td>Helps export from the nucleus</td><td>Acts as a timer for the mRNA's lifespan; helps export and translation</td></tr>
<tr data-tier="likely"><td>From a template?</td><td>No</td><td>No (poly-A polymerase adds the A's without a template)</td></tr>
</tbody></table></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>A message gets a <strong>cap on its head</strong> (5′, the front, read first) and a <strong>tail on its back end</strong> (3′). Both are armour: they protect the ends, which is where the RNA-eating enzymes attack.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Don't swap the ends: the cap is on the <strong>5′</strong> end and the tail is on the <strong>3′</strong> end. And the poly-A tail is made of <strong>adenine</strong> nucleotides (A), not amino acids.</p></div>

<h3 data-tier="essential">Splicing: introns and exons</h3>
<p>Most eukaryotic genes are interrupted. The slide's "Structure of a Gene" figure shows a gene in which <strong>exons</strong> alternate with <strong>introns</strong>: exon 1, intron 1, exon 2, intron 2, exon 3, intron 3, exon 4. All of it is transcribed into the primary transcript, and then splicing produces a much shorter mature transcript.</p>
<ul>
<li><span class="term">Introns</span> (<em>in</em>tervening sequences) are the <strong>non-coding regions</strong>. They are transcribed but removed before the mRNA leaves the nucleus.</li>
<li><span class="term">Exons</span> (<em>ex</em>pressed sequences) are the regions that are <strong>kept</strong> and joined together. They carry the coding sequence.</li>
</ul>
<p>From the class slide: <span class="term">splicing</span> is the <strong>removal of non-coding regions (introns) and joining of coding regions (exons)</strong>. It is completed by <span class="term">spliceosomes</span>. A spliceosome is a large complex built from <strong>small nuclear RNAs (snRNAs)</strong> and proteins. The snRNAs base-pair with short sequences at the two ends of each intron, which is how the spliceosome finds exactly where to cut. It then loops the intron out, cuts it free, and joins the exons on either side.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>Ex</strong>ons are <strong>ex</strong>pressed (they <strong>ex</strong>it the nucleus); <strong>in</strong>trons stay <strong>in</strong> the nucleus and are destroyed. Or: introns <strong>in</strong>terrupt the message.</p></div>
<p>Splicing must be precise to the single nucleotide. Codons are read in threes, so a cut one base off would shift every later codon into the wrong frame (a frameshift, <a href="#/lesson/3.06">lesson 3.06</a>). Some forms of the blood disorder β-thalassemia come from a single base change that makes the spliceosome cut in the wrong place.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>"Exons = the part that is translated" is close, but not exact. The first and last exons also hold the <strong>5′ UTR</strong> and <strong>3′ UTR</strong>, which are kept in the mature mRNA but not translated (in the slide's figure they are inside exon 1 and exon 4). Exons are the parts that are <strong>kept</strong>.</p></div>
<div class="callout teacher"><p class="callout-title">From the slides</p><p>The last slide: <strong>a mature mRNA transcript leaves the nucleus to be translated by ribosomes</strong>. Its figure compares the gene in the DNA (promoter, four exons, three introns), the primary transcript (same length) and the much shorter mature transcript (exons only). The slide also links a "Watch This!!!" video of the whole process, worth rewatching before the test.</p></div>
<p data-tier="extra">Introns are often far longer than exons. The human dystrophin gene is about 2.2 million base pairs long (it takes about 16 hours to transcribe), but its mature mRNA is only about 14,000 nucleotides: over 99% of the primary transcript is cut out. Only about 1–2% of the human genome codes for protein.</p>
<h4 data-tier="likely">Alternative splicing: one gene, several proteins</h4>
<p data-tier="likely">Splicing doesn't have to join every exon. In <span class="term">alternative splicing</span>, the same pre-mRNA is spliced in different ways in different cells or at different times: an exon can be skipped, or one of two alternative exons chosen. Each combination gives a different mature mRNA, and so a different protein. For a gene with exons 1, 2, 3 and 4:</p>
<div class="eq" data-tier="likely">exons 1 + 2 + 3 + 4 → mRNA A → protein A<br>exons 1 + 3 + 4 (exon 2 skipped) → mRNA B → protein B<br>exons 1 + 2 + 4 (exon 3 skipped) → mRNA C → protein C</div>
<p data-tier="likely">This helps explain a puzzle from the Human Genome Project: humans have only about <strong>20,000</strong> protein-coding genes, yet make far more kinds of protein. More than 90% of human genes with several exons are alternatively spliced, so one gene can code for a whole family of related polypeptides, not just one.</p>
<p data-tier="extra">A classic example is the human <em>CALCA</em> gene. Thyroid cells splice its pre-mRNA to make <strong>calcitonin</strong>, a hormone that lowers blood calcium; some neurons include a different final exon and make <strong>CGRP</strong>, a signalling peptide that widens blood vessels.</p>
<h4>Put the whole pathway in order</h4>
<div class="order-task"><p class="order-q">Put the steps from gene to protein in order, for a eukaryotic gene.</p><ol>
<li>Transcription factors, starting with TATA-binding protein, bind the promoter's TATA box.</li>
<li>RNA polymerase II binds the transcription factors, forming the initiation complex.</li>
<li>RNA polymerase breaks the hydrogen bonds and opens the DNA at the start site.</li>
<li>RNA polymerase reads the template 3′ → 5′ and builds pre-mRNA 5′ → 3′.</li>
<li>The polymerase transcribes the terminator region and the pre-mRNA is released.</li>
<li>The pre-mRNA is capped, given a poly-A tail and spliced into mature mRNA.</li>
<li>The mature mRNA leaves the nucleus through a nuclear pore.</li>
<li>A ribosome in the cytoplasm translates the mRNA into a polypeptide.</li>
</ol></div>
<p data-tier="likely">In a living cell some steps overlap (capping and much splicing happen while transcription is still going), but the order above is the textbook sequence tests expect.</p>

<h3 data-tier="essential">Prokaryotes vs eukaryotes</h3>
<p>The worksheet asks where transcription happens. Its answer key: transcription happens <strong>where the DNA is</strong>. In <strong>eukaryotes</strong> that is the <strong>nucleus</strong>. In <strong>prokaryotes</strong> it is the <strong>nucleoid region</strong>, because prokaryotes do not have nuclei.</p>
<p>That one difference has a big consequence. In a eukaryote, the nuclear envelope separates transcription (inside) from translation (outside), which gives the cell time to process the pre-mRNA. In a prokaryote nothing separates the DNA from the ribosomes, so ribosomes jump onto the 5′ end of an mRNA and start translating it while RNA polymerase is still making the rest. Transcription and translation are <strong>coupled</strong>.</p>

<figure class="diagram">
<svg viewBox="0 0 720 320" role="img" aria-labelledby="g304i-t g304i-d">
<title id="g304i-t">Where transcription happens: eukaryotic vs prokaryotic cell</title>
<desc id="g304i-d">Left, a eukaryotic cell. Inside the nucleus, DNA is transcribed into pre-mRNA, which is processed into mature mRNA with a cap and a poly-A tail. The mature mRNA leaves through a nuclear pore into the cytoplasm, where a ribosome translates it into a polypeptide. Right, a prokaryotic cell with no nucleus. Its DNA is a loop in the nucleoid region. RNA polymerase transcribes the DNA, and several ribosomes are already attached to the mRNA and translating it while it is still being made; the ribosomes nearest the polymerase started first and have the longest polypeptide chains.</desc>
<defs><marker id="g304i-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<text x="192" y="22" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Eukaryotic cell</text>
<text x="554" y="22" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Prokaryotic cell</text>
<rect x="12" y="34" width="360" height="276" rx="28" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="150" cy="165" r="106" style="fill:var(--surface-2)"/>
<path d="M236.7,232.7 A110,110 0 1 1 252.0,206.2" style="fill:none;stroke:var(--ink-2);stroke-width:2"/>
<path d="M231.2,228.4 A103,103 0 1 1 245.5,203.6" style="fill:none;stroke:var(--ink-2);stroke-width:2"/>
<text x="150" y="80" text-anchor="middle" style="fill:var(--ink-2);font-size:12px;font-weight:700">Nucleus</text>
<text x="150" y="98" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">DNA</text>
<path d="M100,114 q12.5,-10 25,0 t25,0 t25,0 t25,0" style="fill:none;stroke:var(--ink-2);stroke-width:2"/>
<path d="M100,114 q12.5,10 25,0 t25,0 t25,0 t25,0" style="fill:none;stroke:var(--etc);stroke-width:2"/>
<line x1="150" y1="126" x2="150" y2="148" style="stroke:var(--ink-2);stroke-width:1.8" marker-end="url(#g304i-ah)"/>
<text x="158" y="142" style="fill:var(--krebs);font-size:11px;font-weight:700">transcription</text>
<g style="stroke-width:4">
<line x1="110" y1="160" x2="128" y2="160" style="stroke:var(--krebs)"/><line x1="128" y1="160" x2="146" y2="160" style="stroke:var(--ink-2)"/>
<line x1="146" y1="160" x2="162" y2="160" style="stroke:var(--krebs)"/><line x1="162" y1="160" x2="176" y2="160" style="stroke:var(--ink-2)"/>
<line x1="176" y1="160" x2="190" y2="160" style="stroke:var(--krebs)"/>
</g>
<text x="104" y="164" text-anchor="end" style="fill:var(--ink);font-size:11px">pre-mRNA</text>
<line x1="150" y1="168" x2="150" y2="190" style="stroke:var(--ink-2);stroke-width:1.8" marker-end="url(#g304i-ah)"/>
<text x="158" y="184" style="fill:var(--ink);font-size:11px">processing</text>
<text x="110" y="210" style="fill:var(--nt-a);font-size:11px;font-weight:700">AAA</text>
<line x1="132" y1="206" x2="196" y2="206" style="stroke:var(--krebs);stroke-width:3"/>
<circle cx="201" cy="206" r="5" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<text x="160" y="226" text-anchor="middle" style="fill:var(--krebs);font-size:11px;font-weight:700">mature mRNA</text>
<line x1="210" y1="210" x2="272" y2="226" style="stroke:var(--krebs);stroke-width:2" marker-end="url(#g304i-ah)"/>
<line x1="268" y1="240" x2="344" y2="240" style="stroke:var(--krebs);stroke-width:3"/>
<g style="fill:var(--ink-2);font-size:12px"><text x="262" y="244" text-anchor="end">5′</text><text x="348" y="244">3′</text></g>
<g style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8">
<ellipse cx="306" cy="228" rx="22" ry="12"/><ellipse cx="306" cy="247" rx="20" ry="7"/>
</g>
<g style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5">
<circle cx="306" cy="211" r="5"/><circle cx="314" cy="201" r="5"/><circle cx="308" cy="190" r="5"/><circle cx="316" cy="180" r="5"/>
</g>
<text x="316" y="164" text-anchor="middle" style="fill:var(--ink);font-size:12px">translation</text>
<text x="306" y="272" text-anchor="middle" style="fill:var(--ink);font-size:12px">ribosome</text>
<text x="192" y="300" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">Cytoplasm</text>
<rect x="396" y="64" width="316" height="206" rx="60" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<ellipse cx="470" cy="170" rx="44" ry="36" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<ellipse cx="470" cy="170" rx="39" ry="31" style="fill:none;stroke:var(--etc);stroke-width:2"/>
<text x="470" y="174" text-anchor="middle" style="fill:var(--ink-2);font-size:12px;font-weight:700">nucleoid</text>
<text x="470" y="232" text-anchor="middle" style="fill:var(--ink);font-size:12px">no nucleus</text>
<line x1="527" y1="170" x2="684" y2="170" style="stroke:var(--krebs);stroke-width:3"/>
<ellipse cx="514" cy="170" rx="13" ry="10" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:2"/>
<g style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8">
<ellipse cx="570" cy="157" rx="15" ry="10"/><ellipse cx="570" cy="177" rx="13" ry="6"/>
<ellipse cx="612" cy="157" rx="15" ry="10"/><ellipse cx="612" cy="177" rx="13" ry="6"/>
<ellipse cx="654" cy="157" rx="15" ry="10"/><ellipse cx="654" cy="177" rx="13" ry="6"/>
</g>
<g style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5">
<circle cx="570" cy="139" r="4"/><circle cx="576" cy="130" r="4"/><circle cx="570" cy="121" r="4"/><circle cx="576" cy="112" r="4"/>
<circle cx="612" cy="139" r="4"/><circle cx="618" cy="130" r="4"/><circle cx="612" cy="121" r="4"/>
<circle cx="654" cy="139" r="4"/><circle cx="660" cy="130" r="4"/>
</g>
<g style="fill:var(--ink-2);font-size:12px"><text x="532" y="160">3′</text><text x="690" y="174">5′</text></g>
<text x="612" y="96" text-anchor="middle" style="fill:var(--ink);font-size:12px">ribosomes</text>
<text x="700" y="196" text-anchor="end" style="fill:var(--krebs);font-size:12px;font-weight:700">mRNA</text>
<line x1="516" y1="182" x2="522" y2="194" style="stroke:var(--ink);stroke-width:1"/>
<text x="522" y="206" style="fill:var(--ink);font-size:12px">RNA polymerase</text>
<text x="554" y="292" text-anchor="middle" style="fill:var(--ink);font-size:12px">transcription and translation</text>
<text x="554" y="308" text-anchor="middle" style="fill:var(--ink);font-size:12px">happen at the same time (coupled)</text>
</svg>
<figcaption>Worksheet questions 12 and 13 as a picture. Eukaryotes transcribe in the nucleus and translate in the cytoplasm; prokaryotes have no nucleus, so their ribosomes start translating an mRNA while it is still being transcribed.</figcaption>
</figure>

<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>Eukaryotes</th><th>Prokaryotes</th></tr></thead>
<tbody>
<tr><td>Where transcription happens</td><td>Nucleus</td><td>Nucleoid region of the cytoplasm (no nucleus)</td></tr>
<tr><td>Transcription and translation</td><td>Separated in space and time: nucleus, then cytoplasm</td><td><strong>Coupled</strong>: translation starts before transcription ends</td></tr>
<tr><td>Primary transcript</td><td>Pre-mRNA; must be processed</td><td>Already a working mRNA</td></tr>
<tr><td>5′ cap and poly-A tail</td><td>Yes</td><td>No</td></tr>
<tr><td>Introns and splicing</td><td>Most genes have introns; spliced by spliceosomes</td><td>Almost never</td></tr>
<tr data-tier="likely"><td>RNA polymerases</td><td>Three (I, II, III); II makes mRNA</td><td>One</td></tr>
<tr data-tier="likely"><td>Promoter recognition</td><td>TBP and other transcription factors bind the TATA box</td><td>The polymerase's sigma factor binds the −10 and −35 sequences</td></tr>
<tr data-tier="likely"><td>Termination</td><td>Cut after the AAUAAA polyadenylation signal</td><td>Terminator hairpin (or rho protein)</td></tr>
<tr data-tier="likely"><td>Genes per mRNA</td><td>Usually one</td><td>Often several, from an operon (<a href="#/lesson/3.07">lesson 3.07</a>)</td></tr>
<tr data-tier="likely"><td>mRNA lifespan</td><td>Hours to days</td><td>A few minutes</td></tr>
</tbody></table></div>
<p data-tier="likely">These differences suit each cell. A bacterium must respond to a new food source within minutes, so instantly translated, short-lived messages are ideal. A eukaryotic cell gains control instead: processing is a checkpoint (only finished mRNAs are exported), and alternative splicing makes many proteins from one gene.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Eukaryotes: transcription in the <strong>nucleus</strong>, then processing (cap, tail, splicing), then translation in the cytoplasm. Prokaryotes: transcription in the <strong>nucleoid</strong>; no processing; translation <strong>coupled</strong> to transcription.</p></div>

<h3 data-tier="likely">Replication vs transcription</h3>
<p>Replication (<a href="#/lesson/3.03">lesson 3.03</a>) and transcription both copy information from a DNA template, so tests often ask you to compare them.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th></th><th>DNA replication</th><th>Transcription</th></tr></thead>
<tbody>
<tr><td>Purpose</td><td>Copy the whole genome before cell division</td><td>Copy one gene so it can be expressed</td></tr>
<tr><td>How much DNA is copied</td><td>All of it, exactly once per cell cycle</td><td>One gene at a time, as often as needed</td></tr>
<tr><td>When</td><td>S phase of interphase</td><td>Any time the gene is needed</td></tr>
<tr><td>Template</td><td><strong>Both</strong> strands</td><td><strong>One</strong> strand (the template strand) of the gene</td></tr>
<tr><td>Main enzyme</td><td>DNA polymerase III (plus helicase, primase, pol I, ligase)</td><td>RNA polymerase (plus transcription factors)</td></tr>
<tr><td>Unwinding</td><td>Helicase</td><td>RNA polymerase itself</td></tr>
<tr><td>Primer needed?</td><td>Yes (RNA primer from primase)</td><td>No</td></tr>
<tr><td>Building blocks</td><td>Deoxyribonucleotides (A, T, G, C)</td><td>Ribonucleotides (A, U, G, C)</td></tr>
<tr><td>Product</td><td>Two identical DNA double helices (semiconservative)</td><td>One single-stranded RNA; the DNA rewinds unchanged</td></tr>
<tr><td>Proofreading</td><td>Yes (DNA polymerases I and III); very few errors</td><td>Little; more errors, but not inherited</td></tr>
<tr><td>Fate of product</td><td>Permanent; passed to daughter cells</td><td>Temporary; broken down after use</td></tr>
</tbody></table></div>
<p><strong>What they share:</strong> both use complementary base pairing to a DNA template; both read the template <strong>3′ → 5′</strong> and build the new strand <strong>5′ → 3′</strong>, adding to its 3′-OH; both join nucleotides with phosphodiester bonds powered by breaking off two phosphates from a triphosphate; and in eukaryotes both happen in the nucleus.</p>

<h3 data-tier="essential">Check your understanding</h3>
<p>Questions 1–7 are the slide's check question and the transcription worksheet questions. Try each one before opening the answer.</p>
<details class="check"><summary>1. DNA template strand: 3′-AGC TAC CGT-5′. What is the sequence of the DNA coding strand and of the mRNA transcript?</summary><div class="ans"><p>Coding strand: <span class="seq">5′-TCG ATG GCA-3′</span>. mRNA: <span class="seq">5′-UCG AUG GCA-3′</span>.</p><p>Both are complementary and antiparallel to the template, so both are written 5′ → 3′. They are identical except that the mRNA has U where the coding strand has T.</p></div></details>
<details class="check"><summary>2. Worksheet Q10: write the mRNA made from the template (antisense) strand 3′-TACGGATTCGTCCTGGCAA-5′ (the part between the start and end arrows).</summary><div class="ans"><p><span class="seq">5′-AUG CCU AAG CAG GAC CGU U-3′</span> (the key's AUGCCUAAGCAGGACCGUU).</p><p>Pair each template base: T→A, A→U, C→G, G→C. The template's 3′ end must be on the left (the worksheet doesn't label it), so the mRNA comes out 5′ → 3′ starting with the start codon AUG.</p></div></details>
<details class="check"><summary>3. Worksheet Q1–6: in the worksheet diagram, which letter is RNA polymerase, the template strand, the coding strand, the mRNA, the transcription factors and the promoter region?</summary><div class="ans"><p>Answer key: <strong>1. RNA polymerase = C</strong> (the large enzyme over the open DNA, where the RNA's 3′ end is growing); <strong>2. template / non-coding / antisense strand = B</strong> (the top strand, 3′ → 5′, with the RNA paired along it); <strong>3. non-template / coding / sense strand = E</strong> (the bottom strand, 5′ → 3′); <strong>4. mRNA = F</strong>; <strong>5. transcription factors = A</strong> (the round proteins at the upstream end); <strong>6. promoter region = D</strong> (the DNA under them).</p><p>Check: the worksheet's RNA (5′-UACUGCC…) pairs with the top strand (3′-ATGACGG…), so that is the template, and it matches the bottom strand (5′-TACTGCC…), the coding strand.</p></div></details>
<details class="check"><summary>4. Worksheet Q7 and Q9: What are transcription factors? How do they affect transcription, and which phase are they active in?</summary><div class="ans"><p>Transcription factors are <strong>proteins that bind to specific sequences of DNA in the promoter region</strong> (TATA-binding protein binds the TATA box first). They act as <strong>pointers for RNA polymerase</strong>, showing it which section of DNA (which gene) to transcribe and where to start; RNA polymerase II can't bind the promoter without them.</p><p>They are active in <strong>initiation</strong>.</p></div></details>
<details class="check"><summary>5. Worksheet Q8: put the three phases of transcription in order: elongation, initiation, termination.</summary><div class="ans"><p><strong>Initiation → elongation → termination.</strong> RNA polymerase first binds the promoter and opens the DNA, then builds the RNA 5′ → 3′, then releases the transcript at the terminator.</p></div></details>
<details class="check"><summary>6. Worksheet Q11: name three types of RNA produced by transcription.</summary><div class="ans"><p>Any three of: <strong>mRNA</strong> (carries the code to the ribosome), <strong>tRNA</strong> (brings amino acids), <strong>rRNA</strong> (part of the ribosome) and <strong>snRNA</strong> (part of spliceosomes).</p></div></details>
<details class="check"><summary>7. Worksheet Q12 and Q13: where in the cell does transcription take place in eukaryotes, and in prokaryotes?</summary><div class="ans"><p>Transcription happens where the DNA is. <strong>Eukaryotes: in the nucleus.</strong> <strong>Prokaryotes: in the nucleoid region</strong> of the cytoplasm, because prokaryotes have no nucleus. (So in prokaryotes ribosomes can translate the mRNA while it is still being transcribed.)</p></div></details>
<details class="check" data-tier="likely"><summary>8. A template strand is written 5′-TCAGGCCATCG-3′. Write the mRNA 5′ → 3′ and give the first two amino acids it codes for.</summary><div class="ans"><p>Pairing gives 3′-AGUCCGGUAGC-5′; written the normal way, the mRNA is <span class="seq">5′-CGAUGGCCUGA-3′</span>.</p><p>The ribosome starts at the first AUG: AUG GCC UGA → <strong>Met-Ala</strong>, then a stop codon (UGA). The first two bases (CG) are part of the 5′ UTR.</p></div></details>
<details class="check" data-tier="likely"><summary>9. The class slide calls RNA a "single stranded helix." Is that accurate? Give three structural differences between DNA and RNA.</summary><div class="ans"><p>Partly. RNA is single-stranded, but it is not a helix like DNA: it has no partner strand. It can fold back on itself so complementary stretches pair into hairpins.</p><p>Differences: (1) sugar: deoxyribose in DNA (only H on the 2′ carbon) vs ribose in RNA (OH on the 2′ carbon); (2) bases: thymine in DNA vs uracil in RNA; (3) strands: DNA is a double-stranded helix, RNA is single-stranded. (Also: RNA is shorter and much less stable.)</p></div></details>
<details class="check" data-tier="likely"><summary>10. A eukaryotic mRNA is made without a 5′ cap. Another has a mutation that changes the first base of an intron. Predict what happens to each.</summary><div class="ans"><p><strong>No cap:</strong> the unprotected 5′ end is quickly degraded by nucleases, and the ribosome can't recognize the mRNA to start translation, so little or no protein is made.</p><p><strong>Intron-boundary mutation:</strong> the spliceosome may not recognize that intron end, so the intron is left in or cut in the wrong place. The reading frame shifts or wrong codons are added, usually giving a non-functional protein (as in some β-thalassemias).</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
<li><strong>Central dogma</strong>: genetic information flows <strong>one way</strong>: DNA → RNA → protein. Replication DNA → DNA; <strong>transcription</strong> DNA → RNA (nucleus); <strong>translation</strong> RNA → protein (cytosol, at a ribosome).</li>
<li><strong>DNA vs RNA</strong>: deoxyribose (one less O on the 2′ carbon) vs <strong>ribose</strong>; T vs <strong>U</strong>; double-stranded helix vs <strong>single-stranded</strong> (folds into hairpins; not a double helix).</li>
<li><strong>RNA types</strong>: <strong>mRNA</strong> (complementary to a gene; leaves the nucleus; carries codons), <strong>rRNA</strong> (with proteins forms ribosomes), <strong>tRNA</strong> (carries amino acids to the growing chain), <strong>snRNA</strong> (spliceosomes).</li>
<li><strong>Gene</strong>: DNA segment coding for a protein, with a <strong>promoter upstream</strong> and a <strong>terminator downstream</strong>. Transcription start site = +1. The RNA has a 5′ UTR, start codon, coding sequence, stop codon and 3′ UTR.</li>
<li><strong>Template strand</strong> (antisense, non-coding) is read <strong>3′ → 5′</strong>. <strong>Coding strand</strong> (sense, non-template) is not used; it matches the mRNA with T for U.</li>
<li><strong>Three phases</strong>: initiation → elongation → termination.</li>
<li><strong>Initiation</strong>: transcription factors (proteins; TBP first) bind the promoter's <strong>TATA box</strong> (~25–30 bp upstream); <strong>RNA polymerase II</strong> joins (initiation complex) and breaks the H-bonds. Transcription factors act in <strong>initiation</strong> and point RNA polymerase to the gene.</li>
<li><strong>Elongation</strong>: in a 10–20 bp bubble, RNA polymerase adds ribonucleotides (A–U, T–A, G–C, C–G) to the RNA's 3′ end, so mRNA is built <strong>5′ → 3′</strong>. No primer, no helicase needed; little proofreading.</li>
<li><strong>Termination</strong>: the primary transcript (<strong>pre-mRNA</strong> in eukaryotes) detaches when RNA polymerase transcribes the <strong>terminator</strong>. Prokaryotes: G–C hairpin + U's. Eukaryotes: cut 10–35 nt past <strong>AAUAAA</strong>.</li>
<li><strong>Writing mRNA</strong>: pair with the template, U for A; write it antiparallel, 5′ → 3′; check that it matches the coding strand. Slide check: 3′-AGC TAC CGT-5′ → 5′-UCG AUG GCA-3′.</li>
<li><strong>5′ cap</strong>: 7-methylguanosine on the 5′ end; prevents degradation; recognized by ribosomes to start translation.</li>
<li><strong>Poly-A tail</strong>: <strong>~200 A</strong> on the 3′ end (after AAUAAA); prevents degradation; added without a template.</li>
<li><strong>Splicing</strong>: <strong>introns</strong> (non-coding) removed, <strong>exons</strong> joined, by <strong>spliceosomes</strong> (snRNA + proteins). <strong>Alternative splicing</strong>: one gene → several proteins (~20,000 human genes, many more proteins).</li>
<li>The <strong>mature mRNA</strong> (cap + exons + tail) leaves the nucleus through a nuclear pore to be translated.</li>
<li><strong>Location</strong>: eukaryotes in the <strong>nucleus</strong>; prokaryotes in the <strong>nucleoid</strong> (no nucleus), with no processing and translation <strong>coupled</strong> to transcription.</li>
<li><strong>vs replication</strong>: one strand of one gene (not both strands of everything); RNA polymerase unwinds DNA itself and needs no primer; U instead of T; product is temporary.</li>
</ul>
`
});
