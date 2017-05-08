var EntityManager = function (game) {

    "use strict";
    var self = this;
    self.game = game;
    self.entities = [];

    self.getEntity = function(entityName) {
        var output = false;
        self.game.entityManager.entities.forEach(function(entity) {
            if (entity.name === entityName) {
                output = entity;
            }
        });
        return output;
    };

    self.listEntities = function () {
        return self.game.entityManager.entities;
    };

    self.addEntity = function(entity) {
        self.game.entityManager.entities.push(entity);
    };

};