//user input name
const USERDETAILSPAGE =  document.querySelector(".userDeatails") 
//level page
const LEVELPAGE = document.querySelector(".gameScreen")
//Levels
const LEVELS = document.querySelector(".levels")
//Game Pannel
const GAMEPANNEL = document.querySelector(".gamePage")

function moveTo2ndPage(){
    USERDETAILSPAGE.style.display = "none" ;
    LEVELPAGE.style.display = "contents";
}
function startGame(){
    LEVELS.style.display = "none";
    GAMEPANNEL.style.display =  "flex" ;
    
}