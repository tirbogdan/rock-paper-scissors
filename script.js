"use strict";

//Global Variables
let playerScore = 0;
let computerScore = 0;
const options = document.querySelectorAll(".options");
const startGameButton = document.querySelector("#start-game");
const resetGameButton = document.querySelector("#reset-game");
const scoreboard = document.querySelector(".scoreboard");
const finalScore = document.querySelector(".final-score");

///////////////////////////

// Chose a random option for the computer
function getComputerOption() {
  const options = ["rock", "paper", "scissors"];
  const randomOption = Math.floor(Math.random() * 3);
  return options[randomOption];
}

// Decides Who wins the round
function getRoundResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "It was a draw!";

  switch (playerSelection) {
    case "rock":
      return computerSelection === "paper" ? "You lost!" : "You won!";

    case "paper":
      return computerSelection === "scissors" ? "You lost!" : "You won!";

    case "scissors":
      return computerSelection === "rock" ? "You lost!" : "You won!";

    default:
      return "Invalid option! Please select one of Rock / Paper / Scissors";
  }
}

function updateScore(roundResult) {
  if (roundResult === "You won!") playerScore++;
  if (roundResult === "You lost!") computerScore++;
}

function displayResult() {
  const matchResult =
    playerScore > computerScore
      ? "You won!"
      : playerScore < computerScore
      ? "You lost!"
      : "It was a draw!";
  finalScore.innerHTML = `The score was:<br>Player (${playerScore}) - Computer (${computerScore})<br>${matchResult}`;
}

//Decides the winner of the round
function playRound(playerOption) {
  const result = getRoundResult(playerOption, getComputerOption());
  updateScore(result);
  scoreboard.innerHTML = `${result}<br>Score: ${playerScore} : ${computerScore}`;
}

function deactivateButtons() {
  options.forEach((option) => {
    option.removeEventListener("click", play);
  });
}

//Starts the rounds if the game isn't finished yet
function play() {
  if (playerScore > 4 || computerScore > 4) {
    deactivateButtons();
    displayResult();
  }

  const playerOption = this.dataset.option;
  playRound(playerOption);
}
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  scoreboard.textContent = `Score: ${playerScore} : ${computerScore}`;
  finalScore.textContent = "";
  game();
}

function game() {
  startGameButton.removeEventListener("click", game);

  scoreboard.textContent = `Score: ${playerScore} : ${computerScore}`;

  options.forEach((option) => {
    option.addEventListener("click", play);
  });
}

startGameButton.addEventListener("click", game);
resetGameButton.addEventListener("click", resetGame);
