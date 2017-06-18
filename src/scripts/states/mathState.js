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
    if (this.rectangleCollision(box1, box2)) {
        box1.fill('red');
    } else {
        box1.fill('grey');
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
    if (this.circleCollision(circle1, circle2)) {
        circle1.fill('red');
    } else {
        circle1.fill('grey');
    }

    // ----------------------------------------------------------------- circles

    if (this.circleRectCollision(circle2, box2)) {
        circle2.fill('red');
        box2.fill('red');
    } else {
        circle2.fill('grey');
        box2.fill('grey');
    }
};
