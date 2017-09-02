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
function createAndPushProjects () {
    // let trivia = new BuildPortfolio("The Office Trivia Game", "images/portimages/trivia.png", "https://github.com/901david/TriviaGame", "https://901david.github.io/TriviaGame/", "This is a basic trivia game app focused around the hit comedy series - The Office.  As you navigate through trivia questions enjoying the hilarious associated animated gifs and sound bites, you will see the quiz is designed to automatically move the user through the quiz using Javascript.  At the conclusion of the quiz the user is given a 'grade' on how they did which is based on how many questions they get right and wrong in addition to how much time they take.  Can you get an Expert grade?", "Html, Css, Javascript, JQuery");
    let centennial = new BuildPortfolio("The Centennial Charge","images/portimages/charge.png", "https://github.com/901david/centennialCharge", "https://901david.github.io/centennialCharge/", "This was a group project I worked on mainly backend for. The idea was to present ironic Colorado news articles and Colorado styled solutions. My work on this project included creating the live comment system that allows users to interact with each other within the site. This includes re-arranging the comments based on how many likes and dislikes they have received. In addition, I was responsible for using the Ny Times API which was accessed using Ajax calls and then displaying Colorado based 'real' news articles underneath our ironic false ones.  Lastly, I assisted in assuring that the site was mobile responsive.", "Html, Css, Javascript, Ajax, Api's, Animate Css, Firebase, JQuery");
    // let flashCardGen = new BuildPortfolio("Flash-Card Generator", "images/portimages/flashgen.png", "https://github.com/901david/Flashcard-Generator", "https://901david.github.io/Flashcard-Generator/", "This is a Node based app using constructor functions to create two types of flash cards.  User is allowed to create any number of flash cards and once created has the ability to 'study' the group created afterwards.", "Node, Javascript, Inquirer NPM Package");
    let bamazon = new BuildPortfolio("Bamazon App", "images/portimages/bamazon.png", "https://github.com/901david/bamazon", "https://901david.github.io/bamazon/", "This is a storefront Node App that allows you to use three separate interfaces: Customer, Manager & Supervisor mode.  In each mode you accomplish different tasks in the database. The idea is in each of these interfaces the client is able to purchase items that are listed in the database which updates the database.  In other modes you are able to add inventory and products and/or manage departments and total sales.", "Node, Javascript, Inquirer, CLI-Table, MySQL");
    let flashCardFun = new BuildPortfolio("FlashCard Fun", "images/portimages/flashfun.png", "https://github.com/901david/Flashcard-Fun", "https://901david.github.io/Flashcard-Fun/","The inspiration for FlashCard Fun was the Node app I created FlashCard Generator.  This web app uses Firebase Authorization to allow users to create usernames. When signed in the user can keep a running tab of Flash Cards they have created to study from. The Flash Cards are also able to be broken down by groups which alllows for maintaining several different subjects you can study. Then you are able to review the cards you have created for studying purposes.", "Html, Bootstrap, Css, Animate Css, Firebase, Javascript, Photoshop, JQuery");
    let starWars = new BuildPortfolio("Star Wars Battle", "images/portimages/starwars.png","https://github.com/901david/star-wars-Battle","https://901david.github.io/star-wars-Battle/","This is a Star Wars based JQuery game.  It allows a user to choose a character and then with that character they must defeat all the other available chracters to assure victory. May the force be with you!", "Html, Css, Javascript, JQuery");
    let rockPapSciss = new BuildPortfolio("Rock Paper Scissors - Multiplayer", "images/portimages/RPS.png", "https://github.com/901david/RPS-Multiplayer", "https://901david.github.io/RPS-Multiplayer/", "This web application is a basic rock, paper, scissors game that uses Firebase to allow to users to play each other. It also has a chat feature to it which allows users to chat with each other while battling it out.", "Html, Css, JQuery, Javascript, Firebase");
    let liriNode = new BuildPortfolio("'LIRI' - Node Application", "images/portimages/lirinode.png", "https://github.com/901david/liri-node-app", "https://github.com/901david/liri-node-app", "This is a node application that is a language knock off of the popular SIRI.  LIRI takes commands as well through the terminal. Send tweets, look up sounds through spotify and search for movies. This is a fun application that shows you how easily node will integrate with API's to create a fun application", "Node, Javascript, Ajax, Twitter npm, Spotify npm" );

    portfolioProjects.push(centennial, rockPapSciss, liriNode, flashCardFun,starWars, bamazon);
};
// This controls the contact me pop out
function contactBar () {
  let dataVal = $(".contactClick").attr("data-active");
  console.log(dataVal);
    if (dataVal === "closed") {
      $("#switchHere").removeClass("glyphicon-chevron-right");
      $("#switchHere").addClass("glyphicon-chevron-left");
    $(".contactClick").attr("data-active", "open");
    $("#contactInfo").toggle(function () {
    $(this).parent().animate({right:'0px'}, {queue: false, duration: 500});
    }, function () {
    $(this).parent().animate({right:'-280px'}, {queue: false, duration: 500});
    });
    }
    else {
    $(".contactClick").attr("data-active", "closed");
    $("#contactInfo").toggle(function () {
    $(this).parent().animate({left:'0px'}, {queue: false, duration: 500});
    }, function () {
    $(this).parent().animate({left:'-280px'}, {queue: false, duration: 500});
    });
    $("#switchHere").removeClass("glyphicon-chevron-left");
    $("#switchHere").addClass("glyphicon-chevron-right");
    }
};
function populateScreen() {

  for(let i = 0; i < portfolioProjects.length;i++) {
        titleId = portfolioProjects[i].title.replace(/ /g, "").replace(/'/g, "").replace(/-/g, "");
      $("#portImages").append('<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 centerMeTimbers"><div class="col-xs-10 col-sm-10 col-md-12 col-lg-12 borderBox"><p id="' + titleId + '"><b>' +  portfolioProjects[i].title + '</b></p><img src="' + portfolioProjects[i].imagePath + '" alt="Portfolio Image" class="img-responsive portImageGroup" data-toggle="popover" title="<b>' + portfolioProjects[i].title + '</b>" data-content="' + portfolioProjects[i].description + '<b><p>Technologies Used:</b> ' +  portfolioProjects[i].technology + '"><br/><a class="textAlignPort" href="' + portfolioProjects[i].gitLink + '" target="_blank">GitHub Repo</a><span> | </span><a href="' + portfolioProjects[i].gitSite + '" target="_blank">Application</a></div></div>');

  }
  $("[data-toggle=popover]").popover({
    container: 'body',
    trigger:'hover',
    animation: true,
    placement: 'auto left right',
    html: true,
    width: '100%'
  });
};

$(document).ready(function () {
createAndPushProjects();
  setTimeout(()=>{
    $("#contactMe").removeClass("hide").addClass("animated slideInLeft");
  }, 2000);
  $(".contactClick").click(()=>{contactBar();});
  $("#emailFormat").click(()=>{contactBar();});
$(".textAlign").click(function () {
  $(".textAlign").removeClass("active");
  let dataVal = $(this).attr("data-tag");
  if (dataVal === "objective") {
    $("#mainContentHeader").text("Objective");
    $("#objectiveButt").addClass("active");
    $("#background").addClass("hide");
    $("#portImages").addClass("hide");
    $("#contactPort").addClass("hide");
    $("#education").addClass("hide");
    $("#leftSide").removeClass("hide");
    $("#rightSide").removeClass("hide");
    $("#bottomSide").removeClass("hide");
    $("#objective").removeClass("hide");

    // ad din portfolio stuff
  }
  else if (dataVal === "background") {
    $("#mainContentHeader").text("Background");
    $("#backgroundButt").addClass("active");
    $("#objective").addClass("hide");
    $("#portImages").addClass("hide");
    $("#contactPort").addClass("hide");
    $("#education").addClass("hide");
    $("#leftSide").removeClass("hide");
    $("#rightSide").removeClass("hide");
    $("#bottomSide").removeClass("hide");
    $("#background").removeClass("hide");
  }
  else if (dataVal === "portfolio") {
    $("#portImages").empty();
    $("#leftSide").addClass("hide");
    $("#rightSide").addClass("hide");
    $("#bottomSide").addClass("hide");
    $("#portImages").removeClass("hide");
    $("#portfolioButt").addClass("active");
    $("#contactPort").removeClass("hide");
    populateScreen();
  }
  else if (dataVal === "education") {
    $("#mainContentHeader").text("Education");
    $("#educationButt").addClass("active");
    $("#objective").addClass("hide");
    $("#portImages").addClass("hide");
    $("#contactPort").addClass("hide");
    $("#background").addClass("hide");
    $("#leftSide").removeClass("hide");
    $("#rightSide").removeClass("hide");
    $("#bottomSide").removeClass("hide");
    $("#education").removeClass("hide");
  }
  else {
    console.log("A Fatal Error has occurred");
  }

});
});
