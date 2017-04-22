var box2d = {
    b2Vec2: Box2D.Common.Math.b2Vec2,
    b2BodyDef: Box2D.Dynamics.b2BodyDef,
    b2Body: Box2D.Dynamics.b2Body,
    b2FixtureDef: Box2D.Dynamics.b2FixtureDef,
    b2Fixture: Box2D.Dynamics.b2Fixture,
    b2World: Box2D.Dynamics.b2World,
    b2MassData: Box2D.Collision.Shapes.b2MassData,
    b2PolygonShape: Box2D.Collision.Shapes.b2PolygonShape,
    b2CircleShape: Box2D.Collision.Shapes.b2CircleShape,
    b2DebugDraw: Box2D.Dynamics.b2DebugDraw,
    b2Contacts: Box2D.Dynamics.Contacts
};

var PhysicsManager = function(game) {
    
    "use strict";
    var self = this;
    self.game = game;
    self.scale = 30;
    self.world = new box2d.b2World({'x': 0 * self.scale, 'y': 0 * self.scale}, true);
    self.canvas = document.querySelector('#debug');
    self.context = self.canvas.getContext("2d");

    self.fullScreen = function() {
        self.canvas.width  = self.game.width;
        self.canvas.height = self.game.height;
    };

    self.fullScreen();

    self.clear = function() {
        self.context.clearRect(0, 0, self.width, self.height);
    }

    self.createBody = function(bodyDefinition) {

        var x               = bodyDefinition.position.x  != null ? bodyDefinition.position.x  : 100;
        var y               = bodyDefinition.position.y  != null ? bodyDefinition.position.y  : 100;
        var z               = bodyDefinition.position.z  != null ? bodyDefinition.position.z  : 0;
        var w               = bodyDefinition.size.w      != null ? bodyDefinition.size.w      : 50;
        var h               = bodyDefinition.size.h      != null ? bodyDefinition.size.h      : 50;
        var radius          = bodyDefinition.size.radius != null ? bodyDefinition.size.radius : 25;
        
        var active          = bodyDefinition.active          != null ? bodyDefinition.active          : true;
        var allowSleep      = bodyDefinition.allowSleep      != null ? bodyDefinition.allowSleep      : true;
        var angle           = bodyDefinition.angle           != null ? bodyDefinition.angle           : 0;
        var angularDamping  = bodyDefinition.angularDamping  != null ? bodyDefinition.angularDamping  : 0;
        var angularVelocity = bodyDefinition.angularVelocity != null ? bodyDefinition.angularVelocity : 0;
        var awake           = bodyDefinition.awake           != null ? bodyDefinition.awake           : true;
        var bullet          = bodyDefinition.bullet          != null ? bodyDefinition.bullet          : false;
        var fixedRotation   = bodyDefinition.fixedRotation   != null ? bodyDefinition.fixedRotation   : false;
        var linearDamping   = bodyDefinition.linearDamping   != null ? bodyDefinition.linearDamping   : 0;
        var linearVelocity  = bodyDefinition.linearVelocity  != null ? bodyDefinition.linearVelocity  : {'x': 0, 'y': 0};
        var type            = bodyDefinition.type            != null ? bodyDefinition.type            : 'static';
        var userData        = bodyDefinition.userData        != null ? bodyDefinition.userData        : bodyDefinition;

        var density         = bodyDefinition.density      != null ? bodyDefinition.density      : 0;
        var filter          = bodyDefinition.filter       != null ? bodyDefinition.filter       : null;
        var friction        = bodyDefinition.friction     != null ? bodyDefinition.friction     : 0;
        var isSensor        = bodyDefinition.isSensor     != null ? bodyDefinition.isSensor     : false;
        var restitution     = bodyDefinition.restitution  != null ? bodyDefinition.restitution  : 0.5;
        var shape           = bodyDefinition.shape        != null ? bodyDefinition.shape        : 'rectangle';

        var bodyDef = new box2d.b2BodyDef();
        /*bodyDef.position.x      = (x + w / 2) / self.scale;
        bodyDef.position.y      = (y + h / 2) / self.scale;*/
        bodyDef.position.x      = x / self.scale;
        bodyDef.position.y      = y / self.scale;
        bodyDef.active          = active;
        bodyDef.allowSleep      = allowSleep;
        bodyDef.angle           = angle;
        bodyDef.angularDamping  = angularDamping;
        bodyDef.angularVelocity = angularVelocity;
        bodyDef.awake           = awake;
        bodyDef.bullet          = bullet;
        bodyDef.fixedRotation   = fixedRotation;
        bodyDef.linearDamping   = linearDamping;
        bodyDef.linearVelocity  = linearVelocity;  

        // Define type of body
        if (type === 'static')    bodyDef.type = box2d.b2Body.b2_staticBody;
        if (type === 'dynamic')   bodyDef.type = box2d.b2Body.b2_dynamicBody;
        if (type === 'kinematic') bodyDef.type = box2d.b2Body.b2_kinematicBody;

        var fixDef = new box2d.b2FixtureDef();
        fixDef.density     = density;
        fixDef.friction    = friction;
        fixDef.isSensor    = isSensor;
        fixDef.restitution = restitution;
        fixDef.userData    = userData;

        if (shape === 'circle') {
            fixDef.shape = new box2d.b2CircleShape(radius / self.scale);
        }
        if (shape === 'rectangle') {
            fixDef.shape = new box2d.b2PolygonShape();
            fixDef.shape.SetAsBox(w / 2 / self.scale, h / 2 / self.scale);
        }

        var body = self.world.CreateBody(bodyDef);
        body.CreateFixture(fixDef);
        body.SetUserData(userData); 

        console.log(body.GetPosition().x * self.scale);
        console.log(body.GetPosition().y * self.scale);

        return body;
    };

    self.onBeginContact = function(id, fn) {
        var listener = new Box2D.Dynamics.b2ContactListener;
        listener.BeginContact = function(contact) {
            var BodyA = contact.GetFixtureA().GetBody().GetUserData();
            var BodyB = contact.GetFixtureB().GetBody().GetUserData();

            if (BodyA && BodyA.type === id && contact.IsTouching()) {
                fn();
            }
            if (BodyB && BodyB.type === id && contact.IsTouching()) {
                fn();
            }
        }
        self.world.SetContactListener(listener);
    }

    self.setupDebugDraw = function() {
        var debugDraw = new box2d.b2DebugDraw();
        debugDraw.SetSprite(self.context);
        debugDraw.SetDrawScale(self.scale);
        debugDraw.SetFlags(box2d.b2DebugDraw.e_shapeBit | box2d.b2DebugDraw.e_jointBit)
        self.world.SetDebugDraw(debugDraw);
    }

    self.setupDebugDraw();

    self.update = function(id, fn) {
        self.world.Step(1/60, 4, 3);
        self.world.ClearForces();
    }

    self.draw = function(id, fn) {
        self.clear();
        self.context.save();
        self.context.scale(this.game.cameraManager.zoom, this.game.cameraManager.zoom);
        self.context.translate(this.game.cameraManager.x, this.game.cameraManager.y);
        self.world.DrawDebugData();
        self.context.restore();
    }

    console.log(self)

}