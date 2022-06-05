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
        } else {
            if (b1_soThu3 > b1_soThu1) {
                kqBai1 = b1_soThu2 + ' < ' + b1_soThu1 + ' < ' + b1_soThu3
            } else {
                kqBai1 = b1_soThu2 + ' < ' + b1_soThu3 + ' < ' + b1_soThu1
            }
        }
    } else {
        if (b1_soThu2 < b1_soThu3) {
            kqBai1 = b1_soThu1 + ' < ' + b1_soThu2 + ' < ' + b1_soThu3
        } else {
            if (b1_soThu3 < b1_soThu1) {
                kqBai1 = b1_soThu3 + ' < ' + b1_soThu1 + ' < ' + b1_soThu2
            } else {
                kqBai1 = b1_soThu1 + ' < ' + b1_soThu3 + ' < ' + b1_soThu2
            }
        }
    }
    document.querySelector('.right .kqBai1').innerHTML = kqBai1
}
