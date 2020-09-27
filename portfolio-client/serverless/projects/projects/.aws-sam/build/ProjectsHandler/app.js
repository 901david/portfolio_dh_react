const getUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const PORTFOLIO_DATA = [
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

exports.lambdaHandler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      projects: PORTFOLIO_DATA,
    }),
    headers: {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,GET',
    },
  };
};
