function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    let random = Math.floor(Math.random()*3);
    return choices[random];
}

function playRound(playerSelection,computerSelection){
    
    playerSelection = playerSelection.toLowerCase();
    let resultText = "";

    if(playerSelection === computerSelection){
        
        resultText = "Its a TIE!";
        return resultText;
    }

    if((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")){

        resultText = `You Win! '${playerSelection.toUpperCase()}' beats '${computerSelection.toUpperCase()}'` ;
        return resultText;
    }
    if((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")){

        resultText = `You lose, '${computerSelection.toUpperCase()}' beats '${playerSelection.toUpperCase()}'`
        return resultText;
    }
}