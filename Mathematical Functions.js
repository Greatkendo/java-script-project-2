// 1. Factorial: Write a function to calculate the factorial of a given number.
function factorial_of_numbers(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  let result = 1;
  for (i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

let number = -10;
console.log(`The factorial of ${number} is ${factorial_of_numbers(number)}`);

// 2. Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
  if (num <= 1) return false; // Step 1: Numbers less than or equal to 1 are not prime

  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Step 2: Check divisibility up to the square root of the number
    if (num % i === 0) {
      // If num is divisible by any number in this range
      return false; // The number is not prime
    }
  }

  return true; // The number is prime
}

console.log(isPrime(2), "2 is prime"); // Output: true (2 is prime)
console.log(isPrime(3), "3 is prime"); // Output: true (3 is prime)
console.log(isPrime(4), "4 is not prime"); // Output: false (4 is not prime)
console.log(isPrime(17), "17 is prime"); // Output: true (17 is prime)
console.log(isPrime(18), "18 is not prime"); // Output: false (18 is not prime)
console.log(isPrime(1), "1 is not prime"); // Output: false (1 is not prime)

// 3. Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function generateFibonacci(n) {
  let fibSequence = []; // Array to hold the Fibonacci sequence

  // Special cases for n = 0 or 1
  if (n <= 0) return fibSequence; // If n is 0 or negative, return an empty array
  if (n === 1) return [0]; // If n is 1, return an array with just the first term

  // Start with the first two terms: 0 and 1
  fibSequence = [0, 1];

  // Loop to generate the rest of the sequence
  for (let i = 2; i < n; i++) {
    let nextTerm = fibSequence[i - 1] + fibSequence[i - 2]; // Sum of the previous two terms
    fibSequence.push(nextTerm); // Add the next term to the sequence
  }

  return fibSequence; // Return the Fibonacci sequence
}

console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
console.log(generateFibonacci(1)); // Output: [0]
console.log(generateFibonacci(0)); // Output: []
