var mathState = new Extasy.state('mathState');
var text;
var style = {
    font: "16px Helvetica",
    fillStyle: "purple",
    textAlign: "start",
    textBaseline: "top",
    strokeStyle: "black",
    lineWidth: 0,
    lineHeight: 1.8,
};
var box1;
var box2;
var circle1;
var circle2;

mathState.create = function () {
    text =  'random(1, 5): ' + this.random(1, 5) + '\n' +
            'randomInt(1, 5): ' + this.randomInt(1, 5) + '\n' +
            'randomChoice([\'banana\', \'apple\']): ' + this.randomChoice(['banana', 'apple']) + '\n' +
            'randomBool(): ' + this.randomBool() + '\n' +
            'limit(5, 1, 3): ' + this.limit(5, 1, 3) + '\n' +
            'between(5, 1, 3): ' + this.between(5, 1, 3);
    this.addText(15, 15, 500, 500, text, style);
    this.addText(15, 250, 500, 500, 'use arrows and "wasd" keys to move', style);
    box1 = this.addRectangle(15, 200, 25, 25);
    box2 = this.addRectangle(50, 200, 25, 25);
    circle1 = this.addCircle(300, 200, 10);
    circle2 = this.addCircle(350, 200, 10);
};

mathState.update = function () {

    // -------------------------------------------------------------- rectangles

    if (this.pressing('w')) {
        box2.translate(0, -100);
    }
    if (this.pressing('d')) {
        box2.translate(100, 0);
    }
    if (this.pressing('s')) {
        box2.translate(0, 100);
    }
    if (this.pressing('a')) {
        box2.translate(-100, 0);
    }

    // ----------------------------------------------------------------- circles

    if (this.pressing('ArrowUp')) {
        circle2.translate(0, -100);
    }
    if (this.pressing('ArrowRight')) {
        circle2.translate(100, 0);
    }
    if (this.pressing('ArrowDown')) {
        circle2.translate(0, 100);
    }
    if (this.pressing('ArrowLeft')) {
        circle2.translate(-100, 0);
    }

    // ----------------------------------------------------------------- circles

    var self = this;
    var entitiesToCheck = [];
    var checkedEntities = [];

    self.listEntities().forEach(function (e) {
        if (e.type === 'circle' || e.type === 'rectangle') {
            e.collides = false;
            entitiesToCheck.push(e);
        }
    });

    entitiesToCheck.forEach(function (e1) {
        entitiesToCheck.forEach(function (e2) {
            if (e1 !== e2 && checkedEntities.indexOf(e2) === -1) {
                if (e2.type === 'circle' && e1.type === 'rectangle') {
                    if (self.circleRectCollision(e1, e2)) {
                        e1.collides = true;
                        e2.collides = true;
                    }
                }
                if (e1.type === 'rectangle' && e2.type === 'rectangle') {
                    if (self.rectangleCollision(e1, e2)) {
                        e1.collides = true;
                        e2.collides = true;
                    }
                }
                if (e1.type === 'circle' && e2.type === 'circle') {
                    if (self.circleCollision(e1, e2)) {
                        e1.collides = true;
                        e2.collides = true;
                    }
                }
            }
        });
        checkedEntities.push(e1);
    });
    //self.pauseLoop();

    self.listEntities().forEach(function (e) {
        if (e.collides) {
            e.fill('red');
        } else {
            e.fill('grey');
        }
    });


};
