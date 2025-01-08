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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "full stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "web 3 developer",
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
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
   
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
   
  ];
  
  const experiences = [
    
    {
      title: "Full stack Developer",
      company_name: "self-project",
      date: " 22 nov 2024 - 30 nov 2024 ",
      icon : reactjs,
      points: [
       "using reactjs and bankend used moongose and made a paytm payment model",
       "use can send payment and payment is debited from the accound and credited to the other accound ",
       "and it is storing the information in backend and also the maded the login and signup pages authenitication using jwt"

      ],
    },
    {
      title: "React.js Developer",
      company_name: "self-projects",
      date: " 15 dec 2024  -  25 dec 2024",
      icon : reactjs,
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "use canvas and made an pen tool and square and added different functionality with storke and color "
      ],
    },
    {
      title: "React  Developer",
      company_name: "self-project",
      date: " 5 jan 2025 - 10 jan 2025",
      icon : reactjs,
      points: [
        "maded a porfolio website for myself and great animation with me and gpt  ",
        "make the website responsive as possible ",
        "use and learn technologies like framer and react three.js"
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "payment model",
      description:
        "Web-based platform that allows users to send the money to each other  ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/nishantbhanushali/paymentSystem",
    },
    {
      name: "white board",
      description:
        " a web application where user can draw and made shapes and fill color init",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "canvas",
          color: "green-text-gradient",
        },
        {
          name: "taiwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/nishantbhanushali/white-board-application",
    },
    {
      name: "portfolio",
      description:
"simple portfolio with some 3d effect and animation",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/nishantbhanushali/portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };