window.EXT = window.EXT || [];

window.EXT.push(
  {
    id: "xu01",
    lesson: "1.01",
    level: "apply",
    tier: "essential",
    title: "Ice, sweat and a frozen pond",
    prompt: `<p>On a &minus;20 &deg;C January day, a pond has a 30 cm layer of ice on top, yet fish are alive and swimming in the water underneath. The next summer, you go for a run on a hot day and sweat heavily. On a humid day, the same run leaves you much hotter, even though you sweat just as much.</p>
<ol>
<li>Explain why ice floats on liquid water. Refer to hydrogen bonds.</li>
<li>Explain how floating ice, and the way water behaves near 4 &deg;C, let the fish survive the winter.</li>
<li>Explain how sweating cools you, and why it works poorly when the air is humid.</li>
<li>Your body is about 60% water. Explain why your body temperature changes only slowly, even when you move between a hot room and a cold one.</li>
</ol>`,
    hints: [
      "In liquid water, hydrogen bonds constantly break and re-form. What happens to them when water freezes, and how does that change the spacing between molecules?",
      "Density decides what sinks. Which water is densest, and where in the pond does it end up?",
      "Evaporation needs energy to break hydrogen bonds. Where does that energy come from? On a humid day, the air already holds a lot of water vapour."
    ],
    answer: `<p><strong>a.</strong> Each water molecule is polar (&delta;&minus; oxygen, &delta;+ hydrogens), so it forms hydrogen bonds with its neighbours. In liquid water these bonds constantly break and re-form, so molecules can crowd close together. As water freezes below 0 &deg;C, each molecule locks into stable hydrogen bonds with four neighbours, forming a <span class="term">crystalline lattice</span>. The lattice holds the molecules farther apart than in the liquid, so ice is <strong>less dense</strong> than liquid water and floats.</p>
<p><strong>b.</strong> Water is densest at about 4 &deg;C. As the pond cools in the fall, 4 &deg;C water sinks to the bottom. Colder water (below 4 &deg;C) is less dense, stays on top, and freezes there. The ice layer then insulates the water below from the cold air, so the pond freezes from the top down and rarely freezes solid. The fish survive in the liquid water near the bottom, which stays close to 4 &deg;C. If ice sank, ponds would fill with ice from the bottom up, and most aquatic life would freeze.</p>
<p><strong>c.</strong> Water has a high <span class="term">heat of vaporization</span>: to evaporate, a water molecule must break all its hydrogen bonds, which takes a lot of energy. As sweat evaporates, it absorbs that heat from your skin, so your skin cools (<span class="term">evaporative cooling</span>). On a humid day, the air already holds a lot of water vapour, so sweat evaporates much more slowly. It drips off instead, carrying away far less heat.</p>
<p><strong>d.</strong> Water has a high <span class="term">specific heat capacity</span>. When heat is added, much of the energy goes into breaking hydrogen bonds instead of making the molecules move faster, so the temperature rises only a little. Because your body is mostly water, it must absorb or lose a large amount of heat before its temperature changes. This helps you keep a steady 37 &deg;C, which your enzymes need.</p>`,
    marks: 4
  },
  {
    id: "xu02",
    lesson: "1.01",
    level: "analyze",
    tier: "likely",
    title: "How high can water climb? Capillary tubes and xylem",
    prompt: `<p>A class dips clean glass capillary tubes of different widths into a beaker of water and measures how far the water rises above the water level in the beaker. One tube has its inside coated with wax.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Tube (inside diameter)</th><th>Height of water above beaker level (mm)</th></tr></thead><tbody>
<tr><td>2.0 mm glass</td><td>15</td></tr>
<tr><td>1.0 mm glass</td><td>30</td></tr>
<tr><td>0.5 mm glass</td><td>59</td></tr>
<tr><td>0.2 mm glass</td><td>148</td></tr>
<tr><td>0.1 mm glass</td><td>297</td></tr>
<tr><td>0.5 mm glass, wax-coated inside</td><td>&minus;4 (below beaker level)</td></tr>
</tbody></table></div>
<ol>
<li>Describe the relationship between tube diameter and the height the water rises.</li>
<li>Explain why water rises in the glass tubes at all. Use the terms adhesion, cohesion and surface tension.</li>
<li>Explain the result for the wax-coated tube.</li>
<li>Xylem vessels in a tree trunk are about 0.05 mm wide, and their walls are made mostly of cellulose. Use the data to estimate how high capillary action alone could lift water in xylem. A coast redwood can be over 100 m tall. What does this tell you?</li>
</ol>`,
    hints: [
      "Compare the 1.0 mm and 0.5 mm tubes, then the 0.2 mm and 0.1 mm tubes. What happens to the height each time the diameter is halved?",
      "Glass is polar. Wax is a long-chain lipid. Which one can water form hydrogen bonds with?",
      "For d, continue the pattern one more step. Then think about what happens at the leaves that could pull water up from above."
    ],
    answer: `<p><strong>a.</strong> The narrower the tube, the higher the water rises. The relationship is inverse: each time the diameter is halved, the height roughly doubles (1.0 mm &rarr; 30 mm, 0.5 mm &rarr; 59 mm; 0.2 mm &rarr; 148 mm, 0.1 mm &rarr; 297 mm).</p>
<p><strong>b.</strong> Glass is polar, so water molecules form hydrogen bonds with it (<span class="term">adhesion</span>) and creep up the walls. Water molecules are also hydrogen-bonded to each other (<span class="term">cohesion</span>), so as the edge climbs, it pulls the rest of the column up with it. <span class="term">Surface tension</span> (cohesion at the surface) holds the curved surface together like a stretched skin. The water stops rising when the weight of the column balances the upward pull. In a narrow tube, a larger share of the water touches the glass compared with the weight of water to be lifted, so the column climbs higher.</p>
<p><strong>c.</strong> Wax is a nonpolar lipid, so water cannot form hydrogen bonds with it. There is almost no adhesion, and cohesion wins: water molecules pull toward each other and away from the walls. The surface curves downward and the level sits slightly <em>below</em> the level in the beaker (&minus;4 mm). This is the same reason water beads up on a waxy leaf cuticle.</p>
<p><strong>d.</strong> Halving the diameter from 0.1 mm to 0.05 mm should roughly double the height: about 2 &times; 297 &asymp; 600 mm, or about <strong>0.6 m</strong>. (Cellulose has many polar &ndash;OH groups, so adhesion to xylem walls is strong, like glass.) That is far short of 100 m, so capillary action alone cannot supply a tall tree. It helps start water moving up narrow xylem, but most of the lift comes from <span class="term">transpiration pull</span>: water evaporates from the leaves, and because of cohesion, each molecule that leaves pulls the unbroken column of water behind it up the xylem. Adhesion to the xylem walls helps stop the column from slipping back down.</p>`,
    marks: 5
  },
  {
    id: "xu03",
    lesson: "1.02",
    level: "analyze",
    tier: "likely",
    title: "Four mystery samples",
    prompt: `<p>A food-testing lab has four purified samples. Each is a different class of biological macromolecule. A technician records which elements each contains and what she gets after <strong>complete hydrolysis</strong>.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Sample</th><th>Elements</th><th>Dissolves in water?</th><th>Products of complete hydrolysis</th></tr></thead><tbody>
<tr><td>W</td><td>C, H, O (H:O ratio 2:1)</td><td>Only slightly</td><td>Many identical glucose molecules</td></tr>
<tr><td>X</td><td>C, H, O (very little O)</td><td>No; dissolves in oil</td><td>1 glycerol + 3 long-chain carboxylic acids</td></tr>
<tr><td>Y</td><td>C, H, O, N, S</td><td>Some forms do</td><td>Up to 20 kinds of small molecules, each with an amino group and a carboxyl group</td></tr>
<tr><td>Z</td><td>C, H, O, N, P</td><td>Yes</td><td>A pentose sugar, phosphate, and four kinds of nitrogen-containing bases</td></tr>
</tbody></table></div>
<ol>
<li>Identify the class of macromolecule in each sample, and name the type of bond that hydrolysis breaks to release its subunits.</li>
<li>Which sample is not a true polymer? Explain.</li>
<li>How many water molecules are used to fully hydrolyze one molecule of X? Glycerol has three polar &ndash;OH groups, so why is X insoluble in water?</li>
<li>W contains thousands of glucose units, and every glucose unit carries polar &ndash;OH groups. Suggest why W dissolves only slightly.</li>
<li>Which sample(s) contain each of these functional groups: phosphate, amino, sulfhydryl?</li>
</ol>`,
    hints: [
      "Match each set of products to its monomers: monosaccharides, glycerol + fatty acids, amino acids, nucleotides.",
      "A polymer is a long chain of repeating subunits. How many subunits does a triglyceride have, and are they all the same?",
      "For c, each ester bond formed released one water. For d, think about the size of the molecule, and whether its &ndash;OH groups are free to bond with water."
    ],
    answer: `<p><strong>a.</strong></p>
<div class="table-wrap"><table class="data"><thead><tr><th>Sample</th><th>Class</th><th>Bond broken by hydrolysis</th></tr></thead><tbody>
<tr><td>W</td><td>Carbohydrate (a polysaccharide such as starch or glycogen)</td><td>Glycosidic linkages</td></tr>
<tr><td>X</td><td>Lipid (triglyceride)</td><td>Ester bonds</td></tr>
<tr><td>Y</td><td>Protein (polypeptide)</td><td>Peptide bonds</td></tr>
<tr><td>Z</td><td>Nucleic acid (DNA or RNA)</td><td>Phosphodiester linkages (then the bonds inside each nucleotide)</td></tr>
</tbody></table></div>
<p><strong>b.</strong> <strong>X</strong>, the triglyceride. It is built from just 4 subunits (1 glycerol + 3 fatty acids), which are not identical units repeated in a long chain. W, Y and Z are long chains of repeating monomers (monosaccharides, amino acids, nucleotides).</p>
<p><strong>c.</strong> <strong>Three.</strong> A triglyceride forms by three dehydration (esterification) reactions, each releasing one water, so hydrolysis adds one water to each of the three ester bonds. X is insoluble because glycerol's &ndash;OH groups are used up in the ester bonds, and the molecule is dominated by three long hydrocarbon chains made of nonpolar C&ndash;C and C&ndash;H bonds, which cannot hydrogen-bond with water.</p>
<p><strong>d.</strong> First, the molecule is enormous: pulling a whole polymer into solution takes more energy than its hydrogen bonds with water give back. Second, many &ndash;OH groups are busy: some were used to form glycosidic linkages, and others hydrogen-bond within the molecule (for example, inside a coiled starch helix) instead of with water. A single glucose, by contrast, is small and dissolves easily.</p>
<p><strong>e.</strong> Phosphate: <strong>Z</strong> (the sugar&ndash;phosphate backbone). Amino: <strong>Y</strong> (every amino acid has one). Sulfhydryl: <strong>Y</strong> (its sulfur comes from amino acid R groups such as cysteine's &ndash;SH).</p>`,
    marks: 5
  },
  {
    id: "xu04",
    lesson: "1.02",
    level: "apply",
    tier: "likely",
    title: "Same six carbons, very different solubility",
    prompt: `<p>Each molecule below has six carbon atoms. The table shows about how much of each dissolves in 100 mL of water at room temperature.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Molecule</th><th>Formula</th><th>Functional group(s)</th><th>Solubility (g per 100 mL water)</th></tr></thead><tbody>
<tr><td>Hexane</td><td>C<sub>6</sub>H<sub>14</sub></td><td>none (hydrocarbon)</td><td>0.001</td></tr>
<tr><td>1-Hexanol</td><td>C<sub>6</sub>H<sub>13</sub>OH</td><td>1 hydroxyl</td><td>0.6</td></tr>
<tr><td>Hexanoic acid</td><td>C<sub>5</sub>H<sub>11</sub>COOH</td><td>1 carboxyl</td><td>1.0</td></tr>
<tr><td>Glucose</td><td>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></td><td>5 hydroxyl + 1 carbonyl (chain form)</td><td>91</td></tr>
</tbody></table></div>
<ol>
<li>Use functional groups to explain the order of solubility.</li>
<li>Decanoic acid is like hexanoic acid but has 10 carbons. Predict whether it is more or less soluble in water, and explain.</li>
<li>Glucose travels dissolved in blood plasma. Explain why fats cannot dissolve in plasma the same way.</li>
<li>An amino acid has an amino group (&ndash;NH<sub>2</sub>) and a carboxyl group (&ndash;COOH). Predict the form of each group in stomach acid (pH 2) and in blood (pH 7.4). Explain why a pH change like this can change the shape of a protein.</li>
</ol>`,
    hints: [
      "Which groups can form hydrogen bonds with water? Compare how many polar groups each molecule has with the size of its nonpolar part.",
      "Adding carbons adds only C&ndash;C and C&ndash;H bonds. What happens to the balance between the polar and nonpolar parts?",
      "In acid there is a lot of H<sup>+</sup>. An amino group can accept an H<sup>+</sup>; a carboxyl group can give one away. Charged R groups attract each other inside a folded protein."
    ],
    answer: `<p><strong>a.</strong> Hexane has only nonpolar C&ndash;C and C&ndash;H bonds, so it cannot hydrogen-bond with water and barely dissolves. 1-Hexanol has one polar hydroxyl group that can hydrogen-bond with water, but the rest is a nonpolar chain, so it dissolves only a little. The carboxyl group of hexanoic acid is more polar (it has two O atoms and can release H<sup>+</sup> to become a charged ion), so it dissolves a bit more. Glucose has five hydroxyl groups and a carbonyl spread over just six carbons, so almost the whole molecule hydrogen-bonds with water and it is very soluble. Rule: the more polar groups compared with nonpolar chain, the more soluble.</p>
<p><strong>b.</strong> <strong>Less soluble.</strong> It still has only one polar carboxyl group, but a longer nonpolar tail. As the chain grows, the nonpolar part dominates the molecule's behaviour, so it becomes more hydrophobic. This is why long-chain fatty acids are insoluble.</p>
<p><strong>c.</strong> Plasma is mostly water, which is polar. Fats (triglycerides) are mostly long hydrocarbon chains, so they are nonpolar, cannot hydrogen-bond with water, and clump together instead of dissolving. (Beyond the slides: your body ships fats inside <span class="term">lipoproteins</span>, with phospholipids and proteins on the outside facing the water and the fats hidden inside.)</p>
<p><strong>d.</strong> At pH 2 (lots of H<sup>+</sup>), the amino group gains an H<sup>+</sup> and becomes &ndash;NH<sub>3</sub><sup>+</sup>, and the carboxyl group stays &ndash;COOH (uncharged). At pH 7.4, the amino group is still mostly &ndash;NH<sub>3</sub><sup>+</sup>, but the carboxyl group loses its H<sup>+</sup> and becomes &ndash;COO<sup>&minus;</sup>. Acidic and basic R groups in a protein change the same way. A protein's tertiary shape is held partly by ionic attractions between + and &minus; R groups. If the pH adds or removes charges, those attractions break, the protein unfolds (denatures), and it stops working.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Protonation (gaining an H<sup>+</sup>) decides whether you see &ndash;NH<sub>2</sub> or &ndash;NH<sub>3</sub><sup>+</sup>.</p></div>`,
    marks: 5
  },
  {
    id: "xu05",
    lesson: "1.03",
    level: "apply",
    tier: "essential",
    title: "A salad bowl full of glucose you can't use",
    prompt: `<p>Starch (in potatoes and bread) and cellulose (in lettuce and celery) are both polymers of glucose joined by 1&ndash;4 glycosidic linkages. A potato gives you plenty of usable energy. A large bowl of lettuce gives you almost none, even though its cell walls are packed with glucose units.</p>
<ol>
<li>Describe the structural difference between starch and cellulose, starting with the type of glucose in each.</li>
<li>Explain why you can digest starch but not cellulose.</li>
<li>Cows eat mostly grass, yet they get plenty of energy from it. How?</li>
<li>If you can't digest cellulose, why do health guidelines still tell you to eat fibre?</li>
<li>Animals store glucose as glycogen, which is much more branched than the amylose in starch. Suggest why this branching suits an animal that may suddenly need to run.</li>
</ol>`,
    hints: [
      "Alpha and beta glucose differ only in which way the &ndash;OH on carbon 1 points. What happens to every second glucose in a chain of beta glucose?",
      "Enzymes are specific. An active site fits one shape of substrate and one type of bond.",
      "The enzymes that release glucose from glycogen work at the ends of the chains. How many ends does a highly branched molecule have?"
    ],
    answer: `<p><strong>a.</strong> Starch is made of <strong>alpha</strong> glucose joined by &alpha;(1&ndash;4) linkages (plus &alpha;(1&ndash;6) branches in amylopectin), and its chains coil into a helix. Cellulose is made of <strong>beta</strong> glucose: the &ndash;OH on carbon 1 points the other way, so every second glucose in the chain is flipped. This makes cellulose a long, straight chain. Neighbouring chains line up side by side and form many hydrogen bonds with each other, making strong fibres for the plant cell wall.</p>
<p><strong>b.</strong> Enzymes are specific: an active site fits only one shape of substrate. Your amylase (from saliva and the pancreas) fits the &alpha;(1&ndash;4) linkage in starch and hydrolyzes it, releasing glucose that you absorb and use in cellular respiration. Humans do not make <span class="term">cellulase</span>, the enzyme whose active site fits the &beta;(1&ndash;4) linkage, so cellulose passes through you undigested.</p>
<p><strong>c.</strong> Herbivores such as cows have microbes in their gut that make cellulase. The microbes hydrolyze cellulose into glucose, releasing its energy for the cow. (Beyond the slides: the microbes ferment most of that glucose themselves, and the cow absorbs the small molecules they produce.)</p>
<p><strong>d.</strong> Indigestible polysaccharides form <span class="term">fibre</span>, which is important for gut health. Fibre is not broken down into glucose, so it does not raise blood glucose. Insoluble fibre (like cellulose) adds bulk and helps the gut's muscles move food along. Soluble fibre holds water and slows digestion.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Insoluble fibre acts like a broom: it adds bulk and makes gut contractions more effective.</p></div>
<p><strong>e.</strong> The enzymes that release glucose from glycogen work at the ends of chains. Glycogen's many &alpha;(1&ndash;6) branches give it many ends, so many enzymes can work at once and release a lot of glucose quickly when muscles suddenly need energy. Branching also packs many glucose units into a compact molecule.</p>`,
    marks: 5
  },
  {
    id: "xu06",
    lesson: "1.03",
    level: "apply",
    tier: "likely",
    title: "Lactose intolerance: one missing enzyme",
    prompt: `<p>About an hour after drinking a glass of milk, a student gets bloating, gas and diarrhea. When she drinks lactose-free milk, she has no symptoms. Her small intestine makes very little <span class="term">lactase</span>.</p>
<ol>
<li>Write a word equation for the reaction lactase catalyzes. Name the type of reaction and the bond broken.</li>
<li>Only monosaccharides can be absorbed from the small intestine. Explain how undigested lactose causes gas <em>and</em> diarrhea.</li>
<li>Lactose-free milk is made by adding lactase to ordinary milk. It tastes noticeably sweeter, even though no sugar is added. Explain.</li>
<li>She can also take lactase tablets with her first sip of milk. Explain why a tablet taken 3 hours after the milk helps much less, and why dissolving the tablet in boiling-hot chocolate would make it useless.</li>
</ol>`,
    hints: [
      "Lactose is a disaccharide. Which two monosaccharides is it made of?",
      "Undigested lactose stays in the gut and raises the solute concentration there. Which way will water move? Gut bacteria also feed on it.",
      "Enzymes are proteins. What does high temperature do to a protein's shape?"
    ],
    answer: `<p><strong>a.</strong> lactose + water &rarr; glucose + galactose (catalyzed by lactase). This is a <span class="term">hydrolysis</span> reaction: water is added to break the <span class="term">glycosidic linkage</span> between the two monosaccharides. It is the reverse of the dehydration synthesis that formed lactose.</p>
<p><strong>b.</strong> Without lactase, lactose is not broken down, and as a disaccharide it cannot be absorbed, so it moves on into the large intestine.</p>
<ul>
<li><strong>Gas:</strong> bacteria in the large intestine use the lactose as food. They break it down by fermentation, which releases gases (such as CO<sub>2</sub> and H<sub>2</sub>) and causes bloating.</li>
<li><strong>Diarrhea:</strong> the dissolved lactose raises the solute concentration inside the intestine, so the gut contents become hypertonic to the cells lining it. Water moves by <span class="term">osmosis</span> out of the body and into the gut, making the stool watery.</li>
</ul>
<p><strong>c.</strong> The added lactase has already hydrolyzed the lactose into glucose and galactose. Your taste receptors find these monosaccharides sweeter than lactose. No sugar was added; the same sugar is just in a different form.</p>
<p><strong>d.</strong> An enzyme only works when it meets its substrate. Three hours after drinking, much of the lactose has already moved past the small intestine into the large intestine, where bacteria are fermenting it, so the tablet arrives too late. Lactase is a protein with an optimal temperature. Near-boiling liquid breaks the hydrogen bonds and other interactions that hold its 3-D shape, <span class="term">denaturing</span> it. The active site loses its shape, lactose no longer fits, and the enzyme stops working for good.</p>`,
    marks: 4
  }
);

