let number = [2,5,7,4,1,8,6];

let seach = +prompt("Mời bạn nhập số cần tìm");

for(let i=0;i<number.length-1;i++){
    if(seach === number){
        console.log('Bingo');
        break;
    }else{
        console.log("Chúc bạn may mắn lần sau");
        break;
    }
}