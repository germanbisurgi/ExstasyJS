var mygame = new Extasy.game(400, 200, 'my game', '#canvas');

mygame.stateManager.add(loadState);
mygame.stateManager.add(loadState2);
mygame.stateManager.add(entityState);
mygame.stateManager.add(testState);

mygame.stateManager.switch('loadState2');

mygame.run();


