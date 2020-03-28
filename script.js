console.log("It is running!")
//Ask for Player's Name
var playerInput = document.querySelector('#player-input');
var playerName = document.querySelector('#player-name');
var submitBtn = document.querySelector('#submit-btn');

var enterPlayerName = function() {
    playerName.innerHTML = "Hello "+playerInput.value;
    playerInput.style.display = "none";
    submitBtn.style.display = "none";
}

submitBtn.addEventListener('click', enterPlayerName);