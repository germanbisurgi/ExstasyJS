var poolState = new Extasy.state('poolState');

poolState.create = function () {

    var circle1 = this.addCircle(this.randomInt(0, 500), this.randomInt(0, 300), this.randomInt(2, 5));
    var circle2 = this.addCircle(this.randomInt(0, 500), this.randomInt(0, 300), this.randomInt(2, 5));
    var circle3 = this.addCircle(this.randomInt(0, 500), this.randomInt(0, 300), this.randomInt(2, 5));

    var entities = this.listEntities();
    this.removeEntity(circle2);
    console.log(this.listEntities());
    console.log(this.game.entityManager.entities);

};

poolState.update = function () {};
