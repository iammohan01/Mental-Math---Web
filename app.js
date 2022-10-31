document.addEventListener('keydown', (event) => {
        code = event.key ;
        
        if (code == "Backspace"){
            removeLast();
        }
        if ( (gameLevel != 0) && Number.isInteger(Number(code))){
            if (event.keyCode == 32){
                // alert("");
                onScreenKeyboard();
            }
            else{
                // alert(code)
                input+=code;
                answerValidation();
            }
            
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
//custom game window
const CUSTOMWINDOW = document.querySelector('.customValueInput');
function moveTo2ndPage(){
    USERDETAILSPAGE.style.display = "none" ;
    console.log( LEVELPAGE.style.display);
    LEVELPAGE.style.display = "contents";
    console.log( LEVELPAGE.style.display);
    
    if (SETUSERNAME.innerText == "" ){
        setUserName();
    }
    // alert("From move 2 ")
    
}
function setUserName(){
    SETUSERNAME.innerText = USERNAME.value ;
    setUserNameLocal();

}
var gameLevel = 0
var myInterval ;
function startGame(level){
    LEVELS.style.display = "none";
    console.log( LEVELPAGE.style.display);
    
    GAMEPANNEL.style.display =  "flex" ;
    // gameLevel = level ;
    
    switch (level){
        case 1 : gameLevel = level ;  myInterval = setInterval(timer, 1000) ; generateQuestionLevel(20,2);break;//alert(QUESTION2.innerText);break; // 100,10,(+,-,*/)
        case 2 : gameLevel = level ;  myInterval = setInterval(timer, 1000) ; generateQuestionLevel(25,4);break;//alert("medium");break;  // 200,20,(+,-,*/)
        case 3 : gameLevel = level ;  myInterval = setInterval(timer, 1000) ; generateQuestionLevel(40,4);break;//alert("hard");break;  // 500,20,(+,-,*/)
        case 4 : customGame(); myInterval = setInterval(timer, 1000) ;  break;// generateQuestionLevel(20,2);//alert("custom");break;  // 100,10,(+,-,*/)
    }
    
}
var customGameValue = 0 ;
function customGame(){

    LEVELS.style.display = "none";
    GAMEPANNEL.style.display =  "none" ;
    CUSTOMWINDOW.style.display = "flex";
    customGameValue = CUSTOMNUMBER1.value;
       
}
const CUSTOMNUMBER1 = document.getElementById("cvNum1");

function customButton(){    
    if (Number.isInteger(Number(CUSTOMNUMBER1.value))){
        GAMEPANNEL.style.display =  "flex" ;
        CUSTOMWINDOW.style.display = "none";
        gameLevel = 4 ;
        generateQuestionLevel(Number(CUSTOMNUMBER1.value),4);
    }
}

var answer = 0 ;
let num1 ;
let num2 ;
let oper ;
function generateQuestionLevel(max,op){
    num1 = randomNumber(max,1) ;
    num2 = randomNumber(max,1) ;
    oper = randomNumber(op,1) ;
    QUESTION1.innerText  = num1>num2 ?num1:num2  ;
    QUESTION2.innerText = num1 > num2 ? num2 : num1  ;
    answer = 0;
    switch (oper){
        case 1 : OPERATER.innerText = "+" ; answer = num1+num2 ;break ;
        case 2 : OPERATER.innerText = "-" ; answer = num1>num2 ?num1-num2 :num2-num1 ;break ;
        case 3 : OPERATER.innerText = "*" ; answer = num1*num2 ;break ;
        case 4 : OPERATER.innerText = "/" ; answer = num1>num2 ?num1/num2 :num2/num1 ;break ;   
    }
    if (!Number.isInteger(answer) ){
        switch (gameLevel){
            case 1 :generateQuestionLevel(20,3); break;
            case 2 :generateQuestionLevel(25,4); break;
            case 3 :generateQuestionLevel(40,4); break;
            case 4 :generateQuestionLevel(customGameValue,4);break;
        }
        
    }
        
}
var remain = 60 ;

function timer(){
    REMAININGTIME.innerText = --remain ;
    if (remain <= 9){
        clearInterval(myInterval);
        gameOver();   
        
    }
    
}
function gameOver(){
    gameLevel = 0 ;
    remain = 60 ;
    FINALSCORE.innerText = score ;
    score = 0 ;
    GAMEPANNEL.style.display ="none"; 
    SCOREPAGE.style.display = "flex" ;
    // moveTo2ndPage();
    backToMain();

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
    
    console.log(input,answer,gameLevel,input==answer)
    if (input==answer){
        score++ ;
        input="" ;
        answer = "" ;
        SCORE.innerText = score ;
        ANSWER.innerText = input ;
        
        generateQuestionLevel(20,3);
        switch (gameLevel){
            case 1 :generateQuestionLevel(20,3);break; 
            case 2 :generateQuestionLevel(25,4);break;
            case 3 :generateQuestionLevel(40,4);break;
            case 4 :generateQuestionLevel(customGameValue,4);break;
        }
         console.log("from answer validation",gameLevel)
        
    }
}
function removeLast(){
    input = input.substring(0,input.length-1);
    ANSWER.innerText = input ;

}

function changeName(){
    let na = prompt("Enter a new Name :") ;
    USERNAME.value = na != "" ? na:"User";
    SETUSERNAME.innerText = na != "" ? na:"User" ;
    setUserNameLocal();
}
function setUserNameLocal(){
    var name =  USERNAME.value ;
    localStorage.setItem("username",name);

}
let onScreen = false;
function onScreenKeyboard(){
    
    
    if (!onScreen){
        document.querySelector(".in").style.visibility = "visible";
        onScreen =true ;
    }
    else{
        document.querySelector(".in").style.visibility = "hidden";
        onScreen = false ;
    }
    // alert(!onScreen);
}
function backToMain(){
    SCOREPAGE.style.display = "none";
    moveTo2ndPage();
    // alert();
}
if (localStorage.getItem("username" ) == null){
    // setUserNameLocal();
}
else{
    var getusename = localStorage.getItem("username");
    SETUSERNAME.innerText = getusename;
    // alert(getusename);
    // startGame();
    moveTo2ndPage();

}
