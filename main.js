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

//B??i 1: S???p x???p 3 s??? nguy??n t??ng d???n
/* M?? h??nh 3 kh???i
 - ?????u v??o: 3 s??? nguy??n
 - X??? l??: 
    + T???o bi???n b1_soThu1 v?? g??n gi?? tr??? t??? ng?????i d??ng
    + T???o bi???n b1_soThu2 v?? g??n gi?? tr??? t??? ng?????i d??ng
    + T???o bi???n b1_soThu3 v?? g??n gi?? tr??? t??? ng?????i d??ng
    + T???o bi???n kqBai1
    + so s??nh c??c c???p s??? (b1_soThu1 ; b1_soThu2), (b1_soThu2 ; b1_soThu3), (b1_soThu3 ; b1_soThu1)
    + s???p x???p 3 s??? theo th??? t??? t??? nh??? ?????n l???n 
 - ?????u ra: 3 s??? theo th??? t??? t??ng d???n
 */
document.getElementById('btn_bai1').onclick = function () {
    var b1_soThu1 = Number(document.getElementById('b1_soThu1').value)
    var b1_soThu2 = Number(document.getElementById('b1_soThu2').value)
    var b1_soThu3 = Number(document.getElementById('b1_soThu3').value)
    var kqBai1 ='';
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

// B??i 2: Ch????ng tr??nh ch??o h???i
/*M?? h??nh 3 kh???i
- ?????u v??o: L???a ch???n 1 trong 4 th??nh vi??n c???a gia ????nh g???m (B???, M???, anh Trai, em G??i)
- X??? l??: 
    + T???o bi???n cacThanhVien v?? g??n gi?? tr??? t??? ng?????i d??ng l???a ch???n
    + T???o bi???n kqBai2
    + So s??nh gi?? tr??? c???a bi???n cacThanhVien v???i gi?? tr??? c???a t???ng th??nh vi??n trong gia ????nh 
    + ????a ra k???t qu??? l?? l???i ch??o v???i t???ng th??nh vi??n.
- ?????u ra: L???i ch??o th??nh vi??n ???????c ch???n 
 */
document.getElementById('btn_bai2').onclick = function () {
    var cacThanhVien = document.getElementById('cacThanhVien').value
    var kqBai2 ='';
    if (cacThanhVien == 'bo') {
        kqBai2 = 'Xin ch??o B???!'
    } else if (cacThanhVien == 'me') {
        kqBai2 = 'Xin ch??o M???!'
    } else if (cacThanhVien == 'anhTrai') {
        kqBai2 = 'Xin ch??o Anh Trai!'
    } else if (cacThanhVien == 'emGai') {
        kqBai2 = 'Xin ch??o Em G??i!'
    } else {
        kqBai2 = 'Xin ch??o Ng?????i l??? ??i!'
    }
    document.querySelector('.right .kqBai2').innerHTML = kqBai2
}

//B??i 3: ?????m s??? ch???n, s??? l???
/* M?? h??nh 3 kh???i
- ?????u v??o: 3 s??? nguy??n
- X??? l??:
    + T???o bi???n b3_soThu1 v?? g??n gi?? tr??? t??? ng?????i d??ng
    + T???o bi???n b3_soThu2 v?? g??n gi?? tr??? t??? ng?????i d??ng
    + T???o bi???n b3_soThu3 v?? g??n gi?? tr??? t??? ng?????i d??ng
    + T???o bi???n kqBai3 v?? g??n gi?? tr??? b???ng 0
    + ki???m tra l???n l?????t c??c gi?? tr??? t??? ng?????i d??ng, gi?? tr??? n??o %2 == 0 th?? t??ng gi?? tr??? bi???n kqBai3 l??n 1
    + s??? s??? l??? b???ng (3 - kqBai3)
- ?????u ra: s??? s??? ch???n kqBai3, s??? s??? l??? (3 - kqBai3)
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
    document.querySelector('.right .kqBai3').innerHTML = 'c?? ' + kqBai3 + ' s??? ch???n' + ', ' + (3 - kqBai3) + ' s??? l???'
}

// B??i 4: Nh???n bi???t tam gi??c
/*M?? h??nh 3 kh???i
 - ?????u v??o: chi???u d??i 3 c???nh c???a tam gi??c
 - X??? l??:
    + T???o bi???n canh1 v?? g??n gi?? tr??? t??? ng?????i d??ng
    + T???o bi???n canh2 v?? g??n gi?? tr??? t??? ng?????i d??ng
    + T???o bi???n canh3 v?? g??n gi?? tr??? t??? ng?????i d??ng
    + T???o bi???n kqBai4
    + So s??nh c??c c???nh v???i nhau n???u
        + C?? 3 c???nh b???ng nhau l?? Tam gi??c ?????u
        + C?? 2 c???nh b???ng nhau l?? Tam gi??c c??n
        + C?? 1 c???nh b??nh ph????ng b???ng t???ng c???a b??nh ph????ng m???i c???nh c??n l???i l?? Tam gi??c vu??ng
        + C?? 3 c???nh kh??ng thu???c c??c tr?????ng h???p tr??n l?? Tam gi??c n??o ????
- ?????u ra: ????a ra t??n tam gi??c
 */
document.getElementById('btn_bai4').onclick = function () {
    var canh1 = Number(document.getElementById('canh1').value)
    var canh2 = Number(document.getElementById('canh2').value)
    var canh3 = Number(document.getElementById('canh3').value)
    var canh1Bp = canh1 * canh1
    var canh2Bp = canh2 * canh2
    var canh3Bp = canh3 * canh3
    var kqBai4 ='';
    if (canh1 == canh2 && canh1 == canh3 && canh2 == canh3) {
        kqBai4 = 'Tam gi??c ?????u'
    } else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
        kqBai4 = 'Tam gi??c c??n'
    } else if (canh1Bp == canh2Bp + canh3Bp || canh2Bp == canh1Bp + canh3Bp || canh3Bp == canh1Bp + canh2Bp) {
        kqBai4 = 'Tam gi??c vu??ng'
    } else {
        kqBai4 = 'Tam gi??c n??o ????'
    }
    document.querySelector('.right .kqBai4').innerHTML = kqBai4
}

