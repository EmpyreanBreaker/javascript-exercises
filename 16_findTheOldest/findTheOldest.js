const findTheOldest = function (people) {
    return person = people.sort((firstPerson, secondPerson) => {
        // Get Ages
        let firstPersonAge = 0;
        let secondPersonAge = 0;

        if (firstPerson.yearOfDeath == undefined) {
            firstPersonAge = new Date().getFullYear() - firstPerson.yearOfBirth;
        }
        else {
            firstPersonAge = firstPerson.yearOfDeath - firstPerson.yearOfBirth
        }

        if (secondPerson.yearOfDeath == undefined) {
            secondPersonAge = new Date().getFullYear() - secondPerson.yearOfBirth;
        }
        else {
            secondPersonAge = secondPerson.yearOfDeath - secondPerson.yearOfBirth
        }

        // Sort by oldest
        return secondPersonAge - firstPersonAge;
    })[0];

};

// Do not edit below this line
module.exports = findTheOldest;
