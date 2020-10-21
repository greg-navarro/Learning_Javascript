var chosenNumber = -1;
var turns = 0;

function startGame() {
  let secretNumber = Math.random() % 100;
  return secretNumber;

}

function checkMove() {
  turns = turns + 1;
  let guess = document.getElementsById('num').value;
  let message = document.getElementsById('message');
  if (guess != secretNumber) {
    message.style.color = "red";
    if (guess < secretNumber) {
      message.value = "Wrong Guess, too low, try again";
    } else {
      message.value = "Wrong Guess, too high, try again";
    }
    message.value = "Wrong Guess, try again";
    guess = document.getElementsById('num').value;
  }
  if (guess == secretNumber) {
    message.style.color = "green";
    message.value = "Correct Guess!!!";
  }
  message.value = "Correct Guess!!!";
}

chosenNumber = startGame();
