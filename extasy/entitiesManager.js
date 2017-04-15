var EntitiesManager = function (game) {

    "use strict";
    var self = this;
    self.game = game

    self.getEntity = function(entityName) {
        var output = false;
        self.game.entities.forEach(function(entity, i) {
            if (entity.name == entityName) {
                output = entity;
            }
        });
        return output;
    }

    self.add = function(entity) {
        if (!self.getEntity(entity.name)) {
            self.game.entities.push(entity);
        } else {
            // Exception.
            console.log('EXCEPTION: This entity is already in the list ->', entity.name);
            self.game.stop();
        }
    }

}