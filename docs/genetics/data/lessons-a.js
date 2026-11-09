window.LESSONS = window.LESSONS || [];

/* ===================================================================
   3.01 History of Genetics
   =================================================================== */
window.LESSONS.push({
  id: "3.01",
  title: "History of Genetics",
  stage: "g-hist",
  where: "Labs, 1869–1958",
  summary: "Between 1869 and 1958 a chain of experiments answered two questions: is the hereditary material protein or DNA, and what does DNA look like? Miescher isolated “nuclein”; Griffith, Hämmerling, Avery, MacLeod and McCarty, and Hershey and Chase showed that DNA in the nucleus carries hereditary information; Chargaff, Franklin, and Watson and Crick worked out its structure; and Meselson and Stahl showed that it is copied semiconservatively.",
  objectives: [
    "Explain what a hereditary molecule must do and why most scientists before the 1940s expected it to be protein rather than DNA.",
    "Describe Miescher's discovery of nuclein, where it came from and what it was made of.",
    "Describe Griffith's four injections, define transformation, and state what his experiment did and did not show.",
    "Explain how Hämmerling's cutting and grafting experiments with <em>Acetabularia</em> show that the nucleus controls the cell's form.",
    "Explain how Avery, MacLeod and McCarty used specific enzymes to identify DNA as the transforming principle.",
    "State Chargaff's rules and use them to calculate the percentage of each base in a DNA sample.",
    "Explain how Hershey and Chase used radioactive sulfur-35 and phosphorus-32 to show that viral DNA, not protein, enters the host cell.",
    "Describe what Franklin's X-ray diffraction images and Watson and Crick's model revealed about the structure of DNA.",
    "Compare the conservative, semiconservative and dispersive hypotheses and explain how Meselson and Stahl's results ruled out two of them.",
    "Put the key discoveries in order and match each scientist to the organism, method and conclusion of their work."
  ],
  html: `
<h3 data-tier="essential">The big question: protein or DNA?</h3>
<p>By the early 1900s biologists knew that traits are passed on in units called genes, and that genes sit on <span class="term">chromosomes</span> inside the nucleus. They also knew what chromosomes are made of: <strong>protein</strong> and <strong>DNA</strong>. One of the two had to be the hereditary material. The question was which one.</p>
<p>Whatever the hereditary material turned out to be, it had to do four jobs:</p>
<ul>
<li><strong>Store information</strong>: enough to build and run a whole organism.</li>
<li><strong>Copy itself accurately</strong> every time a cell divides, so that each new cell gets a complete set.</li>
<li><strong>Change occasionally</strong> (mutate), so that new variations can arise and be inherited.</li>
<li><strong>Direct the cell</strong>: its information has to be turned into the cell's structures and traits.</li>
</ul>
<p>For decades almost everyone bet on <strong>protein</strong>. Proteins are built from <strong>20 different amino acids</strong>, which can be arranged in an almost unlimited number of sequences and folded into thousands of different shapes. DNA is built from only <strong>4 different nucleotides</strong>, and early chemists believed (wrongly) that the four simply repeated in the same order over and over. A four-letter alphabet seemed far too simple to spell out an organism; a twenty-letter one seemed rich enough to do the job.</p>
<div class="callout key"><p class="callout-title">On the test</p><ul><li><strong>Why protein was the favourite:</strong> 20 amino acids vs only 4 nucleotides, so proteins seemed far better able to carry complex information.</li><li>For every scientist in this lesson, know the <strong>year</strong>, the <strong>organism or material</strong>, the <strong>method</strong> and the <strong>conclusion</strong>. The table near the end of the lesson puts them side by side.</li></ul></div>
<p>The rest of this lesson follows the experiments that settled the question, in the order they happened. Read them as a detective story (the class activity calls it "Operation Double Helix"): each experiment narrowed the list of suspects, until only DNA was left. Then a second set of experiments worked out what DNA looks like and how it copies itself.</p>

<figure class="diagram">
<svg viewBox="0 0 760 300" role="img" aria-labelledby="g301a-t g301a-d">
<title id="g301a-t">Timeline of the discoveries in molecular genetics, 1869 to 1958</title>
<desc id="g301a-d">Nine events along a timeline, evenly spaced rather than to scale. 1869, Miescher isolates nuclein from cell nuclei. 1928, Griffith discovers transformation of bacteria. 1934, Hämmerling shows that heredity is directed by the nucleus. 1944, Avery, MacLeod and McCarty show that DNA is the transforming principle. 1950, Chargaff finds that A equals T and G equals C in every species. 1952, Hershey and Chase show that phage DNA, not protein, enters the cell. 1953, Franklin's X-ray images show a helix with the backbone outside. 1953, Watson and Crick build the double-helix model. 1958, Meselson and Stahl show that replication is semiconservative. A legend groups the events: isolating DNA, proving DNA carries heredity, working out its structure, and how it copies itself.</desc>
<line x1="30" y1="150" x2="102" y2="150" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="118" y1="150" x2="730" y2="150" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="100" y1="160" x2="108" y2="140" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="112" y1="160" x2="120" y2="140" style="stroke:var(--ink-2);stroke-width:2"/>
<g style="stroke:var(--line);stroke-width:1.5">
<line x1="70" y1="118" x2="70" y2="142"/><line x1="225" y1="118" x2="225" y2="142"/><line x1="380" y1="118" x2="380" y2="142"/><line x1="535" y1="118" x2="535" y2="142"/><line x1="690" y1="118" x2="690" y2="142"/>
<line x1="147.5" y1="158" x2="147.5" y2="182"/><line x1="302.5" y1="158" x2="302.5" y2="182"/><line x1="457.5" y1="158" x2="457.5" y2="182"/><line x1="612.5" y1="158" x2="612.5" y2="182"/>
</g>
<circle cx="70" cy="150" r="7" style="fill:var(--ink-2)"/>
<circle cx="147.5" cy="150" r="7" style="fill:var(--etc)"/>
<circle cx="225" cy="150" r="7" style="fill:var(--etc)"/>
<circle cx="302.5" cy="150" r="7" style="fill:var(--etc)"/>
<circle cx="380" cy="150" r="7" style="fill:var(--leaf)"/>
<circle cx="457.5" cy="150" r="7" style="fill:var(--etc)"/>
<circle cx="535" cy="150" r="7" style="fill:var(--leaf)"/>
<circle cx="612.5" cy="150" r="7" style="fill:var(--leaf)"/>
<circle cx="690" cy="150" r="7" style="fill:var(--krebs)"/>
<g text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">
<text x="70" y="60">1869</text><text x="225" y="60">1934</text><text x="380" y="60">1950</text><text x="535" y="60">1953</text><text x="690" y="60">1958</text>
<text x="147.5" y="200">1928</text><text x="302.5" y="200">1944</text><text x="457.5" y="200">1952</text><text x="612.5" y="200">1953</text>
</g>
<g text-anchor="middle" style="fill:var(--ink);font-size:12.5px;font-weight:650">
<text x="70" y="78">Miescher</text><text x="225" y="78">Hämmerling</text><text x="380" y="78">Chargaff</text><text x="535" y="78">Franklin</text><text x="690" y="78">Meselson &amp; Stahl</text>
<text x="147.5" y="218">Griffith</text><text x="302.5" y="218">Avery, MacLeod, McCarty</text><text x="457.5" y="218">Hershey &amp; Chase</text><text x="612.5" y="218">Watson &amp; Crick</text>
</g>
<g text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">
<text x="70" y="95">isolates “nuclein”</text><text x="70" y="110">from cell nuclei</text>
<text x="225" y="95">heredity is directed</text><text x="225" y="110">by the nucleus</text>
<text x="380" y="95">A = T and G = C</text><text x="380" y="110">in every species</text>
<text x="535" y="95">X-rays show a helix,</text><text x="535" y="110">backbone outside</text>
<text x="690" y="95">copying is</text><text x="690" y="110">semiconservative</text>
<text x="147.5" y="235">transformation</text><text x="147.5" y="250">of bacteria</text>
<text x="302.5" y="235">DNA is the</text><text x="302.5" y="250">transforming principle</text>
<text x="457.5" y="235">phage DNA enters</text><text x="457.5" y="250">the cell, not protein</text>
<text x="612.5" y="235">double-helix model</text><text x="612.5" y="250">of DNA</text>
</g>
<g style="font-size:12px;fill:var(--ink)">
<circle cx="36" cy="282" r="5" style="fill:var(--ink-2)"/><text x="46" y="286">Isolating DNA</text>
<circle cx="166" cy="282" r="5" style="fill:var(--etc)"/><text x="176" y="286">Proving DNA carries heredity</text>
<circle cx="386" cy="282" r="5" style="fill:var(--leaf)"/><text x="396" y="286">Working out its structure</text>
<circle cx="586" cy="282" r="5" style="fill:var(--krebs)"/><text x="596" y="286">How it copies itself</text>
</g>
</svg>
<figcaption>The key discoveries, evenly spaced (not to scale: there is a 59-year gap after Miescher). Blue events answered "is it DNA or protein?"; green events worked out the structure; magenta answered "how is it copied?".</figcaption>
</figure>

<div class="callout tip"><p class="callout-title">Memory trick</p><p>The order of the scientists: <strong>"My Great Hamster Always Chews His Favourite Wooden Mat"</strong>: <strong>M</strong>iescher, <strong>G</strong>riffith, <strong>H</strong>ämmerling, <strong>A</strong>very, <strong>C</strong>hargaff, <strong>H</strong>ershey–Chase, <strong>F</strong>ranklin, <strong>W</strong>atson–Crick, <strong>M</strong>eselson–Stahl.</p></div>
<p data-tier="extra">The belief that DNA was a dull, repetitive molecule came from the "tetranucleotide hypothesis" of the chemist Phoebus Levene in the 1910s. He proposed that DNA was the same four nucleotides repeated in a fixed order. If that were true, DNA could carry no more information than a book that says "ATGC ATGC ATGC" on every page. Chargaff's measurements (1950) finally disproved it.</p>

<h3 data-tier="essential">Miescher (1869): nuclein</h3>
<p>The first person to isolate DNA was the Swiss physician <strong>Friedrich Miescher</strong>, in 1869. He wanted to know what the nucleus is made of, so he needed a good supply of cells with large nuclei. He found one in an unlikely place: <strong>pus</strong> on used surgical bandages from a nearby hospital (the class case file calls this "The Hospital Heist"). Pus is mostly <strong>white blood cells</strong>, which have big nuclei.</p>
<p>Miescher washed the cells off the bandages, broke them open and collected the nuclei. He treated them with pepsin, a protein-digesting enzyme from pig stomachs, to remove the proteins. Something was left that the enzyme could not digest: a white, sticky, <strong>slightly acidic</strong> substance. When he analyzed it, he found that it was:</p>
<ul>
<li>rich in <strong>phosphorus</strong> and <strong>nitrogen</strong>;</li>
<li>missing the sulfur that proteins contain, and resistant to protein-digesting enzymes, so it was <strong>not a protein</strong>;</li>
<li>found in the <strong>nucleus</strong>.</li>
</ul>
<p>Because it came from the nucleus, he named it <span class="term">nuclein</span>. It had two parts, an <strong>acidic portion</strong> and a <strong>basic portion</strong>. We now know the acidic portion is DNA itself (its phosphate groups make it an acid, lesson 3.02) and the basic portion is mostly the positively charged proteins called <strong>histones</strong> that DNA wraps around inside chromosomes.</p>
<div class="callout teacher"><p class="callout-title">From the slides</p><p>Miescher (1869) "found a phosphorus- and nitrogen-rich substance in the nucleus (<strong>'nuclein'</strong>)" that "consisted of an <strong>acidic and basic portion</strong>." The slide shows a portrait and a glass vial of his original nuclein.</p></div>
<p>Miescher had no idea what nuclein was for, and for decades nobody connected it with heredity. But he had found the molecule that the rest of this lesson is about.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Miescher <strong>isolated</strong> DNA. He did not show that it carries hereditary information, and he did not work out its structure. If a question asks who first showed that DNA is the genetic material, the answer is Avery, MacLeod and McCarty (1944), backed up by Hershey and Chase (1952).</p></div>
<p data-tier="extra">Two later chemists filled in the details. In 1889 Richard Altmann prepared protein-free nuclein and renamed it <strong>nucleic acid</strong>. Between about 1885 and 1901, Albrecht Kossel and his students identified its five nitrogenous bases (adenine, guanine, cytosine, thymine and uracil), work that earned Kossel the 1910 Nobel Prize.</p>

<h3 data-tier="essential">Griffith (1928): transformation</h3>
<p>In 1928 the British medical officer <strong>Frederick Griffith</strong> was trying to develop a <strong>vaccine against pneumonia</strong>. He worked with the bacterium <em>Streptococcus pneumoniae</em> (pneumococcus) and with <strong>mice</strong>. Two strains of the bacterium were the key:</p>
<div class="compare"><div><h4>S strain (smooth)</h4><ul><li>Each cell is wrapped in a slimy polysaccharide <strong>capsule</strong>, so its colonies look smooth and shiny.</li><li>The capsule hides the cell from the mouse's white blood cells.</li><li><strong>Virulent</strong>: it causes pneumonia and kills the mouse.</li></ul></div><div><h4>R strain (rough)</h4><ul><li><strong>No capsule</strong>, so its colonies look rough.</li><li>The mouse's immune system recognizes and destroys it.</li><li><strong>Non-virulent</strong> (harmless): the mouse lives.</li></ul></div></div>
<p>Griffith injected mice in four different ways. Step through the experiment with the Next button.</p>

<figure class="diagram stepper">
<svg viewBox="0 0 720 370" role="img" aria-labelledby="g301b-t g301b-d">
<title id="g301b-t">Griffith's experiment: four injections into mice</title>
<desc id="g301b-d">Four cultures are injected into four mice. Live S strain bacteria, which have capsules, kill the mouse. Live R strain bacteria, which have no capsule, do not: the mouse lives. Heat-killed S strain bacteria do not kill the mouse. A mixture of heat-killed S strain and live R strain kills the mouse, and live S bacteria are recovered from its blood. A side panel shows transformation: DNA from the dead S cells is taken up by an R cell, which then makes a capsule like an S cell.</desc>
<defs><marker id="g301b-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<!-- column 1: live S -->
<g>
<text x="95" y="26" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Live S strain</text>
<text x="95" y="42" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">virulent, with capsule</text>
<path d="M53,70 V112 Q53,121 62,121 H128 Q137,121 137,112 V70 Z" style="fill:var(--surface-2)"/>
<path d="M53,56 V112 Q53,122 63,122 H127 Q137,122 137,112 V56" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<g style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1"><ellipse cx="73" cy="86" rx="9" ry="6.5"/><ellipse cx="97" cy="82" rx="9" ry="6.5"/><ellipse cx="119" cy="90" rx="9" ry="6.5"/><ellipse cx="81" cy="106" rx="9" ry="6.5"/><ellipse cx="107" cy="107" rx="9" ry="6.5"/></g>
<g style="fill:var(--proton)"><ellipse cx="73" cy="86" rx="5" ry="3"/><ellipse cx="97" cy="82" rx="5" ry="3"/><ellipse cx="119" cy="90" rx="5" ry="3"/><ellipse cx="81" cy="106" rx="5" ry="3"/><ellipse cx="107" cy="107" rx="5" ry="3"/></g>
<line x1="95" y1="128" x2="95" y2="158" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g301b-ah)"/>
<text x="103" y="147" style="fill:var(--ink-2);font-size:11px">inject</text>
<g transform="translate(95,188)">
<path d="M-32,4 C-46,6 -50,-8 -62,-4" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<ellipse cx="-4" cy="0" rx="28" ry="15" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="20" cy="-15" r="5.5" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="26" cy="-5" r="11" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="37" cy="-3" r="1.8" style="fill:var(--ink-2)"/>
<path d="M-16,14 v5 M8,14 v5" style="stroke:var(--ink-2);stroke-width:1.5"/>
<path d="M25,-11 l6,6 M31,-11 l-6,6" style="stroke:var(--ink);stroke-width:1.5"/>
</g>
<text x="95" y="232" text-anchor="middle" style="fill:var(--bad);font-size:13px;font-weight:700">Mouse dies</text>
</g>
<!-- column 2: live R -->
<g data-from="2">
<text x="275" y="26" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Live R strain</text>
<text x="275" y="42" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">harmless, no capsule</text>
<path d="M233,70 V112 Q233,121 242,121 H308 Q317,121 317,112 V70 Z" style="fill:var(--surface-2)"/>
<path d="M233,56 V112 Q233,122 243,122 H307 Q317,122 317,112 V56" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<g style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"><ellipse cx="253" cy="86" rx="6" ry="3.5"/><ellipse cx="277" cy="82" rx="6" ry="3.5"/><ellipse cx="299" cy="90" rx="6" ry="3.5"/><ellipse cx="261" cy="106" rx="6" ry="3.5"/><ellipse cx="287" cy="107" rx="6" ry="3.5"/><ellipse cx="305" cy="104" rx="6" ry="3.5"/></g>
<line x1="275" y1="128" x2="275" y2="158" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g301b-ah)"/>
<text x="283" y="147" style="fill:var(--ink-2);font-size:11px">inject</text>
<g transform="translate(275,188)">
<path d="M-32,4 C-46,6 -50,-8 -62,-4" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<ellipse cx="-4" cy="0" rx="28" ry="15" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="20" cy="-15" r="5.5" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="26" cy="-5" r="11" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="37" cy="-3" r="1.8" style="fill:var(--ink-2)"/>
<path d="M-16,14 v5 M8,14 v5" style="stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="28" cy="-8" r="2" style="fill:var(--ink)"/>
</g>
<text x="275" y="232" text-anchor="middle" style="fill:var(--good);font-size:13px;font-weight:700">Mouse lives</text>
</g>
<!-- column 3: heat-killed S -->
<g data-from="3">
<text x="455" y="26" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Heat-killed S strain</text>
<text x="455" y="42" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">dead cells</text>
<path d="M413,70 V112 Q413,121 422,121 H488 Q497,121 497,112 V70 Z" style="fill:var(--surface-2)"/>
<path d="M413,56 V112 Q413,122 423,122 H487 Q497,122 497,112 V56" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<g style="fill:none;stroke:var(--proton);stroke-width:1.2;stroke-dasharray:2.5 2.5"><ellipse cx="433" cy="86" rx="9" ry="6.5"/><ellipse cx="457" cy="82" rx="9" ry="6.5"/><ellipse cx="479" cy="90" rx="9" ry="6.5"/><ellipse cx="441" cy="106" rx="9" ry="6.5"/><ellipse cx="467" cy="107" rx="9" ry="6.5"/></g>
<g style="fill:none;stroke:var(--proton);stroke-width:1.2"><path d="M429,86 l3,-2 l3,2 l3,-2"/><path d="M453,82 l3,-2 l3,2 l3,-2"/><path d="M475,90 l3,-2 l3,2 l3,-2"/><path d="M437,106 l3,-2 l3,2 l3,-2"/><path d="M463,107 l3,-2 l3,2 l3,-2"/></g>
<line x1="455" y1="128" x2="455" y2="158" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g301b-ah)"/>
<text x="463" y="147" style="fill:var(--ink-2);font-size:11px">inject</text>
<g transform="translate(455,188)">
<path d="M-32,4 C-46,6 -50,-8 -62,-4" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<ellipse cx="-4" cy="0" rx="28" ry="15" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="20" cy="-15" r="5.5" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="26" cy="-5" r="11" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="37" cy="-3" r="1.8" style="fill:var(--ink-2)"/>
<path d="M-16,14 v5 M8,14 v5" style="stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="28" cy="-8" r="2" style="fill:var(--ink)"/>
</g>
<text x="455" y="232" text-anchor="middle" style="fill:var(--good);font-size:13px;font-weight:700">Mouse lives</text>
</g>
<!-- column 4: heat-killed S + live R -->
<g data-from="4">
<text x="635" y="26" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Heat-killed S</text>
<text x="635" y="42" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">+ live R strain</text>
<path d="M593,70 V112 Q593,121 602,121 H668 Q677,121 677,112 V70 Z" style="fill:var(--surface-2)"/>
<path d="M593,56 V112 Q593,122 603,122 H667 Q677,122 677,112 V56" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<g style="fill:none;stroke:var(--proton);stroke-width:1.2;stroke-dasharray:2.5 2.5"><ellipse cx="613" cy="86" rx="9" ry="6.5"/><ellipse cx="659" cy="90" rx="9" ry="6.5"/><ellipse cx="633" cy="107" rx="9" ry="6.5"/></g>
<g style="fill:none;stroke:var(--proton);stroke-width:1.2"><path d="M609,86 l3,-2 l3,2 l3,-2"/><path d="M655,90 l3,-2 l3,2 l3,-2"/><path d="M629,107 l3,-2 l3,2 l3,-2"/></g>
<g style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"><ellipse cx="637" cy="81" rx="6" ry="3.5"/><ellipse cx="613" cy="104" rx="6" ry="3.5"/><ellipse cx="659" cy="108" rx="6" ry="3.5"/></g>
<line x1="635" y1="128" x2="635" y2="158" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g301b-ah)"/>
<text x="643" y="147" style="fill:var(--ink-2);font-size:11px">inject</text>
<g transform="translate(635,188)">
<path d="M-32,4 C-46,6 -50,-8 -62,-4" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<ellipse cx="-4" cy="0" rx="28" ry="15" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="20" cy="-15" r="5.5" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="26" cy="-5" r="11" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="37" cy="-3" r="1.8" style="fill:var(--ink-2)"/>
<path d="M-16,14 v5 M8,14 v5" style="stroke:var(--ink-2);stroke-width:1.5"/>
<path d="M25,-11 l6,6 M31,-11 l-6,6" style="stroke:var(--ink);stroke-width:1.5"/>
</g>
<text x="635" y="232" text-anchor="middle" style="fill:var(--bad);font-size:13px;font-weight:700">Mouse dies!</text>
</g>
<!-- step 5: recovered S cells + transformation panel -->
<g data-from="5">
<line x1="635" y1="242" x2="635" y2="268" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g301b-ah)"/>
<circle cx="635" cy="302" r="28" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.5"/>
<g style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1"><ellipse cx="622" cy="294" rx="9" ry="6.5"/><ellipse cx="647" cy="297" rx="9" ry="6.5"/><ellipse cx="633" cy="314" rx="9" ry="6.5"/></g>
<g style="fill:var(--proton)"><ellipse cx="622" cy="294" rx="5" ry="3"/><ellipse cx="647" cy="297" rx="5" ry="3"/><ellipse cx="633" cy="314" rx="5" ry="3"/></g>
<text x="598" y="297" text-anchor="end" style="fill:var(--ink);font-size:12px;font-weight:700">Live S cells</text>
<text x="598" y="313" text-anchor="end" style="fill:var(--ink-2);font-size:11.5px">found in its blood</text>
<rect x="20" y="256" width="430" height="102" rx="10" style="fill:none;stroke:var(--line);stroke-width:1.5"/>
<text x="34" y="276" style="fill:var(--ink);font-size:12.5px;font-weight:700">Transformation</text>
<g style="fill:none;stroke:var(--proton);stroke-width:2"><path d="M52,298 q5,-6 10,0 t10,0"/><path d="M70,314 q5,-6 10,0 t10,0"/><path d="M96,300 q5,-6 10,0 t10,0"/></g>
<line x1="124" y1="308" x2="160" y2="308" style="stroke:var(--ink-2);stroke-width:1.8" marker-end="url(#g301b-ah)"/>
<ellipse cx="210" cy="308" rx="40" ry="20" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
<ellipse cx="204" cy="308" rx="20" ry="8" style="fill:none;stroke:var(--etc);stroke-width:1.5"/>
<path d="M256,296 q-4,4 -8,2 t-10,4" style="fill:none;stroke:var(--proton);stroke-width:2"/>
<line x1="262" y1="308" x2="298" y2="308" style="stroke:var(--ink-2);stroke-width:1.8" marker-end="url(#g301b-ah)"/>
<ellipse cx="364" cy="308" rx="52" ry="28" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1.2"/>
<ellipse cx="364" cy="308" rx="38" ry="17" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
<path d="M346,308 a18,7 0 1 0 36,0" style="fill:none;stroke:var(--etc);stroke-width:1.5"/>
<path d="M346,308 a18,7 0 0 1 36,0" style="fill:none;stroke:var(--proton);stroke-width:2"/>
<g text-anchor="middle" style="fill:var(--ink-2);font-size:11px">
<text x="84" y="346">S-cell DNA</text>
<text x="210" y="346">R cell takes it up</text>
<text x="364" y="350">R cell now makes a capsule</text>
</g>
</g>
</svg>
<ol class="step-captions">
<li><strong>Live S strain → mouse dies.</strong> The capsule hides the S cells from the mouse's immune system, so they multiply in the lungs and cause fatal pneumonia.</li>
<li><strong>Live R strain → mouse lives.</strong> Without a capsule, the R cells are recognized and destroyed by the mouse's white blood cells.</li>
<li><strong>Heat-killed S strain → mouse lives.</strong> Dead cells cannot multiply, so they cannot cause disease. The dead cells' capsule material on its own is harmless.</li>
<li><strong>Heat-killed S + live R → mouse dies!</strong> Neither part kills on its own, yet together they do. Something in the dead S cells must have changed the living R cells.</li>
<li><strong>Live S cells recovered: transformation.</strong> Griffith found living, capsule-making S cells in the dead mouse's blood. The R cells had taken in material from the dead S cells and been transformed, and their offspring stayed S.</li>
</ol>
<figcaption>Griffith's four injections (1928). Red cells with a pale halo are S cells (the halo is the capsule); blue cells are R cells; dashed red outlines are heat-killed S cells.</figcaption>
</figure>

<p>Injections 1 to 3 are the <strong>controls</strong>: they show what each ingredient does on its own. Injection 4 is the surprise. Heat-killed S cells cannot kill, and live R cells cannot kill, yet the mixture killed the mouse. And when Griffith examined the dead mouse, he found <strong>living S cells</strong> with capsules, even though he had injected no living S cells at all.</p>
<p>The R cells had been <strong>permanently</strong> changed. They now made capsules, and so did all of their offspring, generation after generation. A change that is passed on to offspring must be a change in the cell's hereditary material. Griffith called this <span class="term">transformation</span>: a change in a cell's genetic makeup and traits caused by taking in genetic material from its surroundings. Whatever passed from the dead S cells into the living R cells became known as the <strong>"transforming principle."</strong></p>
<div class="callout teacher"><p class="callout-title">From the slides</p><p>Griffith (1928) "discovered the process of <strong>transformation</strong>." The first slide shows a bacterial cell taking in pieces of chromosome from outside and adding them to its own chromosome. The cartoon slide adds a fifth column: <strong>live S strain recovered from group 4</strong> also killed a mouse, showing that the transformed bacteria kept their new trait.</p></div>
<p>What Griffith did <strong>not</strong> know was what the transforming principle was. The dead S cells contained protein, DNA, RNA, lipids and the polysaccharide capsule. Any of them could have been responsible. Identifying it took another 16 years.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>The heat did <strong>not</strong> bring the S cells back to life, and the R cells did <strong>not</strong> simply mutate into S cells on their own. Heat-killed S cells alone never killed a mouse (injection 3), and live R cells alone never did either (injection 2). The only explanation that fits all four results is that living R cells took up genetic material from the dead S cells and were transformed.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>S</strong> strain: <strong>S</strong>mooth, <strong>S</strong>hielded by a capsule, <strong>S</strong>ickens the mouse. <strong>R</strong> strain: <strong>R</strong>ough, and <strong>R</strong>emoved by the immune system.</p></div>
<p data-tier="likely">In hindsight, the heat was a clue. Heating to about 60 °C kills bacteria largely by denaturing their proteins, yet the transforming principle still worked after heating. A heat-stable molecule fits DNA better than protein, although nobody drew that conclusion at the time.</p>
<p data-tier="extra">Transformation is now an everyday tool in biotechnology. Bacteria made "competent" with calcium chloride and a brief heat shock will take up a small circle of DNA (a plasmid) carrying a human gene, such as the gene for insulin, and then make the human protein. Every insulin injection made this way depends on the process Griffith stumbled on.</p>

<h3 data-tier="essential">Hämmerling (1934): nucleus in control</h3>
<p>Griffith's work raised a related question: where in a cell is the hereditary information kept? Biologists suspected the nucleus, and the German-born biologist <strong>Joachim Hämmerling</strong> found an elegant way to test it. The slide states his hypothesis: <strong>hereditary information is stored in the nucleus</strong>.</p>
<p>He used <em>Acetabularia</em> (sometimes called "mermaid's wineglass"), a <strong>single-celled green alga</strong> that is enormous for one cell: several centimetres tall. It has three parts:</p>
<ul>
<li>a <strong>cap</strong> (umbrella) at the top,</li>
<li>a long <strong>stalk</strong>,</li>
<li>a <strong>foot</strong> (the <span class="term">rhizoid</span>) that anchors it to rocks, and that contains the cell's single <strong>nucleus</strong>.</li>
</ul>
<p>Because the cell is so large, it can be cut into pieces and even grafted together, which is impossible with ordinary cells. Different species also have differently shaped caps, which gives an easy trait to follow.</p>

<figure class="diagram stepper">
<svg viewBox="0 0 720 340" role="img" aria-labelledby="g301c-t g301c-d">
<title id="g301c-t">Hämmerling's cutting and grafting experiments with Acetabularia</title>
<desc id="g301c-d">Acetabularia is a single cell with a cap, a stalk and a foot, or rhizoid, which contains the nucleus. Two species differ in their caps: A. mediterranea has a smooth disc-shaped cap and A. crenulata has a cap split into separate rays. Experiment 1: when the cap is cut off, the stalk and foot grow a new cap. Experiment 2: when the foot is cut off, the cap and stalk piece cannot grow a new foot. Experiment 3: a stalk from A. crenulata is grafted onto a foot from A. mediterranea, which holds the mediterranea nucleus. The new cap that grows is the smooth mediterranea type, matching the species that supplied the nucleus.</desc>
<defs><marker id="g301c-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<!-- persistent labelled cell -->
<ellipse cx="95" cy="58" rx="48" ry="12" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<g style="stroke:var(--leaf);stroke-width:1"><line x1="95" y1="58" x2="52" y2="61"/><line x1="95" y1="58" x2="62" y2="66"/><line x1="95" y1="58" x2="78" y2="69"/><line x1="95" y1="58" x2="112" y2="69"/><line x1="95" y1="58" x2="128" y2="66"/><line x1="95" y1="58" x2="138" y2="61"/></g>
<rect x="92" y="69" width="6" height="190" rx="3" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<g style="stroke:var(--leaf);stroke-width:3;stroke-linecap:round"><line x1="95" y1="262" x2="78" y2="282"/><line x1="95" y1="262" x2="89" y2="286"/><line x1="95" y1="262" x2="103" y2="286"/><line x1="95" y1="262" x2="113" y2="280"/></g>
<ellipse cx="95" cy="262" rx="9" ry="7" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<circle cx="95" cy="262" r="4" style="fill:var(--etc)"/>
<text x="150" y="62" style="fill:var(--ink);font-size:12.5px;font-weight:650">cap</text>
<text x="106" y="165" style="fill:var(--ink);font-size:12.5px;font-weight:650">stalk</text>
<line x1="102" y1="259" x2="118" y2="250" style="stroke:var(--ink-2);stroke-width:1"/>
<text x="121" y="250" style="fill:var(--etc);font-size:12.5px;font-weight:650">nucleus</text>
<text x="121" y="286" style="fill:var(--ink);font-size:12.5px;font-weight:650">foot (rhizoid)</text>
<text x="95" y="316" text-anchor="middle" style="fill:var(--ink);font-size:12.5px;font-style:italic;font-weight:650">Acetabularia</text>
<text x="95" y="332" text-anchor="middle" style="fill:var(--ink-2);font-size:11px">one cell, several cm tall</text>
<line x1="232" y1="16" x2="232" y2="328" style="stroke:var(--line);stroke-width:1.5"/>
<!-- step 1: two species -->
<g data-step="1">
<text x="480" y="36" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Two species with different caps</text>
<ellipse cx="390" cy="92" rx="42" ry="10" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<g style="stroke:var(--leaf);stroke-width:1"><line x1="390" y1="92" x2="352" y2="95"/><line x1="390" y1="92" x2="364" y2="99"/><line x1="390" y1="92" x2="378" y2="101"/><line x1="390" y1="92" x2="402" y2="101"/><line x1="390" y1="92" x2="416" y2="99"/><line x1="390" y1="92" x2="428" y2="95"/></g>
<rect x="387" y="101" width="6" height="158" rx="3" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<g style="stroke:var(--leaf);stroke-width:3;stroke-linecap:round"><line x1="390" y1="262" x2="373" y2="280"/><line x1="390" y1="262" x2="384" y2="284"/><line x1="390" y1="262" x2="398" y2="284"/><line x1="390" y1="262" x2="408" y2="278"/></g>
<ellipse cx="390" cy="262" rx="9" ry="7" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<circle cx="390" cy="262" r="4" style="fill:var(--etc)"/>
<g style="stroke:var(--leaf);stroke-width:5;stroke-linecap:round"><line x1="580" y1="92" x2="620" y2="92"/><line x1="580" y1="92" x2="615" y2="97"/><line x1="580" y1="92" x2="600" y2="101"/><line x1="580" y1="92" x2="580" y2="102"/><line x1="580" y1="92" x2="560" y2="101"/><line x1="580" y1="92" x2="545" y2="97"/><line x1="580" y1="92" x2="540" y2="92"/><line x1="580" y1="92" x2="550" y2="85"/><line x1="580" y1="92" x2="566" y2="83"/><line x1="580" y1="92" x2="594" y2="83"/><line x1="580" y1="92" x2="610" y2="85"/></g>
<rect x="577" y="98" width="6" height="161" rx="3" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<g style="stroke:var(--leaf);stroke-width:3;stroke-linecap:round"><line x1="580" y1="262" x2="563" y2="280"/><line x1="580" y1="262" x2="574" y2="284"/><line x1="580" y1="262" x2="588" y2="284"/><line x1="580" y1="262" x2="598" y2="278"/></g>
<ellipse cx="580" cy="262" rx="9" ry="7" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<circle cx="580" cy="262" r="4" style="fill:var(--etc)"/>
<text x="390" y="306" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-style:italic;font-weight:650">A. mediterranea</text>
<text x="390" y="322" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">smooth, disc-shaped cap</text>
<text x="580" y="306" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-style:italic;font-weight:650">A. crenulata</text>
<text x="580" y="322" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">cap split into rays</text>
</g>
<!-- step 2: remove the cap -->
<g data-step="2">
<text x="480" y="36" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Experiment 1: remove the cap</text>
<ellipse cx="300" cy="92" rx="38" ry="10" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<rect x="297" y="101" width="6" height="158" rx="3" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<line x1="278" y1="112" x2="322" y2="112" style="stroke:var(--proton);stroke-width:2;stroke-dasharray:4 3"/>
<text x="327" y="116" style="fill:var(--proton);font-size:11px;font-weight:650">cut</text>
<line x1="345" y1="180" x2="420" y2="180" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g301c-ah)"/>
<text x="382" y="168" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">cap removed</text>
<rect x="467" y="115" width="6" height="144" rx="3" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<line x1="515" y1="180" x2="590" y2="180" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g301c-ah)"/>
<text x="552" y="168" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">new cap grows</text>
<ellipse cx="640" cy="92" rx="38" ry="10" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<rect x="637" y="101" width="6" height="158" rx="3" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<g style="stroke:var(--leaf);stroke-width:3;stroke-linecap:round"><line x1="300" y1="262" x2="285" y2="279"/><line x1="300" y1="262" x2="306" y2="283"/><line x1="300" y1="262" x2="315" y2="277"/><line x1="470" y1="262" x2="455" y2="279"/><line x1="470" y1="262" x2="476" y2="283"/><line x1="470" y1="262" x2="485" y2="277"/><line x1="640" y1="262" x2="625" y2="279"/><line x1="640" y1="262" x2="646" y2="283"/><line x1="640" y1="262" x2="655" y2="277"/></g>
<g style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"><ellipse cx="300" cy="262" rx="9" ry="7"/><ellipse cx="470" cy="262" rx="9" ry="7"/><ellipse cx="640" cy="262" rx="9" ry="7"/></g>
<g style="fill:var(--etc)"><circle cx="300" cy="262" r="4"/><circle cx="470" cy="262" r="4"/><circle cx="640" cy="262" r="4"/></g>
<text x="470" y="318" text-anchor="middle" style="fill:var(--ink);font-size:12.5px;font-weight:650">Result: a new cap grows (the nucleus is still in the foot).</text>
</g>
<!-- step 3: remove the foot -->
<g data-step="3">
<text x="480" y="36" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Experiment 2: remove the foot</text>
<ellipse cx="300" cy="92" rx="38" ry="10" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<rect x="297" y="101" width="6" height="158" rx="3" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<g style="stroke:var(--leaf);stroke-width:3;stroke-linecap:round"><line x1="300" y1="262" x2="285" y2="279"/><line x1="300" y1="262" x2="306" y2="283"/><line x1="300" y1="262" x2="315" y2="277"/></g>
<ellipse cx="300" cy="262" rx="9" ry="7" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<circle cx="300" cy="262" r="4" style="fill:var(--etc)"/>
<line x1="278" y1="242" x2="322" y2="242" style="stroke:var(--proton);stroke-width:2;stroke-dasharray:4 3"/>
<text x="327" y="246" style="fill:var(--proton);font-size:11px;font-weight:650">cut</text>
<line x1="345" y1="180" x2="420" y2="180" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g301c-ah)"/>
<text x="382" y="168" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">foot removed</text>
<ellipse cx="470" cy="92" rx="38" ry="10" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<rect x="467" y="101" width="6" height="136" rx="3" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<line x1="515" y1="180" x2="590" y2="180" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g301c-ah)"/>
<text x="552" y="168" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">wait</text>
<g style="opacity:.55">
<ellipse cx="640" cy="92" rx="38" ry="10" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<rect x="637" y="101" width="6" height="136" rx="3" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
</g>
<text x="640" y="262" text-anchor="middle" style="fill:var(--bad);font-size:12px;font-weight:700">no new foot</text>
<text x="470" y="318" text-anchor="middle" style="fill:var(--ink);font-size:12.5px;font-weight:650">Result: no foot regrows; without the nucleus the piece dies.</text>
</g>
<!-- steps 4-5: graft -->
<g data-step="4 5">
<text x="480" y="36" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Experiment 3: graft two species</text>
</g>
<g data-from="4">
<text x="283" y="82" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">stalk from</text>
<text x="283" y="97" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-style:italic;font-weight:650">A. crenulata</text>
<rect x="280" y="110" width="6" height="120" rx="3" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<text x="316" y="204" text-anchor="middle" style="fill:var(--ink);font-size:16px;font-weight:700">+</text>
<rect x="342" y="226" width="6" height="33" rx="3" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<g style="stroke:var(--leaf);stroke-width:3;stroke-linecap:round"><line x1="345" y1="262" x2="330" y2="279"/><line x1="345" y1="262" x2="351" y2="283"/><line x1="345" y1="262" x2="360" y2="277"/></g>
<ellipse cx="345" cy="262" rx="9" ry="7" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<circle cx="345" cy="262" r="4" style="fill:var(--etc)"/>
<text x="345" y="304" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">foot + nucleus from</text>
<text x="345" y="319" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-style:italic;font-weight:650">A. mediterranea</text>
<line x1="390" y1="180" x2="440" y2="180" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g301c-ah)"/>
<text x="415" y="168" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">graft</text>
<rect x="477" y="110" width="6" height="149" rx="3" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<line x1="473" y1="232" x2="487" y2="232" style="stroke:var(--ink-2);stroke-width:2"/>
<g style="stroke:var(--leaf);stroke-width:3;stroke-linecap:round"><line x1="480" y1="262" x2="465" y2="279"/><line x1="480" y1="262" x2="486" y2="283"/><line x1="480" y1="262" x2="495" y2="277"/></g>
<ellipse cx="480" cy="262" rx="9" ry="7" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<circle cx="480" cy="262" r="4" style="fill:var(--etc)"/>
<text x="480" y="304" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">grafted cell</text>
</g>
<g data-from="5">
<line x1="520" y1="180" x2="590" y2="180" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g301c-ah)"/>
<text x="555" y="168" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">new cap grows</text>
<ellipse cx="640" cy="92" rx="42" ry="10" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<g style="stroke:var(--leaf);stroke-width:1"><line x1="640" y1="92" x2="602" y2="95"/><line x1="640" y1="92" x2="614" y2="99"/><line x1="640" y1="92" x2="628" y2="101"/><line x1="640" y1="92" x2="652" y2="101"/><line x1="640" y1="92" x2="666" y2="99"/><line x1="640" y1="92" x2="678" y2="95"/></g>
<rect x="637" y="101" width="6" height="158" rx="3" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<line x1="633" y1="232" x2="647" y2="232" style="stroke:var(--ink-2);stroke-width:2"/>
<g style="stroke:var(--leaf);stroke-width:3;stroke-linecap:round"><line x1="640" y1="262" x2="625" y2="279"/><line x1="640" y1="262" x2="646" y2="283"/><line x1="640" y1="262" x2="655" y2="277"/></g>
<ellipse cx="640" cy="262" rx="9" ry="7" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<circle cx="640" cy="262" r="4" style="fill:var(--etc)"/>
<text x="640" y="304" text-anchor="middle" style="fill:var(--ink);font-size:11.5px;font-weight:650">smooth cap:</text>
<text x="640" y="319" text-anchor="middle" style="fill:var(--ink);font-size:11.5px;font-weight:650">matches the nucleus</text>
</g>
</svg>
<ol class="step-captions">
<li><strong>One giant cell.</strong> <em>Acetabularia</em> is a single cell several centimetres tall, with a cap, a stalk and a foot (rhizoid). Its one nucleus sits in the foot. Different species have different caps: <em>A. mediterranea</em> has a smooth disc, <em>A. crenulata</em> a cap split into rays.</li>
<li><strong>Remove the cap: a new cap grows.</strong> The stalk and foot still contain the nucleus, and they rebuild a complete new cap. Hämmerling could repeat this again and again.</li>
<li><strong>Remove the foot: no new foot grows.</strong> The cap-and-stalk piece has no nucleus. It cannot rebuild a foot and eventually dies. The foot piece, which has the nucleus, can regrow a whole stalk and cap.</li>
<li><strong>Graft two species.</strong> A stalk from <em>A. crenulata</em> (cap removed) is grafted onto a foot from <em>A. mediterranea</em>. Now the stalk comes from one species and the nucleus from the other.</li>
<li><strong>The cap matches the nucleus.</strong> The cap that grows is the smooth <em>A. mediterranea</em> type, even though the stalk came from <em>A. crenulata</em>. The species that supplied the nucleus decides the shape of the cap.</li>
</ol>
<figcaption>Hämmerling's <em>Acetabularia</em> experiments (1930s). The blue dot is the nucleus. The short grey bar on the grafted stalk marks the graft.</figcaption>
</figure>

<p>Put the results together:</p>
<ul>
<li>A piece <strong>with</strong> the foot (and so with the nucleus) can regenerate the missing parts.</li>
<li>A piece <strong>without</strong> the foot cannot.</li>
<li>When the foot and the stalk come from different species, the new cap follows the <strong>nucleus</strong>, not the stalk.</li>
</ul>
<p>So the instructions for building the cell, including the shape of its cap, come from the nucleus. The slide's conclusion: <strong>regeneration can only occur if genetic information is present to direct it, so the nucleus and the genetic information must be located in the foot of the alga.</strong></p>
<div class="callout key"><p class="callout-title">On the test</p><ul><li>Organism: <em>Acetabularia</em>, a single-celled green alga with a cap, stalk and foot (rhizoid).</li><li>Remove the cap → it regrows. Remove the foot → no regrowth.</li><li>Conclusion: hereditary information is in the <strong>nucleus</strong>, which is in the <strong>foot</strong>.</li></ul></div>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The slides spell the name "Hammerling" and give the date as 1934; the class case file says "1930s." Both are fine. His name is properly written <strong>Hämmerling</strong>, and his <em>Acetabularia</em> work ran through the 1930s, with the best-known cutting and grafting experiments from about 1934. Use <strong>1934</strong> on the test, as the slides do.</p></div>
<p data-tier="likely">Notice what Hämmerling did <strong>not</strong> show: he showed that hereditary information is in the nucleus, but not which molecule in the nucleus carries it. The nucleus contains both DNA and protein, so the protein-versus-DNA question was still open.</p>
<p data-tier="extra">One more observation puzzled Hämmerling. A freshly cut stalk with no nucleus can sometimes still grow one cap before it dies, as if the nucleus had already sent "cap-making instructions" up the stalk. He proposed that the nucleus releases long-lived "morphogenetic substances" into the cytoplasm. We now know these are messenger RNA molecules made from the DNA in the nucleus (lesson 3.04), so his observation was an early glimpse of gene expression.</p>

<h3 data-tier="essential">Avery, MacLeod &amp; McCarty (1944)</h3>
<p>Griffith had shown that <em>something</em> in dead S cells could transform R cells. At the Rockefeller Institute in New York, <strong>Oswald Avery</strong>, <strong>Colin MacLeod</strong> and <strong>Maclyn McCarty</strong> spent about ten years working out what that something was. Their strategy was elimination: destroy one kind of molecule at a time and see whether transformation still happens.</p>
<p>The tool that made this possible was <strong>enzyme specificity</strong> (Unit 1). Each digestive enzyme breaks down only its own kind of molecule, so you can remove one suspect while leaving all the others untouched:</p>
<ul>
<li><strong>Protease</strong> (such as trypsin) digests <strong>protein</strong>.</li>
<li><strong>Ribonuclease (RNase)</strong> digests <strong>RNA</strong>.</li>
<li><strong>Deoxyribonuclease (DNase)</strong> digests <strong>DNA</strong>.</li>
<li>Other treatments removed the <strong>polysaccharide</strong> capsule material and the <strong>lipids</strong>.</li>
</ul>

<figure class="diagram stepper">
<svg viewBox="0 0 720 400" role="img" aria-labelledby="g301d-t g301d-d">
<title id="g301d-t">Avery, MacLeod and McCarty's experiment: destroying one molecule at a time</title>
<desc id="g301d-d">An extract of heat-killed S strain cells contains polysaccharides, lipids, RNA, protein and DNA. It is split into five tubes. In each tube one kind of molecule is destroyed: polysaccharides, lipids, RNA with RNase, protein with protease, and DNA with DNase. Live R cells are added to every tube. S cells appear in the first four tubes, so transformation happened, and on the slide those mice die. In the DNase tube only R cells grow, so transformation did not happen, and on the slide that mouse lives. Only destroying DNA stopped transformation, so DNA is the transforming principle.</desc>
<defs><marker id="g301d-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<!-- legend -->
<g transform="translate(26,24)"><polygon points="5,0 2.5,4.3 -2.5,4.3 -5,0 -2.5,-4.3 2.5,-4.3" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.2"/></g>
<g transform="translate(26,42)"><circle cx="-3" cy="0" r="3" style="fill:var(--leaf)"/><path d="M0,-1.5 H8 M0,1.5 H8" style="stroke:var(--leaf);stroke-width:1.2"/></g>
<g transform="translate(26,60)"><path d="M-7,0 q3.5,-5 7,0 t7,0" style="fill:none;stroke:var(--krebs);stroke-width:2"/></g>
<g transform="translate(26,78)"><polygon points="0,-5 1.5,-1.5 5,0 1.5,1.5 0,5 -1.5,1.5 -5,0 -1.5,-1.5" style="fill:var(--link)"/></g>
<g transform="translate(26,96)"><path d="M-7,-2.5 H7 M-7,2.5 H7" style="stroke:var(--etc);stroke-width:1.6"/><path d="M-4,-2.5 V2.5 M0,-2.5 V2.5 M4,-2.5 V2.5" style="stroke:var(--etc);stroke-width:1"/></g>
<g style="fill:var(--ink);font-size:11.5px">
<text x="42" y="28">polysaccharide</text><text x="42" y="46">lipid</text><text x="42" y="64">RNA</text><text x="42" y="82">protein</text><text x="42" y="100">DNA</text>
</g>
<!-- source tube -->
<path d="M344,30 V78 Q344,91 360,91 Q376,91 376,78 V30 Z" style="fill:var(--surface-2)"/>
<path d="M343,18 V78 Q343,92 360,92 Q377,92 377,78 V18" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<g transform="translate(360,38)"><polygon points="5,0 2.5,4.3 -2.5,4.3 -5,0 -2.5,-4.3 2.5,-4.3" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.2"/></g>
<g transform="translate(358,50)"><circle cx="-3" cy="0" r="3" style="fill:var(--leaf)"/><path d="M0,-1.5 H8 M0,1.5 H8" style="stroke:var(--leaf);stroke-width:1.2"/></g>
<g transform="translate(360,61)"><path d="M-7,0 q3.5,-5 7,0 t7,0" style="fill:none;stroke:var(--krebs);stroke-width:2"/></g>
<g transform="translate(360,72)"><polygon points="0,-5 1.5,-1.5 5,0 1.5,1.5 0,5 -1.5,1.5 -5,0 -1.5,-1.5" style="fill:var(--link)"/></g>
<g transform="translate(360,83)"><path d="M-7,-2.5 H7 M-7,2.5 H7" style="stroke:var(--etc);stroke-width:1.6"/><path d="M-4,-2.5 V2.5 M0,-2.5 V2.5 M4,-2.5 V2.5" style="stroke:var(--etc);stroke-width:1"/></g>
<text x="390" y="46" style="fill:var(--ink);font-size:12.5px;font-weight:700">Extract of heat-killed</text>
<text x="390" y="62" style="fill:var(--ink);font-size:12.5px;font-weight:700">S strain cells</text>
<!-- step 2: five treated tubes -->
<g data-from="2">
<path d="M360,96 V108 M95,108 H625 M95,108 V120 M227.5,108 V120 M360,108 V120 M492.5,108 V120 M625,108 V120" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<g style="fill:var(--surface-2)">
<path d="M81,130 V178 Q81,191 95,191 Q109,191 109,178 V130 Z"/><path d="M213.5,130 V178 Q213.5,191 227.5,191 Q241.5,191 241.5,178 V130 Z"/><path d="M346,130 V178 Q346,191 360,191 Q374,191 374,178 V130 Z"/><path d="M478.5,130 V178 Q478.5,191 492.5,191 Q506.5,191 506.5,178 V130 Z"/><path d="M611,130 V178 Q611,191 625,191 Q639,191 639,178 V130 Z"/>
</g>
<g style="fill:none;stroke:var(--ink-2);stroke-width:1.5">
<path d="M80,122 V178 Q80,192 95,192 Q110,192 110,178 V122"/><path d="M212.5,122 V178 Q212.5,192 227.5,192 Q242.5,192 242.5,178 V122"/><path d="M345,122 V178 Q345,192 360,192 Q375,192 375,178 V122"/><path d="M477.5,122 V178 Q477.5,192 492.5,192 Q507.5,192 507.5,178 V122"/><path d="M610,122 V178 Q610,192 625,192 Q640,192 640,178 V122"/>
</g>
<!-- icons per tube: rows at y 138,149,160,171,182 -->
<g>
<g transform="translate(95,138)" style="opacity:.3"><polygon points="5,0 2.5,4.3 -2.5,4.3 -5,0 -2.5,-4.3 2.5,-4.3" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.2"/></g>
<g transform="translate(93,149)"><circle cx="-3" cy="0" r="3" style="fill:var(--leaf)"/><path d="M0,-1.5 H8 M0,1.5 H8" style="stroke:var(--leaf);stroke-width:1.2"/></g>
<g transform="translate(95,160)"><path d="M-7,0 q3.5,-5 7,0 t7,0" style="fill:none;stroke:var(--krebs);stroke-width:2"/></g>
<g transform="translate(95,171)"><polygon points="0,-5 1.5,-1.5 5,0 1.5,1.5 0,5 -1.5,1.5 -5,0 -1.5,-1.5" style="fill:var(--link)"/></g>
<g transform="translate(95,182)"><path d="M-7,-2.5 H7 M-7,2.5 H7" style="stroke:var(--etc);stroke-width:1.6"/><path d="M-4,-2.5 V2.5 M0,-2.5 V2.5 M4,-2.5 V2.5" style="stroke:var(--etc);stroke-width:1"/></g>
</g>
<g transform="translate(227.5,138)"><polygon points="5,0 2.5,4.3 -2.5,4.3 -5,0 -2.5,-4.3 2.5,-4.3" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.2"/></g>
<g transform="translate(225.5,149)" style="opacity:.3"><circle cx="-3" cy="0" r="3" style="fill:var(--leaf)"/><path d="M0,-1.5 H8 M0,1.5 H8" style="stroke:var(--leaf);stroke-width:1.2"/></g>
<g transform="translate(227.5,160)"><path d="M-7,0 q3.5,-5 7,0 t7,0" style="fill:none;stroke:var(--krebs);stroke-width:2"/></g>
<g transform="translate(227.5,171)"><polygon points="0,-5 1.5,-1.5 5,0 1.5,1.5 0,5 -1.5,1.5 -5,0 -1.5,-1.5" style="fill:var(--link)"/></g>
<g transform="translate(227.5,182)"><path d="M-7,-2.5 H7 M-7,2.5 H7" style="stroke:var(--etc);stroke-width:1.6"/><path d="M-4,-2.5 V2.5 M0,-2.5 V2.5 M4,-2.5 V2.5" style="stroke:var(--etc);stroke-width:1"/></g>
<g transform="translate(360,138)"><polygon points="5,0 2.5,4.3 -2.5,4.3 -5,0 -2.5,-4.3 2.5,-4.3" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.2"/></g>
<g transform="translate(358,149)"><circle cx="-3" cy="0" r="3" style="fill:var(--leaf)"/><path d="M0,-1.5 H8 M0,1.5 H8" style="stroke:var(--leaf);stroke-width:1.2"/></g>
<g transform="translate(360,160)" style="opacity:.3"><path d="M-7,0 q3.5,-5 7,0 t7,0" style="fill:none;stroke:var(--krebs);stroke-width:2"/></g>
<g transform="translate(360,171)"><polygon points="0,-5 1.5,-1.5 5,0 1.5,1.5 0,5 -1.5,1.5 -5,0 -1.5,-1.5" style="fill:var(--link)"/></g>
<g transform="translate(360,182)"><path d="M-7,-2.5 H7 M-7,2.5 H7" style="stroke:var(--etc);stroke-width:1.6"/><path d="M-4,-2.5 V2.5 M0,-2.5 V2.5 M4,-2.5 V2.5" style="stroke:var(--etc);stroke-width:1"/></g>
<g transform="translate(492.5,138)"><polygon points="5,0 2.5,4.3 -2.5,4.3 -5,0 -2.5,-4.3 2.5,-4.3" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.2"/></g>
<g transform="translate(490.5,149)"><circle cx="-3" cy="0" r="3" style="fill:var(--leaf)"/><path d="M0,-1.5 H8 M0,1.5 H8" style="stroke:var(--leaf);stroke-width:1.2"/></g>
<g transform="translate(492.5,160)"><path d="M-7,0 q3.5,-5 7,0 t7,0" style="fill:none;stroke:var(--krebs);stroke-width:2"/></g>
<g transform="translate(492.5,171)" style="opacity:.3"><polygon points="0,-5 1.5,-1.5 5,0 1.5,1.5 0,5 -1.5,1.5 -5,0 -1.5,-1.5" style="fill:var(--link)"/></g>
<g transform="translate(492.5,182)"><path d="M-7,-2.5 H7 M-7,2.5 H7" style="stroke:var(--etc);stroke-width:1.6"/><path d="M-4,-2.5 V2.5 M0,-2.5 V2.5 M4,-2.5 V2.5" style="stroke:var(--etc);stroke-width:1"/></g>
<g transform="translate(625,138)"><polygon points="5,0 2.5,4.3 -2.5,4.3 -5,0 -2.5,-4.3 2.5,-4.3" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.2"/></g>
<g transform="translate(623,149)"><circle cx="-3" cy="0" r="3" style="fill:var(--leaf)"/><path d="M0,-1.5 H8 M0,1.5 H8" style="stroke:var(--leaf);stroke-width:1.2"/></g>
<g transform="translate(625,160)"><path d="M-7,0 q3.5,-5 7,0 t7,0" style="fill:none;stroke:var(--krebs);stroke-width:2"/></g>
<g transform="translate(625,171)"><polygon points="0,-5 1.5,-1.5 5,0 1.5,1.5 0,5 -1.5,1.5 -5,0 -1.5,-1.5" style="fill:var(--link)"/></g>
<g transform="translate(625,182)" style="opacity:.3"><path d="M-7,-2.5 H7 M-7,2.5 H7" style="stroke:var(--etc);stroke-width:1.6"/><path d="M-4,-2.5 V2.5 M0,-2.5 V2.5 M4,-2.5 V2.5" style="stroke:var(--etc);stroke-width:1"/></g>
<g style="stroke:var(--bad);stroke-width:1.8">
<path d="M89,132 l12,12 M101,132 l-12,12"/><path d="M221.5,143 l12,12 M233.5,143 l-12,12"/><path d="M354,154 l12,12 M366,154 l-12,12"/><path d="M486.5,165 l12,12 M498.5,165 l-12,12"/><path d="M619,176 l12,12 M631,176 l-12,12"/>
</g>
<g text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">
<text x="95" y="210">polysaccharides</text><text x="227.5" y="210">lipids</text><text x="360" y="210">RNA</text><text x="492.5" y="210">protein</text><text x="625" y="210">DNA</text>
</g>
<g text-anchor="middle" style="fill:var(--ink-2);font-size:11px">
<text x="95" y="225">destroyed</text><text x="227.5" y="225">destroyed</text><text x="360" y="225">destroyed (RNase)</text><text x="492.5" y="225">destroyed (protease)</text><text x="625" y="225">destroyed (DNase)</text>
</g>
</g>
<!-- step 3: add live R cells -->
<g data-from="3">
<g style="stroke:var(--ink-2);stroke-width:1.8">
<line x1="95" y1="234" x2="95" y2="258" marker-end="url(#g301d-ah)"/><line x1="227.5" y1="234" x2="227.5" y2="258" marker-end="url(#g301d-ah)"/><line x1="360" y1="234" x2="360" y2="258" marker-end="url(#g301d-ah)"/><line x1="492.5" y1="234" x2="492.5" y2="258" marker-end="url(#g301d-ah)"/><line x1="625" y1="234" x2="625" y2="258" marker-end="url(#g301d-ah)"/>
</g>
<g style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5">
<ellipse cx="111" cy="246" rx="6" ry="3.5"/><ellipse cx="243.5" cy="246" rx="6" ry="3.5"/><ellipse cx="376" cy="246" rx="6" ry="3.5"/><ellipse cx="508.5" cy="246" rx="6" ry="3.5"/><ellipse cx="641" cy="246" rx="6" ry="3.5"/>
</g>
<text x="16" y="243" style="fill:var(--ink-2);font-size:11px">add live</text>
<text x="16" y="257" style="fill:var(--ink-2);font-size:11px">R cells</text>
</g>
<!-- step 4: results -->
<g data-from="4">
<g style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.5">
<circle cx="95" cy="290" r="24"/><circle cx="227.5" cy="290" r="24"/><circle cx="360" cy="290" r="24"/><circle cx="492.5" cy="290" r="24"/><circle cx="625" cy="290" r="24"/>
</g>
<g style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5">
<ellipse cx="84" cy="283" rx="6" ry="3.5"/><ellipse cx="104" cy="299" rx="6" ry="3.5"/>
<ellipse cx="216.5" cy="283" rx="6" ry="3.5"/><ellipse cx="236.5" cy="299" rx="6" ry="3.5"/>
<ellipse cx="349" cy="283" rx="6" ry="3.5"/><ellipse cx="369" cy="299" rx="6" ry="3.5"/>
<ellipse cx="481.5" cy="283" rx="6" ry="3.5"/><ellipse cx="501.5" cy="299" rx="6" ry="3.5"/>
<ellipse cx="613" cy="282" rx="6" ry="3.5"/><ellipse cx="636" cy="286" rx="6" ry="3.5"/><ellipse cx="618" cy="299" rx="6" ry="3.5"/><ellipse cx="633" cy="301" rx="6" ry="3.5"/>
</g>
<g style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1">
<ellipse cx="104" cy="282" rx="9" ry="6.5"/><ellipse cx="85" cy="300" rx="9" ry="6.5"/>
<ellipse cx="236.5" cy="282" rx="9" ry="6.5"/><ellipse cx="217.5" cy="300" rx="9" ry="6.5"/>
<ellipse cx="369" cy="282" rx="9" ry="6.5"/><ellipse cx="350" cy="300" rx="9" ry="6.5"/>
<ellipse cx="501.5" cy="282" rx="9" ry="6.5"/><ellipse cx="482.5" cy="300" rx="9" ry="6.5"/>
</g>
<g style="fill:var(--proton)">
<ellipse cx="104" cy="282" rx="5" ry="3"/><ellipse cx="85" cy="300" rx="5" ry="3"/>
<ellipse cx="236.5" cy="282" rx="5" ry="3"/><ellipse cx="217.5" cy="300" rx="5" ry="3"/>
<ellipse cx="369" cy="282" rx="5" ry="3"/><ellipse cx="350" cy="300" rx="5" ry="3"/>
<ellipse cx="501.5" cy="282" rx="5" ry="3"/><ellipse cx="482.5" cy="300" rx="5" ry="3"/>
</g>
<g text-anchor="middle" style="font-size:12px;font-weight:700;fill:var(--ink)">
<text x="95" y="332">transformed</text><text x="227.5" y="332">transformed</text><text x="360" y="332">transformed</text><text x="492.5" y="332">transformed</text><text x="625" y="332" style="fill:var(--bad)">not transformed</text>
</g>
<g text-anchor="middle" style="font-size:11px;fill:var(--ink-2)">
<text x="95" y="347">S cells appear</text><text x="227.5" y="347">S cells appear</text><text x="360" y="347">S cells appear</text><text x="492.5" y="347">S cells appear</text><text x="625" y="347">R cells only</text>
<text x="95" y="362">(mouse dies)</text><text x="227.5" y="362">(mouse dies)</text><text x="360" y="362">(mouse dies)</text><text x="492.5" y="362">(mouse dies)</text><text x="625" y="362">(mouse lives)</text>
</g>
</g>
<!-- step 5: conclusion -->
<g data-step="5">
<rect x="562" y="116" width="126" height="256" rx="10" style="fill:none;stroke:var(--good);stroke-width:2;stroke-dasharray:6 4"/>
<text x="360" y="392" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Only DNase stopped transformation: DNA is the transforming principle</text>
</g>
</svg>
<ol class="step-captions">
<li><strong>Make the extract.</strong> S cells are heat-killed and broken open. Their extract contains all of their molecules: polysaccharides (from the capsule), lipids, RNA, protein and DNA. Untreated, this extract transforms R cells.</li>
<li><strong>Destroy one kind of molecule in each tube.</strong> The extract is divided into portions, and each portion is treated to destroy just one kind of molecule (red ×). Because enzymes are specific, RNase removes only RNA, protease only protein and DNase only DNA.</li>
<li><strong>Add live R cells.</strong> Each treated extract is mixed with living, harmless R cells.</li>
<li><strong>Check for transformation.</strong> Capsule-making S cells appear in every tube except the DNase tube. The class slide shows each mixture injected into a mouse: the first four mice die and the DNase mouse lives.</li>
<li><strong>Conclusion.</strong> Removing polysaccharides, lipids, RNA or protein did not stop transformation. Removing DNA did. So DNA, and not protein, is the transforming principle.</li>
</ol>
<figcaption>The logic of Avery, MacLeod and McCarty's experiment (1944): remove one suspect at a time. A faded icon with a red × is the molecule destroyed in that tube.</figcaption>
</figure>

<p>Transformation happened in every tube <strong>except</strong> the one treated with DNase. If protein were the transforming principle, the protease tube would have failed, and it didn't. The only treatment that stopped transformation was the one that destroyed DNA. As the slide puts it, Avery, MacLeod and McCarty <strong>proved that DNA is the transforming principle and the molecule of heredity (and not protein)</strong>.</p>
<p data-tier="likely">They backed this up with chemistry. Their purified transforming principle had the properties expected of DNA: the right ratio of nitrogen to phosphorus, the ultraviolet absorption of a nucleic acid, a very high viscosity (long molecules), and no detectable protein. Tiny amounts of it were enough to transform R cells.</p>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The slide spells the third name "McLeod." The correct spelling is <strong>Colin MacLeod</strong>. The slide also lists the names as "Avery, McCarty &amp; McLeod"; the usual order, from the 1944 paper, is <strong>Avery, MacLeod and McCarty</strong>. Either order earns the mark, but spell MacLeod correctly.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><ul><li>They treated an extract of heat-killed S cells with enzymes that destroyed one kind of molecule at a time, then added live R cells.</li><li>Only <strong>DNase</strong> (destroying DNA) stopped transformation.</li><li>Conclusion: <strong>DNA is the transforming principle</strong>, the molecule of heredity.</li></ul></div>
<p data-tier="likely">On the slide, the results are shown with mice. In the real experiments, Avery's group mixed the treated extracts with R cells in culture and then looked for the smooth, shiny colonies of S cells growing on a dish. The logic is identical: S cells appearing means transformation happened.</p>
<p data-tier="likely">Not everyone was convinced. Many biochemists still believed DNA was too simple to carry information, and some argued that a tiny trace of protein might have survived the purification and done the transforming. Others doubted that bacteria even had genes like those of plants and animals. The question was settled for most scientists only in 1952, by an experiment on viruses.</p>

<h3 data-tier="essential">Chargaff (1950): base-pairing rules</h3>
<p>While the biologists argued about whether DNA was the hereditary material, the biochemist <strong>Erwin Chargaff</strong> (an Austrian-born scientist working at Columbia University) asked a simpler chemical question: how much of each base does DNA contain? He broke DNA from many different species into its nucleotides, separated the four bases by <strong>paper chromatography</strong>, and measured how much of each was present using the ultraviolet light each base absorbs.</p>
<p>He found two patterns:</p>
<ol>
<li><strong>Within any one species, %A = %T and %G = %C.</strong> The amount of adenine always matches the amount of thymine, and the amount of guanine always matches the amount of cytosine. It follows that <strong>purines (A + G) = pyrimidines (T + C)</strong>.</li>
<li><strong>Between species, the proportions differ.</strong> Human DNA is about 60% A + T, while the DNA of the bacterium <em>E. coli</em> is about 48% A + T. Every tissue of one species has the same composition, but different species have different compositions.</li>
</ol>
<p>The first pattern became known as <span class="term">Chargaff's rules</span>. The second was just as important: if DNA were the same four nucleotides repeated in a fixed order (the tetranucleotide idea), every species would have exactly 25% of each base. Different species having different DNA meant DNA could carry species-specific information after all.</p>

<figure class="diagram">
<svg viewBox="0 0 680 330" role="img" aria-labelledby="g301e-t g301e-d">
<title id="g301e-t">Base composition of DNA from three species</title>
<desc id="g301e-d">A bar graph of the percentage of each base in the DNA of three species. Human: adenine 30.9, thymine 29.4, guanine 19.9, cytosine 19.8 percent. Sea urchin: adenine 32.8, thymine 32.1, guanine 17.7, cytosine 17.3 percent. E. coli: adenine 24.7, thymine 23.6, guanine 26.0, cytosine 25.7 percent. In every species adenine is about equal to thymine and guanine about equal to cytosine, but A plus T is 60 percent in humans, 65 percent in sea urchins and 48 percent in E. coli.</desc>
<g style="stroke:var(--ink);stroke-width:1.2">
<line x1="74" y1="209.5" x2="80" y2="209.5"/><line x1="74" y1="157" x2="80" y2="157"/><line x1="74" y1="104.5" x2="80" y2="104.5"/><line x1="74" y1="52" x2="80" y2="52"/>
</g>
<line x1="80" y1="262" x2="650" y2="262" style="stroke:var(--ink);stroke-width:1.5"/>
<line x1="80" y1="262" x2="80" y2="46" style="stroke:var(--ink);stroke-width:1.5"/>
<g text-anchor="end" style="fill:var(--ink-2);font-size:11.5px">
<text x="69" y="266">0</text><text x="69" y="213.5">10</text><text x="69" y="161">20</text><text x="69" y="108.5">30</text><text x="69" y="56">40</text>
</g>
<text transform="rotate(-90 28,157)" x="28" y="157" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">Percentage of bases (%)</text>
<!-- human: centre 175 -->
<rect x="110" y="99.8" width="28" height="162.2" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<rect x="144" y="107.6" width="28" height="154.4" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1.5"/>
<rect x="178" y="157.5" width="28" height="104.5" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<rect x="212" y="158" width="28" height="104" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
<!-- sea urchin: centre 365 -->
<rect x="300" y="89.8" width="28" height="172.2" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<rect x="334" y="93.5" width="28" height="168.5" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1.5"/>
<rect x="368" y="169.1" width="28" height="92.9" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<rect x="402" y="171.2" width="28" height="90.8" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
<!-- E. coli: centre 555 -->
<rect x="490" y="132.3" width="28" height="129.7" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<rect x="524" y="138.1" width="28" height="123.9" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1.5"/>
<rect x="558" y="125.5" width="28" height="136.5" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<rect x="592" y="127.1" width="28" height="134.9" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
<g text-anchor="middle" style="fill:var(--ink);font-size:11px">
<text x="124" y="94">30.9</text><text x="158" y="102">29.4</text><text x="192" y="152">19.9</text><text x="226" y="152.5">19.8</text>
<text x="314" y="84">32.8</text><text x="348" y="88">32.1</text><text x="382" y="163.5">17.7</text><text x="416" y="165.5">17.3</text>
<text x="504" y="127">24.7</text><text x="538" y="132.5">23.6</text><text x="572" y="120">26.0</text><text x="606" y="121.5">25.7</text>
</g>
<g text-anchor="middle" style="font-size:12px;font-weight:700">
<text x="124" y="278" style="fill:var(--leaf)">A</text><text x="158" y="278" style="fill:var(--proton)">T</text><text x="192" y="278" style="fill:var(--glyco)">G</text><text x="226" y="278" style="fill:var(--etc)">C</text>
<text x="314" y="278" style="fill:var(--leaf)">A</text><text x="348" y="278" style="fill:var(--proton)">T</text><text x="382" y="278" style="fill:var(--glyco)">G</text><text x="416" y="278" style="fill:var(--etc)">C</text>
<text x="504" y="278" style="fill:var(--leaf)">A</text><text x="538" y="278" style="fill:var(--proton)">T</text><text x="572" y="278" style="fill:var(--glyco)">G</text><text x="606" y="278" style="fill:var(--etc)">C</text>
</g>
<g text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:650">
<text x="175" y="298">Human</text><text x="365" y="298">Sea urchin</text><text x="555" y="298" style="font-style:italic">E. coli</text>
</g>
<g text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">
<text x="175" y="316">A+T 60% · G+C 40%</text><text x="365" y="316">A+T 65% · G+C 35%</text><text x="555" y="316">A+T 48% · G+C 52%</text>
</g>
</svg>
<figcaption>Chargaff-era measurements of DNA base composition (approximate). Within each species A ≈ T and G ≈ C (the small differences are measurement error), but the A + T and G + C totals change from species to species.</figcaption>
</figure>

<p>Chargaff could not explain <em>why</em> A matched T and G matched C. The explanation came three years later from Watson and Crick: in the double helix, every A is paired with a T on the other strand and every G with a C, so their amounts must be equal.</p>
<div class="callout teacher"><p class="callout-title">From the slides</p><p>Chargaff (1950) discovered "<strong>complementary base-pairing</strong>": the proportion of adenine is equal to that of thymine, and the proportion of guanine is equal to that of cytosine. The slide's picture adds that in DNA, <strong>A + G (purines) is always equal to T + C (pyrimidines)</strong>.</p></div>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>Strictly, Chargaff discovered the <strong>equal ratios</strong> (A = T, G = C). He did not know the bases were physically paired. It was Watson and Crick who realized in 1953 that his ratios meant A pairs with T and G pairs with C. The slide credits him with "complementary base-pairing" because his rules are the evidence for it; just don't say Chargaff built the double helix.</p></div>
<h4>Using Chargaff's rules: a worked example</h4>
<p>The "Crack the Code" question in the class case file: a DNA sample contains <strong>20% thymine</strong>. Find the percentage of the other bases.</p>
<ol class="steps">
<li><p class="step-head">Match the partner</p><p>A pairs with T, so A = T = <strong>20%</strong>.</p></li>
<li><p class="step-head">Subtract the pair from 100%</p><p>A + T = 40%, so G + C = 100% − 40% = 60%.</p></li>
<li><p class="step-head">Split the rest equally</p><p>G = C, so G = C = 60% ÷ 2 = <strong>30%</strong> each.</p></li>
<li><p class="step-head">Check</p><p>20 + 20 + 30 + 30 = 100%, and purines (A + G = 50%) equal pyrimidines (T + C = 50%).</p></li>
</ol>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Two traps from the case file's wrong answers. First, the bases are <strong>not</strong> all 25%: that would only be true if A + T happened to equal G + C, and in most species it doesn't. Second, purines do <strong>not</strong> pair with purines: a purine always pairs with a pyrimidine (A with T, G with C). And in the calculation, don't forget the partner: (100 − 20) ÷ 2 = 40% is wrong because it ignores the 20% adenine.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>"Apple in the Tree, Car in the Garage"</strong>: A pairs with T, C pairs with G.</p></div>

<h3 data-tier="essential">Hershey &amp; Chase (1952): blender test</h3>
<p>In 1952, <strong>Alfred Hershey</strong> and <strong>Martha Chase</strong> at the Cold Spring Harbor Laboratory in New York used a virus to settle the protein-or-DNA question. They worked with <strong>bacteriophage T2</strong> (a <span class="term">bacteriophage</span>, or phage, is a virus that infects bacteria). T2 infects the bacterium <em>E. coli</em> and is made of only two things:</p>
<ul>
<li>a <strong>protein coat</strong>: a head, a tail and tail fibres;</li>
<li><strong>DNA</strong>, packed inside the head.</li>
</ul>
<p>When a phage infects a bacterium, it lands on the cell surface and injects something into it. Within about half an hour the cell bursts, releasing a hundred or more new phages. Whatever was injected must carry the instructions for making new viruses. So the question became: <strong>does the phage inject its protein, or its DNA?</strong></p>
<p>Hershey and Chase tracked each molecule with a <strong>radioactive label</strong>. The trick was to find an element that is in one molecule but not the other:</p>
<div class="compare"><div><h4>Protein: label with sulfur-35</h4><ul><li>Proteins contain <strong>sulfur</strong> (in the amino acids cysteine and methionine).</li><li>DNA contains <strong>no sulfur</strong>.</li><li>So <sup>35</sup>S labels only the protein coat.</li></ul></div><div><h4>DNA: label with phosphorus-32</h4><ul><li>DNA contains <strong>phosphorus</strong> in every phosphate group of its backbone.</li><li>Proteins contain almost no phosphorus.</li><li>So <sup>32</sup>P labels only the DNA.</li></ul></div></div>

<figure class="diagram stepper">
<svg viewBox="0 0 760 410" role="img" aria-labelledby="g301f-t g301f-d">
<title id="g301f-t">The Hershey and Chase experiment</title>
<desc id="g301f-d">Two batches of T2 phage are prepared. In batch 1 the protein coat is labelled with radioactive sulfur-35; in batch 2 the DNA is labelled with radioactive phosphorus-32. Each batch infects E. coli: the phages attach and inject their DNA, leaving their coats outside. Blending shakes the empty coats off the cells. Centrifuging sends the bacteria to a pellet at the bottom of the tube, while the coats stay in the liquid supernatant. In batch 1 the radioactivity is in the supernatant with the coats; in batch 2 it is in the pellet, inside the bacteria. Only DNA entered the cells, so DNA is the genetic material.</desc>
<line x1="10" y1="205" x2="750" y2="205" style="stroke:var(--line);stroke-width:1.5;stroke-dasharray:5 4"/>
<g style="fill:var(--ink);font-size:13px;font-weight:700"><text x="14" y="110">Batch 1</text><text x="14" y="275">Batch 2</text></g>
<g style="fill:var(--ink-2);font-size:12px"><text x="14" y="127">³⁵S labels the</text><text x="14" y="142">protein coat</text><text x="14" y="292">³²P labels</text><text x="14" y="307">the DNA</text></g>
<rect x="14" y="392" width="12" height="10" rx="2" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1.5"/>
<text x="32" y="401" style="fill:var(--ink-2);font-size:11.5px">red = radioactive</text>
<!-- step 1: label -->
<g>
<text x="190" y="30" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">1. Label</text>
<g transform="translate(190,86)">
<polygon points="0,0 14,8 14,24 0,32 -14,24 -14,8" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:2"/>
<polyline points="-7,10 7,13 -7,17 7,21 -6,25" style="fill:none;stroke:var(--etc);stroke-width:1.8"/>
<rect x="-3" y="32" width="6" height="22" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1.5"/>
<path d="M-8,54 H8 M-6,54 L-16,66 M6,54 L16,66" style="stroke:var(--proton);stroke-width:1.8"/>
</g>
<g transform="translate(190,251)">
<polygon points="0,0 14,8 14,24 0,32 -14,24 -14,8" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.5"/>
<polyline points="-7,10 7,13 -7,17 7,21 -6,25" style="fill:none;stroke:var(--proton);stroke-width:2.4"/>
<rect x="-3" y="32" width="6" height="22" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.5"/>
<path d="M-8,54 H8 M-6,54 L-16,66 M6,54 L16,66" style="stroke:var(--ink-2);stroke-width:1.5"/>
</g>
</g>
<!-- step 2: infect -->
<g data-from="2">
<text x="330" y="30" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">2. Infect</text>
<rect x="285" y="128" width="90" height="40" rx="20" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<g transform="translate(310,84) scale(.7)">
<polygon points="0,0 14,8 14,24 0,32 -14,24 -14,8" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:2.5"/>
<rect x="-3" y="32" width="6" height="22" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:2"/>
<path d="M-8,54 H8 M-6,54 L-16,66 M6,54 L16,66" style="stroke:var(--proton);stroke-width:2.4"/>
</g>
<g transform="translate(350,84) scale(.7)">
<polygon points="0,0 14,8 14,24 0,32 -14,24 -14,8" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:2.5"/>
<rect x="-3" y="32" width="6" height="22" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:2"/>
<path d="M-8,54 H8 M-6,54 L-16,66 M6,54 L16,66" style="stroke:var(--proton);stroke-width:2.4"/>
</g>
<path d="M310,132 q8,6 0,12 t2,14 M350,132 q-8,6 0,12 t-2,14" style="fill:none;stroke:var(--etc);stroke-width:1.8"/>
<rect x="285" y="293" width="90" height="40" rx="20" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<g transform="translate(310,249) scale(.7)">
<polygon points="0,0 14,8 14,24 0,32 -14,24 -14,8" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:2"/>
<rect x="-3" y="32" width="6" height="22" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:2"/>
<path d="M-8,54 H8 M-6,54 L-16,66 M6,54 L16,66" style="stroke:var(--ink-2);stroke-width:2"/>
</g>
<g transform="translate(350,249) scale(.7)">
<polygon points="0,0 14,8 14,24 0,32 -14,24 -14,8" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:2"/>
<rect x="-3" y="32" width="6" height="22" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:2"/>
<path d="M-8,54 H8 M-6,54 L-16,66 M6,54 L16,66" style="stroke:var(--ink-2);stroke-width:2"/>
</g>
<path d="M310,297 q8,6 0,12 t2,14 M350,297 q-8,6 0,12 t-2,14" style="fill:none;stroke:var(--proton);stroke-width:2.4"/>
</g>
<!-- step 3: blend -->
<g data-from="3">
<text x="470" y="30" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">3. Blend</text>
<rect x="425" y="128" width="90" height="40" rx="20" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<path d="M445,136 q8,6 0,12 t2,14 M488,136 q-8,6 0,12 t-2,14" style="fill:none;stroke:var(--etc);stroke-width:1.8"/>
<g transform="translate(446,72) rotate(-20) scale(.6)">
<polygon points="0,0 14,8 14,24 0,32 -14,24 -14,8" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:2.8"/>
<rect x="-3" y="32" width="6" height="22" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:2.2"/>
<path d="M-8,54 H8 M-6,54 L-16,66 M6,54 L16,66" style="stroke:var(--proton);stroke-width:2.6"/>
</g>
<g transform="translate(494,74) rotate(18) scale(.6)">
<polygon points="0,0 14,8 14,24 0,32 -14,24 -14,8" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:2.8"/>
<rect x="-3" y="32" width="6" height="22" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:2.2"/>
<path d="M-8,54 H8 M-6,54 L-16,66 M6,54 L16,66" style="stroke:var(--proton);stroke-width:2.6"/>
</g>
<rect x="425" y="293" width="90" height="40" rx="20" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<path d="M445,301 q8,6 0,12 t2,14 M488,301 q-8,6 0,12 t-2,14" style="fill:none;stroke:var(--proton);stroke-width:2.4"/>
<g transform="translate(446,237) rotate(-20) scale(.6)">
<polygon points="0,0 14,8 14,24 0,32 -14,24 -14,8" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:2.2"/>
<rect x="-3" y="32" width="6" height="22" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M-8,54 H8 M-6,54 L-16,66 M6,54 L16,66" style="stroke:var(--ink-2);stroke-width:2.2"/>
</g>
<g transform="translate(494,239) rotate(18) scale(.6)">
<polygon points="0,0 14,8 14,24 0,32 -14,24 -14,8" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:2.2"/>
<rect x="-3" y="32" width="6" height="22" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:2.2"/>
<path d="M-8,54 H8 M-6,54 L-16,66 M6,54 L16,66" style="stroke:var(--ink-2);stroke-width:2.2"/>
</g>
</g>
<!-- step 4: spin -->
<g data-from="4">
<text x="610" y="30" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">4. Spin</text>
<path d="M595,80 V160 Q595,179 610,179 Q625,179 625,160 V80 Z" style="fill:var(--proton-soft)"/>
<ellipse cx="610" cy="171" rx="11" ry="6" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<path d="M594,68 V160 Q594,180 610,180 Q626,180 626,160 V68" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<path d="M595,245 V325 Q595,344 610,344 Q625,344 625,325 V245 Z" style="fill:var(--surface-2)"/>
<ellipse cx="610" cy="336" rx="11" ry="6" style="fill:var(--proton);stroke:var(--proton);stroke-width:1.5"/>
<path d="M594,233 V325 Q594,345 610,345 Q626,345 626,325 V233" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<g style="fill:var(--ink);font-size:12px;font-weight:650"><text x="636" y="100">supernatant</text><text x="636" y="168">pellet</text><text x="636" y="265">supernatant</text><text x="636" y="333">pellet</text></g>
<g style="fill:var(--ink-2);font-size:11px"><text x="636" y="114">(phage coats)</text><text x="636" y="182">(bacteria)</text><text x="636" y="279">(phage coats)</text><text x="636" y="347">(bacteria)</text></g>
</g>
<!-- step 5: measure -->
<g data-from="5">
<g style="fill:var(--proton);font-size:12px;font-weight:700"><text x="636" y="134">³⁵S is here</text><text x="636" y="316">³²P is here</text></g>
<text x="380" y="378" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Only ³²P (DNA) entered the bacteria: DNA, not protein, is the genetic material</text>
</g>
</svg>
<ol class="step-captions">
<li><strong>Label the phages.</strong> Batch 1 is grown with radioactive sulfur (<sup>35</sup>S), which ends up only in the protein coat. Batch 2 is grown with radioactive phosphorus (<sup>32</sup>P), which ends up only in the DNA.</li>
<li><strong>Infect <em>E. coli</em>.</strong> The phages attach to the bacteria by their tail fibres and inject their genetic material. The coats stay outside.</li>
<li><strong>Blend.</strong> A kitchen blender shakes the empty phage coats off the outside of the bacteria.</li>
<li><strong>Spin.</strong> In a centrifuge the heavy bacteria sink to the bottom as a <strong>pellet</strong>; the much lighter phage coats stay in the liquid above, the <strong>supernatant</strong>.</li>
<li><strong>Measure the radioactivity.</strong> <sup>35</sup>S (protein) is found mainly in the supernatant, outside the cells. <sup>32</sup>P (DNA) is found mainly in the pellet, inside the bacteria. Only the DNA went in, so DNA directs the making of new phages.</li>
</ol>
<figcaption>The Hershey–Chase experiment (1952). Batch 1 labels the protein coat; batch 2 labels the DNA. Red marks whatever is radioactive.</figcaption>
</figure>

<p>Because only the phage DNA entered the bacteria, and the bacteria then went on to produce complete new phages (protein coats and all), the DNA must carry the instructions for making the whole virus. As the slide puts it: <strong>only the viral DNA (rich in phosphorus), not the protein (rich in sulfur), enters the host to direct the synthesis of new viruses.</strong> This <strong>supported Avery's experiment</strong> that DNA is the genetic material, not protein.</p>
<p data-tier="likely">A further result sealed it. When the infected bacteria burst, some of the new phages contained <sup>32</sup>P from the parent DNA, but none contained <sup>35</sup>S. The parent's DNA was passed on to the offspring; the parent's protein was not.</p>
<div class="callout teacher"><p class="callout-title">From the slides</p><p>The slides' cartoon summarizes the logic in three steps (infection, blending, centrifugation): radioactive sulfur ends up in the <strong>supernatant</strong>, radioactive phosphorus in the <strong>pellet</strong>. Its banner "Proteins are the molecule of heredity" has "proteins" crossed out and replaced with <strong>"nucleic acids."</strong></p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>S</strong>ulfur stays with the <strong>S</strong>hell (the protein coat) and the <strong>S</strong>upernatant. <strong>P</strong>hosphorus is in the <strong>P</strong>hosphate backbone of DNA and ends up in the <strong>P</strong>ellet.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Don't swap the isotopes. Sulfur labels <strong>protein</strong> and phosphorus labels <strong>DNA</strong>. Nitrogen would be useless as a label here, because both protein (amino groups) and DNA (bases) contain nitrogen. That's why "nitrogen" is the wrong answer in the case-file question.</p></div>
<p data-tier="likely">Why was this experiment so convincing, when Avery's had not been? It used a different organism (a virus), a different method (radioactive tracing instead of enzymes) and a clean physical separation of the two molecules. When two completely independent approaches give the same answer, scientists trust it. The results were not perfectly clean (a little <sup>35</sup>S stayed with the cells, and some <sup>32</sup>P stayed outside), but the difference was large and clear.</p>

<h3 data-tier="essential">Franklin (1953): X-ray diffraction</h3>
<p>By 1952 most scientists accepted that genes are made of DNA. The next question was its <strong>structure</strong>: what does a DNA molecule look like, and how could that shape store and copy information? The key experimental evidence came from <strong>Rosalind Franklin</strong>, a physical chemist at King's College London, who used <span class="term">X-ray diffraction</span>.</p>
<p>In X-ray diffraction, a narrow beam of X-rays is passed through a sample of a molecule (here, thin fibres of purified DNA). The atoms scatter the X-rays, and the scattered rays make a pattern of spots on photographic film. A repeating structure gives a regular pattern, and the spacing and arrangement of the spots can be used to calculate the shape and dimensions of the molecule.</p>
<p>Franklin made two big discoveries:</p>
<ul>
<li><strong>DNA has two forms</strong>, which she called the <strong>A form</strong> (dry, crystalline) and the <strong>B form</strong> (wet, the form found in cells). The class case file calls them the "wet and dry" forms. Earlier X-ray pictures had been blurry because they mixed the two.</li>
<li>The <strong>sugar–phosphate backbone lies on the outside</strong> of the molecule, with the bases on the inside. Most models up to then, including an early attempt by Watson and Crick, had put the backbone in the middle.</li>
</ul>
<p>Her clearest image of the B form, known as <strong>Photo 51</strong> (taken in May 1952 by her PhD student Raymond Gosling), shows a striking X-shaped pattern.</p>

<figure class="diagram">
<svg viewBox="0 0 680 320" role="img" aria-labelledby="g301g-t g301g-d">
<title id="g301g-t">What Photo 51 revealed about DNA</title>
<desc id="g301g-d">A simplified sketch of the X-ray diffraction pattern of B-form DNA. Short dark marks form a large X across the centre, and two strong arcs sit at the very top and bottom. The arcs show that the bases are stacked 0.34 nanometres apart. The X shape shows that DNA is a helix. The spacing between the rows of spots, called layer lines, shows that the helix repeats every 3.4 nanometres. The fourth layer line is missing, which shows that there are two strands offset from each other, creating grooves. From her data Franklin also found that the molecule is about 2 nanometres wide with its backbone on the outside.</desc>
<rect x="20" y="20" width="260" height="280" rx="12" style="fill:var(--surface-2);stroke:var(--line);stroke-width:1.5"/>
<g style="fill:var(--ink)">
<rect x="158" y="137" width="10" height="4" rx="2"/><rect x="132" y="137" width="10" height="4" rx="2"/><rect x="158" y="179" width="10" height="4" rx="2"/><rect x="132" y="179" width="10" height="4" rx="2"/>
<rect x="171" y="116" width="10" height="4" rx="2"/><rect x="119" y="116" width="10" height="4" rx="2"/><rect x="171" y="200" width="10" height="4" rx="2"/><rect x="119" y="200" width="10" height="4" rx="2"/>
<rect x="184" y="95" width="10" height="4" rx="2"/><rect x="106" y="95" width="10" height="4" rx="2"/><rect x="184" y="221" width="10" height="4" rx="2"/><rect x="106" y="221" width="10" height="4" rx="2"/>
<rect x="210" y="53" width="10" height="4" rx="2"/><rect x="80" y="53" width="10" height="4" rx="2"/><rect x="210" y="263" width="10" height="4" rx="2"/><rect x="80" y="263" width="10" height="4" rx="2"/>
</g>
<circle cx="150" cy="160" r="5" style="fill:var(--ink-2)"/>
<path d="M118,40 Q150,30 182,40" style="fill:none;stroke:var(--ink);stroke-width:5;stroke-linecap:round"/>
<path d="M118,280 Q150,290 182,280" style="fill:none;stroke:var(--ink);stroke-width:5;stroke-linecap:round"/>
<circle cx="202" cy="244" r="8" style="fill:none;stroke:var(--proton);stroke-width:1.5;stroke-dasharray:3 2"/>
<path d="M232,181 H238 V202 H232" style="fill:none;stroke:var(--ink-2);stroke-width:1.2"/>
<g style="stroke:var(--ink-2);stroke-width:1">
<line x1="186" y1="40" x2="320" y2="52"/>
<line x1="197" y1="97" x2="320" y2="114"/>
<line x1="240" y1="191" x2="320" y2="182"/>
<line x1="211" y1="245" x2="320" y2="248"/>
</g>
<g style="fill:var(--ink);font-size:13px;font-weight:700">
<text x="326" y="50">Strong arcs at top and bottom</text>
<text x="326" y="112">X-shaped cross of spots</text>
<text x="326" y="180">Spacing between layer lines</text>
<text x="326" y="246">Missing 4th layer line</text>
</g>
<g style="fill:var(--ink-2);font-size:12.5px">
<text x="326" y="67">→ bases stacked 0.34 nm apart</text>
<text x="326" y="129">→ DNA is a helix</text>
<text x="326" y="197">→ the helix repeats every 3.4 nm</text>
<text x="326" y="263">→ two strands, offset (grooves)</text>
</g>
<text x="326" y="296" style="fill:var(--ink);font-size:12.5px">Also from her data: about 2 nm wide, backbone outside.</text>
</svg>
<figcaption>A simplified sketch of Photo 51 (B-form DNA), not the real photograph. Each feature of the pattern points to a feature of the molecule. The missing fourth layer line is extra detail.</figcaption>
</figure>

<div class="callout teacher"><p class="callout-title">From the slides</p><p>Franklin (1953): "Using <strong>X-ray diffraction</strong>, determined that the <strong>sugar-phosphate backbone</strong> lies on the <strong>outside</strong> of the molecule, not the inside as was previously thought." The slide shows her portrait beside Photo 51.</p></div>
<p data-tier="likely">How did she know the backbone was outside? DNA fibres take up a lot of water, and the phosphate groups are the most water-loving (hydrophilic) parts of the molecule. Putting them on the outside, in contact with water, while the flat, water-avoiding bases stack inside, fit both her X-ray measurements and the water uptake.</p>
<p data-tier="likely">Franklin worked in the same department as <strong>Maurice Wilkins</strong>, who had started the DNA X-ray work at King's College. The two did not get along, and Wilkins and Franklin ran separate projects. That tension mattered for what happened next.</p>

<h3 data-tier="essential">Watson &amp; Crick (1953): the model</h3>
<p>At the University of Cambridge, the American biologist <strong>James Watson</strong> and the British physicist <strong>Francis Crick</strong> took a different approach. They did no experiments on DNA themselves. Instead, they <strong>built physical models</strong> out of metal plates and rods, trying to find a structure that fitted every piece of evidence collected by others:</p>
<ul>
<li><strong>Chargaff's rules</strong>: A = T and G = C.</li>
<li><strong>Franklin's X-ray data</strong>: a helix about 2 nm wide, repeating every 3.4 nm, with bases 0.34 nm apart and the backbone on the outside.</li>
<li>Known chemistry: the shapes of the four bases and how nucleotides join.</li>
</ul>
<p>In early 1953, Wilkins showed Watson Photo 51, without Franklin's knowledge, and Crick saw a research report summarizing her measurements. Within weeks, Watson and Crick had their model, published as a one-page paper in the journal <em>Nature</em> in April 1953 (alongside papers by Wilkins's group and by Franklin and Gosling). Their <span class="term">double helix</span> had these features, all of which you'll study in detail in <a href="#/lesson/3.02">lesson 3.02</a>:</p>
<ul>
<li><strong>Two strands</strong> wound around each other into a right-handed helix.</li>
<li><strong>Sugar–phosphate backbones on the outside</strong>, bases on the inside.</li>
<li>The strands are <strong>antiparallel</strong>: they run in opposite directions.</li>
<li>Bases pair by hydrogen bonds: <strong>A with T and G with C</strong>, always a purine with a pyrimidine, so the helix has the same 2 nm width all the way along.</li>
</ul>
<p>The model explained Chargaff's rules at once: A = T because every A is paired with a T. It also showed how DNA could <strong>store information</strong> (any sequence of bases is allowed along a strand) and how it could <strong>copy itself</strong>. Their paper ends with a famous understatement: "It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material." Separate the two strands, and each one can serve as a template for building its partner.</p>
<div class="callout teacher"><p class="callout-title">From the slides</p><p>Watson and Crick (1953) "built the first model of DNA and discovered how the two strands form a double helix." The slide's photo shows the two of them with their metal model.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Watson and Crick did not discover DNA (Miescher did), did not prove that it is the genetic material (Avery and Hershey–Chase did), and did not take the X-ray pictures (Franklin and Gosling did). Their contribution was to <strong>put the evidence together into the correct model</strong>.</p></div>

<h3 data-tier="essential">Meselson &amp; Stahl (1958)</h3>
<p>Watson and Crick's model suggested how DNA might copy itself, but nobody had shown it. In 1958, <strong>Matthew Meselson</strong> and <strong>Franklin Stahl</strong> at the California Institute of Technology tested it. There were three possible ways a double helix could be copied:</p>
<ul>
<li><span class="term">Conservative replication</span>: the original double helix stays intact, and a completely new double helix is built alongside it. One molecule is all old, the other all new.</li>
<li><span class="term">Semiconservative replication</span>: the two strands separate, and each one acts as a template for a new partner strand. Every new molecule is <strong>half old and half new</strong>. This is what Watson and Crick predicted.</li>
<li><span class="term">Dispersive replication</span>: both strands of every new molecule are a patchwork of old and new pieces.</li>
</ul>

<figure class="diagram">
<svg viewBox="0 0 760 330" role="img" aria-labelledby="g301h-t g301h-d">
<title id="g301h-t">Three hypotheses for DNA replication</title>
<desc id="g301h-d">Three columns show what each hypothesis predicts for one parent molecule over two rounds of replication. Old parent strands are grey and new strands are blue. Conservative: after one round there is one all-old molecule and one all-new molecule; after two rounds, one all-old and three all-new. Semiconservative: after one round, two molecules each with one old and one new strand; after two rounds, two half-old half-new molecules and two all-new molecules. Dispersive: every strand of every molecule is a patchwork of old and new segments, with less old material each round.</desc>
<defs><marker id="g301h-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<g text-anchor="middle" style="fill:var(--ink);font-size:13.5px;font-weight:700"><text x="230" y="28">Conservative</text><text x="445" y="28">Semiconservative</text><text x="660" y="28">Dispersive</text></g>
<g style="fill:var(--ink);font-size:12.5px;font-weight:650"><text x="16" y="86">Parent DNA</text><text x="16" y="168">After one</text><text x="16" y="258">After two</text></g>
<g style="fill:var(--ink-2);font-size:12px"><text x="16" y="184">replication</text><text x="16" y="274">replications</text></g>
<g style="stroke:var(--ink-2);stroke-width:1.5">
<line x1="230" y1="112" x2="230" y2="136" marker-end="url(#g301h-ah)"/><line x1="445" y1="112" x2="445" y2="136" marker-end="url(#g301h-ah)"/><line x1="660" y1="112" x2="660" y2="136" marker-end="url(#g301h-ah)"/>
<line x1="230" y1="202" x2="230" y2="226" marker-end="url(#g301h-ah)"/><line x1="445" y1="202" x2="445" y2="226" marker-end="url(#g301h-ah)"/><line x1="660" y1="202" x2="660" y2="226" marker-end="url(#g301h-ah)"/>
</g>
<!-- parents -->
<g style="fill:var(--ink-2)">
<rect x="220.5" y="52" width="7" height="56" rx="2"/><rect x="232.5" y="52" width="7" height="56" rx="2"/>
<rect x="435.5" y="52" width="7" height="56" rx="2"/><rect x="447.5" y="52" width="7" height="56" rx="2"/>
<rect x="650.5" y="52" width="7" height="56" rx="2"/><rect x="662.5" y="52" width="7" height="56" rx="2"/>
</g>
<!-- conservative gen1: old-old at 198, new-new at 262 -->
<g style="fill:var(--ink-2)"><rect x="188.5" y="142" width="7" height="56" rx="2"/><rect x="200.5" y="142" width="7" height="56" rx="2"/></g>
<g style="fill:var(--etc)"><rect x="252.5" y="142" width="7" height="56" rx="2"/><rect x="264.5" y="142" width="7" height="56" rx="2"/></g>
<!-- conservative gen2: centres 158, 206, 254, 302 -->
<g style="fill:var(--ink-2)"><rect x="148.5" y="232" width="7" height="56" rx="2"/><rect x="160.5" y="232" width="7" height="56" rx="2"/></g>
<g style="fill:var(--etc)"><rect x="196.5" y="232" width="7" height="56" rx="2"/><rect x="208.5" y="232" width="7" height="56" rx="2"/><rect x="244.5" y="232" width="7" height="56" rx="2"/><rect x="256.5" y="232" width="7" height="56" rx="2"/><rect x="292.5" y="232" width="7" height="56" rx="2"/><rect x="304.5" y="232" width="7" height="56" rx="2"/></g>
<!-- semiconservative gen1: centres 413, 477 -->
<g style="fill:var(--ink-2)"><rect x="403.5" y="142" width="7" height="56" rx="2"/><rect x="479.5" y="142" width="7" height="56" rx="2"/></g>
<g style="fill:var(--etc)"><rect x="415.5" y="142" width="7" height="56" rx="2"/><rect x="467.5" y="142" width="7" height="56" rx="2"/></g>
<!-- semiconservative gen2: centres 373, 421, 469, 517 -->
<g style="fill:var(--ink-2)"><rect x="363.5" y="232" width="7" height="56" rx="2"/><rect x="519.5" y="232" width="7" height="56" rx="2"/></g>
<g style="fill:var(--etc)"><rect x="375.5" y="232" width="7" height="56" rx="2"/><rect x="411.5" y="232" width="7" height="56" rx="2"/><rect x="423.5" y="232" width="7" height="56" rx="2"/><rect x="459.5" y="232" width="7" height="56" rx="2"/><rect x="471.5" y="232" width="7" height="56" rx="2"/><rect x="507.5" y="232" width="7" height="56" rx="2"/></g>
<!-- dispersive gen1: centres 628, 692; strands of 4 segments (14 px) -->
<g style="fill:var(--ink-2)">
<rect x="618.5" y="142" width="7" height="14"/><rect x="618.5" y="170" width="7" height="14"/><rect x="630.5" y="156" width="7" height="14"/><rect x="630.5" y="184" width="7" height="14"/>
<rect x="682.5" y="156" width="7" height="14"/><rect x="682.5" y="184" width="7" height="14"/><rect x="694.5" y="142" width="7" height="14"/><rect x="694.5" y="170" width="7" height="14"/>
</g>
<g style="fill:var(--etc)">
<rect x="618.5" y="156" width="7" height="14"/><rect x="618.5" y="184" width="7" height="14"/><rect x="630.5" y="142" width="7" height="14"/><rect x="630.5" y="170" width="7" height="14"/>
<rect x="682.5" y="142" width="7" height="14"/><rect x="682.5" y="170" width="7" height="14"/><rect x="694.5" y="156" width="7" height="14"/><rect x="694.5" y="184" width="7" height="14"/>
</g>
<!-- dispersive gen2: centres 588, 636, 684, 732; each strand 1 old segment of 4 -->
<g style="fill:var(--etc)">
<rect x="578.5" y="232" width="7" height="56"/><rect x="590.5" y="232" width="7" height="56"/><rect x="626.5" y="232" width="7" height="56"/><rect x="638.5" y="232" width="7" height="56"/><rect x="674.5" y="232" width="7" height="56"/><rect x="686.5" y="232" width="7" height="56"/><rect x="722.5" y="232" width="7" height="56"/><rect x="734.5" y="232" width="7" height="56"/>
</g>
<g style="fill:var(--ink-2)">
<rect x="578.5" y="232" width="7" height="14"/><rect x="590.5" y="274" width="7" height="14"/><rect x="626.5" y="260" width="7" height="14"/><rect x="638.5" y="246" width="7" height="14"/><rect x="674.5" y="246" width="7" height="14"/><rect x="686.5" y="232" width="7" height="14"/><rect x="722.5" y="274" width="7" height="14"/><rect x="734.5" y="260" width="7" height="14"/>
</g>
<rect x="230" y="306" width="14" height="10" rx="2" style="fill:var(--ink-2)"/><text x="250" y="315" style="fill:var(--ink);font-size:12px">old (parent) strand</text>
<rect x="420" y="306" width="14" height="10" rx="2" style="fill:var(--etc)"/><text x="440" y="315" style="fill:var(--ink);font-size:12px">new strand</text>
</svg>
<figcaption>The three hypotheses for how DNA is copied, followed for two rounds of replication. Each pair of bars is one double helix. Only the semiconservative model keeps each old strand whole and pairs it with a new one.</figcaption>
</figure>

<p>To tell the three apart, Meselson and Stahl needed a way to tell old strands from new ones. Their solution used two <strong>isotopes of nitrogen</strong>, an element found in every DNA base:</p>
<ul>
<li><strong><sup>15</sup>N</strong> ("heavy" nitrogen): DNA made with it is slightly denser.</li>
<li><strong><sup>14</sup>N</strong> (normal, "light" nitrogen).</li>
</ul>
<p>They grew <em>E. coli</em> for many generations in a medium whose only nitrogen source was <sup>15</sup>N, so that all of its DNA was heavy. Then they moved the bacteria to a <sup>14</sup>N medium, so that every new strand made from then on would be light. They took samples after each round of cell division (each generation), extracted the DNA and separated it by <span class="term">density-gradient centrifugation</span>: DNA is spun at very high speed in a solution of caesium chloride (CsCl) for many hours. The CsCl forms a gradient, denser at the bottom of the tube, and each DNA molecule settles as a band at the level that matches its own density. Heavy DNA bands lower in the tube; light DNA bands higher; a hybrid (one heavy strand, one light strand) bands in between.</p>

<figure class="diagram stepper">
<svg viewBox="0 0 760 396" role="img" aria-labelledby="g301i-t g301i-d">
<title id="g301i-t">Meselson and Stahl's results, generation by generation</title>
<desc id="g301i-d">Four centrifuge tubes show where DNA bands after each generation. Generation 0, grown in heavy nitrogen-15, gives one heavy band low in the tube. After one generation in light nitrogen-14 there is one hybrid band in the middle, which rules out conservative replication because it predicted a heavy band and a light band. After two generations there is a hybrid band and an equal light band, which rules out dispersive replication because it predicted a single band between hybrid and light. After three generations the hybrid band is unchanged, two molecules, while the light band grows to six molecules. After four generations 2 of 16 molecules, 12.5 percent, still contain an original strand.</desc>
<g style="fill:var(--ink-2);font-size:11px"><text x="16" y="92">less dense</text><text x="16" y="198">more dense</text></g>
<g text-anchor="end" style="fill:var(--ink);font-size:11.5px">
<text x="150" y="116">light (¹⁴N/¹⁴N)</text><text x="150" y="144">hybrid (¹⁵N/¹⁴N)</text><text x="150" y="172">heavy (¹⁵N/¹⁵N)</text>
</g>
<g style="stroke:var(--line);stroke-width:1;stroke-dasharray:4 4"><line x1="156" y1="112" x2="700" y2="112"/><line x1="156" y1="140" x2="700" y2="140"/><line x1="156" y1="168" x2="700" y2="168"/></g>
<rect x="16" y="300" width="728" height="88" rx="10" style="fill:none;stroke:var(--line);stroke-width:1.5"/>
<!-- tube template x = 230, 365, 500, 635 -->
<g>
<text x="230" y="36" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Generation 0</text>
<text x="230" y="52" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">grown in ¹⁵N</text>
<path d="M212,66 V180 Q212,200 230,200 Q248,200 248,180 V66" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.5"/>
<rect x="215" y="164.5" width="30" height="7" rx="2" style="fill:var(--ink-2)"/>
<g style="fill:var(--ink-2)"><rect x="225" y="222" width="4" height="40" rx="1"/><rect x="231" y="222" width="4" height="40" rx="1"/></g>
<text x="230" y="284" text-anchor="middle" style="fill:var(--ink);font-size:11.5px">1 heavy</text>
</g>
<g data-from="2">
<text x="365" y="36" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Generation 1</text>
<text x="365" y="52" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">1 copy in ¹⁴N</text>
<path d="M347,66 V180 Q347,200 365,200 Q383,200 383,180 V66" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.5"/>
<rect x="350" y="136.5" width="30" height="7" rx="2" style="fill:var(--link)"/>
<g style="fill:var(--ink-2)"><rect x="351" y="222" width="4" height="40" rx="1"/><rect x="375" y="222" width="4" height="40" rx="1"/></g><g style="fill:var(--etc)"><rect x="357" y="222" width="4" height="40" rx="1"/><rect x="369" y="222" width="4" height="40" rx="1"/></g>
<text x="365" y="284" text-anchor="middle" style="fill:var(--ink);font-size:11.5px">2 hybrid</text>
</g>
<g data-from="3">
<text x="500" y="36" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Generation 2</text>
<text x="500" y="52" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">2 copies in ¹⁴N</text>
<path d="M482,66 V180 Q482,200 500,200 Q518,200 518,180 V66" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.5"/>
<rect x="485" y="137" width="30" height="6" rx="2" style="fill:var(--link)"/>
<rect x="485" y="109" width="30" height="6" rx="2" style="fill:var(--etc)"/>
<g style="fill:var(--ink-2)"><rect x="468" y="222" width="4" height="40" rx="1"/><rect x="492" y="222" width="4" height="40" rx="1"/></g><g style="fill:var(--etc)"><rect x="474" y="222" width="4" height="40" rx="1"/><rect x="486" y="222" width="4" height="40" rx="1"/><rect x="504" y="222" width="4" height="40" rx="1"/><rect x="510" y="222" width="4" height="40" rx="1"/><rect x="522" y="222" width="4" height="40" rx="1"/><rect x="528" y="222" width="4" height="40" rx="1"/></g>
<text x="500" y="284" text-anchor="middle" style="fill:var(--ink);font-size:11.5px">2 hybrid, 2 light</text>
</g>
<g data-from="4">
<text x="635" y="36" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Generation 3</text>
<text x="635" y="52" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">3 copies in ¹⁴N</text>
<path d="M617,66 V180 Q617,200 635,200 Q653,200 653,180 V66" style="fill:var(--surface);stroke:var(--ink-2);stroke-width:1.5"/>
<rect x="620" y="138" width="30" height="4" rx="2" style="fill:var(--link)"/>
<rect x="620" y="107.5" width="30" height="9" rx="2" style="fill:var(--etc)"/>
<g style="fill:var(--ink-2)"><rect x="567" y="222" width="4" height="40" rx="1"/><rect x="591" y="222" width="4" height="40" rx="1"/></g><g style="fill:var(--etc)"><rect x="573" y="222" width="4" height="40" rx="1"/><rect x="585" y="222" width="4" height="40" rx="1"/><rect x="603" y="222" width="4" height="40" rx="1"/><rect x="609" y="222" width="4" height="40" rx="1"/><rect x="621" y="222" width="4" height="40" rx="1"/><rect x="627" y="222" width="4" height="40" rx="1"/><rect x="639" y="222" width="4" height="40" rx="1"/><rect x="645" y="222" width="4" height="40" rx="1"/><rect x="657" y="222" width="4" height="40" rx="1"/><rect x="663" y="222" width="4" height="40" rx="1"/><rect x="675" y="222" width="4" height="40" rx="1"/><rect x="681" y="222" width="4" height="40" rx="1"/><rect x="693" y="222" width="4" height="40" rx="1"/><rect x="699" y="222" width="4" height="40" rx="1"/></g>
<text x="635" y="284" text-anchor="middle" style="fill:var(--ink);font-size:11.5px">2 hybrid, 6 light</text>
</g>
<!-- explanation box -->
<g data-step="1" style="fill:var(--ink);font-size:13px">
<text x="32" y="328" style="font-weight:700">Start: all DNA is heavy.</text>
<text x="32" y="350"><tspan style="font-style:italic">E. coli</tspan> grown for many generations on ¹⁵N has only heavy (¹⁵N/¹⁵N) DNA: one band low in the tube.</text>
<text x="32" y="372">Then the cells are moved to ¹⁴N, so every new strand from now on is light.</text>
</g>
<g data-step="2" style="fill:var(--ink);font-size:13px">
<text x="32" y="328" style="font-weight:700">After 1 generation: one band, halfway between heavy and light (hybrid).</text>
<text x="32" y="350">Conservative predicted two bands (one heavy, one light).  <tspan style="fill:var(--bad);font-weight:700">✗ Conservative is ruled out.</tspan></text>
<text x="32" y="372">Semiconservative and dispersive both predicted one hybrid band, so both are still possible.</text>
</g>
<g data-step="3" style="fill:var(--ink);font-size:13px">
<text x="32" y="328" style="font-weight:700">After 2 generations: a hybrid band and a light band, equal in size.</text>
<text x="32" y="350">Dispersive predicted one band between hybrid and light.  <tspan style="fill:var(--bad);font-weight:700">✗ Dispersive is ruled out.</tspan></text>
<text x="32" y="372">Only semiconservative fits: <tspan style="font-weight:700">each new molecule is half old and half new.</tspan></text>
</g>
<g data-step="4" style="fill:var(--ink);font-size:13px">
<text x="32" y="328" style="font-weight:700">After 3 generations: the hybrid band stays the same; the light band grows.</text>
<text x="32" y="350">There are still only 2 hybrid molecules (the 2 original strands, each paired with a new one).</text>
<text x="32" y="372">The other 6 of the 8 molecules are all light. The original strands are never broken up or lost.</text>
</g>
<g data-step="5" style="fill:var(--ink);font-size:13px">
<text x="32" y="328" style="font-weight:700">After 4 generations: 16 molecules, still only 2 hybrid.</text>
<text x="32" y="350">2 ÷ 16 = <tspan style="font-weight:700">12.5%</tspan> of the double helices contain an original (¹⁵N) strand.</text>
<text x="32" y="372">Only 2 of the 32 single strands are original: 2 ÷ 32 = 6.25% of the strands.</text>
</g>
</svg>
<ol class="step-captions">
<li><strong>Generation 0: all heavy.</strong> After many generations on <sup>15</sup>N, all of the bacteria's DNA is heavy and forms a single band low in the tube. The cells are then moved to <sup>14</sup>N.</li>
<li><strong>Generation 1: one hybrid band.</strong> All the DNA has an intermediate density. Conservative replication would have kept one all-heavy molecule and made one all-light one, giving two bands. It didn't happen, so conservative replication is ruled out.</li>
<li><strong>Generation 2: hybrid and light bands.</strong> Half the molecules are hybrid and half are light. Dispersive replication would have given one band that slowly moves up, never a separate light band, so it is ruled out. Semiconservative replication fits perfectly.</li>
<li><strong>Generation 3: the light band grows.</strong> The two original strands are still intact, each in a hybrid molecule. Every other molecule is all light, so the hybrid band stays the same while the light band gets bigger.</li>
<li><strong>Generation 4: 12.5%.</strong> There are 2<sup>4</sup> = 16 molecules, and 2 of them contain an original strand: 2 ÷ 16 = 12.5%.</li>
</ol>
<figcaption>Meselson and Stahl's density bands (1958). Heavy band grey, hybrid teal, light blue; band thickness shows the amount of DNA. Below each tube, the molecules that make up the bands (grey = original <sup>15</sup>N strand, blue = new <sup>14</sup>N strand).</figcaption>
</figure>

<p>Every result matched the semiconservative prediction and contradicted the other two. As the slide puts it, Meselson and Stahl <strong>discovered that DNA replication is semi-conservative: half of the double helix is old and half is new.</strong> Each parent strand acts as a template for a new complementary strand, exactly as Watson and Crick's base-pairing suggested. You'll see the enzymes that do this in <a href="#/lesson/3.03">lesson 3.03</a>.</p>
<div class="callout key"><p class="callout-title">On the test</p><ul><li>Know the three hypotheses and be able to draw what each predicts.</li><li>Generation 1 (one hybrid band) rules out <strong>conservative</strong>. Generation 2 (hybrid + light) rules out <strong>dispersive</strong>.</li><li>After <em>n</em> generations there are 2<sup><em>n</em></sup> molecules, and always exactly <strong>2</strong> of them contain an original strand. After 4 generations: 2 of 16 = <strong>12.5%</strong>.</li></ul></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Read percentage questions carefully. "What percentage of the DNA <strong>molecules</strong> (double helices) contain an original strand?" After 4 generations: 2 of 16 = 12.5%. "What percentage of the <strong>strands</strong> are original?" 2 of 32 = 6.25%. Also remember that semiconservative replication never produces a band at the heavy position again after generation 0.</p></div>
<p data-tier="extra">This experiment is often called "the most beautiful experiment in biology," because a single, simple measurement (the position of a band in a tube) cleanly separated three competing hypotheses.</p>

<h3 data-tier="essential">How each experiment ruled something out</h3>
<p>Each experiment answered one question by eliminating alternatives. Learn the table row by row: on a test you may be given the method and asked for the scientist, or given the scientist and asked for the conclusion.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Scientist(s), year</th><th>Organism or material</th><th>Method</th><th>Key result</th><th>Conclusion (and what it ruled out)</th></tr></thead>
<tbody>
<tr><td><strong>Miescher</strong>, 1869</td><td>White blood cells from pus on bandages</td><td>Isolated nuclei, removed protein with pepsin</td><td>A P- and N-rich, acidic substance that is not protein</td><td>Discovered "nuclein" (DNA plus its proteins) in the nucleus</td></tr>
<tr><td><strong>Griffith</strong>, 1928</td><td><em>Streptococcus pneumoniae</em> (S and R strains), mice</td><td>Injected 4 combinations into mice</td><td>Heat-killed S + live R killed the mouse; live S recovered</td><td>Transformation: a chemical from dead cells can change living cells' heredity (identity unknown)</td></tr>
<tr><td><strong>Hämmerling</strong>, 1934</td><td><em>Acetabularia</em> (single-celled alga)</td><td>Cut off cap or foot; grafted two species</td><td>Only pieces with the foot regrow; cap matches the nucleus donor</td><td>Hereditary information is in the nucleus (not the cytoplasm of the stalk or cap)</td></tr>
<tr><td><strong>Avery, MacLeod &amp; McCarty</strong>, 1944</td><td><em>S. pneumoniae</em> extract</td><td>Destroyed one molecule at a time with specific enzymes</td><td>Only DNase stopped transformation</td><td>DNA is the transforming principle (rules out protein, RNA, lipids, polysaccharides)</td></tr>
<tr><td><strong>Chargaff</strong>, 1950</td><td>DNA from many species</td><td>Paper chromatography of the bases</td><td>%A = %T, %G = %C; ratios vary between species</td><td>Base-pairing rules; DNA varies between species (rules out the "boring repeat" idea)</td></tr>
<tr><td><strong>Hershey &amp; Chase</strong>, 1952</td><td>T2 bacteriophage and <em>E. coli</em></td><td><sup>35</sup>S (protein) and <sup>32</sup>P (DNA) labels; blend; centrifuge</td><td><sup>32</sup>P in the pellet (inside cells); <sup>35</sup>S in the supernatant</td><td>DNA, not protein, enters the cell and is the genetic material</td></tr>
<tr><td><strong>Franklin</strong>, 1953 (with Gosling, Wilkins)</td><td>Purified DNA fibres</td><td>X-ray diffraction (Photo 51)</td><td>X-shaped pattern; A and B forms; regular spacings</td><td>DNA is a helix, 2 nm wide, backbone outside (rules out backbone-inside models)</td></tr>
<tr><td><strong>Watson &amp; Crick</strong>, 1953</td><td>Others' data</td><td>Model building</td><td>A structure that fits all the evidence</td><td>Double helix: antiparallel strands, A–T and G–C pairs, backbone outside</td></tr>
<tr><td><strong>Meselson &amp; Stahl</strong>, 1958</td><td><em>E. coli</em></td><td><sup>15</sup>N then <sup>14</sup>N; CsCl density-gradient centrifugation</td><td>Gen 1: one hybrid band; gen 2: hybrid + light</td><td>Replication is semiconservative (rules out conservative, then dispersive)</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Put the discoveries in order</h3>
<p>Use the arrows to put the discoveries in the order they happened, then check your answer.</p>
<div class="order-task"><p class="order-q">Put these discoveries in chronological order.</p><ol>
<li>Miescher isolates "nuclein" from the nuclei of white blood cells</li>
<li>Griffith discovers transformation in pneumonia bacteria</li>
<li>Hämmerling shows that the nucleus in the foot of <em>Acetabularia</em> directs regrowth</li>
<li>Avery, MacLeod and McCarty show that only DNase stops transformation</li>
<li>Chargaff finds that A = T and G = C</li>
<li>Hershey and Chase show that only phage DNA enters the bacterium</li>
<li>Franklin's X-ray images and Watson and Crick's double-helix model</li>
<li>Meselson and Stahl show that replication is semiconservative</li>
</ol></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Group the dates: <strong>1869</strong> stands alone (the 1800s). Then <strong>1928, 1934, 1944</strong> (every few years before and during the Second World War) answer "what carries heredity?" Then the <strong>1950s</strong> rush: 1950, 1952, 1953, 1953 and finally 1958.</p></div>

<h3 data-tier="likely">Thinking like these scientists</h3>
<p>Beyond the facts, these experiments are models of good experimental design, and test questions often ask you to explain the design.</p>
<ul>
<li><strong>Controls.</strong> Griffith's first three injections are controls: they show that neither ingredient kills on its own, which is what makes injection 4 meaningful. In Avery's experiment, the untreated extract is the positive control (it transforms) and the DNase tube shows the effect of removing just one variable.</li>
<li><strong>One variable at a time.</strong> Avery's group changed only which molecule was destroyed. Hämmerling changed only which part of the cell was removed or which species supplied the foot.</li>
<li><strong>Specific tools.</strong> Enzymes (Avery) and radioactive isotopes (Hershey and Chase) each affect or track one kind of molecule, so the result points to one molecule and no other.</li>
<li><strong>Predictions that can fail.</strong> Meselson and Stahl wrote down what each hypothesis predicted <em>before</em> looking at the bands. A hypothesis is useful only if some result could prove it wrong.</li>
<li><strong>Independent confirmation.</strong> Avery's conclusion was accepted only after Hershey and Chase reached the same answer with a different organism and method.</li>
</ul>
<p>You can use the same reasoning on new scenarios. For example, if a question asks what Hershey and Chase would have seen if protein were the genetic material, the answer is the reverse of their real result: <sup>35</sup>S in the pellet (inside the cells) and <sup>32</sup>P left in the supernatant.</p>

<h3 data-tier="extra">Credit and controversy</h3>
<p>The 1962 Nobel Prize in Physiology or Medicine went to Watson, Crick and Wilkins for the structure of DNA. Rosalind Franklin was not included: she had died of ovarian cancer in 1958, at age 37, and Nobel Prizes are not awarded after death. Her role was played down for years, partly because Watson's popular 1968 memoir <em>The Double Helix</em> portrayed her unkindly. Today she is widely recognized as having produced the key data, and the fact that Watson saw Photo 51 without her permission is often discussed as a lesson in research ethics.</p>
<p>Other contributors were also left out. Oswald Avery, whose 1944 experiment first identified DNA as the transforming principle, never received a Nobel Prize, and neither did Chargaff. Alfred Hershey shared the 1969 prize for his work on phages, but Martha Chase, his co-author, was not recognized. Science is a team effort, and the history of DNA shows how easily the credit can be distributed unfairly.</p>

<h3 data-tier="essential">Check your understanding</h3>
<p>The first nine questions are the clearance checks and the "Crack the Code" question from the class case file, with an explanation of why the wrong options fail. Try each one before opening the answer.</p>
<details class="check"><summary>1. What did Friedrich Miescher originally name the acidic substance he extracted from the nucleus: DNA, nuclein, or the transforming principle?</summary><div class="ans"><p><strong>Nuclein</strong>, because it came from the nucleus. "DNA" (deoxyribonucleic acid) is the modern name; the term "nucleic acid" was only introduced in 1889 and the full chemical name later still. "The transforming principle" was the name later given to the unknown substance behind Griffith's 1928 transformation results, 59 years after Miescher.</p></div></details>
<details class="check"><summary>2. In Griffith's experiment, what caused the mouse to die when injected with heat-killed S strain and living R strain?</summary><div class="ans"><p>The <strong>living R strain took up genetic material from the dead S strain and was transformed</strong> into the deadly, capsule-making S form.</p><p>The heat did not bring the S strain back to life: heat-killed S alone never killed a mouse. And the R strain did not mutate on its own: live R alone never killed a mouse either. Only the combination worked, which means something passed from the dead S cells to the live R cells.</p></div></details>
<details class="check"><summary>3. In Hämmerling's experiment with <em>Acetabularia</em>, which part of the alga contained the nucleus and the genetic information: the cap, the stalk or the foot?</summary><div class="ans"><p>The <strong>foot</strong> (rhizoid). When the cap was removed, the foot-and-stalk piece grew a new cap; when the foot was removed, the cap-and-stalk piece could not regrow a foot. Only pieces with the foot can regenerate, because the foot holds the nucleus.</p></div></details>
<details class="check"><summary>4. Hershey and Chase used radioactive isotopes to track viral infection. Which element was found to enter the host cell, showing that DNA was the genetic material: phosphorus, sulfur or nitrogen?</summary><div class="ans"><p><strong>Phosphorus</strong> (<sup>32</sup>P), which labels DNA through the phosphate groups of its backbone. Radioactive sulfur (<sup>35</sup>S) labels protein, and it stayed outside the cells in the supernatant. Nitrogen could not have told them anything, because both protein and DNA contain nitrogen.</p></div></details>
<details class="check"><summary>5. Avery, MacLeod and McCarty found that bacterial transformation would NOT occur if they destroyed which molecule: proteins, RNA or DNA?</summary><div class="ans"><p><strong>DNA</strong>. Destroying proteins (with protease) or RNA (with RNase) did not stop transformation, so neither of those can be the transforming principle. Only DNase, which destroys DNA, prevented it.</p></div></details>
<details class="check"><summary>6. According to Chargaff's analysis, which is true: (a) all four bases are present in exactly equal 25% amounts; (b) the amount of A equals T and the amount of G equals C; (c) purines only pair with other purines?</summary><div class="ans"><p><strong>(b)</strong>. A = T and G = C. Option (a) is wrong because the A + T and G + C totals vary between species (human DNA is about 60% A + T). Option (c) is wrong because a purine always pairs with a pyrimidine; two purines would be too wide to fit inside the helix.</p></div></details>
<details class="check"><summary>7. What type of strong bond links the phosphate group of one nucleotide to the sugar of another, forming the backbone on the outside of the helix: a glycosyl bond, a hydrogen bond or a phosphodiester bond?</summary><div class="ans"><p>A <strong>phosphodiester bond</strong>, a strong covalent bond between the 3′ carbon of one sugar and the 5′ phosphate of the next (lesson 3.02). Hydrogen bonds are the weak bonds between paired bases in the middle of the helix. A glycosyl (glycosidic) bond joins each base to its own sugar, not one nucleotide to another.</p></div></details>
<details class="check"><summary>8. Meselson and Stahl discovered that newly replicated DNA consists of one old strand and one new strand. What is the term for this: conservative, semiconservative or dispersive?</summary><div class="ans"><p><strong>Semiconservative</strong>: half of each new double helix is "conserved" from the parent. Conservative would mean one molecule all old and one all new; dispersive would mean old and new pieces scattered through both strands.</p></div></details>
<details class="check"><summary>9. Crack the code: a DNA molecule contains 20% thymine. Using Chargaff's rules, what percentage is guanine?</summary><div class="ans"><p><strong>30%</strong>. T = A = 20%, so A + T = 40%. That leaves 60% for G + C, and G = C, so G = 30% (and C = 30%). Check: 20 + 20 + 30 + 30 = 100.</p></div></details>
<details class="check" data-tier="likely"><summary>10. Predict the bands Meselson and Stahl would have seen after one and after two generations if replication were conservative.</summary><div class="ans"><p><strong>After one generation:</strong> two bands, one heavy (the original <sup>15</sup>N/<sup>15</sup>N molecule) and one light (the brand-new <sup>14</sup>N/<sup>14</sup>N molecule), with no hybrid band.</p><p><strong>After two generations:</strong> still a heavy band (the original molecule is never taken apart) plus a bigger light band (three all-new molecules for every old one). There would never be a hybrid band. The real result, a single hybrid band after one generation, ruled this out.</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
<li><strong>The question:</strong> protein or DNA? Protein was the favourite because it has <strong>20 amino acids</strong> versus DNA's <strong>4 nucleotides</strong>. A hereditary molecule must store information, copy itself, mutate occasionally and direct the cell.</li>
<li><strong>Miescher (1869):</strong> isolated <strong>"nuclein"</strong> from white blood cells in pus; rich in <strong>phosphorus and nitrogen</strong>, with an <strong>acidic</strong> portion (DNA) and a <strong>basic</strong> portion (histone proteins).</li>
<li><strong>Griffith (1928):</strong> <em>S. pneumoniae</em> in mice. Live S (capsule) kills; live R lives; heat-killed S lives; heat-killed S + live R kills, and live S is recovered. Discovered <strong>transformation</strong>.</li>
<li><strong>Hämmerling (1934):</strong> <em>Acetabularia</em> (cap, stalk, foot). Remove cap → regrows; remove foot → no regrowth; grafted cell grows the cap of the <strong>nucleus</strong> donor. Hereditary information is in the nucleus, in the <strong>foot</strong>.</li>
<li><strong>Avery, MacLeod &amp; McCarty (1944):</strong> destroyed polysaccharides, lipids, RNA, protein or DNA in S-strain extract; only <strong>DNase</strong> stopped transformation. <strong>DNA is the transforming principle</strong> (not protein). Spelling: Mac<strong>L</strong>eod.</li>
<li><strong>Chargaff (1950):</strong> chromatography of bases; <strong>%A = %T, %G = %C</strong>, purines = pyrimidines; composition varies between species. 20% T → 20% A, 30% G, 30% C.</li>
<li><strong>Hershey &amp; Chase (1952):</strong> T2 phage + <em>E. coli</em>; <strong><sup>35</sup>S labels protein</strong>, <strong><sup>32</sup>P labels DNA</strong>; infect, blend, centrifuge. <sup>32</sup>P in the <strong>pellet</strong> (inside cells), <sup>35</sup>S in the <strong>supernatant</strong>. Only DNA enters: DNA is the genetic material.</li>
<li><strong>Franklin (1953):</strong> <strong>X-ray diffraction</strong> (Photo 51); A (dry) and B (wet) forms; DNA is a <strong>helix</strong> with the <strong>sugar–phosphate backbone on the outside</strong>.</li>
<li><strong>Watson &amp; Crick (1953):</strong> built the first correct <strong>double-helix model</strong>: two antiparallel strands, backbones outside, A–T and G–C pairs inside, suggesting a copying mechanism.</li>
<li><strong>Meselson &amp; Stahl (1958):</strong> <sup>15</sup>N then <sup>14</sup>N, CsCl density-gradient centrifugation. Gen 1: one hybrid band (rules out <strong>conservative</strong>); gen 2: hybrid + light (rules out <strong>dispersive</strong>). Replication is <strong>semiconservative</strong>: half old, half new. After 4 generations, 2 of 16 = <strong>12.5%</strong> of molecules contain an original strand.</li>
</ul>
`
});

