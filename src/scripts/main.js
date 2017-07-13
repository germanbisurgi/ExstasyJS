var width = window.innerWidth;
var height = window.innerHeight;

var mygame = new Extasy.game(width, height, 'my game', '.canvas');

mygame.stateManager.add(loadState);
mygame.stateManager.add(primitivesState);
mygame.stateManager.add(spriteState);
mygame.stateManager.add(tileSpriteState);
mygame.stateManager.add(inputState);
mygame.stateManager.add(cameraState);
mygame.stateManager.add(physicsState);
mygame.stateManager.add(gameState);
mygame.stateManager.add(audioState);
mygame.stateManager.add(mathState);
mygame.stateManager.add(timeState);
mygame.stateManager.add(textState);
mygame.stateManager.add(collisionState);
mygame.stateManager.add(collisionOnlyState);
mygame.stateManager.add(poolState);
mygame.stateManager.add(eventState);
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


