
// Write your code here
const num1 = 1;
const num2 = 62;

function multiply(num1, num2) {
  return num1 * num2 === 62;
}

console.log(multiply(num1, num2)); // true

function getRandomInt() {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
  }
  
  console.log(getRandomInt());

  function mod(num3, num4) {
    // Check if both numbers are provided and are valid numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return "Both numbers must be valid numbers.";
    }
  
    // Calculate the remainder of num1 divided by num2
    const remainder = num3 % num4;
  
    // Check if the remainder is equal to 4
    if (remainder === 4) {
      return `${num3} % ${num4} has a remainder of 4.`;
    } else {
      return `${num3} % ${num4} does not have a remainder of 4. The remainder is ${remainder}.`;
    }
  }
  
  // Initialize two numbers and call the function
  const number1 = 18;
  const number2 = 7;
  const result = mod(number3, number4);
  
  console.log(result);