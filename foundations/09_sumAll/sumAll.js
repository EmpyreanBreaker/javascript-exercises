const sumAll = (a, b) => {

    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";


    let sum = 0;
    let temp = 0;
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }

    for (; a <= b; a++) {
        sum += a;
    };
    return sum;
}
// Do not edit below this line
module.exports = sumAll;
