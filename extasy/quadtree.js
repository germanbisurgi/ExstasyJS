var Quadtree = function(bounds, max_objects, max_levels, level, game) {

    'use strict';
    var self = this;
    self.game = game;
    self.max_objects = max_objects || 1;
    self.max_levels = max_levels || 4;

    self.level = level || 0;
    self.bounds = bounds;

    self.objects = [];
    self.nodes = [];

    /*
     * Split the node into 4 subnodes
     */
    self.split = function() {

        var nextLevel = self.level + 1;
        var subWidth = Math.round(self.bounds.width / 2);
        var subHeight = Math.round(self.bounds.height / 2);
        var x = Math.round(self.bounds.x);
        var y = Math.round(self.bounds.y);



        // top right node.
        self.nodes[0] = new Quadtree({
            x: x + subWidth,
            y: y,
            width: subWidth,
            height: subHeight
        }, self.max_objects, self.max_levels, nextLevel, self.game);

        //top left node
        self.nodes[1] = new Quadtree({
            x: x,
            y: y,
            width: subWidth,
            height: subHeight
        }, self.max_objects, self.max_levels, nextLevel, self.game);

        //bottom left node
        self.nodes[2] = new Quadtree({
            x: x,
            y: y + subHeight,
            width: subWidth,
            height: subHeight
        }, self.max_objects, self.max_levels, nextLevel, self.game);

        //bottom right node
        self.nodes[3] = new Quadtree({
            x: x + subWidth,
            y: y + subHeight,
            width: subWidth,
            height: subHeight
        }, self.max_objects, self.max_levels, nextLevel, self.game);
    };


    /*
     * Determine which node the object belongs to
     * @param Object pRect      bounds of the area to be checked, with x, y, width, height
     * @return Integer      index of the subnode (0-3), or -1 if pRect cannot completely fit within a subnode and is part of the parent node
     */
    self.getIndex = function(pRect) {

        var index = -1;
        var verticalMidpoint = self.bounds.x + (self.bounds.width / 2);
        var horizontalMidpoint = self.bounds.y + (self.bounds.height / 2);

        //pRect can completely fit within the top quadrants
        var topQuadrant = (pRect.y < horizontalMidpoint && pRect.y + pRect.height < horizontalMidpoint);

        //pRect can completely fit within the bottom quadrants
        var bottomQuadrant = (pRect.y > horizontalMidpoint);

        //pRect can completely fit within the left quadrants
        if (pRect.x < verticalMidpoint && pRect.x + pRect.width < verticalMidpoint) {
            if (topQuadrant) {
                index = 1;
            } else if (bottomQuadrant) {
                index = 2;
            }

            //pRect can completely fit within the right quadrants   
        } else if (pRect.x > verticalMidpoint) {
            if (topQuadrant) {
                index = 0;
            } else if (bottomQuadrant) {
                index = 3;
            }
        }

        return index;
    };


    /*
     * Insert the object into the node. If the node
     * exceeds the capacity, it will split and add all
     * objects to their corresponding subnodes.
     * @param Object pRect      bounds of the object to be added, with x, y, width, height
     */
    self.insert = function(pRect) {

        var i = 0;
        var index;

        //if we have subnodes ...
        if (typeof self.nodes[0] !== 'undefined') {
            index = self.getIndex(pRect);

            if (index !== -1) {
                self.nodes[index].insert(pRect);
                return;
            }
        }

        self.objects.push(pRect);

        if (self.objects.length > self.max_objects && self.level < self.max_levels) {

            //split if we don't already have subnodes
            if (typeof self.nodes[0] === 'undefined') {
                self.split();
            }

            //add all objects to there corresponding subnodes
            while (i < self.objects.length) {

                index = self.getIndex(self.objects[i]);

                if (index !== -1) {
                    self.nodes[index].insert(self.objects.splice(i, 1)[0]);
                } else {
                    i = i + 1;
                }
            }
        }
    };


    /*
     * Return all objects that could collide with the given object
     * @param Object pRect      bounds of the object to be checked, with x, y, width, height
     * @Return Array        array with all detected objects
     */
    self.retrieve = function(pRect) {

        var index = self.getIndex(pRect);
        var returnObjects = self.objects;

        //if we have subnodes ...
        if (typeof self.nodes[0] !== 'undefined') {

            //if pRect fits into a subnode ..
            if (index !== -1) {
                returnObjects = returnObjects.concat(self.nodes[index].retrieve(pRect));

                //if pRect does not fit into a subnode, check it against all subnodes
            } else {
                for (var i = 0; i < self.nodes.length; i = i + 1) {
                    returnObjects = returnObjects.concat(self.nodes[i].retrieve(pRect));
                }
            }
        }

        return returnObjects;
    };


    /*
     * Clear the quadtree
     */
    self.clear = function() {
        self.objects = [];

        for (var i = 0; i < self.nodes.length; i = i + 1) {
            if (typeof self.nodes[i] !== 'undefined') {
                self.nodes[i].clear();
            }
        }

        self.nodes = [];
    };

    self.draw = function(node) {
        node.objects.forEach(function (object) {
                self.game.renderManager.ctx.beginPath();
                self.game.renderManager.ctx.rect(object.x, object.y, object.width, object.height);
                self.game.renderManager.ctx.stroke();   
                self.game.renderManager.ctx.closePath();
            });
        if (node.nodes.length === 0) {
            self.game.renderManager.ctx.beginPath();
            self.game.renderManager.ctx.rect(node.bounds.x, node.bounds.y, node.bounds.width, node.bounds.height);
            self.game.renderManager.ctx.stroke();   
            self.game.renderManager.ctx.closePath();
            
        } else {
            node.nodes.forEach(function (node) {
                self.draw(node)
            });
        }
    };

};