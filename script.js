function validateForm() {
    var x = document.forms["myForm"]["firstname"]["lastname"]["password"]["retypepassword"]["email"].value;
    if (x == "") {
        alert("Chưa điền thông tin");
        return false;
    }
    else {
        alert("Chúc mừng bạn đã đăng kí thành công");
    }
}