var Game = function(fps) {
    
    "use strict";
    var self = this;

    self.delta;
    self.isPaused = false;
    self.debugMode = true;
    self.clock;
    self.entities = [];

    self.createEntity = function(entityDefinition) {
        var entity = Physics.createEntity(entityDefinition);
        self.entities.push(entity);
        return entity;
    }

    self.stop = function() {
        self.isPaused = true;
    }

    self.continue = function() {
        self.isPaused = false;
    }

    self.run = function(fn) {
        var lastTime = null;
        var requiredElapsed = 1000 / 60;
        function tick(now) {
            if (!self.isPaused) {
                if (!lastTime) {
                    lastTime = Math.floor(now);
                }
                self.delta = now - lastTime;              
                //if (self.delta >= requiredElapsed) {
                    var time = new Date();
                    self.clock = time.getTime();
                    fn();
                    lastTime = Math.floor(now);
                //}
            }
            requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    self.inGameEntities = function(entityId) {
        var entityId = entityId;
        var result = false;
        self.entities.forEach(function(entity, j) {
            if (entity.id === entityId) {
                result = true;
            }
        });
        return result;
    }

}

var Game = new Game();