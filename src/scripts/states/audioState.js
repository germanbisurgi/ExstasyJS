var audioState = new Extasy.state('audioState');
var self;

audioState.create = function () {
    self = audioState;
    self.canFire = true;

    self.camera = self.activeCamera();
    self.camera.setLerp(10);  

    self.shot = self.addAudio('shot', 0.2, false);
    self.motor = self.addAudio('motor', 0.15, true);
    self.motor.play();

    self.grass = self.addTileSprite(self.camera.x, self.camera.y, 400, 400, 'grass');
    
    self.tank = self.addSprite(200, 200, 'tanks');
    self.tank.addAnimation('drive', [0, 1, 2, 3, 4, 5, 6], 100);

    console.log(self.currentState().name);
};

audioState.update = function () {

    if (self.motor.currentTime > self.motor.duration - 3) {
        self.motor.currentTime = 1;
        self.motor.play();
    }
    self.motor.volume = 0.15;

    if (self.pressing('ArrowUp')) {
        self.tank.play('drive');
        self.currentAngle = self.toRadians((self.tank.angle - 0));
        self.cos = Math.cos(self.currentAngle);
        self.sin = Math.sin(self.currentAngle);
        self.tank.translate(self.cos  * 200, self.sin * 200);
        self.motor.volume = 0.4;
        self.motor.playbackRate = 1.5;
    }
    if (self.pressing('ArrowRight')) {
        self.tank.play('drive');
        self.tank.angle += 3;
        self.motor.volume = 0.4;
    }
    if (self.pressing('ArrowDown')) {
        self.tank.play('drive');
        self.currentAngle = self.toRadians((self.tank.angle - 0));
        self.cos = Math.cos(self.currentAngle);
        self.sin = Math.sin(self.currentAngle);
        self.tank.translate(-self.cos  * 200, -self.sin * 200);
        self.motor.volume = 0.4;
    }
    if (self.pressing('ArrowLeft')) {
        self.tank.play('drive');
        self.tank.angle -= 3;
        self.motor.volume = 0.4;
    }

    if (self.pressing('Spacebar')) {
        if (self.canFire) {
            self.canFire = false;
            self.shot.currentTime = 0;
            self.shot.play();
            setTimeout(function () {
                self.canFire = true;
            }, 1500);
        }
    }

    //self.camera.setAngle(-tank.angle - 90);
    self.camera.follow(self.tank);

};
