/*
*Cách ép kiểu chuỗi --> số
- parseInt('number');   chuỗi sang số nguyên
- parseFloat('number'); chuỗi sang số thập phân
- Number('number);
*/ 
var getEle = function(id){
    return document.getElementById(id);
}


// var xepLoai = function(dtb){
//     var loai = '';
//     if(dtb >= 8 && dtb <= 10){
//         loai = 'Giỏi';
//     }else if(dtb >= 6.5 && dtb < 8){
//         loai = 'Khá';
//     }else if(dtb >= 5 && dtb < 6.5){
//         loai = 'Trung bình';
//     }else{
//         loai = 'Yếu';
//     }

//     return loai;
// }


var hienThiThongTin = function(){
    /*Lấy thông tin từ người dung nhập*/ 
    var maSinhVien = getEle('txtMaSV').value;
    var tenSinhVien = getEle('txtTenSV').value;
    var _hoanCanh = getEle('loaiSV').value;
    var _diemToan = getEle('txtDiemToan').value;
    var _diemVan = getEle('txtDiemVan').value;

    /*
    Khởi tạo đối tượng sinh viên
    */ 
   var sinhVien = {
       //có thể ghi shordhand nếu thuộc tính và tên ngoài giống nhau maSV,  ý nghĩa là =>maSV = maSV
       //thuộc tính
       maSV: maSinhVien,
       tenSV: tenSinhVien,
       hoanCanh: _hoanCanh,
       diemToan: _diemToan,
       diemVan: _diemVan,

       tinhDiemTB(){
           console.log(this);
        return (Number(this.diemToan) + Number(this.diemVan)) / 2;
       },

       xepLoai(dtb){
        var loai = '';
        if(dtb >= 8 && dtb <= 10){
            loai = 'Giỏi';
        }else if(dtb >= 6.5 && dtb < 8){
            loai = 'Khá';
        }else if(dtb >= 5 && dtb < 6.5){
            loai = 'Trung bình';
        }else{
            loai = 'Yếu';
        }
    
        return loai;
       }
   };

    /*Hiển thị thông tin sih viên*/ 
    var dtb = sinhVien.tinhDiemTB();
    getEle('spanTenSV').innerHTML = sinhVien.tenSV;
    getEle('spanMaSV').innerHTML = sinhVien.maSV;
    getEle('spanLoaiSV').innerHTML = sinhVien.hoanCanh;
    getEle('spanDTB').innerHTML = dtb;
    getEle('spanXepLoai').innerHTML = sinhVien.xepLoai(dtb);

}