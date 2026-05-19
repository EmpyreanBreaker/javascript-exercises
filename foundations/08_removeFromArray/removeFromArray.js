const removeFromArray = function (arr, ...theArgs) {

    if (theArgs.length != 0) {
        return arr.filter((value) => !theArgs.includes(value));
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
