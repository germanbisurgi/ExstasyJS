var inputState = new Extasy.state('inputState');
var text;
var mouseXY;
var inputs;
var style = {
        font: "20px Helvetica",
        fillStyle: "purple",
        textAlign: "start",
        textBaseline: "top",
        strokeStyle: "black",
        lineWidth: 0,
        lineHeight: 1.5,
    };

inputState.create = function () {
    
    text = this.addTextField(0, 0, 500, 500, 'la', style);
    
};

inputState.update = function () {

    var mouseX = this.game.inputManager.mouse.x;
    var mouseY = this.game.inputManager.mouse.y;
    var wheelDirection = this.game.inputManager.mouse.wheelDirection;

    inputs = 'key pressed:\n';

    if (this.game.inputManager.keyboard.ArrowUp.isPressed) {
        inputs += 'UP ';
    }
    if (this.game.inputManager.keyboard.ArrowRight.isPressed) {
        inputs += 'RIGHT ';
    }
    if (this.game.inputManager.keyboard.ArrowDown.isPressed) {
        inputs += 'DOWN ';
    }
    if (this.game.inputManager.keyboard.ArrowLeft.isPressed) {
        inputs += 'LEFT ';
    }
    if (this.game.inputManager.mouse.left.isPressed) {
        inputs += 'mouseLeft ';
    }
    if (this.game.inputManager.mouse.right.isPressed) {
        inputs += 'mouseRight ';
    }
    if (this.game.inputManager.mouse.middle.isPressed) {
        inputs += 'mouseMiddle ';
    }

    text.setText('X: ' + mouseX + '\n' + 'Y: ' + mouseY + '\n' + 'wheel direction: ' + wheelDirection + '\n\n' + inputs);
    
};
