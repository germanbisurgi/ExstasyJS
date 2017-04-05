var mygame = new Extasy.game('my game');

mygame.stateManager.add(loadState);
mygame.stateManager.add(menuState);
mygame.stateManager.add(gameState);
mygame.stateManager.add(gameOverState);

mygame.stateManager.switch('loadState');

mygame.run();


