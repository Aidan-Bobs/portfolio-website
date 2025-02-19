let secret = Math.floor(Math.random() * 20) + 1;
let answer = Number(prompt("Please guess the secret number (1-20)"));

while (answer > 0) {
  if (answer === NaN) {
    answer = Number(
      prompt("Invalid input. Please enter a number between 1-20:")
    );
    continue;
  }

  if (answer === secret) {
    alert("Correct Guess!");
    break;
  } else if (answer < secret) {
    answer = Number(prompt("Incorrect, too low. Try again."));
    
  } 
  
  else {
    answer = Number(prompt("Incorrect, too high. Try again."));
  }
  
}
alert("Game cancelled.")