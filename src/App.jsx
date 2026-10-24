import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Copy, Download, Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';
import { content, SITE } from './content';
import { cases, caseBySlug, CASE_GROUPS } from './cases';
import { SalesChart, VISUALS } from './visuals';
import { casePath, headFor, homePath, parseRoute, switchPath } from './routes';

/* ------------------------------------------------------------------ */
/*  Navigation interne sans rechargement                               */
/* ------------------------------------------------------------------ */

const NavContext = React.createContext(() => {});

const Link = ({ to, children, ...props }) => {
  const navigate = React.useContext(NavContext);
  return (
    <a href={to} {...props}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        const [path, hash] = to.split('#');
        if (path && path !== window.location.pathname) {
          e.preventDefault();
          navigate(to);
        } else if (hash) {
          // ancre sur la même page : comportement natif
        }
        props.onClick?.(e);
      }}>
      {children}
    </a>
  );
};

/* ------------------------------------------------------------------ */
/*  Éléments communs                                                   */
/* ------------------------------------------------------------------ */

const SectionTitle = ({ id, title, lead }) => (
  <div className="mb-12 max-w-prose">
    <h2 id={id} className="display text-3xl text-ink sm:text-4xl">{title}</h2>
    {lead && <p className="mt-3 text-lg leading-relaxed text-muted">{lead}</p>}
  </div>
);

const Dash = () => <span className="mt-[0.72em] h-px w-3 flex-none bg-muted/60" aria-hidden="true" />;

