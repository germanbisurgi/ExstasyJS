var inputState = new Extasy.state('inputState');
var square;
var mouseX;
var mouseY;
var mouseButtons;
var wheelDirection;
var keys;
var touchX;
var touchY;
var text;
var style = {
    font: "20px Helvetica",
    fillStyle: "purple",
    textAlign: "start",
    textBaseline: "top",
    strokeStyle: "black",
    lineWidth: 0,
    lineHeight: 1.8,
};


inputState.create = function () {
    
    text = this.addText(15, 15, 500, 500, '', style);
    square = this.addRectangle(200, 15, 50, 50);
    
};

inputState.update = function () {

    // ------------------------------------------------------------------- mouse

    mouseX = this.mouseX();
    mouseY = this.mouseY();
    mouseButtons = '';
    wheelDirection = this.wheelDirection();

    if (this.mouseRight()) {
        mouseButtons += 'mouseRight ';
    }
    if (this.mouseMiddle()) {
        mouseButtons += 'mouseMiddle ';
    }
    if (this.mouseLeft()) {
        mouseButtons += 'mouseLeft ';
        square.position(
            mouseX / this.activeCamera().zoom - square.dw * 0.5,
            mouseY / this.activeCamera().zoom - square.dh * 0.5
        );
    }
    if (this.mouseWheelUp()) {
        this.activeCamera().zoomIn(60);

    }
    if (this.mouseWheelDown()) {
        this.activeCamera().zoomOut(60);
    }

    // ---------------------------------------------------------------- keyboard

    keys = '';
    
    if (this.pressing('ArrowUp')) {
        keys += 'up ';
    }
    if (this.pressing('ArrowRight')) {
        keys += 'right ';
    }
    if (this.pressing('ArrowDown')) {
        keys += 'down ';
    }
    if (this.pressing('ArrowLeft')) {
        keys += 'left ';
    }
    
    // ------------------------------------------------------------------- touch
    
    touchX = this.touchX();
    touchY = this.touchY();

    if (this.touched()) {
        square.position(touchX - square.dw * 0.5, touchY - square.dh * 0.5);
    }

    // -------------------------------------------------------------------- echo

    text.setText(
        'mouse x: ' + mouseX + '\n' +
        'mouse y: ' + mouseY + '\n' +
        'mouse buttons: ' + mouseButtons + '\n' +
        'mouse wheel: ' + wheelDirection + '\n' +
        'touch x: ' + touchX + '\n' +
        'touch y: ' + touchY + '\n' +
        'keys: ' + keys
    );
        
};
