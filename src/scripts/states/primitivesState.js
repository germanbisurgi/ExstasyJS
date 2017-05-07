var primitivesState = new Extasy.state('primitivesState');
var rectangle;
var circle;
var circle2;
var polygon;

primitivesState.create = function () {

    var pattern = this.createPattern(this.getAsset('stone'), 'repeat');

    rectangle = this.addRectangle(0, 0, 100, 100);
    rectangle.fill(pattern);

    circle = this.addCircle(100, 100, 25);
    circle.fill(pattern);

    circle2 = this.addCircle(5, 200, 20);
    circle2.fill(pattern);

    polygon = this.addPolygon(150, 150, [
        {x: 50, y: 0},
        {x: 100, y: 25},
        {x: 50, y: 50},
        {x: 0, y: 50}
    ]);
    polygon.fill(pattern);

    console.log(this.listEntities());

};

primitivesState.update = function () {
    //rectangle.translate(30,0);
    rectangle.rotate(60);

    //circle.translate(30,0);
    circle.rotate(60);

    //circle2.translate(30,0);
    circle2.rotate(-30);

    //polygon.translate(30,0);
    polygon.rotate(-30);
};
