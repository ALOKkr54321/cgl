import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function InternationalAffairs() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Current Affairs"
        priority="MED"
        title="International Affairs"
        dek="India's recent summits, bilateral visits, and foreign-policy posture — the second-most volatile topic in this syllabus after National Events. This page anchors on the framework that stays useful, plus a snapshot of what was happening at the time of writing, including a summit India is hosting this very week."
        stats={[
          { value: "18th", label: "BRICS Summit — hosted by India in New Delhi, 12–13 September 2026" },
          { value: "2023", label: "Year India last chaired the G20 — see the Economy section for organisation basics" },
          { value: "Quad", label: "India, USA, Japan, Australia — the Indo-Pacific security dialogue" },
          { value: "1–2", label: "Qs typically drawn from this topic across Tier-I + Tier-II" },
        ]}
      />

      <Callout type="trap" label="Read this before the rest of the topic">
        For the <b>structural facts</b> about G20, BRICS, SCO, SAARC and ASEAN — headquarters, founding
        years, member lists — see the <b>International Economic Organisations</b> topic in the Economy
        section; this page focuses on what India has actually been <i>doing</i> on the world stage recently,
        which is exactly what changes fastest and needs re-verification closer to your exam.
      </Callout>

      {/* 1. How to study */}
      <SectionHeading num="01" title="How to Study International Affairs Efficiently" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Track <b>which summits India hosted or attended</b> in the run-up to your exam, and one
          headline outcome from each — not the full text of joint declarations</li>
        <li>Note <b>any bilateral agreement or state visit</b> involving India and a major partner country</li>
        <li>Watch for <b>India taking on a rotating leadership role</b> — chairing G20, BRICS, or a UN body —
          these generate a cluster of exam questions for a full year afterward</li>
        <li>The Ministry of External Affairs (MEA) website and press briefings are the most reliable
          fast-check source, the same way PIB is for domestic news</li>
      </ul>

      {/* 2. Quad */}
      <SectionHeading num="02" title="The Quad — India's Indo-Pacific Partnership" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Unlike G20/BRICS/SCO (covered in the Economy section), the <b>Quadrilateral Security Dialogue</b>
        is a strategic, not primarily economic, grouping — worth knowing on its own.
      </p>
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li><b>Members:</b> India, United States, Japan, Australia</li>
        <li>Originally proposed in 2007 by Japan, went dormant, and was <b>revived in 2017</b></li>
        <li>Focuses on a free, open, and secure <b>Indo-Pacific region</b> — maritime security, supply-chain
          resilience, and technology cooperation</li>
      </ul>

      {/* 3. BRICS 2026 */}
      <SectionHeading num="03" title="This Week's Big Story — India Hosts BRICS 2026" />
      <Callout type="exam" label="Highly current — likely to be tested heavily in the next cycle">
        India assumed the <b>BRICS chairmanship on 1 January 2026</b>, succeeding Brazil (which hosted the
        17th Summit in 2025). The <b>18th BRICS Summit</b> is being held in <b>New Delhi, at Bharat
        Mandapam, on 12–13 September 2026</b> — chaired by Prime Minister Narendra Modi.
      </Callout>
      <DataTable headers={["Detail", "Note"]} rows={[
        ["Host country / city", "India, New Delhi (Bharat Mandapam)"],
        ["Summit motto", "'Building Resilience and Innovation for Cooperation and Sustainability'"],
        ["India's chairmanship began", "1 January 2026"],
        ["Preceding foreign ministers' meeting", "Held in Delhi, 14–15 May 2026, ahead of the leaders' summit"],
        ["Notable 2026 BRICS initiative", "The 'Chennai Consensus' — a joint declaration on collaborative research among developing countries in emerging technologies"],
      ]} />
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        BRICS has expanded in recent years beyond its original five members (Brazil, Russia, India, China,
        South Africa) to include additional nations — always confirm the current full member list against a
        recent source, since this has genuinely changed more than once in a short span.
      </p>

      {/* 4. SCO */}
      <SectionHeading num="04" title="SCO Summit — The Bishkek Declaration" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>PM Modi attended the <b>25th Anniversary Summit of the Shanghai Cooperation Organisation</b> in
          <b> Bishkek, Kyrgyzstan</b> in 2026</li>
        <li>He joined the leaders of China and Russia in signing the <b>Bishkek Declaration</b>, which
          addressed regional security concerns discussed by SCO member states</li>
        <li>This reflected a renewed period of India engaging more actively with the SCO, after a
          lower-profile approach in the preceding couple of years</li>
      </ul>

      {/* 5. Bilateral visits */}
      <SectionHeading num="05" title="Recent Bilateral Visits & Agreements" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        A sample of the kind of state-visit news this topic tests — illustrative, not exhaustive.
      </p>
      <DataTable headers={["Visit / Agreement", "Note"]} rows={[
        ["PM Modi's Ethiopia visit", "December 2025 — the first visit by an Indian PM to Ethiopia in 15 years, focused on bilateral ties and shared BRICS/UN-reform interests"],
        ["Makkah Pact", "A defence agreement signed by Saudi Arabia, Pakistan, and Turkey in 2026 — worth knowing as it's shaped regional dynamics discussed alongside India's diplomacy"],
      ]} />

      {/* 6. Multi-alignment */}
      <SectionHeading num="06" title="India's Foreign Policy Approach — Multi-Alignment" />
      <Callout type="mnemonic" label="A concept, not a headline — stays useful regardless of date">
        India's foreign policy is often described as <b>"multi-alignment"</b> or <b>"strategic autonomy"</b>
        — working simultaneously across overlapping platforms (G7, G20, Quad, SCO, BRICS) without treating
        membership in one as exclusive of the others, rather than aligning permanently with any single bloc.
        This framing explains why India can sit in both the US-aligned Quad and the China-heavy SCO/BRICS at
        the same time — a genuinely useful lens for interpreting any new summit news you read.
      </Callout>

      {/* 7. Quick revision */}
      <SectionHeading num="07" title="Quick Revision" />
      <DataTable headers={["Fact", "Value"]} rows={[
        ["India's BRICS chairmanship began", "1 January 2026"],
        ["18th BRICS Summit host city", "New Delhi (Bharat Mandapam)"],
        ["18th BRICS Summit dates", "12–13 September 2026"],
        ["Quad members", "India, USA, Japan, Australia"],
        ["Year Quad was revived", "2017"],
        ["Year India last chaired G20", "2023"],
        ["India's foreign policy doctrine", "Multi-alignment / strategic autonomy"],
      ]} />

      {/* 8. Practice */}
      <SectionHeading num="08" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>
        Mixed format — the framework questions stay valid regardless of when you take this exam; the
        summit-specific ones reflect September 2026 and should be re-verified if your exam is much later.
      </p>
      <MCQItem n={1} q="The Quad (Quadrilateral Security Dialogue) consists of India and which three other countries?"
        options={["USA, UK, France", "USA, Japan, Australia", "Japan, Germany, Australia", "USA, Japan, South Korea"]}
        correctIndex={1} explanation="USA, Japan, and Australia." />
      <MCQItem n={2} q="The Quad grouping was revived in which year, after being dormant?"
        options={["2007", "2014", "2017", "2020"]}
        correctIndex={2} explanation="2017 — it was originally proposed by Japan in 2007." />
      <MCQItem n={3} q="As of September 2026, which country holds the BRICS chairmanship?"
        options={["Brazil", "China", "India", "South Africa"]}
        correctIndex={2} explanation="India, having assumed the chairmanship on 1 January 2026 — verify this is still current if your exam is later." />
      <MCQItem n={4} q="The 18th BRICS Summit was hosted in which Indian city?"
        options={["Mumbai", "New Delhi", "Bengaluru", "Chennai"]}
        correctIndex={1} explanation="New Delhi, at the Bharat Mandapam venue." />
      <MCQItem n={5} q="India's foreign policy approach of engaging multiple, sometimes rival, platforms simultaneously is best described as:"
        options={["Non-alignment", "Multi-alignment / strategic autonomy", "Isolationism", "Bloc politics"]}
        correctIndex={1} explanation='Multi-alignment (or strategic autonomy) — distinct from the older Cold War-era "non-alignment."' />
      <MCQItem n={6} q="The Bishkek Declaration in 2026 was associated with which grouping's summit?"
        options={["G20", "BRICS", "Shanghai Cooperation Organisation (SCO)", "ASEAN"]}
        correctIndex={2} explanation="The SCO's 25th Anniversary Summit, held in Bishkek, Kyrgyzstan." />
      <MCQItem n={7} q="India last held the G20 presidency in which year?"
        options={["2021", "2022", "2023", "2024"]}
        correctIndex={2} explanation="2023 — India hosted the G20 Summit in New Delhi." />
      <MCQItem n={8} q="The original five founding members of BRICS were Brazil, Russia, India, China, and:"
        options={["Indonesia", "South Africa", "Egypt", "UAE"]}
        correctIndex={1} explanation="South Africa — joined in 2010 to complete the original 'BRICS' acronym." />
      <MCQItem n={9} q="The Ministry primarily responsible for India's foreign policy and diplomatic relations is the:"
        options={["Ministry of Home Affairs", "Ministry of External Affairs", "Ministry of Defence", "Ministry of Commerce"]}
        correctIndex={1} explanation="The Ministry of External Affairs (MEA)." />
      <MCQItem n={10} q="PM Modi's December 2025 visit to Ethiopia was notable because:"
        options={["It was the first-ever visit by an Indian PM to Africa", "It was the first Indian PM visit to Ethiopia in 15 years", "It marked India joining the African Union", "It launched a new currency union"]}
        correctIndex={1} explanation="The first visit by an Indian Prime Minister to Ethiopia in 15 years." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Current Affairs. Summit details and diplomatic developments reflect information compiled in September 2026 and will age quickly — that's expected for this topic. Re-verify the summit and bilateral-visit sections against MEA press releases or a current-affairs digest in the weeks before your exam; the Quad's membership and India's multi-alignment framing remain valid regardless of date." />
    </div>
  );
}
