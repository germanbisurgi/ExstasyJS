var mygame = new Extasy.game('my game');

mygame.stateManager.add(loadState);
mygame.stateManager.switch('loadState');

// console.log(mygame);

mygame.run();


