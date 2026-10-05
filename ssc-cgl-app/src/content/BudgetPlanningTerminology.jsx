import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function BudgetPlanningTerminology() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Economy"
        priority={null}
        title="Budget & Planning Terminology"
        dek="The Union Budget's constitutional backbone, the three funds every rupee of government money sits in, how a Budget actually moves through Parliament, and how India's planning model shifted from Five Year Plans to NITI Aayog."
        stats={[
          { value: "Art. 112", label: "Constitutional basis of the Union Budget — the Annual Financial Statement" },
          { value: "1 Feb", label: "Budget presentation date since 2017 (previously the last day of February)" },
          { value: "12", label: "Total Five Year Plans, from 1951–56 to 2012–17" },
          { value: "3", label: "Funds every government rupee sits in — Consolidated, Contingency, Public Account" },
        ]}
      />

      {/* 1. What is the Budget */}
      <SectionHeading num="01" title="What Is the Union Budget, Constitutionally?" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        The word "Budget" doesn't actually appear in the Constitution — it's formally called the
        <b> Annual Financial Statement</b>.
      </p>
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li><b>Article 112</b> requires the President to have this statement of estimated receipts &
          expenditure laid before Parliament for each financial year</li>
        <li>Presented by the Finance Minister, now on <b>1 February</b> each year — changed from the earlier
          practice of presenting it on the last working day of February, starting with the 2017–18 Budget</li>
        <li>That same year (2017), the <b>separate Railway Budget</b> — a distinct tradition since 1924 — was
          <b> merged into the General Budget</b>, ending a 92-year-old practice</li>
      </ul>

      {/* 2. Three funds */}
      <SectionHeading num="02" title="The Three Funds — Where Government Money Sits" />
      <DataTable headers={["Fund", "Article", "What it holds"]} rows={[
        ["Consolidated Fund of India", "Art. 266", "All government revenues, loans raised, and loan repayments received; nearly all government spending is drawn from here, and it requires Parliament's authorisation to withdraw"],
        ["Contingency Fund of India", "Art. 267", "A standing fund at the President's disposal for unforeseen expenditure, used before Parliament approves it — later recouped from the Consolidated Fund"],
        ["Public Account of India", "Art. 266(2)", "Money where the government acts merely as a banker — provident funds, small savings — doesn't need Parliament's appropriation to be paid out, since it isn't the government's own money"],
      ]} />
      <Callout type="exam" label="Exam focus">
        The Contingency Fund's corpus was raised from ₹500 crore to <b>₹30,000 crore</b> via an amendment in
        the 2021–22 Budget — a fact SSC has tested directly. As with any such figure, verify it hasn't been
        revised again before your exam.
      </Callout>

      {/* 3. Budget documents */}
      <SectionHeading num="03" title="Key Budget Documents" />
      <DataTable headers={["Document", "Purpose"]} rows={[
        ["Annual Financial Statement", "The core Budget document, mandated by Article 112"],
        ["Finance Bill", "Proposes new taxes or changes to existing tax laws; must be enacted before the new financial year (1 April) to give legal effect to tax proposals"],
        ["Appropriation Bill", "Grants legal authority to withdraw money from the Consolidated Fund for the expenditure Parliament has approved"],
        ["Macro-Economic Framework Statement", "Assesses the growth prospects of the economy"],
        ["Medium-Term Fiscal Policy & Fiscal Policy Strategy Statements", "Required under the FRBM Act — set out medium-term fiscal targets and strategy"],
        ["Vote on Account", "Lets the government withdraw funds for a short period (commonly ~2 months) when the full Budget can't be passed before the financial year starts"],
      ]} />

      {/* 4. Parliamentary process */}
      <SectionHeading num="04" title="How a Budget Moves Through Parliament" />
      <Accordion chip="Process" title="Demands for Grants, Cut Motions & the Guillotine" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Each ministry's spending proposal is presented as a <b>Demand for Grants</b> — only the
            <b> Lok Sabha votes</b> on these; the Rajya Sabha may discuss them but has no vote, since they are
            money matters</li>
          <li>MPs can move <b>Cut Motions</b> against a Demand for Grants:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><b>Policy Cut</b> — reduces the demand to ₹1, signalling disapproval of the underlying policy</li>
              <li><b>Economy Cut</b> — reduces the demand by a specific amount, seeking economy in expenditure</li>
              <li><b>Token Cut</b> — reduces the demand by ₹100, to ventilate a specific grievance</li>
            </ul>
          </li>
          <li>When time runs out before all Demands are discussed individually, the remaining ones are put to
            vote together without debate — a procedure called the <b>Guillotine</b></li>
        </ul>
      </Accordion>

      {/* 5. Budgeting approaches */}
      <SectionHeading num="05" title="Types of Budgeting Approaches" />
      <DataTable headers={["Approach", "Idea"]} rows={[
        ["Zero-Based Budgeting", "Every expense must be freshly justified each cycle, starting from a 'zero base' rather than the previous year's allocation"],
        ["Outcome Budgeting", "Introduced in 2005–06; measures the physical/quality outcomes of spending, not just how much was spent"],
        ["Gender Budgeting", "Also introduced in 2005–06; tags and tracks allocations specifically benefiting women"],
        ["Performance Budgeting", "Links funds allocated to specific, measurable performance targets for each programme"],
      ]} />

      {/* 6. Deficits recap */}
      <SectionHeading num="06" title="Deficit Terms — One New Addition" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        Fiscal, Revenue, and Primary Deficit are covered in <i>Macro-Economics Basics</i> — one more term is
        specific to Budget analysis:
      </p>
      <Callout type="mnemonic" label="Effective Revenue Deficit">
        <b>Effective Revenue Deficit = Revenue Deficit − Grants given to States/agencies for creating capital
        assets.</b> It was introduced (around 2011–12) to separate "good" revenue spending — grants that
        still result in an asset being built somewhere — from pure consumption spending.
      </Callout>

      {/* 7. Planning history */}
      <SectionHeading num="07" title="History of Planning in India" />
      <DataTable headers={["Milestone", "Year", "Detail"]} rows={[
        ["Planning Commission established", "1950", "By Cabinet resolution — not constitutional, not statutory"],
        ["National Development Council (NDC) established", "1952", "Apex body of PM + all Chief Ministers + Planning Commission members, to approve Five Year Plans"],
        ["First Five Year Plan", "1951–56", "Based on the Harrod-Domar growth model"],
        ["Twelfth (and last) Five Year Plan", "2012–17", "12 Five Year Plans in total were completed"],
        ["NITI Aayog replaces Planning Commission", "1 Jan 2015", "Shifted from Five Year Plans to a 3-year Action Agenda, 7-year Strategy, and 15-year Vision framework"],
      ]} />

      {/* 8. Economic Survey & committees */}
      <SectionHeading num="08" title="Economic Survey & Parliament's Financial Committees" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        The <b>Economic Survey</b> is presented by the Chief Economic Adviser (Ministry of Finance) one day
        before the Union Budget — it reviews the past year's economic performance and suggests policy
        directions, but is not binding on the government.
      </p>
      <DataTable headers={["Committee", "Role"]} rows={[
        ["Public Accounts Committee (PAC)", "Examines the CAG's audit reports on government spending"],
        ["Estimates Committee", "Studies budget estimates and suggests scope for economy"],
        ["Committee on Public Undertakings (COPU)", "Examines the working of Public Sector Undertakings"],
      ]} />
      <Callout type="trap" label="Common trap">
        These three are together called Parliament's <b>"Financial Committees."</b> All three are made up
        entirely of members from the Lok Sabha and Rajya Sabha, but none of them include the CAG or Finance
        Minister as members — they only <i>examine</i> reports and figures those offices produce.
      </Callout>

      {/* 9. Quick revision */}
      <SectionHeading num="09" title="Quick Revision" />
      <DataTable headers={["Fact", "Value"]} rows={[
        ["Constitutional basis of the Budget", "Article 112 — Annual Financial Statement"],
        ["Budget presentation date (since 2017)", "1 February"],
        ["Railway Budget merged into General Budget", "2017"],
        ["Fund needing no Parliamentary appropriation", "Public Account of India"],
        ["Who votes on Demands for Grants", "Lok Sabha only"],
        ["Planning Commission → NITI Aayog", "1 January 2015"],
        ["Economic Survey author", "Chief Economic Adviser, Ministry of Finance"],
      ]} />

      {/* 10. Practice */}
      <SectionHeading num="10" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="The Union Budget is constitutionally referred to as the:"
        options={["Finance Bill", "Appropriation Bill", "Annual Financial Statement", "Fiscal Policy Statement"]}
        correctIndex={2} explanation="Article 112 mandates the Annual Financial Statement." />
      <MCQItem n={2} q="Since which year has the Union Budget been presented on 1 February?"
        options={["2014", "2015", "2016", "2017"]}
        correctIndex={3} explanation="From the 2017–18 Budget onward, also the year the Railway Budget was merged in." />
      <MCQItem n={3} q="Which fund does NOT require Parliamentary appropriation to make payments from it?"
        options={["Consolidated Fund of India", "Contingency Fund of India", "Public Account of India", "None — all three need appropriation"]}
        correctIndex={2} explanation="The Public Account, since the government merely acts as a banker for that money." />
      <MCQItem n={4} q="A Bill that grants legal authority to withdraw money from the Consolidated Fund for approved spending is called the:"
        options={["Finance Bill", "Appropriation Bill", "Vote on Account", "Fiscal Responsibility Bill"]}
        correctIndex={1} explanation="The Appropriation Bill." />
      <MCQItem n={5} q="Which House of Parliament votes on Demands for Grants?"
        options={["Rajya Sabha only", "Lok Sabha only", "Both Houses equally", "Neither House votes on it"]}
        correctIndex={1} explanation="Only the Lok Sabha votes; the Rajya Sabha can discuss but not vote." />
      <MCQItem n={6} q="A Cut Motion that reduces a Demand for Grants to ₹1 to express disapproval of a policy is called a:"
        options={["Token Cut", "Economy Cut", "Policy Cut", "Guillotine"]}
        correctIndex={2} explanation="A Policy Cut." />
      <MCQItem n={7} q="When undiscussed Demands for Grants are all put to vote together at the end of allotted time, this is called:"
        options={["Adjournment", "The Guillotine", "Zero Hour", "Prorogation"]}
        correctIndex={1} explanation="The Guillotine procedure." />
      <MCQItem n={8} q="The Planning Commission was replaced by NITI Aayog on:"
        options={["26 January 2015", "1 April 2015", "1 January 2015", "15 August 2014"]}
        correctIndex={2} explanation="1 January 2015." />
      <MCQItem n={9} q="How many Five Year Plans did India complete in total?"
        options={["10", "11", "12", "13"]}
        correctIndex={2} explanation="12 Five Year Plans, from 1951–56 to 2012–17." />
      <MCQItem n={10} q="The Economic Survey is prepared under the guidance of the:"
        options={["RBI Governor", "Chief Economic Adviser", "Comptroller & Auditor General", "Finance Secretary"]}
        correctIndex={1} explanation="The Chief Economic Adviser, Ministry of Finance." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Economy. Fund corpus amounts, specific dates, and committee compositions are compiled from official Budget documents and standard economy references — figures like the Contingency Fund's corpus are revised periodically, so verify the current amount closer to your exam." />
    </div>
  );
}
