import {
  mobile,
  backend,
  creator,
  dropd,
  blog,
  Keeper,
  openzzeplin,
  aave,
  NFTApp,
} from "../assets";
import { IconBrandReact,IconBrandAws,IconCurrencyEthereum, IconBrandNodejs,IconSql,IconBrandGraphql, IconBrandNextjs,IconBrandPhp } from "@tabler/icons-react";


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
    title: "Front-end Developer",
    icon: mobile,
    technologies: [
      "HTML/CSS",
      "Tailwind",
      "React.JS",
      "Bootstrap",
      "Redux",
      "Git",
    ],
  },
  {
    title: "Back-end Developer",
    icon: backend,
    technologies: [
      "Node.Js",
      "Express",
      "RestFul API",
      "MongoDB",
      "My SQL",
      "Git",
    ],
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
    technologies: [
      "Solidity",
      "Hardhat",
      "web3.py/web3.js",
      "EVM",
      "Sub-graphs",
      "Moralis",
    ],
  },
  {
    title: "Dev-Opps",
    icon: creator,
    technologies: ["AWS", "Docker", "Linux Shell", "GCP", "NGINX"],
  },
];

const experiences = [
  {
    title: "Jr BlockChain Dev",
    company_name: "dropD",
    icon: IconBrandReact,
    icon2: IconBrandNodejs,
    icon3: IconCurrencyEthereum,
    iconBg: "lightgrey",
    date: "Present",
    points: [
      "Develop and maintain Solidity contracts for blockchain applications.",
      "Implement and maintain express routes for handling API requests",
      "Collaborate with cross-functional teams, including designers, product managers, and developers, to integrate the contracts into the overall product architecture.",
      "Participate in code reviews and provide constructive feedback to other developers",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Azal Events",
    icon: IconBrandReact,
    icon2: IconBrandAws,
    icon3: IconSql,
    iconBg: "lightgrey",
    date: "August 2023",
    points: [
      "Develop and maintain Solidity contracts for blockchain applications.",
      "Implement and maintain express routes for handling API requests",
      "Collaborate with cross-functional teams, including designers, product managers, and developers, to integrate the contracts into the overall product architecture.",
      "Participate in code reviews and provide constructive feedback to other developers",
    ],
  },
  {
    title: "Backend Developer and Q A ",
    company_name: "Gjcie Gndu",
    icon: IconBrandNextjs,
    icon2: IconBrandAws,
    icon3: IconBrandPhp,
    iconBg: "lightgrey",
    date: "May 2023",
    points: [
      "Develop and maintain Solidity contracts for blockchain applications.",
      "Implement and maintain express routes for handling API requests",
      "Collaborate with cross-functional teams, including designers, product managers, and developers, to integrate the contracts into the overall product architecture.",
      "Participate in code reviews and provide constructive feedback to other developers",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "FileSharein.com",
    icon2: IconBrandAws,
    icon: IconBrandNodejs,
    icon3: IconBrandNextjs,
    iconBg: "lightgrey",
    date: "May 2023",
    points: [
      "Develop and maintain Solidity contracts for blockchain applications.",
      "Implement and maintain express routes for handling API requests",
      "Collaborate with cross-functional teams, including designers, product managers, and developers, to integrate the contracts into the overall product architecture.",
      "Participate in code reviews and provide constructive feedback to other developers",
    ],
  },
];
const fexperiences = [];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Ecommerce Backend",
    description: "",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "My-SQL",
        color: "green-text-gradient",
      },
      {
        name: "Auth",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/KingSlayer-KS/Ecommerce",
  },
  {
    name: "NFT Minting App",
    description: "",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ERC-721",
        color: "grey-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: NFTApp,
    source_code_link:
      "https://github.com/KingSlayer-KS/Full_Stack_NFT_minting_Web_app",
  },

  {
    name: "AAVE Interaction",
    description:
      "In this project I interacted with AAVE, a DeFi protocol, using brownie",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Web3.py",
        color: "grey-text-gradient",
      },
      {
        name: "Brownie",
        color: "pink-text-gradient",
      },
    ],
    image: aave,
    source_code_link:
      "https://github.com/KingSlayer-KS/Interacting_with_AAVE_with_code",
  },
];

const servicess = [
  {
    Name: "Web Application",
    Price: "Individual Price",
    Description:
      "Whether you want a web app, paired with a marketing website, or a cross-platform app, I got you covered. Let's get together and discuss a high quality quote based on the scale of your vision!",
    Points: [
      "Unique, Modern, customized, responsive design",
      "Animations and interactions",
      "Scalable, Secure and Adaptive Backend",
    ],
  },
  {
    Name: "Website",
    Price: "$600*",
    Description:
      "Your website's vision is limitless - Let's make it happen",
    Points: [
      "Unique, Modern, customized, responsive design",
      "Animations and interactions",
      "Memorabele User Experience",
      "SEO and Speed optimization"
    ],
    Points2: [
      "Hosting (including Domain) Setup | $300",
      "CMS Implementation | $500",
      "Multilingual Support | $1000",
      "Analytics | $200"
    ],
    
  },
  {
    Name: "Shopify",
    Price: "$1200*",
    Description:
      "Enhance your Shopify store's online appeal with a bespoke theme tailored to showcase your products.",
    Points: [
      "Unique, Modern, customized, responsive design",
      "Seamless iN",
      "Memorabele User Experience",
      "SEO and Speed optimization"
    ],
    Points2: [
      "Hosting (including Domain) Setup | $300",
      "CMS Implementation | $500",
      "Multilingual Support | $1000",
      "Analytics | $200"
    ],

  },
];

export {
  services,
  experiences,
  testimonials,
  projects,
  fexperiences,
  servicess,
};
