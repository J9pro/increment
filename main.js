const score = document.querySelector('.score');
const resetBtn = document.querySelector("#reset");
const numbers = document.querySelector(".nums")
const choose = document.getElementById("choose-num");


//GET VALUE FROM DROPDOWN & SET VALUE IN SCORE-BOARD
choose.addEventListener('change', () => {
    let selected = Number(choose.options[choose.selectedIndex].value);
    //console.log(selected)

});


//LOG WINS TO Score-Board
const player1Btn = document.querySelector("#a");
const player2Btn = document.querySelector("#b") //HERE!!!
//console.log(player2Btn, "player2")

let start = 0;
const resultR = document.getElementById("red-score");
player1Btn.addEventListener("click", () => {
    start++;
    start = (start <= 11) ? "0" + start : start;
    resultR.innerHTML = start;

    // score.innerHTML = "0";
});

let startG = 0;
const result = document.getElementById("green-score");
player2Btn.addEventListener("click", () => {
    startG++;
    if (startG <= 11) {
        console.log(startG)
    } else {
        console.log("nope")
    }

    Number(result.innerHTML = startG);
    //console.log(typeof +startG)

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


//CHECKS IF VALUES ARE EQUAL
// const isEqual = (objG, obj2) => {

// }