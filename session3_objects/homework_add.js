// 1 + add(1)(2) // 4
/**
 * @param {Number} num
 */
function add(num) {
    var sum = num,
        adder = function (subsequentNum) {
            return sum += subsequentNum;
        };

    adder.valueOf = function () {
        return sum;
    };

    return adder;
}

console.log(1 + add(1)(2));
