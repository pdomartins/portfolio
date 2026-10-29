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
  descriptor: "AI-powered product intelligence for commerce",
  featured: true,
  image: {
    src: "/images/iungo/organizer.png",
    alt: "Iungo AI Suite product portfolio and AI PIM overview",
    caption: "From product data to agent-ready commerce.",
  },
  gallery: [
    {
      src: "/images/iungo/journey.png",
      alt: "Iungo commerce journey from catalog to post-purchase",
      caption: "A connected journey from catalog readiness to post-purchase intelligence.",
    },
    {
      src: "/images/iungo/engage.png",
      alt: "Iungo Engage capability map and release priorities",
      caption: "Turning behavior signals into timely, relevant engagement.",
    },
    {
      src: "/images/iungo/releases.png",
      alt: "Iungo AI product release roadmap",
      caption: "A release sequence that connects strategy to delivery.",
    },
  ],
  meta: {
    role: "Product strategy, UX/UI, AI product design",
    timeline: "2026",
    team: "Product, engineering, AI and commercial teams",
    scope: "Discovery to product narrative and delivery planning",
  },
  introduction: {
    placeholder: false,
    text: "Iungo AI Suite is a connected portfolio of AI products for commerce: it organizes product information, decides what to show and when, guides shoppers to the right choice, and helps complete the journey across channels. I shaped the product narrative and experience model around one idea: intelligence should move through the whole customer journey, not live inside isolated features.",
  },
  sections: {
    context: {
      placeholder: false,
      text: "Iungo was moving from a collection of capabilities toward a sellable AI product portfolio. The challenge was not only naming products. It was making the architecture legible: six solutions, three shared engines, different buyers, different moments in the journey, and a clear distinction between what is sold and what powers everything underneath.\n\nThe work had to connect product strategy, UX, technology, commercial language, and the emerging world of agent-ready commerce. Organizer became Iungo AI Suite's first doorway: an AI PIM that receives messy product data, enriches it, validates it, and prepares it for storefronts, marketplaces, and AI agents.",
    },
    approach: {
      placeholder: false,
      text: "The process below is a portfolio reconstruction based on the product-release material and architecture decisions documented by the team.\n\nDiscovery started by mapping the existing capabilities against the customer journey: catalog, discovery, consideration, hesitation, purchase, and post-purchase. I then organized the system around three questions: what does the customer know, what should the system decide, and where should an agent act?\n\nFrom there, the work moved through portfolio framing, category language, solution boundaries, engine-to-solution mapping, competitive references, release sequencing, and a delivery-oriented narrative. The model was pressure-tested against real commerce scenarios rather than presented as a collection of features.",
    },
    decisions: {
      placeholder: false,
      text: "The most important decision was to separate the customer-facing solutions from the infrastructure that makes them intelligent. The Behavior Engine became an internal component that reads behavior, intent, propensity, and channel affinity. The Semantic Engine understands catalog structure, attributes, relationships, and knowledge. The Generative Engine creates content, conversation, and action.\n\nThis created a clearer product architecture: Organizer prepares the offer, Engage chooses the moment and channel, Hyper-Personalization shapes the experience, Advisor guides the decision, and Concierge helps complete and support the order. The system became easier to explain because every product had a job in the journey.",
    },
    visuals: {
      placeholder: false,
      text: "The visual language uses the customer journey as the main organizing device. Instead of presenting AI as a decorative layer, the diagrams show how data, decisions, content, and actions move through the system.\n\nThe selected artifacts show the transition from portfolio architecture to release planning: the commerce journey, the Organizer AI PIM positioning, the Engage capability map, and the release sequence that turns the strategy into an executable roadmap.",
    },
    outcomes: {
      placeholder: false,
      text: "The work gave the portfolio a coherent story for product, engineering, and commercial conversations. It clarified the role of each solution, made the shared engines visible without selling them separately, and created a practical sequence for the next releases.\n\nThe immediate delivery focus became Organizer 3P, with Engage, Hyper-Personalization, Advisor 2.0, Concierge, and the supporting integrations forming the expansion path. The larger outcome was a product system that could be understood from three levels: the customer problem, the solution, and the intelligence underneath.",
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
