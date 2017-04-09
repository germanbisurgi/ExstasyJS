var progress = document.querySelector('.progress');
var input = document.querySelector('.input');
var mouseX = document.querySelector('.mouse-x');
var mouseY = document.querySelector('.mouse-y');


var mygame = new Extasy.game('my game', progress);

mygame.stateManager.add(loadState);
mygame.stateManager.add(menuState);
mygame.stateManager.add(gameState);
mygame.stateManager.add(gameOverState);

mygame.stateManager.switch('loadState');

mygame.run();


