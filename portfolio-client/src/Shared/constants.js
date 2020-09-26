import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faAddressCard,
  faLaptopCode,
  faUserGraduate,
  faCode,
  faChalkboardTeacher,
  faGraduationCap,
  faInfinity,
  faVials,
} from '@fortawesome/free-solid-svg-icons';
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
  faAws,
  faDocker,
  faGoogle,
  faSalesforce,
  faInternetExplorer,
} from '@fortawesome/free-brands-svg-icons';

import { getUUID } from '../Shared/uuid-generator.js';

export const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const iconMap = [
  {
    icon: faAddressCard,
    text: 'About Me',
    path: '/skills',
    key: getUUID(),
    url: null,
  },
  {
    icon: faUserGraduate,
    text: 'Education',
    path: '/education',
    key: getUUID(),
    url: null,
  },
  {
    icon: faLaptopCode,
    text: 'Projects',
    path: '/projects',
    key: getUUID(),
    url: null,
  },
  {
    icon: faEnvelope,
    text: 'Email Me',
    path: '/contact',
    key: getUUID(),
    url: null,
  },
  {
    icon: faGithub,
    text: 'Github',
    path: null,
    key: getUUID(),
    url: 'https://github.com/901david',
  },
  {
    icon: faBitbucket,
    text: 'Bitbucket',
    path: null,
    key: getUUID(),
    url: 'https://bitbucket.org/scriptscrawler/',
  },
  {
    icon: faDocker,
    text: 'Docker Hub',
    path: null,
    key: getUUID(),
    url: 'https://hub.docker.com/u/4990814',
  },
  {
    icon: faLinkedinIn,
    text: 'LinkedIn',
    path: null,
    key: getUUID(),
    url: 'https://www.linkedin.com/in/00davidhammond/',
  },
];

export const MISSION_STATEMENT =
  'Full-Stack Software Engineer with interest in the full lifecycle of software development. Most of my work has been focused on front-end engineering, with a high interest in cloud architectures.  I enjoy tackling challenging problems in an efficient manner and continuous learning is a lifestyle for me.';

export const TECHNICAL_SKILLS =
  'Javascript, TypeScript, Python,  React, Angular, AngularJs,  jQuery, HTML, CSS, Handlebars, Bootstrap, Responsive Design, Redux, Jest, Enzyme, Mocha, Chai,  Node.js, REST, Git, MySQL, Sequelize, MongoDB, Mongoose,  GraphQL, Apollo, Docker, API Gateway, Lambda, DynamoDb, ECS, S3, Step Functions';

export const FORMAL_EDUCATION_DATA = [
  {
    title: 'Rhodes College',
    key: getUUID(),
    degree: "Bachelor's Degree, Religious Studies",
    dates: '2004 - 2007',
    description:
      'My experience at Rhodes in Religious Studies required a high level of critical thinking. The liberal arts education promoted here allows students to become well-rounded and life-long learners.',
  },
  {
    title: 'Final Cut Pro',
    key: getUUID(),
    degree: 'Apple Certification',
    dates: '2010',
    description:
      'Certified by Apple for professional use of Final Cut Pro product',
  },
  {
    title: 'Denver University',
    key: getUUID(),
    degree: 'Full Stack Developer Professional Certificate',
    dates: 'April 2017 - October 2017',
    description:
      'An intensive 24-week long boot camp dedicated to designing and building web applications. Skills learned consisted of Html/Css,  Bootstrap, Node/Express, REST API Creation/Consumption, Javascript, Ajax, MYSQL/Sequelize/Mongoose/MongoDB, NightmareJS/Mocha/Chai, Java, React, Basic Algorithms/Big O Notation.',
  },
].reverse();

