var TweenManager = function (game) {

    "use strict";
    var self = this;
    self.game = game;
    self.tweens = new Extasy.pool();

    self.list = function () {
        return self.tweens.list();
    };

    self.add = function(entity) {
        self.tweens.add(entity);
    };

    self.remove = function(entity) {
        self.tweens.remove(entity);
    };

    self.clear = function() {
        self.tweens.clear();
    };

};