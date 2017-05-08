var AssetManager = function (game) {

    "use strict";
    var self = this;
    self.game = game;
    self.loading = false;
    self.downloadQueue = [];
    self.successCount = 0;
    self.errorCount = 0;
    self.assets = [];

    self.reset = function () {
        self.downloadQueue = [];
        self.successCount = 0;
        self.errorCount = 0;
    };

    self.loadImage = function(imageName, path) {
        self.downloadQueue.push({
            type: 'image',
            name: imageName,
            path: path
        });
    };

    self.loadSpriteSheet = function(spriteSheetName, path, spriteWidth, spriteHeight) {
        self.downloadQueue.push({
            type: 'spriteSheet',
            name: spriteSheetName,
            path: path,
            spriteWidth: spriteWidth,
            spriteHeight: spriteHeight
        });
    };

    self.getAsset = function(assetName) {
        var output = false;
        self.assets.forEach(function (asset) {
            if (asset.name === assetName) {
                output = asset;
            }
        });
        return output;
    };

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
                                self.reset();
                            }
                        };

                        img.onerror = function() {
                            self.errorCount++;
                            if (self.isDone()) {
                                self.loading = false;
                                self.reset();
                            }
                        };

                        img.src = asset.path;

                        if (asset.type === 'image') {
                            var image = img;
                            image.name = asset.name;
                            self.assets.push(image);
                        }

                        if (asset.type === 'spriteSheet') {
                            var sprite = new Extasy.spriteSheet(img, asset.spriteWidth, asset.spriteHeight);
                            sprite.name = asset.name;
                            self.assets.push(sprite);
                        }
                        
                    }


                } else {
                    // Exception.
                    console.log('this asset already exist and will be not queued or loaded ->', asset.name);
                    self.successCount++;
                    if (self.isDone()) {
                        self.loading = false;
                        self.reset();
                    }
                }

            });
        }
    };

    self.loadProgress = function () {
        var progress = Math.floor((self.successCount + self.errorCount) / self.downloadQueue.length * 100);
        if (isNaN(progress)) {
            progress = 0;
        }
        return progress;
    };

    self.isDone = function () {
        return (self.downloadQueue.length === self.successCount + self.errorCount);
    };

};