// B??i 5: T??m ng??y th??ng
document.getElementById('btn_bai51').onclick = function () {
    // input: number
    var ngay = Number(document.getElementById('ngay').value)
    var thang = Number(document.getElementById('thang').value)
    var nam = Number(document.getElementById('nam').value)
    // output: string
    var kqBai5 = '';
    // x??? l?? ng??y h??m qua
    if (thang < 1 || thang > 12 || nam < 1) {
        kqBai5 = 'Kh??ng t???n t???i ng??y'
    } else if ((thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10) && (ngay < 1 || ngay > 31)) {
        kqBai5 = 'Kh??ng t???n t???i ng??y'
    } else if ((thang == 4 || thang == 6 || thang == 9 || thang == 11) && (ngay < 1 || ngay > 30)) {
        kqBai5 = 'Kh??ng t???n t???i ng??y'
    } else if (thang == 2 && nam % 4 == 0 && (ngay < 1 || ngay > 29)) {
        kqBai5 = 'Kh??ng t???n t???i ng??y'
    } else if (thang == 2 && nam % 4 != 0 && (ngay < 1 || ngay > 28)) {
        kqBai5 = 'Kh??ng t???n t???i ng??y'
    } else if (ngay == 1 && thang == 1 && nam == 1) {
        kqBai5 = 'L???ch b???t ?????u t??? 1/1/1'
    } else if (ngay == 1 && thang == 1) {
        kqBai5 = 'ng??y 31 th??ng 12 n??m  ' + (nam - 1)
    } else if (ngay == 1 && (thang == 5 || thang == 7 || thang == 10 || thang == 12)) {
        kqBai5 = 'ng??y 30 th??ng ' + (thang - 1) + ' n??m ' + nam
    } else if (ngay == 1 && thang == 3 && nam % 4 == 0) {
        kqBai5 = 'ng??y 29 th??ng 2 ' + ' n??m ' + nam
    } else if (ngay == 1 && thang == 3) {
        kqBai5 = 'ng??y 28 th??ng 2 ' + ' n??m ' + nam
    } else if (ngay == 1 && (thang == 2 || thang == 4 || thang == 6 || thang == 8 || thang == 9 || thang || 11)) {
        kqBai5 = 'ng??y 31 th??ng ' + (thang - 1) + ' n??m ' + nam
    } else {
        kqBai5 = 'ng??y ' + (ngay - 1) + ' th??ng ' + thang + ' n??m ' + nam
    }
    // in output ra giao di???n
    document.querySelector('.right .kqBai5').innerHTML = kqBai5
}
document.getElementById('btn_bai52').onclick = function () {
    // input: number
    var ngay = Number(document.getElementById('ngay').value)
    var thang = Number(document.getElementById('thang').value)
    var nam = Number(document.getElementById('nam').value)
    // output: string
    var kqBai5 = '';
    // x??? l?? ng??y mai
    if (thang < 1 || thang > 12 || nam < 1) {
        kqBai5 = 'Kh??ng t???n t???i ng??y'
    } else if ((thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10) && (ngay < 1 || ngay > 31)) {
        kqBai5 = 'Kh??ng t???n t???i ng??y'
    } else if ((thang == 4 || thang == 6 || thang == 9 || thang == 11) && (ngay < 1 || ngay > 30)) {
        kqBai5 = 'Kh??ng t???n t???i ng??y'
    } else if (thang == 2 && nam % 4 == 0 && (ngay < 1 || ngay > 29)) {
        kqBai5 = 'Kh??ng t???n t???i ng??y'
    } else if (thang == 2 && nam % 4 != 0 && (ngay < 1 || ngay > 28)) {
        kqBai5 = 'Kh??ng t???n t???i ng??y'
    } else if (ngay == 31 && thang == 12) {
        kqBai5 = 'ng??y 1 th??ng 1 n??m  ' + (nam + 1)
    } else if (ngay == 30 && (thang == 4 || thang == 6 || thang == 9 || thang == 11)) {
        kqBai5 = 'ng??y 1 th??ng ' + (thang + 1) + ' n??m ' + nam
    } else if (ngay == 29 && thang == 2 && nam % 4 == 0) {
        kqBai5 = 'ng??y 1 th??ng 3 ' + ' n??m ' + nam
    } else if (ngay == 28 && thang == 2 && nam % 4 != 0) {
        kqBai5 = 'ng??y 1 th??ng 3 ' + ' n??m ' + nam
    } else if (ngay == 31 && (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10)) {
        kqBai5 = 'ng??y 1 th??ng ' + (thang + 1) + ' n??m ' + nam
    } else {
        kqBai5 = 'ng??y ' + (ngay + 1) + ' th??ng ' + thang + ' n??m ' + nam
    }
    // in output ra giao di???n
    document.querySelector('.right .kqBai5').innerHTML = kqBai5
}

