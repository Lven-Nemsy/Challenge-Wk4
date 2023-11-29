//Buttons
var startbtn = document.querySelector(".start");
var vwscore = document.querySelector(".viewscore");
var timeEl = document.querySelector(".timer");
var strtpage = document.querySelector("#start-page");
var qpage = document.querySelector(".q");
var chce1 = document.querySelector(".choice1");
var chce2 = document.querySelector(".choice2");
var chce3 = document.querySelector(".choice3");
var chce4 = document.querySelector(".choice4");
var chce21 = document.querySelector(".choice21");
var chce22 = document.querySelector(".choice22");
var chce23 = document.querySelector(".choice23");
var chce24 = document.querySelector(".choice24");
var chce31 = document.querySelector(".choice31");
var chce32 = document.querySelector(".choice32");
var chce33 = document.querySelector(".choice33");
var chce34 = document.querySelector(".choice34");
var chce41 = document.querySelector(".choice41");
var chce42 = document.querySelector(".choice42");
var chce43 = document.querySelector(".choice43");
var chce44 = document.querySelector(".choice44");
var chce51 = document.querySelector(".choice51");
var chce52 = document.querySelector(".choice52");
var chce53 = document.querySelector(".choice53");
var chce54 = document.querySelector(".choice54");
var frstpage = document.querySelector("#first-page");
var scndpage = document.querySelector("#second-page");
var thrdpage = document.querySelector("#third-page");
var frthpage = document.querySelector("#fourth-page");
var ffthpage = document.querySelector("#fifth-page");
var rsltpage = document.querySelector("#result-page");
var answerc = document.querySelector(".answerC");
var answerw = document.querySelector(".answerW");
var answerc2 = document.querySelector(".answerC2");
var answerw2 = document.querySelector(".answerW2");
var answerc3 = document.querySelector(".answerC3");
var answerw3 = document.querySelector(".answerW3");
var answerc4 = document.querySelector(".answerC4");
var answerw4 = document.querySelector(".answerW4");
var answerc5 = document.querySelector(".answerC5");
var answerw5 = document.querySelector(".answerW5");
var names = document.querySelector(".name");
var text = document.querySelector("#text");
var score = document.querySelector(".score");
var cntdwn = document.querySelector("#countdown");
var sbmit = document.querySelector("#submit");
var endpage = document.querySelector("#end-page");
var back = document.querySelector(".go-back");
var clear = document.querySelector(".clear");

console.log(startbtn);
console.log(vwscore);
console.log(timeEl);
console.log(strtpage);
console.log(qpage);
console.log(frstpage);
console.log(scndpage);
console.log(thrdpage);
console.log(frthpage);
console.log(ffthpage);
console.log(rsltpage);
console.log(names);
console.log(score);
console.log(endpage);

var timerT;
var timer = null;
var time = 60;
var penalty = -10;
var topl = 0;
var winner = "";

function hideElement(el) {
	el.classList.add("hide");
}

function showElement(el) {
	el.classList.remove("hide");
}

function start(event) {
	hideElement(strtpage);
	frstpage.style.display = "block";
	timerT = setInterval(function () {
		time--;
		timeEl.textContent = time;
		if (time === 0) {
			clearInterval(timerT);
			hideElement(frstpage);
			hideElement(scndpage);
			hideElement(thrdpage);
			hideElement(frthpage);
			hideElement(ffthpage);
			rsltpage.style.display = "block";
		}
	}, 1000);
	//global variable of timerT
	//when quiz is finished - call clearInterval(timerT)- last answer will trigger
}

startbtn.addEventListener("click", start);

// First Question

function ques1C(event) {
	hideElement(frstpage);
	scndpage.style.display = "block";
	answerc.style.display = "block";
	answerw.style.display = "hidden";
}

chce2.addEventListener("click", ques1C);

function ques1W(event) {
	answerw.style.display = "block";
	answerc.style.display = "hidden";
	time = time + penalty;
}
chce1.addEventListener("click", ques1W);
chce3.addEventListener("click", ques1W);
chce4.addEventListener("click", ques1W);

// Second Question

function ques2C(event) {
	hideElement(scndpage);
	thrdpage.style.display = "block";
	answerc2.style.display = "block";
	answerw2.style.display = "hidden";
}
chce23.addEventListener("click", ques2C);

function ques2W(event) {
	answerw2.style.display = "block";
	answerc2.style.display = "hidden";
	time = time + penalty;
}
chce21.addEventListener("click", ques2W);
chce22.addEventListener("click", ques2W);
chce24.addEventListener("click", ques2W);

// Third Question

function ques3C(event) {
	hideElement(thrdpage);
	frthpage.style.display = "block";
	answerc3.style.display = "block";
	answerw3.style.display = "hidden";
}
chce34.addEventListener("click", ques3C);

function ques3W(event) {
	answerw3.style.display = "block";
	answerc3.style.display = "hidden";
	time = time + penalty;
}
chce31.addEventListener("click", ques3W);
chce32.addEventListener("click", ques3W);
chce33.addEventListener("click", ques3W);

// Fourth Question

function ques4C(event) {
	hideElement(frthpage);
	ffthpage.style.display = "block";
	answerc4.style.display = "block";
	answerw4.style.display = "hidden";
}
chce42.addEventListener("click", ques4C);

function ques4W(event) {
	answerw4.style.display = "block";
	answerc4.style.display = "hidden";
	time = time + penalty;
}
chce41.addEventListener("click", ques4W);
chce43.addEventListener("click", ques4W);
chce44.addEventListener("click", ques4W);

// Fifth Question

function ques5C(event) {
	hideElement(ffthpage);
	cntdwn.textContent = time;
	console.log(cntdwn);
	rsltpage.style.display = "block";
	answerc5.style.display = "block";
	answerw5.style.display = "hidden";
	clearInterval(timerT);
	
}
chce53.addEventListener("click", ques5C);

function ques5W(event) {
	answerw5.style.display = "block";
	answerc5.style.display = "hidden";
	time = time + penalty;
}
chce51.addEventListener("click", ques5W);
chce52.addEventListener("click", ques5W);
chce54.addEventListener("click", ques5W);

//Enter Score
var highscoreArr = JSON.parse(localStorage.getItem('highscores')) || []

function highscore(event) {
	console.log(endpage);
	var userInput = text.value

	var highscoreObj = {
		userInput: userInput,
		score: time,
	};

	highscoreArr.push(highscoreObj)

	
	localStorage.setItem("highscores", JSON.stringify(highscoreArr));

	endpage.style.display = "block";
	hideElement(strtpage);
	clearInterval(timerT);

	// grab initals and score
	
	
	
}
document.getElementById('save').addEventListener('click', highscore)


//text.addEventListener("keydown")

function submit(event) {
	hideElement(rsltpage);
	endpage.style.display = "block";
	timerT = setInterval(function () {
		timeEl.textContent = time;
		time = 0;
	});
}
sbmit.addEventListener("click", submit);

// High Score Page

function goback(event) {
	hideElement(endpage);
	showElement(strtpage);
	for (var i = 0; i < 5; i++) {
		start();
	}
}
back.addEventListener("click", goback);

function erase(event) {
	names = clearInterval;
	score = clearInterval;
}
clear.addEventListener("click", erase);

//Score tracker
//function updateScore(){
//   score.textContent = scorekey
