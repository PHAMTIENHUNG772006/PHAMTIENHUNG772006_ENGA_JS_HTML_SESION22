let input = prompt("mời nhập dữ liệu ");
if(isNaN(input)){
    alert("Dãy không hợp lệ ");

}else{
    let maxNumber = Math.max(...new input);
    alert("Giá trị lớn nhất trong dãy là", maxNumber);
}