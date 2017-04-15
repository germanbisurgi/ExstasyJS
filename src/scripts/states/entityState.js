var entityState = new Extasy.state('entityState');

entityState.preload = function () {}

entityState.create = function () {

    var H = {
        name: 'hero',
        position: {x: 50, y: 50, z: 0},
        size: {w: 50, h: 50},
        velocity: {x: 2, y: 2},
        sprite: new Extasy.sprite(this.game.assets.player, 32, 32)
    }

    console.log(H);

    this.game.entities.push(H);

    this.UP = this.game.input.keyboard.ArrowUp;
    this.DOWN = this.game.input.keyboard.ArrowDown;
    this.LEFT = this.game.input.keyboard.ArrowLeft;
    this.RIGHT = this.game.input.keyboard.ArrowRight;

}

entityState.update = function () {

    var renderer = this.game.renderer;
    var H = this.game.entities[0];

    if (this.DOWN.isPressed)   {H.sprite.animate(0, [1, 2, 1, 0], 5);}
    if (this.LEFT.isPressed)   {H.sprite.animate(1, [1, 2, 1, 0], 5);}
    if (this.RIGHT.isPressed)  {H.sprite.animate(2, [1, 2, 1, 0], 5);}
    if (this.UP.isPressed)     {H.sprite.animate(3, [1, 2, 1, 0], 5);}

    renderer.clear();
    renderer.drawImage(H.sprite.sheet, H.sprite.x, H.sprite.y, H.sprite.w, H.sprite.h, H.position.x, H.position.y, H.size.w, H.size.h);
    
}