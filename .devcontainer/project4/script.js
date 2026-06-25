const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.gusses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuss = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number more than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuss.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage('Game Over. Random number was ${randomNumber}')
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('you guessed it right')
        endgame()
    }
    else if (guess < randomNumber) {
        displayGuess('number is too low')
    }
    else if (guess > randomNumber){
        displayMessage('number is too high')
    }

}
 
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += '${guess}'
    numGuess++;
    remaining.innerHTML = '${11 - numGuess}'
}

function displayMessage(guess) {

}
