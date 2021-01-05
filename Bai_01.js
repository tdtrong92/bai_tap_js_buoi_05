function tinhDiemThi(event) {
    event.preventDefault();

    var khuVuc = document.getElementById("khuVuc").value;
    var diemKhuVuc = 0;
    if (khuVuc === "A") {
        diemKhuVuc = 2;
    } else if (khuVuc === "B") {
        diemKhuVuc = 1;
    } else if (khuVuc === "C") {
        diemKhuVuc = 0.5;
    } else {
        diemKhuVuc = 0;
    }


    var doiTuong = document.getElementById("doiTuong").value;
    var diemDoiTuong = 0;

    if (doiTuong === "1") {
        diemDoiTuong = 2.5;
    } else if (doiTuong === "2") {
        diemDoiTuong = 1.5;
    } else if (doiTuong === "3") {
        diemDoiTuong = 1;
    } else {
        diemDoiTuong = 0;
    }

    var diemChuan = +document.getElementById("diemChuan").value;
    var diem1 = +document.getElementById("diem1").value;
    var diem2 = +document.getElementById("diem2").value;
    var diem3 = +document.getElementById("diem3").value;

    console.log(diemChuan, diem1, diem2, diem3);

    if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
        document.getElementById("cardFooter").innerHTML = "Bạn đã rớt"
    } else {
        var tongDiem = diem1 + diem2 + diem3;
        var ketQua = tongDiem + diemKhuVuc + diemDoiTuong;

        console.log("tong diem " + tongDiem);
        console.log("ket qua " + ketQua);

        if (ketQua >= diemChuan) {
            var check = "Đậu";
        } else {
            check = "rớt";
        }
        document.getElementById("cardFooter").innerHTML = "Bạn đã " + check + " với tổng điểm là " + ketQua;
    }


    // var ketQua = tongDiem + diemKhuVuc + diemDoiTuong;

    // console.log("tong diem " + tongDiem);
    // console.log("ket qua " + ketQua);

    // if (ketQua >= diemChuan) {
    //     var check = "Đậu";
    // } else {
    //     check = "rớt";
    // }
    // document.getElementById("cardFooter").innerHTML = "Bạn đã " + check + " với tổng điểm là " + ketQua;


}

