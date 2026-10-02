import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function AncientIndia() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="History"
        priority="MED"
        title="Ancient India"
        dek="From the Indus Valley's mysterious script to the Gupta 'Golden Age' — the civilisational arc SSC tests: Harappan cities, the Vedic transition, Buddhism and Jainism's rise, and the Mauryan and Gupta empires that bookend classical Indian history."
        stats={[
          { value: "c. 2600 BCE", label: "Mature phase of the Indus Valley Civilisation begins" },
          { value: "261 BCE", label: "The Kalinga War — the turning point of Ashoka's reign" },
          { value: "4", label: "Vedas — Rig, Sama, Yajur, Atharva" },
          { value: "320 CE", label: "Chandragupta I founds the Gupta Empire" },
        ]}
      />

      {/* 1. IVC overview */}
      <SectionHeading num="01" title="Indus Valley Civilisation — Overview & Key Sites" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        A Bronze Age civilisation, mature phase roughly <b>2600–1900 BCE</b> — among the world's earliest
        urban civilisations, alongside Mesopotamia and Egypt.
      </p>
      <DataTable headers={["Site", "River / State", "Distinctive feature"]} rows={[
        ["Harappa", "Ravi river (Punjab, Pakistan)", "First site discovered; excavated by Dayaram Sahni, 1921"],
        ["Mohenjo-daro", "Indus river (Sindh, Pakistan)", "Means 'Mound of the Dead'; excavated by R. D. Banerjee, 1922; home to the Great Bath"],
        ["Lothal", "Gujarat", "A dockyard — strong evidence of maritime trade"],
        ["Dholavira", "Gujarat", "Sophisticated water conservation and reservoir system"],
        ["Kalibangan", "Rajasthan", "Evidence of a ploughed field and fire altars"],
        ["Rakhigarhi", "Haryana", "One of the largest known Indus sites, located in India"],
      ]} />
      <Callout type="exam" label="Exam focus">
        Both major excavations happened under the direction of <b>Sir John Marshall</b> of the
        Archaeological Survey of India — but the individual site credits (Sahni for Harappa, Banerjee for
        Mohenjo-daro) are what SSC actually asks for directly.
      </Callout>

      {/* 2. IVC details */}
      <SectionHeading num="02" title="IVC — Town Planning, Script & Religion" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li><b>Grid-pattern town planning</b> — streets crossing at right angles, an advanced covered
          drainage system, and large granaries</li>
        <li>The <b>Indus script</b> is pictographic and remains <b>undeciphered to this day</b> — a
          frequently tested "still unsolved" fact</li>
        <li>The <b>Pashupati seal</b> from Mohenjo-daro, showing a seated figure surrounded by animals, is
          widely interpreted as a proto-form of Shiva</li>
        <li>No temples have been identified at any Harappan site — religious practice is inferred mainly
          from seals and figurines, including widespread <b>Mother Goddess</b> worship</li>
      </ul>

      {/* 3. Vedic age */}
      <SectionHeading num="03" title="The Vedic Age — Early vs Later Vedic Period" />
      <DataTable headers={["", "Early Vedic (c. 1500–1000 BCE)", "Later Vedic (c. 1000–600 BCE)"]} rows={[
        ["Economy", "Mainly pastoral — cattle central to wealth", "Increasingly agricultural, with iron tools in use"],
        ["Political structure", "Tribal chieftains (Rajan); Sabha and Samiti as early assemblies", "Growth of larger kingdoms (Janapadas)"],
        ["Social structure", "Varna divisions emerging, still relatively flexible", "Varna (caste) system becomes far more rigid"],
      ]} />

      {/* 4. Vedas */}
      <SectionHeading num="04" title="The Four Vedas & Vedic Literature" />
      <DataTable headers={["Veda", "Content"]} rows={[
        ["Rigveda", "The oldest of the four — a collection of hymns to various deities"],
        ["Samaveda", "Melodies and chants, largely drawn from the Rigveda"],
        ["Yajurveda", "Ritual formulas and procedures for sacrifices"],
        ["Atharvaveda", "Spells, charms, and everyday remedies"],
      ]} />
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        The <b>Upanishads</b>, philosophical texts exploring the nature of the self and the universe, mark
        the end of Vedic literature — often called <b>"Vedanta"</b> (the culmination of the Vedas).
      </p>

      {/* 5. Buddhism */}
      <SectionHeading num="05" title="Rise of Buddhism — Buddha's Life & Teachings" />
      <Accordion chip="Four Great Events" title="The Sites Tied to Buddha's Life" defaultOpen>
        <DataTable headers={["Event", "Place"]} rows={[
          ["Birth", "Lumbini (present-day Nepal)"],
          ["Enlightenment", "Bodh Gaya, under the Bodhi tree"],
          ["First Sermon", "Sarnath (Deer Park), near Varanasi"],
          ["Death (Mahaparinirvana)", "Kushinagar"],
        ]} />
      </Accordion>
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        Buddha's core teaching centres on the <b>Four Noble Truths</b> and the <b>Eightfold Path</b> as the
        route to ending suffering. Buddhism later split into two major branches:
        <b> Hinayana (Theravada)</b> and <b>Mahayana</b>.
      </p>
      <Callout type="trap" label="Common trap">
        The <b>First Buddhist Council</b> was held at Rajgriha, shortly after Buddha's death. The
        <b> Fourth Buddhist Council</b>, held much later in Kashmir under the patronage of the Kushan
        emperor <b>Kanishka</b>, is where Mahayana Buddhism's texts were formally compiled — the two
        councils are centuries apart and easy to mix up.
      </Callout>

      {/* 6. Jainism */}
      <SectionHeading num="06" title="Rise of Jainism — Mahavira & Core Principles" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li><b>Mahavira (Vardhamana)</b> was the <b>24th and last Tirthankara</b> of Jainism — born at
          Kundagrama, near Vaishali</li>
        <li>He attained <b>Kevala Jnana</b> (omniscience) and died at <b>Pawapuri</b></li>
        <li>Jainism's five core vows (Panch Mahavrata): <b>Ahimsa</b> (non-violence), Satya (truth),
          Asteya (non-stealing), Aparigraha (non-possession), and Brahmacharya (chastity)</li>
        <li>Jainism later split into two major sects: <b>Digambara</b> and <b>Shvetambara</b></li>
      </ul>

      {/* 7. Mauryan Empire */}
      <SectionHeading num="07" title="The Mauryan Empire — Chandragupta to Ashoka" />
      <Accordion chip="c. 322 BCE" title="Chandragupta Maurya — Founding the Empire" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Founded the Mauryan Empire around <b>322 BCE</b>, guided by his minister
            <b> Chanakya (Kautilya)</b>, author of the <i>Arthashastra</i></li>
          <li>Defeated the Nanda dynasty, and later defeated the Greek general <b>Seleucus Nicator</b></li>
          <li>The Greek ambassador <b>Megasthenes</b> visited his court and wrote <i>Indica</i>, an
            account of Mauryan India</li>
        </ul>
      </Accordion>
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        His son <b>Bindusara</b> further expanded the empire, and his grandson <b>Ashoka</b> became the
        most celebrated Mauryan ruler.
      </p>

      {/* 8. Ashoka */}
      <SectionHeading num="08" title="Ashoka's Edicts & Legacy" />
      <Callout type="mnemonic" label="The Kalinga War, 261 BCE">
        Witnessing the devastating bloodshed of his conquest of Kalinga, Ashoka renounced violent expansion
        and embraced <b>Buddhism and Dhamma</b> (a code of moral conduct) — a turning point that reshaped
        the rest of his reign.
      </Callout>
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Ashoka's edicts were inscribed on rocks and pillars across the empire, mostly in the
          <b> Brahmi script</b> (with Kharosthi used in the northwest)</li>
        <li>These edicts were <b>deciphered by James Prinsep in 1837</b> — a landmark moment for
          reconstructing ancient Indian history</li>
        <li>The <b>Sarnath Lion Capital</b>, atop one of Ashoka's pillars, was later adopted as
          <b> independent India's National Emblem</b></li>
        <li>He sent Buddhist missionaries abroad, including his own son <b>Mahinda</b>, to Sri Lanka</li>
      </ul>

      {/* 9. Gupta Empire */}
      <SectionHeading num="09" title="The Gupta Empire — India's 'Golden Age'" />
      <DataTable headers={["Ruler", "Key achievement"]} rows={[
        ["Chandragupta I (c. 320 CE)", "Founded the Gupta Empire; married Kumaradevi of the Lichchhavi clan"],
        ["Samudragupta", "Called the 'Napoleon of India' for his conquests; documented in the Allahabad Pillar inscription by his court poet Harishena"],
        ["Chandragupta II (Vikramaditya)", "Gupta power at its peak; defeated the Shakas; his court hosted the legendary 'Navratnas' (nine gems), including the poet Kalidasa"],
      ]} />
      <DataTable headers={["Achievement", "Detail"]} rows={[
        ["Aryabhata", "Wrote the Aryabhatiya (499 CE); pioneered the concept of zero, an early heliocentric idea, and a scientific explanation of eclipses"],
        ["Kalidasa", "Classical Sanskrit poet and playwright, author of Abhijnanashakuntalam"],
        ["Nalanda University", "A flourishing centre of learning during this period"],
        ["Iron Pillar of Delhi (Mehrauli)", "Famous for its rust-resistant metallurgy, inscribed with a reference to a ruler identified as Chandragupta II"],
      ]} />
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        The empire eventually declined under pressure from <b>Huna (Hephthalite) invasions</b>, combined
        with internal fragmentation.
      </p>

      {/* 10. Quick revision */}
      <SectionHeading num="10" title="Quick Revision — Timeline Cheat Sheet" />
      <DataTable headers={["Period / Event", "Approx. Date"]} rows={[
        ["Indus Valley Civilisation (mature phase)", "c. 2600–1900 BCE"],
        ["Early Vedic Period", "c. 1500–1000 BCE"],
        ["Later Vedic Period", "c. 1000–600 BCE"],
        ["Buddha's Mahaparinirvana", "c. 483 BCE (traditional)"],
        ["Mauryan Empire founded", "c. 322 BCE"],
        ["Kalinga War", "261 BCE"],
        ["Gupta Empire founded", "c. 320 CE"],
      ]} />

      {/* 11. Practice */}
      <SectionHeading num="11" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="Harappa was first excavated by:"
        options={["R. D. Banerjee", "Dayaram Sahni", "John Marshall", "S. R. Rao"]}
        correctIndex={1} explanation="Dayaram Sahni, in 1921." />
      <MCQItem n={2} q="Which Indus Valley site is best known as a dockyard, indicating maritime trade?"
        options={["Kalibangan", "Dholavira", "Lothal", "Rakhigarhi"]}
        correctIndex={2} explanation="Lothal, in Gujarat." />
      <MCQItem n={3} q="Which is the oldest of the four Vedas?"
        options={["Samaveda", "Yajurveda", "Rigveda", "Atharvaveda"]}
        correctIndex={2} explanation="The Rigveda." />
      <MCQItem n={4} q="Buddha delivered his first sermon at:"
        options={["Bodh Gaya", "Lumbini", "Sarnath", "Kushinagar"]}
        correctIndex={2} explanation="Sarnath, near Varanasi." />
      <MCQItem n={5} q="Mahavira was the how-manyth Tirthankara of Jainism?"
        options={["1st", "12th", "23rd", "24th"]}
        correctIndex={3} explanation="The 24th and last Tirthankara." />
      <MCQItem n={6} q="Chandragupta Maurya's chief minister and guide, author of the Arthashastra, was:"
        options={["Megasthenes", "Chanakya (Kautilya)", "Harishena", "Vasumitra"]}
        correctIndex={1} explanation="Chanakya, also known as Kautilya or Vishnugupta." />
      <MCQItem n={7} q="The Kalinga War, which transformed Ashoka's outlook, was fought in which year?"
        options={["322 BCE", "273 BCE", "261 BCE", "185 BCE"]}
        correctIndex={2} explanation="261 BCE." />
      <MCQItem n={8} q="Ashoka's edicts were deciphered in 1837 by:"
        options={["John Marshall", "James Prinsep", "Alexander Cunningham", "Max Müller"]}
        correctIndex={1} explanation="James Prinsep." />
      <MCQItem n={9} q="Which Gupta ruler is known as the 'Napoleon of India'?"
        options={["Chandragupta I", "Samudragupta", "Chandragupta II", "Kumaragupta"]}
        correctIndex={1} explanation="Samudragupta, for his extensive military conquests." />
      <MCQItem n={10} q="Aryabhata's major work, the Aryabhatiya, is associated with which field?"
        options={["Sanskrit drama", "Mathematics and astronomy", "Political administration", "Architecture"]}
        correctIndex={1} explanation="Mathematics and astronomy — including early work on zero and eclipses." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · History. Dates for ancient periods are approximate and drawn from standard archaeological and historical consensus — precise dating for events this old is inherently uncertain and can vary slightly between sources." />
    </div>
  );
}
