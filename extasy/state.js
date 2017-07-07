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

    // -------------------------------------------------------------------- loop

    self.pauseLoop = function () {
        self.game.loopManager.pause();
    };

    self.continueLoop = function () {
        self.game.loopManager.pause();
    };

    // ------------------------------------------------------------------- state

    self.switchState = function (state) {
        this.game.stateManager.switch(state);
    };

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
            self.game.entityManager.add(tileSprite);
            return tileSprite;
        } else {
            console.log('EXCEPTION: this image is not present ->', imageName);
            console.log('the game will be stoped');
            self.game.stop();
        }
    };

    self.removeEntity = function (entity) {
        self.game.entityManager.remove(entity);
    };

    self.addSprite = function (x, y, spriteSheetName) {
        var spriteSheet = self.getAsset(spriteSheetName);
        if (spriteSheet) {
            var sprite = new Extasy.sprite(self.game, spriteSheet);
            sprite.dx = x;
            sprite.dy = y;
            self.game.entityManager.add(sprite);
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
        self.game.entityManager.add(rectangle);
        return rectangle;
    };

    self.addCircle = function (x, y, r) {
        var circle = new Extasy.circle(self.game, x, y, r);
        circle.prerender();
        self.game.entityManager.add(circle);
        return circle;
    };

    self.addPolygon = function (x, y, points) {
        var polygon = new Extasy.polygon(self.game, x, y, points);
        polygon.prerender();
        self.game.entityManager.add(polygon);
        return polygon;
    };

    self.addRegularPolygon = function (x, y, radius, sides) {
        var regularPolygon = new Extasy.regularPolygon(self.game, x, y, radius, sides);
        regularPolygon.prerender();
        self.game.entityManager.add(regularPolygon);
        return regularPolygon;
    };

    self.addText = function (x, y, width, height, text, style) {
        var txt = new Extasy.text(self.game, x, y, width, height, text, style);
        txt.prerender();
        self.game.entityManager.add(txt);
        return txt;
    };

    self.listEntities = function () {
        return self.game.entityManager.list();
    };

    // ----------------------------------------------------------------- physics

    self.enablePhysics = function () {
        this.game.physicsManager.enablePhysics();
    };

    self.disablePhysics = function () {
        this.game.physicsManager.disablePhysics();
    };

    self.enablePhysicsDebugMode = function () {
        this.game.physicsManager.enablePhysicsDebugMode();
    };

    self.disablePhysicsDebugMode = function () {
        this.game.physicsManager.disablePhysicsDebugMode();
    };  

    self.setGravity = function (x, y) {
        this.game.physicsManager.world.SetGravity({
            x: x * this.game.physicsManager.scale,
            y: y * this.game.physicsManager.scale
        });
    };

    self.addEdge = function (x1, y1, x2, y2) {
        var body = this.game.physicsManager.createBody(x1, y1, 'static');
        var fixture = this.game.physicsManager.createEdge(0, 0, x2-x1, y2-y1);
        body.CreateFixture(fixture);
        return body;
    };

    self.createBody = function (x, y, type) {
        var body = this.game.physicsManager.createBody(x, y, type);
        return body;
    };

    self.createCircleShape = function (radius) {
        var shape = this.game.physicsManager.createCircleShape(radius);
        return shape;
    };

    self.createRectangleShape = function (w, h) {
        var shape = this.game.physicsManager.createRectangleShape(w, h);
        return shape;
    };

    self.createPolygonShape = function (points) {
        var shape = this.game.physicsManager.createPolygonShape(points);
        return shape;
    };

    // ------------------------------------------------------------------ inputs

    self.mouseLeft = function () {
        return this.game.inputManager.mouse.left.isPressed;
    };

    self.mouseRight = function () {
        return this.game.inputManager.mouse.right.isPressed;
    };

    self.mouseMiddle = function () {
        return this.game.inputManager.mouse.middle.isPressed;
    };

    self.mouseWheelUp = function () {
        var check = this.game.inputManager.mouse.wheelDirection === 'up';
        return check;
    };

    self.mouseWheelDown = function () {
        var check = this.game.inputManager.mouse.wheelDirection === 'down';
        return check;
    };

    self.stopMouseWheel = function () {
        this.game.inputManager.mouse.wheelDirection = '';
    };

    self.pressing = function (key) {
        return this.game.inputManager.keyboard[key].isPressed;
    };

    self.touched = function () {
        return this.game.inputManager.touch.touched;
    };   

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
        return self.game.mathManager.limit(x, min, max);
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

    // --------------------------------------------------------------- collision

    self.addQuadtree = function (bounds, max_objects, max_levels, level) {
        return new Extasy.quadtree(bounds, max_objects, max_levels, level, self.game);
    };

    self.enableCollision = function () {
        this.game.collisionManager.enableCollision();
    };

    self.disableCollision = function () {
        this.game.collisionManager.disableCollision();
    };

    self.collidable = function(e) {
        e.collidable = true;
        self.game.collisionManager.collidables.push(e);
    };

    self.incollidable = function(e) {
        e.collidable = false;
    };

    self.listCollidables = function(pa, pb) {
        return self.game.collisionManager.listCollidables();
    };

    self.distance = function(pa, pb) {
        return self.game.collisionManager.distance(pa, pb);
    };

    self.circleCollision = function(c1, c2) {
        return self.game.collisionManager.circleCollision(c1, c2);
    };

    self.rectangleCollision = function(b1, b2) {
        return self.game.collisionManager.rectangleCollision(b1, b2);
    };

    self.circleRectCollision = function(c, r) {
        return self.game.collisionManager.circleRectCollision(c, r);
    };

    // -------------------------------------------------------------------- time

    self.addTimer = function(delay, repeat,callback) {
        var timer = new Extasy.timer(self.game, delay, repeat, callback);
        self.game.timeManager.timers.push(timer);
        return timer;
    };

    self.listTimers = function () {
        return self.game.timeManager.timers;
    };

    self.pause = function() {
        self.game.timeManager.pause();
    }; 

    self.continue = function() {
        self.game.timeManager.continue();
    };

    // ------------------------------------------------------------------- event

    self.addEvent = function(eventName, callback) {
        return self.game.eventManager.add(eventName, callback);
    };

    self.listEvents = function () {
        return self.game.eventManager.list();
    };

    self.removeEvent = function (eventName) {
        return self.game.eventManager.remove(eventName);
    };

    // ------------------------------------------------------------------- tween

    self.addTween = function(entity, properties, options) {
        var tween = new Extasy.tween(entity, properties, options, self.game)
        return tween;
    };


};