import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function Biology() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="General Science"
        priority="HIGH"
        title="Biology"
        dek="The single highest-yield General Science topic — human body systems, genetics basics, and above all the Vitamin-deficiency table SSC returns to almost every cycle, plus diseases sorted by the organism that causes them."
        stats={[
          { value: "206", label: "Bones in an adult human body" },
          { value: "46", label: "Chromosomes in a human cell (23 pairs)" },
          { value: "13", label: "Vitamins, each tied to a specific deficiency disease" },
          { value: "5", label: "Kingdoms in Whittaker's classification of living organisms" },
        ]}
      />

      {/* 1. Cell */}
      <SectionHeading num="01" title="The Cell — Basic Unit of Life" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        First observed by <b>Robert Hooke in 1665</b>, examining cork under a microscope — he also coined
        the term "cell."
      </p>
      <DataTable headers={["Organelle", "Function"]} rows={[
        ["Nucleus", "Control centre of the cell; houses the DNA"],
        ["Mitochondria", "The 'powerhouse of the cell' — produces ATP through cellular respiration"],
        ["Ribosomes", "Site of protein synthesis"],
        ["Golgi Apparatus", "Packages and dispatches proteins made by the cell"],
        ["Chloroplast", "Site of photosynthesis — found only in plant cells"],
        ["Cell Wall", "Rigid outer layer of cellulose — found only in plant cells"],
        ["Vacuole", "Storage sac; typically much larger in plant cells than animal cells"],
      ]} />
      <Callout type="exam" label="Exam focus">
        Three structures exist <b>only in plant cells</b>, not animal cells: the <b>cell wall</b>, the
        <b> chloroplast</b>, and a large central <b>vacuole</b>. This trio is the most direct way SSC tests
        "plant cell vs animal cell."
      </Callout>

      {/* 2. Body systems 1 */}
      <SectionHeading num="02" title="Human Body — Digestive, Respiratory & Circulatory Systems" />
      <DataTable headers={["System", "Pathway / Key structure", "Key fact"]} rows={[
        ["Digestive", "Mouth → Oesophagus → Stomach → Small Intestine → Large Intestine", "Liver produces bile; pancreas supplies digestive enzymes and insulin"],
        ["Respiratory", "Nose → Trachea → Bronchi → Lungs → Alveoli", "Alveoli are the actual site of gas exchange; the diaphragm drives breathing"],
        ["Circulatory", "Heart (4 chambers: 2 atria + 2 ventricles)", "Arteries carry blood away from the heart; veins carry it back"],
      ]} />
      <DataTable headers={["Blood component", "Role"]} rows={[
        ["Red Blood Cells (RBCs)", "Carry oxygen via haemoglobin"],
        ["White Blood Cells (WBCs)", "Immune defence against infection"],
        ["Platelets", "Blood clotting"],
        ["Plasma", "The liquid medium carrying all blood cells and dissolved substances"],
      ]} />

      {/* 3. Body systems 2 */}
      <SectionHeading num="03" title="Human Body — Nervous, Endocrine & Skeletal Systems" />
      <Accordion chip="Nervous System" title="Brain & Its Regions" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Cerebrum</b> — the largest part; responsible for thought, memory, and voluntary action</li>
          <li><b>Cerebellum</b> — controls balance and coordination of movement</li>
          <li><b>Medulla Oblongata</b> — regulates involuntary actions like heartbeat and breathing</li>
        </ul>
      </Accordion>
      <DataTable headers={["Gland", "Hormone", "Function"]} rows={[
        ["Pituitary", "Multiple — often called the 'master gland'", "Regulates most other endocrine glands"],
        ["Thyroid", "Thyroxine", "Controls metabolic rate"],
        ["Pancreas", "Insulin", "Regulates blood sugar levels"],
        ["Adrenal", "Adrenaline", "Triggers the 'fight or flight' response"],
      ]} />
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        The adult human skeleton has <b>206 bones</b>. The <b>Femur</b> (thigh bone) is the largest; the
        <b> Stapes</b>, in the middle ear, is the smallest.
      </p>

      {/* 4. Genetics */}
      <SectionHeading num="04" title="Genetics & Heredity" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li><b>Gregor Mendel</b>, the "Father of Genetics," derived the laws of inheritance from pea plant
          experiments: the <b>Law of Dominance</b>, <b>Law of Segregation</b>, and <b>Law of Independent
          Assortment</b></li>
        <li><b>DNA</b> (deoxyribonucleic acid) carries genetic information in a double-helix structure,
          described by <b>Watson and Crick in 1953</b>, building on X-ray data from Rosalind Franklin</li>
        <li><b>RNA</b> is single-stranded and central to protein synthesis</li>
        <li>A human somatic cell has <b>46 chromosomes (23 pairs)</b> — sex is determined by the 23rd pair:
          <b> XX for female, XY for male</b></li>
      </ul>

      {/* 5. Vitamins */}
      <SectionHeading num="05" title="Vitamins — Deficiency Diseases Cheat Sheet" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        The single most reliably tested table in Biology — SSC asks this pairing directly almost every cycle.
      </p>
      <DataTable headers={["Vitamin", "Chemical name", "Deficiency disease"]} rows={[
        ["A", "Retinol", "Night blindness"],
        ["B1", "Thiamine", "Beriberi"],
        ["B2", "Riboflavin", "Ariboflavinosis (cracked lips/skin)"],
        ["B3", "Niacin", "Pellagra"],
        ["B6", "Pyridoxine", "Anemia"],
        ["B12", "Cobalamin", "Pernicious anemia"],
        ["C", "Ascorbic acid", "Scurvy"],
        ["D", "Calciferol", "Rickets (children) / Osteomalacia (adults)"],
        ["E", "Tocopherol", "Infertility, muscle weakness"],
        ["K", "Phylloquinone", "Delayed blood clotting"],
      ]} />
      <Callout type="mnemonic" label="Memory aid">
        <b>Vitamin D comes from sunlight, not just food</b> — the skin synthesises it on UV exposure, which is
        why it's the one vitamin most tied to a physical activity (sun exposure) rather than diet alone.
      </Callout>
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        Two minerals worth pairing the same way: <b>Iron</b> deficiency causes <b>anemia</b> (iron is
        essential for haemoglobin); <b>Iodine</b> deficiency causes <b>goitre</b> (needed for thyroxine production).
      </p>

      {/* 6. Diseases */}
      <SectionHeading num="06" title="Diseases — Sorted by Cause" />
      <DataTable headers={["Category", "Examples"]} rows={[
        ["Bacterial", "Tuberculosis, Cholera, Typhoid, Tetanus, Diphtheria"],
        ["Viral", "Common cold, Influenza, Dengue, Chikungunya, COVID-19, Hepatitis, Polio, Chickenpox, AIDS (HIV)"],
        ["Protozoan", "Malaria (Plasmodium), Amoebiasis"],
        ["Fungal", "Ringworm, Athlete's foot"],
      ]} />
      <Callout type="exam" label="Exam focus">
        <b>Malaria</b> is caused by the <i>Plasmodium</i> parasite, spread by the bite of a <b>female
        Anopheles mosquito</b>. <b>Dengue and Chikungunya</b>, in contrast, are spread by the
        <b> Aedes mosquito</b> — a frequently tested "which mosquito, which disease" pairing.
      </Callout>

      {/* 7. Photosynthesis */}
      <SectionHeading num="07" title="Photosynthesis & Plant Hormones" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        Photosynthesis occurs in the <b>chloroplast</b>, using the pigment <b>chlorophyll</b>:
      </p>
      <Callout type="mnemonic" label="Photosynthesis equation">
        6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ (glucose) + 6O₂
      </Callout>
      <DataTable headers={["Plant hormone", "Effect"]} rows={[
        ["Auxin", "Promotes cell elongation and overall growth"],
        ["Gibberellins", "Stem elongation"],
        ["Cytokinins", "Promotes cell division"],
        ["Abscisic acid", "Triggers stress response and dormancy"],
        ["Ethylene", "Triggers fruit ripening"],
      ]} />

      {/* 8. Classification */}
      <SectionHeading num="08" title="Classification of Living Organisms" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        <b>R. H. Whittaker (1969)</b> proposed the Five Kingdom Classification:
      </p>
      <DataTable headers={["Kingdom", "Examples"]} rows={[
        ["Monera", "Bacteria"],
        ["Protista", "Amoeba, Paramecium"],
        ["Fungi", "Yeast, Mushrooms"],
        ["Plantae", "All plants"],
        ["Animalia", "All animals"],
      ]} />
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        <b>Carl Linnaeus</b>, the "Father of Taxonomy," introduced <b>Binomial Nomenclature</b> — naming
        species with a two-part Latin name (Genus + species), e.g. <i>Homo sapiens</i> for humans.
      </p>

      {/* 9. Quick revision */}
      <SectionHeading num="09" title="Quick Revision — Body Facts Cheat Sheet" />
      <DataTable headers={["Fact", "Answer"]} rows={[
        ["Total bones in adult body", "206"],
        ["Largest bone", "Femur"],
        ["Smallest bone", "Stapes"],
        ["'Master gland'", "Pituitary gland"],
        ["'Powerhouse of the cell'", "Mitochondria"],
        ["Site of gas exchange in lungs", "Alveoli"],
        ["Human chromosome count", "46 (23 pairs)"],
        ["Discoverer of the cell", "Robert Hooke (1665)"],
      ]} />

      {/* 10. Practice */}
      <SectionHeading num="10" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="Which organelle is known as the 'powerhouse of the cell'?"
        options={["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"]}
        correctIndex={2} explanation="Mitochondria — it produces ATP through cellular respiration." />
      <MCQItem n={2} q="The cell was first observed and named by:"
        options={["Charles Darwin", "Robert Hooke", "Gregor Mendel", "Louis Pasteur"]}
        correctIndex={1} explanation="Robert Hooke, in 1665, examining cork under a microscope." />
      <MCQItem n={3} q="How many bones are there in an adult human body?"
        options={["196", "206", "216", "226"]}
        correctIndex={1} explanation="206." />
      <MCQItem n={4} q="Deficiency of Vitamin C causes which disease?"
        options={["Rickets", "Scurvy", "Beriberi", "Pellagra"]}
        correctIndex={1} explanation="Scurvy." />
      <MCQItem n={5} q="Deficiency of Vitamin D leads to which condition in children?"
        options={["Scurvy", "Night blindness", "Rickets", "Beriberi"]}
        correctIndex={2} explanation="Rickets — Osteomalacia is the equivalent condition in adults." />
      <MCQItem n={6} q="Malaria is caused by which type of organism?"
        options={["Bacteria", "Virus", "Protozoan (Plasmodium)", "Fungus"]}
        correctIndex={2} explanation="A protozoan parasite of the genus Plasmodium, spread by the female Anopheles mosquito." />
      <MCQItem n={7} q="The double-helix structure of DNA was described by:"
        options={["Gregor Mendel", "Charles Darwin", "Watson and Crick", "Robert Hooke"]}
        correctIndex={2} explanation="James Watson and Francis Crick, in 1953." />
      <MCQItem n={8} q="A normal human somatic cell contains how many chromosomes?"
        options={["23", "44", "46", "48"]}
        correctIndex={2} explanation="46, arranged in 23 pairs." />
      <MCQItem n={9} q="The Five Kingdom Classification of living organisms was proposed by:"
        options={["Carl Linnaeus", "Charles Darwin", "R. H. Whittaker", "Gregor Mendel"]}
        correctIndex={2} explanation="R. H. Whittaker, in 1969." />
      <MCQItem n={10} q="Which gland is known as the 'master gland' of the endocrine system?"
        options={["Thyroid", "Pancreas", "Adrenal", "Pituitary"]}
        correctIndex={3} explanation="The Pituitary gland — it regulates most other endocrine glands." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · General Science. Body-system facts, vitamin pairings, and classification schemes are compiled from standard biology references at the applied/conceptual level SSC tests." />
    </div>
  );
}
