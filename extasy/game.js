var Game = function (name, progress) {

    "use strict";
    var self = this;
    self.name = name;
    self.fps = 60;
    self.isPaused = false;
    self.state = null;
    self.assets = [];

    self.stateManager = new StateManager(self);
    self.assetManager = new AssetManager(self);

    self.run = function() {
        var lastTime = 0;
        var requiredElapsed = 1000 / self.fps;
        function tick(now) {

            requestAnimationFrame(tick);

            if (!self.isPaused) {
                if (!lastTime) {
                    lastTime = Math.floor(now);
                }
                self.delta = now - lastTime;   

                if (self.delta > requiredElapsed) {

                    console.log('START');
                    console.log('current state is: ', self.state.name)
                    console.log('is ', self.state.name, 'preload?: ', self.state.preloaded)
                    console.log('is ', self.state.name, 'created?: ', self.state.created)
                    console.log('successCount: ', self.assetManager.successCount, 'errorCount: ', self.assetManager.errorCount, 'downloadQueue: ', self.assetManager.downloadQueue.length)
                    console.log(self.assetManager.loadProgress());
                    console.log(self.assets);

                    if (!self.state.preloaded) {
                        console.log(self.state.name, 'preload')
                        self.state.preload();
                        self.state.preloaded = true;
                    }

                    if (!self.state.created && self.state.preloaded && self.assetManager.loadProgress() === 100) {
                        console.log(self.state.name, 'create')
                        self.state.create();
                        self.state.created = true;
                    }
                    
                    if (self.state.created) {
                        console.log(self.state.name, 'update')
                        self.state.update();
                    }

                    progress.textContent += self.assetManager.loadProgress() + ', ';

                    console.log('END');
                    console.log('current state is: ', self.state.name)
                    console.log('is ', self.state.name, 'preload?: ', self.state.preloaded)
                    console.log('is ', self.state.name, 'created?: ', self.state.created)
                    console.log('successCount: ', self.assetManager.successCount, 'errorCount: ', self.assetManager.errorCount, 'downloadQueue: ', self.assetManager.downloadQueue.length)
                    console.log(self.assetManager.loadProgress());
                    console.log(self.assets);

                    lastTime = Math.floor(now);
                }
            }
        }
        requestAnimationFrame(tick);
    }

    self.stop = function() {
        self.isPaused = true;
    }

    self.continue = function() {
        self.isPaused = false;
    }

}