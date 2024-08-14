// findTheOldest.js

function findTheOldest(people) {
    let oldest = people[0];

    for (let i = 1; i < people.length; i++) {
        const currentPerson = people[i];
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        const currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

        if (currentAge > oldestAge) {
            oldest = currentPerson;
        }
    }

    console.log(oldest);
    return oldest;
}

// Ejemplo de uso
const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];

findTheOldest(people); // { name: "Ray", yearOfBirth: 1962, yearOfDeath: 2011 }