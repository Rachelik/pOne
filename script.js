console.log("It is running!")
//Ask for Player's Name
var playerInput = document.querySelector('#player-input');
var playerName = document.querySelector('#player-name');
var submitBtn = document.querySelector('#submit-btn');
var resetBtn = document.querySelector('#reset-btn')
var score = document.querySelector('#score');

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

resetBtn.addEventListener('click', resetGame);