var timeState = new Extasy.state('timeState');
var player;
var myTimer;
var mountains;
var text;
var counter = 0;

timeState.create = function () {
    mountains = this.addTileSprite(0, 0, 400, 200, 'mountains');
    player = this.addSprite(0, 100, 'player');
    player.addAnimation('left', [13, 14, 13, 12], 100);
    text = this.addText(15, 15, 500, 200,'Press P and S to stop a start the time', false);
    text = this.addText(15, 60, 500, 200, 'seconds: ' + String(counter), false);
    myTimer = this.addTimer(1000, true, function() {
        counter++;
        text.setText('seconds: ' + String(counter));
    });
};

timeState.update = function () {
    mountains.scroll('left', 20);
    player.rotate(60);
    player.translate(5, 1);
    player.play('left');
    if (this.pressing('p')) {this.pause();}
    if (this.pressing('s')) {this.continue();}

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
