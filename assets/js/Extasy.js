//crazy, cute, solid,spicy, fresh
var Extasy =  {

    //--------------------------------------------------------------------- Game

    Game: function() {
        var self = this;

        self.fps = 60;
        self.isPaused = false;
        self.states = [];
        self.currentState;
        
        // Checks if a state already exist.
        self.getState = function(stateName) {
            var output = false;
            self.states.forEach(function(state, i) {
                if (state.name == stateName) {
                    output = state;
                }
            });
            return output;
        }

        // Add a the state object if not exists.
        self.addState = function(stateObject) {
            if (!self.getState(stateObject.name)) {
                self.states.push(stateObject);
            }
        }

        // Set the current state to the new state if exists.
        self.switchState = function(stateName) {
            var requestedState = self.getState(stateName);
            if (requestedState) {
                self.currentState = requestedState;
            }
        }

        self.start = function() {
            var lastTime = 0;
            var requiredElapsed = 1000 / self.fps;
            function tick(now) {
                requestAnimationFrame(tick);
                if (!self.isPaused) {
                    if (!lastTime) {
                        lastTime = Math.floor(now);
                    }
                    self.delta = now - lastTime;   
                    if (self.delta > requiredElapsed) {
                        self.state.update();
                        lastTime = Math.floor(now);
                    }
                }
            }
            requestAnimationFrame(tick); 
        }

        self.pause = function() {
            self.isPaused = true;
        }

        self.resume = function() {
            self.isPaused = false;
        }

    },

    //-------------------------------------------------------------------- State

    State: function(name) {
        var self = this;

        self.name = name;
        self.isInitialized = false;
        self.loadProgress = 0;

    }
}