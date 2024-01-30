console.log("It is running!")
//Ask for Player's Name
var playerInput = document.querySelector('#player-input');
var playerName = document.querySelector('#player-name');
var allCards = document.querySelector('#all-cards');
var levelTitle = document.querySelector('#level-title');
var playInput = document.querySelector('#play-input');

var message = document.querySelector('#message');
var score = document.querySelector('#score');

var levelBtns = document.querySelectorAll('.level-btn')
var resetBtn = document.querySelector('#reset-btn')

//Choose Level btn or choose number of cards btn
var easyBtn = document.querySelector('#easy-btn');
var numbersBtn = document.querySelector('#numbers-btn');
var hardBtn = document.querySelector('#hard-btn');
var mixBtn = document.querySelector('#mix-btn');
var sevenBtn = document.querySelector('#seven-btn');

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
var arrToSet = [];

//Variables for Timer
var timer = 60;
var timerStart = "stop";



var audioBtn = document.querySelector('#audio-btn')
var sound = false;
audioBtn.innerText = "🔇";
var audioCtrl = function() {
    if (sound === true){
        sound = false;
        audioBtn.innerText = "🔇";
    } else if (sound === false) {
        sound = true;
        audioBtn.innerText = "🔊";
    };
};
audioBtn.addEventListener('click', audioCtrl)

//sound when a key is pressed
var typeSound = function(event) {
    if(event.key !== 'Enter' && sound === true && timer < 60){
        document.querySelector('#sound').play();
    };
};


//****************************** Choose Level Button START **********************************
//function to choose Level
var easyLevel = function() {
    arrToSet = symbols;
    showLevel(easyBtn);
};
easyBtn.addEventListener('click', easyLevel);

var numbersLevel = function() {
    arrToSet = numbers;
    showLevel(numbersBtn);
};
numbersBtn.addEventListener('click', numbersLevel);

var hardLevel = function() {
    arrToSet = sSymbols;
    showLevel(hardBtn);
};
hardBtn.addEventListener('click', hardLevel);

var mixLevel = function () {
    arrToSet = symbols.concat(numbers, sSymbols);
    showLevel(mixBtn);
};
mixBtn.addEventListener('click', mixLevel);

//to display level selected and hide.
var showLevel = function(button) {
    levelTitle.innerHTML = button.innerHTML;
};
//********************************* Choose Level Button END **********************************


//******************************* Generate Two Random Cards START *************************
//function to generate two random cards.
var cardPickTwo = [];
var cardPick = function() {
    cards = document.querySelectorAll('.cards');
    cardPickTwo = [];
    while (cardPickTwo.length < 2) {
        var genCardI = Math.floor(Math.random() * cards.length);
        if (cardPickTwo.indexOf(genCardI) === -1) {
            cardPickTwo.push(genCardI);
        };
    };
    console.log("Cards Index: "+cardPickTwo);
};
//******************************** Generate Two Random Cards END ***************************


//********************* Select numbers of cards in the game area START **********************
//Note: will hide once player hit start and enter at checkMatch function
//function to add 2 cards if current is 5 cards (default). to remove 2 if current is 7.
var cards = document.querySelectorAll('.cards');
// var createCards = function() {
//     cards = document.querySelectorAll('.cards');
//     if (cards.length === 5) {
//         sevenBtn.innerText = "5 Cards";
//         var i = 0;
//         while(i < 2) {
//             var createCardsSpan = document.createElement('span');
//             createCardsSpan.classList.add('cards');
//             createCardsSpan.style.marginRight = "4px";
//             allCards.appendChild(createCardsSpan);
//             i++;
//         };
//     } else if (cards.length === 7) {
//         sevenBtn.innerText = "7 Cards";
//         allCards = document.querySelector('#all-cards')
//         var j = 0;
//         while(j < 2) {
//             allCards.removeChild(allCards.lastChild);
//             j++;
//         };
//     };
// };
// sevenBtn.addEventListener('click', createCards);
//********************* Select numbers of cards in the game area END ************************


//********************* PICK TWO SYMBOLS to display on cards ********************************
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
};
//********************* PICK TWO SYMBOLS to display on cards ********************************


//********************* Link SYMBOLS to CARDS START *****************************************
//function to link the two random symbols and cards together.
var linkCardSym = function(cardPickArr, symPickArr) {
    for (var i = 0; i<cardPickArr.length; i++) {
        cards[cardPickArr[i]].innerText = arrToSet[symPickArr[i]];
    };
};
//********************* Link SYMBOLS to CARDS END *******************************************


function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
 

