var physicsState = new Extasy.state('physicsState');
var body;
var fixture;
var img1;

var body2;
var fixture2;
var img2;

var body3;
var fixture3;
var img3;

physicsState.create = function () {
    img1 = this.addCircle(100, 100, 25);
    body = this.game.physicsManager.createBody(img1.cx, img1.cy, 'dynamic');
    fixture = this.game.physicsManager.createCircle(25);
    body.CreateFixture(fixture);

    img2 = this.addRectangle(200, 150, 50, 50);
    body2 = this.game.physicsManager.createBody(img2.cx, img2.cy, 'dynamic');
    fixture2 = this.game.physicsManager.createRectangle(img2.dw, img2.dh);
    body2.CreateFixture(fixture2);

    img3 = this.addPolygon(0, 0, [
        {x: 50, y: 0},
        {x: 100, y: 25},
        {x: 50, y: 50},
        {x: 0, y: 50}
    ]);
    body3 = this.game.physicsManager.createBody(img3.cx, img3.cy, 'dynamic');
    fixture3 = this.game.physicsManager.createPolygon([
        {x: 0, y: 0},
        {x: 50/30, y: 0/30},
        {x: 100/30, y: 25/30},
        {x: 50/30, y: 50/30},
        {x: 0/30, y: 50/30}
    ]);
    body3.CreateFixture(fixture3);
    console.log(img3);

    body.ApplyImpulse({'x': 240/30, 'y': 160/30}, body.GetWorldCenter());
    body3.ApplyImpulse({'x': 3/30, 'y': 3/30}, body.GetWorldCenter());
};

physicsState.update = function () {
    img1.dx = body.GetPosition().x*30-img1.dw/2;
    img1.dy = body.GetPosition().y*30-img1.dh/2;
    img1.angle = this.game.physicsManager.toDegrees(body.GetAngle());

    img2.dx = body2.GetPosition().x*30-img2.dw/2;
    img2.dy = body2.GetPosition().y*30-img2.dh/2;
    img2.angle = this.game.physicsManager.toDegrees(body2.GetAngle());

    img3.dx = body3.GetPosition().x*30-img3.dw/2;
    img3.dy = body3.GetPosition().y*30-img3.dh/2;
    console.log(img3.dx, img3.dy, body3.GetPosition().x*30, body3.GetPosition().y*30);
    img3.angle = this.game.physicsManager.toDegrees(body3.GetAngle());


    //body.ApplyImpulse({'x': 1/30, 'y': 1/30}, body.GetWorldCenter());
    //body.ApplyForce({'x': 0/30, 'y': 5/30}, body.GetWorldCenter());
    //body.ApplyTorque(1);
    body2.m_angularVelocity = 1;
};
