// Applied quiz (Unit 1 Biochemistry): homework extensions + new scenarios (use facts in new situations, not recall).
// "extra" tier = beyond the slides (the explanation says so).
window.QUIZ_APPLIED = window.QUIZ_APPLIED || [];

window.QUIZ_APPLIED.push(

// ---------- 1.01 Chemistry Basics & Water ----------
{ id: "a001", lesson: "1.01", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `On a hot day, a cyclist's sweat evaporates from her skin and cools her down. Why is evaporating water so effective at removing body heat?`,
  options: [
    `Water has a low specific heat, so sweat warms up quickly and carries heat away as it drips off`,
    `Evaporating water forms new hydrogen bonds with the skin, and forming those bonds releases heat into the air`,
    `Water has a high heat of vaporization, so every gram that evaporates absorbs a large amount of heat from the skin`,
    `Water is nonpolar, so it evaporates faster than other liquids and takes heat with it`],
  answer: 2,
  explain: `To turn liquid water into vapour, the hydrogen bonds holding each molecule to its neighbours must be broken, and that takes a lot of energy (high heat of vaporization). That energy is absorbed from your skin, so each gram of sweat that evaporates removes a large amount of body heat: evaporative cooling. Water actually has a <em>high</em> specific heat (not low), and it is polar, not nonpolar. Breaking hydrogen bonds absorbs energy; it is forming them that releases energy.` },

{ id: "a002", lesson: "1.01", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `If water had a LOW specific heat capacity, a person exercising hard would have much more trouble keeping their body temperature near 37 °C.`,
  answer: true,
  explain: `True. A high specific heat means water (most of your body mass) must absorb a lot of heat before its temperature rises, because added energy first goes into disrupting hydrogen bonds rather than speeding up the molecules. With a low specific heat, the heat produced by working muscles would raise body temperature quickly; proteins could denature and enzyme-catalyzed reactions would be pushed away from their optimum. Large bodies of water would also stop acting as stable heat sinks for aquatic life.` },

{ id: "a003", lesson: "1.01", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Which pair of molecules can form a hydrogen bond with each other?`,
  options: [
    `Ammonia (NH<sub>3</sub>) and water (H<sub>2</sub>O)`,
    `Methane (CH<sub>4</sub>) and water (H<sub>2</sub>O)`,
    `Carbon dioxide (CO<sub>2</sub>) and oxygen (O<sub>2</sub>)`,
    `Methane (CH<sub>4</sub>) and methane (CH<sub>4</sub>)`],
  answer: 0,
  explain: `A hydrogen bond needs a hydrogen covalently bonded to N, O or F (so it carries a strong δ+) and a small, very electronegative N, O or F on the neighbouring molecule. NH<sub>3</sub> has N–H bonds and a lone pair on N; water has O–H bonds and lone pairs on O, so they hydrogen bond in both directions (that is why ammonia dissolves so well in water). In methane, each H is bonded to carbon, and the small electronegativity difference leaves no strong δ+ on the hydrogen. CO<sub>2</sub> and O<sub>2</sub> are nonpolar and have no hydrogens at all, so only London dispersion forces act between them.` },

{ id: "a004", lesson: "1.01", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Blood plasma is mostly water, yet almost all the oxygen in your blood is carried bound to hemoglobin inside red blood cells rather than dissolved in the plasma. Which explanation fits the chemistry of O<sub>2</sub>?`,
  options: [
    `O<sub>2</sub> is an ionic compound that reacts with water, so it would be destroyed if it dissolved`,
    `O<sub>2</sub> forms such strong hydrogen bonds with water that it could never be released to the tissues`,
    `O<sub>2</sub> is a polar molecule, but it is too large to fit between water molecules`,
    `O<sub>2</sub> is nonpolar, so only a small amount dissolves in water; a carrier protein is needed to transport enough`],
  answer: 3,
  explain: `In O<sub>2</sub> the two atoms are identical, so the electrons are shared equally: the molecule is nonpolar and cannot hydrogen bond with water. Because it is small, a little does dissolve, but nowhere near enough to supply your tissues, so hemoglobin carries most of it. O<sub>2</sub> is not ionic, not polar, and has no hydrogens to form hydrogen bonds with.` },

{ id: "a005", lesson: "1.01", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Carbon tetrachloride (CCl<sub>4</sub>) has four polar C–Cl bonds, but the molecule as a whole is nonpolar. What is the best explanation?`,
  options: [
    `Carbon and chlorine have identical electronegativities, so the bonds are not really polar`,
    `The four bonds point symmetrically around the carbon, so their dipoles cancel out`,
    `The carbon atom has a lone pair of electrons that cancels the partial charges`,
    `Chlorine atoms are too large to hold a partial negative charge`],
  answer: 1,
  explain: `Whether a molecule is polar depends on both its bonds and its shape. Each C–Cl bond is polar (Cl is more electronegative), but the four bonds are arranged symmetrically, so the pulls cancel, just like the two C=O dipoles in linear CO<sub>2</sub>. Compare ammonia: the lone pair on nitrogen makes its shape lopsided, so the dipoles do <em>not</em> cancel and NH<sub>3</sub> is polar. In CCl<sub>4</sub>, carbon has no lone pairs; all four of its valence electrons are used in bonds.` },

{ id: "a006", lesson: "1.01", type: "tf", kind: "applied", tier: "likely", level: 4,
  q: `A person who is hyperventilating breathes out extra CO<sub>2</sub>. In the bicarbonate buffer system (CO<sub>2</sub> + H<sub>2</sub>O ⇌ H<sub>2</sub>CO<sub>3</sub> ⇌ H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup>), this lowers the H<sup>+</sup> concentration, so blood pH rises.`,
  answer: true,
  explain: `True. Removing CO<sub>2</sub> pulls the equilibrium to the left: H<sup>+</sup> combines with HCO<sub>3</sub><sup>−</sup> to form carbonic acid, which breaks down to replace the lost CO<sub>2</sub> and water. Fewer free H<sup>+</sup> ions means a higher pH. This is why breathing rate (controlled by the medulla oblongata) helps regulate blood pH, which normally stays between 7.35 and 7.45.` },

{ id: "a007", lesson: "1.01", type: "mcq", kind: "applied", tier: "extra", level: 3,
  q: `Iodine-131, used to treat thyroid cancer, has a half-life of about 8 days. If a patient's thyroid absorbs 80 mg of I-131, about how much is still radioactive I-131 after 24 days (ignoring any that leaves the body)?`,
  options: [
    `40 mg`,
    `10 mg`,
    `20 mg`,
    `0 mg, because all of it has decayed after three half-lives`],
  answer: 1,
  explain: `Beyond the slides (half-life calculations). 24 days is 24 ÷ 8 = 3 half-lives. Each half-life halves what is left: 80 → 40 → 20 → 10 mg. Radioactive decay does not reach zero after a few half-lives; it keeps halving. This targeted decay is why I-131 works as a treatment: the thyroid naturally absorbs iodine to make its hormones, and the radiation only penetrates 1–2 mm of tissue, so it mainly destroys thyroid cells.` },

// ---------- 1.02 Functional Groups & Macromolecules ----------
{ id: "a008", lesson: "1.02", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A lab analyzes an unknown molecule. It contains only C, H and O, has five hydroxyl (–OH) groups and one carbonyl (C=O) group, and it dissolves easily in water. Which class does it most likely belong to?`,
  options: [
    `An amino acid`,
    `A triglyceride`,
    `A nucleotide`,
    `A monosaccharide`],
  answer: 3,
  explain: `Many –OH groups plus one C=O on a carbon chain is the signature of a simple sugar (glucose, in its chain form, has five –OH groups and one carbonyl), and those polar –OH groups explain its high solubility. An amino acid must contain nitrogen (in its amino group), and a nucleotide contains nitrogen and phosphorus. A triglyceride is mostly long nonpolar hydrocarbon chains, so it would not dissolve in water.` },

{ id: "a009", lesson: "1.02", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A ribosome joins 50 amino acids into a single, unbranched polypeptide chain. How many water molecules are released?`,
  options: [
    `49`,
    `50`,
    `51`,
    `100`],
  answer: 0,
  explain: `Each peptide bond forms by dehydration synthesis (condensation), releasing one H<sub>2</sub>O. An unbranched chain of <em>n</em> monomers has <em>n</em> − 1 bonds, so 50 amino acids need 49 peptide bonds and release 49 water molecules. The same rule works for any linear polymer: a chain of 300 glucose units has 299 glycosidic linkages. To hydrolyze a chain completely, you must add back the same number of water molecules.` },

{ id: "a010", lesson: "1.02", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A chemist removes the phosphate group from a batch of phospholipids and then mixes the remaining molecules with water. What would you predict?`,
  options: [
    `They would still form a bilayer, because the fatty acid tails alone are enough to line up in two layers`,
    `They would dissolve completely in the water, because removing the phosphate makes them smaller`,
    `They would no longer form a bilayer; with no polar head they would clump together away from the water, like oil`,
    `They would form a single layer with their tails pointing into the water`],
  answer: 2,
  explain: `Phospholipids form bilayers because they are amphipathic: a polar, charged phosphate head is attracted to water, and the nonpolar hydrocarbon tails are not. Remove the head and the molecule is entirely nonpolar (hydrophobic), so nothing can face the water. The molecules simply aggregate like oil droplets. Without the phosphate group, a cell could not build a membrane that separates two watery compartments.` },

{ id: "a011", lesson: "1.02", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `During intense exercise, blood pH drops slightly (more H<sup>+</sup>). Hemoglobin's oxygen binding depends partly on the amino (–NH<sub>2</sub>) and carboxyl (–COOH) groups of its amino acids. What is the most likely effect of the extra H<sup>+</sup>?`,
  options: [
    `Amino groups gain H<sup>+</sup> (–NH<sub>2</sub> → –NH<sub>3</sub><sup>+</sup>), changing the charges inside the protein and shifting its shape so it binds O<sub>2</sub> less well`,
    `Carboxyl groups lose H<sup>+</sup> (–COOH → –COO<sup>−</sup>), so the protein becomes more negative and binds O<sub>2</sub> more tightly`,
    `The extra H<sup>+</sup> breaks the peptide bonds, splitting hemoglobin into single amino acids`,
    `Nothing changes, because functional groups are not affected by pH`],
  answer: 0,
  explain: `With more H<sup>+</sup> available, amino groups pick up a proton (become –NH<sub>3</sub><sup>+</sup>) and carboxyl groups stay in their un-ionized –COOH form instead of losing H<sup>+</sup>. A protein's 3D shape depends on attractions between charged and polar groups, so changing those charges shifts hemoglobin's shape and reduces how well it holds O<sub>2</sub>. (Helpfully, this means hard-working muscles that produce acid get more O<sub>2</sub> unloaded.) A small pH change does not break peptide bonds.` },

{ id: "a012", lesson: "1.02", type: "tf", kind: "applied", tier: "likely", level: 2,
  q: `A molecule covered in sulfhydryl (–SH) groups would be more soluble in water than a similar molecule covered in hydroxyl (–OH) groups, because –SH is the more polar group.`,
  answer: false,
  explain: `False. From the class ranking: hydroxyl, carboxyl and amino groups are very polar, carbonyl is slightly polar, and sulfhydryl is even less polar. Oxygen is much more electronegative than sulfur, so the O–H bond is strongly polar and can hydrogen bond with water, while the S–H bond is only weakly polar. The –OH molecule would dissolve better. This is why sugars and alcohols, which are full of –OH groups, are so soluble.` },

{ id: "a013", lesson: "1.02", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Acetic acid in vinegar contains a carboxyl group (–COOH). When it dissolves in water, why does it make the solution acidic?`,
  options: [
    `The carbonyl oxygen accepts an H<sup>+</sup> from water, so the group becomes –COOH<sub>2</sub><sup>+</sup>`,
    `The carboxyl group releases its whole –OH as a hydroxide ion`,
    `The hydrogen on the –OH part of the carboxyl group can be released as H<sup>+</sup>, leaving –COO<sup>−</sup>`,
    `The carboxyl group gains electrons from water and becomes reduced`],
  answer: 2,
  explain: `By the Brønsted–Lowry definition, an acid is a proton (H<sup>+</sup>) donor. The O–H bond in a carboxyl group is very polar, and the neighbouring C=O helps stabilize the negative charge left behind, so the H<sup>+</sup> comes off easily: –COOH → –COO<sup>−</sup> + H<sup>+</sup>. More H<sup>+</sup> in solution means a lower pH. Releasing hydroxide (OH<sup>−</sup>) would make the solution basic, the opposite effect; accepting H<sup>+</sup> is what a base does.` },

{ id: "a014", lesson: "1.02", type: "mcq", kind: "applied", tier: "extra", level: 2,
  q: `A researcher wants to check whether a newly made compound contains –OH and C=O groups. Which technique detects functional groups by measuring how their bonds vibrate?`,
  options: [
    `Mass spectrometry`,
    `Infrared (IR) spectroscopy`,
    `X-ray crystallography`,
    `Paper chromatography`],
  answer: 1,
  explain: `Beyond the slides (from the research homework on how compounds are mapped). Each type of bond (O–H, C=O, N–H) absorbs infrared light at its own characteristic frequencies as it vibrates, so an IR spectrum shows which functional groups are present. Mass spectrometry gives the molecular mass and fragment pieces; X-ray crystallography shows the 3D positions of atoms in a crystal; NMR maps the carbon and hydrogen environments. Chromatography separates mixtures but does not identify bonds. Scientists combine several techniques to work out a full structure.` },

// ---------- 1.03 Carbohydrates ----------
{ id: "a015", lesson: "1.03", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A cow can live on grass, which is mostly cellulose, but a human who ate only grass would starve. What best explains the difference?`,
  options: [
    `Cows make extra amylase, which can also break the glycosidic linkages in cellulose`,
    `Cellulose in grass is made of fructose, which cows can absorb but humans cannot`,
    `The cow's stomach acid is strong enough to hydrolyze cellulose without any enzyme`,
    `Gut microbes in cows make cellulase to hydrolyze cellulose; humans lack this enzyme`],
  answer: 3,
  explain: `Cellulose is a polymer of glucose, but its glucose units are joined by a different (beta) linkage than the alpha linkages in starch. Humans make amylase, which only breaks the linkages in starch; no human enzyme can break cellulose. Cows and other herbivores host gut microbes that produce cellulase, releasing glucose the cow can use for cellular respiration. In humans, cellulose passes through as fibre.` },

{ id: "a016", lesson: "1.03", type: "mcq", kind: "applied", tier: "extra", level: 3,
  q: `A person with lactose intolerance makes very little lactase. After drinking a glass of milk, what happens to most of the lactose?`,
  options: [
    `It is absorbed whole into the blood and broken down later by enzymes in the liver`,
    `It is hydrolyzed by amylase in the small intestine instead, so there are no symptoms`,
    `It is converted into cellulose in the gut and leaves the body as insoluble fibre`,
    `It is not split into glucose and galactose, so it passes unabsorbed into the large intestine`],
  answer: 3,
  explain: `Only monosaccharides are absorbed by the small intestine. Lactose (milk sugar) is a disaccharide of glucose + galactose, and lactase is the specific enzyme that hydrolyzes its glycosidic linkage. Amylase cannot do the job, because enzymes are specific to their substrate. Beyond the slides: in the large intestine, bacteria ferment the leftover lactose and produce gas, and the undigested sugar draws water into the gut, which causes bloating and cramps.` },

{ id: "a017", lesson: "1.03", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Glycogen is highly branched by many α-1,6 linkages. Why does this make it a good fuel store for an animal that suddenly needs glucose, such as a deer running from a predator?`,
  options: [
    `Branches make glycogen insoluble, so it cannot leak out of muscle and liver cells`,
    `Every branch adds another chain end, so many enzymes can remove glucose units at the same time`,
    `α-1,6 linkages store more energy per bond than α-1,4 linkages`,
    `Branching lets glycogen be digested by cellulase as well as amylase`],
  answer: 1,
  explain: `Enzymes release glucose from the ends of the chains. A highly branched molecule has many ends, so many enzyme molecules can work at once and glucose is released quickly: branched polysaccharides are open, accessible structures suited to rapid energy release. Linear, unbranched chains (like cellulose) pack together for structural strength instead. The type of linkage does not change how much energy the glucose units hold.` },

{ id: "a018", lesson: "1.03", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Glucose dissolves easily in water, but cellulose, a polymer made entirely of glucose, is completely insoluble. Which explanation is best?`,
  options: [
    `Cellulose has no hydroxyl groups left, because they are all used up in glycosidic linkages`,
    `Cellulose is built from a nonpolar isomer of glucose that cannot hydrogen bond with water`,
    `Its –OH groups hydrogen bond with neighbouring chains instead of water, packing them into rigid fibres`,
    `Water molecules are too large to fit into the spaces between the glucose units of cellulose`],
  answer: 2,
  explain: `Each glucose unit in cellulose still carries several polar –OH groups (only the ones at C1 and C4 are used in the linkages). But those –OH groups form hydrogen bonds with neighbouring parallel chains, so they are not free to bond with water, and the chains pack into strong fibres. The sheer size of the polymer also makes it too costly to pull into solution. Small monosaccharides, with all their –OH groups exposed, dissolve readily: ideal for transport in blood, while insoluble polysaccharides suit structure and storage.` },

{ id: "a019", lesson: "1.03", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `Glucose and fructose are isomers (both C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>). When they join by dehydration synthesis to form sucrose, the product has the formula C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>.`,
  answer: true,
  explain: `True. Adding the two monomers gives C<sub>12</sub>H<sub>24</sub>O<sub>12</sub>. Dehydration synthesis removes one H<sub>2</sub>O (an –OH from one sugar and an H from the other) to form the glycosidic linkage, leaving C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>. Maltose and lactose share this formula, because each is also two hexoses minus one water.` },

{ id: "a020", lesson: "1.03", type: "tf", kind: "applied", tier: "essential", level: 2,
  q: `Eating more fibre (cellulose) from vegetables raises your blood glucose, because your small intestine eventually breaks the cellulose down into glucose.`,
  answer: false,
  explain: `False. Humans have no cellulase, so cellulose passes through the gut undigested as fibre. Fibre matters for gut health (it adds bulk and helps the intestine move material along), but it does not lead to increased glucose absorption.` },

{ id: "a021", lesson: "1.03", type: "mcq", kind: "applied", tier: "extra", level: 2,
  q: `If you chew a piece of plain bread for a minute or two, it starts to taste sweet. What is happening?`,
  options: [
    `Salivary amylase is hydrolyzing starch into smaller sugars such as maltose`,
    `Saliva is converting the cellulose in the bread into glucose`,
    `Chewing heats the starch until it denatures into sugar`,
    `Dehydration synthesis is joining glucose units into sucrose`],
  answer: 0,
  explain: `Beyond the slides. Bread is mostly starch, which does not taste sweet because the polymer is too large to trigger sweet receptors. Saliva contains amylase, which hydrolyzes the glycosidic linkages in starch, releasing maltose (glucose + glucose) and other small sugars that do taste sweet. This is hydrolysis (a catabolic reaction), not dehydration synthesis. Denaturation applies to proteins, not starch, and humans cannot digest cellulose.` },

// ---------- 1.04 Lipids ----------
{ id: "a022", lesson: "1.04", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `How many water molecules are released when one glycerol molecule combines with three fatty acids to form a triglyceride?`,
  options: [
    `1`,
    `3`,
    `4`,
    `6`],
  answer: 1,
  explain: `Each fatty acid's carboxyl group (–COOH) reacts with one of glycerol's three hydroxyl (–OH) groups in a condensation reaction (esterification). Each ester bond releases one H<sub>2</sub>O, so three fatty acids release three water molecules. A triglyceride is built from four subunits (glycerol + 3 fatty acids), but it is not a polymer, because it is not a long chain of repeating monomers.` },

{ id: "a023", lesson: "1.04", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Margarine made by partial hydrogenation of vegetable oil can contain trans fatty acids. Why are trans fats solid at room temperature, and why are they a health concern?`,
  options: [
    `H atoms on opposite sides of the C=C keep the chain straight, so it packs like a saturated fat; the body breaks it down poorly`,
    `H atoms on the same side of the C=C put a kink in the chain, and the kinked chains stick inside blood vessels`,
    `Trans fats have no double bonds left, so they are fully saturated and cannot be digested by lipase at all`,
    `Trans fats are polar, so they dissolve in the blood plasma and are converted into extra blood glucose`],
  answer: 0,
  explain: `In a trans double bond the hydrogens are on opposite sides, so the chain stays nearly straight even though it is unsaturated. Straight chains pack tightly, so trans fats behave like saturated fats and are solid or semi-solid at room temperature. Because they are mostly made industrially, the body lacks efficient enzymes to break them down, and they are linked to cardiovascular disease. Hydrogens on the <em>same</em> side describes cis, which creates the kink found in liquid oils.` },

{ id: "a024", lesson: "1.04", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Fish living in near-freezing Arctic water have a higher proportion of unsaturated fatty acids in their cell membranes than fish living in warm tropical water. What is the advantage?`,
  options: [
    `Unsaturated fatty acids store more energy, so the fish can survive long winters without food`,
    `Unsaturated tails are straighter, so they pack tightly and make the membrane stronger in cold water`,
    `Unsaturated fatty acids are polar, so they attract water and stop the membrane from drying out`,
    `The kinks from cis double bonds keep the tails from packing tightly, so the membrane stays fluid instead of becoming rigid`],
  answer: 3,
  explain: `Cold makes phospholipid tails pack closer together, which would make the membrane stiff and brittle. Cis double bonds put kinks in the tails and keep them spaced apart, so the membrane stays fluid enough for its proteins to move and work. Saturated tails are the straight ones that pack tightly, the opposite of what a cold-water fish needs. Form matches function: the structure of the fatty acid fits the organism's environment.` },

{ id: "a025", lesson: "1.04", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `At 22 °C, fat A is solid and fat B is liquid. Both are triglycerides with fatty acids of similar length. Which statement is most likely true?`,
  options: [
    `Fat A has mostly kinked cis-unsaturated chains, and fat B has mostly straight saturated chains`,
    `Fat A contains more glycerol molecules per fatty acid than fat B`,
    `Fat A has mostly straight saturated chains that pack tightly, and fat B has mostly kinked cis-unsaturated chains`,
    `Fat B is liquid because its fatty acids are polar and attract each other less`],
  answer: 2,
  explain: `Straight, saturated chains (all C–C single bonds) stack closely, so the attractions between molecules are strong and the fat is solid at room temperature (butter, animal fat). Cis double bonds create kinks that stop the chains packing, so the fat stays liquid (plant oils). Every triglyceride has one glycerol and three fatty acids, and both fats are nonpolar.` },

{ id: "a026", lesson: "1.04", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `A fatty acid with a long hydrocarbon chain (18 carbons) is more soluble in water than one with a short chain (4 carbons), because the longer chain has more bonds that can interact with water.`,
  answer: false,
  explain: `False. The only polar part of a fatty acid is its carboxyl group at one end. Adding carbons adds nonpolar C–C and C–H bonds, so the nonpolar portion dominates more and more. Longer chains are less polar overall and much less soluble in water than short chains.` },

{ id: "a027", lesson: "1.04", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Before migrating thousands of kilometres, many birds build up large fat stores rather than storing extra glycogen. What is the main advantage?`,
  options: [
    `Fat dissolves easily in the blood, so it reaches the flight muscles faster than glucose`,
    `Fat is a polymer, so it can be broken down one monomer at a time during the flight`,
    `Fat holds over twice the energy per gram of carbohydrate, so the bird carries less weight`,
    `Fat can be broken down for energy without any enzymes, which saves the bird energy`],
  answer: 2,
  explain: `Lipids hold about 9 kcal/g compared with about 4 kcal/g for carbohydrates, so fat is the best long-term energy store when weight matters, as it does for a flying animal. Fats are nonpolar and do not dissolve in blood (they are carried by proteins), they are not polymers, and breaking them down still requires enzymes (lipases).` },

{ id: "a028", lesson: "1.04", type: "tf", kind: "applied", tier: "extra", level: 3,
  q: `Bile acids (steroids made from cholesterol) help you digest fat by breaking large fat droplets into many tiny droplets, which gives the enzyme lipase much more surface area to work on.`,
  answer: true,
  explain: `True. Beyond the slides (bile acids are on the slides only as a type of steroid). They have a nonpolar side that sticks into fat and a polar side that faces water, so they break big fat globules into small ones (emulsification). This does not chemically digest the fat; it exposes far more surface for lipase, which hydrolyzes triglycerides into glycerol and fatty acids.` },

// ---------- 1.05 Nucleic Acids ----------
{ id: "a029", lesson: "1.05", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A sample of double-stranded DNA is 22% guanine. What percentage of its bases are adenine?`,
  options: [
    `22%`,
    `56%`,
    `78%`,
    `28%`],
  answer: 3,
  explain: `By Chargaff's rule, G pairs with C, so C = 22% and G + C = 44%. The rest, 100 − 44 = 56%, is A + T. A pairs with T, so they are equal: 56 ÷ 2 = 28% adenine. Stopping at 56% (the combined A + T) is the most common error.` },

{ id: "a030", lesson: "1.05", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A sample of double-stranded DNA is 30% thymine. What percentage of its bases are purines?`,
  options: [
    `30%`,
    `50%`,
    `60%`,
    `70%`],
  answer: 1,
  explain: `Purines (A and G, double rings) always pair with pyrimidines (T and C, single rings), so in double-stranded DNA purines always make up exactly 50%, whatever the sample. Check: T = 30% so A = 30%; G + C = 40%, so G = 20%. Purines = A + G = 30 + 20 = 50%. This 1:1 purine-to-pyrimidine pairing keeps the width of the double helix constant.` },

{ id: "a031", lesson: "1.05", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `One strand of a DNA segment reads 5′-ATGCCTAG-3′. Which is its complementary strand, written in the correct orientation?`,
  options: [
    `3′-TACGGATC-5′`,
    `5′-TACGGATC-3′`,
    `3′-UACGGAUC-5′`,
    `3′-ATGCCTAG-5′`],
  answer: 0,
  explain: `Pair each base by Chargaff's rule (A–T, G–C): A→T, T→A, G→C, C→G, giving TACGGATC. The strands are antiparallel, so the new strand runs the opposite way: lined up under the 5′ end of the original, it starts with its 3′ end. The second option has the right letters but runs in the same direction as the original (parallel), which is a different molecule. U only appears in RNA, and the last option just repeats the original letters.` },

{ id: "a032", lesson: "1.05", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Two DNA molecules have the same length. Molecule X is 60% G + C; molecule Y is 30% G + C. When both are heated, which one needs the higher temperature to separate its two strands, and why?`,
  options: [
    `X, because G–C pairs are held by three hydrogen bonds while A–T pairs have only two`,
    `Y, because A–T pairs are held by three hydrogen bonds while G–C pairs have only two`,
    `X, because G–C pairs are joined by covalent phosphodiester bonds across the helix`,
    `Both separate at the same temperature, because they have the same number of base pairs`],
  answer: 0,
  explain: `The two strands are held together by hydrogen bonds between paired bases: A–T forms 2 and G–C forms 3. A molecule with more G–C pairs has more hydrogen bonds in total, so more heat energy is needed to pull its strands apart. Phosphodiester bonds link nucleotides along each strand's backbone, not across the helix. The same length does not mean the same number of hydrogen bonds.` },

{ id: "a033", lesson: "1.05", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `In a single-stranded RNA molecule, the amount of adenine must equal the amount of uracil.`,
  answer: false,
  explain: `False. Chargaff's equal ratios (A = T, G = C) come from base pairing between two strands. Most RNA is single-stranded, so its bases do not all have partners, and the amounts of A and U can differ. Only double-stranded DNA must follow the 1:1 ratios.` },

{ id: "a034", lesson: "1.05", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `Cytosine can spontaneously lose its amine group (deamination), which turns it into uracil. Why does DNA's use of thymine instead of uracil make it a more reliable store of genetic information?`,
  options: [
    `Thymine forms three hydrogen bonds with adenine, so the strands are harder to separate`,
    `DNA should never contain U, so repair enzymes can treat any U as damage (a changed C) and fix it`,
    `Thymine is attached to ribose, which is a more stable sugar than the deoxyribose in DNA`,
    `Uracil is a double-ringed purine, so it would make the double helix too wide to fit`],
  answer: 1,
  explain: `If DNA normally contained U, repair enzymes could not tell a "real" U from a damaged C that had turned into U, so these errors would become permanent mutations. Because DNA uses thymine (essentially uracil with an extra methyl group), any U found in DNA must be a mistake and can be repaired. Natural selection favoured this higher-accuracy storage as DNA took over from RNA. A–T pairs form 2 hydrogen bonds (not 3), uracil is a single-ring pyrimidine, and the sugar belongs to the nucleotide, not the base.` },

{ id: "a035", lesson: "1.05", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A nucleotide is described as having a five-carbon sugar with an –OH group on carbon 2′ and a single-ring nitrogenous base that is not cytosine. What is it?`,
  options: [
    `A DNA nucleotide containing thymine`,
    `An RNA nucleotide containing adenine`,
    `A DNA nucleotide containing guanine`,
    `An RNA nucleotide containing uracil`],
  answer: 3,
  explain: `An –OH on carbon 2′ means the sugar is ribose, so this is an RNA nucleotide (deoxyribose lacks that oxygen). A single ring means a pyrimidine: C, T or U. RNA does not contain thymine, and the base is not cytosine, so it must be uracil. Adenine and guanine are purines with double rings.` },

// ---------- 1.06 Proteins ----------
{ id: "a036", lesson: "1.06", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `In sickle-cell disease, one amino acid in hemoglobin's β chains is changed: glutamic acid (charged, polar R group) is replaced by valine (nonpolar R group). Why can one change in the primary structure affect the whole protein?`,
  options: [
    `The new amino acid breaks the peptide bonds on either side of it, so the chain falls apart into short fragments`,
    `Valine cannot form peptide bonds with its neighbours, so the chain stops growing at that point and is too short`,
    `The new R group interacts differently, changing the folded shape; the nonpolar patch makes hemoglobin molecules clump into fibres`,
    `Only the primary structure changes; the protein's 3D shape and its ability to carry oxygen stay exactly the same`],
  answer: 2,
  explain: `The primary structure (amino acid sequence) determines how the chain folds, because folding depends on interactions between R groups (hydrogen bonds, attractions between charges, hydrophobic interactions). Swapping a charged, water-loving R group on the protein's surface for a nonpolar one creates a sticky hydrophobic patch, so hemoglobin molecules clump into fibres that bend red blood cells into a sickle shape. Every amino acid forms ordinary peptide bonds, so the backbone is unchanged. Shape determines function: change the shape and you change the function.` },

{ id: "a037", lesson: "1.06", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A child's fever rises to 42 °C. Why is a fever this high dangerous?`,
  options: [
    `The heat breaks the peptide bonds in proteins, turning them back into free amino acids`,
    `High temperature makes enzymes work so fast that they quickly use up all their substrate`,
    `The heat converts body proteins into fats, which cannot do the jobs the proteins did`,
    `Heat disrupts the hydrogen bonds holding proteins in shape, so enzymes denature and stop working`],
  answer: 3,
  explain: `A protein's function depends on its 3D shape, which is held by relatively weak interactions (hydrogen bonds and other attractions between R groups). Above about 40 °C, the extra heat energy disrupts these interactions and proteins begin to denature, losing their shape and function, including enzymes needed for vital reactions. Denaturation does not usually break the peptide bonds of the primary structure.` },

{ id: "a038", lesson: "1.06", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `When an egg white is cooked and turns white and solid, it is because the heat breaks the peptide bonds that hold its amino acids together.`,
  answer: false,
  explain: `False. Cooking denatures the egg-white proteins: heat disrupts the hydrogen bonds and other interactions that maintain their secondary and tertiary structure, so the chains unfold and tangle together into a white solid. The peptide bonds of the primary structure usually stay intact. This denaturation is permanent, which is why you cannot "uncook" an egg.` },

{ id: "a039", lesson: "1.06", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `An enzyme is dissolved in the watery cytosol. Where in its folded structure would you most likely find amino acids with nonpolar R groups, such as valine and leucine?`,
  options: [
    `On the outer surface, where they can form hydrogen bonds with water`,
    `Spread evenly over the surface and the interior`,
    `Buried in the interior of the protein, away from the water`,
    `Only at the two ends of the chain (the N- and C-terminus)`],
  answer: 2,
  explain: `As the polypeptide folds (tertiary structure), nonpolar R groups are pushed away from the surrounding water and cluster together in the core, while polar and charged R groups face outward where they can interact with water. That is why the protein stays soluble. Nonpolar R groups cannot hydrogen bond with water, and where they end up depends on folding, not on their position in the chain.` },

{ id: "a040", lesson: "1.06", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Which amino acid would be the most soluble in water?`,
  options: [
    `Serine (small R group with an –OH)`,
    `Phenylalanine (large R group with a carbon ring)`,
    `Leucine (branched hydrocarbon R group)`,
    `Tryptophan (large R group with two fused rings)`],
  answer: 0,
  explain: `Every amino acid has a polar amino group and a polar carboxyl group, so the R group makes the difference. Serine's R group is small and has a polar –OH that can hydrogen bond with water. The other three have large R groups made mostly of carbon and hydrogen, which lower solubility. The rule from class: the smaller and more polar the R group, the more soluble the amino acid (and the peptides it forms).` },

{ id: "a041", lesson: "1.06", type: "tf", kind: "applied", tier: "likely", level: 2,
  q: `Cooking meat makes it more tender partly because heat denatures its proteins, an example of denaturation being useful rather than harmful.`,
  answer: true,
  explain: `True. Denaturation can be dangerous (a very high fever) or useful. Heat unravels the proteins in meat and changes its texture, and unfolded proteins are also easier for digestive enzymes to reach. The same idea is used when food is cooked or pasteurized to denature the enzymes of microbes.` },

{ id: "a042", lesson: "1.06", type: "mcq", kind: "applied", tier: "extra", level: 3,
  q: `A hair perm uses one chemical to break bonds between cysteine R groups in the protein keratin, then another to re-form those bonds while the hair is wrapped around a curler. Which functional group on cysteine forms these bonds?`,
  options: [
    `Hydroxyl (–OH), forming strong hydrogen bonds`,
    `Sulfhydryl (–SH), forming covalent disulfide bridges`,
    `Amino (–NH<sub>2</sub>), forming new peptide bonds`,
    `Carboxyl (–COOH), forming covalent ester bonds`],
  answer: 1,
  explain: `Beyond the slides. Cysteine's R group carries a sulfhydryl group. Two –SH groups on different parts of a chain (or on different chains) can join as a covalent S–S "disulfide bridge," which locks part of the protein's 3D structure in place. A perm breaks these bridges, lets the keratin take the curler's shape, then re-forms them in new positions, so the curl survives washing. Peptide bonds join the backbone, not the R groups.` },

// ---------- 1.07 Enzymes ----------
{ id: "a043", lesson: "1.07", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A student makes two cups of gelatin (a protein). Cup 1 gets fresh pineapple juice; cup 2 gets pineapple juice that was boiled for 5 minutes and then cooled. After a few hours in the fridge, what will most likely happen?`,
  options: [
    `Both cups set, because enzymes stop working in the cold`,
    `Neither cup sets, because pineapple protease works at any temperature`,
    `Only cup 2 sets, because boiling denatured the protease that would have digested the gelatin`,
    `Only cup 1 sets, because fresh juice has more sugar to help the gelatin solidify`],
  answer: 2,
  explain: `Fresh pineapple contains a protease, an enzyme that hydrolyzes proteins such as gelatin, so the gelatin network never forms and cup 1 stays liquid. Boiling denatures the protease (it is a protein too), destroying its active site, so cup 2 sets normally. Cold slows enzymes but does not stop them, and the protease is already at work while the gelatin is warm and liquid.` },

{ id: "a044", lesson: "1.07", type: "mcq", kind: "applied", tier: "essential", level: 3,
  q: `The rate of an enzyme reaction rises as substrate concentration increases, then levels off. Once the graph has levelled off, which change would increase the reaction rate further?`,
  options: [
    `Adding more substrate`,
    `Adding more enzyme`,
    `Adding a competitive inhibitor`,
    `Lowering the temperature from 37 °C to 20 °C`],
  answer: 1,
  explain: `At first, more substrate means more collisions with free active sites, so the rate rises. On the plateau, every active site is already occupied (the enzyme is saturated), so extra substrate has nowhere to bind: the amount of enzyme is now the limiting factor. Adding enzyme provides more active sites and raises the rate. A competitive inhibitor would block active sites, and cooling below the optimum slows the reaction.` },

{ id: "a045", lesson: "1.07", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Students measured an enzyme's activity (mL of product per minute) at six temperatures. 10 °C: 2; 20 °C: 5; 30 °C: 9; 40 °C: 12; 50 °C: 4; 60 °C: 0. Which conclusion is best supported by the data?`,
  options: [
    `The optimum is near 40 °C; above it the enzyme denatures, so activity falls sharply and stops by 60 °C`,
    `The optimum is 60 °C, because that is the highest temperature tested`,
    `Activity increases steadily with temperature, so the enzyme would work fastest at 80 °C`,
    `The enzyme must come from a hot-spring organism, because it still works at 50 °C`],
  answer: 0,
  explain: `From 10 to 40 °C the rate rises because molecules move faster and collide with the active site more often. The peak at 40 °C is at or near the optimum. Beyond that, heat disrupts the bonds holding the enzyme's 3D shape, the active site changes, and activity drops to zero by 60 °C (denaturation). This matches a typical human-type enzyme (optimum about 37 °C); an enzyme from a heat-tolerant organism would peak far higher, around 76 °C. Because the true optimum could be anywhere from about 35 to 45 °C, testing more temperatures in that range would pin it down.` },

{ id: "a046", lesson: "1.07", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Pepsin, a protein-digesting enzyme, works in the stomach at about pH 2. When stomach contents move into the small intestine (about pH 8), pepsin's activity drops almost to zero. What is the best explanation?`,
  options: [
    `Pepsin is used up while digesting proteins in the stomach, so none is left to act`,
    `The higher pH breaks pepsin's peptide bonds, cutting the enzyme into free amino acids`,
    `At pH 8 there is far too much substrate, so pepsin becomes saturated and stops`,
    `The pH change alters the charges on pepsin's R groups, changing the shape of its active site`],
  answer: 3,
  explain: `Each enzyme has an optimal pH. pH sets how many H<sup>+</sup> ions are around, which changes the charges on acidic and basic R groups. Those charges help hold the enzyme's 3D shape and its active site, so far from the optimum the enzyme loses activity or denatures. Enzymes are not used up by reactions, and saturation would hold the rate at its maximum, not drop it to zero. This is why the small intestine relies on its own enzymes that work best near pH 8.` },

{ id: "a047", lesson: "1.07", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A new drug slows an enzyme. When researchers greatly increase the substrate concentration, the reaction rate returns almost to normal. What kind of inhibitor is the drug most likely to be?`,
  options: [
    `A competitive inhibitor that binds the active site`,
    `A non-competitive inhibitor that binds an allosteric site`,
    `An allosteric activator`,
    `A cofactor that has been removed from the enzyme`],
  answer: 0,
  explain: `A competitive inhibitor resembles the substrate and competes with it for the active site. When substrate molecules vastly outnumber the inhibitor, the substrate wins most of the collisions, so the rate recovers. A non-competitive (allosteric) inhibitor binds elsewhere and changes the active site's shape, so adding more substrate cannot overcome it (cyanide, mentioned in class, works this way on an enzyme of cellular respiration). An activator would speed the reaction up, not slow it.` },

{ id: "a048", lesson: "1.07", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A cell makes amino acid D through the pathway A → B → C → D, with a different enzyme for each step. When D builds up, it binds an allosteric site on the enzyme that converts A to B. What is the result?`,
  options: [
    `The first enzyme speeds up, so the cell makes even more D than it did before`,
    `D binds the active site of the last enzyme and is converted back into C`,
    `The first enzyme is permanently destroyed, so the cell can never make D again`,
    `The first enzyme's active site changes shape, so the pathway slows until D falls again`],
  answer: 3,
  explain: `This is feedback inhibition, a form of negative feedback. The end product acts as an allosteric (non-competitive) inhibitor of the first enzyme, so the cell stops wasting resources making D it does not need. Allosteric binding is reversible: when D is used up, it leaves the allosteric site and the enzyme becomes active again. Blocking the first step is efficient because it also stops B and C from piling up.` },

{ id: "a049", lesson: "1.07", type: "tf", kind: "applied", tier: "essential", level: 2,
  q: `Because an enzyme takes part in the reaction it speeds up, it is used up, so a cell must make a new enzyme molecule for every substrate molecule it breaks down.`,
  answer: false,
  explain: `False. An enzyme is a catalyst: it speeds up a reaction without being consumed. After the products leave the active site, the enzyme returns to its original shape and can bind another substrate molecule again and again, which is why a small amount of enzyme can process a huge amount of substrate.` },

{ id: "a050", lesson: "1.07", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `When substrate is present in excess, doubling the enzyme concentration roughly doubles the initial reaction rate.`,
  answer: true,
  explain: `True. With plenty of substrate, the number of active sites limits the rate, so twice as many enzyme molecules make about twice as much product per second: the rate rises in proportion to enzyme concentration. In a real cell this increase is capped by the substrate available and by the energy cost of making more enzyme.` },

{ id: "a051", lesson: "1.07", type: "mcq", kind: "applied", tier: "extra", level: 4,
  q: `Methanol (found in some badly made homemade alcohol) is converted by the liver enzyme alcohol dehydrogenase into toxic formaldehyde. One emergency treatment is to give the patient ethanol, which binds the same active site. How does this help?`,
  options: [
    `Ethanol denatures alcohol dehydrogenase, so no reaction happens at all and no formaldehyde forms`,
    `Ethanol binds an allosteric site and activates the enzyme, so the methanol is cleared faster`,
    `As a competitive inhibitor, ethanol fills most active sites, so methanol is converted slowly and excreted unchanged`,
    `Ethanol reacts directly with the formaldehyde and converts it back into harmless methanol`],
  answer: 2,
  explain: `Beyond the slides. Ethanol and methanol compete for the same active site. Flooding the enzyme with ethanol means most binding events involve ethanol, so the toxic product (formaldehyde) forms only slowly, and the body has time to get rid of the methanol unchanged. This is competitive inhibition used as medicine, one of the ways enzyme activity is regulated by medications. Binding the active site defines competitive inhibition, not allosteric regulation.` },

// ---------- 1.08 Cell Organelles ----------
{ id: "a052", lesson: "1.08", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `In Tay-Sachs disease, lysosomes lack one working enzyme that normally breaks down a particular lipid. Which outcome would you predict?`,
  options: [
    `The lipid is broken down by the Golgi apparatus instead, so there are no symptoms`,
    `The lipid builds up inside lysosomes, especially in nerve cells, which then stop working`,
    `Cells can no longer make any proteins, because lysosomes are where proteins are made`,
    `The lipid leaks out of the cell and dissolves harmlessly in the watery blood plasma`],
  answer: 1,
  explain: `Lysosomes are vesicles of digestive enzymes that break down worn-out cell parts and unwanted molecules. Each enzyme is specific, so if one is missing, its substrate cannot be broken down and accumulates inside the lysosomes. In Tay-Sachs the lipid builds up in the neurons of the brain, causing progressive damage. The Golgi modifies and packages molecules but does not take over digestion; proteins are made by ribosomes; and a lipid would not dissolve in watery blood.` },

{ id: "a053", lesson: "1.08", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `The enzymes inside a lysosome work best at about pH 5. If a single lysosome bursts, its enzymes leak into the cytosol (about pH 7.2). Why does this usually not destroy the cell?`,
  options: [
    `The cytosol contains no proteins, lipids or carbohydrates for the enzymes to digest`,
    `At the cytosol's near-neutral pH, the lysosomal enzymes are far from their optimum and work very slowly`,
    `The enzymes are immediately converted into ATP by the mitochondria`,
    `Lysosomal enzymes only work on material that comes from outside the cell`],
  answer: 1,
  explain: `Each enzyme has an optimal pH. Lysosomal enzymes are suited to the acidic interior of the lysosome (about pH 5). At the cytosol's near-neutral pH their active sites work poorly, so a small leak does little damage: a built-in safety feature against self-digestion. The cytosol is full of macromolecules that could be digested, and lysosomes digest material from inside the cell (old organelles) as well as from outside (engulfed particles).` },

{ id: "a054", lesson: "1.08", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A mutation causes cells throughout the body to have very few mitochondria. Which organs would be affected most severely?`,
  options: [
    `Fat storage tissue and red blood cells, because they store the most energy`,
    `Skin and hair, because they are on the outside of the body`,
    `The heart, brain and skeletal muscles, because they constantly need large amounts of ATP`,
    `No organs, because cells can make all the ATP they need without mitochondria`],
  answer: 2,
  explain: `Mitochondria produce most of a cell's ATP through cellular respiration. The tissues with the highest, most constant energy demand would face an energy crisis first: heart muscle (pumps nonstop), neurons (constant signaling and active transport of ions) and skeletal muscle (contraction). Fat cells and red blood cells have few mitochondria to begin with (mature red blood cells have none), so they depend on them least. Without mitochondria, cells can make only a small amount of ATP.` },

{ id: "a055", lesson: "1.08", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A person takes a sedative drug every day for months, and their liver cells adapt so they can break the drug down faster. Which organelle would you expect to increase in amount in those liver cells?`,
  options: [
    `Rough endoplasmic reticulum`,
    `Nucleolus`,
    `Chloroplasts`,
    `Smooth endoplasmic reticulum`],
  answer: 3,
  explain: `Smooth ER makes lipids (phospholipids and steroids) and contains enzymes that detoxify drugs and poisons, which is why liver cells, the body's detox centre, are rich in it. Repeated exposure to a drug makes the smooth ER and its detox enzymes expand, one reason people develop tolerance and need larger doses. Rough ER makes proteins for export or for membranes, the nucleolus assembles ribosome subunits, and animal cells have no chloroplasts.` },

{ id: "a056", lesson: "1.08", type: "mcq", kind: "applied", tier: "essential", level: 3,
  q: `A pancreatic cell is given radioactive amino acids, and scientists track where the radioactive label appears over time as the cell makes and secretes a digestive enzyme. In what order will the label appear?`,
  options: [
    `Ribosomes → rough ER → Golgi apparatus → secretory vesicles → outside the cell`,
    `Golgi apparatus → rough ER → lysosomes → secretory vesicles → outside the cell`,
    `Nucleus → free ribosomes → smooth ER → mitochondria → outside the cell`,
    `Secretory vesicles → Golgi apparatus → rough ER → ribosomes → nucleus`],
  answer: 0,
  explain: `The amino acids are first linked into a polypeptide by ribosomes attached to the rough ER, and the chain enters the rough ER to fold. Transport vesicles carry it to the Golgi apparatus, which modifies, sorts and packages it. Secretory vesicles then fuse with the cell membrane and release the enzyme by exocytosis. The nucleus holds the DNA instructions but never handles the amino acids, and lysosomes digest material rather than secrete it.` },

{ id: "a057", lesson: "1.08", type: "tf", kind: "applied", tier: "essential", level: 2,
  q: `White blood cells that engulf and destroy bacteria would be expected to contain large numbers of lysosomes.`,
  answer: true,
  explain: `True. A white blood cell engulfs a bacterium by phagocytosis, enclosing it in a vesicle. Lysosomes fuse with that vesicle, and their digestive enzymes break the bacterium down. Cells whose job involves digesting foreign or waste material, such as white blood cells and liver cells, have a high concentration of lysosomes.` },

{ id: "a058", lesson: "1.08", type: "mcq", kind: "applied", tier: "extra", level: 3,
  q: `Mitochondria and chloroplasts each have a double membrane, their own circular DNA and their own ribosomes, and they divide on their own inside the cell. What do these features suggest?`,
  options: [
    `They are made by the Golgi apparatus, like other vesicles, and later fill with DNA`,
    `They are pieces of the nucleus that broke off and kept some of the cell's DNA`,
    `They are the only organelles that can make proteins, so they need their own DNA`,
    `They descend from free-living bacteria that were engulfed by an ancestral cell (endosymbiosis)`],
  answer: 3,
  explain: `Beyond the slides. These features match bacteria: circular DNA, small bacteria-like ribosomes, and division by splitting in two. The inner membrane is thought to be the original bacterial membrane, and the outer one came from the host cell that engulfed it. This is the endosymbiotic theory (in class, chloroplasts were noted to resemble photosynthetic bacteria). Most of the cell's proteins are still made on its own ribosomes in the cytosol and on the rough ER.` },

{ id: "a059", lesson: "1.08", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A microscopist measures the percentage of cell volume taken up by three organelles in two cell types. Cell X: mitochondria 30%, rough ER 2%, Golgi 1%. Cell Y: mitochondria 5%, rough ER 20%, Golgi 8%. Which pair of identities fits best?`,
  options: [
    `X is a muscle cell; Y is an antibody-secreting plasma B cell`,
    `X is a fat storage cell; Y is a red blood cell`,
    `X is an antibody-secreting plasma B cell; Y is a muscle cell`,
    `X is a red blood cell; Y is a liver cell detoxifying drugs`],
  answer: 0,
  explain: `Structure reflects function. Cell X is packed with mitochondria, matching a muscle cell's huge ATP demand for contraction. Cell Y has a large amount of rough ER and Golgi, the machinery for making and packaging proteins for export, which matches a plasma B cell secreting antibodies (pancreatic cells would show the same pattern). Fat cells and red blood cells have few mitochondria, and a detoxifying liver cell would stand out for its smooth ER.` },

// ---------- 1.09 Cell Membrane ----------
{ id: "a060", lesson: "1.09", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `When phospholipids are shaken in water, they spontaneously arrange into a double layer (bilayer). Why?`,
  options: [
    `The phosphate heads are hydrophobic, so they hide inside the bilayer away from the water`,
    `The hydrophobic tails turn inward, away from water, while the hydrophilic heads face the water on both sides`,
    `Covalent bonds form between the tails of neighbouring phospholipids`,
    `The fatty acid tails are polar and hydrogen bond with each other in the middle`],
  answer: 1,
  explain: `A phospholipid is amphipathic: a polar, charged phosphate head (hydrophilic) and two nonpolar fatty acid tails (hydrophobic). In water, the most stable arrangement hides the tails from water by turning them toward each other, with the heads facing the watery fluid outside the cell (extracellular fluid) and inside it (cytosol). No covalent bonds form between the tails; the layer is held together by these water-loving and water-fearing interactions, which is why it stays fluid.` },

{ id: "a061", lesson: "1.09", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Two artificial membranes are cooled to 5 °C. Membrane P has cholesterol between its phospholipids; membrane Q is identical but has no cholesterol. Which prediction is best?`,
  options: [
    `Q stays more fluid, because cholesterol is a solid that freezes first in the cold`,
    `Both become equally rigid, because cholesterol only matters at high temperatures`,
    `P stays more fluid, because cholesterol between the tails stops them packing tightly`,
    `P becomes more rigid, because cholesterol always decreases membrane fluidity`],
  answer: 2,
  explain: `Cholesterol is a fluidity buffer. At low temperatures, phospholipid tails tend to pack tightly and the membrane would freeze into a rigid gel; cholesterol gets in the way of that tight packing and keeps the membrane fluid. At high temperatures it does the opposite, restraining phospholipid movement so the membrane does not become too fluid. "Cholesterol always decreases fluidity" is only half the story.` },

{ id: "a062", lesson: "1.09", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Adrenaline is a polar, water-soluble hormone that cannot cross the membrane's hydrophobic interior, yet it quickly changes what happens inside a heart muscle cell. How?`,
  options: [
    `It binds a surface receptor protein, which triggers a response inside the cell (signal transduction)`,
    `It dissolves through the phospholipid tails by simple diffusion, as oxygen does`,
    `It is carried across by the cholesterol molecules wedged between the phospholipids`,
    `It binds a glycolipid on the surface, which then carries it into the nucleus`],
  answer: 0,
  explain: `Polar and charged molecules cannot pass through the nonpolar middle of the bilayer. Instead, the hormone binds a specific receptor protein on the cell surface; binding changes the receptor's shape, which passes the signal inside without the hormone ever entering. This membrane function is called signal transduction. Simple diffusion through the bilayer only works for small, nonpolar (lipid-soluble) molecules such as O<sub>2</sub> and CO<sub>2</sub>.` },

{ id: "a063", lesson: "1.09", type: "tf", kind: "applied", tier: "likely", level: 2,
  q: `Organ transplant rejection happens partly because glycoproteins on the donor's cells act as "ID tags" that the recipient's immune system recognizes as foreign.`,
  answer: true,
  explain: `True. Carbohydrate chains attached to membrane proteins (glycoproteins) and lipids (glycolipids) on the outside of the cell act as cell-surface identification markers. The immune system uses them to tell "self" from "non-self," so cells with unfamiliar markers are attacked. This is why donors and recipients are matched as closely as possible, and why recipients take drugs that suppress the immune system.` },

{ id: "a064", lesson: "1.09", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `A peripheral membrane protein, found only on the inner surface of the membrane, could act as a channel that lets ions cross from one side of the membrane to the other.`,
  answer: false,
  explain: `False. To form a channel, a protein must span the whole bilayer, which makes it an integral protein. Peripheral proteins sit on only one surface (inside or outside) and do not cross the hydrophobic middle, so they cannot provide a pathway through it. They do jobs such as anchoring the membrane to the cytoskeleton or acting as enzymes at the surface.` },

{ id: "a065", lesson: "1.09", type: "mcq", kind: "applied", tier: "extra", level: 3,
  q: `Hand sanitizer (about 70% alcohol) and soap both kill many bacteria by damaging their cell membranes. Which explanation fits what you know about membrane structure?`,
  options: [
    `They add extra cholesterol to the membrane, making it far too rigid for its proteins to work`,
    `They pump water into the bacteria by active transport until the cells swell and burst`,
    `They disrupt the phospholipid bilayer, which is held together only by weak interactions, so it falls apart`,
    `They convert the membrane phospholipids into glycogen, which then dissolves in water`],
  answer: 2,
  explain: `Beyond the slides. The bilayer is held together by hydrophobic and hydrophilic interactions, not covalent bonds, so substances attracted to both water and lipids can pull it apart. A soap molecule has a polar head and a long nonpolar tail; the tails slip into the bilayer and lift lipids out into the water. Alcohol dissolves lipids and denatures proteins. Once the membrane barrier fails, the cell's contents leak out and it dies.` },

// ---------- 1.10 Cellular Transport ----------
{ id: "a066", lesson: "1.10", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A drop of blood is added to a test tube of distilled water. Under the microscope a few minutes later, what will be happening to the red blood cells, and why?`,
  options: [
    `They shrivel (crenation), because water leaves the cells into the hypertonic distilled water`,
    `Nothing changes, because distilled water is isotonic to the cells`,
    `They shrink, because solutes rush out of the cells by active transport`,
    `They swell and burst (lysis), because distilled water is hypotonic, so water enters the cells by osmosis`],
  answer: 3,
  explain: `Distilled water has no dissolved solutes, so it is hypotonic compared with the cytoplasm. Water moves by osmosis from the area of higher water concentration (outside) to lower water concentration (inside), and animal cells have no cell wall to resist the swelling, so they burst. Crenation (shrivelling) happens in a hypertonic solution, such as very salty water.` },

{ id: "a067", lesson: "1.10", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Patients who need fluids are given an IV drip of 0.9% salt solution (normal saline) rather than pure water. Why?`,
  options: [
    `The dissolved salt provides the energy that the patient's cells need to recover`,
    `It is isotonic to blood cells, so there is no net water movement and the cells keep their shape`,
    `It is hypertonic to blood cells, so it pulls excess water out of the swollen cells`,
    `Pure water cannot cross cell membranes, so it would just stay in the blood plasma`],
  answer: 1,
  explain: `An isotonic solution has the same solute concentration as the cells' cytoplasm, so water moves in and out at equal rates (no net movement) and red blood cells neither swell nor shrink. Pure water would be hypotonic: water would flood into the blood cells and could burst them (lysis). Salt is not an energy source, and water crosses membranes easily (through the bilayer and through aquaporin channels).` },

{ id: "a068", lesson: "1.10", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `In spring, grass and shrubs growing right beside a heavily salted highway often wilt and die, even after rain. What is the best explanation?`,
  options: [
    `Salt ions enter the root cells by active transport, and the cells swell and burst`,
    `The salt makes the soil water hypotonic, so the root cells swell until their walls break`,
    `The salty soil water is hypertonic, so water leaves the root cells by osmosis and they lose turgor`,
    `The salt blocks the chloroplasts in the leaves, so the plants cannot photosynthesize`],
  answer: 2,
  explain: `Dissolved salt raises the solute concentration of the soil water above that of the root cells' cytoplasm, so the soil solution is hypertonic. Water moves out of the cells by osmosis (from higher to lower water concentration), the central vacuoles shrink, and the cells lose the turgor pressure that keeps the plant firm, so it wilts. The same idea explains why too much fertilizer can "burn" plants.` },

{ id: "a069", lesson: "1.10", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `Potato cores were soaked in sucrose solutions for an hour and their percentage change in mass recorded. 0.0 M: +12%; 0.2 M: +5%; 0.4 M: −2%; 0.6 M: −9%; 0.8 M: −15%. About what sucrose concentration is isotonic to the potato cells?`,
  options: [
    `About 0.35 M`,
    `0.0 M`,
    `About 0.6 M`,
    `0.8 M`],
  answer: 0,
  explain: `At the isotonic concentration there is no net water movement, so the mass change is 0%. The change goes from positive at 0.2 M (+5%: cells gained water, solution hypotonic) to negative at 0.4 M (−2%: cells lost water, solution hypertonic), so zero is crossed between them, closer to 0.4 M because −2 is nearer zero than +5. On a graph of % mass change against concentration, this is where the line crosses the x-axis (about 0.34 M). The biggest gain (0.0 M) marks the most hypotonic solution, not the isotonic one. Using % change instead of grams lets you compare cores that started at different masses.` },

{ id: "a070", lesson: "1.10", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A dialysis-tubing bag filled with 20% sucrose solution is sealed and placed in a beaker of distilled water. The tubing lets water through but not sucrose. What will happen over the next hour?`,
  options: [
    `The bag loses mass, because sucrose diffuses out into the beaker`,
    `The bag gains mass and swells, because water moves into the bag by osmosis`,
    `The bag's mass stays the same, because sucrose cannot cross the tubing`,
    `The bag gains mass, because sucrose molecules from the beaker move into the bag`],
  answer: 1,
  explain: `The bag's contents are hypertonic to the beaker (more solute, lower water concentration). Water moves by osmosis from the higher water concentration (beaker) to the lower water concentration (bag), so the bag gains mass and swells. Sucrose is too large to cross the tubing, and there is no sucrose in the beaker to begin with. Testing the beaker water for sugar afterward would give a negative result, confirming that only water moved.` },

{ id: "a071", lesson: "1.10", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Glucose enters a red blood cell through a specific carrier protein. It moves from where its concentration is high (blood plasma) to where it is low (inside the cell), and no ATP is used. Which type of transport is this?`,
  options: [
    `Simple diffusion`,
    `Active transport`,
    `Pinocytosis`,
    `Facilitated diffusion`],
  answer: 3,
  explain: `Moving down the concentration gradient with no energy input makes it passive transport. Glucose is too large and polar to slip through the hydrophobic bilayer on its own, so it needs a carrier protein that changes shape to let it through: facilitated diffusion. Simple diffusion needs no protein (small nonpolar molecules like O<sub>2</sub>); active transport uses energy to move substances against the gradient; pinocytosis engulfs fluid in a vesicle.` },

{ id: "a072", lesson: "1.10", type: "tf", kind: "applied", tier: "likely", level: 2,
  q: `Cucumbers soaked in very salty brine to make pickles shrink and go limp because the brine is hypertonic to the cucumber cells, so water leaves the cells by osmosis.`,
  answer: true,
  explain: `True. The brine has a much higher solute concentration than the cucumber's cells, so water moves out of the cells by osmosis toward the lower water concentration. The cells lose turgor and the cucumber shrivels. The salty, low-water environment also helps preserve the food, because bacteria lose water to it in the same way.` },

{ id: "a073", lesson: "1.10", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `Once a cell and its surrounding solution are isotonic, water molecules stop crossing the membrane altogether.`,
  answer: false,
  explain: `False. In an isotonic situation water keeps moving in both directions, but at equal rates, so there is no NET movement. This is a dynamic equilibrium; as stressed in class, "no net movement" does not mean "no movement."` },

{ id: "a074", lesson: "1.10", type: "mcq", kind: "applied", tier: "extra", level: 3,
  q: `Model "cells" are made as agar cubes with sides of 1 cm and 3 cm. The 1 cm cube has a surface area of 6 cm² and a volume of 1 cm³ (ratio 6 : 1). What is the 3 cm cube's surface-area-to-volume ratio, and what does it suggest about cell size?`,
  options: [
    `6 : 1; larger cells exchange materials just as efficiently as small ones`,
    `3 : 1; larger cells exchange materials more efficiently because they have more surface`,
    `2 : 1; less membrane per unit of volume, so diffusion cannot supply the interior as well`,
    `9 : 1; larger cells have much more membrane per unit of volume than small ones`],
  answer: 2,
  explain: `Beyond the slides. For the 3 cm cube: surface area = 6 faces × (3 × 3) = 54 cm² and volume = 3 × 3 × 3 = 27 cm³, so SA : V = 54 : 27 = 2 : 1, compared with 6 : 1 for the small cube. As a cell grows, its volume (the demand for nutrients and waste removal) increases faster than its surface area (the membrane available for transport), and materials have farther to diffuse to reach the centre. This is why cells stay small, or become long, thin or folded to increase their surface area.` },

{ id: "a075", lesson: "1.10", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `A plant cell placed in distilled water will swell and burst, just like a red blood cell.`,
  answer: false,
  explain: `False. Water does enter the plant cell by osmosis (distilled water is hypotonic), and the central vacuole swells, pushing the membrane against the cell wall. But the strong cellulose wall resists the pressure, so the cell becomes firm (turgid) instead of bursting. This turgor pressure is what keeps non-woody plants upright. Animal cells have no cell wall, so they lyse.` },

// ---------- 1.11 Visualizing Biological Data ----------
{ id: "a076", lesson: "1.11", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A student counts the average number of mitochondria in four cell types: muscle, liver, skin and fat cells. Which type of graph should be used to display the results?`,
  options: [
    `Bar graph`,
    `Line graph`,
    `Scatter plot`,
    `Pie chart`],
  answer: 0,
  explain: `The cell types are separate, non-continuous categories with no natural order, so a bar graph is used for side-by-side comparisons. A line graph would wrongly suggest a continuous change from muscle to liver to skin, and a scatter plot is for testing a relationship between two numerical variables. A pie chart shows the parts of one whole, but these averages are not parts of a total.` },

{ id: "a077", lesson: "1.11", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `In an enzyme experiment, the volume of oxygen gas produced is measured every 30 seconds for 5 minutes. Which graph best shows the results?`,
  options: [
    `Bar graph, with one bar for each reading`,
    `Pie chart showing the share of gas made in each 30 s interval`,
    `Scatter plot with no line, because the readings are separate measurements`,
    `Line graph, with time on the x-axis and volume of oxygen on the y-axis`],
  answer: 3,
  explain: `The data show continuous change over time, in sequential order, which is exactly what a line graph is for. Time is the independent variable, so it goes on the x-axis, and the volume of gas (the dependent variable) goes on the y-axis. Connecting the points shows the rate (the slope) and where the reaction slows down. A scatter plot is for points that are not in a sequence, such as measurements of many different individuals.` },

{ id: "a078", lesson: "1.11", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A biologist records the body mass and resting heart rate of 40 different mammal species to see whether the two are related. The points fall close to a line that slopes downward. Which statement is correct?`,
  options: [
    `This should be a line graph, and it shows heart rate decreasing over time`,
    `This is a scatter plot showing a strong negative correlation: larger mammals tend to have lower heart rates`,
    `This is a scatter plot showing a positive correlation, because both variables are measured as numbers`,
    `This is a bar graph showing no correlation, because each species is a separate category`],
  answer: 1,
  explain: `Each species is a separate data point, not part of a time sequence, and the goal is to test the relationship between two variables, so a scatter plot is the right choice. A downward trend means one variable increases as the other decreases: a negative correlation. Because the points sit close to the trendline, the relationship is strong; widely spread points would mean a weak one.` },

{ id: "a079", lesson: "1.11", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Students test how pH affects the activity of the enzyme catalase by measuring the volume of oxygen produced in 1 minute at pH 3, 5, 7, 9 and 11. How should the graph's axes be set up?`,
  options: [
    `Volume of oxygen on the x-axis, because it is the variable being measured`,
    `pH on the y-axis, because pH is the variable that changes between trials`,
    `pH on the x-axis (independent); volume of oxygen on the y-axis (dependent)`,
    `Time on the x-axis and volume of oxygen on the y-axis, one line per pH`],
  answer: 2,
  explain: `Graphs are plotted as "y vs. x": the dependent variable (what you measure, here the oxygen volume) goes on the y-axis, and the independent variable (what you deliberately change, here pH) goes on the x-axis. Time was held at 1 minute for every trial, giving one reading per pH rather than a series over time, so time is a controlled variable, not an axis. Temperature and the amount of catalase should also be kept the same.` },

{ id: "a080", lesson: "1.11", type: "tf", kind: "applied", tier: "extra", level: 3,
  q: `A scatter plot shows that students who drink more coffee tend to sleep fewer hours. This proves that drinking coffee causes students to sleep less.`,
  answer: false,
  explain: `False. Beyond the slides. A scatter plot can reveal a correlation (here, a negative one), but correlation does not prove cause and effect. Another factor could cause both: students with heavy homework loads might stay up late and also drink more coffee. To test cause, you would need a controlled experiment that changes only coffee intake.` },

// ---------- Mixed (across lessons) ----------
{ id: "a081", lesson: "mix", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `For the Macromolecule Model Making Assignment, your group builds a chain of α-glucose units joined by α-1,4 linkages (amylose). To turn it into amylopectin, you add one glucose as a branch. How does the new unit attach?`,
  options: [
    `Its carbon 1 bonds through an oxygen to carbon 6 of a glucose in the chain, forming an α-1,6 linkage`,
    `Its carbon 1 bonds to carbon 4 at the end of the chain, forming another α-1,4 linkage`,
    `Its carbon 6 bonds directly to carbon 6 of a chain glucose, with no oxygen between them`,
    `Its carbon 2 bonds to carbon 3 of a chain glucose, forming an α-2,3 linkage`],
  answer: 0,
  explain: `A branch in amylopectin (and glycogen) forms when carbon 1 of a new glucose joins, through an oxygen bridge, to carbon 6 of a glucose already in the chain: an α-1,6 glycosidic linkage. One water molecule is released, as in every dehydration synthesis. Adding at carbon 4 of the end unit would only lengthen the straight chain, and glycosidic linkages always join two carbons through an oxygen atom. On your 2D drawing, number the carbons so the marker can see exactly which ones are linked.` },

{ id: "a082", lesson: "mix", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A food sample is treated with a digestive enzyme. Afterward, the only products found are glycerol and fatty acids, in a 1 : 3 ratio. Which enzyme was used, and what type of reaction did it catalyze?`,
  options: [
    `Amylase; dehydration synthesis`,
    `Protease; hydrolysis`,
    `Lipase; dehydration synthesis`,
    `Lipase; hydrolysis`],
  answer: 3,
  explain: `Glycerol plus three fatty acids are the subunits of a triglyceride (a fat), so the enzyme was a lipase (enzymes are often named after their substrate, with the suffix -ase). Breaking the three ester bonds requires adding three water molecules, so this is hydrolysis, a catabolic reaction. Dehydration synthesis is the reverse: it builds the fat and releases water. Amylase acts on starch and protease on proteins.` },

{ id: "a083", lesson: "mix", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `A poison stops a cell from making ATP. Which of the following transport processes would stop working?`,
  options: [
    `Oxygen diffusing into the cell through the phospholipid bilayer`,
    `A pump moving ions into the cell against their concentration gradient`,
    `Water entering the cell by osmosis`,
    `Glucose entering the cell down its gradient through a carrier protein`],
  answer: 1,
  explain: `Only active transport (and vesicle-based transport such as endocytosis and exocytosis) needs ATP, because it moves substances against their concentration gradient or reshapes the membrane. Simple diffusion of O<sub>2</sub>, osmosis and facilitated diffusion are passive: they are driven by the concentration gradient itself, so they continue toward equilibrium even without ATP. This links enzymes, organelles and transport: a poison such as cyanide blocks an enzyme of cellular respiration in the mitochondria, ATP runs out, and active processes fail.` },

{ id: "a084", lesson: "mix", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `A cell membrane contains three of the four classes of biological macromolecules (lipids, proteins and carbohydrates) but no nucleic acids.`,
  answer: true,
  explain: `True. Lipids form the bilayer (phospholipids, plus cholesterol, a steroid); proteins are embedded in it or attached to it (integral and peripheral proteins); and carbohydrates are attached on the outside as glycoproteins and glycolipids. Nucleic acids (DNA and RNA) are found in places such as the nucleus, cytosol, mitochondria and chloroplasts, but are not part of the membrane's structure. This mix of different molecules is the "mosaic" in the fluid mosaic model.` }

);
