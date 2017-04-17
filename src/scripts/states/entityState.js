var entityState = new Extasy.state('entityState');
entityState.create = function () {

    var space = this.createEntity(definitions.space);
    var hero = this.createEntity(definitions.hero);

    /*var controller = this.createController('controller'); // new Extasy.controller();
    controller.add('UP', 'keyboard', 'ArrowUp');
    controller.add('DOWN', 'keyboard', 'ArrowDown');
    controller.add('LEFT', 'keyboard', 'ArrowLeft');
    controller.add('RIGHT', 'keyboard', 'ArrowRight');
    controller.add('G', 'keyboard', 'g');
    controller.add('H', 'keyboard', 'h');
    controller.add('F', 'keyboard', 'f');*/


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
    var H = this.getEntity('hero');
    if (this.UP.isPressed && this.LEFT.isPressed)    {H.sprite.animate(3, [1, 2, 1, 0], 5); H.position.x -= H.velocity.x; H.position.y -= H.velocity.y;} else
    if (this.UP.isPressed && this.RIGHT.isPressed)   {H.sprite.animate(3, [1, 2, 1, 0], 5); H.position.x += H.velocity.x; H.position.y -= H.velocity.y;} else
    if (this.DOWN.isPressed && this.LEFT.isPressed)  {H.sprite.animate(0, [1, 2, 1, 0], 5); H.position.x -= H.velocity.x; H.position.y += H.velocity.y;} else
    if (this.DOWN.isPressed && this.RIGHT.isPressed) {H.sprite.animate(0, [1, 2, 1, 0], 5); H.position.x += H.velocity.x; H.position.y += H.velocity.y;} else
    if (this.DOWN.isPressed)   {H.sprite.animate(0, [1, 2, 1, 0], 5); H.position.y += H.velocity.y;} else
    if (this.LEFT.isPressed)   {H.sprite.animate(1, [1, 2, 1, 0], 5); H.position.x -= H.velocity.x;} else
    if (this.RIGHT.isPressed)  {H.sprite.animate(2, [1, 2, 1, 0], 5); H.position.x += H.velocity.x;} else
    if (this.UP.isPressed)     {H.sprite.animate(3, [1, 2, 1, 0], 5); H.position.y -= H.velocity.y;}
    if (this.H.isPressed) {this.cameraZoomIn();}
    if (this.G.isPressed) {this.cameraZoomOut();}
    if (this.F.isPressed) {this.cameraZoomReset();}

    // camera system.
    // this.cameraFollow(hero);
    this.moveCamera(
        (this.game.renderer.width / 2 / this.game.cameraManager.zoom - H.position.x - H.size.w / 2),
        (this.game.renderer.height / 2 / this.game.cameraManager.zoom - H.position.y - H.size.h / 2) 
    );

    // render system.
    var renderer = this.game.renderer;
    this.game.entities.sort(function(a, b) {
        return (a.position.z + a.position.y) - (b.position.z + b.position.y);
    });  
    renderer.clear();
    renderer.context.save();
    renderer.context.scale(this.game.cameraManager.zoom, this.game.cameraManager.zoom);
    renderer.context.translate(this.game.cameraManager.x, this.game.cameraManager.y);
    this.game.entities.forEach(function (e) {
        renderer.drawImage(e.sprite.sheet, e.sprite.x, e.sprite.y, e.sprite.w, e.sprite.h, e.position.x, e.position.y, e.size.w, e.size.h);
    });
    renderer.context.restore();
}