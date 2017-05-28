var physicsState = new Extasy.state('physicsState');
var fixture1;
var circle;
var fixture2;
var rectangle;
var fixture3;
var polygon;

var mainCamera;
var camera1;
var camera2;
var camera3;

physicsState.create = function () {

    var pattern = this.createPattern(this.getAsset('stone'), 'repeat');

    circle = this.addCircle(100, 100, 25);
    circle.fill(pattern);
    circle.body = this.createBody(circle.cx, circle.cy, 'dynamic');
    circle.body.CreateFixture(this.createCircleShape(circle.dw / 2));


    rectangle = this.addRectangle(200, 150, 50, 50);
    rectangle.fill(pattern);
    rectangle.body = this.createBody(rectangle.cx, rectangle.cy, 'dynamic');
    rectangle.body.CreateFixture(this.createRectangleShape(rectangle.dw, rectangle.dh));


    polygon = this.addPolygon(70, 200, [
        {x:  50, y:  0},
        {x: 100, y: 25},
        {x:  50, y: 50},
        {x:   0, y: 50}
    ]);
    polygon.fill(pattern);
    polygon.body = this.createBody(polygon.cx, polygon.cy, 'dynamic');
    polygon.body.CreateFixture(this.createPolygonShape([
        {x:   0 - polygon.dw/2, y:  0 - polygon.dh/2},
        {x:  50 - polygon.dw/2, y:  0 - polygon.dh/2},
        {x: 100 - polygon.dw/2, y: 25 - polygon.dh/2},
        {x:  50 - polygon.dw/2, y: 50 - polygon.dh/2},
        {x:   0 - polygon.dw/2, y: 50 - polygon.dh/2}
    ]));


    this.addEdge(10, 10, 10, 290);
    this.addEdge(10, 290, 390, 290);
    this.addEdge(390, 290, 390, 10);
    this.addEdge(390, 10, 10, 10);


    circle.body.ApplyImpulse({'x': 100/30, 'y': 600/30}, circle.body.GetWorldCenter());
    rectangle.body.ApplyImpulse({'x': 3/30, 'y': 3/30}, polygon.body.GetWorldCenter());

    mainCamera = this.getCamera('main');
    camera1 = this.addCamera('camera1');
    camera2 = this.addCamera('camera2');
    camera3 = this.addCamera('camera3');

    console.log(camera1);
    console.log(camera2);

    this.switchCamera('camera3');

    this.getActiveCamera().setLerp(10);    
};

physicsState.update = function () {

    circle.dx = circle.body.GetPosition().x*30-circle.dw/2;
    circle.dy = circle.body.GetPosition().y*30-circle.dh/2;
    circle.angle = this.game.physicsManager.toDegrees(circle.body.GetAngle());

    rectangle.dx = rectangle.body.GetPosition().x*30-rectangle.dw/2;
    rectangle.dy = rectangle.body.GetPosition().y*30-rectangle.dh/2;
    rectangle.angle = this.game.physicsManager.toDegrees(rectangle.body.GetAngle());

    polygon.dx = polygon.body.GetPosition().x*30-polygon.dw/2;
    polygon.dy = polygon.body.GetPosition().y*30-polygon.dh/2;
    polygon.angle = this.game.physicsManager.toDegrees(polygon.body.GetAngle());

    rectangle.body.m_angularVelocity = 40;
    
    camera1.follow(circle);
    camera2.follow(rectangle);
    camera3.follow(polygon);


    var camera = this.getActiveCamera();
    var controller = this.getController('standard');

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

    
};
