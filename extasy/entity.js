var Entity = function (game, name) {

    "use strict";
    var self = this;
    self.name = name;
    self.id = (Math.random() * 100000000 | 0).toString(16);

    self.addComponent = function (componentName, component) {
        if (!self[componentName]) {
            self[componentName] = component;
        } else {
            console.log('EXCEPTION: This entity have already this component ->', componentName);
            console.log('the game will be stoped');
            game.stop();
        }
    };
    
};