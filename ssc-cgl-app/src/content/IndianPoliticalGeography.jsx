import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function IndianPoliticalGeography() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Geography"
        priority="MED"
        title="Indian Political Geography"
        dek="States, Union Territories, capitals, and India's borders — which country touches which state, the named lines that define those borders, and the handful of extreme points and reference lines SSC keeps returning to."
        stats={[
          { value: "28 + 8", label: "Current States + Union Territories" },
          { value: "7", label: "Countries India shares a land border with" },
          { value: "31 Oct 2019", label: "J&K's reorganisation into two Union Territories took effect" },
          { value: "82.5°E", label: "Reference longitude for Indian Standard Time" },
        ]}
      />

      {/* 1. Current count */}
      <SectionHeading num="01" title="States & UTs — The Current Count" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        India currently has <b>28 States</b> and <b>8 Union Territories</b> — a number that has changed
        twice in the last decade, both changes worth knowing in detail.
      </p>
      <DataTable headers={["Union Territories (8)"]} rows={[
        ["Andaman & Nicobar Islands"],
        ["Chandigarh"],
        ["Dadra & Nagar Haveli and Daman & Diu (merged into one UT, 26 Jan 2020)"],
        ["Delhi (National Capital Territory)"],
        ["Jammu & Kashmir (has its own legislature)"],
        ["Ladakh (no legislature)"],
        ["Lakshadweep"],
        ["Puducherry"],
      ]} />

      {/* 2. Recent reorganisations */}
      <SectionHeading num="02" title="Recent Reorganisations" />
      <Accordion chip="2014" title="Telangana — India's Newest Full State" defaultOpen>
        <p>
          Carved out of Andhra Pradesh in <b>2014</b>, becoming the newest full-fledged State — it is the
          most recently created State (as distinct from a Union Territory) in India.
        </p>
      </Accordion>
      <Accordion chip="2019" title="Jammu & Kashmir Reorganisation">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>The Jammu & Kashmir Reorganisation Act, 2019 took effect on <b>31 October 2019</b> —
            Sardar Vallabhbhai Patel's birth anniversary, observed as National Unity Day</li>
          <li>The former State of Jammu & Kashmir was split into <b>two Union Territories</b>:
            Jammu & Kashmir (with its own legislature) and Ladakh (without one)</li>
          <li>This reduced India's state count from 29 to <b>28</b></li>
        </ul>
      </Accordion>

      {/* 3. Multiple capitals */}
      <SectionHeading num="03" title="States With More Than One Capital" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        A recurring SSC trap — several States and UTs shift their seat of government seasonally.
      </p>
      <DataTable headers={["State / UT", "Summer Capital", "Winter Capital"]} rows={[
        ["Jammu & Kashmir (UT)", "Srinagar", "Jammu"],
        ["Himachal Pradesh", "Shimla", "Dharamshala"],
        ["Maharashtra", "Mumbai", "Nagpur"],
      ]} />
      <Callout type="exam" label="Exam focus">
        Andhra Pradesh has been building a new capital at <b>Amaravati</b> — an evolving situation, so
        confirm the currently accepted answer closer to your exam rather than assuming a fixed capital.
      </Callout>

      {/* 4. Land borders by country */}
      <SectionHeading num="04" title="India's Land Borders — Which State Touches Which Country" />
      <DataTable headers={["Neighbouring Country", "Indian States/UTs sharing that border"]} rows={[
        ["Pakistan", "Jammu & Kashmir, Ladakh, Punjab, Rajasthan, Gujarat"],
        ["China", "Jammu & Kashmir, Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, Arunachal Pradesh"],
        ["Nepal", "Uttarakhand, Uttar Pradesh, Bihar, West Bengal, Sikkim"],
        ["Bhutan", "Sikkim, West Bengal, Assam, Arunachal Pradesh"],
        ["Bangladesh", "West Bengal, Assam, Meghalaya, Tripura, Mizoram"],
        ["Myanmar", "Arunachal Pradesh, Nagaland, Manipur, Mizoram"],
        ["Afghanistan", "A short, disputed stretch via Pakistan-occupied Kashmir (PoK)"],
      ]} />
      <Callout type="trap" label="Common trap">
        <b>West Bengal</b> is the only Indian State bordering <i>three</i> different neighbouring
        countries — Nepal, Bhutan, and Bangladesh — a fact SSC likes to test directly.
      </Callout>

      {/* 5. Border lengths */}
      <SectionHeading num="05" title="Border Lengths — Longest to Shortest" />
      <DataTable headers={["Country", "Approx. shared border length"]} rows={[
        ["Bangladesh", "~4,096 km — India's longest land border with any neighbour"],
        ["China", "~3,488 km"],
        ["Pakistan", "~3,323 km"],
        ["Nepal", "~1,751 km"],
        ["Myanmar", "~1,643 km"],
        ["Bhutan", "~699 km"],
        ["Afghanistan", "~106 km — India's shortest, via PoK"],
      ]} />
      <Callout type="mnemonic" label="Memory aid">
        Order from longest to shortest: <b>Bangladesh &gt; China &gt; Pakistan &gt; Nepal &gt; Myanmar &gt;
        Bhutan &gt; Afghanistan.</b> Note Bangladesh, not Pakistan or China, holds the longest shared border —
        a common surprise in this topic.
      </Callout>

      {/* 6. Named lines */}
      <SectionHeading num="06" title="Named Boundary Lines" />
      <DataTable headers={["Line", "Where", "Note"]} rows={[
        ["Radcliffe Line", "India–Pakistan & India–Bangladesh border", "Drawn by Cyril Radcliffe during the 1947 Partition"],
        ["McMahon Line", "India–China border, eastern sector (Arunachal Pradesh)", "Drawn at the 1914 Simla Convention; China does not recognise it"],
        ["Line of Control (LoC)", "India–Pakistan, within Jammu & Kashmir", "The de facto border there, formalised by the 1972 Simla Agreement"],
        ["Line of Actual Control (LAC)", "India–China border, overall", "A de facto, not officially demarcated, boundary"],
      ]} />
      <Callout type="trap" label="Common trap">
        The <b>Durand Line</b> is often thrown in as a distractor — it is the Pakistan–Afghanistan border,
        not an India-related line at all.
      </Callout>

      {/* 7. Coastal states */}
      <SectionHeading num="07" title="Coastal States & Coastline" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        <b>9 mainland States</b> have a coastline: Gujarat, Maharashtra, Goa, Karnataka, Kerala, Tamil Nadu,
        Andhra Pradesh, Odisha, and West Bengal.
      </p>
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>India's total coastline (mainland + islands) is approximately <b>7,516.6 km</b></li>
        <li><b>Gujarat</b> has the longest coastline among all States</li>
        <li><b>West Bengal</b> has one of the shortest coastlines among the 9 coastal States</li>
      </ul>

      {/* 8. Extreme points */}
      <SectionHeading num="08" title="Extreme Points of India" />
      <DataTable headers={["Direction", "Point"]} rows={[
        ["Northernmost", "Indira Col, in the Siachen Glacier area (Ladakh)"],
        ["Southernmost (mainland)", "Kanyakumari, Tamil Nadu"],
        ["Southernmost (incl. islands)", "Indira Point, Great Nicobar Island"],
        ["Easternmost", "Kibithu, Arunachal Pradesh"],
        ["Westernmost", "Sir Creek area (Ghuar Mota), Gujarat"],
      ]} />

      {/* 9. Tropic of Cancer & IST */}
      <SectionHeading num="09" title="Tropic of Cancer & Indian Standard Time" />
      <Callout type="mnemonic" label="8 States the Tropic of Cancer crosses">
        <b>Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, Mizoram</b> —
        this west-to-east order is a favourite "which state does the Tropic of Cancer NOT pass through" trap.
      </Callout>
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        <b>Indian Standard Time (IST)</b> is set at <b>UTC + 5:30</b>, based on the reference longitude
        <b> 82.5°E</b>, which passes near <b>Mirzapur</b>, close to Prayagraj (Allahabad), Uttar Pradesh.
      </p>

      {/* 10. Quick revision */}
      <SectionHeading num="10" title="Quick Revision" />
      <DataTable headers={["Fact", "Value"]} rows={[
        ["Total States", "28"],
        ["Total Union Territories", "8"],
        ["Newest full State", "Telangana (2014)"],
        ["J&K reorganisation effective date", "31 October 2019"],
        ["Longest shared land border", "Bangladesh (~4,096 km)"],
        ["Shortest shared land border", "Afghanistan (~106 km, via PoK)"],
        ["State bordering 3 countries", "West Bengal (Nepal, Bhutan, Bangladesh)"],
        ["IST reference longitude", "82.5°E, near Mirzapur, UP"],
      ]} />

      {/* 11. Practice */}
      <SectionHeading num="11" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="How many States does India currently have?"
        options={["27", "28", "29", "30"]}
        correctIndex={1} explanation="28 States, after the 2019 Jammu & Kashmir reorganisation." />
      <MCQItem n={2} q="The Jammu & Kashmir Reorganisation Act took effect on which date?"
        options={["15 August 2019", "2 October 2019", "31 October 2019", "26 January 2020"]}
        correctIndex={2} explanation="31 October 2019 — Sardar Patel's birth anniversary." />
      <MCQItem n={3} q="Which is India's most recently formed full State?"
        options={["Jharkhand", "Uttarakhand", "Chhattisgarh", "Telangana"]}
        correctIndex={3} explanation="Telangana, carved from Andhra Pradesh in 2014." />
      <MCQItem n={4} q="The winter capital of Jammu & Kashmir is:"
        options={["Srinagar", "Jammu", "Leh", "Kargil"]}
        correctIndex={1} explanation="Jammu — Srinagar is the summer capital." />
      <MCQItem n={5} q="India shares its longest land border with which country?"
        options={["Pakistan", "China", "Bangladesh", "Nepal"]}
        correctIndex={2} explanation="Bangladesh, at roughly 4,096 km." />
      <MCQItem n={6} q="The McMahon Line demarcates the India–China border in which sector?"
        options={["Western (Ladakh)", "Middle (Himachal/Uttarakhand)", "Eastern (Arunachal Pradesh)", "It doesn't relate to the China border"]}
        correctIndex={2} explanation="The eastern sector, in Arunachal Pradesh — drawn at the 1914 Simla Convention." />
      <MCQItem n={7} q="The Durand Line is the international border between:"
        options={["India and Pakistan", "India and China", "Pakistan and Afghanistan", "India and Myanmar"]}
        correctIndex={2} explanation="Pakistan and Afghanistan — not related to India directly." />
      <MCQItem n={8} q="Which Indian State shares a border with three different neighbouring countries?"
        options={["Assam", "Sikkim", "West Bengal", "Arunachal Pradesh"]}
        correctIndex={2} explanation="West Bengal — bordering Nepal, Bhutan, and Bangladesh." />
      <MCQItem n={9} q="India shares land borders with how many countries in total (including the disputed PoK stretch)?"
        options={["5", "6", "7", "8"]}
        correctIndex={2} explanation="7 — Pakistan, China, Nepal, Bhutan, Bangladesh, Myanmar, and Afghanistan." />
      <MCQItem n={10} q="The reference longitude for Indian Standard Time (82.5°E) passes closest to which city?"
        options={["Delhi", "Mirzapur", "Bhopal", "Nagpur"]}
        correctIndex={1} explanation="Mirzapur, near Prayagraj (Allahabad), Uttar Pradesh." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Geography. Border lengths, capital arrangements, and state counts are compiled from standard geography references. Some figures (like exact border lengths and Andhra Pradesh's capital) are subject to ongoing survey updates or political developments — verify current figures closer to your exam." />
    </div>
  );
}
