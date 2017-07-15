var tileSpriteState = new Extasy.state('tileSpriteState');
var self;

tileSpriteState.create = function () {
    self = tileSpriteState;
    self.clouds = self.addTileSprite(0, 0, 400, 300, 'clouds');
    self.mountains = self.addTileSprite(0, 100, 400, 200, 'mountains');
    self.snow = self.addTileSprite(0, 0, 400, 300, 'snow');
    self.snow2 = self.addTileSprite(-100, -100, 500, 400, 'snow');

    console.log(self.currentState().name);
};

tileSpriteState.update = function () {
    self.clouds.scroll('left', 5);
    self.mountains.scroll('left', 15);
    self.snow.scroll('left', 150);
    self.snow.scroll('down', 300);
    self.snow2.scroll('left', 250);
    self.snow2.scroll('down', 450);
};
