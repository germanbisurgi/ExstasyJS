var cameraState = new Extasy.state('cameraState');
var self;

cameraState.create = function () {
    self = cameraState;

    self.camera = self.activeCamera();
    self.camera.setLerp(10); 
    self.grass = self.addTileSprite(self.camera.x, self.camera.y, 400, 400, 'grass');
    self.tank = self.addSprite(200, 200, 'tanks');
    self.tank.addAnimation('drive', [0, 1, 2, 3, 4, 5, 6], 100);

    console.log(self.currentState().name);
};

cameraState.update = function () {

    if (self.pressing('ArrowUp')) {
        self.tank.play('drive');
        self.currentAngle = self.toRadians((self.tank.angle - 0));
        self.cos = Math.cos(self.currentAngle);
        self.sin = Math.sin(self.currentAngle);
        self.tank.translate(self.cos  * 200, self.sin * 200);
    }
    if (self.pressing('ArrowRight')) {
        self.tank.play('drive');
        self.tank.angle += 3;
    }
    if (self.pressing('ArrowDown')) {
        self.tank.play('drive');
        self.currentAngle = self.toRadians((self.tank.angle - 0));
        self.cos = Math.cos(self.currentAngle);
        self.sin = Math.sin(self.currentAngle);
        self.tank.translate(-self.cos  * 200, -self.sin * 200);
    }
    if (self.pressing('ArrowLeft')) {
        self.tank.play('drive');
        self.tank.angle -= 3;
    }

    // camera
    if (buttonUp.touched) {
        self.camera.zoomIn(60);
    }
    if (buttonRight.touched) {
        self.camera.rotate(-180);
    }
    if (buttonDown.touched) {
        self.camera.zoomOut(60);
    }
    if (buttonLeft.touched) {
        self.camera.rotate(180);
    }



    //camera.setAngle(-tank.angle - 90);
    self.camera.follow(self.tank);

};
