"use strict";

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomOption = Math.floor(Math.random() * 3);
  return options[randomOption];
}

// Decides Who wins the round
function playRound(playerSelection, computerSelection) {
  const clearPlayerSelection = playerSelection.toLowerCase();

  if (clearPlayerSelection === computerSelection) return "It was a draw!";

  switch (clearPlayerSelection) {
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

function game() {
  alert(
    "A new game began!\nThere are 5 rounds.\nYou have to type one of the 'Rock', 'Paper' Or 'Scissors'.\nGood luck!"
  );

  // Initialize variables
  let round = 1;
  let playerScore = 0;
  let computerScore = 0;

  for (round; round <= 5; round++) {
    const playerOption = prompt(
      `Round ${round}\nType your option.(Rock/Paper/Scissors)`
    );
    const roundResult = playRound(playerOption, getComputerChoice());
    alert(roundResult);

    //Changes the score if someone won or resets the round if there is an invalid input
    if (
      roundResult ===
      "Invalid option! Please select one of Rock / Paper / Scissors"
    )
      round--;
    if (roundResult === "You won!") playerScore++;
    if (roundResult === "You lost!") computerScore++;
  }

  //Display the results of the match based on the score
  const matchResult =
    playerScore > computerScore
      ? "You won"
      : playerScore < computerScore
      ? "You lost"
      : "It was a draw";
  alert(
    `The score was: Player (${playerScore}) - Computer (${computerScore})\n${matchResult}`
  );
}

game();
