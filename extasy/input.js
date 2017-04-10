var Input = function(keyName) {
    
    "use strict";
    var self = this;

    self.mouse = {
        x: null,
        y: null,
        left: {isPressed: false},
        right: {isPressed: false},
        middle: {isPressed: false}
    }

    self.keyboard = {
        ArrowLeft:  {isPressed: false},
        ArrowUp:    {isPressed: false},
        ArrowRight: {isPressed: false},
        ArrowDown:  {isPressed: false},

        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
        ArrowDown:  {isPressed: false},
    }

    document.onkeydown = function(event) {
        event.preventDefault();
        console.log(event.key);
        self.keyboard[event.key].isPressed = true;
    }

    document.onkeyup = function(event) {
        event.preventDefault();
        // console.log(event.key);
        self.keyboard[event.key].isPressed = false;
    }

    document.onmousedown = function(event) {
        event.preventDefault();
        var keyCode = event.which;
        if (keyCode === 1) {
            self.mouse.left.isPressed = true;
        }
        if (keyCode === 2) {
            self.mouse.middle.isPressed = true;
        }
        if (keyCode === 3) {
            self.mouse.right.isPressed = true;
        }
    }

    document.onmouseup = function(event) {
        event.preventDefault();
        var keyCode = event.which;
        if (keyCode === 1) {
            self.mouse.left.isPressed = false;
        }
        if (keyCode === 2) {
            self.mouse.middle.isPressed = false;
        }
        if (keyCode === 3) {
            self.mouse.right.isPressed = false;
        }
    }

    document.onmousemove = function(event) {
        self.mouse.x = event.clientX;
        self.mouse.y = event.clientY;
    }

}


