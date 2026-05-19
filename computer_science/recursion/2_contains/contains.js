const contains = function (obj, value) {
  // Iterate through all key-value pairs in the object
  for (const [key, val] of Object.entries(obj)) {
    // Special handling for NaN since NaN !== NaN
    if (Number.isNaN(value) && Number.isNaN(val)) {
      return true;
    }
    // Check if the current value matches
    if (val === value) {
      return true;
    }
    // If the value is an object (and not null), search it recursively
    if (val !== null && typeof val === "object") {
      if (contains(val, value)) {
        return true;
      }
    }
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
