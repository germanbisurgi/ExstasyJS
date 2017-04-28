var mygame = new Extasy.game(400, 300, 'my game', '#canvas');

mygame.stateManager.add(loadState);
mygame.stateManager.add(controllerState);
mygame.stateManager.add(spriteState);
mygame.stateManager.add(tileSpriteState);
mygame.stateManager.add(inputState);

mygame.stateManager.switch('loadState');

mygame.run();


