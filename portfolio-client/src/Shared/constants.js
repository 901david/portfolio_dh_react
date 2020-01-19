import _ from "lodash";
import {
  faEnvelope,
  faAddressCard,
  faLaptopCode,
  faUserGraduate
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faBitbucket,
  faLinkedinIn,
  faAngular,
  faSass,
  faReact,
  faJsSquare,
  faPython,
  faJava,
  faJenkins,
  faAws
} from "@fortawesome/free-brands-svg-icons";

export const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const iconMap = [
  {
    icon: faAddressCard,
    text: "About Me",
    path: "/skills",
    id: _.uniqueId("navBar-"),
    url: null
  },
  {
    icon: faUserGraduate,
    text: "Education",
    path: "/education",
    id: _.uniqueId("navBar-"),
    url: null
  },
  {
    icon: faLaptopCode,
    text: "Projects",
    path: "/projects",
    id: _.uniqueId("navBar-"),
    url: null
  },
  {
    icon: faEnvelope,
    text: "Email Me",
    path: "/contact",
    id: _.uniqueId("navBar-"),
    url: null
  },
  {
    icon: faGithub,
    text: "Github",
    path: null,
    id: _.uniqueId("navBar-"),
    url: "https://github.com/901david"
  },
  {
    icon: faBitbucket,
    text: "Bitbucket",
    path: null,
    id: _.uniqueId("navBar-"),
    url: "https://bitbucket.org/scriptscrawler/"
  },
  {
    icon: faLinkedinIn,
    text: "LinkedIn",
    path: null,
    id: _.uniqueId("navBar-"),
    url: "https://www.linkedin.com/in/00davidhammond/"
  }
];

export const MISSION_STATEMENT =
  "I am a full-stack developer with a heavy interest in creating and consuming API's as well as creating unique and logical UI/UX.  My diverse background, based in video editing and the legal field, allows me to have a creative, open mind, yet be concise and detail-oriented. I am assertive in approaching problems and can take the lead in any situation, but can also constructively take criticism to improve my performance. I can handle high-stress environments while maintaining a cool head and a sense of urgency in my work. I can play the role of a team member and lead the team, both in a successful manner. My goal is to create applications that are built on efficient and effective code while working with a team of developers.";

export const TECHNICAL_SKILLS =
  "JavaScript, TypeScript, Python,  Java, React, JSX, TSX, Angular, jQuery, HTML, CSS, Handlebars, Bootstrap, Responsive Design, Redux, Jest, Enzyme, Mocha, Chai,  Node.js, REST, Express,  Git, Webpack, Firebase, MySQL, Sequelize, MongoDB, Mongoose,  GraphQL, Apollo.";

export const ADDITIONAL_SKILLS =
  "Final Cut Pro, Motion, Premiere Pro, After Effects, Photoshop, Character Animator, Illustrator, Encore";

export const FORMAL_EDUCATION_DATA = [
  {
    title: "Rhodes College",
    degree: "Bachelor's Degree, Religious Studies",
    dates: "2004 - 2007",
    description:
      "My experience at Rhodes in Religious Studies required a high level of critical thinking. The liberal arts education promoted here allows students to become well-rounded and life-long learners."
  },
  {
    title: "Final Cut Pro",
    degree: "Apple Certification",
    dates: "2010",
    description:
      "Certified by Apple for professional use of Final Cut Pro product"
  },
  {
    title: "Denver University",
    degree: "Full Stack Developer Professional Certificate",
    dates: "April 2017 - October 2017",
    description:
      "An intensive 24-week long boot camp dedicated to designing and building web applications. Skills learned consisted of Html/Css,  Bootstrap, Node/Express, REST API Creation/Consumption, Javascript, Ajax, MYSQL/Sequelize/Mongoose/MongoDB, NightmareJS/Mocha/Chai, Java, React, Basic Algorithms/Big O Notation."
  }
].reverse();

export const INFORMAL_EDUCATION_DATA = [
  {
    name: "AWS Certified DevOps Engineer Professional 2020 - Hands On!",
    icon: faAws
  },
  {
    name: "AWS Certified DevOps Engineer: Get 3 Certifications 2019",
    icon: faAws
  },
  {
    name: "Jenkins, From Zero To Hero: Become a DevOps Jenkins Master",
    icon: faJenkins
  },
  {
    name: "Docker and Kubernetes: The Complete Guide",
    icon: faLaptopCode
  },
  {
    name: "Complete Guide to Tensorflow for Deep Learning in Python",
    icon: faPython
  },
  { name: "Learn and Understand AngularJS", icon: faAngular },
  {
    name: "Advanced CSS And SASS: Flexbox, Grid, Animations And More",
    icon: faSass
  },
  {
    name: "GraphQL with React: The Complete Developer’s Guide",
    icon: faReact
  },
  {
    name: "Complete Python Bootcamp",
    icon: faPython
  },
  {
    name: "Webpack 2: The Complete Developer’s Guide",
    icon: faJsSquare
  },
  {
    name: "Advanced React and Redux: 2018 edition",
    icon: faReact
  },
  {
    name: "Angular 5 Advanced Masterclass",
    icon: faAngular
  },
  {
    name: "Software Architecture: Meta and SOLID principles in C#",
    icon: faLaptopCode
  },
  {
    name: "Testing in Angular 4",
    icon: faAngular
  },
  {
    name: "Javascript Interview Prep",
    icon: faLaptopCode
  },
  {
    name: "Master Practical Java 9 Development",
    icon: faJava
  },
  {
    name: "Coding Interview Bootcamp: Algorithms and Data Structures",
    icon: faLaptopCode
  },
  {
    name: "Modern React with Redux",
    icon: faReact
  },
  {
    name: "Understanding TypeScript ",
    icon: faJsSquare
  },
  {
    name: "Angular 7, formerly Angular 2",
    icon: faAngular
  }
];

