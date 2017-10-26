// Global variable of portfolio array of objects
var portfolioProjects = [];
// This will be a constructor function that will build up my portfolio pieces.
function BuildPortfolio (projectTitle, image, githublink, liveSite, description, technology) {
  this.title = projectTitle;
  this.imagePath = image;
  this.gitLink = githublink;
  this.gitSite = liveSite;
  this.description = description;
  this.technology = technology;
};

// Thisfunction will create portfolio projects utilizing the constructor function and then display htem in the portfolio area.  It was constructed in this manner so that when new projects want to be added in it will ease this process andmake code more DRY
(function createAndPushProjects () {
    let utile = new BuildPortfolio("uTile Developer's Program", "images/portimages/uTile_black_final_100.gif", "https://github.com/Elektro1776/Project_3", "http://www.utiledevs.com/", "This was a group project that was designed to target coders who are utilizing a lot of projects on GitHub.  This web application authorizes you GitHub account directly. This allows users to interact with their GitHub repositories and view issues, comment on issues and close issues for multiple projects in a very fast manner.  We also integrated a project matrix that allows users to create tasks and assign them to different priority levels.  This allows for deeper collaboration and helps users to stay in one spot to accomplish several tasks at once, therefore streamlining the process.  In addition, there is a code editor built based off of VSCode which allows users to write syntax highlighted code, that would be relevant to a certain thought or idea created from viewing Github or matrix issues. My contributions to this project was creating all of the GitHub API endpoints for our Node server, building the majority of React components related to Github, and tying them into our global store with Redux.  I was also was responsible for animating the logo we created using Adobe After Effects/Photoshop.  We hope to continue work on this project as an open source project to allow for more features to be introduced and a deeper level of collaboration.", "Html, Bootstrap, Css, Node, Multiple API's, Javascript, React, Redux, JSX, Adobe After Effects, Photoshop");
    // let trivia = new BuildPortfolio("The Office Trivia Game", "images/portimages/trivia.png", "https://github.com/901david/TriviaGame", "https://901david.github.io/TriviaGame/", "This is a basic trivia game app focused around the hit comedy series - The Office.  As you navigate through trivia questions enjoying the hilarious associated animated gifs and sound bites, you will see the quiz is designed to automatically move the user through the quiz using Javascript.  At the conclusion of the quiz the user is given a 'grade' on how they did which is based on how many questions they get right and wrong in addition to how much time they take.  Can you get an Expert grade?", "Html, Css, Javascript, JQuery");
    let centennial = new BuildPortfolio("      The Centennial Charge      ","images/portimages/charge.png", "https://github.com/901david/centennialCharge", "https://901david.github.io/centennialCharge/", "This was a group project I worked on mainly backend for. The idea was to present ironic Colorado news articles and Colorado styled solutions. My work on this project included creating the live comment system that allows users to interact with each other within the site. This includes re-arranging the comments based on how many likes and dislikes they have received. In addition, I was responsible for using the Ny Times API which was accessed using Ajax calls and then displaying Colorado based 'real' news articles underneath our ironic false ones.  Lastly, I assisted in assuring that the site was mobile responsive.", "Html, Css, Javascript, Ajax, Api's, Animate Css, Firebase, JQuery");
    // let flashCardGen = new BuildPortfolio("Flash-Card Generator", "images/portimages/flashgen.png", "https://github.com/901david/Flashcard-Generator", "https://901david.github.io/Flashcard-Generator/", "This is a Node based app using constructor functions to create two types of flash cards.  User is allowed to create any number of flash cards and once created has the ability to 'study' the group created afterwards.", "Node, Javascript, Inquirer NPM Package");
    let bamazon = new BuildPortfolio("           Bamazon App           ", "images/portimages/bamazon.png", "https://github.com/901david/bamazon", "https://901david.github.io/bamazon/", "This is a storefront Node App that allows you to use three separate interfaces: Customer, Manager & Supervisor mode.  In each mode you accomplish different tasks in the database. The idea is in each of these interfaces the client is able to purchase items that are listed in the database which updates the database.  In other modes you are able to add inventory and products and/or manage departments and total sales.", "Node, Javascript, Inquirer, CLI-Table, MySQL");
    let flashCardFun = new BuildPortfolio("        FlashCard Fun         ", "images/portimages/flashfun.png", "https://github.com/901david/Flashcard-Fun", "https://901david.github.io/Flashcard-Fun/","The inspiration for FlashCard Fun was the Node app I created FlashCard Generator.  This web app uses Firebase Authorization to allow users to create usernames. When signed in the user can keep a running tab of Flash Cards they have created to study from. The Flash Cards are also able to be broken down by groups which alllows for maintaining several different subjects you can study. Then you are able to review the cards you have created for studying purposes.", "Html, Bootstrap, Css, Animate Css, Firebase, Javascript, Photoshop, JQuery");
    let starWars = new BuildPortfolio("        Star Wars Battle         ", "images/portimages/starwars.png","https://github.com/901david/star-wars-Battle","https://901david.github.io/star-wars-Battle/","This is a Star Wars based JQuery game.  It allows a user to choose a character and then with that character they must defeat all the other available chracters to assure victory. May the force be with you!", "Html, Css, Javascript, JQuery");
    let rockPapSciss = new BuildPortfolio("Rock Paper Scissors - Multiplayer", "images/portimages/RPS.png", "https://github.com/901david/RPS-Multiplayer", "https://901david.github.io/RPS-Multiplayer/", "This web application is a basic rock, paper, scissors game that uses Firebase to allow to users to play each other. It also has a chat feature to it which allows users to chat with each other while battling it out.", "Html, Css, JQuery, Javascript, Firebase");
    // let liriNode = new BuildPortfolio("      'LIRI' - Node Application       ", "images/portimages/lirinode.png", "https://github.com/901david/liri-node-app", "https://github.com/901david/liri-node-app", "This is a node application that is a language knock off of the popular SIRI.  LIRI takes commands as well through the terminal. Send tweets, look up sounds through spotify and search for movies. This is a fun application that shows you how easily node will integrate with API's to create a fun application", "Node, Javascript, Ajax, Twitter npm, Spotify npm" );

    portfolioProjects.push(utile, centennial, rockPapSciss, flashCardFun, starWars, bamazon);
})();

module.exports = portfolioProjects;
