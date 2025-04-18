let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let newContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let movesCount = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 === true) {
            box.innerText = "0";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        movesCount++;
        checkWinner();
    });
});

const resetGame = () => {
    turn0 = true;
    movesCount = 0;
    enableBoxes();
    newContainer.classList.add("hide");


}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showDraw = () => {
    msg.innerText = `It's a Draw!`;
    newContainer.classList.remove("hide");
};

const showWinner = (winner) => {
    console.log("Winner is", winner);
    msg.innerText = `Congratulations ! Winner is ${winner}`;
    newContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                showWinner(posVal1);
                return;
            }
        }

    }
    if (movesCount === 9) {
        showDraw();
    }

};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);