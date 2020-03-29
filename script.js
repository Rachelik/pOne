console.log("It is running!")
//Ask for Player's Name
var playerInput = document.querySelector('#player-input');
var playerName = document.querySelector('#player-name');
var resetBtn = document.querySelector('#reset-btn')
var score = document.querySelector('#score');
var playInput = document.querySelector('#play-input');
var cards = document.querySelectorAll('.cards');

var totalscores = 0;
var correctCardArr = [];
var wrongCardArr = [];
var symTyped;

//array for cards
var symbols = ["`", "-", "=", "[", "]", ";", "'", ",", ".", "/", "\u005C"];
var sSymbols = ["<", ">", "?", ":", '"', "{", "}", "|", "+", "_", ")", "(", "*", "&", "^", "%", "$", "#", "@", "!", "~"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


var cardPickTwo = [];
//function to generate two random cards.
var cardPick = function() {
    cardPickTwo = [];
    while (cardPickTwo.length < 2) {
        var genCardI = Math.floor(Math.random() * 5);
        if (cardPickTwo.indexOf(genCardI) === -1) {
            cardPickTwo.push(genCardI);
        };
    };
    console.log("Cards Index: "+cardPickTwo);
};

var symPickTwo = [];
//function to generate two random symbols.
var symPick = function() {
    symPickTwo = [];
    while (symPickTwo.length < 2) {
        var genSymI = Math.floor(Math.random() * 11);
        if (symPickTwo.indexOf(genSymI) === -1) {
            symPickTwo.push(genSymI);
        };
    };
    console.log("Symbols Index: "+symPickTwo);
};

//function to link the two random symbols and cards together.
var linkCardSym = function(cardPickArr, symPickArr) {
    for (var i = 0; i<cardPickArr.length; i++) {
        cards[cardPickArr[i]].innerText = symbols[symPickArr[i]];
    };
};

//function to enter name
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
    playerName.classList.remove('style-change');
    score.innerText = 0;
};

//When reset button is clicked, everything reset.
resetBtn.addEventListener('click', resetGame);

//function to reset playInput value as user entered.
var playInputReset = function() {
    playInput.value = "";
};

//function to remake card set of two as user guessed correctly.
var makeCardSet = function() {
    playInput.placeholder = "";
    cardPick();
    symPick();
    linkCardSym(cardPickTwo, symPickTwo);
    playInputReset();
};


var cardSetDone = function() {
    if (correctCardArr.length === 2) {
        correctCardArr = [];
        wrongCardArr = [];
        var timeoutCardSet = setTimeout(makeCardSet, 500);
    };
};

var scoreUpdate = function() {
    playInputReset();
    totalscores++;
    score.innerText = totalscores;
    cardSetDone();
}


var checkInput = function(event) {
    if (event.key === 'Enter') {
        symTyped = playInput.value
        //whatever typed will be the playInput.value in the beginning.
        if (symTyped === "start") {
            makeCardSet();
            playInputReset();
            // symTyped = playInput.value
        } else if (symTyped !== symbols[symPickTwo[0]] && symTyped !== symbols[symPickTwo[1]]) {
            if (wrongCardArr.indexOf(symTyped) === -1){
                wrongCardArr.push(symTyped);
                totalscores--;
                score.innerText = totalscores;
                playInputReset();
            } else if (wrongCardArr.indexOf(symTyped) !== -1) {
                console.log("you have entered this false value before.")
                playInputReset();
            };
        } else if (symTyped === symbols[symPickTwo[0]] || symTyped === symbols[symPickTwo[1]]) {
            if (correctCardArr.indexOf(symTyped) === -1) {
                correctCardArr.push(symTyped);
                if (symTyped === cards[cardPickTwo[0]].innerText) {
                    cards[cardPickTwo[0]].innerText = "";
                    scoreUpdate();
                } else if (symTyped === cards[cardPickTwo[1]].innerText) {
                    cards[cardPickTwo[1]].innerText = "";
                    scoreUpdate();
                };
            } else if (correctCardArr.indexOf(symTyped) !== -1) {
                console.log("you have already guess this correctly");
            };
        };
    };
};

playInput.addEventListener('keypress', checkInput);