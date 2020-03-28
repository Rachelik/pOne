console.log("It is running!")
//Ask for Player's Name
var playerInput = document.querySelector('#player-input');
var playerName = document.querySelector('#player-name');
var resetBtn = document.querySelector('#reset-btn')
var score = document.querySelector('#score');
var playInput = document.querySelector('#play-input');
var cards = document.querySelectorAll('.cards');

var typedKey;

//array for cards
var symbols = ["`", "-", "=", "[", "]", ";", "'", ",", ".", "/", "|", "\u005C"];

//randomise index number for cards position
var indexCardNumGenerator = function() {
    return Math.floor(Math.random() * 5);
};

var indexSymNumGenerator = function() {
    return indexSymNum = Math.floor(Math.random() * 11);
};

var generateCardsSym = function() {
    var generatedCardNumIOne = indexCardNumGenerator();
    var generatedCardNumITwo = indexCardNumGenerator();
    var generatedSymNumIOne = indexSymNumGenerator();
    var generatedSymNumITwo = indexSymNumGenerator();

//The card would jumped down on its own after symbols are generated on cards.
    if (generatedCardNumIOne !== generatedCardNumITwo && generatedSymNumIOne !== generatedSymNumITwo) {
        cards[generatedCardNumIOne].innerText = symbols[generatedSymNumITwo];
        cards[generatedCardNumITwo].innerText = symbols[generatedSymNumIOne];
    } else {
        generatedCardNumITwo = indexCardNumGenerator();
        generatedSymNumITwo = indexSymNumGenerator();
        cards[generatedCardNumIOne].innerText = symbols[generatedSymNumITwo];
        cards[generatedCardNumITwo].innerText = symbols[generatedSymNumIOne];
    };
};
generateCardsSym();

var enterPlayerName = function(event) {
    if (event.key === 'Enter') {
    //get name and change to upper case to greet
    playerName.innerHTML = "Hello "+playerInput.value.toUpperCase();
    //hide input text-box and style away.
    playerInput.classList.add('hide');
    playerName.classList.add('style-change');
    };
};

//When Enter Key is clicked, name is fixed.
playerInput.addEventListener('keypress', enterPlayerName);


//reset everything
var resetGame = function() {
    playerInput.value = "";
    playerName.innerText = "Player's Name";
    playerInput.classList.remove('hide');
    submitBtn.classList.remove('hide');
    playerName.classList.remove('style-change');
    score.innerText = 0;
};
//When reset button is clicked, everything reset.
resetBtn.addEventListener('click', resetGame);

var playInputreset = function() {
    playInput.value = "";
};

var checkInput = function(event) {
    if (event.key === 'Enter') {
        typedKey = playInput.value;
        playInputreset();
        console.log(typedKey);
        if(typedKey === symbols[symbols.length-1]){
            console.log('can detect');
        } else {
            console.log('cannot detect');
        };
    };
};

playInput.addEventListener('keypress', checkInput);