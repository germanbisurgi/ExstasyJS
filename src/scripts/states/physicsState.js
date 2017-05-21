var physicsState = new Extasy.state('physicsState');
var body;
var fixture;

physicsState.create = function () {
    body = this.game.physicsManager.createBody(50, 50, 'dynamic');
    fixture = this.game.physicsManager.createBox(50, 50);
    body.CreateFixture(fixture);
    console.log(body.GetDefinition());
};

physicsState.update = function () {
    //body.ApplyImpulse({'x': 1/30, 'y': 1/30}, body.GetWorldCenter());
    //body.ApplyForce({'x': 1/30, 'y': 0/30}, body.GetWorldCenter());
    body.ApplyTorque(6);
    console.log(body.GetDefinition().angularVelocity);
};