// B??i 6: ?????m s??? ng??y trong th??ng
document.getElementById('btn_bai6').onclick = function () {
    // input: number
    var thang = Number(document.getElementById('b6_thang').value)
    var nam = Number(document.getElementById('b6_nam').value)
    // output: string
    var kqBai6 = '';
    // x??? l??
    if (thang < 1 || thang > 12 || nam < 1) {
        kqBai6 = 'Kh??ng t???n t???i'
    } else if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
        kqBai6 = 'Th??ng ' + thang + ' n??m ' + nam + ' c?? 31 ng??y'
    } else if (thang == 2 && nam % 4 == 0) {
        kqBai6 = 'Th??ng 2' + ' n??m ' + nam + ' c?? 29 ng??y'
    } else if (thang == 2 && nam % 4 != 0) {
        kqBai6 = 'Th??ng 2' + ' n??m ' + nam + ' c?? 28 ng??y'
    } else {
        kqBai6 = 'Th??ng ' + thang + ' n??m ' + nam + ' c?? 30 ng??y'
    }
    // in output ra giao di???n
    document.querySelector('.right .kqBai6').innerHTML = kqBai6
}

//B??i 7: ?????c s??? nh??? h??n 4 ch??? s???
document.getElementById('btn_bai7').onclick = function () {
    // input: number
    var so3CS = Number(document.getElementById('so3CS').value)
    var hangTram = Math.floor(so3CS / 100)
    var hangChuc = Math.floor((so3CS % 100) / 10)
    var hangDv = so3CS % 10
    // output: string
    var kqBai71 = '';
    var kqBai72 = '';
    var kqBai73 = '';
    // x??? l??
    switch (hangTram) {
        case 0: kqBai71 = ''
            break;
        case 1: kqBai71 = 'M???t tr??m '
            break;
        case 2: kqBai71 = 'Hai tr??m '
            break;
        case 3: kqBai71 = 'Ba tr??m '
            break;
        case 4: kqBai71 = 'B???n tr??m '
            break;
        case 5: kqBai71 = 'N??m tr??m '
            break;
        case 6: kqBai71 = 'S??u tr??m '
            break;
        case 7: kqBai71 = 'B???y tr??m '
            break;
        case 8: kqBai71 = 'T??m tr??m '
            break;
        case 9: kqBai71 = 'Ch??n tr??m '
            break;
    }
    switch (hangChuc) {
        case 0: kqBai72 = ''
            break;
        case 1: kqBai72 = 'm?????i '
            break;
        case 2: kqBai72 = 'hai m????i '
            break;
        case 3: kqBai72 = 'ba m????i '
            break;
        case 4: kqBai72 = 'b???n m????i '
            break;
        case 5: kqBai72 = 'n??m m????i '
            break;
        case 6: kqBai72 = 's??u m????i '
            break;
        case 7: kqBai72 = 'b???y m????i '
            break;
        case 8: kqBai72 = 't??m m????i '
            break;
        case 9: kqBai72 = 'ch??n m????i '
            break;
    }
    switch (hangDv) {
        case 0: kqBai73 = ''
            break;
        case 1: kqBai73 = 'm???t'
            break;
        case 2: kqBai73 = 'hai'
            break;
        case 3: kqBai73 = 'ba'
            break;
        case 4: kqBai73 = 'b???n'
            break;
        case 5: kqBai73 = 'n??m'
            break;
        case 6: kqBai73 = 's??u'
            break;
        case 7: kqBai73 = 'b???y'
            break;
        case 8: kqBai73 = 't??m'
            break;
        case 9: kqBai73 = 'ch??n '
            break;
    }
    if (hangTram == 0 && hangChuc == 0 && hangDv == 0) {
        kqBai71 = 'Kh??ng'
    }
    if (hangTram != 0 && hangChuc == 0 && hangDv != 0) {
        kqBai72 = 'linh '
    }
    if (hangChuc != 0 && hangDv == 5) {
        kqBai73 = 'l??m'
    }
    if (hangTram != 0 && hangChuc == 0 && hangDv == 4) {
        kqBai73 = 't??'
    }
    if (hangChuc > 1 && hangDv == 4) {
        kqBai73 = 't??'
    }
    if (hangChuc > 1 && hangDv == 1) {
        kqBai73 = 'm???t'
    }
    // in output ra giao di???n
    document.querySelector('.right .kqBai7').innerHTML = kqBai71 + kqBai72 + kqBai73
}

