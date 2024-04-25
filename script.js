const myCalculator = document.querySelector('.calculator');
const myCalculatorKeys = [ 
  ['1', '2', '3', '+'],
  ['4', '5', '6', '-'],
  ['7', '8', '9', '*'],
  ['AC', '0', '=', '/']
];
const myCalculatorOperator = ['+', '-', '*', '/']
let displayCalc;

//function to display calculator keys on DOM load
const calculate = () => {
displayCalc = document.createElement('div')
displayCalc.innerHTML = '0'
displayCalc.classList.add('output')
myCalculator.appendChild(displayCalc)

// console.log(displayCalc)

//display calculator keys by looping through 'myCalculatorKeys'
myCalculatorKeys.forEach((keys) => {
  let div = document.createElement('div');
  // div.classList.add('row');

//loop through the nested array to get each keys
keys.forEach((key) => {
  let btn = document.createElement('div')
  btn.innerHTML = key
  btn.classList.add('btn')

  //listen for the 'click' event on btn, then run the 'btnClicked' function
  btn.addEventListener('click', btnClicked)

  div.appendChild(btn)
  // console.log(btn)
})

myCalculator.appendChild(div)

})
}

//function to run when 'btn' is clicked
function btnClicked(){
  let keyValue = this.innerHTML;
  let keyCalculation = displayCalc.innerHTML

  if(keyCalculation === '0') { keyCalculation = ''}

  //condition to check if '=' is clicked. if true, evaluate expression
  if(keyValue === '=') {
    keyCalculation = eval(keyCalculation)
  } else {
    let lastKeyValue = keyCalculation.substring(0, keyCalculation.length - 1)

    //evaluate the expression
    if(myCalculatorOperator.includes(keyValue)){
      if(myCalculatorOperator.includes(lastKeyValue)){
        keyCalculation = keyCalculation.substring(0, keyCalculation.length - 1) 
      } else {
        keyCalculation = eval(keyCalculation);
      }
    }
  
    keyCalculation += keyValue
    // console.log(keyValue.innerHTML)
  }

  //condition to check if 'AC' was clicked. if true, clear expression.
  if(keyValue === 'AC'){
    keyCalculation = 0
  }
  
  //display expression on calculator screen
  displayCalc.innerText =  keyCalculation;


}


//load calculator contents as soon as the DOM is loaded
document.addEventListener('DOMContentLoaded', calculate)





