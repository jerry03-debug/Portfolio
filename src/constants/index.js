import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    wergu,
    awa,
    proassur,
    scanpay,
    photographer_portfolio,
    awa_chatbot,
    analytics,
    logo,
    shopify,
    wergu_web,
    medsen,
    stock_backend,
    parapharm,
    password,
    threejs,
    mouhamed_sylla,
    docko_sow,
    cheikh_seck,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Profil",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Concepteur d'applications Web",
      icon: web,
    },
    {
      title: "Développeur React Native",
      icon: mobile,
    },
    {
      title: "Développeur Backend",
      icon: backend,
    },
    {
      title: "Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Ingénieur Logiciel",
      company_name: "AWA AFRICA",
      icon: awa,
      iconBg: "#fff",
      date: "août 2025 - aujourd'hui",
      summary: "Produits digitaux d'assurance : acquisition, souscription et automatisation des opérations.",
      points: [
        "Contribué à Scan&Pay (front-end, fonctionnalités back-end, intégrations), parcours 100 % digital de souscription d'assurance auto, voyage et habitation bouclé en **~2 min**, avec paiement branché directement sur le flow métier existant.",
        "Contribué à un workflow d'extraction documentaire transformant cartes grises et permis photographiés en données structurées, qui pré-remplit le dossier de souscription et **supprime la ressaisie**.",
        "Conçu et implémenté des parcours WhatsApp Flows réalisant souscription auto, renouvellement/attestation et déclaration de sinistre **directement dans la conversation**.",
        "Mis en place un dispositif d'observabilité produit, du tunnel de conversion au parcours utilisateur, exploité par la compagnie et ses partenaires pour la **prise de décision** et le support opérationnel.",
        "Contribué à des plateformes SaaS pour les **IPM** (Institutions de Prévoyance Maladie) couvrant gestion des adhérents, cotisations, remboursements santé et réseau de soins.",
      ],
      stack: ["React", "TypeScript", "Node.js", "KeystoneJS", "MySQL", "REST / GraphQL", "Vertex AI", "Gemini", "WhatsApp Cloud API", "PostHog", "Nginx"],
    },
    {
      title: "Développeur Full Stack",
      company_name: "Proassur SA",
      icon: proassur,
      iconBg: "#fff",
      date: "août 2024 - août 2025",
      summary: "Automatisation de processus métier dans l'assurance.",
      points: [
        "Conçu un chatbot d'assurance, récompensé du **3e prix** du concours Insurance Innovation organisé par le PNUD.",
        "Automatisé des processus d'assurance auparavant manuels, de la gestion des contrats au traitement des sinistres.",
        "Intégré de l'extraction et de l'analyse documentaire dans les workflows métier.",
        "Mis en place les intégrations avec les services externes et APIs nécessaires aux parcours.",
      ],
      stack: ["React", "TypeScript", "Node.js", "KeystoneJS", "MySQL", "REST / GraphQL", "Google Cloud", "Vertex AI", "Gemini"],
    },
    {
      title: "Développeur Full Stack / Mobile Freelance",
      company_name: "Freelance",
      icon: logo,
      iconBg: "#fff",
      date: "nov. 2023 - sept. 2024",
      points: [
        "Conçu et développé des applications web et mobiles sur mesure répondant aux besoins métier des clients.",
        "Pris en charge chaque projet de l'analyse des besoins et du cadrage jusqu'à la mise en production.",
      ],
      stack: ["React", "React Native", "Node.js"],
    },
    {
      title: "Développeur Full Stack",
      company_name: "Wergu",
      icon: wergu,
      iconBg: "#fff",
      date: "avril 2023 - octobre 2023",
      summary: "Wergu : application de santé pour localiser les pharmacies de garde proches et faciliter l'accès aux médicaments (prix, équivalents).",
      points: [
        "Contribué au développement et à la maintenance de la première version web de Wergu, dans le domaine de la santé.",
        "Conçu et intégré des interfaces et fonctionnalités full stack, du front React à l'API Node.js.",
      ],
      stack: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "Développeur Mobile",
      company_name: "Wergu",
      icon: wergu,
      iconBg: "#fff",
      date: "juin 2022 - juillet 2022",
      summary: "Stage de fin de cycle (technicien supérieur). Wergu aide à trouver une pharmacie de garde proche et le bon médicament, au meilleur prix.",
      points: [
        "Contribué au développement de l'application mobile Wergu en React Native, de l'analyse à l'implémentation.",
        "Participé au module de recherche géolocalisée de pharmacies et de médicaments, avec recherche d'équivalents et de prix.",
      ],
      stack: ["React Native"],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Diéry est un technicien de très haut niveau possédant d'excellentes connaissances techniques et méthodologiques, et qui sait s’approprier rapidement du code d'un projet aussi bien en back qu'en front.",
      name: "Mouhamed Sylla",
      designation: "CONSULTANT DEVOPS / SCRUM-MASTER",
      company: "EVIDEN",
      image: mouhamed_sylla,
    },
    {
      testimonial:
        "En plus d’etre passionné, Diery est une personne qui a une qualité rare: Celle de s’adapter aux différentes situations sur lesquelles on le fait travailler. C’est un atout majeur dans un milieu qui evolue rapidement!",
      name: "Cheikh Seck",
      designation: "CEO",
      company: "Wergu",
      image: cheikh_seck,
    },
    {
      testimonial:
        "Travailler avec Diery Dia a été une expérience remarquable ; ses compétences exceptionnelles en développement back-end et son attention méticuleuse aux algorithmes et aux détails ont considérablement amélioré nos projets.",
      name: "Docko Sow",
      designation: "CTO",
      company: "Wergu",
      image: docko_sow,
    },
  ];
  
  // Rangés du plus récent au plus ancien (cf. le champ `year`).
  const projects = [
    {
      name: "Scan&Pay Assurances",
      year: 2026,
      description:
      "Participation au développement d'une application web/mobile pour acheter de l'assurance auto, voyage et habitation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react native",
          color: "green-text-gradient",
        },
        {
          name: "payments",
          color: "pink-text-gradient",
        },
      ],
      image: scanpay,
      source_code_link: "https://scanpay.sn",
      link_icon: "site",
    },
    {
      name: "Analytics Scan&Pay",
      year: 2026,
      description:
        "Dashboard interne d'acquisition : intégration de l'API PostHog, tracking UTM par canal (Instagram, Facebook…) et analyse d'entonnoir révélant les points d'abandon du parcours de souscription. L'équipe marketing sait enfin quels canaux convertissent et arbitre son budget sur des chiffres.",
      tags: [
        {
          name: "posthog",
          color: "blue-text-gradient",
        },
        {
          name: "funnels",
          color: "green-text-gradient",
        },
        {
          name: "utm tracking",
          color: "pink-text-gradient",
        },
      ],
      image: analytics,
      source_code_link: "",
      link_icon: "private",
      note: "Outil interne",
    },
    {
      name: "Portfolio - Photographe",
      year: 2026,
      description:
        "Portfolio générique pour photographe, avec galerie et services.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: photographer_portfolio,
      source_code_link: "https://jaypic-portfolio.vercel.app/",
      link_icon: "site",
    },
    {
      name: "AWA Chatbot",
      year: 2025,
      description:
        "Chatbot WhatsApp permettant d'assurer son véhicule directement depuis la conversation.",
      tags: [
        {
          name: "whatsapp",
          color: "blue-text-gradient",
        },
        {
          name: "chatbot",
          color: "green-text-gradient",
        },
        {
          name: "assurance",
          color: "pink-text-gradient",
        },
      ],
      image: awa_chatbot,
      source_code_link: "https://wa.me/221763298020",
      link_icon: "whatsapp",
    },
    {
      name: "Wergu Web",
      year: 2023,
      description:
      "Première version web de l'application Wergu : localisation des pharmacies ouvertes les plus proches, recherche d'équivalents de médicaments et de leurs prix. Le service n'est plus en ligne.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tomtom_maps",
          color: "pink-text-gradient",
        },
      ],
      image: wergu_web,
      source_code_link: "",
      link_icon: "private",
      note: "Dépôt privé",
    },
    {
      name: "Password Cracker",
      year: 2023,
      description:
        "Programme de cassage de mot de passe par des méthodes tel que BruteForce ou Dictionnary.",
      tags: [
        {
          name: "Java",
          color: "pink-text-gradient",
        },

      ],
      image: password,
      source_code_link: "https://github.com/jerry03-debug/PasswordCracker/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };