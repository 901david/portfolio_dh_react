import _ from 'lodash';
import {
  faEnvelope,
  faAddressCard,
  faLaptopCode,
  faUserGraduate,
  faCode,
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

export const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const iconMap = [
  {
    icon: faAddressCard,
    text: 'About Me',
    path: '/skills',
    id: _.uniqueId('navBar-'),
    url: null,
  },
  {
    icon: faUserGraduate,
    text: 'Education',
    path: '/education',
    id: _.uniqueId('navBar-'),
    url: null,
  },
  {
    icon: faLaptopCode,
    text: 'Projects',
    path: '/projects',
    id: _.uniqueId('navBar-'),
    url: null,
  },
  {
    icon: faEnvelope,
    text: 'Email Me',
    path: '/contact',
    id: _.uniqueId('navBar-'),
    url: null,
  },
  {
    icon: faGithub,
    text: 'Github',
    path: null,
    id: _.uniqueId('navBar-'),
    url: 'https://github.com/901david',
  },
  {
    icon: faBitbucket,
    text: 'Bitbucket',
    path: null,
    id: _.uniqueId('navBar-'),
    url: 'https://bitbucket.org/scriptscrawler/',
  },
  {
    icon: faDocker,
    text: 'Docker Hub',
    path: null,
    id: _.uniqueId('navBar-'),
    url: 'https://hub.docker.com/u/4990814',
  },
  {
    icon: faLinkedinIn,
    text: 'LinkedIn',
    path: null,
    id: _.uniqueId('navBar-'),
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
    degree: "Bachelor's Degree, Religious Studies",
    dates: '2004 - 2007',
    description:
      'My experience at Rhodes in Religious Studies required a high level of critical thinking. The liberal arts education promoted here allows students to become well-rounded and life-long learners.',
  },
  {
    title: 'Final Cut Pro',
    degree: 'Apple Certification',
    dates: '2010',
    description:
      'Certified by Apple for professional use of Final Cut Pro product',
  },
  {
    title: 'Denver University',
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
  },
  {
    name: 'Javascript Algorithms and Data Structures Masterclass',
    icon: faCode,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/algorithms-data-structures.pdf',
  },
  {
    name: "Go: The Complete Developer's Guide",
    icon: faGoogle,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/go.pdf',
  },
  {
    name: 'Ultimate AWS Certified Solutions Architect Associate 2020',
    icon: faAws,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/aws-solutions-architect.pdf',
  },
  {
    name: 'Web Components & Stencil.js',
    icon: faInternetExplorer,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/web-components-stencil.pdf',
  },
  {
    name: 'AWS Certified DevOps Engineer Professional 2020 - Hands On!',
    icon: faAws,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/devops-aws-cert.pdf',
  },
  {
    name: 'Mastering Salesforce DX and Visual Studio Code',
    icon: faSalesforce,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/mastering-salesforce.pdf',
  },
  {
    name: 'AWS Certified DevOps Engineer: Get 3 Certifications 2019',
    icon: faAws,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/dev-ops-coourse-1.pdf',
  },
  {
    name: 'Jenkins, From Zero To Hero: Become a DevOps Jenkins Master',
    icon: faJenkins,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/jenkins.pdf',
  },
  {
    name: 'Docker and Kubernetes: The Complete Guide',
    icon: faLaptopCode,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/docker-and-kuberneetes.pdf',
  },
  {
    name: 'Complete Guide to Tensorflow for Deep Learning in Python',
    icon: faPython,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/tensorflow.pdf',
  },
  {
    name: 'Learn and Understand AngularJS',
    icon: faAngular,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/angularjs.pdf',
  },
  {
    name: 'Advanced CSS And SASS: Flexbox, Grid, Animations And More',
    icon: faSass,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/sass-flexbox-css.pdf',
  },
  {
    name: 'GraphQL with React: The Complete Developer’s Guide',
    icon: faReact,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/graphql-with-react.pdfhttps://dh-certs.s3-us-west-1.amazonaws.com/graphql-with-react.pdf',
  },
  {
    name: 'Complete Python Bootcamp',
    icon: faPython,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/python-bootcamp.pdf',
  },
  {
    name: 'Webpack 2: The Complete Developer’s Guide',
    icon: faJsSquare,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/webpack-2.pdf',
  },
  {
    name: 'Advanced React and Redux: 2018 edition',
    icon: faReact,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/advanced-react-redux.pdf',
  },
  {
    name: 'Angular 5 Advanced Masterclass',
    icon: faAngular,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/angular-master-class.pdf',
  },
  {
    name: 'Software Architecture: Meta and SOLID principles in C#',
    icon: faLaptopCode,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/solid-and-c-sharp.pdf',
  },
  {
    name: 'Testing in Angular 4',
    icon: faAngular,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/testinig-angular.pdf',
  },
  {
    name: 'Javascript Interview Prep',
    icon: faLaptopCode,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/js-interview-prep.pdf',
  },
  {
    name: 'Master Practical Java 9 Development',
    icon: faJava,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/java.pdf',
  },
  {
    name: 'Coding Interview Bootcamp: Algorithms and Data Structures',
    icon: faLaptopCode,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/coding-interview-bootcamp.pdf',
  },
  {
    name: 'Modern React with Redux',
    icon: faReact,
    url: 'https://dh-certs.s3-us-west-1.amazonaws.com/react-with-redux.pdf',
  },
  {
    name: 'Understanding TypeScript ',
    icon: faJsSquare,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/typescript-understanding.pdf',
  },
  {
    name: 'Angular 5, formerly Angular 2',
    icon: faAngular,
    url:
      'https://dh-certs.s3-us-west-1.amazonaws.com/angular-complete-guide.pdfs',
  },
];

export const PATH_MAP = {
  '/skills': 0,
  '/contact': 3,
  '/projects': 2,
  '/education': 1,
};

export const PORTFOLIO_DATA = [
  {
    _id: {
      $oid: '5d727bd7f45221001e5cfe34',
    },
    //TODO: replace these images
    images: [
      '../images/portimages/pendant/pendant-1.png',
      '../images/portimages/pendant/pendant-2.png',
      '../images/portimages/pendant/pendant-3.png',
      '../images/portimages/pendant/pendant-4.png',
      '../images/portimages/pendant/pendant-5.png',
      '../images/portimages/pendant/pendant-6.png',
      '../images/portimages/pendant/pendant-7.png',
      '../images/portimages/pendant/pendant-8.png',
    ],
    technology: ['TypeScript', 'Angular', 'Python', 'API Gateway', 'Lambda'],
    projectTitle: 'Pendant Wrapper',
    cardBackground: 'black',
    description:
      'This is an Etsy store wrapper.  This application  creates a more personalized experience for the user but the all features are built on the Etsy API.  It is built on TypeScript/Angular 8 for the front end. This is  deployed as static assets on S3, using Cloudfront to decrease latency, and perform SSL termiination.  The backend is serverless, built on API Gateway, with Lambda in a mixture of Python and Node',
    imageFront: '../images/portimages/pendant/pendant-3.png',
    imageBack: '../images/portimages/pendant/pandant.png',
    githubLink: '',
    liveSite: 'https://pendantwrapper.com',
    bitBucketLink: '',
  },
  {
    _id: {
      $oid: '5d92bb828fb194001d575be7',
    },
    images: [
      '../images/portimages/twilio/text.png',
      '../images/portimages/twilio/gui.png',
      '../images/portimages/twilio/gui2.png',
    ],
    technology: [
      'React',
      'Typescript',
      'Ag-Grid',
      'Styled-Components',
      'Lambda',
      'API Gateway',
      'Heroku',
      'Docker',
      'Twilio API',
      'Node',
      'Express',
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
    _id: {
      $oid: '5d92bb8453528fb194001d575be7',
    },
    images: [
      '../images/portimages/dockhand/dockhand1.png',
      '../images/portimages/dockhand/dockhand2.png',
      '../images/portimages/dockhand/dockhand3.png',
    ],
    technology: [
      'React',
      'Typescript',
      'Dockerode',
      'Styled-Components',
      'Docker',
      'Socket IO',
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
    _id: {
      $oid: '5d92bb828fbc08001d575be742342',
    },
    images: [
      '../images/portimages/mappedstate/example1.png',
      '../images/portimages/mappedstate/example2.png',
    ],
    technology: ['React', 'Npm', 'Rollup', 'Typescript'],
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
