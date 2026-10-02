import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function WorldGeography() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Geography"
        priority="MED"
        title="World Geography"
        dek="The continents, oceans, mountain ranges, rivers, and deserts SSC tests as quick-recall trivia, plus the capitals and governments of every country that shares a border with India — land or sea."
        stats={[
          { value: "7", label: "Continents; Asia is the largest, Australia the smallest" },
          { value: "5", label: "Oceans; the Pacific is the largest and deepest" },
          { value: "8,849 m", label: "Mount Everest — the world's highest peak" },
          { value: "9", label: "Countries that are India's land or maritime neighbours" },
        ]}
      />

      {/* 1. Continents */}
      <SectionHeading num="01" title="Continents — Quick Facts" />
      <DataTable headers={["Continent", "Rank by area", "Key trivia"]} rows={[
        ["Asia", "Largest", "Most populous continent; home to ~50 countries"],
        ["Africa", "2nd largest", "Home to the Sahara — the world's largest hot desert"],
        ["North America", "3rd largest", "Includes Canada, USA, Mexico and Central America"],
        ["South America", "4th largest", "Home to the Amazon — the world's largest river by volume"],
        ["Antarctica", "5th largest", "No permanent population; technically the world's largest desert (cold desert)"],
        ["Europe", "6th largest", "Very high population density despite small land area"],
        ["Australia (Oceania)", "Smallest", "The only continent that is also a single country"],
      ]} />

      {/* 2. Oceans */}
      <SectionHeading num="02" title="Oceans — Quick Facts" />
      <DataTable headers={["Ocean", "Rank by size", "Key trivia"]} rows={[
        ["Pacific Ocean", "Largest & deepest", "Contains the Mariana Trench — Earth's deepest point (Challenger Deep)"],
        ["Atlantic Ocean", "2nd largest", "Roughly S-shaped, separating the Americas from Europe & Africa"],
        ["Indian Ocean", "3rd largest", "The only ocean named after a country"],
        ["Southern (Antarctic) Ocean", "4th largest", "Surrounds Antarctica; officially recognised as a separate ocean in 2000"],
        ["Arctic Ocean", "Smallest & shallowest", "Covered by sea ice for much of the year"],
      ]} />

      {/* 3. Mountains */}
      <SectionHeading num="03" title="Major Mountain Ranges & Highest Peaks" />
      <DataTable headers={["Range", "Continent", "Highest peak"]} rows={[
        ["Himalayas", "Asia", "Mount Everest (8,849 m) — highest peak in the world, Nepal-China border"],
        ["Andes", "South America", "Aconcagua (~6,961 m, Argentina) — longest continental mountain range in the world"],
        ["Rocky Mountains", "North America", "Denali (~6,190 m, Alaska)"],
        ["Alps", "Europe", "Mont Blanc (~4,808 m, France-Italy border)"],
        ["Atlas Mountains", "Africa (northwest)", "—"],
        ["Ural Mountains", "—", "Traditionally regarded as the boundary between Europe and Asia"],
      ]} />
      <Callout type="exam" label="Exam focus">
        <b>Mount Kilimanjaro (~5,895 m, Tanzania)</b> is Africa's highest point, but it's a standalone
        volcano — not part of a mountain range — a distinction SSC sometimes tests directly.
      </Callout>

      {/* 4. Rivers */}
      <SectionHeading num="04" title="Major Rivers of the World" />
      <DataTable headers={["River", "Continent", "Claim to fame"]} rows={[
        ["Nile", "Africa", "Traditionally cited as the world's longest river (~6,650 km)"],
        ["Amazon", "South America", "Largest river by discharge (volume) and largest drainage basin"],
        ["Yangtze", "Asia", "Longest river in Asia, and the longest flowing entirely within one country"],
        ["Mississippi-Missouri", "North America", "Longest river system in North America"],
        ["Volga", "Europe", "Longest river in Europe"],
        ["Danube", "Europe", "Flows through more countries than any other river in the world (about 10)"],
      ]} />
      <Callout type="trap" label="Common trap">
        <b>Nile vs Amazon</b> for "longest river" is a genuinely debated measurement in geography — different
        sources measure the source point differently. SSC conventionally expects the <b>Nile</b> as the
        answer for "longest," and the <b>Amazon</b> for "largest by volume/discharge." Know which question
        is being asked.
      </Callout>

      {/* 5. Deserts */}
      <SectionHeading num="05" title="Deserts of the World" />
      <DataTable headers={["Desert", "Location", "Note"]} rows={[
        ["Sahara", "North Africa", "World's largest hot desert"],
        ["Antarctic Desert", "Antarctica", "World's largest desert overall (a cold desert)"],
        ["Arctic Desert", "Arctic region", "World's second-largest cold desert"],
        ["Gobi Desert", "Mongolia / China", "Largest desert in Asia"],
        ["Arabian Desert", "Arabian Peninsula", "Largest desert in the Middle East"],
        ["Atacama Desert", "Chile, South America", "The driest hot desert in the world"],
      ]} />
      <Callout type="mnemonic" label="Memory aid">
        "Largest desert" without any qualifier usually means <b>Antarctica</b> (deserts are defined by low
        precipitation, not heat) — "largest <i>hot</i> desert" is the Sahara. Read the question word-for-word.
      </Callout>

      {/* 6. Climate */}
      <SectionHeading num="06" title="Broad World Climate Types" />
      <DataTable headers={["Climate type", "Typical regions"]} rows={[
        ["Tropical", "Near the equator — hot year-round, high rainfall"],
        ["Dry (Arid/Semi-arid)", "Deserts and adjoining steppe regions"],
        ["Temperate", "Mid-latitudes — moderate temperatures, four distinct seasons"],
        ["Continental", "Interior of large landmasses — hot summers, cold winters"],
        ["Polar", "Arctic & Antarctic regions — extremely cold year-round"],
      ]} />

      {/* 7. Land neighbours */}
      <SectionHeading num="07" title="India's Land-Border Neighbours" />
      <DataTable headers={["Country", "Capital", "Government"]} rows={[
        ["Pakistan", "Islamabad", "Federal parliamentary republic"],
        ["China", "Beijing", "Single-party socialist republic"],
        ["Nepal", "Kathmandu", "Federal parliamentary republic (became a republic in 2008)"],
        ["Bhutan", "Thimphu", "Constitutional monarchy"],
        ["Bangladesh", "Dhaka", "Parliamentary republic"],
        ["Myanmar", "Naypyidaw", "Currently under military administration"],
        ["Afghanistan", "Kabul", "Currently under Taliban administration"],
      ]} />
      <Callout type="trap" label="Common trap">
        Myanmar's capital was moved from <b>Yangon</b> to <b>Naypyidaw</b> in 2005–06 — Yangon (formerly
        Rangoon) remains the largest city and commercial hub, but is no longer the capital, a frequently
        tested switch.
      </Callout>

      {/* 8. Maritime neighbours */}
      <SectionHeading num="08" title="India's Maritime Neighbours" />
      <DataTable headers={["Country", "Capital", "Government"]} rows={[
        ["Sri Lanka", "Sri Jayawardenepura Kotte (legislative); Colombo (commercial hub)", "Presidential republic"],
        ["Maldives", "Malé", "Presidential republic"],
      ]} />
      <Callout type="exam" label="Exam focus">
        Sri Lanka has a two-capital arrangement much like some Indian states —
        <b> Sri Jayawardenepura Kotte</b> is the official/legislative capital, while <b>Colombo</b> is the
        commercial capital most people associate with the country.
      </Callout>

      {/* 9. Quick revision */}
      <SectionHeading num="09" title="Quick Revision — World Superlatives" />
      <DataTable headers={["Superlative", "Answer"]} rows={[
        ["Largest continent", "Asia"],
        ["Smallest continent", "Australia"],
        ["Largest ocean", "Pacific"],
        ["Only ocean named after a country", "Indian Ocean"],
        ["Highest mountain peak", "Mount Everest"],
        ["Longest continental mountain range", "Andes"],
        ["Longest river (traditional)", "Nile"],
        ["Largest river by volume", "Amazon"],
        ["Largest hot desert", "Sahara"],
        ["Deepest point on Earth", "Challenger Deep, Mariana Trench"],
      ]} />

      {/* 10. Practice */}
      <SectionHeading num="10" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="Which is the largest continent by area?"
        options={["Africa", "Asia", "North America", "Europe"]}
        correctIndex={1} explanation="Asia — also the most populous continent." />
      <MCQItem n={2} q="Which is the only ocean named after a country?"
        options={["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"]}
        correctIndex={2} explanation="The Indian Ocean." />
      <MCQItem n={3} q="Mount Everest lies on the border of which two countries?"
        options={["India and Nepal", "Nepal and China", "India and China", "Bhutan and China"]}
        correctIndex={1} explanation="Nepal and China (Tibet)." />
      <MCQItem n={4} q="Which river is traditionally cited as the world's longest?"
        options={["Amazon", "Nile", "Yangtze", "Mississippi"]}
        correctIndex={1} explanation="The Nile, at roughly 6,650 km." />
      <MCQItem n={5} q="Which river carries the largest volume of water (discharge) in the world?"
        options={["Nile", "Yangtze", "Amazon", "Danube"]}
        correctIndex={2} explanation="The Amazon — also has the largest drainage basin." />
      <MCQItem n={6} q="The Sahara Desert is the world's largest:"
        options={["Desert overall", "Hot desert", "Cold desert", "Coastal desert"]}
        correctIndex={1} explanation="Largest hot desert — Antarctica is technically the largest desert overall." />
      <MCQItem n={7} q="The Mariana Trench, home to the deepest point on Earth, lies in which ocean?"
        options={["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"]}
        correctIndex={2} explanation="The Pacific Ocean." />
      <MCQItem n={8} q="What is the capital of Bhutan?"
        options={["Paro", "Thimphu", "Punakha", "Phuentsholing"]}
        correctIndex={1} explanation="Thimphu." />
      <MCQItem n={9} q="Myanmar's capital was moved from Yangon to which city?"
        options={["Mandalay", "Naypyidaw", "Bagan", "Sittwe"]}
        correctIndex={1} explanation="Naypyidaw, in 2005–06." />
      <MCQItem n={10} q="Which mountain range is traditionally considered the boundary between Europe and Asia?"
        options={["Alps", "Caucasus", "Ural Mountains", "Carpathians"]}
        correctIndex={2} explanation="The Ural Mountains." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Geography. Superlative facts (longest river, highest peak) reflect the commonly accepted exam-standard answers; some measurements (like Nile vs Amazon's length) are genuinely disputed among geographers depending on methodology. Government/administration status for Myanmar and Afghanistan reflects the current situation and may change — verify closer to your exam." />
    </div>
  );
}
