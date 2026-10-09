import { cases, caseBySlug } from './cases';
import { content } from './content';

export const homePath = (lang) => (lang === 'en' ? '/en/' : '/');
export const casePath = (lang, slug) => (lang === 'en' ? `/en/projects/${slug}/` : `/projets/${slug}/`);

/* Transforme une URL en route : { lang, page: 'home' | 'case' | 'notfound', slug } */
export const parseRoute = (pathname) => {
  const lang = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr';
  const rest = lang === 'en' ? pathname.slice(3) || '/' : pathname;
  if (rest === '/' || rest === '' || rest === '/index.html') return { lang, page: 'home' };
  const m = rest.match(/^\/(projets|projects)\/([^/]+)\/?$/);
  if (m && caseBySlug[m[2]]) return { lang, page: 'case', slug: m[2] };
  return { lang, page: 'notfound' };
};

/* Équivalent d'une route dans l'autre langue */
export const switchPath = (route) => {
  const other = route.lang === 'fr' ? 'en' : 'fr';
  return route.page === 'case' ? casePath(other, route.slug) : homePath(other);
};

/* Titre et description de chaque page (navigateur et prérendu) */
export const headFor = (route) => {
  const t = content[route.lang];
  if (route.page === 'case') {
    const c = caseBySlug[route.slug][route.lang];
    return { title: `${c.title}, Imad Bouchareb`, description: c.summary };
  }
  if (route.page === 'notfound') return { title: `${t.labels.notFound} Imad Bouchareb`, description: t.meta.description };
  return t.meta;
};

export const allRoutes = () => {
  const out = [];
  for (const lang of ['fr', 'en']) {
    out.push({ lang, page: 'home', path: homePath(lang) });
    for (const c of cases) out.push({ lang, page: 'case', slug: c.slug, path: casePath(lang, c.slug) });
  }
  return out;
};
