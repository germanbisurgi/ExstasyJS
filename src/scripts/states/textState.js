var textState = new Extasy.state('textState');

textState.create = function () {

    var style = {
        font: "30px Helvetica",
        fillStyle: "purple",
        textAlign: "start",
        textBaseline: "top",
        strokeStyle: "black",
        lineWidth: 0,
        lineHeight: 1.5,
        width: 300,
        height: 500
    };

    this.addTextField(0, 0, 'fragola\nmandarino acciuga ballerina', style);

};

textState.update = function () {
};
