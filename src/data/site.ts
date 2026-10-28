/**
 * Site-wide settings.
 * Change availability, email, and the public URL copy here.
 * Leave email as an empty string until a real address is ready — the site hides it.
 */
export const site = {
  name: "Pedro Martins",
  role: "Senior Product Designer",
  description:
    "I connect strategy, design, and technology to create digital products that make complex things feel simple.",
  locale: "en",
  availability: {
    visible: true,
    label: "Open to select collaborations",
  },
  email: "",
  linkedin: "https://www.linkedin.com/in/pdomartins/",
};

export type Site = typeof site;
