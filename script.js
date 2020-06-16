// add questions and options into arrays
var questions = ["What year was Earth Wind and Fire created?", "What year was the original Woodstock?", "What Beatles single lasted longest on the charts, lasting 19 weeks?"];
var choiceOne = ["1962", "1967", "Imagine"];
var choiceTwo = ["1972", "1969", "With a little help from my friends"];
var choiceThree = ["1980", "1971", "Hey Jude"];
var choiceFour = ["1969", "1962", "Let it Be"];
var timerEl = document.getElementsByClassName(".timer")

// ask question and compare user answer to correct answer

// make a timer
function time (){
    var timeLeft = 60;
    var timeInterval = setInterval(function(){
        timerEl.textContent = timeLeft + " seconds left";
        timeLeft--;
        if (timeleft === 0){
            console.log("you lose")
            }

        // if (answer === false){
            // timeLeft - 15;
        // }
        
    }, _);
        
}

// score counter


// high score list
