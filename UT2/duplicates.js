//duplicates.js

function duplicates(nums) {
    let count = 0;
    let duplicates = {};

    for (let num of nums) {
        if (duplicates[num]) {
            duplicates[num]++;
        } else {
            duplicates[num] = 1;
        }
    }

    for (let key in duplicates) {
        if (duplicates[key] > 1) {
            count++;
        }
    }

    console.log(count);
}