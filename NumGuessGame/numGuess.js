let randomNumber = parseInt((Math.random()*100)+1);
var lowOrHigh = document.getElementById('lowOrHigh');
var prevGuess = document.getElementById('prevGuess');
var remGuess = document.getElementById('remGuess');
var randNum = document.getElementById('randNum');
var startOver = document.getElementById('resultParas');
let previousGuess = [ ];
let playGame = true;
let numGuess = 1;
var wrapper = document.getElementById('wrapper');
var btn = document.createElement('BUTTON');

if(playGame){
	subt.addEventListener('click', function(e) {
		e.preventDefault();
		const num = document.getElementById('randNum').value;
		validateNum(num);
	});
}

function validateNum(num){
	if(num<0)
		alert('Enter number greater than 0');
	else if(num>100)
		alert('Enter number smaller than 100');
	else if(isNaN(num))
		alert('Enter valid number');
	else{
		previousGuess.push(num);
		if(numGuess == 11){
			displayMessage('Game Over !! Number was ' + randomNumber);
			endGame();
		}
		else{
			prevGuess.innerHTML = previousGuess;
			checkGuess(num);
			numGuess++
			remGuess.innerHTML = 11-numGuess ;
		}

	}
}

function checkGuess(num){
	if (num>randomNumber)
		displayMessage('Too High');
	else if(num < randomNumber)
		displayMessage('Too Low');
	else if (num == randomNumber){
		displayMessage('You Won');
		endGame();
	}
}


function displayMessage(message) {
	lowOrHigh.innerHTML = message;
}

function endGame(){
	randNum.value=' ';
	btn.id = "newBtn"
	btn.innerHTML = "Start New Game";
	//document.body.appendChild(btn);
	wrapper.appendChild(btn);
	playGame=false;
	newGame();
}

function newGame() {
	btn.addEventListener('click', function(e) {
		randomNumber = parseInt((Math.random()*100)+1);
		previousGuess=[];
		prevGuess.innerHTML= [ ];
		numGuess= 1;
		remGuess.innerHTML = 11-numGuess;
		lowOrHigh.innerHTML=' ';
		document.body.removeChild(btn);
		playGame=true;
	})
}
