var collisionState = new Extasy.state('collisionState');
var self;

collisionState.create = function () {
    self = collisionState;
    self.style = {
        font: "20px Helvetica",
        fillStyle: "purple",
        textAlign: "start",
        textBaseline: "top",
        strokeStyle: "black",
        lineWidth: 0,
        lineHeight: 1.5,
    };
    self.addText(15, 15, 500, 500, 'use arrows and "wasd" keys to move', self.style);

    self.hero = self.addCircle(400, 75, 50);
    self.rectangle1 = self.addRectangle(15, 200, 25, 25);
    self.rectangle2 = self.addRectangle(50, 200, 30, 30);
    self.rectangle3 = self.addRectangle(150, 200, 30, 30);
    self.circle1 = self.addCircle(200, 200, 30);
    self.circle2 = self.addCircle(350, 200, 15);
    self.circle3 = self.addCircle(400, 75, 25);

    self.enableCollision();

    self.collidable(self.hero);
    self.collidable(self.rectangle1);
    self.collidable(self.rectangle2);
    self.collidable(self.rectangle3);
    self.collidable(self.circle1);
    self.collidable(self.circle2);
    self.collidable(self.circle3);

    console.log(self.currentState().name);

};

collisionState.update = function () {

    // -------------------------------------------------------------- rectangles

    if (self.pressing('w')) {
        self.rectangle2.translate(0, -100);
    }
    if (self.pressing('d')) {
        self.rectangle2.translate(100, 0);
    }
    if (self.pressing('s')) {
        self.rectangle2.translate(0, 100);
    }
    if (self.pressing('a')) {
        self.rectangle2.translate(-100, 0);
    }

    // ----------------------------------------------------------------- circles

    if (self.pressing('ArrowUp')) {
        self.circle2.translate(0, -100);
    }
    if (self.pressing('ArrowRight')) {
        self.circle2.translate(100, 0);
    }
    if (self.pressing('ArrowDown')) {
        self.circle2.translate(0, 100);
    }
    if (self.pressing('ArrowLeft')) {
        self.circle2.translate(-100, 0);
    }

    // -------------------------------------------------------------------- hero

    self.hero.dx = self.getMouseX() - self.hero.dw / 2;
    self.hero.dy = self.getMouseY() - self.hero.dh / 2;

    // --------------------------------------------------------------- collision

    self.listCollidables().forEach(function (e) {
        if (e.collides) {
            e.fill('red');
        } else {
            e.fill('grey');
        }
    });  

};
