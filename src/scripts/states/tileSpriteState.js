var tileSpriteState = new Extasy.state('tileSpriteState');
var clouds;
var mountains;
var snow;
var snow2;

tileSpriteState.create = function () {
    clouds = this.addTileSprite(0, 0, 400, 300, 'space');
    mountains = this.addTileSprite(0, 100, 400, 200, 'mountains');
    snow = this.addTileSprite(0, 0, 400, 300, 'snow');
    snow2 = this.addTileSprite(-100, -100, 500, 400, 'snow');
};

tileSpriteState.update = function () {
    clouds.scroll('right', 5);
    mountains.scroll('right', 15);
    snow.scroll('right', 150);
    snow.scroll('down', 300);
    snow2.scroll('right', 250);
    snow2.scroll('down', 450);
};
