const score = document.querySelectorAll('.score');
const resetBtn = document.querySelector("#reset");
const choose = document.getElementById("choose-num");
const player1Btn = document.querySelector("#p-one");
const player2Btn = document.querySelector("#p-two");
const result1 = document.getElementById("left-score");
const result2 = document.getElementById("right-score");
let start1 = 0;
let start2 = 0;

//GET VALUE FROM DROPDOWN & SET VALUE IN SCORE-BOARD
choose.addEventListener('change', function () {
    for (let scoring of score) {
        scoring.textContent = 0;
        scoring.style.color = "white";
    }
    start2 = 0;
    start1 = 0;
    player1Btn.removeAttribute('disabled');
    player2Btn.removeAttribute('disabled');
});


player1Btn.addEventListener("click", () => {
    start1++;
    Number(result1.textContent = start1);
    if (Number(start1) == choose.value) { //they win!
        result1.style.color = "limegreen";
        result2.style.color = "red";
        player1Btn.setAttribute('disabled', '');
        player2Btn.setAttribute('disabled', '');
        start1 = 0;
        start2 = 0;
    } else {

    }


});

player2Btn.addEventListener("click", () => {
    start2++;
    Number(result2.textContent = start2);
    if (Number(start2) == choose.value) { // they win!!
        result2.style.color = "limegreen";
        result1.style.color = "red";
        player1Btn.setAttribute('disabled', '');
        player2Btn.setAttribute('disabled', '');
        start2 = 0;
        start1 = 0;

    } else {

    }

});


//RESET BUTTON
resetBtn.addEventListener("click", function () {
    // clears every cell
    for (let scoring of score) {
        scoring.textContent = 0;
        scoring.style.color = "white";
    }
    start2 = 0;
    start1 = 0;
    player1Btn.removeAttribute('disabled');
    player2Btn.removeAttribute('disabled');
});
