// BÀI TẬP 01----------------------------
// - Đầu vào:
//     + Ngày, tháng, năm
// - Xử lý:
//     + Khi nhấn nút Tomorrow thì tăng ngày lên 1. Nếu ở cuối tháng hoặc cuối năm thì phải sang tháng mới hoặc năm mới.
//     + Khi nhấn nút Yesterday thì trừ ngày lên 1. Nếu ở đầu tháng hoặc cuối năm thì phải trở lại về tháng cũ hoặc năm cũ.
// - Đầu ra:
//     + Đưa ra kết quả ngày tháng năm theo yêu cầu

// TOMORROW------------------------------------------------
document.getElementById("tomorrow").onclick = function () {
    var ex01_ngay = parseInt(document.getElementById("ex01_ngay").value);
    var ex01_thang = parseInt(document.getElementById("ex01_thang").value);
    var ex01_nam = parseInt(document.getElementById("ex01_nam").value);
    // THÁNG 2--------------------------------------
    if (ex01_thang == 2) {
        if (ex01_ngay <= 27) {
            document.getElementById("ex01_result").innerHTML = (ex01_ngay + 1) + "/" + ex01_thang + "/" + ex01_nam;
            document.getElementById("ex01_result").classList.add("output");
        }
        else {
            document.getElementById("ex01_result").innerHTML = 1 + "/" + 3 + "/" + ex01_nam;
            document.getElementById("ex01_result").classList.add("output");
        }
    }
    // THÁNG 30--------------------------------------
    else if (ex01_thang == 4 || ex01_thang == 6 || ex01_thang == 9 || ex01_thang == 11) {
        if (ex01_ngay <= 29) {
            document.getElementById("ex01_result").innerHTML = (ex01_ngay + 1) + "/" + ex01_thang + "/" + ex01_nam;
            document.getElementById("ex01_result").classList.add("output");
        }
        else {
            document.getElementById("ex01_result").innerHTML = 1 + "/" + (ex01_thang + 1) + "/" + ex01_nam;
            document.getElementById("ex01_result").classList.add("output");
        }
    }
    // THÁNG 31--------------------------------------
    else {
        if (ex01_ngay <= 30) {
            document.getElementById("ex01_result").innerHTML = (ex01_ngay + 1) + "/" + ex01_thang + "/" + ex01_nam;
            document.getElementById("ex01_result").classList.add("output");
        }
        else {
            if (ex01_thang != 12) {
                document.getElementById("ex01_result").innerHTML = 1 + "/" + (ex01_thang + 1) + "/" + ex01_nam;
                document.getElementById("ex01_result").classList.add("output");
            }
            else {
                document.getElementById("ex01_result").innerHTML = 1 + "/" + 1 + "/" + (ex01_nam + 1);
                document.getElementById("ex01_result").classList.add("output");
            }
        }
    }
}


// YESTERDAY------------------------------------------------
document.getElementById("yesterday").onclick = function () {
    var ex01_ngay = parseInt(document.getElementById("ex01_ngay").value);
    var ex01_thang = parseInt(document.getElementById("ex01_thang").value);
    var ex01_nam = parseInt(document.getElementById("ex01_nam").value);
    // THÁNG 30--------------------------------------
    if (ex01_thang == 4 || ex01_thang == 6 || ex01_thang == 9 || ex01_thang == 11 || ex01_thang == 2) {
        if (ex01_ngay >= 2) {
            document.getElementById("ex01_result").innerHTML = (ex01_ngay - 1) + "/" + ex01_thang + "/" + ex01_nam;
            document.getElementById("ex01_result").classList.add("output");
        }
        else {
            document.getElementById("ex01_result").innerHTML = 31 + "/" + (ex01_thang - 1) + "/" + ex01_nam;
            document.getElementById("ex01_result").classList.add("output");
        }
    }
    // THÁNG 31--------------------------------------
    else {
        if (ex01_ngay >= 2) {
            document.getElementById("ex01_result").innerHTML = (ex01_ngay - 1) + "/" + ex01_thang + "/" + ex01_nam;
            document.getElementById("ex01_result").classList.add("output");
        }
        else {
            if (ex01_thang == 8) {
                document.getElementById("ex01_result").innerHTML = 31 + "/" + (ex01_thang - 1) + "/" + ex01_nam;
                document.getElementById("ex01_result").classList.add("output");
            }
            else if (ex01_thang == 1) {
                document.getElementById("ex01_result").innerHTML = 31 + "/" + 12 + "/" + (ex01_nam - 1);
                document.getElementById("ex01_result").classList.add("output");
            }
            else if (ex01_thang == 3) {
                document.getElementById("ex01_result").innerHTML = 28 + "/" + 2 + "/" + ex01_nam;
                document.getElementById("ex01_result").classList.add("output");
            }
            else {
                document.getElementById("ex01_result").innerHTML = 30 + "/" + (ex01_thang - 1) + "/" + ex01_nam;
                document.getElementById("ex01_result").classList.add("output");
            }
        }
    }

}

