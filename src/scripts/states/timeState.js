var timeState = new Extasy.state('timeState');
var self;

timeState.create = function () {
    self = timeState;
    self.counter = 0;
    
    self.mountains = this.addTileSprite(0, 0, 400, 200, 'mountains');
    self.player = this.addSprite(0, 100, 'player');
    self.player.addAnimation('left', [13, 14, 13, 12], 100);
    self.text = this.addText(15, 15, 500, 200,'Press P and S to stop a start the time', false);
    self.text = this.addText(15, 60, 500, 200, 'seconds: ' + String(self.counter), false);
    self.myTimer = this.addTimer(1000, true, function() {
        self.counter++;
        self.text.setText('seconds: ' + String(self.counter));
    });

    console.log(this.currentState().name);
};

timeState.update = function () {
    self.mountains.scroll('left', 20);
    self.player.rotate(60);
    self.player.translate(5, 1);
    self.player.play('left');
    if (this.pressing('p')) {this.pause();}
    if (this.pressing('s')) {this.continue();}
};
