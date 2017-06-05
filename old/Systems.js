var Systems = function() {

    "use strict";
    var self = this;

    var DEGTORAD = 0.0174532925199432957;
    var RADTODEG = 57.295779513082320876;

    self.userInput = function(entity) {

        var speedX = entity.GetUserData().velocity.x;
        var speedY = entity.GetUserData().velocity.y;

        // Turn right.
        if (Input.pressingRight || tactileTouchControllerRight.touched) entity.ApplyTorque(6);

        // Turn left.
        if (Input.pressingLeft || tactileTouchControllerLeft.touched)  entity.ApplyTorque(-6);

        // Go ahead.
        if (Input.pressingUp || tactileTouchControllerA.touched) {
            entity.GetUserData().sprite.row = 1;
            var currentAngle = entity.GetAngle() - 90 * DEGTORAD;
            var cos = Math.cos(currentAngle);
            var sin = Math.sin(currentAngle);
            entity.ApplyImpulse({'x': cos * speedX, 'y': sin * speedY}, entity.GetWorldCenter()); 
        }

        // Go back.
        if (Input.pressingDown || tactileTouchControllerB.touched) {
            entity.GetUserData().sprite.row = 1;
            var currentAngle = entity.GetAngle() - 90 * DEGTORAD;
            var cos = Math.cos(currentAngle);
            var sin = Math.sin(currentAngle);
            entity.ApplyImpulse({'x': -cos  * speedX, 'y': -sin * speedY}, entity.GetWorldCenter()); 
        }
        
        if (!Input.pressingA && !Input.pressingW && !Input.pressingD && !Input.pressingS && !Input.pressingUp && !Input.pressingDown && !tactileTouchControllerB.touched && !tactileTouchControllerA.touched) {
            entity.GetUserData().sprite.row = 0;
        } 

    }

    self.physics = function() {
        Physics.world.Step(1/60, 4, 3);
        Physics.world.ClearForces();
    }

    self.render = function(entities) {

        // Camera settings.
        Canvas.clear();
        Canvas.context.translate(Camera.x, Camera.y);

        // Render the box2d world and config camera.
        if (Game.debugMode) Physics.clear();
        if (Game.debugMode) Physics.world.DrawDebugData();
        if (Game.debugMode) Physics.context.translate(Camera.x, Camera.y);

        entities.forEach(function(entity, i) {
        
            if (entity.GetUserData().fixture.shape === 'rectangle') {

                var posX = entity.GetPosition().x * Physics.scale;
                var posY = entity.GetPosition().y * Physics.scale;

                Canvas.context.translate(posX, posY);
                Canvas.context.rotate(entity.GetAngle());

                if (entity.GetUserData().image) {
                    Canvas.image(
                        entity.GetUserData().image.src,
                        entity.GetUserData().image.sx,
                        entity.GetUserData().image.sy,
                        entity.GetUserData().image.sw,
                        entity.GetUserData().image.sh,
                        entity.GetUserData().size.w / -2,
                        entity.GetUserData().size.h / -2,
                        entity.GetUserData().size.w,
                        entity.GetUserData().size.h
                    );
                } else if (entity.GetUserData().sprite) {

                    Animation.animate(entity);

                } else {
                    Canvas.context.fillStyle = 'yellow';
                    Canvas.rectangle(
                        entity.GetUserData().size.w / -2,
                        entity.GetUserData().size.h / -2,
                        entity.GetUserData().size.w,
                        entity.GetUserData().size.h
                    );
                }      

                Canvas.context.rotate(-entity.GetAngle());
                Canvas.context.translate(-posX, -posY);

            }

            if (entity.GetUserData().fixture.shape === 'circle') {

                var posX = entity.GetPosition().x * Physics.scale;
                var posY = entity.GetPosition().y * Physics.scale;

                Canvas.context.translate(posX, posY);
                Canvas.context.rotate(entity.GetAngle());

                if (entity.GetUserData().image) {
                    Canvas.image(
                        entity.GetUserData().image.src,
                        entity.GetUserData().image.sx,
                        entity.GetUserData().image.sy,
                        entity.GetUserData().image.sw,
                        entity.GetUserData().image.sh,
                        entity.GetUserData().size.radius * -1,
                        entity.GetUserData().size.radius * -1,
                        entity.GetUserData().size.radius *  2,
                        entity.GetUserData().size.radius *  2
                    );
                } else if (entity.GetUserData().sprite) {

                    Animation.animate(entity);

                } else {
                    Canvas.context.fillStyle = 'yellow';
                    Canvas.circle(0, 0, entity.GetUserData().size.radius);
                }

                Canvas.context.rotate(-entity.GetAngle());
                Canvas.context.translate(-posX, -posY);

            }
        });

        Canvas.context.translate(-Camera.x, -Camera.y)
        if (Game.debugMode) Physics.context.translate(-Camera.x, -Camera.y);

    }

    self.debug = function() {

        if (Game.debugMode) {
            Canvas.write('Collisions: ' + Physics.world.GetContactCount(), 100, 100);
            Canvas.write('Game delta: ' + Game.delta, 100, 120);
        }
        
    }

}