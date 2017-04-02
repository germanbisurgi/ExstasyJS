State = function (name) {

    "use strict";
    var self = this;
    self.name = name;
    self.preloaded = false;
    self.created = false;

    self.preload = function () {}
    self.create = function () {}
    self.update = function () {}

}