var CollisionManager = function (game) {

    "use strict";
    var self = this;
    self.game = game;
    self.enabled = false;
    self.collidables = [];
    self.checkedEntities = [];

    self.enableCollision = function() {
        self.enabled = true;
    };

    self.disableCollision = function() {
        self.enabled = false;
    };

    self.listCollidables = function(pa, pb) {
        return self.collidables;
    };

    self.distance = function(pa, pb) {
        var dx = pa.dx - pb.dx;
        var dy = pa.dy - pb.dy;
        return Math.abs(Math.sqrt(dx * dx + dy * dy));
    };

    self.circleCollision = function(c1, c2) {
        var distance = self.distance(c1, c2);
        return distance < c1.dw / 2 + c2.dw / 2;
    };

    self.rectangleCollision = function(r1, r2) {
        return r1.dx < r2.dx + r2.dw &&
               r1.dx + r1.dw > r2.dx &&
               r1.dy < r2.dy + r2.dh &&
               r1.dh + r1.dy > r2.dy;
    };

    self.circleRectCollision = function(c, r) {
        var distX = Math.abs(c.dx + c.dw / 2 - r.dx - r.dw / 2);
        var distY = Math.abs(c.dy + c.dw / 2 - r.dy - r.dh / 2);
        if (distX > (r.dw / 2 + c.dw / 2)) { return false; }
        if (distY > (r.dh / 2 + c.dw / 2)) { return false; }
        if (distX <= (r.dw / 2)) { return true; } 
        if (distY <= (r.dh / 2)) { return true; }
        var dx = distX - r.dw / 2;
        var dy = distY - r.dh / 2;
        return (dx * dx + dy * dy <= (c.dw / 2 * c.dw / 2));
    };

    self.update = function () {

        self.collidables.forEach(function (e) {
            e.collides = false;
        });

        self.checkedEntities = [];

        self.collidables.forEach(function (e1) {
            self.collidables.forEach(function (e2) {
                if (e1 !== e2 && self.checkedEntities.indexOf(e2) === -1) {
                    if (e2.type === 'circle' && e1.type === 'rectangle') {
                        if (self.circleRectCollision(e1, e2)) {
                            e1.collides = true;
                            e2.collides = true;
                        }
                    }
                    if (e1.type === 'rectangle' && e2.type === 'rectangle') {
                        if (self.rectangleCollision(e1, e2)) {
                            e1.collides = true;
                            e2.collides = true;
                        }
                    }
                    if (e1.type === 'circle' && e2.type === 'circle') {
                        if (self.circleCollision(e1, e2)) {
                            e1.collides = true;
                            e2.collides = true;
                        }
                    }
                }
            });
            self.checkedEntities.push(e1);
        });
    };

};