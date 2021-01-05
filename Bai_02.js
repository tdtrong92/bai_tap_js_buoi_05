
function tinhTienDien(event) {

    event.preventDefault();
    var name = document.getElementById("name").value;
    var soKwDien = +document.getElementById("soKwDien").value;
    var total = 0;

    if (soKwDien <= 50) {
        total = soKwDien * 500;

    } else if (soKwDien >= 51 && soKwDien <= 100) {
        total = 50 * 500 + (soKwDien - 50) * 650;

    } else if (soKwDien >= 101 && soKwDien <= 200) {
        total = 50 * 500 + 50 * 650 + (soKwDien - 100) * 850;

    } else if (soKwDien >= 201 && soKwDien <= 350) {
        total = 50 * 500 + 50 * 650 + 100 * 850 + (soKwDien - 200) * 1100;

    } else {
        total = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKwDien - 350) * 1300;
    }

    console.log(total);

    var currentFormat = new Intl.NumberFormat("vn-VN");
    total = currentFormat.format(total);

    document.getElementById("cardFooter").innerHTML = "Tiền điện tháng này " + name + " đã sử dụng hết " + total + " vnd";
}