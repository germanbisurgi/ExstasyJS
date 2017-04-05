AssetManager = function (game) {

    "use strict";
    var self = this;
    self.game = game
    self.loading;
    self.downloadQueue = [];
    self.successCount = 0;
    self.errorCount = 0;

    self.loadAssets = function (assets) {
        if (!self.loading) {
            self.loading = true;
            self.downloadQueue = assets;
            self.downloadAll();
        }
    }

    self.downloadAll = function () {
        self.downloadQueue.forEach(function (asset, i) {
            var img = new Image();
            img.onload = function() {
                self.successCount++;
                if (self.isDone) {
                    console.log(asset.name, 'was loaded');
                    self.game.state.preloaded = true;
                    self.loading = false;
                }
            }
            img.onerror = function() {
                this.errorCount++;
                if (self.isDone) {
                    console.log(asset.name, 'error');
                    self.game.state.preloaded = true;
                    self.loading = false;
                }
            }
            img.src = asset.path;
            var imgObj = {
                'name': asset.name,
                'image': img
            }
            self.game.assets.push(imgObj);
        });
    }

    self.isDone = function (assets) {
        return (self.downloadQueue.length == self.successCount + self.errorCount);
    }

}