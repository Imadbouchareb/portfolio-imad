/* Textes du site (FR / EN). Les études de cas sont dans cases.js. */

export const SITE = {
  url: 'https://portfolio-imad-theta.vercel.app',
  email: 'imad.bouchareb08@gmail.com',
  linkedin: 'https://www.linkedin.com/in/imad-bouchareb/',
  github: 'https://github.com/Imadbouchareb',
  cv: { fr: '/CV_Imad_BOUCHAREB.pdf', en: '/CV_Imad_BOUCHAREB.pdf' },
  photo: '/photo.webp'
};

export const content = {
  fr: {
    meta: {
      title: 'Imad Bouchareb, Data Analyst Power BI et performance retail',
      description:
        'Data Analyst à Paris, certifié Power BI (PL-300). Rapports de pilotage retail, chaînes de données Python et SAP, analyses test-contrôle en magasin.'
    },
    nav: [
      { label: 'Projets', href: '#projets' },
      { label: 'Parcours', href: '#parcours' },
      { label: 'Compétences', href: '#competences' },
      { label: 'Contact', href: '#contact' }
    ],
    cv: 'Télécharger le CV',
    cvShort: 'CV',
    langSwitch: 'English',
    skip: 'Aller au contenu',
    themeLight: 'Passer en mode clair',
    themeDark: 'Passer en mode sombre',
    hero: {
      name: 'Imad Bouchareb',
      role: 'Data Analyst, Power BI et performance retail',
      pitch:
        "Je suis les ventes de 35 à 40 enseignes retail, des données SAP jusqu'aux rapports de la direction et aux dossiers que les commerciaux présentent en rendez-vous.",
      status: 'À l’écoute d’un CDI en data, à Paris',
      ctaProjects: 'Voir les études de cas',
      ctaContact: 'Me contacter',
      photoAlt: "Portrait d'Imad Bouchareb"
    },
    chart: {
      title: 'CA hebdomadaire vs N-1',
      subtitle: 'Exemple de visuel de suivi, données fictives',
      kpi: 'Cumul période',
      index: 'Indice',
      n: 'N',
      n1: 'N-1',
      weeks: 'Semaines 27 à 40'
    },
    proof: [
      { value: '35–40', label: 'enseignes retail suivies chaque semaine', source: 'Groupe Rand' },
      { value: '5 Go', label: "d'historique SAC converti en Parquet pour cinq rapports Power BI", source: 'Groupe Rand' },
      { value: '−40 %', label: 'de temps de reporting manuel', source: 'SNCF' },
      { value: 'PL-300', label: 'Microsoft Power BI Data Analyst', source: 'Certifié en 2025' }
    ],
    sections: {
      projects: 'Études de cas',
      projectsLead:
        'Quatorze projets livrés, chacun avec son contexte, mes choix techniques et ce que ça a changé. Les données affichées sont fictives.',
      path: 'Parcours',
      skills: 'Compétences',
      skillsLead: "Classées par endroit où je m'en sers, pas par liste de mots-clés.",
      credentials: 'Certifications et formation',
      contact: 'Contact'
    },
    labels: {
      read: "Lire l'étude de cas",
      filterAll: 'Toutes',
      filterLabel: 'Filtrer les études de cas',
      showMore: (n) => `Voir les ${n} autres études de cas`,
      showLess: 'Afficher moins',
      pages: 'Les autres pages du rapport',
      flows: 'Les circuits',
      reports: 'Les rapports alimentés par l’application',
      back: 'Toutes les études de cas',
      role: 'Mon rôle',
      period: 'Période',
      tools: 'Outils',
      context: 'Contexte',
      challenge: 'Enjeu',
      built: "Ce que j'ai construit",
      decisions: 'Décisions techniques',
      result: 'Ce que ça change',
      next: 'Et ensuite',
      nextCase: 'Étude de cas suivante',
      verify: 'Vérifier la certification',
      trainings: 'Formations professionnelles',
      education: 'Diplômes',
      earlier: 'Avant',
      copy: "Copier l'adresse",
      copied: 'Adresse copiée',
      view: 'voir le certificat',
      notFound: "Cette page n'existe pas.",
      home: "Retour à l'accueil"
    },
    jobs: [
      {
        company: 'Groupe Rand',
        place: 'Paris',
        role: 'Data Analyst BI, performance commerciale retail',
        date: 'Depuis janv. 2026',
        points: [
          'Reporting Power BI quotidien, hebdomadaire et mensuel sur 35 à 40 enseignes en Europe et en Amérique du Nord.',
          'Dossiers d’analyse pour 2 à 7 rendez-vous commerciaux de la Direction Générale par semaine.',
          'Migration de cinq rapports Power BI vers les données SAP Analytics Cloud : pipeline Python, DuckDB et Parquet, et une application qui contrôle chaque reporting face à SAC.',
          'Analyses test-contrôle en magasin et tableau d’alertes quotidien sur les ventes comparables.'
        ]
      },
      {
        company: 'SNCF',
        place: 'Paris',
        role: 'Data Scientist RH, en alternance',
        date: 'Sept. 2024 à déc. 2025',
        points: [
          'Deux applications Power Apps en production : affectation en gare et déclaration d’astreintes.',
          'Automatisation du suivi des contrats à temps partiel (Power Automate, Microsoft Lists).',
          'Dashboards Power BI opérationnels et rapports d’absentéisme.'
        ]
      },
      {
        company: 'HETIC',
        place: 'Paris',
        role: "Projet de fin d'études, analyse SAV par LLM",
        date: 'Juil. à nov. 2025',
        points: ['Application SAV en Streamlit au-dessus d’un pipeline LLM : trois écrans par rôle et un score de priorité, détaillés dans les études de cas.']
      }
    ],
    earlier: [
      { role: "Chargé d'étude média", company: 'Institut de Recherche, Sondages et Marketing, Alger', date: '2022–2023', desc: 'Plans médias, analyse d’audience, rapports Power BI, encadrement d’une équipe de veille.' },
      { role: 'Stage data', company: 'CREAD, Alger', date: '2022', desc: 'Prévision du PIB par séries temporelles (ARMA, Box-Jenkins), précision de ±5 %.' }
    ],
    skills: [
      { title: 'Business Intelligence', items: 'Power BI (PL-300), DAX, Power Query (M), SAP Analytics Cloud, Excel', proof: 'Tous les jours chez Groupe Rand : modèles, mesures, rapports de direction.' },
      { title: 'Préparation des données', items: 'Python (pandas, DuckDB), Parquet, SQL, SAP HANA, SQL Server, pytest', proof: 'Pipeline de ventes, connexion aux données SAP et contrôle des reportings chez Groupe Rand.' },
      { title: 'Power Platform', items: 'Power Apps (Canvas, Power Fx), Power Automate, Dataverse, SharePoint', proof: 'Deux applications en production à la SNCF.' },
      { title: 'IA appliquée', items: 'LLM, RAG, ChromaDB, LangChain, Streamlit', proof: 'Projet SAV à HETIC : pipeline LLM, application Streamlit et rapport Power BI.' }
    ],
    cert: {
      name: 'Microsoft Certified: Power BI Data Analyst Associate',
      code: 'PL-300',
      date: 'Novembre 2025',
      desc: 'Préparation, modélisation et visualisation des données dans Power BI.',
      link: 'https://learn.microsoft.com/fr-fr/users/imadbouchareb-5714/credentials/95f829197097baa7'
    },
    trainings: [
      { name: 'Azure AI Essentials', by: 'Microsoft et LinkedIn', date: 'Déc. 2025', link: '/certificats/Azure_AI_Essentials.pdf' },
      { name: 'Dataverse, les bases pratiques', by: 'SNCF', date: 'Mars 2025', link: '/certificats/Dataverse_Maker.pdf' },
      { name: 'Power Apps avancé', by: 'SNCF', date: 'Mars 2025', link: '/certificats/PowerApps_Avance.pdf' },
      { name: 'SharePoint expert, niveau 3', by: 'SNCF', date: 'Févr. 2025', link: '/certificats/SharePoint_Expert.pdf' },
      { name: 'Langage DAX dans Power BI', by: 'SNCF', date: 'Févr. 2025', link: '/certificats/DAX_PowerBI.pdf' },
      { name: 'Power Automate niveau 2', by: 'SNCF', date: 'Déc. 2024', link: '/certificats/PowerAutomate_N2.pdf' },
      { name: 'SharePoint avancé, niveau 2', by: 'SNCF', date: 'Nov. 2024', link: '/certificats/SharePoint_Avance.pdf' },
      { name: 'Power BI expert', by: 'SNCF', date: 'Oct. 2024', link: '/certificats/PowerBI_Expert.pdf' }
    ],
    degrees: [
      { title: 'Master Data et IA', school: 'HETIC, Paris', year: '2025' },
      { title: 'Master 1 Ingénierie mathématique et data science', school: 'Université de Haute-Alsace, Mulhouse', year: '2024' },
      { title: 'Licence et Master Recherche opérationnelle, management du risque et négociation', school: 'USTHB, Alger', detail: 'Mathématiques appliquées : probabilités, statistiques, optimisation, modélisation', year: '2022' }
    ],
    languages: 'Langues : français (C2), anglais professionnel.',
    contact: {
      title: 'Vous recrutez un Data Analyst en CDI ? Parlons-en.',
      lead: 'Le plus simple est un e-mail. Le CV est téléchargeable en haut de page.',
      built: 'Conçu et développé par moi, avec React, Vite et Tailwind CSS.'
    }
  },

  en: {
    meta: {
      title: 'Imad Bouchareb, Data Analyst, Power BI and retail performance',
      description:
        'Paris-based Data Analyst, Power BI certified (PL-300). Retail performance reporting, Python and SAP data pipelines, in-store test and control analysis.'
    },
    nav: [
      { label: 'Projects', href: '#projets' },
      { label: 'Experience', href: '#parcours' },
      { label: 'Skills', href: '#competences' },
      { label: 'Contact', href: '#contact' }
    ],
    cv: 'Download CV',
    cvShort: 'CV',
    langSwitch: 'Français',
    skip: 'Skip to content',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
    hero: {
      name: 'Imad Bouchareb',
      role: 'Data Analyst, Power BI and retail performance',
      pitch:
        'I track sales for 35 to 40 retail chains, from SAP data to leadership reports and the packs sales teams present in client meetings.',
      status: 'Open to a permanent data role in Paris',
      ctaProjects: 'See case studies',
      ctaContact: 'Get in touch',
      photoAlt: 'Portrait of Imad Bouchareb'
    },
    chart: {
      title: 'Weekly sales vs last year',
      subtitle: 'Sample tracking visual, fictional data',
      kpi: 'Period total',
      index: 'Index',
      n: 'This year',
      n1: 'Last year',
      weeks: 'Weeks 27 to 40'
    },
    proof: [
      { value: '35–40', label: 'retail chains tracked weekly', source: 'Groupe Rand' },
      { value: '5 GB', label: 'of SAC history converted to Parquet for five Power BI reports', source: 'Groupe Rand' },
      { value: '−40%', label: 'manual reporting time', source: 'SNCF' },
      { value: 'PL-300', label: 'Microsoft Power BI Data Analyst', source: 'Certified 2025' }
    ],
    sections: {
      projects: 'Case studies',
      projectsLead: 'Fourteen delivered projects, each with its context, my technical choices and what changed. All figures shown are fictional.',
      path: 'Experience',
      skills: 'Skills',
      skillsLead: 'Grouped by where I actually use them.',
      credentials: 'Certifications and education',
      contact: 'Contact'
    },
    labels: {
      read: 'Read the case study',
      filterAll: 'All',
      filterLabel: 'Filter case studies',
      showMore: (n) => `See the other ${n} case studies`,
      showLess: 'Show less',
      pages: 'Other report pages',
      flows: 'How it flows',
      reports: 'The reports fed by the app',
      back: 'All case studies',
      role: 'My role',
      period: 'Period',
      tools: 'Tools',
      context: 'Context',
      challenge: 'Challenge',
      built: 'What I built',
      decisions: 'Technical decisions',
      result: 'What changed',
      next: 'Next steps',
      nextCase: 'Next case study',
      verify: 'Verify certification',
      trainings: 'Professional training',
      education: 'Degrees',
      earlier: 'Earlier',
      copy: 'Copy address',
      copied: 'Address copied',
      view: 'view certificate',
      notFound: 'This page does not exist.',
      home: 'Back to home'
    },
    jobs: [
      {
        company: 'Groupe Rand',
        place: 'Paris',
        role: 'BI Data Analyst, retail sales performance',
        date: 'Since Jan. 2026',
        points: [
          'Daily, weekly and monthly Power BI reporting on 35 to 40 retail chains in Europe and North America.',
          'Analysis packs for 2 to 7 leadership client meetings a week.',
          'Moved five Power BI reports onto SAP Analytics Cloud data: a Python, DuckDB and Parquet pipeline, and an app that checks every reporting against SAC.',
          'In-store test and control analysis, and a daily alert dashboard on like-for-like sales.'
        ]
      },
      {
        company: 'SNCF',
        place: 'Paris',
        role: 'HR Data Scientist, work-study',
        date: 'Sept. 2024 to Dec. 2025',
        points: [
          'Two Power Apps in production: station dispatch and on-call declarations.',
          'Automated part-time contract follow-up (Power Automate, Microsoft Lists).',
          'Operational Power BI dashboards and absenteeism reports.'
        ]
      },
      {
        company: 'HETIC',
        place: 'Paris',
        role: 'Final project, LLM customer service analysis',
        date: 'July to Nov. 2025',
        points: ['Streamlit support app on top of an LLM pipeline: three role-based screens and a priority score, detailed in the case studies.']
      }
    ],
    earlier: [
      { role: 'Media research analyst', company: 'Institut de Recherche, Sondages et Marketing, Algiers', date: '2022–2023', desc: 'Media plans, audience analysis, Power BI reports, led a monitoring team.' },
      { role: 'Data intern', company: 'CREAD, Algiers', date: '2022', desc: 'GDP forecasting with time series (ARMA, Box-Jenkins), ±5% accuracy.' }
    ],
    skills: [
      { title: 'Business Intelligence', items: 'Power BI (PL-300), DAX, Power Query (M), SAP Analytics Cloud, Excel', proof: 'Daily at Groupe Rand: models, measures, leadership reports.' },
      { title: 'Data preparation', items: 'Python (pandas, DuckDB), Parquet, SQL, SAP HANA, SQL Server, pytest', proof: 'Sales pipeline, SAP data connections and reporting checks at Groupe Rand.' },
      { title: 'Power Platform', items: 'Power Apps (Canvas, Power Fx), Power Automate, Dataverse, SharePoint', proof: 'Two apps in production at SNCF.' },
      { title: 'Applied AI', items: 'LLM, RAG, ChromaDB, LangChain, Streamlit', proof: 'Customer service project at HETIC: LLM pipeline, Streamlit app and Power BI report.' }
    ],
    cert: {
      name: 'Microsoft Certified: Power BI Data Analyst Associate',
      code: 'PL-300',
      date: 'November 2025',
      desc: 'Preparing, modelling and visualising data in Power BI.',
      link: 'https://learn.microsoft.com/en-us/users/imadbouchareb-5714/credentials/95f829197097baa7'
    },
    trainings: [
      { name: 'Azure AI Essentials', by: 'Microsoft and LinkedIn', date: 'Dec. 2025', link: '/certificats/Azure_AI_Essentials.pdf' },
      { name: 'Dataverse fundamentals', by: 'SNCF', date: 'Mar. 2025', link: '/certificats/Dataverse_Maker.pdf' },
      { name: 'Advanced Power Apps', by: 'SNCF', date: 'Mar. 2025', link: '/certificats/PowerApps_Avance.pdf' },
      { name: 'SharePoint expert, level 3', by: 'SNCF', date: 'Feb. 2025', link: '/certificats/SharePoint_Expert.pdf' },
      { name: 'DAX in Power BI', by: 'SNCF', date: 'Feb. 2025', link: '/certificats/DAX_PowerBI.pdf' },
      { name: 'Power Automate level 2', by: 'SNCF', date: 'Dec. 2024', link: '/certificats/PowerAutomate_N2.pdf' },
      { name: 'Advanced SharePoint, level 2', by: 'SNCF', date: 'Nov. 2024', link: '/certificats/SharePoint_Avance.pdf' },
      { name: 'Power BI expert', by: 'SNCF', date: 'Oct. 2024', link: '/certificats/PowerBI_Expert.pdf' }
    ],
    degrees: [
      { title: 'MSc Data and AI', school: 'HETIC, Paris', year: '2025' },
      { title: 'MSc (year 1) Applied Mathematics and Data Science', school: 'Université de Haute-Alsace, Mulhouse', year: '2024' },
      { title: 'BSc and MSc Operations Research, Risk Management and Negotiation', school: 'USTHB, Algiers', detail: 'Applied mathematics: probability, statistics, optimisation, modelling', year: '2022' }
    ],
    languages: 'Languages: French (C2), professional English.',
    contact: {
      title: 'Hiring a Data Analyst for a permanent role? Let’s talk.',
      lead: 'Email is the quickest way. My CV is available at the top of the page.',
      built: 'Designed and built by me, with React, Vite and Tailwind CSS.'
    }
  }
};
