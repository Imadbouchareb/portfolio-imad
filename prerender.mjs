/* Génère une page HTML statique par route (accueil, études de cas, FR et EN),
   avec titre, description, liens de langue, Open Graph et données structurées.
   Lancé automatiquement par `npm run build`. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');
const server = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);
const { render, allRoutes, headFor, homePath, casePath, SITE } = server;
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const alt = (r, lang) => (r.page === 'case' ? casePath(lang, r.slug) : homePath(lang));

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Imad Bouchareb',
  jobTitle: 'Data Analyst',
  image: `${SITE.url}/photo.webp`,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  sameAs: [SITE.linkedin, SITE.github],
  worksFor: { '@type': 'Organization', name: 'Groupe Rand' },
  alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'HETIC' }, { '@type': 'CollegeOrUniversity', name: 'Université de Haute-Alsace' }],
  knowsAbout: ['Power BI', 'DAX', 'Power Query', 'SAP Analytics Cloud', 'Python', 'SQL', 'Power Platform', 'LLM'],
  hasCredential: { '@type': 'EducationalOccupationalCredential', name: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)' },
  address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' }
};

const routes = allRoutes();
for (const r of routes) {
  const head = headFor(r);
  const url = SITE.url + r.path;
  const tags = [
    `<title>${esc(head.title)}</title>`,
    `<meta name="description" content="${esc(head.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="fr" href="${SITE.url + alt(r, 'fr')}" />`,
    `<link rel="alternate" hreflang="en" href="${SITE.url + alt(r, 'en')}" />`,
    `<link rel="alternate" hreflang="x-default" href="${SITE.url + alt(r, 'fr')}" />`,
    `<meta property="og:type" content="${r.page === 'case' ? 'article' : 'profile'}" />`,
    `<meta property="og:title" content="${esc(head.title)}" />`,
    `<meta property="og:description" content="${esc(head.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE.url}/og-${r.lang}.jpg" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="${r.lang === 'fr' ? 'fr_FR' : 'en_GB'}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    r.page === 'home' ? `<script type="application/ld+json">${JSON.stringify(personLd)}</script>` : ''
  ].join('\n    ');
  const html = template
    .replace('<html lang="fr">', `<html lang="${r.lang}">`)
    .replace('<!--head-->', tags)
    .replace('<!--app-->', render(r.path));
  const out = path.join(dist, r.path, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}

// Page 404
const nf = template.replace('<!--head-->', '<title>Page introuvable, Imad Bouchareb</title>\n    <meta name="robots" content="noindex" />').replace('<!--app-->', render('/404'));
fs.writeFileSync(path.join(dist, '404.html'), nf);

// Plan du site et robots.txt
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map((r) => `  <url>
    <loc>${SITE.url + r.path}</loc>
    <xhtml:link rel="alternate" hreflang="fr" href="${SITE.url + alt(r, 'fr')}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE.url + alt(r, 'en')}"/>
  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prérendu : ${routes.length} pages, 404, sitemap.xml, robots.txt`);
