let playerSelection;
let playerScore = 0;
let computerScore = 0;
let playerInput = document.getElementById('player-input');

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

// get the input from the player
playerInput.addEventListener('click', (e) => {return playerSelection = event.target.id});

// function getPlayerSelection(playerSelection) {
//     return playerSelection = event.target.id;
    
// }


function playRound(playerSelection, computerSelection) {
    // const player = playerSelection.toLowerCase();
    console.log(playerSelection, computerSelection)
        
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                console.log("You Win! Rock beats Scissors");
                playerScore++;
            } else if (computerSelection === "paper") {
                console.log("You lose! Rock loses to Paper");
                computerScore++;
            } else {
                console.log("It’s a tie. Try again!");
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                console.log("You Win! Paper beats Rock");
                playerScore++;
            } else if (computerSelection === "scissors") {
                console.log("You lose! Paper loses to Scissors");
                computerScore++;
            } else {
                console.log("It’s a tie. Try again!");
            }
            break;
        case "scissors":
            if (computerSelection === "paper") {
                console.log("You Win! Scissors beats Paper");
                playerScore++;
            } else if (computerSelection === "rock") {
                console.log("You lose! Scissors loses to Rock");
                computerScore++;
            } else {
                console.log("It’s a tie. Try again!");
            }
            break;
        default:
            console.log("Looks like you misspelled. Play again!");
            break;
    }
}

function game() {
        console.log(playerSelection, computerSelection)
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

        const result = countScore();
        console.log(result);
}

function countScore() {
    if (playerScore > computerScore) {
        return "Player wins!";
    } else if (playerScore < computerScore) {
        return "Computer wins!";
    } else {
        return "It's a tie. Play again!";
    }
}

game();