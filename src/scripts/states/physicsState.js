var physicsState = new Extasy.state('physicsState');
var plattform;
var box;

physicsState.create = function () {
    plattform = this.game.physicsManager.createBody(250, 250, 300, 20, 'kinematic');
    box = this.game.physicsManager.createBody(150, 30, 20, 20, 'dynamic');
};

physicsState.update = function () {
    var game = this.game;
    this.game.interval(1, function () {
        game.physicsManager.createBody(250, 120, 20, 20, 'dynamic');
    });
    
    plattform.ApplyTorque(6);
    
};
