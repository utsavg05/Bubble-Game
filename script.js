var timer = 60;
var hitrn = 0;
var score = 0;

function incScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function decScore() {
    score -= 20;
    document.querySelector("#scoreval").textContent = score;
}

function bubbleMaker() {
 var clutter = '';
    for(var i = 1; i <= 133; i++) {
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function setTimer() {
    var timeInt = setInterval(function (){
        if(timer > 0){
            timer--;
            document.querySelector("#timeval").textContent = timer;
            document.querySelector("#restart").style.display = "none";

        } else {
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game over! Your final score is ${score}. </h1>`;
            document.querySelector("#hitval").textContent = '-'
            document.querySelector("#restart").style.display = "block";
            newGame();
        }
    },1000)
}

function newHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click", function(details) {
    let clickedItem = Number(details.target.textContent);
    if(clickedItem === hitrn) {
        incScore();
        newHit();
        bubbleMaker();
    } else {
        decScore();
    }
}) 

bubbleMaker();
setTimer();
newHit();

function newGame() {
    document.querySelector("#restart").addEventListener("click", function() {
        timer = 60;
        score = 0;
        hitrn = 0;
        document.querySelector("#scoreval").textContent = score;
        document.querySelector("#timeval").textContent = timer;
        document.querySelector("#hitval").textContent = hitrn;
        bubbleMaker();
        setTimer();
        newHit();
    });
}

