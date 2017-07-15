var mathState = new Extasy.state('mathState');
var self;

mathState.create = function () {
    self = mathState;
    self.style = {
        font: "16px Helvetica",
        fillStyle: "purple",
        textAlign: "start",
        textBaseline: "top",
        strokeStyle: "black",
        lineWidth: 0,
        lineHeight: 1.8,
    };

    self.text =  'random(1, 5): ' + self.random(1, 5) + '\n' +
            'randomInt(1, 5): ' + self.randomInt(1, 5) + '\n' +
            'randomChoice([\'banana\', \'apple\']): ' + self.randomChoice(['banana', 'apple']) + '\n' +
            'randomBool(): ' + self.randomBool() + '\n' +
            'limit(5, 1, 3): ' + self.limit(5, 1, 3) + '\n' +
            'between(5, 1, 3): ' + self.between(5, 1, 3);
    self.addText(15, 15, 500, 500, self.text, self.style);

    console.log(self.currentState().name);
};

mathState.update = function () {};
