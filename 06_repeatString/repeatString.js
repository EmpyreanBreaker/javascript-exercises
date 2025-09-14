const repeatString = (string, repeat) => {

    let result = '';

    for (let i = 0; i < repeat; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;