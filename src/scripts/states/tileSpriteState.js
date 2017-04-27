var tileSpriteState = new Extasy.state('tileSpriteState');
var tileSprite;

tileSpriteState.create = function () {
    tileSprite = this.addTileSprite(0, 0, 600, 400, 'tileBackground');
}

tileSpriteState.update = function () {
    tileSprite.scroll('down', 1);
    tileSprite.scroll('right', 1);
    
    this.game.renderManager.clear();
    this.game.renderManager.drawImage(
        tileSprite.image,
        tileSprite.sx,
        tileSprite.sy,
        tileSprite.sw,
        tileSprite.sh,
        tileSprite.dx,
        tileSprite.dy,
        tileSprite.dw,
        tileSprite.dh
    );

}
