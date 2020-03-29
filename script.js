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
var symbols = ["`", "-", "=", "[", "]", ";", "'", ",", ".", "/", "\u005C"];


//generate two random cards.
var cardPickTwo = [];
var cardPick = function() {
    while (cardPickTwo.length < 2) {
        var genCardI = Math.floor(Math.random() * 5);
        if (cardPickTwo.indexOf(genCardI) === -1) {
            cardPickTwo.push(genCardI);
        };
    };
    console.log("Cards Index: "+cardPickTwo);
};


//generate two random symbols.
var symPickTwo = [];
var symPick = function() {
    while (symPickTwo.length < 2) {
        var genSymI = Math.floor(Math.random() * 11);
        if (symPickTwo.indexOf(genSymI) === -1) {
            symPickTwo.push(genSymI);
        };
    };
    console.log("Symbols Index: "+symPickTwo);
};



var linkCardSym = function(cardPickArr, symPickArr) {
    for (var i = 0; i<cardPickArr.length; i++) {
        cards[cardPickArr[i]].innerText = symbols[symPickArr[i]];
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



var makeCardSet = function() {
    playInput.placeholder = "";
    cardPick();
    symPick();
    linkCardSym(cardPickTwo, symPickTwo);
    playInputReset();
};


var correctCardArr = [];
var wrongCardArr = [];
var game = "start";
var symTyped;
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
                    playInputReset();
                    totalscores++;
                    score.innerText = totalscores;
                    if (correctCardArr.length === 2) {
                        cardPickTwo = [];
                        symPickTwo = [];
                        correctCardArr = [];
                        wrongCardArr = [];
                        makeCardSet();
                    };
                } else if (symTyped === cards[cardPickTwo[1]].innerText) {
                    cards[cardPickTwo[1]].innerText = "";
                    playInputReset();
                    totalscores++;
                    score.innerText = totalscores;
                    if (correctCardArr.length === 2) {
                        cardPickTwo = [];
                        symPickTwo = [];
                        correctCardArr = [];
                        wrongCardArr = [];
                        makeCardSet();
                    };
                };
            } else if (correctCardArr.indexOf(symTyped) !== -1) {
                console.log("you have already guess this correctly");
            };
        };
    };
};

playInput.addEventListener('keypress', checkInput);