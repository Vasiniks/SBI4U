/* SBI4U Unit 2 Metabolic Processes - practice bank (understanding focus).
   Fields: id, lesson ("2.01".."2.07" | "mix"), type ("mcq" | "tf"), kind, tier ("essential" | "likely" | "extra"),
   level (1 = recall, 2 = understanding), q, options (mcq only, exactly 4), answer (index or boolean), explain.
   Class values: NADH ~ 3 ATP, FADH2 ~ 2 ATP, max 38, realistic 30-32. */
window.QUIZ = [
  /* ---------------- 2.01 Intro to Metabolism ---------------- */
  { id: "q001", lesson: "2.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which statement best defines <strong>metabolism</strong>?",
    options: [
      "Only the reactions that break food down to release energy",
      "The sum of all anabolic and catabolic reactions in a cell or organism",
      "Only the reactions that build large molecules from small ones",
      "Only the reactions of cellular respiration that make ATP"
    ],
    answer: 1,
    explain: "Metabolism is the total of both kinds of reactions: catabolic (breaking down, releasing energy) and anabolic (building up, needing energy). Choosing only catabolism or only respiration describes just one part of metabolism." },

  { id: "q002", lesson: "2.01", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Cellular respiration is anabolic because it produces ATP.",
    answer: false,
    explain: "Cellular respiration is catabolic: it breaks glucose down into smaller molecules (CO<sub>2</sub> and H<sub>2</sub>O). Making ATP along the way is an endergonic step coupled to that breakdown, but the pathway as a whole breaks molecules down." },

  { id: "q003", lesson: "2.01", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why does a cell release the energy in glucose over many small steps instead of all at once, as in burning?",
    options: [
      "Small steps lower the total energy stored in glucose, so less is wasted",
      "Small steps make the overall reaction endergonic, so energy can be stored",
      "Small steps remove the need for any activation energy at all",
      "Small steps release energy in packets that carriers can capture to make ATP"
    ],
    answer: 3,
    explain: "Burning gets over one large activation energy barrier and releases the energy at once, mostly as heat and light. Respiration gets over many small barriers with enzymes, so energy comes out in controlled amounts that NAD<sup>+</sup>, FAD and ATP can capture through redox reactions. The total energy in glucose is the same either way, and each step still has an activation energy." },

  { id: "q004", lesson: "2.01", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Activation energy is the minimum amount of free energy needed to start a biochemical reaction.",
    answer: true,
    explain: "That is the class definition. Even exergonic reactions need this initial push; enzymes lower it so reactions can run at body temperature." },

  { id: "q005", lesson: "2.01", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Where does most of your body heat come from?",
    options: [
      "Energy from respiration that is not captured as ATP, since respiration is not 100% efficient",
      "Energy released when ADP and P<sub>i</sub> are joined to form new ATP",
      "Energy released by endergonic reactions as they build large molecules",
      "Friction between blood cells as they flow quickly through the vessels"
    ],
    answer: 0,
    explain: "Respiration is exergonic, and only part of the energy released is trapped in ATP; the rest escapes as heat, which keeps you warm. Making ATP absorbs energy (endergonic), so it is not the source of the heat." },

  { id: "q006", lesson: "2.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which three parts make up a molecule of ATP?",
    options: [
      "Adenine, deoxyribose and three phosphate groups",
      "Guanine, ribose and three phosphate groups",
      "Adenine, ribose and three phosphate groups",
      "Adenine, glucose and two phosphate groups"
    ],
    answer: 2,
    explain: "ATP = adenine (a purine nitrogenous base) + ribose (a 5-carbon sugar, the same sugar as in RNA) + a chain of three phosphate groups. Deoxyribose is DNA's sugar, and a molecule with only two phosphates is ADP." },

  { id: "q007", lesson: "2.01", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why does the chain of three phosphate groups make ATP an energy-rich molecule?",
    options: [
      "The phosphates are positively charged and pull strongly on the adenine",
      "The phosphate bonds are the most stable bonds in the cell, so they hold the most energy",
      "The phosphates are all negatively charged and repel each other, so the chain is unstable",
      "The phosphates contain carbon that is oxidized to CO<sub>2</sub> when ATP is used"
    ],
    answer: 2,
    explain: "All three phosphate groups carry negative charges that repel one another, making the chain unstable and loaded with energy. Removing the terminal phosphate relieves that repulsion and releases energy. It is the instability, not stability, that makes ATP useful." },

  { id: "q008", lesson: "2.01", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Hydrolysis of ATP into ADP + P<sub>i</sub> is an endergonic reaction.",
    answer: false,
    explain: "ATP hydrolysis releases energy, so it is exergonic. The reverse, building ATP from ADP + P<sub>i</sub>, absorbs energy and is endergonic." },

  { id: "q009", lesson: "2.01", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "What is meant by <strong>energy coupling</strong>?",
    options: [
      "Using energy released by an exergonic reaction, such as ATP hydrolysis, to drive an endergonic one",
      "Joining two endergonic reactions so they can share the energy they absorb",
      "Turning the heat released by respiration back into chemical energy in ATP",
      "Linking two exergonic reactions so they release their energy more slowly"
    ],
    answer: 0,
    explain: "In energy coupling, an energy-releasing (exergonic) reaction powers an energy-absorbing (endergonic) one, often by transferring a phosphate group (phosphorylation). Cells cannot turn heat back into chemical energy, so heat is never the coupling partner." },

  { id: "q010", lesson: "2.01", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "ATP can power active transport by phosphorylating a carrier protein, which changes the protein's shape so it moves molecules against their concentration gradient.",
    answer: true,
    explain: "Transferring a phosphate from ATP to the carrier changes its shape, and that shape change moves molecules or ions from low to high concentration. Adding the phosphate also makes the protein more negative." },

  { id: "q011", lesson: "2.01", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why does turning glucose into glucose-6-phosphate keep it inside the cell?",
    options: [
      "Glucose-6-phosphate is too large to fit through any opening in the membrane",
      "The phosphate group bonds glucose-6-phosphate permanently to the membrane",
      "Glucose-6-phosphate is broken down to CO<sub>2</sub> immediately after it forms",
      "Glucose transport proteins recognize glucose but not glucose-6-phosphate"
    ],
    answer: 3,
    explain: "The membrane transporters that let glucose in and out recognize glucose only, so once it is phosphorylated it is trapped. The size change is tiny; what matters is that the molecule is no longer glucose (and is now more negative)." },

  { id: "q012", lesson: "2.01", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "Converting glucose to glucose-6-phosphate keeps the concentration of free glucose inside the cell low, so glucose keeps diffusing in.",
    answer: true,
    explain: "Because incoming glucose is quickly changed into G6P, free glucose inside the cell stays low, so glucose keeps moving down its concentration gradient into the cell." },

  { id: "q013", lesson: "2.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In a redox reaction, the substance that <em>loses</em> electrons is…",
    options: [
      "reduced, and it acts as the oxidizing agent",
      "oxidized, and it acts as the reducing agent",
      "oxidized, and it acts as the oxidizing agent",
      "reduced, and it acts as the reducing agent"
    ],
    answer: 1,
    explain: "LEO the lion says GER: Lose Electrons = Oxidized. The electron donor is the reducing agent because it causes the other substance to be reduced. The classic trap is mixing up 'oxidized' and 'oxidizing agent': the oxidizing agent is the one that gains electrons." },

  { id: "q014", lesson: "2.01", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Turning NAD<sup>+</sup> into NADH is an oxidation.",
    answer: false,
    explain: "NAD<sup>+</sup> gains electrons (with a hydrogen) to become NADH, so it is reduced: GER, Gain Electrons = Reduced. NADH is the full, reduced carrier." },

  { id: "q015", lesson: "2.01", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which pair correctly shows an electron carrier in its empty (oxidized) form and its full (reduced) form?",
    options: [
      "Empty: NADH; full: NAD<sup>+</sup>",
      "Empty: FADH<sub>2</sub>; full: FAD",
      "Empty: FAD; full: FADH<sub>2</sub>",
      "Empty: ATP; full: ADP"
    ],
    answer: 2,
    explain: "NAD<sup>+</sup> and FAD are the oxidized, empty carriers; NADH and FADH<sub>2</sub> are the reduced carriers loaded with high-energy electrons. ATP and ADP are not electron carriers at all; they store energy in phosphate bonds." },

  /* ---------------- 2.02 Glycolysis (incl. overview + mitochondria) ---------------- */
  { id: "q016", lesson: "2.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which option matches each stage of aerobic respiration to its location correctly?",
    options: [
      "Glycolysis: matrix; Krebs cycle: cytoplasm; ETC: inner membrane",
      "Glycolysis: cytoplasm; Krebs cycle: inner membrane; ETC: matrix",
      "Glycolysis: cytoplasm; Krebs cycle: matrix; ETC: inner membrane",
      "Glycolysis: cytoplasm; Krebs cycle: intermembrane space; ETC: outer membrane"
    ],
    answer: 2,
    explain: "Glycolysis happens in the cytoplasm (cytosol); pyruvate oxidation and the Krebs cycle happen in the mitochondrial matrix; the ETC and chemiosmosis happen on the inner membrane (cristae). No stage runs in the outer membrane or intermembrane space, although H<sup>+</sup> is pumped into the intermembrane space." },

  { id: "q017", lesson: "2.02", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Glycolysis needs oxygen, so it only happens in cells that have mitochondria.",
    answer: false,
    explain: "Glycolysis is anaerobic: it needs no O<sub>2</sub> and runs in the cytoplasm of all cells, with or without mitochondria. That is why it can keep going during fermentation." },

  { id: "q018", lesson: "2.02", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why must glycolysis use up 2 ATP before it can make any?",
    options: [
      "Glucose is very stable, so energy is needed to destabilize it before it can be split",
      "The 2 ATP are needed to carry glucose into the mitochondrion",
      "The 2 ATP are converted directly into the 2 NADH that are made later",
      "The 2 ATP supply the oxygen atoms that end up in pyruvate"
    ],
    answer: 0,
    explain: "Glucose is a very stable molecule, so the prep phase invests 2 ATP to add phosphates and destabilize it before splitting. Glycolysis happens in the cytoplasm, so nothing is carried into the mitochondrion, and ATP does not turn into NADH." },

  { id: "q019", lesson: "2.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the <strong>net</strong> yield of glycolysis for one glucose?",
    options: [
      "4 ATP, 2 NADH and 2 pyruvate",
      "2 ATP, 2 FADH<sub>2</sub> and 2 acetyl-CoA",
      "2 ATP, 2 NADH, 2 pyruvate and 2 CO<sub>2</sub>",
      "2 ATP, 2 NADH and 2 pyruvate"
    ],
    answer: 3,
    explain: "Glycolysis makes 4 ATP but invests 2, so the net is 2 ATP, along with 2 NADH and 2 pyruvate. 4 ATP is the gross amount, and no CO<sub>2</sub> is released until pyruvate oxidation." },

  { id: "q020", lesson: "2.02", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "Glycolysis releases CO<sub>2</sub> when glucose is split into two 3-carbon molecules.",
    answer: false,
    explain: "No carbon is lost in glycolysis: the 6 carbons of glucose end up in two 3-carbon pyruvates. The first CO<sub>2</sub> is released in pyruvate oxidation." },

  { id: "q021", lesson: "2.02", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "What does <strong>substrate-level phosphorylation</strong> mean?",
    options: [
      "ATP is made by ATP synthase using the energy of an H<sup>+</sup> gradient",
      "ATP is made directly in an enzyme-catalyzed reaction, as a phosphate is passed to ADP",
      "A phosphate is added to glucose using energy carried by NADH",
      "ATP is broken down to ADP to power a reaction in the substrate"
    ],
    answer: 1,
    explain: "In substrate-level phosphorylation an enzyme transfers a phosphate from a substrate molecule straight onto ADP, forming ATP. This is how glycolysis and the Krebs cycle make their ATP. Making ATP with ATP synthase and an H<sup>+</sup> gradient is oxidative phosphorylation, a different process." },

  { id: "q022", lesson: "2.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which statement correctly describes the two phases of glycolysis?",
    options: [
      "Prep phase (steps 1–5) makes NADH; payoff phase (steps 6–10) uses ATP to split glucose",
      "Prep phase (steps 1–3) releases CO<sub>2</sub>; payoff phase (steps 4–10) makes all of the ATP",
      "Prep phase happens in the cytoplasm; payoff phase happens in the mitochondrial matrix",
      "Prep phase (steps 1–5) spends ATP to destabilize and split glucose; payoff phase (steps 6–10) makes ATP and NADH"
    ],
    answer: 3,
    explain: "The prep (investment) phase spends 2 ATP to destabilize glucose and split it into two 3-carbon sugars. The payoff phase makes 4 ATP and 2 NADH. Both phases take place in the cytoplasm." },

  { id: "q023", lesson: "2.02", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "After step 5 of glycolysis, each remaining step happens twice per glucose because there are now two G3P molecules.",
    answer: true,
    explain: "Step 4 splits the 6-carbon sugar into DHAP and G3P, and step 5 converts DHAP into a second G3P. From then on everything is doubled, which is why the payoff phase makes 4 ATP and 2 NADH." },

  { id: "q024", lesson: "2.02", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "At the end of glycolysis, where is most of the chemical energy that was stored in glucose?",
    options: [
      "In the 2 net ATP produced by glycolysis",
      "Still trapped in the bonds of the 2 pyruvate molecules",
      "In the 2 NADH produced by glycolysis",
      "Released as heat when glucose was split in two"
    ],
    answer: 1,
    explain: "Glycolysis harvests only a small part of glucose's energy. Most of the bond energy is still in pyruvate, and the cell needs pyruvate oxidation, the Krebs cycle and the ETC to release it." },

  { id: "q025", lesson: "2.02", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "The second phosphate added in the prep phase makes the sugar symmetrical, so it can be split into two 3-carbon halves.",
    answer: true,
    explain: "Step 3 (PFK) adds a second phosphate to make fructose-1,6-bisphosphate. With a phosphate on each end, the molecule is destabilized and symmetrical, ready to be split into two phosphorylated 3-carbon pieces." },

  { id: "q026", lesson: "2.02", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why does glycolysis need a steady supply of NAD<sup>+</sup>?",
    options: [
      "NAD<sup>+</sup> accepts electrons in the redox step (step 6); without it glycolysis stops",
      "NAD<sup>+</sup> provides the phosphate that is added to G3P in step 6",
      "NAD<sup>+</sup> is broken down to release the energy for steps 1 and 3",
      "NAD<sup>+</sup> is needed to carry pyruvate into the mitochondrion"
    ],
    answer: 0,
    explain: "In step 6, G3P is oxidized and NAD<sup>+</sup> is reduced to NADH. If all the NAD<sup>+</sup> has become NADH, this step and everything after it stops. The phosphate in step 6 is inorganic phosphate from the cytoplasm's cellular pool, not from NAD<sup>+</sup>." },

  { id: "q027", lesson: "2.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which description of a mitochondrion is correct?",
    options: [
      "Folded outer membrane, smooth inner membrane, and a matrix between the two membranes",
      "Smooth inner membrane, folded outer membrane, and a protein-rich intermembrane space",
      "Smooth outer membrane, folded inner membrane (cristae), fluid intermembrane space, protein-rich matrix",
      "A single folded membrane surrounding a fluid called the cytosol"
    ],
    answer: 2,
    explain: "The outer membrane is smooth; the inner membrane is highly folded into cristae. Between them is the fluid-filled intermembrane space, and inside the inner membrane is the protein-rich matrix where pyruvate oxidation and the Krebs cycle occur. Cytosol is the fluid outside the mitochondrion." },

  { id: "q028", lesson: "2.02", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "The electron transport chain proteins are embedded in the cristae, the folds of the inner mitochondrial membrane.",
    answer: true,
    explain: "The ETC sits in the inner membrane. Folding it into cristae gives much more surface area for ETC proteins and ATP synthase." },

  { id: "q029", lesson: "2.02", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "All of the ATP made from one glucose is made inside the mitochondrion.",
    answer: false,
    explain: "Glycolysis makes 2 net ATP in the cytoplasm before pyruvate ever reaches the mitochondrion. The mitochondrion makes most of the ATP, which is why it is called the powerhouse, but not all of it." },

  { id: "q030", lesson: "2.02", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which part of the overall equation C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O is accounted for by glycolysis?",
    options: [
      "Only glucose: O<sub>2</sub> is not used yet and no CO<sub>2</sub> is released yet",
      "Glucose and O<sub>2</sub>: oxygen accepts the electrons from NADH",
      "Glucose and CO<sub>2</sub>: carbon is lost when glucose is split",
      "O<sub>2</sub> and H<sub>2</sub>O: oxygen is turned into water in step 9"
    ],
    answer: 0,
    explain: "Glycolysis uses glucose (and gives off 2 H<sub>2</sub>O when water is removed in step 9), but it uses no O<sub>2</sub> and releases no CO<sub>2</sub>. Oxygen is used only at the end of the ETC, and CO<sub>2</sub> is released in pyruvate oxidation and the Krebs cycle." },

  /* ---------------- 2.03 Pyruvate Oxidation & Krebs Cycle ---------------- */
  { id: "q031", lesson: "2.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which three events happen during pyruvate oxidation?",
    options: [
      "Water is removed, FAD is reduced to FADH<sub>2</sub>, and oxaloacetate is attached",
      "ATP is made, CO<sub>2</sub> is removed, and pyruvate combines with oxygen",
      "Pyruvate is split into three 1-carbon pieces that all leave as CO<sub>2</sub>",
      "CO<sub>2</sub> is removed, NAD<sup>+</sup> is reduced to NADH, and coenzyme A attaches"
    ],
    answer: 3,
    explain: "Pyruvate (3C) loses one carbon as CO<sub>2</sub> (decarboxylation), is oxidized as NAD<sup>+</sup> is reduced to NADH, and the remaining 2-carbon acetyl group joins coenzyme A to form acetyl-CoA. No ATP is made and O<sub>2</sub> is not used directly in this step." },

  { id: "q032", lesson: "2.03", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "Pyruvate oxidation produces 1 CO<sub>2</sub> and 1 NADH per glucose.",
    answer: false,
    explain: "That is per <em>pyruvate</em>. Each glucose gives two pyruvates, so per glucose pyruvate oxidation makes 2 CO<sub>2</sub>, 2 NADH and 2 acetyl-CoA." },

  { id: "q033", lesson: "2.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Why does the Krebs cycle turn twice for every glucose molecule?",
    options: [
      "The first turn makes NADH and the second turn makes FADH<sub>2</sub>",
      "One glucose gives two acetyl-CoA, and each acetyl-CoA drives one turn",
      "Oxaloacetate must be used twice before it can be regenerated",
      "One turn happens in the matrix and the other on the cristae"
    ],
    answer: 1,
    explain: "Glycolysis makes 2 pyruvate, which become 2 acetyl-CoA, and the cycle turns once per acetyl-CoA. Every turn makes NADH, FADH<sub>2</sub>, ATP and CO<sub>2</sub>, and every turn happens in the matrix." },

  { id: "q034", lesson: "2.03", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Oxaloacetate is both the starting molecule and the end product of the Krebs cycle.",
    answer: true,
    explain: "Oxaloacetate (4C) combines with acetyl-CoA to start the cycle and is regenerated at the last step, ready to accept the next acetyl-CoA. That regeneration is what makes Krebs a cycle." },

  { id: "q035", lesson: "2.03", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "What is the difference between a cyclic pathway and a linear pathway?",
    options: [
      "Cyclic pathways need oxygen and linear pathways do not; Krebs is cyclic",
      "In a cyclic pathway the product leaves; in a linear one it is reused; Krebs is linear",
      "In a cyclic pathway the end product is regenerated and reused; Krebs is cyclic, glycolysis is linear",
      "Cyclic pathways run once per glucose and linear ones run twice; glycolysis is cyclic"
    ],
    answer: 2,
    explain: "In a cyclic pathway the end product (oxaloacetate in Krebs) is recycled to start the next round. In a linear pathway such as glycolysis the product (pyruvate) leaves and goes somewhere else. Whether oxygen is needed has nothing to do with the shape of the pathway." },

  { id: "q036", lesson: "2.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Per glucose (two turns), what does the Krebs cycle produce?",
    options: [
      "6 NADH, 2 FADH<sub>2</sub>, 2 ATP, 4 CO<sub>2</sub>",
      "3 NADH, 1 FADH<sub>2</sub>, 1 ATP, 2 CO<sub>2</sub>",
      "10 NADH, 2 FADH<sub>2</sub>, 4 ATP, 6 CO<sub>2</sub>",
      "2 NADH, 6 FADH<sub>2</sub>, 2 ATP, 4 CO<sub>2</sub>"
    ],
    answer: 0,
    explain: "Each turn makes 3 NADH, 1 FADH<sub>2</sub>, 1 ATP and 2 CO<sub>2</sub>, so two turns double that. 3/1/1/2 is the per-turn (per acetyl-CoA) value, and 10/2/4/6 is the running total for glycolysis + pyruvate oxidation + Krebs." },

  { id: "q037", lesson: "2.03", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "By the end of the Krebs cycle, none of the 6 carbon atoms from the original glucose remain; they have all left as CO<sub>2</sub>.",
    answer: true,
    explain: "2 carbons leave as CO<sub>2</sub> in pyruvate oxidation and 4 in the Krebs cycle, for 6 in total. That CO<sub>2</sub> diffuses into the blood and is exhaled." },

  { id: "q038", lesson: "2.03", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "What is the main job of the Krebs cycle?",
    options: [
      "To make most of the cell's ATP directly by substrate-level phosphorylation",
      "To load NADH and FADH<sub>2</sub> with electrons and release the remaining carbon as CO<sub>2</sub>",
      "To split glucose into two pyruvate molecules inside the matrix",
      "To act as the final electron acceptor so that water can form"
    ],
    answer: 1,
    explain: "The Krebs cycle makes only 2 ATP per glucose. Its real payoff is the 6 NADH and 2 FADH<sub>2</sub> that carry high-energy electrons to the ETC, where most ATP is made. Splitting glucose is glycolysis, and the final electron acceptor is O<sub>2</sub> in the ETC." },

  { id: "q039", lesson: "2.03", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "The ATP made in the Krebs cycle is made by ATP synthase.",
    answer: false,
    explain: "Krebs makes its ATP by substrate-level phosphorylation: when succinyl-CoA becomes succinate, GTP is formed and passes its phosphate to ADP. ATP synthase is used only in chemiosmosis at the inner membrane." },

  { id: "q040", lesson: "2.03", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "In the redox steps of the Krebs cycle, which molecule is oxidized and which is reduced?",
    options: [
      "NAD<sup>+</sup> or FAD is oxidized; the carbon compound is reduced",
      "Oxygen is reduced; the carbon compound is oxidized",
      "The carbon compound is oxidized; NAD<sup>+</sup> or FAD is reduced",
      "CO<sub>2</sub> is reduced; NADH is oxidized"
    ],
    answer: 2,
    explain: "In each of the four redox steps, the carbon compound loses electrons (oxidized) and NAD<sup>+</sup> or FAD gains them (reduced) to become NADH or FADH<sub>2</sub>. Oxygen is not used in the Krebs cycle itself; it only accepts electrons at the end of the ETC." },

  { id: "q041", lesson: "2.03", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "The conversion of isocitrate to α-ketoglutarate is described as a decarboxylation <em>and</em> a redox reaction. Why?",
    options: [
      "It removes water and reduces FAD to FADH<sub>2</sub>",
      "It adds CO<sub>2</sub> and oxidizes NADH to NAD<sup>+</sup>",
      "It makes ATP and reduces oxaloacetate to malate",
      "It removes a CO<sub>2</sub> and reduces NAD<sup>+</sup> to NADH"
    ],
    answer: 3,
    explain: "Isocitrate (6C) loses one carbon as CO<sub>2</sub> (decarboxylation) to become α-ketoglutarate (5C), and the electrons removed reduce NAD<sup>+</sup> to NADH. FADH<sub>2</sub> is made at a different step, succinate to fumarate." },

  { id: "q042", lesson: "2.03", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "Coenzyme A is used up when it forms acetyl-CoA, so the cell must make new CoA for every pyruvate.",
    answer: false,
    explain: "CoA is released when the acetyl group joins oxaloacetate and is reused to form more acetyl-CoA. Like oxaloacetate, it is regenerated rather than consumed." },

  { id: "q043", lesson: "2.03", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Citrate has 6 carbons. Where do they come from?",
    options: [
      "2 from the acetyl group of acetyl-CoA and 4 from oxaloacetate",
      "3 from pyruvate and 3 from oxaloacetate",
      "All 6 directly from one glucose molecule",
      "4 from the acetyl group of acetyl-CoA and 2 from oxaloacetate"
    ],
    answer: 0,
    explain: "Acetyl-CoA carries a 2-carbon acetyl group, which joins 4-carbon oxaloacetate to make 6-carbon citrate. Pyruvate (3C) has already lost one carbon as CO<sub>2</sub> before its acetyl group enters the cycle." },

  { id: "q044", lesson: "2.03", type: "tf", kind: "knowledge", tier: "extra", level: 2,
    q: "Succinate dehydrogenase, the Krebs enzyme that makes FADH<sub>2</sub>, is also complex II of the electron transport chain.",
    answer: true,
    explain: "Succinate dehydrogenase sits in the inner membrane. It oxidizes succinate to fumarate, reducing FAD to FADH<sub>2</sub>, and passes those electrons straight into the ETC as complex II. This is why FADH<sub>2</sub>'s electrons enter the chain at complex II." },

  { id: "q045", lesson: "2.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Why is pyruvate oxidation often called the link (or transition) step?",
    options: [
      "It links two glucose molecules together before glycolysis begins",
      "It links the ETC to ATP synthase in the inner membrane",
      "It links fermentation to glycolysis by producing lactate",
      "It connects glycolysis to the Krebs cycle by turning pyruvate into acetyl-CoA"
    ],
    answer: 3,
    explain: "Pyruvate made in the cytoplasm moves into the matrix and is turned into acetyl-CoA, the molecule that actually enters the Krebs cycle. This single step joins the cytoplasmic and mitochondrial parts of respiration." },

  /* ---------------- 2.04 Electron Transport Chain & Chemiosmosis ---------------- */
  { id: "q046", lesson: "2.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the role of oxygen in aerobic respiration?",
    options: [
      "It is the final electron acceptor: it pulls electrons down the ETC and forms water",
      "It combines with carbon from glucose to make the CO<sub>2</sub> you breathe out",
      "It is pumped across the inner membrane to build the gradient for ATP synthase",
      "It provides the phosphate group that ATP synthase adds to ADP"
    ],
    answer: 0,
    explain: "O<sub>2</sub> accepts electrons at the end of the chain (complex IV) and combines with 2H<sup>+</sup> to form water. The CO<sub>2</sub> you exhale comes from the carbon compounds broken down in pyruvate oxidation and the Krebs cycle, not from the O<sub>2</sub> you breathe in." },

  { id: "q047", lesson: "2.04", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "Pumping H<sup>+</sup> from the matrix into the intermembrane space is passive transport.",
    answer: false,
    explain: "The pumps move H<sup>+</sup> against its concentration gradient, so it is active transport, powered by the free energy released as electrons pass along the chain. The passive part is H<sup>+</sup> flowing back through ATP synthase." },

  { id: "q048", lesson: "2.04", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "H<sup>+</sup> flowing back into the matrix through ATP synthase is passive transport (facilitated diffusion) down its gradient.",
    answer: true,
    explain: "Protons move from high concentration (intermembrane space) to low (matrix) through ATP synthase, their only route back. No energy input is needed; instead the flow releases energy that ATP synthase uses to phosphorylate ADP." },

  { id: "q049", lesson: "2.04", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why does each NADH give about 3 ATP but each FADH<sub>2</sub> only about 2?",
    options: [
      "FADH<sub>2</sub> carries only one electron, while NADH carries two",
      "FADH<sub>2</sub> gives its electrons straight to oxygen, skipping all the pumps",
      "FADH<sub>2</sub> enters at complex II, skipping complex I's pump, so fewer H<sup>+</sup> are pumped",
      "FADH<sub>2</sub> must spend ATP to cross the inner mitochondrial membrane"
    ],
    answer: 2,
    explain: "Both carriers bring a pair of electrons. NADH drops them at complex I (a pump), but FADH<sub>2</sub> drops them at complex II, which does not pump. Fewer H<sup>+</sup> pumped means a smaller contribution to the gradient and less ATP." },

  { id: "q050", lesson: "2.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which components of the ETC are proton pumps?",
    options: [
      "Complexes I, II and III",
      "Complexes I, III and IV",
      "Complexes II, IV and V",
      "Ubiquinone and cytochrome c"
    ],
    answer: 1,
    explain: "Complexes I, III and IV pump H<sup>+</sup> into the intermembrane space. Complex II passes electrons on without pumping, ubiquinone and cytochrome c are mobile carriers, and complex V (ATP synthase) lets H<sup>+</sup> flow back in." },

  { id: "q051", lesson: "2.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What do ubiquinone (Q) and cytochrome c do in the ETC?",
    options: [
      "They are proton pumps fixed in the outer mitochondrial membrane",
      "They are enzymes that join ADP and P<sub>i</sub> to make ATP",
      "They are final electron acceptors that combine with H<sup>+</sup> to form water",
      "They are mobile carriers: Q links complexes I and II to III; cytochrome c links III to IV"
    ],
    answer: 3,
    explain: "Q and cytochrome c are small mobile shuttles that ferry electrons between the large fixed complexes. Q collects electrons from complexes I and II and carries them to III; cytochrome c carries them from III to IV. Neither pumps H<sup>+</sup>." },

  { id: "q052", lesson: "2.04", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "ETC carriers are arranged in order of increasing electronegativity, so electrons become more stable as they move along the chain and release free energy.",
    answer: true,
    explain: "Each carrier pulls electrons a little more strongly than the one before (a more positive redox potential), so electrons fall step by step. The energy released is used to pump H<sup>+</sup>; oxygen, the strongest electron acceptor, sits at the end." },

  { id: "q053", lesson: "2.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is <strong>chemiosmosis</strong>?",
    options: [
      "Using the energy of H<sup>+</sup> flowing down its gradient through ATP synthase to make ATP",
      "The diffusion of water across the inner mitochondrial membrane",
      "The pumping of electrons into the intermembrane space by complexes I, III and IV",
      "Making ATP directly by transferring a phosphate from a substrate to ADP"
    ],
    answer: 0,
    explain: "Chemiosmosis couples the H<sup>+</sup> gradient to ATP synthesis: protons flow back through ATP synthase, and the energy released phosphorylates ADP (oxidative phosphorylation). The pumps move H<sup>+</sup>, not electrons, across the membrane, and direct phosphate transfer is substrate-level phosphorylation." },

  { id: "q054", lesson: "2.04", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which best describes the gradient that the ETC builds?",
    options: [
      "A higher H<sup>+</sup> concentration in the matrix than in the intermembrane space",
      "A glucose concentration gradient between the cytoplasm and the matrix",
      "An oxygen gradient that draws O<sub>2</sub> into the intermembrane space",
      "An electrochemical gradient: more H<sup>+</sup>, more positive charge and lower pH in the intermembrane space"
    ],
    answer: 3,
    explain: "H<sup>+</sup> is pumped from the matrix into the intermembrane space, which then has more H<sup>+</sup> (lower pH) and more positive charge. Because there is both a concentration difference and a charge difference, it is called an electrochemical gradient." },

  { id: "q055", lesson: "2.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "By the class accounting, what is the maximum ATP per glucose, and what is the realistic range?",
    options: [
      "Maximum 36 ATP; realistic about 38",
      "Maximum 32 ATP; realistic about 36–38",
      "Maximum 38 ATP; realistic about 30–32",
      "Maximum 34 ATP; realistic about 2–4"
    ],
    answer: 2,
    explain: "2 (glycolysis) + 2 (Krebs) + 10 NADH × 3 + 2 FADH<sub>2</sub> × 2 = 38, the perfect textbook answer. Real cells get about 30–32 because of the shuttles, H<sup>+</sup> leaking, and variation in how many H<sup>+</sup> each ATP needs. You may also see 36, when glycolysis NADH uses the glycerol-3-phosphate shuttle." },

  { id: "q056", lesson: "2.04", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "One reason the real ATP yield is below 38 is that some H<sup>+</sup> leaks back across the inner membrane without passing through ATP synthase.",
    answer: true,
    explain: "Any H<sup>+</sup> that leaks through the membrane instead of ATP synthase releases its energy without making ATP. Together with the shuttle used and species differences, this lowers the realistic total to about 30–32." },

  { id: "q057", lesson: "2.04", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why can NADH made in glycolysis give fewer ATP than NADH made in the matrix?",
    options: [
      "Cytosolic NADH carries only one electron instead of a pair",
      "It cannot cross the inner membrane; a shuttle passes its electrons in, sometimes as FADH<sub>2</sub>",
      "It is used up again in step 6 of glycolysis before it can reach the ETC",
      "It must first be converted to ATP before it can enter the mitochondrion"
    ],
    answer: 1,
    explain: "The inner mitochondrial membrane is impermeable to NADH, so a shuttle carries its electrons inside. The glycerol-3-phosphate shuttle hands them to FAD, making FADH<sub>2</sub> (about 2 ATP instead of 3). In step 6, NADH is made, not used." },

  { id: "q058", lesson: "2.04", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "How do the two shuttles for cytosolic NADH compare?",
    options: [
      "Glycerol-3-phosphate keeps NADH as NADH; malate–aspartate turns it into FADH<sub>2</sub>",
      "Malate–aspartate keeps NADH as NADH (more ATP); glycerol-3-phosphate makes FADH<sub>2</sub> (less ATP, faster)",
      "Both turn NADH into FADH<sub>2</sub>, but malate–aspartate only works without oxygen",
      "Both keep NADH as NADH; they differ only in which organ makes glucose"
    ],
    answer: 1,
    explain: "The malate–aspartate shuttle (liver, heart, kidney) delivers electrons as NADH, about 3 ATP each by class values. The glycerol-3-phosphate shuttle (skeletal muscle, brain) delivers them as FADH<sub>2</sub>, about 2 ATP each, but it is faster and regenerates NAD<sup>+</sup> for glycolysis quickly." },

  { id: "q059", lesson: "2.04", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "Water forms in the intermembrane space when oxygen accepts electrons from complex IV.",
    answer: false,
    explain: "Oxygen combines with electrons and 2H<sup>+</sup> taken from the <em>matrix</em>, so water forms on the matrix side. As said in class, removing H<sup>+</sup> from the matrix this way also helps keep the gradient steep." },

  { id: "q060", lesson: "2.04", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "When NADH hands its electrons to complex I, NADH is reduced.",
    answer: false,
    explain: "Losing electrons is oxidation (LEO), so NADH is oxidized back to NAD<sup>+</sup>, and complex I is reduced. This regenerates the NAD<sup>+</sup> that glycolysis and the Krebs cycle need." },

  /* ---------------- 2.05 Regulation of Cellular Respiration ---------------- */
  { id: "q061", lesson: "2.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which enzyme is the main regulatory (allosteric) enzyme of glycolysis?",
    options: [
      "Hexokinase",
      "Phosphofructokinase (PFK)",
      "Pyruvate kinase",
      "Pyruvate dehydrogenase (PDH)"
    ],
    answer: 1,
    explain: "PFK, which catalyzes step 3, is the key control point of glycolysis. PDH is also allosteric, but it controls pyruvate oxidation, not glycolysis." },

  { id: "q062", lesson: "2.05", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why does a high level of ATP inhibit PFK?",
    options: [
      "ATP is used by PFK, so extra ATP should always speed it up",
      "High ATP means oxygen has run out, so glycolysis has to stop",
      "ATP permanently destroys PFK so that glycolysis can never restart",
      "The cell already has plenty of energy, so slowing glycolysis saves glucose"
    ],
    answer: 3,
    explain: "When ATP is plentiful, ATP binds PFK's regulatory site and slows it, so glucose is not broken down for energy the cell does not need. The inhibition is reversible: when ATP falls and ADP rises, PFK speeds up again." },

  { id: "q063", lesson: "2.05", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "PFK is stimulated by high ADP, because a lot of ADP signals that the cell is low on energy.",
    answer: true,
    explain: "ADP (and AMP) build up when ATP is being used faster than it is made. Activating PFK then speeds up glycolysis to make more ATP." },

  { id: "q064", lesson: "2.05", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "How does citrate affect PFK, and why does that make sense?",
    options: [
      "High citrate stimulates PFK, because the Krebs cycle needs more pyruvate",
      "Citrate has no effect on PFK, because they are in different compartments",
      "High citrate inhibits PFK, because it signals the Krebs cycle is already backed up",
      "Low citrate inhibits PFK, because citrate is the substrate PFK works on"
    ],
    answer: 2,
    explain: "Citrate is the first product of the Krebs cycle. When it builds up, the cycle is already well supplied, so slowing glycolysis prevents more pyruvate piling up. Low citrate removes the brake and helps stimulate PFK." },

  { id: "q065", lesson: "2.05", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "What does it mean that PFK and PDH are <strong>allosteric</strong> enzymes?",
    options: [
      "Their activity changes when a regulator binds at a site other than the active site",
      "They only work when no oxygen is present in the cell",
      "They are permanently destroyed by the product of their own reaction",
      "They catalyze two different reactions at the same active site"
    ],
    answer: 0,
    explain: "An allosteric enzyme has a separate regulatory site. When an activator (such as ADP) or an inhibitor (such as ATP) binds there, the enzyme's shape and activity change, letting the cell turn the pathway up or down." },

  { id: "q066", lesson: "2.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which set of molecules <em>activates</em> pyruvate dehydrogenase (PDH)?",
    options: [
      "Acetyl-CoA, NADH and ATP",
      "Citrate, ATP and FADH<sub>2</sub>",
      "Pyruvate, ADP, NAD<sup>+</sup> and CoA",
      "Glucose, oxygen and lactate"
    ],
    answer: 2,
    explain: "PDH is activated by its substrate (pyruvate), by a low-energy signal (ADP) and by its other reactants (NAD<sup>+</sup> and CoA). Acetyl-CoA, NADH and ATP are its inhibitors: two are its products, and ATP signals that energy is already high." },

  { id: "q067", lesson: "2.05", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why does a high level of NADH inhibit PDH?",
    options: [
      "NADH is a product of the reaction, so a build-up signals enough (product feedback)",
      "NADH is a reactant of the reaction, so too much of it jams the active site",
      "High NADH means there is too much oxygen in the mitochondrion",
      "NADH converts PDH into pyruvate decarboxylase, which makes ethanol"
    ],
    answer: 0,
    explain: "PDH reduces NAD<sup>+</sup> to NADH. When NADH piles up (for example, because the ETC is not keeping up), product feedback slows PDH. NAD<sup>+</sup>, the oxidized form, is the reactant and activates PDH." },

  { id: "q068", lesson: "2.05", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "Acetyl-CoA activates pyruvate dehydrogenase, because more product shows the pathway is working well.",
    answer: false,
    explain: "Acetyl-CoA is PDH's product, so a build-up <em>inhibits</em> PDH (product feedback). If acetyl-CoA is already piling up, making more would be wasteful." },

  { id: "q069", lesson: "2.05", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "When ATP levels are high, the cell sends more pyruvate into the mitochondria to make even more ATP.",
    answer: false,
    explain: "High ATP inhibits PDH, so less pyruvate is oxidized to acetyl-CoA. Pyruvate can instead be used to build other molecules, such as glucose (gluconeogenesis), lipids or the amino acid alanine." },

  { id: "q070", lesson: "2.05", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which statement best describes how aerobic respiration is regulated overall?",
    options: [
      "Only by the amount of glucose in the blood",
      "Only by how much oxygen is breathed in",
      "By the number of mitochondria, which changes from second to second",
      "By the relative amounts of ATP and ADP, and the amounts of citrate and NADH"
    ],
    answer: 3,
    explain: "The ATP:ADP ratio tells the cell how much energy it has, and citrate and NADH act as feedback signals from later stages. These signals act on allosteric enzymes such as PFK and PDH. Glucose and oxygen supply matter, but they are not the control signals taught in this lesson." },

  { id: "q071", lesson: "2.05", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "NAD<sup>+</sup> and CoA activate PDH because they are reactants: when more are available, the reaction can run.",
    answer: true,
    explain: "Pyruvate oxidation needs pyruvate, NAD<sup>+</sup> and CoA. When these reactants are available, PDH is turned up; when its products (NADH, acetyl-CoA) build up, it is turned down." },

  { id: "q072", lesson: "2.05", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Which combination of signals would speed up glycolysis at the PFK step?",
    options: [
      "High ATP and high citrate",
      "High ADP and low citrate",
      "High NADH and high acetyl-CoA",
      "Low ADP and high ATP"
    ],
    answer: 1,
    explain: "High ADP signals low energy and low citrate signals that the Krebs cycle can accept more fuel, so both stimulate PFK. High ATP and high citrate inhibit it. NADH and acetyl-CoA are inhibitors of PDH, not activators of PFK." },

  { id: "q073", lesson: "2.05", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "In feedback inhibition, the end product of a pathway speeds up an earlier enzyme so that more product is made.",
    answer: false,
    explain: "Feedback inhibition is the opposite: a build-up of product slows an earlier step, preventing overproduction. ATP inhibiting PFK, and acetyl-CoA and NADH inhibiting PDH, are examples." },

  { id: "q074", lesson: "2.05", type: "mcq", kind: "knowledge", tier: "extra", level: 2,
    q: "Why is it useful that glycolysis is controlled at an early step (PFK, step 3) rather than at the last step?",
    options: [
      "Step 3 is the only step of glycolysis that is catalyzed by an enzyme",
      "Step 3 is the step where oxygen enters glycolysis",
      "Step 3 takes place inside the mitochondrion, where ATP is sensed",
      "Slowing an early step avoids spending ATP on intermediates the cell will not use"
    ],
    answer: 3,
    explain: "If glycolysis were stopped near the end, the cell would already have spent ATP and built up intermediates for nothing. Controlling the pathway near the start saves resources. Every step of glycolysis uses an enzyme, and none uses oxygen." },

  { id: "q075", lesson: "2.05", type: "tf", kind: "knowledge", tier: "extra", level: 2,
    q: "PFK uses ATP as a substrate, yet a high level of ATP inhibits PFK.",
    answer: true,
    explain: "In step 3, PFK transfers a phosphate from ATP to fructose-6-phosphate. But when ATP is abundant it also binds PFK's allosteric site and slows it down, so the same molecule is both a substrate and a signal." },

  /* ---------------- 2.06 Lipid & Protein Catabolism ---------------- */
  { id: "q076", lesson: "2.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "When does the body rely on lipid and protein catabolism for energy?",
    options: [
      "Whenever the cells run out of oxygen",
      "Only while a large meal is being digested",
      "When glycogen (stored carbohydrate) is running low",
      "Only in cells that have no mitochondria"
    ],
    answer: 2,
    explain: "Lipids and proteins are alternate fuels used when glycogen stores are low. Their breakdown products feed into the aerobic pathway (pyruvate, acetyl-CoA, Krebs), so this actually depends on mitochondria and oxygen." },

  { id: "q077", lesson: "2.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In what order does the body normally draw on its fuels?",
    options: [
      "Carbohydrates, then lipids, then proteins",
      "Proteins, then lipids, then carbohydrates",
      "Lipids, then carbohydrates, then proteins",
      "Carbohydrates, then proteins, then lipids"
    ],
    answer: 0,
    explain: "Carbohydrates are used first, then lipids, and proteins only in severe fasting or starvation. Nucleic acids are rarely used as fuel because their components are usually recycled." },

  { id: "q078", lesson: "2.06", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Before they can enter cellular respiration, macromolecules are first hydrolyzed into their monomers.",
    answer: true,
    explain: "Fats are hydrolyzed to glycerol and fatty acids, proteins to amino acids, and polysaccharides to sugars. Only these smaller units can be fed into glycolysis, pyruvate oxidation or the Krebs cycle." },

  { id: "q079", lesson: "2.06", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "How do the two parts of a fat molecule enter cellular respiration?",
    options: [
      "Glycerol becomes acetyl-CoA; fatty acids are converted to pyruvate",
      "Glycerol is converted to DHAP (glycolysis); fatty acids undergo β-oxidation to acetyl-CoA",
      "Both are converted straight into ATP by ATP synthase",
      "Glycerol becomes α-ketoglutarate; fatty acids become glucose in muscle"
    ],
    answer: 1,
    explain: "Glycerol is converted by an enzyme to DHAP, a glycolysis intermediate. Fatty acids are cut into 2-carbon pieces by β-oxidation, forming acetyl-CoA that enters the Krebs cycle." },

  { id: "q080", lesson: "2.06", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "β-oxidation breaks fatty acids down into glycerol, which then enters glycolysis.",
    answer: false,
    explain: "β-oxidation breaks fatty acids into acetyl-CoA, which enters the Krebs cycle. Glycerol is the other part of a fat, released when the fat is hydrolyzed, not made by β-oxidation." },

  { id: "q081", lesson: "2.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is <strong>gluconeogenesis</strong>?",
    options: [
      "Breaking stored glycogen down to release glucose into the blood",
      "Splitting glucose into two pyruvate molecules in the cytoplasm",
      "Converting extra glucose into fat for long-term storage",
      "Making new glucose from non-carbohydrate sources such as glycerol or lactate"
    ],
    answer: 3,
    explain: "Gluconeogenesis means new glucose formation: building glucose from molecules that are not carbohydrates, mainly in the liver. Breaking glycogen down is a different process that releases glucose that was already stored." },

  { id: "q082", lesson: "2.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What happens during <strong>deamination</strong>?",
    options: [
      "A protein is hydrolyzed into individual amino acids in the stomach",
      "The amino group is removed from an amino acid as ammonia, leaving a carbon skeleton",
      "An amino group is added to pyruvate to build a new amino acid",
      "Amino acids are joined together to build a new protein"
    ],
    answer: 1,
    explain: "Deamination (mainly in the liver) strips the amino group off as ammonia (NH<sub>3</sub>), leaving a carbon skeleton that can enter respiration. Hydrolyzing proteins into amino acids happens first, but that step is not deamination." },

  { id: "q083", lesson: "2.06", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Deamination happens mainly in the liver, and the toxic ammonia it produces is converted to urea for removal.",
    answer: true,
    explain: "Ammonia is toxic, so the liver converts it to urea, which the kidneys excrete. The carbon skeleton is the part that goes on to be used for energy." },

  { id: "q084", lesson: "2.06", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Where can the carbon skeletons of amino acids enter cellular respiration?",
    options: [
      "Only at the very start of glycolysis, as glucose",
      "Only at complex I of the ETC, as NADH",
      "Only in the Krebs cycle, as oxaloacetate",
      "As pyruvate, acetyl-CoA or Krebs cycle intermediates, depending on the amino acid"
    ],
    answer: 3,
    explain: "Different amino acids have different skeletons: some become pyruvate (e.g. alanine), some acetyl-CoA (e.g. leucine), and some enter Krebs directly (e.g. glutamate becomes α-ketoglutarate). There is no single entry point." },

  { id: "q085", lesson: "2.06", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "The ammonia removed during deamination is a useful fuel that enters the Krebs cycle.",
    answer: false,
    explain: "Ammonia is toxic nitrogen waste with no carbon to burn; the liver converts it to urea. Only the carbon skeleton enters respiration." },

  { id: "q086", lesson: "2.06", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why does the body break down protein for fuel only during severe fasting or starvation?",
    options: [
      "Proteins do essential jobs (enzymes, muscle, structure), so using them damages tissues",
      "Proteins contain no chemical energy that cells can use",
      "Amino acids cannot enter any stage of cellular respiration",
      "Protein breakdown needs oxygen, while lipid breakdown does not"
    ],
    answer: 0,
    explain: "Proteins can be used for energy, since their skeletons enter respiration at several points, but they are needed as enzymes, transporters and structural tissue. The body spares them until carbohydrate and fat reserves are low." },

  { id: "q087", lesson: "2.06", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Nucleic acids are a major fuel for cellular respiration, especially during exercise.",
    answer: false,
    explain: "Nucleic acids are rarely used as fuel; their components are usually recycled to build new DNA and RNA. Carbohydrates and lipids are the main fuels." },

  { id: "q088", lesson: "2.06", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "When blood glucose is very low, what can the liver do with glycerol from fats?",
    options: [
      "Break it down by β-oxidation into acetyl-CoA",
      "Deaminate it and release the ammonia as urea",
      "Use it to make new glucose by gluconeogenesis",
      "Send it straight to the ETC as an electron donor"
    ],
    answer: 2,
    explain: "When glucose is only somewhat low, glycerol is converted to DHAP and fed into glycolysis; when it is very low, the liver uses glycerol to make new glucose (gluconeogenesis). β-oxidation acts on fatty acids, and deamination acts on amino acids." },

  { id: "q089", lesson: "2.06", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "Because fatty acids are converted to acetyl-CoA, their carbons skip glycolysis and pyruvate oxidation and go straight into the Krebs cycle.",
    answer: true,
    explain: "β-oxidation produces acetyl-CoA directly, which joins oxaloacetate in the Krebs cycle. That is why fatty acids are described as entering at acetyl-CoA rather than at glycolysis." },

  { id: "q090", lesson: "2.06", type: "mcq", kind: "knowledge", tier: "extra", level: 2,
    q: "Why is acetyl-CoA described as a central meeting point of metabolism?",
    options: [
      "Carbohydrates, fatty acids and some amino acids are all converted into it before Krebs",
      "It is the only molecule that can carry electrons to the ETC",
      "It can only be made from glucose, so it controls blood glucose levels",
      "It is the final product of the ETC and combines with oxygen"
    ],
    answer: 0,
    explain: "Pyruvate from glucose, fatty acids from β-oxidation and certain amino acids (such as leucine) all become acetyl-CoA, which then feeds the Krebs cycle. NADH and FADH<sub>2</sub>, not acetyl-CoA, carry electrons to the ETC." },

  /* ---------------- 2.07 Anaerobic Respiration: Fermentation ---------------- */
  { id: "q091", lesson: "2.07", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "What is the real purpose of fermentation?",
    options: [
      "To make extra ATP on top of the 2 made by glycolysis",
      "To remove excess oxygen from the cytoplasm",
      "To turn pyruvate into acetyl-CoA without mitochondria",
      "To regenerate NAD<sup>+</sup> (oxidize NADH) so glycolysis can keep running"
    ],
    answer: 3,
    explain: "Without O<sub>2</sub> the ETC stops, so NADH is not turned back into NAD<sup>+</sup> and glycolysis would stall at step 6. Fermentation hands NADH's electrons to pyruvate (or acetaldehyde), regenerating NAD<sup>+</sup>. The fermentation step itself makes no ATP." },

  { id: "q092", lesson: "2.07", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Fermentation produces more ATP than glycolysis alone, because the fermentation step also makes ATP.",
    answer: false,
    explain: "The fermentation step makes 0 ATP; the only ATP is the 2 net ATP from glycolysis (compared with 36–38 for aerobic respiration). Its job is to recycle NAD<sup>+</sup>, not to make ATP." },

  { id: "q093", lesson: "2.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which equation shows lactic acid fermentation (the step after glycolysis)?",
    options: [
      "Pyruvate → acetaldehyde + CO<sub>2</sub>",
      "Pyruvate + NAD<sup>+</sup> → lactate + NADH",
      "Pyruvate + NADH → lactate + NAD<sup>+</sup>",
      "Lactate + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O"
    ],
    answer: 2,
    explain: "Lactate dehydrogenase (LDH) uses NADH to reduce pyruvate to lactate, giving back NAD<sup>+</sup>. If NADH were made instead of used, the reaction would not solve glycolysis's NAD<sup>+</sup> problem. Making acetaldehyde + CO<sub>2</sub> is the first step of alcohol fermentation." },

  { id: "q094", lesson: "2.07", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "How does alcohol fermentation differ from lactic acid fermentation?",
    options: [
      "Alcohol fermentation gives off CO<sub>2</sub> and is irreversible; lactate fermentation does neither",
      "Lactic acid fermentation gives off CO<sub>2</sub>; alcohol fermentation does not",
      "Only lactic acid fermentation regenerates NAD<sup>+</sup> for glycolysis",
      "Alcohol fermentation makes 4 ATP per glucose; lactate fermentation makes only 2"
    ],
    answer: 0,
    explain: "In alcohol fermentation, pyruvate decarboxylase removes CO<sub>2</sub> (irreversible), then alcohol dehydrogenase reduces acetaldehyde to ethanol. Lactic acid fermentation is a single reversible step with no CO<sub>2</sub>. Both regenerate NAD<sup>+</sup>, and both yield only glycolysis's 2 ATP." },

  { id: "q095", lesson: "2.07", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "In alcohol fermentation, pyruvate first loses CO<sub>2</sub> to become acetaldehyde, which is then reduced by NADH to ethanol.",
    answer: true,
    explain: "Step 1: pyruvate decarboxylase removes CO<sub>2</sub>, forming acetaldehyde (2C). Step 2: alcohol dehydrogenase uses NADH to reduce acetaldehyde to ethanol, regenerating NAD<sup>+</sup>. That CO<sub>2</sub> is what makes bread dough rise." },

  { id: "q096", lesson: "2.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which organisms carry out each type of fermentation?",
    options: [
      "Lactic acid: yeast and plants; alcohol: animal muscle",
      "Lactic acid: animals and some bacteria; alcohol: yeast, plants and some bacteria",
      "Lactic acid: plants only; alcohol: animals and yeast",
      "Both types happen only in bacteria, never in eukaryotes"
    ],
    answer: 1,
    explain: "Animal cells (such as working muscle) and some bacteria make lactate. Yeast and other fungi, plants and some bacteria make ethanol and CO<sub>2</sub>, which is why yeast is used for bread and brewing." },

  { id: "q097", lesson: "2.07", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "The burning feeling in hard-working muscles is caused mainly by lactic acid build-up.",
    answer: false,
    explain: "As said in class, the burn comes from H<sup>+</sup> released by rapid ATP hydrolysis during contraction. Lactate is not the culprit; it actually helps buffer the acid by taking up protons." },

  { id: "q098", lesson: "2.07", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "As discussed in class, what does lactate actually do in a hard-working muscle?",
    options: [
      "It helps buffer the acid by taking up H<sup>+</sup> released by ATP hydrolysis",
      "It releases H<sup>+</sup> into the muscle, causing the burning feeling",
      "It is a useless waste product that must be excreted by the kidneys",
      "It blocks ATP hydrolysis so that the muscle stops contracting"
    ],
    answer: 0,
    explain: "The protons that make muscles feel acidic come from rapidly hydrolyzing ATP. Lactate takes up some of these protons, acting as a buffer, and is later reused as a fuel or to make glucose rather than being wasted." },

  { id: "q099", lesson: "2.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which of these is a fate of lactate in the body?",
    options: [
      "It is converted to ethanol and CO<sub>2</sub> in the liver",
      "It is sent to the liver and made back into glucose (gluconeogenesis)",
      "It is stored in muscle permanently, with no further use",
      "It is converted directly into fatty acids in the brain"
    ],
    answer: 1,
    explain: "Lactate can be carried to the liver and turned back into glucose, shuttled to slow-twitch muscle fibres and oxidized as pyruvate, or used by the heart and brain for fast ATP. Animals cannot make ethanol: that pathway belongs to yeast and plants." },

  { id: "q100", lesson: "2.07", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Lactate can act as a signal that stimulates capillary growth, so oxygen is delivered to tissues faster.",
    answer: true,
    explain: "The slides list stimulating capillary growth as one fate of lactate, along with fuelling the heart and brain, conversion to pyruvate in slow-twitch fibres, and gluconeogenesis in the liver." },

  { id: "q101", lesson: "2.07", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Fermentation happens under anaerobic conditions. What does that mean for your body?",
    options: [
      "The whole body must stop breathing before any fermentation can happen",
      "Fermentation only happens while you are resting or asleep",
      "Oxygen is absent or locally depleted, e.g. in a hard-working muscle, even while you breathe",
      "There is so much oxygen that the ETC cannot use all of it"
    ],
    answer: 2,
    explain: "Your whole body cannot be anaerobic, but parts of it can: a working muscle may use O<sub>2</sub> faster than it is delivered. That local depletion is enough for those cells to switch to lactic acid fermentation." },

  { id: "q102", lesson: "2.07", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "Lactic acid fermentation is reversible: when oxygen is plentiful again, lactate can be converted back to pyruvate.",
    answer: true,
    explain: "LDH can run in reverse, so lactate can be oxidized back to pyruvate (for example in the liver or slow-twitch muscle) and then used aerobically or to make glucose. Alcohol fermentation cannot be reversed because CO<sub>2</sub> has been lost." },

  { id: "q103", lesson: "2.07", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "Pyruvate decarboxylase is the enzyme complex that turns pyruvate into acetyl-CoA in the mitochondrion.",
    answer: false,
    explain: "Pyruvate oxidation is catalyzed by the pyruvate <em>dehydrogenase</em> complex (PDH). Pyruvate <em>decarboxylase</em> is the yeast enzyme that turns pyruvate into acetaldehyde + CO<sub>2</sub> in alcohol fermentation. The names are easy to mix up." },

  { id: "q104", lesson: "2.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which is the balanced overall equation for alcohol fermentation of glucose?",
    options: [
      "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O",
      "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2C<sub>3</sub>H<sub>6</sub>O<sub>3</sub> (lactic acid)",
      "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2C<sub>2</sub>H<sub>5</sub>OH + 6CO<sub>2</sub>",
      "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub>"
    ],
    answer: 3,
    explain: "One glucose gives 2 pyruvate, and each loses one CO<sub>2</sub> and becomes ethanol: 2 ethanol + 2 CO<sub>2</sub> (plus 2 ATP from glycolysis). The equation with O<sub>2</sub> is aerobic respiration, and 6 CO<sub>2</sub> does not balance (glucose has 6 C, and 4 are already in the ethanol)." },

  { id: "q105", lesson: "2.07", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which statement about the fate of pyruvate is correct?",
    options: [
      "With O<sub>2</sub> it becomes lactate; without O<sub>2</sub> it becomes acetyl-CoA",
      "With O<sub>2</sub> it becomes acetyl-CoA; without O<sub>2</sub> it becomes lactate (animals) or ethanol (yeast)",
      "It always becomes acetyl-CoA, whatever the oxygen supply",
      "With O<sub>2</sub> it becomes ethanol; without O<sub>2</sub> it is turned back into glucose"
    ],
    answer: 1,
    explain: "Pyruvate's fate depends on oxygen (and ATP levels). Aerobically it is oxidized to acetyl-CoA; anaerobically, vertebrates reduce it to lactate and microorganisms such as yeast make ethanol + CO<sub>2</sub>. Pyruvate can also be made back into glucose (gluconeogenesis) when energy is not needed." },

  /* ---------------- mix (whole pathway) ---------------- */
  { id: "q106", lesson: "mix", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Where does the CO<sub>2</sub> you exhale come from?",
    options: [
      "Pyruvate oxidation and the Krebs cycle: 2 + 4 = 6 CO<sub>2</sub> per glucose",
      "Glycolysis and the ETC: 2 + 4 = 6 CO<sub>2</sub> per glucose",
      "The O<sub>2</sub> you breathe in, converted to CO<sub>2</sub> at complex IV",
      "The Krebs cycle only: 6 CO<sub>2</sub> per glucose"
    ],
    answer: 0,
    explain: "Glycolysis releases no CO<sub>2</sub>. Pyruvate oxidation releases 2 and the Krebs cycle releases 4, which together account for all 6 carbons of glucose. The O<sub>2</sub> you breathe in ends up in water at the end of the ETC." },

  { id: "q107", lesson: "mix", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Before the ETC, one glucose has produced 10 NADH. Where do they come from?",
    options: [
      "4 from glycolysis, 2 from pyruvate oxidation, 4 from the Krebs cycle",
      "2 from glycolysis, 0 from pyruvate oxidation, 8 from the Krebs cycle",
      "2 from glycolysis, 2 from pyruvate oxidation, 6 from the Krebs cycle",
      "0 from glycolysis, 4 from pyruvate oxidation, 6 from the Krebs cycle"
    ],
    answer: 2,
    explain: "Glycolysis makes 2 NADH (step 6, twice), pyruvate oxidation makes 2 (one per pyruvate) and Krebs makes 6 (three per turn × 2 turns). Along with the 2 FADH<sub>2</sub> from Krebs, these carriers feed the ETC." },

  { id: "q108", lesson: "mix", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "How does the ETC keep the earlier stages of respiration running?",
    options: [
      "It supplies the glucose molecules that glycolysis then splits",
      "It makes the acetyl-CoA that enters the Krebs cycle each turn",
      "It produces the CO<sub>2</sub> that pyruvate oxidation needs to run",
      "It turns NADH back into NAD<sup>+</sup>, which glycolysis, the link step and Krebs all need"
    ],
    answer: 3,
    explain: "Glycolysis, pyruvate oxidation and the Krebs cycle all reduce NAD<sup>+</sup> (and Krebs also reduces FAD). Only the ETC oxidizes these carriers back, so the whole pathway depends on it, and on O<sub>2</sub> as the final electron acceptor." },

  { id: "q109", lesson: "mix", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "Glycolysis and the Krebs cycle make most of the ATP produced from one glucose.",
    answer: false,
    explain: "Together they make only 4 ATP by substrate-level phosphorylation. Most ATP (up to 34 of the maximum 38) comes from oxidative phosphorylation, when the NADH and FADH<sub>2</sub> they produce power the ETC and ATP synthase." },

  { id: "q110", lesson: "mix", type: "tf", kind: "knowledge", tier: "extra", level: 1,
    q: "Beyond the slides: newer measurements give about 2.5 ATP per NADH and 1.5 ATP per FADH<sub>2</sub>, which helps explain the realistic total of about 30–32 ATP.",
    answer: true,
    explain: "These are the modern textbook values. On your test, use the class values (NADH ≈ 3, FADH<sub>2</sub> ≈ 2, maximum 38) unless a question asks otherwise." }
];
