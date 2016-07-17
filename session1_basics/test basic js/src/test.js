'use strict';
/*
 Write a function that accepts one argument and returns its type
*/
function getDataType(variable) {
    return typeof variable;
}


/*
 Write a function that accepts two arguments,
 and returns the value 1 if their values and types are equal,
 returns 0 if only values are equal,
 otherwise returns -1
*/
function compareByType(a, b) {
    if (a === b) {
        return 1;
    }

    if (a == b) {
        return 0;
    }

    return -1;
}


/*
 Write a function that accepts one argument,
 and if the argument has a numeric type increases it by 1
 and returns result.
 Otherwise returns -1
*/
function increase(value) {
    return typeof value === 'number' ? value + 1 : -1;
}

/*
 Write a function that accepts two arguments,
 array and the separator [optional]
 and returns a string in the form of array elements with separators if the separator is set
 or line separated by "-" if separator is not specified
*/
function join(array, separator) {
    if (separator === undefined) {
        separator = '-';
    }

    return join(array, separator);
}


/*
 Write a function that accepts two array,
 and returns a single array consisting of the elements of the first and second
*/
function glue(arrA, arrB) {
    return arrA.concat(arrB);
}


/*
 Write a function that accepts an array,
 and returns another array sorted from highest to lowest
*/
function order(arr) {
    function compare(previousVal, currentVal) {
        if (!isNaN(previousVal) || !isNaN(currentVal)) {
            return currentVal - previousVal;
        }

        return previousVal < currentVal;
    }
    return arr.sort(compare);
}


/*
 Write a function that accepts an array,
 and returns another array without number that is less than 0
*/
function removeNegative(arr) {
    return arr.filter(function (item) {
        return item >= 0;
    });
}


/*
 Write a function that accepts one argument (a string)
 and returns an array of string's elements separated by a space ' '
*/
function stringToArray(str) {
    return str.split(' ');
}


/*
 Write a function that accepts one argument (a string)
 and returns the part of the line up to the first comma
*/
function getStringPart(str) {
    return str.substring(0, str.indexOf(','));
}

