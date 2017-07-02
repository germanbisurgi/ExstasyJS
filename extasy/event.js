var Event = function (name, callback, game) {

    "use strict";
    var self = this;
    self.game = game;
    self.name = name;
    self.callback = callback;
    
};