//grabbing elements by ids
var newGameButton = document.getElementById('new-game-button');
var placeholders =document.getElementById('placeholders');
var guessedLetters = document.getElementById('guessed-letters');
var guessesLeft = document.getElementById('guesses-left');
var winsDom = document.getElementById('wins');
var lossesDom = document.getElementById('losses');

console.log(newGameButton);
console.log(placeholders);
console.log(guessedLetters);
console.log(guessesLeft);
console.log(wins);
console.log(losses);


//creating variables for game
var wordBank = ["Tuxedo Cat", "Pitbull", "Betta Fish", "Syrian Hamster", 
"Parakeet", "Chihuaha", "German Shepard"];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var gameRunning = false; 
var pickedWord = '';
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];
console.log("---------")
console.log(wordBank);
console.log(wins);
console.log(losses);
console.log(guessesLeft);
console.log(gameRunning);
console.log(pickedWord);
console.log(pickedWordPlaceholderArr);
console.log(guessedLetterBank);
console.log(incorrectLetterBank);

console.log("-----------");
//newGame function

function newGame() {

//reset game info

gameRunning = true;
guessesLeft = 8;
guessedLetterBank = [];
incorrectLetterBank = [];
pickedWordPlaceholderArr = [];

console.log(newGame);
console.log(gameRunning);
console.log(guessesLeft);
console.log(guessedLetterBank);
console.log(incorrectLetterBank);
console.log(pickedWordPlaceholderArr);
//pick new word
pickedWord = wordBank[Math.floor(math.random() * wordBank.length)];

//create placeholders for pickedWord
for(var i = 0; i < pickedWord.length; i++){
    if(pickedWord[i] === ' '){
        pickedWordPlaceholderArr.push(' ');
    } else {
        pickedWordPlaceholderArr.push('_');
    }
}

//write info to original variables (DOMs)
guessesLeft.textContent = guessesLeft;
placeholders.textContent = pickedWordPlaceholderArr.join('');
guessedLetters.textContent = incorrectLetterBank;
}


//letterguess function
function letterGuess(letter) {
    console.log(letter);

    if (gamerunning === true && guessedLetterBank.indexOf(letter) === -1) {
    }else {
            if(!gameRunning){
                alert("Press new game button")
            } else {
                alert("You already guessed this letter, try again!")
            }
        }
        //Run Game Logic
        guessedLetterBank.push(letter);
        //check if guessed letter is in my words
        for (var i=0; i<wordBank.length; i++){
            if(pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                //if match, swap letters
                pickedWordPlaceholderArr[i] = pickedWord[i];
            }
        }

        placeholders.textContent = pickedWordPlaceholderArr.join('')
        //Event Listener

newGameButton.addEventListener('click', newGame);
    }










