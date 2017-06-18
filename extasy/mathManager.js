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

    self.accelerate = function(v, accel, dt) {
        return v + (accel * dt);
    };

    self.lerp = function(n, dn, dt) {   // linear interpolation
        return n + (dn * dt);
    };

    // Easing Equations.

    self.interpolate = function(a, b, percent) {
        return a + (b - a) * percent;
    };

    self.easeIn = function(a, b, percent) {
        return a + (b - a) * Math.pow(percent, 2); 
    };

    self.easeOut = function(a, b, percent) {
        return a + (b - a) * (1 - Math.pow(1 - percent, 2)); 
    };

    self.easeInOut = function(a, b, percent) {
        return a + (b - a) * ((-Math.cos(percent * Math.PI) / 2) + 0.5);
    };

    // Converter.

    self.toRadians = function(x) {
        return x * 0.0174532925199432957;
    };

    self.toDegrees = function(x) {
        return x * 57.295779513082320876;
    };

    // Simple collision detection.

    self.distance = function(pa, pb) {
        var dx = pa.dx - pb.dx;
        var dy = pa.dy - pb.dy;
        return Math.abs(Math.sqrt(dx * dx + dy * dy));
    };

    self.circleCollision = function(c1, c2) {
        var distance = self.distance(c1, c2);
        return distance < c1.dw / 2 + c2.dw / 2;
    };

    self.rectangleCollision = function(b1, b2) {
        return b1.dx < b2.dx + b2.dw &&
               b1.dx + b1.dw > b2.dx &&
               b1.dy < b2.dy + b2.dh &&
               b1.dh + b1.dy > b2.dy;
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