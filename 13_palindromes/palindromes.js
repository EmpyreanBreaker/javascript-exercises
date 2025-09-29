const palindromes = function (string) {

    // First remove all punctuation and convert back to a string
    string = string
        .toLowerCase()
        .split('')
        .filter(char => /[a-z0-9]/.test(char)).join('');

    let comparison = string.split('').reverse().join('');

    // Return the comparison
    return comparison === string;
};

// Do not edit below this line
module.exports = palindromes;