export const PATH_MAP = {
  "/skills": 0,
  "/contact": 3,
  "/projects": 2,
  "/education": 1
};

export const PORTFOLIO_DATA = [
  {
    _id: {
      $oid: "5d727bd7f45221001e5cfe34"
    },
    images: [
      "../images/portimages/pendant/pendantwrapper.png",
      "../images/portimages/pendant/pendantfeaturedPiece.png",
      "../images/portimages/pendant/pendantwrapper.png",
      "../images/portimages/pendant/pendantsalemodal.png",
      "../images/portimages/pendant/pendantcontact.png",
      "../images/portimages/pendant/pendantcalendar.png",
      "../images/portimages/pendant/pendantcalendarevent.png",
      "../images/portimages/pendant/pendantshoppingcart.png",
      "../images/portimages/pendant/pendantaddevents.png",
      "../images/portimages/pendant/pendantadmindelete.png"
    ],
    technology: [
      "TypeScript",
      "Angular",
      "Express",
      "Firebase/FirebaseAuth",
      "HTML",
      "CSS",
      "AWS"
    ],
    projectTitle: "Pendant Wrapper",
    cardBackground: "black",
    description:
      "This is an Etsy store wrapper.  Essentially creating a more personalized experience for the user but all features are built on the Etsy API.  It is built on TypeScript/Angular, utilizing a node express server. In addition, I am persisting data using Firebase to store calendar events saved by the owner.  Lastly, I am using Firebase Auth for authentification for the owner to manage event creation and deletions.",
    imageFront: "../images/portimages/pendant/pendantwrapper.png",
    imageBack: "../images/portimages/pendant/pandant.png",
    githubLink: "",
    liveSite: "https://pendantwrapper.com",
    bitBucketLink: "",
    __v: 0
  },
  {
    _id: {
      $oid: "5d92bb828fbc08001d575be742342"
    },
    images: [
      "../images/portimages/mappedstate/react.png",
      "../images/portimages/mappedstate/npm.png"
    ],
    technology: ["React", "Npm"],
    projectTitle: "useMappedState React Hook",
    cardBackground: "black",
    description:
      "A custom React hook which allows you to pass an object of key values pairs which will be managed by a useState hook and simply returns your values from state to use and a simple value setter to modify state.",
    imageFront: "../images/portimages/mappedstate/react.png",
    imageBack: "../images/portimages/mappedstate/npm.png",
    githubLink: "https://github.com/901david/use-mapped-state",
    liveSite: "https://www.npmjs.com/package/react-use-mapped-state",
    demoLink: "",
    bitBucketLink: "",
    __v: 0
  },
  {
    _id: {
      $oid: "5d8596df1223b9002f91e816"
    },
    images: ["../images/portimages/tictac/tictac.png"],
    technology: ["Python"],
    cardBackground: "white",
    projectTitle: "Terminal Tic Tac Toe",
    description:
      "This is a very basic terminal tic tac toe application written in Python",
    imageFront: "../images/portimages/tictac/python.png",
    imageBack: "../images/portimages/tictac/pythontwo.jpg",
    githubLink: "",
    liveSite: "",
    demoLink: "",
    bitBucketLink:
      "https://bitbucket.org/scriptscrawler/tic-tac-toe/src/master/",
    __v: 0
  },
  {
    _id: {
      $oid: "5d92bb828fbc08001d575be7"
    },
    images: [
      "../images/portimages/rps/rps_front.png",
      "../images/portimages/rps/rps_3.png",
      "../images/portimages/rps/rps_4.png"
    ],
    technology: ["Firebase", "JQuery", "HTML", "CSS"],
    projectTitle: "Rock, Paper, Scissors",
    cardBackground: "white",
    description:
      "This is a very basic multi-player rock paper scissors game. It allows two users to chat and play over the internet using firebase realtime database",
    imageFront: "../images/portimages/rps/rps_front.png",
    imageBack: "../images/portimages/rps/rps_back.png",
    githubLink: "https://github.com/901david/RPS-Multiplayer",
    liveSite: "https://901david.github.io/RPS-Multiplayer/",
    demoLink: "",
    bitBucketLink: "",
    __v: 0
  }
];
