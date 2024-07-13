document.addEventListener("submit", function (e) {
    e.preventDefault();

    var email = e.target.email.value;
    var password = e.target.password.value;
    var repassword = e.target.repassword.value;

    if (email === "" || password === "" || repassword === "") {
        Swal.fire({
            title: "Email, Password không bỏ trống",
            icon: "warning",
        });
        return;
    } else if (password !== repassword) {
        Swal.fire({
            title: "Password không khớp",
            icon: "warning",
        });
        return;
    } else {
        //ket noi toi firebase
    }
});
