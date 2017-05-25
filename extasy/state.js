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

    // -------------------------------------------------------------------- game

    self.pps = function (px) {
        return px * self.game.delta / 1000;
    };

    // ------------------------------------------------------------------ assets

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

    self.getController = function (controllerName) {
        return self.game.inputManager.getController(controllerName);
    };

    self.createController = function (controllerName) {
        return self.game.inputManager.createController(controllerName);
    };

    self.listControllers = function () {
        return self.game.inputManager.listControllers();
    };

    // ------------------------------------------------------------------ camera

    self.moveCamera = function (x, y) {
        self.game.cameraManager.move(x, y);
    };

    self.cameraFollow = function (entity) {
        self.game.cameraManager.cameraFollow(entity);
    };

    self.cameraZoomIn = function (px) {
        self.game.cameraManager.zoomIn(px);
    };

    self.cameraZoomOut = function (px) {
        self.game.cameraManager.zoomOut(px);
    };

    self.cameraZoomReset = function () {
        self.game.cameraManager.zoomReset();
    };

    self.cameraRotate = function (degrees) {
        self.game.cameraManager.rotate(degrees);
    };

    self.cameraSetAngle = function (degrees) {
        self.game.cameraManager.setAngle(degrees);
    };

    self.cameraSetLerp = function (lerp) {
        self.game.cameraManager.setLerp(lerp);
    };

    /* self.flash = function () {
        self.game.cameraManager.zoomReset();
    } */

    /* self.fade = function () {
        self.game.cameraManager.zoomReset();
    } */

    /* self.bounds = function () {
        self.game.cameraManager.zoomReset();
    } */

    /* self.shake = function () {
        self.game.cameraManager.zoomReset();
    } */

    /* self.deadZone = function () {
        self.game.cameraManager.zoomReset();
    } */

    // -----------------------------------------------------........------- loop

    self.setMotion = function (rate) {
        self.game.loopManager.motion = rate;
    };

    // -------------------------------------------------------------------- time

    self.createTimer = function () {
        return new Extasy.timer(self.game);
    };

};