const pascal = function (n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 1) {
    return undefined;
  }

  if (n === 1) {
    return [1];
  }

  const previousRow = pascal(n - 1);
  const currentRow = [];

  for (let i = 0; i <= previousRow.length; i++) {
    const left = previousRow[i - 1] || 0;
    const right = previousRow[i] || 0;

    currentRow.push(left + right);
  }

  return currentRow;
};
// Do not edit below this line
module.exports = pascal;