window.EXT.push(
  {
    id: "xu07",
    lesson: "1.04",
    level: "analyze",
    tier: "likely",
    title: "Why butter is solid and olive oil is liquid",
    prompt: `<p>The table shows the melting points of pure fatty acids.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Fatty acid</th><th>Carbons</th><th>C=C double bonds</th><th>Melting point (&deg;C)</th></tr></thead><tbody>
<tr><td>Lauric</td><td>12</td><td>0</td><td>44</td></tr>
<tr><td>Myristic</td><td>14</td><td>0</td><td>54</td></tr>
<tr><td>Palmitic</td><td>16</td><td>0</td><td>63</td></tr>
<tr><td>Stearic</td><td>18</td><td>0</td><td>69</td></tr>
<tr><td>Elaidic</td><td>18</td><td>1 (trans)</td><td>44</td></tr>
<tr><td>Oleic</td><td>18</td><td>1 (cis)</td><td>13</td></tr>
<tr><td>Linoleic</td><td>18</td><td>2 (cis)</td><td>&minus;7</td></tr>
<tr><td>&alpha;-Linolenic (an omega-3)</td><td>18</td><td>3 (cis)</td><td>&minus;11</td></tr>
</tbody></table></div>
<ol>
<li>Using only the saturated fatty acids, describe and explain the effect of chain length on melting point.</li>
<li>Compare stearic, oleic, linoleic and &alpha;-linolenic acids. Describe and explain the effect of cis double bonds.</li>
<li>Oleic and elaidic acids have the same formula (they are isomers). Explain why their melting points are 31 &deg;C apart.</li>
<li>Which of these fatty acids are solid at room temperature (22 &deg;C)? Use your answer to explain why butter is solid but olive oil is liquid.</li>
<li>Food companies once turned liquid vegetable oils into solid margarine by <em>partial hydrogenation</em>: adding H atoms across some of the C=C bonds. Explain why this made the oil more solid, and why it created a health problem.</li>
</ol>`,
    hints: [
      "Melting means overcoming the attractions between neighbouring molecules. Longer nonpolar chains have more contact with their neighbours, so more London dispersion forces.",
      "A cis double bond puts a kink in the chain. What does a kink do to how tightly the molecules can pack?",
      "A trans double bond leaves the chain nearly straight. Which fatty acid does a straight 18-carbon chain resemble?"
    ],
    answer: `<p><strong>a.</strong> As the chain gets longer (12 &rarr; 18 carbons), the melting point rises (44 &rarr; 54 &rarr; 63 &rarr; 69 &deg;C). Saturated chains are straight and pack tightly side by side, held together by London dispersion forces between their nonpolar C&ndash;H bonds. A longer chain has more contact with its neighbours, so there are more forces to overcome, and more heat is needed to melt it.</p>
<p><strong>b.</strong> Each cis double bond lowers the melting point: 69 &deg;C (0 C=C) &rarr; 13 &deg;C (1) &rarr; &minus;7 &deg;C (2) &rarr; &minus;11 &deg;C (3). A cis double bond puts a kink (bend) in the chain. Kinked chains cannot pack closely, so there is less contact between molecules and weaker dispersion forces. Less heat is needed to separate them. (Beyond the slides: "omega-3" means the double bond nearest the tail end of the chain is 3 carbons from that end.)</p>
<p><strong>c.</strong> In oleic acid (cis), the H atoms are on the same side of the C=C, which bends the chain. In elaidic acid (trans), they are on opposite sides, so the chain stays nearly straight. Straight trans chains pack almost as tightly as saturated ones, so elaidic acid behaves much more like stearic acid than like oleic acid.</p>
<p><strong>d.</strong> Solid at 22 &deg;C: lauric, myristic, palmitic, stearic and elaidic acids (melting points above 22 &deg;C). Liquid: oleic, linoleic and &alpha;-linolenic acids. Butter and other animal fats are rich in saturated fatty acids, which pack tightly, so they are solid. Plant oils such as olive oil are rich in cis unsaturated fatty acids, which cannot pack well, so they are liquid.</p>
<p><strong>e.</strong> Adding H across a C=C turns it into a C&ndash;C single bond, so the chains become more saturated and straighter. Straighter chains pack better, raising the melting point. Beyond the slides: during <em>partial</em> hydrogenation, some of the remaining cis double bonds flip to the trans form, producing <span class="term">trans fats</span>. Trans fats raise "bad" LDL cholesterol and lower "good" HDL cholesterol, increasing the risk of heart disease. Canada banned partially hydrogenated oils in foods in 2018.</p>`,
    marks: 5
  },
  {
    id: "xu08",
    lesson: "1.04",
    level: "extend",
    tier: "extra",
    title: "Designing a fat-free potato chip",
    prompt: `<p><em>This goes beyond the slides.</em></p>
<p>In the late 1990s, potato chips fried in <strong>olestra</strong>, a fat substitute, were sold in North America. Olestra is made by attaching 6 to 8 fatty acids to the &ndash;OH groups of a single sucrose molecule (sucrose has 8 &ndash;OH groups). It looks, tastes and fries like fat, but it provides no calories: it passes through the digestive system without being digested or absorbed.</p>
<ol>
<li>Name the type of reaction and the type of bond that link each fatty acid to sucrose. How many water molecules are released when 8 fatty acids are attached?</li>
<li>Explain why olestra behaves like a fat in a frying pan and in your mouth.</li>
<li>Lipase hydrolyzes the ester bonds in triglycerides. Suggest why it cannot hydrolyze the ester bonds in olestra.</li>
<li>Chips made with olestra had vitamins A, D, E and K added. Explain why this was necessary.</li>
</ol>`,
    hints: [
      "A fatty acid's carboxyl group reacting with an &ndash;OH group is the same reaction that makes a triglyceride.",
      "What covers the outside of an olestra molecule? Is it polar or nonpolar?",
      "Active sites are specific in shape and size. Compare a small glycerol core with 3 tails to a bulky sucrose core with up to 8 tails. For d: vitamins A, D, E and K are fat-soluble."
    ],
    answer: `<p><strong>a.</strong> <span class="term">Esterification</span>, a dehydration synthesis (condensation) reaction. The carboxyl group of each fatty acid reacts with an &ndash;OH group on sucrose to form an <span class="term">ester bond</span>, releasing one H<sub>2</sub>O. Attaching 8 fatty acids releases <strong>8 water molecules</strong>.</p>
<p><strong>b.</strong> The outside of an olestra molecule is covered with 6 to 8 long hydrocarbon chains made of nonpolar C&ndash;C and C&ndash;H bonds. Like a triglyceride, it is nonpolar and hydrophobic: it does not mix with water, it coats your tongue the way fat does, and it can be heated for frying. Its sucrose core, the only polar part, is buried among the tails.</p>
<p><strong>c.</strong> Enzymes are specific. Lipase's active site is shaped to fit a triglyceride, where three tails hang off a small glycerol. In olestra, the ester bonds are crowded around a large sucrose core and shielded by 6 to 8 bulky tails, so the molecule cannot fit into the active site in the right orientation and its ester bonds are not hydrolyzed. The intact molecule is far too large to be absorbed by the cells lining the intestine, so it leaves the body unchanged and supplies no energy.</p>
<p><strong>d.</strong> Vitamins A, D, E and K are nonpolar (fat-soluble). "Like dissolves like": as olestra passes through the gut, these vitamins dissolve in it instead of being absorbed, and they leave the body with it. Over time this could cause deficiencies, so the vitamins were added to make up for the losses.</p>
<p>The design lesson: to make a "fat" with no calories, keep the nonpolar structure that gives fat its texture, but change the shape so your digestive enzymes cannot recognize it.</p>`,
    marks: 4
  },
  {
    id: "xu09",
    lesson: "1.05",
    level: "analyze",
    tier: "essential",
    title: "Chargaff's data: what the numbers reveal",
    prompt: `<p>Around 1950, Erwin Chargaff measured the percentage of each base in DNA from many sources. Data like his are shown below (values are % of all bases in the sample).</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Source of DNA</th><th>A</th><th>T</th><th>G</th><th>C</th></tr></thead><tbody>
<tr><td>Human</td><td>30.4</td><td>30.1</td><td>19.6</td><td>19.9</td></tr>
<tr><td>Salmon</td><td>29.7</td><td>29.1</td><td>20.8</td><td>20.4</td></tr>
<tr><td>Sea urchin</td><td>32.8</td><td>32.1</td><td>17.7</td><td>18.4</td></tr>
<tr><td><em>E. coli</em> (bacterium)</td><td>24.7</td><td>23.6</td><td>26.0</td><td>25.7</td></tr>
<tr><td>Virus &Phi;X174</td><td>24.0</td><td>31.2</td><td>23.3</td><td>21.5</td></tr>
</tbody></table></div>
<ol>
<li>For the first four sources, compare A with T, and G with C. Then calculate A + G (the purines) for human DNA. Explain these patterns using DNA structure.</li>
<li>The human values for A and T are not exactly equal. Does this disprove Chargaff's rule? Explain.</li>
<li>Virus &Phi;X174 does not follow the pattern. Suggest a reason, and explain how you can tell its genetic material is DNA, not RNA.</li>
<li>Which DNA, <em>E. coli</em> or sea urchin, would need a higher temperature to separate its two strands? Explain using the data.</li>
<li>Double-stranded DNA from a newly discovered bacterium is 22% cytosine. Calculate the percentage of each other base.</li>
</ol>`,
    hints: [
      "A and G are purines (two rings); T and C are pyrimidines (one ring). The width of the double helix stays constant.",
      "How many hydrogen bonds hold an A&ndash;T pair together? A G&ndash;C pair? Add up G + C for each organism.",
      "For e: C = G, A = T, and all four must add up to 100%."
    ],
    answer: `<p><strong>a.</strong> In each of the first four sources, %A &asymp; %T and %G &asymp; %C (for example, salmon: A 29.7, T 29.1; G 20.8, C 20.4). For human DNA, A + G = 30.4 + 19.6 = <strong>50.0%</strong>, so purines = pyrimidines. This happens because DNA is double-stranded and the bases pair by <span class="term">complementary base pairing</span>: A always pairs with T (2 hydrogen bonds) and G with C (3 hydrogen bonds). Every A on one strand is matched by a T on the other, and every G by a C. Each pair has one double-ring purine and one single-ring pyrimidine, which keeps the "rungs" of the ladder the same width.</p>
<p><strong>b.</strong> No. The difference (30.4 vs 30.1) is tiny and within normal measurement error. Every source shows the same pattern, and the small differences go in both directions (human G 19.6 &lt; C 19.9, but salmon G 20.8 &gt; C 20.4), which is what random error looks like.</p>
<p><strong>c.</strong> In &Phi;X174, A (24.0) &ne; T (31.2) and G (23.3) &ne; C (21.5). The most likely reason is that its DNA is <strong>single-stranded</strong>: with no partner strand, nothing forces A to equal T or G to equal C. It must be DNA because it contains thymine; RNA would contain uracil instead.</p>
<p><strong>d.</strong> <strong><em>E. coli</em>.</strong> Its G + C content is 26.0 + 25.7 = 51.7%, compared with 17.7 + 18.4 = 36.1% for sea urchin. G&ndash;C pairs are held by 3 hydrogen bonds and A&ndash;T pairs by only 2, so DNA with more G&ndash;C pairs has more hydrogen bonds to break and needs more heat to separate.</p>
<p><strong>e.</strong> C = 22%, so <strong>G = 22%</strong>. A + T = 100 &minus; 44 = 56%, so <strong>A = 28%</strong> and <strong>T = 28%</strong>.</p>`,
    marks: 5
  },
  {
    id: "xu10",
    lesson: "1.05",
    level: "extend",
    tier: "extra",
    title: "Copying and cutting DNA: PCR and CRISPR",
    prompt: `<p><em>This goes beyond the slides.</em></p>
<p>The <strong>polymerase chain reaction (PCR)</strong> makes billions of copies of a piece of DNA in a few hours. It is used in medical tests, crime-scene forensics and ancestry testing. Each cycle has three steps:</p>
<ol class="steps">
<li><p class="step-head">Denature (95 &deg;C)</p><p>The two strands of each DNA molecule separate.</p></li>
<li><p class="step-head">Anneal (about 55 &deg;C)</p><p>Short single-stranded DNA <span class="term">primers</span> base-pair with each strand at the start of the target sequence.</p></li>
<li><p class="step-head">Extend (72 &deg;C)</p><p><em>Taq</em> polymerase, an enzyme from <em>Thermus aquaticus</em> (a bacterium that lives in hot springs), builds a new complementary strand starting from each primer.</p></li>
</ol>
<ol>
<li>At 95 &deg;C the two strands separate, but each strand stays in one piece. Which bonds break and which do not? Explain.</li>
<li>A template strand reads 3'&ndash;TACGGA&ndash;5'. Write the sequence of the primer that binds to it, labelling its 5' and 3' ends.</li>
<li>Explain why PCR uses a polymerase from a hot-spring bacterium instead of human DNA polymerase.</li>
<li>Starting from one double-stranded DNA molecule, how many copies are there after 10 cycles? After 30?</li>
<li>CRISPR-Cas9 is a gene-editing tool. A short <span class="term">guide RNA</span> (about 20 bases) leads the enzyme Cas9 to one exact spot in a genome of 3 billion base pairs, where Cas9 cuts both strands. What allows the guide RNA to find the right spot, and what type of bond does Cas9 break?</li>
</ol>`,
    hints: [
      "Hydrogen bonds hold the two strands together. What holds the nucleotides within one strand together? Which is stronger?",
      "Pair each base (A&ndash;T, G&ndash;C) and remember that the new strand runs in the opposite direction (antiparallel).",
      "Each cycle doubles the DNA. Recall the slide comparing a human enzyme (optimum 37 &deg;C) with an enzyme from a heat-tolerant organism (optimum about 76 &deg;C)."
    ],
    answer: `<p><strong>a.</strong> The <strong>hydrogen bonds</strong> between complementary bases break (2 per A&ndash;T pair, 3 per G&ndash;C pair). These are weak attractions between the two strands, so heating to 95 &deg;C gives enough energy to pull them apart. The <strong>covalent bonds</strong> within each strand, the phosphodiester linkages of the sugar&ndash;phosphate backbone, are much stronger intramolecular bonds and do not break. Each strand stays intact and can act as a template.</p>
<p><strong>b.</strong> <strong>5'&ndash;ATGCCT&ndash;3'</strong>. Each base pairs with its complement (T&ndash;A, A&ndash;T, C&ndash;G, G&ndash;C, G&ndash;C, A&ndash;T), and the primer runs antiparallel to the template.</p>
<p><strong>c.</strong> Every cycle heats the mixture to 95 &deg;C. Human DNA polymerase works best near 37 &deg;C; at 95 &deg;C the bonds holding its 3-D shape would break, the enzyme would denature, and its active site would lose its shape. <em>Thermus aquaticus</em> lives in hot springs, so its polymerase has a high optimal temperature (around 72&ndash;80 &deg;C) and survives repeated heating to 95 &deg;C. One dose of enzyme lasts through all the cycles.</p>
<p><strong>d.</strong> The DNA doubles each cycle: 2<sup>10</sup> = <strong>1024</strong> copies after 10 cycles, and 2<sup>30</sup> &asymp; <strong>1 billion</strong> after 30.</p>
<p><strong>e.</strong> <strong>Complementary base pairing.</strong> The guide RNA can hydrogen-bond firmly with DNA only where all its bases match (G with C, A with T, U with A). A 20-base sequence is long enough that it usually occurs only once in the genome. Cas9 then <strong>hydrolyzes</strong> the <strong>phosphodiester bonds</strong> in the backbone of both strands. When the cell repairs the cut, scientists can use the repair to switch off or rewrite the gene.</p>`,
    marks: 5
  },
  {
    id: "xu11",
    lesson: "1.06",
    level: "apply",
    tier: "likely",
    title: "Sickle-cell disease: one amino acid, four levels of structure",
    prompt: `<p>Hemoglobin, the O<sub>2</sub>-carrying protein in red blood cells, is made of four polypeptide chains (two &alpha; and two &beta;). In sickle-cell disease, a single change in the DNA replaces the 6th amino acid of each &beta; chain. Normally this amino acid is <strong>glutamic acid</strong>, whose R group is acidic and negatively charged (&ndash;CH<sub>2</sub>CH<sub>2</sub>COO<sup>&minus;</sup>). In sickle-cell hemoglobin it is <strong>valine</strong>, whose R group is a small hydrocarbon (&ndash;CH(CH<sub>3</sub>)<sub>2</sub>). This amino acid sits on the <em>outside</em> surface of the protein.</p>
<p>When O<sub>2</sub> levels are low, sickle-cell hemoglobin molecules stick together into long, stiff fibres. The red blood cells bend into a rigid sickle shape, jam in small capillaries, and are destroyed after about 10 to 20 days instead of the normal 120.</p>
<ol>
<li>Which level of protein structure is changed directly by the mutation? Which levels are affected as a result?</li>
<li>Classify the R groups of glutamic acid and valine as polar or nonpolar. Explain why a nonpolar R group on the outside of a protein surrounded by water makes the molecules stick together.</li>
<li>Explain how this change leads to the symptoms: pain, tiredness and shortness of breath.</li>
<li>Explain how sickle-cell disease supports the statement "a protein's shape determines its function."</li>
</ol>`,
    hints: [
      "Primary structure is the sequence of amino acids. Quaternary structure is how several chains fit together into one protein.",
      "Hemoglobin is surrounded by water inside the red blood cell. Nonpolar groups avoid water and cluster with other nonpolar groups.",
      "Stuck cells block blood flow. Fewer red blood cells means less O<sub>2</sub> delivered."
    ],
    answer: `<p><strong>a.</strong> The <strong>primary structure</strong> (amino acid sequence) changes directly: glutamic acid is replaced by valine at position 6 of each &beta; chain. Each chain still folds into nearly the same secondary and tertiary structure, but the <strong>surface</strong> of the folded &beta; chain is different. Because the finished protein has quaternary structure (2 &alpha; + 2 &beta;), the whole hemoglobin molecule now carries a sticky patch, which changes how hemoglobin molecules interact with each other.</p>
<p><strong>b.</strong> Glutamic acid's R group is <strong>polar and charged</strong> (hydrophilic). On the protein's surface it attracts water molecules, helping hemoglobin stay dissolved. Valine's R group is a hydrocarbon, so it is <strong>nonpolar</strong> (hydrophobic). On the surface it is exposed to water but cannot attract it, so it is pushed toward other nonpolar groups: the valine on one hemoglobin fits into a nonpolar pocket on a neighbouring hemoglobin. Molecule after molecule links up into long fibres. (This pocket is exposed mainly when hemoglobin is not carrying O<sub>2</sub>, which is why fibres form when O<sub>2</sub> is low.)</p>
<p><strong>c.</strong> The fibres distort red blood cells into stiff sickle shapes. These cells jam in narrow capillaries and block blood flow, so tissues downstream are starved of O<sub>2</sub>, causing pain and organ damage. Sickled cells are also destroyed much faster than normal ones, so the person has too few red blood cells (anemia). Less O<sub>2</sub> reaches the body's cells, causing tiredness and shortness of breath.</p>
<p><strong>d.</strong> Changing one amino acid out of 146 in each &beta; chain changes the surface shape of the molecule. That new shape lets hemoglobin molecules stick together, which deforms the cells and ruins their ability to deliver O<sub>2</sub>. A small change in structure caused a large change in function.</p>`,
    marks: 4
  },
  {
    id: "xu12",
    lesson: "1.06",
    level: "extend",
    tier: "extra",
    title: "Prions: when a bad shape is contagious",
    prompt: `<p><em>This goes beyond the slides.</em></p>
<p>Your brain cells make a normal membrane protein called PrP, folded mostly into &alpha;-helices. A <span class="term">prion</span> is the <em>same</em> protein, with the <em>same</em> amino acid sequence, folded into a different shape that is rich in &beta;-pleated sheets. When a prion meets a normal PrP molecule, it causes the normal molecule to refold into the prion shape. Prions clump into fibres, brain cells die, and the brain develops tiny holes. Prion diseases include mad cow disease (BSE) in cattle, chronic wasting disease in deer and elk, and Creutzfeldt-Jakob disease (CJD) in humans. Some people caught a form of CJD by eating beef from cattle with BSE.</p>
<ol>
<li>Which levels of protein structure are the same, and which are different, in normal PrP and in the prion?</li>
<li>Bacteria and viruses spread by having their DNA or RNA copied. Explain why prions surprised scientists.</li>
<li>Cooking denatures most proteins. Suggest why cooking beef does not destroy prions.</li>
<li>Prion diseases take years to show symptoms but then get worse very quickly. Explain using the way prions spread.</li>
</ol>`,
    hints: [
      "Same sequence means the same primary structure. &alpha;-helices and &beta;-pleated sheets belong to which level?",
      "Does a prion contain any nucleic acid? What is being passed on instead of genetic instructions?",
      "Stacked &beta;-sheets are held by a huge number of hydrogen bonds. For d: one prion converts one PrP, then there are two prions, then four&hellip;"
    ],
    answer: `<p><strong>a.</strong> The <strong>primary structure</strong> is identical: the same amino acids in the same order. The <strong>secondary structure</strong> differs (mostly &alpha;-helix in normal PrP, mostly &beta;-pleated sheet in the prion), and so does the <strong>tertiary structure</strong>, the overall 3-D fold. Prions also stick to each other in large clumps, which normal PrP does not do.</p>
<p><strong>b.</strong> Every other known infectious agent carries nucleic acid (DNA or RNA) that gets copied inside the host. Prions are pure protein, with no DNA or RNA. They pass on a <em>shape</em>, not genetic instructions: the misfolded protein acts as a template that refolds normal proteins. This challenged the idea that biological information can be passed on only through nucleic acids. (Stanley Prusiner won the 1997 Nobel Prize for this work.)</p>
<p><strong>c.</strong> The &beta;-sheet form is extremely stable. Many prion molecules stack into fibres held together by a huge number of hydrogen bonds between neighbouring sheets. Normal cooking temperatures do not supply enough energy to break them all. The tightly packed fibres also resist protease enzymes, which normally digest proteins. Destroying prions takes much harsher treatment, such as long heating at 134 &deg;C under pressure combined with strong chemicals.</p>
<p><strong>d.</strong> Prions spread by a chain reaction. At first there are very few prions, so they convert normal PrP slowly, and there is no visible damage for years. But each new prion can convert more PrP, so the number grows exponentially (1 &rarr; 2 &rarr; 4 &rarr; 8&hellip;). Once the numbers are large, clumps build up quickly, many brain cells die in a short time, and the disease gets worse very fast.</p>`,
    marks: 4
  }
);

