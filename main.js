var x = document.querySelectorAll('.left button')
var y = document.querySelectorAll('.left .fa-book')
var z = document.querySelectorAll('.left .fa-book-open')
var t = document.querySelectorAll('.right .bai')

x[0].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[0].style.display = 'none'
        z[i].style.display = 'none'
        z[0].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[0].style.display = 'block'
    }
}
x[1].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[1].style.display = 'none'
        z[i].style.display = 'none'
        z[1].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[1].style.display = 'block'
    }
}
x[2].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[2].style.display = 'none'
        z[i].style.display = 'none'
        z[2].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[2].style.display = 'block'
    }
}
x[3].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[3].style.display = 'none'
        z[i].style.display = 'none'
        z[3].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[3].style.display = 'block'
    }
}
x[4].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[4].style.display = 'none'
        z[i].style.display = 'none'
        z[4].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[4].style.display = 'block'
    }
}
x[5].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[5].style.display = 'none'
        z[i].style.display = 'none'
        z[5].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[5].style.display = 'block'
    }
}
x[6].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[6].style.display = 'none'
        z[i].style.display = 'none'
        z[6].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[6].style.display = 'block'
    }
}
x[7].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[7].style.display = 'none'
        z[i].style.display = 'none'
        z[7].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[7].style.display = 'block'
    }
}
//Bài 1: Sắp xếp 3 số nguyên tăng dần
/* Mô hình 3 khối
 - Đầu vào: 3 số nguyên
 - Xử lý: 
    + Tạo biến b1_soThu1 và gán giá trị từ người dùng
    + Tạo biến b1_soThu2 và gán giá trị từ người dùng
    + Tạo biến b1_soThu3 và gán giá trị từ người dùng
    + Tạo biến kqBai1
    + so sánh các cặp số (b1_soThu1 ; b1_soThu2), (b1_soThu2 ; b1_soThu3), (b1_soThu3 ; b1_soThu1)
    + sắp xếp 3 số theo thứ tự từ nhỏ đến lớn 
 - Đầu ra: 3 số theo thứ tự tăng dần
 */
document.getElementById('btn_bai1').onclick = function () {
    var b1_soThu1 = Number(document.getElementById('b1_soThu1').value)
    var b1_soThu2 = Number(document.getElementById('b1_soThu2').value)
    var b1_soThu3 = Number(document.getElementById('b1_soThu3').value)
    var kqBai1;
    if (b1_soThu1 > b1_soThu2) {
        if (b1_soThu2 > b1_soThu3) {
            kqBai1 = b1_soThu3 + ' < ' + b1_soThu2 + ' < ' + b1_soThu1
        } else if (b1_soThu3 > b1_soThu1) {
            kqBai1 = b1_soThu2 + ' < ' + b1_soThu1 + ' < ' + b1_soThu3
        } else {
            kqBai1 = b1_soThu2 + ' < ' + b1_soThu3 + ' < ' + b1_soThu1
        }
    } else {
        if (b1_soThu2 < b1_soThu3) {
            kqBai1 = b1_soThu1 + ' < ' + b1_soThu2 + ' < ' + b1_soThu3
        } else if (b1_soThu3 < b1_soThu1) {
            kqBai1 = b1_soThu3 + ' < ' + b1_soThu1 + ' < ' + b1_soThu2
        } else {
            kqBai1 = b1_soThu1 + ' < ' + b1_soThu3 + ' < ' + b1_soThu2
        }
    }
    document.querySelector('.right .kqBai1').innerHTML = kqBai1
}
// Bài 2: Chương trình chào hỏi
/*Mô hình 3 khối
- Đầu vào: Lựa chọn 1 trong 4 thành viên của gia đình gồm (Bố, Mẹ, anh Trai, em Gái)
- Xử lý: 
    + Tạo biến cacThanhVien và gán giá trị từ người dùng lựa chọn
    + Tạo biến kqBai2
    + So sánh giá trị của biến cacThanhVien với giá trị của từng thành viên trong gia đình 
    + Đưa ra kết quả là lời chào với từng thành viên.
- Đầu ra: Lời chào thành viên được chọn 
 */
