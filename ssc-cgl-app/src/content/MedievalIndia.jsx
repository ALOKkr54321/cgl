import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function MedievalIndia() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="History"
        priority="HIGH"
        title="Medieval India"
        dek="Five Delhi Sultanate dynasties, six major Mughal emperors, the Vijayanagara Empire in the south, and the Bhakti-Sufi movements that ran alongside all of it — the densest, highest-yield stretch of Indian history for SSC."
        stats={[
          { value: "5", label: "Dynasties of the Delhi Sultanate, 1206–1526" },
          { value: "1526", label: "First Battle of Panipat — Babur founds the Mughal Empire" },
          { value: "1565", label: "Battle of Talikota ends Vijayanagara's dominance" },
          { value: "2", label: "Parallel devotional movements — Bhakti (Hindu) and Sufi (Islamic)" },
        ]}
      />

      {/* 1. Delhi Sultanate overview */}
      <SectionHeading num="01" title="The Delhi Sultanate — Five Dynasties" />
      <DataTable headers={["Dynasty", "Period", "Key ruler(s)"]} rows={[
        ["Slave (Mamluk)", "1206–1290", "Qutb-ud-din Aibak, Iltutmish, Razia Sultana, Balban"],
        ["Khilji", "1290–1320", "Jalaluddin Khilji, Alauddin Khilji"],
        ["Tughlaq", "1320–1414", "Ghiyasuddin Tughlaq, Muhammad bin Tughlaq, Firoz Shah Tughlaq"],
        ["Sayyid", "1414–1451", "Khizr Khan"],
        ["Lodi", "1451–1526", "Bahlul Lodi, Sikandar Lodi, Ibrahim Lodi"],
      ]} />

      {/* 2. Slave dynasty */}
      <SectionHeading num="02" title="Slave Dynasty — Aibak, Iltutmish & Razia Sultana" />
      <Accordion chip="1206–1290" title="Key Rulers &amp; Achievements" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Qutb-ud-din Aibak</b> — founded the dynasty; began construction of the Qutub Minar</li>
          <li><b>Iltutmish</b> — consolidated the Sultanate; introduced the silver Tanka and copper Jital
            coins; completed the Qutub Minar; organised the "Chalisa," a group of forty Turkic nobles</li>
          <li><b>Razia Sultana</b> — Iltutmish's daughter and the <b>first and only woman ruler</b> of the
            Delhi Sultanate (r. 1236–1240)</li>
          <li><b>Balban</b> — known for his "Blood and Iron" policy; introduced Persian court customs like
            Sijda (prostration) to assert royal authority over the nobility</li>
        </ul>
      </Accordion>

      {/* 3. Khilji and Tughlaq */}
      <SectionHeading num="03" title="Khilji &amp; Tughlaq Dynasties — Reform and Ambition" />
      <Accordion chip="Khilji" title="Alauddin Khilji's Market Reforms">
        <p>
          Alauddin Khilji imposed strict <b>price controls on essential commodities</b> through a dedicated
          market-control department, primarily to sustain a large standing army economically. He also
          conquered much of the Deccan through his general <b>Malik Kafur</b> and successfully repelled
          repeated Mongol invasions.
        </p>
      </Accordion>
      <Accordion chip="Tughlaq" title="Muhammad bin Tughlaq's Bold, Failed Experiments">
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Shifted the capital from Delhi to <b>Daulatabad (Devagiri)</b> and back — a logistically
            disastrous decision</li>
          <li>Introduced <b>token currency</b> (copper/brass coins valued as silver), which was widely
            forged and ultimately failed</li>
          <li>Often remembered as a ruler of brilliant ideas let down by poor execution</li>
        </ul>
      </Accordion>
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        <b>Firoz Shah Tughlaq</b>, his successor, took a gentler approach — building irrigation canals and
        founding Firoz Shah Kotla, while patronising learning and translation projects.
      </p>

      {/* 4. Lodi */}
      <SectionHeading num="04" title="Lodi Dynasty &amp; the End of the Sultanate" />
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        The Lodis were the only <b>Afghan (Pashtun)</b> dynasty to rule the Delhi Sultanate.
        <b> Ibrahim Lodi</b>, the last Delhi Sultan, was defeated and killed by <b>Babur</b> at the
        <b> First Battle of Panipat (1526)</b> — the event that ended the Sultanate and founded the Mughal Empire.
      </p>

      {/* 5. Mughals begin */}
      <SectionHeading num="05" title="The Mughal Empire Begins — Babur &amp; Humayun" />
      <DataTable headers={["Event", "Year", "Detail"]} rows={[
        ["First Battle of Panipat", "1526", "Babur defeats Ibrahim Lodi, founding the Mughal Empire"],
        ["Battle of Khanwa", "1527", "Babur defeats Rana Sanga of Mewar"],
        ["Battle of Chausa &amp; Kannauj", "1539–1540", "Humayun is defeated by Sher Shah Suri and loses the throne"],
        ["Humayun regains the throne", "1555", "With Persian assistance, shortly before his death in 1556"],
      ]} />
      <Callout type="exam" label="The Sher Shah Suri interlude">
        Between Humayun's two reigns, <b>Sher Shah Suri</b> ruled North India (1540–1545) as founder of the
        Sur Empire. He built the <b>Grand Trunk Road</b> and introduced the <b>Rupiya</b>, a silver coin
        that became the direct ancestor of the modern Indian Rupee.
      </Callout>

      {/* 6. Akbar */}
      <SectionHeading num="06" title="Akbar — The Greatest Mughal" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Won the <b>Second Battle of Panipat (1556)</b> against Hemu while still a teenager, under the
          regency of Bairam Khan</li>
        <li>Founded <b>Din-i-Ilahi</b>, a syncretic faith blending elements of several religions (never
          widely adopted) and abolished the <b>Jizya</b> tax on non-Muslims</li>
        <li>Introduced the <b>Mansabdari system</b>, a military-administrative ranking structure for officials</li>
        <li>Pursued a policy of matrimonial alliances with Rajput houses, and built <b>Fatehpur Sikri</b>
          as his capital (later abandoned due to water shortage)</li>
        <li>His court's "Navratnas" (nine gems) included <b>Birbal, Tansen, Raja Todar Mal</b> (who
          designed the Zabti revenue system), and <b>Abul Fazl</b> (author of the Akbarnama and Ain-i-Akbari)</li>
      </ul>

      {/* 7. Jahangir and Shah Jahan */}
      <SectionHeading num="07" title="Jahangir &amp; Shah Jahan — Consolidation and Architecture" />
      <Accordion chip="Jahangir" title="Known for Justice — and a Fateful English Visit" defaultOpen>
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Famous for the <b>"Zanjeer-e-Adl"</b> (Chain of Justice) — a chain hung outside his palace
            that subjects could pull to seek direct redressal</li>
          <li>Married <b>Nur Jahan</b>, who held significant influence over administration</li>
          <li><b>Sir Thomas Roe</b>, an English ambassador sent by King James I, visited his court seeking
            trading rights — a pivotal early step in the East India Company's presence in India</li>
        </ul>
      </Accordion>
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        <b>Shah Jahan</b> presided over the peak of Mughal architecture — building the <b>Taj Mahal</b> at
        Agra (in memory of his wife Mumtaz Mahal), the <b>Red Fort</b> and <b>Jama Masjid</b> in Delhi, and
        commissioning the famed <b>Peacock Throne</b>. He was later imprisoned by his own son, Aurangzeb,
        in the Agra Fort.
      </p>

      {/* 8. Aurangzeb and decline */}
      <SectionHeading num="08" title="Aurangzeb &amp; the Empire's Decline" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>The <b>longest-reigning Mughal emperor</b> (49 years); reimposed the Jizya tax and pursued more
          orthodox religious policies</li>
        <li>The empire reached its <b>greatest territorial extent</b> under him, but relentless Deccan
          campaigns against the Marathas drained the treasury</li>
        <li>His death in 1707 triggered a rapid succession crisis and the beginning of a steep decline</li>
      </ul>
      <Callout type="trap" label="Common trap">
        The <b>1739 invasion by Nadir Shah</b>, who sacked Delhi and carried off both the Peacock Throne and
        the Kohinoor diamond, happened decades <b>after</b> Aurangzeb's death — a good anchor point for
        placing the empire's post-Aurangzeb collapse on a timeline.
      </Callout>

      {/* 9. Vijayanagara */}
      <SectionHeading num="09" title="The Vijayanagara Empire" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Founded in <b>1336</b> by brothers <b>Harihara and Bukka</b>, with its capital at
          <b> Hampi</b> on the Tungabhadra river</li>
        <li><b>Krishnadeva Raya</b> (Tuluva dynasty) was its most celebrated ruler — a patron of Telugu
          literature whose court included the <b>"Ashtadiggajas,"</b> eight great poets</li>
        <li>The empire's dominance ended after its defeat at the <b>Battle of Talikota (1565)</b>, by a
          confederacy of Deccan Sultanates</li>
      </ul>

      {/* 10. Bhakti and Sufi */}
      <SectionHeading num="10" title="Bhakti &amp; Sufi Movements" />
      <DataTable headers={["Bhakti saint", "Association"]} rows={[
        ["Kabir", "Nirguna Bhakti (formless God); blended Hindu and Muslim spiritual ideas"],
        ["Guru Nanak", "Founder of Sikhism; preached universal brotherhood and one God"],
        ["Mirabai", "Rajput princess and devoted Krishna Bhakti poet"],
        ["Chaitanya Mahaprabhu", "Popularised Krishna Bhakti and devotional singing (Sankirtan) in Bengal"],
        ["Tulsidas", "Wrote the Ramcharitmanas, an Awadhi retelling of the Ramayana"],
      ]} />
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        The parallel <b>Sufi movement</b> within Islam emphasised love and personal devotion to God. The
        <b> Chishti order</b>, founded by <b>Moinuddin Chishti</b> (whose dargah at Ajmer remains a major
        pilgrimage site), was the most influential Sufi order in India — with <b>Nizamuddin Auliya</b> as
        its most prominent Delhi-based successor.
      </p>

      {/* 11. Quick revision */}
      <SectionHeading num="11" title="Quick Revision — Timeline &amp; Battle Cheat Sheet" />
      <DataTable headers={["Event", "Year"]} rows={[
        ["Delhi Sultanate begins", "1206"],
        ["Razia Sultana's reign", "1236–1240"],
        ["First Battle of Panipat (Babur founds the Mughal Empire)", "1526"],
        ["Second Battle of Panipat (Akbar defeats Hemu)", "1556"],
        ["Battle of Talikota (Vijayanagara's decline)", "1565"],
        ["Taj Mahal construction begins", "1632"],
        ["Aurangzeb's death, rapid Mughal decline begins", "1707"],
        ["Nadir Shah's sack of Delhi", "1739"],
      ]} />

      {/* 12. Practice */}
      <SectionHeading num="12" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="Who was the first and only woman ruler of the Delhi Sultanate?"
        options={["Nur Jahan", "Razia Sultana", "Mumtaz Mahal", "Chand Bibi"]}
        correctIndex={1} explanation="Razia Sultana, daughter of Iltutmish, ruled 1236–1240." />
      <MCQItem n={2} q="Alauddin Khilji's market control policy was primarily aimed at:"
        options={["Encouraging foreign trade", "Controlling prices of essential commodities to sustain his army", "Promoting local handicrafts", "Reducing land revenue"]}
        correctIndex={1} explanation="Price control to economically sustain a large standing army." />
      <MCQItem n={3} q="Muhammad bin Tughlaq is best remembered for shifting his capital from Delhi to:"
        options={["Agra", "Daulatabad (Devagiri)", "Lahore", "Fatehpur Sikri"]}
        correctIndex={1} explanation="Daulatabad — a costly and ultimately reversed decision." />
      <MCQItem n={4} q="The First Battle of Panipat (1526), which founded the Mughal Empire, was fought between:"
        options={["Akbar and Hemu", "Babur and Ibrahim Lodi", "Humayun and Sher Shah Suri", "Babur and Rana Sanga"]}
        correctIndex={1} explanation="Babur defeated Ibrahim Lodi, the last Delhi Sultan." />
      <MCQItem n={5} q="The Grand Trunk Road and the Rupiya (silver coin) are associated with which ruler?"
        options={["Akbar", "Sher Shah Suri", "Alauddin Khilji", "Shah Jahan"]}
        correctIndex={1} explanation="Sher Shah Suri, during his brief but efficient rule (1540–1545)." />
      <MCQItem n={6} q="Akbar's syncretic religious movement, which never gained wide following, was called:"
        options={["Bhakti Marg", "Din-i-Ilahi", "Sufi-Ilahi", "Sulh-i-Kul"]}
        correctIndex={1} explanation="Din-i-Ilahi." />
      <MCQItem n={7} q="Which English ambassador visited Jahangir's court seeking trading rights for the East India Company?"
        options={["Robert Clive", "Sir Thomas Roe", "Warren Hastings", "Vasco da Gama"]}
        correctIndex={1} explanation="Sir Thomas Roe, sent by King James I." />
      <MCQItem n={8} q="The Taj Mahal was built by which Mughal emperor?"
        options={["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"]}
        correctIndex={2} explanation="Shah Jahan, in memory of his wife Mumtaz Mahal." />
      <MCQItem n={9} q="The Vijayanagara Empire's capital was located at:"
        options={["Golconda", "Hampi", "Madurai", "Thanjavur"]}
        correctIndex={1} explanation="Hampi, on the Tungabhadra river." />
      <MCQItem n={10} q="Which Bhakti movement figure founded Sikhism?"
        options={["Kabir", "Guru Nanak", "Chaitanya Mahaprabhu", "Ramanuja"]}
        correctIndex={1} explanation="Guru Nanak." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · History. Dynasty periods, ruler achievements, and battle dates are compiled from standard medieval Indian history references — precise dates for administrative transitions can vary slightly between sources, but the major battles and reigns listed here reflect the commonly accepted exam-standard timeline." />
    </div>
  );
}
