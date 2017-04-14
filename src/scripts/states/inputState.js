var inputState = new Extasy.state('inputState');

inputState.preload = function () {}

inputState.create = function () {}

inputState.update = function () {
    // console.log(this.game.input);
    // this.game.stop();

    input.textContent = '';

    for (var key in this.game.input.keyboard) {
        var currentKey = this.game.input.keyboard[key];
        if (currentKey.isPressed) {
            input.textContent += currentKey.name + ', ';
        }
    }

    if (this.game.input.mouse.left.isPressed) {
        input.textContent += 'mouse left, ';
    }

    if (this.game.input.mouse.middle.isPressed) {
        input.textContent += 'mouse middle, ';
    }

    if (this.game.input.mouse.right.isPressed) {
        input.textContent += 'mouse right, ';
    }

    mouseX.textContent = '';
    mouseY.textContent = '';
    mouseX.textContent += this.game.input.mouse.x;
    mouseY.textContent += this.game.input.mouse.y;

    // this.game.stop();

}
