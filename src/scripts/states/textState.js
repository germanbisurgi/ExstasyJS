var textState = new Extasy.state('textState');
var self;

textState.create = function () {
    self = textState;
    self.style = {
        font: "20px Helvetica",
        fillStyle: "purple",
        textAlign: "start",
        textBaseline: "top",
        strokeStyle: "black",
        lineWidth: 0,
        lineHeight: 1.5,
    };

    self.addText(15, 15, 300, 500, 'fragola mandarino acciuga ballerina fragola mandarino acciuga ballerina fragola mandarino acciuga ballerina', self.style);

    console.log(self.currentState().name);
};

textState.update = function () {};
