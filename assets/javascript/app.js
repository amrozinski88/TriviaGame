console.log("I did work today")

// var  ["Who is Darth Vaders Son?","What Is Han Solos Ship Name?","Where Did Luke Grow Up?","What Color Is Lukes Lightsaber?","What Kind Of Ship Does Luke Flu?"]
var questionOne = {
    Q: "Who Is Darth Vaders Son?",
    answers: {
        A: "Chewy",
        B: "Darth Maul",
        C: "Luke Skywalker",
        D: "Darth Sidious",
    },
    answer: "C"
}

var questionTwo = {
    Q: "What Is Han Solos Ship Named?",
    answers: {
        A: "Dark Falcon",
        B: "Fast Falcon",
        C: "Santa Maria",
        D: "Millenium Falcon",
    },
    answer: "D"
}

var questionThree = {
    Q: "Where Did Luke Grow Up?",
    answers: {
        A: "Planet Tatooine",
        B: "Planet Earth",
        C: "The Death Star",
        D: "Planet Hoth",
    },
    answer: "A"
}

var questionFour = {
    Q: "What Color Is Lukes First Lightsaber?",
    answers: {
        A: "Yellow",
        B: "Red",
        C: "Purple",
        D: "Blue",
    },
    answer: "D"
}

var questionFive = {
    Q: "What Kind Of Ship Does Luke Fly?",
    answers: {
        A: "Y-Wing",
        B: "V-Wing",
        C: "A-Wing",
        D: "X-Wing",
    },
    answer: "D"
}

var timeLeft = 30;

var intervalID

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

var questionNumber = 0;

var correctAnswers = 0;

var incorrectAnswers = 0;

var currentQuestion = 0;

var unansweredQuestions = 0;

function getQuestion(questionNum) {
    $("#questionH").text(questions[questionNum].Q)
    $("#aButton").text(questions[questionNum].answers.A)
    $("#bButton").text(questions[questionNum].answers.B)
    $("#cButton").text(questions[questionNum].answers.C)
    $("#dButton").text(questions[questionNum].answers.D)

}
function transition(text) {
    clearInterval(intervalID)
    timeLeft = 30;
    currentQuestion++;
    $("#transitionText").text(text)
    $("#mainScreen").attr("hidden", true)
    if (currentQuestion < questions.length) {
        $("#transitionScreen").attr("hidden", false)
        setTimeout(function () {
            $("#mainScreen").attr("hidden", false)
            $("#transitionScreen").attr("hidden", true)
            startTimer()
            getQuestion(currentQuestion)
        }, 5000)
    }

    else {

        $("#transitionText").text("Game Over")
        $("#transitionScreen").attr("hidden", false)
        $("#correctAnswers").text(correctAnswers)
        $("#incorrectAnswers").text(incorrectAnswers)
        $("#unansweredQuestions").text(unansweredQuestions)
        $("#resultsDiv").attr("hidden", false)
        console.log("Game Over")
    }

}

function startTimer() {
    $("#timeLeftH").text(timeLeft)
    intervalID = setInterval(function () {
        timeLeft--
        $("#timeLeftH").text(timeLeft)
        if (timeLeft === 0) {
            transition("Times up!")
            unansweredQuestions++
        }
    }, 1000)


}
$("#startButton").on("click", function () {
    $("#startBtnDiv").attr("hidden", true)
    $("#mainScreen").attr("hidden", false)
    startTimer()
})
getQuestion(currentQuestion)
$(".answer-buttons").on("click", function (event) {
    if (event.target.value === questions[currentQuestion].answer) {
        correctAnswers++;
        transition("Thats Correct!")
    }
    else {
        incorrectAnswers++;
        transition("Thats Incorrect!")
    }



    console.log(correctAnswers, incorrectAnswers);
})



// getQuestion(questionNumber)
// questionNumber++
