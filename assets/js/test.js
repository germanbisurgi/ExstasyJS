var game = new Extasy.Game();

var state1 = new Extasy.State("state1");

game.addState(state1);

game.switchState("state1");

console.log("current state: ", game.currentState);

//game.start();