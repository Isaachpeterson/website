const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('operator')) {
            handleOperator(button.textContent);
        } else if (button.classList.contains('clear')) {
            handleClear();
        } else if (button.classList.contains('equals')) {
            handleEquals();
        } else {
            handleNumber(button.textContent);
        }
    });
});

let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let isNewInput = false;
let equation = '';

function handleNumber(number) {
    if (isNewInput) {
        display.value = '';
        isNewInput = false;
    }
    equation += number;
    display.value = equation;
}

function handleOperator(operator) {
    if (!isNewInput) {
        equation += ` ${operator} `;
        display.value = equation;
    } else {
        equation = equation.slice(0, -2) + operator + ' ';
        display.value = equation;
    }
    isNewInput = true;
}

function handleClear() {
    display.value = '';
    equation = '';
    isNewInput = false;
}

function handleEquals() {
    if (!isNewInput) {
        try {
            const result = eval(equation);
            equation = `${equation} = ${result}`;
            display.value = equation;
            isNewInput = true;
        } catch (error) {
            display.value = 'Error';
            isNewInput = true;
        }
    }
}


function performCalculation(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return a;
    }
}