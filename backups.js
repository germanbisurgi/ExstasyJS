        bodyDef.radius          = radius;
        bodyDef.active          = active;
        bodyDef.allowSleep      = allowSleep;
        bodyDef.angle           = angle;
        bodyDef.angularDamping  = angularDamping;
        bodyDef.angularVelocity = angularVelocity;
        bodyDef.awake           = awake;
        bodyDef.bullet          = bullet;
        bodyDef.fixedRotation   = fixedRotation;
        bodyDef.inertiaScale    = inertiaScale;
        bodyDef.linearDamping   = linearDamping;
        bodyDef.linearVelocity  = linearVelocity;
        bodyDef.type            = type;
        bodyDef.userData        = userData;


        bodyDef.position.x     = (x + w / 2) / self.scale;
        bodyDef.position.y     = (y + h / 2) / self.scale;
        bodyDef.allowSleep     = allowSleep;
        bodyDef.fixedRotation  = fixedRotation;
        bodyDef.linearDamping  = linearDamping;
        bodyDef.angularDamping = angularDamping;