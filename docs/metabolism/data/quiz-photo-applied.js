// Applied quiz, photosynthesis (lessons 2.08-2.11): new scenarios that use the facts, plus homework extensions
// (Light Reaction review, Calvin Cycle review, textbook 3.4 questions). "extra" tier = beyond the slides.
// Class values: 1 ATP per 4 H+; per glucose 6 CO2, 18 ATP, 12 NADPH; photorespiration loses 25% of the carbon.
window.QUIZ_APPLIED = window.QUIZ_APPLIED || [];
window.QUIZ_APPLIED.push(

// ---------- 2.08 Intro to Photosynthesis ----------
{ id: "pa01", lesson: "2.08", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A researcher waters a plant with water made with the heavy oxygen isotope <sup>18</sup>O (H<sub>2</sub><sup>18</sup>O) and supplies normal CO<sub>2</sub>. Where will the <sup>18</sup>O show up?`,
  options: [
    `In the glucose made by the Calvin cycle`,
    `In the O<sub>2</sub> gas released by the leaf`,
    `In the CO<sub>2</sub> the leaf releases`,
    `Nowhere: it stays in the water inside the chloroplast`],
  answer: 1,
  explain: `Water is split in photolysis (2 H<sub>2</sub>O → 4 H<sup>+</sup> + 4 e<sup>−</sup> + O<sub>2</sub>), so its oxygen atoms become the O<sub>2</sub> released. This is the classic evidence for the class rule that the O<sub>2</sub> comes from water, not CO<sub>2</sub>. The sugar's oxygen comes from CO<sub>2</sub>.` },

{ id: "pa02", lesson: "2.08", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A second plant gets labelled carbon dioxide (C<sup>18</sup>O<sub>2</sub>) and normal water. Where does the <sup>18</sup>O end up?`,
  options: [
    `In the O<sub>2</sub> released by the leaf`,
    `Equally in the O<sub>2</sub> and in the sugar`,
    `In the sugar made by the Calvin cycle (and some in water made there), but not in the O<sub>2</sub>`,
    `Nowhere: CO<sub>2</sub> oxygen leaves the leaf unchanged`],
  answer: 2,
  explain: `CO<sub>2</sub> is fixed by RuBisCO and reduced to G3P and then glucose, so its oxygen ends up in the sugar (the extra oxygen leaves as water made in the cycle). None of it appears in the O<sub>2</sub>, because all of the O<sub>2</sub> comes from splitting water. Together with the H<sub>2</sub><sup>18</sup>O result, this shows the two reactants have different jobs.` },

{ id: "pa03", lesson: "2.08", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Three identical plants are grown for two weeks under light of the same intensity but a different colour: red, blue-violet, or green. Which plant most likely grows the least?`,
  options: [
    `The plant under red light`,
    `The plant under blue-violet light`,
    `All three grow equally, because the intensity is the same`,
    `The plant under green light`],
  answer: 3,
  explain: `Chlorophyll a and b absorb strongly in the red and blue-violet and poorly in the green, so most green light is reflected or transmitted and cannot drive photosynthesis. Growth under green is not zero, because accessory pigments absorb some of it, but it is the lowest. Equal intensity does not mean equal absorbed energy.` },

{ id: "pa04", lesson: "2.08", type: "mcq", kind: "applied", tier: "extra", level: 2,
  q: `In a classic experiment, a filament of green alga was lit with light spread out into a spectrum (like a rainbow), and bacteria that swim toward oxygen were added. Where did the bacteria gather?`,
  options: [
    `Along the parts of the alga lit by blue-violet and red light`,
    `Along the part lit by green light`,
    `Evenly along the whole filament`,
    `Only along the part lit by yellow light`],
  answer: 0,
  explain: `The bacteria gather where the most O<sub>2</sub> is released, which is where photosynthesis is fastest. That matches the absorption peaks of chlorophyll (blue-violet and red). This experiment (Engelmann, 1880s) was the first action spectrum: it showed which colours actually drive photosynthesis.` },

{ id: "pa05", lesson: "2.08", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `On a leaf chromatogram the solvent front is 100 mm above the origin. Four bands sit at 96 mm, 70 mm, 48 mm and 35 mm above the origin. What is the R<sub>f</sub> of the band at 48 mm, and which pigment is it?`,
  options: [
    `0.35, chlorophyll b`,
    `0.48, chlorophyll a`,
    `0.48, xanthophyll`,
    `0.52, chlorophyll a`],
  answer: 1,
  explain: `R<sub>f</sub> = 48 mm ÷ 100 mm = 0.48. Counting from the top, the order is carotene (0.96), xanthophyll (0.70), chlorophyll a (0.48), chlorophyll b (0.35), so the third band is chlorophyll a. 0.52 comes from measuring down from the solvent front, which is the wrong reference point.` },

{ id: "pa06", lesson: "2.08", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `The solvent front on a chromatogram travelled 90 mm. Chlorophyll b has an R<sub>f</sub> of 0.30. How far from the origin line is the chlorophyll b band?`,
  options: [
    `30 mm`,
    `3 mm`,
    `27 mm`,
    `63 mm`],
  answer: 2,
  explain: `Rearrange R<sub>f</sub> = pigment distance ÷ solvent distance: pigment distance = 0.30 × 90 mm = 27 mm. 63 mm is how far the band sits below the solvent front, not above the origin.` },

{ id: "pa07", lesson: "2.08", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A student measures every distance from the bottom edge of the paper instead of from the pencil origin line, which is 15 mm above the edge. The true distances are: solvent front 85 mm and chlorophyll b 30 mm above the origin. How does the student's R<sub>f</sub> for chlorophyll b compare with the true value?`,
  options: [
    `Exactly the same, because both distances change by the same amount`,
    `Too low, because the solvent distance gets bigger`,
    `Impossible to tell without knowing the band colour`,
    `Too high: 45 ÷ 100 = 0.45 instead of 30 ÷ 85 ≈ 0.35`],
  answer: 3,
  explain: `Adding the same 15 mm to the top and bottom of a fraction smaller than 1 pushes it toward 1, so every R<sub>f</sub> comes out too high (the error is biggest for the low bands). That is why the lab says to measure from the origin line to the top of each band.` },

{ id: "pa08", lesson: "2.08", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Pigments from a bright yellow autumn birch leaf are separated by paper chromatography next to pigments from a green summer leaf. What difference do you expect?`,
  options: [
    `The autumn leaf shows clear carotene and xanthophyll bands but faint or missing chlorophyll a and b bands`,
    `The autumn leaf shows strong chlorophyll bands but no carotene or xanthophyll bands`,
    `The autumn leaf shows a new yellow band above carotene, made from broken-down chlorophyll`,
    `Both strips look identical, because a leaf's pigments never change`],
  answer: 0,
  explain: `In fall, chlorophyll breaks down and is not replaced, while the carotenoids and xanthophylls that were there all summer remain. So the yellow and orange bands are still there, but the green bands fade. The yellow pigments are unmasked, not newly made from chlorophyll.` },

{ id: "pa09", lesson: "2.08", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `An autumn leaf has lost most of its chlorophyll but still contains plenty of carotenoids. Why does its rate of photosynthesis drop sharply anyway?`,
  options: [
    `Carotenoids absorb no light at all`,
    `Carotenoids are accessory pigments: they pass energy on, but chlorophyll a is needed at the reaction centres to give up electrons`,
    `Carotenoids block CO<sub>2</sub> from entering the stomata`,
    `Carotenoids reflect all the red light the Calvin cycle needs`],
  answer: 1,
  explain: `Carotenoids do absorb light (blue-green), but they can only hand the energy to chlorophyll a. With little chlorophyll a left, few reaction centres can send electrons down the chain, so the light reactions slow down and so does the Calvin cycle. The Calvin cycle does not use light directly.` },

{ id: "pa10", lesson: "2.08", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `In the chromatography lab, a student pours in too much solvent and the pigment line ends up below the solvent surface. What will the student most likely see?`,
  options: [
    `The bands separate faster and more clearly`,
    `Only carotene moves; the chlorophylls stay at the origin`,
    `The pigments dissolve into the solvent in the beaker, so few or no bands form on the paper`,
    `The bands appear in reverse order`],
  answer: 2,
  explain: `The lab warns that the pigment line must stay about 1 cm above the solvent. If it is under the surface, the pigments wash off into the pool of solvent instead of being carried up the paper by capillary action, and the student has to start over.` },

// ---------- 2.09 Light Reactions ----------
{ id: "pa11", lesson: "2.09", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Extending the Light Reaction review (Q3): a maple tree has sun leaves at the top of its crown and shade leaves deep inside. Which description best fits a shade leaf?`,
  options: [
    `Smaller and thicker, with less chlorophyll per chloroplast`,
    `Exactly the same as a sun leaf, because the leaves share the same DNA`,
    `Thicker, with extra layers of palisade cells`,
    `Broader and thinner, with more chlorophyll per chloroplast to catch scarce light`],
  answer: 3,
  explain: `Class key: in shade, fewer photons arrive, so less ATP and NADPH are made; plants respond with broader, thinner leaves (more surface area) and more chlorophyll per chloroplast. Thick leaves with extra palisade layers are typical of sun leaves. Same DNA does not mean same form: genes respond to conditions.` },

{ id: "pa12", lesson: "2.09", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `The herbicide DCMU blocks electrons from leaving photosystem II for plastoquinone. What happens in a treated leaf in bright light?`,
  options: [
    `O<sub>2</sub> release and NADPH production stop, so the Calvin cycle soon stops for lack of NADPH and ATP`,
    `The Calvin cycle stops, but O<sub>2</sub> release continues normally`,
    `ATP production increases, because more H<sup>+</sup> is pumped`,
    `Photosystem II starts passing electrons straight to NADP<sup>+</sup>`],
  answer: 0,
  explain: `If P680 cannot pass its electrons on, it cannot accept more from water, so photolysis and O<sub>2</sub> release stop. No electrons reach PSI and NADP<sup>+</sup>, so NADPH stops, and H<sup>+</sup> pumping by the PQ → b6-f chain drops, so ATP falls. Without ATP and NADPH, the Calvin cycle stops and the weed starves.` },

{ id: "pa13", lesson: "2.09", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `The herbicide atrazine also blocks electron flow out of photosystem II. Why does this mode of action kill weeds but not affect the same process in a mouse that eats treated grass?`,
  options: [
    `Mice can split water without photosystem II`,
    `Mice have no chloroplasts or photosystems, so the herbicide's target does not exist in their cells`,
    `Atrazine is destroyed by sunlight before mice can eat it`,
    `Mice use NADPH instead of NADH in their electron transport chain`],
  answer: 1,
  explain: `Herbicides are designed around targets only plants have. Animal cells make ATP in mitochondria (with NADH, FADH<sub>2</sub> and O<sub>2</sub>), not with photosystems. That does not prove a chemical is harmless overall; it just means this particular target is missing.` },

{ id: "pa14", lesson: "2.09", type: "mcq", kind: "applied", tier: "extra", level: 2,
  q: `Chloroplasts are treated with DCMU, which blocks electron flow from photosystem II to plastoquinone, and then lit. Which process can still run?`,
  options: [
    `Photolysis of water`,
    `Non-cyclic flow to NADP<sup>+</sup>`,
    `Cyclic electron flow around photosystem I, making some ATP but no NADPH or O<sub>2</sub>`,
    `The Calvin cycle at its normal rate`],
  answer: 2,
  explain: `Cyclic flow does not need PSII: P700 → Fd → PQ/b6-f → PC → P700, and DCMU blocks only the PSII → PQ step. So PSI can keep pumping H<sup>+</sup> and making ATP. With no NADPH, the Calvin cycle cannot run normally. Researchers use DCMU for exactly this reason: to study cyclic flow on its own.` },

{ id: "pa15", lesson: "2.09", type: "mcq", kind: "applied", tier: "extra", level: 2,
  q: `The herbicide paraquat steals electrons from photosystem I before they reach ferredoxin. Which product of the light reactions stops being made?`,
  options: [
    `O<sub>2</sub>`,
    `ATP`,
    `The H<sup>+</sup> gradient in the lumen`,
    `NADPH`],
  answer: 3,
  explain: `Electrons still flow from water through PSII, the PQ → b6-f → PC chain and PSI, so O<sub>2</sub> is released and H<sup>+</sup> is pumped (ATP can still be made). But the electrons are diverted before ferredoxin and NADP<sup>+</sup> reductase, so NADPH is not made. (Paraquat also passes the electrons to O<sub>2</sub>, making harmful reactive oxygen.)` },

{ id: "pa16", lesson: "2.09", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `In a chloroplast, NADPH has built up and almost all the NADP<sup>+</sup> is used up, but the Calvin cycle still needs ATP. What is the most likely response?`,
  options: [
    `Ferredoxin passes electrons back to the PQ/cytochrome b6-f part of the chain (cyclic flow), making extra ATP without NADPH`,
    `Photosystem II speeds up to make even more NADPH`,
    `Electrons are passed to O<sub>2</sub> to make water, as in mitochondria`,
    `The Calvin cycle starts making its own ATP`],
  answer: 0,
  explain: `With no NADP<sup>+</sup> to accept electrons, ferredoxin sends them back into the chain: cyclic flow. It pumps extra H<sup>+</sup> for ATP and makes no NADPH, which is exactly what is needed, since the Calvin cycle uses 18 ATP but only 12 NADPH per glucose.` },

{ id: "pa17", lesson: "2.09", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A chemical makes the thylakoid membrane leaky to H<sup>+</sup>, so H<sup>+</sup> flows back into the stroma without passing through ATP synthase. Electron flow keeps going. What happens?`,
  options: [
    `ATP, NADPH and O<sub>2</sub> production all stop`,
    `NADPH and O<sub>2</sub> are still produced, but ATP production falls sharply`,
    `ATP production rises, because H<sup>+</sup> moves faster`,
    `Only O<sub>2</sub> production stops`],
  answer: 1,
  explain: `This chemical is an uncoupler: it separates electron flow from ATP synthesis. Water is still split (O<sub>2</sub>) and electrons still reach NADP<sup>+</sup> (NADPH), but the H<sup>+</sup> gradient leaks away instead of driving ATP synthase. The same thing happens in mitochondria with uncouplers such as DNP.` },

{ id: "pa18", lesson: "2.09", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Which pH values best match the stroma and the thylakoid lumen of a chloroplast in bright light?`,
  options: [
    `Stroma pH 5, lumen pH 8`,
    `Both pH 7`,
    `Stroma pH 8, lumen pH 5`,
    `Stroma pH 2, lumen pH 12`],
  answer: 2,
  explain: `H<sup>+</sup> is pumped into the lumen and also released there by photolysis, so the lumen is acidic (about pH 5). The stroma loses H<sup>+</sup> (some is also used to make NADPH), so it becomes slightly basic (about pH 8). A difference of 3 pH units means about 1000 times more H<sup>+</sup> in the lumen.` },

{ id: "pa19", lesson: "2.09", type: "mcq", kind: "applied", tier: "extra", level: 2,
  q: `Thylakoids are soaked in an acidic buffer (pH 4) in the dark until their lumen is pH 4, then quickly moved into a pH 8 buffer containing ADP and P<sub>i</sub>, still in the dark. A burst of ATP is made. What does this show?`,
  options: [
    `Light energy is stored directly inside ATP synthase`,
    `Chlorophyll can make ATP in the dark`,
    `The Calvin cycle can make ATP`,
    `An H<sup>+</sup> gradient by itself, without light or electron flow, can drive ATP synthesis (chemiosmosis)`],
  answer: 3,
  explain: `The experimenters created the H<sup>+</sup> gradient artificially (high H<sup>+</sup> inside, low outside), and ATP synthase used it to make ATP with no light at all. That supports chemiosmosis: in normal photosynthesis, light-driven electron flow only builds the gradient, and the gradient powers ATP synthase.` },

{ id: "pa20", lesson: "2.09", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A mutant plant cannot make plastocyanin. What is the most direct effect on the light reactions?`,
  options: [
    `Electrons cannot get from cytochrome b6-f to photosystem I, so P700 is not refilled and NADPH production stops`,
    `Water can no longer be split, but NADPH is still made normally`,
    `Photosystem I starts getting electrons directly from water`,
    `Only cyclic flow stops; non-cyclic flow runs normally`],
  answer: 0,
  explain: `Plastocyanin carries electrons from b6-f to P700. Without it, electrons back up in the PQ/b6-f part of the chain, P700 cannot be refilled after it is excited, and NADPH stops. Cyclic flow also needs plastocyanin to return electrons to P700, so it stops too. Soon PSII also stalls, because its electrons have nowhere to go.` },

{ id: "pa21", lesson: "2.09", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A mutant plant lacks NADP<sup>+</sup> reductase. In the light, what can its chloroplasts still make?`,
  options: [
    `NADPH, but no ATP`,
    `ATP, through cyclic electron flow (ferredoxin sends electrons back into the chain)`,
    `Glucose, at the normal rate`,
    `Nothing at all, because photosystem I can no longer absorb light`],
  answer: 1,
  explain: `Without NADP<sup>+</sup> reductase, electrons at ferredoxin cannot reduce NADP<sup>+</sup>, so no NADPH is made. PSI still absorbs light, and ferredoxin can send electrons back through PQ/b6-f and PC (cyclic flow), pumping H<sup>+</sup> for ATP. Without NADPH, the Calvin cycle cannot make G3P, so glucose production stops.` },

{ id: "pa22", lesson: "2.09", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `To make one glucose, the Calvin cycle uses 12 NADPH. How many water molecules must be split to supply those electrons, and how many O<sub>2</sub> molecules are released?`,
  options: [
    `6 H<sub>2</sub>O and 3 O<sub>2</sub>`,
    `6 H<sub>2</sub>O and 6 O<sub>2</sub>`,
    `12 H<sub>2</sub>O and 6 O<sub>2</sub>`,
    `24 H<sub>2</sub>O and 12 O<sub>2</sub>`],
  answer: 2,
  explain: `12 NADPH × 2 e<sup>−</sup> = 24 electrons. Each water gives 2 electrons, so 12 H<sub>2</sub>O are split. Each water also gives 1 oxygen atom: 12 O atoms = 6 O<sub>2</sub>, which matches the 6 O<sub>2</sub> in the overall equation. (The equation shows only 6 H<sub>2</sub>O because the Calvin cycle gives 6 water back.)` },

{ id: "pa23", lesson: "2.09", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Using the class model (2 photons excite 2 electrons at PSII, and 2 more photons excite those same electrons again at PSI), how many photons does non-cyclic flow need to make the 12 NADPH for one glucose?`,
  options: [
    `12`,
    `24`,
    `36`,
    `48`],
  answer: 3,
  explain: `Each NADPH needs 2 electrons, and each electron is boosted twice (once at PSII, once at PSI), so each NADPH costs 4 photons. 12 NADPH × 4 = 48 photons. Any extra ATP made by cyclic flow would need still more photons.` },

{ id: "pa24", lesson: "2.09", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Using the class value of 4 H<sup>+</sup> per ATP, how many H<sup>+</sup> must flow through ATP synthase to make the 18 ATP the Calvin cycle needs for one glucose?`,
  options: [
    `72`,
    `18`,
    `36`,
    `4.5`],
  answer: 0,
  explain: `18 ATP × 4 H<sup>+</sup> per ATP = 72 H<sup>+</sup> flowing from the lumen into the stroma. 4.5 comes from dividing instead of multiplying.` },

{ id: "pa25", lesson: "2.09", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Suppose non-cyclic flow alone gave the Calvin cycle ATP and NADPH in equal numbers, 12 of each. What would happen when the cycle tried to make one glucose?`,
  options: [
    `NADPH would run out first, so cyclic flow would make extra NADPH`,
    `ATP would run out first (6 short), so the chloroplast would use cyclic flow to make extra ATP`,
    `Both would run out at exactly the same time`,
    `Nothing: the Calvin cycle uses ATP and NADPH in equal numbers`],
  answer: 1,
  explain: `One glucose needs 18 ATP but only 12 NADPH. With 12 of each, NADPH would be enough but ATP would be 6 short. Cyclic flow solves this: it makes ATP only (no NADPH), which is why the class calls its purpose pumping extra H<sup>+</sup> for more ATP.` },

{ id: "pa26", lesson: "2.09", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Extending the Light Reaction review (Q5): the light reactions remind you of the mitochondrial electron transport chain. Which of these is a SIMILARITY rather than a difference?`,
  options: [
    `Both get their electrons from water`,
    `Both use O<sub>2</sub> as the final electron acceptor`,
    `Both pump H<sup>+</sup> across a membrane and make ATP by chemiosmosis through ATP synthase`,
    `Both are powered by light`],
  answer: 2,
  explain: `Chemiosmosis is shared: an ETC pumps H<sup>+</sup> (into the lumen or the intermembrane space) and ATP synthase uses the gradient. The rest are differences: electrons come from water vs NADH/FADH<sub>2</sub>, the final acceptor is NADP<sup>+</sup> vs O<sub>2</sub>, and the energy source is light vs the oxidation of food.` },

{ id: "pa27", lesson: "2.09", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Extending the Light Reaction review (Q6): in 6 CO<sub>2</sub> + 6 H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub>, which reactants or products are directly used or made by the light reactions?`,
  options: [
    `CO<sub>2</sub> is used and glucose is made`,
    `CO<sub>2</sub> and H<sub>2</sub>O are both used, and nothing in the equation is made`,
    `Glucose is used and O<sub>2</sub> is made`,
    `H<sub>2</sub>O is used and O<sub>2</sub> is made; CO<sub>2</sub> and glucose belong to the Calvin cycle`],
  answer: 3,
  explain: `Class key: water is a reactant (split for electrons and protons) and oxygen is released. CO<sub>2</sub> enters only in the Calvin cycle (fixed by RuBisCO), and glucose is built from G3P exported by the Calvin cycle.` },

{ id: "pa28", lesson: "2.09", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Thylakoid membranes, with all their photosystems and electron carriers but none of the stroma's Calvin cycle enzymes, are lit and given water, ADP + P<sub>i</sub> and NADP<sup>+</sup>. Which products would you detect?`,
  options: [
    `O<sub>2</sub>, ATP and NADPH, but no sugar`,
    `Sugar and O<sub>2</sub> only`,
    `Sugar, ATP and NADPH`,
    `Nothing, because the thylakoids need CO<sub>2</sub> to start`],
  answer: 0,
  explain: `Everything for the light reactions is in the thylakoid membrane, so water is split (O<sub>2</sub>), ATP is made, and NADP<sup>+</sup> is reduced to NADPH. Sugar needs RuBisCO and the other Calvin cycle enzymes from the stroma, plus CO<sub>2</sub>. The light reactions do not need CO<sub>2</sub>.` },

{ id: "pa29", lesson: "2.09", type: "mcq", kind: "applied", tier: "extra", level: 2,
  q: `Under a blue lamp, leaves treated with a herbicide that blocks electron flow out of photosystem II glow red more strongly than untreated leaves. Why?`,
  options: [
    `The herbicide is a red dye`,
    `Excited electrons at P680 cannot be passed on, so more of them fall back to the ground state and give off their energy as light (fluorescence)`,
    `The herbicide makes chlorophyll absorb green light`,
    `More O<sub>2</sub> is produced, and O<sub>2</sub> glows red`],
  answer: 1,
  explain: `Normally the primary electron acceptor captures excited electrons before they fall back. When the chain is blocked, the acceptor stays full, so excited electrons drop back to the ground state and release energy as heat and red light, just like chlorophyll in a test tube. Scientists measure this fluorescence to detect stressed or poisoned plants.` },

{ id: "pa30", lesson: "2.09", type: "tf", kind: "applied", tier: "likely", level: 2,
  q: `Extending the Light Reaction review (Q4): when a plant is moved from bright light into complete darkness, O<sub>2</sub> release stops almost at once, but CO<sub>2</sub> uptake by the Calvin cycle continues for a short time.`,
  answer: true,
  explain: `O<sub>2</sub> comes from photolysis, which needs photons, so it stops as soon as the light does. The Calvin cycle does not use light directly, so it keeps fixing CO<sub>2</sub> until the leftover ATP and NADPH run out (class key). The plant's mitochondria keep using O<sub>2</sub> in the dark as well.` },

// ---------- 2.10 Calvin Cycle ----------
{ id: "pa31", lesson: "2.10", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A plant photosynthesizing in bright light is suddenly put in the dark, with plenty of CO<sub>2</sub> still available. Over the next minute, what happens to the amounts of RuBP and PGA in the stroma?`,
  options: [
    `RuBP rises and PGA falls`,
    `Both stay the same`,
    `RuBP falls and PGA rises`,
    `Both rise`],
  answer: 2,
  explain: `Carbon fixation needs no ATP or NADPH, so RuBisCO keeps turning RuBP into PGA for a while. But reduction (PGA → G3P) needs ATP and NADPH, and regeneration (G3P → RuBP) needs ATP, and these run out without light. So PGA piles up (made but not used) and RuBP drops (used but not rebuilt).` },

{ id: "pa32", lesson: "2.10", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A plant in bright light suddenly has its CO<sub>2</sub> supply removed. What happens to the amounts of RuBP and PGA in the stroma?`,
  options: [
    `RuBP falls and PGA rises`,
    `Both fall to zero immediately`,
    `Both rise`,
    `RuBP rises and PGA falls`],
  answer: 3,
  explain: `With no CO<sub>2</sub>, RuBisCO stops using RuBP, so no new PGA is made. The light is still on, so ATP and NADPH keep turning the existing PGA into G3P and G3P back into RuBP. RuBP accumulates (made but not used) and PGA falls (used but not made). It is the mirror image of switching off the light.` },

{ id: "pa33", lesson: "2.10", type: "mcq", kind: "applied", tier: "essential", level: 2,
  q: `A leaf makes 3 glucose molecules. What does the Calvin cycle use in total?`,
  options: [
    `18 CO<sub>2</sub>, 54 ATP and 36 NADPH`,
    `6 CO<sub>2</sub>, 18 ATP and 12 NADPH`,
    `18 CO<sub>2</sub>, 36 ATP and 54 NADPH`,
    `9 CO<sub>2</sub>, 27 ATP and 18 NADPH`],
  answer: 0,
  explain: `One glucose costs 6 CO<sub>2</sub>, 18 ATP and 12 NADPH, so three cost 18 CO<sub>2</sub>, 54 ATP and 36 NADPH. The third option swaps ATP and NADPH. The last one is the cost of 3 G3P (enough for only 1.5 glucose).` },

{ id: "pa34", lesson: "2.10", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `To make 3 glucose molecules, how many G3P are made in total, and how many must be recycled to regenerate RuBP?`,
  options: [
    `18 made; 12 recycled`,
    `36 made; 30 recycled into 18 RuBP`,
    `36 made; 6 recycled`,
    `12 made; 10 recycled into 6 RuBP`],
  answer: 1,
  explain: `18 CO<sub>2</sub> → 36 PGA → 36 G3P. Six G3P leave (2 per glucose × 3) and the other 30 G3P (90 C) are rebuilt into 18 RuBP (90 C), one for each CO<sub>2</sub> that will be fixed next. The last option is correct for a single glucose.` },

{ id: "pa35", lesson: "2.10", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A C3 plant is given radioactive <sup>14</sup>CO<sub>2</sub> for just a few seconds and then killed instantly. In which compound does most of the radioactivity first appear?`,
  options: [
    `Glucose`,
    `RuBP`,
    `PGA (3-phosphoglycerate)`,
    `Oxaloacetate`],
  answer: 2,
  explain: `RuBisCO fixes CO<sub>2</sub> into PGA, the first stable product in a C3 plant, so a very short pulse labels PGA first. With longer pulses, the label spreads to G3P, sugars and eventually RuBP. This is how the Calvin cycle was worked out. Oxaloacetate would be labelled first in a C4 plant.` },

{ id: "pa36", lesson: "2.10", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Extending the Calvin Cycle review (Q1): is energy required or produced by the Calvin cycle, and how do you know?`,
  options: [
    `Produced: the cycle makes ATP when G3P is formed`,
    `Neither: the cycle runs on light alone`,
    `Produced: CO<sub>2</sub> fixation releases energy that drives the light reactions`,
    `Required: it consumes 18 ATP and 12 NADPH per glucose to build an energy-rich sugar (endergonic, anabolic)`],
  answer: 3,
  explain: `The Calvin cycle only spends ATP and NADPH; it makes none. It builds a high-energy sugar from low-energy CO<sub>2</sub>, so it needs energy input. It does not use light directly: its energy comes from the light reactions' ATP and NADPH.` },

{ id: "pa37", lesson: "2.10", type: "mcq", kind: "applied", tier: "extra", level: 2,
  q: `Extending the Calvin Cycle review (Q4): suppose RuBisCO could not be activated (for example, a plant with no working RuBisCO activase). What would happen in a lit chloroplast?`,
  options: [
    `CO<sub>2</sub> fixation stops: RuBP builds up, PGA and G3P fall, and unused ATP and NADPH pile up until the light reactions slow for lack of ADP and NADP<sup>+</sup>`,
    `PGA builds up, because RuBP is converted faster`,
    `The light reactions speed up and release more O<sub>2</sub>`,
    `Only the regeneration of RuBP stops`],
  answer: 0,
  explain: `With RuBisCO inactive, no CO<sub>2</sub> is fixed, so no PGA, G3P or sugar is made. The ATP and NADPH from the light reactions are not used, so ADP and NADP<sup>+</sup> run out, and the light reactions back up: with no NADP<sup>+</sup> to accept electrons, electron flow slows. The plant cannot grow.` },

{ id: "pa38", lesson: "2.10", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Extending the Calvin Cycle review (Q5): phosphorus is a key nutrient in fertilizer. Which list contains ONLY phosphorus-containing molecules that photosynthesis depends on?`,
  options: [
    `CO<sub>2</sub>, H<sub>2</sub>O, O<sub>2</sub>, glucose`,
    `ATP, NADPH, RuBP, G3P`,
    `Chlorophyll, β-carotene, xanthophyll, glucose`,
    `RuBisCO, malate, oxaloacetate, CO<sub>2</sub>`],
  answer: 1,
  explain: `The P in each name is a clue: ATP (three phosphates), NADPH (an extra phosphate), RuBP (ribulose bisphosphate) and G3P (glyceraldehyde-3-phosphate) all contain phosphorus, and so do the phospholipids of the thylakoid membranes. A phosphorus-starved plant cannot make enough of these, so photosynthesis slows. Chlorophyll contains magnesium, not phosphorus.` },

{ id: "pa39", lesson: "2.10", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A mouse and a green plant are sealed in a glass jar in bright light. A second jar holds an identical mouse alone. Why does the mouse with the plant survive much longer?`,
  options: [
    `The plant absorbs the mouse's body heat`,
    `The plant releases glucose into the air for the mouse`,
    `The plant uses the mouse's CO<sub>2</sub> in photosynthesis and releases O<sub>2</sub> that the mouse uses in cellular respiration`,
    `The mouse stops respiring when a plant is nearby`],
  answer: 2,
  explain: `The two processes are linked: respiration's products (CO<sub>2</sub> and H<sub>2</sub>O) are photosynthesis's reactants, and photosynthesis's products (glucose and O<sub>2</sub>) are respiration's reactants. In light, the plant removes CO<sub>2</sub> and adds O<sub>2</sub> faster than its own respiration uses it.` },

{ id: "pa40", lesson: "2.10", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `The same mouse-and-plant jar is now kept in complete darkness. What happens?`,
  options: [
    `The plant keeps releasing O<sub>2</sub> at the same rate`,
    `The plant switches to cyclic flow and keeps making O<sub>2</sub>`,
    `Nothing changes, because the plant stored O<sub>2</sub> during the day`,
    `The plant stops photosynthesizing but keeps respiring, so it also uses O<sub>2</sub> and releases CO<sub>2</sub>; the mouse runs out of O<sub>2</sub> even sooner than a mouse alone`],
  answer: 3,
  explain: `Without light there are no light reactions and no O<sub>2</sub> release (cyclic flow needs light too and never makes O<sub>2</sub>). Plant cells respire day and night, so in the dark the plant competes with the mouse for O<sub>2</sub>.` },

{ id: "pa41", lesson: "2.10", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A sprig of the water plant <em>Elodea</em> is sealed in a tube of bromothymol blue, an indicator that is blue at low CO<sub>2</sub> and turns yellow as CO<sub>2</sub> rises. One tube is kept in bright light and one in darkness. What do you expect?`,
  options: [
    `Light: stays blue (CO<sub>2</sub> is used up); dark: turns yellow (CO<sub>2</sub> is released by respiration)`,
    `Light: turns yellow; dark: stays blue`,
    `Both turn yellow, because plants always release more CO<sub>2</sub> than they use`,
    `Both stay blue, because plants never release CO<sub>2</sub>`],
  answer: 0,
  explain: `In bright light, photosynthesis uses CO<sub>2</sub> faster than respiration makes it, so CO<sub>2</sub> stays low. In the dark only respiration runs, so CO<sub>2</sub> builds up and the indicator turns yellow. Plants do release CO<sub>2</sub>, all the time, from respiration.` },

{ id: "pa42", lesson: "2.10", type: "tf", kind: "applied", tier: "likely", level: 2,
  q: `Plant leaf cells carry out cellular respiration only at night, when photosynthesis has stopped.`,
  answer: false,
  explain: `Leaf cells have mitochondria and respire all the time, day and night, to make ATP for everything other than the Calvin cycle. In bright light photosynthesis is simply faster, so the leaf takes in more CO<sub>2</sub> than it releases. At night respiration is the only process, so the leaf releases CO<sub>2</sub>.` },

{ id: "pa43", lesson: "2.10", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A poison blocks ATP synthase in both mitochondria and chloroplasts, while their electron transport chains keep pumping for a while. Where does H<sup>+</sup> build up in each organelle?`,
  options: [
    `Matrix in mitochondria; stroma in chloroplasts`,
    `Intermembrane space in mitochondria; thylakoid lumen in chloroplasts`,
    `Cytoplasm in both`,
    `Matrix in mitochondria; thylakoid lumen in chloroplasts`],
  answer: 1,
  explain: `Each ETC pumps H<sup>+</sup> into its reservoir: the intermembrane space in mitochondria and the thylakoid lumen in chloroplasts. With ATP synthase blocked, H<sup>+</sup> cannot flow back to the matrix or stroma, so it accumulates until the gradient is so steep that pumping (and electron flow) stalls.` },

{ id: "pa44", lesson: "2.10", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Under an electron microscope you see an organelle with a double membrane, its own DNA, and internal membranes in stacks of flattened sacs surrounded by fluid. Which process happens in that fluid?`,
  options: [
    `Glycolysis`,
    `The Krebs cycle`,
    `The Calvin cycle`,
    `Photolysis of water`],
  answer: 2,
  explain: `Stacks of flattened sacs (grana of thylakoids) identify a chloroplast, and the fluid around them is the stroma, home of the Calvin cycle. The Krebs cycle runs in the mitochondrial matrix (mitochondria have cristae, not stacked sacs), glycolysis in the cytoplasm, and photolysis at the thylakoid membrane, on the lumen side.` },

{ id: "pa45", lesson: "2.10", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A chloroplast fixes 12 CO<sub>2</sub>. What is the largest number of G3P it can export without running down its supply of RuBP?`,
  options: [
    `12`,
    `2`,
    `8`,
    `4`],
  answer: 3,
  explain: `12 CO<sub>2</sub> → 24 PGA → 24 G3P. To replace the 12 RuBP used (60 C), 20 G3P (60 C) must be recycled, leaving 4 G3P (12 C) to export: exactly the 12 carbons fixed. In general, 1 G3P can leave for every 3 CO<sub>2</sub> fixed.` },

// ---------- 2.11 C4 & CAM Plants ----------
{ id: "pa46", lesson: "2.11", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `On a hot, dry, sunny afternoon, a field of corn (C4) and a field of soybeans (C3) both partly close their stomata. Which crop keeps fixing carbon better, and why?`,
  options: [
    `Corn: PEP carboxylase captures CO<sub>2</sub> even at low levels and concentrates it around RuBisCO in the bundle sheath, so little photorespiration occurs`,
    `Soybean: RuBisCO works better at high temperatures`,
    `Both equally: closing stomata affects all plants the same way`,
    `Corn: it opens its stomata only at night`],
  answer: 0,
  explain: `In soybean, low CO<sub>2</sub> and high O<sub>2</sub> in a hot leaf make RuBisCO oxygenate RuBP, so photorespiration wastes carbon. Corn's PEP carboxylase has no affinity for O<sub>2</sub>, and malate delivers CO<sub>2</sub> to the bundle sheath at a high concentration. Opening stomata only at night is the CAM strategy, not C4.` },

{ id: "pa47", lesson: "2.11", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Extending textbook 3.4 (Q6): when would the vacuoles of a CAM plant hold the most malic acid, and when the least?`,
  options: [
    `Most at dusk; least at dawn`,
    `Most at dawn, after a night of fixing CO<sub>2</sub>; least at dusk, after a day of releasing it to the Calvin cycle`,
    `Most at noon; least at midnight`,
    `The amount stays the same all day`],
  answer: 1,
  explain: `All night, with stomata open, PEP carboxylase fixes CO<sub>2</sub> into malate, which is stored in the vacuole, so acid peaks at dawn. All day, with stomata closed, malate releases CO<sub>2</sub> for RuBisCO, so acid is lowest at dusk.` },

{ id: "pa48", lesson: "2.11", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A student measures the pH of sap from a pineapple leaf at 6 a.m. and again at 6 p.m. Which result fits CAM photosynthesis?`,
  options: [
    `The pH is lower (more acidic) at 6 p.m. than at 6 a.m.`,
    `There is no difference between the two times`,
    `The pH is lower (more acidic) at 6 a.m. than at 6 p.m.`,
    `The pH is higher at 6 a.m., because malate is a base`],
  answer: 2,
  explain: `Malate is stored as malic acid, an acid. By dawn the vacuoles are full of it, so the sap is most acidic (lowest pH). By evening the malate has been used to supply CO<sub>2</sub> to the Calvin cycle, so the pH has risen.` },

{ id: "pa49", lesson: "2.11", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Extending textbook 3.4 (Q8): one CAM plant is kept in continuous light for 24 h and another in continuous darkness for 24 h. Which hypothesis about their acid content is best?`,
  options: [
    `Both have the same acid content, because acid levels depend only on temperature`,
    `The plant in light has more acid, because light makes malate`,
    `The plant in darkness has less acid, because it cannot run the light reactions`,
    `The plant in darkness has more acid (malate is made and stored but never used), and the plant in light has less (malate is used up in the Calvin cycle)`],
  answer: 3,
  explain: `Malate is made in the dark (stomata open, PEP carboxylase) and used in the light (released CO<sub>2</sub> goes to RuBisCO, powered by the light reactions). In constant darkness malic acid builds up; in constant light it is drawn down. A good hypothesis states an if-then prediction and the reason.` },

{ id: "pa50", lesson: "2.11", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Extending textbook 3.4 (Q10 and Q11d): as atmospheric CO<sub>2</sub> keeps rising, how is the competition between C3 crops and C4 weeds likely to change?`,
  options: [
    `C3 plants gain more: higher CO<sub>2</sub> outcompetes O<sub>2</sub> at RuBisCO and cuts photorespiration, so the C4 advantage shrinks`,
    `C4 plants gain more, because PEP carboxylase only works at high CO<sub>2</sub>`,
    `Nothing changes, because CO<sub>2</sub> levels do not affect photosynthesis`,
    `C3 plants are harmed, because high CO<sub>2</sub> blocks RuBisCO`],
  answer: 0,
  explain: `C4 plants already concentrate CO<sub>2</sub> around RuBisCO, so extra CO<sub>2</sub> helps them little. C3 plants are limited by low CO<sub>2</sub> and photorespiration, so more CO<sub>2</sub> helps them a lot. C3 crops (wheat, soybean, rice) would compete better against C4 weeds, though hotter, drier weather from the greenhouse effect pushes the other way.` },

{ id: "pa51", lesson: "2.11", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Extending textbook 3.4 (Q9): you are looking for new plant species that use CAM photosynthesis. Which biome should you explore first?`,
  options: [
    `Temperate rainforest`,
    `Hot desert and other very dry habitats`,
    `Arctic tundra`,
    `Freshwater lakes and marshes`],
  answer: 1,
  explain: `CAM is an adaptation to extreme drought: opening stomata only at night saves water. So CAM species (cacti, agaves, many succulents) are most common in deserts and other places where water is scarce. Wet habitats give no advantage to the extra ATP cost of CAM.` },

{ id: "pa52", lesson: "2.11", type: "mcq", kind: "applied", tier: "extra", level: 2,
  q: `Extending textbook 3.4 (Q11c): which three North American crops are all C4 plants?`,
  options: [
    `Wheat, soybean and potato`,
    `Rice, oats and canola`,
    `Corn, sugar cane and sorghum`,
    `Pineapple, agave and jade plant`],
  answer: 2,
  explain: `Corn, sugar cane and sorghum are C4 grasses, among the most productive crops in the world. Wheat, soybean, potato, rice, oats and canola are C3. Pineapple, agave and the jade plant are CAM plants.` },

{ id: "pa53", lesson: "2.11", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `In a cool, moist, cloudy climate, C3 plants usually outgrow C4 plants. Why?`,
  options: [
    `C4 plants cannot open their stomata in cool weather`,
    `C3 plants use PEP carboxylase, which works better in the cold`,
    `C4 plants need a high CO<sub>2</sub> concentration in the air to survive`,
    `Photorespiration is low when it is cool, so the C4 CO<sub>2</sub> pump is not needed, and its extra ATP cost (about 30 instead of 18 ATP per glucose) becomes a disadvantage`],
  answer: 3,
  explain: `At low temperatures RuBisCO favours CO<sub>2</sub>, so C3 plants lose little to photorespiration. C4 plants still pay 2 ATP per CO<sub>2</sub> to pump it into the bundle sheath, so they waste energy on a problem that barely exists. The textbook summary: C3 plants suit cool, moist environments; C4 plants hot environments.` },

{ id: "pa54", lesson: "2.11", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Using the class photorespiration slide: RuBisCO adds O<sub>2</sub> instead of CO<sub>2</sub> to 6 RuBP, giving 6 PGA + 6 phosphoglycolate. The salvage pathway turns the 6 phosphoglycolate into 3 PGA + 3 CO<sub>2</sub>. What is the net result?`,
  options: [
    `9 PGA → 9 G3P, which is not enough to rebuild 6 RuBP (that needs 10 G3P), so no glucose is made and 3 fixed carbons are lost`,
    `12 PGA are made, so one glucose is still produced`,
    `6 carbons are gained, just as in the normal cycle`,
    `No carbon is lost; only some ATP is wasted`],
  answer: 0,
  explain: `Carbon count: 6 RuBP hold 30 C. After oxygenation and salvage the plant has 9 PGA (27 C) and has released 3 CO<sub>2</sub> (3 C). 27 C cannot even rebuild the 30 C of RuBP it started with, so there is a net loss of 3 fixed carbons and no sugar, and ATP and NADPH were spent along the way. The normal cycle with 6 CO<sub>2</sub> gains 6 C.` },

{ id: "pa55", lesson: "2.11", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Extending textbook 3.4 (Q1d): compare the products when RuBisCO acts on one RuBP with CO<sub>2</sub> versus with O<sub>2</sub>.`,
  options: [
    `With CO<sub>2</sub>: one PGA and one phosphoglycolate; with O<sub>2</sub>: two PGA`,
    `With CO<sub>2</sub>: two PGA (3C each), which can become sugar; with O<sub>2</sub>: one PGA and one 2-carbon phosphoglycolate, which is salvaged at a cost and releases CO<sub>2</sub>`,
    `Both give two PGA; only the speed differs`,
    `With CO<sub>2</sub>: oxaloacetate; with O<sub>2</sub>: malate`],
  answer: 1,
  explain: `Carboxylation: 5C + 1C → two 3C PGA, all of which can go on to G3P. Oxygenation: 5C + O<sub>2</sub> → one 3C PGA + one 2C phosphoglycolate, which is toxic and must be broken down using ATP and NADPH, releasing CO<sub>2</sub>. The first option is reversed, and oxaloacetate and malate are made by PEP carboxylase, not RuBisCO.` },

{ id: "pa56", lesson: "2.11", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `A plant is given <sup>14</sup>CO<sub>2</sub> for a few seconds. Most of the radioactivity first appears in a 4-carbon acid (oxaloacetate, then malate), and only later in PGA. What can you conclude?`,
  options: [
    `It is a C3 plant`,
    `It is not photosynthesizing at all`,
    `It fixes CO<sub>2</sub> first with PEP carboxylase, so it is a C4 (or CAM) plant`,
    `Its RuBisCO makes a 4-carbon product`],
  answer: 2,
  explain: `A 4-carbon first product means PEP carboxylase did the first fixation (PEP + CO<sub>2</sub> → oxaloacetate). The label reaches PGA later because the CO<sub>2</sub> is released from malate and fixed a second time by RuBisCO. In a C3 plant, PGA would be labelled first. RuBisCO always makes 3-carbon PGA.` },

{ id: "pa57", lesson: "2.11", type: "tf", kind: "applied", tier: "extra", level: 2,
  q: `According to the textbook, a cactus that is kept well watered may stop using CAM and behave like an ordinary C3 plant, opening its stomata during the day.`,
  answer: true,
  explain: `CAM is costly (extra ATP, slow growth), so many succulents switch it on only in desert-like dry conditions. When overwatered, they open their stomata in the day and fix CO<sub>2</sub> once, with RuBisCO, like a C3 plant.` },

{ id: "pa58", lesson: "2.11", type: "mcq", kind: "applied", tier: "likely", level: 2,
  q: `Extending textbook 3.4 (Q5): what best explains why RuBisCO binds O<sub>2</sub> at all?`,
  options: [
    `RuBisCO evolved recently, after O<sub>2</sub> levels had risen`,
    `Plants need photorespiration to make ATP`,
    `O<sub>2</sub> is needed to switch RuBisCO on`,
    `It evolved when the air had almost no O<sub>2</sub> and plenty of CO<sub>2</sub>, so its oxygenase activity cost nothing; O<sub>2</sub> built up later, released by photosynthesis itself`],
  answer: 3,
  explain: `When RuBisCO evolved, there was almost no O<sub>2</sub> to compete with CO<sub>2</sub>, so binding O<sub>2</sub> did no harm. As photosynthesis filled the air with O<sub>2</sub>, the oxygenase activity at the same active site became costly. Plants never evolved a RuBisCO that ignores O<sub>2</sub>; C4 and CAM work around the problem instead.` },

{ id: "pa59", lesson: "2.11", type: "tf", kind: "applied", tier: "essential", level: 2,
  q: `In CAM plants, the Calvin cycle runs at night, when the stomata are open and CO<sub>2</sub> can enter.`,
  answer: false,
  explain: `At night CAM plants only fix CO<sub>2</sub> into malate with PEP carboxylase. The Calvin cycle needs ATP and NADPH from the light reactions, so it runs during the day, using CO<sub>2</sub> released from the stored malate while the stomata are closed.` }
);
