Assets.loadImages([
    {'name': 'mine', 'path': 'assets/images/mine.png'},
    {'name': 'rocket', 'path': 'assets/images/rocket.png'},
    {'name': 'stone', 'path': 'assets/images/stone.png'},
]);

// Touch controller.
var touchControllerA = document.querySelector('.touch-controller-a');
var touchControllerB = document.querySelector('.touch-controller-b');
var touchControllerLeft = document.querySelector('.touch-controller-left');
var touchControllerRight = document.querySelector('.touch-controller-right');
var tactileTouchControllerA = new Tactile(touchControllerA);
var tactileTouchControllerB = new Tactile(touchControllerB);
var tactileTouchControllerLeft = new Tactile(touchControllerLeft);
var tactileTouchControllerRight = new Tactile(touchControllerRight);


var map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var tileSize = 50;

map.forEach(function(row, y) {
    row.forEach(function(tile, x) {
        if (tile === 1) {
            var blockDefinition = {
                'name': 'block',
                'image': {
                    'src': Assets.images.stone,
                    'sx': 0,
                    'sy': 0,
                    'sw': 50,
                    'sh': 50,
                },
                'position': {'x': x * tileSize, 'y': y * tileSize, 'z': 0},
                'size': {'w': tileSize, 'h': tileSize, 'radius': tileSize / 2},
                'body': {   
                    'active': true,
                    'allowSleep': true,
                    'angle': 0,
                    'angularDamping': 0,
                    'angularVelocity': 0,
                    'awake': true,
                    'bullet': false,
                    'fixedRotation': false,
                    'linearDamping': 0,
                    'linearVelocity': null,
                    'type': 'static'
                },
                'fixture': {
                    'density': 1,
                    'filter': null,
                    'friction': 0.5,
                    'isSensor': false,
                    'restitution': 1.0,
                    'shape': 'rectangle'
                }
            }
            var block = Game.createEntity(blockDefinition);
        }
        if (tile === 2) {
            var obstacleDefinition = {
                'name': 'obstacle',
                'image': {
                    'src': Assets.images.mine,
                    'sx': 0,
                    'sy': 0,
                    'sw': 50,
                    'sh': 50
                },
                'position': {'x': x * tileSize, 'y': y * tileSize, 'z': 0},
                'size': {'w': 30, 'h': 30, 'radius': 15},
                'body': {
                    'active': true,
                    'allowSleep': true,
                    'angle': 0,
                    'angularDamping': 0,
                    'angularVelocity': Math.random(),
                    'awake': true,
                    'bullet': false,
                    'fixedRotation': false,
                    'linearDamping': 0,
                    'linearVelocity': {'x': Math.random() * 10, 'y': Math.random() * 10},
                    'type': 'dynamic'
                },
                'fixture': {
                    'density': 1,
                    'filter': null,
                    'friction': 0.5,
                    'isSensor': false,
                    'restitution': 1.0,
                    'shape': 'circle'
                }
            }
            var obstacle = Game.createEntity(obstacleDefinition);
        }
    });
    
});

var eventDefinition = {
    'name': 'event',
        'position': {'x': 400, 'y': 400, 'z': 0},
        'size': {'w': 40, 'h': 40, 'radius': 20},
    'body': {
        'active': true,
        'allowSleep': true,
        'angle': 0,
        'angularDamping': 0,
        'angularVelocity': Math.random(),
        'awake': true,
        'bullet': false,
        'fixedRotation': false,
        'linearDamping': 0,
        'linearVelocity': {'x': Math.random(), 'y': Math.random()},
        'type': 'static'
    },
    'fixture': {
        'density': 1,
        'filter': null,
        'friction': 0.5,
        'isSensor': true,
        'restitution': 1.0,
        'shape': 'rectangle'
    }
}
var event = Game.createEntity(eventDefinition);

var heroDefinition = {
    'name': 'hero',
    'sprite': {
        'src': Assets.images.rocket,
        'speed': 18,
        'row': 0,
        'sequence': [0],
        'sx': 0,
        'sy': 0,
        'sw': 100,
        'sh': 150
    },
    'position': {'x': 450, 'y': 500, 'z': 0},
    'size': {'w': 40, 'h': 40, 'radius': 20},
    'velocity': {'x': 0.5, 'y': 0.5},
    'body': {
        'active': true,
        'allowSleep': false,
        'angle': 0,
        'angularDamping': 2.0,
        'angularVelocity': 0,
        'awake': true,
        'bullet': false,
        'fixedRotation': false,
        'linearDamping': 0.5,
        'linearVelocity': {'x': Math.random(), 'y': Math.random()},
        'type': 'dynamic'
    },
    'fixture': {
        'density': 1,
        'filter': null,
        'friction': 0.5,
        'isSensor': false,
        'restitution': 0.5,
        'shape': 'circle'
    }
}
var hero = Game.createEntity(heroDefinition);

Game.run(function() {
    Clock.sync();
    Camera.centerOn(hero);
    Systems.userInput(hero);
    Systems.physics();
    Systems.render(Game.entities);
    Systems.debug();
});