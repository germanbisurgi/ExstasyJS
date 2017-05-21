var primitivesState = new Extasy.state('primitivesState');
var rectangle;
var circle;
var polygon;
var regularPolygon;

primitivesState.create = function () {

    var pattern = this.createPattern(this.getAsset('stone'), 'repeat');

    rectangle = this.addRectangle(0, 0, 50, 50);
    rectangle.fill(pattern);

    circle = this.addCircle(100, 150, 25);
    circle.fill(pattern);

    polygon = this.addPolygon(50, 200, [
        {x: 50, y: 0},
        {x: 400, y: 25},
        {x: 50, y: 50},
        {x: 0, y: 50}
    ]);
    polygon.fill(pattern);

    regularPolygon = this.addRegularPolygon(50, 0, 25, 4);

    console.log(this.listEntities());
    console.log(regularPolygon);
    console.log(regularPolygon.image.width);
    console.log(regularPolygon.image.height);

    regularPolygon.setAngle(45);


};

primitivesState.update = function () {
    //rectangle.rotate(60);
    //circle.rotate(60);
    //polygon.rotate(-30);
    //regularPolygon.rotate(-180);
};
