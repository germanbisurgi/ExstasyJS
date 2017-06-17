var inputState = new Extasy.state('inputState');
var text;
var style = {
    font: "15px Helvetica",
    fillStyle: "purple",
    textAlign: "start",
    textBaseline: "top",
    strokeStyle: "black",
    lineWidth: 0,
    lineHeight: 1.8,
};
var square;

inputState.create = function () {
    
    text = this.addTextField(15, 15, 500, 500, '', style);
    square = this.addRectangle(200, 15, 50, 50);
    
};

inputState.update = function () {

    // ------------------------------------------------------------------- mouse

    var mouseX = this.game.inputManager.mouse.x;
    var mouseY = this.game.inputManager.mouse.y;
    var mouseButtons = '';
    var wheelDirection = this.game.inputManager.mouse.wheelDirection;

    if (this.mouseRight()) {
        mouseButtons += 'mouseRight ';
    }
    if (this.mouseMiddle()) {
        mouseButtons += 'mouseMiddle ';
    }
    if (this.mouseLeft()) {
        mouseButtons += 'mouseLeft ';
        square.position(
            mouseX / this.getActiveCamera().zoom - square.dw * 0.5,
            mouseY / this.getActiveCamera().zoom - square.dh * 0.5
        );
    }
    if (this.mouseWheelUp()) {
        this.getActiveCamera().zoomIn(60);

    }
    if (this.mouseWheelDown()) {
        this.getActiveCamera().zoomOut(60);
    }

    // ---------------------------------------------------------------- keyboard

    var keys = '';
    
    if (this.keyPressed('ArrowUp')) {
        keys += 'up ';
    }
    if (this.keyPressed('ArrowRight')) {
        keys += 'right ';
    }
    if (this.keyPressed('ArrowDown')) {
        keys += 'down ';
    }
    if (this.keyPressed('ArrowLeft')) {
        keys += 'left ';
    }
    
    // ------------------------------------------------------------------- touch
    
    var touchX = this.game.inputManager.touch.x;
    var touchY = this.game.inputManager.touch.y;

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
