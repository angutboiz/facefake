document.addEventListener("submit", function (e) {
    e.preventDefault();

    var email = e.target.email.value;
    var password = e.target.password.value;
    var repassword = e.target.repassword.value;

    console.log(email, password, repassword);
});
