/* Change this file to get your personal Porfolio */

// import { UniqueInputFieldNamesRule } from "graphql";

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Stephen's Portfolio",
  description:
    "Hello, my name is Stephen Bullocks, and I recently graduated from the University of Central Florida with a degree in Full-Stack Web Development. As a web developer, I am passionate about creating innovative and user-friendly websites that meet the needs of both clients and end-users. I am dedicated to continuing my education and learning new technologies daily to improve my skills and stay up-to-date with the latest trends in web development.",
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
    "Hello, my name is Stephen Bullocks, and I recently graduated from the University of Central Florida with a degree in Full-Stack Web Development. As a web developer, I am passionate about creating innovative and user-friendly websites that meet the needs of both clients and end-users. I am dedicated to continuing my education and learning new technologies daily to improve my skills and stay up-to-date with the latest trends in web development.",
  resumeLink:
    "https://onedrive.live.com/view.aspx?resid=528410233463101B!6654&ithint=file%2cdocx&authkey=!AN9lxkvPlXdGodY",
  portfolio_repository: "https://github.com/sbullocks/professionalPortfolio",
  githubProfile: "https://github.com/sbullocks",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/sbullocks",
  // linkedin: "https://www.linkedin.com/in/stephen-bullocks-899559141/",
  // gmail: "sbullocks@gmail.com",
  // gitlab: "https://gitlab.com/sbullocks",
  // facebook: "https://placeholder.com/",
  // twitter: "https://placeholder.com/",
  // instagram: "https://placeholder.com/"

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
    name: "Twitch",
    link: "https://www.twitch.tv/paid4hire",
    fontAwesomeIcon: "fa-twitch", // Reference https://fontawesome.com/icons/twitch?style=brands
    backgroundColor: "#6441A4", // Reference https://simpleicons.org/?q=twitch
  },
  {
    name: "Gmail",
    link: "mailto:sbullocks@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://placeholder.com/",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://placeholder.com/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://placeholder.com/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Server-side frameworks for example Node.js and Express.js",
        "⚡ Experience with SQL or NoSQL databases such as MySQL and MongoDB",
        "⚡ Experience with version control systems including Git and GitHub",
        "⚡ Testing & Debugging - Experience with writing automated tests and debugging issues in web applications such as Jest.",
        "⚡ Development & Server Management - Experience deploying web applications to production environments and managing servers.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Visual Studio Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769AD",
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
          skillName: "BootStrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
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
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
      ],
    },
    {
      title: "edX TA/Grader",
      fileName: "DesignImg",
      skills: [
        "⚡ Deliver a faster turnaround for homework grades and consistently high-quality feedback.",
        "⚡ Prepare and stay up to date with specific curriculum expectations and core concepts.",
        "⚡ Grade student homework submissions within 24-48 hours of submission.",
        "⚡ Articulate clear and thorough feedback that supports the specific grade assigned.",
        "⚡ Identify student errors and communicate explicitly for visibility to local instructional team.",
        "⚡ Check submissions for plagiarism prior to grading and notify the team as needed.",
        "⚡ Encourage students' progression of learning according to our pedagogy.",
        "⚡ Communicate to the student in a way that also keeps the instructional staff in mind.",
      ],

      softwareSkills: [
        {
          skillName: "Visual Studio Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
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
          skillName: "CSS",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
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
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769AD",
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
          skillName: "BootStrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        // {
        //   skillName: "Handlebars.js",
        //   fontAwesomeClassname: "simple-icons:handlebars",
        //   style: {
        //     color: "#7952B3",
        //   },
        // },
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
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
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
      ],
    },
    {
      title: "Contact Center Manager",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Manage and supervise CSRs to ensure excellent customer service delivery.",
        "⚡ Develop and sustain a culture of training, professional development, and employee engagement to prepare, grow, and retain employees.",
        "⚡ Monitor operational performance to meet KPIs and Service Level Agreements and implement solutions to improve business performance.",
        "⚡ Analyze reports and statistical data to identify root causes for underperforming areas.",
        "⚡ Use critical thinking to develop solutions to improve business performance and partner success.",
        "⚡ Motivate teams through relationship building, coaching, and incentive programs to achieve desired outcomes.",
        "⚡ Collaborate with other departments within the organization to resolve issues.",
        "⚡ Gain expert-level knowledge on all partner products and promotions.",
        "⚡ Demonstrate a positive work ethic and commitment to achieving the best possible outcomes.",
        "⚡ Act as a role model and exemplify the company's cultural values.",
      ],
      softwareSkills: [
        {
          skillName: "WorkSpace",
          fontAwesomeClassname: "simple-icons:privateinternetaccess",
          style: {
            color: "#4BB749",
          },
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "simple-icons:slack",
          style: {
            color: "#4A154B",
          },
        },
        {
          skillName: "Zoom",
          fontAwesomeClassname: "simple-icons:zoom",
          style: {
            color: "#2D8CFF",
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
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
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
        "⚡ Studied the fundamental skills needed to become proficient in web development.",
        "⚡ Experience in a wide range of topics, including HTML, CSS, JavaScript, Node.js, React, and more.",
        "⚡ HTML/CSS: Learned how to create static web pages using HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). Also learned how to create and structure web pages, apply styles and layouts, and use multimedia elements like images and videos.",
        "⚡ JavaScript: Learned the basics of JavaScript, a programming language used to create dynamic and interactive web pages. Including how to manipulate the Document Object Model (DOM), handle events, create functions, and work with data types and structures.",
        "⚡ Node.js: Experience with how to use Node.js, a JavaScript runtime environment that allows them to build server-side applications using JavaScript. Practiced how to use Node.js to handle requests, interact with databases, and create APIs (Application Programming Interfaces).",
        "⚡ React: Studied how to use React, a JavaScript library for building user interfaces. Also learn how to create reusable components, handle state and props, and use JSX (a syntax extension for JavaScript) to create dynamic and responsive UIs.",
        "⚡ Databases: Practiced how to work with databases, including SQL (Structured Query Language) and NoSQL databases like MongoDB. Learned how to create and manipulate tables, perform CRUD (Create, Read, Update, Delete) operations, and use ORMs (Object-Relational Mappers) to interact with databases.",
        "⚡ Other tools and technologies: I also gained experience with other tools and technologies used in web development, such as Git (a version control system), APIs, JSON (JavaScript Object Notation), AJAX (Asynchronous JavaScript and XML), and more.",
      ],
      website_link: "https://bootcamp.ce.ucf.edu/coding/",
    },
    // {
    //   title: "Indiana University Bloomington",
    //   subtitle: "M.S. in Computer Science",
    //   logo_path: "iu_logo.png",
    //   alt_name: "Indiana University Bloomington",
    //   duration: "2021 - 2023",
    //   descriptions: [
    //     "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
    //     "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
    //     "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
    //   ],
    //   website_link: "https://www.indiana.edu/",
    // },
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
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "My Work History",
  description:
    "Background in managing teams and overseeing operations in various industries, including plumbing, maintenance, and customer service. I have also provided technical support, coached and trained employees, and built and maintained client relationships. I recently graduated from Full Stack Web Development and I am excited about this new career path and eager to learn and grow in the field.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Service Side Mechanical",
      experiences: [
        {
          title: "Florida Office Manager",
          company: "HVAC",
          company_url: "https://legatohealthtech.com/",
          logo_path: "ssm_logo.png",
          duration: "May 2021 - July 2022",
          location: "Orlando, Florida",
          description:
            "Led and managed a team of technicians across Florida and Georgia to ensure exceptional customer service and satisfaction. Provided technical support in the field and resolved escalated customer complaints while ensuring compliance with company values. Coached and trained technicians on customer service, sales, technical and mechanical knowledge, and company products and services to improve overall performance and productivity. Developed and managed new client onboarding procedures and documents to streamline processes and increase efficiency. Provided consistent feedback, encouragement, and professional development opportunities to service technicians to enhance their skills and knowledge.",
          color: "#0879bf",
        },
        // {
        //   title: "Advanced Plumbing Technology",
        //   company: "Plumbing Contractor",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "CD Maintenance Company",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    {
      title: "Advanced Plumbing Technology",
      experiences: [
        {
          title: "Plumbing Contractor",
          company: "Plumber",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "apt_logo.png",
          duration: "Nov 2020 - May 2021",
          location: "Casselberry, Florida",
          description:
            "Specialized in cast iron pipe replacement and utilized advanced equipment to diagnose and address pipe issues while offering affordable solutions to homeowners. Provided end-to-end plumbing services, including initial inspection, assessment, consultation, mitigation/replacement, system testing, and clean-up.",
          color: "#000000",
        },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "CD Maintenance Company",
      experiences: [
        {
          title: "Senior Team Leader",
          company: "Maintenance",
          company_url: "https://about.google/",
          logo_path: "cdmc_logo.png",
          duration: "Aug 2018 - Oct 2021",
          location: "Lake Mary, Florida",
          description:
            "Managed vendor relationships and ensured that all work orders were completed efficiently and effectively while adhering to company policies and procedures. Coached and developed team members to maximize their growth and productivity, resulting in increased overall team performance. Created and managed quotes to complete work orders and maintained client relationships by communicating regularly and resolving issues in a timely manner. Recruited new vendors in underrepresented areas and established long-term relationships to ensure smooth operations and customer satisfaction.",
          color: "#4285F4",
        },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
    {
      title: "IntouchCX",
      experiences: [
        {
          title: "Operations Manager in Training",
          company: "Credit Karma",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "intouchcx_logo.png",
          duration: "Nov 2016 - Apr 2018",
          location: "Altamonnte Springs, Florida",
          description:
            "Directed and managed all operational activities during shift and away from work. Contributed to the site’s overall strategic direction. Directly managed Team Managers, Team Leaders, and Customer Service Representatives.",
          color: "#000000",
        },
        {
          title: "Team Leader",
          company: "SHOWTIME",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "intouchcx_logo.png",
          duration: "May 2016 - Nov 2016",
          location: "Altamonnte Springs, Florida",
          description:
            "Providing guidance and support to customer service representatives, ensuring high-quality service is delivered to customers. Representing clients and maintaining knowledge of their brand and products. Coaching and advocating for team members, and administering performance evaluations and training programs to promote professional and personal development.",
          color: "#000000",
        },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Concentrix",
      experiences: [
        {
          title: "Team Leader",
          company: "AT&T",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "concentrix_logo.png",
          duration: "Nov 2014 - May 2016",
          location: "Heathrow, Florida",
          description:
            "Effectively interact with team members from diverse backgrounds and personalities. Demonstrate genuine interest in team members and maintain open lines of communication. Advocate for team members and coach them on performance. Write and deliver bi-annual performance appraisals and provide positive and negative feedback. Develop adaptive coaching strategies to help team members achieve their goals. Build relationships with team members to ensure metrics are achieved. Take end-to-end ownership of projects and meet or exceed deadlines for reporting. Create action plans to address issues and improve team performance. Support other leaders in achieving their goals. Attend calibration sessions, conference calls, and other meetings as required. Monitor attendance and provide input for training and development opportunities.",
          color: "#000000",
        },
        {
          title: "Team Support Specialist",
          company: "AT&T",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "concentrix_logo.png",
          duration: "Feb 2014 - May 2014",
          location: "Heathrow, Florida",
          description:
            "Customer service and sales experience with a focus on group interactions. Skilled in goal setting, problem-solving, and building stronger relationships with customers. Ability to acquire new customers and provide fast, efficient support. Experienced in multitasking and using chat and other technical support tools. Provide floor support through walking and chat to assist team members with customer issues. Live call listening and coaching to improve customer interactions and sales outcomes. Able to handle escalation calls and record and document customer interactions. Enforce company policies and procedures to ensure high-quality service and compliance. Up-train agents on best practices for customer service and sales. Skilled in managing phone time effectively while maintaining high customer satisfaction.",
          color: "#000000",
        },
        {
          title: "Technical Support Sales Rep II",
          company: "AT&T",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "concentrix_logo.png",
          duration: "Dec 2013 - Feb 2014",
          location: "Heathrow, Florida",
          description:
            "Experienced in customer service, sales, and group interactions. Skilled in goal setting, problem-solving, and building stronger relationships with customers. Proven ability to acquire new customers and provide fast, efficient support. Experienced in multitasking and using chat and other technical support tools.",
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
    "My projects makes use of vast variety of latest technology tools. I am learning to code everyday!",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "selfie.png",
    description:
      "I am available via LinkedIn as I do not have social media. You can message me, I will reply within 24-48 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Orlando, Florida",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps?q=orlando+florida&rlz=1C1WERZ_enUS997US997&um=1&ie=UTF-8&sa=X&ved=2ahUKEwisvv3uuuT9AhVyTDABHS1uCz0Q_AUoAXoECAEQAw",
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
