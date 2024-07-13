var nameProfile = document.querySelector(".name");
var email = document.querySelector(".email");
var avatarProfile = document.querySelector(".avatar-profile");
var img = document.querySelector("#img");
var createTime = document.querySelector(".creation-time") || "";

console.log(nameProfile, email, avatar);

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
        nameProfile.innerHTML = user.displayName;
        email.innerHTML = user.email;
        createTime.innerHTML = "Ngày tạo: " + new Date(user.metadata.creationTime).toLocaleDateString("vi-VN");
        avatarProfile.src = user.photoURL;

        nameProfile.value = user.displayName;
        email.value = user.email;
        img.value = user.photoURL;
    } else {
    }
});

document.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target.img.value);
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: e.target.name.value,
        photoURL: e.target.img.value,
        email: e.target.email.value,
    })
        .then(() => {
            window.location.href = "./profile.html";
        })
        .catch((error) => {
            // An error occurred
            // ...
        });
});
