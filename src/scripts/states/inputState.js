var inputState = new Extasy.state('inputState');

inputState.create = function () {

};

inputState.update = function () {

    var controller = this.getController('standard');

    if (controller.UP.isPressed) {
        console.log('pressing UP');
    }
    if (controller.RIGHT.isPressed) {
        console.log('pressing RIGHT');
    }
    if (controller.DOWN.isPressed) {
        console.log('pressing DOWN');
    }
    if (controller.LEFT.isPressed) {
        console.log('pressing LEFT');
    }

};
