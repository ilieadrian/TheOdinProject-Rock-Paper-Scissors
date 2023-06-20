let computerChoice;

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"]
    computerChoice = options[Math.floor(Math.random()*options.length)]   
}

getComputerChoice()
console.log("Computer choice is: " + computerChoice)