var collisionState = new Extasy.state('collisionState');
var self = collisionState;
var hero;
var rectangle1;
var rectangle2;
var rectangle3;
var circle1;
var circle2;
var circle3;
var quadtree;

collisionState.create = function () {

    self.addText(15, 15, 500, 500, 'use arrows and "wasd" keys to move', style);

    hero = self.addRectangle(200, 50, 25, 25);
    rectangle1 = self.addRectangle(15, 200, 25, 25);
    rectangle2 = self.addRectangle(50, 200, 25, 25);
    rectangle3 = self.addRectangle(150, 200, 25, 25);
    circle1 = self.addCircle(200, 200, 10);
    circle2 = self.addCircle(350, 200, 10);
    circle3 = self.addCircle(400, 75, 10);

    self.enableCollision();

    self.collidable(hero);
    self.collidable(rectangle1);
    self.collidable(rectangle2);
    self.collidable(rectangle3);
    self.collidable(circle1);
    self.collidable(circle2);
    self.collidable(circle3);

    //quadtree = self.addQuadtree({x: 5, y: 5, width: 490, height: 290});
                
};

collisionState.update = function () {

    // -------------------------------------------------------------- rectangles

    if (self.pressing('w')) {
        rectangle2.translate(0, -100);
    }
    if (self.pressing('d')) {
        rectangle2.translate(100, 0);
    }
    if (self.pressing('s')) {
        rectangle2.translate(0, 100);
    }
    if (self.pressing('a')) {
        rectangle2.translate(-100, 0);
    }

    // ----------------------------------------------------------------- circles

    if (self.pressing('ArrowUp')) {
        circle2.translate(0, -100);
    }
    if (self.pressing('ArrowRight')) {
        circle2.translate(100, 0);
    }
    if (self.pressing('ArrowDown')) {
        circle2.translate(0, 100);
    }
    if (self.pressing('ArrowLeft')) {
        circle2.translate(-100, 0);
    }

    // -------------------------------------------------------------------- hero

    hero.dx = self.game.inputManager.mouse.x - hero.dw / 2;
    hero.dy = self.game.inputManager.mouse.y - hero.dh / 2;

    // --------------------------------------------------------------- collision

    self.listCollidables().forEach(function (e) {
        if (e.collides) {
            e.fill('red');
        } else {
            e.fill('grey');
        }
    });

};
