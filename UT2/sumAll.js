//sumAll.js

function sumAll(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        let suma = 0;
        for (let i = a; i <= b; i++) {
            suma += i;
        }
        console.log(suma);
    } else {
        console.log("Both a and b must be integers.");
    }
}