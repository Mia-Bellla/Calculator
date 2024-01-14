let currentInput = '';
let operator = '';
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput !== '') {
        operator = op;
        currentInput += ` ${operator} `;
        updateDisplay();
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
        resultDisplayed = true;
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}