var entityState = new Extasy.state('entityState');

entityState.create = function () {

    var B = {
        name: 'background',
        position: {x: 0, y: 0, z: 10},
        size: {w: 402, h: 402},
        sprite: new Extasy.sprite(this.game.assets.space, 402, 402)
    }

    this.game.entitiesManager.add(B);

    var H = {
        name: 'hero',
        position: {x: 50, y: 50, z: 20},
        size: {w: 50, h: 50},
        velocity: {x: 3, y: 3},
        sprite: new Extasy.sprite(this.game.assets.player, 32, 32)
    }

    this.game.entitiesManager.add(H);

    var E = {
        name: 'enemy',
        position: {x: 150, y: 150, z: 20},
        size: {w: 50, h: 50},
        velocity: {x: 3, y: 3},
        sprite: new Extasy.sprite(this.game.assets.player, 32, 32)
    }

    this.game.entitiesManager.add(E);

    this.UP = this.game.input.keyboard.ArrowUp;
    this.DOWN = this.game.input.keyboard.ArrowDown;
    this.LEFT = this.game.input.keyboard.ArrowLeft;
    this.RIGHT = this.game.input.keyboard.ArrowRight;
    this.G = this.game.input.keyboard.g;
    this.H = this.game.input.keyboard.h;
    this.F = this.game.input.keyboard.f;

}

entityState.update = function () {

    // input system.
    var H = this.game.entitiesManager.getEntity('hero');
    if (this.UP.isPressed && this.LEFT.isPressed)    {H.sprite.animate(3, [1, 2, 1, 0], 5); H.position.x -= H.velocity.x; H.position.y -= H.velocity.y;} else
    if (this.UP.isPressed && this.RIGHT.isPressed)   {H.sprite.animate(3, [1, 2, 1, 0], 5); H.position.x += H.velocity.x; H.position.y -= H.velocity.y;} else
    if (this.DOWN.isPressed && this.LEFT.isPressed)  {H.sprite.animate(0, [1, 2, 1, 0], 5); H.position.x -= H.velocity.x; H.position.y += H.velocity.y;} else
    if (this.DOWN.isPressed && this.RIGHT.isPressed) {H.sprite.animate(0, [1, 2, 1, 0], 5); H.position.x += H.velocity.x; H.position.y += H.velocity.y;} else
    if (this.DOWN.isPressed)   {H.sprite.animate(0, [1, 2, 1, 0], 5); H.position.y += H.velocity.y;} else
    if (this.LEFT.isPressed)   {H.sprite.animate(1, [1, 2, 1, 0], 5); H.position.x -= H.velocity.x;} else
    if (this.RIGHT.isPressed)  {H.sprite.animate(2, [1, 2, 1, 0], 5); H.position.x += H.velocity.x;} else
    if (this.UP.isPressed)     {H.sprite.animate(3, [1, 2, 1, 0], 5); H.position.y -= H.velocity.y;}
    if (this.H.isPressed) {this.game.camera.zoomIn();}
    if (this.G.isPressed) {this.game.camera.zoomOut();}
    if (this.F.isPressed) {this.game.camera.zoomReset();}

    // camera system.
    this.game.camera.move(
        (this.game.renderer.width / 2 / this.game.camera.zoom - H.position.x - H.size.w / 2),
        (this.game.renderer.height / 2 / this.game.camera.zoom - H.position.y - H.size.h / 2) 
    );

    // render system.
    var renderer = this.game.renderer;
    this.game.entities.sort(function(a, b) {
        return (a.position.z + a.position.y) - (b.position.z + b.position.y);
    });  
    renderer.clear();
    renderer.context.save();
    renderer.context.scale(this.game.camera.zoom, this.game.camera.zoom);
    renderer.context.translate(this.game.camera.x, this.game.camera.y);
    this.game.entities.forEach(function (e) {
        renderer.drawImage(e.sprite.sheet, e.sprite.x, e.sprite.y, e.sprite.w, e.sprite.h, e.position.x, e.position.y, e.size.w, e.size.h);
    });
    renderer.context.restore();
}