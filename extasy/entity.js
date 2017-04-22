var Entity = function (game, name) {

    "use strict";
    var self = this;
    self.game = game;
    self.name = name;
    self.id = (Math.random() * 100000000 | 0).toString(16);

    self.addComponent = function (componentName, component) {
        var component = component;
        component.game = self.game;
        self[componentName] = component;
    }
    
}