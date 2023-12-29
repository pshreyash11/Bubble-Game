var timer = 60;
var score = 0;
var hitNum = 0;

function makeBubble(){
    var clutter = "";

    for(let i = 0;i<168;i++){
        var randomNumber = Math.floor(Math.random()*10);
        clutter += `<div class="bubble flex">${randomNumber}</div>`
    }

    document.querySelector(".pbtm").innerHTML = clutter;
}




function runTimer(){
    var runningTime = setInterval(() => {
        if(timer > 0){
            timer--;
            document.querySelector(".time").textContent = timer; 
        }
        else{
            clearInterval(runningTime);
            document.querySelector(".pbtm").innerHTML = `
                    <h1> Your Game is Over <h1>           
            `;
        }
        
    },1000);
}

function getNewHit(){
    hitNum = Math.floor(Math.random()*10);
    document.querySelector(".hitValue").textContent = hitNum;
}

function increaseScore(){
    score += 10;
    document.querySelector(".scoreValue").textContent = score;
}

document.querySelector(".pbtm").addEventListener("click",(e) =>{
    var clickedNumber = Number(e.target.textContent);
    if(clickedNumber === hitNum){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

makeBubble(); 
getNewHit();
runTimer();




                  
