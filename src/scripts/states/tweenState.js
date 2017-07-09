var tweenState = new Extasy.state('tweenState');
var self = tweenState;
var rect;
var tween1;

tweenState.create = function () {

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
};
