import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  Cloud,
  Brain,
  Workflow,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  ArrowDown,
  Menu,
  X,
  Globe,
  Sun,
  Moon,
  Download,
  Layers,
  Smartphone,
  Clock,
  ShoppingBag,
  Bot,
  ArrowUpRight
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  CONTENU                                                            */
/* ------------------------------------------------------------------ */

const content = {
  fr: {
    nav: [
      { label: 'À propos', href: '#about' },
      { label: 'Compétences', href: '#skills' },
      { label: 'Expériences', href: '#experiences' },
      { label: 'Projets', href: '#projects' },
      { label: 'Certifications', href: '#certifications' },
      { label: 'Formation', href: '#education' },
      { label: 'Contact', href: '#contact' }
    ],
    downloadCV: 'Télécharger le CV',
    hero: {
      status: 'Ouvert aux opportunités',
      role: 'Data Analyst BI · Data Scientist',
      pitch:
        "Je conçois des systèmes de reporting et d'automatisation qui transforment des données dispersées en décisions rapides et fiables.",
      btnProjects: 'Voir mes projets',
      btnContact: 'Me contacter'
    },
    metrics: [
      { value: '40', unit: 'enseignes', label: 'suivies en reporting quotidien' },
      { value: '−40', unit: '%', label: 'de temps de reporting manuel' },
      { value: '99,8', unit: '%', label: 'de fiabilité des données' },
      { value: '2', unit: 'apps', label: 'Power Apps déployées en production' }
    ],
    sections: {
      about: 'À propos',
      skills: 'Compétences',
      experiences: 'Expériences',
      projects: 'Projets',
      certifications: 'Certifications',
      education: 'Formation',
      contact: 'Contact'
    },
    about: {
      lead: "Mon parcours est à l'image de ma méthode de travail : structuré, analytique, orienté résultat.",
      p1: "Diplômé d'un Master 2 Data & IA et issu d'une formation en ingénierie mathématique et recherche opérationnelle, j'ai forgé mon esprit d'analyse sur la modélisation complexe. Mais les mathématiques ne prennent leur valeur que lorsqu'elles résolvent un problème concret.",
      p2: "Aujourd'hui Data Analyst BI certifié Microsoft Power BI (PL-300), je combine cette rigueur avec le cloud (Azure, AWS) et le machine learning. De l'automatisation de processus RH à la SNCF à l'analyse de performance retail multi-enseignes chez Groupe Rand, en passant par des pipelines NLP, mon objectif reste le même : supprimer les tâches manuelles chronophages et faire parler les données."
    },
    skills: {
      lead: 'Compétences construites sur des projets professionnels et académiques.',
      groups: [
        {
          icon: <BarChart3 size={18} />,
          title: 'Business Intelligence',
          items: [
            'Power BI — certifié PL-300',
            'DAX & Power Query (M)',
            'SAP Analytics Cloud',
            'Tableau',
            'Excel / VBA'
          ],
          note: 'Modélisation en étoile, mesures DAX complexes, optimisation de rapports, KPIs stratégiques.'
        },
        {
          icon: <Workflow size={18} />,
          title: 'Power Platform',
          items: [
            'Power Apps (Canvas, Model-driven, Power Fx)',
            'Power Automate',
            'Dataverse',
            'SharePoint'
          ],
          note: "Applications métier multi-rôles, workflows d'approbation, automatisation de processus RH."
        },
        {
          icon: <Brain size={18} />,
          title: 'Data Science',
          items: [
            'Python, R, Java, Matlab',
            'Machine Learning & Deep Learning',
            'NLP, LLM, RAG',
            'Séries temporelles & économétrie'
          ],
          note: 'Modélisation prédictive (régression, ARMA), LLM (Mistral, Llama), RAG avec embeddings BERT.'
        },
        {
          icon: <Cloud size={18} />,
          title: 'Data & Cloud',
          items: ['SQL — MySQL, SQL Server, PostgreSQL', 'Microsoft Azure', 'AWS', 'Git & GitHub'],
          note: 'Pipelines de données, code reviews, gestion de projet Agile Scrum/Kanban.'
        }
      ]
    },
    experiences: {
      lead: 'Parcours et réalisations.',
      jobs: [
        {
          company: 'Groupe Rand',
          location: 'Paris',
          role: 'Data Analyst BI — Retail & Performance Commerciale',
          date: 'Jan. 2026 — Présent',
          missions: [
            "Reporting Power BI multi-fréquences (quotidien, hebdomadaire, mensuel) sur un portefeuille de 35 à 40 enseignes retail : CA comparable, marges, indices rayon, performance par pays et par magasin.",
            "Analyse comparative N/N-1 : identification des leviers explicatifs (mix produit, performance promotionnelle, saisonnalité, météo) pour orienter les décisions commerciales.",
            "Élaboration des dossiers d'analyse pour les rendez-vous commerciaux de la Direction Générale (2 à 7 par semaine) : CA/m², palmarès Top/Flop 20, analyse par collection et par rayon.",
            "Analyses saisonnières fashion retail : collections Printemps-Été / Automne-Hiver, analyse des soldes en 4 jalons.",
            "Maintenance et évolution des modèles Power BI : ajout de KPIs, optimisation DAX, refonte des pipelines Power Query (M).",
            "Gestion des demandes ad hoc multi-services et coordination en binôme via Jira."
          ],
          stack: ['Power BI', 'DAX', 'Power Query (M)', 'SAP Analytics Cloud', 'SQL', 'Jira']
        },
        {
          company: 'SNCF',
          location: 'Paris',
          role: 'Data Scientist RH — Alternance',
          date: 'Sept. 2024 — Déc. 2025',
          missions: [
            "Développement d'une application Power Apps pour l'affectation du personnel en gare (Dataverse, SharePoint).",
            "Création d'une application de déclaration d'astreintes multi-rôles avec workflows conditionnels et e-mails personnalisés.",
            "Automatisation du pilotage des contrats temps partiels : notifications e-mail, enregistrements Microsoft Lists.",
            "Conception de dashboards Power BI opérationnels multi-secteurs et de rapports d'absentéisme (mesures DAX avancées)."
          ],
          impact:
            "−40 % de temps de reporting manuel · suppression totale des impressions papier · 99,8 % de fiabilité des données",
          stack: ['Power Apps', 'Power Automate', 'Dataverse', 'SharePoint', 'Power BI', 'DAX']
        },
        {
          company: 'HETIC',
          location: 'Montreuil',
          role: "Projet de fin d'études — Système d'analyse SAV avec LLM",
          date: 'Juil. 2025 — Nov. 2025',
          missions: [
            "Pipeline NLP d'analyse automatique de tweets : classification multi-tâches (sentiment, urgence, gravité) via LLM.",
            'Système RAG avec embeddings BERT pour la recherche contextuelle.',
            'Chatbot à recherche vectorielle (ChromaDB, LangChain, Llama 3.3) et 3 interfaces Streamlit.',
            'Gestion de projet Agile Scrum/Kanban, code reviews Git/GitHub.'
          ],
          impact: '−70 % de coûts API grâce à une couche de cache SQLite',
          stack: ['Python', 'LangChain', 'PyTorch', 'ChromaDB', 'Streamlit', 'Mistral AI']
        },
        {
          company: 'Institut de Recherche, Sondages et Marketing',
          location: 'Alger',
          role: "Chargé d'étude média",
          date: 'Déc. 2022 — Août 2023',
          missions: [
            "Élaboration de plans médias sur mesure et optimisation budgétaire pour maximiser le ROI (ciblage chaînes, créneaux, formats).",
            "Analyse des données d'audience via Power Query, SPSS et Excel.",
            'Conception de rapports Power BI dynamiques avec KPIs et insights stratégiques.',
            "Pilotage d'une équipe de chargés de veille."
          ],
          stack: ['Power BI', 'Power Query', 'SPSS', 'Excel']
        },
        {
          company: 'CREAD',
          location: 'Alger',
          role: "Stagiaire data — Projet de fin d'études",
          date: 'Févr. 2022 — Juil. 2022',
          missions: [
            "Modèles de régression linéaire simple et multiple (R² jusqu'à 0,87).",
            "Pipeline d'analyse de séries temporelles (ARMA / Box-Jenkins).",
            "Prévision du PIB via méthodes de lissage exponentiel et Box-Jenkins (RMSE inférieur à l'écart-type)."
          ],
          impact: 'Précision de prévision de ±5 % après validation statistique',
          stack: ['R', 'Économétrie', 'Séries temporelles']
        }
      ]
    },
    projects: {
      lead: 'Une sélection de solutions conçues et déployées en environnement professionnel.',
      disclaimer: 'Données anonymisées à des fins de démonstration.',
      list: [
        {
          title: 'Pilotage de la performance retail multi-enseignes',
          category: 'Power BI · Retail',
          icon: <ShoppingBag size={28} />,
          description:
            "Suite de rapports Power BI pour le suivi commercial quotidien d'un portefeuille de 35 à 40 enseignes retail, du magasin au comité de direction.",
          details: [
            'Modèle en étoile alimenté par des pipelines Power Query (M) refondus',
            'Mesures DAX de comparaison N/N-1, CA comparable, CA/m², indices rayon',
            'Analyse saisonnière PE/AH et suivi des soldes en 4 jalons',
            'Rapports multi-fréquences : quotidien, hebdomadaire, mensuel'
          ],
          techStack: ['Power BI', 'DAX', 'Power Query (M)', 'SQL'],
          image: '/images/projet-retail.png',
          anonymized: true
        },
        {
          title: "Système d'analyse SAV intelligent (LLM + RAG)",
          category: 'NLP · LLM',
          icon: <Bot size={28} />,
          description:
            "Pipeline d'analyse automatique de messages clients : classification multi-tâches par LLM et chatbot de support à recherche vectorielle.",
          details: [
            'Classification sentiment / urgence / gravité via Mistral AI et Ollama',
            'RAG avec embeddings BERT et base vectorielle ChromaDB',
            'Trois interfaces Streamlit : dashboards, KPIs temps réel, chatbot',
            'Cache SQLite réduisant les coûts API de 70 %'
          ],
          techStack: ['Python', 'LangChain', 'PyTorch', 'ChromaDB', 'Streamlit'],
          image: '/images/projet-llm.png'
        },
        {
          title: 'Digitalisation du dispatch et de la gestion RH',
          category: 'Power Apps · Dataverse',
          icon: <Layers size={28} />,
          description:
            "Solution d'affectation des agents en gare remplaçant un processus papier par une gestion temps réel sur tablette.",
          details: [
            'Architecture Dataverse multi-entités (agents, gares, secteurs)',
            'Interface tablet-first pour les managers terrain',
            'Gestion du cycle de vie applicatif (ALM) avec solutions gérées'
          ],
          techStack: ['Power Apps', 'Dataverse', 'ALM'],
          image: '/images/projet-dispatch.png'
        },
        {
          title: 'Gestion des astreintes et flux de validation',
          category: 'Automatisation',
          icon: <Workflow size={28} />,
          description:
            "Automatisation du cycle de déclaration des astreintes, de la saisie terrain à la validation RH multi-niveaux avec gestion des rejets.",
          details: [
            '7 flux Power Automate (approbations, boucles, conditions)',
            "Deep linking : accès direct à l'application depuis un e-mail",
            'Journalisation et sécurisation des données sensibles'
          ],
          techStack: ['Power Automate', 'SharePoint', 'Power Apps'],
          image: '/images/projet-astreintes.png'
        },
        {
          title: 'Architecture mobile offline-first',
          category: 'Expertise technique',
          icon: <Smartphone size={28} />,
          description:
            'Capacités hors-ligne permettant la continuité de service des agents dans les zones sans réseau (sous-sols, quais).',
          details: [
            'Synchronisation asynchrone (LoadData / SaveData)',
            'Gestion des collections locales et résolution des conflits',
            'Optimisation des performances sur tablette'
          ],
          techStack: ['Power Apps', 'Offline Mode', 'Performance'],
          image: '/images/projet-offline.png'
        },
        {
          title: 'Bot de monitoring RH proactif',
          category: 'RPA',
          icon: <Clock size={28} />,
          description:
            'Surveillance quotidienne de la conformité des contrats temps partiel, éliminant les oublis de renouvellement.',
          details: [
            'Flux planifiés quotidiens',
            'Logique anti-spam sur les notifications',
            'Intégration Excel Online et SharePoint'
          ],
          techStack: ['Power Automate', 'Scheduled Flows', 'Excel Online'],
          image: '/images/projet-monitoring.png'
        }
      ]
    },
    certifications: {
      lead: 'Certifications et formations professionnelles validant mon expertise.',
      viewLabel: 'Voir',
      all: [
        {
          name: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
          issuer: 'Microsoft',
          date: 'Nov. 2025',
          featured: true,
          desc: 'Préparation, modélisation et visualisation des données pour maximiser la valeur métier.',
          link: 'https://learn.microsoft.com/fr-fr/users/imadbouchareb-5714/credentials/95f829197097baa7'
        },
        {
          name: 'Azure AI Essentials',
          issuer: 'Microsoft & LinkedIn',
          date: 'Déc. 2025',
          desc: "Fondamentaux de l'IA, du machine learning et des services cognitifs sur Azure.",
          link: '/certificats/Azure AI Essentials.pdf'
        },
        {
          name: 'Dataverse : les bases pratiques (Maker)',
          issuer: 'SNCF',
          date: 'Mars 2025',
          desc: "Création et sécurisation d'environnements, modélisation de données, architectures de sécurité (RBAC).",
          link: '/certificats/Dataverse_Maker.pdf'
        },
        {
          name: 'Power Apps avancé',
          issuer: 'SNCF',
          date: 'Mars 2025',
          desc: 'Optimisation des requêtes, composants réutilisables, deep linking, expressions régulières.',
          link: '/certificats/PowerApps_Avance.pdf'
        },
        {
          name: "SharePoint expert (niveau 3) : conception d'un site",
          issuer: 'SNCF',
          date: 'Févr. 2025',
          desc: 'Autorisations fines, personnalisation des affichages, gestion des audiences, intégration Power Platform.',
          link: '/certificats/SharePoint_Expert.pdf'
        },
        {
          name: 'Langage DAX dans Power BI',
          issuer: 'SNCF',
          date: 'Févr. 2025',
          desc: 'Mesures complexes, optimisation des calculs, time intelligence avancée.',
          link: '/certificats/DAX_PowerBI.pdf'
        },
        {
          name: 'Power Automate niveau 2 : atelier pratique',
          issuer: 'SNCF',
          date: 'Déc. 2024',
          desc: 'Conception de flux automatisés complexes, gestion des erreurs, traduction des processus métier.',
          link: '/certificats/PowerAutomate_N2.pdf'
        },
        {
          name: 'SharePoint avancé (niveau 2)',
          issuer: 'SNCF',
          date: 'Nov. 2024',
          desc: "Administration de site, gestion des bibliothèques, affichages personnalisés, workflows d'approbation.",
          link: '/certificats/SharePoint_Avance.pdf'
        },
        {
          name: 'Power BI expert',
          issuer: 'SNCF',
          date: 'Oct. 2024',
          desc: 'ETL avancé avec Power Query (M), modélisation en étoile, conception de rapports interactifs.',
          link: '/certificats/PowerBI_Expert.pdf'
        }
      ]
    },
    education: {
      lead: 'Parcours académique.',
      degrees: [
        {
          title: 'Master Data & IA',
          school: 'HETIC',
          location: 'Montreuil, France',
          year: '2024 — 2025',
          desc: 'Formation hybride technique et stratégique : architecture cloud, IA avancée, pilotage de la performance data (FinOps, qualité).',
          tags: ['Cloud & architecture', 'ML & NLP', 'Réseaux de neurones', 'BI & reporting', 'FinOps', 'Agile']
        },
        {
          title: 'Master 1 Ingénierie mathématique et data science',
          school: 'Université de Haute-Alsace',
          location: 'Mulhouse, France',
          year: '2023 — 2024',
          desc: 'Formation duale en mathématiques appliquées (optimisation, statistiques sous R) et programmation orientée objet, avec une spécialisation BI et architecture de données.',
          tags: [
            'Maths & optimisation',
            'POO (C++/Java/Python)',
            'Cloud computing',
            'BI & data warehouse',
            'SQL',
            'Statistiques'
          ]
        },
        {
          title: 'Master Recherche opérationnelle, management du risque et négociation',
          school: 'USTHB',
          location: 'Alger, Algérie',
          year: '2017 — 2022',
          desc: 'Cursus de 5 ans, de la licence (mathématiques-informatique, algorithmique, probabilités-statistiques) au master spécialisé en gestion des risques, théorie des jeux et optimisation stochastique.',
          tags: [
            'Recherche opérationnelle',
            'Processus stochastiques',
            'Théorie des jeux',
            'Aide à la décision',
            'Gestion des risques'
          ]
        }
      ]
    },
    contact: {
      title: 'Travaillons ensemble',
      lead: 'À la recherche de nouveaux défis en data analysis, business intelligence et automatisation.',
      rights: 'Tous droits réservés.',
      location: 'Paris, France',
      built: 'Conçu et développé par mes soins — React, Vite, Tailwind CSS.'
    }
  },

  /* ---------------------------------------------------------------- */

  en: {
    nav: [
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Experience', href: '#experiences' },
      { label: 'Projects', href: '#projects' },
      { label: 'Certifications', href: '#certifications' },
      { label: 'Education', href: '#education' },
      { label: 'Contact', href: '#contact' }
    ],
    downloadCV: 'Download CV',
    hero: {
      status: 'Open to opportunities',
      role: 'BI Data Analyst · Data Scientist',
      pitch:
        'I build reporting and automation systems that turn scattered data into fast, reliable decisions.',
      btnProjects: 'View my work',
      btnContact: 'Get in touch'
    },
    metrics: [
      { value: '40', unit: 'retail brands', label: 'covered by daily reporting' },
      { value: '−40', unit: '%', label: 'manual reporting time' },
      { value: '99.8', unit: '%', label: 'data reliability' },
      { value: '2', unit: 'apps', label: 'Power Apps shipped to production' }
    ],
    sections: {
      about: 'About',
      skills: 'Skills',
      experiences: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      education: 'Education',
      contact: 'Contact'
    },
    about: {
      lead: 'My background mirrors the way I work: structured, analytical, outcome-driven.',
      p1: "With a Master's degree in Data & AI and a foundation in mathematical engineering and operations research, I sharpened my analytical thinking on complex modelling. But mathematics only earns its keep when it solves a concrete problem.",
      p2: 'Today, as a Microsoft Power BI certified (PL-300) BI Data Analyst, I pair that rigour with the cloud (Azure, AWS) and machine learning. From automating HR processes at SNCF to multi-brand retail performance analysis at Groupe Rand, by way of NLP pipelines, the goal stays the same: remove time-consuming manual work and let the data speak.'
    },
    skills: {
      lead: 'Skills built through professional and academic projects.',
      groups: [
        {
          icon: <BarChart3 size={18} />,
          title: 'Business Intelligence',
          items: [
            'Power BI — PL-300 certified',
            'DAX & Power Query (M)',
            'SAP Analytics Cloud',
            'Tableau',
            'Excel / VBA'
          ],
          note: 'Star schema modelling, complex DAX measures, report optimisation, strategic KPIs.'
        },
        {
          icon: <Workflow size={18} />,
          title: 'Power Platform',
          items: [
            'Power Apps (Canvas, Model-driven, Power Fx)',
            'Power Automate',
            'Dataverse',
            'SharePoint'
          ],
          note: 'Multi-role business apps, approval workflows, HR process automation.'
        },
        {
          icon: <Brain size={18} />,
          title: 'Data Science',
          items: [
            'Python, R, Java, Matlab',
            'Machine learning & deep learning',
            'NLP, LLM, RAG',
            'Time series & econometrics'
          ],
          note: 'Predictive modelling (regression, ARMA), LLMs (Mistral, Llama), RAG with BERT embeddings.'
        },
        {
          icon: <Cloud size={18} />,
          title: 'Data & Cloud',
          items: ['SQL — MySQL, SQL Server, PostgreSQL', 'Microsoft Azure', 'AWS', 'Git & GitHub'],
          note: 'Data pipelines, code reviews, Agile Scrum/Kanban delivery.'
        }
      ]
    },
    experiences: {
      lead: 'Career and achievements.',
      jobs: [
        {
          company: 'Groupe Rand',
          location: 'Paris',
          role: 'BI Data Analyst — Retail & Commercial Performance',
          date: 'Jan. 2026 — Present',
          missions: [
            'Multi-frequency Power BI reporting (daily, weekly, monthly) across a portfolio of 35–40 retail brands: like-for-like revenue, margins, category indices, performance by country and store.',
            'Year-on-year comparative analysis: identifying the drivers behind performance (product mix, promotional activity, seasonality, weather) to inform commercial decisions.',
            'Analysis packs for executive commercial meetings (2–7 per week): revenue per m², Top/Flop 20 rankings, breakdowns by collection and category.',
            'Seasonal fashion retail analysis: Spring-Summer and Autumn-Winter collections, sale periods tracked across four milestones.',
            'Maintenance and evolution of Power BI models: new KPIs, DAX optimisation, Power Query (M) pipeline rework.',
            'Handling ad hoc requests across departments and coordinating work in pairs through Jira.'
          ],
          stack: ['Power BI', 'DAX', 'Power Query (M)', 'SAP Analytics Cloud', 'SQL', 'Jira']
        },
        {
          company: 'SNCF',
          location: 'Paris',
          role: 'HR Data Scientist — Apprenticeship',
          date: 'Sept. 2024 — Dec. 2025',
          missions: [
            'Built a Power Apps solution for station staff assignment (Dataverse, SharePoint).',
            'Created a multi-role on-call declaration app with conditional workflows and tailored email notifications.',
            'Automated part-time contract monitoring: email alerts and Microsoft Lists records.',
            'Designed operational Power BI dashboards across business units and absenteeism reports using advanced DAX measures.'
          ],
          impact:
            '−40% manual reporting time · paper processes fully eliminated · 99.8% data reliability',
          stack: ['Power Apps', 'Power Automate', 'Dataverse', 'SharePoint', 'Power BI', 'DAX']
        },
        {
          company: 'HETIC',
          location: 'Montreuil',
          role: 'Final year project — LLM-powered customer service analysis',
          date: 'July 2025 — Nov. 2025',
          missions: [
            'NLP pipeline for automated tweet analysis: multi-task classification (sentiment, urgency, severity) using LLMs.',
            'RAG system with BERT embeddings for contextual retrieval.',
            'Chatbot with vector search (ChromaDB, LangChain, Llama 3.3) and three Streamlit interfaces.',
            'Agile Scrum/Kanban delivery with Git/GitHub code reviews.'
          ],
          impact: '−70% API costs through an SQLite caching layer',
          stack: ['Python', 'LangChain', 'PyTorch', 'ChromaDB', 'Streamlit', 'Mistral AI']
        },
        {
          company: 'Institut de Recherche, Sondages et Marketing',
          location: 'Algiers',
          role: 'Media Research Analyst',
          date: 'Dec. 2022 — Aug. 2023',
          missions: [
            'Built tailored media plans and optimised budgets to maximise advertising ROI (channel, slot and format targeting).',
            'Analysed audience data using Power Query, SPSS and Excel.',
            'Designed dynamic Power BI reports with KPIs and strategic insights.',
            'Led a team of media monitoring officers.'
          ],
          stack: ['Power BI', 'Power Query', 'SPSS', 'Excel']
        },
        {
          company: 'CREAD',
          location: 'Algiers',
          role: 'Data intern — Final year project',
          date: 'Feb. 2022 — July 2022',
          missions: [
            'Simple and multiple linear regression models (R² up to 0.87).',
            'Time series analysis pipeline (ARMA / Box-Jenkins).',
            'GDP forecasting using exponential smoothing and Box-Jenkins methods (RMSE below standard deviation).'
          ],
          impact: '±5% forecast accuracy after statistical validation',
          stack: ['R', 'Econometrics', 'Time series']
        }
      ]
    },
    projects: {
      lead: 'A selection of solutions designed and shipped in professional environments.',
      disclaimer: 'Data anonymised for demonstration purposes.',
      list: [
        {
          title: 'Multi-brand retail performance reporting',
          category: 'Power BI · Retail',
          icon: <ShoppingBag size={28} />,
          description:
            'A Power BI report suite driving daily commercial monitoring for a portfolio of 35–40 retail brands, from store level up to the executive committee.',
          details: [
            'Star schema fed by reworked Power Query (M) pipelines',
            'DAX measures for year-on-year comparison, like-for-like revenue, revenue per m², category indices',
            'Seasonal collection analysis and sale periods tracked across four milestones',
            'Multi-frequency delivery: daily, weekly, monthly'
          ],
          techStack: ['Power BI', 'DAX', 'Power Query (M)', 'SQL'],
          image: '/images/projet-retail.png',
          anonymized: true
        },
        {
          title: 'Intelligent customer service analysis (LLM + RAG)',
          category: 'NLP · LLM',
          icon: <Bot size={28} />,
          description:
            'An automated pipeline for customer message analysis: multi-task LLM classification and a support chatbot with vector search.',
          details: [
            'Sentiment, urgency and severity classification via Mistral AI and Ollama',
            'RAG with BERT embeddings and a ChromaDB vector store',
            'Three Streamlit interfaces: dashboards, real-time KPIs, chatbot',
            'SQLite cache cutting API costs by 70%'
          ],
          techStack: ['Python', 'LangChain', 'PyTorch', 'ChromaDB', 'Streamlit'],
          image: '/images/projet-llm.png'
        },
        {
          title: 'Digitising staff dispatch and HR management',
          category: 'Power Apps · Dataverse',
          icon: <Layers size={28} />,
          description:
            'A station staff assignment solution replacing a paper process with real-time tablet management.',
          details: [
            'Multi-entity Dataverse architecture (staff, stations, sectors)',
            'Tablet-first interface for field managers',
            'Application lifecycle management (ALM) with managed solutions'
          ],
          techStack: ['Power Apps', 'Dataverse', 'ALM'],
          image: '/images/projet-dispatch.png'
        },
        {
          title: 'On-call declaration and approval workflows',
          category: 'Automation',
          icon: <Workflow size={28} />,
          description:
            'End-to-end automation of the on-call declaration cycle, from field entry to multi-level HR approval with rejection handling.',
          details: [
            'Seven Power Automate flows (approvals, loops, conditions)',
            'Deep linking: direct access to the app from an email',
            'Audit logging and protection of sensitive data'
          ],
          techStack: ['Power Automate', 'SharePoint', 'Power Apps'],
          image: '/images/projet-astreintes.png'
        },
        {
          title: 'Offline-first mobile architecture',
          category: 'Technical deep dive',
          icon: <Smartphone size={28} />,
          description:
            'Offline capability keeping field staff operational in areas without network coverage (basements, platforms).',
          details: [
            'Asynchronous data sync (LoadData / SaveData)',
            'Local collection handling and conflict resolution',
            'Performance tuning on tablets'
          ],
          techStack: ['Power Apps', 'Offline mode', 'Performance'],
          image: '/images/projet-offline.png'
        },
        {
          title: 'Proactive HR monitoring bot',
          category: 'RPA',
          icon: <Clock size={28} />,
          description:
            'Daily compliance monitoring for part-time contracts, eliminating missed renewals.',
          details: [
            'Daily scheduled flows',
            'Anti-spam logic on notifications',
            'Excel Online and SharePoint integration'
          ],
          techStack: ['Power Automate', 'Scheduled flows', 'Excel Online'],
          image: '/images/projet-monitoring.png'
        }
      ]
    },
    certifications: {
      lead: 'Professional certifications and training validating my expertise.',
      viewLabel: 'View',
      all: [
        {
          name: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
          issuer: 'Microsoft',
          date: 'Nov. 2025',
          featured: true,
          desc: 'Data preparation, modelling and visualisation to maximise business value.',
          link: 'https://learn.microsoft.com/fr-fr/users/imadbouchareb-5714/credentials/95f829197097baa7'
        },
        {
          name: 'Azure AI Essentials',
          issuer: 'Microsoft & LinkedIn',
          date: 'Dec. 2025',
          desc: 'Fundamentals of AI, machine learning and cognitive services on Azure.',
          link: '/certificats/Azure AI Essentials.pdf'
        },
        {
          name: 'Dataverse: practical foundations (Maker)',
          issuer: 'SNCF',
          date: 'Mar. 2025',
          desc: 'Environment creation and security, complex data modelling, security architecture (RBAC).',
          link: '/certificats/Dataverse_Maker.pdf'
        },
        {
          name: 'Advanced Power Apps',
          issuer: 'SNCF',
          date: 'Mar. 2025',
          desc: 'Query optimisation, reusable components, deep linking, regular expressions.',
          link: '/certificats/PowerApps_Avance.pdf'
        },
        {
          name: 'SharePoint expert (level 3): site design',
          issuer: 'SNCF',
          date: 'Feb. 2025',
          desc: 'Fine-grained permissions, advanced list customisation, audience targeting, Power Platform integration.',
          link: '/certificats/SharePoint_Expert.pdf'
        },
        {
          name: 'DAX language in Power BI',
          issuer: 'SNCF',
          date: 'Feb. 2025',
          desc: 'Complex measures, calculation performance tuning, advanced time intelligence.',
          link: '/certificats/DAX_PowerBI.pdf'
        },
        {
          name: 'Power Automate level 2: practical workshop',
          issuer: 'SNCF',
          date: 'Dec. 2024',
          desc: 'Designing complex automated flows, error handling, translating business processes into logic.',
          link: '/certificats/PowerAutomate_N2.pdf'
        },
        {
          name: 'Advanced SharePoint (level 2)',
          issuer: 'SNCF',
          date: 'Nov. 2024',
          desc: 'Site administration, library management, custom views, approval workflows.',
          link: '/certificats/SharePoint_Avance.pdf'
        },
        {
          name: 'Power BI expert',
          issuer: 'SNCF',
          date: 'Oct. 2024',
          desc: 'Advanced ETL with Power Query (M), star schema modelling, interactive report design.',
          link: '/certificats/PowerBI_Expert.pdf'
        }
      ]
    },
    education: {
      lead: 'Academic background.',
      degrees: [
        {
          title: "Master's in Data & AI",
          school: 'HETIC',
          location: 'Montreuil, France',
          year: '2024 — 2025',
          desc: 'A blend of technical and strategic training: cloud architecture, advanced AI, and data performance management (FinOps, quality).',
          tags: ['Cloud & architecture', 'ML & NLP', 'Neural networks', 'BI & reporting', 'FinOps', 'Agile']
        },
        {
          title: 'Master 1 in Mathematical Engineering & Data Science',
          school: 'University of Haute-Alsace',
          location: 'Mulhouse, France',
          year: '2023 — 2024',
          desc: 'Dual training in applied mathematics (optimisation, statistics in R) and object-oriented programming, with a specialisation in BI and data architecture.',
          tags: [
            'Maths & optimisation',
            'OOP (C++/Java/Python)',
            'Cloud computing',
            'BI & data warehouse',
            'SQL',
            'Statistics'
          ]
        },
        {
          title: "Master's in Operations Research, Risk Management & Negotiation",
          school: 'USTHB',
          location: 'Algiers, Algeria',
          year: '2017 — 2022',
          desc: 'A five-year programme, from the bachelor (maths and computer science, algorithms, probability and statistics) to a master specialising in risk management, game theory and stochastic optimisation.',
          tags: [
            'Operations research',
            'Stochastic processes',
            'Game theory',
            'Decision analysis',
            'Risk management'
          ]
        }
      ]
    },
    contact: {
      title: "Let's work together",
      lead: 'Looking for new challenges in data analysis, business intelligence and automation.',
      rights: 'All rights reserved.',
      location: 'Paris, France',
      built: 'Designed and built by me — React, Vite, Tailwind CSS.'
    }
  }
};

