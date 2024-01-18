
function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    let random = Math.floor(Math.random()*3);
    return choices[random];
}

function playRound(playerSelection,computerSelection,){
    
    const displayComputerChoice = document.querySelector(".computer-choice");
    
   displayComputerChoice.textContent = `Computer chose: '${computerSelection.toUpperCase()}'`;
    
 
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
        playerScore++;
        return resultText;
    }
    if((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")){

        resultText = `You lose, '${computerSelection.toUpperCase()}' beats '${playerSelection.toUpperCase()}'`
        computerScore++
        return resultText;
    }

}



let playerScore = 0;
let computerScore = 0;

function game(e){
    if(!e.target.classList.contains('button')) return;
    e.target.classList.add('clicked');
    const counterContainer = document.querySelector('.counter-container');
    const resultDisplay = document.querySelector('.result-text');

    let getPlayerChoice  = e.target.id;
    let roundResult = playRound(getPlayerChoice,getComputerChoice());
    
    counterContainer.textContent = ` You Score: ${playerScore} || Computer Score: ${computerScore}`;
    resultDisplay.textContent = `${roundResult}`;

    let winner = "";
    const btns = document.querySelector('.buttons');
    let winOrLose = document.querySelector('.winlose');
    const headerChange = document.querySelector('.text');

    if(playerScore === 5){

        winOrLose.textContent = "You won the Game! Press F5 to play again";
        btns.style.display = "none";
        winOrLose.style.color = 'green';
        winOrLose.style.fontSize = '40px'
        headerChange.firstElementChild.textContent = "WINNER!"
        headerChange.firstElementChild.style.backgroundColor = "green";
    } else if (computerScore === 5){

        btns.style.display = "none";
        winOrLose.textContent = "You lose the game, Press F5 to play again";
        winOrLose.style.color = 'red';
        winOrLose.style.fontSize = '40px';
        headerChange.firstElementChild.textContent = "LOSER!"
        headerChange.firstElementChild.style.backgroundColor = "red"
    }
    
}



window.addEventListener('click',game);

function logText(e){
    if(!e.target.classList.contains('button')) return;
    console.log(e.target);
}
function removeHighlight(event){
    if(!event.target.classList.contains('button')) return;
    const currentButton = document.querySelector(`button[data-type=${event.target.id}]`);

     currentButton.classList.remove('clicked');
    
}

window.addEventListener('mouseout',removeHighlight)