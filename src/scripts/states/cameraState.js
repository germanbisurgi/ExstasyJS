var cameraState = new Extasy.state('cameraState');
var bg;
var rectangle;

cameraState.create = function () {
    bg = this.addRectangle(50, 50, 300, 200);
    bg.fill('pink');
    rectangle = this.addRectangle(175, 125, 50, 50);

    this.cameraSetLerp(10);
};

cameraState.update = function () {

    rectangle.rotate(-90);

    this.cameraFollow(rectangle);

    var controller = this.getController('standard');

    if (controller.UP.isPressed) {
        rectangle.translate(0, -150);
    }
    if (controller.RIGHT.isPressed) {
        rectangle.translate(150, 0);
    }
    if (controller.DOWN.isPressed) {
        rectangle.translate(0, 150);
    }
    if (controller.LEFT.isPressed) {
        rectangle.translate(-150, 0);
    }

    if (controller.H.isPressed) {
        this.cameraZoomIn(60);
    }
    if (controller.G.isPressed) {
        this.cameraZoomOut(60);
    }

    if (controller.A.isPressed) {
        this.cameraRotate(-60);
    }
    if (controller.S.isPressed) {
        this.cameraRotate(60);
    }

};
