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

var checkInput = function(event) {
    if (event.key === 'Enter') {
        if(playInput.value === "start") {
            genCardSet();
        } else if (genSymIArr.length !== 0) {
            typedKey = playInput.value;
            for (var i=0; i<genSymIArr.length; i++) {
                if (typedKey === symbols[genSymIArr[i]]) {
                    cards[genCardIArr[i]].innerText = "";
                    genSymIArr.splice(i, 1);
                    genCardIArr.splice(i, 1);
                    playInputReset();
                    totalscores++;
                    score.innerText = totalscores;
                    if (genSymIArr.length === 0) {
                        genCardSet();
                    }
                } else {
                    console.log('incorrect. try again.');
                    playInputReset();
                };
            };
        };
    };
};

playInput.addEventListener('keypress', checkInput);