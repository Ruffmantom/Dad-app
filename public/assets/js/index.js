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


//  click events
// sign up form
signUpForm.submit(function (event) {
    event.preventDefault();
});
// sign in form
signInForm.submit(function (event) {
    event.preventDefault();
});
// API calls
console.log("HELLOOOO"); 