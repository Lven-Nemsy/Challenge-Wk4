//Buttons
var startbtn = document.querySelector(".start");
var topl = document.querySelector(".topl");
var timeEl = document.querySelector(".timer");
var qpage = document.querySelector(".q");
var strtpage = document.querySelector("#start-page");
var scndpage = document.querySelector("#second-page");
var thrdpage = document.querySelector("#third-page");
var frthpage = document.querySelector("#fourth-page");
var ffthpage = document.querySelector("#fifth-page");
var sxthpage = document.querySelector("#sixth-page");
var rsltpage = document.querySelector("#result-page");
var endpage = document.querySelector("#end-page");
var rstrtpage = document.querySelector("#restart-page");

console.log(startbtn);
console.log(topl);
console.log(timeEl);
console.log(qpage);
console.log(strtpage);
console.log(scndpage);
console.log(thrdpage);
console.log(frthpage);
console.log(ffthpage);
console.log(sxthpage);
console.log(rsltpage);
console.log(endpage);
console.log(rstrtpage);

var timer = null;
var time = 60;
var topl = 0;
var winner = null;
var score = null;


function start(event){
    console.log(qpage);
    if(qpage.style.display === "none"){
        qpage.style.display = "block";
    }
    if()
    var timerT = setInterval(function(){
        time--;
        timeEl.textContent = time;
        if(time === 0){
            clearInterval(timerT);
        }
    }, 1000);
}

startbtn.addEventListener("click", start)


function highscore(event){
    consle.log(endpage);

    localStorage.setItem(highscore, JSON.stringify({winner, score}))
}

//topl.addEventListener("click", highscore)
//function gameEnds(Win){clearInterval}



//HideElement(startbtn);
//showElement(timeEl);



//function countdown(event){}

//timeEl.addEventListener(startbtn,countdown)