const Header = ({ t, route, theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const home = homePath(route.lang);
  const navHref = (h) => (route.page === 'home' ? h : `${home}${h}`);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to={home} className="display text-lg">{t.hero.name}</Link>
        <nav aria-label="Navigation" className="hidden items-center gap-7 md:flex">
          {t.nav.map((n) => <Link key={n.href} to={navHref(n.href)} className="text-sm text-muted hover:text-ink">{n.label}</Link>)}
        </nav>
        <div className="flex items-center gap-1">
          <Link to={switchPath(route)} hrefLang={route.lang === 'fr' ? 'en' : 'fr'}
            className="rounded-md px-2.5 py-2 text-sm text-muted hover:bg-surface hover:text-ink">
            <span className="sm:hidden">{route.lang === 'fr' ? 'EN' : 'FR'}</span>
            <span className="hidden sm:inline">{t.langSwitch}</span>
          </Link>
          <button onClick={toggleTheme} aria-label={theme === 'dark' ? t.themeLight : t.themeDark}
            className="rounded-md p-2 text-muted hover:bg-surface hover:text-ink">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a href={SITE.cv[route.lang]} download className="ml-1 flex items-center gap-2 rounded-md bg-ink px-3.5 py-2 text-sm font-medium text-paper hover:bg-ink/85">
            <Download size={15} /><span className="hidden sm:inline">{t.cv}</span><span className="sm:hidden">{t.cvShort}</span>
          </a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="rounded-md p-2 text-muted hover:text-ink md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Navigation" className="border-t border-line px-5 py-2 md:hidden">
          {t.nav.map((n) => (
            <Link key={n.href} to={navHref(n.href)} onClick={() => setOpen(false)} className="block py-3 text-base text-ink">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
};

const Footer = ({ t }) => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-muted sm:flex-row sm:justify-between sm:px-8">
      <span>© {new Date().getFullYear()} Imad Bouchareb</span>
      <span>{t.contact.built}</span>
    </div>
  </footer>
);

/* ------------------------------------------------------------------ */
/*  Accueil                                                            */
/* ------------------------------------------------------------------ */

const CaseCard = ({ c, lang, t }) => {
  const d = c[lang];
  const Visual = VISUALS[c.visual];
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-paper transition-colors hover:border-ink/40">
      <div className="pointer-events-none max-h-[19rem] overflow-hidden bg-surface [mask-image:linear-gradient(to_bottom,black_80%,transparent)]" aria-hidden="true">
        <Visual lang={lang} compact shots={c.shots} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-accent">{d.kind}<span className="font-normal text-muted">, {d.sector}</span></p>
        <h3 className="display mt-2 text-2xl leading-tight text-ink">
          <Link to={casePath(lang, c.slug)} className="after:absolute after:inset-0">{d.title}</Link>
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted">{d.summary}</p>
        <p className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-accent">
          {t.labels.read} <ArrowRight size={15} />
        </p>
      </div>
    </article>
  );
};

const FIRST_CASES = 6;

const CaseList = ({ t, lang }) => {
  const [group, setGroup] = useState('all');
  const [expanded, setExpanded] = useState(false);
  const filtered = group === 'all' ? cases : cases.filter((c) => c.group === group);
  const shown = group === 'all' && !expanded ? filtered.slice(0, FIRST_CASES) : filtered;
  const hidden = filtered.length - shown.length;
  const chips = [{ id: 'all', label: t.labels.filterAll, n: cases.length },
    ...CASE_GROUPS.map((g) => ({ id: g.id, label: g[lang], n: cases.filter((c) => c.group === g.id).length }))];
  return (
    <>
      <div role="group" aria-label={t.labels.filterLabel} className="mb-8 flex flex-wrap gap-2">
        {chips.map((ch) => {
          const on = group === ch.id;
          return (
            <button key={ch.id} type="button" aria-pressed={on} onClick={() => { setGroup(ch.id); setExpanded(false); }}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${on ? 'border-ink bg-ink text-paper' : 'border-line text-ink hover:border-ink/40'}`}>
              {ch.label} <span className={on ? 'text-paper/70' : 'text-muted'}>{ch.n}</span>
            </button>
          );
        })}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {shown.map((c) => <CaseCard key={c.slug} c={c} lang={lang} t={t} />)}
      </div>
      {group === 'all' && filtered.length > FIRST_CASES && (
        <div className="mt-10 flex justify-center">
          <button type="button" aria-expanded={expanded} onClick={() => { if (expanded) document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' }); setExpanded((v) => !v); }}
            className="rounded-full border border-line px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/40 hover:text-accent">
            {expanded ? t.labels.showLess : t.labels.showMore(hidden)}
          </button>
        </div>
      )}
    </>
  );
};

const Home = ({ t, lang }) => {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(SITE.email); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch (e) { /* mailto reste dispo */ }
  };

  return (
    <>
      {/* Hero */}
      <section className="grid items-center gap-12 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div>
          <p className="flex items-center gap-2 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />{t.hero.status}
          </p>
          <div className="mt-5 flex items-center gap-5">
            {SITE.photo && (
              <img src={SITE.photo} alt={t.hero.photoAlt} width="176" height="220"
                className="h-36 w-[7.2rem] flex-none rounded-2xl object-cover object-top shadow-sm ring-1 ring-line sm:h-[13.75rem] sm:w-44" />
            )}
            <h1 className="display text-5xl leading-[0.95] sm:text-7xl">{t.hero.name}</h1>
          </div>
          <p className="mt-4 text-xl font-medium text-ink sm:text-2xl">{t.hero.role}</p>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-muted">{t.hero.pitch}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projets" className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-paper hover:bg-accent/90">{t.hero.ctaProjects}</a>
            <a href="#contact" className="rounded-md border border-line px-5 py-3 text-sm font-semibold text-ink hover:border-ink">{t.hero.ctaContact}</a>
          </div>
        </div>
        <SalesChart t={t} lang={lang} />
      </section>

      {/* Preuves */}
      <section aria-label={lang === 'fr' ? 'Chiffres clés' : 'Key figures'} className="border-y border-line py-8">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-4">
          {t.proof.map((p) => (
            <div key={p.label} className="flex flex-col">
              <dt className="order-2 mt-1 text-sm leading-snug text-ink">{p.label}</dt>
              <dd className="display order-1 text-3xl text-ink">{p.value}</dd>
              <dd className="order-3 mt-0.5 text-xs text-muted">{p.source}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Études de cas */}
      <section id="projets" aria-labelledby="projets-title" className="scroll-mt-20 py-20 sm:py-24">
        <SectionTitle id="projets-title" title={t.sections.projects} lead={t.sections.projectsLead} />
        <CaseList t={t} lang={lang} />
      </section>

      {/* Parcours */}
      <section id="parcours" aria-labelledby="parcours-title" className="scroll-mt-20 border-t border-line py-20 sm:py-24">
        <SectionTitle id="parcours-title" title={t.sections.path} />
        <ol className="space-y-12">
          {t.jobs.map((j) => (
            <li key={j.company + j.date} className="grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
              <div>
                <p className="text-sm text-muted">{j.date}</p>
                <p className="mt-1 font-semibold text-ink">{j.company}</p>
                <p className="text-sm text-muted">{j.place}</p>
              </div>
              <div className="max-w-prose">
                <h3 className="text-lg font-semibold text-ink">{j.role}</h3>
                <ul className="mt-3 space-y-2">
                  {j.points.map((pt) => <li key={pt} className="flex gap-3 leading-relaxed text-muted"><Dash />{pt}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-14 grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
          <p className="text-sm font-semibold text-ink">{t.labels.earlier}</p>
          <ul className="max-w-prose space-y-4">
            {t.earlier.map((e) => (
              <li key={e.role}>
                <p className="text-ink"><span className="font-semibold">{e.role}</span>, {e.company} <span className="text-muted">({e.date})</span></p>
                <p className="mt-0.5 text-sm text-muted">{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences" aria-labelledby="competences-title" className="scroll-mt-20 border-t border-line py-20 sm:py-24">
        <SectionTitle id="competences-title" title={t.sections.skills} lead={t.sections.skillsLead} />
        <dl className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {t.skills.map((s) => (
            <div key={s.title} className="border-t border-line pt-5">
              <dt className="font-semibold text-ink">{s.title}</dt>
              <dd className="mt-2 leading-relaxed text-ink">{s.items}</dd>
              <dd className="mt-2 text-sm text-muted">{s.proof}</dd>
            </div>
          ))}
        </dl>
        {t.languages && <p className="mt-10 text-muted">{t.languages}</p>}
      </section>

      {/* Certifications et formation */}
      <section aria-labelledby="credentials-title" className="border-t border-line py-20 sm:py-24">
        <SectionTitle id="credentials-title" title={t.sections.credentials} />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="self-start rounded-xl bg-surface p-7">
            <div className="flex items-center gap-3">
              <img src="/logos/microsoft.svg" alt="Microsoft" width="22" height="22" className="h-5 w-auto" />
              <span className="display text-xl text-accent">{t.cert.code}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">{t.cert.name}</h3>
            <p className="mt-2 text-muted">{t.cert.desc}</p>
            <p className="mt-1 text-sm text-muted">{t.cert.date}</p>
            <a href={t.cert.link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
              {t.labels.verify} <ArrowUpRight size={15} />
            </a>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ink">{t.labels.trainings}</h3>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {t.trainings.map((c) => (
                <li key={c.name}>
                  <a href={c.link} target="_blank" rel="noopener noreferrer" aria-label={`${c.name}, ${t.labels.view}`}
                    className="flex items-center justify-between gap-4 py-3 hover:text-accent">
                    <span><span className="text-ink">{c.name}</span><span className="text-sm text-muted">, {c.by}</span></span>
                    <span className="flex flex-none items-center gap-2 text-sm text-muted">{c.date}<ArrowUpRight size={14} /></span>
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="mt-10 text-sm font-semibold text-ink">{t.labels.education}</h3>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {t.degrees.map((d) => (
                <li key={d.title} className="flex items-baseline justify-between gap-4 py-3">
                  <span><span className="text-ink">{d.title}</span><span className="block text-sm text-muted">{d.school}</span>{d.detail && <span className="block text-sm text-muted">{d.detail}</span>}</span>
                  <span className="text-sm text-muted">{d.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
        <h2 id="contact-title" className="display max-w-[22ch] text-4xl leading-tight text-ink sm:text-5xl">{t.contact.title}</h2>
        <p className="mt-4 text-lg text-muted">{t.contact.lead}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={`mailto:${SITE.email}`} className="inline-flex max-w-full items-center gap-2.5 rounded-md bg-accent px-5 py-3 font-semibold text-paper hover:bg-accent/90">
            <Mail size={18} className="flex-none" /><span className="truncate">{SITE.email}</span>
          </a>
          <button onClick={copyEmail} className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-3 text-sm font-semibold text-ink hover:border-ink">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span aria-live="polite">{copied ? t.labels.copied : t.labels.copy}</span>
          </button>
        </div>
        <div className="mt-8 flex gap-6 text-sm">
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-ink"><Linkedin size={17} /> LinkedIn</a>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-ink"><Github size={17} /> GitHub</a>
        </div>
      </section>
    </>
  );
};

/* ------------------------------------------------------------------ */
/*  Page d'étude de cas                                                */
/* ------------------------------------------------------------------ */

const CasePage = ({ t, lang, slug }) => {
  const c = caseBySlug[slug];
  const d = c[lang];
  const Visual = VISUALS[c.visual];
  const i = cases.findIndex((x) => x.slug === slug);
  const next = cases[(i + 1) % cases.length];
  const L = t.labels;

  const Block = ({ title, children }) => (
    <section className="grid gap-3 border-t border-line py-10 md:grid-cols-[220px_1fr] md:gap-10">
      <h2 className="text-sm font-semibold text-ink">{title}</h2>
      <div className="max-w-prose">{children}</div>
    </section>
  );

  return (
    <article className="pb-20">
      <div className="pt-10">
        <Link to={`${homePath(lang)}#projets`} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink">
          <ArrowLeft size={15} /> {L.back}
        </Link>
      </div>

      <header className="pb-10 pt-8">
        <p className="text-sm font-medium text-accent">{d.kind}<span className="font-normal text-muted">, {d.sector}</span></p>
        <h1 className="display mt-3 max-w-[22ch] text-4xl leading-[1.05] text-ink sm:text-6xl">{d.title}</h1>
        <p className="mt-6 max-w-[60ch] text-xl leading-relaxed text-muted">{d.summary}</p>
        <dl className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
          <div><dt className="text-xs text-muted">{L.role}</dt><dd className="mt-1 text-ink">{d.role}</dd></div>
          <div><dt className="text-xs text-muted">{L.period}</dt><dd className="mt-1 text-ink">{d.period}</dd></div>
          <div><dt className="text-xs text-muted">{L.tools}</dt><dd className="mt-1 text-ink">{c.stack.join(', ')}</dd></div>
        </dl>
      </header>

      {c.shots ? (
        <figure className="overflow-hidden rounded-xl border border-line bg-surface">
          <a href={c.shots[0].src} target="_blank" rel="noopener noreferrer"><Visual lang={lang} shots={c.shots} /></a>
          <figcaption className="border-t border-line/70 px-5 py-3 text-xs text-muted">{c.shots[0][lang]} {d.caption}</figcaption>
        </figure>
      ) : (
        <figure className="overflow-hidden rounded-xl bg-surface">
          <div className="mx-auto max-w-4xl"><Visual lang={lang} /></div>
          <figcaption className="border-t border-line/70 px-5 py-3 text-xs text-muted">{d.caption}</figcaption>
        </figure>
      )}

      <div className="mt-6">
        <Block title={L.context}><p className="text-lg leading-relaxed text-ink">{d.context}</p></Block>
        <Block title={L.challenge}><p className="text-lg leading-relaxed text-ink">{d.challenge}</p></Block>
        <Block title={L.built}>
          <ul className="space-y-2.5">{d.built.map((b) => <li key={b} className="flex gap-3 leading-relaxed text-ink"><Dash />{b}</li>)}</ul>
        </Block>
        <Block title={L.decisions}>
          <dl className="space-y-6">
            {d.decisions.map((x) => (
              <div key={x.title}>
                <dt className="font-semibold text-ink">{x.title}</dt>
                <dd className="mt-1 leading-relaxed text-muted">{x.text}</dd>
              </div>
            ))}
          </dl>
        </Block>
        {c.figures && (
          <section className="border-t border-line py-10">
            <h2 className="text-sm font-semibold text-ink">{d.flowsTitle || L.flows}</h2>
            <div className="mt-6 space-y-6">
              {c.figures.map((f) => {
                const F = VISUALS[f.v];
                return (
                  <figure key={f.v} className="overflow-hidden rounded-xl border border-line bg-surface">
                    <F lang={lang} />
                    <figcaption className="border-t border-line/70 px-4 py-3 text-xs leading-relaxed text-muted">{f[lang]}</figcaption>
                  </figure>
                );
              })}
            </div>
          </section>
        )}
        {c.reports && (
          <section className="border-t border-line py-10">
            <h2 className="text-sm font-semibold text-ink">{d.reportsTitle || L.reports}</h2>
            {d.reportsIntro && <p className="mt-3 max-w-3xl leading-relaxed text-muted">{d.reportsIntro}</p>}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {c.reports.map((s, i) => (
                <figure key={s.src} className={`overflow-hidden rounded-xl border border-line bg-surface ${i === 0 ? 'md:col-span-2' : ''} md:[&:last-child:nth-child(even)]:col-span-2`}>
                  <a href={s.src} target="_blank" rel="noopener noreferrer">
                    <img src={s.src} alt={s[lang]} width="1426" height="802" loading="lazy" className="block h-auto w-full" />
                  </a>
                  <figcaption className="border-t border-line/70 px-4 py-3 text-xs leading-relaxed text-muted">{s[lang]}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
        {c.shots && c.shots.length > 1 && (
          <section className="border-t border-line py-10">
            <h2 className="text-sm font-semibold text-ink">{d.pagesTitle || L.pages}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {c.shots.slice(1).map((s) => (
                <figure key={s.src} className="overflow-hidden rounded-xl border border-line bg-surface md:[&:last-child:nth-child(odd)]:col-span-2">
                  <a href={s.src} target="_blank" rel="noopener noreferrer">
                    <img src={s.src} alt={s[lang]} width="1426" height="802" loading="lazy" className="block h-auto w-full" />
                  </a>
                  <figcaption className="border-t border-line/70 px-4 py-3 text-xs leading-relaxed text-muted">{s[lang]}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
        <Block title={L.result}>
          <p className="border-l-2 border-accent pl-4 text-lg leading-relaxed text-ink">{d.result}</p>
        </Block>
        {d.next && <Block title={L.next}><p className="leading-relaxed text-muted">{d.next}</p></Block>}
        {c.download && (
          <Block title={c.download[lang].title}>
            <a href={c.download.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-accent hover:underline">
              {c.download[lang].label} <ArrowUpRight size={15} />
            </a>
          </Block>
        )}
        {c.link && (
          <Block title="Code">
            <a href={c.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-accent hover:underline">
              GitHub <ArrowUpRight size={15} />
            </a>
          </Block>
        )}
      </div>

      <Link to={casePath(lang, next.slug)} className="group mt-6 flex items-center justify-between gap-6 rounded-xl border border-line p-6 hover:border-ink/40 sm:p-8">
        <span>
          <span className="text-sm text-muted">{L.nextCase}</span>
          <span className="display mt-1 block text-2xl text-ink group-hover:text-accent sm:text-3xl">{next[lang].title}</span>
        </span>
        <ArrowRight size={24} className="flex-none text-muted group-hover:text-accent" />
      </Link>
    </article>
  );
};

const NotFound = ({ t, lang }) => (
  <div className="py-32">
    <h1 className="display text-4xl text-ink">{t.labels.notFound}</h1>
    <Link to={homePath(lang)} className="mt-6 inline-flex items-center gap-1.5 font-semibold text-accent">
      <ArrowLeft size={16} /> {t.labels.home}
    </Link>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Application                                                        */
/* ------------------------------------------------------------------ */

export default function App({ initialPath }) {
  const [path, setPath] = useState(initialPath);
  const [theme, setTheme] = useState('light');
  const route = useMemo(() => parseRoute(path), [path]);
  const t = content[route.lang];

  // Thème : la classe est déjà posée par le script du <head> avant l'affichage
  useEffect(() => { setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light'); }, []);
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.documentElement.style.colorScheme = nextTheme;
    try { localStorage.setItem('theme', nextTheme); } catch (e) { /* ignore */ }
  };

  const navigate = useCallback((to) => {
    const [p, hash] = to.split('#');
    window.history.pushState(null, '', to);
    setPath(p);
    requestAnimationFrame(() => {
      const el = hash && document.getElementById(hash);
      if (el) el.scrollIntoView(); else window.scrollTo(0, 0);
    });
  }, []);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const head = headFor(route);
    document.title = head.title;
    document.documentElement.lang = route.lang;
    document.querySelector('meta[name="description"]')?.setAttribute('content', head.description);
  }, [route]);

  return (
    <NavContext.Provider value={navigate}>
      <div className="min-h-screen bg-paper font-sans text-ink">
        <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-paper">{t.skip}</a>
        <Header t={t} route={route} theme={theme} toggleTheme={toggleTheme} />
        <main id="contenu" className="mx-auto max-w-6xl px-5 sm:px-8">
          {route.page === 'home' && <Home t={t} lang={route.lang} />}
          {route.page === 'case' && <CasePage key={route.slug} t={t} lang={route.lang} slug={route.slug} />}
          {route.page === 'notfound' && <NotFound t={t} lang={route.lang} />}
        </main>
        <Footer t={t} />
      </div>
    </NavContext.Provider>
  );
}
