var entityState = new Extasy.state('entityState');

entityState.preload = function () {}

entityState.create = function () {

    var entity = {
        name: 'german',
        image: this.game.assets.rainbow,
        x: 50,
        y: 50,
        z: 0,
        width: 50,
        height: 50,
        speedX: 5,
        speedY: 5
    }

    this.game.entities.push(entity);

    this.UP = this.game.input.keyboard.ArrowUp;
    this.DOWN = this.game.input.keyboard.ArrowDown;
    this.LEFT = this.game.input.keyboard.ArrowLeft;
    this.RIGHT = this.game.input.keyboard.ArrowRight;

}

entityState.update = function () {
    var renderer = this.game.renderer;
    var myEntity = this.game.entities[0];

    if (this.UP.isPressed) {
        myEntity.y -= myEntity.speedY;
    }
    if (this.DOWN.isPressed) {
        myEntity.y += myEntity.speedY;
    }
    if (this.LEFT.isPressed) {
        myEntity.x -= myEntity.speedX;
    }
    if (this.RIGHT.isPressed) {
        myEntity.x += myEntity.speedX;
    }

    this.game.entities.forEach(function (entity) {
        renderer.clear();
        renderer.drawRectangle(entity.x, entity.y, entity.width, entity.height);
    })
    
    // this.game.stop();
}