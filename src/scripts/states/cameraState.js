var cameraState = new Extasy.state('cameraState');
var camera;
var grass;
var tank;
var currentAngle;
var cos;
var sin;

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

    //camera.setAngle(-tank.angle - 90);
    camera.follow(tank);

};
