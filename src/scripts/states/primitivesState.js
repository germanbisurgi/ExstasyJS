var primitivesState = new Extasy.state('primitivesState');
var rectangle;
var circle;
var polygon;
var regularPolygon;

primitivesState.create = function () {

    var pattern = this.createPattern(this.getAsset('stone'), 'repeat');

    rectangle = this.addRectangle(0, 0, 50, 50);
    rectangle.fill(pattern);

    circle = this.addCircle(0, 70, 25);
    circle.fill(pattern);

    polygon = this.addPolygon(0, 140, [
        {x: 50, y: 0},
        {x: 100, y: 25},
        {x: 50, y: 50},
        {x: 0, y: 50}
    ]);
    polygon.fill(pattern);

    regularPolygon = this.addRegularPolygon(0, 210, 25, 3);
    regularPolygon.fill(pattern);
};

primitivesState.update = function () {
    rectangle.rotate(60);
    rectangle.translate(5, 0);
    circle.rotate(60);
    circle.translate(5, 0);
    polygon.rotate(60);
    polygon.translate(5, 0);
    regularPolygon.rotate(60);
    regularPolygon.translate(5, 0);
};
