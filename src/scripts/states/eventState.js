var eventState = new Extasy.state('eventState');
var self;

eventState.create = function () {
    self = eventState;
    
    self.circle = self.addCircle(50, 50, 25);
    self.pointer = self.addCircle(50, 50, 1);
    self.pointer.fill('transparent');
    

    self.addEvent('banana', function () {
        console.log('banana callback');
    });

    self.addEvent('apfel', function () {
        console.log('aüfel callback');
    });

    self.removeEvent('apfel');

    console.log(self.listEvents());

    console.log(self.currentState().name);
};

eventState.update = function () {
    self.pointer.dx = self.getMouseX() - self.pointer.dw / 2;
    self.pointer.dy = self.getMouseY() - self.pointer.dh / 2;

    if (self.circleCollision(self.pointer, self.circle)) {
        if (self.touched()) {
            self.circle.fill('yellow');
        } else {
            self.circle.fill('purple');
        }
        
    } else {
        self.circle.fill('green');
    }

    
};
