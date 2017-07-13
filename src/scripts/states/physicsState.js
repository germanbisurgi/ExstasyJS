var physicsState = new Extasy.state('physicsState');
var circle;
var rectangle;
var polygon;
var mainCamera;
var camera1;
var camera2;
var camera3;
var bg;
var canPause = true;
var canSelect = true;
var tic;
var contactListener;

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


    //circle.body.ApplyImpulse({'x': 100 / 30, 'y': 600 / 30}, circle.body.GetWorldCenter());
    //rectangle.body.ApplyImpulse({'x': 3 / 30, 'y': 3 / 30}, polygon.body.GetWorldCenter());

    mainCamera = this.getCamera('main');
    camera1 = this.addCamera('camera1');
    camera2 = this.addCamera('camera2');
    camera3 = this.addCamera('camera3');

    this.switchCamera('camera3');

    this.activeCamera().setLerp(10);

    tic = this.addAudio('tic', 0.1, false);

    // contact listener
    contactListener = this.addContactListener();
    contactListener.BeginContact = function() {
        tic.currentTime = 0;
        tic.play();
    };
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

    rectangle.body.m_angularVelocity = 0;
    
    camera1.follow(circle);
    camera2.follow(rectangle);
    camera3.follow(polygon);


    var camera = this.activeCamera();

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
        rectangle.body.ApplyForce({'x': 0, 'y': -100}, polygon.body.GetWorldCenter());
    }
    if (arrowRight.touched) {
        rectangle.body.ApplyForce({'x': 100, 'y': 0}, polygon.body.GetWorldCenter());
    }
    if (arrowDown.touched) {
        rectangle.body.ApplyForce({'x':0, 'y': 100}, polygon.body.GetWorldCenter());
    }
    if (arrowLeft.touched) {
        rectangle.body.ApplyForce({'x': -100, 'y': 0}, polygon.body.GetWorldCenter());
    }


    // select
    if (buttonStart.touched && canSelect) {
        if (!this.isPaused()) {
            this.pause();
        } else {
            this.continue();
        }
        canSelect = false;
        setTimeout(function () {
            canSelect = true;
        }, 200);
    }

    // start
    if (buttonSelect.touched && canPause) {
        var activeCamera = this.activeCamera();
        console.log(activeCamera.name);
        switch(activeCamera.name) {
            case 'camera1':
                this.switchCamera('camera2');
                break;
            case 'camera2':
                this.switchCamera('camera3');
                break;
            case 'camera3':
                this.switchCamera('camera1');
                break;
        }
        canPause = false;
        setTimeout(function () {
            canPause = true;
        }, 200);
    }

    // states
    if (nextState.touched) {
        var nState;
        var states = this.listStates();
        var currentState = this.currentState();
        var stateIndex = states.indexOf(currentState);
        stateIndex++;
        if (stateIndex < states.length) {
            nState = states[stateIndex];
        } else {
            nState = states[0];
        }
        
        this.switchState(nState.name);
    }

    if (prevState.touched) {
        var pState;
        var states = this.listStates();
        var currentState = this.currentState();
        var stateIndex = states.indexOf(currentState);
        stateIndex--;
        if (stateIndex < 0) {
            pState = states[states.length];
        } else {
            pState = states[stateIndex - 1];
        }
        this.switchState(pState.name);
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
