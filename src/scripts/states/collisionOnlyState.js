var collisionOnlyState = new Extasy.state('collisionOnlyState');
// entities
var circle;
var rectangle;

// collision
var contactListener;

// audio
var shot;


// camera
var camera;


collisionOnlyState.create = function () {
    this.enablePhysics();
    this.enablePhysicsDebugMode();

    // camera
    camera = this.activeCamera();

    // audio
    shot = this.addAudio('shot', 0.2, false);

    // circle
    circle = this.addCircle(100, 100, 25);
    circle.body = this.createBody(circle.dx + circle.dw * 0.5, circle.dy + circle.dh * 0.5, 'dynamic');
    circle.fixture = circle.body.CreateFixture(this.createCircleShape(circle.dw / 2));
    circle.fixture.SetSensor(true);
    circle.body.SetSleepingAllowed(false);

    // rectabgle
    rectangle = this.addRectangle(200, 150, 50, 50);
    rectangle.body = this.createBody(rectangle.dx + rectangle.dw * 0.5, rectangle.dy + rectangle.dh * 0.5, 'dynamic');
    rectangle.fixture = rectangle.body.CreateFixture(this.createRectangleShape(rectangle.dw, rectangle.dh));
    rectangle.fixture.SetSensor(true);
    rectangle.body.SetSleepingAllowed(false);

    // contact listener
    contactListener = this.addContactListener();
    contactListener.BeginContact = function(contact) {
        shot.currentTime = 0;
        shot.play();
    };
    contactListener.EndContact = function(contact) {
        shot.currentTime = 0;
        shot.play();
    };
};

collisionOnlyState.update = function () {

    // cursor
    if (arrowUp.touched) {
        circle.translate(0, -180);
        circle.body.SetPosition({x: (circle.dx + circle.dw / 2) / 30 , y: (circle.dy  + circle.dh / 2) / 30});
    }
    if (arrowRight.touched) {
        circle.translate(180, 0);
        circle.body.SetPosition({x: (circle.dx + circle.dw / 2) / 30 , y: (circle.dy  + circle.dh / 2) / 30});
    }
    if (arrowDown.touched) {
        circle.translate(0, 180);
        circle.body.SetPosition({x: (circle.dx + circle.dw / 2) / 30 , y: (circle.dy  + circle.dh / 2) / 30});
    }
    if (arrowLeft.touched) {
        circle.translate(-180, 0);
        circle.body.SetPosition({x: (circle.dx + circle.dw / 2) / 30 , y: (circle.dy  + circle.dh / 2) / 30});
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

};
