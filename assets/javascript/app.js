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
    Q :"What Kind Of Ship Does Luke Fly?",
     answers : {
         A: "Y-Wing",
         B: "V-Wing",
         C: "A-Wing",
         D: "X-Wing",
     },
     answer: "D"
     }


var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive];

var questionNumber = 0;




function getQuestion (questionNum){
    $("#question").text(questions[questionNum].Q)
    $("#aButton").text(questions[questionNum].answers.A)
    $("#bButton").text(questions[questionNum].answers.B)
    $("#cButton").text(questions[questionNum].answers.C)
    $("#dButton").text(questions[questionNum].answers.D)
}

getQuestion(0)
$("button").on("click", function() {
getQuestion(questionNumber)
questionNumber++
})
