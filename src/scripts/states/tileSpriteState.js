var tileSpriteState = new Extasy.state('tileSpriteState');
var clouds;
var mountains;
var snow;
var snow2;

tileSpriteState.create = function () {
    clouds = this.addTileSprite(0, 0, 400, 300, 'clouds');
    mountains = this.addTileSprite(0, 100, 400, 200, 'mountains');
    snow = this.addTileSprite(0, 0, 400, 300, 'snow');
    snow2 = this.addTileSprite(-100, -100, 500, 400, 'snow');
};

tileSpriteState.update = function () {
    clouds.scroll('left', 5);
    mountains.scroll('left', 15);
    snow.scroll('left', 150);
    snow.scroll('down', 300);
    snow2.scroll('left', 250);
    snow2.scroll('down', 450);
};
