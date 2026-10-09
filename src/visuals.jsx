import React from 'react';

/* Tous les visuels sont dessinés en code avec des données fictives :
   nets à toutes les tailles, en clair comme en sombre, et sans donnée client. */

/* Formatage fait à la main : identique côté serveur et navigateur (Intl varie selon les moteurs) */
const num = (lang, n, digits = 1) => {
  const s = n.toFixed(digits);
  return lang === 'fr' ? s.replace('.', ',') : s;
};
const idxColor = (v) => (v >= 100 ? 'text-accent' : v >= 95 ? 'text-warn' : 'text-alert');

/* ---------------- Hero : CA hebdo vs N-1 ---------------- */

const WEEKS = [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
const SALES_N = [412, 398, 430, 455, 470, 438, 402, 380, 395, 421, 448, 462, 489, 505];
const SALES_N1 = [405, 401, 418, 431, 452, 440, 410, 392, 388, 402, 420, 441, 458, 470];

export const SalesChart = ({ t, lang }) => {
  const total = SALES_N.reduce((a, b) => a + b, 0);
  const totalN1 = SALES_N1.reduce((a, b) => a + b, 0);
  const index = Math.round((total / totalN1) * 100);
  const growth = (total / totalN1 - 1) * 100;
  const W = 560, H = 210, padL = 8, padR = 8, padT = 12, padB = 26, max = 540;
  const step = (W - padL - padR) / WEEKS.length;
  const y = (v) => padT + (H - padT - padB) * (1 - v / max);
  const linePath = SALES_N1.map((v, i) => `${i ? 'L' : 'M'}${padL + step * i + step / 2},${y(v)}`).join(' ');

  return (
    <figure className="rounded-xl border border-line bg-paper p-5 sm:p-6">
      <figcaption className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-semibold text-ink">{t.chart.title}</p>
          <p className="mt-0.5 text-xs text-muted">{t.chart.subtitle}</p>
        </div>
        <div className="flex gap-6 sm:text-right">
          <div>
            <p className="text-xs text-muted">{t.chart.kpi}</p>
            <p className="display text-2xl text-ink">
              {lang === 'fr' ? `${num(lang, total / 1000)} M€` : `€${num(lang, total / 1000)}M`}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted">{t.chart.index}</p>
            <p className="display text-2xl text-accent">
              {index}
              <span className="ml-1.5 text-sm font-medium">+{num(lang, growth)}{lang === 'fr' ? '\u00a0%' : '%'}</span>
            </p>
          </div>
        </div>
      </figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-5 w-full" role="img" aria-label={`${t.chart.title}, ${t.chart.weeks}`}>
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1={padL} x2={W - padR} y1={padT + (H - padT - padB) * f} y2={padT + (H - padT - padB) * f} stroke="rgb(var(--line))" />
        ))}
        {SALES_N.map((v, i) => (
          <rect key={i} className="bar" style={{ animationDelay: `${i * 35}ms` }}
            x={padL + step * i + step * 0.2} width={step * 0.6} y={y(v)} height={y(0) - y(v)} rx="2"
            fill={v >= SALES_N1[i] ? 'rgb(var(--accent))' : 'rgb(var(--accent) / 0.45)'} />
        ))}
        <path d={linePath} pathLength="1" className="trend" fill="none" stroke="rgb(var(--muted))" strokeWidth="2" strokeLinejoin="round" />
        {WEEKS.map((w, i) => (i % 2 === 0 ? (
          <text key={w} x={padL + step * i + step / 2} y={H - 8} textAnchor="middle" fontSize="11" fill="rgb(var(--muted))">S{w}</text>
        ) : null))}
        <line x1={padL} x2={W - padR} y1={y(0)} y2={y(0)} stroke="rgb(var(--ink) / 0.4)" />
      </svg>
      <div className="mt-3 flex gap-5 text-xs text-muted">
        <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-accent" />{t.chart.n}</span>
        <span className="flex items-center gap-2"><span className="h-0.5 w-4 bg-muted" />{t.chart.n1}</span>
      </div>
    </figure>
  );
};

/* ---------------- Étude 1 : alertes ventes comparables ---------------- */

