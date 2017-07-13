var cameraState = new Extasy.state('cameraState');
var camera;
var grass;
var tank;
var currentAngle;
var cos;
var sin;
var text;
var style = {
        font: "20px Helvetica",
        fillStyle: "purple",
        textAlign: "start",
        textBaseline: "top",
        strokeStyle: "black",
        lineWidth: 0,
        lineHeight: 1.5,
    };

cameraState.create = function () {



    camera = this.activeCamera();
    camera.setLerp(10); 
    grass = this.addTileSprite(camera.x, camera.y, 400, 400, 'grass');
    tank = this.addSprite(200, 200, 'tanks');
    tank.addAnimation('drive', [0, 1, 2, 3, 4, 5, 6], 100);

    
};

cameraState.update = function () {

    if (this.pressing('ArrowUp')) {
        tank.play('drive');
        currentAngle = this.toRadians((tank.angle - 0));
        cos = Math.cos(currentAngle);
        sin = Math.sin(currentAngle);
        tank.translate(cos  * 200, sin * 200);
    }
    if (this.pressing('ArrowRight')) {
        tank.play('drive');
        tank.angle += 3;
    }
    if (this.pressing('ArrowDown')) {
        tank.play('drive');
        currentAngle = this.toRadians((tank.angle - 0));
        cos = Math.cos(currentAngle);
        sin = Math.sin(currentAngle);
        tank.translate(-cos  * 200, -sin * 200);
    }
    if (this.pressing('ArrowLeft')) {
        tank.play('drive');
        tank.angle -= 3;
    }

    // camera
    if (buttonUp.touched) {
        camera.zoomIn(60);
    }
    if (buttonRight.touched) {
        camera.rotate(-180);
    }
    if (buttonDown.touched) {
        camera.zoomOut(60);
    }
    if (buttonLeft.touched) {
        camera.rotate(180);
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
