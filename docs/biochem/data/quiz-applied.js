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
    `Cows make extra amylase, which breaks the linkages in cellulose`,
    `Cellulose in grass is made of fructose, which cows can use but humans cannot`,
    `The cow's stomach acid is strong enough to hydrolyze cellulose on its own`,
    `Microbes in the cow's gut make cellulase, which hydrolyzes cellulose into glucose; humans have no cellulase`],
  answer: 3,
  explain: `Cellulose is a polymer of glucose, but its glucose units are joined by a different (beta) linkage than the alpha linkages in starch. Humans make amylase, which only breaks the linkages in starch; no human enzyme can break cellulose. Cows and other herbivores host gut microbes that produce cellulase, releasing glucose the cow can use for cellular respiration. In humans, cellulose passes through as fibre.` },

{ id: "a016", lesson: "1.03", type: "mcq", kind: "applied", tier: "extra", level: 3,
  q: `A person with lactose intolerance makes very little lactase. After drinking a glass of milk, what happens to most of the lactose?`,
  options: [
    `It is absorbed whole into the blood and broken down later in the liver`,
    `It is hydrolyzed by amylase instead, so there are no symptoms`,
    `It is converted into cellulose and stored as fibre`,
    `It is not hydrolyzed into glucose and galactose, so it cannot be absorbed and passes on to the large intestine`],
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
    `Cellulose is made of a nonpolar isomer of glucose`,
    `Cellulose's –OH groups hydrogen bond with neighbouring cellulose chains, locking them into rigid fibres, and the molecule is huge`,
    `Water molecules are too large to fit between the glucose units of cellulose`],
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
    `The H atoms sit on opposite sides of the C=C, so the chain stays straight and packs tightly like a saturated fat; the body breaks them down poorly, which is linked to heart disease`,
    `The H atoms sit on the same side of the C=C, which puts a kink in the chain; the kinked chains clog blood vessels`,
    `Trans fats have no double bonds at all, so they are fully saturated and cannot be digested`,
    `Trans fats are polar, so they dissolve in the blood and raise blood glucose`],
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
    `Fat dissolves in the blood, so it reaches the flight muscles faster than glucose`,
    `Fat is a polymer, so it can be broken down one monomer at a time`,
    `Fat stores more than twice as much energy per gram as carbohydrate, so the bird carries less mass for the same energy`,
    `Fat can be broken down for energy without any enzymes`],
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

// END-OF-QUESTIONS
);
