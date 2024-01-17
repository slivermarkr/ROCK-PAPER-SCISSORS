
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

        resultText = `You win! '${playerSelection.toUpperCase()}' beats '${computerSelection.toUpperCase()}'` ;
        return resultText;
    }
    if((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")){

        resultText = `You lose, '${computerSelection.toUpperCase()}' beats '${playerSelection.toUpperCase()}'`
        return resultText;
    }
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    let getPlayerChoice;
    while(playerScore < 5 && computerScore < 5)
    {
    getPlayerChoice  = prompt("Choose: Rock, Paper, Scissors");
    let roundResult = playRound(getPlayerChoice,getComputerChoice());
    console.log(roundResult)
    let lookForWin = "You win!";
    let lookForLose = "You lose";
    if(roundResult.includes(lookForWin)){
        playerScore++;
    }
    else if( roundResult.includes(lookForLose)){
        computerScore++
    }
    console.log(playerScore);
    console.log(computerScore);
    }
    if(playerScore === 5){
        console.log("Congratulations, you won!")
    }else if(computerScore === 5){
        console.log("Sorry Loser");
    }
}