import {
  backend,
  creator,
  web,
  javascript,
  canva,
  html,
  reactjs,
  jest,
  vue,
  nodejs,
  mongodb,
  git,
  figma,
  ruby,
  erac,
  deVere,
  acuma,
  pizzaExp,
  axmldn,
  pret,
  langEmp,
  cultsig,
  superlearn,
  makers,
  bob,
  calc,
  cypress,
  youtube,
  netlify,
  orchlab,
  portWebsite,
  tailwind
} from "../assets";

import {
  logo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "techs",
    title: "Techs"
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Web Developer",
    icon: web,
  },
  {
    title: "Designer / Creator",
    icon: backend,
  },
  {
    title: "Project Manager",
    icon: creator,
  }
];

const skills = [
  "HTML 5",
  "Tailwind",
  "JavaScript",
  "React JS",
  "Vue.js",
  "Jest",
  "Node.js",
  "Ruby",
  "MongoDB",
  "Cypress",
  "Git",
  "Figma",
  "Canva",
  "CSS",
  "GraphQL",
  "PostgreSQL",
  "MySQL",
  "Express",
  "RSpec",
  "Redux"
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue.js",
    icon: vue,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Cypress",
    icon: cypress,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Canva",
    icon: canva,
  },
];

const experiences = [
  {
    title: "Freelance: Software Engineer",
    company_name: "Farzan Imanzadeh (Intl.)",
    icon: logo,
    iconBg: "#d5d5d5",
    date: "August 2022 - Present",
    points: [
      "Collaborated on various projects, including with a leading artist/engineer to create an accessible app for disabled music lovers",
      "Work with other engineers to architect, build and test new features",
      "Collaborating with cross-functional teams including designers and product managers to create high-quality products",
      "Implement responsive design, debug and build software apps, ensuring cross-browser compatibility",
      "Perform code walk-throughs to ensure code correctness and participate in code reviews",
      "Develop and maintain web applications using JS, ReactJS, Ruby, Vue and other technologies",
    ],
  },
  {
    title: "Aspiring full stack engineer",
    company_name: "Makers Academy (London)",
    icon: makers,
    iconBg: "#d5d5d5",
    date: "March 2022 - July 2022",
    points: [
      "Instructed in all vital aspects of software development, given regular tests and projects that developed my abilities of producing web and desktop apps in Ruby and JavaScript",
      "Learnt to break down project requirements, create user stories, define MVP to easily accomplish tasks within a timescale",
      "Code following principles like TDD/BDD to create clear code and well-tested applications",
      "Develop self-directed teaching abilities that allow to learn a new language/framework easily",
      "Undertaken specialised EQ training curriculum that dives deeper into empathy and teamwork",
      "Collaborate with others using GitHub version control and CI/CD to reduce integration risk",
      "Use Agile methodologies and pair programming to work well in a team, XP values, daily stand-ups and sprint planning",
      "Give and receive feedback using code reviews and open/respectful communication to other developers",
    ],
  },
  {
    title: "Farsi to English Interpreter",
    company_name: "Language Empire (London)",
    icon: langEmp,
    iconBg: "#d5d5d5",
    date: "January 2020 - December 2021",
    points: [
      "Provided translating services for the NHS and other organisations",
      "Strong communication skills, building rapport and trusted relationships with patients aged between 10 and 90 years old",
    ],
  },
  {
    title: "Marketing Executive",
    company_name: "Cultural Signatures Ltd. (London)",
    icon: cultsig,
    iconBg: "#d5d5d5",
    date: "March 2020 - December 2020",
    points: [
      "Helped create company website from scratch with no prior coding knowledge",
      "Raised awareness of upcoming events through several media outlets i.e. Instagram, Facebook",
      "Worked closely with creative agencies to develop marketing materials i.e. adverts and brochures",
      "Sourced and secured sponsorship, leading to donations for life-threatening diseases such as multiple sclerosis",
      "Prepared weekly/monthly reports for management to aid tracking of marketing performance"
    ],
  },
  {
    title: "Self-teaching programming languages",
    company_name: "Soon-to-be developer (London)",
    icon: superlearn,
    iconBg: "#d5d5d5",
    date: "September 2019 - February 2022",
    points: [
      "Not afraid of a new challenge, I decided to give software engineering a go and did not look back",
      "Dived deeper into various languages/frameworks such as Ruby, Git, JavaScript, HTML and CSS",
      "Created command line terminal games using Ruby (can be found on my GitHub)",
      "Commenced preparations to begin coding bootcamp with Makers, put on hold due to Covid-19 pandemic",
    ],
  },
  {
    title: "Team Leader (Supervisor)",
    company_name: "Pret A Manger (London)",
    icon: pret,
    iconBg: "#d5d5d5",
    date: "December 2018 - August 2019",
    points: [
      "Training team regarding customer service and what is expected of them in line with Pret standards",
      "Handling and resolving customer complaints while providing remarkable customer service",
      "Flexible role: carry out barista, hot food chef, team member as well as manager duties on every shift",
      "Opening and closing of high profile branch, banking, supplies ordering and accounting reconciliation duties"
    ],
  },
  {
    title: "Senior Lettings Negotiator",
    company_name: "AXM London (London)",
    icon: axmldn,
    iconBg: "#d5d5d5",
    date: "December 2017 - November 2018",
    points: [
      "Provided exceptional customer service resulting in word of mouth referrals and positive Google reviews",
      "Quarterly report compilation for landlords regarding tenant profiles and year to date income",
      "Accounting: Account reconciliation for the business, chasing invoices and general bookkeeping duties",
      "Instigated new strategies for business development, leading to additional business and 20% profit growth"
    ],
  },
  {
    title: "Manager",
    company_name: "Pizza Express (London)",
    icon: pizzaExp,
    iconBg: "#d5d5d5",
    date: "December 2016 - November 2017",
    points: [
      "Managing 20+ employees to maintain excellent customer service and meet specific restaurant targets in one of the busiest branches in the UK",
      "Accounting: Developed understanding of sales, labour and profit forecasts",
      "Administration: Filing and organising of restaurant documentation (invoices, employee files etc.)",
      "Resolving and handling customer queries and issues (mass bookings, complaints, compliments, requests, pizza making parties (adults and children))"
    ],
  },
  {
    title: "Wealth Advisor",
    company_name: "deVere Acuma (Marina Mall, Dubai)",
    icon: acuma,
    iconBg: "#d5d5d5",
    date: "July 2016 - November 2016",
    points: [
      "Implemented business development strategies such as referral incentives, golf days and family fun fairs",
      "Delivered exceptional customer service, resulting in recognition from management as well as clients",
      "First point of contact for clients: quarterly reports, complaints handling, providing investment updates and financial reviews to meet clients' lifestyle needs",
      "Expanded on my knowledge from Malta HQ (see below) by diving deeper into insurance, structured notes, financial derivatives and savings products"
    ],
  },
  {
    title: "Wealth Advisor",
    company_name: "deVere Group (Malta HQ)",
    icon: deVere,
    iconBg: "#d5d5d5",
    date: "January 2016 - July 2016",
    points: [
      "6 weeks intensive training based in the Malta headquarters",
      "Typical 6am - 7pm work days, studied in my own time and achieved CISI level 1 with 96% pass rate",
      "Effectively utilised CRM systems to keep track of clients and potential business opportunities",
      "Data sourcing: Learnt how to source leads through a variety of methods including LinkedIn"
    ],
  },
  {
    title: "Management Trainee",
    company_name: "Enterprise Rent-A-Car (London/Norwich)",
    icon: erac,
    iconBg: "#d5d5d5",
    date: "November 2014 - December 2015",
    points: [
      "Found my passion for coding through 'Ralph' (IBM software to manage car fleet). Never thought anything of it and didn't pursue tech roles",
      "Demonstrated my excellent customer service skills in my graduate role by achieving over 90% completely satisfied clients across two branches",
      "Entered the 'Elite Club' (top 25 employees) in London for upsells, rentals and customer service",
      "Developed new business through company drop ins and word-of-mouth referrals"
    ],
  },
];

