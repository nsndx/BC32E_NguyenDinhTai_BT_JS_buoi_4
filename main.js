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
    + Đưa ra kết quả lời chào với từng thành viên.
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