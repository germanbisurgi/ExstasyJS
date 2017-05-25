var physicsState = new Extasy.state('physicsState');

var body1;
var fixture1;
var img1;

var body2;
var fixture2;
var img2;

var body3;
var fixture3;
var img3;

var body4;
var fixture4;

physicsState.create = function () {

    var pattern = this.createPattern(this.getAsset('stone'), 'repeat');
    // Circle.
    img1 = this.addCircle(100, 100, 25);
    img1.fill(pattern);
    body1 = this.game.physicsManager.createBody(img1.cx, img1.cy, 'dynamic');
    fixture1 = this.game.physicsManager.createCircle(img1.dw / 2);
    body1.CreateFixture(fixture1);

    

    // Rectangle.
    img2 = this.addRectangle(200, 150, 50, 50);
    img2.fill(pattern);
    body2 = this.game.physicsManager.createBody(img2.cx, img2.cy, 'dynamic');
    fixture2 = this.game.physicsManager.createRectangle(img2.dw, img2.dh);
    body2.CreateFixture(fixture2);

    // Polygon.
    img3 = this.addPolygon(70, 200, [
        {x:  50, y:  0},
        {x: 100, y: 25},
        {x:  50, y: 50},
        {x:   0, y: 50}
    ]);
    img3.fill(pattern);
    body3 = this.game.physicsManager.createBody(img3.cx, img3.cy, 'dynamic');
    fixture3 = this.game.physicsManager.createPolygon([
        {x:   0 - img3.dw/2, y:  0 - img3.dh/2},
        {x:  50 - img3.dw/2, y:  0 - img3.dh/2},
        {x: 100 - img3.dw/2, y: 25 - img3.dh/2},
        {x:  50 - img3.dw/2, y: 50 - img3.dh/2},
        {x:   0 - img3.dw/2, y: 50 - img3.dh/2}
    ]);
    body3.CreateFixture(fixture3);

    this.addEdge(10, 10, 10, 290);
    this.addEdge(10, 290, 390, 290);
    this.addEdge(390, 290, 390, 10);
    this.addEdge(390, 10, 10, 10);


    body1.ApplyImpulse({'x': 100/30, 'y': 600/30}, body1.GetWorldCenter());
    body3.ApplyImpulse({'x': 3/30, 'y': 3/30}, body3.GetWorldCenter());
};

physicsState.update = function () {
    img1.dx = body1.GetPosition().x*30-img1.dw/2;
    img1.dy = body1.GetPosition().y*30-img1.dh/2;
    img1.angle = this.game.physicsManager.toDegrees(body1.GetAngle());

    img2.dx = body2.GetPosition().x*30-img2.dw/2;
    img2.dy = body2.GetPosition().y*30-img2.dh/2;
    img2.angle = this.game.physicsManager.toDegrees(body2.GetAngle());

    img3.dx = body3.GetPosition().x*30-img3.dw/2;
    img3.dy = body3.GetPosition().y*30-img3.dh/2;
    img3.angle = this.game.physicsManager.toDegrees(body3.GetAngle());


    //body.ApplyImpulse({'x': 1/30, 'y': 1/30}, body.GetWorldCenter());
    //body.ApplyForce({'x': 0/30, 'y': 5/30}, body.GetWorldCenter());
    //body.ApplyTorque(1);
    body2.m_angularVelocity = 40;
};
