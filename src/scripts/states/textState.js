var textState = new Extasy.state('textState');

textState.create = function () {

    var style = {
        font: "40px Helvetica",
        fillStyle: "purple",
        textAlign: "start",
        textBaseline: "top",
        strokeStyle: "black",
        lineWidth: 3
    };

    this.addTextField(0, 0, 'Banana', style);

};

textState.update = function () {
};
