var collisionOnlyState = new Extasy.state('collisionOnlyState');
var self;

collisionOnlyState.create = function () {
    self = collisionOnlyState;
    self.enablePhysics();
    self.enablePhysicsDebugMode();

    // camera
    self.camera = self.activeCamera();

    // audio
    self.tic = self.addAudio('tic', 0.2, false);

    // circle
    self.circle = self.addCircle(100, 100, 25);
    self.circle.body = self.createBody(self.circle.dx + self.circle.dw * 0.5, self.circle.dy + self.circle.dh * 0.5, 'dynamic');
    self.circle.fixture = self.circle.body.CreateFixture(self.createCircleShape(self.circle.dw / 2));
    self.circle.fixture.SetSensor(true);
    self.circle.body.SetSleepingAllowed(false);

    // rectabgle
    self.rectangle = self.addRectangle(200, 150, 50, 50);
    self.rectangle.body = self.createBody(self.rectangle.dx + self.rectangle.dw * 0.5, self.rectangle.dy + self.rectangle.dh * 0.5, 'dynamic');
    self.rectangle.fixture = self.rectangle.body.CreateFixture(self.createRectangleShape(self.rectangle.dw, self.rectangle.dh));
    self.rectangle.fixture.SetSensor(true);
    self.rectangle.body.SetSleepingAllowed(false);

    // contact listener
    self.contactListener = self.addContactListener();
    self.contactListener.BeginContact = function() {
        self.tic.currentTime = 0;
        self.tic.play();
    };

    console.log(self.currentState().name);
};

collisionOnlyState.update = function () {

    // cursor
    if (arrowUp.touched) {
        self.circle.translate(0, -180);
        self.circle.body.SetPosition({x: (self.circle.dx + self.circle.dw / 2) / 30 , y: (self.circle.dy  + self.circle.dh / 2) / 30});
    }
    if (arrowRight.touched) {
        self.circle.translate(180, 0);
        self.circle.body.SetPosition({x: (self.circle.dx + self.circle.dw / 2) / 30 , y: (self.circle.dy  + self.circle.dh / 2) / 30});
    }
    if (arrowDown.touched) {
        self.circle.translate(0, 180);
        self.circle.body.SetPosition({x: (self.circle.dx + self.circle.dw / 2) / 30 , y: (self.circle.dy  + self.circle.dh / 2) / 30});
    }
    if (arrowLeft.touched) {
        self.circle.translate(-180, 0);
        self.circle.body.SetPosition({x: (self.circle.dx + self.circle.dw / 2) / 30 , y: (self.circle.dy  + self.circle.dh / 2) / 30});
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

};
