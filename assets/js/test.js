var game = new Extasy.Game();

var state1 = new Extasy.State("state1");
var state2 = new Extasy.State("state2");

game.addState(state1);
game.addState(state2);

game.states.forEach(function(state, i) {
    console.log(state);
});

game.switchState("state2");

console.log("current state: ", game.currentState);

//game.start();