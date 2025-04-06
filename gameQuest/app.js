let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const computerScorePara = document.querySelector("#computerScore")

const genComputerChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd];
};

const drawGame = () => {
    // console.log("Game Draw");
    msg.innerText = "Game Draw ! Play Again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, ComputerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win!");
        msg.innerText = `You Won ! Your ${userChoice} beats ${ComputerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;

        // console.log("You Lost!");
        msg.innerText = `You Lose ! ${ComputerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // console.log("User choice = ", userChoice);
    const ComputerChoice = genComputerChoice();
    // console.log("Computer choice = ", ComputerChoice);

    if (userChoice === ComputerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = ComputerChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = ComputerChoice === "Scissors" ? false : true;
        } else {
            userWin = ComputerChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, ComputerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
        console.log("Choice was clicked:", userChoice);
        playGame(userChoice);
    });
});
