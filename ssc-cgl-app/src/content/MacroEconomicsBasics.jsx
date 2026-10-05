import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function MacroEconomicsBasics() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Economy"
        priority="MED"
        title="Macro-Economics Basics"
        dek="The vocabulary every other Economy topic depends on — how national income is measured, why inflation isn't just one thing, and the two toolkits (RBI's monetary policy and the government's fiscal policy) used to manage the economy."
        stats={[
          { value: "1–2", label: "Qs typically drawn from this topic across Tier-I + Tier-II" },
          { value: "2011–12", label: "Current base year used for India's GDP calculation" },
          { value: "4% ± 2%", label: "RBI's flexible inflation target band (2%–6%), based on CPI" },
          { value: "3%", label: "FRBM Act's fiscal deficit target, as % of GDP" },
        ]}
      />

      {/* 1. National Income aggregates */}
      <SectionHeading num="01" title="National Income — The Core Aggregates" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Each aggregate below is built from the previous one by adding or subtracting exactly one thing —
        memorise the chain, not just the definitions.
      </p>
      <DataTable headers={["Aggregate", "Built as"]} rows={[
        ["GDP (Gross Domestic Product)", "Value of all final goods & services produced within domestic territory in a year"],
        ["GNP (Gross National Product)", "GDP + Net Factor Income from Abroad (NFIA)"],
        ["NNP (Net National Product)", "GNP − Depreciation (consumption of fixed capital)"],
        ["NDP (Net Domestic Product)", "GDP − Depreciation"],
        ["National Income (NI)", "NNP at factor cost — the standard measure of a nation's total income"],
        ["Per Capita Income", "National Income ÷ Total Population"],
      ]} />
      <Callout type="mnemonic" label="Memory aid">
        <b>GDP is about where</b> production happens (domestic territory, any nationality); <b>GNP is about
        who</b> earns it (a nation's residents, wherever they are in the world). NFIA is the bridge between them.
      </Callout>

      {/* 2. Real vs Nominal */}
      <SectionHeading num="02" title="Real vs Nominal GDP & the GDP Deflator" />
      <Accordion chip="Concept" title="Why 'Real' GDP matters" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Nominal GDP</b> — value of output measured at current (that year's) prices; it can rise just
            because prices rose, even if actual output didn't</li>
          <li><b>Real GDP</b> — value of output measured at constant (base-year) prices; strips out the effect
            of inflation, so it reflects genuine growth in output</li>
          <li><b>GDP Deflator</b> = (Nominal GDP ÷ Real GDP) × 100 — a broader price-level indicator than
            CPI or WPI, since it covers the entire economy, not a fixed basket</li>
          <li>India's current GDP base year is <b>2011–12</b> (revised from the earlier 2004–05 base)</li>
        </ul>
      </Accordion>

      {/* 3. Measurement methods */}
      <SectionHeading num="03" title="Three Ways to Measure National Income" />
      <DataTable headers={["Method", "Logic"]} rows={[
        ["Product / Value Added Method", "Sum the value added at each stage of production across all sectors"],
        ["Income Method", "Sum all factor incomes — wages (labour), rent (land), interest (capital), profit (enterprise)"],
        ["Expenditure Method", "GDP = C + I + G + (X − M) — Consumption + Investment + Government spending + Net exports"],
      ]} />
      <Callout type="exam" label="Exam focus">
        All three methods should, in theory, give the <b>same final GDP figure</b> — they are three different
        lenses on the same flow of income in the economy, not three different numbers.
      </Callout>

      {/* 4. Inflation types */}
      <SectionHeading num="04" title="Types & Stages of Inflation" />
      <DataTable headers={["Type", "Cause"]} rows={[
        ["Demand-pull inflation", "Aggregate demand outpaces aggregate supply — \"too much money chasing too few goods\""],
        ["Cost-push inflation", "Rising input costs (wages, raw materials, fuel) push producers to raise prices"],
        ["Built-in inflation", "A wage-price spiral — workers demand higher wages to cover past inflation, which raises costs further"],
      ]} />
      <DataTable headers={["Stage (by intensity)", "Approx. range"]} rows={[
        ["Creeping inflation", "Mild, roughly under 3% per year"],
        ["Walking / Trotting inflation", "Roughly 3%–10% per year"],
        ["Galloping inflation", "Very high, often 10%–20%+ per year"],
        ["Hyperinflation", "Extreme and effectively uncontrolled (e.g. 50%+ per month in historical cases)"],
      ]} />
      <Callout type="trap" label="Common trap">
        <b>Stagflation</b> (stagnant growth + high inflation + high unemployment together) is often confused
        with plain inflation or plain recession — it's the unusual combination of both at once, which classical
        economic theory originally considered impossible.
      </Callout>
      <DataTable headers={["Term", "Meaning"]} rows={[
        ["Deflation", "A general, sustained fall in the price level"],
        ["Disinflation", "Inflation is still positive, but the rate of increase is slowing down"],
        ["Reflation", "Deliberate government/RBI action to raise the price level after a period of deflation"],
      ]} />

      {/* 5. WPI vs CPI */}
      <SectionHeading num="05" title="Measuring Inflation — WPI vs CPI" />
      <DataTable headers={["", "WPI", "CPI"]} rows={[
        ["Measures prices at", "Wholesale / producer level", "Retail level — what a consumer actually pays"],
        ["Published by", "Ministry of Commerce & Industry", "National Statistical Office (NSO), MoSPI"],
        ["Base year", "2011–12", "2012"],
        ["Covers services?", "No", "Yes"],
        ["Used by RBI for inflation targeting?", "No", "Yes — CPI (Combined)"],
      ]} />
      <Callout type="exam" label="Exam focus">
        RBI's flexible inflation targeting framework (in force since 2016) targets <b>CPI inflation at 4%,
        with a tolerance band of ±2%</b> — meaning the acceptable range is <b>2% to 6%</b>.
      </Callout>

      {/* 6. Monetary policy */}
      <SectionHeading num="06" title="Monetary Policy Tools — RBI's Toolkit" />
      <DataTable headers={["Tool", "What it does"]} rows={[
        ["Repo Rate", "Rate at which RBI lends short-term funds to banks against government securities — RBI's key policy rate"],
        ["Reverse Repo Rate", "Rate at which RBI borrows from banks, absorbing excess liquidity from the system"],
        ["CRR (Cash Reserve Ratio)", "% of a bank's deposits that must be kept as cash reserve with RBI, earning no interest"],
        ["SLR (Statutory Liquidity Ratio)", "% of deposits banks must hold themselves in liquid assets (cash, gold, approved govt securities)"],
        ["Bank Rate", "Rate at which RBI lends long-term funds without collateral; moves in line with the MSF rate"],
        ["MSF (Marginal Standing Facility)", "An emergency overnight borrowing window for banks, priced above the repo rate"],
        ["Open Market Operations (OMO)", "RBI buying/selling government securities in the open market to manage liquidity"],
      ]} />
      <Accordion chip="MPC" title="Monetary Policy Committee">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>A 6-member committee that decides the repo rate to meet the inflation target</li>
          <li>Composition: RBI Governor (Chairperson) + 1 Deputy Governor + 1 RBI official (3 internal members),
            plus 3 external members appointed by the Government</li>
          <li>Each member has one vote; the Governor holds an additional <b>casting vote</b> in case of a tie</li>
          <li>Meets bi-monthly (6 times a year); created via a 2016 amendment to the RBI Act, following the
            Urjit Patel Committee's recommendations</li>
        </ul>
      </Accordion>
      <Callout type="trap" label="Common trap">
        CRR reserves are held <b>with the RBI</b> and earn no interest; SLR reserves are held <b>by the bank
        itself</b> in liquid assets. Mixing up "with RBI" vs "with the bank" is the most common error on this pair.
      </Callout>

      {/* 7. Fiscal policy */}
      <SectionHeading num="07" title="Fiscal Policy — Deficits & the FRBM Act" />
      <DataTable headers={["Deficit measure", "Formula", "What it signals"]} rows={[
        ["Fiscal Deficit", "Total Expenditure − Total Receipts (excluding borrowings)", "Total borrowing the government needs to do in a year"],
        ["Revenue Deficit", "Revenue Expenditure − Revenue Receipts", "Government is borrowing to fund its day-to-day expenses, not just investment"],
        ["Primary Deficit", "Fiscal Deficit − Interest Payments", "Borrowing need after excluding interest owed on past debt"],
      ]} />
      <Callout type="exam" label="Exam focus — FRBM Act, 2003">
        The Fiscal Responsibility and Budget Management Act set a <b>fiscal deficit target of 3% of GDP</b>.
        The <b>N.K. Singh Committee (2016)</b> reviewing it recommended a debt-to-GDP ratio target of
        <b> 60%</b> (40% Centre + 20% States) by 2023, along with an "escape clause" allowing deviation during
        national emergencies or structural reforms.
      </Callout>

      {/* 8. Receipts & expenditure */}
      <SectionHeading num="08" title="Government Receipts & Expenditure" />
      <DataTable headers={["", "Revenue account", "Capital account"]} rows={[
        ["Receipts", "Tax + non-tax income; no liability created (e.g. income tax, GST, dividends)", "Creates a liability or reduces an asset (e.g. borrowings, disinvestment proceeds)"],
        ["Expenditure", "Day-to-day spending; doesn't create assets (e.g. salaries, subsidies, interest payments)", "Creates an asset or reduces a liability (e.g. infrastructure spending, loan repayment)"],
      ]} />
      <DataTable headers={["Tax type", "Feature", "Examples"]} rows={[
        ["Direct tax", "Burden falls on the same person who pays it — cannot be shifted", "Income tax, Corporate tax"],
        ["Indirect tax", "Burden can be shifted to someone else (e.g. the end consumer)", "GST (subsumed excise duty, service tax, VAT)"],
      ]} />

      {/* 9. Quick revision */}
      <SectionHeading num="09" title="Quick Revision — Cheat Sheet" />
      <DataTable headers={["Fact", "Value"]} rows={[
        ["GDP base year (India, current)", "2011–12"],
        ["WPI base year", "2011–12"],
        ["CPI base year", "2012"],
        ["RBI inflation target", "4% ± 2% (i.e., 2%–6%) based on CPI"],
        ["FRBM fiscal deficit target", "3% of GDP"],
        ["N.K. Singh Committee debt-to-GDP target", "60% (40% Centre + 20% States)"],
        ["MPC size", "6 members — 3 RBI + 3 external"],
        ["Expenditure method formula", "GDP = C + I + G + (X − M)"],
      ]} />

      {/* 10. Practice */}
      <SectionHeading num="10" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="GNP is calculated as:"
        options={["GDP − Depreciation", "GDP + Net Factor Income from Abroad", "NNP + Depreciation", "GDP − Net Exports"]}
        correctIndex={1} explanation="GNP = GDP + Net Factor Income from Abroad (NFIA)." />
      <MCQItem n={2} q="Which of these is also known as 'National Income'?"
        options={["GDP at market price", "NNP at factor cost", "GNP at market price", "NDP at market price"]}
        correctIndex={1} explanation="NNP at factor cost is the standard definition of National Income." />
      <MCQItem n={3} q="What is India's current base year for GDP calculation?"
        options={["1999–2000", "2004–05", "2011–12", "2017–18"]}
        correctIndex={2} explanation="2011–12, revised from the earlier 2004–05 base." />
      <MCQItem n={4} q="Inflation caused by 'too much money chasing too few goods' is called:"
        options={["Cost-push inflation", "Demand-pull inflation", "Built-in inflation", "Stagflation"]}
        correctIndex={1} explanation="Demand-pull inflation — aggregate demand exceeds aggregate supply." />
      <MCQItem n={5} q="Stagflation refers to the simultaneous occurrence of:"
        options={["High growth and low inflation", "Stagnant growth, high inflation, and high unemployment", "Deflation and high growth", "Low interest rates and high growth"]}
        correctIndex={1} explanation="An unusual combination that classical theory once considered impossible." />
      <MCQItem n={6} q="The Wholesale Price Index (WPI) is published by which body?"
        options={["Reserve Bank of India", "Ministry of Commerce & Industry", "National Statistical Office", "NITI Aayog"]}
        correctIndex={1} explanation="Ministry of Commerce & Industry (Office of the Economic Adviser)." />
      <MCQItem n={7} q="RBI's flexible inflation targeting framework sets a CPI inflation target of:"
        options={["2% ± 1%", "4% ± 2%", "6% ± 2%", "5% ± 1%"]}
        correctIndex={1} explanation="4%, with a tolerance band of ±2% (i.e., 2%–6%)." />
      <MCQItem n={8} q="The rate at which RBI lends short-term funds to banks against government securities is the:"
        options={["Bank Rate", "Reverse Repo Rate", "Repo Rate", "MSF Rate"]}
        correctIndex={2} explanation="The Repo Rate — RBI's primary policy rate." />
      <MCQItem n={9} q="Fiscal Deficit is calculated as:"
        options={["Revenue Expenditure − Revenue Receipts", "Total Expenditure − Total Receipts (excluding borrowings)", "Fiscal Deficit − Interest Payments", "Capital Expenditure − Capital Receipts"]}
        correctIndex={1} explanation="Total Expenditure minus Total Receipts excluding borrowings." />
      <MCQItem n={10} q="The FRBM Act was enacted in which year?"
        options={["2000", "2003", "2009", "2016"]}
        correctIndex={1} explanation="The Fiscal Responsibility and Budget Management Act, 2003." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Economy. Base years, target bands, and committee recommendations reflect the framework as it stood at compilation time. Rates like Repo, CRR, SLR and Bank Rate are revised by RBI's Monetary Policy Committee roughly every two months — always check RBI's latest Monetary Policy Statement for the current values before your exam." />
    </div>
  );
}
