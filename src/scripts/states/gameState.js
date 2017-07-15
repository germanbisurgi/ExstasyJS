var gameState = new Extasy.state('gameState');
var self;
gameState.create = function () {
    self = gameState;
    
    self.enablePhysics();
    self.enablePhysicsDebugMode();
    self.setGravity(0, 9.8);

    self.addEdge(10, 10, 10, 290);
    self.addEdge(10, 290, 390, 290);
    self.addEdge(390, 290, 390, 10);
    self.addEdge(390, 10, 10, 10);

    self.player1 = self.createBody(50, 50, 'dynamic');
    self.player1.CreateFixture(self.createRectangleShape(25, 25));

    self.player2 = self.createBody(150, 50, 'dynamic');
    self.player2.CreateFixture(self.createRectangleShape(25, 25));

    self.player3 = self.createBody(250, 50, 'dynamic');
    self.player3.CreateFixture(self.createRectangleShape(25, 25));

    console.log(self.currentState().name);
};

gameState.update = function () {

    /*console.log(self.player2.GetWorldPoint({
        x: self.player2.GetWorldCenter().x * 30,
        y: self.player2.GetWorldCenter().y * 30
    }));*/

    //console.log(self.player2.GetWorldCenter());

    if (self.pressing('ArrowUp')) {
        self.player1.ApplyImpulse({x: 0, y: -4}, self.player1.GetWorldCenter());
        self.player2.ApplyForce({x: 0, y: -10 * self.player2.GetMass() * 30}, self.player2.GetWorldCenter());
        self.player3.SetLinearVelocity({x: 0, y: -10}, self.player3.GetWorldCenter());
    }
    if (self.pressing('ArrowRight')) {
       self.player1.ApplyImpulse({x: 2, y: 0}, self.player1.GetWorldCenter());
    }
    if (self.pressing('ArrowDown')) {
        self.player1.ApplyImpulse({x: 0, y: 5}, self.player1.GetWorldCenter());
    }
    if (self.pressing('ArrowLeft')) {
        self.player1.ApplyImpulse({x: -2, y: 0}, self.player1.GetWorldCenter());
    }
       
};
