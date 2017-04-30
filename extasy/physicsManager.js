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
    self.scale = 30;
    self.gx = 0;
    self.gy = 9.8;
    self.allowSleep = true;
    self.world = new b2World({'x': self.gx  * self.scale, 'y': self.gy * self.scale}, self.allowSleep);
    self.canvas = document.querySelector('#debug');
    self.canvas.width = self.game.width;
    self.canvas.height = self.game.height;
    self.context = self.canvas.getContext("2d");

    self.createBody = function() {
        // create and define a body.
        var bodyDef = new b2BodyDef();
        bodyDef.type = b2Body.b2_staticBody;
        bodyDef.position.x = 50 / self.scale;
        bodyDef.position.y = 50 / self.scale;

        // create and define a shape.
        var fixDef = new b2FixtureDef();
        fixDef.shape = new b2PolygonShape();
        fixDef.shape.SetAsBox(32 * 0.5 / self.scale, 32 * 0.5 / self.scale);

        // createthe body and add it to the world.
        var body = self.world.CreateBody(bodyDef);

        // Add a shape to the body.
        body.CreateFixture(fixDef);

        return body;
    }

    self.draw = function() {
        self.context.clearRect(0, 0, self.width, self.height);
        self.context.save();
        self.world.DrawDebugData();
        self.context.restore();
    }

    self.setupDebugDraw = function() {
        var debugDraw = new b2DebugDraw();
        debugDraw.SetSprite(self.context);
        debugDraw.SetDrawScale(self.scale);
        debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit)
        self.world.SetDebugDraw(debugDraw);
    }

    self.setupDebugDraw();

    self.update = function() {
        self.world.Step(1/60, 4, 3);
        self.world.ClearForces();
    }

}