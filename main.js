const score = document.querySelector('.score');
const resetBtn = document.querySelector("#reset");
const choose = document.getElementById("choose-num");
const player1Btn = document.querySelector("#a");
const player2Btn = document.querySelector("#b")


//GET VALUE FROM DROPDOWN & SET VALUE IN SCORE-BOARD
choose.addEventListener('change', () => {
    // Number(choose.options[choose.selectedIndex].value);
    choose.value
});





let start = 0;
const resultR = document.getElementById("red-score");
player1Btn.addEventListener("click", () => {
    start++;
    Number(resultR.innerHTML = start);
    if (Number(start) == choose.value) {
        alert("YOU WIN!!")
        resultR.style.color = "limegreen";
    } else {
        resultR.style.color = "red";
    }
});

let startG = 0;
const result = document.getElementById("green-score");
player2Btn.addEventListener("click", () => {
    startG++;
    Number(result.innerHTML = startG);
    if (Number(startG) == choose.value) {
        //console.log("hello world")
        result.style.color = "limegreen";
    } else {
        //console.log("sorry")
        result.style.color = "red";
    }

});




//RESET BUTTON
resetBtn.addEventListener("click", () => {

    // clears every cell
    for (let i = 0; i <= 11; i++) {
        // i.innerHTML = "";
        score.innerHTML = "0";
        score.style.color = "white";
        document.querySelector("#green-score").style.color = "white";
        document.querySelector("#green-score").innerHTML = "0";
        startG = 0
        start = 0


    }

});

////////////////////////
//THINGS THE GAME NEEDS
////////////////////////

//change winning/ losing colors
//make a winning condition
