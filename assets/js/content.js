/**
 * ============================================================================
 *  PORTFOLIO - SOURCE DE DONNÉES UNIQUE
 * ============================================================================
 *  Ce fichier contient TOUT le contenu du CV.
 *  Pour mettre à jour le site, modifiez uniquement ce fichier, puis poussez
 *  le projet sur GitHub (voir README.md).
 *
 *  Structure :
 *    identity        → nom, titre, coordonnées, liens
 *    profile         → texte de présentation + points clés
 *    experience      → expériences professionnelles
 *    projects        → projets académiques
 *    education       → formations
 *    skills          → compétences techniques (par catégorie)
 *    certifications  → certifications
 *    languages       → langues
 *    associations    → activités associatives
 *    contact         → messages de la section contact
 * ============================================================================
 */

window.CV_DATA = {
  /* ------------------------------------------------------------------ */
  /* IDENTITÉ - modifier ici le nom, le titre et les coordonnées        */
  /* ------------------------------------------------------------------ */
  identity: {
    firstName: 'Khalil',
    lastName: 'Ben Ali',
    fullName: 'Khalil Ben Ali',
    initials: 'KB',
    title: 'Étudiant Ingénieur en Génie Informatique',
    subtitle: 'Spécialisation IoT et Robotique',
    location: 'Sousse, Tunisie',
    phoneLabel: '+216 92 315 464',
    phoneHref: '+21692315464',
    email: 'khaalil.benali@gmail.com',
    linkedinLabel: 'linkedin.com/in/Khaalil-Ben-Ali',
    linkedin: 'https://www.linkedin.com/in/Khaalil-Ben-Ali/',
    githubLabel: 'github.com/khaalilbenali',
    github: 'https://github.com/khaalilbenali',
    photo: 'assets/img/profile.jpg',
    avatar: 'assets/img/avatar.jpg',
    cvFile: 'assets/cv/Khalil-Ben-Ali-CV.pdf',
    cvLabel: 'Télécharger le CV',
    availability: 'Ouvert à un stage de fin d’études (PFE)'
  },

  /* ------------------------------------------------------------------ */
  /* PROFIL PROFESSIONNEL                                                  */
  /* ------------------------------------------------------------------ */
  profile: {
    paragraphs: [
      'Étudiant ingénieur en 5ᵉ année, à la recherche d’un stage de fin d’études (PFE) en systèmes embarqués, IoT, intégration cloud ou applications connectées.',
      'Expérience pratique en modules embarqués communicants, traitement de données capteurs et solutions cloud/mobile, acquis lors des stages et projets académiques.'
    ],
    highlights: [
      { icon: 'graduation', label: '5ᵉ année · Génie Informatique' },
      { icon: 'chip', label: 'Spécialisation IoT & Robotique' },
      { icon: 'briefcase', label: 'À la recherche d’un stage de PFE' },
      { icon: 'pin', label: 'Basé à Sousse, Tunisie' }
    ]
  },

  /* ------------------------------------------------------------------ */
  /* EXPÉRIENCE PROFESSIONNELLE                                            */
  /* ------------------------------------------------------------------ */
  experience: [
    {
      role: 'Stagiaire en Systèmes Embarqués et IoT',
      company: 'No Limits Embedded',
      location: 'Sousse, Tunisie · hybride',
      period: 'Juil. 2026',
      tasks: [
        'Participation à des projets embarqués et IoT ; développement, test et optimisation de prototypes de solutions connectées, en mobilisant des architectures matérielles et logicielles.'
      ]
    },
    {
      role: 'Stagiaire en IoT Industriel',
      company: 'AIOT – Industrial IoT Solutions',
      location: 'Sousse, Tunisie',
      period: 'Juin 2026',
      tasks: [
        'Conception et test de modules embarqués communicants pour des cas d’usage d’IoT industriel.',
        'Développement de la chaîne de traitement des données, de l’acquisition des données capteurs à leur transmission.'
      ]
    },
    {
      role: 'Stagiaire en Robotique',
      company: 'MULTIVERSE AI',
      location: 'Sousse, Tunisie',
      period: 'Juil. 2025 – Août 2025',
      tasks: [
        'Conception d’un robot de monitoring environnemental intégrant caméra et capteurs d’humidité et de température.',
        'Implémentation de la transmission des données capteurs en temps réel vers une interface de supervision.'
      ]
    },
    {
      role: 'Stagiaire en Ingénierie Systèmes Connectés',
      company: 'ISIMG',
      location: 'Gabès, Tunisie · hybride, 5 mois',
      period: 'Févr. 2024 – Juin 2024',
      tasks: [
        'Conception d’un système connecté de suivi de l’activité cardiaque (ECG) et de la SpO2 pour les patients souffrant de troubles du rythme.',
        'Prototypage embarqué avec ESP32 et mise en œuvre d’une solution IoT pour la collecte et le suivi des données de santé en temps réel.'
      ]
    },
    {
      role: 'Stagiaire Technicien',
      company: 'Radio Elissa FM',
      location: 'Gabès, Tunisie',
      period: 'Juin 2023 – Juil. 2023',
      tasks: [
        'Maintenance et diagnostic d’équipements de radiodiffusion.',
        'Traitement du signal audio et gestion technique de la production multimédia.'
      ]
    },
    {
      role: 'Stagiaire',
      company: 'Tunisie Telecom',
      location: 'Gabès, Tunisie',
      period: 'Juil. 2022',
      tasks: [
        'Découverte de l’architecture des réseaux GSM et des principes de télécommunication mobile.',
        'Analyse de la qualité de service réseau via Drive Tests et indicateurs KPI.'
      ]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* PROJETS ACADÉMIQUES                                                   */
  /* ------------------------------------------------------------------ */
  projects: [
    {
      name: 'Système IoT de Suivi Agricole (Smart Farm)',
      kind: 'Projet de fin d’année',
      org: 'EPI International Multidisciplinary School',
      location: 'Sousse, Tunisie',
      period: 'Sept. 2025 – Juin 2026',
      badge: 'ESP32 · Angular · Firebase',
      tasks: [
        { label: 'Conception & embarqué', text: 'Déploiement d’une architecture IoT à base d’ESP32 et de capteurs multigaz/climat pour l’automatisation et le contrôle environnemental des fermes.' },
        { label: 'Web & cloud', text: 'Développement d’un tableau de bord Angular interconnecté à Firebase Realtime Database pour la supervision en temps réel, la gestion des alertes et l’historique.' }
      ]
    },
    {
      name: 'Robot de Détection et d’Extinction d’Incendies',
      kind: 'Projet académique',
      org: 'EPI International Multidisciplinary School',
      location: 'Sousse, Tunisie',
      period: 'Févr. 2026 – Mai 2026',
      badge: 'Capteurs · Pompe · Alertes temps réel',
      tasks: [
        { label: 'Système embarqué', text: 'Conception d’un système autonome de détection de flammes et de fumée par capteurs embarqués.' },
        { label: 'Action', text: 'Déclenchement automatique d’une pompe d’extinction et transmission d’alertes en temps réel.' }
      ]
    },
    {
      name: 'Hackathon « AI for All »',
      kind: '1er Prix',
      org: 'ISSATSO & Pristini School of AI',
      location: 'Tunisie',
      period: '18–19 janv. 2025',
      badge: '1er Prix · IA · IoT santé',
      highlight: true,
      tasks: [
        { label: 'Matériel', text: 'Développement d’un gilet intelligent IoT intégrant des capteurs de suivi de santé (fréquence cardiaque, stress, activité physique).' },
        { label: 'Intelligence artificielle', text: 'Conception et entraînement de deux modèles d’intelligence artificielle pour l’analyse et la prédiction en temps réel de l’état de santé.' }
      ]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* FORMATION                                                             */
  /* ------------------------------------------------------------------ */
  education: [
    {
      degree: 'Cycle Ingénieur en Génie Informatique (spécialisation IoT et Robotique)',
      school: 'EPI International Multidisciplinary School',
      location: 'Sousse, Tunisie',
      period: 'Sept. 2024 – Présent',
      detail: 'Spécialisation : Programmation IoT et Robotique.',
      current: true
    },
    {
      degree: 'Licence en Technologies de l’Information et des Télécommunications',
      school: 'Institut Supérieur d’Informatique et de Multimédia de Gabès (ISIMG)',
      location: 'Gabès, Tunisie',
      period: 'Sept. 2021 – Juin 2024',
      detail: ''
    }
  ],

  /* ------------------------------------------------------------------ */
  /* COMPÉTENCES TECHNIQUES                                                */
  /* ------------------------------------------------------------------ */
  skills: [
    { category: 'Systèmes embarqués', icon: 'chip', items: ['Arduino', 'ESP32', 'Raspberry Pi', 'FPGA'] },
    { category: 'Programmation', icon: 'code', items: ['C', 'C++', 'Python', 'Java', 'JavaScript'] },
    { category: 'IoT & communication', icon: 'wifi', items: ['MQTT', 'Wi-Fi', 'Bluetooth/BLE', 'HTTP/HTTPS'] },
    { category: 'Web et mobile', icon: 'layout', items: ['HTML', 'CSS', 'React', 'Node.js', 'SQL', 'NoSQL'] },
    { category: 'Cloud & plateformes IoT', icon: 'cloud', items: ['AWS', 'Microsoft Azure', 'Firebase', 'Node-RED', 'ThingSpeak'] },
    { category: 'Électronique', icon: 'bolt', items: ['Proteus', 'KiCad', 'conception de cartes PCB'] },
    { category: 'Outils', icon: 'tool', items: ['Git', 'GitHub', 'Linux', 'VS Code', 'Arduino IDE', 'Packet Tracer'] }
  ],

  /* ------------------------------------------------------------------ */
  /* CERTIFICATIONS                                                        */
  /* ------------------------------------------------------------------ */
  certifications: [
    { name: 'Microsoft Azure', detail: 'Cloud Fundamentals' },
    { name: 'AWS Academy', detail: 'Cloud Foundations' },
    { name: 'AWS Academy', detail: 'Cloud Operations' },
    { name: 'DataCamp', detail: 'AI Fundamentals Certificate' },
    { name: 'Cisco', detail: 'Introduction to IoT' },
    { name: 'Cisco', detail: 'Introduction to Cybersecurity' },
    { name: 'Cisco', detail: 'Introduction to Data Science' }
  ],

  /* ------------------------------------------------------------------ */
  /* LANGUES - niveau de 1 (débutant) à 5 (maîtrise)                       */
  /* ------------------------------------------------------------------ */
  languages: [
    { name: 'Arabe', level: 5, label: 'Langue maternelle' },
    { name: 'Français', level: 3, label: 'Intermédiaire' },
    { name: 'Anglais', level: 3, label: 'Intermédiaire' }
  ],

  /* ------------------------------------------------------------------ */
  /* ACTIVITÉS ASSOCIATIVES                                                */
  /* ------------------------------------------------------------------ */
  associations: [
    { name: 'IEEE', detail: 'Membre', period: '2022 – 2023' },
    { name: 'ATAST', detail: 'Membre', period: '2024 – 2025' }
  ],

  /* ------------------------------------------------------------------ */
  /* CONTACT                                                              */
  /* ------------------------------------------------------------------ */
  contact: {
    intro: 'Une opportunité de stage de fin d’études (PFE), de projet ou de collaboration technique ? Je suis disponible pour en discuter.',
    emailSubject: 'Candidature stage de PFE - Khalil Ben Ali'
  }
};
