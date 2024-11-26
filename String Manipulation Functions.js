//1. Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
  let reversed = ""; // This will store the reversed string

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Add each character to the reversed string
  }

  return reversed;
}

console.log(reverseString("Hello, How are you today?"));

// 2. Count Characters: Create a function that counts the number of characters in a string.
function countString(string) {
  return string.length;
}

const inputString = "Hello, World!";
const count = countString(inputString);

console.log(`The string "${inputString}" has ${count} characters.`);

let ken =
  "Hello, my name is Kenneth. How are you doing today? I trust you are doing okay.";
let Kenneth = countString(ken);
console.log(`The string "${ken}" has ${Kenneth} characters.`);

// 3. Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function capitalizeFirstLetters(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return words.join(" ");
}

const inputSentence = "hello, welcome back home. how was work today?";
const capitalizedSentence = capitalizeFirstLetters(inputSentence);

console.log(capitalizedSentence);
