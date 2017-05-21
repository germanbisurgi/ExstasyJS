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
    self.world = new b2World({'x': self.gx  * self.scale, 'y': self.gy * self.scale}, self.allowSleep);
    self.canvas = document.querySelector('#debug');
    self.canvas.width = self.game.width;
    self.canvas.height = self.game.height;
    self.context = self.canvas.getContext("2d");

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

    self.createBox = function(w, h) {
        var fixDef = new b2FixtureDef();
        fixDef.density     = 0;
        fixDef.friction    = 0;
        fixDef.isSensor    = false;
        fixDef.restitution = 0.5;
        fixDef.shape = new b2PolygonShape();
        fixDef.shape.SetAsBox(w * 0.5 / self.scale, h * 0.5 / self.scale);
        return fixDef;
    };

    self.draw = function() {
        self.context.clearRect(0, 0, self.width, self.height);
        self.context.save();
        self.world.DrawDebugData();
        self.context.restore();
    };

    self.setupDebugDraw = function() {
        var debugDraw = new b2DebugDraw();
        debugDraw.SetSprite(self.context);
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
        self.world.Step(1 / self.fps, 4, 3);
        self.world.ClearForces();
    };

};