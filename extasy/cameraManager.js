var CameraManager = function (game) {

    "use strict";
    var self = this;
    self.active = null;
    self.cameras = [];

    self.getCamera = function(cameraName) {
        var output = false;
        self.cameras.forEach(function(camera) {
            if (camera.name === cameraName) {
                output = camera;
            }
        });
        return output;
    };

    self.listCameras = function () {
        return self.cameras;
    };

    self.addCamera = function(camera) {
        self.cameras.push(camera);
    };

    self.switch = function(cameraName) {
        var requestedCamera = self.getCamera(cameraName);
        if (requestedCamera) {
            self.active = requestedCamera;
        } else {
            // Exception.
            console.log('EXCEPTION: ', cameraName, 'was not added.');
            console.log('the game will be stoped');
            game.stop();
        }
    };

    self.addCamera(new Extasy.camera(game, 'main'));
    self.switch('main');

};