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
    id: "linkedin",
    name: "LinkedIn",
    icon: FaLinkedinIn,
    uril: "https://www.linkedin.com/in/aastha-kalra9927/",
    color: "#38BDF8",
  },
  {
    id: "github",
    name: "GitHub",
    icon: FaGithub,
    uril: "https://github.com/Aastha-Kalra",
    color: "#F8FAFC",
  },
  {
    id: "email",
    name: "Email",
    icon: FaEnvelope,
    uril: "mailto:aasthakalra2004@gmail.com",
    color: "#3B82F6",
  },
];

export const Menus = [
  {
    id: "home",
    Icon: FaHouse,
    uri: "home",
    name: "Home",
  },
  {
    id: "about",
    Icon: FaUser,
    uri: "about",
    name: "About",
  },
  {
    id: "skills",
    Icon: FaRenren,
    uri: "skills",
    name: "Skills",
  },
  {
    id: "projects",
    Icon: FaDiagramProject,
    uri: "portfolio",
    name: "Projects",
  },
  {
    id: "experience",
    Icon: GrUserExpert,
    uri: "experience",
    name: "Experience",
  },
  {
    id: "contact",
    Icon: FaEnvelope,
    uri: "contact",
    name: "Contact",
  },
];

export const ProjectsData = [
  {
    id: "cardora",
    name: "Cardora",
    category: "Featured",
    badge: "Production SaaS",
    imgSrc: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000",
    gitURL: "https://github.com/Aastha-kalra",
    live: "https://cardora.ca",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Typesense Search", "SaaS Marketplace", "REST APIs"],
    problemSolves: "Streamlines pre-owned vehicle discovery, trade-ins, and financing in Ontario.",
    about:
      "Modern automotive dealership & marketplace SaaS. Solves traditional car buying friction by providing lightning-fast vehicle search via Typesense, an instant under-2-minute trade-in valuation engine, automated financing pre-qualification without credit score impact, and dynamic payment estimation.",
  },
  {
    id: "grcars",
    name: "GRCars (Gedi Route)",
    category: "Featured",
    badge: "Automotive Platform",
    imgSrc: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000",
    gitURL: "https://github.com/Aastha-kalra",
    live: "https://grcars.ca",
    tags: ["Next.js", "Tailwind CSS", "Inventory Engine", "Financing APIs", "Full Stack", "Database"],
    problemSolves: "Automates vehicle discovery, instant financing pre-qualification, and trade-in appraisals.",
    about:
      "Full-scale Canadian automotive commerce platform ('Right Car. Right Price'). Solves opaque dealer pricing and slow financing through instant multi-category inventory filtering (SUVs, Sedans, Commercial EVs, Hybrids), custom bi-weekly loan calculator & credit-safe pre-qualification, 2-minute sell/trade offers, and wheels & rims ecosystem integration.",
  },
  {
    id: "goldcash",
    name: "GoldCash",
    category: "Featured",
    badge: "Digital Gold",
    imgSrc: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80&w=1000",
    gitURL: "https://github.com/Aastha-kalra",
    live: "https://goldcash.io",
    tags: ["Next.js", "Node.js", "Wallet Engine", "Cashfree & Stripe", "RESTful APIs", "MongoDB"],
    problemSolves: "Drives user retention and gamified rewards for digital gold asset commerce.",
    about:
      "Rewards engine and digital gold platform. Solves user acquisition & retention challenges by engineering an interactive spin-and-win algorithm with 24-hour cooldown logic, an internal ledger wallet balance system, and seamless dual payment gateways (Cashfree & Stripe) with multi-country currency support.",
  },
  {
    id: "forteh",
    name: "Forteh",
    category: "Full Stack",
    badge: "Job Marketplace",
    imgSrc: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000",
    gitURL: "https://github.com/Aastha-kalra",
    live: "https://forteh.ca",
    tags: ["Node.js", "Express", "OpenAI API", "MongoDB", "Third-Party APIs", "Mailerlite", "Stripe"],
    problemSolves: "Connects startups with vetted fractional executives and senior specialists on demand.",
    about:
      "Talent marketplace backend and integration architecture. Solves the high cost and lengthy hiring cycles of executive recruiting for startups. Engineered AI-powered profile generation using OpenAI API, dynamic industry filtering, calendar scheduling, and hardened security across integrated third-party services.",
  },
  {
    id: "geonursery",
    name: "Geo Green Nursery",
    category: "Full Stack",
    badge: "E-Commerce System",
    imgSrc: "/Images/geogreen.jpg",
    gitURL: "https://github.com/Aastha-kalra",
    live: "https://geogreennursery.co.in",
    tags: ["Node.js", "Express.js", "MongoDB", "SendGrid APIs", "Cart Engine", "Database Design"],
    problemSolves: "Digitizes nursery botanical inventory and automated ordering workflows.",
    about:
      "E-commerce backend and administrative platform for botanical landscaping. Solves offline ordering challenges by delivering scalable RESTful APIs for catalog indexing, dynamic multi-tier cart calculations, direct purchase inquiries, and automated transactional customer notifications via SendGrid.",
  },
];
