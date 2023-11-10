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
    shopify,
    wergu_web,
    medsen,
    stock_backend,
    parapharm,
    carrent,
    jobit,
    tripguide,
    threejs,
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
        "Utilisation de la stack MERN (MongoDB,Express,ReactJS,NodeJS)",
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
      image: "https://media.licdn.com/dms/image/C5103AQHA47BQUsKEcA/profile-displayphoto-shrink_200_200/0/1517058962856?e=2147483647&v=beta&t=mvZC0evAf6l5FxVE8DxnA41gEs6LBjs0Hym9v-RN7MA",
    },
    {
      testimonial:
        "En plus d’etre passionné, Diery est une personne qui a une qualité rare: Celle de s’adapter aux différentes situations sur lesquelles on le fait travailler. C’est un atout majeur dans un milieu qui evolue rapidement!",
      name: "Cheikh Seck",
      designation: "CEO",
      company: "Wergu",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Docko Sow",
      designation: "CTO",
      company: "Wergu",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Wergu Web",
      description:
        "Version Web de l'application mobile Wergu permettant voir les pharmacies ouvertes les plus proches dans notre zone.Il y a aussi entre autres la recherche d'equivalents et la des prix des medicaments sur le marché.",
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
      source_code_link: "https://github.com/Wergu/wergu-web-client",
    },
    {
      name: "Parapharm Mobile",
      description:
        "Application mobile permettant de rechercher des produits parapharmaceutiques au niveau des pharmacies les plus proches",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "maps",
          color: "pink-text-gradient",
        },
      ],
      image: parapharm,
      source_code_link: "https://github.com/Wergu/parapharm-mobile",
    },
    {
      name: "Medsen Website",
      description:
        "Site vitrine pour une entreprise médical au Sénégal.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
       
        {
          name: "AOS",
          color: "pink-text-gradient",
        },
      ],
      image: medsen,
      source_code_link: "https://github.com/jerry03-debug/MedSen",
    },
    {
      name: "Wergu Stock API",
      description:
        "API comprenant l'authentification, la gestion de commandes et les opérations CRUDE pour la gestion de stock des pharmacies.",
      tags: [
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
       
        {
          name: "rest api",
          color: "pink-text-gradient",
        },
      ],
      image: stock_backend,
      source_code_link: "https://github.com/Wergu/wergu-stock-back",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };