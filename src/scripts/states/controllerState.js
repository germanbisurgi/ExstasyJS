var controllerState = new Extasy.state('controllerState');

controllerState.preload = function () {}

controllerState.create = function () {
    // create a controller and define it inputs.
    var controller = this.createController('standard');
    controller.add('UP', 'keyboard', 'ArrowUp');
    controller.add('DOWN', 'keyboard', 'ArrowDown');
    controller.add('LEFT', 'keyboard', 'ArrowLeft');
    controller.add('RIGHT', 'keyboard', 'ArrowRight');
    controller.add('G', 'keyboard', 'g');
    controller.add('H', 'keyboard', 'h');
    controller.add('F', 'keyboard', 'f');
    this.game.stateManager.switch('tileSpriteState');
}

controllerState.update = function () {}
