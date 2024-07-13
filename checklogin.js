var login = document.querySelector(".login");
var profile = document.querySelector(".profile");
var logout = document.querySelector(".logout");
var avatar = document.querySelector(".avatar");

profile.addEventListener("click", function (e) {
    console.log("login");
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var uid = user.uid;
        login.classList.add("hidden");
        profile.classList.remove("hidden");
        avatar.src = user.photoURL;
    } else {
        login.classList.remove("hidden");
        profile.classList.add("hidden");
    }
});

logout.addEventListener("click", function () {
    firebase
        .auth()
        .signOut()
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            // An error happened.
        });
});
