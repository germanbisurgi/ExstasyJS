var physicsState = new Extasy.state('physicsState');
var plattform;
var box;

physicsState.create = function () {
    plattform = this.game.physicsManager.createBody(250, 250, 300, 20, 'kinematic');
    box = this.game.physicsManager.createBody(150, 30, 20, 20, 'dynamic');
    console.log('position', box.GetPosition());
    console.log('angle', box.GetAngle());
    console.log('world center', box.GetWorldCenter());
}

physicsState.update = function () {
    var game = this.game;
    this.game.interval(2, function () {
        game.physicsManager.createBody(250, 120, 20, 20, 'dynamic');
    });
    // console.log(this.game.now)
    this.game.interval(5, function () {
        plattform.ApplyTorque(6);
    });
    
    // box.ApplyImpulse({'x': 0.5 / 30, 'y': 0.5 / 30}, box.GetWorldCenter()); 
}