// BÀI TẬP 02----------------------------
// - Đầu vào:
//     + Ngày, tháng, năm
// - Xử lý:
//     + Kiểm tra tháng đó có 30 hay 31 ngày
//     + Kiểm tra năm đó phải năm nhuận hay ko? Khi tháng nhập vào là tháng 2
// - Đầu ra:
//     + Số ngày trong tháng

document.getElementById("check").onclick = function () {
    var ex02_thang = parseInt(document.getElementById("ex02_thang").value);
    var ex02_nam = parseInt(document.getElementById("ex02_nam").value);

    if (ex02_thang == 2) {
        if (ex02_nam % 400 == 0 || (ex02_nam % 4 == 0 && ex02_nam % 100 != 0)) {
            document.getElementById("ex02_result").innerHTML = "Tháng " + ex02_thang + " của năm " + ex02_nam + " có 29 ngày";
            document.getElementById("ex02_result").classList.add("output");
        }
        else {
            document.getElementById("ex02_result").innerHTML = "Tháng " + ex02_thang + " của năm " + ex02_nam + " có 28 ngày";
            document.getElementById("ex02_result").classList.add("output");
        }
    }
    else if (ex02_thang == 4 || ex02_thang == 6 || ex02_thang == 9 || ex02_thang == 11) {
        document.getElementById("ex02_result").innerHTML = "Tháng " + ex02_thang + " của năm " + ex02_nam + " có 30 ngày";
        document.getElementById("ex02_result").classList.add("output");
    }
    else {
        document.getElementById("ex02_result").innerHTML = "Tháng " + ex02_thang + " của năm " + ex02_nam + " có 31 ngày";
        document.getElementById("ex02_result").classList.add("output");
    }
}


// BÀI TẬP 03----------------------------
// - Đầu vào:
//     + Số nguyên có 3 chữ số
// - Xử lý:
//     + Chia lấy phần nguyên với 100 để lấy chữ số hàng trăm
//     + Chia lấy phần nguyên với 10 để lấy chữ số hàng chục
//     + Chia lấy phần dư với 10 để lấy chữ số hàng đơn vị
// - Đầu ra:
//     + Cách đọc

document.getElementById("ex03_read").onclick = function () {
    var ex03_so = parseInt(document.getElementById("ex03_so").value);
    var ex03_tram = Math.floor(ex03_so / 100);
    var ex03_chuc = Math.floor((ex03_so - 100 * ex03_tram) / 10);
    var ex03_dv = (ex03_so - 100 * ex03_tram) % 10;
    var ex03_doc_tram, ex03_doc_chuc, ex03_doc_dv;

    console.log(ex03_tram)
    console.log(ex03_chuc)
    console.log(ex03_dv)

    // ĐỌC TRĂM--------------------------
    switch (ex03_tram) {
        case 1:
            ex03_doc_tram = "Một";
            break;
        case 2:
            ex03_doc_tram = "Hai";
            break;
        case 3:
            ex03_doc_tram = "Ba";
            break;
        case 4:
            ex03_doc_tram = "Bốn";
            break;
        case 5:
            ex03_doc_tram = "Năm";
            break;
        case 6:
            ex03_doc_tram = "Sáu";
            break;
        case 7:
            ex03_doc_tram = "Bảy";
            break;
        case 8:
            ex03_doc_tram = "Tám";
            break;
        case 9:
            ex03_doc_tram = "Chín";
            break;
    }
    // ĐỌC CHỤC----------------------------
    switch (ex03_chuc) {
        case 1:
            ex03_doc_chuc = "Một";
            break;
        case 2:
            ex03_doc_chuc = "Hai";
            break;
        case 3:
            ex03_doc_chuc = "Ba";
            break;
        case 4:
            ex03_doc_chuc = "Bốn";
            break;
        case 5:
            ex03_doc_chuc = "Năm";
            break;
        case 6:
            ex03_doc_chuc = "Sáu";
            break;
        case 7:
            ex03_doc_chuc = "Bảy";
            break;
        case 8:
            ex03_doc_chuc = "Tám";
            break;
        case 9:
            ex03_doc_chuc = "Chín";
            break;
    }
    // ĐỌC ĐƠN VỊ-----------------------------
    switch (ex03_dv) {
        case 1:
            ex03_doc_dv = "Một";
            break;
        case 2:
            ex03_doc_dv = "Hai";
            break;
        case 3:
            ex03_doc_dv = "Ba";
            break;
        case 4:
            ex03_doc_dv = "Bốn";
            break;
        case 5:
            ex03_doc_dv = "Năm";
            break;
        case 6:
            ex03_doc_dv = "Sáu";
            break;
        case 7:
            ex03_doc_dv = "Bảy";
            break;
        case 8:
            ex03_doc_dv = "Tám";
            break;
        case 9:
            ex03_doc_dv = "Chín";
            break;
    }
    if (ex03_tram == 0) {
        document.getElementById("ex03_result").innerHTML = "Bạn nhập sai"
        document.getElementById("ex03_result").classList.add("output");
    }
    else if (ex03_chuc == 0) {
        if (ex03_dv == 0) {
            document.getElementById("ex03_result").innerHTML = ex03_doc_tram + " trăm";
            document.getElementById("ex03_result").classList.add("output");       
        }
        else {
            document.getElementById("ex03_result").innerHTML = ex03_doc_tram + " trăm " + " lẻ " + ex03_doc_dv;
            document.getElementById("ex03_result").classList.add("output");
        }
    }
    else if (ex03_chuc == 1) {
        document.getElementById("ex03_result").innerHTML = ex03_doc_tram + " trăm " + " mười " + ex03_doc_dv;
        document.getElementById("ex03_result").classList.add("output");
    }
    else if (ex03_dv == 0) {
        document.getElementById("ex03_result").innerHTML = ex03_doc_tram + " trăm " + " mươi";
        document.getElementById("ex03_result").classList.add("output");
    }
    else {
        document.getElementById("ex03_result").innerHTML = ex03_doc_tram + " trăm " + ex03_doc_chuc + " mười " + ex03_doc_dv;
        document.getElementById("ex03_result").classList.add("output");
    }
}


