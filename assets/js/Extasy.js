//crazy, cute, solid,spicy, fresh
var Extasy =  {

    //--------------------------------------------------------------------- Game

    Game: function() {
        var self = this;

        self.fps = 60;
        self.isPaused = false;
        self.stateList = [];
        self.state;
        
        // Checks if a state already exist.
        self.getState = function(stateName) {
            var output = false;
            self.stateList.forEach(function(state, i) {
                if (state.name == stateName) {
                    output = state;
                }
            });
            return output;
        }

        // Add a the state object if not exists.
        self.addState = function(stateObject) {
            if (!self.getState(stateObject.name)) {
                self.stateList.push(stateObject);
            }
        }

        // Set the current state to the new state if exists.
        self.switchState = function(stateName) {
            var requestedState = self.getState(stateName);
            if (requestedState) {
                self.state = requestedState;
            }
        }

        // Start the main loop.
        self.start = function() {
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
                        self.state.update();
                        lastTime = Math.floor(now);
                    }
                }
            }
            requestAnimationFrame(tick); 
        }

        // Pause the main loop.
        self.pause = function() {
            self.isPaused = true;
        }

        // Resume the main loop.
        self.resume = function() {
            self.isPaused = false;
        }

    },

    //-------------------------------------------------------------------- State

    State: function(name) {
        var self = this;

        self.name = name;
        self.isInitialized = false;
        self.assetsAreLoaded = false;
        self.assets = [
            {'name': 'mine'}
        ];

        // Checks if an asset already exist.
        self.getAsset = function(assetName) {
            var output = false;
            self.assets.forEach(function(asset, i) {
                if (asset.name == assetName) {
                    output = asset;
                }
            });
            return output;
        }


        self.loadAssets = function(assetsDefinition) {
            self.assetsAreLoaded = false;
            var assetsToLoad = assetsDefinition.length;
            var loadedAssets = 0;
            if (self.assets.length != self.assetsToLoad) {
                assetsDefinition.forEach(function(asset, i) {
                    if (asset.type == 'image') {
                        if (!self.getAsset(asset.name)) {
                            self.assets.push(asset);
                            console.log(asset);
                            loadedAssets++;
                            console.log("loaded assets: ", loadedAssets);
                            if (loadedAssets === assetsToLoad) {
                                self.assetsAreLoaded = true;
                                console.log("assets are loaded");
                                self.isInitialized = true;
                            }
                        } else {
                            assetsToLoad--;
                        }
                    } else if (asset.type == 'audio') {
                        if (!self.getAsset(asset.name)) {
                            self.assets.push(asset);
                            console.log(asset);
                            loadedAssets++;
                            console.log("loaded assets: ", loadedAssets);
                            if (loadedAssets === assetsToLoad) {
                                self.assetsAreLoaded = true;
                                console.log("assets are loaded");
                                self.isInitialized = true;
                            }
                        }
                    } else {
                        assetsToLoad--;
                    }
                });
            }
        }

    }

}