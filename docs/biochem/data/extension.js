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
