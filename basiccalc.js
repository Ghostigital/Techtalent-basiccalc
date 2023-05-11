// Declare variables
let firstValue, secondValue, operation;

// Prompt for user inputs
firstValue = parseFloat(prompt("Enter first value:"));
secondValue = parseFloat(prompt("Enter second value:"));
operation = prompt("Enter operation (+, -, *, /):");

// Function for each operation
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: Cannot divide by zero.";
  }
  return num1 / num2;
}

// Check for invalid inputs
if (isNaN(firstValue) || isNaN(secondValue)) {
  console.log("Error: Invalid input. Both values must be numbers.");
} else {
  // Evaluate operation using switch statement
  let result;
  switch (operation) {
    case "+":
      result = add(firstValue, secondValue);
      break;
    case "-":
      result = subtract(firstValue, secondValue);
      break;
    case "*":
      result = multiply(firstValue, secondValue);
      break;
    case "/":
      result = divide(firstValue, secondValue);
      break;
    default:
      result = "Error: Invalid operator.";
      break;
  }

  // Print result using template literal
  console.log(`The result is: ${result}`);
}
