/* SBI4U Unit 3 Molecular Genetics - knowledge bank (lessons 3.01-3.07 + whole-unit mix).
   Fields: id, lesson ("3.01".."3.07" | "mix"), type ("mcq" | "tf"), kind, tier ("essential" | "likely" | "extra"),
   level (1 = recall, 2 = understanding), q, options (mcq only, exactly 4), answer (index or boolean), explain.
   Class values: DNA 2 nm wide, 0.34 nm per base pair, 3.4 nm and 10 bp per turn; A=T (2 H-bonds), G≡C (3);
   telomere repeat 5′-TTAGGG-3′; poly-A tail ~200 A; ~1 error per 10,000 bp before proofreading;
   12.5% of helices hold an original strand after 4 generations; ~80% of new point mutations arise in sperm.
   Every codon answer was checked against the standard genetic code. */
window.QUIZ = window.QUIZ || [];
window.QUIZ.push(
  /* ---------------- 3.01 History of Genetics ---------------- */
  { id: "g001", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In 1869 Friedrich Miescher isolated a new substance from cell nuclei. What did he call it, and what was it like?",
    options: [
      "Nuclein: rich in phosphorus and nitrogen, with an acidic portion and a basic portion",
      "Nuclein: rich in sulfur, with no acidic portion at all",
      "Chromatin: a protein built from 20 kinds of amino acids",
      "The transforming principle: a sugar coat taken from bacteria"
    ],
    answer: 0,
    explain: "Miescher called it nuclein because it came from the nucleus. It was unusually rich in phosphorus and nitrogen, and it had an acidic portion (the nucleic acid, now known to be DNA) and a basic portion (the proteins bound to it). Sulfur is the marker of protein that Hershey and Chase used much later, and \"transforming principle\" was the name for Griffith's mystery substance in 1928, nearly 60 years after Miescher." },

  { id: "g002", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Until the 1940s, most biologists expected the hereditary material to be protein, not DNA. Why?",
    options: [
      "DNA had not yet been discovered in the nucleus",
      "Proteins were thought to be found only in the nucleus, while DNA was thought to be spread thinly through the cytoplasm",
      "DNA was known to be destroyed by heat, so it could not survive from parent to offspring",
      "Proteins have 20 kinds of amino acids, so they seemed able to carry far more information than DNA's 4 nucleotides"
    ],
    answer: 3,
    explain: "A 20-letter alphabet looked much richer than a 4-letter one, and DNA was wrongly thought to be a simple, repetitive molecule. DNA had been known since Miescher (1869), so it was not undiscovered. Griffith's heat-killed bacteria actually showed that the transforming substance survives heat, which turned out to fit DNA well." },

  { id: "g003", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which organism did Griffith study in 1928?",
    options: [
      "<em>Escherichia coli</em> bacteria being infected by T2 bacteriophage",
      "<em>Acetabularia</em>, a single-celled green alga",
      "<em>Streptococcus pneumoniae</em>, a pneumonia bacterium, in mice",
      "<em>Escherichia coli</em> grown in heavy nitrogen"
    ],
    answer: 2,
    explain: "Griffith was trying to develop a pneumonia vaccine, so he worked with two strains of pneumococcus (<em>S. pneumoniae</em>) in mice. <em>E. coli</em> with T2 phage is the Hershey–Chase experiment, <em>Acetabularia</em> is Hämmerling's alga, and <em>E. coli</em> in heavy nitrogen is Meselson and Stahl." },

  { id: "g004", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How did Griffith's S strain differ from his R strain?",
    options: [
      "The R strain has a capsule and is virulent; the S strain has no capsule and is harmless",
      "The S strain has a smooth polysaccharide capsule and is virulent (kills mice); the R strain has no capsule and is harmless",
      "The S strain is a virus and the R strain is a bacterium",
      "The S strain contains DNA, while the R strain contains only RNA"
    ],
    answer: 1,
    explain: "S stands for smooth: the capsule makes the colonies look smooth and hides the bacteria from the mouse's immune system, so S cells cause pneumonia. R (rough) cells lack the capsule and are destroyed by the immune system. Both strains are bacteria, and both have DNA as their genetic material." },

  { id: "g005", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which of Griffith's four injections killed the mouse?",
    options: [
      "Live S strain, and heat-killed S strain mixed with live R strain",
      "Only live S strain",
      "Live S strain and heat-killed S strain",
      "Live R strain, and heat-killed S strain mixed with live R strain"
    ],
    answer: 0,
    explain: "The results were: live R, mouse lives; live S, mouse dies; heat-killed S, mouse lives; heat-killed S + live R, mouse dies. Neither the dead S cells nor the live R cells could kill alone, so the fourth result was the surprise that revealed transformation." },

  { id: "g006", lesson: "3.01", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Griffith showed that the transforming principle is DNA.",
    answer: false,
    explain: "Griffith discovered transformation in 1928, but he did not know what the transforming substance was. Avery, MacLeod and McCarty identified it as DNA in 1944 by destroying each type of molecule in turn." },

  { id: "g007", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is bacterial transformation?",
    options: [
      "The death of bacteria when they are heated",
      "A virus injecting its DNA into a bacterium",
      "A heritable change in a cell's traits caused by taking up genetic material (DNA) from its surroundings",
      "A random mutation that happens whenever two strains are grown together"
    ],
    answer: 2,
    explain: "In transformation, a cell absorbs DNA released by other cells (here, dead S cells) and starts expressing the new genes; its offspring keep the new trait. A virus injecting its DNA is infection, which Hershey and Chase studied. Transformation is not a random mutation: the new trait matches the donor cells exactly." },

  { id: "g008", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "In Griffith's experiment, why did the mouse injected with heat-killed S strain plus live R strain die?",
    options: [
      "The heat brought the S strain back to life once it was inside the warm mouse",
      "The R strain mutated on its own into the S strain, as it can in any mouse",
      "The dead S cells still released enough toxin to kill the mouse",
      "The living R cells took up genetic material from the dead S cells and were transformed into deadly S cells"
    ],
    answer: 3,
    explain: "This is the case-file clearance check. Heat-killed S cells alone did not kill a mouse, so they were not revived and did not carry a deadly toxin. Live R cells alone did not kill either, so they did not simply mutate. Only the combination worked: something from the dead S cells changed the living R cells into capsule-making S cells." },

  { id: "g009", lesson: "3.01", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "No living S-strain bacteria were found in the mouse that was injected with heat-killed S strain mixed with live R strain.",
    answer: false,
    explain: "The slide shows \"live S strain from group 4\": living, capsule-making S cells were recovered from that dead mouse. Since only R cells were alive when injected, some must have been transformed into S cells, and their offspring stayed S. That showed the change was heritable." },

  { id: "g010", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What did Avery, MacLeod and McCarty conclude in 1944?",
    options: [
      "Protein is the transforming principle, because destroying it stopped transformation",
      "DNA is the transforming principle and the molecule of heredity, not protein",
      "RNA carries hereditary information in bacteria",
      "The polysaccharide capsule itself is what transforms R cells"
    ],
    answer: 1,
    explain: "They destroyed one class of molecule at a time in S-strain extract, and only destroying DNA stopped transformation. Destroying protein or RNA did not, and the capsule polysaccharide was removed early on. Check your notes: the slide spells the name \"McLeod\"; the correct spelling is MacLeod." },

  { id: "g011", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Avery, MacLeod and McCarty treated S-strain extract with different enzymes before mixing it with live R cells. Which treatment stopped transformation?",
    options: [
      "Destroying the proteins with a protease",
      "Destroying the DNA with DNase",
      "Destroying the RNA with RNase",
      "Destroying the polysaccharides and lipids"
    ],
    answer: 1,
    explain: "With proteins, RNA, polysaccharides or lipids destroyed, the extract still turned R cells into S cells (the mice died). Only when DNA was destroyed did transformation fail and the mouse live. The molecule whose removal stops the effect is the cause, so DNA is the transforming principle." },

  { id: "g012", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which organism did Hämmerling use in his 1934 experiments?",
    options: [
      "<em>Acetabularia</em>, a large single-celled green alga with a cap, stalk and foot",
      "<em>Streptococcus pneumoniae</em>, a bacterium whose S strain has a smooth capsule",
      "T2 bacteriophage, a virus with a protein coat",
      "Hydra, a small animal that can regrow its head"
    ],
    answer: 0,
    explain: "<em>Acetabularia</em> is a single cell several centimetres long, so it can be cut into pieces and grafted. Its single nucleus sits in the foot (rhizoid). The bacterium is Griffith's and the phage is Hershey and Chase's." },

  { id: "g013", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Where is the nucleus of an <em>Acetabularia</em> cell?",
    options: [
      "In the cap at the top",
      "In the middle of the stalk",
      "There is one nucleus in each of the cap, stalk and foot",
      "In the foot (rhizoid) at the base"
    ],
    answer: 3,
    explain: "<em>Acetabularia</em> is one cell with one nucleus, in the foot. That is why only the foot could direct regeneration, which is the answer to the case file's clearance check." },

  { id: "g014", lesson: "3.01", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "When Hämmerling cut off the cap of <em>Acetabularia</em>, the alga grew a new cap; when he cut off the foot, the rest of the cell did not regrow a foot.",
    answer: true,
    explain: "These are the slide's results (remove cap: plant grew new cap; remove foot: no regrowth). Regeneration needs genetic instructions, so the part that can regenerate must hold them. Conclusion: the nucleus and the hereditary information are in the foot." },

  { id: "g015", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Hämmerling grafted parts of two <em>Acetabularia</em> species with different cap shapes (<em>A. crenulata</em> and <em>A. mediterranea</em>). What determined the shape of the caps that eventually grew?",
    options: [
      "The species that supplied the stalk",
      "Neither: every cap was a permanent 50:50 blend of the two species",
      "The species that supplied the nucleus (in the foot)",
      "The species that supplied the old cap that was cut off"
    ],
    answer: 2,
    explain: "The slide's figure shows the final cap structure is that of the nucleus donor. A first regrown cap can look intermediate because the stalk still holds instructions made earlier by the old nucleus, but once those are used up, every new cap matches the nucleus. So the nucleus holds the hereditary information." },

  { id: "g016", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What did Chargaff discover in 1950?",
    options: [
      "All four bases are present in exactly equal amounts, 25% each",
      "In DNA, the amount of adenine equals guanine, and the amount of thymine equals cytosine",
      "In DNA, the amount of adenine equals thymine and the amount of guanine equals cytosine",
      "A + T always equals G + C, in every species"
    ],
    answer: 2,
    explain: "Chargaff's rules: A = T and G = C, so purines (A + G) = pyrimidines (T + C). The \"25% each\" idea is the case file's distractor: base percentages differ between species. A = G pairs two purines, which never pair. A + T equals G + C only by coincidence; in humans A + T is about 60%." },

  { id: "g017", lesson: "3.01", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Chargaff found that the percentage of each base is the same in every species.",
    answer: false,
    explain: "The ratios A:T and G:C are always about 1, but the actual percentages vary from species to species (human DNA is about 60% A + T, while some bacteria are rich in G + C). That variety was itself a clue that DNA could carry species-specific information." },

  { id: "g018", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which method did Chargaff use to separate DNA into its components?",
    options: [
      "Chromatography",
      "X-ray diffraction",
      "Density-gradient centrifugation",
      "Radioactive labelling"
    ],
    answer: 0,
    explain: "The case file says Chargaff used chromatography to separate the bases and measure how much of each was present. X-ray diffraction was Franklin's method, density-gradient centrifugation was Meselson and Stahl's, and radioactive labelling was Hershey and Chase's." },

  { id: "g019", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What did Hershey and Chase (1952) use in their experiment?",
    options: [
      "Pneumonia bacteria injected into mice",
      "A bacteriophage (the virus T2) infecting <em>E. coli</em> bacteria",
      "Single-celled algae cut into pieces",
      "Tobacco mosaic virus infecting the leaves of tobacco plants"
    ],
    answer: 1,
    explain: "A bacteriophage is just DNA inside a protein coat, so it was ideal for asking which of the two enters the host cell. The mice were Griffith's and the algae Hämmerling's. Tobacco mosaic virus has RNA, not DNA, and was not part of this experiment." },

  { id: "g020", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Why did Hershey and Chase label the phage protein with <sup>35</sup>S and the phage DNA with <sup>32</sup>P?",
    options: [
      "Sulfur and phosphorus were the only radioactive isotopes available",
      "DNA contains sulfur in its nitrogenous bases, and protein contains phosphorus in its peptide bonds",
      "<sup>32</sup>P labels the bacteria and <sup>35</sup>S labels the virus",
      "Protein contains sulfur but DNA does not, and DNA is rich in phosphorus while protein has little"
    ],
    answer: 3,
    explain: "Each label had to mark only one molecule. Sulfur is in two amino acids (cysteine and methionine) but not in DNA; phosphorus is in every nucleotide's phosphate group but in hardly any phage protein. Bases contain no sulfur and peptide bonds contain no phosphorus. Both labels were put into the phages, not the bacteria." },

  { id: "g021", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "In the Hershey–Chase experiment, where was the radioactivity found after blending and centrifuging?",
    options: [
      "<sup>35</sup>S in the pellet with the bacteria; <sup>32</sup>P in the liquid (supernatant) with the empty phage coats",
      "Both labels in the pellet, because the whole phage enters the bacterium",
      "<sup>32</sup>P in the pellet with the bacteria; <sup>35</sup>S in the liquid (supernatant) with the empty phage coats",
      "Both labels in the supernatant, because blending removed all the phages"
    ],
    answer: 2,
    explain: "Centrifuging sends the heavy bacteria to the pellet and leaves the light phage coats in the supernatant. The <sup>32</sup>P (DNA) went into the bacteria and stayed with the pellet; the <sup>35</sup>S (protein) stayed outside in the coats. Only DNA enters the host to direct new viruses, as the slide states." },

  { id: "g022", lesson: "3.01", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "In the Hershey–Chase experiment, the blender was used to break open the bacteria so the new viruses inside could be counted.",
    answer: false,
    explain: "The blender sheared the empty phage coats off the outside of the bacteria without breaking the cells. Centrifuging then separated the bacteria (pellet) from the coats (supernatant), so the experimenters could see which label had gone inside." },

  { id: "g023", lesson: "3.01", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Hershey and Chase's results supported Avery's conclusion that DNA, not protein, is the genetic material.",
    answer: true,
    explain: "The slide says this directly. Avery's evidence came from bacterial transformation; Hershey and Chase reached the same conclusion with a completely different system (a virus), which made the case much stronger." },

  { id: "g024", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What did Rosalind Franklin's X-ray diffraction images (1953) show?",
    options: [
      "DNA's bases face outward, and the backbone runs down the very centre",
      "DNA is a helix with its sugar-phosphate backbone on the outside",
      "DNA contains equal amounts of A and T, and of G and C",
      "DNA is copied semiconservatively"
    ],
    answer: 1,
    explain: "Franklin's images (including Photo 51) showed a helix of constant width with the phosphate backbone outside, not inside as earlier models had put it. The base ratios were Chargaff's finding, and semiconservative copying was Meselson and Stahl's." },

  { id: "g025", lesson: "3.01", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Franklin found that DNA can exist in two forms, a dry form and a wet form.",
    answer: true,
    explain: "The case file notes she found two forms (wet and dry). They are called the A form (dry, crystalline) and the B form (wet, the form found in cells). Photo 51 is the B form, and it showed the helix most clearly." },

  { id: "g026", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What was Watson and Crick's main contribution in 1953?",
    options: [
      "They built the first accurate model of DNA: a double helix of two antiparallel strands joined by complementary base pairs",
      "They took the X-ray diffraction photograph (Photo 51) that first revealed the helix",
      "They measured the base ratios A = T and G = C by chromatography of DNA",
      "They proved, using heavy nitrogen, that DNA replicates semiconservatively"
    ],
    answer: 0,
    explain: "Watson and Crick did no new experiments on DNA; they combined Franklin's X-ray data with Chargaff's ratios to build a physical model. The photograph was Franklin's, the ratios were Chargaff's, and semiconservative replication was proven by Meselson and Stahl in 1958." },

  { id: "g027", lesson: "3.01", type: "tf", kind: "knowledge", tier: "extra", level: 1,
    q: "Rosalind Franklin shared the 1962 Nobel Prize with Watson, Crick and Wilkins.",
    answer: false,
    explain: "Franklin died of cancer in 1958, at 37, and Nobel Prizes are not awarded after death. Her Photo 51 had been shown to Watson by Wilkins without her knowledge, and her contribution was under-credited for decades. This is enrichment beyond the slides." },

  { id: "g028", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What did Meselson and Stahl discover in 1958?",
    options: [
      "DNA replication is conservative: the old double helix stays together and a completely new one is made",
      "DNA replication is dispersive: every strand is a patchwork of old and new pieces",
      "DNA, not protein, is the hereditary material",
      "DNA replication is semiconservative: each new double helix has one old strand and one new strand"
    ],
    answer: 3,
    explain: "The slide: \"half of the double helix is old and half is new\". Conservative and dispersive replication were the two other hypotheses their experiment ruled out. DNA as the hereditary material was established earlier by Avery and by Hershey and Chase." },

  { id: "g029", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which isotopes and which technique did Meselson and Stahl use?",
    options: [
      "<sup>35</sup>S and <sup>32</sup>P, with DNA separated by blending",
      "Heavy <sup>15</sup>N then light <sup>14</sup>N, with DNA separated by density-gradient (CsCl) centrifugation",
      "Radioactive <sup>14</sup>C, with DNA separated by chromatography",
      "Heavy <sup>15</sup>N then light <sup>14</sup>N, with the DNA bands identified by X-ray diffraction of each sample"
    ],
    answer: 1,
    explain: "<em>E. coli</em> grown on <sup>15</sup>N builds heavy DNA; after a switch to <sup>14</sup>N, new strands are light. Spinning DNA in a caesium chloride gradient makes each molecule settle where its density matches the solution, so heavy, hybrid and light DNA form separate bands. <sup>15</sup>N is a stable heavy isotope, not a radioactive one; the S/P labels belong to Hershey and Chase." },

  { id: "g030", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "After one generation in <sup>14</sup>N, Meselson and Stahl saw a single band of intermediate (hybrid) density. Which hypothesis did this result rule out?",
    options: [
      "Semiconservative replication",
      "Dispersive replication only",
      "Conservative replication only",
      "Both conservative and dispersive replication"
    ],
    answer: 2,
    explain: "Conservative replication predicts two bands after one generation (one heavy, one light), so a single hybrid band rules it out. Semiconservative and dispersive replication both predict one hybrid band, so generation 1 cannot tell them apart. Generation 2 did: a hybrid band plus a light band, which only semiconservative replication predicts." },

  { id: "g031", lesson: "3.01", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which list puts these discoveries in the correct time order?",
    options: [
      "Miescher → Griffith → Avery, MacLeod & McCarty → Hershey & Chase → Watson & Crick → Meselson & Stahl",
      "Griffith → Miescher → Hershey & Chase → Avery, MacLeod & McCarty → Watson & Crick → Meselson & Stahl",
      "Miescher → Griffith → Hershey & Chase → Avery, MacLeod & McCarty → Meselson & Stahl → Watson & Crick",
      "Miescher → Avery, MacLeod & McCarty → Griffith → Watson & Crick → Hershey & Chase → Meselson & Stahl"
    ],
    answer: 0,
    explain: "The years are 1869, 1928, 1944, 1952, 1953 and 1958. A useful logic check: Avery's work explained Griffith's, Hershey and Chase supported Avery, and Meselson and Stahl tested a prediction of Watson and Crick's model, so each must come after the work it builds on." },


  /* ---------------- 3.02 DNA Structure ---------------- */
  { id: "g032", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What are the three parts of a DNA nucleotide?",
    options: [
      "A ribose sugar, a phosphate group and a nitrogenous base",
      "A deoxyribose sugar, an amino group and a fatty acid",
      "A phosphate group, a nitrogenous base and a small histone protein",
      "A deoxyribose sugar, a phosphate group and a nitrogenous base"
    ],
    answer: 3,
    explain: "The slide lists a 5-carbon sugar (deoxyribose), a phosphate group and a nitrogenous base (A, T, C or G). Ribose is the sugar of RNA nucleotides. Histones are proteins that DNA wraps around; they are not part of a nucleotide." },

  { id: "g033", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How does deoxyribose differ from ribose?",
    options: [
      "Deoxyribose has an H instead of an –OH on its 2′ carbon (one less oxygen)",
      "Deoxyribose has an extra –OH on its 3′ carbon",
      "Deoxyribose has 6 carbons and ribose has 5",
      "Deoxyribose lacks the 5′ carbon, so it bonds to the phosphate through its 3′ carbon"
    ],
    answer: 0,
    explain: "\"Deoxy\" means \"missing an oxygen\": at the 2′ carbon ribose has –OH and deoxyribose has only –H. Both are 5-carbon sugars, and both keep the 3′ –OH and the 5′ carbon, because those are the attachment points for the phosphodiester bonds." },

  { id: "g034", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which bases are purines?",
    options: [
      "Cytosine and thymine",
      "Adenine and thymine",
      "Adenine and guanine",
      "Guanine and cytosine"
    ],
    answer: 2,
    explain: "Purines (A and G) have a double ring. The pyrimidines C, T and U have a single ring. Memory trick: \"Pure As Gold\" for purines; \"CUT the pie\" for pyrimidines (C, U, T). Adenine–thymine and guanine–cytosine are base pairs, each one purine plus one pyrimidine." },

  { id: "g035", lesson: "3.02", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Purines (adenine and guanine) have a single ring, while pyrimidines (cytosine, thymine and uracil) have a double ring.",
    answer: false,
    explain: "It is the other way round, which is the answer to review question 3: purines (A, G) are the larger double-ring bases and pyrimidines (C, T, U) have a single ring. The difference in size is why every base pair must be one purine plus one pyrimidine." },

  { id: "g036", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How many hydrogen bonds hold each base pair together?",
    options: [
      "A–T: 3; G–C: 2",
      "Both pairs: 2",
      "Both pairs: 3",
      "A–T: 2; G–C: 3"
    ],
    answer: 3,
    explain: "The slide writes them as T = A (two lines) and C ≡ G (three lines). The extra hydrogen bond makes G–C pairs a little harder to separate than A–T pairs." },

  { id: "g037", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why is the DNA double helix the same width (2 nm) along its whole length?",
    options: [
      "Histone proteins wrap the DNA and hold the two strands a fixed distance apart along the chromosome",
      "Every pair joins a double-ring purine to a single-ring pyrimidine, so every rung is the same length",
      "All four bases are exactly the same size, so every pair has the same width",
      "The phosphodiester bonds between the two strands have a fixed length"
    ],
    answer: 1,
    explain: "The slide: complementary base pairing keeps the diameter constant at 2 nm. A purine–purine pair would be too wide and a pyrimidine–pyrimidine pair too narrow. The bases are not all the same size, and phosphodiester bonds join nucleotides within one strand, not between strands." },

  { id: "g038", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which measurements match the DNA double helix in the slide figure?",
    options: [
      "2 nm wide, 0.34 nm between base pairs, 3.4 nm per full turn (10 base pairs)",
      "2 nm wide, 3.4 nm between base pairs, 0.34 nm per full turn",
      "3.4 nm wide, 0.34 nm between base pairs, 6.8 nm per full turn (20 base pairs)",
      "20 nm wide, 0.34 nm between base pairs, 10 base pairs per turn"
    ],
    answer: 0,
    explain: "One turn is 3.4 nm long and holds 10 base pairs, so each pair takes 3.4 ÷ 10 = 0.34 nm. Swapping 0.34 and 3.4 is the most common slip. The width is 2 nm." },

  { id: "g039", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is at the 5′ end and the 3′ end of a DNA strand?",
    options: [
      "5′ end: the sugar; 3′ end: a phosphate group",
      "5′ end: a nitrogenous base; 3′ end: a phosphate group",
      "Both ends finish with a phosphate group",
      "5′ end: a phosphate group; 3′ end: the sugar, with a free –OH on its 3′ carbon"
    ],
    answer: 3,
    explain: "The slide: the 5′ end terminates in a phosphate group (on the 5′ carbon) and the 3′ end terminates in the sugar. That free 3′ –OH matters later: DNA polymerase can only add nucleotides to it." },

  { id: "g040", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "A phosphodiester bond in a DNA strand joins:",
    options: [
      "a base on one strand to the base opposite it on the other strand",
      "the 1′ carbon of a sugar to its nitrogenous base",
      "the phosphate on the 5′ carbon of one nucleotide to the 3′ carbon (–OH) of the sugar in the next",
      "the 2′ carbon of one sugar to the 5′ carbon of the next"
    ],
    answer: 2,
    explain: "Phosphodiester bonds are the strong covalent links of the sugar-phosphate backbone, running 3′ to 5′ from sugar to sugar. Bases on opposite strands are held by hydrogen bonds. The sugar-to-base link at the 1′ carbon is a glycosidic (glycosyl) bond, the case file's distractor. The 2′ carbon is not used." },

  { id: "g041", lesson: "3.02", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "DNA is slightly acidic and negatively charged because of its phosphate groups.",
    answer: true,
    explain: "Each phosphate in the backbone carries a negative charge at cell pH, so the whole molecule is surrounded by negative charge. That is why the acidic part of Miescher's nuclein was the nucleic acid, and why positively charged histones bind DNA so well." },

  { id: "g042", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does it mean that the two strands of DNA are antiparallel?",
    options: [
      "They twist in opposite directions, one left-handed and one right-handed",
      "They run in opposite directions: one strand runs 5′ → 3′ and its partner runs 3′ → 5′",
      "They never touch, because the bases repel each other",
      "They have identical base sequences, so each base pairs with the same kind of base opposite it"
    ],
    answer: 1,
    explain: "Antiparallel describes direction: opposite each 5′ end is a 3′ end. Both strands wind the same way (a right-handed helix), the bases do touch through hydrogen bonds, and the sequences are complementary, not identical." },

  { id: "g043", lesson: "3.02", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "In the double helix, the nitrogenous bases face the inside and the sugar-phosphate backbones are on the outside.",
    answer: true,
    explain: "That was Franklin's key finding. The charged, water-loving backbones face the watery cell; the flat bases stack inside, where they pair by hydrogen bonds." },

  { id: "g044", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which bonds hold the two strands of DNA together, and which hold each strand together?",
    options: [
      "Phosphodiester bonds hold the two strands together; weaker hydrogen bonds join the nucleotides within each strand",
      "Peptide bonds hold the strands together; hydrogen bonds form the backbone",
      "Ionic bonds between phosphates hold both strands together",
      "Hydrogen bonds between bases hold the strands together; covalent phosphodiester bonds form each strand's backbone"
    ],
    answer: 3,
    explain: "Weak hydrogen bonds between strands let helicase (or heat) separate the strands without breaking them, while strong covalent phosphodiester bonds keep each strand's sequence intact. Peptide bonds join amino acids in proteins, and the negatively charged phosphates repel each other rather than bonding." },

  { id: "g045", lesson: "3.02", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "The large number of hydrogen bonds between the two DNA strands accounts for the molecule's structural stability.",
    answer: true,
    explain: "One hydrogen bond is weak, but a chromosome has millions of base pairs, each with 2 or 3. The slide stresses this point. (Stacking of the flat bases on top of one another adds further stability.)" },

  { id: "g046", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why does DNA with more G–C pairs need a higher temperature to separate its strands?",
    options: [
      "G–C pairs have three hydrogen bonds instead of two, so more energy is needed",
      "G and C are both purines, so each G–C pair is heavier and needs more energy to pull apart",
      "G–C pairs are joined by covalent bonds, while A–T pairs use hydrogen bonds",
      "G–C-rich DNA has more phosphate groups per base pair"
    ],
    answer: 0,
    explain: "Heating separates strands by breaking hydrogen bonds; G≡C has three to A=T's two. G is a purine but C is a pyrimidine, base pairs are never covalently joined, and every nucleotide has exactly one phosphate whatever its base." },

  { id: "g047", lesson: "3.02", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "The double helix has a wider major groove and a narrower minor groove, because the two backbones are not spaced evenly around the helix.",
    answer: true,
    explain: "Both sugars attach to the same side of each base pair, so the backbones sit closer together on one side. The slide figure labels both grooves. Proteins such as transcription factors read the bases mostly through the major groove." },

  { id: "g048", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the repeating sequence of human telomeres?",
    options: [
      "5′-TATAAA-3′",
      "5′-AAUAAA-3′",
      "5′-TTAGGG-3′",
      "5′-ATGCCC-3′"
    ],
    answer: 2,
    explain: "Telomeres are thousands of repeats of the 6-base-pair sequence 5′-TTAGGG-3′ at the ends of chromosomes. TATAAA is a TATA box (promoter), AAUAAA is the poly-A signal in pre-mRNA (it contains U, so it is RNA), and ATG is a start codon in DNA." },

  { id: "g049", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What protects a telomere from being treated like a broken piece of DNA?",
    options: [
      "A 5′ cap of 7-methylguanosine added to each chromosome end",
      "A cap of proteins (shelterin) that binds the repeats and tucks the end into a T-loop",
      "A poly-A tail of about 200 adenines added after each division",
      "A layer of histone proteins that is stripped off and rebuilt at the end of every division"
    ],
    answer: 1,
    explain: "The slide: proteins bind the telomere to form a protective cap; the figure shows the shelterin proteins (TRF1, TRF2, POT1, TIN2, TPP1, RAP1) and the T-loop, where the single-stranded 3′ end tucks back into the double-stranded repeats. The 5′ cap and poly-A tail protect mRNA, not chromosomes." },

  { id: "g050", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "What happens to the telomeres of a normal body cell as it keeps dividing?",
    options: [
      "They get longer with each division, protecting the cell more and more",
      "They stay the same length, because DNA polymerase copies the very ends completely",
      "They get shorter with each division; when they run out, the cell stops dividing and becomes inactive or destroys itself",
      "They shorten only in cancer cells"
    ],
    answer: 2,
    explain: "DNA polymerase cannot finish the very end of the lagging strand, so a little telomere is lost every round. The slide: \"with each division, the telomeres shorten... when the telomeres run out, cell division stops\" (senescence or apoptosis). Cancer cells usually escape this by switching telomerase back on." },

  { id: "g051", lesson: "3.02", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Telomerase, the enzyme that rebuilds telomeres, is highly active in most adult body cells.",
    answer: false,
    explain: "Telomerase is active in stem cells, germ cells (which make gametes) and most cancer cells. Most somatic cells have very little, which is why their telomeres shorten with age, as the slide's teenager-to-elderly figure shows." },

  { id: "g052", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "extra", level: 1,
    q: "About how many times can a typical human body cell divide in culture before its telomeres become too short (the Hayflick limit)?",
    options: [
      "About 5",
      "About 50",
      "About 500",
      "An unlimited number of times"
    ],
    answer: 1,
    explain: "Leonard Hayflick found that normal human cells stop dividing after roughly 40–60 divisions. Only cells with active telomerase (stem, germ and cancer cells) can keep going. Enrichment beyond the slides." },

  { id: "g053", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What is a nucleosome?",
    options: [
      "DNA wrapped around a core of eight histone proteins, like thread around a spool",
      "A ribosome attached to the outer membrane of the nuclear envelope, ready to make histones",
      "A dense region inside the nucleus where rRNA is made",
      "A single nucleotide that is still inside the nucleus, waiting to be used"
    ],
    answer: 0,
    explain: "Nucleosomes are the first level of chromosome packing: about 150 bp of DNA wraps around a histone octamer, giving a \"beads on a string\" look that coils further into chromatin. The region that makes rRNA is the nucleolus, a similar-sounding word." },

  { id: "g054", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why do histones bind DNA so tightly?",
    options: [
      "Histones form covalent bonds with the bases in the major groove",
      "Histones and DNA are both negatively charged",
      "Histones pair with DNA bases by hydrogen bonding, like a third strand",
      "Histones are positively charged (rich in lysine and arginine), and DNA's phosphates are negatively charged"
    ],
    answer: 3,
    explain: "Opposite charges attract: positive histones grip the negative phosphate backbone. The attraction does not depend on the base sequence, so histones can package any DNA. They do not bond covalently or base-pair." },

  { id: "g055", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which description of the three main RNAs matches the slides?",
    options: [
      "mRNA forms the ribosome, rRNA carries amino acids, tRNA copies a gene",
      "mRNA carries amino acids, rRNA copies a gene, tRNA forms the ribosome",
      "mRNA copies a gene, rRNA forms the ribosome, tRNA carries amino acids",
      "mRNA copies a gene, rRNA carries amino acids, tRNA forms the ribosome"
    ],
    answer: 2,
    explain: "Use the first letter: messenger RNA carries the message (a copy of a gene), ribosomal RNA builds the ribosome, transfer RNA transfers amino acids to the polypeptide chain." },

  { id: "g056", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "In a DNA nucleotide, which carbons of deoxyribose carry the base and the phosphate?",
    options: [
      "The base is on the 1′ carbon; the phosphate is on the 5′ carbon",
      "The base is on the 5′ carbon; the phosphate is on the 1′ carbon",
      "The base is on the 2′ carbon; the phosphate is on the 3′ carbon",
      "The base is on the 3′ carbon; the phosphate is on the 2′ carbon"
    ],
    answer: 0,
    explain: "The sugar's carbons are numbered 1′ to 5′ (the prime marks show they belong to the sugar, not the base). The base hangs off 1′, the phosphate sits on 5′, and the 3′ –OH is where the next nucleotide's phosphate attaches." },

  { id: "g057", lesson: "3.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is complementary base pairing?",
    options: [
      "A pairs with G and T pairs with C, because they are similar in size",
      "A always pairs with T (or with U in RNA) and G always pairs with C, so one strand's sequence sets its partner's",
      "Any base can pair with any other, as long as the strands are antiparallel",
      "Each base pairs with an identical base on the other strand"
    ],
    answer: 1,
    explain: "This is the definition asked in review question 2. Each pair is one purine and one pyrimidine with matching hydrogen-bond positions. Because the pairing is strict, either strand holds all the information needed to rebuild the other, which is the basis of replication." },

  { id: "g058", lesson: "3.02", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "In any double-stranded DNA, the purines (A + G) make up exactly half of the bases.",
    answer: true,
    explain: "Every pair contains one purine and one pyrimidine, so purines = pyrimidines = 50%. Equivalently, A = T and G = C, so A + G = T + C. That is the purine rule in the case file." },


  /* ---------------- 3.03 DNA Replication ---------------- */
  { id: "g059", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "When in the cell cycle does DNA replication take place?",
    options: [
      "During prophase, as the chromosomes condense",
      "During G<sub>1</sub>, right after cytokinesis",
      "Continuously, throughout every phase of the cell cycle",
      "During the S phase of interphase, before mitosis"
    ],
    answer: 3,
    explain: "The slide: replication happens during interphase, prior to mitosis; the cell-cycle figure labels that part of interphase \"S\" for DNA synthesis. By prophase each chromosome must already be two identical sister chromatids." },

  { id: "g060", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does semiconservative replication mean?",
    options: [
      "Each new double helix has one parent strand and one newly made strand",
      "One double helix is entirely old and the other is entirely new",
      "Each strand is a patchwork of old and new segments",
      "Half of the genes are copied and the other half are kept from the parent"
    ],
    answer: 0,
    explain: "The slide: each strand serves as a template for a new strand, so replicated DNA has one parent strand and one new strand. \"Entirely old plus entirely new\" is the conservative model and \"patchwork\" is the dispersive model; Meselson and Stahl ruled both out." },

  { id: "g061", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Where does DNA replication begin?",
    options: [
      "At the promoter, where RNA polymerase and transcription factors bind the DNA first",
      "At the telomeres, working inward from each end of the chromosome",
      "At an origin of replication, a specific sequence where the helix is first opened",
      "At the centromere, where sister chromatids are joined"
    ],
    answer: 2,
    explain: "Replication starts at origins of replication, where helicase opens a replication bubble. The promoter is the start signal for transcription, not replication. Telomeres and centromeres are copied like any other DNA." },

  { id: "g062", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which enzyme breaks the hydrogen bonds between base pairs and unwinds the double helix?",
    options: [
      "Topoisomerase",
      "DNA helicase",
      "DNA ligase",
      "Primase"
    ],
    answer: 1,
    explain: "Helicase \"unzips\" the helix by breaking the hydrogen bonds, exposing both strands as templates, and its unwinding creates the replication fork. Topoisomerase relieves the twisting this causes, ligase seals nicks, and primase lays down RNA primers." },

  { id: "g063", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What do single-strand binding proteins (SSBs) do?",
    options: [
      "They break the hydrogen bonds between the base pairs just ahead of the helicase enzyme",
      "They join the Okazaki fragments together on the lagging strand",
      "They cut the backbone to relieve twisting tension",
      "They coat the exposed single strands so the bases cannot hydrogen-bond back together"
    ],
    answer: 3,
    explain: "Separated strands would quickly snap back together (re-anneal). The slide: SSBs bind to the exposed bases to prevent hydrogen bonding, keeping the templates open for the polymerase. Breaking the hydrogen bonds is helicase's job, joining fragments is ligase's, and cutting to relieve tension is topoisomerase's." },

  { id: "g064", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does topoisomerase do?",
    options: [
      "It unzips the two strands at the fork by breaking the hydrogen bonds between base pairs",
      "It removes the RNA primers and replaces them with DNA nucleotides behind the fork",
      "It relieves twisting tension (supercoiling) ahead of the fork by cutting the backbone, letting it untwist, then resealing it",
      "It lays down a new RNA primer on the lagging strand for each Okazaki fragment"
    ],
    answer: 2,
    explain: "Unwinding a helix in the middle makes the DNA ahead of the fork overwind, like twisting a rope. The class key: topoisomerase temporarily cuts the DNA backbone, lets it untwist, then seals it back together. Unzipping is helicase, primer removal is DNA polymerase I, and priming is primase." },

  { id: "g065", lesson: "3.03", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "DNA gyrase, the enzyme named in the class key's answer about topoisomerase, is a bacterial type of topoisomerase.",
    answer: true,
    explain: "Check your notes: the class key's topoisomerase answer switches to the name \"DNA gyrase\" mid-sentence. Gyrase is the bacterial type II topoisomerase, a specific example. On a test, \"topoisomerase\" is the general name to use, and it covers both prokaryotes and eukaryotes." },

  { id: "g066", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is a replication fork?",
    options: [
      "The point where two neighbouring replication bubbles meet and merge",
      "The gap left after an RNA primer is removed",
      "The region of a new strand that is being proofread",
      "The Y-shaped region where helicase is unwinding the parent DNA"
    ],
    answer: 3,
    explain: "The slide defines the replication fork as the Y-shaped region where helicase unwinds DNA. Each bubble has two forks, one at each side, moving away from the origin." },

  { id: "g067", lesson: "3.03", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Replication goes in both directions from each origin, so every replication bubble has two replication forks.",
    answer: true,
    explain: "The slide: replication goes in both directions from the origin (bidirectional), always building new strands 5′ → 3′. The bubble grows at both ends until it merges with its neighbours." },

  { id: "g068", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does primase make?",
    options: [
      "A short DNA primer that DNA polymerase I later extends",
      "A short RNA primer, about 10 nucleotides long, complementary to the template",
      "A protein cap that protects the 3′ end",
      "The first Okazaki fragment, made entirely of DNA"
    ],
    answer: 1,
    explain: "Primase is an RNA polymerase: it joins about 10 RNA nucleotides into a primer (reading handout). The primer is RNA, not DNA, which is why it must later be removed and replaced by DNA polymerase I." },

  { id: "g069", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why does DNA polymerase III need a primer before it can begin?",
    options: [
      "It can only add nucleotides to an existing free 3′-OH end; it cannot start a new strand from scratch",
      "The primer unwinds the DNA ahead of the polymerase",
      "DNA polymerase can only read RNA templates",
      "The primer marks which strand is the parent strand so it is not copied"
    ],
    answer: 0,
    explain: "The class key: DNA polymerases need an existing molecule to hook onto, and the RNA primer supplies a free 3′-OH. Unwinding is helicase's job, the template is DNA, and both parent strands are copied." },

  { id: "g070", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which enzyme is the main \"builder\" that adds DNA nucleotides to a new strand?",
    options: [
      "DNA polymerase I",
      "DNA polymerase III",
      "Primase",
      "DNA ligase"
    ],
    answer: 1,
    explain: "DNA polymerase III starts at the primer and adds complementary DNA nucleotides to the growing 3′ end of the new strand. Pol I only fills in the small gaps left when primers are removed, primase makes RNA, and ligase joins fragments without adding nucleotides." },

  { id: "g071", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In which directions does DNA polymerase III work?",
    options: [
      "It reads the template 5′ → 3′ and builds the new strand 5′ → 3′",
      "It reads the template 3′ → 5′ and builds the new strand 3′ → 5′",
      "Either direction, depending on which strand it is on",
      "It reads the template 3′ → 5′ and builds the new strand 5′ → 3′"
    ],
    answer: 3,
    explain: "New nucleotides can only be added to a free 3′-OH, so the new strand always grows 5′ → 3′. Because the new strand is antiparallel to its template, the polymerase moves along the template from its 3′ end toward its 5′ end. This one rule explains leading and lagging strands." },

  { id: "g072", lesson: "3.03", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "DNA polymerase III adds new nucleotides to the 3′ end of the parental (template) strand.",
    answer: false,
    explain: "Check your notes: slide 8 words it this way, but the polymerase never adds to the template. It adds nucleotides to the free 3′-OH of the growing new (daughter) strand, so the new strand grows 5′ → 3′, while the template is read 3′ → 5′. The class key says it correctly: it adds to \"the growing 3′ end of the new DNA strand\"." },

  { id: "g073", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which statement describes the leading strand?",
    options: [
      "It is built continuously toward the replication fork and needs only one RNA primer",
      "It is built in short pieces away from the replication fork",
      "It needs a new RNA primer about every 1,000 nucleotides",
      "It is the parent strand that helicase moves along first"
    ],
    answer: 0,
    explain: "The slide: leading strand, built continuously toward the replication fork, only 1 RNA primer needed. Short pieces away from the fork, with many primers, describes the lagging strand. Leading and lagging both refer to new strands, not parent strands." },

  { id: "g074", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What are Okazaki fragments?",
    options: [
      "Short RNA primers on the leading strand",
      "Pieces of parent DNA cut out by topoisomerase",
      "Short pieces of new DNA, each started by its own RNA primer, made on the lagging strand",
      "Sections of DNA at chromosome ends that shorten each division"
    ],
    answer: 2,
    explain: "The lagging strand is built discontinuously, away from the fork, in short Okazaki fragments. Each needs its own primer; DNA polymerase I later swaps the primers for DNA and ligase joins the fragments. Shortening ends are telomeres." },

  { id: "g075", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why must one of the two new strands be made discontinuously?",
    options: [
      "Helicase can only unwind one strand at a time, so the second strand must wait and then be copied in short pieces",
      "The lagging-strand template is made of RNA, which DNA polymerase can only copy in short pieces",
      "The templates are antiparallel and DNA polymerase only builds 5′ → 3′, so on one template it must work away from the fork",
      "There are not enough free nucleotides to build both strands continuously"
    ],
    answer: 2,
    explain: "The slide: since DNA is synthesized 5′ → 3′ and the template strands run antiparallel, only one strand can be built continuously. On the other, the polymerase points away from the fork, so it must keep restarting as helicase exposes more template. Both templates are DNA." },

  { id: "g076", lesson: "3.03", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "The lagging strand needs many RNA primers, one for each Okazaki fragment.",
    answer: true,
    explain: "Each fragment starts fresh near the fork, and DNA polymerase III cannot start without a 3′-OH, so primase must lay a new primer every time. The leading strand needs only one." },

  { id: "g077", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does DNA polymerase I do?",
    options: [
      "It seals the nicks between the fragments by forming phosphodiester bonds",
      "It builds most of the leading strand",
      "It lays down the RNA primers",
      "It removes the RNA primers and replaces them with DNA nucleotides"
    ],
    answer: 3,
    explain: "Pol I is the clean-up polymerase: it removes each RNA primer and fills the gap with DNA, and it can also proofread. Sealing the last nick is ligase, building most of each strand is pol III, and laying primers is primase." },

  { id: "g078", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does DNA ligase do?",
    options: [
      "It forms phosphodiester bonds to seal the nicks in the backbone between fragments",
      "It forms hydrogen bonds between the new strand and the template strand to hold them together",
      "It removes RNA primers",
      "It unwinds the double helix ahead of the fork"
    ],
    answer: 0,
    explain: "After pol I replaces a primer, one bond in the sugar-phosphate backbone is still missing. Ligase, the \"molecular glue\" of the class key, forms that phosphodiester bond. Hydrogen bonds between strands form on their own by base pairing." },

  { id: "g079", lesson: "3.03", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "When replication is finished, DNA ligase joins the two parent strands back together.",
    answer: false,
    explain: "The two parent strands never rejoin: each one ends up in a different daughter helix, paired with a new strand (semiconservative replication). Ligase works only on the new strands, sealing the nicks between Okazaki fragments (and wherever a primer was replaced) with phosphodiester bonds." },

  { id: "g080", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What do DNA polymerases I and III do when a wrong nucleotide has just been added?",
    options: [
      "They call in ligase to cut out the wrong base, then topoisomerase to replace it with the right one",
      "Act as exonucleases: they remove the incorrect nucleotide and replace it with the correct one",
      "Nothing; only RNA polymerase can correct errors",
      "Mark the error with a primer so primase can fix it later"
    ],
    answer: 1,
    explain: "The slide: DNA polymerase I and III act as quality control, proofreading the sequence against the template; they can act as exonucleases (enzymes that remove nucleotides from the end of a strand). RNA polymerase, by contrast, lacks proofreading." },

  { id: "g081", lesson: "3.03", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Only DNA polymerase I can proofread; DNA polymerase III cannot.",
    answer: false,
    explain: "The slide says both DNA polymerase I and III proofread and can act as exonucleases. Pol III does most of the proofreading, because it adds most of the nucleotides." },

  { id: "g082", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "According to the reading handout, about how often does DNA polymerase pair a wrong base before proofreading?",
    options: [
      "About 1 in every 10 base pairs",
      "About 1 in every 100 base pairs",
      "About 1 in every 10,000 base pairs",
      "About 1 in every 10<sup>12</sup> base pairs"
    ],
    answer: 2,
    explain: "Initial pairing errors can occur about once per 10,000 base pairs. Proofreading and then mismatch repair bring the final error rate down to roughly 1 in 10<sup>9</sup> (one in a billion), which is why replication is so accurate." },

  { id: "g083", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What repairs a thymine dimer caused by UV light?",
    options: [
      "Proofreading by DNA polymerase III, which backs up, removes both thymines of the dimer and replaces them",
      "Telomerase, which adds new bases to the damaged strand",
      "Primase, which lays an RNA primer over the damaged bases so they can be skipped",
      "Excision repair: a nuclease cuts out the damage, DNA polymerase fills the gap, and ligase seals it"
    ],
    answer: 3,
    explain: "UV light joins two neighbouring thymines on the same strand, kinking the helix. The reading handout: in excision repair a nuclease cuts out the damaged strand, the gap is filled by DNA polymerase and sealed by ligase; skin cells use it constantly. Proofreading only checks new nucleotides as they are added, not damage that appears later." },

  { id: "g084", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What is mismatch repair?",
    options: [
      "Repair proteins that find and fix mispaired bases that slipped past proofreading",
      "Joining broken chromosome pieces back onto a different, non-homologous chromosome",
      "DNA ligase sealing the gaps between Okazaki fragments on the lagging strand",
      "RNA polymerase checking each new mRNA against the template after transcription"
    ],
    answer: 0,
    explain: "Mismatch repair is the second line of defence after proofreading: repair proteins scan the new DNA for mispaired bases, cut out the wrong base on the new strand and let polymerase and ligase fix it (reading handout). Joining broken pieces wrongly causes translocations, and RNA polymerase has no proofreading." },

  { id: "g085", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why do eukaryotic chromosomes need many origins of replication?",
    options: [
      "Each gene needs its own origin, because DNA polymerase cannot copy across the gap between genes",
      "Their DNA is huge and linear and polymerase is slow; one origin would take weeks, but thousands of bubbles at once finish in hours",
      "Eukaryotic DNA is circular, so it needs an origin on each side of the circle to finish",
      "Eukaryotes lack helicase, so each origin can open only a short stretch of the helix"
    ],
    answer: 1,
    explain: "The class key: eukaryotic genomes are massive linear molecules with billions of base pairs, and with a single origin, like circular bacterial DNA, copying one chromosome would take weeks or even months. Thousands of replication bubbles form at the same time and merge, so the genome is copied in a few hours. Bacteria, not eukaryotes, have circular DNA." },

  { id: "g086", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "How does replication in a bacterium such as <em>E. coli</em> differ from replication in a human cell?",
    options: [
      "The bacterial chromosome is linear with thousands of origins; human chromosomes are circular with one origin",
      "Bacteria use RNA polymerase instead of DNA polymerase to copy DNA",
      "Bacteria replicate conservatively, while humans replicate semiconservatively",
      "The bacterial chromosome is circular with one origin; human chromosomes are linear with thousands of origins"
    ],
    answer: 3,
    explain: "A bacterial chromosome is a single circle, so one origin with two forks copies it (the forks meet on the opposite side). Both use DNA polymerases and both replicate semiconservatively; Meselson and Stahl's experiment was done on <em>E. coli</em>." },

  { id: "g087", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why can both parent strands act as templates for replication?",
    options: [
      "Complementary base pairing: each strand holds the information needed to rebuild its partner",
      "Because both strands have exactly the same sequence",
      "Because each strand carries half of the genes",
      "Because the two strands are parallel, so the polymerase can read both of them in the same direction"
    ],
    answer: 0,
    explain: "The class key: since A always pairs with T and C with G, one strand dictates exactly what its partner must be, so each daughter cell gets an identical copy. The strands are complementary (not identical) and antiparallel (not parallel), and each carries the whole gene sequence in complementary form." },

  { id: "g088", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In the class card sort, which order of replication enzymes is correct?",
    options: [
      "Primase, helicase, SSBs, DNA polymerase III, topoisomerase, ligase, DNA polymerase I",
      "Helicase, SSBs, topoisomerase, primase, DNA polymerase III, DNA polymerase I, ligase",
      "Topoisomerase, helicase, SSBs, primase, DNA polymerase I, DNA polymerase III, ligase",
      "Helicase, SSBs, topoisomerase, primase, DNA polymerase I, DNA polymerase III, ligase"
    ],
    answer: 1,
    explain: "The logic: open the helix (helicase), keep it open (SSBs), relieve the twisting (topoisomerase), give the polymerase a start (primase), build (pol III), swap primers for DNA (pol I), seal the nicks (ligase). Pol I must come after pol III because there are no primers to replace until fragments are built, and ligase always acts last. Note that topoisomerase really works ahead of the fork at the same time as helicase; third place is a teaching order." },

  { id: "g089", lesson: "3.03", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "Topoisomerase only starts working after the SSBs have finished coating the strands.",
    answer: false,
    explain: "Check your notes: the card sort lists topoisomerase third, after the SSBs, but that is a teaching sequence. In the cell, topoisomerase works ahead of the fork at the same time as helicase, relieving the overwinding as fast as helicase creates it, and all the fork's enzymes work at once as the fork moves." },

  { id: "g090", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Where does the energy come from to add each new nucleotide to a growing DNA strand?",
    options: [
      "ATP made in the mitochondria, used directly by DNA polymerase for each new bond",
      "The energy released when helicase breaks the hydrogen bonds between the parent strands",
      "Each incoming nucleotide is a triphosphate (dNTP); breaking off two of its phosphates releases the energy for the new bond",
      "Ligase hydrolyses one ATP for every nucleotide that DNA polymerase adds to the strand"
    ],
    answer: 2,
    explain: "Nucleotides arrive with three phosphates (like ATP). DNA polymerase keeps one in the backbone and releases the other two as pyrophosphate, which supplies the energy to form the phosphodiester bond. No separate ATP is spent on each new bond. Helicase uses ATP to unwind, but that energy does not build the strand, and ligase acts only at nicks." },

  { id: "g091", lesson: "3.03", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why does the new strand at each tip of a linear chromosome end up slightly short?",
    options: [
      "When the last RNA primer at the very end is removed, there is no upstream 3′-OH for DNA polymerase to extend into the gap",
      "Helicase cannot unwind the last few hundred base pairs, so they are never copied",
      "Ligase destroys some telomere repeats each time it seals the final nick",
      "Topoisomerase cuts off the chromosome ends to relieve supercoiling at the tips"
    ],
    answer: 0,
    explain: "This is the end-replication problem. Inside a chromosome, every primer gap is filled by extending the next fragment's 3′ end. At the tip there is nothing beyond the last primer, so a small piece is lost each round. Telomeres are the expendable buffer, and telomerase can add repeats back." },


  /* ---------------- 3.04 Transcription ---------------- */
  { id: "g092", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which pair of features is found in RNA but not in DNA?",
    options: [
      "Deoxyribose sugar and the base thymine",
      "A double-stranded helix and the base uracil",
      "Ribose sugar and the base uracil",
      "Ribose sugar and the base thymine"
    ],
    answer: 2,
    explain: "The slide table: DNA has deoxyribose (one less oxygen on the 2′ carbon), thymine, and is double-stranded; RNA has ribose, uracil in place of thymine, and is single-stranded. Both share A, G and C." },

  { id: "g093", lesson: "3.04", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Like DNA, RNA usually forms a double helix made of two antiparallel strands.",
    answer: false,
    explain: "RNA is single-stranded. Check your notes: the slide calls RNA a \"single stranded helix\". A single RNA strand can fold back on itself so short stretches pair up (hairpins, as in tRNA), but it does not form a two-stranded double helix like DNA." },

  { id: "g094", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "The transcription worksheet key lists snRNA as a fourth kind of RNA. What does snRNA do?",
    options: [
      "It carries amino acids from the cytoplasm to the ribosome during translation",
      "It forms the large ribosomal subunit with proteins",
      "It serves as the primer for DNA replication",
      "It is part of the spliceosomes that remove introns from pre-mRNA"
    ],
    answer: 3,
    explain: "Small nuclear RNAs work in the nucleus as the RNA parts of spliceosomes, where they recognize the intron boundaries. tRNA carries amino acids and rRNA builds ribosomes. Replication primers are RNA, but they are made by primase and are not called snRNA." },

  { id: "g095", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does the central dogma state?",
    options: [
      "Genetic information flows protein → RNA → DNA",
      "Genetic information flows one way: DNA → RNA → protein",
      "Genetic information flows DNA → protein → RNA",
      "Genetic information flows freely in both directions between DNA, RNA and protein"
    ],
    answer: 1,
    explain: "The slide: genetic information flows in a one-way direction. DNA is transcribed into RNA, and RNA is translated into protein. A protein's sequence is never copied back into nucleic acid." },

  { id: "g096", lesson: "3.04", type: "tf", kind: "knowledge", tier: "extra", level: 1,
    q: "Retroviruses such as HIV use reverse transcriptase to copy their RNA into DNA, an exception to the usual DNA → RNA direction.",
    answer: true,
    explain: "Reverse transcriptase makes DNA from an RNA template, which the virus then inserts into the host's chromosomes. Information still never flows back out of protein, so the core of the central dogma holds. Enrichment beyond the slides." },

  { id: "g097", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Where does transcription take place?",
    options: [
      "At the ribosomes, in both eukaryotes and prokaryotes",
      "In the nucleus in eukaryotes; in the nucleoid region of the cytoplasm in prokaryotes",
      "In the cytosol in eukaryotes; in the nucleus in prokaryotes",
      "On the rough endoplasmic reticulum, in both"
    ],
    answer: 1,
    explain: "Transcription happens wherever the DNA is (worksheet key): in the nucleus of a eukaryotic cell, and in the nucleoid of a prokaryote, which has no nucleus. Ribosomes and the rough ER are the sites of translation." },

  { id: "g098", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "According to the slides, what is a gene?",
    options: [
      "A segment of DNA coding for a protein, with a promoter upstream and a terminator downstream",
      "A segment of mRNA with a 5′ cap and a poly-A tail",
      "An entire chromosome",
      "A segment of DNA coding for a protein, with the terminator upstream and the promoter downstream"
    ],
    answer: 0,
    explain: "The promoter (start signal) sits upstream of the coding region and the terminator (stop signal) downstream. A capped, tailed mRNA is the product of a gene, not the gene itself, and a chromosome carries hundreds to thousands of genes." },

  { id: "g099", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which sequence in the promoter helps RNA polymerase find the start of a eukaryotic gene?",
    options: [
      "The poly-A signal (AAUAAA)",
      "The start codon (AUG)",
      "The TATA box",
      "The telomere repeat (TTAGGG)"
    ],
    answer: 2,
    explain: "The slide: RNA polymerase binds the promoter region, which contains the TATA box (a stretch rich in T and A, such as TATAAA). The poly-A signal is near the 3′ end of a transcript, AUG is read by ribosomes in translation, and TTAGGG is at chromosome ends." },

  { id: "g100", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What are transcription factors?",
    options: [
      "RNA molecules that carry amino acids to the ribosome during translation",
      "Enzymes that add the 5′ cap and poly-A tail to the pre-mRNA",
      "Short DNA sequences at the end of a gene that signal RNA polymerase to stop",
      "Proteins that bind specific DNA sequences in the promoter and point RNA polymerase to the gene it should transcribe"
    ],
    answer: 3,
    explain: "The worksheet key: transcription factors are proteins that bind to the promoter region and serve as pointers for RNA polymerase, telling it which section or gene to transcribe. The slide's figure shows the TATA-binding protein binding first, then more factors and RNA polymerase. The DNA sequence that stops transcription is the terminator." },

  { id: "g101", lesson: "3.04", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Transcription factors are active mainly during termination.",
    answer: false,
    explain: "They are active during initiation (worksheet question 9): they bind the promoter and recruit RNA polymerase before any RNA is made. Termination depends on the terminator sequence." },

  { id: "g102", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In which order do the three phases of transcription occur?",
    options: [
      "Elongation, initiation, termination",
      "Initiation, elongation, termination",
      "Initiation, termination, elongation",
      "Termination, initiation, elongation"
    ],
    answer: 1,
    explain: "RNA polymerase first binds the promoter and opens the DNA (initiation), then builds the RNA (elongation), then reaches the terminator and lets go (termination). This is worksheet question 8." },

  { id: "g103", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which strand does RNA polymerase read, and in which direction does it build the mRNA?",
    options: [
      "It reads the coding strand 5′ → 3′ and builds mRNA 5′ → 3′",
      "It reads the template strand 5′ → 3′ and builds mRNA 3′ → 5′",
      "It reads both strands and builds two mRNAs",
      "It reads the template strand 3′ → 5′ and builds mRNA 5′ → 3′"
    ],
    answer: 3,
    explain: "The slide: RNA polymerase uses the DNA template strand (3′ to 5′); the coding strand (5′ to 3′) is not used; mRNA is built 5′ to 3′. All nucleic acid synthesis adds to a free 3′-OH, exactly as in replication." },

  { id: "g104", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which set of names all refer to the DNA strand that RNA polymerase does NOT read?",
    options: [
      "Template strand, antisense strand, non-coding strand",
      "Leading strand, lagging strand, parent strand",
      "Coding strand, sense strand, non-template strand",
      "Coding strand, antisense strand, template strand"
    ],
    answer: 2,
    explain: "The worksheet labels them: template / non-coding / antisense strand (read by RNA polymerase) and non-template / coding / sense strand (not read). The coding strand is called that because its sequence matches the mRNA's codons. Leading and lagging strands belong to replication." },

  { id: "g105", lesson: "3.04", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "The mRNA has the same sequence as the coding strand of DNA, except that it has U wherever the coding strand has T.",
    answer: true,
    explain: "The mRNA is complementary to the template strand, and so is the coding strand, so the mRNA and coding strand match base for base (with U for T). The slide's check shows this: coding 5′-TCG ATG GCA-3′ and mRNA 5′-UCG AUG GCA-3′." },

  { id: "g106", lesson: "3.04", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Like DNA polymerase, RNA polymerase needs a primer before it can start making RNA.",
    answer: false,
    explain: "RNA polymerase can start a new chain from scratch, so transcription needs no primer. It also unwinds the DNA itself, so no separate helicase is needed. Primase, which makes DNA replication primers, is in fact a kind of RNA polymerase." },

  { id: "g107", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "During initiation, what does RNA polymerase do after binding the promoter?",
    options: [
      "Disrupts the hydrogen bonds between the DNA strands, opening a small bubble so the template can be read",
      "Calls in helicase and primase to unwind the DNA and lay down a primer",
      "Adds a 5′ cap to the template strand to mark where transcription will start",
      "Cuts the coding strand so that only the template strand can be read"
    ],
    answer: 0,
    explain: "The slide: RNA polymerase binds the promoter (with the TATA box) and disrupts the hydrogen bonds between the strands. It opens only a short stretch (roughly 10–20 bp) at a time, reads it and lets the DNA zip back up behind it. The cap goes on the RNA, not the DNA." },

  { id: "g108", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What ends transcription?",
    options: [
      "RNA polymerase transcribes the terminator sequence, and the transcript detaches from the template",
      "RNA polymerase reaches a stop codon (UAA, UAG or UGA) in the DNA",
      "A release factor binds to RNA polymerase at the end of the gene and releases the finished transcript",
      "The 5′ cap is added to the RNA, which signals the polymerase to let go"
    ],
    answer: 0,
    explain: "The slide: the primary transcript (pre-mRNA in eukaryotes) detaches from the template when RNA polymerase transcribes the terminator sequence. Stop codons and release factors end translation, not transcription; stop codons are transcribed like any other bases." },

  { id: "g109", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the 5′ cap, and what does it do?",
    options: [
      "About 200 adenines added to the 3′ end; it helps the mRNA leave the nucleus",
      "A modified guanine (7-methylguanosine) on the 5′ end that prevents degradation and helps ribosomes bind",
      "A protein cap (shelterin) that binds the ends of chromosomes, the telomeres, to protect them from being damaged",
      "A methyl group added to each intron so the spliceosome knows which parts to remove"
    ],
    answer: 1,
    explain: "The slide: the 5′ cap is added to the 5′ end of the transcript, prevents degradation and is recognized by ribosomes to initiate translation; its figure shows 7-methylguanosine. The adenines at the 3′ end are the poly-A tail, and the protein cap on chromosome ends belongs to telomeres." },

  { id: "g110", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which statement about the poly-A tail is correct?",
    options: [
      "About 200 adenines are added to the 5′ end, where the ribosome binds",
      "It is copied from a long run of thymines in the gene's template strand",
      "It is added to DNA to protect the ends of chromosomes",
      "About 200 adenine ribonucleotides are added to the 3′ end, which protects the mRNA from degradation"
    ],
    answer: 3,
    explain: "The slide: ~200 adenine ribonucleotides added to the 3′ end; prevents degradation. The tail is not encoded by the gene: an enzyme adds it after the transcript is cut just past the AAUAAA signal. The ribosome binds the 5′ cap, and chromosome ends are protected by telomeres." },

  { id: "g111", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which sequence near the 3′ end of a pre-mRNA signals where it is cut and the poly-A tail is added?",
    options: [
      "TATAAA",
      "AUG",
      "AAUAAA",
      "UUAGGG"
    ],
    answer: 2,
    explain: "The poly-A tail slide's diagram shows AAUAAA just before the tail. Enzymes cut the transcript a short distance past this signal and add the adenines. TATAAA is a promoter (TATA box) sequence in DNA, and AUG is the start codon." },

  { id: "g112", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What happens during splicing?",
    options: [
      "Exons (coding regions) are removed and introns (non-coding regions) are joined together, by spliceosomes",
      "Exons are removed by ribosomes in the cytoplasm before translation starts",
      "Introns are joined to the 5′ cap, by RNA polymerase",
      "Introns (non-coding regions) are removed and exons (coding regions) are joined, by spliceosomes"
    ],
    answer: 3,
    explain: "The slide: removal of non-coding regions (introns) and joining of coding regions (exons), completed by spliceosomes. Memory trick: introns are \"in the way\" (or stay in the nucleus); exons are expressed. Splicing happens in the nucleus, before the mRNA leaves." },

  { id: "g113", lesson: "3.04", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Introns are the parts of a pre-mRNA that are kept in the mature mRNA and translated.",
    answer: false,
    explain: "Introns are cut out by spliceosomes; exons are kept, joined together and translated (apart from the untranslated regions at each end)." },

  { id: "g114", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Humans have only about 20,000 protein-coding genes but make many more kinds of protein. What explains much of this?",
    options: [
      "Each gene is transcribed from both of its strands",
      "Alternative splicing: the exons of one pre-mRNA can be joined in different combinations",
      "Ribosomes skip random codons as they read, making a slightly different protein each time",
      "Introns are translated into separate extra proteins"
    ],
    answer: 1,
    explain: "By including or skipping particular exons, one gene can give several mature mRNAs and so several related proteins (for example, in different tissues). Only one strand of a gene is the template, ribosomes read codons faithfully, and introns are removed and broken down, not translated." },

  { id: "g115", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why can transcription and translation happen at the same time in bacteria but not in eukaryotes?",
    options: [
      "Bacteria have no nucleus, so ribosomes can bind mRNA while it is still being made; eukaryotic mRNA is processed first",
      "Bacterial ribosomes are found inside the nucleus, right next to the DNA, so they can reach each mRNA as soon as it is made",
      "Bacteria translate their DNA directly, so they never need to make or process an mRNA copy first",
      "Bacterial RNA polymerase also works as a ribosome"
    ],
    answer: 0,
    explain: "Without a nuclear envelope, nothing separates the DNA from the ribosomes, so translation starts on the 5′ end of an mRNA while RNA polymerase is still making its 3′ end (translation worksheet key). Bacteria do use mRNA, and they have no nucleus at all." },

  { id: "g116", lesson: "3.04", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Bacterial mRNA is normally capped, given a poly-A tail and spliced, just like eukaryotic pre-mRNA.",
    answer: false,
    explain: "Bacterial genes generally have no introns, and bacterial mRNA gets no 5′ cap or long poly-A tail; it is translated as it is made. These processing steps are a eukaryotic feature that goes with having a nucleus." },

  { id: "g117", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which enzyme transcribes protein-coding genes into pre-mRNA in eukaryotes?",
    options: [
      "RNA polymerase I",
      "RNA polymerase III",
      "RNA polymerase II",
      "DNA polymerase III"
    ],
    answer: 2,
    explain: "Eukaryotes have three nuclear RNA polymerases: I makes most rRNA, II makes pre-mRNA (and snRNA), and III makes tRNA and a small rRNA. DNA polymerase III is a replication enzyme." },

  { id: "g118", lesson: "3.04", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What are the 5′ and 3′ untranslated regions (UTRs) of an mRNA?",
    options: [
      "Parts of the mature mRNA before the start codon and after the stop codon that are not translated",
      "The introns at each end of the pre-mRNA, which are removed during splicing",
      "The 5′ cap and the poly-A tail, which are added after transcription",
      "The promoter and terminator sequences of the gene, which are copied into the two ends of the mRNA"
    ],
    answer: 0,
    explain: "The slide's gene diagram labels a 5′ UTR before the start codon and a 3′ UTR after the stop codon. They are part of the exons and stay in the mature mRNA (they help with ribosome binding and stability), but they are not read into amino acids. The cap and tail are added beyond them, and the promoter and terminator are DNA signals that are not copied into the mature mRNA." },


  /* ---------------- 3.05 Translation ---------------- */
  { id: "g119", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is a codon?",
    options: [
      "The 3 bases on a tRNA that pair with the mRNA during elongation",
      "A sequence of 3 amino acids that together form one repeating unit of a polypeptide",
      "A single nucleotide that codes for one amino acid",
      "A sequence of 3 mRNA nucleotides that codes for one amino acid (or for stop)"
    ],
    answer: 3,
    explain: "The slide: a codon is a sequence of 3 nucleotides that codes for one amino acid. The 3 matching bases on a tRNA are the anticodon. One nucleotide alone could code for only 4 things, far too few for 20 amino acids." },

  { id: "g120", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which codon is the start codon, and which amino acid does it code for?",
    options: [
      "UAG, methionine (Met)",
      "AUG, no amino acid; it only signals where to start",
      "AUG, methionine (Met)",
      "UGA, tryptophan (Trp)"
    ],
    answer: 2,
    explain: "AUG signals that translation starts there, and it also codes for Met, so every new polypeptide begins with Met (it may be trimmed off later). AUG in the middle of a gene simply adds another Met. UAG and UGA are stop codons; tryptophan's only codon is UGG." },

  { id: "g121", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which of these is NOT a stop codon?",
    options: [
      "UAA",
      "UGG",
      "UAG",
      "UGA"
    ],
    answer: 1,
    explain: "The three stop codons are UAA, UAG and UGA (slide). UGG differs from UGA by one base, but it codes for tryptophan. A memory aid: \"U Are Away, U Are Gone, U Go Away\"." },

  { id: "g122", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How many codons are there, and how many amino acids do they code for?",
    options: [
      "20 codons for 20 amino acids",
      "64 codons for 64 amino acids",
      "64 codons for 20 amino acids",
      "61 codons for 64 amino acids"
    ],
    answer: 2,
    explain: "Four bases in groups of three give 4 × 4 × 4 = 64 codons (slide). 61 of them code for the 20 amino acids and 3 are stops, so most amino acids have more than one codon (redundancy)." },

  { id: "g123", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why must codons be at least three bases long?",
    options: [
      "With 4 bases, pairs give only 4<sup>2</sup> = 16 combinations, too few for 20 amino acids; triplets give 4<sup>3</sup> = 64",
      "Ribosomes are exactly three nucleotides wide, so they can only read three bases at a time as they move along",
      "Each amino acid contains three key atoms (C, H and N), and each needs its own base",
      "Pairs of bases would give only 8 combinations, while triplets give exactly 20"
    ],
    answer: 0,
    explain: "The code has to name at least 20 amino acids. Single bases name 4, pairs name 16, and triplets name 64, the smallest group that works. 2 bases give 4 × 4 = 16 combinations (not 8), and triplets give 64 (not 20)." },

  { id: "g124", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "How does genetic redundancy (more than one codon per amino acid) help the cell?",
    options: [
      "It lets each codon code for several amino acids, so proteins can vary more",
      "It makes every protein longer, so it folds into a more stable shape",
      "It lets ribosomes skip over a stop codon when the protein needs to be longer",
      "Many single-base changes, especially in the third position, still give the same amino acid, which minimizes errors"
    ],
    answer: 3,
    explain: "The slide: redundancy minimizes errors and increases the likelihood of the correct amino acid in the sequence. For example, CCU, CCC, CCA and CCG are all Pro, so a mistake in the third base changes nothing. Each codon still codes for only one amino acid; the code is redundant but not ambiguous." },

  { id: "g125", lesson: "3.05", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "The codon wheel is read from the outside in.",
    answer: false,
    explain: "The slide says to read the wheel from the inside to the outside: the first base is in the centre, the second in the next ring, the third in the outer ring, and the amino acid is on the rim." },

  { id: "g126", lesson: "3.05", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "The genetic code is nearly universal: the same codons code for the same amino acids in bacteria, plants and humans.",
    answer: true,
    explain: "Almost all organisms use the same codon table, strong evidence of a common ancestor. It is also why a human gene (such as insulin) can be translated correctly by bacteria. There are a few small exceptions, for example in mitochondria." },

  { id: "g127", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How does translation begin on a eukaryotic mRNA?",
    options: [
      "The large ribosomal subunit binds the poly-A tail and scans the mRNA 3′ → 5′",
      "The small ribosomal subunit binds the 5′ cap and scans the mRNA 5′ → 3′ until it finds the start codon",
      "The small subunit binds the TATA box on the DNA",
      "The whole ribosome binds the 5′ cap and starts at the very first nucleotide after it, whatever that codon is"
    ],
    answer: 1,
    explain: "The slide: the mRNA enters the cytosol, and the small ribosomal subunit binds the 5′ cap and scans (5′ to 3′) to locate the start codon. The TATA box is DNA in the nucleus. Starting at the first nucleotide would ignore the 5′ UTR and set the wrong reading frame." },

  { id: "g128", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "When the large subunit joins at initiation, which ribosome site holds the initiator tRNA carrying Met?",
    options: [
      "The A (aminoacyl) site",
      "The E (exit) site",
      "None; the initiator tRNA stays outside the ribosome",
      "The P (peptidyl) site"
    ],
    answer: 3,
    explain: "The slide: the large ribosomal subunit locks the aminoacyl-tRNA (carrying Met) into the peptidyl (P) site. That leaves the A site empty and ready for the second codon. The initiator is the only tRNA that enters straight into the P site; all others enter at A." },

  { id: "g129", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What are the names of the three tRNA sites in the ribosome?",
    options: [
      "A = peptidyl, P = aminoacyl, E = exit",
      "A = aminoacyl, P = peptidyl, E = exit",
      "A = aminoacyl, P = exit, E = peptidyl",
      "A = exit, P = aminoacyl, E = peptidyl"
    ],
    answer: 1,
    explain: "A tRNA moves through the sites from A to P to E: it arrives carrying one amino acid in the Aminoacyl site, holds the growing peptide chain in the Peptidyl site, and leaves, empty, from the Exit site. The initiator tRNA is the one exception: it starts in the P site." },

  { id: "g130", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Where does a new peptide bond form?",
    options: [
      "Between the amino acids on the tRNAs in the E site and the P site",
      "Between the amino acid in the A site and the anticodon of the same tRNA",
      "Between the amino acid on the tRNA in the P site (the growing chain) and the amino acid on the tRNA in the A site",
      "Between two free amino acids in the cytosol, before they reach the ribosome"
    ],
    answer: 2,
    explain: "The slide: a peptide bond forms between the amino acids in the P and A sites. The whole chain is passed from the P-site tRNA onto the amino acid in the A site, so the chain is now held by the A-site tRNA. The E-site tRNA is empty and leaving." },

  { id: "g131", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What happens during translocation?",
    options: [
      "The ribosome shifts one codon toward the 3′ end: the tRNA in the P site moves to the E site and leaves, and the tRNA in the A site moves to the P site",
      "The ribosome shifts one codon toward the 5′ end, and the tRNA in the E site moves back to the P site",
      "The tRNA in the A site moves directly to the E site and leaves",
      "The mRNA is cut one codon at a time and the pieces are released"
    ],
    answer: 0,
    explain: "The slide: translocation means the ribosome shifts; the tRNA in the P site moves to the E site and leaves, and the tRNA in the A site (now carrying the chain) moves to the P site. The A site is then empty over the next codon, and the cycle repeats. The ribosome always moves 5′ → 3′." },

  { id: "g132", lesson: "3.05", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "The ribosome moves along the mRNA in the 5′ → 3′ direction.",
    answer: true,
    explain: "The slide: the ribosome moves along the mRNA in the 5′ to 3′ direction, adding an amino acid each time it reads a new codon. That matches the direction the mRNA was made, which is why prokaryotes can start translating before transcription ends." },

  { id: "g133", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is an anticodon?",
    options: [
      "A codon that stops translation",
      "Three bases on the template strand of DNA",
      "Three bases on a tRNA that are complementary to a codon on the mRNA",
      "The site on a tRNA where the amino acid attaches"
    ],
    answer: 2,
    explain: "The slide: the anticodon is 3 complementary bases on a tRNA that pair with a codon on the mRNA. It is at the opposite end of the tRNA from the amino acid, which binds at the 3′ end." },

  { id: "g134", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is an aminoacyl-tRNA?",
    options: [
      "A tRNA with its amino acid bound to its anticodon",
      "A tRNA with its amino acid bound to its 3′ end",
      "An empty tRNA leaving from the E site",
      "The enzyme that joins amino acids into a chain"
    ],
    answer: 1,
    explain: "The slide: a tRNA is known as an aminoacyl-tRNA when its amino acid is bound to its 3′ end. The anticodon is at the other end of the molecule. An empty tRNA leaving the E site has already given up its amino acid." },

  { id: "g135", lesson: "3.05", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "A tRNA's anticodon is at the same end of the molecule as its attached amino acid.",
    answer: false,
    explain: "The anticodon is in a loop at one end of the folded tRNA, and the amino acid is bound to the 3′ end at the opposite end (slide's tRNA figure). That arrangement lets the anticodon pair with the mRNA on the small subunit while the amino acid reaches the site in the large subunit where peptide bonds form." },

  { id: "g136", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which enzyme attaches the correct amino acid to each tRNA, and what energy source does it use?",
    options: [
      "RNA polymerase, using ATP",
      "DNA ligase, using NAD<sup>+</sup>",
      "Primase, using GTP",
      "Aminoacyl-tRNA synthetase, using ATP"
    ],
    answer: 3,
    explain: "There is one aminoacyl-tRNA synthetase for each amino acid. It recognizes both the amino acid and the right tRNAs and uses ATP to \"charge\" the tRNA. These enzymes are what really connect the code to the amino acids: if a synthetase made a mistake, the wrong amino acid would be added even with correct codon pairing." },

  { id: "g137", lesson: "3.05", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Every tRNA ends in the sequence CCA at its 3′ end, where the amino acid attaches.",
    answer: true,
    explain: "All tRNAs share the 3′ CCA tail, and the amino acid is bonded to the last A. The slide's tRNA figure shows the amino acid joined at the 3′ end by an ester bond." },

  { id: "g138", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "At which codon position does flexible (\"wobble\") base pairing happen?",
    options: [
      "The third position (the 3′ end of the codon)",
      "The first position (the 5′ end of the codon)",
      "The second position (the middle base)",
      "All three positions equally"
    ],
    answer: 0,
    explain: "The slide: flexible base-pairing at the third codon position lets one tRNA recognize several synonymous codons. That is why the third base matters least (worksheet question 13): for example, a leucine tRNA with anticodon 3′-GAG-5′ reads both CUC and CUU." },

  { id: "g139", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Because of wobble pairing, a cell needs:",
    options: [
      "fewer than 61 kinds of tRNA, because one tRNA can read several codons for the same amino acid",
      "exactly 64 kinds of tRNA, one for every codon, including the stops",
      "exactly 20 kinds of tRNA, because wobble lets one tRNA read every one of the codons for its amino acid",
      "only one kind of tRNA that can carry any amino acid"
    ],
    answer: 0,
    explain: "There are 61 sense codons, but wobble at the third position lets many tRNAs cover two or three codons, so cells get by with fewer kinds. Stop codons have no tRNAs at all. Some amino acids still need several different tRNAs because their codons differ at the first or second base (for example, Leu, Ser and Arg each have six codons)." },

  { id: "g140", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "What happens when a stop codon reaches the A site?",
    options: [
      "A tRNA carrying a \"stop\" amino acid binds and caps the chain",
      "A release factor protein binds the stop codon, the polypeptide is released from the tRNA in the P site, and the ribosome comes apart",
      "The stop codon is translated into a release factor, which is added to the end of the chain",
      "The ribosome keeps going until it reaches the poly-A tail"
    ],
    answer: 1,
    explain: "No tRNA matches a stop codon. Instead a release factor (a protein shaped like a tRNA) recognizes it and triggers hydrolysis of the bond holding the finished chain to the P-site tRNA; then the subunits separate. Check your notes: the slide says the stop codon \"codes for a release factor\", but stop codons code for nothing; the release factor recognizes them." },

  { id: "g141", lesson: "3.05", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "A stop codon codes for a release factor protein.",
    answer: false,
    explain: "Check your notes: slide 13 says the stop codon \"codes for a release factor\", but that is misleading. A stop codon codes for no amino acid and nothing is built from it. A release factor protein, already present in the cytosol, recognizes and binds the stop codon in the A site, which releases the polypeptide and lets the ribosome disassemble." },

  { id: "g142", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What is a polyribosome (polysome)?",
    options: [
      "A ribosome with several large subunits",
      "One ribosome translating several different mRNAs at once",
      "Several ribosomes translating the same mRNA at the same time, one behind another",
      "A cluster of ribosomes being built in the nucleolus"
    ],
    answer: 2,
    explain: "As soon as one ribosome has moved away from the start codon, another can bind, so one mRNA can be read by many ribosomes at once. This makes many copies of a protein quickly. Each ribosome has just one small and one large subunit and reads one mRNA." },

  { id: "g143", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What are ribosomes made of?",
    options: [
      "DNA and histone proteins",
      "mRNA and tRNA",
      "Phospholipids and proteins in a membrane",
      "rRNA and proteins, arranged in a large and a small subunit"
    ],
    answer: 3,
    explain: "The slides: rRNA binds with proteins to form the ribosome, which has a large and a small subunit. Ribosomes have no membrane, which is why prokaryotes have them too. The rRNA itself catalyzes peptide bond formation." },

  { id: "g144", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why don't antibiotics that block bacterial translation stop translation in human cells?",
    options: [
      "They target the prokaryotic (70S) ribosome, which differs in structure from the eukaryotic (80S) ribosome",
      "Human cells make their proteins without ribosomes, using the rough ER instead",
      "Antibiotics cannot cross the human cell membrane at all, so they never reach the ribosomes in our cytoplasm",
      "Human ribosomes are made only of protein, so the antibiotic has no rRNA to bind"
    ],
    answer: 0,
    explain: "The worksheet key: antibiotics are often designed to target specifically the prokaryotic ribosome, which has a different structure from the eukaryotic one. The sizes 70S and 80S (S = Svedberg units, a measure of how fast they settle in a centrifuge) show the difference. Many antibiotics do enter human cells; they just do not fit human ribosomes." },

  { id: "g145", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Where does translation take place in a eukaryotic cell?",
    options: [
      "Inside the nucleus, right next to the DNA, so the mRNA does not have to travel through the nuclear pores",
      "At ribosomes in the cytoplasm, either free in the cytosol or on the rough endoplasmic reticulum",
      "In the Golgi apparatus, where proteins are also modified and packaged",
      "In the nucleolus, where the ribosomal subunits are assembled"
    ],
    answer: 1,
    explain: "The worksheet key: translation takes place at the ribosome, in the cytoplasm or on the surface of the rough ER. The nucleus and nucleolus are where transcription and ribosome assembly happen; the Golgi modifies and packages finished proteins." },

  { id: "g146", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "What directs a ribosome that is making a secreted protein to the rough ER?",
    options: [
      "A special sequence in the 3′ UTR of the mRNA that binds the ER",
      "The length of the poly-A tail, which docks onto the ER membrane",
      "A signal sequence at the start (N-terminal end) of the growing polypeptide",
      "A different start codon (not AUG) that is used only by the ribosomes bound to the ER"
    ],
    answer: 2,
    explain: "All translation starts on free ribosomes. If the first amino acids form a signal sequence, a signal-recognition particle binds it and docks the ribosome on the rough ER, so the protein is threaded into the ER for export or for membranes. Every protein still starts with AUG." },

  { id: "g147", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which of these is NOT one of the post-translational modifications shown on the slides?",
    options: [
      "Proteolytic cleavage",
      "Phosphorylation",
      "Glycosylation",
      "Splicing out introns"
    ],
    answer: 3,
    explain: "Splicing is a post-transcriptional change to pre-mRNA in the nucleus. The slide's post-translational modifications (changes to the polypeptide) are proteolytic cleavage, phosphorylation, glycosylation, carboxylation and folding by chaperone proteins." },

  { id: "g148", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which post-translational modification acts as an on/off switch for a protein's activity?",
    options: [
      "Glycosylation: adding carbohydrate chains",
      "Carboxylation: adding a carboxyl group",
      "Proteolytic cleavage: removing peptide segments",
      "Phosphorylation: adding a phosphate group"
    ],
    answer: 3,
    explain: "The slide: phosphorylation adds a phosphate group to switch protein activity on or off, and enzymes can remove it again. Glycosylation makes glycoproteins, carboxylation adds carboxyl groups to particular amino acids, and proteolytic cleavage permanently cuts off segments." },

  { id: "g149", lesson: "3.05", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Chaperone proteins help newly made polypeptides fold into their active three-dimensional shapes.",
    answer: true,
    explain: "The slide lists protein folding as a post-translational step: chaperone proteins help linear chains fold into their active 3-D shapes and keep them from clumping with other proteins." },

  { id: "g150", lesson: "3.05", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "Every AUG in an mRNA starts a new polypeptide, so a gene with three AUG codons makes three proteins.",
    answer: false,
    explain: "Only the first AUG from the 5′ end is used as the start (worked example slide): it sets the reading frame, and the ribosome continues codon by codon until a stop codon. A later AUG in the same frame simply codes for another Met inside the chain, and an AUG in a different frame is never read as a codon at all." },

  { id: "g151", lesson: "3.05", type: "mcq", kind: "knowledge", tier: "extra", level: 1,
    q: "Which molecule supplies energy for the ribosome to move during initiation and elongation?",
    options: [
      "ATP made inside the nucleus",
      "GTP",
      "NADH",
      "Deoxyribonucleoside triphosphates (dNTPs)"
    ],
    answer: 1,
    explain: "The initiation slide's figure shows GTP → GDP as the initiation complex forms, and elongation factors use more GTP for each tRNA delivery and translocation. dNTPs are the building blocks of DNA. Enrichment beyond the slides." },


  /* ---------------- 3.06 Mutations ---------------- */
  { id: "g152", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How do the slides define a mutation?",
    options: [
      "A permanent change in the nucleotide sequence of a cell's DNA",
      "Any error in an mRNA or a protein, even if the DNA itself is unchanged",
      "A harmful change in the shape of a protein",
      "A change in the number of ribosomes in a cell"
    ],
    answer: 0,
    explain: "The key word is permanent: the DNA itself changes, so the change is copied each time the DNA replicates. Errors only in mRNA or protein are temporary. A mutation does not have to be harmful." },

  { id: "g153", lesson: "3.06", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Every mutation is harmful.",
    answer: false,
    explain: "The slide: a mutation may have a negative or positive effect, or no effect at all. Many are silent or fall outside genes; a few are beneficial and are the raw material of evolution." },

  { id: "g154", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which mutations can be passed on to offspring?",
    options: [
      "Mutations in skin cells caused by UV light",
      "Mutations in any somatic (body) cell",
      "Mutations in gametes (sperm and eggs, or the cells that make them)",
      "Errors made by RNA polymerase while transcribing genes in the reproductive organs"
    ],
    answer: 2,
    explain: "The slides: heritable mutations occur in gametes; non-heritable mutations occur in somatic cells. A skin-cell mutation can cause cancer in that person, but it is not in their sperm or eggs. Transcription errors do not change the DNA at all." },

  { id: "g155", lesson: "3.06", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "A mutation in a somatic cell, such as a lung cell, is not passed on to the person's children.",
    answer: true,
    explain: "Only the DNA in gametes reaches the next generation. A somatic mutation affects the cell and its descendants within that body (it may, for example, lead to cancer), but it dies with the person." },

  { id: "g156", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why are transcription errors \"temporary\" rather than heritable?",
    options: [
      "RNA polymerase proofreads every mRNA and fixes the error",
      "The DNA is unchanged; only some mRNA copies are wrong, and they are soon broken down",
      "RNA polymerase errors happen only in somatic cells, which are never passed on to offspring",
      "Transcription errors only ever happen in gametes"
    ],
    answer: 1,
    explain: "The slide: transcription errors are not heritable because the DNA is unchanged; RNA polymerase lacks proofreading, so they are fairly common, but each faulty mRNA is short-lived and the next copy is usually correct. RNA polymerase does not proofread, and transcription errors happen in every kind of cell, gametes included; what makes them temporary is that the DNA is unchanged." },

  { id: "g157", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What do the slides call an error made during translation?",
    options: [
      "A frameshift mutation",
      "A silent mutation",
      "A phenotypic mutation",
      "A germ-line mutation"
    ],
    answer: 2,
    explain: "If a ribosome puts in a wrong amino acid, that protein molecule has an altered phenotype, but the DNA and mRNA are fine, so it is temporary. Frameshift and silent mutations are changes in DNA; germ-line mutations are in gametes." },

  { id: "g158", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which list gives the causes of gene mutations named on the slides?",
    options: [
      "DNA polymerase mispairings, spontaneous decay, and mutagens such as UV, X-rays and carcinogens",
      "Transcription errors, translation errors and splicing errors made while a gene is expressed",
      "Crossing over, independent assortment and random fertilization during sexual reproduction",
      "Translation errors, faulty chaperones and mismatch repair"
    ],
    answer: 0,
    explain: "The slide lists three causes: polymerase mispairings (replication errors that escape proofreading), spontaneous decay (normal wear and tear, such as bases losing groups) and mutagens. Transcription and translation errors do not change DNA, and mismatch repair fixes errors rather than causing them. Crossing over shuffles alleles; only errors in it cause chromosomal mutations." },

  { id: "g159", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "About 80% of new inherited point mutations originate in sperm. Why?",
    options: [
      "Sperm cells lack proofreading DNA polymerases, so every replication error made in them is kept and passed on to the child",
      "Eggs are surrounded by follicle cells that completely protect their DNA from mutagens",
      "Sperm carry more genes than eggs, so there are more places where mutations can occur",
      "Sperm stem cells keep dividing for life, so their DNA is copied many more times, with more chances for errors"
    ],
    answer: 3,
    explain: "The slide's fun fact: this is driven by continuous stem cell division throughout a male's lifetime. Every replication carries a small chance of an error, and sperm come from cells that have divided hundreds of times by middle age, while a woman's eggs finished their divisions before birth. Sperm-making cells proofread like any other cells, and sperm and eggs carry the same set of genes (apart from X/Y)." },

  { id: "g160", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What are the two kinds of point mutation?",
    options: [
      "Inversion and translocation",
      "Duplication and deletion of a whole segment of one chromosome arm",
      "Somatic and germ-line",
      "Substitution of one base, and insertion or deletion of a base"
    ],
    answer: 3,
    explain: "The slide: point mutations involve a specific base pair, either a substitution or an insertion/deletion (frameshift). Inversion, translocation and duplication are chromosomal mutations. Somatic vs germ-line describes where a mutation happens, not what kind it is." },

  { id: "g161", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is a silent mutation?",
    options: [
      "A single base substitution that changes one amino acid into another",
      "A single base substitution that creates a stop codon",
      "A single base substitution that does not change the amino acid",
      "Any mutation in a somatic cell, since it is never passed on"
    ],
    answer: 2,
    explain: "Silent mutations are possible because of redundancy: the slide's example changes GGC to GGU, and both code for glycine. Changing an amino acid is missense, creating a stop is nonsense, and \"somatic\" describes where a mutation happens." },

  { id: "g162", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does a nonsense mutation do?",
    options: [
      "It turns a codon into a premature stop codon, so the protein is cut short",
      "It adds one base and shifts the reading frame",
      "It changes a codon into a different codon that codes for the same amino acid",
      "It deletes a large section of a chromosome"
    ],
    answer: 0,
    explain: "The slide: a nonsense mutation is a single substitution that forms a premature stop codon. Its example changes CAG (Gln) to TAG in DNA, which becomes the stop codon UAG in mRNA, so the protein ends early and is usually non-functional." },

  { id: "g163", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What causes a frameshift mutation?",
    options: [
      "Substituting one base for another anywhere in the gene",
      "Inserting or deleting one or two bases (any number that is not a multiple of three)",
      "Inserting or deleting exactly three bases (one whole codon)",
      "Reversing a large section of a chromosome (an inversion)"
    ],
    answer: 1,
    explain: "The slide: a frameshift is caused by an insertion or deletion of one or two bases that shifts the reading frame. Every codon after the change is read in the wrong groups of three. A substitution keeps the frame, and adding or removing three bases adds or removes one codon without shifting the frame." },

  { id: "g164", lesson: "3.06", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "Inserting three extra nucleotides into a gene always causes a frameshift.",
    answer: false,
    explain: "Three nucleotides make exactly one codon, so the reading frame is restored right after the insertion: the protein gains one amino acid (or loses one, for a deletion) but the rest is normal. The slide shows this with a 3-nucleotide deletion: \"no frameshift; extra or missing amino acid\". It could still be harmful if it lands in an important part of the protein or creates a stop codon." },

  { id: "g165", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In the slide's sentence analogy, THE ONE BIG FLY HAD ONE RED EYE becomes THE ONE BAG FLY HAD ONE RED EYE. Which mutation does this model?",
    options: [
      "Missense",
      "Silent",
      "Nonsense",
      "Frameshift"
    ],
    answer: 0,
    explain: "One letter changed and one word changed meaning (BIG → BAG), just as one base changes one amino acid. Silent is THE WON BIG... (sounds the same, same meaning), nonsense is THE ONE BIG (cut short), and frameshift is THE ONE QBI GFL... (every word after the change is garbled)." },

  { id: "g166", lesson: "3.06", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "In the slide's sentence analogy, THE ONE BIG (with the rest of the sentence missing) represents a frameshift mutation.",
    answer: false,
    explain: "THE ONE BIG models a nonsense mutation: the \"sentence\" (protein) is cut short by a premature stop. The frameshift is THE ONE QBI GFL YHA DON ERE DEY E, where an inserted letter (Q) makes every three-letter word after it read from the wrong starting point." },

  { id: "g167", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which amino acid do the codons GAA and GAG code for?",
    options: [
      "Glutamine (Gln)",
      "Glycine (Gly)",
      "Glutamic acid (glutamate, Glu)",
      "Aspartic acid (Asp)"
    ],
    answer: 2,
    explain: "Glu is glutamic acid. Check your notes: the mutations interactive (and one quiz item) call Glu \"glutamine\", but glutamine is a different amino acid, Gln, coded by CAA and CAG. Glycine is GGN and aspartic acid is GAU/GAC." },

  { id: "g168", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which kind of mutation causes sickle-cell anemia?",
    options: [
      "A nonsense mutation that creates the stop codon UAG and cuts the β-globin chain short right after position 6",
      "A missense substitution in the β-globin gene: GAG → GUG changes glutamic acid to valine at position 6",
      "A one-base deletion (frameshift) that changes every amino acid after position 6",
      "A silent mutation, GAG → GAA, that leaves the protein unchanged"
    ],
    answer: 1,
    explain: "One base change (A → T in the DNA, so GAG → GUG in the mRNA) swaps a charged glutamic acid for a non-polar valine. The haemoglobin still forms, but it clumps when oxygen is low, bending red blood cells into sickles. The slide uses a sickle cell picture for missense, and the class interactive's \"missense\" (CTC → CAC) is this exact change." },

  { id: "g169", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which chromosomal mutation reverses a section of a chromosome?",
    options: [
      "Deletion",
      "Translocation",
      "Duplication",
      "Inversion"
    ],
    answer: 3,
    explain: "The slide: an inversion means a section of a chromosome is reversed (A-B-C becomes C-B-A in that segment). No genes are lost, but genes at the break points can be broken. Deletion removes a section, translocation moves it to a non-homologous chromosome, and duplication repeats it." },

  { id: "g170", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "A section of one chromosome is added to a non-homologous chromosome. What is this called?",
    options: [
      "Translocation",
      "Duplication",
      "Inversion",
      "Deletion"
    ],
    answer: 0,
    explain: "The slide: translocation means a section of a chromosome is added to a non-homologous chromosome. Duplication, by contrast, adds a section copied from the homologous chromosome. Translocations can fuse two genes (making a chimeric protein), put a gene next to the wrong promoter, or break a gene." },

  { id: "g171", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "According to the slides, what is a duplication?",
    options: [
      "A section of a chromosome moves to a non-homologous chromosome",
      "A section of a chromosome is removed and lost",
      "A section of a chromosome is flipped end to end and reinserted",
      "A section of a chromosome is added from its homologous chromosome, so some genes are repeated"
    ],
    answer: 3,
    explain: "The slide: a section of a chromosome is added from its homologous chromosome (usually through unequal crossing over, which leaves the homologue with a matching deletion). Extra gene copies can mean too much of a protein. The other options describe translocation, deletion and inversion." },

  { id: "g172", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "According to the slides, where does most aneuploidy (an abnormal chromosome number) come from?",
    options: [
      "Sperm with faulty cohesin proteins at the centromeres",
      "Errors in crossing over during sperm production",
      "Eggs with faulty cohesin proteins at the centromeres",
      "UV damage to body cells"
    ],
    answer: 2,
    explain: "Cohesin glues sister chromatids together until they should separate. Eggs are held paused in meiosis for decades, and their cohesin can wear out, so chromosomes fail to separate properly (nondisjunction). This is why the risk of conditions such as trisomy 21 rises with maternal age. Errors in crossing over cause structural changes instead." },

  { id: "g173", lesson: "3.06", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Most aneuploidy comes from sperm, because sperm stem cells keep dividing throughout a man's life.",
    answer: false,
    explain: "This mixes up two slide facts. Most new point mutations (~80%) come from sperm, because of all those stem cell divisions. But most aneuploidy (wrong chromosome number) comes from eggs with faulty cohesin proteins at the centromeres, which is linked to maternal age." },

  { id: "g174", lesson: "3.06", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Errors during crossing over can produce deletions, duplications, inversions and translocations.",
    answer: true,
    explain: "The slide: errors during crossing over may result in other chromosomal abnormalities, listed as deletion, duplication, translocation and inversion. For example, homologues that line up unevenly and cross over leave one chromosome with a duplication and the other with a deletion." },

  { id: "g175", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What is aneuploidy?",
    options: [
      "Having a chromosome with a reversed segment",
      "Having an abnormal number of chromosomes, such as 47 in trisomy 21",
      "Having a whole extra set of chromosomes (for example, 3n)",
      "Having a point mutation in a gene that codes for a chromosome protein"
    ],
    answer: 1,
    explain: "Aneuploidy is one (or a few) chromosomes too many or too few, usually from nondisjunction in meiosis. Trisomy 21 (Down syndrome) has three copies of chromosome 21, 47 in all. A whole extra set is polyploidy, and a reversed segment is an inversion." },

  { id: "g176", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What does UV light do to DNA?",
    options: [
      "It joins neighbouring thymines on the same strand into a thymine dimer, which kinks the helix",
      "It breaks every hydrogen bond in the exposed region, so the two strands fall apart and cannot rejoin",
      "It changes thymine into uracil, so the DNA now contains an RNA base",
      "It adds extra phosphate groups to the backbone"
    ],
    answer: 0,
    explain: "UV energy bonds two adjacent thymines (T–T) on one strand together. The kink can stall replication or cause wrong bases to be inserted, which is why sun exposure causes skin cancer. Excision repair removes dimers (lesson 3.03)." },

  { id: "g177", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which pair are both physical mutagens?",
    options: [
      "UV light and the carcinogens in tobacco smoke",
      "X-rays and benzene",
      "Spontaneous decay and DNA polymerase errors",
      "UV light and X-rays"
    ],
    answer: 3,
    explain: "Physical mutagens are forms of radiation (UV, X-rays, gamma rays). Tobacco-smoke carcinogens and benzene are chemical mutagens. Decay and polymerase errors are spontaneous causes, not mutagens at all." },

  { id: "g178", lesson: "3.06", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Spontaneous mutations are always caused by exposure to a mutagen such as UV light or X-rays.",
    answer: false,
    explain: "Spontaneous mutations happen without any outside mutagen: they come from the cell's own processes, such as replication errors that escape proofreading and the normal chemical decay of DNA (wear and tear). Mutations caused by mutagens such as UV, X-rays or carcinogens are called induced mutations." },

  { id: "g179", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why is a frameshift near the start of a gene usually worse than one near the end?",
    options: [
      "Ribosomes proofread only the first few codons, so errors near the start are never corrected",
      "Insertions and deletions near the start of a gene are always nonsense mutations",
      "Every codon after the change is misread, so a shift near the start alters almost the whole protein and often creates an early stop",
      "Bases near the start of a gene are more often in introns, which are translated first"
    ],
    answer: 2,
    explain: "Everything downstream of a frameshift is read in the wrong groups of three. Near the start, that garbles nearly every amino acid, and an early stop codon usually appears within a few codons. Near the end, most of the protein is already correct and may still work." },

  { id: "g180", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "The mutations interactive asks: why can a missense mutation be harmless in one case but cause a severe disease like sickle-cell anemia in another?",
    options: [
      "It depends on whether the substitution also creates an early stop codon in the gene",
      "It depends on whether the new amino acid has chemical properties similar to the old one, and where it sits in the protein",
      "It depends on whether the chromosome segment carrying the gene was flipped (inverted)",
      "Missense mutations are never harmless; any change to an amino acid ruins the protein"
    ],
    answer: 1,
    explain: "Replacing an amino acid with a similar one (for example, one non-polar amino acid for another) may not change folding at all, while swapping a charged amino acid for a non-polar one (glutamic acid → valine in sickle-cell) can change how the protein behaves. A premature stop is nonsense, not missense, and flipped segments are inversions." },

  { id: "g181", lesson: "3.06", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Werner syndrome, shown on the mutations slide, is caused by a mutation and produces signs of premature aging by middle age.",
    answer: true,
    explain: "The slide's photos show the same person as a teenager and at 48. The mutated gene codes for a helicase used in DNA replication and repair, so DNA damage builds up and cells age early. The gene detail is enrichment beyond the slide." },

  { id: "g182", lesson: "3.06", type: "mcq", kind: "knowledge", tier: "extra", level: 1,
    q: "Which is an example of a beneficial mutation in humans?",
    options: [
      "Trisomy 21",
      "A nonsense mutation early in the β-globin gene",
      "Lactase persistence, which lets adults keep digesting milk sugar",
      "A frameshift in a DNA repair gene"
    ],
    answer: 2,
    explain: "Most people stop making lactase after childhood. A mutation in the gene's regulatory DNA keeps it switched on, an advantage that spread in dairy-farming populations. (A deletion in the CCR5 gene, which gives resistance to some HIV strains, is another example.) The other options remove or disrupt normal function. Enrichment beyond the slides." },


  /* ---------------- 3.07 Gene Regulation: Operons ---------------- */
  { id: "g183", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is an operon?",
    options: [
      "A single eukaryotic gene with many introns and exons",
      "A cluster of genes controlled by a single promoter and operator, so they are switched on and off together",
      "A regulatory protein that binds DNA and switches genes on and off",
      "A region of a eukaryotic chromosome tightly wrapped around histones"
    ],
    answer: 1,
    explain: "The activity: an operon is a functioning unit of DNA containing a cluster of genes under the control of a single regulatory signal. Operons are typical of bacteria, and the genes are transcribed together as one mRNA. The protein that switches them off is the repressor, which is not part of the operon itself." },

  { id: "g184", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the operator?",
    options: [
      "The DNA sequence, upstream of the genes, where RNA polymerase first binds before transcribing the operon's genes",
      "The regulatory gene, located upstream, that codes for the repressor protein",
      "The protein that binds the DNA and blocks RNA polymerase when lactose is absent",
      "The \"on/off switch\": a DNA sequence between the promoter and the structural genes where the repressor binds"
    ],
    answer: 3,
    explain: "The activity: the operator is located between the promoter and the structural genes and is the binding site for a repressor. When the repressor is bound, it physically blocks RNA polymerase from moving into the genes. RNA polymerase binds the promoter; the repressor is a protein made by a separate regulatory gene." },

  { id: "g185", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In what order are the parts of the lac operon arranged along the DNA?",
    options: [
      "Promoter, operator, structural genes (<em>lacZ</em>, <em>lacY</em>, <em>lacA</em>)",
      "Operator, promoter, structural genes",
      "Structural genes, operator, promoter",
      "Promoter, structural genes (<em>lacZ</em>, <em>lacY</em>, <em>lacA</em>), operator"
    ],
    answer: 0,
    explain: "RNA polymerase binds the promoter and must pass through the operator to reach the structural genes. That is why a repressor on the operator works like a roadblock. If the operator were after the genes, it could not stop their transcription." },

  { id: "g186", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "The lac operon is inducible. What does that mean?",
    options: [
      "It is on by default and switched off when lactose is present",
      "It is always on, whatever the cell's environment",
      "It is off by default and switched on when an inducer (lactose) is present",
      "It is off by default and switched on only when the amino acid tryptophan is present"
    ],
    answer: 2,
    explain: "The activity: the lac operon is an inducible system, \"OFF\" by default. Lactose induces (turns on) the genes needed to break it down. \"On by default, switched off by its product\" describes a repressible operon such as trp." },

  { id: "g187", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "When lactose is absent, why is the lac operon switched off?",
    options: [
      "The cell has no RNA polymerase when lactose is absent",
      "Lactose is needed to build the promoter",
      "The repressor is bound to lactose and sits on the promoter, blocking RNA polymerase",
      "The active repressor protein binds the operator and blocks RNA polymerase"
    ],
    answer: 3,
    explain: "The lac repressor is made in an active form, so with no lactose around it sits on the operator, and RNA polymerase cannot transcribe <em>lacZ</em>, <em>lacY</em> and <em>lacA</em>. The activity: the cell saves energy by not making enzymes it does not need. RNA polymerase is always present, and the promoter is part of the DNA." },

  { id: "g188", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How does lactose switch the lac operon on?",
    options: [
      "It binds the repressor and changes its shape, so the repressor releases the operator",
      "It binds the operator directly and pushes the repressor off",
      "It binds RNA polymerase and makes it faster",
      "It binds the repressor and activates it, so the repressor binds tightly to the operator"
    ],
    answer: 0,
    explain: "The activity: lactose acts as an inducer; it binds the repressor, changing its shape so it releases from the operator. This is allosteric regulation: a molecule binding one site of a protein changes the shape of another site. Activating a repressor is what tryptophan does in the trp operon." },

  { id: "g189", lesson: "3.07", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Strictly speaking, the molecule that binds the lac repressor is allolactose, a slightly rearranged form of lactose made inside the cell.",
    answer: true,
    explain: "A few β-galactosidase molecules are always present, and they convert some incoming lactose into allolactose, which is the real inducer. The class activity simply says \"lactose\", which is fine for most answers. Mentioning allolactose shows extra precision." },

  { id: "g190", lesson: "3.07", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "When lactose is present, the lac repressor is still being made, but it is held in an inactive shape that cannot bind the operator.",
    answer: true,
    explain: "Lactose does not destroy the repressor or stop <em>lacI</em> from being expressed; the regulatory gene keeps making repressor all the time. The inducer simply changes the repressor's shape. That is why the operon switches off again within minutes once the lactose is used up." },

  { id: "g191", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which genes are the structural genes of the lac operon?",
    options: [
      "<em>lacI</em>, <em>lacZ</em> and <em>lacY</em>",
      "<em>lacZ</em>, <em>lacY</em> and <em>lacA</em>",
      "<em>trpE</em>, <em>trpD</em>, <em>trpC</em>, <em>trpB</em> and <em>trpA</em>",
      "<em>lacP</em>, <em>lacO</em> and <em>lacZ</em>"
    ],
    answer: 1,
    explain: "The activity names <em>lacZ</em>, <em>lacY</em> and <em>lacA</em> as the lactose digestion genes. <em>lacI</em> is the regulatory gene for the repressor, outside the operon's structural genes; the promoter and operator are control sequences, not genes; the five trp genes belong to the trp operon." },

  { id: "g192", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What does β-galactosidase, the product of <em>lacZ</em>, do?",
    options: [
      "It splits lactose into glucose and galactose",
      "It pumps lactose into the cell across the membrane",
      "It binds the operator to block transcription",
      "It joins glucose and galactose to make lactose"
    ],
    answer: 0,
    explain: "β-galactosidase hydrolyses lactose into glucose and galactose, which the cell can then use for energy. The permease (from <em>lacY</em>) pumps lactose in, <em>lacA</em> codes for a transacetylase, and the repressor (from <em>lacI</em>) binds the operator. The operon is catabolic: it breaks lactose down rather than building it." },

  { id: "g193", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which gene codes for the lac repressor, and how is it expressed?",
    options: [
      "<em>lacZ</em>, transcribed only when lactose is present",
      "<em>lacA</em>, transcribed only when glucose is absent",
      "<em>lacI</em>, a regulatory gene with its own promoter that is transcribed all the time",
      "The operator, which is transcribed and then translated into the repressor protein"
    ],
    answer: 2,
    explain: "The regulatory gene <em>lacI</em> sits just upstream of the operon and is always expressed at a low level, so a few repressor molecules are always present to keep the operon off. The operator is a binding site that is never transcribed into a protein." },

  { id: "g194", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "The trp operon is repressible. What does that mean?",
    options: [
      "It is off by default and switched on when tryptophan is plentiful",
      "It is off by default and switched on when lactose is present",
      "It is always off unless the repressor gene is deleted",
      "It is on by default and switched off when tryptophan is plentiful"
    ],
    answer: 3,
    explain: "The activity: the trp operon is a repressible system, \"ON\" by default. The cell normally needs to make its own tryptophan; once there is plenty, the operon is repressed so the cell does not overproduce it." },

  { id: "g195", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What role does tryptophan play in regulating the trp operon?",
    options: [
      "An inducer: it binds the repressor, changes its shape and removes it from the operator",
      "A corepressor: it binds the inactive repressor, activating it so it binds the operator",
      "It binds RNA polymerase directly and stops it",
      "It is the repressor protein itself"
    ],
    answer: 1,
    explain: "The activity: excess tryptophan acts as a corepressor; it binds the inactive repressor, activating it, and the active repressor locks onto the operator, stopping transcription. An inducer does the opposite (lactose in the lac operon). The trp repressor is a protein made by the regulatory gene <em>trpR</em>." },

  { id: "g196", lesson: "3.07", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "In the trp operon, the repressor is active on its own and binds the operator whenever tryptophan is absent.",
    answer: false,
    explain: "The trp repressor is inactive on its own and cannot bind the operator until tryptophan (the corepressor) binds to it. That is why the trp operon is on by default: with no tryptophan around, RNA polymerase transcribes the genes freely. The lac repressor is the one that is active on its own." },

  { id: "g197", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which genes are the structural genes of the trp operon?",
    options: [
      "<em>trpR</em>, <em>trpE</em> and <em>trpA</em>",
      "<em>lacZ</em>, <em>lacY</em> and <em>lacA</em>",
      "<em>trpE</em>, <em>trpD</em>, <em>trpC</em>, <em>trpB</em> and <em>trpA</em>",
      "<em>trpO</em> and <em>trpP</em>"
    ],
    answer: 2,
    explain: "The activity lists five tryptophan synthesis genes, <em>trpE</em>, <em>trpD</em>, <em>trpC</em>, <em>trpB</em> and <em>trpA</em>, which code for the enzymes of the pathway that builds tryptophan. <em>trpR</em> is the separate regulatory gene for the repressor, and O and P are the operator and promoter." },

  { id: "g198", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Which pattern usually matches inducible and repressible operons?",
    options: [
      "Inducible operons control anabolic pathways; repressible operons control catabolic pathways",
      "Both kinds control only anabolic pathways, such as making amino acids",
      "Inducible operons are found only in eukaryotes, and repressible ones only in bacteria",
      "Inducible operons control catabolic pathways (breaking down a nutrient); repressible operons control anabolic pathways (building a product)"
    ],
    answer: 3,
    explain: "It makes sense: enzymes to digest a food are only worth making when that food is present (lac: lactose switches it on), while enzymes to build a needed molecule should run until there is enough (trp: tryptophan switches it off). Both kinds are typical of bacteria." },

  { id: "g199", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "In the lac operon, when is the CAP–cAMP complex bound near the promoter, boosting transcription?",
    options: [
      "When glucose is low, so cAMP levels are high",
      "When glucose is high, so cAMP levels are high",
      "Only when lactose is absent",
      "Only when tryptophan is plentiful"
    ],
    answer: 0,
    explain: "Glucose is the bacterium's preferred food. When glucose runs low, cAMP builds up and binds CAP (catabolite activator protein), and CAP–cAMP helps RNA polymerase bind the lac promoter. With plenty of glucose, cAMP is low and the operon is transcribed only weakly, even if lactose is present." },

  { id: "g200", lesson: "3.07", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "The lac repressor is an example of positive control, while CAP–cAMP is an example of negative control.",
    answer: false,
    explain: "It is the reverse. In negative control a bound protein turns transcription off (the repressor on the operator); in positive control a bound protein turns transcription up (CAP–cAMP near the promoter). The lac operon uses both, so it is fully on only when lactose is present and glucose is absent." },

  { id: "g201", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why do bacteria regulate their genes with operons instead of making every enzyme all the time?",
    options: [
      "Bacteria have too few ribosomes to translate more than one gene at a time",
      "Making enzymes that are not needed wastes energy and materials, so genes are switched on only when they are needed",
      "Enzymes that are not being used would build up and damage the bacterium's DNA",
      "Operons let bacteria change their DNA sequence to suit the environment"
    ],
    answer: 1,
    explain: "The activity stresses saving energy: with no lactose, making lactose-digesting enzymes would be a waste; with plenty of tryptophan, making more would also be a waste. Regulation changes which genes are expressed, not the DNA sequence itself." },

  { id: "g202", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "At which stage of gene expression do the lac and trp operons control their genes?",
    options: [
      "Transcription",
      "Translation",
      "Post-translational modification",
      "DNA replication"
    ],
    answer: 0,
    explain: "Both operons act by allowing or blocking RNA polymerase's access to the structural genes, which is control of transcription, the most energy-efficient point: no mRNA, no protein. Eukaryotes also regulate at later stages, such as splicing, translation and protein modification." },

  { id: "g203", lesson: "3.07", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Every cell in a multicellular organism has (almost) the same DNA, so cells become different by expressing different sets of genes.",
    answer: true,
    explain: "A nerve cell and a muscle cell carry the same genome, but each transcribes only the genes it needs. Housekeeping genes (such as those for glycolysis enzymes) are on in nearly every cell, while others are switched on only in certain cells or conditions." },

  { id: "g204", lesson: "3.07", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Which of these is a way eukaryotes regulate gene expression that bacterial operons do not use?",
    options: [
      "Proteins binding DNA near a promoter to block or help RNA polymerase",
      "Controlling whether RNA polymerase can start transcription",
      "Alternative splicing of pre-mRNA in the nucleus",
      "Switching genes on in response to a chemical signal"
    ],
    answer: 2,
    explain: "Bacterial genes have no introns, so splicing cannot be a control point for them. Eukaryotes also use proteins that bind near promoters (transcription factors and repressors) and respond to chemical signals, so those are shared. Eukaryotic control also happens at mRNA stability, translation and post-translational modification (lessons 3.04 and 3.05)." },


  /* ---------------- Mix: whole unit ---------------- */
  { id: "g205", lesson: "mix", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which enzyme can start a new nucleic acid chain from scratch, with no primer?",
    options: [
      "DNA polymerase III",
      "RNA polymerase",
      "DNA polymerase I",
      "DNA ligase"
    ],
    answer: 1,
    explain: "RNA polymerases (including primase, which is a specialized RNA polymerase) can start a chain without an existing 3′-OH. That is exactly why primase is needed in replication: DNA polymerases I and III can only extend an existing strand. Ligase joins strands but never builds one." },

  { id: "g206", lesson: "mix", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which statement about directions is true across replication, transcription and translation?",
    options: [
      "DNA is built 5′ → 3′, but mRNA is built 3′ → 5′",
      "Ribosomes read mRNA 3′ → 5′, to match the direction in which the template was read",
      "The leading strand is built 5′ → 3′ and the lagging strand 3′ → 5′",
      "New DNA and RNA strands are always built 5′ → 3′, and ribosomes read mRNA 5′ → 3′"
    ],
    answer: 3,
    explain: "All nucleic acid synthesis adds nucleotides to a free 3′-OH, so every new strand (leading, lagging, primer, mRNA) grows 5′ → 3′, and templates are read 3′ → 5′. Ribosomes read mRNA in the same 5′ → 3′ direction it was made. The lagging strand is also built 5′ → 3′, just in pieces, away from the fork." },

  { id: "g207", lesson: "mix", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In a eukaryotic cell, where do replication, transcription and translation take place?",
    options: [
      "Replication in the nucleus, transcription in the cytoplasm, translation in the cytoplasm",
      "Replication in the nucleus, transcription in the nucleus, translation in the cytoplasm",
      "Replication in the cytoplasm, transcription in the nucleus, translation in the nucleus",
      "All three in the nucleus"
    ],
    answer: 1,
    explain: "DNA never leaves the nucleus, so the two processes that use DNA as a template (replication and transcription) happen there. Mature mRNA is exported through nuclear pores to ribosomes in the cytoplasm (free or on the rough ER)." },

  { id: "g208", lesson: "mix", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which of these enzymes proofreads its work?",
    options: [
      "RNA polymerase",
      "Primase",
      "DNA polymerase III",
      "DNA ligase"
    ],
    answer: 2,
    explain: "DNA polymerases I and III proofread and act as exonucleases. RNA polymerase lacks proofreading (that is why transcription errors are common but temporary), and primase's RNA primers are thrown away anyway. Ligase only seals nicks." },

  { id: "g209", lesson: "mix", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which list matches each bond with what it joins?",
    options: [
      "Peptide bonds join amino acids; phosphodiester bonds join nucleotides in a strand; hydrogen bonds join paired bases",
      "Peptide bonds join nucleotides; phosphodiester bonds join amino acids; hydrogen bonds join paired bases",
      "Hydrogen bonds join amino acids; peptide bonds join paired bases; phosphodiester bonds join nucleotides",
      "Phosphodiester bonds join paired bases; hydrogen bonds join nucleotides in a strand; peptide bonds join amino acids"
    ],
    answer: 0,
    explain: "Ribosomes make peptide bonds (translation), DNA polymerase and ligase make phosphodiester bonds (replication), and hydrogen bonds form on their own between complementary bases (the double helix, and codon–anticodon pairing)." },

  { id: "g210", lesson: "mix", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "In both DNA replication and transcription, an adenine on the template pairs with a thymine in the new strand.",
    answer: false,
    explain: "In replication, template A pairs with T. In transcription the new strand is RNA, which has no thymine, so template A pairs with uracil (U)." },

  { id: "g211", lesson: "mix", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which experiment is correctly matched with its conclusion?",
    options: [
      "Hershey and Chase: DNA's sugar-phosphate backbone is on the outside",
      "Chargaff: DNA is the transforming principle",
      "Griffith: hereditary information is stored in the nucleus",
      "Meselson and Stahl: DNA replication is semiconservative"
    ],
    answer: 3,
    explain: "The backbone was Franklin's finding, the transforming principle was identified by Avery, MacLeod and McCarty, and the nucleus result is Hämmerling's. Hershey and Chase showed that only DNA enters the host cell; Chargaff found A = T and G = C; Griffith discovered transformation." },

  { id: "g212", lesson: "mix", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which list shows the path from a eukaryotic gene to a protein, with what carries out each step?",
    options: [
      "DNA → (RNA polymerase) → pre-mRNA → (spliceosomes, cap and tail) → mature mRNA → (ribosome) → polypeptide",
      "DNA → (DNA polymerase) → mRNA → (spliceosomes) → tRNA → (ribosome) → polypeptide",
      "DNA → (ribosome) → pre-mRNA → (RNA polymerase) → mature mRNA → (spliceosomes, cap and tail) → polypeptide",
      "mRNA → (reverse transcriptase) → DNA → (ribosome) → polypeptide"
    ],
    answer: 0,
    explain: "RNA polymerase transcribes the gene into pre-mRNA, which is capped, tailed and spliced in the nucleus into mature mRNA; ribosomes (with tRNAs) translate it in the cytoplasm. DNA polymerase copies DNA into DNA, not into mRNA, and ribosomes never read DNA." },

  { id: "g213", lesson: "mix", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Uracil is found in the primers made during DNA replication.",
    answer: true,
    explain: "Primase makes RNA primers, and RNA uses U instead of T. That is one reason the primers must be removed and replaced with DNA by DNA polymerase I before replication is finished." },

  { id: "g214", lesson: "mix", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Which comparison of replication and transcription is correct?",
    options: [
      "Both copy the whole genome each cell cycle, using both strands as templates",
      "Transcription uses both strands of each gene, while replication uses only one strand",
      "Replication copies the whole genome using both strands as templates; transcription copies only certain genes, using one strand of each",
      "Replication makes RNA copies, while transcription makes new DNA for daughter cells"
    ],
    answer: 2,
    explain: "Replication happens once per cell cycle and must copy everything, so both strands are templates. Transcription happens over and over, only for the genes a cell needs, and reads only the template strand of each gene. Replication makes DNA; transcription makes RNA." },

  { id: "g215", lesson: "mix", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which structures protect which molecules from being degraded or damaged?",
    options: [
      "The 5′ cap protects chromosome ends; telomeres protect mRNA",
      "Telomeres (with their protein cap) protect chromosome ends; the 5′ cap and poly-A tail protect mRNA",
      "The poly-A tail protects the ends of chromosomes; telomeres protect mRNA",
      "Histones protect mRNA; the 5′ cap protects proteins"
    ],
    answer: 1,
    explain: "Telomeres are DNA repeats (TTAGGG) at chromosome ends, capped by shelterin proteins (lesson 3.02). The 5′ cap and the ~200-nucleotide poly-A tail are added to pre-mRNA (lesson 3.04) and stop enzymes in the cytoplasm from breaking the mRNA down too soon." }
);
