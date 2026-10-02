import React, { useState, useMemo } from "react";
import {
  Home, Layers, ClipboardList, Bookmark, ChevronRight, ChevronDown,
  ArrowLeft, Search, Landmark, Calculator, Brain, Languages, Monitor,
  Sigma, Lock, CheckCircle2, Circle, Menu, X, Sun, Moon
} from "lucide-react";
import { Tag } from "./StudyUI";

/* ============================================================
   CONTENT REGISTRY
   Every finished topic file lives in /content and is registered
   here with one line: topicId -> imported component.
   To add a new topic in a future session:
     1. Drop the new file in /content (it can copy the pattern of
        any existing file and import primitives from ../StudyUI).
     2. Import it below and add one line to CONTENT.
     3. Set ready: true on that topic's entry in the SUBJECTS data.
   No other file needs to change.
============================================================ */
import ConstitutionalFramework from "./content/ConstitutionalFramework";
import ParliamentExecutiveJudiciary from "./content/ParliamentExecutiveJudiciary";
import GovernmentSchemes from "./content/GovernmentSchemes";
import ConstitutionalStatutoryBodies from "./content/ConstitutionalStatutoryBodies";
import LocalGovernanceFederalism from "./content/LocalGovernanceFederalism";
import MacroEconomicsBasics from "./content/MacroEconomicsBasics";
import IndianBankingFinance from "./content/IndianBankingFinance";
import BudgetPlanningTerminology from "./content/BudgetPlanningTerminology";
import InternationalEconomicOrganisations from "./content/InternationalEconomicOrganisations";
import IndianPhysicalGeography from "./content/IndianPhysicalGeography";
import IndianPoliticalGeography from "./content/IndianPoliticalGeography";
import ClimateSoilNaturalResources from "./content/ClimateSoilNaturalResources";
import WorldGeography from "./content/WorldGeography";
import Physics from "./content/Physics";
import Chemistry from "./content/Chemistry";
import Biology from "./content/Biology";
import ScienceTechnologyInNews from "./content/ScienceTechnologyInNews";
import NationalEventsAppointments from "./content/NationalEventsAppointments";
import InternationalAffairs from "./content/InternationalAffairs";
import Sports from "./content/Sports";
import AwardsHonours from "./content/AwardsHonours";
import BooksAuthorsPeopleInNews from "./content/BooksAuthorsPeopleInNews";
import ImportantDaysPortfolio from "./content/ImportantDaysPortfolio";
import IndiaNeighbouringCountries from "./content/IndiaNeighbouringCountries";
import FirstsRecordsHeadquarters from "./content/FirstsRecordsHeadquarters";
import AbbreviationsComputerBasics from "./content/AbbreviationsComputerBasics";
import AncientIndia from "./content/AncientIndia";
import MedievalIndia from "./content/MedievalIndia";
import ModernIndiaFreedomStruggle from "./content/ModernIndiaFreedomStruggle";
import CultureHeritage from "./content/CultureHeritage";

const CONTENT = {
  "constitutional-framework": ConstitutionalFramework,
  "parliament-exec-judiciary": ParliamentExecutiveJudiciary,
  "govt-schemes": GovernmentSchemes,
  "constitutional-bodies": ConstitutionalStatutoryBodies,
  "local-governance": LocalGovernanceFederalism,
  "macro-economics": MacroEconomicsBasics,
  "banking-finance": IndianBankingFinance,
  "budget-terms": BudgetPlanningTerminology,
  "intl-economic-orgs": InternationalEconomicOrganisations,
  "physical-geo": IndianPhysicalGeography,
  "political-geo": IndianPoliticalGeography,
  "climate-soil": ClimateSoilNaturalResources,
  "world-geo": WorldGeography,
  "physics": Physics,
  "chemistry": Chemistry,
  "biology": Biology,
  "sci-tech-news": ScienceTechnologyInNews,
  "national-events": NationalEventsAppointments,
  "international-affairs": InternationalAffairs,
  "sports": Sports,
  "awards-honours": AwardsHonours,
  "books-authors": BooksAuthorsPeopleInNews,
  "important-days": ImportantDaysPortfolio,
  "india-neighbours": IndiaNeighbouringCountries,
  "firsts-hq": FirstsRecordsHeadquarters,
  "abbreviations": AbbreviationsComputerBasics,
  "ancient-india": AncientIndia,
  "medieval-india": MedievalIndia,
  "modern-india": ModernIndiaFreedomStruggle,
  "culture-heritage": CultureHeritage,
};

