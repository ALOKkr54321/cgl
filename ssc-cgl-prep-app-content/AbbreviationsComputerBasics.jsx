import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function AbbreviationsComputerBasics() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="Static General Knowledge"
        priority={null}
        title="Abbreviations & Computer Basics"
        dek="The government and international-organisation acronyms SSC expects instant recall on, plus the small set of computer fundamentals — hardware, memory units, and internet terms — tested at General Awareness level. The deeper Computer Proficiency Test syllabus is covered separately in the Tier-II section."
        stats={[
          { value: "1024", label: "Bytes in a Kilobyte — the memory-unit conversion tested every cycle" },
          { value: "3", label: "Core hardware concepts — CPU, RAM, ROM" },
          { value: "8", label: "Bits in a Byte" },
          { value: "1989", label: "Year Tim Berners-Lee proposed the World Wide Web" },
        ]}
      />

      <Callout type="exam" label="Before you start">
        This page covers General Awareness-level computer facts — recognising abbreviations and basic
        concepts. The full <b>Computer Proficiency Test</b> syllabus (networking, cybersecurity, MS Office)
        for Tier-II is covered separately in that section — study both if you're preparing for Tier-II.
      </Callout>

      {/* 1. Govt abbreviations */}
      <SectionHeading num="01" title="Common Government & Administrative Abbreviations" />
      <DataTable headers={["Abbreviation", "Full form"]} rows={[
        ["PSU", "Public Sector Undertaking"],
        ["NGO", "Non-Governmental Organisation"],
        ["FDI", "Foreign Direct Investment"],
        ["FII", "Foreign Institutional Investor"],
        ["GST", "Goods and Services Tax"],
        ["PAN", "Permanent Account Number"],
        ["RTI", "Right to Information"],
        ["PIL", "Public Interest Litigation"],
        ["IAS", "Indian Administrative Service"],
        ["IPS", "Indian Police Service"],
        ["IFS", "Indian Foreign Service (also stands for Indian Forest Service in a different context)"],
        ["UPSC", "Union Public Service Commission"],
        ["NITI Aayog", "National Institution for Transforming India"],
        ["MSME", "Micro, Small and Medium Enterprises"],
        ["NABARD", "National Bank for Agriculture and Rural Development"],
        ["EPFO", "Employees' Provident Fund Organisation"],
      ]} />
      <Callout type="trap" label="Common trap">
        <b>IFS</b> is genuinely ambiguous in Indian administrative contexts — it can mean either the
        <b> Indian Foreign Service</b> or the <b>Indian Forest Service</b>, both real All India/Central
        Services. Context in the question determines which one is meant.
      </Callout>

      {/* 2. International orgs */}
      <SectionHeading num="02" title="International Organisation Abbreviations — Quick Recap" />
      <DataTable headers={["Abbreviation", "Full form"]} rows={[
        ["UN", "United Nations"],
        ["WHO", "World Health Organization"],
        ["UNESCO", "United Nations Educational, Scientific and Cultural Organization"],
        ["UNICEF", "United Nations International Children's Emergency Fund (now United Nations Children's Fund)"],
        ["NATO", "North Atlantic Treaty Organization"],
        ["IMF", "International Monetary Fund"],
        ["WTO", "World Trade Organization"],
      ]} />

      {/* 3. Hardware */}
      <SectionHeading num="03" title="Computer Hardware Basics" />
      <DataTable headers={["Term", "Full form / Role"]} rows={[
        ["CPU", "Central Processing Unit — often called the 'brain' of the computer"],
        ["ALU", "Arithmetic Logic Unit — part of the CPU that performs calculations and logical operations"],
        ["CU", "Control Unit — part of the CPU that directs the operation of other components"],
        ["RAM", "Random Access Memory — volatile (temporary); data is lost when power is off"],
        ["ROM", "Read Only Memory — non-volatile (permanent); retains data without power"],
      ]} />
      <Callout type="mnemonic" label="Memory aid">
        <b>RAM is volatile, ROM is not</b> — the easiest way to remember which is which: RAM holds what
        you're working on <i>right now</i> and clears on shutdown; ROM holds the permanent startup
        instructions a computer needs even before an operating system loads.
      </Callout>

      {/* 4. Memory units */}
      <SectionHeading num="04" title="Memory Units — The Conversion Every Exam Tests" />
      <DataTable headers={["Unit", "Equal to"]} rows={[
        ["1 Byte", "8 Bits"],
        ["1 Kilobyte (KB)", "1,024 Bytes"],
        ["1 Megabyte (MB)", "1,024 KB"],
        ["1 Gigabyte (GB)", "1,024 MB"],
        ["1 Terabyte (TB)", "1,024 GB"],
        ["1 Petabyte (PB)", "1,024 TB"],
      ]} />
      <Callout type="exam" label="Exam focus">
        Each step in this ladder multiplies by <b>1,024</b> (2¹⁰), not a clean 1,000 — a distinction from
        everyday decimal units that SSC sometimes tests directly ("how many bytes in a kilobyte?").
      </Callout>

      {/* 5. Input/output */}
      <SectionHeading num="05" title="Input & Output Devices" />
      <DataTable headers={["Category", "Examples"]} rows={[
        ["Input devices", "Keyboard, Mouse, Scanner, Microphone, Joystick, Webcam"],
        ["Output devices", "Monitor, Printer, Speaker, Projector"],
        ["Storage devices", "Hard Disk Drive (HDD), Solid State Drive (SSD), CD/DVD, USB pen drive"],
      ]} />

      {/* 6. Internet/networking */}
      <SectionHeading num="06" title="Internet & Networking Abbreviations" />
      <DataTable headers={["Abbreviation", "Full form"]} rows={[
        ["WWW", "World Wide Web — proposed by Tim Berners-Lee in 1989"],
        ["HTTP", "HyperText Transfer Protocol"],
        ["HTTPS", "HyperText Transfer Protocol Secure"],
        ["URL", "Uniform Resource Locator"],
        ["IP", "Internet Protocol"],
        ["LAN", "Local Area Network"],
        ["WAN", "Wide Area Network"],
        ["MAN", "Metropolitan Area Network"],
        ["Wi-Fi", "Wireless Fidelity"],
        ["USB", "Universal Serial Bus"],
      ]} />
      <Callout type="trap" label="Common trap">
        <b>LAN vs WAN vs MAN</b> are distinguished purely by geographic scale: LAN covers a single
        building/campus, MAN covers a city, and WAN spans across cities or countries (the internet itself is
        the largest possible WAN).
      </Callout>

      {/* 7. File formats */}
      <SectionHeading num="07" title="File Format Abbreviations" />
      <DataTable headers={["Format", "Full form"]} rows={[
        ["JPEG / JPG", "Joint Photographic Experts Group"],
        ["PNG", "Portable Network Graphics"],
        ["GIF", "Graphics Interchange Format"],
        ["PDF", "Portable Document Format"],
        ["HTML", "HyperText Markup Language"],
        ["MP3", "MPEG Audio Layer 3"],
      ]} />

      {/* 8. Quick revision */}
      <SectionHeading num="08" title="Quick Revision" />
      <DataTable headers={["Fact", "Answer"]} rows={[
        ["CPU stands for", "Central Processing Unit"],
        ["Volatile memory type", "RAM"],
        ["Non-volatile memory type", "ROM"],
        ["1 KB equals", "1,024 Bytes"],
        ["WWW proposed by", "Tim Berners-Lee (1989)"],
        ["HTTP stands for", "HyperText Transfer Protocol"],
        ["NITI Aayog stands for", "National Institution for Transforming India"],
        ["USB stands for", "Universal Serial Bus"],
      ]} />

      {/* 9. Practice */}
      <SectionHeading num="09" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="CPU stands for:"
        options={["Central Processing Unit", "Computer Processing Utility", "Central Program Unit", "Core Processing Unit"]}
        correctIndex={0} explanation="Central Processing Unit — often called the computer's 'brain.'" />
      <MCQItem n={2} q="Which type of computer memory is volatile (loses data when power is off)?"
        options={["ROM", "RAM", "HDD", "SSD"]}
        correctIndex={1} explanation="RAM (Random Access Memory)." />
      <MCQItem n={3} q="1 Kilobyte (KB) is equal to how many Bytes?"
        options={["100", "1,000", "1,024", "10,240"]}
        correctIndex={2} explanation="1,024 Bytes." />
      <MCQItem n={4} q="WWW stands for:"
        options={["World Wide Web", "World Wide Workspace", "Web World Wide", "World Web Workflow"]}
        correctIndex={0} explanation="World Wide Web, proposed by Tim Berners-Lee in 1989." />
      <MCQItem n={5} q="HTTP stands for:"
        options={["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Type Protocol", "Home Transfer Text Program"]}
        correctIndex={0} explanation="HyperText Transfer Protocol." />
      <MCQItem n={6} q="URL stands for:"
        options={["Universal Record Locator", "Uniform Resource Locator", "Uniform Record Link", "Universal Resource Link"]}
        correctIndex={1} explanation="Uniform Resource Locator." />
      <MCQItem n={7} q="USB stands for:"
        options={["Universal Serial Bus", "United Serial Bus", "Universal System Bus", "Unified Serial Bus"]}
        correctIndex={0} explanation="Universal Serial Bus." />
      <MCQItem n={8} q="PSU, a term often used for government-owned companies, stands for:"
        options={["Public Service Undertaking", "Public Sector Undertaking", "Private Sector Unit", "Public State Utility"]}
        correctIndex={1} explanation="Public Sector Undertaking." />
      <MCQItem n={9} q="NITI Aayog stands for:"
        options={["National Institution for Transforming India", "National Initiative for Trade and Industry", "New Indian Trade and Industry", "National Institute of Technology and Innovation"]}
        correctIndex={0} explanation="National Institution for Transforming India." />
      <MCQItem n={10} q="GUI, referring to icon-and-window based computer interfaces, stands for:"
        options={["General User Interface", "Graphical User Interface", "Global User Interaction", "Graphic Utility Interface"]}
        correctIndex={1} explanation="Graphical User Interface." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · Static General Knowledge. Abbreviation full-forms and basic computer concepts are stable, well-established facts. For the deeper Computer Proficiency Test syllabus (networking, cybersecurity, MS Office) tested separately in Tier-II, see that section's dedicated topic." />
    </div>
  );
}
