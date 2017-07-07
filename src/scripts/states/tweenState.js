var tweenState = new Extasy.state('tweenState');
var self = tweenState;
var rect;
var tween;

tweenState.create = function () {

    rect = this.addRectangle(0, 0, 50, 50);
    tween = this.addTween(rect, {dx: 300}, {duration: 1000});
    console.log(tween);

    /*var mySequence = [
        { e: $element1, p: { translateX: 100 }, o: { duration: 1000 } },
        { e: $element2, p: { translateX: 200 }, o: { duration: 1000, sequenceQueue: false },
        { e: $element3, p: { translateX: 300 }, o: { duration: 1000 }
    ];
    $.Velocity.RunSequence(mySequence);*/

};

tweenState.update = function () {
    tween.update();
};
