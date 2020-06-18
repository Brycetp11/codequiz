// add questions and options into arrays

// userName = localStorage.setItem('name', JSON.stringify(youGotAName));

var timerEl = document.querySelector(".timer");
var questionOneEl = document.querySelector(".big-questions");
var questionTwoEl = document.querySelector(".medium-questions");
var questionThreeEl = document.querySelector(".small-questions");
var containerEl = document.querySelector(".container1")
var scoreBoard = document.querySelector(".scoreboard")
localStorage.getItem('scoreboard')
var topScores = [];


var scoreEl = document.querySelector(".score")
var score = 0;
scoreEl.textContent = "Your Score: " + score;

var questionOne = {
    question: "What year was Earth Wind and Fire created?",
    choiceOne: 1962, 
    choiceTwo : 1972,
    choiceThree : 1980,
    choiceFour : 1969
}

var questionTwo = {
    question: "What year was the original Woodstock?",
    choiceOne: 1967,
    choiceTwo : 1969,
    choiceThree : 1971,
    choiceFour : 1962
}

var questionThree = {
    question: "What Beatles single lasted longest on the charts, lasting 19 weeks?",
    choiceOne: "Imagine",
    choiceTwo : "With a little help from my friends",
    choiceThree : "Hey Jude",
    choiceFour : "Let it Be"
}

// ask question and compare user answer to correct answer

function quizQuestionOne(){
    document.querySelector(".container1").style.display = "block"
    var qOneEl = document.getElementById("optionone");
    var qTwoEl = document.getElementById("optiontwo")
    var qThreeEl = document.getElementById("optionthree")
    var qFourEl = document.getElementById("optionfour")
    questionOneEl.textContent = questionOne.question;
    qOneEl.textContent = questionOne.choiceOne;
    qTwoEl.textContent = questionOne.choiceTwo;
    qThreeEl.textContent = questionOne.choiceThree;
    qFourEl.textContent = questionOne.choiceFour;

    qOneEl.addEventListener("click", function(){
        reduceTime(15);
        quizQuestionTwo();
    })

    qTwoEl.addEventListener("click", function(){
        reduceTime(15);
        quizQuestionTwo();
    })

    qThreeEl.addEventListener("click",function(){
        reduceTime(15);
        quizQuestionTwo();
    })

    qFourEl.addEventListener("click", function(){  
        score++;
        scoreEl.textContent = "Your Score: " + score;
        quizQuestionTwo();
    })
    
}


function quizQuestionTwo(){
    document.querySelector(".container1").style.display = "none"
    document.querySelector(".container2").style.display = "block"
    var qOneTwo = document.getElementById("qtwoone");
    var qTwoTwo = document.getElementById("qtwotwo")
    var qThreeTwo = document.getElementById("qtwothree")
    var qFourTwo = document.getElementById("qtwofour")
    questionTwoEl.textContent = questionTwo.question;
    qOneTwo.textContent = questionTwo.choiceOne;
    qTwoTwo.textContent = questionTwo.choiceTwo;
    qThreeTwo.textContent = questionTwo.choiceThree;
    qFourTwo.textContent = questionTwo.choiceFour;
    
    qOneTwo.addEventListener("click", function(){
        reduceTime(15);
        quizQuestionThree();
    })

    qTwoTwo.addEventListener("click", function(){
        score+= 1;
        scoreEl.textContent = "Your Score: " + score;
        quizQuestionThree();
    })

    qThreeTwo.addEventListener("click",function(){
        reduceTime(15);
        quizQuestionThree();
    })

    qFourTwo.addEventListener("click", function(){
        reduceTime(15);
        quizQuestionThree();
    })
}

function quizQuestionThree(){
    document.querySelector(".container2").style.display = "none"
    document.querySelector(".container3").style.display = "block";
    var qOneThree = document.getElementById("qthreeone");
    var qTwoThree= document.getElementById("qthreetwo")
    var qThreeThree = document.getElementById("qthreethree")
    var qFourThree = document.getElementById("qthreefour")
    questionThreeEl.textContent = questionThree.question;
    qOneThree.textContent = questionThree.choiceOne;
    qTwoThree.textContent = questionThree.choiceTwo;
    qThreeThree.textContent = questionThree.choiceThree;
    qFourThree.textContent = questionThree.choiceFour;
    
    qOneThree.addEventListener("click", function(){
        reduceTime(15);
        storeScore();
        document.querySelector(".container3").style.display = "none";
        scoreBoard.style.display = "block";
        timerEl.style.display = "none";
    })

    qTwoThree.addEventListener("click", function(){
        reduceTime(15);
        storeScore();
        document.querySelector(".container3").style.display = "none";
        scoreBoard.style.display = "block";
        timerEl.style.display = "none";
    })

    qThreeThree.addEventListener("click",function(){
        score+= 1;
        storeScore();
        scoreEl.textContent = "Your Score: " + score;
        document.querySelector(".container3").style.display = "none";
        scoreBoard.style.display = "block";
        timerEl.style.display = "none";
    })

    qFourThree.addEventListener("click", function(){
        reduceTime(15);
        storeScore();
        document.querySelector(".container3").style.display = "none";
        scoreBoard.style.display = "block";
        timerEl.style.display = "none";
    })
}

function reduceTime(seconds){
    if (timeLeft >= seconds){
        timeLeft -= seconds;
    } else {
        timeLeft = 0;
        storeScore(); 
        containerEl.style.display = "none";
        scoreBoard.style.display = "block";
    }
};

function storeScore (){ 
    var scores = JSON.parse(localStorage.getItem('scoreboard'));
    var youGotAName = prompt("What is your name?");

    if (scores != null){
        for (let i = 0; i < scores.length; i++) {
            topScores.push(scores[i]);
        }
    }

    var initialScore = {
        name : youGotAName,
        userScore : score
    }
    topScores.push(initialScore);

    topScores.sort(function(a, b) {
        return b.userScore - a.userScore;
    });

    // call function for displaying scoreboard
    endScreen();

    localStorage.setItem('scoreboard', JSON.stringify(topScores));

};

function endScreen (){
    for (let i = 0; i < topScores.length; i++) {
        var li = document.createElement("li")
        li.textContent = `${topScores[i].name}: ` + `${topScores[i].userScore}`;
        scoreBoard.appendChild(li);
    }
}

var timeLeft = 60;

function setTime (){
    var timeInterval = setInterval(function(){
        if (timeLeft <= 0){
            clearInterval(timeInterval)
            containerEl.style.display = "none"
            scoreBoard.style.display = "block"
        } else {
            timeLeft--;
        }
        timerEl.textContent = timeLeft + " seconds left";
    }, 1000);   
};

quizQuestionOne();
setTime();