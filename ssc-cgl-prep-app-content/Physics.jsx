import React from "react";
import {
  SectionHeading, DataTable, Callout, Accordion, MCQItem,
  ArticleHeader, ArticleFooter
} from "../StudyUI";

export default function Physics() {
  return (
    <div className="pb-10">
      <ArticleHeader
        eyebrow1="General Awareness · Section B"
        eyebrow2="General Science"
        priority="MED"
        title="Physics"
        dek="Applied, everyday physics — the SI units, laws, and formulas SSC tests as quick single-fact recall, not calculation. Mechanics, heat, light, sound, electricity, and the handful of scientist-discovery pairs that show up every cycle."
        stats={[
          { value: "7", label: "SI base units — everything else is derived from these" },
          { value: "3", label: "Newton's Laws of Motion" },
          { value: "9.8 m/s²", label: "Acceleration due to gravity (g) at Earth's surface" },
          { value: "343 m/s", label: "Speed of sound in air at room temperature" },
        ]}
      />

      {/* 1. Units */}
      <SectionHeading num="01" title="Units & Measurement" />
      <DataTable headers={["Quantity", "SI Unit"]} rows={[
        ["Length", "metre (m)"],
        ["Mass", "kilogram (kg)"],
        ["Time", "second (s)"],
        ["Electric current", "ampere (A)"],
        ["Temperature", "kelvin (K)"],
        ["Amount of substance", "mole (mol)"],
        ["Luminous intensity", "candela (cd)"],
      ]} />
      <Callout type="exam" label="Exam focus">
        These 7 are the <b>SI base units</b> — every other physical unit (force, energy, pressure, etc.) is
        derived by combining these. Derived-unit questions ("SI unit of force?") are the most common format.
      </Callout>

      {/* 2. Laws of Motion */}
      <SectionHeading num="02" title="Laws of Motion & Force" />
      <DataTable headers={["Law", "Statement"]} rows={[
        ["Newton's First Law", "An object stays at rest or in uniform motion unless acted on by an external force — also called the Law of Inertia"],
        ["Newton's Second Law", "Force = mass × acceleration (F = ma); force equals the rate of change of momentum"],
        ["Newton's Third Law", "For every action, there is an equal and opposite reaction"],
      ]} />
      <Accordion chip="Friction" title="Types of Friction">
        <p>Friction opposes relative motion between two surfaces in contact. In increasing order of
          magnitude for the same surfaces: <b>Rolling friction &lt; Sliding (kinetic) friction &lt; Static
          friction</b> — which is why rolling something is easier than dragging it.</p>
      </Accordion>

      {/* 3. Work, Energy, Power */}
      <SectionHeading num="03" title="Work, Energy & Power" />
      <DataTable headers={["Quantity", "Formula", "SI Unit"]} rows={[
        ["Work", "Force × displacement (in the direction of force)", "Joule (J)"],
        ["Kinetic Energy", "½ × mass × velocity²", "Joule (J)"],
        ["Potential Energy (gravitational)", "mass × g × height", "Joule (J)"],
        ["Power", "Work ÷ Time", "Watt (W)"],
      ]} />
      <Callout type="mnemonic" label="Memory aid">
        The <b>Law of Conservation of Energy</b> — energy can't be created or destroyed, only converted from
        one form to another — is the single most-tested concept in this section. The commercial unit of
        electrical energy, the <b>kilowatt-hour (kWh)</b> — the "unit" on an electricity bill — trips up
        students who assume it must be a unit of power, not energy.
      </Callout>

      {/* 4. Gravitation */}
      <SectionHeading num="04" title="Gravitation" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li><b>Newton's Law of Gravitation</b> — every object attracts every other object with a force
          proportional to the product of their masses and inversely proportional to the square of the
          distance between them</li>
        <li><b>Escape velocity</b> from Earth ≈ <b>11.2 km/s</b> — the minimum speed needed to break free of
          Earth's gravity without further propulsion</li>
      </ul>
      <DataTable headers={["Kepler's Law", "Statement"]} rows={[
        ["Law of Orbits (1st)", "Planets move in elliptical orbits with the Sun at one focus"],
        ["Law of Areas (2nd)", "A planet sweeps equal areas in equal time — moving faster when closer to the Sun"],
        ["Law of Periods (3rd)", "The square of a planet's orbital period is proportional to the cube of its orbit's semi-major axis (T² ∝ r³)"],
      ]} />
      <Callout type="trap" label="Common trap">
        <b>Mass</b> is the amount of matter in an object and never changes; <b>weight</b> = mass × g, and
        changes depending on gravitational pull — an astronaut has the same mass on the Moon as on Earth, but
        weighs far less there.
      </Callout>

      {/* 5. Heat */}
      <SectionHeading num="05" title="Heat & Thermodynamics" />
      <DataTable headers={["Mode", "How it works"]} rows={[
        ["Conduction", "Heat transfer through direct contact — works only in solids"],
        ["Convection", "Heat transfer via movement of heated particles — works in liquids & gases"],
        ["Radiation", "Heat transfer via electromagnetic waves — needs no medium at all (how sunlight reaches Earth)"],
      ]} />
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        <b>Kelvin</b> is the SI unit of temperature; absolute zero (0 K = −273.15°C) is the theoretical point
        of zero molecular motion. Water's unusually <b>high specific heat capacity</b> is why coastal regions
        have milder climates than inland areas at the same latitude.
      </p>

      {/* 6. Light */}
      <SectionHeading num="06" title="Light — Reflection, Refraction & Optical Instruments" />
      <DataTable headers={["Mirror/Lens", "Nature", "Common use"]} rows={[
        ["Concave mirror", "Converging", "Torches, headlights, shaving/makeup mirrors"],
        ["Convex mirror", "Diverging", "Vehicle rear-view mirrors — gives a wider field of view"],
        ["Convex lens", "Converging", "Magnifying glasses; corrects hypermetropia (far-sightedness)"],
        ["Concave lens", "Diverging", "Corrects myopia (near-sightedness)"],
      ]} />
      <Accordion chip="Eye defects" title="Common Human Eye Defects">
        <ul className="list-disc pl-4 space-y-1.5">
          <li><b>Myopia</b> (near-sightedness) — distant objects appear blurry; corrected with a concave lens</li>
          <li><b>Hypermetropia</b> (far-sightedness) — nearby objects appear blurry; corrected with a convex lens</li>
          <li><b>Presbyopia</b> — age-related loss of near-focus ability; corrected with bifocal lenses</li>
          <li><b>Astigmatism</b> — irregular corneal curvature; corrected with a cylindrical lens</li>
        </ul>
      </Accordion>
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        <b>Dispersion</b> — a prism splits white light into the VIBGYOR spectrum because different
        wavelengths of light refract by different amounts.
      </p>

      {/* 7. Sound */}
      <SectionHeading num="07" title="Sound" />
      <ul className="list-disc pl-6 space-y-1.5 text-[13.5px] mb-3" style={{ color: "var(--text-soft)" }}>
        <li>Sound needs a medium to travel — unlike light, it <b>cannot travel through a vacuum</b></li>
        <li>Speed of sound is <b>fastest in solids, slowest in gases</b> — the denser/more rigid the medium,
          the faster sound travels through it (the opposite trend from light)</li>
        <li>Human audible range: <b>20 Hz to 20,000 Hz</b>; below this is infrasound, above it is ultrasound</li>
        <li><b>Ultrasound</b> is used in SONAR and medical imaging (ultrasonography)</li>
        <li>The <b>Doppler Effect</b> — the apparent change in pitch/frequency when a sound source and
          listener move relative to each other (e.g. a siren's pitch as it passes you)</li>
      </ul>

      {/* 8. Electricity */}
      <SectionHeading num="08" title="Electricity & Magnetism" />
      <Callout type="exam" label="Exam focus — Ohm's Law">
        <b>V = IR</b> (Voltage = Current × Resistance) is the single most-tested electricity formula.
        Electric Power can then be written as P = VI = I²R = V²/R — useful for questions that give you any
        two of the three quantities.
      </Callout>
      <DataTable headers={["Circuit type", "Key rule"]} rows={[
        ["Series circuit", "Same current flows through every component; total resistance = sum of individual resistances"],
        ["Parallel circuit", "Same voltage across every branch; total resistance is found by adding reciprocals"],
      ]} />
      <p className="text-[13.5px] mb-2" style={{ color: "var(--text-muted)" }}>
        <b>Electromagnetic Induction</b> (Faraday's Law) — a changing magnetic field induces an electric
        current; this is the working principle behind generators and transformers.
      </p>
      <Callout type="mnemonic" label="Electromagnetic Spectrum">
        In order of increasing frequency (and energy): <b>Radio waves → Microwaves → Infrared → Visible
        light → Ultraviolet → X-rays → Gamma rays.</b> Radio waves have the lowest energy; gamma rays the highest.
      </Callout>

      {/* 9. Modern physics */}
      <SectionHeading num="09" title="Modern Physics — Atoms, Radioactivity & Nuclear Energy" />
      <DataTable headers={["Radiation type", "Nature", "Penetrating power"]} rows={[
        ["Alpha (α)", "Helium nucleus (2 protons + 2 neutrons)", "Least — stopped by paper"],
        ["Beta (β)", "High-speed electron", "Moderate — stopped by a thin metal sheet"],
        ["Gamma (γ)", "High-energy electromagnetic wave", "Most — needs thick lead/concrete to stop"],
      ]} />
      <DataTable headers={["Process", "What happens"]} rows={[
        ["Nuclear Fission", "A heavy nucleus (e.g. Uranium-235) splits into lighter nuclei, releasing energy — powers nuclear reactors"],
        ["Nuclear Fusion", "Light nuclei combine into a heavier one, releasing even more energy — powers the Sun"],
      ]} />
      <p className="text-[13.5px]" style={{ color: "var(--text-muted)" }}>
        <b>Half-life</b> is the time taken for half of a radioactive sample to decay — a fixed property of
        each radioactive isotope, unaffected by external conditions.
      </p>

      {/* 10. Quick revision */}
      <SectionHeading num="10" title="Quick Revision — Inventions & SI Units Cheat Sheet" />
      <DataTable headers={["Scientist", "Known for"]} rows={[
        ["Isaac Newton", "Laws of Motion; Universal Law of Gravitation"],
        ["Michael Faraday", "Electromagnetic Induction"],
        ["J. J. Thomson", "Discovery of the electron"],
        ["Ernest Rutherford", "Discovery of the atomic nucleus (gold foil experiment)"],
        ["James Chadwick", "Discovery of the neutron"],
        ["Henri Becquerel", "Discovery of radioactivity (1896)"],
        ["Marie & Pierre Curie", "Discovery of Radium and Polonium"],
        ["Wilhelm Roentgen", "Discovery of X-rays"],
        ["Albert Einstein", "Theory of Relativity (E = mc²)"],
      ]} />
      <DataTable headers={["Quantity", "SI Unit"]} rows={[
        ["Force", "Newton (N)"],
        ["Work / Energy", "Joule (J)"],
        ["Power", "Watt (W)"],
        ["Pressure", "Pascal (Pa)"],
        ["Frequency", "Hertz (Hz)"],
        ["Electric charge", "Coulomb (C)"],
        ["Electric potential", "Volt (V)"],
        ["Resistance", "Ohm (Ω)"],
      ]} />

      {/* 11. Practice */}
      <SectionHeading num="11" title="Practice Questions" />
      <p className="text-[13.5px] mb-1" style={{ color: "var(--text-muted)" }}>Ten questions in the pattern SSC CGL has actually used.</p>
      <MCQItem n={1} q="The SI unit of force is:"
        options={["Joule", "Watt", "Newton", "Pascal"]}
        correctIndex={2} explanation="Newton (N) = kg·m/s²." />
      <MCQItem n={2} q="'For every action, there is an equal and opposite reaction' is:"
        options={["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Kepler's Law"]}
        correctIndex={2} explanation="Newton's Third Law of Motion." />
      <MCQItem n={3} q="The SI unit of power is:"
        options={["Joule", "Watt", "Newton", "Volt"]}
        correctIndex={1} explanation="Watt (W) = Joule/second." />
      <MCQItem n={4} q="Kepler's Third Law states that the square of a planet's orbital period is proportional to:"
        options={["Its mass", "The cube of its orbit's semi-major axis", "Its distance from Earth", "The square of its radius"]}
        correctIndex={1} explanation="T² ∝ r³ — the Law of Periods." />
      <MCQItem n={5} q="Which mode of heat transfer requires no medium at all?"
        options={["Conduction", "Convection", "Radiation", "Diffusion"]}
        correctIndex={2} explanation="Radiation — how heat from the Sun reaches Earth through the vacuum of space." />
      <MCQItem n={6} q="Vehicle rear-view mirrors use a convex mirror because it:"
        options={["Magnifies the image", "Gives a wider field of view", "Inverts the image", "Focuses light to a point"]}
        correctIndex={1} explanation="A convex mirror is diverging, giving a wider field of view than a flat mirror." />
      <MCQItem n={7} q="Myopia (near-sightedness) is corrected using a:"
        options={["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"]}
        correctIndex={1} explanation="A concave (diverging) lens." />
      <MCQItem n={8} q="Sound cannot travel through:"
        options={["Water", "Steel", "Vacuum", "Air"]}
        correctIndex={2} explanation="A vacuum — sound needs a medium, unlike light." />
      <MCQItem n={9} q="Ohm's Law is expressed as:"
        options={["P = VI", "V = IR", "F = ma", "E = mc²"]}
        correctIndex={1} explanation="V = IR (Voltage = Current × Resistance)." />
      <MCQItem n={10} q="The electron was discovered by:"
        options={["Ernest Rutherford", "James Chadwick", "J. J. Thomson", "Niels Bohr"]}
        correctIndex={2} explanation="J. J. Thomson." />

      <ArticleFooter text="Part of the SSC CGL Study Series — General Awareness · General Science. Formulas, unit definitions, and scientist-discovery pairings are compiled from standard physics references at the applied/conceptual level SSC tests, not calculation-heavy problems (those fall under Quantitative Aptitude instead)." />
    </div>
  );
}
