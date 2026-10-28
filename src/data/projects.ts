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

export interface Project {
  slug: string;
  title: string;
  descriptor: string;
  featured?: boolean;
  image?: ProjectImage;
  gallery?: ProjectImage[];
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

export const projects: Project[] = [
  iungoAiSuite,
  createProject({
    slug: "sila-pay",
    title: "Sila Pay",
    descriptor: "Fintech product experiences",
  }),
  createProject({
    slug: "banking-app",
    title: "Banco Daycoval",
    descriptor: "Banking app redesign",
  }),
  createProject({
    slug: "onboarding",
    title: "Nexa Resources",
    descriptor: "Employee onboarding experience",
  }),
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
