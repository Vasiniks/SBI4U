window.VIS = {
overview: `<svg viewBox="0 0 760 380" role="img" aria-labelledby="ovm-t" class="ovmap">
<title id="ovm-t">Map of aerobic cellular respiration: glycolysis in the cytoplasm, pyruvate oxidation and the Krebs cycle in the mitochondrial matrix, the electron transport chain on the inner membrane</title>
<defs><marker id="ovm-ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" style="fill:var(--ink-2)"/></marker></defs>
<rect x="8" y="8" width="744" height="364" rx="28" style="fill:none;stroke:var(--line);stroke-width:1.5"/>
<text x="28" y="36" style="fill:var(--ink-2);font-size:13px">Cytoplasm</text>
<rect x="210" y="40" width="530" height="310" rx="60" style="fill:var(--surface-2);stroke:var(--ink-2);stroke-width:1.5"/>
<rect x="228" y="58" width="494" height="274" rx="48" style="fill:var(--bg);stroke:var(--ink-2);stroke-width:1.5;stroke-dasharray:10 4"/>
<text x="220" y="30" style="fill:var(--ink-2);font-size:13px">Mitochondrion</text>
<text x="252" y="84" style="fill:var(--ink-2);font-size:12px">Matrix</text>
<g class="mapstage" data-s="glyco">
  <text x="90" y="92" text-anchor="middle" style="fill:var(--ink);font-size:15px;font-weight:700">Glucose</text>
  <text x="90" y="109" text-anchor="middle" style="fill:var(--ink-2);font-size:11px">6 carbons</text>
  <line x1="90" y1="118" x2="90" y2="166" style="stroke:var(--ink-2);stroke-width:1.5" marker-end="url(#ovm-ah)"/>
  <rect x="28" y="170" width="124" height="52" rx="10" style="fill:var(--glyco-soft);stroke:var(--glyco);stroke-width:1.5"/>
  <text x="90" y="192" text-anchor="middle" style="fill:var(--glyco);font-size:14px;font-weight:700">Glycolysis</text>
  <text x="90" y="210" text-anchor="middle" style="fill:var(--ink);font-size:11px">2 ATP · 2 NADH</text>
  <line x1="90" y1="224" x2="90" y2="270" style="stroke:var(--ink-2);stroke-width:1.5" marker-end="url(#ovm-ah)"/>
  <text x="90" y="292" text-anchor="middle" style="fill:var(--ink);font-size:15px;font-weight:700">2 Pyruvate</text>
  <text x="90" y="309" text-anchor="middle" style="fill:var(--ink-2);font-size:11px">3 carbons each</text>
</g>
<g class="mapstage" data-s="link">
  <line x1="150" y1="290" x2="256" y2="292" style="stroke:var(--ink-2);stroke-width:1.5" marker-end="url(#ovm-ah)"/>
  <rect x="260" y="268" width="152" height="50" rx="10" style="fill:var(--link-soft);stroke:var(--link);stroke-width:1.5"/>
  <text x="336" y="289" text-anchor="middle" style="fill:var(--link);font-size:13px;font-weight:700">Pyruvate oxidation</text>
  <text x="336" y="307" text-anchor="middle" style="fill:var(--ink);font-size:11px">2 NADH · 2 CO₂</text>
  <line x1="388" y1="266" x2="452" y2="219" style="stroke:var(--ink-2);stroke-width:1.5" marker-end="url(#ovm-ah)"/>
  <text x="404" y="236" text-anchor="end" style="fill:var(--ink-2);font-size:11px">2 Acetyl-CoA</text>
</g>
<g class="mapstage" data-s="krebs">
  <circle cx="500" cy="180" r="58" style="fill:var(--krebs-soft);stroke:var(--krebs);stroke-width:1.5"/>
  <text x="500" y="172" text-anchor="middle" style="fill:var(--krebs);font-size:14px;font-weight:700">Krebs cycle</text>
  <text x="500" y="190" text-anchor="middle" style="fill:var(--ink);font-size:11px">2 ATP · 6 NADH</text>
  <text x="500" y="204" text-anchor="middle" style="fill:var(--ink);font-size:11px">2 FADH₂</text>
  <line x1="500" y1="121" x2="500" y2="80" style="stroke:var(--ink-2);stroke-width:1.5" marker-end="url(#ovm-ah)"/>
  <text x="510" y="100" style="fill:var(--ink-2);font-size:11px">4 CO₂</text>
</g>
<g class="mapstage" data-s="etc">
  <line x1="560" y1="180" x2="664" y2="180" style="stroke:var(--ink-2);stroke-width:1.5" marker-end="url(#ovm-ah)"/>
  <text x="612" y="170" text-anchor="middle" style="fill:var(--ink-2);font-size:11px">NADH · FADH₂</text>
  <rect x="668" y="96" width="40" height="150" rx="8" style="fill:var(--etc-soft);stroke:var(--etc);stroke-width:1.5"/>
  <text x="688" y="88" text-anchor="middle" style="fill:var(--etc);font-size:13px;font-weight:700">ETC</text>
  <text x="688" y="268" text-anchor="middle" style="fill:var(--glyco);font-size:13px;font-weight:700">~34 ATP</text>
  <text x="602" y="300" text-anchor="middle" style="fill:var(--ink-2);font-size:11px">O₂ + H⁺ → H₂O</text>
</g>
</svg>`,

krebs: `<svg viewBox="0 0 520 420" role="img" aria-labelledby="kr-t">
<title id="kr-t">Krebs cycle: oxaloacetate, citrate, isocitrate, alpha-ketoglutarate, succinyl-CoA, succinate, fumarate, malate, with NADH, FADH2, ATP and CO2 released at their steps</title>
<circle cx="260" cy="210" r="140" style="fill:none;stroke:var(--krebs);stroke-width:2"/>
<text x="260" y="205" text-anchor="middle" style="fill:var(--krebs);font-size:16px;font-weight:700">Krebs cycle</text>
<text x="260" y="224" text-anchor="middle" style="fill:var(--ink-2);font-size:12px">turns twice per glucose</text>
<g style="font-size:12.5px;font-weight:600">
<rect x="205" y="58" width="110" height="24" rx="12" style="fill:var(--surface);stroke:var(--krebs)"/><text x="260" y="75" text-anchor="middle" style="fill:var(--ink)">Oxaloacetate 4C</text>
<rect x="314" y="99" width="90" height="24" rx="12" style="fill:var(--surface);stroke:var(--krebs)"/><text x="359" y="116" text-anchor="middle" style="fill:var(--ink)">Citrate 6C</text>
<rect x="350" y="198" width="100" height="24" rx="12" style="fill:var(--surface);stroke:var(--krebs)"/><text x="400" y="215" text-anchor="middle" style="fill:var(--ink)">Isocitrate 6C</text>
<rect x="293" y="297" width="132" height="24" rx="12" style="fill:var(--surface);stroke:var(--krebs)"/><text x="359" y="314" text-anchor="middle" style="fill:var(--ink)">α-Ketoglutarate 5C</text>
<rect x="200" y="338" width="120" height="24" rx="12" style="fill:var(--surface);stroke:var(--krebs)"/><text x="260" y="355" text-anchor="middle" style="fill:var(--ink)">Succinyl-CoA 4C</text>
<rect x="106" y="297" width="110" height="24" rx="12" style="fill:var(--surface);stroke:var(--krebs)"/><text x="161" y="314" text-anchor="middle" style="fill:var(--ink)">Succinate 4C</text>
<rect x="68" y="198" width="104" height="24" rx="12" style="fill:var(--surface);stroke:var(--krebs)"/><text x="120" y="215" text-anchor="middle" style="fill:var(--ink)">Fumarate 4C</text>
<rect x="116" y="99" width="90" height="24" rx="12" style="fill:var(--surface);stroke:var(--krebs)"/><text x="161" y="116" text-anchor="middle" style="fill:var(--ink)">Malate 4C</text>
</g>
<g style="font-size:12.5px;font-weight:700">
<text x="337" y="30" text-anchor="middle" style="fill:var(--link)">Acetyl-CoA 2C in</text>
<text x="452" y="288" text-anchor="middle" style="fill:var(--etc)">NADH</text><text x="452" y="304" text-anchor="middle" style="fill:var(--ink-2)">+ CO₂</text>
<text x="345" y="398" text-anchor="middle" style="fill:var(--etc)">NADH <tspan style="fill:var(--ink-2)">+ CO₂</tspan></text>
<text x="175" y="398" text-anchor="middle" style="fill:var(--glyco)">ATP (via GTP)</text>
<text x="66" y="292" text-anchor="middle" style="fill:var(--krebs)">FADH₂</text>
<text x="183" y="30" text-anchor="middle" style="fill:var(--etc)">NADH</text>
</g>
</svg>`,

etc: `<svg viewBox="0 0 720 270" role="img" aria-labelledby="etc-t">
<title id="etc-t">Electron transport chain in the inner mitochondrial membrane: complexes I, III and IV pump H+ into the intermembrane space, ATP synthase lets H+ back into the matrix to make ATP</title>
<defs><marker id="etc-ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" style="fill:var(--proton)"/></marker></defs>
<text x="12" y="24" style="fill:var(--ink-2);font-size:12.5px">Intermembrane space: high H⁺</text>
<text x="12" y="262" style="fill:var(--ink-2);font-size:12.5px">Matrix</text>
<rect x="0" y="110" width="720" height="40" style="fill:var(--surface-2)"/>
<polyline points="90,130 225,130 285,130 350,100 410,130 410,182" style="fill:none;stroke:var(--etc);stroke-width:2;stroke-dasharray:6 4"/>
<line x1="172" y1="148" x2="220" y2="136" style="stroke:var(--etc);stroke-width:2;stroke-dasharray:6 4"/>
<g style="stroke-width:1.5">
<rect x="60" y="88" width="60" height="84" rx="12" style="fill:var(--etc-soft);stroke:var(--etc)"/>
<rect x="150" y="124" width="46" height="46" rx="10" style="fill:var(--krebs-soft);stroke:var(--krebs)"/>
<circle cx="225" cy="130" r="15" style="fill:var(--surface);stroke:var(--etc)"/>
<rect x="255" y="88" width="60" height="84" rx="12" style="fill:var(--etc-soft);stroke:var(--etc)"/>
<circle cx="350" cy="100" r="14" style="fill:var(--surface);stroke:var(--etc)"/>
<rect x="380" y="88" width="60" height="84" rx="12" style="fill:var(--etc-soft);stroke:var(--etc)"/>
<rect x="566" y="84" width="48" height="92" rx="10" style="fill:var(--glyco-soft);stroke:var(--glyco)"/>
<circle cx="590" cy="198" r="24" style="fill:var(--glyco-soft);stroke:var(--glyco)"/>
</g>
<g text-anchor="middle" style="font-size:14px;font-weight:700;fill:var(--ink)">
<text x="90" y="135">I</text><text x="173" y="152">II</text><text x="225" y="135" style="font-size:12px">Q</text><text x="285" y="135">III</text><text x="350" y="105" style="font-size:12px">c</text><text x="410" y="135">IV</text>
</g>
<text x="556" y="134" text-anchor="end" style="fill:var(--glyco);font-size:12.5px;font-weight:700">ATP synthase</text>
<g style="stroke:var(--proton);stroke-width:2">
<line x1="90" y1="86" x2="90" y2="50" marker-end="url(#etc-ah)"/>
<line x1="285" y1="86" x2="285" y2="50" marker-end="url(#etc-ah)"/>
<line x1="410" y1="86" x2="410" y2="50" marker-end="url(#etc-ah)"/>
<line x1="590" y1="48" x2="590" y2="80" marker-end="url(#etc-ah)"/>
</g>
<g text-anchor="middle" style="fill:var(--proton);font-size:12.5px;font-weight:700">
<text x="90" y="44">H⁺</text><text x="285" y="44">H⁺</text><text x="410" y="44">H⁺</text><text x="590" y="42">H⁺ flows back</text>
</g>
<g text-anchor="middle" style="font-size:12px;fill:var(--ink)">
<text x="90" y="194">NADH → NAD⁺</text>
<text x="173" y="216">FADH₂ → FAD</text>
<text x="410" y="200">½O₂ + 2H⁺ → H₂O</text>
<text x="590" y="244" style="font-weight:700;fill:var(--glyco)">ADP + Pᵢ → ATP</text>
</g>
</svg>`
};
