var mathState = new Extasy.state('mathState');
var math;

mathState.create = function () {
    math = this.game.mathManager;
    console.log(math.between(4, 3, 6));
};

mathState.update = function () {

};
