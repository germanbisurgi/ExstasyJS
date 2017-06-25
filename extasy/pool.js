var Pool = function () {

    "use strict";
    var self = this;
    self.elements = [];

    // reuse a deactivated object or create a new one.
    self.add = function (elementToAdd) {
        var inactive = self.getInactive();
        if (inactive) {
            inactive.active = true;
            inactive.content = elementToAdd;
        } else {
            var element = {
                id: (Math.random() * 100000000 | 0).toString(16),
                active: true,
                content: elementToAdd
            };
            self.elements.push(element);
        }
    };

    // deactivate an object.
    self.remove = function (poolElement) {
        self.elements.forEach(function(element) {
            if (element.content === poolElement) {
                element.active = false;
            }
        });
    };

    // list active elements
    self.list = function () {
        var output = [];
        self.elements.forEach(function(element) {
            if (element.active) {
                output.push(element.content);
            }
        });
        return output;
    };

    self.listInactive = function () {
        var output = [];
        self.elements.forEach(function(element) {
            if (!element.active) {
                output.push(element.content);
            }
        });
        return output;
    };

    // get an inactive element in the pool.
    self.getInactive = function () {
        var output = false;
        self.elements.forEach(function(element) {
            if (element.active === false) {
                output = element;
            }
        });
        return output;
    };

    // deactivate all elements in the pool.
    self.clear = function () {
        self.elements.forEach(function(element) {
            element.active = false;
        });
    };



};