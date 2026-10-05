import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function IndianPhysicalGeography() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Geography"
        priority="HIGH"
        title="Indian Physical Geography"
        dek="India's landmass sorted into six physiographic divisions — the Himalayas, the Northern Plains, the Peninsular Plateau, the Thar Desert, the Coastal Plains, and the Islands — with the internal layers, ranges, and landmark facts each one is actually tested on."
        stats={[
          { value: "6", label: "Major physiographic divisions of India" },
          { value: "8,586 m", label: "Kanchenjunga — India's highest peak (Sikkim)" },
          { value: "3", label: "Parallel ranges that make up the Himalayas" },
          { value: "1", label: "Active volcano in India — Barren Island, Andaman" },
        ]}
      />

      {/* 1. Six divisions */}
      <SectionHeading num="01" title="The Six Physiographic Divisions" />
      <DataTable headers={["Division", "Character"]} rows={[
        ["The Himalayas", "Young, still-rising fold mountains along the northern border"],
        ["The Northern Plains", "Flat, fertile alluvial plains built by the Indus, Ganga & Brahmaputra"],
        ["The Peninsular Plateau", "India's oldest, most stable landmass — igneous & metamorphic rock"],
        ["The Indian Desert", "Arid Thar Desert, mostly in Rajasthan"],
        ["The Coastal Plains", "Narrow western strip and wider eastern strip flanking the peninsula"],
        ["The Islands", "Lakshadweep (Arabian Sea) and Andaman & Nicobar (Bay of Bengal)"],
      ]} />

      {/* 2. Himalayas ranges */}
      <SectionHeading num="02" title="The Himalayas — Three Parallel Ranges" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Formed by the ongoing collision of the Indian and Eurasian tectonic plates — still rising today.
        Arranged north to south by altitude:
      </p>
      <DataTable headers={["Range", "Also called", "Height", "Character"]} rows={[
        ["Himadri", "Greater Himalayas", "Avg. 6,000 m", "Northernmost, highest, permanently snow-covered; core of granite; contains the highest peaks"],
        ["Himachal", "Lesser / Middle Himalayas", "3,700–4,500 m", "Middle range; home to major hill stations — Shimla, Mussoorie, Darjeeling"],
        ["Shiwalik", "Outer Himalayas", "900–1,100 m", "Southernmost, lowest; made of unconsolidated sediments; contains 'Duns' — flat valleys like Dehradun"],
      ]} />
      <Callout type="exam" label="Exam focus">
        <b>Kanchenjunga (8,586 m, Sikkim)</b> is India's highest peak — Mount Everest is higher overall but
        lies in Nepal, so it doesn't count as an "Indian" peak in these questions.
      </Callout>

      {/* 3. Regional divisions */}
      <SectionHeading num="03" title="Regional Divisions of the Himalayas" />
      <DataTable headers={["Region", "Extent"]} rows={[
        ["Kashmir/Punjab Himalayas", "Between the Indus and Satluj rivers"],
        ["Kumaon Himalayas", "Between the Satluj and Kali rivers"],
        ["Nepal Himalayas", "Between the Kali and Teesta rivers"],
        ["Assam Himalayas", "Between the Teesta and Brahmaputra rivers"],
      ]} />
      <Accordion chip="Purvanchal" title="The Eastern Hills">
        <p>
          After the Brahmaputra bends sharply southward, the Himalayan trend continues as a series of
          low hills collectively called <b>Purvanchal</b> — including the Patkai, Naga, Manipur, and
          Mizo Hills, running along India's northeastern border.
        </p>
      </Accordion>

      {/* 4. Northern Plains */}
      <SectionHeading num="04" title="The Northern Plains — Indo-Gangetic Plain" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Built entirely from alluvial deposits carried down by the Indus, Ganga, and Brahmaputra river
        systems — the world's most extensive stretch of continuous alluvial plain.
      </p>
      <DataTable headers={["Zone", "Character"]} rows={[
        ["Bhabar", "A narrow belt right along the Himalayan foothills; porous, pebble-strewn — streams often vanish underground here"],
        ["Tarai", "Just south of the Bhabar; wet, marshy, densely forested"],
        ["Bhangar", "Older alluvium, forming slightly elevated terraces above the flood zone"],
        ["Khadar", "Newer alluvium in the active floodplains — replenished by fresh silt almost every year"],
      ]} />
      <Callout type="trap" label="Common trap">
        <b>Bhangar (older, terrace-like) vs Khadar (newer, floodplain)</b> is the pair most often confused —
        remember Khadar gets re-flooded and refreshed nearly every year, while Bhangar sits above that zone.
      </Callout>

      {/* 5. Peninsular Plateau */}
      <SectionHeading num="05" title="The Peninsular Plateau" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        India's oldest landmass, a relic of the ancient Gondwana supercontinent, made of hard igneous and
        metamorphic rock. Split by the Narmada river into two broad parts:
      </p>
      <DataTable headers={["Part", "Includes"]} rows={[
        ["Central Highlands", "North of the Narmada — Malwa Plateau, Bundelkhand, Baghelkhand, Chota Nagpur Plateau (mineral-rich, Jharkhand)"],
        ["Deccan Plateau", "South of the Narmada — a large triangular tableland flanked by the Western and Eastern Ghats"],
      ]} />
      <DataTable headers={["", "Western Ghats", "Eastern Ghats"]} rows={[
        ["Continuity", "Continuous", "Discontinuous, broken by rivers"],
        ["Average height", "Higher (avg. ~1,500 m)", "Lower"],
        ["Highest peak", "Anamudi (2,695 m, Kerala)", "Mahendragiri (Odisha)"],
        ["Significance", "Source of the Godavari, Krishna & Kaveri; a UNESCO World Heritage Site", "Crossed by major peninsular rivers on their way to the Bay of Bengal"],
      ]} />
      <Callout type="mnemonic" label="Deccan Traps">
        The black-soil region across Maharashtra and neighbouring states comes from the <b>Deccan Traps</b> —
        vast lava-flow deposits from volcanic eruptions roughly 66 million years ago, an event often linked to
        the mass extinction that ended the age of dinosaurs.
      </Callout>

      {/* 6. Thar Desert */}
      <SectionHeading num="06" title="The Indian Desert — Thar" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Located mainly in <b>Rajasthan</b>, extending into parts of Gujarat and Haryana</li>
        <li>Arid climate, rainfall under 150 mm/year; landscape shaped by shifting sand dunes ("barchans")</li>
        <li>The <b>Luni River</b> is the only significant river here — it doesn't reach the sea, ending
          instead in the marshy <b>Rann of Kachchh</b></li>
      </ul>

      {/* 7. Coastal Plains */}
      <SectionHeading num="07" title="The Coastal Plains" />
      <DataTable headers={["", "Western Coastal Plain", "Eastern Coastal Plain"]} rows={[
        ["Location", "Between the Western Ghats and the Arabian Sea", "Between the Eastern Ghats and the Bay of Bengal"],
        ["Width", "Narrow", "Wider than the western plain"],
        ["Sub-regions", "Konkan (Maharashtra-Goa), Kannad Plain (Karnataka), Malabar Coast (Kerala)", "Northern Circars (Odisha-Andhra), Coromandel Coast (Tamil Nadu)"],
        ["Distinctive feature", "Lagoons and backwaters — famously the Kerala backwaters", "Large river deltas — Godavari, Krishna, Kaveri, Mahanadi"],
      ]} />

      {/* 8. Islands */}
      <SectionHeading num="08" title="The Islands" />
      <DataTable headers={["", "Lakshadweep", "Andaman & Nicobar"]} rows={[
        ["Located in", "Arabian Sea", "Bay of Bengal"],
        ["Origin", "Coral (atolls)", "Volcanic / tectonic"],
        ["Size", "Much smaller in area", "Larger, more numerous islands"],
        ["Capital", "Kavaratti", "Port Blair"],
        ["Distinctive feature", "—", "Barren Island — India's only active volcano; the two island groups are separated by the 10° Channel"],
      ]} />

      {/* 9. Rivers */}
      <SectionHeading num="09" title="Himalayan vs Peninsular Rivers" />
      <DataTable headers={["", "Himalayan Rivers", "Peninsular Rivers"]} rows={[
        ["Source", "Snow and glaciers", "Rainfall — seasonal"],
        ["Flow", "Perennial (flow year-round)", "Mostly seasonal, reduced flow in dry months"],
        ["Examples", "Indus, Ganga, Brahmaputra systems", "Godavari (largest peninsular river, 'Dakshin Ganga'), Krishna, Kaveri"],
        ["Exception", "—", "Narmada and Tapi flow westward into the Arabian Sea through rift valleys, unlike other peninsular rivers, which flow east into the Bay of Bengal"],
      ]} />

      {/* 10. Quick revision - lakes */}
      <SectionHeading num="10" title="Quick Revision — Important Lakes" />
      <DataTable headers={["Lake", "State", "Claim to fame"]} rows={[
        ["Wular Lake", "Jammu & Kashmir", "India's largest freshwater lake"],
        ["Sambhar Lake", "Rajasthan", "India's largest saltwater / inland salt lake"],
        ["Chilika Lake", "Odisha", "Largest coastal lagoon in India (and Asia)"],
        ["Loktak Lake", "Manipur", "Largest freshwater lake in Northeast India; famous for floating 'phumdis' islands"],
        ["Dal Lake", "Jammu & Kashmir", "Famous for houseboats and Mughal-era gardens around Srinagar"],
      ]} />

      {/* 11. Practice */}
      <SectionHeading num="11" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="India's highest peak, located fully within Indian territory, is:"
        options={["Mount Everest", "Nanda Devi", "Kanchenjunga", "K2"]}
        correctIndex={2} explanation="Kanchenjunga (8,586 m), in Sikkim." />
      <MCQItem n={2} q="Which Himalayan range is the southernmost and lowest, containing valleys called 'Duns'?"
        options={["Himadri", "Himachal", "Shiwalik", "Purvanchal"]}
        correctIndex={2} explanation="The Shiwaliks — e.g. Dehradun sits in one such 'Dun' valley." />
      <MCQItem n={3} q="In the Northern Plains, the newer, annually-flooded alluvium is called:"
        options={["Bhabar", "Tarai", "Bhangar", "Khadar"]}
        correctIndex={3} explanation="Khadar — Bhangar is the older, terrace-like alluvium above the flood zone." />
      <MCQItem n={4} q="The highest peak of the Western Ghats is:"
        options={["Anamudi", "Mahendragiri", "Doddabetta", "Kalsubai"]}
        correctIndex={0} explanation="Anamudi (2,695 m), in Kerala." />
      <MCQItem n={5} q="India's only active volcano, Barren Island, is located in:"
        options={["Lakshadweep", "Andaman & Nicobar Islands", "Sunderbans", "Gulf of Kachchh"]}
        correctIndex={1} explanation="The Andaman Islands, in the Bay of Bengal." />
      <MCQItem n={6} q="Which is India's largest saltwater (inland) lake?"
        options={["Wular Lake", "Chilika Lake", "Sambhar Lake", "Loktak Lake"]}
        correctIndex={2} explanation="Sambhar Lake, in Rajasthan." />
      <MCQItem n={7} q="Which two peninsular rivers flow westward into the Arabian Sea, unlike most others?"
        options={["Godavari and Krishna", "Narmada and Tapi", "Kaveri and Mahanadi", "Krishna and Kaveri"]}
        correctIndex={1} explanation="Narmada and Tapi, both flowing through rift valleys." />
      <MCQItem n={8} q="The Kerala backwaters and lagoons are a distinctive feature of which coastal region?"
        options={["Coromandel Coast", "Northern Circars", "Malabar Coast", "Konkan Coast"]}
        correctIndex={2} explanation="The Malabar Coast, part of the Western Coastal Plain." />
      <MCQItem n={9} q="The black-soil Deccan Trap region was formed by:"
        options={["River deposition", "Volcanic lava flows", "Glacial activity", "Coral reef formation"]}
        correctIndex={1} explanation="Ancient volcanic eruptions roughly 66 million years ago." />
      <MCQItem n={10} q="The Luni River, unique to the Thar Desert region, ultimately drains into:"
        options={["The Arabian Sea", "The Bay of Bengal", "The Rann of Kachchh", "Sambhar Lake"]}
        correctIndex={2} explanation="It ends in the marshy Rann of Kachchh rather than reaching the sea." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Geography. Elevations, locations, and classifications are compiled from standard Indian geography references. A few figures (exact peak heights, lake rankings) can vary slightly between sources due to survey updates — treat the values here as the commonly accepted exam-standard figures." />
    </div>
  );
}
