/**
 * About page content.
 * Facts here come from the résumé. Do not add roles, dates, or awards that are not listed.
 */

export interface ExperienceEntry {
  company: string;
  role: string;
  dates: string;
  summary: string;
  points?: string[];
  notes?: { label: string; text: string }[];
}

export interface StudyEntry {
  name: string;
  institution: string;
  period: string;
}

export interface PracticeGroup {
  title: string;
  items: string[];
}

export interface Award {
  name: string;
  detail: string;
  when: string;
}

export const about = {
  eyebrow: "About",
  headline: "I design digital products that move businesses forward — through strategy, UX/UI, and AI.",
  introduction: [
    "I’m Pedro Martins, a Senior Product Designer with 9+ years of experience across digital products, enterprise SaaS, fintech, e-commerce, and strategic innovation.",
    "I combine product strategy, UX/UI design, and AI to turn complex challenges into clear, useful digital experiences — from discovery and interaction design to prototyping and delivery.",
  ],
  perspective:
    "My background combines digital product design, industrial design, strategic innovation, and emerging technologies. This perspective helps me connect user needs, business goals, and AI-enabled possibilities across products, services, and systems.",
  experience: [
    {
      company: "Novigo IT",
      role: "Senior Product Designer",
      dates: "2026–Present",
      summary:
        "Leading product design strategy and execution for enterprise SaaS solutions focused on AI, e-commerce operations, workflow automation, and advanced catalog management.",
      points: [
        "Led the end-to-end design of an AI-powered platform for SKU organization, product catalog enrichment, publishing workflows, catalog health monitoring, and marketplace operations.",
        "Worked across product discovery, UX strategy, information architecture, service design, and high-fidelity prototyping.",
        "Established design standards, governance practices, and foundations for a scalable design system.",
        "Collaborated with Product, Engineering, and AI specialists to align user needs, operational efficiency, and business objectives.",
        "Supported the development of junior design talent.",
      ],
    },
    {
      company: "Sila Pay",
      role: "UX/UI Designer",
      dates: "2025–2026",
      summary:
        "Designed user-centered financial experiences across a fintech ecosystem, balancing complex workflows, business requirements, and usability.",
      points: [
        "Designed financial workflows, analytics dashboards, scoring models, and customer engagement modules.",
        "Built and scaled a Design System to improve consistency and support cross-functional delivery.",
        "Partnered with Product, Engineering, and leadership stakeholders to translate business objectives into digital experiences.",
        "Supported experimentation, data-informed decisions, and continuous product iteration.",
      ],
    },
    {
      company: "Symnetics – Tantum Group",
      role: "Product Designer & Associate Consultant",
      dates: "2019–2025",
      summary:
        "Worked at the intersection of design, business strategy, and digital transformation, helping organizations develop products, services, and innovation initiatives.",
      points: [
        "Contributed to digital transformation projects, strategic products, and innovation roadmaps.",
        "Managed end-to-end design activities, from research and conceptual development to prototyping and delivery.",
        "Designed high-fidelity interfaces and scalable design systems for digital ecosystems.",
        "Helped validate solutions by balancing user needs, technical feasibility, and strategic objectives.",
      ],
      notes: [
        {
          label: "Selected clients",
          text: "Duratex/Dexco, Vedacit, Saint-Gobain, Nexa Resources, Votorantim, and CBA.",
        },
        {
          label: "Selected engagement",
          text: "A 2020 sustainability strategy for Duratex/Dexco.",
        },
      ],
    },
    {
      company: "Instituto Mauá de Tecnologia — IMT",
      role: "Assistant Professor",
      dates: "2019–2021",
      summary:
        "Taught Design for Brands, connecting foundational design principles with digital strategy and mentoring students in brand and product creation.",
    },
    {
      company: "Deca – Dexco Group",
      role: "Industrial Designer",
      dates: "2015–2019",
      summary:
        "Developed product concepts for the built environment, combining market insights, consumer behavior, functionality, and refined aesthetics. This was physical product design, and it still informs how I think about use and clarity in digital work.",
      points: [
        "Translated market and consumer insights into product concepts.",
        "Developed 3D rendering and product visualization workflows.",
        "Worked across product development and presentation.",
      ],
      notes: [
        {
          label: "Selected products",
          text: "3D Shower, 3D Mixer, Deca Colore, Deca Twin Colore, Deca IoT, Deca Pix Accessories, and LK Single Lever Faucet.",
        },
      ],
    },
  ] satisfies ExperienceEntry[],
  degrees: [
    {
      name: "Postgraduate Degree in Strategic Design and Innovation",
      institution: "Istituto Europeo di Design (IED)",
      period: "2018–2020",
    },
    {
      name: "Bachelor’s Degree in Design",
      institution: "Instituto Mauá de Tecnologia (IMT)",
      period: "2014–2018",
    },
  ] satisfies StudyEntry[],
  courses: [
    {
      name: "AI for Designers",
      institution: "The Interaction Design Foundation",
      period: "2025",
    },
    {
      name: "Conceptual and Prospective Design",
      institution: "L’École de design Nantes Atlantique, Nantes, France",
      period: "2020",
    },
    {
      name: "Consumer Experience",
      institution: "Portal de Tendências",
      period: "2022",
    },
    {
      name: "User Experience Design (UX)",
      institution: "Udemy",
      period: "2019",
    },
  ] satisfies StudyEntry[],
  practice: [
    {
      title: "Product Design & Strategy",
      items: [
        "Product Discovery",
        "UX Strategy",
        "Information Architecture",
        "Service Design",
        "High-Fidelity Prototyping",
        "Design Systems",
        "Data-Driven UX Strategy",
      ],
    },
    {
      title: "AI & Digital Products",
      items: ["AI-Powered Workflows", "Enterprise SaaS", "Workflow Automation", "Digital Product Design"],
    },
    {
      title: "Design & Visualization Tools",
      items: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Miro",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe After Effects",
        "Adobe Premiere",
        "3D Modeling",
        "3D Rendering",
      ],
    },
    {
      title: "Business & Collaboration",
      items: ["Cross-Functional Collaboration", "Strategic Innovation", "Excel", "Google Sheets"],
    },
  ] satisfies PracticeGroup[],
  awards: [
    {
      name: "iF Design Award",
      detail: "Munich, Germany",
      when: "2018",
    },
    {
      name: "Prêmio de Design do Museu da Casa Brasileira",
      detail: "São Paulo, Brazil",
      when: "2017",
    },
    {
      name: "Best Design Student",
      detail: "Instituto Mauá de Tecnologia (IMT)",
      when: "2014–2018",
    },
  ] satisfies Award[],
  contact: {
    headline: "Have a complex problem to solve?",
    text: "I design and shape digital products, services, and AI experiences that connect people’s needs with business momentum.",
    email: "pdomartinsdesign@gmail.com",
    linkedin: "https://www.linkedin.com/in/pdomartins/",
  },
};
