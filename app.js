// logic for rock, paper, scissors program

var choices = ['Rock', 'Paper', 'Scissors'];
var winners = [];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// starts a 5-round game of rock, paper, scissors
function game() {
    for (let i = 1; i <= 5; i++){
        playRound(i);
    }
    logWins(); // print out overall results for all 5 rounds
}  

// logic for playing a round, checking if player or computer won the round, and logging individual round results
function playRound(round) {
    var playerSelection = getPlayerChoice();
    var computerSelection = getComputerChoice();

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();;
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();;
    
    var winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);

    logRound(playerSelection, computerSelection, winner, round);
}

// prompts user for rock, paper, or scissors and validation checks data
function getPlayerChoice() {
    let input = prompt('Please choose one of the following: Rock, Paper, Scissors');
    
    while (input == null) {
        input = prompt('Please choose one of the following: Rock, Paper, Scissors');
    }

    let check = validateInput(input);
    
    while (check == false) {
        input = prompt('Invalid answer. Please choose one of the following: Rock, Paper, Scissors.');
        check = validateInput(input);
    }

    return input;
}

function validateInput(choice) {
    choice = choice.toLowerCase();
    return choices.includes(choice.charAt(0).toUpperCase() + choice.slice(1));
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return 'Tie';
    } else if
        ((choiceP === 'Rock' && choiceC === 'Scissors') ||
        (choiceP === 'Paper' && choiceC === 'Rock') ||
        (choiceP === 'Scissors' && choiceC === 'Paper'))
    {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Overall Results (5 Rounds):');
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Tied Rounds:', ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round #:', round);
    console.log('Player Selected:', playerChoice);
    console.log('Computer Selected:', computerChoice);
    
    if (winner == 'Player' || winner == 'Computer') {
        console.log(winner, 'won the round!');
    } else {
        console.log("The round is a tie!");
    }

    console.log('---------------------------');
}