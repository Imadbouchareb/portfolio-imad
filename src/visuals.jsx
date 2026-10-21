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


/* ---------------- Étude SNCF : schémas ---------------- */

const Arrow = ({ dir = 'right' }) => (
  dir === 'down' ? (
    <span aria-hidden="true" className="relative mx-auto block h-4 w-px bg-ink/40">
      <span className="absolute -bottom-0.5 -left-[3px] h-0 w-0 border-x-[3.5px] border-t-[5px] border-x-transparent border-t-ink/40" />
    </span>
  ) : (
    <span aria-hidden="true" className="relative block h-px w-full bg-ink/40">
      <span className="absolute -right-0.5 -top-[3px] h-0 w-0 border-y-[3.5px] border-l-[5px] border-y-transparent border-l-ink/40" />
    </span>
  )
);

export const AstreinteFlow = ({ lang }) => {
  const fr = lang === 'fr';
  const steps = fr
    ? [
        { r: 'Agent', a: [['Déclare l’astreinte et ses sorties', 'ok']], m: 'E-mail au responsable, accusé de réception à l’agent' },
        { r: 'Responsable', a: [['Valide', 'ok'], ['Refuse, avec un motif', 'no'], ['Transmet au DUO, avec un motif', 'up']], m: 'E-mail au GU ou au DUO' },
        { r: 'DUO', opt: 'si transmis', a: [['Valide', 'ok'], ['Refuse', 'no']], m: 'E-mail au GU' },
        { r: 'GU', a: [['Met en paiement', 'ok'], ['Rejette', 'no']], m: 'E-mail final à l’agent' }
      ]
    : [
        { r: 'Employee', a: [['Declares the on-call duty and call-outs', 'ok']], m: 'Email to the manager, receipt to the employee' },
        { r: 'Manager', a: [['Approves', 'ok'], ['Rejects, with a reason', 'no'], ['Escalates to the DUO, with a reason', 'up']], m: 'Email to the GU or the DUO' },
        { r: 'DUO', opt: 'if escalated', a: [['Approves', 'ok'], ['Rejects', 'no']], m: 'Email to the GU' },
        { r: 'GU', a: [['Releases payment', 'ok'], ['Rejects', 'no']], m: 'Final email to the employee' }
      ];
  const dot = { ok: 'bg-accent', no: 'bg-alert', up: 'bg-warn' };
  return (
    <div className="p-5 sm:p-6">
      <ol className="grid gap-2 sm:grid-cols-4 sm:gap-0">
        {steps.map((s, i) => (
          <li key={s.r} className="relative flex flex-col sm:block">
            <div className={`rounded-lg border bg-paper p-3 sm:mr-6 ${s.opt ? 'border-dashed border-line' : 'border-line'}`}>
              <p className="text-[11px] text-muted">{i + 1}{s.opt ? ` · ${s.opt}` : ''}</p>
              <p className="mt-0.5 font-semibold text-ink">{s.r}</p>
              <ul className="mt-2 space-y-1.5">
                {s.a.map(([t, k]) => (
                  <li key={t} className="flex items-start gap-2 text-xs leading-snug text-ink">
                    <span className={`mt-1 h-1.5 w-1.5 flex-none rounded-full ${dot[k]}`} />{t}
                  </li>
                ))}
              </ul>
              <p className="mt-3 border-t border-line pt-2 text-[11px] leading-snug text-muted">{s.m}</p>
            </div>
            {i < steps.length - 1 && (
              <>
                <span className="absolute right-0 top-8 hidden w-6 sm:block"><Arrow /></span>
                <span className="py-1 sm:hidden"><Arrow dir="down" /></span>
              </>
            )}
          </li>
        ))}
      </ol>
      <div className="mt-4 grid gap-2 text-xs leading-relaxed text-muted sm:grid-cols-2">
        <p className="rounded-lg border border-dashed border-line p-3">
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-alert align-middle" />
          {fr ? 'Chaque refus revient à l’agent par e-mail, avec le motif. L’agent corrige et soumet à nouveau.' : 'Every rejection goes back to the employee by email, with the reason. They fix it and submit again.'}
        </p>
        <p className="rounded-lg border border-dashed border-line p-3">
          {fr ? 'Chaque e-mail porte un lien qui ouvre l’application directement sur l’écran du rôle suivant.' : 'Each email carries a link that opens the app straight on the next role’s screen.'}
        </p>
      </div>
    </div>
  );
};

