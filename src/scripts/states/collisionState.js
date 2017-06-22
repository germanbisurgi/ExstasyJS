var collisionState = new Extasy.state('collisionState');
var self = collisionState;
var hero;
var rectangle1;
var rectangle2;
var circle1;
var circle2;
var quadtree;

collisionState.create = function () {
    self.addText(15, 15, 500, 500, 'use arrows and "wasd" keys to move', style);
    hero = self.addRectangle(200, 50, 25, 25);
    rectangle1 = self.addRectangle(15, 200, 25, 25);
    rectangle2 = self.addRectangle(50, 200, 25, 25);
    circle1 = self.addCircle(300, 200, 10);
    circle2 = self.addCircle(350, 200, 10);
    self.enableCollision();
    self.collidable(hero);
    self.collidable(rectangle1);
    self.collidable(rectangle2);
    self.collidable(circle1);
    self.collidable(circle2);

    quadtree = self.addQuadtree({x: 0, y: 0, width: 500, height: 300});
    quadtree.insert({x: hero.dx, y: hero.dy, width: hero.dw, height: hero.dh});
    quadtree.insert({x: rectangle1.dx, y: rectangle1.dy, width: rectangle1.dw, height: rectangle1.dh});
    quadtree.insert({x: rectangle2.dx, y: rectangle2.dy, width: rectangle2.dw, height: rectangle2.dh});
    quadtree.insert({x: circle1.dx, y: circle1.dy, width: circle1.dw, height: circle1.dh});
    quadtree.insert({x: circle2.dx, y: circle2.dy, width: circle2.dw, height: circle2.dh});
    
    //console.log(quadtree.nodes);

    quadtree.nodes.forEach(function (node) {
        var sector = self.addRectangle(node.bounds.x, node.bounds.y, node.bounds.width, node.bounds.height);
        sector.lineWidth = 1;
        sector.fill('transparent');
    });

};

collisionState.update = function () {

    hero.dx = self.game.inputManager.mouse.x - hero.dw / 2;
    hero.dy = self.game.inputManager.mouse.y - hero.dh / 2;

    quadtree.insert({x: rectangle1.dx, y: rectangle1.dy, width: rectangle1.dw, height: rectangle1.dh});
    quadtree.insert({x: rectangle2.dx, y: rectangle2.dy, width: rectangle2.dw, height: rectangle2.dh});
    quadtree.insert({x: circle1.dx, y: circle1.dy, width: circle1.dw, height: circle1.dh});
    quadtree.insert({x: circle2.dx, y: circle2.dy, width: circle2.dw, height: circle2.dh});
    console.log(quadtree.retrieve({x: hero.dx, y: hero.dy, width: hero.dw, height: hero.dh}));
    quadtree.clear();


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

    // --------------------------------------------------------------- collision

    self.listCollidables().forEach(function (e) {
        if (e.collides) {
            e.fill('red');
        } else {
            e.fill('grey');
        }
    });

};
