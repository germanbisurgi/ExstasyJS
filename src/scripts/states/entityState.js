var entityState = new Extasy.state('entityState');
entityState.create = function () {

    var scroller = this.createEntity(definitions.scroller, 0, 0, 10);
    var hero = this.createEntity(definitions.hero, 150, 75, 20);

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
    I.sprite.scroll('down', 1);


    var controller = this.getController('standard');
    if (controller.UP.isPressed && controller.LEFT.isPressed) {
        H.sprite.animate(3, [1, 2, 1, 0], 5);
        H.position.x -= H.velocity.x;
        H.position.y -= H.velocity.y;
    } else if (controller.UP.isPressed && controller.RIGHT.isPressed) {
        H.sprite.animate(3, [1, 2, 1, 0], 5);
        H.position.x += H.velocity.x;
        H.position.y -= H.velocity.y;
    } else if (controller.DOWN.isPressed && controller.LEFT.isPressed) {
        H.sprite.animate(0, [1, 2, 1, 0], 5);
        H.position.x -= H.velocity.x;
        H.position.y += H.velocity.y;
    } else if (controller.DOWN.isPressed && controller.RIGHT.isPressed) {
        H.sprite.animate(0, [1, 2, 1, 0], 5);
        H.position.x += H.velocity.x;
        H.position.y += H.velocity.y;
    } else if (controller.DOWN.isPressed) {
        H.sprite.animate(0, [1, 2, 1, 0], 5);
        H.position.y += H.velocity.y;
    } else if (controller.LEFT.isPressed) {
        H.sprite.animate(1, [1, 2, 1, 0], 5);
        H.position.x -= H.velocity.x;
    } else if (controller.RIGHT.isPressed) {
        H.sprite.animate(2, [1, 2, 1, 0], 5);
        H.position.x += H.velocity.x;
    } else if (controller.UP.isPressed) {
        H.sprite.animate(3, [1, 2, 1, 0], 5);
        H.position.y -= H.velocity.y;
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

    this.cameraFollow(H);
}