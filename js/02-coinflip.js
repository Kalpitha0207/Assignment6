var coinFlip = Math.round(Math.random());
var choice = window.prompt("Choose Heads(H) or Tail(T).");
choice = choice.toUpperCase();
var result;
window.console.log(coinFlip);
if (!coinFlip) {
    result = "H";
    if (choice === 'H') {
        window.alert("The flip was heads and you have chosen heads...you win!");
    } else if (choice === "T") {
        window.alert("The flip was heads but you have chosen tails...you lose!");
    } else {
        window.alert("Invalid Entry");
    }
} else if (coinFlip) {
    result = "T";
    if (choice === 'H') {
        window.alert("The flip was tails but you have chosen heads...you lose!");
    } else if (choice === "T") {
        window.alert("The flip was tails and you have chosen tails...you win!");
    } else {
        window.alert("Invalid Entry");
    }
}