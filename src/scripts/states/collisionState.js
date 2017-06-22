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

    quadtree = self.addQuadtree({x: 0, y: 0, width: 500, height: 300});
    quadtree.insert({x: rectangle1.dx, y: rectangle1.dy, width: rectangle1.dw, height: rectangle1.dh});
    quadtree.insert({x: rectangle2.dx, y: rectangle2.dy, width: rectangle2.dw, height: rectangle2.dh});
    //quadtree.insert({x: rectangle3.dx, y: rectangle3.dy, width: rectangle3.dw, height: rectangle3.dh});
    quadtree.insert({x: circle1.dx, y: circle1.dy, width: circle1.dw, height: circle1.dh});
    quadtree.insert({x: circle2.dx, y: circle2.dy, width: circle2.dw, height: circle2.dh});
    //quadtree.insert({x: circle3.dx, y: circle3.dy, width: circle3.dw, height: circle3.dh});
    

    self.debug = function(node) {
        
        var bounds = node.bounds;
        console.log(node.nodes);
        //no subnodes? draw the current node
        if( node.nodes.length === 0 ) {
            var sector = self.addRectangle(bounds.x, bounds.y, bounds.width, bounds.height);
            sector.lineWidth = 1;
            sector.fill('transparent');
            
        //has subnodes? drawQuadtree them!
        } else {
            node.nodes.forEach(function (node) {
                self.debug(node);
            });
        }
    };

    self.debug(quadtree);
            
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

    // --------------------------------------------------------------- collision

    self.listCollidables().forEach(function (e) {
        if (e.collides) {
            e.fill('red');
        } else {
            e.fill('grey');
        }
    });

    hero.dx = self.game.inputManager.mouse.x - hero.dw / 2;
    hero.dy = self.game.inputManager.mouse.y - hero.dh / 2;

    //quadtree.insert({x: rectangle1.dx, y: rectangle1.dy, width: rectangle1.dw, height: rectangle1.dh});
    //quadtree.insert({x: rectangle2.dx, y: rectangle2.dy, width: rectangle2.dw, height: rectangle2.dh});
    //quadtree.insert({x: rectangle3.dx, y: rectangle3.dy, width: rectangle3.dw, height: rectangle3.dh});
    //quadtree.insert({x: circle1.dx, y: circle1.dy, width: circle1.dw, height: circle1.dh});
    //quadtree.insert({x: circle2.dx, y: circle2.dy, width: circle2.dw, height: circle2.dh});
    //quadtree.insert({x: circle3.dx, y: circle3.dy, width: circle3.dw, height: circle3.dh});
    //console.log(quadtree.retrieve({x: hero.dx, y: hero.dy, width: hero.dw, height: hero.dh}));

    //quadtree.clear();

};
