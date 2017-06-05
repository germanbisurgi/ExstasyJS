var audioState = new Extasy.state('audioState');
var grass;
var tank;
var DEGTORAD = 0.0174532925199432957;
var shot;
var motor;
var canFire = true;

audioState.create = function () {   

    shot = this.getAsset('shot');
    shot.volume = 0.2;


    motor = this.getAsset('motor');
    //motor.loop = true;
    motor.play();

    grass = this.addTileSprite(this.getActiveCamera().x, this.getActiveCamera().y, 400, 400, 'grass');
    
    tank = this.addSprite(200, 200, 'tanks');
    tank.addAnimation('forward', [0, 1, 2, 3, 4, 5, 6], 5);
    tank.addAnimation('backward', [6, 5, 4, 3, 2, 1, 0], 5);

    this.getActiveCamera().setLerp(10);  
};

audioState.update = function () {

    if (motor.currentTime > motor.duration - 3) {
        motor.currentTime = 1;
        motor.play();
    }
    motor.volume = 0.15;
    var camera = this.getActiveCamera();
    var controller = this.getController('standard');

    if (controller.UP.isPressed) {
        tank.play('forward');
        var currentAngle = (tank.angle - 0) * DEGTORAD;
        var cos = Math.cos(currentAngle);
        var sin = Math.sin(currentAngle);
        tank.translate(cos  * 200, sin * 200);
        motor.volume = 0.4;
        motor.playbackRate = 1.5;
    }
    if (controller.RIGHT.isPressed) {
        tank.play('backward');
        tank.angle += 3;
        motor.volume = 0.4;
    }
    if (controller.DOWN.isPressed) {
        tank.play('backward');
        var currentAngle = (tank.angle - 0) * DEGTORAD;
        var cos = Math.cos(currentAngle);
        var sin = Math.sin(currentAngle);
        tank.translate(-cos  * 200, -sin * 200);
        motor.volume = 0.4;
    }
    if (controller.LEFT.isPressed) {
        tank.play('forward');
        tank.angle -= 3;
        motor.volume = 0.4;
    }

    if (controller.H.isPressed) {
        camera.zoomIn(60);
    }
    if (controller.G.isPressed) {
        camera.zoomOut(60);
    }

    if (controller.A.isPressed) {
        camera.rotate(-180);
    }
    if (controller.S.isPressed) {
        camera.rotate(180);
    }
    if (controller.SPACEBAR.isPressed) {
        if (canFire) {
            canFire = false;
            shot.currentTime = 0;
            shot.play();
            setTimeout(function () {
                canFire = true;
            }, 1500);
        }
    }

    //camera.setAngle(-tank.angle - 90);
    camera.follow(tank);

};
