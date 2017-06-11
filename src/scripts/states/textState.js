var textState = new Extasy.state('textState');

textState.create = function () {
    //this.addRectangle(0, 0, 200, 100);
    this.addTextField(0, 0, 'Banana');
    console.log(this.listEntities());

};

textState.update = function () {
};
