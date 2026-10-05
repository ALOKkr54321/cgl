import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function ConstitutionalFramework() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Indian Polity & Constitution"
        priority="HIGH"
        title="Constitutional Framework"
        dek="The single highest-yield topic inside Indian Polity for SSC CGL — the Preamble, Fundamental Rights, Directive Principles, Fundamental Duties, and the amendment procedure that ties them together."
        stats={[
          { value: "2–4", label: "Qs typically drawn from this exact topic across Tier-I + Tier-II" },
          { value: "Art. 12–35", label: "Fundamental Rights — the most-tested article range in GA" },
          { value: "6", label: "Fundamental Rights currently in force (Right to Property removed 1978)" },
          { value: "Art. 368", label: "Governs how the Constitution itself can be amended" },
        ]}
      />

      <SectionHeading num="01" title="Making of the Constitution" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>Nine broad facts SSC has drawn on repeatedly — treat this as a static-GK checklist.</p>
      <DataTable headers={["Fact", "Detail"]} rows={[
        ["Constituent Assembly formed", "1946, under the Cabinet Mission Plan"],
        ["President of the Constituent Assembly", "Dr. Rajendra Prasad"],
        ["Chairman, Drafting Committee", "Dr. B. R. Ambedkar"],
        ["Constitution adopted", "26 November 1949 — Constitution Day (Samvidhan Diwas)"],
        ["Constitution came into force", "26 January 1950 — Republic Day"],
        ["Original size", "395 Articles, 22 Parts, 8 Schedules"],
        ["Current size", "~448 Articles, 25 Parts, 12 Schedules"],
        ["Distinction", "Longest written constitution of any sovereign country"],
      ]} />
      <Callout type="exam" label="Exam focus">
        SSC has asked about the Chairman of the Drafting Committee and "adoption vs. enforcement" dates as two
        separate questions in the same paper — don't blur 26 Nov 1949 with 26 Jan 1950.
      </Callout>

      <SectionHeading num="02" title="The Preamble" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>Often called the Constitution's "identity card."</p>
      <div className="rounded-xl p-5 my-3 font-display text-[15px] leading-relaxed" style={{ background: "var(--navy)", color: "var(--navy-text)" }}>
        WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a{" "}
        <span style={{ color: "var(--gold)" }}>SOVEREIGN</span>,{" "}
        <span style={{ color: "var(--gold)", textDecoration: "underline dotted" }}>SOCIALIST</span>,{" "}
        <span style={{ color: "var(--gold)", textDecoration: "underline dotted" }}>SECULAR</span>,{" "}
        <span style={{ color: "var(--gold)" }}>DEMOCRATIC REPUBLIC</span> and to secure to all its citizens:
        <br /><br />
        <span style={{ color: "var(--gold)" }}>JUSTICE</span>, social, economic and political;<br />
        <span style={{ color: "var(--gold)" }}>LIBERTY</span> of thought, expression, belief, faith and worship;<br />
        <span style={{ color: "var(--gold)" }}>EQUALITY</span> of status and of opportunity; and to promote among
        them all <span style={{ color: "var(--gold)" }}>FRATERNITY</span> assuring the dignity of the individual
        and the unity and <span style={{ color: "var(--gold)", textDecoration: "underline dotted" }}>integrity</span> of the Nation.
      </div>
      <p className="text-[13px] mb-2" style={{ color: "var(--text-muted)" }}>
        <span className="font-semibold" style={{ color: "var(--exam-text)" }}>Underlined gold words</span> were inserted by the
        <b> 42nd Amendment Act, 1976</b> — the only amendment ever made to the Preamble.
      </p>
      <DataTable headers={["Case", "Year", "Holding"]} rows={[
        ["Berubari Union case", "1960", "Preamble is not part of the Constitution, not enforceable"],
        ["Kesavananda Bharati", "1973", "Overruled Berubari — Preamble is part of the Constitution"],
        ["LIC of India case", "1995", "Reaffirmed Preamble is part of the Constitution"],
      ]} />
      <Callout type="trap" label="Common trap">
        Only <b>Socialist, Secular</b> and <b>Integrity</b> were added in 1976. Sovereign, Democratic, Republic
        and the four ideals are original 1949 text.
      </Callout>

      <SectionHeading num="03" title="Borrowed Features" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>"Which feature came from which country" is a direct SSC match question.</p>
      <DataTable headers={["Source", "Features borrowed"]} rows={[
        ["GoI Act, 1935", "Federal scheme, Governor's office, judiciary, Public Service Commissions"],
        ["British Constitution", "Parliamentary government, rule of law, single citizenship"],
        ["US Constitution", "Fundamental Rights, judicial review, independence of judiciary"],
        ["Irish Constitution", "DPSP, nomination of Rajya Sabha members"],
        ["Canadian Constitution", "Strong centre, residuary powers with the Centre"],
        ["Weimar (Germany)", "Suspension of Fundamental Rights during Emergency"],
        ["French Constitution", "Liberty, Equality, Fraternity ideals"],
      ]} />

      <SectionHeading num="04" title="Fundamental Rights — Part III, Art. 12–35" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Originally seven rights; <b>Right to Property</b> was removed by the <b>44th Amendment, 1978</b> and
        downgraded to a legal right under <b>Article 300A</b>. Six remain fundamental.
      </p>
      <Callout type="mnemonic" label="Memory aid">
        <b>E–F–E–R–C–C</b>: Equality · Freedom · (against) Exploitation · Religion · Culture & education ·
        Constitutional remedies — the order they appear in Part III.
      </Callout>

      <Accordion chip="Art. 14–18" title="Right to Equality">
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Art. 14</b> — Equality before law & equal protection of laws</li>
          <li><b>Art. 15</b> — Prohibits discrimination on religion, race, caste, sex, place of birth</li>
          <li><b>Art. 16</b> — Equality of opportunity in public employment</li>
          <li><b>Art. 17</b> — Abolition of untouchability</li>
          <li><b>Art. 18</b> — Abolition of titles (except military/academic)</li>
        </ul>
      </Accordion>

      <Accordion chip="Art. 19–22" title="Right to Freedom">
        <p className="mb-2">Art. 19 originally guaranteed seven freedoms; six remain after 1978:</p>
        <ul className="list-disc pl-4 space-y-1.5 mb-3">
          <li>Speech & expression</li>
          <li>Assemble peaceably without arms</li>
          <li>Form associations or unions</li>
          <li>Move freely throughout India</li>
          <li>Reside and settle anywhere in India</li>
          <li>Practise any profession or carry on trade/business</li>
        </ul>
        <p className="mb-1.5"><b>Art. 20</b> — No ex-post-facto law, no double jeopardy, no self-incrimination.</p>
        <p className="mb-1.5"><b>Art. 21</b> — Life & personal liberty; expanded to include Right to Privacy (<i>Puttaswamy</i>, 2017).</p>
        <p className="mb-1.5"><b>Art. 21A</b> — Free & compulsory education, ages 6–14 (86th Amendment, 2002).</p>
        <p><b>Art. 22</b> — Protection against arbitrary arrest & detention.</p>
      </Accordion>

      <Accordion chip="Art. 23–24" title="Right against Exploitation">
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Art. 23</b> — Prohibits human trafficking and forced labour (begar)</li>
          <li><b>Art. 24</b> — Prohibits child labour below 14 in hazardous work</li>
        </ul>
      </Accordion>

      <Accordion chip="Art. 25–28" title="Right to Freedom of Religion">
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Art. 25</b> — Freedom of conscience & practice of religion</li>
          <li><b>Art. 26</b> — Freedom to manage religious affairs</li>
          <li><b>Art. 27</b> — No taxation for promoting a religion</li>
          <li><b>Art. 28</b> — Freedom from religious instruction in certain institutions</li>
        </ul>
      </Accordion>

      <Accordion chip="Art. 29–30" title="Cultural & Educational Rights">
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Art. 29</b> — Protects minorities' distinct language, script or culture</li>
          <li><b>Art. 30</b> — Minorities' right to establish & administer educational institutions</li>
        </ul>
      </Accordion>

      <Accordion chip="Art. 32" title="Right to Constitutional Remedies" defaultOpen>
        <p className="mb-3">
          Called the <b>"heart and soul of the Constitution"</b> by Dr. B. R. Ambedkar. High Courts hold a
          parallel, even wider, power under <b>Article 226</b>.
        </p>
        <DataTable headers={["Writ", "What it does"]} rows={[
          ["Habeas Corpus", "Produce a detained person before the court to test lawfulness of detention"],
          ["Mandamus", "Directs a public official to perform a legally-bound duty"],
          ["Certiorari", "Quashes an order passed by a lower court acting beyond jurisdiction"],
          ["Prohibition", "Stops a lower court's proceedings that exceed its jurisdiction"],
          ["Quo Warranto", "Questions the legality of a person's claim to a public office"],
        ]} />
      </Accordion>

      <Callout type="trap" label="Common trap">
        Art. 32 is itself a Fundamental Right, usable only at the Supreme Court for FR violations. Art. 226 is a
        constitutional (not fundamental) HC power — wider in scope, even though Art. 32 is higher in status.
      </Callout>

      <SectionHeading num="05" title="Directive Principles — Part IV, Art. 36–51" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>Borrowed from Ireland. Non-justiciable (Art. 37) — not enforceable in court.</p>
      <DataTable headers={["Category", "Articles", "Focus"]} rows={[
        ["Socialist", "38, 39", "Welfare state, equal pay, distribution of resources"],
        ["Gandhian", "40, 43, 46, 47", "Panchayats, cottage industries, SC/ST welfare, prohibition"],
        ["Liberal-intellectual", "44, 45, 48, 48A, 50", "Uniform Civil Code, environment, judiciary-executive separation"],
      ]} />
      <Callout type="exam" label="Exam focus">
        Article 44 (Uniform Civil Code) and Article 48A (environment & wildlife) are the two most-quoted
        individual DPSP articles — know their numbers, not just the content.
      </Callout>

      <SectionHeading num="06" title="Fundamental Duties — Art. 51A" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Added by the <b>42nd Amendment, 1976</b> (Swaran Singh Committee). 11th duty added by the
        <b> 86th Amendment, 2002</b>.
      </p>
      <ol className="list-decimal pl-5 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Abide by the Constitution, respect the Flag & Anthem</li>
        <li>Cherish the ideals of the freedom struggle</li>
        <li>Uphold sovereignty, unity and integrity of India</li>
        <li>Defend the country when called upon</li>
        <li>Promote harmony and common brotherhood</li>
        <li>Preserve India's composite culture</li>
        <li>Protect the natural environment</li>
        <li>Develop scientific temper and spirit of inquiry</li>
        <li>Safeguard public property, abjure violence</li>
        <li>Strive towards excellence in all spheres</li>
        <li><b>(2002)</b> Parent/guardian's duty to educate a child aged 6–14</li>
      </ol>
      <Callout type="trap" label="Common trap">
        The 11th duty is often confused with Art. 21A — that's the child's Fundamental Right (Part III); the
        11th duty (Part IVA) is the parent/guardian's corresponding obligation.
      </Callout>

      <SectionHeading num="07" title="Amendment Procedure — Article 368" />
      <DataTable headers={["Route", "Majority required", "Covers"]} rows={[
        ["Simple majority", "Ordinary, outside Art. 368", "State reorganisation, citizenship, delimitation"],
        ["Special majority", "2/3 present+voting & majority of total membership", "Most FR & DPSP amendments"],
        ["Special + State ratification", "Above + ratification by ≥half the States", "President's election, Centre-State powers, Art. 368 itself"],
      ]} />
      <Callout type="mnemonic" label="Basic Structure Doctrine">
        From <b>Kesavananda Bharati (1973)</b> — Parliament can amend any part, including FRs, but cannot alter
        the Constitution's "basic structure": supremacy of the Constitution, rule of law, judicial review,
        federalism, secularism, separation of powers.
      </Callout>

      <SectionHeading num="08" title="Landmark Cases Timeline" />
      <DataTable headers={["Year", "Case", "Holding"]} rows={[
        ["1951", "Shankari Prasad", "Parliament can amend Fundamental Rights"],
        ["1967", "I.C. Golaknath", "Reversed — Parliament cannot amend FRs (later overruled)"],
        ["1973", "Kesavananda Bharati", "Basic structure doctrine is born"],
        ["1980", "Minerva Mills", "Judicial review is part of the basic structure"],
        ["2017", "K.S. Puttaswamy", "Right to Privacy is a Fundamental Right under Art. 21"],
      ]} />

      <SectionHeading num="09" title="Quick Revision" />
      <DataTable headers={["Provision", "Articles", "Enforceable?"]} rows={[
        ["Fundamental Rights", "12–35", "Yes — Art. 32 (SC) / Art. 226 (HC)"],
        ["Directive Principles", "36–51", "No — non-justiciable"],
        ["Fundamental Duties", "51A", "No — moral obligation only"],
        ["Amendment power", "368", "— (procedural article)"],
      ]} />

      <SectionHeading num="10" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="The Right to Property was removed from Fundamental Rights by which Amendment?"
        options={["42nd Amendment, 1976", "44th Amendment, 1978", "73rd Amendment, 1992", "86th Amendment, 2002"]}
        correctIndex={1} explanation="44th Amendment Act, 1978 — it became a legal right under Article 300A." />
      <MCQItem n={2} q="Which writ questions the legality of a person's claim to a public office?"
        options={["Mandamus", "Certiorari", "Quo Warranto", "Prohibition"]}
        correctIndex={2} explanation='Quo Warranto, meaning "by what authority."' />
      <MCQItem n={3} q="The DPSP were borrowed from the Constitution of which country?"
        options={["United Kingdom", "Ireland", "Canada", "South Africa"]}
        correctIndex={1} explanation="Ireland — which itself borrowed the idea from Spain." />
      <MCQItem n={4} q='Which case introduced the "Basic Structure" doctrine?'
        options={["Golaknath v. State of Punjab", "Minerva Mills v. Union of India", "Kesavananda Bharati v. State of Kerala", "Shankari Prasad v. Union of India"]}
        correctIndex={2} explanation="Kesavananda Bharati v. State of Kerala (1973)." />
      <MCQItem n={5} q='"Socialist" and "Secular" were added to the Preamble by which amendment?'
        options={["24th Amendment", "42nd Amendment", "44th Amendment", "86th Amendment"]}
        correctIndex={1} explanation='42nd Amendment Act, 1976 — also called the "Mini-Constitution."' />
      <MCQItem n={6} q="How many Fundamental Duties are currently listed under Article 51A?"
        options={["9", "10", "11", "12"]}
        correctIndex={2} explanation="11 — the 11th was added by the 86th Amendment, 2002." />
      <MCQItem n={7} q='Article 32 was called the "heart and soul" of the Constitution by whom?'
        options={["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Dr. B. R. Ambedkar", "Sardar Vallabhbhai Patel"]}
        correctIndex={2} explanation="Dr. B. R. Ambedkar." />
      <MCQItem n={8} q="Amending the President's election procedure requires which majority?"
        options={["Simple majority only", "Special majority only", "Special majority + ratification by ≥half the States", "No amendment is possible"]}
        correctIndex={2} explanation="It's a federal provision, needing the strictest route under Art. 368." />
      <MCQItem n={9} q="Which case recognised the Right to Privacy under Article 21?"
        options={["Maneka Gandhi v. Union of India", "K.S. Puttaswamy v. Union of India", "Minerva Mills v. Union of India", "Indira Sawhney v. Union of India"]}
        correctIndex={1} explanation="K.S. Puttaswamy v. Union of India (2017)." />
      <MCQItem n={10} q="Untouchability is abolished under which Article?"
        options={["Article 15", "Article 16", "Article 17", "Article 18"]}
        correctIndex={2} explanation="Article 17." />

      <ArticleFooter text='Part of the SSC CGL Study Series — General Awareness · Indian Polity & Constitution. Article numbers and case dates are compiled from the Constitution of India and standard polity references; cross-check against a current Bare Act for the latest amendment status.' />
    </div>
  );
}
