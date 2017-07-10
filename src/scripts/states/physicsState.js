var physicsState = new Extasy.state('physicsState');
var circle;
var rectangle;
var polygon;
var mainCamera;
var camera1;
var camera2;
var camera3;
var bg;

physicsState.create = function () {

    this.enablePhysics();
    //this.enablePhysicsDebugMode();

    var pattern = this.createPattern(this.getAsset('stone'), 'repeat');

    bg = this.addRectangle(10, 10, 380, 280);


    circle = this.addCircle(100, 100, 25);
    circle.fill(pattern);
    circle.body = this.createBody(circle.dx + circle.dw * 0.5, circle.dy + circle.dh * 0.5, 'dynamic');
    circle.body.CreateFixture(this.createCircleShape(circle.dw / 2));


    rectangle = this.addRectangle(200, 150, 50, 50);
    rectangle.fill(pattern);
    rectangle.body = this.createBody(rectangle.dx + rectangle.dw * 0.5, rectangle.dy + rectangle.dh * 0.5, 'dynamic');
    rectangle.body.CreateFixture(this.createRectangleShape(rectangle.dw, rectangle.dh));


    polygon = this.addPolygon(70, 200, [
        {x:  50, y:  0},
        {x: 100, y: 25},
        {x:  50, y: 50},
        {x:   0, y: 50}
    ]);
    polygon.fill(pattern);
    polygon.body = this.createBody(polygon.dx + polygon.dw * 0.5, polygon.dy + polygon.dh * 0.5, 'dynamic');
    polygon.body.CreateFixture(this.createPolygonShape([
        {x:   0 - polygon.dw / 2, y:  0 - polygon.dh / 2},
        {x:  50 - polygon.dw / 2, y:  0 - polygon.dh / 2},
        {x: 100 - polygon.dw / 2, y: 25 - polygon.dh / 2},
        {x:  50 - polygon.dw / 2, y: 50 - polygon.dh / 2},
        {x:   0 - polygon.dw / 2, y: 50 - polygon.dh / 2}
    ]));

    

    this.addEdge(10, 10, 10, 290);
    this.addEdge(10, 290, 390, 290);
    this.addEdge(390, 290, 390, 10);
    this.addEdge(390, 10, 10, 10);


    circle.body.ApplyImpulse({'x': 100 / 30, 'y': 600 / 30}, circle.body.GetWorldCenter());
    rectangle.body.ApplyImpulse({'x': 3 / 30, 'y': 3 / 30}, polygon.body.GetWorldCenter());

    mainCamera = this.getCamera('main');
    camera1 = this.addCamera('camera1');
    camera2 = this.addCamera('camera2');
    camera3 = this.addCamera('camera3');

    this.switchCamera('camera3');

    this.activeCamera().setLerp(10);    
};

physicsState.update = function () {

    circle.dx = circle.body.GetPosition().x * 30 - circle.dw / 2;
    circle.dy = circle.body.GetPosition().y * 30 - circle.dh / 2;
    circle.angle = this.game.physicsManager.toDegrees(circle.body.GetAngle());

    rectangle.dx = rectangle.body.GetPosition().x * 30 - rectangle.dw / 2;
    rectangle.dy = rectangle.body.GetPosition().y * 30 - rectangle.dh / 2;
    rectangle.angle = this.game.physicsManager.toDegrees(rectangle.body.GetAngle());

    polygon.dx = polygon.body.GetPosition().x * 30 - polygon.dw / 2;
    polygon.dy = polygon.body.GetPosition().y * 30 - polygon.dh / 2;
    polygon.angle = this.game.physicsManager.toDegrees(polygon.body.GetAngle());

    rectangle.body.m_angularVelocity = 40;
    
    camera1.follow(circle);
    camera2.follow(rectangle);
    camera3.follow(polygon);


    var camera = this.activeCamera();

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
    if (this.pressing('num1')) {
        this.switchCamera('camera1');
    }
    if (this.pressing('num2')) {
        this.switchCamera('camera2');
    }
    if (this.pressing('num3')) {
        this.switchCamera('camera3');
    }

    
};
