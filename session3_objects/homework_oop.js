/*
    Implement:
    1. Define a Shape constructor. Objects created with Shape should have a `type` property and a `getType` method.
    2. Define a Triangle constructor. Objects created with Triangle should inherit from Shape and have three own properties: a, b and c representing the sides of a triangle.
    3. Add a new method to the prototype called `getPerimeter`.

    Test your implementation with this code:
       var t = new Triangle(1, 2, 3);
       t.constructor;                 // Triangle(a, b, c)
       t instanceof Shape                // true
       t.getPerimeter();              // 6
       t.getType();                   // "triangle"
*/
/**
 * @param {string} type
 * @constructor
 */
function Shape(type) {
    this.type = type;
    this.getType = function getType() {
        return this.type;
    }
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @constructor
 */
function Triangle(a, b, c) {
    Shape.call(this, 'triangle');
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
};

var t = new Triangle(1, 2, 3);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(t instanceof Shape);            // true
console.log(t.getPerimeter());              // 6
console.log(t.getType());                   // "triangle"