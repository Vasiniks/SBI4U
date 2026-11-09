// Applied quiz, Unit 3 Molecular Genetics (lessons 3.01-3.07): new scenarios, sequences to transcribe and translate,
// mutation classification, experiment predictions, base-percentage and replication arithmetic, operon conditions.
// "extra" tier = beyond the slides. Every sequence answer was checked codon by codon against the standard genetic code.
window.QUIZ_APPLIED = window.QUIZ_APPLIED || [];
window.QUIZ_APPLIED.push(

// ---------- 3.01 History of Genetics ----------
{ id: "ga01", lesson: "3.01", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Suppose Griffith had injected a mouse with heat-killed <strong>R</strong> strain mixed with live <strong>S</strong> strain. Predict the result.`,
  options: [
    `The mouse lives, because DNA from the dead R cells transforms the S cells into harmless R cells`,
    `The mouse lives, because the two strains cancel each other out`,
    `The mouse dies, because the live S cells are already virulent`,
    `The mouse dies only if R-strain DNA enters the S cells`],
  answer: 2,
  explain: `Live S cells kill a mouse on their own (Griffith's second injection), so the mouse dies no matter what is mixed in. Even if a few S cells took up R-strain DNA, plenty of capsule-making S cells would remain. The informative mixture is the reverse one: dead S with live R.` },

{ id: "ga02", lesson: "3.01", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Before mixing heat-killed S cells with live R cells, a student treats the dead S cells with DNase (an enzyme that destroys DNA). Predict the outcome.`,
  options: [
    `The mouse dies, because DNase cannot affect cells that are already dead`,
    `The mouse dies, because the S-strain capsule is still present`,
    `The mouse lives, but live S cells are recovered from its blood`,
    `The mouse lives and no live S cells are recovered`],
  answer: 3,
  explain: `With the S-strain DNA destroyed, there is nothing to transform the R cells, so they stay harmless and the mouse lives, just as in Avery, MacLeod and McCarty's DNase tube. The dead cells' capsules cannot make living R cells virulent, and no S cells can appear without transformation.` },

{ id: "ga03", lesson: "3.01", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `In an Avery-style experiment, the extract in one tube still transformed R cells into S cells after being treated with a single enzyme. Which enzyme could it have been?`,
  options: [
    `DNase`,
    `A protease`,
    `DNase and protease together`,
    `DNase and RNase together`],
  answer: 1,
  explain: `Transformation still happens whenever the DNA is intact. Any treatment that includes DNase destroys the transforming principle, so only the protease tube (proteins destroyed, DNA intact) can still transform. That pattern is exactly how Avery, MacLeod and McCarty showed that DNA, not protein, is responsible.` },

{ id: "ga04", lesson: "3.01", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `If protein, not DNA, had been the genetic material of phages, what would Hershey and Chase have found?`,
  options: [
    `Most of the <sup>35</sup>S in the pellet with the infected bacteria, and labelled protein in the new phages`,
    `Most of the <sup>32</sup>P in the pellet with the infected bacteria`,
    `Both labels in the supernatant, because neither molecule would need to enter the bacteria`,
    `No radioactivity anywhere, because protein labels are destroyed when phages infect`],
  answer: 0,
  explain: `Whatever molecule carries the instructions must enter the host. If it were protein, the sulfur label would have gone into the bacteria and ended up in the pellet. The real result (<sup>32</sup>P in the pellet, <sup>35</sup>S in the supernatant) is the opposite, which is why the experiment supported DNA.` },

{ id: "ga05", lesson: "3.01", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Why could Hershey and Chase not have used radioactive carbon (<sup>14</sup>C) to tell phage DNA from phage protein?`,
  options: [
    `Carbon is not found in viruses, only in the bacteria they infect`,
    `Both DNA and protein contain carbon, so the label would be in both molecules`,
    `<sup>14</sup>C is not radioactive, so it could not be detected`,
    `Carbon would kill the bacteria before infection`],
  answer: 1,
  explain: `A useful label must be in one molecule and not the other. Carbon (like hydrogen, oxygen and nitrogen) is in both DNA and protein. Only phosphorus (in DNA's phosphate groups) and sulfur (in some amino acids) separate them, which is why <sup>32</sup>P and <sup>35</sup>S were chosen.` },

{ id: "ga06", lesson: "3.01", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A foot (with the nucleus) of <em>Acetabularia mediterranea</em>, which has a smooth disc-shaped cap, is grafted to a stalk of <em>A. crenulata</em>, which has a cap split into finger-like rays. The cap is cut off and allowed to regrow several times. What cap eventually forms?`,
  options: [
    `A smooth disc, like <em>A. mediterranea</em>, because the nucleus came from <em>A. mediterranea</em>`,
    `A cap split into rays, like <em>A. crenulata</em>, because the stalk came from <em>A. crenulata</em>`,
    `A permanent 50:50 blend of the two cap shapes`,
    `No cap, because cells of different species cannot be grafted`],
  answer: 0,
  explain: `The nucleus directs regeneration, so in the end the cap matches the species that supplied the nucleus. The first cap may look intermediate, because the stalk still holds instructions made earlier by its own (now removed) nucleus, but those run out after the cap is cut and regrown. This is how Hämmerling located the hereditary information in the nucleus.` },

{ id: "ga07", lesson: "3.01", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A student cuts an <em>Acetabularia</em> into three pieces: the cap, the stalk, and the foot. Which piece can regenerate a complete alga, again and again?`,
  options: [
    `Only the cap, because it is the largest structure`,
    `The cap and the foot`,
    `Only the foot, because it contains the nucleus`,
    `All three pieces`],
  answer: 2,
  explain: `Regeneration needs genetic instructions, and the only nucleus is in the foot. A nucleus-free stalk can sometimes regrow a cap once from leftover instructions, but it cannot keep regenerating, and a cap alone dies. This matches the slide: removing the cap leads to a new cap, but removing the foot leads to no regrowth.` },

{ id: "ga08", lesson: "3.01", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Meselson and Stahl let <em>E. coli</em> with heavy (<sup>15</sup>N) DNA replicate twice in light (<sup>14</sup>N) medium. What did they see, and which hypothesis did it rule out?`,
  options: [
    `A single band a little lighter than hybrid, ruling out semiconservative replication`,
    `A heavy band and a light band, ruling out semiconservative replication`,
    `Only a hybrid band, ruling out conservative replication`,
    `Equal hybrid and light bands, ruling out dispersive replication`],
  answer: 3,
  explain: `After two semiconservative rounds there are 4 helices: 2 hybrid (an original heavy strand + a new light strand) and 2 fully light, so two bands of equal amount. Dispersive replication predicts a single band between hybrid and light, so that model failed. A heavy band is the conservative prediction, already ruled out after generation 1.` },

{ id: "ga09", lesson: "3.01", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `In a reverse Meselson–Stahl experiment, bacteria grown for many generations in light <sup>14</sup>N are moved to heavy <sup>15</sup>N. Assuming semiconservative replication, which bands appear after two generations?`,
  options: [
    `Half hybrid and half light`,
    `All heavy`,
    `Half hybrid and half heavy`,
    `A single band halfway between hybrid and heavy`],
  answer: 2,
  explain: `Generation 1: each light helix gives two hybrid helices (old light + new heavy). Generation 2: each hybrid gives one hybrid (old light strand + new heavy) and one fully heavy (old heavy + new heavy), so the DNA is half hybrid, half heavy. The two original light strands survive in two hybrid helices forever, so a fully light band never returns.` },


// ---------- 3.02 DNA Structure ----------
{ id: "ga10", lesson: "3.02", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A molecule of DNA is analyzed and found to contain 20% thymine. What are the percentages of adenine, guanine and cytosine?`,
  options: [
    `A 20%, G 40%, C 40%`,
    `A 20%, G 30%, C 30%`,
    `A 30%, G 30%, C 20%`,
    `A 80%, G 0%, C 0%`],
  answer: 1,
  explain: `Review question 1 and the case file's final code. A = T, so A = 20%. Together A + T = 40%, leaving 60% for G + C, and G = C, so each is 30%. G 40% and C 40% forgets to count adenine; A 80% treats the four bases as if they must add to 100% with T alone.` },

{ id: "ga11", lesson: "3.02", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A DNA sample contains 32% guanine. What percentage of its bases are adenine?`,
  options: [
    `18%`,
    `32%`,
    `36%`,
    `68%`],
  answer: 0,
  explain: `G = C = 32%, so G + C = 64%. That leaves 100 − 64 = 36% for A + T, and A = T, so A = 18%. 36% is A + T together (a common slip), and 68% is 100 − 32 without counting cytosine.` },

{ id: "ga12", lesson: "3.02", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `The bases in the genetic material of a virus are A 25%, T 33%, G 24% and C 18%. What can you conclude?`,
  options: [
    `It is double-stranded DNA, because it contains thymine`,
    `It is RNA, because the percentages are uneven`,
    `It is double-stranded DNA with an unusually high A + T content`,
    `It is single-stranded DNA, because A ≠ T and G ≠ C`],
  answer: 3,
  explain: `Thymine means it is DNA, not RNA. But in a double helix every A pairs with a T and every G with a C, so A = T and G = C must hold. Here they do not, so the DNA cannot be double-stranded. Some viruses do have single-stranded DNA genomes.` },

{ id: "ga13", lesson: "3.02", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Review question 4: a strand of DNA reads 5′-ATGCCTTA-3′. Which answer correctly gives its complementary strand?`,
  options: [
    `5′-TACGGAAT-3′`,
    `3′-TACGGAAT-5′`,
    `3′-UACGGAAU-5′`,
    `3′-ATGCCTTA-5′`],
  answer: 1,
  explain: `Pair each base (A–T, G–C) and keep the strands antiparallel: under 5′-ATGCCTTA-3′ sits 3′-TACGGAAT-5′, which can also be written 5′-TAAGGCAT-3′. Labelling the partner 5′ to 3′ in the same left-to-right order ignores antiparallel strands. U appears only in RNA. The last option repeats the original sequence.` },

{ id: "ga14", lesson: "3.02", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A DNA strand reads 5′-GGATCCAT-3′. Which answer is its complementary strand written in the 5′ → 3′ direction?`,
  options: [
    `5′-CCTAGGTA-3′`,
    `5′-GGATCCAT-3′`,
    `5′-TACCTAGG-3′`,
    `5′-ATGGATCC-3′`],
  answer: 3,
  explain: `Write the partner underneath first: 3′-CCTAGGTA-5′. Reading it from its 5′ end gives 5′-ATGGATCC-3′. "CCTAGGTA" with a 5′ label is the right bases but the wrong direction; "TACCTAGG" is the original strand reversed without pairing.` },

{ id: "ga15", lesson: "3.02", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A short stretch of double-stranded DNA has the sequence 5′-ATGCGCAT-3′ on one strand. How many hydrogen bonds hold the two strands together over this stretch?`,
  options: [
    `20`,
    `16`,
    `24`,
    `8`],
  answer: 0,
  explain: `There are 4 A–T pairs (2 hydrogen bonds each = 8) and 4 G–C pairs (3 each = 12): 8 + 12 = 20. 16 counts every pair as 2 bonds, 24 counts every pair as 3, and 8 counts only the A–T pairs.` },

{ id: "ga16", lesson: "3.02", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A gene is 1,500 base pairs long. Using the slide's measurements, how long is it and how many turns of the helix does it contain?`,
  options: [
    `5,100 nm long, with 150 turns`,
    `510 nm long, with 441 turns`,
    `510 nm long, with 150 turns`,
    `3,000 nm long, with 750 turns`],
  answer: 2,
  explain: `Each base pair adds 0.34 nm: 1,500 × 0.34 = 510 nm. Each turn holds 10 base pairs: 1,500 ÷ 10 = 150 turns (check: 150 × 3.4 nm = 510 nm). 5,100 nm uses 3.4 nm per base pair, and 441 divides by 3.4 instead of by 10.` },

{ id: "ga17", lesson: "3.02", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A human body cell holds about 6.4 × 10<sup>9</sup> base pairs of DNA. If all of it were stretched out end to end, about how long would it be?`,
  options: [
    `About 2 mm`,
    `About 22 cm`,
    `About 2 km`,
    `About 2 m`],
  answer: 3,
  explain: `6.4 × 10<sup>9</sup> bp × 0.34 nm = about 2.2 × 10<sup>9</sup> nm = 2.2 m. That much DNA fits in a nucleus a few micrometres wide only because it is wound around histones into nucleosomes and then coiled again and again into chromatin.` },

{ id: "ga18", lesson: "3.02", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A cell's telomeres are 10,000 base pairs long. They lose about 100 base pairs per division, and the cell stops dividing when they reach 5,000 base pairs. About how many more divisions can it make?`,
  options: [
    `100`,
    `5,000`,
    `50`,
    `833`],
  answer: 2,
  explain: `It can afford to lose 10,000 − 5,000 = 5,000 bp, at 100 bp per division: 5,000 ÷ 100 = 50 divisions. That number lines up with the Hayflick limit. 100 would use up the entire telomere, which the cell never reaches, and 833 is the number of 6-bp TTAGGG repeats in 5,000 bp, not a number of divisions.` },

{ id: "ga19", lesson: "3.02", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `DNA sample P is 30% adenine and DNA sample Q is 30% guanine. Which sample needs the higher temperature to separate its two strands, and why?`,
  options: [
    `Q, because it is 60% G + C, and each G–C pair has three hydrogen bonds`,
    `P, because it is 60% A + T, and A–T pairs are larger`,
    `Both are the same, because both have one base at 30%`,
    `P, because adenine forms three hydrogen bonds with thymine`],
  answer: 0,
  explain: `P: A = T = 30%, so A + T = 60% and G + C = 40%. Q: G = C = 30%, so G + C = 60%. Q has more triple-bonded G–C pairs, so it melts at a higher temperature. A–T pairs have only two hydrogen bonds.` },

{ id: "ga20", lesson: "3.02", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Imagine a DNA molecule in which adenine paired with guanine instead of thymine. How would the helix change at those base pairs?`,
  options: [
    `It would become narrower at those rungs, because purines are smaller than pyrimidines and pull the strands closer`,
    `It would bulge wider there, because two double-ringed purines would be paired, so the diameter would no longer be a constant 2 nm`,
    `It would not change at all, because hydrogen bonds always hold the strands exactly 2 nm apart`,
    `The backbone would move to the inside of the helix`],
  answer: 1,
  explain: `Purines (A, G) are double-ringed and larger; pyrimidines are single-ringed. Normal pairs are always purine + pyrimidine, which keeps the width constant at 2 nm (the slide's point). A purine–purine pair would be too wide and distort the helix. The backbone stays outside regardless.` },


// ---------- 3.03 DNA Replication ----------
{ id: "ga21", lesson: "3.03", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Practice question 5: one heavy DNA molecule replicates semiconservatively for four generations in light medium. What percentage of the double helices contain one of the original parent strands?`,
  options: [
    `25%`,
    `12.5%`,
    `50%`,
    `6.25%`],
  answer: 1,
  explain: `The class key: after 4 generations there are 2<sup>4</sup> = 16 helices. The two original strands never break down, so exactly 2 helices contain one: 2 ÷ 16 = 12.5%. 25% is the answer after 3 generations (2 of 8), 50% after 2 (2 of 4), and 6.25% would be 1 of 16, as if only one helix kept an old strand.` },

{ id: "ga22", lesson: "3.03", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `After three generations of semiconservative replication of one heavy molecule in light medium, what percentage of all the individual DNA strands are original heavy strands?`,
  options: [
    `25%`,
    `50%`,
    `12.5%`,
    `6.25%`],
  answer: 2,
  explain: `After 3 generations there are 2<sup>3</sup> = 8 double helices, which is 16 single strands. Only 2 of those strands are original: 2 ÷ 16 = 12.5%. 25% (2 of 8) is the fraction of helices that contain an original strand; read the question carefully for "helices" vs "strands".` },

{ id: "ga23", lesson: "3.03", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `During one round of replication, how many leading strands and how many lagging strands are being made inside a single replication bubble?`,
  options: [
    `Two leading and two lagging: one of each at each of the two forks`,
    `One leading and one lagging`,
    `Two leading and no lagging`,
    `One leading strand on the top template and one lagging strand on the bottom template`],
  answer: 0,
  explain: `The bubble has two forks moving apart, and each fork needs one continuous (leading) and one discontinuous (lagging) strand. Each template strand is therefore leading for one fork and lagging for the other: the "Check your understanding" diagram shows exactly this, with leading-strand and lagging-strand templates labelled for the left-hand and right-hand forks.` },

{ id: "ga24", lesson: "3.03", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A replication fork is moving to the right. The top parent strand is written 3′ on the left and 5′ on the right. Which statement is correct?`,
  options: [
    `The new strand on the top template is the lagging strand, made in Okazaki fragments`,
    `Both new strands are leading strands, because the fork is moving right`,
    `Neither new strand can be made until the fork stops moving`,
    `The new strand on the top template is the leading strand, growing continuously to the right`],
  answer: 3,
  explain: `The new strand is antiparallel to its template, so on the top template it runs 5′ (left) → 3′ (right). It grows at its 3′ end, which points right, toward the fork, so it can follow the helicase continuously: leading strand. The bottom template runs the other way, so its new strand grows to the left, away from the fork, in Okazaki fragments.` },

{ id: "ga25", lesson: "3.03", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Part of a DNA template strand reads 3′-TACG-5′. What primer would primase make on it?`,
  options: [
    `5′-AUGC-3′`,
    `5′-ATGC-3′`,
    `3′-AUGC-5′`,
    `5′-UACG-3′`],
  answer: 0,
  explain: `Primers are RNA, so they contain U, not T, and they are antiparallel to the template: opposite 3′-TACG-5′ lies 5′-AUGC-3′. "ATGC" is DNA, "3′-AUGC-5′" has the wrong direction, and "UACG" copies the template instead of pairing with it.` },

{ id: "ga26", lesson: "3.03", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A mutant bacterium makes a faulty DNA ligase that does not work at all. What would you expect to find in its newly made DNA?`,
  options: [
    `Leading strands with RNA primers still in place every 1,000 bases`,
    `Strands that snap back together before they can be copied`,
    `Lagging strands made of many Okazaki fragments that are not joined into one strand`,
    `New strands built 3′ → 5′ instead of 5′ → 3′`],
  answer: 2,
  explain: `Ligase seals the nicks after pol I replaces each primer. Without it, the lagging strand stays in pieces (the leading strand is mostly one piece, so it is less affected). Leftover primers point to a pol I problem, re-pairing strands to an SSB problem, and no mutation lets polymerases build 3′ → 5′.` },

{ id: "ga27", lesson: "3.03", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A cell has no working DNA polymerase I. What would remain in its newly replicated DNA?`,
  options: [
    `Unjoined Okazaki fragments with no RNA in them`,
    `Twisted, supercoiled DNA ahead of every fork`,
    `Unpaired single strands, because SSBs cannot bind`,
    `Short stretches of RNA, the primers, which are never replaced with DNA`],
  answer: 3,
  explain: `Pol I's job is to remove each RNA primer and fill in DNA. Without it, the primers stay. The Okazaki fragments also cannot be sealed, since ligase can only join DNA to DNA once the primer has been replaced. Supercoiling is a topoisomerase problem.` },

{ id: "ga28", lesson: "3.03", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A chromosome has 150 million base pairs. If it had only one origin, with two forks each adding 50 nucleotides per second, about how long would replication take?`,
  options: [
    `About 35 days`,
    `About 17 days`,
    `About 42 hours`,
    `About 8 minutes`],
  answer: 1,
  explain: `Two forks together copy 2 × 50 = 100 bp per second: 150,000,000 ÷ 100 = 1,500,000 s ≈ 417 hours ≈ 17 days. 35 days forgets that replication is bidirectional. That is why the class key says one origin would take weeks, and thousands of origins working at once finish in hours.` },

{ id: "ga29", lesson: "3.03", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A human cell copies about 6.4 × 10<sup>9</sup> base pairs. Before proofreading, DNA polymerase makes about 1 error per 10,000 base pairs; after proofreading and mismatch repair, about 1 per 10<sup>9</sup>. Roughly how many errors are left in each case?`,
  options: [
    `About 64,000 before proofreading; about 64 after repair`,
    `About 6,400 before proofreading; about 0.6 after repair`,
    `About 640,000 before proofreading; none at all after repair`,
    `About 640,000 before proofreading; about 6 after repair`],
  answer: 3,
  explain: `6.4 × 10<sup>9</sup> ÷ 10<sup>4</sup> = 6.4 × 10<sup>5</sup> = 640,000 errors. 6.4 × 10<sup>9</sup> ÷ 10<sup>9</sup> ≈ 6 errors per division. Repair is excellent but never perfect, which is why a few new mutations appear in every cell lineage.` },

{ id: "ga30", lesson: "3.03", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `UV light forms a thymine dimer in a skin cell's DNA. In what order do the enzymes of excision repair act?`,
  options: [
    `A nuclease cuts out the damaged section, DNA polymerase fills the gap, and DNA ligase seals the backbone`,
    `DNA ligase cuts out the damage, primase fills the gap, and helicase seals it`,
    `DNA polymerase fills the gap first, then a nuclease cuts out the damage, then ligase seals it`,
    `Helicase unwinds the dimer, and the two thymines separate by themselves`],
  answer: 0,
  explain: `The reading handout: in excision repair the damaged strand is cut out by a nuclease, and the gap is correctly filled by DNA polymerase and sealed by ligase. The gap must exist before it can be filled, and ligase always makes the final bond. The undamaged partner strand is the template for the fill-in.` },


// ---------- 3.04 Transcription ----------
{ id: "ga31", lesson: "3.04", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `The slide's check: a DNA template strand reads 3′-AGC TAC CGT-5′. What is the mRNA transcript?`,
  options: [
    `5′-TCG ATG GCA-3′`,
    `3′-UCG AUG GCA-5′`,
    `5′-UCG AUG GCA-3′`,
    `5′-AGC UAC CGU-3′`],
  answer: 2,
  explain: `Pair each template base (A→U, G→C, C→G, T→A) and build antiparallel: 5′-UCG AUG GCA-3′. 5′-TCG ATG GCA-3′ is the coding strand (DNA, with T). Reversing the labels makes the mRNA run the wrong way, and AGC UAC CGU just copies the template with U for T.` },

{ id: "ga32", lesson: "3.04", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Transcription worksheet question 10: a template strand reads 3′-TACGGATTCGTCCTGGCAA-5′ between the start and end positions. What is the mRNA?`,
  options: [
    `5′-ATGCCTAAGCAGGACCGTT-3′`,
    `5′-AUGCCUAAGCAGGACCGUU-3′`,
    `5′-UACGGAUUCGUCCUGGCAA-3′`,
    `3′-AUGCCUAAGCAGGACCGUU-5′`],
  answer: 1,
  explain: `Complementary RNA bases, antiparallel: 5′-AUGCCUAAGCAGGACCGUU-3′, which starts with the start codon AUG, as the worksheet key shows. The DNA version with T is the coding strand. Changing T to U in the template gives a copy, not a complement. The mRNA's 5′ end lies opposite the template's 3′ end.` },

{ id: "ga33", lesson: "3.04", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `The coding strand of a short gene reads 5′-ATG TTT GGC CAT TAA-3′. What is the mRNA?`,
  options: [
    `3′-UAC AAA CCG GUA AUU-5′`,
    `5′-AUG UUU GGC CAU UAA-3′`,
    `5′-UAC AAA CCG GUA AUU-3′`,
    `5′-ATG TTT GGC CAT TAA-3′`],
  answer: 1,
  explain: `The mRNA matches the coding strand with U in place of T, because both are complementary to the template (3′-TAC AAA CCG GTA ATT-5′). The second option is complementary to the coding strand, which would only be right if the coding strand were the template. The last option is DNA.` },

{ id: "ga34", lesson: "3.04", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A template strand is written 5′-TTAGCCAT-3′. What is the mRNA, written 5′ → 3′?`,
  options: [
    `5′-AAUCGGUA-3′`,
    `5′-UUAGCCAU-3′`,
    `5′-AUGGCUAA-3′`,
    `5′-ATGGCTAA-3′`],
  answer: 2,
  explain: `Rewrite the template 3′ → 5′ first: 3′-TACCGATT-5′. Its complement is 5′-AUGGCUAA-3′. AAUCGGUA has the right bases but reads them in the wrong direction (it is really the mRNA written 3′ → 5′). UUAGCCAU copies the template, and ATGGCTAA is the coding strand (DNA).` },

{ id: "ga35", lesson: "3.04", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `An mRNA reads 5′-AUG GCA UUC-3′. What is the sequence of the DNA template strand that made it?`,
  options: [
    `5′-TAC CGT AAG-3′`,
    `3′-UAC CGU AAG-5′`,
    `5′-ATG GCA TTC-3′`,
    `3′-TAC CGT AAG-5′`],
  answer: 3,
  explain: `The template is complementary and antiparallel to the mRNA, and it is DNA (T, not U): 3′-TAC CGT AAG-5′. 5′-ATG GCA TTC-3′ is the coding strand, which matches the mRNA. The 3′-UAC... option contains U, so it cannot be DNA.` },

{ id: "ga36", lesson: "3.04", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A pre-mRNA contains exon 1 (150 nucleotides), intron 1 (800), exon 2 (200), intron 2 (1,200) and exon 3 (250). After splicing and the addition of a 200-nucleotide poly-A tail, about how long is the mature mRNA (ignoring the cap)?`,
  options: [
    `800 nucleotides`,
    `600 nucleotides`,
    `2,600 nucleotides`,
    `2,800 nucleotides`],
  answer: 0,
  explain: `Only the exons are kept: 150 + 200 + 250 = 600 nucleotides, plus the 200-nucleotide tail = 800. 600 forgets the tail, 2,600 is the whole pre-mRNA, and 2,800 adds the tail to the unspliced transcript. Most of a typical eukaryotic gene is introns.` },

{ id: "ga37", lesson: "3.04", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A mutation changes several bases of the TATA box in a gene's promoter. What is the most likely effect?`,
  options: [
    `The protein will have one wrong amino acid where the TATA box is read`,
    `The mRNA will still be made but will not get a poly-A tail at its 3′ end`,
    `The ribosome will fail to find the start codon`,
    `Transcription factors and RNA polymerase bind poorly, so much less mRNA is made`],
  answer: 3,
  explain: `The TATA box is where the TATA-binding protein binds to start assembling the transcription machinery. Damage it and initiation becomes rare, so the gene is barely transcribed. The TATA box is upstream of the transcribed region, so it is not in the mRNA and cannot change an amino acid, the tail or the start codon.` },

{ id: "ga38", lesson: "3.04", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A drug blocks the addition of poly-A tails in a cell. What is the most likely result?`,
  options: [
    `mRNAs become longer without the tail and are translated into longer proteins`,
    `mRNAs are broken down faster in the cytoplasm, so less protein is made from each one`,
    `Introns are no longer removed, because splicing needs the tail to be present`,
    `Transcription stops at the promoter, because RNA polymerase cannot start without a tail`],
  answer: 1,
  explain: `The slide: the poly-A tail (like the 5′ cap) prevents degradation. Without it, mRNA is destroyed sooner and is translated fewer times. The tail is not translated, so protein length is unchanged; splicing and initiation are separate steps.` },

{ id: "ga39", lesson: "3.04", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A human gene (with its introns) is inserted into bacteria. The bacteria transcribe it but make a useless protein. What is the best explanation?`,
  options: [
    `Bacteria have no spliceosomes, so the introns stay in the mRNA and are translated`,
    `Bacteria use a different genetic code, so every codon is misread`,
    `Bacteria cannot transcribe DNA from another species`,
    `Bacterial ribosomes cannot read AUG`],
  answer: 0,
  explain: `Bacterial genes lack introns, so bacteria never evolved splicing. The human pre-mRNA keeps its introns, which add wrong amino acids and usually stop codons. The code is nearly universal, so it is not the problem. Biotechnologists get around this by inserting a copy made from mature mRNA, with the introns already gone.` },

{ id: "ga40", lesson: "3.04", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A gene has four exons. Exons 1 and 4 are always kept, but exons 2 and 3 can each be either included or skipped. How many different mature mRNAs can alternative splicing produce?`,
  options: [
    `2`,
    `3`,
    `4`,
    `16`],
  answer: 2,
  explain: `Exon 2 has two choices (in or out) and exon 3 has two choices: 2 × 2 = 4 (1-2-3-4, 1-2-4, 1-3-4 and 1-4). The order of exons never changes in splicing. 16 would treat all four exons as optional, which the question rules out.` },


// ---------- 3.05 Translation ----------
{ id: "ga41", lesson: "3.05", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `The slide's "Try Me" DNA template strand is 3′-<span class="seq">AAT CTA CGG ACG</span> <span class="seq">ATG GGC TAA CGC</span> <span class="seq">GCA TTT TAT TGC</span>-5′. What polypeptide does it code for?`,
  options: [
    `Leu-Asp-Ala-Cys-Tyr-Pro-Ile-Ala-Arg-Lys-Ile-Thr`,
    `Met-Pro-Ala-Thr-Arg-Leu-Arg-Val-Lys`,
    `Met-Gly`,
    `Met-Pro-Ala-Thr-Arg-Leu-Arg-Val-Asn`],
  answer: 1,
  explain: `Transcribe first: mRNA 5′-UUAGAUGCCUGCUACCCGAUUGCGCGUAAAAUAACG-3′. Find the first AUG from the 5′ end and read in threes: AUG CCU GCU ACC CGA UUG CGC GUA AAA UAA = Met-Pro-Ala-Thr-Arg-Leu-Arg-Val-Lys, then stop. Reading from the first base (UUA GAU...) ignores the start codon, Met-Gly comes from reading the template itself as if it were mRNA, and AAA is Lys (Asn is AAU/AAC).` },

{ id: "ga42", lesson: "3.05", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Translation worksheet question 9: what polypeptide does the mRNA <span class="seq">AUG AAC AUG CGC GAU</span> <span class="seq">GGA GGC CUC CAC UGA</span> code for?`,
  options: [
    `Met-Asn-Met-Arg-Asp-Gly-Gly-Leu-His, then stop`,
    `Met-Asn, then translation restarts at the second AUG`,
    `Met-Asn-Met-Arg-Asp-Gly-Gly-Leu-His-Trp`,
    `Met-Lys-Met-Arg-Asp-Gly-Gly-Leu-His, then stop`],
  answer: 0,
  explain: `Codon by codon: AUG Met, AAC Asn, AUG Met, CGC Arg, GAU Asp, GGA Gly, GGC Gly, CUC Leu, CAC His, UGA stop (worksheet key). A second AUG in the same frame just adds another Met. UGA is a stop codon, not Trp (that is UGG), and AAC is Asn, not Lys (AAA/AAG).` },

{ id: "ga43", lesson: "3.05", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A codon on the mRNA reads 5′-AAC-3′. What is the anticodon on the tRNA that pairs with it?`,
  options: [
    `5′-UUG-3′`,
    `3′-TTG-5′`,
    `3′-AAC-5′`,
    `3′-UUG-5′`],
  answer: 3,
  explain: `The anticodon is complementary and antiparallel to the codon, and tRNA is RNA (U, not T): opposite 5′-AAC-3′ is 3′-UUG-5′ (which can also be written 5′-GUU-3′). 5′-UUG-3′ has the right letters in the wrong direction. This tRNA carries asparagine, the amino acid for AAC.` },

{ id: "ga44", lesson: "3.05", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A tRNA has the anticodon 3′-AAG-5′. Which amino acid does it carry?`,
  options: [
    `Lysine (Lys)`,
    `Glutamic acid (Glu)`,
    `Phenylalanine (Phe)`,
    `Leucine (Leu)`],
  answer: 2,
  explain: `The matching codon is complementary and antiparallel: 5′-UUC-3′, which codes for Phe. Lys comes from reading the anticodon AAG as if it were a codon. Glu (GAA) comes from reading the anticodon backwards, and Leu (CUU) from writing the complement in the wrong direction. Always convert the anticodon to the codon before using the chart.` },

{ id: "ga45", lesson: "3.05", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `The reading-frame slide shows three frames of 5′-AGUCUUACCGCAUUGUGG-3′. What does reading frame #1 (starting with the first base) actually code for?`,
  options: [
    `Ser-Leu-Thr-Ala-Leu-Trp`,
    `Ser-Leu-Thr-Ala-Leu-Ser`,
    `Val-Leu-Pro-His-Cys`,
    `Ser-Tyr-Arg-Ile-Val`],
  answer: 0,
  explain: `Frame #1: AGU Ser, CUU Leu, ACC Thr, GCA Ala, UUG Leu, UGG Trp. Check your notes: the slide labels this frame "...Leu-Ser", but UGG is tryptophan, the only codon for Trp. Val-Leu-Pro-His-Cys is frame #2 (starting at the second base) and Ser-Tyr-Arg-Ile-Val is frame #3; both are correct on the slide. Same bases, three different proteins: that is why keeping the reading frame matters.` },

{ id: "ga46", lesson: "3.05", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `An mRNA reads 5′-GCCAUGGAAUGGUCAUAGGC-3′. What polypeptide is made from it?`,
  options: [
    `Met-Val-Ile-Gly`,
    `Ala-Met-Glu-Trp-Ser`,
    `Met-Glu-Trp-Ser`,
    `Met-Glu-Trp-Ser-Stop-Ala`],
  answer: 2,
  explain: `The ribosome scans from the 5′ end to the first AUG (bases 4–6), which sets the frame: AUG Met, GAA Glu, UGG Trp, UCA Ser, UAG stop. GCC before it is the 5′ UTR, not a codon. Met-Val-Ile-Gly starts at a later AUG hidden inside GAA UGG, in a different frame. Nothing is added after a stop codon.` },

{ id: "ga47", lesson: "3.05", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `The coding region of a mature mRNA, from the start codon through the stop codon, is 1,203 nucleotides long. How many amino acids are in the polypeptide?`,
  options: [
    `401`,
    `400`,
    `1,203`,
    `1,200`],
  answer: 1,
  explain: `1,203 ÷ 3 = 401 codons, but the last one is the stop codon, which codes for no amino acid, so 400 amino acids. 401 counts the stop codon, and 1,203 or 1,200 forgets that each amino acid needs three nucleotides.` },

{ id: "ga48", lesson: "3.05", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `On the wobble slide, one leucine tRNA has the anticodon 3′-GAG-5′. Which pair of codons can it read?`,
  options: [
    `5′-CUC-3′ and 5′-GUC-3′, leucine and valine`,
    `5′-CUC-3′ and 5′-CAC-3′, leucine and histidine`,
    `5′-GAG-3′ and 5′-GAA-3′, both glutamic acid`,
    `5′-CUC-3′ and 5′-CUU-3′, both leucine`],
  answer: 3,
  explain: `The first two codon bases (C, U) must pair normally with the anticodon; only the third codon position can wobble, so the third base may be C (normal pairing with G) or U (wobble pairing). Changing the first or second codon base changes the amino acid, and GAG/GAA would be read by a tRNA whose anticodon pairs with them, not one identical to them.` },

{ id: "ga49", lesson: "3.05", type: "mcq", kind: "applied", tier: "extra", level: 2,
  q: `Some antibiotics that block 70S bacterial ribosomes cause side effects in human cells at high doses. Which part of a human cell is the most likely target?`,
  options: [
    `The nucleus, where ribosomal subunits are assembled`,
    `Ribosomes on the rough endoplasmic reticulum`,
    `Mitochondria, which have their own small, bacteria-like ribosomes`,
    `The Golgi apparatus, which modifies proteins`],
  answer: 2,
  explain: `Mitochondria descend from bacteria (endosymbiosis) and still make some of their own proteins on ribosomes that resemble the 70S bacterial type. Cytoplasmic and rough-ER ribosomes are the 80S eukaryotic type that the antibiotic is designed to miss. Enrichment beyond the slides.` },

{ id: "ga50", lesson: "3.05", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Insulin is made as a longer, inactive chain (proinsulin), and a section is cut out to produce the active hormone. Which post-translational modification is this?`,
  options: [
    `Proteolytic cleavage`,
    `Phosphorylation`,
    `Glycosylation`,
    `Splicing`],
  answer: 0,
  explain: `The slide defines proteolytic cleavage as the enzymatic removal of peptide segments. Phosphorylation adds phosphate groups and glycosylation adds sugar chains. Splicing removes introns from pre-mRNA, before translation, not segments from a finished protein.` },

{ id: "ga51", lesson: "3.05", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A DNA template strand reads 3′-TAC AAA CCG GTA ATT-5′. What polypeptide does it code for?`,
  options: [
    `Tyr-Lys-Pro-Val-Ile`,
    `Met-Phe-Gly-His-Stop-Ile`,
    `Met-Lys-Gly-His`,
    `Met-Phe-Gly-His`],
  answer: 3,
  explain: `mRNA: 5′-AUG UUU GGC CAU UAA-3′, which reads Met, Phe, Gly, His, then UAA (stop). Tyr-Lys-Pro-Val-Ile comes from treating the template as if it were the mRNA. Nothing follows a stop codon, and UUU is Phe (AAA, the template bases, would be Lys).` },


// ---------- 3.06 Mutations ----------
{ id: "ga52", lesson: "3.06", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Let's practice (a): the mRNA codons are UUA-CCU-GUU-UAC. A single G is added to the beginning. What type of mutation is this?`,
  options: [
    `A silent mutation, because only one base was added`,
    `A frameshift (insertion): the codons become GUU-ACC-UGU-UUA-C, changing every amino acid`,
    `A missense mutation that changes only the first amino acid`,
    `A nonsense mutation, because UAA appears`],
  answer: 1,
  explain: `Original: UUA Leu, CCU Pro, GUU Val, UAC Tyr. With the extra G the groups of three shift: GUU Val, ACC Thr, UGU Cys, UUA Leu, with a C left over. Every codon changed, which is the sign of a frameshift caused by an insertion. A single inserted base is never silent, and no stop codon appears.` },

{ id: "ga53", lesson: "3.06", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Let's practice (b): in UUA-CCU-GUU-UAC, the third nucleotide of the second codon is replaced with adenine. What type of mutation is this?`,
  options: [
    `Missense: CCU becomes CCA, which codes for a different amino acid`,
    `Nonsense: CCA is a stop codon`,
    `Frameshift: the substitution shifts the reading frame`,
    `Silent: CCU becomes CCA, and both code for proline`],
  answer: 3,
  explain: `CCU and CCA are both Pro (every CC_ codon is proline), so the protein is unchanged. This is a third-position substitution, the kind that redundancy and wobble most often make silent. Substitutions never shift the reading frame.` },

{ id: "ga54", lesson: "3.06", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Let's practice (c): in UUA-CCU-GUU-UAC, the third nucleotide of the fourth codon is replaced with guanine. What type of mutation is this?`,
  options: [
    `Silent: UAG also codes for tyrosine`,
    `Nonsense: UAC (Tyr) becomes UAG, a stop codon`,
    `Missense: UAG codes for tryptophan`,
    `Frameshift: the last codon is now read differently`],
  answer: 1,
  explain: `UAC is tyrosine, but UAG is one of the three stop codons (UAA, UAG, UGA), so translation ends early. Tyrosine is UAU/UAC only, and tryptophan is UGG.` },

{ id: "ga55", lesson: "3.06", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `In the class mutation explorer, the template strand TAC CTC GTT ACT (mRNA AUG GAG CAA UGA: Met-Glu-Gln-stop) mutates to TAC CAC GTT ACT. What is the result?`,
  options: [
    `A missense mutation: GAG becomes GUG, so glutamic acid (Glu) is replaced by valine (Val)`,
    `A silent mutation: GUG still codes for glutamic acid`,
    `A nonsense mutation: GUG is a stop codon`,
    `A missense mutation that changes glutamine (Gln) to valine (Val)`],
  answer: 0,
  explain: `Template CAC pairs with mRNA GUG, which is Val, so one amino acid changes: missense. Check your notes: the explorer calls Glu "glutamine", but GAG/GAA code for glutamic acid (glutamate); glutamine is Gln, coded by CAA/CAG. And GAG → GUG (Glu → Val) is exactly the sickle-cell mutation in β-globin.` },

{ id: "ga56", lesson: "3.06", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `In the class mutation explorer, an extra A is inserted after the first triplet: TAC CTC GTT ACT becomes TAC ACT CGT TAC T. What polypeptide is made?`,
  options: [
    `Met-Stop-Ala-Met, as the reading continues past the stop`,
    `Met-Glu-Gln, the same as before`,
    `Just Met, because the second codon is now UGA, a stop codon`,
    `Met-Thr-Arg-Tyr`],
  answer: 2,
  explain: `The mRNA becomes AUG UGA GCA AUG A... AUG is Met, and UGA is a stop codon, so translation ends there and the protein is a single Met. Check your notes: the explorer shows "Met Stop Ala Met...", but nothing after a stop codon is translated. Met-Thr-Arg-Tyr comes from reading the template triplets as if they were codons.` },

{ id: "ga57", lesson: "3.06", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `The coding strand of a gene changes from 5′-CAG CAG CAG-3′ to 5′-CAG CAG TAG-3′. What type of mutation is this?`,
  options: [
    `Missense: glutamine is replaced by tyrosine`,
    `Silent: CAG and TAG code for the same amino acid`,
    `Frameshift: one base was added`,
    `Nonsense: the third codon becomes the stop codon UAG`],
  answer: 3,
  explain: `The mRNA matches the coding strand with U for T: CAG CAG CAG (Gln-Gln-Gln) becomes CAG CAG UAG (Gln-Gln-stop). This is the slide's nonsense example; the shorter protein is usually non-functional. The number of bases is unchanged, so it is not a frameshift.` },

{ id: "ga58", lesson: "3.06", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `From the slide: the mRNA AUG AAG UUU GGC UAA (Met-Lys-Phe-Gly-stop) loses the three nucleotides AAG. What is the effect?`,
  options: [
    `One amino acid (Lys) is missing, but the rest of the protein is normal: Met-Phe-Gly`,
    `A frameshift that changes every amino acid after Met`,
    `A nonsense mutation that stops translation after Met`,
    `No effect, because AAG is a silent codon`],
  answer: 0,
  explain: `Removing exactly three nucleotides removes one whole codon, so the reading frame is preserved: AUG UUU GGC UAA = Met-Phe-Gly-stop. The slide calls this "insertion or deletion of 3 nucleotides: no frameshift; extra or missing amino acid".` },

{ id: "ga59", lesson: "3.06", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `From the mutations quiz pool: chromosome 1 carries genes A-B-C and chromosome 2 carries X-Y-Z. After a mutation they are A-B-Z and X-Y-C. What happened?`,
  options: [
    `An inversion on both chromosomes`,
    `A duplication on chromosome 1`,
    `A translocation between non-homologous chromosomes`,
    `A frameshift mutation`],
  answer: 2,
  explain: `Segments C and Z traded places between two different (non-homologous) chromosomes: a reciprocal translocation. No genes were reversed, copied or lost, and a frameshift is a point mutation inside one gene.` },

{ id: "ga60", lesson: "3.06", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `From the mutations quiz pool: a cell overproduces one specific protein, but the protein's structure is perfectly normal. Which mutation might be responsible?`,
  options: [
    `A deletion of part of the chromosome segment that carries the gene`,
    `A duplication of the chromosome segment that carries the gene`,
    `A nonsense mutation in the gene`,
    `A frameshift mutation in the gene`],
  answer: 1,
  explain: `Extra copies of a normal gene mean more mRNA and more of the normal protein (a gene dosage effect). A deletion would mean less protein, and nonsense or frameshift mutations change the protein's structure.` },

{ id: "ga61", lesson: "3.06", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `One man gets a UV-induced mutation in a skin cell that leads to skin cancer. Another man has a new mutation in one of his sperm-producing stem cells. Which mutation could be inherited by a child?`,
  options: [
    `Only the skin-cell mutation, because it caused cancer`,
    `Both, because all mutations in a person's body can be inherited`,
    `Neither, because mutations are never inherited`,
    `Only the mutation in the sperm-producing stem cell`],
  answer: 3,
  explain: `Only germ-line (gamete-producing) cells pass DNA to offspring, so only the sperm stem-cell mutation can reach a child, and many sperm will carry it, since that stem cell keeps dividing. The skin-cell mutation is somatic: serious for that man, but it is not in his gametes.` },

{ id: "ga62", lesson: "3.06", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Which single-base substitution in a gene is most likely to leave the protein working normally?`,
  options: [
    `CUU → AUU, changing leucine to isoleucine, a very similar non-polar amino acid`,
    `GAG → GUG, changing charged glutamic acid to non-polar valine`,
    `UGG → UGA, changing tryptophan to a stop codon`,
    `AUG → AUA at the start codon, so the start signal is lost`],
  answer: 0,
  explain: `Leu and Ile have almost the same size and are both non-polar, so the protein usually folds the same way: a "conservative" missense change. Glu → Val is the sickle-cell change, UGG → UGA is a nonsense mutation, and losing the start codon means the protein may not be made at all.` },

{ id: "ga63", lesson: "3.06", type: "mcq", kind: "applied", tier: "extra", level: 2,
  q: `A substitution changes a gene's normal stop codon UAA into CAA. What happens during translation?`,
  options: [
    `Translation stops one codon early, because CAA is read as a stop signal`,
    `Translation continues past the normal end, adding glutamine and further amino acids until another stop codon is reached`,
    `Nothing changes, because the ribosome stops at the poly-A tail anyway`,
    `The protein loses its first amino acid`],
  answer: 1,
  explain: `CAA codes for glutamine, so the ribosome keeps going into the 3′ UTR until it meets another in-frame stop codon, making a longer protein (a "stop-lost" mutation, one of the cases the lesson's mutation tool names). The poly-A tail is not a stop signal, and the start of the protein is unaffected. Beyond the slides.` },


// ---------- 3.07 Gene Regulation: Operons ----------
{ id: "ga64", lesson: "3.07", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A mutation in <em>E. coli</em> stops the cell from making any working lac repressor. What happens to the lac operon?`,
  options: [
    `It is never transcribed, even when lactose is present`,
    `It works normally, switching on only when lactose is present`,
    `It is transcribed all the time, even when no lactose is present`,
    `It is transcribed only when tryptophan is present`],
  answer: 2,
  explain: `Without a repressor, nothing ever blocks the operator, so RNA polymerase transcribes <em>lacZ</em>, <em>lacY</em> and <em>lacA</em> constantly (the operon is "constitutive"). The cell wastes energy making enzymes for a sugar it does not have. Tryptophan controls a different operon.` },

{ id: "ga65", lesson: "3.07", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A mutation changes the lac operator so that the repressor can no longer bind to it, though the repressor itself is normal. What happens?`,
  options: [
    `The operon is transcribed all the time, with or without lactose`,
    `The operon is never transcribed`,
    `The operon is transcribed only when lactose is absent`,
    `RNA polymerase can no longer bind the promoter`],
  answer: 0,
  explain: `The repressor works only by binding the operator. If the operator is changed, the repressor has nowhere to bind, so the switch is stuck "on". The promoter is a separate sequence, so RNA polymerase still binds normally.` },

{ id: "ga66", lesson: "3.07", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A mutant lac repressor can still bind the operator but can no longer bind the inducer (allolactose). What happens when lactose is added?`,
  options: [
    `The operon switches on as normal`,
    `The operon is on all the time, even without lactose`,
    `The operon stays off, because the repressor never lets go of the operator`,
    `The lactose binds the operator instead, switching the operon on`],
  answer: 2,
  explain: `The inducer turns the operon on by binding the repressor and changing its shape. If the repressor cannot bind the inducer, it stays locked on the operator and the cell cannot use lactose. Lactose does not act on the operator directly.` },

{ id: "ga67", lesson: "3.07", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A mutation makes the trp repressor unable to bind tryptophan. What happens when tryptophan is plentiful?`,
  options: [
    `The trp operon switches off, as normal`,
    `The trp operon stays on, and the cell keeps making tryptophan it does not need`,
    `The trp operon is never transcribed`,
    `Tryptophan binds the operator directly and switches the operon off`],
  answer: 1,
  explain: `The trp repressor is inactive until tryptophan (the corepressor) binds and activates it. If it cannot bind tryptophan, it can never attach to the operator, so transcription continues even when tryptophan is abundant, wasting energy.` },

{ id: "ga68", lesson: "3.07", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `<em>E. coli</em> growing without tryptophan in its medium is suddenly given plenty of tryptophan. What happens to the amount of <em>trpE</em> mRNA it makes?`,
  options: [
    `It rises, because tryptophan induces the operon`,
    `It stays the same, because the trp operon is always on`,
    `It rises, because tryptophan releases the repressor from the operator`,
    `It drops, because tryptophan activates the repressor, which binds the operator`],
  answer: 3,
  explain: `The trp operon is repressible: when tryptophan is plentiful, it acts as a corepressor, the active repressor binds the operator, and transcription of all five <em>trp</em> genes stops. Tryptophan never induces or releases anything in this system; that is how lactose works on the lac operon.` },

{ id: "ga69", lesson: "3.07", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Under which conditions is the lac operon transcribed at the highest rate?`,
  options: [
    `Lactose present, glucose absent`,
    `Lactose present, glucose present`,
    `Lactose absent, glucose absent`,
    `Lactose absent, glucose present`],
  answer: 0,
  explain: `Two conditions must be met: the repressor must be removed (lactose present) and CAP–cAMP must be bound (glucose low, so cAMP is high). With glucose present the operon is only weakly transcribed even with lactose, because the cell prefers glucose. With no lactose, the repressor keeps it off.` },

{ id: "ga70", lesson: "3.07", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `<em>E. coli</em> is grown with both glucose and lactose. Which statement describes the lac operon?`,
  options: [
    `The repressor is bound and CAP–cAMP is bound, so transcription is off`,
    `The repressor is released and CAP–cAMP is bound, so transcription is high`,
    `The repressor is released, but CAP–cAMP is not bound, so transcription is low`,
    `The repressor is bound, but CAP–cAMP is not, so transcription is high`],
  answer: 2,
  explain: `Lactose (as allolactose) removes the repressor, but high glucose keeps cAMP low, so CAP cannot help RNA polymerase bind and only a little mRNA is made. The bacteria use up the glucose first, then switch to lactose: a two-stage growth pattern.` },

{ id: "ga71", lesson: "3.07", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A newly discovered bacterial operon codes for the enzymes that build the amino acid histidine. How is it most likely regulated?`,
  options: [
    `It is inducible: histidine acts as an inducer that switches the genes on`,
    `It is repressible: histidine acts as a corepressor that activates the repressor when histidine is plentiful`,
    `It is inducible: it switches on only when histidine is plentiful`,
    `It has no operator, so it is always on`],
  answer: 1,
  explain: `An operon that builds a product (anabolic) follows the trp pattern: on by default, and switched off by its own product when there is enough. An inducible system switched on by plentiful histidine would make more histidine exactly when it is not needed.` },

{ id: "ga72", lesson: "3.07", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `<em>E. coli</em> is moved into a medium with lactose as its only sugar. It makes β-galactosidase for a while, then stops once all the lactose has been used up. Why does it stop?`,
  options: [
    `The <em>lacZ</em> gene is cut out of the DNA once its enzyme has been used`,
    `The cell runs out of RNA polymerase after transcribing so many copies`,
    `Glucose made from the lactose binds the operator directly and blocks RNA polymerase`,
    `With no lactose left, the repressor returns to its active shape, binds the operator, and transcription stops`],
  answer: 3,
  explain: `The lac switch is reversible. When the last inducer molecules are gone, the repressor is no longer held in its inactive shape, so it rebinds the operator and new transcription stops. Bacterial mRNA breaks down within minutes, so enzyme production stops soon after. Genes are not destroyed by being used, RNA polymerase is not used up, and glucose never binds the operator (it acts through CAP and cAMP instead).` },


// ---------- Mix: whole unit ----------
{ id: "ga73", lesson: "mix", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `How many different mRNA sequences could code for the short peptide Met-Trp followed by a stop codon?`,
  options: [
    `1`,
    `9`,
    `3`,
    `64`],
  answer: 2,
  explain: `Met has only one codon (AUG) and Trp has only one (UGG), but there are three stop codons (UAA, UAG, UGA): 1 × 1 × 3 = 3. Most other amino acids have several codons, so longer peptides can be coded by very many different mRNAs.` },

{ id: "ga74", lesson: "mix", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Which of these changes would most likely have NO effect on the protein a gene makes?`,
  options: [
    `A one-base deletion in the first exon`,
    `A substitution that changes the codon CUU to CUC`,
    `A substitution that changes UGG to UGA`,
    `A mutation in the TATA box that stops transcription factors binding`],
  answer: 1,
  explain: `CUU and CUC both code for leucine, so this third-position change is silent. A one-base deletion in an exon causes a frameshift, UGG → UGA turns Trp into a stop (nonsense), and a broken TATA box means little or no mRNA, so little or no protein.` },

{ id: "ga75", lesson: "mix", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A biologist adds radioactive thymidine (a nucleotide containing thymine) to a culture of dividing cells. Where and when will the label be built into new molecules?`,
  options: [
    `Into DNA, during the S phase of interphase`,
    `Into mRNA, during transcription`,
    `Into proteins, during translation`,
    `Into the RNA primers made by primase`],
  answer: 0,
  explain: `Thymine is found only in DNA, so labelled thymidine is used only by DNA polymerases, which build new DNA in the S phase. RNA (mRNA and primers) uses uracil instead, and proteins are built from amino acids. Labelled uridine would be used to track RNA instead.` }
);