window.EXT.push(
  {
    id: "xu13",
    lesson: "1.07",
    level: "analyze",
    tier: "essential",
    title: "Catalase and temperature: reading the data",
    prompt: `<p>Your cells make hydrogen peroxide (H<sub>2</sub>O<sub>2</sub>), a toxic by-product of metabolism. The enzyme <span class="term">catalase</span> breaks it down. A class adds the same mass of liver (a source of catalase) to 10 mL of 3% H<sub>2</sub>O<sub>2</sub>. The liver and the peroxide are first held at the test temperature for 5 minutes. The O<sub>2</sub> released in the first minute is collected by water displacement. Each value is the mean of three trials.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Temperature (&deg;C)</th><th>O<sub>2</sub> collected in 1 min (mL)</th></tr></thead><tbody>
<tr><td>0</td><td>3</td></tr>
<tr><td>10</td><td>7</td></tr>
<tr><td>20</td><td>13</td></tr>
<tr><td>30</td><td>21</td></tr>
<tr><td>37</td><td>26</td></tr>
<tr><td>45</td><td>19</td></tr>
<tr><td>55</td><td>6</td></tr>
<tr><td>65</td><td>1</td></tr>
<tr><td>Liver held at 65 &deg;C for 5 min, then cooled and tested at 37 &deg;C</td><td>1</td></tr>
<tr><td>Liver held at 0 &deg;C for 5 min, then warmed and tested at 37 &deg;C</td><td>25</td></tr>
</tbody></table></div>
<ol>
<li>Write the balanced equation for the reaction. Identify the independent variable, the dependent variable, and two controlled variables.</li>
<li>Describe and explain the trend from 0 &deg;C to 37 &deg;C.</li>
<li>Describe and explain the trend above 37 &deg;C.</li>
<li>Use the last two rows to explain the difference between what low and high temperatures do to an enzyme.</li>
<li>What type of graph should be used for these data? A student claims the optimum is exactly 37 &deg;C. How could the experiment be improved to find the optimum more precisely, and what control tube should be added?</li>
</ol>`,
    hints: [
      "Catalase splits hydrogen peroxide into water and oxygen gas. Balance the O atoms.",
      "Below the optimum, think about kinetic energy and collisions between enzyme and substrate. Above it, think about the weak bonds that hold a protein's 3-D shape.",
      "Is temperature a set of categories or a continuous variable? The data jump from 30 to 37 to 45 &deg;C, with nothing tested in between."
    ],
    answer: `<p><strong>a.</strong> 2H<sub>2</sub>O<sub>2</sub> &rarr; 2H<sub>2</sub>O + O<sub>2</sub>. Independent variable: temperature. Dependent variable: volume of O<sub>2</sub> produced in 1 minute (a measure of reaction rate). Controlled variables (any two): mass and type of liver, volume and concentration of H<sub>2</sub>O<sub>2</sub>, time allowed to reach temperature, collection time, pH.</p>
<p><strong>b.</strong> From 0 to 37 &deg;C the rate rises steadily (3 &rarr; 26 mL). Higher temperature gives enzyme and substrate molecules more kinetic energy, so they move faster and collide more often, and more collisions have enough energy to react. More enzyme&ndash;substrate complexes form each second.</p>
<p><strong>c.</strong> Above about 37 &deg;C the rate falls sharply (26 &rarr; 19 &rarr; 6 &rarr; 1 mL). Catalase is a protein whose 3-D shape is held by weak interactions, such as hydrogen bonds and ionic attractions between R groups. Extra heat makes the chain vibrate so much that these bonds break, and the enzyme <span class="term">denatures</span>: the active site loses its shape, H<sub>2</sub>O<sub>2</sub> no longer fits, and fewer enzyme molecules work. By 65 &deg;C almost all are denatured.</p>
<p><strong>d.</strong> The enzyme held at 0 &deg;C recovered almost fully when warmed (25 mL vs 26 mL). Cold only <strong>slows</strong> an enzyme: its molecules move slowly, but its shape is undamaged. The enzyme held at 65 &deg;C stayed inactive even at 37 &deg;C (1 mL). High heat <strong>denatured</strong> it permanently: its shape did not come back.</p>
<p><strong>e.</strong> A <strong>line graph</strong>, because temperature is a continuous independent variable. The true optimum could be anywhere from about 30 to 45 &deg;C, since nothing in between was tested. To improve, test more temperatures in that range (for example, every 2 &deg;C from 31 to 43 &deg;C). Control: a tube of H<sub>2</sub>O<sub>2</sub> with no liver (or with boiled liver) at each temperature, to show how much O<sub>2</sub> forms without active enzyme, since H<sub>2</sub>O<sub>2</sub> breaks down slowly on its own.</p>`,
    marks: 5
  },
  {
    id: "xu14",
    lesson: "1.07",
    level: "apply",
    tier: "likely",
    title: "A poison treated with alcohol: competitive inhibition",
    prompt: `<p>Methanol (CH<sub>3</sub>OH) is found in windshield washer fluid and in some illegally made alcoholic drinks. Methanol itself is much less harmful than what it turns into. The liver enzyme <span class="term">alcohol dehydrogenase</span> converts methanol to formaldehyde, which is then converted to formic acid. Formic acid can damage the optic nerve, causing blindness, and can be fatal.</p>
<p>For many years, doctors treated methanol poisoning by giving the patient ethanol (CH<sub>3</sub>CH<sub>2</sub>OH, the alcohol in drinks) and keeping their blood ethanol level high for a day or more. Alcohol dehydrogenase binds ethanol much more readily than methanol. Meanwhile, the unchanged methanol is slowly removed from the body in urine and breath.</p>
<ol>
<li>What type of enzyme inhibition does ethanol cause here? Use the structures of the two molecules to explain how it works.</li>
<li>Why must the ethanol level be kept high for many hours, instead of being given as one small dose?</li>
<li>Describe how a graph of reaction rate vs methanol concentration would look with and without ethanol present. How would it differ if a non-competitive (allosteric) inhibitor were used instead?</li>
<li>Explain why blocking the enzyme protects the patient, even though the methanol stays in the body longer.</li>
</ol>`,
    hints: [
      "Compare CH<sub>3</sub>OH and CH<sub>3</sub>CH<sub>2</sub>OH. Could both fit the same active site?",
      "With a competitive inhibitor, which molecule is in the active site at any moment depends on how much of each is around.",
      "A competitive inhibitor can be outcompeted by lots of substrate. Can an inhibitor bound to an allosteric site be outcompeted that way?"
    ],
    answer: `<p><strong>a.</strong> <span class="term">Competitive inhibition</span>. Methanol and ethanol are both small molecules with a hydroxyl (&ndash;OH) group on a short carbon chain, so both fit the same <strong>active site</strong> of alcohol dehydrogenase. While ethanol occupies an active site, methanol cannot bind there. Because the enzyme binds ethanol more readily, most active sites are filled with ethanol, and very little methanol is converted to formaldehyde.</p>
<p><strong>b.</strong> Competitive inhibition depends on concentration: the active sites are shared between ethanol and methanol according to how much of each is present. The liver keeps breaking down ethanol, so its level drops over time. If it fell, methanol would win more active sites and toxic products would form again. Ethanol must stay high until the kidneys and lungs have removed most of the methanol unchanged, which takes many hours.</p>
<p><strong>c.</strong> Without ethanol, the rate rises as methanol concentration increases, then levels off when all active sites are busy (saturation). With ethanol, the curve rises more slowly, but at very high methanol concentrations methanol outcompetes ethanol, so the curve eventually approaches the same maximum rate. A non-competitive (allosteric) inhibitor binds the allosteric site and changes the shape of the active site, so adding more substrate cannot overcome it: the curve levels off at a <strong>lower</strong> maximum.</p>
<p><strong>d.</strong> The harm comes mainly from methanol's products, formaldehyde and formic acid. If the enzyme cannot convert methanol, it stays in its less harmful form and leaves the body unchanged. Beyond the slides: hospitals now often use <em>fomepizole</em>, another competitive inhibitor of alcohol dehydrogenase, which does not make the patient drunk.</p>`,
    marks: 4
  },
  {
    id: "xu15",
    lesson: "1.08",
    level: "analyze",
    tier: "likely",
    title: "Which cell is which? Organelle data",
    prompt: `<p>The table shows the approximate percentage of cell volume taken up by some organelles in five human cell types, P to T. (The numbers are simplified for this question.)</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Cell</th><th>Mitochondria</th><th>Rough ER</th><th>Smooth ER</th><th>Golgi</th><th>Lysosomes</th><th>Nucleus?</th></tr></thead><tbody>
<tr><td>P</td><td>35</td><td>1</td><td>2</td><td>&lt;1</td><td>&lt;1</td><td>Yes</td></tr>
<tr><td>Q</td><td>7</td><td>20</td><td>1</td><td>8</td><td>1</td><td>Yes</td></tr>
<tr><td>R</td><td>20</td><td>9</td><td>12</td><td>3</td><td>2</td><td>Yes</td></tr>
<tr><td>S</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>No</td></tr>
<tr><td>T</td><td>5</td><td>3</td><td>1</td><td>2</td><td>12</td><td>Yes</td></tr>
</tbody></table></div>
<ol>
<li>Match each cell to one of these: mature red blood cell, liver cell, heart muscle cell, pancreatic cell that secretes digestive enzymes, white blood cell that engulfs bacteria. Justify each match using the organelle that stands out.</li>
<li>For cell Q, describe the path a digestive enzyme follows from its gene to outside the cell. Name each organelle and its role.</li>
<li>Cell S has no mitochondria and no nucleus. Suggest how this suits its job.</li>
<li>Adrenal gland cells make steroid hormones such as cortisol. Predict which organelle would be especially abundant in them, and explain.</li>
</ol>`,
    hints: [
      "Mitochondria: ATP. Rough ER + Golgi: making and packaging proteins for export. Smooth ER: lipids and detoxification. Lysosomes: digestion.",
      "Proteins for export are made by ribosomes on the rough ER. Where do they go next, and how do they leave the cell?",
      "Steroids are lipids. Which kind of ER makes lipids?"
    ],
    answer: `<p><strong>a.</strong></p>
<ul>
<li><strong>P = heart muscle cell.</strong> Very high mitochondria (35%) to make the ATP needed for constant contraction; little rough ER or Golgi because it secretes little.</li>
<li><strong>Q = pancreatic enzyme-secreting cell.</strong> Very large rough ER (20%) and Golgi (8%): it makes and packages large amounts of protein (digestive enzymes) for export.</li>
<li><strong>R = liver cell.</strong> The most smooth ER (12%), for detoxifying drugs and alcohol and making lipids, plus many mitochondria and a good amount of rough ER, because the liver has many jobs.</li>
<li><strong>S = mature red blood cell.</strong> No nucleus and no organelles: the cell is packed with hemoglobin instead.</li>
<li><strong>T = white blood cell.</strong> Many lysosomes (12%), whose digestive enzymes break down the bacteria it engulfs by phagocytosis.</li>
</ul>
<p><strong>b.</strong> In the <strong>nucleus</strong>, the gene's DNA is copied into mRNA, which leaves through a nuclear pore. <strong>Ribosomes</strong> on the <strong>rough ER</strong> read the mRNA and build the polypeptide, which enters the rough ER and folds. A <strong>transport vesicle</strong> carries it to the <strong>Golgi apparatus</strong>, which modifies, sorts and packages it. A <strong>secretory vesicle</strong> buds from the Golgi, moves to the cell membrane, fuses with it and releases the enzyme outside the cell by <span class="term">exocytosis</span>. This is regulated exocytosis: the enzymes are stored and released when the cell receives a signal after a meal.</p>
<p><strong>c.</strong> Its only job is to carry O<sub>2</sub>. With no nucleus or mitochondria, there is more room for hemoglobin, so each cell carries more O<sub>2</sub>. (Beyond the slides: with no mitochondria, it also does not use up the O<sub>2</sub> it carries; it makes its ATP by glycolysis instead.)</p>
<p><strong>d.</strong> <strong>Smooth ER.</strong> Steroids are lipids, and lipids (phospholipids and steroids) are made in the smooth ER. (Beyond the slides: these cells are also rich in mitochondria, because some steps of steroid synthesis happen there.)</p>`,
    marks: 5
  },
  {
    id: "xu16",
    lesson: "1.08",
    level: "apply",
    tier: "likely",
    title: "Tay-Sachs disease: a lysosome that can't finish the job",
    prompt: `<p>Babies with Tay-Sachs disease seem healthy at birth. From about 6 months of age, they gradually lose the ability to sit up, see and swallow, and most die in early childhood. Their brain cells are filled with swollen lysosomes packed with an undigested lipid (a glycolipid called GM2). The cause is a mutation in the gene for the lysosomal enzyme <strong>hexosaminidase A</strong>, which normally breaks down this lipid.</p>
<ol>
<li>Describe where lysosomal enzymes are made and how they get into lysosomes.</li>
<li>The inside of a lysosome is about pH 4.5 to 5, while the cytosol is about pH 7.2. What does this tell you about the optimum pH of lysosomal enzymes? How does this protect the cell if a lysosome leaks?</li>
<li>Explain how a mutation in one gene leads to a build-up of lipid in the lysosomes.</li>
<li>Suggest why brain cells (neurons) are affected far more than other cells.</li>
</ol>`,
    hints: [
      "Lysosomal enzymes are proteins. They follow the same route as a protein made for export, but the final vesicle stays inside the cell.",
      "An enzyme works best at its optimum pH. How well would an acid-loving enzyme work at pH 7.2?",
      "Mutation &rarr; amino acid sequence &rarr; folding &rarr; active site. Neurons have a lot of membrane, and they rarely divide or get replaced."
    ],
    answer: `<p><strong>a.</strong> Lysosomal enzymes are proteins. They are made by <strong>ribosomes on the rough ER</strong> and fold inside the rough ER. Transport vesicles carry them to the <strong>Golgi apparatus</strong>, which modifies them and sorts them away from proteins meant for export. Vesicles full of these enzymes bud off from the Golgi and become (or fuse with) <strong>lysosomes</strong>.</p>
<p><strong>b.</strong> Lysosomal enzymes have an <strong>acidic optimum pH</strong> (about 4.5 to 5), matching the inside of the lysosome. This is a safety feature: if a lysosome leaks, its enzymes enter the cytosol at about pH 7.2, far from their optimum, so they work very slowly and do little damage to the cell's own molecules.</p>
<p><strong>c.</strong> The gene's DNA sequence codes for the amino acid sequence (primary structure) of hexosaminidase A. The mutation changes this sequence, so the enzyme folds into the wrong 3-D shape or is not made at all. Its active site no longer fits the GM2 lipid, so the lipid is not hydrolyzed. The cell keeps delivering GM2 to its lysosomes to be broken down, so it piles up and the lysosomes swell.</p>
<p><strong>d.</strong> Neurons have huge amounts of membrane (long axons and dendrites), and their membranes are especially rich in GM2, so they send far more of it to their lysosomes than other cells do. Also, neurons rarely divide and are not replaced, so undigested lipid builds up over months until the swollen cells stop working and die. That is why the symptoms are loss of nerve functions such as movement, sight and swallowing.</p>
<p>(Beyond the slides: Tay-Sachs is recessive. A child gets the disease only by inheriting a faulty copy of the gene from both parents.)</p>`,
    marks: 4
  },
  {
    id: "xu17",
    lesson: "1.09",
    level: "analyze",
    tier: "likely",
    title: "Cold fish, fluid membranes",
    prompt: `<p>A fish's body temperature matches the water around it. The table shows the percentage of unsaturated fatty acid tails in the membrane phospholipids of fish living at different temperatures. (Values are simplified for this question.)</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Fish</th><th>Water temperature (&deg;C)</th><th>Unsaturated tails in membranes (%)</th></tr></thead><tbody>
<tr><td>Antarctic icefish</td><td>&minus;1.5</td><td>78</td></tr>
<tr><td>Trout kept in cold water</td><td>5</td><td>70</td></tr>
<tr><td>Trout kept in warm water</td><td>20</td><td>58</td></tr>
<tr><td>Tropical reef fish</td><td>28</td><td>50</td></tr>
</tbody></table></div>
<p>In a separate experiment, trout moved from 20 &deg;C to 5 &deg;C water slowly raised their percentage of unsaturated tails from 58% to 70% over about three weeks.</p>
<ol>
<li>Describe the relationship shown in the table.</li>
<li>Explain how this pattern keeps the membranes working. Refer to the structure of fatty acid tails and to the fluid mosaic model.</li>
<li>Predict what would happen to a trout's cells if it were moved suddenly from 20 &deg;C to 0 &deg;C water. Explain.</li>
<li>Your cell membranes contain a lot of cholesterol. Explain how cholesterol acts as a "fluidity buffer" at high and at low temperatures. Why would a fluidity buffer be especially valuable to an animal whose body temperature changes with its surroundings?</li>
</ol>`,
    hints: [
      "As the water gets colder, what happens to the percentage of unsaturated tails?",
      "Cis double bonds put kinks in tails. What do kinks do to packing and to fluidity? Membrane proteins need to move and change shape to work.",
      "Cholesterol wedges between phospholipids. In the heat it restrains them; in the cold it stops them from packing tightly."
    ],
    answer: `<p><strong>a.</strong> The colder the water, the higher the percentage of unsaturated fatty acid tails: from 50% at 28 &deg;C up to 78% at &minus;1.5 &deg;C. The trout data show that a single species can adjust its membranes when its temperature changes.</p>
<p><strong>b.</strong> Cold makes phospholipids move less and pack more tightly, so a membrane stiffens, like butter in a fridge. Unsaturated tails have cis double bonds that put kinks in the chains. Kinks stop the tails from packing tightly, which <strong>increases fluidity</strong>. Colder fish use more unsaturated tails, so their membranes stay at about the same fluidity whatever the temperature. This matters because, in the fluid mosaic model, phospholipids and proteins must be able to move: transport proteins, channels and receptors need to shift and change shape to work, and a rigid membrane can crack. In warm water, more saturated (straight) tails stop the membrane from becoming too fluid and leaky.</p>
<p><strong>c.</strong> Its membranes would still have only 58% unsaturated tails, which suits 20 &deg;C. At 0 &deg;C, the straighter saturated tails would pack tightly and the membranes would become too rigid. Transport proteins and receptors would not work properly, and cells could be damaged or die before the fish had time (weeks) to remodel its membranes.</p>
<p><strong>d.</strong> At <strong>high temperatures</strong>, cholesterol wedges between phospholipids and restrains their movement, so the membrane does not become too fluid. At <strong>low temperatures</strong>, cholesterol gets in the way of tight packing between the tails, so the membrane does not freeze solid and stays fluid. An animal whose body temperature follows its surroundings (an ectotherm) can face big temperature swings within a single day, far faster than it can change its fatty acids. Cholesterol buffers its membranes against these quick changes.</p>
<div class="callout teacher"><p class="callout-title">Said in class</p><p>Cholesterol's buffering role matters most for ectotherms, whose body temperature follows their surroundings. Your body holds a steady temperature through homeostasis.</p></div>`,
    marks: 5
  },
  {
    id: "xu18",
    lesson: "1.09",
    level: "extend",
    tier: "extra",
    title: "Cystic fibrosis: a channel that never arrives",
    prompt: `<p><em>This goes beyond the slides.</em></p>
<p>Cystic fibrosis (CF) is the most common fatal genetic disease affecting Canadian children and young adults. It is caused by mutations in the gene for <strong>CFTR</strong>, a protein that spans the cell membrane of cells lining the lungs, pancreas and sweat glands. CFTR forms a channel that lets chloride ions (Cl<sup>&minus;</sup>) leave the cell. The cell uses ATP to open and close the channel's gate, but the Cl<sup>&minus;</sup> ions themselves flow through it down their concentration gradient.</p>
<p>In healthy lungs, Cl<sup>&minus;</sup> leaving the cells (with Na<sup>+</sup> following) draws water out onto the airway surface, keeping the mucus thin so cilia can sweep it away. In CF, the mucus is thick and sticky, and lung infections are common. The most common CF mutation deletes just <strong>one amino acid</strong> (number 508, phenylalanine) out of 1480. The protein misfolds, and almost none of it reaches the cell membrane.</p>
<ol>
<li>Classify CFTR: integral or peripheral protein? Channel or carrier? Is the movement of Cl<sup>&minus;</sup> through it passive or active?</li>
<li>Explain why a lack of working CFTR makes the mucus thick.</li>
<li>Using protein structure and the organelles that handle membrane proteins, explain how deleting one amino acid out of 1480 can stop CFTR from reaching the membrane.</li>
<li>A drug approved in Canada in 2021 combines two "corrector" molecules, which help CFTR fold properly, with a "potentiator", which holds the channel's gate open. Explain why a patient with this mutation benefits from both kinds of drug.</li>
</ol>`,
    hints: [
      "It spans the whole membrane and forms a pore. Does Cl<sup>&minus;</sup> move with or against its gradient?",
      "Water follows solutes by osmosis. If fewer ions leave the cells, which way does water go?",
      "Membrane proteins are made on the rough ER and pass through the Golgi. The cell checks that proteins are folded correctly before shipping them."
    ],
    answer: `<p><strong>a.</strong> CFTR is an <strong>integral</strong> protein: it spans the whole bilayer. It is a <strong>channel</strong> protein: it forms a water-filled pore that lets a specific ion through. The movement of Cl<sup>&minus;</sup> is <strong>passive</strong> (facilitated diffusion), because the ions flow down their concentration gradient. ATP is used only to open and close the gate, not to push ions through.</p>
<p><strong>b.</strong> Normally, Cl<sup>&minus;</sup> (with Na<sup>+</sup>) leaves the cells and raises the solute concentration on the airway surface. That surface layer becomes hypertonic to the cells, so water follows by <span class="term">osmosis</span> and keeps the mucus thin and watery. Without working CFTR, far fewer ions leave the cells, so much less water moves onto the airway surface. The mucus becomes dehydrated, thick and sticky; the cilia cannot sweep it away, and bacteria trapped in it cause infections.</p>
<p><strong>c.</strong> Deleting one amino acid changes the primary structure. This disrupts the R-group interactions that guide folding, so part of the protein folds into the wrong tertiary shape. Membrane proteins are made on the <strong>rough ER</strong>, then travel in vesicles through the <strong>Golgi apparatus</strong> to the cell membrane. The ER checks that proteins have folded correctly. Misfolded CFTR is held back in the ER and broken down instead of being shipped on, so very little reaches the membrane, even though the cell makes plenty of it.</p>
<p><strong>d.</strong> The mutation causes two separate problems. The <strong>correctors</strong> help the protein fold well enough to pass the ER check, so more CFTR reaches the membrane. But the CFTR that arrives still opens poorly, so the <strong>potentiator</strong> holds the gate open longer, letting more Cl<sup>&minus;</sup> through each channel. More channels, each working better, restore far more Cl<sup>&minus;</sup> flow (and therefore water flow) than either drug alone.</p>`,
    marks: 5
  }
);

