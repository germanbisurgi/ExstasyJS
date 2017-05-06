var mygame = new Extasy.game(400, 300, 'my game', '#canvas');

mygame.stateManager.add(loadState);
mygame.stateManager.add(primitivesState);
mygame.stateManager.add(spriteState);
mygame.stateManager.add(tileSpriteState);
mygame.stateManager.add(inputState);
mygame.stateManager.add(cameraState);
mygame.stateManager.add(physicsState);

mygame.stateManager.switch('loadState');

mygame.run();


