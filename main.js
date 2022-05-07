
//============== BÀI TẬP JS BUỔI 7-8 ========//

//Khai báo mảng
var numberArray = [];
var arrayFloat = [];

//Thêm số nguyên vào trong mảng

document.querySelector("#btnThemArray").onclick = function () {
    var n = Number(document.querySelector("#txtNhapSo").value);
    numberArray.push(n);
    document.querySelector("#reSultThemSo").innerHTML = "Mảng: [  " + numberArray + "  ]";
}


//Tổng các số dương trong mảng

document.querySelector("#btnTongArray").onclick = function () {
    var tongArray = 0;
    for (i = 0; i < numberArray.length; i++) {
        numberArray[i] > 0 && (tongArray += numberArray[i]);
    }
    document.querySelector("#ketQua").innerHTML = "Tổng số dương: " + tongArray;
}

//Đếm số dương trong mảng

document.querySelector("#btnDemArray").onclick = function () {
    var demArray = 0;
    for (i = 0; i < numberArray.length; i++) {
        numberArray[i] > 0 && demArray++;
    }
    document.querySelector("#ketQua").innerHTML = "Số dương: " + demArray;
}

//Tìm số nhỏ nhất trong mảng

document.querySelector("#btnMinArray").onclick = function () {
    var minArray = numberArray[0];
    for (i = 1; i < numberArray.length; i++) {
        minArray > numberArray[i] && (minArray = numberArray[i]);
    }
    document.querySelector("#ketQua").innerHTML = "Số nhỏ nhất: " + minArray;
}

// Tìm số dương nhỏ nhất trong mảng

document.querySelector("#btnminDuongArray").onclick = function () {

    var minSoDuong = [];
    for (i = 0; i < numberArray.length; i++)
        numberArray[i] > 0 && minSoDuong.push(numberArray[i]);
    if (minSoDuong.length > 0) {
        var min = minSoDuong[0];
        for (i = 1; i < minSoDuong.length; i++) {
            min > minSoDuong[i] && (min = minSoDuong[i]);
            document.querySelector("#ketQua").innerHTML = "Số dương nhỏ nhất: " + min;
        }
    } else {
        document.querySelector("#ketQua").innerHTML = "Không có số dương nào trong mảng";

    }
}

// Tìm số chẵn cuối cùng

document.querySelector("#btnTimSoChanArray").onclick = function () {
    var timSoChan = 0;
    for (i = 0; i < numberArray.length; i++)
        numberArray[i] % 2 == 0 && (timSoChan = numberArray[i]);
    document.querySelector("#ketQua").innerHTML = "Số chẵn cuối cùng: " + timSoChan;

}

// Đổi chổ trong mảng

// Hàm đổi chỗ

function doiCho(a, b) {
    var temp = numberArray[a];
    numberArray[a] = numberArray[b];
    numberArray[b] = temp
}


document.querySelector("#btnDoiChoArray").onclick = function () {
    var viTri_1 = Number(document.querySelector("#txtVitri_1").value);
    var viTri_2 = Number(document.querySelector("#txtVitri_2").value);
    doiCho(viTri_1, viTri_2);
    document.querySelector("#ketQua").innerHTML = "Mảng sau khi đổi chỗ: <br> [ " + numberArray + " ]";

}


// Sắp xếp mảng tăng dần

document.querySelector("#btnSapXepArray").onclick = function () {
    for (var i = 0; i < numberArray.length; i++)
        for (var j = 0; j < numberArray.length - 1; j++)
            numberArray[j] > numberArray[j + 1] && doiCho(j, j + 1)
    document.querySelector("#ketQua").innerHTML = "Mảng sau khi sắp xếp tăng dần: <br> [ " + numberArray + " ]";

}

// Tìm số nguyên tố đầu tiên trong mảng

function kiemTraSoNT(n) {
    if (n <= 1) {
        return false;
    }
    for (soNT = 2; soNT <= Math.sqrt(n); soNT++) {

        if (n % soNT == 0) {

            return false;
        }
    }
    return true;
}

document.querySelector("#btnTimSoNTArray").onclick = function () {
    var soNT = "";
    for (i = 0; i < numberArray.length; i++) {
        if (kiemTraSoNT(numberArray[i])) {
            soNT = numberArray[i];
            break;
        }
    }
    document.querySelector("#ketQua").innerHTML = "Số nguyên tố đầu tiên: " + soNT;

}


// Đếm số nguyên trong mảng

document.querySelector("#btnThemSoArray").onclick = function () {
    var n = Number(document.querySelector("#txtSonguyen").value);
    arrayFloat.push(n);
    document.querySelector("#ketQuaThemSo").innerHTML = "[ " + arrayFloat + " ]";

}

document.querySelector("#btnDemSoArray").onclick = function () {
    var demSoNguyen = 0;
    for (i = 0; i < arrayFloat.length; i++)
        Number.isInteger(arrayFloat[i]) && demSoNguyen++;
    document.querySelector("#ketQua").innerHTML = "Số nguyên: " + demSoNguyen;



}

//So sánh số lượng số âm và số dương

document.querySelector("#btnSoSanhArray").onclick = function () {

    var soDuong = 0;
    var soAm = 0;
    var ketQua = "";

    for (i = 0; i < numberArray.length; i++)
        if (numberArray[i] > 0) {
            soDuong++;

        } else if (numberArray[i] < 0) {
            soAm++;
        }

    if (soDuong > soAm) {
        ketQua = "Số dương > Số âm";

    } else if (soDuong < soAm) {
        ketQua = "Số dương < Số âm";

    } else {
        ketQua = "Số dương = Số âm";

    }
    document.querySelector("#ketQua").innerHTML = ketQua;

}