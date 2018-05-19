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
var guesses_Left = 0;
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
guesses_Left = 8;
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
pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

//create placeholders for pickedWord
for(var i = 0; i < pickedWord.length; i++){
    if(pickedWord[i] === ' '){
        pickedWordPlaceholderArr.push(' ');
    } else {
        pickedWordPlaceholderArr.push('_');
    }
}

//write info to original variables (DOMs)
guessesLeft.textContent = guesses_Left;
placeholders.textContent = pickedWordPlaceholderArr.join('');
guessedLetters.textContent = incorrectLetterBank;
}



//letterguess function
function letterGuess(letter) {
    console.log(letter);

    if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1) {

        guessedLetterBank.push(letter);
        console.log(guessedLetterBank);
        for (var i=0; i<pickedWord.length; i++){
            if(pickedWord[i].toLowerCase() == letter.toLowerCase()) {
                //if match, swap letters
                pickedWordPlaceholderArr[i] = pickedWord[i];
            }
        }
        if (pickedWordPlaceholderArr.includes(letter) === false){
            incorrectLetterBank.push(letter);
            guesses_Left--;
            guessesLeft.textContent = guesses_Left;
        }

        if (guesses_Left < 1){
            alert("you lose");
            losses++
            gameRunning = false;

            lossesDom.textContent = losses;

        }
        if (pickedWord === pickedWordPlaceholderArr.join("")){
            alert("you win")
            wins++;
            gameRunning = false;
            winsDom.textContent = wins;
        }

        guessedLetters.textContent = incorrectLetterBank.join("");

        placeholders.textContent = pickedWordPlaceholderArr.join('');
    }
    else {
            if(gameRunning == false){
                alert("Press new game button")
            } else {
                alert("You already guessed this letter, try again!")
            }
        }

    }
 
    newGameButton.addEventListener("click", newGame);


    document.onkeyup = function (event) {
        
            letterGuess(event.key);
        
    }


