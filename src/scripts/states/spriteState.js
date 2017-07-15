var spriteState = new Extasy.state('spriteState');
var self;

spriteState.create = function () {
    self = spriteState;
    self.player = self.addSprite(0, 50, 'player');
    self.player.addAnimation('up', [37, 38, 37, 36], 100);
    self.player.addAnimation('right', [25, 26, 25, 24], 100);
    self.player.addAnimation('down', [1, 2, 1, 0], 100);
    self.player.addAnimation('left', [13, 14, 13, 12], 100);
    self.player.scale(1.1, 1.1);
    self.player.shadow(3, 3, 3, 'rgba(0, 0, 0, 0.5)');
    self.player.opacity(1);
    self.player.setAngle(10);
    self.player.translate(50, 50);
    self.addText(15, 15, 400, 50, 'Press P to pause the time and S to start the time', false);

    console.log(self.currentState().name);
};

spriteState.update = function () {
    if (self.pressing('p')) {self.pause();}
    if (self.pressing('s')) {self.continue();}
    self.player.play('down');
    self.player.rotate(360);
    self.player.translate(5, 3);

    
};