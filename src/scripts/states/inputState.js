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

    if (this.game.inputManager.mouse.right.isPressed) {
        mouseButtons += 'mouseRight ';
    }
    if (this.game.inputManager.mouse.middle.isPressed) {
        mouseButtons += 'mouseMiddle ';
    }
    if (this.game.inputManager.mouse.left.isPressed) {
        mouseButtons += 'mouseLeft ';
        square.position(mouseX - square.dw * 0.5, mouseY - square.dh * 0.5);
    }

    // ---------------------------------------------------------------- keyboard

    var keys = '';
    
    if (this.game.inputManager.keyboard.ArrowUp.isPressed) {
        keys += 'up ';
    }
    if (this.game.inputManager.keyboard.ArrowRight.isPressed) {
        keys += 'right ';
    }
    if (this.game.inputManager.keyboard.ArrowDown.isPressed) {
        keys += 'down ';
    }
    if (this.game.inputManager.keyboard.ArrowLeft.isPressed) {
        keys += 'left ';
    }
    
    // ------------------------------------------------------------------- touch
    
    var touchX = this.game.inputManager.touch.x;
    var touchY = this.game.inputManager.touch.y;

    if (this.game.inputManager.touch.touched) {
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
