/*
**ARRAY (MẢNG):

*/ 
// var fullName = 'Ngan'; mỗi biến chit chứa dc 1 giá trị

// Khởi tạo mảng 
// Cách 1:
// index:           0      1    2
var listStudent = ['Tay', 'Y', 'Vy'];
// console.log(typeof listStudent); => object
console.log(listStudent);

// Cách 2:
var listEmployees = new Array('Tay', 'Y', 'Vy');

// Truy xuất phần tử trong mảng
console.log(listEmployees[2]);
// Cập nhật giá trị
listEmployees[0] = 'Đông';
console.log(listEmployees[0]);

// Thêm phần tử vào mảng
listEmployees.push('Ngoc');     //Thêm 1 phần tử vào cuối
listEmployees.unshift('Nam');   //Thêm 1 phần tử vào đầu mảng
console.log(listEmployees);

// Xóa phần tử khỏi mảng
listEmployees.pop();    //xóa 1 phần tử cuối mảng
console.log(listEmployees);
listEmployees.shift();  //Xóa 1 phần tử đầu mảng
console.log(listEmployees);

// Độ dài của mảng
console.log(listEmployees.length);

// Duyệt mảng (vòng lập for)
// debugger
for(var i = 0; i < listEmployees.length; i++){
    console.log(listEmployees[i]);
}


/*
**DOM:
    - DOM thông qua ID getElementById(trả về 1 element)
    - DOM thông qua TAGNAME getElementsByTagName(trả về 1 danh sách)
    - DOM thông qua CLASS
*/ 

//DOM thông qua ID
var tagHelloDOM =document.getElementById('helloDOM');
console.log(tagHelloDOM.innerHTML);

// Thay đổi nội dung của element
tagHelloDOM.innerHTML = 'Hello DOM nè';

// Thay đổi style của element
tagHelloDOM.style.backgroundColor = 'red';


// DOM thông qua TAGNAME (có thể truyền vào index để lấy chỗ cần)
var tagHeading = document.getElementsByTagName('h2');
console.log(tagHeading[1]);


//DOM thông qua CLASS
var classWelcome = document.getElementsByClassName('welcome');
// console.log(classWelcome);
classWelcome[2].style.color = 'blue';


// Xử lí sự kiện click
// C1

var handleClickChaoTheGioi = function(){
    alert('Chào thế giới');
}

//C2
// document.getElementById('btnChaoTheGioi').onclick = function
// (){
//     alert('Chào thế giới');
// }

//C3
// callBack function: là function mà làm tham số của 1 func khác
    //+ Là func mà làm tham số của func khác
    //+ ĐƯợc thực thi hay không là dựa vào 1 func khác

// document.getElementById('btnChaoTheGioi').addEventListener
// ('click', function(){
//     alert('Chào thế giới');
// }) Viết trực tiếp function

var cbfn = function(){
    alert('Hello');
}
document.getElementById('btnChaoTheGioi').addEventListener
('click', cbfn);
//Viết gián tiếp function


//Bài tập
var tagP = document.getElementById('content');

document.getElementById('btn').addEventListener
('click',function(){
    tagP.innerHTML = 'Đã thay đổi nội dung';
})
// =============================

document.getElementById('on').addEventListener
('click',function(){
    document.getElementById('imgDen').src = './img/pic_bulbon.gif'
})

document.getElementById('off').addEventListener
('click',function(){
    document.getElementById('imgDen').src = './img/pic_bulboff.gif'
})