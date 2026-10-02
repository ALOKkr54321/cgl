import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function IndianBankingFinance() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Economy"
        priority="MED"
        title="Indian Banking & Finance"
        dek="Who regulates what in India's financial system, how the banking landscape is layered from RBI down to Payments Banks, and the handful of acronyms — NPA, SARFAESI, IBC, CRAR — that SSC keeps coming back to."
        stats={[
          { value: "1935", label: "Year RBI was established, under the RBI Act, 1934" },
          { value: "12", label: "Public Sector Banks remaining after the 2019–20 mega-mergers" },
          { value: "1969 / 1980", label: "The two bank nationalisation waves — 14 banks, then 6 more" },
          { value: "90 days", label: "Overdue period after which a loan is classified as an NPA" },
        ]}
      />

      {/* 1. Structure */}
      <SectionHeading num="01" title="Structure of the Indian Banking System" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        RBI sits at the top as regulator; everything else below is a category of institution it licenses
        and supervises.
      </p>
      <DataTable headers={["Tier", "Examples"]} rows={[
        ["Central Bank", "Reserve Bank of India (RBI) — the regulator, not a commercial bank"],
        ["Public Sector Banks (PSBs)", "SBI, Punjab National Bank, Bank of Baroda, Canara Bank, and 8 others"],
        ["Private Sector Banks", "HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank"],
        ["Foreign Banks", "Citibank, HSBC, Standard Chartered — operating via Indian branches"],
        ["Regional Rural Banks (RRBs)", "Sponsored jointly by a PSB, Central Govt, and State Govt"],
        ["Small Finance Banks", "AU SFB, Equitas SFB, Ujjivan SFB — serve small businesses & low-income groups"],
        ["Payments Banks", "Airtel Payments Bank, India Post Payments Bank, Fino Payments Bank"],
        ["Cooperative Banks", "Urban Cooperative Banks, State/District Cooperative Banks, PACS"],
        ["NBFCs", "Bajaj Finance, LIC Housing Finance — lend, but cannot accept demand deposits"],
      ]} />

      {/* 2. RBI */}
      <SectionHeading num="02" title="Reserve Bank of India — Functions & Structure" />
      <Accordion chip="RBI" title="What the Central Bank Actually Does" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Established <b>1 April 1935</b> under the RBI Act, 1934; <b>nationalised in 1949</b></li>
          <li><b>Sole authority to issue currency notes</b> (Section 22 of the RBI Act) — except ₹1 notes and
            all coins, which are issued by the Government of India, though still circulated through RBI</li>
          <li><b>Banker to the Government</b> — manages the government's accounts and public debt</li>
          <li><b>Banker's bank</b> — acts as lender of last resort to commercial banks</li>
          <li><b>Custodian of foreign exchange reserves</b> and regulator of forex flows</li>
          <li><b>Regulator</b> of the banking system, NBFCs, and (since 2020) Urban Cooperative Banks</li>
          <li><b>Monetary policy</b> — through the Monetary Policy Committee (see Macro-Economics Basics)</li>
          <li>Currently headed by a Governor supported by <b>4 Deputy Governors</b></li>
        </ul>
      </Accordion>

      {/* 3. PSBs */}
      <SectionHeading num="03" title="Public Sector Banks — Nationalisation & Mergers" />
      <DataTable headers={["Event", "Year", "Detail"]} rows={[
        ["First nationalisation wave", "1969", "14 major private banks nationalised in one stroke"],
        ["Second nationalisation wave", "1980", "6 more banks nationalised — taking the total to 20"],
        ["SBI's associate banks merged into SBI", "2017", "State Bank of Bikaner & Jaipur, Mysore, Travancore, Patiala, Hyderabad + Bharatiya Mahila Bank"],
        ["Mega-merger of PSBs", "1 Apr 2020", "10 PSBs consolidated into 4 — brought the total count of PSBs down to 12"],
      ]} />
      <Callout type="exam" label="Exam focus">
        SSC frequently asks the nationalisation numbers directly: <b>14 banks in 1969, 6 more in 1980</b> —
        don't mix up which wave had how many.
      </Callout>

      {/* 4. New-age banks */}
      <SectionHeading num="04" title="Payments Banks & Small Finance Banks" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Both categories emerged from the <b>Nachiket Mor Committee (2013)</b> on financial inclusion, with
        RBI licenses issued starting 2015.
      </p>
      <DataTable headers={["", "Payments Banks", "Small Finance Banks"]} rows={[
        ["Can accept deposits?", "Yes, up to a ceiling per customer", "Yes, without a ceiling — like a normal bank"],
        ["Can lend / issue loans?", "No", "Yes — their core purpose"],
        ["Can issue credit cards?", "No", "Yes"],
        ["Target group", "Migrant workers, low-income households — small-value transactions", "Small businesses, marginal farmers, micro & small industries"],
        ["Examples", "Airtel Payments Bank, India Post Payments Bank", "AU SFB, Equitas SFB, Ujjivan SFB, Jana SFB"],
      ]} />

      {/* 5. RRBs & Cooperative Banks */}
      <SectionHeading num="05" title="Regional Rural Banks & Cooperative Banks" />
      <Accordion chip="RRB Act, 1976" title="Regional Rural Banks">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>First 5 RRBs were set up on 2 October 1975; formally governed by the RRB Act, 1976</li>
          <li>Ownership split: <b>Central Government 50%, sponsor bank 35%, State Government 15%</b></li>
          <li>Recent "One State, One RRB" consolidation has sharply reduced the total number of RRBs</li>
        </ul>
      </Accordion>
      <Accordion chip="Cooperative Banks" title="Structure & Regulation">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Two broad streams: <b>Urban Cooperative Banks (UCBs)</b> and the <b>rural cooperative credit
            structure</b> — State Cooperative Banks → District Central Cooperative Banks → Primary
            Agricultural Credit Societies (PACS)</li>
          <li>Earlier under <b>dual regulation</b> — RBI for banking functions, the Registrar of Cooperative
            Societies for management</li>
          <li>The <b>Banking Regulation (Amendment) Act, 2020</b> brought UCBs more directly under RBI's
            regulatory control after some high-profile cooperative bank failures</li>
        </ul>
      </Accordion>

      {/* 6. NBFCs */}
      <SectionHeading num="06" title="NBFCs vs Banks" />
      <DataTable headers={["", "Banks", "NBFCs"]} rows={[
        ["Accept demand deposits?", "Yes", "No"],
        ["Part of payment & settlement system?", "Yes — issue cheques, part of clearing system", "No"],
        ["Maintain CRR / SLR?", "Yes, mandatorily", "No"],
        ["Regulator", "RBI", "RBI (Housing Finance Companies moved under RBI in 2019)"],
      ]} />

      {/* 7. Regulators */}
      <SectionHeading num="07" title="Financial Sector Regulators" />
      <DataTable headers={["Regulator", "Regulates", "Established"]} rows={[
        ["RBI", "Banking system, NBFCs, monetary policy", "1935"],
        ["SEBI", "Securities markets, stock exchanges", "1988; statutory status via SEBI Act, 1992"],
        ["IRDAI", "Insurance sector", "1999, under the IRDA Act"],
        ["PFRDA", "Pension funds, including the National Pension System (NPS)", "Interim body 2003; statutory via PFRDA Act, 2013"],
        ["IBBI", "Insolvency & bankruptcy resolution process", "2016, under the Insolvency and Bankruptcy Code"],
      ]} />

      {/* 8. Key concepts */}
      <SectionHeading num="08" title="Key Banking Concepts" />
      <Accordion chip="NPA" title="Non-Performing Assets" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li>A loan is classified as an NPA when interest or principal remains overdue for
            <b> more than 90 days</b></li>
          <li>Progressive classification: <b>Sub-standard</b> → <b>Doubtful</b> → <b>Loss</b> asset, based on
            how long it has stayed unpaid</li>
        </ul>
      </Accordion>
      <DataTable headers={["Law / Mechanism", "Purpose"]} rows={[
        ["SARFAESI Act, 2002", "Lets banks seize and auction a defaulting borrower's secured assets without going to court"],
        ["Insolvency and Bankruptcy Code (IBC), 2016", "Time-bound resolution process for insolvent companies; NCLT is the adjudicating authority"],
        ["Basel Norms (current: Basel III)", "International capital-adequacy standards set by the Basel Committee on Banking Supervision"],
      ]} />
      <Callout type="exam" label="Exam focus">
        <b>CRAR (Capital to Risk-weighted Assets Ratio)</b> = (Tier 1 Capital + Tier 2 Capital) ÷
        Risk-Weighted Assets. Basel III sets a global minimum, but RBI mandates a higher CRAR for Indian banks —
        the exact required percentage is revised periodically, so verify the current figure closer to your exam.
      </Callout>

      {/* 9. Lending rates & digital payments */}
      <SectionHeading num="09" title="Lending Rate Benchmarks & Digital Payments" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        How the interest rate on your loan gets decided has changed benchmarks over time:
      </p>
      <DataTable headers={["Benchmark", "Introduced", "Note"]} rows={[
        ["Base Rate", "2010", "The minimum rate below which banks could not lend — later found too sticky"],
        ["MCLR (Marginal Cost of Funds based Lending Rate)", "2016", "Linked lending rates more closely to a bank's actual cost of funds"],
        ["External Benchmark Lending Rate (EBLR)", "Oct 2019", "Mandatory for retail & MSME loans; usually linked directly to the RBI repo rate"],
      ]} />
      <DataTable headers={["Payment system", "Key fact"]} rows={[
        ["NEFT", "Electronic funds transfer; available 24x7 since December 2019"],
        ["RTGS", "Real-Time Gross Settlement — for high-value transactions, settled individually"],
        ["IMPS", "Immediate Payment Service — instant, 24x7 interbank transfer"],
        ["UPI", "Unified Payments Interface, launched 2016 by NPCI — India's most-used instant payment rail"],
        ["NPCI", "National Payments Corporation of India — umbrella body for retail payments, set up in 2008"],
      ]} />

      {/* 10. Quick revision */}
      <SectionHeading num="10" title="Quick Revision" />
      <DataTable headers={["Fact", "Value"]} rows={[
        ["RBI established", "1 April 1935"],
        ["RBI nationalised", "1949"],
        ["Bank nationalisation waves", "1969 (14 banks), 1980 (6 banks)"],
        ["Current number of PSBs", "12, after the 2020 mega-merger"],
        ["NPA threshold", "Overdue for more than 90 days"],
        ["UPI launched by", "NPCI, in 2016"],
        ["Committee behind Payments/Small Finance Banks", "Nachiket Mor Committee, 2013"],
      ]} />

      {/* 11. Practice */}
      <SectionHeading num="11" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="The Reserve Bank of India was established in which year?"
        options={["1913", "1935", "1949", "1955"]}
        correctIndex={1} explanation="1 April 1935, under the RBI Act, 1934. It was nationalised in 1949." />
      <MCQItem n={2} q="How many banks were nationalised in the first wave, in 1969?"
        options={["6", "10", "14", "20"]}
        correctIndex={2} explanation="14 major banks; a further 6 were nationalised in 1980." />
      <MCQItem n={3} q="Payments Banks are NOT permitted to:"
        options={["Accept deposits", "Issue debit cards", "Extend loans", "Offer remittance services"]}
        correctIndex={2} explanation="Payments Banks cannot lend — that's the core restriction distinguishing them from Small Finance Banks." />
      <MCQItem n={4} q="A loan is classified as a Non-Performing Asset (NPA) when payment is overdue for more than:"
        options={["30 days", "60 days", "90 days", "180 days"]}
        correctIndex={2} explanation="More than 90 days." />
      <MCQItem n={5} q="The SARFAESI Act, 2002 allows banks to:"
        options={["Set interest rates independently", "Seize and auction a defaulter's secured assets without court intervention", "Issue currency", "Regulate stock exchanges"]}
        correctIndex={1} explanation="It enables recovery of dues by enforcing security interest without going through courts." />
      <MCQItem n={6} q="Which regulator oversees the Insolvency and Bankruptcy Code process in India?"
        options={["RBI", "SEBI", "IBBI", "IRDAI"]}
        correctIndex={2} explanation="The Insolvency and Bankruptcy Board of India (IBBI), established in 2016." />
      <MCQItem n={7} q="PFRDA regulates which of the following?"
        options={["Insurance companies", "Stock exchanges", "The National Pension System (NPS)", "Cooperative banks"]}
        correctIndex={2} explanation="The Pension Fund Regulatory and Development Authority regulates pension funds, including the NPS." />
      <MCQItem n={8} q="UPI (Unified Payments Interface) was launched by:"
        options={["RBI", "NPCI", "SBI", "Ministry of Finance"]}
        correctIndex={1} explanation="The National Payments Corporation of India (NPCI), in 2016." />
      <MCQItem n={9} q="How many Public Sector Banks remain after the April 2020 mega-merger?"
        options={["8", "10", "12", "15"]}
        correctIndex={2} explanation="12 — down from 27 in 2017, through successive mergers." />
      <MCQItem n={10} q="CRAR stands for:"
        options={["Credit Risk Assessment Ratio", "Capital to Risk-weighted Assets Ratio", "Cash Reserve and Asset Ratio", "Currency Reserve Adequacy Ratio"]}
        correctIndex={1} explanation="Capital to Risk-weighted Assets Ratio — a core Basel III capital-adequacy measure." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Economy. Bank counts, regulatory thresholds, and specific percentage requirements (like CRAR and Priority Sector Lending targets) are revised periodically by RBI and the Government — verify current figures closer to your exam date." />
    </div>
  );
}
