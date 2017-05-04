var tileSpriteState = new Extasy.state('tileSpriteState');
var tileSprite;

tileSpriteState.create = function () {
    tileSprite = this.addTileSprite(0, 0, 200, 150, 'tileBackground');
}

tileSpriteState.update = function () {
    tileSprite.scroll('left', 30);
    tileSprite.scroll('up', 30);
    tileSprite.rotate(-30);
    tileSprite.translate(10, 10);
}
