
const readline = require("readline");
const rl = readline.createInterface({
   input:process.stdin,
   output:process.stdout
});
const secretNumber = Math.floor(Math.random() *10) + 1;
let attempts = 0;
function askGuess() {
rl.question("Guess a number between 1 and 10:",(answer) => {
  const guess = parseInt(answer);
  attempts++;
  if (guess === secretNumber) {
    console.log(`Correct!You guessed the Number in ${attempts}tries.`);
    rl.close();
  }else{
    console.log("Wrong!Try again");
    askGuess();
  }
});
}
askGuess();