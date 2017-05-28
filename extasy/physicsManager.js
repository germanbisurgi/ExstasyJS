var b2Vec2 = Box2D.Common.Math.b2Vec2;
var b2BodyDef = Box2D.Dynamics.b2BodyDef;
var b2Body = Box2D.Dynamics.b2Body;
var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
var b2Fixture = Box2D.Dynamics.b2Fixture;
var b2World = Box2D.Dynamics.b2World;
var b2MassData = Box2D.Collision.Shapes.b2MassData;
var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
var b2Contacts = Box2D.Dynamics.Contacts;

var PhysicsManager = function(game) {
    
    "use strict";
    var self = this;
    self.game = game;
    self.fps = 60;
    self.scale = 30;
    self.gx = 0;
    self.gy = 0;
    self.allowSleep = true;
    self.world = new b2World({x: self.gx, y: self.gy}, self.allowSleep);
    self.canvas = document.querySelector('#debug');
    self.canvas.width = self.game.width;
    self.canvas.height = self.game.height;
    self.ctx = self.canvas.getContext("2d");
    

    self.createBody = function(x, y, type) {
        var bodyDef = new b2BodyDef();
        bodyDef.position.x      = x / self.scale;
        bodyDef.position.y      = y / self.scale;
        bodyDef.active          = true;
        bodyDef.allowSleep      = true;
        bodyDef.angle           = 0;
        bodyDef.angularDamping  = 0;
        bodyDef.angularVelocity = 0;
        bodyDef.awake           = true;
        bodyDef.bullet          = false;
        bodyDef.fixedRotation   = false;
        bodyDef.linearDamping   = 0;
        bodyDef.linearVelocity  = {'x': 0, 'y': 0};
        bodyDef.userData        = '';
        if (type === 'static')    {bodyDef.type = b2Body.b2_staticBody;}
        if (type === 'dynamic')   {bodyDef.type = b2Body.b2_dynamicBody;}
        if (type === 'kinematic') {bodyDef.type = b2Body.b2_kinematicBody;}
        var body = self.world.CreateBody(bodyDef);
        return body;
    };

    self.createCircleShape = function(radius) {
        var fixDef = new b2FixtureDef();
        fixDef.density     = 1;
        fixDef.friction    = 0.5;
        fixDef.isSensor    = false;
        fixDef.restitution = 0.0;
        fixDef.shape = new b2CircleShape(radius / self.scale);
        return fixDef;
    };

    self.createRectangleShape = function(w, h) {
        var fixDef = new b2FixtureDef();
        fixDef.density     = 1;
        fixDef.friction    = 0.5;
        fixDef.isSensor    = false;
        fixDef.restitution = 0.0;
        fixDef.shape = new b2PolygonShape();
        fixDef.shape.SetAsBox(w * 0.5 / self.scale, h * 0.5 / self.scale);
        return fixDef;
    };    

    self.createPolygonShape = function(points) {
        var fixDef = new b2FixtureDef();
        fixDef.density     = 1;
        fixDef.friction    = 0.5;
        fixDef.isSensor    = false;
        fixDef.restitution = 0.0;
        fixDef.shape = new b2PolygonShape();
        points.forEach(function (point) {
            point.x /= self.scale;
            point.y /= self.scale;
        });
        fixDef.shape.SetAsArray(points, points.length);
        return fixDef;
    };

    self.createEdge = function(x1, y1, x2, y2) {
        var fixDef = new b2FixtureDef();
        fixDef.density     = 1;
        fixDef.friction    = 0.5;
        fixDef.isSensor    = false;
        fixDef.restitution = 0.5;
        fixDef.shape = new b2PolygonShape();
        x1 /= self.scale;
        y1 /= self.scale;
        x2 /= self.scale;
        y2 /= self.scale;
        fixDef.shape.SetAsEdge({x: x1, y: y1}, {x: x2, y: y2});
        return fixDef;
    };

    self.draw = function() {
        var camera = game.cameraManager.active;
        self.ctx.clearRect(0, 0, self.game.width, self.game.height);
        self.ctx.save();
        //camera rotation.
        self.ctx.translate((camera.w * camera.ax), (camera.h * camera.ay));
        self.ctx.rotate(self.toRadians(camera.angle));
        self.ctx.translate(-(camera.w * camera.ax), -(camera.h * camera.ay));
        //camera position.
        self.ctx.translate(camera.x, camera.y);
        // camera zoom.
        self.ctx.scale(camera.zoom, camera.zoom);  
        // draw box2d world.
        self.world.DrawDebugData();
        self.ctx.restore();
    };

    self.setupDebugDraw = function() {
        var debugDraw = new b2DebugDraw();
        debugDraw.SetSprite(self.ctx);
        debugDraw.SetDrawScale(self.scale);
        debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
        self.world.SetDebugDraw(debugDraw);
    };

    self.setupDebugDraw();

    self.toRadians = function (degrees) {
        return degrees * 0.0174532925199432957;
    };

    self.toDegrees = function (radians) {
        return radians * 57.295779513082320876;
    };

    self.update = function() {
        self.world.Step(1/60, 8, 3);
        self.world.ClearForces();
    };

};