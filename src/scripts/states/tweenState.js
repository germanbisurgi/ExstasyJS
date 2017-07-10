var tweenState = new Extasy.state('tweenState');
var self = tweenState;
var rect;
var tween1;
var camera;

tweenState.create = function () {
    camera = this.activeCamera();
    rect = self.addRectangle(50, 100, 50, 50);

    tween1 = self.addTween(rect)
                .to({ angle: -180, dx: 250}, 1000)
                .repeat(Infinity)
                .yoyo(true)
                .delay(100)
                .easing(TWEEN.Easing.Quadratic.Out)
                .start();

};

tweenState.update = function () {
    tween1.update(self.game.timeManager.currentTime);

    // camera
    if (buttonUp.touched) {
        camera.zoomIn(60);
    }
    if (buttonRight.touched) {
        camera.rotate(-180);
    }
    if (buttonDown.touched) {
        camera.zoomOut(60);
    }
    if (buttonLeft.touched) {
        camera.rotate(180);
    }
};
