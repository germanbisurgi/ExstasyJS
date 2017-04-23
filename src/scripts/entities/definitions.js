var definitions = {
    sprite: {
        name: 'sprite',
        position: {x: 50, y: 50, z: 20},
        size: {w: 50, h: 50},
        velocity: {x: 3, y: 3},
        sprite: {name: 'player', width: 32, height: 32},
    },
    hero: {
        name: 'hero',
        position: {x: 50, y: 50, z: 20},
        size: {w: 50, h: 50},
        velocity: {x: 3, y: 3},
        sprite: {name: 'player', width: 32, height: 32},
        body: {
            position: {x: 50, y: 50, z: 20},
            size: {w: 50, h: 50},
            active: true,
            allowSleep: true,
            angle: 0,
            angularDamping: 0,
            angularVelocity: 0,
            awake: true,
            bullet: false,
            fixedRotation: false,
            linearDamping: 0,
            linearVelocity: null,
            type: 'dynamic',
            // fixture
            density: 1,
            filter: null,
            friction: 0.5,
            isSensor: false,
            restitution: 1.0,
            shape: 'rectangle'
        }
    },
    scroller: {
        name: 'scroller',
        position: {x: 50, y: 50, z: 10},
        size: {w: 150, h: 150},
        velocity: {x: 3, y: 3},
        sprite: {name: 'pattern', width: 200, height: 200},
    },
    space:  {
        name: 'space',
        position: {x: 0, y: 0, z: 10},
        size: {w: 1500, h: 1000},
        pattern: 'pattern'
    }
};
