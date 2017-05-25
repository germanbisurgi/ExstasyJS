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

var body4;
var fixture4;

physicsState.create = function () {
    img1 = this.addCircle(100, 100, 25);
    body = this.game.physicsManager.createBody(img1.cx, img1.cy, 'dynamic');
    fixture = this.game.physicsManager.createCircle(25);
    body.CreateFixture(fixture);

    img2 = this.addRectangle(200, 150, 50, 50);
    body2 = this.game.physicsManager.createBody(img2.cx, img2.cy, 'dynamic');
    fixture2 = this.game.physicsManager.createRectangle(img2.dw, img2.dh);
    body2.CreateFixture(fixture2);

    img3 = this.addPolygon(70, 200, [
        {x:  50, y:  0},
        {x: 100, y: 25},
        {x:  50, y: 50},
        {x:   0, y: 50}
    ]);
    body3 = this.game.physicsManager.createBody(img3.cx, img3.cy, 'dynamic');
    fixture3 = this.game.physicsManager.createPolygon([
        {x:   0 - img3.dw/2, y:  0 - img3.dh/2},
        {x:  50 - img3.dw/2, y:  0 - img3.dh/2},
        {x: 100 - img3.dw/2, y: 25 - img3.dh/2},
        {x:  50 - img3.dw/2, y: 50 - img3.dh/2},
        {x:   0 - img3.dw/2, y: 50 - img3.dh/2}
    ]);
    body3.CreateFixture(fixture3);

    body4 = this.game.physicsManager.createBody(50, 50, 'static');
    fixture4 = this.game.physicsManager.createEdge(0, 0, 50, 0);
    body4.CreateFixture(fixture4);
    

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
    img3.angle = this.game.physicsManager.toDegrees(body3.GetAngle());


    //body.ApplyImpulse({'x': 1/30, 'y': 1/30}, body.GetWorldCenter());
    //body.ApplyForce({'x': 0/30, 'y': 5/30}, body.GetWorldCenter());
    //body.ApplyTorque(1);
    body2.m_angularVelocity = 1;
};
