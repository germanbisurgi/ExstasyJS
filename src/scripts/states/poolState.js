var poolState = new Extasy.state('poolState');

poolState.create = function () {

    var circle1 = this.addCircle(this.randomInt(0, 500), this.randomInt(0, 300), this.randomInt(2, 5));
    var circle2 = this.addCircle(this.randomInt(0, 500), this.randomInt(0, 300), this.randomInt(2, 5));
    var circle3 = this.addCircle(this.randomInt(0, 500), this.randomInt(0, 300), this.randomInt(2, 5));

    var entities = this.listEntities();
    this.removeEntity(circle2);
    console.log(this.listEntities());
    console.log(this.game.entityManager.entities);

};

poolState.update = function () {
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
