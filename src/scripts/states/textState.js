var textState = new Extasy.state('textState');

textState.create = function () {

    var style = {
        font: "20px Helvetica",
        fillStyle: "purple",
        textAlign: "start",
        textBaseline: "top",
        strokeStyle: "black",
        lineWidth: 0,
        lineHeight: 1.5,
    };

    this.addTextField(0, 0, 300, 500, 'fragola mandarino acciuga ballerina fragola mandarino acciuga ballerina fragola mandarino acciuga ballerina', style);

};

textState.update = function () {
};
