StateManager = function (game) {
    "use strict";
    var self = this;
    self.game = game;
    self.list = [];

    self.getState = function(stateName) {
        var output = false;
        self.list.forEach(function(state, i) {
            if (state.name == stateName) {
                output = state;
            }
        });
        return output;
    }

    // Add a state object if not exists.
    self.add = function(stateObject) {
        if (!self.getState(stateObject.name)) {
            self.list.push(stateObject);
        } else {
            // Exception.
            console.log('EXCEPTION: This state is already in the list ->', stateObject);
            console.log('the game will be stoped');
            self.game.stop();
        }
    }

    // Set the current state to the new state if exists.
    self.switch = function(stateName) {
        var requestedState = self.getState(stateName);
        if (requestedState) {
            requestedState.game = self.game; // MAGIC! :)
            self.game.state = requestedState;
            // console.log('switched to ->', stateName);
        } else {
            // Exception.
            console.log('EXCEPTION: ', stateName, 'was not added.');
            console.log('the game will be stoped');
            self.game.stop();
        }
    }

}