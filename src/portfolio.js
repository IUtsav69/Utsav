/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Utsav's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Utsav Kumar Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Utsav Kumar",
  logo_name: "UtsavKumar",
  nickname: "utsav69",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1NtbuZoHlh3AifWn87MQWF6kGfYJA2wpM/view?usp=drivesdk",
  githubProfile: "https://github.com/IUtsav69",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/IUtsav69",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/utsav-kumar-881696268/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:utsavkumar1269@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
   },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Frontend Development",
      fileName: "DesignImg",
      skills: [
        "⚡ Creating responsive UIs with React.js and Tailwind CSS.",
        "⚡ Ensuring seamless user experiences with optimized designs.",
        "⚡ Managing state efficiently using Redux and Context API.",
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
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building robust APIs with Node.js and Express.",
        "⚡ Integrating databases like MongoDB and MySQL.",
        "⚡ Implementing secure authentication using JWT and OAuth.",
      ],
      softwareSkills: [
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos:nodejs",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#FF2BC2",
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
          skillName: "My SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#000000",
          },
        },
      ],
    },

    {
      title: "Ethical Hacking",
      fileName: "hackimg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
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
      siteName: "TryHackMe",
      iconifyClassname: "simple-icons:tryhackme",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://tryhackme.com/r/p/Ravana69",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/utsav69",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/utsavsingh69",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#323754",
      },
      profileLink: "https://leetcode.com/u/iutsav69/",
    },
    {
      siteName: "GeeksForGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.geeksforgeeks.org/user/hackeru3est/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Institute of Technology Manipur",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "nit manipur_logo.webp",
      alt_name: "NIT Manipur",
      duration: "2022 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Cloud Computing, Full Stack Development and Ethical Hacking.",
      ],
      website_link: "https://www.nitmanipur.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Certified Ethical Hacker",
      subtitle: "",
      logo_path: "ec.webp",
      certificate_link:
        "https://drive.google.com/file/d/1Z3Hg65Tvar2RYa3UE69gnHk6e86NGIwt/view?usp=drivesdk",
      alt_name: "EC Council",
      color_code: "#8C151599",
    },
    {
      title: "Google Data Analytics",
      subtitle: "",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/17UWyYdT9duMPh-bzDnqutbVr3LsOJhOZ/view?usp=drivesdk",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Google Cloud Security",
      subtitle: "",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/fe73470d-c214-4038-8223-ed2a500312e3/badges/10076832",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I completed an internship with a startup company, contributing as an AI Developer and gaining hands-on experience in machine learning and deep learning. Additionally, I volunteer as the Head of the Qubit Coding Club at NIT Manipur, where I lead and organize coding events, workshops, and hackathons to foster technical growth and collaboration within the community.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        // {
        //   title: "",
        //   company: "Looking for 1st job.",
        //   company_url: "",
        //   logo_path: "legato_logo.png",
        //   duration: "",
        //   location: "",
        //   description: "",
        //   color: "#0879bf",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Frontend Developer",
          company: "Aditya Industries",
          company_url: "#",
          logo_path: "delhivery_logo.png",
          duration: "May 2024 - July 2024",
          location: "Hajipur, Bihar",
          description:
            "Collaborated with a cross-functional team to enhance a responsive UI with React.js, increasing user engagement by 30%, adopted Material TailwindCSS, improving page load time by 20%, conducted data analysis to reduce bounce rates by 15%, and presented actionable insights to senior management, earning commendation for improving user satisfaction and efficiency.",
          color: "#ee3c26",
        },
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Head",
          company: "Qubit Codeing Club",
          company_url: "#",
          logo_path: "qubit.jpg",
          duration: "Oct 2023 - Present",
          location: "NIT Manipur",
          description:
            "As the Head of the Qubit Coding Club at NIT Manipur, I lead a team of passionate coders, organizing coding events, hackathons, and workshops to enhance technical skills. I ensure members have access to resources and mentorship while collaborating with faculty and industry experts to bring valuable learning opportunities. My focus is on fostering a culture of creativity, innovation, and teamwork within the club.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "",
  description:"",
};

const publicationsHeader = {
  title: "",
  description:
    "",
};

const publications = {
  data: [
    {
      id: "",
      name: "",
      createdAt: "",
      description: "",
      url:
        "#",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "",
  },
  addressSection: {
    title: "",
    subtitle:
      "",
    location_map_link: "",
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
