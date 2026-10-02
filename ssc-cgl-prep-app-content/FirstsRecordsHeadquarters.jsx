import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function FirstsRecordsHeadquarters() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Static General Knowledge"
        priority="MED"
        title="Firsts & Records, Headquarters of Organisations"
        dek="India's landmark historical 'firsts' — political, scientific, and cultural — paired with the headquarters of major international and Indian institutions. Genuinely stable, high-density recall content."
        stats={[
          { value: "1950", label: "Dr. Rajendra Prasad became India's first President" },
          { value: "1975", label: "Aryabhata — India's first satellite, launched from the USSR" },
          { value: "Geneva", label: "Home to WHO, ILO, and the Red Cross (ICRC) — all in one city" },
          { value: "Mumbai", label: "Headquarters of RBI, SEBI, LIC, BSE, and NSE — India's financial capital" },
        ]}
      />

      <Callout type="exam" label="Before you start">
        Headquarters for IMF, World Bank, WTO, ADB, AIIB, SAARC, ASEAN, SCO, OECD and OPEC are covered in
        the <b>International Economic Organisations</b> topic (Economy section) — this page covers a
        different set, so study both together rather than expecting overlap.
      </Callout>

      {/* 1. Political firsts */}
      <SectionHeading num="01" title="Political & Constitutional Firsts" />
      <DataTable headers={["Position", "First holder"]} rows={[
        ["President of India", "Dr. Rajendra Prasad (1950)"],
        ["Prime Minister of India", "Jawaharlal Nehru (1947)"],
        ["Woman Prime Minister", "Indira Gandhi (1966)"],
        ["Woman President", "Pratibha Patil (2007)"],
        ["Vice-President of India", "Dr. Sarvepalli Radhakrishnan (1952)"],
        ["Chief Justice of India", "Justice H. J. Kania (1950)"],
        ["Speaker of Lok Sabha", "G. V. Mavalankar (1952)"],
        ["Woman Governor of a State", "Sarojini Naidu (United Provinces, 1947)"],
      ]} />
      <Callout type="trap" label="Common trap">
        Sarojini Naidu was also the <b>first Indian woman to become President of the Indian National
        Congress</b> (1925) — a separate "first" from her role as Governor, and easy to conflate on an exam.
      </Callout>

      {/* 2. Other firsts */}
      <SectionHeading num="02" title="Other Notable Firsts" />
      <DataTable headers={["Category", "First / Milestone"]} rows={[
        ["First Indian satellite", "Aryabhata (launched 19 April 1975, from the erstwhile USSR)"],
        ["First Indian Chess Grandmaster", "Viswanathan Anand (1988)"],
        ["First Test cricket captain of India", "C. K. Nayudu (1932, India's first-ever Test match, vs England at Lord's)"],
        ["First Indian silent film", "Raja Harishchandra (1913), by Dadasaheb Phalke"],
        ["First Indian sound film (talkie)", "Alam Ara (1931), directed by Ardeshir Irani"],
        ["First IIT established", "IIT Kharagpur (1951)"],
        ["First railway line in India", "Bombay (Bori Bunder) to Thane, 1853"],
        ["First Indian Miss World", "Reita Faria (1966)"],
        ["First Indian Miss Universe", "Sushmita Sen (1994)"],
        ["First Param Vir Chakra recipient", "Major Somnath Sharma (1947, posthumous, Battle of Badgam)"],
      ]} />

      {/* 3. UN & international HQs */}
      <SectionHeading num="03" title="Headquarters — UN Bodies & Major International Organisations" />
      <DataTable headers={["Organisation", "Headquarters"]} rows={[
        ["United Nations (UN)", "New York, USA"],
        ["UNESCO", "Paris, France"],
        ["UNICEF", "New York, USA"],
        ["World Health Organization (WHO)", "Geneva, Switzerland"],
        ["International Labour Organization (ILO)", "Geneva, Switzerland"],
        ["Red Cross (ICRC)", "Geneva, Switzerland"],
        ["Interpol", "Lyon, France"],
        ["NATO", "Brussels, Belgium"],
        ["Commonwealth of Nations", "London, UK"],
      ]} />
      <Callout type="mnemonic" label="Memory aid">
        <b>Geneva</b> alone hosts WHO, ILO, and the Red Cross's headquarters — if a question names any of
        these three and asks for the city, Geneva is the safe first guess to check.
      </Callout>

      {/* 4. Sports HQs */}
      <SectionHeading num="04" title="Headquarters — Sports Governing Bodies" />
      <DataTable headers={["Body", "Headquarters"]} rows={[
        ["FIFA (football)", "Zurich, Switzerland"],
        ["International Olympic Committee (IOC)", "Lausanne, Switzerland"],
        ["International Cricket Council (ICC)", "Dubai, UAE (moved there from London in 2005)"],
      ]} />

      {/* 5. Indian institution HQs */}
      <SectionHeading num="05" title="Headquarters — Key Indian Institutions" />
      <DataTable headers={["Institution", "Headquarters"]} rows={[
        ["Reserve Bank of India (RBI)", "Mumbai"],
        ["Securities and Exchange Board of India (SEBI)", "Mumbai"],
        ["Life Insurance Corporation (LIC)", "Mumbai"],
        ["Bombay Stock Exchange (BSE)", "Mumbai"],
        ["National Stock Exchange (NSE)", "Mumbai"],
        ["Defence Research and Development Organisation (DRDO)", "New Delhi"],
        ["Indian Space Research Organisation (ISRO)", "Bengaluru"],
      ]} />

      {/* 6. Quick revision */}
      <SectionHeading num="06" title="Quick Revision" />
      <DataTable headers={["Fact", "Answer"]} rows={[
        ["First President of India", "Dr. Rajendra Prasad"],
        ["First woman PM of India", "Indira Gandhi"],
        ["First Indian satellite", "Aryabhata (1975)"],
        ["First Indian Grandmaster", "Viswanathan Anand"],
        ["First Indian talkie film", "Alam Ara (1931)"],
        ["WHO headquarters", "Geneva, Switzerland"],
        ["UNESCO headquarters", "Paris, France"],
        ["ICC (cricket) headquarters", "Dubai, UAE"],
        ["Mumbai-headquartered institutions", "RBI, SEBI, LIC, BSE, NSE"],
      ]} />

      {/* 7. Practice */}
      <SectionHeading num="07" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="Who was the first President of independent India?"
        options={["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "C. Rajagopalachari"]}
        correctIndex={1} explanation="Dr. Rajendra Prasad, in 1950." />
      <MCQItem n={2} q="India's first satellite, Aryabhata, was launched in which year?"
        options={["1969", "1972", "1975", "1980"]}
        correctIndex={2} explanation="1975, from the erstwhile Soviet Union." />
      <MCQItem n={3} q="Who was India's first Chess Grandmaster?"
        options={["R. Praggnanandhaa", "D. Gukesh", "Viswanathan Anand", "Vidit Gujrathi"]}
        correctIndex={2} explanation="Viswanathan Anand, in 1988." />
      <MCQItem n={4} q="India's first sound film (talkie) was:"
        options={["Raja Harishchandra", "Alam Ara", "Pather Panchali", "Mother India"]}
        correctIndex={1} explanation="Alam Ara (1931) — Raja Harishchandra (1913) was India's first film, but a silent one." />
      <MCQItem n={5} q="Which IIT was the first to be established, in 1951?"
        options={["IIT Bombay", "IIT Delhi", "IIT Kharagpur", "IIT Madras"]}
        correctIndex={2} explanation="IIT Kharagpur." />
      <MCQItem n={6} q="The headquarters of the World Health Organization (WHO) is in:"
        options={["New York", "Paris", "Geneva", "Vienna"]}
        correctIndex={2} explanation="Geneva, Switzerland." />
      <MCQItem n={7} q="UNESCO's headquarters is located in:"
        options={["New York", "Paris", "London", "Geneva"]}
        correctIndex={1} explanation="Paris, France." />
      <MCQItem n={8} q="Interpol's headquarters is located in which French city?"
        options={["Paris", "Marseille", "Lyon", "Nice"]}
        correctIndex={2} explanation="Lyon, France." />
      <MCQItem n={9} q="The International Cricket Council (ICC) is headquartered in:"
        options={["London", "Melbourne", "Mumbai", "Dubai"]}
        correctIndex={3} explanation="Dubai, UAE — it moved there from London in 2005." />
      <MCQItem n={10} q="Which city is home to the headquarters of RBI, SEBI, LIC, BSE, and NSE?"
        options={["New Delhi", "Mumbai", "Bengaluru", "Kolkata"]}
        correctIndex={1} explanation="Mumbai, India's financial capital." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Static General Knowledge. Historical firsts and organisational headquarters are stable, well-established facts, though a handful of international bodies do occasionally relocate — the ICC's 2005 move from London to Dubai is a good example worth remembering." />
    </div>
  );
}
