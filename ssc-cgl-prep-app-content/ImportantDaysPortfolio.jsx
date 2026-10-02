import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function ImportantDaysPortfolio() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Current Affairs"
        priority={null}
        title="Important Days & Portfolio"
        dek="National and international observance days — genuinely one of the most stable topics in Current Affairs, since the dates themselves don't change year to year, only the yearly theme attached to some of them. Paired with a quick pointer on how 'portfolio' questions work."
        stats={[
          { value: "365", label: "Fixed calendar dates — this topic doesn't shift the way appointments do" },
          { value: "5 Sep vs 5 Oct", label: "India's Teachers' Day vs World Teachers' Day — a classic trap" },
          { value: "21 June", label: "International Yoga Day — proposed by India, chosen for the Summer Solstice" },
          { value: "1986", label: "Year National Science Day was established, marking the Raman Effect" },
        ]}
      />

      <Callout type="exam" label="Good news for this topic">
        Unlike most of Current Affairs, the <b>dates themselves are stable</b> — 26 January will always be
        Republic Day. What changes year to year is only the <b>yearly theme</b> attached to some
        international days, which is a much smaller thing to keep updated than an entire fact.
      </Callout>

      {/* 1. National days Jan-Jun */}
      <SectionHeading num="01" title="National Days of India — January to June" />
      <DataTable headers={["Date", "Observance", "Marks"]} rows={[
        ["12 January", "National Youth Day", "Swami Vivekananda's birth anniversary"],
        ["15 January", "Army Day", "Establishment of the Indian Army's first Indian Commander-in-Chief (1949)"],
        ["25 January", "National Voters' Day", "Foundation day of the Election Commission of India (1950)"],
        ["26 January", "Republic Day", "The Constitution of India came into force (1950)"],
        ["30 January", "Martyrs' Day (Shaheed Diwas)", "Mahatma Gandhi's assassination anniversary (1948)"],
        ["28 February", "National Science Day", "C. V. Raman's discovery of the Raman Effect (28 Feb 1928)"],
        ["11 May", "National Technology Day", "The Pokhran-II nuclear tests (1998)"],
        ["21 May", "Anti-Terrorism Day", "Rajiv Gandhi's assassination anniversary (1991)"],
      ]} />

      {/* 2. National days Jul-Dec */}
      <SectionHeading num="02" title="National Days of India — July to December" />
      <DataTable headers={["Date", "Observance", "Marks"]} rows={[
        ["1 July", "National Doctors' Day", "Dr. B. C. Roy's birth and death anniversary (same date)"],
        ["26 July", "Kargil Vijay Diwas", "India's victory in the 1999 Kargil War"],
        ["23 August", "National Space Day", "Chandrayaan-3's successful Moon landing (2023)"],
        ["29 August", "National Sports Day", "Major Dhyan Chand's birth anniversary"],
        ["5 September", "Teachers' Day", "Dr. Sarvepalli Radhakrishnan's birth anniversary"],
        ["14 September", "Hindi Diwas", "Hindi was adopted as an official language by the Constituent Assembly (1949)"],
        ["2 October", "Gandhi Jayanti", "Mahatma Gandhi's birth anniversary"],
        ["8 October", "Indian Air Force Day", "Founding of the Indian Air Force (1932)"],
        ["31 October", "National Unity Day", "Sardar Vallabhbhai Patel's birth anniversary"],
        ["14 November", "Children's Day", "Jawaharlal Nehru's birth anniversary"],
        ["26 November", "Constitution Day", "The Constitution of India was adopted (1949)"],
        ["4 December", "Navy Day", "Commemorates Operation Trident in the 1971 Indo-Pak war"],
        ["23 December", "Kisan Diwas (Farmers' Day)", "Chaudhary Charan Singh's birth anniversary"],
      ]} />

      {/* 3. International days */}
      <SectionHeading num="03" title="Key International / UN Observance Days" />
      <DataTable headers={["Date", "Observance"]} rows={[
        ["4 February", "World Cancer Day"],
        ["8 March", "International Women's Day"],
        ["21 March", "International Day of Forests"],
        ["22 March", "World Water Day"],
        ["7 April", "World Health Day (marks WHO's founding, 1948)"],
        ["1 May", "International Labour Day"],
        ["5 June", "World Environment Day (established 1972)"],
        ["11 July", "World Population Day"],
        ["8 September", "International Literacy Day"],
        ["21 September", "International Day of Peace"],
        ["27 September", "World Tourism Day"],
        ["2 October", "International Day of Non-Violence (also Gandhi Jayanti)"],
        ["5 October", "World Teachers' Day (UNESCO)"],
        ["16 October", "World Food Day (marks FAO's founding)"],
        ["24 October", "United Nations Day"],
        ["20 November", "Universal Children's Day"],
        ["1 December", "World AIDS Day"],
        ["10 December", "Human Rights Day"],
      ]} />

      {/* 4. Yoga day */}
      <SectionHeading num="04" title="International Yoga Day — Worth Its Own Note" />
      <Accordion chip="21 June" title="Why This Date Was Chosen" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Proposed by <b>PM Narendra Modi</b> in his 2014 UN General Assembly address</li>
          <li>The UN adopted the resolution, and the <b>first International Day of Yoga was observed on
            21 June 2015</b></li>
          <li><b>21 June</b> was specifically chosen because it is the <b>Summer Solstice</b> — the longest
            day of the year in the Northern Hemisphere, symbolically significant in many yoga traditions</li>
        </ul>
      </Accordion>

      {/* 5. Traps */}
      <SectionHeading num="05" title="The Classic 'Two Similar Days' Traps" />
      <DataTable headers={["India's version", "International/UN version"]} rows={[
        ["Teachers' Day — 5 September (Dr. Radhakrishnan)", "World Teachers' Day — 5 October (UNESCO)"],
        ["Children's Day — 14 November (Nehru's birthday)", "Universal Children's Day — 20 November"],
        ["Gandhi Jayanti — 2 October", "International Day of Non-Violence — also 2 October (same date, UN honouring Gandhi)"],
      ]} />
      <Callout type="trap" label="Common trap">
        Teachers' Day and Children's Day both have <b>two different dates</b> — one for India's national
        observance, one for the international/UN equivalent, roughly a month apart in each case. This pairing
        is one of the most reliably tested traps in the whole "Important Days" topic.
      </Callout>

      {/* 6. Portfolio */}
      <SectionHeading num="06" title="Portfolio — Quick Cross-Reference" />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        "Portfolio" questions ask who currently holds a specific ministry or constitutional post — this
        overlaps directly with the <b>National Events & Appointments</b> topic, which carries the full,
        dated snapshot of office-holders.
      </p>
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>The <b>Prime Minister</b> allocates ministerial portfolios (subjects/departments) among the
          Council of Ministers</li>
        <li>One minister can hold <b>multiple portfolios</b> simultaneously — watch news for any reshuffle
          that moves a portfolio from one minister to another</li>
        <li>For the current holder of any specific post, refer to the dated snapshot in
          <b> National Events & Appointments</b>, and re-verify against PIB closer to your exam</li>
      </ul>

      {/* 7. Quick revision */}
      <SectionHeading num="07" title="Quick Revision" />
      <DataTable headers={["Day", "Date"]} rows={[
        ["Republic Day", "26 January"],
        ["National Science Day", "28 February"],
        ["National Technology Day", "11 May"],
        ["International Yoga Day", "21 June"],
        ["Teachers' Day (India)", "5 September"],
        ["Hindi Diwas", "14 September"],
        ["Gandhi Jayanti", "2 October"],
        ["Children's Day (India)", "14 November"],
        ["Constitution Day", "26 November"],
        ["Human Rights Day", "10 December"],
      ]} />

      {/* 8. Practice */}
      <SectionHeading num="08" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="Republic Day is observed on:"
        options={["15 August", "26 January", "2 October", "26 November"]}
        correctIndex={1} explanation="26 January — the Constitution came into force on this date in 1950." />
      <MCQItem n={2} q="National Science Day commemorates:"
        options={["The launch of ISRO", "C. V. Raman's discovery of the Raman Effect", "The Pokhran tests", "Einstein's theory of relativity"]}
        correctIndex={1} explanation="C. V. Raman's discovery of the Raman Effect, on 28 February 1928." />
      <MCQItem n={3} q="National Technology Day, 11 May, commemorates:"
        options={["The first satellite launch", "The Pokhran-II nuclear tests (1998)", "The founding of DRDO", "Independence Day"]}
        correctIndex={1} explanation="The Pokhran-II nuclear tests conducted in 1998." />
      <MCQItem n={4} q="International Day of Yoga is observed on 21 June because that date is the:"
        options={["Winter Solstice", "Summer Solstice", "Spring Equinox", "Autumn Equinox"]}
        correctIndex={1} explanation="The Summer Solstice — the longest day of the year in the Northern Hemisphere." />
      <MCQItem n={5} q="India's Teachers' Day, 5 September, marks the birth anniversary of:"
        options={["Jawaharlal Nehru", "Dr. Sarvepalli Radhakrishnan", "Dr. B. C. Roy", "Rabindranath Tagore"]}
        correctIndex={1} explanation="Dr. Sarvepalli Radhakrishnan — World Teachers' Day (UNESCO) falls a month later, on 5 October." />
      <MCQItem n={6} q="India's Children's Day, 14 November, marks the birthday of:"
        options={["Mahatma Gandhi", "Sardar Patel", "Jawaharlal Nehru", "Dr. Radhakrishnan"]}
        correctIndex={2} explanation="Jawaharlal Nehru — Universal Children's Day (UN) is a separate date, 20 November." />
      <MCQItem n={7} q="Hindi Diwas, 14 September, marks:"
        options={["The birth of Munshi Premchand", "Hindi's adoption as an official language by the Constituent Assembly (1949)", "The founding of the Sahitya Akademi", "India's independence from British rule"]}
        correctIndex={1} explanation="The Constituent Assembly's adoption of Hindi as an official language, in 1949." />
      <MCQItem n={8} q="Kargil Vijay Diwas is observed on:"
        options={["15 August", "26 July", "3 December", "16 December"]}
        correctIndex={1} explanation="26 July, marking victory in the 1999 Kargil War." />
      <MCQItem n={9} q="World Health Day, 7 April, marks:"
        options={["The discovery of penicillin", "The founding of the WHO (1948)", "The first vaccine", "World Cancer Day's origin"]}
        correctIndex={1} explanation="The founding of the World Health Organization in 1948." />
      <MCQItem n={10} q="Human Rights Day, 10 December, marks:"
        options={["The founding of the United Nations", "The UN's adoption of the Universal Declaration of Human Rights (1948)", "India's Constitution Day", "The end of World War II"]}
        correctIndex={1} explanation="The UN General Assembly's adoption of the Universal Declaration of Human Rights, in 1948." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Current Affairs. Observance dates themselves are stable and safe to memorise outright — only the yearly theme attached to some international days changes, and that level of detail is rarely tested directly. For 'portfolio' (who-holds-which-post) questions, cross-check the National Events & Appointments topic for the latest snapshot." />
    </div>
  );
}
