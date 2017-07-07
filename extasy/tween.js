var Tween = function (entity, properties, options, game) {

    "use strict";
    var self = this;
    self.game = game;
    self.entity = entity;
    self.properties = properties;
    self.options = options;
    self.delta = null;

    self.update = function () {
        self.delta = self.game.timeManager.delta;
        console.log(self.delta);
    }


};