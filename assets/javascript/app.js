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
function startGame() {
    $(".time-remaining").hide();
    $(".results").hide();
}
startGame();

//START BUTTON
$("#start-button").on("click", function () {
    correct = 0;
    wrong = 0;
    currentQuestion = 0;
    logic();
    $("#start-button").hide();
    $(".time-remaining").show();
    $(".results").hide();
    $("#trivQuestion").show();
    $("#trivButtons").show();

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
            timer = 30;
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
    question: "What is Mike's older sister's name?",
    choices: ["Amy", "Barb", "Joyce", "Nancy"],
    values: [false, false, false, true]
}, {
    question: "What is Eleven's father's name?",
    choices: ["Bruce", "Brenner", "Doc", "Burnham"],
    values: [false, true, false, false]
}, {
    question: "What number does Eleven's sister have tattooed on her arm?",
    choices: ["001", "005", "007", "008"],
    values: [false, false, false, true]
}, {
    question: "How old is Will when he disappears?",
    choices: ["5", "15", "12", "10"],
    values: [false, false, true, false]
}, {
    question: "What is the name of Dustin's cat?",
    choices: ["Meows", "Morty", "Mews", "Milo"],
    values: [false, false, true, false]
}, {
    question: "Which actress plays Eleven?",
    choices: ["Mindy Kaling", "Millie Bobby Brown", "Melissa Joan Hart", "Melvina Jo Brown"],
    values: [false, true, false, false]
}, {
    question: "Who asked Eleven to dance at the Snowball?",
    choices: ["Dustin", "Will", "Mike", "Lucas"],
    values: [false, false, true, false]
}, {
    question: "What does Steve help Dustin with?",
    choices: ["His hair", "His car", "His cat", "His plants"],
    values: [true, false, false, false]
}, {
    question: "What does Will's mom put up to help find him?",
    choices: ["Posters", "Christmas lights", "Bologne", "Post-its"],
    values: [false, true, false, false]
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
    } else {
        wrong++;
    }

    if (currentQuestion === questionArr.length - 1) {
        console.log("last question");
        endGame();
    }
    else {
        nextQuestion();
    };
});

function nextQuestion() {
    currentQuestion++;
    timer = 30;
    $("#trivButtons").empty();
    i++;
    $("#response").empty();
    logic();
}

function endGame() {
    $(".time-remaining").hide();
    $(".results").show();
    $("#correct").text("Correct: " + correct);
    $("#incorrect").text("Incorrect: " + wrong);
    $("#trivQuestion").hide();
    $("#trivButtons").hide();
    stopTimerFunction();
    $("#start-button").show();

};
