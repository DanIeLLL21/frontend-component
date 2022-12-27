let diceContainer = document.getElementById('diceContainer')
let buttonContainer = document.createElement('div')

let numberofrolls = document.getElementById('numofrolls')
let rollButton = document.getElementById('rollButton')

let score = document.getElementById('score')
let playAgainButton = document.getElementById('buttonPlayAgain')

console.log(diceContainer.children)
let leftoverDice = document.getElementById('leftoverDice')
playAgainButton.disabled = false;

let dices = 5;

let totalValue;

let leftDices = [];
let roundTotal = 0;

// imati storano sve imade od 1 - 6 i  preko loopa napravit novi element kojem cu samo panedat value ovisno o tom objectu
// imati i end of round koji ce samo iste veljuje sejvati
let diceimages; 

for(let i = 0 ; i < dices ; i++) {

	let roll = 	Math.floor(Math.random() * 6) + 1;
	let rollText = document.createElement('button')
	let bg = `images/dice${roll}.PNG`;

	rollText.style.backgroundSize = "auto";
	rollText.style.background = 'url(' + bg + ')';
	rollText.style.backgroundRepeat = "no-repeat"
	rollText.style.width = "200px"
	rollText.style.height = "200px"

	rollText.backgroundImage = bg;
	rollText.value = roll;
	rollText.className = "a allbuttons"; 
	diceContainer.appendChild(rollText);

}

let rolls = 0;

rollButton.addEventListener('click', () => {
	
	numberofrolls.innerHTML = rolls;
	rollDices();
	rolls++

})


let countdisable = 0;

diceContainer.addEventListener('click', (e) => {

		let points = Number(e.target.value);
		roundTotal += points;

		e.target.className = "b allbuttons";

		e.target.disabled = true;
		playAgainButton.disabled = true;
		

		score.innerHTML = roundTotal;
		leftDices.push(e.target.value)
		console.log(countdisable)
})


playAgainButton.addEventListener('click', () => { resetDices();})
// ako je broj dajceva nula || broj rundi 3 onda play again button stavim da ponovim runde i vracam ih na nula.
// uzeti zadnje buttone na tri rolla koji nisu disable i uzeti veljuje storat ih kao zadnje veljuje koje sam dobio na trecem rollu
//dodati to sve na total koji sam upo svaki put kad sam disableo button

dices = dices - leftDices.length;
playAgainButton.disabled = true;


function rollDices () {

		let enableButton = document.getElementsByClassName('a')

		for(let i = 0 ; i < enableButton.length ; i++) {

			let roll = 	Math.floor(Math.random() * 6) + 1;
			enableButton[i].value = roll;
			let bg = `images/dice${roll}.png`;
			enableButton[i].style.background = 'url(' + bg + ')';

		}

		// if(dices == 0 || rolls == 3) {} countam broj svakog bacanja
		// play again button za ponovni roll 		

		if(rolls == 3 || disableCount == diceContainer.length) {

			rollButton.disabled = true;
			playAgainButton.disabled = false;
		}
}



function resetDices () {
	
	rolls = 0;	
	roundTotal = 0;

	rollButton.disabled = false;
	playAgainButton.disabled = true;

	numberofrolls.innerHTML = rolls;
	score.innerHTML = roundTotal;

	let albats = document.getElementsByClassName('allbuttons');

	for(let i = 0 ; i < albats.length ; i++){
		let roll = 	Math.floor(Math.random() * 6) + 1;
		let bg = `images/dice${roll}.png`;
		let allbuttons = albats[i];
		allbuttons.disabled = false;
		allbuttons.value = roll;
		allbuttons.className =	"a allbuttons";
		allbuttons.style.background = 'url(' + bg + ')';

	}
}

// function za chekiranje nekog od pogodataka i plusam samo score za tolko ovisno koji je pogoden
// function za reset koji ce postavit sve opet // napravljeno
// napravit html tablicu ovisno o tom koji je input filed value tolko tablica napravit. sa poljima za popunit
// dodat samo event listenere na sva polja i prilikom  kraja svakog turna stavit mogucnost popunjavanja  
