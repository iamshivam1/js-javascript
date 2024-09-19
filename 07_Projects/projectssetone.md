# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code 

## Project 1 

```javascript
console.log('javascript')
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
  console.log(button)
  button.addEventListener('click', function(event){
    console.log(event)
    console.log(event.target)
    if(event.target.id === 'grey'){
      body.style.backgroundColor = 'grey'
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor = 'white'
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor = 'blue'
      
    }
    if(event.target.id === 'yellow'){
      body.style.backgroundColor = 'yellow'
    }
    if(event.target.id === 'purple'){
      body.style.backgroundColor = 'purple'
    }
  })
})


```


## Project 2 Solution
```javascrpit
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Validate height and weight input
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please give a valid height: ${height}`;
    return;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please give a valid weight: ${weight}`;
    return;
  }

  // Calculate BMI
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Determine the weight category
  let weightCategory;
  if (bmi < 18.6) {
    weightCategory = 'Underweight';
    console.log('Underweight');
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    weightCategory = 'Normal Weight';
    console.log('Normal Weight');
  } else {
    weightCategory = 'Overweight';
    console.log('Overweight');
  }

  // Show the BMI value and weight category on the screen
  results.innerHTML = `<span>BMI: ${bmi} - ${weightCategory}</span>`;
});


```

## Project 3 Solution
```javascrpit
const clock = document.getElementById('clock')


setInterval(function() {
  let date = new Date()
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString()
},1000)


```


## Project 4 Solution
```javascrpit 
let randomNumber = (Math.floor(Math.random() * 100 + 1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('.guessField')
const guessSlot = document.querySelector('.guesses')
const remaing = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
   const guess = parseInt(userInput.value)
   console.log(guess)
   validateGuess(guess)
  })
}

function validateGuess(guess) {
  if(isNaN(guess)){
    alert('Please enter a valid message')
  } else if (guess < 1) {
  alert('Please enter a number greater than 1')
  } else if (guess > 100) {
    alert('Number is greater than 100')
    }else{
      prevGuess.push(guess)
      if(numGuess === 11) {
        displayGuess(guess)
        displayMessage(`Game over: Random number was ${randomNumber}`)
        endGame()
      }else {
        displayGuess(guess)
        checkGuess(guess)
      }
    }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it Right`);
    endGame()
  }else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
}
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaing.innerHTML = `${11 - numGuess}`;


}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  playGame = false;
  newGame()
}

function newGame(){
 const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(event){
    randomNumber =  (Math.floor(Math.random() * 100 + 1));
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaing.innerHTML = `${11 - numGuess}`; 
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  });
}



```