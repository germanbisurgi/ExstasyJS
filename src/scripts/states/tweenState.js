var tweenState = new Extasy.state('tweenState');
var self = tweenState;

tweenState.create = function () {
    self.camera = self.activeCamera();
    self.rect = self.addRectangle(50, 100, 50, 50);
    self.tween1 = self.addTween(self.rect)
        .to({ angle: -180, dx: 250}, 1000)
        .repeat(Infinity)
        .yoyo(true)
        .delay(100)
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();

    console.log(self.currentState().name);

};

tweenState.update = function () {
    self.tween1.update(self.game.timeManager.currentTime);

    // camera
    if (buttonUp.touched) {
        self.camera.zoomIn(60);
    }
    if (buttonRight.touched) {
        self.camera.rotate(-180);
    }
    if (buttonDown.touched) {
        self.camera.zoomOut(60);
    }
    if (buttonLeft.touched) {
        self.camera.rotate(180);
    }
};