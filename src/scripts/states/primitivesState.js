var primitivesState = new Extasy.state('primitivesState');
var rectangle;
var circle;
var circle2;

primitivesState.create = function () {

    var pattern = this.createPattern(this.getAsset('stone'), 'repeat');

    rectangle = this.addRectangle(0, 0, 100, 100);
    rectangle.fill(pattern);

    circle = this.addCircle(100, 100, 25);
    circle.fill(pattern);

    circle2 = this.addCircle(5, 200, 20);
    circle2.fill(pattern);

    console.log(this.listEntities());

};

primitivesState.update = function () {
    //rectangle.translate(30,0);
    rectangle.rotate(60);

    //circle.translate(30,0);
    circle.rotate(60);

    //circle2.translate(30,0);
    circle2.rotate(-30);
};
