var timeState = new Extasy.state('timeState');
var tm;
var timer;

timeState.create = function () {

    tm = this.game.timeManager;
    timer = tm.addTimer();

};

timeState.update = function () {

    timer.loop(500, function () {
        console.log('repeated');
    });

};
