const loginUsername = $("#login-username");
const loginPassword = $("#login-password");
const logIn = $("#sign-in");
const logInForm = $("form#sign-in-form");

$(document).ready(function () {

    logInForm.on("submit", function (event) {
        event.preventDefault();
        var userData = {
            uN: loginUsername.val().trim(),
            pass: loginPassword.val().trim()
        };
        if (!userData.uN || !userData.pass) {
            return;
        };
        signIn(userData.uN, userData.pass);
        // resetting feilds
        loginUsername.val("");
        loginPassword.val("");


    });
    // to actualy sign in
    function signIn(username, password) {
        $.post("/api/login", {
            username: username,
            password: password
        }).then(function () {
            window.location.replace("/profile");
            // If there's an error, log the error
        })
            .catch(function (err) {
                console.log(err);
            });
    }

})