let arr = [];
for(let i=1;i<=5;i++){
    let item = +prompt("Mời bạn nhập phân tử thứ " + i);
    arr.push(item);
    if(isNaN(item)){
        alert(` dữ liệu sai `);
    }
}
let sumEven = 0;
let sumOdd = 0;
for(let i=0;i<=arr.length;i++){
    if( arr[i] % 2 === 0) {
        sumEven += arr[i];
    }else if ( arr[i] % 2 === 1){
        sumOdd += arr[i];
    }
}
console.log(` Tổng các số chẵn là : ${sumEven}`);
console.log(` Tổng các số lẻ là : ${sumOdd}`);

