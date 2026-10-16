/* SBI4U Unit 1 Biochemistry - knowledge question bank.
   Fields: id, lesson ("1.01".."1.11" | "mix"), type ("mcq" | "tf"), kind ("knowledge"), tier ("essential" | "likely" | "extra"),
   level (1 = recall, 2 = understanding), q, options (mcq only, exactly 4), answer (option index or boolean), explain. */
window.QUIZ = window.QUIZ || [];

window.QUIZ.push(
  /* ---------------- 1.01 Chemistry Basics & Water ---------------- */
  { id: "q001", lesson: "1.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which type of bond forms when one atom <strong>transfers</strong> electrons to another, creating oppositely charged ions that attract each other?",
    options: ["Nonpolar covalent bond", "Hydrogen bond", "Ionic bond", "Polar covalent bond"],
    answer: 2,
    explain: "In an ionic bond, electrons are transferred (usually metal to non-metal), forming a cation and an anion that attract. In covalent bonds electrons are shared, and a hydrogen bond is a weaker attraction between molecules." },

  { id: "q002", lesson: "1.01", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Isotopes of an element have the same number of protons but a different number of neutrons.",
    answer: true,
    explain: "Carbon-12 and carbon-14 are both carbon (6 protons) but have 6 and 8 neutrons. Stable isotopes do not decay; radioisotopes like carbon-14 decay and emit radiation, which is why they are used as tracers." },

  { id: "q003", lesson: "1.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is a <strong>cation</strong>?",
    options: [
      "A positive ion formed when an atom loses electrons, e.g., Mg<sup>2+</sup>",
      "A negative ion formed when an atom gains electrons, e.g., N<sup>3−</sup>",
      "A positive ion formed when an atom gains protons, e.g., Al<sup>3+</sup>",
      "An atom of the same element that has extra neutrons"
    ],
    answer: 0,
    explain: "Ions form by losing or gaining electrons, never protons. Magnesium loses its 2 valence electrons to become the cation Mg<sup>2+</sup>; nitrogen gains 3 electrons to become the anion N<sup>3−</sup>." },

  { id: "q004", lesson: "1.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does <strong>electronegativity</strong> describe?",
    options: [
      "The number of neutrons an atom has compared with its protons",
      "How strongly water molecules attract one another",
      "The charge an atom carries after it loses electrons",
      "An atom's ability to attract shared electrons in a bond"
    ],
    answer: 3,
    explain: "The difference in electronegativity between two atoms decides whether their bond is nonpolar covalent, polar covalent or ionic. Fluorine has the highest value, and values are highest toward the top right of the periodic table (not counting noble gases)." },

  { id: "q005", lesson: "1.01", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Carbon dioxide (CO<sub>2</sub>) has polar C=O bonds, yet the whole molecule is <strong>nonpolar</strong>. Why?",
    options: [
      "Carbon and oxygen have equal electronegativity, so the bonds share electrons equally",
      "Its straight, symmetrical shape makes the two bond dipoles cancel out",
      "It is held together by ionic bonds, not covalent bonds",
      "Carbon has a lone pair of electrons that cancels the oxygen dipoles"
    ],
    answer: 1,
    explain: "Polarity depends on both bond polarity and shape. CO<sub>2</sub> is linear with no lone pairs on carbon, so the two equal dipoles point in opposite directions and cancel. Ammonia (NH<sub>3</sub>) is polar because its lone pair prevents the dipoles from cancelling." },

  { id: "q006", lesson: "1.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which list puts the attractive forces taught in class in order from <strong>weakest to strongest</strong>?",
    options: [
      "Dipole-dipole &lt; London dispersion &lt; ion-dipole &lt; hydrogen bonding",
      "Hydrogen bonding &lt; dipole-dipole &lt; London dispersion &lt; ion-dipole",
      "Ion-dipole &lt; hydrogen bonding &lt; dipole-dipole &lt; London dispersion",
      "London dispersion &lt; dipole-dipole &lt; hydrogen bonding &lt; ion-dipole"
    ],
    answer: 3,
    explain: "London dispersion forces are weak and temporary but found in all molecules; dipole-dipole forces act between permanent dipoles; hydrogen bonding is an especially strong dipole-dipole force; ion-dipole (full charge to partial charge) is strongest. All of these are weaker than intramolecular ionic and covalent bonds." },

  { id: "q007", lesson: "1.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "A hydrogen bond is a strong dipole-dipole attraction between a hydrogen atom and which highly electronegative elements?",
    options: ["Nitrogen, oxygen or fluorine", "Carbon, hydrogen or sulfur", "Sodium, chlorine or potassium", "Phosphorus, carbon or nitrogen"],
    answer: 0,
    explain: "N, O and F are small and very electronegative, so they pull shared electrons almost completely away from hydrogen. Both atoms are small, so the partial charges get very close, which makes the attraction strong." },

  { id: "q008", lesson: "1.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Water molecules form hydrogen bonds with <em>each other</em>. What is this property called?",
    options: ["Adhesion", "Capillary action", "Cohesion", "Dissociation"],
    answer: 2,
    explain: "Cohesion is water attracting water; adhesion is water attracting other polar or charged materials. Cohesion is what causes surface tension." },

  { id: "q009", lesson: "1.01", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why does water have a high specific heat capacity?",
    options: [
      "Water molecules are joined to one another by strong ionic bonds that resist heating",
      "Added heat is used first to break hydrogen bonds rather than to speed up the molecules",
      "Water is nonpolar, so heat energy passes through it only very slowly",
      "The covalent O–H bonds inside each molecule break first as water warms up"
    ],
    answer: 1,
    explain: "So much energy goes into disrupting hydrogen bonds that water's temperature changes slowly. This helps the body hold a steady 37°C." },

  { id: "q010", lesson: "1.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Humans cool off by sweating and dogs by panting. Which property of water makes this work?",
    options: [
      "Ice being less dense than liquid water at 0°C",
      "Water dissolving ionic substances such as salt",
      "Strong adhesion of water to the surface of the skin",
      "High heat of vaporization (evaporative cooling)"
    ],
    answer: 3,
    explain: "Liquid water must absorb a lot of heat to break its hydrogen bonds and become vapour. When sweat or saliva evaporates, it carries that heat away from the body." },

  { id: "q011", lesson: "1.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is a <strong>buffer</strong>?",
    options: [
      "A catalyst that speeds up reactions without being used up",
      "A strong acid that is added to keep the pH of the blood low",
      "A substance that resists pH change by accepting or releasing H<sup>+</sup> as needed",
      "A protein in red blood cells that carries oxygen through the body"
    ],
    answer: 2,
    explain: "The bicarbonate buffer (CO<sub>2</sub> + H<sub>2</sub>O ⇌ H<sub>2</sub>CO<sub>3</sub> ⇌ H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup>) keeps blood pH between 7.35 and 7.45. Blood pH above 7.8 or below 7.0 can cause death." },

  { id: "q012", lesson: "1.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which reaction forms a covalent bond between two molecules and <strong>releases</strong> a water molecule?",
    options: ["Hydrolysis", "Dehydration synthesis", "Oxidation-reduction", "Dissociation"],
    answer: 1,
    explain: "Dehydration synthesis (condensation) is anabolic: it builds polymers from monomers and releases water. Hydrolysis is the reverse: it adds water to break a covalent bond, which is catabolic." },

  { id: "q013", lesson: "1.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which substance is <strong>hydrophobic</strong>?",
    options: ["Vegetable oil", "Table salt (NaCl)", "Glucose", "Ammonia (NH<sub>3</sub>)"],
    answer: 0,
    explain: "Hydrophobic ('water-fearing') substances are nonpolar and do not dissolve in water, like oils and fats. Salt is ionic, glucose has many polar –OH groups and ammonia is polar, so all three are hydrophilic." },

  { id: "q014", lesson: "1.01", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Intermolecular forces (between molecules) are stronger than the covalent bonds inside a molecule.",
    answer: false,
    explain: "Intramolecular bonds (ionic and covalent) are stronger. Chemical reactions break and re-form intramolecular bonds, while physical changes such as boiling only disrupt the weaker intermolecular forces." },

  { id: "q015", lesson: "1.01", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Ice floats because the hydrogen bonds in its crystal lattice hold the molecules farther apart, making ice less dense than liquid water.",
    answer: true,
    explain: "Below 0°C water forms a crystalline lattice whose stable hydrogen bonds spread the molecules apart. Liquid water is densest at 4°C." },

  { id: "q016", lesson: "1.01", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Anabolic reactions break polymers down into monomers, as in hydrolysis.",
    answer: false,
    explain: "That describes catabolism. Anabolism builds substances (monomers → polymer), as in dehydration synthesis; catabolism breaks them into simpler forms (polymer → monomers), as in hydrolysis." },

  { id: "q017", lesson: "1.01", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "Capillary action depends only on adhesion; cohesion plays no part in it.",
    answer: false,
    explain: "Capillary action is due to adhesion, cohesion and surface tension together. Adhesion makes water cling to the narrow tube (like xylem), and cohesion pulls the rest of the water up behind it." },

  /* ---------------- 1.02 Functional Groups & Macromolecules ---------------- */
  { id: "q018", lesson: "1.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which functional group is <strong>–OH</strong> and explains why sugars and alcohols dissolve so well in water?",
    options: ["Carboxyl", "Carbonyl", "Amino", "Hydroxyl"],
    answer: 3,
    explain: "The hydroxyl group (–OH) is very polar and forms hydrogen bonds with water. On the class table its example is alcohols such as ethanol." },

  { id: "q019", lesson: "1.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the chemical formula of the <strong>carboxyl</strong> group?",
    options: ["–OH", "–COOH", "–NH<sub>2</sub>", "–SH"],
    answer: 1,
    explain: "Carboxyl is –COOH: a carbon double-bonded to one O and single-bonded to an –OH. It is found in acids (e.g., vinegar) and at one end of every amino acid and fatty acid." },

  { id: "q020", lesson: "1.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which functional group is <strong>–NH<sub>2</sub></strong>, acts as a base, and is the class example for ammonia-type compounds?",
    options: ["Amino", "Carboxyl", "Sulfhydryl", "Phosphate"],
    answer: 0,
    explain: "The amino group (–NH<sub>2</sub>) is very polar and basic: it can accept H<sup>+</sup> to become –NH<sub>3</sub><sup>+</sup>. Every amino acid has one." },

  { id: "q021", lesson: "1.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which functional group is <strong>–SH</strong>, and which example was given for it on the class table?",
    options: ["Hydroxyl – ethanol", "Carbonyl – acetone", "Sulfhydryl – rubber", "Phosphate – ATP"],
    answer: 2,
    explain: "Sulfhydryl (–SH) is the least polar of the groups taught. Its class example is rubber, and it is also found in the amino acid cysteine." },

  { id: "q022", lesson: "1.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "On the class functional group table, which molecule is the example for the <strong>phosphate</strong> group (–PO<sub>4</sub>)?",
    options: ["Ethanol", "Vinegar", "ATP", "Formaldehyde"],
    answer: 2,
    explain: "ATP (adenosine triphosphate) carries three phosphate groups. Phosphate groups are also in every nucleotide and in the polar head of a phospholipid." },

  { id: "q023", lesson: "1.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "A carbonyl group (C=O) at the <strong>end</strong> of a carbon chain makes an ______; one in the <strong>middle</strong> of the chain makes a ______.",
    options: [
      "aldehyde (e.g., formaldehyde); ketone (e.g., acetone)",
      "ketone (e.g., acetone); aldehyde (e.g., formaldehyde)",
      "alcohol (e.g., ethanol); acid (e.g., vinegar)",
      "acid (e.g., vinegar); base (e.g., ammonia)"
    ],
    answer: 0,
    explain: "Aldehydes have the carbonyl at the end of the chain (–COH, e.g., formaldehyde); ketones have it in the middle (–CO–, e.g., acetone). Monosaccharides contain one carbonyl group along with many hydroxyl groups." },

  { id: "q024", lesson: "1.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which statement about the polarity of functional groups matches the slides?",
    options: [
      "Sulfhydryl is the most polar group; hydroxyl and carboxyl are only slightly polar, and amino is nonpolar",
      "Hydroxyl, carboxyl and amino are very polar; carbonyl is slightly polar; sulfhydryl is even less polar",
      "Carbonyl and sulfhydryl are very polar; hydroxyl, carboxyl and amino are all nonpolar",
      "Amino and carboxyl are nonpolar because their charges cancel; carbonyl is the most polar"
    ],
    answer: 1,
    explain: "Groups with O–H or N–H bonds (hydroxyl, carboxyl, amino) are very polar and can hydrogen bond. Carbonyl is slightly polar, and sulfhydryl (S–H) has low polarity." },

  { id: "q025", lesson: "1.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which macromolecule is correctly matched with its subunit?",
    options: [
      "Protein – nucleotides",
      "Nucleic acid – amino acids",
      "Triglyceride – monosaccharides",
      "Complex carbohydrate – monosaccharides"
    ],
    answer: 3,
    explain: "Complex carbohydrates are built from monosaccharides, proteins from amino acids, and nucleic acids (DNA and RNA) from nucleotides. A triglyceride is made of a glycerol backbone plus fatty acids." },

  { id: "q026", lesson: "1.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How many stable covalent bonds can one carbon atom form?",
    options: ["2", "4", "3", "6"],
    answer: 1,
    explain: "Carbon has 4 valence electrons, so it can form up to 4 covalent bonds. That is why chains of carbon form the backbone of all four classes of macromolecules." },

  { id: "q027", lesson: "1.02", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is a <strong>functional group</strong>?",
    options: [
      "Any carbon atom in a molecule that forms four single covalent bonds with hydrogen",
      "The long hydrocarbon chain that forms the nonpolar backbone of a macromolecule",
      "A small monomer that joins to other monomers by dehydration synthesis to form a polymer",
      "A specific group of atoms on a carbon backbone that sets the molecule's chemical properties"
    ],
    answer: 3,
    explain: "Functional groups set a molecule's chemical behaviour, polarity and reactivity. Reactions between organic molecules usually happen at their functional groups." },

  { id: "q028", lesson: "1.02", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why do phospholipids spontaneously form a <strong>bilayer</strong> in water?",
    options: [
      "Their phosphate heads are hydrophobic and their fatty acid tails are hydrophilic",
      "They form covalent bonds with surrounding water molecules",
      "Their hydrocarbon tails are hydrophobic and their phosphate heads are hydrophilic",
      "Their fatty acid tails carry a full negative charge that attracts water"
    ],
    answer: 2,
    explain: "Phospholipids are amphipathic. The nonpolar tails turn inward, away from water, while the polar, negatively charged phosphate heads face the water on both sides. Without the phosphate head, the molecule would be fully hydrophobic and would not form a membrane." },

  { id: "q029", lesson: "1.02", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "The carboxyl group is acidic because the hydrogen on its –OH can be released as H<sup>+</sup>.",
    answer: true,
    explain: "By the Brønsted-Lowry definition, an acid donates H<sup>+</sup>. When –COOH donates its hydrogen it becomes –COO<sup>−</sup>." },

  { id: "q030", lesson: "1.02", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Lipids are polymers because they are made of long chains of repeating fatty acid monomers.",
    answer: false,
    explain: "Lipids are the one macromolecule class that is <em>not</em> a polymer. A triglyceride is just glycerol plus 3 fatty acids; it cannot keep adding repeating units." },

  { id: "q031", lesson: "1.02", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Every compound that contains carbon is classified as organic, with no exceptions.",
    answer: false,
    explain: "Organic compounds contain carbon, but there are a few exceptions, such as CO<sub>2</sub> and CaCO<sub>3</sub>, which are classed as inorganic." },

  { id: "q032", lesson: "1.02", type: "tf", kind: "knowledge", tier: "essential", level: 2,
    q: "Large hydrocarbons tend to be nonpolar because their C–H bonds have a low electronegativity difference and are arranged symmetrically.",
    answer: true,
    explain: "Molecules made only of carbon and hydrogen are hydrocarbons. Their bonds share electrons almost equally, so long hydrocarbon chains (like fatty acid tails) are nonpolar and hydrophobic." }
);
window.QUIZ.push(
  /* ---------------- 1.03 Carbohydrates ---------------- */
  { id: "q033", lesson: "1.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which three monosaccharides all have the formula C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>?",
    options: ["Glucose, sucrose and maltose", "Glucose, galactose and fructose", "Ribose, deoxyribose and glucose", "Glucose, lactose and fructose"],
    answer: 1,
    explain: "Glucose, galactose and fructose are hexoses (6 carbons) and isomers of each other. Sucrose, maltose and lactose are disaccharides, and ribose and deoxyribose are pentoses." },

  { id: "q034", lesson: "1.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Molecules with the same chemical formula but a different arrangement of atoms are called…",
    options: ["isotopes", "polymers", "monomers", "isomers"],
    answer: 3,
    explain: "Isomers share a formula but differ in structure, which changes their properties. Isotopes are atoms with different numbers of neutrons, a completely different idea." },

  { id: "q035", lesson: "1.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "A monosaccharide with <strong>5 carbons</strong> is called a…",
    options: ["pentose", "triose", "hexose", "disaccharide"],
    answer: 0,
    explain: "3 carbons = triose, 5 carbons = pentose, 6 carbons = hexose. Ribose and deoxyribose (in RNA and DNA) are pentoses; glucose is a hexose." },

  { id: "q036", lesson: "1.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Sucrose (table sugar) is made of which two monosaccharides?",
    options: ["Glucose + glucose", "Glucose + galactose", "Glucose + fructose", "Fructose + galactose"],
    answer: 2,
    explain: "Sucrose = glucose + fructose. Plants also use sucrose to transport sugar from one part of the plant to another. Maltose is glucose + glucose; lactose is glucose + galactose." },

  { id: "q037", lesson: "1.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which disaccharide is <strong>milk sugar</strong>, and what is it made of?",
    options: ["Lactose: galactose + glucose", "Maltose: glucose + glucose", "Sucrose: glucose + fructose", "Lactose: glucose + fructose"],
    answer: 0,
    explain: "Lactose (milk sugar) is galactose joined to glucose by a glycosidic linkage. The enzyme lactase hydrolyzes it back into the two monosaccharides." },

  { id: "q038", lesson: "1.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which disaccharide is found in grains, is used to make beer, and is made of two glucose units?",
    options: ["Sucrose", "Lactose", "Maltose", "Galactose"],
    answer: 2,
    explain: "Maltose = glucose + glucose. Galactose is a monosaccharide, not a disaccharide." },

  { id: "q039", lesson: "1.03", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "The covalent bond that joins two monosaccharides is called a glycosidic linkage.",
    answer: true,
    explain: "A glycosidic linkage forms by dehydration synthesis (releasing water) and is broken by hydrolysis (adding water). It is named by the carbons it joins, e.g., α-1,4 or α-1,6." },

  { id: "q040", lesson: "1.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How does <strong>α-glucose</strong> differ from <strong>β-glucose</strong>?",
    options: [
      "α-glucose has five carbons in its ring, while β-glucose has six",
      "In α-glucose the ring has no oxygen atom; in β-glucose it does",
      "The –OH on carbon 4 points up in α-glucose and down in β-glucose",
      "The –OH on carbon 1 points down (below the ring) in α and up in β"
    ],
    answer: 3,
    explain: "The only difference is the direction of the –OH on carbon 1. That small change matters: α-glucose builds starch and glycogen, while β-glucose builds cellulose." },

  { id: "q041", lesson: "1.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which polysaccharide is made of <strong>β-glucose</strong> joined by β-1,4 linkages with <strong>no branches</strong>?",
    options: ["Amylose", "Cellulose", "Glycogen", "Amylopectin"],
    answer: 1,
    explain: "Cellulose chains are straight and lie side by side, held together by hydrogen bonds between chains, which gives plant cell walls their strength. Amylose, amylopectin and glycogen are all made of α-glucose." },

  { id: "q042", lesson: "1.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which polysaccharide is the <strong>most highly branched</strong>, with an α-1,6 branch about every 10 glucose units?",
    options: ["Amylopectin", "Amylose", "Glycogen", "Cellulose"],
    answer: 2,
    explain: "Glycogen (animals) has α-1,4 chains with α-1,6 branches about every 10 subunits. Amylopectin (plant starch) branches about every 20 subunits, and amylose is unbranched α-1,4. Many branch ends let glucose be released quickly." },

  { id: "q043", lesson: "1.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the monomer of <strong>chitin</strong>?",
    options: ["N-acetylglucosamine", "β-glucose only", "α-glucose", "Fructose"],
    answer: 0,
    explain: "Chitin is N-acetylglucosamine joined by β-1,4 linkages with no branches. It forms the waterproof exoskeleton of insects and other arthropods and reinforces fungal cell walls. Because it contains nitrogen, it is costly to make (said in class)." },

  { id: "q044", lesson: "1.03", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Humans make the enzyme cellulase, so we can break cellulose down into glucose for energy.",
    answer: false,
    explain: "Humans do not have digestive enzymes for cellulose. Microbes in the gut of herbivores make cellulase, which releases the glucose. For humans, cellulose passes through as fibre." },

  { id: "q045", lesson: "1.03", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Glycogen is the short-term energy storage polysaccharide of animals, stored mainly in the liver and skeletal muscle.",
    answer: true,
    explain: "Glycogen is the animal storage form of glucose (said in class: liver and skeletal muscle). Starch is the plant equivalent." },

  { id: "q046", lesson: "1.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which option correctly sorts the four polysaccharides by function?",
    options: [
      "Cellulose and starch – energy storage; glycogen and chitin – structure",
      "Glycogen and chitin – energy storage; starch and cellulose – structure",
      "Starch and chitin – energy storage; glycogen and cellulose – structure",
      "Starch and glycogen – energy storage; cellulose and chitin – structure"
    ],
    answer: 3,
    explain: "Starch (plants) and glycogen (animals) store energy. Cellulose (plant cell walls) and chitin (arthropod exoskeletons, fungal cell walls) give structural support." },

  { id: "q047", lesson: "1.03", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Monosaccharides with 5 or more carbons are linear when dry but form a ring when dissolved in water.",
    answer: true,
    explain: "That is why glucose is usually drawn as a ring with carbons numbered 1 to 6. You should be able to draw α-glucose and number its carbons." },

  { id: "q048", lesson: "1.03", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Dietary fibre raises blood glucose because it is digested into glucose in the small intestine.",
    answer: false,
    explain: "Fibre is made of indigestible polysaccharides, so it does not lead to increased glucose absorption. It matters for gut health instead (said in class: soluble fibre slows digestion; insoluble fibre adds bulk)." },

  { id: "q049", lesson: "1.03", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which pair of carbohydrate functions was given on the slides?",
    options: [
      "Long-term energy storage and insulation of the body under the skin",
      "Short-term energy and cell surface markers (identification, communication)",
      "Speeding up chemical reactions and transporting substances across membranes",
      "Storing hereditary information and coding for the production of proteins"
    ],
    answer: 1,
    explain: "Carbohydrates provide short-term energy, and carbohydrate chains on the cell surface act as markers for cell identification and communication. Structural polysaccharides such as cellulose and chitin also give support." },

  /* ---------------- 1.04 Lipids ---------------- */
  { id: "q050", lesson: "1.04", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why are fats <strong>nonpolar</strong>?",
    options: [
      "They contain no oxygen atoms anywhere in the molecule",
      "Their glycerol backbone carries a full negative charge",
      "Their fatty acids are joined to one another by hydrogen bonds",
      "They have many nonpolar C–H bonds and very few polar O–H bonds"
    ],
    answer: 3,
    explain: "Lipids have a much higher proportion of hydrogen than of carbon and oxygen, so nonpolar C–H bonds dominate. They therefore dissolve in nonpolar solvents but not in water." },

  { id: "q051", lesson: "1.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "A triglyceride is made of which subunits?",
    options: [
      "3 glycerol molecules + 1 fatty acid",
      "1 glycerol + 3 fatty acids",
      "1 glycerol + 2 fatty acids + 1 phosphate group",
      "3 monosaccharides + 1 fatty acid"
    ],
    answer: 1,
    explain: "A triglyceride has 4 subunits: a glycerol backbone (3 carbons, each with an –OH) and 3 fatty acids. Glycerol + 2 fatty acids + phosphate is a phospholipid." },

  { id: "q052", lesson: "1.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which bond joins each fatty acid to glycerol, and what is the reaction called?",
    options: [
      "Glycosidic linkage – hydrolysis (adding water)",
      "Peptide bond – dehydration synthesis (releasing water)",
      "Ester bond – esterification (a condensation reaction)",
      "Phosphodiester bond – esterification (a hydrolysis reaction)"
    ],
    answer: 2,
    explain: "An –OH of glycerol reacts with the –COOH of a fatty acid to form an ester bond and release water. Making one triglyceride forms 3 ester bonds and releases 3 water molecules." },

  { id: "q053", lesson: "1.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "A fatty acid is a long hydrocarbon chain with which functional group at one end?",
    options: ["Carboxyl (–COOH)", "Hydroxyl (–OH)", "Amino (–NH<sub>2</sub>)", "Phosphate (–PO<sub>4</sub>)"],
    answer: 0,
    explain: "The carboxyl end is what reacts with glycerol's –OH in esterification. The rest of the fatty acid is a nonpolar hydrocarbon chain, which can vary in length." },

  { id: "q054", lesson: "1.04", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "A saturated fatty acid has only C–C single bonds, so its chain is straight.",
    answer: true,
    explain: "Saturated means 'full' of hydrogen: no C=C double bonds. Straight chains pack tightly, so saturated fats (e.g., animal fats, butter) are solid at room temperature." },

  { id: "q055", lesson: "1.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In a <strong>cis</strong> double bond in a fatty acid, the hydrogen atoms are…",
    options: [
      "on opposite sides of the C=C, so the chain stays straight",
      "on the same side of the C=C, which puts a bend (kink) in the chain",
      "removed completely, leaving a triple bond between the carbons",
      "replaced by hydroxyl groups on both carbons of the C=C"
    ],
    answer: 1,
    explain: "Cis = same side, which bends the chain. Trans = opposite sides, which keeps the chain straight even though it has a double bond." },

  { id: "q056", lesson: "1.04", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "Trans fats are straight like saturated fats, so they pack tightly and are often solid or semi-solid at room temperature (e.g., margarine).",
    answer: true,
    explain: "Even with a double bond, the trans arrangement keeps the chain linear. Trans fats are mostly made by partial hydrogenation and are linked to cardiovascular problems." },

  { id: "q057", lesson: "1.04", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Why are most plant oils <strong>liquid</strong> at room temperature?",
    options: [
      "Kinks from cis double bonds stop the chains from packing tightly together",
      "Their fatty acids are fully saturated with hydrogen atoms",
      "They contain extra glycerol molecules compared with animal fats",
      "Their fatty acids lack a carboxyl group, so they cannot bond to glycerol"
    ],
    answer: 0,
    explain: "Unsaturated (cis) chains are bent and cannot stack closely, so they stay liquid. Plants store oils rather than solid fats (said in class)." },

  { id: "q058", lesson: "1.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How does a <strong>phospholipid</strong> differ from a triglyceride?",
    options: [
      "It has three fatty acids attached and no glycerol backbone at all",
      "It is built from 17 carbon atoms arranged in four fused rings",
      "It is one long-chain alcohol joined to one fatty acid",
      "Its glycerol holds two fatty acids and a polar phosphate group"
    ],
    answer: 3,
    explain: "A phospholipid is glycerol + 2 fatty acids + a highly polar phosphate group. This gives it a hydrophilic head and hydrophobic tails, so it forms the cell membrane bilayer." },

  { id: "q059", lesson: "1.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the basic structure of a <strong>steroid</strong>?",
    options: [
      "Glycerol bonded to three fatty acids",
      "A long-chain alcohol bonded to a long-chain fatty acid",
      "17 carbon atoms arranged in four fused rings",
      "Glycerol, two fatty acids and a phosphate group"
    ],
    answer: 2,
    explain: "The steroid nucleus is 17 carbons in four rings (three six-membered rings and one five-membered ring). Steroids include sex hormones, adrenal cortical hormones, bile acids and cholesterol." },

  { id: "q060", lesson: "1.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which of these molecules is a <strong>steroid</strong>?",
    options: ["Testosterone", "Earwax", "Olive oil", "A membrane phospholipid"],
    answer: 0,
    explain: "Testosterone and estrogen are steroid sex hormones. Earwax is a wax, olive oil is a triglyceride (unsaturated), and a phospholipid has a glycerol backbone." },

  { id: "q061", lesson: "1.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "A <strong>wax</strong> is an ester of…",
    options: [
      "glycerol and three fatty acids",
      "glucose and one fatty acid",
      "glycerol, two fatty acids and a phosphate",
      "a long-chain alcohol and a long-chain fatty acid"
    ],
    answer: 3,
    explain: "Waxes are simple lipids that are very hydrophobic, so they waterproof and protect. Examples are earwax and the plant cuticle, which prevents water loss." },

  { id: "q062", lesson: "1.04", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Fat stores about 9 kcal of energy per gram, more than twice the 4 kcal per gram of carbohydrates.",
    answer: true,
    explain: "That is why lipids are used for long-term energy storage. Fats also insulate (subcutaneous fat), cushion organs, and help absorb the fat-soluble vitamins A, D, E and K." },

  { id: "q063", lesson: "1.04", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which list gives functions of <strong>lipids</strong> from the slides?",
    options: [
      "Short-term energy, cell surface markers and cell identification",
      "Speeding up reactions, movement and transport of substances",
      "Long-term energy storage, insulation, cell membranes and cell signalling",
      "Storing hereditary information and coding for proteins"
    ],
    answer: 2,
    explain: "Lipids store long-term energy, insulate, build cell membranes, and are involved in cell signalling and the coordination of cellular activities (e.g., steroid hormones)." },

  { id: "q064", lesson: "1.04", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "A fatty acid with two or more C=C double bonds is described as monounsaturated.",
    answer: false,
    explain: "One double bond = monounsaturated; two or more = polyunsaturated (e.g., many cooking oils). No double bonds = saturated." },

  { id: "q065", lesson: "1.04", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "The longer a fatty acid's hydrocarbon chain, the more soluble the lipid is in water.",
    answer: false,
    explain: "A longer chain means a larger nonpolar part, so the lipid becomes more hydrophobic and less soluble in water." }
);
window.QUIZ.push(
  /* ---------------- 1.05 Nucleic Acids ---------------- */
  { id: "q066", lesson: "1.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What are the three parts of a <strong>nucleotide</strong>?",
    options: [
      "An amino group, a carboxyl group and an R group",
      "Glycerol, a fatty acid and a phosphate group",
      "A hexose sugar, a phosphate group and a fatty acid",
      "A phosphate group, a pentose sugar and a nitrogenous base"
    ],
    answer: 3,
    explain: "Nucleotides are the monomers of DNA and RNA. The sugar is a 5-carbon pentose: deoxyribose in DNA, ribose in RNA." },

  { id: "q067", lesson: "1.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which bases are <strong>purines</strong> (double-ringed)?",
    options: ["Adenine and guanine", "Cytosine and thymine", "Cytosine, thymine and uracil", "Adenine and thymine"],
    answer: 0,
    explain: "Purines (A, G) have two rings; pyrimidines (C, T, U) have one. Class memory trick: the longer word, pyrimidine, has the smaller (single) ring." },

  { id: "q068", lesson: "1.05", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Pyrimidines (cytosine, thymine and uracil) have a single-ring structure.",
    answer: true,
    explain: "C, T and U are single-ringed pyrimidines. A and G are double-ringed purines." },

  { id: "q069", lesson: "1.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How many hydrogen bonds hold a <strong>G–C</strong> base pair together?",
    options: ["1", "2", "3", "4"],
    answer: 2,
    explain: "G–C pairs share 3 hydrogen bonds; A–T (or A–U in RNA) pairs share 2." },

  { id: "q070", lesson: "1.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In <strong>RNA</strong>, adenine pairs with…",
    options: ["thymine", "uracil", "guanine", "cytosine"],
    answer: 1,
    explain: "RNA has uracil (U) in place of thymine (T), so A pairs with U. G still pairs with C." },

  { id: "q071", lesson: "1.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the structural difference between <strong>deoxyribose</strong> and ribose?",
    options: [
      "Deoxyribose has six carbons, while ribose has five",
      "Deoxyribose has no oxygen atom inside its ring",
      "Deoxyribose lacks an oxygen on carbon 2 (H instead of –OH)",
      "Ribose lacks the –OH group that deoxyribose has on carbon 3"
    ],
    answer: 2,
    explain: "'Deoxy' means one oxygen removed: deoxyribose has –H where ribose has –OH on carbon 2. Both are pentoses." },

  { id: "q072", lesson: "1.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which bond links the sugar of one nucleotide to the phosphate of the next, forming the backbone of a DNA strand?",
    options: ["Peptide bond", "Glycosidic linkage", "Hydrogen bond", "Phosphodiester linkage"],
    answer: 3,
    explain: "Phosphodiester linkages build the sugar-phosphate backbone of each strand. The bases stick inward and pair with the other strand by hydrogen bonds." },

  { id: "q073", lesson: "1.05", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "The two strands of a DNA double helix are held together by covalent phosphodiester bonds between their bases.",
    answer: false,
    explain: "The strands are held together by hydrogen bonds between paired bases (A–T: 2, G–C: 3). Phosphodiester linkages join nucleotides <em>within</em> each strand." },

  { id: "q074", lesson: "1.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "The two strands of DNA are <strong>antiparallel</strong>. What does this mean?",
    options: [
      "The 5′ end of one strand lines up with the 3′ end of the other",
      "Both strands run in the same 5′ to 3′ direction side by side",
      "The two strands are built with two different pentose sugars",
      "Purines on one strand pair with purines on the other strand"
    ],
    answer: 0,
    explain: "Each strand has a free phosphate at its 5′ end and a free sugar at its 3′ end, and the strands run in opposite directions. Enzymes rely on this orientation when they read and copy DNA." },

  { id: "q075", lesson: "1.05", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "A DNA sample is 18% adenine. What percentage of its bases is <strong>guanine</strong>?",
    options: ["18%", "32%", "36%", "64%"],
    answer: 1,
    explain: "A = T, so T is also 18% and A + T = 36%. The remaining 64% is split equally between G and C, so G = 32% and C = 32%." },

  { id: "q076", lesson: "1.05", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "In double-stranded DNA, the number of purines equals the number of pyrimidines.",
    answer: true,
    explain: "By Chargaff's rule every pair is one purine plus one pyrimidine, which keeps the ladder a constant width. Single-stranded RNA does not have to follow this 1:1 ratio." },

  { id: "q077", lesson: "1.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which description fits <strong>RNA</strong>?",
    options: [
      "Double-stranded; contains deoxyribose and thymine",
      "Single-stranded; contains deoxyribose and uracil",
      "Double-stranded; contains ribose and thymine",
      "Single-stranded; contains ribose and uracil"
    ],
    answer: 3,
    explain: "RNA is single-stranded with ribose and uracil; DNA is a double helix with deoxyribose and thymine. DNA holds the hereditary information, and RNA translates it into functional proteins." },

  { id: "q078", lesson: "1.05", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "At which end of a DNA strand is the free <strong>phosphate</strong> group?",
    options: ["The 3′ end", "The N-terminus", "The 5′ end", "The C-terminus"],
    answer: 2,
    explain: "The free phosphate is at the 5′ end and the free sugar is at the 3′ end. N- and C-terminus are the ends of a polypeptide, not a nucleic acid." },

  { id: "q079", lesson: "1.05", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which type of RNA is the main building block of <strong>ribosomes</strong>?",
    options: ["rRNA (ribosomal RNA)", "mRNA (messenger RNA)", "tRNA (transfer RNA)", "DNA (deoxyribonucleic acid)"],
    answer: 0,
    explain: "Said in class: mRNA is the messenger (a 'photocopy' of a gene), tRNA is the 'shuttle bus' that brings amino acids, and rRNA is the main building block of ribosomes." },

  { id: "q080", lesson: "1.05", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "ATP is a nucleotide made of adenine, ribose and three phosphate groups.",
    answer: true,
    explain: "ATP (adenosine triphosphate) has the same kind of parts as an RNA nucleotide. ADP has only two phosphate groups." },

  { id: "q081", lesson: "1.05", type: "tf", kind: "knowledge", tier: "extra", level: 2,
    q: "DNA uses uracil rather than thymine because uracil is the more stable base.",
    answer: false,
    explain: "DNA uses thymine. Cytosine can spontaneously turn into uracil, so using only thymine in DNA lets repair enzymes treat any uracil they find as an error. This idea comes from the homework answers, not the slides." },

  /* ---------------- 1.06 Proteins ---------------- */
  { id: "q082", lesson: "1.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which four groups are attached to the central carbon of every amino acid?",
    options: [
      "A phosphate group, a pentose sugar, a base and a hydrogen atom",
      "An amino group, a carboxyl group, a hydrogen atom and an R group",
      "A hydroxyl group, a carbonyl group, a hydrogen atom and an R group",
      "Two amino groups, one carboxyl group and one hydrogen atom"
    ],
    answer: 1,
    explain: "All 20 amino acids share the same central carbon, amino group (–NH<sub>2</sub>), carboxyl group (–COOH) and hydrogen. Only the R group (side chain) differs." },

  { id: "q083", lesson: "1.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How many different amino acids build proteins, and how many of them are <strong>essential</strong>?",
    options: ["9 amino acids; 20 essential", "64 amino acids; 20 essential", "20 amino acids; 11 essential", "20 amino acids; 9 essential"],
    answer: 3,
    explain: "There are 20 amino acids; 9 are essential (valine, isoleucine, leucine, methionine, lysine, threonine, histidine, phenylalanine, tryptophan). 64 is the number of codons, not amino acids." },

  { id: "q084", lesson: "1.06", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Essential amino acids are the ones your body makes itself, so you do not need them in your diet.",
    answer: false,
    explain: "It is the reverse: essential amino acids are not made by the body (or not in large enough amounts), so they must come from your diet." },

  { id: "q085", lesson: "1.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "A <strong>peptide bond</strong> forms between…",
    options: [
      "the carboxyl group of one amino acid and the amino group of the next",
      "the R groups of two neighbouring amino acids in the chain",
      "the amino groups of two amino acids, releasing ammonia",
      "the central carbons of two amino acids, releasing hydrogen gas"
    ],
    answer: 0,
    explain: "The –COOH of one amino acid and the –NH<sub>2</sub> of the next join by dehydration synthesis, releasing one water molecule per peptide bond. A chain of amino acids is a polypeptide." },

  { id: "q086", lesson: "1.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which part of an amino acid decides whether it is nonpolar, polar, positively charged or negatively charged?",
    options: ["The amino group", "The carboxyl group", "The R group (side chain)", "The hydrogen on the central carbon"],
    answer: 2,
    explain: "Every amino acid has the same polar amino and carboxyl groups, so the R group sets its character. R groups containing O, N or S tend to create a dipole and make the amino acid polar." },

  { id: "q087", lesson: "1.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which level of protein structure is simply the <strong>sequence</strong> of amino acids in the chain?",
    options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
    answer: 0,
    explain: "Primary structure is the amino acid sequence, held together by peptide bonds and coded for by DNA. Every higher level of folding depends on it." },

  { id: "q088", lesson: "1.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Alpha helices and beta-pleated sheets (secondary structure) are held in place by…",
    options: [
      "peptide bonds formed between R groups",
      "ionic bonds between phosphate groups",
      "disulfide bridges between sulfur atoms only",
      "hydrogen bonds along the polypeptide backbone"
    ],
    answer: 3,
    explain: "Hydrogen bonds form between the C=O of one amino acid and the N–H of another along the backbone, coiling the chain into an α-helix or folding it into a β-pleated sheet." },

  { id: "q089", lesson: "1.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is <strong>tertiary</strong> structure?",
    options: [
      "The order of amino acids in the polypeptide chain",
      "The 3D folding of a polypeptide caused by interactions between R groups",
      "Local coiling into helices and sheets due to backbone hydrogen bonds",
      "Two or more polypeptide chains joined into one functional protein"
    ],
    answer: 1,
    explain: "Tertiary structure is the overall 3D shape of one chain, caused by side chain (R group) interactions. The options describe, in order: primary, tertiary, secondary and quaternary structure." },

  { id: "q090", lesson: "1.06", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Quaternary structure is found only in proteins made of more than one polypeptide chain.",
    answer: true,
    explain: "Quaternary structure is how two or more chains fit together (e.g., hemoglobin has four). A protein with a single chain has no quaternary level." },

  { id: "q091", lesson: "1.06", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "On the class amino acid chart, which amino acid has a <strong>nonpolar</strong> R group?",
    options: ["Serine", "Aspartic acid", "Glycine", "Histidine"],
    answer: 2,
    explain: "Said in class: learn one example from each group. Glycine is nonpolar (its R group is just –H), serine is polar, aspartic acid is negatively charged, and histidine is positively charged." },

  { id: "q092", lesson: "1.06", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Aspartic acid belongs to which R-group class?",
    options: ["Negatively charged (acidic)", "Positively charged (basic)", "Polar, uncharged", "Nonpolar"],
    answer: 0,
    explain: "Aspartic acid's R group has an extra carboxyl group that loses H<sup>+</sup> to become –COO<sup>−</sup>. Glutamic acid is the other negatively charged amino acid on the chart." },

  { id: "q093", lesson: "1.06", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Histidine belongs to which R-group class?",
    options: ["Nonpolar", "Negatively charged (acidic)", "Polar, uncharged", "Positively charged (basic)"],
    answer: 3,
    explain: "Histidine's R group contains a nitrogen ring that can accept H<sup>+</sup>, so it is in the positively charged (basic) group along with lysine and arginine." },

  { id: "q094", lesson: "1.06", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "Serine has a polar R group because its side chain contains a hydroxyl (–OH) group.",
    answer: true,
    explain: "The –OH makes serine's side chain polar, so it can hydrogen bond with water. Small, polar amino acids are the most water-soluble." },

  { id: "q095", lesson: "1.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which conditions can <strong>denature</strong> a protein?",
    options: [
      "Adding more of its substrate or more amino acids",
      "High temperature, or acidic, basic or salty conditions",
      "Cooling it slightly below normal body temperature",
      "Adding water so that its R groups dissolve"
    ],
    answer: 1,
    explain: "High temperatures (e.g., above about 40°C) and acidic, basic or salty environments make a protein lose its shape and function. Denaturation can be harmful (a high fever) or useful (cooking makes meat more tender)." },

  { id: "q096", lesson: "1.06", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "Denaturation usually breaks the peptide bonds that make up a protein's primary structure.",
    answer: false,
    explain: "Denaturation disrupts the weaker bonds that hold the 3D shape (secondary, tertiary and quaternary). Peptide bonds usually stay intact. The disruption can be temporary or permanent." },

  { id: "q097", lesson: "1.06", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "A protein's specific 3D shape determines its function.",
    answer: true,
    explain: "Functional proteins are one or more polypeptide chains twisted and coiled into a specific 3D shape. Change the shape (denaturation) and the protein stops working." },

  { id: "q098", lesson: "1.06", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which list contains only <strong>protein</strong> functions from the slides?",
    options: [
      "Long-term energy storage, insulation, cushioning organs and waterproofing",
      "Storing hereditary information and passing it from parents to offspring",
      "Structure, transport, signalling, movement and speeding up reactions",
      "Short-term energy storage and structural support in plant cell walls"
    ],
    answer: 2,
    explain: "Proteins give structural support, transport substances, carry cell signals, cause movement, coordinate and regulate activities, and speed up reactions (enzymes). The other lists describe lipids, nucleic acids and carbohydrates." },

  { id: "q099", lesson: "1.06", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "The two ends of a polypeptide chain are called the 5′ end and the 3′ end.",
    answer: false,
    explain: "A polypeptide has an N-terminus (free amino group) and a C-terminus (free carboxyl group). The 5′ and 3′ labels are used for nucleic acid strands." }
);
window.QUIZ.push(
  /* ---------------- 1.07 Enzymes ---------------- */
  { id: "q100", lesson: "1.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How do enzymes speed up chemical reactions?",
    options: ["By raising the temperature inside the cell", "By lowering the activation energy needed", "By adding extra energy to the products", "By increasing the activation energy needed"],
    answer: 1,
    explain: "Enzymes are protein catalysts: they lower the activation energy (for example by straining bonds and lining reactants up correctly), so the reaction runs faster. They are not used up." },

  { id: "q101", lesson: "1.07", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "An enzyme is used up in the reaction it catalyzes, so it must be replaced after each reaction.",
    answer: false,
    explain: "A catalyst speeds up a reaction without being consumed, which is why it is not a reactant. One enzyme molecule can be used again and again." },

  { id: "q102", lesson: "1.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the region of an enzyme where the substrate binds called?",
    options: ["The allosteric site", "The R group", "The peptide bond", "The active site"],
    answer: 3,
    explain: "The substrate binds the active site. The allosteric site is a different site where regulators (activators or non-competitive inhibitors) bind." },

  { id: "q103", lesson: "1.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which statement describes the <strong>induced fit</strong> model?",
    options: [
      "Once the substrate binds, the active site changes shape slightly to fit it more snugly",
      "The active site is a rigid, exact match for the substrate and never changes shape",
      "The substrate permanently changes the enzyme's amino acid sequence",
      "The enzyme can bind any molecule that happens to touch its active site"
    ],
    answer: 0,
    explain: "The substrate binds the active site to form an enzyme-substrate complex, and the active site undergoes a conformational change to better hold it. Enzymes are still very specific to their substrates." },

  { id: "q104", lesson: "1.07", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "As substrate concentration rises, the reaction rate increases and then levels off (plateaus). Why does it level off?",
    options: [
      "The enzyme denatures when there is too much substrate",
      "Extra substrate molecules act as competitive inhibitors",
      "Every active site is occupied; the enzymes are saturated",
      "The activation energy rises as more substrate is added"
    ],
    answer: 2,
    explain: "At first, more substrate means more collisions with free active sites. Once every active site is busy, adding substrate cannot speed things up; only adding more enzyme would." },

  { id: "q105", lesson: "1.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "A typical human enzyme works best at about ____, while an enzyme from a heat-tolerant organism works best at about ____.",
    options: ["0°C; 37°C", "37°C; 76°C", "76°C; 37°C", "37°C; 100°C"],
    answer: 1,
    explain: "Every enzyme has an optimal temperature. Human enzymes work best near body temperature (37°C); the slide's heat-tolerant example works best near 76°C." },

  { id: "q106", lesson: "1.07", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Above its optimal temperature, an enzyme's reaction rate drops because the enzyme begins to denature.",
    answer: true,
    explain: "Rate rises with temperature up to the optimum, then falls quickly as the enzyme loses its shape, including the shape of the active site." },

  { id: "q107", lesson: "1.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is a <strong>cofactor</strong>?",
    options: [
      "An organic molecule that shuttles electrons or protons",
      "A molecule that binds the active site and blocks the substrate",
      "An inorganic metal ion that helps stabilize the enzyme's shape",
      "The product released at the end of an enzyme reaction"
    ],
    answer: 2,
    explain: "Cofactors are inorganic metal ions that stabilize enzyme shape and attract substrate electrons. Cofactors and coenzymes are both non-protein helpers that bind inactive enzymes and alter their active sites." },

  { id: "q108", lesson: "1.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What makes a <strong>coenzyme</strong> different from a cofactor?",
    options: [
      "It is organic and can act as a shuttle for electrons or protons",
      "It is an inorganic metal ion such as Mg<sup>2+</sup> or Zn<sup>2+</sup>",
      "It is the part of the enzyme's own polypeptide that forms the active site",
      "It always slows the enzyme down by binding the allosteric site"
    ],
    answer: 0,
    explain: "Coenzymes are organic (carbon-based) helper molecules; many act as molecular shuttles that carry electrons or protons (you will meet NAD<sup>+</sup> and FAD in Unit 2). Cofactors are inorganic metal ions." },

  { id: "q109", lesson: "1.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How does a <strong>competitive</strong> inhibitor work?",
    options: [
      "It binds an allosteric site and changes the active site's shape",
      "It binds the active site and blocks the normal substrate",
      "It acts as a metal ion that helps the substrate bind",
      "It breaks the peptide bonds that hold the enzyme together"
    ],
    answer: 1,
    explain: "A competitive inhibitor resembles the substrate and competes for the active site. A non-competitive inhibitor binds elsewhere (an allosteric site)." },

  { id: "q110", lesson: "1.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How does a <strong>non-competitive</strong> inhibitor work?",
    options: [
      "It binds the active site and competes with the substrate",
      "It lowers the activation energy of the reaction",
      "It raises the amount of substrate available to the enzyme",
      "It binds an allosteric site, which changes the active site's shape"
    ],
    answer: 3,
    explain: "A non-competitive (allosteric) inhibitor binds away from the active site and stabilizes the inactive form, so the substrate no longer fits well." },

  { id: "q111", lesson: "1.07", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "An allosteric activator binds the regulatory (allosteric) site and stabilizes the active form of the enzyme.",
    answer: true,
    explain: "Allosteric enzymes switch between active and inactive forms. Activators stabilize the active form; allosteric inhibitors stabilize the inactive form." },

  { id: "q112", lesson: "1.07", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "In <strong>feedback inhibition</strong>, the end product of a metabolic pathway…",
    options: [
      "binds an allosteric site on an early enzyme and switches the pathway off",
      "binds the active site of the last enzyme and speeds the pathway up",
      "is broken down by hydrolysis so the pathway can start over again",
      "becomes the substrate for the first enzyme in the same pathway"
    ],
    answer: 0,
    explain: "Class example: isoleucine, the end product, binds the allosteric site of enzyme 1 (threonine deaminase), so threonine no longer fits and the pathway stops. This is negative feedback that keeps levels stable." },

  { id: "q113", lesson: "1.07", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "<strong>Exergonic</strong> reactions ____ energy and are often ____ reactions.",
    options: ["absorb; anabolic", "absorb; catabolic", "release; catabolic", "release; anabolic"],
    answer: 2,
    explain: "Exergonic reactions release energy (e.g., catabolic breakdown). Endergonic reactions absorb energy (e.g., anabolic building). Enzymes lower the activation energy for both kinds." },

  { id: "q114", lesson: "1.07", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "Fresh pineapple stops Jell-O from setting because its protease digests the gelatin, but cooked pineapple does not, because heat denatures the protease.",
    answer: true,
    explain: "Gelatin is a protein made from collagen, so pineapple's protease breaks it down. Cooking denatures the enzyme, so the gelatin can set." },

  { id: "q115", lesson: "1.07", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Most enzyme names end in the suffix -ose, as in sucrose.",
    answer: false,
    explain: "Many enzymes end in -ase (amylase, lipase, protease, lactase). The ending -ose is used for sugars such as sucrose and glucose." },

  { id: "q116", lesson: "1.07", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "An enzyme that works in the stomach most likely has an optimal pH closest to…",
    options: ["12", "9", "7.4", "2"],
    answer: 3,
    explain: "Every enzyme has an optimal pH that matches where it works: about 2 in the acidic stomach, and about 7.4 for enzymes in blood. Far from that pH, the enzyme can denature." },

  { id: "q117", lesson: "1.07", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "Which enzyme is correctly matched with the molecule it breaks down?",
    options: ["Lipase – proteins", "Amylase – starch", "Protease – lipids", "Lactase – sucrose"],
    answer: 1,
    explain: "Amylase digests starch, lipase digests lipids (fats), protease digests proteins, and lactase digests lactose. An enzyme's name often hints at its substrate." },

  /* ---------------- 1.08 Cell Organelles ---------------- */
  { id: "q118", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which organelle produces most of the cell's <strong>ATP</strong> through cellular respiration?",
    options: ["Chloroplast", "Golgi apparatus", "Mitochondrion", "Ribosome"],
    answer: 2,
    explain: "Mitochondria (two membranes) release energy from food to make ATP. Cells with high energy demand, such as muscle cells and neurons, have many; fat storage cells have few." },

  { id: "q119", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which organelle has ribosomes on its surface and makes and folds proteins that will be secreted or built into membranes?",
    options: ["Rough endoplasmic reticulum", "Smooth endoplasmic reticulum", "Golgi apparatus", "Lysosome"],
    answer: 0,
    explain: "The rough ER is a network of flattened sacs continuous with the nuclear envelope. Its ribosomes feed polypeptides into it, where they fold and are processed." },

  { id: "q120", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which organelle makes <strong>lipids</strong> (phospholipids and steroids) and <strong>detoxifies</strong> drugs and poisons?",
    options: ["Rough ER", "Nucleolus", "Golgi apparatus", "Smooth ER"],
    answer: 3,
    explain: "The smooth ER has no ribosomes, so it does not make proteins. It is abundant in liver cells (detoxification) and adrenal gland cells (steroid hormones)." },

  { id: "q121", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which organelle looks like a stack of flattened sacs ('pancakes') and modifies, sorts and packages proteins and lipids from the ER?",
    options: ["Endoplasmic reticulum", "Golgi apparatus", "Nuclear envelope", "Mitochondrion"],
    answer: 1,
    explain: "The Golgi apparatus adds finishing touches (e.g., sugars or phosphates, or trimming polypeptides), then ships the products off in vesicles to the cell membrane or to lysosomes." },

  { id: "q122", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Where in the cell are ribosome subunits assembled from RNA and protein?",
    options: ["Nucleolus", "Golgi apparatus", "Smooth ER", "Cytosol"],
    answer: 0,
    explain: "The nucleolus is a dense, irregular region inside the nucleus that assembles ribosome subunits, which then leave through the nuclear pores." },

  { id: "q123", lesson: "1.08", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Ribosomes are surrounded by a single membrane, like lysosomes.",
    answer: false,
    explain: "Ribosomes have no membrane. They make proteins either free in the cytosol or bound to the rough ER (or nuclear envelope)." },

  { id: "q124", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which organelle is a vesicle full of digestive enzymes that break down wastes, worn-out organelles and engulfed material?",
    options: ["Vacuole", "Smooth ER", "Lysosome", "Golgi apparatus"],
    answer: 2,
    explain: "Lysosomes carry out digestion inside the cell. They are made by the Golgi apparatus and are especially plentiful in white blood cells, which digest engulfed microbes." },

  { id: "q125", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "The pH inside a lysosome is about 4.5–5. What does this tell you about its enzymes?",
    options: [
      "They work best at a neutral pH of about 7",
      "They work best in acidic conditions",
      "They are denatured by acid, so they act only in the cytosol",
      "They are not proteins, so pH has no effect on them"
    ],
    answer: 1,
    explain: "An enzyme's optimal pH matches where it works. Lysosomal enzymes are adapted to acid, so if one leaks into the near-neutral cytosol it works poorly, which protects the cell." },

  { id: "q126", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which structures are found in plant cells but <strong>not</strong> in animal cells?",
    options: [
      "Mitochondria, ribosomes and the Golgi apparatus",
      "Nucleus, rough ER and lysosomes",
      "Centrioles, cilia and the cell membrane",
      "Cell wall, chloroplasts and a large central vacuole"
    ],
    answer: 3,
    explain: "Plants have a cellulose cell wall (protection, support, shape), chloroplasts (photosynthesis; double membrane, fluid stroma) and a large central vacuole. Plants also have mitochondria." },

  { id: "q127", lesson: "1.08", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Plant cells usually have a large central vacuole that stores water and keeps the cell firm through fluid pressure.",
    answer: true,
    explain: "The central vacuole helps with water balance and storage, and its fluid pressure keeps the plant cell firm. Animal cells have only small vacuoles, if any." },

  { id: "q128", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How does the nuclear envelope control what enters and leaves the nucleus?",
    options: [
      "Through ribosomes attached to its outer surface",
      "Through nuclear pores in its double membrane",
      "Through plasmodesmata linking it to the cell wall",
      "Through cilia that sweep molecules inward"
    ],
    answer: 1,
    explain: "The nuclear envelope is a double membrane dotted with nuclear pores that regulate traffic, e.g., letting ribosome subunits and RNA out." },

  { id: "q129", lesson: "1.08", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Chromatin is the dense region inside the nucleus where ribosome subunits are assembled.",
    answer: false,
    explain: "That describes the nucleolus. Chromatin is the cell's DNA together with its associated proteins, found in the nucleus outside the nucleolus." },

  { id: "q130", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is the difference between <strong>cytosol</strong> and <strong>cytoplasm</strong>?",
    options: [
      "They are two names for exactly the same thing",
      "Cytoplasm is only the fluid; cytosol also includes the organelles",
      "Cytosol is the fluid found only inside the nucleus",
      "Cytosol is the fluid; cytoplasm is the fluid plus organelles"
    ],
    answer: 3,
    explain: "Cytosol is the water-based fluid of the cell. Cytoplasm means everything between the cell membrane and the nucleus: the cytosol plus the organelles in it." },

  { id: "q131", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which cytoskeleton fibres are long, hollow tubes that also form the core of cilia and flagella?",
    options: ["Microtubules", "Microfilaments", "Chromatin fibres", "Intermediate filaments"],
    answer: 0,
    explain: "Microtubules are hollow cylinders that assemble and disassemble as needed. Microfilaments are thin solid fibres that change the cell's shape and allow contraction." },

  { id: "q132", lesson: "1.08", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Flagella are short, numerous and hair-like, while cilia are long and whip-like.",
    answer: false,
    explain: "It is the other way around: cilia are short and hair-like, and flagella are long and whip-like (e.g., a sperm's tail). Both are made of microtubules and move cells or fluids." },

  { id: "q133", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Pancreatic cells and plasma B cells secrete large amounts of protein (digestive enzymes and antibodies). Which organelles do they have in abundance?",
    options: ["Smooth ER and lysosomes", "Rough ER and Golgi apparatus", "Chloroplasts and vacuoles", "Mitochondria and smooth ER"],
    answer: 1,
    explain: "Rough ER makes and folds the proteins, the Golgi modifies and packages them, and vesicles carry them out by exocytosis. Cells such as fat cells that secrete little protein have little rough ER." },

  { id: "q134", lesson: "1.08", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "Liver cells contain a lot of smooth ER because they detoxify drugs and poisons.",
    answer: true,
    explain: "Smooth ER detoxifies metabolic wastes and drugs, so it is abundant in liver cells. Adrenal gland cells also have a lot of it because they make steroid hormones." },

  { id: "q135", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What is <strong>Tay-Sachs disease</strong>?",
    options: [
      "A disorder in which mitochondria cannot make enough ATP for the muscles",
      "A disease in which ribosomes fail to attach to the rough ER",
      "A lysosomal disorder: a missing enzyme lets lipids build up in nerve cells",
      "A condition in which the Golgi apparatus cannot package insulin"
    ],
    answer: 2,
    explain: "In Tay-Sachs disease, lysosomes lack one digestive enzyme, so a lipid they should break down builds up in neurons and damages the nervous system. The slides pose the question; these details come from outside the slides." },

  { id: "q136", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Which path does a protein that will be <strong>secreted</strong> from the cell follow?",
    options: [
      "Golgi → rough ER → lysosome → cell membrane",
      "Nucleus → smooth ER → mitochondrion → cell membrane",
      "Ribosome → lysosome → vacuole → cell membrane",
      "Rough ER → vesicle → Golgi → vesicle → cell membrane"
    ],
    answer: 3,
    explain: "Ribosomes on the rough ER make the protein, a vesicle carries it to the Golgi for modification and packaging, and a secretory vesicle fuses with the cell membrane to release it (exocytosis)." },

  { id: "q137", lesson: "1.08", type: "mcq", kind: "knowledge", tier: "extra", level: 1,
    q: "Which two organelles have their own double membrane and resemble bacteria, which supports the theory of endosymbiosis?",
    options: ["Mitochondria and chloroplasts", "Lysosomes and vacuoles", "Golgi apparatus and smooth ER", "Ribosomes and nucleoli"],
    answer: 0,
    explain: "Mitochondria and chloroplasts are thought to descend from bacteria that were engulfed by an ancestral cell. This idea goes beyond the slides." }
);
window.QUIZ.push(
  /* ---------------- 1.09 Cell Membrane ---------------- */
  { id: "q138", lesson: "1.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In the fluid mosaic model, what does <strong>fluid</strong> refer to?",
    options: [
      "The membrane being made mostly of water molecules",
      "The cytosol flowing freely through the membrane",
      "Phospholipids and proteins moving sideways within the membrane",
      "Proteins dissolving into the extracellular fluid"
    ],
    answer: 2,
    explain: "The components are not static: phospholipids and proteins drift laterally. Said in class: this flexibility lets the membrane take some damage without rupturing." },

  { id: "q139", lesson: "1.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "In the fluid mosaic model, what does <strong>mosaic</strong> refer to?",
    options: [
      "The membrane is made of many different macromolecules",
      "The phosphate heads form a checkerboard pattern",
      "The membrane has two separate layers of phospholipids",
      "The proteins are fixed in one permanent position"
    ],
    answer: 0,
    explain: "Like tiles in a mosaic, the membrane is made of many different pieces: phospholipids, proteins, cholesterol, and carbohydrates attached as glycoproteins and glycolipids." },

  { id: "q140", lesson: "1.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How do <strong>integral</strong> proteins differ from <strong>peripheral</strong> proteins?",
    options: [
      "Integral proteins are made of carbohydrate, peripheral ones of lipid",
      "Integral proteins are found only in plant cell membranes",
      "Integral proteins sit loosely on the inner surface only",
      "Integral proteins are embedded in the bilayer, often spanning it"
    ],
    answer: 3,
    explain: "Integral proteins are embedded in the bilayer, and many span it from outside to inside (e.g., channels). Peripheral proteins sit on only one surface and do not cross the hydrophobic core." },

  { id: "q141", lesson: "1.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Carbohydrate chains attached to membrane <strong>proteins</strong> form…",
    options: ["glycolipids", "glycoproteins", "phospholipids", "cholesterol"],
    answer: 1,
    explain: "Glycoproteins work in communication, transport and anchoring, and act as 'ID tags' for cell recognition. Carbohydrates on phospholipids form glycolipids instead." },

  { id: "q142", lesson: "1.09", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What does cholesterol do to the membrane at <strong>high</strong> temperatures?",
    options: [
      "Makes it more fluid by pushing the phospholipids apart",
      "Breaks down into fatty acids that leave the membrane",
      "Makes it less fluid by restraining phospholipid movement",
      "Dissolves into the cytosol and lets the membrane melt"
    ],
    answer: 2,
    explain: "Cholesterol acts as a fluidity buffer. In heat it stays bonded in place and restrains the phospholipids (less fluid); in cold it keeps them from packing tightly, so the membrane does not freeze." },

  { id: "q143", lesson: "1.09", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "Why can't ions and large polar molecules cross the phospholipid bilayer on their own?",
    options: [
      "The bilayer's interior of fatty acid tails is hydrophobic",
      "The phosphate heads are nonpolar and repel all charges",
      "Ions are too small to be held by the phosphate heads",
      "Ions can only move during dehydration synthesis"
    ],
    answer: 0,
    explain: "The nonpolar core repels charged and polar particles, so they need hydrophilic pores formed by proteins (channels and carriers). Small nonpolar molecules like O<sub>2</sub> and CO<sub>2</sub> pass straight through." },

  { id: "q144", lesson: "1.09", type: "mcq", kind: "knowledge", tier: "likely", level: 2,
    q: "Adrenaline cannot cross the membrane, so it binds a receptor protein on the outside, which triggers reactions inside the cell. Which membrane function is this?",
    options: ["Intercellular joining", "Enzymatic activity", "Compartmentalization", "Signal transduction"],
    answer: 3,
    explain: "Signal transduction passes a message across the membrane without the signal molecule entering (class example: adrenaline). Other functions include physical barrier, selective permeability, cell-cell recognition, enzymatic activity, intercellular joining and anchoring." },

  { id: "q145", lesson: "1.09", type: "mcq", kind: "knowledge", tier: "likely", level: 1,
    q: "What is the 'sugar coat' of carbohydrate chains on a cell's outer surface called?",
    options: ["Cytoskeleton", "Glycocalyx", "Extracellular fluid", "Cell wall"],
    answer: 1,
    explain: "Said in class: the glycocalyx is made of short carbohydrate chains on the cell exterior. It helps in cell recognition and binds the extracellular matrix, which holds cells together in tissues." },

  { id: "q146", lesson: "1.09", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Unsaturated fatty acid tails increase membrane fluidity, while saturated tails decrease it.",
    answer: true,
    explain: "Kinks in cis-unsaturated tails keep phospholipids from packing closely. Saturated tails (and, as said in class, straight trans tails) pack tightly and make the membrane less fluid." },

  { id: "q147", lesson: "1.09", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "At low temperatures, cholesterol keeps phospholipids from packing tightly together, which stops the membrane from freezing.",
    answer: true,
    explain: "In the cold, cholesterol wedges between the tails and keeps space between them, maintaining fluidity. In the heat it has the opposite effect." },

  { id: "q148", lesson: "1.09", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Peripheral proteins span the entire bilayer, from the extracellular fluid to the cytoplasm.",
    answer: false,
    explain: "Peripheral proteins sit on only one surface (inner or outer). Proteins that span the bilayer are integral proteins." },

  { id: "q149", lesson: "1.09", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "The carbohydrate chains of glycoproteins and glycolipids face the cytoplasm side of the membrane.",
    answer: false,
    explain: "Membrane carbohydrates are attached to the cell's exterior, where they act in cell recognition and in attaching to the extracellular matrix." },

  { id: "q150", lesson: "1.09", type: "tf", kind: "knowledge", tier: "likely", level: 2,
    q: "Fish that live in cold water have more unsaturated fatty acids in their membranes, which keeps the membranes fluid.",
    answer: true,
    explain: "Saturated tails would pack tightly and make the membranes stiff and brittle in the cold. Kinked unsaturated tails keep the membranes fluid and working." },

  { id: "q151", lesson: "1.09", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Glycolipids are carbohydrate chains attached to membrane proteins.",
    answer: false,
    explain: "Glycolipids are carbohydrate chains attached to phospholipids; they add membrane stability and act in cell surface identification. Carbohydrates attached to proteins form glycoproteins." },

  { id: "q152", lesson: "1.09", type: "tf", kind: "knowledge", tier: "extra", level: 1,
    q: "Some membrane proteins join neighbouring cells together through junctions, such as tight junctions and gap junctions.",
    answer: true,
    explain: "Intercellular joining (helping build tissues) is a membrane function on the slides. The names of the junctions go beyond the slides." },

  /* ---------------- 1.10 Cellular Transport ---------------- */
  { id: "q153", lesson: "1.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which list contains <strong>only</strong> types of passive transport?",
    options: [
      "Osmosis, active transport and endocytosis",
      "Simple diffusion, facilitated diffusion and osmosis",
      "Facilitated diffusion, exocytosis and the Na<sup>+</sup>/K<sup>+</sup> pump",
      "Simple diffusion, phagocytosis and pinocytosis"
    ],
    answer: 1,
    explain: "Passive transport needs no energy and moves particles down their concentration gradient: simple diffusion, facilitated diffusion and osmosis. Pumps, endocytosis and exocytosis need energy." },

  { id: "q154", lesson: "1.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which molecules cross the membrane by <strong>simple diffusion</strong>?",
    options: [
      "Charged ions such as sodium (Na<sup>+</sup>) and potassium (K<sup>+</sup>)",
      "Large proteins such as enzymes and antibodies",
      "Polar sugars and amino acids such as glucose",
      "Small, lipid-soluble molecules such as O<sub>2</sub> and CO<sub>2</sub>"
    ],
    answer: 3,
    explain: "Small nonpolar (lipid-soluble) molecules slip straight through the bilayer. Ions need channel proteins, sugars and amino acids need carrier proteins, and large proteins need bulk transport." },

  { id: "q155", lesson: "1.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "How do <strong>channel proteins</strong> differ from carrier proteins?",
    options: [
      "Channels form water-filled pores for specific ions and do not change shape",
      "Channels change shape each time they move a molecule across",
      "Channels always use ATP to move ions against their gradient",
      "Channels engulf particles and pinch them off in vesicles"
    ],
    answer: 0,
    explain: "Channel proteins are open pores (e.g., aquaporins for water, said in class). Carrier proteins change shape to pass specific molecules by size, shape and charge, such as amino acids, sugars and small proteins." },

  { id: "q156", lesson: "1.10", type: "mcq", kind: "knowledge", tier: "essential", level: 2,
    q: "A cell is placed in a solution with a <strong>lower</strong> solute concentration than its cytoplasm. Which statement is correct?",
    options: [
      "The solution is hypertonic, so the cell loses water",
      "The solution is isotonic, so there is no net water movement",
      "The solution is hypotonic, so the cell gains water",
      "The solution is hypotonic, so the cell loses water"
    ],
    answer: 2,
    explain: "Low solute outside means high water concentration outside, so water moves in. Memory tip: 'hypo' sounds like 'hippo' – the cell swells, and an animal cell may burst (lysis)." },

  { id: "q157", lesson: "1.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What happens to a red blood cell placed in a <strong>hypertonic</strong> solution?",
    options: [
      "It gains water and bursts (lysis)",
      "It loses water and shrivels (crenation)",
      "It stays the same size with no net movement",
      "It becomes firm and turgid against its wall"
    ],
    answer: 1,
    explain: "A hypertonic solution has more solute than the cell, so water leaves the cell and it shrivels (crenation). Animal cells have no cell wall, so 'turgid' does not apply to them." },

  { id: "q158", lesson: "1.10", type: "mcq", kind: "knowledge", tier: "extra", level: 2,
    q: "What happens to a <strong>plant cell</strong> in a hypotonic solution?",
    options: [
      "It bursts (lysis), exactly like an animal cell",
      "Its membrane pulls away from the cell wall",
      "It shrivels because water leaves its vacuole",
      "It swells and becomes turgid; the wall stops it bursting"
    ],
    answer: 3,
    explain: "Water enters and fills the central vacuole, pushing the membrane against the strong cell wall. This turgid state is the healthy normal for plant cells. Plant cell outcomes go beyond the slides." },

  { id: "q159", lesson: "1.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is <strong>phagocytosis</strong>?",
    options: [
      "'Cell eating': the cell engulfs solid particles",
      "'Cell drinking': the cell takes in fluid and solutes",
      "The release of hormones from the cell in vesicles",
      "The diffusion of water across the cell membrane"
    ],
    answer: 0,
    explain: "Phagocytosis ('cell eating') is a type of endocytosis in which the cell engulfs solid particles, e.g., a white blood cell engulfing bacteria. Pinocytosis is 'cell drinking'." },

  { id: "q160", lesson: "1.10", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Which type of endocytosis takes in specific molecules only after they bind to receptors on the cell surface?",
    options: ["Pinocytosis", "Phagocytosis", "Receptor-mediated endocytosis", "Constitutive exocytosis"],
    answer: 2,
    explain: "In receptor-mediated endocytosis, binding to surface receptors triggers vesicle formation, so the cell takes in only the selected molecules." },

  { id: "q161", lesson: "1.10", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Diffusion moves particles from an area of high concentration to an area of lower concentration without using energy.",
    answer: true,
    explain: "Diffusion is passive: particles move down (along) their concentration gradient until they reach dynamic equilibrium." },

  { id: "q162", lesson: "1.10", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "When particles reach dynamic equilibrium, they stop moving.",
    answer: false,
    explain: "Particles keep moving in both directions; there is just no net change in concentration. That is why it is called <em>dynamic</em> equilibrium." },

  { id: "q163", lesson: "1.10", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Osmosis is the diffusion of solutes, such as salt, across a selectively permeable membrane.",
    answer: false,
    explain: "Osmosis is the diffusion of <em>water</em> across a selectively permeable membrane, from an area of high water concentration to an area of lower water concentration." },

  { id: "q164", lesson: "1.10", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "In an isotonic solution there is no net movement of water, but water molecules still cross the membrane in both directions.",
    answer: true,
    explain: "Isotonic means equal solute concentrations on both sides, so water enters and leaves at the same rate. No net movement does not mean no movement (said in class)." },

  { id: "q165", lesson: "1.10", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Active transport moves particles down their concentration gradient, so it does not need energy.",
    answer: false,
    explain: "Active transport moves particles against their gradient (low to high), so it needs energy (ATP) and specific carrier proteins." },

  { id: "q166", lesson: "1.10", type: "tf", kind: "knowledge", tier: "essential", level: 1,
    q: "Regulated exocytosis is a continuous, automatic process that constantly secretes membrane lipids and proteins.",
    answer: false,
    explain: "That is constitutive exocytosis, which happens in all cells. Regulated exocytosis stores substances and releases them on demand after a chemical or electrical signal." },

  { id: "q167", lesson: "1.10", type: "tf", kind: "knowledge", tier: "likely", level: 1,
    q: "The sodium-potassium (Na<sup>+</sup>/K<sup>+</sup>) pump is an example of active transport.",
    answer: true,
    explain: "The pump uses ATP to move Na<sup>+</sup> and K<sup>+</sup> against their concentration gradients. Endocytosis and exocytosis also need energy." },

  { id: "q168", lesson: "1.10", type: "tf", kind: "knowledge", tier: "extra", level: 2,
    q: "A plant cell in a hypertonic solution undergoes plasmolysis: it loses water and its membrane pulls away from the cell wall.",
    answer: true,
    explain: "Water leaves the central vacuole, the cell loses turgor, and the membrane shrinks away from the rigid wall. Plant cell outcomes go beyond the slides." }
);
/* @@END@@ */
