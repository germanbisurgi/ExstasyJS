var _select = function(selector, context) {
    if (context) {
        return  context.querySelector(selector);
    } else {
        return  document.querySelector(selector);
    }
}

var _print = function(obj) {
    console.log(JSON.stringify(obj, null, 4));
}

var _selectAll = function(selector) {
    var nodeList = document.querySelectorAll(selector);
    return Array.prototype.slice.call(nodeList,0);
};

var _isArray = function(element) {
    return Array.isArray(element);
};

var _count = function(element) {
    return Object.keys(element).length;
};


var _ready = function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
};

var _addClass = function(object, classNames) {
    var classNames = classNames.split(" ");
    if (_isArray(object)) {
        classNames.forEach(function(className, i) {
            object.forEach(function(node, i) {
                node.classList.add(className)
            });
        });
    } else {
        classNames.forEach(function(className, i) {
            object.classList.add(className);
        });
    }
};

var _removeClass = function(object, classNames) {
    var classNames = classNames.split(" ");
    if (_isArray(object)) {
        classNames.forEach(function(className, i) {
            object.forEach(function(node, i) {
                node.classList.remove(className)
            });
        });
    } else {
        classNames.forEach(function(className, i) {
            object.classList.remove(className);
        });
    }
};

var _toggleClass = function(object, classNames) {
    var classNames = classNames.split(" ");
    if (_isArray(object)) {
        classNames.forEach(function(className, i) {
            object.forEach(function(node, i) {
                node.classList.toggle(className)
            });
        });
    } else {
        classNames.forEach(function(className, i) {
            object.classList.toggle(className);
        });
    }
};

var _on = function(object, event, fn) {
    var events = event.split(" ");
    if (_isArray(object)) {
        events.forEach(function(event, i) {
            object.forEach(function(node, i) {
                node.addEventListener(event, function(event) {
                    fn(event);
                });
            });
        });
    } else {
        events.forEach(function(event, i) {
            object.addEventListener(event, function(event) {
                fn(event);
            });
        });
    }
};