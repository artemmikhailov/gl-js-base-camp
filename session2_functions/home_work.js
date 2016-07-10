"use strict";
/*
 Implement a function that will return a set of unique characters passed as argument.
 Sorting is not required, lowercase and capital letters - the same character
 */
/**
 * @param {string} str
 */
function extractCharacters(str) {
    var lowChars = str.toLowerCase().split('');

    return lowChars.filter(function(item, index, array) {
        return array.indexOf(item) === index;
    });
}

console.log(extractCharacters('abcd'));
//['a', 'b', 'c', 'd']

console.log(extractCharacters('aaaabc'));
//['a', 'b', 'c']

console.log(extractCharacters('Hello, world'));
//[ 'h', 'e', 'l', 'o', ',', ' ', 'w', 'r', 'd' ];

/*
 Implement a function that returns the new one which can be used to log text information
 */
function createLogger(prefix) {
    var dt = new Date().toISOString();
    return console.log.bind(console, dt + ' ' +prefix + ': ');
}

var myLogger = createLogger('My Logger');

myLogger('some data');
// 2016-06-06T09:55:44.162Z My Logger: some data
// hint: use toISOString method to format Date object