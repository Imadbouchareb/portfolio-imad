/* Études de cas. Ordre = ordre d'affichage.
   `visual` renvoie au composant de visuels.jsx. `link` : lien GitHub ou démo optionnel. */

export const cases = [
  {
    slug: 'alertes-ventes-comparables',
    visual: 'alerts',
    stack: ['Power BI', 'DAX', 'SAP HANA', 'Power Query'],
    fr: {
      kind: 'Power BI',
      sector: 'Distribution retail, 2026',
      title: 'Alerte quotidienne sur les ventes comparables',
      summary:
        'Un tableau consulté chaque matin par les responsables de centrale : ventes comparables des 7 derniers jours face à N-1, rayons en baisse signalés, détail jusqu’au rayon.',
      role: 'Conception et développement, à la demande du Directeur Général',
      period: 'Été 2026',
      caption: 'Reconstitution avec des données fictives. Le rapport réel est confidentiel.',
      context:
        "Le Directeur Général voulait repérer chaque jour, et non en fin de mois, les centrales dont les ventes décrochent par rapport à l'an dernier, sur les deux activités du groupe : Retail et Confié.",
      challenge:
        "Comparer ce qui est comparable : un rayon absent l'an dernier ou un magasin fermé un jour donné fausse l'indice. Et ne pas ajouter un fichier de plus à actualiser chaque jour : le tableau devait vivre dans les rapports existants.",
      built: [
        'Une page ajoutée aux rapports Retail et Confié existants, connectés à SAP HANA.',
        'Une fenêtre glissante J-1 à J-7 : ventes comparables N, N-1, indice, ligne de total.',
        'Une carte « rayons en alerte » colorée selon le seuil, en vert, orange ou rouge.',
        'Un second volet : choisir une ou plusieurs centrales pour isoler les rayons qui décrochent.'
      ],
      decisions: [
        {
          title: 'Comparabilité au niveau magasin, rayon et jour',
          text: "Un rayon n'entre dans l'indice que s'il a vendu le même jour de la même semaine en N et en N-1. C'est plus strict que la règle hebdomadaire déjà en place, mais c'est la seule qui reste juste sur une fenêtre de 7 jours."
        },
        {
          title: 'Un segment de date déconnecté',
          text: "La date choisie alimente une mesure « jour relatif » (0 à 6). La fenêtre glisse avec la date sans casser les autres filtres du rapport."
        },
        {
          title: 'TREATAS plutôt qu’une relation de plus',
          text: 'La table de comparabilité filtre les mesures de ventes via TREATAS. Le modèle garde ses relations, et les autres pages ne sont pas affectées.'
        },
        {
          title: 'Réutiliser plutôt que créer',
          text: 'Une page dans les rapports existants : un seul rafraîchissement, une seule définition des ventes pour tout le monde.'
        }
      ],
      result:
        "Les responsables de centrale et les chefs de groupe ouvrent ce tableau avant toute autre tâche. Quand un rayon passe en alerte, l'information remonte au chef de groupe et à la Direction Générale le jour même.",
      next: 'Intégrer les seuils d’alerte définitifs et envoyer automatiquement les alertes du jour par e-mail.'
    },
    en: {
      kind: 'Power BI',
      sector: 'Retail distribution, 2026',
      title: 'Daily alert on like-for-like sales',
      summary:
        'A dashboard regional managers open every morning: like-for-like sales for the last 7 days against last year, departments in decline flagged, drill-down to department level.',
      role: 'Design and build, requested by the CEO',
      period: 'Summer 2026',
      caption: 'Recreated with fictional data. The real report is confidential.',
      context:
        'The CEO wanted to spot every day, not at month end, which retail accounts were falling behind last year, across both business lines: Retail and Consignment.',
      challenge:
        'Compare like with like: a department missing last year or a store closed on a given day skews the index. And no new file to refresh every day: the dashboard had to live inside the existing reports.',
      built: [
        'A page added to the existing Retail and Consignment reports, connected to SAP HANA.',
        'A rolling D-1 to D-7 window: like-for-like sales this year, last year, index, total row.',
        'A “departments on alert” card coloured by threshold: green, orange or red.',
        'A second view: pick one or more accounts to isolate the departments falling behind.'
      ],
      decisions: [
        {
          title: 'Comparability at store, department and day level',
          text: 'A department only counts if it sold on the same day of the same week this year and last year. Stricter than the existing weekly rule, but the only one that stays accurate on a 7-day window.'
        },
        {
          title: 'A disconnected date slicer',
          text: 'The chosen date feeds a “relative day” measure (0 to 6). The window moves with the date without breaking the report’s other filters.'
        },
        {
          title: 'TREATAS instead of another relationship',
          text: 'The comparability table filters sales measures through TREATAS. The model keeps its relationships and other pages are unaffected.'
        },
        {
          title: 'Reuse rather than rebuild',
          text: 'One page in the existing reports: a single refresh, a single definition of sales for everyone.'
        }
      ],
      result:
        'Account managers and group heads open this dashboard before anything else. When a department goes on alert, it reaches the group head and the CEO the same day.',
      next: 'Add the final alert thresholds and email the day’s alerts automatically.'
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
