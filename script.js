console.log("It is running!")
//Ask for Player's Name
var playerInput = document.querySelector('#player-input');
var playerName = document.querySelector('#player-name');
var resetBtn = document.querySelector('#reset-btn')
var score = document.querySelector('#score');
var playInput = document.querySelector('#play-input');
var cards = document.querySelectorAll('.cards');
var message = document.querySelector('#message');

//final scores to be accumulated here and update to score.
var totalscores = 0;

//correct card array for player correct guess. 2 input for each set. will reset every set of card.
var correctCardArr = [];

//wrong card array for play wrong guess. if 3 wrongs for each set, game over. will reset every set of card.
var wrongCardArr = [];
var symTyped;

//array for cards
var symbols = ["`", "-", "=", "[", "]", ";", "'", ",", ".", "/", "\u005C"];
var sSymbols = ["<", ">", "?", ":", '"', "{", "}", "|", "+", "_", ")", "(", "*", "&", "^", "%", "$", "#", "@", "!", "~"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

//choose level btn
var easyBtn = document.querySelector('#easy-btn');
var numbersBtn = document.querySelector('#numbers-btn');
var hardBtn = document.querySelector('#hard-btn');
var mixBtn = document.querySelector('#mix-btn');
var arrToSet = [];

//function to choose Level
var easyLevel = function() {
    arrToSet = symbols;
};

easyBtn.addEventListener('click', easyLevel);

var numbersLevel = function() {
    arrToSet = numbers;
};

numbersBtn.addEventListener('click', numbersLevel);

var hardLevel = function() {
    arrToSet = sSymbols;
};

hardBtn.addEventListener('click', hardLevel);

var mixLevel = function () {
    arrToSet = symbols.concat(numbers, sSymbols);
};

mixBtn.addEventListener('click', mixLevel);


//function to generate two random cards.
var cardPickTwo = [];
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

//function to generate two random symbols.
var symPickTwo = [];
var symPick = function(arrToSet) {
    symPickTwo = [];
    while (symPickTwo.length < 2) {
        var genSymI = Math.floor(Math.random() * arrToSet.length);
        if (symPickTwo.indexOf(genSymI) === -1) {
            symPickTwo.push(genSymI);
        };
    };
    console.log("Symbols Index: "+symPickTwo);
};

//function to link the two random symbols and cards together.
var linkCardSym = function(cardPickArr, symPickArr) {
    for (var i = 0; i<cardPickArr.length; i++) {
        cards[cardPickArr[i]].innerText = arrToSet[symPickArr[i]];
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
var resetGame = function(arrToSet) {
    arrToSet = [];
    playerInput.value = "";
    playerName.innerText = "Player's Name";
    playerInput.classList.remove('hide');
    playerName.classList.remove('style-change');
    totalscores = 0;
    score.innerText = 0;
    message.innerText = "";
    symTyped = "";
    if (playInput.className === "game-over"){
        playInput.classList.remove('game-over');
    };
    for (var i = 0; i < cards.length; i++) {
        cards[i].innerText = "";
    };
    playInput.placeholder = "Enter 'start' to begin";
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
    symPick(arrToSet);
    linkCardSym(cardPickTwo, symPickTwo);
    playInputReset();
};

// make new card set of 2 symbols once player completed. Reset correct and wrong card array.
var cardSetDone = function() {
    if (correctCardArr.length === 2) {
        correctCardArr = [];
        wrongCardArr = [];
        var timeoutCardSet = setTimeout(makeCardSet, 500);
    };
};

// if correct, add scores to totalscores then check if each set of 2 cards is done.
var scoreUpdate = function() {
    playInputReset();
    totalscores++;
    score.innerText = totalscores;
    cardSetDone();
    message.innerText = `You got it! Keep going ${playerInput.value}`
};

//check input if match or not. For Easy Symbols but did not link to the button yet.
var checkInput = function(event) {
    if (event.key === 'Enter') {
        symTyped = playInput.value
        //whatever typed will be the playInput.value in the beginning.
        if (symTyped === "start") {
            makeCardSet();
            playInputReset();
            message.innerText = "Game start now. Enter the symbols. One at a time."
            // symTyped = playInput.value
        } else if (symTyped !== arrToSet[symPickTwo[0]] && symTyped !== arrToSet[symPickTwo[1]]) {
            if (wrongCardArr.indexOf(symTyped) === -1){
                wrongCardArr.push(symTyped);
                totalscores -= 3;
                score.innerText = totalscores;
                playInputReset();
                message.innerText = "Nope, try again please."
                if(wrongCardArr.length === 3) {
                    message.innerText = "Game Over. Reset Game to play again."
                    playInput.classList.add('game-over');
                }
            } else if (wrongCardArr.indexOf(symTyped) !== -1) {
                message.innerText = "You have entered this wrong symbol before.";
                playInputReset();
            };
        } else if (symTyped === arrToSet[symPickTwo[0]] || symTyped === arrToSet[symPickTwo[1]]) {
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
                message.innerText = `Repeated input. Enter next symbol ${playerInput.value}`;
                playInputReset();
            };
        };
    };
};

playInput.addEventListener('keypress', checkInput);