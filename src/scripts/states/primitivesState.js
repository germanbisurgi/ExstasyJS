var primitivesState = new Extasy.state('primitivesState');
var self;

primitivesState.create = function () {
    self = primitivesState;
    self.pattern = self.createPattern(self.getAsset('stone'), 'repeat');

    self.rectangle = self.addRectangle(0, 0, 50, 50);
    self.rectangle.fill(this.pattern);

    self.circle = self.addCircle(0, 70, 25);
    self.circle.fill(self.pattern);

    self.polygon = self.addPolygon(0, 140, [
        {x:  50, y:  0},
        {x: 100, y: 25},
        {x:  50, y: 50},
        {x:   0, y: 50}
    ]);
    self.polygon.fill(self.pattern);

    self.regularPolygon = self.addRegularPolygon(0, 210, 25, 3);
    self.regularPolygon.fill(self.pattern);

    console.log(self.currentState().name);
};

primitivesState.update = function () {
    self.rectangle.rotate(360);
    self.rectangle.translate(5, 0);
    self.circle.rotate(360);
    self.circle.translate(5, 0);
    self.polygon.rotate(360);
    self.polygon.translate(5, 0);
    self.regularPolygon.rotate(360);
    self.regularPolygon.translate(5, 0);
};