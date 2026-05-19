// const reverseString = (reverse) => {
//     let result = '';
//     for (let i = reverse.length - 1; i >= 0; i--) {
//         result += reverse.charAt(i);
//     }
//     return result;
// }

const reverseString = (reverse) => {return reverse.split("").reverse().join("")}

// Do not edit below this line
module.exports = reverseString;
