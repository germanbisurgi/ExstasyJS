var tileSpriteState = new Extasy.state('tileSpriteState');
var no;
var ne;
var so;
var se;

tileSpriteState.create = function () {
    no = this.addTileSprite(0, 0, 200, 150, 'tileBackground');
    ne = this.addTileSprite(200, 0, 200, 150, 'tileBackground');
    so = this.addTileSprite(0, 150, 200, 150, 'tileBackground');
    se = this.addTileSprite(200, 150, 200, 150, 'tileBackground');
    console.log(this.game.entities);
}

tileSpriteState.update = function () {
    no.scroll('left', 0.2);
    no.scroll('up', 0.2);
    ne.scroll('right', 0.2);
    ne.scroll('up', 0.2);
    so.scroll('left', 0.2);
    so.scroll('down', 0.2);
    se.scroll('right', 0.2);
    se.scroll('down', 0.2);
}
