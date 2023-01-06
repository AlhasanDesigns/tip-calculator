
const bill = document.getElementById('bill-input');
const btns = document.querySelectorAll('.tip-button');
const btn5 = document.getElementById('tip-5');
const btn10 = document.getElementById('tip-10');
const btn15 = document.getElementById('tip-15');
const btn25 = document.getElementById('tip-25');
const btn50 = document.getElementById('tip-50');
const customTip = document.getElementById('custom-tip');
const quantity = document.getElementById('quantity-number');
const errorValue = document.getElementById('zero-value');
const resetButton = document.getElementById('reset-button');

const output1 = document.getElementById('tip-output');
const output2 = document.getElementById('total-output');

let billInput = 0;
let tipInput = 0;
let quantityInput = 0;
let customBool = false; 

function buttonFocusRemover() {
  return btns.forEach((e) => e.classList.remove('clicked-button'));
}

function inputHandler(event) {

  if (event === bill) {
    if (+event.value > 0) {
      return billInput = event.value;
    }
  }

  if (event === customTip) {
    if (+event.value > 0) {
      buttonFocusRemover();
      customBool = true;
      return tipInput = event.value / 100;
    }
  }

  if (event === quantity) {
    if (+event.value <= 0) {
      event.classList.remove('people-amount-input');
      event.classList.add('people-amount-input-false');
      errorValue.classList.remove('error-false');
      errorValue.classList.add('error-true');
    } else {
      errorValue.classList.remove('error-true');
      errorValue.classList.add('error-false');
      event.classList.remove('people-amount-input-false');
      event.classList.add('people-amount-input');
      return quantityInput = quantity.value;
    }
  }

}

function buttonInputHandler(event) {

  if (event === btn5) {
    if (customBool === true) {
      customBool = false;
      customTip.textContent = '';
    }
    buttonFocusRemover();
    btn5.classList.add('clicked-button');
    return tipInput = 0.05;
  } else if (event === btn10) {
    if (customBool === true) {
      customBool = false;
      customTip.textContent = '';
    }
    buttonFocusRemover();
    btn10.classList.add('clicked-button');
    return tipInput = 0.10;
  } else if (event === btn15) {
    if (customBool === true) {
      customBool = false;
      customTip.textContent = '';
    }
    buttonFocusRemover();
    btn15.classList.add('clicked-button');
    return tipInput = 0.15;
  } else if (event === btn25) {
    if (customBool === true) {
      customBool = false;
      customTip.textContent = '';
    }
    buttonFocusRemover();
    btn25.classList.add('clicked-button');
    return tipInput = 0.25;
  } else if (event === btn50) {
    if (customBool === true) {
      customBool = false;
      customTip.textContent = '';
    }
    buttonFocusRemover();
    btn50.classList.add('clicked-button');
    return tipInput = 0.50;
  }
}

function setOutputs() {
  if (billInput > 0 && tipInput > 0 && quantityInput > 0) {
    let tip = (billInput * tipInput) / quantityInput;
    output1.textContent = '$' + tip.toFixed(2);
    output2.textContent = '$' + (tip + (billInput / quantityInput)).toFixed(2);
  }
}

function resetInputs() {
  buttonFocusRemover();
  bill.value = '';
  quantity.value = '';
  customTip.value = '';
  
  billInput = 0;
  tipInput = 0;
  quantityInput = 0;
  customBool = false; 

  output1.textContent = '$0.00';
  output2.textContent = '$0.00';

}

// Event Listeners that will add the values of the inputs into
// billInput, tipInput and, quantityInput respectively. 

  bill.addEventListener('input', () => inputHandler(bill));
  customTip.addEventListener('input', () => inputHandler(customTip));
  quantity.addEventListener('input', () => inputHandler(quantity));

  btn5.addEventListener('click', () => buttonInputHandler(btn5));
  btn10.addEventListener('click', () => buttonInputHandler(btn10));
  btn15.addEventListener('click', () => buttonInputHandler(btn15));
  btn25.addEventListener('click', () => buttonInputHandler(btn25));
  btn50.addEventListener('click', () => buttonInputHandler(btn50));


// Event Listeners that will take the values of
// billInput, tipInput and, quantityInput and use them to calculate
// the new values of output1 and and output2 using the setOutPuts() function.

  bill.addEventListener('input', () => setOutputs());
  customTip.addEventListener('input', () => setOutputs());
  quantity.addEventListener('input', () => setOutputs());

  btn5.addEventListener('click', () => setOutputs());
  btn10.addEventListener('click', () => setOutputs());
  btn15.addEventListener('click', () => setOutputs());
  btn25.addEventListener('click', () => setOutputs());
  btn50.addEventListener('click', () => setOutputs());


  // Event Listener for resetting the calculator.

  resetButton.addEventListener('click', () => resetInputs());

  

