window.VIS = window.VIS || {};
window.VIS.overview = `<svg viewBox="0 0 760 400" role="img" aria-labelledby="gov-t gov-d" class="ovmap">
<title id="gov-t">Map of Unit 3: the central dogma inside a eukaryotic cell</title>
<desc id="gov-d">In the nucleus, DNA is copied by replication and transcribed into pre-mRNA. The pre-mRNA gets a 5 prime cap and poly-A tail and its introns are spliced out. The mature mRNA leaves through a nuclear pore, and a ribosome in the cytoplasm translates it into a polypeptide that folds into a protein. A mutation is a change in the DNA sequence. Each part links to its lesson.</desc>
<defs>
<marker id="gov-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink-2)"/></marker>
<marker id="gov-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--link)"/></marker>
</defs>
<rect x="8" y="8" width="744" height="384" rx="28" style="fill:none;stroke:var(--line);stroke-width:1.5"/>
<text x="736" y="380" text-anchor="end" style="fill:var(--ink-2);font-size:12px">Cytoplasm</text>
<rect x="24" y="44" width="360" height="324" rx="40" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<text x="48" y="72" style="fill:var(--ink-2);font-size:12px">Nucleus</text>

<path d="M60,116 q10,-12 20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0" style="fill:none;stroke:var(--ink-2);stroke-width:2.5"/>
<path d="M60,116 q10,12 20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0 t20,0" style="fill:none;stroke:var(--etc);stroke-width:2.5"/>
<a href="#/lesson/3.02"><text x="342" y="121" style="fill:var(--etc);font-size:13px;font-weight:700">DNA</text></a>
<a href="#/lesson/3.02"><text x="342" y="137" style="fill:var(--ink-2);font-size:11px">3.02</text></a>

<path d="M262,98 C262,66 320,66 320,96" style="fill:none;stroke:var(--link);stroke-width:2" marker-end="url(#gov-ar)"/>
<a href="#/lesson/3.03"><text x="252" y="72" text-anchor="end" style="fill:var(--link);font-size:13px;font-weight:700">3.03 Replication</text></a>
<text x="252" y="87" text-anchor="end" style="fill:var(--ink-2);font-size:11px">DNA → DNA</text>

<path d="M96,106 l6,6 l-6,6 l6,6" style="fill:none;stroke:var(--proton);stroke-width:3"/>
<a href="#/lesson/3.06"><text x="64" y="160" style="fill:var(--proton);font-size:13px;font-weight:700">3.06 Mutation</text></a>
<text x="64" y="175" style="fill:var(--ink-2);font-size:11px">a changed base sequence</text>

<line x1="230" y1="134" x2="230" y2="192" style="stroke:var(--ink-2);stroke-width:1.8" marker-end="url(#gov-ah)"/>
<a href="#/lesson/3.04"><text x="240" y="160" style="fill:var(--krebs);font-size:13px;font-weight:700">3.04 Transcription</text></a>
<text x="240" y="175" style="fill:var(--ink-2);font-size:11px">DNA → pre-mRNA</text>

<text x="40" y="214" style="fill:var(--ink-2);font-size:12px">pre-mRNA</text>
<line x1="124" y1="210" x2="164" y2="210" style="stroke:var(--krebs);stroke-width:6"/>
<line x1="164" y1="210" x2="190" y2="210" style="stroke:var(--ink-2);stroke-width:2;stroke-dasharray:3 3"/>
<line x1="190" y1="210" x2="240" y2="210" style="stroke:var(--krebs);stroke-width:6"/>
<line x1="240" y1="210" x2="262" y2="210" style="stroke:var(--ink-2);stroke-width:2;stroke-dasharray:3 3"/>
<line x1="262" y1="210" x2="320" y2="210" style="stroke:var(--krebs);stroke-width:6"/>
<text x="177" y="232" text-anchor="middle" style="fill:var(--ink-2);font-size:10.5px">intron</text>
<text x="251" y="232" text-anchor="middle" style="fill:var(--ink-2);font-size:10.5px">intron</text>

<line x1="230" y1="240" x2="230" y2="284" style="stroke:var(--ink-2);stroke-width:1.8" marker-end="url(#gov-ah)"/>
<text x="240" y="260" style="fill:var(--ink-2);font-size:11px">add 5′ cap and poly-A tail,</text>
<text x="240" y="274" style="fill:var(--ink-2);font-size:11px">splice out introns</text>

<line x1="120" y1="302" x2="700" y2="302" style="stroke:var(--krebs);stroke-width:4"/>
<circle cx="116" cy="302" r="7" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:2"/>
<text x="40" y="306" style="fill:var(--ink-2);font-size:12px">mRNA</text>
<text x="96" y="330" style="fill:var(--ink-2);font-size:10.5px">5′ cap</text>
<text x="700" y="324" text-anchor="end" style="fill:var(--krebs);font-size:11px;font-weight:700">AAAA… 3′</text>
<rect x="379" y="282" width="10" height="13" rx="2" style="fill:var(--ink-2)"/>
<rect x="379" y="309" width="10" height="13" rx="2" style="fill:var(--ink-2)"/>
<text x="398" y="344" style="fill:var(--ink-2);font-size:10.5px">nuclear pore</text>

<ellipse cx="540" cy="284" rx="40" ry="20" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<ellipse cx="540" cy="312" rx="44" ry="12" style="fill:var(--leaf-soft);stroke:var(--leaf);stroke-width:1.8"/>
<a href="#/lesson/3.05"><text x="540" y="350" text-anchor="middle" style="fill:var(--leaf);font-size:13px;font-weight:700">3.05 Translation</text></a>
<text x="540" y="365" text-anchor="middle" style="fill:var(--ink-2);font-size:11px">ribosome: mRNA → polypeptide</text>
<g style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5">
<circle cx="548" cy="254" r="6"/><circle cx="560" cy="243" r="6"/><circle cx="574" cy="234" r="6"/><circle cx="590" cy="228" r="6"/><circle cx="606" cy="224" r="6"/><circle cx="622" cy="221" r="6"/>
</g>
<text x="636" y="218" style="fill:var(--ink);font-size:12px;font-weight:650">polypeptide</text>
<text x="636" y="233" style="fill:var(--ink-2);font-size:11px">folds into a protein</text>

<rect x="420" y="40" width="316" height="74" rx="10" style="fill:none;stroke:var(--line);stroke-width:1.2"/>
<a href="#/lesson/3.01"><text x="436" y="62" style="fill:var(--ink);font-size:13px;font-weight:700">3.01 How DNA was found</text></a>
<line x1="446" y1="84" x2="716" y2="84" style="stroke:var(--line);stroke-width:2"/>
<g style="fill:var(--ink-2)"><circle cx="446" cy="84" r="3.5"/><circle cx="500" cy="84" r="3.5"/><circle cx="554" cy="84" r="3.5"/><circle cx="608" cy="84" r="3.5"/><circle cx="662" cy="84" r="3.5"/><circle cx="716" cy="84" r="3.5"/></g>
<g style="fill:var(--ink-2);font-size:11px" text-anchor="middle"><text x="446" y="103">1869</text><text x="500" y="103">1928</text><text x="554" y="103">1944</text><text x="608" y="103">1952</text><text x="662" y="103">1953</text><text x="716" y="103">1958</text></g>

<rect x="420" y="128" width="316" height="50" rx="10" style="fill:none;stroke:var(--glyco);stroke-width:1.2;stroke-dasharray:5 3"/>
<a href="#/lesson/3.07"><text x="436" y="149" style="fill:var(--glyco);font-size:13px;font-weight:700">3.07 Gene regulation</text></a>
<text x="436" y="166" style="fill:var(--ink-2);font-size:11px">bacteria switch operons on and off (lac, trp)</text>
</svg>`;
