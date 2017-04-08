AssetManager = function (game) {

    "use strict";
    var self = this;
    self.game = game
    self.loading;
    self.downloadQueue = [];
    self.successCount = 0;
    self.errorCount = 0;

    self.loadAssets = function (assets) {
        self.downloadQueue = [];
        self.successCount = 0;
        self.errorCount = 0;
        if (!self.loading) {
            self.loading = true;
            self.downloadQueue = assets;
            self.downloadAll();
        }
    }

    self.getAsset = function(assetName) {
        var output = false;
        self.game.assets.forEach(function (asset, i) {
            if (asset.name == assetName) {
                output = asset;
            }
        });
        return output;
    }

    self.downloadAll = function () {
        self.downloadQueue.forEach(function (asset, i) {

            if (!self.getAsset(asset.name)) {

                var img = new Image();
                img.onload = function() {
                    self.successCount++;
                    if (self.isDone) {
                        // console.log(asset.name, 'was loaded');
                        self.loading = false;
                    }
                }
                img.onerror = function() {
                    self.errorCount++;
                    if (self.isDone) {
                        // console.log(asset.name, 'error');
                        self.loading = false;
                    }
                }
                img.src = asset.path;
                var imgObj = {
                    'name': asset.name,
                    'image': img
                }
                self.game.assets.push(imgObj);

            } else {
                // Exception.
                console.log('this asset already exist');
                self.successCount++;
                if (self.isDone) {
                    self.loading = false;
                }
            }

        });
    }

    self.loadProgress = function () {
        return Math.floor((self.successCount + self.errorCount) / self.downloadQueue.length * 100);
    }

    self.isDone = function (assets) {
        return (self.downloadQueue.length == self.successCount + self.errorCount);
    }

}