/* Change this file to get your personal Porfolio */
//  reference - https://fontawesome.com/v4/cheatsheet/
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Harshad's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Harshad Vekariya Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Harshad Vekariya",
  logo_name: "HarshadVekariya",
  nickname: "your beloved Rancho",
  subTitle:
    "Computers are useless. They can only give you answers. - Pablo Picasso.",
  resumeLink:
    "https://drive.google.com/file/d/1m2q5N0G1bAXYCeqgRdBIyGD1a3Ky6WhU/view?usp=share_link",
  portfolio_repository: "https://github.com/harshadvekariya/myFolio",
  githubProfile: "https://github.com/harshadvekariya",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/harshadvekariya",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "harshadvekariya3008@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harshad-vekariya",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:harshadvekariya3008@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Github",
  //   link: "https://github.com/harshadvekariya",
  //   fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
  //   backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  // },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },

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
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experienced working with Computer Vision and Machine Learning projects",
        "⚡ Modeling, optimization, algorithms.",
        "⚡ Data science for Industry 4.0 to improve KPIs",
        "⚡ Integration with cyber-physical systems",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "SciPy",
          fontAwesomeClassname: "simple-icons:scipy",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Machine Vision",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        // {
        //   skillName: "PyTorch",
        //   fontAwesomeClassname: "logos-pytorch",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
      ],
    },
    {
      title: "Robotics and automation",
      fileName: "FullStackImg",
      skills: [
        "⚡ Mechanical design and Embedded system development",
        "⚡ CAD, B&R PLC programming, Industrial automation",
        "⚡ Experienced with robotics in plastic machinery.",
        "⚡ Personal projects on robotics and IoT systems.  Courses on Aerial robotics, motion planning and mobility.",
      ],
      softwareSkills: [
        {
          skillName: "Mechanical Design & CAD/FEA",
          fontAwesomeClassname: "fa-cogs",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Embedded system and PLC programming",
          fontAwesomeClassname: "fa-microchip",
          style: {
            // backgroundColor: "#000000",
            color: "#0000000",
          },
        },
        {
          skillName: "IIoT and digital transformation",
          fontAwesomeClassname: "fa-cloud",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "",
          fontAwesomeClassname: "fa-wifi",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "R&D, Product development, Intrapreneur, team work, innovation",
      fileName: "DesignImg",
      skills: [
        "⚡ End-to-end product development from market research and conceptualization to commercialization",
        "⚡ Demonstrated innovation through various product and process improvements in the organization. ",
        "⚡ Coordinated with global teams and cross-functional teams to develop solutions",
      ],
      softwareSkills: [
        {
          skillName: "Research",
          fontAwesomeClassname: "simple-icons:researchgate",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Product development",
          fontAwesomeClassname: "fa-wrench",
          style: {
            color: "#0000000",
          },
        },
        {
          skillName: "Innovation",
          fontAwesomeClassname: "fa-lightbulb-o",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Team work and communication",
          fontAwesomeClassname: "fa-users",
          style: {
            color: "#0000000",
          },
        },
        {
          skillName: "Goal oriented",
          fontAwesomeClassname: "fa-bullseye",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
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
      title: "Nirma University",
      subtitle:
        "B.Tech. in Mechanical Engineering | 8.82 CGPA | 5th departmental rank",
      logo_path: "nirma_uni_logo.png",
      alt_name: "Nirma Uni",
      duration: "2015 - 2018",
      descriptions: [
        "⚡ Strengthened foundation of mechanical engineering including Design, Manufacturing, Thermodynamics, Fluid mechanics, etc",
        "⚡ Apart from this, I have done courses on Robotics, Mechatronics, Deep Learning, Data Science, Python, Data structure and algorithms, etc.",
        "⚡ I was selected for Merit cum Means Scholarship and was awarded by Chief Minister of Gujarat for best performance in technical stream.",
        "⚡ Build robots and won in robotics competitions",
      ],
      website_link: "https://nirmauni.ac.in/",
    },
    {
      title: "Nirma University | 9.52 CGPA | 2nd departmental rank",
      subtitle: "Diploma in Mechanical Engineering",
      logo_path: "nirma_uni_logo.png",
      alt_name: "Nirma Uni",
      duration: "2012 - 2015",
      descriptions: [
        "⚡ Studied basics of mechanical engineering including Design, Manufacturing, Thermodynamics, Fluid mechanics, etc",
        "⚡ I taught myself electronics and programming.",
        "⚡ Won technical quiz competition and CAD designing competitions",
      ],
      website_link: "https://nirmauni.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Robotics: Mobility",
      subtitle: "- University of Pennsylvania",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/Y7Z4VCY93VSC",
      alt_name: "coursera",
      color_code: "#00000099",
    },
    {
      title: "Robotics: Computational Motion Planning",
      subtitle: "- University of Pennsylvania",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/25VF5LV7SFPV",
      alt_name: "coursera",
      color_code: "#00000099",
    },
    {
      title: "Robotics: Aerial Robotics",
      subtitle: "- University of Pennsylvania",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/DB2HHPHLGZVX",
      alt_name: "coursera",
      color_code: "#00000099",
    },
    {
      title: "Python for Data Science and Machine Learning Bootcamp",
      subtitle: "-  Jose Portilla ",
      logo_path: "udemy_logo.png",
      certificate_link: "https://www.udemy.com/certificate/UC-88AZRUUO/",
      alt_name: "Udemy",
      color_code: "#D83B0199",
    },
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link: "",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with diverse industries in manufacturing and automation as an intrapreneur and engineer for research & development, product development, data analysis, and digital transformation. I am passionate about building intelligent systems for sustainable future. In my spare time, I love to read about life, science, and human psychology.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Operations and Development",
          company: "Bharat Hardware & Marketing",
          company_url: "",
          logo_path: "bhm_logo.png",
          duration: "Dec 2021 - Present",
          location: "Ahmedabad, Gujarat",
          description:
            "Developed a SaaS product that resulted into material saving of 12-15%. Digital transformation, handling day to day operations of business. ",
          color: "#9b1578",
        },
        {
          title: "Product development ",
          company: "Milacron India",
          company_url: "https://www.milacronindia.com/",
          logo_path: "milacron_logo.jpeg",
          duration: "July 2018 - Oct 2021",
          location: "Ahmedabad, Gujarat",
          description:
            "Leading plastic machinery MNC where I collaborated with global teams on research and development and product development of Industry 4.0 platform for injection moulding machines. Performed data analysis, developed algorithms, integrated with machines. Developed digital transformation solution to reduce process inefficiencies.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Graduate intern",
          company: "Shivam Sizing Private Limited",
          company_url: "http://shivamgroup.in/",
          logo_path: "shivam_logo.jpeg",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "Structural optimisation using Finite Element Analysis in NX for ladder and for beam bracket of warping machine to prevent premature failure.",
          color: "#ee3c26",
        },
        {
          title: "Diploma trainee",
          company: "Jyoti CNC Automation Limited",
          company_url: "https://jyoti.co.in/",
          logo_path: "jyoti_logo.jpeg",
          duration: "Dec 2014 - Jan 2015",
          location: "Rajkot, Gujarat",
          description:
            "Largest CNC manufacturer in India where I assisted in different manufacturing stages of CNC machines (Foundry, Machining, Sheet metal working, CNC Programming, Assembly and Testing).",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer at Gyan Mandir",
          company: "",
          company_url: "",
          logo_path: "volunteer_logo.jpeg",
          duration: " 2021 - 2022",
          location: "Ahmedabad, Gujarat",
          description:
            "Developed policies, conducted surveys to start free tuition for 1148 underprivileged children.",
          color: "#4285F4",
        },
        {
          title: "Volunteer at Akshay Patra",
          company: "",
          company_url: "https://www.akshayapatra.org/",
          logo_path: "akshay_patra_logo.jpeg",
          duration: "2015",
          location: "Ahmedabad, Gujarat",
          description:
            "Helped pack 1 lac shoes, and distribute it to underprivileged children in schools. Assisted to prepare food and distributed to school children.",
          color: "#D83B01",
        },
        {
          title: "Volunteer at NSS",
          company: "",
          company_url: "https://nss.gov.in/",
          logo_path: "nss_logo.png",
          duration: "2018",
          location: "Motipura, Gujarat",
          description:
            "Carried out cleanliness drive, conducted house surveys, spread awareness for girl education using street plays and competitions.",
          color: "#000000",
        },
        {
          title: "Lead amd Volunteer",
          company: "Mechanical Engineering Students Association ",
          company_url: "https://technology.nirmauni.ac.in/student/mesa/",
          logo_path: "mesa_logo.png",
          duration: "2017-2018",
          location: "Ahmedabad, Gujarat",
          description:
            "Successfully organized and managed multiple college fests and events.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
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
    profile_image_path: "harshad_vekariya_c.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
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
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
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
