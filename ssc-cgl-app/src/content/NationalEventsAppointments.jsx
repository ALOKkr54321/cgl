import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function NationalEventsAppointments() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Current Affairs"
        priority="HIGH"
        title="National Events & Appointments"
        dek="The most volatile topic in this entire syllabus — SSC draws these questions from the 6–12 months right before your exam. This page gives you the tracking framework and appointment logic that stays useful, plus a dated snapshot of current office-holders to anchor your revision."
        stats={[
          { value: "6–12 mo.", label: "The window SSC actually draws National Events questions from" },
          { value: "1–2", label: "Qs typically drawn from this topic across Tier-I + Tier-II" },
          { value: "15+", label: "Key constitutional/leadership positions worth tracking monthly" },
          { value: "Live", label: "Everything in the snapshot section needs re-checking closer to your exam" },
        ]}
      />

      <Callout type="trap" label="Read this before anything else on this page">
        This is the one topic where memorising this page alone will not be enough. Names change —
        governments reshuffle, Chiefs retire, Governors are transferred. What <b>won't</b> change is
        <b> which positions matter</b> and <b>how to track them efficiently</b> — that's the real skill this
        page teaches. The dated snapshot below is a starting anchor, compiled in September 2026 — treat it as
        a template to update, not a final answer key.
      </Callout>

      {/* 1. How to study */}
      <SectionHeading num="01" title="How to Study 'Current Affairs' Effectively" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Read <b>one consolidated monthly current-affairs digest</b> rather than scattering attention
          across daily news — most coaching platforms and PIB publish these free</li>
        <li>Focus your revision on the <b>last 6–12 months</b> before your exam date — SSC very rarely goes
          further back for "National Events" specifically (unlike Static GK, which can reach much further)</li>
        <li>Keep a running personal note of <b>appointments, scheme launches, and major policy approvals</b>
          — update it weekly rather than cramming at the end</li>
        <li>Cross-check anything you're unsure of against the <b>PIB (Press Information Bureau)</b> website
          or the ministry's own press releases — it's the most authoritative fast source</li>
      </ul>

      {/* 2. Positions to track */}
      <SectionHeading num="02" title="Key Positions to Always Track" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Build a mental (or written) checklist of these roles — when any one of them changes, it's an
        instant, high-probability exam question for the next cycle.
      </p>
      <DataTable headers={["Category", "Positions to track"]} rows={[
        ["Constitutional heads", "President, Vice-President, Chief Justice of India"],
        ["Parliament", "Speaker (Lok Sabha), Deputy Chairman (Rajya Sabha)"],
        ["Key commissions", "Chief Election Commissioner, CAG, UPSC Chairman"],
        ["Economic leadership", "RBI Governor, SEBI Chairman, Chief Economic Adviser, Finance Secretary"],
        ["Defence leadership", "Chief of Defence Staff, Army/Navy/Air Force Chiefs"],
        ["Law offices", "Attorney General, Solicitor General"],
        ["State-level", "any newly appointed Governors or Chief Ministers, especially after a state election"],
      ]} />

      {/* 3. Snapshot */}
      <SectionHeading num="03" title="Snapshot — Key Office-Holders (as compiled, September 2026)" />
      <Callout type="exam" label="Verify before you memorise">
        Every name below was accurate at the time this page was written. <b>Re-check each one against a
        current source before your exam</b> — some of these offices see routine transitions on a matter of months.
      </Callout>
      <DataTable headers={["Position", "Holder (as of Sep 2026)"]} rows={[
        ["President of India", "Droupadi Murmu"],
        ["Vice-President of India", "C. P. Radhakrishnan"],
        ["Prime Minister of India", "Narendra Modi"],
        ["Chief Justice of India", "Justice Surya Kant (53rd CJI)"],
        ["Speaker, Lok Sabha", "Om Birla"],
        ["Chief Election Commissioner", "Gyanesh Kumar"],
        ["RBI Governor", "Sanjay Malhotra (26th Governor)"],
        ["Attorney General of India", "R. Venkataramani"],
        ["SEBI Chairman", "Tuhin Kanta Pandey"],
      ]} />

      {/* 4. Military leadership */}
      <SectionHeading num="04" title="India's Military Leadership" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        The Chief of Defence Staff (CDS) post was created in <b>2019</b>; General Bipin Rawat was India's
        first CDS. All service chiefs and the CDS are appointed by the President on the government's advice.
      </p>
      <DataTable headers={["Position", "Holder (as of Sep 2026)"]} rows={[
        ["Chief of Defence Staff", "General N. S. Raja Subramani"],
        ["Chief of the Army Staff", "General Upendra Dwivedi"],
        ["Chief of the Naval Staff", "Admiral Dinesh K. Tripathi"],
        ["Chief of the Air Staff", "Air Chief Marshal Amar Preet Singh"],
      ]} />

      {/* 5. Recent policy highlights */}
      <SectionHeading num="05" title="Recent National Policy Highlights (2026)" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        A sample of the kind of Cabinet-approval and Budget-announcement news this topic tests — treat
        these as examples of the pattern, not a complete or final list.
      </p>
      <DataTable headers={["Development", "Note"]} rows={[
        ["Union Budget 2026–27", "Presented 1 February 2026; public capital expenditure raised to ₹12.2 lakh crore for the year"],
        ["PM-KISAN extended", "Cabinet approved continuation of the scheme through 2030–31"],
        ["GOBARdhan Scheme approval", "A push for compressed biogas and circular bioenergy"],
        ["PM Surya Sarovar Yojana (PM-SSY)", "New scheme to boost floating solar energy installations"],
        ["Samudra Manthan Scheme", "A National Offshore Exploration Scheme for mineral/resource exploration"],
      ]} />

      {/* 6. Appointment process */}
      <SectionHeading num="06" title="How Key Appointments Actually Work" />
      <Accordion chip="Quick recap" title="Appointment Authority for Major Posts" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>President</b> — elected by an electoral college of MPs and MLAs (see Constitutional Framework topic)</li>
          <li><b>CJI</b> — appointed by the President, by convention the senior-most Supreme Court judge, via the Collegium system</li>
          <li><b>CEC / Election Commissioners</b> — appointed by the President via a selection committee (PM, Leader of Opposition, a Union Cabinet Minister)</li>
          <li><b>RBI Governor</b> — appointed by the Central Government (Appointments Committee of the Cabinet)</li>
          <li><b>Service Chiefs & CDS</b> — appointed by the President, on the government's recommendation</li>
        </ul>
        <p className="mt-2">
          Full detail on these processes is covered in the <b>Constitutional Framework</b> and
          <b> Constitutional & Statutory Bodies</b> topics — this is worth revisiting together with those.
        </p>
      </Accordion>

      {/* 7. Update habit */}
      <SectionHeading num="07" title="Building Your Update Habit — What to Track Monthly" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>New Bills passed by Parliament, and any significant Cabinet-approved schemes</li>
        <li>Any change at the top of the positions listed in Section 2</li>
        <li>Major international summits India hosted or attended, and their headline outcomes</li>
        <li>Any newly signed bilateral or multilateral agreements involving India</li>
      </ul>

      {/* 8. Quick revision */}
      <SectionHeading num="08" title="Quick Revision" />
      <DataTable headers={["Fact", "Value"]} rows={[
        ["CDS post created", "2019 — first CDS was General Bipin Rawat"],
        ["Current CJI (as of Sep 2026)", "Justice Surya Kant, 53rd CJI"],
        ["Window SSC tests for 'National Events'", "Roughly the 6–12 months before the exam"],
        ["Most authoritative fast-check source", "PIB (Press Information Bureau)"],
      ]} />

      {/* 9. Practice */}
      <SectionHeading num="09" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>
        Mixed format — some test the stable appointment process, a few test the September 2026 snapshot
        directly (re-verify those before relying on them for your actual exam).
      </p>
      <MCQItem n={1} q="India's first Chief of Defence Staff (CDS) was:"
        options={["General Bipin Rawat", "General Manoj Pande", "General Anil Chauhan", "General Upendra Dwivedi"]}
        correctIndex={0} explanation="General Bipin Rawat became India's first CDS when the post was created in 2019." />
      <MCQItem n={2} q="The Chief Election Commissioner is appointed by the President based on the recommendation of a committee that includes:"
        options={["Only the Prime Minister", "The PM, Leader of Opposition in Lok Sabha, and a Union Cabinet Minister", "The Chief Justice of India alone", "State Chief Ministers"]}
        correctIndex={1} explanation="Per the CEC and Other ECs (Appointment, Conditions of Service and Term of Office) Act, 2023." />
      <MCQItem n={3} q="The Chief Justice of India is conventionally the senior-most judge of which court?"
        options={["The concerned High Court", "The Supreme Court of India", "The National Company Law Tribunal", "The concerned District Court"]}
        correctIndex={1} explanation="By long-standing convention (via the Collegium system), not an explicit constitutional rule." />
      <MCQItem n={4} q="As compiled in September 2026, who is the Governor of the Reserve Bank of India?"
        options={["Shaktikanta Das", "Urjit Patel", "Sanjay Malhotra", "Raghuram Rajan"]}
        correctIndex={2} explanation="Sanjay Malhotra, the 26th RBI Governor, since December 2024 — verify this is still current before your exam." />
      <MCQItem n={5} q="Which body is the fastest, most authoritative source for verifying a recent government announcement?"
        options={["A random news aggregator", "Social media trends", "Press Information Bureau (PIB)", "A coaching institute's Instagram page"]}
        correctIndex={2} explanation="PIB — the Government of India's official nodal press release agency." />
      <MCQItem n={6} q="RBI Governor is appointed by:"
        options={["The President directly", "The Central Government, via the Appointments Committee of the Cabinet", "Parliament, by a vote", "The Finance Commission"]}
        correctIndex={1} explanation="The Central Government, through the Appointments Committee of the Cabinet." />
      <MCQItem n={7} q="The Union Budget is typically presented on which date each year?"
        options={["31 March", "1 April", "1 February", "26 January"]}
        correctIndex={2} explanation="1 February, a practice in place since the 2017–18 Budget." />
      <MCQItem n={8} q="As compiled in September 2026, who holds the post of Chief Justice of India?"
        options={["D. Y. Chandrachud", "Sanjiv Khanna", "B. R. Gavai", "Surya Kant"]}
        correctIndex={3} explanation="Justice Surya Kant, the 53rd CJI, since November 2025 — verify this is still current before your exam." />
      <MCQItem n={9} q="All three service Chiefs (Army, Navy, Air Force) and the CDS are formally appointed by:"
        options={["The Defence Minister", "The Prime Minister", "The President, on the government's recommendation", "The Parliament, by resolution"]}
        correctIndex={2} explanation="The President, acting on the government's recommendation." />
      <MCQItem n={10} q="For 'National Events & Appointments' questions, SSC typically draws from a window of roughly:"
        options={["The last month only", "The last 6–12 months", "The last 5 years", "Since Independence"]}
        correctIndex={1} explanation="Roughly the last 6–12 months before the exam — much narrower than Static GK." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Current Affairs. Office-holder names and recent policy items reflect information compiled in September 2026 and will go out of date — this is expected and normal for this specific topic. Re-verify the snapshot sections against PIB or a current-affairs digest in the weeks immediately before your exam; the study method and appointment-process sections remain valid regardless of date." />
    </div>
  );
}
