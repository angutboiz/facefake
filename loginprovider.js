var btnGoogle = document.querySelector(".btngoogle");

btnGoogle.addEventListener("click", function () {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            console.log(result.user);
            window.location.href = "/index.html";
        })
        .catch(function (error) {
            Swal.fire({
                icon: "error",
                title: "Google login failed",
            });
        });
});
