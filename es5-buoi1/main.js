// Dùng cho việc debug
console.log('Hello World');

// alert('Hello');

/** 
    1. Biến và kiểu dữ liệu:
        - Kiểu nguyên thủy (primitive type): string, number, boolean, undefined, null, bigint, symbol.
        - null là kiểu object => bug
        - Còn lại là object
        - Phép gán ( = )
        - Dynamic type
        - Đặt tên biến theo kiểu camelCase (Kiểu lạc đà) và phải có ý nghĩa
        - Không bắt đầu bằng số và kì tự đặc biệt, ko được chứa kí tự đặn biệt
        - Không đặt tên biến có khoảng trắng
        - Không đặt tên biến với các keywork của JS: if, else, funtion, var,...
        - Hằng số (constant): 
            + Lưu trữ những giá trị ko bao giờ thay đổi
            + Không thể gán lại giá trị mới dc
            + Bắt buộc phải gán giá trị ngay lúc khởi tạo biến
            + Khai báo hằng số nên viết IN_HOA
        
*/

var fullName = 'Nguyen Cao Ngoc Ngan';  //string: màu xám
console.log(typeof fullName);
//typeof [tên_biến]: Kiểm tra kiểu dữ liệu

var age = 20;   //number: màu tím
console.log(typeof age);

var age = '20';   //string: màu xám
console.log(typeof age);

var isStudent = true;   //boolean
console.log(typeof isStudent);

var height; //undefined
console.log(typeof height);

var weight = null;  //object => bug
console.log(typeof weight);

// const PI; toang
const PI = 3.14;
// PI = 3.15; toang



/** 
    2. Câu lệnh điều kiện:
        - if
        - if else
        - Ternary operator (toán tử 3 ngôi)
        - else if
        - switch case: chỉ so sánh bằng
    
    3. Phép so sánh:
        - ==: chỉ so sánh giá trị
        - ===: so sánh gía trị và kiểu dữ liệu
        - >, <, >=, <=, !=, !==
        -  Biểu thức điều kiện:
            + AND [&&]: tất cả true là true, 1 thằng false thì cả biểu thức false
                .Nếu biểu thức trước && mà là true => chạy tiếp
                .Nếu biểu thức trước && mà false => dừng lại và trả lại giá trị ở vị trí đó
            + OR [||]: chỉ cần 1 thằng true thì cả biểu thức true tất cả false thì cả biểu thức mới false
            + NOT [!]: nghịch đảo giá trị ban đầu giá trị boolean hiện tại

        - Truthy và Falsy value: điều kiện dừng của && là false và điều kiện dừng của | | là true
            + false: 0, '', "", null, undefined, false, NaN (Not an Number)
            + true: còn lại


*/

//Phép so sánh
console.log(3 == 3);    //true
console.log(3 === '3'); //false
console.log(3 != 3);   //false
console.log(3 !== '3'); //true :so sanh thêm kiểu dữ liệu


var isGirl = false;
//isGirl == true
if (isGirl) {
    alert('Hey girl');
}


// if else
var isAdult = false;

if (isAdult) {
    console.log('You can accept this page!!!');
} else {
    console.log('FBI warning!!!');
}


//Ternary operator (toán tử 3 ngôi)
1 === 1 ? console.log('Điều kiện đúng') : console.log('Điều kiện sai');
var res = 1 === 2 ? true : false;
console.log(res);


// else if
var trafficLight = 'red';

if (trafficLight = 'green') {
    console.log('Go');
} else if (trafficLight = 'yellow') {
    console.log('go slow down');
} else {
    console.log('Stop');
}


// switch case

var number = 1;

switch (number) {
    case 1:
        console.log('Một');
        break;

    case 2:
        console.log('Hai');
        break;

    case 3:
        console.log('Ba');
        break;

    default:
        console.log('Không xác định');
        break;

}


//Biếu thức điều kiện (LOGICAL OPERATOR):
var A = true;
var B = false;

console.log(A && B);
console.log(A || B);
console.log(!(!A || B));


const a = 3;
const b = -2;
var result = a && b;
console.log(result); //-2


/*
    4. Hàm (Function): 3 loại: declaration fuc, expression fuc, arow func (es6). Dùng để tái sử dụng code
        - Hàm ko tham số ko có giá trị trả về
        - Hàm có tham số ko có giá trị trả về
        - Hàm có tham số và có giá trị trả về
        - Hoisting: là cơ chế đẩy 1 biến dc khai báo lên trên cùng scope chứa nó => có thể truy cập dc biến  
            + Đối với biến: hoisting chỉ xảy ra với từ khóa var
            + Đối với fuc: hoisting chỉ xảy ra với declaration fuc
*/

// declaration fuction
// Hàm ko tham số ko có giá trị trả về
function sayHello() {
    console.log('Hello there');
}

// Hàm có tham số ko có giá trị trả về
function sayHelloToSomeOne(name) {
    console.log('Hello ' + name);
}

// Hàm có tham số và có giá trị trả về
function calculateGPA(score1, score2, score3) {
    var gpa = (score1 + score2 + score3) / 3;
    return gpa;
}

// Gọi function
sayHello();

sayHelloToSomeOne('Ngan');

var gpa = calculateGPA(9, 7, 6);
console.log(gpa);


// _sayHello('Y'); undefine
console.log(_sayHello);

//expression fuction
var _sayHello = function(name) {
    console.log('Hello ' + name);
}

// Gọi function
_sayHello('Tiep');


//Hoisting
// var demoHoisting;
console.log(demoHoisting);
var demoHoisting = 'hoisting';

const hoistingConst = 'Hoisting';

console.log(window);


/*
**BT: XẾP ĐIỂM TRUNG BÌNH VÀ XẾP LOẠI SINH VIÊN
*/ 

var tinhDiemTB = function(dToan, dLy, dHoa){
    return (dToan + dLy + dHoa) / 3;
}

var xepLoai = function (){
    var dtb = tinhDiemTB(5, 8, 7);
    var xepLoai = '';

    if(dtb >= 9 && dtb <= 10){
        xepLoai = 'Xuất sắc';
    }else if(dtb >= 8 && dtb < 9){
        xepLoai = 'Giỏi';
    }else if(dtb >= 7 && dtb < 8){
        xepLoai = 'Khá';
    }else if(dtb >= 6 && dtb < 7){
        xepLoai = 'TB Khá';
    }else if(dtb >= 5 && dtb < 6){
        xepLoai = 'Trung bình';
    }else{
        xepLoai = 'Yếu';
    }

    console.log('Xếp Loại ' + xepLoai);
}

xepLoai();