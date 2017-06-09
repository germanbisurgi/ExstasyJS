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

};