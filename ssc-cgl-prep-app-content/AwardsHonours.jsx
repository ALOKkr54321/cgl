import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function AwardsHonours() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Current Affairs"
        priority="MED"
        title="Awards & Honours"
        dek="Bharat Ratna, the Padma Awards, gallantry honours, and India's Nobel laureates — a topic with an unusually good mix of stable structure (the award tiers, the short and memorisable Nobel list) and a fast-changing recipient list that needs a yearly refresh."
        stats={[
          { value: "1954", label: "Year the Bharat Ratna, India's highest civilian award, was instituted" },
          { value: "3", label: "Categories of Padma Awards — Vibhushan, Bhushan, Shri" },
          { value: "9", label: "Indians who have won a Nobel Prize — a genuinely short, memorisable list" },
          { value: "2023", label: "Year the Vigyan Ratna, India's newest top science honour, was created" },
        ]}
      />

      <Callout type="trap" label="Read this before the rest of the topic">
        The <b>award structure</b> — tiers, rules, historical firsts — is stable and safe to memorise. The
        <b> list of most recent recipients</b> changes every year (Padma Awards are announced around
        Republic Day; Nobel Prizes each October) — refresh that part closer to your exam.
      </Callout>

      {/* 1. Bharat Ratna */}
      <SectionHeading num="01" title="Bharat Ratna — India's Highest Civilian Award" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Instituted on <b>2 January 1954</b> by President Dr. Rajendra Prasad</li>
        <li><b>Normally a maximum of 3</b> awarded per year — though exceptions have occurred (4 in 1999,
          5 in 2024)</li>
        <li><b>First recipients (1954):</b> Dr. Sarvepalli Radhakrishnan, C. V. Raman, and C. Rajagopalachari</li>
        <li><b>First woman recipient:</b> Indira Gandhi, in 1971</li>
        <li>The award was <b>suspended twice</b>: 1977–1980 and 1992–1995</li>
      </ul>
      <Callout type="exam" label="Exam focus">
        The Supreme Court ruled in <b>1996</b> that the Bharat Ratna and Padma Awards are <b>not
        "titles"</b> under Article 18 — recipients cannot use them as a prefix or suffix to their name (e.g.
        no "Bharat Ratna [Name]" on official documents). This is a frequently tested legal nuance.
      </Callout>

      {/* 2. Padma Awards */}
      <SectionHeading num="02" title="Padma Awards — Three Tiers" />
      <DataTable headers={["Tier", "Recognises"]} rows={[
        ["Padma Vibhushan", "Exceptional and distinguished service — the highest of the three"],
        ["Padma Bhushan", "Distinguished service of a high order"],
        ["Padma Shri", "Distinguished service in any field"],
      ]} />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Announced annually on the eve of <b>Republic Day (26 January)</b></li>
        <li>Cover fields including art, social work, public affairs, science, trade, medicine, literature,
          sports, and civil service</li>
        <li>The selection committee is chaired by the <b>Cabinet Secretary</b></li>
        <li><i>2025 snapshot:</i> 139 total recipients — 7 Padma Vibhushan, 19 Padma Bhushan, 113 Padma Shri</li>
      </ul>

      {/* 3. Gallantry awards */}
      <SectionHeading num="03" title="Gallantry Awards — Wartime & Peacetime" />
      <DataTable headers={["Rank", "Wartime award", "Peacetime equivalent"]} rows={[
        ["Highest", "Param Vir Chakra", "Ashoka Chakra"],
        ["2nd", "Maha Vir Chakra", "Kirti Chakra"],
        ["3rd", "Vir Chakra", "Shaurya Chakra"],
      ]} />
      <Callout type="mnemonic" label="Memory aid">
        Each wartime award has a direct peacetime counterpart at the same rank — memorise them as pairs
        rather than two separate lists of three.
      </Callout>

      {/* 4. Vigyan Puraskar */}
      <SectionHeading num="04" title="Rashtriya Vigyan Puraskar — India's Newest Science Honours" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        A genuinely new addition worth knowing specifically because it's recent — created in
        <b> 2023</b>, first awarded in <b>2024</b>.
      </p>
      <DataTable headers={["Award", "Recognises"]} rows={[
        ["Vigyan Ratna", "Lifetime achievement in science — often called India's answer to a science Nobel"],
        ["Vigyan Shri", "Distinguished contribution to science and technology"],
        ["Vigyan Yuva-Shanti Swarup Bhatnagar", "Outstanding young scientists"],
        ["Vigyan Team", "Team-based scientific achievement"],
      ]} />

      {/* 5. Nobel - Indians */}
      <SectionHeading num="05" title="Nobel Prize — Indian Laureates" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Short enough to memorise completely — a high-value list for direct recall questions.
      </p>
      <DataTable headers={["Laureate", "Category & Year", "For"]} rows={[
        ["Rabindranath Tagore", "Literature, 1913", "First Asian Nobel laureate of any kind"],
        ["C. V. Raman", "Physics, 1930", "The Raman Effect (scattering of light)"],
        ["Har Gobind Khorana", "Medicine, 1968 (shared)", "Research on the genetic code"],
        ["Mother Teresa", "Peace, 1979", "Humanitarian work in Kolkata"],
        ["Subrahmanyan Chandrasekhar", "Physics, 1983", "The Chandrasekhar Limit (stellar physics)"],
        ["Amartya Sen", "Economics, 1998", "Contributions to welfare economics"],
        ["Kailash Satyarthi", "Peace, 2014 (shared)", "Work against child labour"],
        ["Abhijit Banerjee", "Economics, 2019 (shared)", "Experimental approach to alleviating poverty"],
      ]} />
      <Callout type="trap" label="Common trap">
        <b>C. V. Raman</b> was the <b>first Asian to win a Nobel Prize in a scientific field</b> (Physics,
        1930) — distinct from Tagore, who was the first Asian Nobel laureate <i>overall</i>, in any category,
        17 years earlier.
      </Callout>

      {/* 6. Recent Nobel */}
      <SectionHeading num="06" title="Most Recent Nobel Prizes — Snapshot" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        Nobel Prizes are announced every October — the 2026 winners will not be known until after this page
        was written. Here are the most recently completed prizes at time of compilation:
      </p>
      <DataTable headers={["Category (2024)", "Winner(s)"]} rows={[
        ["Literature", "Han Kang"],
        ["Peace", "Nihon Hidankyo"],
        ["Physics", "John J. Hopfield & Geoffrey E. Hinton"],
        ["Chemistry", "David Baker, Demis Hassabis & John M. Jumper"],
        ["Medicine", "Victor Ambros & Gary Ruvkun"],
      ]} />
      <Callout type="exam" label="Exam focus">
        Check for the <b>2025 and 2026 Nobel Prize announcements</b> specifically in the weeks before your
        exam — since these are announced annually every October, whichever cycle is most recent by your exam
        date is the one SSC is most likely to test.
      </Callout>

      {/* 7. Film awards */}
      <SectionHeading num="07" title="National Film Awards" />
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        The <b>Dadasaheb Phalke Award</b> is India's highest award in cinema, given by the Government of
        India (Ministry of Information & Broadcasting) since 1969 — named after Dadasaheb Phalke, widely
        regarded as the "Father of Indian Cinema."
      </p>

      {/* 8. Quick revision */}
      <SectionHeading num="08" title="Quick Revision" />
      <DataTable headers={["Fact", "Answer"]} rows={[
        ["Bharat Ratna instituted", "1954"],
        ["Max Bharat Ratna per year (normal)", "3"],
        ["Bharat Ratna can be used as a title?", "No — SC ruled 1996"],
        ["First Asian Nobel laureate", "Rabindranath Tagore (Literature, 1913)"],
        ["First Asian Nobel laureate in science", "C. V. Raman (Physics, 1930)"],
        ["Highest wartime gallantry award", "Param Vir Chakra"],
        ["Highest peacetime gallantry award", "Ashoka Chakra"],
        ["India's highest film honour", "Dadasaheb Phalke Award"],
        ["India's highest science honour (new)", "Vigyan Ratna, since 2023"],
      ]} />

      {/* 9. Practice */}
      <SectionHeading num="09" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>
        Mostly built on the stable award structure and the fixed Indian Nobel laureate list — safe to rely
        on regardless of your exact exam date.
      </p>
      <MCQItem n={1} q="The Bharat Ratna, India's highest civilian award, was instituted in which year?"
        options={["1947", "1950", "1954", "1961"]}
        correctIndex={2} explanation="1954, by President Dr. Rajendra Prasad." />
      <MCQItem n={2} q="Normally, how many Bharat Ratna awards can be given in a single year?"
        options={["1", "2", "3", "5"]}
        correctIndex={2} explanation="A maximum of 3, though there have been rare exceptions." />
      <MCQItem n={3} q="Who was the first Indian to win a Nobel Prize?"
        options={["C. V. Raman", "Rabindranath Tagore", "Mother Teresa", "Amartya Sen"]}
        correctIndex={1} explanation="Rabindranath Tagore, Literature, 1913 — also the first Asian Nobel laureate of any kind." />
      <MCQItem n={4} q="C. V. Raman won the Nobel Prize in Physics for:"
        options={["The theory of relativity", "The Raman Effect (scattering of light)", "Discovery of the electron", "Nuclear fission research"]}
        correctIndex={1} explanation="The Raman Effect, in 1930." />
      <MCQItem n={5} q="India's highest gallantry award for wartime bravery is the:"
        options={["Ashoka Chakra", "Maha Vir Chakra", "Param Vir Chakra", "Kirti Chakra"]}
        correctIndex={2} explanation="Param Vir Chakra — Ashoka Chakra is its peacetime equivalent." />
      <MCQItem n={6} q="India's highest peacetime gallantry award is the:"
        options={["Vir Chakra", "Ashoka Chakra", "Shaurya Chakra", "Param Vir Chakra"]}
        correctIndex={1} explanation="Ashoka Chakra." />
      <MCQItem n={7} q="The three categories of the Padma Awards, from highest to lowest, are:"
        options={["Padma Shri, Padma Bhushan, Padma Vibhushan", "Padma Vibhushan, Padma Bhushan, Padma Shri", "Padma Bhushan, Padma Vibhushan, Padma Shri", "Padma Ratna, Padma Shri, Padma Bhushan"]}
        correctIndex={1} explanation="Padma Vibhushan (highest) → Padma Bhushan → Padma Shri." />
      <MCQItem n={8} q="Can a Bharat Ratna recipient officially use it as a prefix or suffix to their name?"
        options={["Yes, always", "No — the Supreme Court ruled this in 1996", "Only on official government documents", "Only after 10 years"]}
        correctIndex={1} explanation="No — the Supreme Court held in 1996 that it is not a 'title' under Article 18." />
      <MCQItem n={9} q="India's highest award in the field of cinema is the:"
        options={["National Film Award for Best Film", "Dadasaheb Phalke Award", "Filmfare Lifetime Achievement Award", "Padma Shri for Cinema"]}
        correctIndex={1} explanation="The Dadasaheb Phalke Award, given since 1969." />
      <MCQItem n={10} q="India's newest highest science honour, the Vigyan Ratna, was established in which year?"
        options={["2014", "2019", "2023", "2025"]}
        correctIndex={2} explanation="2023, first awarded in 2024, under the Rashtriya Vigyan Puraskar scheme." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Current Affairs. Award structures, historical firsts, and the Indian Nobel laureate list are stable exam facts. Recent recipient lists (Padma Awards, latest Nobel Prizes) change every cycle — check the most recent announcements against a current-affairs source in the weeks before your exam." />
    </div>
  );
}
