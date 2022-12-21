const score = document.querySelector('.score');
const resetBtn = document.querySelector("#reset");
const choose = document.getElementById("choose-num");
const player1Btn = document.querySelector("#a");
const player2Btn = document.querySelector("#b")


//GET VALUE FROM DROPDOWN & SET VALUE IN SCORE-BOARD
choose.addEventListener('change', function () {
    // Number(choose.options[choose.selectedIndex].value);
    choose.value
    score.innerHTML = "0";
    score.style.color = "white";
    document.querySelector("#green-score").style.color = "white";
    document.querySelector("#green-score").innerHTML = "0";
    startG = 0
    start = 0
    // clearedBtn();
});


let start = 0;
const resultR = document.getElementById("red-score");
player1Btn.addEventListener("click", () => {
    start++;
    Number(resultR.innerHTML = start);
    if (Number(start) == choose.value) {
        resultR.style.color = "limegreen";
        console.log("YOU WIN!!")
        start = 0;
        startG = 0;
        result.style.color = "red";

    } else if (Number(start) < choose.value) {
        resultR.style.color = "white";

    }
    //  else {
    //     resultR.style.color = "red";
    // }
});

let startG = 0;
const result = document.getElementById("green-score");
player2Btn.addEventListener("click", () => {
    startG++;
    Number(result.innerHTML = startG);
    if (Number(startG) == choose.value) {
        console.log("hello world")
        result.style.color = "limegreen";
        startG = 0;
        start = 0;
        resultR.style.color = "red";
    } else if (Number(startG) < choose.value) {
        //console.log("sorry")
        result.style.color = "white";

    }
    // else {
    //     //console.log("sorry")
    //     result.style.color = "red";

    // }

});



//RESET BUTTON
resetBtn.addEventListener("click", function () {
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

//when player wins- you should not be able to continue incrementing

//whenever you change the selected target- everything should reset.

//clean up IDs in html

//increase the width of button's size