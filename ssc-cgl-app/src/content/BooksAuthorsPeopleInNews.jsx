import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function BooksAuthorsPeopleInNews() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Current Affairs"
        priority="MED"
        title="Books, Authors & People in News"
        dek="Classic author-work pairings that never go out of date, India's genuinely short and impressive Booker Prize record, and a snapshot of the book releases making news at the time of writing."
        stats={[
          { value: "1997", label: "Arundhati Roy won the Booker Prize for The God of Small Things" },
          { value: "2", label: "Indian authors who've won the International Booker Prize — Geetanjali Shree & Banu Mushtaq" },
          { value: "1954", label: "Year the Sahitya Akademi, India's National Academy of Letters, was founded" },
          { value: "24", label: "Languages the Sahitya Akademi gives annual awards in" },
        ]}
      />

      <Callout type="trap" label="Read this before the rest of the topic">
        Author-to-classic-work pairings (Tagore/<i>Gitanjali</i>, Kalam/<i>Wings of Fire</i>) are stable and
        safe to memorise outright. The <b>"people in the news" / recent releases</b> section changes every
        month — treat that part as a snapshot to refresh, not a fixed answer key.
      </Callout>

      {/* 1. Booker vs International Booker */}
      <SectionHeading num="01" title="Booker Prize vs International Booker Prize" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        Two different prizes, frequently confused in exam options — know which is which.
      </p>
      <DataTable headers={["", "Booker Prize", "International Booker Prize"]} rows={[
        ["For", "A single novel originally written in English", "A novel or short-story collection translated into English"],
        ["Prize split", "Goes entirely to the author", "Split equally between the author and translator"],
        ["Started", "1969", "Introduced in its current annual form in 2016"],
      ]} />

      {/* 2. Indian Booker winners */}
      <SectionHeading num="02" title="Indian / India-Connected Booker Prize Winners" />
      <DataTable headers={["Author", "Work", "Year", "Prize"]} rows={[
        ["Salman Rushdie", "Midnight's Children", "1981", "Booker Prize (also won the 'Booker of Bookers' in 1993 and 'Best of the Booker' in 2008)"],
        ["Arundhati Roy", "The God of Small Things", "1997", "Booker Prize"],
        ["Kiran Desai", "The Inheritance of Loss", "2006", "Booker Prize"],
        ["Aravind Adiga", "The White Tiger", "2008", "Booker Prize"],
        ["Geetanjali Shree (& translator Daisy Rockwell)", "Tomb of Sand (Ret Samadhi)", "2022", "International Booker Prize — first Hindi novel to win it"],
        ["Banu Mushtaq (& translator Deepa Bhasthi)", "Heart Lamp", "2025", "International Booker Prize — first short-story collection ever to win, and the first Kannada work to win"],
      ]} />
      <Callout type="exam" label="Exam focus">
        <b>Heart Lamp</b> by Banu Mushtaq made history twice over in 2025 — the <b>first short-story
        collection</b> to ever win the International Booker, and the <b>first work of Kannada literature</b>
        to do so. Deepa Bhasthi, her translator, became the first Indian translator to win the prize.
      </Callout>

      {/* 3. Classics */}
      <SectionHeading num="03" title="Famous Indian Literary Classics & Authors" />
      <DataTable headers={["Work", "Author"]} rows={[
        ["Gitanjali", "Rabindranath Tagore (won the 1913 Nobel Prize in Literature)"],
        ["The Discovery of India", "Jawaharlal Nehru"],
        ["Godaan", "Munshi Premchand"],
        ["Malgudi Days", "R. K. Narayan"],
        ["A Suitable Boy", "Vikram Seth"],
        ["Train to Pakistan", "Khushwant Singh"],
        ["The Panchatantra", "Traditionally attributed to Vishnu Sharma"],
      ]} />

      {/* 4. Autobiographies */}
      <SectionHeading num="04" title="Notable Autobiographies & Memoirs" />
      <DataTable headers={["Book", "Author"]} rows={[
        ["Wings of Fire", "A. P. J. Abdul Kalam"],
        ["My Experiments with Truth", "Mahatma Gandhi"],
        ["India Wins Freedom", "Maulana Abul Kalam Azad"],
        ["Playing It My Way", "Sachin Tendulkar"],
        ["Straight from the Heart", "Kapil Dev"],
        ["Unfinished", "Priyanka Chopra Jonas"],
      ]} />
      <Callout type="mnemonic" label="Memory aid">
        Gandhi's autobiography is widely known by its shorter title, <b>"My Experiments with Truth"</b> —
        its full original title is <i>The Story of My Experiments with Truth</i>. Either phrasing should be
        recognised as the same book.
      </Callout>

      {/* 5. Sahitya Akademi */}
      <SectionHeading num="05" title="Sahitya Akademi — India's National Academy of Letters" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Founded in <b>1954</b>; administered under the Ministry of Culture, though it functions as an
          autonomous body</li>
        <li>Gives annual literary awards across <b>24 languages</b> recognised by the Akademi</li>
        <li>Also gives the <b>Sahitya Akademi Yuva Puraskar</b> for young writers (under 35), and a
          <b> Bhasha Samman</b> for classical and lesser-known language contributions</li>
      </ul>

      {/* 6. People in news */}
      <SectionHeading num="06" title="People & Books in the News — Snapshot (2026)" />
      <p className="text-[13.5px] mb-3" style={{ color: "var(--text-muted)" }}>
        A sample of the kind of book-launch news this topic tests — illustrative, not exhaustive, and due
        for a refresh by the time you sit your exam.
      </p>
      <DataTable headers={["Book", "Author / Note"]} rows={[
        ["Mother Mary Comes to Me", "Arundhati Roy's 2026 memoir, centred on her relationship with her mother"],
        ["Four Stars of Destiny", "Autobiography of General Manoj Mukund Naravane, former Chief of the Army Staff"],
        ["Tides of Time", "Sudha Murty's book exploring India's history through Parliament's murals"],
        ["Ram Nath Kovind's autobiography", "Released by PM Narendra Modi in August 2026"],
        ["Atal Bihari Vajpayee: The Eternal Statesman", "Unveiled by Vice-President C. P. Radhakrishnan"],
      ]} />

      {/* 7. Quick revision */}
      <SectionHeading num="07" title="Quick Revision" />
      <DataTable headers={["Fact", "Answer"]} rows={[
        ["Author of Gitanjali", "Rabindranath Tagore"],
        ["Author of Wings of Fire", "A. P. J. Abdul Kalam"],
        ["First Booker Prize win connected to India", "Salman Rushdie, Midnight's Children, 1981"],
        ["First Hindi novel to win International Booker", "Tomb of Sand, Geetanjali Shree, 2022"],
        ["2025 International Booker Prize winner", "Banu Mushtaq, for Heart Lamp"],
        ["Sahitya Akademi founded", "1954"],
      ]} />

      {/* 8. Practice */}
      <SectionHeading num="08" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>
        Mostly built on stable author-work pairings and the fixed Indian Booker Prize record — the last two
        questions reflect a 2026 snapshot and should be re-verified if your exam is much later.
      </p>
      <MCQItem n={1} q="Gitanjali, which won Rabindranath Tagore the Nobel Prize in Literature, was published in which category?"
        options={["Novel", "Poetry collection", "Play", "Autobiography"]}
        correctIndex={1} explanation="A collection of poems." />
      <MCQItem n={2} q="'Wings of Fire' is the autobiography of:"
        options={["Sachin Tendulkar", "A. P. J. Abdul Kalam", "Kapil Dev", "Jawaharlal Nehru"]}
        correctIndex={1} explanation="Dr. A. P. J. Abdul Kalam, India's former President." />
      <MCQItem n={3} q="Who won the Booker Prize in 1997 for 'The God of Small Things'?"
        options={["Kiran Desai", "Arundhati Roy", "Aravind Adiga", "Salman Rushdie"]}
        correctIndex={1} explanation="Arundhati Roy." />
      <MCQItem n={4} q="The International Booker Prize differs from the (regular) Booker Prize in that it:"
        options={["Only accepts poetry", "Is for novels translated into English, prize shared with the translator", "Is only open to British authors", "Has no prize money"]}
        correctIndex={1} explanation="It recognises translated fiction, with the award split equally between author and translator." />
      <MCQItem n={5} q="'Tomb of Sand' (Ret Samadhi) by Geetanjali Shree made history in 2022 as:"
        options={["The first Tamil novel to win a Nobel Prize", "The first Hindi novel to win the International Booker Prize", "The first Indian novel ever translated to English", "The first Indian graphic novel awarded a Booker"]}
        correctIndex={1} explanation="The first Hindi-language novel to win the International Booker Prize." />
      <MCQItem n={6} q="'Heart Lamp', the 2025 International Booker Prize winner, was originally written in which language?"
        options={["Hindi", "Tamil", "Kannada", "Bengali"]}
        correctIndex={2} explanation="Kannada — also the first short-story collection ever to win the prize." />
      <MCQItem n={7} q="Sachin Tendulkar's autobiography is titled:"
        options={["Straight from the Heart", "Playing It My Way", "The Test of My Life", "Unfinished"]}
        correctIndex={1} explanation="Playing It My Way — 'Straight from the Heart' is Kapil Dev's autobiography instead." />
      <MCQItem n={8} q="The Sahitya Akademi, India's National Academy of Letters, was founded in which year?"
        options={["1947", "1950", "1954", "1961"]}
        correctIndex={2} explanation="1954." />
      <MCQItem n={9} q="'The Discovery of India' was written by:"
        options={["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Dr. Rajendra Prasad"]}
        correctIndex={1} explanation="Jawaharlal Nehru, written during his imprisonment in the 1940s." />
      <MCQItem n={10} q="As compiled in 2026, whose autobiography did PM Modi release in August that year?"
        options={["L. K. Advani's", "Ram Nath Kovind's", "Pranab Mukherjee's", "Manmohan Singh's"]}
        correctIndex={1} explanation="Former President Ram Nath Kovind's autobiography — verify this remains the most recent such release if your exam is later." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Current Affairs. Author-work pairings and the historical Booker Prize record are stable exam facts. The 'people and books in the news' section reflects information compiled in 2026 and will need refreshing — check a current-affairs digest for the latest book releases and literary award winners before your exam." />
    </div>
  );
}
