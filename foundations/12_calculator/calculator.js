const add = ((a, b) => a + b);

const subtract = ((a, b) => a - b);

const sum = function (arr) {
  return arr.reduce((accumlator, value) => accumlator + value, 0);
};

const multiply = function (arr) {
  return arr.reduce((accumlator, value) => accumlator * value, 1)
};

const power = ((a, b) => Math.pow(a, b));

const factorial = ((n) => {
  if (n == 0 || n == 1) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
});

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
