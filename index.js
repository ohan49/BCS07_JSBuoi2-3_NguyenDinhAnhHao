// BT1
/*
Sơ đồ 3 khối
Đề bài: Tính tiền lương nhân viên. lương 1 ngày : 100.000. Cho người dùng nhập số ngày làm.
input: số ngày làm, lương 1 ngày : 100.000.
Các bước xử lý: Lấy dữ liệu từ input sau đó *1 để ép kiểu thành number. Rồi tính tiền lương theo công thức:lương 1 ngày * 100000. 
output: số tiền lương in ra màn hình.
*/

function tinhLuong() {
    var soNgay = document.getElementById("k").value*1;
    var tienLuong = 100000 * soNgay;
    document.querySelector(".bt1").innerHTML = "Số tiền lương phải trả là: " + tienLuong;
}

// BT2 

/*
Sơ đồ 3 khối
Đề bài: Viết phương trình nhập vào 5 số thực. Tính giá trị trung bình của 5 số và xuất ra màn hình.
input: 5 số thực bất kì.
Các bước xử lý: Lấy dữ liệu từ input sau đó *1 để ép kiểu thành number. Rồi tính trung bình 5 số theo công thức: Tổng 5 số /5. 
output: Trung bình 5 số in ra màn hình.
*/

function tinhTB() {
    var so1 = document.getElementById("so1").value*1;
    var so2 = document.getElementById("so2").value*1;
    var so3 = document.getElementById("so3").value*1;
    var so4 = document.getElementById("so4").value*1;
    var so5 = document.getElementById("so5").value*1;
    var giaTriTB = (so1 + so2 + so3 + so4 + so5)/5;
    document.querySelector(".bt2").innerHTML = "Trung bình 5 số là: " + giaTriTB;
}

// BT3

/*
Sơ đồ 3 khối
Đề bài: Giá USD hiện nay đang là 23.500VND. Viết chương trình quy đổi từ USD sang VND. cho người dùng nhập vào số USD. Tính và xuất ra màn hình số tiền đã quy đổi.
input: số tiền USD, 1USD = 23000VND
Các bước xử lý: Lấy dữ liệu từ input sau đó *1 để ép kiểu thành number. Rồi tính số tiền quy đổi theo công thức: số tiền USD * 23000. 
output: số tiền quy đổi in ra màn hình.
*/

function tinhTien() {
    var soTien = document.getElementById("soTien").value*1;
    var quyDoi = soTien * 23500;
    document.querySelector(".bt3").innerHTML = "Quy đổi: " + quyDoi + " VND";
}

// BT4

/*
Sơ đồ 3 khối
Đề bài: Viết chương trình nhập vào chiều dài và chiều rộng của 1 hình chữ nhật. Tính và xuất ra diện tích và chu vi của hình chữ nhật đó. 
input: chiều dài, chiều rộng
Các bước xử lý: Lấy dữ liệu từ input sau đó *1 để ép kiểu thành number. Rồi tính  chu vi và diện tích theo công thức: cv = (chiều dài +chiều rộng)*2, dt = chiều dài * chiều rộng. 
output: chu vi, diện tích in ra màn hình.
*/

function tinhCVDT() {
    var cd = document.getElementById("cd").value*1;
    var cr = document.getElementById("cr").value*1;
    var cv = (cd + cr) * 2;
    var dt = cd * cr;
    document.querySelector(".bt4").innerHTML = "Chu vi: " + cv + "<br>" + "Dien tích: " + dt;
}

// BT5

/*
Sơ đồ 3 khối
Đề bài: Viết chương trình nhập vào 1 số có 2 chữ số. Tính tổng hai ký số của số vừa nhập.
input: số có 2 chữ số.
Các bước xử lý: Lấy dữ liệu từ input sau đó *1 để ép kiểu thành number. Rồi tính tổng 2 ký số theo công thức n%10 + n/10. dùng math.floor để làm tròn xuống để lấy số thứ 2.
output: tổng 2 ký số in ra màn hình.
*/

function tinhTong() {
    var soThuNhat = document.getElementById("soThuNhat").value*1;
    var tongKySo1 = soThuNhat % 10 + Math.floor(soThuNhat / 10);
    document.querySelector(".bt5").innerHTML = "Tổng ký số: " + tongKySo1;

}