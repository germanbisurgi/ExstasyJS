AssetManager = function (game) {

    "use strict";
    var self = this;
    self.game = game
    self.isDone = false;
    self.toLoad;
    self.loaded;

    // Checks if an asset already exist.
    self.getAsset = function(assetName) {
        var output = false;
        self.game.assets.forEach(function(asset, i) {
            if (asset.name == assetName) {
                output = asset;
            }
        });
        return output;
    }

    self.loadAssets = function(assets) {
        self.finished = false;
        self.toLoad = assets.length;
        self.loaded = 0;
        if (self.loaded != self.toLoad) {
            assets.forEach(function(asset, i) {

                // if image does not already exist.
                if (!self.getAsset(asset.name)) {

                    var assetObj = {
                        name: asset.name,
                        image: new Image()
                    };
                    assetObj.image.onload = function() {
                        self.game.assets.push(assetObj);
                        self.loaded++;
                        console.log('loaded: ', self.loaded);

                        // Checks if all assets where loaded.
                        if (self.loaded == self.toLoad) {
                            self.finished = true;
                            console.log("assets are loaded");
                        }
                    }
                    assetObj.image.src = asset.path;


                } else {
                    self.toLoad--;
                    // Exception.
                    console.log('EXCEPTION: This asset is already in the list ->', asset);
                }
            });
        }
    }

}