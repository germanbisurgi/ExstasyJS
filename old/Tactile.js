var Tactile = function(target) {
    
    var self = this;

    self.target = target;
    self.touched = false;

    self.target.addEventListener('touchstart', function(e) {
        e.preventDefault();
        self.touched = true;
    }, false);

    self.target.addEventListener('touchend', function(e) {
        e.preventDefault();
        self.touched = false;
    }, false);

}