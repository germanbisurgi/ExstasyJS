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

};