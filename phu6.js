let numbers = [2,5,7,4,1,8,6,2,5,7];
let seach = +prompt("mời bạn nhập số xuất hiện");
let count = 0;
for( let i = 0 ; i < numbers.length;i++){
    if(seach === numbers[i]){
        count++;
    }
}
if(count > 0){
    console.log(` số ${seach} xuất hiện ${count} lần trong mảng`);
}else{
    console.log(` số ${seach} không xuất hiện trong mảng`);
}