var collisionOnlyState = new Extasy.state('collisionOnlyState');
var circle;
var rectangle;
var contactListener;

collisionOnlyState.create = function () {
    this.enablePhysics();
    this.enablePhysicsDebugMode();

    circle = this.addCircle(100, 100, 25);
    circle.fill('transparent');
    circle.body = this.createBody(circle.dx + circle.dw * 0.5, circle.dy + circle.dh * 0.5, 'dynamic');
    circle.fixture = circle.body.CreateFixture(this.createCircleShape(circle.dw / 2));
    circle.fixture.SetSensor(true);

    rectangle = this.addRectangle(200, 150, 50, 50);
    rectangle.body = this.createBody(rectangle.dx + rectangle.dw * 0.5, rectangle.dy + rectangle.dh * 0.5, 'dynamic');
    rectangle.body.SetSleepingAllowed(false);
    rectangle.fixture = rectangle.body.CreateFixture(this.createRectangleShape(rectangle.dw, rectangle.dh));

    contactListener = this.addContactListener();
    contactListener.BeginContact = function(contact) {
            var BodyA = contact.GetFixtureA().GetBody().GetUserData();
            var BodyB = contact.GetFixtureB().GetBody().GetUserData();
            console.log(BodyA, BodyB);
    };
    console.log(contactListener);
};

collisionOnlyState.update = function () {

    if (this.pressing('ArrowUp')) {
        circle.translate(0, -180);
        circle.body.SetPosition({x: (circle.dx + circle.dw / 2) / 30 , y: (circle.dy  + circle.dh / 2) / 30});
    }
    if (this.pressing('ArrowRight')) {
        circle.translate(180, 0);
        circle.body.SetPosition({x: (circle.dx + circle.dw / 2) / 30 , y: (circle.dy  + circle.dh / 2) / 30});
    }
    if (this.pressing('ArrowDown')) {
        circle.translate(0, 180);
        circle.body.SetPosition({x: (circle.dx + circle.dw / 2) / 30 , y: (circle.dy  + circle.dh / 2) / 30});
    }
    if (this.pressing('ArrowLeft')) {
        circle.translate(-180, 0);
        circle.body.SetPosition({x: (circle.dx + circle.dw / 2) / 30 , y: (circle.dy  + circle.dh / 2) / 30});
    }

};
