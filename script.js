console.log("It is running!")
//Ask for Player's Name
var playerInput = document.querySelector('#player-input');
var playerName = document.querySelector('#player-name');
var resetBtn = document.querySelector('#reset-btn')
var score = document.querySelector('#score');
var playInput = document.querySelector('#play-input');
var cards = document.querySelectorAll('.cards');


var typedKey;
var totalscores = 0;


//array for cards
var symbols = ["`", "-", "=", "[", "]", ";", "'", ",", ".", "/", "|", "\u005C"];


//generate two random cards.
var genCardIArr = [];
var genCards = function() {
    while (genCardIArr.length < 2) {
        var genCardI = Math.floor(Math.random() * 5);
        if (genCardIArr.indexOf(genCardI) === -1) {
            genCardIArr.push(genCardI);
        };
    };
    console.log("Cards Index: "+genCardIArr);
};


//generate two random symbols.
var genSymIArr = [];
var genSyms = function() {
    while (genSymIArr.length < 2) {
        var genSymI = Math.floor(Math.random() * 12);
        if (genSymIArr.indexOf(genSymI) === -1) {
            genSymIArr.push(genSymI);
        };
    };
    console.log("Symbols Index: "+genSymIArr);
};


var genCardsSyms = function(cardsIArr, symsIArr) {
    for (var i = 0; i<cardsIArr.length; i++) {
        cards[cardsIArr[i]].innerText = symbols[symsIArr[i]];
    };
};


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

var playInputReset = function() {
    playInput.value = "";
};

var genCardSet = function() {
    playInput.placeholder = "";
    genCards();
    genSyms();
    genCardsSyms(genCardIArr, genSymIArr);
    playInputReset();
    gameStatus = "please type in"
};


var typedCorrectKeyArr = [];
var typedWrongKeyArr = [];
var checkInput = function(event) {
    if (event.key === 'Enter') {
        typedKey = playInput.value;
        if (typedKey === "start") {
            genCardSet();
        } else if (symbols.indexOf(typedKey) === -1) {
            console.log("wrong. please try again");

            playInputReset();
        } else {
            while(typedCorrectKeyArr.length < 2) {
                var typedKeySymI = symbols.indexOf(typedKey);
                var typedKeyCardI = genSymIArr.indexOf(typedKeySymI);
                cards[typedKeyCardI].innerText = " ";
                playInputReset();
                if (typedCorrectKeyArr.indexOf(typedKeyCardI) === -1) {
                    console.log("correct");
                    typedCorrectKeyArr.push(typedKeySymI);
                } else {
                    console.log("You have already typed that.");
                };
            };
        };
    };
};

playInput.addEventListener('keypress', checkInput);

            // totalscores++;
            // score.innerText = totalscores;