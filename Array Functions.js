// 1. Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMaximum(arr) {
  let max = arr[0]; // Start with the first element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if current element is greater
    }
  }
  return max;
}
// minimum
function findMinimum(arr) {
  let min = arr[0]; // Start with the first element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; // Update min if current element is smaller
    }
  }
  return min;
}

// output
const numbers = [1, 2, 3, 4, 5, 0, -1];

console.log("Maximum Value:", findMaximum(numbers)); // Output: 5
console.log("Minimum Value:", findMinimum(numbers)); // Output: -1

// 2. Sum of Array: Create a function that calculates the sum of all elements in an array.
function sum_of_array(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Sum of Array:", sum_of_array(num));

// 3. Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      result.push(arr[i]); // Add to result if condition is true
    }
  }

  return result;
}

const numb = [1, 2, 6, 3, 8, 4];
const result = filterArray(numb, (num) => num > 5);
console.log(result); // Output: [6, 8]
