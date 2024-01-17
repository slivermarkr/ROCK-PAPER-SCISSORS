const playerChoices = document.querySelector('.choices');
const display = document.querySelector('.display-choice');
let chosenPick;
let computerScore = 0;
let playerScore = 0;

playerChoices.addEventListener('click',playRound)

function playRound(event){
    if(event.target.classList.contains('choose'))
   {
    chosenPick = event.target.textContent.toLowerCase();
    }
   

   let chosenText = document.createElement('p');

   chosenText.innerHTML = `<span>You picked: '${event.target.textContent}'</span>`;

   display.appendChild(chosenText);


let computerChoice = ["Rock","Paper","Scissors"];

function random(){
    return Math.floor(Math.random()*computerChoice.length);
}
let randomNumber = random();

function playComputer(){
    return computerChoice[randomNumber];
}


const computerSide = document.querySelector(".computer-side");

let printComputerChoice = document.createElement('p');
printComputerChoice.textContent = `Computer Picked: '${playComputer()}'`


computerSide.appendChild(printComputerChoice);

let computerScore = 0;
let playerScore = 0;

let result = "";
if(playComputer().toLowerCase() === chosenPick){
    result = "Tie!";
}
else if(
    (chosenPick === "rock" && playComputer().toLowerCase() === "scissors")||(
    chosenPick === "paper" && playComputer().toLowerCase() === "rock")||(
    chosenPick === "scissors" && playComputer().toLowerCase() === "paper")
){
    playerScore+=1;
    console.log("You win!");
}
else if(
( playComputer().toLowerCase() === "rock" &&     chosenPick === "scissors")||(
    playComputer().toLowerCase() === "paper" &&    chosenPick === "rock") ||(
    playComputer().toLowerCase() === "scissors" &&   chosenPick === "paper")
)
{
    computerScore += 1;
    console.log("You lost!");
}
console.log(playerScore);
console.log(computerScore);
}



