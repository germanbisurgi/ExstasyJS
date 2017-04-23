var testState = new Extasy.state('testState');

testState.preload = function () {
    //this.game.stop();
}

testState.create = function () {
    console.log(this.game.assets2);
    this.game.stop();
}

testState.update = function () {}