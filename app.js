document.addEventListener('keydown', (event) => {
        code = event.key ;
        if (code == "Backspace"){
            removeLast();
        }
        if ( (gameLevel != 0) && Number.isInteger(Number(code))){
            
                // alert(code)
                input+=code;
                answerValidation();
            
        }      
}, false);
//user input name
const USERDETAILSPAGE =  document.querySelector(".userDeatails") 
//get user name input 
const USERNAME = document.getElementById("udGetName")
//set user Name value
const SETUSERNAME  =document.getElementById("gsUserNameValue")
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
//Score Page 
const SCOREPAGE = document.querySelector(".scorePage")
// Game End score value 
const FINALSCORE = document.querySelector("#spScoreValue");
function moveTo2ndPage(){
    USERDETAILSPAGE.style.display = "none" ;
    LEVELPAGE.style.display = "contents";
    // alert(USERNAME.value )
    setUserName();
}
function setUserName(){
    SETUSERNAME.innerText = USERNAME.value ;

}
var gameLevel = 0
var myInterval ;
function startGame(level){
    LEVELS.style.display = "none";
    GAMEPANNEL.style.display =  "flex" ;
    gameLevel = level ;
    myInterval = setInterval(timer, 1000) ;
    switch (level){
        case 1 : generateQuestionLevel(20,2);//alert(QUESTION2.innerText);break; // 100,10,(+,-,*/)
        case 2 : //alert("medium");break;  // 200,20,(+,-,*/)
        case 3 : //alert("hard");break;  // 500,20,(+,-,*/)
        case 4 : //alert("custom");break;  // 100,10,(+,-,*/)
    }
    
}

var answer = 0 ;
let num1 ;
let num2 ;
let oper ;
let countOgRanfom = 0 ;
function generateQuestionLevel(max,op){
    countOgRanfom++ ;
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
        clearInterval(myInterval);
        gmaeOver();   
    }
    
}
function gmaeOver(){
    gameLevel = 0 ;
    FINALSCORE.innerText = score ;
    score = 0 ;
    GAMEPANNEL.style.display ="none"; 
    SCOREPAGE.style.display = "flex" ;

}
function randomNumber(upper,lower){
    return Math.round(Math.random()*(upper-lower)+lower)
}

var input = ""
var score = 0
//i know here im using clik instend of click 
function clik(num){
    input += num;
    answerValidation();
    
}
function answerValidation(){
    
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
function removeLast(){
    input = input.substring(0,input.length-1);
    ANSWER.innerText = input ;

}