// BÀI TẬP 04----------------------------
// - Đầu vào:
//     + Toạ độ của 3 bạn
//     + Toạ độ của trường
// - Xử lý:
//     + Tính chiều dài của đoạn thẳng theo công thức
//     + So sánh tìm khoảng cách xa nhất
// - Đầu ra:
//     + In ra tên bạn ở xa nhất
document.getElementById("ex04_check").onclick = function () {
    var ex04_ten1 = document.getElementById("ex04_ten1").value;
    var ex04_x1 = parseFloat(document.getElementById("ex04_x1").value);
    var ex04_y1 = parseFloat(document.getElementById("ex04_y1").value);

    var ex04_ten2 = document.getElementById("ex04_ten2").value;
    var ex04_x2 = parseFloat(document.getElementById("ex04_x2").value);
    var ex04_y2 = parseFloat(document.getElementById("ex04_y2").value);

    var ex04_ten3 = document.getElementById("ex04_ten3").value;
    var ex04_x3 = parseFloat(document.getElementById("ex04_x3").value);
    var ex04_y3 = parseFloat(document.getElementById("ex04_y3").value);

    var ex04_x4 = parseFloat(document.getElementById("ex04_x4").value);
    var ex04_y4 = parseFloat(document.getElementById("ex04_y4").value);

    var ex04_kc1 = Math.sqrt((ex04_x4 - ex04_x1)*(ex04_x4 - ex04_x1) + (ex04_y4 - ex04_y1)*(ex04_y4 - ex04_y1));
    var ex04_kc2 = Math.sqrt((ex04_x4 - ex04_x2)*(ex04_x4 - ex04_x2) + (ex04_y4 - ex04_y2)*(ex04_y4 - ex04_y2));
    var ex04_kc3 = Math.sqrt((ex04_x4 - ex04_x3)*(ex04_x4 - ex04_x3) + (ex04_y4 - ex04_y3)*(ex04_y4 - ex04_y3));

    if (ex04_kc1 > ex04_kc2 && ex04_kc1 > ex04_kc3){
        document.getElementById("ex04_result").innerHTML = "Bạn " + ex04_ten1 + " ở xa nhất"
        document.getElementById("ex04_result").classList.add("output");
    }

    if (ex04_kc2 > ex04_kc1 && ex04_kc2 > ex04_kc3){
        document.getElementById("ex04_result").innerHTML = "Bạn " + ex04_ten2 + " ở xa nhất"
        document.getElementById("ex04_result").classList.add("output");
    }

    if (ex04_kc3 > ex04_kc1 && ex04_kc3 > ex04_kc2){
        document.getElementById("ex04_result").innerHTML = "Bạn " + ex04_ten3 + " ở xa nhất"
        document.getElementById("ex04_result").classList.add("output");
    }
    
}