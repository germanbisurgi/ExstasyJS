var poolState = new Extasy.state('poolState');
var pool = new Extasy.pool();

poolState.create = function () {
    
    for (var i = 50 - 1; i >= 0; i--) {
        pool.add(this.addCircle(
            this.randomInt(0, 500),
            this.randomInt(0, 300),
            this.randomInt(2, 5)
        ));
    }
    pool.clear();
    

};

poolState.update = function () {};
