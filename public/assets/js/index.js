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

const jokeContainer = $("<div class='joke-container'>")

$(document).ready(function () {
    //  click events
    // sign up form
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

    });

    function signUpUser(name, username, password) {
        $.post("/api/signup", {
            name: name,
            userName: username,
            password: password
        }).then(function (data) {
            // redirect to the profile
            // window.location.replace("/profile");
        })
            .catch(handleLoginErr);
        // creating a function for catching the error
        // If there's an error, handle it by throwing up a bootstrap alert
        function handleLoginErr(err) {
            $("#alert .msg").text(err.responseJSON);
            $("#alert").fadeIn(500);
        }
    }
    // sign in form
    signInForm.submit(function (event) {
        event.preventDefault();
        var userData = {
            userName: userName.val().trim(),
            password: password.val().trim()
        };
        if (!userData.username || userData.password) {
            return;
        };
        // setting feilds 
    });
    function updatePage() {
        var joke = joke.joke;
        $jokeContainer.append(
            "<div class'joke-div'>" +
            joke +
            "</div>"
        );
    };
    function findJoke() {
        var url = "https://icanhazdadjoke.com/?accept=application/json/search"
        $.ajax({
            url: url,
            method: "GET"
        }).then(updatePage);
    };
    findJoke();
    // this bottom is for the document.ready
})


