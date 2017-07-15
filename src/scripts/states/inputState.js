var inputState = new Extasy.state('inputState');
var self;

inputState.create = function () {
    self = inputState;
        self.style = {
        font: "20px Helvetica",
        fillStyle: "purple",
        textAlign: "start",
        textBaseline: "top",
        strokeStyle: "black",
        lineWidth: 0,
        lineHeight: 1.8,
    };
    
    self.text = self.addText(15, 15, 500, 500, '', self.style);
    self.square = self.addRectangle(200, 15, 50, 50);

    console.log(self.currentState().name);
    
};

inputState.update = function () {

    // ------------------------------------------------------------------- mouse

    self.mouseX = self.getMouseX();
    self.mouseY = self.getMouseY();
    self.mouseButtons = '';
    self.wheelDirection = self.getWheelDirection();

    if (self.mouseRight()) {
        self.mouseButtons += 'mouseRight ';
    }
    if (self.mouseMiddle()) {
        self.mouseButtons += 'mouseMiddle ';
    }
    if (self.mouseLeft()) {
        self.mouseButtons += 'mouseLeft ';
        self.square.position(
            self.mouseX / self.activeCamera().zoom - self.square.dw * 0.5,
            self.mouseY / self.activeCamera().zoom - self.square.dh * 0.5
        );
    }
    if (self.mouseWheelUp()) {
        self.activeCamera().zoomIn(60);

    }
    if (self.mouseWheelDown()) {
        self.activeCamera().zoomOut(60);
    }

    // ---------------------------------------------------------------- keyboard

    self.keys = '';
    
    if (self.pressing('ArrowUp')) {
        self.keys += 'up ';
    }
    if (self.pressing('ArrowRight')) {
        self.keys += 'right ';
    }
    if (self.pressing('ArrowDown')) {
        self.keys += 'down ';
    }
    if (self.pressing('ArrowLeft')) {
        self.keys += 'left ';
    }
    
    // ------------------------------------------------------------------- touch
    
    self.touchX = self.getTouchX();
    self.touchY = self.getTouchY();

    if (self.touched()) {
        self.square.position(touchX - self.square.dw * 0.5, touchY - self.square.dh * 0.5);
    }

    // -------------------------------------------------------------------- echo

    self.text.setText(
        'mouse x: ' + self.mouseX + '\n' +
        'mouse y: ' + self.mouseY + '\n' +
        'mouse buttons: ' + self.mouseButtons + '\n' +
        'mouse wheel: ' + self.wheelDirection + '\n' +
        'touch x: ' + self.touchX + '\n' +
        'touch y: ' + self.touchY + '\n' +
        'keys: ' + self.keys
    );
        
};
