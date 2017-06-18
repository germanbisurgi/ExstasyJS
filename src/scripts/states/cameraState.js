var cameraState = new Extasy.state('cameraState');
var grass;
var tank;

cameraState.create = function () {
    grass = this.addTileSprite(this.getActiveCamera().x, this.getActiveCamera().y, 400, 400, 'grass');
    
    tank = this.addSprite(200, 200, 'tanks');
    tank.addAnimation('drive', [0, 1, 2, 3, 4, 5, 6], 100);

    this.getActiveCamera().setLerp(10);  
};

cameraState.update = function () {

    var camera = this.getActiveCamera();

    if (this.keyPressed('ArrowUp')) {
        tank.play('drive');
        var currentAngle = this.toRadians((tank.angle - 0));
        var cos = Math.cos(currentAngle);
        var sin = Math.sin(currentAngle);
        tank.translate(cos  * 200, sin * 200);
    }
    if (this.keyPressed('ArrowRight')) {
        tank.play('drive');
        tank.angle += 3;
    }
    if (this.keyPressed('ArrowDown')) {
        tank.play('drive');
        var currentAngle = this.toRadians((tank.angle - 0));
        var cos = Math.cos(currentAngle);
        var sin = Math.sin(currentAngle);
        tank.translate(-cos  * 200, -sin * 200);
    }
    if (this.keyPressed('ArrowLeft')) {
        tank.play('drive');
        tank.angle -= 3;
    }

    if (this.keyPressed('h')) {
        camera.zoomIn(60);
    }
    if (this.keyPressed('g')) {
        camera.zoomOut(60);
    }

    if (this.keyPressed('a')) {
        camera.rotate(-180);
    }
    if (this.keyPressed('s')) {
        camera.rotate(180);
    }

    //camera.setAngle(-tank.angle - 90);
    camera.follow(tank);

};
