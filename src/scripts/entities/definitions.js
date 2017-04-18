var definitions = {
    hero: {
        name: 'hero',
        position: {x: 50, y: 50, z: 20},
        size: {w: 50, h: 50},
        velocity: {x: 3, y: 3},
        sprite: {name: 'player', width: 32, height: 32}
    },
    scroller: {
        name: 'scroller',
        position: {x: 0, y: 0, z: 10},
        size: {w: 300, h: 200},
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
