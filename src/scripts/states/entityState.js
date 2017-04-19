var entityState = new Extasy.state('entityState');
entityState.create = function () {

    var scroller = this.createEntity(definitions.scroller, 50, 50, 10);
    var hero = this.createEntity(definitions.hero, 150, 75, 20);
    var enemy = this.createEntity(definitions.hero, 50, 50, 20);

    var controller = this.createController('standard');
    controller.add('UP', 'keyboard', 'ArrowUp');
    controller.add('DOWN', 'keyboard', 'ArrowDown');
    controller.add('LEFT', 'keyboard', 'ArrowLeft');
    controller.add('RIGHT', 'keyboard', 'ArrowRight');
    controller.add('G', 'keyboard', 'g');
    controller.add('H', 'keyboard', 'h');
    controller.add('F', 'keyboard', 'f');

}
entityState.update = function () {

    var H = this.getEntity('hero');
    var I = this.getEntity('scroller');
    
    var controller = this.getController('standard');
    if (controller.UP.isPressed && controller.LEFT.isPressed) {
        H.sprite.animate(3, [1, 2, 1, 0], 5);
        H.position.x -= H.velocity.x;
        H.position.y -= H.velocity.y;
        I.position.x -= I.velocity.x;
        I.position.y -= H.velocity.y;
        I.sprite.scroll('down', 1);
        I.sprite.scroll('right', 1);
    } else if (controller.UP.isPressed && controller.RIGHT.isPressed) {
        H.sprite.animate(3, [1, 2, 1, 0], 5);
        H.position.x += H.velocity.x;
        H.position.y -= H.velocity.y;
        I.position.x += I.velocity.x;
        I.position.y -= H.velocity.y;
        I.sprite.scroll('down', 1);
        I.sprite.scroll('left', 1);
    } else if (controller.DOWN.isPressed && controller.LEFT.isPressed) {
        H.sprite.animate(0, [1, 2, 1, 0], 5);
        H.position.x -= H.velocity.x;
        H.position.y += H.velocity.y;
        I.position.x -= I.velocity.x;
        I.position.y += H.velocity.y;
        I.sprite.scroll('up', 1);
        I.sprite.scroll('right', 1);
    } else if (controller.DOWN.isPressed && controller.RIGHT.isPressed) {
        H.sprite.animate(0, [1, 2, 1, 0], 5);
        H.position.x += H.velocity.x;
        H.position.y += H.velocity.y;
        I.position.x += I.velocity.x;
        I.position.y += H.velocity.y;
        I.sprite.scroll('up', 1);
        I.sprite.scroll('left', 1);
    } else if (controller.DOWN.isPressed) {
        H.sprite.animate(0, [1, 2, 1, 0], 5);
        H.position.y += H.velocity.y;
        I.position.y += H.velocity.y;
        I.sprite.scroll('up', 1);
    } else if (controller.LEFT.isPressed) {
        H.sprite.animate(1, [1, 2, 1, 0], 5);
        H.position.x -= H.velocity.x;
        I.position.x -= I.velocity.x;
        I.sprite.scroll('right', 1);
    } else if (controller.RIGHT.isPressed) {
        H.sprite.animate(2, [1, 2, 1, 0], 5);
        H.position.x += H.velocity.x;
        I.position.x += I.velocity.x;
        I.sprite.scroll('left', 1);
    } else if (controller.UP.isPressed) {
        H.sprite.animate(3, [1, 2, 1, 0], 5);
        H.position.y -= H.velocity.y;
        I.position.y -= H.velocity.y;
        I.sprite.scroll('down', 1);
    }
    if (controller.H.isPressed) {
        this.cameraZoomIn();
    }
    if (controller.G.isPressed) {
        this.cameraZoomOut();
    }
    if (controller.F.isPressed) {
        this.cameraZoomReset();
    }

    this.cameraFollow(H); // lerp?
}