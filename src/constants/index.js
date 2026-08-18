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
      title: "Software Engineer",
      company_name: "AWA AFRICA",
      icon: awa,
      iconBg: "#fff",
      date: "août 2025 - aujourd'hui",
      points: [
        "Participation à l'ensemble du cycle de développement des solutions numériques : conception, modélisation, développement et mise en production.",
        "Optimisation et maintenance des systèmes pour garantir leur fiabilité et leurs performances.",
        "Conception d'interfaces utilisateurs intuitives en collaboration avec l'équipe design.",
        "Intégration de bonnes pratiques de développement logiciel et de revues de code pour améliorer la qualité du produit.",
      ],
    },
    {
      title: "Développeur Full Stack",
      company_name: "Proassur SA",
      icon: proassur,
      iconBg: "#fff",
      date: "août 2024 - août 2025",
      points: [
        "Contribution à la transformation digitale du secteur de l'assurance par le développement de solutions innovantes.",
        "Amélioration de l'expérience client et optimisation des processus internes.",
        "Mise en place d'applications web hybrides et de services back-end robustes.",
        "Travail en mode collaboratif avec des équipes variées, dont produit, design et QA.",
      ],
    },
    {
      title: "Développeur Full Stack / Mobile Freelance",
      company_name: "Freelance",
      icon: logo,
      iconBg: "#fff",
      date: "nov. 2023 - sept. 2024",
      points: [
        "Réalisation de projets mobiles et web sur mesure pour des clients.",
        "Conception et développement d'applications responsives et ergonomiques.",
        "Gestion de la relation client et des livrables tout au long du cycle projet.",
        "Création de prototypes et interfaces visuelles pour une expérience utilisateur forte.",
      ],
    },
    {
      title: "Développeur Mobile",
      company_name: "Wergu",
      icon: wergu,
      iconBg: "#fff",
      date: "Juin 2022 - Juillet 2022",
      points: [
        "Stage conventionné de fin de cycle pour l'obtention du diplôme de technicien supérieur en informatique",
        "Mise en place d'une application mobile de l'analyse au developpement avec notamment le framework React Native",
        "Participation à des revues de code et fournir des retours constructifs aux autres développeurs.",
        "Travail en équipe en suivant la méthodologie Agile pour favoriser l'adaptabilité tout au long du projet",

      ],
    },
   
    {
      title: "Développeur Full stack ",
      company_name: "Wergu",
      icon: wergu,
      iconBg: "#fff",
      date: "Avril 2023 - Octobre 2023",
      points: [
        "Création de design pour avoir des produits intuitifs pour les utilisateurs",
        "Le développement et la maintenance d'applications web dans le domaine de la santé. ",
        "Utilisation de la stack MERN (MongoDB,Express,React,Node)",
        "Collaboration avec des équipes pluridisciplinaires, y compris des concepteurs, des chefs de produit et d'autres développeurs, pour créer des produits de haute qualité.",
        


      ],
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