 function computerPlay (){
  let randChoice = Math.floor(Math.random() * 3);
  if (randChoice == 0) {
    return 'rock';
  } else if (randChoice == 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection.toLowerCase();
  if (ps == cs) {
    // tie
    return "You tied!"
  } else if (((ps == "rock") && (cs == "paper")) ||
             ((ps == "paper") && (cs == "scissors")) ||
             ((ps == "scissors") && (cs == "rock"))) {
    // computer wins
    return  `You lose! ${cs} beats ${ps}.`;
  } else {
    // player wins
    return `You win! ${ps} beats ${cs}.`;
  }
}

function game() {
  const buttons = document.querySelectorAll('button');
  let playerPoints = 0;
  let computerPoints = 0;
  buttons.forEach(button => button.addEventListener('click', () => {
    let ps = prompt("Rock, paper, or scissors? ");
    let cs = computerPlay();
    let winner = playRound(ps, cs);
    const results = document.querySelector('.results');
    if (winner == `You lose! ${cs} beats ${ps}.`) {
      computerPoints++;
    } else if (winner == `You win! ${ps} beats ${cs}.`) {
      playerPoints++;
    }
    results.innerText = `${winner} \n Your points: ${playerPoints}. \n Opponents points: ${computerPoints}.`;
    if (playerPoints == 5) {
      results.innerText += "\n Victory!";
    } else if (computerPoints == 5) {
      results.innerText += "\n Game over. You lose.";
    }
    document.body.appendChild(results)
  }));
}

game();
