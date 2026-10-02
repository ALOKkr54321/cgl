import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function LocalGovernanceFederalism() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Indian Polity & Constitution"
        priority={null}
        title="Local Governance & Federalism"
        dek="How power flows below the State level — Panchayati Raj and Municipalities under the 73rd and 74th Amendments — and how it's divided between the Centre and the States through the Union, State and Concurrent Lists."
        stats={[
          { value: "73rd / 74th", label: "Amendments that gave Panchayats & Municipalities constitutional status" },
          { value: "29 / 18", label: "Subjects in the Eleventh Schedule (Panchayats) / Twelfth Schedule (Municipalities)" },
          { value: "1/3", label: "Minimum seats reserved for women in both Panchayats and Municipalities" },
          { value: "Art. 356", label: "Governs President's Rule when State machinery breaks down" },
        ]}
      />

      {/* 1. Two amendments overview */}
      <SectionHeading num="01" title="The Two Amendments That Built Local Government" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Both passed in 1992, effective 1993 — the most commonly confused pair on this topic.
      </p>
      <DataTable headers={["", "73rd Amendment", "74th Amendment"]} rows={[
        ["Covers", "Panchayats (rural local government)", "Municipalities (urban local government)"],
        ["Added to Constitution", "Part IX, Articles 243–243O", "Part IXA, Articles 243P–243ZG"],
        ["New Schedule added", "Eleventh Schedule — 29 subjects", "Twelfth Schedule — 18 subjects"],
        ["Basic unit", "Gram Sabha (Art. 243A)", "Ward Committee (Art. 243S, for larger cities)"],
      ]} />
      <Callout type="trap" label="Common trap">
        <b>73rd = rural (Panchayats), 74th = urban (Municipalities)</b> — an easy pair to swap under exam
        pressure. Anchor it alphabetically: 73 comes before 74, and "Panchayat" comes before "Municipality"
        in most syllabus lists too.
      </Callout>

      {/* 2. Panchayati Raj */}
      <SectionHeading num="02" title="Panchayati Raj — Structure, Reservation & Tenure" />
      <Accordion chip="Art. 243B" title="Three-Tier Structure" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Gram Panchayat</b> — village level</li>
          <li><b>Panchayat Samiti</b> (block/intermediate level) — <i>optional</i> for States with population
            below 20 lakh</li>
          <li><b>Zila Parishad</b> — district level</li>
          <li><b>Gram Sabha (Art. 243A)</b> — not a tier of government, but the body of all registered voters
            in a village; the foundation the whole system rests on</li>
        </ul>
      </Accordion>
      <Accordion chip="Art. 243D, 243E" title="Reservation & Tenure">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Seats reserved for SC/ST in proportion to their population in that Panchayat area</li>
          <li>Not less than <b>1/3 of seats reserved for women</b> — including reserved SC/ST seats and
            chairperson posts</li>
          <li>Elections are <b>direct</b> for all seats (Art. 243C)</li>
          <li>Term: <b>5 years</b>; if dissolved early, fresh elections must be held within <b>6 months</b></li>
        </ul>
      </Accordion>

      {/* 3. Municipalities */}
      <SectionHeading num="03" title="Municipalities — Types & Structure" />
      <DataTable headers={["Type (Art. 243Q)", "Applies to"]} rows={[
        ["Nagar Panchayat", "A transitional area — moving from rural to urban"],
        ["Municipal Council", "A smaller urban area"],
        ["Municipal Corporation", "A larger urban area"],
      ]} />
      <Accordion chip="Art. 243S, 243ZD, 243ZE" title="Committees for Larger Cities">
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Ward Committees (Art. 243S)</b> — mandatory for municipalities with a population of
            3 lakh or more</li>
          <li><b>District Planning Committee (Art. 243ZD)</b> — consolidates development plans made by
            Panchayats and Municipalities within a district</li>
          <li><b>Metropolitan Planning Committee (Art. 243ZE)</b> — for metropolitan areas with a population
            of 10 lakh or more</li>
        </ul>
      </Accordion>
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        Reservation rules for SC/ST and women (Art. 243T) mirror the Panchayat provisions above.
      </p>

      {/* 4. SEC & SFC */}
      <SectionHeading num="04" title="State Election Commission & State Finance Commission" />
      <DataTable headers={["Body", "Article", "Function"]} rows={[
        ["State Election Commission (SEC)", "Art. 243K (Panchayats) / 243ZA (Municipalities)", "Conducts elections to Panchayats & Municipalities — distinct from the Election Commission of India"],
        ["State Finance Commission (SFC)", "Art. 243I (Panchayats) / 243Y (Municipalities)", "Constituted every 5 years to review and recommend how funds are devolved to local bodies"],
      ]} />
      <Callout type="trap" label="Common trap">
        The <b>State Election Commission</b> is a completely separate body from the Election Commission of
        India — it exists only under the State and has no role in Parliamentary or State Assembly elections.
      </Callout>

      {/* 5. PESA */}
      <SectionHeading num="05" title="PESA Act, 1996 — Extension to Scheduled Areas" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        The Panchayats (Extension to Scheduled Areas) Act extends Panchayati Raj to <b>Fifth Schedule
        Areas</b>, with special safeguards:
      </p>
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>The Gram Sabha is empowered to safeguard local customs and community resources</li>
        <li>Prior Gram Sabha consultation is mandatory before land acquisition or resettlement in these areas</li>
        <li>Gram Sabhas have a say in the management of minor forest produce and minor water bodies</li>
      </ul>

      {/* 6. Legislative relations */}
      <SectionHeading num="06" title="Centre–State Legislative Relations — Part XI" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Legislative subjects are divided into three lists under the Seventh Schedule.
      </p>
      <DataTable headers={["List", "Who can legislate", "Example subjects"]} rows={[
        ["Union List (~97 subjects)", "Parliament — exclusive power", "Defence, foreign affairs, banking, currency, railways"],
        ["State List (~66 subjects)", "State Legislature — exclusive power", "Police, public health, agriculture, local government"],
        ["Concurrent List (~47 subjects)", "Both — Union law prevails on conflict (Art. 254)", "Education, forests, marriage & divorce, criminal law"],
      ]} />
      <Callout type="exam" label="Exam focus">
        <b>Residuary powers</b> — the power to legislate on any subject not listed in any of the three
        lists — rest with <b>Parliament (Art. 248)</b>, not the States. This is a Canadian-style design,
        opposite to the US model where residuary power sits with the states.
      </Callout>

      {/* 7. Administrative relations */}
      <SectionHeading num="07" title="Centre–State Administrative Relations" />
      <Accordion chip="Art. 263" title="Inter-State Council">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Established by Presidential Order in 1990, on the recommendation of the Sarkaria Commission</li>
          <li>Chaired by the Prime Minister; members include all State Chief Ministers</li>
          <li>Discusses disputes and matters of common interest between the Centre and States — a
            recommendatory, not permanently sitting, body</li>
        </ul>
      </Accordion>
      <Accordion chip="Zonal Councils" title="Zonal Councils — Statutory, Not Constitutional">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Created under the <b>States Reorganisation Act, 1956</b> — a statutory body, with no
            constitutional backing</li>
          <li>Five zones: Northern, Central, Eastern, Western, Southern</li>
          <li>The Union Home Minister is the common Chairman of all five Zonal Councils</li>
          <li>The North Eastern states are covered separately by the North Eastern Council, under a
            different 1971 Act</li>
        </ul>
      </Accordion>
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        <b>All India Services</b> (IAS, IPS, IFoS) are common to both the Union and the States (Art. 312) —
        another structural thread binding Centre and State administration together.
      </p>

      {/* 8. President's Rule */}
      <SectionHeading num="08" title="President's Rule — Article 356" />
      <Accordion chip="Art. 356" title="Imposition & Duration" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Imposed when the President is satisfied that a State's government cannot be carried on in
            accordance with the Constitution — usually based on the Governor's report</li>
          <li>Must be approved by <b>both Houses of Parliament within 2 months</b>, by simple majority</li>
          <li>Initially valid for <b>6 months</b>; can be extended every 6 months up to a maximum of
            <b> 3 years</b></li>
          <li>Extension beyond 1 year needs either a National Emergency in operation, or an Election
            Commission certificate that elections can't be held — a safeguard added by the 44th Amendment</li>
        </ul>
      </Accordion>
      <Callout type="mnemonic" label="S.R. Bommai v. Union of India (1994)">
        This landmark case held that a President's Rule proclamation is subject to <b>judicial review</b>,
        and that a <b>floor test in the Assembly</b> — not the Governor's personal assessment — is the
        correct way to test whether a government has lost its majority.
      </Callout>

      {/* 9. Quick revision */}
      <SectionHeading num="09" title="Quick Revision — Local Bodies at a Glance" />
      <DataTable headers={["Feature", "Panchayats", "Municipalities"]} rows={[
        ["Amendment", "73rd (1992)", "74th (1992)"],
        ["Schedule added", "Eleventh (29 subjects)", "Twelfth (18 subjects)"],
        ["Base unit", "Gram Sabha", "Ward Committee (pop. 3 lakh+)"],
        ["Women's reservation", "≥1/3 of seats", "≥1/3 of seats"],
        ["Term", "5 years", "5 years"],
        ["Election body", "State Election Commission", "State Election Commission"],
        ["Finance review body", "State Finance Commission", "State Finance Commission"],
      ]} />

      {/* 10. Practice */}
      <SectionHeading num="10" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="The 73rd Constitutional Amendment Act deals with:"
        options={["Municipalities", "Panchayati Raj Institutions", "The GST Council", "The Finance Commission"]}
        correctIndex={1} explanation="The 73rd Amendment (1992) established Panchayati Raj — rural local government." />
      <MCQItem n={2} q="How many subjects are listed in the Eleventh Schedule?"
        options={["18", "22", "29", "47"]}
        correctIndex={2} explanation="29 subjects, added by the 73rd Amendment and linked to Panchayats." />
      <MCQItem n={3} q="What is the minimum proportion of seats reserved for women in Panchayats?"
        options={["1/4", "1/3", "1/2", "2/3"]}
        correctIndex={1} explanation="Not less than 1/3 of total seats, under Article 243D." />
      <MCQItem n={4} q="A Ward Committee under Article 243S is mandatory for municipalities with a population of at least:"
        options={["1 lakh", "2 lakh", "3 lakh", "5 lakh"]}
        correctIndex={2} explanation="3 lakh or more." />
      <MCQItem n={5} q="Residuary powers of legislation in India rest with:"
        options={["The States", "Parliament", "The Supreme Court", "The Inter-State Council"]}
        correctIndex={1} explanation="Parliament, under Article 248 — a Canadian-style design." />
      <MCQItem n={6} q="Zonal Councils in India were created under which instrument?"
        options={["Article 263 of the Constitution", "States Reorganisation Act, 1956", "73rd Constitutional Amendment", "Inter-State Council Order, 1990"]}
        correctIndex={1} explanation="States Reorganisation Act, 1956 — Zonal Councils are statutory, not constitutional, bodies." />
      <MCQItem n={7} q="A President's Rule proclamation must be approved by Parliament within how many months?"
        options={["1 month", "2 months", "6 months", "1 year"]}
        correctIndex={1} explanation="Within 2 months, by a simple majority of both Houses." />
      <MCQItem n={8} q="The S.R. Bommai case (1994) is most associated with which principle?"
        options={["Basic Structure Doctrine", "Judicial review of President's Rule & the floor test", "Right to Privacy", "Reservation in promotions"]}
        correctIndex={1} explanation="It held Article 356 proclamations are judicially reviewable and that a floor test decides majority." />
      <MCQItem n={9} q="Which body conducts elections to Panchayats and Municipalities?"
        options={["Election Commission of India", "State Election Commission", "State Finance Commission", "District Planning Committee"]}
        correctIndex={1} explanation="The State Election Commission — a separate body from the ECI." />
      <MCQItem n={10} q="The PESA Act, 1996 extends Panchayati Raj provisions to:"
        options={["Union Territories", "Fifth Schedule (Scheduled) Areas", "Metropolitan areas only", "Cantonment Boards"]}
        correctIndex={1} explanation="Fifth Schedule Areas, with special Gram Sabha safeguards." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Indian Polity & Constitution. Article numbers, subject counts, and case names are compiled from the Constitution of India and standard polity references; List-subject counts have shifted slightly since 1950 due to later amendments — cross-check current figures against a Bare Act if you need exact numbers." />
    </div>
  );
}
