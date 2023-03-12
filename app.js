// For storing and displaying user/computer selections
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const you = document.getElementById("you");
const opponent = document.getElementById("opponent");

// For storing and displaying user/computer results and restart
const result = document.getElementById("result");
const record = document.getElementById("record");
const play_again = document.getElementById("play_again");

// Computer Selection Logic
function randNum(max_num){
  return Math.floor(Math.random() * max_num);
}

function generate_random_move(){
    let valid_moves = ['rock', 'paper', 'scissors'];
    return valid_moves[randNum(valid_moves.length)];
}

// Player Selection Logic
rock.addEventListener('click', () => {
    player_move = 'rock';
    compare_to_computer();
})

paper.addEventListener('click', () => {
    player_move = 'paper';
    compare_to_computer();
})

scissors.addEventListener('click', () => {
    player_move = 'scissors';
    compare_to_computer();
})

// For score and selection tracking
let player_score = 0;
let opponent_score = 0;
let player_move = "";
let opponent_move = "";

updateStats("Rock, Paper, Scissors... Shoot!");

function compare_to_computer() {
    opponent_move =  generate_random_move();

    if (player_move === opponent_move) {
        winner = "nobody";
    } else {
      if (player_move === "rock") {
          if (opponent_move === "scissors") {
            winner = "player";
          }
          else {
            winner = "computer";
          }
     } else if (player_move === "paper") {
          if (opponent_move === "rock") {
            winner = "player";
          }
          else {
            winner = "computer";
          }
     } else if (player_move === "scissors") {
          if (opponent_move === "paper") {
            winner = "player";
          }
          else {
            winner = "computer";
          }
     }
    }

    if (winner === "nobody") {
       updateStats("Tie!");
    } else if (winner === "player") {
        player_score += 1;
        updateStats("Player Wins!");
    } else {
        opponent_score += 1;
        updateStats("Computer Wins!");
    }

    if (player_score >= 5 || opponent_score >= 5) {
      if (player_score != opponent_score) {
        if (player_score > opponent_score) {
        let victory_variation = [
          'You\'re #1! In this minimalistic app, anyway!',
          'You beat a simplistic AI at a goofy game! Wow!',
          'Congratulations! You have won!',
          'Someone had to win, and it ended up being you!'
        ];
          updateStats(victory_variation[randNum(victory_variation.length)]);
        } else {
        let failure_variation = [
          'Wanna try again?',
          'Well... at least you tried.',
          'You lost. That can\'t feel good!',
          'Someone had to win, and it ended up being the AI.'
        ];
          updateStats(failure_variation[randNum(failure_variation.length)]);
        }
        toggleUI();
      }
    }
}

play_again.addEventListener('click', resetStats);

function resetStats(){
  player_score = 0;
  opponent_score = 0;
  player_move = "";
  opponent_move = "";
  updateStats("Rock, Paper, Scissors... Shoot!");
  toggleUI();
}

/* Input Logic */
function updateStats(result_text, record_score = [player_score, opponent_score], move_text = [player_move, opponent_move]) {
  result.textContent = result_text;
  record.textContent = `You: ${record_score[0]}. Computer: ${record_score[1]}`;
  you.textContent = `Your move: ${move_text[0]}`;
  opponent.textContent = `Computer's move: ${move_text[1]}`;
}

function toggleUI() {
  play_again.classList.toggle('none');
  rock.classList.toggle('none');
  paper.classList.toggle('none');
  scissors.classList.toggle('none');
}