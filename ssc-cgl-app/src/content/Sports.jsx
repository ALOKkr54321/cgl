import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function Sports() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Current Affairs"
        priority="HIGH"
        title="Sports"
        dek="India's National Sports Awards system, major multi-sport events, and the trophy-to-sport pairings SSC tests as quick recall — anchored by the award structure that stays stable, with the most recent winners and results layered on top."
        stats={[
          { value: "6", label: "Categories under India's National Sports Awards" },
          { value: "29 Aug", label: "National Sports Day — Major Dhyan Chand's birth anniversary" },
          { value: "1961", label: "Year the Arjuna Award was established" },
          { value: "2024", label: "Year D. Gukesh became the youngest-ever World Chess Champion" },
        ]}
      />

      <Callout type="trap" label="Read this before the rest of the topic">
        The <b>award structure</b> (which prize is highest, what it's named after, when it's given) is
        stable and safe to memorise outright. The <b>list of recent winners</b> and <b>tournament results</b>
        changes every year — that part needs refreshing closer to your exam.
      </Callout>

      {/* 1. Awards system */}
      <SectionHeading num="01" title="National Sports Awards — The Full System" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        All presented by the <b>President of India</b>, in a single ceremony usually held on
        <b> 29 August</b> — National Sports Day, marking hockey legend Major Dhyan Chand's birth anniversary.
      </p>
      <DataTable headers={["Award", "For", "Rank"]} rows={[
        ["Major Dhyan Chand Khel Ratna", "Most outstanding sporting performance over the previous 4 years", "Highest sporting honour in India"],
        ["Arjuna Award", "Consistent outstanding performance over 4 years", "Second-highest — established 1961"],
        ["Dronacharya Award", "Coaches who have produced medal-winning athletes", "Coaching honour"],
        ["Dhyan Chand Award", "Lifetime contribution to sport", "Lifetime achievement honour"],
        ["Rashtriya Khel Protsahan Puraskar", "Organisations/corporates promoting sports development", "Institutional honour"],
        ["MAKA Trophy", "Best overall performing university in sports", "University-level honour"],
      ]} />
      <Callout type="exam" label="Exam focus">
        The <b>Khel Ratna</b> was originally named the <b>Rajiv Gandhi Khel Ratna Award</b> and was renamed
        the <b>Major Dhyan Chand Khel Ratna Award in 2021</b> — a rename SSC has tested directly. Before the
        Khel Ratna existed (pre-1991), the <b>Arjuna Award</b> was India's highest sporting honour.
      </Callout>

      {/* 2. Recent winners */}
      <SectionHeading num="02" title="Recent National Sports Awards — Snapshot" />
      <DataTable headers={["Year", "Khel Ratna recipient(s)", "Note"]} rows={[
        ["2022", "Achanta Sharath Kamal (Table Tennis)", "Sole recipient that year"],
        ["2024", "Manu Bhaker, Harmanpreet Singh, D. Gukesh, Praveen Kumar", "4 recipients — an Olympic/Paralympic year"],
        ["2025", "None awarded", "First year with no Khel Ratna recipient since 2014"],
      ]} />
      <Callout type="trap" label="Common trap">
        For the <b>2025 awards</b>, 17 sportspersons received the Arjuna Award, but <b>no one was named for
        the Khel Ratna</b> — a distinctive, easy-to-test fact precisely because it's an absence rather than a name.
      </Callout>

      {/* 3. Multi-sport events */}
      <SectionHeading num="03" title="Major International Multi-Sport Events" />
      <DataTable headers={["Event", "Frequency", "Note"]} rows={[
        ["Olympic Games", "Every 4 years", "The largest global multi-sport event"],
        ["Commonwealth Games (CWG)", "Every 4 years", "Among Commonwealth nations; 2026 edition was held in Glasgow, Scotland"],
        ["Asian Games", "Every 4 years", "Continental multi-sport event for Asian nations"],
        ["FIFA World Cup", "Every 4 years", "Football's premier international tournament"],
        ["Cricket World Cup (ODI)", "Every 4 years", "Organised by the ICC"],
      ]} />

      {/* 4. Trophies */}
      <SectionHeading num="04" title="Famous Trophies & Their Sports" />
      <DataTable headers={["Trophy", "Sport"]} rows={[
        ["Davis Cup", "Tennis — men's international team championship"],
        ["Billie Jean King Cup", "Tennis — women's international team championship"],
        ["Thomas Cup", "Badminton — men's team world championship"],
        ["Uber Cup", "Badminton — women's team world championship"],
        ["Ryder Cup", "Golf — Europe vs USA team event"],
        ["Sultan Azlan Shah Cup", "Field Hockey — international invitational tournament"],
      ]} />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Indian domestic cricket trophies worth knowing: <b>Ranji Trophy</b> (premier first-class
        championship), <b>Duleep Trophy</b> (zonal cricket), <b>Irani Cup</b> (Ranji champions vs Rest of
        India), and <b>Santosh Trophy</b> for domestic football.
      </p>

      {/* 5. Landmark achievements */}
      <SectionHeading num="05" title="Landmark Indian Sports Achievements" />
      <DataTable headers={["Achievement", "Athlete / Event"]} rows={[
        ["First individual Olympic medal for India", "K. D. Jadhav — wrestling bronze, 1952 Helsinki"],
        ["First Indian woman to win an Olympic medal", "Karnam Malleswari — weightlifting bronze, 2000 Sydney"],
        ["First Indian to win an individual Olympic gold", "Abhinav Bindra — 10m air rifle shooting, 2008 Beijing"],
        ["First Olympic gold in athletics for India", "Neeraj Chopra — javelin throw, 2020 Tokyo"],
        ["Youngest-ever World Chess Champion", "D. Gukesh — 2024, defeating Ding Liren"],
      ]} />
      <Callout type="mnemonic" label="Memory aid">
        India's first-ever Olympic medal (any kind) actually came from the men's <b>hockey team's gold in
        1948 London</b> — a team event, which is why K. D. Jadhav's 1952 bronze is specifically remembered as
        the first <i>individual</i> medal.
      </Callout>

      {/* 6. Quick revision */}
      <SectionHeading num="06" title="Quick Revision" />
      <DataTable headers={["Fact", "Answer"]} rows={[
        ["India's highest sporting honour", "Major Dhyan Chand Khel Ratna Award"],
        ["National Sports Day", "29 August"],
        ["Arjuna Award established", "1961"],
        ["Khel Ratna renamed from", "Rajiv Gandhi Khel Ratna Award (renamed 2021)"],
        ["Davis Cup sport", "Tennis (men's team)"],
        ["Thomas Cup sport", "Badminton (men's team)"],
        ["First individual Olympic gold for India", "Abhinav Bindra, 2008"],
      ]} />

      {/* 7. Practice */}
      <SectionHeading num="07" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>
        Mixed format — the award-structure and historical questions stay valid regardless of exam date; the
        2025/2026 snapshot questions should be re-verified if your exam is much later.
      </p>
      <MCQItem n={1} q="India's highest sporting honour is the:"
        options={["Arjuna Award", "Dronacharya Award", "Major Dhyan Chand Khel Ratna Award", "Padma Shri"]}
        correctIndex={2} explanation="The Major Dhyan Chand Khel Ratna Award — renamed from the Rajiv Gandhi Khel Ratna Award in 2021." />
      <MCQItem n={2} q="National Sports Day, marking Major Dhyan Chand's birth anniversary, is observed on:"
        options={["15 August", "29 August", "2 October", "26 January"]}
        correctIndex={1} explanation="29 August." />
      <MCQItem n={3} q="The Arjuna Award, India's second-highest sporting honour, was established in which year?"
        options={["1951", "1961", "1971", "1991"]}
        correctIndex={1} explanation="1961." />
      <MCQItem n={4} q="The Dronacharya Award recognises excellence in which role?"
        options={["Athletes", "Coaches", "Sports administrators", "Referees"]}
        correctIndex={1} explanation="Coaches who have produced medal-winning athletes." />
      <MCQItem n={5} q="Who became the first Indian to win an individual Olympic gold medal?"
        options={["K. D. Jadhav", "Karnam Malleswari", "Abhinav Bindra", "Neeraj Chopra"]}
        correctIndex={2} explanation="Abhinav Bindra, in 10m air rifle shooting at the 2008 Beijing Olympics." />
      <MCQItem n={6} q="The Davis Cup is an international team championship in which sport?"
        options={["Badminton", "Tennis", "Golf", "Table Tennis"]}
        correctIndex={1} explanation="Tennis — the men's team event; the women's equivalent is the Billie Jean King Cup." />
      <MCQItem n={7} q="The Thomas Cup is contested in which sport?"
        options={["Tennis", "Badminton (men's team)", "Hockey", "Golf"]}
        correctIndex={1} explanation="Badminton's men's team world championship — the Uber Cup is the women's equivalent." />
      <MCQItem n={8} q="As compiled in 2026, the Commonwealth Games were most recently hosted by which city?"
        options={["Birmingham", "Glasgow", "Victoria", "Gold Coast"]}
        correctIndex={1} explanation="Glasgow, Scotland — verify this remains the most recent edition if your exam is later." />
      <MCQItem n={9} q="D. Gukesh became the youngest-ever World Chess Champion in which year?"
        options={["2021", "2022", "2023", "2024"]}
        correctIndex={3} explanation="2024, defeating Ding Liren." />
      <MCQItem n={10} q="For the 2025 National Sports Awards, which honour was notably NOT given to anyone — for the first time since 2014?"
        options={["Arjuna Award", "Dronacharya Award", "Major Dhyan Chand Khel Ratna Award", "Dhyan Chand Award"]}
        correctIndex={2} explanation="The Khel Ratna — 17 Arjuna Awards were still given that year." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Current Affairs. The National Sports Awards structure and historical milestones are stable exam facts; recent winners, tournament hosts, and 'latest' results (like the 2025/2026 items on this page) change every cycle — cross-check these against a current sports almanac or news source before your exam." />
    </div>
  );
}
