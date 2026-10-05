import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function ParliamentExecutiveJudiciary() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Indian Polity & Constitution"
        priority="MED"
        title="Parliament, Executive & Judiciary"
        dek="How India's three organs of government are structured and staffed — Lok Sabha and Rajya Sabha, the President's ordinance and pardoning powers, the Prime Minister's Council of Ministers, and how judges reach the Supreme Court and High Courts."
        stats={[
          { value: "1–2", label: "Qs typically drawn from this topic across Tier-I + Tier-II" },
          { value: "Art. 74–78", label: "President's Council of Ministers & their advice" },
          { value: "Art. 124", label: "Establishes the Supreme Court of India" },
          { value: "65 / 62", label: "Retirement age — Supreme Court / High Court judges" },
        ]}
      />

      {/* 1. Structure of Parliament */}
      <SectionHeading num="01" title="Structure of Parliament — Art. 79" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Parliament consists of the <b>President + Lok Sabha + Rajya Sabha</b> together — the President is a
        formal, functional part of Parliament even though not a member of either House.
      </p>
      <DataTable headers={["", "Lok Sabha", "Rajya Sabha"]} rows={[
        ["Nickname", "House of the People", "Council of States"],
        ["Governing Article", "Art. 81", "Art. 80"],
        ["Max. strength", "552 (currently 543 elected, no nominated seats)", "250 (238 elected + 12 nominated by President)"],
        ["Nature", "Lower House, directly elected", "Upper House, permanent body — never dissolved"],
        ["Term", "5 years (Art. 83); can dissolve earlier", "Members serve 6 years; 1/3 retire every 2 years"],
        ["Presiding Officer", "Speaker (elected by members)", "Vice-President of India (ex officio Chairman)"],
        ["Money Bills", "Can originate here only", "Can only recommend changes, within 14 days"],
      ]} />
      <Callout type="exam" label="Exam focus">
        The 12 Rajya Sabha nominated members are chosen by the <b>President</b> for distinction in literature,
        science, art or social service — a frequently confused pair with the Anglo-Indian nomination, which was
        abolished by the <b>104th Amendment Act, 2019</b>.
      </Callout>

      {/* 2. Lok Sabha */}
      <SectionHeading num="02" title="Lok Sabha in Detail" />
      <Accordion chip="Art. 81, 83, 93" title="Composition, Term & Speaker" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Composition</b> — directly elected by adult suffrage from territorial constituencies</li>
          <li><b>Qualification (Art. 84)</b> — Indian citizen, minimum age 25 years, must be an elector</li>
          <li><b>Term</b> — 5 years from first sitting; can be extended by 1 year at a time only during a
            National Emergency (Art. 352), and not beyond 6 months after the Emergency ends</li>
          <li><b>Speaker (Art. 93)</b> — elected by Lok Sabha members from among themselves; decides whether a
            Bill is a Money Bill (Art. 110); has a casting vote in case of a tie</li>
          <li><b>Anti-Defection Law</b> — added by the 52nd Amendment, 1985 (10th Schedule); Speaker decides
            disqualification petitions</li>
        </ul>
      </Accordion>

      {/* 3. Rajya Sabha */}
      <SectionHeading num="03" title="Rajya Sabha in Detail" />
      <Accordion chip="Art. 80, 89, 249, 312" title="Composition & Special Federal Powers">
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Composition</b> — 238 members represent States/UTs via MLAs (proportional representation,
            single transferable vote) + 12 nominated by the President</li>
          <li><b>Chairman</b> — Vice-President of India, ex officio (Art. 89); a Deputy Chairman is elected
            from among RS members</li>
          <li><b>Art. 249</b> — with a Rajya Sabha resolution passed by a 2/3 majority, Parliament can legislate
            on a State List subject "in the national interest," for up to one year at a time</li>
          <li><b>Art. 312</b> — Rajya Sabha can, by a similar resolution, authorise Parliament to create new
            All India Services</li>
        </ul>
      </Accordion>
      <Callout type="mnemonic" label="Memory aid">
        Rajya Sabha is the <b>"permanent house"</b> — it is never dissolved, unlike Lok Sabha, which makes it
        structurally similar to the US Senate even though its powers are narrower than the Lok Sabha's.
      </Callout>

      {/* 4. Sessions, Bills, Motions */}
      <SectionHeading num="04" title="Sessions, Bills & Parliamentary Devices" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Sessions are summoned by the President (Art. 85); the gap between two sessions cannot exceed 6 months.
        Three sessions are conventional: Budget (Feb–May), Monsoon (Jul–Sep), Winter (Nov–Dec).
      </p>
      <DataTable headers={["Bill type", "Key rule"]} rows={[
        ["Ordinary Bill (Art. 111)", "Can originate in either House; simple majority in both; President may assent, withhold, or return once (not for Money Bills)"],
        ["Money Bill (Art. 110)", "Covers taxation, borrowing, Consolidated Fund matters; can originate only in Lok Sabha; Speaker's certification is final"],
        ["Financial Bill", "Contains some financial provisions but is broader than a pure Money Bill; different procedural rules apply"],
        ["Constitution Amendment Bill (Art. 368)", "See the dedicated Amendment Procedure covered under Constitutional Framework"],
      ]} />
      <DataTable headers={["Device", "Purpose"]} rows={[
        ["No-Confidence Motion", "Moved only in Lok Sabha to test whether the Council of Ministers enjoys majority support"],
        ["Adjournment Motion", "Draws attention to an urgent matter of public importance; treated as a censure of the government"],
        ["Zero Hour", "An Indian parliamentary innovation (not mentioned in the Rules) — starts right after Question Hour, for raising urgent issues"],
        ["Question Hour", "First hour of a sitting, devoted to questions to ministers"],
      ]} />
      <Callout type="trap" label="Common trap">
        "Zero Hour" is often assumed to be a formally defined procedural rule — it is actually a convention that
        evolved in Indian parliamentary practice and has no mention in the Rules of Procedure.
      </Callout>

      {/* 5. President */}
      <SectionHeading num="05" title="The President — Art. 52–62" />
      <Accordion chip="Art. 54–58" title="Election & Qualifications" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Electoral College (Art. 54)</b> — elected MPs of both Houses + elected MLAs of States and of
            Delhi &amp; Puducherry. <i>Nominated</i> members do not vote.</li>
          <li><b>Method (Art. 55)</b> — proportional representation by means of a single transferable vote,
            through secret ballot</li>
          <li><b>Term (Art. 56)</b> — 5 years; eligible for re-election any number of times (Art. 57)</li>
          <li><b>Qualifications (Art. 58)</b> — citizen of India, minimum 35 years, qualified to be a Lok Sabha
            member, must not hold any office of profit</li>
          <li><b>Impeachment (Art. 61)</b> — only ground is "violation of the Constitution"; charge must be
            preferred by either House with 14 days' notice, and the resolution must pass by a 2/3 majority of
            the <i>total membership</i> of that House</li>
        </ul>
      </Accordion>

      <Accordion chip="Art. 72 vs Art. 161" title="Pardoning Power — President vs Governor">
        <DataTable headers={["", "President (Art. 72)", "Governor (Art. 161)"]} rows={[
          ["Covers death sentence", "Yes", "No — cannot pardon a death sentence"],
          ["Covers court-martial (military) sentences", "Yes", "No — has no power over court-martial cases"],
          ["Covers Union law offences", "Yes", "No — only offences against State law"],
        ]} />
      </Accordion>

      <Accordion chip="Art. 123" title="Ordinance-Making Power">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Can be issued only when <b>Parliament is not in session</b></li>
          <li>Has the same force and effect as an Act of Parliament</li>
          <li>Must be laid before Parliament when it reassembles</li>
          <li>Ceases to operate <b>6 weeks after Parliament reassembles</b>, unless approved by both Houses
            before that</li>
        </ul>
      </Accordion>

      <Callout type="exam" label="Exam focus">
        Under Article 74, the Council of Ministers' advice binds the President — the President may ask for
        reconsideration <b>once</b>, but must act on the advice tendered after such reconsideration.
      </Callout>

      {/* 6. VP, PM, CoM */}
      <SectionHeading num="06" title="Vice-President, PM & Council of Ministers" />
      <Accordion chip="Art. 63–71" title="Vice-President">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Ex officio Chairman of the Rajya Sabha</li>
          <li>Elected by an electoral college of <b>members of both Houses of Parliament only</b> (State MLAs
            do not participate — unlike the President's election)</li>
          <li>Term: 5 years; qualification: citizen, minimum 35 years, qualified to be a Rajya Sabha member</li>
        </ul>
      </Accordion>
      <Accordion chip="Art. 74–75" title="Prime Minister & Council of Ministers">
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Art. 75</b> — PM appointed by the President; other ministers appointed by the President on the
            PM's advice</li>
          <li>Total Council of Ministers size capped at <b>15% of Lok Sabha strength</b> (91st Amendment, 2003)</li>
          <li>A minister who is not already an MP must become one within <b>6 months</b> of appointment</li>
          <li><b>Art. 75(3)</b> — the Council of Ministers is collectively responsible to the Lok Sabha</li>
          <li>Three-tier structure: Cabinet Ministers → Ministers of State → Deputy Ministers</li>
        </ul>
      </Accordion>

      {/* 7. Supreme Court */}
      <SectionHeading num="07" title="The Judiciary — Supreme Court, Art. 124–147" />
      <Accordion chip="Art. 124" title="Composition, Appointment & Removal" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Qualification</b> — a High Court judge for 5 years, OR an advocate of a High Court for 10 years,
            OR a distinguished jurist in the President's opinion</li>
          <li><b>Appointment</b> — by the President, following the <b>Collegium system</b> (CJI + 4 senior-most
            judges), evolved through the Judges Cases (1981, 1993, 1998) rather than being explicit constitutional text</li>
          <li><b>Retirement age</b> — 65 years</li>
          <li><b>Removal</b> — only for "proved misbehaviour or incapacity"; requires an address by each House
            passed by a 2/3 majority of members present &amp; voting <i>and</i> a majority of the total
            membership of that House, then presented to the President</li>
        </ul>
      </Accordion>
      <Accordion chip="Art. 32, 131–136, 143" title="Jurisdiction of the Supreme Court">
        <DataTable headers={["Type", "Basis"]} rows={[
          ["Original", "Art. 131 — disputes between the Centre and States, or between States"],
          ["Writ", "Art. 32 — for enforcement of Fundamental Rights"],
          ["Appellate", "Art. 132–134A — civil, criminal, and constitutional appeals from High Courts"],
          ["Advisory", "Art. 143 — President may refer a question of law/fact for the SC's opinion (not binding)"],
          ["Court of Record", "Art. 129 — its judgments are of evidentiary value and it can punish for contempt"],
        ]} />
      </Accordion>

      {/* 8. High Courts */}
      <SectionHeading num="08" title="High Courts & Subordinate Courts" />
      <Accordion chip="Art. 214–231" title="High Courts">
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Art. 214</b> — a High Court for each State; <b>Art. 231</b> allows a common High Court for two
            or more States</li>
          <li><b>Qualification</b> — 10 years as a judicial officer, OR 10 years as an advocate of a High Court</li>
          <li><b>Appointment</b> — by the President, in consultation with the CJI, the Governor of the State, and
            (for a sitting judge's transfer) the Chief Justice of the High Court concerned</li>
          <li><b>Retirement age (Art. 217)</b> — 62 years</li>
          <li><b>Writ jurisdiction (Art. 226)</b> — wider than the Supreme Court's Art. 32; covers Fundamental
            Rights <i>and</i> "any other purpose"</li>
        </ul>
      </Accordion>
      <Accordion chip="Art. 233–237" title="Subordinate Courts">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>District Judges are appointed by the <b>Governor</b>, in consultation with the High Court of
            that State</li>
          <li>High Court exercises superintendence over all courts subordinate to it within the State</li>
        </ul>
      </Accordion>

      {/* 9. Independence */}
      <SectionHeading num="09" title="Independence of the Judiciary" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        Article 50 (a DPSP) directs the State to separate the judiciary from the executive. This is reinforced by:
      </p>
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Security of tenure — removable only by the difficult impeachment-style process</li>
        <li>Service conditions cannot be altered to a judge's disadvantage after appointment</li>
        <li>Judges' salaries are charged on the Consolidated Fund — not subject to a yearly vote</li>
        <li>A judge's conduct cannot be discussed in the legislature except during a removal motion</li>
        <li>Supreme Court judges cannot practise in <i>any</i> court in India after retirement; High Court
          judges cannot practise in the same High Court, but may appear before the Supreme Court or other High Courts</li>
      </ul>
      <Callout type="trap" label="Common trap">
        Restriction on post-retirement practice is often mis-stated as applying to all judges equally — it is
        stricter for Supreme Court judges (barred everywhere in India) than for High Court judges (barred only
        in the same High Court).
      </Callout>

      {/* 10. Quick revision */}
      <SectionHeading num="10" title="Quick Revision" />
      <DataTable headers={["Post", "Appointed by", "Term / Age limit"]} rows={[
        ["President", "Electoral college (MPs + MLAs)", "5 years"],
        ["Vice-President", "Electoral college (MPs only)", "5 years"],
        ["Prime Minister", "President", "No fixed term — holds office during LS's pleasure"],
        ["Supreme Court Judge", "President via Collegium", "Retires at 65"],
        ["High Court Judge", "President via Collegium", "Retires at 62"],
        ["Lok Sabha Speaker", "Elected by LS members", "Term of the House (5 years)"],
        ["Rajya Sabha Chairman", "Ex officio — the Vice-President", "5 years (as VP)"],
      ]} />

      {/* 11. Practice */}
      <SectionHeading num="11" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="A Money Bill, as defined under Article 110, can originate only in which House?"
        options={["Rajya Sabha", "Lok Sabha", "Either House", "Neither — it originates with the President"]}
        correctIndex={1} explanation="Lok Sabha — the Rajya Sabha can only recommend changes, within 14 days." />
      <MCQItem n={2} q="Who is the ex officio Chairman of the Rajya Sabha?"
        options={["The President", "The Speaker of Lok Sabha", "The Vice-President of India", "The Chief Justice of India"]}
        correctIndex={2} explanation="The Vice-President of India, under Article 89." />
      <MCQItem n={3} q="The Governor's pardoning power under Article 161 does NOT extend to which of these?"
        options={["Offences against State law", "Death sentence cases", "Fines imposed by State courts", "Suspension of a sentence"]}
        correctIndex={1} explanation="The Governor cannot pardon a death sentence — only the President can, under Article 72." />
      <MCQItem n={4} q="An ordinance issued by the President under Article 123 ceases to operate how long after Parliament reassembles, if not approved?"
        options={["2 weeks", "6 weeks", "3 months", "6 months"]}
        correctIndex={1} explanation="6 weeks after Parliament reassembles." />
      <MCQItem n={5} q="What is the minimum age to be eligible for election as President of India?"
        options={["25 years", "30 years", "35 years", "40 years"]}
        correctIndex={2} explanation="35 years, under Article 58." />
      <MCQItem n={6} q="The retirement age of a Supreme Court judge is:"
        options={["60 years", "62 years", "65 years", "68 years"]}
        correctIndex={2} explanation="65 years, versus 62 years for a High Court judge." />
      <MCQItem n={7} q="Under the 91st Amendment Act, 2003, the total size of the Council of Ministers (including the PM) is capped at what share of Lok Sabha strength?"
        options={["10%", "15%", "20%", "25%"]}
        correctIndex={1} explanation="15% of the total strength of the Lok Sabha." />
      <MCQItem n={8} q="Which Article empowers the Rajya Sabha to authorise Parliament to legislate on a State List subject in the national interest?"
        options={["Article 249", "Article 312", "Article 356", "Article 368"]}
        correctIndex={0} explanation="Article 249, requiring a Rajya Sabha resolution passed by a 2/3 majority." />
      <MCQItem n={9} q="Who appoints the 12 nominated members of the Rajya Sabha?"
        options={["The Prime Minister", "The Vice-President", "The President", "The Chief Election Commissioner"]}
        correctIndex={2} explanation="The President, for distinction in literature, science, art or social service." />
      <MCQItem n={10} q="A High Court's writ jurisdiction under Article 226 is wider than the Supreme Court's under Article 32 because it also covers:"
        options={["Only Fundamental Rights", "Fundamental Rights and \"any other purpose\"", "Only State-list subjects", "Only criminal appeals"]}
        correctIndex={1} explanation='Article 226 explicitly extends to Fundamental Rights and "any other purpose," making it broader in scope.' />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Indian Polity & Constitution. Article numbers, ages, and appointment procedures are compiled from the Constitution of India and standard polity references; cross-check against a current Bare Act for the latest amendment status." />
    </div>
  );
}
