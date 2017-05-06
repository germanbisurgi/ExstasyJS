var EntityManager = function (game) {

    "use strict";
    var self = this;
    self.game = game;

    self.getEntity = function(entityName) {
        var output = false;
        self.game.entities.forEach(function(entity) {
            if (entity.name === entityName) {
                output = entity;
            }
        });
        return output;
    };

    self.listEntities = function () {
        return self.game.entities;
    };

    self.addEntity = function(entity) {
        self.game.entities.push(entity);
    };

};