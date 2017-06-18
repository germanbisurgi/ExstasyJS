var timeState = new Extasy.state('timeState');
var player;
var myTimer;
var mountains;

timeState.create = function () {
    player = this.addSprite(0, 0, 'player');
    player.addAnimation('left', [13, 14, 13, 12], 100);
    mountains = this.addTileSprite(0, 0, 400, 200, 'mountains');
    myTimer = this.addTimer(1500, true, function() {
        console.log('banane');
    });
    console.log(this.listTimers());
};

timeState.update = function () {
    player.rotate(60);
    player.translate(5, 1);
    player.play('left');
    mountains.scroll('left', 20);
    if (this.keyPressed('p')) {this.pause();}
    if (this.keyPressed('s')) {this.continue();}
};
