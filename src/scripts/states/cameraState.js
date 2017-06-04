var cameraState = new Extasy.state('cameraState');
var bg;
var rectangle;
var DEGTORAD = 0.0174532925199432957;
var RADTODEG = 57.295779513082320876;

cameraState.create = function () {
    bg = this.addRectangle(50, 50, 300, 200);
    bg.fill('pink');
    rectangle = this.addRectangle(175, 125, 50, 50);

    this.getActiveCamera().setLerp(10);  
};

cameraState.update = function () {


    var camera = this.getActiveCamera();
    var controller = this.getController('standard');

    if (controller.UP.isPressed) {
        
        var currentAngle = (rectangle.angle - 90) * DEGTORAD;
        var cos = Math.cos(currentAngle);
        var sin = Math.sin(currentAngle);
        rectangle.translate(cos  * 200, sin * 200);
    }
    if (controller.RIGHT.isPressed) {
        rectangle.angle += 3;
    }
    if (controller.DOWN.isPressed) {
        var currentAngle = (rectangle.angle - 90) * DEGTORAD;
        var cos = Math.cos(currentAngle);
        var sin = Math.sin(currentAngle);
        rectangle.translate(-cos  * 200, -sin * 200);
    }
    if (controller.LEFT.isPressed) {
        rectangle.angle -= 3;
    }

    if (controller.H.isPressed) {
        camera.zoomIn(60);
    }
    if (controller.G.isPressed) {
        camera.zoomOut(60);
    }

    if (controller.A.isPressed) {
        camera.rotate(-180);
    }
    if (controller.S.isPressed) {
        camera.rotate(180);
    }

    //camera.setAngle(-rectangle.angle);
    camera.follow(rectangle);

};
