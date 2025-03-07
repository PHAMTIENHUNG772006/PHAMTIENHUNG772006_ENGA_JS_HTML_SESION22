let arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

for (let i = 0; i < inputs.length; i++) {
    let arr = inputs[i]; 
    let uniqueArray = []; 

    for (let j = 0; j < arr.length; j++) {
        if (!uniqueArray.includes(arr[j])) {
            uniqueArray.push(arr[j]);
        }
    }

    uniqueArray.sort((a, b) => a - b);

    console.log(uniqueArray);
}
