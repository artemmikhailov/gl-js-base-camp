/*global
    document, Node
 */
'use strict';
/*
 0. Create a function that accepts a selector string and returns:
    - undefined if nothing was found
    - a found node if one item has been found
    - array of nodes if multiple nodes have been found
    - the type of node if pass a node to function
*/
/**
 * @param {string|Node} str
 * @return {Node|NodeList|number}
 */
function parseSelector(str) {
    var result;
    if (typeof str === 'string') {
        result = document.querySelectorAll(str);
        if (result.length === 0) {
            result = undefined;
        } else if (result.length === 1) {
            result = result[0];
        }
    } else if (str instanceof Node) {
        result = str.nodeType;
    } else {
        throw new Error(str + 'is not a valid selector.');
    }
    return result;
}

/*
 1. Create a function that accepts selector string and returns:
    - undefined if nothing was found
    - a found node if one item has been found
    - the first node if multiple nodes have been found
*/
/**
 * @param {string}  str
 * @return {Node}
 */
function parseSelectorSimple(str) {
    var result = document.querySelectorAll(str);
    return result.length > 0 ? result[0] : undefined;
}

/*
 2. Create function as analogue of DOM insertBefore. But it should insert node after reference.
*/
/**
 * @param {Node} newChild
 * @param {Node} refChild
 * @returns {Node}
 */
Node.prototype.insertAfter = function(newChild, refChild) {
    return refChild.nextSibling
        ? refChild.parentNode.insertBefore(newChild, refChild.nextSibling)
        : refChild.parentNode.appendChild(newChild);
};

/*
 3. Create a function that returns attribute value or sets it.
 */
/**
 * @param {string} name
 * @param {string} [value]
 * @return {boolean|string}
 */
Element.prototype.controlAttribute = function(name, value) {
    if (value === undefined) {
        if (!this.hasAttribute(name)) {
            throw new Error ("attribute '" + name + "' does not exist");
        }
        return this.getAttribute(name)
    } else {
        this.setAttribute(name, value);
        return this.getAttribute(name) === value;
    }
};

/*
 4. Create a chessboard by js
*/
var board = document.createElement('div'),
    cell = board.cloneNode(false);

board.style.border = "1px solid black";
board.style.width = "256px";
board.style.height = "256px";
cell.style.width = 100/8 + '%';
cell.style.height = 100/8 + '%';
cell.style.float = 'left';

for (var colored, i = 0; i < 64; i++) {
    colored = cell.cloneNode(false);
    (Math.floor((i/8+i))%2 === 0) ? colored.style.backgroundColor = 'black' : colored.style.backgroundColor = 'white';
    board.appendChild(colored)
}