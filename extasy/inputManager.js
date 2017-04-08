InputManager = function (game) {
    "use strict";
    var self = this;
    self.game = game;
    self.list = [];

    self.set = function(inputDefinition) {
        self.game.inputs = inputDefinition
    }


}