document.getElementById('btn_bai2').onclick = function () {
    var cacThanhVien = document.getElementById('cacThanhVien').value
    var kqBai2;
    if (cacThanhVien == 'bo') {
        kqBai2 = 'Xin chào Bố!'
    } else if (cacThanhVien == 'me') {
        kqBai2 = 'Xin chào Mẹ!'
    } else if (cacThanhVien == 'anhTrai') {
        kqBai2 = 'Xin chào Anh Trai!'
    } else if (cacThanhVien == 'emGai') {
        kqBai2 = 'Xin chào Em Gái!'
    } else {
        kqBai2 = 'Xin chào Người lạ ơi!'
    }
    document.querySelector('.right .kqBai2').innerHTML = kqBai2
}
//Bài 3: Đếm số chẵn, số lẻ
/* Mô hình 3 khối
- Đầu vào: 3 số nguyên
- Xử lý:
    + Tạo biến b3_soThu1 và gán giá trị từ người dùng
    + Tạo biến b3_soThu2 và gán giá trị từ người dùng
    + Tạo biến b3_soThu3 và gán giá trị từ người dùng
    + Tạo biến kqBai3 và gán giá trị bằng 0
    + kiểm tra lần lượt các giá trị từ người dùng, giá trị nào %2 == 0 thì tăng giá trị biến kqBai3 lên 1
    + số số lẻ bằng (3 - kqBai3)
- Đầu ra: số số chẵn kqBai3, số số lẻ (3 - kqBai3)
*/
document.getElementById('btn_bai3').onclick = function () {
    var b3_soThu1 = Number(document.getElementById('b3_soThu1').value)
    var b3_soThu2 = Number(document.getElementById('b3_soThu2').value)
    var b3_soThu3 = Number(document.getElementById('b3_soThu3').value)
    var kqBai3 = 0;
    if (b3_soThu1 % 2 == 0) {
        kqBai3++
    }
    if (b3_soThu2 % 2 == 0) {
        kqBai3++
    }
    if (b3_soThu3 % 2 == 0) {
        kqBai3++
    }
    document.querySelector('.right .kqBai3').innerHTML = 'có ' + kqBai3 + ' số chẵn' + ', ' + (3 - kqBai3) + ' số lẻ'
}
// Bài 4: Nhận biết tam giác
/*Mô hình 3 khối
 - Đầu vào: chiều dài 3 cạnh của tam giác
 - Xử lý:
    + Tạo biến canh1 và gán giá trị từ người dùng
    + Tạo biến canh2 và gán giá trị từ người dùng
    + Tạo biến canh3 và gán giá trị từ người dùng
    + Tạo biến kqBai4
    + So sánh các cạnh với nhau nếu
        + Có 3 cạnh bằng nhau là Tam giác đều
        + Có 2 cạnh bằng nhau là Tam giác cân
        + Có 1 cạnh bình phương bằng tổng của bình phương mỗi cạnh còn lại là Tam giác vuông
        + Có 3 cạnh không thuộc các trường hợp trên là Tam giác nào đó
- Đầu ra: đưa ra tên tam giác
 */
