var Tween = function (entity, properties, options, game) {

    "use strict";
    var self = this;
    self.game = game;
    self.entity = entity;
    self.properties = properties;
    self.options = options;
    self.time = 0;

    self.update = function () {

        self.time += self.game.timeManager.delta;
        
        if (self.time <= self.options.duration) {
            var quantity = 150 * self.time / self.options.duration;
            self.entity.dx = Math.ceil(quantity);
        }


        console.log(self.time, self.entity.dx);

    }


};