var bodyDef = new b2BodyDef();
        bodyDef.position.x = x / self.scale;
        bodyDef.position.y = y / self.scale;
        bodyDef.type = b2Body.b2_staticBody;
        bodyDef.active = true;
        bodyDef.allowSleep = true;
        bodyDef.angle = 0;
        bodyDef.angularDamping = 0;
        bodyDef.angularVelocity = 0;
        bodyDef.awake = true;
        bodyDef.bullet = false;
        bodyDef.fixedRotation = false;
        bodyDef.linearDamping = 0;
        bodyDef.linearVelocity = {'x': 0, 'y': 0};

        // create and define a standard fixture.
        var fixDef = new b2FixtureDef();
        fixDef.shape = new b2PolygonShape();
        fixDef.shape.SetAsBox(w * 0.5 / self.scale, h * 0.5 / self.scale);
        fixDef.restitution = 0.0;
        fixDef.density = 0;
        fixDef.filter = null;
        fixDef.friction = 0;
        fixDef.isSensor = false;
        fixDef.restitution = 0.5;