window.EXT.push(
  {
    id: "xu19",
    lesson: "1.10",
    level: "analyze",
    tier: "essential",
    title: "Potato cores in sugar water",
    prompt: `<p>A student cuts seven identical cylinders (cores) from one potato, blots each dry, weighs it, and places it in a different sucrose solution for 24 hours. She then blots each core dry and weighs it again.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Sucrose (mol/L)</th><th>Initial mass (g)</th><th>Final mass (g)</th><th>Change in mass (%)</th></tr></thead><tbody>
<tr><td>0.0</td><td>2.50</td><td>3.01</td><td>+20.4</td></tr>
<tr><td>0.1</td><td>2.62</td><td>2.94</td><td>?</td></tr>
<tr><td>0.2</td><td>2.48</td><td>2.61</td><td>+5.2</td></tr>
<tr><td>0.3</td><td>2.55</td><td>2.50</td><td>&minus;2.0</td></tr>
<tr><td>0.4</td><td>2.60</td><td>2.39</td><td>&minus;8.1</td></tr>
<tr><td>0.5</td><td>2.47</td><td>2.15</td><td>?</td></tr>
<tr><td>0.6</td><td>2.53</td><td>2.13</td><td>&minus;15.8</td></tr>
</tbody></table></div>
<ol>
<li>Calculate the two missing values. Explain why the student calculates percentage change instead of just comparing final masses.</li>
<li>Which solutions were hypotonic to the potato cells, and which were hypertonic? Explain the mass changes in terms of osmosis.</li>
<li>Estimate the solute concentration inside the potato cells. Explain how you got your estimate and what graph you would draw to find it.</li>
<li>The core in pure water gained 20% of its mass, but its cells did not burst. Animal cells in pure water would burst. Explain the difference.</li>
<li>Why must the cores be blotted dry before each weighing?</li>
</ol>`,
    hints: [
      "% change = (final &minus; initial) &divide; initial &times; 100.",
      "Where does the % change switch from positive to negative? At that concentration there is no net movement of water.",
      "Plant cells have a structure outside the cell membrane that animal cells lack."
    ],
    answer: `<p><strong>a.</strong> 0.1 mol/L: (2.94 &minus; 2.62) &divide; 2.62 &times; 100 = <strong>+12.2%</strong>. 0.5 mol/L: (2.15 &minus; 2.47) &divide; 2.47 &times; 100 = <strong>&minus;13.0%</strong>. The cores started with different masses (2.47 to 2.62 g), so comparing grams is not fair. Percentage change compares each core with its own starting mass.</p>
<p><strong>b.</strong> <strong>Hypotonic</strong> (cores gained mass): 0.0, 0.1 and 0.2 mol/L. These solutions had a lower solute concentration (and higher water concentration) than the cytoplasm, so there was a net movement of water <em>into</em> the cells by osmosis. <strong>Hypertonic</strong> (cores lost mass): 0.3 to 0.6 mol/L. These had a higher solute concentration than the cells, so there was a net movement of water <em>out</em> of the cells. The further a solution was from the cells' own concentration, the bigger the change.</p>
<p><strong>c.</strong> About <strong>0.27 mol/L</strong>. The cells are isotonic with the solution that causes 0% change (no net water movement). The change switches from +5.2% at 0.2 mol/L to &minus;2.0% at 0.3 mol/L, so 0% lies between them, closer to 0.3 (0.2 + 0.1 &times; 5.2 &divide; 7.2 &asymp; 0.27). Draw a <strong>line graph</strong> (or a scatter plot with a line of best fit) of % change (y) against sucrose concentration (x), since concentration is continuous, and read where the line crosses 0%.</p>
<p><strong>d.</strong> Plant cells have a <strong>cell wall</strong> made of cellulose. As water enters, the cell swells and presses against the wall, which pushes back and stops it from expanding further. The cell becomes firm (turgid) but does not burst. Animal cells have only a flexible cell membrane, so in a strongly hypotonic solution they keep taking in water until they burst (lysis).</p>
<p><strong>e.</strong> Solution clinging to the outside of a core adds mass that is not part of the potato, making the mass change inaccurate. Blotting the same way every time removes this error.</p>`,
    marks: 6
  },
  {
    id: "xu20",
    lesson: "1.10",
    level: "extend",
    tier: "extra",
    title: "IV bags and oral rehydration: tonicity saves lives",
    prompt: `<p><em>Parts c and d go beyond the slides.</em></p>
<p>Hospitals give fluids directly into a vein through an IV. The most common IV fluid is "normal saline", 0.9% NaCl, which has about the same solute concentration as blood plasma.</p>
<ol>
<li>A new nurse suggests using pure sterile water for an IV instead. Explain what would happen to the patient's red blood cells.</li>
<li>Explain why 0.9% saline is safe. Does "no net movement" mean water stops crossing the red blood cell membrane?</li>
<li>A patient with a head injury has swollen brain tissue. Doctors give a small, carefully controlled amount of 3% NaCl. Explain how this reduces the swelling, and why giving too much would be dangerous.</li>
<li>Cholera causes severe watery diarrhea and can kill by dehydration within a day. The World Health Organization's <strong>oral rehydration solution</strong> (ORS), water with a precise amount of salt and glucose, has saved millions of lives. Cells lining the intestine have a carrier protein that moves Na<sup>+</sup> and glucose into the cell <em>together</em>. Explain why water with salt and glucose rehydrates a patient better than plain water.</li>
</ol>`,
    hints: [
      "Pure water is hypotonic to red blood cells. Which way does water move, and what stops a plant cell from bursting that a red blood cell lacks?",
      "At equilibrium, water molecules keep moving. Think about the word <em>net</em>.",
      "Water follows solutes. If the gut cells absorb Na<sup>+</sup> and glucose, what happens to the solute concentration inside the body compared with the gut?"
    ],
    answer: `<p><strong>a.</strong> Pure water is <strong>hypotonic</strong> to red blood cells: it has a lower solute concentration than their cytoplasm. Water would move into the cells by osmosis, and with no cell wall to stop them, they would swell and burst (<span class="term">hemolysis</span>). The patient would lose O<sub>2</sub>-carrying cells, and the released cell contents can damage organs such as the kidneys.</p>
<p><strong>b.</strong> 0.9% saline is <strong>isotonic</strong> to blood cells, so there is no net movement of water, and the cells keep their normal size and shape. Water still crosses the membrane in both directions, but at equal rates (a dynamic equilibrium), so the amount inside each cell stays the same.</p>
<p><strong>c.</strong> 3% NaCl is <strong>hypertonic</strong>. It raises the solute concentration of the blood, so water moves by osmosis out of the swollen brain tissue into the blood, and the swelling goes down. Too much would make the blood strongly hypertonic to cells all over the body: they would lose too much water and shrivel (crenation in red blood cells), and brain cells that shrink too fast can be badly damaged. So doctors give it slowly and check blood salt levels often.</p>
<p><strong>d.</strong> The gut absorbs water only by osmosis, following solutes. In cholera, the bacterium's toxin forces gut cells to pour Cl<sup>&minus;</sup> (through CFTR, the channel missing in cystic fibrosis), salt and water into the gut, so plain water is poorly absorbed. With ORS, the intestinal cells use their Na<sup>+</sup>&ndash;glucose carrier to take in Na<sup>+</sup> and glucose together. This raises the solute concentration inside the cells and the body compared with the gut contents, so water follows by osmosis into the body. Glucose is the key: the carrier moves Na<sup>+</sup> only when glucose comes with it, and this carrier keeps working in cholera. (The cell uses ATP in the Na<sup>+</sup>/K<sup>+</sup> pump to keep Na<sup>+</sup> low inside, and Na<sup>+</sup> flowing back in down its gradient drags glucose along. This is a form of active transport.)</p>`,
    marks: 5
  },
  {
    id: "xu21",
    lesson: "1.11",
    level: "apply",
    tier: "essential",
    title: "Pick the right graph",
    prompt: `<p>Six data sets from biology investigations:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>#</th><th>Data set</th></tr></thead><tbody>
<tr><td>1</td><td>Rate of O<sub>2</sub> production by catalase measured at pH 3, 5, 7, 9 and 11</td></tr>
<tr><td>2</td><td>Average number of mitochondria per cell in muscle, liver, skin and fat cells</td></tr>
<tr><td>3</td><td>Height and arm span of 30 students in your class</td></tr>
<tr><td>4</td><td>Mass of a potato core in salt water, measured every 5 minutes for 1 hour</td></tr>
<tr><td>5</td><td>Percentage of A, T, G and C in salmon DNA</td></tr>
<tr><td>6</td><td>Resting heart rate and hours of exercise per week for 40 adults</td></tr>
</tbody></table></div>
<ol>
<li>For each data set, identify the independent variable (x-axis) and dependent variable (y-axis), and choose a bar graph, line graph or scatter plot. Give a reason for each choice.</li>
<li>For data set 6, what correlation would you expect? What would it mean if the points were tightly clustered around the trend line instead of widely scattered?</li>
<li>A student plots data set 2 as a line graph, joining the points for muscle, liver, skin and fat. Explain the error.</li>
</ol>`,
    hints: [
      "Bar graph: separate categories side by side. Line graph: continuous change in a sequence (such as time). Scatter plot: relationship between two measured variables.",
      "Is there a value halfway between \"muscle\" and \"liver\"? Is there a value halfway between pH 5 and pH 7?",
      "Distance of the points from the trend line tells you the strength of the relationship."
    ],
    answer: `<p><strong>a.</strong></p>
<div class="table-wrap"><table class="data"><thead><tr><th>#</th><th>x (independent)</th><th>y (dependent)</th><th>Graph</th><th>Reason</th></tr></thead><tbody>
<tr><td>1</td><td>pH</td><td>Rate of O<sub>2</sub> production</td><td>Line</td><td>pH is continuous; the line shows how rate changes across the range and helps locate the optimum.</td></tr>
<tr><td>2</td><td>Cell type</td><td>Mean number of mitochondria</td><td>Bar</td><td>Cell types are separate categories, compared side by side.</td></tr>
<tr><td>3</td><td>Height</td><td>Arm span</td><td>Scatter</td><td>Looks for a relationship between two measured variables; each student is a separate point, not a sequence. (Either variable could go on x.)</td></tr>
<tr><td>4</td><td>Time</td><td>Mass of core</td><td>Line</td><td>Continuous change over time, in sequential order.</td></tr>
<tr><td>5</td><td>Base</td><td>Percentage</td><td>Bar</td><td>A, T, G and C are separate categories.</td></tr>
<tr><td>6</td><td>Hours of exercise</td><td>Resting heart rate</td><td>Scatter</td><td>Looks for a correlation between two variables across many separate people.</td></tr>
</tbody></table></div>
<p><strong>b.</strong> A <strong>negative correlation</strong>: as exercise increases, resting heart rate tends to decrease (a trained heart pumps more blood per beat, so it needs fewer beats). If the points are tightly clustered around the trend line, the relationship is <strong>strong</strong>; exercise predicts heart rate well. If they are widely scattered, the relationship is <strong>weak</strong>, and other factors (age, genetics, health) matter a lot.</p>
<p><strong>c.</strong> A line joining points says the variable changes continuously from one point to the next, so values between points have meaning. Cell types are discrete categories: there is no cell "halfway between muscle and liver", and the order of the categories is arbitrary, so the slope of each line segment means nothing. The data should be shown as a <strong>bar graph</strong>.</p>`,
    marks: 6
  },
  {
    id: "xu22",
    lesson: "1.11",
    level: "extend",
    tier: "extra",
    title: "Warm lakes, low oxygen: correlation or cause?",
    prompt: `<p><em>This goes beyond the slides.</em></p>
<p>An environmental science class measures surface water temperature and dissolved oxygen (O<sub>2</sub>) in 10 Ontario lakes at different times between May and August.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Lake</th><th>Water temperature (&deg;C)</th><th>Dissolved O<sub>2</sub> (mg/L)</th></tr></thead><tbody>
<tr><td>A</td><td>6</td><td>12.1</td></tr>
<tr><td>B</td><td>9</td><td>11.0</td></tr>
<tr><td>C</td><td>11</td><td>10.9</td></tr>
<tr><td>D</td><td>14</td><td>9.6</td></tr>
<tr><td>E</td><td>16</td><td>9.8</td></tr>
<tr><td>F</td><td>18</td><td>8.9</td></tr>
<tr><td>G</td><td>20</td><td>4.2</td></tr>
<tr><td>H</td><td>22</td><td>8.1</td></tr>
<tr><td>I</td><td>25</td><td>7.7</td></tr>
<tr><td>J</td><td>27</td><td>7.2</td></tr>
</tbody></table></div>
<ol>
<li>What type of graph should the class use? Which variable goes on each axis?</li>
<li>Describe the correlation (direction and strength).</li>
<li>Identify the outlier. Suggest a biological reason for it, and say whether the class should delete it.</li>
<li>A student concludes: "Warmer water causes lower oxygen." Does this data set prove it? Explain the difference between correlation and causation, name a possible confounding variable, and describe a controlled experiment that could test the claim.</li>
</ol>`,
    hints: [
      "Each point is a separate lake, not a sequence in time.",
      "Look for one point far from the trend. What could use up O<sub>2</sub> in a lake? Think about algae and decomposers.",
      "A confounding variable changes along with temperature and might be the real cause. In an experiment, you change only one variable."
    ],
    answer: `<p><strong>a.</strong> A <strong>scatter plot</strong>, because the class is looking for a relationship between two measured variables, and each point is a separate lake rather than a sequence. Temperature (the suspected cause) goes on the x-axis and dissolved O<sub>2</sub> on the y-axis, with a trend line.</p>
<p><strong>b.</strong> A <strong>strong negative correlation</strong>: as temperature rises, dissolved O<sub>2</sub> falls (from 12.1 mg/L at 6 &deg;C to 7.2 mg/L at 27 &deg;C). Apart from one lake, the points lie close to the trend line, which is what makes the correlation strong.</p>
<p><strong>c.</strong> <strong>Lake G</strong> (20 &deg;C, 4.2 mg/L) is far below the trend; about 8.5 mg/L would be expected. A likely reason: fertilizer or sewage runoff fed an algal bloom, and as the algae die, decomposing bacteria use up large amounts of O<sub>2</sub> in cellular respiration. The class should <strong>not</strong> delete it just because it doesn't fit. They should report it, check for measurement error, and investigate the lake; outliers often reveal real biology.</p>
<p><strong>d.</strong> No. A correlation shows that two variables change together, not that one causes the other. A <span class="term">confounding variable</span> could be responsible: for example, warmer lakes might also be shallower, hold more algae, or receive more nutrient runoff, and any of these could lower O<sub>2</sub>. To test the claim, take one well-mixed sample of lake water, filter out the organisms, and divide it into containers held at different temperatures (such as 5, 10, 15, 20, 25 and 30 &deg;C), keeping everything else the same. Bubble air through each until it is saturated, then measure dissolved O<sub>2</sub>, with several trials per temperature. If O<sub>2</sub> still falls as temperature rises, temperature is a cause. (It is: O<sub>2</sub> is nonpolar and only slightly soluble in water, and as water warms, the faster-moving O<sub>2</sub> molecules escape more easily.)</p>`,
    marks: 5
  }
);

