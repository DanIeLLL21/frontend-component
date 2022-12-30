let diceContainer = document.querySelector('.diceContainer')
let buttonContainer = document.createElement('div')

let numberofrolls = document.getElementById('numofrolls')
let rollButton = document.getElementById('rollButton')

let score = document.getElementById('score')
let playAgainButton = document.getElementById('buttonPlayAgain')

let leftoverDice = document.getElementById('leftoverDice')

let allbuttons = document.getElementsByClassName('allbuttons')

playAgainButton.disabled = false;


let totalValue;
let dices = 5;


let leftDices = [];
let roundTotal = 0;

// imati storano sve imade od 1 - 6 i  preko loopa napravit novi element kojem cu samo panedat value ovisno o tom objectu
// imati i end of round koji ce samo iste veljuje sejvati
let diceimages; 

for(let i = 0 ; i < dices ; i++) {

	let roll = 	Math.floor(Math.random() * 6) + 1;
	let rollText = document.createElement('button')
	let bg = `images/dice${roll}.png`;

	rollText.style.background = 'url(' + bg + ')';
	rollText.style.backgroundSize = "100% 100%";

	rollText.backgroundImage = bg;
	rollText.value = roll;
	rollText.className = "allbuttons"; 
	diceContainer.appendChild(rollText);

}



let rolls = 0;

rollButton.addEventListener('click', () => {
	rollDices();
	numberofrolls.innerHTML = rolls;
})


let countdisable = 0;

diceContainer.addEventListener('click', (e) => {

		let points = Number(e.target.value);
		roundTotal += points;

		e.target.style.backgroundColor ="yellow";
		e.target.className = "allbuttons";

		e.target.disabled = true;
		countdisable++;
		playAgainButton.disabled = true;

		score.innerHTML = roundTotal;
		leftDices.push(e.target.value)
		console.log(countdisable)
})


playAgainButton.addEventListener('click', () => { resetDices(); })

// ako je broj dajceva nula || broj rundi 3 onda play again button stavim da ponovim runde i vracam ih na nula.
// dodati to sve na total koji sam upo svaki put kad sam disableo button

// uzeti zadnje buttone na tri rolla koji nisu disable i uzeti veljuje storat ih kao zadnje veljuje koje sam dobio na trecem rollu

dices = dices - leftDices.length;
playAgainButton.disabled = true;

// hitat stejt za end gejm i ne imati jebeni playagainbutton nego ako se hita stejt true ili false samo pozvat funkciju.
// lupat se preko svih buttona i samo pitat koji je disabled koji nie cijelo cont disabled = true || false

function rollDices () {
		
		rolls++;

		for(let i = 0 ; i < allbuttons.length ; i++) {
			
			let roll = 	Math.floor(Math.random() * 6) + 1;
			let bg = `images/dice${roll}.png`;

			if(!allbuttons[i].disabled == true) {
				allbuttons[i].value = roll;
				allbuttons[i].style.background = 'url(' + bg + ')';
				allbuttons[i].style.backgroundSize = "100% 100%";
			 }
		}

		// if(dices == 0 || rolls == 3) {} countam broj svakog bacanja
		// play again button za ponovni roll 		

		if(rolls == 3 || countdisable == 5) {

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


	for(let i = 0 ; i < allbuttons.length ; i++){
		let roll = 	Math.floor(Math.random() * 6) + 1;
		let bg = `images/dice${roll}.png`;

		allbuttons[i].disabled = false;
		allbuttons[i].value = roll;
		allbuttons[i].style.background = 'url(' + bg + ')';
		allbuttons[i].style.backgroundSize = "100% 100%";
	}
}

// function za chekiranje nekog od pogodataka i plusam samo score za tolko ovisno koji je pogoden
// function za reset koji ce postavit sve opet // napravljeno
// napravit html tablicu ovisno o tom koji je input filed value tolko tablica napravit. sa poljima za popunit
// dodat samo event listenere na sva polja i prilikom  kraja svakog turna stavit mogucnost popunjavanja  
