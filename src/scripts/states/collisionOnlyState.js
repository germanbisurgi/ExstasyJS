var collisionOnlyState = new Extasy.state('collisionOnlyState');
var circle;
var rectangle;
var contactListener;
var shot;
var buttons;
var arrows;
var arrowUp;
var arrowRight;
var arrowDown;
var arrowLeft;


collisionOnlyState.create = function () {
    this.enablePhysics();
    this.enablePhysicsDebugMode();

    // joystick
    buttons = this.addTexture(this.viewportW() - 115, this.viewportH() - 115, 'buttons');
    arrows = this.addTexture(this.viewportX() + 15, this.viewportH() - 115, 'arrows');
    arrowUp = this.addCircle(this.viewportX() + 50, this.viewportH() - 112, 15);
    arrowRight = this.addCircle(this.viewportX() + 82, this.viewportH() - 80, 15);
    arrowDown = this.addCircle(this.viewportX() + 50, this.viewportH() - 48, 15);
    arrowLeft = this.addCircle(this.viewportX() + 18, this.viewportH() - 80, 15);

    this.addCircle(this.viewportW() - 80, this.viewportH() - 112, 15);
    this.addCircle(this.viewportW() - 112, this.viewportH() - 80, 15);
    this.addCircle(this.viewportW() - 80, this.viewportH() - 48, 15);
    this.addCircle(this.viewportW() - 48, this.viewportH() - 80, 15);

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


    if (this.touching(arrowUp)) {
        circle.translate(0, -180);
        circle.body.SetPosition({x: (circle.dx + circle.dw / 2) / 30 , y: (circle.dy  + circle.dh / 2) / 30});
    }
    if (this.touching(arrowRight)) {
        circle.translate(180, 0);
        circle.body.SetPosition({x: (circle.dx + circle.dw / 2) / 30 , y: (circle.dy  + circle.dh / 2) / 30});
    }
    if (this.touching(arrowDown)) {
        circle.translate(0, 180);
        circle.body.SetPosition({x: (circle.dx + circle.dw / 2) / 30 , y: (circle.dy  + circle.dh / 2) / 30});
    }
    if (this.touching(arrowLeft)) {
        circle.translate(-180, 0);
        circle.body.SetPosition({x: (circle.dx + circle.dw / 2) / 30 , y: (circle.dy  + circle.dh / 2) / 30});
    }

};