// Bai 8: In t??n sinh vi??n xa tr?????ng nh???t
document.getElementById('btn_bai8').onclick = function () {
    // input: string, number
    var sv1 = document.getElementById('sv1').value
    var sv1X = Number(document.getElementById('sv1X').value)
    var sv1Y = Number(document.getElementById('sv1Y').value)
    var sv2 = document.getElementById('sv2').value
    var sv2X = Number(document.getElementById('sv2X').value)
    var sv2Y = Number(document.getElementById('sv2Y').value)
    var sv3 = document.getElementById('sv3').value
    var sv3X = Number(document.getElementById('sv3X').value)
    var sv3Y = Number(document.getElementById('sv3Y').value)
    var X = Number(document.getElementById('X').value)
    var Y = Number(document.getElementById('Y').value)
    var sv1_TH = Math.pow((X - sv1X), 2) + Math.pow((Y - sv1Y), 2)
    var sv2_TH = Math.pow((X - sv2X), 2) + Math.pow((Y - sv2Y), 2)
    var sv3_TH = Math.pow((X - sv3X), 2) + Math.pow((Y - sv3Y), 2)
    // output: sring
    var kqBai8 ='';
    // x??? l??
    if (sv1_TH > sv2_TH) {
        if (sv2_TH > sv3_TH) {
            kqBai8 = sv1
        } else if (sv3_TH > sv1_TH) {
            kqBai8 = sv3
        } else {
            kqBai8 = sv1
        }
    } else {
        if (sv2_TH < sv3_TH) {
            kqBai8 = sv3
        } else if (sv3_TH < sv1_TH) {
            kqBai8 = sv2
        } else {
            kqBai8 = sv2
        }
    }
    // in output ra giao di???n
    document.querySelector('.right .kqBai8').innerHTML = 'Sinh vi??n xa tr?????ng nh???t: ' + kqBai8
}