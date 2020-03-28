console.log("It is running!")
//Ask for Player's Name
var playerInput = document.querySelector('#player-input');
var playerName = document.querySelector('#player-name');
var submitBtn = document.querySelector('#submit-btn');
var resetBtn = document.querySelector('#reset-btn')
var score = document.querySelector('#score');
var playInput = document.querySelector('#play-input');

var typedKey;

//array for cards
var symbols = ["`", "-", "=", "[", "]", ";", "'", ",", ".", "/", "|", "\u005C"];

//randomise index number
var indexNumGenerator = function() {
    var indexNum = Math.floor(Math.random() * 6);
    console.log(indexNum);
}
indexNumGenerator();

var enterPlayerName = function() {
    //get name and change to upper case to greet
    playerName.innerHTML = "Hello "+playerInput.value.toUpperCase();
    //hide input text-box and style away.
    playerInput.classList.add('hide');
    submitBtn.classList.add('hide');
    playerName.classList.add('style-change');
}

//When submit button is clicked, name is fixed.
submitBtn.addEventListener('click', enterPlayerName);


//reset everything
var resetGame = function() {
    playerInput.value = "";
    playerName.innerText = "Player's Name";
    playerInput.classList.remove('hide');
    submitBtn.classList.remove('hide');
    playerName.classList.remove('style-change');
    score.innerText = 0;
}
//When reset button is clicked, everything reset.
resetBtn.addEventListener('click', resetGame);

var playInputreset = function() {
    playInput.value = "";
}

var checkInput = function(event) {
    if (event.key === 'Enter') {
        typedKey = playInput.value;
        playInputreset();
        console.log(typedKey);
        if(typedKey === symbols[symbols.length-1]){
            console.log('can detect');
        } else {
            console.log('cannot detect');
        }
    }
}

playInput.addEventListener('keypress', checkInput);