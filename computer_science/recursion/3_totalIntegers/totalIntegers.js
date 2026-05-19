const totalIntegers = function (data) {
  if (!Array.isArray(data) && (data === null || typeof data !== "object")) {
    return undefined;
  }

  const countIntegers = function (value) {
    if (Number.isInteger(value)) {
      return 1;
    }

    if (Array.isArray(value)) {
      let sum = 0;

      for (const item of value) {
        sum += countIntegers(item);
      }

      return sum;
    }

    if (value !== null && typeof value === "object") {
      let sum = 0;

      for (const item of Object.values(value)) {
        sum += countIntegers(item);
      }

      return sum;
    }

    return 0;
  };

  return countIntegers(data);
};

totalIntegers();
// Do not edit below this line
module.exports = totalIntegers;
