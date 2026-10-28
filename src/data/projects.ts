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

export const projects: Project[] = [
  createProject({
    slug: "iungo",
    title: "Iungo",
    descriptor: "AI-powered commerce platform",
    featured: true,
  }),
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
