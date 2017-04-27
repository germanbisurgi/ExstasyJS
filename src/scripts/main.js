var mygame = new Extasy.game(600, 400, 'my game', '#canvas');

mygame.stateManager.add(loadState);
mygame.stateManager.add(controllerState);
mygame.stateManager.add(spriteState);
mygame.stateManager.add(tileSpriteState);

mygame.stateManager.switch('loadState');

mygame.run();


