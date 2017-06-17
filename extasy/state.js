var State = function (name) {

    "use strict";
    var self = this;
    self.name = name;
    self.game = null;
    self.preloaded = false;
    self.created = false;

    self.preload = function () {};
    self.create = function () {};
    self.update = function () {};


    // ------------------------------------------------------------------- audio

    self.addAudio = function (audioName, volume, loop) {
        var audio = self.game.assetManager.getAsset(audioName);
        audio.volume = volume;
        audio.loop = loop;
        return audio;
    };

    // -------------------------------------------------------------------- game

    self.pps = function (px) {
        return px * self.game.delta / 1000;
    };

    // ------------------------------------------------------------------ assets

    self.loadAudio = function (audioName, path) {
        self.game.assetManager.loadAudio(audioName, path);
    };

    self.loadImage = function (imageName, path) {
        self.game.assetManager.loadImage(imageName, path);
    };

    self.loadSpriteSheet = function (spriteSheetName, path, spriteWidth, spriteHeight) {
        self.game.assetManager.loadSpriteSheet(spriteSheetName, path, spriteWidth, spriteHeight);
    };

    // ------------------------------------------------------------------ render

     self.createPattern = function (image, repeat) {
        return self.game.renderManager.createPattern(image, repeat);
    };

    // ------------------------------------------------------------------ assets

    self.getAsset = function (assetName) {
        return self.game.assetManager.getAsset(assetName);
    };

    self.loadImage = function (imageName, path) {
        self.game.assetManager.loadImage(imageName, path);
    };

    self.loadSpriteSheet = function (spriteSheetName, path, spriteWidth, spriteHeight) {
        self.game.assetManager.loadSpriteSheet(spriteSheetName, path, spriteWidth, spriteHeight);
    };

    // ---------------------------------------------------------------- entities

    self.addTileSprite = function (x, y, dw, dh, imageName) {
        var image = self.getAsset(imageName);
        if (image) {
            var tileSprite = new Extasy.tileSprite(self.game, x, y, dw, dh, image);
            self.game.entityManager.addEntity(tileSprite);
            return tileSprite;
        } else {
            console.log('EXCEPTION: this image is not present ->', imageName);
            console.log('the game will be stoped');
            self.game.stop();
        }
    };

    self.addSprite = function (x, y, spriteSheetName) {
        var spriteSheet = self.getAsset(spriteSheetName);
        if (spriteSheet) {
            var sprite = new Extasy.sprite(self.game, spriteSheet);
            sprite.dx = x;
            sprite.dy = y;
            self.game.entityManager.addEntity(sprite);
            return sprite;
        } else {
            console.log('EXCEPTION: this sprite sheet is not present ->', spriteSheetName);
            console.log('the game will be stoped');
            self.game.stop();
        }
    };

    self.addRectangle = function (x, y, w, h) {
        var rectangle = new Extasy.rectangle(self.game, x, y, w, h);
        rectangle.prerender();
        self.game.entityManager.addEntity(rectangle);
        return rectangle;
    };

    self.addCircle = function (x, y, r) {
        var circle = new Extasy.circle(self.game, x, y, r);
        circle.prerender();
        self.game.entityManager.addEntity(circle);
        return circle;
    };

    self.addPolygon = function (x, y, points) {
        var polygon = new Extasy.polygon(self.game, x, y, points);
        polygon.prerender();
        self.game.entityManager.addEntity(polygon);
        return polygon;
    };

    self.addRegularPolygon = function (x, y, radius, sides) {
        var regularPolygon = new Extasy.regularPolygon(self.game, x, y, radius, sides);
        regularPolygon.prerender();
        self.game.entityManager.addEntity(regularPolygon);
        return regularPolygon;
    };

    self.addTextField = function (x, y, width, height, text, style) {
        var txt = new Extasy.textField(self.game, x, y, width, height, text, style);
        txt.prerender();
        self.game.entityManager.addEntity(txt);
        return txt;
    };

    self.listEntities = function () {
        return self.game.entityManager.listEntities();
    };

    // ----------------------------------------------------------------- physics

    self.setGravity = function (x, y) {
        this.game.physicsManager.world.SetGravity({
            x: x * this.game.physicsManager.scale,
            y: y * this.game.physicsManager.scale
        });
    }

    self.addEdge = function (x1, y1, x2, y2) {
        var body = this.game.physicsManager.createBody(x1, y1, 'static');
        var fixture = this.game.physicsManager.createEdge(0, 0, x2-x1, y2-y1);
        body.CreateFixture(fixture);
        return body;
    }

    self.createBody = function (x, y, type) {
        var body = this.game.physicsManager.createBody(x, y, type);
        return body;
    }

    self.createCircleShape = function (radius) {
        var shape = this.game.physicsManager.createCircleShape(radius);
        return shape;
    }

    self.createRectangleShape = function (w, h) {
        var shape = this.game.physicsManager.createRectangleShape(w, h);
        return shape;
    }

    self.createPolygonShape = function (points) {
        var shape = this.game.physicsManager.createPolygonShape(points);
        return shape;
    }  

    // ------------------------------------------------------------------ inputs

    // ------------------------------------------------------------------ camera

    self.addCamera = function (name) {
        var camera = new Extasy.camera(self.game, name);
        self.game.cameraManager.addCamera(camera);
        return camera;
    };

    self.getCamera = function (name) {
        return self.game.cameraManager.getCamera(name);
    };

    self.getActiveCamera = function () {
        return self.game.cameraManager.active;
    };

    self.switchCamera = function (name) {
        return self.game.cameraManager.switch(name);
    };

    self.listCameras = function () {
        return self.game.cameraManager.listCameras();
    };

    // -------------------------------------------------------------------- math

    self.random = function(min, max) {
        return self.game.mathManager.random(min, max);
    };

    self.randomInt = function(min, max) {
        return self.game.mathManager.randomInt(min, max);
    };

    self.randomChoice = function(choices) {
        return self.game.mathManager.randomChoice(choices);
    };

    self.randomBool = function() {
        return self.game.mathManager.randomBool();
    };

    // Simple Math.

    self.limit = function(x, min, max) {
        return self.game.limit.bla(x, min, max);
    };

    self.between = function(n, min, max) {
        return self.game.mathManager.between(n, min, max);
    };

    self.accelerate = function(v, accel, dt) {
        return self.game.mathManager.accelerate(v, accel, dt);
    };

    self.lerp = function(n, dn, dt) {
        return self.game.mathManager.lerp(n, dn, dt);
    };

    // Easing Equations.

    self.interpolate = function(a, b, percent) {
        return self.game.mathManager.interpolate(a, b, percent);
    };

    self.easeIn = function(a, b, percent) {
        return self.game.mathManager.easeIn(a, b, percent);
    };

    self.easeOut = function(a, b, percent) {
        return self.game.mathManager.easeOut(a, b, percent);
    };

    self.easeInOut = function(a, b, percent) {
        return self.game.mathManager.easeInOut(a, b, percent);
    };

    // Converter.

    self.toRadians = function(x) {
        return self.game.mathManager.toRadians(x);
    };

    self.toDegrees = function(x) {
        return self.game.mathManager.toDegrees(x);
    };

    // -------------------------------------------------------------------- time

    self.addTimer = function(delay, repeat,callback) {
        var timer = new Extasy.timer(self.game, delay, repeat, callback);
        return timer;
    };

    self.pause = function() {
        self.game.timeManager.pause();
    }; 

    self.continue = function() {
        self.game.timeManager.continue();
    }; 

};