/* ------------------------------------------------------------------ */
/*  PETITS COMPOSANTS                                                  */
/* ------------------------------------------------------------------ */

const SectionHeading = ({ index, title, lead }) => (
  <div className="mb-14 max-w-2xl">
    <div className="mb-4 flex items-center gap-3">
      <span className="font-mono text-xs tracking-widest text-accent">{index}</span>
      <span className="h-px w-8 bg-line" />
      <span className="font-mono text-xs uppercase tracking-widest text-muted">{title}</span>
    </div>
    {lead && <p className="font-serif text-2xl leading-snug text-ink sm:text-3xl">{lead}</p>}
  </div>
);

const Tag = ({ children }) => (
  <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted">
    {children}
  </span>
);

const Dash = () => <span className="mt-2 h-px w-3 flex-none bg-line" />;

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('fr');
  const [theme, setTheme] = useState('light');

  // Thème : préférence enregistrée, sinon réglage système
  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(stored || (prefersDark ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  // Met à jour l'attribut lang pour l'accessibilité et le SEO
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = content[language];
  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const toggleLanguage = () => setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));

  return (
    <div className="min-h-screen bg-paper font-sans text-ink antialiased selection:bg-accent/20">
      {/* ---------------- Header ---------------- */}
      <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="font-serif text-xl font-medium tracking-tight">
            Imad&nbsp;Bouchareb
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={toggleLanguage}
              aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
              className="flex items-center gap-1.5 rounded-md px-2.5 py-2 font-mono text-xs text-muted transition-colors hover:bg-surface hover:text-ink"
            >
              <Globe size={15} />
              {language === 'fr' ? 'EN' : 'FR'}
            </button>

            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
              className="rounded-md p-2 text-muted transition-colors hover:bg-surface hover:text-ink"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="/CV_Imad_BOUCHAREB.pdf"
              className="ml-2 hidden items-center gap-2 rounded-md bg-ink px-3.5 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-85 sm:flex"
            >
              <Download size={14} />
              {t.downloadCV}
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              className="ml-1 rounded-md p-2 text-muted hover:text-ink lg:hidden"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="border-t border-line bg-paper px-5 py-3 lg:hidden">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2.5 text-sm text-muted hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/CV_Imad_BOUCHAREB.pdf"
              className="mt-3 flex items-center gap-2 border-t border-line pt-4 text-sm font-medium text-accent"
            >
              <Download size={14} /> {t.downloadCV}
            </a>
          </nav>
        )}
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* ---------------- Hero ---------------- */}
        <section className="border-b border-line py-20 sm:py-28">
          <div className="mb-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {t.hero.status}
          </div>

          <h1 className="max-w-4xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            {t.hero.pitch}
          </h1>

          <p className="mt-8 font-mono text-sm uppercase tracking-widest text-accent">
            {t.hero.role}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
            >
              {t.hero.btnProjects} <ArrowDown size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              {t.hero.btnContact} <Mail size={15} />
            </a>
          </div>

          {/* Chiffres clés */}
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 md:grid-cols-4">
            {t.metrics.map((m) => (
              <div key={m.label}>
                <dt className="font-serif text-3xl text-ink sm:text-4xl">
                  {m.value}
                  <span className="ml-1 font-sans text-base text-muted">{m.unit}</span>
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-muted">{m.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ---------------- À propos ---------------- */}
        <section id="about" className="scroll-mt-20 border-b border-line py-20">
          <SectionHeading index="01" title={t.sections.about} lead={t.about.lead} />
          <div className="grid gap-8 md:grid-cols-2">
            <p className="leading-relaxed text-muted">{t.about.p1}</p>
            <p className="leading-relaxed text-muted">{t.about.p2}</p>
          </div>
        </section>

        {/* ---------------- Compétences ---------------- */}
        <section id="skills" className="scroll-mt-20 border-b border-line py-20">
          <SectionHeading index="02" title={t.sections.skills} lead={t.skills.lead} />
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {t.skills.groups.map((g) => (
              <div key={g.title} className="bg-paper p-7">
                <div className="mb-5 flex items-center gap-2.5 text-accent">
                  {g.icon}
                  <h3 className="font-medium text-ink">{g.title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Dash />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">
                  {g.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Expériences ---------------- */}
        <section id="experiences" className="scroll-mt-20 border-b border-line py-20">
          <SectionHeading index="03" title={t.sections.experiences} lead={t.experiences.lead} />
          <div className="space-y-px bg-line">
            {t.experiences.jobs.map((job) => (
              <article key={job.role} className="bg-paper py-9 first:pt-0">
                <div className="grid gap-6 md:grid-cols-[200px_1fr]">
                  <div>
                    <div className="font-mono text-xs tracking-wide text-accent">{job.date}</div>
                    <div className="mt-2 font-medium text-ink">{job.company}</div>
                    <div className="text-sm text-muted">{job.location}</div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-ink">{job.role}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {job.missions.map((m, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <Dash />
                          {m}
                        </li>
                      ))}
                    </ul>

                    {job.impact && (
                      <p className="mt-5 border-l-2 border-accent bg-surface py-3 pl-4 pr-3 text-sm font-medium text-ink">
                        {job.impact}
                      </p>
                    )}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------- Projets ---------------- */}
        <section id="projects" className="scroll-mt-20 border-b border-line py-20">
          <SectionHeading index="04" title={t.sections.projects} lead={t.projects.lead} />
          <div className="space-y-16">
            {t.projects.list.map((p, index) => (
              <article
                key={p.title}
                className={`grid gap-8 md:grid-cols-2 md:items-center ${
                  index % 2 === 1 ? 'md:[&>figure]:order-2' : ''
                }`}
              >
                <figure className="overflow-hidden rounded-lg border border-line bg-surface">
                  <div className="relative aspect-[16/10]">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-contain p-3"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 hidden flex-col items-center justify-center gap-3 text-muted">
                      {p.icon}
                      <span className="font-mono text-[11px] uppercase tracking-widest">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  {p.anonymized && (
                    <figcaption className="border-t border-line px-4 py-2.5 font-mono text-[11px] text-muted">
                      {t.projects.disclaimer}
                    </figcaption>
                  )}
                </figure>

                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-accent">
                    {p.category}
                  </div>
                  <h3 className="mt-3 font-serif text-2xl leading-snug text-ink">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.description}</p>

                  <ul className="mt-5 space-y-2">
                    {p.details.map((d, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted">
                        <Dash />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.techStack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>

                  {/* Ajoute `link: 'https://github.com/...'` dans le projet pour afficher ce bouton */}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                    >
                      GitHub <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------- Certifications ---------------- */}
        <section id="certifications" className="scroll-mt-20 border-b border-line py-20">
          <SectionHeading
            index="05"
            title={t.sections.certifications}
            lead={t.certifications.lead}
          />
          <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {t.certifications.all.map((c) => {
              const Wrapper = c.link ? 'a' : 'div';
              return (
                <Wrapper
                  key={c.name}
                  {...(c.link ? { href: c.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex flex-col bg-paper p-6 transition-colors hover:bg-surface"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                      {c.issuer}
                    </span>
                    {c.featured && (
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-medium tracking-wide text-accent">
                        PL-300
                      </span>
                    )}
                  </div>

                  <h3 className="font-medium leading-snug text-ink group-hover:text-accent">
                    {c.name}
                  </h3>
                  <p className="mt-2.5 flex-grow text-sm leading-relaxed text-muted">{c.desc}</p>

                  <div className="mt-5 flex items-center justify-between border-t border-line pt-3.5 font-mono text-[11px] text-muted">
                    <span>{c.date}</span>
                    {c.link && (
                      <span className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                        {t.certifications.viewLabel} <ExternalLink size={11} />
                      </span>
                    )}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </section>

        {/* ---------------- Formation ---------------- */}
        <section id="education" className="scroll-mt-20 border-b border-line py-20">
          <SectionHeading index="06" title={t.sections.education} lead={t.education.lead} />
          <div className="space-y-px bg-line">
            {t.education.degrees.map((d) => (
              <article key={d.title} className="bg-paper py-8 first:pt-0">
                <div className="grid gap-6 md:grid-cols-[200px_1fr]">
                  <div>
                    <div className="font-mono text-xs tracking-wide text-accent">{d.year}</div>
                    <div className="mt-2 font-medium text-ink">{d.school}</div>
                    <div className="text-sm text-muted">{d.location}</div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ink">{d.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{d.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {d.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------- Contact ---------------- */}
        <section id="contact" className="scroll-mt-20 py-20">
          <SectionHeading index="07" title={t.sections.contact} lead={t.contact.title} />
          <p className="max-w-xl leading-relaxed text-muted">{t.contact.lead}</p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
            {[
              {
                icon: <Mail size={17} />,
                label: 'imad.bouchareb08@gmail.com',
                href: 'mailto:imad.bouchareb08@gmail.com'
              },
              {
                icon: <Linkedin size={17} />,
                label: 'linkedin.com/in/imadbouchareb',
                href: 'https://www.linkedin.com/in/imadbouchareb/'
              },
              {
                icon: <Github size={17} />,
                label: 'github.com/Imadbouchareb',
                href: 'https://github.com/Imadbouchareb'
              }
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-paper p-6 text-sm transition-colors hover:bg-surface hover:text-accent"
              >
                <span className="text-accent">{l.icon}</span>
                <span className="truncate">{l.label}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} /> {t.contact.location}
          </span>
          <span>{t.contact.built}</span>
          <span>
            © {new Date().getFullYear()} Imad Bouchareb. {t.contact.rights}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
