const repeatinput = (input, repeat) => {

    if (typeof (input) != "string" || repeat < 0) {
        let error = "ERROR"
        return error;
    }

    let result = '';
    for (let i = 0; i < repeat; i++) {
        result += input;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatinput;