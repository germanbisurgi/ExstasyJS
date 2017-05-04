var primitivesState = new Extasy.state('primitivesState');
var rectangle;
primitivesState.create = function () {

    rectangle = this.addRectangle(10, 10, 100, 100);
    rectangle.fill(this.createPattern(this.getAsset('stone'), 'repeat'));
    console.log(rectangle);

}

primitivesState.update = function () {
    rectangle.translate(5,5);
    rectangle.rotate(30);
}
