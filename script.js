const playerSelection = "rock";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)]   
}

function playRound(playerSelection, computerSelection) {
    //  Rock beats scissors and loses to paper
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        console.log ("You Win! Rock beats Scissors")
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        console.log ("You lose! Rock loses to Paper")
    }  //  Paper beats rock, but loses to scissors
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        console.log ("You Win! Paper beats Rock")
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        console.log ("You lose! Paper loses to Scissors")
    } //  Scissors beat paper but loses to rock.
    else if  (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        console.log ("You Win! Scissors beats Paper")
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        console.log ("You lose! Scissors loses to Rock")
    }   //The same option or typing error
    else if (playerSelection.toLowerCase() === computerSelection){
        console.log("It’s a tie. Play again!")
    } else {
        console.log("Looks like you misspeled. Play again!")
    }
    return 
}   













