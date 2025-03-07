let arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

let count=0;
let maxCount=0;
let maxCountNumber = numbers[0];

for(let i=0;numbers.length;i++){

    for( let j=0 ;j<numbers.length;j++){

        if(numbers[i]===numbers[j]){
            count++;
        }
        if(count>  maxCount){
           if(maxCountNumber > numbers[i] || count > maxCount){
            maxCountNumber = numbers[i];

           }
           maxCount = count;
        }
    }
    console.log(`tai vi tri thu ${i} thì count = ${count}`);
}
console.log("max count number : ", maxCountNumber);
