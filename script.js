
let bill = document.querySelector('#bill-input');
let btns = document.querySelectorAll('.tip-button');
let btn5 = document.querySelector('.tip-5');
let btn10 = document.querySelector('.tip-10');
let btn15 = document.querySelector('.tip-15');
let btn25 = document.querySelector('.tip-25');
let btn50 = document.querySelector('.tip-50');
let customTip = document.querySelector('.tip-custom');
let quantity = document.querySelector('.people-amount-input');
let resetButton = document.getElementById('#reset-button');

let output1 = document.getElementById('#tip-output');
let output2 = document.getElementById('#total-output');

let billInput = 0;
let tipInput = 0;
let quantityInput = 0;
let customBool = false; 

function buttonFocusRemover() {
  btns.forEach((e) => e.classList.remove('clicked-button'));
}

function inputHandler(event) {

  if (event === bill) {
    if (event > 0) {
      billInput = event.value;
    }
  }

  if (event === customTip) {
    if (event > 0) {
      buttonFocusRemover();
      tipInput === event.value;
      customBool = true;
    }
  }

  if (event === quantity) {
    if (event.value <= 0) {
      event.classList.remove('people-amount-input');
      event.classList.add('people-amount-input-false');
    } else {
      event.classList.remove('people-amount-input-false');
      event.classList.add('people-amount-input');
      quantityInput = quantity.value;
    }
  }

}

function buttonInputHandler(event) {

  if (event === btn5) {
    buttonFocusRemover();
    btn5.classList.add('clicked-button');
    tipInput = 0.05;
  } else if (event === btn10) {
    buttonFocusRemover();
    btn10.classList.add('clicked-button');
    tipInput = 0.10;
  } else if (event === btn15) {
    buttonFocusRemover();
    btn15.classList.add('clicked-button');
    tipInput = 0.15;
  } else if (event === btn25) {
    buttonFocusRemover();
    btn25.classList.add('clicked-button');
    tipInput = 0.25;
  } else if (event === btn50) {
    buttonFocusRemover();
    btn50.classList.add('clicked-button');
    tipInput = 0.50;
  }
}

function setOutputs() {
  if (billInput > 0 && tipInput > 0 && quantityInput > 0) {
    let tip = (billInput * tipInput) / quantityInput;
    output1.textContent = tip;
    output2.textContent = tip + (billInput / quantityInput);
  }
}

bill.addEventListener('inputs', inputHandler(bill));
customTip.addEventListener('inputs', inputHandler(customTip));
quantity.addEventListener('inputs', inputHandler(quantity));

btn5.addEventListener('click', buttonInputHandler(btn5));
btn10.addEventListener('click', buttonInputHandler(btn10));
btn15.addEventListener('click', buttonInputHandler(btn15));
btn25.addEventListener('click', buttonInputHandler(btn25));
btn50.addEventListener('click', buttonInputHandler(btn50));

bill.addEventListener('inputs', setOutputs());
customTip.addEventListener('inputs', setOutputs());
quantity.addEventListener('inputs', setOutputs());

btn5.addEventListener('click', setOutputs());
btn10.addEventListener('click', setOutputs());
btn15.addEventListener('click', setOutputs());
btn25.addEventListener('click', setOutputs());
btn50.addEventListener('click', setOutputs());


