var eventState = new Extasy.state('eventState');
var circle;
var pointer;
eventState.create = function () {

    circle = this.addCircle(50, 50, 25);
    pointer = this.addCircle(50, 50, 10);
    pointer.fill('green');
    

    this.addEvent('banana', function () {
        console.log('banana callback');
    });

    this.addEvent('apfel', function () {
        console.log('aüfel callback');
    });

    this.removeEvent('apfel');

    console.log(this.listEvents());
};

eventState.update = function () {
    pointer.dx = this.game.inputManager.mouse.x - pointer.dw / 2;
    pointer.dy = this.game.inputManager.mouse.y - pointer.dh / 2;

    if (this.circleCollision(pointer, circle)) {
        console.log('hover');
    }
};
