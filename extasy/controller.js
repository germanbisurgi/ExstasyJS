var Controller = function (game, name) {

    "use strict";
    var self = this;
    self.game = game;
    self.name = name;

    self.add = function (name, device, input) {
        self[name] = self.game.inputManager[device][input];
    }

}