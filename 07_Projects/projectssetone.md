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