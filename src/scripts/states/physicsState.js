var physicsState = new Extasy.state('physicsState');
var self;

physicsState.create = function () {
 self = physicsState;
    self.canPause = true;
    self.canSelect = true;

    self.enablePhysics();
    //self.enablePhysicsDebugMode();

    self.pattern = self.createPattern(self.getAsset('stone'), 'repeat');

    self.bg = self.addRectangle(10, 10, 380, 280);


    self.circle = self.addCircle(100, 100, 25);
    self.circle.fill(self.pattern);
    self.circle.body = self.createBody(self.circle.dx + self.circle.dw * 0.5, self.circle.dy + self.circle.dh * 0.5, 'dynamic');
    self.circle.body.CreateFixture(self.createCircleShape(self.circle.dw / 2));


    self.rectangle = self.addRectangle(200, 150, 50, 50);
    self.rectangle.fill(self.pattern);
    self.rectangle.body = self.createBody(self.rectangle.dx + self.rectangle.dw * 0.5, self.rectangle.dy + self.rectangle.dh * 0.5, 'dynamic');
    self.rectangle.body.CreateFixture(self.createRectangleShape(self.rectangle.dw, self.rectangle.dh));


    self.polygon = self.addPolygon(70, 200, [
        {x:  50, y:  0},
        {x: 100, y: 25},
        {x:  50, y: 50},
        {x:   0, y: 50}
    ]);
    self.polygon.fill(self.pattern);
    self.polygon.body = self.createBody(self.polygon.dx + self.polygon.dw * 0.5, self.polygon.dy + self.polygon.dh * 0.5, 'dynamic');
    self.polygon.body.CreateFixture(self.createPolygonShape([
        {x:   0 - self.polygon.dw / 2, y:  0 - self.polygon.dh / 2},
        {x:  50 - self.polygon.dw / 2, y:  0 - self.polygon.dh / 2},
        {x: 100 - self.polygon.dw / 2, y: 25 - self.polygon.dh / 2},
        {x:  50 - self.polygon.dw / 2, y: 50 - self.polygon.dh / 2},
        {x:   0 - self.polygon.dw / 2, y: 50 - self.polygon.dh / 2}
    ]));

    

    self.addEdge(10, 10, 10, 290);
    self.addEdge(10, 290, 390, 290);
    self.addEdge(390, 290, 390, 10);
    self.addEdge(390, 10, 10, 10);


    self.mainCamera = self.getCamera('main');
    self.camera1 = self.addCamera('camera1');
    self.camera2 = self.addCamera('camera2');
    self.camera3 = self.addCamera('camera3');

    self.switchCamera('camera3');

    self.activeCamera().setLerp(10);

    self.tic = self.addAudio('tic', 0.1, false);

    // contact listener
    self.contactListener = self.addContactListener();
    self.contactListener.BeginContact = function() {
        self.tic.currentTime = 0;
        self.tic.play();
    };
};

physicsState.update = function () {

    self.circle.dx = self.circle.body.GetPosition().x * 30 - self.circle.dw / 2;
    self.circle.dy = self.circle.body.GetPosition().y * 30 - self.circle.dh / 2;
    self.circle.angle = self.game.physicsManager.toDegrees(self.circle.body.GetAngle());

    self.rectangle.dx = self.rectangle.body.GetPosition().x * 30 - self.rectangle.dw / 2;
    self.rectangle.dy = self.rectangle.body.GetPosition().y * 30 - self.rectangle.dh / 2;
    self.rectangle.angle = self.game.physicsManager.toDegrees(self.rectangle.body.GetAngle());

    self.polygon.dx = self.polygon.body.GetPosition().x * 30 - self.polygon.dw / 2;
    self.polygon.dy = self.polygon.body.GetPosition().y * 30 - self.polygon.dh / 2;
    self.polygon.angle = self.game.physicsManager.toDegrees(self.polygon.body.GetAngle());

    self.rectangle.body.m_angularVelocity = 0;
    
    self.camera1.follow(self.circle);
    self.camera2.follow(self.rectangle);
    self.camera3.follow(self.polygon);


    var camera = self.activeCamera();

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

    // camera
    if (arrowUp.touched) {
        self.rectangle.body.ApplyForce({'x': 0, 'y': -100}, self.rectangle.body.GetWorldCenter());
    }
    if (arrowRight.touched) {
        self.rectangle.body.ApplyForce({'x': 100, 'y': 0}, self.rectangle.body.GetWorldCenter());
    }
    if (arrowDown.touched) {
        self.rectangle.body.ApplyForce({'x':0, 'y': 100}, self.rectangle.body.GetWorldCenter());
    }
    if (arrowLeft.touched) {
        self.rectangle.body.ApplyForce({'x': -100, 'y': 0}, self.rectangle.body.GetWorldCenter());
    }


    // select
    if (buttonStart.touched && self.canSelect) {
        if (!self.isPaused()) {
            self.pause();
        } else {
            self.continue();
        }
        self.canSelect = false;
        setTimeout(function () {
            self.canSelect = true;
        }, 200);
    }

    // start
    if (buttonSelect.touched && self.canPause) {
        var activeCamera = self.activeCamera();
        console.log(activeCamera.name);
        switch(activeCamera.name) {
            case 'camera1':
                self.switchCamera('camera2');
                break;
            case 'camera2':
                self.switchCamera('camera3');
                break;
            case 'camera3':
                self.switchCamera('camera1');
                break;
        }
        self.canPause = false;
        setTimeout(function () {
            self.canPause = true;
        }, 200);
    }

    if (self.pressing('num1')) {
        self.switchCamera('camera1');
    }
    if (self.pressing('num2')) {
        self.switchCamera('camera2');
    }
    if (self.pressing('num3')) {
        self.switchCamera('camera3');
    }

    console.log(this.currentState().name);

    
};
