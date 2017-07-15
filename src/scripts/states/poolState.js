var poolState = new Extasy.state('poolState');
var self;

poolState.create = function () {
    self = poolState;

    self.circle1 = self.addCircle(self.randomInt(0, 500), self.randomInt(0, 300), self.randomInt(2, 5));
    self.circle2 = self.addCircle(self.randomInt(0, 500), self.randomInt(0, 300), self.randomInt(2, 5));
    self.circle3 = self.addCircle(self.randomInt(0, 500), self.randomInt(0, 300), self.randomInt(2, 5));

    self.entities = self.listEntities();
    self.removeEntity(self.selfcircle2);
    console.log(self.listEntities());

    console.log(self.currentState().name);

};

poolState.update = function () {};
