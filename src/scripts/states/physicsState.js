var physicsState = new Extasy.state('physicsState');


physicsState.create = function () {
    console.log(this.game.physicsManager);
    this.game.physicsManager.createBody();
}

physicsState.update = function () {}
