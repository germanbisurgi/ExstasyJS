var gameState = new Extasy.state('gameState');
var player;

gameState.create = function () {

    this.setGravity(0, 3);

    this.addEdge(10, 290, 390, 290);
    this.addEdge(10, 10, 390, 10);

    player = this.createBody(50, 50, 'dynamic');
    player.CreateFixture(this.createRectangleShape(25, 25));
    player.CreateFixture(this.createCircleShape(25));


};

gameState.update = function () {
    var controller = this.getController('standard');
    if (controller.UP.isPressed) {
        player.ApplyImpulse({x: 0, y: 6}, player.GetWorldCenter());
    }
    if (controller.RIGHT.isPressed) {
        player.SetLinearVelocity({x: 5, y: 0});
    }
    if (controller.DOWN.isPressed) {
        player.SetLinearVelocity({x: 0, y: 5});
    }
    if (controller.LEFT.isPressed) {
        player.SetLinearVelocity({x: -5, y: 0});
    }
};
