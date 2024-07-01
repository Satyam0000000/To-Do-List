const button = document.getElementById('subt');
const guess_field = document.getElementById('box');

//making random number
let random_number = parseInt(Math.floor(Math.random() * 100) + 1);

//array for storing guesses
let prevGuess = [];

//total guesses
let tot_guess=1

//selcting the prev guess
let prev_guess = document.getElementById('prev_guess');

//displaying reamining guesses
let rem_guesses = document.getElementById('rem_guess');
rem_guesses.innerHTML = 10;

//displaying message
let message = document.querySelector('#message');

//creating new element for making start new game button after every game ends
const p = document.createElement('p');

console.log(random_number)
let playGame = 'true'
if(playGame){
button.addEventListener('click',function(e){
  e.preventDefault();
  const guessed_num = parseInt(guess_field.value);
  console.log(guessed_num)
  valid_guess(guessed_num)
})
}

function valid_guess(guess){
  console.log("insile valid guess")
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else{
    if(tot_guess===10){
      display_prevGuess(guess)
      displayMessage(`Game Over! The number was ${random_number}`)
      endGame()
    }
    else{
      display_prevGuess(guess)
      check_guess(guess)
    }
  }
}
function check_guess(guessed_num){
    console.log("inside check")
    if (guessed_num === random_number) {
      displayMessage(`You guessed it right`);
      endGame();
    } else if (guessed_num < random_number) {
      displayMessage(`Number is low`);
    } else if (guessed_num > random_number) {
      displayMessage(`Number is High`);
    }      
    }

function display_prevGuess(guss){
  console.log("inside display")
  guess_field.value = ''
  prev_guess.innerHTML +=  `${guss} , `
  tot_guess++
  rem_guesses.innerHTML = `${10-tot_guess}`
}

function displayMessage(mssg){
  message.innerHTML = mssg
}

function endGame(){
  guess_field.value = ''
  guess_field.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = '<h2 id="newGame">Start New Game</h2>'
  message.appendChild(p)
  playGame = false;
  newGame();
}

function newGame(){
  const newGameButton = document.getElementById('newGame');
  newGameButton.addEventListener('click', function (e) {
    random_number = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    tot_guess = 1;
    prev_guess.innerHTML = '';
    rem_guesses.innerHTML = `${11 - tot_guess} `;
    guess_field.removeAttribute('disabled');
    message.removeChild(p);

    playGame = true;
  });
}