/* ============================================================
   FONTS + THEME VARIABLES
============================================================ */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap');
    .font-display { font-family: 'Lora', serif; }
    .font-body { font-family: 'Inter', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    * { -webkit-tap-highlight-color: transparent; }
    ::-webkit-scrollbar { width: 5px; height: 5px; }
    ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

    .theme-root {
      --bg:#faf8f3; --surface:#ffffff; --surface-alt:#fafaf8; --surface-sunk:#f2efe6;
      --border:#e7e2d5; --text:#1c1917; --text-soft:#57534e; --text-muted:#a8a29e;
      --table-head:#efe9d9; --scrim:rgba(15,20,32,.45);
      --exam-bg:#f3e6c9; --exam-border:#e2cb96; --exam-text:#8a6420;
      --trap-bg:#f4e4e0; --trap-border:#dcb9b3; --trap-text:#7a2e2e;
      --mnem-bg:#eef0f7; --mnem-border:#c9cfe3; --mnem-text:#3a437a;
      --correct-bg:#e4efe6; --correct-border:#bcd8c4; --correct-text:#254933;
      --navy:#16233f; --navy-text:#f3efe1; --gold:#e9c46a;
      transition: background-color .15s ease, border-color .15s ease;
    }
    .theme-root.dark {
      --bg:#0d1117; --surface:#161b22; --surface-alt:#1c2128; --surface-sunk:#10141b;
      --border:#2d333b; --text:#e6edf3; --text-soft:#adbac7; --text-muted:#6b7280;
      --table-head:#1c2128; --scrim:rgba(0,0,0,.6);
      --exam-bg:#2b2412; --exam-border:#4d3f1c; --exam-text:#e0b25c;
      --trap-bg:#2b1a18; --trap-border:#4d2b26; --trap-text:#e2938a;
      --mnem-bg:#1a1e2e; --mnem-border:#333c5c; --mnem-text:#9aa5d9;
      --correct-bg:#12261a; --correct-border:#255239; --correct-text:#7fd9a3;
      --navy:#0b1220; --navy-text:#eef1f6; --gold:#e9c46a;
    }
  `}</style>
);

/* ============================================================
   FULL SYLLABUS DATA — every topic from the SSC CGL syllabus
   `ready:true` = study material published. Everything else is
   queued and will be added one topic at a time.
============================================================ */
const SUBJECTS = [
  // ---------------- TIER-I ----------------
  {
    id: "ga1", tier: "Tier-I", name: "General Awareness", icon: Landmark,
    accent: "#8a6420", accentBg: "#f3e6c9",
    sections: [
      { id: "history", name: "History", topics: [
        { id: "ancient-india", name: "Ancient India", tag: "MED", ready: true },
        { id: "medieval-india", name: "Medieval India", tag: "HIGH", ready: true },
        { id: "modern-india", name: "Modern India & Freedom Struggle", tag: "HIGH", ready: true },
        { id: "culture-heritage", name: "Culture & Heritage", tag: "MED", ready: true },
      ]},
      { id: "geography", name: "Geography", topics: [
        { id: "physical-geo", name: "Indian Physical Geography", tag: "HIGH", ready: true },
        { id: "political-geo", name: "Indian Political Geography", tag: "MED", ready: true },
        { id: "climate-soil", name: "Climate, Soil & Natural Resources", tag: "MED", ready: true },
        { id: "world-geo", name: "World Geography", tag: "MED", ready: true },
      ]},
      { id: "polity", name: "Indian Polity & Constitution", topics: [
        { id: "constitutional-framework", name: "Constitutional Framework", tag: "HIGH", ready: true },
        { id: "parliament-exec-judiciary", name: "Parliament, Executive & Judiciary", tag: "MED", ready: true },
        { id: "govt-schemes", name: "Government Schemes", tag: "HIGH", ready: true },
        { id: "constitutional-bodies", name: "Constitutional & Statutory Bodies", tag: "MED", ready: true },
        { id: "local-governance", name: "Local Governance & Federalism", tag: null, ready: true },
      ]},
      { id: "economy", name: "Economy", topics: [
        { id: "macro-economics", name: "Macro-Economics Basics", tag: "MED", ready: true },
        { id: "banking-finance", name: "Indian Banking & Finance", tag: "MED", ready: true },
        { id: "budget-terms", name: "Budget & Planning Terminology", tag: null, ready: true },
        { id: "intl-economic-orgs", name: "International Economic Organisations", tag: "MED", ready: true },
      ]},
      { id: "science", name: "General Science", topics: [
        { id: "physics", name: "Physics", tag: "MED", ready: true },
        { id: "chemistry", name: "Chemistry", tag: "MED", ready: true },
        { id: "biology", name: "Biology", tag: "HIGH", ready: true },
        { id: "sci-tech-news", name: "Science & Technology in News", tag: "MED", ready: true },
      ]},
      { id: "current-affairs", name: "Current Affairs", topics: [
        { id: "national-events", name: "National Events & Appointments", tag: "HIGH", ready: true },
        { id: "international-affairs", name: "International Affairs", tag: "MED", ready: true },
        { id: "sports", name: "Sports", tag: "HIGH", ready: true },
        { id: "awards-honours", name: "Awards & Honours", tag: "MED", ready: true },
        { id: "books-authors", name: "Books, Authors & People in News", tag: "MED", ready: true },
        { id: "important-days", name: "Important Days & Portfolio", tag: null, ready: true },
      ]},
      { id: "static-gk", name: "Static General Knowledge", topics: [
        { id: "india-neighbours", name: "India & Neighbouring Countries", tag: "HIGH", ready: true },
        { id: "firsts-hq", name: "Firsts & Records, Headquarters of Organisations", tag: "MED", ready: true },
        { id: "abbreviations", name: "Abbreviations & Computer Basics", tag: null, ready: true },
      ]},
    ],
  },
  {
    id: "quant1", tier: "Tier-I", name: "Quantitative Aptitude", icon: Calculator,
    accent: "#1F5C8B", accentBg: "#e3edf5",
    sections: [
      { id: "number-system", name: "Number System & Basic Operations", topics: [
        { id: "number-system-t1", name: "Number System", tag: "HIGH" },
        { id: "simplification", name: "Simplification & BODMAS", tag: "HIGH" },
        { id: "fractions-decimals", name: "Fractions & Decimals", tag: "MED" },
        { id: "square-roots-surds", name: "Square Roots & Surds", tag: "MED" },
      ]},
      { id: "commercial-arithmetic", name: "Commercial Arithmetic", topics: [
        { id: "percentage", name: "Percentage", tag: "HIGH" },
        { id: "profit-loss-discount", name: "Profit, Loss & Discount", tag: "HIGH" },
        { id: "ci-si", name: "Simple & Compound Interest", tag: "HIGH" },
        { id: "ratio-proportion", name: "Ratio & Proportion", tag: "HIGH" },
        { id: "average", name: "Average", tag: "HIGH" },
        { id: "time-work", name: "Time & Work", tag: "HIGH" },
        { id: "time-speed-distance", name: "Time, Speed & Distance", tag: "HIGH" },
        { id: "mixture-alligation", name: "Mixture & Alligation", tag: "MED" },
        { id: "partnership", name: "Partnership Business", tag: "MED" },
      ]},
      { id: "algebra1", name: "Algebra", topics: [
        { id: "algebraic-identities", name: "Basic Algebraic Identities", tag: "HIGH" },
        { id: "linear-equations", name: "Linear Equations (Two Variables)", tag: "HIGH" },
        { id: "surds-indices", name: "Elementary Surds & Indices", tag: "MED" },
        { id: "quadratic-equations", name: "Quadratic Equations (basic)", tag: null },
      ]},
      { id: "geometry1", name: "Geometry", topics: [
        { id: "triangles-centres", name: "Triangles — Centres, Congruence & Similarity", tag: "HIGH" },
        { id: "circles", name: "Circles — Chords, Tangents & Angles", tag: "HIGH" },
        { id: "quadrilaterals", name: "Quadrilaterals & Regular Polygons", tag: "MED" },
        { id: "lines-angles", name: "Lines, Angles & Transversal", tag: null },
      ]},
      { id: "mensuration1", name: "Mensuration", topics: [
        { id: "2d-figures", name: "2-D Figures — Area & Perimeter", tag: "HIGH" },
        { id: "prism-cone-cylinder", name: "Right Prism, Cone & Cylinder", tag: "HIGH" },
        { id: "sphere-hemisphere", name: "Sphere, Hemisphere & Pyramid", tag: "MED" },
        { id: "cuboid-combination", name: "Rectangular Parallelepiped & Combination of Solids", tag: "MED" },
      ]},
      { id: "trigonometry1", name: "Trigonometry", topics: [
        { id: "trig-ratios", name: "Trigonometric Ratios & Standard Identities", tag: "HIGH" },
        { id: "complementary-angles", name: "Complementary Angles & Degree/Radian Measures", tag: "MED" },
        { id: "heights-distances", name: "Heights & Distances", tag: "HIGH" },
      ]},
      { id: "stats-di1", name: "Statistics & Data Interpretation", topics: [
        { id: "data-presentation", name: "Data Presentation", tag: "MED" },
        { id: "di-sets", name: "Data Interpretation Sets", tag: "HIGH" },
        { id: "central-tendency1", name: "Measures of Central Tendency", tag: "MED" },
      ]},
    ],
  },
  {
    id: "reasoning1", tier: "Tier-I", name: "Reasoning", icon: Brain,
    accent: "#5A2D5E", accentBg: "#eee3ef",
    sections: [
      { id: "analogy-classification", name: "Analogy & Classification", topics: [
        { id: "semantic-analogy", name: "Semantic Analogy", tag: "HIGH" },
        { id: "number-analogy", name: "Number / Symbolic Analogy", tag: "HIGH" },
        { id: "figural-analogy", name: "Figural Analogy", tag: "MED" },
        { id: "semantic-classification", name: "Semantic Classification", tag: "MED" },
        { id: "number-classification", name: "Number / Symbolic Classification", tag: "MED" },
        { id: "figural-classification", name: "Figural Classification", tag: null },
      ]},
      { id: "series", name: "Series Completion", topics: [
        { id: "number-series", name: "Number Series", tag: "HIGH" },
        { id: "letter-series", name: "Alphabet / Letter Series", tag: "HIGH" },
        { id: "figural-series", name: "Figural Series", tag: "MED" },
        { id: "alphanumeric-series", name: "Mixed Alpha-Numeric Series", tag: "MED" },
      ]},
      { id: "coding-decoding", name: "Coding & Decoding", topics: [
        { id: "letter-coding", name: "Letter Coding", tag: "HIGH" },
        { id: "number-coding", name: "Number Coding", tag: "HIGH" },
        { id: "word-coding", name: "Sentence / Word Coding", tag: "MED" },
        { id: "symbolic-coding", name: "Symbolic / Operator Coding", tag: "MED" },
      ]},
      { id: "logical-reasoning", name: "Logical Reasoning", topics: [
        { id: "syllogism", name: "Syllogism", tag: "HIGH" },
        { id: "statement-conclusion", name: "Statement & Conclusion / Assumption", tag: "MED" },
        { id: "blood-relations", name: "Blood Relations", tag: "HIGH" },
        { id: "direction-distance", name: "Direction & Distance Sense", tag: "MED" },
        { id: "seating-arrangement", name: "Ranking & Seating Arrangement", tag: "MED" },
        { id: "arithmetical-reasoning", name: "Arithmetical Reasoning", tag: "MED" },
        { id: "inequality", name: "Inequality & Mathematical Operations", tag: null },
      ]},
      { id: "nonverbal", name: "Visual / Non-Verbal Reasoning", topics: [
        { id: "mirror-water", name: "Mirror & Water Images", tag: "HIGH" },
        { id: "paper-folding", name: "Paper Folding & Punched Holes", tag: "HIGH" },
        { id: "venn-diagrams1", name: "Venn Diagrams", tag: "HIGH" },
        { id: "embedded-figures", name: "Embedded Figures", tag: "MED" },
        { id: "counting-figures", name: "Counting Figures", tag: "MED" },
        { id: "space-orientation", name: "Space Orientation & Spatial Visualisation", tag: "MED" },
      ]},
      { id: "misc-reasoning", name: "Miscellaneous Reasoning", topics: [
        { id: "word-building", name: "Word Building & Dictionary Ordering", tag: "MED" },
        { id: "problem-solving", name: "Problem Solving, Analysis & Judgment", tag: null },
      ]},
    ],
  },
  {
    id: "english1", tier: "Tier-I", name: "English Comprehension", icon: Languages,
    accent: "#7a2e2e", accentBg: "#f4e4e0",
    sections: [
      { id: "vocabulary1", name: "Vocabulary", topics: [
        { id: "synonyms1", name: "Synonyms", tag: "HIGH" },
        { id: "antonyms1", name: "Antonyms", tag: "HIGH" },
        { id: "one-word-sub1", name: "One-Word Substitution", tag: "HIGH" },
        { id: "idioms1", name: "Idioms & Phrases", tag: "HIGH" },
        { id: "spelling1", name: "Spelling Correction", tag: "MED" },
      ]},
      { id: "grammar1", name: "Grammar", topics: [
        { id: "error-spotting1", name: "Error Spotting", tag: "HIGH" },
        { id: "sentence-improvement1", name: "Sentence Improvement / Correction", tag: "HIGH" },
        { id: "fill-blanks1", name: "Fill in the Blanks", tag: "HIGH" },
        { id: "active-passive1", name: "Active & Passive Voice", tag: "MED" },
        { id: "narration1", name: "Direct & Indirect Speech", tag: "MED" },
        { id: "sentence-rearrangement1", name: "Sentence Rearrangement", tag: "MED" },
      ]},
      { id: "comprehension1", name: "Comprehension-Based", topics: [
        { id: "reading-comprehension1", name: "Reading Comprehension", tag: "HIGH" },
        { id: "cloze-test1", name: "Cloze Test", tag: "HIGH" },
      ]},
    ],
  },

  // ---------------- TIER-II PAPER-I ----------------
  {
    id: "math2", tier: "Tier-II", name: "Mathematical Abilities", icon: Calculator,
    accent: "#3E5C1F", accentBg: "#e7edda",
    sections: [
      { id: "number-fundamentals2", name: "Number Systems & Fundamental Operations", topics: [
        { id: "whole-decimals-fractions2", name: "Computation of Whole Numbers, Decimals & Fractions", tag: "HIGH" },
        { id: "pct-ratio-avg2", name: "Percentages, Ratio & Proportion, Averages", tag: "HIGH" },
        { id: "interest-profit-mix2", name: "Interest, Profit & Loss, Discount, Partnership, Mixture & Alligation", tag: "HIGH" },
        { id: "time-work-distance2", name: "Time & Distance, Time & Work", tag: "HIGH" },
      ]},
      { id: "algebra2", name: "Algebra", topics: [
        { id: "identities-surds2", name: "Basic Algebraic Identities & Elementary Surds", tag: "HIGH" },
        { id: "graphs-linear2", name: "Graphs of Linear Equations", tag: "MED" },
      ]},
      { id: "geometry2", name: "Geometry", topics: [
        { id: "triangle-centres2", name: "Triangle and its Various Kinds of Centres", tag: "HIGH" },
        { id: "congruence-similarity2", name: "Congruence & Similarity of Triangles", tag: "HIGH" },
        { id: "circle-tangents2", name: "Circle — Chords, Tangents, Common Tangents", tag: "HIGH" },
      ]},
      { id: "mensuration2", name: "Mensuration", topics: [
        { id: "2d-figures2", name: "2-D Figures — Triangle, Quadrilaterals, Regular Polygons, Circle", tag: "HIGH" },
        { id: "3d-solids2", name: "3-D Solids — Prism, Cone, Cylinder, Sphere, Pyramid, Cuboid", tag: "HIGH" },
      ]},
      { id: "trigonometry2", name: "Trigonometry", topics: [
        { id: "trig-ratios2", name: "Trigonometric Ratios & Standard Identities", tag: "HIGH" },
        { id: "complementary-angles2", name: "Complementary Angles", tag: "MED" },
        { id: "heights-distances2", name: "Heights & Distances (simple problems)", tag: "HIGH" },
      ]},
      { id: "stats-probability2", name: "Statistics & Probability", topics: [
        { id: "tables-graphs2", name: "Use of Tables & Graphs", tag: "MED" },
        { id: "central-tendency2", name: "Measures of Central Tendency", tag: "HIGH" },
        { id: "probability2", name: "Calculation of Simple Probabilities", tag: "MED" },
      ]},
    ],
  },
  {
    id: "reasoning2", tier: "Tier-II", name: "Reasoning & General Intelligence", icon: Brain,
    accent: "#122E4D", accentBg: "#e1e7f0",
    sections: [
      { id: "verbal2", name: "Verbal Reasoning", topics: [
        { id: "analogy-classification2", name: "Semantic / Symbolic / Number Analogy & Classification", tag: "HIGH" },
        { id: "series-trends2", name: "Semantic Series, Number Series, Trends", tag: "HIGH" },
        { id: "coding-numerical2", name: "Coding-Decoding & Numerical Operations", tag: "HIGH" },
        { id: "word-inferences2", name: "Word Building & Drawing Inferences", tag: "MED" },
      ]},
      { id: "nonverbal2", name: "Non-Verbal Reasoning", topics: [
        { id: "figural-analogy2", name: "Figural Analogy, Classification & Series", tag: "HIGH" },
        { id: "folding-completion2", name: "Figural Pattern — Folding & Completion", tag: "HIGH" },
        { id: "space-embedded2", name: "Space Orientation & Embedded Figures", tag: "MED" },
        { id: "venn2", name: "Venn Diagrams", tag: "HIGH" },
      ]},
      { id: "higher-order2", name: "Higher-Order Reasoning", topics: [
        { id: "critical-thinking2", name: "Critical Thinking & Problem Solving", tag: "MED" },
        { id: "emotional-social2", name: "Emotional & Social Intelligence", tag: "MED" },
      ]},
    ],
  },
  {
    id: "english2", tier: "Tier-II", name: "English Language & Comprehension", icon: Languages,
    accent: "#9c3d3d", accentBg: "#f4e4e0",
    sections: [
      { id: "vocabulary2", name: "Vocabulary", topics: [
        { id: "synonyms2", name: "Synonyms / Homonyms, Antonyms", tag: "HIGH" },
        { id: "one-word-idioms2", name: "One-Word Substitution, Idioms & Phrases", tag: "HIGH" },
        { id: "spellings2", name: "Spellings / Detecting Misspelt Words", tag: "MED" },
      ]},
      { id: "grammar2", name: "Grammar & Sentence Structure", topics: [
        { id: "spot-error2", name: "Spot the Error", tag: "HIGH" },
        { id: "improvement2", name: "Improvement of Sentences", tag: "HIGH" },
        { id: "fill-blanks2", name: "Fill in the Blanks", tag: "HIGH" },
        { id: "active-narration2", name: "Active/Passive Voice & Narration", tag: "HIGH" },
        { id: "shuffling2", name: "Shuffling of Sentence Parts & Passage", tag: "MED" },
      ]},
      { id: "comprehension2", name: "Comprehension-Based", topics: [
        { id: "cloze2", name: "Cloze Passage", tag: "HIGH" },
        { id: "rc2", name: "Comprehension Passage", tag: "HIGH" },
      ]},
    ],
  },
  {
    id: "ga2", tier: "Tier-II", name: "General Awareness", icon: Landmark,
    accent: "#a37421", accentBg: "#f3e6c9",
    sections: [
      { id: "core-areas2", name: "Core Areas — Higher Depth than Tier-I", topics: [
        { id: "india-neighbours2", name: "India & Neighbouring Countries", tag: "HIGH" },
        { id: "science-recent2", name: "Science (Applied & Recent Developments)", tag: "HIGH" },
        { id: "current-affairs2", name: "Current Affairs", tag: "HIGH" },
        { id: "books-sports-schemes2", name: "Books & Authors, Sports, Important Schemes", tag: "MED" },
        { id: "days-portfolio2", name: "Important Days & Dates, Portfolio, People in News", tag: "MED" },
      ]},
    ],
  },
  {
    id: "computer2", tier: "Tier-II", name: "Computer Proficiency & DEST", icon: Monitor,
    accent: "#7A3B12", accentBg: "#f1e2d3",
    sections: [
      { id: "cpt", name: "Module I — Computer Proficiency Test", topics: [
        { id: "computer-basics", name: "Computer Basics", tag: "HIGH" },
        { id: "software", name: "Software", tag: "MED" },
        { id: "internet-email", name: "Internet & E-mails", tag: "MED" },
        { id: "networking-security", name: "Networking & Cyber Security", tag: "MED" },
      ]},
      { id: "dest", name: "Module II — Data Entry Speed Test", topics: [
        { id: "data-entry-task", name: "One Data Entry Task", tag: null },
      ]},
    ],
  },

  // ---------------- TIER-II PAPER-II ----------------
  {
    id: "stats", tier: "Tier-II · Statistics", name: "Statistics (JSO / Compiler)", icon: Sigma,
    accent: "#5A2D5E", accentBg: "#eee3ef",
    sections: [
      { id: "stats-units", name: "Unit-wise Syllabus", topics: [
        { id: "collection-presentation", name: "1. Collection, Classification & Presentation of Data", tag: null },
        { id: "central-tendency-stats", name: "2. Measures of Central Tendency", tag: null },
        { id: "dispersion", name: "3. Measures of Dispersion", tag: null },
        { id: "moments-skewness", name: "4. Moments, Skewness & Kurtosis", tag: null },
        { id: "correlation-regression", name: "5. Correlation & Regression", tag: null },
        { id: "probability-theory", name: "6. Probability Theory", tag: null },
        { id: "random-variable", name: "7. Random Variable & Probability Distributions", tag: null },
        { id: "sampling-theory", name: "8. Sampling Theory", tag: null },
        { id: "statistical-inference", name: "9. Statistical Inference", tag: null },
        { id: "anova", name: "10. Analysis of Variance", tag: null },
        { id: "time-series", name: "11. Time Series Analysis", tag: null },
        { id: "index-numbers", name: "12. Index Numbers", tag: null },
      ]},
    ],
  },
];

// mark ready flag explicitly false where absent, and compute helper indexes
SUBJECTS.forEach(s => s.sections.forEach(sec => sec.topics.forEach(t => { if (t.ready === undefined) t.ready = false; })));

const TIERS = ["Tier-I", "Tier-II", "Tier-II · Statistics"];

const totalTopics = SUBJECTS.reduce((sum, s) => sum + s.sections.reduce((s2, sec) => s2 + sec.topics.length, 0), 0);
const readyTopics = SUBJECTS.reduce((sum, s) => sum + s.sections.reduce((s2, sec) => s2 + sec.topics.filter(t => t.ready).length, 0), 0);

function findTopicMeta(topicId) {
  for (const subject of SUBJECTS) {
    for (const section of subject.sections) {
      const topic = section.topics.find(t => t.id === topicId);
      if (topic) return { subject, section, topic };
    }
  }
  return null;
}

/* ============================================================
   PLACEHOLDER ARTICLE
============================================================ */
const ComingSoonArticle = ({ topic, subject }) => {
  const Icon = subject.icon;
  return (
    <div className="flex flex-col items-center justify-center text-center pt-20 pb-10 px-6">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: subject.accentBg }}>
        <Icon size={24} style={{ color: subject.accent }} />
      </div>
      <h1 className="font-display text-[19px] font-bold mb-1.5" style={{ color: "var(--text)" }}>{topic.name}</h1>
      <Tag tag={topic.tag} />
      <p className="text-[13.5px] mt-3 max-w-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
        This topic's full study material is queued and will be added in an upcoming session, in the same
        detailed format as Constitutional Framework — formulas, PYQ patterns, and practice questions included.
      </p>
    </div>
  );
};

/* ============================================================
   TOP BAR
============================================================ */
const TopBar = ({ title, onBack, onMenu, theme, onToggleTheme }) => (
  <div className="sticky top-0 z-20 backdrop-blur px-4 py-3 flex items-center gap-2.5" style={{ background: "color-mix(in srgb, var(--bg) 92%, transparent)", borderBottom: "1px solid var(--border)" }}>
    {onBack ? (
      <button onClick={onBack} className="w-8 h-8 -ml-1 flex items-center justify-center rounded-full shrink-0">
        <ArrowLeft size={18} style={{ color: "var(--text-soft)" }} />
      </button>
    ) : (
      <button onClick={onMenu} className="w-8 h-8 -ml-1 flex items-center justify-center rounded-full shrink-0">
        <Menu size={19} style={{ color: "var(--text-soft)" }} />
      </button>
    )}
    <p className="font-display font-semibold text-[15px] truncate flex-1" style={{ color: "var(--text)" }}>{title}</p>
    {onBack && (
      <button onClick={onMenu} className="w-8 h-8 flex items-center justify-center rounded-full shrink-0">
        <Layers size={16} style={{ color: "var(--text-soft)" }} />
      </button>
    )}
    <button onClick={onToggleTheme} className="w-8 h-8 flex items-center justify-center rounded-full border shrink-0" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      {theme === "dark" ? <Sun size={14} style={{ color: "var(--text-soft)" }} /> : <Moon size={14} style={{ color: "var(--text-soft)" }} />}
    </button>
  </div>
);

/* ============================================================
   NAV DRAWER — full syllabus, collapsible, searchable
============================================================ */
const NavDrawer = ({ open, onClose, onSelectTopic }) => {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState({ ga1: true });

  const filtered = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();
    const results = [];
    SUBJECTS.forEach(subject => {
      subject.sections.forEach(section => {
        section.topics.forEach(topic => {
          if (topic.name.toLowerCase().includes(q)) {
            results.push({ subject, section, topic });
          }
        });
      });
    });
    return results;
  }, [query]);

  const toggle = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "var(--scrim)" }}
      />
      <div
        className="fixed top-0 left-0 bottom-0 z-50 w-[86vw] max-w-[340px] flex flex-col transition-transform duration-200"
        style={{ background: "var(--bg)", transform: open ? "translateX(0)" : "translateX(-100%)", borderRight: "1px solid var(--border)" }}
      >
        <div className="flex items-center justify-between px-4 py-3.5" style={{ borderBottom: "1px solid var(--border)" }}>
          <p className="font-display font-bold text-[15px]" style={{ color: "var(--text)" }}>Full Syllabus</p>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full">
            <X size={18} style={{ color: "var(--text-soft)" }} />
          </button>
        </div>

        <div className="px-4 pt-3 pb-2">
          <div className="flex items-center gap-2 rounded-lg border px-3 py-2" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <Search size={14} style={{ color: "var(--text-muted)" }} />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search any topic…"
              className="flex-1 bg-transparent outline-none text-[13.5px]"
              style={{ color: "var(--text)" }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-6">
          {filtered ? (
            filtered.length === 0 ? (
              <p className="text-[13px] mt-6 text-center" style={{ color: "var(--text-muted)" }}>No topics match "{query}"</p>
            ) : (
              <div className="space-y-1.5 mt-1">
                {filtered.map(({ subject, section, topic }) => (
                  <button
                    key={topic.id}
                    onClick={() => { onSelectTopic(topic.id); setQuery(""); }}
                    className="w-full flex items-start gap-2.5 rounded-lg px-2.5 py-2.5 text-left"
                    style={{ background: "var(--surface)" }}
                  >
                    {topic.ready
                      ? <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: "#3f6b4d" }} />
                      : <Circle size={15} className="mt-0.5 shrink-0" style={{ color: "var(--text-muted)" }} />}
                    <span className="flex-1 min-w-0">
                      <span className="block text-[13px]" style={{ color: "var(--text)" }}>{topic.name}</span>
                      <span className="block text-[11px] mt-0.5" style={{ color: "var(--text-muted)" }}>{subject.name} · {section.name}</span>
                    </span>
                  </button>
                ))}
              </div>
            )
          ) : (
            TIERS.map(tier => (
              <div key={tier} className="mb-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide mt-4 mb-2" style={{ color: "var(--text-muted)" }}>{tier}</p>
                {SUBJECTS.filter(s => s.tier === tier).map(subject => {
                  const Icon = subject.icon;
                  const isOpen = !!expanded[subject.id];
                  const total = subject.sections.reduce((s, sec) => s + sec.topics.length, 0);
                  const ready = subject.sections.reduce((s, sec) => s + sec.topics.filter(t => t.ready).length, 0);
                  return (
                    <div key={subject.id} className="mb-1.5">
                      <button
                        onClick={() => toggle(subject.id)}
                        className="w-full flex items-center gap-2.5 rounded-lg px-2.5 py-2.5"
                        style={{ background: "var(--surface)" }}
                      >
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: subject.accentBg }}>
                          <Icon size={13} style={{ color: subject.accent }} />
                        </div>
                        <span className="flex-1 text-left text-[13px] font-medium min-w-0 truncate" style={{ color: "var(--text)" }}>{subject.name}</span>
                        <span className="text-[10.5px] shrink-0" style={{ color: "var(--text-muted)" }}>{ready}/{total}</span>
                        <ChevronDown size={14} style={{ color: "var(--text-muted)" }} className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="pl-4 mt-1 space-y-2.5">
                          {subject.sections.map(section => (
                            <div key={section.id}>
                              <p className="text-[10.5px] font-semibold uppercase tracking-wide mb-1 mt-2" style={{ color: "var(--text-muted)" }}>{section.name}</p>
                              <div className="space-y-1">
                                {section.topics.map(topic => (
                                  <button
                                    key={topic.id}
                                    onClick={() => onSelectTopic(topic.id)}
                                    className="w-full flex items-center gap-2 rounded-md px-2 py-1.5 text-left"
                                  >
                                    {topic.ready
                                      ? <CheckCircle2 size={13} className="shrink-0" style={{ color: "#3f6b4d" }} />
                                      : <Circle size={13} className="shrink-0" style={{ color: "var(--text-muted)" }} />}
                                    <span className="flex-1 text-[12.5px] truncate" style={{ color: topic.ready ? "var(--text)" : "var(--text-soft)" }}>{topic.name}</span>
                                    <Tag tag={topic.tag} />
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

/* ============================================================
   SCREENS
============================================================ */
const HomeScreen = ({ openTopic, openSubject }) => (
  <div>
    <div className="px-5 pt-6 pb-4">
      <p className="text-[13px] mb-0.5" style={{ color: "var(--text-muted)" }}>Good luck with your prep</p>
      <h1 className="font-display text-[22px] font-bold" style={{ color: "var(--text)" }}>SSC CGL 2026</h1>
    </div>

    <div className="px-5 mb-6">
      <div className="grid grid-cols-3 gap-2.5">
        <div className="rounded-xl border p-3 text-center" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <p className="font-display font-bold text-lg" style={{ color: "var(--text)" }}>{totalTopics}</p>
          <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>Total topics</p>
        </div>
        <div className="rounded-xl border p-3 text-center" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <p className="font-display font-bold text-lg" style={{ color: "#3f6b4d" }}>{readyTopics}</p>
          <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>Ready now</p>
        </div>
        <div className="rounded-xl border p-3 text-center" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <p className="font-display font-bold text-lg" style={{ color: "var(--text)" }}>{SUBJECTS.length}</p>
          <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>Subjects</p>
        </div>
      </div>
    </div>

    <div className="px-5 mb-2">
      <p className="text-[12px] font-semibold uppercase tracking-wide mb-2.5" style={{ color: "var(--text-muted)" }}>Continue studying</p>
      <button onClick={() => openTopic("constitutional-framework")} className="w-full text-left rounded-2xl p-4 flex items-center gap-3.5" style={{ background: "var(--navy)" }}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(233,196,106,.18)" }}>
          <Landmark size={20} style={{ color: "var(--gold)" }} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] mb-0.5" style={{ color: "rgba(233,196,106,.85)" }}>General Awareness · Polity</p>
          <p className="font-display font-semibold text-[14.5px] truncate" style={{ color: "var(--navy-text)" }}>Constitutional Framework</p>
        </div>
        <ChevronRight size={18} style={{ color: "rgba(243,239,225,.5)" }} className="shrink-0" />
      </button>
    </div>

    <div className="px-5 mt-7 pb-4">
      <p className="text-[12px] font-semibold uppercase tracking-wide mb-2.5" style={{ color: "var(--text-muted)" }}>Subjects</p>
      <div className="space-y-2.5">
        {SUBJECTS.map(subject => {
          const total = subject.sections.reduce((s, sec) => s + sec.topics.length, 0);
          const ready = subject.sections.reduce((s, sec) => s + sec.topics.filter(t => t.ready).length, 0);
          const Icon = subject.icon;
          return (
            <button key={subject.id} onClick={() => openSubject(subject.id)} className="w-full flex items-center gap-3.5 rounded-2xl border p-3.5 text-left" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: subject.accentBg }}>
                <Icon size={20} style={{ color: subject.accent }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10.5px] font-medium mb-0.5" style={{ color: "var(--text-muted)" }}>{subject.tier}</p>
                <p className="font-display font-semibold text-[14.5px]" style={{ color: "var(--text)" }}>{subject.name}</p>
                <p className="text-[12px]" style={{ color: "var(--text-muted)" }}>{ready}/{total} topics ready</p>
              </div>
              <ChevronRight size={18} style={{ color: "var(--text-muted)" }} className="shrink-0" />
            </button>
          );
        })}
      </div>
    </div>
  </div>
);

const SubjectsScreen = ({ openSubject }) => (
  <div className="px-5 pt-6 pb-4">
    <h1 className="font-display text-[20px] font-bold mb-4" style={{ color: "var(--text)" }}>All Subjects</h1>
    {TIERS.map(tier => (
      <div key={tier} className="mb-5">
        <p className="text-[11.5px] font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--text-muted)" }}>{tier}</p>
        <div className="space-y-2.5">
          {SUBJECTS.filter(s => s.tier === tier).map(subject => {
            const total = subject.sections.reduce((s, sec) => s + sec.topics.length, 0);
            const ready = subject.sections.reduce((s, sec) => s + sec.topics.filter(t => t.ready).length, 0);
            const Icon = subject.icon;
            return (
              <button key={subject.id} onClick={() => openSubject(subject.id)} className="w-full flex items-center gap-3.5 rounded-2xl border p-4 text-left" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: subject.accentBg }}>
                  <Icon size={21} style={{ color: subject.accent }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-semibold text-[15px]" style={{ color: "var(--text)" }}>{subject.name}</p>
                  <p className="text-[12.5px]" style={{ color: "var(--text-muted)" }}>{subject.sections.length} sections · {total} topics</p>
                  <div className="h-1.5 rounded-full mt-2 overflow-hidden" style={{ background: "var(--surface-sunk)" }}>
                    <div className="h-full rounded-full" style={{ width: `${(ready / total) * 100}%`, background: subject.accent }} />
                  </div>
                </div>
                <ChevronRight size={18} style={{ color: "var(--text-muted)" }} className="shrink-0" />
              </button>
            );
          })}
        </div>
      </div>
    ))}
  </div>
);

const SubjectDetailScreen = ({ subjectId, openTopic }) => {
  const subject = SUBJECTS.find(s => s.id === subjectId);
  const [openSection, setOpenSection] = useState(subject.sections[0].id);
  return (
    <div className="px-5 pt-5 pb-6">
      {subject.sections.map(section => (
        <div key={section.id} className="mb-2.5">
          <button onClick={() => setOpenSection(openSection === section.id ? null : section.id)} className="w-full flex items-center justify-between py-2.5">
            <p className="font-display font-semibold text-[14.5px]" style={{ color: "var(--text)" }}>{section.name}</p>
            <ChevronDown size={16} style={{ color: "var(--text-muted)" }} className={`transition-transform ${openSection === section.id ? "rotate-180" : ""}`} />
          </button>
          {openSection === section.id && (
            <div className="space-y-2 pb-2">
              {section.topics.map(topic => (
                <button key={topic.id} onClick={() => openTopic(topic.id)} className="w-full flex items-center gap-3 rounded-xl border px-3.5 py-3 text-left" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                  {topic.ready
                    ? <CheckCircle2 size={17} className="shrink-0" style={{ color: "#3f6b4d" }} />
                    : <Circle size={17} className="shrink-0" style={{ color: "var(--text-muted)" }} />}
                  <span className="flex-1 text-[13.5px] min-w-0" style={{ color: "var(--text-soft)" }}>{topic.name}</span>
                  <Tag tag={topic.tag} />
                  {!topic.ready && <Lock size={13} className="shrink-0" style={{ color: "var(--text-muted)" }} />}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const TopicScreen = ({ topicId }) => {
  const meta = findTopicMeta(topicId);
  if (!meta) return null;
  const { subject, topic } = meta;
  const ArticleComponent = topic.ready ? CONTENT[topicId] : null;
  return (
    <div className="px-5 pt-5">
      {ArticleComponent
        ? <ArticleComponent />
        : <ComingSoonArticle topic={topic} subject={subject} />}
    </div>
  );
};

const PracticeScreen = () => (
  <div className="px-5 pt-24 flex flex-col items-center text-center">
    <ClipboardList size={26} style={{ color: "var(--text-muted)" }} className="mb-3" />
    <p className="font-display font-semibold text-[15px]" style={{ color: "var(--text)" }}>Practice sets coming soon</p>
    <p className="text-[13px] mt-1.5 max-w-xs" style={{ color: "var(--text-muted)" }}>Full-length and topic-wise mock tests will appear here as each topic goes live.</p>
  </div>
);

const SavedScreen = () => (
  <div className="px-5 pt-24 flex flex-col items-center text-center">
    <Bookmark size={26} style={{ color: "var(--text-muted)" }} className="mb-3" />
    <p className="font-display font-semibold text-[15px]" style={{ color: "var(--text)" }}>Nothing saved yet</p>
    <p className="text-[13px] mt-1.5 max-w-xs" style={{ color: "var(--text-muted)" }}>Bookmark any article or question and it'll show up here for quick revision.</p>
  </div>
);

/* ============================================================
   BOTTOM NAV
============================================================ */
const BottomNav = ({ tab, setTab }) => {
  const items = [
    { id: "home", label: "Home", icon: Home },
    { id: "subjects", label: "Subjects", icon: Layers },
    { id: "practice", label: "Practice", icon: ClipboardList },
    { id: "saved", label: "Saved", icon: Bookmark },
  ];
  return (
    <div className="sticky bottom-0 flex" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
      {items.map(item => {
        const Icon = item.icon;
        const active = tab === item.id;
        return (
          <button key={item.id} onClick={() => setTab(item.id)} className="flex-1 flex flex-col items-center gap-1 py-2.5">
            <Icon size={19} style={{ color: active ? "var(--text)" : "var(--text-muted)" }} strokeWidth={active ? 2.4 : 2} />
            <span className="text-[10.5px]" style={{ color: active ? "var(--text)" : "var(--text-muted)", fontWeight: active ? 600 : 400 }}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

/* ============================================================
   ROOT APP
============================================================ */
export default function App() {
  const [tab, setTab] = useState("home");
  const [stack, setStack] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const goTab = (t) => { setTab(t); setStack([]); };
  const openSubject = (id) => setStack([...stack, { type: "subject", id }]);
  const openTopic = (id) => setStack([...stack, { type: "topic", id }]);
  const goBack = () => setStack(stack.slice(0, -1));
  const selectFromDrawer = (topicId) => { setStack([{ type: "topic", id: topicId }]); setDrawerOpen(false); };

  const top = stack[stack.length - 1];
  let screenTitle = "SSC CGL Prep";
  if (top?.type === "subject") screenTitle = SUBJECTS.find(s => s.id === top.id)?.name;
  if (top?.type === "topic") screenTitle = findTopicMeta(top.id)?.topic.name;

  return (
    <div className="min-h-screen flex justify-center font-body theme-root ${theme === 'dark' ? 'dark' : ''}" >
      <FontLoader />
      <div className={`w-full max-w-md min-h-screen flex flex-col relative shadow-xl theme-root ${theme === "dark" ? "dark" : ""}`} style={{ background: "var(--bg)" }}>
        <TopBar
          title={stack.length > 0 ? screenTitle : "SSC CGL Prep"}
          onBack={stack.length > 0 ? goBack : null}
          onMenu={() => setDrawerOpen(true)}
          theme={theme}
          onToggleTheme={() => setTheme(t => (t === "light" ? "dark" : "light"))}
        />

        <div className="flex-1 overflow-y-auto pb-4">
          {stack.length === 0 && tab === "home" && <HomeScreen openTopic={openTopic} openSubject={openSubject} />}
          {stack.length === 0 && tab === "subjects" && <SubjectsScreen openSubject={openSubject} />}
          {stack.length === 0 && tab === "practice" && <PracticeScreen />}
          {stack.length === 0 && tab === "saved" && <SavedScreen />}
          {top?.type === "subject" && <SubjectDetailScreen subjectId={top.id} openTopic={openTopic} />}
          {top?.type === "topic" && <TopicScreen topicId={top.id} />}
        </div>

        {stack.length === 0 && <BottomNav tab={tab} setTab={goTab} />}

        <NavDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} onSelectTopic={selectFromDrawer} />
      </div>
    </div>
  );
}
