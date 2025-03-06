let numbers = [1, 2, 3, 4, 5];

let string = ["phạm tiến hưng", "đặng thị hồng huệ"];

console.log(" Numbers :", numbers);
console.log(string);
console.log("tên sinh viên ở vị trí số 0:", string[0]);
console.log("tên sinh viên ở vị trí số 1:", string[1]);

let employee = ["nguyen van b ", "nguyen van A", "bui thi C"];

console.log("-------Duyệt mảng bằng for -------");
for (let i = 0; i < employee.length; i++) {
  console.log(`tên sinh viên ở vị trí số ${i}:`, employee[i]);
}


console.log("-------Duyệt mảng bằng for in-------");
for (let index in employee) {
  console.log(`index sinh viên ở vị trí số :`, employee[index]);
}


console.log("-------Duyệt mảng bằng for of-------");
for (let element of employee) {
  console.log(`sinh viên :`, element);
}
// thêm phần tử vào mảng
let cards = [12000,13000,14000];
console.log("Mảng cards trước khi thêm giá trị mới",cards);
cards.push(15000);
console.log("Mảng cards sau khi thêm giá trị mới",cards);

cards.unshift(11000);
console.log("Mảng cards sau khi thêm giá trị mới vào đầu ",cards);


// Xoá các phần tử trong mảng 


console.log("Mảng cards trước khi bị xoá",cards);


cards.pop();
console.log("Mảng cards sau bị xoá phần tử cuối cùng",cards);
cards.shift();
console.log("Mảng cards sau khi xoá phần tử đầu mảng",cards);

// hàm splice trong js

let menu = ["add","delete","remove"];

menu.splice(2,0,"seach","update","sort");
console.log("Mảng cards sau khi xoá bằng splice",menu);

//thay thế phần tử 

menu.splice(1,1,"reverse");
console.log("Menu sau khi cập nhật",menu);

//xoá phần tử
menu.splice(3);
console.log("Menu sau khi xoá",menu);