import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function ScienceTechnologyInNews() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="General Science"
        priority="MED"
        title="Science & Technology in News"
        dek="ISRO's space programme and DRDO's missile systems — the established history SSC has always tested, plus the most recent milestones compiled at the time of writing. This topic changes faster than any other in General Science, so treat the 'recent' section as a starting point, not a finish line."
        stats={[
          { value: "2023", label: "Chandrayaan-3's successful Moon landing — now marked as National Space Day (23 Aug)" },
          { value: "2014", label: "Mangalyaan made India the first nation to reach Mars orbit on its maiden attempt" },
          { value: "1983", label: "IGMDP launched — the origin of India's Agni, Prithvi, Akash, Nag & Trishul missiles" },
          { value: "4th", label: "Country (after US, Russia, China) to demonstrate space docking — via SPADEX" },
        ]}
      />

      <Callout type="trap" label="Read this before the rest of the topic">
        Unlike every other topic in this series, this one is explicitly about <b>current events</b> — ISRO
        and DRDO announce new tests and missions constantly, and exact schedules shift. The sections below
        separate <b>established, dated milestones</b> (safe to memorise as-is) from <b>recent developments as
        of compilation</b> (verify against the latest news before your exam — don't treat these dates or
        mission statuses as final).
      </Callout>

      {/* 1. ISRO structure */}
      <SectionHeading num="01" title="ISRO — Structure & Launch Vehicles" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        The Indian Space Research Organisation, under the Department of Space, is headquartered in
        Bengaluru. It operates several launch vehicle families, each suited to a different payload class.
      </p>
      <DataTable headers={["Launch Vehicle", "Full form", "Typical use"]} rows={[
        ["PSLV", "Polar Satellite Launch Vehicle", "ISRO's reliable workhorse — used for Chandrayaan-1 and the Mars Orbiter Mission"],
        ["GSLV", "Geosynchronous Satellite Launch Vehicle", "Heavier payloads to geosynchronous transfer orbit"],
        ["LVM3", "Launch Vehicle Mark-3 (formerly GSLV Mk III)", "ISRO's heaviest-lift vehicle — used for Chandrayaan-3 and planned for Gaganyaan"],
        ["SSLV", "Small Satellite Launch Vehicle", "A newer, smaller rocket for quick, on-demand small-satellite launches"],
      ]} />

      {/* 2. Chandrayaan */}
      <SectionHeading num="02" title="The Chandrayaan Programme" />
      <DataTable headers={["Mission", "Year", "Milestone"]} rows={[
        ["Chandrayaan-1", "2008", "India's first lunar mission; helped confirm the presence of water molecules on the Moon"],
        ["Chandrayaan-2", "2019", "Orbiter succeeded; the Vikram lander crash-landed during descent"],
        ["Chandrayaan-3", "2023", "Successful soft landing near the Moon's south pole (23 August) — India became the first country to land near the lunar south pole, and the 4th to achieve any soft Moon landing"],
        ["Chandrayaan-4", "Planned", "A lunar sample-return mission — would make India only the 4th country to bring lunar samples back to Earth"],
      ]} />
      <Callout type="exam" label="Exam focus">
        <b>23 August</b>, the date of Chandrayaan-3's landing, is now observed as <b>National Space Day</b>
        in India — a static fact layered on top of a "recent" event, and a favourite for direct-date questions.
      </Callout>

      {/* 3. Gaganyaan */}
      <SectionHeading num="03" title="Gaganyaan — India's Human Spaceflight Programme" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Aims to make India the <b>4th country to independently send humans to space</b>, after the
          USA, Russia, and China</li>
        <li>Uses the <b>Human-Rated LVM3 (HLVM3)</b> launch vehicle, carrying a crew module designed for
          three astronauts</li>
        <li>The programme includes uncrewed test flights (carrying the humanoid robot <b>Vyommitra</b>)
          before any crewed mission is attempted</li>
        <li><i>As of compilation:</i> the first uncrewed test flight was in an advanced testing stage, with
          the crewed mission targeted for a later year — check the latest ISRO update for exact status</li>
      </ul>

      {/* 4. Other missions */}
      <SectionHeading num="04" title="Other Landmark ISRO Missions" />
      <DataTable headers={["Mission", "Year", "Significance"]} rows={[
        ["Mangalyaan (Mars Orbiter Mission)", "2013–14", "India became the first nation to reach Mars orbit on its maiden attempt, and the first Asian nation to reach Mars at all"],
        ["Aditya-L1", "2023", "India's first solar observation mission, positioned at the Sun-Earth Lagrange Point 1 (L1)"],
        ["SPADEX", "2024–25", "Space Docking Experiment — made India the 4th country to demonstrate in-space docking, after the US, Russia, and China"],
        ["NISAR", "2025", "A joint NASA-ISRO Earth-observation satellite using synthetic aperture radar"],
      ]} />
      <Callout type="mnemonic" label="Memory aid">
        <b>Mangalyaan = Mars, Aditya-L1 = Sun, Chandrayaan = Moon, Gaganyaan = Humans to orbit.</b> Each
        programme name maps directly to its target — useful when a question just names the mission.
      </Callout>

      {/* 5. DRDO structure */}
      <SectionHeading num="05" title="DRDO — Structure & the Missile Programme's Origin" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>The Defence Research and Development Organisation operates <b>dozens of laboratories</b> across
          India, developing indigenous defence technology</li>
        <li>The <b>Integrated Guided Missile Development Programme (IGMDP)</b>, launched in <b>1983</b> and
          spearheaded by <b>Dr. A.P.J. Abdul Kalam</b>, produced India's first five indigenous missile
          systems before formally concluding in 2012</li>
      </ul>
      <Callout type="exam" label="Exam focus">
        The five missiles that came directly out of the IGMDP are a classic recall set:
        <b> Prithvi, Agni, Trishul, Akash, and Nag.</b>
      </Callout>

      {/* 6. Missile families */}
      <SectionHeading num="06" title="India's Missile Families — Quick Reference" />
      <DataTable headers={["Missile", "Type", "Key fact"]} rows={[
        ["Agni series", "Ballistic missile", "Agni-V is India's longest-range missile, ICBM-class, capable of carrying multiple warheads (MIRV technology)"],
        ["Prithvi series", "Short-range ballistic missile", "India's first indigenously developed ballistic missile; liquid-fuelled"],
        ["Akash", "Surface-to-air missile", "Indigenous air defence system; also exported to partner countries"],
        ["Nag / Helina", "Anti-tank guided missile", "Nag is ground/vehicle-launched; Helina is its helicopter-launched variant"],
        ["BrahMos", "Supersonic cruise missile", "Jointly developed by India (DRDO) and Russia (NPO Mashinostroyeniya); world's fastest operational cruise missile at Mach 2.8–3"],
        ["Astra", "Air-to-air missile", "India's first indigenous beyond-visual-range air-to-air missile"],
      ]} />
      <Callout type="trap" label="Common trap">
        <b>BrahMos's name</b> is a portmanteau of the <b>Brahmaputra</b> river (India) and the
        <b> Moskva</b> river (Russia) — a direct reflection of the joint venture, and a frequently tested
        etymology question.
      </Callout>

      {/* 7. Recent milestones */}
      <SectionHeading num="07" title="Recent Milestones — Verify Before Your Exam" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        These reflect the most recent developments <i>as compiled</i> — useful for context, but this is
        exactly the kind of fact that can be superseded by the time you sit the exam.
      </p>
      <DataTable headers={["Development", "Note"]} rows={[
        ["Mission Divyastra", "India's first flight test of an Agni-V missile with MIRV (Multiple Independently Targetable Re-entry Vehicle) technology, placing India among a small group of nations with this capability"],
        ["Operation Sindoor", "A 2025 military operation in which BrahMos was used in actual combat for the first time"],
        ["BrahMos-NG", "A next-generation, lighter BrahMos variant undergoing flight testing"],
      ]} />

      {/* 8. Quick revision */}
      <SectionHeading num="08" title="Quick Revision" />
      <DataTable headers={["Fact", "Answer"]} rows={[
        ["First Indian in space", "Rakesh Sharma (1984, aboard a Soviet Soyuz mission)"],
        ["India's first lunar mission", "Chandrayaan-1 (2008)"],
        ["National Space Day", "23 August — Chandrayaan-3's landing anniversary"],
        ["India's first Mars mission", "Mangalyaan / Mars Orbiter Mission (2013–14)"],
        ["IGMDP founder", "Dr. A.P.J. Abdul Kalam"],
        ["World's fastest operational cruise missile", "BrahMos"],
        ["India's first indigenous ballistic missile", "Prithvi"],
      ]} />

      {/* 9. Practice */}
      <SectionHeading num="09" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>
        Ten questions in the pattern SSC CGL has actually used — focused on established milestones rather
        than the most recent, still-shifting developments.
      </p>
      <MCQItem n={1} q="Who was the first Indian to travel to space?"
        options={["Kalpana Chawla", "Sunita Williams", "Rakesh Sharma", "Vikram Sarabhai"]}
        correctIndex={2} explanation="Rakesh Sharma, in 1984, aboard a Soviet Soyuz mission." />
      <MCQItem n={2} q="Chandrayaan-3 achieved a successful soft landing near which part of the Moon?"
        options={["The equator", "The north pole", "The south pole", "The far side (dark side)"]}
        correctIndex={2} explanation="The lunar south pole — India was the first country to land there." />
      <MCQItem n={3} q="India's National Space Day is observed on:"
        options={["15 August", "2 October", "23 August", "26 January"]}
        correctIndex={2} explanation="23 August, marking Chandrayaan-3's 2023 landing." />
      <MCQItem n={4} q="Mangalyaan made India the first nation to achieve which feat?"
        options={["Land a rover on the Moon", "Reach Mars orbit on its maiden attempt", "Launch a satellite into geostationary orbit", "Build a reusable rocket"]}
        correctIndex={1} explanation="Reaching Mars orbit successfully on its very first attempt, in 2014." />
      <MCQItem n={5} q="The Integrated Guided Missile Development Programme (IGMDP) was spearheaded by:"
        options={["Vikram Sarabhai", "Homi Bhabha", "A.P.J. Abdul Kalam", "S. Somanath"]}
        correctIndex={2} explanation="Dr. A.P.J. Abdul Kalam, starting in 1983." />
      <MCQItem n={6} q="Which of these was NOT one of the five missiles developed under the IGMDP?"
        options={["Prithvi", "Agni", "BrahMos", "Nag"]}
        correctIndex={2} explanation="BrahMos came later, as a separate India-Russia joint venture — the IGMDP produced Prithvi, Agni, Trishul, Akash, and Nag." />
      <MCQItem n={7} q="BrahMos is a joint venture between India and which country?"
        options={["USA", "France", "Russia", "Israel"]}
        correctIndex={2} explanation="Russia — DRDO and NPO Mashinostroyeniya." />
      <MCQItem n={8} q="Aditya-L1, India's first solar mission, is positioned at:"
        options={["Low Earth Orbit", "The Sun-Earth Lagrange Point 1 (L1)", "Geostationary orbit", "Lunar orbit"]}
        correctIndex={1} explanation="The L1 point, allowing continuous observation of the Sun." />
      <MCQItem n={9} q="Gaganyaan aims to make India the how-manyth country to independently send humans to space?"
        options={["2nd", "3rd", "4th", "5th"]}
        correctIndex={2} explanation="4th, after the USA, Russia, and China." />
      <MCQItem n={10} q="LVM3, ISRO's heaviest-lift launch vehicle, was formerly known as:"
        options={["PSLV Mk III", "GSLV Mk III", "SSLV Mk II", "ASLV Mk III"]}
        correctIndex={1} explanation="GSLV Mk III — renamed LVM3." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · General Science. This topic is inherently time-sensitive: mission schedules, chairperson names, and 'latest' technology milestones change frequently. The dated historical milestones here (Chandrayaan-3, Mangalyaan, IGMDP) are stable exam facts; anything framed as 'recent' should be cross-checked against current news in the weeks before your exam." />
    </div>
  );
}
