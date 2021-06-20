// Lớp đối tượng: constructor function
function SinhVien(_ma, _ten, _email, _matKhau, _ngaySinh, _khoaHoc, _dToan, _dLy, _dHoa){
    //thuộc tính
    this.ma = _ma;
    this.ten = _ten;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngaySinh = _ngaySinh;
    this.khoaHoc = _khoaHoc;
    this.diemToan = _dToan;
    this.diemLy =  _dLy;
    this.diemHoa =  _dHoa;

    //Phương thức
    this.tinhDTB = function(){
        return (parseFloat(diemToan) + parseFloat(diemLy) + parseFloat(diemHoa)) / 2;
    }
}

//Khởi tạo 1 đói tượng sinh viên từ lớp đối tượng sinh viên này
var sv1 = new SinhVien('123456', 'ngan', '@gmail.com', '5689', '6/7/2001', 'FE68', 8, 9, 10);
console.log(sv1);



/*
CÁCH THỨC HOẠT ĐỘNG CỦA TOÁN TỬ NEW:
    * 4 bước:
        - B1: Tạo ra 1 object rỗng (empty object => {} ) 
        - B2: Gọi fuction SinhVien và đồng thời gần object rỗng dc tạo ra ở bước 1 vào biến this (this = {})
        - B3: Trời object rỗng (B1) đến object prototype trong constructor func (SinhVien)
        - B4: Return về object rông dc tạo ra ở bước 1
*/ 

/*
*'This' keyword/ variable: totonf tại ở trong function, giá trị của biến this, chính là object 
mà function đó thuộc về, giá trị của this ko cố định và được xác định tại thời điểm mà function đó 
dc thực thi
    - Regular func: this = global object (window)
    - 'new'; operator (contructor func): this = empty object dc tạo ra từ contructor func
    - func là method của object: this = object chứa method đó
    - Event handler: this = element xảy ra event 
*/ 

/*var _sinVien = function(ma, ten, lop){
    var emptyObject = {};
    var _this = emptyObject;

    _this.ma = ma;
    _this.ten = ten;
    _this.lop = lop;
    console.log(emptyObject);
    return emptyObject;
}

_sinVien('123', 'ngan', 'fe68');*/
