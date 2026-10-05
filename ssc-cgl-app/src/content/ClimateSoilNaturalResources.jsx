import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function ClimateSoilNaturalResources() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Geography"
        priority="MED"
        title="Climate, Soil & Natural Resources"
        dek="How the monsoon actually moves across India, which soil goes with which crop, which forest type dominates which rainfall zone, and which state leads in which mineral — the four pillars SSC draws Geography-Economy crossover questions from."
        stats={[
          { value: "2", label: "Monsoon branches — Arabian Sea and Bay of Bengal" },
          { value: "6", label: "Major soil types classified across India" },
          { value: "Odisha", label: "India's largest producer of both Iron Ore and Bauxite" },
          { value: "Sundarbans", label: "World's largest mangrove forest — spans India & Bangladesh" },
        ]}
      />

      {/* 1. Monsoon system */}
      <SectionHeading num="01" title="The Indian Monsoon System" />
      <Accordion chip="SW Monsoon" title="Southwest Monsoon (June–September)" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li>India's main rainy season, contributing roughly <b>75–80% of annual rainfall</b></li>
          <li>Onset is conventionally marked at the <b>Kerala coast around 1 June</b>, then advances across the country</li>
          <li><b>Arabian Sea branch</b> — strikes the Western Ghats first, giving Kerala and coastal Karnataka
            their heaviest rain</li>
          <li><b>Bay of Bengal branch</b> — moves up through the Northeast and West Bengal, then curves
            westward across the Gangetic plains</li>
        </ul>
      </Accordion>
      <Accordion chip="NE Monsoon" title="Northeast / Retreating Monsoon (October–December)">
        <p>
          As the Southwest Monsoon withdraws, dry winds pick up moisture crossing the Bay of Bengal and bring
          rain mainly to <b>Tamil Nadu</b> and parts of coastal Andhra Pradesh — the reason Tamil Nadu's main
          rainy season is actually winter, not summer, unlike most of India.
        </p>
      </Accordion>

      {/* 2. Seasons */}
      <SectionHeading num="02" title="The Four Seasons (IMD Classification)" />
      <DataTable headers={["Season", "Months", "Character"]} rows={[
        ["Winter", "December–February", "Cool and dry over most of the country"],
        ["Summer (Pre-monsoon)", "March–May", "Hot and dry; North India experiences the 'Loo' — hot, dry winds"],
        ["Monsoon (Rainy)", "June–September", "The Southwest Monsoon — India's principal rainy season"],
        ["Post-monsoon (Retreating)", "October–November", "Monsoon withdrawal; brings the Northeast Monsoon rains to Tamil Nadu"],
      ]} />

      {/* 3. Factors */}
      <SectionHeading num="03" title="What Shapes Indian Climate" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li><b>The Himalayas</b> — block cold Central Asian winds from reaching the plains in winter, and
          trap monsoon winds, forcing them to shed rain over India instead of passing further north</li>
        <li><b>Western Disturbances</b> — storms originating over the Mediterranean, bringing winter rain
          and snow to Punjab, Himachal Pradesh, and Jammu & Kashmir, important for the Rabi crop cycle</li>
        <li><b>El Niño / La Niña</b> — El Niño years are typically associated with a weaker monsoon (drought
          risk); La Niña years tend to bring a stronger monsoon</li>
        <li><b>India Meteorological Department (IMD)</b> — established 1875, headquartered in New Delhi;
          India's official weather and monsoon forecasting agency</li>
      </ul>

      {/* 4. Major soils */}
      <SectionHeading num="04" title="Major Soil Types" />
      <DataTable headers={["Soil", "Found in", "Character"]} rows={[
        ["Alluvial Soil", "Northern Plains, river deltas", "Most fertile, most widespread; rich in potash, poor in phosphorus; ideal for wheat, rice, sugarcane"],
        ["Black Soil (Regur)", "Deccan Trap region — Maharashtra, MP, Gujarat", "Formed from volcanic rock; excellent moisture retention; the classic 'cotton soil'"],
        ["Red Soil", "Tamil Nadu, Karnataka, Odisha, Chhattisgarh", "Red colour from iron oxide; poor in nitrogen & humus; suits millets, groundnut"],
        ["Laterite Soil", "Western Ghats states, Odisha, NE hills", "Formed by heavy leaching under high rainfall & heat; suits tea, coffee, cashew, rubber"],
      ]} />
      <Callout type="mnemonic" label="Memory aid">
        <b>Black soil = cotton, Laterite = tea/coffee/cashew, Alluvial = wheat/rice/sugarcane.</b> If a
        question pairs a crop with a soil type, work backward from the crop using this anchor.
      </Callout>

      {/* 5. Minor soils */}
      <SectionHeading num="05" title="Other Soil Types" />
      <DataTable headers={["Soil", "Found in", "Character"]} rows={[
        ["Arid / Desert Soil", "Rajasthan, parts of Gujarat, Haryana, Punjab", "Sandy, saline, low humus — becomes productive with irrigation"],
        ["Mountain / Forest Soil", "Himalayan region", "Varies sharply with altitude; humus-rich in valleys, thin on slopes"],
        ["Saline / Alkaline Soil (Usar)", "Punjab, Haryana, UP — dry & waterlogged pockets", "High salt content, poor for cultivation without treatment"],
        ["Peaty / Marshy Soil", "Kerala, Odisha coast, Sundarbans (WB)", "Found in high-rainfall, humid areas; rich in organic matter"],
      ]} />

      {/* 6. Forests */}
      <SectionHeading num="06" title="Forest Types of India" />
      <DataTable headers={["Forest type", "Rainfall zone", "Where / character"]} rows={[
        ["Tropical Evergreen", "Very high (>200 cm)", "Western Ghats, Northeast states, Andaman & Nicobar — dense, doesn't shed leaves together"],
        ["Tropical Deciduous (Moist)", "100–200 cm", "Widespread across Peninsular India; dominant species: Sal"],
        ["Tropical Deciduous (Dry)", "70–100 cm", "Also widespread across the peninsula; dominant species: Teak"],
        ["Thorn / Desert Forest", "Under 70 cm", "Rajasthan, Gujarat — thorny scrub, Acacia (Babool), cacti"],
        ["Mangrove / Tidal Forest", "Coastal deltas", "Sundarbans (largest), Mahanadi & Godavari deltas"],
        ["Montane Forest", "Himalayan altitude bands", "Temperate (oak, pine, deodar) at mid-altitude; alpine meadows higher up"],
      ]} />
      <Callout type="trap" label="Common trap">
        <b>Sal (moist deciduous) vs Teak (dry deciduous)</b> is the most tested species pair — Sal grows in
        the slightly wetter belt, Teak in the somewhat drier one, but both fall under "deciduous," so the
        rainfall band, not the forest category name, is what actually distinguishes them.
      </Callout>

      {/* 7. Sundarbans */}
      <SectionHeading num="07" title="Sundarbans — India's Largest Mangrove Forest" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Formed at the delta of the <b>Ganga and Brahmaputra</b> rivers, spanning both <b>India (West
          Bengal) and Bangladesh</b></li>
        <li>The <b>largest mangrove forest in the world</b>; a UNESCO World Heritage Site</li>
        <li>Famous as the habitat of the <b>Royal Bengal Tiger</b></li>
      </ul>

      {/* 8. Minerals */}
      <SectionHeading num="08" title="Key Minerals & Their Leading States" />
      <DataTable headers={["Mineral", "Leading producer state(s)"]} rows={[
        ["Iron Ore", "Odisha (largest), Chhattisgarh, Karnataka, Jharkhand"],
        ["Coal", "Jharkhand, Chhattisgarh, Odisha — major coalfields at Jharia & Bokaro (Jharkhand), Raniganj (West Bengal), Korba (Chhattisgarh)"],
        ["Bauxite", "Odisha (largest), Gujarat, Jharkhand, Chhattisgarh"],
        ["Manganese", "Odisha (largest), Karnataka, Madhya Pradesh"],
        ["Copper", "Madhya Pradesh (Malanjkhand), Rajasthan, Jharkhand"],
        ["Gold", "Karnataka — the historic Kolar Gold Fields and Hutti mines"],
        ["Chromite", "Odisha — the Sukinda Valley holds India's largest reserves"],
        ["Zinc & Lead", "Rajasthan — Zawar and Rampura-Agucha mines"],
      ]} />

      {/* 9. Petroleum */}
      <SectionHeading num="09" title="Petroleum & Other Notable Resources" />
      <DataTable headers={["Resource", "Key location"]} rows={[
        ["Petroleum (first well in Asia)", "Digboi, Assam — India's oldest oil-producing region"],
        ["Largest offshore oilfield", "Mumbai High, off the coast of Maharashtra"],
        ["Natural Gas", "Krishna-Godavari Basin (offshore Andhra Pradesh), Mumbai High"],
        ["Diamond", "Panna, Madhya Pradesh"],
        ["Thorium (monazite sands)", "Kollam coast, Kerala"],
        ["Uranium (India's first mine)", "Jaduguda, Jharkhand"],
      ]} />

      {/* 10. Quick revision */}
      <SectionHeading num="10" title="Quick Revision" />
      <DataTable headers={["Fact", "Answer"]} rows={[
        ["Monsoon onset location", "Kerala coast, around 1 June"],
        ["State with mostly winter rainfall", "Tamil Nadu (Northeast Monsoon)"],
        ["'Cotton soil'", "Black Soil (Regur)"],
        ["Soil formed by heavy leaching", "Laterite Soil"],
        ["Largest mangrove forest (world)", "Sundarbans"],
        ["Largest Iron Ore & Bauxite producer", "Odisha"],
        ["Gold mining state", "Karnataka (Kolar, Hutti)"],
        ["First oil well in Asia", "Digboi, Assam"],
      ]} />

      {/* 11. Practice */}
      <SectionHeading num="11" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="Which branch of the Southwest Monsoon strikes Kerala first?"
        options={["Bay of Bengal branch", "Arabian Sea branch", "Both simultaneously", "Neither — Kerala gets only retreating monsoon rain"]}
        correctIndex={1} explanation="The Arabian Sea branch, hitting the Western Ghats directly." />
      <MCQItem n={2} q="Tamil Nadu receives most of its rainfall from which monsoon?"
        options={["Southwest Monsoon", "Northeast (Retreating) Monsoon", "Western Disturbances", "It receives no significant monsoon rainfall"]}
        correctIndex={1} explanation="The Northeast Monsoon, October–December." />
      <MCQItem n={3} q="Black soil, associated with cotton cultivation, is also known as:"
        options={["Regur soil", "Laterite soil", "Khadar soil", "Usar soil"]}
        correctIndex={0} explanation="Regur soil, formed from Deccan Trap volcanic rock." />
      <MCQItem n={4} q="Laterite soil is formed primarily due to:"
        options={["River deposition", "Intense leaching under high rainfall and temperature", "Wind erosion", "Volcanic ash deposits"]}
        correctIndex={1} explanation="Heavy leaching strips the soil of most nutrients except iron and aluminium oxides." />
      <MCQItem n={5} q="The world's largest mangrove forest is:"
        options={["Amazon Rainforest", "Sundarbans", "Western Ghats forest belt", "Nicobar rainforest"]}
        correctIndex={1} explanation="The Sundarbans, spanning India and Bangladesh." />
      <MCQItem n={6} q="Teak is the dominant tree species of which forest type?"
        options={["Tropical Evergreen", "Moist Deciduous", "Dry Deciduous", "Thorn Forest"]}
        correctIndex={2} explanation="Dry Deciduous forest — Sal dominates the wetter Moist Deciduous zone instead." />
      <MCQItem n={7} q="India's largest producer of Iron Ore is:"
        options={["Jharkhand", "Chhattisgarh", "Karnataka", "Odisha"]}
        correctIndex={3} explanation="Odisha." />
      <MCQItem n={8} q="The historic Kolar Gold Fields are located in which state?"
        options={["Andhra Pradesh", "Karnataka", "Tamil Nadu", "Kerala"]}
        correctIndex={1} explanation="Karnataka." />
      <MCQItem n={9} q="Asia's first oil well was drilled at:"
        options={["Mumbai High", "Digboi, Assam", "Barmer, Rajasthan", "Ankleshwar, Gujarat"]}
        correctIndex={1} explanation="Digboi, Assam." />
      <MCQItem n={10} q="Western Disturbances, which bring winter rain to North India, originate over the:"
        options={["Arabian Sea", "Bay of Bengal", "Mediterranean Sea", "Pacific Ocean"]}
        correctIndex={2} explanation="The Mediterranean Sea region." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Geography. Mineral-producing state rankings and rainfall thresholds are compiled from standard geography references and can shift slightly year to year as new deposits are surveyed — treat the rankings here as the commonly accepted exam-standard answers." />
    </div>
  );
}
