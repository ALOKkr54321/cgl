import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function GovernmentSchemes() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Indian Polity & Constitution"
        priority="HIGH"
        title="Government Schemes"
        dek="Flagship central schemes organised by theme — launch year, implementing ministry, and the one fact SSC actually tests for each. This is pure recall territory: the goal is instant, confident recognition, not deep policy analysis."
        stats={[
          { value: "3–5", label: "Qs typically drawn from schemes across Tier-I + Tier-II" },
          { value: "35+", label: "Schemes worth knowing at recognition level" },
          { value: "2014–15", label: "The single densest launch window — most schemes cluster here" },
          { value: "₹5 lakh", label: "Ayushman Bharat PM-JAY's per-family annual health cover" },
        ]}
      />

      <Callout type="exam" label="How this topic is actually tested">
        SSC rarely asks about scheme <i>objectives</i> in depth — it asks the <b>launch year</b>, the
        <b> implementing ministry</b>, or a <b>one-line identifying fact</b> (coverage amount, target group,
        full form of an acronym). Optimise for that recognition, not essay-level understanding.
      </Callout>

      {/* 1. Financial Inclusion */}
      <SectionHeading num="01" title="Financial Inclusion & Insurance" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        All launched in 2014–15 under the Ministry of Finance — SSC's single most-mined cluster of scheme questions.
      </p>
      <DataTable headers={["Scheme", "Launched", "Key fact"]} rows={[
        ["Pradhan Mantri Jan Dhan Yojana (PMJDY)", "28 Aug 2014", "Zero-balance bank accounts + RuPay card; financial inclusion"],
        ["Pradhan Mantri Suraksha Bima Yojana (PMSBY)", "9 May 2015", "Accident insurance, ₹2 lakh cover, ₹20/year premium"],
        ["Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)", "9 May 2015", "Life insurance, ₹2 lakh cover, ₹436/year premium"],
        ["Atal Pension Yojana (APY)", "9 May 2015", "Pension ₹1,000–5,000/month after 60, for unorganised sector (age 18–40 entry)"],
        ["Pradhan Mantri Mudra Yojana (PMMY)", "8 Apr 2015", "Collateral-free loans to micro units — Shishu, Kishor, Tarun categories"],
        ["Stand Up India", "5 Apr 2016", "₹10 lakh–1 crore loans for SC/ST and women entrepreneurs"],
      ]} />
      <Accordion chip="PMJDY" title="Pradhan Mantri Jan Dhan Yojana — the flagship" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Launched 28 August 2014 — often called the world's largest financial inclusion drive</li>
          <li>Zero-balance savings account, free RuPay debit card with accident insurance cover</li>
          <li>Overdraft facility available after satisfactory account operation</li>
          <li>Ministry: Finance (Department of Financial Services)</li>
        </ul>
      </Accordion>
      <Callout type="trap" label="Common trap">
        PMSBY (accident insurance) and PMJJBY (life insurance) are a classic mix-up pair. Anchor it as:
        <b> "S" in PMSBY = Suraksha = accident/Safety</b>, while PMJJBY's "Jeevan Jyoti" literally means
        "light of life" — a life cover. PMJJBY also costs more per year (₹436) than PMSBY (₹20).
      </Callout>

      {/* 2. Health */}
      <SectionHeading num="02" title="Health & Family Welfare" />
      <DataTable headers={["Scheme", "Launched", "Key fact"]} rows={[
        ["Ayushman Bharat – PM-JAY", "23 Sep 2018", "₹5 lakh/family/year cashless health cover; world's largest govt-funded health scheme"],
        ["Janani Suraksha Yojana", "2005", "Cash assistance for institutional delivery, under NRHM"],
        ["Mission Indradhanush", "Dec 2014", "Full immunisation drive for children under 2 & pregnant women"],
        ["PM Surakshit Matritva Abhiyan", "2016", "Free antenatal check-ups on the 9th of every month"],
      ]} />
      <Accordion chip="PM-JAY" title="Ayushman Bharat — two pillars">
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Pillar 1</b> — Health & Wellness Centres (launched 14 April 2018), upgrading sub-centres for
            comprehensive primary care</li>
          <li><b>Pillar 2</b> — PM-JAY itself (23 September 2018), ₹5 lakh/family/year cashless secondary &
            tertiary care for the bottom ~40% of the population identified via SECC 2011 data</li>
          <li>Ministry: Health & Family Welfare</li>
        </ul>
      </Accordion>

      {/* 3. Housing & Urban */}
      <SectionHeading num="03" title="Housing & Urban Development" />
      <DataTable headers={["Scheme", "Launched", "Key fact"]} rows={[
        ["Pradhan Mantri Awas Yojana – Urban (PMAY-U)", "25 Jun 2015", "'Housing for All' in urban areas; Credit Linked Subsidy Scheme component"],
        ["Pradhan Mantri Awas Yojana – Gramin (PMAY-G)", "1 Apr 2016", "Renamed & restructured from the older Indira Awaas Yojana"],
        ["Smart Cities Mission", "25 Jun 2015", "100 cities selected via a competitive 'Smart City Challenge'"],
        ["AMRUT", "25 Jun 2015", "Atal Mission for Rejuvenation & Urban Transformation — water supply & sewerage in 500 cities"],
      ]} />
      <Callout type="trap" label="Common trap">
        PMAY-Urban and PMAY-Gramin share a name but launched a year apart and sit under different logic:
        Urban began fresh in 2015, while Gramin is the 2016 rebrand of the much older Indira Awaas Yojana —
        a favourite "which came first" trap.
      </Callout>

      {/* 4. Employment & Skill */}
      <SectionHeading num="04" title="Employment, Skill & Entrepreneurship" />
      <DataTable headers={["Scheme", "Launched", "Key fact"]} rows={[
        ["MGNREGA", "2005 (Act)", "Guarantees 100 days of wage employment/year per rural household; world's largest work-guarantee programme"],
        ["Pradhan Mantri Kaushal Vikas Yojana (PMKVY)", "2015", "Flagship skill-certification scheme under the Skill India Mission"],
        ["Deen Dayal Upadhyaya Grameen Kaushalya Yojana", "25 Sep 2014", "Skilling & placement for rural youth aged 15–35"],
        ["Startup India", "16 Jan 2016", "Tax benefits, easier compliance & funding support for startups"],
        ["Make in India", "25 Sep 2014", "Boost domestic manufacturing across 25 sectors"],
      ]} />
      <Accordion chip="MGNREGA" title="Mahatma Gandhi NREGA — the numbers that get tested">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Original Act: National Rural Employment Guarantee Act, 2005; renamed "Mahatma Gandhi NREGA" in 2009</li>
          <li>Guarantees <b>100 days</b> of unskilled wage employment per financial year to every rural household
            that volunteers</li>
          <li>Ministry: Rural Development</li>
          <li>A legal right, not just a scheme — enforceable under the Act</li>
        </ul>
      </Accordion>

      {/* 5. Agriculture */}
      <SectionHeading num="05" title="Agriculture & Rural Development" />
      <DataTable headers={["Scheme", "Launched", "Key fact"]} rows={[
        ["PM-KISAN", "24 Feb 2019", "₹6,000/year direct cash transfer to farmer families, paid in 3 installments"],
        ["PM Fasal Bima Yojana (PMFBY)", "13 Jan 2016", "Crop insurance; farmer premium capped at 2% (Kharif) / 1.5% (Rabi)"],
        ["Soil Health Card Scheme", "19 Feb 2015", "Soil nutrient status card for farmers every 2 years"],
        ["e-NAM", "14 Apr 2016", "National electronic trading portal for agricultural commodities"],
      ]} />
      <Accordion chip="PM-KISAN" title="PM Kisan Samman Nidhi — quick facts">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Launched 24 February 2019 from Gorakhpur, Uttar Pradesh</li>
          <li>₹6,000 per year, paid in three equal installments of ₹2,000 every four months</li>
          <li>Direct Benefit Transfer straight to the farmer family's bank account</li>
          <li>Ministry: Agriculture & Farmers Welfare</li>
        </ul>
      </Accordion>

      {/* 6. Women & Child */}
      <SectionHeading num="06" title="Women & Child Welfare" />
      <DataTable headers={["Scheme", "Launched", "Key fact"]} rows={[
        ["Beti Bachao Beti Padhao", "22 Jan 2015", "Addresses declining Child Sex Ratio; launched from Panipat, Haryana"],
        ["Sukanya Samriddhi Yojana", "22 Jan 2015", "Small savings scheme for a girl child, matures when she turns 21"],
        ["PM Matru Vandana Yojana (PMMVY)", "1 Jan 2017", "₹5,000 maternity benefit for the first living child"],
      ]} />
      <Callout type="trap" label="Common trap">
        Beti Bachao Beti Padhao and Sukanya Samriddhi Yojana were launched on the <b>same day</b>
        (22 January 2015) but are different instruments — BBBP is an awareness & enforcement campaign against
        sex-selective practices, while Sukanya Samriddhi is a savings/deposit scheme. SSC likes to test whether
        you know they're twins by launch date but not by function.
      </Callout>

      {/* 7. Sanitation & Water */}
      <SectionHeading num="07" title="Sanitation, Water & Environment" />
      <DataTable headers={["Scheme", "Launched", "Key fact"]} rows={[
        ["Swachh Bharat Mission", "2 Oct 2014", "Sanitation drive; India declared Open Defecation Free on 2 Oct 2019"],
        ["Jal Jeevan Mission", "15 Aug 2019", "'Har Ghar Jal' — piped water connection to every rural household"],
        ["Namami Gange Programme", "2014–15", "Integrated Ganga conservation & rejuvenation, run by NMCG"],
      ]} />
      <Accordion chip="SBM" title="Swachh Bharat Mission — two dates that matter">
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Launched:</b> 2 October 2014 — Gandhi's 145th birth anniversary</li>
          <li><b>ODF declared:</b> 2 October 2019 — Gandhi's 150th birth anniversary</li>
          <li>Two verticals: SBM-Urban (Ministry of Housing & Urban Affairs) and SBM-Gramin (Ministry of Jal Shakti)</li>
          <li>Phase 2 (SBM 2.0), launched 2021, shifts focus to ODF-Plus and sustainability of sanitation</li>
        </ul>
      </Accordion>

      {/* 8. Digital & Infra */}
      <SectionHeading num="08" title="Digital, Infrastructure & Manufacturing" />
      <DataTable headers={["Scheme", "Launched", "Key fact"]} rows={[
        ["Digital India", "1 Jul 2015", "Umbrella programme for digital infrastructure & e-governance"],
        ["Production Linked Incentive (PLI) Scheme", "2020", "Financial incentives tied to incremental manufacturing output, across ~14 sectors"],
        ["PM Gati Shakti", "13 Oct 2021", "National Master Plan for multi-modal infrastructure connectivity"],
        ["UDAN", "21 Oct 2016", "Regional air-connectivity scheme — 'Ude Desh ka Aam Nagrik'"],
        ["PM Vishwakarma Yojana", "17 Sep 2023", "Support for traditional artisans & craftspeople across 18 trades"],
      ]} />

      {/* 9. Timeline */}
      <SectionHeading num="09" title="Quick Revision — Launch Year Timeline" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Chronological order is a common SSC question format ("which of these was launched first").
      </p>
      <DataTable headers={["Year", "Schemes launched"]} rows={[
        ["2005", "MGNREGA (Act), Janani Suraksha Yojana"],
        ["2014", "Swachh Bharat Mission, Make in India, DDU-GKY, Mission Indradhanush"],
        ["2015", "PMJDY, PMSBY, PMJJBY, APY, PMMY, PMAY-U, Smart Cities, AMRUT, Soil Health Card, Digital India, BBBP, Sukanya Samriddhi, PMKVY"],
        ["2016", "PMAY-G, Stand Up India, PMFBY, e-NAM, Startup India, UDAN, PM Surakshit Matritva Abhiyan"],
        ["2017", "PM Matru Vandana Yojana"],
        ["2018", "Ayushman Bharat (HWCs in April, PM-JAY in September)"],
        ["2019", "PM-KISAN (February), Jal Jeevan Mission (August)"],
        ["2020", "Production Linked Incentive Scheme, Atmanirbhar Bharat Abhiyan"],
        ["2021", "PM Gati Shakti"],
        ["2023", "PM Vishwakarma Yojana"],
      ]} />

      <SectionHeading num="10" title="Quick Revision — By Ministry" />
      <DataTable headers={["Ministry", "Key schemes"]} rows={[
        ["Finance", "PMJDY, PMSBY, PMJJBY, APY, PMMY"],
        ["Health & Family Welfare", "Ayushman Bharat, Janani Suraksha Yojana, Mission Indradhanush"],
        ["Rural Development", "MGNREGA, PMAY-G, DDU-GKY"],
        ["Housing & Urban Affairs", "PMAY-U, Smart Cities Mission, AMRUT, SBM-Urban"],
        ["Agriculture & Farmers Welfare", "PM-KISAN, PMFBY, Soil Health Card, e-NAM"],
        ["Women & Child Development", "Beti Bachao Beti Padhao, PM Matru Vandana Yojana"],
        ["Jal Shakti", "Jal Jeevan Mission, SBM-Gramin, Namami Gange"],
        ["Skill Development & Entrepreneurship", "PMKVY, Skill India Mission"],
      ]} />

      {/* 11. Practice */}
      <SectionHeading num="11" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="Ayushman Bharat PM-JAY provides a health cover of how much per family per year?"
        options={["₹1 lakh", "₹2 lakh", "₹5 lakh", "₹10 lakh"]}
        correctIndex={2} explanation="₹5 lakh per family per year, cashless and paperless." />
      <MCQItem n={2} q="Which scheme provides accident insurance cover for an annual premium of ₹20?"
        options={["PMJJBY", "PMSBY", "Atal Pension Yojana", "PM-KISAN"]}
        correctIndex={1} explanation="Pradhan Mantri Suraksha Bima Yojana (PMSBY) — accident cover, ₹20/year premium." />
      <MCQItem n={3} q="PM-KISAN provides direct cash assistance of how much per year to farmer families?"
        options={["₹2,000", "₹6,000", "₹10,000", "₹12,000"]}
        correctIndex={1} explanation="₹6,000/year, in three installments of ₹2,000 each." />
      <MCQItem n={4} q="MGNREGA guarantees how many days of wage employment per rural household per year?"
        options={["50 days", "75 days", "100 days", "150 days"]}
        correctIndex={2} explanation="100 days of unskilled wage employment per financial year." />
      <MCQItem n={5} q="Beti Bachao Beti Padhao was launched from which city?"
        options={["New Delhi", "Panipat", "Lucknow", "Ahmedabad"]}
        correctIndex={1} explanation="Panipat, Haryana, on 22 January 2015." />
      <MCQItem n={6} q="Which scheme's goal is 'Har Ghar Jal' — a piped water connection to every rural household?"
        options={["Swachh Bharat Mission", "AMRUT", "Jal Jeevan Mission", "Namami Gange"]}
        correctIndex={2} explanation="Jal Jeevan Mission, launched 15 August 2019." />
      <MCQItem n={7} q="India was declared Open Defecation Free (ODF) on which date?"
        options={["2 October 2014", "15 August 2018", "2 October 2019", "26 January 2020"]}
        correctIndex={2} explanation="2 October 2019 — Mahatma Gandhi's 150th birth anniversary." />
      <MCQItem n={8} q="Pradhan Mantri Mudra Yojana loans are classified into which three categories?"
        options={["Basic, Standard, Premium", "Shishu, Kishor, Tarun", "Small, Medium, Large", "Tier 1, Tier 2, Tier 3"]}
        correctIndex={1} explanation="Shishu (up to ₹50,000), Kishor (₹50,000–5 lakh), and Tarun (₹5–10 lakh)." />
      <MCQItem n={9} q="Which ministry primarily implements the Pradhan Mantri Awas Yojana – Gramin?"
        options={["Ministry of Finance", "Ministry of Rural Development", "Ministry of Housing & Urban Affairs", "Ministry of Agriculture"]}
        correctIndex={1} explanation="Ministry of Rural Development — PMAY-G is the rural housing vertical." />
      <MCQItem n={10} q="The Production Linked Incentive (PLI) Scheme was launched in which year?"
        options={["2018", "2019", "2020", "2022"]}
        correctIndex={2} explanation="2020, to boost domestic manufacturing across multiple sectors." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Indian Polity & Constitution. Launch dates, coverage amounts, and premiums are compiled from official scheme documentation and are subject to periodic government revision — cross-check current figures (especially insurance premiums and coverage caps) closer to your exam date." />
    </div>
  );
}
