import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function InternationalEconomicOrganisations() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Economy"
        priority="MED"
        title="International Economic Organisations"
        dek="The global institutions and groupings that shape trade, development finance, and economic cooperation — headquarters, founding years, and India's role in each, which is exactly what SSC tests."
        stats={[
          { value: "1944", label: "Bretton Woods Conference — birthplace of both the IMF and the World Bank" },
          { value: "5", label: "Institutions that make up the World Bank Group" },
          { value: "1995", label: "Year the WTO replaced GATT" },
          { value: "2015", label: "Year the BRICS-founded New Development Bank became operational" },
        ]}
      />

      {/* 1. Bretton Woods twins */}
      <SectionHeading num="01" title="The Bretton Woods Twins — IMF & World Bank" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Both were born from the same 1944 Bretton Woods Conference but do very different jobs — this is the
        single most-tested distinction in this topic.
      </p>
      <Accordion chip="IMF" title="International Monetary Fund" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Established 1944, began financial operations in 1947; headquartered in <b>Washington, D.C.</b></li>
          <li>Focus: <b>monetary cooperation and exchange rate stability</b> — helps countries facing
            balance-of-payments crises</li>
          <li>Issues <b>SDR (Special Drawing Rights)</b> — a reserve asset valued against a basket of major
            currencies (USD, Euro, Yuan, Yen, Pound)</li>
          <li>By long-standing informal convention, the Managing Director has always been European</li>
        </ul>
      </Accordion>
      <Accordion chip="World Bank" title="World Bank">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Also established 1944; headquartered in <b>Washington, D.C.</b> — same city as the IMF</li>
          <li>Focus: <b>long-term development financing</b> — infrastructure, poverty reduction, project loans</li>
          <li>By long-standing informal convention, the President has always been American — a deliberate
            pairing with the IMF's European-MD tradition</li>
        </ul>
      </Accordion>
      <Callout type="mnemonic" label="Memory aid">
        <b>IMF = Money</b> (currency stability, crisis lending) · <b>World Bank = Building</b>
        (long-term development projects). If a question mentions balance of payments or currency crisis,
        it's the IMF; if it mentions a dam, road, or poverty-reduction project, it's the World Bank.
      </Callout>

      {/* 2. World Bank Group */}
      <SectionHeading num="02" title="The World Bank Group's Five Institutions" />
      <DataTable headers={["Institution", "Established", "Role"]} rows={[
        ["IBRD", "1944", "Lends to middle-income and creditworthy low-income governments"],
        ["IDA", "1960", "Interest-free loans & grants to the world's poorest countries"],
        ["IFC", "1956", "Invests in and lends to the private sector in developing countries"],
        ["MIGA", "1988", "Provides political-risk insurance to encourage foreign investment"],
        ["ICSID", "1966", "Arbitrates investment disputes between countries and foreign investors"],
      ]} />
      <Callout type="exam" label="Exam focus">
        "World Bank" in everyday usage almost always refers to <b>IBRD + IDA together</b> — these two are the
        core lending arms; the other three (IFC, MIGA, ICSID) serve more specialised roles.
      </Callout>

      {/* 3. WTO */}
      <SectionHeading num="03" title="WTO — From GATT to WTO" />
      <Accordion chip="WTO" title="World Trade Organization">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Established <b>1995</b>, replacing <b>GATT (General Agreement on Tariffs and Trade, 1947)</b>,
            which was only a provisional agreement, not a full organisation</li>
          <li>Headquartered in <b>Geneva, Switzerland</b></li>
          <li>Administers global trade rules, resolves trade disputes between member countries, and operates
            on the <b>Most-Favoured-Nation (MFN)</b> principle — treat all trading partners equally</li>
          <li>The <b>Ministerial Conference</b> is its highest decision-making body, meeting roughly every
            2 years</li>
          <li>India is a founding member of the WTO — and was a founding member of GATT too</li>
        </ul>
      </Accordion>

      {/* 4. Regional development banks */}
      <SectionHeading num="04" title="Regional Development Banks" />
      <DataTable headers={["Bank", "Established", "HQ", "Note"]} rows={[
        ["Asian Development Bank (ADB)", "1966", "Manila, Philippines", "By convention, always led by a Japanese President"],
        ["Asian Infrastructure Investment Bank (AIIB)", "2016", "Beijing, China", "China-led initiative; India is one of its largest members/borrowers"],
        ["New Development Bank (NDB)", "2015 (announced 2014)", "Shanghai, China", "Founded by the 5 BRICS nations; first President was India's K. V. Kamath"],
      ]} />
      <Callout type="trap" label="Common trap">
        ADB (Japan-influenced, older, 1966) and AIIB (China-led, newer, 2016) are frequently swapped in
        questions — both are in Asia, both fund infrastructure, but their founding country and year are
        completely different.
      </Callout>

      {/* 5. G7 vs G20 */}
      <SectionHeading num="05" title="G7 vs G20" />
      <DataTable headers={["", "G7", "G20"]} rows={[
        ["Formed", "1975 (as G6; Canada joined 1976 to make it G7)", "1999 (finance-minister level); elevated to leaders' summits from 2008"],
        ["Members", "USA, UK, Canada, France, Germany, Italy, Japan", "19 countries + the European Union + African Union (added 2023)"],
        ["Is India a member?", "No", "Yes — India hosted the G20 Summit in New Delhi in 2023"],
        ["Russia's status", "Was part of G8 (1998–2014), suspended after Crimea annexation", "Still a member"],
      ]} />

      {/* 6. BRICS */}
      <SectionHeading num="06" title="BRICS & the New Development Bank" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>The term "BRIC" was coined in 2001 by Goldman Sachs economist <b>Jim O'Neill</b>; South Africa
          joined in 2010 to make it "BRICS"</li>
        <li>Original five members: <b>Brazil, Russia, India, China, South Africa</b></li>
        <li>The grouping has since admitted additional members in recent expansion rounds — always check the
          latest official member list closer to your exam, since this has been actively changing</li>
        <li>Its financial institution, the <b>New Development Bank</b>, is headquartered in Shanghai</li>
      </ul>

      {/* 7. Regional groupings */}
      <SectionHeading num="07" title="Regional Groupings — SAARC, ASEAN, SCO" />
      <DataTable headers={["Grouping", "Established", "HQ", "Members note"]} rows={[
        ["SAARC", "1985", "Kathmandu, Nepal", "8 members incl. India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, Maldives, Afghanistan"],
        ["ASEAN", "1967 (Bangkok Declaration)", "Jakarta, Indonesia", "10 members; India is a dialogue partner, not a member"],
        ["SCO", "2001 (evolved from the 'Shanghai Five,' 1996)", "Beijing, China", "India & Pakistan became full members in 2017"],
      ]} />
      <Callout type="trap" label="Common trap">
        India is <b>not a member of ASEAN</b> — only a dialogue/strategic partner. This is one of the most
        common membership mix-ups in this topic.
      </Callout>

      {/* 8. Other */}
      <SectionHeading num="08" title="Other Notable Organisations" />
      <DataTable headers={["Organisation", "Established", "HQ", "Note"]} rows={[
        ["OECD", "1961", "Paris, France", "Mostly high-income/developed economies; India is a key partner, not a member"],
        ["OPEC", "1960", "Vienna, Austria", "Coordinates oil production policy among major oil-exporting nations"],
      ]} />

      {/* 9. Quick revision */}
      <SectionHeading num="09" title="Quick Revision — HQ & Founding Year Cheat Sheet" />
      <DataTable headers={["Organisation", "HQ", "Founded"]} rows={[
        ["IMF", "Washington, D.C.", "1944"],
        ["World Bank", "Washington, D.C.", "1944"],
        ["WTO", "Geneva, Switzerland", "1995"],
        ["ADB", "Manila, Philippines", "1966"],
        ["AIIB", "Beijing, China", "2016"],
        ["NDB (BRICS Bank)", "Shanghai, China", "2015"],
        ["SAARC", "Kathmandu, Nepal", "1985"],
        ["ASEAN", "Jakarta, Indonesia", "1967"],
        ["SCO", "Beijing, China", "2001"],
        ["OECD", "Paris, France", "1961"],
        ["OPEC", "Vienna, Austria", "1960"],
      ]} />

      {/* 10. Practice */}
      <SectionHeading num="10" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="The IMF and the World Bank were both established at which conference?"
        options={["Yalta Conference", "Bretton Woods Conference", "Paris Peace Conference", "San Francisco Conference"]}
        correctIndex={1} explanation="The 1944 Bretton Woods Conference." />
      <MCQItem n={2} q="Which World Bank Group institution gives interest-free loans to the poorest countries?"
        options={["IBRD", "IFC", "IDA", "MIGA"]}
        correctIndex={2} explanation="The International Development Association (IDA), established 1960." />
      <MCQItem n={3} q="The WTO, established in 1995, replaced which earlier agreement?"
        options={["Bretton Woods Agreement", "GATT", "Geneva Convention", "Marrakesh Accord"]}
        correctIndex={1} explanation="The General Agreement on Tariffs and Trade (GATT), 1947." />
      <MCQItem n={4} q="The Asian Development Bank (ADB) is headquartered in:"
        options={["Beijing", "Tokyo", "Manila", "Singapore"]}
        correctIndex={2} explanation="Manila, Philippines." />
      <MCQItem n={5} q="The Asian Infrastructure Investment Bank (AIIB) was launched in 2016, led by which country?"
        options={["Japan", "India", "China", "Russia"]}
        correctIndex={2} explanation="China — headquartered in Beijing." />
      <MCQItem n={6} q="The New Development Bank, founded by BRICS nations, is headquartered in:"
        options={["Beijing", "Shanghai", "New Delhi", "Moscow"]}
        correctIndex={1} explanation="Shanghai, China. Its first President was India's K.V. Kamath." />
      <MCQItem n={7} q="Which of these countries is a member of the G7?"
        options={["India", "China", "Japan", "Brazil"]}
        correctIndex={2} explanation="Japan is a G7 member; the other three are not." />
      <MCQItem n={8} q="SAARC is headquartered in:"
        options={["New Delhi", "Kathmandu", "Dhaka", "Colombo"]}
        correctIndex={1} explanation="Kathmandu, Nepal." />
      <MCQItem n={9} q="India's relationship with ASEAN is best described as:"
        options={["A full member", "A dialogue/strategic partner, not a member", "The founding chair", "An observer with veto power"]}
        correctIndex={1} explanation="India is a dialogue partner, not a member — a frequently tested fact." />
      <MCQItem n={10} q="The Shanghai Cooperation Organisation (SCO) evolved from which earlier grouping?"
        options={["The Shanghai Five", "The Warsaw Pact", "ASEAN Plus Three", "The Non-Aligned Movement"]}
        correctIndex={0} explanation="The 'Shanghai Five' (1996), which became the SCO in 2001." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Economy. Headquarters, founding years, and leadership conventions are compiled from official organisational records. Membership lists — especially for BRICS and the G20 — have been actively changing in recent years; verify the current member list closer to your exam date." />
    </div>
  );
}
