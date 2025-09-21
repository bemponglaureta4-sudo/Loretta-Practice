const secretNumber = Math.floor(Math.random() * 10) + 1;

let guess;
let attempts = 0;

// Import prompt-sync to take input from the console
const prompt = require("prompt-sync")();

while (guess !== secretNumber) {
  guess = parseInt(prompt("Guess a number between 1 and 10: "));
  attempts++;

  if (guess === secretNumber) {
    console.log(`🎉 Correct! The number was ${secretNumber}. You took ${attempts} tries.`);
  } else if (guess < secretNumber) {
    console.log("Too low! Try again.");
  } else if (guess > secretNumber) {
    console.log("Too high! Try again.");
  }
}