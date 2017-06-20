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

mathState.create = function () {
    text =  'random(1, 5): ' + this.random(1, 5) + '\n' +
            'randomInt(1, 5): ' + this.randomInt(1, 5) + '\n' +
            'randomChoice([\'banana\', \'apple\']): ' + this.randomChoice(['banana', 'apple']) + '\n' +
            'randomBool(): ' + this.randomBool() + '\n' +
            'limit(5, 1, 3): ' + this.limit(5, 1, 3) + '\n' +
            'between(5, 1, 3): ' + this.between(5, 1, 3);
    this.addText(15, 15, 500, 500, text, style);
};

mathState.update = function () {};
