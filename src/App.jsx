import React, { useState } from 'react';
import { 
  BarChart3, 
  Database, 
  Cloud, 
  Code2, 
  Brain, 
  Workflow, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ChevronDown,
  Menu,
  X,
  Award,
  Terminal,
  Cpu,
  Globe,
  GraduationCap,
  Calendar,
  Building2,
  CheckCircle2,
  BadgeCheck
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('fr');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === 'fr' ? 'en' : 'fr');

  // Dictionnaire de traduction complet
  const content = {
    fr: {
      nav: ['À Propos', 'Compétences', 'Formation', 'Certifications', 'Expériences', 'Contact'],
      downloadCV: 'Télécharger CV',
      hero: {
        status: 'Disponible pour opportunités',
        greeting: 'Bonjour, je suis',
        role: 'Data Analyst & Scientist | Power Platform',
        quote: "Je ne me contente pas d'analyser vos données, je construis les systèmes qui les rendent intelligentes et actionnables.",
        btnExp: 'Voir mes expériences',
        btnContact: 'Me contacter'
      },
      about: {
        title: 'À Propos',
        p1: <>Mon parcours est à l'image de ma méthode de travail : <span className="text-white font-semibold">structuré, analytique et orienté résultat</span>.</>,
        p2: <>Diplômé d'un <span className="text-blue-400">Master 2 Data & IA</span> et issu d'une formation rigoureuse en <span className="text-blue-400">Ingénierie Mathématique et Recherche Opérationnelle</span>, j'ai forgé mon esprit d'analyse sur la modélisation complexe. Mais pour moi, les mathématiques prennent toute leur valeur lorsqu'elles résolvent des problèmes concrets.</>,
        p3: <>Aujourd'hui, en tant que Data Analyst & Scientist certifié <span className="text-yellow-400 font-medium">Microsoft Power BI (PL-300)</span>, je combine cette rigueur scientifique avec la puissance du <span className="text-white">Cloud (Azure/AWS)</span> et du <span className="text-white">Machine Learning</span>. De l'automatisation de processus chez la <span className="font-bold text-white">SNCF</span> à la création de pipelines NLP, mon objectif est simple : supprimer les tâches manuelles chronophages et faire parler les données pour faciliter la prise de décision.</>
      },
      skills: {
        title: 'Arsenal Technique',
        subtitle: 'Compétences techniques basées sur mes projets académiques et professionnels.',
        details: {
          bi: 'Conception de rapports dynamiques, Analyse de données d\'audience, KPIs stratégiques.',
          power: 'Développement d\'apps RH, Automatisation de processus (mails, notifications), Listes Microsoft.',
          data: 'Modélisation prédictive (Régression, ARMA), LLM (Mistral, Llama), RAG.',
          cloud: 'Gestion de données massives, Code reviews, Agile Scrum/Kanban.'
        }
      },
      education: {
        title: 'Parcours Académique',
        subtitle: 'Ma formation académique.',
        degrees: [
          {
            title: 'Master Data & IA',
            school: 'HETIC',
            location: 'Montreuil, France',
            year: '2024 - 2025',
            desc: 'Formation hybride technique et stratégique : Architecture Cloud, IA avancée et pilotage de la performance Data (FinOps, Qualité).',
            tags: ['Cloud & Architecture', 'ML & NLP', 'Réseaux de Neurones', 'Data Apps & Auto', 'BI & Reporting', 'FinOps & Stratégie', 'Agile & Éco-conception'],
            logo: 'H',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/52/Logo_HETIC_2020.svg/1200px-Logo_HETIC_2020.svg.png'
          },
          {
            title: 'Master 1 Ingénierie Mathématique et Data Science',
            school: 'Université de Haute-Alsace',
            location: 'Mulhouse, France',
            year: '2023 - 2024',
            desc: 'Formation duale en mathématiques appliquées (Optimisation, Stats R) et génie logiciel (C++, Java, Cloud), avec une spécialisation en BI et architecture de données.',
            tags: ['Maths & Optimisation', 'OOP (C++/Java/Python)', 'Cloud Computing', 'BI & Data Warehouse', 'SQL & Reporting', 'Statistiques & R', 'Traitement d\'Images'],
            logo: 'U',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/df/Logo_Universit%C3%A9_Haute_Alsace_2022.svg/1200px-Logo_Universit%C3%A9_Haute_Alsace_2022.svg.png'
          },
          {
            title: 'Master Recherche Opérationnelle Management Risque et Négociation',
            school: 'USTHB',
            location: 'Alger, Algérie',
            year: '2017 - 2022',
            desc: 'Cursus d\'excellence de 5 ans. De la Licence (Math-Info, Algorithmique, Probabilité-Statistique) au Master spécialisé en Management des Risques, Théorie des Jeux et Optimisation Stochastique.',
            tags: ['Recherche Opérationnelle', 'Processus Stochastiques', 'Théorie des Jeux', 'SQL & Bases de données', 'Aide à la Décision (MCDA)', 'Gestion des Risques', 'Graphes & Complexité'],
            logo: 'U',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/fr/0/07/Logo_USTHB.png'
          }
        ]
      },
      certifications: {
        title: 'Certifications',
        subtitle: 'Certifications professionnelles et qualifications qui valident mon expertise et mon engagement envers l\'apprentissage continu.',
        all: [
          {
            name: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
            issuer: 'Microsoft',
            date: 'Nov. 2025',
            id: 'PL-300',
            desc: 'Maîtrise complète de la préparation, de la modélisation et de la visualisation des données pour maximiser la valeur organisationnelle.',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
            color: 'yellow',
            link: 'https://learn.microsoft.com/fr-fr/users/imadbouchareb-5714/credentials/95f829197097baa7?ref=https%3A%2F%2Fwww.linkedin.com%2F'
          },
          {
            name: 'Azure AI Essentials',
            issuer: 'Microsoft & LinkedIn',
            date: 'Déc. 2025',
            id: 'AI-Essentials',
            desc: 'Fondamentaux de l\'intelligence artificielle, du Machine Learning et des services cognitifs sur le cloud Azure.',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
            color: 'blue',
            link: '/certificats/Azure AI Essentials.pdf'
          },
           { 
             name: 'Dataverse : Les bases pratiques (Maker)',
             issuer: 'SNCF Voyageurs',
             date: 'Mars 2025',
             desc: 'Compétences de création et sécurisation d\'un environnement : architectures de sécurité, modélisation de données et gestion des accès utilisateurs.',
             logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logotype_SNCF_Voyageurs.svg/1200px-Logotype_SNCF_Voyageurs.svg.png',
             link: '/certificats/Certificat Dataverse les bases pratiques (Maker).pdf'
           },
           { 
             name: 'PowerApps Avancé', 
             issuer: 'SNCF Voyageurs',
             date: 'Mars 2025', 
             desc: 'Optimisation des requêtes, création de composants, deep linking, lancement de flux Power Automate et usage des expressions régulières (RegEx).',
             logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logotype_SNCF_Voyageurs.svg/1200px-Logotype_SNCF_Voyageurs.svg.png',
             link: '/certificats/Certificat PowerApps Avancé .pdf'
           },
           { 
             name: 'SharePoint Expert (Niv3) : Maîtriser la conception d\'un site', 
             issuer: 'SNCF Voyageurs',
             date: 'Févr. 2025',
             desc: 'Mise en place d\'autorisations spécifiques, personnalisation avancée des affichages de listes, gestion des audiences et intégration Power Platform.',
             logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logotype_SNCF_Voyageurs.svg/1200px-Logotype_SNCF_Voyageurs.svg.png',
             link: '/certificats/Certificat SharePoint Expert (Niv3) Maîtriser la conception d\'un site.pdf'
           },
           { 
             name: 'Langage DAX dans Power BI', 
             issuer: 'SNCF Voyageurs',
             date: 'Févr. 2025',
             desc: 'Compréhension approfondie du langage DAX, traitement optimisé des données et mise en place de calculs d\'indicateurs complexes.',
             logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logotype_SNCF_Voyageurs.svg/1200px-Logotype_SNCF_Voyageurs.svg.png',
             link: '/certificats/Certificat Langage DAX dans Power BI.pdf'
           },
           { 
             name: 'Power Automate Niv 2 : Atelier de mise en pratique', 
             issuer: 'SNCF Voyageurs',
             date: 'Déc. 2024',
             desc: 'Amélioration de la pratique de l\'outil à travers des TP, maîtrise de différents usages et transposition aux projets réels.',
             logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logotype_SNCF_Voyageurs.svg/1200px-Logotype_SNCF_Voyageurs.svg.png',
             link: '/certificats/Certificat Power Automate .pdf'
           },
           { 
             name: 'SharePoint Avancé (Niv2) : Améliorer, administrer son site', 
             issuer: 'SNCF Voyageurs',
             date: 'Nov. 2024',
             desc: 'Différenciation listes/bibliothèques, personnalisation des affichages et de l\'approbation, définition des autorisations et conception de pages d\'accueil.',
             logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logotype_SNCF_Voyageurs.svg/1200px-Logotype_SNCF_Voyageurs.svg.png',
             link: '/certificats/Certificat SharePoint Avancé.pdf'
           },
           { 
             name: 'Power BI Expert', 
             issuer: 'SNCF Voyageurs',
             date: 'Oct. 2024',
             desc: 'Interrogation de sources hétérogènes, préparation des données avec M, conception de mesures DAX, optimisation des rapports et dataviz interactive.',
             logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logotype_SNCF_Voyageurs.svg/1200px-Logotype_SNCF_Voyageurs.svg.png',
             link: '/certificats/Certificat Power BI Expert.pdf'
           },
        ]
      },
      experiences: {
        title: 'Expériences Professionnelles',
        subtitle: 'Parcours & Réalisations (Méthode STAR)',
        jobs: [
           {
             company: 'SNCF • Paris',
             role: 'Data Scientist RH (Alternance)',
             date: 'Sept. 2024 - Présent',
             tags: ['Power Apps', 'Power Automate', 'Dataverse', 'Power BI & DAX'],
             missionsLabel: 'Missions',
             missions: [
               'Développement d\'une app intuitive (Dataverse/SharePoint) pour l\'affectation du personnel en gare.',
               'Création d\'une app de déclaration d\'astreintes multi-rôles avec workflows conditionnels.',
               'Génération automatique de notifications pour le pilotage des contrats temps partiels.',
               'Création de dashboards opérationnels (absentéisme, suivi par secteur) avec DAX avancé.'
             ],
             impactLabel: 'Impact',
             impact: '-40% temps de reporting, suppression totale du papier, fiabilité des données à 99.8%, +20% efficacité de coordination.'
           },
           {
             company: 'HETIC • Montreuil',
             role: 'Système d\'Analyse SAV Intelligent avec LLM (PFE)',
             date: 'Juil. 2025 - Nov. 2025',
             tags: ['Python', 'LLM & RAG', 'Streamlit'],
             missionsLabel: 'Missions',
             missions: [
               'Développement d\'un pipeline d\'analyse de tweets avec LLM (Mistral AI, Ollama).',
               'Implémentation RAG avec embeddings BERT pour classification multi-tâches (sentiment, urgence).',
               'Création d\'un Chatbot avec recherche vectorielle (ChromaDB, LangChain, Llama 3.3).',
               'Développement de dashboards interactifs sous Streamlit (KPIs temps réel).'
             ],
             impactLabel: 'Tech Stack',
             impact: 'Python, LangChain, Pandas, PyTorch, Agile Scrum, Git, SQLite (Cache : -70% coûts API).'
           },
           {
             company: 'Institut de Recherche • Alger',
             role: 'Media Coordinator',
             date: 'Déc. 2022 - Août 2023',
             tags: ['SPSS', 'Power BI', 'Excel'],
             missionsLabel: 'Missions',
             missions: [
               'Élaboration de plans médias sur mesure pour maximiser le ROI publicitaire (ciblage chaînes/créneaux).',
               'Analyse et traitement des données d\'audience via Power Query, SPSS et Excel.',
               'Conception de rapports Power BI dynamiques avec KPIs et insights stratégiques.',
               'Pilotage d\'une équipe de chargés de veille.'
             ]
           },
           {
             company: 'CREA • Alger',
             role: 'Stagiaire Data & PFE',
             date: 'Fév. 2022 - Juil. 2022',
             tags: ['Économétrie', 'Time Series', 'Modélisation'],
             missionsLabel: 'Missions',
             missions: [
               'Développement de modèles de régression linéaire simple et multiple (R² jusqu\'à 0.87).',
               'Conception d\'un pipeline d\'analyse de séries temporelles (ARMA/Box-Jenkins).',
               'Prévision du PIB via méthodes LES/L.E.D & BJ (RMSE inf à écart type).'
             ],
             impactLabel: 'Résultat',
             impact: 'Simulation intensive et validation statistique (précision prévision ±5%).'
           }
        ]
      },
      contact: {
        title: 'Travaillons ensemble',
        subtitle: 'À la recherche de nouveaux défis en Data Analysis, Science ou Power Platform.',
        rights: 'Tous droits réservés.',
        location: 'Paris, France'
      }
    },
    en: {
      nav: ['About', 'Skills', 'Education', 'Certifications', 'Experiences', 'Contact'],
      downloadCV: 'Download CV',
      hero: {
        status: 'Available for opportunities',
        greeting: "Hi, I'm",
        role: 'Data Analyst & Scientist | Power Platform',
        quote: "I don't just analyze your data, I build the systems that make them intelligent and actionable.",
        btnExp: 'View Experiences',
        btnContact: 'Get in Touch'
      },
      about: {
        title: 'About Me',
        p1: <>My career path mirrors my work ethic: <span className="text-white font-semibold">structured, analytical, and result-oriented</span>.</>,
        p2: <>Graduated with a <span className="text-blue-400">Master's in Data & AI</span> and coming from a rigorous background in <span className="text-blue-400">Mathematical Engineering and Operations Research</span>, I honed my analytical mindset through complex modeling. However, I believe mathematics takes on its full value when it solves concrete business problems.</>,
        p3: <>Today, as a Data Analyst & Scientist certified in <span className="text-yellow-400 font-medium">Microsoft Power BI (PL-300)</span>, I combine this scientific rigor with the power of <span className="text-white">Cloud (Azure/AWS)</span> and <span className="text-white">Machine Learning</span>. From automating processes at <span className="font-bold text-white">SNCF</span> to creating NLP pipelines, my goal is simple: eliminate time-consuming manual tasks and let data speak to facilitate decision-making.</>
      },
      skills: {
        title: 'Technical Arsenal',
        subtitle: 'Technical skills based on my academic and professional projects.',
        details: {
          bi: 'Design of dynamic reports, Audience data analysis, Strategic KPIs.',
          power: 'Development of HR apps, Process automation (emails, notifications), Microsoft Lists.',
          data: 'Predictive modeling (Regression, ARMA), LLM (Mistral, Llama), RAG.',
          cloud: 'Big Data management, Code reviews, Agile Scrum/Kanban.'
        }
      },
      education: {
        title: 'Academic Journey',
        subtitle: 'My academic journey.',
        degrees: [
          {
            title: 'Master Data & AI',
            school: 'HETIC',
            location: 'Montreuil, France',
            year: '2024 - 2025',
            desc: 'Hybrid technical and strategic training: Cloud Architecture, Advanced AI, and Data Performance Management (FinOps, Quality).',
            tags: ['Cloud & Architecture', 'ML & NLP', 'Neural Networks', 'Data Apps & Auto', 'BI & Reporting', 'FinOps & Strategy', 'Agile & Eco-design'],
            logo: 'H',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/52/Logo_HETIC_2020.svg/1200px-Logo_HETIC_2020.svg.png'
          },
          {
            title: 'Master 1 in Mathematical Engineering & Data Science',
            school: 'University of Haute-Alsace',
            location: 'Mulhouse, France',
            year: '2023 - 2024',
            desc: 'Dual training in applied mathematics (Optimization, Stats R) and software engineering (C++, Java, Cloud), with a specialization in BI and data architecture.',
            tags: ['Maths & Optimization', 'OOP (C++/Java/Python)', 'Cloud Computing', 'BI & Data Warehouse', 'SQL & Reporting', 'Statistics & R', 'Image Processing'],
            logo: 'U',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/df/Logo_Universit%C3%A9_Haute_Alsace_2022.svg/1200px-Logo_Universit%C3%A9_Haute_Alsace_2022.svg.png'
          },
          {
            title: 'Master in Operations Research: Risk Management & Negotiation',
            school: 'USTHB',
            location: 'Algiers, Algeria',
            year: '2017 - 2022',
            desc: '5-year excellence program. From Bachelor (Math/CS basics, Algorithms, Prob/Stat) to Master specialized in Risk Management, Game Theory, and Stochastic Optimization.',
            tags: ['Operations Research', 'Stochastic Processes', 'Game Theory', 'SQL & Databases', 'Decision Aid (MCDA)', 'Risk Management', 'Graphs & Complexity'],
            logo: 'U',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/fr/0/07/Logo_USTHB.png'
          }
        ]
      },
      certifications: {
        title: 'Certifications',
        subtitle: 'Professional certifications and qualifications that validate my expertise and commitment to continuous learning.',
        all: [
          {
            name: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
            issuer: 'Microsoft',
            date: 'Nov. 2025',
            id: 'PL-300',
            desc: 'Complete mastery of data preparation, modeling, and visualization to maximize organizational value.',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
            color: 'yellow',
            link: 'https://learn.microsoft.com/fr-fr/users/imadbouchareb-5714/credentials/95f829197097baa7?ref=https%3A%2F%2Fwww.linkedin.com%2F'
          },
          {
            name: 'Azure AI Essentials',
            issuer: 'Microsoft & LinkedIn',
            date: 'Déc. 2025',
            id: 'AI-Essentials',
            desc: 'Fundamentals of Artificial Intelligence, Machine Learning, and Cognitive Services on the Azure Cloud.',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
            color: 'blue',
            link: '/certificats/Azure AI Essentials.pdf'
          },
           { 
             name: 'Dataverse : Les bases pratiques (Maker)',
             issuer: 'SNCF Voyageurs',
             date: 'Mars 2025',
             desc: 'Environment creation and security, complex data modeling, and security architecture management (RBAC).',
             logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logotype_SNCF_Voyageurs.svg/1200px-Logotype_SNCF_Voyageurs.svg.png',
             link: '/certificats/Certificat Dataverse les bases pratiques (Maker).pdf'
           },
           { 
             name: 'PowerApps Avancé', 
             issuer: 'SNCF Voyageurs',
             date: 'Mars 2025', 
             desc: 'Query optimization, reusable component creation, Deep Linking, and advanced use of Regular Expressions (RegEx).',
             logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logotype_SNCF_Voyageurs.svg/1200px-Logotype_SNCF_Voyageurs.svg.png',
             link: '/certificats/Certificat PowerApps Avancé .pdf'
           },
           { 
             name: 'SharePoint Expert (Niv3) : Maîtriser la conception d\'un site', 
             issuer: 'SNCF Voyageurs',
             date: 'Févr. 2025',
             desc: 'Fine-grained permission management, advanced list customization (JSON), audience targeting, and Power Platform integration.',
             logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logotype_SNCF_Voyageurs.svg/1200px-Logotype_SNCF_Voyageurs.svg.png',
             link: '/certificats/Certificat SharePoint Expert (Niv3) Maîtriser la conception d\'un site.pdf'
           },
           { 
             name: 'Langage DAX dans Power BI', 
             issuer: 'SNCF Voyageurs',
             date: 'Févr. 2025',
             desc: 'Complex measure creation, calculation performance optimization, and advanced Time Intelligence analysis.',
             logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logotype_SNCF_Voyageurs.svg/1200px-Logotype_SNCF_Voyageurs.svg.png',
             link: '/certificats/Certificat Langage DAX dans Power BI.pdf'
           },
           { 
             name: 'Power Automate Niv 2 : Atelier de mise en pratique', 
             issuer: 'SNCF Voyageurs',
             date: 'Déc. 2024',
             desc: 'Design of complex automated flows, error handling, and translation of business processes into logical workflows.',
             logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logotype_SNCF_Voyageurs.svg/1200px-Logotype_SNCF_Voyageurs.svg.png',
             link: '/certificats/Certificat Power Automate .pdf'
           },
           { 
             name: 'SharePoint Avancé (Niv2) : Améliorer, administrer son site', 
             issuer: 'SNCF Voyageurs',
             date: 'Nov. 2024',
             desc: 'Site administration, library management, view customization, and approval workflows.',
             logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logotype_SNCF_Voyageurs.svg/1200px-Logotype_SNCF_Voyageurs.svg.png',
             link: '/certificats/Certificat SharePoint Avancé.pdf'
           },
           { 
             name: 'Power BI Expert', 
             issuer: 'SNCF Voyageurs',
             date: 'Oct. 2024',
             desc: 'Advanced ETL with Power Query (M Language), optimal star schema modeling, and interactive UX/UI report design.',
             logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logotype_SNCF_Voyageurs.svg/1200px-Logotype_SNCF_Voyageurs.svg.png',
             link: '/certificats/Certificat Power BI Expert.pdf'
           },
        ]
      },
      experiences: {
        title: 'Professional Experiences',
        subtitle: 'Career & Achievements (STAR Method)',
        jobs: [
           {
             company: 'SNCF • Paris',
             role: 'HR Data Scientist (Apprenticeship)',
             date: 'Sept. 2024 - Present',
             tags: ['Power Apps', 'Power Automate', 'Dataverse', 'Power BI & DAX'],
             missionsLabel: 'Missions',
             missions: [
               'Development of an intuitive app (Dataverse/SharePoint) for station staff assignment.',
               'Creation of a multi-role on-call declaration app with conditional workflows.',
               'Automatic generation of notifications for part-time contract management.',
               'Creation of operational dashboards (absenteeism, sector tracking) with advanced DAX.'
             ],
             impactLabel: 'Impact',
             impact: '-40% reporting time, total paper elimination, 99.8% data reliability, +20% coordination efficiency.'
           },
           {
             company: 'HETIC • Montreuil',
             role: 'Intelligent Customer Service Analysis System with LLM (Final Year Project)',
             date: 'July 2025 - Nov. 2025',
             tags: ['Python', 'LLM & RAG', 'Streamlit'],
             missionsLabel: 'Missions',
             missions: [
               'Development of a tweet analysis pipeline with LLM (Mistral AI, Ollama).',
               'RAG implementation with BERT embeddings for multi-task classification (sentiment, urgency).',
               'Creation of a Chatbot with vector search (ChromaDB, LangChain, Llama 3.3).',
               'Development of interactive dashboards under Streamlit (Real-time KPIs).'
             ],
             impactLabel: 'Tech Stack',
             impact: 'Python, LangChain, Pandas, PyTorch, Agile Scrum, Git, SQLite (Cache: -70% API costs).'
           },
           {
             company: 'Research Institute • Algiers',
             role: 'Media Coordinator',
             date: 'Dec. 2022 - Aug. 2023',
             tags: ['SPSS', 'Power BI', 'Excel'],
             missionsLabel: 'Missions',
             missions: [
               'Development of tailored media plans to maximize advertising ROI (channel/slot targeting).',
               'Analysis and processing of audience data via Power Query, SPSS, and Excel.',
               'Design of dynamic Power BI reports with KPIs and strategic insights.',
               'Management of a team of monitoring officers.'
             ]
           },
           {
             company: 'CREA • Algiers',
             role: 'Data Intern & Final Year Project',
             date: 'Feb. 2022 - July 2022',
             tags: ['Econometrics', 'Time Series', 'Modeling'],
             missionsLabel: 'Missions',
             missions: [
               'Development of simple and multiple linear regression models (R² up to 0.87).',
               'Design of a time series analysis pipeline (ARMA/Box-Jenkins).',
               'GDP forecasting via LES/L.E.D & BJ methods (RMSE lower than standard deviation).'
             ],
             impactLabel: 'Result',
             impact: 'Intensive simulation and statistical validation (forecast accuracy ±5%).'
           }
        ]
      },
      contact: {
        title: 'Let\'s work together',
        subtitle: 'Looking for new challenges in Data Analysis, Science, or Power Platform.',
        rights: 'All rights reserved.',
        location: 'Paris, France'
      }
    }
  };

  const t = content[language]; // Sélection rapide du contenu actuel

  const navigation = [
    { name: t.nav[0], href: '#about' },
    { name: t.nav[1], href: '#skills' },
    { name: t.nav[2], href: '#education' },
    { name: t.nav[3], href: '#certifications' },
    { name: t.nav[4], href: '#experiences' },
    { name: t.nav[5], href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              IB.
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-baseline space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {/* Language Toggle Button */}
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-all text-sm"
                >
                  <Globe size={16} />
                  <span>{language === 'fr' ? 'FR' : 'EN'}</span>
                </button>

                <a 
                  href="/CV_Imad_BOUCHAREB.pdf" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-500/20"
                >
                  {t.downloadCV}
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
               {/* Mobile Language Toggle */}
                <button 
                  onClick={toggleLanguage}
                  className="text-slate-300 hover:text-white"
                >
                  <span className="font-bold text-sm">{language === 'fr' ? 'FR' : 'EN'}</span>
                </button>
              <button
                onClick={toggleMenu}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {t.hero.status}
          </div>
          
          <p className="text-xl md:text-2xl text-slate-400 font-medium mb-2 animate-fade-in-up">
            {t.hero.greeting}
          </p>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Imad <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Bouchareb</span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light">
            {t.hero.role}
          </p>
          
          <p className="mt-8 text-lg text-slate-300 max-w-2xl mx-auto italic border-l-4 border-blue-500 pl-4 py-2 bg-slate-900/50 rounded-r-lg backdrop-blur-sm">
            "{t.hero.quote}"
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#experiences" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-lg font-bold text-lg transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-1 flex items-center justify-center gap-2">
              {t.hero.btnExp} <ChevronDown size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent hover:bg-slate-800 text-white rounded-lg font-bold text-lg transition-all border border-slate-600 hover:border-slate-400 flex items-center justify-center gap-2">
              {t.hero.btnContact} <Mail size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t.about.title}</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {t.about.p1}
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {t.about.p2}
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              {t.about.p3}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t.skills.title}</h2>
            <p className="text-slate-400">{t.skills.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: BI & Data Viz */}
            <div className="group bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <BarChart3 size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Data Visualization & BI</h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                  <Award size={16} className="text-yellow-500" /> 
                  <span className="font-semibold text-white">Power BI (Certifié PL-300)</span>
                </li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>Tableau</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>Excel / VBA</li>
                <li className="mt-4 pt-4 border-t border-slate-800 text-sm text-slate-400">
                  {t.skills.details.bi}
                </li>
              </ul>
            </div>

            {/* Card 2: Power Platform */}
            <div className="group bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-teal-500/10 rounded-lg text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                  <Workflow size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Power Platform & Low Code</h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2"><span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 text-xs font-bold">CORE</span> Power Apps (Canvas, Model-driven, Power Fx)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>Power Automate (Workflows)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>SharePoint & Dataverse</li>
                <li className="mt-4 pt-4 border-t border-slate-800 text-sm text-slate-400">
                  {t.skills.details.power}
                </li>
              </ul>
            </div>

            {/* Card 3: Data Science & Programming */}
            <div className="group bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <Brain size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Data Science & Code</h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>Python, R, Java, Matlab</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>Machine Learning, Deep Learning & NLP</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>Time Series & Économétrie</li>
                <li className="mt-4 pt-4 border-t border-slate-800 text-sm text-slate-400">
                  {t.skills.details.data}
                </li>
              </ul>
            </div>

            {/* Card 4: Cloud & DevOps */}
            <div className="group bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-lg text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Cloud size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Cloud & DevOps</h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>Microsoft Azure & AWS</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>MySQL, SQL Server, PostgreSQL</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>Git, GitHub</li>
                <li className="mt-4 pt-4 border-t border-slate-800 text-sm text-slate-400">
                  {t.skills.details.cloud}
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* NEW Education Section */}
      <section id="education" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t.education.title}</h2>
            <p className="text-slate-400">{t.education.subtitle}</p>
          </div>

          <div className="space-y-8">
            {t.education.degrees.map((degree, index) => {
              // Alternate gradient borders like in Skills section
              const gradients = [
                'hover:border-blue-500/50 hover:shadow-blue-500/10',
                'hover:border-teal-500/50 hover:shadow-teal-500/10'
              ];
              const borderClass = gradients[index % gradients.length];

              return (
                <div key={index} className={`relative bg-slate-950 p-8 rounded-2xl border border-slate-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${borderClass}`}>
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    
                    {/* Left Side: Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{degree.title}</h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-6">
                        <div className="flex items-center gap-1.5">
                          <Building2 size={16} className="text-blue-400" />
                          <span>{degree.school}</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full"></div>
                        <div className="flex items-center gap-1.5">
                          <Calendar size={16} className="text-blue-400" />
                          <span>{degree.year}</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full"></div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={16} className="text-blue-400" />
                          <span>{degree.location}</span>
                        </div>
                      </div>

                      <p className="text-slate-300 leading-relaxed mb-6">
                        {degree.desc}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {degree.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs font-medium text-slate-300 hover:border-blue-500/30 hover:text-blue-300 transition-colors cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Side: Logo Placeholder */}
                    <div className="hidden md:flex flex-shrink-0 items-center justify-center w-24 h-24 bg-white rounded-xl shadow-lg p-2 overflow-hidden">
                       {degree.logoUrl ? (
                          <img 
                            src={degree.logoUrl} 
                            alt={`${degree.school} logo`} 
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.onerror = null; 
                              e.target.style.display = 'none'; // Cache l'image si elle ne charge pas
                              e.target.nextSibling.style.display = 'block'; // Affiche la lettre de secours
                            }} 
                          />
                       ) : null}
                       {/* Fallback Letter if no image or image fails */}
                       <span className="text-3xl font-black text-slate-900" style={{display: degree.logoUrl ? 'none' : 'block'}}>
                         {degree.logo}
                       </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t.certifications.title}</h2>
            <p className="text-slate-400">{t.certifications.subtitle}</p>
          </div>

          <div className="space-y-8">
            
            {/* Unified Certification Grid (Microsoft + SNCF) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.certifications.all.map((cert, index) => {
                // Determine styling based on issuer or specific color prop
                const isMicrosoft = cert.issuer.includes('Microsoft');
                const borderColor = isMicrosoft ? (cert.color === 'yellow' ? 'hover:border-yellow-500/50' : 'hover:border-blue-500/50') : 'hover:border-teal-500/50';
                
                // Wrap content in <a> if link exists, otherwise a <div>
                const CardWrapper = cert.link ? 'a' : 'div';
                const wrapperProps = cert.link ? { 
                  href: cert.link, 
                  target: "_blank", 
                  rel: "noopener noreferrer",
                  className: `flex flex-col bg-slate-900/50 p-6 rounded-xl border border-slate-700 ${borderColor} transition-all group h-full hover:shadow-lg hover:bg-slate-900 cursor-pointer relative`
                } : {
                  className: `flex flex-col bg-slate-900/50 p-6 rounded-xl border border-slate-700 ${borderColor} transition-all group h-full`
                };

                return (
                  <CardWrapper key={index} {...wrapperProps}>
                     {/* External Link Icon indicator */}
                     {cert.link && (
                       <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400">
                         <ExternalLink size={16} />
                       </div>
                     )}

                     <div className="flex items-start justify-between mb-4">
                       {/* Logo Area */}
                       <div className="w-12 h-12 rounded-lg bg-white p-2 flex items-center justify-center overflow-hidden shadow-sm">
                         <img src={cert.logoUrl} alt={`${cert.issuer} logo`} className="w-full h-full object-contain" />
                       </div>
                       
                       {/* Optional ID Badge for Microsoft certs */}
                       {cert.id && (
                         <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-1 rounded mr-6">{cert.id}</span>
                       )}
                     </div>
                     
                     <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors line-clamp-2 min-h-[3.5rem]">
                       {cert.name}
                     </h3>
                     
                     <div className="text-sm font-medium text-slate-400 mb-4">{cert.issuer}</div>
                     
                     {/* Description */}
                     <p className="text-sm text-slate-300 mb-6 leading-relaxed border-l-2 border-slate-700 pl-3 flex-grow">
                       {cert.desc}
                     </p>
  
                     <div className="flex items-center gap-2 text-xs text-slate-500 mt-auto pt-4 border-t border-slate-800 w-full">
                       <CheckCircle2 size={14} className="text-green-500" />
                       <span>{cert.date}</span>
                     </div>
                  </CardWrapper>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiences" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t.experiences.title}</h2>
            <p className="text-slate-400">{t.experiences.subtitle}</p>
          </div>

          <div className="space-y-12">
            
            {t.experiences.jobs.map((job, index) => {
              // Définition dynamique des couleurs selon l'index
              const colors = [
                 { border: 'hover:border-blue-500/30', text: 'text-blue-400', bg: 'bg-blue-900/20', borderSmall: 'border-blue-500/20', textSmall: 'text-blue-300' },
                 { border: 'hover:border-purple-500/30', text: 'text-purple-400', bg: 'bg-purple-900/20', borderSmall: 'border-purple-500/20', textSmall: 'text-purple-300' },
                 { border: 'hover:border-orange-500/30', text: 'text-orange-400', bg: 'bg-orange-900/20', borderSmall: 'border-orange-500/20', textSmall: 'text-orange-300' },
                 { border: 'hover:border-emerald-500/30', text: 'text-emerald-400', bg: 'bg-emerald-900/20', borderSmall: 'border-emerald-500/20', textSmall: 'text-emerald-300' }
              ];
              const c = colors[index % colors.length];

              return (
                <div key={index} className={`bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden ${c.border} transition-all`}>
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-slate-900 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
                      <div>
                        <div className={`text-xs font-bold ${c.text} uppercase tracking-wider mb-2`}>{job.company}</div>
                        <h3 className="text-2xl font-bold text-white mb-4">{job.role}</h3>
                        <div className="text-slate-500 text-sm mb-4">{job.date}</div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {job.tags.map((tag, i) => (
                             <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="text-6xl text-slate-800 font-black opacity-50">0{index + 1}</div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="space-y-4">
                        <div>
                          <h4 className={`${c.text} font-semibold mb-1`}>{job.missionsLabel}</h4>
                          <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                            {job.missions.map((mission, i) => (
                              <li key={i}>{mission}</li>
                            ))}
                          </ul>
                        </div>
                        {job.impact && (
                          <div className={`${c.bg} p-4 rounded-lg border ${c.borderSmall}`}>
                            <h4 className={`${c.textSmall} font-bold mb-1 flex items-center gap-2`}>
                              {index === 1 ? <Cpu size={16}/> : <Award size={16}/>} {job.impactLabel}
                            </h4>
                            <p className="text-white font-medium">{job.impact}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-20 bg-slate-900 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">{t.contact.title}</h2>
          <p className="text-slate-400 mb-12">
            {t.contact.subtitle}
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href="mailto:imad.bouchareb08@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-500 hover:text-blue-400 transition-all w-full md:w-auto">
              <Mail size={20} />
              <span>imad.bouchareb08@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/imad-bouchareb/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-slate-900 rounded-lg border border-slate-800 hover:border-blue-700 hover:text-blue-600 transition-all w-full md:w-auto">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Imadbouchareb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-slate-900 rounded-lg border border-slate-800 hover:border-slate-600 hover:text-white transition-all w-full md:w-auto">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-4 text-slate-500 text-sm">
             <div className="flex items-center gap-2">
                <MapPin size={16} /> {t.contact.location}
             </div>
             <p>© {new Date().getFullYear()} Imad Bouchareb. {t.contact.rights}</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;