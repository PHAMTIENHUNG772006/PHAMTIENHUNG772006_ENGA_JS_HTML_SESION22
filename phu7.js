let numbers = [2,5,7,4,1,8,6,2,5,10,];

for(let i= 0;i<numbers.length;i++){
    for(let j= i+1;j<numbers.length-1;j++){
        if(numbers[i] > numbers[j]){
            let tg = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = tg;
        }
    }
}
console.log(`mang sau khi sắp xếp là ${numbers}`);