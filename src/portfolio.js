/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Stephen's Portfolio",
  description:
    "Full Stack Engineer building React frontends, Python/FastAPI backends, and real-time applications — using AI as a force multiplier to ship faster and think bigger. 10+ years of leadership and operations experience that brings genuine product instinct to engineering.",
  og: {
    title: "Stephen Bullocks Portfolio",
    type: "website",
    url: "http://sbullocks.com/",
  },
};

//Home Page
const greeting = {
  title: "Stephen Bullocks",
  logo_name: "StephenBullocks",
  nickname: "STEE-vən",
  subTitle:
    "I build full stack applications — React frontends, Python/FastAPI backends, real-time infrastructure, and everything in between — using AI as a force multiplier to ship faster and learn deeper. At ALTR, a cloud-native data security company, I spent 3+ years building production React features and expanding into AWS Lambda, Step Functions, and CloudWatch. Since then I've shipped four personal projects: Cluster (real-time PWA with Supabase Realtime, Edge Functions, and Web Push), Multiplier (an AI-augmented dev workflow demo), Calorie Buddy (friend-linked calorie tracker PWA), and Twitch Dashboard (full-stack analytics with Python, FastAPI, and React). I'm actively deepening my TypeScript skills and pushing further into full stack engineering. I bring 10+ years of leadership and client-facing experience that gives me genuine product instinct — I naturally think in user outcomes and care about why something is built, not just how.",
  resumeLink:
    "https://docs.google.com/document/d/1zolUC_D2Ztx3mGRTMWeSAmEpu-fiFNYj/edit",
  portfolio_repository: "https://github.com/sbullocks/professionalPortfolio",
  githubProfile: "https://github.com/sbullocks",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/sbullocks",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/stephen-bullocks-899559141/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sbullocks@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Frontend Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building production React applications with component architecture and state management (Redux, RTK)",
        "⚡ Responsive web design and UI development with Material-UI and custom CSS",
        "⚡ JavaScript and TypeScript for scalable, maintainable front-end codebases",
        "⚡ Progressive Web Applications (PWA) with offline support and web push notifications",
        "⚡ Testing and debugging with Jest and browser DevTools",
        "⚡ Git-based workflows with GitHub for version control and collaboration",
      ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "Material-UI",
          fontAwesomeClassname: "simple-icons:materialui",
          style: {
            color: "#0081CB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "PWA",
          fontAwesomeClassname: "simple-icons:pwa",
          style: {
            color: "#5A0FC8",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
    {
      title: "Full Stack & Cloud",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Node.js and Express.js for server-side application and API development",
        "⚡ AWS services including Lambda, Step Functions, and CloudWatch",
        "⚡ Supabase for real-time data, Realtime channels, Edge Functions, and authentication",
        "⚡ Python and FastAPI for backend APIs and data engineering",
        "⚡ MongoDB and MySQL for NoSQL and relational database management",
        "⚡ Vercel for frontend deployment, edge functions, and CI/CD pipelines",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#3ECF8E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "AI Native Development",
      fileName: "DesignImg",
      skills: [
        "⚡ Using AI as a force multiplier — from vague feature idea to production-ready, rendered code",
        "⚡ Integrating AI into development workflows for faster iteration and deeper learning",
        "⚡ Building AI-augmented applications with visible decision trails and documented judgment calls",
        "⚡ Compressing multi-week team efforts into days through intelligent AI collaboration",
        "⚡ Prompt engineering and AI tool evaluation for real-world production use cases",
      ],
      softwareSkills: [
        {
          skillName: "Claude AI",
          fontAwesomeClassname: "simple-icons:anthropic",
          style: {
            color: "#CC785C",
          },
        },
        {
          skillName: "Vercel V0",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "GitHub Copilot",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Graduate",
      iconifyClassname: "simple-icons:googlescholar",
      style: {
        color: "#4285F4",
      },
      profileLink: "https://www.linkedin.com/in/stephen-bullocks-899559141/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Central Florida",
      subtitle: "Full Stack Web Developer",
      logo_path: "ucf-horizontal-clear.png",
      alt_name: "UCF Logo",
      duration: "OCT 2022 - DEC 2022",
      descriptions: [
        "⚡ Completed an intensive full-stack web development bootcamp covering both front-end and back-end technologies.",
        "⚡ HTML/CSS: Built static and responsive web pages using HTML and CSS, including layouts, styles, and multimedia elements.",
        "⚡ JavaScript: Mastered core JavaScript concepts including DOM manipulation, event handling, functions, and data structures.",
        "⚡ Node.js: Built server-side applications using Node.js, handling requests, interacting with databases, and creating RESTful APIs.",
        "⚡ React: Developed dynamic UIs using React, including reusable components, state management, props, and JSX.",
        "⚡ Databases: Worked with both SQL (MySQL) and NoSQL (MongoDB) — including CRUD operations, schema design, and ORM usage.",
        "⚡ Additional tools: Git, APIs, JSON, AJAX, Agile development methodology, testing and debugging techniques.",
      ],
      website_link: "https://bootcamp.ce.ucf.edu/coding/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "FullStack Development",
      subtitle: "- University of Central Florida",
      logo_path: "fullstack_logo.png",
      certificate_link:
        "https://drive.google.com/drive/u/0/folders/1yYPF4AmYCP3GfCZB2GqaaE7cGvpT8RuM",
      alt_name: "UCF Bootcamp",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work History",
  description:
    "Frontend Engineer with 3+ years of professional experience building production React and JavaScript applications at ALTR. I bring 10+ years of leadership, operations, and client-facing expertise that gives me genuine product instinct. Currently upskilling, building personal projects with modern AI tools, and exploring new opportunities in frontend and full stack engineering.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "ALTR",
      experiences: [
        {
          title: "Frontend Engineer",
          company: "Cloud-Native Data Security",
          company_url: "https://www.altr.com/",
          // TODO: Add altr_logo.png to src/assests/images/ — download from https://www.altr.com
          logo_path: "github_logo.png",
          duration: "Aug 2023 - Feb 2026",
          location: "Melbourne, Florida · Remote",
          description:
            "Built and maintained production frontend features at ALTR, a cloud-native data security company. Worked primarily in React and JavaScript while expanding across the stack to include AWS Lambda, Step Functions, and CloudWatch. Collaborated closely with cross-functional teams to deliver features that help enterprises govern and protect sensitive data in the cloud.",
          color: "#0879bf",
        },
        {
          title: "Data Engineer Intern",
          company: "Cloud-Native Data Security",
          company_url: "https://www.altr.com/",
          logo_path: "github_logo.png",
          duration: "May 2023 - Sep 2023",
          location: "Melbourne, Florida · Hybrid",
          description:
            "Interned on the data engineering team at ALTR, gaining hands-on experience with cloud infrastructure and data pipelines. Worked alongside senior engineers to support the company's data access control and security platform.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "edX",
      experiences: [
        {
          title: "Teaching Assistant",
          company: "Online Education",
          company_url: "https://www.edx.org/",
          logo_path: "edx_logo.png",
          duration: "Feb 2023 - Jun 2024",
          location: "Remote",
          description:
            "Assisted students with fundamental working knowledge of HTML, CSS, JavaScript, third-party APIs, Progressive Web Applications, MySQL, API design, and the MERN stack (MongoDB, Express.js, React.js, Node.js). Helped students work with diverse teams on demanding timelines to build fully functional web applications from start to finish. Guided students to develop the skills necessary to learn new technologies and resolve issues independently.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "IntouchCX",
      experiences: [
        {
          title: "Team Leader",
          company: "L'Oreal",
          company_url: "https://www.intouchcx.com/",
          logo_path: "intouchcx_logo.png",
          duration: "Mar 2023 - Jun 2023",
          location: "Remote",
          description:
            "Supervised a team of customer service representatives for the L'Oreal account, ensuring excellent service delivery and strong KPI performance. Coached team members through relationship building and incentive programs while monitoring SLAs and implementing solutions to improve business performance.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Service Side Mechanical",
      experiences: [
        {
          title: "Office Manager",
          company: "HVAC",
          company_url:
            "https://www.linkedin.com/company/service-side-mechanical/",
          logo_path: "ssm_logo.png",
          duration: "May 2021 - Jul 2022",
          location: "Orlando, Florida",
          description:
            "Led and managed a team of technicians across Florida and Georgia to ensure exceptional customer service and satisfaction. Provided technical support in the field and resolved escalated customer complaints. Coached and trained technicians on customer service, sales, technical and mechanical knowledge, and company products and services. Developed and managed new client onboarding procedures and documentation to streamline processes and increase efficiency.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Advanced Plumbing Technology",
      experiences: [
        {
          title: "Plumbing Contractor",
          company: "Plumbing",
          company_url:
            "https://www.linkedin.com/company/advanced-plumbing-technology/",
          logo_path: "apt_logo.png",
          duration: "Oct 2020 - May 2021",
          location: "Casselberry, Florida",
          description:
            "Cast iron pipe replacement specialist. Used advanced equipment to show homeowners the current state of their pipes, assessed damage in a non-destructive manner, and provided affordable modern plumbing solutions. Managed end-to-end service: initial inspection → assessment → consultation → mitigation/replacement → system test → clean-up.",
          color: "#000000",
        },
      ],
    },
    {
      title: "CD Maintenance Company",
      experiences: [
        {
          title: "Senior Support Leader",
          company: "Maintenance",
          company_url:
            "https://www.linkedin.com/company/cd-maintenance-company/",
          logo_path: "cdmc_logo.png",
          duration: "Aug 2018 - Oct 2020",
          location: "Lake Mary, Florida",
          description:
            "Managed vendor relationships and ensured all work orders were completed efficiently while adhering to company policies. Coached and developed team members to maximize growth and productivity. Created and managed quotes for work orders and maintained long-term client relationships through regular communication and timely issue resolution. Recruited new vendors in underrepresented areas and built relationships to ensure smooth operations and client satisfaction.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "24-7 Intouch",
      experiences: [
        {
          title: "Junior Operations Manager",
          company: "Credit Karma",
          company_url: "https://www.intouchcx.com/",
          logo_path: "247_logo.png",
          duration: "May 2016 - Apr 2018",
          location: "Altamonte Springs, Florida",
          description:
            "Directed and managed all operational activities during shift. Contributed to the site's overall strategic direction. Directly managed Team Managers, Team Leaders, and Customer Service Representatives. Ensured production objectives and performance standards were met, managed scheduling per volume forecasts, and maintained headcount ratios per contractual agreements.",
          color: "#000000",
        },
        {
          title: "Senior Team Lead",
          company: "SHOWTIME",
          company_url: "https://www.intouchcx.com/",
          logo_path: "247_logo.png",
          duration: "May 2016 - Nov 2016",
          location: "Altamonte Springs, Florida",
          description:
            "Provided front-line direction to CSRs and ensured quality service in every customer interaction. Represented the client brand and maintained knowledge of products, promotions, and processes. Coached and advocated for team members while administering performance evaluations, training programs, and career development opportunities.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Concentrix",
      experiences: [
        {
          title: "Team Lead Manager",
          company: "AT&T",
          company_url: "https://www.concentrix.com/",
          logo_path: "concentrix_logo.png",
          duration: "2011 - May 2016",
          location: "Lake Mary, Florida",
          description:
            "Led diverse teams in a high-volume customer service environment. Maintained open communication, advocated for team members, delivered bi-annual performance appraisals, and developed adaptive coaching strategies. Managed attendance, created action plans to address performance gaps, and drove team metrics to consistently meet or exceed targets.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I build projects to learn, explore new technologies, and demonstrate real-world skills. Recent work includes a real-time friend presence PWA (Cluster), an AI-augmented workflow demo (Multiplier), and a full-stack Twitch analytics dashboard with Python and FastAPI. Check out my GitHub for the latest.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "selfie.png",
    description:
      "I'm available via LinkedIn and email. Feel free to reach out — I typically reply within 24-48 hours.",
  },
  blogSection: {
    title: "*Lifelong Learning Journey*",
    subtitle:
      "Full Stack Engineer in active job search mode — upskilling daily, shipping real projects, and using AI to accelerate my growth. I've built across the full stack: Cluster (real-time PWA with Supabase Realtime and Web Push), Multiplier (AI-augmented dev workflow demo), Calorie Buddy (friend-linked PWA with offline support and chart history), and Twitch Dashboard (Python/FastAPI backend + React frontend pulling live data from the Twitch Helix API). I'm actively learning TypeScript and going deeper into full stack engineering — building toward a role where I own features end to end. I care about shipping useful things, thinking like a product engineer, and growing into a role where both the code and the 'why behind it' matter. If you're building something interesting, let's talk.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Sanford, Florida",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/search/sanford+florida",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
