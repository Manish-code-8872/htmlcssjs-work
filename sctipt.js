let timer = document.getElementById("timer")[0];
let quizContainer = document.getElementById("container");
let nextButton = document.getElementById("next-container");
let numOfQuestions =document.getElementById("number-of-questions")[0];
let displayContainer=document.getElementById("display-container");
let scoreContainer = document.getElementById("score-container");
let restart = document.getElementById("restart");
let userScore =document.getElementById("user-score");
let startScore = document.getElementById("start-score");
let startButton =document.getElementById("start-button");
let questionCount;
let scoreCount =0;
let count =10;
let countdown;
//for hex codes
let letters =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

//questions and options array
let quizArray = [];
const generateRandomValue = () =&gt; {
    newColor = "#";
    for (let i=0; i {
        let expectedLength = 4;
        while ( optionsArray.length {
            for (let i=0; i :
                //increment question count 
                questionCount +=1;
                //if last question
                if (questionCount ==quizArray.length) {
                    //hide question container and display score
                    displayContainer.classList.add("hide");
                    scoreContainer.classList.remove("hide");

                    //user score
                    userScore.innerHTML = "your score is " + scoreCount + "out of " +questionCount;
                }else {
                    //display questionCount

                }

            )
        })
    })
}