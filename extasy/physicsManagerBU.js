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

var PhysicsManagerBU = function(game) {
    
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
    };

    self.createBody = function(entityDefinition) {

        var x               = entityDefinition.body.position.x  !== null ? entityDefinition.body.position.x  : 100;
        var y               = entityDefinition.body.position.y  !== null ? entityDefinition.body.position.y  : 100;
        var z               = entityDefinition.body.position.z  !== null ? entityDefinition.body.position.z  : 0;
        var w               = entityDefinition.body.size.w      !== null ? entityDefinition.body.size.w      : 50;
        var h               = entityDefinition.body.size.h      !== null ? entityDefinition.body.size.h      : 50;
        var radius          = entityDefinition.body.size.radius !== null ? entityDefinition.body.size.radius : 25;
        
        var active          = entityDefinition.body.active          !== null ? entityDefinition.body.active          : true;
        var allowSleep      = entityDefinition.body.allowSleep      !== null ? entityDefinition.body.allowSleep      : true;
        var angle           = entityDefinition.body.angle           !== null ? entityDefinition.body.angle           : 0;
        var angularDamping  = entityDefinition.body.angularDamping  !== null ? entityDefinition.body.angularDamping  : 0;
        var angularVelocity = entityDefinition.body.angularVelocity !== null ? entityDefinition.body.angularVelocity : 0;
        var awake           = entityDefinition.body.awake           !== null ? entityDefinition.body.awake           : true;
        var bullet          = entityDefinition.body.bullet          !== null ? entityDefinition.body.bullet          : false;
        var fixedRotation   = entityDefinition.body.fixedRotation   !== null ? entityDefinition.body.fixedRotation   : false;
        var linearDamping   = entityDefinition.body.linearDamping   !== null ? entityDefinition.body.linearDamping   : 0;
        var linearVelocity  = entityDefinition.body.linearVelocity  !== null ? entityDefinition.body.linearVelocity  : {'x': 0, 'y': 0};
        var type            = entityDefinition.body.type            !== null ? entityDefinition.body.type            : 'static';
        var userData        = entityDefinition;

        var density         = entityDefinition.body.density      !== null ? entityDefinition.body.density      : 0;
        var filter          = entityDefinition.body.filter       !== null ? entityDefinition.body.filter       : null;
        var friction        = entityDefinition.body.friction     !== null ? entityDefinition.body.friction     : 0;
        var isSensor        = entityDefinition.body.isSensor     !== null ? entityDefinition.body.isSensor     : false;
        var restitution     = entityDefinition.body.restitution  !== null ? entityDefinition.body.restitution  : 0.5;
        var shape           = entityDefinition.body.shape        !== null ? entityDefinition.body.shape        : 'rectangle';

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
        if (type === 'static')    {bodyDef.type = box2d.b2Body.b2_staticBody;}
        if (type === 'dynamic')   {bodyDef.type = box2d.b2Body.b2_dynamicBody;}
        if (type === 'kinematic') {bodyDef.type = box2d.b2Body.b2_kinematicBody;}

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

        console.log(body.GetUserData());

        return body;
    };

    self.onBeginContact = function(id, fn) {
        var listener = new Box2D.Dynamics.b2ContactListener();
        listener.BeginContact = function(contact) {
            var BodyA = contact.GetFixtureA().GetBody().GetUserData();
            var BodyB = contact.GetFixtureB().GetBody().GetUserData();

            if (BodyA && BodyA.type === id && contact.IsTouching()) {
                fn();
            }
            if (BodyB && BodyB.type === id && contact.IsTouching()) {
                fn();
            }
        };
        self.world.SetContactListener(listener);
    };

    self.setupDebugDraw = function() {
        var debugDraw = new box2d.b2DebugDraw();
        debugDraw.SetSprite(self.context);
        debugDraw.SetDrawScale(self.scale);
        debugDraw.SetFlags(box2d.b2DebugDraw.e_shapeBit | box2d.b2DebugDraw.e_jointBit);
        self.world.SetDebugDraw(debugDraw);
    };

    self.setupDebugDraw();

    self.update = function() {
        self.world.Step(1/60, 4, 3);
        self.world.ClearForces();
    };

    self.draw = function() {
        self.clear();
        self.context.save();
        self.context.scale(this.game.cameraManager.zoom, this.game.cameraManager.zoom);
        self.context.translate(this.game.cameraManager.x, this.game.cameraManager.y);
        self.world.DrawDebugData();
        self.context.restore();
    };

};