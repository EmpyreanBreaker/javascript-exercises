const leapYears = (year) => {

    // Every leap year is divisible by four
    if (year % 4 === 0) {

        // Leap years divisible by 100 must also be divisible by 400
        if (year % 100 === 0 && year % 400 !== 0) {
            return false;
        }
        
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
