// add questions and options into arrays
var questions = ["What year was Earth Wind and Fire created?", "", ""];
var choiceOne = ["1962", "", ""];
var choiceTwo = ["1972", "", ""];
var choiceThree = ["1980", "", ""];
var choiceFour = ["1969", "", ""];
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
