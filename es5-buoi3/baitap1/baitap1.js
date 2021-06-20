/*
*Cách ép kiểu chuỗi --> số
- parseInt('number');   chuỗi sang số nguyên
- parseFloat('number'); chuỗi sang số thập phân
- Number('number);
*/ 
var getEle = function(id){
    return document.getElementById(id);
}

var tinhDiemTB = function(dToan, dVan){
    return (parseFloat(dToan) + parseFloat(dVan)) / 2;
}


var xepLoai = function(dtb){
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


var hienThiThongTin = function(){
    /*Lấy thông tin từ người dung nhập*/ 
    var maSinhVien = getEle('txtMaSV').value;
    var tenSinhVien = getEle('txtTenSV').value;
    var hoanCanh = getEle('loaiSV').value;
    var diemToan = getEle('txtDiemToan').value;
    var diemVan = getEle('txtDiemVan').value;

    /*Hiển thị thông tin sih viên*/ 
    var dtb = tinhDiemTB(diemToan, diemVan);
    getEle('spanTenSV').innerHTML = tenSinhVien;
    getEle('spanMaSV').innerHTML = maSinhVien;
    getEle('spanLoaiSV').innerHTML = hoanCanh;
    getEle('spanDTB').innerHTML = dtb;
    getEle('spanXepLoai').innerHTML = xepLoai(dtb);

}