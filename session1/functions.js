/**
 * Created by Administrator on 28.06.2016.
 */

/*
Напишите фукцию с одним аргументом. Аргумент должен быть числом от 0 до 24. Если аргумент число от 8 до 21, выведите в консоль ‘Hello’. В другом случае выведите в консоль ‘It is not good time for that’. Если аргумент не число, выведите в консоль ‘It is not a number’.
Напишите функцию, которая принимает массив и буленовое значение в качестве аргументов. Если буленовое значение true, выведите в консоль найбольшее число, если false найменшее.
Напишите функцию, которая принимает один аргумент. Проверяет число ли это и выводит в консоль данное число в квадрате, если его можно поделить на 2 без остатка.
Напишите функцию с двумья аргументами. Если первый больше второго, выведите в консоль их разницу. Если второе больше первого, сумму.
Напишите функцию с двумья аргументами. Если сумма этих чисел от 11 до 19, то выведите в консоль результат. Если нет, то выведите “Result is not in range between 11 and 19”.
Напишите функцию с двумья аргументами. Если один из них делится без остатка на другой. выведите true, если нет false.
Напишите функцию с двумья аргументами. Сравните последние цифри числа, используя %
Выведите массив используя разные типы циклов.
*/

function greeting(hour){
    var message = '';
    var isValid = validate(hour);

    if(isValid) {
        var availableFrom = 8,
            availableTill = 21;
        var isAvailable = isBetween(hour, availableFrom, availableTill);
        message = isAvailable ? 'Hello' : "It is not good time for that";
    } else {
        message = 'It is not a number';
    }

    console.log(message);

    function validate(hour) {
        var rangeFrom = 0,
            rangeTill = 24;
        var isNumber = typeof hour === 'number';
        return isNumber && isBetween(hour, rangeFrom, rangeTill);
    }

    function isBetween(needle, from, till) {
        return needle >= from && needle <= till;
    }
}

function getNumber(numbers, isMaximum){
    if (Array.isArray(numbers)) {
        var correctNumbers = numbers.filter(isNumber);
        console.log(correctNumbers.reduce(compare));
    }

    function compare(value1, value2){
        return isMaximum ? Math.max(value1, value2) : Math.min(value1, value2)
    }

    function isNumber(value){
        return typeof value === 'number';
    }
}

function square(value){
    var isNumber = typeof value === 'number';
    if (isNumber) {
        var divider = 2;
        var isMultiple = !(value % divider);
        if (isMultiple) {
            var exponent = 2;
            console.log(Math.pow(value, exponent))
        }
    }
}

function compare(value1, value2){
    if (value1 > value2) {
        console.log(value1-value2);
    }
    if (value2 > value1) {
        console.log(value1 + value2)
    }
}

function sum(value1, value2){
    var rangeFrom = 11,
        rangeTill = 19;
    var sum = value1 + value2;
    var isWithinRange = sum >= rangeFrom && sum <= rangeTill;
    console.log(isWithinRange ? sum : 'Result is not in range between 11 and 19');
}

function areMultiples(value1, value2){
    console.log(!(value1 % value2) || !(value2 % value1))
}

function lastDigitsAreEqual(value1, value2){
    console.log(getLastDigit(value1) === getLastDigit(value2));

    function getLastDigit(value){
        return value % 10;
    }
}

function displayElementsOfArray(){
    var arr = [5, null, '----'];

    arr.forEach(function(item){
        console.log(item);
    });

    var newArr = arr.map(function(item){
        console.log(item);
        return item;
    });
    console.log(newArr);

    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    arr.every(function(item){
        console.log(item);
        return true;
    });

    arr.some(function(item){
        console.log(item);
        return false;
    });

    var key = 0;
    while(key < arr.length){
        console.log(arr[key]);
        key++;
    }

    key = 0;
    do {
        console.log(arr[key]);
        arr.splice(key,1);
    } while (arr.length)
}

// Проверить является ли строка полиндромом
function isPalindrome(string){
    var isPalindrome;
    var front = 0, back = string.length-1;
    while(isPalindrome !== false && front < back) {
        isPalindrome = string.charAt(front) === string.charAt(back);
        front++;
        back--;
    }
    console.log(isPalindrome);
}

/*
Write a program that prints the integers from 1 to 100.

But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz".
    For numbers which are multiples of both three and five print "FizzBuzz".
*/
function displayFizzBuzz(){
    var divider1 = 3,
        divider2 = 5;
    var dividerBoth = divider1 * divider2;
    var str = '';
    for (var i = 1; i <= 100; i++) {
        str = str.concat(checkIfMultiple(i)).concat(";");
    }
    console.log(str);

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
            default :
                result = item;
        }
        return result;
    }
}

// написать функцию являются ли числа "клыками" числа-вампира
function areVampireFangs(number1, number2){
    var fullNumber = number1 * number2;
    var result = (checkEnds() && checkDigitsCount() && checkDigitsSet());
    console.log(result);

    function checkEnds(){
        var endByZero = !(number1 % 10) && !(number2 % 10);
        return !endByZero;
    }
     function checkDigitsCount() {
         var fang1Count = number1.toString().length;
         var fang2Count = number2.toString().length;
         var fullNumberCount = fullNumber.toString().length;
         return fang1Count === fang2Count && fang1Count + fang2Count === fullNumberCount;
     }

    function checkDigitsSet() {
        var fang1Digits = number1.toString().split(''),
            fang2Digits = number2.toString().split(''),
            fangsDigits = [];
        fangsDigits = fang1Digits.concat(fang2Digits);
        fangsDigits.sort(sortNumbers);

        var fullNumberDigits = fullNumber.toString().split('').sort(sortNumbers);

        return compareArrays(fangsDigits, fullNumberDigits);

        function sortNumbers(previousVal, currentVal) {
            return previousVal - currentVal
        }

        function compareArrays(arr1, arr2){
            if (arr1.length !== arr2.length) {
                return false;
            }
            return arr1.every(function(element, index){
                return element === arr2[index];
            });
        }
    }
}
