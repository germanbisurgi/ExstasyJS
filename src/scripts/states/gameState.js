var gameState = new Extasy.state('gameState');
var player1;
var player2;
var player3;

gameState.create = function () {
    this.enablePhysics();
    this.enablePhysicsDebugMode();
    this.setGravity(0, 9.8);

    this.addEdge(10, 10, 10, 290);
    this.addEdge(10, 290, 390, 290);
    this.addEdge(390, 290, 390, 10);
    this.addEdge(390, 10, 10, 10);

    player1 = this.createBody(50, 50, 'dynamic');
    player1.CreateFixture(this.createRectangleShape(25, 25));

    player2 = this.createBody(150, 50, 'dynamic');
    player2.CreateFixture(this.createRectangleShape(25, 25));

    player3 = this.createBody(250, 50, 'dynamic');
    player3.CreateFixture(this.createRectangleShape(25, 25));



};

gameState.update = function () {

    console.log(player2.GetWorldPoint({
        x: player2.GetWorldCenter().x * 30,
        y: player2.GetWorldCenter().y * 30
    }));

    //console.log(player2.GetWorldCenter());

    if (this.pressing('ArrowUp')) {
        player1.ApplyImpulse({x: 0, y: -4}, player1.GetWorldCenter());
        player2.ApplyForce({x: 0, y: -10 * player2.GetMass() * 30}, player2.GetWorldCenter());
        player3.SetLinearVelocity({x: 0, y: -10}, player3.GetWorldCenter());
    }
    if (this.pressing('ArrowRight')) {
       player1.ApplyImpulse({x: 2, y: 0}, player1.GetWorldCenter());
    }
    if (this.pressing('ArrowDown')) {
        player1.ApplyImpulse({x: 0, y: 5}, player1.GetWorldCenter());
    }
    if (this.pressing('ArrowLeft')) {
        player1.ApplyImpulse({x: -2, y: 0}, player1.GetWorldCenter());
    }

        // states
    if (nextState.touched) {
        var nState;
        var states = this.listStates();
        var currentState = this.currentState();
        var stateIndex = states.indexOf(currentState);
        stateIndex++;
        if (stateIndex < states.length) {
            nState = states[stateIndex];
        } else {
            nState = states[0];
        }
        
        this.switchState(nState.name);
    }

    if (prevState.touched) {
        var pState;
        var states = this.listStates();
        var currentState = this.currentState();
        var stateIndex = states.indexOf(currentState);
        stateIndex--;
        if (stateIndex < 0) {
            pState = states[states.length];
        } else {
            pState = states[stateIndex - 1];
        }
        this.switchState(pState.name);
    }
};
