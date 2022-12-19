const score = document.querySelector('.score');
const selectRounds = document.querySelector("option");
const resetBtn = document.querySelector("#reset");
const numbers = document.querySelector(".nums")

let player1Wins = 0
let player2 = 0

//GET VALUE FROM DROPDOWN & SET VALUE IN SCORE-BOARD
function getValue() {
    const choose = document.getElementById("choose-num");
    const result = document.getElementById("green-score")
    result.innerHTML = choose.value
}


//LOG WINS TO Score-Board
const player1Btn = document.querySelector("#a");
const player2Btn = document.querySelector("#b")
let start = 0;
const result = document.getElementById("green-score")

player1Btn.addEventListener("click", () => {
    if (result > 0) {
        score.innerHTML = "0"
    }
    start++;
    start = (start <= 11) ? "0" + start : start;
    result.innerHTML = start;

    score.innerHTML = "0";
});


player2Btn.addEventListener("click", () => {
    start++;
    start = (start <= 11) ? "0" + start : start;
    result.innerHTML = start;
});

// RESET BUTTON
resetBtn.addEventListener("click", () => {

    // clears every cell
    for (let i = 0; i <= 11; i++) {
        // i.innerHTML = "";
        score.innerHTML = "0";
        score.style.color = "white";
        document.querySelector("#green-score").style.color = "white";
        document.querySelector("#green-score").innerHTML = "0";


    }

});

////////////////////////
//THINGS THE GAME NEEDS
////////////////////////

//needS a place to show each player's points?

//function PLAYER LOSES

//PLAYER WINS
// if (player1Wins === numbers) {
//     console.log("perfect")
// } else {
//     console.log("nope")
// }
