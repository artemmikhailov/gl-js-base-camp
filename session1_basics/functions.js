/*global
    document, console
 */
'use strict';

/*
 Create a function with an argument. Argument should be a number between 0 and 24.
 If argument is a number from 8 till 21 output 'Hello' in console.
 In another case output 'It is not good time for that'.
 If the argument is not a number, output to the console 'It is not a number'.
 */
/**
 * @param {number} hour
 */
function greeting(hour) {
    var message = '',
        availableFrom = 8,
        availableTill = 21,
        isAvailable;
    function isBetween(needle, from, till) {
        return needle >= from && needle <= till;
    }
    function validate(hour) {
        var rangeFrom = 0,
            rangeTill = 24,
            isNumber = !isNaN(hour);
        return isNumber && isBetween(hour, rangeFrom, rangeTill);
    }

    if (validate(hour)) {
        isAvailable = isBetween(hour, availableFrom, availableTill);
        message = isAvailable ? 'Hello' : "It is not good time for that";
    } else {
        message = 'It is not a number';
    }

    console.log(message);
}
/*
 Create a function that accept an array and boolean value as arguments.
 If boolean value is equal 'true' output the highest number, otherwise the lowest one.
 */
/**
 * @param {Object[]} numbers
 * @param {boolean} isMaximum
 */
function getNumber(numbers, isMaximum) {
    function isNumber(value) {
        return !isNaN(value);
    }
    if (Array.isArray(numbers)) {
        var correctNumbers = numbers.filter(isNumber);
        console.log(isMaximum ? Math.max.apply(null, correctNumbers) : Math.min.apply(null, correctNumbers));
    }
}
/*
 Create a function that accept one argument.
 It checks the argument is number and outputs this squared number to console if it can be divided by 2 without a remainder.
 */
/**
 * @param {*} value
 */
function square(value) {
    var isNumber = !isNaN(value),
        divider = 2,
        exponent = 2,
        isMultiple;
    if (isNumber) {
        isMultiple = !(value % divider);
        if (isMultiple) {
            console.log(Math.pow(value, exponent));
        }
    }
}
/*
 Create a function with 2 arguments.
 If the first argument is bigger then the second one output their difference to console.
 If the second argument is bigger then the first one, output their sum.
 */
/**
 * @param {number} value1
 * @param {number} value2
 */
function compare(value1, value2) {
    if (value1 > value2) {
        console.log(value1 - value2);
    }
    if (value2 > value1) {
        console.log(value1 + value2);
    }
}
/*
 Create a function with 2 arguments. If sum of these numbers is between 11 and 19 output result to console.
 Otherwise output 'Result is not in range between 11 and 19'.
 */
/**
 * @param {number} value1
 * @param {number} value2
 */
function sum(value1, value2) {
    var rangeFrom = 11,
        rangeTill = 19,
        valuesSum = value1 + value2,
        isWithinRange = valuesSum >= rangeFrom && valuesSum <= rangeTill;
    console.log(isWithinRange ? valuesSum : 'Result is not in range between 11 and 19');
}
/*
 Create a function with 2 arguments. If one of them is divisible by another output true, if not -- false.
 */
/**
 * @param {number} value1
 * @param {number} value2
 */
function areMultiples(value1, value2) {
    console.log(!(value1 % value2) || !(value2 % value1));
}

/*
 Create a function with 2 arguments. Compare the last digit of the number, using the '%'
 */
/**
 * @param {number} value1
 * @param {number} value2
 */
function lastDigitsAreEqual(value1, value2) {
    function getLastDigit(value) {
        return value % 10;
    }
    console.log(getLastDigit(value1) === getLastDigit(value2));
}
/*
 Output array using different types of cycles.
 */
function displayElementsOfArray() {
    var i = 0,
        key = 0,
        arr = [5, null, '----'],
        container;

    arr.forEach(function (item) {
        console.log(item);
    });

    container = arr.map(function (item) {
        console.log(item);
        return item;
    });
    console.log(container);

    for (i; i < arr.length; i += 1) {
        console.log(arr[i]);
    }

    arr.every(function (item) {
        console.log(item);
        return true;
    });

    arr.some(function (item) {
        console.log(item);
        return false;
    });

    while (key < arr.length) {
        console.log(arr[key]);
        key += 1;
    }

    key = 0;
    do {
        console.log(arr[key]);
        arr.splice(key, 1);
    } while (arr.length);
}

/*
 Check if string is palindrome
 */
/**
 * @param {string} string
 */
function isPalindrome(string) {
    var isPalindromeString,
        trimmed = string.replace(/\W/g, '').toLowerCase(),
        front = 0,
        back = trimmed.length - 1;
    while (isPalindromeString !== false && front < back) {
        isPalindromeString = trimmed.charAt(front) === trimmed.charAt(back);
        front += 1;
        back -= 1;
    }
    console.log(isPalindromeString);
}

/*
Write a program that prints the integers from 1 to 100.

But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz".
    For numbers which are multiples of both three and five print "FizzBuzz".
*/
function displayFizzBuzz() {
    var i = 1,
        divider1 = 3,
        divider2 = 5,
        dividerBoth = divider1 * divider2,
        str = '';
    function checkIfMultiple(item) {
        var result;
        switch (0) {
        case item % dividerBoth:
            result = 'FizzBuzz';
            break;
        case item % divider1:
            result = 'Fizz';
            break;
        case item % divider2:
            result = 'Buzz';
            break;
        default:
            result = item;
        }
        return result;
    }

    for (i; i <= 100; i += 1) {
        str = str.concat(checkIfMultiple(i)).concat(";");
    }
    console.log(str);
}

/*
 Create a function that check whether the numbers is "teeth" of the number-vampire
 */
function areVampireFangs(number1, number2) {
    var fullNumber = number1 * number2;

    function checkEnds() {
        var endByZero = !(number1 % 10) && !(number2 % 10);
        return !endByZero;
    }

    function checkDigitsCount() {
        var fang1Count = number1.toString().length,
            fang2Count = number2.toString().length,
            fullNumberCount = fullNumber.toString().length;
        return fang1Count === fang2Count && fang1Count + fang2Count === fullNumberCount;
    }

    function checkDigitsSet() {
        var fang1Digits = number1.toString().split(''),
            fang2Digits = number2.toString().split(''),
            fangsDigits,
            fullNumberDigits;
        function sortNumbers(previousVal, currentVal) {
            return previousVal - currentVal;
        }

        function compareArrays(arr1, arr2) {
            if (arr1.length !== arr2.length) {
                return false;
            }
            return arr1.every(function (element, index) {
                return element === arr2[index];
            });
        }

        fangsDigits = fang1Digits.concat(fang2Digits);
        fangsDigits.sort(sortNumbers);
        fullNumberDigits = fullNumber.toString().split('').sort(sortNumbers);

        return compareArrays(fangsDigits, fullNumberDigits);
    }

    console.log(checkEnds() && checkDigitsCount() && checkDigitsSet());
}