export const SavFlow = ({ lang }) => {
  const fr = lang === 'fr';
  const steps = fr
    ? [
        { r: 'Pipeline LLM', who: 'mes coéquipiers', team: true, a: ['Nettoyage et dédoublonnage', 'Contexte RAG : 4 755 réponses types', 'Thème, sentiment, urgence et gravité de 0 à 3, résumé, réponse proposée'], m: 'Un fichier de 16 colonnes par message' },
        { r: 'Import', who: 'ma partie', a: ['Colonnes normalisées : dates, thèmes, sentiment, notes', 'Statuts, affectations et réponses lus dans un fichier à part'], m: 'Une nouvelle analyse n’efface pas le travail des agents' },
        { r: 'Score de priorité', who: 'ma partie', a: ['0,45 × urgence', '0,40 × gravité', '0,15 × sentiment négatif'], m: 'De 0 à 1, seuil réglable par l’analyste' },
        { r: 'Trois écrans', who: 'ma partie', a: ['Analyste : tendances, thèmes, exports', 'Manager : charge, urgences, équipes', 'Agent SAV : file d’attente et réponse'], m: 'Chaque action de l’agent est enregistrée' }
      ]
    : [
        { r: 'LLM pipeline', who: 'my teammates', team: true, a: ['Cleaning and de-duplication', 'RAG context: 4,755 reply templates', 'Topic, sentiment, urgency and severity from 0 to 3, summary, suggested reply'], m: 'A 16-column file, one row per message' },
        { r: 'Import', who: 'my part', a: ['Normalised columns: dates, topics, sentiment, scores', 'Statuses, assignments and replies read from a separate file'], m: 'A new analysis does not wipe the agents’ work' },
        { r: 'Priority score', who: 'my part', a: ['0.45 × urgency', '0.40 × severity', '0.15 × negative sentiment'], m: 'From 0 to 1, threshold set by the analyst' },
        { r: 'Three screens', who: 'my part', a: ['Analyst: trends, topics, exports', 'Manager: workload, urgent cases, teams', 'Support agent: queue and reply'], m: 'Every agent action is saved' }
      ];
  return (
    <div className="p-5 sm:p-6">
      <ol className="grid gap-2 sm:grid-cols-4 sm:gap-0">
        {steps.map((s, i) => (
          <li key={s.r} className="relative flex flex-col sm:block">
            <div className={`h-full rounded-lg border bg-paper p-3 sm:mr-6 ${s.team ? 'border-dashed border-line' : 'border-accent/60'}`}>
              <p className="text-[11px] text-muted">{i + 1} · {s.who}</p>
              <p className="mt-0.5 font-semibold text-ink">{s.r}</p>
              <ul className="mt-2 space-y-1.5">
                {s.a.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-xs leading-snug text-ink">
                    <span className={`mt-1 h-1.5 w-1.5 flex-none rounded-full ${s.team ? 'bg-ink/40' : 'bg-accent'}`} />{t}
                  </li>
                ))}
              </ul>
              <p className="mt-3 border-t border-line pt-2 text-[11px] leading-snug text-muted">{s.m}</p>
            </div>
            {i < steps.length - 1 && (
              <>
                <span className="absolute right-0 top-8 hidden w-6 sm:block"><Arrow /></span>
                <span className="py-1 sm:hidden"><Arrow dir="down" /></span>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export const BotFlow = ({ lang }) => {
  const fr = lang === 'fr';
  const steps = fr
    ? [
        { t: 'Le fichier de suivi est mis à jour', d: 'Dossier SharePoint de la DRH' },
        { t: 'Contrat arrivé à échéance ?', d: 'Sinon, rien à faire', q: true },
        { t: 'Matricule déjà prévenu ?', d: 'Vérifié dans l’historique des envois. Si oui, rien à faire', q: true },
        { t: 'E-mail à l’agent et à son manager', d: 'Deux messages selon que le contrat est en tacite reconduction ou non' },
        { t: 'Envoi enregistré dans l’historique', d: 'Le prochain passage ne relancera pas', end: true }
      ]
    : [
        { t: 'The tracking file is updated', d: 'HR SharePoint folder' },
        { t: 'Contract reached its end date?', d: 'Otherwise, nothing to do', q: true },
        { t: 'Employee already notified?', d: 'Checked against the email history. If yes, nothing to do', q: true },
        { t: 'Email to the employee and their manager', d: 'Two templates, depending on automatic renewal' },
        { t: 'Email logged in the history', d: 'The next run will not send it again', end: true }
      ];
  return (
    <div className="p-5 sm:p-6">
      <ol className="grid gap-2 sm:grid-cols-5 sm:gap-0">
        {steps.map((s, i) => (
          <li key={s.t} className="relative flex flex-col sm:block">
            <div className={`h-full rounded-lg border bg-paper p-3 sm:mr-5 ${s.end ? 'border-accent' : 'border-line'}`}>
              <p className="text-[11px] text-muted">{i + 1}{s.q ? (fr ? ' · test' : ' · check') : ''}</p>
              <p className="mt-0.5 text-sm font-semibold leading-snug text-ink">{s.t}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.d}</p>
            </div>
            {i < steps.length - 1 && (
              <>
                <span className="absolute right-0 top-8 hidden w-5 sm:block"><Arrow /></span>
                <span className="py-1 sm:hidden"><Arrow dir="down" /></span>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export const VISUALS = { shots: ShotsVisual,  alerts: AlertsVisual, pipeline: PipelineVisual, llm: LlmVisual, sncf: SncfVisual, astreinteFlow: AstreinteFlow, botFlow: BotFlow, savFlow: SavFlow };
