var Input = function(keyName) {
    
    "use strict";
    var self = this;

    self.mouseX = null;
    self.mouseY = null;

    var keys = [
        {code:   8, name: "backspace"},
        {code:   9, name: "tab"      },
        {code:  13, name: "enter"    },
        {code:  16, name: "shift"    },
        {code:  17, name: "ctrl"     },
        {code:  18, name: "alt"      },
        {code:  27, name: "escape"   },
        {code:  32, name: "spacebar" },
        {code:  37, name: "left"     },
        {code:  38, name: "up"       },
        {code:  39, name: "right"    },
        {code:  40, name: "down"},
        {code:  48, name: "num0"},
        {code:  49, name: "num1"},
        {code:  50, name: "num2"},
        {code:  51, name: "num3"},
        {code:  52, name: "num4"},
        {code:  53, name: "num5"},
        {code:  54, name: "num6"},
        {code:  55, name: "num7"},
        {code:  56, name: "num8"},
        {code:  57, name: "num9"},
        {code:  65, name: "a"},
        {code:  66, name: "b"},
        {code:  67, name: "c"},
        {code:  68, name: "d"},
        {code:  69, name: "e"},
        {code:  70, name: "f"},
        {code:  71, name: "g"},
        {code:  72, name: "h"},
        {code:  73, name: "i"},
        {code:  74, name: "j"},
        {code:  75, name: "k"},
        {code:  76, name: "l"},
        {code:  77, name: "m"},
        {code:  78, name: "n"},
        {code:  79, name: "o"},
        {code:  80, name: "p"},
        {code:  81, name: "q"},
        {code:  82, name: "r"},
        {code:  83, name: "s"},
        {code:  84, name: "t"},
        {code:  85, name: "u"},
        {code:  86, name: "v"},
        {code:  87, name: "w"},
        {code:  88, name: "x"},
        {code:  89, name: "y"},
        {code:  90, name: "z"},
        {code:  96, name: "numpad0"},
        {code:  97, name: "numpad1"},
        {code:  98, name: "numpad2"},
        {code:  99, name: "numpad3"},
        {code: 100, name: "numpad4"},
        {code: 101, name: "numpad5"},
        {code: 102, name: "numpad6"},
        {code: 103, name: "numpad7"},
        {code: 104, name: "numpad8"},
        {code: 105, name: "numpad9"}
    ];

    var mouseButtons = [
        {code: 1, name: "mouseLeft"},
        {code: 2, name: "mouseMiddle"},
        {code: 3, name: "mouseRight"}
    ];



    keys.forEach(function (key) {
        self[key.name] = {isPressed: false};
    });

    mouseButtons.forEach(function (button) {
        self[button.name] = {isPressed: false};
    });


    document.onkeydown = function(event) {
        event.preventDefault();
        var keyCode = event.keyCode;
        keys.forEach(function (key, i) {
            if (keyCode === key.code) {
                self[key.name].isPressed = true;
            }
        })
        
    }

    document.onkeyup = function(event) {
        event.preventDefault();
        var keyCode = event.keyCode;
        keys.forEach(function (key, i) {
            if (keyCode === key.code) {
                self[key.name].isPressed = false;
            }
        })
    }

    document.onmousedown = function(event) {
        event.preventDefault();
        var keyCode = event.which;
        mouseButtons.forEach(function (button, i) {
            if (keyCode === button.code) {
                self[button.name].isPressed = true;
            }
        })
    }

    document.onmouseup = function(event) {
        event.preventDefault();
        var keyCode = event.which;
        mouseButtons.forEach(function (button, i) {
            if (keyCode === button.code) {
                self[button.name].isPressed = false;
            }
        })
    }

    document.onmousemove = function(event) {
        self.mouseX = event.clientX;
        self.mouseY = event.clientY;
    }
}