window.EXT.push(
  {
    id: "xu23",
    lesson: "mix",
    level: "apply",
    tier: "likely",
    title: "Design it: does pH affect amylase?",
    prompt: `<p>Salivary amylase starts digesting starch in your mouth. Iodine solution is yellow-brown, but turns blue-black when starch is present. You have: 1% starch solution, amylase solution, buffer solutions at pH 3, 5, 7, 9 and 11, iodine solution, a spotting tile, test tubes, a 37 &deg;C water bath, pipettes and a timer.</p>
<p>Method idea: mix starch, buffer and amylase in a tube. Every 30 seconds, put one drop of the mixture onto a drop of iodine on the spotting tile. Record the time when the iodine no longer turns blue-black.</p>
<ol>
<li>Write a testable question and a hypothesis with a reason. Name the main product of the reaction.</li>
<li>Identify the independent and dependent variables, three controlled variables, and a suitable control tube.</li>
<li>Your results are times in seconds. Explain how to turn them into a reaction rate, and describe the graph you would draw.</li>
<li>Why should each pH be tested at least three times?</li>
<li>Saliva is about pH 7, but the stomach is about pH 2. Predict what happens to salivary amylase when swallowed food reaches the stomach, and explain.</li>
</ol>`,
    hints: [
      "Amylase hydrolyzes the &alpha;(1&ndash;4) glycosidic linkages in starch. When the iodine stays yellow-brown, the starch is gone.",
      "Controlled variables are everything except pH that could change the time. A control tube shows what happens with no active enzyme.",
      "A shorter time means a faster reaction, so rate = 1 &divide; time."
    ],
    answer: `<p><strong>a.</strong> Question: How does pH affect the rate at which salivary amylase breaks down starch? Hypothesis: If pH is changed, the rate will be highest near pH 7 and much lower at pH 3 and 11, because amylase works in saliva (about pH 7), so its optimum should be near 7. Far from the optimum, the change in H<sup>+</sup> alters the charges on R groups, breaking the bonds that hold the active site's shape, so starch fits poorly. Amylase hydrolyzes the &alpha;(1&ndash;4) glycosidic linkages of starch, producing mainly <strong>maltose</strong> (a disaccharide).</p>
<p><strong>b.</strong> Independent variable: pH. Dependent variable: time until the iodine no longer turns blue-black (starch fully digested). Controlled variables (any three): volume and concentration of starch, volume and concentration of amylase, temperature (all tubes pre-warmed in the 37 &deg;C bath), volume of buffer, drop size, sampling interval. Control: at each pH, a tube with water (or boiled amylase) instead of amylase. It should stay blue-black throughout, showing that the starch disappears only because of active enzyme.</p>
<p><strong>c.</strong> A shorter time means a faster reaction, so calculate <strong>rate = 1 &divide; time</strong> (e.g., 1 &divide; 120 s = 0.0083 s<sup>&minus;1</sup>). Draw a <strong>line graph</strong> of rate (y) against pH (x), since pH is continuous. Expect a peak near pH 7, falling on both sides. If the starch is never digested at some pH, record the rate as about zero.</p>
<p><strong>d.</strong> Repeating reduces the effect of random errors (a bigger drop, a timing delay, misjudging the colour). The mean of three or more trials is more reliable, and an unusual result is easier to spot.</p>
<p><strong>e.</strong> At pH 2, salivary amylase is far from its optimum. The high H<sup>+</sup> concentration changes the charges on its R groups and breaks the bonds holding its 3-D shape, so it <strong>denatures</strong> and stops digesting starch. Starch digestion resumes in the small intestine, where amylase from the pancreas works at a near-neutral pH.</p>`,
    marks: 6
  },
  {
    id: "xu24",
    lesson: "mix",
    level: "extend",
    tier: "extra",
    title: "Radioactive tracers: is the gene DNA or protein?",
    prompt: `<p><em>This goes beyond the slides.</em></p>
<p>In 1952, Alfred Hershey and Martha Chase used radioisotopes to find out whether genes are made of DNA or protein. They studied a virus (a bacteriophage) that is just a protein coat with DNA inside. To reproduce, it attaches to a bacterium and injects its genetic material, and the bacterium then builds new viruses.</p>
<ul>
<li>Batch 1: viruses grown with radioactive sulfur-35 (<sup>35</sup>S).</li>
<li>Batch 2: viruses grown with radioactive phosphorus-32 (<sup>32</sup>P).</li>
</ul>
<p>Each batch was allowed to infect bacteria. After a few minutes, the mixture was spun in a blender to knock the virus coats off the bacteria, then centrifuged: the heavy bacteria formed a pellet at the bottom, and the light virus coats stayed in the liquid. Approximate results:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Label</th><th>Radioactivity in pellet (bacteria)</th><th>Radioactivity in liquid (virus coats)</th></tr></thead><tbody>
<tr><td><sup>35</sup>S</td><td>about 20%</td><td>about 80%</td></tr>
<tr><td><sup>32</sup>P</td><td>about 70%</td><td>about 30%</td></tr>
</tbody></table></div>
<ol>
<li><sup>35</sup>S and <sup>32</sup>P are radioisotopes. Explain what makes them isotopes of ordinary sulfur and phosphorus, and why the virus uses them exactly like ordinary atoms.</li>
<li>Explain why <sup>35</sup>S labels only the protein and <sup>32</sup>P labels mostly the DNA. Refer to the elements and functional groups in each macromolecule.</li>
<li>What do the results show? Explain your reasoning.</li>
<li>Why would radioactive carbon-14 have been useless for this experiment?</li>
</ol>`,
    hints: [
      "Isotopes have the same number of protons but different numbers of neutrons. Which particles decide how an atom bonds?",
      "Which macromolecule contains sulfur in some of its R groups? Which has a phosphate group in every subunit?",
      "Carbon is found in every macromolecule."
    ],
    answer: `<p><strong>a.</strong> Isotopes have the same number of protons but different numbers of neutrons. Ordinary phosphorus is <sup>31</sup>P (15 protons, 16 neutrons); <sup>32</sup>P has 15 protons and 17 neutrons. Ordinary sulfur is mostly <sup>32</sup>S (16 protons, 16 neutrons); <sup>35</sup>S has 16 protons and 19 neutrons. Bonding depends on electrons, and the number of electrons matches the number of protons, so each isotope forms exactly the same bonds and cells use it normally. Their nuclei are unstable, so they are <span class="term">radioisotopes</span>: they decay and give off radiation, which lets scientists detect where they end up. This is how a <span class="term">tracer</span> works.</p>
<p><strong>b.</strong> Proteins contain sulfur in the R groups of the amino acids cysteine (a sulfhydryl group, &ndash;SH) and methionine. DNA contains no sulfur, so <sup>35</sup>S ends up only in the protein coat. DNA has a <strong>phosphate group</strong> in every nucleotide, forming its sugar&ndash;phosphate backbone, while these proteins contain little or no phosphorus, so <sup>32</sup>P ends up almost entirely in the DNA.</p>
<p><strong>c.</strong> Most of the <sup>35</sup>S (protein) stayed in the liquid with the coats, so the protein stayed <em>outside</em> the bacteria. Most of the <sup>32</sup>P (DNA) was in the pellet, so the DNA went <em>inside</em>. The material that enters the bacterium is what directs it to build new viruses, so the genetic material is <strong>DNA</strong>, not protein. The small amounts in the "wrong" place come from coats still stuck to bacteria and viruses that had not yet injected their DNA. (Hershey and Chase also found <sup>32</sup>P, but almost no <sup>35</sup>S, in the new viruses.)</p>
<p><strong>d.</strong> Carbon is in <em>both</em> proteins and DNA (as are hydrogen, oxygen and nitrogen). Carbon-14 would label both, so the radioactivity could not tell them apart. A useful tracer must be found in only one of the molecules being compared.</p>`,
    marks: 5
  },
  {
    id: "xu25",
    lesson: "mix",
    level: "apply",
    tier: "likely",
    title: "Following insulin: one hormone, the whole unit",
    prompt: `<p>After a meal, your blood glucose rises. Beta cells in your pancreas respond by releasing <strong>insulin</strong>, a small protein hormone made of 51 amino acids in two chains. Insulin travels in the blood to muscle and liver cells, which then take up glucose. The liver stores much of it as glycogen.</p>
<ol>
<li>Trace insulin from its gene to the blood. Name each organelle in order and state its role.</li>
<li>Insulin does not enter its target cells, yet it changes what they do. Explain why it cannot cross the cell membrane, and how it still delivers its message.</li>
<li>Glucose enters muscle cells through a carrier protein without using ATP. Name this type of transport. Why can't glucose simply diffuse through the phospholipid bilayer?</li>
<li>The liver links glucose into glycogen. Name the type of reaction and the bond formed. Explain why storing thousands of glucose units as one glycogen molecule is better for the cell than storing them as free glucose.</li>
<li>People with type 1 diabetes must inject insulin; it cannot be taken as a pill. Explain why.</li>
</ol>`,
    hints: [
      "Proteins for export go: nucleus &rarr; ribosomes on rough ER &rarr; Golgi &rarr; vesicles &rarr; ? Insulin is stored and released only when a signal arrives.",
      "Insulin is large, with many polar and charged groups. What does the hydrophobic middle of the bilayer do to such molecules? Recall the adrenaline example from class: it binds a receptor on the outside of the cell.",
      "Free glucose molecules are solutes. What would thousands of extra solute particles do to the cell's water balance? For e, think about what your stomach does to proteins."
    ],
    answer: `<p><strong>a.</strong> <strong>Nucleus:</strong> the insulin gene is copied into mRNA, which leaves through a nuclear pore. <strong>Ribosomes on the rough ER:</strong> they read the mRNA and join amino acids with peptide bonds; the chain enters the rough ER and folds. <strong>Transport vesicles</strong> carry it to the <strong>Golgi apparatus</strong>, which modifies and packages it (the insulin precursor is cut into its final two-chain form in the Golgi and the vesicles that bud from it). <strong>Secretory vesicles</strong> store insulin until blood glucose rises, then fuse with the cell membrane and release it into the blood by <span class="term">regulated exocytosis</span>.</p>
<p><strong>b.</strong> Insulin is a large protein with many polar and charged R groups, so the hydrophobic interior of the bilayer blocks it. Instead, it binds a specific <strong>receptor protein</strong> on the outside of the target cell. Binding changes the receptor's shape, which sets off reactions inside the cell (<span class="term">signal transduction</span>), such as moving more glucose carrier proteins into the membrane.</p>
<p><strong>c.</strong> <strong>Facilitated diffusion</strong>: the carrier protein changes shape to move glucose down its concentration gradient. Glucose cannot cross by simple diffusion because it is polar (five &ndash;OH groups) and fairly large, and the nonpolar tails in the middle of the bilayer block it.</p>
<p><strong>d.</strong> <strong>Dehydration synthesis</strong>, forming &alpha;(1&ndash;4) and &alpha;(1&ndash;6) <strong>glycosidic linkages</strong> and releasing one water per link. Osmosis depends on the number of dissolved particles. Thousands of free glucose molecules would make the cytoplasm strongly hypertonic, so water would rush in and the cell could swell and burst. One barely soluble glycogen molecule stores the same glucose with almost no osmotic effect.</p>
<p><strong>e.</strong> Insulin is a protein. Stomach acid (about pH 2) would denature it, and protease enzymes would hydrolyze its peptide bonds into amino acids, so it would be digested like food before reaching the blood. Injection delivers it intact.</p>`,
    marks: 6
  }
);
