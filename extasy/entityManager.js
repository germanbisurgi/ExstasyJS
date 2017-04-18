var EntityManager = function (game) {

    "use strict";
    var self = this;
    self.game = game;

    self.getEntity = function(entityName) {
        var output = false;
        self.game.entities.forEach(function(entity, i) {
            if (entity.name == entityName) {
                output = entity;
            }
        });
        return output;
    }

    self.addEntity = function(entity) {
        if (!self.getEntity(entity.name)) {
            self.game.entities.push(entity);
        } else {
            // Exception.
            console.log('EXCEPTION: This entity is already in the list ->', entity.name);
            self.game.stop();
        }
    }

    self.createEntity = function(entDef, x, y, z) {
        var entity = {};
        entity.id = (Math.random() * 100000000 | 0).toString(16);
        entity.name = entDef.name ? entDef.name : null;
        entity.position = {x: x, y: y, z: z};
        entity.size = entDef.size ? entDef.size : null;
        entity.velocity = entDef.velocity ? entDef.velocity : null;
        if (entDef.sprite) {
            entity.sprite = new Extasy.sprite(
                self.game,
                self.game.assets[entDef.sprite.name],
                entDef.sprite.width,
                entDef.sprite.height
            );
        } else if (entDef.pattern) {
            entity.pattern = self.game.assets[entDef.pattern];
        }

        self.game.entities.push(entity);

        return entity;
    }

}