var timeState = new Extasy.state('timeState');

var player;

timeState.create = function () {

    player = this.addSprite(50, 50, 'player');

};

timeState.update = function () {

    player.rotate(60);

    var controller = this.getController('standard');
    if (controller.P.isPressed) {
        timeState.game.timeManager.pause();
    }
    if (controller.S.isPressed) {
        timeState.game.timeManager.continue();
    }

    console.log(timeState.game.timeManager.currentTime);
};
