/**
 * Site-wide settings.
 * Change availability, email, and the public URL copy here.
 * Leave email as an empty string until a real address is ready — the site hides it.
 */
export const site = {
  name: "Pedro Martins",
  role: "Senior Product Designer",
  description:
    "Senior Product Designer in São Paulo, working worldwide across product strategy, UX/UI design, AI-enabled products, fintech, SaaS, and complex digital services.",
  locale: "en",
  availability: {
    visible: true,
    label: "Open to select collaborations",
  },
  email: "",
  linkedin: "https://www.linkedin.com/in/pdomartins/",
  url: "https://www.martinspedro.com",
};

export type Site = typeof site;
