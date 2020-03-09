// all of the Jquery and JS for the html in here
const signUpForm = $("#sign-up-form");
const signInForm = $("#sign-in-form");
// buttons
const logIn = $("#sign-in");
const signUp = $("#sign-up-btn");
// inputs
const name = $("#name");
const userName = $("#username");
const password = $("#password");
const loginUsername = $("#login-username");
const loginPassword = $("#login-password");

$(document).ready(function () {
    //  click events
    // sign up form ========================================================
    signUpForm.submit(function (event) {
        event.preventDefault();
        var userData = {
            name: name.val().trim(),
            username: userName.val().trim(),
            password: password.val().trim()
        };

        if (!userData.username || !userData.password) {
            return;
        };
        signUpUser(userData.name, userData.username, userData.password)
        // setting the feilds back to blank once submitted
        name.val("");
        userName.val("");
        password.val("");
        // redirect to the jokes
        console.log("reassinging jokes")
        location.assign("/jokes");
    });

    function signUpUser(name, username, password) {
        $.post("/api/signup", {
            name: name,
            userName: username,
            password: password
        }).catch(handleLoginErr);
        // creating a function for catching the error
        // If there's an error, handle it by throwing up a bootstrap alert
        function handleLoginErr(err) {
            $("#alert .msg").text(err.responseJSON);
            $("#alert").fadeIn(500);
        }
    }


    // sign in form ===========================================================
    signInForm.submit(function (event) {
        event.preventDefault();
        var userData = {
            userName: userName.val().trim(),
            password: password.val().trim()
        };
        if (!userData.username || !userData.password) {
            return;
        };
        signIn(userData.userName, userData.password);
        // resetting feilds
        loginUsername.val("");
        loginPassword.val("");
        //  redirect to profile
        location.assign("/profile");
    });
    // to actualy sign in
    function signIn(username, password) {
        $.post("api/login", {
            userName: userName,
            password: password
        }).catch(function (err) {
            console.log(err);
        })
    }

    // this bottom is for the document.ready
})