const projects = [
  {
    name: "Brains On Brioche",
    description:
      "Web-based platform that allows users to search for recipes using ingredients at their disposal in their 'fridge'.",
    tags: [
      {
        name: "MERN stack",
        color: "blue-text-gradient",
      },
      {
        name: "Spoonacular API",
        color: "green-text-gradient",
      },
      {
        name: "Cypress",
        color: "pink-text-gradient",
      },
    ], 
    image: bob,
    otherImage: youtube,
    source_code_link: "https://github.com/Farzan-I/brains-on-brioche",
    source_code_link_other: "https://www.youtube.com/watch?v=Q8ubu80GSio",
  },
  {
    name: "Nostalgic Calculator",
    description:
      "Simple, easy, nostalgic calculator web app that enables users to solve mathematical problems without any adverts or distractions.",
    tags: [
      {
        name: "Vanilla JS",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Netlify",
        color: "pink-text-gradient",
      },
    ],
    image: calc,
    otherImage: netlify,
    source_code_link: "https://github.com/Farzan-I/simple-calculator",
    source_code_link_other: "https://nostalgic-calculator.netlify.app",
  },
  {
    name: "Orchlab Strings",
    description:
      "Made for disabled, colour blind users, this app mimics string instruments and allows users to pluck or bow the 'strings'.",
    tags: [
      {
        name: "Vue.js",
        color: "blue-text-gradient",
      },
      {
        name: "External sounds",
        color: "green-text-gradient",
      },
      {
        name: "Netlify",
        color: "pink-text-gradient",
      },
    ],
    image: orchlab,
    otherImage: netlify,
    source_code_link: "https://github.com/gawainhewitt/orchlab-strings",
    source_code_link_other: "https://orchlab-strings.netlify.app",
  },
  {
    name: "Portfolio Website",
    description:
      "Listed here for those curious to know how this website was sculpted. A lot of blood, sweat, caffeine and tears not mentioned!",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Netlify",
        color: "pink-text-gradient",
      },
    ],
    image: portWebsite,
    otherImage: netlify,
    source_code_link: "https://github.com/Farzan-I/portfolio-website",
    source_code_link_other: "https://farzanimanzadeh.netlify.app/",
  },
];

export { services, skills, technologies, experiences, projects};