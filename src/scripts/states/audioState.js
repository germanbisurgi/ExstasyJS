var audioState = new Extasy.state('audioState');
var grass;
var tank;
var shot;
var motor;
var canFire = true;
var currentAngle;
var cos;
var sin;
var camera;

audioState.create = function () {
    camera = this.activeCamera();
    camera.setLerp(10);  

    shot = this.addAudio('shot', 0.2, false);
    motor = this.addAudio('motor', 0.15, true);
    motor.play();

    grass = this.addTileSprite(camera.x, camera.y, 400, 400, 'grass');
    
    tank = this.addSprite(200, 200, 'tanks');
    tank.addAnimation('drive', [0, 1, 2, 3, 4, 5, 6], 100);
};

audioState.update = function () {

    if (motor.currentTime > motor.duration - 3) {
        motor.currentTime = 1;
        motor.play();
    }
    motor.volume = 0.15;

    if (this.pressing('ArrowUp')) {
        tank.play('drive');
        currentAngle = this.toRadians((tank.angle - 0));
        cos = Math.cos(currentAngle);
        sin = Math.sin(currentAngle);
        tank.translate(cos  * 200, sin * 200);
        motor.volume = 0.4;
        motor.playbackRate = 1.5;
    }
    if (this.pressing('ArrowRight')) {
        tank.play('drive');
        tank.angle += 3;
        motor.volume = 0.4;
    }
    if (this.pressing('ArrowDown')) {
        tank.play('drive');
        currentAngle = this.toRadians((tank.angle - 0));
        cos = Math.cos(currentAngle);
        sin = Math.sin(currentAngle);
        tank.translate(-cos  * 200, -sin * 200);
        motor.volume = 0.4;
    }
    if (this.pressing('ArrowLeft')) {
        tank.play('drive');
        tank.angle -= 3;
        motor.volume = 0.4;
    }

    if (this.pressing('Spacebar')) {
        if (canFire) {
            canFire = false;
            shot.currentTime = 0;
            shot.play();
            setTimeout(function () {
                canFire = true;
            }, 1500);
        }
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

    //camera.setAngle(-tank.angle - 90);
    camera.follow(tank);

};