export const INFORMAL_EDUCATION_DATA = [
  {
    name: 'Amazon ECS & Fargate Masterclass - Docker on AWS',
    icon: faAws,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/ecs-fargate.pdf',
    key: getUUID(),
  },
  {
    name: 'Javascript Algorithms and Data Structures Masterclass',
    icon: faCode,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/algorithms-data-structures.pdf',
    key: getUUID(),
  },
  {
    name: "Go: The Complete Developer's Guide",
    icon: faGoogle,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/go.pdf',
    key: getUUID(),
  },
  {
    name: 'Ultimate AWS Certified Solutions Architect Associate 2020',
    icon: faAws,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/aws-solutions-architect.pdf',
    key: getUUID(),
  },
  {
    name: 'Web Components & Stencil.js',
    icon: faInternetExplorer,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/web-components-stencil.pdf',
    key: getUUID(),
  },
  {
    name: 'AWS Certified DevOps Engineer Professional 2020 - Hands On!',
    icon: faAws,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/devops-aws-cert.pdf',
    key: getUUID(),
  },
  {
    name: 'Mastering Salesforce DX and Visual Studio Code',
    icon: faSalesforce,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/mastering-salesforce.pdf',
    key: getUUID(),
  },
  {
    name: 'AWS Certified DevOps Engineer: Get 3 Certifications 2019',
    icon: faAws,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/dev-ops-coourse-1.pdf',
    key: getUUID(),
  },
  {
    name: 'Jenkins, From Zero To Hero: Become a DevOps Jenkins Master',
    icon: faJenkins,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/jenkins.pdf',
    key: getUUID(),
  },
  {
    name: 'Docker and Kubernetes: The Complete Guide',
    icon: faLaptopCode,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/docker-and-kuberneetes.pdf',
    key: getUUID(),
  },
  {
    name: 'Complete Guide to Tensorflow for Deep Learning in Python',
    icon: faPython,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/tensorflow.pdf',
    key: getUUID(),
  },
  {
    name: 'Learn and Understand AngularJS',
    icon: faAngular,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/angularjs.pdf',
    key: getUUID(),
  },
  {
    name: 'Advanced CSS And SASS: Flexbox, Grid, Animations And More',
    icon: faSass,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/sass-flexbox-css.pdf',
    key: getUUID(),
  },
  {
    name: 'GraphQL with React: The Complete Developer’s Guide',
    icon: faReact,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/graphql-with-react.pdf',
    key: getUUID(),
  },
  {
    name: 'Complete Python Bootcamp',
    icon: faPython,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/python-bootcamp.pdf',
    key: getUUID(),
  },
  {
    name: 'Webpack 2: The Complete Developer’s Guide',
    icon: faJsSquare,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/webpack-2.pdf',
    key: getUUID(),
  },
  {
    name: 'Advanced React and Redux: 2018 edition',
    icon: faReact,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/advanced-react-redux.pdf',
    key: getUUID(),
  },
  {
    name: 'Angular 5 Advanced Masterclass',
    icon: faAngular,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/angular-master-class.pdf',
    key: getUUID(),
  },
  {
    name: 'Software Architecture: Meta and SOLID principles in C#',
    icon: faLaptopCode,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/solid-and-c-sharp.pdf',
    key: getUUID(),
  },
  {
    name: 'Testing in Angular 4',
    icon: faAngular,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/testinig-angular.pdf',
    key: getUUID(),
  },
  {
    name: 'Javascript Interview Prep',
    icon: faLaptopCode,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/js-interview-prep.pdf',
    key: getUUID(),
  },
  {
    name: 'Master Practical Java 9 Development',
    icon: faJava,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/java.pdf',
    key: getUUID(),
  },
  {
    name: 'Coding Interview Bootcamp: Algorithms and Data Structures',
    icon: faLaptopCode,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/coding-interview-bootcamp.pdf',
    key: getUUID(),
  },
  {
    name: 'Modern React with Redux',
    icon: faReact,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/react-with-redux.pdf',
    key: getUUID(),
  },
  {
    name: 'Understanding TypeScript ',
    icon: faJsSquare,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/typescript-understanding.pdf',
    key: getUUID(),
  },
  {
    name: 'Angular 5, formerly Angular 2',
    icon: faAngular,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/angular-complete-guide.pdf',
    key: getUUID(),
  },
];

export const PATH_MAP = {
  '/skills': 0,
  '/contact': 3,
  '/projects': 2,
  '/education': 1,
};

export const PROFESSIONAL_CERTS = [
  {
    degree: 'AWS Certified Solutions Architect - Associate',
    dates: 'July 17, 2020 - July 17, 2023',
    badgeLink:
      'https://www.youracclaim.com/badges/00923c96-0f60-42cf-b1d6-ae3936f47d3e',
    certUrl:
      'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    skills: [
      {
        skill:
          'Effectively demonstrate knowledge of how to architect and deploy secure and robust applications on AWS technologies',
        key: getUUID(),
      },
      {
        skill:
          'Define a solution using architectural design principles based on customer requirements',
        key: getUUID(),
      },
      {
        skiill:
          'Provide implementation guidance based on best practices to the organization throughout the life cycle of the project',
        key: getUUID(),
      },
    ],
    key: getUUID(),
  },
  {
    degree: 'AWS Certified DevOps Engineer - Professional',
    dates: 'Jan 06, 2020 - Jan 07, 2023',
    badgeLink:
      'https://www.youracclaim.com/badges/b3364b42-32c1-4e30-8de4-538163d1ceba',
    certUrl:
      'https://aws.amazon.com/certification/certified-devops-engineer-professional/',
    skills: [
      {
        skill:
          'Implement and manage continuous delivery systems and methodologies on AWS',
        key: getUUID(),
      },
      {
        skill:
          'Implement and automate security controls, governance processes, and compliance validation',
        key: getUUID(),
      },
      {
        skill:
          'Define and deploy monitoring, metrics, and logging systems on AWS',
        key: getUUID(),
      },
      {
        skill:
          'Implement systems that are highly available, scalable, and self-healing on the AWS platform',
        key: getUUID(),
      },
      {
        skill:
          'Design, manage, and maintain tools to automate operational processes',
        key: getUUID(),
      },
    ],
    key: getUUID(),
  },
];

