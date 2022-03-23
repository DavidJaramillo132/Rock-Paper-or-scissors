const computerChoiceDisplay= document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let userChoice
let computerChoice 
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();

}));


const generateComputerChoice = () =>  {
    const randomNumber = Math.floor(Math.random() * 3 + 1)
    if(randomNumber === 1){
        computerChoice = "Rock";
    }
    if(randomNumber === 2){
        computerChoice = "Paper";
    }
    if (randomNumber === 3) {
        computerChoice = "Scissors";
    }

    computerChoiceDisplay.innerHTML = computerChoice;
};

const getResult = () =>{
    if (computerChoice === userChoice) {
        result = "It's a draw";
    }
    if (computerChoice === "Rock" && userChoice === "Paper") {
        result = "You win";
    }
    if (computerChoice === "Rock" && userChoice === "Scissors") {
        result = "You lose";
    }
    if (computerChoice === "Paper" && userChoice === "Rock") {
        result = "You lose";
    }
    if (computerChoice === "Paper" && userChoice === "Scissors") {
        result = "You win";
    }
    if (computerChoice === "Scissors" && userChoice === "Rock") {
        result = "You win";
    }
    if (computerChoice === "Scissors" && userChoice === "Paper") {
        result = "You lose";
    }

    if(result == "You win"){
        resultDisplay.style.color="#336B87";
        resultDisplay.innerHTML = result;

    }else if(result =="You lose"){
        resultDisplay.style.color="#763626";
        resultDisplay.innerHTML = result;
    }else{
        resultDisplay.style.color="#2a3132";
        resultDisplay.innerHTML = result;

    };



}