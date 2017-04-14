var entityState = new Extasy.state('entityState');

entityState.preload = function () {}

entityState.create = function () {

    var H = {
        name: 'hero',
        x: 50,
        y: 50,
        z: 0,
        w: 50,
        h: 50,
        vx: 2,
        vy: 2,
        spriteSheet: this.game.assets.player,
        sx: 0,
        sy: 0,
        sw: 32,
        sh: 32,
        vel: 10,
        sequence: [1, 2, 1, 0],
        counter: 0
    }

    this.game.entities.push(H);

    this.UP = this.game.input.keyboard.ArrowUp;
    this.DOWN = this.game.input.keyboard.ArrowDown;
    this.LEFT = this.game.input.keyboard.ArrowLeft;
    this.RIGHT = this.game.input.keyboard.ArrowRight;

}

entityState.update = function () {

    var renderer = this.game.renderer;
    var H = this.game.entities[0];
    var BG = this.game.entities[1];

    if (this.UP.isPressed)    {
        H.sy = 96;
        if (this.game.frame % H.vel === 0) {
            H.counter = (H.counter + 1) % H.sequence.length;
        }
        H.sx = H.sw * H.sequence[H.counter];
    }
    if (this.DOWN.isPressed)  {
        H.sy = 0;
        if (this.game.frame % H.vel === 0) {
            H.counter = (H.counter + 1) % H.sequence.length;
        }
        H.sx = H.sw * H.sequence[H.counter];
    }
    if (this.LEFT.isPressed)  {
        H.sy = 32;
        if (this.game.frame % H.vel === 0) {
            H.counter = (H.counter + 1) % H.sequence.length;
        }
        H.sx = H.sw * H.sequence[H.counter];
    }
    if (this.RIGHT.isPressed) {
        H.sy = 64;
        if (this.game.frame % H.vel === 0) {
            H.counter = (H.counter + 1) % H.sequence.length;
        }
        H.sx = H.sw * H.sequence[H.counter];
    }

    renderer.clear();
    renderer.drawImage(H.spriteSheet, H.sx, H.sy, H.sw, H.sh, H.x, H.y, H.w, H.h);
    
}