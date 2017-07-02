var eventState = new Extasy.state('eventState');
eventState.create = function () {

    this.addEvent('banana', function () {
        console.log('banana callback');
    });

    this.addEvent('apfel', function () {
        console.log('aüfel callback');
    });

    this.removeEvent('apfel');

    console.log(this.listEvents());
};

eventState.update = function () {};