export const PORTFOLIO_DATA = [
  {
    key: getUUID(),
    images: [
      { url: '../images/portimages/pendant/pendant-1.png', key: getUUID() },
      { url: '../images/portimages/pendant/pendant-2.png', key: getUUID() },
      {
        url: '../images/portimages/pendant/pendant-updated-3.png',
        key: getUUID(),
      },
      {
        url: '../images/portimages/pendant/pendant-updated-1.png',
        key: getUUID(),
      },
      {
        url: '../images/portimages/pendant/pendant-updated-2.png',
        key: getUUID(),
      },
      { url: '../images/portimages/pendant/pendant-5.png', key: getUUID() },
      { url: '../images/portimages/pendant/pendant-6.png', key: getUUID() },
    ],
    technology: [
      { name: 'TypeScript', key: getUUID() },
      { name: 'Angular', key: getUUID() },
      { name: 'Python', key: getUUID() },
      { name: 'API Gateway', key: getUUID() },
      { name: 'Lambda', key: getUUID() },
    ],
    projectTitle: 'Pendant Wrapper',
    cardBackground: 'black',
    description:
      'This is an Etsy store wrapper.  This application  creates a more personalized experience for the user but all the main features are built on the Etsy API.  It is built on TypeScript/Angular 8 for the front end. This is  deployed as static assets on S3, using Cloudfront to decrease latency, and perform SSL termination.  The backend is serverless, built on API Gateway, with Lambda in a mixture of Python and Node. More recent features added include, recommended products, trending  products, and recently viewed products.  Trending  products is achieved by anonymouosly recording clicks into products and which ones were added to the cart.  The data colletion  is two fold. First off,  we are keeping track of data over time. This will allow us once enough is collected to perform machine learning on this data to attempt to improve the more primitive approach currently taken to recommend products to users(currently involves using tags of items users looks at and of items they add to their cart).  In addition, this data is aggregated hourly to account for the products with the most views over the last hour. This becomes the  trending results for the next hour. This complex process is managed by AWS Step Functions, and coordinates  between several different states to ensure the algorithm is run successfully every hour of every day.',
    imageFront: '../images/portimages/pendant/pendant-updated-3.png',
    imageBack: '../images/portimages/pendant/pandant.png',
    githubLink: '',
    liveSite: 'https://pendantwrapper.com',
    bitBucketLink: '',
  },
  {
    key: getUUID(),
    images: [
      { url: '../images/portimages/twilio/text.png', key: getUUID() },
      { url: '../images/portimages/twilio/gui.png', key: getUUID() },
      { url: '../images/portimages/twilio/gui2.png', key: getUUID() },
    ],
    technology: [
      { name: 'React', key: getUUID() },
      { name: 'Typescript', key: getUUID() },
      { name: 'Ag-Grid', key: getUUID() },
      { name: 'Styled-Components', key: getUUID() },
      { name: 'Lambda', key: getUUID() },
      { name: 'API Gateway', key: getUUID() },
      { name: 'Heroku', key: getUUID() },
      { name: 'Docker', key: getUUID() },
      { name: 'Twilio API', key: getUUID() },
      { name: 'Node', key: getUUID() },
      { name: 'Express', key: getUUID() },
    ],
    projectTitle: 'Twilio-Lambda',
    cardBackground: 'white',
    description:
      'Twilio-Lambda is a result of toying with Twilio API and trying to come up with something useful to use in everyday coding life. What I decided to build was a very generic lambda function which could be used in the cloud to alert developers when something serious has occurred with a service and immediate attention is needed therefore an sms text would be a nice way to immediately alert someone there is an issue. This is where the project started. After I developed this, I thought it might be really nice to have some data around what kind of messages are being sent, and even potentially run some analytics to determine if I am receiving too many alarms etc. I built a basic web GUI  which  uses Ag-Grid to display data about the current set messages that have been sent.',
    imageFront:
      'https://static.seekingalpha.com/uploads/2019/3/19/saupload_twilio-730x365.jpg',
    imageBack: '../images/portimages/twilio/gui.png',
    githubLink: 'https://github.com/901david/twilio-lambda',
    liveSite: 'https://bitly.com/twilio-lambda',
    demoLink: '',
    bitBucketLink: '',
  },
  {
    key: getUUID(),
    images: [
      { url: '../images/portimages/dockhand/dockhand1.png', key: getUUID() },
      { url: '../images/portimages/dockhand/dockhand2.png', key: getUUID() },
      { url: '../images/portimages/dockhand/dockhand3.png', key: getUUID() },
    ],
    technology: [
      { name: 'React', key: getUUID() },
      { name: 'Typescript', key: getUUID() },
      { name: 'Dockerode', key: getUUID() },
      { name: 'Styled-Components', key: getUUID() },
      { name: 'Docker', key: getUUID() },
      { name: 'Socket IO', key: getUUID() },
    ],
    projectTitle: 'DockHand',
    cardBackground: 'white',
    description: `An application that allows the management of containers on your local system in an intuitive, helpful manner, and does the following:
                  See all containers running on your local machine whether started or stopped
                  Provides container information such as the following:
                  Running or Stopped
                  Container Id with auto-copy
                  Image SHA
                  Any Volumes present
                  Any Mounts present
                  Ports used
                  Command used to start container
                  Start and stop containers that exist on your machine
                  Remove stopped containers from your machine
                  Spin up new containers with images that are already downloaded to your machine
                  Stream logs from container
                  Use quickfilters to filter by INFO, WARN, SEVERE
                  Custom Filtering of logs based on input from user
    `,
    imageFront: 'https://buddy.works/guides/thumbnails/docker-cover.png',
    imageBack: '../images/portimages/dockhand/dockhand1.png',
    githubLink: 'https://github.com/901david/dock-hand',
    dockerLink: 'https://hub.docker.com/repository/docker/4990814/dock-hand',
    liveSite: '',
    demoLink: '',
    bitBucketLink: '',
  },
  {
    key: getUUID(),
    images: [
      { url: '../images/portimages/mappedstate/example1.png', key: getUUID() },
      { url: '../images/portimages/mappedstate/example2.png', key: getUUID() },
    ],
    technology: [
      { name: 'React', key: getUUID() },
      { name: 'Npm', key: getUUID() },
      { name: 'Rollup', key: getUUID() },
      { name: 'Typescript', key: getUUID() },
    ],
    projectTitle: 'useMappedState React Hook',
    cardBackground: 'black',
    description:
      'A custom React hook which allows you to pass an object of key value pairs which will be managed by a useState hook and simply returns your values from state to use and a simple value setter to modify state. Allows for complex state to be managed in functional components without  writing many useState declarations. It also supports an array format for updates to batch changes into onoe function call.',
    imageFront: '../images/portimages/mappedstate/react.png',
    imageBack: '../images/portimages/mappedstate/npm.png',
    githubLink: 'https://github.com/901david/use-mapped-state',
    liveSite: 'https://www.npmjs.com/package/react-use-mapped-state',
    demoLink: '',
    bitBucketLink: '',
  },
];

export const iconAnimationStarterState = [
  {
    active: false,
    boundLength: '25',
    top: '-80',
    left: '87',
  },
  {
    active: false,
    boundLength: '40',
    top: '-48',
    left: '31',
  },
  {
    active: true,
    boundLength: '64',
    top: '-30',
    left: '100',
  },
  {
    active: false,
    boundLength: '40',
    top: '-48',
    left: '213',
  },
  {
    active: false,
    boundLength: '25',
    top: '-80',
    left: '165',
  },
];

export const iconAnimationConfig = [
  {
    icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
    title: 'Teach',
    key: getUUID(),
  },
  {
    icon: <FontAwesomeIcon icon={faInfinity} />,
    title: 'Repeat',
    key: getUUID(),
  },
  {
    icon: <FontAwesomeIcon icon={faVials} />,
    title: 'Experiment',
    key: getUUID(),
  },
  {
    icon: <FontAwesomeIcon icon={faCode} />,
    title: 'Code',
    key: getUUID(),
  },
  {
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
    title: 'Learn',
    key: getUUID(),
  },
];
