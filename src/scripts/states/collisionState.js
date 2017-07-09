var collisionState = new Extasy.state('collisionState');
var hero;
var rectangle1;
var rectangle2;
var rectangle3;
var circle1;
var circle2;
var circle3;
var style = {
        font: "20px Helvetica",
        fillStyle: "purple",
        textAlign: "start",
        textBaseline: "top",
        strokeStyle: "black",
        lineWidth: 0,
        lineHeight: 1.5,
    };

collisionState.create = function () {

    this.addText(15, 15, 500, 500, 'use arrows and "wasd" keys to move', style);

    hero = this.addCircle(400, 75, 50);
    rectangle1 = this.addRectangle(15, 200, 25, 25);
    rectangle2 = this.addRectangle(50, 200, 30, 30);
    rectangle3 = this.addRectangle(150, 200, 30, 30);
    circle1 = this.addCircle(200, 200, 30);
    circle2 = this.addCircle(350, 200, 15);
    circle3 = this.addCircle(400, 75, 25);

    this.enableCollision();

    this.collidable(hero);
    this.collidable(rectangle1);
    this.collidable(rectangle2);
    this.collidable(rectangle3);
    this.collidable(circle1);
    this.collidable(circle2);
    this.collidable(circle3);

};

collisionState.update = function () {

    // -------------------------------------------------------------- rectangles

    if (this.pressing('w')) {
        rectangle2.translate(0, -100);
    }
    if (this.pressing('d')) {
        rectangle2.translate(100, 0);
    }
    if (this.pressing('s')) {
        rectangle2.translate(0, 100);
    }
    if (this.pressing('a')) {
        rectangle2.translate(-100, 0);
    }

    // ----------------------------------------------------------------- circles

    if (this.pressing('ArrowUp')) {
        circle2.translate(0, -100);
    }
    if (this.pressing('ArrowRight')) {
        circle2.translate(100, 0);
    }
    if (this.pressing('ArrowDown')) {
        circle2.translate(0, 100);
    }
    if (this.pressing('ArrowLeft')) {
        circle2.translate(-100, 0);
    }

    // -------------------------------------------------------------------- hero

    hero.dx = this.mouseX() - hero.dw / 2;
    hero.dy = this.mouseY() - hero.dh / 2;

    // --------------------------------------------------------------- collision

    this.listCollidables().forEach(function (e) {
        if (e.collides) {
            e.fill('red');
        } else {
            e.fill('grey');
        }
    });

};
