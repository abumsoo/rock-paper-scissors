
// For each round,
//  Update the round counter to display the appropriate round
//  Tell the user who won the round
//  Show the most update score

function getComputerIn() {
  const compIn = Math.floor(Math.random() * 3);
  if (compIn == 0) return 'rock';
  else if (compIn == 1) return 'paper';
  else if (compIn == 2) return 'scissors';
}

function playRound() {
  // returns the winner
  // user makes a selection
  let userIn = prompt("Rock, paper, or scissors?");
  // standardize user input to lowercase
  userIn = userIn.toLowerCase();
  // if user's choice was none of the three, then error out
  if (userIn !== 'rock' && userIn !== 'paper' && userIn !== 'scissors') {
    return 'ERROR';
  }
  // computer makes a selection
  let compIn = getComputerIn();

  // compare selections
  if (userIn === compIn) return null;

  switch (userIn, compIn) {
  case ('rock', 'paper'):
    return 'computer';
  case ('rock', 'scissors'):
    return 'user';
  case ('paper', 'rock'):
    return 'user';
  case ('paper', 'scissors'):
    return 'computer';
  case ('scissors', 'rock'):
    return 'computer';
  case ('scissors', 'paper'):
    return 'user';
  default:
    return 'not posssibleeee';
  }
}

function addListeners() {
  const startButton = document.querySelector('#start-btn');
  startButton.addEventListener('click', () => {
    let winner = playRound();
    updatePoints(winner);
    displayPoints();
    if (checkGameOver()) displayGameOver();
  });
}

function updatePoints(winner) {
  if (winner === 'user') userPoints++;
  else if (winner === 'computer') compPoints++;
}

function displayPoints() {
  const p = document.querySelector('p');
  p.textContent = `You: ${userPoints} PC: ${compPoints}`
  document.body.appendChild(p);
}

function checkGameOver() {
  if (userPoints === 5 || compPoints === 5) return true;
  return false;
}

function displayGameOver() {
  const p = document.querySelector('p');
  if (userPoints === 5) {
    p.textContent += `\n You win the match!`
  } else if (compPoints === 5) {
    p.textContent += `\n Computer wins the match!`
  }
}

// Input: rock, paper, or scissors
// Output: winner of the round
//         points so far
//         current round number
//         winner of the set

function game() {
  addListeners();
}

let userPoints = 0;
let compPoints = 0;
game();
