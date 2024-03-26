// logic to calculator
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const operator = document.querySelectorAll('.operator');
const solve = document.querySelector('.operation');
const problem = document.querySelector('.problem');

let currentNumber = '';
let previusNumber = '';

// add event listener to the buttons
buttons.forEach((btn) => {
	btn.addEventListener('click', () => {
		const value = btn.value;

		operations(value);
		updateresult();

		result.innerHTML = currentNumber;
		console.log(currentNumber);
	});
});

// function to calculate the result
function calculateResult() {
	let result = eval(currentNumber);
	result.innerHTML = currentNumber;
	result.innerHTML = result;
	currentNumber = result.toString();
}

// function to do the operations
function operations(value) {
	if (value === 'clear') {
		currentNumber = '';
		previusNumber = '';
	} else if (value === 'equal') {
		operation();
		checkAnswer();
		calculateResult();
	} else if (value === 'backspace') {
		currentNumber = currentNumber.slice(0, -1);
	} else if (value === '%') {
		currentNumber = currentNumber / 100;
	} else if (value === '.') {
		if (!currentNumber.includes('.')) {
			currentNumber += value;
		}
	} else if (value === 'sqrt') {
		currentNumber = Math.sqrt(currentNumber);
	} else {
		currentNumber += value;
	}
}
// function to save the previus number
function operation() {
	previusNumber = currentNumber;
	solve.innerHTML = previusNumber;
	console.log('the', previusNumber);
}

function updateresult() {
	result.textContent = currentNumber;
	solve.textContent = previusNumber;

	// Reduce the font if the text is more than the result width
	if (currentNumber.length > 10) {
		solve.classList.add('more-than-14');
		result.classList.add('more-than-14');
	} else {
		solve.classList.add('more-than-14');
		result.classList.remove('more-than-14');
	}
}

let num1,num2

num1 = Math.floor(Math.random() * 100);
num2 = Math.floor(Math.random() * 100);
problem.textContent = `${num1} + ${num2}`;

function checkAnswer(){ 
	let answer = document.querySelector('.result').textContent;
	if(answer == num1 + num2){
		alert('Correct');
		num1 = Math.floor(Math.random() * 100);
		num2 = Math.floor(Math.random() * 100);
		problem.textContent = `${num1} + ${num2}`;
	} else {
		alert('Incorrect');
	}
}