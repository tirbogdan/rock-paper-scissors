"use strict";

//Global Variables
let playerScore = 0;
let computerScore = 0;
///////////////////////////

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
      ? "You won"
      : playerScore < computerScore
      ? "You lost"
      : "It was a draw";
  const scoreboard = document.querySelector(".scoreboard");
  scoreboard.textContent = `The score was: Player (${playerScore}) - Computer (${computerScore})\n${matchResult}`;
}

function playRound(playerOption) {
  const result = getRoundResult(playerOption, getComputerOption());
  updateScore(result);
  alert(result);
}

function game() {
  const options = document.querySelectorAll(".options");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const playerOption = option.dataset.option;
      playRound(playerOption);
    });
  });
}

const startGame = document.querySelector("#start-game");
startGame.addEventListener("click", game);
