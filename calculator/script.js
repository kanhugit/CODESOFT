let display = document.getElementById('display');
let currentInput = '';

function press(value) {
  if (display.textContent === '0' && value !== '+' && value !== '-') {
    display.textContent = value;
    currentInput = value;
  } else {
    currentInput += value;
    display.textContent = currentInput;
  }
}

function calculate() {
  try {
    let result = eval(currentInput);
    display.textContent = result;
    currentInput = result.toString();
  } catch (e) {
    display.textContent = 'Error';
    currentInput = '';
  }
}

function clearDisplay() {
  display.textContent = '0';
  currentInput = '';
}
