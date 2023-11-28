const rulesbtn = document.getElementById("rulesbtn");
const rules = document.getElementById("rulesbox");
const closed=document.getElementById("close");


let playerWins = 0;


rulesbtn.addEventListener("click", function(){


    currentdisplaystyle=rules.style.display;
    if(currentdisplaystyle==null || currentdisplaystyle==""){
        rules.style.display="flex";
        closed.style.display="absolute"
      



    }

    
   
    
})
closed.addEventListener("click", function(){
    rules.style.display="none"
})


const userScoreElement = document.querySelector('.page1-score .pscore h1');
const computerScoreElement = document.querySelector('.page1-score .cscore h1');
const resultElement = document.getElementById('result');
const rockButton = document.getElementById('rock-cont');
const paperButton = document.getElementById('paper-cont');
const scissorButton = document.getElementById('scissor-cont');
const playerSelectionElement = document.getElementById('player-selection');
const computerSelectionElement = document.getElementById('computer-selection');


let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "You Lost!";
    }
    
}

function updateScore(result, userChoice, computerChoice) {
    if (result === "You win!") {
        userScore++;
        resultElement.style.color="green";
    } else if (result === "You Lost!") {
        computerScore++;
        resultElement.style.color="red";
    }
    else{
        resultElement.style.color="yellow";
    }

    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;

    
    playerSelectionElement.textContent = `Your choice: ${userChoice}`;
    computerSelectionElement.textContent = `Computer's choice: ${computerChoice}`;

    resultElement.textContent = `${result} `;
    
    
}


rockButton.addEventListener('click', function() {
    const userChoice = 'rock';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    updateScore(result, userChoice, computerChoice);
});

paperButton.addEventListener('click', function() {
    const userChoice = 'paper';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    updateScore(result, userChoice, computerChoice);
});

scissorButton.addEventListener('click', function() {
    const userChoice = 'scissors';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    updateScore(result, userChoice, computerChoice);
});





  
 