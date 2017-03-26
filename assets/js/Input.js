var Input = function() {
    "use strict";
    var self = this;

    // Keys map.
    self.keyLeft     = 37;
    self.keyUp       = 38;
    self.keyRight    = 39;
    self.keyDown     = 40;
    self.keyW        = 87;
    self.keyA        = 65;
    self.keyS        = 83;
    self.keyD        = 68;
    self.keySpacebar = 32;

    // Keys events
    self.pressingLeft      = false;
    self.pressingUp        = false;
    self.pressingRight     = false;
    self.pressingDown      = false;
    self.pressingA         = false;
    self.pressingD         = false;
    self.pressingS         = false;
    self.pressingW         = false;
    self.pressingSpacebar  = false;

    document.onkeydown = function(key) {
        if (key.keyCode === self.keyLeft) {
            self.pressingLeft = true;
        }
        if (key.keyCode === self.keyUp) {
            self.pressingUp = true;
        }
        if (key.keyCode === self.keyRight) {
            self.pressingRight = true;
        }
        if (key.keyCode === self.keyDown) {
            self.pressingDown = true;
        }
        if (key.keyCode === self.keyA) {
            self.pressingA = true;
        }
        if (key.keyCode === self.keyD) {
            self.pressingD = true;
        }
        if (key.keyCode === self.keyS) {
            self.pressingS = true;
        }
        if (key.keyCode === self.keyW) {
            self.pressingW = true;
        }
        if (key.keyCode === self.keySpacebar) {
            self.pressingSpacebar = true;
        }
    }

    document.onkeyup = function(key) {
        if (key.keyCode === self.keyLeft) {
            self.pressingLeft = false;
        }
        if (key.keyCode === self.keyUp) {
            self.pressingUp = false;
        }
        if (key.keyCode === self.keyRight) {
            self.pressingRight = false;
        }
        if (key.keyCode === self.keyDown) {
            self.pressingDown = false;
        }
        if (key.keyCode === self.keyA) {
            self.pressingA = false;
        }
        if (key.keyCode === self.keyD) {
            self.pressingD = false;
        }
        if (key.keyCode === self.keyS) {
            self.pressingS = false;
        }
        if (key.keyCode === self.keyW) {
            self.pressingW = false;
        }
        if (key.keyCode === self.keySpacebar) {
            self.pressingSpacebar = false;
        }
    }

}