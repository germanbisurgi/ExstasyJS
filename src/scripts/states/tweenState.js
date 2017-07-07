var tweenState = new Extasy.state('tweenState');
var self = tweenState;
var rect;
var tween;

tweenState.create = function () {

    rect = this.addRectangle(100, 0, 50, 50);
    tween = new TWEEN.Tween(rect)
        .to({ angle: [-50, 0]}, 1000)
        .onUpdate(function() {
            //console.log(rect.dx, rect.dy);
        })
        .start()
        /*.repeat(1)
        .yoyo();*/

    console.log(tween);
    


};

tweenState.update = function () {
    tween.update(this.game.timeManager.currentTime);
};
