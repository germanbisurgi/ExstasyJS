var mathState = new Extasy.state('mathState');
var text;
var style = {
    font: "16px Helvetica",
    fillStyle: "purple",
    textAlign: "start",
    textBaseline: "top",
    strokeStyle: "black",
    lineWidth: 0,
    lineHeight: 1.8,
};

mathState.create = function () {
    text =  'random(1, 5): ' + this.random(1, 5) + '\n' +
            'randomInt(1, 5): ' + this.randomInt(1, 5) + '\n' +
            'randomChoice([\'banana\', \'apple\']): ' + this.randomChoice(['banana', 'apple']) + '\n' +
            'randomBool(): ' + this.randomBool() + '\n' +
            'limit(5, 1, 3): ' + this.limit(5, 1, 3) + '\n' +
            'between(5, 1, 3): ' + this.between(5, 1, 3);
    this.addText(15, 15, 500, 500, text, style);
};

mathState.update = function () {

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
