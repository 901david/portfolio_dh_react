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
