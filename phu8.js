let arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

let uniqueNumber = [];
let counts = [];

for (let i = 0; i < arr.length; i++) {
    let index = uniqueNumber.indexOf(arr[i]);
    if (index === -1) {
        uniqueNumber.push(arr[i]);
        counts.push(1);
    } else {
        counts[index]++;
    }
}

console.log(uniqueNumber);
console.log(counts);

let minValue = Number.MAX_VALUE;
let maxCount = 0;

for (let i = 0; i < uniqueNumber.length; i++) {
    if (maxCount < counts[i]) {
        maxCount = counts[i];
        minValue = uniqueNumber[i];
    } else if (maxCount === counts[i] && minValue > uniqueNumber[i]) {
        minValue = uniqueNumber[i];
    }
}

console.log(minValue);

