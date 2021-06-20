/**
 * Object (Kiểu đối tượng)
 */

var person = {
    //key: value
    //đối tượng có 2 thuộc tính (properties) và phương thức (method)
    //Thuộc tính của đối tượng person
    name: 'Ngân',
    age: 18,
    class: 'FE68',

    //Phương thức của đối tượng person
    greeting: function(){
        console.log('Hello!');
    }
}

//Truy xuất thuộc tính, phương thức của đối tượng
//C1:
console.log(person.name);
console.log(person.class);
console.log(person.greeting());


//C2
var _age = 'age';
console.log(person['age']);
console.log(person[_age]);

//Thay đổi giá trị thuộc tính
person.name = 'Đông';
person['name'] = 'Nam';
console.log(person);

// Thêm thuộc tính mới vào object
person.height = 170;
console.log(person);

// Xóa thuộc tính trong object
delete person.age;
delete person['age']
console.log(person);

var employee = {
    id: '12345',
    fullName: 'Chu Hồ Tây',
    email: 'taych@gmail.com',

    //Phương thức
    tinhLuong: function(){},
    tingTongSoGioLam: function(){},

    //Phương thức (Shorthand)
    tinhTongSoNgayNghi(){
        console.log('short hand method');
    }
}