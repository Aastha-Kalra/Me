import {
  FaDiagramProject,
  FaEnvelope,
  FaGithub,
  FaHouse,
  FaLinkedinIn,
  FaRenren,
  FaUser,
} from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
export const Socials = [
  {
    id: `linkedin-${Date.now()}`,
    icon: FaLinkedinIn,
    uril: "https://www.linkedin.com/in/aastha-kalra9927/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    icon: FaGithub,
    uril: "https://github.com/Aastha-Kalra",
    color: "#fff",
  },
];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "about",
    name: "About",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "portfolio",
    name: "Portfolio",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "skills",
    name: "Skills",
  },
  {
    id: `experience-${Date.now()}`,
    Icon: GrUserExpert,
    uri: "experience",
    name: "Experience",
  }, 
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: `goals-${Date.now()}`,
    name: "My Daily Goals",
    category: "*featured",
    imgSrc: "https://aastha-kalra.netlify.app/dailyGoals.jpg",
    gitURL: "https://github.com/Aastha-Kalra/My-Daily-Goals",
    live: "https://my-daily-goal.netlify.app/",
    about:
      " My Daily Goals app, built with React.js and Firebase, offers secure user management, empowering users with personalized experiences.",
  },
  {
    id: `star-${Date.now()}`,
    name: "5 Star Recipes",
    category: "*featured",
    imgSrc: "https://i.pinimg.com/originals/b7/23/19/b723195d11e17eff474399584af601ee.jpg",
    gitURL: "https://github.com/Aastha-Kalra/5-Star-Recipe",
    live: "https://5star-recipe.netlify.app/",
    about:
      "Discover 5-star ReactJS recipe app, effortlessly explore flavors, detailed ingredients, step-by-step videos, and instant access.",
  },
  {
    id: `saas-${Date.now()}`,
    name: "SaaS Landing Page",
    category: "Frontend",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjAD6V1CjhfTIXFJsGUdmCrHF6mgM6nJABkHFnWYwbDjxVHGyXDVw0k5CRoHo9TqwPGI&usqp=CAU",
    gitURL: "https://github.com/Aastha-Kalra/SaaS-Landing-Page",
    live: "https://solar-enegry.netlify.app/",
    about:
      "React-powered Solar Energy landing page with detailed CSS, seamless navbar animation and immersive experience on any device.",
  },


  {
    id: `brand-${Date.now()}`,
    name: "Kalra Brandies",
    category: "*featured",
    imgSrc: "https://www.similarweb.com/blog/wp-content/uploads/2022/06/BLOG-THUMBNAIL-2-2.png",
    gitURL: "https://github.com/Aastha-Kalra/KalraBrandies",
    live: "https://shoppingcart99.netlify.app/",
    about:
      "Crafted a ReactJS shopping cart with brand-based product search, dynamic brand addition, and seamless 'add to bag' functionality for an enhanced user experience. User can modify their products. ",
  },

  {
    id: `password-${Date.now()}`,
    name: "CipherKey Generator",
    category: "*featured",
    category:"ReactJs",
    imgSrc: "https://media.gettyimages.com/id/1160411718/video/random-password-generator.jpg?s=640x640&k=20&c=JXRwgmh_hGgZaqz_-G_K7qaarlkHJkNzg6kaDVOgb5w=",
    gitURL: "https://github.com/Aastha-Kalra/Paasword-generator",
    live: "https://passwordgenerator9927.netlify.app/",
    about:
      "Developed ReactJS Password Generator: customizable length, add numbers/characters, copy to clipboard feature. Enjoy the experience, and consider giving a star!",
  },

  {
    id: `avataar-${Date.now()}`,
    name: "Create Your Avataar",
    category: "ReactJs",
    imgSrc: "https://lh3.googleusercontent.com/3s1ltojdp4SY-2MPuk9vVNX-iauSkKRYGybs8CFwoWPs0p72NnzYLKd2hAGU5R6nf7rssMZAJyaDkj3rUeqG0PH-nA=w640-h400-e365-rj-sc0x00ffffff",
    gitURL: "https://github.com/Aastha-Kalra/Create-Avataar-UI",
    live: "https://create-avataar.netlify.app/",
    about:
      "Tailwind CSS-enhanced React Avatar Creator: simplified selection, categorized searches, seamless previews, and user-friendly design for a smooth avatar selection experience.",
  },

  {
    id: `ui-${Date.now()}`,
    name: "Linked UI clone",
    category: "Frontend",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoshOlxyORcyPziCsl4GWXpjEKyHprBPRR9W9lQj50eg8iqDh0LfrGUs2c2VLSTVH_pZA&usqp=CAU",
    gitURL: "https://github.com/Aastha-Kalra/Linkedin-UI-clone",
    live: "https://linkedin-ui.netlify.app/",
    about:
      "React.js and Tailwind CSS fuel user profile platform—upload resumes, add work experience, and create professionalism.",
  },

  {
    id: `profile-${Date.now()}`,
    name: "Edit Your Profile",
    category: "Frontend",
    imgSrc: "https://help.explaineverything.com/hc/article_attachments/360020997479/File_000__1_.png",
    gitURL: "https://github.com/Aastha-Kalra/Edit-Your-Profile",
    live: "https://profile-editing.netlify.app/",
    about:
      "React.js and Tailwind CSS power profile editing app—customize like LinkedIn with seamless, intuitive design.",
  },

  {
    id: `student-${Date.now()}`,
    name: "Student Record",
    category: "ReactJs",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSron6LURmpLpmJJGzFaO4wOGLF9QhAsMLk_SdmjQ16YYPQ-Bm__IC9Ri6OiiFAoSBY0&usqp=CAU",
    gitURL: "https://github.com/Aastha-Kalra/StudentRecord",
    live: "https://students-doc.netlify.app/",
    about:
      "Built a responsive ReactJS Student Record Web App: add, delete, update student data, and save in local storage for future use.",
  },

  {
    id: `quotes-${Date.now()}`,
    name: "My Quotes",
    category: "Frontend",
    imgSrc: "https://other.sentencedict.com/simage/457/32457.jpg",
    gitURL: "https://github.com/Aastha-Kalra/Quote-generator-website",
    live: "https://my-awesome-quotes.netlify.app/",
    about:
      "Built a responsive ReactJS Student Record Web App: add, delete, update student data, and save in local storage for future use.",
  },
];
