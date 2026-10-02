import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function ConstitutionalStatutoryBodies() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Indian Polity & Constitution"
        priority="MED"
        title="Constitutional & Statutory Bodies"
        dek="The bodies that run elections, audit the government, recommend how tax money is split, and act as watchdogs — sorted into the one distinction SSC tests again and again: does this body come from the Constitution, an Act of Parliament, or neither?"
        stats={[
          { value: "1–2", label: "Qs typically drawn from this topic across Tier-I + Tier-II" },
          { value: "Art. 324", label: "Establishes the Election Commission of India" },
          { value: "Art. 148", label: "Establishes the CAG — the 'guardian of the public purse'" },
          { value: "0", label: "Constitutional Articles that establish NITI Aayog — it has none" },
        ]}
      />

      {/* 1. The classification */}
      <SectionHeading num="01" title="The Three-Way Classification" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        This single distinction is the most-tested angle on this entire topic — memorise the category before the details.
      </p>
      <DataTable headers={["Category", "Origin", "Examples"]} rows={[
        ["Constitutional body", "Created directly by an Article of the Constitution", "Election Commission, UPSC, CAG, Finance Commission, GST Council, National Commissions for SC/ST/BC"],
        ["Statutory body", "Created by an ordinary Act of Parliament (or State legislature)", "NHRC, CIC, CVC, Lokpal, NCW, SEBI, RBI, CCI, NCPCR"],
        ["Non-statutory / executive body", "Created only by a government resolution — no law or Article behind it", "NITI Aayog, CBI (operates under the older DSPE Act, 1946, but is not itself a statutory body)"],
      ]} />
      <Callout type="trap" label="Common trap">
        NITI Aayog is very often assumed to be a constitutional or statutory body because of how prominent it
        is — it is <b>neither</b>. It exists purely on a Cabinet resolution, exactly like the Planning
        Commission it replaced.
      </Callout>

      {/* 2. ECI */}
      <SectionHeading num="02" title="Election Commission of India — Art. 324" />
      <Accordion chip="Art. 324" title="Structure, Tenure & Removal" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Conducts elections to Parliament, State Legislatures, and the offices of President & Vice-President</li>
          <li>Originally a single-member body; made a <b>multi-member body in 1989</b> — now one Chief Election
            Commissioner (CEC) + two Election Commissioners</li>
          <li>Term: 6 years, or up to age 65, whichever is earlier</li>
          <li><b>Appointment (since the CEC and Other ECs Act, 2023)</b> — by a selection committee of the
            Prime Minister, the Leader of Opposition in Lok Sabha, and a Union Cabinet Minister nominated by the PM</li>
        </ul>
      </Accordion>
      <Callout type="exam" label="Exam focus — the removal asymmetry">
        The <b>CEC</b> can be removed only like a Supreme Court judge (Parliamentary address with special
        majority) — very high protection. An <b>ordinary Election Commissioner</b>, however, can be removed by
        the President <i>on the recommendation of the CEC</i> — a much easier route. This asymmetry is a
        favourite SSC question.
      </Callout>

      {/* 3. UPSC */}
      <SectionHeading num="03" title="UPSC & State Public Service Commissions — Art. 315–323" />
      <DataTable headers={["", "UPSC", "State PSC"]} rows={[
        ["Governing Article", "Art. 315", "Art. 315 (a Joint PSC for 2+ States is possible under Art. 315(2))"],
        ["Appointed by", "President", "Governor of the State"],
        ["Term", "6 years or age 65, whichever earlier", "6 years or age 62, whichever earlier"],
        ["Removal (Art. 317)", "By President, but only after a Supreme Court inquiry confirms misbehaviour", "Same process, via the President"],
      ]} />

      {/* 4. CAG */}
      <SectionHeading num="04" title="Comptroller & Auditor General (CAG) — Art. 148–151" />
      <Accordion chip="Art. 148" title="The 'Guardian of the Public Purse'">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Audits the accounts of the Union and of every State</li>
          <li>Appointed by the President; term 6 years or age 65, whichever is earlier</li>
          <li><b>Removal</b> — in the <i>same manner and on the same grounds as a Supreme Court judge</i>
            (Parliamentary address, special majority) — the highest level of protection given to any
            constitutional office-holder besides judges</li>
          <li>Reports are submitted to the President/Governor, then laid before Parliament/State Legislature,
            and examined by the <b>Public Accounts Committee (PAC)</b></li>
        </ul>
      </Accordion>

      {/* 5. Finance Commission */}
      <SectionHeading num="05" title="Finance Commission — Art. 280" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        Not a permanent body — constituted by the President <b>every 5 years</b> (or earlier if needed).
        Recommends:
      </p>
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Distribution of the net proceeds of taxes between the Union and the States</li>
        <li>Principles governing grants-in-aid to the States out of the Consolidated Fund of India</li>
        <li>Measures to augment a State's Consolidated Fund to supplement Panchayat & Municipality resources</li>
        <li>Any other matter referred to it by the President</li>
      </ul>

      {/* 6. AG */}
      <SectionHeading num="06" title="Attorney General & Advocate General" />
      <DataTable headers={["", "Attorney General (Art. 76)", "Advocate General (Art. 165)"]} rows={[
        ["Level", "Union — highest law officer of India", "State — highest law officer of a State"],
        ["Appointed by", "President", "Governor"],
        ["Qualification", "Must be qualified to be a Supreme Court judge", "Must be qualified to be a High Court judge"],
        ["Parliament/House rights", "Can speak in either House of Parliament, but cannot vote", "Can speak in the State Legislature, but cannot vote"],
      ]} />
      <Callout type="trap" label="Common trap">
        The Attorney General is <b>not</b> a member of the Council of Ministers by default and does not have
        an automatic vote anywhere — a frequently tested distinction from a regular Law Minister.
      </Callout>

      {/* 7. National Commissions + GST Council */}
      <SectionHeading num="07" title="National Commissions with Constitutional Status" />
      <DataTable headers={["Body", "Article", "Note"]} rows={[
        ["National Commission for SC", "Art. 338", "Split from a combined SC+ST commission by the 89th Amendment, 2003"],
        ["National Commission for ST", "Art. 338A", "Created as a separate commission by the same 89th Amendment, 2003"],
        ["National Commission for Backward Classes", "Art. 338B", "Given constitutional status by the 102nd Amendment, 2018 — was purely statutory before that"],
        ["GST Council", "Art. 279A", "Inserted by the 101st Amendment, 2016; chaired by the Union Finance Minister"],
      ]} />
      <Callout type="exam" label="Exam focus">
        In the GST Council, the <b>Centre's vote carries a weight of 1/3</b> of the total votes cast, while
        <b> all States combined carry 2/3</b> — a decision needs at least a 3/4 majority of weighted votes cast.
      </Callout>

      {/* 8. NITI Aayog */}
      <SectionHeading num="08" title="NITI Aayog vs Planning Commission" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Both are non-constitutional, non-statutory bodies — created purely by a Cabinet resolution, not by any
        law or Article.
      </p>
      <DataTable headers={["", "Planning Commission", "NITI Aayog"]} rows={[
        ["Established", "1950, by Cabinet resolution", "1 January 2015, by Cabinet resolution — replaced the Planning Commission"],
        ["Full form", "—", "National Institution for Transforming India"],
        ["Chairperson", "Prime Minister", "Prime Minister"],
        ["Power over funds", "Could allocate Five-Year Plan funds to States", "Has no fund-allocating power — purely a policy think tank"],
      ]} />

      {/* 9. Statutory bodies */}
      <SectionHeading num="09" title="Key Statutory Bodies — Quick Reference" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Created by an Act of Parliament, not mentioned anywhere in the Constitution itself.
      </p>
      <DataTable headers={["Body", "Governing Act"]} rows={[
        ["National Human Rights Commission (NHRC)", "Protection of Human Rights Act, 1993"],
        ["Central Information Commission (CIC)", "Right to Information Act, 2005"],
        ["Central Vigilance Commission (CVC)", "CVC Act, 2003 (statutory status; existed as an executive body from 1964)"],
        ["Lokpal (Centre) & Lokayuktas (States)", "Lokpal and Lokayuktas Act, 2013"],
        ["National Commission for Women (NCW)", "National Commission for Women Act, 1990"],
        ["National Commission for Protection of Child Rights", "Commissions for Protection of Child Rights Act, 2005"],
        ["Securities and Exchange Board of India (SEBI)", "SEBI Act, 1992"],
        ["Reserve Bank of India (RBI)", "RBI Act, 1934"],
        ["Competition Commission of India (CCI)", "Competition Act, 2002"],
      ]} />

      {/* 10. Removal comparison */}
      <SectionHeading num="10" title="Quick Revision — Removal Procedure Comparison" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        The strength of a constitutional office is often measured by how hard it is to remove its holder.
      </p>
      <DataTable headers={["Office", "Removal process"]} rows={[
        ["CJI / SC & HC Judges", "Parliamentary address, special majority — 'proved misbehaviour or incapacity'"],
        ["CAG", "Same process as a Supreme Court judge — highest protection outside the judiciary"],
        ["Chief Election Commissioner", "Same process as a Supreme Court judge"],
        ["Other Election Commissioners", "By the President, on the CEC's recommendation — much easier"],
        ["UPSC Chairman / Members", "By the President, only after a Supreme Court inquiry confirms the charge"],
      ]} />

      {/* 11. Practice */}
      <SectionHeading num="11" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="Which of these is NOT a constitutional body?"
        options={["Election Commission of India", "NITI Aayog", "Finance Commission", "Union Public Service Commission"]}
        correctIndex={1} explanation="NITI Aayog exists only on a Cabinet resolution — it is neither constitutional nor statutory." />
      <MCQItem n={2} q="An ordinary Election Commissioner (not the CEC) can be removed by:"
        options={["The Prime Minister directly", "The President, on the CEC's recommendation", "A Supreme Court inquiry only", "The Election Commission itself by internal vote"]}
        correctIndex={1} explanation="By the President, on the recommendation of the Chief Election Commissioner — far easier than removing the CEC." />
      <MCQItem n={3} q="Under Article 148, the CAG can be removed:"
        options={["By a simple Cabinet decision", "In the same manner as a Supreme Court judge", "By the Finance Commission", "By the Attorney General's recommendation"]}
        correctIndex={1} explanation="Same manner and grounds as a Supreme Court judge." />
      <MCQItem n={4} q="The Finance Commission is constituted by the President under which Article, and how often?"
        options={["Art. 275, every 3 years", "Art. 280, every 5 years", "Art. 282, every 6 years", "Art. 300, every 4 years"]}
        correctIndex={1} explanation="Article 280, every 5 years (or earlier if the President considers it necessary)." />
      <MCQItem n={5} q="The Attorney General of India is appointed by whom, and must be qualified to hold which office?"
        options={["PM; qualified to be a High Court judge", "President; qualified to be a Supreme Court judge", "CJI; qualified to be a Solicitor General", "President; qualified to be an Advocate General"]}
        correctIndex={1} explanation="Appointed by the President; must be qualified to be appointed a Supreme Court judge." />
      <MCQItem n={6} q="The National Commission for Scheduled Tribes was carved out as a separate body under Article 338A by which amendment?"
        options={["65th Amendment", "73rd Amendment", "89th Amendment", "102nd Amendment"]}
        correctIndex={2} explanation="89th Amendment Act, 2003 — split the earlier combined SC+ST commission into two." />
      <MCQItem n={7} q="The GST Council was inserted into the Constitution under Article 279A by which amendment?"
        options={["99th Amendment", "100th Amendment", "101st Amendment", "103rd Amendment"]}
        correctIndex={2} explanation="101st Constitutional Amendment Act, 2016." />
      <MCQItem n={8} q="Which of these is a statutory body, not a constitutional one?"
        options={["Election Commission of India", "Finance Commission", "National Human Rights Commission", "Comptroller & Auditor General"]}
        correctIndex={2} explanation="NHRC is created by the Protection of Human Rights Act, 1993 — a statutory, not constitutional, body." />
      <MCQItem n={9} q="NITI Aayog replaced which earlier body, and in what year?"
        options={["Finance Commission, 2014", "Planning Commission, 2015", "National Development Council, 2016", "UPSC, 2017"]}
        correctIndex={1} explanation="The Planning Commission, replaced on 1 January 2015." />
      <MCQItem n={10} q="A Joint State Public Service Commission for two or more States can be created under:"
        options={["Art. 312", "Art. 315(2)", "Art. 320", "Art. 323"]}
        correctIndex={1} explanation="Article 315(2), by an Act of Parliament on the request of the concerned State legislatures." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Indian Polity & Constitution. Article numbers, amendment years, and appointment procedures are compiled from the Constitution of India and standard polity references; the 2023 change to the CEC/EC appointment process reflects the law as enacted — cross-check for any further legislative or judicial developments before your exam." />
    </div>
  );
}
