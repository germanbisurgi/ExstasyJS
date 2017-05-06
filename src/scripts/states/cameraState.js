var cameraState = new Extasy.state('cameraState');
var bg;
var rectangle;

cameraState.create = function () {

    bg = this.addRectangle(10, 10, 390, 290);
    bg.fill('pink');
    rectangle = this.addRectangle(175, 125, 50, 50);

}

cameraState.update = function () {

    this.cameraFollow(rectangle);

    this.cameraRotate(60);

    controller = this.getController('standard');

    if (controller.UP.isPressed) {
        rectangle.translate(0, -60);
    }
    if (controller.RIGHT.isPressed) {
        rectangle.translate(60, 0);
    }
    if (controller.DOWN.isPressed) {
        rectangle.translate(0, 60);
    }
    if (controller.LEFT.isPressed) {
        rectangle.translate(-60, 0);
    }

}
