var EntityManager = function (game) {

    "use strict";
    var self = this;
    self.game = game;
    self.entities = new Extasy.pool();

    self.list = function () {
        return self.entities.list();
    };

    self.add = function(entity) {
        self.entities.add(entity);
    };

    self.remove = function(entity) {
        self.entities.remove(entity);
    };

    self.clear = function() {
        self.entities.clear();
    };

};