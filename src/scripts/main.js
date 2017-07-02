var mygame = new Extasy.game(500, 300, 'my game', '.canvas');

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
mygame.stateManager.add(poolState);
mygame.stateManager.add(eventState);

mygame.stateManager.switch('loadState');

mygame.run();


