/**
 * Helper to get proper asset URLs considering Vite's base path
 * Works in both local dev (/) and GitHub Pages (/space-tourism-website-main/)
 */
export function getAssetUrl(path) {
  if (!path) return '';
  // Normalize path removing leading dot and slash
  const cleanPath = path.replace(/^\.?\//, '');
  const base = import.meta.env.BASE_URL;
  return `${base}${cleanPath}`;
}
