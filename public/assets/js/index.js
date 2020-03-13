// all of the Jquery and JS for the html in here
const signUpForm = $("form#sign-up-form");
const logInForm = $("form#sign-in-form");
// buttons
const logIn = $("#sign-in");
const signUp = $("#sign-up-btn");
// inputs
const name = $("#name");
const userName = $("#username");
const password = $("#password");
const loginUsername = $("#login-username");
const loginPassword = $("#login-password");

//const jokeContainer = $("<div class='joke-container'>")

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
        console.log("reassigning jokes")
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
    logInForm.submit(function (event) {
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
        //  redirect to profile
        location.assign("/profile");
    });
    // to actualy sign in
    function signIn(username, password) {
        $.post("/api/login", {
            userName: username,
            password: password
        }).catch(function (err) {
            console.log(err);
        })
    }

})