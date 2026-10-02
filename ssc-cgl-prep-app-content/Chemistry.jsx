import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function Chemistry() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="General Science"
        priority="MED"
        title="Chemistry"
        dek="The periodic table's key groups, the pH scale, everyday acids/bases/salts by their common names, and the chemical-formula cheat sheet SSC draws its most reliable single-fact questions from."
        stats={[
          { value: "7", label: "Periods in the modern periodic table" },
          { value: "18", label: "Groups in the modern periodic table" },
          { value: "0–14", label: "Range of the pH scale; 7 is neutral" },
          { value: "4", label: "Known allotropes of Carbon commonly tested — diamond, graphite, fullerene, graphene" },
        ]}
      />

      {/* 1. Periodic table basics */}
      <SectionHeading num="01" title="The Periodic Table — Basics" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>The <b>Modern Periodic Law</b> states that properties of elements are a periodic function of
          their <b>atomic number</b> — a refinement of Mendeleev's original table, which was organised by
          atomic mass</li>
        <li><b>Periods</b> — the 7 horizontal rows; elements in the same period have the same number of
          electron shells</li>
        <li><b>Groups</b> — the 18 vertical columns; elements in the same group share similar chemical properties</li>
      </ul>
      <DataTable headers={["Term", "Meaning"]} rows={[
        ["Atomic number", "Number of protons in an atom's nucleus"],
        ["Mass number", "Total number of protons + neutrons"],
        ["Isotopes", "Atoms of the same element (same atomic number) with different mass numbers (different neutron count)"],
      ]} />

      {/* 2. Key groups */}
      <SectionHeading num="02" title="Groups Worth Knowing by Name" />
      <DataTable headers={["Group", "Position", "Character"]} rows={[
        ["Alkali metals", "Group 1", "Li, Na, K, Rb, Cs, Fr — highly reactive, soft metals"],
        ["Alkaline earth metals", "Group 2", "Be, Mg, Ca, Sr, Ba, Ra — reactive, but less than alkali metals"],
        ["Halogens", "Group 17", "F, Cl, Br, I, At — highly reactive non-metals"],
        ["Noble gases", "Group 18", "He, Ne, Ar, Kr, Xe, Rn — largely chemically inert"],
      ]} />

      {/* 3. Acids, bases, pH */}
      <SectionHeading num="03" title="Acids, Bases & the pH Scale" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        The pH scale runs from <b>0 to 14</b>:
      </p>
      <DataTable headers={["Range", "Nature"]} rows={[
        ["Below 7", "Acidic"],
        ["Exactly 7", "Neutral (e.g. pure water)"],
        ["Above 7", "Basic / Alkaline"],
      ]} />
      <Callout type="exam" label="Exam focus">
        <b>Litmus paper</b> is the most commonly tested indicator: it turns <b>red in acids</b> and
        <b> blue in bases</b> — memorising this direction (not just "litmus changes colour") is what the
        question usually hinges on.
      </Callout>

      {/* 4. Common acids/bases/salts */}
      <SectionHeading num="04" title="Everyday Acids, Bases & Salts" />
      <DataTable headers={["Common name", "Chemical name", "Formula"]} rows={[
        ["Table salt", "Sodium Chloride", "NaCl"],
        ["Baking soda", "Sodium Bicarbonate", "NaHCO₃"],
        ["Washing soda", "Sodium Carbonate", "Na₂CO₃"],
        ["Caustic soda", "Sodium Hydroxide", "NaOH"],
        ["Bleaching powder", "Calcium Oxychloride", "CaOCl₂"],
        ["Plaster of Paris", "Calcium Sulphate hemihydrate", "CaSO₄·½H₂O"],
        ["Quicklime", "Calcium Oxide", "CaO"],
        ["Slaked lime", "Calcium Hydroxide", "Ca(OH)₂"],
        ["Limestone / Marble / Chalk", "Calcium Carbonate", "CaCO₃"],
        ["Blue vitriol", "Copper Sulphate", "CuSO₄·5H₂O"],
        ["Epsom salt", "Magnesium Sulphate", "MgSO₄·7H₂O"],
      ]} />
      <DataTable headers={["Natural acid", "Found in"]} rows={[
        ["Citric acid", "Citrus fruits (lemon, orange)"],
        ["Acetic acid", "Vinegar"],
        ["Lactic acid", "Sour milk, fatigued muscles"],
        ["Tartaric acid", "Grapes"],
        ["Ascorbic acid", "Vitamin C sources — amla, citrus fruits"],
      ]} />
      <Callout type="trap" label="Common trap">
        <b>Baking soda (NaHCO₃) vs Washing soda (Na₂CO₃)</b> are frequently swapped — baking soda is used in
        cooking and as an antacid; washing soda is used industrially in glass-making and as a cleaning agent.
      </Callout>

      {/* 5. Reaction types */}
      <SectionHeading num="05" title="Types of Chemical Reactions" />
      <DataTable headers={["Reaction type", "Pattern"]} rows={[
        ["Combination", "A + B → AB — two substances combine into one"],
        ["Decomposition", "AB → A + B — one substance breaks into two or more"],
        ["Displacement", "A + BC → AC + B — a more reactive element displaces a less reactive one"],
        ["Double displacement", "AB + CD → AD + CB — ions are exchanged between two compounds"],
      ]} />
      <DataTable headers={["Term", "Meaning"]} rows={[
        ["Oxidation", "Loss of electrons, or gain of oxygen"],
        ["Reduction", "Gain of electrons, or loss of oxygen"],
        ["Exothermic reaction", "Releases heat to the surroundings"],
        ["Endothermic reaction", "Absorbs heat from the surroundings"],
      ]} />

      {/* 6. Metals vs non-metals */}
      <SectionHeading num="06" title="Metals vs Non-Metals & the Reactivity Series" />
      <DataTable headers={["", "Metals", "Non-metals"]} rows={[
        ["Malleability/Ductility", "Malleable & ductile", "Brittle if solid"],
        ["Conductivity", "Good conductors of heat & electricity", "Poor conductors (graphite is an exception)"],
        ["Lustre", "Shiny/lustrous", "Non-lustrous (iodine & graphite are exceptions)"],
        ["Physical state", "Mostly solid (mercury is a liquid at room temperature)", "Solid, liquid, or gas"],
      ]} />
      <Callout type="mnemonic" label="Reactivity Series (most to least reactive)">
        <b>K &gt; Na &gt; Ca &gt; Mg &gt; Al &gt; Zn &gt; Fe &gt; Pb &gt; H &gt; Cu &gt; Hg &gt; Ag &gt; Au</b> —
        a more reactive metal can displace a less reactive one from its compound in solution. Gold, at the
        very bottom, is why it resists corrosion and tarnishing.
      </Callout>

      {/* 7. Alloys */}
      <SectionHeading num="07" title="Alloys — Common Combinations" />
      <DataTable headers={["Alloy", "Composition"]} rows={[
        ["Steel", "Iron + Carbon"],
        ["Stainless Steel", "Iron + Chromium + Nickel"],
        ["Brass", "Copper + Zinc"],
        ["Bronze", "Copper + Tin"],
        ["Amalgam", "Mercury + another metal"],
      ]} />

      {/* 8. Allotropes of carbon */}
      <SectionHeading num="08" title="Allotropes of Carbon" />
      <DataTable headers={["Allotrope", "Structure", "Property"]} rows={[
        ["Diamond", "Each carbon bonded to 4 others tetrahedrally", "Hardest known natural substance"],
        ["Graphite", "Layered, hexagonal sheets", "Soft, slippery, conducts electricity — used in pencils and as a lubricant"],
        ["Fullerene (C₆₀)", "Spherical 'buckyball' cage", "A distinct molecular form of pure carbon"],
        ["Graphene", "A single layer of graphite, one atom thick", "Extremely strong 2D material; its discovery won the 2010 Nobel Prize in Physics"],
      ]} />

      {/* 9. Rusting */}
      <SectionHeading num="09" title="Rusting, Corrosion & Prevention" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        Rusting is the reaction of iron with oxygen and moisture, forming hydrated iron oxide.
      </p>
      <DataTable headers={["Prevention method", "How it works"]} rows={[
        ["Galvanization", "Coating iron with a layer of zinc"],
        ["Painting / Greasing", "Physically blocks contact with air and moisture"],
        ["Alloying", "Converting to stainless steel (iron + chromium + nickel), which resists rusting"],
      ]} />

      {/* 10. Quick revision */}
      <SectionHeading num="10" title="Quick Revision — Chemical Formula Cheat Sheet" />
      <DataTable headers={["Substance", "Formula"]} rows={[
        ["Water", "H₂O"],
        ["Common salt", "NaCl"],
        ["Baking soda", "NaHCO₃"],
        ["Washing soda", "Na₂CO₃"],
        ["Plaster of Paris", "CaSO₄·½H₂O"],
        ["Quicklime", "CaO"],
        ["Slaked lime", "Ca(OH)₂"],
        ["Limestone / Chalk / Marble", "CaCO₃"],
        ["LPG (main components)", "Butane + Propane"],
        ["CNG (main component)", "Methane (CH₄)"],
      ]} />

      {/* 11. Practice */}
      <SectionHeading num="11" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="What is the pH value of a neutral solution?"
        options={["0", "7", "14", "10"]}
        correctIndex={1} explanation="7 — below 7 is acidic, above 7 is basic." />
      <MCQItem n={2} q="Litmus paper turns which colour in an acidic solution?"
        options={["Blue", "Red", "Green", "Yellow"]}
        correctIndex={1} explanation="Red — it turns blue in a basic solution." />
      <MCQItem n={3} q="The chemical formula of baking soda is:"
        options={["Na₂CO₃", "NaHCO₃", "NaOH", "CaCO₃"]}
        correctIndex={1} explanation="NaHCO₃, Sodium Bicarbonate." />
      <MCQItem n={4} q="Which is the hardest known natural substance?"
        options={["Graphite", "Quartz", "Diamond", "Granite"]}
        correctIndex={2} explanation="Diamond — an allotrope of carbon." />
      <MCQItem n={5} q="Galvanization involves coating iron with which metal to prevent rusting?"
        options={["Copper", "Zinc", "Tin", "Aluminium"]}
        correctIndex={1} explanation="Zinc." />
      <MCQItem n={6} q="Group 18 elements of the periodic table are called:"
        options={["Alkali metals", "Halogens", "Noble gases", "Transition metals"]}
        correctIndex={2} explanation="Noble gases — largely chemically inert." />
      <MCQItem n={7} q="A reaction that releases heat to the surroundings is called:"
        options={["Endothermic", "Exothermic", "Neutralisation", "Decomposition"]}
        correctIndex={1} explanation="Exothermic — an endothermic reaction absorbs heat instead." />
      <MCQItem n={8} q="Brass is an alloy of which two metals?"
        options={["Copper and Tin", "Copper and Zinc", "Iron and Carbon", "Iron and Chromium"]}
        correctIndex={1} explanation="Copper and Zinc — Bronze is Copper and Tin." />
      <MCQItem n={9} q="In the reactivity series, which of these metals is the most reactive?"
        options={["Gold", "Copper", "Potassium", "Iron"]}
        correctIndex={2} explanation="Potassium — near the very top of the reactivity series." />
      <MCQItem n={10} q="Graphene, which won a 2010 Nobel Prize, is best described as:"
        options={["A liquid form of carbon", "A single one-atom-thick layer of graphite", "A synthetic diamond", "A type of fullerene molecule"]}
        correctIndex={1} explanation="A single layer of graphite, exactly one atom thick." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · General Science. Chemical formulas, common-name pairings, and the reactivity series are compiled from standard chemistry references at the applied/conceptual level SSC tests — not stoichiometric calculation, which doesn't appear in this section." />
    </div>
  );
}
