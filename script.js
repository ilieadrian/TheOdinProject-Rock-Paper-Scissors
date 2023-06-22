let playerSelection
let score = 0
const computerSelection = getComputerChoice()

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
            } else if (computerSelection === "paper") {
                console.log("You lose! Rock loses to Paper")
            } else {
                console.log("It’s a tie. Play again!")
            }
            break;
        case "paper":
            if (computerSelection === "rock") {
                console.log("You Win! Paper beats Rock")
            } else if (computerSelection === "scissors") {
                console.log("You lose! Paper loses to Scissors")
            } else {
                console.log("It’s a tie. Play again!")
            }
            break;
        case "scissors":
            if (computerSelection === "paper") {
                console.log("You Win! Scissors beats Paper")
            } else if (computerSelection === "rock") {
                console.log("You lose! Scissors loses to Rock")
            } else {
                console.log("It’s a tie. Play again!")
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
        playRound(playerSelection, computerSelection)
    }
    
}

function scoreCount(){

}


game()












