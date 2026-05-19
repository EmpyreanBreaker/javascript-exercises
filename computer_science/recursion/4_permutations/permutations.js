const permutations = function (arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length === 0) {
    return [[]];
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];

    const remainingPermutations = permutations(remaining);

    for (const permutation of remainingPermutations) {
      result.push([current, ...permutation]);
    }
  }

  return result;
};

// Do not edit below this line
module.exports = permutations;
