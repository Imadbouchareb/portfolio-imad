/* Études de cas. Ordre = ordre d'affichage.
   `visual` renvoie au composant de visuels.jsx. `link` : lien GitHub ou démo optionnel. */

export const cases = [
  {
    slug: 'trame-rendez-vous-clients',
    group: 'rand',
    visual: 'shots',
    stack: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'SAP HANA', 'Excel', 'PowerPoint'],
    download: {
      href: '/dossiers/dossier-rdv-client-a.pdf',
      fr: { title: 'Exemple', label: 'Un dossier de rendez-vous complet (PDF, données fictives)' },
      en: { title: 'Sample', label: 'A full meeting pack (PDF, fictional data)' }
    },
    shots: [
      { src: '/images/dossiers-rdv/2-resultats-mensuels.webp', fr: 'La page qui ouvre chaque dossier : VA et magasins face à N-1, au global et à périmètre comparable, mois par mois.', en: 'The page that opens every pack: sales and stores against last year, total and like-for-like, month by month.' },
      { src: '/images/dossiers-rdv/1-evolution-annuelle.webp', fr: 'Cinq ans d’historique, avec les évolutions annotées dans PowerPoint comme dans les vrais dossiers.', en: 'Five years of history, with year-on-year changes annotated in PowerPoint as in the real packs.' },
      { src: '/images/dossiers-rdv/3-resultats-rayons.webp', fr: 'Mix et ventes par rayon, indices comparables par saison.', en: 'Mix and sales by department, like-for-like indices by season.' },
      { src: '/images/dossiers-rdv/4-palmares-magasins.webp', fr: 'Les 20 meilleurs et les 20 moins bons magasins, hors ouvertures et fermetures.', en: 'Top and bottom 20 stores, excluding openings and closures.' },
      { src: '/images/dossiers-rdv/5-collection-bijoux.webp', fr: 'Analyse de collection : poids de chaque famille dans les références, les ventes et les quantités, prix construit face au prix sorti caisse.', en: 'Collection review: each family’s weight in references, sales and units, planned price against actual selling price.' },
      { src: '/images/dossiers-rdv/8-dossier-usa.webp', fr: 'Le même dossier en anglais et en dollars pour un client américain.', en: 'The same pack in English and in dollars for a US account.' },
      { src: '/images/dossiers-rdv/6-rendement-m2.webp', fr: 'Analyse sur mesure : la VA au m² de chaque rayon, comparée aux autres clients. Le rayon enfant prend 22 % de la surface pour 14 % du CA.', en: 'Custom analysis: sales per m² for each department, compared with other accounts. Kids takes 22% of the space for 14% of sales.' },
      { src: '/images/dossiers-rdv/7-test-tour-bijoux.webp', fr: 'Analyse sur mesure : une tour bijoux ajoutée dans 20 magasins, mesurée face à 40 magasins témoins. +17 points d’écart, +35 € par magasin et par semaine.', en: 'Custom analysis: an extra jewellery stand in 20 stores, measured against 40 control stores. A 17-point gap, +€35 per store per week.' }
    ],
    fr: {
      kind: 'Power BI',
      sector: 'Distribution retail, 2026',
      title: 'Les dossiers de rendez-vous clients, de la trame aux analyses sur mesure',
      summary:
        'Deux à sept rendez-vous avec des enseignes clientes chaque semaine. Pour chacun, un dossier PowerPoint tiré d’une trame Power BI (résultats, rayons, palmarès magasins, collection), complété par les analyses que le client attend : rendement au m², test d’une nouvelle tour bijoux, opération commerciale.',
      role: 'Préparation des dossiers en binôme, refonte de la trame, analyses sur mesure',
      period: '2026',
      pagesTitle: 'Les autres pages du dossier',
      caption: 'Pages au format des dossiers envoyés aux clients, refaites avec des données fictives (clients, magasins et montants inventés).',
      context:
        "Le groupe gère les rayons bijoux, accessoires, enfant ou lunettes dans les magasins de plusieurs dizaines d'enseignes clientes, en France, en Europe et en Amérique du Nord. Avant chaque rendez-vous commercial, on prépare un dossier pour la direction et pour le client. Il y en a deux à sept par semaine. Le socle sort d'une trame Power BI, une par année : la trame 2026 pour 2026 face à 2025, la trame 2025 pour 2025 face à 2024. On l'exporte en PowerPoint, puis on l'annote. Les clients américains reçoivent le même dossier en anglais et en dollars.",
      challenge:
        "Deux attentes à tenir en même temps. D'abord un dossier standard juste, vite : à ce rythme, une période mal recopiée dans un titre ou un magasin oublié dans le palmarès finit par partir chez le client. Ensuite la question que le client apporte : est-ce que ma surface est bien utilisée, est-ce que la nouvelle tour bijoux a marché, que donne l'opération du mois dernier. Il faut y répondre en quelques jours, avec une méthode qu'on peut défendre en réunion.",
      built: [
        'Le dossier standard : historique sur cinq ans, résultats mensuels, rayons, palmarès Fast/Slow 20 et analyse de collection, en français ou en anglais.',
        'Une refonte de la trame : titres calculés à partir des filtres, recodage des magasins repris depuis le référentiel, palmarès hors ouvertures calculé et non plus tenu à la main, cas propres à un seul client sortis du modèle commun.',
        'Le rendement au m² par rayon : la VA rapportée aux surfaces relevées en magasin, comparée aux autres clients rayon par rayon, avec la part de surface face à la part de CA.',
        'Les tests d’implantation : une nouvelle tour bijoux posée dans une vague de magasins, mesurée face à des magasins témoins du même client.',
        'Les autres analyses à la demande : opération promotionnelle, lancement d’un rayon, tranches de prix, activité web d’un client.',
        'Des annotations ajoutées dans PowerPoint (évolutions, commentaires) pour que le dossier se lise sans présentateur.'
      ],
      decisions: [
        {
          title: 'Comparer le m² rayon par rayon, jamais au total',
          text: "Au total, le client de l'exemple a la VA au m² la plus basse du portefeuille. Ce chiffre mélange des clients qui n'ont pas les mêmes rayons. Rayon par rayon, son bijou rapporte autant que chez les autres. Le vrai sujet est l'enfant : 22 % de la surface pour 14 % du CA. C'est ce qu'on propose de retravailler, sur une vague de magasins test."
        },
        {
          title: 'Un test se lit face à des témoins',
          text: "Comparer les magasins test à l'an dernier mélange l'effet de la tour, la saison et la tendance du client. On suit donc 40 magasins témoins du même client, sans changement d'implantation, et on compare l'évolution des deux groupes avant et après la pose. L'écart de 17 points est l'effet de la tour. On vérifie aussi qu'il ne vient pas de deux ou trois magasins : 19 sur 20 progressent."
        },
        {
          title: 'Traduire le résultat en euros par magasin',
          text: "Un écart d'indice ne parle pas à un acheteur. Le résultat est aussi donné en VA gagnée par magasin et par semaine, le chiffre qui sert à décider d'étendre la tour à d'autres magasins."
        },
        {
          title: 'Un titre qui ne peut plus mentir',
          text: "Dans la trame, la période des titres se tapait à la main : une page filtrée de janvier à septembre affichait encore « de Janvier à Mai ». Client, pays, rayons, années et période se lisent maintenant dans les filtres, en français comme en anglais."
        },
        {
          title: 'Une trame commune, les cas particuliers à part',
          text: "Plus d'un tiers des colonnes calculées ne servaient qu'à un client : classements, taux de change, regroupements de rayons. Ils restent dans le dossier de ce client. La trame ne garde que ce qui sert à tous les rendez-vous, et reste lisible pour la personne qui prépare le dossier suivant."
        }
      ],
      result:
        'Un dossier standard se prépare en choisissant le client et la période, sans retoucher de titre ni de liste. Les questions des clients reçoivent une réponse chiffrée, avec une méthode (témoins, m² rayon par rayon) qu’on peut expliquer en réunion, et une recommandation concrète à la fin.',
      next: 'Fusionner les trames annuelles en une seule avec une année de référence au choix, tenir les surfaces des magasins dans un référentiel mis à jour à chaque relevé, et industrialiser le choix des magasins témoins pour les prochains tests.'
    },
    en: {
      kind: 'Power BI',
      sector: 'Retail distribution, 2026',
      title: 'Client meeting packs, from the template to custom analyses',
      summary:
        'Two to seven meetings with retail accounts every week. For each one, a PowerPoint pack built from a Power BI template (results, departments, store rankings, collection), plus the analyses the account expects: sales per m², a test of a new jewellery stand, a promotion review.',
      role: 'Pack preparation as a pair, template rework, custom analyses',
      period: '2026',
      pagesTitle: 'The other pages of the pack',
      caption: 'Pages in the format of the packs sent to clients, rebuilt with fictional data (accounts, stores and amounts are made up).',
      context:
        'The group runs jewellery, accessories, kids or eyewear departments inside the stores of several dozen retail accounts, in France, Europe and North America. Before each sales meeting, a pack is prepared for management and for the account. There are two to seven a week. The core comes from a Power BI template, one per year: the 2026 template for 2026 against 2025, the 2025 template for 2025 against 2024. It is exported to PowerPoint and then annotated. US accounts get the same pack in English and in dollars.',
      challenge:
        'Two expectations at once. First, a standard pack that is right and fast: at this pace, a period miscopied in a title or a store forgotten in the ranking eventually reaches the client. Second, the question the account brings: is my space well used, did the new jewellery stand work, how did last month’s promotion do. It has to be answered within days, with a method that holds up in the meeting.',
      built: [
        'The standard pack: five-year history, monthly results, departments, top and bottom 20 stores and collection review, in French or English.',
        'A template rework: titles computed from the filters, store recoding taken from the store reference table, the ranking excluding openings computed instead of hand-kept, single-account cases moved out of the shared model.',
        'Sales per m² by department: sales divided by the space measured in store, compared with other accounts department by department, with share of space against share of sales.',
        'Layout tests: a new jewellery stand installed in a wave of stores, measured against control stores from the same account.',
        'Other analyses on request: promotions, department launches, price bands, an account’s online sales.',
        'Annotations added in PowerPoint (changes, comments) so the pack reads without a presenter.'
      ],
      decisions: [
        {
          title: 'Compare per m² by department, never in total',
          text: 'In total, the sample account has the lowest sales per m² in the portfolio. That figure mixes accounts that do not carry the same departments. Department by department, its jewellery sells as much as elsewhere. The real issue is kids: 22% of the space for 14% of sales. That is what we propose to rework, on a wave of test stores.'
        },
        {
          title: 'A test is read against controls',
          text: 'Comparing test stores with last year mixes the effect of the stand, the season and the account’s trend. So we follow 40 control stores from the same account with no layout change, and compare how both groups move before and after installation. The 17-point gap is the effect of the stand. We also check it does not come from two or three stores: 19 out of 20 improve.'
        },
        {
          title: 'Turn the result into euros per store',
          text: 'An index gap means little to a buyer. The result is also given as sales gained per store per week, the figure used to decide whether to roll the stand out to more stores.'
        },
        {
          title: 'A title that can no longer lie',
          text: 'In the template, the period in the titles was typed by hand: a page filtered from January to September still read “January to May”. Account, countries, departments, years and period are now read from the filters, in French and English.'
        },
        {
          title: 'A shared template, special cases kept apart',
          text: 'Over a third of the calculated columns only served one account: rankings, exchange rates, department groupings. They stay in that account’s pack. The template only keeps what every meeting uses, and stays readable for whoever prepares the next pack.'
        }
      ],
      result:
        'A standard pack is prepared by picking the account and the period, without retyping titles or lists. Client questions get a quantified answer, with a method (control stores, per-m² by department) that can be explained in the meeting, and a concrete recommendation at the end.',
      next: 'Merge the yearly templates into one with a selectable reference year, keep store space in a reference table updated at each survey, and automate the choice of control stores for the next tests.'
    }
  },
  {
    slug: 'alertes-ventes-comparables',
    group: 'rand',
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
    slug: 'couverture-conduite-sncf',
    group: 'sncf',
    visual: 'shots',
    stack: ['Power BI', 'DAX', 'Power Query', 'SharePoint'],
    shots: [
      { src: '/images/couverture-conduite/0-ecran-origine.webp', fr: 'L’écran d’origine, celui que le pôle ouvrait chaque matin : une ligne par jour, les JS au tas, les ressources et les absences en colonnes, les week-ends repérés. Gardé comme page d’accueil, rebranché sur le modèle refondu.', en: 'The original screen the team opened every morning: one row per day, uncovered duties, resources and absences in columns, weekends flagged. Kept as the landing page, rewired to the rebuilt model.' },
      { src: '/images/couverture-conduite/1-synthese.webp', fr: 'La synthèse du matin : les JS au tas des huit prochains jours par ligne, la marge de couverture et le statut de chaque jour.', en: 'The morning summary: uncovered duties for the next eight days by line, the coverage margin and each day’s status.' },
      { src: '/images/couverture-conduite/2-jour-par-jour.webp', fr: 'La vue de travail du pôle : une ligne par jour, toutes les mesures, le statut en couleur.', en: 'The team’s working view: one row per day, every measure, status in colour.' },
      { src: '/images/couverture-conduite/3-js-au-tas.webp', fr: 'Un jour de grève : les JS au tas une par une, les trains qu’elles portent, par branche et par heure de prise de service.', en: 'A strike day: uncovered duties one by one, the trains they carry, by branch and by start time.' },
      { src: '/images/couverture-conduite/4-absences.webp', fr: 'Les absences non planifiables par motif et par dépôt, face aux JS au tas.', en: 'Unplanned absences by reason and depot, against uncovered duties.' }
    ],
    fr: {
      kind: 'Power BI',
      sector: 'SNCF, 2025',
      title: 'Couverture de la conduite : les trains sans conducteur, chaque matin',
      summary:
        'Le rapport que le pôle Production Traction de l’établissement Transilien L, A et J ouvrait chaque matin : combien de journées de service restent sans conducteur, sur quelle ligne, quels trains elles portent, et si les conducteurs disponibles suffisent pour les couvrir.',
      role: 'Conception du rapport en alternance, puis audit et refonte pour le portfolio',
      period: '2025',
      caption: 'Captures du rapport refondu, alimenté par des données entièrement fictives.',
      context:
        "Chaque jour de service d'un conducteur (une JS) porte une suite de trains. Une JS sans conducteur affecté, « au tas », c'est autant de trains menacés de suppression. Deux fois par jour, le planning de conduite est extrait et déposé sur SharePoint ; le pôle Production Traction s'en sert pour décider, chaque matin, quelles JS couvrir en priorité et avec quels conducteurs.",
      challenge:
        "Le rapport d'origine tenait en un grand tableau de 24 colonnes et 128 mesures, dont beaucoup en double. Le dossier lu était écrit en dur pour un mois donné, des mesures d'historique pointaient vers une table qui n'existait plus, et les JS étaient comptées par code sur la période, donc sous-comptées dans les totaux dès qu'on regardait plusieurs jours. Surtout, il disait combien de JS restaient au tas, pas si on pouvait les couvrir.",
      built: [
        'Un modèle propre : 37 mesures documentées et rangées par thème (charge, ressources, absences, pilotage) à la place des 128 d’origine.',
        'Des règles métier écrites une seule fois, en colonnes calculées : JS non couverte, réserve non couverte, motif d’absence, ligne commerciale, type de train.',
        'Une marge de couverture (conducteurs disponibles moins JS au tas) et un statut par jour : couvert, sous tension, découvert.',
        'Un horizon de planification recalculé à chaque extraction : J à J+7, J+8 à J+14, J+15 à J+28, au-delà.',
        'L’écran d’origine gardé en page d’accueil, rebranché sur le nouveau modèle, et cinq pages ajoutées : la synthèse du matin, la vue jour par jour, le détail des JS au tas avec leurs trains, les absences, et une page de définitions.'
      ],
      decisions: [
        {
          title: 'Une marge, pas seulement un stock',
          text: "Vingt JS au tas avec trente conducteurs disponibles, ce n'est pas le même matin que vingt JS au tas avec dix. La marge et le statut du jour disent tout de suite où il faudra supprimer des trains si rien ne change."
        },
        {
          title: 'Compter les JS jour par jour',
          text: "Un même code de JS revient chaque jour. Un comptage distinct sur la période en perdait la plupart dès qu'on sélectionnait une semaine. Les mesures comptent maintenant jour par jour, puis additionnent."
        },
        {
          title: 'Relier les JS aux trains',
          text: "Chaque JS au tas est reliée aux trains qu'elle porte, en séparant les trains commerciaux des trains sans voyageurs. Le pôle voit l'impact pour les voyageurs, pas seulement un nombre de JS."
        },
        {
          title: 'Lire selon l’horizon',
          text: "Une JS au tas à J+20 est normale, à J+1 c'est une alerte. L'horizon, recalculé par rapport à la date d'extraction, sépare ce qui est urgent de ce que le planning comblera de lui-même."
        }
      ],
      result:
        "Chaque matin, une page répond aux trois questions du pôle : combien de JS restent à couvrir, sur quelle ligne et quels trains elles portent, et si les conducteurs disponibles suffisent. Les jours découverts sont repérés une semaine à l'avance, avec les JS et les trains concernés.",
      next: "Lire automatiquement le dossier du mois en cours plutôt qu'un chemin écrit en dur, et reconstruire l'historique quotidien des JS au tas pour suivre la tendance d'un mois sur l'autre."
    },
    en: {
      kind: 'Power BI',
      sector: 'SNCF, 2025',
      title: 'Driver coverage: trains without a driver, every morning',
      summary:
        'The report the train-driving production team of the Transilien L, A and J network opened every morning: how many duties still have no driver, on which line, which trains they carry, and whether the available drivers are enough to cover them.',
      role: 'Built the report during my work-study, then audited and rebuilt it for this portfolio',
      period: '2025',
      caption: 'Screens of the rebuilt report, fed with entirely fictitious data.',
      context:
        'Each driver duty carries a sequence of trains. A duty with no driver assigned puts all those trains at risk of cancellation. Twice a day the driving schedule is extracted to SharePoint; the production team uses it every morning to decide which duties to cover first, and with whom.',
      challenge:
        'The original report was one 24-column table and 128 measures, many of them duplicates. The source folder was hard-coded to one month, history measures pointed to a table that no longer existed, and duties were counted by code over the period, so totals were undercounted as soon as several days were selected. Above all, it said how many duties were uncovered, not whether they could be covered.',
      built: [
        'A clean model: 37 documented measures grouped by theme (workload, resources, absences, steering) instead of the original 128.',
        'Business rules written once, as calculated columns: uncovered duty, uncovered standby, absence reason, line, train type.',
        'A coverage margin (available drivers minus uncovered duties) and a daily status: covered, under pressure, short.',
        'A planning horizon recalculated at each extraction: D to D+7, D+8 to D+14, D+15 to D+28, beyond.',
        'The original screen kept as the landing page, rewired to the new model, plus five new pages: the morning summary, the day-by-day view, uncovered duties with their trains, absences, and a definitions page.'
      ],
      decisions: [
        { title: 'A margin, not just a backlog', text: 'Twenty uncovered duties with thirty available drivers is not the same morning as twenty with ten. The margin and the daily status show at once where trains will be cancelled if nothing changes.' },
        { title: 'Count duties day by day', text: 'The same duty code comes back every day. A distinct count over the period lost most of them as soon as a week was selected. Measures now count day by day, then add up.' },
        { title: 'Link duties to trains', text: 'Each uncovered duty is linked to the trains it carries, separating passenger trains from empty runs. The team sees the impact on passengers, not just a number of duties.' },
        { title: 'Read by horizon', text: 'An uncovered duty at D+20 is normal; at D+1 it is an alert. The horizon, recalculated from the extraction date, separates what is urgent from what the schedule will fill on its own.' }
      ],
      result:
        'Every morning, one page answers the team’s three questions: how many duties are left to cover, on which line and with which trains, and whether the available drivers are enough. Short days are spotted a week ahead, with the duties and trains involved.',
      next: 'Read the current month’s folder automatically instead of a hard-coded path, and rebuild the daily history of uncovered duties to track the trend month after month.'
    }
  },
  {
    slug: 'bilan-performance-enseigne',
    group: 'rand',
    visual: 'shots',
    stack: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'Excel', 'PowerPoint'],
    download: {
      href: '/dossiers/bilan-enseigne-a.pdf',
      fr: { title: 'Exemple', label: 'Le dossier complet (PDF, données fictives)' },
      en: { title: 'Sample', label: 'The full pack (PDF, fictional data)' }
    },
    shots: [
      { src: '/images/bilan-enseigne/1-synthese.webp', fr: 'Synthèse : magasins, VA, marge nette, démarque et écart au budget, sur l’année (P1) et sur les mois d’opération (P2).', en: 'Summary: stores, sales, net margin, markdown and gap to budget, for the year (P1) and the promotion months (P2).' },
      { src: '/images/bilan-enseigne/2-courbe-mensuelle.webp', fr: 'VA comparable mois par mois face à 2025, les mois de l’opération en jaune.', en: 'Like-for-like sales month by month against 2025, promotion months in yellow.' },
      { src: '/images/bilan-enseigne/3-constats-leviers.webp', fr: 'Constats et leviers pour la direction, avec le levier principal chiffré en deux hypothèses.', en: 'Findings and levers for leadership, with the main lever costed under two assumptions.' },
      { src: '/images/bilan-enseigne/4-rayons-mois.webp', fr: 'Évolution face à N-1 par rayon et par mois : l’Acier et le Piercing portent la croissance.', en: 'Change against last year by department and month: Steel and Piercing drive growth.' },
      { src: '/images/bilan-enseigne/5-tranches-prix.webp', fr: 'Ventes par tranche de prix du rayon Bijoux, affiliés et succursales : en période d’opération, les petits prix portent la remise.', en: 'Jewellery sales by price band, affiliates and company-owned stores: during the promotion, low prices carry the discount.' },
      { src: '/images/bilan-enseigne/6-affilies-succursales.webp', fr: 'KPI des affiliés face aux succursales, et poids des tickets par type : OP+, OP simple, hors opération.', en: 'Affiliates against company-owned stores, and ticket share by type: OP+, simple OP, outside the promotion.' },
      { src: '/images/bilan-enseigne/7-mix-rayons-tickets.webp', fr: 'Mix des rayons et des types de ticket, en VA et en quantités. Des barres empilées remplacent les seize camemberts d’origine.', en: 'Department and ticket-type mix, in sales and units. Stacked bars replace the original sixteen pie charts.' },
      { src: '/images/bilan-enseigne/8-best-hors-best.webp', fr: 'Magasins Best (plus de +8 % face à N-1) et Hors Best, avec chaque magasin placé selon son évolution et son écart au budget.', en: 'Best stores (over +8% against last year) and the rest, with each store plotted by growth and gap to budget.' },
      { src: '/images/bilan-enseigne/9-bilan-test.webp', fr: 'Le bilan du test de 2025 sur 8 magasins, face au réseau, avant la généralisation de l’opération.', en: 'The 2025 test on 8 stores, against the network, before the promotion was rolled out.' }
    ],
    fr: {
      kind: 'Power BI',
      sector: 'Distribution retail, 2026',
      title: 'Bilan de performance d’une enseigne du groupe',
      summary:
        'L’analyse interne d’une enseigne du groupe, une trentaine de magasins en France et en Belgique : ventes comparables, marge au prix de revient, démarque, effet d’une opération commerciale testée en 2025 puis généralisée, et des leviers chiffrés pour la direction.',
      role: 'Modèle, analyses et synthèse, en binôme',
      period: 'Octobre 2026',
      pagesTitle: 'Les autres pages du dossier',
      caption: 'Pages au format du dossier remis à la direction, refaites avec des données fictives (enseigne, magasins et montants inventés).',
      context:
        'La direction fait le point sur l’année d’une des enseignes du groupe, en affiliation et en succursale. Une opération commerciale, des articles offerts à partir d’un certain nombre d’achats, a été testée en 2025 sur huit magasins, puis étendue à tout le réseau sur quatre mois de 2026. Les questions étaient simples : l’année est-elle bonne, que coûte l’opération en marge, et que faire ensuite ?',
      challenge:
        'Comparer des périmètres qui ne bougent pas, sur neuf mois et deux types de magasins. Calculer des marges à partir d’un prix de revient tenu dans un fichier à part, avec la TVA de chaque pays. Lire l’effet d’une opération étalée sur quatre mois non consécutifs. Et mesurer un test lancé à des dates différentes selon les magasins.',
      built: [
        'Une base comparable magasin × mois, appliquée à toutes les mesures : ventes, budget, tickets et coûts partagent exactement le même périmètre.',
        'Deux périodes lues côte à côte sur chaque page : l’année (P1) et les mois d’opération (P2).',
        'La marge nette par rayon au prix de revient, la démarque accordée, et les ventes par tranche de prix, en affiliés et en succursales.',
        'Les KPI par type de magasin et par niveau de performance (Best au-delà de +8 %), le top 15 des magasins, le poids des tickets en opération.',
        'Le bilan du test de 2025 face au réseau, semaine par semaine et magasin par magasin.',
        'Une page de constats et de leviers chiffrés pour la direction, et une mesure de contrôle entre les deux tables de ventes avant chaque export.'
      ],
      decisions: [
        { title: 'Comparer au mois et au magasin', text: 'Un couple magasin × mois n’entre dans les calculs que s’il a vendu les deux années. Un magasin fermé un mois ne perd que ce mois-là. La table des couples comparables filtre toutes les mesures par TREATAS : un seul périmètre pour tout le dossier, sans relation de plus.' },
        { title: 'L’opération se lit sur ses mois', text: 'Sur l’année, quatre mois d’opération se noient dans les soldes et les mois creux. Chaque page affiche donc les mois d’opération à part, en jaune. La démarque passe de 38,8 % sur l’année à 24,2 % sur ces mois, et la marge nette monte à 79 %.' },
        { title: 'Un test daté magasin par magasin', text: 'Les huit magasins test n’ont pas démarré le même jour. Le comparable part de la date de début de chacun, et un magasin sorti du test pendant 12 jours est exclu sur ces jours-là. Les magasins test font +27 % quand le réseau fait +5 %.' },
        { title: 'Chiffrer le levier, avec deux hypothèses', text: 'Sur les mois d’opération, un ticket en opération fait 38 € contre 17,7 € hors opération. Passer de 58 % à 65 % de tickets en opération rapporterait 1 à 2 points de croissance sur l’année. L’hypothèse haute suppose que le client converti dépense comme les clients déjà en opération. L’hypothèse prudente n’en garde que la moitié, parce que ce sont les plus gros acheteurs qui adhèrent les premiers.' },
        { title: 'Lire la démarque par tranche de prix', text: 'L’article offert est le moins cher du ticket. Les Bijoux à moins de 6 € font 24 % des quantités et portent 63 % de remise sur les mois d’opération. D’où le levier sur la grille de prix, en sachant que la valeur offerte montera avec le panier.' },
        { title: 'Des barres empilées plutôt que seize camemberts', text: 'Le mix par rayon et par type de ticket se comparait sur seize camemberts. Quatre graphiques en barres empilées montrent les mêmes parts, et les quatre groupes, affiliés et succursales sur les deux périodes, se lisent d’un seul regard.' }
      ],
      result:
        'Un dossier où l’année, les mois d’opération et le test se lisent sur le même périmètre comparable, et qui se termine par des leviers chiffrés. Sur l’exemple fictif : +4,8 % sur l’année mais −10 % face au budget, une opération qui touche 58 % des tickets sur ses mois, et des magasins Best qui en font passer 66 %.',
      next: 'Suivre la part de tickets en opération magasin par magasin pendant la prochaine vague, et mesurer l’effet réel face au réseau plutôt que l’hypothèse.'
    },
    en: {
      kind: 'Power BI',
      sector: 'Retail distribution, 2026',
      title: 'Performance review of one of the group’s banners',
      summary:
        'An internal review of one of the group’s banners, about thirty stores in France and Belgium: like-for-like sales, margin at cost price, markdown, the effect of a promotion tested in 2025 then rolled out, and costed levers for leadership.',
      role: 'Model, analysis and summary, built as a pair',
      period: 'October 2026',
      pagesTitle: 'The other pages of the pack',
      caption: 'Pages in the format of the pack given to leadership, rebuilt with fictional data (banner, stores and amounts made up).',
      context:
        'Leadership reviews the year of one of the group’s banners, across affiliate and company-owned stores. A promotion, free items above a number of purchases, was tested in 2025 in eight stores, then extended to the whole network over four months of 2026. The questions were simple: is the year good, what does the promotion cost in margin, and what next?',
      challenge:
        'Compare stable scopes over nine months and two store types. Compute margins from a cost price kept in a separate file, with each country’s VAT. Read the effect of a promotion spread over four non-consecutive months. And measure a test that started on different dates in different stores.',
      built: [
        'A store × month comparable base applied to every measure: sales, budget, tickets and costs share exactly the same scope.',
        'Two periods side by side on every page: the year (P1) and the promotion months (P2).',
        'Net margin by department at cost price, markdown, and sales by price band, for affiliates and company-owned stores.',
        'KPIs by store type and performance level (Best above +8%), the top 15 stores, the share of promotion tickets.',
        'The 2025 test against the network, week by week and store by store.',
        'A findings and costed levers page for leadership, and a control measure between the two sales tables before every export.'
      ],
      decisions: [
        { title: 'Comparable by month and store', text: 'A store × month pair only counts if it sold in both years. A store closed for a month loses that month only. The comparable pairs table filters every measure through TREATAS: one scope for the whole pack, with no extra relationship.' },
        { title: 'The promotion is read on its own months', text: 'Over the year, four promotion months get lost among sales periods and quiet months. Every page shows them separately, in yellow. Markdown goes from 38.8% over the year to 24.2% on those months, and net margin rises to 79%.' },
        { title: 'A test dated store by store', text: 'The eight test stores did not start on the same day. The comparison starts from each store’s own start date, and a store taken out of the test for 12 days is excluded on those days. Test stores grow 27% while the network grows 5%.' },
        { title: 'Cost the lever, under two assumptions', text: 'During the promotion months, a promotion ticket averages €38 against €17.70 outside it. Going from 58% to 65% of tickets in the promotion would add 1 to 2 points of growth over the year. The high case assumes converted customers spend like those already in the promotion. The cautious case keeps half of that, because the biggest buyers join first.' },
        { title: 'Read markdown by price band', text: 'The free item is the cheapest one in the basket. Jewellery under €6 makes 24% of units and carries a 63% discount during the promotion. Hence the price-grid lever, knowing that the value given away rises with the basket.' },
        { title: 'Stacked bars instead of sixteen pies', text: 'Department and ticket-type mix used to be compared across sixteen pie charts. Four stacked bar charts show the same shares, and the four groups, affiliates and company-owned stores over both periods, read at a glance.' }
      ],
      result:
        'A pack where the year, the promotion months and the test rest on the same comparable scope, ending with costed levers. On the fictional example: +4.8% over the year but −10% against budget, a promotion reaching 58% of tickets on its months, and Best stores reaching 66%.',
      next: 'Track the share of promotion tickets store by store during the next wave, and measure the real effect against the network rather than the assumption.'
    }
  },
  {
    slug: 'suivi-hebdo-automatise',
    group: 'rand',
    visual: 'shots',
    stack: ['Python', 'openpyxl', 'Excel', 'SAP Analytics Cloud', 'Batch Windows'],
    shots: [
      { src: '/images/recap-hebdo/1-recap-test.webp', fr: 'La page de synthèse ajoutée en tête de la diffusion, sur un client en test : réel face à l’objectif par rayon, trois dernières semaines, avancement du test et rappels du suivi.', en: 'The summary page added at the front of the weekly file, for a client in test: actual against target by department, last three weeks, test progress and tracking notes.' },
      { src: '/images/recap-hebdo/2-avant-apres.webp', fr: 'Avant, des copies onglet par onglet pour chaque client. Après, un fichier déposé dans une fenêtre.', en: 'Before, tab-by-tab copies for every client. After, one file dropped into a window.' },
      { src: '/images/recap-hebdo/3-console.webp', fr: 'Deux fichiers déposés d’un coup : pour chacun, la semaine retenue, les contrôles, le tri et les onglets retirés, en clair.', en: 'Two files dropped at once: for each, the week used, the checks, the sorting and the tabs removed, in plain words.' },
      { src: '/images/recap-hebdo/4-recap-dollars.webp', fr: 'Le même outil sur un client américain sans objectif : montants en dollars, poids des rayons et répartition par centrale.', en: 'The same tool on a US client without targets: amounts in dollars, department share and split by distribution centre.' }
    ],
    fr: {
      kind: 'Python',
      sector: 'Distribution retail, 2026',
      title: 'Le suivi CA hebdo des clients, généré en un glisser-déposer',
      summary:
        'Un outil Python qui transforme le fichier de travail de chaque client en diffusion de la semaine : onglets figés et triés par rang, et une page de synthèse qui s’adapte au fichier. Utilisé chaque semaine par l’équipe, sur six clients.',
      role: 'Conception, développement et mise à disposition de l’équipe',
      period: 'Septembre 2026',
      pagesTitle: 'Le reste de l’outil',
      caption: 'Diffusions produites par l’outil sur deux fichiers fictifs (clients, magasins et montants inventés).',
      context:
        'Chaque semaine, le contrôle de gestion diffuse le suivi du chiffre d’affaires des magasins de plusieurs clients : des tests avec objectifs, des clients installés, en euros, en dollars ou en francs suisses. Le fichier de travail est alimenté par l’export SAP Analytics Cloud au moyen de formules SUMIFS. Pour diffuser, on copiait chaque onglet dans un nouveau classeur, on collait en valeurs, puis on triait les magasins par rang, client par client.',
      challenge:
        'Aucun fichier n’a la même forme : un ou plusieurs rayons, un objectif ou non, une colonne centrale ou non, des devises différentes, des tests qui débordent sur l’année suivante. L’outil devait marcher sur tous sans réglage, être lancé par des collègues qui n’ouvrent jamais Python, et ne jamais abîmer le fichier de travail, qui porte la connexion SAC.',
      built: [
        'Un lanceur Windows : on glisse un ou plusieurs fichiers, ou un dossier, dans la fenêtre. Il trouve Python et installe la seule librairie nécessaire si elle manque.',
        'Une détection de la structure : onglets de suivi, lignes Total Réel et Total Objectif, rayons, centrales, devise, année et première semaine.',
        'La diffusion : onglets figés en valeurs, magasins triés par rang avec leur mise en forme, onglets sources et complément SAC retirés, fichier nommé « Diffusion SXX ».',
        'Une page de synthèse, qui n’existait pas avant : réel face à l’objectif par rayon ou poids des rayons, trois dernières semaines, répartition par centrale, rappels du suivi, avancement du test et graphique.',
        'Des contrôles avant diffusion : Total Réel comparé jour par jour à l’export SAC, calcul manuel signalé, ventes sans onglet rayon reprises dans une ligne « Autres rayons ».',
        'Un journal de chaque exécution et des messages en clair dans la fenêtre.'
      ],
      decisions: [
        { title: 'Détecter plutôt que paramétrer', text: 'Un fichier de réglages par client aurait dû être tenu à jour à chaque nouveau test. Le script lit la structure dans le classeur lui-même : l’en-tête des magasins, les lignes de total, le titre de chaque onglet pour le rayon, le format des cellules pour la devise. Un nouveau client se traite sans toucher au code.' },
        { title: 'Figer les onglets, garder la synthèse vivante', text: 'Les onglets de suivi partent en valeurs, sans lien vers SAC. La page de synthèse reste en formules, pilotées par une seule cellule : on change la semaine, tout le tableau suit.' },
        { title: 'Définir la dernière semaine complète', text: 'Une semaine est retenue si elle se termine par au plus un jour sans vente : un dimanche fermé ne la fait pas reculer, une semaine en cours si. Au démarrage d’un test, la synthèse n’affiche que les semaines qui existent, puis la fenêtre se complète semaine après semaine.' },
        { title: 'Ne jamais toucher au fichier de travail', text: 'Le classeur source est lu sans être modifié et le résultat part dans un fichier neuf. Le complément SAP, la connexion au cube et les onglets d’export restent dans le fichier de travail.' },
        { title: 'Contrôler ce qu’on fige', text: 'Figer reprend la dernière valeur calculée par Excel. Avant d’écrire, l’outil compare le Total Réel à l’export SAC jour par jour et signale un classeur enregistré en calcul manuel : une diffusion périmée ne part pas sans alerte.' },
        { title: 'Corriger à partir du journal', text: 'Chaque exécution est journalisée. Le journal a montré deux erreurs qui revenaient : une diffusion déjà ouverte par un collègue et un fichier déposé deux fois. La version suivante les traite, et charge un fichier de 33 Mo en quelques secondes au lieu de deux minutes et demie, en vidant les onglets lourds inutiles avant lecture.' }
      ],
      result:
        '65 exécutions en cinq semaines par deux personnes de l’équipe, sur six clients, dont 61 sans erreur. La diffusion de la semaine se fait en un glisser-déposer, avec une page de synthèse qui n’existait pas avant.',
      next: 'Un jeu de fichiers fictifs couvrant tous les cas (avec ou sans objectif, plusieurs rayons, centrales, devises, test à cheval sur deux années), relancé à chaque nouvelle version pour vérifier les sorties.'
    },
    en: {
      kind: 'Python',
      sector: 'Retail distribution, 2026',
      title: 'Weekly client sales tracking, built with one drag and drop',
      summary:
        'A Python tool that turns each client’s working file into the weekly file to send: frozen tabs sorted by rank, plus a summary page that adapts to the file. Used every week by the team, across six clients.',
      role: 'Design, development and rollout to the team',
      period: 'September 2026',
      pagesTitle: 'The rest of the tool',
      caption: 'Weekly files produced by the tool from two fictional working files (clients, stores and amounts made up).',
      context:
        'Every week, the controlling team sends out store sales tracking for several clients: tests with targets, established clients, in euros, dollars or Swiss francs. The working file is fed by the SAP Analytics Cloud export through SUMIFS formulas. To send it, each tab was copied into a new workbook, pasted as values, then stores were sorted by rank, client by client.',
      challenge:
        'No two files share the same shape: one or several departments, a target or not, a distribution centre column or not, different currencies, tests running into the next year. The tool had to work on all of them with no settings, be launched by colleagues who never open Python, and never damage the working file, which holds the SAC connection.',
      built: [
        'A Windows launcher: drop one or several files, or a folder, into the window. It finds Python and installs the one library it needs if missing.',
        'Structure detection: tracking tabs, Actual and Target total rows, departments, distribution centres, currency, year and first week.',
        'The weekly file: tabs frozen as values, stores sorted by rank with their formatting, source tabs and SAC add-in removed, file named “Diffusion SXX”.',
        'A summary page that did not exist before: actual against target by department or department share, last three weeks, split by distribution centre, tracking notes, test progress and a chart.',
        'Checks before sending: Actual total compared day by day with the SAC export, manual calculation flagged, sales with no department tab shown on an “Other departments” line.',
        'A log of every run and plain-language messages in the window.'
      ],
      decisions: [
        { title: 'Detect rather than configure', text: 'A settings file per client would have needed updating for every new test. The script reads the structure from the workbook itself: the store header, the total rows, each tab’s title for the department, cell formats for the currency. A new client works without touching the code.' },
        { title: 'Freeze the tabs, keep the summary live', text: 'Tracking tabs go out as values, with no link to SAC. The summary page stays as formulas driven by a single cell: change the week and the whole table follows.' },
        { title: 'Define the last complete week', text: 'A week counts if it ends with at most one day without sales: a closed Sunday does not push it back, a week in progress does. When a test starts, the summary only shows the weeks that exist, then the window fills week after week.' },
        { title: 'Never touch the working file', text: 'The source workbook is read without being modified and the result goes into a new file. The SAP add-in, the cube connection and the export tabs stay in the working file.' },
        { title: 'Check what gets frozen', text: 'Freezing keeps the last value Excel calculated. Before writing, the tool compares the Actual total with the SAC export day by day and flags a workbook saved in manual calculation mode: an outdated file never goes out without a warning.' },
        { title: 'Fix from the log', text: 'Every run is logged. The log showed two recurring errors: a weekly file already open on a colleague’s machine, and a file dropped twice. The next version handles both, and loads a 33 MB file in a few seconds instead of two and a half minutes by emptying heavy unused tabs before reading.' }
      ],
      result:
        '65 runs in five weeks by two people on the team, across six clients, 61 of them without error. The weekly file takes one drag and drop, with a summary page that did not exist before.',
      next: 'A set of fictional files covering every case (with or without targets, several departments, distribution centres, currencies, a test spanning two years), rerun with every new version to check the outputs.'
    }
  },

  {
    slug: 'affectation-agents-sncf',
    group: 'sncf',
    visual: 'sncf',
    stack: ['Power Apps', 'Dataverse', 'Power Automate', 'SharePoint', 'Power BI'],
    reports: [
      { src: '/images/dispatch-sncf/0-planning.webp', fr: 'Le planning d’un périmètre tel que les chefs d’équipe l’ont saisi : une ligne par agent, un code par jour (MA/VE pour une matinée en vente, RP pour un repos, CA pour un congé).', en: 'A station network’s schedule as team leaders entered it: one row per employee, one code per day (MA/VE for a morning on sales, RP for a rest day, CA for leave).' },
      { src: '/images/dispatch-sncf/1-race.webp', fr: 'RACE, le rapport d’activité des chefs d’équipe : pour un agent et un mois, la dernière saisie de chaque jour et son code POGS, construit à partir de la gare, du rang dans la gare, de l’horaire et de l’activité.', en: 'RACE, the team leaders’ activity report: for one employee and one month, the last entry of each day and its POGS code, built from the station, the rank in the station, the shift and the activity.' },
      { src: '/images/dispatch-sncf/2-presence.webp', fr: 'Présents et absents sur les huit secteurs, par activité et par mois.', en: 'Present and absent staff across the eight sectors, by activity and month.' },
      { src: '/images/dispatch-sncf/3-statistiques.webp', fr: 'Combien d’agents en moyenne par jour de la semaine et par horaire, secteur par secteur.', en: 'Average staff per weekday and per shift, sector by sector.' },
      { src: '/images/dispatch-sncf/4-indisponibilite.webp', fr: 'Les indisponibilités jour par jour et par type.', en: 'Unavailability day by day and by type.' }
    ],
    figures: [
      { v: 'astreinteFlow', fr: 'Le circuit d’une astreinte, de la déclaration à la mise en paiement : 8 flux Power Automate, un écran par rôle.', en: 'An on-call claim from declaration to payment: 8 Power Automate flows, one screen per role.' },
      { v: 'botFlow', fr: 'Le bot temps partiel : deux tests avant chaque envoi, dont l’historique qui évite les relances en double.', en: 'The part-time contract bot: two checks before each email, including the history that prevents duplicate reminders.' }
    ],
    fr: {
      kind: 'Power Apps et Power Automate',
      sector: 'SNCF, 2024–2025',
      title: 'Affectation des agents en gare et astreintes, sans papier',
      summary:
        'Deux applications mobiles en production : l’affectation des agents en gare (45 écrans) et la déclaration des astreintes avec un circuit de validation jusqu’à quatre rôles (24 écrans, 8 flux). Plus un bot qui prévient des fins de contrat à temps partiel, et trois rapports Power BI alimentés par les saisies.',
      role: 'Conception et développement, en alternance',
      period: 'Septembre 2024 à décembre 2025',
      caption: 'Écrans des applications en production.',
      context:
        "À la SNCF, l'affectation des agents en gare et la déclaration des astreintes reposaient sur des feuilles papier et des relances par e-mail.",
      challenge:
        'Des managers sur le terrain, sur téléphone, deux périmètres de gares (EOLE et ESCALE), et une astreinte qui passe par trois ou quatre personnes avant d’être payée, avec des refus à gérer à chaque étape.',
      built: [
        'Dispatch : les équipes, l’affectation des agents par date, horaire et gare, un circuit dédié aux congés et maladies, un récapitulatif avant validation. 13 tables Dataverse et une liste SharePoint.',
        'Astreintes : l’agent déclare son astreinte et ses sorties ; le responsable valide, refuse avec un motif ou transmet au DUO ; le GU met en paiement ou rejette.',
        '8 flux Power Automate : soumission, validations, refus et mise en paiement, chacun avec un e-mail qui ouvre directement le bon écran.',
        'Un bot RH : quand le fichier de suivi des temps partiels est mis à jour, il prévient l’agent et son manager des contrats arrivés à échéance, avec un message différent en cas de tacite reconduction.',
        'Un mode opératoire interactif pour habiliter un nouvel utilisateur, afin qu’un remplaçant puisse le faire sans moi.',
        'Trois rapports Power BI branchés sur les saisies de Dispatch : le planning de chaque périmètre, la présence par activité, et RACE, qui donne le code POGS de chaque journée d’agent.'
      ],
      decisions: [
        { title: 'Un écran par rôle, ouvert depuis l’e-mail', text: 'Le lien de chaque e-mail porte la page à ouvrir : le responsable, le DUO ou le GU arrive directement sur l’astreinte à traiter.' },
        { title: 'Les droits dans une table d’accès', text: 'Au démarrage, l’application lit le matricule de l’utilisateur et en déduit son secteur : chacun ne voit que ses gares et ses équipes.' },
        { title: 'Une seule relance par contrat', text: 'Avant d’envoyer, le bot vérifie dans un historique que le matricule n’a pas déjà été prévenu, puis enregistre l’envoi. Pas de doublons dans les boîtes mail.' },
        { title: 'La dernière saisie fait foi', text: 'Un chef d’équipe corrige souvent une affectation après coup, et la liste garde les deux lignes. RACE ne retient que la plus récente pour un agent et un jour : sinon, le même agent compterait présent et absent.' }
      ],
      reportsIntro:
        'Chaque affectation saisie dans Dispatch arrive dans une liste SharePoint, une ligne par agent et par jour. Les rapports Power BI s’en servent pour le planning de chaque périmètre et pour RACE, le rapport d’activité des chefs d’équipe. Captures d’une copie sur données fictives.',
      result: 'Fin des impressions papier et −40 % de temps de reporting manuel. Deux applications en production.',
      next: ''
    },
    en: {
      kind: 'Power Apps and Power Automate',
      sector: 'SNCF, 2024–2025',
      title: 'Paperless station staff dispatch and on-call duty',
      summary:
        'Two mobile apps in production: station staff dispatch (45 screens) and on-call declarations with an approval chain of up to four roles (24 screens, 8 flows). Plus a bot that flags part-time contracts reaching their end date, and three Power BI reports fed by the entries.',
      role: 'Design and build, work-study',
      period: 'September 2024 to December 2025',
      caption: 'Screens from the production apps.',
      context: 'At SNCF, assigning station staff and declaring on-call duty relied on paper sheets and email reminders.',
      challenge: 'Field managers on phones, two station networks (EOLE and ESCALE), and an on-call claim that goes through three or four people before it is paid, with rejections possible at every step.',
      built: [
        'Dispatch: teams, staff assignment by date, shift and station, a dedicated flow for leave and sick days, a summary before saving. 13 Dataverse tables and one SharePoint list.',
        'On-call: the employee declares the duty and call-outs; the manager approves, rejects with a reason or escalates to the DUO; the GU releases payment or rejects.',
        '8 Power Automate flows: submission, approvals, rejections and payment, each with an email that opens the right screen.',
        'An HR bot: when the part-time tracking file is updated, it emails the employee and their manager about contracts reaching their end date, with a different message for automatic renewals.',
        'An interactive runbook for granting access to a new user, so a stand-in can do it without me.',
        'Three Power BI reports built on the Dispatch entries: each network’s schedule, attendance by activity, and RACE, which gives the POGS code of every employee day.'
      ],
      decisions: [
        { title: 'One screen per role, opened from the email', text: 'Each email link carries the page to open: the manager, DUO or GU lands straight on the claim to handle.' },
        { title: 'Access rights in a table', text: 'On launch, the app reads the user’s staff ID and derives their sector: everyone only sees their own stations and teams.' },
        { title: 'One reminder per contract', text: 'Before sending, the bot checks a history list that the employee has not been notified yet, then logs the email. No duplicates in inboxes.' },
        { title: 'The last entry wins', text: 'Team leaders often correct an assignment afterwards, and the list keeps both rows. RACE keeps only the latest one per employee and day; otherwise the same person would count as both present and absent.' }
      ],
      reportsIntro:
        'Every assignment entered in Dispatch lands in a SharePoint list, one row per employee and day. The Power BI reports use it for each network’s schedule and for RACE, the team leaders’ activity report. Screens from a copy on fictitious data.',
      result: 'No more printed sheets and −40% manual reporting time. Two apps in production.',
      next: ''
    }
  },
  {
    slug: 'pipeline-donnees-ventes',
    group: 'rand',
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
    slug: 'suivi-quotidien-client',
    group: 'rand',
    visual: 'shots',
    stack: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'SAP HANA'],
    shots: [
      { src: '/images/daily-retail/1-comparable-tous-pays.webp', fr: 'Page d’origine : le CA comparable semaine par semaine, tous pays, avec le détail par pays et par rayon de la semaine en cours.', en: 'Original page: like-for-like sales week by week, all countries, with the current week broken down by country and department.' },
      { src: '/images/daily-retail/2-jauges-jour.webp', fr: 'Page d’origine : la veille face au budget de la semaine, rayon par rayon, sur le premier marché.', en: 'Original page: yesterday against the weekly budget, department by department, on the largest market.' },
      { src: '/images/daily-retail/3-jauges-semaine.webp', fr: 'Page d’origine : la semaine close face au budget, avec l’écart en euros.', en: 'Original page: the closed week against budget, with the gap in euros.' },
      { src: '/images/daily-retail/4-courbe-hebdo.webp', fr: 'Page d’origine : la courbe hebdomadaire 2026, 2025 et budget. Le texte en haut à droite rappelle la mise à jour manuelle de chaque semaine.', en: 'Original page: the weekly curve for 2026, 2025 and budget. The note at the top right is the manual update needed every week.' },
      { src: '/images/daily-retail/5-synthese.webp', fr: 'Nouvelle page de synthèse : CA, évolution comparable, atteinte du budget et atterrissage, puis la courbe de l’année et les écarts par pays et par rayon.', en: 'New summary page: sales, like-for-like change, budget achievement and landing, then the year curve and gaps by country and department.' },
      { src: '/images/daily-retail/6-pilotage-budget.webp', fr: 'Nouvelle page budget : atteinte par pays et par rayon, CA et budget par semaine close, écarts en euros.', en: 'New budget page: achievement by country and department, sales and budget per closed week, gaps in euros.' },
      { src: '/images/daily-retail/7-magasins.webp', fr: 'Nouvelle page magasins : les plus fortes baisses et hausses en euros, et chaque magasin placé selon sa taille et son évolution.', en: 'New store page: the largest drops and gains in euros, and every store plotted by size and change.' }
    ],
    fr: {
      kind: 'Power BI',
      sector: 'Distribution retail, 2026',
      title: 'Suivi quotidien d’un client distributeur face au budget',
      summary:
        'Le rapport envoyé chaque matin pour un client distributeur présent dans sept pays : la veille et la semaine face à N-1 et au budget, rayon par rayon. Repris, débarrassé de ses mises à jour manuelles et complété par trois pages d’analyse.',
      role: 'Reprise du rapport, audit, corrections et trois nouvelles pages',
      period: '2026',
      caption: 'Captures du rapport Power BI, alimenté par des données fictives.',
      context:
        "Le groupe gère plusieurs rayons dans les magasins d'une enseigne de distribution : plus de 200 points de vente répartis sur sept pays européens. Chaque matin, le rapport donne au client et à l'équipe commerciale le CA de la veille et de la semaine en cours, face à l'an dernier et au budget, avec un focus sur le premier marché.",
      challenge:
        "Le rapport tenait par des gestes manuels : une formule de budget restant à modifier chaque semaine, une liste de 253 dates cochées dans un filtre de page pour borner l'an dernier, des dates d'objectif écrites dans les mesures et des historiques importés en CSV. Dix pages masquées pointaient vers des tables supprimées, et aucune page ne disait en un écran si le réseau tenait son budget.",
      built: [
        'Un audit du modèle : 14 pages dont 10 masquées, 67 mesures presque toutes rangées dans la table des magasins, deux mesures cassées par une table supprimée.',
        'Une table de mesures dédiée, avec la dernière date de vente et la dernière semaine close calculées à partir des données.',
        'Un budget comparé au CA sur le même périmètre : pays et rayons budgétés, semaines closes uniquement.',
        'Une page de synthèse : CA, évolution comparable, atteinte du budget et atterrissage estimé, puis la courbe de l’année et les écarts par pays et par rayon.',
        'Une page de pilotage du budget : atteinte par pays et par rayon, CA et budget par semaine, écarts en euros.',
        'Une page magasins : les plus fortes baisses et hausses en euros, et un nuage de points magasin par magasin.'
      ],
      decisions: [
        {
          title: 'La semaine close se déduit des ventes',
          text: "Le budget restant était corrigé à la main chaque lundi. La mesure « Dernière semaine close » part de la dernière date de vente : un dimanche clôt la semaine, sinon on s'arrête à la précédente. Plus rien à toucher le lundi matin."
        },
        {
          title: 'Comparer CA et budget sur le même périmètre',
          text: "Le budget couvre six pays et six rayons, à partir de la semaine 6. Diviser le CA total par ce budget compte un pays et un rayon non budgétés, et une semaine entamée face à un budget de semaine pleine. Le calcul garde le même périmètre des deux côtés."
        },
        {
          title: 'Garder le comparable d’origine',
          text: "Le rapport définissait déjà un comparable au bon grain : magasin × jour de la semaine × semaine, avec un N-1 décalé de 364 jours. Je l'ai gardé et réutilisé dans les nouvelles pages plutôt que d'en créer un second, qui aurait donné un autre chiffre."
        },
        {
          title: 'Un atterrissage simple, écrit sur la page',
          text: "L'atterrissage prolonge le taux d'atteinte actuel sur les semaines restantes du budget. L'hypothèse est volontairement simple et affichée à côté du chiffre, pour que le client puisse la discuter."
        },
        {
          title: 'Des couleurs calculées',
          text: "Le vert et le rouge viennent de mesures (au-dessus ou en dessous de zéro, ou de 100 % du budget) appliquées aux barres, aux cartes et aux tableaux. Le dégradé de la matrice budget est centré sur 100 % d'atteinte."
        }
      ],
      result:
        'Le rapport du matin ne demande plus de retouche hebdomadaire, et une page résume l’état du réseau face à 2025 et au budget. Sur les données fictives : +3,1 % en comparable et 97,8 % du budget atteint en semaine 41, avec un écart concentré sur le premier marché et le premier rayon.',
      next: 'Remplacer la liste de dates du filtre de page par une borne calculée sur la dernière date de vente, charger les historiques depuis l’entrepôt plutôt que depuis des exports CSV, et signaler les magasins qui décrochent plusieurs semaines de suite.'
    },
    en: {
      kind: 'Power BI',
      sector: 'Retail distribution, 2026',
      title: 'Daily tracking of a retail account against budget',
      summary:
        'The report sent every morning for a retail account present in seven countries: yesterday and the current week against last year and budget, department by department. Taken over, freed from its manual updates and extended with three analysis pages.',
      role: 'Took over the report: audit, fixes and three new pages',
      period: '2026',
      caption: 'Screenshots of the Power BI report, running on fictional data.',
      context:
        'The group runs several departments inside the stores of a retail chain: more than 200 stores across seven European countries. Every morning, the report gives the account and the sales team yesterday’s sales and the current week, against last year and budget, with a focus on the largest market.',
      challenge:
        'The report relied on manual steps: a remaining-budget formula edited every week, a list of 253 dates ticked in a page filter to bound last year, target dates written into measures and history tables imported from CSV. Ten hidden pages pointed at deleted tables, and no page showed at a glance whether the network was on budget.',
      built: [
        'A model audit: 14 pages including 10 hidden, 67 measures almost all stored in the store table, two measures broken by a deleted table.',
        'A dedicated measure table, with the last sales date and the last closed week computed from the data.',
        'Budget compared with sales on the same scope: budgeted countries and departments, closed weeks only.',
        'A summary page: sales, like-for-like change, budget achievement and estimated landing, then the year curve and gaps by country and department.',
        'A budget page: achievement by country and department, sales and budget per week, gaps in euros.',
        'A store page: the largest drops and gains in euros, and a scatter plot store by store.'
      ],
      decisions: [
        {
          title: 'The closed week comes from the sales',
          text: 'The remaining budget was edited by hand every Monday. The “last closed week” measure starts from the last sales date: a Sunday closes the week, otherwise it stops at the previous one. Nothing left to edit on Monday morning.'
        },
        {
          title: 'Compare sales and budget on the same scope',
          text: 'The budget covers six countries and six departments, from week 6. Dividing total sales by that budget counts a country and a department with no budget, and a week in progress against a full-week budget. The calculation keeps the same scope on both sides.'
        },
        {
          title: 'Keep the original like-for-like',
          text: 'The report already defined like-for-like at the right grain: store × weekday × week, with last year shifted by 364 days. I kept it and reused it in the new pages rather than building a second one that would give a different figure.'
        },
        {
          title: 'A simple landing, written on the page',
          text: 'The landing extends the current achievement rate over the remaining budget weeks. The assumption is deliberately simple and shown next to the figure, so the account can challenge it.'
        },
        {
          title: 'Computed colours',
          text: 'Green and red come from measures (above or below zero, or 100% of budget) applied to bars, cards and tables. The budget matrix gradient is centred on 100% achievement.'
        }
      ],
      result:
        'The morning report no longer needs a weekly edit, and one page sums up the network against 2025 and budget. On the fictional data: +3.1% like-for-like and 97.8% of budget achieved at week 41, with the gap concentrated on the largest market and the largest department.',
      next: 'Replace the list of dates in the page filter with a bound computed from the last sales date, load history from the warehouse instead of CSV exports, and flag stores that fall behind several weeks in a row.'
    }
  },
  {
    slug: 'analyse-messages-service-client',
    group: 'hetic',
    visual: 'shots',
    stack: ['Python', 'Streamlit', 'Power BI', 'DAX', 'Power Query', 'pandas', 'Mistral AI'],
    link: 'https://github.com/Imadbouchareb/LLMAnalyzer-SAV-Tweets',
    shots: [
      { src: '/images/sav-llm/0-file-attente.webp', fr: 'L’écran Agent SAV : la file d’attente, avec les tickets ouverts, les urgents et un menu par tâche (urgences, thèmes, affectations, exports, journal).', en: 'The support agent screen: the queue, with open and urgent tickets and a menu per task (urgent cases, topics, assignments, exports, log).' },
      { src: '/images/sav-llm/1-accueil-roles.webp', fr: 'L’accueil : on importe le fichier produit par le pipeline, puis chacun ouvre l’écran de son rôle.', en: 'The landing page: import the file produced by the pipeline, then each person opens the screen for their role.' },
      { src: '/images/sav-llm/2-ticket-suggestion.webp', fr: 'Un ticket ouvert : le résumé et la réponse proposés par le LLM à côté du message d’origine. L’agent accepte la suggestion ou écrit sa réponse.', en: 'An open ticket: the summary and reply suggested by the LLM next to the original message. The agent accepts the suggestion or writes their own.' },
      { src: '/images/sav-llm/3-analyste-priorite.webp', fr: 'L’écran Analyste : les messages au-dessus du seuil de priorité, avec leur score, leur statut et leur thème.', en: 'The analyst screen: messages above the priority threshold, with their score, status and topic.' },
      { src: '/images/sav-llm/4-priorite-temps.webp', fr: 'Le score de priorité de chaque message dans le temps, coloré par sentiment.', en: 'Each message’s priority score over time, coloured by sentiment.' },
      { src: '/images/sav-llm/5-manager-operations.webp', fr: 'L’écran Manager, onglet Opérations : statuts des tickets, volume par jour et par heure, courbe horaire.', en: 'The manager screen, Operations tab: ticket statuses, volume by day and hour, hourly curve.' }
    ],
    reports: [
      { src: '/images/sav-llm-pbi/0-vue-ensemble.webp', fr: 'La page d’origine, rebranchée sur les messages fictifs : publications collectées, messages clients, sentiment moyen, part d’urgents, volume par mois, thèmes et équipes.', en: 'The original page, rewired to the fictional messages: posts collected, customer messages, average sentiment, share of urgent messages, monthly volume, topics and teams.' },
      { src: '/images/sav-llm-pbi/1-temporel.webp', fr: 'Quand les clients écrivent : chaleur jour × heure, sentiment par jour de la semaine, courbe horaire et cumul.', en: 'When customers write: day × hour heatmap, sentiment by weekday, hourly curve and running total.' },
      { src: '/images/sav-llm-pbi/2-urgence.webp', fr: 'Les messages urgents un par un avec la raison détectée, le délai cible, la gravité et l’urgence par équipe.', en: 'Urgent messages one by one with the detected reason, target response time, severity and urgency by team.' },
      { src: '/images/sav-llm-pbi/3-sentiment.webp', fr: 'Le sentiment : jauges, évolution mensuelle et nuage des mots-clés des messages négatifs (visuel Python).', en: 'Sentiment: gauges, monthly trend and a word cloud of keywords from negative messages (Python visual).' },
      { src: '/images/sav-llm-pbi/4-incidents.webp', fr: 'Les journées de pic, les villes citées dans les messages et les intentions détectées par le LLM, croisées avec la gravité.', en: 'Peak days, cities mentioned in messages and the intents detected by the LLM, crossed with severity.' },
      { src: '/images/sav-llm-pbi/5-priorite.webp', fr: 'Page ajoutée : le score de priorité de l’application SAV repris dans le rapport, par équipe, par mois et par thème, avec la liste des messages à traiter en premier.', en: 'Added page: the support app’s priority score brought into the report, by team, month and topic, with the list of messages to handle first.' },
      { src: '/images/sav-llm-pbi/6-qualite.webp', fr: 'Page ajoutée : du flux collecté aux messages clients, et les deux définitions de l’urgence (règle de mots-clés et note du LLM) croisées.', en: 'Added page: from collected posts to customer messages, and the two definitions of urgency (keyword rule and LLM score) side by side.' }
    ],
    figures: [
      { v: 'savFlow', fr: 'Du message brut à l’écran de l’agent : le pipeline LLM de l’équipe en amont, l’application SAV que j’ai créée en aval.', en: 'From raw message to the agent’s screen: the team’s LLM pipeline upstream, the support app I built downstream.' }
    ],
    fr: {
      kind: 'LLM et application',
      pagesTitle: 'Les autres écrans de l’application',
      flowsTitle: 'Le circuit des données',
      sector: "Projet de fin d'études HETIC, 2025",
      title: 'L’application SAV qui traite les messages clients analysés par un LLM',
      summary:
        'Un pipeline LLM lit les tweets adressés au service client et note chaque message : thème, sentiment, urgence, gravité, résumé, réponse proposée. J’ai créé l’application qui en fait un outil de travail : un écran pour l’analyste, un pour le manager, une file d’attente priorisée pour l’agent SAV. Et le rapport Power BI de pilotage sur la même sortie.',
      role: 'Création et conception de l’application SAV, score de priorité, rapport Power BI, nettoyage des données du pipeline local. Projet à trois en méthode Scrum.',
      period: 'Juillet à novembre 2025',
      caption: 'L’application relancée pour le portfolio sur 1 075 messages fictifs : aucun tweet réel, auteurs anonymisés.',
      context:
        'Projet de fin d’études du Master Data et IA, sur un cas d’école : les tweets adressés au service client de Free Mobile. Des milliers de messages par mois, lus dans l’ordre d’arrivée. Mes deux coéquipiers ont construit le pipeline qui les analyse avec un LLM, et le chatbot. Ma partie : l’application qui permet au support de s’en servir.',
      challenge:
        'Une sortie de LLM n’est pas un outil. Un fichier de 16 colonnes par message ne dit ni quoi traiter en premier, ni qui s’en occupe, ni ce qui a déjà été fait. Et une nouvelle analyse devait pouvoir être rechargée sans effacer le travail des agents.',
      built: [
        'L’application SAV en Streamlit : un accueil qui importe le fichier du pipeline, puis un écran par rôle. Le code est découpé en une bibliothèque commune (chargement, score, état, grilles) et une page par écran.',
        'L’écran Analyste : filtres par seuil de priorité, thème, sentiment et période, résultats détaillés, priorité dans le temps, réseau de thèmes, comparaisons, alertes automatiques et exports.',
        'L’écran Manager : volume, part de messages urgents et négatifs, auteurs uniques, urgence moyenne, tickets ouverts ; statuts, chaleur jour × heure, courbe horaire, export des tickets ouverts en CSV ou JSON.',
        'L’écran Agent SAV : la file d’attente, le résumé et la réponse proposés par le LLM pour le ticket choisi, et trois actions rapides (réaffecter, clore, mettre en attente client).',
        'Le chargement qui normalise la sortie du pipeline (dates, thèmes, sentiment, urgence, gravité), et le nettoyage des messages pour la version locale du pipeline.',
        'Le rapport Power BI de pilotage branché sur la même sortie : cinq pages (vue d’ensemble, heures et jours, urgence, sentiment, incidents), avec un calendrier, une quarantaine de mesures DAX et un nuage de mots en Python.'
      ],
      decisions: [
        { title: 'Un écran par métier', text: 'L’analyste cherche des tendances, le manager surveille la charge, l’agent traite un ticket après l’autre. Un seul tableau de bord pour les trois aurait été trop chargé pour chacun.' },
        { title: 'Un score de priorité qu’on peut expliquer', text: '45 % urgence, 40 % gravité, 15 % sentiment négatif, de 0 à 1. Un responsable support comprend pourquoi un message passe devant un autre, et règle le seuil lui-même.' },
        { title: 'Le travail des agents stocké à part', text: 'Statuts, affectations et réponses vont dans un fichier séparé, appliqué au chargement. On réimporte une nouvelle analyse sans perdre ce qui a été traité.' },
        { title: 'Une seule définition de l’urgence', text: 'En relisant le rapport, j’ai trouvé deux définitions qui cohabitaient : la carte comptait les messages repérés par la règle de mots-clés (33,7 % des messages), les graphiques la note du LLM (82 %). La page « Qualité des données » les croise ; la suite est d’en garder une.' },
        { title: 'Le LLM propose, l’agent décide', text: 'La réponse suggérée s’affiche à côté du message d’origine. L’agent l’accepte ou écrit la sienne, et le statut garde la trace des deux cas.' }
      ],
      result:
        'Trois applications livrées par l’équipe : le pipeline, l’application SAV et le chatbot. Sur le jeu de l’école, 6 310 tweets passés dans le pipeline, 2 989 messages clients retenus après filtrage et dédoublonnage, dont 33,7 % détectés comme urgents.',
      next: 'Brancher l’application directement sur la sortie du pipeline plutôt que sur un import de fichier, retenir une seule définition de l’urgence dans l’application et le rapport, et mesurer avec une équipe support le temps de traitement avant et après.',
      reportsTitle: 'Le rapport Power BI sur la sortie du pipeline',
      reportsIntro: 'J’ai aussi construit le rapport Power BI de pilotage branché sur la même sortie. Pour le portfolio, je l’ai rebranché sur les messages fictifs, sans toucher aux pages d’origine, puis j’ai ajouté deux pages : la priorité de traitement et la qualité des données.'
    },
    en: {
      kind: 'LLM and app',
      pagesTitle: 'The other screens of the app',
      flowsTitle: 'How the data flows',
      sector: 'HETIC final project, 2025',
      title: 'The support app that handles customer messages analysed by an LLM',
      summary:
        'An LLM pipeline reads the tweets sent to customer service and scores each message: topic, sentiment, urgency, severity, summary, suggested reply. I built the app that turns this into a working tool: one screen for the analyst, one for the manager, and a prioritised queue for the support agent. Plus the Power BI monitoring report on the same output.',
      role: 'Created and designed the support app, the priority score, the Power BI report and the data cleaning for the local pipeline. Team of three, Scrum.',
      period: 'July to November 2025',
      caption: 'The app relaunched for this portfolio on 1,075 fictional messages: no real tweets, anonymised authors.',
      context:
        'Final project of the Master in Data and AI, on a school case: tweets sent to Free Mobile’s customer service. Thousands of messages a month, read in order of arrival. My two teammates built the pipeline that analyses them with an LLM, and the chatbot. My part: the app that lets the support team use the results.',
      challenge:
        'LLM output is not a tool. A 16-column file per message does not say what to handle first, who owns it or what has already been done. And a new analysis had to be reloaded without wiping the agents’ work.',
      built: [
        'The support app in Streamlit: a landing page that imports the pipeline file, then one screen per role. The code is split into a shared library (loading, score, state, grids) and one page per screen.',
        'The analyst screen: filters by priority threshold, topic, sentiment and period, detailed results, priority over time, topic network, comparisons, automatic alerts and exports.',
        'The manager screen: volume, share of urgent and negative messages, unique authors, average urgency, open tickets; statuses, day × hour heatmap, hourly curve, export of open tickets as CSV or JSON.',
        'The support agent screen: the queue, the LLM’s summary and suggested reply for the selected ticket, and three quick actions (reassign, close, wait for customer).',
        'The loader that normalises the pipeline output (dates, topics, sentiment, urgency, severity), and message cleaning for the local version of the pipeline.',
        'The Power BI monitoring report on the same output: five pages (overview, hours and days, urgency, sentiment, incidents), with a calendar, about forty DAX measures and a Python word cloud.'
      ],
      decisions: [
        { title: 'One screen per job', text: 'The analyst looks for trends, the manager watches the workload, the agent handles one ticket after another. A single dashboard for all three would have been too crowded for each.' },
        { title: 'A priority score you can explain', text: '45% urgency, 40% severity, 15% negative sentiment, from 0 to 1. A support lead sees why one message comes before another, and sets the threshold themselves.' },
        { title: 'Agents’ work stored separately', text: 'Statuses, assignments and replies go to a separate file applied on load. A new analysis can be imported without losing what has been handled.' },
        { title: 'One definition of urgency', text: 'Reviewing the report, I found two definitions side by side: the card counted messages flagged by the keyword rule (33.7% of messages), the charts used the LLM score (82%). The “Data quality” page sets them against each other; the next step is to keep one.' },
        { title: 'The LLM suggests, the agent decides', text: 'The suggested reply sits next to the original message. The agent accepts it or writes their own, and the status records which.' }
      ],
      result:
        'Three apps delivered by the team: the pipeline, the support app and the chatbot. On the school dataset, 6,310 tweets went through the pipeline, 2,989 customer messages were kept after filtering and de-duplication, and 33.7% were flagged as urgent.',
      next: 'Connect the app directly to the pipeline output instead of a file import, keep a single definition of urgency in the app and the report, and measure handling time before and after with a support team.',
      reportsTitle: 'The Power BI report on the pipeline output',
      reportsIntro: 'I also built the Power BI monitoring report on the same output. For this portfolio I rewired it to the fictional messages, leaving the original pages as they were, and added two pages: handling priority and data quality.'
    }
  },
  {
    slug: 'analyse-soldes',
    group: 'rand',
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
    slug: 'pilotage-budgetaire-sncf',
    group: 'sncf',
    visual: 'shots',
    stack: ['Power BI', 'DAX', 'Power Query', 'Excel'],
    shots: [
      { src: '/images/finance-sncf/0-origine.webp', fr: 'L’écran d’origine, celui que le CODIR ouvrait : les charges externes à date par métier, réalisé, budget et écart, la répartition par nœud comptable et l’évolution mois par mois. Gardé en page d’accueil, sur données fictives.', en: 'The original screen the management committee opened: external costs to date by business line, actual, budget and variance, the split by accounting node and the month-by-month trend. Kept as the landing page, on fictitious data.' },
      { src: '/images/finance-sncf/1-synthese.webp', fr: 'La synthèse CODIR ajoutée : une phrase qui résume le mois, puis les charges externes, la masse salariale, l’effectif disponible et l’intérim, chacun face au budget, avec l’atterrissage de fin d’année.', en: 'The new management summary: one sentence on the month, then external costs, payroll, available headcount and temp staff, each against budget, with the year-end landing.' },
      { src: '/images/finance-sncf/2-effectifs.webp', fr: 'Les effectifs : l’effectif disponible en fin de mois et en moyenne sur l’année, face au budget.', en: 'Headcount: available staff at month end and on a yearly average, against budget.' },
      { src: '/images/finance-sncf/3-interim.webp', fr: 'L’intérim en équivalents temps plein, par métier et par unité de gestion, mois par mois.', en: 'Temp staff in full-time equivalents, by business line and cost unit, month by month.' },
      { src: '/images/finance-sncf/4-detail.webp', fr: 'Le détail des charges externes : du métier au nœud comptable, puis jusqu’au fournisseur, à la commande et à la pièce.', en: 'External cost detail: from business line to accounting node, down to supplier, purchase order and document.' }
    ],
    fr: {
      kind: 'Power BI',
      sector: 'SNCF, 2024',
      title: 'Pilotage budgétaire : le réalisé face au budget, chaque mois',
      summary:
        'Le rapport que le CODIR de l’établissement Transilien L, A et J lisait chaque mois après la clôture : charges externes, masse salariale, effectifs et intérim, réalisé contre budget, par métier et jusqu’à la facture.',
      role: 'Conception du rapport en alternance avec l’équipe finance, puis audit et refonte pour le portfolio',
      period: '2024',
      caption: 'Captures du rapport refondu, alimenté par des données entièrement fictives.',
      context:
        "Chaque mois, après la clôture comptable, le CODIR de l'établissement fait le point sur les dépenses face au budget : charges externes (ACE), masse salariale, effectif disponible, intérim, investissements. Les chiffres viennent des extractions du grand livre, des fichiers de budget et de la base des effectifs, que l'équipe finance dépose chaque mois.",
      challenge:
        "Le rapport d'origine comptait 20 pages et 37 tables de données, une par année et par source, plus 14 tables de dates créées automatiquement. Les charges y étaient en négatif : un dépassement s'affichait comme un écart négatif, et les courbes descendaient quand les dépenses montaient. La page CODIR lisait un tableau Excel retapé à la main, alors que les données de détail permettaient de la calculer. Quelques mesures étaient fausses ou mal nommées : la moyenne annuelle des effectifs divisée par des mois pas encore chargés, un cumul « 2023 » qui calculait 2024, une mesure qui pointait vers une table supprimée. Enfin, certaines pages affichaient des noms d'agents.",
      built: [
        'Une page Synthèse CODIR calculée à partir des données de détail : charges externes, masse salariale, effectif disponible et intérim, chacun avec le réalisé à date, l’écart au budget et l’atterrissage de fin d’année.',
        'Une phrase de synthèse écrite en DAX, qui se met à jour avec le dernier mois clos : ce que le CODIR lit en premier.',
        'Les écarts par métier et par nœud comptable, avec une seule convention : un dépassement est positif, et rouge.',
        '33 mesures ajoutées, documentées et rangées dans un même dossier, et la moyenne annuelle des effectifs corrigée.',
        'Les pages d’origine gardées et rebranchées sur des données fictives, les pages nominatives retirées, une page de définitions ajoutée.'
      ],
      decisions: [
        {
          title: 'Calculer la synthèse plutôt que la saisir',
          text: "Le tableau CODIR était retapé chaque mois dans Excel à partir des mêmes extractions que le reste du rapport. Le calculer supprime une ressaisie et garantit que la synthèse et le détail disent la même chose."
        },
        {
          title: 'Un dépassement est positif',
          text: "En comptabilité, les charges sont négatives. En réunion, un écart positif en rouge se lit sans effort ; un écart négatif en rouge oblige à se souvenir de la convention. Les mesures de synthèse remettent les charges en positif."
        },
        {
          title: 'Le dernier mois clos comme repère',
          text: "Toute la page se cale sur le dernier mois clos, pas sur la date du jour : le réalisé et le budget à date couvrent les mêmes mois, et le titre dit de quel mois on parle."
        },
        {
          title: 'Un atterrissage simple',
          text: "Le réalisé à date plus le budget des mois restants. Ce n'est pas une prévision, c'est la question du CODIR : si les prochains mois tiennent leur budget, où finit l'année ?"
        }
      ],
      result:
        "Le CODIR ouvre une page qui dit, en une phrase et quatre blocs, où en est l'établissement à la fin du mois : réalisé, écart au budget, atterrissage. Pour chaque écart, on descend du métier au nœud comptable, puis jusqu'au fournisseur et à la commande.",
      next: "Regrouper les tables par source plutôt que par année, pour qu'une nouvelle année ne demande plus de dupliquer tables et mesures, et remplacer les dates automatiques par un seul calendrier."
    },
    en: {
      kind: 'Power BI',
      sector: 'SNCF, 2024',
      title: 'Budget control: actuals against budget, every month',
      summary:
        'The report the management committee of the Transilien L, A and J network read every month after closing: external costs, payroll, headcount and temp staff, actual against budget, by business line and down to the invoice.',
      role: 'Built the report during my work-study with the finance team, then audited and rebuilt it for this portfolio',
      period: '2024',
      caption: 'Screens of the rebuilt report, fed with entirely fictitious data.',
      context:
        'Every month, after the books close, the management committee reviews spending against budget: external costs, payroll, available headcount, temp staff, capital spending. The figures come from general ledger extracts, budget files and the headcount base, which the finance team drops in every month.',
      challenge:
        'The original report had 20 pages and 37 data tables, one per year and per source, plus 14 auto-generated date tables. Costs were carried as negatives: an overspend showed as a negative variance, and lines went down when spending went up. The management page read a hand-typed Excel table, although the detail data could compute it. Some measures were wrong or mislabelled: the yearly average headcount divided by months not yet loaded, a “2023” running total that computed 2024, a measure pointing to a deleted table. And some pages showed staff names.',
      built: [
        'A management summary page computed from the detail data: external costs, payroll, available headcount and temp staff, each with actual to date, variance to budget and year-end landing.',
        'A summary sentence written in DAX that updates with the last closed month: what the committee reads first.',
        'Variances by business line and accounting node, with one convention: an overspend is positive, and red.',
        '33 new measures, documented and grouped in one folder, and the yearly average headcount fixed.',
        'The original pages kept and rewired to fictitious data, the pages with names removed, a definitions page added.'
      ],
      decisions: [
        { title: 'Compute the summary instead of typing it', text: 'The management table was retyped in Excel every month from the same extracts as the rest of the report. Computing it removes a manual step and guarantees the summary and the detail say the same thing.' },
        { title: 'An overspend is positive', text: 'In accounting, costs are negative. In a meeting, a positive variance in red reads at a glance; a negative one in red makes people remember the convention. The summary measures turn costs back into positives.' },
        { title: 'The last closed month as the anchor', text: 'The whole page aligns on the last closed month, not today’s date: actual and budget to date cover the same months, and the title says which month it is about.' },
        { title: 'A simple landing', text: 'Actual to date plus the budget of the remaining months. It is not a forecast; it is the committee’s question: if the coming months stay on budget, where does the year end?' }
      ],
      result:
        'The committee opens one page that says, in a sentence and four blocks, where the network stands at month end: actual, variance to budget, landing. For each variance, you drill from business line to accounting node, then down to supplier and purchase order.',
      next: 'Group tables by source rather than by year, so a new year no longer means duplicating tables and measures, and replace the auto-generated dates with a single calendar.'
    }
  },
  {
    slug: 'pilotage-magasins-retail',
    group: 'rand',
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
    slug: 'absenteisme-temps-partiel-sncf',
    group: 'sncf',
    visual: 'shots',
    stack: ['Power BI', 'DAX', 'Power Query', 'SharePoint', 'Power Automate'],
    shots: [
      { src: '/images/absenteisme-sncf/0-origine-revue-perf.webp', fr: 'L’écran d’origine de la revue de performance EST PSL : jours d’absence par agent cumulés depuis janvier, par classe d’arrêt et par regroupement, 2025 face à 2024. Gardé tel quel, rebranché sur le modèle commun.', en: 'The original performance-review screen for EST PSL: absence days per employee since January, by length of leave and by group, 2025 against 2024. Kept as is, rewired to the shared model.' },
      { src: '/images/absenteisme-sncf/1-vue-ensemble.webp', fr: 'La vue d’ensemble ajoutée : les six entités, le cumul depuis janvier face à l’objectif à date et à l’an dernier, les secteurs triés par écart.', en: 'The new overview: all six units, the year-to-date figure against the pro-rated target and last year, sectors ranked by gap.' },
      { src: '/images/absenteisme-sncf/2-temps-partiels.webp', fr: 'Les temps partiels : la vraie date d’échéance, les contrats échus, les ETP perdus par entité, et l’ancien statut affiché à côté du nouveau.', en: 'Part-time contracts: the actual due date, expired contracts, FTEs lost by unit, and the old status shown next to the new one.' },
      { src: '/images/absenteisme-sncf/3-global-origine.webp', fr: 'Une page d’origine : la répartition des absences par motif, en jours et en agents, et la part de l’effectif absent au moins un jour.', en: 'An original page: absences by reason, in days and in employees, and the share of staff absent at least one day.' },
      { src: '/images/absenteisme-sncf/4-tp-origine.webp', fr: 'Le suivi des contrats d’origine : un contrat terminé le 24 septembre y apparaît « dans les délais », avec 296 jours restants.', en: 'The original contract tracker: a contract that ended on 24 September shows as “on time”, with 296 days left.' }
    ],
    fr: {
      kind: 'Power BI',
      sector: 'SNCF, 2025',
      title: 'Absentéisme et temps partiels\u00a0: six rapports RH réunis en un',
      summary:
        'Le suivi de l’absentéisme des six entités de l’établissement Transilien L, A et J et des contrats à temps partiel, pour la DRH : jours d’arrêt par agent face à l’objectif, accidents du travail, congés longs, et les contrats qui arrivent à échéance.',
      role: 'Conception des rapports en alternance pour la DRH, puis audit et refonte pour le portfolio',
      period: '2025',
      caption: 'Captures du rapport refondu, alimenté par des données entièrement fictives.',
      context:
        "La DRH de l'établissement suit l'absentéisme de chacune de ses entités à partir d'extractions RH mensuelles déposées sur SharePoint, et les contrats à temps partiel à partir d'un fichier de suivi : le même que lit le bot Power Automate qui prévient les agents et leurs managers. Chaque entité avait son rapport, présenté en revue de performance.",
      challenge:
        "Six rapports d'absentéisme, un par entité, construits sur le même principe mais chacun avec ses tables, ses noms et ses mesures : de 6 à 31 mesures selon le rapport. Dans quatre d'entre eux, le calendrier automatique s'étendait jusqu'aux dates d'embauche : plus de cinquante ans de dates. L'objectif annuel était comparé au cumul à date sans être ramené aux mois écoulés. Côté temps partiels, l'échéance comptait les mois à 30 jours, ignorait l'année et la date de fin, et se calculait à la date du jour : un contrat terminé depuis un mois pouvait s'afficher « dans les délais ».",
      built: [
        'Un seul modèle pour les six entités : une table d’absences, un référentiel de secteurs et d’UO qui porte l’entité, et un seul calendrier, borné aux années suivies.',
        'Les pages du rapport le plus complet (EST PSL) et du suivi des temps partiels gardées et rebranchées : revue de performance, objectifs, accidents du travail, détail par motif, par secteur et par agent.',
        'Une vue d’ensemble ajoutée : le cumul depuis janvier face à l’objectif à date et à l’an dernier, par entité et par secteur, avec une phrase de synthèse.',
        'Une page temps partiels ajoutée : la vraie date d’échéance, les contrats échus, les ETP perdus par entité, et l’ancien statut à côté du nouveau.',
        'Les mesures d’origine corrigées et documentées, les tables de dates automatiques remplacées par un seul calendrier, une page de définitions.'
      ],
      decisions: [
        {
          title: 'Un modèle, six entités',
          text: "Les six rapports faisaient le même calcul avec des noms différents. Avec une seule table d'absences et l'entité en colonne, une correction se fait une fois, et un filtre suffit pour lire une entité ou les comparer."
        },
        {
          title: 'Lire les cumuls un mois à la fois',
          text: "Les extractions RH donnent des cumuls depuis janvier : additionner deux mois double les jours. Les nouvelles mesures prennent le dernier mois du contexte, borné au dernier mois chargé."
        },
        {
          title: 'Un objectif à date',
          text: "Comparer dix mois d'absences à un objectif de douze mois donne une bonne nouvelle tous les mois d'octobre. L'objectif est ramené aux mois écoulés."
        },
        {
          title: 'Une échéance qui est une date',
          text: "L'échéance est la date de fin, ou le prochain anniversaire si le contrat est reconduit, calculée à la date du fichier et non à l'ouverture du rapport. L'ancien statut reste affiché à côté, pour voir ce qui change."
        }
      ],
      result:
        "La DRH lit les six entités sur une page, avec la même règle partout : jours d'arrêt par agent depuis janvier, écart à l'objectif à date et à l'an dernier, secteurs à regarder en premier. Les contrats à temps partiel à traiter sont listés avec leur vraie échéance, y compris ceux déjà échus que l'ancienne règle ne voyait pas.",
      next: "Ajouter une sécurité par ligne pour que chaque responsable ne voie que son entité, et reprendre dans le modèle les suivis propres à certaines entités : les grèves et les congés pour COT, l'effectif disponible par fonction pour ETP."
    },
    en: {
      kind: 'Power BI',
      sector: 'SNCF, 2025',
      title: 'Absence and part-time work: six HR reports merged into one',
      summary:
        'Absence tracking for the six units of the Transilien L, A and J network and part-time contract follow-up, for HR: sick-leave days per employee against target, workplace accidents, long leave, and contracts coming due.',
      role: 'Built the reports for HR during my work-study, then audited and rebuilt them for this portfolio',
      period: '2025',
      caption: 'Screens of the rebuilt report, fed with entirely fictitious data.',
      context:
        'HR tracks absence for each of its units from monthly HR extracts dropped on SharePoint, and part-time contracts from a tracking file: the same one the Power Automate bot reads to notify employees and their managers. Each unit had its own report, presented in performance reviews.',
      challenge:
        'Six absence reports, one per unit, built on the same idea but each with its own tables, names and measures: from 6 to 31 measures depending on the report. In four of them, the automatic calendar stretched back to hiring dates: over fifty years of dates. The yearly target was compared with the year-to-date figure without being pro-rated. On the part-time side, the due date counted months as 30 days, ignored the year and the end date, and was computed on today’s date: a contract that ended a month ago could show as “on time”.',
      built: [
        'One model for all six units: one absence table, a sector and team reference that carries the unit, and a single calendar limited to the years tracked.',
        'The pages of the most complete report (EST PSL) and of the part-time tracker kept and rewired: performance review, targets, workplace accidents, detail by reason, sector and employee.',
        'A new overview: year to date against the pro-rated target and last year, by unit and by sector, with a summary sentence.',
        'A new part-time page: the actual due date, expired contracts, FTEs lost by unit, and the old status next to the new one.',
        'The original measures fixed and documented, auto-generated date tables replaced by one calendar, a definitions page.'
      ],
      decisions: [
        { title: 'One model, six units', text: 'The six reports ran the same calculation under different names. With one absence table and the unit as a column, a fix is made once, and one filter is enough to read a unit or compare them.' },
        { title: 'Read the cumulative extracts one month at a time', text: 'HR extracts give totals since January: adding two months doubles the days. The new measures take the last month in context, capped at the last month loaded.' },
        { title: 'A pro-rated target', text: 'Comparing ten months of absence with a twelve-month target looks like good news every October. The target is pro-rated to the months elapsed.' },
        { title: 'A due date that is a date', text: 'The due date is the end date, or the next anniversary if the contract renews, computed at the file date rather than when the report is opened. The old status stays next to it, to show what changes.' }
      ],
      result:
        'HR reads all six units on one page, with the same rule everywhere: sick-leave days per employee since January, gap to the pro-rated target and to last year, and the sectors to look at first. Part-time contracts to handle are listed with their actual due date, including expired ones the old rule did not catch.',
      next: 'Add row-level security so each manager sees only their unit, and bring unit-specific tracking into the model: strikes and leave for COT, available staff by role for ETP.'
    }
  }

];

export const CASE_GROUPS = [
  { id: 'rand', fr: 'Groupe Rand', en: 'Groupe Rand' },
  { id: 'sncf', fr: 'SNCF', en: 'SNCF' },
  { id: 'hetic', fr: 'HETIC', en: 'HETIC' }
];

export const caseBySlug = Object.fromEntries(cases.map((c) => [c.slug, c]));
