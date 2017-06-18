var audioState = new Extasy.state('audioState');
var grass;
var tank;
var shot;
var motor;
var canFire = true;

audioState.create = function () {   

    shot = this.addAudio('shot', 0.2, false);
    motor = this.addAudio('motor', 0.15, true);
    motor.play();

    grass = this.addTileSprite(this.getActiveCamera().x, this.getActiveCamera().y, 400, 400, 'grass');
    
    tank = this.addSprite(200, 200, 'tanks');
    tank.addAnimation('drive', [0, 1, 2, 3, 4, 5, 6], 100);

    this.getActiveCamera().setLerp(10);  
};

audioState.update = function () {

    if (motor.currentTime > motor.duration - 3) {
        motor.currentTime = 1;
        motor.play();
    }
    motor.volume = 0.15;
    var camera = this.getActiveCamera();

    if (this.pressing('ArrowUp')) {
        tank.play('drive');
        var currentAngle = this.toRadians((tank.angle - 0));
        var cos = Math.cos(currentAngle);
        var sin = Math.sin(currentAngle);
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
        var currentAngle = this.toRadians((tank.angle - 0));
        var cos = Math.cos(currentAngle);
        var sin = Math.sin(currentAngle);
        tank.translate(-cos  * 200, -sin * 200);
        motor.volume = 0.4;
    }
    if (this.pressing('ArrowLeft')) {
        tank.play('drive');
        tank.angle -= 3;
        motor.volume = 0.4;
    }

    if (this.pressing('h')) {
        camera.zoomIn(60);
    }
    if (this.pressing('g')) {
        camera.zoomOut(60);
    }

    if (this.pressing('a')) {
        camera.rotate(-180);
    }
    if (this.pressing('s')) {
        camera.rotate(180);
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

    //camera.setAngle(-tank.angle - 90);
    camera.follow(tank);

};