document.getElementById('btn_bai4').onclick = function () {
    var canh1 = Number(document.getElementById('canh1').value)
    var canh2 = Number(document.getElementById('canh2').value)
    var canh3 = Number(document.getElementById('canh3').value)
    var canh1Bp = canh1 * canh1
    var canh2Bp = canh2 * canh2
    var canh3Bp = canh3 * canh3
    var kqBai4;
    if (canh1 == canh2 && canh1 == canh3 && canh2 == canh3) {
        kqBai4 = 'Tam giác đều'
    } else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
        kqBai4 = 'Tam giác cân'
    } else if (canh1Bp == canh2Bp + canh3Bp || canh2Bp == canh1Bp + canh3Bp || canh3Bp == canh1Bp + canh2Bp) {
        kqBai4 = 'Tam giác vuông'
    } else {
        kqBai4 = 'Tam giác nào đó'
    }
    document.querySelector('.right .kqBai4').innerHTML = kqBai4
}
// Bài 5: Tìm ngày tháng
document.getElementById('btn_bai51').onclick = function () {
    var ngay = Number(document.getElementById('ngay').value)
    var thang = Number(document.getElementById('thang').value)
    var nam = Number(document.getElementById('nam').value)
    var kqBai5;
    if (thang < 1 || thang > 12 || nam < 1) {
        kqBai5 = 'Không tồn tại ngày'
    } else if ((thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10) && (ngay < 1 || ngay > 31)) {
        kqBai5 = 'Không tồn tại ngày'
    } else if ((thang == 4 || thang == 6 || thang == 9 || thang == 11) && (ngay < 1 || ngay > 30)) {
        kqBai5 = 'Không tồn tại ngày'
    } else if (thang == 2 && nam % 4 == 0 && (ngay < 1 || ngay > 29)) {
        kqBai5 = 'Không tồn tại ngày'
    } else if (thang == 2 && nam % 4 != 0 && (ngay < 1 || ngay > 28)) {
        kqBai5 = 'Không tồn tại ngày'
    } else if (ngay == 1 && thang == 1 && nam == 1) {
        kqBai5 = 'Lịch bắt đầu từ 1/1/1'
    } else if (ngay == 1 && thang == 1) {
        kqBai5 = 'ngày 31 tháng 12 năm  ' + (nam - 1)
    } else if (ngay == 1 && (thang == 5 || thang == 7 || thang == 10 || thang == 12)) {
        kqBai5 = 'ngày 30 tháng ' + (thang - 1) + ' năm ' + nam
    } else if (ngay == 1 && thang == 3 && nam % 4 == 0) {
        kqBai5 = 'ngày 29 tháng 2 ' + ' năm ' + nam
    } else if (ngay == 1 && thang == 3) {
        kqBai5 = 'ngày 28 tháng 2 ' + ' năm ' + nam
    } else if (ngay == 1 && (thang == 2 || thang == 4 || thang == 6 || thang == 8 || thang == 9 || thang || 11)) {
        kqBai5 = 'ngày 31 tháng ' + (thang - 1) + ' năm ' + nam
    } else {
        kqBai5 = 'ngày ' + (ngay - 1) + ' tháng ' + thang + ' năm ' + nam
    }
    document.querySelector('.right .kqBai5').innerHTML = kqBai5
}
document.getElementById('btn_bai52').onclick = function () {
    var ngay = Number(document.getElementById('ngay').value)
    var thang = Number(document.getElementById('thang').value)
    var nam = Number(document.getElementById('nam').value)
    var kqBai5;
    if (thang < 1 || thang > 12 || nam < 1) {
        kqBai5 = 'Không tồn tại ngày'
    } else if ((thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10) && (ngay < 1 || ngay > 31)) {
        kqBai5 = 'Không tồn tại ngày'
    } else if ((thang == 4 || thang == 6 || thang == 9 || thang == 11) && (ngay < 1 || ngay > 30)) {
        kqBai5 = 'Không tồn tại ngày'
    } else if (thang == 2 && nam % 4 == 0 && (ngay < 1 || ngay > 29)) {
        kqBai5 = 'Không tồn tại ngày'
    } else if (thang == 2 && nam % 4 != 0 && (ngay < 1 || ngay > 28)) {
        kqBai5 = 'Không tồn tại ngày'
    } else if (ngay == 31 && thang == 12) {
        kqBai5 = 'ngày 1 tháng 1 năm  ' + (nam + 1)
    } else if (ngay == 30 && (thang == 4 || thang == 6 || thang == 9 || thang == 11)) {
        kqBai5 = 'ngày 1 tháng ' + (thang + 1) + ' năm ' + nam
    } else if (ngay == 29 && thang == 2 && nam % 4 == 0) {
        kqBai5 = 'ngày 1 tháng 3 ' + ' năm ' + nam
    } else if (ngay == 28 && thang == 2 && nam % 4 != 0) {
        kqBai5 = 'ngày 1 tháng 3 ' + ' năm ' + nam
    } else if (ngay == 31 && (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10)) {
        kqBai5 = 'ngày 1 tháng ' + (thang + 1) + ' năm ' + nam
    } else {
        kqBai5 = 'ngày ' + (ngay + 1) + ' tháng ' + thang + ' năm ' + nam
    }
    document.querySelector('.right .kqBai5').innerHTML = kqBai5
}

// Bài 6: Đếm số ngày trong tháng
document.getElementById('btn_bai6').onclick = function () {
    var thang = Number(document.getElementById('b6_thang').value)
    var nam = Number(document.getElementById('b6_nam').value)
    var kqBai6;
    if (thang < 1 || thang > 12 || nam < 1) {
        kqBai6 = 'Không tồn tại'
    } else if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
        kqBai6 = 'Tháng ' + thang + ' năm ' + nam + ' có 31 ngày'
    } else if (thang == 2 && nam % 4 == 0) {
        kqBai6 = 'Tháng 2' + ' năm ' + nam + ' có 29 ngày'
    } else if (thang == 2 && nam % 4 != 0) {
        kqBai6 = 'Tháng 2' + ' năm ' + nam + ' có 28 ngày'
    } else {
        kqBai6 = 'Tháng ' + thang + ' năm ' + nam + ' có 30 ngày'
    }
    document.querySelector('.right .kqBai6').innerHTML = kqBai6
}