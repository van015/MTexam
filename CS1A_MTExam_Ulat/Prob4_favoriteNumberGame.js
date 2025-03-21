// Ulat, Van Remlee
let theFavNumber = 7; 

let guess;
while (true) {
    guess = Number(prompt("Guess my favorite number:"));
    
    if (guess > theFavNumber) {
        console.log("Too high! Try again.");
    } else if (guess < theFavNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Correct! You guessed my favorite number.");
        break;
    }
}
