let playerSelection;
let playerScore = 0;
let computerScore = 0;
let resultInfo = "";
let resultMessage = "";
let playerInput = document.getElementById('player-input');
let playerOption = document.getElementById('player-option');
let playerDisplayedScore = document.getElementById('player-score');
let computerOption = document.getElementById('computer-option');
let computerDisplayedScore = document.getElementById('computer-score');
let roundInfo = document.querySelector(".round-info");
let roundMessage = document.querySelector(".round-message")
let replayButton = document.querySelector(".replay-button")

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function getPlayerChoice(event) {
    const clickedElement = event.target.closest('.card');
    if (clickedElement) {
        playerSelection = clickedElement.id;
    }
    game();
};

function updatePlayerOption(option) {
    playerOption.innerHTML = `<i class="far fa-hand-${option}"></i>`;
}

function updatePlayerScore(score) {
    playerDisplayedScore.textContent = `Player: ${score}`;
}

function updateComputerOption(option) {
    computerOption.innerHTML = `<i class="far fa-hand-${option}"></i>`;
}

function updateComputerScore(score) {
    computerDisplayedScore.textContent = `Computer: ${score}`;;
}

function updateRoundMessage(info, message) {
    roundInfo.textContent = info;
    roundMessage.textContent = message;
}


function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                playerScore++;
                resultInfo = "You Win!"; 
                resultMessage = "Rock beats Scissors";
            } else if (computerSelection === "paper") {
                computerScore++;
                resultInfo = "You lose!"; 
                resultMessage = "Rock loses to Paper";                
            } else {
                resultInfo = "It’s a tie"; 
                resultMessage = "Try again!";     
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                playerScore++;
                resultInfo = "You Win!"; 
                resultMessage = "Paper beats Rock";
            } else if (computerSelection === "scissors") {
                computerScore++;
                resultInfo = "You lose!"; 
                resultMessage = "Paper loses to Scissors";   
            } else {
                resultInfo = "It’s a tie"; 
                resultMessage = "Try again!";     
            }
            break;
        case "scissors":
            if (computerSelection === "paper") {
                playerScore++;
                resultInfo = "You Win!"; 
                resultMessage = "Scissors beats Paper";                
            } else if (computerSelection === "rock") {
                computerScore++;
                resultInfo = "You lose!"; 
                resultMessage = "Scissors loses to Rock";                 
            } else {
                resultInfo = "It’s a tie"; 
                resultMessage = "Try again!";     
            }
            break;
        default:
            resultInfo = "Looks like you misspelled."; 
            resultMessage = "Play again!";     
            break;
    }

    updatePlayerOption(playerSelection);
    updatePlayerScore(playerScore);
    updateComputerOption(computerSelection);
    updateComputerScore(computerScore);
    updateRoundMessage(resultInfo, resultMessage);
}

function game() {
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        countScore(playerScore, computerScore)
}

function gameOver() {
    playerScore = 0;
    computerScore = 0;
    resultInfo = "Choose your weapon to start a game";
    resultMessage = "First to score 5 points wins the game";   
    updateRoundMessage(resultInfo, resultMessage)
    updatePlayerScore(playerScore)
    updateComputerScore(computerScore);
    playerOption.innerText = "❔";
    computerOption.innerText= "❔";
    replayButton.style.display = "none";
    playerInput.addEventListener('click', getPlayerChoice);
}

function countScore(playerScore, computerScore) {
    resultMessage = '';
    const message = 
    playerScore === 5 ? "Player wins!" :
    computerScore === 5 ? "Computer wins!" : "";

    if(message){
        updateRoundMessage(message, resultMessage)
        replayButton.style.display = "inline-block";
        playerInput.removeEventListener('click', getPlayerChoice);
    }
}

playerInput.addEventListener('click', getPlayerChoice);
replayButton.addEventListener("click", gameOver);



