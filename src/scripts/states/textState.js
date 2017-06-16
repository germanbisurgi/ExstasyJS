var textState = new Extasy.state('textState');

textState.create = function () {

    var style = {
        font: "30px Helvetica",
        fillStyle: "purple",
        textAlign: "start",
        textBaseline: "top",
        strokeStyle: "black",
        lineWidth: 0,
        lineHeight: 1.2,
        maxWidth: 300
    };

    this.addTextField(0, 0, 'Banana Ananas Limonata Mela', style);

};

textState.update = function () {
};
