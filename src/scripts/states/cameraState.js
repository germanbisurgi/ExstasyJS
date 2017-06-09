var cameraState = new Extasy.state('cameraState');
var grass;
var tank;

cameraState.create = function () {
    grass = this.addTileSprite(this.getActiveCamera().x, this.getActiveCamera().y, 400, 400, 'grass');
    
    tank = this.addSprite(200, 200, 'tanks');
    tank.addAnimation('forward', [0, 1, 2, 3, 4, 5, 6], 5);
    tank.addAnimation('backward', [6, 5, 4, 3, 2, 1, 0], 5);

    this.getActiveCamera().setLerp(10);  
};

cameraState.update = function () {

    var camera = this.getActiveCamera();
    var controller = this.getController('standard');

    if (controller.UP.isPressed) {
        tank.play('forward');
        var currentAngle = this.toRadians((tank.angle - 0));
        var cos = Math.cos(currentAngle);
        var sin = Math.sin(currentAngle);
        tank.translate(cos  * 200, sin * 200);
    }
    if (controller.RIGHT.isPressed) {
        tank.play('backward');
        tank.angle += 3;
    }
    if (controller.DOWN.isPressed) {
        tank.play('backward');
        var currentAngle = this.toRadians((tank.angle - 0));
        var cos = Math.cos(currentAngle);
        var sin = Math.sin(currentAngle);
        tank.translate(-cos  * 200, -sin * 200);
    }
    if (controller.LEFT.isPressed) {
        tank.play('forward');
        tank.angle -= 3;
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

    //camera.setAngle(-tank.angle - 90);
    camera.follow(tank);

};
