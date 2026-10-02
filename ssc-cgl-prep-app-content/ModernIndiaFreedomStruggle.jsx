import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function ModernIndiaFreedomStruggle() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="History"
        priority="HIGH"
        title="Modern India & Freedom Struggle"
        dek="From the first European trading posts to Independence — the single highest-yield History topic in the whole syllabus. British expansion, the 1857 Revolt, the Congress's Moderate-to-Extremist shift, and every major Gandhian movement through 1947."
        stats={[
          { value: "1757", label: "Battle of Plassey — the real starting point of British political power in India" },
          { value: "1885", label: "Indian National Congress founded" },
          { value: "1942", label: "Quit India Movement — 'Do or Die'" },
          { value: "1947", label: "Independence and Partition" },
        ]}
      />

      {/* 1. Europeans and battles */}
      <SectionHeading num="01" title="Advent of Europeans & the Key Battles" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        The Portuguese arrived first (Vasco da Gama landed at Calicut, 1498), followed by the Dutch,
        British, and French. The <b>British East India Company</b>, founded in 1600, set up its first
        Indian factory at Surat in 1613.
      </p>
      <DataTable headers={["Battle", "Year", "Significance"]} rows={[
        ["Battle of Plassey", "1757", "Robert Clive defeated Siraj-ud-Daulah (Nawab of Bengal), aided by the defection of Mir Jafar — widely seen as the true foundation of British political power in India"],
        ["Battle of Buxar", "1764", "British forces defeated the combined armies of Bengal, Awadh, and the Mughal Emperor — led directly to the Treaty of Allahabad (1765), granting the Company Diwani (revenue) rights over Bengal, Bihar, and Odisha"],
      ]} />
      <Callout type="trap" label="Common trap">
        Plassey and Buxar are often confused for which one "really" began British rule. <b>Plassey (1757)</b>
        gave the Company political leverage in Bengal; <b>Buxar (1764)</b> is what actually secured them the
        legal right to collect revenue — arguably the more decisive economic turning point.
      </Callout>

      {/* 2. Acts */}
      <SectionHeading num="02" title="Important British-Era Acts — Quick Reference" />
      <DataTable headers={["Act", "Year", "Key provision"]} rows={[
        ["Regulating Act", "1773", "First step toward government oversight of the Company; created the post of Governor-General of Bengal (Warren Hastings, first)"],
        ["Pitt's India Act", "1784", "Established dual control — a Board of Control (government) alongside the Company's Court of Directors"],
        ["Charter Act", "1833", "The Company became a purely administrative body; the Bengal Governor-General became Governor-General of India (Lord William Bentinck, first)"],
        ["Government of India Act", "1858", "After the 1857 Revolt, transferred power from the Company to the British Crown; the Governor-General also became Viceroy (Lord Canning, first)"],
        ["Indian Councils Act", "1909", "The Morley-Minto Reforms — introduced separate electorates for Muslims"],
        ["Government of India Act", "1919", "The Montagu-Chelmsford Reforms — introduced 'Dyarchy' (dual government) in the provinces"],
        ["Government of India Act", "1935", "Introduced provincial autonomy; later formed the structural basis for both India's and Pakistan's constitutions"],
      ]} />

      {/* 3. 1857 revolt */}
      <SectionHeading num="03" title="The Revolt of 1857" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Began on <b>10 May 1857 at Meerut</b>, sparked by the greased-cartridge controversy among sepoys</li>
        <li>Key leaders: <b>Bahadur Shah II</b> (Delhi, nominal leader), <b>Rani Lakshmibai</b> (Jhansi),
          <b> Nana Sahib &amp; Tantia Tope</b> (Kanpur), <b>Begum Hazrat Mahal</b> (Awadh)</li>
        <li>After being suppressed, it led directly to the <b>end of Company rule</b> and the transfer of
          power to the British Crown (GoI Act, 1858)</li>
        <li>Known by different names depending on perspective: the British called it the <b>"Sepoy
          Mutiny"</b>; V. D. Savarkar termed it India's <b>"First War of Independence"</b></li>
      </ul>

      {/* 4. INC & moderates */}
      <SectionHeading num="04" title="INC Formation &amp; the Moderate Phase (1885–1905)" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>The <b>Indian National Congress</b> was founded in <b>1885</b> by <b>A. O. Hume</b>, a retired
          British civil servant; its first session was held in Bombay, presided over by
          <b> W. C. Bonnerjee</b></li>
        <li><b>Dadabhai Naoroji</b> — the "Grand Old Man of India," first Indian elected to the British
          House of Commons, and author of the influential <b>"Drain of Wealth"</b> theory</li>
        <li><b>Gopal Krishna Gokhale</b> — a leading Moderate and Gandhi's political mentor</li>
        <li>The Moderates favoured <b>constitutional methods</b> — petitions, resolutions, and dialogue —
          over direct agitation</li>
      </ul>

      {/* 5. Partition of Bengal & extremists */}
      <SectionHeading num="05" title="Partition of Bengal &amp; the Extremist Phase (1905–1918)" />
      <Accordion chip="1905" title="Partition of Bengal &amp; the Swadeshi Movement" defaultOpen>
        <p>
          Viceroy <b>Lord Curzon</b> partitioned Bengal in 1905, officially for administrative convenience
          but widely seen as a divide-and-rule tactic along communal lines. It triggered the
          <b> Swadeshi Movement</b> — a boycott of British goods and promotion of Indian-made products —
          and mass protest that eventually forced the partition's annulment in 1911.
        </p>
      </Accordion>
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>The <b>"Lal-Bal-Pal"</b> trio — Bal Gangadhar Tilak ("Swaraj is my birthright, and I shall have
          it"), Bipin Chandra Pal, and Lala Lajpat Rai — led the more assertive Extremist wing</li>
        <li>The <b>Surat Split (1907)</b> formally divided Congress into Moderate and Extremist camps</li>
        <li>The <b>All-India Muslim League</b> was founded in Dhaka in 1906</li>
        <li>The <b>Lucknow Pact (1916)</b> temporarily reunited Congress and the Muslim League behind a
          joint demand for self-government</li>
      </ul>

      {/* 6. Gandhi early movements */}
      <SectionHeading num="06" title="Gandhi's Early Movements &amp; Jallianwala Bagh" />
      <DataTable headers={["Movement", "Year", "Note"]} rows={[
        ["Champaran Satyagraha", "1917", "Gandhi's first movement in India, on behalf of indigo farmers in Bihar"],
        ["Kheda Satyagraha", "1918", "A peasant movement in Gujarat"],
        ["Ahmedabad Mill Strike", "1918", "Gandhi's first major labour movement"],
      ]} />
      <Callout type="mnemonic" label="Jallianwala Bagh Massacre, 13 April 1919">
        General Dyer ordered troops to fire on an unarmed, peaceful gathering in Amritsar, killing hundreds.
        The massacre triggered nationwide outrage — <b>Rabindranath Tagore renounced his knighthood</b> in
        protest, and it became a defining turning point that hardened opposition to British rule.
      </Callout>

      {/* 7. Non-cooperation */}
      <SectionHeading num="07" title="Non-Cooperation Movement &amp; the Khilafat Alliance" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Launched in <b>1920</b> as Gandhi's first genuinely mass movement, deliberately combined with
          the <b>Khilafat Movement</b> (a Muslim grievance over the Ottoman Caliphate) to build
          Hindu-Muslim unity</li>
        <li>Withdrawn in <b>February 1922</b> after the <b>Chauri Chaura incident</b>, where a violent mob
          burned a police station — Gandhi called off the movement, insisting on strict non-violence</li>
      </ul>
      <Callout type="exam" label="Exam focus">
        The <b>Simon Commission (1927)</b>, formed to review constitutional reforms, was boycotted
        nationwide with cries of <b>"Simon Go Back"</b> because it had no Indian members at all.
        <b> Lala Lajpat Rai</b> died from injuries sustained during a police lathi-charge on protesters in 1928.
      </Callout>

      {/* 8. Civil disobedience */}
      <SectionHeading num="08" title="Civil Disobedience Movement — Dandi March to Poona Pact" />
      <DataTable headers={["Event", "Year", "Detail"]} rows={[
        ["Purna Swaraj declaration", "1929 (Lahore session)", "INC formally declared complete independence as its goal; 26 January 1930 was observed as 'Independence Day'"],
        ["Dandi March (Salt Satyagraha)", "12 Mar–6 Apr 1930", "Gandhi walked from Sabarmati Ashram to Dandi and broke the salt law, launching the Civil Disobedience Movement"],
        ["Gandhi-Irwin Pact", "1931", "CDM temporarily suspended; Gandhi agreed to attend the Second Round Table Conference"],
        ["Poona Pact", "1932", "Agreement between Gandhi and B. R. Ambedkar, replacing separate electorates for the Depressed Classes with reserved seats in a joint electorate"],
      ]} />

      {/* 9. Quit India */}
      <SectionHeading num="09" title="Quit India Movement — 'Do or Die'" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Launched in <b>August 1942</b>, after the failure of the <b>Cripps Mission</b> earlier that year</li>
        <li>Gandhi's call to <b>"Do or Die"</b> triggered the most intense phase of the freedom struggle —
          most senior leaders were arrested almost immediately</li>
        <li>Underground resistance was led by figures like <b>Jayaprakash Narayan</b> and
          <b> Ram Manohar Lohia</b>; <b>Aruna Asaf Ali</b> famously hoisted the flag at Gowalia Tank, Bombay</li>
      </ul>

      {/* 10. Revolutionaries */}
      <SectionHeading num="10" title="Revolutionary Movements — Bhagat Singh &amp; the INA" />
      <Accordion chip="Bhagat Singh" title="Bhagat Singh, Rajguru &amp; Sukhdev" defaultOpen>
        <p>
          Executed in <b>1931</b> for the killing of British officer Saunders (in retaliation for Lala
          Lajpat Rai's death) and the 1929 bombing of the Central Legislative Assembly. Fellow revolutionary
          <b> Chandrashekhar Azad</b> died in a gun battle with police at Allahabad's Alfred Park in 1931.
        </p>
      </Accordion>
      <Accordion chip="Subhas Chandra Bose" title="Bose &amp; the Indian National Army (INA)">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Served as INC President in both 1938 and 1939, before resigning over strategic differences with Gandhi</li>
          <li>Escaped India and, with Japanese support in Southeast Asia, led the
            <b> Indian National Army (Azad Hind Fauj)</b></li>
          <li>Famous for the slogans <b>"Jai Hind"</b> and <b>"Give me blood, and I will give you freedom"</b></li>
          <li>The post-war <b>INA Trials at the Red Fort (1945–46)</b> galvanised nationalist sentiment
            across the country, even though the INA itself had not succeeded militarily</li>
          <li>Bose's death in a 1945 plane crash in Taiwan remains a historically debated topic</li>
        </ul>
      </Accordion>

      {/* 11. Independence */}
      <SectionHeading num="11" title="Independence &amp; Partition (1947)" />
      <DataTable headers={["Event", "Year", "Detail"]} rows={[
        ["Cabinet Mission Plan", "1946", "Proposed a federal structure; ultimately rejected, but paved the way for the Constituent Assembly"],
        ["Direct Action Day", "16 Aug 1946", "Called by the Muslim League; led to large-scale communal violence in Calcutta"],
        ["Mountbatten Plan", "Jun 1947", "The formal plan for Partition, accepted by both Congress and the Muslim League"],
        ["Indian Independence Act", "1947", "The British Parliament Act granting independence to India and Pakistan"],
        ["Independence Day", "15 Aug 1947", "Nehru's 'Tryst with Destiny' speech; Lord Mountbatten became independent India's first Governor-General"],
      ]} />
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        Partition triggered one of history's largest mass migrations, with widespread communal violence.
        The India-Pakistan border itself was drawn by the <b>Radcliffe Line</b> — covered in detail in the
        <b> Indian Political Geography</b> topic.
      </p>

      {/* 12. Quick revision */}
      <SectionHeading num="12" title="Quick Revision — Timeline Cheat Sheet" />
      <DataTable headers={["Event", "Year"]} rows={[
        ["Battle of Plassey", "1757"],
        ["Battle of Buxar", "1764"],
        ["Revolt of 1857", "1857"],
        ["INC founded", "1885"],
        ["Partition of Bengal", "1905"],
        ["Jallianwala Bagh Massacre", "1919"],
        ["Non-Cooperation Movement", "1920–1922"],
        ["Dandi March", "1930"],
        ["Quit India Movement", "1942"],
        ["Independence &amp; Partition", "1947"],
      ]} />

      {/* 13. Practice */}
      <SectionHeading num="13" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="The Battle of Plassey (1757) was fought between Robert Clive and:"
        options={["Shah Alam II", "Siraj-ud-Daulah", "Mir Qasim", "Tipu Sultan"]}
        correctIndex={1} explanation="Siraj-ud-Daulah, the Nawab of Bengal, defeated with the help of Mir Jafar's defection." />
      <MCQItem n={2} q="The Treaty of Allahabad (1765), granting Diwani rights to the East India Company, followed which battle?"
        options={["Battle of Plassey", "Battle of Buxar", "Battle of Panipat", "Battle of Wandiwash"]}
        correctIndex={1} explanation="The Battle of Buxar, 1764." />
      <MCQItem n={3} q="The Revolt of 1857 began at:"
        options={["Delhi", "Meerut", "Kanpur", "Lucknow"]}
        correctIndex={1} explanation="Meerut, on 10 May 1857." />
      <MCQItem n={4} q="Who founded the Indian National Congress in 1885?"
        options={["Dadabhai Naoroji", "A. O. Hume", "W. C. Bonnerjee", "Surendranath Banerjee"]}
        correctIndex={1} explanation="A. O. Hume, a retired British civil servant." />
      <MCQItem n={5} q="The Non-Cooperation Movement was withdrawn following which incident?"
        options={["Jallianwala Bagh Massacre", "Chauri Chaura incident", "Partition of Bengal", "Simon Commission protests"]}
        correctIndex={1} explanation="The Chauri Chaura incident, February 1922." />
      <MCQItem n={6} q="The Dandi March, launching the Civil Disobedience Movement, was primarily a protest against:"
        options={["The salt tax/law", "The Rowlatt Act", "Separate electorates", "The partition of Bengal"]}
        correctIndex={0} explanation="The British monopoly on salt production and the salt tax." />
      <MCQItem n={7} q="The Poona Pact (1932) was an agreement between Gandhi and:"
        options={["Jinnah", "B. R. Ambedkar", "Subhas Chandra Bose", "Tilak"]}
        correctIndex={1} explanation="B. R. Ambedkar, regarding representation for the Depressed Classes." />
      <MCQItem n={8} q="The Quit India Movement was launched in which year, after the failure of which mission?"
        options={["1940, Wardha", "1942, Cripps Mission", "1945, Wavell Plan", "1946, Cabinet Mission"]}
        correctIndex={1} explanation="1942, after the failure of the Cripps Mission." />
      <MCQItem n={9} q="Subhas Chandra Bose led which organisation, formed with Japanese support during WWII?"
        options={["Forward Bloc only", "Indian National Army (INA)", "Ghadar Party", "Hindustan Socialist Republican Association"]}
        correctIndex={1} explanation="The Indian National Army (Azad Hind Fauj)." />
      <MCQItem n={10} q="India's Independence Day, 15 August 1947, featured Nehru's famous speech titled:"
        options={["Long Walk to Freedom", "Tryst with Destiny", "Quit India", "Do or Die"]}
        correctIndex={1} explanation="'Tryst with Destiny.'" />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · History. Dates, events, and key figures are compiled from standard modern Indian history references. This is the single densest History topic for SSC — pairing it with a timeline revision the week before your exam is especially worthwhile." />
    </div>
  );
}
