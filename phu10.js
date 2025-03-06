let choose = "";
let menu = [
    `
    1 - thêm
    2 - xoá 
    3 - sửa
    4 - in
    5 - tinh tông
    6 - thoát
    `
]


let arr = [];
let sum =0;
do{
for (let element of menu) {
    console.log(`lựa chọn:`, element);
}
choose = +prompt("mời bạn nhập lựa chọn");

switch (choose) {
    case 1:
        let arrInput =  +prompt("Mời bạn nhập phân tử: ");
        arr.push(arrInput);
        alert("thêm phần tử thành công");
    break;
    case 2:
        console.log(arr);
    break;
    case 3:
       let addArr = +prompt("Mời bạn nhập phần tử muốn thêm");
       arr.push(addArr);
       alert("thêm phần tử thành công");
    break;
    case 4:
        let indexEdit = +prompt("mời bạn nhập vị trí giá trị cần thay đổi");
        let valueEdit = +prompt("mời bạn nhập giá mới");
        
        if(indexEdit < arr.length){
            arr.splice(indexEdit,1,valueEdit);
        }else{
            alert("Vị trí không hợp lệ");
        }
    break;
    case 5:
        let indexDelete = prompt("mời bạn nhập vị tri muốn xoá:");
        let valueDelete = prompt("Mời nhập số lượng phần tử xoá :");
        if(indexDelete < arr.length){
            arr.splice(indexDelete,valueDelete);
        }else{
            alert("Vị trí không hợp lệ");
        }
    break;
    case 6:
       alert("Đã thoát chương trình");
    break;
    default:
        break;
}

}while(choose !== 6);