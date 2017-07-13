var eventState = new Extasy.state('eventState');
var circle;
var pointer;
eventState.create = function () {

    circle = this.addCircle(50, 50, 25);
    pointer = this.addCircle(50, 50, 1);
    pointer.fill('transparent');
    

    this.addEvent('banana', function () {
        console.log('banana callback');
    });

    this.addEvent('apfel', function () {
        console.log('aüfel callback');
    });

    this.removeEvent('apfel');

    console.log(this.listEvents());
};

eventState.update = function () {
    pointer.dx = this.mouseX() - pointer.dw / 2;
    pointer.dy = this.mouseY() - pointer.dh / 2;

    if (this.circleCollision(pointer, circle)) {
        if (this.touched()) {
            circle.fill('yellow');
        } else {
            circle.fill('purple');
        }
        
    } else {
        circle.fill('green');
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
