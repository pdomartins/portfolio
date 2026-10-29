/**
 * Portfolio projects.
 *
 * Routes are generated from `slug`: /work/iungo, /work/sila-pay, and so on.
 * To publish a case study, replace the placeholder text, set `placeholder` to false,
 * and point `image` or `gallery` at files in `public/` (for example `/images/iungo.jpg`).
 * Empty metadata fields stay hidden.
 */

export interface CopyBlock {
  placeholder: boolean;
  text: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectMeta {
  role?: string;
  timeline?: string;
  team?: string;
  scope?: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  descriptor: string;
  featured?: boolean;
  image?: ProjectImage;
  gallery?: ProjectImage[];
  metrics?: ProjectMetric[];
  introduction: CopyBlock;
  meta: ProjectMeta;
  sections: {
    context: CopyBlock;
    approach: CopyBlock;
    decisions: CopyBlock;
    visuals: CopyBlock;
    outcomes: CopyBlock;
  };
}

export interface ProjectRoute {
  project: Project;
  index: number;
  previous: Project | null;
  next: Project | null;
}

function placeholderCopy(): Pick<Project, "introduction" | "meta" | "sections"> {
  return {
    meta: {},
    introduction: {
      placeholder: true,
      text: "Case study in preparation. This page is ready for the narrative, the decisions, and the visuals.",
    },
    sections: {
      context: {
        placeholder: true,
        text: "This section will describe the context and the challenge.",
      },
      approach: {
        placeholder: true,
        text: "This section will describe the approach and the process.",
      },
      decisions: {
        placeholder: true,
        text: "This section will describe the key design decisions.",
      },
      visuals: {
        placeholder: true,
        text: "Project visuals will be placed here.",
      },
      outcomes: {
        placeholder: true,
        text: "This section will describe outcomes and learnings.",
      },
    },
  };
}

function createProject(input: {
  slug: string;
  title: string;
  descriptor: string;
  featured?: boolean;
}): Project {
  return {
    ...input,
    ...placeholderCopy(),
  };
}

const iungoAiSuite: Project = {
  slug: "iungo",
  title: "Iungo AI Suite",
  descriptor: "A UX-led product system for intelligent commerce operations",
  featured: true,
  image: {
    src: "/images/iungo/identity-icons.png",
    alt: "Glossy glass icons representing the Iungo AI Suite product ecosystem",
    caption: "A visual identity for a suite of connected AI products.",
  },
  gallery: [
    {
      src: "/images/iungo/organizer-dashboard.jpg",
      alt: "Iungo Organizer dashboard showing catalog health and offer distribution",
      caption: "Organizer turns catalog operations into an observable, actionable system.",
    },
    {
      src: "/images/iungo/organizer-product-detail.jpg",
      alt: "Iungo Organizer product detail workflow with AI-generated product content",
      caption: "AI-assisted product enrichment, designed as a guided workflow rather than a black box.",
    },
    {
      src: "/images/iungo/organizer-ai-recommendations.jpg",
      alt: "Iungo Organizer AI recommendations interface",
      caption: "Recommendations make catalog quality improvements visible and easy to apply.",
    },
    {
      src: "/images/iungo/identity-dashboard.png",
      alt: "Glossy glass icons arranged as the Iungo product identity system",
      caption: "A modular identity system that gives each capability a recognizable role.",
    },
    {
      src: "/images/iungo/engagement-dashboard.jpg",
      alt: "Iungo Engagement dashboard showing revenue, conversion, transactions and campaign performance",
      caption: "Engagement connects campaigns, behavior and commercial outcomes in one operating view.",
    },
    {
      src: "/images/iungo/organizer-products.jpg",
      alt: "Iungo Organizer product catalog screen with SKUs, channels and publication status",
      caption: "A scalable catalog workspace for products, SKUs, channels and publication quality.",
    },
    {
      src: "/images/iungo/organizer-channels.jpg",
      alt: "Iungo Organizer channel connections and publication status",
      caption: "Operational complexity made legible across commerce channels.",
    },
    {
      src: "/images/iungo/organizer-product-sheet.jpg",
      alt: "Iungo Organizer product sheet with attributes, rules and mapping",
      caption: "The design system extends from high-level dashboards to dense product configuration.",
    },
  ],
  meta: {
    role: "Senior Product Designer, UX/UI and Design Systems",
    timeline: "2026",
    team: "Product, engineering, AI and commercial teams",
    scope: "Product architecture, UX strategy, design system and final UI",
  },
  introduction: {
    placeholder: false,
    text: "I led the UX direction for Iungo AI Suite, a connected portfolio of AI products built for commerce operations. My role covered the full design arc: framing the product architecture, defining how the solutions relate to one another, creating the design system, and bringing the concepts through to the final screens.",
  },
  sections: {
    context: {
      placeholder: false,
      text: "Iungo was evolving from a set of capabilities into a coherent suite of AI products for commerce. The UX challenge was to make that system understandable and usable across very different levels of complexity: portfolio strategy, operational workflows, catalog data, campaign performance, and AI-assisted decisions.\n\nTwo products became the strongest expression of the system. Organizer addressed the operational foundation of commerce: catalog structure, product information, entities, attributes, publication quality, channels, and AI recommendations. Engagement connected activation to outcomes, bringing campaigns, conversion, transactions, revenue, and customer behavior into one performance view.\n\nThe full suite connected seven product roles: Tracker monitors the customer journey and signals; Hyper-Personalization adapts experiences; Organizer structures product data; Collect brings data and signals together; Engagement activates audiences and measures outcomes; Advisor guides decisions; and Concierge supports the conversation through completion.",
    },
    approach: {
      placeholder: false,
      text: "Discovery began by mapping the people, decisions, and operational dependencies behind the suite. I worked across product, engineering, AI, and commercial stakeholders to understand where the system needed to reduce ambiguity, expose status, automate repetitive work, or help teams act with more confidence.\n\nThe work moved through product architecture, information architecture, journey mapping, UX flows, interaction models, and high-fidelity UI. I used Organizer and Engagement as anchor products to define reusable patterns for dashboards, tables, filters, statuses, configuration, data density, AI suggestions, and performance reporting.\n\nThe design system was created as a product foundation rather than a visual library alone. It connected brand, type, color, layout, components, icons, states, and interaction rules so new solutions could feel related without becoming indistinguishable.",
    },
    decisions: {
      placeholder: false,
      text: "The first design decision was to treat the suite as one ecosystem with distinct product jobs. Organizer prepares the product offer and improves catalog health. Engagement helps teams understand what is happening, which audiences are responding, and where commercial value is being created.\n\nThe second decision was to make complexity progressively legible. High-level dashboards establish context before dense operational views expose detail. Status, filters, hierarchy, and clear next actions help users move from understanding to intervention without losing the broader picture.\n\nThe third was to make AI useful inside the workflow. Suggestions, enrichment, and recommendations appear at the moment they can reduce effort, with enough context for a user to review, trust, and apply them.",
    },
    visuals: {
      placeholder: false,
      text: "The visual identity gives the suite a sense of energy without turning AI into decoration. Glossy, colorful icons create a recognizable family for the products, while the interface language stays disciplined: strong hierarchy, clear status colors, structured data views, and deliberate use of contrast.\n\nThe screens show the design operating at multiple scales: Organizer dashboards, product and catalog workflows, AI recommendations, channel operations, and the Engagement performance dashboard. Together they demonstrate how the design system carried a consistent UX language from strategy to final delivery.",
    },
    outcomes: {
      placeholder: false,
      text: "The outcome was a connected product foundation that teams could use to explain, design, and extend the Iungo AI Suite. Organizer and Engagement became tangible products rather than abstract capabilities, each with a clear user, workflow, and value proposition.\n\nMy contribution connected senior-level product thinking with hands-on UX/UI execution: a coherent architecture, a scalable design system, and final screens that make complex commerce operations more visible, more actionable, and easier to evolve.",
    },
  },
};

const daycovalProject: Project = {
  slug: "banking-app",
  title: "Banco Daycoval",
  descriptor: "Banking app redesign",
  image: {
    src: "/images/daycoval/page-10.png",
    alt: "Banco Daycoval mobile banking app redesign shown on a tilted smartphone",
    caption: "A more focused banking experience built around clarity, control, and everyday action.",
  },
  gallery: [
    {
      src: "/images/daycoval/page-11.png",
      alt: "Banco Daycoval mobile banking interface screens",
      caption: "A visual system for onboarding, the home dashboard, login, and cards.",
    },
    {
      src: "/images/daycoval/page-09.png",
      alt: "Banco Daycoval research flow and app information architecture",
      caption: "From research findings to a clearer information architecture and task flow.",
    },
  ],
  metrics: [
    {
      value: "35%",
      label: "reduction in task completion time for key banking actions",
    },
    {
      value: "25%",
      label: "increase in user engagement measured through DAU/MAU",
    },
    {
      value: "3",
      label: "screens in the new minimum path, down from 8",
    },
  ],
  meta: {
    role: "Product Designer",
    timeline: "6 months",
    team: "Product Owner, developers, bank executives, AI specialists",
    scope: "Discovery, UX strategy, interaction design, UI and prototyping",
  },
  introduction: {
    placeholder: false,
    text: "A redesign of Banco Daycoval's mobile banking experience focused on simplifying the user journey, improving financial comprehension, and making everyday banking feel more modern and intuitive.",
  },
  sections: {
    context: {
      placeholder: false,
      text: "The existing app made important financial tasks harder than they needed to be. Information was fragmented across screens, core actions required too many steps, and technical language created uncertainty at moments that demanded confidence.\n\nThe challenge was to redesign the experience without losing the sense of security expected from a banking product: make the app easier to navigate, help people understand their financial situation, and create a more contemporary foundation for future features.",
    },
    approach: {
      placeholder: false,
      text: "The discovery phase combined qualitative and quantitative methods: user interviews and surveys, task analysis of transfers, account management and investments, and benchmarking against competitor banking apps and financial chatbots.\n\nThe findings were organized into a journey from Discover to Define, Customize, Track, and Reflect. This made the gaps visible beyond individual screens: users needed guidance for complex tasks, faster access to information, more natural interactions, proactive feedback, and a simple way to understand progress.",
    },
    decisions: {
      placeholder: false,
      text: "The redesign centered the experience around a more useful home dashboard, clear financial summaries, and direct access to core actions. Navigation was simplified so the most important tasks could be completed with fewer decisions and less cognitive load.\n\nThe interface also introduced space for conversational support and more contextual guidance. Instead of forcing people through rigid forms, the product could help them find the right path while keeping control, privacy, and transparency visible throughout the journey.",
    },
    visuals: {
      placeholder: false,
      text: "The visual direction balances a confident banking palette with a lighter, more approachable interface. Large balance and activity blocks establish hierarchy at a glance, while compact action patterns make transfers, cards, and account management easier to reach.\n\nThe final screens connect onboarding, the home dashboard, cards, transactions, and guided support into one coherent system rather than a collection of disconnected banking features.",
    },
    outcomes: {
      placeholder: false,
      text: "The redesign reduced task completion time by 35% and increased user engagement by 25% measured through DAU/MAU. The minimum path for a core task was reduced from 8 screens to 3, creating a measurable improvement in the new user journey.\n\nThese results supported a clearer product direction: fewer barriers at the entry point, faster access to essential actions, and a banking experience that helps people act with more confidence.",
    },
  },
};

const nexaProject: Project = {
  slug: "onboarding",
  title: "Nexa Resources",
  descriptor: "Employee onboarding experience",
  image: {
    src: "/images/nexa/page-18.png",
    alt: "Nexa Resources employee onboarding experience across dashboards and candidate screens",
    caption: "A connected onboarding ecosystem for candidates, managers, and new employees.",
  },
  gallery: [
    {
      src: "/images/nexa/page-15.png",
      alt: "Nexa Resources onboarding journey, pain points, and co-creation workshop",
      caption: "Mapping the journey, surfacing pain points, and aligning the HR team around opportunities.",
    },
    {
      src: "/images/nexa/page-17.png",
      alt: "Nexa Resources onboarding platform dashboard",
      caption: "A manager dashboard that makes progress, hiring activity, and onboarding status visible.",
    },
    {
      src: "/images/nexa/page-16.png",
      alt: "Nexa Resources design system with colors, typography, components, and iconography",
      caption: "A scalable design system connecting brand, interface, and operational clarity.",
    },
  ],
  metrics: [
    {
      value: "4",
      label: "hours of administrative work saved per manager, per new hire",
    },
    {
      value: "65%",
      label: "reduction in equipment wait time",
    },
    {
      value: "US$1M",
      label: "in projected productivity gains for the first year",
    },
  ],
  meta: {
    role: "Product Designer",
    timeline: "6 months",
    team: "Product Owner, Agile Coach, developers, Scrum Master, Project Manager",
    scope: "Research, service design, UX/UI, design system, prototyping",
  },
  introduction: {
    placeholder: false,
    text: "A centralized onboarding experience designed to help Nexa Resources empower new hires from day one, improve visibility for managers, and reduce the operational friction between offer, equipment, training, and integration.",
  },
  sections: {
    context: {
      placeholder: false,
      text: "Nexa's onboarding process was spread across disconnected platforms and manual handoffs. New employees had to navigate unclear steps, managers lacked real-time visibility, and essential equipment and training activities could become bottlenecks.\n\nThe challenge was to transform a fragmented administrative process into a supportive, measurable journey that improved new-hire engagement, productivity, and safety. The strategic context included a 37% first-year accident rate, making effective onboarding more than an HR convenience: it was an operational and safety priority.",
    },
    approach: {
      placeholder: false,
      text: "The project used a co-creation model with the HR team and an agile delivery approach. Discovery combined workshops, interviews, journey mapping, persona development, and synthesis of operational and safety pain points.\n\nThe journey was mapped across before, during, and after onboarding: selection and proposal, documentation, equipment, training, manager follow-up, integration with the team, and long-term check-ins. This exposed the moments where expectations and reality diverged, as well as the opportunities to make progress visible and actionable.",
    },
    decisions: {
      placeholder: false,
      text: "The experience was designed as an integrated system rather than a single employee-facing screen. Candidates, new employees, managers, HR, and training stakeholders each received the right level of visibility and action for their role.\n\nA central dashboard gave managers a live view of open opportunities, employees in onboarding, average time to hire, diversity indicators, and turnover. A candidate profile and progress timeline connected documents, skills, interviews, and hiring stages. The design system established a consistent foundation across the platform, from typography and color to components, icons, tags, progress bars, and forms.",
    },
    visuals: {
      placeholder: false,
      text: "The visual direction brings Nexa's industrial context into a more human and approachable digital environment. Orange becomes a clear action signal, while soft surfaces, rounded panels, progress indicators, and illustrations help reduce the intimidation of a complex operational process.\n\nThe final ecosystem connects onboarding, dashboard reporting, candidate profiles, sign-up, equipment readiness, interviews, and progress tracking in one visual language.",
    },
    outcomes: {
      placeholder: false,
      text: "The documented projections estimated 4 hours of administrative work saved per manager, per new hire, a 65% reduction in equipment wait time, and US$1M in projected productivity gains in the first year. The expected impact came from faster time-to-productivity, automated requests, and increased visibility across the onboarding process.\n\nThe project reframed onboarding as a measurable product experience: safer, more transparent, and more supportive for the people entering the organization, while giving managers and HR a clearer operational system to run.",
    },
  },
};

export const projects: Project[] = [
  iungoAiSuite,
  createProject({
    slug: "sila-pay",
    title: "Sila Pay",
    descriptor: "Fintech product experiences",
  }),
  daycovalProject,
  nexaProject,
  createProject({
    slug: "design-system",
    title: "Vapt",
    descriptor: "Design system",
  }),
  createProject({
    slug: "sustainability",
    title: "Dexco",
    descriptor: "Sustainability strategy",
  }),
  createProject({
    slug: "mobility-app",
    title: "SPTrans",
    descriptor: "Experimental mobility concept",
  }),
];

export function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function textParagraphs(text: string) {
  return text
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

const metaLabels = [
  ["Role", "role"],
  ["Timeline", "timeline"],
  ["Team", "team"],
  ["Scope", "scope"],
] as const;

export function visibleMeta(meta: ProjectMeta) {
  return metaLabels.flatMap(([label, key]) => {
    const value = meta[key];
    return value ? [{ label, value }] : [];
  });
}

export function getProjectRoutes(): Array<{ params: { slug: string }; props: ProjectRoute }> {
  return projects.map((project, index) => ({
    params: { slug: project.slug },
    props: {
      project,
      index,
      previous: index > 0 ? projects[index - 1] : null,
      next: index < projects.length - 1 ? projects[index + 1] : null,
    },
  }));
}
