var inputState = new Extasy.state('inputState');
var text;
var inputs;
var style = {
        font: "50px Helvetica",
        fillStyle: "purple",
        textAlign: "start",
        textBaseline: "top",
        strokeStyle: "black",
        lineWidth: 0,
        lineHeight: 1.5,
    };

inputState.create = function () {
    
    text = this.addTextField(0, 0, 500, 500, '', style);

};

inputState.update = function () {
    inputs = 'key pressed:\n';
    var controller = this.getController('standard');

    if (controller.UP.isPressed) {
        inputs += 'UP ';
    }
    if (controller.RIGHT.isPressed) {
        inputs += 'RIGHT ';
    }
    if (controller.DOWN.isPressed) {
        inputs += 'DOWN ';
    }
    if (controller.LEFT.isPressed) {
        inputs += 'LEFT ';
    }
    text.setText('cazzimma');

    text.setText(inputs);
};
