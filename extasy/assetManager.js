var AssetManager = function (game) {

    "use strict";
    var self = this;
    self.game = game
    self.loading = false;
    self.downloadQueue = [];
    self.successCount = 0;
    self.errorCount = 0;

    self.init = function () {
        self.downloadQueue = [];
        self.successCount = 0;
        self.errorCount = 0;
    }

    self.loadImage = function(imageName, path) {
        self.downloadQueue.push({
            type: 'image',
            name: imageName,
            path: path
        });
    }

    self.loadSpriteSheet = function(spriteSheetName, path, spriteWidth, spriteHeight) {
        self.downloadQueue.push({
            type: 'spriteSheet',
            name: spriteSheetName,
            path: path,
            spriteWidth: spriteWidth,
            spriteHeight: spriteHeight
        });
    }

    self.getAsset = function(assetName) {
        var output = false;
        self.game.assets2.forEach(function (asset) {
            if (asset.name === assetName) {
                output = asset;
            }
        });
        return output;
    }

    self.loadAll = function () {
        if (self.downloadQueue.length > 0) {

            self.loading = true;
            self.downloadQueue.forEach(function (asset) {

                if (!self.getAsset(asset.name)) {

                    // ------------------------------------- image and sprite sheets

                    if (asset.type === 'image' || asset.type === 'spriteSheet') {

                        var img = new Image();

                        img.onload = function() {
                            self.successCount++;
                            if (self.isDone()) {
                                self.loading = false;
                            }
                        }

                        img.onerror = function() {
                            self.errorCount++;
                            if (self.isDone()) {
                                self.loading = false;
                            }
                        }

                        img.src = asset.path;

                        if (asset.type === 'image') {
                            var imgObj = {
                                type: 'image',
                                name: asset.name,
                                image: img
                            }
                        }

                        if (asset.type === 'spriteSheet') {
                            var imgObj = {
                                type: 'spreiteSheet',
                                name: asset.name,
                                sprite: new Extasy.sprite(self.game, img, asset.spriteWidth, asset.spriteHeight)
                            }
                        }
                        
                        self.game.assets2.push(imgObj);
                    }


                } else {
                    // Exception.
                    console.log('this asset already exist and will be not queued or loaded ->', asset.name);
                    self.successCount++;
                    if (self.isDone()) {
                        self.loading = false;
                    }
                }

            });
        }
    }

    self.loadProgress = function () {
        var progress = Math.floor((self.successCount + self.errorCount) / self.downloadQueue.length * 100);
        if (isNaN(progress)) {
            progress = 0;
        }
        return progress;
    }

    self.isDone = function () {
        return (self.downloadQueue.length === self.successCount + self.errorCount);
    }

}