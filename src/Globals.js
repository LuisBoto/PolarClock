var inputs = {}; // tipos
inputs.keyboard = 1;

var keycodes = []; //User input available keycodes (a-z, A-Z, 0-9 and spacebar)
for (var i=65; i<91; i++) {
    keycodes.push(i);
}
for (var i=48; i<58; i++) {
    keycodes.push(i);
}
keycodes.push(32);

var userInput = "";
var awaitingInput = false;
