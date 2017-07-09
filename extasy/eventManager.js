var EventManager = function (game) {

    "use strict";
    var self = this;
    self.game = game;
    self.events = new Extasy.pool();

    self.list = function () {
        return self.events.list();
    };

    self.add = function(eventName, callback) {
        var event = new Extasy.event(eventName, callback, self.game);
        self.events.add(event);
        return event;
    };

    self.remove = function(eventName) {
        self.events.elements.forEach(function (event) {
            if (event.content.name === eventName) {
                event.active = false;
            }
        });
    };

    self.clear = function() {
        self.events.clear();
    };

};