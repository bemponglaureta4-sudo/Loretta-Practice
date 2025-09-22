
const readline = require("readline");
const rl = readline.createInterface({
   input:process.stdin,
   output:process.stdout
});
const secretNumber = Math.floor(Math.random() *10) + 1;
rl.question("Guess a number between 1 and 10:",(answer) => {
  const guess = parseInt(answer);
  if (guess === secretNumber) {
    console.log("Correct!You guessed the Number!");
  }else{
    console.log(`Wrong!The secret number was ${secretNumber}.`);
  }
 rl.close();
});