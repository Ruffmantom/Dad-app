$(document).ready(function () {
    const signUpForm = $("form#sign-up-form");
    const name = $("#name");
    const userName = $("#username");
    const password = $("#password");
    const signUp = $("#sign-up-btn");

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
            username: username,
            password: password
        }).catch(handleLoginErr);
        // creating a function for catching the error
        // If there's an error, handle it by throwing up a bootstrap alert
        function handleLoginErr(err) {
            $("#alert .msg").text(err.responseJSON);
            $("#alert").fadeIn(500);
        }
    }


})