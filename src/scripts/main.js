var width = window.innerWidth;
var height = window.innerHeight;

var mygame = new Extasy.game(width, height, 'my game', '.canvas');

mygame.stateManager.add(audioState);
mygame.stateManager.add(cameraState);
mygame.stateManager.add(collisionOnlyState);
mygame.stateManager.add(collisionState);
mygame.stateManager.add(eventState);
mygame.stateManager.add(gameState);
mygame.stateManager.add(inputState);
mygame.stateManager.add(loadState);
mygame.stateManager.add(mathState);
mygame.stateManager.add(physicsState);
mygame.stateManager.add(poolState);
mygame.stateManager.add(primitivesState);
mygame.stateManager.add(spriteState);
mygame.stateManager.add(textState);
mygame.stateManager.add(tileSpriteState);
mygame.stateManager.add(timeState);
mygame.stateManager.add(tweenState);

mygame.stateManager.switch('loadState');
mygame.run();

// joystick
var arrowUp = new Tactile(document.querySelector('.dom-arrow-up'));
var arrowRight = new Tactile(document.querySelector('.dom-arrow-right'));
var arrowDown = new Tactile(document.querySelector('.dom-arrow-down'));
var arrowLeft = new Tactile(document.querySelector('.dom-arrow-left'));
var buttonUp = new Tactile(document.querySelector('.dom-button-up'));
var buttonRight = new Tactile(document.querySelector('.dom-button-right'));
var buttonDown = new Tactile(document.querySelector('.dom-button-down'));
var buttonLeft = new Tactile(document.querySelector('.dom-button-left'));
var buttonStart = new Tactile(document.querySelector('.dom-button-start'));
var buttonSelect = new Tactile(document.querySelector('.dom-button-select'));
var nextState = new Tactile(document.querySelector('.dom-button-next-state'));
var prevState = new Tactile(document.querySelector('.dom-button-prev-state'));


var nextState2 = document.querySelector('.dom-button-next-state');
var prevState2 = document.querySelector('.dom-button-prev-state');

var state = mygame.stateManager.state;
var states = state.listStates();
states.forEach(function (state) {
    console.log(state.name);
});


nextState2.onclick = function () {
    
    var nState;
    var states = state.listStates();
    var currentState = state.currentState();
    var stateIndex = states.indexOf(currentState);
    stateIndex++;
    if (stateIndex < states.length) {
        nState = states[stateIndex];
    } else {
        nState = states[0];
    }
    state.switchState(nState.name);
};

prevState2.onclick = function () {
    var pState;
    var states = state.listStates();
    var currentState = state.currentState();
    var stateIndex = states.indexOf(currentState);
    stateIndex--;
    if (stateIndex < 0) {
        pState = states[states.length - 1];
    } else {
        pState = states[stateIndex - 1];
    }
    state.switchState(pState.name);
};
