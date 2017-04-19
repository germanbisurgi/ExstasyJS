var mygame = new Extasy.game(400, 200, 'my game', '#canvas');

mygame.stateManager.add(loadState);
mygame.stateManager.add(entityState);

mygame.stateManager.switch('loadState');

mygame.run();


