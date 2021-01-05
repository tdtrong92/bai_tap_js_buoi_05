function tinhTienCap(event) {
    event.preventDefault();

    var phiHoaDon = 0;
    var phiCoBan = 0;
    var phiCaoCap = 0;

    var maKhachHang = +document.getElementById("maKhachHang").value;
    var ketNoiCoBan = +document.getElementById("ketNoiCoBan").value;
    var kenhCaoCap = +document.getElementById("kenhCaoCap").value;

    var total = 0;

    if (maKhachHang === 1) {
        phiHoaDon = 4.5;
        phiCoBan = 20.5;
        phiCaoCap = 7.5 * kenhCaoCap;
        total = phiHoaDon + phiCoBan + phiCaoCap;
        console.log(total);

        document.getElementById("cardFooter").innerHTML = "Tổng hóa đơn cáp Nhà Dân là " + total + "$";
    } else {
        phiHoaDon = 15;
        phiCoBan = 75 + (ketNoiCoBan - 10) * 5;
        phiCaoCap = 50 * kenhCaoCap;
        total = phiHoaDon + phiCoBan + phiCaoCap;
        console.log(total);

        document.getElementById("cardFooter").innerHTML = "Tổng hóa đơn cáp Doang Nghiệp là " + total + "$";
    }

}