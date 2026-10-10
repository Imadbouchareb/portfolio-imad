/* Études de cas. Ordre = ordre d'affichage.
   `visual` renvoie au composant de visuels.jsx. `link` : lien GitHub ou démo optionnel. */

export const cases = [
  {
    slug: 'dossier-rendez-vous-client',
    visual: 'shots',
    stack: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'Excel'],
    shots: [
      { src: '/images/dossier-client/1-synthese.webp', fr: 'Synthèse : ventes comparables, marges, démarque et écart au budget, sur la période 1 et la période d’opération.', en: 'Summary: like-for-like sales, margins, markdown and gap to budget, for period 1 and the promotion period.' },
      { src: '/images/dossier-client/3-kpi-magasins.webp', fr: 'KPI par type de magasin, face à N-1 et au budget : indice de vente, prix moyen, panier moyen, tickets en opération.', en: 'KPIs by store type against last year and budget: items per ticket, average price, average basket, promotion tickets.' },
      { src: '/images/dossier-client/2-courbe-mensuelle.webp', fr: 'Ventes comparables mois par mois face à 2025, les mois de l’opération en jaune.', en: 'Like-for-like sales month by month against 2025, promotion months in yellow.' },
      { src: '/images/dossier-client/5-mix-picots.webp', fr: 'Mix des rayons et indice de rendement : ce que chaque rayon vend rapporté à la place qu’il occupe.', en: 'Department mix and space productivity: what each department sells against the space it takes.' },
      { src: '/images/dossier-client/6-best-worst.webp', fr: 'Meilleurs et moins bons magasins, positionnés face à N-1 et au budget.', en: 'Best and worst stores, positioned against last year and budget.' },
      { src: '/images/dossier-client/4-tranches-prix.webp', fr: 'Ventes par tranche de prix pour un rayon, affiliés et succursales, période 1 et période d’opération.', en: 'Sales by price band for one department, affiliates and company-owned stores, period 1 and promotion period.' }
    ],
    fr: {
      kind: 'Power BI',
      sector: 'Distribution retail, 2026',
      title: 'Dossier d’analyse pour un rendez-vous client',
      summary:
        'Un rapport Power BI qui prépare un rendez-vous de la direction avec une enseigne cliente : ventes comparables, marges au prix de revient, démarque, budget, tickets et rendement de la place en rayon.',
      role: 'Modèle et rapport, préparés en binôme',
      period: 'Octobre 2026',
      caption: 'Captures du rapport Power BI, alimenté par des données fictives.',
      context:
        'La direction rencontre une enseigne cliente pour faire le point sur l’année : performance des magasins, rentabilité par rayon, effet d’une opération commerciale. Il fallait un dossier unique, lisible en réunion, avec des chiffres comparables d’une année sur l’autre.',
      challenge:
        'Comparer ce qui est comparable sur neuf mois et sur deux types de magasins, affiliés et succursales. Calculer des marges à partir d’un prix de revient tenu dans un fichier à part. Isoler l’effet d’une opération répartie sur quatre mois.',
      built: [
        'Une base comparable magasin × mois appliquée à toutes les mesures : ventes, budget, tickets et coûts partagent exactement le même périmètre.',
        'Les marges brute et nette par rayon, valorisées au prix de revient, et la démarque accordée par tranche de prix.',
        'Des tableaux de KPI par type de magasin, face à N-1 et au budget.',
        'Un classement des meilleurs et moins bons magasins au sein de chaque statut, avec un nuage de positionnement.',
        'Un indice de rendement des rayons : leur part dans les ventes rapportée à leur part des picots en magasin.',
        'Un référentiel Excel (tranches de prix, rayons, budget, prix de revient) modifiable sans toucher au rapport.'
      ],
      decisions: [
        { title: 'Comparabilité au mois et au magasin', text: 'Un couple magasin × mois n’entre dans les calculs que s’il a vendu en 2025 et en 2026. Un magasin fermé un mois ne perd que ce mois-là, pas toute l’année.' },
        { title: 'TREATAS plutôt que des relations supplémentaires', text: 'La table des couples comparables filtre ventes, budget, tickets et coûts par TREATAS : un seul périmètre pour tout le dossier, sans alourdir le modèle.' },
        { title: 'Un classement qui ne dépend pas du rayon', text: 'Le rang Best / Worst est calculé hors filtre rayon, avec une table déconnectée pour comparer les deux groupes : on peut ventiler par rayon sans changer qui est en tête.' },
        { title: 'Des tableaux plutôt que des cartes', text: 'Sur la page KPI, deux tableaux remplacent 24 cartes : affiliés et succursales, N et N-1, se comparent d’un seul regard.' },
        { title: 'Une mesure de contrôle', text: 'Une mesure compare les ventes des deux tables de faits, tickets et ventes agrégées. L’écart doit rester nul avant chaque export.' }
      ],
      result:
        'Un dossier unique pour le rendez-vous, où chaque chiffre repose sur le même périmètre comparable, et une structure qui sert de base aux prochains dossiers clients.',
      next: 'Brancher les relevés réels de picots et rendre les périodes paramétrables dans le référentiel plutôt que dans le modèle.'
    },
    en: {
      kind: 'Power BI',
      sector: 'Retail distribution, 2026',
      title: 'Analysis pack for a client meeting',
      summary:
        'A Power BI report preparing a leadership meeting with a retail client: like-for-like sales, margins at cost price, markdown, budget, tickets and shelf-space productivity.',
      role: 'Model and report, built as a pair',
      period: 'October 2026',
      caption: 'Screenshots of the Power BI report, running on fictional data.',
      context:
        'Leadership meets a retail client to review the year: store performance, profitability by department, effect of a promotion. They needed a single pack, readable in the meeting, with figures comparable year on year.',
      challenge:
        'Compare like with like over nine months and two store types, affiliates and company-owned. Compute margins from a cost price kept in a separate file. Isolate the effect of a promotion spread over four months.',
      built: [
        'A store × month comparable base applied to every measure: sales, budget, tickets and costs share exactly the same scope.',
        'Gross and net margins by department at cost price, and markdown by price band.',
        'KPI tables by store type, against last year and budget.',
        'A best and worst store ranking within each store type, with a positioning scatter.',
        'A space productivity index: each department’s share of sales against its share of display hooks.',
        'An Excel reference workbook (price bands, departments, budget, cost prices) editable without touching the report.'
      ],
      decisions: [
        { title: 'Comparability by month and store', text: 'A store × month pair only counts if it sold in both 2025 and 2026. A store closed for a month loses that month only, not the whole year.' },
        { title: 'TREATAS instead of extra relationships', text: 'The comparable pairs table filters sales, budget, tickets and costs through TREATAS: one scope for the whole pack, without weighing down the model.' },
        { title: 'A ranking independent of department', text: 'The Best / Worst rank ignores the department filter and uses a disconnected table to compare groups: you can split by department without changing who leads.' },
        { title: 'Tables instead of cards', text: 'On the KPI page, two tables replace 24 cards: affiliates and company-owned stores, this year and last, compared at a glance.' },
        { title: 'A control measure', text: 'A measure compares sales across the two fact tables, tickets and aggregated sales. The gap must stay at zero before every export.' }
      ],
      result:
        'A single pack for the meeting, where every figure rests on the same comparable scope, and a structure that serves as the base for the next client packs.',
      next: 'Connect the real display hook counts and make periods configurable in the reference workbook rather than in the model.'
    }
  },

  {
    slug: 'alertes-ventes-comparables',
    visual: 'shots',
    stack: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'SAP HANA'],
    shots: [
      { src: '/images/tableau-confie/1-vue-ensemble.webp', fr: 'Vue d’ensemble : cumul de l’année, mois par mois et par centrale, face à 2025. Le mois en cours, en gris, est comparé aux mêmes jours de l’an dernier.', en: 'Overview: year to date, month by month and by account, against 2025. The current month, in grey, is compared with the same days last year.' },
      { src: '/images/tableau-confie/2-suivi-hebdo.webp', fr: 'Nouvelle page : évolution comparable par centrale et par semaine, et contribution de chaque centrale à l’écart.', en: 'New page: like-for-like change by account and by week, and each account’s contribution to the gap.' },
      { src: '/images/tableau-confie/3-sept-jours.webp', fr: 'Les 7 derniers jours face à N-1, par centrale, par rayon et par jour, avec le nombre de rayons en alerte.', en: 'The last 7 days against last year, by account, department and day, with the number of departments on alert.' },
      { src: '/images/tableau-confie/4-detail-produit.webp', fr: 'Détail produit : poids des rayons, écart en valeur par rayon et résultats par sous-famille.', en: 'Product detail: department mix, value gap by department and results by sub-family.' },
      { src: '/images/tableau-confie/5-detail-magasin.webp', fr: 'Détail magasin : VA par magasin et par semaine, tableau exportable vers Excel.', en: 'Store detail: sales per store and per week, table exportable to Excel.' }
    ],
    fr: {
      kind: 'Power BI',
      sector: 'Distribution retail, 2026',
      title: 'Tableau de bord quotidien des centrales',
      summary:
        'Le tableau de bord du contrôle de gestion pour suivre chaque jour les ventes des enseignes clientes de l’activité Confié : cumul de l’année, 7 jours glissants avec alertes, détail produit et magasin.',
      role: 'Reprise et évolutions du rapport, page 7 jours créée à la demande du Directeur Général',
      period: '2026',
      caption: 'Captures du rapport Power BI, alimenté par des données fictives.',
      context:
        "Le contrôle de gestion suit les ventes de dizaines d'enseignes clientes, dans plusieurs pays. Le Directeur Général voulait repérer chaque jour, et non en fin de mois, les centrales et les rayons qui décrochent par rapport à l'an dernier.",
      challenge:
        "Comparer ce qui est comparable : un magasin ouvert cette année ou un rayon absent l'an dernier fausse l'indice. Certaines centrales envoient leurs ventes avec retard, et le mois en cours n'est jamais complet.",
      built: [
        'Une base comparable magasin × rayon × semaine, et × jour de la semaine pour la vue 7 jours, calculée une fois et portée sur chaque ligne de vente.',
        'Une vue d’ensemble en mois ou en semaine : cumul de l’année, résultats mensuels, évolution par centrale.',
        'Une page 7 jours glissants, avec une carte « rayons en alerte » colorée selon le seuil.',
        'Un détail produit (rayon, sous-famille, écart en valeur) et un détail magasin exportable.',
        'Une nouvelle page de suivi hebdomadaire : heatmap centrale × semaine et contribution de chaque centrale à l’écart.',
        'Une page FAQ dans le rapport, qui explique les règles de calcul aux utilisateurs.'
      ],
      decisions: [
        {
          title: 'Comparabilité au niveau magasin, rayon et semaine',
          text: "Un couple magasin × rayon n'entre dans l'indice que s'il a vendu la même semaine en 2025 et en 2026. Pour la vue 7 jours, la règle descend au jour de la semaine : c'est la seule qui reste juste sur une fenêtre aussi courte."
        },
        {
          title: 'Deux définitions du N-1, au choix',
          text: 'En vue semaine, le N-1 est décalé de 364 jours pour comparer un lundi à un lundi. En vue mois, il suit les dates du calendrier. Un signet bascule de l’une à l’autre, et la FAQ l’explique.'
        },
        {
          title: 'Corriger le mois en cours',
          text: "SAMEPERIODLASTYEAR comparait les dix premiers jours de septembre au mois complet de l'an dernier, d'où un faux recul de plus de 60 %. Le N-1 est désormais borné à la dernière date de vente moins un an."
        },
        {
          title: 'Une heatmap plutôt qu’un tableau de chiffres',
          text: 'Sur la nouvelle page, la couleur de chaque case dit si la centrale est au-dessus ou en dessous de N-1 cette semaine-là : on repère d’un coup d’œil qui décroche, et depuis quand.'
        },
        {
          title: 'Un segment de date déconnecté',
          text: 'La date choisie pilote la fenêtre de 7 jours sans casser les autres filtres du rapport.'
        }
      ],
      result:
        "Les responsables de centrale et les chefs de groupe ouvrent ce tableau chaque matin. Quand un rayon passe en alerte, l'information remonte au chef de groupe et à la Direction Générale le jour même.",
      next: 'Sortir les règles écrites en dur (affectation des centrales, correspondances de magasins) dans un référentiel, ranger les 150 mesures dans une table dédiée, et envoyer les alertes du jour par e-mail.'
    },
    en: {
      kind: 'Power BI',
      sector: 'Retail distribution, 2026',
      title: 'Daily dashboard for retail accounts',
      summary:
        'The financial control dashboard that tracks, every day, the sales of the retail accounts in the consignment business: year to date, rolling 7 days with alerts, product and store detail.',
      role: 'Took over and extended the report; built the 7-day page at the CEO’s request',
      period: '2026',
      caption: 'Screenshots of the Power BI report, running on fictional data.',
      context:
        'Financial control follows the sales of dozens of retail accounts across several countries. The CEO wanted to spot every day, not at month end, which accounts and departments were falling behind last year.',
      challenge:
        'Compare like with like: a store opened this year or a department missing last year skews the index. Some accounts send their sales late, and the current month is never complete.',
      built: [
        'A store × department × week comparable base, down to weekday for the 7-day view, computed once and carried on every sales row.',
        'An overview by month or by week: year to date, monthly results, change by account.',
        'A rolling 7-day page, with a “departments on alert” card coloured by threshold.',
        'A product detail (department, sub-family, value gap) and an exportable store detail.',
        'A new weekly tracking page: account × week heatmap and each account’s contribution to the gap.',
        'An FAQ page inside the report that explains the calculation rules to users.'
      ],
      decisions: [
        {
          title: 'Comparability at store, department and week level',
          text: 'A store × department pair only counts if it sold in the same week in 2025 and 2026. For the 7-day view the rule goes down to the weekday: the only one that stays accurate on such a short window.'
        },
        {
          title: 'Two definitions of last year, by choice',
          text: 'In week view, last year is shifted by 364 days to compare a Monday with a Monday. In month view, it follows calendar dates. A bookmark switches between them, and the FAQ explains it.'
        },
        {
          title: 'Fixing the current month',
          text: 'SAMEPERIODLASTYEAR compared the first ten days of September with the whole of last September, showing a false drop of over 60%. Last year is now capped at the last sales date minus one year.'
        },
        {
          title: 'A heatmap instead of a table of numbers',
          text: 'On the new page, each cell’s colour shows whether the account is above or below last year that week: you see at a glance who is falling behind, and since when.'
        },
        {
          title: 'A disconnected date slicer',
          text: 'The chosen date drives the 7-day window without breaking the report’s other filters.'
        }
      ],
      result:
        'Account managers and group heads open this dashboard every morning. When a department goes on alert, it reaches the group head and the CEO the same day.',
      next: 'Move hard-coded rules (account assignment, store mappings) into a reference table, gather the 150 measures in a dedicated table, and email the day’s alerts automatically.'
    }
  },
  {
    slug: 'pilotage-magasins-retail',
    visual: 'shots',
    stack: ['Power BI', 'DAX', 'Power Query', 'SQL Server'],
    shots: [
      { src: '/images/dashboard-retail/1-vue-ensemble.webp', fr: 'Vue d’ensemble par enseigne : CA, quantités, démarque, parc, fréquentation par jour, CA hebdomadaire et palmarès des magasins. La semaine en cours est grisée.', en: 'Overview by banner: sales, units, markdown, store count, footfall by weekday, weekly sales and store ranking. The current week is greyed out.' },
      { src: '/images/dashboard-retail/2-sept-jours.webp', fr: 'Les 7 derniers jours face à N-1, global et à périmètre comparable, par magasin, par rayon et par jour.', en: 'The last 7 days against last year, total and like-for-like, by store, department and day.' },
      { src: '/images/dashboard-retail/4-guide.webp', fr: 'Guide de lecture intégré au rapport : les règles de calcul, écrites pour les utilisateurs.', en: 'Built-in reading guide: the calculation rules, written for users.' },
      { src: '/images/dashboard-retail/3-trafic.webp', fr: 'Nouvelle page : le CA décomposé en entrées × transformation × panier, magasin par magasin, avec un contrôle de la couverture des compteurs.', en: 'New page: sales broken down into footfall × conversion × basket, store by store, with a check on people-counter coverage.' }
    ],
    fr: {
      kind: 'Power BI',
      sector: 'Distribution retail, 2026',
      title: 'Pilotage des magasins en propre',
      summary:
        'Le tableau de bord des magasins des enseignes du groupe : ventes, démarque, fréquentation et transformation, en cumul et sur 7 jours glissants. Repris, audité et remis à plat.',
      role: 'Reprise du rapport, audit, corrections de calcul et nouvelle page trafic',
      period: '2026',
      caption: 'Captures du rapport Power BI, alimenté par des données fictives.',
      context:
        "Le groupe exploite quatre enseignes en propre, en succursale, en affiliation et en corner, en France, dans les DOM et dans quelques pays voisins. Le rapport sert aux responsables d'enseigne pour suivre leurs magasins. En le reprenant, j'ai trouvé 29 pages dont 26 masquées, des mesures écrites pour des opérations ponctuelles et des indicateurs de trafic qui ne disaient pas la même chose selon la page.",
      challenge:
        "Tous les magasins n'ont pas de compteur d'entrées, et certains compteurs tombent en panne. Le taux de transformation et l'évolution de la fréquentation mélangeaient donc des magasins comptés et non comptés, et une panne suffisait à afficher une baisse de trafic qui n'existait pas.",
      built: [
        'Un audit complet du modèle et des pages : 26 pages masquées retirées, 67 mesures et 2 tables liées à des opérations terminées supprimées.',
        'Un taux de transformation calculé uniquement sur les jours où le compteur a fonctionné.',
        'Une fréquentation « à compteurs comparables », qui ne garde que les magasins comptés de la même façon en N et en N-1.',
        'Une nouvelle page trafic : CA = entrées × transformation × panier, en nuage de points par magasin et en tableau de décomposition.',
        'Une date de référence par défaut égale au dernier jour de ventes chargé, et la semaine en cours grisée dans le graphique hebdomadaire.',
        'Un thème commun, un bandeau aux couleurs de l’enseigne sélectionnée et un guide de lecture qui remplace une FAQ devenue inexacte.'
      ],
      decisions: [
        {
          title: 'Ne diviser que ce qui a été compté',
          text: "Le taux de transformation rapportait tous les tickets aux seules entrées comptées. Sur une enseigne où la moitié des magasins n'a pas de compteur, le taux était gonflé. Il ne prend plus que les tickets des jours où le compteur a remonté une valeur."
        },
        {
          title: 'Une fréquentation comparable, comme le CA',
          text: "Un magasin n'entre dans l'évolution des entrées que si son compteur a fonctionné un nombre de jours proche sur les deux périodes. La page affiche les deux chiffres, brut et comparable, avec le taux de couverture."
        },
        {
          title: 'Décomposer plutôt qu’empiler les indicateurs',
          text: "Entrées, transformation et panier expliquent ensemble l'évolution du CA. Les mettre côte à côte, magasin par magasin, montre tout de suite si un magasin perd du trafic ou convertit moins bien."
        },
        {
          title: 'Le dernier jour chargé, pas la date du jour',
          text: "Avec TODAY(), la fenêtre de 7 jours glissait d'un jour dès qu'un chargement avait du retard et affichait une journée vide. La référence par défaut est maintenant la dernière date de vente."
        },
        {
          title: 'Corriger une clé fausse',
          text: "Une clé de comparabilité était construite avec FORMAT(DAY(date), \"dddd\") : le numéro du jour du mois était lu comme une date, et le nom du jour obtenu était faux. Elle utilise désormais le vrai jour de la semaine."
        }
      ],
      result:
        'Le rapport passe de 29 pages à 4 pages lisibles, et le modèle perd les mesures et tables mortes. Les indicateurs de trafic sont cohérents d’une page à l’autre, et la fréquentation ne baisse plus quand un compteur tombe en panne.',
      next: 'Reporter ces corrections dans le rapport de production, sortir les exclusions de magasins écrites en dur dans un référentiel, et remplacer les relations bidirectionnelles entre tables de faits par une table de dates et de magasins commune.'
    },
    en: {
      kind: 'Power BI',
      sector: 'Retail distribution, 2026',
      title: 'Own-store performance dashboard',
      summary:
        'The dashboard for the group’s own stores: sales, markdown, footfall and conversion, year to date and over a rolling 7 days. Taken over, audited and rebuilt.',
      role: 'Took over the report: audit, calculation fixes and a new traffic page',
      period: '2026',
      caption: 'Screenshots of the Power BI report, running on fictional data.',
      context:
        'The group runs four banners of its own, through branches, affiliates and corners, in France, the overseas departments and a few neighbouring countries. Banner managers use the report to follow their stores. When I took it over, it had 29 pages, 26 of them hidden, measures written for one-off operations, and traffic indicators that disagreed from one page to the next.',
      challenge:
        'Not every store has a people counter, and some counters break down. Conversion rate and footfall change mixed counted and uncounted stores, and a single faulty counter was enough to show a traffic drop that did not exist.',
      built: [
        'A full audit of the model and pages: 26 hidden pages removed, 67 measures and 2 tables tied to finished operations deleted.',
        'A conversion rate computed only on days when the counter worked.',
        'A “like-for-like counters” footfall, keeping only stores counted the same way this year and last year.',
        'A new traffic page: sales = footfall × conversion × basket, as a store scatter plot and a breakdown table.',
        'A default reference date set to the last day of loaded sales, and the current week greyed out in the weekly chart.',
        'A shared theme, a header in the selected banner’s colour, and a reading guide replacing an FAQ that had become inaccurate.'
      ],
      decisions: [
        {
          title: 'Only divide what was counted',
          text: 'Conversion divided all receipts by counted visitors only. For a banner where half the stores have no counter, the rate was inflated. It now only uses receipts from days when the counter reported a value.'
        },
        {
          title: 'Like-for-like footfall, just like sales',
          text: 'A store only counts towards footfall change if its counter worked a similar number of days in both periods. The page shows both figures, raw and like-for-like, with the coverage rate.'
        },
        {
          title: 'Break down instead of stacking indicators',
          text: 'Footfall, conversion and basket together explain the change in sales. Putting them side by side, store by store, shows at once whether a store is losing traffic or converting less.'
        },
        {
          title: 'The last loaded day, not today',
          text: 'With TODAY(), the 7-day window moved forward as soon as a load ran late and showed an empty day. The default reference is now the last sales date.'
        },
        {
          title: 'Fixing a broken key',
          text: 'A comparability key used FORMAT(DAY(date), "dddd"): the day of the month was read as a date, so the weekday name was wrong. It now uses the actual weekday.'
        }
      ],
      result:
        'The report goes from 29 pages to 4 readable ones, and the model loses its dead measures and tables. Traffic indicators agree across pages, and footfall no longer drops when a counter breaks down.',
      next: 'Carry these fixes into the production report, move hard-coded store exclusions into a reference table, and replace the bidirectional relationships between fact tables with shared date and store tables.'
    }
  },
  {
    slug: 'analyse-soldes',
    visual: 'shots',
    stack: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'SAP HANA'],
    shots: [
      { src: '/images/analyses-soldes/1-synthese-groupe.webp', fr: 'Nouvelle page de synthèse : les cinq périmètres face à N-1, le rythme des soldes jour après jour et la contribution de chacun à l’écart du groupe.', en: 'New summary page: the five scopes against last year, the sales rhythm day by day and each one’s contribution to the group gap.' },
      { src: '/images/analyses-soldes/2-synthese-deux-semaines.webp', fr: 'La même page en deux clics sur les soldes d’hiver, lecture « 2 premières semaines » : titres, dates et courbes suivent.', en: 'The same page in two clicks on the winter sales, “first two weeks” reading: titles, dates and curves follow.' },
      { src: '/images/analyses-soldes/3-confie-synthese.webp', fr: 'Synthèse des centrales clientes : indices, démarque, top et flop 5, évolution par semaine.', en: 'Retail accounts summary: indices, markdown, top and bottom 5, weekly trend.' },
      { src: '/images/analyses-soldes/4-confie-detail.webp', fr: 'Détail par centrale et rayon, global et comparable, avec la période comparée rédigée automatiquement.', en: 'Detail by account and department, total and like-for-like, with the compared period written automatically.' },
      { src: '/images/analyses-soldes/5-client-principal.webp', fr: 'Focus sur le premier client : rayons par pays, PVM et quantités.', en: 'Focus on the largest account: departments by country, average price and units.' },
      { src: '/images/analyses-soldes/6-enseigne-synthese.webp', fr: 'Synthèse d’une enseigne du groupe, aux couleurs de l’enseigne.', en: 'Summary for one of the group’s banners, in the banner’s colour.' },
      { src: '/images/analyses-soldes/7-enseigne-magasins.webp', fr: 'Détail par magasin, avec totaux global et comparable.', en: 'Store detail, with total and like-for-like subtotals.' }
    ],
    fr: {
      kind: 'Power BI',
      sector: 'Distribution retail, 2026',
      title: 'Bilan des soldes, du premier jour à la fin de période',
      summary:
        'Le rapport qui mesure chaque saison de soldes face à N-1, pour les centrales clientes et les quatre enseignes du groupe. Quatre lectures par saison, deux saisons par an : refondu pour que chaque lecture prenne deux clics.',
      role: 'Reprise du rapport, audit et refonte, nouvelle page de synthèse groupe',
      period: '2026',
      caption: 'Captures du rapport Power BI, alimenté par des données fictives.',
      context:
        "Le rapport sert deux fois par an, pour les soldes d'hiver et d'été, et quatre fois par saison : le premier jour, à une semaine, à deux semaines et en fin de période. Il couvre cinq périmètres : les centrales clientes de l'activité Confié et les quatre enseignes en propre du groupe, chacune avec sa synthèse et ses tableaux par magasin.",
      challenge:
        "Chaque lecture demandait de modifier les dates dans Power Query, le filtre de dates du rapport, une douzaine de titres et les phrases de commentaire, et même de retaper à la main des pourcentages posés par-dessus les tableaux. Rien ne donnait non plus une vue d'ensemble des cinq périmètres.",
      built: [
        'Un calendrier des soldes : une ligne par saison, avec ses dates officielles. Chaque date porte son rang de jour de soldes, en N comme en N-1.',
        'Deux sélecteurs synchronisés sur toutes les pages : la saison et la lecture (1er jour, 1re semaine, 2 premières semaines, toute la période).',
        'Des titres, des périodes comparées et des phrases d’indice calculés, à la place des textes saisis à chaque lecture.',
        'Une nouvelle page de synthèse groupe : les cinq périmètres côte à côte, le rythme des soldes jour après jour, la contribution de chacun à l’écart.',
        'Un thème commun, une couleur par périmètre et des boutons de navigation vers chaque partie.',
        'Le nettoyage du rapport : pages mortes retirées, filtres codés en dur supprimés, démarque recalculée en nombre.'
      ],
      decisions: [
        {
          title: 'Filtrer par rang de jour de soldes plutôt que par dates',
          text: "Les mesures de base ne gardent que les jours 1 à n de la saison. Le N-1 est décalé de 364 jours : le premier mercredi des soldes se compare au premier mercredi de l'an dernier, et la même règle vaut pour les quatre lectures."
        },
        {
          title: 'Un rythme cumulé, jour après jour',
          text: "La courbe de la synthèse montre l'évolution comparable cumulée depuis le premier jour. On voit si un périmètre a raté son démarrage puis rattrapé, ce qu'un chiffre de fin de période cache."
        },
        {
          title: 'Une démarque en nombre, pas en texte',
          text: "La démarque était renvoyée par FORMAT(), donc en texte : pas de total, pas de tri, et des pourcentages retapés à la main par-dessus un tableau. Elle est maintenant un nombre, avec son format."
        },
        {
          title: 'Paginer par rang, pas par seuil de CA',
          text: "Un tableau de magasins était coupé en deux pages avec un seuil de CA écrit en dur, faux dès qu'on change de lecture. Il est maintenant coupé selon le rang du magasin."
        },
        {
          title: 'Des sélecteurs masqués et synchronisés',
          text: "La saison et la lecture se choisissent une fois, sur la synthèse. Une copie masquée de chaque sélecteur sur les autres pages applique ce choix partout, sans encombrer des pages faites pour être imprimées."
        }
      ],
      result:
        'Passer d’une lecture à l’autre ne demande plus aucune modification du rapport : on choisit la saison et la lecture, et les seize pages suivent. La direction dispose en plus d’une page qui compare les cinq périmètres en un coup d’œil.',
      next: 'Reporter la refonte dans le rapport de production, ajouter les saisons passées au calendrier des soldes pour comparer plusieurs années, et sortir la liste des centrales du périmètre dans un référentiel.'
    },
    en: {
      kind: 'Power BI',
      sector: 'Retail distribution, 2026',
      title: 'Sales season review, from day one to the end',
      summary:
        'The report that measures each sales season against last year, for the retail accounts and the group’s four banners. Four readings per season, two seasons a year: rebuilt so each reading takes two clicks.',
      role: 'Took over the report: audit, redesign and a new group summary page',
      period: '2026',
      caption: 'Screenshots of the Power BI report, running on fictional data.',
      context:
        'The report is used twice a year, for the winter and summer sales, and four times per season: on day one, after one week, after two weeks and at the end. It covers five scopes: the retail accounts of the consignment business and the group’s four own banners, each with its summary and store tables.',
      challenge:
        'Each reading meant editing the dates in Power Query, the report date filter, a dozen titles and the commentary sentences, and even retyping percentages placed over the tables by hand. Nothing gave an overview of the five scopes either.',
      built: [
        'A sales calendar: one row per season with its official dates. Every date carries its sales-day rank, this year and last year.',
        'Two selectors synced across every page: the season and the reading (day one, first week, first two weeks, whole period).',
        'Computed titles, compared periods and index sentences, replacing the text typed in at every reading.',
        'A new group summary page: the five scopes side by side, the sales rhythm day by day, each one’s contribution to the gap.',
        'A shared theme, one colour per scope and navigation buttons to each part.',
        'A clean-up: dead pages removed, hard-coded filters dropped, markdown recomputed as a number.'
      ],
      decisions: [
        {
          title: 'Filter by sales-day rank, not by dates',
          text: 'The base measures only keep days 1 to n of the season. Last year is shifted by 364 days: the first Wednesday of the sales is compared with last year’s first Wednesday, and the same rule works for all four readings.'
        },
        {
          title: 'A cumulative rhythm, day by day',
          text: 'The summary curve shows the cumulative like-for-like change since day one. You see whether a scope missed its start and then caught up, which an end-of-period figure hides.'
        },
        {
          title: 'Markdown as a number, not text',
          text: 'Markdown came out of FORMAT(), so as text: no total, no sorting, and percentages retyped by hand over a table. It is now a number with a format string.'
        },
        {
          title: 'Paginate by rank, not by a sales threshold',
          text: 'A store table was split over two pages with a hard-coded sales threshold, wrong as soon as the reading changed. It is now split by store rank.'
        },
        {
          title: 'Hidden, synced selectors',
          text: 'Season and reading are chosen once, on the summary. A hidden copy of each selector on the other pages applies the choice everywhere, without cluttering pages designed for printing.'
        }
      ],
      result:
        'Moving from one reading to the next no longer requires any change to the report: pick the season and the reading, and all sixteen pages follow. Management also gets a page that compares the five scopes at a glance.',
      next: 'Carry the redesign into the production report, add past seasons to the sales calendar to compare several years, and move the list of in-scope accounts into a reference table.'
    }
  },
  {
    slug: 'pipeline-donnees-ventes',
    visual: 'pipeline',
    stack: ['Python', 'Polars', 'Parquet', 'Power BI', 'DAX', 'SAP Analytics Cloud'],
    fr: {
      kind: 'Python et Power BI',
      sector: 'Distribution retail, 2026',
      title: 'Refonte de la chaîne de données des rapports de ventes',
      summary:
        "Une préparation Power Query lente et fragile remplacée par un pipeline Python qui produit un fichier Parquet prêt pour Power BI, à partir des exports SAP Analytics Cloud.",
      role: 'Conception et développement',
      period: '2026',
      caption: 'Schéma de l’architecture mise en place.',
      context:
        "Les rapports de ventes quittaient l'ancien entrepôt SQL Server pour des fichiers CSV produits par SAP Analytics Cloud. L'historique pesait environ 5 Go, et les règles d'affectation des rayons étaient codées dans de longues cascades de conditions en M.",
      challenge:
        'Les fichiers SAP sont cumulatifs : ce sont des mouvements qui s’additionnent, pas des photos. Plusieurs devises coexistent. Et les rapports devaient continuer à tourner pendant la migration.',
      built: [
        'Deux scripts Python et Polars : construction initiale depuis l’historique, puis intégration quotidienne des nouveaux fichiers avec archivage.',
        'Un fichier Parquet unique lu par Power BI, à la place de trois requêtes Power Query.',
        'Les règles de mapping des rayons sorties du code, dans des tables Excel modifiables par le métier.',
        'Les taux de change récupérés par API et les prix de vente par devise, pour les calculs multi-devises.',
        'En parallèle, l’audit d’un modèle sémantique existant : 114 mesures rangées en 8 dossiers, années codées en dur remplacées par du DAX dynamique, 10 mesures cassées détectées.'
      ],
      decisions: [
        {
          title: 'Polars plutôt que Power Query pour préparer',
          text: 'Traitement en colonnes, rapide sur plusieurs gigaoctets, versionnable et testable en dehors de Power BI.'
        },
        {
          title: 'Parquet comme format d’échange',
          text: 'Compressé, typé, lu nativement par Power BI : le rapport ne fait plus que charger des données propres.'
        },
        {
          title: 'Des tables de correspondance plutôt que du code',
          text: 'Quand une enseigne réorganise ses rayons, le métier modifie une ligne de tableau, pas une requête.'
        },
        {
          title: 'Rafraîchissement incrémentiel',
          text: 'Seules les nouvelles périodes sont retraitées chaque jour, l’historique reste figé.'
        }
      ],
      result:
        'La préparation des données vit en dehors de Power BI, dans du code lisible et versionné. Les règles métier sont dans des tables que leurs propriétaires peuvent modifier, et le modèle est rangé et débarrassé de ses mesures cassées.',
      next: 'Planifier l’exécution quotidienne du script et ajouter des contrôles automatiques de cohérence avant chaque chargement.'
    },
    en: {
      kind: 'Python and Power BI',
      sector: 'Retail distribution, 2026',
      title: 'Rebuilding the data pipeline behind sales reports',
      summary:
        'A slow, fragile Power Query preparation replaced by a Python pipeline that turns SAP Analytics Cloud exports into a Parquet file ready for Power BI.',
      role: 'Design and build',
      period: '2026',
      caption: 'Diagram of the architecture put in place.',
      context:
        'Sales reports were moving off the old SQL Server warehouse onto CSV files produced by SAP Analytics Cloud. History weighed about 5 GB, and department mapping rules were buried in long chains of conditions in M.',
      challenge:
        'SAP files are cumulative: additive movements, not snapshots. Several currencies coexist. And reports had to keep running during the migration.',
      built: [
        'Two Python and Polars scripts: an initial build from history, then daily integration of new files with archiving.',
        'A single Parquet file read by Power BI, replacing three Power Query queries.',
        'Department mapping rules moved out of code into Excel tables the business can edit.',
        'Exchange rates fetched by API and retail prices per currency for multi-currency calculations.',
        'In parallel, an audit of an existing semantic model: 114 measures sorted into 8 folders, hard-coded years replaced with dynamic DAX, 10 broken measures found.'
      ],
      decisions: [
        { title: 'Polars instead of Power Query for preparation', text: 'Columnar processing, fast on several gigabytes, versioned and testable outside Power BI.' },
        { title: 'Parquet as the hand-off format', text: 'Compressed, typed, read natively by Power BI: the report only loads clean data.' },
        { title: 'Mapping tables instead of code', text: 'When a retailer reorganises its departments, the business edits a table row, not a query.' },
        { title: 'Incremental refresh', text: 'Only new periods are reprocessed each day; history stays frozen.' }
      ],
      result:
        'Data preparation now lives outside Power BI, in readable, versioned code. Business rules sit in tables their owners can edit, and the model is organised and free of broken measures.',
      next: 'Schedule the daily run and add automatic consistency checks before each load.'
    }
  },

  {
    slug: 'test-mobilier-magasin',
    visual: 'test',
    stack: ['Excel', 'SAP Analytics Cloud', 'Analyse test-contrôle'],
    fr: {
      kind: 'Analyse',
      sector: 'Mode et accessoires, 2026',
      title: "Mesurer l'effet d'un nouveau présentoir en magasin",
      summary:
        'Une analyse test-contrôle : 20 magasins équipés d’un présentoir bijoux supplémentaire, comparés aux magasins restés en configuration standard, avec la part de ventes réellement additionnelle.',
      role: 'Analyse complète et restitution pour le rendez-vous client',
      period: 'Septembre 2026',
      caption: 'Chiffres fictifs. Les résultats réels appartiennent à l’enseigne cliente.',
      context:
        "Une enseigne de mode cliente installe un troisième présentoir bijoux dans 20 magasins pilotes. Avant de généraliser, elle veut savoir si les ventes augmentent vraiment ou si elles se déplacent simplement d'un présentoir à l'autre.",
      challenge:
        "Les magasins pilotes ne sont pas tirés au hasard, certains n'ont pas d'historique l'an dernier, et la liste a changé juste avant le test. Une mesure trop courte expose aussi à l'effet nouveauté.",
      built: [
        'Un fichier Excel entièrement piloté par formules, alimenté par le cube de ventes via l’add-in SAP Analytics Cloud.',
        'Des listes de magasins test et contrôle modifiables : tout le fichier se recalcule seul.',
        'Les indices face à N-1 par groupe, par magasin et par présentoir, avec les thèmes produits rattachés à chaque présentoir.',
        'Une estimation de la cannibalisation et de la part réellement additionnelle.',
        'Une synthèse d’une page, prête à imprimer pour le rendez-vous.'
      ],
      decisions: [
        { title: 'Comparer des évolutions, pas des niveaux', text: "Les magasins pilotes ne partent pas du même chiffre que les autres : on compare leur progression face à l'an dernier." },
        { title: 'Écarter les magasins sans historique des indices', text: 'Un magasin récent reste dans les totaux en valeur, mais ne fausse pas les comparaisons.' },
        { title: 'Suivre chaque présentoir séparément', text: 'C’est le seul moyen de voir si le chiffre du nouveau présentoir est pris aux deux autres.' },
        { title: 'Recommander plusieurs semaines de recul', text: 'Une seule semaine ne sépare pas l’effet durable de la curiosité des premiers jours.' }
      ],
      result:
        'Les magasins équipés progressent nettement plus vite que le groupe de contrôle, et la majorité du chiffre du nouveau présentoir est additionnelle. L’enseigne dispose d’une base chiffrée pour décider, avec une réserve claire sur la durée de mesure.',
      next: 'Le même modèle sert déjà aux autres demandes de test magasin. L’étape suivante est de le brancher sur les semaines suivantes pour confirmer la tendance.'
    },
    en: {
      kind: 'Analysis',
      sector: 'Fashion and accessories, 2026',
      title: 'Measuring the effect of a new in-store display',
      summary:
        'A test and control analysis: 20 stores fitted with an extra jewellery display, compared with stores in the standard layout, including the share of sales that is truly incremental.',
      role: 'Full analysis and presentation for the client meeting',
      period: 'September 2026',
      caption: 'Fictional figures. Real results belong to the client.',
      context:
        'A fashion retailer installs a third jewellery display in 20 pilot stores. Before rolling it out, it wants to know whether sales really grow or simply move from one display to another.',
      challenge:
        'Pilot stores are not random, some have no history last year, and the list changed just before the test. A short measurement also risks a novelty effect.',
      built: [
        'A fully formula-driven Excel workbook fed by the sales cube through the SAP Analytics Cloud add-in.',
        'Editable test and control store lists: the whole workbook recalculates.',
        'Indices against last year by group, store and display, with the product themes attached to each display.',
        'An estimate of cannibalisation and of the truly incremental share.',
        'A one-page print-ready summary for the meeting.'
      ],
      decisions: [
        { title: 'Compare growth, not levels', text: 'Pilot stores do not start from the same sales as the others, so we compare their growth against last year.' },
        { title: 'Keep stores without history out of the indices', text: 'A recent store stays in value totals but does not skew comparisons.' },
        { title: 'Track each display separately', text: 'The only way to see whether the new display takes sales from the other two.' },
        { title: 'Recommend several weeks of hindsight', text: 'One week cannot separate a lasting effect from first-days curiosity.' }
      ],
      result:
        'Fitted stores grow clearly faster than the control group, and most of the new display’s sales are incremental. The retailer has figures to decide on, with a clear caveat on the measurement period.',
      next: 'The same model already serves other in-store test requests. Next is extending it to the following weeks to confirm the trend.'
    }
  },

  {
    slug: 'assistant-ia-donnees-ventes',
    visual: 'mcp',
    stack: ['Python', 'MCP', 'SAP HANA', 'LLM'],
    fr: {
      kind: 'IA appliquée',
      sector: 'Distribution retail, 2026',
      title: 'Un assistant IA branché sur les données de vente',
      summary:
        "Un prototype de serveur MCP qui permet à un assistant IA d'interroger directement la base SAP HANA : ventes, stock, réassort urgent, meilleures ventes.",
      role: 'Prototype et dossier de présentation pour la direction',
      period: 'Été 2026',
      caption: 'Exemple d’échange reconstitué, données fictives.',
      context:
        "La direction voulait évaluer ce que l'IA générative pouvait apporter aux équipes commerciales, sur des questions concrètes posées aux vraies données plutôt que sur une démonstration générique.",
      challenge:
        'Ne pas donner à un modèle un accès libre à la base, garder les coûts sous contrôle, et pouvoir expliquer l’architecture à une direction non technique.',
      built: [
        'Un serveur MCP en Python connecté à SAP HANA, avec cinq outils : ventes, stock, réassort urgent, meilleures ventes et requête encadrée.',
        'Un dossier de présentation pour la direction : architecture (RAG, base vectorielle, agents), coûts et choix des modèles.'
      ],
      decisions: [
        { title: 'Des outils métier plutôt qu’un accès SQL libre', text: 'Le modèle appelle « réassort urgent » avec des paramètres, il n’écrit pas n’importe quelle requête sur la base.' },
        { title: 'Deux niveaux de modèle', text: 'Un modèle léger pour les tâches répétitives, un plus puissant pour le dialogue et les rapports : le coût suit l’usage.' },
        { title: 'Le protocole MCP', text: 'D’autres sources pourront être branchées plus tard sans réécrire l’assistant.' }
      ],
      result:
        'Une démonstration sur données réelles et un chiffrage qui servent de base aux échanges entre la direction et l’équipe informatique.',
      next: 'Définir avec l’informatique les droits d’accès et un premier cas d’usage à ouvrir aux équipes.'
    },
    en: {
      kind: 'Applied AI',
      sector: 'Retail distribution, 2026',
      title: 'An AI assistant connected to sales data',
      summary:
        'A prototype MCP server that lets an AI assistant query the SAP HANA database directly: sales, stock, urgent restocking, best sellers.',
      role: 'Prototype and leadership presentation',
      period: 'Summer 2026',
      caption: 'Recreated exchange, fictional data.',
      context:
        'Leadership wanted to assess what generative AI could bring to sales teams, on real questions asked of real data rather than a generic demo.',
      challenge:
        'No free access to the database for a model, costs under control, and an architecture a non-technical leadership team can follow.',
      built: [
        'A Python MCP server connected to SAP HANA with five tools: sales, stock, urgent restocking, best sellers and a guarded query.',
        'A leadership presentation: architecture (RAG, vector database, agents), costs and model choices.'
      ],
      decisions: [
        { title: 'Business tools instead of open SQL', text: 'The model calls “urgent restocking” with parameters; it does not write arbitrary queries against the database.' },
        { title: 'Two model tiers', text: 'A light model for repetitive tasks, a stronger one for dialogue and reports: cost follows usage.' },
        { title: 'The MCP protocol', text: 'Other sources can be plugged in later without rewriting the assistant.' }
      ],
      result: 'A demo on real data and a cost estimate that frame discussions between leadership and IT.',
      next: 'Agree access rights with IT and a first use case to open to the teams.'
    }
  },

  {
    slug: 'analyse-messages-service-client',
    visual: 'llm',
    stack: ['Python', 'LangChain', 'ChromaDB', 'Mistral AI', 'Streamlit'],
    link: '',
    fr: {
      kind: 'NLP et LLM',
      sector: "Projet de fin d'études HETIC, 2025",
      title: 'Analyse automatique des messages du service client',
      summary:
        'Chaque message client est classé par sentiment, urgence et gravité dès son arrivée, et un chatbot retrouve les réponses utiles dans une base vectorielle.',
      role: "Développement en équipe, méthode Scrum",
      period: 'Juillet à novembre 2025',
      caption: "Messages d'exemple rédigés pour l'illustration.",
      context:
        "Projet de fin d'études : automatiser la lecture des tweets adressés à un service client et faire remonter les plus urgents.",
      challenge:
        'Produire trois étiquettes fiables par message, sans exploser le budget d’appels au modèle, et rendre le résultat utilisable par une équipe support.',
      built: [
        'Une classification sentiment, urgence et gravité par LLM, via Mistral AI et Ollama.',
        'Une recherche contextuelle RAG avec embeddings BERT et ChromaDB.',
        'Un chatbot de support (LangChain, Llama 3.3) et trois interfaces Streamlit : tableaux de bord, indicateurs en temps réel, chatbot.',
        'Un cache SQLite devant les appels au modèle.'
      ],
      decisions: [
        { title: 'Un cache devant le modèle', text: 'Un même message n’est jamais analysé deux fois : c’est ce qui fait baisser la facture de 70 %.' },
        { title: 'Une base vectorielle locale', text: 'ChromaDB tourne avec l’application, sans service externe à administrer.' },
        { title: 'Trois interfaces séparées', text: 'Le pilotage, le suivi en temps réel et le chatbot ne servent pas les mêmes personnes.' }
      ],
      result: '−70 % de coûts d’API grâce au cache, et des messages classés par urgence et gravité dès leur arrivée.',
      next: ''
    },
    en: {
      kind: 'NLP and LLM',
      sector: 'HETIC final project, 2025',
      title: 'Automatic analysis of customer service messages',
      summary:
        'Each customer message is tagged by sentiment, urgency and severity on arrival, and a chatbot retrieves useful answers from a vector database.',
      role: 'Team development, Scrum',
      period: 'July to November 2025',
      caption: 'Sample messages written for illustration.',
      context: 'Master’s final project: automate the reading of tweets sent to a customer service team and surface the most urgent ones.',
      challenge: 'Three reliable labels per message, without blowing the model budget, in a form a support team can use.',
      built: [
        'LLM classification of sentiment, urgency and severity with Mistral AI and Ollama.',
        'RAG search with BERT embeddings and ChromaDB.',
        'A support chatbot (LangChain, Llama 3.3) and three Streamlit interfaces: dashboards, real-time KPIs, chatbot.',
        'A SQLite cache in front of model calls.'
      ],
      decisions: [
        { title: 'A cache in front of the model', text: 'The same message is never analysed twice: that is what cuts the bill by 70%.' },
        { title: 'A local vector database', text: 'ChromaDB runs with the app, no external service to manage.' },
        { title: 'Three separate interfaces', text: 'Monitoring, real-time tracking and the chatbot serve different people.' }
      ],
      result: '−70% API costs thanks to caching, and messages ranked by urgency and severity on arrival.',
      next: ''
    }
  },

  {
    slug: 'affectation-agents-sncf',
    visual: 'sncf',
    stack: ['Power Apps', 'Dataverse', 'Power Automate', 'SharePoint'],
    fr: {
      kind: 'Power Apps et Power Automate',
      sector: 'SNCF, 2024–2025',
      title: 'Affectation des agents en gare, sans papier',
      summary:
        'Deux applications en production : l’affectation des agents sur tablette et la déclaration des astreintes avec validation RH, appuyées sur 7 flux automatisés.',
      role: 'Conception et développement, en alternance',
      period: 'Septembre 2024 à décembre 2025',
      caption: 'Écrans des applications en production.',
      context:
        "À la SNCF, l'affectation des agents en gare et la déclaration des astreintes reposaient sur des processus papier.",
      challenge:
        'Des managers sur le terrain, sur tablette, parfois sans réseau en sous-sol ou sur les quais, et une validation RH à plusieurs niveaux avec gestion des refus.',
      built: [
        'Une application tablette d’affectation, sur un modèle Dataverse à plusieurs entités : agents, gares, secteurs.',
        'Une application de déclaration d’astreintes avec validation RH multi-niveaux.',
        '7 flux Power Automate : approbations, refus, e-mails avec lien direct vers le bon écran.',
        'Un mode hors ligne : données en local et synchronisation au retour du réseau.',
        'Un bot quotidien qui prévient les gestionnaires des contrats à temps partiel à renouveler.'
      ],
      decisions: [
        { title: 'Dataverse plutôt que des listes SharePoint', text: 'Des relations entre agents, gares et secteurs, et une sécurité par rôle.' },
        { title: 'Le hors ligne dès la conception', text: 'Les agents travaillent là où le réseau ne passe pas : l’application devait fonctionner sans.' },
        { title: 'Des solutions gérées', text: 'Un passage propre de l’environnement de test à la production.' }
      ],
      result: 'Fin des impressions papier et −40 % de temps de reporting manuel. Deux applications en production.',
      next: ''
    },
    en: {
      kind: 'Power Apps and Power Automate',
      sector: 'SNCF, 2024–2025',
      title: 'Paperless staff dispatch in train stations',
      summary:
        'Two apps in production: tablet staff dispatch and on-call declarations with HR approval, backed by 7 automated flows.',
      role: 'Design and build, work-study',
      period: 'September 2024 to December 2025',
      caption: 'Screens from the production apps.',
      context: 'At SNCF, assigning station staff and declaring on-call duty relied on paper processes.',
      challenge: 'Field managers on tablets, sometimes without network underground or on platforms, and multi-level HR approval with rejections.',
      built: [
        'A tablet dispatch app on a multi-entity Dataverse model: staff, stations, sectors.',
        'An on-call declaration app with multi-level HR approval.',
        '7 Power Automate flows: approvals, rejections, emails with deep links to the right screen.',
        'Offline mode: local data and sync when the network returns.',
        'A daily bot that alerts HR about part-time contracts due for renewal.'
      ],
      decisions: [
        { title: 'Dataverse instead of SharePoint lists', text: 'Relationships between staff, stations and sectors, and role-based security.' },
        { title: 'Offline from day one', text: 'Staff work where there is no signal: the app had to work without it.' },
        { title: 'Managed solutions', text: 'A clean path from test to production.' }
      ],
      result: 'No more printed sheets and −40% manual reporting time. Two apps in production.',
      next: ''
    }
  }
];

export const caseBySlug = Object.fromEntries(cases.map((c) => [c.slug, c]));
