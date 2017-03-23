var Animation = function() {
    "use strict";
    var self = this;

    self.counter = 0;

    self.animate = function(entity) {
        var speed = entity.GetUserData().sprite.speed;
        var row = entity.GetUserData().sprite.row;
        var sequence = entity.GetUserData().sprite.sequence;
        var sequenceFrames = _count(sequence);

        if (Clock.frames % speed === 0) {
            self.counter = (self.counter + 1) % sequenceFrames;
        }
        
        Canvas.image(
            entity.GetUserData().sprite.src,
            entity.GetUserData().sprite.sx + entity.GetUserData().sprite.sw * sequence[self.counter],
            entity.GetUserData().sprite.sh * row,
            entity.GetUserData().sprite.sw,
            entity.GetUserData().sprite.sh,
            entity.GetUserData().size.w / -2,
            entity.GetUserData().size.h / -2,
            entity.GetUserData().size.w,
            entity.GetUserData().size.h
        );
    }

    self.idle = function() {
        this.spriteMod = 1;
    }

}

var Animation = new Animation();