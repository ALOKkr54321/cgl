import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function IndiaNeighbouringCountries() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Static General Knowledge"
        priority="HIGH"
        title="India & Neighbouring Countries"
        dek="India's official national symbols — including one that famously doesn't exist the way most people assume — plus the currency, language, and one standout fact for each of India's neighbours. Capitals and government types are covered in the Geography section; this page fills in what's missing."
        stats={[
          { value: "0", label: "Officially declared 'national sport' of India — a genuine trick fact" },
          { value: "1950", label: "Year the Lion Capital of Ashoka became India's National Emblem" },
          { value: "1", label: "Country in the world with a non-quadrilateral national flag — Nepal" },
          { value: "GNH", label: "Bhutan measures progress using Gross National Happiness, not just GDP" },
        ]}
      />

      <Callout type="exam" label="Before you start">
        Country capitals and government types for all of India's neighbours are covered in the
        <b> World Geography</b> topic (Geography section) — this page focuses on national symbols and the
        distinctive facts that topic didn't cover, to avoid repeating the same table twice.
      </Callout>

      {/* 1. National symbols */}
      <SectionHeading num="01" title="India — National Symbols" />
      <DataTable headers={["Symbol", "What it is"]} rows={[
        ["National Flag", "Tiranga — adopted 22 July 1947; saffron (courage), white (peace, with the 24-spoke Ashoka Chakra), green (growth)"],
        ["National Anthem", "Jana Gana Mana — written by Rabindranath Tagore, adopted 24 January 1950"],
        ["National Song", "Vande Mataram — written by Bankim Chandra Chattopadhyay, from his novel Anandamath (1882)"],
        ["National Emblem", "The Lion Capital of Ashoka at Sarnath — adopted 26 January 1950; motto 'Satyameva Jayate' (Truth alone triumphs), from the Mundaka Upanishad"],
        ["National Animal", "Royal Bengal Tiger (replaced the lion in 1972)"],
        ["National Bird", "Indian Peacock"],
        ["National Aquatic Animal", "Ganges River Dolphin"],
        ["National Heritage Animal", "Elephant"],
        ["National Flower", "Lotus"],
        ["National Tree", "Banyan Tree"],
        ["National Fruit", "Mango"],
        ["National River", "Ganga (declared in 2008)"],
        ["National Currency Symbol", "₹ — designed by D. Udaya Kumar, adopted 2010"],
      ]} />

      {/* 2. National sport trap */}
      <SectionHeading num="02" title='The "National Sport" Myth' />
      <Callout type="trap" label="A genuinely common misconception">
        Most people assume <b>Hockey</b> is India's official national sport. It is <b>not</b> — the
        Government of India clarified in a 2012 RTI response that <b>no sport has ever been officially
        notified as India's national sport</b>. Hockey is only <i>popularly</i> associated with the title,
        largely due to India's historic Olympic dominance in the sport. If an exam question asks for the
        "official" national sport, the technically correct answer is that none exists.
      </Callout>

      {/* 3. Neighbours currency/language */}
      <SectionHeading num="03" title="Neighbouring Countries — Currency & Official Language" />
      <DataTable headers={["Country", "Currency", "Official language"]} rows={[
        ["Pakistan", "Pakistani Rupee", "Urdu"],
        ["China", "Renminbi (Yuan)", "Mandarin Chinese"],
        ["Nepal", "Nepalese Rupee", "Nepali"],
        ["Bhutan", "Ngultrum (pegged to the Indian Rupee)", "Dzongkha"],
        ["Bangladesh", "Taka", "Bengali"],
        ["Myanmar", "Kyat", "Burmese"],
        ["Afghanistan", "Afghani", "Pashto & Dari"],
        ["Sri Lanka (maritime)", "Sri Lankan Rupee", "Sinhala & Tamil"],
        ["Maldives (maritime)", "Maldivian Rufiyaa", "Dhivehi"],
      ]} />

      {/* 4. Distinctive facts */}
      <SectionHeading num="04" title="One Standout Fact Per Neighbour" />
      <Accordion chip="Nepal" title="The World's Only Non-Quadrilateral National Flag" defaultOpen>
        <p>
          Nepal's flag is made of two overlapping triangular pennants, stacked vertically — making it the
          <b> only national flag in the world that isn't a rectangle or square</b>. The two shapes are said
          to represent the Himalayan mountains and the country's two major religions, Hinduism and Buddhism.
        </p>
      </Accordion>
      <Accordion chip="Bhutan" title="Gross National Happiness, Not Just GDP">
        <p>
          Bhutan is famous for prioritising <b>Gross National Happiness (GNH)</b> as a guiding development
          philosophy alongside conventional economic growth — a distinctive policy stance frequently
          referenced in comparative-economics questions.
        </p>
      </Accordion>
      <Accordion chip="Maldives" title="The World's Lowest-Lying Country">
        <p>
          The Maldives has an average ground level of only about <b>1.5 metres above sea level</b>, making
          it the <b>lowest-lying country in the world</b> — and one of the nations most vulnerable to
          rising sea levels from climate change.
        </p>
      </Accordion>
      <Accordion chip="China" title="Population & Border Scale">
        <p>
          China shares its longest neighbouring-country border relationship with India along the
          <b> Line of Actual Control (LAC)</b> — still not a formally demarcated international boundary,
          unlike most of India's other borders.
        </p>
      </Accordion>
      <Accordion chip="Bangladesh" title="Formed With India's Direct Support">
        <p>
          Bangladesh became independent from Pakistan in <b>1971</b>, following the Bangladesh Liberation
          War — India played a direct and decisive military role in that conflict, a historical tie that
          still shapes bilateral relations today.
        </p>
      </Accordion>

      {/* 5. Quick revision */}
      <SectionHeading num="05" title="Quick Revision" />
      <DataTable headers={["Fact", "Answer"]} rows={[
        ["National Emblem's motto", "Satyameva Jayate"], 
        ["Source of the National Emblem", "Lion Capital of Ashoka, Sarnath"],
        ["Writer of the National Anthem", "Rabindranath Tagore"],
        ["Writer of the National Song", "Bankim Chandra Chattopadhyay"],
        ["India's officially declared national sport", "None — a common misconception (Hockey is only popularly associated)"],
        ["National River (declared 2008)", "Ganga"],
        ["Country with the world's only non-rectangular flag", "Nepal"],
        ["Country measuring 'Gross National Happiness'", "Bhutan"],
        ["Bangladesh's independence year", "1971"],
      ]} />

      {/* 6. Practice */}
      <SectionHeading num="06" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="The motto inscribed on India's National Emblem, 'Satyameva Jayate,' is taken from which text?"
        options={["The Bhagavad Gita", "The Mundaka Upanishad", "The Rigveda", "The Arthashastra"]}
        correctIndex={1} explanation="The Mundaka Upanishad." />
      <MCQItem n={2} q="India's National Emblem is adapted from:"
        options={["The Ashoka Pillar at Sanchi", "The Lion Capital of Ashoka at Sarnath", "The Konark Sun Temple", "The Red Fort's main gate"]}
        correctIndex={1} explanation="The Lion Capital of Ashoka at Sarnath, adopted on 26 January 1950." />
      <MCQItem n={3} q="India's National Anthem, Jana Gana Mana, was written by:"
        options={["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Sarojini Naidu", "Muhammad Iqbal"]}
        correctIndex={1} explanation="Rabindranath Tagore." />
      <MCQItem n={4} q="Vande Mataram, India's National Song, was taken from which novel?"
        options={["Godaan", "Anandamath", "Gora", "Kapalkundala"]}
        correctIndex={1} explanation="Anandamath, by Bankim Chandra Chattopadhyay (1882)." />
      <MCQItem n={5} q="Which of the following is India's officially declared national sport?"
        options={["Hockey", "Cricket", "Kabaddi", "None has been officially declared"]}
        correctIndex={3} explanation="None — the Government clarified via a 2012 RTI response that no sport is officially notified as the national sport." />
      <MCQItem n={6} q="India's National River, declared in 2008, is the:"
        options={["Yamuna", "Ganga", "Brahmaputra", "Godavari"]}
        correctIndex={1} explanation="The Ganga." />
      <MCQItem n={7} q="Which neighbouring country has the only national flag in the world that is not rectangular?"
        options={["Bhutan", "Nepal", "Bangladesh", "Sri Lanka"]}
        correctIndex={1} explanation="Nepal — its flag is made of two stacked triangular pennants." />
      <MCQItem n={8} q="Bhutan is well known for prioritising which alternative measure of national progress?"
        options={["Human Development Index only", "Gross National Happiness (GNH)", "Ease of Doing Business ranking", "Per capita carbon footprint"]}
        correctIndex={1} explanation="Gross National Happiness." />
      <MCQItem n={9} q="Which country is considered the world's lowest-lying country by average elevation?"
        options={["Bangladesh", "Sri Lanka", "Maldives", "Netherlands"]}
        correctIndex={2} explanation="The Maldives, at roughly 1.5 metres average elevation above sea level." />
      <MCQItem n={10} q="Bangladesh gained independence from Pakistan in which year, with India's direct support?"
        options={["1965", "1971", "1975", "1980"]}
        correctIndex={1} explanation="1971, following the Bangladesh Liberation War." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Static General Knowledge. National symbol facts and the historical/cultural notes on neighbouring countries are stable, long-standing facts. Capital cities and government types for these same countries are covered in the World Geography topic — study both together for a complete picture." />
    </div>
  );
}
