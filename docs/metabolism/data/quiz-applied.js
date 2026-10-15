// Applied quiz: homework extensions + new scenarios (use facts in new situations, not recall).
// Class values: NADH ≈ 3 ATP, FADH2 ≈ 2 ATP, max 38, realistic 30–32. "extra" tier = beyond the slides.
window.QUIZ_APPLIED = [

// ---------- 2.01 Intro to Metabolism ----------
{ id: "a001", lesson: "2.01", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A food chemist burns 1 mol of glucose in a calorimeter and measures 686 kcal released. If the same mole of glucose were completely oxidized by cellular respiration in your cells, how would the TOTAL free energy released compare?`,
  options: [
    `The same total (686 kcal), but released in many small steps so part of it can be captured as ATP`,
    `Much less, because enzymes lower the activation energy, so less energy is released overall`,
    `Much more, because respiration also releases the energy stored in the ATP it makes`,
    `About 2% of it, because cells only capture 2 ATP from each glucose molecule`],
  answer: 0,
  explain: `The overall reaction (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O) is the same, so the total free energy change is the same. What differs is the path: burning has one big activation energy and releases everything at once as heat and light; respiration uses many small enzyme-controlled steps, so the energy can be captured by carriers (NADH, FADH<sub>2</sub>) and then ATP. The tempting wrong answer mixes up two ideas: enzymes lower the activation energy, but they do not change how much energy the reaction releases.` },

{ id: "a002", lesson: "2.01", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `In the Krebs cycle reaction malate + NAD<sup>+</sup> → oxaloacetate + NADH + H<sup>+</sup>, malate acts as the oxidizing agent.`,
  answer: false,
  explain: `Track the electrons. NAD<sup>+</sup> gains electrons (becomes NADH), so it is reduced, and that makes it the oxidizing agent. Malate loses electrons (it is oxidized to oxaloacetate), so malate is the <strong>reducing agent</strong>: the electron donor. LEO says GER: the molecule that Loses Electrons is Oxidized, and the donor is called the reducing agent because it reduces something else.` },

{ id: "a003", lesson: "2.01", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `The sodium–potassium pump moves Na<sup>+</sup> out of a nerve cell even though Na<sup>+</sup> is already more concentrated outside. Which description of how ATP powers this is most accurate?`,
  options: [
    `ATP is synthesized from ADP + P<sub>i</sub>, and the energy released by that synthesis pushes the ions out`,
    `ATP hydrolysis transfers a phosphate to the pump protein, changing its shape so it moves Na<sup>+</sup> against its gradient`,
    `ATP binds the Na<sup>+</sup> ions directly and carries them across the membrane by simple diffusion`,
    `The heat released by ATP hydrolysis speeds up the diffusion of Na<sup>+</sup> out of the cell`],
  answer: 1,
  explain: `This is energy coupling. The exergonic hydrolysis of ATP (ATP → ADP + P<sub>i</sub>) drives an endergonic process (moving ions against their gradient). The phosphate is transferred to the carrier protein (phosphorylation), which changes its shape. The first option has it backwards: ATP <em>synthesis</em> is endergonic, it uses energy rather than releasing it. Heat alone cannot move ions against a gradient.` },

{ id: "a004", lesson: "2.01", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `After a big pasta dinner, your liver links thousands of glucose molecules into glycogen. Later, during a run, it breaks the glycogen back down. How should these two processes be classified?`,
  options: [
    `Both are catabolic, because both processes involve glucose molecules`,
    `Glycogen synthesis is exergonic; glycogen breakdown is endergonic`,
    `Glycogen synthesis is anabolic and endergonic; glycogen breakdown is catabolic and exergonic`,
    `Glycogen synthesis is catabolic, because it removes glucose from the blood`],
  answer: 2,
  explain: `Building a large molecule from small ones is anabolic and needs an energy input (endergonic). Breaking it down is catabolic and releases energy (exergonic). Both are part of metabolism, the sum of all anabolic and catabolic reactions. Which molecule is involved does not decide the category; the direction (build up vs break down) does.` },

{ id: "a005", lesson: "2.01", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `During a hard workout your body temperature rises. Which statement best explains where the extra heat comes from?`,
  options: [
    `ATP hydrolysis is endergonic, so it absorbs heat from the muscles and releases it later`,
    `Oxygen combines directly with glucose in the blood, the way a flame burns fuel`,
    `Muscle cells burn ATP molecules as fuel, the way a fire burns wood`,
    `Respiration is not 100% efficient, so respiring faster releases more energy as heat`],
  answer: 3,
  explain: `Only part of glucose's energy is captured in ATP (at most about 40%); the rest is released as heat. Working muscles respire faster, so they release more heat. ATP hydrolysis is exergonic, not endergonic, and glucose is never burned directly in the blood: it is oxidized in small enzyme-controlled steps inside cells.` },

{ id: "a006", lesson: "2.01", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `In the ETC, reduced cytochrome c passes its electrons to complex IV. Which statement about this single step is correct?`,
  options: [
    `Cytochrome c is oxidized, so it is acting as the reducing agent`,
    `Cytochrome c is reduced, so it is acting as the oxidizing agent`,
    `Complex IV is oxidized, because it is the electron acceptor`,
    `Neither changes, because only H<sup>+</sup> ions are transferred`],
  answer: 0,
  explain: `Cytochrome c loses electrons, so it is oxidized (LEO). The donor is called the reducing agent because it reduces complex IV. Complex IV gains electrons, so it is reduced and is the oxidizing agent. This is the ETC rule in action: each carrier is reduced by the one before it and oxidized by the one after it.` },

{ id: "a007", lesson: "2.01", type: "tf", kind: "applied", tier: "essential", level: 2,
  q: `Adding a phosphate to glucose is endergonic on its own, but when it is coupled to ATP hydrolysis in step 1 of glycolysis, the overall coupled reaction is exergonic.`,
  answer: true,
  explain: `Energy coupling: hydrolyzing ATP releases more free energy than phosphorylating glucose requires, so the combined reaction has a net release of energy and proceeds. This is exactly how ATP drives endergonic steps, by transferring its terminal phosphate (phosphorylation).` },

// ---------- 2.02 Glycolysis ----------
{ id: "a008", lesson: "2.02", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Seven glucose molecules go through glycolysis. What is produced in total?`,
  options: [
    `7 pyruvate, 14 net ATP, 7 NADH`,
    `14 pyruvate, 14 net ATP, 14 NADH`,
    `14 pyruvate, 28 net ATP, 14 NADH`,
    `14 pyruvate, 14 net ATP, 14 NADH, 14 CO<sub>2</sub>`],
  answer: 1,
  explain: `Per glucose: 2 pyruvate, net 2 ATP (4 made − 2 invested) and 2 NADH. Multiply by 7: 14, 14, 14. "28 ATP" is the gross count; it forgets the 14 ATP invested in steps 1 and 3. Glycolysis releases no CO<sub>2</sub>; the first CO<sub>2</sub> comes off in pyruvate oxidation.` },

{ id: "a009", lesson: "2.02", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `An amylose chain of 50 glucose monomers is hydrolyzed and all 50 glucose go through glycolysis. How many ATP are invested, how many are made, and what is the net?`,
  options: [
    `50 invested, 100 made, net 50`,
    `100 invested, 100 made, net 0`,
    `100 invested, 200 made, net 100`,
    `0 invested, 200 made, net 200`],
  answer: 2,
  explain: `Each glucose uses 2 ATP (steps 1 and 3) and makes 4 ATP (steps 7 and 10, each happening twice). 50 × 2 = 100 invested, 50 × 4 = 200 made, net 100. Same reasoning as the worksheet's 120-glucose amylose chain (480 made, 240 used, 240 pyruvate, 240 NADH). The last option forgets the investment phase.` },

{ id: "a010", lesson: "2.02", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A patient lacks aldolase, the enzyme that splits fructose-1,6-bisphosphate into DHAP and G3P. Which set of molecules would build up in the cytoplasm?`,
  options: [
    `DHAP, G3P and NADH`,
    `Pyruvate, ATP and NADH`,
    `Glucose-6-phosphate, ATP and NAD<sup>+</sup> only`,
    `Fructose-1,6-bisphosphate, ADP and NAD<sup>+</sup>`],
  answer: 3,
  explain: `The pathway stops at step 4. Steps 1 and 3 still run (ATP → ADP), so fructose-1,6-bisphosphate piles up and ADP accumulates. Nothing reaches step 6, so NAD<sup>+</sup> is not reduced and builds up; nothing reaches steps 7 and 10, so ADP is not turned back into ATP. (The class review key answer is "ADP and NAD<sup>+</sup>"; the enzyme's substrate also accumulates.) DHAP and G3P are the missing enzyme's <em>products</em>, so they would be low, not high.` },

{ id: "a011", lesson: "2.02", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A mutation makes phosphofructokinase (PFK) completely inactive. Which molecule accumulates, and what happens to the ATP investment?`,
  options: [
    `Fructose-6-phosphate accumulates; only the step 1 ATP is spent and no ATP is made`,
    `Fructose-1,6-bisphosphate accumulates; both investment ATP are spent`,
    `Pyruvate accumulates; ATP is still made but is no longer invested`,
    `DHAP accumulates; glycolysis continues along only one branch`],
  answer: 0,
  explain: `PFK catalyzes step 3 (F6P → F1,6BP). Its substrate, fructose-6-phosphate, builds up (and so does glucose-6-phosphate behind it). Hexokinase in step 1 still spends one ATP per glucose, but nothing reaches the payoff phase, so no ATP or NADH is made. Fructose-1,6-bisphosphate is PFK's <em>product</em>, so it would be low.` },

{ id: "a012", lesson: "2.02", type: "tf", kind: "applied", tier: "likely", level: 4,
  q: `If triose phosphate isomerase were missing (so DHAP cannot become G3P), glycolysis of one glucose would give a net ATP yield of zero.`,
  answer: true,
  explain: `Steps 1 and 3 still invest 2 ATP. Aldolase makes one DHAP and one G3P, but only the G3P can continue. That single G3P goes through steps 6–10 once, making 2 ATP (one at step 7, one at step 10) and 1 NADH. 2 made − 2 invested = 0 net, and DHAP piles up. This shows why step 5 matters: it is what lets everything after step 5 happen twice.` },

{ id: "a013", lesson: "2.02", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `A researcher puts purified mitochondria (no cytoplasm) in a flask with glucose, ADP, P<sub>i</sub>, NAD<sup>+</sup> and O<sub>2</sub>. O<sub>2</sub> use stays near zero. When pyruvate is added, O<sub>2</sub> use jumps. Best explanation?`,
  options: [
    `Glucose is too large to cross the outer membrane, but mitochondria could split it once inside`,
    `Glycolysis enzymes are in the cytoplasm, so the mitochondria cannot break down glucose; they can only use pyruvate`,
    `Glucose inhibits the ETC until pyruvate is added to remove the glucose`,
    `Mitochondria need ATP made from glucose before they can take up any oxygen`],
  answer: 1,
  explain: `Glycolysis happens in the cytosol. Without the cytoplasm, nothing turns glucose into pyruvate, so no fuel reaches pyruvate oxidation, the Krebs cycle or the ETC, and no O<sub>2</sub> is used. Pyruvate can be moved into the matrix and oxidized → NADH and FADH<sub>2</sub> → ETC → O<sub>2</sub> is consumed. The first option wrongly assumes mitochondria contain the glycolysis enzymes.` },

{ id: "a014", lesson: "2.02", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Cells are given glucose in which every carbon is radioactive (<sup>14</sup>C). They are stopped right after glycolysis finishes. Where is the radioactive carbon?`,
  options: [
    `Half in pyruvate and half in CO<sub>2</sub>`,
    `In the NADH and ATP that were produced`,
    `All of it in the two pyruvate molecules`,
    `In the water made during glycolysis`],
  answer: 2,
  explain: `Glycolysis splits the 6-carbon glucose into two 3-carbon pyruvate molecules and releases no CO<sub>2</sub>. NADH and ATP don't contain glucose's carbons (they carry electrons and phosphate). The 2 H<sub>2</sub>O made at step 9 contain no carbon. So all 6 labelled carbons are in the 2 pyruvate, which is also where most of glucose's bond energy still is.` },

{ id: "a015", lesson: "2.02", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A drug blocks hexokinase in liver cells, so glucose is no longer converted to glucose-6-phosphate. Why does glucose uptake by these cells slow down?`,
  options: [
    `Glucose-6-phosphate is needed to open the glucose transporter`,
    `Without spending ATP, the cell has too much energy to take in fuel`,
    `Free glucose is converted to fructose instead, which blocks transport`,
    `Free glucose builds up inside, so the gradient into the cell disappears`],
  answer: 3,
  explain: `Glucose enters by moving down its concentration gradient through transporters. Normally step 1 turns glucose into G6P immediately, which traps it (transporters don't recognize G6P) and keeps free glucose inside the cell low. If hexokinase is blocked, free glucose accumulates inside until inside ≈ outside, and net diffusion into the cell stops.` },

{ id: "a016", lesson: "2.02", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `A cell's cytoplasm runs short of free inorganic phosphate (P<sub>i</sub>), but it still has plenty of ATP. Which glycolysis step is limited <em>directly</em> by the shortage?`,
  options: [
    `Step 6, where G3P dehydrogenase adds P<sub>i</sub> from the cytoplasm to make 1,3-bisphosphoglycerate`,
    `Step 1, where hexokinase adds a phosphate group to glucose`,
    `Step 3, where PFK adds a phosphate group to fructose-6-phosphate`,
    `Step 10, where pyruvate kinase removes a phosphate group from PEP`],
  answer: 0,
  explain: `Steps 1 and 3 take their phosphate from ATP, not from the free P<sub>i</sub> pool, and step 10 removes a phosphate. Step 6 is the one step that adds <em>inorganic</em> phosphate from the cytoplasm's "cellular pool" while G3P is oxidized and NAD<sup>+</sup> is reduced. So a P<sub>i</sub> shortage directly limits step 6, and everything after it.` },

{ id: "a017", lesson: "2.02", type: "tf", kind: "applied", tier: "essential", level: 2,
  q: `A mature red blood cell, which has no mitochondria, cannot make any ATP.`,
  answer: false,
  explain: `Glycolysis takes place in the cytoplasm and needs neither O<sub>2</sub> nor mitochondria. Red blood cells make all their ATP this way (net 2 ATP per glucose) and regenerate NAD<sup>+</sup> by lactic acid fermentation. They carry oxygen but do not use it themselves.` },

{ id: "a018", lesson: "2.02", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A cell keeps running glycolysis, but its mitochondria AND its fermentation enzymes are both blocked. Which two problems will soon stop glycolysis?`,
  options: [
    `ATP runs out and glucose runs out`,
    `NAD<sup>+</sup> runs out (all turned into NADH) and pyruvate builds up`,
    `Oxygen runs out and CO<sub>2</sub> builds up`,
    `Too much ATP builds up and shuts down hexokinase`],
  answer: 1,
  explain: `From the worksheet: after glycolysis the cell must regenerate NAD<sup>+</sup> (needed at step 6) and remove pyruvate (its build-up stalls the pathway). Normally the mitochondria take the pyruvate and the ETC regenerates NAD<sup>+</sup>; without O<sub>2</sub>, fermentation does both jobs. With both blocked, glycolysis stalls. Glycolysis doesn't use O<sub>2</sub> or make CO<sub>2</sub>, so those aren't the problem.` },

{ id: "a019", lesson: "2.02", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A flask of muscle cytoplasm (no mitochondria) is given glucose. Which set of changes would you measure in the flask?`,
  options: [
    `O<sub>2</sub> decreases and CO<sub>2</sub> increases`,
    `O<sub>2</sub> decreases, but CO<sub>2</sub> stays the same`,
    `Glucose decreases and pyruvate/lactate increase; O<sub>2</sub> and CO<sub>2</sub> stay the same`,
    `CO<sub>2</sub> increases, but O<sub>2</sub> stays the same`],
  answer: 2,
  explain: `Cytoplasm contains the enzymes for glycolysis (and lactate dehydrogenase) but not the mitochondrial stages. Glycolysis uses glucose but no O<sub>2</sub> and releases no CO<sub>2</sub>; lactic acid fermentation releases no CO<sub>2</sub> either. "CO<sub>2</sub> up, O<sub>2</sub> unchanged" describes yeast doing alcohol fermentation, not animal tissue.` },

{ id: "a020", lesson: "2.02", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `A person inherits a deficiency of pyruvate kinase (step 10 of glycolysis). Their red blood cells rely only on glycolysis for ATP. What is most likely to happen in those cells?`,
  options: [
    `They make extra ATP, because the PEP is stored for later use`,
    `They are unaffected, because red blood cells use the ETC instead`,
    `They make 2 net ATP as usual, because step 7 still makes ATP`,
    `They run short of ATP, because without step 10 glycolysis only breaks even`],
  answer: 3,
  explain: `Step 7 makes 2 ATP per glucose (once per G3P) and step 10 makes the other 2. Without step 10: 2 made − 2 invested = 0 net, and PEP builds up. Red blood cells have no mitochondria, so they have no other source of ATP. (Real pyruvate kinase deficiency makes red blood cells fragile and causes anemia.)` },

{ id: "a021", lesson: "2.02", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `A cell that has turned glucose into pyruvate has already released most of the chemical energy that was stored in the glucose.`,
  answer: false,
  explain: `Glycolysis captures only 2 net ATP and 2 NADH. From the worksheet: at the end of glycolysis, most of glucose's bond energy is still trapped in the two pyruvate molecules. Pyruvate oxidation, the Krebs cycle and the ETC release the rest, which is why aerobic respiration yields up to 38 ATP instead of 2.` },

// ---------- 2.03 Pyruvate Oxidation & Krebs ----------
{ id: "a022", lesson: "2.03", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Five glucose molecules are completely oxidized. How many turns of the Krebs cycle occur, and how many NADH does the Krebs cycle alone make?`,
  options: [
    `10 turns; 30 NADH`,
    `5 turns; 15 NADH`,
    `10 turns; 40 NADH`,
    `5 turns; 30 NADH`],
  answer: 0,
  explain: `Each glucose → 2 pyruvate → 2 acetyl-CoA → 2 turns, so 5 glucose → 10 turns. Each turn makes 3 NADH: 10 × 3 = 30. "40" wrongly includes the 10 NADH from pyruvate oxidation, which is a separate stage. Same idea as the Krebs review: 12 turns → 36 NADH and 12 FADH<sub>2</sub>.` },

{ id: "a023", lesson: "2.03", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A cell oxidizes 4 pyruvate molecules all the way through the Krebs cycle. How many CO<sub>2</sub> are released in total, and where?`,
  options: [
    `8 CO<sub>2</sub>, all of them in the Krebs cycle`,
    `12 CO<sub>2</sub>: 4 in pyruvate oxidation and 8 in the Krebs cycle`,
    `12 CO<sub>2</sub>: 4 in glycolysis and 8 in the Krebs cycle`,
    `6 CO<sub>2</sub>: 2 in pyruvate oxidation and 4 in the Krebs cycle`],
  answer: 1,
  explain: `Each pyruvate (3 C) loses 1 C as CO<sub>2</sub> in pyruvate oxidation; the remaining 2-carbon acetyl group loses 2 CO<sub>2</sub> in one Krebs turn. That's 3 CO<sub>2</sub> per pyruvate × 4 = 12. Carbon check: 4 × 3 C = 12 C → 12 CO<sub>2</sub>. The last option is the per-glucose answer (2 pyruvate), not 4. Glycolysis releases no CO<sub>2</sub>.` },

{ id: "a024", lesson: "2.03", type: "tf", kind: "applied", tier: "essential", level: 2,
  q: `If cells are fed glucose labelled with <sup>14</sup>C, the first radioactive CO<sub>2</sub> is released during glycolysis.`,
  answer: false,
  explain: `Glycolysis releases no CO<sub>2</sub>. The first CO<sub>2</sub> is removed in pyruvate oxidation (decarboxylation by the pyruvate dehydrogenase complex); the rest leave in the Krebs cycle (isocitrate → α-ketoglutarate and α-ketoglutarate → succinyl-CoA). By the end of the Krebs cycle, no carbons of the original glucose remain: all are exhaled as CO<sub>2</sub>.` },

{ id: "a025", lesson: "2.03", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `The poison malonate blocks succinate dehydrogenase. Which outcome is expected?`,
  options: [
    `Citrate cannot form, so acetyl-CoA builds up while succinate stays low`,
    `Only the ETC is affected; the Krebs cycle keeps turning normally`,
    `Succinate builds up, no FADH<sub>2</sub> is made, and with no oxaloacetate regenerated the cycle stops`,
    `Fumarate builds up because it cannot be converted into malate`],
  answer: 2,
  explain: `Succinate dehydrogenase converts succinate → fumarate and reduces FAD → FADH<sub>2</sub>. Block it and its substrate (succinate) piles up while everything downstream (fumarate, malate, oxaloacetate) runs low. Oxaloacetate is needed to accept the next acetyl-CoA, so the cycle stops turning. The trap: the same enzyme is complex II of the ETC, so the ETC is affected <em>too</em>, but the Krebs cycle is hit directly. Fumarate is the product, so it would be low, not high.` },

{ id: "a026", lesson: "2.03", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `A child's cells show the results below compared with normal. Which enzyme is most likely defective?
<table class="data"><thead><tr><th>Measurement</th><th>Compared with normal</th></tr></thead><tbody><tr><td>Glucose</td><td>normal</td></tr><tr><td>Pyruvate</td><td>very high</td></tr><tr><td>Lactate</td><td>very high</td></tr><tr><td>Acetyl-CoA made from glucose</td><td>low</td></tr><tr><td>Blood O<sub>2</sub></td><td>normal</td></tr></tbody></table>`,
  options: [
    `Cytochrome c oxidase (complex IV)`,
    `Lactate dehydrogenase (LDH)`,
    `Phosphofructokinase (PFK)`,
    `Pyruvate dehydrogenase complex (PDH)`],
  answer: 3,
  explain: `Pyruvate is high and acetyl-CoA is low, so the block is between them: pyruvate oxidation, catalyzed by PDH. The extra pyruvate is reduced to lactate by LDH (which also regenerates NAD<sup>+</sup>), so LDH is clearly working. A PFK block would <em>lower</em> pyruvate. A complex IV block (like cyanide in the 7 Deaths case) leaves pyruvate and acetyl-CoA about normal and raises NADH instead.` },

{ id: "a027", lesson: "2.03", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Hydrogen atoms are removed from isocitrate in the Krebs cycle. Where do they end up by the end of aerobic respiration?`,
  options: [
    `In water, after NADH delivers the electrons to the ETC and O<sub>2</sub> combines with H<sup>+</sup>`,
    `In CO<sub>2</sub>, which is released at the same step as the hydrogens`,
    `In ATP, attached to the phosphate groups made by ATP synthase`,
    `In glucose, which is rebuilt from them by gluconeogenesis`],
  answer: 0,
  explain: `Isocitrate → α-ketoglutarate reduces NAD<sup>+</sup> to NADH (+ H<sup>+</sup>). NADH carries the electrons to complex I, and at complex IV ½O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub>O. So the hydrogens (as electrons + protons) end up in water. CO<sub>2</sub> contains no hydrogen. The review key says hydrogens are carried as free protons or by NADH/FADH<sub>2</sub>; this question follows them one step further.` },

{ id: "a028", lesson: "2.03", type: "mcq", kind: "applied", tier: "extra", level: 4,
  q: `During a long fast, liver cells pull oxaloacetate out of the Krebs cycle to make new glucose. How does this affect the liver's ability to process acetyl-CoA from fat?`,
  options: [
    `It speeds the cycle up, because removing a product pulls the reactions forward`,
    `It slows the cycle down, because each acetyl-CoA needs an oxaloacetate to form citrate`,
    `No effect, because oxaloacetate is regenerated at the end of every turn anyway`,
    `No effect, because acetyl-CoA from fat enters the cycle at α-ketoglutarate instead`],
  answer: 1,
  explain: `Every turn starts with acetyl-CoA (2C) + oxaloacetate (4C) → citrate (6C). The cycle only regenerates the oxaloacetate it started with; if oxaloacetate is drained away, fewer turns can start and acetyl-CoA backs up. The "regenerated anyway" option is the trap: regeneration only replaces, it can't make extra. Beyond the slides: the liver turns this surplus acetyl-CoA into ketone bodies, which the brain can use as fuel during starvation.` },

{ id: "a029", lesson: "2.03", type: "tf", kind: "applied", tier: "likely", level: 2,
  q: `Coenzyme A is used up during pyruvate oxidation, so a cell needs a brand-new CoA molecule for every acetyl-CoA it makes.`,
  answer: false,
  explain: `CoA is a carrier, not a fuel. It attaches to the acetyl group in pyruvate oxidation, then is released in the first step of the Krebs cycle when the acetyl group joins oxaloacetate to form citrate. The freed CoA is reused for the next pyruvate, just as oxaloacetate is regenerated at the end of each turn.` },

{ id: "a030", lesson: "2.03", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Using class values (NADH ≈ 3 ATP, FADH<sub>2</sub> ≈ 2 ATP), how much ATP can ONE acetyl-CoA yield through one Krebs turn and the ETC?`,
  options: [
    `6 ATP`,
    `15 ATP`,
    `12 ATP`,
    `38 ATP`],
  answer: 2,
  explain: `One turn makes 3 NADH (3 × 3 = 9), 1 FADH<sub>2</sub> (2) and 1 ATP via GTP (1): 9 + 2 + 1 = 12. "15" is the value for one <em>pyruvate</em> (it adds the NADH from pyruvate oxidation). 38 is the maximum per glucose.` },

{ id: "a031", lesson: "2.03", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `In a flask of isolated mitochondria, the Krebs cycle is made to run twice as fast as normal, and the ETC keeps up. Which change would you measure?`,
  options: [
    `CO<sub>2</sub> output falls, because more carbon is stored as citrate`,
    `O<sub>2</sub> use falls, because the Krebs cycle makes its own oxygen`,
    `Glucose appears, because the Krebs cycle runs in reverse`,
    `CO<sub>2</sub> output rises and O<sub>2</sub> use rises`],
  answer: 3,
  explain: `Each turn releases 2 CO<sub>2</sub>, so a faster cycle releases more CO<sub>2</sub> (the Krebs review: an overstimulated cycle → too much CO<sub>2</sub>). More turns also make more NADH and FADH<sub>2</sub>; as the ETC oxidizes them, more O<sub>2</sub> is reduced to water. The Krebs cycle doesn't use O<sub>2</sub> directly. Its link to O<sub>2</sub> goes through the ETC.` },

{ id: "a032", lesson: "2.03", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `In which Krebs cycle reaction does the carbon count drop from 6 to 5 while NAD<sup>+</sup> is reduced?`,
  options: [
    `Isocitrate → α-ketoglutarate`,
    `Citrate → isocitrate`,
    `α-ketoglutarate → succinyl-CoA`,
    `Malate → oxaloacetate`],
  answer: 0,
  explain: `Isocitrate (6C) → α-ketoglutarate (5C) is a decarboxylation plus a reduction of NAD<sup>+</sup> (the review key: "decarboxylation & reduction of NAD<sup>+</sup>"). Citrate → isocitrate is an isomerization (6C → 6C, no redox). α-ketoglutarate → succinyl-CoA also releases CO<sub>2</sub> and makes NADH, but it goes from 5C to 4C. Malate → oxaloacetate makes NADH without losing carbon.` },

{ id: "a033", lesson: "2.03", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `A tube contains only the soluble enzymes of the mitochondrial matrix (no membranes). Pyruvate, NAD<sup>+</sup>, CoA, FAD, ADP and P<sub>i</sub> are added. What happens?`,
  options: [
    `Nothing, because pyruvate oxidation and the Krebs cycle need O<sub>2</sub> directly`,
    `CO<sub>2</sub>, NADH, FADH<sub>2</sub> and a little ATP form at first, then it stops when NAD<sup>+</sup> and FAD run out`,
    `It runs indefinitely, because the Krebs cycle regenerates everything it uses`,
    `A large amount of ATP forms, because the Krebs cycle makes most of the cell's ATP`],
  answer: 1,
  explain: `Pyruvate oxidation and the Krebs cycle don't use O<sub>2</sub> directly, so they start. But the NAD<sup>+</sup> and FAD get reduced and nothing re-oxidizes them; that is the ETC's job, and it sits in the inner membrane, which is missing here. Once all the carriers are full, the cycle stops. This is why lack of O<sub>2</sub> eventually stops the Krebs cycle too (review Q12a). The cycle regenerates oxaloacetate and CoA, not NAD<sup>+</sup> and FAD, and it makes only 2 ATP per glucose directly.` },

// ---------- 2.04 ETC & Chemiosmosis ----------
{ id: "a034", lesson: "2.04", type: "tf", kind: "applied", tier: "essential", level: 2,
  q: `If a person breathes O<sub>2</sub> labelled with the heavy isotope <sup>18</sup>O, the label shows up in the water made by their cells, not in the CO<sub>2</sub> they exhale.`,
  answer: true,
  explain: `O<sub>2</sub> is used only at complex IV, where it accepts electrons and H<sup>+</sup> to form water: ½O<sub>2</sub> + 2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub>O. The oxygen atoms in exhaled CO<sub>2</sub> come from glucose (the review key: glucose's oxygen leaves as CO<sub>2</sub>) and from water used in the Krebs cycle, not from the O<sub>2</sub> you breathe in.` },

{ id: "a035", lesson: "2.04", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A student argues that NADH and FADH<sub>2</sub> should yield the same ATP because each delivers a pair of electrons. What is the best correction?`,
  options: [
    `FADH<sub>2</sub> really carries only one electron, so it powers half as much pumping`,
    `FADH<sub>2</sub> hands its electrons directly to oxygen, so it skips every pump`,
    `FADH<sub>2</sub> enters at complex II, which is not a pump, so its electrons skip complex I and fewer H<sup>+</sup> are pumped`,
    `NADH is made in the matrix, but FADH<sub>2</sub> is made in the cytoplasm and must be shuttled in`],
  answer: 2,
  explain: `Both carriers bring a pair of electrons. NADH's electrons go to complex I (pump) → Q → III (pump) → cytochrome c → IV (pump): three pumps. FADH<sub>2</sub>'s go to complex II (not a pump) → Q → III → IV: only two pumps. Fewer H<sup>+</sup> pumped means a smaller contribution to the gradient, so ≈2 ATP instead of ≈3. FADH<sub>2</sub> is made in the matrix (succinate → fumarate), not in the cytoplasm.` },

{ id: "a036", lesson: "2.04", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `In working mitochondria, the intermembrane space measures pH 7.0 and the matrix measures pH 8.0. Which statement correctly describes H<sup>+</sup> movement?`,
  options: [
    `H<sup>+</sup> are pumped into the intermembrane space passively and return through ATP synthase actively`,
    `H<sup>+</sup> move in both directions by active transport powered by ATP hydrolysis`,
    `There is no gradient, because a difference of one pH unit is too small to matter`,
    `Pumping H<sup>+</sup> into the intermembrane space is active; their flow back through ATP synthase is passive`],
  answer: 3,
  explain: `Lower pH means more H<sup>+</sup>. Each pH unit is a 10-fold difference, so the intermembrane space has about 10 times more H<sup>+</sup> than the matrix. Pumping even more H<sup>+</sup> out of the matrix is against the gradient: active transport, powered by energy released as electrons move down the chain (not by ATP). H<sup>+</sup> flowing back into the matrix through ATP synthase goes down the gradient: passive (facilitated diffusion), and that flow powers ATP synthesis.` },

{ id: "a037", lesson: "2.04", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `In a skeletal muscle cell, both cytosolic NADH from glycolysis pass their electrons into the mitochondrion through the glycerol-3-phosphate shuttle, so each becomes FADH<sub>2</sub>. Using class values, what is the maximum ATP per glucose?`,
  options: [
    `36 ATP`,
    `38 ATP`,
    `34 ATP`,
    `32 ATP`],
  answer: 0,
  explain: `Normally: 2 + 2 + 10 × 3 + 2 × 2 = 38. With the G3P shuttle, 2 of the 10 NADH become FADH<sub>2</sub>: 2 + 2 + 8 × 3 + 4 × 2 = 36. That is the "36 ATP" in the class review key's equation. Liver, heart and kidney use the malate–aspartate shuttle (NADH stays NADH), giving 38. The trade-off: the G3P shuttle is faster and regenerates cytosolic NAD<sup>+</sup> quickly, which suits muscle and brain.` },

{ id: "a038", lesson: "2.04", type: "mcq", kind: "applied", tier: "essential", level: 3,
  q: `A cell that cannot do fermentation suddenly runs out of O<sub>2</sub>. In what order do these stages stop: the Krebs cycle, the ETC, glycolysis?`,
  options: [
    `Glycolysis → Krebs cycle → ETC`,
    `ETC → Krebs cycle → glycolysis`,
    `Krebs cycle → ETC → glycolysis`,
    `All three stop at the same instant`],
  answer: 1,
  explain: `With no final electron acceptor, electrons can't leave complex IV, so the ETC stops first. NADH and FADH<sub>2</sub> can no longer be oxidized, so NAD<sup>+</sup> and FAD run out and the Krebs cycle (and pyruvate oxidation) stop. Glycolysis doesn't need O<sub>2</sub>, but it does need NAD<sup>+</sup> at step 6; with no fermentation to regenerate it, glycolysis stops last, once its NAD<sup>+</sup> is used up.` },

{ id: "a039", lesson: "2.04", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A drug prevents ubiquinone (Q) from accepting electrons. Which carriers end up stuck in their reduced (electron-full) form?`,
  options: [
    `Cytochrome c and complex IV only`,
    `Only FADH<sub>2</sub>, because NADH's electrons bypass ubiquinone`,
    `Complexes I and II, along with NADH and FADH<sub>2</sub>`,
    `None, because oxygen pulls the electrons past the block`],
  answer: 2,
  explain: `Q is the mobile shuttle that carries electrons from BOTH complex I and complex II to complex III. With Q blocked, I and II can't pass electrons on, so they stay reduced and can't oxidize any more NADH or FADH<sub>2</sub> (review key: NADH and FADH<sub>2</sub> could not be oxidized and the ETC stops). Everything after Q (III, cytochrome c, IV) is emptied by O<sub>2</sub> and stays oxidized. Oxygen can only pull electrons through an unbroken chain.` },

{ id: "a040", lesson: "2.04", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `One mole of glucose releases 686 kcal, and making one mole of ATP stores about 7.3 kcal. Using the class maximum of 38 ATP per glucose, about how efficient is aerobic respiration?`,
  options: [
    `About 6%`,
    `About 94%`,
    `About 2%`,
    `About 40%`],
  answer: 3,
  explain: `686 ÷ 7.3 ≈ 94, so 94 ATP would be 100% efficient. 38 ÷ 94 × 100 ≈ 40% (check: 38 × 7.3 ≈ 277 kcal, and 277 ÷ 686 ≈ 0.40). The other ~60% is released as heat. 6% is the worksheet value for glycolysis + Krebs only, 2% is fermentation (2 ÷ 94), and 94 is the number of ATP at 100%, not a percentage.` },

{ id: "a041", lesson: "2.04", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Which cell would you expect to have the greatest total inner-membrane (cristae) surface area?`,
  options: [
    `A heart muscle cell that contracts nonstop`,
    `A mature red blood cell carrying oxygen`,
    `A fat-storage cell filled with a lipid droplet`,
    `An outer skin cell that is about to be shed`],
  answer: 0,
  explain: `The ETC and ATP synthase are embedded in the cristae, so cells with a high, constant ATP demand pack in many mitochondria with heavily folded inner membranes. Heart muscle never rests. Red blood cells have no mitochondria at all, a fat-storage cell is mostly stored lipid, and outer skin cells are dying and have little ATP demand.` },

{ id: "a042", lesson: "2.04", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `A disease punches tiny holes in the inner mitochondrial membrane, so H<sup>+</sup> can leak back into the matrix anywhere. What happens?`,
  options: [
    `ATP production rises, because H<sup>+</sup> get back into the matrix faster`,
    `Electrons still flow to O<sub>2</sub>, but the H<sup>+</sup> gradient collapses, so little ATP is made and more energy becomes heat`,
    `The ETC stops completely, because the pumps cannot work if any H<sup>+</sup> leak`,
    `Nothing changes, because ATP synthase is still the only route for H<sup>+</sup>`],
  answer: 1,
  explain: `Electron transport and pumping still happen (O<sub>2</sub> is still the final acceptor), but the pumped H<sup>+</sup> leak back without passing through ATP synthase. The gradient that powers ATP synthase can't build up, so ATP synthesis drops and the energy is released as heat. Some natural H<sup>+</sup> leak is one reason the realistic yield is 30–32 instead of 38. "ATP synthase is the only route" is only true for an intact membrane.` },

{ id: "a043", lesson: "2.04", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `Mitochondria given only succinate as fuel can still make ATP by chemiosmosis, even though complex II is not a proton pump.`,
  answer: true,
  explain: `Succinate is oxidized by succinate dehydrogenase (complex II), making FADH<sub>2</sub>. Its electrons then go to Q → complex III (pump) → cytochrome c → complex IV (pump) → O<sub>2</sub>. Two pumps still build an H<sup>+</sup> gradient, so ATP synthase makes ATP: about 2 per FADH<sub>2</sub> instead of 3 per NADH.` },

{ id: "a044", lesson: "2.04", type: "tf", kind: "applied", tier: "likely", level: 4,
  q: `If complex IV took the H<sup>+</sup> it needs to make water from the intermembrane space instead of from the matrix, the H<sup>+</sup> gradient would be slightly weaker.`,
  answer: true,
  explain: `Said in class: forming water on the matrix side removes H<sup>+</sup> from the matrix, which indirectly steepens the gradient (fewer H<sup>+</sup> inside, more outside). Taking those H<sup>+</sup> from the intermembrane space instead would remove H<sup>+</sup> from the high side, making the difference smaller and the gradient weaker.` },

{ id: "a045", lesson: "2.04", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `Suppose all the cytochrome c were removed from the intermembrane space. What would happen to the ETC?`,
  options: [
    `Complex IV keeps pumping, because it can take electrons straight from complex III`,
    `Only complex I keeps pumping, because it is first in line and has its own NADH supply`,
    `Complexes I–III and ubiquinone fill with electrons and stop; complex IV stays oxidized; pumping stops`,
    `Pumping continues normally, because ubiquinone can carry electrons on to complex IV`],
  answer: 2,
  explain: `Cytochrome c is the mobile shuttle from complex III to complex IV. Without it, electrons pile up at III; then Q can't unload to III, and I and II can't unload to Q. Each carrier stays reduced and stops passing electrons, so none of the pumps work. Complex IV gets no electrons, so it stays oxidized. Same logic as cyanide, just one step earlier. Ubiquinone only shuttles electrons to complex III.` },

// 2.04 continued: 7 Deaths case and other ETC poisons
{ id: "a046", lesson: "2.04", type: "mcq", kind: "applied", tier: "essential", level: 3,
  q: `These metabolite levels come from the 7 Deaths case. Pyruvate and acetyl-CoA were also normal, but ATP was very low. Which conclusion is best supported?
<table class="data"><thead><tr><th>Metabolite</th><th>Patients</th><th>Normal</th></tr></thead><tbody><tr><td>Glucose</td><td>99 µM</td><td>100 µM</td></tr><tr><td>Pyruvate</td><td>27 µM</td><td>25 µM</td></tr><tr><td>NAD<sup>+</sup></td><td>10 µM</td><td>75 µM</td></tr><tr><td>NADH</td><td>400 µM</td><td>50 µM</td></tr></tbody></table>`,
  options: [
    `Glycolysis is blocked, because glucose is slightly below normal`,
    `The Krebs cycle is overactive and is using up all the NAD<sup>+</sup>`,
    `Pyruvate oxidation is blocked, because pyruvate is slightly above normal`,
    `The ETC is failing to oxidize NADH back into NAD<sup>+</sup>`],
  answer: 3,
  explain: `NADH is 8 times normal and NAD<sup>+</sup> is about one-seventh of normal: the carriers are being filled but not emptied. The stage that oxidizes NADH back to NAD<sup>+</sup> is the ETC (complex I). Glucose (99 vs 100) and pyruvate (27 vs 25) are essentially normal, and acetyl-CoA is normal, so glycolysis and pyruvate oxidation are not the block. An overactive Krebs cycle would still have a working ETC to regenerate NAD<sup>+</sup>, and ATP would not be very low.` },

{ id: "a047", lesson: "2.04", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `The 7 Deaths victims died of hypoxia, yet their blood oxygen was about 110 mm Hg (normal 75–100). What explains this?`,
  options: [
    `Their cells could not use O<sub>2</sub> (complex IV was blocked), so O<sub>2</sub> stayed in the blood instead of entering tissues`,
    `110 mm Hg was their blood pressure, which rose because the heart was working harder`,
    `Cyanide made the lungs absorb extra oxygen, which damaged the mitochondria`,
    `Their hemoglobin was destroyed, so the oxygen dissolved in the plasma instead`],
  answer: 0,
  explain: `110 mm Hg is the partial pressure of O<sub>2</sub> in the blood, not blood pressure (an easy misreading). Cyanide binds complex IV, so electrons can't be passed to O<sub>2</sub>. Tissues stop consuming O<sub>2</sub>, so less is pulled out of the blood and blood O<sub>2</sub> stays high. The cells are starved of usable oxygen even though plenty is delivered: the problem is <em>use</em>, not delivery.` },

{ id: "a048", lesson: "2.04", type: "tf", kind: "applied", tier: "essential", level: 2,
  q: `Giving the cyanide victims pure oxygen would have restored their ATP production, because their problem was that too little oxygen reached their cells.`,
  answer: false,
  explain: `Oxygen delivery was fine; blood O<sub>2</sub> was actually above normal. Cyanide binds irreversibly to cytochrome c oxidase (complex IV), so no matter how much O<sub>2</sub> is present, electrons can't be handed to it. More O<sub>2</sub> can't fix a blocked enzyme. (Real treatment uses antidotes that pull cyanide away, which is beyond the slides.)` },

{ id: "a049", lesson: "2.04", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Right after cyanide blocks complex IV, what happens to the H<sup>+</sup> gradient and ATP synthase?`,
  options: [
    `The gradient stays high, so ATP synthase keeps making ATP normally`,
    `Pumping by complexes I, III and IV stops, the gradient runs down, and ATP synthesis stops`,
    `Only complex IV stops pumping; complexes I and III keep the gradient high`,
    `The gradient gets steeper, because H<sup>+</sup> are no longer used to make water`],
  answer: 1,
  explain: `When electrons can't leave complex IV, the whole chain backs up: cytochrome c, III, Q and I all stay reduced and stop passing electrons on, so none of the three pumps can work. The H<sup>+</sup> already pumped flow back out through ATP synthase (and leaks) until the gradient is gone, and ATP production stops. Upstream pumps only work while electrons keep moving, which is why "only complex IV stops" is wrong.` },

{ id: "a050", lesson: "2.04", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `In cyanide-poisoned cells, glycolysis can still run if NAD<sup>+</sup> is regenerated. How do the cells try to cope, and why does it fail for organs like the heart and brain?`,
  options: [
    `They switch to alcohol fermentation, and the ethanol it makes poisons them`,
    `They use FADH<sub>2</sub> instead of NADH, because FADH<sub>2</sub> bypasses complex IV`,
    `They switch to lactic acid fermentation, but 2 ATP per glucose cannot meet the heart's and brain's demand`,
    `They make extra ATP in the Krebs cycle to replace the ATP the ETC was making`],
  answer: 2,
  explain: `Lactate dehydrogenase converts pyruvate + NADH → lactate + NAD<sup>+</sup>, so glycolysis keeps making 2 ATP per glucose. But that's 2 instead of up to 38, and the heart and brain need huge, constant ATP supplies, which matches the massive cell death in the autopsy. Humans don't do alcohol fermentation. FADH<sub>2</sub>'s electrons also pass through complex IV, so they're blocked too, and the Krebs cycle stops once NAD<sup>+</sup> and FAD run out. (Beyond the slides: the lactate build-up acidifies the blood, which helps explain the rapid breathing.)` },

{ id: "a051", lesson: "2.04", type: "mcq", kind: "applied", tier: "extra", level: 4,
  q: `Isolated mitochondria are given ADP, P<sub>i</sub>, O<sub>2</sub> and one of two fuels, with or without poison X. Where does poison X most likely act?
<table class="data"><thead><tr><th>Fuel</th><th>Poison X</th><th>O<sub>2</sub> use</th></tr></thead><tbody><tr><td>Pyruvate (mostly feeds NADH in)</td><td>no</td><td>normal</td></tr><tr><td>Pyruvate</td><td>yes</td><td>almost none</td></tr><tr><td>Succinate (feeds FADH<sub>2</sub> in)</td><td>no</td><td>normal</td></tr><tr><td>Succinate</td><td>yes</td><td>normal</td></tr></tbody></table>`,
  options: [
    `Complex III`,
    `Complex IV`,
    `ATP synthase`,
    `Complex I`],
  answer: 3,
  explain: `Poison X stops respiration from NADH but not from FADH<sub>2</sub>. FADH<sub>2</sub> enters at complex II and skips complex I, so the block must be at complex I. (Pyruvate also makes some FADH<sub>2</sub> in the Krebs cycle, but that stops once NAD<sup>+</sup> runs out.) A block at complex III or IV would stop both fuels, because both routes pass through Q → III → cytochrome c → IV. Blocking ATP synthase would also slow O<sub>2</sub> use with both fuels. Beyond the slides: rotenone, a plant-derived pesticide, is a real complex I inhibitor; antimycin A blocks complex III; cyanide, azide and CO block complex IV.` },

{ id: "a052", lesson: "2.04", type: "mcq", kind: "applied", tier: "extra", level: 4,
  q: `In the 1930s the chemical DNP was sold as a diet pill. DNP carries H<sup>+</sup> back across the inner mitochondrial membrane, bypassing ATP synthase. Which set of effects fits?`,
  options: [
    `ATP down, O<sub>2</sub> use up, body temperature up`,
    `ATP up, O<sub>2</sub> use down, body temperature down`,
    `ATP down, O<sub>2</sub> use down, body temperature down`,
    `ATP up, O<sub>2</sub> use up, body temperature normal`],
  answer: 0,
  explain: `DNP is an <em>uncoupler</em>: it lets H<sup>+</sup> leak back, so the gradient can't drive ATP synthase. The ETC runs faster than ever trying to rebuild the gradient (more NADH oxidized, more O<sub>2</sub> used, more fuel, including fat, burned), but the energy is released as heat instead of being captured in ATP. That caused weight loss and dangerous, sometimes fatal, overheating. Beyond the slides, but it uses the same logic as H<sup>+</sup> leak.` },

{ id: "a053", lesson: "2.04", type: "tf", kind: "applied", tier: "extra", level: 4,
  q: `Brown fat in newborns and hibernating mammals contains a protein (thermogenin) that lets H<sup>+</sup> leak back into the matrix. This is useful because it turns the energy from fuel oxidation into heat instead of ATP.`,
  answer: true,
  explain: `Thermogenin is a natural, controlled uncoupler. H<sup>+</sup> flow back into the matrix without passing through ATP synthase, so electron transport and fuel oxidation run fast while the energy is released as heat. That keeps newborns and hibernating animals warm. Brown fat cells are packed with mitochondria. Beyond the slides, but it applies the ETC model directly.` },

{ id: "a054", lesson: "2.04", type: "mcq", kind: "applied", tier: "extra", level: 4,
  q: `Oligomycin plugs the channel of ATP synthase so H<sup>+</sup> cannot flow through it. In isolated mitochondria with plenty of fuel, ADP and O<sub>2</sub>, what happens to O<sub>2</sub> consumption?`,
  options: [
    `It increases, because the ETC works harder to make up for the lost ATP`,
    `It drops sharply, because the H<sup>+</sup> gradient gets too steep for the pumps to push against`,
    `It is unchanged, because the ETC does not depend on ATP synthase at all`,
    `It stops instantly, because oligomycin also binds directly to oxygen`],
  answer: 1,
  explain: `With ATP synthase blocked, pumped H<sup>+</sup> have no way back, so the gradient builds until the energy from electron transfer is no longer enough to pump against it. Pumping stalls, electrons back up, and O<sub>2</sub> use falls: the ETC and ATP synthesis are <em>coupled</em>. Adding an uncoupler like DNP afterwards would restart O<sub>2</sub> use (H<sup>+</sup> can leak back), but still with no ATP made. Beyond the slides.` },

{ id: "a055", lesson: "2.04", type: "mcq", kind: "applied", tier: "extra", level: 4,
  q: `Carbon monoxide (CO), like cyanide, can block complex IV. Yet CO poisoning is routinely treated with high-concentration oxygen, while oxygen alone did not save the cyanide victims. Best explanation?`,
  options: [
    `CO is a gas, so extra O<sub>2</sub> pushes it out of the mitochondria by diffusion`,
    `CO actually blocks complex I, so FADH<sub>2</sub> can still pass electrons to oxygen`,
    `CO mainly binds hemoglobin and cuts O<sub>2</sub> delivery; lots of O<sub>2</sub> competes it off`,
    `Oxygen reacts with CO to form CO<sub>2</sub>, which cells then use as a fuel`],
  answer: 2,
  explain: `CO binds hemoglobin far more tightly than O<sub>2</sub>, so the main problem in CO poisoning is <em>delivery</em>: the blood carries less O<sub>2</sub>. Breathing a lot of O<sub>2</sub> competes with CO for hemoglobin and speeds its removal. Cyanide's problem is <em>use</em>: complex IV is irreversibly blocked, and blood O<sub>2</sub> was already high, so extra O<sub>2</sub> can't help. CO<sub>2</sub> is a waste product, not a fuel. Beyond the slides.` },

{ id: "a056", lesson: "2.04", type: "mcq", kind: "applied", tier: "extra", level: 4,
  q: `Modern measurements give NADH ≈ 2.5 ATP and FADH<sub>2</sub> ≈ 1.5 ATP. Using these values and the malate–aspartate shuttle (cytosolic NADH stays NADH), what is the maximum ATP per glucose?`,
  options: [
    `38 ATP`,
    `36 ATP`,
    `28 ATP`,
    `32 ATP`],
  answer: 3,
  explain: `2 (glycolysis) + 2 (Krebs) + 10 × 2.5 + 2 × 1.5 = 4 + 25 + 3 = 32. If the two glycolysis NADH use the glycerol-3-phosphate shuttle instead (becoming FADH<sub>2</sub>): 4 + 8 × 2.5 + 4 × 1.5 = 4 + 20 + 6 = 30. That's where the "realistic 30–32" range comes from. Beyond the slides: on class tests use 3 and 2 (max 38) unless you're told otherwise.` },

{ id: "a057", lesson: "2.04", type: "mcq", kind: "applied", tier: "extra", level: 4,
  q: `Isolated mitochondria get succinate, P<sub>i</sub> and O<sub>2</sub> but no ADP, and O<sub>2</sub> use is slow. When ADP is added, O<sub>2</sub> use jumps, then falls back once all the ADP has become ATP. What does this show?`,
  options: [
    `The ETC is coupled to ATP synthesis: with no ADP, H<sup>+</sup> can't flow through ATP synthase, so the gradient builds and slows the pumps`,
    `ADP is an electron carrier that delivers electrons from succinate to complex IV`,
    `Succinate can only be oxidized while ADP is bound to complex II`,
    `ADP is broken down to release the oxygen atoms that complex IV needs`],
  answer: 0,
  explain: `ATP synthase needs ADP + P<sub>i</sub> as substrates. With no ADP, H<sup>+</sup> can't flow back through it, the gradient grows steep, pumping gets harder, and electron flow (and O<sub>2</sub> use) slows. Adding ADP lets H<sup>+</sup> flow again, the gradient drops, and the ETC speeds up. In a cell, this means using ATP (making ADP) automatically speeds up respiration, the same idea as ADP stimulating PFK and PDH. Beyond the slides (called respiratory control).` },

// ---------- 2.05 Regulation ----------
{ id: "a058", lesson: "2.05", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `You are resting on the couch after a large meal. Your cells have plenty of ATP and citrate. What happens to phosphofructokinase (PFK)?`,
  options: [
    `PFK is stimulated, because there is so much glucose to break down`,
    `PFK is inhibited, so glycolysis slows even though glucose is plentiful`,
    `PFK is unaffected, because only PDH responds to energy levels`,
    `PFK is stimulated by citrate, to keep the Krebs cycle supplied`],
  answer: 1,
  explain: `PFK is allosterically inhibited by high ATP and high citrate, which signal that energy is plentiful and the Krebs cycle is already backed up. The extra glucose is stored (as glycogen or fat) instead of being burned. Plenty of substrate doesn't override this: PFK responds to the cell's energy status. Citrate inhibits PFK; it doesn't stimulate it.` },

{ id: "a059", lesson: "2.05", type: "tf", kind: "applied", tier: "essential", level: 2,
  q: `During a sprint, ATP is hydrolyzed rapidly and ADP builds up in muscle cells; this rise in ADP speeds up glycolysis at the PFK step.`,
  answer: true,
  explain: `High ADP (and AMP) signals low energy and stimulates PFK, so more glucose flows through glycolysis to make ATP. The same signal also activates PDH, so more pyruvate is sent into the Krebs cycle. Production is matched to use through the [ATP]/[ADP] ratio.` },

{ id: "a060", lesson: "2.05", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `Because ATP is a substrate of PFK (it donates the phosphate in step 3), raising the ATP concentration always speeds up step 3.`,
  answer: false,
  explain: `ATP is also an allosteric <em>inhibitor</em> of PFK. When ATP is high, it binds a separate regulatory site, changing the enzyme's shape and lowering its activity. That makes sense: if the cell already has plenty of energy, slowing glycolysis prevents waste. Here allosteric regulation overrides "more substrate = faster".` },

{ id: "a061", lesson: "2.05", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `During a long fast, β-oxidation of fatty acids floods liver mitochondria with acetyl-CoA and NADH. What effect does this have on the pyruvate dehydrogenase complex (PDH)?`,
  options: [
    `PDH is activated, because the extra acetyl-CoA means the cycle needs more pyruvate`,
    `PDH is unaffected, because fatty acid breakdown does not involve pyruvate`,
    `PDH is inhibited by its own products, so pyruvate is spared instead of being oxidized`,
    `PDH responds only to ADP levels, so the extra NADH has no effect on it`],
  answer: 2,
  explain: `Acetyl-CoA and NADH are PDH's products, and both inhibit it (product feedback). With fat supplying plenty of acetyl-CoA, the cell stops burning its limited pyruvate, which can then be used to make glucose for the brain. PDH is activated by pyruvate, ADP, NAD<sup>+</sup> and CoA, and inhibited by acetyl-CoA, NADH and ATP.` },

{ id: "a062", lesson: "2.05", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Why does it make sense that citrate, a Krebs cycle molecule, inhibits PFK, a glycolysis enzyme?`,
  options: [
    `Citrate is made directly from fructose-1,6-bisphosphate, so it competes for PFK's active site`,
    `Citrate is a sugar that can replace glucose as the fuel for glycolysis`,
    `Citrate removes the phosphate groups that PFK adds to fructose-6-phosphate`,
    `High citrate means the Krebs cycle is backed up, so making more pyruvate would only cause a pile-up`],
  answer: 3,
  explain: `This is feedback inhibition that links two pathways. If citrate accumulates, the Krebs cycle (and the ETC behind it) already has more fuel than it can process, so the cell slows glycolysis at its main control point. Low citrate removes the brake. Citrate acts at an allosteric site, not the active site, and it is not made directly from fructose-1,6-bisphosphate.` },

{ id: "a063", lesson: "2.05", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `In which muscle cell would the pyruvate dehydrogenase complex (PDH) be MOST active?`,
  options: [
    `One with high pyruvate, high ADP, and plenty of NAD<sup>+</sup> and CoA`,
    `One with high ATP, high NADH, and high acetyl-CoA`,
    `One with high pyruvate, low ADP, and high NADH`,
    `One with low pyruvate, high ATP, and little NAD<sup>+</sup>`],
  answer: 0,
  explain: `PDH is activated by its substrate (pyruvate), its reactants (NAD<sup>+</sup> and CoA) and ADP (low energy). It is inhibited by its products (acetyl-CoA and NADH) and by ATP (high energy). The third option mixes one activator with two inhibitors. The first option describes a cell early in exercise, when glycolysis is speeding up and ATP is being used fast.` },

{ id: "a064", lesson: "2.05", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Compare a resting muscle cell with the same cell 10 seconds into a sprint. Which correctly describes PFK and PDH?`,
  options: [
    `Rest: both stimulated. Sprint: both inhibited, so the cell does not overheat`,
    `Rest: both slowed by high ATP. Sprint: both stimulated as ADP rises`,
    `Rest: PFK stimulated and PDH inhibited. Sprint: the reverse`,
    `Neither enzyme changes, because muscle controls respiration only through O<sub>2</sub> supply`],
  answer: 1,
  explain: `At rest, ATP is high, and ATP inhibits both PFK and PDH. In a sprint, ATP is used fast and ADP rises, which stimulates both (PDH also gets more pyruvate, its substrate). The cell matches ATP production to ATP use through the [ATP]/[ADP] ratio, plus feedback from citrate and NADH.` },

{ id: "a065", lesson: "2.05", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `If a mutation made PFK insensitive to ATP, a resting cell would keep breaking down glucose faster than it needs to.`,
  answer: true,
  explain: `Normally high ATP at rest binds PFK's allosteric site and slows glycolysis. If PFK no longer "sees" ATP, that brake is gone, so glucose keeps flowing through glycolysis even when energy is plentiful. Sugar that should have been stored as glycogen is burned instead (citrate could still slow it somewhat).` },

{ id: "a066", lesson: "2.05", type: "mcq", kind: "applied", tier: "extra", level: 4,
  q: `Glucose-6-phosphate (made in step 1) can also be used to build glycogen, but fructose-1,6-bisphosphate (made in step 3) can only continue through glycolysis. Why is PFK a sensible place for the main control point?`,
  options: [
    `Step 3 is where glycolysis makes its ATP, so controlling it controls the ATP output`,
    `Hexokinase works inside the mitochondria, where allosteric regulators cannot reach it`,
    `Step 3 is the first step that commits sugar to glycolysis, so blocking it leaves G6P free for other uses`,
    `PFK is the only glycolysis enzyme whose activity changes with temperature`],
  answer: 2,
  explain: `Regulating at the <em>committed step</em> lets the cell stop sugar entering glycolysis while still allowing G6P to be used for glycogen synthesis and other pathways. Step 3 uses ATP; it doesn't make it (ATP is made at steps 7 and 10). Hexokinase is in the cytoplasm. Beyond the slides: the slides just say PFK is the main regulatory enzyme; "committed step" is the reason textbooks give.` },

// ---------- 2.06 Lipid & Protein Catabolism ----------
{ id: "a067", lesson: "2.06", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `An 18-carbon fatty acid is completely broken down by β-oxidation, and the products enter the Krebs cycle. How many acetyl-CoA form, and how many CO<sub>2</sub> does the Krebs cycle release from them?`,
  options: [
    `18 acetyl-CoA; 36 CO<sub>2</sub>`,
    `9 acetyl-CoA; 9 CO<sub>2</sub>`,
    `6 acetyl-CoA; 12 CO<sub>2</sub>`,
    `9 acetyl-CoA; 18 CO<sub>2</sub>`],
  answer: 3,
  explain: `β-oxidation cuts the fatty acid into 2-carbon acetyl groups: 18 ÷ 2 = 9 acetyl-CoA. Each one turns the Krebs cycle once and releases 2 CO<sub>2</sub>: 9 × 2 = 18. Carbon check: all 18 carbons leave as CO<sub>2</sub>. Fatty acids skip glycolysis and pyruvate oxidation, so there is no extra CO<sub>2</sub> from a link step.` },

{ id: "a068", lesson: "2.06", type: "tf", kind: "applied", tier: "essential", level: 2,
  q: `When a triglyceride is broken down, its glycerol enters cellular respiration as acetyl-CoA, just like the fatty acids do.`,
  answer: false,
  explain: `Glycerol is converted to DHAP, a glycolysis intermediate, which becomes G3P and continues through the payoff phase of glycolysis. When glucose is very low, the liver can instead use glycerol to make glucose (gluconeogenesis). Only the fatty acids become acetyl-CoA (by β-oxidation).` },

{ id: "a069", lesson: "2.06", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `A cell has no working pyruvate dehydrogenase. Which amino acids could still supply carbon to its Krebs cycle?`,
  options: [
    `Leucine (→ acetyl-CoA) and glutamate (→ α-ketoglutarate), but not alanine (→ pyruvate)`,
    `Alanine and glycine, because they are converted into pyruvate`,
    `Only alanine, because it is the simplest amino acid to deaminate`,
    `None, because every amino acid skeleton must pass through pyruvate first`],
  answer: 0,
  explain: `After deamination, carbon skeletons enter at different points: alanine and glycine become pyruvate (which needs PDH to go further), leucine and lysine become acetyl-CoA, and glutamate becomes α-ketoglutarate, entering the Krebs cycle directly. Anything that enters <em>after</em> the PDH step bypasses the defect.` },

{ id: "a070", lesson: "2.06", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `On day 30 of a hunger strike, the urea in a person's urine rises. This shows their body is now mainly burning fat.`,
  answer: false,
  explain: `Urea comes from amino groups. Deamination in the liver removes the amino group as ammonia (toxic), which the liver converts to urea for excretion. More urea means more <em>protein</em> is being broken down, the last-resort fuel in severe fasting after carbohydrate and much of the fat. Fats contain no nitrogen, so burning fat makes no urea.` },

{ id: "a071", lesson: "2.06", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A person stops eating completely. Which sequence best describes the main fuel their body relies on over time?`,
  options: [
    `Fat → glycogen → protein`,
    `Glycogen (carbohydrate) → fat → protein`,
    `Protein → glycogen → fat`,
    `Glycogen → protein → fat`],
  answer: 1,
  explain: `Carbohydrate stores (glycogen) are used first. As they run low, lipids become the main fuel (glycerol → DHAP or gluconeogenesis; fatty acids → acetyl-CoA). Protein is broken down heavily only in severe fasting or starvation, which wastes muscle. Nucleic acids are rarely used.` },

{ id: "a072", lesson: "2.06", type: "mcq", kind: "applied", tier: "extra", level: 4,
  q: `During starvation, the body breaks down muscle protein even though plenty of fat is still stored. Which explanation is best?`,
  options: [
    `Fatty acids cannot be oxidized until they are first converted into amino acids`,
    `Protein releases more ATP per gram than fat, so it is preferred once glycogen is gone`,
    `The brain needs glucose; fatty acids give acetyl-CoA, which can't become glucose, but many amino acids can`,
    `Muscle protein must be broken down to release the oxygen that β-oxidation needs`],
  answer: 2,
  explain: `Gluconeogenesis needs non-carbohydrate sources like glycerol, lactate and amino-acid skeletons that become pyruvate or Krebs intermediates. Acetyl-CoA from fatty acids can't make net glucose, because both of its carbons are lost as CO<sub>2</sub> in the Krebs cycle. The brain relies on glucose, so the liver uses amino acids (and glycerol) to make it. Fat yields more energy per gram than protein. Beyond the slides: later in starvation the liver also makes ketone bodies from acetyl-CoA, which the brain can adapt to use, sparing some protein.` },

{ id: "a073", lesson: "2.06", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A patient's liver can still deaminate amino acids but cannot convert the nitrogen waste into urea. If they eat a high-protein diet, what builds up in their blood?`,
  options: [
    `Glucose, because all of the amino acids are turned into sugar`,
    `Fatty acids, because the extra amino acids are stored as fat`,
    `Pyruvate, because the carbon skeletons cannot enter the Krebs cycle`,
    `Ammonia (NH<sub>3</sub>), which is toxic`],
  answer: 3,
  explain: `Deamination removes the amino group as ammonia, which is toxic. The liver normally converts it to urea, which is less toxic, for the kidneys to excrete. Block that conversion and ammonia builds up (especially dangerous for the brain). The carbon skeletons aren't affected; they still go to pyruvate, acetyl-CoA or Krebs intermediates.` },

{ id: "a074", lesson: "2.06", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `A person whose pyruvate dehydrogenase does not work can still run their Krebs cycle using fatty acids as fuel.`,
  answer: true,
  explain: `β-oxidation turns fatty acids directly into acetyl-CoA inside the mitochondrion, bypassing glycolysis and pyruvate oxidation entirely, so the PDH defect doesn't block it. (Beyond the slides: this is why a high-fat, low-carbohydrate diet is used to treat real PDH deficiency.)` },

{ id: "a075", lesson: "2.06", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `A person's muscle PFK is defective, so glucose and glycogen can't get past step 3 of glycolysis. Which fuel can their muscles still use for most of their ATP?`,
  options: [
    `Fatty acids, because β-oxidation makes acetyl-CoA, which bypasses glycolysis`,
    `Glucose, because hexokinase can turn it directly into pyruvate`,
    `Glycogen, because its glucose enters glycolysis after step 3`,
    `Lactate, because it is made directly from fructose-6-phosphate`],
  answer: 0,
  explain: `Fatty acids → β-oxidation → acetyl-CoA → Krebs cycle → NADH and FADH<sub>2</sub> → ETC. This route never uses PFK. Glycogen breakdown releases glucose(-6-phosphate), which enters <em>before</em> step 3, so it is blocked too. Hexokinase only makes glucose-6-phosphate, and lactate comes from pyruvate, not fructose-6-phosphate.` },

{ id: "a076", lesson: "2.06", type: "mcq", kind: "applied", tier: "extra", level: 4,
  q: `A gram of fat releases more than twice as much energy as a gram of carbohydrate when fully oxidized. Which explanation fits what you know about respiration?`,
  options: [
    `Fats skip the ETC entirely, so none of their energy is lost as heat`,
    `Fatty acid carbons are more reduced (many C–H bonds, little oxygen), so each gram loads more electrons onto NADH and FADH<sub>2</sub>`,
    `Fats are broken down by fermentation, which is more efficient than aerobic respiration`,
    `Fats contain nitrogen, which releases extra energy when it is removed as urea`],
  answer: 1,
  explain: `Glucose already contains a lot of oxygen (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>), so it is partly oxidized. Fatty acids are long chains of C–H bonds with very little oxygen, so oxidizing them strips off many more high-energy electrons per carbon, giving more NADH and FADH<sub>2</sub> for the ETC and more ATP per gram. Fats are oxidized aerobically (β-oxidation → Krebs → ETC), and they contain no nitrogen. Beyond the slides.` },

// ---------- 2.07 Fermentation & Yeast ----------
{ id: "a077", lesson: "2.07", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Yeast completely ferment 0.10 mol of glucose in a sealed flask. How many moles of CO<sub>2</sub> and ethanol form, and how much CO<sub>2</sub> would full aerobic respiration of the same glucose release?`,
  options: [
    `0.10 mol CO<sub>2</sub> and 0.10 mol ethanol; aerobic would give 0.60 mol CO<sub>2</sub>`,
    `0.20 mol CO<sub>2</sub> and 0.20 mol ethanol; aerobic would give the same 0.20 mol CO<sub>2</sub>`,
    `0.20 mol CO<sub>2</sub> and 0.20 mol ethanol; aerobic would give 0.60 mol CO<sub>2</sub>`,
    `0.60 mol CO<sub>2</sub> and 0.20 mol ethanol; aerobic would give 0.20 mol CO<sub>2</sub>`],
  answer: 2,
  explain: `Alcohol fermentation: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub>, so 0.10 × 2 = 0.20 mol of each. Aerobic: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O, so 0.60 mol CO<sub>2</sub> and no ethanol. Fermentation releases only 2 of glucose's 6 carbons as CO<sub>2</sub>; the other 4 stay in ethanol, which still holds most of the energy.` },

{ id: "a078", lesson: "2.07", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A student measures CO<sub>2</sub> from identical yeast + glucose tubes at different temperatures. Which explanation fits the results from 35 °C to 70 °C?
<table class="data"><thead><tr><th>Water bath (°C)</th><th>5</th><th>20</th><th>35</th><th>50</th><th>70</th></tr></thead><tbody><tr><td>CO<sub>2</sub> in 20 min (mL)</td><td>2</td><td>11</td><td>26</td><td>9</td><td>0</td></tr></tbody></table>`,
  options: [
    `The 35 °C tube used up the glucose, leaving none for the hotter tubes`,
    `At high temperatures yeast switch to aerobic respiration, which makes no CO<sub>2</sub>`,
    `CO<sub>2</sub> was made at 70 °C but dissolved in the hot water instead of being collected`,
    `Above the optimum, heat denatures yeast enzymes and kills the cells, so fermentation slows and stops`],
  answer: 3,
  explain: `Up to about 35 °C, more kinetic energy means more enzyme–substrate collisions, so glycolysis and fermentation speed up. Above the optimum, enzyme shapes (and active sites) are disrupted, which is denaturation, and the yeast die. Each tube had its own glucose. Aerobic respiration makes <em>more</em> CO<sub>2</sub>, not none. Gases are less soluble in hot water, not more. This is also why yeast are proofed in warm water, not hot water.` },

{ id: "a079", lesson: "2.07", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Baker's yeast (<em>Saccharomyces cerevisiae</em>) is given equal masses of different sugars. What is the best explanation for the lactose and sucralose results?
<table class="data"><thead><tr><th>Sugar</th><th>CO<sub>2</sub> after 30 min (mL)</th></tr></thead><tbody><tr><td>Glucose</td><td>30</td></tr><tr><td>Fructose</td><td>28</td></tr><tr><td>Sucrose</td><td>26</td></tr><tr><td>Lactose</td><td>1</td></tr><tr><td>Sucralose (artificial sweetener)</td><td>0</td></tr><tr><td>No sugar (control)</td><td>0</td></tr></tbody></table>`,
  options: [
    `The yeast lack the enzymes to break down or use these molecules, so they never enter glycolysis`,
    `Lactose and sucralose are so sweet that they kill the yeast by osmosis`,
    `Lactose and sucralose are fermented into lactate, which releases no CO<sub>2</sub>`,
    `These sugars can only be used by aerobic respiration, which takes longer to start`],
  answer: 0,
  explain: `Enzymes are specific. Glucose and fructose enter glycolysis directly. Sucrose must first be split into glucose + fructose by an enzyme the yeast release (invertase), so it lags slightly. This yeast doesn't make lactase, so lactose (milk sugar) can't be split and used, and sucralose isn't a usable fuel at all. Lactate fermentation is the animal pathway; yeast make ethanol + CO<sub>2</sub>. (The invertase and lactase details go beyond the slides.)` },

{ id: "a080", lesson: "2.07", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `In a yeast experiment, CO<sub>2</sub> collected in 30 min was 25 mL with 0% salt, 23 mL with 1%, 9 mL with 5%, and 1 mL with 10%. Why does high salt slow fermentation?`,
  options: [
    `Salt reacts with the CO<sub>2</sub>, so less gas can be collected`,
    `The salty solution is hypertonic, so water leaves the yeast by osmosis and their enzymes work poorly`,
    `Salt is an extra fuel, so the yeast stop using glucose`,
    `Salt releases oxygen, so the yeast switch to aerobic respiration`],
  answer: 1,
  explain: `When the outside solution is more concentrated than the cytoplasm, water moves out of the cells by osmosis. The cells shrink, and their glycolysis and fermentation enzymes work poorly (high ion levels also disturb enzyme shape). A little salt (1%) barely matters, which is why bread recipes use a small amount, partly to control the rise. Salt is not a fuel and does not supply O<sub>2</sub>.` },

{ id: "a081", lesson: "2.07", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `Bread dough sealed in an airtight container will stop producing CO<sub>2</sub> once the yeast have used up the oxygen.`,
  answer: false,
  explain: `Yeast are facultative anaerobes. When O<sub>2</sub> runs out they switch to alcohol fermentation: pyruvate → acetaldehyde + CO<sub>2</sub> (pyruvate decarboxylase), then acetaldehyde + NADH → ethanol + NAD<sup>+</sup> (alcohol dehydrogenase). CO<sub>2</sub> keeps being released, and the gluten network traps it, which is what makes dough rise. It's animals' lactic acid fermentation that makes no CO<sub>2</sub>.` },

{ id: "a082", lesson: "2.07", type: "tf", kind: "applied", tier: "likely", level: 2,
  q: `Most of the ethanol made by yeast in bread dough evaporates during baking.`,
  answer: true,
  explain: `Ethanol boils at about 78 °C, well below oven temperature, so it vaporizes and escapes. Early in baking, the expanding gases (CO<sub>2</sub> and ethanol vapour) help the loaf puff up. Then the heat kills the yeast and denatures their enzymes, so fermentation stops. A small amount of ethanol can remain.` },

{ id: "a083", lesson: "2.07", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `To test pH, a student adds both lemon juice and baking soda to a yeast tube. Its balloon inflates within seconds, faster than any other tube, and a control tube with the same additions but no yeast inflates too. What does this show?`,
  options: [
    `Baking soda is a sugar, so it gave the yeast extra fuel`,
    `Baking soda killed the yeast instantly, and the gas came from the dead cells`,
    `The acid–baking soda reaction made CO<sub>2</sub> on its own, so gas volume no longer measures fermentation alone`,
    `Baking soda supplied oxygen, so the yeast switched to aerobic respiration`],
  answer: 2,
  explain: `Sodium bicarbonate releases CO<sub>2</sub> when it reacts with an acid (that's how chemical leaveners work), which adds a confounding source of gas. The no-yeast control exposes the problem. A better design changes pH one way per tube (or uses buffers) and subtracts a no-yeast control. Extreme pH really does slow fermentation by changing enzyme shape, but this fast foam isn't evidence of that.` },

{ id: "a084", lesson: "2.07", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `Yeast deep in a sealed vat of grape juice switch to making ethanol. What is the real reason they ferment instead of respiring aerobically?`,
  options: [
    `Ethanol is a better fuel for yeast than glucose is`,
    `Fermentation makes more ATP per glucose than aerobic respiration`,
    `Making ethanol to kill competing bacteria is the main purpose of fermentation`,
    `Without O<sub>2</sub> the ETC stops, so NADH must be oxidized another way to regenerate NAD<sup>+</sup> for glycolysis`],
  answer: 3,
  explain: `With no final electron acceptor, the ETC (and so the Krebs cycle) stops and NADH can't be oxidized. The real purpose of fermentation is to regenerate NAD<sup>+</sup> so glycolysis (step 6) can keep making its 2 ATP. Fermentation gives far <em>less</em> ATP (2 vs 36–38), and ethanol is a waste product; it may harm competitors, but that's not why the pathway runs.` },

{ id: "a085", lesson: "2.07", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `Because fermentation captures only about 2% of glucose's energy as ATP, the other 98% is released as heat.`,
  answer: false,
  explain: `Most of the energy is never released: it stays in the chemical bonds of the waste product (lactate or ethanol), because fermentation only partly oxidizes glucose. That's why ethanol can be burned as a fuel, and why lactate can be sent to the liver or heart and used later.` },

{ id: "a086", lesson: "2.07", type: "tf", kind: "applied", tier: "essential", level: 2,
  q: `The burning feeling in your legs during a hard sprint is caused by lactic acid building up in the muscle.`,
  answer: false,
  explain: `Said in class: the burn comes from H<sup>+</sup> released by rapid ATP hydrolysis during muscle contraction. Muscles make lactate, and lactate actually helps buffer the acid by taking up protons. The lactate is then reused: shuttled to slow-twitch fibres, sent to the liver to make glucose, or used as fuel by the heart and brain.` },

{ id: "a087", lesson: "2.07", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `Lactate released by a sprinting leg muscle can be taken up by the heart, converted back to pyruvate, and oxidized for ATP.`,
  answer: true,
  explain: `The lactate dehydrogenase reaction is reversible, so the heart (and brain, and slow-twitch fibres) can turn lactate back into pyruvate (making NADH) and send the pyruvate into the mitochondria. The liver can also turn lactate into glucose by gluconeogenesis (the Cori cycle). Lactate is a fuel, not just waste.` },

{ id: "a088", lesson: "2.07", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Compared with a 100 m sprinter's fast-twitch leg muscle, a marathon runner's slow-twitch muscle would most likely have…`,
  options: [
    `more mitochondria and capillaries, because steady aerobic respiration supplies most of its ATP`,
    `fewer mitochondria, because endurance running relies mainly on fermentation`,
    `no lactate dehydrogenase, because a marathon runner's muscles never make or use lactate`,
    `the same number of mitochondria but more glycogen, because fuel is the only limit`],
  answer: 0,
  explain: `A 10-second sprint needs ATP faster than O<sub>2</sub> can be delivered, so fast-twitch fibres lean heavily on glycolysis plus lactic acid fermentation (fast, but only 2 ATP per glucose). A marathon lasts hours, so its ATP must come from aerobic respiration (up to 38 per glucose, plus fat), which needs many mitochondria and capillaries. Slow-twitch fibres even take up lactate and oxidize it, so they certainly have LDH.` },

{ id: "a089", lesson: "2.07", type: "mcq", kind: "applied", tier: "extra", level: 4,
  q: `A brewer bubbles air through a very sugary liquid, expecting the yeast to respire aerobically, but ethanol still forms. Which explanation fits?`,
  options: [
    `The air bubbles push oxygen out of the yeast cells, so the cells are actually anaerobic`,
    `With lots of sugar, this yeast ferments even when O<sub>2</sub> is present, because glycolysis outpaces its mitochondria`,
    `Ethanol is made by the ETC when oxygen accepts electrons at complex IV`,
    `Yeast have no mitochondria, so they can never respire aerobically`],
  answer: 1,
  explain: `Beyond the slides: <em>Saccharomyces cerevisiae</em> is "Crabtree-positive". When sugar is abundant, it runs glycolysis very fast and ferments even with oxygen present, because fermentation is the quickest way to regenerate NAD<sup>+</sup> for that fast glycolysis (and the ethanol suppresses competitors). The class rule (ferment when O<sub>2</sub> is scarce) is still the main idea; this is an exception. Yeast are eukaryotes with mitochondria, and the ETC makes water, not ethanol.` },

// ---------- Mixed ----------
{ id: "a090", lesson: "mix", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `Mature red blood cells have no mitochondria. During cyanide poisoning, how would their ATP production compare with that of heart muscle cells?`,
  options: [
    `It would stop first, because red blood cells carry the oxygen that cyanide attacks`,
    `It would stop at the same rate, because every cell relies on the same ETC`,
    `It would continue, because they make all their ATP by glycolysis and lactic acid fermentation`,
    `It would rise, because red blood cells switch on an ETC when the heart fails`],
  answer: 2,
  explain: `Cyanide blocks complex IV, which red blood cells don't have. They already make all their ATP by glycolysis (2 per glucose) and regenerate NAD<sup>+</sup> with lactate dehydrogenase, so cyanide doesn't directly hit their ATP supply. Heart cells depend on oxidative phosphorylation and fail quickly. Cyanide blocks the use of oxygen; it doesn't attack the oxygen itself.` },

{ id: "a091", lesson: "mix", type: "mcq", kind: "applied", tier: "likely", level: 4,
  q: `Match each problem to the FIRST stage of respiration it blocks: (1) no O<sub>2</sub>; (2) no coenzyme A; (3) no NAD<sup>+</sup> in the cytoplasm; (4) no oxaloacetate.`,
  options: [
    `1 Krebs cycle; 2 Krebs cycle; 3 ETC; 4 pyruvate oxidation`,
    `1 glycolysis; 2 pyruvate oxidation; 3 Krebs cycle; 4 ETC`,
    `1 ETC; 2 Krebs cycle; 3 pyruvate oxidation; 4 glycolysis`,
    `1 ETC; 2 pyruvate oxidation; 3 glycolysis; 4 Krebs cycle`],
  answer: 3,
  explain: `O<sub>2</sub> is the final electron acceptor of the ETC. CoA is attached to the acetyl group in pyruvate oxidation (the Krebs cycle also uses CoA later, but pyruvate oxidation comes first). Cytoplasmic NAD<sup>+</sup> is needed at glycolysis step 6. Oxaloacetate combines with acetyl-CoA in the first step of the Krebs cycle. Each block eventually affects the other stages too.` },

{ id: "a092", lesson: "mix", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `A cell fully oxidizes 3 glucose molecules aerobically. Using class values, what are the totals for O<sub>2</sub> used, CO<sub>2</sub> released, and maximum ATP?`,
  options: [
    `18 O<sub>2</sub>, 18 CO<sub>2</sub>, 114 ATP`,
    `6 O<sub>2</sub>, 6 CO<sub>2</sub>, 38 ATP`,
    `18 O<sub>2</sub>, 12 CO<sub>2</sub>, 108 ATP`,
    `9 O<sub>2</sub>, 18 CO<sub>2</sub>, 114 ATP`],
  answer: 0,
  explain: `Per glucose: 6 O<sub>2</sub> used (at complex IV), 6 CO<sub>2</sub> released (2 in pyruvate oxidation + 4 in the Krebs cycle), and a maximum of 38 ATP. Multiply by 3: 18, 18, 114. "12 CO<sub>2</sub>" counts only the Krebs cycle; the second option is the answer for one glucose.` },

{ id: "a093", lesson: "mix", type: "mcq", kind: "applied", tier: "likely", level: 3,
  q: `When 10 glucose molecules are fully oxidized, how many NADH and FADH<sub>2</sub> in total are sent to the ETC (from glycolysis, pyruvate oxidation and the Krebs cycle)?`,
  options: [
    `60 NADH and 20 FADH<sub>2</sub>`,
    `100 NADH and 20 FADH<sub>2</sub>`,
    `100 NADH and 10 FADH<sub>2</sub>`,
    `80 NADH and 20 FADH<sub>2</sub>`],
  answer: 1,
  explain: `Per glucose: 2 NADH (glycolysis) + 2 (pyruvate oxidation) + 6 (Krebs) = 10 NADH, and 2 FADH<sub>2</sub> (Krebs, one per turn). × 10 = 100 NADH and 20 FADH<sub>2</sub>. "60" counts only the Krebs cycle; "80" forgets the NADH from pyruvate oxidation; "10 FADH<sub>2</sub>" forgets that there are two turns per glucose.` },

{ id: "a094", lesson: "mix", type: "tf", kind: "applied", tier: "likely", level: 3,
  q: `Using class values, fully oxidizing ONE pyruvate (pyruvate oxidation + one Krebs turn + ETC) yields 15 ATP.`,
  answer: true,
  explain: `Pyruvate oxidation: 1 NADH = 3. One Krebs turn: 3 NADH (9) + 1 FADH<sub>2</sub> (2) + 1 ATP = 12. Total 3 + 12 = 15. Check against the glucose total: 2 pyruvate × 15 = 30, plus glycolysis's 2 ATP and 2 NADH (6) = 38.` },

];
