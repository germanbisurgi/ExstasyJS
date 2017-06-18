var MathManager = function (game) {

    "use strict";
    var self = this;
    self.game = game;

    // Random.

    self.random = function(min, max) {
        return (min + (Math.random() * (max - min)));
    };

    self.randomInt = function(min, max) {
        return Math.round(this.random(min, max));
    };

    self.randomChoice = function(choices) {
        return choices[this.randomInt(0, choices.length-1)];
    };

    self.randomBool = function() {
        return self.randomChoice([true, false]);
    };

    // Simple Math.

    self.limit = function(x, min, max) {
        return Math.max(min, Math.min(max, x));
    };

    self.between = function(n, min, max) {
        return ((n >= min) && (n <= max));
    };

    self.toRadians = function(x) {
        return x * 0.0174532925199432957;
    };

    self.toDegrees = function(x) {
        return x * 57.295779513082320876;
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

};