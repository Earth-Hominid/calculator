class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
  }

  clear() {

  }

  delete() {

  }

  appendNumber(number) {

  }

  chooseOpertation(operate) {

  }

  compute() {

  }

  updateDisplay() {

  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation');
const equalsButton = document.querySelector('data-equals');
const deleteButton = document.querySelector('data-delete');
const clearButton = document.querySelector('data-clear');
const previousOperandTextElement = document.querySelector('data-previous-operand');
const currentOperandTextElement = document.querySelector('data-current-operand');




/* addition() {
}

subtraction() {
}

division() {
}

multiplication() {
}

operate() {
} */