//*************************************** Player's NAME *************************************
//function to enter name
var enterPlayerName = function(event) {
    if (event.key === 'Enter') {
    playerName.innerHTML = "Hello "+ titleCase(playerInput.value);
    playerInput.classList.add('hide');
    playerName.classList.add('style-change');
    };
};
//When Enter Key is clicked, name is fixed.
playerInput.addEventListener('keypress', enterPlayerName);
//*************************************** Player's NAME END *******************************


//*************************************** RESET GAME **************************************
//reset everything
var resetGame = function() {
    timer = 60;
    document.getElementById('one-min-timer').innerText = timer + "s";
    timerStart = "stop";
    arrToSet = [];
    correctCardArr = [];
    wrongCardArr = [];
    playInput.disabled = false;
    for (var i = 0; i < cards.length; i++) {
        cards[i].innerText = "";
    };
    levelTitle.innerHTML = "Choose Level"
    for (var i = 0; i < levelBtns.length; i++) {
        levelBtns[i].classList.remove('hide');
    };
    sevenBtn.classList.remove('hide');
    playerInput.value = "";
    playerName.innerText = "Player's Name";
    playerInput.classList.remove('hide');
    playerName.classList.remove('style-change');
    totalscores = 0;
    score.innerText = 0;
    message.innerText = "";
    symTyped = "";
    sound = false;
    audioBtn.innerText = "🔇";
    playInput.placeholder = "Enter 'start' to begin";
};

//When reset button is clicked, everything reset.
resetBtn.addEventListener('click', resetGame);
//************************************** RESET GAME END **********************************

//function to reset playInput value as user entered.
var playInputReset = function() {
    playInput.value = "";
};


//**************************************Make NEW CARD SET*********************************
//function to remake card set of two as user guessed correctly.
var makeCardSet = function() {
    playInput.placeholder = "";
    cardPick();
    symPick(arrToSet);
    linkCardSym(cardPickTwo, symPickTwo);
    playInputReset();
};
//************************************Make NEW CARD SET END*****************************


// make new card set of 2 symbols once player completed. Reset correct and wrong card array.
// 1 set = 2 cards = 1 round. make new round after this. <DECISION TO MOVE TO NEXT ROUND>
var cardSetDone = function() {
    if (correctCardArr.length === 2) {
        correctCardArr = [];
        wrongCardArr = [];
        var timeoutCardSet = setTimeout(makeCardSet, 400);
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

//################################## MAIN FUNCTION ##########################################
//check input if match or not. For Easy Symbols but did not link to the button yet.
var checkInput = function(event) {
    if (event.key === 'Enter') {
        symTyped = playInput.value
        //whatever typed will be the playInput.value in the beginning.
        if (symTyped === "start") {
            if (arrToSet.length === 0) {
                message.innerText = "Please Choose Level."
                playInputReset();
            } else if (arrToSet.length !== 0) {
                setTimeout(makeCardSet, 400);
                document.addEventListener('keypress', typeSound);
                timerStart = "start";
                //only hide when game start
                for (var i = 0; i < levelBtns.length; i++) {
                    levelBtns[i].classList.add('hide');
                };
                sevenBtn.classList.add('hide');
                playInputReset();
                message.innerText = "Game start now. Enter the symbols on the cards. One at a time."
            };
            // symTyped = playInput.value
        } else if (symTyped !== arrToSet[symPickTwo[0]] && symTyped !== arrToSet[symPickTwo[1]]) {
            if (wrongCardArr.indexOf(symTyped) === -1){
                wrongCardArr.push(symTyped);
                totalscores -= 3;
                score.innerText = totalscores;
                playInputReset();
                message.innerText = "Nope, try again please."
//GAME-OVER----------------------------------------------
                if(wrongCardArr.length === 3) {
                    message.innerText = "Game Over. Reset Game to play again."
                    playInput.disabled = true;
                    sound = false;
                    audioBtn.innerText = "🔇";
                    timerStart = stop;
                }
//GAME-OVER----------------------------------------------
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
//#################################### MAIN FUNCTION END #####################################



//1 min timer and the game will stop taking in input.
function myTimer() {
    if (timer>0 && timerStart === "start"){
        timer--;
        document.getElementById('one-min-timer').innerText = timer + "s";

    } else if (timer === 0) {
        timerStart === "stop";
        sound = false;
        audioBtn.innerText = "🔇";
        message.innerText = "Well done. Reset Game to play again."
        playInput.value = "";
        playInput.disabled = true;
    };
};

var myVar = setInterval(myTimer, 1000);
document.getElementById('one-min-timer').innerText = timer + "s";