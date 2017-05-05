var tileSpriteState = new Extasy.state('tileSpriteState');
var tileSprite;

tileSpriteState.create = function () {
    tileSprite = this.addTileSprite(0, 0, 200, 150, 'tileBackground');
}

tileSpriteState.update = function () {
    tileSprite.scroll('right', 60);
    tileSprite.scroll('down', 30);
    tileSprite.rotate(60);
}