const DAYS = [
  { fr: 'sam. 03/10', en: 'Sat 03/10', n: 48.2, n1: 46.9 },
  { fr: 'ven. 02/10', en: 'Fri 02/10', n: 39.5, n1: 41.8 },
  { fr: 'jeu. 01/10', en: 'Thu 01/10', n: 31.7, n1: 31.2 },
  { fr: 'mer. 30/09', en: 'Wed 30/09', n: 36.4, n1: 34.0 },
  { fr: 'mar. 29/09', en: 'Tue 29/09', n: 28.9, n1: 30.6 },
  { fr: 'lun. 28/09', en: 'Mon 28/09', n: 24.1, n1: 23.5 },
  { fr: 'dim. 27/09', en: 'Sun 27/09', n: 12.6, n1: 12.2 }
];
const DEPTS = [
  { fr: 'Bijoux', en: 'Jewellery', n: 118.4, n1: 112.9 },
  { fr: 'Acier', en: 'Steel', n: 42.7, n1: 46.1 },
  { fr: 'Accessoires', en: 'Accessories', n: 38.2, n1: 36.0 },
  { fr: 'Capsule', en: 'Capsule', n: 14.6, n1: 15.9 },
  { fr: 'Autres', en: 'Other', n: 7.5, n1: 7.1 }
];

