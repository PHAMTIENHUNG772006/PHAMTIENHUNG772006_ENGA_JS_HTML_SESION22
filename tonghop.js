let choose = "";
let menu = [
    `
    1 - thêm
    2 - xoá 
    3 - sửa
    4 - in
    5 - tinh tông
    6 - xoá toàn bộ giỏ hàng
    0 - thoát
    `
]


let prices = [];
let sum =0;
do{
for (let element of menu) {
    console.log(`lựa chọn:`, element);
}
choose = +prompt("mời bạn nhập lựa chọn");

switch (choose) {
    case 1:
        let priceInput =  +prompt("Mời bạn nhập  giá: ");
        prices.push(priceInput);
        alert("thêm giá thành công");
    break;
    case 2:
        let indexEdit = +prompt("mời bạn nhập vị trí giá trị cần thay đổi");
        let valueEdit = +prompt("mời bạn nhập giá mới");
        
        if(indexEdit < prices.length){
            prices.splice(indexEdit,1,valueEdit);
        }else{
            alert("Vị trí không hợp lệ");
        }
    break;
    case 3:
        let indexDelete = prompt("mời bạn nhập vị tri muốn xoá:");
        
    break;
    case 4:
        console.log("Danh sách giá :", prices);
    break;
    case 5:
        for(let i=0 ;i<prices.length;i++){
             sum += prices[i];
        }
    break;
    case 6:
        prices.splice(0);
        alert("Giỏ hàng của bạn rỗng");
    break;
    case 0:
        
    break;

    default:
        break;
}

}while(choose !== 0);