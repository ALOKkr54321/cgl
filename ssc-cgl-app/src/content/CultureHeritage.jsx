import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function CultureHeritage() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="History"
        priority="MED"
        title="Culture & Heritage"
        dek="India's eight classical dance forms, its two classical music traditions, UNESCO World Heritage Sites, and the folk paintings and textiles tied to specific states — pure state-to-art-form recall, the kind of question SSC asks constantly."
        stats={[
          { value: "8", label: "Classical dance forms recognised by the Sangeet Natak Akademi" },
          { value: "2", label: "Classical music traditions — Hindustani and Carnatic" },
          { value: "40+", label: "UNESCO World Heritage Sites in India — among the highest counts worldwide" },
          { value: "1998", label: "M. S. Subbulakshmi became the first musician to receive the Bharat Ratna" },
        ]}
      />

      {/* 1. Classical dances */}
      <SectionHeading num="01" title="Classical Dance Forms — The Eight Recognised Styles" />
      <DataTable headers={["Dance form", "State of origin"]} rows={[
        ["Bharatanatyam", "Tamil Nadu"],
        ["Kathak", "Uttar Pradesh (North India)"],
        ["Kathakali", "Kerala"],
        ["Kuchipudi", "Andhra Pradesh"],
        ["Odissi", "Odisha"],
        ["Manipuri", "Manipur"],
        ["Mohiniyattam", "Kerala"],
        ["Sattriya", "Assam"],
      ]} />
      <Callout type="exam" label="Exam focus">
        <b>Sattriya</b> is the newest addition to this list, formally recognised by the Sangeet Natak
        Akademi only in <b>2000</b> — a good fact to anchor if a question asks which classical dance was
        recognised most recently. Note also that <b>Kerala has two</b> classical dance forms — Kathakali
        and Mohiniyattam — a state uniquely represented twice on this list.
      </Callout>

      {/* 2. Classical music */}
      <SectionHeading num="02" title="Classical Music — Hindustani vs Carnatic" />
      <DataTable headers={["", "Hindustani", "Carnatic"]} rows={[
        ["Region", "North India", "South India"],
        ["Notable exponents", "Ustad Bismillah Khan (shehnai), Pandit Ravi Shankar (sitar), Ustad Zakir Hussain (tabla)", "M. S. Subbulakshmi (vocal)"],
        ["Structure", "Organised into 'Gharanas' (schools/lineages)", "Anchored by the 18th–19th century 'Carnatic Trinity'"],
      ]} />
      <Accordion chip="Carnatic Trinity" title="Tyagaraja, Muthuswami Dikshitar &amp; Syama Sastri" defaultOpen>
        <p>
          These three composers, all active around the same era, are together revered as the foundational
          figures of Carnatic music composition — their compositions remain central to the Carnatic
          repertoire performed today.
        </p>
      </Accordion>
      <Callout type="trap" label="Common trap">
        <b>M. S. Subbulakshmi</b> became the <b>first musician ever to receive the Bharat Ratna</b>, in
        1998 — a distinct "first" from her fame as a Carnatic vocalist, and a fact SSC tests as a standalone item.
      </Callout>

      {/* 3. UNESCO cultural */}
      <SectionHeading num="03" title="UNESCO World Heritage Sites — Cultural" />
      <DataTable headers={["Site", "State"]} rows={[
        ["Taj Mahal &amp; Agra Fort", "Uttar Pradesh"],
        ["Ajanta Caves &amp; Ellora Caves", "Maharashtra"],
        ["Khajuraho Group of Monuments", "Madhya Pradesh"],
        ["Qutub Minar &amp; Red Fort Complex", "Delhi"],
        ["Hampi (Vijayanagara ruins)", "Karnataka"],
        ["Konark Sun Temple", "Odisha"],
        ["Mahabalipuram (Mamallapuram)", "Tamil Nadu"],
        ["Sanchi Stupa", "Madhya Pradesh"],
        ["Fatehpur Sikri", "Uttar Pradesh"],
        ["Jaipur City (the 'Pink City')", "Rajasthan — added 2019"],
        ["Rani ki Vav (a stepwell)", "Gujarat — added 2014"],
      ]} />

      {/* 4. UNESCO natural */}
      <SectionHeading num="04" title="UNESCO World Heritage Sites — Natural" />
      <DataTable headers={["Site", "State"]} rows={[
        ["Kaziranga National Park", "Assam — famous for the one-horned rhinoceros"],
        ["Sundarbans National Park", "West Bengal — mangrove forest, Royal Bengal Tiger habitat"],
        ["Western Ghats", "Spans multiple states along India's west coast"],
        ["Nanda Devi &amp; Valley of Flowers National Parks", "Uttarakhand"],
        ["Keoladeo National Park", "Rajasthan — a major bird sanctuary near Bharatpur"],
      ]} />
      <Callout type="mnemonic" label="Memory aid">
        India has <b>one of the highest counts of UNESCO World Heritage Sites in the world</b> — the exact
        number changes as new sites are added most years, so treat any specific current count as worth
        double-checking rather than a fixed fact to memorise.
      </Callout>

      {/* 5. Folk paintings */}
      <SectionHeading num="05" title="Folk &amp; Traditional Paintings" />
      <DataTable headers={["Painting style", "State of origin"]} rows={[
        ["Madhubani (Mithila) painting", "Bihar"],
        ["Warli painting", "Maharashtra (a tribal art form)"],
        ["Pattachitra", "Odisha"],
        ["Tanjore painting", "Tamil Nadu"],
        ["Phad painting", "Rajasthan"],
        ["Kalamkari", "Andhra Pradesh"],
      ]} />

      {/* 6. Textiles */}
      <SectionHeading num="06" title="Famous Textiles &amp; Handicrafts" />
      <DataTable headers={["Textile / Craft", "State of origin"]} rows={[
        ["Pashmina shawls", "Jammu &amp; Kashmir"],
        ["Banarasi silk", "Varanasi, Uttar Pradesh"],
        ["Kanjeevaram silk", "Tamil Nadu"],
        ["Chikankari embroidery", "Lucknow, Uttar Pradesh"],
        ["Bandhani (tie-dye)", "Gujarat and Rajasthan"],
        ["Phulkari embroidery", "Punjab"],
      ]} />

      {/* 7. Miniature painting */}
      <SectionHeading num="07" title="Miniature Painting Schools" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Small, detailed paintings that flourished under royal patronage across three major regional schools:
      </p>
      <DataTable headers={["School", "Association"]} rows={[
        ["Mughal miniatures", "Court patronage under the Mughal emperors — detailed, often historical or courtly scenes"],
        ["Rajput (Rajasthani) miniatures", "Devotional and romantic themes, flourishing across Rajasthan's princely states"],
        ["Pahari miniatures", "Hill states of the Himalayan foothills (Himachal Pradesh region), known for delicate, lyrical style"],
      ]} />

      {/* 8. Quick revision */}
      <SectionHeading num="08" title="Quick Revision" />
      <DataTable headers={["Fact", "Answer"]} rows={[
        ["Newest classical dance (recognised 2000)", "Sattriya (Assam)"],
        ["State with two classical dance forms", "Kerala (Kathakali &amp; Mohiniyattam)"],
        ["Carnatic Trinity", "Tyagaraja, Muthuswami Dikshitar, Syama Sastri"],
        ["First musician to receive Bharat Ratna", "M. S. Subbulakshmi (1998)"],
        ["Madhubani painting's home state", "Bihar"],
        ["Warli painting's home state", "Maharashtra"],
        ["Ajanta &amp; Ellora Caves' state", "Maharashtra"],
        ["Konark Sun Temple's state", "Odisha"],
      ]} />

      {/* 9. Practice */}
      <SectionHeading num="09" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="Kathakali is the classical dance form of which state?"
        options={["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"]}
        correctIndex={1} explanation="Kerala — which also gave rise to Mohiniyattam." />
      <MCQItem n={2} q="Sattriya, the most recently recognised classical dance form (2000), belongs to which state?"
        options={["Manipur", "Odisha", "Assam", "West Bengal"]}
        correctIndex={2} explanation="Assam." />
      <MCQItem n={3} q="The 'Carnatic Trinity' consists of Tyagaraja, Syama Sastri, and:"
        options={["Purandara Dasa", "Muthuswami Dikshitar", "M. S. Subbulakshmi", "Swati Tirunal"]}
        correctIndex={1} explanation="Muthuswami Dikshitar." />
      <MCQItem n={4} q="Who was the first musician to receive the Bharat Ratna?"
        options={["Ustad Bismillah Khan", "Pandit Ravi Shankar", "M. S. Subbulakshmi", "Lata Mangeshkar"]}
        correctIndex={2} explanation="M. S. Subbulakshmi, in 1998." />
      <MCQItem n={5} q="Madhubani (Mithila) painting originates from which state?"
        options={["Bihar", "Odisha", "Rajasthan", "Gujarat"]}
        correctIndex={0} explanation="Bihar." />
      <MCQItem n={6} q="Warli painting is a traditional tribal art form of which state?"
        options={["Madhya Pradesh", "Maharashtra", "Chhattisgarh", "Jharkhand"]}
        correctIndex={1} explanation="Maharashtra." />
      <MCQItem n={7} q="The Ajanta and Ellora Caves, both UNESCO World Heritage Sites, are located in:"
        options={["Karnataka", "Madhya Pradesh", "Maharashtra", "Gujarat"]}
        correctIndex={2} explanation="Maharashtra." />
      <MCQItem n={8} q="The Konark Sun Temple, a UNESCO World Heritage Site, is located in:"
        options={["West Bengal", "Odisha", "Andhra Pradesh", "Tamil Nadu"]}
        correctIndex={1} explanation="Odisha." />
      <MCQItem n={9} q="Rani ki Vav, a UNESCO World Heritage Site added in 2014, is an example of a:"
        options={["Temple complex", "Stepwell", "Fort", "Rock-cut cave"]}
        correctIndex={1} explanation="A stepwell, located in Gujarat." />
      <MCQItem n={10} q="Kathak, a classical dance form, is most closely associated with which region?"
        options={["South India", "North India", "Northeast India", "West India"]}
        correctIndex={1} explanation="North India, particularly Uttar Pradesh." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · History. Dance forms, art styles, and heritage site locations are stable, well-established facts. The total count of UNESCO World Heritage Sites in India grows most years as new sites are added — verify the current figure if a question asks for an exact number." />
    </div>
  );
}