export const AlertsVisual = ({ lang }) => {
  const fr = lang === 'fr';
  const sumN = DAYS.reduce((a, d) => a + d.n, 0), sumN1 = DAYS.reduce((a, d) => a + d.n1, 0);
  const alerts = DEPTS.filter((d) => d.n / d.n1 < 0.95).length;
  const Row = ({ label, n, n1, strong }) => {
    const i = Math.round((n / n1) * 100);
    return (
      <tr className={`border-t border-line ${strong ? 'font-semibold' : ''}`}>
        <td className="py-1.5 pr-2 text-ink">{label}</td>
        <td className="py-1.5 text-right text-ink">{num(lang, n)}</td>
        <td className="py-1.5 text-right text-muted">{num(lang, n1)}</td>
        <td className={`py-1.5 pl-2 text-right font-semibold ${idxColor(i)}`}>{i}</td>
      </tr>
    );
  };
  const head = (
    <tr className="text-[11px] text-muted">
      <th className="pb-1.5 text-left font-medium" />
      <th className="pb-1.5 text-right font-medium">2026</th>
      <th className="pb-1.5 text-right font-medium">2025</th>
      <th className="pb-1.5 pl-2 text-right font-medium">{fr ? 'Indice' : 'Index'}</th>
    </tr>
  );
  return (
    <div className="p-4 text-[13px] sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-semibold text-ink">{fr ? 'Ventes comparables, 7 derniers jours (k€)' : 'Like-for-like sales, last 7 days (k€)'}</p>
        <div className="flex gap-1.5 text-[11px]">
          <span className="rounded border border-line bg-paper px-2 py-1 text-muted">{fr ? 'Centrale : toutes' : 'Account: all'}</span>
          <span className="rounded border border-line bg-paper px-2 py-1 text-muted">{fr ? 'Au 03/10/2026' : 'As of 03/10/2026'}</span>
        </div>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1.25fr_1fr]">
        <div className="rounded-lg bg-paper p-3">
          <table className="w-full tabular-nums">
            <thead>{head}</thead>
            <tbody>
              {DAYS.map((d) => <Row key={d.en} label={fr ? d.fr : d.en} n={d.n} n1={d.n1} />)}
              <Row label="Total" n={sumN} n1={sumN1} strong />
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-3">
          <div className="rounded-lg bg-paper p-3">
            <p className="text-[11px] text-muted">{fr ? 'Rayons en alerte' : 'Departments on alert'}</p>
            <p className="display mt-0.5 text-3xl text-alert">{alerts}<span className="ml-1 text-sm font-medium text-muted">/ {DEPTS.length}</span></p>
          </div>
          <div className="flex-1 rounded-lg bg-paper p-3">
            <table className="w-full tabular-nums">
              <thead>{head}</thead>
              <tbody>{DEPTS.map((d) => <Row key={d.en} label={fr ? d.fr : d.en} n={d.n} n1={d.n1} />)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Étude 2 : pipeline ---------------- */

export const PipelineVisual = ({ lang, compact }) => {
  const fr = lang === 'fr';
  const steps = fr
    ? [
        { t: 'SAP Analytics Cloud', d: 'Exports CSV quotidiens, environ 5 Go d’historique' },
        { t: 'Python et Polars', d: 'Nettoyage, mapping des rayons, devises, archivage' },
        { t: 'Parquet', d: 'Un fichier unique, compressé et typé' },
        { t: 'Power BI', d: 'Modèle en étoile, rafraîchissement incrémentiel' }
      ]
    : [
        { t: 'SAP Analytics Cloud', d: 'Daily CSV exports, about 5 GB of history' },
        { t: 'Python and Polars', d: 'Cleaning, department mapping, currencies, archiving' },
        { t: 'Parquet', d: 'A single compressed, typed file' },
        { t: 'Power BI', d: 'Star schema, incremental refresh' }
      ];
  const inputs = fr
    ? ['Tables de mapping Excel tenues par le métier', 'Taux de change par API']
    : ['Excel mapping tables owned by the business', 'Exchange rates by API'];
  return (
    <div className="p-5 sm:p-6">
      <ol className={compact ? 'grid grid-cols-2 gap-2' : 'grid gap-2 sm:grid-cols-4 sm:gap-0'}>
        {steps.map((s, i) => (
          <li key={s.t} className="relative flex sm:block">
            <div className={`flex-1 rounded-lg border p-3 ${compact ? '' : 'sm:mr-5'} ${i === 1 ? 'border-accent bg-paper' : 'border-line bg-paper'}`}>
              <p className="text-[11px] text-muted">{i + 1}</p>
              <p className="mt-0.5 font-semibold leading-snug text-ink">{s.t}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.d}</p>
            </div>
            {!compact && i < steps.length - 1 && (
              <span aria-hidden="true" className="absolute right-0 top-1/2 hidden h-px w-5 -translate-y-1/2 bg-ink/40 sm:block">
                <span className="absolute -right-0.5 -top-[3px] h-0 w-0 border-y-[3.5px] border-l-[5px] border-y-transparent border-l-ink/40" />
              </span>
            )}
          </li>
        ))}
      </ol>
      <div className={compact ? 'mt-2' : 'mt-3 sm:ml-[25%] sm:mr-[50%]'}>
        {!compact && <div className="mx-auto hidden h-4 w-px bg-ink/30 sm:block" aria-hidden="true" />}
        <ul className="space-y-1.5 rounded-lg border border-dashed border-line p-3 text-xs text-muted">
          {inputs.map((x) => <li key={x}>{x}</li>)}
        </ul>
      </div>
    </div>
  );
};

/* ---------------- Étude 3 : test-contrôle ---------------- */

export const TestVisual = ({ lang }) => {
  const fr = lang === 'fr';
  const groups = fr
    ? [{ l: '20 magasins test', v: 131, c: 'accent' }, { l: 'Magasins de contrôle', v: 104, c: 'prior' }, { l: 'Réseau complet', v: 102, c: 'prior' }]
    : [{ l: '20 test stores', v: 131, c: 'accent' }, { l: 'Control stores', v: 104, c: 'prior' }, { l: 'Whole network', v: 102, c: 'prior' }];
  const max = 140;
  return (
    <div className="p-5 sm:p-6">
      <p className="font-semibold text-ink">{fr ? 'Indice des ventes du rayon face à N-1' : 'Department sales index vs last year'}</p>
      <div className="mt-4 space-y-3">
        {groups.map((g) => (
          <div key={g.l} className="grid grid-cols-[7.5rem_1fr_2.5rem] items-center gap-3 text-sm sm:grid-cols-[9.5rem_1fr_2.5rem]">
            <span className="text-ink">{g.l}</span>
            <div className="relative h-6 rounded bg-paper">
              <div className="absolute inset-y-0 left-0 rounded" style={{ width: `${(g.v / max) * 100}%`, background: `rgb(var(--${g.c}))` }} />
              <div className="absolute -inset-y-1 w-px bg-ink/60" style={{ left: `${(100 / max) * 100}%` }} />
            </div>
            <span className="display text-right text-lg text-ink">{g.v}</span>
          </div>
        ))}
        <p className="text-[11px] text-muted sm:pl-[10.25rem]">{fr ? 'Trait vertical : base 100, même niveau que l’an dernier' : 'Vertical line: base 100, same as last year'}</p>
      </div>
      <div className="mt-5 rounded-lg bg-paper p-4">
        <p className="text-sm text-ink">{fr ? 'D’où vient le chiffre du nouveau présentoir ?' : 'Where do the new display’s sales come from?'}</p>
        <div className="mt-3 flex h-7 overflow-hidden rounded text-xs font-semibold">
          <div className="flex items-center bg-accent pl-2 text-paper" style={{ width: '76%' }}>{fr ? 'Additionnel 76 %' : 'Incremental 76%'}</div>
          <div className="flex flex-1 items-center bg-prior pl-2 text-ink">{fr ? 'Déplacé 24 %' : 'Shifted 24%'}</div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Étude 4 : assistant MCP ---------------- */

export const McpVisual = ({ lang }) => {
  const fr = lang === 'fr';
  return (
    <div className="space-y-3 p-5 text-sm sm:p-6">
      <div className="ml-auto max-w-[85%] rounded-lg rounded-br-sm bg-ink px-3.5 py-2.5 text-paper">
        {fr ? 'Quels magasins faut-il réassortir en priorité cette semaine en bijoux ?' : 'Which stores need jewellery restocking first this week?'}
      </div>
      <div className="max-w-[85%] rounded-lg border border-dashed border-line px-3.5 py-2 font-mono text-xs text-muted">
        get_reassort_urgent(rayon="BIJOUX", semaine=40)
      </div>
      <div className="max-w-[90%] rounded-lg rounded-bl-sm border border-line bg-paper px-3.5 py-3 text-ink">
        <p>{fr ? 'Trois magasins passent sous 2 semaines de couverture :' : 'Three stores drop below 2 weeks of cover:'}</p>
        <table className="mt-2 w-full text-xs tabular-nums">
          <tbody>
            {[['Magasin 0412', '1,2'], ['Magasin 0587', '1,5'], ['Magasin 0233', '1,8']].map(([m, c]) => (
              <tr key={m} className="border-t border-line">
                <td className="py-1.5">{fr ? m : m.replace('Magasin', 'Store')}</td>
                <td className="py-1.5 text-right text-muted">{fr ? `${c} sem. de couverture` : `${c.replace(',', '.')} wks of cover`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="flex flex-wrap items-center gap-2 pt-1 text-xs text-muted">
        <span className="rounded border border-line px-2 py-0.5">{fr ? 'Assistant IA' : 'AI assistant'}</span>
        <span aria-hidden="true">→</span>
        <span className="rounded border border-accent px-2 py-0.5 text-accent">{fr ? 'Serveur MCP, 5 outils' : 'MCP server, 5 tools'}</span>
        <span aria-hidden="true">→</span>
        <span className="rounded border border-line px-2 py-0.5">SAP HANA</span>
      </p>
    </div>
  );
};

/* ---------------- Étude 5 : messages SAV ---------------- */

export const LlmVisual = ({ lang }) => {
  const fr = lang === 'fr';
  const msgs = fr
    ? [
        { text: 'Toujours pas de connexion depuis 3 jours, et personne ne répond au téléphone.', s: 'Négatif', u: 'Haute', hi: true, g: 4 },
        { text: 'Merci au conseiller d’hier, problème réglé en 10 minutes.', s: 'Positif', u: 'Basse', g: 1 },
        { text: 'Comment changer l’adresse de facturation ?', s: 'Neutre', u: 'Moyenne', g: 2 }
      ]
    : [
        { text: 'Still no connection after 3 days, and nobody answers the phone.', s: 'Negative', u: 'High', hi: true, g: 4 },
        { text: 'Thanks to yesterday’s agent, fixed in 10 minutes.', s: 'Positive', u: 'Low', g: 1 },
        { text: 'How do I change my billing address?', s: 'Neutral', u: 'Medium', g: 2 }
      ];
  const L = fr ? ['Sentiment', 'Urgence', 'Gravité'] : ['Sentiment', 'Urgency', 'Severity'];
  return (
    <ul className="space-y-2.5 p-5 sm:p-6">
      {msgs.map((m, i) => (
        <li key={i} className={`rounded-lg border bg-paper p-3.5 ${m.hi ? 'border-accent' : 'border-line'}`}>
          <p className="text-sm text-ink">{m.text}</p>
          <dl className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-xs">
            <div className="flex gap-1.5"><dt className="text-muted">{L[0]}</dt><dd className="text-ink">{m.s}</dd></div>
            <div className="flex gap-1.5"><dt className="text-muted">{L[1]}</dt><dd className={m.hi ? 'font-semibold text-accent' : 'text-ink'}>{m.u}</dd></div>
            <div className="flex items-center gap-1.5">
              <dt className="text-muted">{L[2]}</dt>
              <dd className="flex gap-0.5" aria-label={`${m.g}/5`}>
                {[1, 2, 3, 4, 5].map((k) => <span key={k} className={`h-2 w-2 rounded-sm ${k <= m.g ? 'bg-ink' : 'bg-line'}`} />)}
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
};

/* ---------------- Étude 6 : SNCF ---------------- */

export const SncfVisual = ({ lang }) => (
  <div className="flex items-end justify-center gap-4 px-5 pt-6 sm:gap-6">
    {[
      { src: '/images/projet-dispatch.png', alt: lang === 'fr' ? 'Écran d’affectation des équipes' : 'Team dispatch screen', w: 496, h: 875 },
      { src: '/images/projet-astreintes.png', alt: lang === 'fr' ? 'Écran de déclaration d’astreinte' : 'On-call declaration screen', w: 429, h: 757 }
    ].map((img) => (
      <img key={img.src} src={img.src} alt={img.alt} loading="lazy" width={img.w} height={img.h}
        className="h-56 w-auto rounded-t-lg border border-b-0 border-line object-cover object-top sm:h-72" />
    ))}
  </div>
);

export const ShotsVisual = ({ lang, shots = [] }) => {
  const s = shots[0];
  if (!s) return null;
  return (
    <img src={s.src} alt={s[lang]} width="1426" height="802" loading="lazy"
      className="block h-auto w-full" />
  );
};

export const VISUALS = { shots: ShotsVisual,  alerts: AlertsVisual, pipeline: PipelineVisual, test: TestVisual, mcp: McpVisual, llm: LlmVisual, sncf: SncfVisual };
