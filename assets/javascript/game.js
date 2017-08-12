var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10; 
var keys = "";

var computerChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(computerChoice)

document.onkeyup = function(event) {
	var userGuess = event.key;
	if (userGuess === computerChoice) {
		wins++;
		computerChoice = letters[Math.floor(Math.random() * letters.length)];
		guessesLeft = 10;
		keys = ""
	} else if (userGuess!==computerChoice) {
		guessesLeft--;
		keys = keys + " " + event.key;
		if (guessesLeft === 0) {
			losses++;
			guessesLeft = 10;
			computreChoice = letters[Math.floor(Math.random() * letters.length)];
			keys = ""
		}
	}
	var html = 
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guessesLeft + "</p>" +
	//Now how do I document which keys were struck?
	"<p>Your Guesses So Far: " + keys;
	//Just wanted to make sure that the computerChoice did not change every time keys were struck
	//"<p>The computer guessed: " + computerChoice;

	document.querySelector("#game").innerHTML = html;
}