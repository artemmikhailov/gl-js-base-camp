"use strict";
/*
 Create a function that will take any number of arguments and return their sum.
 */
function getSum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(getSum(1,2,3));

/*
 Make this function be able to take array as argument
 */

function getArraySum(arr) {
    return arr.reduce(function (sum, current) {
        return sum + current;
    });
}

console.log(getArraySum([1,2,3]));

/*
 In Browser environment declare a variable:
 var myVar = { key: 'value' };
 Look at
 window.myVar;
 Declare a private variable using IIFE.
 */
/*
(function() {
    var myVar = {key : 'value'};
})();
console.log(window.myVar);
*/

var myVar = {key : 'value'};
console.log(window.myVar);

/*
 Create a function called celsiusToFahrenheit:
 Store a celsius temperature into a variable.
 Convert it to fahrenheit and output "NN°C is NN°F".
 */

function celsiusToFahrenheit (c) {
    return c + "C. is " + (c * 1.8 + 32) + "F";
}

console.log(celsiusToFahrenheit(10));

/*
 2. Create a function called fahrenheitToCelsius:
 Now store a fahrenheit temperature into a variable.
 Convert it to celsius and output "NN°F is NN°C."
 */

function fahrenheitToCelsius (f) {
    return f + "F is " + ((f - 32) / 1.8) + "C.";
}
console.log(fahrenheitToCelsius (50));

/*
 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

 Example string : 'Hello, GlobalLogic!'
 Expected Output : 'GlobalLogic'
 */
var stringWithLongestWord = 'Hello, GlobalLogic!';

console.log(getLongestWord(stringWithLongestWord));

/**
 * @param {string} string
 * @returns {string}
 */
function getLongestWord(string) {
    var wordsArr = string.split(/\W/);
    return wordsArr.reduce(function(previousValue, currentItem) {
        return previousValue.length < currentItem.length ? currentItem : previousValue;
    });
}

/*
 1. Write a function that can print entity details based on next model:
 {
     name: String,
     type: String,
     age: Number
 }
 Expected output: "%NAME%(%TYPE%) - %AGE%."
 */
var obj = {
    name: 'nameValue',
    type: 'typeValue',
    age: 5
};
printEntityDetails(obj);

/**
 * @param {Object} obj
 */
function printEntityDetails(obj) {
    var outArr = [
        obj.name,
        '(' + obj.type + ')',
        ' - ',
        obj.age,
        '.'
    ];
    console.log(outArr.join(''));
}

/*
 2. Rewrite that function to use this instead of argument (use apply, call and bind to print the details of different entities).
 */
function printEntityDetailsViaContext() {
    var outArr = [
        this.name,
        '(' + this.type + ')',
        ' - ',
        this.age,
        '.'
    ];
    console.log(outArr.join(''));
}

var entity1 = {name: 'entity1Name', type: 'entity1Type', age: 7},
    entity2 = {name: 'entity2Name', type: 'entity2Type', age: 8},
    entity3 = {name: 'entity3Name', type: 'entity3Type', age: 9};

printEntityDetailsViaContext.call(entity1);
printEntityDetailsViaContext.apply(entity2);
printEntityDetailsViaContext.bind(entity3)();
