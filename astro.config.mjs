import { defineConfig } from "astro/config";

/**
 * Canonical URL for SEO and social cards.
 * Set SITE_URL in the host (for example https://your-domain.com).
 * On Vercel, the production domain is used when SITE_URL is absent.
 */
function resolveSite() {
  const explicit = process.env.SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) return explicit;

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim().replace(/\/$/, "");
  if (vercel) return vercel.startsWith("http") ? vercel : `https://${vercel}`;

  return undefined;
}

const site = resolveSite() || "https://www.martinspedro.com";

export default defineConfig({
  ...(site ? { site } : {}),
  compressHTML: true,
});
