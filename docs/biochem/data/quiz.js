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
      "Water molecules are joined to each other by strong ionic bonds",
      "Added heat is used first to break hydrogen bonds rather than to speed up the molecules",
      "Water is nonpolar, so it absorbs heat only slowly",
      "The covalent O–H bonds inside each molecule break as water warms up"
    ],
    answer: 1,
    explain: "So much energy goes into disrupting hydrogen bonds that water's temperature changes slowly. This helps the body hold a steady 37°C." },

  { id: "q010", lesson: "1.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "Humans cool off by sweating and dogs by panting. Which property of water makes this work?",
    options: [
      "Ice is less dense than liquid water",
      "Water dissolves ionic substances well",
      "Water adheres strongly to the skin",
      "Water's high heat of vaporization, which causes evaporative cooling"
    ],
    answer: 3,
    explain: "Liquid water must absorb a lot of heat to break its hydrogen bonds and become vapour. When sweat or saliva evaporates, it carries that heat away from the body." },

  { id: "q011", lesson: "1.01", type: "mcq", kind: "knowledge", tier: "essential", level: 1,
    q: "What is a <strong>buffer</strong>?",
    options: [
      "A catalyst that speeds up reactions without being used up",
      "A strong acid that keeps blood pH low",
      "A substance that resists pH change by accepting or releasing H<sup>+</sup> as needed",
      "A protein that carries oxygen in the blood"
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

  { id: "q017", lesson: "1.01", type: "tf", kind: "knowledge", tier: "essential", level: 2,
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
      "Sulfhydryl is the most polar group, and hydroxyl is only slightly polar",
      "Hydroxyl, carboxyl and amino are very polar; carbonyl is slightly polar; sulfhydryl is even less polar",
      "Carbonyl and sulfhydryl are very polar; hydroxyl and amino are nonpolar",
      "Amino and carboxyl are nonpolar because they cancel each other out"
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
      "Any carbon atom that has four single bonds",
      "The long hydrocarbon chain that forms the backbone of a macromolecule",
      "A monomer that joins to others by dehydration synthesis",
      "A specific group of atoms bound to a carbon backbone that determines the molecule's chemical properties"
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
/* @@END@@ */
