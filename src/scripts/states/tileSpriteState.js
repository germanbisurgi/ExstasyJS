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
}

tileSpriteState.update = function () {
    no.scroll('left', 20);
    no.scroll('up', 20);
    ne.scroll('right', 20);
    ne.scroll('up', 20);
    so.scroll('left', 20);
    so.scroll('down', 20);
    se.scroll('right', 20);
    se.scroll('down', 20);
}
