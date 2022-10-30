//user input name
const USERDETAILSPAGE =  document.querySelector(".userDeatails") 
//level page
const LEVELPAGE = document.querySelector(".gameScreen")
//Levels
const LEVELS = document.querySelector(".levels")
//Game Pannel
const GAMEPANNEL = document.querySelector(".gamePage")
//Current Score
const SCORE = document.querySelector(".gpScoreValue > span")
//REmaining TIme 
const REMAININGTIME = document.querySelector(".gpRemainingTime > span")
//Question Value 1
const QUESTION1 = document.querySelector(".gpQuestions> p:first-child")
//Question Value 2
const QUESTION2 = document.querySelector(".gpQuestions > p:last-child")
//Question Operater
const OPERATER = document.querySelector(".oper")
//Answer INput
const ANSWER = document.getElementById("gpValue")
function moveTo2ndPage(){
    USERDETAILSPAGE.style.display = "none" ;
    LEVELPAGE.style.display = "contents";
}
var gameLevel = 0
function startGame(level){
    LEVELS.style.display = "none";
    GAMEPANNEL.style.display =  "flex" ;
    gameLevel = level ;
    switch (level){
        case 1 : setInterval(timer,1000) ;generateQuestionLevel(20,2);//alert(QUESTION2.innerText);break; // 100,10,(+,-,*/)
        case 2 : //alert("medium");break;  // 200,20,(+,-,*/)
        case 3 : //alert("hard");break;  // 500,20,(+,-,*/)
        case 4 : //alert("custom");break;  // 100,10,(+,-,*/)
    }
    
}

var answer = 0 ;
let num1 ;
let num2 ;
let oper ;
function generateQuestionLevel(max,op){
    num1 = randomNumber(max,1) ;
    num2 = randomNumber(max,1) ;
    oper =  randomNumber(op,1) ;

    QUESTION1.innerText  = num1>num2 ?num1:num2  ;
    QUESTION2.innerText = num1 > num2 ? num2 : num1  ;
    switch (oper){
        case 1 : OPERATER.innerText = "+" ; answer = num1+num2 ;break ;
        case 2 : OPERATER.innerText = "-" ; answer = num1>num2 ?num1-num2 :num2-num1 ;break ;
        case 3 : OPERATER.innerText = "*" ; answer = num1*num2 ;break ;
        case 4 : OPERATER.innerText = "/" ; answer = num1>num2 ?num1/num2 :num2/num1 ;break ;

    }
    if (!Number.isInteger(answer)){
        switch (gameLevel){
            case 1 :generateQuestionLevel(20,4); 
        }

    }
}
var remain = 60 ;
function timer(){
    REMAININGTIME.innerText = --remain ;
    if (remain <= 0){
        remain = 0
        // alert(0)
    }
}
function randomNumber(upper,lower){
    return Math.round(Math.random()*(upper-lower)+lower)
}

//i know here im using clik instend of click 
var input = ""
var score = 0
function clik(num){
    input += num;
    ANSWER.innerText = input ;
    if (input==answer){
        score++ ;
        input="" ;
        answer = "" ;
        SCORE.innerText = score ;
        ANSWER.innerText = input ;
        // generateQuestionLevel()
        switch (gameLevel){
            case 1 :generateQuestionLevel(20,4); 
        }
    }
}
