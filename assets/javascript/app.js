//Game steps 
//on START keypress, start the game, initiate 30 sec timer for Q1
//when user selects answer, show correct or incorrect, shows correct answer
//THEN user progresses on to next question
//provide arrays to hold questions for random question generation
//for each question, set a timer of 30 seconds
//with no user input, with end of timer, show correct answer AND
//automatically move on to the next question
// =======================================================================================================================================================

var currentQuestion = 0;
var correct = 0;
var wrong = 0;
var timer = 30;
var i = 0;
var interval = null;

// =======================================================================================================================================================

//START BUTTON
$("#start-button").on("click", function () {
    logic();
    $("#start-button").hide();
});

function resetTimer() {
    stopTimerFunction();
    interval = setInterval(function () {
        timer--;
        $('#timer').text(timer);
        if (timer === 0) {
            currentQuestion++;
            $("#trivButtons").empty();
            i++;
            $("#response").empty();
            logic();
            timer = 30;
        }
    }, 1000)
}

function stopTimerFunction() {
    clearInterval(interval);
    interval = null;
}


var questionArr = [{
    question: "What is the name of the school Max attends?",
    choices: ["John Quincy HS", "John Adams High", "Halloweentown High", "Jacob Bailey High School "],
    values: [true, false, false, false]
}, {
    question: "What is the name of the school Max attends?",
    choices: ["John Quincy HS", "John Adams High", "Halloweentown High", "Jacob Bailey High School "],
    values: [true, false, false, false]
}, {
    question: "What is the name of the school Max attends?",
    choices: ["John Quincy HS", "John Adams High", "Halloweentown High", "Jacob Bailey High School "],
    values: [true, false, false, false]
}, {
    question: "What is the name of the school Max attends?",
    choices: ["John Quincy HS", "John Adams High", "Halloweentown High", "Jacob Bailey High School "],
    values: [true, false, false, false]
},

]

// =======================================================================================================================================================


// function that creates the answer buttons
function answerButton() {
    for (var i = 0; i < questionArr[currentQuestion].choices.length; i++) {

        // We create a button 
        var button = $("<button>");

        // Assigns the name of the array to the button.
        button.text(questionArr[currentQuestion].choices[i]);

        // We create a class for the buttons 
        button.addClass("answer-buttons btn btn-primary");

        button.attr("value", questionArr[currentQuestion].values[i]);

        button.attr("Data-name", questionArr[currentQuestion].choices[i]);
        // append the button in the div with the #trivButtons id.
        $("#trivButtons").append(button);
    };
}

// =======================================================================================================================================================

// game logic
function logic() {
    resetTimer();

    // questions are being placed in the array from above
    $("#trivQuestion").html(questionArr[currentQuestion].question)
    answerButton();

    //return the value of the button clicked

}

$(document).on("click", ".answer-buttons", function () {

    //use .this to identify which button is pressed       
    var answers = $(this).attr("Data-name");
    //console log data-name 
    console.log("click");

    console.log(answers);
    if ($(this).attr("value") === "true") {
        correct++;
        $("#response").html("Correct");
        nextQuestion();
    } else {

        $("#response").html("Nope!");
        wrong++;
        nextQuestion();
    }

    function nextQuestion(){
        currentQuestion++;
        timer = 30;
        $("#trivButtons").empty();
        i++;
        $("#response").empty();
        logic();
        //if out of questions (aka question number not in array)

        if currentQuestion = question.length
        else //reference psychic game 
    }
    console.log(currentQuestion);
});