/* ===================================================================
   3.02 DNA Structure
   =================================================================== */
window.LESSONS.push({
  id: "3.02",
  title: "DNA Structure",
  stage: "g-dna",
  where: "Nucleus: chromosomes",
  summary: "DNA is a polymer of nucleotides, each made of a deoxyribose sugar, a phosphate group and one of four nitrogenous bases. Phosphodiester bonds join the nucleotides into a sugar–phosphate backbone with a 5′ end and a 3′ end, and two antiparallel strands pair A with T (2 hydrogen bonds) and G with C (3) to form a right-handed double helix 2 nm wide, with 10 base pairs in every 3.4 nm turn. Histones pack this long molecule into chromosomes, and repeating TTAGGG telomeres cap and protect the chromosome ends.",
  objectives: [
    "State the job of DNA and of the three main types of RNA (mRNA, rRNA and tRNA).",
    "Draw and label a nucleotide, numbering the carbons of deoxyribose from 1′ to 5′.",
    "Distinguish deoxyribose from ribose, and purines (A, G) from pyrimidines (C, T, U).",
    "Explain how phosphodiester bonds form the sugar–phosphate backbone and give each strand a 5′ end and a 3′ end.",
    "Explain why DNA is acidic and negatively charged.",
    "Explain complementary base pairing, including the number of hydrogen bonds in each pair and why the helix keeps a constant 2 nm width.",
    "Describe the double helix: antiparallel strands, 3.4 nm and 10 base pairs per turn, 0.34 nm between base pairs, and major and minor grooves.",
    "Explain what makes the double helix stable and why GC-rich DNA is harder to separate.",
    "Write a complementary strand with correct 5′ and 3′ labels, and use Chargaff's rules to calculate base percentages.",
    "Describe how DNA is packed into nucleosomes, chromatin and chromosomes, and explain the structure and job of telomeres and what happens as they shorten."
  ],
  html: `
<h3 data-tier="essential">Nucleic acids store hereditary information</h3>
<p>Lesson 3.01 ended with the answer to the big question: the hereditary material is <strong>DNA</strong>. This lesson looks closely at the molecule itself, because almost everything DNA does (storing information, being copied, being read) follows directly from its structure.</p>
<p>DNA and RNA together are the <span class="term">nucleic acids</span>, the polymers you met in <a href="../biochem/#/lesson/1.05">Unit 1, lesson 1.05</a>. The slide sums up their job in one sentence: nucleic acids <strong>store hereditary information that determines structural and functional characteristics</strong>. "Structural" characteristics are what an organism is built from and what it looks like (the keratin in your hair, the shape of a leaf). "Functional" characteristics are what it can do (digest lactose, make insulin, see colour). Both come down to which proteins a cell makes, and the instructions for every protein are stored in DNA.</p>
<p>The slide's picture zooms out from the molecule to the chromosome: the sugar–phosphate backbones and paired bases form a <strong>double helix</strong>, and the very long double helix is coiled and packed into a <strong>chromosome</strong>. You'll work through each of those levels in this lesson.</p>
<div class="callout key"><p class="callout-title">On the test</p><p>Nucleic acids (DNA and RNA) store and transmit <strong>hereditary information</strong>. That information determines an organism's <strong>structural and functional characteristics</strong>, mainly by telling the cell which proteins to make.</p></div>

<h3 data-tier="essential">DNA and the three main RNAs</h3>
<p>The slides give each nucleic acid a short job description:</p>
<ul>
<li><strong>DNA (deoxyribonucleic acid)</strong> contains the <strong>instructions for creating an organism</strong>. It stays in the nucleus (in eukaryotes), where it is protected, and it is copied every time a cell divides.</li>
<li><strong>RNA (ribonucleic acid)</strong> is <strong>used to make proteins</strong>. The slide names three types, each with its own job:</li>
</ul>
<div class="table-wrap"><table class="data">
<thead><tr><th>RNA type</th><th>Job (slide wording in bold)</th><th>Lesson</th></tr></thead>
<tbody>
<tr><td><strong>mRNA</strong> (messenger RNA)</td><td><strong>Copies a gene</strong> and carries that copy out of the nucleus to a ribosome</td><td><a href="#/lesson/3.04">3.04</a></td></tr>
<tr><td><strong>rRNA</strong> (ribosomal RNA)</td><td><strong>Forms the ribosome</strong> (with proteins), the machine that reads the instructions</td><td><a href="#/lesson/3.05">3.05</a></td></tr>
<tr><td><strong>tRNA</strong> (transfer RNA)</td><td><strong>Carries amino acids to a growing polypeptide chain</strong></td><td><a href="#/lesson/3.05">3.05</a></td></tr>
</tbody></table></div>
<p>A useful way to picture it: DNA is the master cookbook kept safely in the library (the nucleus). mRNA is a photocopy of one recipe that can be taken to the kitchen. The ribosome (made with rRNA) is the cook, and tRNAs are the helpers who bring each ingredient (amino acid) in the right order.</p>
<div class="compare"><div><h4>DNA</h4><ul><li>Sugar: <strong>deoxyribose</strong></li><li>Bases: A, <strong>T</strong>, G, C</li><li><strong>Double-stranded</strong> double helix</li><li>Very long; one molecule per chromosome</li><li>Stable, long-term storage</li><li>Found in the nucleus (and in mitochondria and chloroplasts)</li></ul></div><div><h4>RNA</h4><ul><li>Sugar: <strong>ribose</strong></li><li>Bases: A, <strong>U</strong>, G, C</li><li>Usually <strong>single-stranded</strong> (can fold back on itself)</li><li>Short; a copy of one gene or less</li><li>Short-lived, working copies</li><li>Made in the nucleus, works mainly in the cytoplasm</li></ul></div></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>RNA is not "half a DNA molecule." It is a separate polymer with a different sugar (ribose) and a different base (uracil instead of thymine). It is made by copying a short stretch of one DNA strand, and it is usually single-stranded.</p></div>

<h3 data-tier="essential">The nucleotide: three parts</h3>
<p>DNA is a polymer, and its monomers are <span class="term">nucleotides</span>. The slide lists the three parts of a DNA nucleotide:</p>
<ol>
<li>a <strong>5-carbon sugar</strong>, <strong>deoxyribose</strong>;</li>
<li>a <strong>phosphate group</strong>;</li>
<li>a <strong>nitrogenous base</strong>: <strong>A</strong> (adenine), <strong>T</strong> (thymine), <strong>C</strong> (cytosine) or <strong>G</strong> (guanine).</li>
</ol>
<p>The four DNA nucleotides are identical except for their base. To talk about the sugar precisely, chemists number its five carbon atoms <strong>1′ to 5′</strong> (read "one prime" to "five prime"). The prime mark separates the sugar's carbons from the atoms of the base, which have their own numbers. Learn three positions, because they come up in every lesson in this unit:</p>
<ul>
<li>The <strong>base</strong> is attached to the <strong>1′ carbon</strong>.</li>
<li>The <strong>phosphate</strong> is attached to the <strong>5′ carbon</strong> (the carbon that sticks up outside the ring).</li>
<li>The <strong>3′ carbon</strong> carries an <strong>–OH group</strong>. This is where the next nucleotide attaches.</li>
</ul>

<figure class="diagram">
<svg viewBox="0 0 600 262" role="img" aria-labelledby="g302a-t g302a-d">
<title id="g302a-t">A DNA nucleotide with the sugar carbons numbered</title>
<desc id="g302a-d">A DNA nucleotide. In the centre is the deoxyribose sugar, a five-membered ring containing an oxygen atom and four carbons numbered 1 prime to 4 prime. The 5 prime carbon sticks out from the 4 prime carbon and carries the phosphate group. The nitrogenous base, A, T, G or C, is joined to the 1 prime carbon. The 3 prime carbon carries an OH group, where the next nucleotide attaches. The 2 prime carbon carries only a hydrogen in DNA, where RNA has an OH.</desc>
<line x1="266.4" y1="138.8" x2="239.2" y2="108.4" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="239.2" y1="108.4" x2="226.8" y2="83.6" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="333.6" y1="138.8" x2="357.6" y2="138.8" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="279.2" y1="178.8" x2="272" y2="206" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="320.8" y1="178.8" x2="328" y2="206" style="stroke:var(--ink-2);stroke-width:2"/>
<polygon points="300,114.8 333.6,138.8 320.8,178.8 279.2,178.8 266.4,138.8" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:2"/>
<circle cx="300" cy="114.8" r="10" style="fill:var(--bg)"/>
<text x="300" y="119.5" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:650">O</text>
<circle cx="239.2" cy="108.4" r="3.5" style="fill:var(--ink-2)"/>
<circle cx="216.8" cy="63.6" r="22.4" style="fill:var(--link-soft);stroke:var(--link);stroke-width:2"/>
<text x="216.8" y="69" text-anchor="middle" style="fill:var(--ink);font-size:16px;font-weight:700">P</text>
<rect x="357.6" y="119.8" width="150" height="38" rx="5" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:2"/>
<text x="432.6" y="143.5" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Nitrogenous base</text>
<g text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">
<text x="319.2" y="150.8">1′</text><text x="311.2" y="171.6">2′</text><text x="288.8" y="171.6">3′</text><text x="280.8" y="150.8">4′</text>
</g>
<text x="230" y="128" text-anchor="end" style="fill:var(--ink-2);font-size:11.5px">5′</text>
<text x="270" y="224" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">OH</text>
<text x="330" y="224" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">H</text>
<text x="344" y="223" style="fill:var(--ink-2);font-size:11.5px">(OH in RNA)</text>
<text x="186" y="60" text-anchor="end" style="fill:var(--ink);font-size:13px;font-weight:700">Phosphate group</text>
<text x="186" y="76" text-anchor="end" style="fill:var(--ink-2);font-size:12px">on the 5′ carbon</text>
<text x="246" y="160" text-anchor="end" style="fill:var(--ink);font-size:13px;font-weight:700">Deoxyribose</text>
<text x="246" y="176" text-anchor="end" style="fill:var(--ink-2);font-size:12px">(5-carbon sugar)</text>
<text x="432.6" y="176" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">A, T, G or C,</text>
<text x="432.6" y="192" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">joined to the 1′ carbon</text>
<text x="270" y="248" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">3′ –OH: the next nucleotide attaches here</text>
</svg>
<figcaption>A DNA nucleotide, drawn the way the slide shows it: phosphate (circle), deoxyribose (pentagon) and base (rectangle). The ring carbons are numbered 1′ to 4′; the 5′ carbon is outside the ring.</figcaption>
</figure>

<p>The bond between the base and the 1′ carbon is called a <strong>glycosidic bond</strong>. The phosphate is joined to the 5′ carbon through an oxygen atom (an ester bond). You don't need to draw the atoms, but you do need to know which carbon each part is attached to.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Number the sugar clockwise from the base: the base sits on carbon <strong>1′</strong> ("first in line"), and the phosphate hangs off carbon <strong>5′</strong>, the one that sticks out of the ring like a handle. The <strong>3′</strong> –OH is the hand that reaches out to grab the next nucleotide.</p></div>
<p data-tier="likely">A sugar plus a base, without a phosphate, is called a <strong>nucleoside</strong> (deoxyadenosine, for example). Add one phosphate and it becomes a nucleotide. The free nucleotides a cell uses to build DNA actually carry <strong>three</strong> phosphates (deoxyribonucleoside triphosphates: dATP, dTTP, dGTP and dCTP). When one is added to a growing strand, two of the phosphates are released, and that releases the energy that drives the reaction. You'll see this in <a href="#/lesson/3.03">lesson 3.03</a>.</p>

<h3 data-tier="essential">Deoxyribose and ribose</h3>
<p>The slide reminds you that <strong>RNA has a different 5-carbon sugar, ribose</strong>. The two sugars differ at exactly one position, the <strong>2′ carbon</strong>:</p>
<ul>
<li><strong>Ribose</strong> (in RNA) has an <strong>–OH</strong> group on the 2′ carbon.</li>
<li><strong>Deoxyribose</strong> (in DNA) has only an <strong>–H</strong> there. It is "de-oxy" ribose: ribose with one oxygen atom missing.</li>
</ul>
<p>Everything else (the ring oxygen, the 5′ carbon outside the ring, the –OH on the 3′ carbon) is the same in both.</p>

<figure class="diagram">
<svg viewBox="0 0 640 264" role="img" aria-labelledby="g302b-t g302b-d">
<title id="g302b-t">2-Deoxyribose compared with ribose</title>
<desc id="g302b-d">Two five-membered sugar rings side by side, each with a ring oxygen at the top, carbons numbered 1 prime to 4 prime, and a CH2OH group on the 4 prime carbon containing the 5 prime carbon. Both have OH groups on the 1 prime and 3 prime carbons. The only difference is boxed on the 2 prime carbon: 2-deoxyribose, the sugar in DNA, has an H, while ribose, the sugar in RNA, has an OH.</desc>
<!-- deoxyribose -->
<line x1="140.6" y1="120.2" x2="127" y2="104" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="199.4" y1="120.2" x2="220" y2="120.2" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="151.8" y1="155.2" x2="147" y2="180" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="188.2" y1="155.2" x2="193" y2="180" style="stroke:var(--ink-2);stroke-width:2"/>
<polygon points="170,99.2 199.4,120.2 188.2,155.2 151.8,155.2 140.6,120.2" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:2"/>
<circle cx="170" cy="99.2" r="9" style="fill:var(--bg)"/>
<text x="170" y="104" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:650">O</text>
<text x="126" y="101" text-anchor="end" style="fill:var(--ink);font-size:13px;font-weight:650">HOCH₂</text>
<text x="118" y="84" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">5′</text>
<text x="224" y="125" style="fill:var(--ink);font-size:13px;font-weight:650">OH</text>
<text x="145" y="197" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:650">OH</text>
<rect x="183" y="183" width="24" height="20" rx="4" style="fill:none;stroke:var(--proton);stroke-width:2"/>
<text x="195" y="198" text-anchor="middle" style="fill:var(--proton);font-size:13px;font-weight:700">H</text>
<g style="fill:var(--ink-2);font-size:11.5px"><text x="206" y="141">1′</text><text x="199" y="164">2′</text><text x="142" y="164" text-anchor="end">3′</text><text x="134" y="137" text-anchor="end">4′</text></g>
<text x="170" y="234" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">2-Deoxyribose (DNA)</text>
<text x="170" y="252" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">only H on the 2′ carbon</text>
<!-- ribose -->
<line x1="440.6" y1="120.2" x2="427" y2="104" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="499.4" y1="120.2" x2="520" y2="120.2" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="451.8" y1="155.2" x2="447" y2="180" style="stroke:var(--ink-2);stroke-width:2"/>
<line x1="488.2" y1="155.2" x2="493" y2="180" style="stroke:var(--ink-2);stroke-width:2"/>
<polygon points="470,99.2 499.4,120.2 488.2,155.2 451.8,155.2 440.6,120.2" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:2"/>
<circle cx="470" cy="99.2" r="9" style="fill:var(--bg)"/>
<text x="470" y="104" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:650">O</text>
<text x="426" y="101" text-anchor="end" style="fill:var(--ink);font-size:13px;font-weight:650">HOCH₂</text>
<text x="418" y="84" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">5′</text>
<text x="524" y="125" style="fill:var(--ink);font-size:13px;font-weight:650">OH</text>
<text x="445" y="197" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:650">OH</text>
<rect x="479" y="183" width="32" height="20" rx="4" style="fill:none;stroke:var(--proton);stroke-width:2"/>
<text x="495" y="198" text-anchor="middle" style="fill:var(--proton);font-size:13px;font-weight:700">OH</text>
<g style="fill:var(--ink-2);font-size:11.5px"><text x="506" y="141">1′</text><text x="499" y="164">2′</text><text x="442" y="164" text-anchor="end">3′</text><text x="434" y="137" text-anchor="end">4′</text></g>
<text x="470" y="234" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Ribose (RNA)</text>
<text x="470" y="252" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">OH on the 2′ carbon</text>
</svg>
<figcaption>The two sugars, drawn as on the class slide (free sugars, so the 1′ carbon carries an –OH; in a nucleotide, the base replaces it). The only difference is boxed: H vs OH on the 2′ carbon.</figcaption>
</figure>

<p data-tier="likely">That one small difference matters. The 2′ –OH of ribose is reactive: it can attack the neighbouring phosphodiester bond and cut the RNA strand, so RNA breaks down quickly, especially in alkaline conditions. Deoxyribose has no 2′ –OH, so DNA's backbone is far more stable. That suits each molecule's job: DNA must last for the whole life of the cell (and be passed on), while an mRNA only needs to last long enough to be translated, then should be cleared away so the cell can change which proteins it makes.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Deoxyribose is missing an oxygen at the <strong>2′</strong> carbon, not the 3′. The 3′ –OH is present in both sugars, and DNA <em>needs</em> it: without a 3′ –OH, no new nucleotide could be attached and the strand could not grow.</p></div>

<h3 data-tier="essential">The four bases: purines and pyrimidines</h3>
<p>The nitrogenous bases are flat ring molecules containing nitrogen. They fall into two families by size:</p>
<div class="compare"><div><h4>Purines: two rings</h4><ul><li>A six-membered ring fused to a five-membered ring (a <strong>double ring</strong>)</li><li><strong>Adenine (A)</strong> and <strong>guanine (G)</strong></li><li>Found in both DNA and RNA</li></ul></div><div><h4>Pyrimidines: one ring</h4><ul><li>A single six-membered ring</li><li><strong>Cytosine (C)</strong>, <strong>thymine (T)</strong> and <strong>uracil (U)</strong></li><li>C is in both; T only in DNA; U only in RNA</li></ul></div></div>
<p>Thymine and uracil are almost identical: thymine is uracil with an extra methyl (–CH<sub>3</sub>) group. Both pair with adenine. The pictures of the bases on the slide show the two families side by side; the purines are visibly bigger.</p>
<div class="callout tip"><p class="callout-title">Memory trick</p><p><strong>"Pure As Gold"</strong>: the <strong>pur</strong>ines are <strong>A</strong> and <strong>G</strong>. <strong>"CUT the Py"</strong>: the <strong>py</strong>rimidines are <strong>C</strong>, <strong>U</strong> and <strong>T</strong>. The longer word, <em>pyrimidine</em>, goes with the smaller molecule.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Don't mix up the names <strong>purine</strong> and <strong>pyrimidine</strong> with which base pairs with which. Pairing is always <strong>one purine with one pyrimidine</strong>: A (purine) with T or U (pyrimidines), and G (purine) with C (pyrimidine).</p></div>
<h4>The sequence is the message</h4>
<p>The slide's key point is that the <strong>sequence of the 4 nitrogenous bases determines protein structure</strong>. The sugar and phosphate are the same in every nucleotide, so they carry no information; the bases are the "letters." A gene is a particular stretch of bases, and the order of its bases spells out the order of amino acids in a protein (<a href="#/lesson/3.05">lesson 3.05</a>). Change the order, and you change the protein (<a href="#/lesson/3.06">lesson 3.06</a>).</p>
<p>Four letters may sound like too few (that was the argument for protein in lesson 3.01), but length makes up for it. A sequence of <em>n</em> bases can be arranged in 4<sup><em>n</em></sup> ways: a stretch only 10 bases long already has 4<sup>10</sup> ≈ 1 million possible sequences, and a typical gene is thousands of bases long. Computers manage with an alphabet of just two symbols, 0 and 1.</p>
<p data-tier="likely">The human genome has about <strong>3.2 billion base pairs</strong> in each set of chromosomes, and a body cell carries two sets. Only about 1–2% of that DNA codes for protein; the rest includes control regions, RNA genes, repeated sequences and DNA whose function is still being worked out.</p>

<h3 data-tier="essential">Phosphodiester bonds: the backbone</h3>
<p>Nucleotides join into a strand by a <span class="term">condensation reaction</span> (dehydration synthesis). The <strong>–OH on the 3′ carbon</strong> of one nucleotide reacts with the <strong>phosphate on the 5′ carbon</strong> of the next, and a molecule of <strong>water is released</strong>. The new link is a <span class="term">phosphodiester bond</span>: the phosphate is now joined by ester bonds to two sugars, one on each side ("di-ester"). It is a strong <strong>covalent</strong> bond.</p>

<figure class="diagram stepper">
<svg viewBox="0 0 720 350" role="img" aria-labelledby="g302d-t g302d-d">
<title id="g302d-t">Forming a phosphodiester bond and building a strand</title>
<desc id="g302d-d">Two nucleotides, one above the other. The upper nucleotide has a free OH on its 3 prime carbon; the lower nucleotide has a phosphate on its 5 prime carbon with an OH group. In a condensation reaction, these groups react and a molecule of water is released. The 3 prime carbon of the upper sugar is now joined through the phosphate to the 5 prime carbon of the lower sugar: a phosphodiester bond. Repeating this builds a strand with a sugar-phosphate backbone, a free phosphate at the 5 prime end and a free OH at the 3 prime end, with the bases sticking out to one side.</desc>
<defs><marker id="g302d-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<line x1="185.8" y1="96" x2="166.3" y2="74.1" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="166.3" y1="74.1" x2="157.4" y2="56.3" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="234.2" y1="96" x2="251.4" y2="96" style="stroke:var(--ink-2);stroke-width:1.8"/>
<rect x="251.4" y="82.2" width="70" height="27.6" rx="4" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<text x="286.4" y="100.5" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">A</text>
<polygon points="210,78.7 234.2,96 224.9,124.7 195.1,124.7 185.8,96" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="210" cy="78.7" r="8" style="fill:var(--surface)"/>
<text x="210" y="82.7" text-anchor="middle" style="fill:var(--ink);font-size:12px">O</text>
<circle cx="150.2" cy="41.9" r="16.1" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="150.2" y="46.4" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">P</text>
<line x1="185.8" y1="271.9" x2="166.3" y2="250.1" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="166.3" y1="250.1" x2="157.4" y2="232.3" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="234.2" y1="271.9" x2="251.4" y2="271.9" style="stroke:var(--ink-2);stroke-width:1.8"/>
<rect x="251.4" y="258.1" width="52" height="27.6" rx="4" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
<text x="277.4" y="276.4" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">C</text>
<polygon points="210,254.7 234.2,271.9 224.9,300.7 195.1,300.7 185.8,271.9" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="210" cy="254.7" r="8" style="fill:var(--surface)"/>
<text x="210" y="258.7" text-anchor="middle" style="fill:var(--ink);font-size:12px">O</text>
<circle cx="150.2" cy="217.9" r="16.1" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="150.2" y="222.4" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">P</text>
<text x="126" y="46" text-anchor="end" style="fill:var(--ink);font-size:12.5px;font-weight:700">5′ end</text>
<g style="fill:var(--ink-2);font-size:11.5px"><text x="174" y="66">5′</text><text x="204" y="141">3′</text><text x="174" y="242">5′</text><text x="204" y="317">3′</text></g>
<line x1="195.1" y1="300.7" x2="192" y2="322" style="stroke:var(--ink-2);stroke-width:2"/>
<text x="192" y="338" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">OH</text>
<text x="216" y="338" style="fill:var(--ink);font-size:12.5px;font-weight:700">3′ end</text>
<g data-upto="2">
<line x1="195.1" y1="124.7" x2="192" y2="150" style="stroke:var(--ink-2);stroke-width:2"/>
<text x="192" y="166" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">OH</text>
<line x1="162.5" y1="207.6" x2="171" y2="199" style="stroke:var(--ink-2);stroke-width:2"/>
<text x="185" y="198" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">HO</text>
</g>
<g data-step="2">
<ellipse cx="186" cy="180" rx="27" ry="31" style="fill:none;stroke:var(--etc);stroke-width:1.8;stroke-dasharray:4 3"/>
</g>
<g data-step="2"><line x1="215" y1="180" x2="256" y2="180" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g302d-ah)"/></g>
<g data-from="2">
<text x="264" y="186" style="fill:var(--etc);font-size:16px;font-weight:700">H₂O</text>
<text x="264" y="203" style="fill:var(--ink-2);font-size:12px">released</text>
</g>
<g data-from="3">
<line x1="195.1" y1="124.7" x2="157.2" y2="203.4" style="stroke:var(--proton);stroke-width:3.5"/>
<text x="124" y="162" text-anchor="end" style="fill:var(--proton);font-size:13px;font-weight:700">phosphodiester</text>
<text x="124" y="178" text-anchor="end" style="fill:var(--proton);font-size:13px;font-weight:700">bond</text>
<line x1="128" y1="167" x2="170" y2="167" style="stroke:var(--proton);stroke-width:1.2"/>
</g>
<g data-from="4">
<line x1="511.9" y1="225.2" x2="494.3" y2="240.8" style="stroke:var(--ink-2);stroke-width:1.5"/>
<line x1="511.9" y1="159.2" x2="494.3" y2="174.8" style="stroke:var(--ink-2);stroke-width:1.5"/>
<line x1="511.9" y1="93.2" x2="494.3" y2="108.8" style="stroke:var(--ink-2);stroke-width:1.5"/>
<line x1="507" y1="77.7" x2="496.4" y2="65.9" style="stroke:var(--ink-2);stroke-width:1.5"/>
<line x1="496.4" y1="65.9" x2="491.6" y2="56.3" style="stroke:var(--ink-2);stroke-width:1.5"/>
<line x1="533" y1="77.7" x2="542.3" y2="77.7" style="stroke:var(--ink-2);stroke-width:1.5"/>
<rect x="542.3" y="69.6" width="44" height="16.1" rx="4" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<text x="564.3" y="81.7" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">A</text>
<polygon points="520,68.4 533,77.7 528.1,93.2 511.9,93.2 507,77.7" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="487.8" cy="48.5" r="8.7" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="487.8" y="53" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<line x1="507" y1="143.7" x2="496.4" y2="131.9" style="stroke:var(--ink-2);stroke-width:1.5"/>
<line x1="496.4" y1="131.9" x2="491.6" y2="122.3" style="stroke:var(--ink-2);stroke-width:1.5"/>
<line x1="533" y1="143.7" x2="542.3" y2="143.7" style="stroke:var(--ink-2);stroke-width:1.5"/>
<rect x="542.3" y="135.6" width="32" height="16.1" rx="4" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
<text x="558.3" y="147.7" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">C</text>
<polygon points="520,134.4 533,143.7 528.1,159.2 511.9,159.2 507,143.7" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="487.8" cy="114.5" r="8.7" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="487.8" y="119" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<line x1="507" y1="209.7" x2="496.4" y2="197.9" style="stroke:var(--ink-2);stroke-width:1.5"/>
<line x1="496.4" y1="197.9" x2="491.6" y2="188.3" style="stroke:var(--ink-2);stroke-width:1.5"/>
<line x1="533" y1="209.7" x2="542.3" y2="209.7" style="stroke:var(--ink-2);stroke-width:1.5"/>
<rect x="542.3" y="201.6" width="44" height="16.1" rx="4" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<text x="564.3" y="213.7" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">G</text>
<polygon points="520,200.4 533,209.7 528.1,225.2 511.9,225.2 507,209.7" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="487.8" cy="180.5" r="8.7" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="487.8" y="185" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<line x1="507" y1="275.7" x2="496.4" y2="263.9" style="stroke:var(--ink-2);stroke-width:1.5"/>
<line x1="496.4" y1="263.9" x2="491.6" y2="254.3" style="stroke:var(--ink-2);stroke-width:1.5"/>
<line x1="533" y1="275.7" x2="542.3" y2="275.7" style="stroke:var(--ink-2);stroke-width:1.5"/>
<rect x="542.3" y="267.6" width="32" height="16.1" rx="4" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1.5"/>
<text x="558.3" y="279.7" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:700">T</text>
<polygon points="520,266.4 533,275.7 528.1,291.2 511.9,291.2 507,275.7" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="487.8" cy="246.5" r="8.7" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="487.8" y="251" text-anchor="middle" style="fill:var(--ink);font-size:11px;font-weight:700">P</text>
<line x1="511.9" y1="291.2" x2="505.9" y2="305.2" style="stroke:var(--ink-2);stroke-width:1.5"/>
<text x="502.9" y="319.2" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:650">OH</text>
<text x="487.8" y="30" text-anchor="middle" style="fill:var(--ink);font-size:12.5px;font-weight:700">5′ end</text>
<text x="522" y="323" style="fill:var(--ink);font-size:12.5px;font-weight:700">3′ end</text>
<path d="M474,42 H467 V300 H474" style="fill:none;stroke:var(--ink-2);stroke-width:1.5"/>
<text x="460" y="166" text-anchor="end" style="fill:var(--ink);font-size:12.5px;font-weight:650">sugar–phosphate</text>
<text x="460" y="182" text-anchor="end" style="fill:var(--ink);font-size:12.5px;font-weight:650">backbone</text>
<text x="600" y="166" style="fill:var(--ink);font-size:12.5px;font-weight:650">bases stick</text>
<text x="600" y="182" style="fill:var(--ink);font-size:12.5px;font-weight:650">out to one side</text>
<text x="700" y="54" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">5′</text>
<line x1="700" y1="64" x2="700" y2="296" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g302d-ah)"/>
<text x="700" y="318" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">3′</text>
</g>
</svg>
<ol class="step-captions">
<li><strong>Two nucleotides.</strong> The upper nucleotide has a free –OH on its 3′ carbon. The lower nucleotide has a phosphate on its 5′ carbon, which still carries an –OH of its own.</li>
<li><strong>Condensation.</strong> The 3′ –OH and the phosphate's –OH react. An H and an OH leave together as a molecule of <strong>water</strong>.</li>
<li><strong>A phosphodiester bond.</strong> The 3′ carbon of the upper sugar is now linked through the phosphate to the 5′ carbon of the lower sugar. This strong covalent bond is the link in the backbone.</li>
<li><strong>Repeat: a strand with direction.</strong> Each new nucleotide adds to the free 3′ –OH. The result is a <strong>sugar–phosphate backbone</strong> with the bases sticking out, a <strong>5′ end</strong> (free phosphate) and a <strong>3′ end</strong> (free –OH).</li>
</ol>
<figcaption>Building a DNA strand by condensation. The bond highlighted in red joins the 3′ carbon of one sugar to the 5′ carbon of the next.</figcaption>
</figure>

<p>Repeat the reaction again and again and you get a long chain that alternates sugar–phosphate–sugar–phosphate: the <span class="term">sugar–phosphate backbone</span>. The bases are not part of the backbone. They stick out to the side from each sugar, which leaves them free to pair with the bases of another strand.</p>
<p>Because every phosphate links a 3′ carbon to a 5′ carbon, each strand has a <strong>direction</strong>:</p>
<ul>
<li>the <strong>5′ end</strong> has a free <strong>phosphate</strong> on the 5′ carbon of the last sugar;</li>
<li>the <strong>3′ end</strong> has a free <strong>–OH</strong> on the 3′ carbon of the last sugar.</li>
</ul>
<p>By convention, sequences are always written from the <strong>5′ end to the 3′ end</strong>, left to right, unless the ends are labelled otherwise. And new nucleotides can only ever be added to the free <strong>3′ –OH</strong>, so every DNA and RNA strand is built in the <strong>5′ → 3′ direction</strong>. That one rule explains most of the complications of DNA replication in <a href="#/lesson/3.03">lesson 3.03</a>.</p>
<div class="callout key"><p class="callout-title">On the test</p><ul><li><strong>Phosphodiester bond:</strong> a covalent bond linking the 3′ carbon of one nucleotide's sugar, through a phosphate, to the 5′ carbon of the next; formed by condensation (water released).</li><li>It makes the <strong>sugar–phosphate backbone</strong>. The bases are attached to the sugars and point inward.</li><li>5′ end = phosphate; 3′ end = sugar with –OH.</li></ul></div>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Don't confuse the two kinds of bonds in DNA. <strong>Phosphodiester bonds</strong> (strong, covalent) join nucleotides <em>along</em> one strand. <strong>Hydrogen bonds</strong> (weak) join the bases of the two strands <em>across</em> the helix. The backbone is never held together by hydrogen bonds.</p></div>
<p data-tier="likely">The slide shows the reaction as a simple condensation, which is what to write on a test. In a living cell the incoming nucleotide is a triphosphate (such as dATP), and the reaction releases a <strong>pyrophosphate</strong> (two linked phosphates) instead of water. Breaking off that pyrophosphate supplies the energy for the new bond.</p>
<h4>A negatively charged acid</h4>
<p>The slide's next point: <strong>DNA is slightly acidic and negatively charged due to the phosphate groups</strong>. In the backbone, each phosphate group has one –OH that easily gives up its H<sup>+</sup> ion (that's what makes it an acid, and why it is a nucleic <em>acid</em>). At the pH inside a cell the H<sup>+</sup> is lost, leaving a negatively charged oxygen (O<sup>−</sup>) on every phosphate. A DNA molecule therefore carries one negative charge per nucleotide, and as the slide's figure puts it, a negative charge surrounds the whole structure.</p>
<p>The negative charge has real consequences:</p>
<ul>
<li>The charged phosphates are very <strong>hydrophilic</strong>, so the backbone faces outward into the watery nucleus, while the less polar bases are tucked inside.</li>
<li>DNA binds tightly to <strong>positively charged proteins</strong>, especially the <strong>histones</strong> that package it into chromosomes. This is the "basic portion" of Miescher's nuclein.</li>
<li data-tier="likely">In <strong>gel electrophoresis</strong>, DNA fragments move toward the <strong>positive</strong> electrode, with shorter fragments moving faster. This is how DNA fingerprints are made.</li>
</ul>
<p data-tier="extra">All those negative charges repel each other. Inside cells they are partly neutralized by positive ions, especially magnesium (Mg<sup>2+</sup>), and by positively charged proteins. Without that shielding, the two strands of the helix would push apart more easily.</p>

<h3 data-tier="essential">Complementary base pairing</h3>
<p>In a DNA double helix, the bases on one strand pair with the bases on the other according to strict rules:</p>
<ul>
<li><strong>A pairs with T</strong>, held by <strong>2 hydrogen bonds</strong> (written A=T).</li>
<li><strong>G pairs with C</strong>, held by <strong>3 hydrogen bonds</strong> (written G≡C).</li>
</ul>
<p>Two bases that pair this way are <span class="term">complementary</span>, and the rule is called <span class="term">complementary base pairing</span>. The two strands of a DNA molecule are therefore not identical; they are complementary. If you know the sequence of one strand, you know the other.</p>
<p>Why must a <strong>purine always pair with a pyrimidine</strong>? Look at the sizes. A purine has two rings and a pyrimidine has one, so every purine + pyrimidine pair is three rings wide. That keeps the two backbones the same distance apart all the way along. As the slide puts it, complementary base pairing <strong>causes the diameter of the DNA helix to remain constant: 2 nm</strong>.</p>

<figure class="diagram">
<svg viewBox="0 0 700 366" role="img" aria-labelledby="g302c-t g302c-d">
<title id="g302c-t">Purines, pyrimidines and why a purine always pairs with a pyrimidine</title>
<desc id="g302c-d">Top: the five bases as ring shapes. The purines adenine and guanine have two fused rings. The pyrimidines cytosine, thymine and uracil have one ring; thymine is found only in DNA and uracil only in RNA. Bottom: three pairs placed between two backbones a fixed 2 nanometres apart. Two purines are too wide and overlap. Two pyrimidines are too far apart to reach each other. A purine with a pyrimidine fits exactly, with room for hydrogen bonds between them.</desc>
<text x="155" y="30" text-anchor="middle" style="fill:var(--ink);font-size:13.5px;font-weight:700">Purines: two rings</text>
<text x="497" y="30" text-anchor="middle" style="fill:var(--ink);font-size:13.5px;font-weight:700">Pyrimidines: one ring</text>
<polygon points="93.4,93 76.3,98.6 65.7,84 76.3,69.4 93.4,75" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<polygon points="109,66 124.6,75 124.6,93 109,102 93.4,93 93.4,75" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<text x="109" y="89" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">A</text>
<polygon points="213.4,93 196.3,98.6 185.7,84 196.3,69.4 213.4,75" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.8"/>
<polygon points="229,66 244.6,75 244.6,93 229,102 213.4,93 213.4,75" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.8"/>
<text x="229" y="89" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">G</text>
<polygon points="392,66 407.6,75 407.6,93 392,102 376.4,93 376.4,75" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.8"/>
<text x="392" y="89" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">C</text>
<polygon points="497,66 512.6,75 512.6,93 497,102 481.4,93 481.4,75" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1.8"/>
<text x="497" y="89" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">T</text>
<polygon points="602,66 617.6,75 617.6,93 602,102 586.4,93 586.4,75" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:1.8"/>
<text x="602" y="89" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">U</text>
<g text-anchor="middle" style="fill:var(--ink);font-size:12.5px;font-weight:650">
<text x="95" y="126">Adenine (A)</text><text x="215" y="126">Guanine (G)</text><text x="392" y="126">Cytosine (C)</text><text x="497" y="126">Thymine (T)</text><text x="602" y="126">Uracil (U)</text>
</g>
<g text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">
<text x="497" y="142">DNA only</text><text x="602" y="142">RNA only</text>
</g>
<line x1="20" y1="160" x2="680" y2="160" style="stroke:var(--line);stroke-width:1.5"/>
<g style="stroke:var(--ink-2);stroke-width:6;stroke-linecap:round">
<line x1="60" y1="208" x2="60" y2="316"/><line x1="180" y1="208" x2="180" y2="316"/>
<line x1="290" y1="208" x2="290" y2="316"/><line x1="410" y1="208" x2="410" y2="316"/>
<line x1="520" y1="208" x2="520" y2="316"/><line x1="640" y1="208" x2="640" y2="316"/>
</g>
<polygon points="81.9,271 64.7,276.6 54.2,262 64.7,247.4 81.9,253" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<polygon points="97.5,244 113,253 113,271 97.5,280 81.9,271 81.9,253" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<text x="97.5" y="267" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">A</text>
<polygon points="158.1,271 175.3,276.6 185.8,262 175.3,247.4 158.1,253" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.8"/>
<polygon points="142.6,244 158.1,253 158.1,271 142.6,280 127,271 127,253" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.8"/>
<text x="142.6" y="267" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">G</text>
<polygon points="313.6,244 329.2,253 329.2,271 313.6,280 298,271 298,253" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.8"/>
<text x="313.6" y="267" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">C</text>
<polygon points="386.4,244 402,253 402,271 386.4,280 370.8,271 370.8,253" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1.8"/>
<text x="386.4" y="267" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">T</text>
<polygon points="555.7,271 538.6,276.6 528,262 538.6,247.4 555.7,253" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.8"/>
<polygon points="571.3,244 586.9,253 586.9,271 571.3,280 555.7,271 555.7,253" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.8"/>
<text x="571.3" y="267" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">G</text>
<polygon points="616.4,244 632,253 632,271 616.4,280 600.8,271 600.8,253" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.8"/>
<text x="616.4" y="267" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">C</text>
<g style="fill:none;stroke:var(--bad);stroke-width:2;stroke-dasharray:4 3"><circle cx="60" cy="262" r="14"/><circle cx="180" cy="262" r="14"/></g>
<g style="stroke:var(--ink-2);stroke-width:1.6;stroke-dasharray:2 2"><line x1="114" y1="256" x2="126" y2="256"/><line x1="114" y1="268" x2="126" y2="268"/></g>
<text x="350" y="290" text-anchor="middle" style="fill:var(--ink-2);font-size:11px">gap</text>
<g style="stroke:var(--ink-2);stroke-width:1.6;stroke-dasharray:2 2"><line x1="588" y1="254" x2="599" y2="254"/><line x1="588" y1="262" x2="599" y2="262"/><line x1="588" y1="270" x2="599" y2="270"/></g>
<path d="M520,182 V196 M520,189 H640 M640,182 V196" style="fill:none;stroke:var(--ink);stroke-width:1.2"/>
<text x="580" y="180" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">2 nm</text>
<g text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">
<text x="120" y="340">Purine + purine</text><text x="350" y="340">Pyrimidine + pyrimidine</text><text x="580" y="340">Purine + pyrimidine</text>
</g>
<g text-anchor="middle" style="font-size:12px;font-weight:650">
<text x="120" y="357" style="fill:var(--bad)">✗ too wide for the backbones</text><text x="350" y="357" style="fill:var(--bad)">✗ too far apart to bond</text><text x="580" y="357" style="fill:var(--good)">✓ fits exactly: 2 nm</text>
</g>
</svg>
<figcaption>Top: purines (A, G) have two rings; pyrimidines (C, T, U) have one. Bottom: the backbones (grey bars) are a fixed 2 nm apart, so only a purine–pyrimidine pair fits. Dashed lines are hydrogen bonds (3 for G≡C).</figcaption>
</figure>

<p>Size alone would also allow A to pair with C, or G with T (each is a purine with a pyrimidine). What rules those out is <strong>hydrogen bonding</strong>. Each base has a particular pattern of atoms along its pairing edge that can either donate a hydrogen (an N–H) or accept one (an O or N with a lone pair). A and T line up to form exactly two hydrogen bonds; G and C line up to form three. Put A opposite C and the donors and acceptors don't match, so no stable pair forms.</p>
<div class="callout teacher"><p class="callout-title">From the slides</p><p>The "Nucleotide Pairing" slide shows thymine–adenine with 2 H-bonds (<strong>T = A</strong>) and cytosine–guanine with 3 H-bonds (<strong>C ≡ G</strong>). Next to it: complementary base pairing "causes the diameter of the DNA helix to remain constant ie: <strong>2 nm</strong>", and, boxed in red, "<strong>the large number of hydrogen bonds between DNA strands account for its structural stability</strong>."</p></div>
<div class="callout warn"><p class="callout-title">Check your notes</p><p>The slide spells it "complimentary." The correct word here is <strong>complementary</strong> (with an e), meaning "completing each other," like two puzzle pieces. "Complimentary" (with an i) means free of charge or flattering.</p></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Count the straight lines: <strong>A</strong> and <strong>T</strong> are drawn with straight strokes and get <strong>2</strong> hydrogen bonds; <strong>C</strong> and <strong>G</strong> are curvy and hold on tighter with <strong>3</strong>. And "Apple in the Tree, Car in the Garage" for which pairs with which.</p></div>

<h3 data-tier="essential">Antiparallel strands</h3>
<p>The two strands of a DNA molecule run in <strong>opposite directions</strong>. The slide defines the two ends of each strand:</p>
<ul>
<li>the <strong>5′ end terminates in a phosphate group</strong>;</li>
<li>the <strong>3′ end terminates in a sugar</strong> (its 3′ carbon carries a free –OH).</li>
</ul>
<p>In a double helix, the 5′ end of one strand lies opposite the 3′ end of the other. The strands are said to be <span class="term">antiparallel</span> ("anti" = opposite; "parallel" = side by side). Read one strand from top to bottom and you go 5′ → 3′; read its partner from top to bottom and you go 3′ → 5′.</p>

<figure class="diagram">
<svg viewBox="0 0 680 452" role="img" aria-labelledby="g302e-t g302e-d">
<title id="g302e-t">Antiparallel strands of DNA</title>
<desc id="g302e-d">A short stretch of double-stranded DNA drawn as a ladder. The left strand runs from a free phosphate at its 5 prime end at the top to a free OH at its 3 prime end at the bottom. The right strand is upside down: its 3 prime end with a free OH is at the top and its 5 prime end with a free phosphate is at the bottom. Each strand is a chain of sugars and phosphates joined by phosphodiester bonds. Bases pair across the middle: A with T by 2 hydrogen bonds, G with C by 3, C with G by 3, and T with A by 2.</desc>
<defs><marker id="g302e-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<line x1="171.1" y1="71.7" x2="155.8" y2="54.6" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="155.8" y1="54.6" x2="148.8" y2="40.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="208.9" y1="71.7" x2="222.4" y2="71.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<rect x="222.4" y="60.9" width="88" height="21.6" rx="4" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<text x="266.4" y="76.2" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">A</text>
<polygon points="190,58.2 208.9,71.7 201.7,94.2 178.3,94.2 171.1,71.7" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="143.2" cy="29.4" r="12.6" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="143.2" y="33.9" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">P</text>
<line x1="488.9" y1="71.7" x2="504.2" y2="88.8" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="504.2" y1="88.8" x2="511.2" y2="102.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="451.1" y1="71.7" x2="437.6" y2="71.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<rect x="377.6" y="60.9" width="60" height="21.6" rx="4" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1.5"/>
<text x="407.6" y="76.2" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">T</text>
<polygon points="470,85.2 451.1,71.7 458.3,49.2 481.7,49.2 488.9,71.7" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="516.8" cy="114" r="12.6" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="516.8" y="118.5" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">P</text>
<line x1="313.4" y1="68.2" x2="374.6" y2="68.2" style="stroke:var(--ink-2);stroke-width:1.6;stroke-dasharray:3 3"/>
<line x1="313.4" y1="75.2" x2="374.6" y2="75.2" style="stroke:var(--ink-2);stroke-width:1.6;stroke-dasharray:3 3"/>
<line x1="171.1" y1="163.7" x2="155.8" y2="146.6" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="155.8" y1="146.6" x2="148.8" y2="132.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="208.9" y1="163.7" x2="222.4" y2="163.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<rect x="222.4" y="152.9" width="88" height="21.6" rx="4" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<text x="266.4" y="168.2" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">G</text>
<polygon points="190,150.2 208.9,163.7 201.7,186.2 178.3,186.2 171.1,163.7" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="143.2" cy="121.4" r="12.6" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="143.2" y="125.9" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">P</text>
<line x1="488.9" y1="163.7" x2="504.2" y2="180.8" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="504.2" y1="180.8" x2="511.2" y2="194.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="451.1" y1="163.7" x2="437.6" y2="163.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<rect x="377.6" y="152.9" width="60" height="21.6" rx="4" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
<text x="407.6" y="168.2" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">C</text>
<polygon points="470,177.2 451.1,163.7 458.3,141.2 481.7,141.2 488.9,163.7" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="516.8" cy="206" r="12.6" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="516.8" y="210.5" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">P</text>
<line x1="313.4" y1="156.7" x2="374.6" y2="156.7" style="stroke:var(--ink-2);stroke-width:1.6;stroke-dasharray:3 3"/>
<line x1="313.4" y1="163.7" x2="374.6" y2="163.7" style="stroke:var(--ink-2);stroke-width:1.6;stroke-dasharray:3 3"/>
<line x1="313.4" y1="170.7" x2="374.6" y2="170.7" style="stroke:var(--ink-2);stroke-width:1.6;stroke-dasharray:3 3"/>
<line x1="171.1" y1="255.7" x2="155.8" y2="238.6" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="155.8" y1="238.6" x2="148.8" y2="224.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="208.9" y1="255.7" x2="222.4" y2="255.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<rect x="222.4" y="244.9" width="60" height="21.6" rx="4" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
<text x="252.4" y="260.2" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">C</text>
<polygon points="190,242.2 208.9,255.7 201.7,278.2 178.3,278.2 171.1,255.7" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="143.2" cy="213.4" r="12.6" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="143.2" y="217.9" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">P</text>
<line x1="488.9" y1="255.7" x2="504.2" y2="272.8" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="504.2" y1="272.8" x2="511.2" y2="286.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="451.1" y1="255.7" x2="437.6" y2="255.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<rect x="349.6" y="244.9" width="88" height="21.6" rx="4" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<text x="393.6" y="260.2" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">G</text>
<polygon points="470,269.2 451.1,255.7 458.3,233.2 481.7,233.2 488.9,255.7" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="516.8" cy="298" r="12.6" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="516.8" y="302.5" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">P</text>
<line x1="285.4" y1="248.7" x2="346.6" y2="248.7" style="stroke:var(--ink-2);stroke-width:1.6;stroke-dasharray:3 3"/>
<line x1="285.4" y1="255.7" x2="346.6" y2="255.7" style="stroke:var(--ink-2);stroke-width:1.6;stroke-dasharray:3 3"/>
<line x1="285.4" y1="262.7" x2="346.6" y2="262.7" style="stroke:var(--ink-2);stroke-width:1.6;stroke-dasharray:3 3"/>
<line x1="171.1" y1="347.7" x2="155.8" y2="330.6" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="155.8" y1="330.6" x2="148.8" y2="316.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="208.9" y1="347.7" x2="222.4" y2="347.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<rect x="222.4" y="336.9" width="60" height="21.6" rx="4" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1.5"/>
<text x="252.4" y="352.2" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">T</text>
<polygon points="190,334.2 208.9,347.7 201.7,370.2 178.3,370.2 171.1,347.7" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="143.2" cy="305.4" r="12.6" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="143.2" y="309.9" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">P</text>
<line x1="488.9" y1="347.7" x2="504.2" y2="364.8" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="504.2" y1="364.8" x2="511.2" y2="378.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="451.1" y1="347.7" x2="437.6" y2="347.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<rect x="349.6" y="336.9" width="88" height="21.6" rx="4" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.5"/>
<text x="393.6" y="352.2" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">A</text>
<polygon points="470,361.2 451.1,347.7 458.3,325.2 481.7,325.2 488.9,347.7" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<circle cx="516.8" cy="390" r="12.6" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="516.8" y="394.5" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">P</text>
<line x1="285.4" y1="344.2" x2="346.6" y2="344.2" style="stroke:var(--ink-2);stroke-width:1.6;stroke-dasharray:3 3"/>
<line x1="285.4" y1="351.2" x2="346.6" y2="351.2" style="stroke:var(--ink-2);stroke-width:1.6;stroke-dasharray:3 3"/>
<line x1="178.3" y1="94.2" x2="153.2" y2="113.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="481.7" y1="141.2" x2="506.8" y2="121.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="178.3" y1="186.2" x2="153.2" y2="205.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="481.7" y1="233.2" x2="506.8" y2="213.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="178.3" y1="278.2" x2="153.2" y2="297.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="481.7" y1="325.2" x2="506.8" y2="305.7" style="stroke:var(--ink-2);stroke-width:1.8"/>
<line x1="178.3" y1="370.2" x2="168.3" y2="392.2" style="stroke:var(--ink-2);stroke-width:1.8"/>
<text x="164.3" y="408.2" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:650">OH</text>
<line x1="481.7" y1="49.2" x2="491.7" y2="27.2" style="stroke:var(--ink-2);stroke-width:1.8"/>
<text x="495.7" y="21.2" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:650">OH</text>
<text x="124" y="34" text-anchor="end" style="fill:var(--ink);font-size:13px;font-weight:700">5′ end</text>
<text x="148" y="412" text-anchor="end" style="fill:var(--ink);font-size:13px;font-weight:700">3′ end</text>
<text x="512" y="25" style="fill:var(--ink);font-size:13px;font-weight:700">3′ end</text>
<text x="536" y="394" style="fill:var(--ink);font-size:13px;font-weight:700">5′ end</text>
<text x="60" y="54" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">5′</text>
<line x1="60" y1="64" x2="60" y2="380" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g302e-ah)"/>
<text x="60" y="400" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">3′</text>
<text x="620" y="54" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">3′</text>
<line x1="620" y1="380" x2="620" y2="64" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g302e-ah)"/>
<text x="620" y="400" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">5′</text>
<text x="344" y="40" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">hydrogen bonds</text>
<line x1="344" y1="45" x2="344" y2="62" style="stroke:var(--ink-2);stroke-width:1"/>
<polygon points="128,428 136,434 133,443 123,443 120,434" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<text x="142" y="440" style="fill:var(--ink);font-size:12px">deoxyribose</text>
<circle cx="250" cy="436" r="7" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="262" y="440" style="fill:var(--ink);font-size:12px">phosphate</text>
<line x1="350" y1="436" x2="372" y2="436" style="stroke:var(--ink-2);stroke-width:1.6;stroke-dasharray:3 3"/>
<text x="378" y="440" style="fill:var(--ink);font-size:12px">hydrogen bond (A=T: 2, G≡C: 3)</text>
</svg>
<figcaption>Antiparallel strands. The left strand reads 5′ → 3′ from top to bottom; the right strand is upside down and reads 5′ → 3′ from bottom to top. Long base boxes are purines, short ones pyrimidines.</figcaption>
</figure>

<p>Why must the strands be antiparallel? The bases are attached to their sugars at an angle. Only when one strand is "upside down" relative to the other do the pairing edges of the bases meet face to face, with their hydrogen-bonding atoms lined up. In a parallel arrangement the bases could not pair properly. The direction also matters to the cell: the enzymes that copy and read DNA can only move along a strand in one direction, so every process in lessons 3.03 to 3.05 depends on knowing which end is which.</p>
<div class="callout key"><p class="callout-title">On the test</p><ul><li>Always label <strong>both ends of both strands</strong>. If the top strand is 5′ on the left, the bottom strand is 3′ on the left.</li><li>5′ end = <strong>phosphate</strong>; 3′ end = <strong>sugar (–OH)</strong>.</li></ul></div>
<div class="callout tip"><p class="callout-title">Memory trick</p><p>Picture a two-lane highway: the lanes run side by side, but the traffic goes in opposite directions. Or hold your hands flat, palms together, with one hand's fingers pointing up and the other's pointing down.</p></div>

<h3 data-tier="essential">The double helix in numbers</h3>
<p>The ladder in the last figure is only a flattened view. In reality the two backbones twist around each other, like a spiral staircase, into a right-handed <strong>double helix</strong>. The slides give the dimensions of the common form of DNA in cells (called <strong>B-DNA</strong>):</p>
<ul>
<li><strong>Diameter: 2 nm</strong> (constant, because every rung is a purine–pyrimidine pair).</li>
<li><strong>One complete turn: 3.4 nm</strong>, containing <strong>10 base pairs</strong>.</li>
<li><strong>Distance between neighbouring base pairs: 0.34 nm</strong> (3.4 nm ÷ 10).</li>
<li>Because the two backbones are not evenly spaced around the helix, the surface has two alternating grooves: a wide <span class="term">major groove</span> and a narrow <span class="term">minor groove</span>.</li>
</ul>

<figure class="diagram">
<svg viewBox="0 0 640 470" role="img" aria-labelledby="g302f-t g302f-d">
<title id="g302f-t">Dimensions of the DNA double helix</title>
<desc id="g302f-d">Two full turns of a right-handed double helix. Its diameter is 2 nanometres. One complete turn is 3.4 nanometres long and contains 10 base pairs, so neighbouring base pairs are 0.34 nanometres apart. The sugar-phosphate backbones are on the outside and the base pairs form rungs on the inside. The uneven spacing of the two backbones creates a narrow minor groove and a wide major groove. The left strand in the drawing runs 3 prime at the top to 5 prime at the bottom; the right strand runs 5 prime at the top to 3 prime at the bottom.</desc>
<path d="M266.7,64 L267.3,65 L267.8,66 L268.3,67 L268.7,68 L269.1,69 L269.4,70 L269.6,71 L269.8,72 L269.9,73 L270,74 L270,75" style="fill:none;stroke:var(--ink-2);stroke-width:4;stroke-linecap:round;opacity:.45"/>
<path d="M160,168 L160,169 L160.1,170 L160.3,171 L160.5,172 L160.8,173 L161.2,174 L161.6,175 L162,176 L162.6,177 L163.1,178 L163.8,179 L164.5,180 L165.3,181 L166.1,182 L166.9,183 L167.9,184 L168.8,185 L169.9,186 L171,187 L172.1,188 L173.3,189 L174.5,190 L175.8,191 L177.1,192 L178.4,193 L179.8,194 L181.3,195 L182.8,196 L184.3,197 L185.8,198 L187.4,199 L189,200 L190.7,201 L192.3,202 L194,203 L195.8,204 L197.5,205 L199.3,206 L201,207 L202.8,208 L204.6,209 L206.5,210 L208.3,211 L210.1,212 L212,213 L213.8,214 L215.7,215 L217.5,216 L219.4,217 L221.2,218 L223,219 L224.9,220 L226.7,221 L228.5,222 L230.2,223 L232,224 L233.8,225 L235.5,226 L237.2,227 L238.9,228 L240.5,229 L242.1,230 L243.7,231 L245.3,232 L246.8,233 L248.3,234 L249.8,235 L251.2,236 L252.5,237 L253.9,238 L255.2,239 L256.4,240 L257.6,241 L258.7,242 L259.8,243 L260.9,244 L261.9,245 L262.8,246 L263.7,247 L264.5,248 L265.3,249 L266,250 L266.7,251 L267.3,252 L267.8,253 L268.3,254 L268.7,255 L269.1,256 L269.4,257 L269.6,258 L269.8,259 L269.9,260 L270,261 L270,262" style="fill:none;stroke:var(--ink-2);stroke-width:4;stroke-linecap:round;opacity:.45"/>
<path d="M160,355 L160,356 L160.1,357 L160.3,358 L160.5,359 L160.8,360 L161.2,361 L161.6,362 L162,363 L162.6,364 L163.1,365 L163.8,366 L164.5,367 L165.3,368 L166.1,369 L166.9,370 L167.9,371 L168.8,372 L169.9,373 L171,374 L172.1,375 L173.3,376 L174.5,377 L175.8,378 L177.1,379 L178.4,380 L179.8,381 L181.3,382 L182.8,383 L184.3,384 L185.8,385 L187.4,386 L189,387 L190.7,388 L192.3,389 L194,390 L195.8,391 L197.5,392 L199.3,393 L201,394 L202.8,395 L204.6,396 L206.5,397 L208.3,398 L210.1,399 L212,400 L213.8,401 L215.7,402 L217.5,403 L219.4,404 L221.2,405 L223,406 L224.9,407 L226.7,408 L228.5,409 L230.2,410 L232,411 L233.8,412 L235.5,413 L237.2,414 L238.9,415 L240.5,416 L242.1,417 L243.7,418 L245.3,419 L246.8,420 L248.3,421 L249.8,422 L251.2,423 L252.5,424 L253.9,425 L255.2,426 L256.4,427 L257.6,428 L258.7,429 L259.8,430 L260.9,431 L261.9,432 L262.8,433 L263.7,434 L264.5,435 L265.3,436 L266,437 L266.7,438" style="fill:none;stroke:var(--ink-2);stroke-width:4;stroke-linecap:round;opacity:.45"/>
<path d="M163.3,64 L164,65 L164.7,66 L165.5,67 L166.3,68 L167.2,69 L168.1,70 L169.1,71 L170.2,72 L171.3,73 L172.4,74 L173.6,75 L174.8,76 L176.1,77 L177.5,78 L178.8,79 L180.2,80 L181.7,81 L183.2,82 L184.7,83 L186.3,84 L187.9,85 L189.5,86 L191.1,87 L192.8,88 L194.5,89 L196.2,90 L198,91 L199.8,92 L201.5,93 L203.3,94 L205.1,95 L207,96 L208.8,97 L210.6,98 L212.5,99 L214.3,100 L216.2,101 L218,102 L219.9,103 L221.7,104 L223.5,105 L225.4,106 L227.2,107 L229,108 L230.7,109 L232.5,110 L234.2,111 L236,112 L237.7,113 L239.3,114 L241,115 L242.6,116 L244.2,117 L245.7,118 L247.2,119 L248.7,120 L250.2,121 L251.6,122 L252.9,123 L254.2,124 L255.5,125 L256.7,126 L257.9,127 L259,128 L260.1,129 L261.2,130 L262.1,131 L263.1,132 L263.9,133 L264.7,134 L265.5,135 L266.2,136 L266.9,137 L267.4,138 L268,139 L268.4,140 L268.8,141 L269.2,142 L269.5,143 L269.7,144 L269.9,145 L270,146 L270,147 L270,148" style="fill:none;stroke:var(--etc);stroke-width:4;stroke-linecap:round;opacity:.45"/>
<path d="M160,241 L160.1,242 L160.2,243 L160.4,244 L160.6,245 L160.9,246 L161.3,247 L161.7,248 L162.2,249 L162.7,250 L163.3,251 L164,252 L164.7,253 L165.5,254 L166.3,255 L167.2,256 L168.1,257 L169.1,258 L170.2,259 L171.3,260 L172.4,261 L173.6,262 L174.8,263 L176.1,264 L177.5,265 L178.8,266 L180.2,267 L181.7,268 L183.2,269 L184.7,270 L186.3,271 L187.9,272 L189.5,273 L191.1,274 L192.8,275 L194.5,276 L196.2,277 L198,278 L199.8,279 L201.5,280 L203.3,281 L205.1,282 L207,283 L208.8,284 L210.6,285 L212.5,286 L214.3,287 L216.2,288 L218,289 L219.9,290 L221.7,291 L223.5,292 L225.4,293 L227.2,294 L229,295 L230.7,296 L232.5,297 L234.2,298 L236,299 L237.7,300 L239.3,301 L241,302 L242.6,303 L244.2,304 L245.7,305 L247.2,306 L248.7,307 L250.2,308 L251.6,309 L252.9,310 L254.2,311 L255.5,312 L256.7,313 L257.9,314 L259,315 L260.1,316 L261.2,317 L262.1,318 L263.1,319 L263.9,320 L264.7,321 L265.5,322 L266.2,323 L266.9,324 L267.4,325 L268,326 L268.4,327 L268.8,328 L269.2,329 L269.5,330 L269.7,331 L269.9,332 L270,333 L270,334 L270,335" style="fill:none;stroke:var(--etc);stroke-width:4;stroke-linecap:round;opacity:.45"/>
<path d="M160,428 L160.1,429 L160.2,430 L160.4,431 L160.6,432 L160.9,433 L161.3,434 L161.7,435 L162.2,436 L162.7,437 L163.3,438" style="fill:none;stroke:var(--etc);stroke-width:4;stroke-linecap:round;opacity:.45"/>
<line x1="270" y1="73.3" x2="220.8" y2="73.3" style="stroke:var(--leaf);stroke-width:4"/>
<line x1="220.8" y1="73.3" x2="171.7" y2="73.3" style="stroke:var(--proton);stroke-width:4"/>
<line x1="260.6" y1="92" x2="230.2" y2="92" style="stroke:var(--proton);stroke-width:4"/>
<line x1="230.2" y1="92" x2="199.8" y2="92" style="stroke:var(--leaf);stroke-width:4"/>
<line x1="233.8" y1="110.8" x2="233.8" y2="110.8" style="stroke:var(--glyco);stroke-width:4"/>
<line x1="233.8" y1="110.8" x2="233.8" y2="110.8" style="stroke:var(--etc);stroke-width:4"/>
<line x1="199.8" y1="129.4" x2="230.2" y2="129.4" style="stroke:var(--etc);stroke-width:4"/>
<line x1="230.2" y1="129.4" x2="260.6" y2="129.4" style="stroke:var(--glyco);stroke-width:4"/>
<line x1="171.7" y1="148.2" x2="220.8" y2="148.2" style="stroke:var(--etc);stroke-width:4"/>
<line x1="220.8" y1="148.2" x2="270" y2="148.2" style="stroke:var(--glyco);stroke-width:4"/>
<line x1="160" y1="166.8" x2="209.2" y2="166.8" style="stroke:var(--glyco);stroke-width:4"/>
<line x1="209.2" y1="166.8" x2="258.3" y2="166.8" style="stroke:var(--etc);stroke-width:4"/>
<line x1="169.4" y1="185.6" x2="199.8" y2="185.6" style="stroke:var(--proton);stroke-width:4"/>
<line x1="199.8" y1="185.6" x2="230.2" y2="185.6" style="stroke:var(--leaf);stroke-width:4"/>
<line x1="196.2" y1="204.2" x2="196.2" y2="204.2" style="stroke:var(--leaf);stroke-width:4"/>
<line x1="196.2" y1="204.2" x2="196.2" y2="204.2" style="stroke:var(--proton);stroke-width:4"/>
<line x1="230.2" y1="222.9" x2="199.8" y2="222.9" style="stroke:var(--leaf);stroke-width:4"/>
<line x1="199.8" y1="222.9" x2="169.4" y2="222.9" style="stroke:var(--proton);stroke-width:4"/>
<line x1="258.3" y1="241.7" x2="209.2" y2="241.7" style="stroke:var(--glyco);stroke-width:4"/>
<line x1="209.2" y1="241.7" x2="160" y2="241.7" style="stroke:var(--etc);stroke-width:4"/>
<line x1="270" y1="260.4" x2="220.8" y2="260.4" style="stroke:var(--etc);stroke-width:4"/>
<line x1="220.8" y1="260.4" x2="171.7" y2="260.4" style="stroke:var(--glyco);stroke-width:4"/>
<line x1="260.6" y1="279.1" x2="230.2" y2="279.1" style="stroke:var(--proton);stroke-width:4"/>
<line x1="230.2" y1="279.1" x2="199.8" y2="279.1" style="stroke:var(--leaf);stroke-width:4"/>
<line x1="233.8" y1="297.8" x2="233.8" y2="297.8" style="stroke:var(--proton);stroke-width:4"/>
<line x1="233.8" y1="297.8" x2="233.8" y2="297.8" style="stroke:var(--leaf);stroke-width:4"/>
<line x1="199.8" y1="316.4" x2="230.2" y2="316.4" style="stroke:var(--leaf);stroke-width:4"/>
<line x1="230.2" y1="316.4" x2="260.6" y2="316.4" style="stroke:var(--proton);stroke-width:4"/>
<line x1="171.7" y1="335.1" x2="220.8" y2="335.1" style="stroke:var(--etc);stroke-width:4"/>
<line x1="220.8" y1="335.1" x2="270" y2="335.1" style="stroke:var(--glyco);stroke-width:4"/>
<line x1="160" y1="353.9" x2="209.2" y2="353.9" style="stroke:var(--glyco);stroke-width:4"/>
<line x1="209.2" y1="353.9" x2="258.3" y2="353.9" style="stroke:var(--etc);stroke-width:4"/>
<line x1="169.4" y1="372.6" x2="199.8" y2="372.6" style="stroke:var(--glyco);stroke-width:4"/>
<line x1="199.8" y1="372.6" x2="230.2" y2="372.6" style="stroke:var(--etc);stroke-width:4"/>
<line x1="196.2" y1="391.2" x2="196.2" y2="391.2" style="stroke:var(--leaf);stroke-width:4"/>
<line x1="196.2" y1="391.2" x2="196.2" y2="391.2" style="stroke:var(--proton);stroke-width:4"/>
<line x1="230.2" y1="409.9" x2="199.8" y2="409.9" style="stroke:var(--proton);stroke-width:4"/>
<line x1="199.8" y1="409.9" x2="169.4" y2="409.9" style="stroke:var(--leaf);stroke-width:4"/>
<line x1="258.3" y1="428.6" x2="209.2" y2="428.6" style="stroke:var(--etc);stroke-width:4"/>
<line x1="209.2" y1="428.6" x2="160" y2="428.6" style="stroke:var(--glyco);stroke-width:4"/>
<path d="M270,75 L269.9,76 L269.8,77 L269.6,78 L269.3,79 L269,80 L268.6,81 L268.2,82 L267.7,83 L267.2,84 L266.5,85 L265.9,86 L265.1,87 L264.3,88 L263.5,89 L262.6,90 L261.7,91 L260.6,92 L259.6,93 L258.5,94 L257.3,95 L256.1,96 L254.9,97 L253.6,98 L252.2,99 L250.9,100 L249.4,101 L248,102 L246.5,103 L245,104 L243.4,105 L241.8,106 L240.2,107 L238.5,108 L236.8,109 L235.1,110 L233.4,111 L231.6,112 L229.9,113 L228.1,114 L226.3,115 L224.4,116 L222.6,117 L220.8,118 L218.9,119 L217.1,120 L215.3,121 L213.4,122 L211.6,123 L209.7,124 L207.9,125 L206.1,126 L204.2,127 L202.4,128 L200.6,129 L198.9,130 L197.1,131 L195.4,132 L193.7,133 L192,134 L190.3,135 L188.7,136 L187.1,137 L185.5,138 L183.9,139 L182.4,140 L181,141 L179.5,142 L178.1,143 L176.8,144 L175.5,145 L174.2,146 L173,147 L171.8,148 L170.7,149 L169.6,150 L168.6,151 L167.7,152 L166.7,153 L165.9,154 L165.1,155 L164.3,156 L163.6,157 L163,158 L162.4,159 L161.9,160 L161.5,161 L161.1,162 L160.7,163 L160.5,164 L160.3,165 L160.1,166 L160,167 L160,168" style="fill:none;stroke:var(--bg);stroke-width:10;stroke-linecap:round"/>
<path d="M270,75 L269.9,76 L269.8,77 L269.6,78 L269.3,79 L269,80 L268.6,81 L268.2,82 L267.7,83 L267.2,84 L266.5,85 L265.9,86 L265.1,87 L264.3,88 L263.5,89 L262.6,90 L261.7,91 L260.6,92 L259.6,93 L258.5,94 L257.3,95 L256.1,96 L254.9,97 L253.6,98 L252.2,99 L250.9,100 L249.4,101 L248,102 L246.5,103 L245,104 L243.4,105 L241.8,106 L240.2,107 L238.5,108 L236.8,109 L235.1,110 L233.4,111 L231.6,112 L229.9,113 L228.1,114 L226.3,115 L224.4,116 L222.6,117 L220.8,118 L218.9,119 L217.1,120 L215.3,121 L213.4,122 L211.6,123 L209.7,124 L207.9,125 L206.1,126 L204.2,127 L202.4,128 L200.6,129 L198.9,130 L197.1,131 L195.4,132 L193.7,133 L192,134 L190.3,135 L188.7,136 L187.1,137 L185.5,138 L183.9,139 L182.4,140 L181,141 L179.5,142 L178.1,143 L176.8,144 L175.5,145 L174.2,146 L173,147 L171.8,148 L170.7,149 L169.6,150 L168.6,151 L167.7,152 L166.7,153 L165.9,154 L165.1,155 L164.3,156 L163.6,157 L163,158 L162.4,159 L161.9,160 L161.5,161 L161.1,162 L160.7,163 L160.5,164 L160.3,165 L160.1,166 L160,167 L160,168" style="fill:none;stroke:var(--ink-2);stroke-width:6;stroke-linecap:round"/>
<path d="M270,262 L269.9,263 L269.8,264 L269.6,265 L269.3,266 L269,267 L268.6,268 L268.2,269 L267.7,270 L267.2,271 L266.5,272 L265.9,273 L265.1,274 L264.3,275 L263.5,276 L262.6,277 L261.7,278 L260.6,279 L259.6,280 L258.5,281 L257.3,282 L256.1,283 L254.9,284 L253.6,285 L252.2,286 L250.9,287 L249.4,288 L248,289 L246.5,290 L245,291 L243.4,292 L241.8,293 L240.2,294 L238.5,295 L236.8,296 L235.1,297 L233.4,298 L231.6,299 L229.9,300 L228.1,301 L226.3,302 L224.4,303 L222.6,304 L220.8,305 L218.9,306 L217.1,307 L215.3,308 L213.4,309 L211.6,310 L209.7,311 L207.9,312 L206.1,313 L204.2,314 L202.4,315 L200.6,316 L198.9,317 L197.1,318 L195.4,319 L193.7,320 L192,321 L190.3,322 L188.7,323 L187.1,324 L185.5,325 L183.9,326 L182.4,327 L181,328 L179.5,329 L178.1,330 L176.8,331 L175.5,332 L174.2,333 L173,334 L171.8,335 L170.7,336 L169.6,337 L168.6,338 L167.7,339 L166.7,340 L165.9,341 L165.1,342 L164.3,343 L163.6,344 L163,345 L162.4,346 L161.9,347 L161.5,348 L161.1,349 L160.7,350 L160.5,351 L160.3,352 L160.1,353 L160,354 L160,355" style="fill:none;stroke:var(--bg);stroke-width:10;stroke-linecap:round"/>
<path d="M270,262 L269.9,263 L269.8,264 L269.6,265 L269.3,266 L269,267 L268.6,268 L268.2,269 L267.7,270 L267.2,271 L266.5,272 L265.9,273 L265.1,274 L264.3,275 L263.5,276 L262.6,277 L261.7,278 L260.6,279 L259.6,280 L258.5,281 L257.3,282 L256.1,283 L254.9,284 L253.6,285 L252.2,286 L250.9,287 L249.4,288 L248,289 L246.5,290 L245,291 L243.4,292 L241.8,293 L240.2,294 L238.5,295 L236.8,296 L235.1,297 L233.4,298 L231.6,299 L229.9,300 L228.1,301 L226.3,302 L224.4,303 L222.6,304 L220.8,305 L218.9,306 L217.1,307 L215.3,308 L213.4,309 L211.6,310 L209.7,311 L207.9,312 L206.1,313 L204.2,314 L202.4,315 L200.6,316 L198.9,317 L197.1,318 L195.4,319 L193.7,320 L192,321 L190.3,322 L188.7,323 L187.1,324 L185.5,325 L183.9,326 L182.4,327 L181,328 L179.5,329 L178.1,330 L176.8,331 L175.5,332 L174.2,333 L173,334 L171.8,335 L170.7,336 L169.6,337 L168.6,338 L167.7,339 L166.7,340 L165.9,341 L165.1,342 L164.3,343 L163.6,344 L163,345 L162.4,346 L161.9,347 L161.5,348 L161.1,349 L160.7,350 L160.5,351 L160.3,352 L160.1,353 L160,354 L160,355" style="fill:none;stroke:var(--ink-2);stroke-width:6;stroke-linecap:round"/>
<path d="M270,148 L269.9,149 L269.7,150 L269.5,151 L269.3,152 L268.9,153 L268.5,154 L268.1,155 L267.6,156 L267,157 L266.4,158 L265.7,159 L264.9,160 L264.1,161 L263.3,162 L262.3,163 L261.4,164 L260.4,165 L259.3,166 L258.2,167 L257,168 L255.8,169 L254.5,170 L253.2,171 L251.9,172 L250.5,173 L249,174 L247.6,175 L246.1,176 L244.5,177 L242.9,178 L241.3,179 L239.7,180 L238,181 L236.3,182 L234.6,183 L232.9,184 L231.1,185 L229.4,186 L227.6,187 L225.8,188 L223.9,189 L222.1,190 L220.3,191 L218.4,192 L216.6,193 L214.7,194 L212.9,195 L211.1,196 L209.2,197 L207.4,198 L205.6,199 L203.7,200 L201.9,201 L200.1,202 L198.4,203 L196.6,204 L194.9,205 L193.2,206 L191.5,207 L189.8,208 L188.2,209 L186.6,210 L185,211 L183.5,212 L182,213 L180.6,214 L179.1,215 L177.8,216 L176.4,217 L175.1,218 L173.9,219 L172.7,220 L171.5,221 L170.4,222 L169.4,223 L168.3,224 L167.4,225 L166.5,226 L165.7,227 L164.9,228 L164.1,229 L163.5,230 L162.8,231 L162.3,232 L161.8,233 L161.4,234 L161,235 L160.7,236 L160.4,237 L160.2,238 L160.1,239 L160,240 L160,241" style="fill:none;stroke:var(--bg);stroke-width:10;stroke-linecap:round"/>
<path d="M270,148 L269.9,149 L269.7,150 L269.5,151 L269.3,152 L268.9,153 L268.5,154 L268.1,155 L267.6,156 L267,157 L266.4,158 L265.7,159 L264.9,160 L264.1,161 L263.3,162 L262.3,163 L261.4,164 L260.4,165 L259.3,166 L258.2,167 L257,168 L255.8,169 L254.5,170 L253.2,171 L251.9,172 L250.5,173 L249,174 L247.6,175 L246.1,176 L244.5,177 L242.9,178 L241.3,179 L239.7,180 L238,181 L236.3,182 L234.6,183 L232.9,184 L231.1,185 L229.4,186 L227.6,187 L225.8,188 L223.9,189 L222.1,190 L220.3,191 L218.4,192 L216.6,193 L214.7,194 L212.9,195 L211.1,196 L209.2,197 L207.4,198 L205.6,199 L203.7,200 L201.9,201 L200.1,202 L198.4,203 L196.6,204 L194.9,205 L193.2,206 L191.5,207 L189.8,208 L188.2,209 L186.6,210 L185,211 L183.5,212 L182,213 L180.6,214 L179.1,215 L177.8,216 L176.4,217 L175.1,218 L173.9,219 L172.7,220 L171.5,221 L170.4,222 L169.4,223 L168.3,224 L167.4,225 L166.5,226 L165.7,227 L164.9,228 L164.1,229 L163.5,230 L162.8,231 L162.3,232 L161.8,233 L161.4,234 L161,235 L160.7,236 L160.4,237 L160.2,238 L160.1,239 L160,240 L160,241" style="fill:none;stroke:var(--etc);stroke-width:6;stroke-linecap:round"/>
<path d="M270,335 L269.9,336 L269.7,337 L269.5,338 L269.3,339 L268.9,340 L268.5,341 L268.1,342 L267.6,343 L267,344 L266.4,345 L265.7,346 L264.9,347 L264.1,348 L263.3,349 L262.3,350 L261.4,351 L260.4,352 L259.3,353 L258.2,354 L257,355 L255.8,356 L254.5,357 L253.2,358 L251.9,359 L250.5,360 L249,361 L247.6,362 L246.1,363 L244.5,364 L242.9,365 L241.3,366 L239.7,367 L238,368 L236.3,369 L234.6,370 L232.9,371 L231.1,372 L229.4,373 L227.6,374 L225.8,375 L223.9,376 L222.1,377 L220.3,378 L218.4,379 L216.6,380 L214.7,381 L212.9,382 L211.1,383 L209.2,384 L207.4,385 L205.6,386 L203.7,387 L201.9,388 L200.1,389 L198.4,390 L196.6,391 L194.9,392 L193.2,393 L191.5,394 L189.8,395 L188.2,396 L186.6,397 L185,398 L183.5,399 L182,400 L180.6,401 L179.1,402 L177.8,403 L176.4,404 L175.1,405 L173.9,406 L172.7,407 L171.5,408 L170.4,409 L169.4,410 L168.3,411 L167.4,412 L166.5,413 L165.7,414 L164.9,415 L164.1,416 L163.5,417 L162.8,418 L162.3,419 L161.8,420 L161.4,421 L161,422 L160.7,423 L160.4,424 L160.2,425 L160.1,426 L160,427 L160,428" style="fill:none;stroke:var(--bg);stroke-width:10;stroke-linecap:round"/>
<path d="M270,335 L269.9,336 L269.7,337 L269.5,338 L269.3,339 L268.9,340 L268.5,341 L268.1,342 L267.6,343 L267,344 L266.4,345 L265.7,346 L264.9,347 L264.1,348 L263.3,349 L262.3,350 L261.4,351 L260.4,352 L259.3,353 L258.2,354 L257,355 L255.8,356 L254.5,357 L253.2,358 L251.9,359 L250.5,360 L249,361 L247.6,362 L246.1,363 L244.5,364 L242.9,365 L241.3,366 L239.7,367 L238,368 L236.3,369 L234.6,370 L232.9,371 L231.1,372 L229.4,373 L227.6,374 L225.8,375 L223.9,376 L222.1,377 L220.3,378 L218.4,379 L216.6,380 L214.7,381 L212.9,382 L211.1,383 L209.2,384 L207.4,385 L205.6,386 L203.7,387 L201.9,388 L200.1,389 L198.4,390 L196.6,391 L194.9,392 L193.2,393 L191.5,394 L189.8,395 L188.2,396 L186.6,397 L185,398 L183.5,399 L182,400 L180.6,401 L179.1,402 L177.8,403 L176.4,404 L175.1,405 L173.9,406 L172.7,407 L171.5,408 L170.4,409 L169.4,410 L168.3,411 L167.4,412 L166.5,413 L165.7,414 L164.9,415 L164.1,416 L163.5,417 L162.8,418 L162.3,419 L161.8,420 L161.4,421 L161,422 L160.7,423 L160.4,424 L160.2,425 L160.1,426 L160,427 L160,428" style="fill:none;stroke:var(--etc);stroke-width:6;stroke-linecap:round"/>
<path d="M160,27 V39 M160,33 H270 M270,27 V39" style="fill:none;stroke:var(--ink);stroke-width:1.3"/>
<text x="215" y="24" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">2 nm</text>
<g style="fill:var(--ink);font-size:13px;font-weight:700">
<text x="284" y="68">5′</text><text x="146" y="68" text-anchor="end">3′</text>
<text x="284" y="446">3′</text><text x="146" y="446" text-anchor="end">5′</text>
</g>
<path d="M306,64 H318 M312,64 V251 M306,251 H318" style="fill:none;stroke:var(--ink);stroke-width:1.3"/>
<text x="326" y="150" style="fill:var(--ink);font-size:13px;font-weight:700">3.4 nm</text>
<text x="326" y="166" style="fill:var(--ink-2);font-size:12px">one full turn</text>
<text x="326" y="182" style="fill:var(--ink-2);font-size:12px">= 10 base pairs</text>
<line x1="276" y1="267" x2="321" y2="271" style="stroke:var(--ink-2);stroke-width:1"/>
<text x="326" y="275" style="fill:var(--ink);font-size:13px;font-weight:700">Sugar–phosphate backbone</text>
<text x="326" y="291" style="fill:var(--ink-2);font-size:12px">on the outside</text>
<g style="stroke:var(--ink-2);stroke-width:1;stroke-dasharray:2 2"><line x1="266" y1="316.4" x2="308" y2="316.4"/><line x1="277" y1="335.1" x2="308" y2="335.1"/></g>
<path d="M308,316.4 H316 V335.1 H308" style="fill:none;stroke:var(--ink);stroke-width:1.3"/>
<text x="326" y="324" style="fill:var(--ink);font-size:13px;font-weight:700">0.34 nm</text>
<text x="326" y="340" style="fill:var(--ink-2);font-size:12px">between base pairs</text>
<line x1="200" y1="409.9" x2="321" y2="409.9" style="stroke:var(--ink-2);stroke-width:1"/>
<text x="326" y="414" style="fill:var(--ink);font-size:13px;font-weight:700">Base pairs on the inside</text>
<text x="326" y="430" style="fill:var(--ink-2);font-size:12px">(A–T or G–C rungs)</text>
<line x1="154" y1="205" x2="172" y2="205" style="stroke:var(--ink-2);stroke-width:1"/>
<text x="150" y="209" text-anchor="end" style="fill:var(--ink);font-size:13px;font-weight:700">Minor groove</text>
<line x1="154" y1="298" x2="174" y2="298" style="stroke:var(--ink-2);stroke-width:1"/>
<text x="150" y="302" text-anchor="end" style="fill:var(--ink);font-size:13px;font-weight:700">Major groove</text>
<g style="fill:var(--ink-2);font-size:12px">
<text x="476" y="64">Base colours:</text>
</g>
<g style="font-size:12px;font-weight:700"><text x="476" y="82" style="fill:var(--leaf)">A</text><text x="490" y="82" style="fill:var(--ink-2)">pairs with</text><text x="552" y="82" style="fill:var(--proton)">T</text><text x="476" y="100" style="fill:var(--glyco)">G</text><text x="490" y="100" style="fill:var(--ink-2)">pairs with</text><text x="552" y="100" style="fill:var(--etc)">C</text></g>
</svg>
<figcaption>Two turns of B-DNA drawn to scale (1 nm = 55 px). The front backbones are drawn thick and the back ones faded; each rung is a base pair, coloured by its two bases.</figcaption>
</figure>

<div class="callout teacher"><p class="callout-title">From the slides</p><p>The dimensions slide (2 nm wide, 3.4 nm per turn, 0.34 nm between base pairs, major and minor grooves, purines and pyrimidines labelled on each rung) is marked "<strong>WATCH THIS!!!</strong>", pointing to a video on the structure of DNA. The slide before it labels the parts of the helix: sugar–phosphate frame, deoxyribose sugar, phosphate group, nitrogenous bases, covalent bonds (in the backbone) and hydrogen bonds (between the bases).</p></div>
<p data-tier="likely">The grooves matter because they expose the edges of the bases. Proteins that need to recognize a particular DNA sequence, such as the transcription factors in <a href="#/lesson/3.04">lesson 3.04</a> and the repressors in <a href="#/lesson/3.07">lesson 3.07</a>, slot into the major groove and "read" the bases from the outside without having to unzip the helix.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>3.4 nm is the length of a whole <strong>turn</strong>; 0.34 nm is the distance between <strong>neighbouring base pairs</strong>. Don't swap them. A quick check: 10 base pairs × 0.34 nm = 3.4 nm.</p></div>
<p data-tier="likely">You can use these numbers to estimate lengths. A gene of 1,500 base pairs is 1,500 × 0.34 nm = 510 nm long, about half a micrometre. All the DNA in one human body cell (about 6.4 billion base pairs) would stretch about <strong>2 m</strong> if laid end to end, yet it fits in a nucleus about 6 µm across. That packing problem is the subject of a later section.</p>
<p data-tier="extra">Careful modern measurements give about 10.5 base pairs per turn for DNA in solution, so a turn is closer to 3.5–3.6 nm. Use the slide values (10 bp, 3.4 nm) on the test. Other forms of DNA exist too: the A form Franklin studied is wider and shorter, and Z-DNA is a left-handed helix that forms in certain sequences.</p>

<h3 data-tier="essential">What holds the double helix together</h3>
<p>DNA has to be very stable (it carries the cell's instructions for its whole life) and yet easy to open (it must be unzipped to be copied or read). Its structure manages both:</p>
<ul>
<li><strong>Many hydrogen bonds.</strong> Each hydrogen bond between bases is weak and easy to break, which lets enzymes separate the strands when they need to. But there are millions of them along the molecule (2 per A–T pair, 3 per G–C pair), and together they hold the strands firmly. This is the slide's point: <strong>the large number of hydrogen bonds between DNA strands accounts for its structural stability.</strong></li>
<li><strong>Strong covalent backbones.</strong> The phosphodiester bonds in each strand are never broken when the helix is opened, so the base sequence stays intact.</li>
<li data-tier="likely"><strong>Base stacking.</strong> The flat bases are stacked on top of each other inside the helix, like a pile of coins, away from the surrounding water. Attractions between neighbouring stacked bases add a great deal of stability, in fact more than the hydrogen bonds do.</li>
<li data-tier="likely"><strong>Water-friendly outside, water-avoiding inside.</strong> The charged sugar–phosphate backbones face the water; the less polar bases are tucked away inside.</li>
</ul>
<div class="callout key"><p class="callout-title">On the test</p><p>Explain stability with <strong>numbers</strong>: weak hydrogen bonds individually, but huge numbers of them together, plus strong covalent bonds in the backbone. If asked which of two DNA samples is more stable, choose the one with more G–C pairs, and say why (3 hydrogen bonds vs 2).</p></div>
<h4 data-tier="likely">GC content and melting</h4>
<p data-tier="likely">Heating DNA to about 90–95 °C breaks the hydrogen bonds and separates the strands; this is called <strong>denaturation</strong> or "melting." Because each G–C pair has three hydrogen bonds (and stacks more strongly), DNA with a <strong>higher percentage of G and C</strong> needs a <strong>higher temperature</strong> to separate. Conversely, A–T-rich regions open most easily, and that is exactly where cells start unzipping their DNA for replication and transcription.</p>

<h3 data-tier="essential">Writing a complementary strand</h3>
<p>Because of complementary base pairing and antiparallel strands, one strand always tells you the other. Follow three steps:</p>
<ol class="steps">
<li><p class="step-head">Copy the end labels, flipped</p><p>Write the new strand underneath, with its ends labelled the opposite way: under a 5′ end, write 3′; under a 3′ end, write 5′.</p></li>
<li><p class="step-head">Pair every base</p><p>A ↔ T and G ↔ C. Work one base at a time; don't skip or reverse anything.</p></li>
<li><p class="step-head">Rewrite 5′ → 3′ if asked</p><p>Sequences are normally written 5′ → 3′. To do that, read your new strand backwards.</p></li>
</ol>
<p><strong>Review question 4:</strong> write the complementary strand of <span class="seq">5′-ATGCCTTA-3′</span>, showing directionality.</p>
<div class="eq"><span class="seq">5′-<span class="nt-A">A</span><span class="nt-T">T</span><span class="nt-G">G</span><span class="nt-C">C</span><span class="nt-C">C</span><span class="nt-T">T</span><span class="nt-T">T</span><span class="nt-A">A</span>-3′</span><br><span class="seq">3′-<span class="nt-T">T</span><span class="nt-A">A</span><span class="nt-C">C</span><span class="nt-G">G</span><span class="nt-G">G</span><span class="nt-A">A</span><span class="nt-A">A</span><span class="nt-T">T</span>-5′</span></div>
<p>The complementary strand is <span class="seq">3′-TACGGAAT-5′</span>. Written in the standard 5′ → 3′ direction, the same strand is <span class="seq">5′-TAAGGCAT-3′</span>. Both answers are correct as long as the ends are labelled; an unlabelled "TACGGAAT" is not.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Three errors cost marks here. (1) Leaving off the 5′ and 3′ labels. (2) Labelling both strands 5′ on the left, which makes them parallel. (3) Writing the complement 5′ → 3′ but forgetting to reverse it: <span class="seq">5′-TACGGAAT-3′</span> is a <em>different</em> sequence from the correct <span class="seq">5′-TAAGGCAT-3′</span>.</p></div>
<p>Try another: the complement of <span class="seq">5′-GGATCCA-3′</span> is <span class="seq">3′-CCTAGGT-5′</span>, or <span class="seq">5′-TGGATCC-3′</span>.</p>
<p data-tier="likely">Notice something about <span class="seq">GGATCC</span> in the middle of that sequence: its complement, read 5′ → 3′, is also GGATCC. Sequences like this are called <strong>palindromes</strong>, and many restriction enzymes (the DNA "scissors" used in biotechnology) cut DNA at palindromic sites.</p>

<h3 data-tier="essential">Chargaff's rules: base percentages</h3>
<p>In double-stranded DNA every A is paired with a T and every G with a C, so <strong>%A = %T</strong> and <strong>%G = %C</strong> (Chargaff's rules, lesson 3.01). Given one base, you can calculate all four.</p>
<p><strong>Review question 1:</strong> a molecule of DNA contains <strong>20% thymine</strong>. Calculate the percentage of adenine, guanine and cytosine.</p>
<ol class="steps">
<li><p class="step-head">Partner first</p><p>A pairs with T, so <strong>A = 20%</strong>.</p></li>
<li><p class="step-head">Subtract the pair</p><p>A + T = 40%, so G + C = 100% − 40% = 60%.</p></li>
<li><p class="step-head">Split equally</p><p>G = C, so <strong>G = 30%</strong> and <strong>C = 30%</strong>.</p></li>
<li><p class="step-head">Check</p><p>20 + 20 + 30 + 30 = 100%; purines (A + G = 50%) = pyrimidines (T + C = 50%).</p></li>
</ol>
<p>Two more for practice: a sample with <strong>35% guanine</strong> has 35% C, and the remaining 30% splits into 15% A and 15% T. A sample with <strong>12% cytosine</strong> has 12% G, and 76% left over gives 38% A and 38% T.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Don't divide (100 − 20) by 3 or by 2 straight away. Account for the known base's <strong>partner</strong> first, then split what remains between the other two bases. And always check that your four answers add up to 100%.</p></div>
<p data-tier="likely">These rules apply only to <strong>double-stranded DNA</strong>. A single strand, or a molecule of RNA, has no partner strand, so its A does not have to equal its T (or U). If a question gives the composition of one strand and asks about the other strand, use pairing: the other strand's %A equals this strand's %T, and so on.</p>

<h3 data-tier="likely">Packing DNA into chromosomes</h3>
<p>A human body cell holds about 2 m of DNA, divided among <strong>46 chromosomes</strong> (each chromosome is one very long DNA molecule), and all of it must fit inside a nucleus a few micrometres across. On top of that, it has to stay organized enough to be copied and read. Eukaryotic cells solve this by winding their DNA around proteins in several levels of coiling. DNA together with its packing proteins is called <span class="term">chromatin</span>.</p>
<ol>
<li><strong>Nucleosomes.</strong> DNA wraps (about 1.7 times, roughly 150 base pairs) around a core of eight <span class="term">histone</span> proteins (two each of four types). The result looks like <strong>beads on a string</strong>, about 10 nm wide, with short stretches of "linker" DNA between the beads. Histones are positively charged (rich in the basic amino acids lysine and arginine), so they hold the negatively charged DNA tightly.</li>
<li><strong>Chromatin fibre.</strong> The string of nucleosomes coils into a thicker fibre, about 30 nm wide (the textbook model).</li>
<li><strong>Looped domains.</strong> The fibre forms loops attached to a protein scaffold, about 300 nm wide.</li>
<li><strong>Metaphase chromosome.</strong> Before a cell divides, the loops are folded and compacted further into the thick, X-shaped chromosomes you see under a microscope (two identical sister chromatids joined at the centromere, about 1400 nm wide).</li>
</ol>

<figure class="diagram">
<svg viewBox="0 0 740 286" role="img" aria-labelledby="g302g-t g302g-d">
<title id="g302g-t">Levels of DNA packing in a eukaryotic chromosome</title>
<desc id="g302g-d">Five levels from left to right. The DNA double helix, 2 nanometres wide, wraps around cores of eight histone proteins to form nucleosomes, like beads on a string about 10 nanometres wide. The nucleosomes coil into a chromatin fibre about 30 nanometres wide. The fibre forms looped domains attached to a protein scaffold, about 300 nanometres wide. Further folding gives a metaphase chromosome of two sister chromatids, about 1400 nanometres wide.</desc>
<defs><marker id="g302g-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker></defs>
<!-- 1 double helix -->
<path d="M60,70 C60,80 80,80 80,90 S60,100 60,110 S80,120 80,130 S60,140 60,150 S80,160 80,170 S60,180 60,190" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<path d="M80,70 C80,80 60,80 60,90 S80,100 80,110 S60,120 60,130 S80,140 80,150 S60,160 60,170 S80,180 80,190" style="fill:none;stroke:var(--etc);stroke-width:2.5"/>
<g style="stroke:var(--line);stroke-width:2"><line x1="62" y1="90" x2="78" y2="90"/><line x1="62" y1="110" x2="78" y2="110"/><line x1="62" y1="130" x2="78" y2="130"/><line x1="62" y1="150" x2="78" y2="150"/><line x1="62" y1="170" x2="78" y2="170"/></g>
<line x1="98" y1="130" x2="158" y2="130" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g302g-ah)"/>
<!-- 2 nucleosomes -->
<path d="M205,52 V68 M205,192 V208" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<path d="M216,97 C228,104 182,108 194,116 M216,142 C228,149 182,153 194,161" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<g style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"><circle cx="205" cy="84" r="12"/><circle cx="205" cy="129" r="12"/><circle cx="205" cy="174" r="12"/></g>
<g style="fill:none;stroke:var(--ink-2);stroke-width:2.5"><circle cx="205" cy="84" r="15.5"/><circle cx="205" cy="129" r="15.5"/><circle cx="205" cy="174" r="15.5"/></g>
<line x1="238" y1="130" x2="298" y2="130" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g302g-ah)"/>
<!-- 3 30 nm fibre -->
<rect x="324" y="58" width="52" height="144" rx="22" style="fill:none;stroke:var(--line);stroke-width:1.5;stroke-dasharray:4 3"/>
<g style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5">
<circle cx="340" cy="72" r="9"/><circle cx="360" cy="84" r="9"/><circle cx="340" cy="96" r="9"/><circle cx="360" cy="108" r="9"/><circle cx="340" cy="120" r="9"/><circle cx="360" cy="132" r="9"/><circle cx="340" cy="144" r="9"/><circle cx="360" cy="156" r="9"/><circle cx="340" cy="168" r="9"/><circle cx="360" cy="180" r="9"/><circle cx="340" cy="190" r="8"/>
</g>
<line x1="388" y1="130" x2="446" y2="130" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g302g-ah)"/>
<!-- 4 looped domains -->
<line x1="500" y1="58" x2="500" y2="202" style="stroke:var(--ink-2);stroke-width:3;stroke-dasharray:6 3"/>
<g style="fill:none;stroke:var(--glyco);stroke-width:4;stroke-linecap:round">
<path d="M500,64 C462,58 460,94 500,90"/><path d="M500,98 C462,92 460,128 500,124"/><path d="M500,134 C462,128 460,164 500,160"/><path d="M500,168 C462,162 460,198 500,194"/>
<path d="M500,64 C538,58 540,94 500,90"/><path d="M500,98 C538,92 540,128 500,124"/><path d="M500,134 C538,128 540,164 500,160"/><path d="M500,168 C538,162 540,198 500,194"/>
</g>
<line x1="552" y1="130" x2="610" y2="130" style="stroke:var(--ink-2);stroke-width:2" marker-end="url(#g302g-ah)"/>
<!-- 5 chromosome -->
<g style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:2">
<rect x="634" y="58" width="24" height="66" rx="12"/><rect x="634" y="132" width="24" height="70" rx="12"/>
<rect x="664" y="58" width="24" height="66" rx="12"/><rect x="664" y="132" width="24" height="70" rx="12"/>
</g>
<rect x="652" y="122" width="18" height="12" rx="5" style="fill:var(--glyco);stroke:none"/>
<g text-anchor="middle" style="fill:var(--ink);font-size:12.5px;font-weight:700">
<text x="70" y="232">Double helix</text><text x="205" y="232">Nucleosomes</text><text x="350" y="232">Chromatin fibre</text><text x="500" y="232">Looped domains</text><text x="661" y="232">Metaphase</text><text x="661" y="248">chromosome</text>
</g>
<g text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">
<text x="70" y="248">2 nm</text><text x="205" y="248">DNA around histones</text><text x="205" y="264">“beads on a string,” 10 nm</text><text x="350" y="248">30 nm</text><text x="500" y="248">on a scaffold, 300 nm</text><text x="661" y="264">1400 nm</text>
</g>
</svg>
<figcaption>Levels of packing (sizes are approximate widths). Amber beads are histone cores with DNA (grey) wrapped around them. Each level coils or folds the one before it; the metaphase chromosome is only seen in dividing cells.</figcaption>
</figure>

<p>Packing is not just storage. Tightly packed chromatin is hard for enzymes to reach, so the genes inside it are mostly switched off, while loosely packed regions are where active genes are read. Changing how tightly DNA is packed is one way eukaryotic cells control their genes (<a href="#/lesson/3.07">lesson 3.07</a>).</p>
<p data-tier="extra">Loosely packed, active chromatin is called <strong>euchromatin</strong>; densely packed, mostly silent chromatin is <strong>heterochromatin</strong>. Chemical tags on histones (such as acetyl groups, which loosen packing) and on DNA (methyl groups on cytosines, which tighten it) are part of <strong>epigenetics</strong>: changes in gene activity that do not change the base sequence.</p>
<div class="compare"><div><h4>Eukaryotic DNA</h4><ul><li>Several <strong>linear</strong> chromosomes</li><li>Inside a nucleus</li><li>Wrapped around <strong>histones</strong></li><li>Has <strong>telomeres</strong> at each end</li></ul></div><div><h4>Prokaryotic DNA</h4><ul><li>Usually one <strong>circular</strong> chromosome (plus small plasmids)</li><li>In the nucleoid region (no nucleus)</li><li>No histones; compacted by supercoiling and other proteins</li><li>No ends, so no telomeres</li></ul></div></div>

<h3 data-tier="essential">Telomeres: protective caps</h3>
<p>Linear chromosomes have a weak spot: their ends. The cell's DNA-repair systems are designed to find broken DNA, and a bare chromosome end looks just like a break. The ends are also slowly worn down every time the DNA is copied (next section). Eukaryotic chromosomes protect their ends with <span class="term">telomeres</span>.</p>
<ul>
<li>A telomere is a <strong>repeating 6-base-pair sequence at the end of a chromosome: 5′-TTAGGG-3′</strong> (in humans and other vertebrates), repeated hundreds to thousands of times. In a newborn, each telomere is roughly 10,000–15,000 base pairs long.</li>
<li>The repeats contain <strong>no genes</strong>. They are a buffer that can be lost without losing any instructions.</li>
<li><strong>Proteins bind to the telomere to form a protective cap.</strong> The cap complex is called <strong>shelterin</strong>.</li>
</ul>
<p>The two strands at a telomere are not the same length. The G-rich strand (TTAGGG, running 5′ → 3′ toward the end of the chromosome) is longer, leaving a single-stranded <strong>3′ overhang</strong>. That overhang folds back and tucks into the double-stranded part of the telomere, forming a loop called the <strong>T-loop</strong>, which hides the end. Shelterin proteins hold the loop in place.</p>

<figure class="diagram">
<svg viewBox="0 0 720 300" role="img" aria-labelledby="g302h-t g302h-d">
<title id="g302h-t">The telomere cap: 3 prime overhang, T-loop and shelterin</title>
<desc id="g302h-d">Panel A shows the end of a chromosome. The G-rich strand, made of TTAGGG repeats, runs 5 prime to 3 prime toward the end and extends past the C-rich strand, leaving a single-stranded 3 prime overhang. Panel B shows the cap. The double-stranded telomere loops back on itself to form a T-loop, and the single-stranded 3 prime overhang tucks into the double-stranded region upstream, forming a small D-loop. Shelterin proteins hold the structure together: TRF1 and TRF2 bind the double-stranded repeats, POT1 binds the single-stranded end, and TIN2, TPP1 and RAP1 link the proteins.</desc>
<text x="20" y="24" style="fill:var(--ink);font-size:13px;font-weight:700">A. The end of a chromosome</text>
<line x1="40" y1="64" x2="600" y2="64" style="stroke:var(--glyco);stroke-width:4"/>
<line x1="40" y1="82" x2="480" y2="82" style="stroke:var(--ink-2);stroke-width:4"/>
<g style="fill:var(--ink);font-size:13px;font-weight:700"><text x="34" y="68" text-anchor="end">5′</text><text x="34" y="86" text-anchor="end">3′</text><text x="606" y="68">3′</text><text x="486" y="86">5′</text></g>
<text x="170" y="54" style="fill:var(--glyco);font-size:12px;font-weight:650">G-rich strand: TTAGGG TTAGGG TTAGGG …</text>
<text x="170" y="100" style="fill:var(--ink-2);font-size:12px">C-rich strand: AATCCC AATCCC AATCCC …</text>
<path d="M482,42 V48 H600 V42" style="fill:none;stroke:var(--ink-2);stroke-width:1.2"/>
<text x="541" y="36" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:650">3′ overhang</text>
<text x="541" y="100" text-anchor="middle" style="fill:var(--ink-2);font-size:11.5px">(single-stranded)</text>
<text x="40" y="118" style="fill:var(--ink-2);font-size:11.5px">← toward the genes</text>
<text x="20" y="148" style="fill:var(--ink);font-size:13px;font-weight:700">B. The cap: a T-loop held by shelterin</text>
<path d="M40,252 L430,252 A44,44 0 0 0 430,164 L300,164 C258,164 244,192 262,214" style="fill:none;stroke:var(--ink-2);stroke-width:12"/>
<path d="M40,252 L430,252 A44,44 0 0 0 430,164 L300,164 C258,164 244,192 262,214" style="fill:none;stroke:var(--bg);stroke-width:5"/>
<path d="M262,214 C270,230 250,250 228,252 L180,252" style="fill:none;stroke:var(--glyco);stroke-width:3"/>
<g style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"><ellipse cx="100" cy="252" rx="15" ry="10"/><ellipse cx="340" cy="252" rx="15" ry="10"/><ellipse cx="370" cy="164" rx="15" ry="10"/></g>
<g style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:1.5"><circle cx="100" cy="236" r="6"/><circle cx="340" cy="236" r="6"/><circle cx="370" cy="180" r="6"/></g>
<ellipse cx="258" cy="228" rx="10" ry="7" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="380" y="212" text-anchor="middle" style="fill:var(--ink);font-size:12.5px;font-weight:700">T-loop</text>
<text x="205" y="280" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:650">D-loop</text>
<line x1="205" y1="268" x2="205" y2="258" style="stroke:var(--ink-2);stroke-width:1"/>
<text x="40" y="280" style="fill:var(--ink-2);font-size:11.5px">← genes</text>
<ellipse cx="508" cy="186" rx="10" ry="7" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<text x="524" y="190" style="fill:var(--ink);font-size:12px;font-weight:700">TRF1, TRF2</text>
<text x="524" y="205" style="fill:var(--ink-2);font-size:11px">bind the double-stranded repeats</text>
<circle cx="508" cy="226" r="6" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:1.5"/>
<text x="524" y="230" style="fill:var(--ink);font-size:12px;font-weight:700">TIN2, TPP1, RAP1</text>
<text x="524" y="245" style="fill:var(--ink-2);font-size:11px">link the cap proteins together</text>
<ellipse cx="508" cy="266" rx="10" ry="7" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="524" y="270" style="fill:var(--ink);font-size:12px;font-weight:700">POT1</text>
<text x="524" y="285" style="fill:var(--ink-2);font-size:11px">binds the single-stranded end</text>
</svg>
<figcaption>(A) The telomere's G-rich strand is longer, leaving a 3′ overhang. (B) The overhang (amber) tucks back into the double-stranded repeats, forming a T-loop with a small D-loop, and the six shelterin proteins hold it shut, so the end is never mistaken for broken DNA.</figcaption>
</figure>

<div class="callout teacher"><p class="callout-title">From the slides</p><p>"Repeating 6-base pair sequence at ends of chromosomes (<strong>5′-TTAGGG-3′</strong>)" and "<strong>Proteins bind to the telomere to form a protective cap.</strong>" The cap slide shows the T-loop and D-loop and the six cap proteins, labelled with their gene names (TERF1, TERF2, TINF2, TERF2IP, TPP1, POT1; TERF2IP is the gene for RAP1).</p></div>
<p>The cap has three jobs: it stops the cell's repair enzymes from treating the end as a break, it stops chromosome ends from being joined to each other, and it protects the end from being chewed away by enzymes that digest DNA.</p>
<div class="callout warn"><p class="callout-title">Common mistake</p><p>Telomeres do <strong>not</strong> contain genes and are not "the gene for ageing." They are non-coding repeats whose job is to protect the genes further in. Also note the direction: the repeat is <strong>5′-TTAGGG-3′</strong> on the strand that runs 5′ → 3′ toward the chromosome end; its partner strand reads 3′-AATCCC-5′.</p></div>

<h3 data-tier="essential">Telomeres shorten with each division</h3>
<p>Every time a chromosome is copied, its telomeres get a little shorter. The reason is the <strong>end-replication problem</strong>: DNA polymerase can only add nucleotides to an existing 3′ end, and the short RNA primer it needs to get started cannot be replaced at the very tip of a linear chromosome. A little DNA (roughly 50–200 base pairs in human cells) is lost from each end in every round (you'll see exactly why in <a href="#/lesson/3.03">lesson 3.03</a>). Telomeres absorb that loss so the genes don't have to.</p>

<figure class="diagram stepper">
<svg viewBox="0 0 720 330" role="img" aria-labelledby="g302i-t g302i-d">
<title id="g302i-t">Telomeres shorten with each cell division</title>
<desc id="g302i-d">A chromosome drawn as a bar with genes in the middle and telomeres at both ends, each with a protective cap. In a young cell the telomeres are long. After each division a little is lost from each end. After about 50 divisions the telomeres are short. When they are used up, the cap can no longer form, the unprotected ends look like broken DNA, and the cell stops dividing: it either becomes inactive, called senescence, or destroys itself, called apoptosis. In germ cells, stem cells and most cancer cells, the enzyme telomerase uses its own RNA template to add TTAGGG repeats back, so the telomeres stay long.</desc>
<rect x="230" y="84" width="260" height="20" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
<g style="stroke:var(--etc);stroke-width:1.2"><line x1="262" y1="84" x2="262" y2="104"/><line x1="296" y1="84" x2="296" y2="104"/><line x1="424" y1="84" x2="424" y2="104"/><line x1="458" y1="84" x2="458" y2="104"/></g>
<text x="360" y="98.5" text-anchor="middle" style="fill:var(--ink);font-size:12px;font-weight:650">genes</text>
<rect x="40" y="128" width="14" height="10" rx="2" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<text x="60" y="137" style="fill:var(--ink);font-size:12px">telomere (TTAGGG repeats)</text>
<rect x="270" y="128" width="14" height="10" rx="2" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
<text x="290" y="137" style="fill:var(--ink);font-size:12px">genes</text>
<rect x="420" y="126" width="8" height="14" rx="3" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="434" y="137" style="fill:var(--ink);font-size:12px">protective cap (shelterin)</text>
<line x1="20" y1="154" x2="700" y2="154" style="stroke:var(--line);stroke-width:1.5"/>
<!-- step 1 -->
<g data-step="1">
<text x="360" y="40" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">A young cell: long telomeres</text>
<rect x="50" y="84" width="180" height="20" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<rect x="490" y="84" width="180" height="20" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<rect x="40" y="80" width="10" height="28" rx="4" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<rect x="670" y="80" width="10" height="28" rx="4" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="360" y="190" text-anchor="middle" style="fill:var(--ink);font-size:13px">Each telomere is <tspan style="font-weight:700">5′-TTAGGG-3′</tspan> repeated over and over:</text>
<text x="360" y="212" text-anchor="middle" style="fill:var(--ink);font-size:13px">about 10,000–15,000 base pairs at birth in humans.</text>
<text x="360" y="234" text-anchor="middle" style="fill:var(--ink);font-size:13px">A protein cap protects each end.</text>
</g>
<!-- step 2 -->
<g data-step="2">
<text x="360" y="40" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">After one division: a little is lost from each end</text>
<rect x="42" y="84" width="24" height="20" style="fill:none;stroke:var(--glyco);stroke-width:1.5;stroke-dasharray:3 3"/>
<rect x="654" y="84" width="24" height="20" style="fill:none;stroke:var(--glyco);stroke-width:1.5;stroke-dasharray:3 3"/>
<rect x="80" y="84" width="150" height="20" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<rect x="490" y="84" width="150" height="20" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<rect x="70" y="80" width="10" height="28" rx="4" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<rect x="640" y="80" width="10" height="28" rx="4" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="54" y="74" text-anchor="middle" style="fill:var(--ink-2);font-size:11px">lost</text>
<text x="666" y="74" text-anchor="middle" style="fill:var(--ink-2);font-size:11px">lost</text>
<text x="360" y="190" text-anchor="middle" style="fill:var(--ink);font-size:13px">Each division, every telomere loses about 50–200 base pairs.</text>
<text x="360" y="212" text-anchor="middle" style="fill:var(--ink);font-size:13px">DNA polymerase cannot finish copying the very end of a linear chromosome.</text>
<text x="360" y="234" text-anchor="middle" style="fill:var(--ink);font-size:13px">The genes are untouched: only the buffer gets shorter.</text>
</g>
<!-- step 3 -->
<g data-step="3">
<text x="360" y="40" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">After about 50 divisions: short telomeres</text>
<rect x="180" y="84" width="50" height="20" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<rect x="490" y="84" width="50" height="20" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<rect x="170" y="80" width="10" height="28" rx="4" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<rect x="540" y="80" width="10" height="28" rx="4" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<text x="360" y="190" text-anchor="middle" style="fill:var(--ink);font-size:13px">The telomeres are short, but the cap can still protect the ends.</text>
<text x="360" y="212" text-anchor="middle" style="fill:var(--ink);font-size:13px">Telomere length works like a counter: it records how many times</text>
<text x="360" y="234" text-anchor="middle" style="fill:var(--ink);font-size:13px">the cell's ancestors have divided (this is why telomeres are shorter in older people).</text>
</g>
<!-- step 4 -->
<g data-step="4">
<text x="360" y="40" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Telomeres used up: cell division stops</text>
<rect x="222" y="84" width="8" height="20" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<rect x="490" y="84" width="8" height="20" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<path d="M214,80 l-8,6 l6,4 l-8,6 l6,4 l-8,6" style="fill:none;stroke:var(--bad);stroke-width:2"/><path d="M506,80 l8,6 l-6,4 l8,6 l-6,4 l8,6" style="fill:none;stroke:var(--bad);stroke-width:2"/>
<text x="150" y="98" text-anchor="end" style="fill:var(--bad);font-size:12px;font-weight:700">no cap:</text>
<text x="150" y="113" text-anchor="end" style="fill:var(--bad);font-size:11.5px">looks like broken DNA</text>
<circle cx="200" cy="236" r="32" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:2"/>
<rect x="189" y="222" width="7" height="28" rx="2" style="fill:var(--ink-2)"/>
<rect x="204" y="222" width="7" height="28" rx="2" style="fill:var(--ink-2)"/>
<text x="200" y="290" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Senescence</text>
<text x="200" y="307" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">stops dividing, becomes inactive</text>
<text x="360" y="241" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">or</text>
<circle cx="520" cy="236" r="26" style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:2;stroke-dasharray:5 3"/>
<g style="fill:var(--proton-soft);stroke:var(--proton);stroke-width:1.5"><circle cx="552" cy="216" r="7"/><circle cx="556" cy="246" r="6"/><circle cx="486" cy="222" r="6"/><circle cx="490" cy="256" r="7"/><circle cx="522" cy="200" r="5"/></g>
<text x="520" y="290" text-anchor="middle" style="fill:var(--ink);font-size:13px;font-weight:700">Apoptosis</text>
<text x="520" y="307" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">the cell destroys itself</text>
</g>
<!-- step 5 -->
<g data-step="5">
<text x="360" y="40" text-anchor="middle" style="fill:var(--ink);font-size:14px;font-weight:700">Telomerase rebuilds telomeres (germ, stem and cancer cells)</text>
<rect x="70" y="84" width="160" height="20" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<rect x="490" y="84" width="120" height="20" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
<rect x="610" y="84" width="30" height="20" style="fill:var(--glyco);stroke:var(--glyco);stroke-width:1.5"/>
<rect x="60" y="80" width="10" height="28" rx="4" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
<ellipse cx="664" cy="94" rx="24" ry="20" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<line x1="648" y1="100" x2="676" y2="100" style="stroke:var(--krebs);stroke-width:3"/>
<text x="625" y="72" text-anchor="middle" style="fill:var(--ink);font-size:11.5px;font-weight:650">new repeats</text>
<text x="664" y="130" text-anchor="middle" style="fill:var(--leaf);font-size:12px;font-weight:700">telomerase</text>
<text x="360" y="190" text-anchor="middle" style="fill:var(--ink);font-size:13px">Telomerase is an enzyme that carries its own short RNA template (magenta).</text>
<text x="360" y="212" text-anchor="middle" style="fill:var(--ink);font-size:13px">It uses the template to add TTAGGG repeats back onto the 3′ end, so the telomeres stay long.</text>
<text x="360" y="234" text-anchor="middle" style="fill:var(--ink);font-size:13px">It is active in germ cells, stem cells and most cancer cells, but switched off in most body cells.</text>
</g>
</svg>
<ol class="step-captions">
<li><strong>A young cell.</strong> The genes in the middle of the chromosome are flanked by long telomeres (TTAGGG repeated thousands of times), each with a protective cap.</li>
<li><strong>Each division shortens the telomeres.</strong> Because DNA polymerase cannot finish copying the ends of a linear chromosome, every round of replication loses a little of each telomere. The genes are safe; only the buffer shrinks.</li>
<li><strong>Short telomeres.</strong> After many divisions the telomeres are short. The cap still works, but there is little buffer left. Telomere length acts as a record of how many times the cell line has divided.</li>
<li><strong>Telomeres run out: division stops.</strong> With no telomere left, the cap cannot form. The bare ends look like broken DNA, and the cell stops dividing for good: it either becomes inactive (senescence) or destroys itself (apoptosis).</li>
<li><strong>The exception: telomerase.</strong> In germ cells, stem cells and most cancer cells, the enzyme telomerase adds new TTAGGG repeats using its own RNA template, so these cells can keep dividing.</li>
</ol>
<figcaption>How telomeres act as a buffer and a cell-division counter. The slides' version: "With each division, the telomeres shorten… When the telomeres run out, cell division stops."</figcaption>
</figure>

<div class="callout teacher"><p class="callout-title">From the slides</p><p>The telomere slides show a chromosome with its telomeres, a cell dividing over several generations as its telomeres shrink, and the two outcomes when they run out: <strong>the cell destroys itself, or it becomes inactive</strong>. Another slide compares a teenager's longer telomeres with an elderly adult's shorter ones.</p></div>
<div class="callout key"><p class="callout-title">On the test</p><ul><li>Telomere: repeating <strong>TTAGGG</strong> (6 bp) at the chromosome ends; no genes; capped by proteins.</li><li>Telomeres <strong>shorten with each division</strong> because DNA polymerase cannot fully copy the ends.</li><li>When they run out, <strong>cell division stops</strong>: the cell becomes inactive (senescence) or dies (apoptosis).</li></ul></div>
<p data-tier="likely">In 1961, Leonard Hayflick found that normal human cells grown in a dish divide only about 40–60 times before they stop. This <strong>Hayflick limit</strong> is now explained largely by telomere shortening. It may be a safety feature: a cell that has divided a very large number of times has had more chances to collect harmful mutations, so stopping it lowers the risk of cancer.</p>
<h4 data-tier="likely">Telomerase, stem cells and cancer</h4>
<p data-tier="likely"><span class="term">Telomerase</span> is an enzyme made of protein plus a short piece of RNA. The RNA contains a sequence complementary to the telomere repeat, and the enzyme uses it as a template to add TTAGGG units to the 3′ overhang (it makes DNA from an RNA template, so it is a kind of <em>reverse transcriptase</em>). It is active in:</p>
<ul data-tier="likely">
<li><strong>germ cells</strong> (the cells that make sperm and eggs), so each new generation starts with full-length telomeres;</li>
<li><strong>stem cells</strong>, which must keep dividing to replace blood, skin and gut cells throughout life;</li>
<li>about <strong>85–90% of cancers</strong>. Switching telomerase back on is one of the steps that lets a cancer cell divide without limit ("immortality"), which makes telomerase a target for cancer drugs.</li>
</ul>
<p data-tier="extra">The discovery of how telomeres and telomerase protect chromosomes earned Elizabeth Blackburn, Carol Greider and Jack Szostak the 2009 Nobel Prize. Some rare inherited diseases involve faulty telomere maintenance and cause premature ageing; Werner syndrome, which appears on the class mutations slides (<a href="#/lesson/3.06">lesson 3.06</a>), is a mutation in a DNA helicase that helps maintain telomeres.</p>

<h3 data-tier="essential">Check your understanding</h3>
<p>Questions 1 to 4 are the review questions from the end of the DNA structure slides. Try each one before opening the answer.</p>
<details class="check"><summary>1. A molecule of DNA was analyzed and found to contain 20% thymine. Calculate the percentage of adenine, guanine and cytosine in this molecule.</summary><div class="ans"><p>By Chargaff's rules, A = T, so <strong>adenine = 20%</strong>.</p><p>A + T = 40%, so G + C = 100% − 40% = 60%. Since G = C, <strong>guanine = 30%</strong> and <strong>cytosine = 30%</strong>.</p><p>Check: 20 + 20 + 30 + 30 = 100%, and purines (A + G = 50%) equal pyrimidines (T + C = 50%).</p></div></details>
<details class="check"><summary>2. Define the following terms: nucleotide, complementary base pairing, phosphodiester bond.</summary><div class="ans"><p><strong>Nucleotide:</strong> the monomer of a nucleic acid, made of a 5-carbon sugar (deoxyribose in DNA, ribose in RNA), a phosphate group (on the 5′ carbon) and a nitrogenous base (on the 1′ carbon).</p><p><strong>Complementary base pairing:</strong> the rule that bases on opposite strands pair specifically, A with T (2 hydrogen bonds) and G with C (3 hydrogen bonds), always a purine with a pyrimidine; in RNA, A pairs with U. It means one strand's sequence determines the other's.</p><p><strong>Phosphodiester bond:</strong> the strong covalent bond that joins nucleotides within one strand: a phosphate links the 3′ carbon of one sugar to the 5′ carbon of the next. It forms by a condensation reaction and makes up the sugar–phosphate backbone.</p></div></details>
<details class="check"><summary>3. What is the difference between purines and pyrimidines?</summary><div class="ans"><p><strong>Purines</strong> (adenine and guanine) are larger bases with a <strong>double ring</strong> (a six-membered ring fused to a five-membered ring). <strong>Pyrimidines</strong> (cytosine, thymine and uracil) are smaller bases with a <strong>single six-membered ring</strong>.</p><p>In DNA, a purine always pairs with a pyrimidine (A–T, G–C). That keeps every rung the same size and the helix a constant 2 nm wide, and it is why purines = pyrimidines (50% each) in any double-stranded DNA.</p></div></details>
<details class="check"><summary>4. The following is a segment taken from a strand of DNA: 5′-ATGCCTTA-3′. Write out the complementary strand for this segment. Be sure to show directionality.</summary><div class="ans"><p><span class="seq">5′-ATGCCTTA-3′</span> (given)<br><span class="seq">3′-TACGGAAT-5′</span> (complementary strand)</p><p>Each base is paired (A↔T, G↔C), and the ends are labelled the opposite way because the strands are antiparallel. Written 5′ → 3′, the complementary strand is <span class="seq">5′-TAAGGCAT-3′</span>.</p></div></details>
<details class="check" data-tier="likely"><summary>5. How many hydrogen bonds hold the segment 5′-ATGCCTTA-3′ to its complementary strand?</summary><div class="ans"><p>Count the pairs: A, T, T, T, A form <strong>5 A–T pairs</strong> × 2 = 10 hydrogen bonds; G, C, C form <strong>3 G–C pairs</strong> × 3 = 9 hydrogen bonds. Total: <strong>19 hydrogen bonds</strong>.</p></div></details>
<details class="check" data-tier="likely"><summary>6. Sample X is 30% guanine; sample Y is 20% guanine. Which sample needs a higher temperature to separate its strands? Explain.</summary><div class="ans"><p><strong>Sample X.</strong> X is 60% G + C, while Y is only 40% G + C. Each G–C pair is held by 3 hydrogen bonds compared with 2 for an A–T pair (and G–C pairs also stack more strongly), so X has more hydrogen bonds per base pair and needs more heat energy to separate.</p></div></details>
<details class="check"><summary>7. Explain why adenine cannot pair with guanine, and why it cannot pair with cytosine.</summary><div class="ans"><p><strong>A with G:</strong> both are purines (double rings). Two purines together are too wide to fit between the backbones, which stay a fixed 2 nm apart.</p><p><strong>A with C:</strong> the size is right (purine + pyrimidine), but the hydrogen-bonding atoms on their edges don't match up, so they can't form a stable set of hydrogen bonds. A only fits T (2 H-bonds) and G only fits C (3 H-bonds).</p></div></details>
<details class="check"><summary>8. Why is DNA negatively charged, and name one consequence of this charge.</summary><div class="ans"><p>Every nucleotide has a phosphate group in the backbone, and each phosphate loses an H<sup>+</sup> at the pH of the cell, leaving a negative charge (that is also why DNA is an acid). Consequences: DNA binds tightly to positively charged <strong>histone</strong> proteins, which package it into chromosomes; the charged backbone faces the water on the outside of the helix; and in gel electrophoresis DNA moves toward the positive electrode.</p></div></details>
<details class="check"><summary>9. What would happen to a chromosome if its telomeres were completely lost, and why do cancer cells not run into this problem?</summary><div class="ans"><p>Without telomeres there is nothing to form the protective cap. The bare chromosome ends look like broken DNA, so the cell's damage response stops it from dividing: it becomes inactive (senescence) or destroys itself (apoptosis). Any further copying would also start eating into genes near the ends.</p><p>Most cancer cells have switched the enzyme <strong>telomerase</strong> back on. Telomerase rebuilds the TTAGGG repeats using its own RNA template, so the telomeres never run out and the cells can keep dividing indefinitely.</p></div></details>
<details class="check"><summary>10. A gene is 3,000 base pairs long. How long is it in nanometres, and how many turns of the helix does it contain?</summary><div class="ans"><p>Length: 3,000 × 0.34 nm = <strong>1,020 nm</strong> (about 1 µm). Turns: 3,000 bp ÷ 10 bp per turn = <strong>300 turns</strong> (check: 300 × 3.4 nm = 1,020 nm).</p></div></details>

<h3 data-tier="essential">Lesson summary</h3>
<ul>
<li><strong>Nucleic acids</strong> store hereditary information that determines structural and functional characteristics. <strong>DNA</strong> = instructions for the organism. <strong>RNA</strong> makes proteins: <strong>mRNA</strong> copies a gene, <strong>rRNA</strong> forms the ribosome, <strong>tRNA</strong> carries amino acids.</li>
<li><strong>Nucleotide</strong> = 5-carbon sugar (<strong>deoxyribose</strong>) + <strong>phosphate</strong> (on the <strong>5′</strong> carbon) + <strong>nitrogenous base</strong> (on the <strong>1′</strong> carbon); free <strong>–OH on the 3′</strong> carbon.</li>
<li><strong>Deoxyribose</strong> (DNA) has <strong>H</strong> on the 2′ carbon; <strong>ribose</strong> (RNA) has <strong>OH</strong> there.</li>
<li><strong>Purines</strong> (A, G) = double ring; <strong>pyrimidines</strong> (C, T, U) = single ring. T only in DNA, U only in RNA.</li>
<li>The <strong>sequence of the 4 bases</strong> determines protein structure.</li>
<li><strong>Phosphodiester bonds</strong> (covalent; 3′ carbon → phosphate → 5′ carbon; condensation, water released) form the <strong>sugar–phosphate backbone</strong>. <strong>5′ end = phosphate</strong>; <strong>3′ end = sugar (–OH)</strong>. Strands are built and written <strong>5′ → 3′</strong>.</li>
<li>DNA is <strong>slightly acidic and negatively charged</strong> because of its phosphate groups; it binds positive histones.</li>
<li><strong>Complementary base pairing:</strong> <strong>A=T (2 H-bonds)</strong>, <strong>G≡C (3 H-bonds)</strong>; purine always with pyrimidine, so the diameter stays <strong>2 nm</strong>.</li>
<li>Strands are <strong>antiparallel</strong>: the 5′ end of one lies opposite the 3′ end of the other. Always label both ends.</li>
<li>Right-handed <strong>double helix</strong>: <strong>2 nm</strong> wide; <strong>3.4 nm</strong> per turn; <strong>10 bp</strong> per turn; <strong>0.34 nm</strong> between base pairs; <strong>major and minor grooves</strong>; backbones outside, bases inside.</li>
<li><strong>Stability:</strong> the <strong>large number of hydrogen bonds</strong> (weak individually), base stacking and covalent backbones. More G–C = harder to separate.</li>
<li><strong>Complementary strand:</strong> pair each base and flip the end labels: 5′-ATGCCTTA-3′ → 3′-TACGGAAT-5′ (= 5′-TAAGGCAT-3′).</li>
<li><strong>Chargaff:</strong> %A = %T, %G = %C (double-stranded DNA only). 20% T → 20% A, 30% G, 30% C.</li>
<li><strong>Packing</strong> (likely): DNA wraps around <strong>histones</strong> → nucleosomes ("beads on a string") → 30 nm fibre → looped domains → metaphase chromosome.</li>
<li><strong>Telomeres:</strong> repeating 6-bp <strong>5′-TTAGGG-3′</strong> at chromosome ends; no genes; <strong>protein cap</strong> (shelterin, T-loop). They <strong>shorten with each division</strong>; when they run out, division stops (<strong>senescence</strong> or <strong>apoptosis</strong>). <strong>Telomerase</strong> rebuilds them in germ cells, stem cells and most cancer cells.</li>
</ul>
`
});
