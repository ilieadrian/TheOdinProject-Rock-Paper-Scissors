let playerSelection
let playerScore = 0
let computerScore = 0
let computerSelection = getComputerChoice()

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)]   
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase()
    
    switch (player) {
        case "rock":
            if (computerSelection === "scissors") {
                console.log("You Win! Rock beats Scissors")
                playerScore++
            } else if (computerSelection === "paper") {
                console.log("You lose! Rock loses to Paper")
                computerScore++
            } else {
                console.log("It’s a tie. Try again!")
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                console.log("You Win! Paper beats Rock")
                playerScore++
            } else if (computerSelection === "scissors") {
                console.log("You lose! Paper loses to Scissors")
                computerScore++
            } else {
                console.log("It’s a tie. Try again!")
            }
            break;
        case "scissors":
            if (computerSelection === "paper") {
                console.log("You Win! Scissors beats Paper")
                playerScore++
            } else if (computerSelection === "rock") {
                console.log("You lose! Scissors loses to Rock")
                computerScore++
            } else {
                console.log("It’s a tie. Try again!")
            }
            break;
        default:
            console.log("Looks like you misspelled. Play again!")
            break;
    }
}

function game() {
    for(let i = 0; i < 5; i ++) {
        playerSelection = prompt('Rock, Paper or Scissors?')
        computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
    }

    const result = scoreCount();
    console.log(result);
}

function scoreCount() {
    if (playerScore > computerScore) {
        return "Player wins!";
    } else if (playerScore < computerScore) {
        return "Computer wins!";
    } else {
        return "It's a tie. Play again!";
    }
}

game()












