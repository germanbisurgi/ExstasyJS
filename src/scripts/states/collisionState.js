var collisionState = new Extasy.state('collisionState');
var rectangle1;
var rectangle2;
var circle1;
var circle2;
var quadtree;

collisionState.create = function () {
    this.addText(15, 15, 500, 500, 'use arrows and "wasd" keys to move', style);
    rectangle1 = this.addRectangle(15, 200, 25, 25);
    rectangle2 = this.addRectangle(50, 200, 25, 25);
    circle1 = this.addCircle(300, 200, 10);
    circle2 = this.addCircle(350, 200, 10);
    this.enableCollision();
    this.collidable(rectangle1);
    this.collidable(rectangle2);
    this.collidable(circle1);
    this.collidable(circle2);

    quadtree = this.addQuadtree({x: 0, y: 0, width: 500, height: 300});
    
    
};

collisionState.update = function () {

    quadtree.insert({x: rectangle1.dx, y: rectangle1.dy, width: rectangle1.dw, height: rectangle1.dh});
    quadtree.insert({x: rectangle2.dx, y: rectangle2.dy, width: rectangle2.dw, height: rectangle2.dh});
    quadtree.insert({x: circle1.dx, y: circle1.dy, width: circle1.dw, height: circle1.dh});
    quadtree.insert({x: circle2.dx, y: circle2.dy, width: circle2.dw, height: circle2.dh});
    console.log(quadtree.retrieve());
    console.log(quadtree.clear());

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

    // --------------------------------------------------------------- collision

    this.listCollidables().forEach(function (e) {
        if (e.collides) {
            e.fill('red');
        } else {
            e.fill('grey');
        }
    });

};
