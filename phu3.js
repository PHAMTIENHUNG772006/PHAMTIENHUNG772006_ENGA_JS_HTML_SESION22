let arr = prompt("Mời bạn nhập chuỗi  ");

if(isNaN(arr)){
    log("Dãy không hợp lệ");
}else{
    arr.toString();
    let arrReverse = arr.split("").reverse().join("");
    log(arrReverse);
}

